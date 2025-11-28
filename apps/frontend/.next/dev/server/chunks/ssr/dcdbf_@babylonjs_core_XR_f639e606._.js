module.exports = [
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/webXRFeaturesManager.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WebXRFeatureName",
    ()=>WebXRFeatureName,
    "WebXRFeaturesManager",
    ()=>WebXRFeaturesManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/tools.js [app-ssr] (ecmascript)");
;
class WebXRFeatureName {
}
/**
 * The name of the anchor system feature
 */ WebXRFeatureName.ANCHOR_SYSTEM = "xr-anchor-system";
/**
 * The name of the background remover feature
 */ WebXRFeatureName.BACKGROUND_REMOVER = "xr-background-remover";
/**
 * The name of the hit test feature
 */ WebXRFeatureName.HIT_TEST = "xr-hit-test";
/**
 * The name of the mesh detection feature
 */ WebXRFeatureName.MESH_DETECTION = "xr-mesh-detection";
/**
 * physics impostors for xr controllers feature
 */ WebXRFeatureName.PHYSICS_CONTROLLERS = "xr-physics-controller";
/**
 * The name of the plane detection feature
 */ WebXRFeatureName.PLANE_DETECTION = "xr-plane-detection";
/**
 * The name of the pointer selection feature
 */ WebXRFeatureName.POINTER_SELECTION = "xr-controller-pointer-selection";
/**
 * The name of the teleportation feature
 */ WebXRFeatureName.TELEPORTATION = "xr-controller-teleportation";
/**
 * The name of the feature points feature.
 */ WebXRFeatureName.FEATURE_POINTS = "xr-feature-points";
/**
 * The name of the hand tracking feature.
 */ WebXRFeatureName.HAND_TRACKING = "xr-hand-tracking";
/**
 * The name of the image tracking feature
 */ WebXRFeatureName.IMAGE_TRACKING = "xr-image-tracking";
/**
 * The name of the near interaction feature
 */ WebXRFeatureName.NEAR_INTERACTION = "xr-near-interaction";
/**
 * The name of the DOM overlay feature
 */ WebXRFeatureName.DOM_OVERLAY = "xr-dom-overlay";
/**
 * The name of the movement feature
 */ WebXRFeatureName.MOVEMENT = "xr-controller-movement";
/**
 * The name of the light estimation feature
 */ WebXRFeatureName.LIGHT_ESTIMATION = "xr-light-estimation";
/**
 * The name of the eye tracking feature
 */ WebXRFeatureName.EYE_TRACKING = "xr-eye-tracking";
/**
 * The name of the walking locomotion feature
 */ WebXRFeatureName.WALKING_LOCOMOTION = "xr-walking-locomotion";
/**
 * The name of the composition layers feature
 */ WebXRFeatureName.LAYERS = "xr-layers";
/**
 * The name of the depth sensing feature
 */ WebXRFeatureName.DEPTH_SENSING = "xr-depth-sensing";
/**
 * The name of the WebXR Space Warp feature
 */ WebXRFeatureName.SPACE_WARP = "xr-space-warp";
/**
 * The name of the WebXR Raw Camera Access feature
 */ WebXRFeatureName.RAW_CAMERA_ACCESS = "xr-raw-camera-access";
class WebXRFeaturesManager {
    /**
     * constructs a new features manages.
     *
     * @param _xrSessionManager an instance of WebXRSessionManager
     */ constructor(_xrSessionManager){
        this._xrSessionManager = _xrSessionManager;
        this._features = {};
        // when session starts / initialized - attach
        this._xrSessionManager.onXRSessionInit.add(()=>{
            const features = this.getEnabledFeatures();
            for (const featureName of features){
                const feature = this._features[featureName];
                if (feature.enabled && !feature.featureImplementation.attached && !feature.featureImplementation.disableAutoAttach) {
                    this.attachFeature(featureName);
                }
            }
        });
        // when session ends - detach
        this._xrSessionManager.onXRSessionEnded.add(()=>{
            const features = this.getEnabledFeatures();
            for (const featureName of features){
                const feature = this._features[featureName];
                if (feature.enabled && feature.featureImplementation.attached) {
                    // detach, but don't disable!
                    this.detachFeature(featureName);
                }
            }
        });
    }
    /**
     * Used to register a module. After calling this function a developer can use this feature in the scene.
     * Mainly used internally.
     *
     * @param featureName the name of the feature to register
     * @param constructorFunction the function used to construct the module
     * @param version the (babylon) version of the module
     * @param stable is that a stable version of this module
     */ static AddWebXRFeature(featureName, constructorFunction, version = 1, stable = false) {
        this._AvailableFeatures[featureName] = this._AvailableFeatures[featureName] || {
            latest: version
        };
        if (version > this._AvailableFeatures[featureName].latest) {
            this._AvailableFeatures[featureName].latest = version;
        }
        if (stable) {
            this._AvailableFeatures[featureName].stable = version;
        }
        this._AvailableFeatures[featureName][version] = constructorFunction;
    }
    /**
     * Returns a constructor of a specific feature.
     *
     * @param featureName the name of the feature to construct
     * @param version the version of the feature to load
     * @param xrSessionManager the xrSessionManager. Used to construct the module
     * @param options optional options provided to the module.
     * @returns a function that, when called, will return a new instance of this feature
     */ static ConstructFeature(featureName, version = 1, xrSessionManager, options) {
        const constructorFunction = this._AvailableFeatures[featureName][version];
        if (!constructorFunction) {
            // throw an error? return nothing?
            throw new Error("feature not found");
        }
        return constructorFunction(xrSessionManager, options);
    }
    /**
     * Can be used to return the list of features currently registered
     *
     * @returns an Array of available features
     */ static GetAvailableFeatures() {
        return Object.keys(this._AvailableFeatures);
    }
    /**
     * Gets the versions available for a specific feature
     * @param featureName the name of the feature
     * @returns an array with the available versions
     */ static GetAvailableVersions(featureName) {
        return Object.keys(this._AvailableFeatures[featureName]);
    }
    /**
     * Return the latest unstable version of this feature
     * @param featureName the name of the feature to search
     * @returns the version number. if not found will return -1
     */ static GetLatestVersionOfFeature(featureName) {
        return this._AvailableFeatures[featureName] && this._AvailableFeatures[featureName].latest || -1;
    }
    /**
     * Return the latest stable version of this feature
     * @param featureName the name of the feature to search
     * @returns the version number. if not found will return -1
     */ static GetStableVersionOfFeature(featureName) {
        return this._AvailableFeatures[featureName] && this._AvailableFeatures[featureName].stable || -1;
    }
    /**
     * Attach a feature to the current session. Mainly used when session started to start the feature effect.
     * Can be used during a session to start a feature
     * @param featureName the name of feature to attach
     */ attachFeature(featureName) {
        const feature = this._features[featureName];
        if (feature && feature.enabled && !feature.featureImplementation.attached) {
            const attached = feature.featureImplementation.attach();
            if (!attached) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tools"].Warn(`Feature ${featureName} failed to attach`);
            }
        }
    }
    /**
     * Can be used inside a session or when the session ends to detach a specific feature
     * @param featureName the name of the feature to detach
     */ detachFeature(featureName) {
        const feature = this._features[featureName];
        if (feature && feature.featureImplementation.attached) {
            const detached = feature.featureImplementation.detach();
            if (!detached) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tools"].Warn(`Feature ${featureName} failed to detach`);
            }
        }
    }
    /**
     * Used to disable an already-enabled feature
     * The feature will be disposed and will be recreated once enabled.
     * @param featureName the feature to disable
     * @returns true if disable was successful
     */ // eslint-disable-next-line @typescript-eslint/naming-convention
    disableFeature(featureName) {
        const name = typeof featureName === "string" ? featureName : featureName.Name;
        const feature = this._features[name];
        if (feature && feature.enabled) {
            feature.enabled = false;
            this.detachFeature(name);
            feature.featureImplementation.dispose();
            delete this._features[name];
            return true;
        }
        return false;
    }
    /**
     * dispose this features manager
     */ dispose() {
        const features = this.getEnabledFeatures();
        for (const featureName of features){
            this.disableFeature(featureName);
        }
    }
    /**
     * Enable a feature using its name and a version. This will enable it in the scene, and will be responsible to attach it when the session starts.
     * If used twice, the old version will be disposed and a new one will be constructed. This way you can re-enable with different configuration.
     *
     * @param featureName the name of the feature to load or the class of the feature
     * @param version optional version to load. if not provided the latest version will be enabled
     * @param moduleOptions options provided to the module. Ses the module documentation / constructor
     * @param attachIfPossible if set to true (default) the feature will be automatically attached, if it is currently possible
     * @param required is this feature required to the app. If set to true the session init will fail if the feature is not available.
     * @returns a new constructed feature or throws an error if feature not found or conflicts with another enabled feature.
     */ enableFeature(// eslint-disable-next-line @typescript-eslint/naming-convention
    featureName, version = "latest", moduleOptions = {}, attachIfPossible = true, required = true) {
        const name = typeof featureName === "string" ? featureName : featureName.Name;
        let versionToLoad = 0;
        if (typeof version === "string") {
            if (!version) {
                throw new Error(`Error in provided version - ${name} (${version})`);
            }
            if (version === "stable") {
                versionToLoad = WebXRFeaturesManager.GetStableVersionOfFeature(name);
            } else if (version === "latest") {
                versionToLoad = WebXRFeaturesManager.GetLatestVersionOfFeature(name);
            } else {
                // try loading the number the string represents
                versionToLoad = +version;
            }
            if (versionToLoad === -1 || isNaN(versionToLoad)) {
                throw new Error(`feature not found - ${name} (${version})`);
            }
        } else {
            versionToLoad = version;
        }
        // check if there is a feature conflict
        const conflictingFeature = WebXRFeaturesManager._ConflictingFeatures[name];
        if (conflictingFeature !== undefined && this.getEnabledFeatures().indexOf(conflictingFeature) !== -1) {
            throw new Error(`Feature ${name} cannot be enabled while ${conflictingFeature} is enabled.`);
        }
        // check if already initialized
        const feature = this._features[name];
        const constructFunction = WebXRFeaturesManager.ConstructFeature(name, versionToLoad, this._xrSessionManager, moduleOptions);
        if (!constructFunction) {
            // report error?
            throw new Error(`feature not found - ${name}`);
        }
        /* If the feature is already enabled, detach and dispose it, and create a new one */ if (feature) {
            this.disableFeature(name);
        }
        const constructed = constructFunction();
        if (constructed.dependsOn) {
            const dependentsFound = constructed.dependsOn.every((featureName)=>!!this._features[featureName]);
            if (!dependentsFound) {
                throw new Error(`Dependant features missing. Make sure the following features are enabled - ${constructed.dependsOn.join(", ")}`);
            }
        }
        if (constructed.isCompatible()) {
            this._features[name] = {
                featureImplementation: constructed,
                enabled: true,
                version: versionToLoad,
                required
            };
            if (attachIfPossible) {
                // if session started already, request and enable
                if (this._xrSessionManager.session && !this._features[name].featureImplementation.attached) {
                    // enable feature
                    this.attachFeature(name);
                }
            } else {
                // disable auto-attach when session starts
                this._features[name].featureImplementation.disableAutoAttach = true;
            }
            return this._features[name].featureImplementation;
        } else {
            if (required) {
                throw new Error("required feature not compatible");
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tools"].Warn(`Feature ${name} not compatible with the current environment/browser and was not enabled.`);
                return constructed;
            }
        }
    }
    /**
     * get the implementation of an enabled feature.
     * @param featureName the name of the feature to load
     * @returns the feature class, if found
     */ getEnabledFeature(featureName) {
        return this._features[featureName] && this._features[featureName].featureImplementation;
    }
    /**
     * Get the list of enabled features
     * @returns an array of enabled features
     */ getEnabledFeatures() {
        return Object.keys(this._features);
    }
    /**
     * This function will extend the session creation configuration object with enabled features.
     * If, for example, the anchors feature is enabled, it will be automatically added to the optional or required features list,
     * according to the defined "required" variable, provided during enableFeature call
     * @param xrSessionInit the xr Session init object to extend
     *
     * @returns an extended XRSessionInit object
     */ async _extendXRSessionInitObject(xrSessionInit) {
        const enabledFeatures = this.getEnabledFeatures();
        for (const featureName of enabledFeatures){
            const feature = this._features[featureName];
            const nativeName = feature.featureImplementation.xrNativeFeatureName;
            if (nativeName) {
                if (feature.required) {
                    xrSessionInit.requiredFeatures = xrSessionInit.requiredFeatures || [];
                    if (xrSessionInit.requiredFeatures.indexOf(nativeName) === -1) {
                        xrSessionInit.requiredFeatures.push(nativeName);
                    }
                } else {
                    xrSessionInit.optionalFeatures = xrSessionInit.optionalFeatures || [];
                    if (xrSessionInit.optionalFeatures.indexOf(nativeName) === -1) {
                        xrSessionInit.optionalFeatures.push(nativeName);
                    }
                }
            }
            if (feature.featureImplementation.getXRSessionInitExtension) {
                // eslint-disable-next-line no-await-in-loop
                const extended = await feature.featureImplementation.getXRSessionInitExtension();
                xrSessionInit = {
                    ...xrSessionInit,
                    ...extended
                };
            }
        }
        return xrSessionInit;
    }
}
WebXRFeaturesManager._AvailableFeatures = {};
/**
 * The key is the feature to check and the value is the feature that conflicts.
 */ WebXRFeaturesManager._ConflictingFeatures = {
    [WebXRFeatureName.TELEPORTATION]: WebXRFeatureName.MOVEMENT,
    [WebXRFeatureName.MOVEMENT]: WebXRFeatureName.TELEPORTATION
}; //# sourceMappingURL=webXRFeaturesManager.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/webXRLayerWrapper.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Wrapper over subclasses of XRLayer.
 * @internal
 */ __turbopack_context__.s([
    "WebXRLayerWrapper",
    ()=>WebXRLayerWrapper
]);
class WebXRLayerWrapper {
    /**
     * Check if fixed foveation is supported on this device
     */ get isFixedFoveationSupported() {
        return this.layerType == "XRWebGLLayer" && typeof this.layer.fixedFoveation == "number";
    }
    /**
     * Get the fixed foveation currently set, as specified by the webxr specs
     * If this returns null, then fixed foveation is not supported
     */ get fixedFoveation() {
        if (this.isFixedFoveationSupported) {
            return this.layer.fixedFoveation;
        }
        return null;
    }
    /**
     * Set the fixed foveation to the specified value, as specified by the webxr specs
     * This value will be normalized to be between 0 and 1, 1 being max foveation, 0 being no foveation
     */ set fixedFoveation(value) {
        if (this.isFixedFoveationSupported) {
            const val = Math.max(0, Math.min(1, value || 0));
            this.layer.fixedFoveation = val;
        }
    }
    /**
     * Create a render target provider for the wrapped layer.
     * @param xrSessionManager The XR Session Manager
     * @returns A new render target texture provider for the wrapped layer.
     */ createRenderTargetTextureProvider(xrSessionManager) {
        this._rttWrapper = this._createRenderTargetTextureProvider(xrSessionManager);
        return this._rttWrapper;
    }
    dispose() {
        if (this._rttWrapper) {
            this._rttWrapper.dispose();
            this._rttWrapper = null;
        }
    }
    constructor(/** The width of the layer's framebuffer. */ getWidth, /** The height of the layer's framebuffer. */ getHeight, /** The XR layer that this WebXRLayerWrapper wraps. */ layer, /** The type of XR layer that is being wrapped. */ layerType, /** Create a render target provider for the wrapped layer. */ _createRenderTargetTextureProvider){
        this.getWidth = getWidth;
        this.getHeight = getHeight;
        this.layer = layer;
        this.layerType = layerType;
        this._createRenderTargetTextureProvider = _createRenderTargetTextureProvider;
        this._rttWrapper = null;
    }
} //# sourceMappingURL=webXRLayerWrapper.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/webXRRenderTargetTextureProvider.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WebXRLayerRenderTargetTextureProvider",
    ()=>WebXRLayerRenderTargetTextureProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGL$2f$webGLHardwareTexture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGL/webGLHardwareTexture.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$internalTexture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/internalTexture.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$MultiviewRenderTarget$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/MultiviewRenderTarget.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$renderTargetTexture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/renderTargetTexture.js [app-ssr] (ecmascript)");
;
;
;
;
class WebXRLayerRenderTargetTextureProvider {
    constructor(_scene, layerWrapper){
        this._scene = _scene;
        this.layerWrapper = layerWrapper;
        this._renderTargetTextures = new Array();
        this._engine = _scene.getEngine();
    }
    _createInternalTexture(textureSize, texture) {
        const internalTexture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$internalTexture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InternalTexture"](this._engine, 0 /* InternalTextureSource.Unknown */ , true);
        internalTexture.width = textureSize.width;
        internalTexture.height = textureSize.height;
        internalTexture._hardwareTexture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGL$2f$webGLHardwareTexture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebGLHardwareTexture"](texture, this._engine._gl);
        internalTexture.isReady = true;
        return internalTexture;
    }
    _createRenderTargetTexture(width, height, framebuffer, colorTexture, depthStencilTexture, multiview) {
        if (!this._engine) {
            throw new Error("Engine is disposed");
        }
        const textureSize = {
            width,
            height
        };
        // Create render target texture from the internal texture
        const renderTargetTexture = multiview ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$MultiviewRenderTarget$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MultiviewRenderTarget"](this._scene, textureSize) : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$renderTargetTexture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RenderTargetTexture"]("XR renderTargetTexture", textureSize, this._scene);
        const renderTargetWrapper = renderTargetTexture.renderTarget;
        renderTargetWrapper._samples = renderTargetTexture.samples;
        // Set the framebuffer, make sure it works in all scenarios - emulator, no layers and layers
        if (framebuffer || !colorTexture) {
            renderTargetWrapper._framebuffer = framebuffer;
        }
        // Create internal texture
        if (colorTexture) {
            if (multiview) {
                renderTargetWrapper._colorTextureArray = colorTexture;
            } else {
                const internalTexture = this._createInternalTexture(textureSize, colorTexture);
                renderTargetWrapper.setTexture(internalTexture, 0);
                renderTargetTexture._texture = internalTexture;
            }
        }
        if (depthStencilTexture) {
            if (multiview) {
                renderTargetWrapper._depthStencilTextureArray = depthStencilTexture;
            } else {
                renderTargetWrapper._depthStencilTexture = this._createInternalTexture(textureSize, depthStencilTexture);
            }
        }
        renderTargetTexture.disableRescaling();
        this._renderTargetTextures.push(renderTargetTexture);
        return renderTargetTexture;
    }
    _destroyRenderTargetTexture(renderTargetTexture) {
        this._renderTargetTextures.splice(this._renderTargetTextures.indexOf(renderTargetTexture), 1);
        renderTargetTexture.dispose();
    }
    getFramebufferDimensions() {
        return this._framebufferDimensions;
    }
    dispose() {
        for (const rtt of this._renderTargetTextures){
            rtt.dispose();
        }
        this._renderTargetTextures.length = 0;
    }
} //# sourceMappingURL=webXRRenderTargetTextureProvider.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/webXRWebGLLayer.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WebXRWebGLLayerRenderTargetTextureProvider",
    ()=>WebXRWebGLLayerRenderTargetTextureProvider,
    "WebXRWebGLLayerWrapper",
    ()=>WebXRWebGLLayerWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRLayerWrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/webXRLayerWrapper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRRenderTargetTextureProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/webXRRenderTargetTextureProvider.js [app-ssr] (ecmascript)");
;
;
class WebXRWebGLLayerWrapper extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRLayerWrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRLayerWrapper"] {
    /**
     * @param layer is the layer to be wrapped.
     * @returns a new WebXRLayerWrapper wrapping the provided XRWebGLLayer.
     */ constructor(layer){
        super(()=>layer.framebufferWidth, ()=>layer.framebufferHeight, layer, "XRWebGLLayer", (sessionManager)=>new WebXRWebGLLayerRenderTargetTextureProvider(sessionManager.scene, this));
        this.layer = layer;
    }
}
class WebXRWebGLLayerRenderTargetTextureProvider extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRRenderTargetTextureProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRLayerRenderTargetTextureProvider"] {
    constructor(scene, layerWrapper){
        super(scene, layerWrapper);
        this.layerWrapper = layerWrapper;
        this._layer = layerWrapper.layer;
        this._framebufferDimensions = {
            framebufferWidth: this._layer.framebufferWidth,
            framebufferHeight: this._layer.framebufferHeight
        };
    }
    trySetViewportForView(viewport, view) {
        const xrViewport = this._layer.getViewport(view);
        if (!xrViewport) {
            return false;
        }
        const framebufferWidth = this._framebufferDimensions.framebufferWidth;
        const framebufferHeight = this._framebufferDimensions.framebufferHeight;
        viewport.x = xrViewport.x / framebufferWidth;
        viewport.y = xrViewport.y / framebufferHeight;
        viewport.width = xrViewport.width / framebufferWidth;
        viewport.height = xrViewport.height / framebufferHeight;
        return true;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getRenderTargetTextureForEye(eye) {
        const layerWidth = this._layer.framebufferWidth;
        const layerHeight = this._layer.framebufferHeight;
        const framebuffer = this._layer.framebuffer;
        if (!this._rtt || layerWidth !== this._framebufferDimensions.framebufferWidth || layerHeight !== this._framebufferDimensions.framebufferHeight || framebuffer !== this._framebuffer) {
            this._rtt = this._createRenderTargetTexture(layerWidth, layerHeight, framebuffer);
            this._framebufferDimensions.framebufferWidth = layerWidth;
            this._framebufferDimensions.framebufferHeight = layerHeight;
            this._framebuffer = framebuffer;
        }
        return this._rtt;
    }
    getRenderTargetTextureForView(view) {
        return this.getRenderTargetTextureForEye(view.eye);
    }
} //# sourceMappingURL=webXRWebGLLayer.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/webXRManagedOutputCanvas.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WebXRManagedOutputCanvas",
    ()=>WebXRManagedOutputCanvas,
    "WebXRManagedOutputCanvasOptions",
    ()=>WebXRManagedOutputCanvasOptions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/tools.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRWebGLLayer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/webXRWebGLLayer.js [app-ssr] (ecmascript)");
;
;
;
class WebXRManagedOutputCanvasOptions {
    /**
     * Get the default values of the configuration object
     * @param engine defines the engine to use (can be null)
     * @returns default values of this configuration object
     */ static GetDefaults(engine) {
        const defaults = new WebXRManagedOutputCanvasOptions();
        defaults.canvasOptions = {
            antialias: true,
            depth: true,
            stencil: engine ? engine.isStencilEnable : true,
            alpha: true,
            framebufferScaleFactor: 1
        };
        defaults.newCanvasCssStyle = "position:absolute; bottom:0px;right:0px;z-index:10;width:90%;height:100%;background-color: #000000;";
        return defaults;
    }
}
class WebXRManagedOutputCanvas {
    /**
     * Initializes the canvas to be added/removed upon entering/exiting xr
     * @param _xrSessionManager The XR Session manager
     * @param _options optional configuration for this canvas output. defaults will be used if not provided
     */ constructor(_xrSessionManager, _options = WebXRManagedOutputCanvasOptions.GetDefaults()){
        this._options = _options;
        this._canvas = null;
        this._engine = null;
        /**
         * xr layer for the canvas
         */ this.xrLayer = null;
        this._xrLayerWrapper = null;
        /**
         * Observers registered here will be triggered when the xr layer was initialized
         */ this.onXRLayerInitObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        this._engine = _xrSessionManager.scene.getEngine();
        this._engine.onDisposeObservable.addOnce(()=>{
            this._engine = null;
        });
        if (!_options.canvasElement) {
            const canvas = document.createElement("canvas");
            canvas.style.cssText = this._options.newCanvasCssStyle || "position:absolute; bottom:0px;right:0px;";
            this._setManagedOutputCanvas(canvas);
        } else {
            this._setManagedOutputCanvas(_options.canvasElement);
        }
        _xrSessionManager.onXRSessionInit.add(()=>{
            this._addCanvas();
        });
        _xrSessionManager.onXRSessionEnded.add(()=>{
            this._removeCanvas();
        });
        this._makeCanvasCompatible();
    }
    /**
     * Disposes of the object
     */ dispose() {
        this._removeCanvas();
        this._setManagedOutputCanvas(null);
        this.onXRLayerInitObservable.clear();
    }
    _makeCanvasCompatible() {
        this._canvasCompatiblePromise = new Promise((resolve, reject)=>{
            // stay safe - make sure the context has the function
            try {
                if (this.canvasContext && this.canvasContext.makeXRCompatible) {
                    // eslint-disable-next-line github/no-then
                    this.canvasContext.makeXRCompatible().then(()=>{
                        resolve();
                    }, ()=>{
                        // fail silently
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tools"].Warn("Error executing makeXRCompatible. This does not mean that the session will work incorrectly.");
                        resolve();
                    });
                } else {
                    resolve();
                }
            } catch (e) {
                // if this fails - the exception will be caught and the promise will be rejected
                // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
                reject(e);
            }
        });
    }
    /**
     * Initializes a XRWebGLLayer to be used as the session's baseLayer.
     * @param xrSession xr session
     * @returns a promise that will resolve once the XR Layer has been created
     */ async initializeXRLayerAsync(xrSession) {
        const createLayer = ()=>{
            this.xrLayer = new XRWebGLLayer(xrSession, this.canvasContext, this._options.canvasOptions);
            this._xrLayerWrapper = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRWebGLLayer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRWebGLLayerWrapper"](this.xrLayer);
            this.onXRLayerInitObservable.notifyObservers(this.xrLayer);
            return this.xrLayer;
        };
        return await this._canvasCompatiblePromise// eslint-disable-next-line github/no-then
        .then(// catch any error and continue. When using the emulator is throws this error for no apparent reason.
        ()=>{}, ()=>{})// eslint-disable-next-line github/no-then
        .then(()=>{
            return createLayer();
        });
    }
    _addCanvas() {
        if (this._canvas && this._engine && this._canvas !== this._engine.getRenderingCanvas()) {
            document.body.appendChild(this._canvas);
        }
        if (this.xrLayer) {
            this._setCanvasSize(true);
        } else {
            this.onXRLayerInitObservable.addOnce(()=>{
                this._setCanvasSize(true);
            });
        }
    }
    _removeCanvas() {
        if (this._canvas && this._engine && document.body.contains(this._canvas) && this._canvas !== this._engine.getRenderingCanvas()) {
            document.body.removeChild(this._canvas);
        }
        this._setCanvasSize(false);
    }
    _setCanvasSize(init = true, xrLayer = this._xrLayerWrapper) {
        if (!this._canvas || !this._engine) {
            return;
        }
        if (init) {
            if (xrLayer) {
                if (this._canvas !== this._engine.getRenderingCanvas()) {
                    this._canvas.style.width = xrLayer.getWidth() + "px";
                    this._canvas.style.height = xrLayer.getHeight() + "px";
                } else {
                    this._engine.setSize(xrLayer.getWidth(), xrLayer.getHeight());
                }
            }
        } else {
            if (this._originalCanvasSize) {
                if (this._canvas !== this._engine.getRenderingCanvas()) {
                    this._canvas.style.width = this._originalCanvasSize.width + "px";
                    this._canvas.style.height = this._originalCanvasSize.height + "px";
                } else {
                    this._engine.setSize(this._originalCanvasSize.width, this._originalCanvasSize.height);
                }
            }
        }
    }
    _setManagedOutputCanvas(canvas) {
        this._removeCanvas();
        if (!canvas) {
            this._canvas = null;
            this.canvasContext = null;
        } else {
            this._originalCanvasSize = {
                width: canvas.offsetWidth,
                height: canvas.offsetHeight
            };
            this._canvas = canvas;
            this.canvasContext = this._canvas.getContext("webgl2");
            if (!this.canvasContext) {
                this.canvasContext = this._canvas.getContext("webgl");
            }
        }
    }
} //# sourceMappingURL=webXRManagedOutputCanvas.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/native/nativeXRRenderTarget.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NativeXRLayerRenderTargetTextureProvider",
    ()=>NativeXRLayerRenderTargetTextureProvider,
    "NativeXRLayerWrapper",
    ()=>NativeXRLayerWrapper,
    "NativeXRRenderTarget",
    ()=>NativeXRRenderTarget
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRLayerWrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/webXRLayerWrapper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRRenderTargetTextureProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/webXRRenderTargetTextureProvider.js [app-ssr] (ecmascript)");
;
;
class NativeXRLayerWrapper extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRLayerWrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRLayerWrapper"] {
    constructor(layer){
        super(()=>layer.framebufferWidth, ()=>layer.framebufferHeight, layer, "XRWebGLLayer", (sessionManager)=>new NativeXRLayerRenderTargetTextureProvider(sessionManager, this));
        this.layer = layer;
    }
}
class NativeXRLayerRenderTargetTextureProvider extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRRenderTargetTextureProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRLayerRenderTargetTextureProvider"] {
    constructor(sessionManager, layerWrapper){
        super(sessionManager.scene, layerWrapper);
        this.layerWrapper = layerWrapper;
        this._nativeRTTProvider = navigator.xr.getNativeRenderTargetProvider(sessionManager.session, this._createRenderTargetTexture.bind(this), this._destroyRenderTargetTexture.bind(this));
        this._nativeLayer = layerWrapper.layer;
    }
    trySetViewportForView(viewport) {
        viewport.x = 0;
        viewport.y = 0;
        viewport.width = 1;
        viewport.height = 1;
        return true;
    }
    getRenderTargetTextureForEye(eye) {
        // TODO (rgerd): Update the contract on the BabylonNative side to call this "getRenderTargetTextureForEye"
        return this._nativeRTTProvider.getRenderTargetForEye(eye);
    }
    getRenderTargetTextureForView(view) {
        return this._nativeRTTProvider.getRenderTargetForEye(view.eye);
    }
    getFramebufferDimensions() {
        return {
            framebufferWidth: this._nativeLayer.framebufferWidth,
            framebufferHeight: this._nativeLayer.framebufferHeight
        };
    }
}
class NativeXRRenderTarget {
    constructor(_xrSessionManager){
        this._nativeRenderTarget = navigator.xr.getWebXRRenderTarget(_xrSessionManager.scene.getEngine());
    }
    async initializeXRLayerAsync(xrSession) {
        await this._nativeRenderTarget.initializeXRLayerAsync(xrSession);
        this.xrLayer = this._nativeRenderTarget.xrLayer;
        return this.xrLayer;
    }
    dispose() {
    /* empty */ }
} //# sourceMappingURL=nativeXRRenderTarget.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/webXRSessionManager.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WebXRSessionManager",
    ()=>WebXRSessionManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRManagedOutputCanvas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/webXRManagedOutputCanvas.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$native$2f$nativeXRRenderTarget$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/native/nativeXRRenderTarget.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRWebGLLayer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/webXRWebGLLayer.js [app-ssr] (ecmascript)");
;
;
;
;
;
class WebXRSessionManager {
    /**
     * Scale factor to apply to all XR-related elements (camera, controllers)
     */ get worldScalingFactor() {
        return this._worldScalingFactor;
    }
    set worldScalingFactor(value) {
        const oldValue = this._worldScalingFactor;
        this._worldScalingFactor = value;
        this.onWorldScaleFactorChangedObservable.notifyObservers({
            previousScaleFactor: oldValue,
            newScaleFactor: value
        });
    }
    /**
     * Constructs a WebXRSessionManager, this must be initialized within a user action before usage
     * @param scene The scene which the session should be created for
     */ constructor(/** The scene which the session should be created for */ scene){
        this.scene = scene;
        /** WebXR timestamp updated every frame */ this.currentTimestamp = -1;
        /**
         * Used just in case of a failure to initialize an immersive session.
         * The viewer reference space is compensated using this height, creating a kind of "viewer-floor" reference space
         */ this.defaultHeightCompensation = 1.7;
        /**
         * Fires every time a new xrFrame arrives which can be used to update the camera
         */ this.onXRFrameObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * Fires when the reference space changed
         */ this.onXRReferenceSpaceChanged = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * Fires when the xr session is ended either by the device or manually done
         */ this.onXRSessionEnded = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * Fires when the xr session is initialized: right after requestSession was called and returned with a successful result
         */ this.onXRSessionInit = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * Fires when the xr reference space has been initialized
         */ this.onXRReferenceSpaceInitialized = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * Fires when the session manager is rendering the first frame
         */ this.onXRReady = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * Are we currently in the XR loop?
         */ this.inXRFrameLoop = false;
        /**
         * Are we in an XR session?
         */ this.inXRSession = false;
        this._worldScalingFactor = 1;
        /**
         * Observable raised when the world scale has changed
         */ this.onWorldScaleFactorChangedObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"](undefined, true);
        this._engine = scene.getEngine();
        this._onEngineDisposedObserver = this._engine.onDisposeObservable.addOnce(()=>{
            this._engine = null;
        });
        scene.onDisposeObservable.addOnce(()=>{
            this.dispose();
        });
        this.onXRSessionEnded.add(()=>{
            // Set the scene's pointer camera to null to stop the XR camera being used for picking.
            scene.cameraToUseForPointers = null;
        });
    }
    /**
     * The current reference space used in this session. This reference space can constantly change!
     * It is mainly used to offset the camera's position.
     */ get referenceSpace() {
        return this._referenceSpace;
    }
    /**
     * Set a new reference space and triggers the observable
     */ set referenceSpace(newReferenceSpace) {
        this._referenceSpace = newReferenceSpace;
        this.onXRReferenceSpaceChanged.notifyObservers(this._referenceSpace);
    }
    /**
     * The mode for the managed XR session
     */ get sessionMode() {
        return this._sessionMode;
    }
    /**
     * Disposes of the session manager
     * This should be called explicitly by the dev, if required.
     */ dispose() {
        // disposing without leaving XR? Exit XR first
        if (this.inXRSession) {
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            this.exitXRAsync();
        }
        this.onXRReady.clear();
        this.onXRFrameObservable.clear();
        this.onXRSessionEnded.clear();
        this.onXRReferenceSpaceChanged.clear();
        this.onXRSessionInit.clear();
        this.onWorldScaleFactorChangedObservable.clear();
        this._engine?.onDisposeObservable.remove(this._onEngineDisposedObserver);
        this._engine = null;
    }
    /**
     * Stops the xrSession and restores the render loop
     * @returns Promise which resolves after it exits XR
     */ async exitXRAsync() {
        if (this.session && this.inXRSession) {
            this.inXRSession = false;
            try {
                return await this.session.end();
            } catch  {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn("Could not end XR session.");
            }
        }
    }
    /**
     * Attempts to set the framebuffer-size-normalized viewport to be rendered this frame for this view.
     * In the event of a failure, the supplied viewport is not updated.
     * @param viewport the viewport to which the view will be rendered
     * @param view the view for which to set the viewport
     * @returns whether the operation was successful
     */ trySetViewportForView(viewport, view) {
        return this._baseLayerRTTProvider?.trySetViewportForView(viewport, view) || false;
    }
    /**
     * Gets the correct render target texture to be rendered this frame for this eye
     * @param eye the eye for which to get the render target
     * @returns the render target for the specified eye or null if not available
     */ getRenderTargetTextureForEye(eye) {
        return this._baseLayerRTTProvider?.getRenderTargetTextureForEye(eye) || null;
    }
    /**
     * Gets the correct render target texture to be rendered this frame for this view
     * @param view the view for which to get the render target
     * @returns the render target for the specified view or null if not available
     */ getRenderTargetTextureForView(view) {
        return this._baseLayerRTTProvider?.getRenderTargetTextureForView(view) || null;
    }
    /**
     * Creates a WebXRRenderTarget object for the XR session
     * @param options optional options to provide when creating a new render target
     * @returns a WebXR render target to which the session can render
     */ getWebXRRenderTarget(options) {
        const engine = this.scene.getEngine();
        if (this._xrNavigator.xr.native) {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$native$2f$nativeXRRenderTarget$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NativeXRRenderTarget"](this);
        } else {
            options = options || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRManagedOutputCanvas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRManagedOutputCanvasOptions"].GetDefaults(engine);
            options.canvasElement = options.canvasElement || engine.getRenderingCanvas() || undefined;
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRManagedOutputCanvas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRManagedOutputCanvas"](this, options);
        }
    }
    /**
     * Initializes the manager
     * After initialization enterXR can be called to start an XR session
     * @returns Promise which resolves after it is initialized
     */ async initializeAsync() {
        // Check if the browser supports webXR
        this._xrNavigator = navigator;
        if (!this._xrNavigator.xr) {
            throw new Error("WebXR not supported on this browser.");
        }
    }
    /**
     * Initializes an xr session
     * @param xrSessionMode mode to initialize
     * @param xrSessionInit defines optional and required values to pass to the session builder
     * @returns a promise which will resolve once the session has been initialized
     */ async initializeSessionAsync(xrSessionMode = "immersive-vr", xrSessionInit = {}) {
        const session = await this._xrNavigator.xr.requestSession(xrSessionMode, xrSessionInit);
        this.session = session;
        this._sessionMode = xrSessionMode;
        this.inXRSession = true;
        this.onXRSessionInit.notifyObservers(session);
        // handle when the session is ended (By calling session.end or device ends its own session eg. pressing home button on phone)
        this.session.addEventListener("end", ()=>{
            this.inXRSession = false;
            // Notify frame observers
            this.onXRSessionEnded.notifyObservers(null);
            if (this._engine) {
                // make sure dimensions object is restored
                this._engine.framebufferDimensionsObject = null;
                // Restore frame buffer to avoid clear on xr framebuffer after session end
                this._engine.restoreDefaultFramebuffer();
                // Need to restart render loop as after the session is ended the last request for new frame will never call callback
                this._engine.customAnimationFrameRequester = null;
                this._engine._renderLoop();
            }
            // Dispose render target textures.
            // Only dispose on native because we can't destroy opaque textures on browser.
            if (this.isNative) {
                this._baseLayerRTTProvider?.dispose();
            }
            this._baseLayerRTTProvider = null;
            this._baseLayerWrapper = null;
        }, {
            once: true
        });
        return this.session;
    }
    /**
     * Checks if a session would be supported for the creation options specified
     * @param sessionMode session mode to check if supported eg. immersive-vr
     * @returns A Promise that resolves to true if supported and false if not
     */ async isSessionSupportedAsync(sessionMode) {
        return await WebXRSessionManager.IsSessionSupportedAsync(sessionMode);
    }
    /**
     * Resets the reference space to the one started the session
     */ resetReferenceSpace() {
        this.referenceSpace = this.baseReferenceSpace;
    }
    /**
     * Starts rendering to the xr layer
     */ runXRRenderLoop() {
        if (!this.inXRSession || !this._engine) {
            return;
        }
        // Tell the engine's render loop to be driven by the xr session's refresh rate and provide xr pose information
        this._engine.customAnimationFrameRequester = {
            requestAnimationFrame: (callback)=>this.session.requestAnimationFrame(callback),
            renderFunction: (timestamp, xrFrame)=>{
                if (!this.inXRSession || !this._engine) {
                    return;
                }
                // Store the XR frame and timestamp in the session manager
                this.currentFrame = xrFrame;
                this.currentTimestamp = timestamp;
                if (xrFrame) {
                    this.inXRFrameLoop = true;
                    const framebufferDimensionsObject = this._baseLayerRTTProvider?.getFramebufferDimensions() || null;
                    // equality can be tested as it should be the same object
                    if (this._engine.framebufferDimensionsObject !== framebufferDimensionsObject) {
                        this._engine.framebufferDimensionsObject = framebufferDimensionsObject;
                    }
                    this.onXRFrameObservable.notifyObservers(xrFrame);
                    this._engine._renderLoop();
                    this._engine.framebufferDimensionsObject = null;
                    this.inXRFrameLoop = false;
                }
            }
        };
        this._engine.framebufferDimensionsObject = this._baseLayerRTTProvider?.getFramebufferDimensions() || null;
        this.onXRFrameObservable.addOnce(()=>{
            this.onXRReady.notifyObservers(this);
        });
        // Stop window's animation frame and trigger sessions animation frame
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        this._engine._renderLoop();
    }
    /**
     * Sets the reference space on the xr session
     * @param referenceSpaceType space to set
     * @returns a promise that will resolve once the reference space has been set
     */ async setReferenceSpaceTypeAsync(referenceSpaceType = "local-floor") {
        let referenceSpace;
        try {
            referenceSpace = await this.session.requestReferenceSpace(referenceSpaceType);
        } catch (rejectionReason) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Error("XR.requestReferenceSpace failed for the following reason: ");
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Error(rejectionReason);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Log('Defaulting to universally-supported "viewer" reference space type.');
            try {
                const referenceSpace = await this.session.requestReferenceSpace("viewer");
                const heightCompensation = new XRRigidTransform({
                    x: 0,
                    y: -this.defaultHeightCompensation,
                    z: 0
                });
                return referenceSpace.getOffsetReferenceSpace(heightCompensation);
            } catch (rejectionReason) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Error(rejectionReason);
                // eslint-disable-next-line no-throw-literal
                throw 'XR initialization failed: required "viewer" reference space type not supported.';
            }
        }
        // create viewer reference space before setting the first reference space
        const viewerReferenceSpace = await this.session.requestReferenceSpace("viewer");
        this.viewerReferenceSpace = viewerReferenceSpace;
        // initialize the base and offset (currently the same)
        this.referenceSpace = this.baseReferenceSpace = referenceSpace;
        this.onXRReferenceSpaceInitialized.notifyObservers(referenceSpace);
        return this.referenceSpace;
    }
    /**
     * Updates the render state of the session.
     * Note that this is deprecated in favor of WebXRSessionManager.updateRenderState().
     * @param state state to set
     * @returns a promise that resolves once the render state has been updated
     * @deprecated Use updateRenderState() instead.
     */ async updateRenderStateAsync(state) {
        return await this.session.updateRenderState(state);
    }
    /**
     * @internal
     */ _setBaseLayerWrapper(baseLayerWrapper) {
        if (this.isNative) {
            this._baseLayerRTTProvider?.dispose();
        }
        this._baseLayerWrapper = baseLayerWrapper;
        this._baseLayerRTTProvider = this._baseLayerWrapper?.createRenderTargetTextureProvider(this) || null;
    }
    /**
     * @internal
     */ _getBaseLayerWrapper() {
        return this._baseLayerWrapper;
    }
    /**
     * Updates the render state of the session
     * @param state state to set
     */ updateRenderState(state) {
        if (state.baseLayer) {
            this._setBaseLayerWrapper(this.isNative ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$native$2f$nativeXRRenderTarget$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NativeXRLayerWrapper"](state.baseLayer) : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRWebGLLayer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRWebGLLayerWrapper"](state.baseLayer));
        }
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.session.updateRenderState(state);
    }
    /**
     * Returns a promise that resolves with a boolean indicating if the provided session mode is supported by this browser
     * @param sessionMode defines the session to test
     * @returns a promise with boolean as final value
     */ static async IsSessionSupportedAsync(sessionMode) {
        if (!navigator.xr) {
            return false;
        }
        // When the specs are final, remove supportsSession!
        const functionToUse = navigator.xr.isSessionSupported || navigator.xr.supportsSession;
        if (!functionToUse) {
            return false;
        } else {
            try {
                const result = functionToUse.call(navigator.xr, sessionMode);
                const returnValue = typeof result === "undefined" ? true : result;
                return returnValue;
            } catch (e) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn(e);
                return false;
            }
        }
    }
    /**
     * Returns true if Babylon.js is using the BabylonNative backend, otherwise false
     */ get isNative() {
        return this._xrNavigator.xr.native ?? false;
    }
    /**
     * The current frame rate as reported by the device
     */ get currentFrameRate() {
        return this.session?.frameRate;
    }
    /**
     * A list of supported frame rates (only available in-session!
     */ get supportedFrameRates() {
        return this.session?.supportedFrameRates;
    }
    /**
     * Set the framerate of the session.
     * @param rate the new framerate. This value needs to be in the supportedFrameRates array
     * @returns a promise that resolves once the framerate has been set
     */ // eslint-disable-next-line @typescript-eslint/naming-convention
    async updateTargetFrameRate(rate) {
        return await this.session.updateTargetFrameRate(rate);
    }
    /**
     * Run a callback in the xr render loop
     * @param callback the callback to call when in XR Frame
     * @param ignoreIfNotInSession if no session is currently running, run it first thing on the next session
     */ runInXRFrame(callback, ignoreIfNotInSession = true) {
        if (this.inXRFrameLoop) {
            callback();
        } else if (this.inXRSession || !ignoreIfNotInSession) {
            this.onXRFrameObservable.addOnce(callback);
        }
    }
    /**
     * Check if fixed foveation is supported on this device
     */ get isFixedFoveationSupported() {
        return this._baseLayerWrapper?.isFixedFoveationSupported || false;
    }
    /**
     * Get the fixed foveation currently set, as specified by the webxr specs
     * If this returns null, then fixed foveation is not supported
     */ get fixedFoveation() {
        return this._baseLayerWrapper?.fixedFoveation || null;
    }
    /**
     * Set the fixed foveation to the specified value, as specified by the webxr specs
     * This value will be normalized to be between 0 and 1, 1 being max foveation, 0 being no foveation
     */ set fixedFoveation(value) {
        const val = Math.max(0, Math.min(1, value || 0));
        if (this._baseLayerWrapper) {
            this._baseLayerWrapper.fixedFoveation = val;
        }
    }
    /**
     * Get the features enabled on the current session
     * This is only available in-session!
     * @see https://www.w3.org/TR/webxr/#dom-xrsession-enabledfeatures
     */ get enabledFeatures() {
        return this.session?.enabledFeatures ?? null;
    }
} //# sourceMappingURL=webXRSessionManager.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/webXRCamera.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WebXRCamera",
    ()=>WebXRCamera
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$camera$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/camera.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$freeCamera$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/freeCamera.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$targetCamera$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/targetCamera.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$viewport$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.viewport.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
class WebXRCamera extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$freeCamera$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FreeCamera"] {
    /**
     * Creates a new webXRCamera, this should only be set at the camera after it has been updated by the xrSessionManager
     * @param name the name of the camera
     * @param scene the scene to add the camera to
     * @param _xrSessionManager a constructed xr session manager
     */ constructor(name, scene, _xrSessionManager){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero(), scene);
        this._xrSessionManager = _xrSessionManager;
        this._firstFrame = false;
        this._referenceQuaternion = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"].Identity();
        this._referencedPosition = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]();
        this._trackingState = 0 /* WebXRTrackingState.NOT_TRACKING */ ;
        /**
         * This will be triggered after the first XR Frame initialized the camera,
         * including the right number of views and their rendering parameters
         */ this.onXRCameraInitializedObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * Observable raised before camera teleportation
         * @deprecated use onBeforeCameraTeleport of the teleportation feature instead
         */ this.onBeforeCameraTeleport = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         *  Observable raised after camera teleportation
         * @deprecated use onAfterCameraTeleport of the teleportation feature instead
         */ this.onAfterCameraTeleport = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * Notifies when the camera's tracking state has changed.
         * Notice - will also be triggered when tracking has started (at the beginning of the session)
         */ this.onTrackingStateChanged = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * Should position compensation execute on first frame.
         * This is used when copying the position from a native (non XR) camera
         */ this.compensateOnFirstFrame = true;
        // Initial camera configuration
        this.minZ = 0.1;
        this.rotationQuaternion = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"]();
        this.cameraRigMode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$camera$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Camera"].RIG_MODE_CUSTOM;
        this.updateUpVectorFromRotation = true;
        this._updateNumberOfRigCameras(1);
        // freeze projection matrix, which will be copied later
        this.freezeProjectionMatrix();
        this._deferOnly = true;
        this._xrSessionManager.onXRSessionInit.add(()=>{
            this._referencedPosition.copyFromFloats(0, 0, 0);
            this._referenceQuaternion.copyFromFloats(0, 0, 0, 1);
            // first frame - camera's y position should be 0 for the correct offset
            this._firstFrame = this.compensateOnFirstFrame;
            this._xrSessionManager.onWorldScaleFactorChangedObservable.add(()=>{
                // only run if in session
                if (!this._xrSessionManager.currentFrame) {
                    return;
                }
                this._updateDepthNearFar();
            });
        });
        // Check transformation changes on each frame. Callback is added to be first so that the transformation will be
        // applied to the rest of the elements using the referenceSpace object
        this._xrSessionManager.onXRFrameObservable.add(()=>{
            if (this._firstFrame) {
                this._updateFromXRSession();
            }
            if (this.onXRCameraInitializedObservable.hasObservers()) {
                this.onXRCameraInitializedObservable.notifyObservers(this);
                this.onXRCameraInitializedObservable.clear();
            }
            if (this._deferredUpdated) {
                this.position.copyFrom(this._deferredPositionUpdate);
                this.rotationQuaternion.copyFrom(this._deferredRotationQuaternionUpdate);
            }
            this._updateReferenceSpace();
            this._updateFromXRSession();
        }, undefined, true);
    }
    /**
     * Get the current XR tracking state of the camera
     */ get trackingState() {
        return this._trackingState;
    }
    _setTrackingState(newState) {
        if (this._trackingState !== newState) {
            this._trackingState = newState;
            this.onTrackingStateChanged.notifyObservers(newState);
        }
    }
    /**
     * Return the user's height, unrelated to the current ground.
     * This will be the y position of this camera, when ground level is 0.
     *
     * Note - this value is multiplied by the worldScalingFactor (if set), so it will be in the same units as the scene.
     */ get realWorldHeight() {
        const basePose = this._xrSessionManager.currentFrame && this._xrSessionManager.currentFrame.getViewerPose(this._xrSessionManager.baseReferenceSpace);
        if (basePose && basePose.transform) {
            return basePose.transform.position.y * this._xrSessionManager.worldScalingFactor;
        } else {
            return 0;
        }
    }
    /** @internal */ _updateForDualEyeDebugging() {
        // Create initial camera rigs
        this._updateNumberOfRigCameras(2);
        this.rigCameras[0].viewport = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$viewport$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Viewport"](0, 0, 0.5, 1.0);
        // this.rigCameras[0].position.x = -pupilDistance / 2;
        this.rigCameras[0].outputRenderTarget = null;
        this.rigCameras[1].viewport = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$viewport$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Viewport"](0.5, 0, 0.5, 1.0);
        // this.rigCameras[1].position.x = pupilDistance / 2;
        this.rigCameras[1].outputRenderTarget = null;
    }
    /**
     * Sets this camera's transformation based on a non-vr camera
     * @param otherCamera the non-vr camera to copy the transformation from
     * @param resetToBaseReferenceSpace should XR reset to the base reference space
     */ setTransformationFromNonVRCamera(otherCamera = this.getScene().activeCamera, resetToBaseReferenceSpace = true) {
        if (!otherCamera || otherCamera === this) {
            return;
        }
        const mat = otherCamera.computeWorldMatrix();
        mat.decompose(undefined, this.rotationQuaternion, this.position);
        // set the ground level
        this.position.y = 0;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"].FromEulerAnglesToRef(0, this.rotationQuaternion.toEulerAngles().y, 0, this.rotationQuaternion);
        this._firstFrame = true;
        if (resetToBaseReferenceSpace) {
            this._xrSessionManager.resetReferenceSpace();
        }
    }
    /**
     * Gets the current instance class name ("WebXRCamera").
     * @returns the class name
     */ getClassName() {
        return "WebXRCamera";
    }
    /**
     * Set the target for the camera to look at.
     * Note that this only rotates around the Y axis, as opposed to the default behavior of other cameras
     * @param target the target to set the camera to look at
     */ setTarget(target) {
        // only rotate around the y axis!
        const tmpVector = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[1];
        target.subtractToRef(this.position, tmpVector);
        tmpVector.y = 0;
        tmpVector.normalize();
        const yRotation = Math.atan2(tmpVector.x, tmpVector.z) + (this._scene.useRightHandedSystem ? Math.PI : 0);
        this.rotationQuaternion.toEulerAnglesToRef(tmpVector);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"].FromEulerAnglesToRef(tmpVector.x, yRotation, tmpVector.z, this.rotationQuaternion);
    }
    dispose() {
        super.dispose();
        this._lastXRViewerPose = undefined;
        this.onTrackingStateChanged.clear();
    }
    _updateDepthNearFar() {
        const far = (this.maxZ || 10000) * this._xrSessionManager.worldScalingFactor;
        const xrRenderState = {
            // if maxZ is 0 it should be "Infinity", but it doesn't work with the WebXR API. Setting to a large number.
            depthFar: far,
            depthNear: this.minZ
        };
        this._xrSessionManager.updateRenderState(xrRenderState);
        this._cache.minZ = this.minZ;
        this._cache.maxZ = far;
    }
    _updateFromXRSession() {
        const pose = this._xrSessionManager.currentFrame && this._xrSessionManager.currentFrame.getViewerPose(this._xrSessionManager.referenceSpace);
        this._lastXRViewerPose = pose || undefined;
        if (!pose) {
            this._setTrackingState(0 /* WebXRTrackingState.NOT_TRACKING */ );
            return;
        }
        // Set the tracking state. if it didn't change it is a no-op
        const trackingState = pose.emulatedPosition ? 1 /* WebXRTrackingState.TRACKING_LOST */  : 2 /* WebXRTrackingState.TRACKING */ ;
        this._setTrackingState(trackingState);
        // check min/max Z and update if not the same as in cache
        if (this.minZ !== this._cache.minZ || this.maxZ !== this._cache.maxZ) {
            this._updateDepthNearFar();
        }
        if (pose.transform) {
            const orientation = pose.transform.orientation;
            if (pose.transform.orientation.x === undefined) {
                // Babylon native polyfill can return an undefined orientation value
                // When not initialized
                return;
            }
            const pos = pose.transform.position;
            this._referencedPosition.set(pos.x, pos.y, pos.z).scaleInPlace(this._xrSessionManager.worldScalingFactor);
            this._referenceQuaternion.set(orientation.x, orientation.y, orientation.z, orientation.w);
            if (!this._scene.useRightHandedSystem) {
                this._referencedPosition.z *= -1;
                this._referenceQuaternion.z *= -1;
                this._referenceQuaternion.w *= -1;
            }
            if (this._firstFrame) {
                this._firstFrame = false;
                // we have the XR reference, now use this to find the offset to get the camera to be
                // in the right position
                // set the height to correlate to the current height
                this.position.y += this._referencedPosition.y;
                // avoid using the head rotation on the first frame.
                this._referenceQuaternion.copyFromFloats(0, 0, 0, 1);
            } else {
                // update position and rotation as reference
                this.rotationQuaternion.copyFrom(this._referenceQuaternion);
                this.position.copyFrom(this._referencedPosition);
            }
        }
        // Update camera rigs
        if (this.rigCameras.length !== pose.views.length) {
            this._updateNumberOfRigCameras(pose.views.length);
        }
        for(let i = 0; i < pose.views.length; i++){
            const view = pose.views[i];
            const currentRig = this.rigCameras[i];
            // update right and left, where applicable
            if (!currentRig.isLeftCamera && !currentRig.isRightCamera) {
                if (view.eye === "right") {
                    currentRig._isRightCamera = true;
                } else if (view.eye === "left") {
                    currentRig._isLeftCamera = true;
                }
            }
            // add any custom render targets to this camera, if available in the scene
            const customRenderTargets = this.getScene().customRenderTargets;
            // use a for loop
            for(let i = 0; i < customRenderTargets.length; i++){
                const rt = customRenderTargets[i];
                // make sure we don't add the same render target twice
                if (currentRig.customRenderTargets.indexOf(rt) === -1) {
                    currentRig.customRenderTargets.push(rt);
                }
            }
            // Update view/projection matrix
            const pos = view.transform.position;
            const orientation = view.transform.orientation;
            currentRig.parent = this.parent;
            currentRig.position.set(pos.x, pos.y, pos.z).scaleInPlace(this._xrSessionManager.worldScalingFactor);
            currentRig.rotationQuaternion?.set(orientation.x, orientation.y, orientation.z, orientation.w);
            if (!this._scene.useRightHandedSystem && currentRig.rotationQuaternion) {
                currentRig.position.z *= -1;
                currentRig.rotationQuaternion.z *= -1;
                currentRig.rotationQuaternion.w *= -1;
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].FromFloat32ArrayToRefScaled(view.projectionMatrix, 0, 1, currentRig._projectionMatrix);
            if (!this._scene.useRightHandedSystem) {
                currentRig._projectionMatrix.toggleProjectionMatrixHandInPlace();
            }
            // fov
            const fov = Math.atan2(1, view.projectionMatrix[5]) * 2;
            currentRig.fov = fov;
            // first camera?
            if (i === 0) {
                this.fov = fov;
                this._projectionMatrix.copyFrom(currentRig._projectionMatrix);
            }
            const renderTargetTexture = this._xrSessionManager.getRenderTargetTextureForView(view);
            this._renderingMultiview = renderTargetTexture?._texture?.isMultiview || false;
            if (this._renderingMultiview) {
                // For multiview, the render target texture is the same per-view (just the slice index is different),
                // so we only need to set the output render target once for the rig parent.
                if (i == 0) {
                    this._xrSessionManager.trySetViewportForView(this.viewport, view);
                    this.outputRenderTarget = renderTargetTexture;
                }
            } else {
                // Update viewport
                this._xrSessionManager.trySetViewportForView(currentRig.viewport, view);
                // Set cameras to render to the session's render target
                currentRig.outputRenderTarget = renderTargetTexture || this._xrSessionManager.getRenderTargetTextureForView(view);
            }
            // Replicate parent rig camera behavior
            currentRig.layerMask = this.layerMask;
        }
    }
    _updateNumberOfRigCameras(viewCount = 1) {
        while(this.rigCameras.length < viewCount){
            const newCamera = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$targetCamera$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TargetCamera"]("XR-RigCamera: " + this.rigCameras.length, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero(), this.getScene());
            newCamera.minZ = 0.1;
            newCamera.rotationQuaternion = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"]();
            newCamera.updateUpVectorFromRotation = true;
            newCamera.isRigCamera = true;
            newCamera.rigParent = this;
            // do not compute projection matrix, provided by XR
            newCamera.freezeProjectionMatrix();
            this.rigCameras.push(newCamera);
        }
        while(this.rigCameras.length > viewCount){
            const removedCamera = this.rigCameras.pop();
            if (removedCamera) {
                removedCamera.dispose();
            }
        }
    }
    _updateReferenceSpace() {
        // were position & rotation updated OUTSIDE of the xr update loop
        if (!this.position.equals(this._referencedPosition) || !this.rotationQuaternion.equals(this._referenceQuaternion)) {
            const referencedMat = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[0];
            const poseMat = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[1];
            const transformMat = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[2];
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].ComposeToRef(WebXRCamera._ScaleReadOnly, this._referenceQuaternion, this._referencedPosition, referencedMat);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].ComposeToRef(WebXRCamera._ScaleReadOnly, this.rotationQuaternion, this.position, poseMat);
            referencedMat.invert().multiplyToRef(poseMat, transformMat);
            transformMat.invert();
            if (!this._scene.useRightHandedSystem) {
                transformMat.toggleModelMatrixHandInPlace();
            }
            transformMat.decompose(undefined, this._referenceQuaternion, this._referencedPosition);
            const transform = new XRRigidTransform({
                x: this._referencedPosition.x / this._xrSessionManager.worldScalingFactor,
                y: this._referencedPosition.y / this._xrSessionManager.worldScalingFactor,
                z: this._referencedPosition.z / this._xrSessionManager.worldScalingFactor,
                w: 1
            }, {
                x: this._referenceQuaternion.x,
                y: this._referenceQuaternion.y,
                z: this._referenceQuaternion.z,
                w: this._referenceQuaternion.w
            });
            this._xrSessionManager.referenceSpace = this._xrSessionManager.referenceSpace.getOffsetReferenceSpace(transform);
        }
    }
}
WebXRCamera._ScaleReadOnly = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].One(); //# sourceMappingURL=webXRCamera.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/webXRExperienceHelper.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WebXRExperienceHelper",
    ()=>WebXRExperienceHelper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRSessionManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/webXRSessionManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRCamera$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/webXRCamera.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRFeaturesManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/webXRFeaturesManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$universalCamera$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/universalCamera.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/abstractEngine.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
class WebXRExperienceHelper {
    /**
     * Creates a WebXRExperienceHelper
     * @param _scene The scene the helper should be created in
     */ constructor(_scene){
        this._scene = _scene;
        this._nonVRCamera = null;
        this._attachedToElement = false;
        this._spectatorCamera = null;
        this._originalSceneAutoClear = true;
        this._supported = false;
        this._spectatorMode = false;
        this._lastTimestamp = 0;
        /**
         * Observers registered here will be triggered after the camera's initial transformation is set
         * This can be used to set a different ground level or an extra rotation.
         *
         * Note that ground level is considered to be at 0. The height defined by the XR camera will be added
         * to the position set after this observable is done executing.
         */ this.onInitialXRPoseSetObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * Fires when the state of the experience helper has changed
         */ this.onStateChangedObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * The current state of the XR experience (eg. transitioning, in XR or not in XR)
         */ this.state = 3 /* WebXRState.NOT_IN_XR */ ;
        this.sessionManager = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRSessionManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRSessionManager"](_scene);
        this.camera = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRCamera$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRCamera"]("webxr", _scene, this.sessionManager);
        this.featuresManager = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRFeaturesManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRFeaturesManager"](this.sessionManager);
        _scene.onDisposeObservable.addOnce(()=>{
            this.dispose();
        });
    }
    /**
     * Creates the experience helper
     * @param scene the scene to attach the experience helper to
     * @returns a promise for the experience helper
     */ static async CreateAsync(scene) {
        const helper = new WebXRExperienceHelper(scene);
        return await helper.sessionManager.initializeAsync()// eslint-disable-next-line github/no-then
        .then(()=>{
            helper._supported = true;
            return helper;
        })// eslint-disable-next-line github/no-then
        .catch((e)=>{
            helper._setState(3 /* WebXRState.NOT_IN_XR */ );
            helper.dispose();
            throw e;
        });
    }
    /**
     * Disposes of the experience helper
     */ dispose() {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.exitXRAsync();
        this.camera.dispose();
        this.onStateChangedObservable.clear();
        this.onInitialXRPoseSetObservable.clear();
        this.sessionManager.dispose();
        this._spectatorCamera?.dispose();
        if (this._nonVRCamera) {
            this._scene.activeCamera = this._nonVRCamera;
        }
    }
    /**
     * Enters XR mode (This must be done within a user interaction in most browsers eg. button click)
     * @param sessionMode options for the XR session
     * @param referenceSpaceType frame of reference of the XR session
     * @param renderTarget the output canvas that will be used to enter XR mode
     * @param sessionCreationOptions optional XRSessionInit object to init the session with
     * @returns promise that resolves after xr mode has entered
     */ async enterXRAsync(sessionMode, referenceSpaceType, renderTarget = this.sessionManager.getWebXRRenderTarget(), sessionCreationOptions = {}) {
        if (!this._supported) {
            // eslint-disable-next-line no-throw-literal
            throw "WebXR not supported in this browser or environment";
        }
        this._setState(0 /* WebXRState.ENTERING_XR */ );
        if (referenceSpaceType !== "viewer" && referenceSpaceType !== "local") {
            sessionCreationOptions.optionalFeatures = sessionCreationOptions.optionalFeatures || [];
            sessionCreationOptions.optionalFeatures.push(referenceSpaceType);
        }
        sessionCreationOptions = await this.featuresManager._extendXRSessionInitObject(sessionCreationOptions);
        // we currently recommend "unbounded" space in AR (#7959)
        if (sessionMode === "immersive-ar" && referenceSpaceType !== "unbounded") {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn("We recommend using 'unbounded' reference space type when using 'immersive-ar' session mode");
        }
        // make sure that the session mode is supported
        try {
            await this.sessionManager.initializeSessionAsync(sessionMode, sessionCreationOptions);
            await this.sessionManager.setReferenceSpaceTypeAsync(referenceSpaceType);
            const xrRenderState = {
                // if maxZ is 0 it should be "Infinity", but it doesn't work with the WebXR API. Setting to a large number.
                depthFar: this.camera.maxZ || 10000,
                depthNear: this.camera.minZ
            };
            // The layers feature will have already initialized the xr session's layers on session init.
            if (!this.featuresManager.getEnabledFeature(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRFeaturesManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRFeatureName"].LAYERS)) {
                const baseLayer = await renderTarget.initializeXRLayerAsync(this.sessionManager.session);
                xrRenderState.baseLayer = baseLayer;
            }
            this.sessionManager.updateRenderState(xrRenderState);
            // run the render loop
            this.sessionManager.runXRRenderLoop();
            // Cache pre xr scene settings
            this._originalSceneAutoClear = this._scene.autoClear;
            this._nonVRCamera = this._scene.activeCamera;
            this._attachedToElement = !!this._nonVRCamera?.inputs?.attachedToElement;
            this._nonVRCamera?.detachControl();
            this._scene.activeCamera = this.camera;
            // do not compensate when AR session is used
            if (sessionMode !== "immersive-ar") {
                this._nonXRToXRCamera();
            } else {
                // Kept here, TODO - check if needed
                this._scene.autoClear = false;
                this.camera.compensateOnFirstFrame = false;
                // reset the camera's position to the origin
                this.camera.position.set(0, 0, 0);
                this.camera.rotationQuaternion.set(0, 0, 0, 1);
                this.onInitialXRPoseSetObservable.notifyObservers(this.camera);
            }
            // Vision Pro suspends the audio context when entering XR, so we resume it here if needed.
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].audioEngine?._resumeAudioContextOnStateChange();
            this.sessionManager.onXRSessionEnded.addOnce(()=>{
                // when using the back button and not the exit button (default on mobile), the session is ending but the EXITING state was not set
                if (this.state !== 1 /* WebXRState.EXITING_XR */ ) {
                    this._setState(1 /* WebXRState.EXITING_XR */ );
                }
                // Reset camera rigs output render target to ensure sessions render target is not drawn after it ends
                for (const c of this.camera.rigCameras){
                    c.outputRenderTarget = null;
                }
                // Restore scene settings
                this._scene.autoClear = this._originalSceneAutoClear;
                this._scene.activeCamera = this._nonVRCamera;
                if (this._attachedToElement && this._nonVRCamera) {
                    this._nonVRCamera.attachControl(!!this._nonVRCamera.inputs.noPreventDefault);
                }
                if (sessionMode !== "immersive-ar" && this.camera.compensateOnFirstFrame) {
                    if (this._nonVRCamera.setPosition) {
                        this._nonVRCamera.setPosition(this.camera.position);
                    } else {
                        this._nonVRCamera.position.copyFrom(this.camera.position);
                    }
                }
                this._setState(3 /* WebXRState.NOT_IN_XR */ );
            });
            // Wait until the first frame arrives before setting state to in xr
            this.sessionManager.onXRFrameObservable.addOnce(()=>{
                this._setState(2 /* WebXRState.IN_XR */ );
            });
            return this.sessionManager;
        } catch (e) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Log(e);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Log(e.message);
            this._setState(3 /* WebXRState.NOT_IN_XR */ );
            throw e;
        }
    }
    /**
     * Exits XR mode and returns the scene to its original state
     * @returns promise that resolves after xr mode has exited
     */ async exitXRAsync() {
        // only exit if state is IN_XR
        if (this.state !== 2 /* WebXRState.IN_XR */ ) {
            return;
        }
        this._setState(1 /* WebXRState.EXITING_XR */ );
        return await this.sessionManager.exitXRAsync();
    }
    /**
     * Enable spectator mode for desktop VR experiences.
     * When spectator mode is enabled a camera will be attached to the desktop canvas and will
     * display the first rig camera's view on the desktop canvas.
     * Please note that this will degrade performance, as it requires another camera render.
     * It is also not recommended to enable this in devices like the quest, as it brings no benefit there.
     * @param options giving WebXRSpectatorModeOption for specutator camera to setup when the spectator mode is enabled.
     */ enableSpectatorMode(options) {
        if (!this._spectatorMode) {
            this._spectatorMode = true;
            this._switchSpectatorMode(options);
        }
    }
    /**
     * Disable spectator mode for desktop VR experiences.
     */ disableSpecatatorMode() {
        if (this._spectatorMode) {
            this._spectatorMode = false;
            this._switchSpectatorMode();
        }
    }
    _switchSpectatorMode(options) {
        const fps = options?.fps ? options.fps : 1000.0;
        const refreshRate = 1.0 / fps * 1000.0;
        const cameraIndex = options?.preferredCameraIndex ? options?.preferredCameraIndex : 0;
        const updateSpectatorCamera = ()=>{
            if (this._spectatorCamera) {
                const delta = this.sessionManager.currentTimestamp - this._lastTimestamp;
                if (delta >= refreshRate) {
                    this._lastTimestamp = this.sessionManager.currentTimestamp;
                    this._spectatorCamera.position.copyFrom(this.camera.rigCameras[cameraIndex].globalPosition);
                    this._spectatorCamera.rotationQuaternion?.copyFrom(this.camera.rigCameras[cameraIndex].absoluteRotation);
                }
            }
        };
        if (this._spectatorMode) {
            if (cameraIndex >= this.camera.rigCameras.length) {
                throw new Error("the preferred camera index is beyond the length of rig camera array.");
            }
            const onStateChanged = ()=>{
                if (this.state === 2 /* WebXRState.IN_XR */ ) {
                    this._spectatorCamera = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$universalCamera$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UniversalCamera"]("webxr-spectator", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero(), this._scene);
                    this._spectatorCamera.rotationQuaternion = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"]();
                    this._scene.activeCameras = [
                        this.camera,
                        this._spectatorCamera
                    ];
                    this.sessionManager.onXRFrameObservable.add(updateSpectatorCamera);
                    this._scene.onAfterRenderCameraObservable.add((camera)=>{
                        if (camera === this.camera) {
                            // reset the dimensions object for correct resizing
                            this._scene.getEngine().framebufferDimensionsObject = null;
                        }
                    });
                } else if (this.state === 1 /* WebXRState.EXITING_XR */ ) {
                    this.sessionManager.onXRFrameObservable.removeCallback(updateSpectatorCamera);
                    this._scene.activeCameras = null;
                }
            };
            this.onStateChangedObservable.add(onStateChanged);
            onStateChanged();
        } else {
            this.sessionManager.onXRFrameObservable.removeCallback(updateSpectatorCamera);
            this._scene.activeCameras = [
                this.camera
            ];
        }
    }
    _nonXRToXRCamera() {
        this.camera.setTransformationFromNonVRCamera(this._nonVRCamera);
        this.onInitialXRPoseSetObservable.notifyObservers(this.camera);
    }
    _setState(val) {
        if (this.state === val) {
            return;
        }
        this.state = val;
        this.onStateChangedObservable.notifyObservers(this.state);
    }
} //# sourceMappingURL=webXRExperienceHelper.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/motionController/webXRControllerComponent.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WebXRControllerComponent",
    ()=>WebXRControllerComponent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-ssr] (ecmascript)");
;
class WebXRControllerComponent {
    /**
     * Creates a new component for a motion controller.
     * It is created by the motion controller itself
     *
     * @param id the id of this component
     * @param type the type of the component
     * @param _buttonIndex index in the buttons array of the gamepad
     * @param _axesIndices indices of the values in the axes array of the gamepad
     */ constructor(/**
     * the id of this component
     */ id, /**
     * the type of the component
     */ type, _buttonIndex = -1, _axesIndices = []){
        this.id = id;
        this.type = type;
        this._buttonIndex = _buttonIndex;
        this._axesIndices = _axesIndices;
        this._axes = {
            x: 0,
            y: 0
        };
        this._changes = {};
        this._currentValue = 0;
        this._hasChanges = false;
        this._pressed = false;
        this._touched = false;
        /**
         * If axes are available for this component (like a touchpad or thumbstick) the observers will be notified when
         * the axes data changes
         */ this.onAxisValueChangedObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * Observers registered here will be triggered when the state of a button changes
         * State change is either pressed / touched / value
         */ this.onButtonStateChangedObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
    }
    /**
     * The current axes data. If this component has no axes it will still return an object { x: 0, y: 0 }
     */ get axes() {
        return this._axes;
    }
    /**
     * Get the changes. Elements will be populated only if they changed with their previous and current value
     */ get changes() {
        return this._changes;
    }
    /**
     * Return whether or not the component changed the last frame
     */ get hasChanges() {
        return this._hasChanges;
    }
    /**
     * is the button currently pressed
     */ get pressed() {
        return this._pressed;
    }
    /**
     * is the button currently touched
     */ get touched() {
        return this._touched;
    }
    /**
     * Get the current value of this component
     */ get value() {
        return this._currentValue;
    }
    /**
     * Dispose this component
     */ dispose() {
        this.onAxisValueChangedObservable.clear();
        this.onButtonStateChangedObservable.clear();
    }
    /**
     * Are there axes correlating to this component
     * @returns true is axes data is available
     */ isAxes() {
        return this._axesIndices.length !== 0;
    }
    /**
     * Is this component a button (hence - pressable)
     * @returns true if can be pressed
     */ isButton() {
        return this._buttonIndex !== -1;
    }
    /**
     * update this component using the gamepad object it is in. Called on every frame
     * @param nativeController the native gamepad controller object
     */ update(nativeController) {
        let buttonUpdated = false;
        let axesUpdate = false;
        this._hasChanges = false;
        this._changes = {};
        if (this.isButton()) {
            const button = nativeController.buttons[this._buttonIndex];
            // defensive, in case a profile was forced
            if (!button) {
                return;
            }
            if (this._currentValue !== button.value) {
                this.changes.value = {
                    current: button.value,
                    previous: this._currentValue
                };
                buttonUpdated = true;
                this._currentValue = button.value;
            }
            if (this._touched !== button.touched) {
                this.changes.touched = {
                    current: button.touched,
                    previous: this._touched
                };
                buttonUpdated = true;
                this._touched = button.touched;
            }
            if (this._pressed !== button.pressed) {
                this.changes.pressed = {
                    current: button.pressed,
                    previous: this._pressed
                };
                buttonUpdated = true;
                this._pressed = button.pressed;
            }
        }
        if (this.isAxes()) {
            if (this._axes.x !== nativeController.axes[this._axesIndices[0]]) {
                this.changes.axes = {
                    current: {
                        x: nativeController.axes[this._axesIndices[0]],
                        y: this._axes.y
                    },
                    previous: {
                        x: this._axes.x,
                        y: this._axes.y
                    }
                };
                this._axes.x = nativeController.axes[this._axesIndices[0]];
                axesUpdate = true;
            }
            if (this._axes.y !== nativeController.axes[this._axesIndices[1]]) {
                if (this.changes.axes) {
                    this.changes.axes.current.y = nativeController.axes[this._axesIndices[1]];
                } else {
                    this.changes.axes = {
                        current: {
                            x: this._axes.x,
                            y: nativeController.axes[this._axesIndices[1]]
                        },
                        previous: {
                            x: this._axes.x,
                            y: this._axes.y
                        }
                    };
                }
                this._axes.y = nativeController.axes[this._axesIndices[1]];
                axesUpdate = true;
            }
        }
        if (buttonUpdated) {
            this._hasChanges = true;
            this.onButtonStateChangedObservable.notifyObservers(this);
        }
        if (axesUpdate) {
            this._hasChanges = true;
            this.onAxisValueChangedObservable.notifyObservers(this._axes);
        }
    }
}
/**
 * button component type
 */ WebXRControllerComponent.BUTTON_TYPE = "button";
/**
 * squeeze component type
 */ WebXRControllerComponent.SQUEEZE_TYPE = "squeeze";
/**
 * Thumbstick component type
 */ WebXRControllerComponent.THUMBSTICK_TYPE = "thumbstick";
/**
 * Touchpad component type
 */ WebXRControllerComponent.TOUCHPAD_TYPE = "touchpad";
/**
 * trigger component type
 */ WebXRControllerComponent.TRIGGER_TYPE = "trigger"; //# sourceMappingURL=webXRControllerComponent.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/motionController/webXRAbstractMotionController.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WebXRAbstractMotionController",
    ()=>WebXRAbstractMotionController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$motionController$2f$webXRControllerComponent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/motionController/webXRControllerComponent.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Loading$2f$sceneLoader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Loading/sceneLoader.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/mesh.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
class WebXRAbstractMotionController {
    /**
     * constructs a new abstract motion controller
     * @param scene the scene to which the model of the controller will be added
     * @param layout The profile layout to load
     * @param gamepadObject The gamepad object correlating to this controller
     * @param handedness handedness (left/right/none) of this controller
     * @param _doNotLoadControllerMesh set this flag to ignore the mesh loading
     * @param _controllerCache a cache holding controller models already loaded in this session
     */ constructor(// eslint-disable-next-line @typescript-eslint/naming-convention
    scene, // eslint-disable-next-line @typescript-eslint/naming-convention
    layout, /**
     * The gamepad object correlating to this controller
     */ gamepadObject, /**
     * handedness (left/right/none) of this controller
     */ handedness, /**
     * @internal
     * [false]
     */ _doNotLoadControllerMesh = false, _controllerCache){
        this.scene = scene;
        this.layout = layout;
        this.gamepadObject = gamepadObject;
        this.handedness = handedness;
        this._doNotLoadControllerMesh = _doNotLoadControllerMesh;
        this._controllerCache = _controllerCache;
        this._initComponent = (id)=>{
            if (!id) {
                return;
            }
            const componentDef = this.layout.components[id];
            const type = componentDef.type;
            const buttonIndex = componentDef.gamepadIndices.button;
            // search for axes
            const axes = [];
            if (componentDef.gamepadIndices.xAxis !== undefined && componentDef.gamepadIndices.yAxis !== undefined) {
                axes.push(componentDef.gamepadIndices.xAxis, componentDef.gamepadIndices.yAxis);
            }
            this.components[id] = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$motionController$2f$webXRControllerComponent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRControllerComponent"](id, type, buttonIndex, axes);
        };
        this._modelReady = false;
        /**
         * A map of components (WebXRControllerComponent) in this motion controller
         * Components have a ComponentType and can also have both button and axis definitions
         */ this.components = {};
        /**
         * Disable the model's animation. Can be set at any time.
         */ this.disableAnimation = false;
        /**
         * Observers registered here will be triggered when the model of this controller is done loading
         */ this.onModelLoadedObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        // initialize the components
        if (layout.components) {
            const keys = Object.keys(layout.components);
            for (const key of keys){
                this._initComponent(key);
            }
        }
    // Model is loaded in WebXRInput
    }
    /**
     * Dispose this controller, the model mesh and all its components
     */ dispose() {
        const ids = this.getComponentIds();
        for (const id of ids){
            this.getComponent(id).dispose();
        }
        if (this.rootMesh) {
            const nodes = this.rootMesh.getChildren(undefined, true);
            for (const node of nodes){
                node.setEnabled(false);
            }
            this.rootMesh.dispose(!!this._controllerCache, !this._controllerCache);
        }
        this.onModelLoadedObservable.clear();
    }
    /**
     * Returns all components of specific type
     * @param type the type to search for
     * @returns an array of components with this type
     */ getAllComponentsOfType(type) {
        return this.getComponentIds().map((id)=>this.components[id]).filter((component)=>component.type === type);
    }
    /**
     * get a component based an its component id as defined in layout.components
     * @param id the id of the component
     * @returns the component correlates to the id or undefined if not found
     */ getComponent(id) {
        return this.components[id];
    }
    /**
     * Get the list of components available in this motion controller
     * @returns an array of strings correlating to available components
     */ getComponentIds() {
        return Object.keys(this.components);
    }
    /**
     * Get the first component of specific type
     * @param type type of component to find
     * @returns a controller component or null if not found
     */ getComponentOfType(type) {
        return this.getAllComponentsOfType(type)[0] || null;
    }
    /**
     * Get the main (Select) component of this controller as defined in the layout
     * @returns the main component of this controller
     */ getMainComponent() {
        return this.getComponent(this.layout.selectComponentId);
    }
    /**
     * Loads the model correlating to this controller
     * When the mesh is loaded, the onModelLoadedObservable will be triggered
     * @returns A promise fulfilled with the result of the model loading
     */ // eslint-disable-next-line @typescript-eslint/naming-convention
    async loadModel() {
        const useGeneric = !this._getModelLoadingConstraints();
        let loadingParams = this._getGenericFilenameAndPath();
        // Checking if GLB loader is present
        if (useGeneric) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn("Falling back to generic models");
        } else {
            loadingParams = this._getFilenameAndPath();
        }
        return await new Promise((resolve, reject)=>{
            const meshesLoaded = (meshes)=>{
                if (useGeneric) {
                    this._getGenericParentMesh(meshes);
                } else {
                    this._setRootMesh(meshes);
                }
                this._processLoadedModel(meshes);
                this._modelReady = true;
                this.onModelLoadedObservable.notifyObservers(this);
                resolve(true);
            };
            if (this._controllerCache) {
                // look for it in the cache
                const found = this._controllerCache.filter((c)=>{
                    return c.filename === loadingParams.filename && c.path === loadingParams.path;
                });
                if (found[0]) {
                    for (const mesh of found[0].meshes){
                        mesh.setEnabled(true);
                    }
                    meshesLoaded(found[0].meshes);
                    return;
                // found, don't continue to load
                }
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Loading$2f$sceneLoader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SceneLoader"].ImportMesh("", loadingParams.path, loadingParams.filename, this.scene, (meshes)=>{
                if (this._controllerCache) {
                    this._controllerCache.push({
                        ...loadingParams,
                        meshes
                    });
                }
                meshesLoaded(meshes);
            }, null, (_scene, message)=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Log(message);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn(`Failed to retrieve controller model of type ${this.profileId} from the remote server: ${loadingParams.path}${loadingParams.filename}`);
                // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
                reject(message);
            });
        });
    }
    /**
     * Update this model using the current XRFrame
     * @param xrFrame the current xr frame to use and update the model
     */ updateFromXRFrame(xrFrame) {
        for (const id of this.getComponentIds()){
            this.getComponent(id).update(this.gamepadObject);
        }
        this.updateModel(xrFrame);
    }
    /**
     * Backwards compatibility due to a deeply-integrated typo
     */ get handness() {
        return this.handedness;
    }
    /**
     * Pulse (vibrate) this controller
     * If the controller does not support pulses, this function will fail silently and return Promise<false> directly after called
     * Consecutive calls to this function will cancel the last pulse call
     *
     * @param value the strength of the pulse in 0.0...1.0 range
     * @param duration Duration of the pulse in milliseconds
     * @param hapticActuatorIndex optional index of actuator (will usually be 0)
     * @returns a promise that will send true when the pulse has ended and false if the device doesn't support pulse or an error accrued
     */ // eslint-disable-next-line @typescript-eslint/naming-convention
    async pulse(value, duration, hapticActuatorIndex = 0) {
        if (this.gamepadObject.hapticActuators && this.gamepadObject.hapticActuators[hapticActuatorIndex]) {
            return await this.gamepadObject.hapticActuators[hapticActuatorIndex].pulse(value, duration);
        } else {
            return false;
        }
    }
    // Look through all children recursively. This will return null if no mesh exists with the given name.
    _getChildByName(node, name) {
        return node.getChildren((n)=>n.name === name, false)[0];
    }
    // Look through only immediate children. This will return null if no mesh exists with the given name.
    _getImmediateChildByName(node, name) {
        return node.getChildren((n)=>n.name == name, true)[0];
    }
    /**
     * Moves the axis on the controller mesh based on its current state
     * @param axisMap
     * @param axisValue the value of the axis which determines the meshes new position
     * @internal
     */ _lerpTransform(axisMap, axisValue, fixValueCoordinates) {
        if (!axisMap.minMesh || !axisMap.maxMesh || !axisMap.valueMesh) {
            return;
        }
        if (!axisMap.minMesh.rotationQuaternion || !axisMap.maxMesh.rotationQuaternion || !axisMap.valueMesh.rotationQuaternion) {
            return;
        }
        // Convert from gamepad value range (-1 to +1) to lerp range (0 to 1)
        const lerpValue = fixValueCoordinates ? axisValue * 0.5 + 0.5 : axisValue;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"].SlerpToRef(axisMap.minMesh.rotationQuaternion, axisMap.maxMesh.rotationQuaternion, lerpValue, axisMap.valueMesh.rotationQuaternion);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].LerpToRef(axisMap.minMesh.position, axisMap.maxMesh.position, lerpValue, axisMap.valueMesh.position);
    }
    /**
     * Update the model itself with the current frame data
     * @param xrFrame the frame to use for updating the model mesh
     */ // eslint-disable-next-line @typescript-eslint/naming-convention
    updateModel(xrFrame) {
        if (!this._modelReady) {
            return;
        }
        this._updateModel(xrFrame);
    }
    _getGenericFilenameAndPath() {
        return {
            filename: "generic.babylon",
            path: "https://controllers.babylonjs.com/generic/"
        };
    }
    _getGenericParentMesh(meshes) {
        this.rootMesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](this.profileId + " " + this.handedness, this.scene);
        for (const mesh of meshes){
            if (!mesh.parent) {
                mesh.isPickable = false;
                mesh.setParent(this.rootMesh);
            }
        }
        this.rootMesh.rotationQuaternion = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"].FromEulerAngles(0, Math.PI, 0);
    }
} //# sourceMappingURL=webXRAbstractMotionController.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/motionController/webXRGenericMotionController.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WebXRGenericTriggerMotionController",
    ()=>WebXRGenericTriggerMotionController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$motionController$2f$webXRAbstractMotionController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/motionController/webXRAbstractMotionController.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/mesh.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
;
;
;
class WebXRGenericTriggerMotionController extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$motionController$2f$webXRAbstractMotionController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRAbstractMotionController"] {
    constructor(scene, gamepadObject, handedness){
        super(scene, GenericTriggerLayout[handedness], gamepadObject, handedness);
        this.profileId = WebXRGenericTriggerMotionController.ProfileId;
    }
    _getFilenameAndPath() {
        return {
            filename: "generic.babylon",
            path: "https://controllers.babylonjs.com/generic/"
        };
    }
    _getModelLoadingConstraints() {
        return true;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _processLoadedModel(meshes) {
    // nothing to do
    }
    _setRootMesh(meshes) {
        this.rootMesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](this.profileId + " " + this.handedness, this.scene);
        for (const mesh of meshes){
            mesh.isPickable = false;
            if (!mesh.parent) {
                mesh.setParent(this.rootMesh);
            }
        }
        this.rootMesh.rotationQuaternion = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"].FromEulerAngles(0, Math.PI, 0);
    }
    _updateModel() {
    // no-op
    }
}
/**
 * Static version of the profile id of this controller
 */ WebXRGenericTriggerMotionController.ProfileId = "generic-trigger";
// https://github.com/immersive-web/webxr-input-profiles/blob/master/packages/registry/profiles/generic/generic-trigger-touchpad-thumbstick.json
const GenericTriggerLayout = {
    left: {
        selectComponentId: "xr-standard-trigger",
        components: {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            "xr-standard-trigger": {
                type: "trigger",
                gamepadIndices: {
                    button: 0
                },
                rootNodeName: "xr_standard_trigger",
                visualResponses: {}
            }
        },
        gamepadMapping: "xr-standard",
        rootNodeName: "generic-trigger-left",
        assetPath: "left.glb"
    },
    right: {
        selectComponentId: "xr-standard-trigger",
        components: {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            "xr-standard-trigger": {
                type: "trigger",
                gamepadIndices: {
                    button: 0
                },
                rootNodeName: "xr_standard_trigger",
                visualResponses: {}
            }
        },
        gamepadMapping: "xr-standard",
        rootNodeName: "generic-trigger-right",
        assetPath: "right.glb"
    },
    none: {
        selectComponentId: "xr-standard-trigger",
        components: {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            "xr-standard-trigger": {
                type: "trigger",
                gamepadIndices: {
                    button: 0
                },
                rootNodeName: "xr_standard_trigger",
                visualResponses: {}
            }
        },
        gamepadMapping: "xr-standard",
        rootNodeName: "generic-trigger-none",
        assetPath: "none.glb"
    }
}; //# sourceMappingURL=webXRGenericMotionController.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/motionController/webXRProfiledMotionController.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WebXRProfiledMotionController",
    ()=>WebXRProfiledMotionController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$motionController$2f$webXRAbstractMotionController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/motionController/webXRAbstractMotionController.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Loading$2f$sceneLoader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Loading/sceneLoader.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/mesh.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$axis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.axis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.color.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$motionController$2f$webXRControllerComponent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/motionController/webXRControllerComponent.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$sphereBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/sphereBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$standardMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/standardMaterial.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
class WebXRProfiledMotionController extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$motionController$2f$webXRAbstractMotionController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRAbstractMotionController"] {
    constructor(scene, xrInput, _profile, _repositoryUrl, // eslint-disable-next-line @typescript-eslint/naming-convention
    controllerCache){
        super(scene, _profile.layouts[xrInput.handedness || "none"], xrInput.gamepad, xrInput.handedness, undefined, controllerCache);
        this._repositoryUrl = _repositoryUrl;
        this.controllerCache = controllerCache;
        this._buttonMeshMapping = {};
        this._touchDots = {};
        this.profileId = _profile.profileId;
    }
    dispose() {
        super.dispose();
        if (!this.controllerCache) {
            const keys = Object.keys(this._touchDots);
            for (const visResKey of keys){
                this._touchDots[visResKey].dispose();
            }
        }
    }
    _getFilenameAndPath() {
        return {
            filename: this.layout.assetPath,
            path: `${this._repositoryUrl}/profiles/${this.profileId}/`
        };
    }
    _getModelLoadingConstraints() {
        const glbLoaded = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Loading$2f$sceneLoader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SceneLoader"].IsPluginForExtensionAvailable(".glb");
        if (!glbLoaded) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn("glTF / glb loader was not registered, using generic controller instead");
        }
        return glbLoaded;
    }
    _processLoadedModel(_meshes) {
        const ids = this.getComponentIds();
        for (const type of ids){
            const componentInLayout = this.layout.components[type];
            this._buttonMeshMapping[type] = {
                mainMesh: this._getChildByName(this.rootMesh, componentInLayout.rootNodeName),
                states: {}
            };
            const keys = Object.keys(componentInLayout.visualResponses);
            for (const visualResponseKey of keys){
                const visResponse = componentInLayout.visualResponses[visualResponseKey];
                if (visResponse.valueNodeProperty === "transform") {
                    this._buttonMeshMapping[type].states[visualResponseKey] = {
                        valueMesh: this._getChildByName(this.rootMesh, visResponse.valueNodeName),
                        minMesh: this._getChildByName(this.rootMesh, visResponse.minNodeName),
                        maxMesh: this._getChildByName(this.rootMesh, visResponse.maxNodeName)
                    };
                } else {
                    // visibility, usually for touchpads
                    const nameOfMesh = componentInLayout.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$motionController$2f$webXRControllerComponent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRControllerComponent"].TOUCHPAD_TYPE && componentInLayout.touchPointNodeName ? componentInLayout.touchPointNodeName : visResponse.valueNodeName;
                    this._buttonMeshMapping[type].states[visualResponseKey] = {
                        valueMesh: this._getChildByName(this.rootMesh, nameOfMesh)
                    };
                    if (componentInLayout.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$motionController$2f$webXRControllerComponent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRControllerComponent"].TOUCHPAD_TYPE && !this._touchDots[visualResponseKey]) {
                        const dot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$sphereBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateSphere"])(visualResponseKey + "dot", {
                            diameter: 0.0015,
                            segments: 8
                        }, this.scene);
                        dot.material = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$standardMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StandardMaterial"](visualResponseKey + "mat", this.scene);
                        dot.material.diffuseColor = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"].Red();
                        dot.parent = this._buttonMeshMapping[type].states[visualResponseKey].valueMesh || null;
                        dot.isVisible = false;
                        this._touchDots[visualResponseKey] = dot;
                    }
                }
            }
        }
    }
    _setRootMesh(meshes) {
        this.rootMesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](this.profileId + "-" + this.handedness, this.scene);
        this.rootMesh.isPickable = false;
        let rootMesh;
        // Find the root node in the loaded glTF scene, and attach it as a child of 'parentMesh'
        for(let i = 0; i < meshes.length; i++){
            const mesh = meshes[i];
            mesh.isPickable = false;
            if (!mesh.parent) {
                // Handle root node, attach to the new parentMesh
                rootMesh = mesh;
            }
        }
        if (rootMesh) {
            rootMesh.setParent(this.rootMesh);
        }
        if (!this.scene.useRightHandedSystem) {
            this.rootMesh.rotate(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$axis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Axis"].Y, Math.PI, 1 /* Space.WORLD */ );
        }
    }
    _updateModel(_xrFrame) {
        if (this.disableAnimation) {
            return;
        }
        const ids = this.getComponentIds();
        for (const id of ids){
            const component = this.getComponent(id);
            if (!component.hasChanges) {
                continue;
            }
            const meshes = this._buttonMeshMapping[id];
            const componentInLayout = this.layout.components[id];
            const keys = Object.keys(componentInLayout.visualResponses);
            for (const visualResponseKey of keys){
                const visResponse = componentInLayout.visualResponses[visualResponseKey];
                let value = component.value;
                if (visResponse.componentProperty === "xAxis") {
                    value = component.axes.x;
                } else if (visResponse.componentProperty === "yAxis") {
                    value = component.axes.y;
                }
                if (visResponse.valueNodeProperty === "transform") {
                    this._lerpTransform(meshes.states[visualResponseKey], value, visResponse.componentProperty !== "button");
                } else {
                    // visibility
                    const valueMesh = meshes.states[visualResponseKey].valueMesh;
                    if (valueMesh) {
                        valueMesh.isVisible = component.touched || component.pressed;
                    }
                    if (this._touchDots[visualResponseKey]) {
                        this._touchDots[visualResponseKey].isVisible = component.touched || component.pressed;
                    }
                }
            }
        }
    }
} //# sourceMappingURL=webXRProfiledMotionController.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/motionController/webXRMotionControllerManager.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WebXRMotionControllerManager",
    ()=>WebXRMotionControllerManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$motionController$2f$webXRGenericMotionController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/motionController/webXRGenericMotionController.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/tools.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$motionController$2f$webXRProfiledMotionController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/motionController/webXRProfiledMotionController.js [app-ssr] (ecmascript)");
;
;
;
/**
 * The MotionController Manager manages all registered motion controllers and loads the right one when needed.
 *
 * When this repository is complete: https://github.com/immersive-web/webxr-input-profiles/tree/master/packages/assets
 * it should be replaced with auto-loaded controllers.
 *
 * When using a model try to stay as generic as possible. Eventually there will be no need in any of the controller classes
 */ const ControllerCache = [];
class WebXRMotionControllerManager {
    /**
     * Clear the cache used for profile loading and reload when requested again
     */ static ClearProfilesCache() {
        this._ProfilesList = null;
        this._ProfileLoadingPromises = {};
    }
    /**
     * Register the default fallbacks.
     * This function is called automatically when this file is imported.
     */ static DefaultFallbacks() {
        this.RegisterFallbacksForProfileId("google-daydream", [
            "generic-touchpad"
        ]);
        this.RegisterFallbacksForProfileId("htc-vive-focus", [
            "generic-trigger-touchpad"
        ]);
        this.RegisterFallbacksForProfileId("htc-vive", [
            "generic-trigger-squeeze-touchpad"
        ]);
        this.RegisterFallbacksForProfileId("magicleap-one", [
            "generic-trigger-squeeze-touchpad"
        ]);
        this.RegisterFallbacksForProfileId("windows-mixed-reality", [
            "generic-trigger-squeeze-touchpad-thumbstick"
        ]);
        this.RegisterFallbacksForProfileId("microsoft-mixed-reality", [
            "windows-mixed-reality",
            "generic-trigger-squeeze-touchpad-thumbstick"
        ]);
        this.RegisterFallbacksForProfileId("oculus-go", [
            "generic-trigger-touchpad"
        ]);
        this.RegisterFallbacksForProfileId("oculus-touch-v2", [
            "oculus-touch",
            "generic-trigger-squeeze-thumbstick"
        ]);
        this.RegisterFallbacksForProfileId("oculus-touch", [
            "generic-trigger-squeeze-thumbstick"
        ]);
        this.RegisterFallbacksForProfileId("samsung-gearvr", [
            "windows-mixed-reality",
            "generic-trigger-squeeze-touchpad-thumbstick"
        ]);
        this.RegisterFallbacksForProfileId("samsung-odyssey", [
            "generic-touchpad"
        ]);
        this.RegisterFallbacksForProfileId("valve-index", [
            "generic-trigger-squeeze-touchpad-thumbstick"
        ]);
        this.RegisterFallbacksForProfileId("generic-hand-select", [
            "generic-trigger"
        ]);
        this.RegisterFallbacksForProfileId("oculus-hand", [
            "generic-trigger"
        ]);
    }
    /**
     * Find a fallback profile if the profile was not found. There are a few predefined generic profiles.
     * @param profileId the profile to which a fallback needs to be found
     * @returns an array with corresponding fallback profiles
     */ static FindFallbackWithProfileId(profileId) {
        const returnArray = this._Fallbacks[profileId] || [];
        returnArray.unshift(profileId);
        return returnArray;
    }
    /**
     * When acquiring a new xrInput object (usually by the WebXRInput class), match it with the correct profile.
     * The order of search:
     *
     * 1) Iterate the profiles array of the xr input and try finding a corresponding motion controller
     * 2) (If not found) search in the gamepad id and try using it (legacy versions only)
     * 3) search for registered fallbacks (should be redundant, nonetheless it makes sense to check)
     * 4) return the generic trigger controller if none were found
     *
     * @param xrInput the xrInput to which a new controller is initialized
     * @param scene the scene to which the model will be added
     * @param forceProfile force a certain profile for this controller
     * @returns A promise that fulfils with the motion controller class for this profile id or the generic standard class if none was found
     */ static async GetMotionControllerWithXRInput(xrInput, scene, forceProfile) {
        const profileArray = [];
        if (forceProfile) {
            profileArray.push(forceProfile);
        }
        profileArray.push(...xrInput.profiles || []);
        // emulator support
        if (profileArray.length && !profileArray[0]) {
            // remove the first "undefined" that the emulator is adding
            profileArray.pop();
        }
        // legacy support - try using the gamepad id
        if (xrInput.gamepad && xrInput.gamepad.id) {
            switch(xrInput.gamepad.id){
                case xrInput.gamepad.id.match(/oculus touch/gi) ? xrInput.gamepad.id : undefined:
                    // oculus in gamepad id
                    profileArray.push("oculus-touch-v2");
                    break;
            }
        }
        // make sure microsoft/windows mixed reality works correctly
        const windowsMRIdx = profileArray.indexOf("windows-mixed-reality");
        if (windowsMRIdx !== -1) {
            profileArray.splice(windowsMRIdx, 0, "microsoft-mixed-reality");
        }
        if (!profileArray.length) {
            profileArray.push("generic-trigger");
        }
        if (this.UseOnlineRepository) {
            const firstFunction = this.PrioritizeOnlineRepository ? this._LoadProfileFromRepositoryAsync : this._LoadProfilesFromAvailableControllersAsync;
            const secondFunction = this.PrioritizeOnlineRepository ? this._LoadProfilesFromAvailableControllersAsync : this._LoadProfileFromRepositoryAsync;
            // eslint-disable-next-line github/no-then
            return firstFunction.call(this, profileArray, xrInput, scene).catch(()=>{
                return secondFunction.call(this, profileArray, xrInput, scene);
            });
        } else {
            // use only available functions
            return await this._LoadProfilesFromAvailableControllersAsync(profileArray, xrInput, scene);
        }
    }
    /**
     * Register a new controller based on its profile. This function will be called by the controller classes themselves.
     *
     * If you are missing a profile, make sure it is imported in your source, otherwise it will not register.
     *
     * @param type the profile type to register
     * @param constructFunction the function to be called when loading this profile
     */ static RegisterController(type, constructFunction) {
        this._AvailableControllers[type] = constructFunction;
    }
    /**
     * Register a fallback to a specific profile.
     * @param profileId the profileId that will receive the fallbacks
     * @param fallbacks A list of fallback profiles
     */ static RegisterFallbacksForProfileId(profileId, fallbacks) {
        if (this._Fallbacks[profileId]) {
            this._Fallbacks[profileId].push(...fallbacks);
        } else {
            this._Fallbacks[profileId] = fallbacks;
        }
    }
    /**
     * Will update the list of profiles available in the repository
     * @returns a promise that resolves to a map of profiles available online
     */ // eslint-disable-next-line @typescript-eslint/naming-convention
    static async UpdateProfilesList() {
        const data = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tools"].LoadFileAsync(this.BaseRepositoryUrl + "/profiles/profilesList.json", false);
        this._ProfilesList = JSON.parse(data);
        return await this._ProfilesList;
    }
    /**
     * Clear the controller's cache (usually happens at the end of a session)
     */ static ClearControllerCache() {
        for (const cacheItem of ControllerCache){
            for (const mesh of cacheItem.meshes){
                mesh.dispose(false, true);
            }
        }
        ControllerCache.length = 0;
    }
    static async _LoadProfileFromRepositoryAsync(profileArray, xrInput, scene) {
        return await Promise.resolve()// eslint-disable-next-line github/no-then
        .then(async ()=>{
            if (!this._ProfilesList) {
                return await this.UpdateProfilesList();
            } else {
                return await this._ProfilesList;
            }
        })// eslint-disable-next-line github/no-then
        .then((profilesList)=>{
            // load the right profile
            for(let i = 0; i < profileArray.length; ++i){
                // defensive
                if (!profileArray[i]) {
                    continue;
                }
                if (profilesList[profileArray[i]]) {
                    return profileArray[i];
                }
            }
            throw new Error(`neither controller ${profileArray[0]} nor all fallbacks were found in the repository,`);
        })// eslint-disable-next-line github/no-then
        .then(async (profileToLoad)=>{
            // load the profile
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            if (!this._ProfileLoadingPromises[profileToLoad]) {
                // eslint-disable-next-line github/no-then
                this._ProfileLoadingPromises[profileToLoad] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tools"].LoadFileAsync(`${this.BaseRepositoryUrl}/profiles/${profileToLoad}/profile.json`, false).then((data)=>JSON.parse(data));
            }
            return await this._ProfileLoadingPromises[profileToLoad];
        })// eslint-disable-next-line github/no-then
        .then((profile)=>{
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$motionController$2f$webXRProfiledMotionController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRProfiledMotionController"](scene, xrInput, profile, this.BaseRepositoryUrl, this.DisableControllerCache ? undefined : ControllerCache);
        });
    }
    static async _LoadProfilesFromAvailableControllersAsync(profileArray, xrInput, scene) {
        // check fallbacks
        for(let i = 0; i < profileArray.length; ++i){
            // defensive
            if (!profileArray[i]) {
                continue;
            }
            const fallbacks = this.FindFallbackWithProfileId(profileArray[i]);
            for(let j = 0; j < fallbacks.length; ++j){
                const constructionFunction = this._AvailableControllers[fallbacks[j]];
                if (constructionFunction) {
                    return constructionFunction(xrInput, scene);
                }
            }
        }
        throw new Error(`no controller requested was found in the available controllers list`);
    }
}
WebXRMotionControllerManager._AvailableControllers = {};
WebXRMotionControllerManager._Fallbacks = {};
// cache for loading
WebXRMotionControllerManager._ProfileLoadingPromises = {};
/**
 * The base URL of the online controller repository. Can be changed at any time.
 */ WebXRMotionControllerManager.BaseRepositoryUrl = "https://immersive-web.github.io/webxr-input-profiles/packages/viewer/dist";
/**
 * Which repository gets priority - local or online
 */ WebXRMotionControllerManager.PrioritizeOnlineRepository = true;
/**
 * Use the online repository, or use only locally-defined controllers
 */ WebXRMotionControllerManager.UseOnlineRepository = true;
/**
 * Disable the controller cache and load the models each time a new WebXRProfileMotionController is loaded.
 * Defaults to true.
 */ WebXRMotionControllerManager.DisableControllerCache = true;
// register the generic profile(s) here so we will at least have them
WebXRMotionControllerManager.RegisterController(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$motionController$2f$webXRGenericMotionController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRGenericTriggerMotionController"].ProfileId, (xrInput, scene)=>{
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$motionController$2f$webXRGenericMotionController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRGenericTriggerMotionController"](scene, xrInput.gamepad, xrInput.handedness);
});
// register fallbacks
WebXRMotionControllerManager.DefaultFallbacks(); //# sourceMappingURL=webXRMotionControllerManager.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/webXRInputSource.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WebXRInputSource",
    ()=>WebXRInputSource
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$motionController$2f$webXRMotionControllerManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/motionController/webXRMotionControllerManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/tools.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/mesh.js [app-ssr] (ecmascript)");
;
;
;
;
;
let IdCount = 0;
class WebXRInputSource {
    /**
     * Creates the input source object
     * @see https://doc.babylonjs.com/features/featuresDeepDive/webXR/webXRInputControllerSupport
     * @param _scene the scene which the controller should be associated to
     * @param inputSource the underlying input source for the controller
     * @param _options options for this controller creation
     */ constructor(_scene, /** The underlying input source for the controller  */ inputSource, _options = {}){
        this._scene = _scene;
        this.inputSource = inputSource;
        this._options = _options;
        this._tmpVector = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]();
        this._disposed = false;
        /**
         * Event that fires when the controller is removed/disposed.
         * The object provided as event data is this controller, after associated assets were disposed.
         * uniqueId is still available.
         */ this.onDisposeObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * Will be triggered when the mesh associated with the motion controller is done loading.
         * It is also possible that this will never trigger (!) if no mesh was loaded, or if the developer decides to load a different mesh
         * A shortened version of controller -> motion controller -> on mesh loaded.
         */ this.onMeshLoadedObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * Observers registered here will trigger when a motion controller profile was assigned to this xr controller
         */ this.onMotionControllerInitObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        this._uniqueId = `controller-${IdCount++}-${inputSource.targetRayMode}-${inputSource.handedness}`;
        this.pointer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](`${this._uniqueId}-pointer`, _scene);
        this.pointer.rotationQuaternion = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"]();
        if (this.inputSource.gripSpace) {
            this.grip = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](`${this._uniqueId}-grip`, this._scene);
            this.grip.rotationQuaternion = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"]();
        }
        this._tmpVector.set(0, 0, this._scene.useRightHandedSystem ? -1.0 : 1.0);
        // for now only load motion controllers if gamepad object available
        if (this.inputSource.gamepad && this.inputSource.targetRayMode === "tracked-pointer") {
            // eslint-disable-next-line github/no-then
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$motionController$2f$webXRMotionControllerManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRMotionControllerManager"].GetMotionControllerWithXRInput(inputSource, _scene, this._options.forceControllerProfile).then((motionController)=>{
                this.motionController = motionController;
                this.onMotionControllerInitObservable.notifyObservers(motionController);
                // should the model be loaded?
                if (!this._options.doNotLoadControllerMesh && !this.motionController._doNotLoadControllerMesh) {
                    // eslint-disable-next-line @typescript-eslint/no-floating-promises, github/no-then
                    this.motionController.loadModel().then((success)=>{
                        if (success && this.motionController && this.motionController.rootMesh) {
                            if (this._options.renderingGroupId) {
                                // anything other than 0?
                                this.motionController.rootMesh.renderingGroupId = this._options.renderingGroupId;
                                const childMeshes = this.motionController.rootMesh.getChildMeshes(false);
                                for (const mesh of childMeshes){
                                    mesh.renderingGroupId = this._options.renderingGroupId;
                                }
                            }
                            this.onMeshLoadedObservable.notifyObservers(this.motionController.rootMesh);
                            this.motionController.rootMesh.parent = this.grip || this.pointer;
                            this.motionController.disableAnimation = !!this._options.disableMotionControllerAnimation;
                        }
                        // make sure to dispose is the controller is already disposed
                        if (this._disposed) {
                            this.motionController?.dispose();
                        }
                    });
                }
            }, ()=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tools"].Warn(`Could not find a matching motion controller for the registered input source`);
            });
        }
    }
    /**
     * Get this controllers unique id
     */ get uniqueId() {
        return this._uniqueId;
    }
    /**
     * Disposes of the object
     */ dispose() {
        if (this.grip) {
            this.grip.dispose(true);
        }
        if (this.motionController) {
            this.motionController.dispose();
        }
        this.pointer.dispose(true);
        this.onMotionControllerInitObservable.clear();
        this.onMeshLoadedObservable.clear();
        this.onDisposeObservable.notifyObservers(this);
        this.onDisposeObservable.clear();
        this._disposed = true;
    }
    /**
     * Gets a world space ray coming from the pointer or grip
     * @param result the resulting ray
     * @param gripIfAvailable use the grip mesh instead of the pointer, if available
     */ getWorldPointerRayToRef(result, gripIfAvailable = false) {
        const object = gripIfAvailable && this.grip ? this.grip : this.pointer;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].TransformNormalToRef(this._tmpVector, object.getWorldMatrix(), result.direction);
        result.direction.normalize();
        result.origin.copyFrom(object.absolutePosition);
        result.length = 1000;
    }
    /**
     * Updates the controller pose based on the given XRFrame
     * @param xrFrame xr frame to update the pose with
     * @param referenceSpace reference space to use
     * @param xrCamera the xr camera, used for parenting
     * @param xrSessionManager the session manager used to get the world reference system
     */ updateFromXRFrame(xrFrame, referenceSpace, xrCamera, xrSessionManager) {
        const pose = xrFrame.getPose(this.inputSource.targetRaySpace, referenceSpace);
        this._lastXRPose = pose;
        // Update the pointer mesh
        if (pose) {
            const pos = pose.transform.position;
            this.pointer.position.set(pos.x, pos.y, pos.z).scaleInPlace(xrSessionManager.worldScalingFactor);
            const orientation = pose.transform.orientation;
            this.pointer.rotationQuaternion.set(orientation.x, orientation.y, orientation.z, orientation.w);
            if (!this._scene.useRightHandedSystem) {
                this.pointer.position.z *= -1;
                this.pointer.rotationQuaternion.z *= -1;
                this.pointer.rotationQuaternion.w *= -1;
            }
            this.pointer.parent = xrCamera.parent;
            this.pointer.scaling.setAll(xrSessionManager.worldScalingFactor);
        }
        // Update the grip mesh if it exists
        if (this.inputSource.gripSpace && this.grip) {
            const pose = xrFrame.getPose(this.inputSource.gripSpace, referenceSpace);
            if (pose) {
                const pos = pose.transform.position;
                const orientation = pose.transform.orientation;
                this.grip.position.set(pos.x, pos.y, pos.z).scaleInPlace(xrSessionManager.worldScalingFactor);
                this.grip.rotationQuaternion.set(orientation.x, orientation.y, orientation.z, orientation.w);
                if (!this._scene.useRightHandedSystem) {
                    this.grip.position.z *= -1;
                    this.grip.rotationQuaternion.z *= -1;
                    this.grip.rotationQuaternion.w *= -1;
                }
            }
            this.grip.parent = xrCamera.parent;
            this.grip.scaling.setAll(xrSessionManager.worldScalingFactor);
        }
        if (this.motionController) {
            // either update buttons only or also position, if in gamepad mode
            this.motionController.updateFromXRFrame(xrFrame);
        }
    }
} //# sourceMappingURL=webXRInputSource.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/webXRInput.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WebXRInput",
    ()=>WebXRInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRInputSource$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/webXRInputSource.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$motionController$2f$webXRMotionControllerManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/motionController/webXRMotionControllerManager.js [app-ssr] (ecmascript)");
;
;
;
class WebXRInput {
    /**
     * Initializes the WebXRInput
     * @param xrSessionManager the xr session manager for this session
     * @param xrCamera the WebXR camera for this session. Mainly used for teleportation
     * @param _options = initialization options for this xr input
     */ constructor(/**
     * the xr session manager for this session
     */ xrSessionManager, /**
     * the WebXR camera for this session. Mainly used for teleportation
     */ xrCamera, _options = {}){
        this.xrSessionManager = xrSessionManager;
        this.xrCamera = xrCamera;
        this._options = _options;
        /**
         * XR controllers being tracked
         */ this.controllers = [];
        /**
         * Event when a controller has been connected/added
         */ this.onControllerAddedObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * Event when a controller has been removed/disconnected
         */ this.onControllerRemovedObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        this._onInputSourcesChange = (event)=>{
            this._addAndRemoveControllers(event.added, event.removed);
        };
        // Remove controllers when exiting XR
        this._sessionEndedObserver = this.xrSessionManager.onXRSessionEnded.add(()=>{
            this._addAndRemoveControllers([], this.controllers.map((c)=>{
                return c.inputSource;
            }));
        });
        this._sessionInitObserver = this.xrSessionManager.onXRSessionInit.add((session)=>{
            session.addEventListener("inputsourceschange", this._onInputSourcesChange);
        });
        this._frameObserver = this.xrSessionManager.onXRFrameObservable.add((frame)=>{
            // Update controller pose info
            for (const controller of this.controllers){
                controller.updateFromXRFrame(frame, this.xrSessionManager.referenceSpace, this.xrCamera, this.xrSessionManager);
            }
        });
        if (this._options.customControllersRepositoryURL) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$motionController$2f$webXRMotionControllerManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRMotionControllerManager"].BaseRepositoryUrl = this._options.customControllersRepositoryURL;
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$motionController$2f$webXRMotionControllerManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRMotionControllerManager"].UseOnlineRepository = !this._options.disableOnlineControllerRepository;
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$motionController$2f$webXRMotionControllerManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRMotionControllerManager"].UseOnlineRepository) {
            // pre-load the profiles list to load the controllers quicker afterwards
            try {
                // eslint-disable-next-line github/no-then
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$motionController$2f$webXRMotionControllerManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRMotionControllerManager"].UpdateProfilesList().catch(()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$motionController$2f$webXRMotionControllerManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRMotionControllerManager"].UseOnlineRepository = false;
                });
            } catch (e) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$motionController$2f$webXRMotionControllerManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRMotionControllerManager"].UseOnlineRepository = false;
            }
        }
    }
    _addAndRemoveControllers(addInputs, removeInputs) {
        // Add controllers if they don't already exist
        const sources = this.controllers.map((c)=>{
            return c.inputSource;
        });
        for (const input of addInputs){
            if (sources.indexOf(input) === -1) {
                const controller = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRInputSource$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRInputSource"](this.xrSessionManager.scene, input, {
                    ...this._options.controllerOptions || {},
                    forceControllerProfile: this._options.forceInputProfile,
                    doNotLoadControllerMesh: this._options.doNotLoadControllerMeshes,
                    disableMotionControllerAnimation: this._options.disableControllerAnimation
                });
                this.controllers.push(controller);
                this.onControllerAddedObservable.notifyObservers(controller);
            }
        }
        // Remove and dispose of controllers to be disposed
        const keepControllers = [];
        const removedControllers = [];
        for (const c of this.controllers){
            if (removeInputs.indexOf(c.inputSource) === -1) {
                keepControllers.push(c);
            } else {
                removedControllers.push(c);
            }
        }
        this.controllers = keepControllers;
        for (const c of removedControllers){
            this.onControllerRemovedObservable.notifyObservers(c);
            c.dispose();
        }
    }
    /**
     * Disposes of the object
     */ dispose() {
        for (const c of this.controllers){
            c.dispose();
        }
        this.xrSessionManager.onXRFrameObservable.remove(this._frameObserver);
        this.xrSessionManager.onXRSessionInit.remove(this._sessionInitObserver);
        this.xrSessionManager.onXRSessionEnded.remove(this._sessionEndedObserver);
        this.onControllerAddedObservable.clear();
        this.onControllerRemovedObservable.clear();
        // clear the controller cache
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$motionController$2f$webXRMotionControllerManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRMotionControllerManager"].ClearControllerCache();
    }
} //# sourceMappingURL=webXRInput.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/WebXRAbstractFeature.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WebXRAbstractFeature",
    ()=>WebXRAbstractFeature
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-ssr] (ecmascript)");
;
;
class WebXRAbstractFeature {
    /**
     * The name of the native xr feature name (like anchor, hit-test, or hand-tracking)
     */ get xrNativeFeatureName() {
        return this._xrNativeFeatureName;
    }
    set xrNativeFeatureName(name) {
        // check if feature was initialized while in session but needs to be initialized before the session starts
        if (!this._xrSessionManager.isNative && name && this._xrSessionManager.inXRSession && this._xrSessionManager.enabledFeatures?.indexOf(name) === -1) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn(`The feature ${name} needs to be enabled before starting the XR session. Note - It is still possible it is not supported.`);
        }
        this._xrNativeFeatureName = name;
    }
    /**
     * Construct a new (abstract) WebXR feature
     * @param _xrSessionManager the xr session manager for this feature
     */ constructor(_xrSessionManager){
        this._xrSessionManager = _xrSessionManager;
        this._attached = false;
        this._removeOnDetach = [];
        /**
         * Is this feature disposed?
         */ this.isDisposed = false;
        /**
         * Should auto-attach be disabled?
         */ this.disableAutoAttach = false;
        this._xrNativeFeatureName = "";
        /**
         * Observers registered here will be executed when the feature is attached
         */ this.onFeatureAttachObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * Observers registered here will be executed when the feature is detached
         */ this.onFeatureDetachObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
    }
    /**
     * Is this feature attached
     */ get attached() {
        return this._attached;
    }
    /**
     * attach this feature
     *
     * @param force should attachment be forced (even when already attached)
     * @returns true if successful, false is failed or already attached
     */ attach(force) {
        // do not attach a disposed feature
        if (this.isDisposed) {
            return false;
        }
        if (!force) {
            if (this.attached) {
                return false;
            }
        } else {
            if (this.attached) {
                // detach first, to be sure
                this.detach();
            }
        }
        // if this is a native WebXR feature, check if it is enabled on the session
        // For now only check if not using babylon native
        // vision OS doesn't support the enabledFeatures array, so just warn instead of failing
        if (!this._xrSessionManager.enabledFeatures) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn("session.enabledFeatures is not available on this device. It is possible that this feature is not supported.");
        } else if (!this._xrSessionManager.isNative && this.xrNativeFeatureName && this._xrSessionManager.enabledFeatures.indexOf(this.xrNativeFeatureName) === -1) {
            return false;
        }
        this._attached = true;
        this._addNewAttachObserver(this._xrSessionManager.onXRFrameObservable, (frame)=>this._onXRFrame(frame));
        this.onFeatureAttachObservable.notifyObservers(this);
        return true;
    }
    /**
     * detach this feature.
     *
     * @returns true if successful, false if failed or already detached
     */ detach() {
        if (!this._attached) {
            this.disableAutoAttach = true;
            return false;
        }
        this._attached = false;
        for (const toRemove of this._removeOnDetach){
            toRemove.observable.remove(toRemove.observer);
        }
        this.onFeatureDetachObservable.notifyObservers(this);
        return true;
    }
    /**
     * Dispose this feature and all of the resources attached
     */ dispose() {
        this.detach();
        this.isDisposed = true;
        this.onFeatureAttachObservable.clear();
        this.onFeatureDetachObservable.clear();
    }
    /**
     * This function will be executed during before enabling the feature and can be used to not-allow enabling it.
     * Note that at this point the session has NOT started, so this is purely checking if the browser supports it
     *
     * @returns whether or not the feature is compatible in this environment
     */ isCompatible() {
        return true;
    }
    /**
     * This is used to register callbacks that will automatically be removed when detach is called.
     * @param observable the observable to which the observer will be attached
     * @param callback the callback to register
     * @param insertFirst should the callback be executed as soon as it is registered
     */ _addNewAttachObserver(observable, callback, insertFirst) {
        this._removeOnDetach.push({
            observable,
            observer: observable.add(callback, undefined, insertFirst)
        });
    }
} //# sourceMappingURL=WebXRAbstractFeature.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/WebXRControllerPointerSelection.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WebXRControllerPointerSelection",
    ()=>WebXRControllerPointerSelection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRFeaturesManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/webXRFeaturesManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.color.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$axis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.axis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$standardMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/standardMaterial.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$cylinderBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/cylinderBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$torusBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/torusBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$ray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Culling/ray.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$ray$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Culling/ray.core.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Collisions$2f$pickingInfo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Collisions/pickingInfo.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRAbstractFeature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/WebXRAbstractFeature.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Rendering$2f$utilityLayerRenderer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Rendering/utilityLayerRenderer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$viewport$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.viewport.js [app-ssr] (ecmascript)");
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
class WebXRControllerPointerSelection extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRAbstractFeature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRAbstractFeature"] {
    /**
     * constructs a new background remover module
     * @param _xrSessionManager the session manager for this module
     * @param _options read-only options to be used in this module
     */ constructor(_xrSessionManager, _options){
        super(_xrSessionManager);
        this._options = _options;
        this._attachController = (xrController)=>{
            if (this._controllers[xrController.uniqueId]) {
                // already attached
                return;
            }
            const { laserPointer, selectionMesh } = this._generateNewMeshPair(this._options.forceGripIfAvailable && xrController.grip ? xrController.grip : xrController.pointer);
            // get two new meshes
            this._controllers[xrController.uniqueId] = {
                xrController,
                laserPointer,
                selectionMesh,
                meshUnderPointer: null,
                pick: null,
                tmpRay: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$ray$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Ray"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]()),
                disabledByNearInteraction: false,
                id: WebXRControllerPointerSelection._IdCounter++
            };
            if (this._attachedController) {
                if (!this._options.enablePointerSelectionOnAllControllers && this._options.preferredHandedness && xrController.inputSource.handedness === this._options.preferredHandedness) {
                    this._attachedController = xrController.uniqueId;
                }
            } else {
                if (!this._options.enablePointerSelectionOnAllControllers) {
                    this._attachedController = xrController.uniqueId;
                }
            }
            switch(xrController.inputSource.targetRayMode){
                case "tracked-pointer":
                    return this._attachTrackedPointerRayMode(xrController);
                case "gaze":
                    return this._attachGazeMode(xrController);
                case "screen":
                case "transient-pointer":
                    return this._attachScreenRayMode(xrController);
            }
        };
        this._controllers = {};
        this._tmpVectorForPickCompare = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]();
        /**
         * Disable lighting on the laser pointer (so it will always be visible)
         */ this.disablePointerLighting = true;
        /**
         * Disable lighting on the selection mesh (so it will always be visible)
         */ this.disableSelectionMeshLighting = true;
        /**
         * Should the laser pointer be displayed
         */ this.displayLaserPointer = true;
        /**
         * Should the selection mesh be displayed (The ring at the end of the laser pointer)
         */ this.displaySelectionMesh = true;
        /**
         * This color will be set to the laser pointer when selection is triggered
         */ this.laserPointerPickedColor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"](0.9, 0.9, 0.9);
        /**
         * Default color of the laser pointer
         */ this.laserPointerDefaultColor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"](0.7, 0.7, 0.7);
        /**
         * default color of the selection ring
         */ this.selectionMeshDefaultColor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"](0.8, 0.8, 0.8);
        /**
         * This color will be applied to the selection ring when selection is triggered
         */ this.selectionMeshPickedColor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"](0.3, 0.3, 1.0);
        this._identityMatrix = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].Identity();
        this._screenCoordinatesRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        this._viewportRef = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$viewport$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Viewport"](0, 0, 0, 0);
        this._scene = this._xrSessionManager.scene;
        // force look and pick mode if using WebXR on safari, assuming it is vision OS
        // Only if not explicitly set. If set to false, it will not be forced
        if (this._options.lookAndPickMode === undefined && (this._scene.getEngine()._badDesktopOS || this._scene.getEngine()._badOS)) {
            this._options.lookAndPickMode = true;
        }
        // look and pick mode extra state changes
        if (this._options.lookAndPickMode) {
            this._options.enablePointerSelectionOnAllControllers = true;
            this.displayLaserPointer = false;
        }
    }
    /**
     * attach this feature
     * Will usually be called by the features manager
     *
     * @returns true if successful.
     */ attach() {
        if (!super.attach()) {
            return false;
        }
        for (const controller of this._options.xrInput.controllers){
            this._attachController(controller);
        }
        this._addNewAttachObserver(this._options.xrInput.onControllerAddedObservable, this._attachController, true);
        this._addNewAttachObserver(this._options.xrInput.onControllerRemovedObservable, (controller)=>{
            // REMOVE the controller
            this._detachController(controller.uniqueId);
        }, true);
        this._scene.constantlyUpdateMeshUnderPointer = true;
        if (this._options.gazeCamera) {
            const webXRCamera = this._options.gazeCamera;
            const { laserPointer, selectionMesh } = this._generateNewMeshPair(webXRCamera);
            this._controllers["camera"] = {
                webXRCamera,
                laserPointer,
                selectionMesh,
                meshUnderPointer: null,
                pick: null,
                tmpRay: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$ray$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Ray"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]()),
                disabledByNearInteraction: false,
                id: WebXRControllerPointerSelection._IdCounter++
            };
            this._attachGazeMode();
        }
        return true;
    }
    /**
     * detach this feature.
     * Will usually be called by the features manager
     *
     * @returns true if successful.
     */ detach() {
        if (!super.detach()) {
            return false;
        }
        const keys = Object.keys(this._controllers);
        for (const controllerId of keys){
            this._detachController(controllerId);
        }
        return true;
    }
    /**
     * Will get the mesh under a specific pointer.
     * `scene.meshUnderPointer` will only return one mesh - either left or right.
     * @param controllerId the controllerId to check
     * @returns The mesh under pointer or null if no mesh is under the pointer
     */ getMeshUnderPointer(controllerId) {
        if (this._controllers[controllerId]) {
            return this._controllers[controllerId].meshUnderPointer;
        } else {
            return null;
        }
    }
    /**
     * Get the xr controller that correlates to the pointer id in the pointer event
     *
     * @param id the pointer id to search for
     * @returns the controller that correlates to this id or null if not found
     */ getXRControllerByPointerId(id) {
        const keys = Object.keys(this._controllers);
        for(let i = 0; i < keys.length; ++i){
            if (this._controllers[keys[i]].id === id) {
                return this._controllers[keys[i]].xrController || null;
            }
        }
        return null;
    }
    /**
     * @internal
     */ _getPointerSelectionDisabledByPointerId(id) {
        const keys = Object.keys(this._controllers);
        for(let i = 0; i < keys.length; ++i){
            if (this._controllers[keys[i]].id === id) {
                return this._controllers[keys[i]].disabledByNearInteraction;
            }
        }
        return true;
    }
    /**
     * @internal
     */ _setPointerSelectionDisabledByPointerId(id, state) {
        const keys = Object.keys(this._controllers);
        for(let i = 0; i < keys.length; ++i){
            if (this._controllers[keys[i]].id === id) {
                this._controllers[keys[i]].disabledByNearInteraction = state;
                return;
            }
        }
    }
    _onXRFrame(_xrFrame) {
        const keys = Object.keys(this._controllers);
        for (const id of keys){
            // look and pick mode
            // only do this for the selected pointer
            const controllerData = this._controllers[id];
            if (this._options.lookAndPickMode && controllerData.xrController?.inputSource.targetRayMode !== "transient-pointer") {
                continue;
            }
            if (!this._options.enablePointerSelectionOnAllControllers && id !== this._attachedController || controllerData.disabledByNearInteraction) {
                controllerData.selectionMesh.isVisible = false;
                controllerData.laserPointer.isVisible = false;
                controllerData.pick = null;
                continue;
            }
            controllerData.laserPointer.isVisible = this.displayLaserPointer;
            let controllerGlobalPosition;
            // Every frame check collisions/input
            if (controllerData.xrController) {
                controllerGlobalPosition = this._options.forceGripIfAvailable && controllerData.xrController.grip ? controllerData.xrController.grip.position : controllerData.xrController.pointer.position;
                controllerData.xrController.getWorldPointerRayToRef(controllerData.tmpRay, this._options.forceGripIfAvailable);
            } else if (controllerData.webXRCamera) {
                controllerGlobalPosition = controllerData.webXRCamera.position;
                controllerData.webXRCamera.getForwardRayToRef(controllerData.tmpRay);
            } else {
                continue;
            }
            if (this._options.maxPointerDistance) {
                controllerData.tmpRay.length = this._options.maxPointerDistance;
            }
            // update pointerX and pointerY of the scene. Only if the flag is set to true!
            if (!this._options.disableScenePointerVectorUpdate && controllerGlobalPosition) {
                const scene = this._xrSessionManager.scene;
                const camera = this._options.xrInput.xrCamera;
                if (camera) {
                    camera.viewport.toGlobalToRef(scene.getEngine().getRenderWidth() / camera.rigCameras.length, scene.getEngine().getRenderHeight(), this._viewportRef);
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].ProjectToRef(controllerGlobalPosition, this._identityMatrix, camera.getTransformationMatrix(), this._viewportRef, this._screenCoordinatesRef);
                    // stay safe
                    if (typeof this._screenCoordinatesRef.x === "number" && typeof this._screenCoordinatesRef.y === "number" && !isNaN(this._screenCoordinatesRef.x) && !isNaN(this._screenCoordinatesRef.y) && this._screenCoordinatesRef.x !== Infinity && this._screenCoordinatesRef.y !== Infinity) {
                        scene.pointerX = this._screenCoordinatesRef.x;
                        scene.pointerY = this._screenCoordinatesRef.y;
                        controllerData.screenCoordinates = {
                            x: this._screenCoordinatesRef.x,
                            y: this._screenCoordinatesRef.y
                        };
                    }
                }
            }
            let utilityScenePick = null;
            if (this._utilityLayerScene) {
                utilityScenePick = this._utilityLayerScene.pickWithRay(controllerData.tmpRay, this._utilityLayerScene.pointerMovePredicate || this.raySelectionPredicate);
            }
            const originalScenePick = this._scene.pickWithRay(controllerData.tmpRay, this._scene.pointerMovePredicate || this.raySelectionPredicate);
            if (!utilityScenePick || !utilityScenePick.hit) {
                // No hit in utility scene
                controllerData.pick = originalScenePick;
            } else if (!originalScenePick || !originalScenePick.hit) {
                // No hit in original scene
                controllerData.pick = utilityScenePick;
            } else if (utilityScenePick.distance < originalScenePick.distance) {
                // Hit is closer in utility scene
                controllerData.pick = utilityScenePick;
            } else {
                // Hit is closer in original scene
                controllerData.pick = originalScenePick;
            }
            if (controllerData.pick && controllerData.xrController) {
                controllerData.pick.aimTransform = controllerData.xrController.pointer;
                controllerData.pick.gripTransform = controllerData.xrController.grip || null;
                controllerData.pick.originMesh = controllerData.xrController.pointer;
                controllerData.tmpRay.length = controllerData.pick.distance;
            }
            const pick = controllerData.pick;
            if (pick && pick.pickedPoint && pick.hit) {
                // Update laser state
                this._updatePointerDistance(controllerData.laserPointer, pick.distance);
                // Update cursor state
                controllerData.selectionMesh.position.copyFrom(pick.pickedPoint);
                controllerData.selectionMesh.scaling.x = Math.sqrt(pick.distance);
                controllerData.selectionMesh.scaling.y = Math.sqrt(pick.distance);
                controllerData.selectionMesh.scaling.z = Math.sqrt(pick.distance);
                // To avoid z-fighting
                const pickNormal = this._convertNormalToDirectionOfRay(pick.getNormal(true), controllerData.tmpRay);
                const deltaFighting = 0.001;
                controllerData.selectionMesh.position.copyFrom(pick.pickedPoint);
                if (pickNormal) {
                    const axis1 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Cross(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$axis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Axis"].Y, pickNormal);
                    const axis2 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Cross(pickNormal, axis1);
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].RotationFromAxisToRef(axis2, pickNormal, axis1, controllerData.selectionMesh.rotation);
                    controllerData.selectionMesh.position.addInPlace(pickNormal.scale(deltaFighting));
                }
                controllerData.selectionMesh.isVisible = this.displaySelectionMesh;
                controllerData.meshUnderPointer = pick.pickedMesh;
            } else {
                controllerData.selectionMesh.isVisible = false;
                this._updatePointerDistance(controllerData.laserPointer, 1);
                controllerData.meshUnderPointer = null;
            }
        }
    }
    get _utilityLayerScene() {
        return this._options.customUtilityLayerScene || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Rendering$2f$utilityLayerRenderer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UtilityLayerRenderer"].DefaultUtilityLayer.utilityLayerScene;
    }
    _attachGazeMode(xrController) {
        const controllerData = this._controllers[xrController && xrController.uniqueId || "camera"];
        // attached when touched, detaches when raised
        const timeToSelect = this._options.timeToSelect || 3000;
        const sceneToRenderTo = this._options.useUtilityLayer ? this._utilityLayerScene : this._scene;
        let oldPick = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Collisions$2f$pickingInfo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PickingInfo"]();
        const discMesh = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$torusBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateTorus"])("selection", {
            diameter: 0.0035 * 15,
            thickness: 0.0025 * 6,
            tessellation: 20
        }, sceneToRenderTo);
        discMesh.isVisible = false;
        discMesh.isPickable = false;
        discMesh.parent = controllerData.selectionMesh;
        let timer = 0;
        let downTriggered = false;
        const pointerEventInit = {
            pointerId: controllerData.id,
            pointerType: "xr"
        };
        controllerData.onFrameObserver = this._xrSessionManager.onXRFrameObservable.add(()=>{
            if (!controllerData.pick) {
                return;
            }
            this._augmentPointerInit(pointerEventInit, controllerData.id, controllerData.screenCoordinates);
            controllerData.laserPointer.material.alpha = 0;
            discMesh.isVisible = false;
            if (controllerData.pick.hit) {
                if (!this._pickingMoved(oldPick, controllerData.pick)) {
                    if (timer > timeToSelect / 10) {
                        discMesh.isVisible = true;
                    }
                    timer += this._scene.getEngine().getDeltaTime();
                    if (timer >= timeToSelect) {
                        this._scene.simulatePointerDown(controllerData.pick, pointerEventInit);
                        // this pointerdown event is not setting the controllerData.pointerDownTriggered to avoid a pointerUp event when this feature is detached
                        downTriggered = true;
                        // pointer up right after down, if disable on touch out
                        if (this._options.disablePointerUpOnTouchOut) {
                            this._scene.simulatePointerUp(controllerData.pick, pointerEventInit);
                        }
                        discMesh.isVisible = false;
                    } else {
                        const scaleFactor = 1 - timer / timeToSelect;
                        discMesh.scaling.set(scaleFactor, scaleFactor, scaleFactor);
                    }
                } else {
                    if (downTriggered) {
                        if (!this._options.disablePointerUpOnTouchOut) {
                            this._scene.simulatePointerUp(controllerData.pick, pointerEventInit);
                        }
                    }
                    downTriggered = false;
                    timer = 0;
                }
            } else {
                downTriggered = false;
                timer = 0;
            }
            this._scene.simulatePointerMove(controllerData.pick, pointerEventInit);
            oldPick = controllerData.pick;
        });
        if (this._options.renderingGroupId !== undefined) {
            discMesh.renderingGroupId = this._options.renderingGroupId;
        }
        if (xrController) {
            xrController.onDisposeObservable.addOnce(()=>{
                if (controllerData.pick && !this._options.disablePointerUpOnTouchOut && downTriggered) {
                    this._scene.simulatePointerUp(controllerData.pick, pointerEventInit);
                    controllerData.finalPointerUpTriggered = true;
                }
                discMesh.dispose();
            });
        }
    }
    _attachScreenRayMode(xrController) {
        const controllerData = this._controllers[xrController.uniqueId];
        let downTriggered = false;
        const pointerEventInit = {
            pointerId: controllerData.id,
            pointerType: "xr"
        };
        controllerData.onFrameObserver = this._xrSessionManager.onXRFrameObservable.add(()=>{
            this._augmentPointerInit(pointerEventInit, controllerData.id, controllerData.screenCoordinates);
            if (!controllerData.pick || this._options.disablePointerUpOnTouchOut && downTriggered) {
                return;
            }
            if (!downTriggered) {
                this._scene.simulatePointerDown(controllerData.pick, pointerEventInit);
                controllerData.pointerDownTriggered = true;
                downTriggered = true;
                if (this._options.disablePointerUpOnTouchOut) {
                    this._scene.simulatePointerUp(controllerData.pick, pointerEventInit);
                }
            } else {
                this._scene.simulatePointerMove(controllerData.pick, pointerEventInit);
            }
        });
        xrController.onDisposeObservable.addOnce(()=>{
            this._augmentPointerInit(pointerEventInit, controllerData.id, controllerData.screenCoordinates);
            this._xrSessionManager.runInXRFrame(()=>{
                if (controllerData.pick && !controllerData.finalPointerUpTriggered && downTriggered && !this._options.disablePointerUpOnTouchOut) {
                    this._scene.simulatePointerUp(controllerData.pick, pointerEventInit);
                    controllerData.finalPointerUpTriggered = true;
                }
            });
        });
    }
    _attachTrackedPointerRayMode(xrController) {
        const controllerData = this._controllers[xrController.uniqueId];
        if (this._options.forceGazeMode) {
            return this._attachGazeMode(xrController);
        }
        const pointerEventInit = {
            pointerId: controllerData.id,
            pointerType: "xr"
        };
        controllerData.onFrameObserver = this._xrSessionManager.onXRFrameObservable.add(()=>{
            controllerData.laserPointer.material.disableLighting = this.disablePointerLighting;
            controllerData.selectionMesh.material.disableLighting = this.disableSelectionMeshLighting;
            if (controllerData.pick) {
                this._augmentPointerInit(pointerEventInit, controllerData.id, controllerData.screenCoordinates);
                this._scene.simulatePointerMove(controllerData.pick, pointerEventInit);
            }
        });
        if (xrController.inputSource.gamepad) {
            const init = (motionController)=>{
                if (this._options.overrideButtonId) {
                    controllerData.selectionComponent = motionController.getComponent(this._options.overrideButtonId);
                }
                if (!controllerData.selectionComponent) {
                    controllerData.selectionComponent = motionController.getMainComponent();
                }
                controllerData.onButtonChangedObserver = controllerData.selectionComponent.onButtonStateChangedObservable.add((component)=>{
                    if (component.changes.pressed) {
                        const pressed = component.changes.pressed.current;
                        if (controllerData.pick) {
                            if (this._options.enablePointerSelectionOnAllControllers || xrController.uniqueId === this._attachedController) {
                                this._augmentPointerInit(pointerEventInit, controllerData.id, controllerData.screenCoordinates);
                                if (pressed) {
                                    this._scene.simulatePointerDown(controllerData.pick, pointerEventInit);
                                    controllerData.pointerDownTriggered = true;
                                    controllerData.selectionMesh.material.emissiveColor = this.selectionMeshPickedColor;
                                    controllerData.laserPointer.material.emissiveColor = this.laserPointerPickedColor;
                                } else {
                                    this._scene.simulatePointerUp(controllerData.pick, pointerEventInit);
                                    controllerData.selectionMesh.material.emissiveColor = this.selectionMeshDefaultColor;
                                    controllerData.laserPointer.material.emissiveColor = this.laserPointerDefaultColor;
                                }
                            }
                        } else {
                            if (pressed && !this._options.enablePointerSelectionOnAllControllers && !this._options.disableSwitchOnClick) {
                                // force a pointer up if switching controllers
                                // get the controller that was attached before
                                const prevController = this._controllers[this._attachedController];
                                if (prevController && prevController.pointerDownTriggered && !prevController.finalPointerUpTriggered) {
                                    this._augmentPointerInit(pointerEventInit, prevController.id, prevController.screenCoordinates);
                                    this._scene.simulatePointerUp(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Collisions$2f$pickingInfo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PickingInfo"](), {
                                        pointerId: prevController.id,
                                        pointerType: "xr"
                                    });
                                    prevController.finalPointerUpTriggered = true;
                                }
                                this._attachedController = xrController.uniqueId;
                            }
                        }
                    }
                });
            };
            if (xrController.motionController) {
                init(xrController.motionController);
            } else {
                xrController.onMotionControllerInitObservable.add(init);
            }
        } else {
            // use the select and squeeze events
            const selectStartListener = (event)=>{
                this._xrSessionManager.onXRFrameObservable.addOnce(()=>{
                    this._augmentPointerInit(pointerEventInit, controllerData.id, controllerData.screenCoordinates);
                    if (controllerData.xrController && event.inputSource === controllerData.xrController.inputSource && controllerData.pick) {
                        this._scene.simulatePointerDown(controllerData.pick, pointerEventInit);
                        controllerData.pointerDownTriggered = true;
                        controllerData.selectionMesh.material.emissiveColor = this.selectionMeshPickedColor;
                        controllerData.laserPointer.material.emissiveColor = this.laserPointerPickedColor;
                    }
                });
            };
            const selectEndListener = (event)=>{
                this._xrSessionManager.onXRFrameObservable.addOnce(()=>{
                    this._augmentPointerInit(pointerEventInit, controllerData.id, controllerData.screenCoordinates);
                    if (controllerData.xrController && event.inputSource === controllerData.xrController.inputSource && controllerData.pick) {
                        this._scene.simulatePointerUp(controllerData.pick, pointerEventInit);
                        controllerData.selectionMesh.material.emissiveColor = this.selectionMeshDefaultColor;
                        controllerData.laserPointer.material.emissiveColor = this.laserPointerDefaultColor;
                    }
                });
            };
            controllerData.eventListeners = {
                selectend: selectEndListener,
                selectstart: selectStartListener
            };
            this._xrSessionManager.session.addEventListener("selectstart", selectStartListener);
            this._xrSessionManager.session.addEventListener("selectend", selectEndListener);
        }
    }
    _convertNormalToDirectionOfRay(normal, ray) {
        if (normal) {
            const angle = Math.acos(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Dot(normal, ray.direction));
            if (angle < Math.PI / 2) {
                normal.scaleInPlace(-1);
            }
        }
        return normal;
    }
    _detachController(xrControllerUniqueId) {
        const controllerData = this._controllers[xrControllerUniqueId];
        if (!controllerData) {
            return;
        }
        if (controllerData.selectionComponent) {
            if (controllerData.onButtonChangedObserver) {
                controllerData.selectionComponent.onButtonStateChangedObservable.remove(controllerData.onButtonChangedObserver);
            }
        }
        if (controllerData.onFrameObserver) {
            this._xrSessionManager.onXRFrameObservable.remove(controllerData.onFrameObserver);
        }
        if (controllerData.eventListeners) {
            const keys = Object.keys(controllerData.eventListeners);
            for (const eventName of keys){
                const func = controllerData.eventListeners && controllerData.eventListeners[eventName];
                if (func) {
                    // For future reference - this is an issue in the WebXR typings.
                    this._xrSessionManager.session.removeEventListener(eventName, func);
                }
            }
        }
        if (!controllerData.finalPointerUpTriggered && controllerData.pointerDownTriggered) {
            // Stay safe and fire a pointerup, in case it wasn't already triggered
            const pointerEventInit = {
                pointerId: controllerData.id,
                pointerType: "xr"
            };
            this._xrSessionManager.runInXRFrame(()=>{
                this._augmentPointerInit(pointerEventInit, controllerData.id, controllerData.screenCoordinates);
                this._scene.simulatePointerUp(controllerData.pick || new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Collisions$2f$pickingInfo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PickingInfo"](), pointerEventInit);
                controllerData.finalPointerUpTriggered = true;
            });
        }
        this._xrSessionManager.scene.onBeforeRenderObservable.addOnce(()=>{
            try {
                controllerData.selectionMesh.dispose();
                controllerData.laserPointer.dispose();
                // remove from the map
                delete this._controllers[xrControllerUniqueId];
                if (this._attachedController === xrControllerUniqueId) {
                    // check for other controllers
                    const keys = Object.keys(this._controllers);
                    if (keys.length) {
                        this._attachedController = keys[0];
                    } else {
                        this._attachedController = "";
                    }
                }
            } catch (e) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tools"].Warn("controller already detached.");
            }
        });
    }
    _generateNewMeshPair(meshParent) {
        const sceneToRenderTo = this._options.useUtilityLayer ? this._options.customUtilityLayerScene || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Rendering$2f$utilityLayerRenderer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UtilityLayerRenderer"].DefaultUtilityLayer.utilityLayerScene : this._scene;
        const laserPointer = this._options.customLasterPointerMeshGenerator ? this._options.customLasterPointerMeshGenerator() : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$cylinderBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateCylinder"])("laserPointer", {
            height: 1,
            diameterTop: 0.0002,
            diameterBottom: 0.004,
            tessellation: 20,
            subdivisions: 1
        }, sceneToRenderTo);
        laserPointer.parent = meshParent;
        const laserPointerMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$standardMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StandardMaterial"]("laserPointerMat", sceneToRenderTo);
        laserPointerMaterial.emissiveColor = this.laserPointerDefaultColor;
        laserPointerMaterial.alpha = 0.7;
        laserPointer.material = laserPointerMaterial;
        laserPointer.rotation.x = Math.PI / 2;
        this._updatePointerDistance(laserPointer, 1);
        laserPointer.isPickable = false;
        laserPointer.isVisible = false;
        // Create a gaze tracker for the  XR controller
        const selectionMesh = this._options.customSelectionMeshGenerator ? this._options.customSelectionMeshGenerator() : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$torusBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateTorus"])("gazeTracker", {
            diameter: 0.0035 * 3,
            thickness: 0.0025 * 3,
            tessellation: 20
        }, sceneToRenderTo);
        selectionMesh.bakeCurrentTransformIntoVertices();
        selectionMesh.isPickable = false;
        selectionMesh.isVisible = false;
        const targetMat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$standardMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StandardMaterial"]("targetMat", sceneToRenderTo);
        targetMat.specularColor = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"].Black();
        targetMat.emissiveColor = this.selectionMeshDefaultColor;
        targetMat.backFaceCulling = false;
        selectionMesh.material = targetMat;
        if (this._options.renderingGroupId !== undefined) {
            laserPointer.renderingGroupId = this._options.renderingGroupId;
            selectionMesh.renderingGroupId = this._options.renderingGroupId;
        }
        return {
            laserPointer,
            selectionMesh
        };
    }
    _pickingMoved(oldPick, newPick) {
        if (!oldPick.hit || !newPick.hit) {
            return true;
        }
        if (!oldPick.pickedMesh || !oldPick.pickedPoint || !newPick.pickedMesh || !newPick.pickedPoint) {
            return true;
        }
        if (oldPick.pickedMesh !== newPick.pickedMesh) {
            return true;
        }
        oldPick.pickedPoint?.subtractToRef(newPick.pickedPoint, this._tmpVectorForPickCompare);
        this._tmpVectorForPickCompare.set(Math.abs(this._tmpVectorForPickCompare.x), Math.abs(this._tmpVectorForPickCompare.y), Math.abs(this._tmpVectorForPickCompare.z));
        const delta = (this._options.gazeModePointerMovedFactor || 1) * 0.01 * newPick.distance;
        const length = this._tmpVectorForPickCompare.length();
        if (length > delta) {
            return true;
        }
        return false;
    }
    _updatePointerDistance(_laserPointer, distance = 100) {
        _laserPointer.scaling.y = distance;
        // a bit of distance from the controller
        if (this._scene.useRightHandedSystem) {
            distance *= -1;
        }
        _laserPointer.position.z = distance / 2 + 0.05;
    }
    _augmentPointerInit(pointerEventInit, id, screenCoordinates) {
        pointerEventInit.pointerId = id;
        pointerEventInit.pointerType = "xr";
        if (screenCoordinates) {
            pointerEventInit.screenX = screenCoordinates.x;
            pointerEventInit.screenY = screenCoordinates.y;
        }
    }
    /** @internal */ get lasterPointerDefaultColor() {
        // here due to a typo
        return this.laserPointerDefaultColor;
    }
}
WebXRControllerPointerSelection._IdCounter = 200;
/**
 * The module's name
 */ WebXRControllerPointerSelection.Name = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRFeaturesManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRFeatureName"].POINTER_SELECTION;
/**
 * The (Babylon) version of this module.
 * This is an integer representing the implementation version.
 * This number does not correspond to the WebXR specs version
 */ WebXRControllerPointerSelection.Version = 1;
//register the plugin
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRFeaturesManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRFeaturesManager"].AddWebXRFeature(WebXRControllerPointerSelection.Name, (xrSessionManager, options)=>{
    return ()=>new WebXRControllerPointerSelection(xrSessionManager, options);
}, WebXRControllerPointerSelection.Version, true); //# sourceMappingURL=WebXRControllerPointerSelection.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/WebXRNearInteraction.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WebXRNearControllerMode",
    ()=>WebXRNearControllerMode,
    "WebXRNearInteraction",
    ()=>WebXRNearInteraction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRFeaturesManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/webXRFeaturesManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$sphereBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/sphereBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$ray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Culling/ray.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$ray$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Culling/ray.core.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Collisions$2f$pickingInfo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Collisions/pickingInfo.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRAbstractFeature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/WebXRAbstractFeature.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Rendering$2f$utilityLayerRenderer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Rendering/utilityLayerRenderer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$boundingSphere$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Culling/boundingSphere.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$standardMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/standardMaterial.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.color.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterial.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Animations/animation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$easing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Animations/easing.js [app-ssr] (ecmascript)");
// side effects
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$subMesh$2e$project$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/subMesh.project.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-ssr] (ecmascript)");
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
// Tracks the interaction animation state when using a motion controller with a near interaction orb
var ControllerOrbAnimationState;
(function(ControllerOrbAnimationState) {
    /**
     * Orb is invisible
     */ ControllerOrbAnimationState[ControllerOrbAnimationState["DEHYDRATED"] = 0] = "DEHYDRATED";
    /**
     * Orb is visible and inside the hover range
     */ ControllerOrbAnimationState[ControllerOrbAnimationState["HOVER"] = 1] = "HOVER";
    /**
     * Orb is visible and touching a near interaction target
     */ ControllerOrbAnimationState[ControllerOrbAnimationState["TOUCH"] = 2] = "TOUCH";
})(ControllerOrbAnimationState || (ControllerOrbAnimationState = {}));
var WebXRNearControllerMode;
(function(WebXRNearControllerMode) {
    /**
     * Motion controllers will not support near interaction
     */ WebXRNearControllerMode[WebXRNearControllerMode["DISABLED"] = 0] = "DISABLED";
    /**
     * The interaction point for motion controllers will be inside of them
     */ WebXRNearControllerMode[WebXRNearControllerMode["CENTERED_ON_CONTROLLER"] = 1] = "CENTERED_ON_CONTROLLER";
    /**
     * The interaction point for motion controllers will be in front of the controller
     */ WebXRNearControllerMode[WebXRNearControllerMode["CENTERED_IN_FRONT"] = 2] = "CENTERED_IN_FRONT";
})(WebXRNearControllerMode || (WebXRNearControllerMode = {}));
const LocalTempVectors = [
    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](),
    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](),
    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](),
    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]()
];
class WebXRNearInteraction extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRAbstractFeature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRAbstractFeature"] {
    /**
     * constructs a new background remover module
     * @param _xrSessionManager the session manager for this module
     * @param _options read-only options to be used in this module
     */ constructor(_xrSessionManager, _options){
        super(_xrSessionManager);
        this._options = _options;
        this._tmpRay = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$ray$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Ray"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]());
        this._attachController = (xrController)=>{
            if (this._controllers[xrController.uniqueId]) {
                // already attached
                return;
            }
            // get two new meshes
            const { touchCollisionMesh, touchCollisionMeshFunction, hydrateCollisionMeshFunction } = this._generateNewTouchPointMesh();
            const selectionMesh = this._generateVisualCue();
            this._controllers[xrController.uniqueId] = {
                xrController,
                meshUnderPointer: null,
                nearInteractionTargetMesh: null,
                pick: null,
                stalePick: null,
                touchCollisionMesh,
                touchCollisionMeshFunction: touchCollisionMeshFunction,
                hydrateCollisionMeshFunction: hydrateCollisionMeshFunction,
                currentAnimationState: ControllerOrbAnimationState.DEHYDRATED,
                grabRay: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$ray$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Ray"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]()),
                hoverInteraction: false,
                nearInteraction: false,
                grabInteraction: false,
                downTriggered: false,
                id: WebXRNearInteraction._IdCounter++,
                pickedPointVisualCue: selectionMesh
            };
            this._controllers[xrController.uniqueId]._worldScaleObserver = this._controllers[xrController.uniqueId]._worldScaleObserver || this._xrSessionManager.onWorldScaleFactorChangedObservable.add((values)=>{
                if (values.newScaleFactor !== values.previousScaleFactor) {
                    this._controllers[xrController.uniqueId].touchCollisionMesh.dispose();
                    this._controllers[xrController.uniqueId].pickedPointVisualCue.dispose();
                    const { touchCollisionMesh, touchCollisionMeshFunction, hydrateCollisionMeshFunction } = this._generateNewTouchPointMesh();
                    this._controllers[xrController.uniqueId].touchCollisionMesh = touchCollisionMesh;
                    this._controllers[xrController.uniqueId].touchCollisionMeshFunction = touchCollisionMeshFunction;
                    this._controllers[xrController.uniqueId].hydrateCollisionMeshFunction = hydrateCollisionMeshFunction;
                    this._controllers[xrController.uniqueId].pickedPointVisualCue = this._generateVisualCue();
                }
            });
            if (this._attachedController) {
                if (!this._options.enableNearInteractionOnAllControllers && this._options.preferredHandedness && xrController.inputSource.handedness === this._options.preferredHandedness) {
                    this._attachedController = xrController.uniqueId;
                }
            } else {
                if (!this._options.enableNearInteractionOnAllControllers) {
                    this._attachedController = xrController.uniqueId;
                }
            }
            switch(xrController.inputSource.targetRayMode){
                case "tracked-pointer":
                    return this._attachNearInteractionMode(xrController);
                case "gaze":
                    return null;
                case "screen":
                    return null;
            }
        };
        this._controllers = {};
        this._farInteractionFeature = null;
        /**
         * default color of the selection ring
         */ this.selectionMeshDefaultColor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"](0.8, 0.8, 0.8);
        /**
         * This color will be applied to the selection ring when selection is triggered
         */ this.selectionMeshPickedColor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"](0.3, 0.3, 1.0);
        /**
         * If set to true, the selection mesh will always be hidden. Otherwise it will be shown only when needed
         */ this.alwaysHideSelectionMesh = false;
        this._hoverRadius = 0.1;
        this._pickRadius = 0.02;
        this._controllerPickRadius = 0.03; // The radius is slightly larger here to make it easier to manipulate since it's not tied to the hand position
        this._nearGrabLengthScale = 5;
        this._scene = this._xrSessionManager.scene;
        if (this._options.nearInteractionControllerMode === undefined) {
            this._options.nearInteractionControllerMode = 2 /* WebXRNearControllerMode.CENTERED_IN_FRONT */ ;
        }
        if (this._options.farInteractionFeature) {
            this._farInteractionFeature = this._options.farInteractionFeature;
        }
    }
    /**
     * Attach this feature
     * Will usually be called by the features manager
     *
     * @returns true if successful.
     */ attach() {
        if (!super.attach()) {
            return false;
        }
        for (const controller of this._options.xrInput.controllers){
            this._attachController(controller);
        }
        this._addNewAttachObserver(this._options.xrInput.onControllerAddedObservable, this._attachController);
        this._addNewAttachObserver(this._options.xrInput.onControllerRemovedObservable, (controller)=>{
            // REMOVE the controller
            this._detachController(controller.uniqueId);
        });
        this._scene.constantlyUpdateMeshUnderPointer = true;
        return true;
    }
    /**
     * Detach this feature.
     * Will usually be called by the features manager
     *
     * @returns true if successful.
     */ detach() {
        if (!super.detach()) {
            return false;
        }
        const keys = Object.keys(this._controllers);
        for (const controllerId of keys){
            this._detachController(controllerId);
        }
        return true;
    }
    /**
     * Will get the mesh under a specific pointer.
     * `scene.meshUnderPointer` will only return one mesh - either left or right.
     * @param controllerId the controllerId to check
     * @returns The mesh under pointer or null if no mesh is under the pointer
     */ getMeshUnderPointer(controllerId) {
        if (this._controllers[controllerId]) {
            return this._controllers[controllerId].meshUnderPointer;
        } else {
            return null;
        }
    }
    /**
     * Get the xr controller that correlates to the pointer id in the pointer event
     *
     * @param id the pointer id to search for
     * @returns the controller that correlates to this id or null if not found
     */ getXRControllerByPointerId(id) {
        const keys = Object.keys(this._controllers);
        for(let i = 0; i < keys.length; ++i){
            if (this._controllers[keys[i]].id === id) {
                return this._controllers[keys[i]].xrController || null;
            }
        }
        return null;
    }
    /**
     * This function sets webXRControllerPointerSelection feature that will be disabled when
     * the hover range is reached for a mesh and will be reattached when not in hover range.
     * This is used to remove the selection rays when moving.
     * @param farInteractionFeature the feature to disable when finger is in hover range for a mesh
     */ setFarInteractionFeature(farInteractionFeature) {
        this._farInteractionFeature = farInteractionFeature;
    }
    /**
     * Filter used for near interaction pick and hover
     * @param mesh the mesh candidate to be pick-filtered
     * @returns if the mesh should be included in the list of candidate meshes for near interaction
     */ _nearPickPredicate(mesh) {
        return mesh.isEnabled() && mesh.isVisible && mesh.isPickable && mesh.isNearPickable;
    }
    /**
     * Filter used for near interaction grab
     * @param mesh the mesh candidate to be pick-filtered
     * @returns if the mesh should be included in the list of candidate meshes for near interaction
     */ _nearGrabPredicate(mesh) {
        return mesh.isEnabled() && mesh.isVisible && mesh.isPickable && mesh.isNearGrabbable;
    }
    /**
     * Filter used for any near interaction
     * @param mesh the mesh candidate to be pick-filtered
     * @returns if the mesh should be included in the list of candidate meshes for near interaction
     */ _nearInteractionPredicate(mesh) {
        return mesh.isEnabled() && mesh.isVisible && mesh.isPickable && (mesh.isNearPickable || mesh.isNearGrabbable);
    }
    _controllerAvailablePredicate(mesh, controllerId) {
        let parent = mesh;
        while(parent){
            if (parent.reservedDataStore && parent.reservedDataStore.nearInteraction && parent.reservedDataStore.nearInteraction.excludedControllerId === controllerId) {
                return false;
            }
            parent = parent.parent;
        }
        return true;
    }
    _handleTransitionAnimation(controllerData, newState) {
        if (controllerData.currentAnimationState === newState || this._options.nearInteractionControllerMode !== 2 /* WebXRNearControllerMode.CENTERED_IN_FRONT */  || !!controllerData.xrController?.inputSource.hand) {
            return;
        }
        // Don't always break to allow for animation fallthrough on rare cases of multi-transitions
        if (newState > controllerData.currentAnimationState) {
            switch(controllerData.currentAnimationState){
                case ControllerOrbAnimationState.DEHYDRATED:
                    {
                        controllerData.hydrateCollisionMeshFunction(true);
                        if (newState === ControllerOrbAnimationState.HOVER) {
                            break;
                        }
                    }
                // eslint-disable-next-line no-fallthrough
                case ControllerOrbAnimationState.HOVER:
                    {
                        controllerData.touchCollisionMeshFunction(true);
                        if (newState === ControllerOrbAnimationState.TOUCH) {
                            break;
                        }
                    }
            }
        } else {
            switch(controllerData.currentAnimationState){
                case ControllerOrbAnimationState.TOUCH:
                    {
                        controllerData.touchCollisionMeshFunction(false);
                        if (newState === ControllerOrbAnimationState.HOVER) {
                            break;
                        }
                    }
                // eslint-disable-next-line no-fallthrough
                case ControllerOrbAnimationState.HOVER:
                    {
                        controllerData.hydrateCollisionMeshFunction(false);
                        if (newState === ControllerOrbAnimationState.DEHYDRATED) {
                            break;
                        }
                    }
            }
        }
        controllerData.currentAnimationState = newState;
    }
    _processTouchPoint(id, position, orientation) {
        const controllerData = this._controllers[id];
        // Position and orientation could be temporary values, se we take care of them before calling any functions that use temporary vectors/quaternions
        controllerData.grabRay.origin.copyFrom(position);
        orientation.toEulerAnglesToRef(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0]);
        controllerData.grabRay.direction.copyFrom(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0]);
        if (this._options.nearInteractionControllerMode === 2 /* WebXRNearControllerMode.CENTERED_IN_FRONT */  && !controllerData.xrController?.inputSource.hand) {
            // offset the touch point in the direction the transform is facing
            controllerData.xrController.getWorldPointerRayToRef(this._tmpRay);
            controllerData.grabRay.origin.addInPlace(this._tmpRay.direction.scale(0.05));
        }
        controllerData.grabRay.length = this._nearGrabLengthScale * this._hoverRadius * this._xrSessionManager.worldScalingFactor;
        controllerData.touchCollisionMesh.position.copyFrom(controllerData.grabRay.origin).scaleInPlace(this._xrSessionManager.worldScalingFactor);
    }
    _onXRFrame(_xrFrame) {
        const keys = Object.keys(this._controllers);
        for (const id of keys){
            // only do this for the selected pointer
            const controllerData = this._controllers[id];
            const handData = controllerData.xrController?.inputSource.hand;
            // If near interaction is not enabled/available for this controller, return early
            if (!this._options.enableNearInteractionOnAllControllers && id !== this._attachedController || !controllerData.xrController || !handData && (!this._options.nearInteractionControllerMode || !controllerData.xrController.inputSource.gamepad)) {
                controllerData.pick = null;
                return;
            }
            controllerData.hoverInteraction = false;
            controllerData.nearInteraction = false;
            // Every frame check collisions/input
            if (controllerData.xrController) {
                if (handData) {
                    const xrIndexTip = handData.get("index-finger-tip");
                    if (xrIndexTip) {
                        const indexTipPose = _xrFrame.getJointPose(xrIndexTip, this._xrSessionManager.referenceSpace);
                        if (indexTipPose && indexTipPose.transform) {
                            const axisRHSMultiplier = this._scene.useRightHandedSystem ? 1 : -1;
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0].set(indexTipPose.transform.position.x, indexTipPose.transform.position.y, indexTipPose.transform.position.z * axisRHSMultiplier);
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Quaternion[0].set(indexTipPose.transform.orientation.x, indexTipPose.transform.orientation.y, indexTipPose.transform.orientation.z * axisRHSMultiplier, indexTipPose.transform.orientation.w * axisRHSMultiplier);
                            this._processTouchPoint(id, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Quaternion[0]);
                        }
                    }
                } else if (controllerData.xrController.inputSource.gamepad && this._options.nearInteractionControllerMode !== 0 /* WebXRNearControllerMode.DISABLED */ ) {
                    let controllerPose = controllerData.xrController.pointer;
                    if (controllerData.xrController.grip && this._options.nearInteractionControllerMode === 1 /* WebXRNearControllerMode.CENTERED_ON_CONTROLLER */ ) {
                        controllerPose = controllerData.xrController.grip;
                    }
                    this._processTouchPoint(id, controllerPose.position, controllerPose.rotationQuaternion);
                }
            } else {
                return;
            }
            const accuratePickInfo = (originalScenePick, utilityScenePick)=>{
                let pick = null;
                if (!utilityScenePick || !utilityScenePick.hit) {
                    // No hit in utility scene
                    pick = originalScenePick;
                } else if (!originalScenePick || !originalScenePick.hit) {
                    // No hit in original scene
                    pick = utilityScenePick;
                } else if (utilityScenePick.distance < originalScenePick.distance) {
                    // Hit is closer in utility scene
                    pick = utilityScenePick;
                } else {
                    // Hit is closer in original scene
                    pick = originalScenePick;
                }
                return pick;
            };
            const populateNearInteractionInfo = (nearInteractionInfo)=>{
                let result = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Collisions$2f$pickingInfo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PickingInfo"]();
                let nearInteractionAtOrigin = false;
                const nearInteraction = nearInteractionInfo && nearInteractionInfo.pickedPoint && nearInteractionInfo.hit;
                if (nearInteractionInfo?.pickedPoint) {
                    nearInteractionAtOrigin = nearInteractionInfo.pickedPoint.x === 0 && nearInteractionInfo.pickedPoint.y === 0 && nearInteractionInfo.pickedPoint.z === 0;
                }
                if (nearInteraction && !nearInteractionAtOrigin) {
                    result = nearInteractionInfo;
                }
                return result;
            };
            // Don't perform touch logic while grabbing, to prevent triggering touch interactions while in the middle of a grab interaction
            // Dont update cursor logic either - the cursor should already be visible for the grab to be in range,
            // and in order to maintain its position on the target mesh it is parented for the duration of the grab.
            if (!controllerData.grabInteraction) {
                let pick = null;
                // near interaction hover
                let utilitySceneHoverPick = null;
                if (this._options.useUtilityLayer && this._utilityLayerScene) {
                    utilitySceneHoverPick = this._pickWithSphere(controllerData, this._hoverRadius * this._xrSessionManager.worldScalingFactor, this._utilityLayerScene, (mesh)=>this._nearInteractionPredicate(mesh));
                }
                const originalSceneHoverPick = this._pickWithSphere(controllerData, this._hoverRadius * this._xrSessionManager.worldScalingFactor, this._scene, (mesh)=>this._nearInteractionPredicate(mesh));
                const hoverPickInfo = accuratePickInfo(originalSceneHoverPick, utilitySceneHoverPick);
                if (hoverPickInfo && hoverPickInfo.hit) {
                    pick = populateNearInteractionInfo(hoverPickInfo);
                    if (pick.hit) {
                        controllerData.hoverInteraction = true;
                    }
                }
                // near interaction pick
                if (controllerData.hoverInteraction) {
                    let utilitySceneNearPick = null;
                    const radius = (handData ? this._pickRadius : this._controllerPickRadius) * this._xrSessionManager.worldScalingFactor;
                    if (this._options.useUtilityLayer && this._utilityLayerScene) {
                        utilitySceneNearPick = this._pickWithSphere(controllerData, radius, this._utilityLayerScene, (mesh)=>this._nearPickPredicate(mesh));
                    }
                    const originalSceneNearPick = this._pickWithSphere(controllerData, radius, this._scene, (mesh)=>this._nearPickPredicate(mesh));
                    const pickInfo = accuratePickInfo(originalSceneNearPick, utilitySceneNearPick);
                    const nearPick = populateNearInteractionInfo(pickInfo);
                    if (nearPick.hit) {
                        // Near pick takes precedence over hover interaction
                        pick = nearPick;
                        controllerData.nearInteraction = true;
                    }
                }
                controllerData.stalePick = controllerData.pick;
                controllerData.pick = pick;
                // Update mesh under pointer
                if (controllerData.pick && controllerData.pick.pickedPoint && controllerData.pick.hit) {
                    controllerData.meshUnderPointer = controllerData.pick.pickedMesh;
                    controllerData.pickedPointVisualCue.position.copyFrom(controllerData.pick.pickedPoint);
                    controllerData.pickedPointVisualCue.isVisible = !this.alwaysHideSelectionMesh;
                    if (this._farInteractionFeature && this._farInteractionFeature.attached) {
                        this._farInteractionFeature._setPointerSelectionDisabledByPointerId(controllerData.id, true);
                    }
                } else {
                    controllerData.meshUnderPointer = null;
                    controllerData.pickedPointVisualCue.isVisible = false;
                    if (this._farInteractionFeature && this._farInteractionFeature.attached) {
                        this._farInteractionFeature._setPointerSelectionDisabledByPointerId(controllerData.id, false);
                    }
                }
            }
            // Update the interaction animation. Only updates if the visible touch mesh is active
            let state = ControllerOrbAnimationState.DEHYDRATED;
            if (controllerData.grabInteraction || controllerData.nearInteraction) {
                state = ControllerOrbAnimationState.TOUCH;
            } else if (controllerData.hoverInteraction) {
                state = ControllerOrbAnimationState.HOVER;
            }
            this._handleTransitionAnimation(controllerData, state);
        }
    }
    get _utilityLayerScene() {
        return this._options.customUtilityLayerScene || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Rendering$2f$utilityLayerRenderer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UtilityLayerRenderer"].DefaultUtilityLayer.utilityLayerScene;
    }
    _generateVisualCue() {
        const sceneToRenderTo = this._options.useUtilityLayer ? this._options.customUtilityLayerScene || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Rendering$2f$utilityLayerRenderer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UtilityLayerRenderer"].DefaultUtilityLayer.utilityLayerScene : this._scene;
        const selectionMesh = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$sphereBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateSphere"])("nearInteraction", {
            diameter: 0.0035 * 3 * this._xrSessionManager.worldScalingFactor
        }, sceneToRenderTo);
        selectionMesh.bakeCurrentTransformIntoVertices();
        selectionMesh.isPickable = false;
        selectionMesh.isVisible = false;
        selectionMesh.rotationQuaternion = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"].Identity();
        const targetMat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$standardMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StandardMaterial"]("targetMat", sceneToRenderTo);
        targetMat.specularColor = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"].Black();
        targetMat.emissiveColor = this.selectionMeshDefaultColor;
        targetMat.backFaceCulling = false;
        selectionMesh.material = targetMat;
        return selectionMesh;
    }
    _isControllerReadyForNearInteraction(id) {
        if (this._farInteractionFeature) {
            return this._farInteractionFeature._getPointerSelectionDisabledByPointerId(id);
        }
        return true;
    }
    _attachNearInteractionMode(xrController) {
        const controllerData = this._controllers[xrController.uniqueId];
        const pointerEventInit = {
            pointerId: controllerData.id,
            pointerType: "xr-near"
        };
        controllerData.onFrameObserver = this._xrSessionManager.onXRFrameObservable.add(()=>{
            if (!this._options.enableNearInteractionOnAllControllers && xrController.uniqueId !== this._attachedController || !controllerData.xrController || !controllerData.xrController.inputSource.hand && (!this._options.nearInteractionControllerMode || !controllerData.xrController.inputSource.gamepad)) {
                return;
            }
            if (controllerData.pick) {
                controllerData.pick.ray = controllerData.grabRay;
            }
            if (controllerData.pick && this._isControllerReadyForNearInteraction(controllerData.id)) {
                this._scene.simulatePointerMove(controllerData.pick, pointerEventInit);
            }
            // Near pick pointer event
            if (controllerData.nearInteraction && controllerData.pick && controllerData.pick.hit) {
                if (!controllerData.nearInteractionTargetMesh) {
                    this._scene.simulatePointerDown(controllerData.pick, pointerEventInit);
                    controllerData.nearInteractionTargetMesh = controllerData.meshUnderPointer;
                    controllerData.downTriggered = true;
                }
            } else if (controllerData.nearInteractionTargetMesh && controllerData.stalePick) {
                this._scene.simulatePointerUp(controllerData.stalePick, pointerEventInit);
                controllerData.downTriggered = false;
                controllerData.nearInteractionTargetMesh = null;
            }
        });
        const grabCheck = (pressed)=>{
            if (this._options.enableNearInteractionOnAllControllers || xrController.uniqueId === this._attachedController && this._isControllerReadyForNearInteraction(controllerData.id)) {
                if (controllerData.pick) {
                    controllerData.pick.ray = controllerData.grabRay;
                }
                if (pressed && controllerData.pick && controllerData.meshUnderPointer && this._nearGrabPredicate(controllerData.meshUnderPointer)) {
                    controllerData.grabInteraction = true;
                    controllerData.pickedPointVisualCue.isVisible = false;
                    this._scene.simulatePointerDown(controllerData.pick, pointerEventInit);
                    controllerData.downTriggered = true;
                } else if (!pressed && controllerData.pick && controllerData.grabInteraction) {
                    this._scene.simulatePointerUp(controllerData.pick, pointerEventInit);
                    controllerData.downTriggered = false;
                    controllerData.grabInteraction = false;
                    controllerData.pickedPointVisualCue.isVisible = !this.alwaysHideSelectionMesh;
                }
            } else {
                if (pressed && !this._options.enableNearInteractionOnAllControllers && !this._options.disableSwitchOnClick) {
                    this._attachedController = xrController.uniqueId;
                }
            }
        };
        if (xrController.inputSource.gamepad) {
            const init = (motionController)=>{
                controllerData.squeezeComponent = motionController.getComponent("grasp");
                if (controllerData.squeezeComponent) {
                    controllerData.onSqueezeButtonChangedObserver = controllerData.squeezeComponent.onButtonStateChangedObservable.add((component)=>{
                        if (component.changes.pressed) {
                            const pressed = component.changes.pressed.current;
                            grabCheck(pressed);
                        }
                    });
                } else {
                    controllerData.selectionComponent = motionController.getMainComponent();
                    controllerData.onButtonChangedObserver = controllerData.selectionComponent.onButtonStateChangedObservable.add((component)=>{
                        if (component.changes.pressed) {
                            const pressed = component.changes.pressed.current;
                            grabCheck(pressed);
                        }
                    });
                }
            };
            if (xrController.motionController) {
                init(xrController.motionController);
            } else {
                xrController.onMotionControllerInitObservable.add(init);
            }
        } else {
            // use the select and squeeze events
            const selectStartListener = (event)=>{
                if (controllerData.xrController && event.inputSource === controllerData.xrController.inputSource && controllerData.pick && this._isControllerReadyForNearInteraction(controllerData.id) && controllerData.meshUnderPointer && this._nearGrabPredicate(controllerData.meshUnderPointer)) {
                    controllerData.grabInteraction = true;
                    controllerData.pickedPointVisualCue.isVisible = false;
                    this._scene.simulatePointerDown(controllerData.pick, pointerEventInit);
                    controllerData.downTriggered = true;
                }
            };
            const selectEndListener = (event)=>{
                if (controllerData.xrController && event.inputSource === controllerData.xrController.inputSource && controllerData.pick && this._isControllerReadyForNearInteraction(controllerData.id)) {
                    this._scene.simulatePointerUp(controllerData.pick, pointerEventInit);
                    controllerData.grabInteraction = false;
                    controllerData.pickedPointVisualCue.isVisible = !this.alwaysHideSelectionMesh;
                    controllerData.downTriggered = false;
                }
            };
            controllerData.eventListeners = {
                selectend: selectEndListener,
                selectstart: selectStartListener
            };
            this._xrSessionManager.session.addEventListener("selectstart", selectStartListener);
            this._xrSessionManager.session.addEventListener("selectend", selectEndListener);
        }
    }
    _detachController(xrControllerUniqueId) {
        const controllerData = this._controllers[xrControllerUniqueId];
        if (!controllerData) {
            return;
        }
        if (controllerData.squeezeComponent) {
            if (controllerData.onSqueezeButtonChangedObserver) {
                controllerData.squeezeComponent.onButtonStateChangedObservable.remove(controllerData.onSqueezeButtonChangedObserver);
            }
        }
        if (controllerData.selectionComponent) {
            if (controllerData.onButtonChangedObserver) {
                controllerData.selectionComponent.onButtonStateChangedObservable.remove(controllerData.onButtonChangedObserver);
            }
        }
        if (controllerData.onFrameObserver) {
            this._xrSessionManager.onXRFrameObservable.remove(controllerData.onFrameObserver);
        }
        if (controllerData.eventListeners) {
            const keys = Object.keys(controllerData.eventListeners);
            for (const eventName of keys){
                const func = controllerData.eventListeners && controllerData.eventListeners[eventName];
                if (func) {
                    this._xrSessionManager.session.removeEventListener(eventName, func);
                }
            }
        }
        controllerData.touchCollisionMesh.dispose();
        controllerData.pickedPointVisualCue.dispose();
        this._xrSessionManager.runInXRFrame(()=>{
            if (!controllerData.downTriggered) {
                return;
            }
            // Fire a pointerup in case controller was detached before a pointerup event was fired
            const pointerEventInit = {
                pointerId: controllerData.id,
                pointerType: "xr-near"
            };
            this._scene.simulatePointerUp(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Collisions$2f$pickingInfo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PickingInfo"](), pointerEventInit);
        });
        // remove world scale observer
        if (controllerData._worldScaleObserver) {
            this._xrSessionManager.onWorldScaleFactorChangedObservable.remove(controllerData._worldScaleObserver);
        }
        // remove from the map
        delete this._controllers[xrControllerUniqueId];
        if (this._attachedController === xrControllerUniqueId) {
            // check for other controllers
            const keys = Object.keys(this._controllers);
            if (keys.length) {
                this._attachedController = keys[0];
            } else {
                this._attachedController = "";
            }
        }
    }
    _generateNewTouchPointMesh() {
        const worldScale = this._xrSessionManager.worldScalingFactor;
        // populate information for near hover, pick and pinch
        const meshCreationScene = this._options.useUtilityLayer ? this._options.customUtilityLayerScene || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Rendering$2f$utilityLayerRenderer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UtilityLayerRenderer"].DefaultUtilityLayer.utilityLayerScene : this._scene;
        const touchCollisionMesh = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$sphereBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateSphere"])("PickSphere", {
            diameter: 1 * worldScale
        }, meshCreationScene);
        touchCollisionMesh.isVisible = false;
        // Generate the material for the touch mesh visuals
        if (this._options.motionControllerOrbMaterial) {
            touchCollisionMesh.material = this._options.motionControllerOrbMaterial;
        } else {
            let parsePromise;
            if (this._options.motionControllerTouchMaterialSnippetUrl) {
                parsePromise = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterial"].ParseFromFileAsync("motionControllerTouchMaterial", this._options.motionControllerTouchMaterialSnippetUrl, meshCreationScene);
            } else {
                parsePromise = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterial"].ParseFromSnippetAsync("8RUNKL#3", meshCreationScene);
            }
            parsePromise// eslint-disable-next-line github/no-then
            .then((mat)=>{
                touchCollisionMesh.material = mat;
            })// eslint-disable-next-line github/no-then
            .catch((err)=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn(`Error creating touch material in WebXRNearInteraction: ${err}`);
            });
        }
        const easingFunction = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$easing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QuadraticEase"]();
        easingFunction.setEasingMode(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$easing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EasingFunction"].EASINGMODE_EASEINOUT);
        // Adjust the visual size based off of the size of the touch collision orb.
        // Having the size perfectly match for hover gives a more accurate tell for when the user will start interacting with the target
        // Sizes for other states are somewhat arbitrary, as they are based on what feels nice during an interaction
        const hoverSizeVec = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](this._controllerPickRadius, this._controllerPickRadius, this._controllerPickRadius).scaleInPlace(worldScale);
        const touchSize = this._controllerPickRadius * (4 / 3);
        const touchSizeVec = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](touchSize, touchSize, touchSize).scaleInPlace(worldScale);
        const hydrateTransitionSize = this._controllerPickRadius * (7 / 6);
        const hydrateTransitionSizeVec = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](hydrateTransitionSize, hydrateTransitionSize, hydrateTransitionSize).scaleInPlace(worldScale);
        const touchHoverTransitionSize = this._controllerPickRadius * (4 / 5);
        const touchHoverTransitionSizeVec = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](touchHoverTransitionSize, touchHoverTransitionSize, touchHoverTransitionSize).scaleInPlace(worldScale);
        const hoverTouchTransitionSize = this._controllerPickRadius * (3 / 2);
        const hoverTouchTransitionSizeVec = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](hoverTouchTransitionSize, hoverTouchTransitionSize, hoverTouchTransitionSize).scaleInPlace(worldScale);
        const touchKeys = [
            {
                frame: 0,
                value: hoverSizeVec
            },
            {
                frame: 10,
                value: hoverTouchTransitionSizeVec
            },
            {
                frame: 18,
                value: touchSizeVec
            }
        ];
        const releaseKeys = [
            {
                frame: 0,
                value: touchSizeVec
            },
            {
                frame: 10,
                value: touchHoverTransitionSizeVec
            },
            {
                frame: 18,
                value: hoverSizeVec
            }
        ];
        const hydrateKeys = [
            {
                frame: 0,
                value: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].ZeroReadOnly
            },
            {
                frame: 12,
                value: hydrateTransitionSizeVec
            },
            {
                frame: 15,
                value: hoverSizeVec
            }
        ];
        const dehydrateKeys = [
            {
                frame: 0,
                value: hoverSizeVec
            },
            {
                frame: 10,
                value: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].ZeroReadOnly
            },
            {
                frame: 15,
                value: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].ZeroReadOnly
            }
        ];
        const touchAction = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Animation"]("touch", "scaling", 60, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Animation"].ANIMATIONTYPE_VECTOR3, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Animation"].ANIMATIONLOOPMODE_CONSTANT);
        const releaseAction = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Animation"]("release", "scaling", 60, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Animation"].ANIMATIONTYPE_VECTOR3, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Animation"].ANIMATIONLOOPMODE_CONSTANT);
        const hydrateAction = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Animation"]("hydrate", "scaling", 60, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Animation"].ANIMATIONTYPE_VECTOR3, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Animation"].ANIMATIONLOOPMODE_CONSTANT);
        const dehydrateAction = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Animation"]("dehydrate", "scaling", 60, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Animation"].ANIMATIONTYPE_VECTOR3, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Animation"].ANIMATIONLOOPMODE_CONSTANT);
        touchAction.setEasingFunction(easingFunction);
        releaseAction.setEasingFunction(easingFunction);
        hydrateAction.setEasingFunction(easingFunction);
        dehydrateAction.setEasingFunction(easingFunction);
        touchAction.setKeys(touchKeys);
        releaseAction.setKeys(releaseKeys);
        hydrateAction.setKeys(hydrateKeys);
        dehydrateAction.setKeys(dehydrateKeys);
        const touchCollisionMeshFunction = (isTouch)=>{
            const action = isTouch ? touchAction : releaseAction;
            meshCreationScene.beginDirectAnimation(touchCollisionMesh, [
                action
            ], 0, 18, false, 1);
        };
        const hydrateCollisionMeshFunction = (isHydration)=>{
            const action = isHydration ? hydrateAction : dehydrateAction;
            if (isHydration) {
                touchCollisionMesh.isVisible = true;
            }
            meshCreationScene.beginDirectAnimation(touchCollisionMesh, [
                action
            ], 0, 15, false, 1, ()=>{
                if (!isHydration) {
                    touchCollisionMesh.isVisible = false;
                }
            });
        };
        return {
            touchCollisionMesh,
            touchCollisionMeshFunction,
            hydrateCollisionMeshFunction
        };
    }
    _pickWithSphere(controllerData, radius, sceneToUse, predicate) {
        const pickingInfo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Collisions$2f$pickingInfo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PickingInfo"]();
        pickingInfo.distance = +Infinity;
        if (controllerData.touchCollisionMesh && controllerData.xrController) {
            const position = controllerData.touchCollisionMesh.position;
            const sphere = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$boundingSphere$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BoundingSphere"].CreateFromCenterAndRadius(position, radius);
            for(let meshIndex = 0; meshIndex < sceneToUse.meshes.length; meshIndex++){
                const mesh = sceneToUse.meshes[meshIndex];
                if (!predicate(mesh) || !this._controllerAvailablePredicate(mesh, controllerData.xrController.uniqueId)) {
                    continue;
                }
                const result = WebXRNearInteraction.PickMeshWithSphere(mesh, sphere);
                if (result && result.hit && result.distance < pickingInfo.distance) {
                    pickingInfo.hit = result.hit;
                    pickingInfo.pickedMesh = mesh;
                    pickingInfo.pickedPoint = result.pickedPoint;
                    pickingInfo.aimTransform = controllerData.xrController.pointer;
                    pickingInfo.gripTransform = controllerData.xrController.grip || null;
                    pickingInfo.originMesh = controllerData.touchCollisionMesh;
                    pickingInfo.distance = result.distance;
                    pickingInfo.bu = result.bu;
                    pickingInfo.bv = result.bv;
                    pickingInfo.faceId = result.faceId;
                    pickingInfo.subMeshId = result.subMeshId;
                }
            }
        }
        return pickingInfo;
    }
    /**
     * Picks a mesh with a sphere
     * @param mesh the mesh to pick
     * @param sphere picking sphere in world coordinates
     * @param skipBoundingInfo a boolean indicating if we should skip the bounding info check
     * @returns the picking info
     */ static PickMeshWithSphere(mesh, sphere, skipBoundingInfo = false) {
        const subMeshes = mesh.subMeshes;
        const pi = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Collisions$2f$pickingInfo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PickingInfo"]();
        const boundingInfo = mesh.getBoundingInfo();
        if (!mesh._generatePointsArray()) {
            return pi;
        }
        if (!mesh.subMeshes || !boundingInfo) {
            return pi;
        }
        if (!skipBoundingInfo && !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$boundingSphere$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BoundingSphere"].Intersects(boundingInfo.boundingSphere, sphere)) {
            return pi;
        }
        const result = LocalTempVectors[0];
        const tmpVec = LocalTempVectors[1];
        LocalTempVectors[2].setAll(0);
        LocalTempVectors[3].setAll(0);
        const tmpRay = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$ray$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Ray"](LocalTempVectors[2], LocalTempVectors[3], 1);
        let distance = +Infinity;
        let tmp, tmpDistanceSphereToCenter, tmpDistanceSurfaceToCenter, intersectionInfo;
        const center = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[2];
        const worldToMesh = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[0];
        worldToMesh.copyFrom(mesh.getWorldMatrix());
        worldToMesh.invert();
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinatesToRef(sphere.center, worldToMesh, center);
        for(let index = 0; index < subMeshes.length; index++){
            const subMesh = subMeshes[index];
            subMesh.projectToRef(center, mesh._positions, mesh.getIndices(), tmpVec);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinatesToRef(tmpVec, mesh.getWorldMatrix(), tmpVec);
            tmp = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Distance(tmpVec, sphere.center);
            // Check for finger inside of mesh
            tmpDistanceSurfaceToCenter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].DistanceSquared(tmpVec, mesh.getAbsolutePosition());
            tmpDistanceSphereToCenter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].DistanceSquared(sphere.center, mesh.getAbsolutePosition());
            if (tmpDistanceSphereToCenter !== -1 && tmpDistanceSurfaceToCenter !== -1 && tmpDistanceSurfaceToCenter > tmpDistanceSphereToCenter) {
                tmp = 0;
                tmpVec.copyFrom(sphere.center);
            }
            if (tmp !== -1 && tmp < distance) {
                distance = tmp;
                // ray between the sphere center and the point on the mesh
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$ray$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Ray"].CreateFromToToRef(sphere.center, tmpVec, tmpRay);
                tmpRay.length = distance * 2;
                intersectionInfo = tmpRay.intersectsMesh(mesh);
                result.copyFrom(tmpVec);
            }
        }
        if (distance < sphere.radius) {
            pi.hit = true;
            pi.distance = distance;
            pi.pickedMesh = mesh;
            pi.pickedPoint = result.clone();
            if (intersectionInfo && intersectionInfo.bu !== null && intersectionInfo.bv !== null) {
                pi.faceId = intersectionInfo.faceId;
                pi.subMeshId = intersectionInfo.subMeshId;
                pi.bu = intersectionInfo.bu;
                pi.bv = intersectionInfo.bv;
            }
        }
        return pi;
    }
}
WebXRNearInteraction._IdCounter = 200;
/**
 * The module's name
 */ WebXRNearInteraction.Name = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRFeaturesManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRFeatureName"].NEAR_INTERACTION;
/**
 * The (Babylon) version of this module.
 * This is an integer representing the implementation version.
 * This number does not correspond to the WebXR specs version
 */ WebXRNearInteraction.Version = 1;
//Register the plugin
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRFeaturesManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRFeaturesManager"].AddWebXRFeature(WebXRNearInteraction.Name, (xrSessionManager, options)=>{
    return ()=>new WebXRNearInteraction(xrSessionManager, options);
}, WebXRNearInteraction.Version, true); //# sourceMappingURL=WebXRNearInteraction.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/webXREnterExitUI.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WebXREnterExitUI",
    ()=>WebXREnterExitUI,
    "WebXREnterExitUIButton",
    ()=>WebXREnterExitUIButton,
    "WebXREnterExitUIOptions",
    ()=>WebXREnterExitUIOptions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/tools.js [app-ssr] (ecmascript)");
;
;
class WebXREnterExitUIButton {
    /**
     * Creates a WebXREnterExitUIButton
     * @param element button element
     * @param sessionMode XR initialization session mode
     * @param referenceSpaceType the type of reference space to be used
     */ constructor(/** button element */ element, /** XR initialization options for the button */ sessionMode, /** Reference space type */ referenceSpaceType){
        this.element = element;
        this.sessionMode = sessionMode;
        this.referenceSpaceType = referenceSpaceType;
    }
    /**
     * Extendable function which can be used to update the button's visuals when the state changes
     * @param activeButton the current active button in the UI
     */ // eslint-disable-next-line @typescript-eslint/no-unused-vars
    update(activeButton) {}
}
class WebXREnterExitUIOptions {
}
class WebXREnterExitUI {
    /**
     * Construct a new EnterExit UI class
     *
     * @param _scene babylon scene object to use
     * @param options (read-only) version of the options passed to this UI
     */ constructor(_scene, /** version of the options passed to this UI */ options){
        this._scene = _scene;
        this.options = options;
        this._activeButton = null;
        this._buttons = [];
        /**
         * Fired every time the active button is changed.
         *
         * When xr is entered via a button that launches xr that button will be the callback parameter
         *
         * When exiting xr the callback parameter will be null)
         */ this.activeButtonChangedObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        this._onSessionGranted = (evt)=>{
            // This section is for future reference.
            // As per specs, evt.session.mode should have the supported session mode, but no browser supports it for now.
            // // check if the session granted is the same as the one requested
            // const grantedMode = (evt.session as any).mode;
            // if (grantedMode) {
            //     this._buttons.some((btn, idx) => {
            //         if (btn.sessionMode === grantedMode) {
            //             this._enterXRWithButtonIndex(idx);
            //             return true;
            //         }
            //         return false;
            //     });
            // } else
            if (this._helper) {
                // eslint-disable-next-line @typescript-eslint/no-floating-promises
                this._enterXRWithButtonIndexAsync(0);
            }
        };
        this.overlay = document.createElement("div");
        this.overlay.classList.add("xr-button-overlay");
        // prepare for session granted event
        if (!options.ignoreSessionGrantedEvent && navigator.xr) {
            navigator.xr.addEventListener("sessiongranted", this._onSessionGranted);
        }
        // if served over HTTP, warn people.
        // Hopefully the browsers will catch up
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        if (options.customButtons) {
            this._buttons = options.customButtons;
        } else {
            this.overlay.style.cssText = "z-index:11;position: absolute; right: 20px;bottom: 50px;";
            const sessionMode = options.sessionMode || "immersive-vr";
            const referenceSpaceType = options.referenceSpaceType || "local-floor";
            const url = typeof SVGSVGElement === "undefined" ? "https://cdn.babylonjs.com/Assets/vrButton.png" : "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%222048%22%20height%3D%221152%22%20viewBox%3D%220%200%202048%201152%22%20version%3D%221.1%22%3E%3Cpath%20transform%3D%22rotate%28180%201024%2C576.0000000000001%29%22%20d%3D%22m1109%2C896q17%2C0%2030%2C-12t13%2C-30t-12.5%2C-30.5t-30.5%2C-12.5l-170%2C0q-18%2C0%20-30.5%2C12.5t-12.5%2C30.5t13%2C30t30%2C12l170%2C0zm-85%2C256q59%2C0%20132.5%2C-1.5t154.5%2C-5.5t164.5%2C-11.5t163%2C-20t150%2C-30t124.5%2C-41.5q23%2C-11%2042%2C-24t38%2C-30q27%2C-25%2041%2C-61.5t14%2C-72.5l0%2C-257q0%2C-123%20-47%2C-232t-128%2C-190t-190%2C-128t-232%2C-47l-81%2C0q-37%2C0%20-68.5%2C14t-60.5%2C34.5t-55.5%2C45t-53%2C45t-53%2C34.5t-55.5%2C14t-55.5%2C-14t-53%2C-34.5t-53%2C-45t-55.5%2C-45t-60.5%2C-34.5t-68.5%2C-14l-81%2C0q-123%2C0%20-232%2C47t-190%2C128t-128%2C190t-47%2C232l0%2C257q0%2C68%2038%2C115t97%2C73q54%2C24%20124.5%2C41.5t150%2C30t163%2C20t164.5%2C11.5t154.5%2C5.5t132.5%2C1.5zm939%2C-298q0%2C39%20-24.5%2C67t-58.5%2C42q-54%2C23%20-122%2C39.5t-143.5%2C28t-155.5%2C19t-157%2C11t-148.5%2C5t-129.5%2C1.5q-59%2C0%20-130%2C-1.5t-148%2C-5t-157%2C-11t-155.5%2C-19t-143.5%2C-28t-122%2C-39.5q-34%2C-14%20-58.5%2C-42t-24.5%2C-67l0%2C-257q0%2C-106%2040.5%2C-199t110%2C-162.5t162.5%2C-109.5t199%2C-40l81%2C0q27%2C0%2052%2C14t50%2C34.5t51%2C44.5t55.5%2C44.5t63.5%2C34.5t74%2C14t74%2C-14t63.5%2C-34.5t55.5%2C-44.5t51%2C-44.5t50%2C-34.5t52%2C-14l14%2C0q37%2C0%2070%2C0.5t64.5%2C4.5t63.5%2C12t68%2C23q71%2C30%20128.5%2C78.5t98.5%2C110t63.5%2C133.5t22.5%2C149l0%2C257z%22%20fill%3D%22white%22%20/%3E%3C/svg%3E%0A";
            let css = ".babylonVRicon { color: #868686; border-color: #868686; border-style: solid; margin-left: 10px; height: 50px; width: 80px; background-color: rgba(51,51,51,0.7); background-image: url(" + url + "); background-size: 80%; background-repeat:no-repeat; background-position: center; border: none; outline: none; transition: transform 0.125s ease-out } .babylonVRicon:hover { transform: scale(1.05) } .babylonVRicon:active {background-color: rgba(51,51,51,1) } .babylonVRicon:focus {background-color: rgba(51,51,51,1) }";
            css += '.babylonVRicon.vrdisplaypresenting { background-image: none;} .vrdisplaypresenting::after { content: "EXIT"} .xr-error::after { content: "ERROR"}';
            const style = document.createElement("style");
            style.appendChild(document.createTextNode(css));
            document.getElementsByTagName("head")[0].appendChild(style);
            const hmdBtn = document.createElement("button");
            hmdBtn.className = "babylonVRicon";
            hmdBtn.title = `${sessionMode} - ${referenceSpaceType}`;
            this._buttons.push(new WebXREnterExitUIButton(hmdBtn, sessionMode, referenceSpaceType));
            this._buttons[this._buttons.length - 1].update = function(activeButton) {
                this.element.style.display = activeButton === null || activeButton === this ? "" : "none";
                hmdBtn.className = "babylonVRicon" + (activeButton === this ? " vrdisplaypresenting" : "");
            };
            this._updateButtons(null);
        }
        const renderCanvas = _scene.getEngine().getInputElement();
        if (renderCanvas && renderCanvas.parentNode) {
            renderCanvas.parentNode.appendChild(this.overlay);
            _scene.onDisposeObservable.addOnce(()=>{
                this.dispose();
            });
        }
    }
    /**
     * Set the helper to be used with this UI component.
     * The UI is bound to an experience helper. If not provided the UI can still be used but the events should be registered by the developer.
     *
     * @param helper the experience helper to attach
     * @param renderTarget an optional render target (in case it is created outside of the helper scope)
     * @returns a promise that resolves when the ui is ready
     */ async setHelperAsync(helper, renderTarget) {
        this._helper = helper;
        this._renderTarget = renderTarget;
        const supportedPromises = this._buttons.map(async (btn)=>{
            return await helper.sessionManager.isSessionSupportedAsync(btn.sessionMode);
        });
        helper.onStateChangedObservable.add((state)=>{
            if (state == 3 /* WebXRState.NOT_IN_XR */ ) {
                this._updateButtons(null);
            }
        });
        const results = await Promise.all(supportedPromises);
        for(let i = 0; i < results.length; i++){
            const supported = results[i];
            if (supported) {
                this.overlay.appendChild(this._buttons[i].element);
                this._buttons[i].element.onclick = this._enterXRWithButtonIndexAsync.bind(this, i);
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tools"].Warn(`Session mode "${this._buttons[i].sessionMode}" not supported in browser`);
            }
        }
    }
    /**
     * Creates UI to allow the user to enter/exit XR mode
     * @param scene the scene to add the ui to
     * @param helper the xr experience helper to enter/exit xr with
     * @param options options to configure the UI
     * @returns the created ui
     */ static async CreateAsync(scene, helper, options) {
        const ui = new WebXREnterExitUI(scene, options);
        await ui.setHelperAsync(helper, options.renderTarget || undefined);
        return ui;
    }
    async _enterXRWithButtonIndexAsync(idx = 0) {
        if (this._helper.state == 2 /* WebXRState.IN_XR */ ) {
            await this._helper.exitXRAsync();
            this._updateButtons(null);
        } else if (this._helper.state == 3 /* WebXRState.NOT_IN_XR */ ) {
            try {
                await this._helper.enterXRAsync(this._buttons[idx].sessionMode, this._buttons[idx].referenceSpaceType, this._renderTarget, {
                    optionalFeatures: this.options.optionalFeatures,
                    requiredFeatures: this.options.requiredFeatures
                });
                this._updateButtons(this._buttons[idx]);
            } catch (e) {
                // make sure button is visible
                this._updateButtons(null);
                const element = this._buttons[idx].element;
                const prevTitle = element.title;
                element.title = "Error entering XR session : " + prevTitle;
                element.classList.add("xr-error");
                if (this.options.onError) {
                    this.options.onError(e);
                }
            }
        }
    }
    /**
     * Disposes of the XR UI component
     */ dispose() {
        const renderCanvas = this._scene.getEngine().getInputElement();
        if (renderCanvas && renderCanvas.parentNode && renderCanvas.parentNode.contains(this.overlay)) {
            renderCanvas.parentNode.removeChild(this.overlay);
        }
        this.activeButtonChangedObservable.clear();
        navigator.xr.removeEventListener("sessiongranted", this._onSessionGranted);
    }
    _updateButtons(activeButton) {
        this._activeButton = activeButton;
        for (const b of this._buttons){
            b.update(this._activeButton);
        }
        this.activeButtonChangedObservable.notifyObservers(this._activeButton);
    }
} //# sourceMappingURL=webXREnterExitUI.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/WebXRHandTracking.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HandPart",
    ()=>HandPart,
    "WebXRHand",
    ()=>WebXRHand,
    "WebXRHandJoint",
    ()=>WebXRHandJoint,
    "WebXRHandTracking",
    ()=>WebXRHandTracking
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRAbstractFeature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/WebXRAbstractFeature.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRFeaturesManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/webXRFeaturesManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsImpostor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v1/physicsImpostor.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Loading$2f$sceneLoader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Loading/sceneLoader.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.color.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterial.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$material$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/material.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$icoSphereBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/icoSphereBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$transformNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/transformNode.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$axis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.axis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/engineStore.js [app-ssr] (ecmascript)");
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
var HandPart;
(function(HandPart) {
    /**
     * HandPart - Wrist
     */ HandPart["WRIST"] = "wrist";
    /**
     * HandPart - The thumb
     */ HandPart["THUMB"] = "thumb";
    /**
     * HandPart - Index finger
     */ HandPart["INDEX"] = "index";
    /**
     * HandPart - Middle finger
     */ HandPart["MIDDLE"] = "middle";
    /**
     * HandPart - Ring finger
     */ HandPart["RING"] = "ring";
    /**
     * HandPart - Little finger
     */ HandPart["LITTLE"] = "little";
})(HandPart || (HandPart = {}));
var WebXRHandJoint;
(function(WebXRHandJoint) {
    /** Wrist */ WebXRHandJoint["WRIST"] = "wrist";
    /** Thumb near wrist */ WebXRHandJoint["THUMB_METACARPAL"] = "thumb-metacarpal";
    /** Thumb first knuckle */ WebXRHandJoint["THUMB_PHALANX_PROXIMAL"] = "thumb-phalanx-proximal";
    /** Thumb second knuckle */ WebXRHandJoint["THUMB_PHALANX_DISTAL"] = "thumb-phalanx-distal";
    /** Thumb tip */ WebXRHandJoint["THUMB_TIP"] = "thumb-tip";
    /** Index finger near wrist */ WebXRHandJoint["INDEX_FINGER_METACARPAL"] = "index-finger-metacarpal";
    /** Index finger first knuckle */ WebXRHandJoint["INDEX_FINGER_PHALANX_PROXIMAL"] = "index-finger-phalanx-proximal";
    /** Index finger second knuckle */ WebXRHandJoint["INDEX_FINGER_PHALANX_INTERMEDIATE"] = "index-finger-phalanx-intermediate";
    /** Index finger third knuckle */ WebXRHandJoint["INDEX_FINGER_PHALANX_DISTAL"] = "index-finger-phalanx-distal";
    /** Index finger tip */ WebXRHandJoint["INDEX_FINGER_TIP"] = "index-finger-tip";
    /** Middle finger near wrist */ WebXRHandJoint["MIDDLE_FINGER_METACARPAL"] = "middle-finger-metacarpal";
    /** Middle finger first knuckle */ WebXRHandJoint["MIDDLE_FINGER_PHALANX_PROXIMAL"] = "middle-finger-phalanx-proximal";
    /** Middle finger second knuckle */ WebXRHandJoint["MIDDLE_FINGER_PHALANX_INTERMEDIATE"] = "middle-finger-phalanx-intermediate";
    /** Middle finger third knuckle */ WebXRHandJoint["MIDDLE_FINGER_PHALANX_DISTAL"] = "middle-finger-phalanx-distal";
    /** Middle finger tip */ WebXRHandJoint["MIDDLE_FINGER_TIP"] = "middle-finger-tip";
    /** Ring finger near wrist */ WebXRHandJoint["RING_FINGER_METACARPAL"] = "ring-finger-metacarpal";
    /** Ring finger first knuckle */ WebXRHandJoint["RING_FINGER_PHALANX_PROXIMAL"] = "ring-finger-phalanx-proximal";
    /** Ring finger second knuckle */ WebXRHandJoint["RING_FINGER_PHALANX_INTERMEDIATE"] = "ring-finger-phalanx-intermediate";
    /** Ring finger third knuckle */ WebXRHandJoint["RING_FINGER_PHALANX_DISTAL"] = "ring-finger-phalanx-distal";
    /** Ring finger tip */ WebXRHandJoint["RING_FINGER_TIP"] = "ring-finger-tip";
    /** Pinky finger near wrist */ WebXRHandJoint["PINKY_FINGER_METACARPAL"] = "pinky-finger-metacarpal";
    /** Pinky finger first knuckle */ WebXRHandJoint["PINKY_FINGER_PHALANX_PROXIMAL"] = "pinky-finger-phalanx-proximal";
    /** Pinky finger second knuckle */ WebXRHandJoint["PINKY_FINGER_PHALANX_INTERMEDIATE"] = "pinky-finger-phalanx-intermediate";
    /** Pinky finger third knuckle */ WebXRHandJoint["PINKY_FINGER_PHALANX_DISTAL"] = "pinky-finger-phalanx-distal";
    /** Pinky finger tip */ WebXRHandJoint["PINKY_FINGER_TIP"] = "pinky-finger-tip";
})(WebXRHandJoint || (WebXRHandJoint = {}));
const HandJointReferenceArray = [
    "wrist" /* WebXRHandJoint.WRIST */ ,
    "thumb-metacarpal" /* WebXRHandJoint.THUMB_METACARPAL */ ,
    "thumb-phalanx-proximal" /* WebXRHandJoint.THUMB_PHALANX_PROXIMAL */ ,
    "thumb-phalanx-distal" /* WebXRHandJoint.THUMB_PHALANX_DISTAL */ ,
    "thumb-tip" /* WebXRHandJoint.THUMB_TIP */ ,
    "index-finger-metacarpal" /* WebXRHandJoint.INDEX_FINGER_METACARPAL */ ,
    "index-finger-phalanx-proximal" /* WebXRHandJoint.INDEX_FINGER_PHALANX_PROXIMAL */ ,
    "index-finger-phalanx-intermediate" /* WebXRHandJoint.INDEX_FINGER_PHALANX_INTERMEDIATE */ ,
    "index-finger-phalanx-distal" /* WebXRHandJoint.INDEX_FINGER_PHALANX_DISTAL */ ,
    "index-finger-tip" /* WebXRHandJoint.INDEX_FINGER_TIP */ ,
    "middle-finger-metacarpal" /* WebXRHandJoint.MIDDLE_FINGER_METACARPAL */ ,
    "middle-finger-phalanx-proximal" /* WebXRHandJoint.MIDDLE_FINGER_PHALANX_PROXIMAL */ ,
    "middle-finger-phalanx-intermediate" /* WebXRHandJoint.MIDDLE_FINGER_PHALANX_INTERMEDIATE */ ,
    "middle-finger-phalanx-distal" /* WebXRHandJoint.MIDDLE_FINGER_PHALANX_DISTAL */ ,
    "middle-finger-tip" /* WebXRHandJoint.MIDDLE_FINGER_TIP */ ,
    "ring-finger-metacarpal" /* WebXRHandJoint.RING_FINGER_METACARPAL */ ,
    "ring-finger-phalanx-proximal" /* WebXRHandJoint.RING_FINGER_PHALANX_PROXIMAL */ ,
    "ring-finger-phalanx-intermediate" /* WebXRHandJoint.RING_FINGER_PHALANX_INTERMEDIATE */ ,
    "ring-finger-phalanx-distal" /* WebXRHandJoint.RING_FINGER_PHALANX_DISTAL */ ,
    "ring-finger-tip" /* WebXRHandJoint.RING_FINGER_TIP */ ,
    "pinky-finger-metacarpal" /* WebXRHandJoint.PINKY_FINGER_METACARPAL */ ,
    "pinky-finger-phalanx-proximal" /* WebXRHandJoint.PINKY_FINGER_PHALANX_PROXIMAL */ ,
    "pinky-finger-phalanx-intermediate" /* WebXRHandJoint.PINKY_FINGER_PHALANX_INTERMEDIATE */ ,
    "pinky-finger-phalanx-distal" /* WebXRHandJoint.PINKY_FINGER_PHALANX_DISTAL */ ,
    "pinky-finger-tip" /* WebXRHandJoint.PINKY_FINGER_TIP */ 
];
const HandPartsDefinition = {
    ["wrist" /* HandPart.WRIST */ ]: [
        "wrist" /* WebXRHandJoint.WRIST */ 
    ],
    ["thumb" /* HandPart.THUMB */ ]: [
        "thumb-metacarpal" /* WebXRHandJoint.THUMB_METACARPAL */ ,
        "thumb-phalanx-proximal" /* WebXRHandJoint.THUMB_PHALANX_PROXIMAL */ ,
        "thumb-phalanx-distal" /* WebXRHandJoint.THUMB_PHALANX_DISTAL */ ,
        "thumb-tip" /* WebXRHandJoint.THUMB_TIP */ 
    ],
    ["index" /* HandPart.INDEX */ ]: [
        "index-finger-metacarpal" /* WebXRHandJoint.INDEX_FINGER_METACARPAL */ ,
        "index-finger-phalanx-proximal" /* WebXRHandJoint.INDEX_FINGER_PHALANX_PROXIMAL */ ,
        "index-finger-phalanx-intermediate" /* WebXRHandJoint.INDEX_FINGER_PHALANX_INTERMEDIATE */ ,
        "index-finger-phalanx-distal" /* WebXRHandJoint.INDEX_FINGER_PHALANX_DISTAL */ ,
        "index-finger-tip" /* WebXRHandJoint.INDEX_FINGER_TIP */ 
    ],
    ["middle" /* HandPart.MIDDLE */ ]: [
        "middle-finger-metacarpal" /* WebXRHandJoint.MIDDLE_FINGER_METACARPAL */ ,
        "middle-finger-phalanx-proximal" /* WebXRHandJoint.MIDDLE_FINGER_PHALANX_PROXIMAL */ ,
        "middle-finger-phalanx-intermediate" /* WebXRHandJoint.MIDDLE_FINGER_PHALANX_INTERMEDIATE */ ,
        "middle-finger-phalanx-distal" /* WebXRHandJoint.MIDDLE_FINGER_PHALANX_DISTAL */ ,
        "middle-finger-tip" /* WebXRHandJoint.MIDDLE_FINGER_TIP */ 
    ],
    ["ring" /* HandPart.RING */ ]: [
        "ring-finger-metacarpal" /* WebXRHandJoint.RING_FINGER_METACARPAL */ ,
        "ring-finger-phalanx-proximal" /* WebXRHandJoint.RING_FINGER_PHALANX_PROXIMAL */ ,
        "ring-finger-phalanx-intermediate" /* WebXRHandJoint.RING_FINGER_PHALANX_INTERMEDIATE */ ,
        "ring-finger-phalanx-distal" /* WebXRHandJoint.RING_FINGER_PHALANX_DISTAL */ ,
        "ring-finger-tip" /* WebXRHandJoint.RING_FINGER_TIP */ 
    ],
    ["little" /* HandPart.LITTLE */ ]: [
        "pinky-finger-metacarpal" /* WebXRHandJoint.PINKY_FINGER_METACARPAL */ ,
        "pinky-finger-phalanx-proximal" /* WebXRHandJoint.PINKY_FINGER_PHALANX_PROXIMAL */ ,
        "pinky-finger-phalanx-intermediate" /* WebXRHandJoint.PINKY_FINGER_PHALANX_INTERMEDIATE */ ,
        "pinky-finger-phalanx-distal" /* WebXRHandJoint.PINKY_FINGER_PHALANX_DISTAL */ ,
        "pinky-finger-tip" /* WebXRHandJoint.PINKY_FINGER_TIP */ 
    ]
};
class WebXRHand {
    /**
     * Get the hand mesh.
     */ get handMesh() {
        return this._handMesh;
    }
    /**
     * Get meshes of part of the hand.
     * @param part The part of hand to get.
     * @returns An array of meshes that correlate to the hand part requested.
     */ getHandPartMeshes(part) {
        return HandPartsDefinition[part].map((name)=>this._jointMeshes[HandJointReferenceArray.indexOf(name)]);
    }
    /**
     * Retrieves a mesh linked to a named joint in the hand.
     * @param jointName The name of the joint.
     * @returns An AbstractMesh whose position corresponds with the joint position.
     */ getJointMesh(jointName) {
        return this._jointMeshes[HandJointReferenceArray.indexOf(jointName)];
    }
    /**
     * Construct a new hand object
     * @param xrController The controller to which the hand correlates.
     * @param _jointMeshes The meshes to be used to track the hand joints.
     * @param _handMesh An optional hand mesh.
     * @param rigMapping An optional rig mapping for the hand mesh.
     *                   If not provided (but a hand mesh is provided),
     *                   it will be assumed that the hand mesh's bones are named
     *                   directly after the WebXR bone names.
     * @param _leftHandedMeshes Are the hand meshes left-handed-system meshes
     * @param _jointsInvisible Are the tracked joint meshes visible
     * @param _jointScaleFactor Scale factor for all joint meshes
     */ constructor(/** The controller to which the hand correlates. */ xrController, _jointMeshes, _handMesh, /** An optional rig mapping for the hand mesh. If not provided (but a hand mesh is provided),
     * it will be assumed that the hand mesh's bones are named directly after the WebXR bone names. */ rigMapping, _leftHandedMeshes = false, _jointsInvisible = false, _jointScaleFactor = 1){
        this.xrController = xrController;
        this._jointMeshes = _jointMeshes;
        this._handMesh = _handMesh;
        this.rigMapping = rigMapping;
        this._leftHandedMeshes = _leftHandedMeshes;
        this._jointsInvisible = _jointsInvisible;
        this._jointScaleFactor = _jointScaleFactor;
        /**
         * This observable will notify registered observers when the hand object has been set with a new mesh.
         * you can get the hand mesh using `webxrHand.handMesh`
         */ this.onHandMeshSetObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * Transform nodes that will directly receive the transforms from the WebXR matrix data.
         */ this._jointTransforms = new Array(HandJointReferenceArray.length);
        /**
         * The float array that will directly receive the transform matrix data from WebXR.
         */ this._jointTransformMatrices = new Float32Array(HandJointReferenceArray.length * 16);
        this._tempJointMatrix = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"]();
        /**
         * The float array that will directly receive the joint radii from WebXR.
         */ this._jointRadii = new Float32Array(HandJointReferenceArray.length);
        /**
         * The hand mesh's top-most parent, if any.
         */ this._handMeshRoot = null;
        this._scene = _jointMeshes[0].getScene();
        // Initialize the joint transform quaternions and link the transforms to the bones.
        for(let jointIdx = 0; jointIdx < this._jointTransforms.length; jointIdx++){
            this._jointTransforms[jointIdx] = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$transformNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TransformNode"](HandJointReferenceArray[jointIdx], this._scene);
            this._jointTransforms[jointIdx].rotationQuaternion = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"]();
            // Set the rotation quaternion so we can use it later for tracking.
            if (_jointMeshes[jointIdx].rotationQuaternion) {
                _jointMeshes[jointIdx].rotationQuaternion = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"]();
            } else {
                _jointMeshes[jointIdx].rotationQuaternion?.set(0, 0, 0, 1);
            }
        }
        if (_handMesh) {
            // Note that this logic needs to happen after we initialize the joint tracking transform nodes.
            this.setHandMesh(_handMesh, rigMapping);
        }
        // hide the motion controller, if available/loaded
        if (this.xrController.motionController) {
            if (this.xrController.motionController.rootMesh) {
                this.xrController.motionController.rootMesh.dispose(false, true);
            }
        }
        this.xrController.onMotionControllerInitObservable.add((motionController)=>{
            motionController._doNotLoadControllerMesh = true;
        });
    }
    /**
     * Sets the current hand mesh to render for the WebXRHand.
     * @param handMesh The rigged hand mesh that will be tracked to the user's hand.
     * @param rigMapping The mapping from XRHandJoint to bone names to use with the mesh.
     * @param _xrSessionManager The XRSessionManager used to initialize the hand mesh.
     */ setHandMesh(handMesh, rigMapping, _xrSessionManager) {
        this._handMesh = handMesh;
        this._handMeshRoot = this._handMesh;
        while(this._handMeshRoot.parent){
            this._handMeshRoot = this._handMeshRoot.parent;
        }
        // Avoid any strange frustum culling. We will manually control visibility via attach and detach.
        handMesh.alwaysSelectAsActiveMesh = true;
        const children = handMesh.getChildMeshes();
        for (const mesh of children){
            mesh.alwaysSelectAsActiveMesh = true;
        }
        // Link the bones in the hand mesh to the transform nodes that will be bound to the WebXR tracked joints.
        if (this._handMesh.skeleton) {
            const handMeshSkeleton = this._handMesh.skeleton;
            for(let jointIdx = 0; jointIdx < HandJointReferenceArray.length; jointIdx++){
                const jointName = HandJointReferenceArray[jointIdx];
                const jointBoneIdx = handMeshSkeleton.getBoneIndexByName(rigMapping ? rigMapping[jointName] : jointName);
                if (jointBoneIdx !== -1) {
                    handMeshSkeleton.bones[jointBoneIdx].linkTransformNode(this._jointTransforms[jointIdx]);
                }
            }
        }
        this.onHandMeshSetObservable.notifyObservers(this);
    }
    /**
     * Update this hand from the latest xr frame.
     * @param xrFrame The latest frame received from WebXR.
     * @param referenceSpace The current viewer reference space.
     * @param xrCamera the xr camera, used for parenting
     */ updateFromXRFrame(xrFrame, referenceSpace, xrCamera) {
        const hand = this.xrController.inputSource.hand;
        if (!hand) {
            return;
        }
        // TODO: Modify webxr.d.ts to better match WebXR IDL so we don't need this any cast.
        const anyHand = hand;
        const jointSpaces = HandJointReferenceArray.map((jointName)=>anyHand[jointName] || hand.get(jointName));
        let trackingSuccessful = false;
        if (xrFrame.fillPoses && xrFrame.fillJointRadii) {
            trackingSuccessful = xrFrame.fillPoses(jointSpaces, referenceSpace, this._jointTransformMatrices) && xrFrame.fillJointRadii(jointSpaces, this._jointRadii);
        } else if (xrFrame.getJointPose) {
            trackingSuccessful = true;
            // Warning: This codepath is slow by comparison, only here for compat.
            for(let jointIdx = 0; jointIdx < jointSpaces.length; jointIdx++){
                const jointPose = xrFrame.getJointPose(jointSpaces[jointIdx], referenceSpace);
                if (jointPose) {
                    this._jointTransformMatrices.set(jointPose.transform.matrix, jointIdx * 16);
                    this._jointRadii[jointIdx] = jointPose.radius || 0.008;
                } else {
                    trackingSuccessful = false;
                    break;
                }
            }
        }
        if (!trackingSuccessful) {
            return;
        }
        for(let jointIdx = 0; jointIdx < HandJointReferenceArray.length; jointIdx++){
            const jointTransform = this._jointTransforms[jointIdx];
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].FromArrayToRef(this._jointTransformMatrices, jointIdx * 16, this._tempJointMatrix);
            this._tempJointMatrix.decompose(undefined, jointTransform.rotationQuaternion, jointTransform.position);
            // The radius we need to make the joint in order for it to roughly cover the joints of the user's real hand.
            const scaledJointRadius = this._jointRadii[jointIdx] * this._jointScaleFactor;
            const jointMesh = this._jointMeshes[jointIdx];
            jointMesh.isVisible = !this._handMesh && !this._jointsInvisible;
            jointMesh.position.copyFrom(jointTransform.position);
            jointMesh.rotationQuaternion.copyFrom(jointTransform.rotationQuaternion);
            jointMesh.scaling.setAll(scaledJointRadius);
            jointMesh.parent = xrCamera.parent;
            // The WebXR data comes as right-handed, so we might need to do some conversions.
            if (!this._scene.useRightHandedSystem) {
                jointMesh.position.z *= -1;
                jointMesh.rotationQuaternion.z *= -1;
                jointMesh.rotationQuaternion.w *= -1;
                if (this._leftHandedMeshes && this._handMesh) {
                    jointTransform.position.z *= -1;
                    jointTransform.rotationQuaternion.z *= -1;
                    jointTransform.rotationQuaternion.w *= -1;
                }
            }
        }
        if (this._handMesh) {
            this._handMesh.isVisible = true;
            if (this._handMeshRoot) {
                this._handMeshRoot.parent = xrCamera.parent;
            }
        }
        this.xrController.pointer.parent = xrCamera.parent;
    }
    /**
     * Dispose this Hand object
     * @param disposeMeshes Should the meshes be disposed as well
     */ dispose(disposeMeshes = false) {
        if (this._handMesh) {
            if (disposeMeshes) {
                this._handMesh.skeleton?.dispose();
                this._handMesh.dispose(false, true);
            } else {
                this._handMesh.isVisible = false;
            }
        }
        for (const transform of this._jointTransforms){
            transform.dispose();
        }
        this._jointTransforms.length = 0;
        this.onHandMeshSetObservable.clear();
    }
}
class WebXRHandTracking extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRAbstractFeature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRAbstractFeature"] {
    static _GenerateTrackedJointMeshes(featureOptions, originalMesh = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$icoSphereBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateIcoSphere"])("jointParent", WebXRHandTracking._ICOSPHERE_PARAMS)) {
        const meshes = {};
        [
            "left",
            "right"
        ].map((handedness)=>{
            const trackedMeshes = [];
            originalMesh.isVisible = !!featureOptions.jointMeshes?.keepOriginalVisible;
            for(let i = 0; i < HandJointReferenceArray.length; ++i){
                let newInstance = originalMesh.createInstance(`${handedness}-handJoint-${i}`);
                if (featureOptions.jointMeshes?.onHandJointMeshGenerated) {
                    const returnedMesh = featureOptions.jointMeshes.onHandJointMeshGenerated(newInstance, i, handedness);
                    if (returnedMesh) {
                        if (returnedMesh !== newInstance) {
                            newInstance.dispose();
                            newInstance = returnedMesh;
                        }
                    }
                }
                newInstance.isPickable = false;
                if (featureOptions.jointMeshes?.enablePhysics) {
                    const props = featureOptions.jointMeshes?.physicsProps || {};
                    // downscale the instances so that physics will be initialized correctly
                    newInstance.scaling.setAll(0.02);
                    const type = props.impostorType !== undefined ? props.impostorType : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsImpostor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsImpostor"].SphereImpostor;
                    newInstance.physicsImpostor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsImpostor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsImpostor"](newInstance, type, {
                        mass: 0,
                        ...props
                    });
                }
                newInstance.rotationQuaternion = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"]();
                newInstance.isVisible = false;
                trackedMeshes.push(newInstance);
            }
            meshes[handedness] = trackedMeshes;
        });
        return {
            left: meshes.left,
            right: meshes.right
        };
    }
    static async _GenerateDefaultHandMeshesAsync(scene, xrSessionManager, options) {
        // eslint-disable-next-line no-async-promise-executor, @typescript-eslint/no-misused-promises
        return await new Promise(async (resolve)=>{
            const riggedMeshes = {};
            // check the cache, defensive
            if (WebXRHandTracking._RightHandGLB?.meshes[1]?.isDisposed()) {
                WebXRHandTracking._RightHandGLB = null;
            }
            if (WebXRHandTracking._LeftHandGLB?.meshes[1]?.isDisposed()) {
                WebXRHandTracking._LeftHandGLB = null;
            }
            const handsDefined = !!(WebXRHandTracking._RightHandGLB && WebXRHandTracking._LeftHandGLB);
            // load them in parallel
            const defaulrHandGLBUrl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tools"].GetAssetUrl(WebXRHandTracking.DEFAULT_HAND_MODEL_BASE_URL);
            const handGLBs = await Promise.all([
                WebXRHandTracking._RightHandGLB || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Loading$2f$sceneLoader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SceneLoader"].ImportMeshAsync("", defaulrHandGLBUrl, WebXRHandTracking.DEFAULT_HAND_MODEL_RIGHT_FILENAME, scene),
                WebXRHandTracking._LeftHandGLB || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Loading$2f$sceneLoader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SceneLoader"].ImportMeshAsync("", defaulrHandGLBUrl, WebXRHandTracking.DEFAULT_HAND_MODEL_LEFT_FILENAME, scene)
            ]);
            // eslint-disable-next-line require-atomic-updates
            WebXRHandTracking._RightHandGLB = handGLBs[0];
            // eslint-disable-next-line require-atomic-updates
            WebXRHandTracking._LeftHandGLB = handGLBs[1];
            const shaderUrl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tools"].GetAssetUrl(WebXRHandTracking.DEFAULT_HAND_MODEL_SHADER_URL);
            const handShader = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterial"].ParseFromFileAsync("handShader", shaderUrl, scene, undefined, true);
            // depth prepass and alpha mode
            handShader.needDepthPrePass = true;
            handShader.transparencyMode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$material$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Material"].MATERIAL_ALPHABLEND;
            handShader.alphaMode = 2;
            // build node materials
            handShader.build(false);
            // shader
            const handColors = {
                base: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"].FromInts(116, 63, 203),
                fresnel: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"].FromInts(149, 102, 229),
                fingerColor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"].FromInts(177, 130, 255),
                tipFresnel: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"].FromInts(220, 200, 255),
                ...options?.handMeshes?.customColors
            };
            const handNodes = {
                base: handShader.getBlockByName("baseColor"),
                fresnel: handShader.getBlockByName("fresnelColor"),
                fingerColor: handShader.getBlockByName("fingerColor"),
                tipFresnel: handShader.getBlockByName("tipFresnelColor")
            };
            handNodes.base.value = handColors.base;
            handNodes.fresnel.value = handColors.fresnel;
            handNodes.fingerColor.value = handColors.fingerColor;
            handNodes.tipFresnel.value = handColors.tipFresnel;
            const isMultiview = xrSessionManager._getBaseLayerWrapper()?.isMultiview;
            const hd = [
                "left",
                "right"
            ];
            for (const handedness of hd){
                const handGLB = handedness == "left" ? WebXRHandTracking._LeftHandGLB : WebXRHandTracking._RightHandGLB;
                if (!handGLB) {
                    // this should never happen!
                    throw new Error("Could not load hand model");
                }
                const handMesh = handGLB.meshes[1];
                handMesh._internalAbstractMeshDataInfo._computeBonesUsingShaders = true;
                // if in multiview do not use the material
                if (!isMultiview && !options?.handMeshes?.disableHandShader) {
                    handMesh.material = handShader.clone(`${handedness}HandShaderClone`, true);
                }
                handMesh.isVisible = false;
                riggedMeshes[handedness] = handMesh;
                // single change for left handed systems
                if (!handsDefined && !scene.useRightHandedSystem) {
                    handGLB.meshes[1].rotate(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$axis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Axis"].Y, Math.PI);
                }
            }
            handShader.dispose();
            resolve({
                left: riggedMeshes.left,
                right: riggedMeshes.right
            });
        });
    }
    /**
     * Generates a mapping from XRHandJoint to bone name for the default hand mesh.
     * @param handedness The handedness being mapped for.
     * @returns A mapping from XRHandJoint to bone name.
     */ static _GenerateDefaultHandMeshRigMapping(handedness) {
        const h = handedness == "right" ? "R" : "L";
        return {
            ["wrist" /* WebXRHandJoint.WRIST */ ]: `wrist_${h}`,
            ["thumb-metacarpal" /* WebXRHandJoint.THUMB_METACARPAL */ ]: `thumb_metacarpal_${h}`,
            ["thumb-phalanx-proximal" /* WebXRHandJoint.THUMB_PHALANX_PROXIMAL */ ]: `thumb_proxPhalanx_${h}`,
            ["thumb-phalanx-distal" /* WebXRHandJoint.THUMB_PHALANX_DISTAL */ ]: `thumb_distPhalanx_${h}`,
            ["thumb-tip" /* WebXRHandJoint.THUMB_TIP */ ]: `thumb_tip_${h}`,
            ["index-finger-metacarpal" /* WebXRHandJoint.INDEX_FINGER_METACARPAL */ ]: `index_metacarpal_${h}`,
            ["index-finger-phalanx-proximal" /* WebXRHandJoint.INDEX_FINGER_PHALANX_PROXIMAL */ ]: `index_proxPhalanx_${h}`,
            ["index-finger-phalanx-intermediate" /* WebXRHandJoint.INDEX_FINGER_PHALANX_INTERMEDIATE */ ]: `index_intPhalanx_${h}`,
            ["index-finger-phalanx-distal" /* WebXRHandJoint.INDEX_FINGER_PHALANX_DISTAL */ ]: `index_distPhalanx_${h}`,
            ["index-finger-tip" /* WebXRHandJoint.INDEX_FINGER_TIP */ ]: `index_tip_${h}`,
            ["middle-finger-metacarpal" /* WebXRHandJoint.MIDDLE_FINGER_METACARPAL */ ]: `middle_metacarpal_${h}`,
            ["middle-finger-phalanx-proximal" /* WebXRHandJoint.MIDDLE_FINGER_PHALANX_PROXIMAL */ ]: `middle_proxPhalanx_${h}`,
            ["middle-finger-phalanx-intermediate" /* WebXRHandJoint.MIDDLE_FINGER_PHALANX_INTERMEDIATE */ ]: `middle_intPhalanx_${h}`,
            ["middle-finger-phalanx-distal" /* WebXRHandJoint.MIDDLE_FINGER_PHALANX_DISTAL */ ]: `middle_distPhalanx_${h}`,
            ["middle-finger-tip" /* WebXRHandJoint.MIDDLE_FINGER_TIP */ ]: `middle_tip_${h}`,
            ["ring-finger-metacarpal" /* WebXRHandJoint.RING_FINGER_METACARPAL */ ]: `ring_metacarpal_${h}`,
            ["ring-finger-phalanx-proximal" /* WebXRHandJoint.RING_FINGER_PHALANX_PROXIMAL */ ]: `ring_proxPhalanx_${h}`,
            ["ring-finger-phalanx-intermediate" /* WebXRHandJoint.RING_FINGER_PHALANX_INTERMEDIATE */ ]: `ring_intPhalanx_${h}`,
            ["ring-finger-phalanx-distal" /* WebXRHandJoint.RING_FINGER_PHALANX_DISTAL */ ]: `ring_distPhalanx_${h}`,
            ["ring-finger-tip" /* WebXRHandJoint.RING_FINGER_TIP */ ]: `ring_tip_${h}`,
            ["pinky-finger-metacarpal" /* WebXRHandJoint.PINKY_FINGER_METACARPAL */ ]: `little_metacarpal_${h}`,
            ["pinky-finger-phalanx-proximal" /* WebXRHandJoint.PINKY_FINGER_PHALANX_PROXIMAL */ ]: `little_proxPhalanx_${h}`,
            ["pinky-finger-phalanx-intermediate" /* WebXRHandJoint.PINKY_FINGER_PHALANX_INTERMEDIATE */ ]: `little_intPhalanx_${h}`,
            ["pinky-finger-phalanx-distal" /* WebXRHandJoint.PINKY_FINGER_PHALANX_DISTAL */ ]: `little_distPhalanx_${h}`,
            ["pinky-finger-tip" /* WebXRHandJoint.PINKY_FINGER_TIP */ ]: `little_tip_${h}`
        };
    }
    /**
     * Check if the needed objects are defined.
     * This does not mean that the feature is enabled, but that the objects needed are well defined.
     * @returns true if the needed objects for this feature are defined
     */ isCompatible() {
        return typeof XRHand !== "undefined";
    }
    /**
     * Get the hand object according to the controller id
     * @param controllerId the controller id to which we want to get the hand
     * @returns null if not found or the WebXRHand object if found
     */ getHandByControllerId(controllerId) {
        return this._attachedHands[controllerId];
    }
    /**
     * Get a hand object according to the requested handedness
     * @param handedness the handedness to request
     * @returns null if not found or the WebXRHand object if found
     */ getHandByHandedness(handedness) {
        if (handedness == "none") {
            return null;
        }
        return this._trackingHands[handedness];
    }
    /**
     * Creates a new instance of the XR hand tracking feature.
     * @param _xrSessionManager An instance of WebXRSessionManager.
     * @param options Options to use when constructing this feature.
     */ constructor(_xrSessionManager, /** Options to use when constructing this feature. */ options){
        super(_xrSessionManager);
        this.options = options;
        this._attachedHands = {};
        this._trackingHands = {
            left: null,
            right: null
        };
        this._handResources = {
            jointMeshes: null,
            handMeshes: null,
            rigMappings: null
        };
        this._worldScaleObserver = null;
        /**
         * This observable will notify registered observers when a new hand object was added and initialized
         */ this.onHandAddedObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * This observable will notify its observers right before the hand object is disposed
         */ this.onHandRemovedObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        this._attachHand = (xrController)=>{
            if (!xrController.inputSource.hand || xrController.inputSource.handedness == "none" || !this._handResources.jointMeshes) {
                return;
            }
            const handedness = xrController.inputSource.handedness;
            const webxrHand = new WebXRHand(xrController, this._handResources.jointMeshes[handedness], this._handResources.handMeshes && this._handResources.handMeshes[handedness], this._handResources.rigMappings && this._handResources.rigMappings[handedness], this.options.handMeshes?.meshesUseLeftHandedCoordinates, this.options.jointMeshes?.invisible, this.options.jointMeshes?.scaleFactor);
            this._attachedHands[xrController.uniqueId] = webxrHand;
            this._trackingHands[handedness] = webxrHand;
            this.onHandAddedObservable.notifyObservers(webxrHand);
        };
        this._detachHand = (xrController)=>{
            this._detachHandById(xrController.uniqueId);
        };
        this.xrNativeFeatureName = "hand-tracking";
        // Support legacy versions of the options object by copying over joint mesh properties
        const anyOptions = options;
        const anyJointMeshOptions = anyOptions.jointMeshes;
        if (anyJointMeshOptions) {
            if (typeof anyJointMeshOptions.disableDefaultHandMesh !== "undefined") {
                options.handMeshes = options.handMeshes || {};
                options.handMeshes.disableDefaultMeshes = anyJointMeshOptions.disableDefaultHandMesh;
            }
            if (typeof anyJointMeshOptions.handMeshes !== "undefined") {
                options.handMeshes = options.handMeshes || {};
                options.handMeshes.customMeshes = anyJointMeshOptions.handMeshes;
            }
            if (typeof anyJointMeshOptions.leftHandedSystemMeshes !== "undefined") {
                options.handMeshes = options.handMeshes || {};
                options.handMeshes.meshesUseLeftHandedCoordinates = anyJointMeshOptions.leftHandedSystemMeshes;
            }
            if (typeof anyJointMeshOptions.rigMapping !== "undefined") {
                options.handMeshes = options.handMeshes || {};
                const leftRigMapping = {};
                const rightRigMapping = {};
                const rigMappingTuples = [
                    [
                        anyJointMeshOptions.rigMapping.left,
                        leftRigMapping
                    ],
                    [
                        anyJointMeshOptions.rigMapping.right,
                        rightRigMapping
                    ]
                ];
                for (const rigMappingTuple of rigMappingTuples){
                    const legacyRigMapping = rigMappingTuple[0];
                    const rigMapping = rigMappingTuple[1];
                    for(let index = 0; index < legacyRigMapping.length; index++){
                        const modelJointName = legacyRigMapping[index];
                        rigMapping[HandJointReferenceArray[index]] = modelJointName;
                    }
                }
                options.handMeshes.customRigMappings = {
                    left: leftRigMapping,
                    right: rightRigMapping
                };
            }
        }
    }
    /**
     * Attach this feature.
     * Will usually be called by the features manager.
     *
     * @returns true if successful.
     */ attach() {
        if (!super.attach()) {
            return false;
        }
        if (!this._handResources.jointMeshes) {
            this._originalMesh = this._originalMesh || this.options.jointMeshes?.sourceMesh || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$icoSphereBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateIcoSphere"])("jointParent", WebXRHandTracking._ICOSPHERE_PARAMS);
            this._originalMesh.isVisible = false;
            this._handResources.jointMeshes = WebXRHandTracking._GenerateTrackedJointMeshes(this.options, this._originalMesh);
        }
        this._handResources.handMeshes = this.options.handMeshes?.customMeshes || null;
        this._handResources.rigMappings = this.options.handMeshes?.customRigMappings || null;
        // If they didn't supply custom meshes and are not disabling the default meshes...
        if (!this.options.handMeshes?.customMeshes && !this.options.handMeshes?.disableDefaultMeshes) {
            // eslint-disable-next-line @typescript-eslint/no-floating-promises, github/no-then
            WebXRHandTracking._GenerateDefaultHandMeshesAsync(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EngineStore"].LastCreatedScene, this._xrSessionManager, this.options).then((defaultHandMeshes)=>{
                this._handResources.handMeshes = defaultHandMeshes;
                this._handResources.rigMappings = {
                    left: WebXRHandTracking._GenerateDefaultHandMeshRigMapping("left"),
                    right: WebXRHandTracking._GenerateDefaultHandMeshRigMapping("right")
                };
                // Apply meshes to existing hands if already tracking.
                this._trackingHands.left?.setHandMesh(this._handResources.handMeshes.left, this._handResources.rigMappings.left, this._xrSessionManager);
                this._trackingHands.right?.setHandMesh(this._handResources.handMeshes.right, this._handResources.rigMappings.right, this._xrSessionManager);
                this._handResources.handMeshes.left.scaling.setAll(this._xrSessionManager.worldScalingFactor);
                this._handResources.handMeshes.right.scaling.setAll(this._xrSessionManager.worldScalingFactor);
            });
            this._worldScaleObserver = this._xrSessionManager.onWorldScaleFactorChangedObservable.add((scalingFactors)=>{
                if (this._handResources.handMeshes) {
                    this._handResources.handMeshes.left.scaling.scaleInPlace(scalingFactors.newScaleFactor / scalingFactors.previousScaleFactor);
                    this._handResources.handMeshes.right.scaling.scaleInPlace(scalingFactors.newScaleFactor / scalingFactors.previousScaleFactor);
                }
            });
        }
        for (const controller of this.options.xrInput.controllers){
            this._attachHand(controller);
        }
        this._addNewAttachObserver(this.options.xrInput.onControllerAddedObservable, this._attachHand);
        this._addNewAttachObserver(this.options.xrInput.onControllerRemovedObservable, this._detachHand);
        return true;
    }
    _onXRFrame(_xrFrame) {
        this._trackingHands.left?.updateFromXRFrame(_xrFrame, this._xrSessionManager.referenceSpace, this.options.xrInput.xrCamera);
        this._trackingHands.right?.updateFromXRFrame(_xrFrame, this._xrSessionManager.referenceSpace, this.options.xrInput.xrCamera);
    }
    _detachHandById(controllerId, disposeMesh) {
        const hand = this.getHandByControllerId(controllerId);
        if (hand) {
            const handedness = hand.xrController.inputSource.handedness == "left" ? "left" : "right";
            if (this._trackingHands[handedness]?.xrController.uniqueId === controllerId) {
                this._trackingHands[handedness] = null;
            }
            this.onHandRemovedObservable.notifyObservers(hand);
            hand.dispose(disposeMesh);
            delete this._attachedHands[controllerId];
        }
    }
    /**
     * Detach this feature.
     * Will usually be called by the features manager.
     *
     * @returns true if successful.
     */ detach() {
        if (!super.detach()) {
            return false;
        }
        const keys = Object.keys(this._attachedHands);
        for (const uniqueId of keys){
            this._detachHandById(uniqueId, this.options.handMeshes?.disposeOnSessionEnd);
        }
        if (this.options.handMeshes?.disposeOnSessionEnd) {
            if (this._handResources.jointMeshes) {
                for (const trackedMesh of this._handResources.jointMeshes.left){
                    trackedMesh.dispose();
                }
                for (const trackedMesh of this._handResources.jointMeshes.right){
                    trackedMesh.dispose();
                }
                this._handResources.jointMeshes = null;
            }
            if (this._handResources.handMeshes) {
                this._handResources.handMeshes.left.dispose();
                this._handResources.handMeshes.right.dispose();
                this._handResources.handMeshes = null;
            }
            if (WebXRHandTracking._RightHandGLB) {
                for (const mesh of WebXRHandTracking._RightHandGLB.meshes){
                    mesh.dispose();
                }
            }
            if (WebXRHandTracking._LeftHandGLB) {
                for (const mesh of WebXRHandTracking._LeftHandGLB.meshes){
                    mesh.dispose();
                }
            }
            WebXRHandTracking._RightHandGLB = null;
            WebXRHandTracking._LeftHandGLB = null;
            this._originalMesh?.dispose();
            this._originalMesh = undefined;
        }
        // remove world scale observer
        if (this._worldScaleObserver) {
            this._xrSessionManager.onWorldScaleFactorChangedObservable.remove(this._worldScaleObserver);
        }
        return true;
    }
    /**
     * Dispose this feature and all of the resources attached.
     */ dispose() {
        super.dispose();
        this.onHandAddedObservable.clear();
        this.onHandRemovedObservable.clear();
        if (this._handResources.handMeshes && !this.options.handMeshes?.customMeshes) {
            // this will dispose the cached meshes
            this._handResources.handMeshes.left.dispose();
            this._handResources.handMeshes.right.dispose();
            // remove the cached meshes
            if (WebXRHandTracking._RightHandGLB) {
                for (const mesh of WebXRHandTracking._RightHandGLB.meshes){
                    mesh.dispose();
                }
            }
            if (WebXRHandTracking._LeftHandGLB) {
                for (const mesh of WebXRHandTracking._LeftHandGLB.meshes){
                    mesh.dispose();
                }
            }
            WebXRHandTracking._RightHandGLB = null;
            WebXRHandTracking._LeftHandGLB = null;
        }
        if (this._handResources.jointMeshes) {
            for (const trackedMesh of this._handResources.jointMeshes.left){
                trackedMesh.dispose();
            }
            for (const trackedMesh of this._handResources.jointMeshes.right){
                trackedMesh.dispose();
            }
        }
    }
}
/**
 * The module's name
 */ WebXRHandTracking.Name = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRFeaturesManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRFeatureName"].HAND_TRACKING;
/**
 * The (Babylon) version of this module.
 * This is an integer representing the implementation version.
 * This number does not correspond to the WebXR specs version
 */ WebXRHandTracking.Version = 1;
/** The base URL for the default hand model. */ WebXRHandTracking.DEFAULT_HAND_MODEL_BASE_URL = "https://assets.babylonjs.com/core/HandMeshes/";
/** The filename to use for the default right hand model. */ WebXRHandTracking.DEFAULT_HAND_MODEL_RIGHT_FILENAME = "r_hand_rhs.glb";
/** The filename to use for the default left hand model. */ WebXRHandTracking.DEFAULT_HAND_MODEL_LEFT_FILENAME = "l_hand_rhs.glb";
/** The URL pointing to the default hand model NodeMaterial shader. */ WebXRHandTracking.DEFAULT_HAND_MODEL_SHADER_URL = "https://assets.babylonjs.com/core/HandMeshes/handsShader.json";
// We want to use lightweight models, diameter will initially be 1 but scaled to the values returned from WebXR.
WebXRHandTracking._ICOSPHERE_PARAMS = {
    radius: 0.5,
    flat: false,
    subdivisions: 2
};
WebXRHandTracking._RightHandGLB = null;
WebXRHandTracking._LeftHandGLB = null;
//register the plugin
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRFeaturesManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRFeaturesManager"].AddWebXRFeature(WebXRHandTracking.Name, (xrSessionManager, options)=>{
    return ()=>new WebXRHandTracking(xrSessionManager, options);
}, WebXRHandTracking.Version, false); //# sourceMappingURL=WebXRHandTracking.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/WebXRControllerTeleportation.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WebXRMotionControllerTeleportation",
    ()=>WebXRMotionControllerTeleportation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRFeaturesManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/webXRFeaturesManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$motionController$2f$webXRControllerComponent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/motionController/webXRControllerComponent.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$ray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Culling/ray.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$ray$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Culling/ray.core.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$dynamicTexture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/dynamicTexture.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$cylinderBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/cylinderBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$easing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Animations/easing.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Animations/animation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$axis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.axis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$standardMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/standardMaterial.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$groundBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/groundBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$torusBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/torusBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$path$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.path.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$linesBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/linesBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRAbstractFeature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/WebXRAbstractFeature.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.color.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Rendering$2f$utilityLayerRenderer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Rendering/utilityLayerRenderer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$pointerEvents$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Events/pointerEvents.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$timer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/timer.js [app-ssr] (ecmascript)");
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
class WebXRMotionControllerTeleportation extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRAbstractFeature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRAbstractFeature"] {
    /**
     * Is rotation enabled when moving forward?
     * Disabling this feature will prevent the user from deciding the direction when teleporting
     */ get rotationEnabled() {
        return this._rotationEnabled;
    }
    /**
     * Sets whether rotation is enabled or not
     * @param enabled is rotation enabled when teleportation is shown
     */ set rotationEnabled(enabled) {
        this._rotationEnabled = enabled;
        if (this._options.teleportationTargetMesh) {
            const children = this._options.teleportationTargetMesh.getChildMeshes(false, (node)=>node.name === "rotationCone");
            if (children[0]) {
                children[0].setEnabled(enabled);
            }
        }
    }
    /**
     * Exposes the currently set teleportation target mesh.
     */ get teleportationTargetMesh() {
        return this._options.teleportationTargetMesh || null;
    }
    /**
     * constructs a new teleportation system
     * @param _xrSessionManager an instance of WebXRSessionManager
     * @param _options configuration object for this feature
     */ constructor(_xrSessionManager, _options){
        super(_xrSessionManager);
        this._options = _options;
        this._controllers = {};
        this._snappedToPoint = false;
        this._cachedColor4White = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color4"](1, 1, 1, 1);
        this._tmpRay = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$ray$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Ray"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]());
        this._tmpVector = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]();
        this._tmpQuaternion = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"]();
        this._worldScaleObserver = null;
        /**
         * Skip the next teleportation. This can be controlled by the user to prevent the user from teleportation
         * to sections that are not yet "unlocked", but should still show the teleportation mesh.
         */ this.skipNextTeleportation = false;
        /**
         * Is movement backwards enabled
         */ this.backwardsMovementEnabled = true;
        /**
         * Distance to travel when moving backwards
         */ this.backwardsTeleportationDistance = 0.7;
        /**
         * The distance from the user to the inspection point in the direction of the controller
         * A higher number will allow the user to move further
         * defaults to 5 (meters, in xr units)
         */ this.parabolicCheckRadius = 5;
        /**
         * Should the module support parabolic ray on top of direct ray
         * If enabled, the user will be able to point "at the sky" and move according to predefined radius distance
         * Very helpful when moving between floors / different heights
         */ this.parabolicRayEnabled = true;
        /**
         * The second type of ray - straight line.
         * Should it be enabled or should the parabolic line be the only one.
         */ this.straightRayEnabled = true;
        /**
         * How much rotation should be applied when rotating right and left
         */ this.rotationAngle = Math.PI / 8;
        /**
         * This observable will notify when the target mesh position was updated.
         * The picking info it provides contains the point to which the target mesh will move ()
         */ this.onTargetMeshPositionUpdatedObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * Is teleportation enabled. Can be used to allow rotation only.
         */ this.teleportationEnabled = true;
        this._rotationEnabled = true;
        /**
         * Observable raised before camera rotation
         */ this.onBeforeCameraTeleportRotation = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         *  Observable raised after camera rotation
         */ this.onAfterCameraTeleportRotation = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        this._attachController = (xrController)=>{
            if (this._controllers[xrController.uniqueId] || this._options.forceHandedness && xrController.inputSource.handedness !== this._options.forceHandedness) {
                // already attached
                return;
            }
            this._controllers[xrController.uniqueId] = {
                xrController,
                teleportationState: {
                    forward: false,
                    backwards: false,
                    rotating: false,
                    currentRotation: 0,
                    baseRotation: 0,
                    blocked: false,
                    initialHit: false,
                    mainComponentUsed: false
                }
            };
            const controllerData = this._controllers[xrController.uniqueId];
            // motion controller only available to gamepad-enabled input sources.
            if (controllerData.xrController.inputSource.targetRayMode === "tracked-pointer" && controllerData.xrController.inputSource.gamepad) {
                // motion controller support
                const initMotionController = ()=>{
                    if (xrController.motionController) {
                        const movementController = xrController.motionController.getComponentOfType(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$motionController$2f$webXRControllerComponent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRControllerComponent"].THUMBSTICK_TYPE) || xrController.motionController.getComponentOfType(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$motionController$2f$webXRControllerComponent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRControllerComponent"].TOUCHPAD_TYPE);
                        if (!movementController || this._options.useMainComponentOnly) {
                            // use trigger to move on long press
                            const mainComponent = xrController.motionController.getMainComponent();
                            if (!mainComponent) {
                                return;
                            }
                            controllerData.teleportationState.mainComponentUsed = true;
                            controllerData.teleportationComponent = mainComponent;
                            controllerData.onButtonChangedObserver = mainComponent.onButtonStateChangedObservable.add(()=>{
                                if (!this.teleportationEnabled) {
                                    return;
                                }
                                const teleportLocal = ()=>{
                                    // simulate "forward" thumbstick push
                                    controllerData.teleportationState.forward = true;
                                    controllerData.teleportationState.initialHit = false;
                                    this._currentTeleportationControllerId = controllerData.xrController.uniqueId;
                                    controllerData.teleportationState.baseRotation = this._options.xrInput.xrCamera.rotationQuaternion.toEulerAngles().y;
                                    controllerData.teleportationState.currentRotation = 0;
                                    const timeToSelect = this._options.timeToTeleport || 3000;
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$timer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setAndStartTimer"])({
                                        timeout: timeToSelect,
                                        contextObservable: this._xrSessionManager.onXRFrameObservable,
                                        breakCondition: ()=>!mainComponent.pressed,
                                        onEnded: ()=>{
                                            if (this._currentTeleportationControllerId === controllerData.xrController.uniqueId && controllerData.teleportationState.forward) {
                                                this._teleportForward(xrController.uniqueId);
                                            }
                                        }
                                    });
                                };
                                // did "pressed" changed?
                                if (mainComponent.changes.pressed) {
                                    if (mainComponent.changes.pressed.current) {
                                        // delay if the start time is defined
                                        if (this._options.timeToTeleportStart) {
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$timer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setAndStartTimer"])({
                                                timeout: this._options.timeToTeleportStart,
                                                contextObservable: this._xrSessionManager.onXRFrameObservable,
                                                onEnded: ()=>{
                                                    // check if still pressed
                                                    if (mainComponent.pressed) {
                                                        teleportLocal();
                                                    }
                                                }
                                            });
                                        } else {
                                            teleportLocal();
                                        }
                                    } else {
                                        controllerData.teleportationState.forward = false;
                                        this._currentTeleportationControllerId = "";
                                    }
                                }
                            });
                        } else {
                            controllerData.teleportationComponent = movementController;
                            // use thumbstick (or touchpad if thumbstick not available)
                            controllerData.onAxisChangedObserver = movementController.onAxisValueChangedObservable.add((axesData)=>{
                                if (axesData.y <= 0.7 && controllerData.teleportationState.backwards) {
                                    controllerData.teleportationState.backwards = false;
                                }
                                if (axesData.y > 0.7 && !controllerData.teleportationState.forward && this.backwardsMovementEnabled && !this.snapPointsOnly) {
                                    // teleport backwards
                                    // General gist: Go Back N units, cast a ray towards the floor. If collided, move.
                                    if (!controllerData.teleportationState.backwards) {
                                        controllerData.teleportationState.backwards = true;
                                        // teleport backwards ONCE
                                        this._tmpQuaternion.copyFrom(this._options.xrInput.xrCamera.rotationQuaternion);
                                        this._tmpQuaternion.toEulerAnglesToRef(this._tmpVector);
                                        // get only the y rotation
                                        this._tmpVector.x = 0;
                                        this._tmpVector.z = 0;
                                        // get the quaternion
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"].FromEulerVectorToRef(this._tmpVector, this._tmpQuaternion);
                                        this._tmpVector.set(0, 0, this.backwardsTeleportationDistance * (this._xrSessionManager.scene.useRightHandedSystem ? 1.0 : -1.0));
                                        this._tmpVector.rotateByQuaternionToRef(this._tmpQuaternion, this._tmpVector);
                                        this._tmpVector.addInPlace(this._options.xrInput.xrCamera.position);
                                        this._tmpRay.origin.copyFrom(this._tmpVector);
                                        // This will prevent the user from "falling" to a lower platform!
                                        // TODO - should this be a flag? 'allow falling to lower platforms'?
                                        this._tmpRay.length = this._options.xrInput.xrCamera.realWorldHeight + 0.1;
                                        // Right handed system had here "1" instead of -1. This is unneeded.
                                        this._tmpRay.direction.set(0, -1, 0);
                                        const pick = this._xrSessionManager.scene.pickWithRay(this._tmpRay, (o)=>{
                                            return this._floorMeshes.indexOf(o) !== -1;
                                        });
                                        // pick must exist, but stay safe
                                        if (pick && pick.pickedPoint) {
                                            // Teleport the users feet to where they targeted. Ignore the Y axis.
                                            // If the "falling to lower platforms" feature is implemented the Y axis should be set here as well
                                            this._options.xrInput.xrCamera.position.x = pick.pickedPoint.x;
                                            this._options.xrInput.xrCamera.position.z = pick.pickedPoint.z;
                                        }
                                    }
                                }
                                if (axesData.y < -0.7 && !this._currentTeleportationControllerId && !controllerData.teleportationState.rotating && this.teleportationEnabled) {
                                    controllerData.teleportationState.forward = true;
                                    this._currentTeleportationControllerId = controllerData.xrController.uniqueId;
                                    controllerData.teleportationState.baseRotation = this._options.xrInput.xrCamera.rotationQuaternion.toEulerAngles().y;
                                }
                                if (axesData.x) {
                                    if (!controllerData.teleportationState.forward) {
                                        if (!controllerData.teleportationState.rotating && Math.abs(axesData.x) > 0.7) {
                                            // rotate in the right direction positive is right
                                            controllerData.teleportationState.rotating = true;
                                            const rotation = this.rotationAngle * (axesData.x > 0 ? 1 : -1) * (this._xrSessionManager.scene.useRightHandedSystem ? -1 : 1);
                                            this.onBeforeCameraTeleportRotation.notifyObservers(rotation);
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"].FromEulerAngles(0, rotation, 0).multiplyToRef(this._options.xrInput.xrCamera.rotationQuaternion, this._options.xrInput.xrCamera.rotationQuaternion);
                                            this.onAfterCameraTeleportRotation.notifyObservers(this._options.xrInput.xrCamera.rotationQuaternion);
                                        }
                                    } else {
                                        if (this._currentTeleportationControllerId === controllerData.xrController.uniqueId) {
                                            // set the rotation of the forward movement
                                            if (this.rotationEnabled) {
                                                setTimeout(()=>{
                                                    controllerData.teleportationState.currentRotation = Math.atan2(axesData.x, axesData.y * (this._xrSessionManager.scene.useRightHandedSystem ? 1 : -1));
                                                });
                                            } else {
                                                controllerData.teleportationState.currentRotation = 0;
                                            }
                                        }
                                    }
                                } else {
                                    controllerData.teleportationState.rotating = false;
                                }
                                if (axesData.x === 0 && axesData.y === 0) {
                                    if (controllerData.teleportationState.blocked) {
                                        controllerData.teleportationState.blocked = false;
                                        this._setTargetMeshVisibility(false);
                                    }
                                    if (controllerData.teleportationState.forward) {
                                        this._teleportForward(xrController.uniqueId);
                                    }
                                }
                            });
                        }
                    }
                };
                if (xrController.motionController) {
                    initMotionController();
                } else {
                    xrController.onMotionControllerInitObservable.addOnce(()=>{
                        initMotionController();
                    });
                }
            } else {
                controllerData.teleportationState.mainComponentUsed = true;
                let breakObserver = false;
                const teleportLocal = ()=>{
                    this._currentTeleportationControllerId = controllerData.xrController.uniqueId;
                    controllerData.teleportationState.forward = true;
                    controllerData.teleportationState.initialHit = false;
                    controllerData.teleportationState.baseRotation = this._options.xrInput.xrCamera.rotationQuaternion.toEulerAngles().y;
                    controllerData.teleportationState.currentRotation = 0;
                    const timeToSelect = this._options.timeToTeleport || 3000;
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$timer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setAndStartTimer"])({
                        timeout: timeToSelect,
                        contextObservable: this._xrSessionManager.onXRFrameObservable,
                        onEnded: ()=>{
                            if (this._currentTeleportationControllerId === controllerData.xrController.uniqueId && controllerData.teleportationState.forward) {
                                this._teleportForward(xrController.uniqueId);
                            }
                        }
                    });
                };
                this._xrSessionManager.scene.onPointerObservable.add((pointerInfo)=>{
                    if (pointerInfo.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$pointerEvents$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PointerEventTypes"].POINTERDOWN) {
                        breakObserver = false;
                        // check if start time is defined
                        if (this._options.timeToTeleportStart) {
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$timer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setAndStartTimer"])({
                                timeout: this._options.timeToTeleportStart,
                                contextObservable: this._xrSessionManager.onXRFrameObservable,
                                onEnded: ()=>{
                                    // make sure pointer up was not triggered during this time
                                    if (this._currentTeleportationControllerId === controllerData.xrController.uniqueId) {
                                        teleportLocal();
                                    }
                                },
                                breakCondition: ()=>{
                                    if (breakObserver) {
                                        breakObserver = false;
                                        return true;
                                    }
                                    return false;
                                }
                            });
                        } else {
                            teleportLocal();
                        }
                    } else if (pointerInfo.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$pointerEvents$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PointerEventTypes"].POINTERUP) {
                        breakObserver = true;
                        controllerData.teleportationState.forward = false;
                        this._currentTeleportationControllerId = "";
                    }
                });
            }
        };
        this._colorArray = Array(24).fill(this._cachedColor4White);
        // create default mesh if not provided
        if (!this._options.teleportationTargetMesh) {
            this._createDefaultTargetMesh();
        }
        this._floorMeshes = this._options.floorMeshes || [];
        this._snapToPositions = this._options.snapPositions || [];
        this._blockedRayColor = this._options.blockedRayColor || new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color4"](1, 0, 0, 0.75);
        this._setTargetMeshVisibility(false);
        // set the observables
        this.onBeforeCameraTeleport = _options.xrInput.xrCamera.onBeforeCameraTeleport;
        this.onAfterCameraTeleport = _options.xrInput.xrCamera.onAfterCameraTeleport;
        this.parabolicCheckRadius *= this._xrSessionManager.worldScalingFactor;
        this._worldScaleObserver = _xrSessionManager.onWorldScaleFactorChangedObservable.add((values)=>{
            this.parabolicCheckRadius = this.parabolicCheckRadius / values.previousScaleFactor * values.newScaleFactor;
            this._options.teleportationTargetMesh?.scaling.scaleInPlace(values.newScaleFactor / values.previousScaleFactor);
        });
    }
    /**
     * Get the snapPointsOnly flag
     */ get snapPointsOnly() {
        return !!this._options.snapPointsOnly;
    }
    /**
     * Sets the snapPointsOnly flag
     * @param snapToPoints should teleportation be exclusively to snap points
     */ set snapPointsOnly(snapToPoints) {
        this._options.snapPointsOnly = snapToPoints;
    }
    /**
     * Add a new mesh to the floor meshes array
     * @param mesh the mesh to use as floor mesh
     */ addFloorMesh(mesh) {
        this._floorMeshes.push(mesh);
    }
    /**
     * Add a mesh to the list of meshes blocking the teleportation ray
     * @param mesh The mesh to add to the teleportation-blocking meshes
     */ addBlockerMesh(mesh) {
        this._options.pickBlockerMeshes = this._options.pickBlockerMeshes || [];
        this._options.pickBlockerMeshes.push(mesh);
    }
    /**
     * Add a new snap-to point to fix teleportation to this position
     * @param newSnapPoint The new Snap-To point
     */ addSnapPoint(newSnapPoint) {
        this._snapToPositions.push(newSnapPoint);
    }
    attach() {
        if (!super.attach()) {
            return false;
        }
        // Safety reset
        this._currentTeleportationControllerId = "";
        for (const controller of this._options.xrInput.controllers){
            this._attachController(controller);
        }
        this._addNewAttachObserver(this._options.xrInput.onControllerAddedObservable, this._attachController);
        this._addNewAttachObserver(this._options.xrInput.onControllerRemovedObservable, (controller)=>{
            // REMOVE the controller
            this._detachController(controller.uniqueId);
        });
        return true;
    }
    detach() {
        if (!super.detach()) {
            return false;
        }
        const keys = Object.keys(this._controllers);
        for (const controllerId of keys){
            this._detachController(controllerId);
        }
        this._setTargetMeshVisibility(false);
        this._currentTeleportationControllerId = "";
        this._controllers = {};
        return true;
    }
    dispose() {
        super.dispose();
        this._options.teleportationTargetMesh && this._options.teleportationTargetMesh.dispose(false, true);
        if (this._worldScaleObserver) {
            this._xrSessionManager.onWorldScaleFactorChangedObservable.remove(this._worldScaleObserver);
        }
        this.onTargetMeshPositionUpdatedObservable.clear();
        this.onTargetMeshPositionUpdatedObservable.clear();
        this.onBeforeCameraTeleportRotation.clear();
        this.onAfterCameraTeleportRotation.clear();
        this.onBeforeCameraTeleport.clear();
        this.onAfterCameraTeleport.clear();
    }
    /**
     * Remove a mesh from the floor meshes array
     * @param mesh the mesh to remove
     */ removeFloorMesh(mesh) {
        const index = this._floorMeshes.indexOf(mesh);
        if (index !== -1) {
            this._floorMeshes.splice(index, 1);
        }
    }
    /**
     * Remove a mesh from the blocker meshes array
     * @param mesh the mesh to remove
     */ removeBlockerMesh(mesh) {
        this._options.pickBlockerMeshes = this._options.pickBlockerMeshes || [];
        const index = this._options.pickBlockerMeshes.indexOf(mesh);
        if (index !== -1) {
            this._options.pickBlockerMeshes.splice(index, 1);
        }
    }
    /**
     * Remove a mesh from the floor meshes array using its name
     * @param name the mesh name to remove
     */ removeFloorMeshByName(name) {
        const mesh = this._xrSessionManager.scene.getMeshByName(name);
        if (mesh) {
            this.removeFloorMesh(mesh);
        }
    }
    /**
     * This function will iterate through the array, searching for this point or equal to it. It will then remove it from the snap-to array
     * @param snapPointToRemove the point (or a clone of it) to be removed from the array
     * @returns was the point found and removed or not
     */ removeSnapPoint(snapPointToRemove) {
        // check if the object is in the array
        let index = this._snapToPositions.indexOf(snapPointToRemove);
        // if not found as an object, compare to the points
        if (index === -1) {
            for(let i = 0; i < this._snapToPositions.length; ++i){
                // equals? index is i, break the loop
                if (this._snapToPositions[i].equals(snapPointToRemove)) {
                    index = i;
                    break;
                }
            }
        }
        // index is not -1? remove the object
        if (index !== -1) {
            this._snapToPositions.splice(index, 1);
            return true;
        }
        return false;
    }
    /**
     * This function sets a selection feature that will be disabled when
     * the forward ray is shown and will be reattached when hidden.
     * This is used to remove the selection rays when moving.
     * @param selectionFeature the feature to disable when forward movement is enabled
     */ setSelectionFeature(selectionFeature) {
        this._selectionFeature = selectionFeature;
    }
    _onXRFrame(_xrFrame) {
        const frame = this._xrSessionManager.currentFrame;
        const scene = this._xrSessionManager.scene;
        if (!this.attach || !frame) {
            return;
        }
        // render target if needed
        const targetMesh = this._options.teleportationTargetMesh;
        if (this._currentTeleportationControllerId) {
            if (!targetMesh) {
                return;
            }
            targetMesh.rotationQuaternion = targetMesh.rotationQuaternion || new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"]();
            const controllerData = this._controllers[this._currentTeleportationControllerId];
            if (controllerData && controllerData.teleportationState.forward) {
                // set the rotation
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"].RotationYawPitchRollToRef(controllerData.teleportationState.currentRotation + controllerData.teleportationState.baseRotation, 0, 0, targetMesh.rotationQuaternion);
                // set the ray and position
                let hitPossible = false;
                const controlSelectionFeature = controllerData.xrController.inputSource.targetRayMode !== "transient-pointer";
                controllerData.xrController.getWorldPointerRayToRef(this._tmpRay);
                if (this.straightRayEnabled) {
                    // first check if direct ray possible
                    // pick grounds that are LOWER only. upper will use parabolic path
                    const pick = scene.pickWithRay(this._tmpRay, (o)=>{
                        if (this._options.blockerMeshesPredicate && this._options.blockerMeshesPredicate(o)) {
                            return true;
                        }
                        if (this._options.blockAllPickableMeshes && o.isPickable) {
                            return true;
                        }
                        // check for mesh-blockers
                        if (this._options.pickBlockerMeshes && this._options.pickBlockerMeshes.indexOf(o) !== -1) {
                            return true;
                        }
                        const index = this._floorMeshes.indexOf(o);
                        if (index === -1) {
                            return false;
                        }
                        return this._floorMeshes[index].absolutePosition.y < this._options.xrInput.xrCamera.globalPosition.y;
                    });
                    const floorMeshPicked = pick && pick.pickedMesh && this._floorMeshes.indexOf(pick.pickedMesh) !== -1;
                    if (pick && pick.pickedMesh && !floorMeshPicked) {
                        if (controllerData.teleportationState.mainComponentUsed && !controllerData.teleportationState.initialHit) {
                            controllerData.teleportationState.forward = false;
                            return;
                        }
                        controllerData.teleportationState.blocked = true;
                        this._setTargetMeshVisibility(false, false, controlSelectionFeature);
                        this._showParabolicPath(pick);
                        return;
                    } else if (pick && pick.pickedPoint) {
                        controllerData.teleportationState.initialHit = true;
                        controllerData.teleportationState.blocked = false;
                        hitPossible = true;
                        this._setTargetMeshPosition(pick);
                        this._setTargetMeshVisibility(true, false, controlSelectionFeature);
                        this._showParabolicPath(pick);
                    }
                }
                // straight ray is still the main ray, but disabling the straight line will force parabolic line.
                if (this.parabolicRayEnabled && !hitPossible) {
                    // radius compensation according to pointer rotation around X
                    const xRotation = controllerData.xrController.pointer.rotationQuaternion.toEulerAngles().x;
                    const compensation = 1 + (Math.PI / 2 - Math.abs(xRotation));
                    // check parabolic ray
                    const radius = this.parabolicCheckRadius * compensation;
                    this._tmpRay.origin.addToRef(this._tmpRay.direction.scale(radius * 2), this._tmpVector);
                    this._tmpVector.y = this._tmpRay.origin.y;
                    this._tmpRay.origin.addInPlace(this._tmpRay.direction.scale(radius));
                    this._tmpVector.subtractToRef(this._tmpRay.origin, this._tmpRay.direction);
                    this._tmpRay.direction.normalize();
                    const pick = scene.pickWithRay(this._tmpRay, (o)=>{
                        if (this._options.blockerMeshesPredicate && this._options.blockerMeshesPredicate(o)) {
                            return true;
                        }
                        if (this._options.blockAllPickableMeshes && o.isPickable) {
                            return true;
                        }
                        // check for mesh-blockers
                        if (this._options.pickBlockerMeshes && this._options.pickBlockerMeshes.indexOf(o) !== -1) {
                            return true;
                        }
                        return this._floorMeshes.indexOf(o) !== -1;
                    });
                    const floorMeshPicked = pick && pick.pickedMesh && this._floorMeshes.indexOf(pick.pickedMesh) !== -1;
                    if (pick && pick.pickedMesh && !floorMeshPicked) {
                        if (controllerData.teleportationState.mainComponentUsed && !controllerData.teleportationState.initialHit) {
                            controllerData.teleportationState.forward = false;
                            return;
                        }
                        controllerData.teleportationState.blocked = true;
                        this._setTargetMeshVisibility(false, false, controlSelectionFeature);
                        this._showParabolicPath(pick);
                        return;
                    } else if (pick && pick.pickedPoint) {
                        controllerData.teleportationState.initialHit = true;
                        controllerData.teleportationState.blocked = false;
                        hitPossible = true;
                        this._setTargetMeshPosition(pick);
                        this._setTargetMeshVisibility(true, false, controlSelectionFeature);
                        this._showParabolicPath(pick);
                    }
                }
                // if needed, set visible:
                this._setTargetMeshVisibility(hitPossible, false, controlSelectionFeature);
            } else {
                this._setTargetMeshVisibility(false, false, true);
            }
        } else {
            this._disposeBezierCurve();
            this._setTargetMeshVisibility(false, false, true);
        }
    }
    _createDefaultTargetMesh() {
        // set defaults
        this._options.defaultTargetMeshOptions = this._options.defaultTargetMeshOptions || {};
        const sceneToRenderTo = this._options.useUtilityLayer ? this._options.customUtilityLayerScene || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Rendering$2f$utilityLayerRenderer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UtilityLayerRenderer"].DefaultUtilityLayer.utilityLayerScene : this._xrSessionManager.scene;
        const teleportationTarget = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$groundBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateGround"])("teleportationTarget", {
            width: 2,
            height: 2,
            subdivisions: 2
        }, sceneToRenderTo);
        teleportationTarget.isPickable = false;
        if (this._options.defaultTargetMeshOptions.teleportationCircleMaterial) {
            teleportationTarget.material = this._options.defaultTargetMeshOptions.teleportationCircleMaterial;
        } else {
            const length = 512;
            const dynamicTexture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$dynamicTexture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DynamicTexture"]("teleportationPlaneDynamicTexture", length, sceneToRenderTo, true);
            dynamicTexture.hasAlpha = true;
            const context = dynamicTexture.getContext();
            const centerX = length / 2;
            const centerY = length / 2;
            const radius = 200;
            context.beginPath();
            context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
            context.fillStyle = this._options.defaultTargetMeshOptions.teleportationFillColor || "#444444";
            context.fill();
            context.lineWidth = 10;
            context.strokeStyle = this._options.defaultTargetMeshOptions.teleportationBorderColor || "#FFFFFF";
            context.stroke();
            context.closePath();
            dynamicTexture.update();
            const teleportationCircleMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$standardMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StandardMaterial"]("teleportationPlaneMaterial", sceneToRenderTo);
            teleportationCircleMaterial.diffuseTexture = dynamicTexture;
            teleportationTarget.material = teleportationCircleMaterial;
        }
        const torus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$torusBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateTorus"])("torusTeleportation", {
            diameter: 0.75,
            thickness: 0.1,
            tessellation: 20
        }, sceneToRenderTo);
        torus.isPickable = false;
        torus.parent = teleportationTarget;
        if (!this._options.defaultTargetMeshOptions.disableAnimation) {
            const animationInnerCircle = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Animation"]("animationInnerCircle", "position.y", 30, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Animation"].ANIMATIONTYPE_FLOAT, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Animation"].ANIMATIONLOOPMODE_CYCLE);
            const keys = [];
            keys.push({
                frame: 0,
                value: 0
            });
            keys.push({
                frame: 30,
                value: 0.4
            });
            keys.push({
                frame: 60,
                value: 0
            });
            animationInnerCircle.setKeys(keys);
            const easingFunction = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$easing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SineEase"]();
            easingFunction.setEasingMode(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$easing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EasingFunction"].EASINGMODE_EASEINOUT);
            animationInnerCircle.setEasingFunction(easingFunction);
            torus.animations = [];
            torus.animations.push(animationInnerCircle);
            sceneToRenderTo.beginAnimation(torus, 0, 60, true);
        }
        const cone = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$cylinderBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateCylinder"])("rotationCone", {
            diameterTop: 0,
            tessellation: 4
        }, sceneToRenderTo);
        cone.isPickable = false;
        cone.scaling.set(0.5, 0.12, 0.2);
        cone.rotate(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$axis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Axis"].X, Math.PI / 2);
        cone.position.z = 0.6;
        cone.parent = torus;
        if (this._options.defaultTargetMeshOptions.torusArrowMaterial) {
            torus.material = this._options.defaultTargetMeshOptions.torusArrowMaterial;
            cone.material = this._options.defaultTargetMeshOptions.torusArrowMaterial;
        } else {
            const torusConeMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$standardMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StandardMaterial"]("torusConsMat", sceneToRenderTo);
            torusConeMaterial.disableLighting = !!this._options.defaultTargetMeshOptions.disableLighting;
            if (torusConeMaterial.disableLighting) {
                torusConeMaterial.emissiveColor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"](0.3, 0.3, 1.0);
            } else {
                torusConeMaterial.diffuseColor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"](0.3, 0.3, 1.0);
            }
            torusConeMaterial.alpha = 0.9;
            torus.material = torusConeMaterial;
            cone.material = torusConeMaterial;
            this._teleportationRingMaterial = torusConeMaterial;
        }
        if (this._options.renderingGroupId !== undefined) {
            teleportationTarget.renderingGroupId = this._options.renderingGroupId;
            torus.renderingGroupId = this._options.renderingGroupId;
            cone.renderingGroupId = this._options.renderingGroupId;
        }
        this._options.teleportationTargetMesh = teleportationTarget;
        this._options.teleportationTargetMesh.scaling.setAll(this._xrSessionManager.worldScalingFactor);
        // hide the teleportation target mesh right after creating it.
        this._setTargetMeshVisibility(false);
    }
    _detachController(xrControllerUniqueId) {
        const controllerData = this._controllers[xrControllerUniqueId];
        if (!controllerData) {
            return;
        }
        if (controllerData.teleportationComponent) {
            if (controllerData.onAxisChangedObserver) {
                controllerData.teleportationComponent.onAxisValueChangedObservable.remove(controllerData.onAxisChangedObserver);
            }
            if (controllerData.onButtonChangedObserver) {
                controllerData.teleportationComponent.onButtonStateChangedObservable.remove(controllerData.onButtonChangedObserver);
            }
        }
        // remove from the map
        delete this._controllers[xrControllerUniqueId];
    }
    _findClosestSnapPointWithRadius(realPosition, radius = this._options.snapToPositionRadius || 0.8) {
        let closestPoint = null;
        let closestDistance = Number.MAX_VALUE;
        if (this._snapToPositions.length) {
            const radiusSquared = radius * radius;
            for (const position of this._snapToPositions){
                const dist = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].DistanceSquared(position, realPosition);
                if (dist <= radiusSquared && dist < closestDistance) {
                    closestDistance = dist;
                    closestPoint = position;
                }
            }
        }
        return closestPoint;
    }
    _setTargetMeshPosition(pickInfo) {
        const newPosition = pickInfo.pickedPoint;
        if (!this._options.teleportationTargetMesh || !newPosition) {
            return;
        }
        const snapPosition = this._findClosestSnapPointWithRadius(newPosition);
        this._snappedToPoint = !!snapPosition;
        if (this.snapPointsOnly && !this._snappedToPoint && this._teleportationRingMaterial) {
            this._teleportationRingMaterial.diffuseColor.set(1.0, 0.3, 0.3);
        } else if (this.snapPointsOnly && this._snappedToPoint && this._teleportationRingMaterial) {
            this._teleportationRingMaterial.diffuseColor.set(0.3, 0.3, 1.0);
        }
        this._options.teleportationTargetMesh.position.copyFrom(snapPosition || newPosition);
        this._options.teleportationTargetMesh.position.y += 0.01;
        this.onTargetMeshPositionUpdatedObservable.notifyObservers(pickInfo);
    }
    _setTargetMeshVisibility(visible, force, controlSelectionFeature) {
        if (!this._options.teleportationTargetMesh) {
            return;
        }
        if (this._options.teleportationTargetMesh.isVisible === visible && !force) {
            return;
        }
        this._options.teleportationTargetMesh.isVisible = visible;
        const children = this._options.teleportationTargetMesh.getChildren(undefined, false);
        for (const m of children){
            m.isVisible = visible;
        }
        if (!visible) {
            if (this._quadraticBezierCurve) {
                this._quadraticBezierCurve.dispose();
                this._quadraticBezierCurve = null;
            }
            if (this._selectionFeature && controlSelectionFeature) {
                this._selectionFeature.attach();
            }
        } else {
            if (this._selectionFeature && controlSelectionFeature) {
                this._selectionFeature.detach();
            }
        }
    }
    _disposeBezierCurve() {
        if (this._quadraticBezierCurve) {
            this._quadraticBezierCurve.dispose();
            this._quadraticBezierCurve = null;
        }
    }
    _showParabolicPath(pickInfo) {
        if (!pickInfo.pickedPoint || !this._currentTeleportationControllerId) {
            return;
        }
        const sceneToRenderTo = this._options.useUtilityLayer ? this._options.customUtilityLayerScene || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Rendering$2f$utilityLayerRenderer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UtilityLayerRenderer"].DefaultUtilityLayer.utilityLayerScene : this._xrSessionManager.scene;
        const controllerData = this._controllers[this._currentTeleportationControllerId];
        const quadraticBezierVectors = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$path$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Curve3"].CreateQuadraticBezier(controllerData.xrController.pointer.absolutePosition, pickInfo.ray.origin, pickInfo.pickedPoint, 25);
        const color = controllerData.teleportationState.blocked ? this._blockedRayColor : undefined;
        const colorsArray = this._colorArray.fill(color || this._cachedColor4White);
        // take out the first 2 points, to not start directly from the controller
        const points = quadraticBezierVectors.getPoints();
        points.shift();
        points.shift();
        if (!this._options.generateRayPathMesh) {
            this._quadraticBezierCurve = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$linesBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateLines"])("teleportation path line", {
                points: points,
                instance: this._quadraticBezierCurve,
                updatable: true,
                colors: colorsArray
            }, sceneToRenderTo);
        } else {
            this._quadraticBezierCurve = this._options.generateRayPathMesh(quadraticBezierVectors.getPoints(), pickInfo);
        }
        this._quadraticBezierCurve.isPickable = false;
        if (this._options.renderingGroupId !== undefined) {
            this._quadraticBezierCurve.renderingGroupId = this._options.renderingGroupId;
        }
    }
    _teleportForward(controllerId) {
        const controllerData = this._controllers[controllerId];
        if (!controllerData || !controllerData.teleportationState.forward || !this.teleportationEnabled) {
            return;
        }
        controllerData.teleportationState.forward = false;
        this._currentTeleportationControllerId = "";
        if (this.snapPointsOnly && !this._snappedToPoint) {
            return;
        }
        if (this.skipNextTeleportation) {
            this.skipNextTeleportation = false;
            return;
        }
        // do the movement forward here
        if (this._options.teleportationTargetMesh && this._options.teleportationTargetMesh.isVisible) {
            const height = this._options.xrInput.xrCamera.realWorldHeight;
            this.onBeforeCameraTeleport.notifyObservers(this._options.xrInput.xrCamera.position);
            this._options.xrInput.xrCamera.position.copyFrom(this._options.teleportationTargetMesh.position);
            this._options.xrInput.xrCamera.position.y += height;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"].FromEulerAngles(0, controllerData.teleportationState.currentRotation - (this._xrSessionManager.scene.useRightHandedSystem ? Math.PI : 0), 0).multiplyToRef(this._options.xrInput.xrCamera.rotationQuaternion, this._options.xrInput.xrCamera.rotationQuaternion);
            this.onAfterCameraTeleport.notifyObservers(this._options.xrInput.xrCamera.position);
        }
    }
}
/**
 * The module's name
 */ WebXRMotionControllerTeleportation.Name = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRFeaturesManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRFeatureName"].TELEPORTATION;
/**
 * The (Babylon) version of this module.
 * This is an integer representing the implementation version.
 * This number does not correspond to the webxr specs version
 */ WebXRMotionControllerTeleportation.Version = 1;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRFeaturesManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRFeaturesManager"].AddWebXRFeature(WebXRMotionControllerTeleportation.Name, (xrSessionManager, options)=>{
    return ()=>new WebXRMotionControllerTeleportation(xrSessionManager, options);
}, WebXRMotionControllerTeleportation.Version, true); //# sourceMappingURL=WebXRControllerTeleportation.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/webXRDefaultExperience.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WebXRDefaultExperience",
    ()=>WebXRDefaultExperience,
    "WebXRDefaultExperienceOptions",
    ()=>WebXRDefaultExperienceOptions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRExperienceHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/webXRExperienceHelper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRInput$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/webXRInput.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRControllerPointerSelection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/WebXRControllerPointerSelection.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRNearInteraction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/WebXRNearInteraction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXREnterExitUI$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/webXREnterExitUI.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRHandTracking$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/WebXRHandTracking.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRControllerTeleportation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/WebXRControllerTeleportation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
class WebXRDefaultExperienceOptions {
}
class WebXRDefaultExperience {
    constructor(){}
    /**
     * Creates the default xr experience
     * @param scene scene
     * @param options options for basic configuration
     * @returns resulting WebXRDefaultExperience
     */ static async CreateAsync(scene, options = {}) {
        const result = new WebXRDefaultExperience();
        scene.onDisposeObservable.addOnce(()=>{
            result.dispose();
        });
        // init the UI right after construction
        if (!options.disableDefaultUI) {
            const uiOptions = {
                renderTarget: result.renderTarget,
                ...options.uiOptions || {}
            };
            if (options.optionalFeatures) {
                if (typeof options.optionalFeatures === "boolean") {
                    uiOptions.optionalFeatures = [
                        "hit-test",
                        "anchors",
                        "plane-detection",
                        "hand-tracking"
                    ];
                } else {
                    uiOptions.optionalFeatures = options.optionalFeatures;
                }
            }
            result.enterExitUI = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXREnterExitUI$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXREnterExitUI"](scene, uiOptions);
        }
        try {
            // Create base experience
            const xrHelper = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRExperienceHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRExperienceHelper"].CreateAsync(scene);
            // eslint-disable-next-line require-atomic-updates
            result.baseExperience = xrHelper;
            if (options.ignoreNativeCameraTransformation) {
                // eslint-disable-next-line require-atomic-updates
                result.baseExperience.camera.compensateOnFirstFrame = false;
            }
            // Add controller support
            // eslint-disable-next-line require-atomic-updates
            result.input = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRInput$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRInput"](xrHelper.sessionManager, xrHelper.camera, {
                controllerOptions: {
                    renderingGroupId: options.renderingGroupId
                },
                ...options.inputOptions || {}
            });
            if (!options.disablePointerSelection) {
                // Add default pointer selection
                const pointerSelectionOptions = {
                    ...options.pointerSelectionOptions,
                    xrInput: result.input,
                    renderingGroupId: options.renderingGroupId
                };
                result.pointerSelection = result.baseExperience.featuresManager.enableFeature(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRControllerPointerSelection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRControllerPointerSelection"].Name, options.useStablePlugins ? "stable" : "latest", pointerSelectionOptions);
                if (!options.disableTeleportation) {
                    // Add default teleportation, including rotation
                    result.teleportation = result.baseExperience.featuresManager.enableFeature(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRControllerTeleportation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRMotionControllerTeleportation"].Name, options.useStablePlugins ? "stable" : "latest", {
                        floorMeshes: options.floorMeshes,
                        xrInput: result.input,
                        renderingGroupId: options.renderingGroupId,
                        ...options.teleportationOptions
                    });
                    result.teleportation.setSelectionFeature(result.pointerSelection);
                }
            }
            if (!options.disableNearInteraction) {
                // Add default pointer selection
                result.nearInteraction = result.baseExperience.featuresManager.enableFeature(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRNearInteraction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRNearInteraction"].Name, options.useStablePlugins ? "stable" : "latest", {
                    xrInput: result.input,
                    farInteractionFeature: result.pointerSelection,
                    renderingGroupId: options.renderingGroupId,
                    useUtilityLayer: true,
                    enableNearInteractionOnAllControllers: true,
                    ...options.nearInteractionOptions
                });
            }
            if (!options.disableHandTracking) {
                // Add default hand tracking
                result.baseExperience.featuresManager.enableFeature(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRHandTracking$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRHandTracking"].Name, options.useStablePlugins ? "stable" : "latest", {
                    xrInput: result.input,
                    ...options.handSupportOptions
                }, undefined, false);
            }
            // Create the WebXR output target
            result.renderTarget = result.baseExperience.sessionManager.getWebXRRenderTarget(options.outputCanvasOptions);
            if (!options.disableDefaultUI) {
                // Create ui for entering/exiting xr
                await result.enterExitUI.setHelperAsync(result.baseExperience, result.renderTarget);
            }
            return result;
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Error("Error initializing XR");
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Error(error);
            return result;
        }
    }
    /**
     * Disposes of the experience helper
     */ dispose() {
        if (this.baseExperience) {
            this.baseExperience.dispose();
        }
        if (this.input) {
            this.input.dispose();
        }
        if (this.enterExitUI) {
            this.enterExitUI.dispose();
        }
        if (this.renderTarget) {
            this.renderTarget.dispose();
        }
    }
} //# sourceMappingURL=webXRDefaultExperience.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/webXRTypes.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * States of the webXR experience
 */ __turbopack_context__.s([
    "WebXRState",
    ()=>WebXRState,
    "WebXRTrackingState",
    ()=>WebXRTrackingState
]);
var WebXRState;
(function(WebXRState) {
    /**
     * Transitioning to being in XR mode
     */ WebXRState[WebXRState["ENTERING_XR"] = 0] = "ENTERING_XR";
    /**
     * Transitioning to non XR mode
     */ WebXRState[WebXRState["EXITING_XR"] = 1] = "EXITING_XR";
    /**
     * In XR mode and presenting
     */ WebXRState[WebXRState["IN_XR"] = 2] = "IN_XR";
    /**
     * Not entered XR mode
     */ WebXRState[WebXRState["NOT_IN_XR"] = 3] = "NOT_IN_XR";
})(WebXRState || (WebXRState = {}));
var WebXRTrackingState;
(function(WebXRTrackingState) {
    /**
     * No transformation received, device is not being tracked
     */ WebXRTrackingState[WebXRTrackingState["NOT_TRACKING"] = 0] = "NOT_TRACKING";
    /**
     * Tracking lost - using emulated position
     */ WebXRTrackingState[WebXRTrackingState["TRACKING_LOST"] = 1] = "TRACKING_LOST";
    /**
     * Transformation tracking works normally
     */ WebXRTrackingState[WebXRTrackingState["TRACKING"] = 2] = "TRACKING";
})(WebXRTrackingState || (WebXRTrackingState = {})); //# sourceMappingURL=webXRTypes.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/WebXRHitTestLegacy.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WebXRHitTestLegacy",
    ()=>WebXRHitTestLegacy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRFeaturesManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/webXRFeaturesManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRAbstractFeature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/WebXRAbstractFeature.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/tools.js [app-ssr] (ecmascript)");
;
;
;
;
;
class WebXRHitTestLegacy extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRAbstractFeature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRAbstractFeature"] {
    /**
     * Creates a new instance of the (legacy version) hit test feature
     * @param _xrSessionManager an instance of WebXRSessionManager
     * @param options options to use when constructing this feature
     */ constructor(_xrSessionManager, /**
     * [Empty Object] options to use when constructing this feature
     */ options = {}){
        super(_xrSessionManager);
        this.options = options;
        // in XR space z-forward is negative
        this._direction = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0, 0, -1);
        this._mat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"]();
        this._onSelectEnabled = false;
        this._origin = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 0);
        /**
         * Populated with the last native XR Hit Results
         */ this.lastNativeXRHitResults = [];
        /**
         * Triggered when new babylon (transformed) hit test results are available
         */ this.onHitTestResultObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        this._onHitTestResults = (xrResults)=>{
            const mats = xrResults.map((result)=>{
                const mat = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].FromArray(result.hitMatrix);
                if (!this._xrSessionManager.scene.useRightHandedSystem) {
                    mat.toggleModelMatrixHandInPlace();
                }
                // if (this.options.coordinatesSpace === Space.WORLD) {
                if (this.options.worldParentNode) {
                    mat.multiplyToRef(this.options.worldParentNode.getWorldMatrix(), mat);
                }
                return {
                    xrHitResult: result,
                    transformationMatrix: mat
                };
            });
            this.lastNativeXRHitResults = xrResults;
            this.onHitTestResultObservable.notifyObservers(mats);
        };
        // can be done using pointerdown event, and xrSessionManager.currentFrame
        this._onSelect = (event)=>{
            if (!this._onSelectEnabled) {
                return;
            }
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            WebXRHitTestLegacy.XRHitTestWithSelectEvent(event, this._xrSessionManager.referenceSpace);
        };
        this.xrNativeFeatureName = "hit-test";
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tools"].Warn("A newer version of this plugin is available");
    }
    /**
     * execute a hit test with an XR Ray
     *
     * @param xrSession a native xrSession that will execute this hit test
     * @param xrRay the ray (position and direction) to use for ray-casting
     * @param referenceSpace native XR reference space to use for the hit-test
     * @param filter filter function that will filter the results
     * @returns a promise that resolves with an array of native XR hit result in xr coordinates system
     */ static async XRHitTestWithRay(xrSession, xrRay, referenceSpace, filter) {
        const results = await xrSession.requestHitTest(xrRay, referenceSpace);
        const filterFunction = filter || ((result)=>!!result.hitMatrix);
        return results.filter(filterFunction);
    }
    /**
     * Execute a hit test on the current running session using a select event returned from a transient input (such as touch)
     * @param event the (select) event to use to select with
     * @param referenceSpace the reference space to use for this hit test
     * @returns a promise that resolves with an array of native XR hit result in xr coordinates system
     */ static async XRHitTestWithSelectEvent(event, referenceSpace) {
        const targetRayPose = event.frame.getPose(event.inputSource.targetRaySpace, referenceSpace);
        if (!targetRayPose) {
            return [];
        }
        const targetRay = new XRRay(targetRayPose.transform);
        return await this.XRHitTestWithRay(event.frame.session, targetRay, referenceSpace);
    }
    /**
     * attach this feature
     * Will usually be called by the features manager
     *
     * @returns true if successful.
     */ attach() {
        if (!super.attach()) {
            return false;
        }
        if (this.options.testOnPointerDownOnly) {
            this._xrSessionManager.session.addEventListener("select", this._onSelect, false);
        }
        return true;
    }
    /**
     * detach this feature.
     * Will usually be called by the features manager
     *
     * @returns true if successful.
     */ detach() {
        if (!super.detach()) {
            return false;
        }
        // disable select
        this._onSelectEnabled = false;
        this._xrSessionManager.session.removeEventListener("select", this._onSelect);
        return true;
    }
    /**
     * Dispose this feature and all of the resources attached
     */ dispose() {
        super.dispose();
        this.onHitTestResultObservable.clear();
    }
    _onXRFrame(frame) {
        // make sure we do nothing if (async) not attached
        if (!this.attached || this.options.testOnPointerDownOnly) {
            return;
        }
        const pose = frame.getViewerPose(this._xrSessionManager.referenceSpace);
        if (!pose) {
            return;
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].FromArrayToRef(pose.transform.matrix, 0, this._mat);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinatesFromFloatsToRef(0, 0, 0, this._mat, this._origin);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinatesFromFloatsToRef(0, 0, -1, this._mat, this._direction);
        this._direction.subtractInPlace(this._origin);
        this._direction.normalize();
        const ray = new XRRay({
            x: this._origin.x,
            y: this._origin.y,
            z: this._origin.z,
            w: 0
        }, {
            x: this._direction.x,
            y: this._direction.y,
            z: this._direction.z,
            w: 0
        });
        // eslint-disable-next-line @typescript-eslint/no-floating-promises, github/no-then
        WebXRHitTestLegacy.XRHitTestWithRay(this._xrSessionManager.session, ray, this._xrSessionManager.referenceSpace).then(this._onHitTestResults);
    }
}
/**
 * The module's name
 */ WebXRHitTestLegacy.Name = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRFeaturesManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRFeatureName"].HIT_TEST;
/**
 * The (Babylon) version of this module.
 * This is an integer representing the implementation version.
 * This number does not correspond to the WebXR specs version
 */ WebXRHitTestLegacy.Version = 1;
//register the plugin versions
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRFeaturesManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRFeaturesManager"].AddWebXRFeature(WebXRHitTestLegacy.Name, (xrSessionManager, options)=>{
    return ()=>new WebXRHitTestLegacy(xrSessionManager, options);
}, WebXRHitTestLegacy.Version, false); //# sourceMappingURL=WebXRHitTestLegacy.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/WebXRAnchorSystem.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WebXRAnchorSystem",
    ()=>WebXRAnchorSystem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRFeaturesManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/webXRFeaturesManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRAbstractFeature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/WebXRAbstractFeature.js [app-ssr] (ecmascript)");
;
;
;
;
let AnchorIdProvider = 0;
class WebXRAnchorSystem extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRAbstractFeature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRAbstractFeature"] {
    /**
     * Set the reference space to use for anchor creation, when not using a hit test.
     * Will default to the session's reference space if not defined
     */ set referenceSpaceForFrameAnchors(referenceSpace) {
        this._referenceSpaceForFrameAnchors = referenceSpace;
    }
    /**
     * constructs a new anchor system
     * @param _xrSessionManager an instance of WebXRSessionManager
     * @param _options configuration object for this feature
     */ constructor(_xrSessionManager, _options = {}){
        super(_xrSessionManager);
        this._options = _options;
        this._lastFrameDetected = new Set();
        this._trackedAnchors = [];
        this._futureAnchors = [];
        /**
         * Observers registered here will be executed when a new anchor was added to the session
         */ this.onAnchorAddedObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * Observers registered here will be executed when an anchor was removed from the session
         */ this.onAnchorRemovedObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * Observers registered here will be executed when an existing anchor updates
         * This can execute N times every frame
         */ this.onAnchorUpdatedObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        this._tmpVector = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]();
        this._tmpQuaternion = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"]();
        this.xrNativeFeatureName = "anchors";
        if (this._options.clearAnchorsOnSessionInit) {
            this._xrSessionManager.onXRSessionInit.add(()=>{
                this._trackedAnchors.length = 0;
                this._futureAnchors.length = 0;
                this._lastFrameDetected.clear();
            });
        }
    }
    _populateTmpTransformation(position, rotationQuaternion) {
        this._tmpVector.copyFrom(position);
        this._tmpQuaternion.copyFrom(rotationQuaternion);
        if (!this._xrSessionManager.scene.useRightHandedSystem) {
            this._tmpVector.z *= -1;
            this._tmpQuaternion.z *= -1;
            this._tmpQuaternion.w *= -1;
        }
        return {
            position: this._tmpVector,
            rotationQuaternion: this._tmpQuaternion
        };
    }
    /**
     * Create a new anchor point using a hit test result at a specific point in the scene
     * An anchor is tracked only after it is added to the trackerAnchors in xrFrame. The promise returned here does not yet guaranty that.
     * Use onAnchorAddedObservable to get newly added anchors if you require tracking guaranty.
     *
     * @param hitTestResult The hit test result to use for this anchor creation
     * @param position an optional position offset for this anchor
     * @param rotationQuaternion an optional rotation offset for this anchor
     * @returns A promise that fulfills when babylon has created the corresponding WebXRAnchor object and tracking has begun
     */ async addAnchorPointUsingHitTestResultAsync(hitTestResult, position = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](), rotationQuaternion = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"]()) {
        // convert to XR space (right handed) if needed
        this._populateTmpTransformation(position, rotationQuaternion);
        // the matrix that we'll use
        const m = new XRRigidTransform({
            x: this._tmpVector.x,
            y: this._tmpVector.y,
            z: this._tmpVector.z
        }, {
            x: this._tmpQuaternion.x,
            y: this._tmpQuaternion.y,
            z: this._tmpQuaternion.z,
            w: this._tmpQuaternion.w
        });
        if (!hitTestResult.xrHitResult.createAnchor) {
            this.detach();
            throw new Error("Anchors not enabled in this environment/browser");
        } else {
            try {
                const nativeAnchor = await hitTestResult.xrHitResult.createAnchor(m);
                return await new Promise((resolve, reject)=>{
                    this._futureAnchors.push({
                        nativeAnchor,
                        resolved: false,
                        submitted: true,
                        xrTransformation: m,
                        resolve,
                        reject
                    });
                });
            } catch (error) {
                throw new Error(error);
            }
        }
    }
    /**
     * Add a new anchor at a specific position and rotation
     * This function will add a new anchor per default in the next available frame. Unless forced, the createAnchor function
     * will be called in the next xrFrame loop to make sure that the anchor can be created correctly.
     * An anchor is tracked only after it is added to the trackerAnchors in xrFrame. The promise returned here does not yet guaranty that.
     * Use onAnchorAddedObservable to get newly added anchors if you require tracking guaranty.
     *
     * @param position the position in which to add an anchor
     * @param rotationQuaternion an optional rotation for the anchor transformation
     * @param forceCreateInCurrentFrame force the creation of this anchor in the current frame. Must be called inside xrFrame loop!
     * @returns A promise that fulfills when babylon has created the corresponding WebXRAnchor object and tracking has begun
     */ async addAnchorAtPositionAndRotationAsync(position, rotationQuaternion = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"](), forceCreateInCurrentFrame = false) {
        // convert to XR space (right handed) if needed
        this._populateTmpTransformation(position, rotationQuaternion);
        // the matrix that we'll use
        const xrTransformation = new XRRigidTransform({
            x: this._tmpVector.x,
            y: this._tmpVector.y,
            z: this._tmpVector.z
        }, {
            x: this._tmpQuaternion.x,
            y: this._tmpQuaternion.y,
            z: this._tmpQuaternion.z,
            w: this._tmpQuaternion.w
        });
        const xrAnchor = forceCreateInCurrentFrame && this.attached && this._xrSessionManager.currentFrame ? await this._createAnchorAtTransformationAsync(xrTransformation, this._xrSessionManager.currentFrame) : undefined;
        // add the transformation to the future anchors list
        return await new Promise((resolve, reject)=>{
            this._futureAnchors.push({
                nativeAnchor: xrAnchor,
                resolved: false,
                submitted: false,
                xrTransformation,
                resolve,
                reject
            });
        });
    }
    /**
     * Get the list of anchors currently being tracked by the system
     */ get anchors() {
        return this._trackedAnchors;
    }
    /**
     * detach this feature.
     * Will usually be called by the features manager
     *
     * @returns true if successful.
     */ detach() {
        if (!super.detach()) {
            return false;
        }
        if (!this._options.doNotRemoveAnchorsOnSessionEnded) {
            while(this._trackedAnchors.length){
                const toRemove = this._trackedAnchors.pop();
                if (toRemove && !toRemove._removed) {
                    // as the xr frame loop is removed, we need to notify manually
                    this.onAnchorRemovedObservable.notifyObservers(toRemove);
                    toRemove._removed = true;
                // no need to call the remove fn as the anchor is already removed from the session
                }
            }
        }
        return true;
    }
    /**
     * Dispose this feature and all of the resources attached
     */ dispose() {
        this._futureAnchors.length = 0;
        super.dispose();
        this.onAnchorAddedObservable.clear();
        this.onAnchorRemovedObservable.clear();
        this.onAnchorUpdatedObservable.clear();
    }
    _onXRFrame(frame) {
        if (!this.attached || !frame) {
            return;
        }
        const trackedAnchors = frame.trackedAnchors;
        if (trackedAnchors) {
            for (const anchor of this._trackedAnchors){
                if (!anchor._removed) {
                    continue;
                }
                const index = this._trackedAnchors.indexOf(anchor);
                this._trackedAnchors.splice(index, 1);
                anchor.xrAnchor.delete();
                this.onAnchorRemovedObservable.notifyObservers(anchor);
            }
            // now check for new ones
            trackedAnchors.forEach((xrAnchor)=>{
                if (!this._lastFrameDetected.has(xrAnchor)) {
                    const newAnchor = {
                        id: AnchorIdProvider++,
                        xrAnchor: xrAnchor,
                        remove: ()=>{
                            newAnchor._removed = true;
                        }
                    };
                    const anchor = this._updateAnchorWithXRFrame(xrAnchor, newAnchor, frame);
                    this._trackedAnchors.push(anchor);
                    this.onAnchorAddedObservable.notifyObservers(anchor);
                    // search for the future anchor promise that matches this
                    const results = this._futureAnchors.filter((futureAnchor)=>futureAnchor.nativeAnchor === xrAnchor);
                    const result = results[0];
                    if (result) {
                        result.resolve(anchor);
                        result.resolved = true;
                    }
                } else {
                    const index = this._findIndexInAnchorArray(xrAnchor);
                    if (index < 0) {
                        return;
                    }
                    const anchor = this._trackedAnchors[index];
                    this._updateAnchorWithXRFrame(xrAnchor, anchor, frame);
                    if (anchor.attachedNode) {
                        anchor.attachedNode.rotationQuaternion = anchor.attachedNode.rotationQuaternion || new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"]();
                        anchor.transformationMatrix.decompose(anchor.attachedNode.scaling, anchor.attachedNode.rotationQuaternion, anchor.attachedNode.position);
                    }
                    this.onAnchorUpdatedObservable.notifyObservers(anchor);
                }
            });
            this._lastFrameDetected = trackedAnchors;
        }
        // process future anchors
        for (const futureAnchor of this._futureAnchors){
            if (!futureAnchor.resolved && !futureAnchor.submitted) {
                // eslint-disable-next-line github/no-then
                this._createAnchorAtTransformationAsync(futureAnchor.xrTransformation, frame).then((nativeAnchor)=>{
                    futureAnchor.nativeAnchor = nativeAnchor;
                }, (error)=>{
                    futureAnchor.resolved = true;
                    futureAnchor.reject(error);
                });
                futureAnchor.submitted = true;
            }
        }
    }
    /**
     * avoiding using Array.find for global support.
     * @param xrAnchor the plane to find in the array
     * @returns the index of the anchor in the array or -1 if not found
     */ _findIndexInAnchorArray(xrAnchor) {
        for(let i = 0; i < this._trackedAnchors.length; ++i){
            if (this._trackedAnchors[i].xrAnchor === xrAnchor) {
                return i;
            }
        }
        return -1;
    }
    _updateAnchorWithXRFrame(xrAnchor, anchor, xrFrame) {
        // matrix
        const pose = xrFrame.getPose(xrAnchor.anchorSpace, this._xrSessionManager.referenceSpace);
        if (pose) {
            const mat = anchor.transformationMatrix || new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"]();
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].FromArrayToRef(pose.transform.matrix, 0, mat);
            if (!this._xrSessionManager.scene.useRightHandedSystem) {
                mat.toggleModelMatrixHandInPlace();
            }
            anchor.transformationMatrix = mat;
            if (!this._options.worldParentNode) {
            // Logger.Warn("Please provide a world parent node to apply world transformation");
            } else {
                mat.multiplyToRef(this._options.worldParentNode.getWorldMatrix(), mat);
            }
        }
        return anchor;
    }
    async _createAnchorAtTransformationAsync(xrTransformation, xrFrame) {
        if (xrFrame.createAnchor) {
            try {
                return await xrFrame.createAnchor(xrTransformation, this._referenceSpaceForFrameAnchors ?? this._xrSessionManager.referenceSpace);
            } catch (error) {
                throw new Error(error);
            }
        } else {
            this.detach();
            throw new Error("Anchors are not enabled in your browser");
        }
    }
}
/**
 * The module's name
 */ WebXRAnchorSystem.Name = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRFeaturesManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRFeatureName"].ANCHOR_SYSTEM;
/**
 * The (Babylon) version of this module.
 * This is an integer representing the implementation version.
 * This number does not correspond to the WebXR specs version
 */ WebXRAnchorSystem.Version = 1;
// register the plugin
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRFeaturesManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRFeaturesManager"].AddWebXRFeature(WebXRAnchorSystem.Name, (xrSessionManager, options)=>{
    return ()=>new WebXRAnchorSystem(xrSessionManager, options);
}, WebXRAnchorSystem.Version); //# sourceMappingURL=WebXRAnchorSystem.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/WebXRPlaneDetector.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WebXRPlaneDetector",
    ()=>WebXRPlaneDetector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRFeaturesManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/webXRFeaturesManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRAbstractFeature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/WebXRAbstractFeature.js [app-ssr] (ecmascript)");
;
;
;
;
let PlaneIdProvider = 0;
class WebXRPlaneDetector extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRAbstractFeature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRAbstractFeature"] {
    /**
     * construct a new Plane Detector
     * @param _xrSessionManager an instance of xr Session manager
     * @param _options configuration to use when constructing this feature
     */ constructor(_xrSessionManager, _options = {}){
        super(_xrSessionManager);
        this._options = _options;
        this._detectedPlanes = [];
        this._enabled = false;
        this._lastFrameDetected = new Set();
        /**
         * Observers registered here will be executed when a new plane was added to the session
         */ this.onPlaneAddedObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * Observers registered here will be executed when a plane is no longer detected in the session
         */ this.onPlaneRemovedObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * Observers registered here will be executed when an existing plane updates (for example - expanded)
         * This can execute N times every frame
         */ this.onPlaneUpdatedObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        this.xrNativeFeatureName = "plane-detection";
        if (this._xrSessionManager.session) {
            this._init();
        } else {
            this._xrSessionManager.onXRSessionInit.addOnce(()=>{
                this._init();
            });
        }
    }
    /**
     * detach this feature.
     * Will usually be called by the features manager
     *
     * @returns true if successful.
     */ detach() {
        if (!super.detach()) {
            return false;
        }
        if (!this._options.doNotRemovePlanesOnSessionEnded) {
            while(this._detectedPlanes.length){
                const toRemove = this._detectedPlanes.pop();
                if (toRemove) {
                    this.onPlaneRemovedObservable.notifyObservers(toRemove);
                }
            }
        }
        return true;
    }
    /**
     * Dispose this feature and all of the resources attached
     */ dispose() {
        super.dispose();
        this.onPlaneAddedObservable.clear();
        this.onPlaneRemovedObservable.clear();
        this.onPlaneUpdatedObservable.clear();
    }
    /**
     * Check if the needed objects are defined.
     * This does not mean that the feature is enabled, but that the objects needed are well defined.
     * @returns true if the initial compatibility test passed
     */ isCompatible() {
        return typeof XRPlane !== "undefined";
    }
    /**
     * Enable room capture mode.
     * When enabled and supported by the system,
     * the detectedPlanes array will be populated with the detected room boundaries
     * @see https://immersive-web.github.io/real-world-geometry/plane-detection.html#dom-xrsession-initiateroomcapture
     * @returns true if plane detection is enabled and supported. Will reject if not supported.
     */ // eslint-disable-next-line @typescript-eslint/naming-convention
    async initiateRoomCapture() {
        if (this._xrSessionManager.session.initiateRoomCapture) {
            return await this._xrSessionManager.session.initiateRoomCapture();
        }
        throw "initiateRoomCapture is not supported on this session";
    }
    _onXRFrame(frame) {
        if (!this.attached || !this._enabled || !frame) {
            return;
        }
        const detectedPlanes = frame.detectedPlanes || frame.worldInformation?.detectedPlanes;
        if (detectedPlanes) {
            // remove all planes that are not currently detected in the frame
            for(let planeIdx = 0; planeIdx < this._detectedPlanes.length; planeIdx++){
                const plane = this._detectedPlanes[planeIdx];
                if (!detectedPlanes.has(plane.xrPlane)) {
                    this._detectedPlanes.splice(planeIdx--, 1);
                    this.onPlaneRemovedObservable.notifyObservers(plane);
                }
            }
            // now check for new ones
            detectedPlanes.forEach((xrPlane)=>{
                if (!this._lastFrameDetected.has(xrPlane)) {
                    const newPlane = {
                        id: PlaneIdProvider++,
                        xrPlane: xrPlane,
                        polygonDefinition: []
                    };
                    const plane = this._updatePlaneWithXRPlane(xrPlane, newPlane, frame);
                    this._detectedPlanes.push(plane);
                    this.onPlaneAddedObservable.notifyObservers(plane);
                } else {
                    // updated?
                    if (xrPlane.lastChangedTime === this._xrSessionManager.currentTimestamp) {
                        const index = this._findIndexInPlaneArray(xrPlane);
                        const plane = this._detectedPlanes[index];
                        this._updatePlaneWithXRPlane(xrPlane, plane, frame);
                        this.onPlaneUpdatedObservable.notifyObservers(plane);
                    }
                }
            });
            this._lastFrameDetected = detectedPlanes;
        }
    }
    _init() {
        const internalInit = ()=>{
            this._enabled = true;
            if (this._detectedPlanes.length) {
                this._detectedPlanes.length = 0;
            }
        };
        // Only supported by BabylonNative
        if (!!this._xrSessionManager.isNative && !!this._options.preferredDetectorOptions && !!this._xrSessionManager.session.trySetPreferredPlaneDetectorOptions) {
            this._xrSessionManager.session.trySetPreferredPlaneDetectorOptions(this._options.preferredDetectorOptions);
        }
        if (!this._xrSessionManager.session.updateWorldTrackingState) {
            internalInit();
            return;
        }
        this._xrSessionManager.session.updateWorldTrackingState({
            planeDetectionState: {
                enabled: true
            }
        });
        internalInit();
    }
    _updatePlaneWithXRPlane(xrPlane, plane, xrFrame) {
        plane.polygonDefinition = xrPlane.polygon.map((xrPoint)=>{
            const rightHandedSystem = this._xrSessionManager.scene.useRightHandedSystem ? 1 : -1;
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](xrPoint.x, xrPoint.y, xrPoint.z * rightHandedSystem);
        });
        // matrix
        const pose = xrFrame.getPose(xrPlane.planeSpace, this._xrSessionManager.referenceSpace);
        if (pose) {
            const mat = plane.transformationMatrix || new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"]();
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].FromArrayToRef(pose.transform.matrix, 0, mat);
            if (!this._xrSessionManager.scene.useRightHandedSystem) {
                mat.toggleModelMatrixHandInPlace();
            }
            plane.transformationMatrix = mat;
            if (this._options.worldParentNode) {
                mat.multiplyToRef(this._options.worldParentNode.getWorldMatrix(), mat);
            }
        }
        return plane;
    }
    /**
     * avoiding using Array.find for global support.
     * @param xrPlane the plane to find in the array
     * @returns the index of the plane in the array or -1 if not found
     */ _findIndexInPlaneArray(xrPlane) {
        for(let i = 0; i < this._detectedPlanes.length; ++i){
            if (this._detectedPlanes[i].xrPlane === xrPlane) {
                return i;
            }
        }
        return -1;
    }
}
/**
 * The module's name
 */ WebXRPlaneDetector.Name = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRFeaturesManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRFeatureName"].PLANE_DETECTION;
/**
 * The (Babylon) version of this module.
 * This is an integer representing the implementation version.
 * This number does not correspond to the WebXR specs version
 */ WebXRPlaneDetector.Version = 1;
//register the plugin
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRFeaturesManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRFeaturesManager"].AddWebXRFeature(WebXRPlaneDetector.Name, (xrSessionManager, options)=>{
    return ()=>new WebXRPlaneDetector(xrSessionManager, options);
}, WebXRPlaneDetector.Version); //# sourceMappingURL=WebXRPlaneDetector.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/WebXRBackgroundRemover.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WebXRBackgroundRemover",
    ()=>WebXRBackgroundRemover
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRFeaturesManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/webXRFeaturesManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRAbstractFeature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/WebXRAbstractFeature.js [app-ssr] (ecmascript)");
;
;
;
class WebXRBackgroundRemover extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRAbstractFeature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRAbstractFeature"] {
    /**
     * constructs a new background remover module
     * @param _xrSessionManager the session manager for this module
     * @param options read-only options to be used in this module
     */ constructor(_xrSessionManager, /**
     * [Empty Object] read-only options to be used in this module
     */ options = {}){
        super(_xrSessionManager);
        this.options = options;
        /**
         * registered observers will be triggered when the background state changes
         */ this.onBackgroundStateChangedObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
    }
    /**
     * attach this feature
     * Will usually be called by the features manager
     *
     * @returns true if successful.
     */ attach() {
        this._setBackgroundState(false);
        return super.attach();
    }
    /**
     * detach this feature.
     * Will usually be called by the features manager
     *
     * @returns true if successful.
     */ detach() {
        this._setBackgroundState(true);
        return super.detach();
    }
    /**
     * Dispose this feature and all of the resources attached
     */ dispose() {
        super.dispose();
        this.onBackgroundStateChangedObservable.clear();
    }
    _onXRFrame(_xrFrame) {
    // no-op
    }
    _setBackgroundState(newState) {
        const scene = this._xrSessionManager.scene;
        if (!this.options.ignoreEnvironmentHelper) {
            if (this.options.environmentHelperRemovalFlags) {
                if (this.options.environmentHelperRemovalFlags.skyBox) {
                    const backgroundSkybox = scene.getMeshByName("BackgroundSkybox");
                    if (backgroundSkybox) {
                        backgroundSkybox.setEnabled(newState);
                    }
                }
                if (this.options.environmentHelperRemovalFlags.ground) {
                    const backgroundPlane = scene.getMeshByName("BackgroundPlane");
                    if (backgroundPlane) {
                        backgroundPlane.setEnabled(newState);
                    }
                }
            } else {
                const backgroundHelper = scene.getMeshByName("BackgroundHelper");
                if (backgroundHelper) {
                    backgroundHelper.setEnabled(newState);
                }
            }
        }
        if (this.options.backgroundMeshes) {
            for (const mesh of this.options.backgroundMeshes){
                mesh.setEnabled(newState);
            }
        }
        this.onBackgroundStateChangedObservable.notifyObservers(newState);
    }
}
/**
 * The module's name
 */ WebXRBackgroundRemover.Name = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRFeaturesManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRFeatureName"].BACKGROUND_REMOVER;
/**
 * The (Babylon) version of this module.
 * This is an integer representing the implementation version.
 * This number does not correspond to the WebXR specs version
 */ WebXRBackgroundRemover.Version = 1;
//register the plugin
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRFeaturesManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRFeaturesManager"].AddWebXRFeature(WebXRBackgroundRemover.Name, (xrSessionManager, options)=>{
    return ()=>new WebXRBackgroundRemover(xrSessionManager, options);
}, WebXRBackgroundRemover.Version, true); //# sourceMappingURL=WebXRBackgroundRemover.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/WebXRControllerPhysics.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IWebXRControllerPhysicsOptions",
    ()=>IWebXRControllerPhysicsOptions,
    "WebXRControllerPhysics",
    ()=>WebXRControllerPhysics
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRAbstractFeature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/WebXRAbstractFeature.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsImpostor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Physics/v1/physicsImpostor.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$sphereBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/sphereBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRFeaturesManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/webXRFeaturesManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
class IWebXRControllerPhysicsOptions {
}
class WebXRControllerPhysics extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRAbstractFeature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRAbstractFeature"] {
    _createPhysicsImpostor(xrController) {
        const impostorType = this._options.physicsProperties.impostorType || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsImpostor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsImpostor"].SphereImpostor;
        const impostorSize = this._options.physicsProperties.impostorSize || 0.1;
        const impostorMesh = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$sphereBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateSphere"])("impostor-mesh-" + xrController.uniqueId, {
            diameterX: typeof impostorSize === "number" ? impostorSize : impostorSize.width,
            diameterY: typeof impostorSize === "number" ? impostorSize : impostorSize.height,
            diameterZ: typeof impostorSize === "number" ? impostorSize : impostorSize.depth
        });
        impostorMesh.isVisible = this._debugMode;
        impostorMesh.isPickable = false;
        impostorMesh.rotationQuaternion = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"]();
        const controllerMesh = xrController.grip || xrController.pointer;
        impostorMesh.position.copyFrom(controllerMesh.position);
        impostorMesh.rotationQuaternion.copyFrom(controllerMesh.rotationQuaternion);
        const impostor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsImpostor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsImpostor"](impostorMesh, impostorType, {
            mass: 0,
            ...this._options.physicsProperties
        });
        this._controllers[xrController.uniqueId] = {
            xrController,
            impostor,
            impostorMesh
        };
    }
    /**
     * Construct a new Controller Physics Feature
     * @param _xrSessionManager the corresponding xr session manager
     * @param _options options to create this feature with
     */ constructor(_xrSessionManager, _options){
        super(_xrSessionManager);
        this._options = _options;
        this._attachController = (xrController)=>{
            if (this._controllers[xrController.uniqueId]) {
                // already attached
                return;
            }
            if (!this._xrSessionManager.scene.isPhysicsEnabled()) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn("physics engine not enabled, skipped. Please add this controller manually.");
            }
            // if no motion controller available, create impostors!
            if (this._options.physicsProperties.useControllerMesh && xrController.inputSource.gamepad) {
                xrController.onMotionControllerInitObservable.addOnce((motionController)=>{
                    if (!motionController._doNotLoadControllerMesh) {
                        motionController.onModelLoadedObservable.addOnce(()=>{
                            const impostor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsImpostor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsImpostor"](motionController.rootMesh, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsImpostor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsImpostor"].MeshImpostor, {
                                mass: 0,
                                ...this._options.physicsProperties
                            });
                            const controllerMesh = xrController.grip || xrController.pointer;
                            this._controllers[xrController.uniqueId] = {
                                xrController,
                                impostor,
                                oldPos: controllerMesh.position.clone(),
                                oldRotation: controllerMesh.rotationQuaternion.clone()
                            };
                        });
                    } else {
                        // This controller isn't using a model, create impostors instead
                        this._createPhysicsImpostor(xrController);
                    }
                });
            } else {
                this._createPhysicsImpostor(xrController);
            }
        };
        this._controllers = {};
        this._debugMode = false;
        this._delta = 0;
        this._lastTimestamp = 0;
        this._tmpQuaternion = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"]();
        this._tmpVector = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]();
        if (!this._options.physicsProperties) {
            this._options.physicsProperties = {};
        }
    }
    /**
     * @internal
     * enable debugging - will show console outputs and the impostor mesh
     */ _enablePhysicsDebug() {
        this._debugMode = true;
        const keys = Object.keys(this._controllers);
        for (const controllerId of keys){
            const controllerData = this._controllers[controllerId];
            if (controllerData.impostorMesh) {
                controllerData.impostorMesh.isVisible = true;
            }
        }
    }
    /**
     * Manually add a controller (if no xrInput was provided or physics engine was not enabled)
     * @param xrController the controller to add
     */ addController(xrController) {
        this._attachController(xrController);
    }
    /**
     * attach this feature
     * Will usually be called by the features manager
     *
     * @returns true if successful.
     */ attach() {
        if (!super.attach()) {
            return false;
        }
        if (!this._options.xrInput) {
            return true;
        }
        for (const controller of this._options.xrInput.controllers){
            this._attachController(controller);
        }
        this._addNewAttachObserver(this._options.xrInput.onControllerAddedObservable, this._attachController);
        this._addNewAttachObserver(this._options.xrInput.onControllerRemovedObservable, (controller)=>{
            // REMOVE the controller
            this._detachController(controller.uniqueId);
        });
        if (this._options.enableHeadsetImpostor) {
            const params = this._options.headsetImpostorParams || {
                impostorType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsImpostor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsImpostor"].SphereImpostor,
                restitution: 0.8,
                impostorSize: 0.3
            };
            const impostorSize = params.impostorSize || 0.3;
            this._headsetMesh = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$sphereBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateSphere"])("headset-mesh", {
                diameterX: typeof impostorSize === "number" ? impostorSize : impostorSize.width,
                diameterY: typeof impostorSize === "number" ? impostorSize : impostorSize.height,
                diameterZ: typeof impostorSize === "number" ? impostorSize : impostorSize.depth
            });
            this._headsetMesh.rotationQuaternion = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"]();
            this._headsetMesh.isVisible = false;
            this._headsetImpostor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Physics$2f$v1$2f$physicsImpostor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhysicsImpostor"](this._headsetMesh, params.impostorType, {
                mass: 0,
                ...params
            });
        }
        return true;
    }
    /**
     * detach this feature.
     * Will usually be called by the features manager
     *
     * @returns true if successful.
     */ detach() {
        if (!super.detach()) {
            return false;
        }
        const keys = Object.keys(this._controllers);
        for (const controllerId of keys){
            this._detachController(controllerId);
        }
        if (this._headsetMesh) {
            this._headsetMesh.dispose();
        }
        return true;
    }
    /**
     * Get the headset impostor, if enabled
     * @returns the impostor
     */ getHeadsetImpostor() {
        return this._headsetImpostor;
    }
    /**
     * Get the physics impostor of a specific controller.
     * The impostor is not attached to a mesh because a mesh for each controller is not obligatory
     * @param controller the controller or the controller id of which to get the impostor
     * @returns the impostor or null
     */ getImpostorForController(controller) {
        const id = typeof controller === "string" ? controller : controller.uniqueId;
        if (this._controllers[id]) {
            return this._controllers[id].impostor;
        } else {
            return null;
        }
    }
    /**
     * Update the physics properties provided in the constructor
     * @param newProperties the new properties object
     * @param newProperties.impostorType
     * @param newProperties.impostorSize
     * @param newProperties.friction
     * @param newProperties.restitution
     */ setPhysicsProperties(newProperties) {
        this._options.physicsProperties = {
            ...this._options.physicsProperties,
            ...newProperties
        };
    }
    _onXRFrame(_xrFrame) {
        this._delta = this._xrSessionManager.currentTimestamp - this._lastTimestamp;
        this._lastTimestamp = this._xrSessionManager.currentTimestamp;
        if (this._headsetMesh && this._headsetImpostor) {
            this._headsetMesh.position.copyFrom(this._options.xrInput.xrCamera.globalPosition);
            this._headsetMesh.rotationQuaternion.copyFrom(this._options.xrInput.xrCamera.absoluteRotation);
            if (this._options.xrInput.xrCamera._lastXRViewerPose?.linearVelocity) {
                const lv = this._options.xrInput.xrCamera._lastXRViewerPose.linearVelocity;
                this._tmpVector.set(lv.x, lv.y, lv.z);
                this._headsetImpostor.setLinearVelocity(this._tmpVector);
            }
            if (this._options.xrInput.xrCamera._lastXRViewerPose?.angularVelocity) {
                const av = this._options.xrInput.xrCamera._lastXRViewerPose.angularVelocity;
                this._tmpVector.set(av.x, av.y, av.z);
                this._headsetImpostor.setAngularVelocity(this._tmpVector);
            }
        }
        const keys = Object.keys(this._controllers);
        for (const controllerId of keys){
            const controllerData = this._controllers[controllerId];
            const controllerMesh = controllerData.xrController.grip || controllerData.xrController.pointer;
            const comparedPosition = controllerData.oldPos || controllerData.impostorMesh.position;
            if (controllerData.xrController._lastXRPose?.linearVelocity) {
                const lv = controllerData.xrController._lastXRPose.linearVelocity;
                this._tmpVector.set(lv.x, lv.y, lv.z);
                controllerData.impostor.setLinearVelocity(this._tmpVector);
            } else {
                controllerMesh.position.subtractToRef(comparedPosition, this._tmpVector);
                this._tmpVector.scaleInPlace(1000 / this._delta);
                controllerData.impostor.setLinearVelocity(this._tmpVector);
            }
            comparedPosition.copyFrom(controllerMesh.position);
            if (this._debugMode) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Log([
                    this._tmpVector,
                    "linear"
                ]);
            }
            const comparedQuaternion = controllerData.oldRotation || controllerData.impostorMesh.rotationQuaternion;
            if (controllerData.xrController._lastXRPose?.angularVelocity) {
                const av = controllerData.xrController._lastXRPose.angularVelocity;
                this._tmpVector.set(av.x, av.y, av.z);
                controllerData.impostor.setAngularVelocity(this._tmpVector);
            } else {
                if (!comparedQuaternion.equalsWithEpsilon(controllerMesh.rotationQuaternion)) {
                    // roughly based on this - https://www.gamedev.net/forums/topic/347752-quaternion-and-angular-velocity/
                    comparedQuaternion.conjugateInPlace().multiplyToRef(controllerMesh.rotationQuaternion, this._tmpQuaternion);
                    const len = Math.sqrt(this._tmpQuaternion.x * this._tmpQuaternion.x + this._tmpQuaternion.y * this._tmpQuaternion.y + this._tmpQuaternion.z * this._tmpQuaternion.z);
                    this._tmpVector.set(this._tmpQuaternion.x, this._tmpQuaternion.y, this._tmpQuaternion.z);
                    // define a better epsilon
                    if (len < 0.001) {
                        this._tmpVector.scaleInPlace(2);
                    } else {
                        const angle = 2 * Math.atan2(len, this._tmpQuaternion.w);
                        this._tmpVector.scaleInPlace(angle / (len * (this._delta / 1000)));
                    }
                    controllerData.impostor.setAngularVelocity(this._tmpVector);
                }
            }
            comparedQuaternion.copyFrom(controllerMesh.rotationQuaternion);
            if (this._debugMode) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Log([
                    this._tmpVector,
                    this._tmpQuaternion,
                    "angular"
                ]);
            }
        }
    }
    _detachController(xrControllerUniqueId) {
        const controllerData = this._controllers[xrControllerUniqueId];
        if (!controllerData) {
            return;
        }
        if (controllerData.impostorMesh) {
            controllerData.impostorMesh.dispose();
        }
        // remove from the map
        delete this._controllers[xrControllerUniqueId];
    }
}
/**
 * The module's name
 */ WebXRControllerPhysics.Name = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRFeaturesManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRFeatureName"].PHYSICS_CONTROLLERS;
/**
 * The (Babylon) version of this module.
 * This is an integer representing the implementation version.
 * This number does not correspond to the webxr specs version
 */ WebXRControllerPhysics.Version = 1;
//register the plugin
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRFeaturesManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRFeaturesManager"].AddWebXRFeature(WebXRControllerPhysics.Name, (xrSessionManager, options)=>{
    return ()=>new WebXRControllerPhysics(xrSessionManager, options);
}, WebXRControllerPhysics.Version, true); //# sourceMappingURL=WebXRControllerPhysics.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/WebXRHitTest.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WebXRHitTest",
    ()=>WebXRHitTest
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRFeaturesManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/webXRFeaturesManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRAbstractFeature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/WebXRAbstractFeature.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/tools.js [app-ssr] (ecmascript)");
;
;
;
;
;
class WebXRHitTest extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRAbstractFeature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRAbstractFeature"] {
    /**
     * Creates a new instance of the hit test feature
     * @param _xrSessionManager an instance of WebXRSessionManager
     * @param options options to use when constructing this feature
     */ constructor(_xrSessionManager, /**
     * [Empty Object] options to use when constructing this feature
     */ options = {}){
        super(_xrSessionManager);
        this.options = options;
        this._tmpMat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"]();
        this._tmpPos = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]();
        this._tmpQuat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"]();
        this._initHitTestSource = (referenceSpace)=>{
            if (!referenceSpace) {
                return;
            }
            const offsetRay = new XRRay(this.options.offsetRay || {});
            const hitTestOptions = {
                space: this.options.useReferenceSpace ? referenceSpace : this._xrSessionManager.viewerReferenceSpace,
                offsetRay: offsetRay
            };
            if (this.options.entityTypes) {
                hitTestOptions.entityTypes = this.options.entityTypes;
            }
            if (!hitTestOptions.space) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tools"].Warn("waiting for viewer reference space to initialize");
                return;
            }
            // eslint-disable-next-line @typescript-eslint/no-floating-promises, github/no-then
            this._xrSessionManager.session.requestHitTestSource(hitTestOptions).then((hitTestSource)=>{
                if (this._xrHitTestSource) {
                    this._xrHitTestSource.cancel();
                }
                this._xrHitTestSource = hitTestSource;
            });
        };
        /**
         * When set to true, each hit test will have its own position/rotation objects
         * When set to false, position and rotation objects will be reused for each hit test. It is expected that
         * the developers will clone them or copy them as they see fit.
         */ this.autoCloneTransformation = false;
        /**
         * Triggered when new babylon (transformed) hit test results are available
         * Note - this will be called when results come back from the device. It can be an empty array!!
         */ this.onHitTestResultObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * Use this to temporarily pause hit test checks.
         */ this.paused = false;
        this.xrNativeFeatureName = "hit-test";
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tools"].Warn("Hit test is an experimental and unstable feature.");
    }
    /**
     * attach this feature
     * Will usually be called by the features manager
     *
     * @returns true if successful.
     */ attach() {
        if (!super.attach()) {
            return false;
        }
        // Feature enabled, but not available
        if (!this._xrSessionManager.session.requestHitTestSource) {
            return false;
        }
        if (!this.options.disablePermanentHitTest) {
            if (this._xrSessionManager.referenceSpace) {
                this._initHitTestSource(this._xrSessionManager.referenceSpace);
            }
            this._xrSessionManager.onXRReferenceSpaceChanged.add(this._initHitTestSource);
        }
        if (this.options.enableTransientHitTest) {
            const offsetRay = new XRRay(this.options.transientOffsetRay || {});
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            this._xrSessionManager.session.requestHitTestSourceForTransientInput({
                profile: this.options.transientHitTestProfile || "generic-touchscreen",
                offsetRay,
                entityTypes: this.options.entityTypes
            }).then((hitSource)=>{
                this._transientXrHitTestSource = hitSource;
            });
        }
        return true;
    }
    /**
     * detach this feature.
     * Will usually be called by the features manager
     *
     * @returns true if successful.
     */ detach() {
        if (!super.detach()) {
            return false;
        }
        if (this._xrHitTestSource) {
            this._xrHitTestSource.cancel();
            this._xrHitTestSource = null;
        }
        this._xrSessionManager.onXRReferenceSpaceChanged.removeCallback(this._initHitTestSource);
        if (this._transientXrHitTestSource) {
            this._transientXrHitTestSource.cancel();
            this._transientXrHitTestSource = null;
        }
        return true;
    }
    /**
     * Dispose this feature and all of the resources attached
     */ dispose() {
        super.dispose();
        this.onHitTestResultObservable.clear();
    }
    _onXRFrame(frame) {
        // make sure we do nothing if (async) not attached
        if (!this.attached || this.paused) {
            return;
        }
        if (this._xrHitTestSource) {
            const results = frame.getHitTestResults(this._xrHitTestSource);
            this._processWebXRHitTestResult(results);
        }
        if (this._transientXrHitTestSource) {
            const hitTestResultsPerInputSource = frame.getHitTestResultsForTransientInput(this._transientXrHitTestSource);
            for (const resultsPerInputSource of hitTestResultsPerInputSource){
                this._processWebXRHitTestResult(resultsPerInputSource.results, resultsPerInputSource.inputSource);
            }
        }
    }
    _processWebXRHitTestResult(hitTestResults, inputSource) {
        const results = [];
        for (const hitTestResult of hitTestResults){
            const pose = hitTestResult.getPose(this._xrSessionManager.referenceSpace);
            if (!pose) {
                continue;
            }
            const pos = pose.transform.position;
            const quat = pose.transform.orientation;
            this._tmpPos.set(pos.x, pos.y, pos.z).scaleInPlace(this._xrSessionManager.worldScalingFactor);
            this._tmpQuat.set(quat.x, quat.y, quat.z, quat.w);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].FromFloat32ArrayToRefScaled(pose.transform.matrix, 0, 1, this._tmpMat);
            if (!this._xrSessionManager.scene.useRightHandedSystem) {
                this._tmpPos.z *= -1;
                this._tmpQuat.z *= -1;
                this._tmpQuat.w *= -1;
                this._tmpMat.toggleModelMatrixHandInPlace();
            }
            const result = {
                position: this.autoCloneTransformation ? this._tmpPos.clone() : this._tmpPos,
                rotationQuaternion: this.autoCloneTransformation ? this._tmpQuat.clone() : this._tmpQuat,
                transformationMatrix: this.autoCloneTransformation ? this._tmpMat.clone() : this._tmpMat,
                inputSource: inputSource,
                isTransient: !!inputSource,
                xrHitResult: hitTestResult
            };
            results.push(result);
        }
        this.onHitTestResultObservable.notifyObservers(results);
    }
}
/**
 * The module's name
 */ WebXRHitTest.Name = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRFeaturesManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRFeatureName"].HIT_TEST;
/**
 * The (Babylon) version of this module.
 * This is an integer representing the implementation version.
 * This number does not correspond to the WebXR specs version
 */ WebXRHitTest.Version = 2;
//register the plugin versions
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRFeaturesManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRFeaturesManager"].AddWebXRFeature(WebXRHitTest.Name, (xrSessionManager, options)=>{
    return ()=>new WebXRHitTest(xrSessionManager, options);
}, WebXRHitTest.Version, false); //# sourceMappingURL=WebXRHitTest.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/WebXRFeaturePointSystem.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WebXRFeaturePointSystem",
    ()=>WebXRFeaturePointSystem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRFeaturesManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/webXRFeaturesManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRAbstractFeature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/WebXRAbstractFeature.js [app-ssr] (ecmascript)");
;
;
;
;
class WebXRFeaturePointSystem extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRAbstractFeature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRAbstractFeature"] {
    /**
     * The current feature point cloud maintained across frames.
     */ get featurePointCloud() {
        return this._featurePointCloud;
    }
    /**
     * construct the feature point system
     * @param _xrSessionManager an instance of xr Session manager
     */ constructor(_xrSessionManager){
        super(_xrSessionManager);
        this._enabled = false;
        this._featurePointCloud = [];
        /**
         * Observers registered here will be executed whenever new feature points are added (on XRFrame while the session is tracking).
         * Will notify the observers about which feature points have been added.
         */ this.onFeaturePointsAddedObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * Observers registered here will be executed whenever a feature point has been updated (on XRFrame while the session is tracking).
         * Will notify the observers about which feature points have been updated.
         */ this.onFeaturePointsUpdatedObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        this.xrNativeFeatureName = "bjsfeature-points";
        if (this._xrSessionManager.session) {
            this._init();
        } else {
            this._xrSessionManager.onXRSessionInit.addOnce(()=>{
                this._init();
            });
        }
    }
    /**
     * Detach this feature.
     * Will usually be called by the features manager
     *
     * @returns true if successful.
     */ detach() {
        if (!super.detach()) {
            return false;
        }
        this.featurePointCloud.length = 0;
        return true;
    }
    /**
     * Dispose this feature and all of the resources attached
     */ dispose() {
        super.dispose();
        this._featurePointCloud.length = 0;
        this.onFeaturePointsUpdatedObservable.clear();
        this.onFeaturePointsAddedObservable.clear();
    }
    /**
     * On receiving a new XR frame if this feature is attached notify observers new feature point data is available.
     * @param frame
     */ _onXRFrame(frame) {
        if (!this.attached || !this._enabled || !frame) {
            return;
        }
        const featurePointRawData = frame.featurePointCloud;
        if (!featurePointRawData || featurePointRawData.length === 0) {
            return;
        } else {
            if (featurePointRawData.length % 5 !== 0) {
                throw new Error("Received malformed feature point cloud of length: " + featurePointRawData.length);
            }
            const numberOfFeaturePoints = featurePointRawData.length / 5;
            const updatedFeaturePoints = [];
            const addedFeaturePoints = [];
            for(let i = 0; i < numberOfFeaturePoints; i++){
                const rawIndex = i * 5;
                const id = featurePointRawData[rawIndex + 4];
                // IDs should be durable across frames and strictly increasing from 0 up, so use them as indexing into the feature point array.
                if (!this._featurePointCloud[id]) {
                    this._featurePointCloud[id] = {
                        position: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](),
                        confidenceValue: 0
                    };
                    addedFeaturePoints.push(id);
                } else {
                    updatedFeaturePoints.push(id);
                }
                // Set the feature point values.
                this._featurePointCloud[id].position.x = featurePointRawData[rawIndex];
                this._featurePointCloud[id].position.y = featurePointRawData[rawIndex + 1];
                this._featurePointCloud[id].position.z = featurePointRawData[rawIndex + 2];
                this._featurePointCloud[id].confidenceValue = featurePointRawData[rawIndex + 3];
            }
            // Signal observers that feature points have been added if necessary.
            if (addedFeaturePoints.length > 0) {
                this.onFeaturePointsAddedObservable.notifyObservers(addedFeaturePoints);
            }
            // Signal observers that feature points have been updated if necessary.
            if (updatedFeaturePoints.length > 0) {
                this.onFeaturePointsUpdatedObservable.notifyObservers(updatedFeaturePoints);
            }
        }
    }
    /**
     * Initializes the feature. If the feature point feature is not available for this environment do not mark the feature as enabled.
     */ _init() {
        if (!this._xrSessionManager.session.trySetFeaturePointCloudEnabled || !this._xrSessionManager.session.trySetFeaturePointCloudEnabled(true)) {
            // fail silently
            return;
        }
        this._enabled = true;
    }
}
/**
 * The module's name
 */ WebXRFeaturePointSystem.Name = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRFeaturesManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRFeatureName"].FEATURE_POINTS;
/**
 * The (Babylon) version of this module.
 * This is an integer representing the implementation version.
 * This number does not correspond to the WebXR specs version
 */ WebXRFeaturePointSystem.Version = 1;
// register the plugin
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRFeaturesManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRFeaturesManager"].AddWebXRFeature(WebXRFeaturePointSystem.Name, (xrSessionManager)=>{
    return ()=>new WebXRFeaturePointSystem(xrSessionManager);
}, WebXRFeaturePointSystem.Version); //# sourceMappingURL=WebXRFeaturePointSystem.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/WebXRMeshDetector.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WebXRMeshDetector",
    ()=>WebXRMeshDetector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRFeaturesManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/webXRFeaturesManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRAbstractFeature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/WebXRAbstractFeature.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/mesh.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Buffers/buffer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
let MeshIdProvider = 0;
class WebXRMeshDetector extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRAbstractFeature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRAbstractFeature"] {
    constructor(_xrSessionManager, _options = {}){
        super(_xrSessionManager);
        this._options = _options;
        this._detectedMeshes = new Map();
        /**
         * Observers registered here will be executed when a new mesh was added to the session
         */ this.onMeshAddedObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * Observers registered here will be executed when a mesh is no longer detected in the session
         */ this.onMeshRemovedObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * Observers registered here will be executed when an existing mesh updates
         */ this.onMeshUpdatedObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        this.xrNativeFeatureName = "mesh-detection";
        if (this._options.generateMeshes) {
            this._options.convertCoordinateSystems = true;
        }
        if (this._xrSessionManager.session) {
            this._init();
        } else {
            this._xrSessionManager.onXRSessionInit.addOnce(()=>{
                this._init();
            });
        }
    }
    detach() {
        if (!super.detach()) {
            return false;
        }
        // Only supported by BabylonNative
        if (!!this._xrSessionManager.isNative && !!this._xrSessionManager.session.trySetMeshDetectorEnabled) {
            this._xrSessionManager.session.trySetMeshDetectorEnabled(false);
        }
        if (!this._options.doNotRemoveMeshesOnSessionEnded) {
            this._detectedMeshes.forEach((mesh)=>{
                this.onMeshRemovedObservable.notifyObservers(mesh);
            });
            this._detectedMeshes.clear();
        }
        return true;
    }
    dispose() {
        super.dispose();
        this.onMeshAddedObservable.clear();
        this.onMeshRemovedObservable.clear();
        this.onMeshUpdatedObservable.clear();
    }
    _onXRFrame(frame) {
        // TODO remove try catch
        try {
            if (!this.attached || !frame) {
                return;
            }
            // babylon native XR and webxr support
            const detectedMeshes = frame.detectedMeshes || frame.worldInformation?.detectedMeshes;
            if (detectedMeshes) {
                const toRemove = new Set();
                this._detectedMeshes.forEach((vertexData, xrMesh)=>{
                    if (!detectedMeshes.has(xrMesh)) {
                        toRemove.add(xrMesh);
                    }
                });
                toRemove.forEach((xrMesh)=>{
                    const vertexData = this._detectedMeshes.get(xrMesh);
                    if (vertexData) {
                        this.onMeshRemovedObservable.notifyObservers(vertexData);
                        this._detectedMeshes.delete(xrMesh);
                    }
                });
                // now check for new ones
                detectedMeshes.forEach((xrMesh)=>{
                    if (!this._detectedMeshes.has(xrMesh)) {
                        const partialVertexData = {
                            id: MeshIdProvider++,
                            xrMesh: xrMesh
                        };
                        const vertexData = this._updateVertexDataWithXRMesh(xrMesh, partialVertexData, frame);
                        this._detectedMeshes.set(xrMesh, vertexData);
                        this.onMeshAddedObservable.notifyObservers(vertexData);
                    } else {
                        // updated?
                        if (xrMesh.lastChangedTime === this._xrSessionManager.currentTimestamp) {
                            const vertexData = this._detectedMeshes.get(xrMesh);
                            if (vertexData) {
                                this._updateVertexDataWithXRMesh(xrMesh, vertexData, frame);
                                this.onMeshUpdatedObservable.notifyObservers(vertexData);
                            }
                        }
                    }
                });
            }
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Log(error.stack);
        }
    }
    _init() {
        // Only supported by BabylonNative
        if (this._xrSessionManager.isNative) {
            if (this._xrSessionManager.session.trySetMeshDetectorEnabled) {
                this._xrSessionManager.session.trySetMeshDetectorEnabled(true);
            }
            if (!!this._options.preferredDetectorOptions && !!this._xrSessionManager.session.trySetPreferredMeshDetectorOptions) {
                this._xrSessionManager.session.trySetPreferredMeshDetectorOptions(this._options.preferredDetectorOptions);
            }
        }
    }
    _updateVertexDataWithXRMesh(xrMesh, mesh, xrFrame) {
        mesh.xrMesh = xrMesh;
        mesh.worldParentNode = this._options.worldParentNode;
        const positions = xrMesh.vertices || xrMesh.positions;
        if (this._options.convertCoordinateSystems) {
            if (!this._xrSessionManager.scene.useRightHandedSystem) {
                mesh.positions = new Float32Array(positions.length);
                for(let i = 0; i < positions.length; i += 3){
                    mesh.positions[i] = positions[i];
                    mesh.positions[i + 1] = positions[i + 1];
                    mesh.positions[i + 2] = -1 * positions[i + 2];
                }
                if (xrMesh.normals) {
                    mesh.normals = new Float32Array(xrMesh.normals.length);
                    for(let i = 0; i < xrMesh.normals.length; i += 3){
                        mesh.normals[i] = xrMesh.normals[i];
                        mesh.normals[i + 1] = xrMesh.normals[i + 1];
                        mesh.normals[i + 2] = -1 * xrMesh.normals[i + 2];
                    }
                }
            } else {
                mesh.positions = positions;
                mesh.normals = xrMesh.normals;
            }
            // WebXR should provide indices in a counterclockwise winding order regardless of coordinate system handedness
            mesh.indices = xrMesh.indices;
            // matrix
            const pose = xrFrame.getPose(xrMesh.meshSpace, this._xrSessionManager.referenceSpace);
            if (pose) {
                const mat = mesh.transformationMatrix || new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"]();
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].FromArrayToRef(pose.transform.matrix, 0, mat);
                if (!this._xrSessionManager.scene.useRightHandedSystem) {
                    mat.toggleModelMatrixHandInPlace();
                }
                mesh.transformationMatrix = mat;
                if (this._options.worldParentNode) {
                    mat.multiplyToRef(this._options.worldParentNode.getWorldMatrix(), mat);
                }
            }
            if (this._options.generateMeshes) {
                if (!mesh.mesh) {
                    const generatedMesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"]("xr mesh " + mesh.id, this._xrSessionManager.scene);
                    generatedMesh.rotationQuaternion = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"]();
                    generatedMesh.setVerticesData(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].PositionKind, mesh.positions);
                    if (mesh.normals) {
                        generatedMesh.setVerticesData(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].NormalKind, mesh.normals);
                    } else {
                        generatedMesh.createNormals(true);
                    }
                    generatedMesh.setIndices(mesh.indices, undefined, true);
                    mesh.mesh = generatedMesh;
                } else {
                    const generatedMesh = mesh.mesh;
                    generatedMesh.updateVerticesData(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].PositionKind, mesh.positions);
                    if (mesh.normals) {
                        generatedMesh.updateVerticesData(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].NormalKind, mesh.normals);
                    } else {
                        generatedMesh.createNormals(true);
                    }
                    generatedMesh.updateIndices(mesh.indices);
                }
                mesh.transformationMatrix?.decompose(mesh.mesh.scaling, mesh.mesh.rotationQuaternion, mesh.mesh.position);
            }
        }
        return mesh;
    }
}
/**
 * The module's name
 */ WebXRMeshDetector.Name = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRFeaturesManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRFeatureName"].MESH_DETECTION;
/**
 * The (Babylon) version of this module.
 * This is an integer representing the implementation version.
 * This number does not correspond to the WebXR specs version
 */ WebXRMeshDetector.Version = 1;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRFeaturesManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRFeaturesManager"].AddWebXRFeature(WebXRMeshDetector.Name, (xrSessionManager, options)=>{
    return ()=>new WebXRMeshDetector(xrSessionManager, options);
}, WebXRMeshDetector.Version, false); //# sourceMappingURL=WebXRMeshDetector.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/WebXRImageTracking.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WebXRImageTracking",
    ()=>WebXRImageTracking
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRFeaturesManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/webXRFeaturesManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRAbstractFeature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/WebXRAbstractFeature.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/tools.js [app-ssr] (ecmascript)");
;
;
;
;
;
/**
 * Enum that describes the state of the image trackability score status for this session.
 */ var ImageTrackingScoreStatus;
(function(ImageTrackingScoreStatus) {
    // AR Session has not yet assessed image trackability scores.
    ImageTrackingScoreStatus[ImageTrackingScoreStatus["NotReceived"] = 0] = "NotReceived";
    // A request to retrieve trackability scores has been sent, but no response has been received.
    ImageTrackingScoreStatus[ImageTrackingScoreStatus["Waiting"] = 1] = "Waiting";
    // Image trackability scores have been received for this session
    ImageTrackingScoreStatus[ImageTrackingScoreStatus["Received"] = 2] = "Received";
})(ImageTrackingScoreStatus || (ImageTrackingScoreStatus = {}));
class WebXRImageTracking extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRAbstractFeature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRAbstractFeature"] {
    /**
     * constructs the image tracking feature
     * @param _xrSessionManager the session manager for this module
     * @param options read-only options to be used in this module
     */ constructor(_xrSessionManager, /**
     * read-only options to be used in this module
     */ options){
        super(_xrSessionManager);
        this.options = options;
        /**
         * This will be triggered if the underlying system deems an image untrackable.
         * The index is the index of the image from the array used to initialize the feature.
         */ this.onUntrackableImageFoundObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * An image was deemed trackable, and the system will start tracking it.
         */ this.onTrackableImageFoundObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * The image was found and its state was updated.
         */ this.onTrackedImageUpdatedObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        this._trackableScoreStatus = ImageTrackingScoreStatus.NotReceived;
        this._trackedImages = [];
        this.xrNativeFeatureName = "image-tracking";
    }
    /**
     * attach this feature
     * Will usually be called by the features manager
     *
     * @returns true if successful.
     */ attach() {
        return super.attach();
    }
    /**
     * detach this feature.
     * Will usually be called by the features manager
     *
     * @returns true if successful.
     */ detach() {
        return super.detach();
    }
    /**
     * Get a tracked image by its ID.
     *
     * @param id the id of the image to load (position in the init array)
     * @returns a trackable image, if exists in this location
     */ getTrackedImageById(id) {
        return this._trackedImages[id] || null;
    }
    /**
     * Dispose this feature and all of the resources attached
     */ dispose() {
        super.dispose();
        for (const trackedImage of this._trackedImages){
            trackedImage.originalBitmap.close();
        }
        this._trackedImages.length = 0;
        this.onTrackableImageFoundObservable.clear();
        this.onUntrackableImageFoundObservable.clear();
        this.onTrackedImageUpdatedObservable.clear();
    }
    /**
     * Extends the session init object if needed
     * @returns augmentation object fo the xr session init object.
     */ async getXRSessionInitExtension() {
        if (!this.options.images || !this.options.images.length) {
            return {};
        }
        const promises = this.options.images.map(async (image)=>{
            if (typeof image.src === "string") {
                return await this._xrSessionManager.scene.getEngine()._createImageBitmapFromSource(image.src);
            } else {
                return image.src;
            }
        });
        try {
            const images = await Promise.all(promises);
            this._originalTrackingRequest = images.map((image, idx)=>{
                return {
                    image,
                    widthInMeters: this.options.images[idx].estimatedRealWorldWidth
                };
            });
            return {
                trackedImages: this._originalTrackingRequest
            };
        } catch (ex) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tools"].Error("Error loading images for tracking, WebXRImageTracking disabled for this session.");
            return {};
        }
    }
    _onXRFrame(_xrFrame) {
        if (!_xrFrame.getImageTrackingResults || this._trackableScoreStatus === ImageTrackingScoreStatus.Waiting) {
            return;
        }
        // Image tracking scores may be generated a few frames after the XR Session initializes.
        // If we haven't received scores yet, then kick off the task to check scores and return immediately.
        if (this._trackableScoreStatus === ImageTrackingScoreStatus.NotReceived) {
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            this._checkScoresAsync();
            return;
        }
        const imageTrackedResults = _xrFrame.getImageTrackingResults();
        for (const result of imageTrackedResults){
            let changed = false;
            const imageIndex = result.index;
            const imageObject = this._trackedImages[imageIndex];
            if (!imageObject) {
                continue;
            }
            imageObject.xrTrackingResult = result;
            if (imageObject.realWorldWidth !== result.measuredWidthInMeters) {
                imageObject.realWorldWidth = result.measuredWidthInMeters;
                changed = true;
            }
            // Get the pose of the image relative to a reference space.
            const pose = _xrFrame.getPose(result.imageSpace, this._xrSessionManager.referenceSpace);
            if (pose) {
                const mat = imageObject.transformationMatrix;
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].FromArrayToRef(pose.transform.matrix, 0, mat);
                if (!this._xrSessionManager.scene.useRightHandedSystem) {
                    mat.toggleModelMatrixHandInPlace();
                }
                changed = true;
            }
            const state = result.trackingState;
            const emulated = state === "emulated";
            if (imageObject.emulated !== emulated) {
                imageObject.emulated = emulated;
                changed = true;
            }
            if (changed) {
                this.onTrackedImageUpdatedObservable.notifyObservers(imageObject);
            }
        }
    }
    async _checkScoresAsync() {
        if (!this._xrSessionManager.session.getTrackedImageScores || this._trackableScoreStatus !== ImageTrackingScoreStatus.NotReceived) {
            return;
        }
        this._trackableScoreStatus = ImageTrackingScoreStatus.Waiting;
        const imageScores = await this._xrSessionManager.session.getTrackedImageScores();
        if (!imageScores || imageScores.length === 0) {
            this._trackableScoreStatus = ImageTrackingScoreStatus.NotReceived;
            return;
        }
        // check the scores for all
        for(let idx = 0; idx < imageScores.length; ++idx){
            if (imageScores[idx] == "untrackable") {
                this.onUntrackableImageFoundObservable.notifyObservers(idx);
            } else {
                const originalBitmap = this._originalTrackingRequest[idx].image;
                const imageObject = {
                    id: idx,
                    originalBitmap,
                    transformationMatrix: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"](),
                    ratio: originalBitmap.width / originalBitmap.height
                };
                this._trackedImages[idx] = imageObject;
                this.onTrackableImageFoundObservable.notifyObservers(imageObject);
            }
        }
        this._trackableScoreStatus = imageScores.length > 0 ? ImageTrackingScoreStatus.Received : ImageTrackingScoreStatus.NotReceived;
    }
}
/**
 * The module's name
 */ WebXRImageTracking.Name = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRFeaturesManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRFeatureName"].IMAGE_TRACKING;
/**
 * The (Babylon) version of this module.
 * This is an integer representing the implementation version.
 * This number does not correspond to the WebXR specs version
 */ WebXRImageTracking.Version = 1;
//register the plugin
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRFeaturesManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRFeaturesManager"].AddWebXRFeature(WebXRImageTracking.Name, (xrSessionManager, options)=>{
    return ()=>new WebXRImageTracking(xrSessionManager, options);
}, WebXRImageTracking.Version, false); //# sourceMappingURL=WebXRImageTracking.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/WebXRDOMOverlay.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WebXRDomOverlay",
    ()=>WebXRDomOverlay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/tools.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRFeaturesManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/webXRFeaturesManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRAbstractFeature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/WebXRAbstractFeature.js [app-ssr] (ecmascript)");
;
;
;
class WebXRDomOverlay extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRAbstractFeature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRAbstractFeature"] {
    /**
     * Creates a new instance of the dom-overlay feature
     * @param _xrSessionManager an instance of WebXRSessionManager
     * @param options options to use when constructing this feature
     */ constructor(_xrSessionManager, /**
     * options to use when constructing this feature
     */ options){
        super(_xrSessionManager);
        this.options = options;
        /**
         * Type of overlay - non-null when available
         */ this._domOverlayType = null;
        /**
         * Event Listener to supress "beforexrselect" events.
         */ this._beforeXRSelectListener = null;
        /**
         * Element used for overlay
         */ this._element = null;
        this.xrNativeFeatureName = "dom-overlay";
        // https://immersive-web.github.io/dom-overlays/
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tools"].Warn("dom-overlay is an experimental and unstable feature.");
    }
    /**
     * attach this feature
     * Will usually be called by the features manager
     *
     * @returns true if successful.
     */ attach() {
        if (!super.attach()) {
            return false;
        }
        // Feature not available
        if (!this._xrSessionManager.session.domOverlayState || this._xrSessionManager.session.domOverlayState.type === null) {
            return false;
        }
        this._domOverlayType = this._xrSessionManager.session.domOverlayState.type;
        if (this._element !== null && this.options.supressXRSelectEvents === true) {
            this._beforeXRSelectListener = (ev)=>{
                ev.preventDefault();
            };
            this._element.addEventListener("beforexrselect", this._beforeXRSelectListener);
        }
        return true;
    }
    /**
     * The type of DOM overlay (null when not supported).  Provided by UA and remains unchanged for duration of session.
     */ get domOverlayType() {
        return this._domOverlayType;
    }
    /**
     * Dispose this feature and all of the resources attached
     */ dispose() {
        super.dispose();
        if (this._element !== null && this._beforeXRSelectListener) {
            this._element.removeEventListener("beforexrselect", this._beforeXRSelectListener);
        }
    }
    _onXRFrame(_xrFrame) {
    /* empty */ }
    /**
     * Extends the session init object if needed
     * @returns augmentation object for the xr session init object.
     */ async getXRSessionInitExtension() {
        if (this.options.element === undefined) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tools"].Warn('"element" option must be provided to attach xr-dom-overlay feature.');
            return {};
        } else if (typeof this.options.element === "string") {
            const selectedElement = document.querySelector(this.options.element);
            if (selectedElement === null) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tools"].Warn(`element not found '${this.options.element}' (not requesting xr-dom-overlay)`);
                return {};
            }
            this._element = selectedElement;
        } else {
            this._element = this.options.element;
        }
        return {
            domOverlay: {
                root: this._element
            }
        };
    }
}
/**
 * The module's name
 */ WebXRDomOverlay.Name = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRFeaturesManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRFeatureName"].DOM_OVERLAY;
/**
 * The (Babylon) version of this module.
 * This is an integer representing the implementation version.
 * This number does not correspond to the WebXR specs version
 */ WebXRDomOverlay.Version = 1;
//register the plugin
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRFeaturesManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRFeaturesManager"].AddWebXRFeature(WebXRDomOverlay.Name, (xrSessionManager, options)=>{
    return ()=>new WebXRDomOverlay(xrSessionManager, options);
}, WebXRDomOverlay.Version, false); //# sourceMappingURL=WebXRDOMOverlay.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/WebXRControllerMovement.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WebXRControllerMovement",
    ()=>WebXRControllerMovement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRFeaturesManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/webXRFeaturesManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$motionController$2f$webXRControllerComponent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/motionController/webXRControllerComponent.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRAbstractFeature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/WebXRAbstractFeature.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/tools.js [app-ssr] (ecmascript)");
;
;
;
;
;
class WebXRControllerMovement extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRAbstractFeature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRAbstractFeature"] {
    /**
     * Current movement direction.  Will be null before XR Frames have been processed.
     */ get movementDirection() {
        return this._movementDirection;
    }
    /**
     * Is movement enabled
     */ get movementEnabled() {
        return this._featureContext.movementEnabled;
    }
    /**
     * Sets whether movement is enabled or not
     * @param enabled is movement enabled
     */ set movementEnabled(enabled) {
        this._featureContext.movementEnabled = enabled;
    }
    /**
     * If movement follows viewer pose
     */ get movementOrientationFollowsViewerPose() {
        return this._featureContext.movementOrientationFollowsViewerPose;
    }
    /**
     * Sets whether movement follows viewer pose
     * @param followsPose is movement should follow viewer pose
     */ set movementOrientationFollowsViewerPose(followsPose) {
        this._featureContext.movementOrientationFollowsViewerPose = followsPose;
    }
    /**
     * Gets movement speed
     */ get movementSpeed() {
        return this._featureContext.movementSpeed;
    }
    /**
     * Sets movement speed
     * @param movementSpeed movement speed
     */ set movementSpeed(movementSpeed) {
        this._featureContext.movementSpeed = movementSpeed;
    }
    /**
     * Gets minimum threshold the controller's thumbstick/touchpad must pass before being recognized for movement (avoids jitter/unintentional movement)
     */ get movementThreshold() {
        return this._featureContext.movementThreshold;
    }
    /**
     * Sets minimum threshold the controller's thumbstick/touchpad must pass before being recognized for movement (avoids jitter/unintentional movement)
     * @param movementThreshold new threshold
     */ set movementThreshold(movementThreshold) {
        this._featureContext.movementThreshold = movementThreshold;
    }
    /**
     * Is rotation enabled
     */ get rotationEnabled() {
        return this._featureContext.rotationEnabled;
    }
    /**
     * Sets whether rotation is enabled or not
     * @param enabled is rotation enabled
     */ set rotationEnabled(enabled) {
        this._featureContext.rotationEnabled = enabled;
    }
    /**
     * Gets rotation speed factor
     */ get rotationSpeed() {
        return this._featureContext.rotationSpeed;
    }
    /**
     * Sets rotation speed factor (1.0 is default)
     * @param rotationSpeed new rotation speed factor
     */ set rotationSpeed(rotationSpeed) {
        this._featureContext.rotationSpeed = rotationSpeed;
    }
    /**
     * Gets minimum threshold the controller's thumbstick/touchpad must pass before being recognized for rotation (avoids jitter/unintentional rotation)
     */ get rotationThreshold() {
        return this._featureContext.rotationThreshold;
    }
    /**
     * Sets minimum threshold the controller's thumbstick/touchpad must pass before being recognized for rotation (avoids jitter/unintentional rotation)
     * @param threshold new threshold
     */ set rotationThreshold(threshold) {
        this._featureContext.rotationThreshold = threshold;
    }
    /**
     * constructs a new movement controller system
     * @param _xrSessionManager an instance of WebXRSessionManager
     * @param options configuration object for this feature
     */ constructor(_xrSessionManager, options){
        super(_xrSessionManager);
        this._controllers = {};
        this._currentRegistrationConfigurations = [];
        // forward direction for movement, which may differ from viewer pose.
        this._movementDirection = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"]();
        // unused
        this._tmpRotationMatrix = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].Identity();
        this._tmpTranslationDirection = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]();
        this._tmpMovementTranslation = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]();
        this._tempCacheQuaternion = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"]();
        this._attachController = (xrController)=>{
            if (this._controllers[xrController.uniqueId]) {
                // already attached
                return;
            }
            this._controllers[xrController.uniqueId] = {
                xrController,
                registeredComponents: []
            };
            const controllerData = this._controllers[xrController.uniqueId];
            // movement controller only available to gamepad-enabled input sources.
            if (controllerData.xrController.inputSource.targetRayMode === "tracked-pointer" && controllerData.xrController.inputSource.gamepad) {
                // motion controller support
                const initController = ()=>{
                    if (xrController.motionController) {
                        for (const registration of this._currentRegistrationConfigurations){
                            let component = null;
                            if (registration.allowedComponentTypes) {
                                for (const componentType of registration.allowedComponentTypes){
                                    const componentOfType = xrController.motionController.getComponentOfType(componentType);
                                    if (componentOfType !== null) {
                                        component = componentOfType;
                                        break;
                                    }
                                }
                            }
                            if (registration.mainComponentOnly) {
                                const mainComponent = xrController.motionController.getMainComponent();
                                if (mainComponent === null) {
                                    continue;
                                }
                                component = mainComponent;
                            }
                            if (typeof registration.componentSelectionPredicate === "function") {
                                // if does not match we do want to ignore a previously found component
                                component = registration.componentSelectionPredicate(xrController);
                            }
                            if (component && registration.forceHandedness) {
                                if (xrController.inputSource.handedness !== registration.forceHandedness) {
                                    continue; // do not register
                                }
                            }
                            if (component === null) {
                                continue; // do not register
                            }
                            const registeredComponent = {
                                registrationConfiguration: registration,
                                component
                            };
                            controllerData.registeredComponents.push(registeredComponent);
                            if ("axisChangedHandler" in registration) {
                                registeredComponent.onAxisChangedObserver = component.onAxisValueChangedObservable.add((axesData)=>{
                                    registration.axisChangedHandler(axesData, this._movementState, this._featureContext, this._xrInput);
                                });
                            }
                            if ("buttonChangedHandler" in registration) {
                                registeredComponent.onButtonChangedObserver = component.onButtonStateChangedObservable.add((component)=>{
                                    if (component.changes.pressed) {
                                        registration.buttonChangedHandler(component.changes.pressed, this._movementState, this._featureContext, this._xrInput);
                                    }
                                });
                            }
                        }
                    }
                };
                if (xrController.motionController) {
                    initController();
                } else {
                    xrController.onMotionControllerInitObservable.addOnce(()=>{
                        initController();
                    });
                }
            }
        };
        if (!options || options.xrInput === undefined) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tools"].Error('WebXRControllerMovement feature requires "xrInput" option.');
            return;
        }
        if (Array.isArray(options.customRegistrationConfigurations)) {
            this._currentRegistrationConfigurations = options.customRegistrationConfigurations;
        } else {
            this._currentRegistrationConfigurations = WebXRControllerMovement.REGISTRATIONS.default;
        }
        // synchronized from feature setter properties
        this._featureContext = {
            movementEnabled: options.movementEnabled ?? true,
            movementOrientationFollowsViewerPose: options.movementOrientationFollowsViewerPose ?? true,
            movementOrientationFollowsController: options.movementOrientationFollowsController ?? false,
            orientationPreferredHandedness: options.orientationPreferredHandedness,
            movementSpeed: options.movementSpeed ?? 1,
            movementThreshold: options.movementThreshold ?? 0.25,
            rotationEnabled: options.rotationEnabled ?? true,
            rotationSpeed: options.rotationSpeed ?? 1.0,
            rotationThreshold: options.rotationThreshold ?? 0.25
        };
        this._movementState = {
            moveX: 0,
            moveY: 0,
            rotateX: 0,
            rotateY: 0
        };
        this._xrInput = options.xrInput;
    }
    attach() {
        if (!super.attach()) {
            return false;
        }
        for (const controller of this._xrInput.controllers){
            this._attachController(controller);
        }
        this._addNewAttachObserver(this._xrInput.onControllerAddedObservable, this._attachController);
        this._addNewAttachObserver(this._xrInput.onControllerRemovedObservable, (controller)=>{
            // REMOVE the controller
            this._detachController(controller.uniqueId);
        });
        return true;
    }
    detach() {
        if (!super.detach()) {
            return false;
        }
        const keys = Object.keys(this._controllers);
        for (const controllerId of keys){
            this._detachController(controllerId);
        }
        this._controllers = {};
        return true;
    }
    /**
     * Occurs on every XR frame.
     * @param _xrFrame
     */ _onXRFrame(_xrFrame) {
        if (!this.attached) {
            return;
        }
        if (this._movementState.rotateX !== 0 && this._featureContext.rotationEnabled) {
            // smooth rotation
            const deltaMillis = this._xrSessionManager.scene.getEngine().getDeltaTime();
            const rotationY = deltaMillis * 0.001 * this._featureContext.rotationSpeed * this._movementState.rotateX * (this._xrSessionManager.scene.useRightHandedSystem ? -1 : 1);
            if (this._featureContext.movementOrientationFollowsViewerPose) {
                this._xrInput.xrCamera.cameraRotation.y += rotationY;
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"].RotationYawPitchRollToRef(rotationY, 0, 0, this._tempCacheQuaternion);
                this._xrInput.xrCamera.rotationQuaternion.multiplyToRef(this._tempCacheQuaternion, this._movementDirection);
            } else if (this._featureContext.movementOrientationFollowsController) {
                this._xrInput.xrCamera.cameraRotation.y += rotationY;
                // get the correct controller
                const handedness = this._featureContext.orientationPreferredHandedness || "right";
                const key = Object.keys(this._controllers).find((key)=>this._controllers[key]?.xrController?.inputSource.handedness === handedness) || Object.keys(this._controllers)[0];
                const controller = this._controllers[key];
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"].RotationYawPitchRollToRef(rotationY, 0, 0, this._tempCacheQuaternion);
                (controller?.xrController.pointer.rotationQuaternion || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"].Identity()).multiplyToRef(this._tempCacheQuaternion, this._movementDirection);
            } else {
                // movement orientation direction does not affect camera.  We use rotation speed multiplier
                // otherwise need to implement inertia and constraints for same feel as TargetCamera.
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"].RotationYawPitchRollToRef(rotationY * 3.0, 0, 0, this._tempCacheQuaternion);
                this._movementDirection.multiplyInPlace(this._tempCacheQuaternion);
            }
        } else if (this._featureContext.movementOrientationFollowsViewerPose) {
            this._movementDirection.copyFrom(this._xrInput.xrCamera.rotationQuaternion);
        } else if (this._featureContext.movementOrientationFollowsController) {
            // get the correct controller
            const handedness = this._featureContext.orientationPreferredHandedness || "right";
            const key = Object.keys(this._controllers).find((key)=>this._controllers[key]?.xrController.inputSource.handedness === handedness) || Object.keys(this._controllers)[0];
            const controller = this._controllers[key];
            this._movementDirection.copyFrom(controller?.xrController.pointer.rotationQuaternion || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"].Identity());
        }
        if ((this._movementState.moveX || this._movementState.moveY) && this._featureContext.movementEnabled) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].FromQuaternionToRef(this._movementDirection, this._tmpRotationMatrix);
            this._tmpTranslationDirection.set(this._movementState.moveX, 0, this._movementState.moveY * (this._xrSessionManager.scene.useRightHandedSystem ? 1.0 : -1.0));
            // move according to forward direction based on camera speed
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinatesToRef(this._tmpTranslationDirection, this._tmpRotationMatrix, this._tmpMovementTranslation);
            this._tmpMovementTranslation.scaleInPlace(this._xrInput.xrCamera._computeLocalCameraSpeed() * this._featureContext.movementSpeed);
            this._xrInput.xrCamera.cameraDirection.addInPlace(this._tmpMovementTranslation);
        }
    }
    _detachController(xrControllerUniqueId) {
        const controllerData = this._controllers[xrControllerUniqueId];
        if (!controllerData) {
            return;
        }
        for (const registeredComponent of controllerData.registeredComponents){
            if (registeredComponent.onAxisChangedObserver) {
                registeredComponent.component.onAxisValueChangedObservable.remove(registeredComponent.onAxisChangedObserver);
            }
            if (registeredComponent.onButtonChangedObserver) {
                registeredComponent.component.onButtonStateChangedObservable.remove(registeredComponent.onButtonChangedObserver);
            }
        }
        // remove from the map
        delete this._controllers[xrControllerUniqueId];
    }
}
/**
 * The module's name
 */ WebXRControllerMovement.Name = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRFeaturesManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRFeatureName"].MOVEMENT;
/**
 * Standard controller configurations.
 */ WebXRControllerMovement.REGISTRATIONS = {
    default: [
        {
            allowedComponentTypes: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$motionController$2f$webXRControllerComponent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRControllerComponent"].THUMBSTICK_TYPE,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$motionController$2f$webXRControllerComponent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRControllerComponent"].TOUCHPAD_TYPE
            ],
            forceHandedness: "left",
            axisChangedHandler: (axes, movementState, featureContext)=>{
                movementState.rotateX = Math.abs(axes.x) > featureContext.rotationThreshold ? axes.x : 0;
                movementState.rotateY = Math.abs(axes.y) > featureContext.rotationThreshold ? axes.y : 0;
            }
        },
        {
            allowedComponentTypes: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$motionController$2f$webXRControllerComponent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRControllerComponent"].THUMBSTICK_TYPE,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$motionController$2f$webXRControllerComponent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRControllerComponent"].TOUCHPAD_TYPE
            ],
            forceHandedness: "right",
            axisChangedHandler: (axes, movementState, featureContext)=>{
                movementState.moveX = Math.abs(axes.x) > featureContext.movementThreshold ? axes.x : 0;
                movementState.moveY = Math.abs(axes.y) > featureContext.movementThreshold ? axes.y : 0;
            }
        }
    ]
};
/**
 * The (Babylon) version of this module.
 * This is an integer representing the implementation version.
 * This number does not correspond to the webxr specs version
 */ WebXRControllerMovement.Version = 1;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRFeaturesManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRFeaturesManager"].AddWebXRFeature(WebXRControllerMovement.Name, (xrSessionManager, options)=>{
    return ()=>new WebXRControllerMovement(xrSessionManager, options);
}, WebXRControllerMovement.Version, true); //# sourceMappingURL=WebXRControllerMovement.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/WebXRLightEstimation.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WebXRLightEstimation",
    ()=>WebXRLightEstimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGL$2f$webGLHardwareTexture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGL/webGLHardwareTexture.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$internalTexture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/internalTexture.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/tools.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRFeaturesManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/webXRFeaturesManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRAbstractFeature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/WebXRAbstractFeature.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.color.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$directionalLight$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Lights/directionalLight.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$baseTexture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/baseTexture.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$sphericalPolynomial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/sphericalPolynomial.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$lightConstants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Lights/lightConstants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Filtering$2f$hdrFiltering$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Filtering/hdrFiltering.js [app-ssr] (ecmascript)");
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
class WebXRLightEstimation extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRAbstractFeature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRAbstractFeature"] {
    /**
     * Creates a new instance of the light estimation feature
     * @param _xrSessionManager an instance of WebXRSessionManager
     * @param options options to use when constructing this feature
     */ constructor(_xrSessionManager, /**
     * options to use when constructing this feature
     */ options){
        super(_xrSessionManager);
        this.options = options;
        this._canvasContext = null;
        this._reflectionCubeMap = null;
        this._xrLightEstimate = null;
        this._xrLightProbe = null;
        this._xrWebGLBinding = null;
        this._lightDirection = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Up().negateInPlace();
        this._lightColor = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"].White();
        this._intensity = 1;
        this._sphericalHarmonics = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$sphericalPolynomial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SphericalHarmonics"]();
        this._cubeMapPollTime = Date.now();
        this._lightEstimationPollTime = Date.now();
        /**
         * ARCore's reflection cube map size is 16x16.
         * Once other systems support this feature we will need to change this to be dynamic.
         * see https://github.com/immersive-web/lighting-estimation/blob/main/lighting-estimation-explainer.md#cube-map-open-questions
         */ this._reflectionCubeMapTextureSize = 16;
        /**
         * If createDirectionalLightSource is set to true this light source will be created automatically.
         * Otherwise this can be set with an external directional light source.
         * This light will be updated whenever the light estimation values change.
         */ this.directionalLight = null;
        /**
         * The scale factor to multiply the intensity of the directional light by. Defaults to 1.0.
         */ this.directionalLightIntensityFactor = 1.0;
        /**
         * This observable will notify when the reflection cube map is updated.
         */ this.onReflectionCubeMapUpdatedObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * Event Listener for "reflectionchange" events.
         */ this._updateReflectionCubeMap = ()=>{
            if (!this._xrLightProbe) {
                return;
            }
            // check poll time, do not update if it has not been long enough
            if (this.options.cubeMapPollInterval) {
                const now = Date.now();
                if (now - this._cubeMapPollTime < this.options.cubeMapPollInterval) {
                    return;
                }
                this._cubeMapPollTime = now;
            }
            const lp = this._getXRGLBinding().getReflectionCubeMap(this._xrLightProbe);
            if (lp && this._reflectionCubeMap) {
                if (!this._reflectionCubeMap._texture) {
                    const internalTexture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$internalTexture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InternalTexture"](this._xrSessionManager.scene.getEngine(), 0 /* InternalTextureSource.Unknown */ );
                    internalTexture.isCube = true;
                    internalTexture.invertY = false;
                    internalTexture._useSRGBBuffer = this.options.reflectionFormat === "srgba8";
                    internalTexture.format = 5;
                    internalTexture.generateMipMaps = true;
                    internalTexture.type = this.options.reflectionFormat !== "srgba8" ? 2 : 0;
                    internalTexture.samplingMode = 3;
                    internalTexture.width = this._reflectionCubeMapTextureSize;
                    internalTexture.height = this._reflectionCubeMapTextureSize;
                    internalTexture._cachedWrapU = 1;
                    internalTexture._cachedWrapV = 1;
                    internalTexture._hardwareTexture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGL$2f$webGLHardwareTexture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebGLHardwareTexture"](lp, this._getCanvasContext());
                    this._reflectionCubeMap._texture = internalTexture;
                } else {
                    this._reflectionCubeMap._texture._hardwareTexture?.set(lp);
                    this._reflectionCubeMap._texture.getEngine().resetTextureCache();
                }
                this._reflectionCubeMap._texture.isReady = true;
                if (!this.options.disablePreFiltering) {
                    this._xrLightProbe.removeEventListener("reflectionchange", this._updateReflectionCubeMap);
                    // eslint-disable-next-line @typescript-eslint/no-floating-promises, github/no-then
                    this._hdrFilter.prefilter(this._reflectionCubeMap).then(()=>{
                        this._xrSessionManager.scene.markAllMaterialsAsDirty(1);
                        this.onReflectionCubeMapUpdatedObservable.notifyObservers(this._reflectionCubeMap);
                        this._xrLightProbe.addEventListener("reflectionchange", this._updateReflectionCubeMap);
                    });
                } else {
                    this._xrSessionManager.scene.markAllMaterialsAsDirty(1);
                    this.onReflectionCubeMapUpdatedObservable.notifyObservers(this._reflectionCubeMap);
                }
            }
        };
        this.xrNativeFeatureName = "light-estimation";
        if (this.options.createDirectionalLightSource) {
            this.directionalLight = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$directionalLight$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DirectionalLight"]("light estimation directional", this._lightDirection, this._xrSessionManager.scene);
            this.directionalLight.position = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0, 8, 0);
            // intensity will be set later
            this.directionalLight.intensity = 0;
            this.directionalLight.falloffType = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$lightConstants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LightConstants"].FALLOFF_GLTF;
        }
        this.directionalLightIntensityFactor = this.options.directionalLightIntensityFactor ?? 1.0;
        this._hdrFilter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Filtering$2f$hdrFiltering$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HDRFiltering"](this._xrSessionManager.scene.getEngine());
        // https://immersive-web.github.io/lighting-estimation/
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tools"].Warn("light-estimation is an experimental and unstable feature.");
    }
    /**
     * While the estimated cube map is expected to update over time to better reflect the user's environment as they move around those changes are unlikely to happen with every XRFrame.
     * Since creating and processing the cube map is potentially expensive, especially if mip maps are needed, you can listen to the onReflectionCubeMapUpdatedObservable to determine
     * when it has been updated.
     */ get reflectionCubeMapTexture() {
        return this._reflectionCubeMap;
    }
    /**
     * The most recent light estimate.  Available starting on the first frame where the device provides a light probe.
     */ get xrLightingEstimate() {
        if (this._xrLightEstimate) {
            return {
                lightColor: this._lightColor,
                lightDirection: this._lightDirection,
                lightIntensity: this._intensity,
                sphericalHarmonics: this._sphericalHarmonics
            };
        }
        return this._xrLightEstimate;
    }
    _getCanvasContext() {
        if (this._canvasContext === null) {
            this._canvasContext = this._xrSessionManager.scene.getEngine()._gl;
        }
        return this._canvasContext;
    }
    _getXRGLBinding() {
        if (this._xrWebGLBinding === null) {
            const context = this._getCanvasContext();
            this._xrWebGLBinding = new XRWebGLBinding(this._xrSessionManager.session, context);
        }
        return this._xrWebGLBinding;
    }
    /**
     * attach this feature
     * Will usually be called by the features manager
     *
     * @returns true if successful.
     */ attach() {
        if (!super.attach()) {
            return false;
        }
        const reflectionFormat = this.options.reflectionFormat ?? (this._xrSessionManager.session.preferredReflectionFormat || "srgba8");
        this.options.reflectionFormat = reflectionFormat;
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this._xrSessionManager.session.requestLightProbe({
            reflectionFormat
        })// eslint-disable-next-line github/no-then
        .then((xrLightProbe)=>{
            this._xrLightProbe = xrLightProbe;
            if (!this.options.disableCubeMapReflection) {
                if (!this._reflectionCubeMap) {
                    this._reflectionCubeMap = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$baseTexture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseTexture"](this._xrSessionManager.scene);
                    this._reflectionCubeMap._isCube = true;
                    this._reflectionCubeMap.coordinatesMode = 3;
                    if (this.options.setSceneEnvironmentTexture) {
                        this._xrSessionManager.scene.environmentTexture = this._reflectionCubeMap;
                    }
                }
                this._xrLightProbe.addEventListener("reflectionchange", this._updateReflectionCubeMap);
            }
        });
        return true;
    }
    /**
     * detach this feature.
     * Will usually be called by the features manager
     *
     * @returns true if successful.
     */ detach() {
        const detached = super.detach();
        if (this._xrLightProbe !== null && !this.options.disableCubeMapReflection) {
            this._xrLightProbe.removeEventListener("reflectionchange", this._updateReflectionCubeMap);
            this._xrLightProbe = null;
        }
        this._canvasContext = null;
        this._xrLightEstimate = null;
        // When the session ends (on detach) we must clear our XRWebGLBinging instance, which references the ended session.
        this._xrWebGLBinding = null;
        return detached;
    }
    /**
     * Dispose this feature and all of the resources attached
     */ dispose() {
        super.dispose();
        this.onReflectionCubeMapUpdatedObservable.clear();
        if (this.directionalLight) {
            this.directionalLight.dispose();
            this.directionalLight = null;
        }
        if (this._reflectionCubeMap !== null) {
            if (this._reflectionCubeMap._texture) {
                this._reflectionCubeMap._texture.dispose();
            }
            this._reflectionCubeMap.dispose();
            this._reflectionCubeMap = null;
        }
    }
    _onXRFrame(_xrFrame) {
        if (this._xrLightProbe !== null) {
            if (this.options.lightEstimationPollInterval) {
                const now = Date.now();
                if (now - this._lightEstimationPollTime < this.options.lightEstimationPollInterval) {
                    return;
                }
                this._lightEstimationPollTime = now;
            }
            this._xrLightEstimate = _xrFrame.getLightEstimate(this._xrLightProbe);
            if (this._xrLightEstimate) {
                this._intensity = Math.max(1.0, this._xrLightEstimate.primaryLightIntensity.x, this._xrLightEstimate.primaryLightIntensity.y, this._xrLightEstimate.primaryLightIntensity.z);
                const rhsFactor = this._xrSessionManager.scene.useRightHandedSystem ? 1.0 : -1.0;
                // recreate the vector caches, so that the last one provided to the user will persist
                if (this.options.disableVectorReuse) {
                    this._lightDirection = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]();
                    this._lightColor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"]();
                    if (this.directionalLight) {
                        this.directionalLight.direction = this._lightDirection;
                        this.directionalLight.diffuse = this._lightColor;
                    }
                }
                this._lightDirection.copyFromFloats(this._xrLightEstimate.primaryLightDirection.x, this._xrLightEstimate.primaryLightDirection.y, this._xrLightEstimate.primaryLightDirection.z * rhsFactor);
                this._lightColor.copyFromFloats(this._xrLightEstimate.primaryLightIntensity.x / this._intensity, this._xrLightEstimate.primaryLightIntensity.y / this._intensity, this._xrLightEstimate.primaryLightIntensity.z / this._intensity);
                this._sphericalHarmonics.updateFromFloatsArray(this._xrLightEstimate.sphericalHarmonicsCoefficients);
                if (this._reflectionCubeMap && !this.options.disableSphericalPolynomial) {
                    this._reflectionCubeMap.sphericalPolynomial = this._reflectionCubeMap.sphericalPolynomial || new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$sphericalPolynomial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SphericalPolynomial"]();
                    this._reflectionCubeMap.sphericalPolynomial?.updateFromHarmonics(this._sphericalHarmonics);
                }
                // direction from instead of direction to
                this._lightDirection.negateInPlace();
                // set the values after calculating them
                if (this.directionalLight) {
                    this.directionalLight.direction.copyFrom(this._lightDirection);
                    this.directionalLight.intensity = Math.min(this._intensity, 1.0) * this.directionalLightIntensityFactor;
                    this.directionalLight.diffuse.copyFrom(this._lightColor);
                }
            }
        }
    }
}
/**
 * The module's name
 */ WebXRLightEstimation.Name = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRFeaturesManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRFeatureName"].LIGHT_ESTIMATION;
/**
 * The (Babylon) version of this module.
 * This is an integer representing the implementation version.
 * This number does not correspond to the WebXR specs version
 */ WebXRLightEstimation.Version = 1;
// register the plugin
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRFeaturesManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRFeaturesManager"].AddWebXRFeature(WebXRLightEstimation.Name, (xrSessionManager, options)=>{
    return ()=>new WebXRLightEstimation(xrSessionManager, options);
}, WebXRLightEstimation.Version, false); //# sourceMappingURL=WebXRLightEstimation.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/WebXREyeTracking.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WebXREyeTracking",
    ()=>WebXREyeTracking
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRFeaturesManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/webXRFeaturesManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRAbstractFeature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/WebXRAbstractFeature.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$ray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Culling/ray.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$ray$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Culling/ray.core.js [app-ssr] (ecmascript)");
;
;
;
;
;
class WebXREyeTracking extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRAbstractFeature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRAbstractFeature"] {
    /**
     * Creates a new instance of the XR eye tracking feature.
     * @param _xrSessionManager An instance of WebXRSessionManager.
     */ constructor(_xrSessionManager){
        super(_xrSessionManager);
        /**
         * This observable will notify registered observers when eye tracking starts
         */ this.onEyeTrackingStartedObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * This observable will notify registered observers when eye tracking ends
         */ this.onEyeTrackingEndedObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * This observable will notify registered observers on each frame that has valid tracking
         */ this.onEyeTrackingFrameUpdateObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        this._eyeTrackingStartListener = (event)=>{
            this._latestEyeSpace = event.gazeSpace;
            this._gazeRay = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$ray$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Ray"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero(), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Forward());
            this.onEyeTrackingStartedObservable.notifyObservers(this._gazeRay);
        };
        this._eyeTrackingEndListener = ()=>{
            this._latestEyeSpace = null;
            this._gazeRay = null;
            this.onEyeTrackingEndedObservable.notifyObservers();
        };
        this.xrNativeFeatureName = "eye-tracking";
        if (this._xrSessionManager.session) {
            this._init();
        } else {
            this._xrSessionManager.onXRSessionInit.addOnce(()=>{
                this._init();
            });
        }
    }
    /**
     * Dispose this feature and all of the resources attached.
     */ dispose() {
        super.dispose();
        this._xrSessionManager.session.removeEventListener("eyetrackingstart", this._eyeTrackingStartListener);
        this._xrSessionManager.session.removeEventListener("eyetrackingend", this._eyeTrackingEndListener);
        this.onEyeTrackingStartedObservable.clear();
        this.onEyeTrackingEndedObservable.clear();
        this.onEyeTrackingFrameUpdateObservable.clear();
    }
    /**
     * Returns whether the gaze data is valid or not
     * @returns true if the data is valid
     */ get isEyeGazeValid() {
        return !!this._gazeRay;
    }
    /**
     * Get a reference to the gaze ray. This data is valid while eye tracking persists, and will be set to null when gaze data is no longer available
     * @returns a reference to the gaze ray if it exists and is valid, returns null otherwise.
     */ getEyeGaze() {
        return this._gazeRay;
    }
    _onXRFrame(frame) {
        if (!this.attached || !frame) {
            return;
        }
        if (this._latestEyeSpace && this._gazeRay) {
            const pose = frame.getPose(this._latestEyeSpace, this._xrSessionManager.referenceSpace);
            if (pose) {
                this._gazeRay.origin.set(pose.transform.position.x, pose.transform.position.y, pose.transform.position.z).scaleInPlace(this._xrSessionManager.worldScalingFactor);
                const quat = pose.transform.orientation;
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Quaternion[0].set(quat.x, quat.y, quat.z, quat.w);
                if (!this._xrSessionManager.scene.useRightHandedSystem) {
                    this._gazeRay.origin.z *= -1;
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Quaternion[0].z *= -1;
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Quaternion[0].w *= -1;
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].LeftHandedForwardReadOnly.rotateByQuaternionToRef(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Quaternion[0], this._gazeRay.direction);
                } else {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].RightHandedForwardReadOnly.rotateByQuaternionToRef(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Quaternion[0], this._gazeRay.direction);
                }
                this.onEyeTrackingFrameUpdateObservable.notifyObservers(this._gazeRay);
            }
        }
    }
    _init() {
        // Only supported by BabylonNative
        if (this._xrSessionManager.isNative) {
            this._xrSessionManager.session.addEventListener("eyetrackingstart", this._eyeTrackingStartListener);
            this._xrSessionManager.session.addEventListener("eyetrackingend", this._eyeTrackingEndListener);
        }
    }
}
/**
 * The module's name
 */ WebXREyeTracking.Name = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRFeaturesManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRFeatureName"].EYE_TRACKING;
/**
 * The (Babylon) version of this module.
 * This is an integer representing the implementation version.
 * This number does not correspond to the WebXR specs version
 */ WebXREyeTracking.Version = 1;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRFeaturesManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRFeaturesManager"].AddWebXRFeature(WebXREyeTracking.Name, (xrSessionManager)=>{
    return ()=>new WebXREyeTracking(xrSessionManager);
}, WebXREyeTracking.Version, false); //# sourceMappingURL=WebXREyeTracking.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/WebXRWalkingLocomotion.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WebXRWalkingLocomotion",
    ()=>WebXRWalkingLocomotion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRFeaturesManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/webXRFeaturesManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRAbstractFeature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/WebXRAbstractFeature.js [app-ssr] (ecmascript)");
;
;
;
;
;
class CircleBuffer {
    constructor(numSamples, initializer){
        this._samples = [];
        this._idx = 0;
        for(let idx = 0; idx < numSamples; ++idx){
            this._samples.push(initializer ? initializer() : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"].Zero());
        }
    }
    get length() {
        return this._samples.length;
    }
    push(x, y) {
        this._idx = (this._idx + this._samples.length - 1) % this._samples.length;
        this.at(0).copyFromFloats(x, y);
    }
    at(idx) {
        if (idx >= this._samples.length) {
            throw new Error("Index out of bounds");
        }
        return this._samples[(this._idx + idx) % this._samples.length];
    }
}
class FirstStepDetector {
    constructor(){
        this._samples = new CircleBuffer(20);
        this._entropy = 0;
        this.onFirstStepDetected = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
    }
    update(posX, posY, forwardX, forwardY) {
        this._samples.push(posX, posY);
        const origin = this._samples.at(0);
        this._entropy *= this._entropyDecayFactor;
        this._entropy += __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"].Distance(origin, this._samples.at(1));
        if (this._entropy > this._entropyThreshold) {
            return;
        }
        let samePointIdx;
        for(samePointIdx = this._samePointCheckStartIdx; samePointIdx < this._samples.length; ++samePointIdx){
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"].DistanceSquared(origin, this._samples.at(samePointIdx)) < this._samePointSquaredDistanceThreshold) {
                break;
            }
        }
        if (samePointIdx === this._samples.length) {
            return;
        }
        let apexDistSquared = -1;
        let apexIdx = 0;
        for(let distSquared, idx = 1; idx < samePointIdx; ++idx){
            distSquared = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"].DistanceSquared(origin, this._samples.at(idx));
            if (distSquared > apexDistSquared) {
                apexIdx = idx;
                apexDistSquared = distSquared;
            }
        }
        if (apexDistSquared < this._apexSquaredDistanceThreshold) {
            return;
        }
        const apex = this._samples.at(apexIdx);
        const axis = apex.subtract(origin);
        axis.normalize();
        const vec = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Vector2[0];
        let dot;
        let sample;
        let sumSquaredProjectionDistances = 0;
        for(let idx = 1; idx < samePointIdx; ++idx){
            sample = this._samples.at(idx);
            sample.subtractToRef(origin, vec);
            dot = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"].Dot(axis, vec);
            sumSquaredProjectionDistances += vec.lengthSquared() - dot * dot;
        }
        if (sumSquaredProjectionDistances > samePointIdx * this._squaredProjectionDistanceThreshold) {
            return;
        }
        const forwardVec = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0];
        forwardVec.set(forwardX, forwardY, 0);
        const axisVec = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[1];
        axisVec.set(axis.x, axis.y, 0);
        const isApexLeft = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Cross(forwardVec, axisVec).z > 0;
        const leftApex = origin.clone();
        const rightApex = origin.clone();
        apex.subtractToRef(origin, axis);
        if (isApexLeft) {
            axis.scaleAndAddToRef(this._axisToApexShrinkFactor, leftApex);
            axis.scaleAndAddToRef(this._axisToApexExtendFactor, rightApex);
        } else {
            axis.scaleAndAddToRef(this._axisToApexExtendFactor, leftApex);
            axis.scaleAndAddToRef(this._axisToApexShrinkFactor, rightApex);
        }
        this.onFirstStepDetected.notifyObservers({
            leftApex: leftApex,
            rightApex: rightApex,
            currentPosition: origin,
            currentStepDirection: isApexLeft ? "right" : "left"
        });
    }
    reset() {
        for(let idx = 0; idx < this._samples.length; ++idx){
            this._samples.at(idx).copyFromFloats(0, 0);
        }
    }
    get _samePointCheckStartIdx() {
        return Math.floor(this._samples.length / 3);
    }
    get _samePointSquaredDistanceThreshold() {
        return 0.03 * 0.03;
    }
    get _apexSquaredDistanceThreshold() {
        return 0.09 * 0.09;
    }
    get _squaredProjectionDistanceThreshold() {
        return 0.03 * 0.03;
    }
    get _axisToApexShrinkFactor() {
        return 0.8;
    }
    get _axisToApexExtendFactor() {
        return -1.6;
    }
    get _entropyDecayFactor() {
        return 0.93;
    }
    get _entropyThreshold() {
        return 0.4;
    }
}
class WalkingTracker {
    constructor(leftApex, rightApex, currentPosition, currentStepDirection){
        this._leftApex = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"]();
        this._rightApex = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"]();
        this._currentPosition = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"]();
        this._axis = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"]();
        this._axisLength = -1;
        this._forward = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"]();
        this._steppingLeft = false;
        this._t = -1;
        this._maxT = -1;
        // eslint-disable-next-line @typescript-eslint/naming-convention
        this._maxTPosition = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"]();
        this._vitality = 0;
        this.onMovement = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        this.onFootfall = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        this._reset(leftApex, rightApex, currentPosition, currentStepDirection === "left");
    }
    _reset(leftApex, rightApex, currentPosition, steppingLeft) {
        this._leftApex.copyFrom(leftApex);
        this._rightApex.copyFrom(rightApex);
        this._steppingLeft = steppingLeft;
        if (this._steppingLeft) {
            this._leftApex.subtractToRef(this._rightApex, this._axis);
            this._forward.copyFromFloats(-this._axis.y, this._axis.x);
        } else {
            this._rightApex.subtractToRef(this._leftApex, this._axis);
            this._forward.copyFromFloats(this._axis.y, -this._axis.x);
        }
        this._axisLength = this._axis.length();
        this._forward.scaleInPlace(1 / this._axisLength);
        this._updateTAndVitality(currentPosition.x, currentPosition.y);
        this._maxT = this._t;
        this._maxTPosition.copyFrom(currentPosition);
        this._vitality = 1;
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    _updateTAndVitality(x, y) {
        this._currentPosition.copyFromFloats(x, y);
        if (this._steppingLeft) {
            this._currentPosition.subtractInPlace(this._rightApex);
        } else {
            this._currentPosition.subtractInPlace(this._leftApex);
        }
        const priorT = this._t;
        const dot = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"].Dot(this._currentPosition, this._axis);
        this._t = dot / (this._axisLength * this._axisLength);
        const projDistSquared = this._currentPosition.lengthSquared() - dot / this._axisLength * (dot / this._axisLength);
        // TODO: Extricate the magic.
        this._vitality *= 0.92 - 100 * Math.max(projDistSquared - 0.0016, 0) + Math.max(this._t - priorT, 0);
    }
    update(x, y) {
        if (this._vitality < this._vitalityThreshold) {
            return false;
        }
        const priorT = this._t;
        this._updateTAndVitality(x, y);
        if (this._t > this._maxT) {
            this._maxT = this._t;
            this._maxTPosition.copyFromFloats(x, y);
        }
        if (this._vitality < this._vitalityThreshold) {
            return false;
        }
        if (this._t > priorT) {
            this.onMovement.notifyObservers({
                deltaT: this._t - priorT
            });
            if (priorT < 0.5 && this._t >= 0.5) {
                this.onFootfall.notifyObservers({
                    foot: this._steppingLeft ? "left" : "right"
                });
            }
        }
        if (this._t < 0.95 * this._maxT) {
            this._currentPosition.copyFromFloats(x, y);
            if (this._steppingLeft) {
                this._leftApex.copyFrom(this._maxTPosition);
            } else {
                this._rightApex.copyFrom(this._maxTPosition);
            }
            this._reset(this._leftApex, this._rightApex, this._currentPosition, !this._steppingLeft);
        }
        if (this._axisLength < 0.03) {
            return false;
        }
        return true;
    }
    get _vitalityThreshold() {
        return 0.1;
    }
    get forward() {
        return this._forward;
    }
}
class Walker {
    static get _MillisecondsPerUpdate() {
        // 15 FPS
        return 1000 / 15;
    }
    constructor(engine){
        this._detector = new FirstStepDetector();
        this._walker = null;
        this._movement = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"]();
        this._millisecondsSinceLastUpdate = Walker._MillisecondsPerUpdate;
        this.movementThisFrame = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        this._engine = engine;
        this._detector.onFirstStepDetected.add((event)=>{
            if (!this._walker) {
                this._walker = new WalkingTracker(event.leftApex, event.rightApex, event.currentPosition, event.currentStepDirection);
                this._walker.onFootfall.add(()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Log("Footfall!");
                });
                this._walker.onMovement.add((event)=>{
                    this._walker.forward.scaleAndAddToRef(0.024 * event.deltaT, this._movement);
                });
            }
        });
    }
    update(position, forward) {
        forward.y = 0;
        forward.normalize();
        // Enforce reduced framerate
        this._millisecondsSinceLastUpdate += this._engine.getDeltaTime();
        if (this._millisecondsSinceLastUpdate >= Walker._MillisecondsPerUpdate) {
            this._millisecondsSinceLastUpdate -= Walker._MillisecondsPerUpdate;
            this._detector.update(position.x, position.z, forward.x, forward.z);
            if (this._walker) {
                const updated = this._walker.update(position.x, position.z);
                if (!updated) {
                    this._walker = null;
                }
            }
            this._movement.scaleInPlace(0.85);
        }
        this.movementThisFrame.set(this._movement.x, 0, this._movement.y);
    }
}
class WebXRWalkingLocomotion extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRAbstractFeature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRAbstractFeature"] {
    /**
     * The module's name.
     */ static get Name() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRFeaturesManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRFeatureName"].WALKING_LOCOMOTION;
    }
    /**
     * The (Babylon) version of this module.
     * This is an integer representing the implementation version.
     * This number has no external basis.
     */ static get Version() {
        return 1;
    }
    /**
     * The target to be articulated by walking locomotion.
     * When the walking locomotion feature detects walking in place, this element's
     * X and Z coordinates will be modified to reflect locomotion. This target should
     * be either the XR space's origin (i.e., the parent node of the WebXRCamera) or
     * the WebXRCamera itself. Note that the WebXRCamera path will modify the position
     * of the WebXRCamera directly and is thus discouraged.
     */ get locomotionTarget() {
        return this._locomotionTarget;
    }
    /**
     * The target to be articulated by walking locomotion.
     * When the walking locomotion feature detects walking in place, this element's
     * X and Z coordinates will be modified to reflect locomotion. This target should
     * be either the XR space's origin (i.e., the parent node of the WebXRCamera) or
     * the WebXRCamera itself. Note that the WebXRCamera path will modify the position
     * of the WebXRCamera directly and is thus discouraged.
     */ set locomotionTarget(locomotionTarget) {
        this._locomotionTarget = locomotionTarget;
        this._isLocomotionTargetWebXRCamera = this._locomotionTarget.getClassName() === "WebXRCamera";
    }
    /**
     * Construct a new Walking Locomotion feature.
     * @param sessionManager manager for the current XR session
     * @param options creation options, prominently including the vector target for locomotion
     */ constructor(sessionManager, options){
        super(sessionManager);
        this._up = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]();
        this._forward = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]();
        this._position = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]();
        this._movement = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]();
        this._sessionManager = sessionManager;
        this.locomotionTarget = options.locomotionTarget;
        if (this._isLocomotionTargetWebXRCamera) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn("Using walking locomotion directly on a WebXRCamera may have unintended interactions with other XR techniques. Using an XR space parent is highly recommended");
        }
    }
    /**
     * Checks whether this feature is compatible with the current WebXR session.
     * Walking locomotion is only compatible with "immersive-vr" sessions.
     * @returns true if compatible, false otherwise
     */ isCompatible() {
        return this._sessionManager.sessionMode === undefined || this._sessionManager.sessionMode === "immersive-vr";
    }
    /**
     * Attaches the feature.
     * Typically called automatically by the features manager.
     * @returns true if attach succeeded, false otherwise
     */ attach() {
        if (!this.isCompatible || !super.attach()) {
            return false;
        }
        this._walker = new Walker(this._sessionManager.scene.getEngine());
        return true;
    }
    /**
     * Detaches the feature.
     * Typically called automatically by the features manager.
     * @returns true if detach succeeded, false otherwise
     */ detach() {
        if (!super.detach()) {
            return false;
        }
        this._walker = null;
        return true;
    }
    _onXRFrame(frame) {
        const pose = frame.getViewerPose(this._sessionManager.baseReferenceSpace);
        if (!pose) {
            return;
        }
        const handednessScalar = this.locomotionTarget.getScene().useRightHandedSystem ? 1 : -1;
        const m = pose.transform.matrix;
        this._up.copyFromFloats(m[4], m[5], handednessScalar * m[6]);
        this._forward.copyFromFloats(m[8], m[9], handednessScalar * m[10]);
        this._position.copyFromFloats(m[12], m[13], handednessScalar * m[14]);
        // Compute the nape position
        this._forward.scaleAndAddToRef(0.05, this._position);
        this._up.scaleAndAddToRef(-0.05, this._position);
        this._walker.update(this._position, this._forward);
        this._movement.copyFrom(this._walker.movementThisFrame);
        if (!this._isLocomotionTargetWebXRCamera) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].TransformNormalToRef(this._movement, this.locomotionTarget.getWorldMatrix(), this._movement);
        }
        this.locomotionTarget.position.addInPlace(this._movement);
    }
}
//register the plugin
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRFeaturesManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRFeaturesManager"].AddWebXRFeature(WebXRWalkingLocomotion.Name, (xrSessionManager, options)=>{
    return ()=>new WebXRWalkingLocomotion(xrSessionManager, options);
}, WebXRWalkingLocomotion.Version, false); //# sourceMappingURL=WebXRWalkingLocomotion.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/Layers/WebXRCompositionLayer.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WebXRCompositionLayerRenderTargetTextureProvider",
    ()=>WebXRCompositionLayerRenderTargetTextureProvider,
    "WebXRCompositionLayerWrapper",
    ()=>WebXRCompositionLayerWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRLayerWrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/webXRLayerWrapper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRRenderTargetTextureProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/webXRRenderTargetTextureProvider.js [app-ssr] (ecmascript)");
;
;
;
class WebXRCompositionLayerWrapper extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRLayerWrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRLayerWrapper"] {
    constructor(getWidth, getHeight, layer, layerType, isMultiview, createRTTProvider, _originalInternalTexture = null){
        super(getWidth, getHeight, layer, layerType, createRTTProvider);
        this.getWidth = getWidth;
        this.getHeight = getHeight;
        this.layer = layer;
        this.layerType = layerType;
        this.isMultiview = isMultiview;
        this.createRTTProvider = createRTTProvider;
        this._originalInternalTexture = _originalInternalTexture;
    }
}
class WebXRCompositionLayerRenderTargetTextureProvider extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRRenderTargetTextureProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRLayerRenderTargetTextureProvider"] {
    constructor(_xrSessionManager, _xrWebGLBinding, layerWrapper){
        super(_xrSessionManager.scene, layerWrapper);
        this._xrSessionManager = _xrSessionManager;
        this._xrWebGLBinding = _xrWebGLBinding;
        this.layerWrapper = layerWrapper;
        this._lastSubImages = new Map();
        /**
         * Fires every time a new render target texture is created (either for eye, for view, or for the entire frame)
         */ this.onRenderTargetTextureCreatedObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        this._compositionLayer = layerWrapper.layer;
    }
    _getRenderTargetForSubImage(subImage, eye = "none") {
        const lastSubImage = this._lastSubImages.get(eye);
        const eyeIndex = eye == "right" ? 1 : 0;
        const colorTextureWidth = subImage.colorTextureWidth ?? subImage.textureWidth;
        const colorTextureHeight = subImage.colorTextureHeight ?? subImage.textureHeight;
        if (!this._renderTargetTextures[eyeIndex] || lastSubImage?.textureWidth !== colorTextureWidth || lastSubImage?.textureHeight !== colorTextureHeight) {
            let depthStencilTexture;
            const depthStencilTextureWidth = subImage.depthStencilTextureWidth ?? colorTextureWidth;
            const depthStencilTextureHeight = subImage.depthStencilTextureHeight ?? colorTextureHeight;
            if (colorTextureWidth === depthStencilTextureWidth || colorTextureHeight === depthStencilTextureHeight) {
                depthStencilTexture = subImage.depthStencilTexture;
            }
            this._renderTargetTextures[eyeIndex] = this._createRenderTargetTexture(colorTextureWidth, colorTextureHeight, null, subImage.colorTexture, depthStencilTexture, this.layerWrapper.isMultiview);
            this._framebufferDimensions = {
                framebufferWidth: colorTextureWidth,
                framebufferHeight: colorTextureHeight
            };
            this.onRenderTargetTextureCreatedObservable.notifyObservers({
                texture: this._renderTargetTextures[eyeIndex],
                eye
            });
        }
        this._lastSubImages.set(eye, subImage);
        return this._renderTargetTextures[eyeIndex];
    }
    _getSubImageForEye(eye) {
        const currentFrame = this._xrSessionManager.currentFrame;
        if (currentFrame) {
            return this._xrWebGLBinding.getSubImage(this._compositionLayer, currentFrame, eye);
        }
        return null;
    }
    getRenderTargetTextureForEye(eye) {
        const subImage = this._getSubImageForEye(eye);
        if (subImage) {
            return this._getRenderTargetForSubImage(subImage, eye);
        }
        return null;
    }
    getRenderTargetTextureForView(view) {
        return this.getRenderTargetTextureForEye(view?.eye);
    }
    _setViewportForSubImage(viewport, subImage) {
        const textureWidth = subImage.colorTextureWidth ?? subImage.textureWidth;
        const textureHeight = subImage.colorTextureHeight ?? subImage.textureHeight;
        const xrViewport = subImage.viewport;
        viewport.x = xrViewport.x / textureWidth;
        viewport.y = xrViewport.y / textureHeight;
        viewport.width = xrViewport.width / textureWidth;
        viewport.height = xrViewport.height / textureHeight;
    }
    trySetViewportForView(viewport, view) {
        const subImage = this._lastSubImages.get(view.eye) || this._getSubImageForEye(view.eye);
        if (subImage) {
            this._setViewportForSubImage(viewport, subImage);
            return true;
        }
        return false;
    }
} //# sourceMappingURL=WebXRCompositionLayer.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/Layers/WebXRProjectionLayer.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DefaultXRProjectionLayerInit",
    ()=>DefaultXRProjectionLayerInit,
    "WebXRProjectionLayerWrapper",
    ()=>WebXRProjectionLayerWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$Layers$2f$WebXRCompositionLayer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/Layers/WebXRCompositionLayer.js [app-ssr] (ecmascript)");
;
class WebXRProjectionLayerWrapper extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$Layers$2f$WebXRCompositionLayer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRCompositionLayerWrapper"] {
    constructor(layer, isMultiview, xrGLBinding){
        super(()=>layer.textureWidth, ()=>layer.textureHeight, layer, "XRProjectionLayer", isMultiview, (sessionManager)=>new WebXRProjectionLayerRenderTargetTextureProvider(sessionManager, xrGLBinding, this));
        this.layer = layer;
    }
}
/**
 * Provides render target textures and other important rendering information for a given XRProjectionLayer.
 * @internal
 */ class WebXRProjectionLayerRenderTargetTextureProvider extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$Layers$2f$WebXRCompositionLayer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRCompositionLayerRenderTargetTextureProvider"] {
    constructor(_xrSessionManager, _xrWebGLBinding, layerWrapper){
        super(_xrSessionManager, _xrWebGLBinding, layerWrapper);
        this.layerWrapper = layerWrapper;
        this._projectionLayer = layerWrapper.layer;
    }
    _getSubImageForView(view) {
        return this._xrWebGLBinding.getViewSubImage(this._projectionLayer, view);
    }
    getRenderTargetTextureForView(view) {
        return this._getRenderTargetForSubImage(this._getSubImageForView(view), view.eye);
    }
    getRenderTargetTextureForEye(eye) {
        const lastSubImage = this._lastSubImages.get(eye);
        if (lastSubImage) {
            return this._getRenderTargetForSubImage(lastSubImage, eye);
        }
        return null;
    }
    trySetViewportForView(viewport, view) {
        const subImage = this._lastSubImages.get(view.eye) || this._getSubImageForView(view);
        if (subImage) {
            this._setViewportForSubImage(viewport, subImage);
            return true;
        }
        return false;
    }
}
const DefaultXRProjectionLayerInit = {
    textureType: "texture",
    colorFormat: 0x1908 /* WebGLRenderingContext.RGBA */ ,
    depthFormat: 0x88f0 /* WebGLRenderingContext.DEPTH24_STENCIL8 */ ,
    scaleFactor: 1.0,
    clearOnAccess: false
}; //# sourceMappingURL=WebXRProjectionLayer.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/WebXRLayers.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WebXRLayers",
    ()=>WebXRLayers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRFeaturesManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/webXRFeaturesManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRAbstractFeature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/WebXRAbstractFeature.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRWebGLLayer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/webXRWebGLLayer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$Layers$2f$WebXRProjectionLayer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/Layers/WebXRProjectionLayer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$Layers$2f$WebXRCompositionLayer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/Layers/WebXRCompositionLayer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.color.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
const DefaultXRWebGLLayerInit = {};
class WebXRLayers extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRAbstractFeature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRAbstractFeature"] {
    constructor(_xrSessionManager, _options = {}){
        super(_xrSessionManager);
        this._options = _options;
        /**
         * Already-created layers
         */ this._existingLayers = [];
        this._isMultiviewEnabled = false;
        this._projectionLayerInitialized = false;
        this._compositionLayerTextureMapping = new WeakMap();
        this._layerToRTTProviderMapping = new WeakMap();
        this.xrNativeFeatureName = "layers";
    }
    /**
     * Attach this feature.
     * Will usually be called by the features manager.
     *
     * @returns true if successful.
     */ attach() {
        if (!super.attach()) {
            return false;
        }
        const engine = this._xrSessionManager.scene.getEngine();
        this._glContext = engine._gl;
        this._xrWebGLBinding = new XRWebGLBinding(this._xrSessionManager.session, this._glContext);
        this._existingLayers.length = 0;
        const projectionLayerInit = {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$Layers$2f$WebXRProjectionLayer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DefaultXRProjectionLayerInit"],
            ...this._options.projectionLayerInit
        };
        this._isMultiviewEnabled = this._options.preferMultiviewOnInit && engine.getCaps().multiview;
        this.createProjectionLayer(projectionLayerInit /*, projectionLayerMultiview*/ );
        this._projectionLayerInitialized = true;
        return true;
    }
    detach() {
        if (!super.detach()) {
            return false;
        }
        for (const layer of this._existingLayers){
            layer.dispose();
        }
        this._existingLayers.length = 0;
        this._projectionLayerInitialized = false;
        return true;
    }
    /**
     * Creates a new XRWebGLLayer.
     * @param params an object providing configuration options for the new XRWebGLLayer
     * @returns the XRWebGLLayer
     */ createXRWebGLLayer(params = DefaultXRWebGLLayerInit) {
        const layer = new XRWebGLLayer(this._xrSessionManager.session, this._glContext, params);
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRWebGLLayer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRWebGLLayerWrapper"](layer);
    }
    _validateLayerInit(params, multiview = this._isMultiviewEnabled) {
        // check if we are in session
        if (!this._xrSessionManager.inXRSession) {
            throw new Error("Cannot create a layer outside of a WebXR session. Make sure the session has started before creating layers.");
        }
        if (multiview && params.textureType !== "texture-array") {
            throw new Error("Projection layers can only be made multiview if they use texture arrays. Set the textureType parameter to 'texture-array'.");
        }
        // TODO (rgerd): Support RTT's that are bound to sub-images in the texture array.
        if (!multiview && params.textureType === "texture-array") {
            throw new Error("We currently only support multiview rendering when the textureType parameter is set to 'texture-array'.");
        }
    }
    _extendXRLayerInit(params, multiview = this._isMultiviewEnabled) {
        if (multiview) {
            params.textureType = "texture-array";
        }
        return params;
    }
    /**
     * Creates a new XRProjectionLayer.
     * @param params an object providing configuration options for the new XRProjectionLayer.
     * @param multiview whether the projection layer should render with multiview. Will be tru automatically if the extension initialized with multiview.
     * @returns the projection layer
     */ createProjectionLayer(params = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$Layers$2f$WebXRProjectionLayer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DefaultXRProjectionLayerInit"], multiview = this._isMultiviewEnabled) {
        this._extendXRLayerInit(params, multiview);
        this._validateLayerInit(params, multiview);
        const projLayer = this._xrWebGLBinding.createProjectionLayer(params);
        const layer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$Layers$2f$WebXRProjectionLayer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRProjectionLayerWrapper"](projLayer, multiview, this._xrWebGLBinding);
        this.addXRSessionLayer(layer);
        return layer;
    }
    /**
     * Note about making it private - this function will be exposed once I decide on a proper API to support all of the XR layers' options
     * @param options an object providing configuration options for the new XRQuadLayer.
     * @param babylonTexture the texture to display in the layer
     * @returns the quad layer
     */ _createQuadLayer(options = {
        params: {}
    }, babylonTexture) {
        this._extendXRLayerInit(options.params, false);
        const width = this._existingLayers[0].layer.textureWidth;
        const height = this._existingLayers[0].layer.textureHeight;
        const populatedParams = {
            space: this._xrSessionManager.referenceSpace,
            viewPixelWidth: width,
            viewPixelHeight: height,
            clearOnAccess: true,
            ...options.params
        };
        this._validateLayerInit(populatedParams, false);
        const quadLayer = this._xrWebGLBinding.createQuadLayer(populatedParams);
        quadLayer.width = this._isMultiviewEnabled ? 1 : 2;
        quadLayer.height = 1;
        // this wrapper is not really needed, but it's here for consistency
        const wrapper = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$Layers$2f$WebXRCompositionLayer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRCompositionLayerWrapper"](()=>quadLayer.width, ()=>quadLayer.height, quadLayer, "XRQuadLayer", false, (sessionManager)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$Layers$2f$WebXRCompositionLayer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRCompositionLayerRenderTargetTextureProvider"](sessionManager, this._xrWebGLBinding, wrapper));
        if (babylonTexture) {
            this._compositionLayerTextureMapping.set(quadLayer, babylonTexture);
        }
        const rtt = wrapper.createRenderTargetTextureProvider(this._xrSessionManager);
        this._layerToRTTProviderMapping.set(quadLayer, rtt);
        this.addXRSessionLayer(wrapper);
        return wrapper;
    }
    /**
     * @experimental
     * This will support full screen ADT when used with WebXR Layers. This API might change in the future.
     * Note that no interaction will be available with the ADT when using this method
     * @param texture the texture to display in the layer
     * @param options optional parameters for the layer
     * @returns a composition layer containing the texture
     */ addFullscreenAdvancedDynamicTexture(texture, options = {
        distanceFromHeadset: 1.5
    }) {
        const wrapper = this._createQuadLayer({
            params: {
                space: this._xrSessionManager.viewerReferenceSpace,
                textureType: "texture",
                layout: "mono"
            }
        }, texture);
        const layer = wrapper.layer;
        const distance = Math.max(0.1, options.distanceFromHeadset);
        const pos = {
            x: 0,
            y: 0,
            z: -distance
        };
        const orient = {
            x: 0,
            y: 0,
            z: 0,
            w: 1
        };
        layer.transform = new XRRigidTransform(pos, orient);
        const rttProvider = this._layerToRTTProviderMapping.get(layer);
        if (!rttProvider) {
            throw new Error("Could not find the RTT provider for the layer");
        }
        const babylonLayer = this._xrSessionManager.scene.layers.find((babylonLayer)=>{
            return babylonLayer.texture === texture;
        });
        if (!babylonLayer) {
            throw new Error("Could not find the babylon layer for the texture");
        }
        rttProvider.onRenderTargetTextureCreatedObservable.add((data)=>{
            if (data.eye && data.eye === "right") {
                return;
            }
            data.texture.clearColor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color4"](0, 0, 0, 0);
            babylonLayer.renderTargetTextures.push(data.texture);
            babylonLayer.renderOnlyInRenderTargetTextures = true;
            // for stereo (not for gui) it should be onBeforeCameraRenderObservable
            this._xrSessionManager.scene.onBeforeRenderObservable.add(()=>{
                data.texture.render();
            });
            babylonLayer.renderTargetTextures.push(data.texture);
            babylonLayer.renderOnlyInRenderTargetTextures = true;
            // add it back when the session ends
            this._xrSessionManager.onXRSessionEnded.addOnce(()=>{
                babylonLayer.renderTargetTextures.splice(babylonLayer.renderTargetTextures.indexOf(data.texture), 1);
                babylonLayer.renderOnlyInRenderTargetTextures = false;
            });
        });
        return wrapper;
    }
    /**
     * @experimental
     * This functions allows you to add a lens flare system to the XR scene.
     * Note - this will remove the lens flare system from the scene and add it to the XR scene.
     * This feature is experimental and might change in the future.
     * @param flareSystem the flare system to add
     * @returns a composition layer containing the flare system
     */ _addLensFlareSystem(flareSystem) {
        const wrapper = this._createQuadLayer({
            params: {
                space: this._xrSessionManager.viewerReferenceSpace,
                textureType: "texture",
                layout: "mono"
            }
        });
        const layer = wrapper.layer;
        layer.width = 2;
        layer.height = 1;
        const distance = 10;
        const pos = {
            x: 0,
            y: 0,
            z: -distance
        };
        const orient = {
            x: 0,
            y: 0,
            z: 0,
            w: 1
        };
        layer.transform = new XRRigidTransform(pos, orient);
        // get the rtt wrapper
        const rttProvider = this._layerToRTTProviderMapping.get(layer);
        if (!rttProvider) {
            throw new Error("Could not find the RTT provider for the layer");
        }
        // render the flare system to the rtt
        rttProvider.onRenderTargetTextureCreatedObservable.add((data)=>{
            data.texture.clearColor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color4"](0, 0, 0, 0);
            data.texture.customRenderFunction = ()=>{
                flareSystem.render();
            };
        // add to the scene's render targets
        // this._xrSessionManager.scene.onBeforeCameraRenderObservable.add(() => {
        //     data.texture.render();
        // });
        });
        // remove the lens flare system from the scene
        this._xrSessionManager.onXRSessionInit.add(()=>{
            this._xrSessionManager.scene.lensFlareSystems.splice(this._xrSessionManager.scene.lensFlareSystems.indexOf(flareSystem), 1);
        });
        // add it back when the session ends
        this._xrSessionManager.onXRSessionEnded.add(()=>{
            this._xrSessionManager.scene.lensFlareSystems.push(flareSystem);
        });
        return wrapper;
    }
    /**
     * Add a new layer to the already-existing list of layers
     * @param wrappedLayer the new layer to add to the existing ones
     */ addXRSessionLayer(wrappedLayer) {
        this._existingLayers.push(wrappedLayer);
        this.setXRSessionLayers(this._existingLayers);
    }
    /**
     * Sets the layers to be used by the XR session.
     * Note that you must call this function with any layers you wish to render to
     * since it adds them to the XR session's render state
     * (replacing any layers that were added in a previous call to setXRSessionLayers or updateRenderState).
     * This method also sets up the session manager's render target texture provider
     * as the first layer in the array, which feeds the WebXR camera(s) attached to the session.
     * @param wrappedLayers An array of WebXRLayerWrapper, usually returned from the WebXRLayers createLayer functions.
     */ setXRSessionLayers(wrappedLayers = this._existingLayers) {
        // this._existingLayers = wrappedLayers;
        const renderStateInit = {
            ...this._xrSessionManager.session.renderState
        };
        // Clear out the layer-related fields.
        renderStateInit.baseLayer = undefined;
        renderStateInit.layers = wrappedLayers.map((wrappedLayer)=>wrappedLayer.layer);
        this._xrSessionManager.updateRenderState(renderStateInit);
        if (!this._projectionLayerInitialized) {
            this._xrSessionManager._setBaseLayerWrapper(wrappedLayers.length > 0 ? wrappedLayers.at(0) : null);
        }
    }
    isCompatible() {
        // TODO (rgerd): Add native support.
        return !this._xrSessionManager.isNative && typeof XRWebGLBinding !== "undefined" && !!XRWebGLBinding.prototype.createProjectionLayer;
    }
    /**
     * Dispose this feature and all of the resources attached.
     */ dispose() {
        super.dispose();
    }
    _onXRFrame(_xrFrame) {
        // Replace once the mapped internal texture of each available composition layer, apart from the last one, which is the projection layer that needs an RTT
        const layers = this._existingLayers;
        for(let i = 0; i < layers.length; ++i){
            const layer = layers[i];
            if (layer.layerType !== "XRProjectionLayer") {
                // get the rtt provider
                const rttProvider = this._layerToRTTProviderMapping.get(layer.layer);
                if (!rttProvider) {
                    continue;
                }
                if (rttProvider.layerWrapper.isMultiview) {
                    // get the views, if we are in multiview
                    const pose = _xrFrame.getViewerPose(this._xrSessionManager.referenceSpace);
                    if (pose) {
                        const views = pose.views;
                        for(let j = 0; j < views.length; ++j){
                            const view = views[j];
                            rttProvider.getRenderTargetTextureForView(view);
                        }
                    }
                } else {
                    rttProvider.getRenderTargetTextureForView();
                }
            }
        }
    }
}
/**
 * The module's name
 */ WebXRLayers.Name = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRFeaturesManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRFeatureName"].LAYERS;
/**
 * The (Babylon) version of this module.
 * This is an integer representing the implementation version.
 * This number does not correspond to the WebXR specs version
 */ WebXRLayers.Version = 1;
//register the plugin
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRFeaturesManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRFeaturesManager"].AddWebXRFeature(WebXRLayers.Name, (xrSessionManager, options)=>{
    return ()=>new WebXRLayers(xrSessionManager, options);
}, WebXRLayers.Version, false); //# sourceMappingURL=WebXRLayers.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/WebXRDepthSensing.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WebXRDepthSensing",
    ()=>WebXRDepthSensing
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$rawTexture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/rawTexture.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRFeaturesManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/webXRFeaturesManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRAbstractFeature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/WebXRAbstractFeature.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/tools.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/texture.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGL$2f$webGLHardwareTexture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGL/webGLHardwareTexture.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialPluginBase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialPluginBase.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialDefines$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialDefines.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrBaseMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/PBR/pbrBaseMaterial.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialPluginManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialPluginManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
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
class DepthSensingMaterialDefines extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialDefines$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialDefines"] {
    constructor(){
        super(...arguments);
        /**
         * Is the feature enabled
         */ this.DEPTH_SENSING = false;
        /**
         * Is the texture type provided as a texture array
         */ this.DEPTH_SENSING_TEXTURE_ARRAY = false;
        /**
         * Is the texture type provided as Alpha-Luminance (unpacked differently on the shader)
         */ this.DEPTH_SENSING_TEXTURE_AL = false;
        /**
         * Should the shader discard the pixel if the depth is less than the asset depth
         * Will lead to better performance. the other variant is to change the color based on a tolerance factor
         */ this.DEPTH_SENSING_DISCARD = true;
    }
}
let IsPluginEnabled = false;
let DepthTexture = null;
let AlphaLuminanceTexture = false;
const ScreenSize = {
    width: 512,
    height: 512
};
const ShaderViewport = {
    x: 0,
    y: 0,
    width: 1,
    height: 1
};
let GlobalRawValueToMeters = 1;
let ViewIndex = 0;
let EnableDiscard = true;
const UvTransform = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].Identity();
const ManagedMaterialPlugins = [];
/**
 * @internal
 */ class WebXRDepthSensingMaterialPlugin extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialPluginBase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialPluginBase"] {
    /** @internal */ _markAllDefinesAsDirty() {
        this._enable(this._isEnabled);
        this.markAllDefinesAsDirty();
    }
    /**
     * Gets whether the mesh debug plugin is enabled in the material.
     */ get isEnabled() {
        return this._isEnabled;
    }
    /**
     * Sets whether the mesh debug plugin is enabled in the material.
     * @param value enabled
     */ set isEnabled(value) {
        if (this._isEnabled === value) {
            return;
        }
        this._isEnabled = value;
        this._markAllDefinesAsDirty();
    }
    /**
     * Gets a boolean indicating that the plugin is compatible with a given shader language.
     * @param shaderLanguage The shader language to use.
     * @returns true if the plugin is compatible with the shader language
     */ isCompatible(shaderLanguage) {
        switch(shaderLanguage){
            case 0 /* ShaderLanguage.GLSL */ :
                return true;
            default:
                // no webgpu for webxr yet, however - if this is not true the plugin fails to load.
                // webxr is currently only supported on webgl, and the plugin is disabled per default.
                return true;
        }
    }
    constructor(material){
        super(material, "DepthSensing", 222, new DepthSensingMaterialDefines());
        this._isEnabled = false;
        this._varColorName = material instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrBaseMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PBRBaseMaterial"] ? "finalColor" : "color";
        this.doNotSerialize = true;
        ManagedMaterialPlugins.push(this);
    }
    /**
     * Prepare the defines
     * @param defines the defines
     */ prepareDefines(defines) {
        defines.DEPTH_SENSING = !!DepthTexture && IsPluginEnabled;
        defines.DEPTH_SENSING_TEXTURE_ARRAY = DepthTexture?.is2DArray ?? false;
        defines.DEPTH_SENSING_TEXTURE_AL = AlphaLuminanceTexture;
        defines.DEPTH_SENSING_DISCARD = EnableDiscard;
    }
    getUniforms() {
        return {
            // first, define the UBO with the correct type and size.
            ubo: [
                {
                    name: "ds_invScreenSize",
                    size: 2,
                    type: "vec2"
                },
                {
                    name: "ds_rawValueToMeters",
                    size: 1,
                    type: "float"
                },
                {
                    name: "ds_viewIndex",
                    size: 1,
                    type: "float"
                },
                {
                    name: "ds_shaderViewport",
                    size: 4,
                    type: "vec4"
                },
                {
                    name: "ds_uvTransform",
                    size: 16,
                    type: "mat4"
                }
            ],
            // now, on the fragment shader, add the uniform itself in case uniform buffers are not supported by the engine
            fragment: `#ifdef DEPTH_SENSING
                uniform vec2 ds_invScreenSize;
                uniform float ds_rawValueToMeters;
                uniform float ds_viewIndex;
                uniform vec4 ds_shaderViewport;
                uniform mat4 ds_uvTransform;
                #endif
                `
        };
    }
    getSamplers(samplers) {
        samplers.push("ds_depthSampler");
    }
    bindForSubMesh(uniformBuffer) {
        if (IsPluginEnabled && DepthTexture) {
            uniformBuffer.updateFloat2("ds_invScreenSize", 1 / ScreenSize.width, 1 / ScreenSize.height);
            uniformBuffer.updateFloat("ds_rawValueToMeters", GlobalRawValueToMeters);
            uniformBuffer.updateFloat("ds_viewIndex", ViewIndex);
            uniformBuffer.updateFloat4("ds_shaderViewport", ShaderViewport.x, ShaderViewport.y, ShaderViewport.width, ShaderViewport.height);
            uniformBuffer.setTexture("ds_depthSampler", DepthTexture);
            uniformBuffer.updateMatrix("ds_uvTransform", UvTransform);
        }
    }
    getClassName() {
        return "DepthSensingMaterialPlugin";
    }
    getCustomCode(shaderType) {
        return shaderType === "vertex" ? {
            CUSTOM_VERTEX_MAIN_BEGIN: `
                #ifdef DEPTH_SENSING
                #ifdef MULTIVIEW
                    ds_viewIndexMultiview = float(gl_ViewID_OVR);
                #endif
                #endif
                `,
            CUSTOM_VERTEX_DEFINITIONS: `
                #ifdef DEPTH_SENSING
                #ifdef MULTIVIEW
                    varying float ds_viewIndexMultiview;
                #endif
                #endif
                `
        } : {
            CUSTOM_FRAGMENT_DEFINITIONS: `
                    #ifdef DEPTH_SENSING
                        #ifdef DEPTH_SENSING_TEXTURE_ARRAY
                            uniform highp sampler2DArray ds_depthSampler;
                        #else
                            uniform sampler2D ds_depthSampler;
                        #endif
                        #ifdef MULTIVIEW
                            varying float ds_viewIndexMultiview;
                        #endif
                    #endif
                  `,
            CUSTOM_FRAGMENT_MAIN_BEGIN: `
#ifdef DEPTH_SENSING
    #ifdef MULTIVIEW
        float ds_viewIndexSet = ds_viewIndexMultiview;
        vec2 ds_compensation = vec2(0.0, 0.0);
    #else
        float ds_viewIndexSet = ds_viewIndex;
        vec2 ds_compensation = vec2(ds_viewIndexSet, 0.0);
    #endif
    vec2 ds_baseUv = gl_FragCoord.xy * ds_invScreenSize;
    #ifdef DEPTH_SENSING_TEXTURE_ARRAY
        vec2 ds_uv = ds_baseUv - ds_compensation;
        vec3 ds_depthUv = vec3((ds_uvTransform * vec4(ds_uv, 0.0, 1.0)).xy, ds_viewIndexSet);
    #else
        vec2 ds_depthUv = (ds_uvTransform * vec4(ds_baseUv.x, 1.0 - ds_baseUv.y, 0.0, 1.0)).xy;
    #endif
    #ifdef DEPTH_SENSING_TEXTURE_AL
        // from alpha-luminance - taken from the explainer
        vec2 ds_alphaLuminance = texture(ds_depthSampler, ds_depthUv).ra;
        float ds_cameraDepth = dot(ds_alphaLuminance, vec2(255.0, 256.0 * 255.0));
    #else
        float ds_cameraDepth = texture(ds_depthSampler, ds_depthUv).r;
    #endif

    ds_cameraDepth = ds_cameraDepth * ds_rawValueToMeters;

    float ds_assetDepth = gl_FragCoord.z;
    #ifdef DEPTH_SENSING_DISCARD
    if(ds_cameraDepth < ds_assetDepth) {
        discard;
    }
    #endif
#endif  
                  `,
            CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: `
#ifdef DEPTH_SENSING
    #ifndef DEPTH_SENSING_DISCARD
        const float ds_depthTolerancePerM = 0.005;
        float ds_occlusion = clamp(1.0 - 0.5 * (ds_cameraDepth - ds_assetDepth) / (ds_depthTolerancePerM * ds_assetDepth) +
            0.5, 0.0, 1.0);
        ${this._varColorName} *= (1.0 - ds_occlusion);
    #endif
#endif                  
                  `
        };
    }
    dispose(_forceDisposeTextures) {
        const index = ManagedMaterialPlugins.indexOf(this);
        if (index !== -1) {
            ManagedMaterialPlugins.splice(index, 1);
        }
        super.dispose(_forceDisposeTextures);
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])(`BABYLON.DepthSensingMaterialPlugin`, WebXRDepthSensingMaterialPlugin);
class WebXRDepthSensing extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRAbstractFeature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRAbstractFeature"] {
    /**
     * Width of depth data. If depth data is not exist, returns null.
     */ get width() {
        return this._width;
    }
    /**
     * Height of depth data. If depth data is not exist, returns null.
     */ get height() {
        return this._height;
    }
    /**
     * Scale factor by which the raw depth values must be multiplied in order to get the depths in meters.
     */ get rawValueToMeters() {
        return this._rawValueToMeters;
    }
    /**
     * An XRRigidTransform that needs to be applied when indexing into the depth buffer.
     */ get normDepthBufferFromNormView() {
        return this._normDepthBufferFromNormView;
    }
    /**
     * Describes which depth-sensing usage ("cpu" or "gpu") is used.
     */ get depthUsage() {
        switch(this._xrSessionManager.session.depthUsage){
            case "cpu-optimized":
                return "cpu";
            case "gpu-optimized":
                return "gpu";
        }
    }
    /**
     * Describes which depth sensing data format ("ushort" or "float") is used.
     */ get depthDataFormat() {
        switch(this._xrSessionManager.session.depthDataFormat){
            case "luminance-alpha":
                return "ushort";
            case "float32":
                return "float";
            case "unsigned-short":
                return "ushort";
        }
    }
    /**
     * Latest cached InternalTexture which containing depth buffer information.
     * This can be used when the depth usage is "gpu".
     * @deprecated This will be removed in the future. Use latestDepthImageTexture
     */ get latestInternalTexture() {
        if (!this._cachedWebGLTexture) {
            return null;
        }
        return this._getInternalTextureFromDepthInfo();
    }
    /**
     * cached depth buffer
     */ get latestDepthBuffer() {
        if (!this._cachedDepthBuffer) {
            return null;
        }
        return this.depthDataFormat === "float" ? new Float32Array(this._cachedDepthBuffer) : new Uint16Array(this._cachedDepthBuffer);
    }
    /**
     * Latest cached Texture of depth image which is made from the depth buffer data.
     */ get latestDepthImageTexture() {
        return this._cachedDepthImageTexture;
    }
    /**
     * Creates a new instance of the depth sensing feature
     * @param _xrSessionManager the WebXRSessionManager
     * @param options options for WebXR Depth Sensing Feature
     */ constructor(_xrSessionManager, options){
        super(_xrSessionManager);
        this.options = options;
        this._width = null;
        this._height = null;
        this._rawValueToMeters = null;
        this._textureType = null;
        this._normDepthBufferFromNormView = null;
        this._cachedDepthBuffer = null;
        this._cachedWebGLTexture = null;
        this._cachedDepthImageTexture = null;
        this._onCameraObserver = null;
        /**
         * Event that notify when `DepthInformation.getDepthInMeters` is available.
         * `getDepthInMeters` method needs active XRFrame (not available for cached XRFrame)
         */ this.onGetDepthInMetersAvailable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        this.xrNativeFeatureName = "depth-sensing";
        // https://immersive-web.github.io/depth-sensing/
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tools"].Warn("depth-sensing is an experimental and unstable feature.");
        EnableDiscard = !options.useToleranceFactorForDepthSensing;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialPluginManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterMaterialPlugin"])("WebXRDepthSensingMaterialPlugin", (material)=>new WebXRDepthSensingMaterialPlugin(material));
    }
    /**
     * attach this feature
     * Will usually be called by the features manager
     * @param force should attachment be forced (even when already attached)
     * @returns true if successful.
     */ attach(force) {
        if (!super.attach(force)) {
            return false;
        }
        const isBothDepthUsageAndFormatNull = this._xrSessionManager.session.depthDataFormat == null || this._xrSessionManager.session.depthUsage == null;
        if (isBothDepthUsageAndFormatNull) {
            return false;
        }
        this._glBinding = new XRWebGLBinding(this._xrSessionManager.session, this._xrSessionManager.scene.getEngine()._gl);
        IsPluginEnabled = !this.options.disableDepthSensingOnMaterials;
        if (IsPluginEnabled) {
            for (const plugin of ManagedMaterialPlugins){
                plugin.isEnabled = true;
            }
            this._onCameraObserver = this._xrSessionManager.scene.onBeforeCameraRenderObservable.add((camera)=>{
                if (!IsPluginEnabled) {
                    return;
                }
                // make sure this is a webxr camera
                if (camera.outputRenderTarget) {
                    const viewport = camera.rigCameras.length > 0 ? camera.rigCameras[0].viewport : camera.viewport;
                    ScreenSize.width = camera.outputRenderTarget.getRenderWidth() / (camera.rigParent ? camera.rigParent.rigCameras.length || 1 : 1);
                    ScreenSize.height = camera.outputRenderTarget.getRenderHeight();
                    ShaderViewport.x = viewport.x;
                    ShaderViewport.y = viewport.y;
                    ShaderViewport.width = viewport.width;
                    ShaderViewport.height = viewport.height;
                    // find the viewIndex
                    if (camera.rigParent) {
                        // should use the viewIndexes array!
                        ViewIndex = camera.isLeftCamera ? 0 : 1;
                    }
                }
            });
        }
        return true;
    }
    detach() {
        IsPluginEnabled = false;
        DepthTexture = null;
        this._cachedWebGLTexture = null;
        this._cachedDepthBuffer = null;
        for (const plugin of ManagedMaterialPlugins){
            plugin.isEnabled = false;
        }
        if (this._onCameraObserver) {
            this._xrSessionManager.scene.onBeforeCameraRenderObservable.remove(this._onCameraObserver);
        }
        return super.detach();
    }
    /**
     * Dispose this feature and all of the resources attached
     */ dispose() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialPluginManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnregisterMaterialPlugin"])("WebXRDepthSensingMaterialPlugin");
        this._cachedDepthImageTexture?.dispose();
        this.onGetDepthInMetersAvailable.clear();
        // cleanup
        if (this._onCameraObserver) {
            this._xrSessionManager.scene.onBeforeCameraRenderObservable.remove(this._onCameraObserver);
        }
        for (const plugin of ManagedMaterialPlugins){
            plugin.dispose();
        }
        ManagedMaterialPlugins.length = 0;
    }
    _onXRFrame(_xrFrame) {
        const referenceSPace = this._xrSessionManager.referenceSpace;
        const pose = _xrFrame.getViewerPose(referenceSPace);
        if (pose == null) {
            return;
        }
        for (const view of pose.views){
            switch(this.depthUsage){
                case "cpu":
                    this._updateDepthInformationAndTextureCPUDepthUsage(_xrFrame, view, this.depthDataFormat);
                    break;
                case "gpu":
                    if (!this._glBinding) {
                        break;
                    }
                    this._updateDepthInformationAndTextureWebGLDepthUsage(this._glBinding, view, this.depthDataFormat);
                    break;
                default:
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tools"].Error("Unknown depth usage");
                    this.detach();
                    break;
            }
        }
    }
    _updateDepthInformationAndTextureCPUDepthUsage(frame, view, dataFormat) {
        const depthInfo = frame.getDepthInformation(view);
        if (depthInfo === null) {
            return;
        }
        const { data, width, height, rawValueToMeters, getDepthInMeters, normDepthBufferFromNormView } = depthInfo;
        this._width = width;
        this._height = height;
        this._rawValueToMeters = rawValueToMeters;
        this._cachedDepthBuffer = data;
        GlobalRawValueToMeters = rawValueToMeters;
        AlphaLuminanceTexture = dataFormat === "luminance-alpha";
        UvTransform.fromArray(normDepthBufferFromNormView.matrix);
        // to avoid Illegal Invocation error, bind `this`
        this.onGetDepthInMetersAvailable.notifyObservers(getDepthInMeters.bind(depthInfo));
        if (!this._cachedDepthImageTexture) {
            this._cachedDepthImageTexture = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$rawTexture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RawTexture"].CreateRTexture(null, width, height, this._xrSessionManager.scene, false, false, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Texture"].NEAREST_SAMPLINGMODE, 1);
            DepthTexture = this._cachedDepthImageTexture;
        }
        let float32Array = null;
        switch(dataFormat){
            case "ushort":
            case "luminance-alpha":
                float32Array = Float32Array.from(new Uint16Array(data));
                break;
            case "float":
                float32Array = new Float32Array(data);
                break;
            default:
                break;
        }
        if (float32Array) {
            if (this.options.prepareTextureForVisualization) {
                float32Array = float32Array.map((val)=>val * rawValueToMeters);
            }
            this._cachedDepthImageTexture.update(float32Array);
        }
    }
    _updateDepthInformationAndTextureWebGLDepthUsage(webglBinding, view, dataFormat) {
        const depthInfo = webglBinding.getDepthInformation(view);
        if (depthInfo === null) {
            return;
        }
        const { texture, width, height, textureType, rawValueToMeters, normDepthBufferFromNormView } = depthInfo;
        GlobalRawValueToMeters = rawValueToMeters;
        AlphaLuminanceTexture = dataFormat === "luminance-alpha";
        UvTransform.fromArray(normDepthBufferFromNormView.matrix);
        if (this._cachedWebGLTexture) {
            return;
        }
        this._width = width;
        this._height = height;
        this._cachedWebGLTexture = texture;
        this._textureType = textureType;
        const scene = this._xrSessionManager.scene;
        const internalTexture = this._getInternalTextureFromDepthInfo();
        if (!this._cachedDepthImageTexture) {
            this._cachedDepthImageTexture = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$rawTexture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RawTexture"].CreateRTexture(null, width, height, scene, false, true, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Texture"].NEAREST_SAMPLINGMODE, dataFormat === "float" ? 1 : 0);
        }
        this._cachedDepthImageTexture._texture = internalTexture;
        DepthTexture = this._cachedDepthImageTexture;
        this._xrSessionManager.scene.markAllMaterialsAsDirty(1);
    }
    /**
     * Extends the session init object if needed
     * @returns augmentation object for the xr session init object.
     */ async getXRSessionInitExtension() {
        const isDepthUsageDeclared = this.options.usagePreference != null && this.options.usagePreference.length !== 0;
        const isDataFormatDeclared = this.options.dataFormatPreference != null && this.options.dataFormatPreference.length !== 0;
        return await new Promise((resolve)=>{
            if (isDepthUsageDeclared && isDataFormatDeclared) {
                const usages = this.options.usagePreference.map((usage)=>{
                    switch(usage){
                        case "cpu":
                            return "cpu-optimized";
                        case "gpu":
                            return "gpu-optimized";
                    }
                });
                const dataFormats = this.options.dataFormatPreference.map((format)=>{
                    switch(format){
                        case "luminance-alpha":
                            return "luminance-alpha";
                        case "float":
                            return "float32";
                        case "ushort":
                            return "unsigned-short";
                    }
                });
                resolve({
                    depthSensing: {
                        usagePreference: usages,
                        dataFormatPreference: dataFormats
                    }
                });
            } else {
                resolve({});
            }
        });
    }
    _getInternalTextureFromDepthInfo() {
        const engine = this._xrSessionManager.scene.getEngine();
        const dataFormat = this.depthDataFormat;
        const textureType = this._textureType;
        if (!this._width || !this._height || !this._cachedWebGLTexture) {
            throw new Error("Depth information is not available");
        }
        const internalTexture = engine.wrapWebGLTexture(this._cachedWebGLTexture, false, 1, this._width || 256, this._height || 256);
        internalTexture.isCube = false;
        internalTexture.invertY = false;
        internalTexture._useSRGBBuffer = false;
        internalTexture.format = dataFormat === "luminance-alpha" ? 2 : 5;
        internalTexture.generateMipMaps = false;
        internalTexture.type = dataFormat === "float" ? 1 : dataFormat === "ushort" ? 5 : 0;
        internalTexture._cachedWrapU = 1;
        internalTexture._cachedWrapV = 1;
        internalTexture._hardwareTexture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGL$2f$webGLHardwareTexture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebGLHardwareTexture"](this._cachedWebGLTexture, engine._gl);
        internalTexture.is2DArray = textureType === "texture-array";
        return internalTexture;
    }
}
/**
 * The module's name
 */ WebXRDepthSensing.Name = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRFeaturesManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRFeatureName"].DEPTH_SENSING;
/**
 * The (Babylon) version of this module.
 * This is an integer representing the implementation version.
 * This number does not correspond to the WebXR specs version
 */ WebXRDepthSensing.Version = 1;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRFeaturesManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRFeaturesManager"].AddWebXRFeature(WebXRDepthSensing.Name, (xrSessionManager, options)=>{
    return ()=>new WebXRDepthSensing(xrSessionManager, options);
}, WebXRDepthSensing.Version, false); //# sourceMappingURL=WebXRDepthSensing.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/WebXRSpaceWarp.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WebXRSpaceWarp",
    ()=>WebXRSpaceWarp,
    "WebXRSpaceWarpRenderTargetTextureProvider",
    ()=>WebXRSpaceWarpRenderTargetTextureProvider,
    "XRSpaceWarpRenderTarget",
    ()=>XRSpaceWarpRenderTarget
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRFeaturesManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/webXRFeaturesManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRAbstractFeature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/WebXRAbstractFeature.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$renderTargetTexture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/renderTargetTexture.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$shaderMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/shaderMaterial.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$velocity$2e$fragment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/velocity.fragment.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$velocity$2e$vertex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/velocity.vertex.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
class XRSpaceWarpRenderTarget extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$renderTargetTexture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RenderTargetTexture"] {
    /**
     * Creates a Space Warp render target
     * @param motionVectorTexture WebGLTexture provided by WebGLSubImage
     * @param depthStencilTexture WebGLTexture provided by WebGLSubImage
     * @param scene scene used with the render target
     * @param size the size of the render target (used for each view)
     */ constructor(motionVectorTexture, depthStencilTexture, scene, size = 512){
        super("spacewarp rtt", size, scene, false, true, 2, false, undefined, false, false, true, undefined, true);
        this._originalPairing = [];
        this._previousWorldMatrices = [];
        this._previousTransforms = [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].Identity(),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].Identity()
        ];
        this._renderTarget = this.getScene().getEngine().createMultiviewRenderTargetTexture(this.getRenderWidth(), this.getRenderHeight(), motionVectorTexture, depthStencilTexture);
        this._renderTarget._disposeOnlyFramebuffers = true;
        this._texture = this._renderTarget.texture;
        this._texture.isMultiview = true;
        this._texture.format = 5;
        if (scene) {
            this._velocityMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$shaderMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderMaterial"]("velocity shader material", scene, {
                vertex: "velocity",
                fragment: "velocity"
            }, {
                uniforms: [
                    "world",
                    "previousWorld",
                    "viewProjection",
                    "viewProjectionR",
                    "previousViewProjection",
                    "previousViewProjectionR"
                ]
            });
            this._velocityMaterial._materialHelperNeedsPreviousMatrices = true;
            this._velocityMaterial.onBindObservable.add((mesh)=>{
                // mesh. getWorldMatrix can be incorrect under rare conditions (e.g. when using a effective mesh in the render function).
                // If the case arise that will require changing it we will need to change the bind process in the material class to also provide the world matrix as a parameter
                this._previousWorldMatrices[mesh.uniqueId] = this._previousWorldMatrices[mesh.uniqueId] || mesh.getWorldMatrix();
                this._velocityMaterial.getEffect().setMatrix("previousWorld", this._previousWorldMatrices[mesh.uniqueId]);
                this._previousWorldMatrices[mesh.uniqueId] = mesh.getWorldMatrix();
                // now set the scene's previous matrix
                this._velocityMaterial.getEffect().setMatrix("previousViewProjection", this._previousTransforms[0]);
                // multiview for sure
                this._velocityMaterial.getEffect().setMatrix("previousViewProjectionR", this._previousTransforms[1]);
                // store the previous (current, to be exact) transforms
                this._previousTransforms[0].copyFrom(scene.getTransformMatrix());
                this._previousTransforms[1].copyFrom(scene._transformMatrixR);
            });
            this._velocityMaterial.freeze();
        }
    }
    render(useCameraPostProcess = false, dumpForDebug = false) {
        // Swap to use velocity material
        this._originalPairing.length = 0;
        const scene = this.getScene();
        // set the velocity material to render the velocity RTT
        if (scene && this._velocityMaterial) {
            scene.getActiveMeshes().forEach((mesh)=>{
                this._originalPairing.push([
                    mesh,
                    mesh.material
                ]);
                mesh.material = this._velocityMaterial;
            });
        }
        super.render(useCameraPostProcess, dumpForDebug);
        // Restore original materials
        for (const tuple of this._originalPairing){
            tuple[0].material = tuple[1];
        }
    }
    /**
     * @internal
     */ _bindFrameBuffer() {
        if (!this._renderTarget) {
            return;
        }
        this.getScene().getEngine().bindSpaceWarpFramebuffer(this._renderTarget);
    }
    /**
     * Gets the number of views the corresponding to the texture (eg. a SpaceWarpRenderTarget will have > 1)
     * @returns the view count
     */ getViewCount() {
        return 2;
    }
    dispose() {
        super.dispose();
        this._velocityMaterial.dispose();
        this._previousTransforms.length = 0;
        this._previousWorldMatrices.length = 0;
        this._originalPairing.length = 0;
    }
}
class WebXRSpaceWarpRenderTargetTextureProvider {
    constructor(_scene, _xrSessionManager, _xrWebGLBinding){
        this._scene = _scene;
        this._xrSessionManager = _xrSessionManager;
        this._xrWebGLBinding = _xrWebGLBinding;
        this._lastSubImages = new Map();
        this._renderTargetTextures = new Map();
        this._engine = _scene.getEngine();
    }
    _getSubImageForView(view) {
        const layerWrapper = this._xrSessionManager._getBaseLayerWrapper();
        if (!layerWrapper) {
            throw new Error("For Space Warp, the base layer should be a WebXR Projection Layer.");
        }
        if (layerWrapper.layerType !== "XRProjectionLayer") {
            throw new Error('For Space Warp, the base layer type should "XRProjectionLayer".');
        }
        const layer = layerWrapper.layer;
        return this._xrWebGLBinding.getViewSubImage(layer, view);
    }
    _setViewportForSubImage(viewport, subImage) {
        viewport.x = 0;
        viewport.y = 0;
        viewport.width = subImage.motionVectorTextureWidth;
        viewport.height = subImage.motionVectorTextureHeight;
    }
    _createRenderTargetTexture(width, height, framebuffer, motionVectorTexture, depthStencilTexture) {
        if (!this._engine) {
            throw new Error("Engine is disposed");
        }
        const textureSize = {
            width,
            height
        };
        // Create render target texture from the internal texture
        const renderTargetTexture = new XRSpaceWarpRenderTarget(motionVectorTexture, depthStencilTexture, this._scene, textureSize);
        const renderTargetWrapper = renderTargetTexture.renderTarget;
        if (framebuffer) {
            renderTargetWrapper._framebuffer = framebuffer;
        }
        // Create internal texture
        renderTargetWrapper._colorTextureArray = motionVectorTexture;
        renderTargetWrapper._depthStencilTextureArray = depthStencilTexture;
        renderTargetTexture.disableRescaling();
        renderTargetTexture.renderListPredicate = ()=>true;
        return renderTargetTexture;
    }
    _getRenderTargetForSubImage(subImage, view) {
        const lastSubImage = this._lastSubImages.get(view);
        let renderTargetTexture = this._renderTargetTextures.get(view.eye);
        const width = subImage.motionVectorTextureWidth;
        const height = subImage.motionVectorTextureHeight;
        if (!renderTargetTexture || lastSubImage?.textureWidth !== width || lastSubImage?.textureHeight != height) {
            renderTargetTexture = this._createRenderTargetTexture(width, height, null, subImage.motionVectorTexture, subImage.depthStencilTexture);
            this._renderTargetTextures.set(view.eye, renderTargetTexture);
            this._framebufferDimensions = {
                framebufferWidth: width,
                framebufferHeight: height
            };
        }
        this._lastSubImages.set(view, subImage);
        return renderTargetTexture;
    }
    trySetViewportForView(viewport, view) {
        const subImage = this._lastSubImages.get(view) || this._getSubImageForView(view);
        if (subImage) {
            this._setViewportForSubImage(viewport, subImage);
            return true;
        }
        return false;
    }
    /**
     * Access the motion vector (which will turn on Space Warp)
     * @param view the view to access the motion vector texture for
     */ accessMotionVector(view) {
        const subImage = this._getSubImageForView(view);
        if (subImage) {
            // Meta Quest Browser uses accessing these textures as a sign for turning on Space Warp
            subImage.motionVectorTexture;
            subImage.depthStencilTexture;
        }
    }
    getRenderTargetTextureForEye(_eye) {
        return null;
    }
    getRenderTargetTextureForView(view) {
        const subImage = this._getSubImageForView(view);
        if (subImage) {
            return this._getRenderTargetForSubImage(subImage, view);
        }
        return null;
    }
    dispose() {
        this._renderTargetTextures.forEach((rtt)=>rtt.dispose());
        this._renderTargetTextures.clear();
    }
}
class WebXRSpaceWarp extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRAbstractFeature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRAbstractFeature"] {
    /**
     * constructor for the space warp feature
     * @param _xrSessionManager the xr session manager for this feature
     */ constructor(_xrSessionManager){
        super(_xrSessionManager);
        this._onAfterRenderObserver = null;
        this.dependsOn = [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRFeaturesManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRFeatureName"].LAYERS
        ];
        this.xrNativeFeatureName = "space-warp";
        this._xrSessionManager.scene.needsPreviousWorldMatrices = true;
    }
    /**
     * Attach this feature.
     * Will usually be called by the features manager.
     *
     * @returns true if successful.
     */ attach() {
        if (!super.attach()) {
            return false;
        }
        const engine = this._xrSessionManager.scene.getEngine();
        this._glContext = engine._gl;
        this._xrWebGLBinding = new XRWebGLBinding(this._xrSessionManager.session, this._glContext);
        this.spaceWarpRTTProvider = new WebXRSpaceWarpRenderTargetTextureProvider(this._xrSessionManager.scene, this._xrSessionManager, this._xrWebGLBinding);
        this._onAfterRenderObserver = this._xrSessionManager.scene.onAfterRenderObservable.add(()=>this._onAfterRender());
        return true;
    }
    detach() {
        this._xrSessionManager.scene.onAfterRenderObservable.remove(this._onAfterRenderObserver);
        return super.detach();
    }
    _onAfterRender() {
        if (this.attached && this._renderTargetTexture) {
            this._renderTargetTexture.render(false, false);
        }
    }
    isCompatible() {
        return this._xrSessionManager.scene.getEngine().getCaps().colorBufferHalfFloat || false;
    }
    dispose() {
        super.dispose();
    }
    _onXRFrame(_xrFrame) {
        const pose = _xrFrame.getViewerPose(this._xrSessionManager.referenceSpace);
        if (!pose) {
            return;
        }
        // get the first view to which we will create a texture (or update it)
        const view = pose.views[0];
        this._renderTargetTexture = this._renderTargetTexture || this.spaceWarpRTTProvider.getRenderTargetTextureForView(view);
        this.spaceWarpRTTProvider.accessMotionVector(view);
    }
}
/**
 * The module's name
 */ WebXRSpaceWarp.Name = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRFeaturesManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRFeatureName"].SPACE_WARP;
/**
 * The (Babylon) version of this module.
 * This is an integer representing the implementation version.
 * This number does not correspond to the WebXR specs version
 */ WebXRSpaceWarp.Version = 1;
//register the plugin
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRFeaturesManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRFeaturesManager"].AddWebXRFeature(WebXRSpaceWarp.Name, (xrSessionManager)=>{
    return ()=>new WebXRSpaceWarp(xrSessionManager);
}, WebXRSpaceWarp.Version, false); //# sourceMappingURL=WebXRSpaceWarp.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/WebXRRawCameraAccess.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WebXRRawCameraAccess",
    ()=>WebXRRawCameraAccess
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRFeaturesManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/webXRFeaturesManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRAbstractFeature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/WebXRAbstractFeature.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGL$2f$webGLHardwareTexture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGL/webGLHardwareTexture.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$internalTexture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/internalTexture.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$baseTexture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/baseTexture.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
class WebXRRawCameraAccess extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRAbstractFeature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRAbstractFeature"] {
    /**
     * Creates a new instance of the feature
     * @param _xrSessionManager the WebXRSessionManager
     * @param options options for the Feature
     */ constructor(_xrSessionManager, options = {}){
        super(_xrSessionManager);
        this.options = options;
        this._cachedInternalTextures = [];
        /**
         * This is an array of camera views
         * Note that mostly the array will contain a single view
         * If you want to know the order of the views, use the `viewIndex` array
         */ this.texturesData = [];
        /**
         * If needed, this array will contain the eye definition of each texture in `texturesArray`
         */ this.viewIndex = [];
        /**
         * If needed, this array will contain the camera's intrinsics
         * You can use this data to convert from camera space to screen space and vice versa
         */ this.cameraIntrinsics = [];
        /**
         * An observable that will notify when the camera's textures are updated
         */ this.onTexturesUpdatedObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        this.xrNativeFeatureName = "camera-access";
    }
    attach(force) {
        if (!super.attach(force)) {
            return false;
        }
        this._glContext = this._xrSessionManager.scene.getEngine()._gl;
        this._glBinding = new XRWebGLBinding(this._xrSessionManager.session, this._glContext);
        return true;
    }
    detach() {
        if (!super.detach()) {
            return false;
        }
        this._glBinding = undefined;
        if (!this.options.doNotDisposeOnDetach) {
            for (const t of this._cachedInternalTextures){
                t.dispose();
            }
            for (const t of this.texturesData){
                t.dispose();
            }
            this._cachedInternalTextures.length = 0;
            this.texturesData.length = 0;
            this.cameraIntrinsics.length = 0;
        }
        return true;
    }
    /**
     * Dispose this feature and all of the resources attached
     */ dispose() {
        super.dispose();
        this.onTexturesUpdatedObservable.clear();
    }
    /**
     * @see https://github.com/immersive-web/raw-camera-access/blob/main/explainer.md
     * @param view the XRView to update
     * @param index the index of the view in the views array
     */ _updateCameraIntrinsics(view, index) {
        const cameraViewport = {
            width: view.camera.width,
            height: view.camera.height,
            x: 0,
            y: 0
        };
        const p = view.projectionMatrix;
        // Principal point in pixels (typically at or near the center of the viewport)
        const u0 = (1 - p[8]) * cameraViewport.width / 2 + cameraViewport.x;
        const v0 = (1 - p[9]) * cameraViewport.height / 2 + cameraViewport.y;
        // Focal lengths in pixels (these are equal for square pixels)
        const ax = cameraViewport.width / 2 * p[0];
        const ay = cameraViewport.height / 2 * p[5];
        // Skew factor in pixels (nonzero for rhomboid pixels)
        const gamma = cameraViewport.width / 2 * p[4];
        this.cameraIntrinsics[index] = {
            u0,
            v0,
            ax,
            ay,
            gamma,
            width: cameraViewport.width,
            height: cameraViewport.height,
            viewportX: cameraViewport.x,
            viewportY: cameraViewport.y
        };
    }
    _updateInternalTextures(view, index = 0) {
        if (!view.camera) {
            return false;
        }
        this.viewIndex[index] = view.eye;
        const lp = this._glBinding?.getCameraImage(view.camera);
        if (!this._cachedInternalTextures[index]) {
            const internalTexture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$internalTexture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InternalTexture"](this._xrSessionManager.scene.getEngine(), 0 /* InternalTextureSource.Unknown */ , true);
            internalTexture.invertY = false;
            internalTexture.format = 5;
            internalTexture.generateMipMaps = true;
            internalTexture.type = 0;
            internalTexture.samplingMode = 3;
            internalTexture.width = view.camera.width;
            internalTexture.height = view.camera.height;
            internalTexture._cachedWrapU = 1;
            internalTexture._cachedWrapV = 1;
            internalTexture._hardwareTexture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGL$2f$webGLHardwareTexture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebGLHardwareTexture"](lp, this._glContext);
            this._cachedInternalTextures[index] = internalTexture;
            // create the base texture
            const texture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$baseTexture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BaseTexture"](this._xrSessionManager.scene);
            texture.name = `WebXR Raw Camera Access (${index})`;
            texture._texture = this._cachedInternalTextures[index];
            this.texturesData[index] = texture;
            // get the camera intrinsics
            this._updateCameraIntrinsics(view, index);
        } else {
            // make sure the webgl texture is updated. Should happen automatically
            this._cachedInternalTextures[index]._hardwareTexture?.set(lp);
        }
        this._cachedInternalTextures[index].isReady = true;
        return true;
    }
    _onXRFrame(_xrFrame) {
        const referenceSPace = this._xrSessionManager.referenceSpace;
        const pose = _xrFrame.getViewerPose(referenceSPace);
        if (!pose || !pose.views) {
            return;
        }
        let updated = true;
        for(let index = 0; index < pose.views.length; index++){
            const view = pose.views[index];
            updated = updated && this._updateInternalTextures(view, index);
        }
        if (updated) {
            this.onTexturesUpdatedObservable.notifyObservers(this.texturesData);
        }
    }
}
/**
 * The module's name
 */ WebXRRawCameraAccess.Name = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRFeaturesManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRFeatureName"].RAW_CAMERA_ACCESS;
/**
 * The (Babylon) version of this module.
 * This is an integer representing the implementation version.
 * This number does not correspond to the WebXR specs version
 */ WebXRRawCameraAccess.Version = 1;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRFeaturesManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRFeaturesManager"].AddWebXRFeature(WebXRRawCameraAccess.Name, (xrSessionManager, options)=>{
    return ()=>new WebXRRawCameraAccess(xrSessionManager, options);
}, WebXRRawCameraAccess.Version, false); //# sourceMappingURL=WebXRRawCameraAccess.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRAbstractFeature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/WebXRAbstractFeature.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRHitTestLegacy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/WebXRHitTestLegacy.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRAnchorSystem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/WebXRAnchorSystem.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRPlaneDetector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/WebXRPlaneDetector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRBackgroundRemover$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/WebXRBackgroundRemover.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRControllerTeleportation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/WebXRControllerTeleportation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRControllerPointerSelection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/WebXRControllerPointerSelection.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRControllerPhysics$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/WebXRControllerPhysics.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRHitTest$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/WebXRHitTest.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRFeaturePointSystem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/WebXRFeaturePointSystem.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRHandTracking$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/WebXRHandTracking.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRMeshDetector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/WebXRMeshDetector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRImageTracking$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/WebXRImageTracking.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRNearInteraction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/WebXRNearInteraction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRDOMOverlay$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/WebXRDOMOverlay.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRControllerMovement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/WebXRControllerMovement.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRLightEstimation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/WebXRLightEstimation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXREyeTracking$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/WebXREyeTracking.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRWalkingLocomotion$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/WebXRWalkingLocomotion.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRLayers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/WebXRLayers.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRDepthSensing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/WebXRDepthSensing.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRSpaceWarp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/WebXRSpaceWarp.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRRawCameraAccess$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/WebXRRawCameraAccess.js [app-ssr] (ecmascript)"); //# sourceMappingURL=index.js.map
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
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/motionController/webXRGenericHandController.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WebXRGenericHandController",
    ()=>WebXRGenericHandController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$motionController$2f$webXRAbstractMotionController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/motionController/webXRAbstractMotionController.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$motionController$2f$webXRMotionControllerManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/motionController/webXRMotionControllerManager.js [app-ssr] (ecmascript)");
;
;
class WebXRGenericHandController extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$motionController$2f$webXRAbstractMotionController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRAbstractMotionController"] {
    /**
     * Create a new hand controller object, without loading a controller model
     * @param scene the scene to use to create this controller
     * @param gamepadObject the corresponding gamepad object
     * @param handedness the handedness of the controller
     */ constructor(scene, gamepadObject, handedness){
        // Don't load the controller model - for now, hands have no real model.
        super(scene, GenericHandSelectGraspProfile[handedness], gamepadObject, handedness, true);
        this.profileId = "generic-hand-select-grasp";
    }
    _getFilenameAndPath() {
        return {
            filename: "generic.babylon",
            path: "https://controllers.babylonjs.com/generic/"
        };
    }
    _getModelLoadingConstraints() {
        return true;
    }
    _processLoadedModel(_meshes) {
    // no-op
    }
    _setRootMesh(meshes) {
    // no-op
    }
    _updateModel() {
    // no-op
    }
}
// register the profiles
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$motionController$2f$webXRMotionControllerManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRMotionControllerManager"].RegisterController("generic-hand-select-grasp", (xrInput, scene)=>{
    return new WebXRGenericHandController(scene, xrInput.gamepad, xrInput.handedness);
});
// https://github.com/immersive-web/webxr-input-profiles/blob/main/packages/registry/profiles/generic/generic-hand-select-grasp.json
const GenericHandSelectGraspProfile = {
    left: {
        selectComponentId: "xr-standard-trigger",
        components: {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            "xr-standard-trigger": {
                type: "trigger",
                gamepadIndices: {
                    button: 0
                },
                rootNodeName: "xr-standard-trigger",
                visualResponses: {}
            },
            grasp: {
                type: "trigger",
                gamepadIndices: {
                    button: 4
                },
                rootNodeName: "grasp",
                visualResponses: {}
            }
        },
        gamepadMapping: "xr-standard",
        rootNodeName: "generic-hand-select-grasp-left",
        assetPath: "left.glb"
    },
    right: {
        selectComponentId: "xr-standard-trigger",
        components: {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            "xr-standard-trigger": {
                type: "trigger",
                gamepadIndices: {
                    button: 0
                },
                rootNodeName: "xr-standard-trigger",
                visualResponses: {}
            },
            grasp: {
                type: "trigger",
                gamepadIndices: {
                    button: 4
                },
                rootNodeName: "grasp",
                visualResponses: {}
            }
        },
        gamepadMapping: "xr-standard",
        rootNodeName: "generic-hand-select-grasp-right",
        assetPath: "right.glb"
    },
    none: {
        selectComponentId: "xr-standard-trigger",
        components: {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            "xr-standard-trigger": {
                type: "trigger",
                gamepadIndices: {
                    button: 0
                },
                rootNodeName: "xr-standard-trigger",
                visualResponses: {}
            },
            grasp: {
                type: "trigger",
                gamepadIndices: {
                    button: 4
                },
                rootNodeName: "grasp",
                visualResponses: {}
            }
        },
        gamepadMapping: "xr-standard",
        rootNodeName: "generic-hand-select-grasp-none",
        assetPath: "none.glb"
    }
}; //# sourceMappingURL=webXRGenericHandController.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/motionController/webXRMicrosoftMixedRealityController.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WebXRMicrosoftMixedRealityController",
    ()=>WebXRMicrosoftMixedRealityController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$motionController$2f$webXRAbstractMotionController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/motionController/webXRAbstractMotionController.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$motionController$2f$webXRMotionControllerManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/motionController/webXRMotionControllerManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/mesh.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Loading$2f$sceneLoader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Loading/sceneLoader.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
class WebXRMicrosoftMixedRealityController extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$motionController$2f$webXRAbstractMotionController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRAbstractMotionController"] {
    constructor(scene, gamepadObject, handedness){
        super(scene, MixedRealityProfile["left-right"], gamepadObject, handedness);
        // use this in the future - https://github.com/immersive-web/webxr-input-profiles/tree/master/packages/assets/profiles/microsoft
        this._mapping = {
            defaultButton: {
                valueNodeName: "VALUE",
                unpressedNodeName: "UNPRESSED",
                pressedNodeName: "PRESSED"
            },
            defaultAxis: {
                valueNodeName: "VALUE",
                minNodeName: "MIN",
                maxNodeName: "MAX"
            },
            buttons: {
                "xr-standard-trigger": {
                    rootNodeName: "SELECT",
                    componentProperty: "button",
                    states: [
                        "default",
                        "touched",
                        "pressed"
                    ]
                },
                "xr-standard-squeeze": {
                    rootNodeName: "GRASP",
                    componentProperty: "state",
                    states: [
                        "pressed"
                    ]
                },
                "xr-standard-touchpad": {
                    rootNodeName: "TOUCHPAD_PRESS",
                    labelAnchorNodeName: "squeeze-label",
                    touchPointNodeName: "TOUCH"
                },
                "xr-standard-thumbstick": {
                    rootNodeName: "THUMBSTICK_PRESS",
                    componentProperty: "state",
                    states: [
                        "pressed"
                    ]
                }
            },
            axes: {
                "xr-standard-touchpad": {
                    "x-axis": {
                        rootNodeName: "TOUCHPAD_TOUCH_X"
                    },
                    "y-axis": {
                        rootNodeName: "TOUCHPAD_TOUCH_Y"
                    }
                },
                "xr-standard-thumbstick": {
                    "x-axis": {
                        rootNodeName: "THUMBSTICK_X"
                    },
                    "y-axis": {
                        rootNodeName: "THUMBSTICK_Y"
                    }
                }
            }
        };
        this.profileId = "microsoft-mixed-reality";
    }
    _getFilenameAndPath() {
        let filename = "";
        if (this.handedness === "left") {
            filename = WebXRMicrosoftMixedRealityController.MODEL_LEFT_FILENAME;
        } else {
            // Right is the default if no hand is specified
            filename = WebXRMicrosoftMixedRealityController.MODEL_RIGHT_FILENAME;
        }
        const device = "default";
        const path = WebXRMicrosoftMixedRealityController.MODEL_BASE_URL + device + "/";
        return {
            filename,
            path
        };
    }
    _getModelLoadingConstraints() {
        const glbLoaded = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Loading$2f$sceneLoader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SceneLoader"].IsPluginForExtensionAvailable(".glb");
        if (!glbLoaded) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn("glTF / glb loaded was not registered, using generic controller instead");
        }
        return glbLoaded;
    }
    _processLoadedModel(_meshes) {
        if (!this.rootMesh) {
            return;
        }
        // Button Meshes
        const ids = this.getComponentIds();
        for(let i = 0; i < ids.length; i++){
            const id = ids[i];
            if (this.disableAnimation) {
                continue;
            }
            if (id && this.rootMesh) {
                const buttonMap = this._mapping.buttons[id];
                const buttonMeshName = buttonMap.rootNodeName;
                if (!buttonMeshName) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Log("Skipping unknown button at index: " + i + " with mapped name: " + id);
                    continue;
                }
                const buttonMesh = this._getChildByName(this.rootMesh, buttonMeshName);
                if (!buttonMesh) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn("Missing button mesh with name: " + buttonMeshName);
                    continue;
                }
                buttonMap.valueMesh = this._getImmediateChildByName(buttonMesh, this._mapping.defaultButton.valueNodeName);
                buttonMap.pressedMesh = this._getImmediateChildByName(buttonMesh, this._mapping.defaultButton.pressedNodeName);
                buttonMap.unpressedMesh = this._getImmediateChildByName(buttonMesh, this._mapping.defaultButton.unpressedNodeName);
                if (buttonMap.valueMesh && buttonMap.pressedMesh && buttonMap.unpressedMesh) {
                    const comp = this.getComponent(id);
                    if (comp) {
                        comp.onButtonStateChangedObservable.add((component)=>{
                            this._lerpTransform(buttonMap, component.value);
                        }, undefined, true);
                    }
                } else {
                    // If we didn't find the mesh, it simply means this button won't have transforms applied as mapped button value changes.
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn("Missing button submesh under mesh with name: " + buttonMeshName);
                }
            }
        }
        // Axis Meshes
        for (const id of ids){
            const comp = this.getComponent(id);
            if (!comp.isAxes()) {
                continue;
            }
            const axisArray = [
                "x-axis",
                "y-axis"
            ];
            for (const axis of axisArray){
                if (!this.rootMesh) {
                    continue;
                }
                const axisMap = this._mapping.axes[id][axis];
                const axisMesh = this._getChildByName(this.rootMesh, axisMap.rootNodeName);
                if (!axisMesh) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn("Missing axis mesh with name: " + axisMap.rootNodeName);
                    continue;
                }
                axisMap.valueMesh = this._getImmediateChildByName(axisMesh, this._mapping.defaultAxis.valueNodeName);
                axisMap.minMesh = this._getImmediateChildByName(axisMesh, this._mapping.defaultAxis.minNodeName);
                axisMap.maxMesh = this._getImmediateChildByName(axisMesh, this._mapping.defaultAxis.maxNodeName);
                if (axisMap.valueMesh && axisMap.minMesh && axisMap.maxMesh) {
                    if (comp) {
                        comp.onAxisValueChangedObservable.add((axisValues)=>{
                            const value = axis === "x-axis" ? axisValues.x : axisValues.y;
                            this._lerpTransform(axisMap, value, true);
                        }, undefined, true);
                    }
                } else {
                    // If we didn't find the mesh, it simply means this button won't have transforms applied as mapped button value changes.
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn("Missing axis submesh under mesh with name: " + axisMap.rootNodeName);
                }
            }
        }
    }
    _setRootMesh(meshes) {
        this.rootMesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](this.profileId + " " + this.handedness, this.scene);
        this.rootMesh.isPickable = false;
        let rootMesh;
        // Find the root node in the loaded glTF scene, and attach it as a child of 'parentMesh'
        for(let i = 0; i < meshes.length; i++){
            const mesh = meshes[i];
            mesh.isPickable = false;
            if (!mesh.parent) {
                // Handle root node, attach to the new parentMesh
                rootMesh = mesh;
            }
        }
        if (rootMesh) {
            rootMesh.setParent(this.rootMesh);
        }
        if (!this.scene.useRightHandedSystem) {
            this.rootMesh.rotationQuaternion = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"].FromEulerAngles(0, Math.PI, 0);
        }
    }
    _updateModel() {
    // no-op. model is updated using observables.
    }
}
/**
 * The base url used to load the left and right controller models
 */ WebXRMicrosoftMixedRealityController.MODEL_BASE_URL = "https://controllers.babylonjs.com/microsoft/";
/**
 * The name of the left controller model file
 */ WebXRMicrosoftMixedRealityController.MODEL_LEFT_FILENAME = "left.glb";
/**
 * The name of the right controller model file
 */ WebXRMicrosoftMixedRealityController.MODEL_RIGHT_FILENAME = "right.glb";
// register the profile
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$motionController$2f$webXRMotionControllerManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRMotionControllerManager"].RegisterController("windows-mixed-reality", (xrInput, scene)=>{
    return new WebXRMicrosoftMixedRealityController(scene, xrInput.gamepad, xrInput.handedness);
});
// https://github.com/immersive-web/webxr-input-profiles/blob/master/packages/registry/profiles/microsoft/microsoft-mixed-reality.json
const MixedRealityProfile = {
    left: {
        selectComponentId: "xr-standard-trigger",
        components: {
            "xr-standard-trigger": {
                type: "trigger",
                gamepadIndices: {
                    button: 0
                },
                rootNodeName: "xr_standard_trigger",
                visualResponses: {
                    xr_standard_trigger_pressed: {
                        componentProperty: "button",
                        states: [
                            "default",
                            "touched",
                            "pressed"
                        ],
                        valueNodeProperty: "transform",
                        valueNodeName: "xr_standard_trigger_pressed_value",
                        minNodeName: "xr_standard_trigger_pressed_min",
                        maxNodeName: "xr_standard_trigger_pressed_max"
                    }
                }
            },
            "xr-standard-squeeze": {
                type: "squeeze",
                gamepadIndices: {
                    button: 1
                },
                rootNodeName: "xr_standard_squeeze",
                visualResponses: {
                    xr_standard_squeeze_pressed: {
                        componentProperty: "button",
                        states: [
                            "default",
                            "touched",
                            "pressed"
                        ],
                        valueNodeProperty: "transform",
                        valueNodeName: "xr_standard_squeeze_pressed_value",
                        minNodeName: "xr_standard_squeeze_pressed_min",
                        maxNodeName: "xr_standard_squeeze_pressed_max"
                    }
                }
            },
            "xr-standard-touchpad": {
                type: "touchpad",
                gamepadIndices: {
                    button: 2,
                    xAxis: 0,
                    yAxis: 1
                },
                rootNodeName: "xr_standard_touchpad",
                visualResponses: {
                    xr_standard_touchpad_pressed: {
                        componentProperty: "button",
                        states: [
                            "default",
                            "touched",
                            "pressed"
                        ],
                        valueNodeProperty: "transform",
                        valueNodeName: "xr_standard_touchpad_pressed_value",
                        minNodeName: "xr_standard_touchpad_pressed_min",
                        maxNodeName: "xr_standard_touchpad_pressed_max"
                    },
                    xr_standard_touchpad_xaxis_pressed: {
                        componentProperty: "xAxis",
                        states: [
                            "default",
                            "touched",
                            "pressed"
                        ],
                        valueNodeProperty: "transform",
                        valueNodeName: "xr_standard_touchpad_xaxis_pressed_value",
                        minNodeName: "xr_standard_touchpad_xaxis_pressed_min",
                        maxNodeName: "xr_standard_touchpad_xaxis_pressed_max"
                    },
                    xr_standard_touchpad_yaxis_pressed: {
                        componentProperty: "yAxis",
                        states: [
                            "default",
                            "touched",
                            "pressed"
                        ],
                        valueNodeProperty: "transform",
                        valueNodeName: "xr_standard_touchpad_yaxis_pressed_value",
                        minNodeName: "xr_standard_touchpad_yaxis_pressed_min",
                        maxNodeName: "xr_standard_touchpad_yaxis_pressed_max"
                    },
                    xr_standard_touchpad_xaxis_touched: {
                        componentProperty: "xAxis",
                        states: [
                            "default",
                            "touched",
                            "pressed"
                        ],
                        valueNodeProperty: "transform",
                        valueNodeName: "xr_standard_touchpad_xaxis_touched_value",
                        minNodeName: "xr_standard_touchpad_xaxis_touched_min",
                        maxNodeName: "xr_standard_touchpad_xaxis_touched_max"
                    },
                    xr_standard_touchpad_yaxis_touched: {
                        componentProperty: "yAxis",
                        states: [
                            "default",
                            "touched",
                            "pressed"
                        ],
                        valueNodeProperty: "transform",
                        valueNodeName: "xr_standard_touchpad_yaxis_touched_value",
                        minNodeName: "xr_standard_touchpad_yaxis_touched_min",
                        maxNodeName: "xr_standard_touchpad_yaxis_touched_max"
                    },
                    xr_standard_touchpad_axes_touched: {
                        componentProperty: "state",
                        states: [
                            "touched",
                            "pressed"
                        ],
                        valueNodeProperty: "visibility",
                        valueNodeName: "xr_standard_touchpad_axes_touched_value"
                    }
                },
                touchPointNodeName: "xr_standard_touchpad_axes_touched_value"
            },
            "xr-standard-thumbstick": {
                type: "thumbstick",
                gamepadIndices: {
                    button: 3,
                    xAxis: 2,
                    yAxis: 3
                },
                rootNodeName: "xr_standard_thumbstick",
                visualResponses: {
                    xr_standard_thumbstick_pressed: {
                        componentProperty: "button",
                        states: [
                            "default",
                            "touched",
                            "pressed"
                        ],
                        valueNodeProperty: "transform",
                        valueNodeName: "xr_standard_thumbstick_pressed_value",
                        minNodeName: "xr_standard_thumbstick_pressed_min",
                        maxNodeName: "xr_standard_thumbstick_pressed_max"
                    },
                    xr_standard_thumbstick_xaxis_pressed: {
                        componentProperty: "xAxis",
                        states: [
                            "default",
                            "touched",
                            "pressed"
                        ],
                        valueNodeProperty: "transform",
                        valueNodeName: "xr_standard_thumbstick_xaxis_pressed_value",
                        minNodeName: "xr_standard_thumbstick_xaxis_pressed_min",
                        maxNodeName: "xr_standard_thumbstick_xaxis_pressed_max"
                    },
                    xr_standard_thumbstick_yaxis_pressed: {
                        componentProperty: "yAxis",
                        states: [
                            "default",
                            "touched",
                            "pressed"
                        ],
                        valueNodeProperty: "transform",
                        valueNodeName: "xr_standard_thumbstick_yaxis_pressed_value",
                        minNodeName: "xr_standard_thumbstick_yaxis_pressed_min",
                        maxNodeName: "xr_standard_thumbstick_yaxis_pressed_max"
                    }
                }
            }
        },
        gamepadMapping: "xr-standard",
        rootNodeName: "microsoft-mixed-reality-left",
        assetPath: "left.glb"
    },
    right: {
        selectComponentId: "xr-standard-trigger",
        components: {
            "xr-standard-trigger": {
                type: "trigger",
                gamepadIndices: {
                    button: 0
                },
                rootNodeName: "xr_standard_trigger",
                visualResponses: {
                    xr_standard_trigger_pressed: {
                        componentProperty: "button",
                        states: [
                            "default",
                            "touched",
                            "pressed"
                        ],
                        valueNodeProperty: "transform",
                        valueNodeName: "xr_standard_trigger_pressed_value",
                        minNodeName: "xr_standard_trigger_pressed_min",
                        maxNodeName: "xr_standard_trigger_pressed_max"
                    }
                }
            },
            "xr-standard-squeeze": {
                type: "squeeze",
                gamepadIndices: {
                    button: 1
                },
                rootNodeName: "xr_standard_squeeze",
                visualResponses: {
                    xr_standard_squeeze_pressed: {
                        componentProperty: "button",
                        states: [
                            "default",
                            "touched",
                            "pressed"
                        ],
                        valueNodeProperty: "transform",
                        valueNodeName: "xr_standard_squeeze_pressed_value",
                        minNodeName: "xr_standard_squeeze_pressed_min",
                        maxNodeName: "xr_standard_squeeze_pressed_max"
                    }
                }
            },
            "xr-standard-touchpad": {
                type: "touchpad",
                gamepadIndices: {
                    button: 2,
                    xAxis: 0,
                    yAxis: 1
                },
                rootNodeName: "xr_standard_touchpad",
                visualResponses: {
                    xr_standard_touchpad_pressed: {
                        componentProperty: "button",
                        states: [
                            "default",
                            "touched",
                            "pressed"
                        ],
                        valueNodeProperty: "transform",
                        valueNodeName: "xr_standard_touchpad_pressed_value",
                        minNodeName: "xr_standard_touchpad_pressed_min",
                        maxNodeName: "xr_standard_touchpad_pressed_max"
                    },
                    xr_standard_touchpad_xaxis_pressed: {
                        componentProperty: "xAxis",
                        states: [
                            "default",
                            "touched",
                            "pressed"
                        ],
                        valueNodeProperty: "transform",
                        valueNodeName: "xr_standard_touchpad_xaxis_pressed_value",
                        minNodeName: "xr_standard_touchpad_xaxis_pressed_min",
                        maxNodeName: "xr_standard_touchpad_xaxis_pressed_max"
                    },
                    xr_standard_touchpad_yaxis_pressed: {
                        componentProperty: "yAxis",
                        states: [
                            "default",
                            "touched",
                            "pressed"
                        ],
                        valueNodeProperty: "transform",
                        valueNodeName: "xr_standard_touchpad_yaxis_pressed_value",
                        minNodeName: "xr_standard_touchpad_yaxis_pressed_min",
                        maxNodeName: "xr_standard_touchpad_yaxis_pressed_max"
                    },
                    xr_standard_touchpad_xaxis_touched: {
                        componentProperty: "xAxis",
                        states: [
                            "default",
                            "touched",
                            "pressed"
                        ],
                        valueNodeProperty: "transform",
                        valueNodeName: "xr_standard_touchpad_xaxis_touched_value",
                        minNodeName: "xr_standard_touchpad_xaxis_touched_min",
                        maxNodeName: "xr_standard_touchpad_xaxis_touched_max"
                    },
                    xr_standard_touchpad_yaxis_touched: {
                        componentProperty: "yAxis",
                        states: [
                            "default",
                            "touched",
                            "pressed"
                        ],
                        valueNodeProperty: "transform",
                        valueNodeName: "xr_standard_touchpad_yaxis_touched_value",
                        minNodeName: "xr_standard_touchpad_yaxis_touched_min",
                        maxNodeName: "xr_standard_touchpad_yaxis_touched_max"
                    },
                    xr_standard_touchpad_axes_touched: {
                        componentProperty: "state",
                        states: [
                            "touched",
                            "pressed"
                        ],
                        valueNodeProperty: "visibility",
                        valueNodeName: "xr_standard_touchpad_axes_touched_value"
                    }
                },
                touchPointNodeName: "xr_standard_touchpad_axes_touched_value"
            },
            "xr-standard-thumbstick": {
                type: "thumbstick",
                gamepadIndices: {
                    button: 3,
                    xAxis: 2,
                    yAxis: 3
                },
                rootNodeName: "xr_standard_thumbstick",
                visualResponses: {
                    xr_standard_thumbstick_pressed: {
                        componentProperty: "button",
                        states: [
                            "default",
                            "touched",
                            "pressed"
                        ],
                        valueNodeProperty: "transform",
                        valueNodeName: "xr_standard_thumbstick_pressed_value",
                        minNodeName: "xr_standard_thumbstick_pressed_min",
                        maxNodeName: "xr_standard_thumbstick_pressed_max"
                    },
                    xr_standard_thumbstick_xaxis_pressed: {
                        componentProperty: "xAxis",
                        states: [
                            "default",
                            "touched",
                            "pressed"
                        ],
                        valueNodeProperty: "transform",
                        valueNodeName: "xr_standard_thumbstick_xaxis_pressed_value",
                        minNodeName: "xr_standard_thumbstick_xaxis_pressed_min",
                        maxNodeName: "xr_standard_thumbstick_xaxis_pressed_max"
                    },
                    xr_standard_thumbstick_yaxis_pressed: {
                        componentProperty: "yAxis",
                        states: [
                            "default",
                            "touched",
                            "pressed"
                        ],
                        valueNodeProperty: "transform",
                        valueNodeName: "xr_standard_thumbstick_yaxis_pressed_value",
                        minNodeName: "xr_standard_thumbstick_yaxis_pressed_min",
                        maxNodeName: "xr_standard_thumbstick_yaxis_pressed_max"
                    }
                }
            }
        },
        gamepadMapping: "xr-standard",
        rootNodeName: "microsoft-mixed-reality-right",
        assetPath: "right.glb"
    }
}; //# sourceMappingURL=webXRMicrosoftMixedRealityController.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/motionController/webXROculusTouchMotionController.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WebXROculusTouchMotionController",
    ()=>WebXROculusTouchMotionController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$motionController$2f$webXRAbstractMotionController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/motionController/webXRAbstractMotionController.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$motionController$2f$webXRMotionControllerManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/motionController/webXRMotionControllerManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/mesh.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
;
;
;
;
class WebXROculusTouchMotionController extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$motionController$2f$webXRAbstractMotionController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRAbstractMotionController"] {
    constructor(scene, gamepadObject, handedness, _legacyMapping = false, _forceLegacyControllers = false){
        super(scene, OculusTouchLayouts[handedness], gamepadObject, handedness);
        this._forceLegacyControllers = _forceLegacyControllers;
        this.profileId = "oculus-touch";
    }
    _getFilenameAndPath() {
        let filename = "";
        if (this.handedness === "left") {
            filename = WebXROculusTouchMotionController.MODEL_LEFT_FILENAME;
        } else {
            // Right is the default if no hand is specified
            filename = WebXROculusTouchMotionController.MODEL_RIGHT_FILENAME;
        }
        const path = this._isQuest() ? WebXROculusTouchMotionController.QUEST_MODEL_BASE_URL : WebXROculusTouchMotionController.MODEL_BASE_URL;
        return {
            filename,
            path
        };
    }
    _getModelLoadingConstraints() {
        return true;
    }
    _processLoadedModel(_meshes) {
        const isQuest = this._isQuest();
        const triggerDirection = this.handedness === "right" ? -1 : 1;
        const ids = this.getComponentIds();
        for (const id of ids){
            const comp = id && this.getComponent(id);
            if (comp) {
                comp.onButtonStateChangedObservable.add((component)=>{
                    if (!this.rootMesh || this.disableAnimation) {
                        return;
                    }
                    switch(id){
                        case "xr-standard-trigger":
                            if (!isQuest) {
                                this._modelRootNode.getChildren()[3].rotation.x = -component.value * 0.2;
                                this._modelRootNode.getChildren()[3].position.y = -component.value * 0.005;
                                this._modelRootNode.getChildren()[3].position.z = -component.value * 0.005;
                            }
                            return;
                        case "xr-standard-squeeze":
                            if (!isQuest) {
                                this._modelRootNode.getChildren()[4].position.x = triggerDirection * component.value * 0.0035;
                            }
                            return;
                        case "xr-standard-thumbstick":
                            return;
                        case "a-button":
                        case "x-button":
                            if (!isQuest) {
                                if (component.pressed) {
                                    this._modelRootNode.getChildren()[1].position.y = -0.001;
                                } else {
                                    this._modelRootNode.getChildren()[1].position.y = 0;
                                }
                            }
                            return;
                        case "b-button":
                        case "y-button":
                            if (!isQuest) {
                                if (component.pressed) {
                                    this._modelRootNode.getChildren()[2].position.y = -0.001;
                                } else {
                                    this._modelRootNode.getChildren()[2].position.y = 0;
                                }
                            }
                            return;
                    }
                }, undefined, true);
            }
        }
    }
    _setRootMesh(meshes) {
        this.rootMesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](this.profileId + " " + this.handedness, this.scene);
        if (!this.scene.useRightHandedSystem) {
            this.rootMesh.rotationQuaternion = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"].FromEulerAngles(0, Math.PI, 0);
        }
        for (const mesh of meshes){
            mesh.isPickable = false;
        }
        if (this._isQuest()) {
            this._modelRootNode = meshes[0];
        } else {
            this._modelRootNode = meshes[1];
            this.rootMesh.position.y = 0.034;
            this.rootMesh.position.z = 0.052;
        }
        this._modelRootNode.parent = this.rootMesh;
    }
    _updateModel() {
    // no-op. model is updated using observables.
    }
    /**
     * Is this the new type of oculus touch. At the moment both have the same profile and it is impossible to differentiate
     * between the touch and touch 2.
     * @returns true if this is the new type of oculus touch controllers.
     */ _isQuest() {
        // this is SADLY the only way to currently check. Until proper profiles will be available.
        return !!navigator.userAgent.match(/Quest/gi) && !this._forceLegacyControllers;
    }
}
/**
 * The base url used to load the left and right controller models
 */ WebXROculusTouchMotionController.MODEL_BASE_URL = "https://controllers.babylonjs.com/oculus/";
/**
 * The name of the left controller model file
 */ WebXROculusTouchMotionController.MODEL_LEFT_FILENAME = "left.babylon";
/**
 * The name of the right controller model file
 */ WebXROculusTouchMotionController.MODEL_RIGHT_FILENAME = "right.babylon";
/**
 * Base Url for the Quest controller model.
 */ WebXROculusTouchMotionController.QUEST_MODEL_BASE_URL = "https://controllers.babylonjs.com/oculusQuest/";
// register the profile
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$motionController$2f$webXRMotionControllerManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRMotionControllerManager"].RegisterController("oculus-touch", (xrInput, scene)=>{
    return new WebXROculusTouchMotionController(scene, xrInput.gamepad, xrInput.handedness);
});
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$motionController$2f$webXRMotionControllerManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRMotionControllerManager"].RegisterController("oculus-touch-legacy", (xrInput, scene)=>{
    return new WebXROculusTouchMotionController(scene, xrInput.gamepad, xrInput.handedness, true);
});
const OculusTouchLayouts = {
    left: {
        selectComponentId: "xr-standard-trigger",
        components: {
            "xr-standard-trigger": {
                type: "trigger",
                gamepadIndices: {
                    button: 0
                },
                rootNodeName: "xr_standard_trigger",
                visualResponses: {}
            },
            "xr-standard-squeeze": {
                type: "squeeze",
                gamepadIndices: {
                    button: 1
                },
                rootNodeName: "xr_standard_squeeze",
                visualResponses: {}
            },
            "xr-standard-thumbstick": {
                type: "thumbstick",
                gamepadIndices: {
                    button: 3,
                    xAxis: 2,
                    yAxis: 3
                },
                rootNodeName: "xr_standard_thumbstick",
                visualResponses: {}
            },
            "x-button": {
                type: "button",
                gamepadIndices: {
                    button: 4
                },
                rootNodeName: "x_button",
                visualResponses: {}
            },
            "y-button": {
                type: "button",
                gamepadIndices: {
                    button: 5
                },
                rootNodeName: "y_button",
                visualResponses: {}
            },
            thumbrest: {
                type: "button",
                gamepadIndices: {
                    button: 6
                },
                rootNodeName: "thumbrest",
                visualResponses: {}
            }
        },
        gamepadMapping: "xr-standard",
        rootNodeName: "oculus-touch-v2-left",
        assetPath: "left.glb"
    },
    right: {
        selectComponentId: "xr-standard-trigger",
        components: {
            "xr-standard-trigger": {
                type: "trigger",
                gamepadIndices: {
                    button: 0
                },
                rootNodeName: "xr_standard_trigger",
                visualResponses: {}
            },
            "xr-standard-squeeze": {
                type: "squeeze",
                gamepadIndices: {
                    button: 1
                },
                rootNodeName: "xr_standard_squeeze",
                visualResponses: {}
            },
            "xr-standard-thumbstick": {
                type: "thumbstick",
                gamepadIndices: {
                    button: 3,
                    xAxis: 2,
                    yAxis: 3
                },
                rootNodeName: "xr_standard_thumbstick",
                visualResponses: {}
            },
            "a-button": {
                type: "button",
                gamepadIndices: {
                    button: 4
                },
                rootNodeName: "a_button",
                visualResponses: {}
            },
            "b-button": {
                type: "button",
                gamepadIndices: {
                    button: 5
                },
                rootNodeName: "b_button",
                visualResponses: {}
            },
            thumbrest: {
                type: "button",
                gamepadIndices: {
                    button: 6
                },
                rootNodeName: "thumbrest",
                visualResponses: {}
            }
        },
        gamepadMapping: "xr-standard",
        rootNodeName: "oculus-touch-v2-right",
        assetPath: "right.glb"
    }
}; //# sourceMappingURL=webXROculusTouchMotionController.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/motionController/webXROculusHandController.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WebXROculusHandController",
    ()=>WebXROculusHandController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$motionController$2f$webXRAbstractMotionController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/motionController/webXRAbstractMotionController.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$motionController$2f$webXRMotionControllerManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/motionController/webXRMotionControllerManager.js [app-ssr] (ecmascript)");
;
;
class WebXROculusHandController extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$motionController$2f$webXRAbstractMotionController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRAbstractMotionController"] {
    /**
     * Create a new hand controller object, without loading a controller model
     * @param scene the scene to use to create this controller
     * @param gamepadObject the corresponding gamepad object
     * @param handedness the handedness of the controller
     */ constructor(scene, gamepadObject, handedness){
        // Don't load the controller model - for now, hands have no real model.
        super(scene, OculusHandProfile[handedness], gamepadObject, handedness, true);
        this.profileId = "oculus-hand";
    }
    _getFilenameAndPath() {
        return {
            filename: "generic.babylon",
            path: "https://controllers.babylonjs.com/generic/"
        };
    }
    _getModelLoadingConstraints() {
        return true;
    }
    _processLoadedModel(_meshes) {
    // no-op
    }
    _setRootMesh(meshes) {
    // no-op
    }
    _updateModel() {
    // no-op
    }
}
// register the profiles
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$motionController$2f$webXRMotionControllerManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRMotionControllerManager"].RegisterController("oculus-hand", (xrInput, scene)=>{
    return new WebXROculusHandController(scene, xrInput.gamepad, xrInput.handedness);
});
// https://github.com/immersive-web/webxr-input-profiles/blob/main/packages/registry/profiles/oculus/oculus-hand.json
const OculusHandProfile = {
    left: {
        selectComponentId: "xr-standard-trigger",
        components: {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            "xr-standard-trigger": {
                type: "trigger",
                gamepadIndices: {
                    button: 0
                },
                rootNodeName: "xr-standard-trigger",
                visualResponses: {}
            },
            menu: {
                type: "button",
                gamepadIndices: {
                    button: 4
                },
                rootNodeName: "menu",
                visualResponses: {}
            },
            // eslint-disable-next-line @typescript-eslint/naming-convention
            "swipe-left": {
                type: "button",
                gamepadIndices: {
                    button: 5
                },
                rootNodeName: "swipe-left",
                visualResponses: {}
            },
            // eslint-disable-next-line @typescript-eslint/naming-convention
            "swipe-right": {
                type: "button",
                gamepadIndices: {
                    button: 6
                },
                rootNodeName: "swipe-right",
                visualResponses: {}
            },
            // eslint-disable-next-line @typescript-eslint/naming-convention
            "swipe-forward": {
                type: "button",
                gamepadIndices: {
                    button: 7
                },
                rootNodeName: "swipe-forward",
                visualResponses: {}
            },
            // eslint-disable-next-line @typescript-eslint/naming-convention
            "swipe-backward": {
                type: "button",
                gamepadIndices: {
                    button: 8
                },
                rootNodeName: "swipe-backward",
                visualResponses: {}
            },
            // eslint-disable-next-line @typescript-eslint/naming-convention
            "tap-thumb": {
                type: "button",
                gamepadIndices: {
                    button: 9
                },
                rootNodeName: "tap-thumb",
                visualResponses: {}
            }
        },
        gamepadMapping: "xr-standard",
        rootNodeName: "oculus-hand-left",
        assetPath: "left.glb"
    },
    right: {
        selectComponentId: "xr-standard-trigger",
        components: {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            "xr-standard-trigger": {
                type: "trigger",
                gamepadIndices: {
                    button: 0
                },
                rootNodeName: "xr-standard-trigger",
                visualResponses: {}
            },
            // eslint-disable-next-line @typescript-eslint/naming-convention
            "swipe-left": {
                type: "button",
                gamepadIndices: {
                    button: 5
                },
                rootNodeName: "swipe-left",
                visualResponses: {}
            },
            // eslint-disable-next-line @typescript-eslint/naming-convention
            "swipe-right": {
                type: "button",
                gamepadIndices: {
                    button: 6
                },
                rootNodeName: "swipe-right",
                visualResponses: {}
            },
            // eslint-disable-next-line @typescript-eslint/naming-convention
            "swipe-forward": {
                type: "button",
                gamepadIndices: {
                    button: 7
                },
                rootNodeName: "swipe-forward",
                visualResponses: {}
            },
            // eslint-disable-next-line @typescript-eslint/naming-convention
            "swipe-backward": {
                type: "button",
                gamepadIndices: {
                    button: 8
                },
                rootNodeName: "swipe-backward",
                visualResponses: {}
            },
            // eslint-disable-next-line @typescript-eslint/naming-convention
            "tap-thumb": {
                type: "button",
                gamepadIndices: {
                    button: 9
                },
                rootNodeName: "tap-thumb",
                visualResponses: {}
            }
        },
        gamepadMapping: "xr-standard",
        rootNodeName: "oculus-hand-right",
        assetPath: "right.glb"
    },
    none: {
        selectComponentId: "xr-standard-trigger",
        components: {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            "xr-standard-trigger": {
                type: "trigger",
                gamepadIndices: {
                    button: 0
                },
                rootNodeName: "xr-standard-trigger",
                visualResponses: {}
            },
            menu: {
                type: "button",
                gamepadIndices: {
                    button: 4
                },
                rootNodeName: "menu",
                visualResponses: {}
            },
            // eslint-disable-next-line @typescript-eslint/naming-convention
            "swipe-left": {
                type: "button",
                gamepadIndices: {
                    button: 5
                },
                rootNodeName: "swipe-left",
                visualResponses: {}
            },
            // eslint-disable-next-line @typescript-eslint/naming-convention
            "swipe-right": {
                type: "button",
                gamepadIndices: {
                    button: 6
                },
                rootNodeName: "swipe-right",
                visualResponses: {}
            },
            // eslint-disable-next-line @typescript-eslint/naming-convention
            "swipe-forward": {
                type: "button",
                gamepadIndices: {
                    button: 7
                },
                rootNodeName: "swipe-forward",
                visualResponses: {}
            },
            // eslint-disable-next-line @typescript-eslint/naming-convention
            "swipe-backward": {
                type: "button",
                gamepadIndices: {
                    button: 8
                },
                rootNodeName: "swipe-backward",
                visualResponses: {}
            },
            // eslint-disable-next-line @typescript-eslint/naming-convention
            "tap-thumb": {
                type: "button",
                gamepadIndices: {
                    button: 9
                },
                rootNodeName: "tap-thumb",
                visualResponses: {}
            }
        },
        gamepadMapping: "xr-standard",
        rootNodeName: "oculus-hand-none",
        assetPath: "none.glb"
    }
}; //# sourceMappingURL=webXROculusHandController.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/motionController/webXRHTCViveMotionController.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WebXRHTCViveMotionController",
    ()=>WebXRHTCViveMotionController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$motionController$2f$webXRAbstractMotionController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/motionController/webXRAbstractMotionController.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/mesh.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$motionController$2f$webXRMotionControllerManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/motionController/webXRMotionControllerManager.js [app-ssr] (ecmascript)");
;
;
;
;
class WebXRHTCViveMotionController extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$motionController$2f$webXRAbstractMotionController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRAbstractMotionController"] {
    /**
     * Create a new Vive motion controller object
     * @param scene the scene to use to create this controller
     * @param gamepadObject the corresponding gamepad object
     * @param handedness the handedness of the controller
     */ constructor(scene, gamepadObject, handedness){
        super(scene, HTCViveLayout[handedness], gamepadObject, handedness);
        this.profileId = "htc-vive";
    }
    _getFilenameAndPath() {
        const filename = WebXRHTCViveMotionController.MODEL_FILENAME;
        const path = WebXRHTCViveMotionController.MODEL_BASE_URL;
        return {
            filename,
            path
        };
    }
    _getModelLoadingConstraints() {
        return true;
    }
    _processLoadedModel(_meshes) {
        const ids = this.getComponentIds();
        for (const id of ids){
            const comp = id && this.getComponent(id);
            if (comp) {
                comp.onButtonStateChangedObservable.add((component)=>{
                    if (!this.rootMesh || this.disableAnimation) {
                        return;
                    }
                    switch(id){
                        case "xr-standard-trigger":
                            this._modelRootNode.getChildren()[6].rotation.x = -component.value * 0.15;
                            return;
                        case "xr-standard-touchpad":
                            return;
                        case "xr-standard-squeeze":
                            return;
                    }
                }, undefined, true);
            }
        }
    }
    _setRootMesh(meshes) {
        this.rootMesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](this.profileId + " " + this.handedness, this.scene);
        for (const mesh of meshes){
            mesh.isPickable = false;
        }
        this._modelRootNode = meshes[1];
        this._modelRootNode.parent = this.rootMesh;
        if (!this.scene.useRightHandedSystem) {
            this.rootMesh.rotationQuaternion = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"].FromEulerAngles(0, Math.PI, 0);
        }
    }
    _updateModel() {
    // no-op. model is updated using observables.
    }
}
/**
 * The base url used to load the left and right controller models
 */ WebXRHTCViveMotionController.MODEL_BASE_URL = "https://controllers.babylonjs.com/vive/";
/**
 * File name for the controller model.
 */ WebXRHTCViveMotionController.MODEL_FILENAME = "wand.babylon";
// register the profile
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$motionController$2f$webXRMotionControllerManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRMotionControllerManager"].RegisterController("htc-vive", (xrInput, scene)=>{
    return new WebXRHTCViveMotionController(scene, xrInput.gamepad, xrInput.handedness);
});
// WebXRMotionControllerManager.RegisterController("htc-vive-legacy", (xrInput: XRInputSource, scene: Scene) => {
//     return new WebXRHTCViveMotionController(scene, <any>(xrInput.gamepad), xrInput.handedness, true);
// });
const HTCViveLayout = {
    left: {
        selectComponentId: "xr-standard-trigger",
        components: {
            "xr-standard-trigger": {
                type: "trigger",
                gamepadIndices: {
                    button: 0
                },
                rootNodeName: "xr_standard_trigger",
                visualResponses: {}
            },
            "xr-standard-squeeze": {
                type: "squeeze",
                gamepadIndices: {
                    button: 1
                },
                rootNodeName: "xr_standard_squeeze",
                visualResponses: {}
            },
            "xr-standard-touchpad": {
                type: "touchpad",
                gamepadIndices: {
                    button: 2,
                    xAxis: 0,
                    yAxis: 1
                },
                rootNodeName: "xr_standard_touchpad",
                visualResponses: {}
            },
            menu: {
                type: "button",
                gamepadIndices: {
                    button: 4
                },
                rootNodeName: "menu",
                visualResponses: {}
            }
        },
        gamepadMapping: "xr-standard",
        rootNodeName: "htc_vive_none",
        assetPath: "none.glb"
    },
    right: {
        selectComponentId: "xr-standard-trigger",
        components: {
            "xr-standard-trigger": {
                type: "trigger",
                gamepadIndices: {
                    button: 0
                },
                rootNodeName: "xr_standard_trigger",
                visualResponses: {}
            },
            "xr-standard-squeeze": {
                type: "squeeze",
                gamepadIndices: {
                    button: 1
                },
                rootNodeName: "xr_standard_squeeze",
                visualResponses: {}
            },
            "xr-standard-touchpad": {
                type: "touchpad",
                gamepadIndices: {
                    button: 2,
                    xAxis: 0,
                    yAxis: 1
                },
                rootNodeName: "xr_standard_touchpad",
                visualResponses: {}
            },
            menu: {
                type: "button",
                gamepadIndices: {
                    button: 4
                },
                rootNodeName: "menu",
                visualResponses: {}
            }
        },
        gamepadMapping: "xr-standard",
        rootNodeName: "htc_vive_none",
        assetPath: "none.glb"
    },
    none: {
        selectComponentId: "xr-standard-trigger",
        components: {
            "xr-standard-trigger": {
                type: "trigger",
                gamepadIndices: {
                    button: 0
                },
                rootNodeName: "xr_standard_trigger",
                visualResponses: {}
            },
            "xr-standard-squeeze": {
                type: "squeeze",
                gamepadIndices: {
                    button: 1
                },
                rootNodeName: "xr_standard_squeeze",
                visualResponses: {}
            },
            "xr-standard-touchpad": {
                type: "touchpad",
                gamepadIndices: {
                    button: 2,
                    xAxis: 0,
                    yAxis: 1
                },
                rootNodeName: "xr_standard_touchpad",
                visualResponses: {}
            },
            menu: {
                type: "button",
                gamepadIndices: {
                    button: 4
                },
                rootNodeName: "menu",
                visualResponses: {}
            }
        },
        gamepadMapping: "xr-standard",
        rootNodeName: "htc-vive-none",
        assetPath: "none.glb"
    }
}; //# sourceMappingURL=webXRHTCViveMotionController.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/motionController/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$motionController$2f$webXRAbstractMotionController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/motionController/webXRAbstractMotionController.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$motionController$2f$webXRControllerComponent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/motionController/webXRControllerComponent.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$motionController$2f$webXRGenericHandController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/motionController/webXRGenericHandController.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$motionController$2f$webXRGenericMotionController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/motionController/webXRGenericMotionController.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$motionController$2f$webXRMicrosoftMixedRealityController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/motionController/webXRMicrosoftMixedRealityController.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$motionController$2f$webXRMotionControllerManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/motionController/webXRMotionControllerManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$motionController$2f$webXROculusTouchMotionController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/motionController/webXROculusTouchMotionController.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$motionController$2f$webXROculusHandController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/motionController/webXROculusHandController.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$motionController$2f$webXRHTCViveMotionController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/motionController/webXRHTCViveMotionController.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$motionController$2f$webXRProfiledMotionController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/motionController/webXRProfiledMotionController.js [app-ssr] (ecmascript)"); //# sourceMappingURL=index.js.map
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
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/native/nativeXRFrame.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NativeXRFrame",
    ()=>NativeXRFrame
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$nativeEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/nativeEngine.js [app-ssr] (ecmascript)");
;
class NativeXRFrame {
    get session() {
        return this._nativeImpl.session;
    }
    constructor(_nativeImpl){
        this._nativeImpl = _nativeImpl;
        this._xrTransform = new XRRigidTransform();
        this._xrPose = {
            transform: this._xrTransform,
            emulatedPosition: false
        };
        // Enough space for position, orientation
        this._xrPoseVectorData = new Float32Array(4 + 4);
        this.fillPoses = this._nativeImpl.fillPoses.bind(this._nativeImpl);
        this.getViewerPose = this._nativeImpl.getViewerPose.bind(this._nativeImpl);
        this.getHitTestResults = this._nativeImpl.getHitTestResults.bind(this._nativeImpl);
        this.getHitTestResultsForTransientInput = ()=>{
            throw new Error("XRFrame.getHitTestResultsForTransientInput not supported on native.");
        };
        this.createAnchor = this._nativeImpl.createAnchor.bind(this._nativeImpl);
        this.getJointPose = this._nativeImpl.getJointPose.bind(this._nativeImpl);
        this.fillJointRadii = this._nativeImpl.fillJointRadii.bind(this._nativeImpl);
        this.getLightEstimate = ()=>{
            throw new Error("XRFrame.getLightEstimate not supported on native.");
        };
        this.getImageTrackingResults = ()=>{
            return this._nativeImpl._imageTrackingResults ?? [];
        };
    }
    getPose(space, baseSpace) {
        if (!this._nativeImpl.getPoseData(space, baseSpace, this._xrPoseVectorData.buffer, this._xrTransform.matrix.buffer)) {
            return undefined;
        }
        const position = this._xrTransform.position;
        position.x = this._xrPoseVectorData[0];
        position.y = this._xrPoseVectorData[1];
        position.z = this._xrPoseVectorData[2];
        position.w = this._xrPoseVectorData[3];
        const orientation = this._xrTransform.orientation;
        orientation.x = this._xrPoseVectorData[4];
        orientation.y = this._xrPoseVectorData[5];
        orientation.z = this._xrPoseVectorData[6];
        orientation.w = this._xrPoseVectorData[7];
        return this._xrPose;
    }
    get trackedAnchors() {
        return this._nativeImpl.trackedAnchors;
    }
    get worldInformation() {
        return this._nativeImpl.worldInformation;
    }
    get detectedPlanes() {
        return this._nativeImpl.detectedPlanes;
    }
    get featurePointCloud() {
        return this._nativeImpl.featurePointCloud;
    }
    getDepthInformation(view) {
        throw new Error("This function is not available in Babylon Native");
    // return this._nativeImpl.getDepthInformation(view);
    }
}
// eslint-disable-next-line @typescript-eslint/no-floating-promises
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$nativeEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterNativeTypeAsync"])("NativeXRFrame", NativeXRFrame); //# sourceMappingURL=nativeXRFrame.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/native/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$native$2f$nativeXRRenderTarget$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/native/nativeXRRenderTarget.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$native$2f$nativeXRFrame$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/native/nativeXRFrame.js [app-ssr] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/no-restricted-imports */ __turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRCamera$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/webXRCamera.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXREnterExitUI$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/webXREnterExitUI.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRExperienceHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/webXRExperienceHelper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRInput$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/webXRInput.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRInputSource$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/webXRInputSource.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRManagedOutputCanvas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/webXRManagedOutputCanvas.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/webXRTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRSessionManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/webXRSessionManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRDefaultExperience$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/webXRDefaultExperience.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRFeaturesManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/webXRFeaturesManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$motionController$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/motionController/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$native$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/native/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRRenderTargetTextureProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/webXRRenderTargetTextureProvider.js [app-ssr] (ecmascript)"); //# sourceMappingURL=index.js.map
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
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HandPart",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRHandTracking$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HandPart"],
    "IWebXRControllerPhysicsOptions",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRControllerPhysics$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IWebXRControllerPhysicsOptions"],
    "WebXRAbstractFeature",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRAbstractFeature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRAbstractFeature"],
    "WebXRAnchorSystem",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRAnchorSystem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRAnchorSystem"],
    "WebXRBackgroundRemover",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRBackgroundRemover$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRBackgroundRemover"],
    "WebXRControllerMovement",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRControllerMovement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRControllerMovement"],
    "WebXRControllerPhysics",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRControllerPhysics$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRControllerPhysics"],
    "WebXRControllerPointerSelection",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRControllerPointerSelection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRControllerPointerSelection"],
    "WebXRDepthSensing",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRDepthSensing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRDepthSensing"],
    "WebXRDomOverlay",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRDOMOverlay$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRDomOverlay"],
    "WebXREyeTracking",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXREyeTracking$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXREyeTracking"],
    "WebXRFeaturePointSystem",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRFeaturePointSystem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRFeaturePointSystem"],
    "WebXRHand",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRHandTracking$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRHand"],
    "WebXRHandJoint",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRHandTracking$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRHandJoint"],
    "WebXRHandTracking",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRHandTracking$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRHandTracking"],
    "WebXRHitTest",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRHitTest$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRHitTest"],
    "WebXRHitTestLegacy",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRHitTestLegacy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRHitTestLegacy"],
    "WebXRImageTracking",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRImageTracking$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRImageTracking"],
    "WebXRLayers",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRLayers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRLayers"],
    "WebXRLightEstimation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRLightEstimation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRLightEstimation"],
    "WebXRMeshDetector",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRMeshDetector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRMeshDetector"],
    "WebXRMotionControllerTeleportation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRControllerTeleportation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRMotionControllerTeleportation"],
    "WebXRNearControllerMode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRNearInteraction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRNearControllerMode"],
    "WebXRNearInteraction",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRNearInteraction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRNearInteraction"],
    "WebXRPlaneDetector",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRPlaneDetector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRPlaneDetector"],
    "WebXRRawCameraAccess",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRRawCameraAccess$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRRawCameraAccess"],
    "WebXRSpaceWarp",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRSpaceWarp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRSpaceWarp"],
    "WebXRSpaceWarpRenderTargetTextureProvider",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRSpaceWarp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRSpaceWarpRenderTargetTextureProvider"],
    "WebXRWalkingLocomotion",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRWalkingLocomotion$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRWalkingLocomotion"],
    "XRSpaceWarpRenderTarget",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRSpaceWarp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XRSpaceWarpRenderTarget"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRAbstractFeature$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/WebXRAbstractFeature.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRHitTestLegacy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/WebXRHitTestLegacy.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRAnchorSystem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/WebXRAnchorSystem.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRPlaneDetector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/WebXRPlaneDetector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRBackgroundRemover$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/WebXRBackgroundRemover.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRControllerTeleportation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/WebXRControllerTeleportation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRControllerPointerSelection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/WebXRControllerPointerSelection.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRControllerPhysics$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/WebXRControllerPhysics.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRHitTest$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/WebXRHitTest.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRFeaturePointSystem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/WebXRFeaturePointSystem.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRHandTracking$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/WebXRHandTracking.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRMeshDetector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/WebXRMeshDetector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRImageTracking$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/WebXRImageTracking.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRNearInteraction$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/WebXRNearInteraction.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRDOMOverlay$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/WebXRDOMOverlay.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRControllerMovement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/WebXRControllerMovement.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRLightEstimation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/WebXRLightEstimation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXREyeTracking$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/WebXREyeTracking.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRWalkingLocomotion$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/WebXRWalkingLocomotion.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRLayers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/WebXRLayers.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRDepthSensing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/WebXRDepthSensing.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRSpaceWarp$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/WebXRSpaceWarp.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$WebXRRawCameraAccess$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/WebXRRawCameraAccess.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/motionController/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WebXRAbstractMotionController",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$motionController$2f$webXRAbstractMotionController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRAbstractMotionController"],
    "WebXRControllerComponent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$motionController$2f$webXRControllerComponent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRControllerComponent"],
    "WebXRGenericHandController",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$motionController$2f$webXRGenericHandController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRGenericHandController"],
    "WebXRGenericTriggerMotionController",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$motionController$2f$webXRGenericMotionController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRGenericTriggerMotionController"],
    "WebXRHTCViveMotionController",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$motionController$2f$webXRHTCViveMotionController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRHTCViveMotionController"],
    "WebXRMicrosoftMixedRealityController",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$motionController$2f$webXRMicrosoftMixedRealityController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRMicrosoftMixedRealityController"],
    "WebXRMotionControllerManager",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$motionController$2f$webXRMotionControllerManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRMotionControllerManager"],
    "WebXROculusHandController",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$motionController$2f$webXROculusHandController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXROculusHandController"],
    "WebXROculusTouchMotionController",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$motionController$2f$webXROculusTouchMotionController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXROculusTouchMotionController"],
    "WebXRProfiledMotionController",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$motionController$2f$webXRProfiledMotionController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRProfiledMotionController"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$motionController$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/motionController/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$motionController$2f$webXRAbstractMotionController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/motionController/webXRAbstractMotionController.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$motionController$2f$webXRControllerComponent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/motionController/webXRControllerComponent.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$motionController$2f$webXRGenericHandController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/motionController/webXRGenericHandController.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$motionController$2f$webXRGenericMotionController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/motionController/webXRGenericMotionController.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$motionController$2f$webXRMicrosoftMixedRealityController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/motionController/webXRMicrosoftMixedRealityController.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$motionController$2f$webXRMotionControllerManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/motionController/webXRMotionControllerManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$motionController$2f$webXROculusTouchMotionController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/motionController/webXROculusTouchMotionController.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$motionController$2f$webXROculusHandController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/motionController/webXROculusHandController.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$motionController$2f$webXRHTCViveMotionController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/motionController/webXRHTCViveMotionController.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$motionController$2f$webXRProfiledMotionController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/motionController/webXRProfiledMotionController.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/native/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NativeXRFrame",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$native$2f$nativeXRFrame$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NativeXRFrame"],
    "NativeXRLayerRenderTargetTextureProvider",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$native$2f$nativeXRRenderTarget$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NativeXRLayerRenderTargetTextureProvider"],
    "NativeXRLayerWrapper",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$native$2f$nativeXRRenderTarget$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NativeXRLayerWrapper"],
    "NativeXRRenderTarget",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$native$2f$nativeXRRenderTarget$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NativeXRRenderTarget"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$native$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/native/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$native$2f$nativeXRRenderTarget$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/native/nativeXRRenderTarget.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$native$2f$nativeXRFrame$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/native/nativeXRFrame.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HandPart",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HandPart"],
    "IWebXRControllerPhysicsOptions",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IWebXRControllerPhysicsOptions"],
    "NativeXRFrame",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$native$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NativeXRFrame"],
    "NativeXRLayerRenderTargetTextureProvider",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$native$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NativeXRLayerRenderTargetTextureProvider"],
    "NativeXRLayerWrapper",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$native$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NativeXRLayerWrapper"],
    "NativeXRRenderTarget",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$native$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NativeXRRenderTarget"],
    "WebXRAbstractFeature",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRAbstractFeature"],
    "WebXRAbstractMotionController",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$motionController$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRAbstractMotionController"],
    "WebXRAnchorSystem",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRAnchorSystem"],
    "WebXRBackgroundRemover",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRBackgroundRemover"],
    "WebXRCamera",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRCamera$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRCamera"],
    "WebXRControllerComponent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$motionController$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRControllerComponent"],
    "WebXRControllerMovement",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRControllerMovement"],
    "WebXRControllerPhysics",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRControllerPhysics"],
    "WebXRControllerPointerSelection",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRControllerPointerSelection"],
    "WebXRDefaultExperience",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRDefaultExperience$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRDefaultExperience"],
    "WebXRDefaultExperienceOptions",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRDefaultExperience$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRDefaultExperienceOptions"],
    "WebXRDepthSensing",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRDepthSensing"],
    "WebXRDomOverlay",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRDomOverlay"],
    "WebXREnterExitUI",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXREnterExitUI$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXREnterExitUI"],
    "WebXREnterExitUIButton",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXREnterExitUI$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXREnterExitUIButton"],
    "WebXREnterExitUIOptions",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXREnterExitUI$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXREnterExitUIOptions"],
    "WebXRExperienceHelper",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRExperienceHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRExperienceHelper"],
    "WebXREyeTracking",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXREyeTracking"],
    "WebXRFeatureName",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRFeaturesManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRFeatureName"],
    "WebXRFeaturePointSystem",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRFeaturePointSystem"],
    "WebXRFeaturesManager",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRFeaturesManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRFeaturesManager"],
    "WebXRGenericHandController",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$motionController$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRGenericHandController"],
    "WebXRGenericTriggerMotionController",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$motionController$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRGenericTriggerMotionController"],
    "WebXRHTCViveMotionController",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$motionController$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRHTCViveMotionController"],
    "WebXRHand",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRHand"],
    "WebXRHandJoint",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRHandJoint"],
    "WebXRHandTracking",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRHandTracking"],
    "WebXRHitTest",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRHitTest"],
    "WebXRHitTestLegacy",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRHitTestLegacy"],
    "WebXRImageTracking",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRImageTracking"],
    "WebXRInput",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRInput$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRInput"],
    "WebXRInputSource",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRInputSource$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRInputSource"],
    "WebXRLayerRenderTargetTextureProvider",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRRenderTargetTextureProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRLayerRenderTargetTextureProvider"],
    "WebXRLayers",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRLayers"],
    "WebXRLightEstimation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRLightEstimation"],
    "WebXRManagedOutputCanvas",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRManagedOutputCanvas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRManagedOutputCanvas"],
    "WebXRManagedOutputCanvasOptions",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRManagedOutputCanvas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRManagedOutputCanvasOptions"],
    "WebXRMeshDetector",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRMeshDetector"],
    "WebXRMicrosoftMixedRealityController",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$motionController$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRMicrosoftMixedRealityController"],
    "WebXRMotionControllerManager",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$motionController$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRMotionControllerManager"],
    "WebXRMotionControllerTeleportation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRMotionControllerTeleportation"],
    "WebXRNearControllerMode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRNearControllerMode"],
    "WebXRNearInteraction",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRNearInteraction"],
    "WebXROculusHandController",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$motionController$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXROculusHandController"],
    "WebXROculusTouchMotionController",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$motionController$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXROculusTouchMotionController"],
    "WebXRPlaneDetector",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRPlaneDetector"],
    "WebXRProfiledMotionController",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$motionController$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRProfiledMotionController"],
    "WebXRRawCameraAccess",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRRawCameraAccess"],
    "WebXRSessionManager",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRSessionManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRSessionManager"],
    "WebXRSpaceWarp",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRSpaceWarp"],
    "WebXRSpaceWarpRenderTargetTextureProvider",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRSpaceWarpRenderTargetTextureProvider"],
    "WebXRState",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRState"],
    "WebXRTrackingState",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRTrackingState"],
    "WebXRWalkingLocomotion",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebXRWalkingLocomotion"],
    "XRSpaceWarpRenderTarget",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XRSpaceWarpRenderTarget"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRCamera$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/webXRCamera.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXREnterExitUI$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/webXREnterExitUI.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRExperienceHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/webXRExperienceHelper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRInput$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/webXRInput.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRInputSource$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/webXRInputSource.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRManagedOutputCanvas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/webXRManagedOutputCanvas.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/webXRTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRSessionManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/webXRSessionManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRDefaultExperience$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/webXRDefaultExperience.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRFeaturesManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/webXRFeaturesManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$features$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/features/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$motionController$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/motionController/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$native$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/native/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRRenderTargetTextureProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/webXRRenderTargetTextureProvider.js [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=dcdbf_%40babylonjs_core_XR_f639e606._.js.map