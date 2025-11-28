(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/textureSampler.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Class used to store a texture sampler data
 */ __turbopack_context__.s([
    "TextureSampler",
    ()=>TextureSampler
]);
class TextureSampler {
    /**
     * | Value | Type               | Description |
     * | ----- | ------------------ | ----------- |
     * | 0     | CLAMP_ADDRESSMODE  |             |
     * | 1     | WRAP_ADDRESSMODE   |             |
     * | 2     | MIRROR_ADDRESSMODE |             |
     */ get wrapU() {
        return this._cachedWrapU;
    }
    set wrapU(value) {
        this._cachedWrapU = value;
    }
    /**
     * | Value | Type               | Description |
     * | ----- | ------------------ | ----------- |
     * | 0     | CLAMP_ADDRESSMODE  |             |
     * | 1     | WRAP_ADDRESSMODE   |             |
     * | 2     | MIRROR_ADDRESSMODE |             |
     */ get wrapV() {
        return this._cachedWrapV;
    }
    set wrapV(value) {
        this._cachedWrapV = value;
    }
    /**
     * | Value | Type               | Description |
     * | ----- | ------------------ | ----------- |
     * | 0     | CLAMP_ADDRESSMODE  |             |
     * | 1     | WRAP_ADDRESSMODE   |             |
     * | 2     | MIRROR_ADDRESSMODE |             |
     */ get wrapR() {
        return this._cachedWrapR;
    }
    set wrapR(value) {
        this._cachedWrapR = value;
    }
    /**
     * With compliant hardware and browser (supporting anisotropic filtering)
     * this defines the level of anisotropic filtering in the texture.
     * The higher the better but the slower.
     */ get anisotropicFilteringLevel() {
        return this._cachedAnisotropicFilteringLevel;
    }
    set anisotropicFilteringLevel(value) {
        this._cachedAnisotropicFilteringLevel = value;
    }
    /**
     * Gets or sets the comparison function (513, 514, etc). Set 0 to not use a comparison function
     */ get comparisonFunction() {
        return this._comparisonFunction;
    }
    set comparisonFunction(value) {
        this._comparisonFunction = value;
    }
    /**
     * Indicates to use the mip maps (if available on the texture).
     * Thanks to this flag, you can instruct the sampler to not sample the mipmaps even if they exist (and if the sampling mode is set to a value that normally samples the mipmaps!)
     */ get useMipMaps() {
        return this._useMipMaps;
    }
    set useMipMaps(value) {
        this._useMipMaps = value;
    }
    /**
     * Creates a Sampler instance
     */ constructor(){
        /**
         * Gets the sampling mode of the texture
         */ this.samplingMode = -1;
        this._useMipMaps = true;
        /** @internal */ this._cachedWrapU = null;
        /** @internal */ this._cachedWrapV = null;
        /** @internal */ this._cachedWrapR = null;
        /** @internal */ this._cachedAnisotropicFilteringLevel = null;
        /** @internal */ this._comparisonFunction = 0;
    }
    /**
     * Sets all the parameters of the sampler
     * @param wrapU u address mode (default: TEXTURE_WRAP_ADDRESSMODE)
     * @param wrapV v address mode (default: TEXTURE_WRAP_ADDRESSMODE)
     * @param wrapR r address mode (default: TEXTURE_WRAP_ADDRESSMODE)
     * @param anisotropicFilteringLevel anisotropic level (default: 1)
     * @param samplingMode sampling mode (default: 2)
     * @param comparisonFunction comparison function (default: 0 - no comparison function)
     * @returns the current sampler instance
     */ setParameters(wrapU = 1, wrapV = 1, wrapR = 1, anisotropicFilteringLevel = 1, samplingMode = 2, comparisonFunction = 0) {
        this._cachedWrapU = wrapU;
        this._cachedWrapV = wrapV;
        this._cachedWrapR = wrapR;
        this._cachedAnisotropicFilteringLevel = anisotropicFilteringLevel;
        this.samplingMode = samplingMode;
        this._comparisonFunction = comparisonFunction;
        return this;
    }
    /**
     * Compares this sampler with another one
     * @param other sampler to compare with
     * @returns true if the samplers have the same parametres, else false
     */ compareSampler(other) {
        return this._cachedWrapU === other._cachedWrapU && this._cachedWrapV === other._cachedWrapV && this._cachedWrapR === other._cachedWrapR && this._cachedAnisotropicFilteringLevel === other._cachedAnisotropicFilteringLevel && this.samplingMode === other.samplingMode && this._comparisonFunction === other._comparisonFunction && this._useMipMaps === other._useMipMaps;
    }
} //# sourceMappingURL=textureSampler.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/internalTexture.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InternalTexture",
    ()=>InternalTexture,
    "InternalTextureSource",
    ()=>InternalTextureSource
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$textureSampler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/textureSampler.js [app-client] (ecmascript)");
;
;
var InternalTextureSource;
(function(InternalTextureSource) {
    /**
     * The source of the texture data is unknown
     */ InternalTextureSource[InternalTextureSource["Unknown"] = 0] = "Unknown";
    /**
     * Texture data comes from an URL
     */ InternalTextureSource[InternalTextureSource["Url"] = 1] = "Url";
    /**
     * Texture data is only used for temporary storage
     */ InternalTextureSource[InternalTextureSource["Temp"] = 2] = "Temp";
    /**
     * Texture data comes from raw data (ArrayBuffer)
     */ InternalTextureSource[InternalTextureSource["Raw"] = 3] = "Raw";
    /**
     * Texture content is dynamic (video or dynamic texture)
     */ InternalTextureSource[InternalTextureSource["Dynamic"] = 4] = "Dynamic";
    /**
     * Texture content is generated by rendering to it
     */ InternalTextureSource[InternalTextureSource["RenderTarget"] = 5] = "RenderTarget";
    /**
     * Texture content is part of a multi render target process
     */ InternalTextureSource[InternalTextureSource["MultiRenderTarget"] = 6] = "MultiRenderTarget";
    /**
     * Texture data comes from a cube data file
     */ InternalTextureSource[InternalTextureSource["Cube"] = 7] = "Cube";
    /**
     * Texture data comes from a raw cube data
     */ InternalTextureSource[InternalTextureSource["CubeRaw"] = 8] = "CubeRaw";
    /**
     * Texture data come from a prefiltered cube data file
     */ InternalTextureSource[InternalTextureSource["CubePrefiltered"] = 9] = "CubePrefiltered";
    /**
     * Texture content is raw 3D data
     */ InternalTextureSource[InternalTextureSource["Raw3D"] = 10] = "Raw3D";
    /**
     * Texture content is raw 2D array data
     */ InternalTextureSource[InternalTextureSource["Raw2DArray"] = 11] = "Raw2DArray";
    /**
     * Texture content is a depth/stencil texture
     */ InternalTextureSource[InternalTextureSource["DepthStencil"] = 12] = "DepthStencil";
    /**
     * Texture data comes from a raw cube data encoded with RGBD
     */ InternalTextureSource[InternalTextureSource["CubeRawRGBD"] = 13] = "CubeRawRGBD";
    /**
     * Texture content is a depth texture
     */ InternalTextureSource[InternalTextureSource["Depth"] = 14] = "Depth";
})(InternalTextureSource || (InternalTextureSource = {}));
class InternalTexture extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$textureSampler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextureSampler"] {
    /**
     * Gets a boolean indicating if the texture uses mipmaps
     * TODO implements useMipMaps as a separate setting from generateMipMaps
     */ get useMipMaps() {
        return this.generateMipMaps;
    }
    set useMipMaps(value) {
        this.generateMipMaps = value;
    }
    /** Gets the unique id of the internal texture */ get uniqueId() {
        return this._uniqueId;
    }
    /** @internal */ _setUniqueId(id) {
        this._uniqueId = id;
    }
    /**
     * Gets the Engine the texture belongs to.
     * @returns The babylon engine
     */ getEngine() {
        return this._engine;
    }
    /**
     * Gets the data source type of the texture
     */ get source() {
        return this._source;
    }
    /**
     * Creates a new InternalTexture
     * @param engine defines the engine to use
     * @param source defines the type of data that will be used
     * @param delayAllocation if the texture allocation should be delayed (default: false)
     */ constructor(engine, source, delayAllocation = false){
        super();
        /**
         * Defines if the texture is ready
         */ this.isReady = false;
        /**
         * Defines if the texture is a cube texture
         */ this.isCube = false;
        /**
         * Defines if the texture contains 3D data
         */ this.is3D = false;
        /**
         * Defines if the texture contains 2D array data
         */ this.is2DArray = false;
        /**
         * Defines if the texture contains multiview data
         */ this.isMultiview = false;
        /**
         * Gets the URL used to load this texture
         */ this.url = "";
        /**
         * Gets a boolean indicating if the texture needs mipmaps generation
         */ this.generateMipMaps = false;
        /**
         * Gets the number of samples used by the texture (WebGL2+ only)
         */ this.samples = 0;
        /**
         * Gets the type of the texture (int, float...)
         */ this.type = -1;
        /**
         * Gets the format of the texture (RGB, RGBA...)
         */ this.format = -1;
        /**
         * Observable called when the texture is loaded
         */ this.onLoadedObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * Observable called when the texture load is raising an error
         */ this.onErrorObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * If this callback is defined it will be called instead of the default _rebuild function
         */ this.onRebuildCallback = null;
        /**
         * Gets the width of the texture
         */ this.width = 0;
        /**
         * Gets the height of the texture
         */ this.height = 0;
        /**
         * Gets the depth of the texture
         */ this.depth = 0;
        /**
         * Gets the initial width of the texture (It could be rescaled if the current system does not support non power of two textures)
         */ this.baseWidth = 0;
        /**
         * Gets the initial height of the texture (It could be rescaled if the current system does not support non power of two textures)
         */ this.baseHeight = 0;
        /**
         * Gets the initial depth of the texture (It could be rescaled if the current system does not support non power of two textures)
         */ this.baseDepth = 0;
        /**
         * Gets a boolean indicating if the texture is inverted on Y axis
         */ this.invertY = false;
        // Private
        /** @internal */ this._invertVScale = false;
        /** @internal */ this._associatedChannel = -1;
        /** @internal */ this._source = 0 /* InternalTextureSource.Unknown */ ;
        /** @internal */ this._buffer = null;
        /** @internal */ this._bufferView = null;
        /** @internal */ this._bufferViewArray = null;
        /** @internal */ this._bufferViewArrayArray = null;
        /** @internal */ this._size = 0;
        /** @internal */ this._extension = "";
        /** @internal */ this._files = null;
        /** @internal */ this._workingCanvas = null;
        /** @internal */ this._workingContext = null;
        /** @internal */ this._cachedCoordinatesMode = null;
        /** @internal */ this._isDisabled = false;
        /** @internal */ this._compression = null;
        /** @internal */ this._sphericalPolynomial = null;
        /** @internal */ this._sphericalPolynomialPromise = null;
        /** @internal */ this._sphericalPolynomialComputed = false;
        /** @internal */ this._lodGenerationScale = 0;
        /** @internal */ this._lodGenerationOffset = 0;
        /** @internal */ this._useSRGBBuffer = false;
        /** @internal */ this._creationFlags = 0;
        // The following three fields helps sharing generated fixed LODs for texture filtering
        // In environment not supporting the textureLOD extension like EDGE. They are for internal use only.
        // They are at the level of the gl texture to benefit from the cache.
        /** @internal */ this._lodTextureHigh = null;
        /** @internal */ this._lodTextureMid = null;
        /** @internal */ this._lodTextureLow = null;
        /** @internal */ this._isRGBD = false;
        /** @internal */ this._linearSpecularLOD = false;
        /** @internal */ this._irradianceTexture = null;
        /** @internal */ this._hardwareTexture = null;
        /** @internal */ this._maxLodLevel = null;
        /** @internal */ this._references = 1;
        /** @internal */ this._gammaSpace = null;
        /** @internal */ this._premulAlpha = false;
        /** @internal */ this._dynamicTextureSource = null;
        /** @internal */ this._autoMSAAManagement = false;
        this._engine = engine;
        this._source = source;
        this._uniqueId = InternalTexture._Counter++;
        if (!delayAllocation) {
            this._hardwareTexture = engine._createHardwareTexture();
        }
    }
    /**
     * Increments the number of references (ie. the number of Texture that point to it)
     */ incrementReferences() {
        this._references++;
    }
    /**
     * Change the size of the texture (not the size of the content)
     * @param width defines the new width
     * @param height defines the new height
     * @param depth defines the new depth (1 by default)
     */ updateSize(width, height, depth = 1) {
        this._engine.updateTextureDimensions(this, width, height, depth);
        this.width = width;
        this.height = height;
        this.depth = depth;
        this.baseWidth = width;
        this.baseHeight = height;
        this.baseDepth = depth;
        this._size = width * height * depth;
    }
    /** @internal */ _rebuild() {
        this.isReady = false;
        this._cachedCoordinatesMode = null;
        this._cachedWrapU = null;
        this._cachedWrapV = null;
        this._cachedWrapR = null;
        this._cachedAnisotropicFilteringLevel = null;
        if (this.onRebuildCallback) {
            const data = this.onRebuildCallback(this);
            const swapAndSetIsReady = (proxyInternalTexture)=>{
                proxyInternalTexture._swapAndDie(this, false);
                this.isReady = data.isReady;
            };
            if (data.isAsync) {
                // eslint-disable-next-line @typescript-eslint/no-floating-promises, github/no-then
                data.proxy.then(swapAndSetIsReady);
            } else {
                swapAndSetIsReady(data.proxy);
            }
            return;
        }
        let proxy;
        switch(this.source){
            case 2 /* InternalTextureSource.Temp */ :
                break;
            case 1 /* InternalTextureSource.Url */ :
                proxy = this._engine.createTexture(this._originalUrl ?? this.url, !this.generateMipMaps, this.invertY, null, this.samplingMode, // Do not use Proxy here as it could be fully synchronous
                // and proxy would be undefined.
                (temp)=>{
                    temp._swapAndDie(this, false);
                    this.isReady = true;
                }, null, this._buffer, undefined, this.format, this._extension, undefined, undefined, undefined, this._useSRGBBuffer);
                return;
            case 3 /* InternalTextureSource.Raw */ :
                proxy = this._engine.createRawTexture(this._bufferView, this.baseWidth, this.baseHeight, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type, this._creationFlags, this._useSRGBBuffer);
                proxy._swapAndDie(this, false);
                this.isReady = true;
                break;
            case 10 /* InternalTextureSource.Raw3D */ :
                proxy = this._engine.createRawTexture3D(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type);
                proxy._swapAndDie(this, false);
                this.isReady = true;
                break;
            case 11 /* InternalTextureSource.Raw2DArray */ :
                proxy = this._engine.createRawTexture2DArray(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type);
                proxy._swapAndDie(this, false);
                this.isReady = true;
                break;
            case 4 /* InternalTextureSource.Dynamic */ :
                proxy = this._engine.createDynamicTexture(this.baseWidth, this.baseHeight, this.generateMipMaps, this.samplingMode);
                proxy._swapAndDie(this, false);
                if (this._dynamicTextureSource) {
                    this._engine.updateDynamicTexture(this, this._dynamicTextureSource, this.invertY, this._premulAlpha, this.format, true);
                }
                break;
            case 7 /* InternalTextureSource.Cube */ :
                proxy = this._engine.createCubeTexture(this.url, null, this._files, !this.generateMipMaps, ()=>{
                    proxy._swapAndDie(this, false);
                    this.isReady = true;
                }, null, this.format, this._extension, false, 0, 0, null, undefined, this._useSRGBBuffer, ArrayBuffer.isView(this._buffer) ? this._buffer : null);
                return;
            case 8 /* InternalTextureSource.CubeRaw */ :
                proxy = this._engine.createRawCubeTexture(this._bufferViewArray, this.width, this._originalFormat ?? this.format, this.type, this.generateMipMaps, this.invertY, this.samplingMode, this._compression);
                proxy._swapAndDie(this, false);
                this.isReady = true;
                break;
            case 13 /* InternalTextureSource.CubeRawRGBD */ :
                // This case is being handeled by the environment texture tools and is not a part of the rebuild process.
                // To use CubeRawRGBD use updateRGBDAsync on the cube texture.
                return;
            case 9 /* InternalTextureSource.CubePrefiltered */ :
                proxy = this._engine.createPrefilteredCubeTexture(this.url, null, this._lodGenerationScale, this._lodGenerationOffset, (proxy)=>{
                    if (proxy) {
                        proxy._swapAndDie(this, false);
                    }
                    this.isReady = true;
                }, null, this.format, this._extension);
                proxy._sphericalPolynomial = this._sphericalPolynomial;
                return;
            case 12 /* InternalTextureSource.DepthStencil */ :
            case 14 /* InternalTextureSource.Depth */ :
                {
                    break;
                }
        }
    }
    /**
     * @internal
     */ _swapAndDie(target, swapAll = true) {
        // TODO what about refcount on target?
        this._hardwareTexture?.setUsage(target._source, this.generateMipMaps, this.is2DArray, this.isCube, this.is3D, this.width, this.height, this.depth);
        target._hardwareTexture = this._hardwareTexture;
        if (swapAll) {
            target._isRGBD = this._isRGBD;
        }
        if (this._lodTextureHigh) {
            if (target._lodTextureHigh) {
                target._lodTextureHigh.dispose();
            }
            target._lodTextureHigh = this._lodTextureHigh;
        }
        if (this._lodTextureMid) {
            if (target._lodTextureMid) {
                target._lodTextureMid.dispose();
            }
            target._lodTextureMid = this._lodTextureMid;
        }
        if (this._lodTextureLow) {
            if (target._lodTextureLow) {
                target._lodTextureLow.dispose();
            }
            target._lodTextureLow = this._lodTextureLow;
        }
        if (this._irradianceTexture) {
            if (target._irradianceTexture) {
                target._irradianceTexture.dispose();
            }
            target._irradianceTexture = this._irradianceTexture;
        }
        const cache = this._engine.getLoadedTexturesCache();
        let index = cache.indexOf(this);
        if (index !== -1) {
            cache.splice(index, 1);
        }
        index = cache.indexOf(target);
        if (index === -1) {
            cache.push(target);
        }
    }
    /**
     * Dispose the current allocated resources
     */ dispose() {
        this._references--;
        if (this._references === 0) {
            this.onLoadedObservable.clear();
            this.onErrorObservable.clear();
            this._engine._releaseTexture(this);
            this._hardwareTexture = null;
            this._dynamicTextureSource = null;
        }
    }
}
/** @internal */ InternalTexture._Counter = 0; //# sourceMappingURL=internalTexture.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Loaders/textureLoaderManager.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_GetCompatibleTextureLoader",
    ()=>_GetCompatibleTextureLoader,
    "registerTextureLoader",
    ()=>registerTextureLoader,
    "unregisterTextureLoader",
    ()=>unregisterTextureLoader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-client] (ecmascript)");
;
const RegisteredTextureLoaders = new Map();
function registerTextureLoader(extension, loaderFactory) {
    if (unregisterTextureLoader(extension)) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Warn(`Extension with the name '${extension}' already exists`);
    }
    RegisteredTextureLoaders.set(extension, loaderFactory);
}
function unregisterTextureLoader(extension) {
    return RegisteredTextureLoaders.delete(extension);
}
function _GetCompatibleTextureLoader(extension, mimeType) {
    if (mimeType === "image/ktx" || mimeType === "image/ktx2") {
        extension = ".ktx";
    }
    if (!RegisteredTextureLoaders.has(extension)) {
        if (extension.endsWith(".ies")) {
            registerTextureLoader(".ies", async ()=>await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Loaders/iesTextureLoader.js [app-client] (ecmascript, async loader)").then((module)=>new module._IESTextureLoader()));
        }
        if (extension.endsWith(".dds")) {
            registerTextureLoader(".dds", async ()=>await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Loaders/ddsTextureLoader.js [app-client] (ecmascript, async loader)").then((module)=>new module._DDSTextureLoader()));
        }
        if (extension.endsWith(".basis")) {
            registerTextureLoader(".basis", async ()=>await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Loaders/basisTextureLoader.js [app-client] (ecmascript, async loader)").then((module)=>new module._BasisTextureLoader()));
        }
        if (extension.endsWith(".env")) {
            registerTextureLoader(".env", async ()=>await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Loaders/envTextureLoader.js [app-client] (ecmascript, async loader)").then((module)=>new module._ENVTextureLoader()));
        }
        if (extension.endsWith(".hdr")) {
            registerTextureLoader(".hdr", async ()=>await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Loaders/hdrTextureLoader.js [app-client] (ecmascript, async loader)").then((module)=>new module._HDRTextureLoader()));
        }
        // The ".ktx2" file extension is still up for debate: https://github.com/KhronosGroup/KTX-Specification/issues/18
        if (extension.endsWith(".ktx") || extension.endsWith(".ktx2")) {
            registerTextureLoader(".ktx", async ()=>await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Loaders/ktxTextureLoader.js [app-client] (ecmascript, async loader)").then((module)=>new module._KTXTextureLoader()));
            registerTextureLoader(".ktx2", async ()=>await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Loaders/ktxTextureLoader.js [app-client] (ecmascript, async loader)").then((module)=>new module._KTXTextureLoader()));
        }
        if (extension.endsWith(".tga")) {
            registerTextureLoader(".tga", async ()=>await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Loaders/tgaTextureLoader.js [app-client] (ecmascript, async loader)").then((module)=>new module._TGATextureLoader()));
        }
        if (extension.endsWith(".exr")) {
            registerTextureLoader(".exr", async ()=>await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Loaders/exrTextureLoader.js [app-client] (ecmascript, async loader)").then((module)=>new module._ExrTextureLoader()));
        }
    }
    const registered = RegisteredTextureLoaders.get(extension);
    return registered ? Promise.resolve(registered(mimeType)) : null;
} //# sourceMappingURL=textureLoaderManager.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/thinTexture.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThinTexture",
    ()=>ThinTexture
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$size$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.size.js [app-client] (ecmascript)");
;
class ThinTexture {
    /**
     * | Value | Type               | Description |
     * | ----- | ------------------ | ----------- |
     * | 0     | CLAMP_ADDRESSMODE  |             |
     * | 1     | WRAP_ADDRESSMODE   |             |
     * | 2     | MIRROR_ADDRESSMODE |             |
     */ get wrapU() {
        return this._wrapU;
    }
    set wrapU(value) {
        this._wrapU = value;
    }
    /**
     * | Value | Type               | Description |
     * | ----- | ------------------ | ----------- |
     * | 0     | CLAMP_ADDRESSMODE  |             |
     * | 1     | WRAP_ADDRESSMODE   |             |
     * | 2     | MIRROR_ADDRESSMODE |             |
     */ get wrapV() {
        return this._wrapV;
    }
    set wrapV(value) {
        this._wrapV = value;
    }
    /**
     * How a texture is mapped.
     * Unused in thin texture mode.
     */ get coordinatesMode() {
        return 0;
    }
    /**
     * Define if the texture is a cube texture or if false a 2d texture.
     */ get isCube() {
        if (!this._texture) {
            return false;
        }
        return this._texture.isCube;
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    set isCube(value) {
        if (!this._texture) {
            return;
        }
        this._texture.isCube = value;
    }
    /**
     * Define if the texture is a 3d texture (webgl 2) or if false a 2d texture.
     */ get is3D() {
        if (!this._texture) {
            return false;
        }
        return this._texture.is3D;
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    set is3D(value) {
        if (!this._texture) {
            return;
        }
        this._texture.is3D = value;
    }
    /**
     * Define if the texture is a 2d array texture (webgl 2) or if false a 2d texture.
     */ get is2DArray() {
        if (!this._texture) {
            return false;
        }
        return this._texture.is2DArray;
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    set is2DArray(value) {
        if (!this._texture) {
            return;
        }
        this._texture.is2DArray = value;
    }
    /**
     * Get the class name of the texture.
     * @returns "ThinTexture"
     */ getClassName() {
        return "ThinTexture";
    }
    static _IsRenderTargetWrapper(texture) {
        return texture?.shareDepth !== undefined;
    }
    /**
     * Instantiates a new ThinTexture.
     * Base class of all the textures in babylon.
     * This can be used as an internal texture wrapper in AbstractEngine to benefit from the cache
     * @param internalTexture Define the internalTexture to wrap. You can also pass a RenderTargetWrapper, in which case the texture will be the render target's texture
     */ constructor(internalTexture){
        this._wrapU = 1;
        this._wrapV = 1;
        /**
         * | Value | Type               | Description |
         * | ----- | ------------------ | ----------- |
         * | 0     | CLAMP_ADDRESSMODE  |             |
         * | 1     | WRAP_ADDRESSMODE   |             |
         * | 2     | MIRROR_ADDRESSMODE |             |
         */ this.wrapR = 1;
        /**
         * With compliant hardware and browser (supporting anisotropic filtering)
         * this defines the level of anisotropic filtering in the texture.
         * The higher the better but the slower. This defaults to 4 as it seems to be the best tradeoff.
         */ this.anisotropicFilteringLevel = 4;
        /**
         * Define the current state of the loading sequence when in delayed load mode.
         */ this.delayLoadState = 0;
        /** @internal */ this._texture = null;
        this._engine = null;
        this._cachedSize = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$size$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Size"].Zero();
        this._cachedBaseSize = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$size$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Size"].Zero();
        /** @internal */ this._initialSamplingMode = 2;
        this._texture = ThinTexture._IsRenderTargetWrapper(internalTexture) ? internalTexture.texture : internalTexture;
        if (this._texture) {
            this._engine = this._texture.getEngine();
            this.wrapU = this._texture._cachedWrapU ?? this.wrapU;
            this.wrapV = this._texture._cachedWrapV ?? this.wrapV;
            this.wrapR = this._texture._cachedWrapR ?? this.wrapR;
        }
    }
    /**
     * Get if the texture is ready to be used (downloaded, converted, mip mapped...).
     * @returns true if fully ready
     */ isReady() {
        if (this.delayLoadState === 4) {
            this.delayLoad();
            return false;
        }
        if (this._texture) {
            return this._texture.isReady;
        }
        return false;
    }
    /**
     * Triggers the load sequence in delayed load mode.
     */ delayLoad() {}
    /**
     * Get the underlying lower level texture from Babylon.
     * @returns the internal texture
     */ getInternalTexture() {
        return this._texture;
    }
    /**
     * Get the size of the texture.
     * @returns the texture size.
     */ getSize() {
        if (this._texture) {
            if (this._texture.width) {
                this._cachedSize.width = this._texture.width;
                this._cachedSize.height = this._texture.height;
                return this._cachedSize;
            }
            if (this._texture._size) {
                this._cachedSize.width = this._texture._size;
                this._cachedSize.height = this._texture._size;
                return this._cachedSize;
            }
        }
        return this._cachedSize;
    }
    /**
     * Get the base size of the texture.
     * It can be different from the size if the texture has been resized for POT for instance
     * @returns the base size
     */ getBaseSize() {
        if (!this.isReady() || !this._texture) {
            this._cachedBaseSize.width = 0;
            this._cachedBaseSize.height = 0;
            return this._cachedBaseSize;
        }
        if (this._texture._size) {
            this._cachedBaseSize.width = this._texture._size;
            this._cachedBaseSize.height = this._texture._size;
            return this._cachedBaseSize;
        }
        this._cachedBaseSize.width = this._texture.baseWidth;
        this._cachedBaseSize.height = this._texture.baseHeight;
        return this._cachedBaseSize;
    }
    /**
     * Get the current sampling mode associated with the texture.
     */ get samplingMode() {
        if (!this._texture) {
            return this._initialSamplingMode;
        }
        return this._texture.samplingMode;
    }
    /**
     * Update the sampling mode of the texture.
     * Default is Trilinear mode.
     *
     * | Value | Type               | Description |
     * | ----- | ------------------ | ----------- |
     * | 1     | NEAREST_SAMPLINGMODE or NEAREST_NEAREST_MIPLINEAR  | Nearest is: mag = nearest, min = nearest, mip = linear |
     * | 2     | BILINEAR_SAMPLINGMODE or LINEAR_LINEAR_MIPNEAREST | Bilinear is: mag = linear, min = linear, mip = nearest |
     * | 3     | TRILINEAR_SAMPLINGMODE or LINEAR_LINEAR_MIPLINEAR | Trilinear is: mag = linear, min = linear, mip = linear |
     * | 4     | NEAREST_NEAREST_MIPNEAREST |             |
     * | 5    | NEAREST_LINEAR_MIPNEAREST |             |
     * | 6    | NEAREST_LINEAR_MIPLINEAR |             |
     * | 7    | NEAREST_LINEAR |             |
     * | 8    | NEAREST_NEAREST |             |
     * | 9   | LINEAR_NEAREST_MIPNEAREST |             |
     * | 10   | LINEAR_NEAREST_MIPLINEAR |             |
     * | 11   | LINEAR_LINEAR |             |
     * | 12   | LINEAR_NEAREST |             |
     *
     *    > _mag_: magnification filter (close to the viewer)
     *    > _min_: minification filter (far from the viewer)
     *    > _mip_: filter used between mip map levels
     *@param samplingMode Define the new sampling mode of the texture
     *@param generateMipMaps Define if the texture should generate mip maps or not. Default is false.
     */ updateSamplingMode(samplingMode, generateMipMaps = false) {
        if (this._texture && this._engine) {
            this._engine.updateTextureSamplingMode(samplingMode, this._texture, this._texture.generateMipMaps && generateMipMaps);
        }
    }
    /**
     * Release and destroy the underlying lower level texture aka internalTexture.
     */ releaseInternalTexture() {
        if (this._texture) {
            this._texture.dispose();
            this._texture = null;
        }
    }
    /**
     * Dispose the texture and release its associated resources.
     */ dispose() {
        if (this._texture) {
            this.releaseInternalTexture();
            this._engine = null;
        }
    }
} //# sourceMappingURL=thinTexture.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/baseTexture.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BaseTexture",
    ()=>BaseTexture
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/decorators.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/engineStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$guid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/guid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$fileTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/fileTools.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$thinTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/thinTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/decorators.serialization.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
class BaseTexture extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$thinTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinTexture"] {
    /**
     * Define if the texture is having a usable alpha value (can be use for transparency or glossiness for instance).
     */ set hasAlpha(value) {
        if (this._hasAlpha === value) {
            return;
        }
        this._hasAlpha = value;
        if (this._scene) {
            this._scene.markAllMaterialsAsDirty(1, (mat)=>{
                return mat.hasTexture(this);
            });
        }
    }
    get hasAlpha() {
        return this._hasAlpha;
    }
    /**
     * Defines if the alpha value should be determined via the rgb values.
     * If true the luminance of the pixel might be used to find the corresponding alpha value.
     */ set getAlphaFromRGB(value) {
        if (this._getAlphaFromRGB === value) {
            return;
        }
        this._getAlphaFromRGB = value;
        if (this._scene) {
            this._scene.markAllMaterialsAsDirty(1, (mat)=>{
                return mat.hasTexture(this);
            });
        }
    }
    get getAlphaFromRGB() {
        return this._getAlphaFromRGB;
    }
    /**
     * Define the UV channel to use starting from 0 and defaulting to 0.
     * This is part of the texture as textures usually maps to one uv set.
     */ set coordinatesIndex(value) {
        if (this._coordinatesIndex === value) {
            return;
        }
        this._coordinatesIndex = value;
        if (this._scene) {
            this._scene.markAllMaterialsAsDirty(1, (mat)=>{
                return mat.hasTexture(this);
            });
        }
    }
    get coordinatesIndex() {
        return this._coordinatesIndex;
    }
    /**
     * How a texture is mapped.
     *
     * | Value | Type                                | Description |
     * | ----- | ----------------------------------- | ----------- |
     * | 0     | EXPLICIT_MODE                       |             |
     * | 1     | SPHERICAL_MODE                      |             |
     * | 2     | PLANAR_MODE                         |             |
     * | 3     | CUBIC_MODE                          |             |
     * | 4     | PROJECTION_MODE                     |             |
     * | 5     | SKYBOX_MODE                         |             |
     * | 6     | INVCUBIC_MODE                       |             |
     * | 7     | EQUIRECTANGULAR_MODE                |             |
     * | 8     | FIXED_EQUIRECTANGULAR_MODE          |             |
     * | 9     | FIXED_EQUIRECTANGULAR_MIRRORED_MODE |             |
     */ set coordinatesMode(value) {
        if (this._coordinatesMode === value) {
            return;
        }
        this._coordinatesMode = value;
        if (this._scene) {
            this._scene.markAllMaterialsAsDirty(1, (mat)=>{
                return mat.hasTexture(this);
            });
        }
    }
    get coordinatesMode() {
        return this._coordinatesMode;
    }
    /**
     * | Value | Type               | Description |
     * | ----- | ------------------ | ----------- |
     * | 0     | CLAMP_ADDRESSMODE  |             |
     * | 1     | WRAP_ADDRESSMODE   |             |
     * | 2     | MIRROR_ADDRESSMODE |             |
     */ get wrapU() {
        return this._wrapU;
    }
    set wrapU(value) {
        this._wrapU = value;
    }
    /**
     * | Value | Type               | Description |
     * | ----- | ------------------ | ----------- |
     * | 0     | CLAMP_ADDRESSMODE  |             |
     * | 1     | WRAP_ADDRESSMODE   |             |
     * | 2     | MIRROR_ADDRESSMODE |             |
     */ get wrapV() {
        return this._wrapV;
    }
    set wrapV(value) {
        this._wrapV = value;
    }
    /**
     * Define if the texture is a cube texture or if false a 2d texture.
     */ get isCube() {
        if (!this._texture) {
            return this._isCube;
        }
        return this._texture.isCube;
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    set isCube(value) {
        if (!this._texture) {
            this._isCube = value;
        } else {
            this._texture.isCube = value;
        }
    }
    /**
     * Define if the texture is a 3d texture (webgl 2) or if false a 2d texture.
     */ get is3D() {
        if (!this._texture) {
            return false;
        }
        return this._texture.is3D;
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    set is3D(value) {
        if (!this._texture) {
            return;
        }
        this._texture.is3D = value;
    }
    /**
     * Define if the texture is a 2d array texture (webgl 2) or if false a 2d texture.
     */ get is2DArray() {
        if (!this._texture) {
            return false;
        }
        return this._texture.is2DArray;
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    set is2DArray(value) {
        if (!this._texture) {
            return;
        }
        this._texture.is2DArray = value;
    }
    /**
     * Define if the texture contains data in gamma space (most of the png/jpg aside bump).
     * HDR texture are usually stored in linear space.
     * This only impacts the PBR and Background materials
     */ get gammaSpace() {
        if (!this._texture) {
            return this._gammaSpace;
        } else {
            if (this._texture._gammaSpace === null) {
                this._texture._gammaSpace = this._gammaSpace;
            }
        }
        return this._texture._gammaSpace && !this._texture._useSRGBBuffer;
    }
    set gammaSpace(gamma) {
        if (!this._texture) {
            if (this._gammaSpace === gamma) {
                return;
            }
            this._gammaSpace = gamma;
        } else {
            if (this._texture._gammaSpace === gamma) {
                return;
            }
            this._texture._gammaSpace = gamma;
        }
        this.getScene()?.markAllMaterialsAsDirty(1, (mat)=>{
            return mat.hasTexture(this);
        });
    }
    /**
     * Gets or sets whether or not the texture contains RGBD data.
     */ get isRGBD() {
        return this._texture != null && this._texture._isRGBD;
    }
    set isRGBD(value) {
        if (value === this.isRGBD) {
            return;
        }
        if (this._texture) {
            this._texture._isRGBD = value;
        }
        this.getScene()?.markAllMaterialsAsDirty(1, (mat)=>{
            return mat.hasTexture(this);
        });
    }
    /**
     * Are mip maps generated for this texture or not.
     */ get noMipmap() {
        return false;
    }
    /**
     * With prefiltered texture, defined the offset used during the prefiltering steps.
     */ get lodGenerationOffset() {
        if (this._texture) {
            return this._texture._lodGenerationOffset;
        }
        return 0.0;
    }
    set lodGenerationOffset(value) {
        if (this._texture) {
            this._texture._lodGenerationOffset = value;
        }
    }
    /**
     * With prefiltered texture, defined the scale used during the prefiltering steps.
     */ get lodGenerationScale() {
        if (this._texture) {
            return this._texture._lodGenerationScale;
        }
        return 0.0;
    }
    set lodGenerationScale(value) {
        if (this._texture) {
            this._texture._lodGenerationScale = value;
        }
    }
    /**
     * With prefiltered texture, defined if the specular generation is based on a linear ramp.
     * By default we are using a log2 of the linear roughness helping to keep a better resolution for
     * average roughness values.
     */ get linearSpecularLOD() {
        if (this._texture) {
            return this._texture._linearSpecularLOD;
        }
        return false;
    }
    set linearSpecularLOD(value) {
        if (this._texture) {
            this._texture._linearSpecularLOD = value;
        }
    }
    /**
     * In case a better definition than spherical harmonics is required for the diffuse part of the environment.
     * You can set the irradiance texture to rely on a texture instead of the spherical approach.
     * This texture need to have the same characteristics than its parent (Cube vs 2d, coordinates mode, Gamma/Linear, RGBD).
     */ get irradianceTexture() {
        if (this._texture) {
            return this._texture._irradianceTexture;
        }
        return null;
    }
    set irradianceTexture(value) {
        if (this._texture) {
            this._texture._irradianceTexture = value;
        }
    }
    /**
     * Define the unique id of the texture in the scene.
     */ get uid() {
        if (!this._uid) {
            this._uid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$guid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RandomGUID"])();
        }
        return this._uid;
    }
    /**
     * Return a string representation of the texture.
     * @returns the texture as a string
     */ toString() {
        return this.name;
    }
    /**
     * Get the class name of the texture.
     * @returns "BaseTexture"
     */ getClassName() {
        return "BaseTexture";
    }
    /**
     * Callback triggered when the texture has been disposed.
     * Kept for back compatibility, you can use the onDisposeObservable instead.
     */ set onDispose(callback) {
        if (this._onDisposeObserver) {
            this.onDisposeObservable.remove(this._onDisposeObserver);
        }
        this._onDisposeObserver = this.onDisposeObservable.add(callback);
    }
    /**
     * Define if the texture is preventing a material to render or not.
     * If not and the texture is not ready, the engine will use a default black texture instead.
     */ get isBlocking() {
        return true;
    }
    /**
     * Was there any loading error?
     */ get loadingError() {
        return this._loadingError;
    }
    /**
     * If a loading error occurred this object will be populated with information about the error.
     */ get errorObject() {
        return this._errorObject;
    }
    /**
     * Instantiates a new BaseTexture.
     * Base class of all the textures in babylon.
     * It groups all the common properties the materials, post process, lights... might need
     * in order to make a correct use of the texture.
     * @param sceneOrEngine Define the scene or engine the texture belongs to
     * @param internalTexture Define the internal texture associated with the texture
     */ constructor(sceneOrEngine, internalTexture = null){
        super(null);
        /**
         * Gets or sets an object used to store user defined information.
         */ this.metadata = null;
        /**
         * For internal use only. Please do not use.
         */ this.reservedDataStore = null;
        this._hasAlpha = false;
        this._getAlphaFromRGB = false;
        /**
         * Intensity or strength of the texture.
         * It is commonly used by materials to fine tune the intensity of the texture
         */ this.level = 1;
        this._coordinatesIndex = 0;
        /**
         * Gets or sets a boolean indicating that the texture should try to reduce shader code if there is no UV manipulation.
         * (ie. when texture.getTextureMatrix().isIdentityAs3x2() returns true)
         */ this.optimizeUVAllocation = true;
        this._coordinatesMode = 0;
        /**
         * | Value | Type               | Description |
         * | ----- | ------------------ | ----------- |
         * | 0     | CLAMP_ADDRESSMODE  |             |
         * | 1     | WRAP_ADDRESSMODE   |             |
         * | 2     | MIRROR_ADDRESSMODE |             |
         */ this.wrapR = 1;
        /**
         * With compliant hardware and browser (supporting anisotropic filtering)
         * this defines the level of anisotropic filtering in the texture.
         * The higher the better but the slower. This defaults to 4 as it seems to be the best tradeoff.
         */ this.anisotropicFilteringLevel = BaseTexture.DEFAULT_ANISOTROPIC_FILTERING_LEVEL;
        /** @internal */ this._isCube = false;
        /** @internal */ this._gammaSpace = true;
        /**
         * Is Z inverted in the texture (useful in a cube texture).
         */ this.invertZ = false;
        /**
         * @internal
         */ this.lodLevelInAlpha = false;
        /**
         * Indicates the average direction of light in an environment map. This
         * can be treated as the most dominant direction but it's magnitude also
         * tells you something about how dominant that direction is.
         */ /** @internal */ this._dominantDirection = null;
        /**
         * Define if the texture is a render target.
         */ this.isRenderTarget = false;
        /** @internal */ this._prefiltered = false;
        /** @internal */ this._forceSerialize = false;
        /**
         * Define the list of animation attached to the texture.
         */ this.animations = [];
        /**
         * An event triggered when the texture is disposed.
         */ this.onDisposeObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        this._onDisposeObserver = null;
        this._scene = null;
        /** @internal */ this._uid = null;
        /** @internal */ this._parentContainer = null;
        this._loadingError = false;
        if (sceneOrEngine) {
            if (BaseTexture._IsScene(sceneOrEngine)) {
                this._scene = sceneOrEngine;
            } else {
                this._engine = sceneOrEngine;
            }
        } else {
            this._scene = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EngineStore"].LastCreatedScene;
        }
        if (this._scene) {
            this.uniqueId = this._scene.getUniqueId();
            this._scene.addTexture(this);
            this._engine = this._scene.getEngine();
        }
        this._texture = internalTexture;
        this._uid = null;
    }
    /**
     * Get the scene the texture belongs to.
     * @returns the scene or null if undefined
     */ getScene() {
        return this._scene;
    }
    /** @internal */ _getEngine() {
        return this._engine;
    }
    /**
     * Get the texture transform matrix used to offset tile the texture for instance.
     * @returns the transformation matrix
     */ getTextureMatrix() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].IdentityReadOnly;
    }
    /**
     * Get the texture reflection matrix used to rotate/transform the reflection.
     * @returns the reflection matrix
     */ getReflectionTextureMatrix() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].IdentityReadOnly;
    }
    /**
     * Gets a suitable rotate/transform matrix when the texture is used for refraction.
     * There's a separate function from getReflectionTextureMatrix because refraction requires a special configuration of the matrix in right-handed mode.
     * @returns The refraction matrix
     */ getRefractionTextureMatrix() {
        return this.getReflectionTextureMatrix();
    }
    /**
     * Get if the texture is ready to be consumed (either it is ready or it is not blocking)
     * @returns true if ready, not blocking or if there was an error loading the texture
     */ isReadyOrNotBlocking() {
        return !this.isBlocking || this.isReady() || this.loadingError;
    }
    /**
     * Scales the texture if is `canRescale()`
     * @param ratio the resize factor we want to use to rescale
     */ // eslint-disable-next-line @typescript-eslint/no-unused-vars
    scale(ratio) {}
    /**
     * Get if the texture can rescale.
     */ get canRescale() {
        return false;
    }
    /**
     * @internal
     */ _getFromCache(url, noMipmap, sampling, invertY, useSRGBBuffer, isCube) {
        const engine = this._getEngine();
        if (!engine) {
            return null;
        }
        const correctedUseSRGBBuffer = engine._getUseSRGBBuffer(!!useSRGBBuffer, noMipmap);
        const texturesCache = engine.getLoadedTexturesCache();
        for(let index = 0; index < texturesCache.length; index++){
            const texturesCacheEntry = texturesCache[index];
            if (useSRGBBuffer === undefined || correctedUseSRGBBuffer === texturesCacheEntry._useSRGBBuffer) {
                if (invertY === undefined || invertY === texturesCacheEntry.invertY) {
                    if (texturesCacheEntry.url === url && texturesCacheEntry.generateMipMaps === !noMipmap) {
                        if (!sampling || sampling === texturesCacheEntry.samplingMode) {
                            if (isCube === undefined || isCube === texturesCacheEntry.isCube) {
                                texturesCacheEntry.incrementReferences();
                                return texturesCacheEntry;
                            }
                        }
                    }
                }
            }
        }
        return null;
    }
    /** @internal */ _rebuild(_fromContextLost = false) {}
    /**
     * Clones the texture.
     * @returns the cloned texture
     */ clone() {
        return null;
    }
    /**
     * Get the texture underlying type (INT, FLOAT...)
     */ get textureType() {
        if (!this._texture) {
            return 0;
        }
        return this._texture.type !== undefined ? this._texture.type : 0;
    }
    /**
     * Get the texture underlying format (RGB, RGBA...)
     */ get textureFormat() {
        if (!this._texture) {
            return 5;
        }
        return this._texture.format !== undefined ? this._texture.format : 5;
    }
    /**
     * Indicates that textures need to be re-calculated for all materials
     */ _markAllSubMeshesAsTexturesDirty() {
        const scene = this.getScene();
        if (!scene) {
            return;
        }
        scene.markAllMaterialsAsDirty(1);
    }
    /**
     * Reads the pixels stored in the webgl texture and returns them as an ArrayBuffer.
     * This will returns an RGBA array buffer containing either in values (0-255) or
     * float values (0-1) depending of the underlying buffer type.
     * @param faceIndex defines the face of the texture to read (in case of cube texture)
     * @param level defines the LOD level of the texture to read (in case of Mip Maps)
     * @param buffer defines a user defined buffer to fill with data (can be null)
     * @param flushRenderer true to flush the renderer from the pending commands before reading the pixels
     * @param noDataConversion false to convert the data to Uint8Array (if texture type is UNSIGNED_BYTE) or to Float32Array (if texture type is anything but UNSIGNED_BYTE). If true, the type of the generated buffer (if buffer==null) will depend on the type of the texture
     * @param x defines the region x coordinates to start reading from (default to 0)
     * @param y defines the region y coordinates to start reading from (default to 0)
     * @param width defines the region width to read from (default to the texture size at level)
     * @param height defines the region width to read from (default to the texture size at level)
     * @returns The Array buffer promise containing the pixels data.
     */ readPixels(faceIndex = 0, level = 0, buffer = null, flushRenderer = true, noDataConversion = false, x = 0, y = 0, width = Number.MAX_VALUE, height = Number.MAX_VALUE) {
        if (!this._texture) {
            return null;
        }
        const engine = this._getEngine();
        if (!engine) {
            return null;
        }
        const size = this.getSize();
        let maxWidth = size.width;
        let maxHeight = size.height;
        if (level !== 0) {
            maxWidth = maxWidth / Math.pow(2, level);
            maxHeight = maxHeight / Math.pow(2, level);
            maxWidth = Math.round(maxWidth);
            maxHeight = Math.round(maxHeight);
        }
        width = Math.min(maxWidth, width);
        height = Math.min(maxHeight, height);
        try {
            if (this._texture.isCube) {
                return engine._readTexturePixels(this._texture, width, height, faceIndex, level, buffer, flushRenderer, noDataConversion, x, y);
            }
            return engine._readTexturePixels(this._texture, width, height, -1, level, buffer, flushRenderer, noDataConversion, x, y);
        } catch (e) {
            return null;
        }
    }
    /**
     * @internal
     */ _readPixelsSync(faceIndex = 0, level = 0, buffer = null, flushRenderer = true, noDataConversion = false) {
        if (!this._texture) {
            return null;
        }
        const size = this.getSize();
        let width = size.width;
        let height = size.height;
        const engine = this._getEngine();
        if (!engine) {
            return null;
        }
        if (level != 0) {
            width = width / Math.pow(2, level);
            height = height / Math.pow(2, level);
            width = Math.round(width);
            height = Math.round(height);
        }
        try {
            if (this._texture.isCube) {
                return engine._readTexturePixelsSync(this._texture, width, height, faceIndex, level, buffer, flushRenderer, noDataConversion);
            }
            return engine._readTexturePixelsSync(this._texture, width, height, -1, level, buffer, flushRenderer, noDataConversion);
        } catch (e) {
            return null;
        }
    }
    /** @internal */ get _lodTextureHigh() {
        if (this._texture) {
            return this._texture._lodTextureHigh;
        }
        return null;
    }
    /** @internal */ get _lodTextureMid() {
        if (this._texture) {
            return this._texture._lodTextureMid;
        }
        return null;
    }
    /** @internal */ get _lodTextureLow() {
        if (this._texture) {
            return this._texture._lodTextureLow;
        }
        return null;
    }
    /**
     * Dispose the texture and release its associated resources.
     */ dispose() {
        if (this._scene) {
            // Animations
            if (this._scene.stopAnimation) {
                this._scene.stopAnimation(this);
            }
            // Remove from scene
            this._scene.removePendingData(this);
            const index = this._scene.textures.indexOf(this);
            if (index >= 0) {
                this._scene.textures.splice(index, 1);
            }
            this._scene.onTextureRemovedObservable.notifyObservers(this);
            this._scene = null;
            if (this._parentContainer) {
                const index = this._parentContainer.textures.indexOf(this);
                if (index > -1) {
                    this._parentContainer.textures.splice(index, 1);
                }
                this._parentContainer = null;
            }
        }
        // Callback
        this.onDisposeObservable.notifyObservers(this);
        this.onDisposeObservable.clear();
        this.metadata = null;
        super.dispose();
    }
    /**
     * Serialize the texture into a JSON representation that can be parsed later on.
     * @param allowEmptyName True to force serialization even if name is empty. Default: false
     * @returns the JSON representation of the texture
     */ serialize(allowEmptyName = false) {
        if (!this.name && !allowEmptyName) {
            return null;
        }
        const serializationObject = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SerializationHelper"].Serialize(this);
        // Animations
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SerializationHelper"].AppendSerializedAnimations(this, serializationObject);
        return serializationObject;
    }
    /**
     * Helper function to be called back once a list of texture contains only ready textures.
     * @param textures Define the list of textures to wait for
     * @param callback Define the callback triggered once the entire list will be ready
     */ static WhenAllReady(textures, callback) {
        let numRemaining = textures.length;
        if (numRemaining === 0) {
            callback();
            return;
        }
        for(let i = 0; i < textures.length; i++){
            const texture = textures[i];
            if (texture.isReady()) {
                if (--numRemaining === 0) {
                    callback();
                }
            } else {
                const onLoadObservable = texture.onLoadObservable;
                if (onLoadObservable) {
                    onLoadObservable.addOnce(()=>{
                        if (--numRemaining === 0) {
                            callback();
                        }
                    });
                } else {
                    if (--numRemaining === 0) {
                        callback();
                    }
                }
            }
        }
    }
    static _IsScene(sceneOrEngine) {
        return sceneOrEngine.getClassName() === "Scene";
    }
}
/**
 * Default anisotropic filtering level for the application.
 * It is set to 4 as a good tradeoff between perf and quality.
 */ BaseTexture.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], BaseTexture.prototype, "uniqueId", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], BaseTexture.prototype, "name", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], BaseTexture.prototype, "displayName", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], BaseTexture.prototype, "metadata", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])("hasAlpha")
], BaseTexture.prototype, "_hasAlpha", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])("getAlphaFromRGB")
], BaseTexture.prototype, "_getAlphaFromRGB", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], BaseTexture.prototype, "level", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])("coordinatesIndex")
], BaseTexture.prototype, "_coordinatesIndex", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], BaseTexture.prototype, "optimizeUVAllocation", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])("coordinatesMode")
], BaseTexture.prototype, "_coordinatesMode", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], BaseTexture.prototype, "wrapU", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], BaseTexture.prototype, "wrapV", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], BaseTexture.prototype, "wrapR", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], BaseTexture.prototype, "anisotropicFilteringLevel", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], BaseTexture.prototype, "isCube", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], BaseTexture.prototype, "is3D", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], BaseTexture.prototype, "is2DArray", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], BaseTexture.prototype, "gammaSpace", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], BaseTexture.prototype, "invertZ", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], BaseTexture.prototype, "lodLevelInAlpha", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], BaseTexture.prototype, "lodGenerationOffset", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], BaseTexture.prototype, "lodGenerationScale", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], BaseTexture.prototype, "linearSpecularLOD", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeAsTexture"])()
], BaseTexture.prototype, "irradianceTexture", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], BaseTexture.prototype, "isRenderTarget", void 0); //# sourceMappingURL=baseTexture.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/texture.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Texture",
    ()=>Texture
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/decorators.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$baseTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/baseTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$devTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/devTools.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$timingTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/timingTools.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$instantiationTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/instantiationTools.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$plane$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.plane.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$stringTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/stringTools.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$copyTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/copyTools.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Compat$2f$compatibilityOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Compat/compatibilityOptions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/decorators.serialization.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
class Texture extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$baseTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseTexture"] {
    /**
     * @internal
     */ static _CreateVideoTexture(name, src, scene, generateMipMaps = false, invertY = false, samplingMode = Texture.TRILINEAR_SAMPLINGMODE, settings = {}, onError, format = 5) {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$devTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_WarnImport"])("VideoTexture");
    }
    /**
     * Are mip maps generated for this texture or not.
     */ get noMipmap() {
        return this._noMipmap;
    }
    /** Returns the texture mime type if it was defined by a loader (undefined else) */ get mimeType() {
        return this._mimeType;
    }
    /**
     * Is the texture preventing material to render while loading.
     * If false, a default texture will be used instead of the loading one during the preparation step.
     */ set isBlocking(value) {
        this._isBlocking = value;
    }
    get isBlocking() {
        return this._isBlocking;
    }
    /**
     * Gets a boolean indicating if the texture needs to be inverted on the y axis during loading
     */ get invertY() {
        return this._invertY;
    }
    /**
     * Instantiates a new texture.
     * This represents a texture in babylon. It can be easily loaded from a network, base64 or html input.
     * @see https://doc.babylonjs.com/features/featuresDeepDive/materials/using/materials_introduction#texture
     * @param url defines the url of the picture to load as a texture
     * @param sceneOrEngine defines the scene or engine the texture will belong to
     * @param noMipmapOrOptions defines if the texture will require mip maps or not or set of all options to create the texture
     * @param invertY defines if the texture needs to be inverted on the y axis during loading
     * @param samplingMode defines the sampling mode we want for the texture while fetching from it (Texture.NEAREST_SAMPLINGMODE...)
     * @param onLoad defines a callback triggered when the texture has been loaded
     * @param onError defines a callback triggered when an error occurred during the loading session
     * @param buffer defines the buffer to load the texture from in case the texture is loaded from a buffer representation
     * @param deleteBuffer defines if the buffer we are loading the texture from should be deleted after load
     * @param format defines the format of the texture we are trying to load (Engine.TEXTUREFORMAT_RGBA...)
     * @param mimeType defines an optional mime type information
     * @param loaderOptions options to be passed to the loader
     * @param creationFlags specific flags to use when creating the texture (1 for storage textures, for eg)
     * @param forcedExtension defines the extension to use to pick the right loader
     */ constructor(url, sceneOrEngine, noMipmapOrOptions, invertY, samplingMode = Texture.TRILINEAR_SAMPLINGMODE, onLoad = null, onError = null, buffer = null, deleteBuffer = false, format, mimeType, loaderOptions, creationFlags, forcedExtension){
        super(sceneOrEngine);
        /**
         * Define the url of the texture.
         */ this.url = null;
        /**
         * Define an offset on the texture to offset the u coordinates of the UVs
         * @see https://doc.babylonjs.com/features/featuresDeepDive/materials/using/moreMaterials#offsetting
         */ this.uOffset = 0;
        /**
         * Define an offset on the texture to offset the v coordinates of the UVs
         * @see https://doc.babylonjs.com/features/featuresDeepDive/materials/using/moreMaterials#offsetting
         */ this.vOffset = 0;
        /**
         * Define an offset on the texture to scale the u coordinates of the UVs
         * @see https://doc.babylonjs.com/features/featuresDeepDive/materials/using/moreMaterials#tiling
         */ this.uScale = 1.0;
        /**
         * Define an offset on the texture to scale the v coordinates of the UVs
         * @see https://doc.babylonjs.com/features/featuresDeepDive/materials/using/moreMaterials#tiling
         */ this.vScale = 1.0;
        /**
         * Define an offset on the texture to rotate around the u coordinates of the UVs
         * The angle is defined in radians.
         * @see https://doc.babylonjs.com/features/featuresDeepDive/materials/using/moreMaterials
         */ this.uAng = 0;
        /**
         * Define an offset on the texture to rotate around the v coordinates of the UVs
         * The angle is defined in radians.
         * @see https://doc.babylonjs.com/features/featuresDeepDive/materials/using/moreMaterials
         */ this.vAng = 0;
        /**
         * Define an offset on the texture to rotate around the w coordinates of the UVs (in case of 3d texture)
         * The angle is defined in radians.
         * @see https://doc.babylonjs.com/features/featuresDeepDive/materials/using/moreMaterials
         */ this.wAng = 0;
        /**
         * Defines the center of rotation (U)
         */ this.uRotationCenter = 0.5;
        /**
         * Defines the center of rotation (V)
         */ this.vRotationCenter = 0.5;
        /**
         * Defines the center of rotation (W)
         */ this.wRotationCenter = 0.5;
        /**
         * Sets this property to true to avoid deformations when rotating the texture with non-uniform scaling
         */ this.homogeneousRotationInUVTransform = false;
        /**
         * List of inspectable custom properties (used by the Inspector)
         * @see https://doc.babylonjs.com/toolsAndResources/inspector#extensibility
         */ this.inspectableCustomProperties = null;
        /** @internal */ this._noMipmap = false;
        /** @internal */ this._invertY = false;
        this._rowGenerationMatrix = null;
        this._cachedTextureMatrix = null;
        this._projectionModeMatrix = null;
        this._t0 = null;
        this._t1 = null;
        this._t2 = null;
        this._cachedUOffset = -1;
        this._cachedVOffset = -1;
        this._cachedUScale = 0;
        this._cachedVScale = 0;
        this._cachedUAng = -1;
        this._cachedVAng = -1;
        this._cachedWAng = -1;
        this._cachedReflectionProjectionMatrixId = -1;
        this._cachedURotationCenter = -1;
        this._cachedVRotationCenter = -1;
        this._cachedWRotationCenter = -1;
        this._cachedHomogeneousRotationInUVTransform = false;
        this._cachedIdentity3x2 = true;
        this._cachedReflectionTextureMatrix = null;
        this._cachedReflectionUOffset = -1;
        this._cachedReflectionVOffset = -1;
        this._cachedReflectionUScale = 0;
        this._cachedReflectionVScale = 0;
        this._cachedReflectionCoordinatesMode = -1;
        /** @internal */ this._buffer = null;
        this._deleteBuffer = false;
        this._format = null;
        this._delayedOnLoad = null;
        this._delayedOnError = null;
        /**
         * Observable triggered once the texture has been loaded.
         */ this.onLoadObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        this._isBlocking = true;
        this.name = url || "";
        this.url = url;
        let noMipmap;
        let useSRGBBuffer = false;
        let internalTexture = null;
        let gammaSpace = true;
        if (typeof noMipmapOrOptions === "object" && noMipmapOrOptions !== null) {
            noMipmap = noMipmapOrOptions.noMipmap ?? false;
            invertY = noMipmapOrOptions.invertY ?? !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Compat$2f$compatibilityOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOpenGLOrientationForUV"];
            samplingMode = noMipmapOrOptions.samplingMode ?? Texture.TRILINEAR_SAMPLINGMODE;
            onLoad = noMipmapOrOptions.onLoad ?? null;
            onError = noMipmapOrOptions.onError ?? null;
            buffer = noMipmapOrOptions.buffer ?? null;
            deleteBuffer = noMipmapOrOptions.deleteBuffer ?? false;
            format = noMipmapOrOptions.format;
            mimeType = noMipmapOrOptions.mimeType;
            loaderOptions = noMipmapOrOptions.loaderOptions;
            creationFlags = noMipmapOrOptions.creationFlags;
            useSRGBBuffer = noMipmapOrOptions.useSRGBBuffer ?? false;
            internalTexture = noMipmapOrOptions.internalTexture ?? null;
            gammaSpace = noMipmapOrOptions.gammaSpace ?? gammaSpace;
            forcedExtension = noMipmapOrOptions.forcedExtension ?? forcedExtension;
        } else {
            noMipmap = !!noMipmapOrOptions;
        }
        this._gammaSpace = gammaSpace;
        this._noMipmap = noMipmap;
        this._invertY = invertY === undefined ? !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Compat$2f$compatibilityOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOpenGLOrientationForUV"] : invertY;
        this._initialSamplingMode = samplingMode;
        this._buffer = buffer;
        this._deleteBuffer = deleteBuffer;
        this._mimeType = mimeType;
        this._loaderOptions = loaderOptions;
        this._creationFlags = creationFlags;
        this._useSRGBBuffer = useSRGBBuffer;
        this._forcedExtension = forcedExtension;
        if (format !== undefined) {
            this._format = format;
        }
        const scene = this.getScene();
        const engine = this._getEngine();
        if (!engine) {
            return;
        }
        engine.onBeforeTextureInitObservable.notifyObservers(this);
        const load = ()=>{
            if (this._texture) {
                if (this._texture._invertVScale) {
                    this.vScale *= -1;
                    this.vOffset += 1;
                }
                // Update texture to match internal texture's wrapping
                if (this._texture._cachedWrapU !== null) {
                    this.wrapU = this._texture._cachedWrapU;
                    this._texture._cachedWrapU = null;
                }
                if (this._texture._cachedWrapV !== null) {
                    this.wrapV = this._texture._cachedWrapV;
                    this._texture._cachedWrapV = null;
                }
                if (this._texture._cachedWrapR !== null) {
                    this.wrapR = this._texture._cachedWrapR;
                    this._texture._cachedWrapR = null;
                }
            }
            if (this.onLoadObservable.hasObservers()) {
                this.onLoadObservable.notifyObservers(this);
            }
            if (onLoad) {
                onLoad();
            }
            if (!this.isBlocking && scene) {
                scene.resetCachedMaterial();
            }
        };
        const errorHandler = (message, exception)=>{
            this._loadingError = true;
            this._errorObject = {
                message,
                exception
            };
            if (onError) {
                onError(message, exception);
            }
            Texture.OnTextureLoadErrorObservable.notifyObservers(this);
        };
        if (!this.url && !internalTexture) {
            this._delayedOnLoad = load;
            this._delayedOnError = errorHandler;
            return;
        }
        this._texture = internalTexture ?? this._getFromCache(this.url, noMipmap, samplingMode, this._invertY, useSRGBBuffer, this.isCube);
        if (!this._texture) {
            if (!scene || !scene.useDelayedTextureLoading) {
                try {
                    this._texture = engine.createTexture(this.url, noMipmap, this._invertY, scene, samplingMode, load, errorHandler, this._buffer, undefined, this._format, this._forcedExtension, mimeType, loaderOptions, creationFlags, useSRGBBuffer);
                } catch (e) {
                    errorHandler("error loading", e);
                    throw e;
                }
                if (deleteBuffer) {
                    this._buffer = null;
                }
            } else {
                this.delayLoadState = 4;
                this._delayedOnLoad = load;
                this._delayedOnError = errorHandler;
            }
        } else {
            if (this._texture.isReady) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$timingTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TimingTools"].SetImmediate(()=>load());
            } else {
                const loadObserver = this._texture.onLoadedObservable.add(load);
                this._texture.onErrorObservable.add((e)=>{
                    errorHandler(e.message, e.exception);
                    this._texture?.onLoadedObservable.remove(loadObserver);
                });
            }
        }
    }
    /**
     * Update the url (and optional buffer) of this texture if url was null during construction.
     * @param url the url of the texture
     * @param buffer the buffer of the texture (defaults to null)
     * @param onLoad callback called when the texture is loaded  (defaults to null)
     * @param forcedExtension defines the extension to use to pick the right loader
     */ updateURL(url, buffer = null, onLoad, forcedExtension) {
        if (this.url) {
            this.releaseInternalTexture();
            this.getScene().markAllMaterialsAsDirty(1, (mat)=>{
                return mat.hasTexture(this);
            });
        }
        if (!this.name || this.name.startsWith("data:")) {
            this.name = url;
        }
        this.url = url;
        this._buffer = buffer;
        this._forcedExtension = forcedExtension;
        this.delayLoadState = 4;
        const existingOnLoad = this._delayedOnLoad;
        const load = ()=>{
            if (existingOnLoad) {
                existingOnLoad();
            } else if (this.onLoadObservable.hasObservers()) {
                this.onLoadObservable.notifyObservers(this);
            }
            if (onLoad) {
                onLoad();
            }
        };
        this._delayedOnLoad = load;
        this.delayLoad();
    }
    /**
     * Finish the loading sequence of a texture flagged as delayed load.
     * @internal
     */ delayLoad() {
        if (this.delayLoadState !== 4) {
            return;
        }
        const scene = this.getScene();
        if (!scene) {
            return;
        }
        let url = this.url;
        if (!url && (this.name.indexOf("://") > 0 || this.name.startsWith("data:"))) {
            // Some textures are serialized with an empty url and use name instead for storing the url.
            // When created without delayed load, the url is set properly because it is passed to the constructor and the texture is created right away.
            // But when created with delayed load, the url property is overwritten to "" (because it is the value in the serialized data) when the properties are parsed (see SerializationHelper.Parse).
            url = this.name;
        }
        this.delayLoadState = 1;
        this._texture = this._getFromCache(url, this._noMipmap, this.samplingMode, this._invertY, this._useSRGBBuffer, this.isCube);
        if (!this._texture) {
            this._texture = scene.getEngine().createTexture(url, this._noMipmap, this._invertY, scene, this.samplingMode, this._delayedOnLoad, this._delayedOnError, this._buffer, null, this._format, this._forcedExtension, this._mimeType, this._loaderOptions, this._creationFlags, this._useSRGBBuffer);
            if (this._deleteBuffer) {
                this._buffer = null;
            }
        } else {
            if (this._delayedOnLoad) {
                if (this._texture.isReady) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$timingTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TimingTools"].SetImmediate(this._delayedOnLoad);
                } else {
                    this._texture.onLoadedObservable.add(this._delayedOnLoad);
                }
            }
        }
        this._delayedOnLoad = null;
        this._delayedOnError = null;
    }
    _prepareRowForTextureGeneration(x, y, z, t) {
        x *= this._cachedUScale;
        y *= this._cachedVScale;
        x -= this.uRotationCenter * this._cachedUScale;
        y -= this.vRotationCenter * this._cachedVScale;
        z -= this.wRotationCenter;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinatesFromFloatsToRef(x, y, z, this._rowGenerationMatrix, t);
        t.x += this.uRotationCenter * this._cachedUScale + this._cachedUOffset;
        t.y += this.vRotationCenter * this._cachedVScale + this._cachedVOffset;
        t.z += this.wRotationCenter;
    }
    /**
     * Get the current texture matrix which includes the requested offsetting, tiling and rotation components.
     * @param uBase The horizontal base offset multiplier (1 by default)
     * @returns the transform matrix of the texture.
     */ getTextureMatrix(uBase = 1) {
        if (this.uOffset === this._cachedUOffset && this.vOffset === this._cachedVOffset && this.uScale * uBase === this._cachedUScale && this.vScale === this._cachedVScale && this.uAng === this._cachedUAng && this.vAng === this._cachedVAng && this.wAng === this._cachedWAng && this.uRotationCenter === this._cachedURotationCenter && this.vRotationCenter === this._cachedVRotationCenter && this.wRotationCenter === this._cachedWRotationCenter && this.homogeneousRotationInUVTransform === this._cachedHomogeneousRotationInUVTransform) {
            return this._cachedTextureMatrix;
        }
        this._cachedUOffset = this.uOffset;
        this._cachedVOffset = this.vOffset;
        this._cachedUScale = this.uScale * uBase;
        this._cachedVScale = this.vScale;
        this._cachedUAng = this.uAng;
        this._cachedVAng = this.vAng;
        this._cachedWAng = this.wAng;
        this._cachedURotationCenter = this.uRotationCenter;
        this._cachedVRotationCenter = this.vRotationCenter;
        this._cachedWRotationCenter = this.wRotationCenter;
        this._cachedHomogeneousRotationInUVTransform = this.homogeneousRotationInUVTransform;
        if (!this._cachedTextureMatrix || !this._rowGenerationMatrix) {
            this._cachedTextureMatrix = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].Zero();
            this._rowGenerationMatrix = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"]();
            this._t0 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
            this._t1 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
            this._t2 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].RotationYawPitchRollToRef(this.vAng, this.uAng, this.wAng, this._rowGenerationMatrix);
        if (this.homogeneousRotationInUVTransform) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].TranslationToRef(-this._cachedURotationCenter, -this._cachedVRotationCenter, -this._cachedWRotationCenter, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[0]);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].TranslationToRef(this._cachedURotationCenter, this._cachedVRotationCenter, this._cachedWRotationCenter, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[1]);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].ScalingToRef(this._cachedUScale, this._cachedVScale, 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[2]);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].TranslationToRef(this._cachedUOffset, this._cachedVOffset, 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[3]);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[0].multiplyToRef(this._rowGenerationMatrix, this._cachedTextureMatrix);
            this._cachedTextureMatrix.multiplyToRef(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[1], this._cachedTextureMatrix);
            this._cachedTextureMatrix.multiplyToRef(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[2], this._cachedTextureMatrix);
            this._cachedTextureMatrix.multiplyToRef(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[3], this._cachedTextureMatrix);
            // copy the translation row to the 3rd row of the matrix so that we don't need to update the shaders (which expects the translation to be on the 3rd row)
            this._cachedTextureMatrix.setRowFromFloats(2, this._cachedTextureMatrix.m[12], this._cachedTextureMatrix.m[13], this._cachedTextureMatrix.m[14], 1);
        } else {
            this._prepareRowForTextureGeneration(0, 0, 0, this._t0);
            this._prepareRowForTextureGeneration(1.0, 0, 0, this._t1);
            this._prepareRowForTextureGeneration(0, 1.0, 0, this._t2);
            this._t1.subtractInPlace(this._t0);
            this._t2.subtractInPlace(this._t0);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].FromValuesToRef(this._t1.x, this._t1.y, this._t1.z, 0.0, this._t2.x, this._t2.y, this._t2.z, 0.0, this._t0.x, this._t0.y, this._t0.z, 0.0, 0.0, 0.0, 0.0, 1.0, this._cachedTextureMatrix);
        }
        const scene = this.getScene();
        if (!scene) {
            return this._cachedTextureMatrix;
        }
        const previousIdentity3x2 = this._cachedIdentity3x2;
        this._cachedIdentity3x2 = this._cachedTextureMatrix.isIdentityAs3x2();
        if (this.optimizeUVAllocation && previousIdentity3x2 !== this._cachedIdentity3x2) {
            // We flag the materials that are using this texture as "texture dirty" because depending on the fact that the matrix is the identity or not, some defines
            // will get different values (see PrepareDefinesForMergedUV), meaning we should regenerate the effect accordingly
            scene.markAllMaterialsAsDirty(1, (mat)=>{
                return mat.hasTexture(this);
            });
        }
        return this._cachedTextureMatrix;
    }
    /**
     * Get the current matrix used to apply reflection. This is useful to rotate an environment texture for instance.
     * @returns The reflection texture transform
     */ getReflectionTextureMatrix() {
        const scene = this.getScene();
        if (!scene) {
            return this._cachedReflectionTextureMatrix;
        }
        if (this.uOffset === this._cachedReflectionUOffset && this.vOffset === this._cachedReflectionVOffset && this.uScale === this._cachedReflectionUScale && this.vScale === this._cachedReflectionVScale && this.coordinatesMode === this._cachedReflectionCoordinatesMode) {
            if (this.coordinatesMode === Texture.PROJECTION_MODE) {
                if (this._cachedReflectionProjectionMatrixId === scene.getProjectionMatrix().updateFlag) {
                    return this._cachedReflectionTextureMatrix;
                }
            } else {
                return this._cachedReflectionTextureMatrix;
            }
        }
        if (!this._cachedReflectionTextureMatrix) {
            this._cachedReflectionTextureMatrix = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].Zero();
        }
        if (!this._projectionModeMatrix) {
            this._projectionModeMatrix = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].Zero();
        }
        const flagMaterialsAsTextureDirty = this._cachedReflectionCoordinatesMode !== this.coordinatesMode;
        this._cachedReflectionUOffset = this.uOffset;
        this._cachedReflectionVOffset = this.vOffset;
        this._cachedReflectionUScale = this.uScale;
        this._cachedReflectionVScale = this.vScale;
        this._cachedReflectionCoordinatesMode = this.coordinatesMode;
        switch(this.coordinatesMode){
            case Texture.PLANAR_MODE:
                {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].IdentityToRef(this._cachedReflectionTextureMatrix);
                    this._cachedReflectionTextureMatrix[0] = this.uScale;
                    this._cachedReflectionTextureMatrix[5] = this.vScale;
                    this._cachedReflectionTextureMatrix[12] = this.uOffset;
                    this._cachedReflectionTextureMatrix[13] = this.vOffset;
                    break;
                }
            case Texture.PROJECTION_MODE:
                {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].FromValuesToRef(0.5, 0.0, 0.0, 0.0, 0.0, -0.5, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.5, 0.5, 1.0, 1.0, this._projectionModeMatrix);
                    const projectionMatrix = scene.getProjectionMatrix();
                    this._cachedReflectionProjectionMatrixId = projectionMatrix.updateFlag;
                    projectionMatrix.multiplyToRef(this._projectionModeMatrix, this._cachedReflectionTextureMatrix);
                    break;
                }
            default:
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].IdentityToRef(this._cachedReflectionTextureMatrix);
                break;
        }
        if (flagMaterialsAsTextureDirty) {
            // We flag the materials that are using this texture as "texture dirty" if the coordinatesMode has changed.
            // Indeed, this property is used to set the value of some defines used to generate the effect (in material.isReadyForSubMesh), so we must make sure this code will be re-executed and the effect recreated if necessary
            scene.markAllMaterialsAsDirty(1, (mat)=>{
                return mat.hasTexture(this);
            });
        }
        return this._cachedReflectionTextureMatrix;
    }
    /**
     * Clones the texture.
     * @returns the cloned texture
     */ clone() {
        const options = {
            noMipmap: this._noMipmap,
            invertY: this._invertY,
            samplingMode: this.samplingMode,
            onLoad: undefined,
            onError: undefined,
            buffer: this._texture ? this._texture._buffer : undefined,
            deleteBuffer: this._deleteBuffer,
            format: this.textureFormat,
            mimeType: this.mimeType,
            loaderOptions: this._loaderOptions,
            creationFlags: this._creationFlags,
            useSRGBBuffer: this._useSRGBBuffer
        };
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SerializationHelper"].Clone(()=>{
            return new Texture(this._texture ? this._texture.url : null, this.getScene(), options);
        }, this);
    }
    /**
     * Serialize the texture to a JSON representation we can easily use in the respective Parse function.
     * @returns The JSON representation of the texture
     */ serialize() {
        const savedName = this.name;
        if (!Texture.SerializeBuffers) {
            if (this.name.startsWith("data:")) {
                this.name = "";
            }
        }
        if (this.name.startsWith("data:") && this.url === this.name) {
            this.url = "";
        }
        const serializationObject = super.serialize(Texture._SerializeInternalTextureUniqueId);
        if (!serializationObject) {
            return null;
        }
        if (Texture.SerializeBuffers || Texture.ForceSerializeBuffers) {
            if (typeof this._buffer === "string" && this._buffer.startsWith("data:")) {
                serializationObject.base64String = this._buffer;
                serializationObject.name = serializationObject.name.replace("data:", "");
            } else if (this.url && this.url.startsWith("data:") && this._buffer instanceof Uint8Array) {
                const mimeType = this.mimeType || "image/png";
                serializationObject.base64String = `data:${mimeType};base64,${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$stringTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EncodeArrayBufferToBase64"])(this._buffer)}`;
            } else if (Texture.ForceSerializeBuffers || this.url && this.url.startsWith("blob:") || this._forceSerialize) {
                serializationObject.base64String = !this._engine || this._engine._features.supportSyncTextureRead ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$copyTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenerateBase64StringFromTexture"])(this) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$copyTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GenerateBase64StringFromTextureAsync"])(this);
            }
        }
        serializationObject.invertY = this._invertY;
        serializationObject.samplingMode = this.samplingMode;
        serializationObject._creationFlags = this._creationFlags;
        serializationObject._useSRGBBuffer = this._useSRGBBuffer;
        if (Texture._SerializeInternalTextureUniqueId) {
            serializationObject.internalTextureUniqueId = this._texture?.uniqueId;
        }
        serializationObject.internalTextureLabel = this._texture?.label;
        serializationObject.noMipmap = this._noMipmap;
        this.name = savedName;
        return serializationObject;
    }
    /**
     * Get the current class name of the texture useful for serialization or dynamic coding.
     * @returns "Texture"
     */ getClassName() {
        return "Texture";
    }
    /**
     * Dispose the texture and release its associated resources.
     */ dispose() {
        super.dispose();
        this.onLoadObservable.clear();
        this._delayedOnLoad = null;
        this._delayedOnError = null;
        this._buffer = null;
    }
    /**
     * Parse the JSON representation of a texture in order to recreate the texture in the given scene.
     * @param parsedTexture Define the JSON representation of the texture
     * @param scene Define the scene the parsed texture should be instantiated in
     * @param rootUrl Define the root url of the parsing sequence in the case of relative dependencies
     * @returns The parsed texture if successful
     */ static Parse(parsedTexture, scene, rootUrl) {
        if (parsedTexture.customType) {
            const customTexture = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$instantiationTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InstantiationTools"].Instantiate(parsedTexture.customType);
            // Update Sampling Mode
            const parsedCustomTexture = customTexture.Parse(parsedTexture, scene, rootUrl);
            if (parsedTexture.samplingMode && parsedCustomTexture.updateSamplingMode && parsedCustomTexture._samplingMode) {
                if (parsedCustomTexture._samplingMode !== parsedTexture.samplingMode) {
                    parsedCustomTexture.updateSamplingMode(parsedTexture.samplingMode);
                }
            }
            return parsedCustomTexture;
        }
        if (parsedTexture.isCube && !parsedTexture.isRenderTarget) {
            return Texture._CubeTextureParser(parsedTexture, scene, rootUrl);
        }
        const hasInternalTextureUniqueId = parsedTexture.internalTextureUniqueId !== undefined;
        if (!parsedTexture.name && !parsedTexture.isRenderTarget && !hasInternalTextureUniqueId) {
            return null;
        }
        let internalTexture;
        if (hasInternalTextureUniqueId) {
            const cache = scene.getEngine().getLoadedTexturesCache();
            for (const texture of cache){
                if (texture.uniqueId === parsedTexture.internalTextureUniqueId) {
                    internalTexture = texture;
                    break;
                }
            }
        }
        const onLoaded = (texture)=>{
            // Clear cache
            if (texture && texture._texture) {
                texture._texture._cachedWrapU = null;
                texture._texture._cachedWrapV = null;
                texture._texture._cachedWrapR = null;
            }
            // Update Sampling Mode
            if (parsedTexture.samplingMode) {
                const sampling = parsedTexture.samplingMode;
                if (texture && texture.samplingMode !== sampling) {
                    texture.updateSamplingMode(sampling);
                }
            }
            // Animations
            if (texture && parsedTexture.animations) {
                for(let animationIndex = 0; animationIndex < parsedTexture.animations.length; animationIndex++){
                    const parsedAnimation = parsedTexture.animations[animationIndex];
                    const internalClass = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GetClass"])("BABYLON.Animation");
                    if (internalClass) {
                        texture.animations.push(internalClass.Parse(parsedAnimation));
                    }
                }
            }
            if (texture && texture._texture) {
                if (hasInternalTextureUniqueId && !internalTexture) {
                    texture._texture._setUniqueId(parsedTexture.internalTextureUniqueId);
                }
                texture._texture.label = parsedTexture.internalTextureLabel;
            }
        };
        const texture = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SerializationHelper"].Parse(()=>{
            let generateMipMaps = true;
            if (parsedTexture.noMipmap) {
                generateMipMaps = false;
            }
            if (parsedTexture.mirrorPlane) {
                const mirrorTexture = Texture._CreateMirror(parsedTexture.name, parsedTexture.renderTargetSize, scene, generateMipMaps);
                mirrorTexture._waitingRenderList = parsedTexture.renderList;
                mirrorTexture.mirrorPlane = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$plane$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Plane"].FromArray(parsedTexture.mirrorPlane);
                onLoaded(mirrorTexture);
                return mirrorTexture;
            } else if (parsedTexture.isRenderTarget && !parsedTexture.base64String) {
                // if base64string is set it means the original RTT was baked
                let renderTargetTexture = null;
                if (parsedTexture.isCube) {
                    // Search for an existing reflection probe (which contains a cube render target texture)
                    if (scene.reflectionProbes) {
                        for(let index = 0; index < scene.reflectionProbes.length; index++){
                            const probe = scene.reflectionProbes[index];
                            if (probe.name === parsedTexture.name) {
                                return probe.cubeTexture;
                            }
                        }
                    }
                } else {
                    renderTargetTexture = Texture._CreateRenderTargetTexture(parsedTexture.name, parsedTexture.renderTargetSize, scene, generateMipMaps, parsedTexture._creationFlags ?? 0);
                    renderTargetTexture._waitingRenderList = parsedTexture.renderList;
                }
                onLoaded(renderTargetTexture);
                return renderTargetTexture;
            } else if (parsedTexture.isVideo) {
                const texture = Texture._CreateVideoTexture(rootUrl + (parsedTexture.url || parsedTexture.name), rootUrl + (parsedTexture.src || parsedTexture.url), scene, generateMipMaps, parsedTexture.invertY, parsedTexture.samplingMode, parsedTexture.settings || {});
                onLoaded(texture);
                return texture;
            } else {
                let texture;
                if (parsedTexture.base64String && !internalTexture) {
                    // name and url are the same to ensure caching happens from the actual base64 string
                    texture = Texture.CreateFromBase64String(parsedTexture.base64String, parsedTexture.base64String, scene, !generateMipMaps, parsedTexture.invertY, parsedTexture.samplingMode, ()=>{
                        onLoaded(texture);
                    }, parsedTexture._creationFlags ?? 0, parsedTexture._useSRGBBuffer ?? false);
                    // prettier name to fit with the loaded data
                    texture.name = parsedTexture.name;
                } else {
                    let url;
                    if (parsedTexture.name && (parsedTexture.name.indexOf("://") > 0 || parsedTexture.name.startsWith("data:"))) {
                        url = parsedTexture.name;
                    } else {
                        url = rootUrl + parsedTexture.name;
                    }
                    if (parsedTexture.url && (parsedTexture.url.startsWith("data:") || Texture.UseSerializedUrlIfAny)) {
                        url = parsedTexture.url;
                    }
                    const options = {
                        noMipmap: !generateMipMaps,
                        invertY: parsedTexture.invertY,
                        samplingMode: parsedTexture.samplingMode,
                        onLoad: ()=>{
                            onLoaded(texture);
                        },
                        internalTexture
                    };
                    texture = new Texture(url, scene, options);
                }
                return texture;
            }
        }, parsedTexture, scene);
        return texture;
    }
    /**
     * Creates a texture from its base 64 representation.
     * @param data Define the base64 payload without the data: prefix
     * @param name Define the name of the texture in the scene useful fo caching purpose for instance
     * @param scene Define the scene the texture should belong to
     * @param noMipmapOrOptions defines if the texture will require mip maps or not or set of all options to create the texture
     * @param invertY define if the texture needs to be inverted on the y axis during loading
     * @param samplingMode define the sampling mode we want for the texture while fetching from it (Texture.NEAREST_SAMPLINGMODE...)
     * @param onLoad define a callback triggered when the texture has been loaded
     * @param onError define a callback triggered when an error occurred during the loading session
     * @param format define the format of the texture we are trying to load (Engine.TEXTUREFORMAT_RGBA...)
     * @param creationFlags specific flags to use when creating the texture (1 for storage textures, for eg)
     * @param forcedExtension defines the extension to use to pick the right loader
     * @returns the created texture
     */ static CreateFromBase64String(data, name, scene, noMipmapOrOptions, invertY, samplingMode = Texture.TRILINEAR_SAMPLINGMODE, onLoad = null, onError = null, format = 5, creationFlags, forcedExtension) {
        return new Texture("data:" + name, scene, noMipmapOrOptions, invertY, samplingMode, onLoad, onError, data, false, format, undefined, undefined, creationFlags, forcedExtension);
    }
    /**
     * Creates a texture from its data: representation. (data: will be added in case only the payload has been passed in)
     * @param name Define the name of the texture in the scene useful fo caching purpose for instance
     * @param buffer define the buffer to load the texture from in case the texture is loaded from a buffer representation
     * @param scene Define the scene the texture should belong to
     * @param deleteBuffer define if the buffer we are loading the texture from should be deleted after load
     * @param noMipmapOrOptions defines if the texture will require mip maps or not or set of all options to create the texture
     * @param invertY define if the texture needs to be inverted on the y axis during loading
     * @param samplingMode define the sampling mode we want for the texture while fetching from it (Texture.NEAREST_SAMPLINGMODE...)
     * @param onLoad define a callback triggered when the texture has been loaded
     * @param onError define a callback triggered when an error occurred during the loading session
     * @param format define the format of the texture we are trying to load (Engine.TEXTUREFORMAT_RGBA...)
     * @param creationFlags specific flags to use when creating the texture (1 for storage textures, for eg)
     * @param forcedExtension defines the extension to use to pick the right loader
     * @returns the created texture
     */ static LoadFromDataString(name, buffer, scene, deleteBuffer = false, noMipmapOrOptions, invertY = true, samplingMode = Texture.TRILINEAR_SAMPLINGMODE, onLoad = null, onError = null, format = 5, creationFlags, forcedExtension) {
        if (name.substring(0, 5) !== "data:") {
            name = "data:" + name;
        }
        return new Texture(name, scene, noMipmapOrOptions, invertY, samplingMode, onLoad, onError, buffer, deleteBuffer, format, undefined, undefined, creationFlags, forcedExtension);
    }
}
/**
 * Gets or sets a general boolean used to indicate that textures containing direct data (buffers) must be saved as part of the serialization process
 */ Texture.SerializeBuffers = true;
/**
 * Gets or sets a general boolean used to indicate that texture buffers must be saved as part of the serialization process.
 * If no buffer exists, one will be created as base64 string from the internal webgl data.
 */ Texture.ForceSerializeBuffers = false;
/**
 * This observable will notify when any texture had a loading error
 */ Texture.OnTextureLoadErrorObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
/** @internal */ Texture._SerializeInternalTextureUniqueId = false;
/**
 * @internal
 */ // eslint-disable-next-line @typescript-eslint/no-unused-vars
Texture._CubeTextureParser = (jsonTexture, scene, rootUrl)=>{
    throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$devTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_WarnImport"])("CubeTexture");
};
/**
 * @internal
 */ // eslint-disable-next-line @typescript-eslint/no-unused-vars
Texture._CreateMirror = (name, renderTargetSize, scene, generateMipMaps)=>{
    throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$devTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_WarnImport"])("MirrorTexture");
};
/**
 * @internal
 */ // eslint-disable-next-line @typescript-eslint/no-unused-vars
Texture._CreateRenderTargetTexture = (name, renderTargetSize, scene, generateMipMaps, creationFlags)=>{
    throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$devTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_WarnImport"])("RenderTargetTexture");
};
/** nearest is mag = nearest and min = nearest and no mip */ Texture.NEAREST_SAMPLINGMODE = 1;
/** nearest is mag = nearest and min = nearest and mip = linear */ Texture.NEAREST_NEAREST_MIPLINEAR = 8; // nearest is mag = nearest and min = nearest and mip = linear
/** Bilinear is mag = linear and min = linear and no mip */ Texture.BILINEAR_SAMPLINGMODE = 2;
/** Bilinear is mag = linear and min = linear and mip = nearest */ Texture.LINEAR_LINEAR_MIPNEAREST = 11; // Bilinear is mag = linear and min = linear and mip = nearest
/** Trilinear is mag = linear and min = linear and mip = linear */ Texture.TRILINEAR_SAMPLINGMODE = 3;
/** Trilinear is mag = linear and min = linear and mip = linear */ Texture.LINEAR_LINEAR_MIPLINEAR = 3; // Trilinear is mag = linear and min = linear and mip = linear
/** mag = nearest and min = nearest and mip = nearest */ Texture.NEAREST_NEAREST_MIPNEAREST = 4;
/** mag = nearest and min = linear and mip = nearest */ Texture.NEAREST_LINEAR_MIPNEAREST = 5;
/** mag = nearest and min = linear and mip = linear */ Texture.NEAREST_LINEAR_MIPLINEAR = 6;
/** mag = nearest and min = linear and mip = none */ Texture.NEAREST_LINEAR = 7;
/** mag = nearest and min = nearest and mip = none */ Texture.NEAREST_NEAREST = 1;
/** mag = linear and min = nearest and mip = nearest */ Texture.LINEAR_NEAREST_MIPNEAREST = 9;
/** mag = linear and min = nearest and mip = linear */ Texture.LINEAR_NEAREST_MIPLINEAR = 10;
/** mag = linear and min = linear and mip = none */ Texture.LINEAR_LINEAR = 2;
/** mag = linear and min = nearest and mip = none */ Texture.LINEAR_NEAREST = 12;
/** Explicit coordinates mode */ Texture.EXPLICIT_MODE = 0;
/** Spherical coordinates mode */ Texture.SPHERICAL_MODE = 1;
/** Planar coordinates mode */ Texture.PLANAR_MODE = 2;
/** Cubic coordinates mode */ Texture.CUBIC_MODE = 3;
/** Projection coordinates mode */ Texture.PROJECTION_MODE = 4;
/** Inverse Cubic coordinates mode */ Texture.SKYBOX_MODE = 5;
/** Inverse Cubic coordinates mode */ Texture.INVCUBIC_MODE = 6;
/** Equirectangular coordinates mode */ Texture.EQUIRECTANGULAR_MODE = 7;
/** Equirectangular Fixed coordinates mode */ Texture.FIXED_EQUIRECTANGULAR_MODE = 8;
/** Equirectangular Fixed Mirrored coordinates mode */ Texture.FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9;
/** Texture is not repeating outside of 0..1 UVs */ Texture.CLAMP_ADDRESSMODE = 0;
/** Texture is repeating outside of 0..1 UVs */ Texture.WRAP_ADDRESSMODE = 1;
/** Texture is repeating and mirrored */ Texture.MIRROR_ADDRESSMODE = 2;
/**
 * Gets or sets a boolean which defines if the texture url must be build from the serialized URL instead of just using the name and loading them side by side with the scene file
 */ Texture.UseSerializedUrlIfAny = false;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], Texture.prototype, "url", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], Texture.prototype, "uOffset", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], Texture.prototype, "vOffset", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], Texture.prototype, "uScale", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], Texture.prototype, "vScale", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], Texture.prototype, "uAng", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], Texture.prototype, "vAng", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], Texture.prototype, "wAng", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], Texture.prototype, "uRotationCenter", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], Texture.prototype, "vRotationCenter", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], Texture.prototype, "wRotationCenter", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], Texture.prototype, "homogeneousRotationInUVTransform", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], Texture.prototype, "isBlocking", null);
// References the dependencies.
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.Texture", Texture);
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SerializationHelper"]._TextureParser = Texture.Parse; //# sourceMappingURL=texture.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/renderTargetTexture.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RenderTargetTexture",
    ()=>RenderTargetTexture
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/texture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$PostProcesses$2f$postProcessManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/PostProcesses/postProcessManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/tools.functions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$effect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/effect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Rendering$2f$objectRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Rendering/objectRenderer.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
/**
 * Sets a depth stencil texture from a render target on the engine to be used in the shader.
 * @param channel Name of the sampler variable.
 * @param texture Texture to set.
 */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$effect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Effect"].prototype.setDepthStencilTexture = function(channel, texture) {
    this._engine.setDepthStencilTexture(this._samplers[channel], this._uniforms[channel], texture, channel);
};
class RenderTargetTexture extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"] {
    /**
     * Use this predicate to dynamically define the list of mesh you want to render.
     * If set, the renderList property will be overwritten.
     */ get renderListPredicate() {
        return this._objectRenderer.renderListPredicate;
    }
    set renderListPredicate(value) {
        this._objectRenderer.renderListPredicate = value;
    }
    /**
     * Use this list to define the list of mesh you want to render.
     */ get renderList() {
        return this._objectRenderer.renderList;
    }
    set renderList(value) {
        this._objectRenderer.renderList = value;
    }
    /**
     * Define the list of particle systems to render in the texture. If not provided, will render all the particle systems of the scene.
     * Note that the particle systems are rendered only if renderParticles is set to true.
     */ get particleSystemList() {
        return this._objectRenderer.particleSystemList;
    }
    set particleSystemList(value) {
        this._objectRenderer.particleSystemList = value;
    }
    /**
     * Use this function to overload the renderList array at rendering time.
     * Return null to render with the current renderList, else return the list of meshes to use for rendering.
     * For 2DArray RTT, layerOrFace is the index of the layer that is going to be rendered, else it is the faceIndex of
     * the cube (if the RTT is a cube, else layerOrFace=0).
     * The renderList passed to the function is the current render list (the one that will be used if the function returns null).
     * The length of this list is passed through renderListLength: don't use renderList.length directly because the array can
     * hold dummy elements!
     */ get getCustomRenderList() {
        return this._objectRenderer.getCustomRenderList;
    }
    set getCustomRenderList(value) {
        this._objectRenderer.getCustomRenderList = value;
    }
    /**
     * Define if particles should be rendered in your texture (default: true).
     */ get renderParticles() {
        return this._objectRenderer.renderParticles;
    }
    set renderParticles(value) {
        this._objectRenderer.renderParticles = value;
    }
    /**
     * Define if sprites should be rendered in your texture (default: false).
     */ get renderSprites() {
        return this._objectRenderer.renderSprites;
    }
    set renderSprites(value) {
        this._objectRenderer.renderSprites = value;
    }
    /**
     * Define if bounding box rendering should be enabled (still subject to Mesh.showBoundingBox or scene.forceShowBoundingBoxes). (Default: false).
     */ get enableBoundingBoxRendering() {
        return this._objectRenderer.enableBoundingBoxRendering;
    }
    set enableBoundingBoxRendering(value) {
        this._objectRenderer.enableBoundingBoxRendering = value;
    }
    /**
     * Define if outline/overlay rendering should be enabled (still subject to Mesh.renderOutline/Mesh.renderOverlay). (Default: true).
     */ get enableOutlineRendering() {
        return this._objectRenderer.enableOutlineRendering;
    }
    set enableOutlineRendering(value) {
        this._objectRenderer.enableOutlineRendering = value;
    }
    /**
     * Force checking the layerMask property even if a custom list of meshes is provided (ie. if renderList is not undefined) (default: false).
     */ get forceLayerMaskCheck() {
        return this._objectRenderer.forceLayerMaskCheck;
    }
    set forceLayerMaskCheck(value) {
        this._objectRenderer.forceLayerMaskCheck = value;
    }
    /**
     * Define the camera used to render the texture.
     */ get activeCamera() {
        return this._objectRenderer.activeCamera;
    }
    set activeCamera(value) {
        this._objectRenderer.activeCamera = value;
    }
    /**
     * Define the camera used to calculate the LOD of the objects.
     * If not defined, activeCamera will be used. If not defined nor activeCamera, scene's active camera will be used.
     */ get cameraForLOD() {
        return this._objectRenderer.cameraForLOD;
    }
    set cameraForLOD(value) {
        this._objectRenderer.cameraForLOD = value;
    }
    /**
     * If true, the renderer will render all objects without any image processing applied.
     * If false (default value), the renderer will use the current setting of the scene's image processing configuration.
     */ get disableImageProcessing() {
        return this._objectRenderer.disableImageProcessing;
    }
    set disableImageProcessing(value) {
        this._objectRenderer.disableImageProcessing = value;
    }
    /**
     * Override the mesh isReady function with your own one.
     */ get customIsReadyFunction() {
        return this._objectRenderer.customIsReadyFunction;
    }
    set customIsReadyFunction(value) {
        this._objectRenderer.customIsReadyFunction = value;
    }
    /**
     * Override the render function of the texture with your own one.
     */ get customRenderFunction() {
        return this._objectRenderer.customRenderFunction;
    }
    set customRenderFunction(value) {
        this._objectRenderer.customRenderFunction = value;
    }
    /**
     * Post-processes for this render target
     */ get postProcesses() {
        return this._postProcesses;
    }
    get _prePassEnabled() {
        return !!this._prePassRenderTarget && this._prePassRenderTarget.enabled;
    }
    /**
     * Set a after unbind callback in the texture.
     * This has been kept for backward compatibility and use of onAfterUnbindObservable is recommended.
     */ set onAfterUnbind(callback) {
        if (this._onAfterUnbindObserver) {
            this.onAfterUnbindObservable.remove(this._onAfterUnbindObserver);
        }
        this._onAfterUnbindObserver = this.onAfterUnbindObservable.add(callback);
    }
    /**
     * An event triggered before rendering the texture
     */ get onBeforeRenderObservable() {
        return this._objectRenderer.onBeforeRenderObservable;
    }
    /**
     * Set a before render callback in the texture.
     * This has been kept for backward compatibility and use of onBeforeRenderObservable is recommended.
     */ set onBeforeRender(callback) {
        if (this._onBeforeRenderObserver) {
            this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver);
        }
        this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(callback);
    }
    /**
     * An event triggered after rendering the texture
     */ get onAfterRenderObservable() {
        return this._objectRenderer.onAfterRenderObservable;
    }
    /**
     * Set a after render callback in the texture.
     * This has been kept for backward compatibility and use of onAfterRenderObservable is recommended.
     */ set onAfterRender(callback) {
        if (this._onAfterRenderObserver) {
            this.onAfterRenderObservable.remove(this._onAfterRenderObserver);
        }
        this._onAfterRenderObserver = this.onAfterRenderObservable.add(callback);
    }
    /**
     * Set a clear callback in the texture.
     * This has been kept for backward compatibility and use of onClearObservable is recommended.
     */ set onClear(callback) {
        if (this._onClearObserver) {
            this.onClearObservable.remove(this._onClearObserver);
        }
        this._onClearObserver = this.onClearObservable.add(callback);
    }
    /** @internal */ get _waitingRenderList() {
        return this._objectRenderer._waitingRenderList;
    }
    /** @internal */ set _waitingRenderList(value) {
        this._objectRenderer._waitingRenderList = value;
    }
    /**
     * Current render pass id of the render target texture. Note it can change over the rendering as there's a separate id for each face of a cube / each layer of an array layer!
     */ get renderPassId() {
        return this._objectRenderer.renderPassId;
    }
    /**
     * Gets the render pass ids used by the render target texture. For a single render target the array length will be 1, for a cube texture it will be 6 and for
     * a 2D texture array it will return an array of ids the size of the 2D texture array
     */ get renderPassIds() {
        return this._objectRenderer.renderPassIds;
    }
    /**
     * Gets the current value of the refreshId counter
     */ get currentRefreshId() {
        return this._objectRenderer.currentRefreshId;
    }
    /**
     * Sets a specific material to be used to render a mesh/a list of meshes in this render target texture
     * @param mesh mesh or array of meshes
     * @param material material or array of materials to use for this render pass. If undefined is passed, no specific material will be used but the regular material instead (mesh.material). It's possible to provide an array of materials to use a different material for each rendering in the case of a cube texture (6 rendering) and a 2D texture array (as many rendering as the length of the array)
     */ setMaterialForRendering(mesh, material) {
        this._objectRenderer.setMaterialForRendering(mesh, material);
    }
    /**
     * Define if the texture has multiple draw buffers or if false a single draw buffer.
     */ get isMulti() {
        return this._renderTarget?.isMulti ?? false;
    }
    /**
     * Gets render target creation options that were used.
     */ get renderTargetOptions() {
        return this._renderTargetOptions;
    }
    /**
     * Gets the render target wrapper associated with this render target
     */ get renderTarget() {
        return this._renderTarget;
    }
    _onRatioRescale() {
        if (this._sizeRatio) {
            this.resize(this._initialSizeParameter);
        }
    }
    /**
     * Gets or sets the size of the bounding box associated with the texture (when in cube mode)
     * When defined, the cubemap will switch to local mode
     * @see https://community.arm.com/graphics/b/blog/posts/reflections-based-on-local-cubemaps-in-unity
     * @example https://www.babylonjs-playground.com/#RNASML
     */ set boundingBoxSize(value) {
        if (this._boundingBoxSize && this._boundingBoxSize.equals(value)) {
            return;
        }
        this._boundingBoxSize = value;
        const scene = this.getScene();
        if (scene) {
            scene.markAllMaterialsAsDirty(1);
        }
    }
    get boundingBoxSize() {
        return this._boundingBoxSize;
    }
    /**
     * In case the RTT has been created with a depth texture, get the associated
     * depth texture.
     * Otherwise, return null.
     */ get depthStencilTexture() {
        return this._renderTarget?._depthStencilTexture ?? null;
    }
    /** @internal */ constructor(name, size, scene, generateMipMaps = false, doNotChangeAspectRatio = true, type = 0, isCube = false, samplingMode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"].TRILINEAR_SAMPLINGMODE, generateDepthBuffer = true, generateStencilBuffer = false, isMulti = false, format = 5, delayAllocation = false, samples, creationFlags, noColorAttachment = false, useSRGBBuffer = false){
        let colorAttachment = undefined;
        let gammaSpace = true;
        let existingObjectRenderer = undefined;
        let enableClusteredLights = false;
        if (typeof generateMipMaps === "object") {
            const options = generateMipMaps;
            generateMipMaps = !!options.generateMipMaps;
            doNotChangeAspectRatio = options.doNotChangeAspectRatio ?? true;
            type = options.type ?? 0;
            isCube = !!options.isCube;
            samplingMode = options.samplingMode ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"].TRILINEAR_SAMPLINGMODE;
            generateDepthBuffer = options.generateDepthBuffer ?? true;
            generateStencilBuffer = !!options.generateStencilBuffer;
            isMulti = !!options.isMulti;
            format = options.format ?? 5;
            delayAllocation = !!options.delayAllocation;
            samples = options.samples;
            creationFlags = options.creationFlags;
            noColorAttachment = !!options.noColorAttachment;
            useSRGBBuffer = !!options.useSRGBBuffer;
            colorAttachment = options.colorAttachment;
            gammaSpace = options.gammaSpace ?? gammaSpace;
            existingObjectRenderer = options.existingObjectRenderer;
            enableClusteredLights = !!options.enableClusteredLights;
        }
        super(null, scene, !generateMipMaps, undefined, samplingMode, undefined, undefined, undefined, undefined, format);
        /**
         * Define if the camera viewport should be respected while rendering the texture or if the render should be done to the entire texture.
         */ this.ignoreCameraViewport = false;
        /**
         * An event triggered when the texture is unbind.
         */ this.onBeforeBindObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * An event triggered when the texture is unbind.
         */ this.onAfterUnbindObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * An event triggered after the texture clear
         */ this.onClearObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * An event triggered when the texture is resized.
         */ this.onResizeObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        /** @internal */ this._cleared = false;
        /**
         * Skip the initial clear of the rtt at the beginning of the frame render loop
         */ this.skipInitialClear = false;
        this._samples = 1;
        this._canRescale = true;
        this._renderTarget = null;
        this._dontDisposeObjectRenderer = false;
        /**
         * Gets or sets the center of the bounding box associated with the texture (when in cube mode)
         * It must define where the camera used to render the texture is set
         */ this.boundingBoxPosition = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        /** @internal */ this._disableEngineStages = false; // TODO: remove this when the shadow generator task (frame graph) is reworked (see https://github.com/BabylonJS/Babylon.js/pull/15962#discussion_r1874417607)
        this._dumpToolsLoading = false;
        scene = this.getScene();
        if (!scene) {
            return;
        }
        const engine = this.getScene().getEngine();
        this._gammaSpace = gammaSpace;
        this._coordinatesMode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"].PROJECTION_MODE;
        this.name = name;
        this.isRenderTarget = true;
        this._initialSizeParameter = size;
        this._dontDisposeObjectRenderer = !!existingObjectRenderer;
        this._processSizeParameter(size);
        this._objectRenderer = existingObjectRenderer ?? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Rendering$2f$objectRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ObjectRenderer"](name, scene, {
            numPasses: isCube ? 6 : this.getRenderLayers() || 1,
            doNotChangeAspectRatio,
            enableClusteredLights
        });
        this._onBeforeRenderingManagerRenderObserver = this._objectRenderer.onBeforeRenderingManagerRenderObservable.add(()=>{
            // Before clear
            if (!this._disableEngineStages) {
                for (const step of this._scene._beforeRenderTargetClearStage){
                    step.action(this, this._currentFaceIndex, this._currentLayer);
                }
            }
            // Clear
            if (this.onClearObservable.hasObservers()) {
                this.onClearObservable.notifyObservers(engine);
            } else if (!this.skipInitialClear) {
                engine.clear(this.clearColor || this._scene.clearColor, true, true, true);
            }
            if (!this._doNotChangeAspectRatio) {
                this._scene.updateTransformMatrix(true);
            }
            // Before Camera Draw
            if (!this._disableEngineStages) {
                for (const step of this._scene._beforeRenderTargetDrawStage){
                    step.action(this, this._currentFaceIndex, this._currentLayer);
                }
            }
        });
        this._onAfterRenderingManagerRenderObserver = this._objectRenderer.onAfterRenderingManagerRenderObservable.add(()=>{
            // After Camera Draw
            if (!this._disableEngineStages) {
                for (const step of this._scene._afterRenderTargetDrawStage){
                    step.action(this, this._currentFaceIndex, this._currentLayer);
                }
            }
            const saveGenerateMipMaps = this._texture?.generateMipMaps ?? false;
            if (this._texture) {
                this._texture.generateMipMaps = false; // if left true, the mipmaps will be generated (if this._texture.generateMipMaps = true) when the first post process binds its own RTT: by doing so it will unbind the current RTT,
            // which will trigger a mipmap generation. We don't want this because it's a wasted work, we will do an unbind of the current RTT at the end of the process (see unbindFrameBuffer) which will
            // trigger the generation of the final mipmaps
            }
            if (this._postProcessManager) {
                this._postProcessManager._finalizeFrame(false, this._renderTarget ?? undefined, this._currentFaceIndex, this._postProcesses, this.ignoreCameraViewport);
            } else if (this._currentUseCameraPostProcess) {
                this._scene.postProcessManager._finalizeFrame(false, this._renderTarget ?? undefined, this._currentFaceIndex);
            }
            if (!this._disableEngineStages) {
                for (const step of this._scene._afterRenderTargetPostProcessStage){
                    step.action(this, this._currentFaceIndex, this._currentLayer);
                }
            }
            if (this._texture) {
                this._texture.generateMipMaps = saveGenerateMipMaps;
            }
            if (!this._doNotChangeAspectRatio) {
                this._scene.updateTransformMatrix(true);
            }
            // Dump ?
            if (this._currentDumpForDebug) {
                if (!this._dumpTools) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Error("dumpTools module is still being loaded. To speed up the process import dump tools directly in your project");
                } else {
                    // eslint-disable-next-line @typescript-eslint/no-floating-promises
                    this._dumpTools.DumpFramebuffer(this.getRenderWidth(), this.getRenderHeight(), engine);
                }
            }
        });
        this._onFastPathRenderObserver = this._objectRenderer.onFastPathRenderObservable.add(()=>{
            if (this.onClearObservable.hasObservers()) {
                this.onClearObservable.notifyObservers(engine);
            } else {
                if (!this.skipInitialClear) {
                    engine.clear(this.clearColor || this._scene.clearColor, true, true, true);
                }
            }
        });
        this._resizeObserver = engine.onResizeObservable.add(()=>{});
        this._generateMipMaps = generateMipMaps ? true : false;
        this._doNotChangeAspectRatio = doNotChangeAspectRatio;
        if (isMulti) {
            return;
        }
        this._renderTargetOptions = {
            generateMipMaps: generateMipMaps,
            type: type,
            format: this._format ?? undefined,
            samplingMode: this.samplingMode,
            generateDepthBuffer: generateDepthBuffer,
            generateStencilBuffer: generateStencilBuffer,
            samples,
            creationFlags,
            noColorAttachment: noColorAttachment,
            useSRGBBuffer,
            colorAttachment: colorAttachment,
            label: this.name
        };
        if (this.samplingMode === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"].NEAREST_SAMPLINGMODE) {
            this.wrapU = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"].CLAMP_ADDRESSMODE;
            this.wrapV = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"].CLAMP_ADDRESSMODE;
        }
        if (!delayAllocation) {
            if (isCube) {
                this._renderTarget = scene.getEngine().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions);
                this.coordinatesMode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"].INVCUBIC_MODE;
                this._textureMatrix = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].Identity();
            } else {
                this._renderTarget = scene.getEngine().createRenderTargetTexture(this._size, this._renderTargetOptions);
            }
            this._texture = this._renderTarget.texture;
            if (samples !== undefined) {
                this.samples = samples;
            }
        }
    }
    /**
     * Creates a depth stencil texture.
     * This is only available in WebGL 2 or with the depth texture extension available.
     * @param comparisonFunction Specifies the comparison function to set on the texture. If 0 or undefined, the texture is not in comparison mode (default: 0)
     * @param bilinearFiltering Specifies whether or not bilinear filtering is enable on the texture (default: true)
     * @param generateStencil Specifies whether or not a stencil should be allocated in the texture (default: false)
     * @param samples sample count of the depth/stencil texture (default: 1)
     * @param format format of the depth texture (default: 14)
     * @param label defines the label of the texture (for debugging purpose)
     */ createDepthStencilTexture(comparisonFunction = 0, bilinearFiltering = true, generateStencil = false, samples = 1, format = 14, label) {
        this._renderTarget?.createDepthStencilTexture(comparisonFunction, bilinearFiltering, generateStencil, samples, format, label);
    }
    _processSizeParameter(size) {
        if (size.ratio) {
            this._sizeRatio = size.ratio;
            const engine = this._getEngine();
            this._size = {
                width: this._bestReflectionRenderTargetDimension(engine.getRenderWidth(), this._sizeRatio),
                height: this._bestReflectionRenderTargetDimension(engine.getRenderHeight(), this._sizeRatio)
            };
        } else {
            this._size = size;
        }
    }
    /**
     * Define the number of samples to use in case of MSAA.
     * It defaults to one meaning no MSAA has been enabled.
     */ get samples() {
        return this._renderTarget?.samples ?? this._samples;
    }
    set samples(value) {
        if (this._renderTarget) {
            this._samples = this._renderTarget.setSamples(value);
        }
    }
    /**
     * Adds a post process to the render target rendering passes.
     * @param postProcess define the post process to add
     */ addPostProcess(postProcess) {
        if (!this._postProcessManager) {
            const scene = this.getScene();
            if (!scene) {
                return;
            }
            this._postProcessManager = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$PostProcesses$2f$postProcessManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PostProcessManager"](scene);
            this._postProcesses = new Array();
        }
        this._postProcesses.push(postProcess);
        this._postProcesses[0].autoClear = false;
    }
    /**
     * Clear all the post processes attached to the render target
     * @param dispose define if the cleared post processes should also be disposed (false by default)
     */ clearPostProcesses(dispose = false) {
        if (!this._postProcesses) {
            return;
        }
        if (dispose) {
            for (const postProcess of this._postProcesses){
                postProcess.dispose();
            }
        }
        this._postProcesses = [];
    }
    /**
     * Remove one of the post process from the list of attached post processes to the texture
     * @param postProcess define the post process to remove from the list
     */ removePostProcess(postProcess) {
        if (!this._postProcesses) {
            return;
        }
        const index = this._postProcesses.indexOf(postProcess);
        if (index === -1) {
            return;
        }
        this._postProcesses.splice(index, 1);
        if (this._postProcesses.length > 0) {
            this._postProcesses[0].autoClear = false;
        }
    }
    /**
     * Resets the refresh counter of the texture and start bak from scratch.
     * Could be useful to regenerate the texture if it is setup to render only once.
     */ resetRefreshCounter() {
        this._objectRenderer.resetRefreshCounter();
    }
    /**
     * Define the refresh rate of the texture or the rendering frequency.
     * Use 0 to render just once, 1 to render on every frame, 2 to render every two frames and so on...
     */ get refreshRate() {
        return this._objectRenderer.refreshRate;
    }
    set refreshRate(value) {
        this._objectRenderer.refreshRate = value;
    }
    /** @internal */ _shouldRender() {
        return this._objectRenderer.shouldRender();
    }
    /**
     * Gets the actual render size of the texture.
     * @returns the width of the render size
     */ getRenderSize() {
        return this.getRenderWidth();
    }
    /**
     * Gets the actual render width of the texture.
     * @returns the width of the render size
     */ getRenderWidth() {
        if (this._size.width) {
            return this._size.width;
        }
        return this._size;
    }
    /**
     * Gets the actual render height of the texture.
     * @returns the height of the render size
     */ getRenderHeight() {
        if (this._size.width) {
            return this._size.height;
        }
        return this._size;
    }
    /**
     * Gets the actual number of layers of the texture or, in the case of a 3D texture, return the depth.
     * @returns the number of layers
     */ getRenderLayers() {
        const layers = this._size.layers;
        if (layers) {
            return layers;
        }
        const depth = this._size.depth;
        if (depth) {
            return depth;
        }
        return 0;
    }
    /**
     * Don't allow this render target texture to rescale. Mainly used to prevent rescaling by the scene optimizer.
     */ disableRescaling() {
        this._canRescale = false;
    }
    /**
     * Get if the texture can be rescaled or not.
     */ get canRescale() {
        return this._canRescale;
    }
    /**
     * Resize the texture using a ratio.
     * @param ratio the ratio to apply to the texture size in order to compute the new target size
     */ scale(ratio) {
        const newSize = Math.max(1, this.getRenderSize() * ratio);
        this.resize(newSize);
    }
    /**
     * Get the texture reflection matrix used to rotate/transform the reflection.
     * @returns the reflection matrix
     */ getReflectionTextureMatrix() {
        if (this.isCube) {
            return this._textureMatrix;
        }
        return super.getReflectionTextureMatrix();
    }
    /**
     * Resize the texture to a new desired size.
     * Be careful as it will recreate all the data in the new texture.
     * @param size Define the new size. It can be:
     *   - a number for squared texture,
     *   - an object containing { width: number, height: number }
     *   - or an object containing a ratio { ratio: number }
     */ resize(size) {
        const wasCube = this.isCube;
        this._renderTarget?.dispose();
        this._renderTarget = null;
        const scene = this.getScene();
        if (!scene) {
            return;
        }
        this._processSizeParameter(size);
        if (wasCube) {
            this._renderTarget = scene.getEngine().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions);
        } else {
            this._renderTarget = scene.getEngine().createRenderTargetTexture(this._size, this._renderTargetOptions);
        }
        this._texture = this._renderTarget.texture;
        if (this._renderTargetOptions.samples !== undefined) {
            this.samples = this._renderTargetOptions.samples;
        }
        if (this.onResizeObservable.hasObservers()) {
            this.onResizeObservable.notifyObservers(this);
        }
    }
    /**
     * Renders all the objects from the render list into the texture.
     * @param useCameraPostProcess Define if camera post processes should be used during the rendering
     * @param dumpForDebug Define if the rendering result should be dumped (copied) for debugging purpose
     */ render(useCameraPostProcess = false, dumpForDebug = false) {
        this._render(useCameraPostProcess, dumpForDebug);
    }
    /**
     * This function will check if the render target texture can be rendered (textures are loaded, shaders are compiled)
     * @returns true if all required resources are ready
     */ isReadyForRendering() {
        if (!this._dumpToolsLoading) {
            this._dumpToolsLoading = true;
            // avoid a static import to allow ignoring the import in some cases
            // eslint-disable-next-line @typescript-eslint/no-floating-promises, github/no-then
            __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/dumpTools.js [app-client] (ecmascript, async loader)").then((module)=>this._dumpTools = module);
        }
        this._objectRenderer.prepareRenderList();
        this.onBeforeBindObservable.notifyObservers(this);
        this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight());
        const isReady = this._objectRenderer._checkReadiness();
        this.onAfterUnbindObservable.notifyObservers(this);
        this._objectRenderer.finishRender();
        return isReady;
    }
    _render(useCameraPostProcess = false, dumpForDebug = false) {
        const scene = this.getScene();
        if (!scene) {
            return;
        }
        if (this.useCameraPostProcesses !== undefined) {
            useCameraPostProcess = this.useCameraPostProcesses;
        }
        this._objectRenderer.prepareRenderList();
        this.onBeforeBindObservable.notifyObservers(this);
        this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight());
        if ((this.is2DArray || this.is3D) && !this.isMulti) {
            for(let layer = 0; layer < this.getRenderLayers(); layer++){
                this._renderToTarget(0, useCameraPostProcess, dumpForDebug, layer);
                scene.incrementRenderId();
                scene.resetCachedMaterial();
            }
        } else if (this.isCube && !this.isMulti) {
            for(let face = 0; face < 6; face++){
                this._renderToTarget(face, useCameraPostProcess, dumpForDebug);
                scene.incrementRenderId();
                scene.resetCachedMaterial();
            }
        } else {
            this._renderToTarget(0, useCameraPostProcess, dumpForDebug);
        }
        this.onAfterUnbindObservable.notifyObservers(this);
        this._objectRenderer.finishRender();
    }
    _bestReflectionRenderTargetDimension(renderDimension, scale) {
        const minimum = 128;
        const x = renderDimension * scale;
        const curved = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NearestPOT"])(x + minimum * minimum / (minimum + x));
        // Ensure we don't exceed the render dimension (while staying POT)
        return Math.min((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FloorPOT"])(renderDimension), curved);
    }
    /**
     * @internal
     * @param faceIndex face index to bind to if this is a cubetexture
     * @param layer defines the index of the texture to bind in the array
     */ _bindFrameBuffer(faceIndex = 0, layer = 0) {
        const scene = this.getScene();
        if (!scene) {
            return;
        }
        const engine = scene.getEngine();
        if (this._renderTarget) {
            engine.bindFramebuffer(this._renderTarget, this.isCube ? faceIndex : undefined, undefined, undefined, this.ignoreCameraViewport, 0, layer);
        }
    }
    _unbindFrameBuffer(engine, faceIndex) {
        if (!this._renderTarget) {
            return;
        }
        engine.unBindFramebuffer(this._renderTarget, this.isCube, ()=>{
            this.onAfterRenderObservable.notifyObservers(faceIndex);
        });
    }
    /**
     * @internal
     */ _prepareFrame(scene, faceIndex, layer, useCameraPostProcess) {
        if (this._postProcessManager) {
            if (!this._prePassEnabled) {
                if (!this._postProcessManager._prepareFrame(this._texture, this._postProcesses)) {
                    this._bindFrameBuffer(faceIndex, layer);
                }
            }
        } else if (!useCameraPostProcess || !scene.postProcessManager._prepareFrame(this._texture)) {
            this._bindFrameBuffer(faceIndex, layer);
        }
    }
    _renderToTarget(faceIndex, useCameraPostProcess, dumpForDebug, layer = 0) {
        const scene = this.getScene();
        if (!scene) {
            return;
        }
        const engine = scene.getEngine();
        this._currentFaceIndex = faceIndex;
        this._currentLayer = layer;
        this._currentUseCameraPostProcess = useCameraPostProcess;
        this._currentDumpForDebug = dumpForDebug;
        this._prepareFrame(scene, faceIndex, layer, useCameraPostProcess);
        engine._debugPushGroup?.(`render to face #${faceIndex} layer #${layer}`, 2);
        this._objectRenderer.render(faceIndex + layer, true); // only faceIndex or layer (if any) will be different from 0 (we don't support array of cubes), so it's safe to add them to get the pass index
        engine._debugPopGroup?.(2);
        this._unbindFrameBuffer(engine, faceIndex);
        if (this._texture && this.isCube && faceIndex === 5) {
            engine.generateMipMapsForCubemap(this._texture, true);
        }
    }
    /**
     * Overrides the default sort function applied in the rendering group to prepare the meshes.
     * This allowed control for front to back rendering or reversely depending of the special needs.
     *
     * @param renderingGroupId The rendering group id corresponding to its index
     * @param opaqueSortCompareFn The opaque queue comparison function use to sort.
     * @param alphaTestSortCompareFn The alpha test queue comparison function use to sort.
     * @param transparentSortCompareFn The transparent queue comparison function use to sort.
     */ setRenderingOrder(renderingGroupId, opaqueSortCompareFn = null, alphaTestSortCompareFn = null, transparentSortCompareFn = null) {
        this._objectRenderer.setRenderingOrder(renderingGroupId, opaqueSortCompareFn, alphaTestSortCompareFn, transparentSortCompareFn);
    }
    /**
     * Specifies whether or not the stencil and depth buffer are cleared between two rendering groups.
     *
     * @param renderingGroupId The rendering group id corresponding to its index
     * @param autoClearDepthStencil Automatically clears depth and stencil between groups if true.
     */ setRenderingAutoClearDepthStencil(renderingGroupId, autoClearDepthStencil) {
        this._objectRenderer.setRenderingAutoClearDepthStencil(renderingGroupId, autoClearDepthStencil);
    }
    /**
     * Clones the texture.
     * @returns the cloned texture
     */ clone() {
        const textureSize = this.getSize();
        const newTexture = new RenderTargetTexture(this.name, textureSize, this.getScene(), this._renderTargetOptions.generateMipMaps, this._doNotChangeAspectRatio, this._renderTargetOptions.type, this.isCube, this._renderTargetOptions.samplingMode, this._renderTargetOptions.generateDepthBuffer, this._renderTargetOptions.generateStencilBuffer, undefined, this._renderTargetOptions.format, undefined, this._renderTargetOptions.samples);
        // Base texture
        newTexture.hasAlpha = this.hasAlpha;
        newTexture.level = this.level;
        // RenderTarget Texture
        newTexture.coordinatesMode = this.coordinatesMode;
        if (this.renderList) {
            newTexture.renderList = this.renderList.slice(0);
        }
        return newTexture;
    }
    /**
     * Serialize the texture to a JSON representation we can easily use in the respective Parse function.
     * @returns The JSON representation of the texture
     */ serialize() {
        if (!this.name) {
            return null;
        }
        const serializationObject = super.serialize();
        serializationObject.renderTargetSize = this.getRenderSize();
        serializationObject.renderList = [];
        if (this.renderList) {
            for(let index = 0; index < this.renderList.length; index++){
                serializationObject.renderList.push(this.renderList[index].id);
            }
        }
        return serializationObject;
    }
    /**
     *  This will remove the attached framebuffer objects. The texture will not be able to be used as render target anymore
     */ disposeFramebufferObjects() {
        this._renderTarget?.dispose(true);
    }
    /**
     * Release and destroy the underlying lower level texture aka internalTexture.
     */ releaseInternalTexture() {
        this._renderTarget?.releaseTextures();
        this._texture = null;
    }
    /**
     * Dispose the texture and release its associated resources.
     */ dispose() {
        this.onResizeObservable.clear();
        this.onClearObservable.clear();
        this.onAfterUnbindObservable.clear();
        this.onBeforeBindObservable.clear();
        if (this._postProcessManager) {
            this._postProcessManager.dispose();
            this._postProcessManager = null;
        }
        if (this._prePassRenderTarget) {
            this._prePassRenderTarget.dispose();
        }
        this._objectRenderer.onBeforeRenderingManagerRenderObservable.remove(this._onBeforeRenderingManagerRenderObserver);
        this._objectRenderer.onAfterRenderingManagerRenderObservable.remove(this._onAfterRenderingManagerRenderObserver);
        this._objectRenderer.onFastPathRenderObservable.remove(this._onFastPathRenderObserver);
        if (!this._dontDisposeObjectRenderer) {
            this._objectRenderer.dispose();
        }
        this.clearPostProcesses(true);
        if (this._resizeObserver) {
            this.getScene().getEngine().onResizeObservable.remove(this._resizeObserver);
            this._resizeObserver = null;
        }
        // Remove from custom render targets
        const scene = this.getScene();
        if (!scene) {
            return;
        }
        let index = scene.customRenderTargets.indexOf(this);
        if (index >= 0) {
            scene.customRenderTargets.splice(index, 1);
        }
        for (const camera of scene.cameras){
            index = camera.customRenderTargets.indexOf(this);
            if (index >= 0) {
                camera.customRenderTargets.splice(index, 1);
            }
        }
        this._renderTarget?.dispose();
        this._renderTarget = null;
        this._texture = null;
        super.dispose();
    }
    /** @internal */ _rebuild() {
        this._objectRenderer._rebuild();
        if (this._postProcessManager) {
            this._postProcessManager._rebuild();
        }
    }
    /**
     * Clear the info related to rendering groups preventing retention point in material dispose.
     */ freeRenderingGroups() {
        this._objectRenderer.freeRenderingGroups();
    }
    /**
     * Gets the number of views the corresponding to the texture (eg. a MultiviewRenderTarget will have > 1)
     * @returns the view count
     */ getViewCount() {
        return 1;
    }
}
/**
 * The texture will only be rendered once which can be useful to improve performance if everything in your render is static for instance.
 */ RenderTargetTexture.REFRESHRATE_RENDER_ONCE = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Rendering$2f$objectRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ObjectRenderer"].REFRESHRATE_RENDER_ONCE;
/**
 * The texture will be rendered every frame and is recommended for dynamic contents.
 */ RenderTargetTexture.REFRESHRATE_RENDER_ONEVERYFRAME = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Rendering$2f$objectRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ObjectRenderer"].REFRESHRATE_RENDER_ONEVERYFRAME;
/**
 * The texture will be rendered every 2 frames which could be enough if your dynamic objects are not
 * the central point of your effect and can save a lot of performances.
 */ RenderTargetTexture.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Rendering$2f$objectRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ObjectRenderer"].REFRESHRATE_RENDER_ONEVERYTWOFRAMES;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"]._CreateRenderTargetTexture = (name, renderTargetSize, scene, generateMipMaps, creationFlags)=>{
    return new RenderTargetTexture(name, renderTargetSize, scene, generateMipMaps);
}; //# sourceMappingURL=renderTargetTexture.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/textureHelper.functions.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Checks if a given format is a depth texture format
 * @param format Format to check
 * @returns True if the format is a depth texture format
 */ __turbopack_context__.s([
    "GetTypeForDepthTexture",
    ()=>GetTypeForDepthTexture,
    "HasStencilAspect",
    ()=>HasStencilAspect,
    "IsDepthTexture",
    ()=>IsDepthTexture
]);
function IsDepthTexture(format) {
    return format === 13 || format === 14 || format === 15 || format === 16 || format === 17 || format === 18 || format === 19;
}
function GetTypeForDepthTexture(format) {
    switch(format){
        case 13:
        case 17:
        case 18:
        case 14:
        case 16:
            return 1;
        case 15:
            return 5;
        case 19:
            return 0;
    }
    return 0;
}
function HasStencilAspect(format) {
    return format === 13 || format === 17 || format === 18 || format === 19;
} //# sourceMappingURL=textureHelper.functions.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/textureCreationOptions.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Check if a TextureSize is an object
 * @param size The TextureSize to check
 * @returns True if the TextureSize is an object
 */ __turbopack_context__.s([
    "getDimensionsFromTextureSize",
    ()=>getDimensionsFromTextureSize,
    "textureSizeIsObject",
    ()=>textureSizeIsObject
]);
function textureSizeIsObject(size) {
    // eslint-disable-next-line jsdoc/require-jsdoc
    return size.width !== undefined;
}
function getDimensionsFromTextureSize(size) {
    if (textureSizeIsObject(size)) {
        return {
            width: size.width,
            height: size.height
        };
    }
    return {
        width: size,
        height: size
    };
} //# sourceMappingURL=textureCreationOptions.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/rawTexture.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RawTexture",
    ()=>RawTexture
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/texture.js [app-client] (ecmascript)");
;
class RawTexture extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"] {
    /**
     * Instantiates a new RawTexture.
     * Raw texture can help creating a texture directly from an array of data.
     * This can be super useful if you either get the data from an uncompressed source or
     * if you wish to create your texture pixel by pixel.
     * @param data define the array of data to use to create the texture (null to create an empty texture)
     * @param width define the width of the texture
     * @param height define the height of the texture
     * @param format define the format of the data (RGB, RGBA... Engine.TEXTUREFORMAT_xxx)
     * @param sceneOrEngine defines the scene or engine the texture will belong to
     * @param generateMipMaps define whether mip maps should be generated or not
     * @param invertY define if the data should be flipped on Y when uploaded to the GPU
     * @param samplingMode define the texture sampling mode (Texture.xxx_SAMPLINGMODE)
     * @param type define the format of the data (int, float... Engine.TEXTURETYPE_xxx)
     * @param creationFlags specific flags to use when creating the texture (1 for storage textures, for eg)
     * @param useSRGBBuffer defines if the texture must be loaded in a sRGB GPU buffer (if supported by the GPU).
     * @param waitDataToBeReady If set to true Rawtexture will wait data to be set in order to be flaged as ready.
     */ constructor(data, width, height, /**
     * Define the format of the data (RGB, RGBA... Engine.TEXTUREFORMAT_xxx)
     */ format, sceneOrEngine, generateMipMaps = true, invertY = false, samplingMode = 3, type = 0, creationFlags, useSRGBBuffer, waitDataToBeReady){
        super(null, sceneOrEngine, !generateMipMaps, invertY, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, creationFlags);
        this.format = format;
        if (!this._engine) {
            return;
        }
        if (!this._engine._caps.textureFloatLinearFiltering && type === 1) {
            samplingMode = 1;
        }
        if (!this._engine._caps.textureHalfFloatLinearFiltering && type === 2) {
            samplingMode = 1;
        }
        this._texture = this._engine.createRawTexture(data, width, height, format, generateMipMaps, invertY, samplingMode, null, type, creationFlags ?? 0, useSRGBBuffer ?? false);
        this.wrapU = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"].CLAMP_ADDRESSMODE;
        this.wrapV = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"].CLAMP_ADDRESSMODE;
        this._waitingForData = !!waitDataToBeReady && !data;
    }
    /**
     * Updates the texture underlying data.
     * @param data Define the new data of the texture
     */ update(data) {
        this._getEngine().updateRawTexture(this._texture, data, this._texture.format, this._texture.invertY, null, this._texture.type, this._texture._useSRGBBuffer);
        this._waitingForData = false;
    }
    /**
     * Clones the texture.
     * @returns the cloned texture
     */ clone() {
        if (!this._texture) {
            return super.clone();
        }
        const rawTexture = new RawTexture(null, this.getSize().width, this.getSize().height, this.format, this.getScene(), this._texture.generateMipMaps, this._invertY, this.samplingMode, this._texture.type, this._texture._creationFlags, this._useSRGBBuffer);
        rawTexture._texture = this._texture;
        this._texture.incrementReferences();
        return rawTexture;
    }
    isReady() {
        return super.isReady() && !this._waitingForData;
    }
    /**
     * Creates a luminance texture from some data.
     * @param data Define the texture data
     * @param width Define the width of the texture
     * @param height Define the height of the texture
     * @param sceneOrEngine defines the scene or engine the texture will belong to
     * @param generateMipMaps Define whether or not to create mip maps for the texture
     * @param invertY define if the data should be flipped on Y when uploaded to the GPU
     * @param samplingMode define the texture sampling mode (Texture.xxx_SAMPLINGMODE)
     * @returns the luminance texture
     */ static CreateLuminanceTexture(data, width, height, sceneOrEngine, generateMipMaps = true, invertY = false, samplingMode = 3) {
        return new RawTexture(data, width, height, 1, sceneOrEngine, generateMipMaps, invertY, samplingMode);
    }
    /**
     * Creates a luminance alpha texture from some data.
     * @param data Define the texture data
     * @param width Define the width of the texture
     * @param height Define the height of the texture
     * @param sceneOrEngine defines the scene or engine the texture will belong to
     * @param generateMipMaps Define whether or not to create mip maps for the texture
     * @param invertY define if the data should be flipped on Y when uploaded to the GPU
     * @param samplingMode define the texture sampling mode (Texture.xxx_SAMPLINGMODE)
     * @returns the luminance alpha texture
     */ static CreateLuminanceAlphaTexture(data, width, height, sceneOrEngine, generateMipMaps = true, invertY = false, samplingMode = 3) {
        return new RawTexture(data, width, height, 2, sceneOrEngine, generateMipMaps, invertY, samplingMode);
    }
    /**
     * Creates an alpha texture from some data.
     * @param data Define the texture data
     * @param width Define the width of the texture
     * @param height Define the height of the texture
     * @param sceneOrEngine defines the scene or engine the texture will belong to
     * @param generateMipMaps Define whether or not to create mip maps for the texture
     * @param invertY define if the data should be flipped on Y when uploaded to the GPU
     * @param samplingMode define the texture sampling mode (Texture.xxx_SAMPLINGMODE)
     * @returns the alpha texture
     */ static CreateAlphaTexture(data, width, height, sceneOrEngine, generateMipMaps = true, invertY = false, samplingMode = 3) {
        return new RawTexture(data, width, height, 0, sceneOrEngine, generateMipMaps, invertY, samplingMode);
    }
    /**
     * Creates a RGB texture from some data.
     * @param data Define the texture data
     * @param width Define the width of the texture
     * @param height Define the height of the texture
     * @param sceneOrEngine defines the scene or engine the texture will belong to
     * @param generateMipMaps Define whether or not to create mip maps for the texture
     * @param invertY define if the data should be flipped on Y when uploaded to the GPU
     * @param samplingMode define the texture sampling mode (Texture.xxx_SAMPLINGMODE)
     * @param type define the format of the data (int, float... Engine.TEXTURETYPE_xxx)
     * @param creationFlags specific flags to use when creating the texture (1 for storage textures, for eg)
     * @param useSRGBBuffer defines if the texture must be loaded in a sRGB GPU buffer (if supported by the GPU).
     * @returns the RGB alpha texture
     */ static CreateRGBTexture(data, width, height, sceneOrEngine, generateMipMaps = true, invertY = false, samplingMode = 3, type = 0, creationFlags = 0, useSRGBBuffer = false) {
        return new RawTexture(data, width, height, 4, sceneOrEngine, generateMipMaps, invertY, samplingMode, type, creationFlags, useSRGBBuffer);
    }
    /**
     * Creates a RGBA texture from some data.
     * @param data Define the texture data
     * @param width Define the width of the texture
     * @param height Define the height of the texture
     * @param sceneOrEngine defines the scene or engine the texture will belong to
     * @param generateMipMaps Define whether or not to create mip maps for the texture
     * @param invertY define if the data should be flipped on Y when uploaded to the GPU
     * @param samplingMode define the texture sampling mode (Texture.xxx_SAMPLINGMODE)
     * @param type define the format of the data (int, float... Engine.TEXTURETYPE_xxx)
     * @param creationFlags specific flags to use when creating the texture (1 for storage textures, for eg)
     * @param useSRGBBuffer defines if the texture must be loaded in a sRGB GPU buffer (if supported by the GPU).
     * @param waitDataToBeReady if set to true this will force texture to wait for data to be set before it is considered ready.
     * @returns the RGBA texture
     */ static CreateRGBATexture(data, width, height, sceneOrEngine, generateMipMaps = true, invertY = false, samplingMode = 3, type = 0, creationFlags = 0, useSRGBBuffer = false, waitDataToBeReady = false) {
        return new RawTexture(data, width, height, 5, sceneOrEngine, generateMipMaps, invertY, samplingMode, type, creationFlags, useSRGBBuffer, waitDataToBeReady);
    }
    /**
     * Creates a RGBA storage texture from some data.
     * @param data Define the texture data
     * @param width Define the width of the texture
     * @param height Define the height of the texture
     * @param sceneOrEngine defines the scene or engine the texture will belong to
     * @param generateMipMaps Define whether or not to create mip maps for the texture
     * @param invertY define if the data should be flipped on Y when uploaded to the GPU
     * @param samplingMode define the texture sampling mode (Texture.xxx_SAMPLINGMODE)
     * @param type define the format of the data (int, float... Engine.TEXTURETYPE_xxx)
     * @param useSRGBBuffer defines if the texture must be loaded in a sRGB GPU buffer (if supported by the GPU).
     * @returns the RGBA texture
     */ static CreateRGBAStorageTexture(data, width, height, sceneOrEngine, generateMipMaps = true, invertY = false, samplingMode = 3, type = 0, useSRGBBuffer = false) {
        return new RawTexture(data, width, height, 5, sceneOrEngine, generateMipMaps, invertY, samplingMode, type, 1, useSRGBBuffer);
    }
    /**
     * Creates a R texture from some data.
     * @param data Define the texture data
     * @param width Define the width of the texture
     * @param height Define the height of the texture
     * @param sceneOrEngine defines the scene or engine the texture will belong to
     * @param generateMipMaps Define whether or not to create mip maps for the texture
     * @param invertY define if the data should be flipped on Y when uploaded to the GPU
     * @param samplingMode define the texture sampling mode (Texture.xxx_SAMPLINGMODE)
     * @param type define the format of the data (int, float... Engine.TEXTURETYPE_xxx)
     * @returns the R texture
     */ static CreateRTexture(data, width, height, sceneOrEngine, generateMipMaps = true, invertY = false, samplingMode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"].TRILINEAR_SAMPLINGMODE, type = 1) {
        return new RawTexture(data, width, height, 6, sceneOrEngine, generateMipMaps, invertY, samplingMode, type);
    }
    /**
     * Creates a R storage texture from some data.
     * @param data Define the texture data
     * @param width Define the width of the texture
     * @param height Define the height of the texture
     * @param sceneOrEngine defines the scene or engine the texture will belong to
     * @param generateMipMaps Define whether or not to create mip maps for the texture
     * @param invertY define if the data should be flipped on Y when uploaded to the GPU
     * @param samplingMode define the texture sampling mode (Texture.xxx_SAMPLINGMODE)
     * @param type define the format of the data (int, float... Engine.TEXTURETYPE_xxx)
     * @returns the R texture
     */ // eslint-disable-next-line @typescript-eslint/naming-convention
    static CreateRStorageTexture(data, width, height, sceneOrEngine, generateMipMaps = true, invertY = false, samplingMode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"].TRILINEAR_SAMPLINGMODE, type = 1) {
        return new RawTexture(data, width, height, 6, sceneOrEngine, generateMipMaps, invertY, samplingMode, type, 1);
    }
} //# sourceMappingURL=rawTexture.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/MultiviewRenderTarget.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MultiviewRenderTarget",
    ()=>MultiviewRenderTarget
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$renderTargetTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/renderTargetTexture.js [app-client] (ecmascript)");
;
class MultiviewRenderTarget extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$renderTargetTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RenderTargetTexture"] {
    set samples(value) {
        // We override this setter because multisampling is handled by framebufferTextureMultisampleMultiviewOVR
        this._samples = value;
    }
    get samples() {
        return this._samples;
    }
    /**
     * Creates a multiview render target
     * @param scene scene used with the render target
     * @param size the size of the render target (used for each view)
     */ constructor(scene, size = 512){
        super("multiview rtt", size, scene, false, true, 0, false, undefined, false, false, true, undefined, true);
        this._renderTarget = this.getScene().getEngine().createMultiviewRenderTargetTexture(this.getRenderWidth(), this.getRenderHeight());
        this._texture = this._renderTarget.texture;
        this._texture.isMultiview = true;
        this._texture.format = 5;
        this.samples = this._getEngine().getCaps().maxSamples || this.samples;
        this._texture.samples = this._samples;
    }
    /**
     * @internal
     */ _bindFrameBuffer() {
        if (!this._renderTarget) {
            return;
        }
        this.getScene().getEngine().bindMultiviewFramebuffer(this._renderTarget);
    }
    /**
     * Gets the number of views the corresponding to the texture (eg. a MultiviewRenderTarget will have > 1)
     * @returns the view count
     */ getViewCount() {
        return 2;
    }
} //# sourceMappingURL=MultiviewRenderTarget.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/dynamicTexture.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DynamicTexture",
    ()=>DynamicTexture
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/texture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Extensions$2f$engine$2e$dynamicTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Extensions/engine.dynamicTexture.js [app-client] (ecmascript)");
;
;
;
class DynamicTexture extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"] {
    /** @internal */ constructor(name, canvasOrSize, sceneOrOptions, generateMipMaps = false, samplingMode = 3, format = 5, invertY){
        const isScene = !sceneOrOptions || sceneOrOptions._isScene;
        const scene = isScene ? sceneOrOptions : sceneOrOptions?.scene;
        const noMipmap = isScene ? !generateMipMaps : sceneOrOptions;
        super(null, scene, noMipmap, invertY, samplingMode, undefined, undefined, undefined, undefined, format);
        this.name = name;
        this.wrapU = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"].CLAMP_ADDRESSMODE;
        this.wrapV = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"].CLAMP_ADDRESSMODE;
        this._generateMipMaps = generateMipMaps;
        const engine = this._getEngine();
        if (!engine) {
            return;
        }
        if (canvasOrSize.getContext) {
            this._canvas = canvasOrSize;
            this._ownCanvas = false;
            this._texture = engine.createDynamicTexture(this._canvas.width, this._canvas.height, generateMipMaps, samplingMode);
        } else {
            this._canvas = engine.createCanvas(1, 1);
            this._ownCanvas = true;
            const optionsAsSize = canvasOrSize;
            if (optionsAsSize.width || optionsAsSize.width === 0) {
                this._texture = engine.createDynamicTexture(optionsAsSize.width, optionsAsSize.height, generateMipMaps, samplingMode);
            } else {
                this._texture = engine.createDynamicTexture(canvasOrSize, canvasOrSize, generateMipMaps, samplingMode);
            }
        }
        const textureSize = this.getSize();
        if (this._canvas.width !== textureSize.width) {
            this._canvas.width = textureSize.width;
        }
        if (this._canvas.height !== textureSize.height) {
            this._canvas.height = textureSize.height;
        }
        this._context = this._canvas.getContext("2d");
    }
    /**
     * Get the current class name of the texture useful for serialization or dynamic coding.
     * @returns "DynamicTexture"
     */ getClassName() {
        return "DynamicTexture";
    }
    /**
     * Gets the current state of canRescale
     */ get canRescale() {
        return true;
    }
    _recreate(textureSize) {
        this._canvas.width = textureSize.width;
        this._canvas.height = textureSize.height;
        this.releaseInternalTexture();
        this._texture = this._getEngine().createDynamicTexture(textureSize.width, textureSize.height, this._generateMipMaps, this.samplingMode);
    }
    /**
     * Scales the texture
     * @param ratio the scale factor to apply to both width and height
     */ scale(ratio) {
        const textureSize = this.getSize();
        textureSize.width *= ratio;
        textureSize.height *= ratio;
        this._recreate(textureSize);
    }
    /**
     * Resizes the texture
     * @param width the new width
     * @param height the new height
     */ scaleTo(width, height) {
        const textureSize = this.getSize();
        textureSize.width = width;
        textureSize.height = height;
        this._recreate(textureSize);
    }
    /**
     * Gets the context of the canvas used by the texture
     * @returns the canvas context of the dynamic texture
     */ getContext() {
        return this._context;
    }
    /**
     * Clears the texture
     * @param clearColor Defines the clear color to use
     */ clear(clearColor) {
        const size = this.getSize();
        if (clearColor) {
            this._context.fillStyle = clearColor;
        }
        this._context.clearRect(0, 0, size.width, size.height);
    }
    /**
     * Updates the texture
     * @param invertY defines the direction for the Y axis (default is true - y increases downwards)
     * @param premulAlpha defines if alpha is stored as premultiplied (default is false)
     * @param allowGPUOptimization true to allow some specific GPU optimizations (subject to engine feature "allowGPUOptimizationsForGUI" being true)
     */ update(invertY, premulAlpha = false, allowGPUOptimization = false) {
        // When disposed, this._texture will be null.
        if (!this._texture) {
            return;
        }
        this._getEngine().updateDynamicTexture(this._texture, this._canvas, invertY === undefined ? true : invertY, premulAlpha, this._format || undefined, undefined, allowGPUOptimization);
    }
    /**
     * Draws text onto the texture
     * @param text defines the text to be drawn
     * @param x defines the placement of the text from the left
     * @param y defines the placement of the text from the top when invertY is true and from the bottom when false
     * @param font defines the font to be used with font-style, font-size, font-name
     * @param color defines the color used for the text
     * @param fillColor defines the color for the canvas, use null to not overwrite canvas (this bleands with the background to replace, use the clear function)
     * @param invertY defines the direction for the Y axis (default is true - y increases downwards)
     * @param update defines whether texture is immediately update (default is true)
     */ drawText(text, x, y, font, color, fillColor, invertY, update = true) {
        const size = this.getSize();
        if (fillColor) {
            this._context.fillStyle = fillColor;
            this._context.fillRect(0, 0, size.width, size.height);
        }
        this._context.font = font;
        if (x === null || x === undefined) {
            const textSize = this._context.measureText(text);
            x = (size.width - textSize.width) / 2;
        }
        if (y === null || y === undefined) {
            const fontSize = parseInt(font.replace(/\D/g, ""));
            y = size.height / 2 + fontSize / 3.65;
        }
        this._context.fillStyle = color || "";
        this._context.fillText(text, x, y);
        if (update) {
            this.update(invertY);
        }
    }
    /**
     * Disposes the dynamic texture.
     */ dispose() {
        super.dispose();
        if (this._ownCanvas) {
            this._canvas?.remove?.();
        }
        this._canvas = null;
        this._context = null;
    }
    /**
     * Clones the texture
     * @returns the clone of the texture.
     */ clone() {
        const scene = this.getScene();
        if (!scene) {
            return this;
        }
        const textureSize = this.getSize();
        const newTexture = new DynamicTexture(this.name, textureSize, scene, this._generateMipMaps);
        // Base texture
        newTexture.hasAlpha = this.hasAlpha;
        newTexture.level = this.level;
        // Dynamic Texture
        newTexture.wrapU = this.wrapU;
        newTexture.wrapV = this.wrapV;
        return newTexture;
    }
    /**
     * Serializes the dynamic texture.  The scene should be ready before the dynamic texture is serialized
     * @returns a serialized dynamic texture object
     */ serialize() {
        const scene = this.getScene();
        if (scene && !scene.isReady()) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Warn("The scene must be ready before serializing the dynamic texture");
        }
        const serializationObject = super.serialize();
        if (DynamicTexture._IsCanvasElement(this._canvas)) {
            serializationObject.base64String = this._canvas.toDataURL();
        }
        serializationObject.invertY = this._invertY;
        serializationObject.samplingMode = this.samplingMode;
        return serializationObject;
    }
    static _IsCanvasElement(canvas) {
        return canvas.toDataURL !== undefined;
    }
    /** @internal */ _rebuild() {
        this.update();
    }
} //# sourceMappingURL=dynamicTexture.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/baseTexture.polynomial.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$HighDynamicRange$2f$cubemapToSphericalPolynomial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/HighDynamicRange/cubemapToSphericalPolynomial.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$baseTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/baseTexture.js [app-client] (ecmascript)");
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$baseTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseTexture"].prototype.forceSphericalPolynomialsRecompute = function() {
    if (this._texture) {
        this._texture._sphericalPolynomial = null;
        this._texture._sphericalPolynomialPromise = null;
        this._texture._sphericalPolynomialComputed = false;
    }
};
Object.defineProperty(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$baseTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseTexture"].prototype, "sphericalPolynomial", {
    get: function() {
        if (this._texture) {
            if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) {
                return this._texture._sphericalPolynomial;
            }
            if (this._texture.isReady) {
                if (!this._texture._sphericalPolynomialPromise) {
                    this._texture._sphericalPolynomialPromise = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$HighDynamicRange$2f$cubemapToSphericalPolynomial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CubeMapToSphericalPolynomialTools"].ConvertCubeMapTextureToSphericalPolynomial(this);
                    if (this._texture._sphericalPolynomialPromise === null) {
                        this._texture._sphericalPolynomialComputed = true;
                    } else {
                        // eslint-disable-next-line @typescript-eslint/no-floating-promises, github/no-then
                        this._texture._sphericalPolynomialPromise.then((sphericalPolynomial)=>{
                            this._texture._sphericalPolynomial = sphericalPolynomial;
                            this._texture._sphericalPolynomialComputed = true;
                        });
                    }
                }
                return null;
            }
        }
        return null;
    },
    set: function(value) {
        if (this._texture) {
            this._texture._sphericalPolynomial = value;
        }
    },
    enumerable: true,
    configurable: true
}); //# sourceMappingURL=baseTexture.polynomial.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/externalTexture.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ExternalTexture",
    ()=>ExternalTexture
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$internalTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/internalTexture.js [app-client] (ecmascript)");
;
class ExternalTexture {
    /**
     * Checks if a texture is an external or internal texture
     * @param texture the external or internal texture
     * @returns true if the texture is an external texture, else false
     */ static IsExternalTexture(texture) {
        return texture.underlyingResource !== undefined;
    }
    /**
     * Get the class name of the texture.
     * @returns "ExternalTexture"
     */ getClassName() {
        return "ExternalTexture";
    }
    /**
     * Gets the underlying texture object
     */ get underlyingResource() {
        return this._video;
    }
    /**
     * Constructs the texture
     * @param video The video the texture should be wrapped around
     */ constructor(video){
        /**
         * Gets a boolean indicating if the texture uses mipmaps
         */ this.useMipMaps = false;
        /**
         * The type of the underlying texture is implementation dependent, so return "UNDEFINED" for the type
         */ this.type = 16;
        /**
         * The format of the underlying texture is implementation dependent, so return "UNDEFINED" for the format
         */ this.format = 4294967295;
        this._video = video;
        this.uniqueId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$internalTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InternalTexture"]._Counter++;
    }
    /**
     * Get if the texture is ready to be used (downloaded, converted, mip mapped...).
     * @returns true if fully ready
     */ isReady() {
        return this._video.readyState >= this._video.HAVE_CURRENT_DATA;
    }
    /**
     * Dispose the texture and release its associated resources.
     */ dispose() {}
} //# sourceMappingURL=externalTexture.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/mirrorTexture.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MirrorTexture",
    ()=>MirrorTexture
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/texture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$renderTargetTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/renderTargetTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$PostProcesses$2f$blurPostProcess$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/PostProcesses/blurPostProcess.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$plane$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.plane.js [app-client] (ecmascript)");
;
;
;
;
;
class MirrorTexture extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$renderTargetTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RenderTargetTexture"] {
    /**
     * Define the blur ratio used to blur the reflection if needed.
     */ set blurRatio(value) {
        if (this._blurRatio === value) {
            return;
        }
        this._blurRatio = value;
        this._preparePostProcesses();
    }
    get blurRatio() {
        return this._blurRatio;
    }
    /**
     * Define the adaptive blur kernel used to blur the reflection if needed.
     * This will autocompute the closest best match for the `blurKernel`
     */ set adaptiveBlurKernel(value) {
        this._adaptiveBlurKernel = value;
        this._autoComputeBlurKernel();
    }
    /**
     * Define the blur kernel used to blur the reflection if needed.
     * Please consider using `adaptiveBlurKernel` as it could find the closest best value for you.
     */ set blurKernel(value) {
        this.blurKernelX = value;
        this.blurKernelY = value;
    }
    /**
     * Define the blur kernel on the X Axis used to blur the reflection if needed.
     * Please consider using `adaptiveBlurKernel` as it could find the closest best value for you.
     */ set blurKernelX(value) {
        if (this._blurKernelX === value) {
            return;
        }
        this._blurKernelX = value;
        this._preparePostProcesses();
    }
    get blurKernelX() {
        return this._blurKernelX;
    }
    /**
     * Define the blur kernel on the Y Axis used to blur the reflection if needed.
     * Please consider using `adaptiveBlurKernel` as it could find the closest best value for you.
     */ set blurKernelY(value) {
        if (this._blurKernelY === value) {
            return;
        }
        this._blurKernelY = value;
        this._preparePostProcesses();
    }
    get blurKernelY() {
        return this._blurKernelY;
    }
    _autoComputeBlurKernel() {
        const engine = this.getScene().getEngine();
        const dw = this.getRenderWidth() / engine.getRenderWidth();
        const dh = this.getRenderHeight() / engine.getRenderHeight();
        this.blurKernelX = this._adaptiveBlurKernel * dw;
        this.blurKernelY = this._adaptiveBlurKernel * dh;
    }
    resize(size) {
        super.resize(size);
        if (!this._adaptiveBlurKernel) {
            this._preparePostProcesses();
        } else {
            this._autoComputeBlurKernel();
        }
    }
    _onRatioRescale() {
        if (this._sizeRatio) {
            this.resize(this._initialSizeParameter);
            if (!this._adaptiveBlurKernel) {
                this._preparePostProcesses();
            }
        }
        if (this._adaptiveBlurKernel) {
            this._autoComputeBlurKernel();
        }
    }
    _updateGammaSpace() {
        const scene = this.getScene();
        if (!scene) {
            return;
        }
        this.gammaSpace = !scene.imageProcessingConfiguration.isEnabled || !scene.imageProcessingConfiguration.applyByPostProcess;
    }
    /**
     * Instantiates a Mirror Texture.
     * Mirror texture can be used to simulate the view from a mirror in a scene.
     * It will dynamically be rendered every frame to adapt to the camera point of view.
     * You can then easily use it as a reflectionTexture on a flat surface.
     * In case the surface is not a plane, please consider relying on reflection probes.
     * @see https://doc.babylonjs.com/features/featuresDeepDive/materials/using/reflectionTexture#mirrors
     * @param name
     * @param size
     * @param scene
     * @param generateMipMaps
     * @param type
     * @param samplingMode
     * @param generateDepthBuffer
     */ constructor(name, size, scene, generateMipMaps, type = 0, samplingMode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"].BILINEAR_SAMPLINGMODE, generateDepthBuffer = true){
        super(name, size, scene, generateMipMaps, true, type, false, samplingMode, generateDepthBuffer);
        /**
         * Define the reflection plane we want to use. The mirrorPlane is usually set to the constructed reflector.
         * It is possible to directly set the mirrorPlane by directly using a Plane(a, b, c, d) where a, b and c give the plane normal vector (a, b, c) and d is a scalar displacement from the mirrorPlane to the origin. However in all but the very simplest of situations it is more straight forward to set it to the reflector as stated in the doc.
         * @see https://doc.babylonjs.com/features/featuresDeepDive/materials/using/reflectionTexture#mirrors
         */ this.mirrorPlane = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$plane$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Plane"](0, 1, 0, 1);
        this._transformMatrix = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].Zero();
        this._mirrorMatrix = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].Zero();
        this._adaptiveBlurKernel = 0;
        this._blurKernelX = 0;
        this._blurKernelY = 0;
        this._blurRatio = 1.0;
        scene = this.getScene();
        if (!scene) {
            return this;
        }
        this.ignoreCameraViewport = true;
        this._updateGammaSpace();
        this._imageProcessingConfigChangeObserver = scene.imageProcessingConfiguration.onUpdateParameters.add(()=>{
            this._updateGammaSpace();
        });
        const engine = scene.getEngine();
        if (engine.supportsUniformBuffers) {
            this._sceneUBO = scene.createSceneUniformBuffer(`Scene for Mirror Texture (name "${name}")`);
        }
        let saveClipPlane;
        this.onBeforeRenderObservable.add(()=>{
            if (this._sceneUBO) {
                this._currentSceneUBO = scene.getSceneUniformBuffer();
                scene.setSceneUniformBuffer(this._sceneUBO);
                scene.getSceneUniformBuffer().unbindEffect();
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].ReflectionToRef(this.mirrorPlane, this._mirrorMatrix);
            this._mirrorMatrix.multiplyToRef(scene.getViewMatrix(), this._transformMatrix);
            scene.setTransformMatrix(this._transformMatrix, scene.getProjectionMatrix());
            saveClipPlane = scene.clipPlane;
            scene.clipPlane = this.mirrorPlane;
            const eyePos = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinates(scene.activeCamera.globalPosition, this._mirrorMatrix);
            scene._mirroredCameraPosition = eyePos;
            scene._forcedViewPosition = eyePos; // More performant to set 2 properties here than to check both mirroredCameraPos and forcedViewPos within eye binding (which happens on critical rendering path)
        });
        this.onAfterRenderObservable.add(()=>{
            if (this._sceneUBO) {
                scene.setSceneUniformBuffer(this._currentSceneUBO);
            }
            scene.updateTransformMatrix();
            scene._mirroredCameraPosition = null;
            scene._forcedViewPosition = null;
            scene.clipPlane = saveClipPlane;
        });
    }
    _preparePostProcesses() {
        this.clearPostProcesses(true);
        if (this._blurKernelX && this._blurKernelY) {
            const engine = this.getScene().getEngine();
            const textureType = engine.getCaps().textureFloatRender && engine.getCaps().textureFloatLinearFiltering ? 1 : 2;
            this._blurX = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$PostProcesses$2f$blurPostProcess$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlurPostProcess"]("horizontal blur", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](1.0, 0), this._blurKernelX, this._blurRatio, null, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"].BILINEAR_SAMPLINGMODE, engine, false, textureType);
            this._blurX.autoClear = false;
            if (this._blurRatio === 1 && this.samples < 2 && this._texture) {
                this._blurX.inputTexture = this._renderTarget;
            } else {
                this._blurX.alwaysForcePOT = true;
            }
            this._blurY = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$PostProcesses$2f$blurPostProcess$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlurPostProcess"]("vertical blur", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](0, 1.0), this._blurKernelY, this._blurRatio, null, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"].BILINEAR_SAMPLINGMODE, engine, false, textureType);
            this._blurY.autoClear = false;
            this._blurY.alwaysForcePOT = this._blurRatio !== 1;
            this.addPostProcess(this._blurX);
            this.addPostProcess(this._blurY);
        } else {
            if (this._blurY) {
                this.removePostProcess(this._blurY);
                this._blurY.dispose();
                this._blurY = null;
            }
            if (this._blurX) {
                this.removePostProcess(this._blurX);
                this._blurX.dispose();
                this._blurX = null;
            }
        }
    }
    /**
     * Clone the mirror texture.
     * @returns the cloned texture
     */ clone() {
        const scene = this.getScene();
        if (!scene) {
            return this;
        }
        const textureSize = this.getSize();
        const newTexture = new MirrorTexture(this.name, textureSize.width, scene, this._renderTargetOptions.generateMipMaps, this._renderTargetOptions.type, this._renderTargetOptions.samplingMode, this._renderTargetOptions.generateDepthBuffer);
        // Base texture
        newTexture.hasAlpha = this.hasAlpha;
        newTexture.level = this.level;
        // Mirror Texture
        newTexture.mirrorPlane = this.mirrorPlane.clone();
        if (this.renderList) {
            newTexture.renderList = this.renderList.slice(0);
        }
        return newTexture;
    }
    /**
     * Serialize the texture to a JSON representation you could use in Parse later on
     * @returns the serialized JSON representation
     */ serialize() {
        if (!this.name) {
            return null;
        }
        const serializationObject = super.serialize();
        serializationObject.mirrorPlane = this.mirrorPlane.asArray();
        return serializationObject;
    }
    /**
     * Dispose the texture and release its associated resources.
     */ dispose() {
        super.dispose();
        const scene = this.getScene();
        if (scene) {
            scene.imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingConfigChangeObserver);
        }
        this._sceneUBO?.dispose();
    }
}
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"]._CreateMirror = (name, renderTargetSize, scene, generateMipMaps)=>{
    return new MirrorTexture(name, renderTargetSize, scene, generateMipMaps);
}; //# sourceMappingURL=mirrorTexture.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/cubeTexture.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CubeTexture",
    ()=>CubeTexture
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/decorators.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/tools.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$baseTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/baseTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/texture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/decorators.serialization.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$AbstractEngine$2f$abstractEngine$2e$cubeTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/AbstractEngine/abstractEngine.cubeTexture.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
// The default scale applied to environment texture. This manages the range of LOD level used for IBL according to the roughness
const DefaultLodScale = 0.8;
class CubeTexture extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$baseTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseTexture"] {
    /**
     * Gets or sets the size of the bounding box associated with the cube texture
     * When defined, the cubemap will switch to local mode
     * @see https://community.arm.com/graphics/b/blog/posts/reflections-based-on-local-cubemaps-in-unity
     * @example https://www.babylonjs-playground.com/#RNASML
     */ set boundingBoxSize(value) {
        if (this._boundingBoxSize && this._boundingBoxSize.equals(value)) {
            return;
        }
        this._boundingBoxSize = value;
        const scene = this.getScene();
        if (scene) {
            scene.markAllMaterialsAsDirty(1);
        }
    }
    /**
     * Returns the bounding box size
     * @see https://doc.babylonjs.com/features/featuresDeepDive/materials/using/reflectionTexture#using-local-cubemap-mode
     */ get boundingBoxSize() {
        return this._boundingBoxSize;
    }
    /**
     * Sets texture matrix rotation angle around Y axis in radians.
     */ set rotationY(value) {
        this._rotationY = value;
        this.setReflectionTextureMatrix(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].RotationY(this._rotationY));
    }
    /**
     * Gets texture matrix rotation angle around Y axis radians.
     */ get rotationY() {
        return this._rotationY;
    }
    /**
     * Are mip maps generated for this texture or not.
     */ get noMipmap() {
        return this._noMipmap;
    }
    /**
     * Gets the forced extension (if any)
     */ get forcedExtension() {
        return this._forcedExtension;
    }
    /**
     * Creates a cube texture from an array of image urls
     * @param files defines an array of image urls
     * @param scene defines the hosting scene
     * @param noMipmap specifies if mip maps are not used
     * @returns a cube texture
     */ static CreateFromImages(files, scene, noMipmap) {
        let rootUrlKey = "";
        for (const url of files){
            rootUrlKey += url;
        }
        return new CubeTexture(rootUrlKey, scene, null, noMipmap, files);
    }
    /**
     * Creates and return a texture created from prefilterd data by tools like IBL Baker or Lys.
     * @param url defines the url of the prefiltered texture
     * @param scene defines the scene the texture is attached to
     * @param forcedExtension defines the extension of the file if different from the url
     * @param createPolynomials defines whether or not to create polynomial harmonics from the texture data if necessary
     * @returns the prefiltered texture
     */ static CreateFromPrefilteredData(url, scene, forcedExtension = null, createPolynomials = true) {
        const oldValue = scene.useDelayedTextureLoading;
        scene.useDelayedTextureLoading = false;
        const result = new CubeTexture(url, scene, null, false, null, null, null, undefined, true, forcedExtension, createPolynomials);
        scene.useDelayedTextureLoading = oldValue;
        return result;
    }
    /**
     * Creates a cube texture to use with reflection for instance. It can be based upon dds or six images as well
     * as prefiltered data.
     * @param rootUrl defines the url of the texture or the root name of the six images
     * @param sceneOrEngine defines the scene or engine the texture is attached to
     * @param extensionsOrOptions defines the suffixes add to the picture name in case six images are in use like _px.jpg or set of all options to create the cube texture
     * @param noMipmap defines if mipmaps should be created or not
     * @param files defines the six files to load for the different faces in that order: px, py, pz, nx, ny, nz
     * @param onLoad defines a callback triggered at the end of the file load if no errors occurred
     * @param onError defines a callback triggered in case of error during load
     * @param format defines the internal format to use for the texture once loaded
     * @param prefiltered defines whether or not the texture is created from prefiltered data
     * @param forcedExtension defines the extensions to use (force a special type of file to load) in case it is different from the file name
     * @param createPolynomials defines whether or not to create polynomial harmonics from the texture data if necessary
     * @param lodScale defines the scale applied to environment texture. This manages the range of LOD level used for IBL according to the roughness
     * @param lodOffset defines the offset applied to environment texture. This manages first LOD level used for IBL according to the roughness
     * @param loaderOptions options to be passed to the loader
     * @param useSRGBBuffer Defines if the texture must be loaded in a sRGB GPU buffer (if supported by the GPU) (default: false)
     * @returns the cube texture
     */ constructor(rootUrl, sceneOrEngine, extensionsOrOptions = null, noMipmap = false, files = null, onLoad = null, onError = null, format = 5, prefiltered = false, forcedExtension = null, createPolynomials = false, lodScale = DefaultLodScale, lodOffset = 0, loaderOptions, useSRGBBuffer){
        super(sceneOrEngine);
        /**
         * Observable triggered once the texture has been loaded.
         */ this.onLoadObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * Gets or sets the center of the bounding box associated with the cube texture.
         * It must define where the camera used to render the texture was set
         * @see https://doc.babylonjs.com/features/featuresDeepDive/materials/using/reflectionTexture#using-local-cubemap-mode
         */ this.boundingBoxPosition = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        this._rotationY = 0;
        /** @internal */ this._files = null;
        this._forcedExtension = null;
        this._extensions = null;
        this._textureMatrixRefraction = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"]();
        this._buffer = null;
        this.name = rootUrl;
        this.url = rootUrl;
        this._noMipmap = noMipmap;
        this.hasAlpha = false;
        this.isCube = true;
        this._textureMatrix = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].Identity();
        this.coordinatesMode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"].CUBIC_MODE;
        let extensions = null;
        let buffer = null;
        if (extensionsOrOptions !== null && !Array.isArray(extensionsOrOptions)) {
            extensions = extensionsOrOptions.extensions ?? null;
            this._noMipmap = extensionsOrOptions.noMipmap ?? false;
            files = extensionsOrOptions.files ?? null;
            buffer = extensionsOrOptions.buffer ?? null;
            this._format = extensionsOrOptions.format ?? 5;
            prefiltered = extensionsOrOptions.prefiltered ?? false;
            forcedExtension = extensionsOrOptions.forcedExtension ?? null;
            this._createPolynomials = extensionsOrOptions.createPolynomials ?? false;
            this._lodScale = extensionsOrOptions.lodScale ?? DefaultLodScale;
            this._lodOffset = extensionsOrOptions.lodOffset ?? 0;
            this._loaderOptions = extensionsOrOptions.loaderOptions;
            this._useSRGBBuffer = extensionsOrOptions.useSRGBBuffer;
            onLoad = extensionsOrOptions.onLoad ?? null;
            onError = extensionsOrOptions.onError ?? null;
        } else {
            this._noMipmap = noMipmap;
            this._format = format;
            this._createPolynomials = createPolynomials;
            extensions = extensionsOrOptions;
            this._loaderOptions = loaderOptions;
            this._useSRGBBuffer = useSRGBBuffer;
            this._lodScale = lodScale;
            this._lodOffset = lodOffset;
        }
        if (!rootUrl && !files) {
            return;
        }
        this.updateURL(rootUrl, forcedExtension, onLoad, prefiltered, onError, extensions, this.getScene()?.useDelayedTextureLoading, files, buffer);
    }
    /**
     * Get the current class name of the texture useful for serialization or dynamic coding.
     * @returns "CubeTexture"
     */ getClassName() {
        return "CubeTexture";
    }
    /**
     * Update the url (and optional buffer) of this texture if url was null during construction.
     * @param url the url of the texture
     * @param forcedExtension defines the extension to use
     * @param onLoad callback called when the texture is loaded  (defaults to null)
     * @param prefiltered Defines whether the updated texture is prefiltered or not
     * @param onError callback called if there was an error during the loading process (defaults to null)
     * @param extensions defines the suffixes add to the picture name in case six images are in use like _px.jpg...
     * @param delayLoad defines if the texture should be loaded now (false by default)
     * @param files defines the six files to load for the different faces in that order: px, py, pz, nx, ny, nz
     * @param buffer the buffer to use instead of loading from the url
     */ updateURL(url, forcedExtension = null, onLoad = null, prefiltered = false, onError = null, extensions = null, delayLoad = false, files = null, buffer = null) {
        if (!this.name || this.name.startsWith("data:")) {
            this.name = url;
        }
        this.url = url;
        if (forcedExtension) {
            this._forcedExtension = forcedExtension;
        }
        const lastDot = url.lastIndexOf(".");
        const extension = forcedExtension ? forcedExtension : lastDot > -1 ? url.substring(lastDot).toLowerCase() : "";
        const isDDS = extension.indexOf(".dds") === 0;
        const isEnv = extension.indexOf(".env") === 0;
        const isBasis = extension.indexOf(".basis") === 0;
        if (isEnv) {
            this.gammaSpace = false;
            this._prefiltered = false;
            this.anisotropicFilteringLevel = 1;
        } else {
            this._prefiltered = prefiltered;
            if (prefiltered) {
                this.gammaSpace = false;
                this.anisotropicFilteringLevel = 1;
            }
        }
        if (files) {
            this._files = files;
        } else {
            if (!isBasis && !isEnv && !isDDS && !extensions) {
                extensions = [
                    "_px.jpg",
                    "_py.jpg",
                    "_pz.jpg",
                    "_nx.jpg",
                    "_ny.jpg",
                    "_nz.jpg"
                ];
            }
            this._files = this._files || [];
            this._files.length = 0;
            if (extensions) {
                for(let index = 0; index < extensions.length; index++){
                    this._files.push(url + extensions[index]);
                }
                this._extensions = extensions;
            }
        }
        this._buffer = buffer;
        if (delayLoad) {
            this.delayLoadState = 4;
            this._delayedOnLoad = onLoad;
            this._delayedOnError = onError;
        } else {
            this._loadTexture(onLoad, onError);
        }
    }
    /**
     * Delays loading of the cube texture
     * @param forcedExtension defines the extension to use
     */ delayLoad(forcedExtension) {
        if (this.delayLoadState !== 4) {
            return;
        }
        if (forcedExtension) {
            this._forcedExtension = forcedExtension;
        }
        this.delayLoadState = 1;
        this._loadTexture(this._delayedOnLoad, this._delayedOnError);
    }
    /**
     * Returns the reflection texture matrix
     * @returns the reflection texture matrix
     */ getReflectionTextureMatrix() {
        return this._textureMatrix;
    }
    /**
     * Sets the reflection texture matrix
     * @param value Reflection texture matrix
     */ setReflectionTextureMatrix(value) {
        if (value.updateFlag === this._textureMatrix.updateFlag) {
            return;
        }
        if (value.isIdentity() !== this._textureMatrix.isIdentity()) {
            this.getScene()?.markAllMaterialsAsDirty(1, (mat)=>mat.getActiveTextures().indexOf(this) !== -1);
        }
        this._textureMatrix = value;
        if (!this.getScene()?.useRightHandedSystem) {
            return;
        }
        const scale = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0];
        const quat = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Quaternion[0];
        const trans = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[1];
        this._textureMatrix.decompose(scale, quat, trans);
        quat.z *= -1; // these two operations correspond to negating the x and y euler angles
        quat.w *= -1;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].ComposeToRef(scale, quat, trans, this._textureMatrixRefraction);
    }
    /**
     * Gets a suitable rotate/transform matrix when the texture is used for refraction.
     * There's a separate function from getReflectionTextureMatrix because refraction requires a special configuration of the matrix in right-handed mode.
     * @returns The refraction matrix
     */ getRefractionTextureMatrix() {
        return this.getScene()?.useRightHandedSystem ? this._textureMatrixRefraction : this._textureMatrix;
    }
    _loadTexture(onLoad = null, onError = null) {
        const scene = this.getScene();
        const oldTexture = this._texture;
        this._texture = this._getFromCache(this.url, this._noMipmap, undefined, undefined, this._useSRGBBuffer, this.isCube);
        const onLoadProcessing = ()=>{
            this.onLoadObservable.notifyObservers(this);
            if (oldTexture) {
                oldTexture.dispose();
                this.getScene()?.markAllMaterialsAsDirty(1);
            }
            if (onLoad) {
                onLoad();
            }
        };
        const errorHandler = (message, exception)=>{
            this._loadingError = true;
            this._errorObject = {
                message,
                exception
            };
            if (onError) {
                onError(message, exception);
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"].OnTextureLoadErrorObservable.notifyObservers(this);
        };
        if (!this._texture) {
            if (this._prefiltered) {
                this._texture = this._getEngine().createPrefilteredCubeTexture(this.url, scene, this._lodScale, this._lodOffset, onLoad, errorHandler, this._format, this._forcedExtension, this._createPolynomials);
            } else {
                this._texture = this._getEngine().createCubeTexture(this.url, scene, this._files, this._noMipmap, onLoad, errorHandler, this._format, this._forcedExtension, false, this._lodScale, this._lodOffset, null, this._loaderOptions, !!this._useSRGBBuffer, this._buffer);
            }
            this._texture?.onLoadedObservable.add(()=>this.onLoadObservable.notifyObservers(this));
        } else {
            if (this._texture.isReady) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tools"].SetImmediate(()=>onLoadProcessing());
            } else {
                this._texture.onLoadedObservable.add(()=>onLoadProcessing());
            }
        }
    }
    /**
     * Parses text to create a cube texture
     * @param parsedTexture define the serialized text to read from
     * @param scene defines the hosting scene
     * @param rootUrl defines the root url of the cube texture
     * @returns a cube texture
     */ static Parse(parsedTexture, scene, rootUrl) {
        const texture = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SerializationHelper"].Parse(()=>{
            let prefiltered = false;
            if (parsedTexture.prefiltered) {
                prefiltered = parsedTexture.prefiltered;
            }
            return new CubeTexture(rootUrl + (parsedTexture.url ?? parsedTexture.name), scene, parsedTexture.extensions, false, parsedTexture.files || null, null, null, undefined, prefiltered, parsedTexture.forcedExtension);
        }, parsedTexture, scene);
        // Local Cubemaps
        if (parsedTexture.boundingBoxPosition) {
            texture.boundingBoxPosition = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].FromArray(parsedTexture.boundingBoxPosition);
        }
        if (parsedTexture.boundingBoxSize) {
            texture.boundingBoxSize = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].FromArray(parsedTexture.boundingBoxSize);
        }
        // Animations
        if (parsedTexture.animations) {
            for(let animationIndex = 0; animationIndex < parsedTexture.animations.length; animationIndex++){
                const parsedAnimation = parsedTexture.animations[animationIndex];
                const internalClass = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GetClass"])("BABYLON.Animation");
                if (internalClass) {
                    texture.animations.push(internalClass.Parse(parsedAnimation));
                }
            }
        }
        return texture;
    }
    /**
     * Makes a clone, or deep copy, of the cube texture
     * @returns a new cube texture
     */ clone() {
        let uniqueId = 0;
        const newCubeTexture = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SerializationHelper"].Clone(()=>{
            const cubeTexture = new CubeTexture(this.url, this.getScene() || this._getEngine(), this._extensions, this._noMipmap, this._files);
            uniqueId = cubeTexture.uniqueId;
            return cubeTexture;
        }, this);
        newCubeTexture.uniqueId = uniqueId;
        return newCubeTexture;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], CubeTexture.prototype, "url", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeAsVector3"])()
], CubeTexture.prototype, "boundingBoxPosition", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeAsVector3"])()
], CubeTexture.prototype, "boundingBoxSize", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])("rotationY")
], CubeTexture.prototype, "rotationY", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])("files")
], CubeTexture.prototype, "_files", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])("forcedExtension")
], CubeTexture.prototype, "_forcedExtension", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])("extensions")
], CubeTexture.prototype, "_extensions", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeAsMatrix"])("textureMatrix")
], CubeTexture.prototype, "_textureMatrix", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeAsMatrix"])("textureMatrixRefraction")
], CubeTexture.prototype, "_textureMatrixRefraction", void 0);
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"]._CubeTextureParser = CubeTexture.Parse;
// Some exporters relies on Tools.Instantiate
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.CubeTexture", CubeTexture); //# sourceMappingURL=cubeTexture.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Loaders/ddsTextureLoader.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_DDSTextureLoader",
    ()=>_DDSTextureLoader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$sphericalPolynomial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/sphericalPolynomial.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$dds$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/dds.js [app-client] (ecmascript)");
;
;
class _DDSTextureLoader {
    constructor(){
        /**
         * Defines whether the loader supports cascade loading the different faces.
         */ this.supportCascades = true;
    }
    /**
     * Uploads the cube texture data to the WebGL texture. It has already been bound.
     * @param imgs contains the cube maps
     * @param texture defines the BabylonJS internal texture
     * @param createPolynomials will be true if polynomials have been requested
     * @param onLoad defines the callback to trigger once the texture is ready
     */ loadCubeData(imgs, texture, createPolynomials, onLoad) {
        const engine = texture.getEngine();
        let info;
        let loadMipmap = false;
        let maxLevel = 1000;
        if (Array.isArray(imgs)) {
            for(let index = 0; index < imgs.length; index++){
                const data = imgs[index];
                info = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$dds$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DDSTools"].GetDDSInfo(data);
                texture.width = info.width;
                texture.height = info.height;
                loadMipmap = (info.isRGB || info.isLuminance || info.mipmapCount > 1) && texture.generateMipMaps;
                engine._unpackFlipY(info.isCompressed);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$dds$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DDSTools"].UploadDDSLevels(engine, texture, data, info, loadMipmap, 6, -1, index);
                if (!info.isFourCC && info.mipmapCount === 1) {
                    engine.generateMipMapsForCubemap(texture);
                } else {
                    maxLevel = info.mipmapCount - 1;
                }
            }
        } else {
            const data = imgs;
            info = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$dds$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DDSTools"].GetDDSInfo(data);
            texture.width = info.width;
            texture.height = info.height;
            if (createPolynomials) {
                info.sphericalPolynomial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$sphericalPolynomial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SphericalPolynomial"]();
            }
            loadMipmap = (info.isRGB || info.isLuminance || info.mipmapCount > 1) && texture.generateMipMaps;
            engine._unpackFlipY(info.isCompressed);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$dds$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DDSTools"].UploadDDSLevels(engine, texture, data, info, loadMipmap, 6);
            if (!info.isFourCC && info.mipmapCount === 1) {
                // Do not unbind as we still need to set the parameters.
                engine.generateMipMapsForCubemap(texture, false);
            } else {
                maxLevel = info.mipmapCount - 1;
            }
        }
        engine._setCubeMapTextureParams(texture, loadMipmap, maxLevel);
        texture.isReady = true;
        texture.onLoadedObservable.notifyObservers(texture);
        texture.onLoadedObservable.clear();
        if (onLoad) {
            onLoad({
                isDDS: true,
                width: texture.width,
                info,
                data: imgs,
                texture
            });
        }
    }
    /**
     * Uploads the 2D texture data to the WebGL texture. It has already been bound once in the callback.
     * @param data contains the texture data
     * @param texture defines the BabylonJS internal texture
     * @param callback defines the method to call once ready to upload
     */ loadData(data, texture, callback) {
        const info = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$dds$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DDSTools"].GetDDSInfo(data);
        const loadMipmap = (info.isRGB || info.isLuminance || info.mipmapCount > 1) && texture.generateMipMaps && Math.max(info.width, info.height) >> info.mipmapCount - 1 === 1;
        callback(info.width, info.height, loadMipmap, info.isFourCC, ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$dds$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DDSTools"].UploadDDSLevels(texture.getEngine(), texture, data, info, loadMipmap, 1);
        });
    }
} //# sourceMappingURL=ddsTextureLoader.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Loaders/envTextureLoader.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_ENVTextureLoader",
    ()=>_ENVTextureLoader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$environmentTextureTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/environmentTextureTools.js [app-client] (ecmascript)");
;
class _ENVTextureLoader {
    constructor(){
        /**
         * Defines whether the loader supports cascade loading the different faces.
         */ this.supportCascades = false;
    }
    /**
     * Uploads the cube texture data to the WebGL texture. It has already been bound.
     * @param data contains the texture data
     * @param texture defines the BabylonJS internal texture
     * @param createPolynomials will be true if polynomials have been requested
     * @param onLoad defines the callback to trigger once the texture is ready
     * @param onError defines the callback to trigger in case of error
     */ loadCubeData(data, texture, createPolynomials, onLoad, onError) {
        if (Array.isArray(data)) {
            return;
        }
        const info = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$environmentTextureTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GetEnvInfo"])(data);
        if (info) {
            texture.width = info.width;
            texture.height = info.width;
            try {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$environmentTextureTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UploadEnvSpherical"])(texture, info);
                // eslint-disable-next-line github/no-then
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$environmentTextureTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UploadEnvLevelsAsync"])(texture, data, info).then(()=>{
                    texture.isReady = true;
                    texture.onLoadedObservable.notifyObservers(texture);
                    texture.onLoadedObservable.clear();
                    if (onLoad) {
                        onLoad();
                    }
                }, (reason)=>{
                    onError?.("Can not upload environment levels", reason);
                });
            } catch (e) {
                onError?.("Can not upload environment file", e);
            }
        } else if (onError) {
            onError("Can not parse the environment file", null);
        }
    }
    /**
     * Uploads the 2D texture data to the WebGL texture. It has already been bound once in the callback.
     */ loadData() {
        // eslint-disable-next-line no-throw-literal
        throw ".env not supported in 2d.";
    }
} //# sourceMappingURL=envTextureLoader.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/ktx2decoderTypes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EngineFormat",
    ()=>EngineFormat,
    "SourceTextureFormat",
    ()=>SourceTextureFormat,
    "TranscodeTarget",
    ()=>TranscodeTarget
]);
var SourceTextureFormat;
(function(SourceTextureFormat) {
    SourceTextureFormat[SourceTextureFormat["ETC1S"] = 0] = "ETC1S";
    // eslint-disable-next-line @typescript-eslint/naming-convention
    SourceTextureFormat[SourceTextureFormat["UASTC4x4"] = 1] = "UASTC4x4";
})(SourceTextureFormat || (SourceTextureFormat = {}));
var TranscodeTarget;
(function(TranscodeTarget) {
    TranscodeTarget[TranscodeTarget["ASTC_4X4_RGBA"] = 0] = "ASTC_4X4_RGBA";
    // eslint-disable-next-line @typescript-eslint/naming-convention
    TranscodeTarget[TranscodeTarget["ASTC_4x4_RGBA"] = 0] = "ASTC_4x4_RGBA";
    TranscodeTarget[TranscodeTarget["BC7_RGBA"] = 1] = "BC7_RGBA";
    TranscodeTarget[TranscodeTarget["BC3_RGBA"] = 2] = "BC3_RGBA";
    TranscodeTarget[TranscodeTarget["BC1_RGB"] = 3] = "BC1_RGB";
    TranscodeTarget[TranscodeTarget["PVRTC1_4_RGBA"] = 4] = "PVRTC1_4_RGBA";
    TranscodeTarget[TranscodeTarget["PVRTC1_4_RGB"] = 5] = "PVRTC1_4_RGB";
    TranscodeTarget[TranscodeTarget["ETC2_RGBA"] = 6] = "ETC2_RGBA";
    TranscodeTarget[TranscodeTarget["ETC1_RGB"] = 7] = "ETC1_RGB";
    TranscodeTarget[TranscodeTarget["RGBA32"] = 8] = "RGBA32";
    TranscodeTarget[TranscodeTarget["R8"] = 9] = "R8";
    TranscodeTarget[TranscodeTarget["RG8"] = 10] = "RG8";
})(TranscodeTarget || (TranscodeTarget = {}));
var EngineFormat;
(function(EngineFormat) {
    EngineFormat[EngineFormat["COMPRESSED_RGBA_BPTC_UNORM_EXT"] = 36492] = "COMPRESSED_RGBA_BPTC_UNORM_EXT";
    EngineFormat[EngineFormat["COMPRESSED_RGBA_ASTC_4X4_KHR"] = 37808] = "COMPRESSED_RGBA_ASTC_4X4_KHR";
    EngineFormat[EngineFormat["COMPRESSED_RGB_S3TC_DXT1_EXT"] = 33776] = "COMPRESSED_RGB_S3TC_DXT1_EXT";
    EngineFormat[EngineFormat["COMPRESSED_RGBA_S3TC_DXT5_EXT"] = 33779] = "COMPRESSED_RGBA_S3TC_DXT5_EXT";
    EngineFormat[EngineFormat["COMPRESSED_RGBA_PVRTC_4BPPV1_IMG"] = 35842] = "COMPRESSED_RGBA_PVRTC_4BPPV1_IMG";
    EngineFormat[EngineFormat["COMPRESSED_RGB_PVRTC_4BPPV1_IMG"] = 35840] = "COMPRESSED_RGB_PVRTC_4BPPV1_IMG";
    EngineFormat[EngineFormat["COMPRESSED_RGBA8_ETC2_EAC"] = 37496] = "COMPRESSED_RGBA8_ETC2_EAC";
    EngineFormat[EngineFormat["COMPRESSED_RGB8_ETC2"] = 37492] = "COMPRESSED_RGB8_ETC2";
    EngineFormat[EngineFormat["COMPRESSED_RGB_ETC1_WEBGL"] = 36196] = "COMPRESSED_RGB_ETC1_WEBGL";
    EngineFormat[EngineFormat["RGBA8Format"] = 32856] = "RGBA8Format";
    EngineFormat[EngineFormat["R8Format"] = 33321] = "R8Format";
    // eslint-disable-next-line @typescript-eslint/naming-convention
    EngineFormat[EngineFormat["RG8Format"] = 33323] = "RG8Format";
})(EngineFormat || (EngineFormat = {})); //# sourceMappingURL=ktx2decoderTypes.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Loaders/ktxTextureLoader.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_KTXTextureLoader",
    ()=>_KTXTextureLoader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$khronosTextureContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/khronosTextureContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$khronosTextureContainer2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/khronosTextureContainer2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-client] (ecmascript)");
;
;
;
function MapSRGBToLinear(format) {
    switch(format){
        case 35916:
            return 33776;
        case 35918:
            return 33778;
        case 35919:
            return 33779;
        case 37493:
            return 37492;
        case 37497:
            return 37496;
        case 37495:
            return 37494;
        case 37840:
            return 37808;
        case 36493:
            return 36492;
    }
    return null;
}
class _KTXTextureLoader {
    constructor(){
        /**
         * Defines whether the loader supports cascade loading the different faces.
         */ this.supportCascades = false;
    }
    /**
     * Uploads the cube texture data to the WebGL texture. It has already been bound.
     * @param data contains the texture data
     * @param texture defines the BabylonJS internal texture
     * @param createPolynomials will be true if polynomials have been requested
     * @param onLoad defines the callback to trigger once the texture is ready
     */ loadCubeData(data, texture, createPolynomials, onLoad) {
        if (Array.isArray(data)) {
            return;
        }
        // Need to invert vScale as invertY via UNPACK_FLIP_Y_WEBGL is not supported by compressed texture
        texture._invertVScale = !texture.invertY;
        const engine = texture.getEngine();
        const ktx = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$khronosTextureContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KhronosTextureContainer"](data, 6);
        const loadMipmap = ktx.numberOfMipmapLevels > 1 && texture.generateMipMaps;
        engine._unpackFlipY(true);
        ktx.uploadLevels(texture, texture.generateMipMaps);
        texture.width = ktx.pixelWidth;
        texture.height = ktx.pixelHeight;
        engine._setCubeMapTextureParams(texture, loadMipmap, ktx.numberOfMipmapLevels - 1);
        texture.isReady = true;
        texture.onLoadedObservable.notifyObservers(texture);
        texture.onLoadedObservable.clear();
        if (onLoad) {
            onLoad();
        }
    }
    /**
     * Uploads the 2D texture data to the WebGL texture. It has already been bound once in the callback.
     * @param data contains the texture data
     * @param texture defines the BabylonJS internal texture
     * @param callback defines the method to call once ready to upload
     * @param options
     */ loadData(data, texture, callback, options) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$khronosTextureContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KhronosTextureContainer"].IsValid(data)) {
            // Need to invert vScale as invertY via UNPACK_FLIP_Y_WEBGL is not supported by compressed texture
            texture._invertVScale = !texture.invertY;
            const ktx = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$khronosTextureContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KhronosTextureContainer"](data, 1);
            const mappedFormat = MapSRGBToLinear(ktx.glInternalFormat);
            if (mappedFormat) {
                texture.format = mappedFormat;
                texture._useSRGBBuffer = texture.getEngine()._getUseSRGBBuffer(true, texture.generateMipMaps);
                texture._gammaSpace = true;
            } else {
                texture.format = ktx.glInternalFormat;
            }
            callback(ktx.pixelWidth, ktx.pixelHeight, texture.generateMipMaps, true, ()=>{
                ktx.uploadLevels(texture, texture.generateMipMaps);
            }, ktx.isInvalid);
        } else if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$khronosTextureContainer2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KhronosTextureContainer2"].IsValid(data)) {
            const ktx2 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$khronosTextureContainer2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KhronosTextureContainer2"](texture.getEngine());
            // eslint-disable-next-line github/no-then
            ktx2._uploadAsync(data, texture, options).then(()=>{
                callback(texture.width, texture.height, texture.generateMipMaps, true, ()=>{}, false);
            }, (error)=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Warn(`Failed to load KTX2 texture data: ${error.message}`);
                callback(0, 0, false, false, ()=>{}, true);
            });
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Error("texture missing KTX identifier");
            callback(0, 0, false, false, ()=>{}, true);
        }
    }
} //# sourceMappingURL=ktxTextureLoader.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Procedurals/proceduralTextureSceneComponent.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProceduralTextureSceneComponent",
    ()=>ProceduralTextureSceneComponent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/tools.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$sceneComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/sceneComponent.js [app-client] (ecmascript)");
;
;
class ProceduralTextureSceneComponent {
    /**
     * Creates a new instance of the component for the given scene
     * @param scene Defines the scene to register the component in
     */ constructor(scene){
        /**
         * The component name helpful to identify the component in the list of scene components.
         */ this.name = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$sceneComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SceneComponentConstants"].NAME_PROCEDURALTEXTURE;
        this.scene = scene;
    }
    /**
     * Registers the component in a given scene
     */ register() {
        this.scene._beforeClearStage.registerStep(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$sceneComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SceneComponentConstants"].STEP_BEFORECLEAR_PROCEDURALTEXTURE, this, this._beforeClear);
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
    _beforeClear() {
        if (this.scene.proceduralTexturesEnabled) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tools"].StartPerformanceCounter("Procedural textures", this.scene.proceduralTextures.length > 0);
            for(let proceduralIndex = 0; proceduralIndex < this.scene.proceduralTextures.length; proceduralIndex++){
                const proceduralTexture = this.scene.proceduralTextures[proceduralIndex];
                if (proceduralTexture._shouldRender()) {
                    proceduralTexture.render();
                }
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tools"].EndPerformanceCounter("Procedural textures", this.scene.proceduralTextures.length > 0);
        }
    }
} //# sourceMappingURL=proceduralTextureSceneComponent.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Procedurals/proceduralTexture.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProceduralTexture",
    ()=>ProceduralTexture
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/decorators.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Buffers/buffer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$sceneComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/sceneComponent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$material$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/material.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/texture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$renderTargetTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/renderTargetTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Procedurals$2f$proceduralTextureSceneComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Procedurals/proceduralTextureSceneComponent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/engineStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$drawWrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/drawWrapper.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
class ProceduralTexture extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"] {
    /**
     * Gets the shader language type used to generate vertex and fragment source code.
     */ get shaderLanguage() {
        return this._shaderLanguage;
    }
    /**
     * Instantiates a new procedural texture.
     * Procedural texturing is a way to programmatically create a texture. There are 2 types of procedural textures: code-only, and code that references some classic 2D images, sometimes called 'refMaps' or 'sampler' images.
     * This is the base class of any Procedural texture and contains most of the shareable code.
     * @see https://doc.babylonjs.com/features/featuresDeepDive/materials/using/proceduralTextures
     * @param name  Define the name of the texture
     * @param size Define the size of the texture to create
     * @param fragment Define the fragment shader to use to generate the texture or null if it is defined later:
     *  * object: \{ fragmentElement: "fragmentShaderCode" \}, used with shader code in script tags
     *  * object: \{ fragmentSource: "fragment shader code string" \}, the string contains the shader code
     *  * string: the string contains a name "XXX" to lookup in Effect.ShadersStore["XXXFragmentShader"]
     * @param scene Define the scene the texture belongs to
     * @param fallbackTexture Define a fallback texture in case there were issues to create the custom texture
     * @param generateMipMaps Define if the texture should creates mip maps or not
     * @param isCube Define if the texture is a cube texture or not (this will render each faces of the cube)
     * @param textureType The FBO internal texture type
     */ constructor(name, size, fragment, scene, fallbackTexture = null, generateMipMaps = true, isCube = false, textureType = 0){
        super(null, scene, !generateMipMaps);
        /**
         * Define if the texture is enabled or not (disabled texture will not render)
         */ this.isEnabled = true;
        /**
         * Define if the texture must be cleared before rendering (default is true)
         */ this.autoClear = true;
        /**
         * Event raised when the texture is generated
         */ this.onGeneratedObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * Event raised before the texture is generated
         */ this.onBeforeGenerationObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * Gets or sets the node material used to create this texture (null if the texture was manually created)
         */ this.nodeMaterialSource = null;
        /**
         * Define the list of custom preprocessor defines used in the shader
         */ this.defines = "";
        /** @internal */ this._textures = {};
        this._currentRefreshId = -1;
        this._frameId = -1;
        this._refreshRate = 1;
        this._vertexBuffers = {};
        this._uniforms = new Array();
        this._samplers = new Array();
        this._floats = {};
        this._ints = {};
        this._floatsArrays = {};
        this._colors3 = {};
        this._colors4 = {};
        this._vectors2 = {};
        this._vectors3 = {};
        this._vectors4 = {};
        this._matrices = {};
        this._fallbackTextureUsed = false;
        this._cachedDefines = null;
        this._contentUpdateId = -1;
        this._rtWrapper = null;
        if (fallbackTexture !== null && !(fallbackTexture instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"])) {
            this._options = fallbackTexture;
            this._fallbackTexture = fallbackTexture.fallbackTexture ?? null;
        } else {
            this._options = {};
            this._fallbackTexture = fallbackTexture;
        }
        this._shaderLanguage = this._options.shaderLanguage ?? 0 /* ShaderLanguage.GLSL */ ;
        scene = this.getScene() || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EngineStore"].LastCreatedScene;
        let component = scene._getComponent(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$sceneComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SceneComponentConstants"].NAME_PROCEDURALTEXTURE);
        if (!component) {
            component = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Procedurals$2f$proceduralTextureSceneComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProceduralTextureSceneComponent"](scene);
            scene._addComponent(component);
        }
        scene.proceduralTextures.push(this);
        this._fullEngine = scene.getEngine();
        this.name = name;
        this.isRenderTarget = true;
        this._size = size;
        this._textureType = textureType;
        this._generateMipMaps = generateMipMaps;
        this._drawWrapper = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$drawWrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DrawWrapper"](this._fullEngine);
        this.setFragment(fragment);
        const rtWrapper = this._createRtWrapper(isCube, size, generateMipMaps, textureType);
        this._texture = rtWrapper.texture;
        // VBO
        const vertices = [];
        vertices.push(1, 1);
        vertices.push(-1, 1);
        vertices.push(-1, -1);
        vertices.push(1, -1);
        this._vertexBuffers[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VertexBuffer"].PositionKind] = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VertexBuffer"](this._fullEngine, vertices, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VertexBuffer"].PositionKind, false, false, 2);
        this._createIndexBuffer();
    }
    _createRtWrapper(isCube, size, generateMipMaps, textureType) {
        if (isCube) {
            this._rtWrapper = this._fullEngine.createRenderTargetCubeTexture(size, {
                generateMipMaps: generateMipMaps,
                generateDepthBuffer: false,
                generateStencilBuffer: false,
                type: textureType,
                ...this._options
            });
            this.setFloat("face", 0);
        } else {
            this._rtWrapper = this._fullEngine.createRenderTargetTexture(size, {
                generateMipMaps: generateMipMaps,
                generateDepthBuffer: false,
                generateStencilBuffer: false,
                type: textureType,
                ...this._options
            });
            if (this._rtWrapper.is3D) {
                this.setFloat("layer", 0);
                this.setInt("layerNum", 0);
            }
        }
        return this._rtWrapper;
    }
    /**
     * The effect that is created when initializing the post process.
     * @returns The created effect corresponding the postprocess.
     */ getEffect() {
        return this._drawWrapper.effect;
    }
    /**
     * @internal
     */ _setEffect(effect) {
        this._drawWrapper.effect = effect;
    }
    /**
     * Gets texture content (Use this function wisely as reading from a texture can be slow)
     * @returns an ArrayBufferView promise (Uint8Array or Float32Array)
     */ getContent() {
        if (this._contentData && this._frameId === this._contentUpdateId) {
            return this._contentData;
        }
        if (this._contentData) {
            // eslint-disable-next-line @typescript-eslint/no-floating-promises, github/no-then
            this._contentData.then((buffer)=>{
                this._contentData = this.readPixels(0, 0, buffer);
                this._contentUpdateId = this._frameId;
            });
        } else {
            this._contentData = this.readPixels(0, 0);
            this._contentUpdateId = this._frameId;
        }
        return this._contentData;
    }
    _createIndexBuffer() {
        const engine = this._fullEngine;
        // Indices
        const indices = [];
        indices.push(0);
        indices.push(1);
        indices.push(2);
        indices.push(0);
        indices.push(2);
        indices.push(3);
        this._indexBuffer = engine.createIndexBuffer(indices);
    }
    /** @internal */ _rebuild() {
        const vb = this._vertexBuffers[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VertexBuffer"].PositionKind];
        if (vb) {
            vb._rebuild();
        }
        this._createIndexBuffer();
        if (this.refreshRate === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$renderTargetTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RenderTargetTexture"].REFRESHRATE_RENDER_ONCE) {
            this.refreshRate = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$renderTargetTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RenderTargetTexture"].REFRESHRATE_RENDER_ONCE;
        }
    }
    /**
     * Resets the texture in order to recreate its associated resources.
     * This can be called in case of context loss or if you change the shader code and need to regenerate the texture with the new code
     */ reset() {
        this._drawWrapper.effect?.dispose();
        this._drawWrapper.effect = null;
        this._cachedDefines = null;
    }
    _getDefines() {
        return this.defines;
    }
    /**
     * Executes a function when the texture will be ready to be drawn.
     * @param func The callback to be used.
     */ executeWhenReady(func) {
        if (this.isReady()) {
            func(this);
            return;
        }
        const effect = this.getEffect();
        if (effect) {
            effect.executeWhenCompiled(()=>{
                func(this);
            });
        }
    }
    /**
     * Is the texture ready to be used ? (rendered at least once)
     * @returns true if ready, otherwise, false.
     */ isReady() {
        const engine = this._fullEngine;
        if (this.nodeMaterialSource) {
            return this._drawWrapper.effect.isReady();
        }
        if (!this._fragment) {
            return false;
        }
        if (this._fallbackTextureUsed) {
            return true;
        }
        if (!this._texture) {
            return false;
        }
        const defines = this._getDefines();
        if (this._drawWrapper.effect && defines === this._cachedDefines && this._drawWrapper.effect.isReady()) {
            return true;
        }
        const shaders = {
            vertex: "procedural",
            fragmentElement: this._fragment.fragmentElement,
            fragmentSource: this._fragment.fragmentSource,
            fragment: typeof this._fragment === "string" ? this._fragment : undefined
        };
        if (this._cachedDefines !== defines) {
            this._cachedDefines = defines;
            this._drawWrapper.effect = engine.createEffect(shaders, [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VertexBuffer"].PositionKind
            ], this._uniforms, this._samplers, defines, undefined, undefined, ()=>{
                this._rtWrapper?.dispose();
                this._rtWrapper = this._texture = null;
                if (this._fallbackTexture) {
                    this._texture = this._fallbackTexture._texture;
                    if (this._texture) {
                        this._texture.incrementReferences();
                    }
                }
                this._fallbackTextureUsed = true;
            }, undefined, this._shaderLanguage, async ()=>{
                if (this._options.extraInitializationsAsync) {
                    if (this.shaderLanguage === 1 /* ShaderLanguage.WGSL */ ) {
                        await Promise.all([
                            __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/procedural.vertex.js [app-client] (ecmascript, async loader)"),
                            this._options.extraInitializationsAsync()
                        ]);
                    } else {
                        await Promise.all([
                            __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/procedural.vertex.js [app-client] (ecmascript, async loader)"),
                            this._options.extraInitializationsAsync()
                        ]);
                    }
                } else {
                    if (this.shaderLanguage === 1 /* ShaderLanguage.WGSL */ ) {
                        await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/procedural.vertex.js [app-client] (ecmascript, async loader)");
                    } else {
                        await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/procedural.vertex.js [app-client] (ecmascript, async loader)");
                    }
                }
            });
        }
        return this._drawWrapper.effect.isReady();
    }
    /**
     * Resets the refresh counter of the texture and start bak from scratch.
     * Could be useful to regenerate the texture if it is setup to render only once.
     */ resetRefreshCounter() {
        this._currentRefreshId = -1;
    }
    /**
     * Set the fragment shader to use in order to render the texture.
     * @param fragment This can be set to a path (into the shader store) or to a json object containing a fragmentElement property.
     */ setFragment(fragment) {
        this._fragment = fragment;
    }
    /**
     * Define the refresh rate of the texture or the rendering frequency.
     * Use 0 to render just once, 1 to render on every frame, 2 to render every two frames and so on...
     */ get refreshRate() {
        return this._refreshRate;
    }
    set refreshRate(value) {
        this._refreshRate = value;
        this.resetRefreshCounter();
    }
    /** @internal */ _shouldRender() {
        if (!this.isEnabled || !this.isReady() || !this._texture) {
            if (this._texture) {
                this._texture.isReady = false;
            }
            return false;
        }
        if (this._fallbackTextureUsed) {
            return false;
        }
        if (this._currentRefreshId === -1) {
            // At least render once
            this._currentRefreshId = 1;
            this._frameId++;
            return true;
        }
        if (this.refreshRate === this._currentRefreshId) {
            this._currentRefreshId = 1;
            this._frameId++;
            return true;
        }
        this._currentRefreshId++;
        return false;
    }
    /**
     * Get the size the texture is rendering at.
     * @returns the size (on cube texture it is always squared)
     */ getRenderSize() {
        return this._size;
    }
    /**
     * Resize the texture to new value.
     * @param size Define the new size the texture should have
     * @param generateMipMaps Define whether the new texture should create mip maps
     */ resize(size, generateMipMaps) {
        if (this._fallbackTextureUsed || !this._rtWrapper || !this._texture) {
            return;
        }
        const isCube = this._texture.isCube;
        this._rtWrapper.dispose();
        const rtWrapper = this._createRtWrapper(isCube, size, generateMipMaps, this._textureType);
        this._texture = rtWrapper.texture;
        // Update properties
        this._size = size;
        this._generateMipMaps = generateMipMaps;
    }
    _checkUniform(uniformName) {
        if (this._uniforms.indexOf(uniformName) === -1) {
            this._uniforms.push(uniformName);
        }
    }
    /**
     * Set a texture in the shader program used to render.
     * @param name Define the name of the uniform samplers as defined in the shader
     * @param texture Define the texture to bind to this sampler
     * @returns the texture itself allowing "fluent" like uniform updates
     */ setTexture(name, texture) {
        if (this._samplers.indexOf(name) === -1) {
            this._samplers.push(name);
        }
        this._textures[name] = texture;
        return this;
    }
    /**
     * Set a float in the shader.
     * @param name Define the name of the uniform as defined in the shader
     * @param value Define the value to give to the uniform
     * @returns the texture itself allowing "fluent" like uniform updates
     */ setFloat(name, value) {
        this._checkUniform(name);
        this._floats[name] = value;
        return this;
    }
    /**
     * Set a int in the shader.
     * @param name Define the name of the uniform as defined in the shader
     * @param value Define the value to give to the uniform
     * @returns the texture itself allowing "fluent" like uniform updates
     */ setInt(name, value) {
        this._checkUniform(name);
        this._ints[name] = value;
        return this;
    }
    /**
     * Set an array of floats in the shader.
     * @param name Define the name of the uniform as defined in the shader
     * @param value Define the value to give to the uniform
     * @returns the texture itself allowing "fluent" like uniform updates
     */ setFloats(name, value) {
        this._checkUniform(name);
        this._floatsArrays[name] = value;
        return this;
    }
    /**
     * Set a vec3 in the shader from a Color3.
     * @param name Define the name of the uniform as defined in the shader
     * @param value Define the value to give to the uniform
     * @returns the texture itself allowing "fluent" like uniform updates
     */ setColor3(name, value) {
        this._checkUniform(name);
        this._colors3[name] = value;
        return this;
    }
    /**
     * Set a vec4 in the shader from a Color4.
     * @param name Define the name of the uniform as defined in the shader
     * @param value Define the value to give to the uniform
     * @returns the texture itself allowing "fluent" like uniform updates
     */ setColor4(name, value) {
        this._checkUniform(name);
        this._colors4[name] = value;
        return this;
    }
    /**
     * Set a vec2 in the shader from a Vector2.
     * @param name Define the name of the uniform as defined in the shader
     * @param value Define the value to give to the uniform
     * @returns the texture itself allowing "fluent" like uniform updates
     */ setVector2(name, value) {
        this._checkUniform(name);
        this._vectors2[name] = value;
        return this;
    }
    /**
     * Set a vec3 in the shader from a Vector3.
     * @param name Define the name of the uniform as defined in the shader
     * @param value Define the value to give to the uniform
     * @returns the texture itself allowing "fluent" like uniform updates
     */ setVector3(name, value) {
        this._checkUniform(name);
        this._vectors3[name] = value;
        return this;
    }
    /**
     * Set a vec4 in the shader from a Vector4.
     * @param name Define the name of the uniform as defined in the shader
     * @param value Define the value to give to the uniform
     * @returns the texture itself allowing "fluent" like uniform updates
     */ setVector4(name, value) {
        this._checkUniform(name);
        this._vectors4[name] = value;
        return this;
    }
    /**
     * Set a mat4 in the shader from a MAtrix.
     * @param name Define the name of the uniform as defined in the shader
     * @param value Define the value to give to the uniform
     * @returns the texture itself allowing "fluent" like uniform updates
     */ setMatrix(name, value) {
        this._checkUniform(name);
        this._matrices[name] = value;
        return this;
    }
    /**
     * Render the texture to its associated render target.
     * @param useCameraPostProcess Define if camera post process should be applied to the texture
     */ // eslint-disable-next-line @typescript-eslint/no-unused-vars
    render(useCameraPostProcess) {
        const scene = this.getScene();
        if (!scene) {
            return;
        }
        const engine = this._fullEngine;
        // Render
        engine.enableEffect(this._drawWrapper);
        this.onBeforeGenerationObservable.notifyObservers(this);
        engine.setState(false);
        if (!this.nodeMaterialSource) {
            // Texture
            for(const name in this._textures){
                this._drawWrapper.effect.setTexture(name, this._textures[name]);
            }
            // Float
            for(const name in this._ints){
                this._drawWrapper.effect.setInt(name, this._ints[name]);
            }
            // Float
            for(const name in this._floats){
                this._drawWrapper.effect.setFloat(name, this._floats[name]);
            }
            // Floats
            for(const name in this._floatsArrays){
                this._drawWrapper.effect.setArray(name, this._floatsArrays[name]);
            }
            // Color3
            for(const name in this._colors3){
                this._drawWrapper.effect.setColor3(name, this._colors3[name]);
            }
            // Color4
            for(const name in this._colors4){
                const color = this._colors4[name];
                this._drawWrapper.effect.setFloat4(name, color.r, color.g, color.b, color.a);
            }
            // Vector2
            for(const name in this._vectors2){
                this._drawWrapper.effect.setVector2(name, this._vectors2[name]);
            }
            // Vector3
            for(const name in this._vectors3){
                this._drawWrapper.effect.setVector3(name, this._vectors3[name]);
            }
            // Vector4
            for(const name in this._vectors4){
                this._drawWrapper.effect.setVector4(name, this._vectors4[name]);
            }
            // Matrix
            for(const name in this._matrices){
                this._drawWrapper.effect.setMatrix(name, this._matrices[name]);
            }
        }
        if (!this._texture || !this._rtWrapper) {
            return;
        }
        engine._debugPushGroup?.(`procedural texture generation for ${this.name}`, 1);
        const viewPort = engine.currentViewport;
        if (this.isCube) {
            for(let face = 0; face < 6; face++){
                engine.bindFramebuffer(this._rtWrapper, face, undefined, undefined, true);
                // VBOs
                engine.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect);
                this._drawWrapper.effect.setFloat("face", face);
                // Clear
                if (this.autoClear) {
                    engine.clear(scene.clearColor, true, false, false);
                }
                // Draw order
                engine.drawElementsType(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$material$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Material"].TriangleFillMode, 0, 6);
                // Unbind and restore viewport
                engine.unBindFramebuffer(this._rtWrapper, true);
            }
        } else {
            let numLayers = 1;
            if (this._rtWrapper.is3D) {
                numLayers = this._rtWrapper.depth;
            } else if (this._rtWrapper.is2DArray) {
                numLayers = this._rtWrapper.layers;
            }
            for(let layer = 0; layer < numLayers; layer++){
                engine.bindFramebuffer(this._rtWrapper, 0, undefined, undefined, true, 0, layer);
                // VBOs
                engine.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect);
                if (this._rtWrapper.is3D || this._rtWrapper.is2DArray) {
                    this._drawWrapper.effect?.setFloat("layer", numLayers !== 1 ? layer / (numLayers - 1) : 0);
                    this._drawWrapper.effect?.setInt("layerNum", layer);
                    for(const name in this._textures){
                        this._drawWrapper.effect.setTexture(name, this._textures[name]);
                    }
                }
                // Clear
                if (this.autoClear) {
                    engine.clear(scene.clearColor, true, false, false);
                }
                // Draw order
                engine.drawElementsType(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$material$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Material"].TriangleFillMode, 0, 6);
                // Unbind and restore viewport
                engine.unBindFramebuffer(this._rtWrapper, !this._generateMipMaps);
            }
        }
        if (viewPort) {
            engine.setViewport(viewPort);
        }
        // Mipmaps
        if (this.isCube) {
            engine.generateMipMapsForCubemap(this._texture, true);
        }
        engine._debugPopGroup?.(1);
        if (this.onGenerated) {
            this.onGenerated();
        }
        this.onGeneratedObservable.notifyObservers(this);
    }
    /**
     * Clone the texture.
     * @returns the cloned texture
     */ clone() {
        const textureSize = this.getSize();
        const newTexture = new ProceduralTexture(this.name, textureSize.width, this._fragment, this.getScene(), this._fallbackTexture, this._generateMipMaps);
        // Base texture
        newTexture.hasAlpha = this.hasAlpha;
        newTexture.level = this.level;
        // RenderTarget Texture
        newTexture.coordinatesMode = this.coordinatesMode;
        return newTexture;
    }
    /**
     * Dispose the texture and release its associated resources.
     */ dispose() {
        const scene = this.getScene();
        if (!scene) {
            return;
        }
        const index = scene.proceduralTextures.indexOf(this);
        if (index >= 0) {
            scene.proceduralTextures.splice(index, 1);
        }
        const vertexBuffer = this._vertexBuffers[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VertexBuffer"].PositionKind];
        if (vertexBuffer) {
            vertexBuffer.dispose();
            this._vertexBuffers[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VertexBuffer"].PositionKind] = null;
        }
        if (this._indexBuffer && this._fullEngine._releaseBuffer(this._indexBuffer)) {
            this._indexBuffer = null;
        }
        this.onGeneratedObservable.clear();
        this.onBeforeGenerationObservable.clear();
        super.dispose();
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], ProceduralTexture.prototype, "isEnabled", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], ProceduralTexture.prototype, "autoClear", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], ProceduralTexture.prototype, "_generateMipMaps", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], ProceduralTexture.prototype, "_size", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], ProceduralTexture.prototype, "refreshRate", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.ProceduralTexture", ProceduralTexture); //# sourceMappingURL=proceduralTexture.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/videoTexture.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VideoTexture",
    ()=>VideoTexture
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/tools.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/texture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Extensions$2f$engine$2e$videoTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Extensions/engine.videoTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Extensions$2f$engine$2e$dynamicTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Extensions/engine.dynamicTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/decorators.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
function RemoveSource(video) {
    // Remove any <source> elements, etc.
    while(video.firstChild){
        video.removeChild(video.firstChild);
    }
    // detach srcObject
    video.srcObject = null;
    // Set a blank src (https://html.spec.whatwg.org/multipage/media.html#best-practices-for-authors-using-media-elements)
    video.src = "";
    // Prevent non-important errors maybe (https://twitter.com/beraliv/status/1205214277956775936)
    video.removeAttribute("src");
}
class VideoTexture extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"] {
    /**
     * Event triggered when a dom action is required by the user to play the video.
     * This happens due to recent changes in browser policies preventing video to auto start.
     */ get onUserActionRequestedObservable() {
        if (!this._onUserActionRequestedObservable) {
            this._onUserActionRequestedObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        }
        return this._onUserActionRequestedObservable;
    }
    _processError(reason) {
        this._errorFound = true;
        if (this._onError) {
            this._onError(reason?.message);
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Error(reason?.message);
        }
    }
    _handlePlay() {
        this._errorFound = false;
        // eslint-disable-next-line github/no-then
        this.video.play().catch((reason)=>{
            if (reason?.name === "NotAllowedError") {
                if (this._onUserActionRequestedObservable && this._onUserActionRequestedObservable.hasObservers()) {
                    this._onUserActionRequestedObservable.notifyObservers(this);
                    return;
                } else if (!this.video.muted) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Warn("Unable to autoplay a video with sound. Trying again with muted turned true");
                    this.video.muted = true;
                    this._errorFound = false;
                    // eslint-disable-next-line github/no-then
                    this.video.play().catch((otherReason)=>{
                        this._processError(otherReason);
                    });
                    return;
                }
            }
            this._processError(reason);
        });
    }
    /**
     * Creates a video texture.
     * If you want to display a video in your scene, this is the special texture for that.
     * This special texture works similar to other textures, with the exception of a few parameters.
     * @see https://doc.babylonjs.com/features/featuresDeepDive/materials/using/videoTexture
     * @param name optional name, will detect from video source, if not defined
     * @param src can be used to provide an url, array of urls or an already setup HTML video element.
     * @param scene is obviously the current scene.
     * @param generateMipMaps can be used to turn on mipmaps (Can be expensive for videoTextures because they are often updated).
     * @param invertY is false by default but can be used to invert video on Y axis
     * @param samplingMode controls the sampling method and is set to TRILINEAR_SAMPLINGMODE by default
     * @param settings allows finer control over video usage
     * @param onError defines a callback triggered when an error occurred during the loading session
     * @param format defines the texture format to use (Engine.TEXTUREFORMAT_RGBA by default)
     */ constructor(name, src, scene, generateMipMaps = false, invertY = false, samplingMode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"].TRILINEAR_SAMPLINGMODE, settings = {}, onError, format = 5){
        super(null, scene, !generateMipMaps, invertY);
        this._externalTexture = null;
        this._onUserActionRequestedObservable = null;
        this._stillImageCaptured = false;
        this._displayingPosterTexture = false;
        this._frameId = -1;
        this._currentSrc = null;
        this._errorFound = false;
        /**
         * Serialize the flag to define this texture as a video texture
         */ this.isVideo = true;
        this._resizeInternalTexture = ()=>{
            // Cleanup the old texture before replacing it
            if (this._texture != null) {
                this._texture.dispose();
            }
            if (!this._getEngine().needPOTTextures || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tools"].IsExponentOfTwo(this.video.videoWidth) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tools"].IsExponentOfTwo(this.video.videoHeight)) {
                this.wrapU = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"].WRAP_ADDRESSMODE;
                this.wrapV = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"].WRAP_ADDRESSMODE;
            } else {
                this.wrapU = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"].CLAMP_ADDRESSMODE;
                this.wrapV = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"].CLAMP_ADDRESSMODE;
                this._generateMipMaps = false;
            }
            this._texture = this._getEngine().createDynamicTexture(this.video.videoWidth, this.video.videoHeight, this._generateMipMaps, this.samplingMode);
            this._texture.format = this._format ?? 5;
            // Reset the frame ID and update the new texture to ensure it pulls in the current video frame
            this._frameId = -1;
            this._updateInternalTexture();
        };
        this._createInternalTexture = ()=>{
            if (this._texture != null) {
                if (this._displayingPosterTexture) {
                    this._displayingPosterTexture = false;
                } else {
                    return;
                }
            }
            this.video.addEventListener("resize", this._resizeInternalTexture);
            this._resizeInternalTexture();
            if (!this.video.autoplay && !this._settings.poster && !this._settings.independentVideoSource) {
                const oldHandler = this.video.onplaying;
                const oldMuted = this.video.muted;
                this.video.muted = true;
                this.video.onplaying = ()=>{
                    this.video.muted = oldMuted;
                    this.video.onplaying = oldHandler;
                    this._updateInternalTexture();
                    if (!this._errorFound) {
                        this.video.pause();
                    }
                    if (this.onLoadObservable.hasObservers()) {
                        this.onLoadObservable.notifyObservers(this);
                    }
                };
                this._handlePlay();
            } else {
                this._updateInternalTexture();
                if (this.onLoadObservable.hasObservers()) {
                    this.onLoadObservable.notifyObservers(this);
                }
            }
        };
        this._reset = ()=>{
            if (this._texture == null) {
                return;
            }
            if (!this._displayingPosterTexture) {
                this._texture.dispose();
                this._texture = null;
            }
        };
        this._updateInternalTexture = ()=>{
            if (this._texture == null) {
                return;
            }
            if (this.video.readyState < this.video.HAVE_CURRENT_DATA) {
                return;
            }
            if (this._displayingPosterTexture) {
                return;
            }
            const frameId = this.getScene().getFrameId();
            if (this._frameId === frameId) {
                return;
            }
            this._frameId = frameId;
            this._getEngine().updateVideoTexture(this._texture, this._externalTexture ? this._externalTexture : this.video, this._invertY);
        };
        this._settings = {
            autoPlay: true,
            loop: true,
            autoUpdateTexture: true,
            ...settings
        };
        this._onError = onError;
        this._generateMipMaps = generateMipMaps;
        this._initialSamplingMode = samplingMode;
        this.autoUpdateTexture = this._settings.autoUpdateTexture;
        this._currentSrc = src;
        this.name = name || this._getName(src);
        this.video = this._getVideo(src);
        const engineWebGPU = this._engine;
        const createExternalTexture = engineWebGPU?.createExternalTexture;
        if (createExternalTexture) {
            this._externalTexture = createExternalTexture.call(engineWebGPU, this.video);
        }
        if (!this._settings.independentVideoSource) {
            if (this._settings.poster) {
                this.video.poster = this._settings.poster;
            }
            if (this._settings.autoPlay !== undefined) {
                this.video.autoplay = this._settings.autoPlay;
            }
            if (this._settings.loop !== undefined) {
                this.video.loop = this._settings.loop;
            }
            if (this._settings.muted !== undefined) {
                this.video.muted = this._settings.muted;
            }
            this.video.setAttribute("playsinline", "");
            this.video.addEventListener("paused", this._updateInternalTexture);
            this.video.addEventListener("seeked", this._updateInternalTexture);
            this.video.addEventListener("loadeddata", this._updateInternalTexture);
            this.video.addEventListener("emptied", this._reset);
            if (this._settings.autoPlay) {
                this._handlePlay();
            }
        }
        this._createInternalTextureOnEvent = this._settings.poster && !this._settings.autoPlay ? "play" : "canplay";
        this.video.addEventListener(this._createInternalTextureOnEvent, this._createInternalTexture);
        this._format = format;
        const videoHasEnoughData = this.video.readyState >= this.video.HAVE_CURRENT_DATA;
        if (this._settings.poster && (!this._settings.autoPlay || !videoHasEnoughData)) {
            this._texture = this._getEngine().createTexture(this._settings.poster, false, !this.invertY, scene);
            this._displayingPosterTexture = true;
        } else if (videoHasEnoughData) {
            this._createInternalTexture();
        }
    }
    /**
     * Get the current class name of the video texture useful for serialization or dynamic coding.
     * @returns "VideoTexture"
     */ getClassName() {
        return "VideoTexture";
    }
    _getName(src) {
        if (src instanceof HTMLVideoElement) {
            return src.currentSrc;
        }
        if (typeof src === "object") {
            return src.toString();
        }
        return src;
    }
    _getVideo(src) {
        if (src.isNative) {
            return src;
        }
        if (src instanceof HTMLVideoElement) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tools"].SetCorsBehavior(src.currentSrc, src);
            return src;
        }
        const video = document.createElement("video");
        if (typeof src === "string") {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tools"].SetCorsBehavior(src, video);
            video.src = src;
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tools"].SetCorsBehavior(src[0], video);
            for (const url of src){
                const source = document.createElement("source");
                source.src = url;
                video.appendChild(source);
            }
        }
        this.onDisposeObservable.addOnce(()=>{
            RemoveSource(video);
        });
        return video;
    }
    /**
     * @internal Internal method to initiate `update`.
     */ _rebuild() {
        this.update();
    }
    /**
     * Update Texture in the `auto` mode. Does not do anything if `settings.autoUpdateTexture` is false.
     */ update() {
        if (!this.autoUpdateTexture) {
            // Expecting user to call `updateTexture` manually
            return;
        }
        this.updateTexture(true);
    }
    /**
     * Update Texture in `manual` mode. Does not do anything if not visible or paused.
     * @param isVisible Visibility state, detected by user using `scene.getActiveMeshes()` or otherwise.
     */ updateTexture(isVisible) {
        if (!isVisible) {
            return;
        }
        if (this.video.paused && this._stillImageCaptured) {
            return;
        }
        this._stillImageCaptured = true;
        this._updateInternalTexture();
    }
    /**
     * Get the underlying external texture (if supported by the current engine, else null)
     */ get externalTexture() {
        return this._externalTexture;
    }
    /**
     * Change video content. Changing video instance or setting multiple urls (as in constructor) is not supported.
     * @param url New url.
     */ updateURL(url) {
        this.video.src = url;
        this._currentSrc = url;
    }
    /**
     * Clones the texture.
     * @returns the cloned texture
     */ clone() {
        return new VideoTexture(this.name, this._currentSrc, this.getScene(), this._generateMipMaps, this.invertY, this.samplingMode, this._settings);
    }
    /**
     * Dispose the texture and release its associated resources.
     */ dispose() {
        super.dispose();
        this._currentSrc = null;
        if (this._onUserActionRequestedObservable) {
            this._onUserActionRequestedObservable.clear();
            this._onUserActionRequestedObservable = null;
        }
        this.video.removeEventListener(this._createInternalTextureOnEvent, this._createInternalTexture);
        if (!this._settings.independentVideoSource) {
            this.video.removeEventListener("paused", this._updateInternalTexture);
            this.video.removeEventListener("seeked", this._updateInternalTexture);
            this.video.removeEventListener("loadeddata", this._updateInternalTexture);
            this.video.removeEventListener("emptied", this._reset);
            this.video.removeEventListener("resize", this._resizeInternalTexture);
            this.video.pause();
        }
        this._externalTexture?.dispose();
    }
    /**
     * Creates a video texture straight from a stream.
     * @param scene Define the scene the texture should be created in
     * @param stream Define the stream the texture should be created from
     * @param constraints video constraints
     * @param invertY Defines if the video should be stored with invert Y set to true (true by default)
     * @returns The created video texture as a promise
     */ // eslint-disable-next-line @typescript-eslint/promise-function-async, no-restricted-syntax
    static CreateFromStreamAsync(scene, stream, constraints, invertY = true) {
        const video = scene.getEngine().createVideoElement(constraints);
        if (scene.getEngine()._badOS) {
            // Yes... I know and I hope to remove it soon...
            document.body.appendChild(video);
            video.style.transform = "scale(0.0001, 0.0001)";
            video.style.opacity = "0";
            video.style.position = "fixed";
            video.style.bottom = "0px";
            video.style.right = "0px";
        }
        video.setAttribute("autoplay", "");
        video.setAttribute("muted", "true");
        video.setAttribute("playsinline", "");
        video.muted = true;
        if (video.isNative) {
        // No additional configuration needed for native
        } else {
            if (typeof video.srcObject == "object") {
                video.srcObject = stream;
            } else {
                // older API. See https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL#using_object_urls_for_media_streams
                video.src = window.URL && window.URL.createObjectURL(stream);
            }
        }
        return new Promise((resolve)=>{
            const onPlaying = ()=>{
                const videoTexture = new VideoTexture("video", video, scene, true, invertY, undefined, undefined, undefined, 4);
                if (scene.getEngine()._badOS) {
                    videoTexture.onDisposeObservable.addOnce(()=>{
                        video.remove();
                    });
                }
                videoTexture.onDisposeObservable.addOnce(()=>{
                    RemoveSource(video);
                });
                resolve(videoTexture);
                video.removeEventListener("playing", onPlaying);
            };
            video.addEventListener("playing", onPlaying);
            video.play();
        });
    }
    /**
     * Creates a video texture straight from your WebCam video feed.
     * @param scene Define the scene the texture should be created in
     * @param constraints Define the constraints to use to create the web cam feed from WebRTC
     * @param audioConstaints Define the audio constraints to use to create the web cam feed from WebRTC
     * @param invertY Defines if the video should be stored with invert Y set to true (true by default)
     * @returns The created video texture as a promise
     */ static async CreateFromWebCamAsync(scene, constraints, audioConstaints = false, invertY = true) {
        if (navigator.mediaDevices) {
            const stream = await navigator.mediaDevices.getUserMedia({
                video: constraints,
                audio: audioConstaints
            });
            const videoTexture = await this.CreateFromStreamAsync(scene, stream, constraints, invertY);
            videoTexture.onDisposeObservable.addOnce(()=>{
                const tracks = stream.getTracks();
                for (const track of tracks){
                    track.stop();
                }
            });
            return videoTexture;
        }
        // eslint-disable-next-line @typescript-eslint/return-await, @typescript-eslint/prefer-promise-reject-errors
        return Promise.reject("No support for userMedia on this device");
    }
    /**
     * Creates a video texture straight from your WebCam video feed.
     * @param scene Defines the scene the texture should be created in
     * @param onReady Defines a callback to triggered once the texture will be ready
     * @param constraints Defines the constraints to use to create the web cam feed from WebRTC
     * @param audioConstaints Defines the audio constraints to use to create the web cam feed from WebRTC
     * @param invertY Defines if the video should be stored with invert Y set to true (true by default)
     */ static CreateFromWebCam(scene, onReady, constraints, audioConstaints = false, invertY = true) {
        this.CreateFromWebCamAsync(scene, constraints, audioConstaints, invertY)// eslint-disable-next-line github/no-then
        .then(function(videoTexture) {
            if (onReady) {
                onReady(videoTexture);
            }
        })// eslint-disable-next-line github/no-then
        .catch(function(err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Error(err.name);
        });
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])("settings")
], VideoTexture.prototype, "_settings", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])("src")
], VideoTexture.prototype, "_currentSrc", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], VideoTexture.prototype, "isVideo", void 0);
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"]._CreateVideoTexture = (name, src, scene, generateMipMaps = false, invertY = false, samplingMode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"].TRILINEAR_SAMPLINGMODE, settings = {}, onError, format = 5)=>{
    return new VideoTexture(name, src, scene, generateMipMaps, invertY, samplingMode, settings, onError, format);
};
// Some exporters relies on Tools.Instantiate
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.VideoTexture", VideoTexture); //# sourceMappingURL=videoTexture.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Filtering/hdrFiltering.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HDRFiltering",
    ()=>HDRFiltering
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.scalar.functions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$effectRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/effectRenderer.js [app-client] (ecmascript)");
;
;
;
class HDRFiltering {
    /**
     * Instantiates HDR filter for reflection maps
     *
     * @param engine Thin engine
     * @param options Options
     */ constructor(engine, options = {}){
        this._lodGenerationOffset = 0;
        this._lodGenerationScale = 0.8;
        /**
         * Quality switch for prefiltering. Should be set to `4096` unless
         * you care about baking speed.
         */ this.quality = 4096;
        /**
         * Scales pixel intensity for the input HDR map.
         */ this.hdrScale = 1;
        // pass
        this._engine = engine;
        this.hdrScale = options.hdrScale || this.hdrScale;
        this.quality = options.quality || this.quality;
    }
    _createRenderTarget(size) {
        let textureType = 0;
        if (this._engine.getCaps().textureHalfFloatRender) {
            textureType = 2;
        } else if (this._engine.getCaps().textureFloatRender) {
            textureType = 1;
        }
        const rtWrapper = this._engine.createRenderTargetCubeTexture(size, {
            format: 5,
            type: textureType,
            createMipMaps: true,
            generateMipMaps: false,
            generateDepthBuffer: false,
            generateStencilBuffer: false,
            samplingMode: 1,
            label: "HDR_Radiance_Filtering_Target"
        });
        this._engine.updateTextureWrappingMode(rtWrapper.texture, 0, 0, 0);
        this._engine.updateTextureSamplingMode(3, rtWrapper.texture, true);
        return rtWrapper;
    }
    _prefilterInternal(texture) {
        const width = texture.getSize().width;
        const mipmapsCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ILog2"])(width) + 1;
        const effect = this._effectWrapper.effect;
        const outputTexture = this._createRenderTarget(width);
        this._effectRenderer.saveStates();
        this._effectRenderer.setViewport();
        const intTexture = texture.getInternalTexture();
        if (intTexture) {
            // Just in case generate fresh clean mips.
            this._engine.updateTextureSamplingMode(3, intTexture, true);
        }
        this._effectRenderer.applyEffectWrapper(this._effectWrapper);
        const directions = [
            [
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, -1),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, -1, 0),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](1, 0, 0)
            ],
            [
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 1),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, -1, 0),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](-1, 0, 0)
            ],
            [
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](1, 0, 0),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 1),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 1, 0)
            ],
            [
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](1, 0, 0),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, -1),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, -1, 0)
            ],
            [
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](1, 0, 0),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, -1, 0),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 1)
            ],
            [
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](-1, 0, 0),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, -1, 0),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, -1)
            ]
        ];
        effect.setFloat("hdrScale", this.hdrScale);
        effect.setFloat2("vFilteringInfo", texture.getSize().width, mipmapsCount);
        effect.setTexture("inputTexture", texture);
        for(let face = 0; face < 6; face++){
            effect.setVector3("up", directions[face][0]);
            effect.setVector3("right", directions[face][1]);
            effect.setVector3("front", directions[face][2]);
            for(let lod = 0; lod < mipmapsCount; lod++){
                this._engine.bindFramebuffer(outputTexture, face, undefined, undefined, true, lod);
                this._effectRenderer.applyEffectWrapper(this._effectWrapper);
                let alpha = Math.pow(2, (lod - this._lodGenerationOffset) / this._lodGenerationScale) / width;
                if (lod === 0) {
                    alpha = 0;
                }
                effect.setFloat("alphaG", alpha);
                this._effectRenderer.draw();
            }
        }
        // Cleanup
        this._effectRenderer.restoreStates();
        this._engine.restoreDefaultFramebuffer();
        this._engine._releaseTexture(texture._texture);
        // Internal Swap
        const type = outputTexture.texture.type;
        const format = outputTexture.texture.format;
        outputTexture._swapAndDie(texture._texture);
        texture._texture.type = type;
        texture._texture.format = format;
        // New settings
        texture.gammaSpace = false;
        texture.lodGenerationOffset = this._lodGenerationOffset;
        texture.lodGenerationScale = this._lodGenerationScale;
        texture._prefiltered = true;
        return texture;
    }
    _createEffect(texture, onCompiled) {
        const defines = [];
        if (texture.gammaSpace) {
            defines.push("#define GAMMA_INPUT");
        }
        defines.push("#define NUM_SAMPLES " + this.quality + "u"); // unsigned int
        const isWebGPU = this._engine.isWebGPU;
        const effectWrapper = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$effectRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EffectWrapper"]({
            engine: this._engine,
            name: "hdrFiltering",
            vertexShader: "hdrFiltering",
            fragmentShader: "hdrFiltering",
            samplerNames: [
                "inputTexture"
            ],
            uniformNames: [
                "vSampleDirections",
                "vWeights",
                "up",
                "right",
                "front",
                "vFilteringInfo",
                "hdrScale",
                "alphaG"
            ],
            useShaderStore: true,
            defines,
            onCompiled: onCompiled,
            shaderLanguage: isWebGPU ? 1 /* ShaderLanguage.WGSL */  : 0 /* ShaderLanguage.GLSL */ ,
            extraInitializationsAsync: async ()=>{
                if (isWebGPU) {
                    await Promise.all([
                        __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/hdrFiltering.vertex.js [app-client] (ecmascript, async loader)"),
                        __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/hdrFiltering.fragment.js [app-client] (ecmascript, async loader)")
                    ]);
                } else {
                    await Promise.all([
                        __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/hdrFiltering.vertex.js [app-client] (ecmascript, async loader)"),
                        __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/hdrFiltering.fragment.js [app-client] (ecmascript, async loader)")
                    ]);
                }
            }
        });
        return effectWrapper;
    }
    /**
     * Get a value indicating if the filter is ready to be used
     * @param texture Texture to filter
     * @returns true if the filter is ready
     */ isReady(texture) {
        return texture.isReady() && this._effectWrapper.effect.isReady();
    }
    /**
     * Prefilters a cube texture to have mipmap levels representing roughness values.
     * Prefiltering will be invoked at the end of next rendering pass.
     * This has to be done once the map is loaded, and has not been prefiltered by a third party software.
     * See http://blog.selfshadow.com/publications/s2013-shading-course/karis/s2013_pbs_epic_notes_v2.pdf for more information
     * @param texture Texture to filter
     * @returns Promise called when prefiltering is done
     */ // eslint-disable-next-line @typescript-eslint/naming-convention
    async prefilter(texture) {
        if (!this._engine._features.allowTexturePrefiltering) {
            throw new Error("HDR prefiltering is not available in WebGL 1., you can use real time filtering instead.");
        }
        this._effectRenderer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$effectRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EffectRenderer"](this._engine);
        this._effectWrapper = this._createEffect(texture);
        await this._effectWrapper.effect.whenCompiledAsync();
        this._prefilterInternal(texture);
        this._effectRenderer.dispose();
        this._effectWrapper.dispose();
    }
} //# sourceMappingURL=hdrFiltering.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Filtering/hdrIrradianceFiltering.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HDRIrradianceFiltering",
    ()=>HDRIrradianceFiltering
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.scalar.functions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$baseTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/baseTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$effectRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/effectRenderer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Rendering$2f$iblCdfGenerator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Rendering/iblCdfGenerator.js [app-client] (ecmascript)");
;
;
;
;
;
class HDRIrradianceFiltering {
    /**
     * Instantiates HDR filter for irradiance map
     *
     * @param engine Thin engine
     * @param options Options
     */ constructor(engine, options = {}){
        /**
         * Quality switch for prefiltering. Should be set to `4096` unless
         * you care about baking speed.
         */ this.quality = 4096;
        /**
         * Scales pixel intensity for the input HDR map.
         */ this.hdrScale = 1;
        /**
         * Use the Cumulative Distribution Function (CDF) for filtering
         */ this.useCdf = false;
        // pass
        this._engine = engine;
        this.hdrScale = options.hdrScale || this.hdrScale;
        this.quality = options.quality || this.quality;
        this.useCdf = options.useCdf || this.useCdf;
    }
    _createRenderTarget(size) {
        let textureType = 0;
        if (this._engine.getCaps().textureHalfFloatRender) {
            textureType = 2;
        } else if (this._engine.getCaps().textureFloatRender) {
            textureType = 1;
        }
        const rtWrapper = this._engine.createRenderTargetCubeTexture(size, {
            format: 5,
            type: textureType,
            createMipMaps: false,
            generateMipMaps: false,
            generateDepthBuffer: false,
            generateStencilBuffer: false,
            samplingMode: 2,
            label: "HDR_Irradiance_Filtering_Target"
        });
        this._engine.updateTextureWrappingMode(rtWrapper.texture, 0, 0, 0);
        return rtWrapper;
    }
    _prefilterInternal(texture) {
        const width = texture.getSize().width;
        const mipmapsCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ILog2"])(width);
        const effect = this._effectWrapper.effect;
        // Choose a power of 2 size for the irradiance map.
        // It can be much smaller than the original texture.
        const irradianceSize = Math.max(32, 1 << (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ILog2"])(width >> 3));
        const outputTexture = this._createRenderTarget(irradianceSize);
        this._effectRenderer.saveStates();
        this._effectRenderer.setViewport();
        this._effectRenderer.applyEffectWrapper(this._effectWrapper);
        const directions = [
            [
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, -1),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, -1, 0),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](1, 0, 0)
            ],
            [
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 1),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, -1, 0),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](-1, 0, 0)
            ],
            [
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](1, 0, 0),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 1),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 1, 0)
            ],
            [
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](1, 0, 0),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, -1),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, -1, 0)
            ],
            [
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](1, 0, 0),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, -1, 0),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 1)
            ],
            [
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](-1, 0, 0),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, -1, 0),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, -1)
            ]
        ];
        effect.setFloat("hdrScale", this.hdrScale);
        effect.setFloat2("vFilteringInfo", texture.getSize().width, mipmapsCount);
        effect.setTexture("inputTexture", texture);
        if (this._cdfGenerator) {
            effect.setTexture("icdfTexture", this._cdfGenerator.getIcdfTexture());
        }
        for(let face = 0; face < 6; face++){
            effect.setVector3("up", directions[face][0]);
            effect.setVector3("right", directions[face][1]);
            effect.setVector3("front", directions[face][2]);
            this._engine.bindFramebuffer(outputTexture, face, undefined, undefined, true);
            this._effectRenderer.applyEffectWrapper(this._effectWrapper);
            this._effectRenderer.draw();
        }
        // Cleanup
        this._effectRenderer.restoreStates();
        this._engine.restoreDefaultFramebuffer();
        effect.setTexture("inputTexture", null);
        effect.setTexture("icdfTexture", null);
        const irradianceTexture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$baseTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseTexture"](texture.getScene(), outputTexture.texture);
        irradianceTexture.name = texture.name + "_irradiance";
        irradianceTexture.displayName = texture.name + "_irradiance";
        irradianceTexture.gammaSpace = false;
        return irradianceTexture;
    }
    _createEffect(texture, onCompiled) {
        const defines = [];
        if (texture.gammaSpace) {
            defines.push("#define GAMMA_INPUT");
        }
        defines.push("#define NUM_SAMPLES " + this.quality + "u"); // unsigned int
        const isWebGPU = this._engine.isWebGPU;
        const samplers = [
            "inputTexture"
        ];
        if (this._cdfGenerator) {
            samplers.push("icdfTexture");
            defines.push("#define IBL_CDF_FILTERING");
        }
        const effectWrapper = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$effectRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EffectWrapper"]({
            engine: this._engine,
            name: "HDRIrradianceFiltering",
            vertexShader: "hdrIrradianceFiltering",
            fragmentShader: "hdrIrradianceFiltering",
            samplerNames: samplers,
            uniformNames: [
                "vSampleDirections",
                "vWeights",
                "up",
                "right",
                "front",
                "vFilteringInfo",
                "hdrScale"
            ],
            useShaderStore: true,
            defines,
            onCompiled: onCompiled,
            shaderLanguage: isWebGPU ? 1 /* ShaderLanguage.WGSL */  : 0 /* ShaderLanguage.GLSL */ ,
            extraInitializationsAsync: async ()=>{
                if (isWebGPU) {
                    await Promise.all([
                        __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/hdrIrradianceFiltering.vertex.js [app-client] (ecmascript, async loader)"),
                        __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/hdrIrradianceFiltering.fragment.js [app-client] (ecmascript, async loader)")
                    ]);
                } else {
                    await Promise.all([
                        __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/hdrIrradianceFiltering.vertex.js [app-client] (ecmascript, async loader)"),
                        __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/hdrIrradianceFiltering.fragment.js [app-client] (ecmascript, async loader)")
                    ]);
                }
            }
        });
        return effectWrapper;
    }
    /**
     * Get a value indicating if the filter is ready to be used
     * @param texture Texture to filter
     * @returns true if the filter is ready
     */ isReady(texture) {
        return texture.isReady() && this._effectWrapper.effect.isReady();
    }
    /**
     * Prefilters a cube texture to contain IBL irradiance.
     * Prefiltering will be invoked at the end of next rendering pass.
     * This has to be done once the map is loaded, and has not been prefiltered by a third party software.
     * See http://blog.selfshadow.com/publications/s2013-shading-course/karis/s2013_pbs_epic_notes_v2.pdf for more information
     * @param texture Texture to filter
     * @returns Promise called when prefiltering is done
     */ // eslint-disable-next-line @typescript-eslint/naming-convention
    async prefilter(texture) {
        if (!this._engine._features.allowTexturePrefiltering) {
            throw new Error("HDR prefiltering is not available in WebGL 1., you can use real time filtering instead.");
        }
        if (this.useCdf) {
            this._cdfGenerator = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Rendering$2f$iblCdfGenerator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IblCdfGenerator"](this._engine);
            this._cdfGenerator.iblSource = texture;
            await this._cdfGenerator.renderWhenReady();
        }
        this._effectRenderer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$effectRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EffectRenderer"](this._engine);
        this._effectWrapper = this._createEffect(texture);
        await this._effectWrapper.effect.whenCompiledAsync();
        const irradianceTexture = this._prefilterInternal(texture);
        if (this.useCdf) {
            // eslint-disable-next-line github/no-then
            await this._cdfGenerator.findDominantDirection().then((dir)=>{
                irradianceTexture._dominantDirection = dir;
            });
        }
        this._effectRenderer.dispose();
        this._effectWrapper.dispose();
        this._cdfGenerator?.dispose();
        return irradianceTexture;
    }
} //# sourceMappingURL=hdrIrradianceFiltering.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/envCubeTexture.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EnvCubeTexture",
    ()=>EnvCubeTexture
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$baseTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/baseTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/texture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$HighDynamicRange$2f$cubemapToSphericalPolynomial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/HighDynamicRange/cubemapToSphericalPolynomial.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/tools.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Filtering$2f$hdrFiltering$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Filtering/hdrFiltering.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Filtering$2f$hdrIrradianceFiltering$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Filtering/hdrIrradianceFiltering.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$textureTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/textureTools.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$baseTexture$2e$polynomial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/baseTexture.polynomial.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
class EnvCubeTexture extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$baseTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseTexture"] {
    /**
     * Sets whether or not the texture is blocking during loading.
     */ set isBlocking(value) {
        this._isBlocking = value;
    }
    /**
     * Gets whether or not the texture is blocking during loading.
     */ get isBlocking() {
        return this._isBlocking;
    }
    /**
     * Sets texture matrix rotation angle around Y axis in radians.
     */ set rotationY(value) {
        this._rotationY = value;
        this.setReflectionTextureMatrix(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].RotationY(this._rotationY));
    }
    /**
     * Gets texture matrix rotation angle around Y axis radians.
     */ get rotationY() {
        return this._rotationY;
    }
    /**
     * Gets or sets the size of the bounding box associated with the cube texture
     * When defined, the cubemap will switch to local mode
     * @see https://community.arm.com/graphics/b/blog/posts/reflections-based-on-local-cubemaps-in-unity
     * @example https://www.babylonjs-playground.com/#RNASML
     */ set boundingBoxSize(value) {
        if (this._boundingBoxSize && this._boundingBoxSize.equals(value)) {
            return;
        }
        this._boundingBoxSize = value;
        const scene = this.getScene();
        if (scene) {
            scene.markAllMaterialsAsDirty(1);
        }
    }
    get boundingBoxSize() {
        return this._boundingBoxSize;
    }
    /**
     * Instantiates an EnvCubeTexture from the following parameters.
     *
     * @param url The location of the raw data (Panorama stored in RGBE format)
     * @param sceneOrEngine The scene or engine the texture will be used in
     * @param size The cubemap desired size (the more it increases the longer the generation will be)
     * @param noMipmap Forces to not generate the mipmap if true
     * @param generateHarmonics Specifies whether you want to extract the polynomial harmonics during the generation process
     * @param gammaSpace Specifies if the texture will be use in gamma or linear space (the PBR material requires those texture in linear space, but the standard material would require them in Gamma space)
     * @param prefilterOnLoad Prefilters texture to allow use of this texture as a PBR reflection texture.
     * @param onLoad on success callback function
     * @param onError on error callback function
     * @param supersample Defines if texture must be supersampled (default: false)
     * @param prefilterIrradianceOnLoad Prefilters texture to allow use of this texture for irradiance lighting.
     * @param prefilterUsingCdf Defines if the prefiltering should be done using a CDF instead of the default approach.
     */ constructor(url, sceneOrEngine, size, noMipmap = false, generateHarmonics = true, gammaSpace = false, prefilterOnLoad = false, onLoad = null, onError = null, supersample = false, prefilterIrradianceOnLoad = false, prefilterUsingCdf = false){
        super(sceneOrEngine);
        this._generateHarmonics = true;
        this._onError = null;
        this._isBlocking = true;
        this._rotationY = 0;
        /**
         * Gets or sets the center of the bounding box associated with the cube texture
         * It must define where the camera used to render the texture was set
         */ this.boundingBoxPosition = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        /**
         * Observable triggered once the texture has been loaded.
         */ this.onLoadObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        if (!url) {
            return;
        }
        this._coordinatesMode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"].CUBIC_MODE;
        this.name = url;
        this.url = url;
        this.hasAlpha = false;
        this.isCube = true;
        this._textureMatrix = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].Identity();
        this._prefilterOnLoad = prefilterOnLoad;
        this._prefilterIrradianceOnLoad = prefilterIrradianceOnLoad;
        this._prefilterUsingCdf = prefilterUsingCdf;
        this._onLoad = ()=>{
            this.onLoadObservable.notifyObservers(this);
            if (onLoad) {
                onLoad();
            }
        };
        this._onError = onError;
        this.gammaSpace = gammaSpace;
        this._noMipmap = noMipmap;
        this._size = size;
        // CDF is very sensitive to lost precision due to downsampling. This can result in
        // noticeable brightness differences with different resolutions. Enabling supersampling
        // mitigates this.
        this._supersample = supersample || prefilterUsingCdf;
        this._generateHarmonics = generateHarmonics;
        this._texture = this._getFromCache(url, this._noMipmap, undefined, undefined, undefined, this.isCube);
        if (!this._texture) {
            if (!this.getScene()?.useDelayedTextureLoading) {
                this._loadTexture();
            } else {
                this.delayLoadState = 4;
            }
        } else {
            if (this._texture.isReady) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tools"].SetImmediate(()=>this._onLoad());
            } else {
                this._texture.onLoadedObservable.add(this._onLoad);
            }
        }
    }
    /**
     * Get the current class name of the texture useful for serialization or dynamic coding.
     * @returns "EnvCubeTexture"
     */ getClassName() {
        return "EnvCubeTexture";
    }
    /**
     * Occurs when the file has been loaded.
     */ _loadTexture() {
        const engine = this._getEngine();
        const caps = engine.getCaps();
        let textureType = 0;
        if (caps.textureFloat && caps.textureFloatLinearFiltering) {
            textureType = 1;
        } else if (caps.textureHalfFloat && caps.textureHalfFloatLinearFiltering) {
            textureType = 2;
        }
        // eslint-disable-next-line no-restricted-syntax
        const callback = async (buffer)=>{
            this.lodGenerationOffset = 0.0;
            this.lodGenerationScale = 0.8;
            // Extract the raw linear data.
            const data = await this._getCubeMapTextureDataAsync(buffer, this._size, this._supersample);
            // Generate harmonics if needed.
            if (this._generateHarmonics) {
                const sphericalPolynomial = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$HighDynamicRange$2f$cubemapToSphericalPolynomial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CubeMapToSphericalPolynomialTools"].ConvertCubeMapToSphericalPolynomial(data);
                this.sphericalPolynomial = sphericalPolynomial;
            }
            const results = [];
            let byteArray = null;
            let shortArray = null;
            // Push each faces.
            for(let j = 0; j < 6; j++){
                // Create fallback array
                if (textureType === 2) {
                    shortArray = new Uint16Array(this._size * this._size * 3);
                } else if (textureType === 0) {
                    // 3 channels of 1 bytes per pixel in bytes.
                    byteArray = new Uint8Array(this._size * this._size * 3);
                }
                const dataFace = data[EnvCubeTexture._FacesMapping[j]];
                // If special cases.
                if (this.gammaSpace || shortArray || byteArray) {
                    for(let i = 0; i < this._size * this._size; i++){
                        // Put in gamma space if requested.
                        if (this.gammaSpace) {
                            dataFace[i * 3 + 0] = Math.pow(dataFace[i * 3 + 0], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToGammaSpace"]);
                            dataFace[i * 3 + 1] = Math.pow(dataFace[i * 3 + 1], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToGammaSpace"]);
                            dataFace[i * 3 + 2] = Math.pow(dataFace[i * 3 + 2], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToGammaSpace"]);
                        }
                        // Convert to half float texture for fallback.
                        if (shortArray) {
                            shortArray[i * 3 + 0] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$textureTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToHalfFloat"])(dataFace[i * 3 + 0]);
                            shortArray[i * 3 + 1] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$textureTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToHalfFloat"])(dataFace[i * 3 + 1]);
                            shortArray[i * 3 + 2] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$textureTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToHalfFloat"])(dataFace[i * 3 + 2]);
                        }
                        // Convert to int texture for fallback.
                        if (byteArray) {
                            let r = Math.max(dataFace[i * 3 + 0] * 255, 0);
                            let g = Math.max(dataFace[i * 3 + 1] * 255, 0);
                            let b = Math.max(dataFace[i * 3 + 2] * 255, 0);
                            // May use luminance instead if the result is not accurate.
                            const max = Math.max(Math.max(r, g), b);
                            if (max > 255) {
                                const scale = 255 / max;
                                r *= scale;
                                g *= scale;
                                b *= scale;
                            }
                            byteArray[i * 3 + 0] = r;
                            byteArray[i * 3 + 1] = g;
                            byteArray[i * 3 + 2] = b;
                        }
                    }
                }
                if (shortArray) {
                    results.push(shortArray);
                } else if (byteArray) {
                    results.push(byteArray);
                } else {
                    results.push(dataFace);
                }
            }
            return results;
        };
        if (engine._features.allowTexturePrefiltering && (this._prefilterOnLoad || this._prefilterIrradianceOnLoad)) {
            const previousOnLoad = this._onLoad;
            const hdrFiltering = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Filtering$2f$hdrFiltering$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HDRFiltering"](engine);
            this._onLoad = ()=>{
                let irradiancePromise = Promise.resolve(null);
                let radiancePromise = Promise.resolve();
                if (this._prefilterIrradianceOnLoad) {
                    const hdrIrradianceFiltering = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Filtering$2f$hdrIrradianceFiltering$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HDRIrradianceFiltering"](engine, {
                        useCdf: this._prefilterUsingCdf
                    });
                    irradiancePromise = hdrIrradianceFiltering.prefilter(this);
                }
                if (this._prefilterOnLoad) {
                    radiancePromise = hdrFiltering.prefilter(this);
                }
                // eslint-disable-next-line @typescript-eslint/no-floating-promises, github/no-then
                Promise.all([
                    irradiancePromise,
                    radiancePromise
                ]).then((results)=>{
                    const irradianceTexture = results[0];
                    if (this._prefilterIrradianceOnLoad && irradianceTexture) {
                        this.irradianceTexture = irradianceTexture;
                        const scene = this.getScene();
                        if (scene) {
                            scene.markAllMaterialsAsDirty(1);
                        }
                    }
                    if (previousOnLoad) {
                        previousOnLoad();
                    }
                });
            };
        }
        this._texture = engine.createRawCubeTextureFromUrl(this.url, this.getScene(), this._size, 4, textureType, this._noMipmap, callback, null, this._onLoad, this._onError);
    }
    // Methods
    delayLoad() {
        if (this.delayLoadState !== 4) {
            return;
        }
        this.delayLoadState = 1;
        this._texture = this._getFromCache(this.url, this._noMipmap);
        if (!this._texture) {
            this._loadTexture();
        }
    }
    /**
     * Get the texture reflection matrix used to rotate/transform the reflection.
     * @returns the reflection matrix
     */ getReflectionTextureMatrix() {
        return this._textureMatrix;
    }
    /**
     * Set the texture reflection matrix used to rotate/transform the reflection.
     * @param value Define the reflection matrix to set
     */ setReflectionTextureMatrix(value) {
        this._textureMatrix = value;
        if (value.updateFlag === this._textureMatrix.updateFlag) {
            return;
        }
        if (value.isIdentity() !== this._textureMatrix.isIdentity()) {
            this.getScene()?.markAllMaterialsAsDirty(1, (mat)=>mat.getActiveTextures().indexOf(this) !== -1);
        }
    }
    /**
     * Dispose the texture and release its associated resources.
     */ dispose() {
        this.onLoadObservable.clear();
        super.dispose();
    }
    /**
     * Serializes the texture to a JSON representation.
     * @returns the JSON representation
     */ serialize() {
        if (!this.name) {
            return null;
        }
        const serializationObject = {};
        serializationObject.name = this.name;
        serializationObject.hasAlpha = this.hasAlpha;
        serializationObject.isCube = true;
        serializationObject.level = this.level;
        serializationObject.size = this._size;
        serializationObject.coordinatesMode = this.coordinatesMode;
        serializationObject.useInGammaSpace = this.gammaSpace;
        serializationObject.generateHarmonics = this._generateHarmonics;
        serializationObject.noMipmap = this._noMipmap;
        serializationObject.isBlocking = this._isBlocking;
        serializationObject.rotationY = this._rotationY;
        return serializationObject;
    }
    /**
     * Clones the current texture.
     * @returns the cloned texture
     */ clone() {
        const newTexture = this._instantiateClone();
        // Base Texture
        newTexture.level = this.level;
        newTexture.wrapU = this.wrapU;
        newTexture.wrapV = this.wrapV;
        newTexture.coordinatesIndex = this.coordinatesIndex;
        newTexture.coordinatesMode = this.coordinatesMode;
        return newTexture;
    }
    static _Parse(parsedTexture, texture) {
        texture.name = parsedTexture.name;
        texture.hasAlpha = parsedTexture.hasAlpha;
        texture.level = parsedTexture.level;
        texture.coordinatesMode = parsedTexture.coordinatesMode;
        texture.isBlocking = parsedTexture.isBlocking;
        if (parsedTexture.boundingBoxPosition) {
            texture.boundingBoxPosition = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].FromArray(parsedTexture.boundingBoxPosition);
        }
        if (parsedTexture.boundingBoxSize) {
            texture.boundingBoxSize = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].FromArray(parsedTexture.boundingBoxSize);
        }
        if (parsedTexture.rotationY) {
            texture.rotationY = parsedTexture.rotationY;
        }
    }
}
EnvCubeTexture._FacesMapping = [
    "right",
    "left",
    "up",
    "down",
    "front",
    "back"
]; //# sourceMappingURL=envCubeTexture.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/hdrCubeTexture.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HDRCubeTexture",
    ()=>HDRCubeTexture
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$envCubeTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/envCubeTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$HighDynamicRange$2f$hdr$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/HighDynamicRange/hdr.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$baseTexture$2e$polynomial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/baseTexture.polynomial.js [app-client] (ecmascript)");
;
;
;
;
class HDRCubeTexture extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$envCubeTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EnvCubeTexture"] {
    /**
     * Instantiates an HDRTexture from the following parameters.
     *
     * @param url The location of the HDR raw data (Panorama stored in RGBE format)
     * @param sceneOrEngine The scene or engine the texture will be used in
     * @param size The cubemap desired size (the more it increases the longer the generation will be)
     * @param noMipmap Forces to not generate the mipmap if true
     * @param generateHarmonics Specifies whether you want to extract the polynomial harmonics during the generation process
     * @param gammaSpace Specifies if the texture will be use in gamma or linear space (the PBR material requires those texture in linear space, but the standard material would require them in Gamma space)
     * @param prefilterOnLoad Prefilters HDR texture to allow use of this texture as a PBR reflection texture.
     * @param onLoad on success callback function
     * @param onError on error callback function
     * @param supersample Defines if texture must be supersampled (default: false)
     * @param prefilterIrradianceOnLoad Prefilters HDR texture to allow use of this texture for irradiance lighting.
     * @param prefilterUsingCdf Defines if the prefiltering should be done using a CDF instead of the default approach.
     */ constructor(url, sceneOrEngine, size, noMipmap = false, generateHarmonics = true, gammaSpace = false, prefilterOnLoad = false, onLoad = null, onError = null, supersample = false, prefilterIrradianceOnLoad = false, prefilterUsingCdf = false){
        super(url, sceneOrEngine, size, noMipmap, generateHarmonics, gammaSpace, prefilterOnLoad, onLoad, onError, supersample, prefilterIrradianceOnLoad, prefilterUsingCdf);
    }
    /**
     * Get the current class name of the texture useful for serialization or dynamic coding.
     * @returns "HDRCubeTexture"
     */ getClassName() {
        return "HDRCubeTexture";
    }
    /**
     * Convert the raw data from the server into cubemap faces
     * @param buffer The buffer containing the texture data
     * @param size The cubemap face size
     * @param supersample Defines if texture must be supersampled
     * @returns The cube map data
     */ async _getCubeMapTextureDataAsync(buffer, size, supersample) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$HighDynamicRange$2f$hdr$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GetCubeMapTextureData"])(buffer, size, supersample);
    }
    _instantiateClone() {
        return new HDRCubeTexture(this.url, this.getScene() || this._getEngine(), this._size, this._noMipmap, this._generateHarmonics, this.gammaSpace);
    }
    /**
     * Serialize the texture to a JSON representation.
     * @returns The JSON representation of the texture
     */ serialize() {
        const serializationObject = super.serialize();
        if (!serializationObject) {
            return null;
        }
        serializationObject.customType = "BABYLON.HDRCubeTexture";
        return serializationObject;
    }
    /**
     * Parses a JSON representation of an HDR Texture in order to create the texture
     * @param parsedTexture Define the JSON representation
     * @param scene Define the scene the texture should be created in
     * @param rootUrl Define the root url in case we need to load relative dependencies
     * @returns the newly created texture after parsing
     */ static Parse(parsedTexture, scene, rootUrl) {
        if (!parsedTexture.name || parsedTexture.isRenderTarget) {
            return null;
        }
        const texture = new HDRCubeTexture(rootUrl + parsedTexture.name, scene, parsedTexture.size, parsedTexture.noMipmap, parsedTexture.generateHarmonics, parsedTexture.useInGammaSpace);
        this._Parse(parsedTexture, texture);
        return texture;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.HDRCubeTexture", HDRCubeTexture); //# sourceMappingURL=hdrCubeTexture.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/rawTexture2DArray.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RawTexture2DArray",
    ()=>RawTexture2DArray
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/texture.js [app-client] (ecmascript)");
;
class RawTexture2DArray extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"] {
    /**
     * Gets the number of layers of the texture
     */ get depth() {
        return this._depth;
    }
    /**
     * Create a new RawTexture2DArray
     * @param data defines the data of the texture
     * @param width defines the width of the texture
     * @param height defines the height of the texture
     * @param depth defines the number of layers of the texture
     * @param format defines the texture format to use
     * @param scene defines the hosting scene
     * @param generateMipMaps defines a boolean indicating if mip levels should be generated (true by default)
     * @param invertY defines if texture must be stored with Y axis inverted
     * @param samplingMode defines the sampling mode to use (Texture.TRILINEAR_SAMPLINGMODE by default)
     * @param textureType defines the texture Type (Engine.TEXTURETYPE_UNSIGNED_BYTE, Engine.TEXTURETYPE_FLOAT...)
     * @param creationFlags specific flags to use when creating the texture (1 for storage textures, for eg)
     */ constructor(data, width, height, depth, /** Gets or sets the texture format to use */ format, scene, generateMipMaps = true, invertY = false, samplingMode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"].TRILINEAR_SAMPLINGMODE, textureType = 0, creationFlags){
        super(null, scene, !generateMipMaps, invertY);
        this.format = format;
        this._texture = scene.getEngine().createRawTexture2DArray(data, width, height, depth, format, generateMipMaps, invertY, samplingMode, null, textureType, creationFlags);
        this._depth = depth;
        this.is2DArray = true;
    }
    /**
     * Update the texture with new data
     * @param data defines the data to store in the texture
     */ update(data) {
        if (!this._texture) {
            return;
        }
        this._getEngine().updateRawTexture2DArray(this._texture, data, this._texture.format, this._texture.invertY, null, this._texture.type);
    }
    /**
     * Creates a RGBA texture from some data.
     * @param data Define the texture data
     * @param width Define the width of the texture
     * @param height Define the height of the texture
     * @param depth defines the number of layers of the texture
     * @param scene defines the scene the texture will belong to
     * @param generateMipMaps Define whether or not to create mip maps for the texture
     * @param invertY define if the data should be flipped on Y when uploaded to the GPU
     * @param samplingMode define the texture sampling mode (Texture.xxx_SAMPLINGMODE)
     * @param type define the format of the data (int, float... Engine.TEXTURETYPE_xxx)
     * @returns the RGBA texture
     */ static CreateRGBATexture(data, width, height, depth, scene, generateMipMaps = true, invertY = false, samplingMode = 3, type = 0) {
        return new RawTexture2DArray(data, width, height, depth, 5, scene, generateMipMaps, invertY, samplingMode, type);
    }
} //# sourceMappingURL=rawTexture2DArray.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/colorGradingTexture.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ColorGradingTexture",
    ()=>ColorGradingTexture
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$baseTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/baseTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
;
;
;
class ColorGradingTexture extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$baseTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseTexture"] {
    /**
     * Instantiates a ColorGradingTexture from the following parameters.
     *
     * @param url The location of the color grading data (currently only supporting 3dl)
     * @param sceneOrEngine The scene or engine the texture will be used in
     * @param onLoad defines a callback triggered when the texture has been loaded
     */ constructor(url, sceneOrEngine, onLoad = null){
        super(sceneOrEngine);
        if (!url) {
            return;
        }
        this._textureMatrix = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].Identity();
        this.name = url;
        this.url = url;
        this._onLoad = onLoad;
        this._texture = this._getFromCache(url, true);
        if (!this._texture) {
            const scene = this.getScene();
            if (scene) {
                if (!scene.useDelayedTextureLoading) {
                    this._loadTexture();
                } else {
                    this.delayLoadState = 4;
                }
            } else {
                this._loadTexture();
            }
        } else {
            this._triggerOnLoad();
        }
    }
    /**
     * Fires the onload event from the constructor if requested.
     */ _triggerOnLoad() {
        if (this._onLoad) {
            this._onLoad();
        }
    }
    /**
     * @returns the texture matrix used in most of the material.
     * This is not used in color grading but keep for troubleshooting purpose (easily swap diffuse by colorgrading to look in).
     */ getTextureMatrix() {
        return this._textureMatrix;
    }
    /**
     * Occurs when the file being loaded is a .3dl LUT file.
     * @returns the 3D LUT texture
     */ _load3dlTexture() {
        const engine = this._getEngine();
        let texture;
        if (!engine._features.support3DTextures) {
            texture = engine.createRawTexture(null, 1, 1, 5, false, false, 2, null, 0);
        } else {
            texture = engine.createRawTexture3D(null, 1, 1, 1, 5, false, false, 2, null, 0);
        }
        this._texture = texture;
        this._texture.isReady = false;
        this.isCube = false;
        this.is3D = engine._features.support3DTextures;
        this.wrapU = 0;
        this.wrapV = 0;
        this.wrapR = 0;
        this.anisotropicFilteringLevel = 1;
        const callback = (text)=>{
            if (typeof text !== "string") {
                return;
            }
            let data = null;
            let tempData = null;
            let line;
            const lines = text.split("\n");
            let size = 0, pixelIndexW = 0, pixelIndexH = 0, pixelIndexSlice = 0;
            let maxColor = 0;
            for(let i = 0; i < lines.length; i++){
                line = lines[i];
                if (!ColorGradingTexture._NoneEmptyLineRegex.test(line)) {
                    continue;
                }
                if (line.indexOf("#") === 0) {
                    continue;
                }
                const words = line.split(" ");
                if (size === 0) {
                    // Number of space + one
                    size = words.length;
                    data = new Uint8Array(size * size * size * 4); // volume texture of side size and rgb 8
                    tempData = new Float32Array(size * size * size * 4);
                    continue;
                }
                if (size != 0) {
                    const r = Math.max(parseInt(words[0]), 0);
                    const g = Math.max(parseInt(words[1]), 0);
                    const b = Math.max(parseInt(words[2]), 0);
                    maxColor = Math.max(r, maxColor);
                    maxColor = Math.max(g, maxColor);
                    maxColor = Math.max(b, maxColor);
                    const pixelStorageIndex = (pixelIndexW + pixelIndexSlice * size + pixelIndexH * size * size) * 4;
                    if (tempData) {
                        tempData[pixelStorageIndex + 0] = r;
                        tempData[pixelStorageIndex + 1] = g;
                        tempData[pixelStorageIndex + 2] = b;
                    }
                    // Keep for reference in case of back compat problems.
                    // pixelIndexSlice++;
                    // if (pixelIndexSlice % size == 0) {
                    //     pixelIndexH++;
                    //     pixelIndexSlice = 0;
                    //     if (pixelIndexH % size == 0) {
                    //         pixelIndexW++;
                    //         pixelIndexH = 0;
                    //     }
                    // }
                    pixelIndexH++;
                    if (pixelIndexH % size == 0) {
                        pixelIndexSlice++;
                        pixelIndexH = 0;
                        if (pixelIndexSlice % size == 0) {
                            pixelIndexW++;
                            pixelIndexSlice = 0;
                        }
                    }
                }
            }
            if (tempData && data) {
                for(let i = 0; i < tempData.length; i++){
                    if (i > 0 && (i + 1) % 4 === 0) {
                        data[i] = 255;
                    } else {
                        const value = tempData[i];
                        data[i] = value / maxColor * 255;
                    }
                }
            }
            if (texture.is3D) {
                texture.updateSize(size, size, size);
                engine.updateRawTexture3D(texture, data, 5, false);
            } else {
                texture.updateSize(size * size, size);
                engine.updateRawTexture(texture, data, 5, false);
            }
            texture.isReady = true;
            this._triggerOnLoad();
        };
        const scene = this.getScene();
        if (scene) {
            scene._loadFile(this.url, callback);
        } else {
            engine._loadFile(this.url, callback);
        }
        return this._texture;
    }
    /**
     * Starts the loading process of the texture.
     */ _loadTexture() {
        if (this.url) {
            const url = this.url.toLocaleLowerCase();
            if (url.endsWith(".3dl") || url.startsWith("blob:")) {
                this._load3dlTexture();
            }
        }
    }
    /**
     * Clones the color grading texture.
     * @returns the cloned texture
     */ clone() {
        const newTexture = new ColorGradingTexture(this.url, this.getScene() || this._getEngine());
        // Base texture
        newTexture.level = this.level;
        return newTexture;
    }
    /**
     * Called during delayed load for textures.
     */ delayLoad() {
        if (this.delayLoadState !== 4) {
            return;
        }
        this.delayLoadState = 1;
        this._texture = this._getFromCache(this.url, true);
        if (!this._texture) {
            this._loadTexture();
        }
    }
    /**
     * Parses a color grading texture serialized by Babylon.
     * @param parsedTexture The texture information being parsedTexture
     * @param scene The scene to load the texture in
     * @returns A color grading texture
     */ static Parse(parsedTexture, scene) {
        let texture = null;
        if (parsedTexture.name && !parsedTexture.isRenderTarget) {
            texture = new ColorGradingTexture(parsedTexture.name, scene);
            texture.name = parsedTexture.name;
            texture.level = parsedTexture.level;
        }
        return texture;
    }
    /**
     * Serializes the LUT texture to json format.
     * @returns The JSON representation of the texture
     */ serialize() {
        if (!this.name) {
            return null;
        }
        const serializationObject = {};
        serializationObject.name = this.name;
        serializationObject.level = this.level;
        serializationObject.customType = "BABYLON.ColorGradingTexture";
        return serializationObject;
    }
}
/**
 * Empty line regex stored for GC.
 */ ColorGradingTexture._NoneEmptyLineRegex = /\S+/;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.ColorGradingTexture", ColorGradingTexture); //# sourceMappingURL=colorGradingTexture.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/equiRectangularCubeTexture.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EquiRectangularCubeTexture",
    ()=>EquiRectangularCubeTexture
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$HighDynamicRange$2f$panoramaToCubemap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/HighDynamicRange/panoramaToCubemap.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$baseTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/baseTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/texture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/tools.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$fileTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/fileTools.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$domManagement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/domManagement.js [app-client] (ecmascript)");
;
;
;
;
;
;
class EquiRectangularCubeTexture extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$baseTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseTexture"] {
    /**
     * Instantiates an EquiRectangularCubeTexture from the following parameters.
     * @param url The location of the image
     * @param scene The scene the texture will be used in
     * @param size The cubemap desired size (the more it increases the longer the generation will be)
     * @param noMipmap Forces to not generate the mipmap if true
     * @param gammaSpace Specifies if the texture will be used in gamma or linear space
     * (the PBR material requires those textures in linear space, but the standard material would require them in Gamma space)
     * @param onLoad — defines a callback called when texture is loaded
     * @param onError — defines a callback called if there is an error
     * @param supersample — defines if texture must be supersampled (default: false)
     */ constructor(url, scene, size, noMipmap = false, gammaSpace = true, onLoad = null, onError = null, supersample = false){
        super(scene);
        this._onLoad = null;
        this._onError = null;
        if (!url) {
            throw new Error("Image url is not set");
        }
        this._coordinatesMode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"].CUBIC_MODE;
        this.name = url;
        this.url = url;
        this._size = size;
        this._supersample = supersample;
        this._noMipmap = noMipmap;
        this.gammaSpace = gammaSpace;
        this._onLoad = onLoad;
        this._onError = onError;
        this.hasAlpha = false;
        this.isCube = true;
        this._texture = this._getFromCache(url, this._noMipmap, undefined, undefined, undefined, this.isCube);
        if (!this._texture) {
            if (!scene.useDelayedTextureLoading) {
                this._loadImage(()=>this._loadTexture(), this._onError);
            } else {
                this.delayLoadState = 4;
            }
        } else if (onLoad) {
            if (this._texture.isReady) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tools"].SetImmediate(()=>onLoad());
            } else {
                this._texture.onLoadedObservable.add(onLoad);
            }
        }
    }
    /**
     * Load the image data, by putting the image on a canvas and extracting its buffer.
     * @param loadTextureCallback
     * @param onError
     */ _loadImage(loadTextureCallback, onError) {
        const scene = this.getScene();
        if (!scene) {
            return;
        }
        // Create texture before loading
        const texture = scene.getEngine().createRawCubeTexture(null, this._size, 4, scene.getEngine().getCaps().textureFloat ? 1 : 7, !this._noMipmap, false, 3);
        texture.generateMipMaps = !this._noMipmap;
        scene.addPendingData(texture);
        texture.url = this.url;
        texture.isReady = false;
        scene.getEngine()._internalTexturesCache.push(texture);
        this._texture = texture;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$fileTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoadImage"])(this.url, (image)=>{
            this._width = image.width;
            this._height = image.height;
            let canvas;
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$domManagement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IsDocumentAvailable"])()) {
                canvas = document.createElement("canvas");
                canvas.width = this._width;
                canvas.height = this._height;
            } else {
                // Canvas is not available in the current environment
                canvas = new OffscreenCanvas(this._width, this._height);
            }
            const ctx = canvas.getContext("2d");
            ctx.drawImage(image, 0, 0);
            const imageData = ctx.getImageData(0, 0, image.width, image.height);
            this._buffer = imageData.data.buffer;
            if (canvas.remove) {
                canvas.remove();
            }
            loadTextureCallback();
        }, (_, e)=>{
            scene.removePendingData(texture);
            if (onError) {
                onError(`${this.getClassName()} could not be loaded`, e);
            }
        }, scene ? scene.offlineProvider : null);
    }
    /**
     * Convert the image buffer into a cubemap and create a CubeTexture.
     */ _loadTexture() {
        const scene = this.getScene();
        const callback = ()=>{
            const imageData = this._getFloat32ArrayFromArrayBuffer(this._buffer);
            // Extract the raw linear data.
            const data = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$HighDynamicRange$2f$panoramaToCubemap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PanoramaToCubeMapTools"].ConvertPanoramaToCubemap(imageData, this._width, this._height, this._size, this._supersample);
            const results = [];
            // Push each faces.
            for(let i = 0; i < 6; i++){
                const dataFace = data[EquiRectangularCubeTexture._FacesMapping[i]];
                results.push(dataFace);
            }
            return results;
        };
        if (!scene) {
            return;
        }
        const faceDataArrays = callback();
        const texture = this._texture;
        scene.getEngine().updateRawCubeTexture(texture, faceDataArrays, texture.format, texture.type, texture.invertY);
        texture.isReady = true;
        scene.removePendingData(texture);
        texture.onLoadedObservable.notifyObservers(texture);
        texture.onLoadedObservable.clear();
        if (this._onLoad) {
            this._onLoad();
        }
    }
    /**
     * Convert the ArrayBuffer into a Float32Array and drop the transparency channel.
     * @param buffer The ArrayBuffer that should be converted.
     * @returns The buffer as Float32Array.
     */ _getFloat32ArrayFromArrayBuffer(buffer) {
        const dataView = new DataView(buffer);
        const floatImageData = new Float32Array(buffer.byteLength * 3 / 4);
        let k = 0;
        for(let i = 0; i < buffer.byteLength; i++){
            // We drop the transparency channel, because we do not need/want it
            if ((i + 1) % 4 !== 0) {
                floatImageData[k++] = dataView.getUint8(i) / 255;
            }
        }
        return floatImageData;
    }
    /**
     * Get the current class name of the texture useful for serialization or dynamic coding.
     * @returns "EquiRectangularCubeTexture"
     */ getClassName() {
        return "EquiRectangularCubeTexture";
    }
    /**
     * Create a clone of the current EquiRectangularCubeTexture and return it.
     * @returns A clone of the current EquiRectangularCubeTexture.
     */ clone() {
        const scene = this.getScene();
        if (!scene) {
            return this;
        }
        const newTexture = new EquiRectangularCubeTexture(this.url, scene, this._size, this._noMipmap, this.gammaSpace);
        // Base texture
        newTexture.level = this.level;
        newTexture.wrapU = this.wrapU;
        newTexture.wrapV = this.wrapV;
        newTexture.coordinatesIndex = this.coordinatesIndex;
        newTexture.coordinatesMode = this.coordinatesMode;
        return newTexture;
    }
}
/** The six faces of the cube. */ EquiRectangularCubeTexture._FacesMapping = [
    "right",
    "left",
    "up",
    "down",
    "front",
    "back"
]; //# sourceMappingURL=equiRectangularCubeTexture.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Loaders/EXR/exrLoader.interfaces.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BITMAP_SIZE",
    ()=>BITMAP_SIZE,
    "FLOAT32_SIZE",
    ()=>FLOAT32_SIZE,
    "HUF_DECBITS",
    ()=>HUF_DECBITS,
    "HUF_DECMASK",
    ()=>HUF_DECMASK,
    "HUF_DECSIZE",
    ()=>HUF_DECSIZE,
    "HUF_ENCBITS",
    ()=>HUF_ENCBITS,
    "HUF_ENCSIZE",
    ()=>HUF_ENCSIZE,
    "INT16_SIZE",
    ()=>INT16_SIZE,
    "INT32_SIZE",
    ()=>INT32_SIZE,
    "INT8_SIZE",
    ()=>INT8_SIZE,
    "LONG_ZEROCODE_RUN",
    ()=>LONG_ZEROCODE_RUN,
    "SHORTEST_LONG_RUN",
    ()=>SHORTEST_LONG_RUN,
    "SHORT_ZEROCODE_RUN",
    ()=>SHORT_ZEROCODE_RUN,
    "ULONG_SIZE",
    ()=>ULONG_SIZE,
    "USHORT_RANGE",
    ()=>USHORT_RANGE
]);
const INT32_SIZE = 4;
const FLOAT32_SIZE = 4;
const INT8_SIZE = 1;
const INT16_SIZE = 2;
const ULONG_SIZE = 8;
const USHORT_RANGE = 1 << 16;
const BITMAP_SIZE = USHORT_RANGE >> 3;
const HUF_ENCBITS = 16;
const HUF_DECBITS = 14;
const HUF_ENCSIZE = (1 << HUF_ENCBITS) + 1;
const HUF_DECSIZE = 1 << HUF_DECBITS;
const HUF_DECMASK = HUF_DECSIZE - 1;
const SHORT_ZEROCODE_RUN = 59;
const LONG_ZEROCODE_RUN = 63;
const SHORTEST_LONG_RUN = 2 + LONG_ZEROCODE_RUN - SHORT_ZEROCODE_RUN; //# sourceMappingURL=exrLoader.interfaces.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Loaders/EXR/exrLoader.core.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CompressionCodes",
    ()=>CompressionCodes,
    "DecodeFloat32",
    ()=>DecodeFloat32,
    "InterleaveScalar",
    ()=>InterleaveScalar,
    "ParseFloat16",
    ()=>ParseFloat16,
    "ParseFloat32",
    ()=>ParseFloat32,
    "ParseInt32",
    ()=>ParseInt32,
    "ParseInt64",
    ()=>ParseInt64,
    "ParseNullTerminatedString",
    ()=>ParseNullTerminatedString,
    "ParseUint16",
    ()=>ParseUint16,
    "ParseUint32",
    ()=>ParseUint32,
    "ParseUint8",
    ()=>ParseUint8,
    "ParseUint8Array",
    ()=>ParseUint8Array,
    "ParseValue",
    ()=>ParseValue,
    "Predictor",
    ()=>Predictor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.scalar.functions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$interfaces$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Loaders/EXR/exrLoader.interfaces.js [app-client] (ecmascript)");
;
;
var CompressionCodes;
(function(CompressionCodes) {
    CompressionCodes[CompressionCodes["NO_COMPRESSION"] = 0] = "NO_COMPRESSION";
    CompressionCodes[CompressionCodes["RLE_COMPRESSION"] = 1] = "RLE_COMPRESSION";
    CompressionCodes[CompressionCodes["ZIPS_COMPRESSION"] = 2] = "ZIPS_COMPRESSION";
    CompressionCodes[CompressionCodes["ZIP_COMPRESSION"] = 3] = "ZIP_COMPRESSION";
    CompressionCodes[CompressionCodes["PIZ_COMPRESSION"] = 4] = "PIZ_COMPRESSION";
    CompressionCodes[CompressionCodes["PXR24_COMPRESSION"] = 5] = "PXR24_COMPRESSION";
})(CompressionCodes || (CompressionCodes = {}));
var LineOrders;
(function(LineOrders) {
    LineOrders[LineOrders["INCREASING_Y"] = 0] = "INCREASING_Y";
    LineOrders[LineOrders["DECREASING_Y"] = 1] = "DECREASING_Y";
})(LineOrders || (LineOrders = {}));
const Tables = GenerateTables();
// Fast Half Float Conversions, http://www.fox-toolkit.org/ftp/fasthalffloatconversion.pdf
function GenerateTables() {
    // float32 to float16 helpers
    const buffer = new ArrayBuffer(4);
    const floatView = new Float32Array(buffer);
    const uint32View = new Uint32Array(buffer);
    const baseTable = new Uint32Array(512);
    const shiftTable = new Uint32Array(512);
    for(let i = 0; i < 256; ++i){
        const e = i - 127;
        // very small number (0, -0)
        if (e < -27) {
            baseTable[i] = 0x0000;
            baseTable[i | 0x100] = 0x8000;
            shiftTable[i] = 24;
            shiftTable[i | 0x100] = 24;
        // small number (denorm)
        } else if (e < -14) {
            baseTable[i] = 0x0400 >> -e - 14;
            baseTable[i | 0x100] = 0x0400 >> -e - 14 | 0x8000;
            shiftTable[i] = -e - 1;
            shiftTable[i | 0x100] = -e - 1;
        // normal number
        } else if (e <= 15) {
            baseTable[i] = e + 15 << 10;
            baseTable[i | 0x100] = e + 15 << 10 | 0x8000;
            shiftTable[i] = 13;
            shiftTable[i | 0x100] = 13;
        // large number (Infinity, -Infinity)
        } else if (e < 128) {
            baseTable[i] = 0x7c00;
            baseTable[i | 0x100] = 0xfc00;
            shiftTable[i] = 24;
            shiftTable[i | 0x100] = 24;
        // stay (NaN, Infinity, -Infinity)
        } else {
            baseTable[i] = 0x7c00;
            baseTable[i | 0x100] = 0xfc00;
            shiftTable[i] = 13;
            shiftTable[i | 0x100] = 13;
        }
    }
    // float16 to float32 helpers
    const mantissaTable = new Uint32Array(2048);
    const exponentTable = new Uint32Array(64);
    const offsetTable = new Uint32Array(64);
    for(let i = 1; i < 1024; ++i){
        let m = i << 13; // zero pad mantissa bits
        let e = 0; // zero exponent
        // normalized
        while((m & 0x00800000) === 0){
            m <<= 1;
            e -= 0x00800000; // decrement exponent
        }
        m &= ~0x00800000; // clear leading 1 bit
        e += 0x38800000; // adjust bias
        mantissaTable[i] = m | e;
    }
    for(let i = 1024; i < 2048; ++i){
        mantissaTable[i] = 0x38000000 + (i - 1024 << 13);
    }
    for(let i = 1; i < 31; ++i){
        exponentTable[i] = i << 23;
    }
    exponentTable[31] = 0x47800000;
    exponentTable[32] = 0x80000000;
    for(let i = 33; i < 63; ++i){
        exponentTable[i] = 0x80000000 + (i - 32 << 23);
    }
    exponentTable[63] = 0xc7800000;
    for(let i = 1; i < 64; ++i){
        if (i !== 32) {
            offsetTable[i] = 1024;
        }
    }
    return {
        floatView: floatView,
        uint32View: uint32View,
        baseTable: baseTable,
        shiftTable: shiftTable,
        mantissaTable: mantissaTable,
        exponentTable: exponentTable,
        offsetTable: offsetTable
    };
}
function ParseNullTerminatedString(buffer, offset) {
    const uintBuffer = new Uint8Array(buffer);
    let endOffset = 0;
    while(uintBuffer[offset.value + endOffset] != 0){
        endOffset += 1;
    }
    const stringValue = new TextDecoder().decode(uintBuffer.slice(offset.value, offset.value + endOffset));
    offset.value = offset.value + endOffset + 1;
    return stringValue;
}
function ParseInt32(dataView, offset) {
    const value = dataView.getInt32(offset.value, true);
    offset.value += __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$interfaces$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INT32_SIZE"];
    return value;
}
function ParseUint32(dataView, offset) {
    const value = dataView.getUint32(offset.value, true);
    offset.value += __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$interfaces$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INT32_SIZE"];
    return value;
}
function ParseUint8(dataView, offset) {
    const value = dataView.getUint8(offset.value);
    offset.value += __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$interfaces$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INT8_SIZE"];
    return value;
}
function ParseUint16(dataView, offset) {
    const value = dataView.getUint16(offset.value, true);
    offset.value += __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$interfaces$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INT16_SIZE"];
    return value;
}
function ParseUint8Array(array, offset) {
    const value = array[offset.value];
    offset.value += __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$interfaces$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INT8_SIZE"];
    return value;
}
function ParseInt64(dataView, offset) {
    let int;
    if ("getBigInt64" in DataView.prototype) {
        int = Number(dataView.getBigInt64(offset.value, true));
    } else {
        int = dataView.getUint32(offset.value + 4, true) + Number(dataView.getUint32(offset.value, true) << 32);
    }
    offset.value += __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$interfaces$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ULONG_SIZE"];
    return int;
}
function ParseFloat32(dataView, offset) {
    const value = dataView.getFloat32(offset.value, true);
    offset.value += __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$interfaces$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FLOAT32_SIZE"];
    return value;
}
function ParseFloat16(dataView, offset) {
    return DecodeFloat16(ParseUint16(dataView, offset));
}
function DecodeFloat16(binary) {
    const exponent = (binary & 0x7c00) >> 10;
    const fraction = binary & 0x03ff;
    return (binary >> 15 ? -1 : 1) * (exponent ? exponent === 0x1f ? fraction ? NaN : Infinity : Math.pow(2, exponent - 15) * (1 + fraction / 0x400) : 6.103515625e-5 * (fraction / 0x400));
}
function ToHalfFloat(value) {
    if (Math.abs(value) > 65504) {
        throw new Error("Value out of range.Consider using float instead of half-float.");
    }
    value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Clamp"])(value, -65504, 65504);
    Tables.floatView[0] = value;
    const f = Tables.uint32View[0];
    const e = f >> 23 & 0x1ff;
    return Tables.baseTable[e] + ((f & 0x007fffff) >> Tables.shiftTable[e]);
}
function DecodeFloat32(dataView, offset) {
    return ToHalfFloat(ParseFloat32(dataView, offset));
}
function ParseFixedLengthString(buffer, offset, size) {
    const stringValue = new TextDecoder().decode(new Uint8Array(buffer).slice(offset.value, offset.value + size));
    offset.value = offset.value + size;
    return stringValue;
}
function ParseRational(dataView, offset) {
    const x = ParseInt32(dataView, offset);
    const y = ParseUint32(dataView, offset);
    return [
        x,
        y
    ];
}
function ParseTimecode(dataView, offset) {
    const x = ParseUint32(dataView, offset);
    const y = ParseUint32(dataView, offset);
    return [
        x,
        y
    ];
}
function ParseV2f(dataView, offset) {
    const x = ParseFloat32(dataView, offset);
    const y = ParseFloat32(dataView, offset);
    return [
        x,
        y
    ];
}
function ParseV3f(dataView, offset) {
    const x = ParseFloat32(dataView, offset);
    const y = ParseFloat32(dataView, offset);
    const z = ParseFloat32(dataView, offset);
    return [
        x,
        y,
        z
    ];
}
function ParseChlist(dataView, offset, size) {
    const startOffset = offset.value;
    const channels = [];
    while(offset.value < startOffset + size - 1){
        const name = ParseNullTerminatedString(dataView.buffer, offset);
        const pixelType = ParseInt32(dataView, offset);
        const pLinear = ParseUint8(dataView, offset);
        offset.value += 3; // reserved, three chars
        const xSampling = ParseInt32(dataView, offset);
        const ySampling = ParseInt32(dataView, offset);
        channels.push({
            name: name,
            pixelType: pixelType,
            pLinear: pLinear,
            xSampling: xSampling,
            ySampling: ySampling
        });
    }
    offset.value += 1;
    return channels;
}
function ParseChromaticities(dataView, offset) {
    const redX = ParseFloat32(dataView, offset);
    const redY = ParseFloat32(dataView, offset);
    const greenX = ParseFloat32(dataView, offset);
    const greenY = ParseFloat32(dataView, offset);
    const blueX = ParseFloat32(dataView, offset);
    const blueY = ParseFloat32(dataView, offset);
    const whiteX = ParseFloat32(dataView, offset);
    const whiteY = ParseFloat32(dataView, offset);
    return {
        redX: redX,
        redY: redY,
        greenX: greenX,
        greenY: greenY,
        blueX: blueX,
        blueY: blueY,
        whiteX: whiteX,
        whiteY: whiteY
    };
}
function ParseCompression(dataView, offset) {
    return ParseUint8(dataView, offset);
}
function ParseBox2i(dataView, offset) {
    const xMin = ParseInt32(dataView, offset);
    const yMin = ParseInt32(dataView, offset);
    const xMax = ParseInt32(dataView, offset);
    const yMax = ParseInt32(dataView, offset);
    return {
        xMin: xMin,
        yMin: yMin,
        xMax: xMax,
        yMax: yMax
    };
}
function ParseLineOrder(dataView, offset) {
    const lineOrder = ParseUint8(dataView, offset);
    return LineOrders[lineOrder];
}
function ParseValue(dataView, offset, type, size) {
    switch(type){
        case "string":
        case "stringvector":
        case "iccProfile":
            return ParseFixedLengthString(dataView.buffer, offset, size);
        case "chlist":
            return ParseChlist(dataView, offset, size);
        case "chromaticities":
            return ParseChromaticities(dataView, offset);
        case "compression":
            return ParseCompression(dataView, offset);
        case "box2i":
            return ParseBox2i(dataView, offset);
        case "lineOrder":
            return ParseLineOrder(dataView, offset);
        case "float":
            return ParseFloat32(dataView, offset);
        case "v2f":
            return ParseV2f(dataView, offset);
        case "v3f":
            return ParseV3f(dataView, offset);
        case "int":
            return ParseInt32(dataView, offset);
        case "rational":
            return ParseRational(dataView, offset);
        case "timecode":
            return ParseTimecode(dataView, offset);
        case "preview":
            offset.value += size;
            return "skipped";
        default:
            offset.value += size;
            return undefined;
    }
}
function Predictor(source) {
    for(let t = 1; t < source.length; t++){
        const d = source[t - 1] + source[t] - 128;
        source[t] = d;
    }
}
function InterleaveScalar(source, out) {
    let t1 = 0;
    let t2 = Math.floor((source.length + 1) / 2);
    let s = 0;
    const stop = source.length - 1;
    // eslint-disable-next-line no-constant-condition
    while(true){
        if (s > stop) {
            break;
        }
        out[s++] = source[t1++];
        if (s > stop) {
            break;
        }
        out[s++] = source[t2++];
    }
} //# sourceMappingURL=exrLoader.core.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Loaders/EXR/exrLoader.header.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/naming-convention */ __turbopack_context__.s([
    "GetExrHeader",
    ()=>GetExrHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Loaders/EXR/exrLoader.core.js [app-client] (ecmascript)");
;
;
/**
 * Inspired by https://github.com/sciecode/three.js/blob/dev/examples/jsm/loaders/EXRLoader.js
 * Referred to the original Industrial Light & Magic OpenEXR implementation and the TinyEXR / Syoyo Fujita
 * implementation.
 */ // /*
// Copyright (c) 2014 - 2017, Syoyo Fujita
// All rights reserved.
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Syoyo Fujita nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
// ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
// WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
// DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
// DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
// (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
// LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
// ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
// SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
// */
// // TinyEXR contains some OpenEXR code, which is licensed under ------------
// ///////////////////////////////////////////////////////////////////////////
// //
// // Copyright (c) 2002, Industrial Light & Magic, a division of Lucas
// // Digital Ltd. LLC
// //
// // All rights reserved.
// //
// // Redistribution and use in source and binary forms, with or without
// // modification, are permitted provided that the following conditions are
// // met:
// // *       Redistributions of source code must retain the above copyright
// // notice, this list of conditions and the following disclaimer.
// // *       Redistributions in binary form must reproduce the above
// // copyright notice, this list of conditions and the following disclaimer
// // in the documentation and/or other materials provided with the
// // distribution.
// // *       Neither the name of Industrial Light & Magic nor the names of
// // its contributors may be used to endorse or promote products derived
// // from this software without specific prior written permission.
// //
// // THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// // "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// // LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// // A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// // OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// // SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// // LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// // DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// // THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// // (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// // OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
// //
// ///////////////////////////////////////////////////////////////////////////
// // End of OpenEXR license -------------------------------------------------
const EXR_MAGIC = 20000630;
function GetExrHeader(dataView, offset) {
    if (dataView.getUint32(0, true) != EXR_MAGIC) {
        throw new Error("Incorrect OpenEXR format");
    }
    const version = dataView.getUint8(4);
    const specData = dataView.getUint8(5); // fullMask
    const spec = {
        singleTile: !!(specData & 2),
        longName: !!(specData & 4),
        deepFormat: !!(specData & 8),
        multiPart: !!(specData & 16)
    };
    offset.value = 8;
    const headerData = {};
    let keepReading = true;
    while(keepReading){
        const attributeName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParseNullTerminatedString"])(dataView.buffer, offset);
        if (!attributeName) {
            keepReading = false;
        } else {
            const attributeType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParseNullTerminatedString"])(dataView.buffer, offset);
            const attributeSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParseUint32"])(dataView, offset);
            const attributeValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParseValue"])(dataView, offset, attributeType, attributeSize);
            if (attributeValue === undefined) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Warn(`Unknown header attribute type ${attributeType}'.`);
            } else {
                headerData[attributeName] = attributeValue;
            }
        }
    }
    if ((specData & ~0x04) != 0) {
        throw new Error("Unsupported file format");
    }
    return {
        version: version,
        spec: spec,
        ...headerData
    };
} //# sourceMappingURL=exrLoader.header.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Loaders/EXR/exrLoader.compression.huf.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ApplyLut",
    ()=>ApplyLut,
    "HufUncompress",
    ()=>HufUncompress,
    "ReverseLutFromBitmap",
    ()=>ReverseLutFromBitmap,
    "Wav2Decode",
    ()=>Wav2Decode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Loaders/EXR/exrLoader.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$interfaces$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Loaders/EXR/exrLoader.interfaces.js [app-client] (ecmascript)");
;
;
/**
 * Inspired by https://github.com/sciecode/three.js/blob/dev/examples/jsm/loaders/EXRLoader.js
 * Referred to the original Industrial Light & Magic OpenEXR implementation and the TinyEXR / Syoyo Fujita
 * implementation.
 */ // /*
// Copyright (c) 2014 - 2017, Syoyo Fujita
// All rights reserved.
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Syoyo Fujita nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
// ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
// WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
// DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
// DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
// (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
// LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
// ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
// SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
// */
// // TinyEXR contains some OpenEXR code, which is licensed under ------------
// ///////////////////////////////////////////////////////////////////////////
// //
// // Copyright (c) 2002, Industrial Light & Magic, a division of Lucas
// // Digital Ltd. LLC
// //
// // All rights reserved.
// //
// // Redistribution and use in source and binary forms, with or without
// // modification, are permitted provided that the following conditions are
// // met:
// // *       Redistributions of source code must retain the above copyright
// // notice, this list of conditions and the following disclaimer.
// // *       Redistributions in binary form must reproduce the above
// // copyright notice, this list of conditions and the following disclaimer
// // in the documentation and/or other materials provided with the
// // distribution.
// // *       Neither the name of Industrial Light & Magic nor the names of
// // its contributors may be used to endorse or promote products derived
// // from this software without specific prior written permission.
// //
// // THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// // "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// // LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// // A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// // OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// // SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// // LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// // DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// // THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// // (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// // OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
// //
// ///////////////////////////////////////////////////////////////////////////
// // End of OpenEXR license -------------------------------------------------
const NBITS = 16;
const A_OFFSET = 1 << NBITS - 1;
const MOD_MASK = (1 << NBITS) - 1;
function ReverseLutFromBitmap(bitmap, lut) {
    let k = 0;
    for(let i = 0; i < __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$interfaces$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["USHORT_RANGE"]; ++i){
        if (i == 0 || bitmap[i >> 3] & 1 << (i & 7)) {
            lut[k++] = i;
        }
    }
    const n = k - 1;
    while(k < __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$interfaces$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["USHORT_RANGE"]){
        lut[k++] = 0;
    }
    return n;
}
function HufClearDecTable(hdec) {
    for(let i = 0; i < __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$interfaces$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HUF_DECSIZE"]; i++){
        hdec[i] = {};
        hdec[i].len = 0;
        hdec[i].lit = 0;
        hdec[i].p = null;
    }
}
function GetBits(nBits, c, lc, array, offset) {
    while(lc < nBits){
        c = c << 8 | (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParseUint8Array"])(array, offset);
        lc += 8;
    }
    lc -= nBits;
    return {
        l: c >> lc & (1 << nBits) - 1,
        c,
        lc
    };
}
function GetChar(c, lc, array, offset) {
    c = c << 8 | (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParseUint8Array"])(array, offset);
    lc += 8;
    return {
        c,
        lc
    };
}
function GetCode(po, rlc, c, lc, array, offset, outBuffer, outBufferOffset, outBufferEndOffset) {
    if (po == rlc) {
        if (lc < 8) {
            const gc = GetChar(c, lc, array, offset);
            c = gc.c;
            lc = gc.lc;
        }
        lc -= 8;
        let cs = c >> lc;
        cs = new Uint8Array([
            cs
        ])[0];
        if (outBufferOffset.value + cs > outBufferEndOffset) {
            return null;
        }
        const s = outBuffer[outBufferOffset.value - 1];
        while(cs-- > 0){
            outBuffer[outBufferOffset.value++] = s;
        }
    } else if (outBufferOffset.value < outBufferEndOffset) {
        outBuffer[outBufferOffset.value++] = po;
    } else {
        return null;
    }
    return {
        c,
        lc
    };
}
const HufTableBuffer = new Array(59);
function HufCanonicalCodeTable(hcode) {
    for(let i = 0; i <= 58; ++i){
        HufTableBuffer[i] = 0;
    }
    for(let i = 0; i < __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$interfaces$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HUF_ENCSIZE"]; ++i){
        HufTableBuffer[hcode[i]] += 1;
    }
    let c = 0;
    for(let i = 58; i > 0; --i){
        const nc = c + HufTableBuffer[i] >> 1;
        HufTableBuffer[i] = c;
        c = nc;
    }
    for(let i = 0; i < __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$interfaces$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HUF_ENCSIZE"]; ++i){
        const l = hcode[i];
        if (l > 0) {
            hcode[i] = l | HufTableBuffer[l]++ << 6;
        }
    }
}
function HufUnpackEncTable(array, offset, ni, im, iM, hcode) {
    const p = offset;
    let c = 0;
    let lc = 0;
    for(; im <= iM; im++){
        if (p.value - offset.value > ni) {
            return;
        }
        let gb = GetBits(6, c, lc, array, p);
        const l = gb.l;
        c = gb.c;
        lc = gb.lc;
        hcode[im] = l;
        if (l == __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$interfaces$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LONG_ZEROCODE_RUN"]) {
            if (p.value - offset.value > ni) {
                throw new Error("Error in HufUnpackEncTable");
            }
            gb = GetBits(8, c, lc, array, p);
            let zerun = gb.l + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$interfaces$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHORTEST_LONG_RUN"];
            c = gb.c;
            lc = gb.lc;
            if (im + zerun > iM + 1) {
                throw new Error("Error in HufUnpackEncTable");
            }
            while(zerun--){
                hcode[im++] = 0;
            }
            im--;
        } else if (l >= __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$interfaces$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHORT_ZEROCODE_RUN"]) {
            let zerun = l - __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$interfaces$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHORT_ZEROCODE_RUN"] + 2;
            if (im + zerun > iM + 1) {
                throw new Error("Error in HufUnpackEncTable");
            }
            while(zerun--){
                hcode[im++] = 0;
            }
            im--;
        }
    }
    HufCanonicalCodeTable(hcode);
}
function HufLength(code) {
    return code & 63;
}
function HufCode(code) {
    return code >> 6;
}
function HufBuildDecTable(hcode, im, iM, hdecod) {
    for(; im <= iM; im++){
        const c = HufCode(hcode[im]);
        const l = HufLength(hcode[im]);
        if (c >> l) {
            throw new Error("Invalid table entry");
        }
        if (l > __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$interfaces$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HUF_DECBITS"]) {
            const pl = hdecod[c >> l - __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$interfaces$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HUF_DECBITS"]];
            if (pl.len) {
                throw new Error("Invalid table entry");
            }
            pl.lit++;
            if (pl.p) {
                const p = pl.p;
                pl.p = new Array(pl.lit);
                for(let i = 0; i < pl.lit - 1; ++i){
                    pl.p[i] = p[i];
                }
            } else {
                pl.p = new Array(1);
            }
            pl.p[pl.lit - 1] = im;
        } else if (l) {
            let plOffset = 0;
            for(let i = 1 << __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$interfaces$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HUF_DECBITS"] - l; i > 0; i--){
                const pl = hdecod[(c << __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$interfaces$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HUF_DECBITS"] - l) + plOffset];
                if (pl.len || pl.p) {
                    throw new Error("Invalid table entry");
                }
                pl.len = l;
                pl.lit = im;
                plOffset++;
            }
        }
    }
    return true;
}
function HufDecode(encodingTable, decodingTable, array, offset, ni, rlc, no, outBuffer, outOffset) {
    let c = 0;
    let lc = 0;
    const outBufferEndOffset = no;
    const inOffsetEnd = Math.trunc(offset.value + (ni + 7) / 8);
    while(offset.value < inOffsetEnd){
        let gc = GetChar(c, lc, array, offset);
        c = gc.c;
        lc = gc.lc;
        while(lc >= __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$interfaces$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HUF_DECBITS"]){
            const index = c >> lc - __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$interfaces$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HUF_DECBITS"] & __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$interfaces$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HUF_DECMASK"];
            const pl = decodingTable[index];
            if (pl.len) {
                lc -= pl.len;
                const gCode = GetCode(pl.lit, rlc, c, lc, array, offset, outBuffer, outOffset, outBufferEndOffset);
                if (gCode) {
                    c = gCode.c;
                    lc = gCode.lc;
                }
            } else {
                if (!pl.p) {
                    throw new Error("hufDecode issues");
                }
                let j;
                for(j = 0; j < pl.lit; j++){
                    const l = HufLength(encodingTable[pl.p[j]]);
                    while(lc < l && offset.value < inOffsetEnd){
                        gc = GetChar(c, lc, array, offset);
                        c = gc.c;
                        lc = gc.lc;
                    }
                    if (lc >= l) {
                        if (HufCode(encodingTable[pl.p[j]]) == (c >> lc - l & (1 << l) - 1)) {
                            lc -= l;
                            const gCode = GetCode(pl.p[j], rlc, c, lc, array, offset, outBuffer, outOffset, outBufferEndOffset);
                            if (gCode) {
                                c = gCode.c;
                                lc = gCode.lc;
                            }
                            break;
                        }
                    }
                }
                if (j == pl.lit) {
                    throw new Error("HufDecode issues");
                }
            }
        }
    }
    const i = 8 - ni & 7;
    c >>= i;
    lc -= i;
    while(lc > 0){
        const pl = decodingTable[c << __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$interfaces$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HUF_DECBITS"] - lc & __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$interfaces$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HUF_DECMASK"]];
        if (pl.len) {
            lc -= pl.len;
            const gCode = GetCode(pl.lit, rlc, c, lc, array, offset, outBuffer, outOffset, outBufferEndOffset);
            if (gCode) {
                c = gCode.c;
                lc = gCode.lc;
            }
        } else {
            throw new Error("HufDecode issues");
        }
    }
    return true;
}
function HufUncompress(array, dataView, offset, nCompressed, outBuffer, nRaw) {
    const outOffset = {
        value: 0
    };
    const initialInOffset = offset.value;
    const im = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParseUint32"])(dataView, offset);
    const iM = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParseUint32"])(dataView, offset);
    offset.value += 4;
    const nBits = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParseUint32"])(dataView, offset);
    offset.value += 4;
    if (im < 0 || im >= __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$interfaces$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HUF_ENCSIZE"] || iM < 0 || iM >= __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$interfaces$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HUF_ENCSIZE"]) {
        throw new Error("Wrong HUF_ENCSIZE");
    }
    const freq = new Array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$interfaces$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HUF_ENCSIZE"]);
    const hdec = new Array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$interfaces$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HUF_DECSIZE"]);
    HufClearDecTable(hdec);
    const ni = nCompressed - (offset.value - initialInOffset);
    HufUnpackEncTable(array, offset, ni, im, iM, freq);
    if (nBits > 8 * (nCompressed - (offset.value - initialInOffset))) {
        throw new Error("Wrong hufUncompress");
    }
    HufBuildDecTable(freq, im, iM, hdec);
    HufDecode(freq, hdec, array, offset, nBits, iM, nRaw, outBuffer, outOffset);
}
function UInt16(value) {
    return value & 0xffff;
}
function Int16(value) {
    const ref = UInt16(value);
    return ref > 0x7fff ? ref - 0x10000 : ref;
}
function Wdec14(l, h) {
    const ls = Int16(l);
    const hs = Int16(h);
    const hi = hs;
    const ai = ls + (hi & 1) + (hi >> 1);
    const as = ai;
    const bs = ai - hi;
    return {
        a: as,
        b: bs
    };
}
function Wdec16(l, h) {
    const m = UInt16(l);
    const d = UInt16(h);
    const bb = m - (d >> 1) & MOD_MASK;
    const aa = d + bb - A_OFFSET & MOD_MASK;
    return {
        a: aa,
        b: bb
    };
}
function Wav2Decode(buffer, j, nx, ox, ny, oy, mx) {
    const w14 = mx < 1 << 14;
    const n = nx > ny ? ny : nx;
    let p = 1;
    let p2;
    let py;
    while(p <= n){
        p <<= 1;
    }
    p >>= 1;
    p2 = p;
    p >>= 1;
    while(p >= 1){
        py = 0;
        const ey = py + oy * (ny - p2);
        const oy1 = oy * p;
        const oy2 = oy * p2;
        const ox1 = ox * p;
        const ox2 = ox * p2;
        let i00, i01, i10, i11;
        for(; py <= ey; py += oy2){
            let px = py;
            const ex = py + ox * (nx - p2);
            for(; px <= ex; px += ox2){
                const p01 = px + ox1;
                const p10 = px + oy1;
                const p11 = p10 + ox1;
                if (w14) {
                    let result = Wdec14(buffer[px + j], buffer[p10 + j]);
                    i00 = result.a;
                    i10 = result.b;
                    result = Wdec14(buffer[p01 + j], buffer[p11 + j]);
                    i01 = result.a;
                    i11 = result.b;
                    result = Wdec14(i00, i01);
                    buffer[px + j] = result.a;
                    buffer[p01 + j] = result.b;
                    result = Wdec14(i10, i11);
                    buffer[p10 + j] = result.a;
                    buffer[p11 + j] = result.b;
                } else {
                    let result = Wdec16(buffer[px + j], buffer[p10 + j]);
                    i00 = result.a;
                    i10 = result.b;
                    result = Wdec16(buffer[p01 + j], buffer[p11 + j]);
                    i01 = result.a;
                    i11 = result.b;
                    result = Wdec16(i00, i01);
                    buffer[px + j] = result.a;
                    buffer[p01 + j] = result.b;
                    result = Wdec16(i10, i11);
                    buffer[p10 + j] = result.a;
                    buffer[p11 + j] = result.b;
                }
            }
            if (nx & p) {
                const p10 = px + oy1;
                let result;
                if (w14) {
                    result = Wdec14(buffer[px + j], buffer[p10 + j]);
                } else {
                    result = Wdec16(buffer[px + j], buffer[p10 + j]);
                }
                i00 = result.a;
                buffer[p10 + j] = result.b;
                buffer[px + j] = i00;
            }
        }
        if (ny & p) {
            let px = py;
            const ex = py + ox * (nx - p2);
            for(; px <= ex; px += ox2){
                const p01 = px + ox1;
                let result;
                if (w14) {
                    result = Wdec14(buffer[px + j], buffer[p01 + j]);
                } else {
                    result = Wdec16(buffer[px + j], buffer[p01 + j]);
                }
                i00 = result.a;
                buffer[p01 + j] = result.b;
                buffer[px + j] = i00;
            }
        }
        p2 = p;
        p >>= 1;
    }
    return py;
}
function ApplyLut(lut, data, nData) {
    for(let i = 0; i < nData; ++i){
        data[i] = lut[data[i]];
    }
} //# sourceMappingURL=exrLoader.compression.huf.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Loaders/EXR/exrLoader.compression.rle.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Inspired by https://github.com/sciecode/three.js/blob/dev/examples/jsm/loaders/EXRLoader.js
 * Referred to the original Industrial Light & Magic OpenEXR implementation and the TinyEXR / Syoyo Fujita
 * implementation.
 */ // /*
// Copyright (c) 2014 - 2017, Syoyo Fujita
// All rights reserved.
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Syoyo Fujita nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
// ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
// WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
// DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
// DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
// (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
// LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
// ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
// SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
// */
// // TinyEXR contains some OpenEXR code, which is licensed under ------------
// ///////////////////////////////////////////////////////////////////////////
// //
// // Copyright (c) 2002, Industrial Light & Magic, a division of Lucas
// // Digital Ltd. LLC
// //
// // All rights reserved.
// //
// // Redistribution and use in source and binary forms, with or without
// // modification, are permitted provided that the following conditions are
// // met:
// // *       Redistributions of source code must retain the above copyright
// // notice, this list of conditions and the following disclaimer.
// // *       Redistributions in binary form must reproduce the above
// // copyright notice, this list of conditions and the following disclaimer
// // in the documentation and/or other materials provided with the
// // distribution.
// // *       Neither the name of Industrial Light & Magic nor the names of
// // its contributors may be used to endorse or promote products derived
// // from this software without specific prior written permission.
// //
// // THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// // "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// // LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// // A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// // OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// // SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// // LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// // DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// // THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// // (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// // OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
// //
// ///////////////////////////////////////////////////////////////////////////
// // End of OpenEXR license -------------------------------------------------
/** @internal */ __turbopack_context__.s([
    "DecodeRunLength",
    ()=>DecodeRunLength
]);
function DecodeRunLength(source) {
    let size = source.byteLength;
    const out = [];
    let p = 0;
    const reader = new DataView(source);
    while(size > 0){
        const l = reader.getInt8(p++);
        if (l < 0) {
            const count = -l;
            size -= count + 1;
            for(let i = 0; i < count; i++){
                out.push(reader.getUint8(p++));
            }
        } else {
            const count = l;
            size -= 2;
            const value = reader.getUint8(p++);
            for(let i = 0; i < count + 1; i++){
                out.push(value);
            }
        }
    }
    return out;
} //# sourceMappingURL=exrLoader.compression.rle.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Loaders/EXR/exrLoader.compression.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UncompressPIZ",
    ()=>UncompressPIZ,
    "UncompressPXR",
    ()=>UncompressPXR,
    "UncompressRAW",
    ()=>UncompressRAW,
    "UncompressRLE",
    ()=>UncompressRLE,
    "UncompressZIP",
    ()=>UncompressZIP
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$compression$2e$huf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Loaders/EXR/exrLoader.compression.huf.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$compression$2e$rle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Loaders/EXR/exrLoader.compression.rle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Loaders/EXR/exrLoader.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$interfaces$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Loaders/EXR/exrLoader.interfaces.js [app-client] (ecmascript)");
;
;
;
;
function UncompressRAW(decoder) {
    return new DataView(decoder.array.buffer, decoder.offset.value, decoder.size);
}
function UncompressRLE(decoder) {
    const compressed = decoder.viewer.buffer.slice(decoder.offset.value, decoder.offset.value + decoder.size);
    const rawBuffer = new Uint8Array((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$compression$2e$rle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DecodeRunLength"])(compressed));
    const tmpBuffer = new Uint8Array(rawBuffer.length);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Predictor"])(rawBuffer);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InterleaveScalar"])(rawBuffer, tmpBuffer);
    return new DataView(tmpBuffer.buffer);
}
function UncompressZIP(decoder) {
    const compressed = decoder.array.slice(decoder.offset.value, decoder.offset.value + decoder.size);
    const rawBuffer = fflate.unzlibSync(compressed);
    const tmpBuffer = new Uint8Array(rawBuffer.length);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Predictor"])(rawBuffer);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InterleaveScalar"])(rawBuffer, tmpBuffer);
    return new DataView(tmpBuffer.buffer);
}
function UncompressPXR(decoder) {
    const compressed = decoder.array.slice(decoder.offset.value, decoder.offset.value + decoder.size);
    const rawBuffer = fflate.unzlibSync(compressed);
    const sz = decoder.lines * decoder.channels * decoder.width;
    const tmpBuffer = decoder.type == 1 ? new Uint16Array(sz) : new Uint32Array(sz);
    let tmpBufferEnd = 0;
    let writePtr = 0;
    const ptr = new Array(4);
    for(let y = 0; y < decoder.lines; y++){
        for(let c = 0; c < decoder.channels; c++){
            let pixel = 0;
            switch(decoder.type){
                case 1:
                    ptr[0] = tmpBufferEnd;
                    ptr[1] = ptr[0] + decoder.width;
                    tmpBufferEnd = ptr[1] + decoder.width;
                    for(let j = 0; j < decoder.width; ++j){
                        const diff = rawBuffer[ptr[0]++] << 8 | rawBuffer[ptr[1]++];
                        pixel += diff;
                        tmpBuffer[writePtr] = pixel;
                        writePtr++;
                    }
                    break;
                case 2:
                    ptr[0] = tmpBufferEnd;
                    ptr[1] = ptr[0] + decoder.width;
                    ptr[2] = ptr[1] + decoder.width;
                    tmpBufferEnd = ptr[2] + decoder.width;
                    for(let j = 0; j < decoder.width; ++j){
                        const diff = rawBuffer[ptr[0]++] << 24 | rawBuffer[ptr[1]++] << 16 | rawBuffer[ptr[2]++] << 8;
                        pixel += diff;
                        tmpBuffer[writePtr] = pixel;
                        writePtr++;
                    }
                    break;
            }
        }
    }
    return new DataView(tmpBuffer.buffer);
}
function UncompressPIZ(decoder) {
    const inDataView = decoder.viewer;
    const inOffset = {
        value: decoder.offset.value
    };
    const outBuffer = new Uint16Array(decoder.width * decoder.scanlineBlockSize * (decoder.channels * decoder.type));
    const bitmap = new Uint8Array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$interfaces$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BITMAP_SIZE"]);
    // Setup channel info
    let outBufferEnd = 0;
    const pizChannelData = new Array(decoder.channels);
    for(let i = 0; i < decoder.channels; i++){
        pizChannelData[i] = {};
        pizChannelData[i]["start"] = outBufferEnd;
        pizChannelData[i]["end"] = pizChannelData[i]["start"];
        pizChannelData[i]["nx"] = decoder.width;
        pizChannelData[i]["ny"] = decoder.lines;
        pizChannelData[i]["size"] = decoder.type;
        outBufferEnd += pizChannelData[i].nx * pizChannelData[i].ny * pizChannelData[i].size;
    }
    // Read range compression data
    const minNonZero = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParseUint16"])(inDataView, inOffset);
    const maxNonZero = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParseUint16"])(inDataView, inOffset);
    if (maxNonZero >= __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$interfaces$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BITMAP_SIZE"]) {
        throw new Error("Wrong PIZ_COMPRESSION BITMAP_SIZE");
    }
    if (minNonZero <= maxNonZero) {
        for(let i = 0; i < maxNonZero - minNonZero + 1; i++){
            bitmap[i + minNonZero] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParseUint8"])(inDataView, inOffset);
        }
    }
    // Reverse LUT
    const lut = new Uint16Array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$interfaces$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["USHORT_RANGE"]);
    const maxValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$compression$2e$huf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReverseLutFromBitmap"])(bitmap, lut);
    const length = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParseUint32"])(inDataView, inOffset);
    // Huffman decoding
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$compression$2e$huf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HufUncompress"])(decoder.array, inDataView, inOffset, length, outBuffer, outBufferEnd);
    // Wavelet decoding
    for(let i = 0; i < decoder.channels; ++i){
        const cd = pizChannelData[i];
        for(let j = 0; j < pizChannelData[i].size; ++j){
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$compression$2e$huf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Wav2Decode"])(outBuffer, cd.start + j, cd.nx, cd.size, cd.ny, cd.nx * cd.size, maxValue);
        }
    }
    // Expand the pixel data to their original range
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$compression$2e$huf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApplyLut"])(lut, outBuffer, outBufferEnd);
    // Rearrange the pixel data into the format expected by the caller.
    let tmpOffset = 0;
    const tmpBuffer = new Uint8Array(outBuffer.buffer.byteLength);
    for(let y = 0; y < decoder.lines; y++){
        for(let c = 0; c < decoder.channels; c++){
            const cd = pizChannelData[c];
            const n = cd.nx * cd.size;
            const cp = new Uint8Array(outBuffer.buffer, cd.end * __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$interfaces$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INT16_SIZE"], n * __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$interfaces$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INT16_SIZE"]);
            tmpBuffer.set(cp, tmpOffset);
            tmpOffset += n * __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$interfaces$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INT16_SIZE"];
            cd.end += n;
        }
    }
    return new DataView(tmpBuffer.buffer);
} //# sourceMappingURL=exrLoader.compression.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Loaders/EXR/exrLoader.configuration.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EXROutputType",
    ()=>EXROutputType,
    "ExrLoaderGlobalConfiguration",
    ()=>ExrLoaderGlobalConfiguration
]);
var EXROutputType;
(function(EXROutputType) {
    EXROutputType[EXROutputType["Float"] = 0] = "Float";
    EXROutputType[EXROutputType["HalfFloat"] = 1] = "HalfFloat";
})(EXROutputType || (EXROutputType = {}));
class ExrLoaderGlobalConfiguration {
}
/**
 * Defines the default output type to use (Half float by default)
 */ ExrLoaderGlobalConfiguration.DefaultOutputType = EXROutputType.HalfFloat;
/**
 * Url to use to load the fflate library (for zip decompression)
 */ // eslint-disable-next-line @typescript-eslint/naming-convention
ExrLoaderGlobalConfiguration.FFLATEUrl = "https://unpkg.com/fflate@0.8.2"; //# sourceMappingURL=exrLoader.configuration.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Loaders/EXR/exrLoader.decoder.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CreateDecoderAsync",
    ()=>CreateDecoderAsync,
    "ScanData",
    ()=>ScanData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Loaders/EXR/exrLoader.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$compression$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Loaders/EXR/exrLoader.compression.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$interfaces$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Loaders/EXR/exrLoader.interfaces.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/tools.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$configuration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Loaders/EXR/exrLoader.configuration.js [app-client] (ecmascript)");
;
;
;
;
;
async function CreateDecoderAsync(header, dataView, offset, outputType) {
    const decoder = {
        size: 0,
        viewer: dataView,
        array: new Uint8Array(dataView.buffer),
        offset: offset,
        width: header.dataWindow.xMax - header.dataWindow.xMin + 1,
        height: header.dataWindow.yMax - header.dataWindow.yMin + 1,
        channels: header.channels.length,
        channelLineOffsets: {},
        scanOrder: ()=>0,
        bytesPerLine: 0,
        outLineWidth: 0,
        lines: 0,
        scanlineBlockSize: 0,
        inputSize: null,
        type: 0,
        uncompress: null,
        getter: ()=>0,
        format: 5,
        outputChannels: 0,
        decodeChannels: {},
        blockCount: null,
        byteArray: null,
        linearSpace: false,
        textureType: 0
    };
    switch(header.compression){
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CompressionCodes"].NO_COMPRESSION:
            decoder.lines = 1;
            decoder.uncompress = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$compression$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UncompressRAW"];
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CompressionCodes"].RLE_COMPRESSION:
            decoder.lines = 1;
            decoder.uncompress = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$compression$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UncompressRLE"];
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CompressionCodes"].ZIPS_COMPRESSION:
            decoder.lines = 1;
            decoder.uncompress = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$compression$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UncompressZIP"];
            await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tools"].LoadScriptAsync(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$configuration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExrLoaderGlobalConfiguration"].FFLATEUrl);
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CompressionCodes"].ZIP_COMPRESSION:
            decoder.lines = 16;
            decoder.uncompress = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$compression$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UncompressZIP"];
            await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tools"].LoadScriptAsync(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$configuration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExrLoaderGlobalConfiguration"].FFLATEUrl);
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CompressionCodes"].PIZ_COMPRESSION:
            decoder.lines = 32;
            decoder.uncompress = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$compression$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UncompressPIZ"];
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CompressionCodes"].PXR24_COMPRESSION:
            decoder.lines = 16;
            decoder.uncompress = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$compression$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UncompressPXR"];
            await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tools"].LoadScriptAsync(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$configuration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExrLoaderGlobalConfiguration"].FFLATEUrl);
            break;
        default:
            throw new Error(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CompressionCodes"][header.compression] + " is unsupported");
    }
    decoder.scanlineBlockSize = decoder.lines;
    const channels = {};
    for (const channel of header.channels){
        switch(channel.name){
            case "R":
            case "G":
            case "B":
            case "A":
                channels[channel.name] = true;
                decoder.type = channel.pixelType;
                break;
            case "Y":
                channels[channel.name] = true;
                decoder.type = channel.pixelType;
                break;
            default:
                break;
        }
    }
    // RGB images will be converted to RGBA format, preventing software emulation in select devices.
    let fillAlpha = false;
    if (channels.R && channels.G && channels.B && channels.A) {
        decoder.outputChannels = 4;
        decoder.decodeChannels = {
            R: 0,
            G: 1,
            B: 2,
            A: 3
        };
    } else if (channels.R && channels.G && channels.B) {
        fillAlpha = true;
        decoder.outputChannels = 4;
        decoder.decodeChannels = {
            R: 0,
            G: 1,
            B: 2,
            A: 3
        };
    } else if (channels.R && channels.G) {
        decoder.outputChannels = 2;
        decoder.decodeChannels = {
            R: 0,
            G: 1
        };
    } else if (channels.R) {
        decoder.outputChannels = 1;
        decoder.decodeChannels = {
            R: 0
        };
    } else if (channels.Y) {
        decoder.outputChannels = 1;
        decoder.decodeChannels = {
            Y: 0
        };
    // Note: Supporting 'Y' channel for legacy compatibility; prefer 'R' in new EXRs.
    } else {
        throw new Error("EXRLoader.parse: file contains unsupported data channels.");
    }
    if (decoder.type === 1) {
        // half
        switch(outputType){
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$configuration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EXROutputType"].Float:
                decoder.getter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParseFloat16"];
                decoder.inputSize = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$interfaces$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INT16_SIZE"];
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$configuration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EXROutputType"].HalfFloat:
                decoder.getter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParseUint16"];
                decoder.inputSize = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$interfaces$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INT16_SIZE"];
                break;
        }
    } else if (decoder.type === 2) {
        // float
        switch(outputType){
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$configuration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EXROutputType"].Float:
                decoder.getter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParseFloat32"];
                decoder.inputSize = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$interfaces$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FLOAT32_SIZE"];
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$configuration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EXROutputType"].HalfFloat:
                decoder.getter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DecodeFloat32"];
                decoder.inputSize = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$interfaces$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FLOAT32_SIZE"];
        }
    } else {
        throw new Error("Unsupported pixelType " + decoder.type + " for " + header.compression);
    }
    decoder.blockCount = decoder.height / decoder.scanlineBlockSize;
    for(let i = 0; i < decoder.blockCount; i++){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParseInt64"])(dataView, offset); // scanlineOffset
    }
    // we should be passed the scanline offset table, ready to start reading pixel data.
    const size = decoder.width * decoder.height * decoder.outputChannels;
    switch(outputType){
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$configuration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EXROutputType"].Float:
            decoder.byteArray = new Float32Array(size);
            decoder.textureType = 1;
            // Fill initially with 1s for the alpha value if the texture is not RGBA, RGB values will be overwritten
            if (fillAlpha) {
                decoder.byteArray.fill(1, 0, size);
            }
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$configuration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EXROutputType"].HalfFloat:
            decoder.byteArray = new Uint16Array(size);
            decoder.textureType = 2;
            if (fillAlpha) {
                decoder.byteArray.fill(0x3c00, 0, size); // Uint16Array holds half float data, 0x3C00 is 1
            }
            break;
        default:
            throw new Error("Unsupported type: " + outputType);
    }
    let byteOffset = 0;
    for (const channel of header.channels){
        if (decoder.decodeChannels[channel.name] !== undefined) {
            decoder.channelLineOffsets[channel.name] = byteOffset * decoder.width;
        }
        byteOffset += channel.pixelType * 2;
    }
    decoder.bytesPerLine = decoder.width * byteOffset;
    decoder.outLineWidth = decoder.width * decoder.outputChannels;
    if (header.lineOrder === "INCREASING_Y") {
        decoder.scanOrder = (y)=>y;
    } else {
        decoder.scanOrder = (y)=>decoder.height - 1 - y;
    }
    if (decoder.outputChannels == 4) {
        decoder.format = 5;
        decoder.linearSpace = true;
    } else {
        decoder.format = 6;
        decoder.linearSpace = false;
    }
    return decoder;
}
function ScanData(decoder, header, dataView, offset) {
    const tmpOffset = {
        value: 0
    };
    for(let scanlineBlockIdx = 0; scanlineBlockIdx < decoder.height / decoder.scanlineBlockSize; scanlineBlockIdx++){
        const line = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParseInt32"])(dataView, offset) - header.dataWindow.yMin; // line_no
        decoder.size = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParseUint32"])(dataView, offset); // data_len
        decoder.lines = line + decoder.scanlineBlockSize > decoder.height ? decoder.height - line : decoder.scanlineBlockSize;
        const isCompressed = decoder.size < decoder.lines * decoder.bytesPerLine;
        const viewer = isCompressed && decoder.uncompress ? decoder.uncompress(decoder) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$compression$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UncompressRAW"])(decoder);
        offset.value += decoder.size;
        for(let lineY = 0; lineY < decoder.scanlineBlockSize; lineY++){
            const scanY = scanlineBlockIdx * decoder.scanlineBlockSize;
            const trueY = lineY + decoder.scanOrder(scanY);
            if (trueY >= decoder.height) {
                continue;
            }
            const lineOffset = lineY * decoder.bytesPerLine;
            const outLineOffset = (decoder.height - 1 - trueY) * decoder.outLineWidth;
            for(let channelID = 0; channelID < decoder.channels; channelID++){
                const name = header.channels[channelID].name;
                const lOff = decoder.channelLineOffsets[name];
                const cOff = decoder.decodeChannels[name];
                if (cOff === undefined) {
                    continue;
                }
                tmpOffset.value = lineOffset + lOff;
                for(let x = 0; x < decoder.width; x++){
                    const outIndex = outLineOffset + x * decoder.outputChannels + cOff;
                    if (decoder.byteArray) {
                        decoder.byteArray[outIndex] = decoder.getter(viewer, tmpOffset);
                    }
                }
            }
        }
    }
} //# sourceMappingURL=exrLoader.decoder.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Loaders/exrTextureLoader.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReadExrDataAsync",
    ()=>ReadExrDataAsync,
    "_ExrTextureLoader",
    ()=>_ExrTextureLoader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$header$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Loaders/EXR/exrLoader.header.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$decoder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Loaders/EXR/exrLoader.decoder.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$configuration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Loaders/EXR/exrLoader.configuration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-client] (ecmascript)");
;
;
;
;
class _ExrTextureLoader {
    constructor(){
        /**
         * Defines whether the loader supports cascade loading the different faces.
         */ this.supportCascades = false;
    }
    /**
     * Uploads the cube texture data to the WebGL texture. It has already been bound.
     * @param _data contains the texture data
     * @param _texture defines the BabylonJS internal texture
     * @param _createPolynomials will be true if polynomials have been requested
     * @param _onLoad defines the callback to trigger once the texture is ready
     * @param _onError defines the callback to trigger in case of error
     * Cube texture are not supported by .exr files
     */ loadCubeData(_data, _texture, _createPolynomials, _onLoad, _onError) {
        // eslint-disable-next-line no-throw-literal
        throw ".exr not supported in Cube.";
    }
    /**
     * Uploads the 2D texture data to the WebGL texture. It has already been bound once in the callback.
     * @param data contains the texture data
     * @param texture defines the BabylonJS internal texture
     * @param callback defines the method to call once ready to upload
     */ // eslint-disable-next-line @typescript-eslint/naming-convention
    loadData(data, texture, callback) {
        const dataView = new DataView(data.buffer);
        const offset = {
            value: 0
        };
        const header = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$header$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GetExrHeader"])(dataView, offset);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$decoder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateDecoderAsync"])(header, dataView, offset, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$configuration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExrLoaderGlobalConfiguration"].DefaultOutputType)// eslint-disable-next-line github/no-then
        .then((decoder)=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$decoder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScanData"])(decoder, header, dataView, offset);
            // Updating texture
            const width = header.dataWindow.xMax - header.dataWindow.xMin + 1;
            const height = header.dataWindow.yMax - header.dataWindow.yMin + 1;
            callback(width, height, texture.generateMipMaps, false, ()=>{
                const engine = texture.getEngine();
                texture.format = header.format;
                texture.type = decoder.textureType;
                texture.invertY = false;
                texture._gammaSpace = !header.linearSpace;
                if (decoder.byteArray) {
                    engine._uploadDataToTextureDirectly(texture, decoder.byteArray, 0, 0, undefined, true);
                }
            });
        })// eslint-disable-next-line github/no-then
        .catch((error)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Error("Failed to load EXR texture: ", error);
        });
    }
}
async function ReadExrDataAsync(data) {
    const dataView = new DataView(data);
    const offset = {
        value: 0
    };
    const header = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$header$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GetExrHeader"])(dataView, offset);
    try {
        const decoder = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$decoder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateDecoderAsync"])(header, dataView, offset, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$configuration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EXROutputType"].Float);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$decoder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScanData"])(decoder, header, dataView, offset);
        if (!decoder.byteArray) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Error("Failed to decode EXR data: No byte array available.");
            return {
                width: 0,
                height: 0,
                data: null
            };
        }
        return {
            width: header.dataWindow.xMax - header.dataWindow.xMin + 1,
            height: header.dataWindow.yMax - header.dataWindow.yMin + 1,
            data: new Float32Array(decoder.byteArray)
        };
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Error("Failed to load EXR data: ", error);
    }
    return {
        width: 0,
        height: 0,
        data: null
    };
} //# sourceMappingURL=exrTextureLoader.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/exrCubeTexture.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EXRCubeTexture",
    ()=>EXRCubeTexture
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$envCubeTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/envCubeTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$baseTexture$2e$polynomial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/baseTexture.polynomial.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$HighDynamicRange$2f$panoramaToCubemap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/HighDynamicRange/panoramaToCubemap.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$exrTextureLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Loaders/exrTextureLoader.js [app-client] (ecmascript)");
;
;
;
;
;
class EXRCubeTexture extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$envCubeTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EnvCubeTexture"] {
    /**
     * Instantiates an HDRTexture from the following parameters.
     *
     * @param url The location of the HDR raw data (Panorama stored in RGBE format)
     * @param sceneOrEngine The scene or engine the texture will be used in
     * @param size The cubemap desired size (the more it increases the longer the generation will be)
     * @param noMipmap Forces to not generate the mipmap if true
     * @param generateHarmonics Specifies whether you want to extract the polynomial harmonics during the generation process
     * @param gammaSpace Specifies if the texture will be use in gamma or linear space (the PBR material requires those texture in linear space, but the standard material would require them in Gamma space)
     * @param prefilterOnLoad Prefilters HDR texture to allow use of this texture as a PBR reflection texture.
     * @param onLoad on success callback function
     * @param onError on error callback function
     * @param supersample Defines if texture must be supersampled (default: false)
     * @param prefilterIrradianceOnLoad Prefilters HDR texture to allow use of this texture for irradiance lighting.
     * @param prefilterUsingCdf Defines if the prefiltering should be done using a CDF instead of the default approach.
     */ constructor(url, sceneOrEngine, size, noMipmap = false, generateHarmonics = true, gammaSpace = false, prefilterOnLoad = false, onLoad = null, onError = null, supersample = false, prefilterIrradianceOnLoad = false, prefilterUsingCdf = false){
        super(url, sceneOrEngine, size, noMipmap, generateHarmonics, gammaSpace, prefilterOnLoad, onLoad, onError, supersample, prefilterIrradianceOnLoad, prefilterUsingCdf);
    }
    /**
     * Get the current class name of the texture useful for serialization or dynamic coding.
     * @returns "EXRCubeTexture"
     */ getClassName() {
        return "EXRCubeTexture";
    }
    /**
     * Convert the raw data from the server into cubemap faces
     * @param buffer The buffer containing the texture data
     * @param size The cubemap face size
     * @param supersample Defines if texture must be supersampled
     * @returns The cube map data
     */ async _getCubeMapTextureDataAsync(buffer, size, supersample) {
        const exrData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$exrTextureLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadExrDataAsync"])(buffer);
        if (!exrData.data) {
            throw new Error("EXR data could not be decoded.");
        }
        const cubeMapData = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$HighDynamicRange$2f$panoramaToCubemap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PanoramaToCubeMapTools"].ConvertPanoramaToCubemap(exrData.data, exrData.width, exrData.height, size, supersample, false);
        return cubeMapData;
    }
    _instantiateClone() {
        return new EXRCubeTexture(this.url, this.getScene() || this._getEngine(), this._size, this._noMipmap, this._generateHarmonics, this.gammaSpace);
    }
    /**
     * Serialize the texture to a JSON representation.
     * @returns The JSON representation of the texture
     */ serialize() {
        const serializationObject = super.serialize();
        if (!serializationObject) {
            return null;
        }
        serializationObject.customType = "BABYLON.EXRCubeTexture";
        return serializationObject;
    }
    /**
     * Parses a JSON representation of an EXR Texture in order to create the texture
     * @param parsedTexture Define the JSON representation
     * @param scene Define the scene the texture should be created in
     * @param rootUrl Define the root url in case we need to load relative dependencies
     * @returns the newly created texture after parsing
     */ static Parse(parsedTexture, scene, rootUrl) {
        if (!parsedTexture.name || parsedTexture.isRenderTarget) {
            return null;
        }
        const texture = new EXRCubeTexture(rootUrl + parsedTexture.name, scene, parsedTexture.size, parsedTexture.noMipmap, parsedTexture.generateHarmonics, parsedTexture.useInGammaSpace);
        this._Parse(parsedTexture, texture);
        return texture;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.EXRCubeTexture", EXRCubeTexture); //# sourceMappingURL=exrCubeTexture.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/htmlElementTexture.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HtmlElementTexture",
    ()=>HtmlElementTexture
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$baseTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/baseTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Extensions$2f$engine$2e$dynamicTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Extensions/engine.dynamicTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Extensions$2f$engine$2e$videoTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Extensions/engine.videoTexture.js [app-client] (ecmascript)");
;
;
;
;
;
class HtmlElementTexture extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$baseTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseTexture"] {
    /**
     * Instantiates a HtmlElementTexture from the following parameters.
     *
     * @param name Defines the name of the texture
     * @param element Defines the video or canvas the texture is filled with
     * @param options Defines the other none mandatory texture creation options
     */ constructor(name, element, options){
        super(options.scene || options.engine);
        /**
         * Observable triggered once the texture has been loaded.
         */ this.onLoadObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        if (!element || !options.engine && !options.scene) {
            return;
        }
        options = {
            ...HtmlElementTexture._DefaultOptions,
            ...options
        };
        this._generateMipMaps = options.generateMipMaps;
        this._samplingMode = options.samplingMode;
        this._textureMatrix = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].Identity();
        this._format = options.format;
        this.name = name;
        this.element = element;
        this._isVideo = !!element.getVideoPlaybackQuality;
        if (this._isVideo) {
            const engineWebGPU = this._engine;
            const createExternalTexture = engineWebGPU?.createExternalTexture;
            if (createExternalTexture) {
                this._externalTexture = createExternalTexture.call(engineWebGPU, element);
            }
        }
        this.anisotropicFilteringLevel = 1;
        this._createInternalTexture();
    }
    _createInternalTexture() {
        let width = 0;
        let height = 0;
        if (this._isVideo) {
            width = this.element.videoWidth;
            height = this.element.videoHeight;
        } else {
            width = this.element.width;
            height = this.element.height;
        }
        const engine = this._getEngine();
        if (engine) {
            this._texture = engine.createDynamicTexture(width, height, this._generateMipMaps, this._samplingMode);
            this._texture.format = this._format;
        }
        this.update();
    }
    /**
     * @returns the texture matrix used in most of the material.
     */ getTextureMatrix() {
        return this._textureMatrix;
    }
    /**
     * Updates the content of the texture.
     * @param invertY Defines whether the texture should be inverted on Y (false by default on video and true on canvas)
     */ update(invertY = null) {
        const engine = this._getEngine();
        if (this._texture == null || engine == null) {
            return;
        }
        const wasReady = this.isReady();
        if (this._isVideo) {
            const videoElement = this.element;
            if (videoElement.readyState < videoElement.HAVE_CURRENT_DATA) {
                return;
            }
            engine.updateVideoTexture(this._texture, this._externalTexture ? this._externalTexture : videoElement, invertY === null ? true : invertY);
        } else {
            const canvasElement = this.element;
            engine.updateDynamicTexture(this._texture, canvasElement, invertY === null ? true : invertY, false, this._format);
        }
        if (!wasReady && this.isReady()) {
            this.onLoadObservable.notifyObservers(this);
        }
    }
    /**
     * Dispose the texture and release its associated resources.
     */ dispose() {
        this.onLoadObservable.clear();
        super.dispose();
    }
}
HtmlElementTexture._DefaultOptions = {
    generateMipMaps: false,
    samplingMode: 2,
    format: 5,
    engine: null,
    scene: null
}; //# sourceMappingURL=htmlElementTexture.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Loaders/internalTextureLoader.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
 //# sourceMappingURL=internalTextureLoader.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Loaders/tgaTextureLoader.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_TGATextureLoader",
    ()=>_TGATextureLoader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tga$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/tga.js [app-client] (ecmascript)");
;
class _TGATextureLoader {
    constructor(){
        /**
         * Defines whether the loader supports cascade loading the different faces.
         */ this.supportCascades = false;
    }
    /**
     * Uploads the cube texture data to the WebGL texture. It has already been bound.
     */ loadCubeData() {
        // eslint-disable-next-line no-throw-literal
        throw ".env not supported in Cube.";
    }
    /**
     * Uploads the 2D texture data to the WebGL texture. It has already been bound once in the callback.
     * @param data contains the texture data
     * @param texture defines the BabylonJS internal texture
     * @param callback defines the method to call once ready to upload
     */ loadData(data, texture, callback) {
        const bytes = new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
        const header = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tga$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GetTGAHeader"])(bytes);
        callback(header.width, header.height, texture.generateMipMaps, false, ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tga$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UploadContent"])(texture, bytes);
        });
    }
} //# sourceMappingURL=tgaTextureLoader.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Loaders/hdrTextureLoader.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_HDRTextureLoader",
    ()=>_HDRTextureLoader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$HighDynamicRange$2f$hdr$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/HighDynamicRange/hdr.js [app-client] (ecmascript)");
;
class _HDRTextureLoader {
    constructor(){
        /**
         * Defines whether the loader supports cascade loading the different faces.
         */ this.supportCascades = false;
    }
    /**
     * Uploads the cube texture data to the WebGL texture. It has already been bound.
     * Cube texture are not supported by .hdr files
     */ loadCubeData() {
        // eslint-disable-next-line no-throw-literal
        throw ".hdr not supported in Cube.";
    }
    /**
     * Uploads the 2D texture data to the WebGL texture. It has already been bound once in the callback.
     * @param data contains the texture data
     * @param texture defines the BabylonJS internal texture
     * @param callback defines the method to call once ready to upload
     */ loadData(data, texture, callback) {
        const uint8array = new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
        const hdrInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$HighDynamicRange$2f$hdr$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RGBE_ReadHeader"])(uint8array);
        const pixelsDataRGB32 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$HighDynamicRange$2f$hdr$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RGBE_ReadPixels"])(uint8array, hdrInfo);
        const pixels = hdrInfo.width * hdrInfo.height;
        const pixelsDataRGBA32 = new Float32Array(pixels * 4);
        for(let i = 0; i < pixels; i += 1){
            pixelsDataRGBA32[i * 4] = pixelsDataRGB32[i * 3];
            pixelsDataRGBA32[i * 4 + 1] = pixelsDataRGB32[i * 3 + 1];
            pixelsDataRGBA32[i * 4 + 2] = pixelsDataRGB32[i * 3 + 2];
            pixelsDataRGBA32[i * 4 + 3] = 1;
        }
        callback(hdrInfo.width, hdrInfo.height, texture.generateMipMaps, false, ()=>{
            const engine = texture.getEngine();
            texture.type = 1;
            texture.format = 5;
            texture._gammaSpace = false;
            engine._uploadDataToTextureDirectly(texture, pixelsDataRGBA32);
        });
    }
} //# sourceMappingURL=hdrTextureLoader.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Loaders/basisTextureLoader.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_BasisTextureLoader",
    ()=>_BasisTextureLoader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$basis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/basis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/tools.js [app-client] (ecmascript)");
;
;
class _BasisTextureLoader {
    constructor(){
        /**
         * Defines whether the loader supports cascade loading the different faces.
         */ this.supportCascades = false;
    }
    /**
     * Uploads the cube texture data to the WebGL texture. It has already been bound.
     * @param data contains the texture data
     * @param texture defines the BabylonJS internal texture
     * @param createPolynomials will be true if polynomials have been requested
     * @param onLoad defines the callback to trigger once the texture is ready
     * @param onError defines the callback to trigger in case of error
     */ loadCubeData(data, texture, createPolynomials, onLoad, onError) {
        if (Array.isArray(data)) {
            return;
        }
        const caps = texture.getEngine().getCaps();
        const transcodeConfig = {
            supportedCompressionFormats: {
                etc1: caps.etc1 ? true : false,
                s3tc: caps.s3tc ? true : false,
                pvrtc: caps.pvrtc ? true : false,
                etc2: caps.etc2 ? true : false,
                astc: caps.astc ? true : false,
                bc7: caps.bptc ? true : false
            }
        };
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$basis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TranscodeAsync"])(data, transcodeConfig)// eslint-disable-next-line github/no-then
        .then((result)=>{
            const hasMipmap = result.fileInfo.images[0].levels.length > 1 && texture.generateMipMaps;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$basis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoadTextureFromTranscodeResult"])(texture, result);
            texture.getEngine()._setCubeMapTextureParams(texture, hasMipmap);
            texture.isReady = true;
            texture.onLoadedObservable.notifyObservers(texture);
            texture.onLoadedObservable.clear();
            if (onLoad) {
                onLoad();
            }
        })// eslint-disable-next-line github/no-then
        .catch((err)=>{
            const errorMessage = "Failed to transcode Basis file, transcoding may not be supported on this device";
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tools"].Warn(errorMessage);
            texture.isReady = true;
            if (onError) {
                onError(err);
            }
        });
    }
    /**
     * Uploads the 2D texture data to the WebGL texture. It has already been bound once in the callback.
     * @param data contains the texture data
     * @param texture defines the BabylonJS internal texture
     * @param callback defines the method to call once ready to upload
     */ loadData(data, texture, callback) {
        const caps = texture.getEngine().getCaps();
        const transcodeConfig = {
            supportedCompressionFormats: {
                etc1: caps.etc1 ? true : false,
                s3tc: caps.s3tc ? true : false,
                pvrtc: caps.pvrtc ? true : false,
                etc2: caps.etc2 ? true : false,
                astc: caps.astc ? true : false,
                bc7: caps.bptc ? true : false
            }
        };
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$basis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TranscodeAsync"])(data, transcodeConfig)// eslint-disable-next-line github/no-then
        .then((result)=>{
            const rootImage = result.fileInfo.images[0].levels[0];
            const hasMipmap = result.fileInfo.images[0].levels.length > 1 && texture.generateMipMaps;
            callback(rootImage.width, rootImage.height, hasMipmap, result.format !== -1, ()=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$basis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoadTextureFromTranscodeResult"])(texture, result);
            });
        })// eslint-disable-next-line github/no-then
        .catch((err)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tools"].Warn("Failed to transcode Basis file, transcoding may not be supported on this device");
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tools"].Warn(`Failed to transcode Basis file: ${err}`);
            callback(0, 0, false, false, ()=>{}, true);
        });
    }
} //# sourceMappingURL=basisTextureLoader.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Loaders/iesTextureLoader.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_IESTextureLoader",
    ()=>_IESTextureLoader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$IES$2f$iesLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Lights/IES/iesLoader.js [app-client] (ecmascript)");
;
class _IESTextureLoader {
    constructor(){
        /**
         * Defines whether the loader supports cascade loading the different faces.
         */ this.supportCascades = false;
    }
    /**
     * Uploads the cube texture data to the WebGL texture. It has already been bound.
     */ loadCubeData() {
        // eslint-disable-next-line no-throw-literal
        throw ".ies not supported in Cube.";
    }
    /**
     * Uploads the 2D texture data to the WebGL texture. It has already been bound once in the callback.
     * @param data contains the texture data
     * @param texture defines the BabylonJS internal texture
     * @param callback defines the method to call once ready to upload
     */ loadData(data, texture, callback) {
        const uint8array = new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
        const textureData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$IES$2f$iesLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoadIESData"])(uint8array);
        callback(textureData.width, textureData.height, texture.useMipMaps, false, ()=>{
            const engine = texture.getEngine();
            texture.type = 1;
            texture.format = 6;
            texture._gammaSpace = false;
            engine._uploadDataToTextureDirectly(texture, textureData.data);
        });
    }
} //# sourceMappingURL=iesTextureLoader.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Loaders/EXR/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$compression$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Loaders/EXR/exrLoader.compression.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$compression$2e$huf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Loaders/EXR/exrLoader.compression.huf.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$compression$2e$rle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Loaders/EXR/exrLoader.compression.rle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$configuration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Loaders/EXR/exrLoader.configuration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Loaders/EXR/exrLoader.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$decoder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Loaders/EXR/exrLoader.decoder.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$header$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Loaders/EXR/exrLoader.header.js [app-client] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
;
;
;
;
;
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Loaders/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/no-restricted-imports */ __turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$internalTextureLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Loaders/internalTextureLoader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$ddsTextureLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Loaders/ddsTextureLoader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$envTextureLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Loaders/envTextureLoader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$ktxTextureLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Loaders/ktxTextureLoader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$tgaTextureLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Loaders/tgaTextureLoader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$hdrTextureLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Loaders/hdrTextureLoader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$basisTextureLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Loaders/basisTextureLoader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$exrTextureLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Loaders/exrTextureLoader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$iesTextureLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Loaders/iesTextureLoader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$textureLoaderManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Loaders/textureLoaderManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Loaders/EXR/index.js [app-client] (ecmascript) <locals>"); //# sourceMappingURL=index.js.map
;
;
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
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/multiRenderTarget.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MultiRenderTarget",
    ()=>MultiRenderTarget
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/texture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$renderTargetTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/renderTargetTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Extensions$2f$engine$2e$multiRender$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Extensions/engine.multiRender.js [app-client] (ecmascript)");
;
;
;
class MultiRenderTarget extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$renderTargetTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RenderTargetTexture"] {
    /**
     * Get if draw buffers (render textures) are currently supported by the used hardware and browser.
     */ get isSupported() {
        return this._engine?.getCaps().drawBuffersExtension ?? false;
    }
    /**
     * Get the list of textures generated by the multi render target.
     */ get textures() {
        return this._textures;
    }
    /**
     * Gets the number of textures in this MRT. This number can be different from `_textures.length` in case a depth texture is generated.
     */ get count() {
        return this._count;
    }
    /**
     * Get the depth texture generated by the multi render target if options.generateDepthTexture has been set
     */ get depthTexture() {
        return this._textures[this._textures.length - 1];
    }
    /**
     * Set the wrapping mode on U of all the textures we are rendering to.
     * Can be any of the Texture. (CLAMP_ADDRESSMODE, MIRROR_ADDRESSMODE or WRAP_ADDRESSMODE)
     */ set wrapU(wrap) {
        if (this._textures) {
            for(let i = 0; i < this._textures.length; i++){
                this._textures[i].wrapU = wrap;
            }
        }
    }
    /**
     * Set the wrapping mode on V of all the textures we are rendering to.
     * Can be any of the Texture. (CLAMP_ADDRESSMODE, MIRROR_ADDRESSMODE or WRAP_ADDRESSMODE)
     */ set wrapV(wrap) {
        if (this._textures) {
            for(let i = 0; i < this._textures.length; i++){
                this._textures[i].wrapV = wrap;
            }
        }
    }
    /**
     * Instantiate a new multi render target texture.
     * A multi render target, like a render target provides the ability to render to a texture.
     * Unlike the render target, it can render to several draw buffers (render textures) in one draw.
     * This is specially interesting in deferred rendering or for any effects requiring more than
     * just one color from a single pass.
     * @param name Define the name of the texture
     * @param size Define the size of the buffers to render to
     * @param count Define the number of target we are rendering into
     * @param scene Define the scene the texture belongs to
     * @param options Define the options used to create the multi render target
     * @param textureNames Define the names to set to the textures (if count \> 0 - optional)
     */ constructor(name, size, count, scene, options, textureNames){
        const generateMipMaps = options && options.generateMipMaps ? options.generateMipMaps : false;
        const generateDepthTexture = options && options.generateDepthTexture ? options.generateDepthTexture : false;
        const depthTextureFormat = options && options.depthTextureFormat ? options.depthTextureFormat : 15;
        const doNotChangeAspectRatio = !options || options.doNotChangeAspectRatio === undefined ? true : options.doNotChangeAspectRatio;
        const drawOnlyOnFirstAttachmentByDefault = options && options.drawOnlyOnFirstAttachmentByDefault ? options.drawOnlyOnFirstAttachmentByDefault : false;
        super(name, size, scene, generateMipMaps, doNotChangeAspectRatio, undefined, undefined, undefined, undefined, undefined, undefined, undefined, true);
        if (!this.isSupported) {
            this.dispose();
            return;
        }
        this._textureNames = textureNames;
        const types = [];
        const samplingModes = [];
        const useSRGBBuffers = [];
        const formats = [];
        const targetTypes = [];
        const faceIndex = [];
        const layerIndex = [];
        const layerCounts = [];
        this._initTypes(count, types, samplingModes, useSRGBBuffers, formats, targetTypes, faceIndex, layerIndex, layerCounts, options);
        const generateDepthBuffer = !options || options.generateDepthBuffer === undefined ? true : options.generateDepthBuffer;
        const generateStencilBuffer = !options || options.generateStencilBuffer === undefined ? false : options.generateStencilBuffer;
        const samples = options && options.samples ? options.samples : 1;
        this._multiRenderTargetOptions = {
            samplingModes: samplingModes,
            generateMipMaps: generateMipMaps,
            generateDepthBuffer: generateDepthBuffer,
            generateStencilBuffer: generateStencilBuffer,
            generateDepthTexture: generateDepthTexture,
            depthTextureFormat: depthTextureFormat,
            types: types,
            textureCount: count,
            useSRGBBuffers: useSRGBBuffers,
            samples,
            formats: formats,
            targetTypes: targetTypes,
            faceIndex: faceIndex,
            layerIndex: layerIndex,
            layerCounts: layerCounts,
            labels: textureNames,
            label: name
        };
        this._count = count;
        this._drawOnlyOnFirstAttachmentByDefault = drawOnlyOnFirstAttachmentByDefault;
        if (count > 0) {
            this._createInternalTextures();
            this._createTextures(textureNames);
        }
    }
    _initTypes(count, types, samplingModes, useSRGBBuffers, formats, targets, faceIndex, layerIndex, layerCounts, options) {
        for(let i = 0; i < count; i++){
            if (options && options.types && options.types[i] !== undefined) {
                types.push(options.types[i]);
            } else {
                types.push(options && options.defaultType ? options.defaultType : 0);
            }
            if (options && options.samplingModes && options.samplingModes[i] !== undefined) {
                samplingModes.push(options.samplingModes[i]);
            } else {
                samplingModes.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"].BILINEAR_SAMPLINGMODE);
            }
            if (options && options.useSRGBBuffers && options.useSRGBBuffers[i] !== undefined) {
                useSRGBBuffers.push(options.useSRGBBuffers[i]);
            } else {
                useSRGBBuffers.push(false);
            }
            if (options && options.formats && options.formats[i] !== undefined) {
                formats.push(options.formats[i]);
            } else {
                formats.push(5);
            }
            if (options && options.targetTypes && options.targetTypes[i] !== undefined) {
                targets.push(options.targetTypes[i]);
            } else {
                targets.push(3553);
            }
            if (options && options.faceIndex && options.faceIndex[i] !== undefined) {
                faceIndex.push(options.faceIndex[i]);
            } else {
                faceIndex.push(0);
            }
            if (options && options.layerIndex && options.layerIndex[i] !== undefined) {
                layerIndex.push(options.layerIndex[i]);
            } else {
                layerIndex.push(0);
            }
            if (options && options.layerCounts && options.layerCounts[i] !== undefined) {
                layerCounts.push(options.layerCounts[i]);
            } else {
                layerCounts.push(1);
            }
        }
    }
    _createInternaTextureIndexMapping() {
        const mapMainInternalTexture2Index = {};
        const mapInternalTexture2MainIndex = [];
        if (!this._renderTarget) {
            return mapInternalTexture2MainIndex;
        }
        const internalTextures = this._renderTarget.textures;
        for(let i = 0; i < internalTextures.length; i++){
            const texture = internalTextures[i];
            if (!texture) {
                continue;
            }
            const mainIndex = mapMainInternalTexture2Index[texture.uniqueId];
            if (mainIndex !== undefined) {
                mapInternalTexture2MainIndex[i] = mainIndex;
            } else {
                mapMainInternalTexture2Index[texture.uniqueId] = i;
            }
        }
        return mapInternalTexture2MainIndex;
    }
    /**
     * @internal
     */ _rebuild(fromContextLost = false, forceFullRebuild = false, textureNames) {
        if (this._count < 1 || fromContextLost) {
            return;
        }
        const mapInternalTexture2MainIndex = this._createInternaTextureIndexMapping();
        this.releaseInternalTextures();
        this._createInternalTextures();
        if (forceFullRebuild) {
            this._releaseTextures();
            this._createTextures(textureNames);
        }
        const internalTextures = this._renderTarget.textures;
        for(let i = 0; i < internalTextures.length; i++){
            const texture = this._textures[i];
            if (mapInternalTexture2MainIndex[i] !== undefined) {
                this._renderTarget.setTexture(internalTextures[mapInternalTexture2MainIndex[i]], i);
            }
            texture._texture = internalTextures[i];
            if (texture._texture) {
                texture._noMipmap = !texture._texture.useMipMaps;
                texture._useSRGBBuffer = texture._texture._useSRGBBuffer;
            }
        }
        if (this.samples !== 1) {
            this._renderTarget.setSamples(this.samples, !this._drawOnlyOnFirstAttachmentByDefault, true);
        }
    }
    _createInternalTextures() {
        this._renderTarget = this._getEngine().createMultipleRenderTarget(this._size, this._multiRenderTargetOptions, !this._drawOnlyOnFirstAttachmentByDefault);
        this._texture = this._renderTarget.texture;
    }
    _releaseTextures() {
        if (this._textures) {
            for(let i = 0; i < this._textures.length; i++){
                this._textures[i]._texture = null; // internal textures are released by a call to releaseInternalTextures()
                this._textures[i].dispose();
            }
        }
    }
    _createTextures(textureNames) {
        const internalTextures = this._renderTarget.textures;
        this._textures = [];
        for(let i = 0; i < internalTextures.length; i++){
            const texture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"](null, this.getScene());
            if (textureNames?.[i]) {
                texture.name = textureNames[i];
            }
            texture._texture = internalTextures[i];
            if (texture._texture) {
                texture._noMipmap = !texture._texture.useMipMaps;
                texture._useSRGBBuffer = texture._texture._useSRGBBuffer;
            }
            this._textures.push(texture);
        }
    }
    /**
     * Replaces an internal texture within the MRT. Useful to share textures between MultiRenderTarget.
     * @param texture The new texture to set in the MRT
     * @param index The index of the texture to replace
     * @param disposePrevious Set to true if the previous internal texture should be disposed
     */ setInternalTexture(texture, index, disposePrevious = true) {
        if (!this.renderTarget) {
            return;
        }
        if (index === 0) {
            this._texture = texture;
        }
        this.renderTarget.setTexture(texture, index, disposePrevious);
        if (!this.textures[index]) {
            this.textures[index] = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"](null, this.getScene());
            this.textures[index].name = this._textureNames?.[index] ?? this.textures[index].name;
        }
        this.textures[index]._texture = texture;
        this.textures[index]._noMipmap = !texture.useMipMaps;
        this.textures[index]._useSRGBBuffer = texture._useSRGBBuffer;
        this._count = this.renderTarget.textures ? this.renderTarget.textures.length : 0;
        if (this._multiRenderTargetOptions.types) {
            this._multiRenderTargetOptions.types[index] = texture.type;
        }
        if (this._multiRenderTargetOptions.samplingModes) {
            this._multiRenderTargetOptions.samplingModes[index] = texture.samplingMode;
        }
        if (this._multiRenderTargetOptions.useSRGBBuffers) {
            this._multiRenderTargetOptions.useSRGBBuffers[index] = texture._useSRGBBuffer;
        }
        if (this._multiRenderTargetOptions.targetTypes && this._multiRenderTargetOptions.targetTypes[index] !== -1) {
            let target = 0;
            if (texture.is2DArray) {
                target = 35866;
            } else if (texture.isCube) {
                target = 34067;
            } else if (texture.is3D) {
                target = 32879;
            } else {
                target = 3553;
            }
            this._multiRenderTargetOptions.targetTypes[index] = target;
        }
    }
    /**
     * Changes an attached texture's face index or layer.
     * @param index The index of the texture to modify the attachment of
     * @param layerIndex The layer index of the texture to be attached to the framebuffer
     * @param faceIndex The face index of the texture to be attached to the framebuffer
     */ setLayerAndFaceIndex(index, layerIndex = -1, faceIndex = -1) {
        if (!this.textures[index] || !this.renderTarget) {
            return;
        }
        if (this._multiRenderTargetOptions.layerIndex) {
            this._multiRenderTargetOptions.layerIndex[index] = layerIndex;
        }
        if (this._multiRenderTargetOptions.faceIndex) {
            this._multiRenderTargetOptions.faceIndex[index] = faceIndex;
        }
        this.renderTarget.setLayerAndFaceIndex(index, layerIndex, faceIndex);
    }
    /**
     * Changes every attached texture's face index or layer.
     * @param layerIndices The layer indices of the texture to be attached to the framebuffer
     * @param faceIndices The face indices of the texture to be attached to the framebuffer
     */ setLayerAndFaceIndices(layerIndices, faceIndices) {
        if (!this.renderTarget) {
            return;
        }
        this._multiRenderTargetOptions.layerIndex = layerIndices;
        this._multiRenderTargetOptions.faceIndex = faceIndices;
        this.renderTarget.setLayerAndFaceIndices(layerIndices, faceIndices);
    }
    /**
     * Define the number of samples used if MSAA is enabled.
     */ get samples() {
        return this._samples;
    }
    set samples(value) {
        if (this._renderTarget) {
            this._samples = this._renderTarget.setSamples(value);
        } else {
            // In case samples are set with 0 textures created, we must save the desired samples value
            this._samples = value;
        }
    }
    /**
     * Resize all the textures in the multi render target.
     * Be careful as it will recreate all the data in the new texture.
     * @param size Define the new size
     */ resize(size) {
        this._processSizeParameter(size);
        this._rebuild(false, undefined, this._textureNames);
    }
    /**
     * Changes the number of render targets in this MRT
     * Be careful as it will recreate all the data in the new texture.
     * @param count new texture count
     * @param options Specifies texture types and sampling modes for new textures
     * @param textureNames Specifies the names of the textures (optional)
     */ updateCount(count, options, textureNames) {
        this._multiRenderTargetOptions.textureCount = count;
        this._count = count;
        const types = [];
        const samplingModes = [];
        const useSRGBBuffers = [];
        const formats = [];
        const targetTypes = [];
        const faceIndex = [];
        const layerIndex = [];
        const layerCounts = [];
        this._textureNames = textureNames;
        this._initTypes(count, types, samplingModes, useSRGBBuffers, formats, targetTypes, faceIndex, layerIndex, layerCounts, options);
        this._multiRenderTargetOptions.types = types;
        this._multiRenderTargetOptions.samplingModes = samplingModes;
        this._multiRenderTargetOptions.useSRGBBuffers = useSRGBBuffers;
        this._multiRenderTargetOptions.formats = formats;
        this._multiRenderTargetOptions.targetTypes = targetTypes;
        this._multiRenderTargetOptions.faceIndex = faceIndex;
        this._multiRenderTargetOptions.layerIndex = layerIndex;
        this._multiRenderTargetOptions.layerCounts = layerCounts;
        this._multiRenderTargetOptions.labels = textureNames;
        this._rebuild(false, true, textureNames);
    }
    _unbindFrameBuffer(engine, faceIndex) {
        if (this._renderTarget) {
            engine.unBindMultiColorAttachmentFramebuffer(this._renderTarget, this.isCube, ()=>{
                this.onAfterRenderObservable.notifyObservers(faceIndex);
            });
        }
    }
    /**
     * Dispose the render targets and their associated resources
     * @param doNotDisposeInternalTextures if set to true, internal textures won't be disposed (default: false).
     */ dispose(doNotDisposeInternalTextures = false) {
        this._releaseTextures();
        if (!doNotDisposeInternalTextures) {
            this.releaseInternalTextures();
        } else {
            // Prevent internal texture dispose in super.dispose
            this._texture = null;
        }
        super.dispose();
    }
    /**
     * Release all the underlying texture used as draw buffers (render textures).
     */ releaseInternalTextures() {
        const internalTextures = this._renderTarget?.textures;
        if (!internalTextures) {
            return;
        }
        for(let i = internalTextures.length - 1; i >= 0; i--){
            this._textures[i]._texture = null;
        }
        this._renderTarget?.dispose();
        this._renderTarget = null;
    }
} //# sourceMappingURL=multiRenderTarget.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Packer/frame.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * This is a support class for frame Data on texture packer sets.
 */ __turbopack_context__.s([
    "TexturePackerFrame",
    ()=>TexturePackerFrame
]);
class TexturePackerFrame {
    /**
     * Initializes a texture package frame.
     * @param id The numerical frame identifier
     * @param scale Scalar Vector2 for UV frame
     * @param offset Vector2 for the frame position in UV units.
     * @returns TexturePackerFrame
     */ constructor(id, scale, offset){
        this.id = id;
        this.scale = scale;
        this.offset = offset;
    }
} //# sourceMappingURL=frame.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Packer/packer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TexturePacker",
    ()=>TexturePacker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Buffers/buffer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/texture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$dynamicTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/dynamicTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.color.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Packer$2f$frame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Packer/frame.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/tools.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
class TexturePacker {
    /**
     * Initializes a texture package series from an array of meshes or a single mesh.
     * @param name The name of the package
     * @param meshes The target meshes to compose the package from
     * @param options The arguments that texture packer should follow while building.
     * @param scene The scene which the textures are scoped to.
     * @returns TexturePacker
     */ constructor(name, meshes, options, scene){
        this.name = name;
        this.meshes = meshes;
        this.scene = scene;
        /**
         * Run through the options and set what ever defaults are needed that where not declared.
         */ this.options = options;
        this.options.map = this.options.map ?? [
            "ambientTexture",
            "bumpTexture",
            "diffuseTexture",
            "emissiveTexture",
            "lightmapTexture",
            "opacityTexture",
            "reflectionTexture",
            "refractionTexture",
            "specularTexture"
        ];
        this.options.uvsIn = this.options.uvsIn ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VertexBuffer"].UVKind;
        this.options.uvsOut = this.options.uvsOut ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VertexBuffer"].UVKind;
        this.options.layout = this.options.layout ?? TexturePacker.LAYOUT_STRIP;
        if (this.options.layout === TexturePacker.LAYOUT_COLNUM) {
            this.options.colnum = this.options.colnum ?? 8;
        }
        this.options.updateInputMeshes = this.options.updateInputMeshes ?? true;
        this.options.disposeSources = this.options.disposeSources ?? true;
        this._expecting = 0;
        this.options.fillBlanks = this.options.fillBlanks ?? true;
        if (this.options.fillBlanks === true) {
            this.options.customFillColor = this.options.customFillColor ?? "black";
        }
        this.options.frameSize = this.options.frameSize ?? 256;
        this.options.paddingRatio = this.options.paddingRatio ?? 0.0115;
        this._paddingValue = Math.ceil(this.options.frameSize * this.options.paddingRatio);
        //Make it an even padding Number.
        if (this._paddingValue % 2 !== 0) {
            this._paddingValue++;
        }
        this.options.paddingMode = this.options.paddingMode ?? TexturePacker.SUBUV_WRAP;
        if (this.options.paddingMode === TexturePacker.SUBUV_COLOR) {
            this.options.paddingColor = this.options.paddingColor ?? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color4"](0, 0, 0, 1.0);
        }
        this.sets = {};
        this.frames = [];
        return this;
    }
    /**
     * Starts the package process
     * @param resolve The promises resolution function
     */ _createFrames(resolve) {
        const dtSize = this._calculateSize();
        const dtUnits = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](1, 1).divide(dtSize);
        let doneCount = 0;
        const expecting = this._expecting;
        const meshLength = this.meshes.length;
        const sKeys = Object.keys(this.sets);
        for(let i = 0; i < sKeys.length; i++){
            const setName = sKeys[i];
            const dt = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$dynamicTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DynamicTexture"](this.name + ".TexturePack." + setName + "Set", {
                width: dtSize.x,
                height: dtSize.y
            }, this.scene, true, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"].TRILINEAR_SAMPLINGMODE, 5);
            const dtx = dt.getContext();
            dtx.fillStyle = "rgba(0,0,0,0)";
            dtx.fillRect(0, 0, dtSize.x, dtSize.y);
            dt.update(false);
            this.sets[setName] = dt;
        }
        const baseSize = this.options.frameSize || 256;
        const padding = this._paddingValue;
        const tcs = baseSize + 2 * padding;
        const done = ()=>{
            this._calculateMeshUVFrames(baseSize, padding, dtSize, dtUnits, this.options.updateInputMeshes || false);
        };
        //Update the Textures
        for(let i = 0; i < meshLength; i++){
            const m = this.meshes[i];
            const mat = m.material;
            //Check if the material has the texture
            //Create a temporary canvas the same size as 1 frame
            //Then apply the texture to the center and the 8 offsets
            //Copy the Context and place in the correct frame on the DT
            for(let j = 0; j < sKeys.length; j++){
                const tempTexture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$dynamicTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DynamicTexture"]("temp", tcs, this.scene, true);
                const tcx = tempTexture.getContext();
                const offset = this._getFrameOffset(i);
                const updateDt = ()=>{
                    doneCount++;
                    tempTexture.update(false);
                    const iDat = tcx.getImageData(0, 0, tcs, tcs);
                    //Update Set
                    const dt = this.sets[setName];
                    const dtx = dt.getContext();
                    dtx.putImageData(iDat, dtSize.x * offset.x, dtSize.y * offset.y);
                    tempTexture.dispose();
                    dt.update(false);
                    if (doneCount == expecting) {
                        done();
                        resolve();
                        return;
                    }
                };
                const setName = sKeys[j] || "_blank";
                if (!mat || mat[setName] === null) {
                    tcx.fillStyle = "rgba(0,0,0,0)";
                    if (this.options.fillBlanks) {
                        tcx.fillStyle = this.options.customFillColor;
                    }
                    tcx.fillRect(0, 0, tcs, tcs);
                    updateDt();
                } else {
                    const setTexture = mat[setName];
                    const img = new Image();
                    if (setTexture instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$dynamicTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DynamicTexture"]) {
                        img.src = setTexture.getContext().canvas.toDataURL("image/png");
                    } else {
                        img.src = setTexture.url;
                    }
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tools"].SetCorsBehavior(img.src, img);
                    img.onload = ()=>{
                        tcx.fillStyle = "rgba(0,0,0,0)";
                        tcx.fillRect(0, 0, tcs, tcs);
                        tempTexture.update(false);
                        tcx.setTransform(1, 0, 0, -1, 0, 0);
                        const cellOffsets = [
                            0,
                            0,
                            1,
                            0,
                            1,
                            1,
                            0,
                            1,
                            -1,
                            1,
                            -1,
                            0,
                            -1 - 1,
                            0,
                            -1,
                            1,
                            -1
                        ];
                        switch(this.options.paddingMode){
                            //Wrap Mode
                            case 0:
                                for(let i = 0; i < 9; i++){
                                    tcx.drawImage(img, 0, 0, img.width, img.height, padding + baseSize * cellOffsets[i], padding + baseSize * cellOffsets[i + 1] - tcs, baseSize, baseSize);
                                }
                                break;
                            //Extend Mode
                            case 1:
                                for(let i = 0; i < padding; i++){
                                    tcx.drawImage(img, 0, 0, img.width, img.height, i + baseSize * cellOffsets[0], padding - tcs, baseSize, baseSize);
                                    tcx.drawImage(img, 0, 0, img.width, img.height, padding * 2 - i, padding - tcs, baseSize, baseSize);
                                    tcx.drawImage(img, 0, 0, img.width, img.height, padding, i - tcs, baseSize, baseSize);
                                    tcx.drawImage(img, 0, 0, img.width, img.height, padding, padding * 2 - i - tcs, baseSize, baseSize);
                                }
                                tcx.drawImage(img, 0, 0, img.width, img.height, padding + baseSize * cellOffsets[0], padding + baseSize * cellOffsets[1] - tcs, baseSize, baseSize);
                                break;
                            //Color Mode
                            case 2:
                                tcx.fillStyle = (this.options.paddingColor || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color3"].Black()).toHexString();
                                tcx.fillRect(0, 0, tcs, -tcs);
                                tcx.clearRect(padding, padding, baseSize, baseSize);
                                tcx.drawImage(img, 0, 0, img.width, img.height, padding + baseSize * cellOffsets[0], padding + baseSize * cellOffsets[1] - tcs, baseSize, baseSize);
                                break;
                        }
                        tcx.setTransform(1, 0, 0, 1, 0, 0);
                        updateDt();
                    };
                }
            }
        }
    }
    /**
     * Calculates the Size of the Channel Sets
     * @returns Vector2
     */ _calculateSize() {
        const meshLength = this.meshes.length || 0;
        const baseSize = this.options.frameSize || 0;
        const padding = this._paddingValue || 0;
        switch(this.options.layout){
            case 0:
                {
                    //STRIP_LAYOUT
                    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](baseSize * meshLength + 2 * padding * meshLength, baseSize + 2 * padding);
                }
            case 1:
                {
                    //POWER2
                    const sqrtCount = Math.max(2, Math.ceil(Math.sqrt(meshLength)));
                    const size = baseSize * sqrtCount + 2 * padding * sqrtCount;
                    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](size, size);
                }
            case 2:
                {
                    //COLNUM
                    const cols = this.options.colnum || 1;
                    const rowCnt = Math.max(1, Math.ceil(meshLength / cols));
                    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](baseSize * cols + 2 * padding * cols, baseSize * rowCnt + 2 * padding * rowCnt);
                }
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"].Zero();
    }
    /**
     * Calculates the UV data for the frames.
     * @param baseSize the base frameSize
     * @param padding the base frame padding
     * @param dtSize size of the Dynamic Texture for that channel
     * @param dtUnits is 1/dtSize
     * @param update flag to update the input meshes
     */ _calculateMeshUVFrames(baseSize, padding, dtSize, dtUnits, update) {
        const meshLength = this.meshes.length;
        for(let i = 0; i < meshLength; i++){
            const m = this.meshes[i];
            const scale = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](baseSize / dtSize.x, baseSize / dtSize.y);
            const pOffset = dtUnits.clone().scale(padding);
            const frameOffset = this._getFrameOffset(i);
            const offset = frameOffset.add(pOffset);
            const frame = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Packer$2f$frame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TexturePackerFrame"](i, scale, offset);
            this.frames.push(frame);
            //Update Output UVs
            if (update) {
                this._updateMeshUV(m, i);
                this._updateTextureReferences(m);
            }
        }
    }
    /**
     * Calculates the frames Offset.
     * @param index of the frame
     * @returns Vector2
     */ _getFrameOffset(index) {
        const meshLength = this.meshes.length;
        let uvStep, yStep, xStep;
        switch(this.options.layout){
            case 0:
                {
                    //STRIP_LAYOUT
                    uvStep = 1 / meshLength;
                    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](index * uvStep, 0);
                }
            case 1:
                {
                    //POWER2
                    const sqrtCount = Math.max(2, Math.ceil(Math.sqrt(meshLength)));
                    yStep = Math.floor(index / sqrtCount);
                    xStep = index - yStep * sqrtCount;
                    uvStep = 1 / sqrtCount;
                    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](xStep * uvStep, yStep * uvStep);
                }
            case 2:
                {
                    //COLNUM
                    const cols = this.options.colnum || 1;
                    const rowCnt = Math.max(1, Math.ceil(meshLength / cols));
                    xStep = Math.floor(index / rowCnt);
                    yStep = index - xStep * rowCnt;
                    uvStep = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](1 / cols, 1 / rowCnt);
                    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](xStep * uvStep.x, yStep * uvStep.y);
                }
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"].Zero();
    }
    /**
     * Updates a Mesh to the frame data
     * @param mesh that is the target
     * @param frameID or the frame index
     */ _updateMeshUV(mesh, frameID) {
        const frame = this.frames[frameID];
        const uvIn = mesh.getVerticesData(this.options.uvsIn || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VertexBuffer"].UVKind);
        const uvOut = [];
        let toCount = 0;
        if (uvIn.length) {
            toCount = uvIn.length || 0;
        }
        for(let i = 0; i < toCount; i += 2){
            uvOut.push(uvIn[i] * frame.scale.x + frame.offset.x, uvIn[i + 1] * frame.scale.y + frame.offset.y);
        }
        mesh.setVerticesData(this.options.uvsOut || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VertexBuffer"].UVKind, uvOut);
    }
    /**
     * Updates a Meshes materials to use the texture packer channels
     * @param m is the mesh to target
     * @param force all channels on the packer to be set.
     */ _updateTextureReferences(m, force = false) {
        const mat = m.material;
        const sKeys = Object.keys(this.sets);
        const _dispose = (_t)=>{
            if (_t.dispose) {
                _t.dispose();
            }
        };
        for(let i = 0; i < sKeys.length; i++){
            const setName = sKeys[i];
            if (!force) {
                if (!mat) {
                    return;
                }
                if (mat[setName] !== null) {
                    _dispose(mat[setName]);
                    mat[setName] = this.sets[setName];
                }
            } else {
                if (mat[setName] !== null) {
                    _dispose(mat[setName]);
                }
                mat[setName] = this.sets[setName];
            }
        }
    }
    /**
     * Public method to set a Mesh to a frame
     * @param m that is the target
     * @param frameID or the frame index
     * @param updateMaterial trigger for if the Meshes attached Material be updated?
     */ setMeshToFrame(m, frameID, updateMaterial = false) {
        this._updateMeshUV(m, frameID);
        if (updateMaterial) {
            this._updateTextureReferences(m, true);
        }
    }
    /**
     * Starts the async promise to compile the texture packer.
     * @returns Promise<void>
     */ async processAsync() {
        return await new Promise((resolve, reject)=>{
            try {
                if (this.meshes.length === 0) {
                    //Must be a JSON load!
                    resolve();
                    return;
                }
                let done = 0;
                const doneCheck = (mat)=>{
                    done++;
                    //Check Status of all Textures on all meshes, till they are ready.
                    if (this.options.map) {
                        for(let j = 0; j < this.options.map.length; j++){
                            const index = this.options.map[j];
                            const t = mat[index];
                            if (t !== null) {
                                if (!this.sets[this.options.map[j]]) {
                                    this.sets[this.options.map[j]] = true;
                                }
                                this._expecting++;
                            }
                        }
                        if (done === this.meshes.length) {
                            this._createFrames(resolve);
                        }
                    }
                };
                for(let i = 0; i < this.meshes.length; i++){
                    const mesh = this.meshes[i];
                    const material = mesh.material;
                    if (!material) {
                        done++;
                        if (done === this.meshes.length) {
                            return this._createFrames(resolve);
                        }
                        continue;
                    }
                    // eslint-disable-next-line @typescript-eslint/no-floating-promises, github/no-then
                    material.forceCompilationAsync(mesh).then(()=>{
                        doneCheck(material);
                    });
                }
            } catch (e) {
                // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
                return reject(e);
            }
        });
    }
    /**
     * Disposes all textures associated with this packer
     */ dispose() {
        const sKeys = Object.keys(this.sets);
        for(let i = 0; i < sKeys.length; i++){
            const channel = sKeys[i];
            this.sets[channel].dispose();
        }
    }
    /**
     * Starts the download process for all the channels converting them to base64 data and embedding it all in a JSON file.
     * @param imageType is the image type to use.
     * @param quality of the image if downloading as jpeg, Ranges from >0 to 1.
     */ download(imageType = "png", quality = 1) {
        setTimeout(()=>{
            const pack = {
                name: this.name,
                sets: {},
                options: {},
                frames: []
            };
            const sKeys = Object.keys(this.sets);
            const oKeys = Object.keys(this.options);
            try {
                for(let i = 0; i < sKeys.length; i++){
                    const channel = sKeys[i];
                    const dt = this.sets[channel];
                    pack.sets[channel] = dt.getContext().canvas.toDataURL("image/" + imageType, quality);
                }
                for(let i = 0; i < oKeys.length; i++){
                    const opt = oKeys[i];
                    pack.options[opt] = this.options[opt];
                }
                for(let i = 0; i < this.frames.length; i++){
                    const _f = this.frames[i];
                    pack.frames.push(_f.scale.x, _f.scale.y, _f.offset.x, _f.offset.y);
                }
            } catch (err) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Warn("Unable to download: " + err);
                return;
            }
            const data = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(pack, null, 4));
            const _a = document.createElement("a");
            _a.setAttribute("href", data);
            _a.setAttribute("download", this.name + "_texurePackage.json");
            document.body.appendChild(_a);
            _a.click();
            _a.remove();
        }, 0);
    }
    /**
     * Public method to load a texturePacker JSON file.
     * @param data of the JSON file in string format.
     */ updateFromJSON(data) {
        try {
            const parsedData = JSON.parse(data);
            this.name = parsedData.name;
            const _options = Object.keys(parsedData.options);
            for(let i = 0; i < _options.length; i++){
                this.options[_options[i]] = parsedData.options[_options[i]];
            }
            for(let i = 0; i < parsedData.frames.length; i += 4){
                const frame = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Packer$2f$frame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TexturePackerFrame"](i / 4, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](parsedData.frames[i], parsedData.frames[i + 1]), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](parsedData.frames[i + 2], parsedData.frames[i + 3]));
                this.frames.push(frame);
            }
            const channels = Object.keys(parsedData.sets);
            for(let i = 0; i < channels.length; i++){
                const _t = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"](parsedData.sets[channels[i]], this.scene, false, false);
                this.sets[channels[i]] = _t;
            }
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Warn("Unable to update from JSON: " + err);
        }
    }
}
/** Packer Layout Constant 0 */ TexturePacker.LAYOUT_STRIP = 0;
/** Packer Layout Constant 1 */ TexturePacker.LAYOUT_POWER2 = 1;
/** Packer Layout Constant 2 */ TexturePacker.LAYOUT_COLNUM = 2;
/** Packer Layout Constant 0 */ TexturePacker.SUBUV_WRAP = 0;
/** Packer Layout Constant 1 */ TexturePacker.SUBUV_EXTEND = 1;
/** Packer Layout Constant 2 */ TexturePacker.SUBUV_COLOR = 2; //# sourceMappingURL=packer.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Packer/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Packer$2f$packer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Packer/packer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Packer$2f$frame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Packer/frame.js [app-client] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Procedurals/customProceduralTexture.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CustomProceduralTexture",
    ()=>CustomProceduralTexture
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.color.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/texture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Procedurals$2f$proceduralTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Procedurals/proceduralTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$webRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/webRequest.js [app-client] (ecmascript)");
;
;
;
;
;
;
class CustomProceduralTexture extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Procedurals$2f$proceduralTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProceduralTexture"] {
    /**
     * Instantiates a new Custom Procedural Texture.
     * Procedural texturing is a way to programmatically create a texture. There are 2 types of procedural textures: code-only, and code that references some classic 2D images, sometimes called 'refMaps' or 'sampler' images.
     * Custom Procedural textures are the easiest way to create your own procedural in your application.
     * @see https://doc.babylonjs.com/features/featuresDeepDive/materials/using/proceduralTextures#creating-custom-procedural-textures
     * @param name Define the name of the texture
     * @param texturePath Define the folder path containing all the custom texture related files (config, shaders...)
     * @param size Define the size of the texture to create
     * @param scene Define the scene the texture belongs to
     * @param fallbackTexture Define a fallback texture in case there were issues to create the custom texture
     * @param generateMipMaps Define if the texture should creates mip maps or not
     * @param skipJson Define a boolena indicating that there is no json config file to load
     */ constructor(name, texturePath, size, scene, fallbackTexture, generateMipMaps, skipJson){
        super(name, size, null, scene, fallbackTexture, generateMipMaps);
        this._animate = true;
        this._time = 0;
        this._texturePath = texturePath;
        if (fallbackTexture && !(fallbackTexture instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"])) {
            skipJson = !!fallbackTexture.skipJson;
        }
        if (!skipJson) {
            //Try to load json
            this._loadJson(texturePath);
        } else {
            this.setFragment(this._texturePath);
        }
        this.refreshRate = 1;
    }
    _loadJson(jsonUrl) {
        const noConfigFile = ()=>{
            try {
                this.setFragment(this._texturePath);
            } catch (ex) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Log("No json or ShaderStore or DOM element found for CustomProceduralTexture");
            }
        };
        const configFileUrl = jsonUrl + "/config.json";
        const xhr = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$webRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebRequest"]();
        xhr.open("GET", configFileUrl);
        xhr.addEventListener("load", ()=>{
            if (xhr.status === 200 || xhr.responseText && xhr.responseText.length > 0) {
                try {
                    this._config = JSON.parse(xhr.response);
                    this.updateShaderUniforms();
                    this.updateTextures();
                    this.setFragment(this._texturePath + "/custom");
                    this._animate = this._config.animate;
                    this.refreshRate = this._config.refreshrate;
                } catch (ex) {
                    noConfigFile();
                }
            } else {
                noConfigFile();
            }
        }, false);
        xhr.addEventListener("error", ()=>{
            noConfigFile();
        }, false);
        try {
            xhr.send();
        } catch (ex) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Error("CustomProceduralTexture: Error on XHR send request.");
        }
    }
    /**
     * Is the texture ready to be used ? (rendered at least once)
     * @returns true if ready, otherwise, false.
     */ isReady() {
        if (!super.isReady()) {
            return false;
        }
        for(const name in this._textures){
            const texture = this._textures[name];
            if (!texture.isReady()) {
                return false;
            }
        }
        return true;
    }
    /**
     * Render the texture to its associated render target.
     * @param useCameraPostProcess Define if camera post process should be applied to the texture
     */ render(useCameraPostProcess) {
        const scene = this.getScene();
        if (this._animate && scene) {
            this._time += scene.getAnimationRatio() * 0.03;
            this.updateShaderUniforms();
        }
        super.render(useCameraPostProcess);
    }
    /**
     * Update the list of dependant textures samplers in the shader.
     */ updateTextures() {
        for(let i = 0; i < this._config.sampler2Ds.length; i++){
            this.setTexture(this._config.sampler2Ds[i].sample2Dname, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"](this._texturePath + "/" + this._config.sampler2Ds[i].textureRelativeUrl, this.getScene()));
        }
    }
    /**
     * Update the uniform values of the procedural texture in the shader.
     */ updateShaderUniforms() {
        if (this._config) {
            for(let j = 0; j < this._config.uniforms.length; j++){
                const uniform = this._config.uniforms[j];
                switch(uniform.type){
                    case "float":
                        this.setFloat(uniform.name, uniform.value);
                        break;
                    case "color3":
                        this.setColor3(uniform.name, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color3"](uniform.r, uniform.g, uniform.b));
                        break;
                    case "color4":
                        this.setColor4(uniform.name, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color4"](uniform.r, uniform.g, uniform.b, uniform.a));
                        break;
                    case "vector2":
                        this.setVector2(uniform.name, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](uniform.x, uniform.y));
                        break;
                    case "vector3":
                        this.setVector3(uniform.name, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](uniform.x, uniform.y, uniform.z));
                        break;
                }
            }
        }
        this.setFloat("time", this._time);
    }
    /**
     * Define if the texture animates or not.
     */ get animate() {
        return this._animate;
    }
    set animate(value) {
        this._animate = value;
    }
} //# sourceMappingURL=customProceduralTexture.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Procedurals/noiseProceduralTexture.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NoiseProceduralTexture",
    ()=>NoiseProceduralTexture
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/engineStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Procedurals$2f$proceduralTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Procedurals/proceduralTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$noise$2e$fragment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/noise.fragment.js [app-client] (ecmascript)");
;
;
;
;
class NoiseProceduralTexture extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Procedurals$2f$proceduralTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProceduralTexture"] {
    /**
     * Creates a new NoiseProceduralTexture
     * @param name defines the name fo the texture
     * @param size defines the size of the texture (default is 256)
     * @param scene defines the hosting scene
     * @param fallbackTexture defines the texture to use if the NoiseProceduralTexture can't be created
     * @param generateMipMaps defines if mipmaps must be generated (true by default)
     */ constructor(name, size = 256, scene = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EngineStore"].LastCreatedScene, fallbackTexture, generateMipMaps){
        super(name, size, "noise", scene, fallbackTexture, generateMipMaps);
        /** Gets or sets the start time (default is 0) */ this.time = 0.0;
        /** Gets or sets a value between 0 and 1 indicating the overall brightness of the texture (default is 0.2) */ this.brightness = 0.2;
        /** Defines the number of octaves to process */ this.octaves = 3;
        /** Defines the level of persistence (0.8 by default) */ this.persistence = 0.8;
        /** Gets or sets animation speed factor (default is 1) */ this.animationSpeedFactor = 1;
        this.autoClear = false;
        this._updateShaderUniforms();
    }
    _updateShaderUniforms() {
        const scene = this.getScene();
        if (!scene) {
            return;
        }
        this.time += scene.getAnimationRatio() * this.animationSpeedFactor * 0.01;
        this.setFloat("brightness", this.brightness);
        this.setFloat("persistence", this.persistence);
        this.setFloat("timeScale", this.time);
    }
    _getDefines() {
        return "#define OCTAVES " + (this.octaves | 0);
    }
    /**
     * Generate the current state of the procedural texture
     * @param useCameraPostProcess Define if camera post process should be applied to the texture
     */ render(useCameraPostProcess) {
        this._updateShaderUniforms();
        super.render(useCameraPostProcess);
    }
    /**
     * Serializes this noise procedural texture
     * @returns a serialized noise procedural texture object
     */ serialize() {
        const serializationObject = {};
        serializationObject.customType = "BABYLON.NoiseProceduralTexture";
        serializationObject.brightness = this.brightness;
        serializationObject.octaves = this.octaves;
        serializationObject.persistence = this.persistence;
        serializationObject.animationSpeedFactor = this.animationSpeedFactor;
        serializationObject.size = this.getSize().width;
        serializationObject.generateMipMaps = this._generateMipMaps;
        serializationObject.time = this.time;
        return serializationObject;
    }
    /**
     * Clone the texture.
     * @returns the cloned texture
     */ clone() {
        const textureSize = this.getSize();
        const newTexture = new NoiseProceduralTexture(this.name, textureSize.width, this.getScene(), this._fallbackTexture ? this._fallbackTexture : undefined, this._generateMipMaps);
        // Base texture
        newTexture.hasAlpha = this.hasAlpha;
        newTexture.level = this.level;
        // RenderTarget Texture
        newTexture.coordinatesMode = this.coordinatesMode;
        // Noise Specifics
        newTexture.brightness = this.brightness;
        newTexture.octaves = this.octaves;
        newTexture.persistence = this.persistence;
        newTexture.animationSpeedFactor = this.animationSpeedFactor;
        newTexture.time = this.time;
        return newTexture;
    }
    /**
     * Creates a NoiseProceduralTexture from parsed noise procedural texture data
     * @param parsedTexture defines parsed texture data
     * @param scene defines the current scene
     * @returns a parsed NoiseProceduralTexture
     */ static Parse(parsedTexture, scene) {
        const texture = new NoiseProceduralTexture(parsedTexture.name, parsedTexture.size, scene, undefined, parsedTexture.generateMipMaps);
        texture.brightness = parsedTexture.brightness;
        texture.octaves = parsedTexture.octaves;
        texture.persistence = parsedTexture.persistence;
        texture.animationSpeedFactor = parsedTexture.animationSpeedFactor;
        texture.time = parsedTexture.time ?? 0;
        return texture;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.NoiseProceduralTexture", NoiseProceduralTexture); //# sourceMappingURL=noiseProceduralTexture.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Procedurals/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Procedurals$2f$customProceduralTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Procedurals/customProceduralTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Procedurals$2f$noiseProceduralTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Procedurals/noiseProceduralTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Procedurals$2f$proceduralTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Procedurals/proceduralTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Procedurals$2f$proceduralTextureSceneComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Procedurals/proceduralTextureSceneComponent.js [app-client] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
;
;
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/rawCubeTexture.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RawCubeTexture",
    ()=>RawCubeTexture
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/decorators.serialization.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$environmentTextureTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/environmentTextureTools.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$cubeTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/cubeTexture.js [app-client] (ecmascript)");
;
;
;
class RawCubeTexture extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$cubeTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CubeTexture"] {
    /**
     * Creates a cube texture where the raw buffers are passed in.
     * @param scene defines the scene the texture is attached to
     * @param data defines the array of data to use to create each face
     * @param size defines the size of the textures
     * @param format defines the format of the data
     * @param type defines the type of the data (like Engine.TEXTURETYPE_UNSIGNED_BYTE)
     * @param generateMipMaps  defines if the engine should generate the mip levels
     * @param invertY defines if data must be stored with Y axis inverted
     * @param samplingMode defines the required sampling mode (like Texture.NEAREST_SAMPLINGMODE)
     * @param compression defines the compression used (null by default)
     */ constructor(scene, data, size, format = 5, type = 0, generateMipMaps = false, invertY = false, samplingMode = 3, compression = null){
        super("", scene);
        this._texture = scene.getEngine().createRawCubeTexture(data, size, format, type, generateMipMaps, invertY, samplingMode, compression);
    }
    /**
     * Updates the raw cube texture.
     * @param data defines the data to store
     * @param format defines the data format
     * @param type defines the type fo the data (Engine.TEXTURETYPE_UNSIGNED_BYTE by default)
     * @param invertY defines if data must be stored with Y axis inverted
     * @param compression defines the compression used (null by default)
     */ update(data, format, type, invertY, compression = null) {
        this._texture.getEngine().updateRawCubeTexture(this._texture, data, format, type, invertY, compression);
    }
    /**
     * Updates a raw cube texture with RGBD encoded data.
     * @param data defines the array of data [mipmap][face] to use to create each face
     * @param sphericalPolynomial defines the spherical polynomial for irradiance
     * @param lodScale defines the scale applied to environment texture. This manages the range of LOD level used for IBL according to the roughness
     * @param lodOffset defines the offset applied to environment texture. This manages first LOD level used for IBL according to the roughness
     * @returns a promise that resolves when the operation is complete
     */ // eslint-disable-next-line @typescript-eslint/promise-function-async, no-restricted-syntax
    updateRGBDAsync(data, sphericalPolynomial = null, lodScale = 0.8, lodOffset = 0) {
        // eslint-disable-next-line github/no-then
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$environmentTextureTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_UpdateRGBDAsync"])(this._texture, data, sphericalPolynomial, lodScale, lodOffset).then(()=>{});
    }
    /**
     * Clones the raw cube texture.
     * @returns a new cube texture
     */ clone() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SerializationHelper"].Clone(()=>{
            const scene = this.getScene();
            const internalTexture = this._texture;
            const texture = new RawCubeTexture(scene, internalTexture._bufferViewArray, internalTexture.width, internalTexture.format, internalTexture.type, internalTexture.generateMipMaps, internalTexture.invertY, internalTexture.samplingMode, internalTexture._compression);
            if (internalTexture.source === 13 /* InternalTextureSource.CubeRawRGBD */ ) {
                // eslint-disable-next-line @typescript-eslint/no-floating-promises
                texture.updateRGBDAsync(internalTexture._bufferViewArrayArray, internalTexture._sphericalPolynomial, internalTexture._lodGenerationScale, internalTexture._lodGenerationOffset);
            }
            return texture;
        }, this);
    }
} //# sourceMappingURL=rawCubeTexture.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/rawTexture3D.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RawTexture3D",
    ()=>RawTexture3D
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/texture.js [app-client] (ecmascript)");
;
class RawTexture3D extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"] {
    /**
     * Gets the width of the texture
     */ get width() {
        return this._texture ? this._texture.width : 0;
    }
    /**
     * Gets the height of the texture
     */ get height() {
        return this._texture ? this._texture.height : 0;
    }
    /**
     * Gets the depth of the texture
     */ get depth() {
        return this._texture ? this._texture.depth : 0;
    }
    /**
     * Create a new RawTexture3D
     * @param data defines the data of the texture
     * @param width defines the width of the texture
     * @param height defines the height of the texture
     * @param depth defines the depth of the texture
     * @param format defines the texture format to use
     * @param scene defines the hosting scene
     * @param generateMipMaps defines a boolean indicating if mip levels should be generated (true by default)
     * @param invertY defines if texture must be stored with Y axis inverted
     * @param samplingMode defines the sampling mode to use (Texture.TRILINEAR_SAMPLINGMODE by default)
     * @param textureType defines the texture Type (Engine.TEXTURETYPE_UNSIGNED_BYTE, Engine.TEXTURETYPE_FLOAT...)
     * @param creationFlags specific flags to use when creating the texture (1 for storage textures, for eg)
     */ constructor(data, width, height, depth, /** Gets or sets the texture format to use */ format, scene, generateMipMaps = true, invertY = false, samplingMode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"].TRILINEAR_SAMPLINGMODE, textureType = 0, creationFlags){
        super(null, scene, !generateMipMaps, invertY);
        this.format = format;
        this._texture = scene.getEngine().createRawTexture3D(data, width, height, depth, format, generateMipMaps, invertY, samplingMode, null, textureType, creationFlags);
        this.is3D = true;
    }
    /**
     * Update the texture with new data
     * @param data defines the data to store in the texture
     */ update(data) {
        if (!this._texture) {
            return;
        }
        this._getEngine().updateRawTexture3D(this._texture, data, this._texture.format, this._texture.invertY, null, this._texture.type);
    }
} //# sourceMappingURL=rawTexture3D.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/refractionTexture.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RefractionTexture",
    ()=>RefractionTexture
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$plane$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.plane.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$renderTargetTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/renderTargetTexture.js [app-client] (ecmascript)");
;
;
class RefractionTexture extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$renderTargetTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RenderTargetTexture"] {
    /**
     * Creates a refraction texture used by refraction channel of the standard material.
     * It is like a mirror but to see through a material.
     * @see https://doc.babylonjs.com/features/featuresDeepDive/materials/using/reflectionTexture#refraction
     * @param name Define the texture name
     * @param size Define the size of the underlying texture
     * @param scene Define the scene the refraction belongs to
     * @param generateMipMaps Define if we need to generate mips level for the refraction
     */ constructor(name, size, scene, generateMipMaps){
        super(name, size, scene, generateMipMaps, true);
        /**
         * Define the reflection plane we want to use. The refractionPlane is usually set to the constructed refractor.
         * It is possible to directly set the refractionPlane by directly using a Plane(a, b, c, d) where a, b and c give the plane normal vector (a, b, c) and d is a scalar displacement from the refractionPlane to the origin. However in all but the very simplest of situations it is more straight forward to set it to the refractor as stated in the doc.
         * @see https://doc.babylonjs.com/features/featuresDeepDive/materials/using/reflectionTexture#refraction
         */ this.refractionPlane = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$plane$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Plane"](0, 1, 0, 1);
        /**
         * Define how deep under the surface we should see.
         */ this.depth = 2.0;
        this.onBeforeRenderObservable.add(()=>{
            this.getScene().clipPlane = this.refractionPlane;
        });
        this.onAfterRenderObservable.add(()=>{
            this.getScene().clipPlane = null;
        });
    }
    /**
     * Clone the refraction texture.
     * @returns the cloned texture
     */ clone() {
        const scene = this.getScene();
        if (!scene) {
            return this;
        }
        const textureSize = this.getSize();
        const newTexture = new RefractionTexture(this.name, textureSize.width, scene, this._generateMipMaps);
        // Base texture
        newTexture.hasAlpha = this.hasAlpha;
        newTexture.level = this.level;
        // Refraction Texture
        newTexture.refractionPlane = this.refractionPlane.clone();
        if (this.renderList) {
            newTexture.renderList = this.renderList.slice(0);
        }
        newTexture.depth = this.depth;
        return newTexture;
    }
    /**
     * Serialize the texture to a JSON representation you could use in Parse later on
     * @returns the serialized JSON representation
     */ serialize() {
        if (!this.name) {
            return null;
        }
        const serializationObject = super.serialize();
        serializationObject.mirrorPlane = this.refractionPlane.asArray();
        serializationObject.depth = this.depth;
        return serializationObject;
    }
} //# sourceMappingURL=refractionTexture.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/textureMerger.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CreateConstantInput",
    ()=>CreateConstantInput,
    "CreateRGBAConfiguration",
    ()=>CreateRGBAConfiguration,
    "CreateTextureInput",
    ()=>CreateTextureInput,
    "MergeTexturesAsync",
    ()=>MergeTexturesAsync
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Procedurals$2f$proceduralTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Procedurals/proceduralTexture.js [app-client] (ecmascript)");
;
const _ShaderName = "textureMerger";
/**
 * @internal
 * Check if a channel input is a texture input
 * @param input The channel input to check
 * @returns True if the input is a texture input, false otherwise
 */ function IsTextureInput(input) {
    return "texture" in input;
}
/**
 * @internal
 * Check if a channel input is a constant input
 * @param input The channel input to check
 * @returns True if the input is a constant input, false otherwise
 */ function IsConstantInput(input) {
    return "value" in input;
}
/**
 * @internal
 * Copy texture transformation properties from one texture to another
 * @param source The source texture
 * @param destination The destination texture
 */ function CopyTextureTransform(source, destination) {
    destination.uOffset = source.uOffset;
    destination.vOffset = source.vOffset;
    destination.uScale = source.uScale;
    destination.vScale = source.vScale;
    destination.uAng = source.uAng;
    destination.vAng = source.vAng;
    destination.wAng = source.wAng;
    destination.uRotationCenter = source.uRotationCenter;
    destination.vRotationCenter = source.vRotationCenter;
}
async function MergeTexturesAsync(name, config, scene) {
    const channels = [
        config.red,
        config.green,
        config.blue,
        config.alpha
    ];
    const textureInputs = [];
    const textureInputMap = []; // Maps channel index to texture input index (-1 for constants)
    // Collect unique textures and validate inputs
    for(let channelIndex = 0; channelIndex < 4; channelIndex++){
        const channel = channels[channelIndex];
        if (channel) {
            if (IsTextureInput(channel)) {
                // Validate source channel
                if (channel.sourceChannel < 0 || channel.sourceChannel > 3) {
                    throw new Error("Source channel must be between 0 and 3 (R, G, B, A)");
                }
                // Find or add texture to inputs
                let textureIndex = textureInputs.indexOf(channel.texture);
                if (textureIndex === -1) {
                    textureIndex = textureInputs.length;
                    textureInputs.push(channel.texture);
                }
                textureInputMap[channelIndex] = textureIndex;
            } else if (IsConstantInput(channel)) {
                // Validate constant value
                if (channel.value < 0 || channel.value > 1) {
                    throw new Error("Constant value must be between 0.0 and 1.0");
                }
                textureInputMap[channelIndex] = -1;
            } else {
                throw new Error("Invalid channel input configuration");
            }
        } else {
            textureInputMap[channelIndex] = -1;
        }
    }
    // Determine output size
    let outputSize = config.outputSize;
    if (!outputSize && textureInputs.length > 0) {
        // Use the largest texture size
        let maxSize = 0;
        for (const texture of textureInputs){
            const size = texture.getSize();
            const currentSize = Math.max(size.width, size.height);
            if (currentSize > maxSize) {
                maxSize = currentSize;
                outputSize = size.width === size.height ? maxSize : size;
            }
        }
    }
    outputSize = outputSize || 512; // Fallback size
    // Generate shader defines
    const defines = [];
    const usedTextures = new Set();
    for(let channelIndex = 0; channelIndex < 4; channelIndex++){
        const channel = channels[channelIndex];
        const channelName = [
            "RED",
            "GREEN",
            "BLUE",
            "ALPHA"
        ][channelIndex];
        if (channel && IsTextureInput(channel)) {
            defines.push(`${channelName}_FROM_TEXTURE`);
            const textureIndex = textureInputMap[channelIndex];
            usedTextures.add(textureIndex);
        }
    }
    // Add texture defines for used textures
    usedTextures.forEach((textureIndex)=>{
        defines.push(`USE_TEXTURE${textureIndex}`);
    });
    // Create the procedural texture
    const outputTextureOptions = {
        type: 2,
        format: 5,
        samplingMode: 1,
        generateDepthBuffer: false,
        generateMipMaps: false,
        shaderLanguage: scene.getEngine().isWebGPU ? 1 /* ShaderLanguage.WGSL */  : 0 /* ShaderLanguage.GLSL */ ,
        extraInitializationsAsync: async ()=>{
            if (scene.getEngine().isWebGPU) {
                await Promise.all([
                    __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/textureMerger.fragment.js [app-client] (ecmascript, async loader)")
                ]);
            } else {
                await Promise.all([
                    __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/textureMerger.fragment.js [app-client] (ecmascript, async loader)")
                ]);
            }
        }
    };
    const proceduralTexture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Procedurals$2f$proceduralTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProceduralTexture"](name, outputSize, _ShaderName, scene, outputTextureOptions);
    proceduralTexture.refreshRate = -1; // Do not auto-refresh
    // Set the defines
    proceduralTexture.defines = defines.length > 0 ? "#define " + defines.join("\n#define ") + "\n" : "";
    // Set up texture inputs
    for(let i = 0; i < textureInputs.length; i++){
        CopyTextureTransform(textureInputs[i], proceduralTexture);
        proceduralTexture.setTexture(`inputTexture${i}`, textureInputs[i]);
    }
    // Set up channel configuration
    for(let channelIndex = 0; channelIndex < 4; channelIndex++){
        const channel = channels[channelIndex];
        const channelName = [
            "red",
            "green",
            "blue",
            "alpha"
        ][channelIndex];
        if (channel && IsTextureInput(channel)) {
            const textureIndex = textureInputMap[channelIndex];
            proceduralTexture.setInt(`${channelName}TextureIndex`, textureIndex);
            proceduralTexture.setInt(`${channelName}SourceChannel`, channel.sourceChannel);
        } else {
            // Use constant value (either provided or default)
            let constantValue;
            if (channel && IsConstantInput(channel)) {
                constantValue = channel.value;
            } else {
                // Use default values: 0 for RGB, 1 for alpha
                constantValue = channelIndex === 3 ? 1.0 : 0.0;
            }
            proceduralTexture.setFloat(`${channelName}ConstantValue`, constantValue);
        }
    }
    return await new Promise((resolve, reject)=>{
        // Compile and render
        proceduralTexture.executeWhenReady(()=>{
            try {
                proceduralTexture.render();
                resolve(proceduralTexture);
            } catch (error) {
                reject(error instanceof Error ? error : new Error(String(error)));
            }
        });
    });
}
function CreateTextureInput(texture, sourceChannel) {
    return {
        texture,
        sourceChannel
    };
}
function CreateConstantInput(value) {
    return {
        value
    };
}
function CreateRGBAConfiguration(red, green, blue, alpha) {
    return {
        red,
        green,
        blue,
        alpha
    };
} //# sourceMappingURL=textureMerger.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/thinRenderTargetTexture.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThinRenderTargetTexture",
    ()=>ThinRenderTargetTexture
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$thinTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/thinTexture.js [app-client] (ecmascript)");
;
class ThinRenderTargetTexture extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$thinTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinTexture"] {
    /**
     * Gets the render target wrapper associated with this render target
     */ get renderTarget() {
        return this._renderTarget;
    }
    /**
     * Instantiates a new ThinRenderTargetTexture.
     * Tiny helper class to wrap a RenderTargetWrapper in a texture.
     * This can be used as an internal texture wrapper in ThinEngine to benefit from the cache and to hold on the associated RTT
     * @param engine Define the internalTexture to wrap
     * @param size Define the size of the RTT to create
     * @param options Define rendertarget options
     */ constructor(engine, size, options){
        super(null);
        this._renderTarget = null;
        this._engine = engine;
        this._renderTargetOptions = options;
        this.resize(size);
    }
    /**
     * Resize the texture to a new desired size.
     * Be careful as it will recreate all the data in the new texture.
     * @param size Define the new size. It can be:
     *   - a number for squared texture,
     *   - an object containing { width: number, height: number }
     */ resize(size) {
        this._renderTarget?.dispose();
        this._renderTarget = null;
        this._texture = null;
        this._size = size;
        if (this._engine) {
            this._renderTarget = this._engine.createRenderTargetTexture(this._size, this._renderTargetOptions);
        }
        this._texture = this.renderTarget.texture;
    }
    /**
     * Get the underlying lower level texture from Babylon.
     * @returns the internal texture
     */ getInternalTexture() {
        return this._texture;
    }
    /**
     * Get the class name of the texture.
     * @returns "ThinRenderTargetTexture"
     */ getClassName() {
        return "ThinRenderTargetTexture";
    }
    /**
     * Dispose the texture and release its associated resources.
     * @param disposeOnlyFramebuffers if set to true it will dispose only the frame buffers (default: false)
     */ dispose(disposeOnlyFramebuffers = false) {
        this._renderTarget?.dispose(true);
        this._renderTarget = null;
        if (!disposeOnlyFramebuffers) {
            super.dispose();
        }
    }
} //# sourceMappingURL=thinRenderTargetTexture.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/no-restricted-imports */ __turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$baseTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/baseTexture.js [app-client] (ecmascript)");
// eslint-disable-next-line import/export
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$baseTexture$2e$polynomial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/baseTexture.polynomial.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$colorGradingTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/colorGradingTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$cubeTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/cubeTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$dynamicTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/dynamicTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$equiRectangularCubeTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/equiRectangularCubeTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$externalTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/externalTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Filtering$2f$hdrFiltering$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Filtering/hdrFiltering.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$envCubeTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/envCubeTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$hdrCubeTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/hdrCubeTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$exrCubeTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/exrCubeTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$htmlElementTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/htmlElementTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$internalTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/internalTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Loaders/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$mirrorTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/mirrorTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$multiRenderTarget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/multiRenderTarget.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Packer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Packer/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Procedurals$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Procedurals/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$rawCubeTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/rawCubeTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$rawTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/rawTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$rawTexture2DArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/rawTexture2DArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$rawTexture3D$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/rawTexture3D.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$refractionTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/refractionTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$renderTargetTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/renderTargetTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$textureMerger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/textureMerger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$textureSampler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/textureSampler.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/texture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$thinTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/thinTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$thinRenderTargetTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/thinRenderTargetTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$videoTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/videoTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$ktx2decoderTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/ktx2decoderTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$textureCreationOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/textureCreationOptions.js [app-client] (ecmascript)");
// Shaders for procedural textures
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$procedural$2e$vertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/procedural.vertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$procedural$2e$vertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/procedural.vertex.js [app-client] (ecmascript)");
// HDR filtering
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$hdrFiltering$2e$vertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/hdrFiltering.vertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$hdrFiltering$2e$fragment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/hdrFiltering.fragment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$hdrFiltering$2e$vertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/hdrFiltering.vertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$hdrFiltering$2e$fragment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/hdrFiltering.fragment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$hdrIrradianceFiltering$2e$vertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/hdrIrradianceFiltering.vertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$hdrIrradianceFiltering$2e$fragment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/hdrIrradianceFiltering.fragment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$hdrIrradianceFiltering$2e$vertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/hdrIrradianceFiltering.vertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$hdrIrradianceFiltering$2e$fragment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/hdrIrradianceFiltering.fragment.js [app-client] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/prePassRenderTarget.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PrePassRenderTarget",
    ()=>PrePassRenderTarget
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$multiRenderTarget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/multiRenderTarget.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$PostProcesses$2f$imageProcessingPostProcess$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/PostProcesses/imageProcessingPostProcess.js [app-client] (ecmascript)");
;
;
class PrePassRenderTarget extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$multiRenderTarget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MultiRenderTarget"] {
    constructor(name, renderTargetTexture, size, count, scene, options){
        super(name, size, count, scene, options);
        /**
         * @internal
         */ this._beforeCompositionPostProcesses = [];
        /**
         * @internal
         */ this._internalTextureDirty = false;
        /**
         * Is this render target enabled for prepass rendering
         */ this.enabled = false;
        /**
         * Render target associated with this prePassRenderTarget
         * If this is `null`, it means this prePassRenderTarget is associated with the scene
         */ this.renderTargetTexture = null;
        this.renderTargetTexture = renderTargetTexture;
    }
    /**
     * Creates a composition effect for this RT
     * @internal
     */ _createCompositionEffect() {
        this.imageProcessingPostProcess = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$PostProcesses$2f$imageProcessingPostProcess$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImageProcessingPostProcess"]("prePassComposition", 1, null, undefined, this._engine);
        this.imageProcessingPostProcess._updateParameters();
    }
    /**
     * Checks that the size of this RT is still adapted to the desired render size.
     * @internal
     */ _checkSize() {
        const requiredWidth = this._engine.getRenderWidth(true);
        const requiredHeight = this._engine.getRenderHeight(true);
        const width = this.getRenderWidth();
        const height = this.getRenderHeight();
        if (width !== requiredWidth || height !== requiredHeight) {
            this.resize({
                width: requiredWidth,
                height: requiredHeight
            });
            this._internalTextureDirty = true;
        }
    }
    /**
     * Changes the number of render targets in this MRT
     * Be careful as it will recreate all the data in the new texture.
     * @param count new texture count
     * @param options Specifies texture types and sampling modes for new textures
     * @param textureNames Specifies the names of the textures (optional)
     */ updateCount(count, options, textureNames) {
        super.updateCount(count, options, textureNames);
        this._internalTextureDirty = true;
    }
    /**
     * Resets the post processes chains applied to this RT.
     * @internal
     */ _resetPostProcessChain() {
        this._beforeCompositionPostProcesses.length = 0;
    }
    /**
     * Diposes this render target
     */ dispose() {
        const scene = this._scene;
        super.dispose();
        if (scene && scene.prePassRenderer) {
            const index = scene.prePassRenderer.renderTargets.indexOf(this);
            if (index !== -1) {
                scene.prePassRenderer.renderTargets.splice(index, 1);
            }
        }
        if (this.imageProcessingPostProcess) {
            this.imageProcessingPostProcess.dispose();
        }
        if (this.renderTargetTexture) {
            this.renderTargetTexture._prePassRenderTarget = null;
        }
        if (this._outputPostProcess) {
            this._outputPostProcess.autoClear = true;
            this._outputPostProcess.restoreDefaultInputTexture();
        }
    }
} //# sourceMappingURL=prePassRenderTarget.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Loaders/EXR/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ApplyLut",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$compression$2e$huf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApplyLut"],
    "CompressionCodes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CompressionCodes"],
    "CreateDecoderAsync",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$decoder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateDecoderAsync"],
    "DecodeFloat32",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DecodeFloat32"],
    "DecodeRunLength",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$compression$2e$rle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DecodeRunLength"],
    "EXROutputType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$configuration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EXROutputType"],
    "ExrLoaderGlobalConfiguration",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$configuration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExrLoaderGlobalConfiguration"],
    "GetExrHeader",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$header$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GetExrHeader"],
    "HufUncompress",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$compression$2e$huf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HufUncompress"],
    "InterleaveScalar",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InterleaveScalar"],
    "ParseFloat16",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParseFloat16"],
    "ParseFloat32",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParseFloat32"],
    "ParseInt32",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParseInt32"],
    "ParseInt64",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParseInt64"],
    "ParseNullTerminatedString",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParseNullTerminatedString"],
    "ParseUint16",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParseUint16"],
    "ParseUint32",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParseUint32"],
    "ParseUint8",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParseUint8"],
    "ParseUint8Array",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParseUint8Array"],
    "ParseValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParseValue"],
    "Predictor",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Predictor"],
    "ReverseLutFromBitmap",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$compression$2e$huf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReverseLutFromBitmap"],
    "ScanData",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$decoder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScanData"],
    "UncompressPIZ",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$compression$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UncompressPIZ"],
    "UncompressPXR",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$compression$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UncompressPXR"],
    "UncompressRAW",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$compression$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UncompressRAW"],
    "UncompressRLE",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$compression$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UncompressRLE"],
    "UncompressZIP",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$compression$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UncompressZIP"],
    "Wav2Decode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$compression$2e$huf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Wav2Decode"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Loaders/EXR/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$compression$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Loaders/EXR/exrLoader.compression.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$compression$2e$huf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Loaders/EXR/exrLoader.compression.huf.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$compression$2e$rle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Loaders/EXR/exrLoader.compression.rle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$configuration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Loaders/EXR/exrLoader.configuration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Loaders/EXR/exrLoader.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$decoder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Loaders/EXR/exrLoader.decoder.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$exrLoader$2e$header$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Loaders/EXR/exrLoader.header.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Loaders/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ApplyLut",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApplyLut"],
    "CompressionCodes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CompressionCodes"],
    "CreateDecoderAsync",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateDecoderAsync"],
    "DecodeFloat32",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DecodeFloat32"],
    "DecodeRunLength",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DecodeRunLength"],
    "EXROutputType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EXROutputType"],
    "ExrLoaderGlobalConfiguration",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExrLoaderGlobalConfiguration"],
    "GetExrHeader",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GetExrHeader"],
    "HufUncompress",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HufUncompress"],
    "InterleaveScalar",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InterleaveScalar"],
    "ParseFloat16",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParseFloat16"],
    "ParseFloat32",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParseFloat32"],
    "ParseInt32",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParseInt32"],
    "ParseInt64",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParseInt64"],
    "ParseNullTerminatedString",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParseNullTerminatedString"],
    "ParseUint16",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParseUint16"],
    "ParseUint32",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParseUint32"],
    "ParseUint8",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParseUint8"],
    "ParseUint8Array",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParseUint8Array"],
    "ParseValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParseValue"],
    "Predictor",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Predictor"],
    "ReadExrDataAsync",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$exrTextureLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadExrDataAsync"],
    "ReverseLutFromBitmap",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReverseLutFromBitmap"],
    "ScanData",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScanData"],
    "UncompressPIZ",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UncompressPIZ"],
    "UncompressPXR",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UncompressPXR"],
    "UncompressRAW",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UncompressRAW"],
    "UncompressRLE",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UncompressRLE"],
    "UncompressZIP",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UncompressZIP"],
    "Wav2Decode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Wav2Decode"],
    "_BasisTextureLoader",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$basisTextureLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_BasisTextureLoader"],
    "_DDSTextureLoader",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$ddsTextureLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_DDSTextureLoader"],
    "_ENVTextureLoader",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$envTextureLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_ENVTextureLoader"],
    "_ExrTextureLoader",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$exrTextureLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_ExrTextureLoader"],
    "_GetCompatibleTextureLoader",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$textureLoaderManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_GetCompatibleTextureLoader"],
    "_HDRTextureLoader",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$hdrTextureLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_HDRTextureLoader"],
    "_IESTextureLoader",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$iesTextureLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_IESTextureLoader"],
    "_KTXTextureLoader",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$ktxTextureLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_KTXTextureLoader"],
    "_TGATextureLoader",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$tgaTextureLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_TGATextureLoader"],
    "registerTextureLoader",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$textureLoaderManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerTextureLoader"],
    "unregisterTextureLoader",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$textureLoaderManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unregisterTextureLoader"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Loaders/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$internalTextureLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Loaders/internalTextureLoader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$ddsTextureLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Loaders/ddsTextureLoader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$envTextureLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Loaders/envTextureLoader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$ktxTextureLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Loaders/ktxTextureLoader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$tgaTextureLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Loaders/tgaTextureLoader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$hdrTextureLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Loaders/hdrTextureLoader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$basisTextureLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Loaders/basisTextureLoader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$exrTextureLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Loaders/exrTextureLoader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$iesTextureLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Loaders/iesTextureLoader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$textureLoaderManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Loaders/textureLoaderManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$EXR$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Loaders/EXR/index.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Packer/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TexturePacker",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Packer$2f$packer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TexturePacker"],
    "TexturePackerFrame",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Packer$2f$frame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TexturePackerFrame"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Packer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Packer/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Packer$2f$packer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Packer/packer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Packer$2f$frame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Packer/frame.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Procedurals/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CustomProceduralTexture",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Procedurals$2f$customProceduralTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomProceduralTexture"],
    "NoiseProceduralTexture",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Procedurals$2f$noiseProceduralTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NoiseProceduralTexture"],
    "ProceduralTexture",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Procedurals$2f$proceduralTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProceduralTexture"],
    "ProceduralTextureSceneComponent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Procedurals$2f$proceduralTextureSceneComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProceduralTextureSceneComponent"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Procedurals$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Procedurals/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Procedurals$2f$customProceduralTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Procedurals/customProceduralTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Procedurals$2f$noiseProceduralTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Procedurals/noiseProceduralTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Procedurals$2f$proceduralTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Procedurals/proceduralTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Procedurals$2f$proceduralTextureSceneComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Procedurals/proceduralTextureSceneComponent.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ApplyLut",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApplyLut"],
    "BaseTexture",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$baseTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseTexture"],
    "ColorGradingTexture",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$colorGradingTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ColorGradingTexture"],
    "CompressionCodes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CompressionCodes"],
    "CreateConstantInput",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$textureMerger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateConstantInput"],
    "CreateDecoderAsync",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateDecoderAsync"],
    "CreateRGBAConfiguration",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$textureMerger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateRGBAConfiguration"],
    "CreateTextureInput",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$textureMerger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateTextureInput"],
    "CubeTexture",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$cubeTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CubeTexture"],
    "CustomProceduralTexture",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Procedurals$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomProceduralTexture"],
    "DecodeFloat32",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DecodeFloat32"],
    "DecodeRunLength",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DecodeRunLength"],
    "DynamicTexture",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$dynamicTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DynamicTexture"],
    "EXRCubeTexture",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$exrCubeTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EXRCubeTexture"],
    "EXROutputType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EXROutputType"],
    "EngineFormat",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$ktx2decoderTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EngineFormat"],
    "EnvCubeTexture",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$envCubeTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EnvCubeTexture"],
    "EquiRectangularCubeTexture",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$equiRectangularCubeTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EquiRectangularCubeTexture"],
    "ExrLoaderGlobalConfiguration",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExrLoaderGlobalConfiguration"],
    "ExternalTexture",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$externalTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExternalTexture"],
    "GetExrHeader",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GetExrHeader"],
    "HDRCubeTexture",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$hdrCubeTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HDRCubeTexture"],
    "HDRFiltering",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Filtering$2f$hdrFiltering$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HDRFiltering"],
    "HtmlElementTexture",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$htmlElementTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HtmlElementTexture"],
    "HufUncompress",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HufUncompress"],
    "InterleaveScalar",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InterleaveScalar"],
    "InternalTexture",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$internalTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InternalTexture"],
    "InternalTextureSource",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$internalTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InternalTextureSource"],
    "MergeTexturesAsync",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$textureMerger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MergeTexturesAsync"],
    "MirrorTexture",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$mirrorTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MirrorTexture"],
    "MultiRenderTarget",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$multiRenderTarget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MultiRenderTarget"],
    "NoiseProceduralTexture",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Procedurals$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NoiseProceduralTexture"],
    "ParseFloat16",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParseFloat16"],
    "ParseFloat32",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParseFloat32"],
    "ParseInt32",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParseInt32"],
    "ParseInt64",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParseInt64"],
    "ParseNullTerminatedString",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParseNullTerminatedString"],
    "ParseUint16",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParseUint16"],
    "ParseUint32",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParseUint32"],
    "ParseUint8",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParseUint8"],
    "ParseUint8Array",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParseUint8Array"],
    "ParseValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParseValue"],
    "Predictor",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Predictor"],
    "ProceduralTexture",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Procedurals$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProceduralTexture"],
    "ProceduralTextureSceneComponent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Procedurals$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProceduralTextureSceneComponent"],
    "RawCubeTexture",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$rawCubeTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RawCubeTexture"],
    "RawTexture",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$rawTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RawTexture"],
    "RawTexture2DArray",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$rawTexture2DArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RawTexture2DArray"],
    "RawTexture3D",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$rawTexture3D$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RawTexture3D"],
    "ReadExrDataAsync",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReadExrDataAsync"],
    "RefractionTexture",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$refractionTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RefractionTexture"],
    "RenderTargetTexture",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$renderTargetTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RenderTargetTexture"],
    "ReverseLutFromBitmap",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReverseLutFromBitmap"],
    "ScanData",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScanData"],
    "SourceTextureFormat",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$ktx2decoderTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SourceTextureFormat"],
    "Texture",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"],
    "TexturePacker",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Packer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TexturePacker"],
    "TexturePackerFrame",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Packer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TexturePackerFrame"],
    "TextureSampler",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$textureSampler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextureSampler"],
    "ThinRenderTargetTexture",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$thinRenderTargetTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinRenderTargetTexture"],
    "ThinTexture",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$thinTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinTexture"],
    "TranscodeTarget",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$ktx2decoderTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TranscodeTarget"],
    "UncompressPIZ",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UncompressPIZ"],
    "UncompressPXR",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UncompressPXR"],
    "UncompressRAW",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UncompressRAW"],
    "UncompressRLE",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UncompressRLE"],
    "UncompressZIP",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UncompressZIP"],
    "VideoTexture",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$videoTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VideoTexture"],
    "Wav2Decode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Wav2Decode"],
    "_BasisTextureLoader",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_BasisTextureLoader"],
    "_DDSTextureLoader",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_DDSTextureLoader"],
    "_ENVTextureLoader",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_ENVTextureLoader"],
    "_ExrTextureLoader",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_ExrTextureLoader"],
    "_GetCompatibleTextureLoader",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_GetCompatibleTextureLoader"],
    "_HDRTextureLoader",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_HDRTextureLoader"],
    "_IESTextureLoader",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_IESTextureLoader"],
    "_KTXTextureLoader",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_KTXTextureLoader"],
    "_TGATextureLoader",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_TGATextureLoader"],
    "getDimensionsFromTextureSize",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$textureCreationOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDimensionsFromTextureSize"],
    "hdrFilteringPixelShader",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$hdrFiltering$2e$fragment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hdrFilteringPixelShader"],
    "hdrFilteringPixelShaderWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$hdrFiltering$2e$fragment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hdrFilteringPixelShaderWGSL"],
    "hdrFilteringVertexShader",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$hdrFiltering$2e$vertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hdrFilteringVertexShader"],
    "hdrFilteringVertexShaderWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$hdrFiltering$2e$vertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hdrFilteringVertexShaderWGSL"],
    "hdrIrradianceFilteringPixelShader",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$hdrIrradianceFiltering$2e$fragment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hdrIrradianceFilteringPixelShader"],
    "hdrIrradianceFilteringPixelShaderWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$hdrIrradianceFiltering$2e$fragment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hdrIrradianceFilteringPixelShaderWGSL"],
    "hdrIrradianceFilteringVertexShader",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$hdrIrradianceFiltering$2e$vertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hdrIrradianceFilteringVertexShader"],
    "hdrIrradianceFilteringVertexShaderWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$hdrIrradianceFiltering$2e$vertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hdrIrradianceFilteringVertexShaderWGSL"],
    "proceduralVertexShader",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$procedural$2e$vertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["proceduralVertexShader"],
    "proceduralVertexShaderWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$procedural$2e$vertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["proceduralVertexShaderWGSL"],
    "registerTextureLoader",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerTextureLoader"],
    "textureSizeIsObject",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$textureCreationOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["textureSizeIsObject"],
    "unregisterTextureLoader",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unregisterTextureLoader"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$baseTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/baseTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$baseTexture$2e$polynomial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/baseTexture.polynomial.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$colorGradingTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/colorGradingTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$cubeTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/cubeTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$dynamicTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/dynamicTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$equiRectangularCubeTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/equiRectangularCubeTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$externalTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/externalTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Filtering$2f$hdrFiltering$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Filtering/hdrFiltering.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$envCubeTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/envCubeTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$hdrCubeTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/hdrCubeTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$exrCubeTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/exrCubeTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$htmlElementTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/htmlElementTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$internalTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/internalTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Loaders/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$mirrorTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/mirrorTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$multiRenderTarget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/multiRenderTarget.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Packer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Packer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Procedurals$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Procedurals/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$rawCubeTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/rawCubeTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$rawTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/rawTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$rawTexture2DArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/rawTexture2DArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$rawTexture3D$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/rawTexture3D.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$refractionTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/refractionTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$renderTargetTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/renderTargetTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$textureMerger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/textureMerger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$textureSampler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/textureSampler.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/texture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$thinTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/thinTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$thinRenderTargetTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/thinRenderTargetTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$videoTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/videoTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$ktx2decoderTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/ktx2decoderTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$textureCreationOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/textureCreationOptions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$procedural$2e$vertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/procedural.vertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$procedural$2e$vertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/procedural.vertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$hdrFiltering$2e$vertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/hdrFiltering.vertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$hdrFiltering$2e$fragment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/hdrFiltering.fragment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$hdrFiltering$2e$vertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/hdrFiltering.vertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$hdrFiltering$2e$fragment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/hdrFiltering.fragment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$hdrIrradianceFiltering$2e$vertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/hdrIrradianceFiltering.vertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$hdrIrradianceFiltering$2e$fragment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/hdrIrradianceFiltering.fragment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$hdrIrradianceFiltering$2e$vertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/hdrIrradianceFiltering.vertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$hdrIrradianceFiltering$2e$fragment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/hdrIrradianceFiltering.fragment.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=dcdbf_%40babylonjs_core_Materials_Textures_80f5881b._.js.map