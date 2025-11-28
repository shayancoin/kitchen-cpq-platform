module.exports = [
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/effect.functions.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_ProcessShaderCode",
    ()=>_ProcessShaderCode,
    "createAndPreparePipelineContext",
    ()=>createAndPreparePipelineContext,
    "getCachedPipeline",
    ()=>getCachedPipeline,
    "resetCachedPipeline",
    ()=>resetCachedPipeline
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$domManagement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/domManagement.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinEngine$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/thinEngine.functions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Processors$2f$shaderProcessor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Processors/shaderProcessor.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/abstractEngine.functions.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
function getCachedPipeline(name, context) {
    const stateObject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinEngine$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStateObject"])(context);
    return stateObject.cachedPipelines[name];
}
function resetCachedPipeline(pipeline) {
    const name = pipeline._name;
    const context = pipeline.context;
    if (name && context) {
        const stateObject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinEngine$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStateObject"])(context);
        const cachedPipeline = stateObject.cachedPipelines[name];
        cachedPipeline?.dispose();
        delete stateObject.cachedPipelines[name];
    }
}
function _ProcessShaderCode(processorOptions, baseName, processFinalCode, onFinalCodeReady, shaderLanguage, engine, effectContext) {
    let vertexSource;
    let fragmentSource;
    // const baseName = this.name;
    const hostDocument = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$domManagement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IsWindowObjectExist"])() ? engine?.getHostDocument() : null;
    if (typeof baseName === "string") {
        vertexSource = baseName;
    } else if (baseName.vertexSource) {
        vertexSource = "source:" + baseName.vertexSource;
    } else if (baseName.vertexElement) {
        vertexSource = hostDocument?.getElementById(baseName.vertexElement) || baseName.vertexElement;
    } else {
        vertexSource = baseName.vertex || baseName;
    }
    if (typeof baseName === "string") {
        fragmentSource = baseName;
    } else if (baseName.fragmentSource) {
        fragmentSource = "source:" + baseName.fragmentSource;
    } else if (baseName.fragmentElement) {
        fragmentSource = hostDocument?.getElementById(baseName.fragmentElement) || baseName.fragmentElement;
    } else {
        fragmentSource = baseName.fragment || baseName;
    }
    const shaderCodes = [
        undefined,
        undefined
    ];
    const shadersLoaded = ()=>{
        if (shaderCodes[0] && shaderCodes[1]) {
            processorOptions.isFragment = true;
            const [migratedVertexCode, fragmentCode] = shaderCodes;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Processors$2f$shaderProcessor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Process"])(fragmentCode, processorOptions, (migratedFragmentCode, codeBeforeMigration)=>{
                if (effectContext) {
                    effectContext._fragmentSourceCodeBeforeMigration = codeBeforeMigration;
                }
                if (processFinalCode) {
                    migratedFragmentCode = processFinalCode("fragment", migratedFragmentCode);
                }
                const finalShaders = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Processors$2f$shaderProcessor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Finalize"])(migratedVertexCode, migratedFragmentCode, processorOptions);
                processorOptions = null;
                const finalCode = UseFinalCode(finalShaders.vertexCode, finalShaders.fragmentCode, baseName, shaderLanguage);
                onFinalCodeReady?.(finalCode.vertexSourceCode, finalCode.fragmentSourceCode);
            }, engine);
        }
    };
    LoadShader(vertexSource, "Vertex", "", (vertexCode)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Processors$2f$shaderProcessor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Initialize"])(processorOptions);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Processors$2f$shaderProcessor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Process"])(vertexCode, processorOptions, (migratedVertexCode, codeBeforeMigration)=>{
            if (effectContext) {
                effectContext._rawVertexSourceCode = vertexCode;
                effectContext._vertexSourceCodeBeforeMigration = codeBeforeMigration;
            }
            if (processFinalCode) {
                migratedVertexCode = processFinalCode("vertex", migratedVertexCode);
            }
            shaderCodes[0] = migratedVertexCode;
            shadersLoaded();
        }, engine);
    }, shaderLanguage);
    LoadShader(fragmentSource, "Fragment", "Pixel", (fragmentCode)=>{
        if (effectContext) {
            effectContext._rawFragmentSourceCode = fragmentCode;
        }
        shaderCodes[1] = fragmentCode;
        shadersLoaded();
    }, shaderLanguage);
}
function LoadShader(shader, key, optionalKey, callback, shaderLanguage, _loadFileInjection) {
    if (typeof HTMLElement !== "undefined") {
        // DOM element ?
        if (shader instanceof HTMLElement) {
            const shaderCode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$domManagement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GetDOMTextContent"])(shader);
            callback(shaderCode);
            return;
        }
    }
    // Direct source ?
    if (shader.substring(0, 7) === "source:") {
        callback(shader.substring(7));
        return;
    }
    // Base64 encoded ?
    if (shader.substring(0, 7) === "base64:") {
        const shaderBinary = window.atob(shader.substring(7));
        callback(shaderBinary);
        return;
    }
    const shaderStore = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].GetShadersStore(shaderLanguage);
    // Is in local store ?
    if (shaderStore[shader + key + "Shader"]) {
        callback(shaderStore[shader + key + "Shader"]);
        return;
    }
    if (optionalKey && shaderStore[shader + optionalKey + "Shader"]) {
        callback(shaderStore[shader + optionalKey + "Shader"]);
        return;
    }
    let shaderUrl;
    if (shader[0] === "." || shader[0] === "/" || shader.indexOf("http") > -1) {
        shaderUrl = shader;
    } else {
        shaderUrl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].GetShadersRepository(shaderLanguage) + shader;
    }
    _loadFileInjection = _loadFileInjection || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_LoadFile"];
    if (!_loadFileInjection) {
        // we got to this point and loadFile was not injected - throw an error
        throw new Error("loadFileInjection is not defined");
    }
    // Vertex shader
    _loadFileInjection(shaderUrl + "." + key.toLowerCase() + ".fx", callback);
}
function UseFinalCode(migratedVertexCode, migratedFragmentCode, baseName, shaderLanguage) {
    if (baseName) {
        const vertex = baseName.vertexElement || baseName.vertex || baseName.spectorName || baseName;
        const fragment = baseName.fragmentElement || baseName.fragment || baseName.spectorName || baseName;
        return {
            vertexSourceCode: (shaderLanguage === 1 /* ShaderLanguage.WGSL */  ? "//" : "") + "#define SHADER_NAME vertex:" + vertex + "\n" + migratedVertexCode,
            fragmentSourceCode: (shaderLanguage === 1 /* ShaderLanguage.WGSL */  ? "//" : "") + "#define SHADER_NAME fragment:" + fragment + "\n" + migratedFragmentCode
        };
    } else {
        return {
            vertexSourceCode: migratedVertexCode,
            fragmentSourceCode: migratedFragmentCode
        };
    }
}
const createAndPreparePipelineContext = (options, createPipelineContext, _preparePipelineContext, _executeWhenRenderingStateIsCompiled)=>{
    try {
        const stateObject = options.context ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinEngine$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStateObject"])(options.context) : null;
        if (stateObject) {
            // will not remove the reference to parallelShaderPrecompile, but will prevent it from being used in the next shader compilation
            stateObject.disableParallelShaderCompile = options.disableParallelCompilation;
        }
        const pipelineContext = options.existingPipelineContext || createPipelineContext(options.shaderProcessingContext);
        pipelineContext._name = options.name;
        if (options.name && stateObject) {
            stateObject.cachedPipelines[options.name] = pipelineContext;
        }
        // Flagged as async as we may need to delay load some processing tools
        // This does not break anything as the execution is waiting for _executeWhenRenderingStateIsCompiled
        _preparePipelineContext(pipelineContext, options.vertex, options.fragment, !!options.createAsRaw, "", "", options.rebuildRebind, options.defines, options.transformFeedbackVaryings, "", ()=>{
            _executeWhenRenderingStateIsCompiled(pipelineContext, ()=>{
                options.onRenderingStateCompiled?.(pipelineContext);
            });
        });
        return pipelineContext;
    } catch (e) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Error("Error compiling effect");
        throw e;
    }
}; //# sourceMappingURL=effect.functions.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/effect.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Effect",
    ()=>Effect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$effect$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/effect.functions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$timingTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/timingTools.js [app-ssr] (ecmascript)");
;
;
;
;
;
class Effect {
    /**
     * Gets or sets the relative url used to load shaders if using the engine in non-minified mode
     */ static get ShadersRepository() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersRepository;
    }
    static set ShadersRepository(repo) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersRepository = repo;
    }
    /**
     * Gets a boolean indicating that the effect was already disposed
     */ get isDisposed() {
        return this._isDisposed;
    }
    /**
     * Observable that will be called when effect is bound.
     */ get onBindObservable() {
        if (!this._onBindObservable) {
            this._onBindObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        }
        return this._onBindObservable;
    }
    /**
     * Gets the shader language type used to write vertex and fragment source code.
     */ get shaderLanguage() {
        return this._shaderLanguage;
    }
    /**
     * Instantiates an effect.
     * An effect can be used to create/manage/execute vertex and fragment shaders.
     * @param baseName Name of the effect.
     * @param attributesNamesOrOptions List of attribute names that will be passed to the shader or set of all options to create the effect.
     * @param uniformsNamesOrEngine List of uniform variable names that will be passed to the shader or the engine that will be used to render effect.
     * @param samplers List of sampler variables that will be passed to the shader.
     * @param engine Engine to be used to render the effect
     * @param defines Define statements to be added to the shader.
     * @param fallbacks Possible fallbacks for this effect to improve performance when needed.
     * @param onCompiled Callback that will be called when the shader is compiled.
     * @param onError Callback that will be called if an error occurs during shader compilation.
     * @param indexParameters Parameters to be used with Babylons include syntax to iterate over an array (eg. \{lights: 10\})
     * @param key Effect Key identifying uniquely compiled shader variants
     * @param shaderLanguage the language the shader is written in (default: GLSL)
     * @param extraInitializationsAsync additional async code to run before preparing the effect
     */ constructor(baseName, attributesNamesOrOptions, uniformsNamesOrEngine, samplers = null, engine, defines = null, fallbacks = null, onCompiled = null, onError = null, indexParameters, key = "", shaderLanguage = 0 /* ShaderLanguage.GLSL */ , extraInitializationsAsync){
        /**
         * String container all the define statements that should be set on the shader.
         */ this.defines = "";
        /**
         * Callback that will be called when the shader is compiled.
         */ this.onCompiled = null;
        /**
         * Callback that will be called if an error occurs during shader compilation.
         */ this.onError = null;
        /**
         * Callback that will be called when effect is bound.
         */ this.onBind = null;
        /**
         * Unique ID of the effect.
         */ this.uniqueId = 0;
        /**
         * Observable that will be called when the shader is compiled.
         * It is recommended to use executeWhenCompile() or to make sure that scene.isReady() is called to get this observable raised.
         */ this.onCompileObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * Observable that will be called if an error occurs during shader compilation.
         */ this.onErrorObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        /** @internal */ this._onBindObservable = null;
        this._isDisposed = false;
        /** @internal */ this._refCount = 1;
        /** @internal */ this._bonesComputationForcedToCPU = false;
        /** @internal */ this._uniformBuffersNames = {};
        /** @internal */ this._multiTarget = false;
        /** @internal */ this._samplers = {};
        this._isReady = false;
        this._compilationError = "";
        this._allFallbacksProcessed = false;
        /** @internal */ this._uniforms = {};
        /**
         * Key for the effect.
         * @internal
         */ this._key = "";
        this._fallbacks = null;
        this._vertexSourceCodeOverride = "";
        this._fragmentSourceCodeOverride = "";
        this._transformFeedbackVaryings = null;
        this._disableParallelShaderCompilation = false;
        /**
         * Compiled shader to webGL program.
         * @internal
         */ this._pipelineContext = null;
        /** @internal */ this._vertexSourceCode = "";
        /** @internal */ this._fragmentSourceCode = "";
        /** @internal */ this._vertexSourceCodeBeforeMigration = "";
        /** @internal */ this._fragmentSourceCodeBeforeMigration = "";
        /** @internal */ this._rawVertexSourceCode = "";
        /** @internal */ this._rawFragmentSourceCode = "";
        this._processCodeAfterIncludes = undefined;
        this._processFinalCode = null;
        this._onReleaseEffectsObserver = null;
        this.name = baseName;
        this._key = key;
        const pipelineName = this._key.replace(/\r/g, "").replace(/\n/g, "|");
        let cachedPipeline = undefined;
        if (attributesNamesOrOptions.attributes) {
            const options = attributesNamesOrOptions;
            this._engine = uniformsNamesOrEngine;
            this._attributesNames = options.attributes;
            this._uniformsNames = options.uniformsNames.concat(options.samplers);
            this._samplerList = options.samplers.slice();
            this.defines = options.defines;
            this.onError = options.onError;
            this.onCompiled = options.onCompiled;
            this._fallbacks = options.fallbacks;
            this._indexParameters = options.indexParameters;
            this._transformFeedbackVaryings = options.transformFeedbackVaryings || null;
            this._multiTarget = !!options.multiTarget;
            this._shaderLanguage = options.shaderLanguage ?? 0 /* ShaderLanguage.GLSL */ ;
            this._disableParallelShaderCompilation = !!options.disableParallelShaderCompilation;
            if (options.uniformBuffersNames) {
                this._uniformBuffersNamesList = options.uniformBuffersNames.slice();
                for(let i = 0; i < options.uniformBuffersNames.length; i++){
                    this._uniformBuffersNames[options.uniformBuffersNames[i]] = i;
                }
            }
            this._processFinalCode = options.processFinalCode ?? null;
            this._processCodeAfterIncludes = options.processCodeAfterIncludes ?? undefined;
            extraInitializationsAsync = options.extraInitializationsAsync;
            cachedPipeline = options.existingPipelineContext;
        } else {
            this._engine = engine;
            this.defines = defines == null ? "" : defines;
            this._uniformsNames = uniformsNamesOrEngine.concat(samplers);
            this._samplerList = samplers ? samplers.slice() : [];
            this._attributesNames = attributesNamesOrOptions;
            this._uniformBuffersNamesList = [];
            this._shaderLanguage = shaderLanguage;
            this.onError = onError;
            this.onCompiled = onCompiled;
            this._indexParameters = indexParameters;
            this._fallbacks = fallbacks;
        }
        // Use the cache if we can. For now, WebGL2 only.
        if (this._engine.shaderPlatformName === "WEBGL2") {
            cachedPipeline = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$effect$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCachedPipeline"])(pipelineName, this._engine._gl) ?? cachedPipeline;
        }
        this._attributeLocationByName = {};
        this.uniqueId = Effect._UniqueIdSeed++;
        if (!cachedPipeline) {
            // Floating promise - should be checked here.
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            this._processShaderCodeAsync(null, false, null, extraInitializationsAsync);
        } else {
            this._pipelineContext = cachedPipeline;
            this._pipelineContext.setEngine(this._engine);
            this._onRenderingStateCompiled(this._pipelineContext);
            // rebuildRebind for spector
            if (this._pipelineContext.program) {
                this._pipelineContext.program.__SPECTOR_rebuildProgram = this._rebuildProgram.bind(this);
            }
        }
        this._onReleaseEffectsObserver = this._engine.onReleaseEffectsObservable.addOnce(()=>{
            this._onReleaseEffectsObserver = null;
            if (this.isDisposed) {
                return;
            }
            this.dispose(true);
        });
    }
    /** @internal */ async _processShaderCodeAsync(shaderProcessor = null, keepExistingPipelineContext = false, shaderProcessingContext = null, extraInitializationsAsync) {
        if (extraInitializationsAsync) {
            await extraInitializationsAsync();
        }
        this._processingContext = shaderProcessingContext || this._engine._getShaderProcessingContext(this._shaderLanguage, false);
        const processorOptions = {
            defines: this.defines.split("\n"),
            indexParameters: this._indexParameters,
            isFragment: false,
            shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
            processor: shaderProcessor ?? this._engine._getShaderProcessor(this._shaderLanguage),
            supportsUniformBuffers: this._engine.supportsUniformBuffers,
            shadersRepository: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].GetShadersRepository(this._shaderLanguage),
            includesShadersStore: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].GetIncludesShadersStore(this._shaderLanguage),
            version: (this._engine.version * 100).toString(),
            platformName: this._engine.shaderPlatformName,
            processingContext: this._processingContext,
            isNDCHalfZRange: this._engine.isNDCHalfZRange,
            useReverseDepthBuffer: this._engine.useReverseDepthBuffer,
            processCodeAfterIncludes: this._processCodeAfterIncludes
        };
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$effect$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_ProcessShaderCode"])(processorOptions, this.name, this._processFinalCode, (migratedVertexCode, migratedFragmentCode)=>{
            this._vertexSourceCode = migratedVertexCode;
            this._fragmentSourceCode = migratedFragmentCode;
            this._prepareEffect(keepExistingPipelineContext);
        }, this._shaderLanguage, this._engine, this);
    }
    /**
     * Unique key for this effect
     */ get key() {
        return this._key;
    }
    /**
     * If the effect has been compiled and prepared.
     * @returns if the effect is compiled and prepared.
     */ isReady() {
        try {
            return this._isReadyInternal();
        } catch  {
            return false;
        }
    }
    _isReadyInternal() {
        if (this._engine.isDisposed) {
            // Engine is disposed, we return true to prevent looping over the setTimeout call in _checkIsReady
            return true;
        }
        if (this._isReady) {
            return true;
        }
        if (this._pipelineContext) {
            return this._pipelineContext.isReady;
        }
        return false;
    }
    /**
     * The engine the effect was initialized with.
     * @returns the engine.
     */ getEngine() {
        return this._engine;
    }
    /**
     * The pipeline context for this effect
     * @returns the associated pipeline context
     */ getPipelineContext() {
        return this._pipelineContext;
    }
    /**
     * The set of names of attribute variables for the shader.
     * @returns An array of attribute names.
     */ getAttributesNames() {
        return this._attributesNames;
    }
    /**
     * Returns the attribute at the given index.
     * @param index The index of the attribute.
     * @returns The location of the attribute.
     */ getAttributeLocation(index) {
        return this._attributes[index];
    }
    /**
     * Returns the attribute based on the name of the variable.
     * @param name of the attribute to look up.
     * @returns the attribute location.
     */ getAttributeLocationByName(name) {
        return this._attributeLocationByName[name];
    }
    /**
     * The number of attributes.
     * @returns the number of attributes.
     */ getAttributesCount() {
        return this._attributes.length;
    }
    /**
     * Gets the index of a uniform variable.
     * @param uniformName of the uniform to look up.
     * @returns the index.
     */ getUniformIndex(uniformName) {
        return this._uniformsNames.indexOf(uniformName);
    }
    /**
     * Returns the attribute based on the name of the variable.
     * @param uniformName of the uniform to look up.
     * @returns the location of the uniform.
     */ getUniform(uniformName) {
        return this._uniforms[uniformName];
    }
    /**
     * Returns an array of sampler variable names
     * @returns The array of sampler variable names.
     */ getSamplers() {
        return this._samplerList;
    }
    /**
     * Returns an array of uniform variable names
     * @returns The array of uniform variable names.
     */ getUniformNames() {
        return this._uniformsNames;
    }
    /**
     * Returns an array of uniform buffer variable names
     * @returns The array of uniform buffer variable names.
     */ getUniformBuffersNames() {
        return this._uniformBuffersNamesList;
    }
    /**
     * Returns the index parameters used to create the effect
     * @returns The index parameters object
     */ getIndexParameters() {
        return this._indexParameters;
    }
    /**
     * The error from the last compilation.
     * @returns the error string.
     */ getCompilationError() {
        return this._compilationError;
    }
    /**
     * Gets a boolean indicating that all fallbacks were used during compilation
     * @returns true if all fallbacks were used
     */ allFallbacksProcessed() {
        return this._allFallbacksProcessed;
    }
    /**
     * Wait until compilation before fulfilling.
     * @returns a promise to wait for completion.
     */ async whenCompiledAsync() {
        return await new Promise((resolve)=>{
            this.executeWhenCompiled(resolve);
        });
    }
    /**
     * Adds a callback to the onCompiled observable and call the callback immediately if already ready.
     * @param func The callback to be used.
     */ executeWhenCompiled(func) {
        if (this.isReady()) {
            func(this);
            return;
        }
        this.onCompileObservable.add((effect)=>{
            func(effect);
        });
        if (!this._pipelineContext || this._pipelineContext.isAsync) {
            this._checkIsReady(null);
        }
    }
    _checkIsReady(previousPipelineContext) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$timingTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_RetryWithInterval"])(()=>{
            return this._isReadyInternal() || this._isDisposed;
        }, ()=>{
        // no-op - done in the _isReadyInternal call
        }, (e)=>{
            this._processCompilationErrors(e, previousPipelineContext);
        }, 16, 120000, true, ` - Effect: ${typeof this.name === "string" ? this.name : this.key}`);
    }
    /**
     * Gets the vertex shader source code of this effect
     * This is the final source code that will be compiled, after all the processing has been done (pre-processing applied, code injection/replacement, etc)
     */ get vertexSourceCode() {
        return this._vertexSourceCodeOverride && this._fragmentSourceCodeOverride ? this._vertexSourceCodeOverride : this._pipelineContext?._getVertexShaderCode() ?? this._vertexSourceCode;
    }
    /**
     * Gets the fragment shader source code of this effect
     * This is the final source code that will be compiled, after all the processing has been done (pre-processing applied, code injection/replacement, etc)
     */ get fragmentSourceCode() {
        return this._vertexSourceCodeOverride && this._fragmentSourceCodeOverride ? this._fragmentSourceCodeOverride : this._pipelineContext?._getFragmentShaderCode() ?? this._fragmentSourceCode;
    }
    /**
     * Gets the vertex shader source code before migration.
     * This is the source code after the include directives have been replaced by their contents but before the code is migrated, i.e. before ShaderProcess._ProcessShaderConversion is executed.
     * This method is, among other things, responsible for parsing #if/#define directives as well as converting GLES2 syntax to GLES3 (in the case of WebGL).
     */ get vertexSourceCodeBeforeMigration() {
        return this._vertexSourceCodeBeforeMigration;
    }
    /**
     * Gets the fragment shader source code before migration.
     * This is the source code after the include directives have been replaced by their contents but before the code is migrated, i.e. before ShaderProcess._ProcessShaderConversion is executed.
     * This method is, among other things, responsible for parsing #if/#define directives as well as converting GLES2 syntax to GLES3 (in the case of WebGL).
     */ get fragmentSourceCodeBeforeMigration() {
        return this._fragmentSourceCodeBeforeMigration;
    }
    /**
     * Gets the vertex shader source code before it has been modified by any processing
     */ get rawVertexSourceCode() {
        return this._rawVertexSourceCode;
    }
    /**
     * Gets the fragment shader source code before it has been modified by any processing
     */ get rawFragmentSourceCode() {
        return this._rawFragmentSourceCode;
    }
    getPipelineGenerationOptions() {
        return {
            platformName: this._engine.shaderPlatformName,
            shaderLanguage: this._shaderLanguage,
            shaderNameOrContent: this.name,
            key: this._key,
            defines: this.defines.split("\n"),
            addGlobalDefines: false,
            extendedProcessingOptions: {
                indexParameters: this._indexParameters,
                isNDCHalfZRange: this._engine.isNDCHalfZRange,
                useReverseDepthBuffer: this._engine.useReverseDepthBuffer,
                supportsUniformBuffers: this._engine.supportsUniformBuffers
            },
            extendedCreatePipelineOptions: {
                transformFeedbackVaryings: this._transformFeedbackVaryings,
                createAsRaw: !!(this._vertexSourceCodeOverride && this._fragmentSourceCodeOverride)
            }
        };
    }
    /**
     * Recompiles the webGL program
     * @param vertexSourceCode The source code for the vertex shader.
     * @param fragmentSourceCode The source code for the fragment shader.
     * @param onCompiled Callback called when completed.
     * @param onError Callback called on error.
     * @internal
     */ _rebuildProgram(vertexSourceCode, fragmentSourceCode, onCompiled, onError) {
        this._isReady = false;
        this._vertexSourceCodeOverride = vertexSourceCode;
        this._fragmentSourceCodeOverride = fragmentSourceCode;
        this.onError = (effect, error)=>{
            if (onError) {
                onError(error);
            }
        };
        this.onCompiled = ()=>{
            const scenes = this.getEngine().scenes;
            if (scenes) {
                for(let i = 0; i < scenes.length; i++){
                    scenes[i].markAllMaterialsAsDirty(127);
                }
            }
            this._pipelineContext._handlesSpectorRebuildCallback?.(onCompiled);
        };
        this._fallbacks = null;
        this._prepareEffect();
    }
    _onRenderingStateCompiled(pipelineContext) {
        this._pipelineContext = pipelineContext;
        this._pipelineContext.setEngine(this._engine);
        this._attributes = [];
        this._pipelineContext._fillEffectInformation(this, this._uniformBuffersNames, this._uniformsNames, this._uniforms, this._samplerList, this._samplers, this._attributesNames, this._attributes);
        // Caches attribute locations.
        if (this._attributesNames) {
            for(let i = 0; i < this._attributesNames.length; i++){
                const name = this._attributesNames[i];
                this._attributeLocationByName[name] = this._attributes[i];
            }
        }
        this._engine.bindSamplers(this);
        this._compilationError = "";
        this._isReady = true;
        if (this.onCompiled) {
            this.onCompiled(this);
        }
        this.onCompileObservable.notifyObservers(this);
        this.onCompileObservable.clear();
        // Unbind mesh reference in fallbacks
        if (this._fallbacks) {
            this._fallbacks.unBindMesh();
        }
        if (Effect.AutomaticallyClearCodeCache) {
            this.clearCodeCache();
        }
    }
    /**
     * Prepares the effect
     * @internal
     */ _prepareEffect(keepExistingPipelineContext = false) {
        const previousPipelineContext = this._pipelineContext;
        this._isReady = false;
        try {
            const overrides = !!(this._vertexSourceCodeOverride && this._fragmentSourceCodeOverride);
            const defines = overrides ? null : this.defines;
            const vertex = overrides ? this._vertexSourceCodeOverride : this._vertexSourceCode;
            const fragment = overrides ? this._fragmentSourceCodeOverride : this._fragmentSourceCode;
            const engine = this._engine;
            this._pipelineContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$effect$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createAndPreparePipelineContext"])({
                existingPipelineContext: keepExistingPipelineContext ? previousPipelineContext : null,
                vertex,
                fragment,
                context: engine.shaderPlatformName === "WEBGL2" || engine.shaderPlatformName === "WEBGL1" ? engine._gl : undefined,
                rebuildRebind: (vertexSourceCode, fragmentSourceCode, onCompiled, onError)=>this._rebuildProgram(vertexSourceCode, fragmentSourceCode, onCompiled, onError),
                defines,
                transformFeedbackVaryings: this._transformFeedbackVaryings,
                name: this._key.replace(/\r/g, "").replace(/\n/g, "|"),
                createAsRaw: overrides,
                disableParallelCompilation: this._disableParallelShaderCompilation,
                shaderProcessingContext: this._processingContext,
                onRenderingStateCompiled: (pipelineContext)=>{
                    if (previousPipelineContext && !keepExistingPipelineContext) {
                        this._engine._deletePipelineContext(previousPipelineContext);
                    }
                    if (pipelineContext) {
                        this._onRenderingStateCompiled(pipelineContext);
                    }
                }
            }, this._engine.createPipelineContext.bind(this._engine), this._engine._preparePipelineContextAsync.bind(this._engine), this._engine._executeWhenRenderingStateIsCompiled.bind(this._engine));
            if (this._pipelineContext.isAsync) {
                this._checkIsReady(previousPipelineContext);
            }
        } catch (e) {
            this._processCompilationErrors(e, previousPipelineContext);
        }
    }
    _getShaderCodeAndErrorLine(code, error, isFragment) {
        const regexp = isFragment ? /FRAGMENT SHADER ERROR: 0:(\d+?):/ : /VERTEX SHADER ERROR: 0:(\d+?):/;
        let errorLine = null;
        if (error && code) {
            const res = error.match(regexp);
            if (res && res.length === 2) {
                const lineNumber = parseInt(res[1]);
                const lines = code.split("\n", -1);
                if (lines.length >= lineNumber) {
                    errorLine = `Offending line [${lineNumber}] in ${isFragment ? "fragment" : "vertex"} code: ${lines[lineNumber - 1]}`;
                }
            }
        }
        return [
            code,
            errorLine
        ];
    }
    _processCompilationErrors(e, previousPipelineContext = null) {
        this._compilationError = e.message;
        const attributesNames = this._attributesNames;
        const fallbacks = this._fallbacks;
        // Let's go through fallbacks then
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Error("Unable to compile effect:");
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Error(`Uniforms: ${this._uniformsNames.join(" ")}`);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Error(`Attributes: ${attributesNames.join(" ")}`);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Error("Defines:\n" + this.defines);
        if (Effect.LogShaderCodeOnCompilationError) {
            let lineErrorVertex = null, lineErrorFragment = null, code = null;
            if (this._pipelineContext?._getVertexShaderCode()) {
                [code, lineErrorVertex] = this._getShaderCodeAndErrorLine(this._pipelineContext._getVertexShaderCode(), this._compilationError, false);
                if (code) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Error("Vertex code:");
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Error(code);
                }
            }
            if (this._pipelineContext?._getFragmentShaderCode()) {
                [code, lineErrorFragment] = this._getShaderCodeAndErrorLine(this._pipelineContext?._getFragmentShaderCode(), this._compilationError, true);
                if (code) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Error("Fragment code:");
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Error(code);
                }
            }
            if (lineErrorVertex) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Error(lineErrorVertex);
            }
            if (lineErrorFragment) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Error(lineErrorFragment);
            }
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Error("Error: " + this._compilationError);
        const notifyErrors = ()=>{
            if (this.onError) {
                this.onError(this, this._compilationError);
            }
            this.onErrorObservable.notifyObservers(this);
            this._engine.onEffectErrorObservable.notifyObservers({
                effect: this,
                errors: this._compilationError
            });
        };
        // In case a previous compilation was successful, we need to restore the previous pipeline context
        if (previousPipelineContext) {
            this._pipelineContext = previousPipelineContext;
            this._isReady = true;
            notifyErrors();
        }
        // Lets try to compile fallbacks as long as we have some.
        if (fallbacks) {
            this._pipelineContext = null;
            if (fallbacks.hasMoreFallbacks) {
                this._allFallbacksProcessed = false;
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Error("Trying next fallback.");
                this.defines = fallbacks.reduce(this.defines, this);
                this._prepareEffect();
            } else {
                // Sorry we did everything we can
                this._allFallbacksProcessed = true;
                notifyErrors();
                this.onErrorObservable.clear();
                // Unbind mesh reference in fallbacks
                if (this._fallbacks) {
                    this._fallbacks.unBindMesh();
                }
            }
        } else {
            this._allFallbacksProcessed = true;
            // In case of error, without any prior successful compilation, let s notify observers
            if (!previousPipelineContext) {
                notifyErrors();
            }
        }
    }
    /**
     * Checks if the effect is supported. (Must be called after compilation)
     */ get isSupported() {
        return this._compilationError === "";
    }
    /**
     * Binds a texture to the engine to be used as output of the shader.
     * @param channel Name of the output variable.
     * @param texture Texture to bind.
     * @internal
     */ _bindTexture(channel, texture) {
        this._engine._bindTexture(this._samplers[channel], texture, channel);
    }
    /**
     * Sets a texture on the engine to be used in the shader.
     * @param channel Name of the sampler variable.
     * @param texture Texture to set.
     */ setTexture(channel, texture) {
        this._engine.setTexture(this._samplers[channel], this._uniforms[channel], texture, channel);
    }
    /**
     * Sets an array of textures on the engine to be used in the shader.
     * @param channel Name of the variable.
     * @param textures Textures to set.
     */ setTextureArray(channel, textures) {
        const exName = channel + "Ex";
        if (this._samplerList.indexOf(exName + "0") === -1) {
            const initialPos = this._samplerList.indexOf(channel);
            for(let index = 1; index < textures.length; index++){
                const currentExName = exName + (index - 1).toString();
                this._samplerList.splice(initialPos + index, 0, currentExName);
            }
            // Reset every channels
            let channelIndex = 0;
            for (const key of this._samplerList){
                this._samplers[key] = channelIndex;
                channelIndex += 1;
            }
        }
        this._engine.setTextureArray(this._samplers[channel], this._uniforms[channel], textures, channel);
    }
    /**
     * Binds a buffer to a uniform.
     * @param buffer Buffer to bind.
     * @param name Name of the uniform variable to bind to.
     */ bindUniformBuffer(buffer, name) {
        const bufferName = this._uniformBuffersNames[name];
        if (bufferName === undefined || Effect._BaseCache[bufferName] === buffer && this._engine._features.useUBOBindingCache) {
            return;
        }
        Effect._BaseCache[bufferName] = buffer;
        this._engine.bindUniformBufferBase(buffer, bufferName, name);
    }
    /**
     * Binds block to a uniform.
     * @param blockName Name of the block to bind.
     * @param index Index to bind.
     */ bindUniformBlock(blockName, index) {
        this._engine.bindUniformBlock(this._pipelineContext, blockName, index);
    }
    /**
     * Sets an integer value on a uniform variable.
     * @param uniformName Name of the variable.
     * @param value Value to be set.
     * @returns this effect.
     */ setInt(uniformName, value) {
        this._pipelineContext.setInt(uniformName, value);
        return this;
    }
    /**
     * Sets an int2 value on a uniform variable.
     * @param uniformName Name of the variable.
     * @param x First int in int2.
     * @param y Second int in int2.
     * @returns this effect.
     */ setInt2(uniformName, x, y) {
        this._pipelineContext.setInt2(uniformName, x, y);
        return this;
    }
    /**
     * Sets an int3 value on a uniform variable.
     * @param uniformName Name of the variable.
     * @param x First int in int3.
     * @param y Second int in int3.
     * @param z Third int in int3.
     * @returns this effect.
     */ setInt3(uniformName, x, y, z) {
        this._pipelineContext.setInt3(uniformName, x, y, z);
        return this;
    }
    /**
     * Sets an int4 value on a uniform variable.
     * @param uniformName Name of the variable.
     * @param x First int in int4.
     * @param y Second int in int4.
     * @param z Third int in int4.
     * @param w Fourth int in int4.
     * @returns this effect.
     */ setInt4(uniformName, x, y, z, w) {
        this._pipelineContext.setInt4(uniformName, x, y, z, w);
        return this;
    }
    /**
     * Sets an int array on a uniform variable.
     * @param uniformName Name of the variable.
     * @param array array to be set.
     * @returns this effect.
     */ setIntArray(uniformName, array) {
        this._pipelineContext.setIntArray(uniformName, array);
        return this;
    }
    /**
     * Sets an int array 2 on a uniform variable. (Array is specified as single array eg. [1,2,3,4] will result in [[1,2],[3,4]] in the shader)
     * @param uniformName Name of the variable.
     * @param array array to be set.
     * @returns this effect.
     */ setIntArray2(uniformName, array) {
        this._pipelineContext.setIntArray2(uniformName, array);
        return this;
    }
    /**
     * Sets an int array 3 on a uniform variable. (Array is specified as single array eg. [1,2,3,4,5,6] will result in [[1,2,3],[4,5,6]] in the shader)
     * @param uniformName Name of the variable.
     * @param array array to be set.
     * @returns this effect.
     */ setIntArray3(uniformName, array) {
        this._pipelineContext.setIntArray3(uniformName, array);
        return this;
    }
    /**
     * Sets an int array 4 on a uniform variable. (Array is specified as single array eg. [1,2,3,4,5,6,7,8] will result in [[1,2,3,4],[5,6,7,8]] in the shader)
     * @param uniformName Name of the variable.
     * @param array array to be set.
     * @returns this effect.
     */ setIntArray4(uniformName, array) {
        this._pipelineContext.setIntArray4(uniformName, array);
        return this;
    }
    /**
     * Sets an unsigned integer value on a uniform variable.
     * @param uniformName Name of the variable.
     * @param value Value to be set.
     * @returns this effect.
     */ setUInt(uniformName, value) {
        this._pipelineContext.setUInt(uniformName, value);
        return this;
    }
    /**
     * Sets an unsigned int2 value on a uniform variable.
     * @param uniformName Name of the variable.
     * @param x First unsigned int in uint2.
     * @param y Second unsigned int in uint2.
     * @returns this effect.
     */ setUInt2(uniformName, x, y) {
        this._pipelineContext.setUInt2(uniformName, x, y);
        return this;
    }
    /**
     * Sets an unsigned int3 value on a uniform variable.
     * @param uniformName Name of the variable.
     * @param x First unsigned int in uint3.
     * @param y Second unsigned int in uint3.
     * @param z Third unsigned int in uint3.
     * @returns this effect.
     */ setUInt3(uniformName, x, y, z) {
        this._pipelineContext.setUInt3(uniformName, x, y, z);
        return this;
    }
    /**
     * Sets an unsigned int4 value on a uniform variable.
     * @param uniformName Name of the variable.
     * @param x First unsigned int in uint4.
     * @param y Second unsigned int in uint4.
     * @param z Third unsigned int in uint4.
     * @param w Fourth unsigned int in uint4.
     * @returns this effect.
     */ setUInt4(uniformName, x, y, z, w) {
        this._pipelineContext.setUInt4(uniformName, x, y, z, w);
        return this;
    }
    /**
     * Sets an unsigned int array on a uniform variable.
     * @param uniformName Name of the variable.
     * @param array array to be set.
     * @returns this effect.
     */ setUIntArray(uniformName, array) {
        this._pipelineContext.setUIntArray(uniformName, array);
        return this;
    }
    /**
     * Sets an unsigned int array 2 on a uniform variable. (Array is specified as single array eg. [1,2,3,4] will result in [[1,2],[3,4]] in the shader)
     * @param uniformName Name of the variable.
     * @param array array to be set.
     * @returns this effect.
     */ setUIntArray2(uniformName, array) {
        this._pipelineContext.setUIntArray2(uniformName, array);
        return this;
    }
    /**
     * Sets an unsigned int array 3 on a uniform variable. (Array is specified as single array eg. [1,2,3,4,5,6] will result in [[1,2,3],[4,5,6]] in the shader)
     * @param uniformName Name of the variable.
     * @param array array to be set.
     * @returns this effect.
     */ setUIntArray3(uniformName, array) {
        this._pipelineContext.setUIntArray3(uniformName, array);
        return this;
    }
    /**
     * Sets an unsigned int array 4 on a uniform variable. (Array is specified as single array eg. [1,2,3,4,5,6,7,8] will result in [[1,2,3,4],[5,6,7,8]] in the shader)
     * @param uniformName Name of the variable.
     * @param array array to be set.
     * @returns this effect.
     */ setUIntArray4(uniformName, array) {
        this._pipelineContext.setUIntArray4(uniformName, array);
        return this;
    }
    /**
     * Sets an float array on a uniform variable.
     * @param uniformName Name of the variable.
     * @param array array to be set.
     * @returns this effect.
     */ setFloatArray(uniformName, array) {
        this._pipelineContext.setArray(uniformName, array);
        return this;
    }
    /**
     * Sets an float array 2 on a uniform variable. (Array is specified as single array eg. [1,2,3,4] will result in [[1,2],[3,4]] in the shader)
     * @param uniformName Name of the variable.
     * @param array array to be set.
     * @returns this effect.
     */ setFloatArray2(uniformName, array) {
        this._pipelineContext.setArray2(uniformName, array);
        return this;
    }
    /**
     * Sets an float array 3 on a uniform variable. (Array is specified as single array eg. [1,2,3,4,5,6] will result in [[1,2,3],[4,5,6]] in the shader)
     * @param uniformName Name of the variable.
     * @param array array to be set.
     * @returns this effect.
     */ setFloatArray3(uniformName, array) {
        this._pipelineContext.setArray3(uniformName, array);
        return this;
    }
    /**
     * Sets an float array 4 on a uniform variable. (Array is specified as single array eg. [1,2,3,4,5,6,7,8] will result in [[1,2,3,4],[5,6,7,8]] in the shader)
     * @param uniformName Name of the variable.
     * @param array array to be set.
     * @returns this effect.
     */ setFloatArray4(uniformName, array) {
        this._pipelineContext.setArray4(uniformName, array);
        return this;
    }
    /**
     * Sets an array on a uniform variable.
     * @param uniformName Name of the variable.
     * @param array array to be set.
     * @returns this effect.
     */ setArray(uniformName, array) {
        this._pipelineContext.setArray(uniformName, array);
        return this;
    }
    /**
     * Sets an array 2 on a uniform variable. (Array is specified as single array eg. [1,2,3,4] will result in [[1,2],[3,4]] in the shader)
     * @param uniformName Name of the variable.
     * @param array array to be set.
     * @returns this effect.
     */ setArray2(uniformName, array) {
        this._pipelineContext.setArray2(uniformName, array);
        return this;
    }
    /**
     * Sets an array 3 on a uniform variable. (Array is specified as single array eg. [1,2,3,4,5,6] will result in [[1,2,3],[4,5,6]] in the shader)
     * @param uniformName Name of the variable.
     * @param array array to be set.
     * @returns this effect.
     */ setArray3(uniformName, array) {
        this._pipelineContext.setArray3(uniformName, array);
        return this;
    }
    /**
     * Sets an array 4 on a uniform variable. (Array is specified as single array eg. [1,2,3,4,5,6,7,8] will result in [[1,2,3,4],[5,6,7,8]] in the shader)
     * @param uniformName Name of the variable.
     * @param array array to be set.
     * @returns this effect.
     */ setArray4(uniformName, array) {
        this._pipelineContext.setArray4(uniformName, array);
        return this;
    }
    /**
     * Sets matrices on a uniform variable.
     * @param uniformName Name of the variable.
     * @param matrices matrices to be set.
     * @returns this effect.
     */ setMatrices(uniformName, matrices) {
        this._pipelineContext.setMatrices(uniformName, matrices);
        return this;
    }
    /**
     * Sets matrix on a uniform variable.
     * @param uniformName Name of the variable.
     * @param matrix matrix to be set.
     * @returns this effect.
     */ setMatrix(uniformName, matrix) {
        this._pipelineContext.setMatrix(uniformName, matrix);
        return this;
    }
    /**
     * Sets a 3x3 matrix on a uniform variable. (Specified as [1,2,3,4,5,6,7,8,9] will result in [1,2,3][4,5,6][7,8,9] matrix)
     * @param uniformName Name of the variable.
     * @param matrix matrix to be set.
     * @returns this effect.
     */ setMatrix3x3(uniformName, matrix) {
        // the cast is ok because it is gl.uniformMatrix3fv() which is called at the end, and this function accepts Float32Array and Array<number>
        this._pipelineContext.setMatrix3x3(uniformName, matrix);
        return this;
    }
    /**
     * Sets a 2x2 matrix on a uniform variable. (Specified as [1,2,3,4] will result in [1,2][3,4] matrix)
     * @param uniformName Name of the variable.
     * @param matrix matrix to be set.
     * @returns this effect.
     */ setMatrix2x2(uniformName, matrix) {
        // the cast is ok because it is gl.uniformMatrix3fv() which is called at the end, and this function accepts Float32Array and Array<number>
        this._pipelineContext.setMatrix2x2(uniformName, matrix);
        return this;
    }
    /**
     * Sets a float on a uniform variable.
     * @param uniformName Name of the variable.
     * @param value value to be set.
     * @returns this effect.
     */ setFloat(uniformName, value) {
        this._pipelineContext.setFloat(uniformName, value);
        return this;
    }
    /**
     * Sets a boolean on a uniform variable.
     * @param uniformName Name of the variable.
     * @param bool value to be set.
     * @returns this effect.
     */ setBool(uniformName, bool) {
        this._pipelineContext.setInt(uniformName, bool ? 1 : 0);
        return this;
    }
    /**
     * Sets a Vector2 on a uniform variable.
     * @param uniformName Name of the variable.
     * @param vector2 vector2 to be set.
     * @returns this effect.
     */ setVector2(uniformName, vector2) {
        this._pipelineContext.setVector2(uniformName, vector2);
        return this;
    }
    /**
     * Sets a float2 on a uniform variable.
     * @param uniformName Name of the variable.
     * @param x First float in float2.
     * @param y Second float in float2.
     * @returns this effect.
     */ setFloat2(uniformName, x, y) {
        this._pipelineContext.setFloat2(uniformName, x, y);
        return this;
    }
    /**
     * Sets a Vector3 on a uniform variable.
     * @param uniformName Name of the variable.
     * @param vector3 Value to be set.
     * @returns this effect.
     */ setVector3(uniformName, vector3) {
        this._pipelineContext.setVector3(uniformName, vector3);
        return this;
    }
    /**
     * Sets a float3 on a uniform variable.
     * @param uniformName Name of the variable.
     * @param x First float in float3.
     * @param y Second float in float3.
     * @param z Third float in float3.
     * @returns this effect.
     */ setFloat3(uniformName, x, y, z) {
        this._pipelineContext.setFloat3(uniformName, x, y, z);
        return this;
    }
    /**
     * Sets a Vector4 on a uniform variable.
     * @param uniformName Name of the variable.
     * @param vector4 Value to be set.
     * @returns this effect.
     */ setVector4(uniformName, vector4) {
        this._pipelineContext.setVector4(uniformName, vector4);
        return this;
    }
    /**
     * Sets a Quaternion on a uniform variable.
     * @param uniformName Name of the variable.
     * @param quaternion Value to be set.
     * @returns this effect.
     */ setQuaternion(uniformName, quaternion) {
        this._pipelineContext.setQuaternion(uniformName, quaternion);
        return this;
    }
    /**
     * Sets a float4 on a uniform variable.
     * @param uniformName Name of the variable.
     * @param x First float in float4.
     * @param y Second float in float4.
     * @param z Third float in float4.
     * @param w Fourth float in float4.
     * @returns this effect.
     */ setFloat4(uniformName, x, y, z, w) {
        this._pipelineContext.setFloat4(uniformName, x, y, z, w);
        return this;
    }
    /**
     * Sets a Color3 on a uniform variable.
     * @param uniformName Name of the variable.
     * @param color3 Value to be set.
     * @returns this effect.
     */ setColor3(uniformName, color3) {
        this._pipelineContext.setColor3(uniformName, color3);
        return this;
    }
    /**
     * Sets a Color4 on a uniform variable.
     * @param uniformName Name of the variable.
     * @param color3 Value to be set.
     * @param alpha Alpha value to be set.
     * @returns this effect.
     */ setColor4(uniformName, color3, alpha) {
        this._pipelineContext.setColor4(uniformName, color3, alpha);
        return this;
    }
    /**
     * Sets a Color4 on a uniform variable
     * @param uniformName defines the name of the variable
     * @param color4 defines the value to be set
     * @returns this effect.
     */ setDirectColor4(uniformName, color4) {
        this._pipelineContext.setDirectColor4(uniformName, color4);
        return this;
    }
    /**
     * Use this wisely: It will remove the cached code from this effect
     * It is probably ok to call it if you are not using ShadowDepthWrapper or if everything is already up and running
     * DO NOT CALL IT if you want to have support for context lost recovery
     */ clearCodeCache() {
        this._vertexSourceCode = "";
        this._fragmentSourceCode = "";
        this._fragmentSourceCodeBeforeMigration = "";
        this._vertexSourceCodeBeforeMigration = "";
    }
    /**
     * Release all associated resources.
     * @param force specifies if the effect must be released no matter what
     **/ dispose(force = false) {
        if (force) {
            this._refCount = 0;
        } else {
            if (Effect.PersistentMode) {
                return;
            }
            this._refCount--;
        }
        if (this._refCount > 0 || this._isDisposed) {
            // Others are still using the effect or the effect was already disposed
            return;
        }
        if (this._onReleaseEffectsObserver) {
            this._engine.onReleaseEffectsObservable.remove(this._onReleaseEffectsObserver);
            this._onReleaseEffectsObserver = null;
        }
        if (this._pipelineContext) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$effect$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resetCachedPipeline"])(this._pipelineContext);
        }
        this._engine._releaseEffect(this);
        this.clearCodeCache();
        this._isDisposed = true;
    }
    /**
     * This function will add a new shader to the shader store
     * @param name the name of the shader
     * @param pixelShader optional pixel shader content
     * @param vertexShader optional vertex shader content
     * @param shaderLanguage the language the shader is written in (default: GLSL)
     */ static RegisterShader(name, pixelShader, vertexShader, shaderLanguage = 0 /* ShaderLanguage.GLSL */ ) {
        if (pixelShader) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].GetShadersStore(shaderLanguage)[`${name}PixelShader`] = pixelShader;
        }
        if (vertexShader) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].GetShadersStore(shaderLanguage)[`${name}VertexShader`] = vertexShader;
        }
    }
    /**
     * Resets the cache of effects.
     */ static ResetCache() {
        Effect._BaseCache = {};
    }
}
/**
 * Enable logging of the shader code when a compilation error occurs
 */ Effect.LogShaderCodeOnCompilationError = true;
/**
 * Gets or sets a boolean indicating that effect ref counting is disabled
 * If true, the effect will persist in memory until engine is disposed
 */ Effect.PersistentMode = false;
/**
 * Use this with caution
 * See ClearCodeCache function comments
 */ Effect.AutomaticallyClearCodeCache = false;
Effect._UniqueIdSeed = 0;
Effect._BaseCache = {};
/**
 * Store of each shader (The can be looked up using effect.key)
 */ Effect.ShadersStore = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStore;
/**
 * Store of each included file for a shader (The can be looked up using effect.key)
 */ Effect.IncludesShadersStore = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore; //# sourceMappingURL=effect.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/colorCurves.functions.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Prepare the list of uniforms associated with the ColorCurves effects.
 * @param uniformsList The list of uniforms used in the effect
 */ __turbopack_context__.s([
    "PrepareUniformsForColorCurves",
    ()=>PrepareUniformsForColorCurves
]);
function PrepareUniformsForColorCurves(uniformsList) {
    uniformsList.push("vCameraColorCurveNeutral", "vCameraColorCurvePositive", "vCameraColorCurveNegative");
} //# sourceMappingURL=colorCurves.functions.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/colorCurves.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ColorCurves",
    ()=>ColorCurves
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/decorators.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.color.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/decorators.serialization.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$colorCurves$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/colorCurves.functions.js [app-ssr] (ecmascript)");
;
;
;
;
;
class ColorCurves {
    constructor(){
        this._dirty = true;
        this._tempColor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color4"](0, 0, 0, 0);
        this._globalCurve = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color4"](0, 0, 0, 0);
        this._highlightsCurve = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color4"](0, 0, 0, 0);
        this._midtonesCurve = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color4"](0, 0, 0, 0);
        this._shadowsCurve = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color4"](0, 0, 0, 0);
        this._positiveCurve = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color4"](0, 0, 0, 0);
        this._negativeCurve = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color4"](0, 0, 0, 0);
        this._globalHue = 30;
        this._globalDensity = 0;
        this._globalSaturation = 0;
        this._globalExposure = 0;
        this._highlightsHue = 30;
        this._highlightsDensity = 0;
        this._highlightsSaturation = 0;
        this._highlightsExposure = 0;
        this._midtonesHue = 30;
        this._midtonesDensity = 0;
        this._midtonesSaturation = 0;
        this._midtonesExposure = 0;
        this._shadowsHue = 30;
        this._shadowsDensity = 0;
        this._shadowsSaturation = 0;
        this._shadowsExposure = 0;
    }
    /**
     * Gets the global Hue value.
     * The hue value is a standard HSB hue in the range [0,360] where 0=red, 120=green and 240=blue. The default value is 30 degrees (orange).
     */ get globalHue() {
        return this._globalHue;
    }
    /**
     * Sets the global Hue value.
     * The hue value is a standard HSB hue in the range [0,360] where 0=red, 120=green and 240=blue. The default value is 30 degrees (orange).
     */ set globalHue(value) {
        this._globalHue = value;
        this._dirty = true;
    }
    /**
     * Gets the global Density value.
     * The density value is in range [-100,+100] where 0 means the color filter has no effect and +100 means the color filter has maximum effect.
     * Values less than zero provide a filter of opposite hue.
     */ get globalDensity() {
        return this._globalDensity;
    }
    /**
     * Sets the global Density value.
     * The density value is in range [-100,+100] where 0 means the color filter has no effect and +100 means the color filter has maximum effect.
     * Values less than zero provide a filter of opposite hue.
     */ set globalDensity(value) {
        this._globalDensity = value;
        this._dirty = true;
    }
    /**
     * Gets the global Saturation value.
     * This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase saturation and negative values decrease saturation.
     */ get globalSaturation() {
        return this._globalSaturation;
    }
    /**
     * Sets the global Saturation value.
     * This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase saturation and negative values decrease saturation.
     */ set globalSaturation(value) {
        this._globalSaturation = value;
        this._dirty = true;
    }
    /**
     * Gets the global Exposure value.
     * This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase exposure and negative values decrease exposure.
     */ get globalExposure() {
        return this._globalExposure;
    }
    /**
     * Sets the global Exposure value.
     * This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase exposure and negative values decrease exposure.
     */ set globalExposure(value) {
        this._globalExposure = value;
        this._dirty = true;
    }
    /**
     * Gets the highlights Hue value.
     * The hue value is a standard HSB hue in the range [0,360] where 0=red, 120=green and 240=blue. The default value is 30 degrees (orange).
     */ get highlightsHue() {
        return this._highlightsHue;
    }
    /**
     * Sets the highlights Hue value.
     * The hue value is a standard HSB hue in the range [0,360] where 0=red, 120=green and 240=blue. The default value is 30 degrees (orange).
     */ set highlightsHue(value) {
        this._highlightsHue = value;
        this._dirty = true;
    }
    /**
     * Gets the highlights Density value.
     * The density value is in range [-100,+100] where 0 means the color filter has no effect and +100 means the color filter has maximum effect.
     * Values less than zero provide a filter of opposite hue.
     */ get highlightsDensity() {
        return this._highlightsDensity;
    }
    /**
     * Sets the highlights Density value.
     * The density value is in range [-100,+100] where 0 means the color filter has no effect and +100 means the color filter has maximum effect.
     * Values less than zero provide a filter of opposite hue.
     */ set highlightsDensity(value) {
        this._highlightsDensity = value;
        this._dirty = true;
    }
    /**
     * Gets the highlights Saturation value.
     * This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase saturation and negative values decrease saturation.
     */ get highlightsSaturation() {
        return this._highlightsSaturation;
    }
    /**
     * Sets the highlights Saturation value.
     * This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase saturation and negative values decrease saturation.
     */ set highlightsSaturation(value) {
        this._highlightsSaturation = value;
        this._dirty = true;
    }
    /**
     * Gets the highlights Exposure value.
     * This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase exposure and negative values decrease exposure.
     */ get highlightsExposure() {
        return this._highlightsExposure;
    }
    /**
     * Sets the highlights Exposure value.
     * This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase exposure and negative values decrease exposure.
     */ set highlightsExposure(value) {
        this._highlightsExposure = value;
        this._dirty = true;
    }
    /**
     * Gets the midtones Hue value.
     * The hue value is a standard HSB hue in the range [0,360] where 0=red, 120=green and 240=blue. The default value is 30 degrees (orange).
     */ get midtonesHue() {
        return this._midtonesHue;
    }
    /**
     * Sets the midtones Hue value.
     * The hue value is a standard HSB hue in the range [0,360] where 0=red, 120=green and 240=blue. The default value is 30 degrees (orange).
     */ set midtonesHue(value) {
        this._midtonesHue = value;
        this._dirty = true;
    }
    /**
     * Gets the midtones Density value.
     * The density value is in range [-100,+100] where 0 means the color filter has no effect and +100 means the color filter has maximum effect.
     * Values less than zero provide a filter of opposite hue.
     */ get midtonesDensity() {
        return this._midtonesDensity;
    }
    /**
     * Sets the midtones Density value.
     * The density value is in range [-100,+100] where 0 means the color filter has no effect and +100 means the color filter has maximum effect.
     * Values less than zero provide a filter of opposite hue.
     */ set midtonesDensity(value) {
        this._midtonesDensity = value;
        this._dirty = true;
    }
    /**
     * Gets the midtones Saturation value.
     * This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase saturation and negative values decrease saturation.
     */ get midtonesSaturation() {
        return this._midtonesSaturation;
    }
    /**
     * Sets the midtones Saturation value.
     * This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase saturation and negative values decrease saturation.
     */ set midtonesSaturation(value) {
        this._midtonesSaturation = value;
        this._dirty = true;
    }
    /**
     * Gets the midtones Exposure value.
     * This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase exposure and negative values decrease exposure.
     */ get midtonesExposure() {
        return this._midtonesExposure;
    }
    /**
     * Sets the midtones Exposure value.
     * This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase exposure and negative values decrease exposure.
     */ set midtonesExposure(value) {
        this._midtonesExposure = value;
        this._dirty = true;
    }
    /**
     * Gets the shadows Hue value.
     * The hue value is a standard HSB hue in the range [0,360] where 0=red, 120=green and 240=blue. The default value is 30 degrees (orange).
     */ get shadowsHue() {
        return this._shadowsHue;
    }
    /**
     * Sets the shadows Hue value.
     * The hue value is a standard HSB hue in the range [0,360] where 0=red, 120=green and 240=blue. The default value is 30 degrees (orange).
     */ set shadowsHue(value) {
        this._shadowsHue = value;
        this._dirty = true;
    }
    /**
     * Gets the shadows Density value.
     * The density value is in range [-100,+100] where 0 means the color filter has no effect and +100 means the color filter has maximum effect.
     * Values less than zero provide a filter of opposite hue.
     */ get shadowsDensity() {
        return this._shadowsDensity;
    }
    /**
     * Sets the shadows Density value.
     * The density value is in range [-100,+100] where 0 means the color filter has no effect and +100 means the color filter has maximum effect.
     * Values less than zero provide a filter of opposite hue.
     */ set shadowsDensity(value) {
        this._shadowsDensity = value;
        this._dirty = true;
    }
    /**
     * Gets the shadows Saturation value.
     * This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase saturation and negative values decrease saturation.
     */ get shadowsSaturation() {
        return this._shadowsSaturation;
    }
    /**
     * Sets the shadows Saturation value.
     * This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase saturation and negative values decrease saturation.
     */ set shadowsSaturation(value) {
        this._shadowsSaturation = value;
        this._dirty = true;
    }
    /**
     * Gets the shadows Exposure value.
     * This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase exposure and negative values decrease exposure.
     */ get shadowsExposure() {
        return this._shadowsExposure;
    }
    /**
     * Sets the shadows Exposure value.
     * This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase exposure and negative values decrease exposure.
     */ set shadowsExposure(value) {
        this._shadowsExposure = value;
        this._dirty = true;
    }
    /**
     * Returns the class name
     * @returns The class name
     */ getClassName() {
        return "ColorCurves";
    }
    /**
     * Binds the color curves to the shader.
     * @param colorCurves The color curve to bind
     * @param effect The effect to bind to
     * @param positiveUniform The positive uniform shader parameter
     * @param neutralUniform The neutral uniform shader parameter
     * @param negativeUniform The negative uniform shader parameter
     */ static Bind(colorCurves, effect, positiveUniform = "vCameraColorCurvePositive", neutralUniform = "vCameraColorCurveNeutral", negativeUniform = "vCameraColorCurveNegative") {
        if (colorCurves._dirty) {
            colorCurves._dirty = false;
            // Fill in global info.
            colorCurves._getColorGradingDataToRef(colorCurves._globalHue, colorCurves._globalDensity, colorCurves._globalSaturation, colorCurves._globalExposure, colorCurves._globalCurve);
            // Compute highlights info.
            colorCurves._getColorGradingDataToRef(colorCurves._highlightsHue, colorCurves._highlightsDensity, colorCurves._highlightsSaturation, colorCurves._highlightsExposure, colorCurves._tempColor);
            colorCurves._tempColor.multiplyToRef(colorCurves._globalCurve, colorCurves._highlightsCurve);
            // Compute midtones info.
            colorCurves._getColorGradingDataToRef(colorCurves._midtonesHue, colorCurves._midtonesDensity, colorCurves._midtonesSaturation, colorCurves._midtonesExposure, colorCurves._tempColor);
            colorCurves._tempColor.multiplyToRef(colorCurves._globalCurve, colorCurves._midtonesCurve);
            // Compute shadows info.
            colorCurves._getColorGradingDataToRef(colorCurves._shadowsHue, colorCurves._shadowsDensity, colorCurves._shadowsSaturation, colorCurves._shadowsExposure, colorCurves._tempColor);
            colorCurves._tempColor.multiplyToRef(colorCurves._globalCurve, colorCurves._shadowsCurve);
            // Compute deltas (neutral is midtones).
            colorCurves._highlightsCurve.subtractToRef(colorCurves._midtonesCurve, colorCurves._positiveCurve);
            colorCurves._midtonesCurve.subtractToRef(colorCurves._shadowsCurve, colorCurves._negativeCurve);
        }
        if (effect) {
            effect.setFloat4(positiveUniform, colorCurves._positiveCurve.r, colorCurves._positiveCurve.g, colorCurves._positiveCurve.b, colorCurves._positiveCurve.a);
            effect.setFloat4(neutralUniform, colorCurves._midtonesCurve.r, colorCurves._midtonesCurve.g, colorCurves._midtonesCurve.b, colorCurves._midtonesCurve.a);
            effect.setFloat4(negativeUniform, colorCurves._negativeCurve.r, colorCurves._negativeCurve.g, colorCurves._negativeCurve.b, colorCurves._negativeCurve.a);
        }
    }
    /**
     * Returns color grading data based on a hue, density, saturation and exposure value.
     * @param hue
     * @param density
     * @param saturation The saturation.
     * @param exposure The exposure.
     * @param result The result data container.
     */ _getColorGradingDataToRef(hue, density, saturation, exposure, result) {
        if (hue == null) {
            return;
        }
        hue = ColorCurves._Clamp(hue, 0, 360);
        density = ColorCurves._Clamp(density, -100, 100);
        saturation = ColorCurves._Clamp(saturation, -100, 100);
        exposure = ColorCurves._Clamp(exposure, -100, 100);
        // Remap the slider/config filter density with non-linear mapping and also scale by half
        // so that the maximum filter density is only 50% control. This provides fine control
        // for small values and reasonable range.
        density = ColorCurves._ApplyColorGradingSliderNonlinear(density);
        density *= 0.5;
        exposure = ColorCurves._ApplyColorGradingSliderNonlinear(exposure);
        if (density < 0) {
            density *= -1;
            hue = (hue + 180) % 360;
        }
        ColorCurves._FromHSBToRef(hue, density, 50 + 0.25 * exposure, result);
        result.scaleToRef(2, result);
        result.a = 1 + 0.01 * saturation;
    }
    /**
     * Takes an input slider value and returns an adjusted value that provides extra control near the centre.
     * @param value The input slider value in range [-100,100].
     * @returns Adjusted value.
     */ static _ApplyColorGradingSliderNonlinear(value) {
        value /= 100;
        let x = Math.abs(value);
        x = Math.pow(x, 2);
        if (value < 0) {
            x *= -1;
        }
        x *= 100;
        return x;
    }
    /**
     * Returns an RGBA Color4 based on Hue, Saturation and Brightness (also referred to as value, HSV).
     * @param hue The hue (H) input.
     * @param saturation The saturation (S) input.
     * @param brightness The brightness (B) input.
     * @param result An RGBA color represented as Vector4.
     */ // eslint-disable-next-line @typescript-eslint/naming-convention
    static _FromHSBToRef(hue, saturation, brightness, result) {
        let h = ColorCurves._Clamp(hue, 0, 360);
        const s = ColorCurves._Clamp(saturation / 100, 0, 1);
        const v = ColorCurves._Clamp(brightness / 100, 0, 1);
        if (s === 0) {
            result.r = v;
            result.g = v;
            result.b = v;
        } else {
            // sector 0 to 5
            h /= 60;
            const i = Math.floor(h);
            // fractional part of h
            const f = h - i;
            const p = v * (1 - s);
            const q = v * (1 - s * f);
            const t = v * (1 - s * (1 - f));
            switch(i){
                case 0:
                    result.r = v;
                    result.g = t;
                    result.b = p;
                    break;
                case 1:
                    result.r = q;
                    result.g = v;
                    result.b = p;
                    break;
                case 2:
                    result.r = p;
                    result.g = v;
                    result.b = t;
                    break;
                case 3:
                    result.r = p;
                    result.g = q;
                    result.b = v;
                    break;
                case 4:
                    result.r = t;
                    result.g = p;
                    result.b = v;
                    break;
                default:
                    // case 5:
                    result.r = v;
                    result.g = p;
                    result.b = q;
                    break;
            }
        }
        result.a = 1;
    }
    /**
     * Returns a value clamped between min and max
     * @param value The value to clamp
     * @param min The minimum of value
     * @param max The maximum of value
     * @returns The clamped value.
     */ static _Clamp(value, min, max) {
        return Math.min(Math.max(value, min), max);
    }
    /**
     * Clones the current color curve instance.
     * @returns The cloned curves
     */ clone() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SerializationHelper"].Clone(()=>new ColorCurves(), this);
    }
    /**
     * Serializes the current color curve instance to a json representation.
     * @returns a JSON representation
     */ serialize() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SerializationHelper"].Serialize(this);
    }
    /**
     * Parses the color curve from a json representation.
     * @param source the JSON source to parse
     * @returns The parsed curves
     */ static Parse(source) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SerializationHelper"].Parse(()=>new ColorCurves(), source, null, null);
    }
}
/**
 * Prepare the list of uniforms associated with the ColorCurves effects.
 * @param uniformsList The list of uniforms used in the effect
 */ ColorCurves.PrepareUniforms = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$colorCurves$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PrepareUniformsForColorCurves"];
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], ColorCurves.prototype, "_globalHue", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], ColorCurves.prototype, "_globalDensity", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], ColorCurves.prototype, "_globalSaturation", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], ColorCurves.prototype, "_globalExposure", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], ColorCurves.prototype, "_highlightsHue", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], ColorCurves.prototype, "_highlightsDensity", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], ColorCurves.prototype, "_highlightsSaturation", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], ColorCurves.prototype, "_highlightsExposure", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], ColorCurves.prototype, "_midtonesHue", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], ColorCurves.prototype, "_midtonesDensity", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], ColorCurves.prototype, "_midtonesSaturation", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], ColorCurves.prototype, "_midtonesExposure", void 0);
// References the dependencies.
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SerializationHelper"]._ColorCurvesParser = ColorCurves.Parse; //# sourceMappingURL=colorCurves.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/imageProcessingConfiguration.functions.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PrepareSamplersForImageProcessing",
    ()=>PrepareSamplersForImageProcessing,
    "PrepareUniformsForImageProcessing",
    ()=>PrepareUniformsForImageProcessing
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$colorCurves$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/colorCurves.functions.js [app-ssr] (ecmascript)");
;
function PrepareUniformsForImageProcessing(uniforms, defines) {
    if (defines.EXPOSURE) {
        uniforms.push("exposureLinear");
    }
    if (defines.CONTRAST) {
        uniforms.push("contrast");
    }
    if (defines.COLORGRADING) {
        uniforms.push("colorTransformSettings");
    }
    if (defines.VIGNETTE || defines.DITHER) {
        uniforms.push("vInverseScreenSize");
    }
    if (defines.VIGNETTE) {
        uniforms.push("vignetteSettings1");
        uniforms.push("vignetteSettings2");
    }
    if (defines.COLORCURVES) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$colorCurves$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PrepareUniformsForColorCurves"])(uniforms);
    }
    if (defines.DITHER) {
        uniforms.push("ditherIntensity");
    }
}
function PrepareSamplersForImageProcessing(samplersList, defines) {
    if (defines.COLORGRADING) {
        samplersList.push("txColorTransform");
    }
} //# sourceMappingURL=imageProcessingConfiguration.functions.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/imageProcessingConfiguration.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ImageProcessingConfiguration",
    ()=>ImageProcessingConfiguration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-ssr] (ecmascript)");
/* eslint-disable @typescript-eslint/naming-convention */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/decorators.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.color.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$colorCurves$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/colorCurves.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/tools.functions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/decorators.serialization.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$imageProcessingConfiguration$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/imageProcessingConfiguration.functions.js [app-ssr] (ecmascript)");
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
class ImageProcessingConfiguration {
    constructor(){
        /**
         * Color curves setup used in the effect if colorCurvesEnabled is set to true
         */ this.colorCurves = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$colorCurves$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ColorCurves"]();
        this._colorCurvesEnabled = false;
        this._colorGradingEnabled = false;
        this._colorGradingWithGreenDepth = true;
        this._colorGradingBGR = true;
        /** @internal */ this._exposure = 1.0;
        this._toneMappingEnabled = false;
        this._toneMappingType = ImageProcessingConfiguration.TONEMAPPING_STANDARD;
        this._contrast = 1.0;
        /**
         * Vignette stretch size.
         */ this.vignetteStretch = 0;
        /**
         * Vignette center X Offset.
         */ this.vignetteCenterX = 0;
        /**
         * Vignette center Y Offset.
         */ this.vignetteCenterY = 0;
        /**
         * Vignette weight or intensity of the vignette effect.
         */ this.vignetteWeight = 1.5;
        /**
         * Color of the vignette applied on the screen through the chosen blend mode (vignetteBlendMode)
         * if vignetteEnabled is set to true.
         */ this.vignetteColor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color4"](0, 0, 0, 0);
        /**
         * Camera field of view used by the Vignette effect.
         */ this.vignetteCameraFov = 0.5;
        this._vignetteBlendMode = ImageProcessingConfiguration.VIGNETTEMODE_MULTIPLY;
        this._vignetteEnabled = false;
        this._ditheringEnabled = false;
        this._ditheringIntensity = 1.0 / 255.0;
        /** @internal */ this._skipFinalColorClamp = false;
        /** @internal */ this._applyByPostProcess = false;
        this._isEnabled = true;
        /**
         * Width of the output texture used in the post process. If not provided, uses the width of the screen.
         */ this.outputTextureWidth = 0;
        /**
         * Height of the output texture used in the post process. If not provided, uses the height of the screen.
         */ this.outputTextureHeight = 0;
        /**
         * An event triggered when the configuration changes and requires Shader to Update some parameters.
         */ this.onUpdateParameters = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
    }
    /**
     * Gets whether the color curves effect is enabled.
     */ get colorCurvesEnabled() {
        return this._colorCurvesEnabled;
    }
    /**
     * Sets whether the color curves effect is enabled.
     */ set colorCurvesEnabled(value) {
        if (this._colorCurvesEnabled === value) {
            return;
        }
        this._colorCurvesEnabled = value;
        this._updateParameters();
    }
    /**
     * Color grading LUT texture used in the effect if colorGradingEnabled is set to true
     */ get colorGradingTexture() {
        return this._colorGradingTexture;
    }
    /**
     * Color grading LUT texture used in the effect if colorGradingEnabled is set to true
     */ set colorGradingTexture(value) {
        if (this._colorGradingTexture === value) {
            return;
        }
        this._colorGradingTexture = value;
        this._updateParameters();
    }
    /**
     * Gets whether the color grading effect is enabled.
     */ get colorGradingEnabled() {
        return this._colorGradingEnabled;
    }
    /**
     * Sets whether the color grading effect is enabled.
     */ set colorGradingEnabled(value) {
        if (this._colorGradingEnabled === value) {
            return;
        }
        this._colorGradingEnabled = value;
        this._updateParameters();
    }
    /**
     * Gets whether the color grading effect is using a green depth for the 3d Texture.
     */ get colorGradingWithGreenDepth() {
        return this._colorGradingWithGreenDepth;
    }
    /**
     * Sets whether the color grading effect is using a green depth for the 3d Texture.
     */ set colorGradingWithGreenDepth(value) {
        if (this._colorGradingWithGreenDepth === value) {
            return;
        }
        this._colorGradingWithGreenDepth = value;
        this._updateParameters();
    }
    /**
     * Gets whether the color grading texture contains BGR values.
     */ get colorGradingBGR() {
        return this._colorGradingBGR;
    }
    /**
     * Sets whether the color grading texture contains BGR values.
     */ set colorGradingBGR(value) {
        if (this._colorGradingBGR === value) {
            return;
        }
        this._colorGradingBGR = value;
        this._updateParameters();
    }
    /**
     * Gets the Exposure used in the effect.
     */ get exposure() {
        return this._exposure;
    }
    /**
     * Sets the Exposure used in the effect.
     */ set exposure(value) {
        if (this._exposure === value) {
            return;
        }
        this._exposure = value;
        this._updateParameters();
    }
    /**
     * Gets whether the tone mapping effect is enabled.
     */ get toneMappingEnabled() {
        return this._toneMappingEnabled;
    }
    /**
     * Sets whether the tone mapping effect is enabled.
     */ set toneMappingEnabled(value) {
        if (this._toneMappingEnabled === value) {
            return;
        }
        this._toneMappingEnabled = value;
        this._updateParameters();
    }
    /**
     * Gets the type of tone mapping effect.
     */ get toneMappingType() {
        return this._toneMappingType;
    }
    /**
     * Sets the type of tone mapping effect used in BabylonJS.
     */ set toneMappingType(value) {
        if (this._toneMappingType === value) {
            return;
        }
        this._toneMappingType = value;
        this._updateParameters();
    }
    /**
     * Gets the contrast used in the effect.
     */ get contrast() {
        return this._contrast;
    }
    /**
     * Sets the contrast used in the effect.
     */ set contrast(value) {
        if (this._contrast === value) {
            return;
        }
        this._contrast = value;
        this._updateParameters();
    }
    /**
     * Back Compat: Vignette center Y Offset.
     * @deprecated use vignetteCenterY instead
     */ get vignetteCentreY() {
        return this.vignetteCenterY;
    }
    set vignetteCentreY(value) {
        this.vignetteCenterY = value;
    }
    /**
     * Back Compat: Vignette center X Offset.
     * @deprecated use vignetteCenterX instead
     */ get vignetteCentreX() {
        return this.vignetteCenterX;
    }
    set vignetteCentreX(value) {
        this.vignetteCenterX = value;
    }
    /**
     * Gets the vignette blend mode allowing different kind of effect.
     */ get vignetteBlendMode() {
        return this._vignetteBlendMode;
    }
    /**
     * Sets the vignette blend mode allowing different kind of effect.
     */ set vignetteBlendMode(value) {
        if (this._vignetteBlendMode === value) {
            return;
        }
        this._vignetteBlendMode = value;
        this._updateParameters();
    }
    /**
     * Gets whether the vignette effect is enabled.
     */ get vignetteEnabled() {
        return this._vignetteEnabled;
    }
    /**
     * Sets whether the vignette effect is enabled.
     */ set vignetteEnabled(value) {
        if (this._vignetteEnabled === value) {
            return;
        }
        this._vignetteEnabled = value;
        this._updateParameters();
    }
    /**
     * Gets whether the dithering effect is enabled.
     * The dithering effect can be used to reduce banding.
     */ get ditheringEnabled() {
        return this._ditheringEnabled;
    }
    /**
     * Sets whether the dithering effect is enabled.
     * The dithering effect can be used to reduce banding.
     */ set ditheringEnabled(value) {
        if (this._ditheringEnabled === value) {
            return;
        }
        this._ditheringEnabled = value;
        this._updateParameters();
    }
    /**
     * Gets the dithering intensity. 0 is no dithering. Default is 1.0 / 255.0.
     */ get ditheringIntensity() {
        return this._ditheringIntensity;
    }
    /**
     * Sets the dithering intensity. 0 is no dithering. Default is 1.0 / 255.0.
     */ set ditheringIntensity(value) {
        if (this._ditheringIntensity === value) {
            return;
        }
        this._ditheringIntensity = value;
        this._updateParameters();
    }
    /**
     * If apply by post process is set to true, setting this to true will skip the final color clamp step in the fragment shader
     * Applies to PBR materials.
     */ get skipFinalColorClamp() {
        return this._skipFinalColorClamp;
    }
    /**
     * If apply by post process is set to true, setting this to true will skip the final color clamp step in the fragment shader
     * Applies to PBR materials.
     */ set skipFinalColorClamp(value) {
        if (this._skipFinalColorClamp === value) {
            return;
        }
        this._skipFinalColorClamp = value;
        this._updateParameters();
    }
    /**
     * Gets whether the image processing is applied through a post process or not.
     */ get applyByPostProcess() {
        return this._applyByPostProcess;
    }
    /**
     * Sets whether the image processing is applied through a post process or not.
     */ set applyByPostProcess(value) {
        if (this._applyByPostProcess === value) {
            return;
        }
        this._applyByPostProcess = value;
        this._updateParameters();
    }
    /**
     * Gets whether the image processing is enabled or not.
     */ get isEnabled() {
        return this._isEnabled;
    }
    /**
     * Sets whether the image processing is enabled or not.
     */ set isEnabled(value) {
        if (this._isEnabled === value) {
            return;
        }
        this._isEnabled = value;
        this._updateParameters();
    }
    /**
     * Method called each time the image processing information changes requires to recompile the effect.
     */ _updateParameters() {
        this.onUpdateParameters.notifyObservers(this);
    }
    /**
     * Gets the current class name.
     * @returns "ImageProcessingConfiguration"
     */ getClassName() {
        return "ImageProcessingConfiguration";
    }
    /**
     * Prepare the list of defines associated to the shader.
     * @param defines the list of defines to complete
     * @param forPostProcess Define if we are currently in post process mode or not
     */ prepareDefines(defines, forPostProcess = false) {
        if (forPostProcess !== this.applyByPostProcess || !this._isEnabled) {
            defines.VIGNETTE = false;
            defines.TONEMAPPING = 0;
            defines.CONTRAST = false;
            defines.EXPOSURE = false;
            defines.COLORCURVES = false;
            defines.COLORGRADING = false;
            defines.COLORGRADING3D = false;
            defines.DITHER = false;
            defines.IMAGEPROCESSING = false;
            defines.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp;
            defines.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess && this._isEnabled;
            return;
        }
        defines.VIGNETTE = this.vignetteEnabled;
        defines.VIGNETTEBLENDMODEMULTIPLY = this.vignetteBlendMode === ImageProcessingConfiguration._VIGNETTEMODE_MULTIPLY;
        defines.VIGNETTEBLENDMODEOPAQUE = !defines.VIGNETTEBLENDMODEMULTIPLY;
        if (!this._toneMappingEnabled) {
            defines.TONEMAPPING = 0;
        } else {
            switch(this._toneMappingType){
                case ImageProcessingConfiguration.TONEMAPPING_KHR_PBR_NEUTRAL:
                    defines.TONEMAPPING = 3;
                    break;
                case ImageProcessingConfiguration.TONEMAPPING_ACES:
                    defines.TONEMAPPING = 2;
                    break;
                default:
                    defines.TONEMAPPING = 1;
                    break;
            }
        }
        defines.CONTRAST = this.contrast !== 1.0;
        defines.EXPOSURE = this.exposure !== 1.0;
        defines.COLORCURVES = this.colorCurvesEnabled && !!this.colorCurves;
        defines.COLORGRADING = this.colorGradingEnabled && !!this.colorGradingTexture;
        if (defines.COLORGRADING) {
            defines.COLORGRADING3D = this.colorGradingTexture.is3D;
        } else {
            defines.COLORGRADING3D = false;
        }
        defines.SAMPLER3DGREENDEPTH = this.colorGradingWithGreenDepth;
        defines.SAMPLER3DBGRMAP = this.colorGradingBGR;
        defines.DITHER = this._ditheringEnabled;
        defines.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess;
        defines.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp;
        defines.IMAGEPROCESSING = defines.VIGNETTE || !!defines.TONEMAPPING || defines.CONTRAST || defines.EXPOSURE || defines.COLORCURVES || defines.COLORGRADING || defines.DITHER;
    }
    /**
     * Returns true if all the image processing information are ready.
     * @returns True if ready, otherwise, false
     */ isReady() {
        // Color Grading texture can not be none blocking.
        return !this.colorGradingEnabled || !this.colorGradingTexture || this.colorGradingTexture.isReady();
    }
    /**
     * Binds the image processing to the shader.
     * @param effect The effect to bind to
     * @param overrideAspectRatio Override the aspect ratio of the effect
     */ bind(effect, overrideAspectRatio) {
        // Color Curves
        if (this._colorCurvesEnabled && this.colorCurves) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$colorCurves$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ColorCurves"].Bind(this.colorCurves, effect);
        }
        // Vignette and dither handled together due to common uniform.
        if (this._vignetteEnabled || this._ditheringEnabled) {
            const inverseWidth = 1 / (this.outputTextureWidth || effect.getEngine().getRenderWidth());
            const inverseHeight = 1 / (this.outputTextureHeight || effect.getEngine().getRenderHeight());
            effect.setFloat2("vInverseScreenSize", inverseWidth, inverseHeight);
            if (this._ditheringEnabled) {
                effect.setFloat("ditherIntensity", 0.5 * this._ditheringIntensity);
            }
            if (this._vignetteEnabled) {
                const aspectRatio = overrideAspectRatio != null ? overrideAspectRatio : inverseHeight / inverseWidth;
                let vignetteScaleY = Math.tan(this.vignetteCameraFov * 0.5);
                let vignetteScaleX = vignetteScaleY * aspectRatio;
                const vignetteScaleGeometricMean = Math.sqrt(vignetteScaleX * vignetteScaleY);
                vignetteScaleX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mix"])(vignetteScaleX, vignetteScaleGeometricMean, this.vignetteStretch);
                vignetteScaleY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mix"])(vignetteScaleY, vignetteScaleGeometricMean, this.vignetteStretch);
                effect.setFloat4("vignetteSettings1", vignetteScaleX, vignetteScaleY, -vignetteScaleX * this.vignetteCenterX, -vignetteScaleY * this.vignetteCenterY);
                const vignettePower = -2.0 * this.vignetteWeight;
                effect.setFloat4("vignetteSettings2", this.vignetteColor.r, this.vignetteColor.g, this.vignetteColor.b, vignettePower);
            }
        }
        // Exposure
        effect.setFloat("exposureLinear", this.exposure);
        // Contrast
        effect.setFloat("contrast", this.contrast);
        // Color transform settings
        if (this.colorGradingTexture) {
            effect.setTexture("txColorTransform", this.colorGradingTexture);
            const textureSize = this.colorGradingTexture.getSize().height;
            effect.setFloat4("colorTransformSettings", (textureSize - 1) / textureSize, 0.5 / textureSize, textureSize, this.colorGradingTexture.level // weight
            );
        }
    }
    /**
     * Clones the current image processing instance.
     * @returns The cloned image processing
     */ clone() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SerializationHelper"].Clone(()=>new ImageProcessingConfiguration(), this);
    }
    /**
     * Serializes the current image processing instance to a json representation.
     * @returns a JSON representation
     */ serialize() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SerializationHelper"].Serialize(this);
    }
    /**
     * Parses the image processing from a json representation.
     * @param source the JSON source to parse
     * @returns The parsed image processing
     */ static Parse(source) {
        const parsed = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SerializationHelper"].Parse(()=>new ImageProcessingConfiguration(), source, null, null);
        // Backward compatibility
        if (source.vignetteCentreX !== undefined) {
            parsed.vignetteCenterX = source.vignetteCentreX;
        }
        if (source.vignetteCentreY !== undefined) {
            parsed.vignetteCenterY = source.vignetteCentreY;
        }
        return parsed;
    }
    /**
     * Used to apply the vignette as a mix with the pixel color.
     */ static get VIGNETTEMODE_MULTIPLY() {
        return this._VIGNETTEMODE_MULTIPLY;
    }
    /**
     * Used to apply the vignette as a replacement of the pixel color.
     */ static get VIGNETTEMODE_OPAQUE() {
        return this._VIGNETTEMODE_OPAQUE;
    }
}
/**
 * Default tone mapping applied in BabylonJS.
 */ ImageProcessingConfiguration.TONEMAPPING_STANDARD = 0;
/**
 * ACES Tone mapping (used by default in unreal and unity). This can help getting closer
 * to other engines rendering to increase portability.
 */ ImageProcessingConfiguration.TONEMAPPING_ACES = 1;
/**
 * Neutral Tone mapping developped by the Khronos group in order to constrain
 * values between 0 and 1 without shifting Hue.
 */ ImageProcessingConfiguration.TONEMAPPING_KHR_PBR_NEUTRAL = 2;
/**
 * Prepare the list of uniforms associated with the Image Processing effects.
 * @param uniforms The list of uniforms used in the effect
 * @param defines the list of defines currently in use
 */ ImageProcessingConfiguration.PrepareUniforms = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$imageProcessingConfiguration$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PrepareUniformsForImageProcessing"];
/**
 * Prepare the list of samplers associated with the Image Processing effects.
 * @param samplersList The list of uniforms used in the effect
 * @param defines the list of defines currently in use
 */ ImageProcessingConfiguration.PrepareSamplers = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$imageProcessingConfiguration$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PrepareSamplersForImageProcessing"];
// Static constants associated to the image processing.
ImageProcessingConfiguration._VIGNETTEMODE_MULTIPLY = 0;
ImageProcessingConfiguration._VIGNETTEMODE_OPAQUE = 1;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeAsColorCurves"])()
], ImageProcessingConfiguration.prototype, "colorCurves", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], ImageProcessingConfiguration.prototype, "_colorCurvesEnabled", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeAsTexture"])("colorGradingTexture")
], ImageProcessingConfiguration.prototype, "_colorGradingTexture", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], ImageProcessingConfiguration.prototype, "_colorGradingEnabled", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], ImageProcessingConfiguration.prototype, "_colorGradingWithGreenDepth", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], ImageProcessingConfiguration.prototype, "_colorGradingBGR", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], ImageProcessingConfiguration.prototype, "_exposure", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], ImageProcessingConfiguration.prototype, "_toneMappingEnabled", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], ImageProcessingConfiguration.prototype, "_toneMappingType", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], ImageProcessingConfiguration.prototype, "_contrast", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], ImageProcessingConfiguration.prototype, "vignetteStretch", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], ImageProcessingConfiguration.prototype, "vignetteCenterX", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], ImageProcessingConfiguration.prototype, "vignetteCenterY", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], ImageProcessingConfiguration.prototype, "vignetteWeight", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeAsColor4"])()
], ImageProcessingConfiguration.prototype, "vignetteColor", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], ImageProcessingConfiguration.prototype, "vignetteCameraFov", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], ImageProcessingConfiguration.prototype, "_vignetteBlendMode", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], ImageProcessingConfiguration.prototype, "_vignetteEnabled", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], ImageProcessingConfiguration.prototype, "_ditheringEnabled", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], ImageProcessingConfiguration.prototype, "_ditheringIntensity", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], ImageProcessingConfiguration.prototype, "_skipFinalColorClamp", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], ImageProcessingConfiguration.prototype, "_applyByPostProcess", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], ImageProcessingConfiguration.prototype, "_isEnabled", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], ImageProcessingConfiguration.prototype, "outputTextureWidth", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], ImageProcessingConfiguration.prototype, "outputTextureHeight", void 0);
// References the dependencies.
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SerializationHelper"]._ImageProcessingConfigurationParser = ImageProcessingConfiguration.Parse;
// Register Class Name
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.ImageProcessingConfiguration", ImageProcessingConfiguration); //# sourceMappingURL=imageProcessingConfiguration.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/uniformBuffer.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UniformBuffer",
    ()=>UniformBuffer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/tools.js [app-ssr] (ecmascript)");
;
;
class UniformBuffer {
    /**
     * Instantiates a new Uniform buffer objects.
     *
     * Handles blocks of uniform on the GPU.
     *
     * If WebGL 2 is not available, this class falls back on traditional setUniformXXX calls.
     *
     * For more information, please refer to :
     * @see https://www.khronos.org/opengl/wiki/Uniform_Buffer_Object
     * @param engine Define the engine the buffer is associated with
     * @param data Define the data contained in the buffer
     * @param dynamic Define if the buffer is updatable
     * @param name to assign to the buffer (debugging purpose)
     * @param forceNoUniformBuffer define that this object must not rely on UBO objects
     * @param trackUBOsInFrame define if the UBOs should be tracked in the frame (default: undefined - will use the value from Engine._features.trackUbosInFrame)
     */ constructor(engine, data, dynamic = false, name, forceNoUniformBuffer = false, trackUBOsInFrame){
        this._uniformNames = [];
        // Matrix cache
        this._valueCache = {};
        this._engine = engine;
        this._noUBO = !engine.supportsUniformBuffers || forceNoUniformBuffer;
        this._dynamic = dynamic;
        this._name = name ?? "no-name";
        this._data = data || [];
        this._uniformLocations = {};
        this._uniformSizes = {};
        this._uniformArraySizes = {};
        this._uniformLocationPointer = 0;
        this._needSync = false;
        this._trackUBOsInFrame = false;
        if (trackUBOsInFrame === undefined && this._engine._features.trackUbosInFrame || trackUBOsInFrame === true) {
            this._buffers = [];
            this._bufferIndex = -1;
            this._createBufferOnWrite = false;
            this._currentFrameId = 0;
            this._trackUBOsInFrame = true;
        }
        if (this._noUBO) {
            this.updateMatrix3x3 = this._updateMatrix3x3ForEffect;
            this.updateMatrix2x2 = this._updateMatrix2x2ForEffect;
            this.updateFloat = this._updateFloatForEffect;
            this.updateFloat2 = this._updateFloat2ForEffect;
            this.updateFloat3 = this._updateFloat3ForEffect;
            this.updateFloat4 = this._updateFloat4ForEffect;
            this.updateFloatArray = this._updateFloatArrayForEffect;
            this.updateArray = this._updateArrayForEffect;
            this.updateIntArray = this._updateIntArrayForEffect;
            this.updateUIntArray = this._updateUIntArrayForEffect;
            this.updateMatrix = this._updateMatrixForEffect;
            this.updateMatrices = this._updateMatricesForEffect;
            this.updateVector3 = this._updateVector3ForEffect;
            this.updateVector4 = this._updateVector4ForEffect;
            this.updateColor3 = this._updateColor3ForEffect;
            this.updateColor4 = this._updateColor4ForEffect;
            this.updateDirectColor4 = this._updateDirectColor4ForEffect;
            this.updateInt = this._updateIntForEffect;
            this.updateInt2 = this._updateInt2ForEffect;
            this.updateInt3 = this._updateInt3ForEffect;
            this.updateInt4 = this._updateInt4ForEffect;
            this.updateUInt = this._updateUIntForEffect;
            this.updateUInt2 = this._updateUInt2ForEffect;
            this.updateUInt3 = this._updateUInt3ForEffect;
            this.updateUInt4 = this._updateUInt4ForEffect;
        } else {
            this._engine._uniformBuffers.push(this);
            this.updateMatrix3x3 = this._updateMatrix3x3ForUniform;
            this.updateMatrix2x2 = this._updateMatrix2x2ForUniform;
            this.updateFloat = this._updateFloatForUniform;
            this.updateFloat2 = this._updateFloat2ForUniform;
            this.updateFloat3 = this._updateFloat3ForUniform;
            this.updateFloat4 = this._updateFloat4ForUniform;
            this.updateFloatArray = this._updateFloatArrayForUniform;
            this.updateArray = this._updateArrayForUniform;
            this.updateIntArray = this._updateIntArrayForUniform;
            this.updateUIntArray = this._updateUIntArrayForUniform;
            this.updateMatrix = this._updateMatrixForUniform;
            this.updateMatrices = this._updateMatricesForUniform;
            this.updateVector3 = this._updateVector3ForUniform;
            this.updateVector4 = this._updateVector4ForUniform;
            this.updateColor3 = this._updateColor3ForUniform;
            this.updateColor4 = this._updateColor4ForUniform;
            this.updateDirectColor4 = this._updateDirectColor4ForUniform;
            this.updateInt = this._updateIntForUniform;
            this.updateInt2 = this._updateInt2ForUniform;
            this.updateInt3 = this._updateInt3ForUniform;
            this.updateInt4 = this._updateInt4ForUniform;
            this.updateUInt = this._updateUIntForUniform;
            this.updateUInt2 = this._updateUInt2ForUniform;
            this.updateUInt3 = this._updateUInt3ForUniform;
            this.updateUInt4 = this._updateUInt4ForUniform;
        }
    }
    /**
     * Indicates if the buffer is using the WebGL2 UBO implementation,
     * or just falling back on setUniformXXX calls.
     */ get useUbo() {
        return !this._noUBO;
    }
    /**
     * Indicates if the WebGL underlying uniform buffer is in sync
     * with the javascript cache data.
     */ get isSync() {
        return !this._needSync;
    }
    /**
     * Indicates if the WebGL underlying uniform buffer is dynamic.
     * Also, a dynamic UniformBuffer will disable cache verification and always
     * update the underlying WebGL uniform buffer to the GPU.
     * @returns if Dynamic, otherwise false
     */ isDynamic() {
        return this._dynamic;
    }
    /**
     * The data cache on JS side.
     * @returns the underlying data as a float array
     */ getData() {
        return this._bufferData;
    }
    /**
     * The underlying WebGL Uniform buffer.
     * @returns the webgl buffer
     */ getBuffer() {
        return this._buffer;
    }
    /**
     * The names of the uniforms in the buffer.
     * @returns an array of uniform names
     */ getUniformNames() {
        return this._uniformNames;
    }
    /**
     * std140 layout specifies how to align data within an UBO structure.
     * See https://khronos.org/registry/OpenGL/specs/gl/glspec45.core.pdf#page=159
     * for specs.
     * @param size
     */ _fillAlignment(size) {
        // This code has been simplified because we only use floats, vectors of 1, 2, 3, 4 components
        // and 4x4 matrices
        // TODO : change if other types are used
        let alignment;
        if (size <= 2) {
            alignment = size;
        } else {
            alignment = 4;
        }
        if (this._uniformLocationPointer % alignment !== 0) {
            const oldPointer = this._uniformLocationPointer;
            this._uniformLocationPointer += alignment - this._uniformLocationPointer % alignment;
            const diff = this._uniformLocationPointer - oldPointer;
            for(let i = 0; i < diff; i++){
                this._data.push(0);
            }
        }
    }
    /**
     * Adds an uniform in the buffer.
     * Warning : the subsequents calls of this function must be in the same order as declared in the shader
     * for the layout to be correct ! The addUniform function only handles types like float, vec2, vec3, vec4, mat4,
     * meaning size=1,2,3,4 or 16. It does not handle struct types.
     * @param name Name of the uniform, as used in the uniform block in the shader.
     * @param size Data size, or data directly.
     * @param arraySize The number of elements in the array, 0 if not an array.
     */ addUniform(name, size, arraySize = 0) {
        if (arraySize > 0 && typeof size === "number") {
            // Keep track of stride for `updateFloatArray`
            this._uniformArraySizes[name] = {
                strideSize: size,
                arraySize
            };
        }
        if (this._uniformLocations[name] !== undefined) {
            // Already existing uniform
            return;
        }
        this._uniformNames.push(name);
        if (this._noUBO) {
            return;
        }
        // This function must be called in the order of the shader layout !
        // size can be the size of the uniform, or data directly
        let data;
        // std140 FTW...
        if (arraySize > 0) {
            if (size instanceof Array) {
                // eslint-disable-next-line no-throw-literal
                throw "addUniform should not be use with Array in UBO: " + name;
            }
            this._fillAlignment(4);
            if (size == 16) {
                size = size * arraySize;
            } else {
                const perElementPadding = 4 - size;
                const totalPadding = perElementPadding * arraySize;
                size = size * arraySize + totalPadding;
            }
            data = [];
            // Fill with zeros
            for(let i = 0; i < size; i++){
                data.push(0);
            }
        } else {
            if (size instanceof Array) {
                data = size;
                size = data.length;
            } else {
                data = [];
                // Fill with zeros
                for(let i = 0; i < size; i++){
                    data.push(0);
                }
            }
            this._fillAlignment(size);
        }
        this._uniformSizes[name] = size;
        this._uniformLocations[name] = this._uniformLocationPointer;
        this._uniformLocationPointer += size;
        for(let i = 0; i < size; i++){
            this._data.push(data[i]);
        }
        this._needSync = true;
    }
    /**
     * Adds a Matrix 4x4 to the uniform buffer.
     * @param name Name of the uniform, as used in the uniform block in the shader.
     * @param mat A 4x4 matrix.
     */ addMatrix(name, mat) {
        this.addUniform(name, Array.prototype.slice.call(mat.asArray()));
    }
    /**
     * Adds a vec2 to the uniform buffer.
     * @param name Name of the uniform, as used in the uniform block in the shader.
     * @param x Define the x component value of the vec2
     * @param y Define the y component value of the vec2
     */ addFloat2(name, x, y) {
        const temp = [
            x,
            y
        ];
        this.addUniform(name, temp);
    }
    /**
     * Adds a vec3 to the uniform buffer.
     * @param name Name of the uniform, as used in the uniform block in the shader.
     * @param x Define the x component value of the vec3
     * @param y Define the y component value of the vec3
     * @param z Define the z component value of the vec3
     */ addFloat3(name, x, y, z) {
        const temp = [
            x,
            y,
            z
        ];
        this.addUniform(name, temp);
    }
    /**
     * Adds a vec3 to the uniform buffer.
     * @param name Name of the uniform, as used in the uniform block in the shader.
     * @param color Define the vec3 from a Color
     */ addColor3(name, color) {
        const temp = [
            color.r,
            color.g,
            color.b
        ];
        this.addUniform(name, temp);
    }
    /**
     * Adds a vec4 to the uniform buffer.
     * @param name Name of the uniform, as used in the uniform block in the shader.
     * @param color Define the rgb components from a Color
     * @param alpha Define the a component of the vec4
     */ addColor4(name, color, alpha) {
        const temp = [
            color.r,
            color.g,
            color.b,
            alpha
        ];
        this.addUniform(name, temp);
    }
    /**
     * Adds a vec3 to the uniform buffer.
     * @param name Name of the uniform, as used in the uniform block in the shader.
     * @param vector Define the vec3 components from a Vector
     */ addVector3(name, vector) {
        const temp = [
            vector.x,
            vector.y,
            vector.z
        ];
        this.addUniform(name, temp);
    }
    /**
     * Adds a Matrix 3x3 to the uniform buffer.
     * @param name Name of the uniform, as used in the uniform block in the shader.
     */ addMatrix3x3(name) {
        this.addUniform(name, 12);
    }
    /**
     * Adds a Matrix 2x2 to the uniform buffer.
     * @param name Name of the uniform, as used in the uniform block in the shader.
     */ addMatrix2x2(name) {
        this.addUniform(name, 8);
    }
    /**
     * Effectively creates the WebGL Uniform Buffer, once layout is completed with `addUniform`.
     */ create() {
        if (this._noUBO) {
            return;
        }
        if (this._buffer) {
            return; // nothing to do
        }
        // See spec, alignment must be filled as a vec4
        this._fillAlignment(4);
        this._bufferData = new Float32Array(this._data);
        this._rebuild();
        this._needSync = true;
    }
    // The result of this method is used for debugging purpose, as part of the buffer name
    // It is meant to more easily know what this buffer is about when debugging
    // Some buffers can have a lot of uniforms (several dozens), so the method only returns the first 10 of them
    // (should be enough to understand what the buffer is for)
    _getNamesDebug() {
        const names = [];
        let i = 0;
        for(const name in this._uniformLocations){
            names.push(name);
            if (++i === 10) {
                break;
            }
        }
        return names.join(",");
    }
    /** @internal */ _rebuild() {
        if (this._noUBO || !this._bufferData) {
            return;
        }
        if (this._dynamic) {
            this._buffer = this._engine.createDynamicUniformBuffer(this._bufferData, this._name + "_UniformList:" + this._getNamesDebug());
        } else {
            this._buffer = this._engine.createUniformBuffer(this._bufferData, this._name + "_UniformList:" + this._getNamesDebug());
        }
        if (this._trackUBOsInFrame) {
            this._buffers.push([
                this._buffer,
                this._engine._features.checkUbosContentBeforeUpload ? this._bufferData.slice() : undefined
            ]);
            this._bufferIndex = this._buffers.length - 1;
            this._createBufferOnWrite = false;
        }
    }
    /** @internal */ _rebuildAfterContextLost() {
        if (this._trackUBOsInFrame) {
            this._buffers = [];
            this._currentFrameId = 0;
        }
        this._rebuild();
    }
    /** @internal */ get _numBuffers() {
        return this._buffers.length;
    }
    /** @internal */ get _indexBuffer() {
        return this._bufferIndex;
    }
    /** Gets or sets the name of this buffer */ get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    /** Gets the current effect */ get currentEffect() {
        return this._currentEffect;
    }
    _buffersEqual(buf1, buf2) {
        for(let i = 0; i < buf1.length; ++i){
            if (buf1[i] !== buf2[i]) {
                return false;
            }
        }
        return true;
    }
    _copyBuffer(src, dst) {
        for(let i = 0; i < src.length; ++i){
            dst[i] = src[i];
        }
    }
    /**
     * Updates the WebGL Uniform Buffer on the GPU.
     * If the `dynamic` flag is set to true, no cache comparison is done.
     * Otherwise, the buffer will be updated only if the cache differs.
     */ update() {
        if (this._noUBO) {
            return;
        }
        this.bindUniformBuffer();
        if (!this._buffer) {
            this.create();
            return;
        }
        if (!this._dynamic && !this._needSync) {
            this._createBufferOnWrite = this._trackUBOsInFrame;
            return;
        }
        if (this._buffers && this._buffers.length > 1 && this._buffers[this._bufferIndex][1]) {
            if (this._buffersEqual(this._bufferData, this._buffers[this._bufferIndex][1])) {
                this._needSync = false;
                this._createBufferOnWrite = this._trackUBOsInFrame;
                return;
            } else {
                this._copyBuffer(this._bufferData, this._buffers[this._bufferIndex][1]);
            }
        }
        this._engine.updateUniformBuffer(this._buffer, this._bufferData);
        if (this._engine._features._collectUbosUpdatedInFrame) {
            if (!UniformBuffer._UpdatedUbosInFrame[this._name]) {
                UniformBuffer._UpdatedUbosInFrame[this._name] = 0;
            }
            UniformBuffer._UpdatedUbosInFrame[this._name]++;
        }
        this._needSync = false;
        this._createBufferOnWrite = this._trackUBOsInFrame;
    }
    _createNewBuffer() {
        if (this._bufferIndex + 1 < this._buffers.length) {
            this._bufferIndex++;
            this._buffer = this._buffers[this._bufferIndex][0];
            this._createBufferOnWrite = false;
            this._needSync = true;
        } else {
            this._rebuild();
        }
    }
    _checkNewFrame() {
        if (this._trackUBOsInFrame && this._currentFrameId !== this._engine.frameId) {
            this._currentFrameId = this._engine.frameId;
            this._createBufferOnWrite = false;
            if (this._buffers && this._buffers.length > 0) {
                this._needSync = this._bufferIndex !== 0;
                this._bufferIndex = 0;
                this._buffer = this._buffers[this._bufferIndex][0];
            } else {
                this._bufferIndex = -1;
            }
        }
    }
    /**
     * Updates the value of an uniform. The `update` method must be called afterwards to make it effective in the GPU.
     * @param uniformName Define the name of the uniform, as used in the uniform block in the shader.
     * @param data Define the flattened data
     * @param size Define the size of the data.
     */ updateUniform(uniformName, data, size) {
        this._checkNewFrame();
        let location = this._uniformLocations[uniformName];
        if (location === undefined) {
            if (this._buffer) {
                // Cannot add an uniform if the buffer is already created
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Error("Cannot add an uniform after UBO has been created. uniformName=" + uniformName);
                return;
            }
            this.addUniform(uniformName, size);
            location = this._uniformLocations[uniformName];
        }
        if (!this._buffer) {
            this.create();
        }
        if (!this._dynamic) {
            // Cache for static uniform buffers
            let changed = false;
            for(let i = 0; i < size; i++){
                // We are checking the matrix cache before calling updateUniform so we do not need to check it here
                // Hence the test for size === 16 to simply commit the matrix values
                if (size === 16 && !this._engine._features.uniformBufferHardCheckMatrix || this._bufferData[location + i] !== Math.fround(data[i])) {
                    changed = true;
                    if (this._createBufferOnWrite) {
                        this._createNewBuffer();
                    }
                    this._bufferData[location + i] = data[i];
                }
            }
            this._needSync = this._needSync || changed;
        } else {
            // No cache for dynamic
            for(let i = 0; i < size; i++){
                this._bufferData[location + i] = data[i];
            }
        }
    }
    /**
     * Updates the value of an uniform. The `update` method must be called afterwards to make it effective in the GPU.
     * @param uniformName Define the name of the uniform, as used in the uniform block in the shader.
     * @param data Define the flattened data
     * @param size Define the size of the data.
     */ updateUniformArray(uniformName, data, size) {
        this._checkNewFrame();
        const location = this._uniformLocations[uniformName];
        if (location === undefined) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Error("Cannot add an uniform Array dynamically. Please, add it using addUniform and make sure that uniform buffers are supported by the current engine.");
            return;
        }
        if (!this._buffer) {
            this.create();
        }
        const arraySizes = this._uniformArraySizes[uniformName];
        if (!this._dynamic) {
            // Cache for static uniform buffers
            let changed = false;
            let countToFour = 0;
            let baseStride = 0;
            for(let i = 0; i < size; i++){
                if (this._bufferData[location + baseStride * 4 + countToFour] !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tools"].FloatRound(data[i])) {
                    changed = true;
                    if (this._createBufferOnWrite) {
                        this._createNewBuffer();
                    }
                    this._bufferData[location + baseStride * 4 + countToFour] = data[i];
                }
                countToFour++;
                if (countToFour === arraySizes.strideSize) {
                    for(; countToFour < 4; countToFour++){
                        this._bufferData[location + baseStride * 4 + countToFour] = 0;
                    }
                    countToFour = 0;
                    baseStride++;
                }
            }
            this._needSync = this._needSync || changed;
        } else {
            // No cache for dynamic
            for(let i = 0; i < size; i++){
                this._bufferData[location + i] = data[i];
            }
        }
    }
    _cacheMatrix(name, matrix) {
        this._checkNewFrame();
        const cache = this._valueCache[name];
        const flag = matrix.updateFlag;
        if (cache !== undefined && cache === flag) {
            return false;
        }
        this._valueCache[name] = flag;
        return true;
    }
    // Update methods
    _updateMatrix3x3ForUniform(name, matrix) {
        // To match std140, matrix must be realigned
        for(let i = 0; i < 3; i++){
            UniformBuffer._TempBuffer[i * 4] = matrix[i * 3];
            UniformBuffer._TempBuffer[i * 4 + 1] = matrix[i * 3 + 1];
            UniformBuffer._TempBuffer[i * 4 + 2] = matrix[i * 3 + 2];
            UniformBuffer._TempBuffer[i * 4 + 3] = 0.0;
        }
        this.updateUniform(name, UniformBuffer._TempBuffer, 12);
    }
    _updateMatrix3x3ForEffect(name, matrix) {
        this._currentEffect.setMatrix3x3(name, matrix);
    }
    _updateMatrix2x2ForEffect(name, matrix) {
        this._currentEffect.setMatrix2x2(name, matrix);
    }
    _updateMatrix2x2ForUniform(name, matrix) {
        // To match std140, matrix must be realigned
        for(let i = 0; i < 2; i++){
            UniformBuffer._TempBuffer[i * 4] = matrix[i * 2];
            UniformBuffer._TempBuffer[i * 4 + 1] = matrix[i * 2 + 1];
            UniformBuffer._TempBuffer[i * 4 + 2] = 0.0;
            UniformBuffer._TempBuffer[i * 4 + 3] = 0.0;
        }
        this.updateUniform(name, UniformBuffer._TempBuffer, 8);
    }
    _updateFloatForEffect(name, x, suffix = "") {
        this._currentEffect.setFloat(name + suffix, x);
    }
    _updateFloatForUniform(name, x) {
        UniformBuffer._TempBuffer[0] = x;
        this.updateUniform(name, UniformBuffer._TempBuffer, 1);
    }
    _updateFloat2ForEffect(name, x, y, suffix = "") {
        this._currentEffect.setFloat2(name + suffix, x, y);
    }
    _updateFloat2ForUniform(name, x, y) {
        UniformBuffer._TempBuffer[0] = x;
        UniformBuffer._TempBuffer[1] = y;
        this.updateUniform(name, UniformBuffer._TempBuffer, 2);
    }
    _updateFloat3ForEffect(name, x, y, z, suffix = "") {
        this._currentEffect.setFloat3(name + suffix, x, y, z);
    }
    _updateFloat3ForUniform(name, x, y, z) {
        UniformBuffer._TempBuffer[0] = x;
        UniformBuffer._TempBuffer[1] = y;
        UniformBuffer._TempBuffer[2] = z;
        this.updateUniform(name, UniformBuffer._TempBuffer, 3);
    }
    _updateFloat4ForEffect(name, x, y, z, w, suffix = "") {
        this._currentEffect.setFloat4(name + suffix, x, y, z, w);
    }
    _updateFloat4ForUniform(name, x, y, z, w) {
        UniformBuffer._TempBuffer[0] = x;
        UniformBuffer._TempBuffer[1] = y;
        UniformBuffer._TempBuffer[2] = z;
        UniformBuffer._TempBuffer[3] = w;
        this.updateUniform(name, UniformBuffer._TempBuffer, 4);
    }
    _updateFloatArrayForEffect(name, array, suffix = "") {
        switch(this._uniformArraySizes[name]?.strideSize){
            case 2:
                this._currentEffect.setFloatArray2(name + suffix, array);
                break;
            case 3:
                this._currentEffect.setFloatArray3(name + suffix, array);
                break;
            case 4:
                this._currentEffect.setFloatArray4(name + suffix, array);
                break;
            default:
                this._currentEffect.setFloatArray(name + suffix, array);
                break;
        }
    }
    _updateFloatArrayForUniform(name, array) {
        this.updateUniformArray(name, array, array.length);
    }
    _updateArrayForEffect(name, array) {
        this._currentEffect.setArray(name, array);
    }
    _updateArrayForUniform(name, array) {
        this.updateUniformArray(name, array, array.length);
    }
    _updateIntArrayForEffect(name, array) {
        this._currentEffect.setIntArray(name, array);
    }
    _updateIntArrayForUniform(name, array) {
        UniformBuffer._TempBufferInt32View.set(array);
        this.updateUniformArray(name, UniformBuffer._TempBuffer, array.length);
    }
    _updateUIntArrayForEffect(name, array) {
        this._currentEffect.setUIntArray(name, array);
    }
    _updateUIntArrayForUniform(name, array) {
        UniformBuffer._TempBufferUInt32View.set(array);
        this.updateUniformArray(name, UniformBuffer._TempBuffer, array.length);
    }
    _updateMatrixForEffect(name, mat) {
        this._currentEffect.setMatrix(name, mat);
    }
    _updateMatrixForUniform(name, mat) {
        if (this._cacheMatrix(name, mat)) {
            this.updateUniform(name, mat.asArray(), 16);
        }
    }
    _updateMatricesForEffect(name, mat) {
        this._currentEffect.setMatrices(name, mat);
    }
    _updateMatricesForUniform(name, mat) {
        this.updateUniform(name, mat, mat.length);
    }
    _updateVector3ForEffect(name, vector) {
        this._currentEffect.setVector3(name, vector);
    }
    _updateVector3ForUniform(name, vector) {
        UniformBuffer._TempBuffer[0] = vector.x;
        UniformBuffer._TempBuffer[1] = vector.y;
        UniformBuffer._TempBuffer[2] = vector.z;
        this.updateUniform(name, UniformBuffer._TempBuffer, 3);
    }
    _updateVector4ForEffect(name, vector) {
        this._currentEffect.setVector4(name, vector);
    }
    _updateVector4ForUniform(name, vector) {
        UniformBuffer._TempBuffer[0] = vector.x;
        UniformBuffer._TempBuffer[1] = vector.y;
        UniformBuffer._TempBuffer[2] = vector.z;
        UniformBuffer._TempBuffer[3] = vector.w;
        this.updateUniform(name, UniformBuffer._TempBuffer, 4);
    }
    _updateColor3ForEffect(name, color, suffix = "") {
        this._currentEffect.setColor3(name + suffix, color);
    }
    _updateColor3ForUniform(name, color) {
        UniformBuffer._TempBuffer[0] = color.r;
        UniformBuffer._TempBuffer[1] = color.g;
        UniformBuffer._TempBuffer[2] = color.b;
        this.updateUniform(name, UniformBuffer._TempBuffer, 3);
    }
    _updateColor4ForEffect(name, color, alpha, suffix = "") {
        this._currentEffect.setColor4(name + suffix, color, alpha);
    }
    _updateDirectColor4ForEffect(name, color, suffix = "") {
        this._currentEffect.setDirectColor4(name + suffix, color);
    }
    _updateColor4ForUniform(name, color, alpha) {
        UniformBuffer._TempBuffer[0] = color.r;
        UniformBuffer._TempBuffer[1] = color.g;
        UniformBuffer._TempBuffer[2] = color.b;
        UniformBuffer._TempBuffer[3] = alpha;
        this.updateUniform(name, UniformBuffer._TempBuffer, 4);
    }
    _updateDirectColor4ForUniform(name, color) {
        UniformBuffer._TempBuffer[0] = color.r;
        UniformBuffer._TempBuffer[1] = color.g;
        UniformBuffer._TempBuffer[2] = color.b;
        UniformBuffer._TempBuffer[3] = color.a;
        this.updateUniform(name, UniformBuffer._TempBuffer, 4);
    }
    _updateIntForEffect(name, x, suffix = "") {
        this._currentEffect.setInt(name + suffix, x);
    }
    _updateIntForUniform(name, x) {
        UniformBuffer._TempBufferInt32View[0] = x;
        this.updateUniform(name, UniformBuffer._TempBuffer, 1);
    }
    _updateInt2ForEffect(name, x, y, suffix = "") {
        this._currentEffect.setInt2(name + suffix, x, y);
    }
    _updateInt2ForUniform(name, x, y) {
        UniformBuffer._TempBufferInt32View[0] = x;
        UniformBuffer._TempBufferInt32View[1] = y;
        this.updateUniform(name, UniformBuffer._TempBuffer, 2);
    }
    _updateInt3ForEffect(name, x, y, z, suffix = "") {
        this._currentEffect.setInt3(name + suffix, x, y, z);
    }
    _updateInt3ForUniform(name, x, y, z) {
        UniformBuffer._TempBufferInt32View[0] = x;
        UniformBuffer._TempBufferInt32View[1] = y;
        UniformBuffer._TempBufferInt32View[2] = z;
        this.updateUniform(name, UniformBuffer._TempBuffer, 3);
    }
    _updateInt4ForEffect(name, x, y, z, w, suffix = "") {
        this._currentEffect.setInt4(name + suffix, x, y, z, w);
    }
    _updateInt4ForUniform(name, x, y, z, w) {
        UniformBuffer._TempBufferInt32View[0] = x;
        UniformBuffer._TempBufferInt32View[1] = y;
        UniformBuffer._TempBufferInt32View[2] = z;
        UniformBuffer._TempBufferInt32View[3] = w;
        this.updateUniform(name, UniformBuffer._TempBuffer, 4);
    }
    _updateUIntForEffect(name, x, suffix = "") {
        this._currentEffect.setUInt(name + suffix, x);
    }
    _updateUIntForUniform(name, x) {
        UniformBuffer._TempBufferUInt32View[0] = x;
        this.updateUniform(name, UniformBuffer._TempBuffer, 1);
    }
    _updateUInt2ForEffect(name, x, y, suffix = "") {
        this._currentEffect.setUInt2(name + suffix, x, y);
    }
    _updateUInt2ForUniform(name, x, y) {
        UniformBuffer._TempBufferUInt32View[0] = x;
        UniformBuffer._TempBufferUInt32View[1] = y;
        this.updateUniform(name, UniformBuffer._TempBuffer, 2);
    }
    _updateUInt3ForEffect(name, x, y, z, suffix = "") {
        this._currentEffect.setUInt3(name + suffix, x, y, z);
    }
    _updateUInt3ForUniform(name, x, y, z) {
        UniformBuffer._TempBufferUInt32View[0] = x;
        UniformBuffer._TempBufferUInt32View[1] = y;
        UniformBuffer._TempBufferUInt32View[2] = z;
        this.updateUniform(name, UniformBuffer._TempBuffer, 3);
    }
    _updateUInt4ForEffect(name, x, y, z, w, suffix = "") {
        this._currentEffect.setUInt4(name + suffix, x, y, z, w);
    }
    _updateUInt4ForUniform(name, x, y, z, w) {
        UniformBuffer._TempBufferUInt32View[0] = x;
        UniformBuffer._TempBufferUInt32View[1] = y;
        UniformBuffer._TempBufferUInt32View[2] = z;
        UniformBuffer._TempBufferUInt32View[3] = w;
        this.updateUniform(name, UniformBuffer._TempBuffer, 4);
    }
    /**
     * Sets a sampler uniform on the effect.
     * @param name Define the name of the sampler.
     * @param texture Define the texture to set in the sampler
     */ setTexture(name, texture) {
        this._currentEffect.setTexture(name, texture);
    }
    /**
     * Sets an array of sampler uniforms on the effect.
     * @param name Define the name of uniform.
     * @param textures Define the textures to set in the array of samplers
     */ setTextureArray(name, textures) {
        this._currentEffect.setTextureArray(name, textures);
    }
    /**
     * Sets a sampler uniform on the effect.
     * @param name Define the name of the sampler.
     * @param texture Define the (internal) texture to set in the sampler
     */ bindTexture(name, texture) {
        this._currentEffect._bindTexture(name, texture);
    }
    /**
     * Directly updates the value of the uniform in the cache AND on the GPU.
     * @param uniformName Define the name of the uniform, as used in the uniform block in the shader.
     * @param data Define the flattened data
     */ updateUniformDirectly(uniformName, data) {
        this.updateUniform(uniformName, data, data.length);
        this.update();
    }
    /**
     * Associates an effect to this uniform buffer
     * @param effect Define the effect to associate the buffer to
     * @param name Name of the uniform block in the shader.
     */ bindToEffect(effect, name) {
        this._currentEffect = effect;
        this._currentEffectName = name;
    }
    /**
     * Binds the current (GPU) buffer to the effect
     */ bindUniformBuffer() {
        if (!this._noUBO && this._buffer && this._currentEffect) {
            this._currentEffect.bindUniformBuffer(this._buffer, this._currentEffectName);
        }
    }
    /**
     * Dissociates the current effect from this uniform buffer
     */ unbindEffect() {
        this._currentEffect = undefined;
        this._currentEffectName = undefined;
    }
    /**
     * Sets the current state of the class (_bufferIndex, _buffer) to point to the data buffer passed in parameter if this buffer is one of the buffers handled by the class (meaning if it can be found in the _buffers array)
     * This method is meant to be able to update a buffer at any time: just call setDataBuffer to set the class in the right state, call some updateXXX methods and then call udpate() => that will update the GPU buffer on the graphic card
     * @param dataBuffer buffer to look for
     * @returns true if the buffer has been found and the class internal state points to it, else false
     */ setDataBuffer(dataBuffer) {
        if (!this._buffers) {
            return this._buffer === dataBuffer;
        }
        for(let b = 0; b < this._buffers.length; ++b){
            const buffer = this._buffers[b];
            if (buffer[0] === dataBuffer) {
                this._bufferIndex = b;
                this._buffer = dataBuffer;
                this._createBufferOnWrite = false;
                this._currentEffect = undefined;
                // Note that if _buffers.length == 1, we don't copy _bufferData into _buffers[_bufferIndex][1] (see the update() method), and _bufferData already contains the right data
                if (this._buffers.length > 1 && this._buffers[b][1]) {
                    this._bufferData.set(this._buffers[b][1]);
                }
                this._valueCache = {};
                // The following line prevents the current buffer (_buffer / _bufferIndex) from being updated during subsequent calls to updateXXX() due to a call to _checkNewFrame()
                // If we called setDataBuffer, it means that we want to update the buffer we just defined and not another one (_checkNewFrame() can modify the current buffer).
                this._currentFrameId = this._engine.frameId;
                return true;
            }
        }
        return false;
    }
    /**
     * Checks if the uniform buffer has a uniform with the given name.
     * @param name Name of the uniform to check
     * @returns True if the uniform exists, false otherwise.
     */ has(name) {
        return this._uniformLocations[name] !== undefined;
    }
    /**
     * Disposes the uniform buffer.
     */ dispose() {
        if (this._noUBO) {
            return;
        }
        const uniformBuffers = this._engine._uniformBuffers;
        const index = uniformBuffers.indexOf(this);
        if (index !== -1) {
            uniformBuffers[index] = uniformBuffers[uniformBuffers.length - 1];
            uniformBuffers.pop();
        }
        if (this._trackUBOsInFrame && this._buffers) {
            for(let i = 0; i < this._buffers.length; ++i){
                const buffer = this._buffers[i][0];
                this._engine._releaseBuffer(buffer);
            }
        } else if (this._buffer && this._engine._releaseBuffer(this._buffer)) {
            this._buffer = null;
        }
    }
}
/** @internal */ UniformBuffer._UpdatedUbosInFrame = {};
// Pool for avoiding memory leaks
UniformBuffer._MAX_UNIFORM_SIZE = 256;
UniformBuffer._TempBuffer = new Float32Array(UniformBuffer._MAX_UNIFORM_SIZE);
UniformBuffer._TempBufferInt32View = new Int32Array(UniformBuffer._TempBuffer.buffer);
UniformBuffer._TempBufferUInt32View = new Uint32Array(UniformBuffer._TempBuffer.buffer); //# sourceMappingURL=uniformBuffer.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/floatingOriginMatrixOverrides.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FloatingOriginCurrentScene",
    ()=>FloatingOriginCurrentScene,
    "GetFullOffsetViewProjectionToRef",
    ()=>GetFullOffsetViewProjectionToRef,
    "GetOffsetTransformMatrices",
    ()=>GetOffsetTransformMatrices,
    "OffsetClipPlaneToRef",
    ()=>OffsetClipPlaneToRef,
    "OffsetViewToRef",
    ()=>OffsetViewToRef,
    "OverrideMatrixFunctions",
    ()=>OverrideMatrixFunctions,
    "ResetMatrixFunctions",
    ()=>ResetMatrixFunctions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$effect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/effect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$ThinMaths$2f$thinMath$2e$matrix$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/ThinMaths/thinMath.matrix.functions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$uniformBuffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/uniformBuffer.js [app-ssr] (ecmascript)");
;
;
;
;
const TempFinalMat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"]();
const TempMat1 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"]();
const TempMat2 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"]();
const FloatingOriginCurrentScene = {
    getScene: ()=>undefined,
    eyeAtCamera: true
};
function OffsetWorldToRef(offset, world, ref) {
    const refArray = ref.asArray();
    const worldArray = world.asArray();
    for(let i = 0; i < 16; i++){
        refArray[i] = worldArray[i];
    }
    refArray[12] -= offset.x;
    refArray[13] -= offset.y;
    refArray[14] -= offset.z;
    ref.markAsUpdated();
    return ref;
}
function GetFullOffsetView(offset, viewMatrix, ref) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$ThinMaths$2f$thinMath$2e$matrix$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvertMatrixToRef"])(viewMatrix, TempMat1); // TempMat1 = light world matrix (inverse of view)
    OffsetWorldToRef(offset, TempMat1, TempMat2); // TempMat2 = offset light world matrix
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$ThinMaths$2f$thinMath$2e$matrix$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvertMatrixToRef"])(TempMat2, ref); // TempMat1 = offset view matrix
    return ref;
}
function OffsetViewToRef(offset, view, ref) {
    // When eye is not at camera, we cannot assume the translation of view matrix is at origin, so we perform full offset calculation
    if (!FloatingOriginCurrentScene.eyeAtCamera) {
        return GetFullOffsetView(offset, view, ref);
    }
    const refArray = ref.asArray();
    const viewArray = view.asArray();
    for(let i = 0; i < 16; i++){
        refArray[i] = viewArray[i];
    }
    refArray[12] = 0;
    refArray[13] = 0;
    refArray[14] = 0;
    ref.markAsUpdated();
    return ref;
}
function OffsetViewProjectionToRef(offset, view, projection, ref) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$ThinMaths$2f$thinMath$2e$matrix$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MultiplyMatricesToRef"])(OffsetViewToRef(offset, view, ref), projection, ref);
    return ref;
}
function OffsetClipPlaneToRef(offset, plane, ref) {
    // Original clipplane is using equation normal.dot(p) + d = 0
    // Assume we have p' = p - offset, that means normal.dot(p') + d' = 0
    // So to get the offset plane,
    // normal.dot(p' + offset) + d = 0
    // normal.dot(p') + normal.dot(offset) + d = 0
    // -d' + normal.dot(offset) + d = 0
    // d' = d + normal.dot(offset)
    ref.normal.copyFrom(plane.normal);
    ref.d = plane.d + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Dot(plane.normal, offset);
    return ref;
}
function GetOffsetTransformMatrices(offset, viewMatrices, projectionMatrices, length, resultArray) {
    for(let cascadeIndex = 0; cascadeIndex < length; ++cascadeIndex){
        GetFullOffsetViewProjectionToRef(offset, viewMatrices[cascadeIndex], projectionMatrices[cascadeIndex], TempMat1);
        TempMat1.copyToArray(resultArray, cascadeIndex * 16);
    }
    return resultArray;
}
function OffsetWorldViewToRef(offset, worldView, view, ref) {
    // ( world * view ) * inverse ( view ) = world
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$ThinMaths$2f$thinMath$2e$matrix$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvertMatrixToRef"])(view, TempMat1); // TempMat1 = inverseView
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$ThinMaths$2f$thinMath$2e$matrix$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MultiplyMatricesToRef"])(worldView, TempMat1, TempMat2); // TempMat2 = world, TempMat1 can be reused
    // ( offsetWorld * offsetView ) = offsetWorldView
    OffsetWorldToRef(offset, TempMat2, TempMat1); // TempMat1 = offsetWorld
    OffsetViewToRef(offset, view, TempMat2); // TempMat2 = offsetView
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$ThinMaths$2f$thinMath$2e$matrix$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MultiplyMatricesToRef"])(TempMat1, TempMat2, ref);
    return ref;
}
function GetFullOffsetViewProjectionToRef(offset, viewMatrix, projectionMatrix, ref) {
    GetFullOffsetView(offset, viewMatrix, TempMat2);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$ThinMaths$2f$thinMath$2e$matrix$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MultiplyMatricesToRef"])(TempMat2, projectionMatrix, ref);
    return ref;
}
function OffsetWorldViewProjectionToRef(offset, worldViewProjection, viewProjection, view, projection, ref) {
    // ( world * view * projection ) * inverse(projection) * inverse(view) = world
    // ( world * view * projection ) * inverse (view * projection) = world
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$ThinMaths$2f$thinMath$2e$matrix$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InvertMatrixToRef"])(viewProjection, TempMat1); // TempMat1 = inverse (view * projection)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$ThinMaths$2f$thinMath$2e$matrix$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MultiplyMatricesToRef"])(worldViewProjection, TempMat1, TempMat2); // TempMat2 = world, TempMat1 can be reused
    // ( offsetWorld * offsetViewProjection)  = offsetWorldViewProjection
    OffsetWorldToRef(offset, TempMat2, TempMat1); // TempMat1 = offsetWorld
    OffsetViewProjectionToRef(offset, view, projection, TempMat2); // TempMat2 = offsetViewProjection
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$ThinMaths$2f$thinMath$2e$matrix$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MultiplyMatricesToRef"])(TempMat1, TempMat2, ref);
    return ref;
}
function GetOffsetMatrix(uniformName, mat) {
    const scene = FloatingOriginCurrentScene.getScene();
    // Early out for scenes that don't have floatingOriginMode enabled
    // Effect.setMatrix will call pipelineContext.setMatrix. In WebGPU, this will in turn call ubo.updateMatrix. To avoid double offset, early out if mat is TempFinalMat
    if (!scene || TempFinalMat === mat) {
        return mat;
    }
    TempFinalMat.updateFlag = mat.updateFlag;
    const offset = scene.floatingOriginOffset;
    switch(uniformName){
        case "world":
            return OffsetWorldToRef(offset, mat, TempFinalMat);
        case "view":
            return OffsetViewToRef(offset, mat, TempFinalMat);
        case "worldView":
            return OffsetWorldViewToRef(offset, mat, scene.getViewMatrix(), TempFinalMat);
        case "viewProjection":
            return OffsetViewProjectionToRef(offset, scene.getViewMatrix(), scene.getProjectionMatrix(), TempFinalMat);
        case "worldViewProjection":
            return OffsetWorldViewProjectionToRef(offset, mat, scene.getTransformMatrix(), scene.getViewMatrix(), scene.getProjectionMatrix(), TempFinalMat);
        default:
            // Node material blocks uniforms are formatted u_BlockName, with trailing numbers if there are multiple blocks of the same name
            // Check u_ first so that we can early out for non-node material uniforms
            if (uniformName.startsWith("u_")) {
                const lowercaseUniformName = uniformName.toLowerCase();
                if (lowercaseUniformName.startsWith("u_worldviewprojection")) {
                    return OffsetWorldViewProjectionToRef(offset, mat, scene.getTransformMatrix(), scene.getViewMatrix(), scene.getProjectionMatrix(), TempFinalMat);
                }
                if (lowercaseUniformName.startsWith("u_viewprojection")) {
                    return OffsetViewProjectionToRef(offset, scene.getViewMatrix(), scene.getProjectionMatrix(), TempFinalMat);
                }
                if (lowercaseUniformName.startsWith("u_worldview")) {
                    return OffsetWorldViewToRef(offset, mat, scene.getViewMatrix(), TempFinalMat);
                }
                if (lowercaseUniformName.startsWith("u_world")) {
                    return OffsetWorldToRef(offset, mat, TempFinalMat);
                }
                if (lowercaseUniformName.startsWith("u_view")) {
                    return OffsetViewToRef(offset, mat, TempFinalMat);
                }
            }
            return mat;
    }
}
// ---- Overriding the prototypes of effect and uniformBuffer's setMatrix functions ----
const UniformBufferInternal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$uniformBuffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UniformBuffer"];
const EffectInternal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$effect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Effect"];
const OriginalUpdateMatrixForUniform = UniformBufferInternal.prototype._updateMatrixForUniform;
const OriginalSetMatrix = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$effect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Effect"].prototype.setMatrix;
function ResetMatrixFunctions() {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$effect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Effect"].prototype.setMatrix = OriginalSetMatrix;
    EffectInternal._setMatrixOverride = undefined;
    UniformBufferInternal.prototype._updateMatrixForUniform = OriginalUpdateMatrixForUniform;
    UniformBufferInternal.prototype._updateMatrixForUniformOverride = undefined;
}
function OverrideMatrixFunctions() {
    EffectInternal.prototype._setMatrixOverride = OriginalSetMatrix;
    EffectInternal.prototype.setMatrix = function(uniformName, matrix) {
        this._setMatrixOverride(uniformName, GetOffsetMatrix(uniformName, matrix));
        return this;
    };
    UniformBufferInternal.prototype._updateMatrixForUniformOverride = OriginalUpdateMatrixForUniform;
    UniformBufferInternal.prototype._updateMatrixForUniform = function(uniformName, matrix) {
        this._updateMatrixForUniformOverride(uniformName, GetOffsetMatrix(uniformName, matrix));
    };
} //# sourceMappingURL=floatingOriginMatrixOverrides.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/drawWrapper.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DrawWrapper",
    ()=>DrawWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$timingTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/timingTools.js [app-ssr] (ecmascript)");
;
class DrawWrapper {
    /**
     * Retrieves the effect from a DrawWrapper or Effect instance.
     * @param effect The effect or DrawWrapper instance to retrieve the effect from.
     * @returns The effect associated with the given instance, or null if not found.
     */ static GetEffect(effect) {
        return effect.getPipelineContext === undefined ? effect.effect : effect;
    }
    /**
     * Creates a new DrawWrapper instance.
     * Note that drawContext is always created (but may end up being undefined if the engine doesn't need draw contexts), but materialContext is optional.
     * @param engine The engine to create the draw wrapper for.
     * @param createMaterialContext If true, creates a material context for this wrapper (default is true).
     */ constructor(engine, createMaterialContext = true){
        /**
         * @internal
         * Specifies if the effect was previously ready
         */ this._wasPreviouslyReady = false;
        /**
         * @internal
         * Forces the code from bindForSubMesh to be fully run the next time it is called
         */ this._forceRebindOnNextCall = true;
        /**
         * @internal
         * Specifies if the effect was previously using instances
         */ this._wasPreviouslyUsingInstances = null;
        this.effect = null;
        this.defines = null;
        this.drawContext = engine.createDrawContext();
        if (createMaterialContext) {
            this.materialContext = engine.createMaterialContext();
        }
    }
    /**
     * Sets the effect and its associated defines for this wrapper.
     * @param effect The effect to associate with this wrapper.
     * @param defines The defines to associate with this wrapper.
     * @param resetContext If true, resets the draw context (default is true).
     */ setEffect(effect, defines, resetContext = true) {
        this.effect = effect;
        if (defines !== undefined) {
            this.defines = defines;
        }
        if (resetContext) {
            this.drawContext?.reset();
        }
    }
    /**
     * Disposes the effect wrapper and its resources
     * @param immediate if the effect should be disposed immediately or on the next frame.
     * If dispose() is not called during a scene or engine dispose, we want to delay the dispose of the underlying effect. Mostly to give a chance to user code to reuse the effect in some way.
     */ dispose(immediate = false) {
        if (this.effect) {
            const effect = this.effect;
            if (immediate) {
                effect.dispose();
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$timingTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TimingTools"].SetImmediate(()=>{
                    effect.getEngine().onEndFrameObservable.addOnce(()=>{
                        effect.dispose();
                    });
                });
            }
            this.effect = null;
        }
        this.drawContext?.dispose();
    }
} //# sourceMappingURL=drawWrapper.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/effectRenderer.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EffectRenderer",
    ()=>EffectRenderer,
    "EffectWrapper",
    ()=>EffectWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Buffers/buffer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$viewport$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.viewport.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$effect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/effect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$drawWrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/drawWrapper.js [app-ssr] (ecmascript)");
// Prevents ES6 issue if not imported.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$postprocess$2e$vertex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/postprocess.vertex.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
// Fullscreen quad buffers by default.
const DefaultOptions = {
    positions: [
        1,
        1,
        -1,
        1,
        -1,
        -1,
        1,
        -1
    ],
    indices: [
        0,
        1,
        2,
        0,
        2,
        3
    ]
};
class EffectRenderer {
    /**
     * Creates an effect renderer
     * @param engine the engine to use for rendering
     * @param options defines the options of the effect renderer
     */ constructor(engine, options = DefaultOptions){
        this._fullscreenViewport = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$viewport$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Viewport"](0, 0, 1, 1);
        const positions = options.positions ?? DefaultOptions.positions;
        const indices = options.indices ?? DefaultOptions.indices;
        this.engine = engine;
        this._vertexBuffers = {
            // Note, always assumes stride of 2.
            [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].PositionKind]: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"](engine, positions, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].PositionKind, false, false, 2)
        };
        this._indexBuffer = engine.createIndexBuffer(indices);
        this._indexBufferLength = indices.length;
        this._onContextRestoredObserver = engine.onContextRestoredObservable.add(()=>{
            this._indexBuffer = engine.createIndexBuffer(indices);
            for(const key in this._vertexBuffers){
                const vertexBuffer = this._vertexBuffers[key];
                vertexBuffer._rebuild();
            }
        });
    }
    /**
     * Sets the current viewport in normalized coordinates 0-1
     * @param viewport Defines the viewport to set (defaults to 0 0 1 1)
     */ setViewport(viewport = this._fullscreenViewport) {
        this.engine.setViewport(viewport);
    }
    /**
     * Binds the embedded attributes buffer to the effect.
     * @param effect Defines the effect to bind the attributes for
     */ bindBuffers(effect) {
        this.engine.bindBuffers(this._vertexBuffers, this._indexBuffer, effect);
    }
    /**
     * Sets the current effect wrapper to use during draw.
     * The effect needs to be ready before calling this api.
     * This also sets the default full screen position attribute.
     * @param effectWrapper Defines the effect to draw with
     * @param depthTest Whether to enable depth testing (default: false)
     * @param stencilTest Whether to enable stencil testing (default: false)
     */ applyEffectWrapper(effectWrapper, depthTest = false, stencilTest = false) {
        this.engine.setState(true);
        this.engine.depthCullingState.depthTest = depthTest;
        this.engine.stencilState.stencilTest = stencilTest;
        this.engine.enableEffect(effectWrapper.drawWrapper);
        this.bindBuffers(effectWrapper.effect);
        effectWrapper.onApplyObservable.notifyObservers({});
    }
    /**
     * Saves engine states
     */ saveStates() {
        this._savedStateDepthTest = this.engine.depthCullingState.depthTest;
        this._savedStateStencilTest = this.engine.stencilState.stencilTest;
    }
    /**
     * Restores engine states
     */ restoreStates() {
        this.engine.depthCullingState.depthTest = this._savedStateDepthTest;
        this.engine.stencilState.stencilTest = this._savedStateStencilTest;
    }
    /**
     * Draws a full screen quad.
     */ draw() {
        this.engine.drawElementsType(0, 0, this._indexBufferLength);
    }
    _isRenderTargetTexture(texture) {
        return texture.renderTarget !== undefined;
    }
    /**
     * renders one or more effects to a specified texture
     * @param effectWrapper the effect to renderer
     * @param outputTexture texture to draw to, if null it will render to the currently bound frame buffer
     */ render(effectWrapper, outputTexture = null) {
        // Ensure effect is ready
        if (!effectWrapper.effect.isReady()) {
            return;
        }
        this.saveStates();
        // Reset state
        this.setViewport();
        const out = outputTexture === null ? null : this._isRenderTargetTexture(outputTexture) ? outputTexture.renderTarget : outputTexture;
        if (out) {
            this.engine.bindFramebuffer(out);
        }
        this.applyEffectWrapper(effectWrapper);
        this.draw();
        if (out) {
            this.engine.unBindFramebuffer(out);
        }
        this.restoreStates();
    }
    /**
     * Disposes of the effect renderer
     */ dispose() {
        const vertexBuffer = this._vertexBuffers[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].PositionKind];
        if (vertexBuffer) {
            vertexBuffer.dispose();
            delete this._vertexBuffers[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].PositionKind];
        }
        if (this._indexBuffer) {
            this.engine._releaseBuffer(this._indexBuffer);
        }
        if (this._onContextRestoredObserver) {
            this.engine.onContextRestoredObservable.remove(this._onContextRestoredObserver);
            this._onContextRestoredObserver = null;
        }
    }
}
class EffectWrapper {
    /**
     * Registers a shader code processing with an effect wrapper name.
     * @param effectWrapperName name of the effect wrapper. Use null for the fallback shader code processing. This is the shader code processing that will be used in case no specific shader code processing has been associated to an effect wrapper name
     * @param customShaderCodeProcessing shader code processing to associate to the effect wrapper name
     */ static RegisterShaderCodeProcessing(effectWrapperName, customShaderCodeProcessing) {
        if (!customShaderCodeProcessing) {
            delete EffectWrapper._CustomShaderCodeProcessing[effectWrapperName ?? ""];
            return;
        }
        EffectWrapper._CustomShaderCodeProcessing[effectWrapperName ?? ""] = customShaderCodeProcessing;
    }
    static _GetShaderCodeProcessing(effectWrapperName) {
        return EffectWrapper._CustomShaderCodeProcessing[effectWrapperName] ?? EffectWrapper._CustomShaderCodeProcessing[""];
    }
    /**
     * Gets or sets the name of the effect wrapper
     */ get name() {
        return this.options.name;
    }
    set name(value) {
        this.options.name = value;
    }
    /**
     * Get a value indicating if the effect is ready to be used
     * @returns true if the post-process is ready (shader is compiled)
     */ isReady() {
        return this._drawWrapper.effect?.isReady() ?? false;
    }
    /**
     * Get the draw wrapper associated with the effect wrapper
     * @returns the draw wrapper associated with the effect wrapper
     */ get drawWrapper() {
        return this._drawWrapper;
    }
    /**
     * The underlying effect
     */ get effect() {
        return this._drawWrapper.effect;
    }
    set effect(effect) {
        this._drawWrapper.effect = effect;
    }
    /**
     * Creates an effect to be rendered
     * @param creationOptions options to create the effect
     */ constructor(creationOptions){
        /**
         * Type of alpha mode to use when applying the effect (default: Engine.ALPHA_DISABLE). Used only if useAsPostProcess is true.
         */ this.alphaMode = 0;
        /**
         * Executed when the effect is created
         * @returns effect that was created for this effect wrapper
         */ this.onEffectCreatedObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"](undefined, true);
        /**
         * Event that is fired (only when the EffectWrapper is used with an EffectRenderer) right before the effect is drawn (should be used to update uniforms)
         */ this.onApplyObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        this._shadersLoaded = false;
        /** @internal */ this._webGPUReady = false;
        this._importPromises = [];
        this.options = {
            ...creationOptions,
            name: creationOptions.name || "effectWrapper",
            engine: creationOptions.engine,
            uniforms: creationOptions.uniforms || creationOptions.uniformNames || [],
            uniformNames: undefined,
            samplers: creationOptions.samplers || creationOptions.samplerNames || [],
            samplerNames: undefined,
            attributeNames: creationOptions.attributeNames || [
                "position"
            ],
            uniformBuffers: creationOptions.uniformBuffers || [],
            defines: creationOptions.defines || "",
            useShaderStore: creationOptions.useShaderStore || false,
            vertexUrl: creationOptions.vertexUrl || creationOptions.vertexShader || "postprocess",
            vertexShader: undefined,
            fragmentShader: creationOptions.fragmentShader || "pass",
            indexParameters: creationOptions.indexParameters,
            blockCompilation: creationOptions.blockCompilation || false,
            shaderLanguage: creationOptions.shaderLanguage || 0 /* ShaderLanguage.GLSL */ ,
            onCompiled: creationOptions.onCompiled || undefined,
            extraInitializations: creationOptions.extraInitializations || undefined,
            extraInitializationsAsync: creationOptions.extraInitializationsAsync || undefined,
            useAsPostProcess: creationOptions.useAsPostProcess ?? false,
            allowEmptySourceTexture: creationOptions.allowEmptySourceTexture ?? false
        };
        this.options.uniformNames = this.options.uniforms;
        this.options.samplerNames = this.options.samplers;
        this.options.vertexShader = this.options.vertexUrl;
        if (this.options.useAsPostProcess) {
            if (!this.options.allowEmptySourceTexture && this.options.samplers.indexOf("textureSampler") === -1) {
                this.options.samplers.push("textureSampler");
            }
            if (this.options.uniforms.indexOf("scale") === -1) {
                this.options.uniforms.push("scale");
            }
        }
        if (creationOptions.vertexUrl || creationOptions.vertexShader) {
            this._shaderPath = {
                vertexSource: this.options.vertexShader
            };
        } else {
            if (!this.options.useAsPostProcess) {
                this.options.uniforms.push("scale");
                this.onApplyObservable.add(()=>{
                    this.effect.setFloat2("scale", 1, 1);
                });
            }
            this._shaderPath = {
                vertex: this.options.vertexShader
            };
        }
        this._shaderPath.fragmentSource = this.options.fragmentShader;
        this._shaderPath.spectorName = this.options.name;
        if (this.options.useShaderStore) {
            this._shaderPath.fragment = this._shaderPath.fragmentSource;
            if (!this._shaderPath.vertex) {
                this._shaderPath.vertex = this._shaderPath.vertexSource;
            }
            delete this._shaderPath.fragmentSource;
            delete this._shaderPath.vertexSource;
        }
        this.onApplyObservable.add(()=>{
            this.bind();
        });
        if (!this.options.useShaderStore) {
            this._onContextRestoredObserver = this.options.engine.onContextRestoredObservable.add(()=>{
                this.effect._pipelineContext = null; // because _prepareEffect will try to dispose this pipeline before recreating it and that would lead to webgl errors
                this.effect._prepareEffect();
            });
        }
        this._drawWrapper = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$drawWrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DrawWrapper"](this.options.engine);
        this._webGPUReady = this.options.shaderLanguage === 1 /* ShaderLanguage.WGSL */ ;
        const defines = Array.isArray(this.options.defines) ? this.options.defines.join("\n") : this.options.defines;
        this._postConstructor(this.options.blockCompilation, defines, this.options.extraInitializations);
    }
    _gatherImports(useWebGPU = false, list) {
        if (!this.options.useAsPostProcess) {
            return;
        }
        // this._webGPUReady is used to detect when an effect wrapper is intended to be used with WebGPU
        if (useWebGPU && this._webGPUReady) {
            list.push(Promise.all([
                __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/postprocess.vertex.js [app-ssr] (ecmascript, async loader)")
            ]));
        } else {
            list.push(Promise.all([
                __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/postprocess.vertex.js [app-ssr] (ecmascript, async loader)")
            ]));
        }
    }
    /** @internal */ _postConstructor(blockCompilation, defines = null, extraInitializations, importPromises) {
        this._importPromises.length = 0;
        if (importPromises) {
            this._importPromises.push(...importPromises);
        }
        const useWebGPU = this.options.engine.isWebGPU && !EffectWrapper.ForceGLSL;
        this._gatherImports(useWebGPU, this._importPromises);
        if (extraInitializations !== undefined) {
            extraInitializations(useWebGPU, this._importPromises);
        }
        if (useWebGPU && this._webGPUReady) {
            this.options.shaderLanguage = 1 /* ShaderLanguage.WGSL */ ;
        }
        if (!blockCompilation) {
            this.updateEffect(defines);
        }
    }
    /**
     * Updates the effect with the current effect wrapper compile time values and recompiles the shader.
     * @param defines Define statements that should be added at the beginning of the shader. (default: null)
     * @param uniforms Set of uniform variables that will be passed to the shader. (default: null)
     * @param samplers Set of Texture2D variables that will be passed to the shader. (default: null)
     * @param indexParameters The index parameters to be used for babylons include syntax "#include<kernelBlurVaryingDeclaration>[0..varyingCount]". (default: undefined) See usage in babylon.blurPostProcess.ts and kernelBlur.vertex.fx
     * @param onCompiled Called when the shader has been compiled.
     * @param onError Called if there is an error when compiling a shader.
     * @param vertexUrl The url of the vertex shader to be used (default: the one given at construction time)
     * @param fragmentUrl The url of the fragment shader to be used (default: the one given at construction time)
     */ updateEffect(defines = null, uniforms = null, samplers = null, indexParameters, onCompiled, onError, vertexUrl, fragmentUrl) {
        const customShaderCodeProcessing = EffectWrapper._GetShaderCodeProcessing(this.name);
        if (customShaderCodeProcessing?.defineCustomBindings) {
            const newUniforms = uniforms?.slice() ?? [];
            newUniforms.push(...this.options.uniforms);
            const newSamplers = samplers?.slice() ?? [];
            newSamplers.push(...this.options.samplers);
            defines = customShaderCodeProcessing.defineCustomBindings(this.name, defines, newUniforms, newSamplers);
            uniforms = newUniforms;
            samplers = newSamplers;
        }
        this.options.defines = defines || "";
        const waitImportsLoaded = this._shadersLoaded || this._importPromises.length === 0 ? undefined : async ()=>{
            await Promise.all(this._importPromises);
            this._shadersLoaded = true;
        };
        let extraInitializationsAsync;
        if (this.options.extraInitializationsAsync) {
            extraInitializationsAsync = async ()=>{
                // eslint-disable-next-line @typescript-eslint/no-floating-promises
                waitImportsLoaded?.();
                await this.options.extraInitializationsAsync();
            };
        } else {
            extraInitializationsAsync = waitImportsLoaded;
        }
        if (this.options.useShaderStore) {
            this._drawWrapper.effect = this.options.engine.createEffect({
                vertex: vertexUrl ?? this._shaderPath.vertex,
                fragment: fragmentUrl ?? this._shaderPath.fragment
            }, {
                attributes: this.options.attributeNames,
                uniformsNames: uniforms || this.options.uniforms,
                uniformBuffersNames: this.options.uniformBuffers,
                samplers: samplers || this.options.samplers,
                defines: defines !== null ? defines : "",
                fallbacks: null,
                onCompiled: onCompiled ?? this.options.onCompiled,
                onError: onError ?? null,
                indexParameters: indexParameters || this.options.indexParameters,
                processCodeAfterIncludes: customShaderCodeProcessing?.processCodeAfterIncludes ? (shaderType, code)=>customShaderCodeProcessing.processCodeAfterIncludes(this.name, shaderType, code) : null,
                processFinalCode: customShaderCodeProcessing?.processFinalCode ? (shaderType, code)=>customShaderCodeProcessing.processFinalCode(this.name, shaderType, code) : null,
                shaderLanguage: this.options.shaderLanguage,
                extraInitializationsAsync
            }, this.options.engine);
        } else {
            this._drawWrapper.effect = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$effect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Effect"](this._shaderPath, this.options.attributeNames, uniforms || this.options.uniforms, samplers || this.options.samplerNames, this.options.engine, defines, undefined, onCompiled || this.options.onCompiled, undefined, undefined, undefined, this.options.shaderLanguage, extraInitializationsAsync);
        }
        this.onEffectCreatedObservable.notifyObservers(this._drawWrapper.effect);
    }
    /**
     * Binds the data to the effect.
     * @param noDefaultBindings if true, the default bindings (scale and alpha mode) will not be set.
     */ bind(noDefaultBindings = false) {
        if (this.options.useAsPostProcess && !noDefaultBindings) {
            this.options.engine.setAlphaMode(this.alphaMode);
            this.drawWrapper.effect.setFloat2("scale", 1, 1);
        }
        EffectWrapper._GetShaderCodeProcessing(this.name)?.bindCustomBindings?.(this.name, this._drawWrapper.effect);
    }
    /**
     * Disposes of the effect wrapper
     * @param _ignored kept for backward compatibility
     */ dispose(_ignored = false) {
        if (this._onContextRestoredObserver) {
            this.effect.getEngine().onContextRestoredObservable.remove(this._onContextRestoredObserver);
            this._onContextRestoredObserver = null;
        }
        this.onEffectCreatedObservable.clear();
        this._drawWrapper.dispose(true);
    }
}
/**
 * Force code to compile to glsl even on WebGPU engines.
 * False by default. This is mostly meant for backward compatibility.
 */ EffectWrapper.ForceGLSL = false;
EffectWrapper._CustomShaderCodeProcessing = {}; //# sourceMappingURL=effectRenderer.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/drawWrapper.functions.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Detect if the effect is a DrawWrapper
 * @param effect defines the entity to test
 * @returns if the entity is a DrawWrapper
 */ __turbopack_context__.s([
    "IsWrapper",
    ()=>IsWrapper
]);
function IsWrapper(effect) {
    return effect.getPipelineContext === undefined;
} //# sourceMappingURL=drawWrapper.functions.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/effectFallbacks.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * EffectFallbacks can be used to add fallbacks (properties to disable) to certain properties when desired to improve performance.
 * (Eg. Start at high quality with reflection and fog, if fps is low, remove reflection, if still low remove fog)
 */ __turbopack_context__.s([
    "EffectFallbacks",
    ()=>EffectFallbacks
]);
class EffectFallbacks {
    constructor(){
        this._defines = {};
        this._currentRank = 32;
        this._maxRank = -1;
        this._mesh = null;
    }
    /**
     * Removes the fallback from the bound mesh.
     */ unBindMesh() {
        this._mesh = null;
    }
    /**
     * Adds a fallback on the specified property.
     * @param rank The rank of the fallback (Lower ranks will be fallbacked to first)
     * @param define The name of the define in the shader
     */ addFallback(rank, define) {
        if (!this._defines[rank]) {
            if (rank < this._currentRank) {
                this._currentRank = rank;
            }
            if (rank > this._maxRank) {
                this._maxRank = rank;
            }
            this._defines[rank] = new Array();
        }
        this._defines[rank].push(define);
    }
    /**
     * Sets the mesh to use CPU skinning when needing to fallback.
     * @param rank The rank of the fallback (Lower ranks will be fallbacked to first)
     * @param mesh The mesh to use the fallbacks.
     */ addCPUSkinningFallback(rank, mesh) {
        this._mesh = mesh;
        if (rank < this._currentRank) {
            this._currentRank = rank;
        }
        if (rank > this._maxRank) {
            this._maxRank = rank;
        }
    }
    /**
     * Checks to see if more fallbacks are still available.
     */ get hasMoreFallbacks() {
        return this._currentRank <= this._maxRank;
    }
    /**
     * Removes the defines that should be removed when falling back.
     * @param currentDefines defines the current define statements for the shader.
     * @param effect defines the current effect we try to compile
     * @returns The resulting defines with defines of the current rank removed.
     */ reduce(currentDefines, effect) {
        // First we try to switch to CPU skinning
        if (this._mesh && this._mesh.computeBonesUsingShaders && this._mesh.numBoneInfluencers > 0) {
            this._mesh.computeBonesUsingShaders = false;
            currentDefines = currentDefines.replace("#define NUM_BONE_INFLUENCERS " + this._mesh.numBoneInfluencers, "#define NUM_BONE_INFLUENCERS 0");
            effect._bonesComputationForcedToCPU = true;
            const scene = this._mesh.getScene();
            for(let index = 0; index < scene.meshes.length; index++){
                const otherMesh = scene.meshes[index];
                if (!otherMesh.material) {
                    if (!this._mesh.material && otherMesh.computeBonesUsingShaders && otherMesh.numBoneInfluencers > 0) {
                        otherMesh.computeBonesUsingShaders = false;
                    }
                    continue;
                }
                if (!otherMesh.computeBonesUsingShaders || otherMesh.numBoneInfluencers === 0) {
                    continue;
                }
                if (otherMesh.material.getEffect() === effect) {
                    otherMesh.computeBonesUsingShaders = false;
                } else if (otherMesh.subMeshes) {
                    for (const subMesh of otherMesh.subMeshes){
                        const subMeshEffect = subMesh.effect;
                        if (subMeshEffect === effect) {
                            otherMesh.computeBonesUsingShaders = false;
                            break;
                        }
                    }
                }
            }
        } else {
            const currentFallbacks = this._defines[this._currentRank];
            if (currentFallbacks) {
                for(let index = 0; index < currentFallbacks.length; index++){
                    currentDefines = currentDefines.replace("#define " + currentFallbacks[index], "");
                }
            }
            this._currentRank++;
        }
        return currentDefines;
    }
} //# sourceMappingURL=effectFallbacks.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/clipPlaneMaterialHelper.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AddClipPlaneUniforms",
    ()=>AddClipPlaneUniforms,
    "BindClipPlane",
    ()=>BindClipPlane,
    "PrepareDefinesForClipPlanes",
    ()=>PrepareDefinesForClipPlanes,
    "PrepareStringDefinesForClipPlanes",
    ()=>PrepareStringDefinesForClipPlanes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$floatingOriginMatrixOverrides$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/floatingOriginMatrixOverrides.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
;
;
function AddClipPlaneUniforms(uniforms) {
    if (uniforms.indexOf("vClipPlane") === -1) {
        uniforms.push("vClipPlane");
    }
    if (uniforms.indexOf("vClipPlane2") === -1) {
        uniforms.push("vClipPlane2");
    }
    if (uniforms.indexOf("vClipPlane3") === -1) {
        uniforms.push("vClipPlane3");
    }
    if (uniforms.indexOf("vClipPlane4") === -1) {
        uniforms.push("vClipPlane4");
    }
    if (uniforms.indexOf("vClipPlane5") === -1) {
        uniforms.push("vClipPlane5");
    }
    if (uniforms.indexOf("vClipPlane6") === -1) {
        uniforms.push("vClipPlane6");
    }
}
function PrepareStringDefinesForClipPlanes(primaryHolder, secondaryHolder, defines) {
    const clipPlane = !!(primaryHolder.clipPlane ?? secondaryHolder.clipPlane);
    const clipPlane2 = !!(primaryHolder.clipPlane2 ?? secondaryHolder.clipPlane2);
    const clipPlane3 = !!(primaryHolder.clipPlane3 ?? secondaryHolder.clipPlane3);
    const clipPlane4 = !!(primaryHolder.clipPlane4 ?? secondaryHolder.clipPlane4);
    const clipPlane5 = !!(primaryHolder.clipPlane5 ?? secondaryHolder.clipPlane5);
    const clipPlane6 = !!(primaryHolder.clipPlane6 ?? secondaryHolder.clipPlane6);
    if (clipPlane) {
        defines.push("#define CLIPPLANE");
    }
    if (clipPlane2) {
        defines.push("#define CLIPPLANE2");
    }
    if (clipPlane3) {
        defines.push("#define CLIPPLANE3");
    }
    if (clipPlane4) {
        defines.push("#define CLIPPLANE4");
    }
    if (clipPlane5) {
        defines.push("#define CLIPPLANE5");
    }
    if (clipPlane6) {
        defines.push("#define CLIPPLANE6");
    }
}
function PrepareDefinesForClipPlanes(primaryHolder, secondaryHolder, defines) {
    let changed = false;
    const clipPlane = !!(primaryHolder.clipPlane ?? secondaryHolder.clipPlane);
    const clipPlane2 = !!(primaryHolder.clipPlane2 ?? secondaryHolder.clipPlane2);
    const clipPlane3 = !!(primaryHolder.clipPlane3 ?? secondaryHolder.clipPlane3);
    const clipPlane4 = !!(primaryHolder.clipPlane4 ?? secondaryHolder.clipPlane4);
    const clipPlane5 = !!(primaryHolder.clipPlane5 ?? secondaryHolder.clipPlane5);
    const clipPlane6 = !!(primaryHolder.clipPlane6 ?? secondaryHolder.clipPlane6);
    // Do not factorize this code, it breaks browsers optimizations.
    if (defines["CLIPPLANE"] !== clipPlane) {
        defines["CLIPPLANE"] = clipPlane;
        changed = true;
    }
    if (defines["CLIPPLANE2"] !== clipPlane2) {
        defines["CLIPPLANE2"] = clipPlane2;
        changed = true;
    }
    if (defines["CLIPPLANE3"] !== clipPlane3) {
        defines["CLIPPLANE3"] = clipPlane3;
        changed = true;
    }
    if (defines["CLIPPLANE4"] !== clipPlane4) {
        defines["CLIPPLANE4"] = clipPlane4;
        changed = true;
    }
    if (defines["CLIPPLANE5"] !== clipPlane5) {
        defines["CLIPPLANE5"] = clipPlane5;
        changed = true;
    }
    if (defines["CLIPPLANE6"] !== clipPlane6) {
        defines["CLIPPLANE6"] = clipPlane6;
        changed = true;
    }
    return changed;
}
function BindClipPlane(effect, primaryHolder, secondaryHolder) {
    let clipPlane = primaryHolder.clipPlane ?? secondaryHolder.clipPlane;
    SetClipPlane(effect, "vClipPlane", clipPlane);
    clipPlane = primaryHolder.clipPlane2 ?? secondaryHolder.clipPlane2;
    SetClipPlane(effect, "vClipPlane2", clipPlane);
    clipPlane = primaryHolder.clipPlane3 ?? secondaryHolder.clipPlane3;
    SetClipPlane(effect, "vClipPlane3", clipPlane);
    clipPlane = primaryHolder.clipPlane4 ?? secondaryHolder.clipPlane4;
    SetClipPlane(effect, "vClipPlane4", clipPlane);
    clipPlane = primaryHolder.clipPlane5 ?? secondaryHolder.clipPlane5;
    SetClipPlane(effect, "vClipPlane5", clipPlane);
    clipPlane = primaryHolder.clipPlane6 ?? secondaryHolder.clipPlane6;
    SetClipPlane(effect, "vClipPlane6", clipPlane);
}
function SetClipPlane(effect, uniformName, clipPlane) {
    if (clipPlane) {
        // Original clipplane is using equation normal.dot(p) + d = 0
        // Assume we have p' = p - offset, that means normal.dot(p') + d' = 0
        // So to get the offset plane,
        // normal.dot(p' + offset) + d = 0
        // normal.dot(p') + normal.dot(offset) + d = 0
        // -d' + normal.dot(offset) + d = 0
        // d' = d + normal.dot(offset)
        const offset = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$floatingOriginMatrixOverrides$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FloatingOriginCurrentScene"].getScene()?.floatingOriginOffset || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].ZeroReadOnly;
        effect.setFloat4(uniformName, clipPlane.normal.x, clipPlane.normal.y, clipPlane.normal.z, clipPlane.d + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Dot(clipPlane.normal, offset));
    }
} //# sourceMappingURL=clipPlaneMaterialHelper.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialFlags.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MaterialFlags",
    ()=>MaterialFlags
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/abstractEngine.js [app-ssr] (ecmascript)");
;
class MaterialFlags {
    /**
     * Are diffuse textures enabled in the application.
     */ static get DiffuseTextureEnabled() {
        return this._DiffuseTextureEnabled;
    }
    static set DiffuseTextureEnabled(value) {
        if (this._DiffuseTextureEnabled === value) {
            return;
        }
        this._DiffuseTextureEnabled = value;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].MarkAllMaterialsAsDirty(1);
    }
    /**
     * Is the OpenPBR Base Weight texture enabled in the application.
     */ static get BaseWeightTextureEnabled() {
        return this._BaseWeightTextureEnabled;
    }
    static set BaseWeightTextureEnabled(value) {
        if (this._BaseWeightTextureEnabled === value) {
            return;
        }
        this._BaseWeightTextureEnabled = value;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].MarkAllMaterialsAsDirty(1);
    }
    /**
     * Is the OpenPBR Base Diffuse Roughness texture enabled in the application.
     */ static get BaseDiffuseRoughnessTextureEnabled() {
        return this._BaseDiffuseRoughnessTextureEnabled;
    }
    static set BaseDiffuseRoughnessTextureEnabled(value) {
        if (this._BaseDiffuseRoughnessTextureEnabled === value) {
            return;
        }
        this._BaseDiffuseRoughnessTextureEnabled = value;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].MarkAllMaterialsAsDirty(1);
    }
    /**
     * Are detail textures enabled in the application.
     */ static get DetailTextureEnabled() {
        return this._DetailTextureEnabled;
    }
    static set DetailTextureEnabled(value) {
        if (this._DetailTextureEnabled === value) {
            return;
        }
        this._DetailTextureEnabled = value;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].MarkAllMaterialsAsDirty(1);
    }
    /**
     * Are decal maps enabled in the application.
     */ static get DecalMapEnabled() {
        return this._DecalMapEnabled;
    }
    static set DecalMapEnabled(value) {
        if (this._DecalMapEnabled === value) {
            return;
        }
        this._DecalMapEnabled = value;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].MarkAllMaterialsAsDirty(1);
    }
    /**
     * Are ambient textures enabled in the application.
     */ static get AmbientTextureEnabled() {
        return this._AmbientTextureEnabled;
    }
    static set AmbientTextureEnabled(value) {
        if (this._AmbientTextureEnabled === value) {
            return;
        }
        this._AmbientTextureEnabled = value;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].MarkAllMaterialsAsDirty(1);
    }
    /**
     * Are opacity textures enabled in the application.
     */ static get OpacityTextureEnabled() {
        return this._OpacityTextureEnabled;
    }
    static set OpacityTextureEnabled(value) {
        if (this._OpacityTextureEnabled === value) {
            return;
        }
        this._OpacityTextureEnabled = value;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].MarkAllMaterialsAsDirty(1);
    }
    /**
     * Are reflection textures enabled in the application.
     */ static get ReflectionTextureEnabled() {
        return this._ReflectionTextureEnabled;
    }
    static set ReflectionTextureEnabled(value) {
        if (this._ReflectionTextureEnabled === value) {
            return;
        }
        this._ReflectionTextureEnabled = value;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].MarkAllMaterialsAsDirty(1);
    }
    /**
     * Are emissive textures enabled in the application.
     */ static get EmissiveTextureEnabled() {
        return this._EmissiveTextureEnabled;
    }
    static set EmissiveTextureEnabled(value) {
        if (this._EmissiveTextureEnabled === value) {
            return;
        }
        this._EmissiveTextureEnabled = value;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].MarkAllMaterialsAsDirty(1);
    }
    /**
     * Are specular textures enabled in the application.
     */ static get SpecularTextureEnabled() {
        return this._SpecularTextureEnabled;
    }
    static set SpecularTextureEnabled(value) {
        if (this._SpecularTextureEnabled === value) {
            return;
        }
        this._SpecularTextureEnabled = value;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].MarkAllMaterialsAsDirty(1);
    }
    /**
     * Are bump textures enabled in the application.
     */ static get BumpTextureEnabled() {
        return this._BumpTextureEnabled;
    }
    static set BumpTextureEnabled(value) {
        if (this._BumpTextureEnabled === value) {
            return;
        }
        this._BumpTextureEnabled = value;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].MarkAllMaterialsAsDirty(1);
    }
    /**
     * Are lightmap textures enabled in the application.
     */ static get LightmapTextureEnabled() {
        return this._LightmapTextureEnabled;
    }
    static set LightmapTextureEnabled(value) {
        if (this._LightmapTextureEnabled === value) {
            return;
        }
        this._LightmapTextureEnabled = value;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].MarkAllMaterialsAsDirty(1);
    }
    /**
     * Are refraction textures enabled in the application.
     */ static get RefractionTextureEnabled() {
        return this._RefractionTextureEnabled;
    }
    static set RefractionTextureEnabled(value) {
        if (this._RefractionTextureEnabled === value) {
            return;
        }
        this._RefractionTextureEnabled = value;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].MarkAllMaterialsAsDirty(1);
    }
    /**
     * Are color grading textures enabled in the application.
     */ static get ColorGradingTextureEnabled() {
        return this._ColorGradingTextureEnabled;
    }
    static set ColorGradingTextureEnabled(value) {
        if (this._ColorGradingTextureEnabled === value) {
            return;
        }
        this._ColorGradingTextureEnabled = value;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].MarkAllMaterialsAsDirty(1);
    }
    /**
     * Are fresnels enabled in the application.
     */ static get FresnelEnabled() {
        return this._FresnelEnabled;
    }
    static set FresnelEnabled(value) {
        if (this._FresnelEnabled === value) {
            return;
        }
        this._FresnelEnabled = value;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].MarkAllMaterialsAsDirty(4);
    }
    /**
     * Are clear coat textures enabled in the application.
     */ static get ClearCoatTextureEnabled() {
        return this._ClearCoatTextureEnabled;
    }
    static set ClearCoatTextureEnabled(value) {
        if (this._ClearCoatTextureEnabled === value) {
            return;
        }
        this._ClearCoatTextureEnabled = value;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].MarkAllMaterialsAsDirty(1);
    }
    /**
     * Are clear coat bump textures enabled in the application.
     */ static get ClearCoatBumpTextureEnabled() {
        return this._ClearCoatBumpTextureEnabled;
    }
    static set ClearCoatBumpTextureEnabled(value) {
        if (this._ClearCoatBumpTextureEnabled === value) {
            return;
        }
        this._ClearCoatBumpTextureEnabled = value;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].MarkAllMaterialsAsDirty(1);
    }
    /**
     * Are clear coat tint textures enabled in the application.
     */ static get ClearCoatTintTextureEnabled() {
        return this._ClearCoatTintTextureEnabled;
    }
    static set ClearCoatTintTextureEnabled(value) {
        if (this._ClearCoatTintTextureEnabled === value) {
            return;
        }
        this._ClearCoatTintTextureEnabled = value;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].MarkAllMaterialsAsDirty(1);
    }
    /**
     * Are sheen textures enabled in the application.
     */ static get SheenTextureEnabled() {
        return this._SheenTextureEnabled;
    }
    static set SheenTextureEnabled(value) {
        if (this._SheenTextureEnabled === value) {
            return;
        }
        this._SheenTextureEnabled = value;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].MarkAllMaterialsAsDirty(1);
    }
    /**
     * Are anisotropic textures enabled in the application.
     */ static get AnisotropicTextureEnabled() {
        return this._AnisotropicTextureEnabled;
    }
    static set AnisotropicTextureEnabled(value) {
        if (this._AnisotropicTextureEnabled === value) {
            return;
        }
        this._AnisotropicTextureEnabled = value;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].MarkAllMaterialsAsDirty(1);
    }
    /**
     * Are thickness textures enabled in the application.
     */ static get ThicknessTextureEnabled() {
        return this._ThicknessTextureEnabled;
    }
    static set ThicknessTextureEnabled(value) {
        if (this._ThicknessTextureEnabled === value) {
            return;
        }
        this._ThicknessTextureEnabled = value;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].MarkAllMaterialsAsDirty(1);
    }
    /**
     * Are refraction intensity textures enabled in the application.
     */ static get RefractionIntensityTextureEnabled() {
        return this._ThicknessTextureEnabled;
    }
    static set RefractionIntensityTextureEnabled(value) {
        if (this._RefractionIntensityTextureEnabled === value) {
            return;
        }
        this._RefractionIntensityTextureEnabled = value;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].MarkAllMaterialsAsDirty(1);
    }
    /**
     * Are translucency intensity textures enabled in the application.
     */ static get TranslucencyIntensityTextureEnabled() {
        return this._TranslucencyIntensityTextureEnabled;
    }
    static set TranslucencyIntensityTextureEnabled(value) {
        if (this._TranslucencyIntensityTextureEnabled === value) {
            return;
        }
        this._TranslucencyIntensityTextureEnabled = value;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].MarkAllMaterialsAsDirty(1);
    }
    /**
     * Are translucency tint textures enabled in the application.
     */ static get TranslucencyColorTextureEnabled() {
        return this._TranslucencyColorTextureEnabled;
    }
    static set TranslucencyColorTextureEnabled(value) {
        if (this._TranslucencyColorTextureEnabled === value) {
            return;
        }
        this._TranslucencyColorTextureEnabled = value;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].MarkAllMaterialsAsDirty(1);
    }
    /**
     * Are translucency intensity textures enabled in the application.
     */ static get IridescenceTextureEnabled() {
        return this._IridescenceTextureEnabled;
    }
    static set IridescenceTextureEnabled(value) {
        if (this._IridescenceTextureEnabled === value) {
            return;
        }
        this._IridescenceTextureEnabled = value;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].MarkAllMaterialsAsDirty(1);
    }
}
// Flags used to enable or disable a type of texture for all Standard Materials
MaterialFlags._DiffuseTextureEnabled = true;
MaterialFlags._BaseWeightTextureEnabled = true;
MaterialFlags._BaseDiffuseRoughnessTextureEnabled = true;
MaterialFlags._DetailTextureEnabled = true;
MaterialFlags._DecalMapEnabled = true;
MaterialFlags._AmbientTextureEnabled = true;
MaterialFlags._OpacityTextureEnabled = true;
MaterialFlags._ReflectionTextureEnabled = true;
MaterialFlags._EmissiveTextureEnabled = true;
MaterialFlags._SpecularTextureEnabled = true;
MaterialFlags._BumpTextureEnabled = true;
MaterialFlags._LightmapTextureEnabled = true;
MaterialFlags._RefractionTextureEnabled = true;
MaterialFlags._ColorGradingTextureEnabled = true;
MaterialFlags._FresnelEnabled = true;
MaterialFlags._ClearCoatTextureEnabled = true;
MaterialFlags._ClearCoatBumpTextureEnabled = true;
MaterialFlags._ClearCoatTintTextureEnabled = true;
MaterialFlags._SheenTextureEnabled = true;
MaterialFlags._AnisotropicTextureEnabled = true;
MaterialFlags._ThicknessTextureEnabled = true;
MaterialFlags._RefractionIntensityTextureEnabled = true;
MaterialFlags._TranslucencyIntensityTextureEnabled = true;
MaterialFlags._TranslucencyColorTextureEnabled = true;
MaterialFlags._IridescenceTextureEnabled = true; //# sourceMappingURL=materialFlags.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialHelper.functions.pure.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** This file must only contain pure code and pure imports */ // All non-type imports must be pure
__turbopack_context__.s([
    "BindLogDepth",
    ()=>BindLogDepth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-ssr] (ecmascript)");
;
function BindLogDepth(defines, effect, scene) {
    if (!defines || defines["LOGARITHMICDEPTH"] || defines.indexOf && defines.indexOf("LOGARITHMICDEPTH") >= 0) {
        const camera = scene.activeCamera;
        if (camera.mode === 1) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Error("Logarithmic depth is not compatible with orthographic cameras!", 20);
        }
        effect.setFloat("logarithmicDepthConstant", 2.0 / (Math.log(camera.maxZ + 1.0) / Math.LN2));
    }
} //# sourceMappingURL=materialHelper.functions.pure.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialHelper.functions.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BindBonesParameters",
    ()=>BindBonesParameters,
    "BindFogParameters",
    ()=>BindFogParameters,
    "BindIBLParameters",
    ()=>BindIBLParameters,
    "BindIBLSamplers",
    ()=>BindIBLSamplers,
    "BindLight",
    ()=>BindLight,
    "BindLightProperties",
    ()=>BindLightProperties,
    "BindLights",
    ()=>BindLights,
    "BindMorphTargetParameters",
    ()=>BindMorphTargetParameters,
    "BindSceneUniformBuffer",
    ()=>BindSceneUniformBuffer,
    "BindTextureMatrix",
    ()=>BindTextureMatrix,
    "GetFogState",
    ()=>GetFogState,
    "HandleFallbacksForShadows",
    ()=>HandleFallbacksForShadows,
    "PrepareAttributesForBakedVertexAnimation",
    ()=>PrepareAttributesForBakedVertexAnimation,
    "PrepareAttributesForBones",
    ()=>PrepareAttributesForBones,
    "PrepareAttributesForInstances",
    ()=>PrepareAttributesForInstances,
    "PrepareAttributesForMorphTargets",
    ()=>PrepareAttributesForMorphTargets,
    "PrepareAttributesForMorphTargetsInfluencers",
    ()=>PrepareAttributesForMorphTargetsInfluencers,
    "PrepareDefinesAndAttributesForMorphTargets",
    ()=>PrepareDefinesAndAttributesForMorphTargets,
    "PrepareDefinesForAttributes",
    ()=>PrepareDefinesForAttributes,
    "PrepareDefinesForBakedVertexAnimation",
    ()=>PrepareDefinesForBakedVertexAnimation,
    "PrepareDefinesForBones",
    ()=>PrepareDefinesForBones,
    "PrepareDefinesForCamera",
    ()=>PrepareDefinesForCamera,
    "PrepareDefinesForFrameBoundValues",
    ()=>PrepareDefinesForFrameBoundValues,
    "PrepareDefinesForIBL",
    ()=>PrepareDefinesForIBL,
    "PrepareDefinesForLight",
    ()=>PrepareDefinesForLight,
    "PrepareDefinesForLights",
    ()=>PrepareDefinesForLights,
    "PrepareDefinesForMergedUV",
    ()=>PrepareDefinesForMergedUV,
    "PrepareDefinesForMisc",
    ()=>PrepareDefinesForMisc,
    "PrepareDefinesForMorphTargets",
    ()=>PrepareDefinesForMorphTargets,
    "PrepareDefinesForMultiview",
    ()=>PrepareDefinesForMultiview,
    "PrepareDefinesForOIT",
    ()=>PrepareDefinesForOIT,
    "PrepareDefinesForPrePass",
    ()=>PrepareDefinesForPrePass,
    "PrepareUniformLayoutForIBL",
    ()=>PrepareUniformLayoutForIBL,
    "PrepareUniformsAndSamplersForIBL",
    ()=>PrepareUniformsAndSamplersForIBL,
    "PrepareUniformsAndSamplersForLight",
    ()=>PrepareUniformsAndSamplersForLight,
    "PrepareUniformsAndSamplersList",
    ()=>PrepareUniformsAndSamplersList,
    "PushAttributesForInstances",
    ()=>PushAttributesForInstances
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/engineStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$lightConstants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Lights/lightConstants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$clipPlaneMaterialHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/clipPlaneMaterialHelper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialFlags.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/texture.js [app-ssr] (ecmascript)");
// For backwards compatibility, we export everything from the pure version of this file.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$pure$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialHelper.functions.pure.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
// Temps
const TempFogColor = {
    r: 0,
    g: 0,
    b: 0
};
const TmpMorphInfluencers = {
    NUM_MORPH_INFLUENCERS: 0,
    NORMAL: false,
    TANGENT: false,
    UV: false,
    UV2: false,
    COLOR: false
};
function BindFogParameters(scene, mesh, effect, linearSpace = false) {
    if (effect && scene.fogEnabled && (!mesh || mesh.applyFog) && scene.fogMode !== 0) {
        effect.setFloat4("vFogInfos", scene.fogMode, scene.fogStart, scene.fogEnd, scene.fogDensity);
        // Convert fog color to linear space if used in a linear space computed shader.
        if (linearSpace) {
            scene.fogColor.toLinearSpaceToRef(TempFogColor, scene.getEngine().useExactSrgbConversions);
            effect.setColor3("vFogColor", TempFogColor);
        } else {
            effect.setColor3("vFogColor", scene.fogColor);
        }
    }
}
function PrepareDefinesAndAttributesForMorphTargets(morphTargetManager, defines, attribs, mesh, usePositionMorph, useNormalMorph, useTangentMorph, useUVMorph, useUV2Morph, useColorMorph) {
    const numMorphInfluencers = morphTargetManager.numMaxInfluencers || morphTargetManager.numInfluencers;
    if (numMorphInfluencers <= 0) {
        return 0;
    }
    defines.push("#define MORPHTARGETS");
    if (morphTargetManager.hasPositions) {
        defines.push("#define MORPHTARGETTEXTURE_HASPOSITIONS");
    }
    if (morphTargetManager.hasNormals) {
        defines.push("#define MORPHTARGETTEXTURE_HASNORMALS");
    }
    if (morphTargetManager.hasTangents) {
        defines.push("#define MORPHTARGETTEXTURE_HASTANGENTS");
    }
    if (morphTargetManager.hasUVs) {
        defines.push("#define MORPHTARGETTEXTURE_HASUVS");
    }
    if (morphTargetManager.hasUV2s) {
        defines.push("#define MORPHTARGETTEXTURE_HASUV2S");
    }
    if (morphTargetManager.hasColors) {
        defines.push("#define MORPHTARGETTEXTURE_HASCOLORS");
    }
    if (morphTargetManager.supportsPositions && usePositionMorph) {
        defines.push("#define MORPHTARGETS_POSITION");
    }
    if (morphTargetManager.supportsNormals && useNormalMorph) {
        defines.push("#define MORPHTARGETS_NORMAL");
    }
    if (morphTargetManager.supportsTangents && useTangentMorph) {
        defines.push("#define MORPHTARGETS_TANGENT");
    }
    if (morphTargetManager.supportsUVs && useUVMorph) {
        defines.push("#define MORPHTARGETS_UV");
    }
    if (morphTargetManager.supportsUV2s && useUV2Morph) {
        defines.push("#define MORPHTARGETS_UV2");
    }
    if (morphTargetManager.supportsColors && useColorMorph) {
        defines.push("#define MORPHTARGETS_COLOR");
    }
    defines.push("#define NUM_MORPH_INFLUENCERS " + numMorphInfluencers);
    if (morphTargetManager.isUsingTextureForTargets) {
        defines.push("#define MORPHTARGETS_TEXTURE");
    }
    TmpMorphInfluencers.NUM_MORPH_INFLUENCERS = numMorphInfluencers;
    TmpMorphInfluencers.NORMAL = useNormalMorph;
    TmpMorphInfluencers.TANGENT = useTangentMorph;
    TmpMorphInfluencers.UV = useUVMorph;
    TmpMorphInfluencers.UV2 = useUV2Morph;
    TmpMorphInfluencers.COLOR = useColorMorph;
    PrepareAttributesForMorphTargets(attribs, mesh, TmpMorphInfluencers, usePositionMorph);
    return numMorphInfluencers;
}
function PrepareAttributesForMorphTargetsInfluencers(attribs, mesh, influencers) {
    TmpMorphInfluencers.NUM_MORPH_INFLUENCERS = influencers;
    TmpMorphInfluencers.NORMAL = false;
    TmpMorphInfluencers.TANGENT = false;
    TmpMorphInfluencers.UV = false;
    TmpMorphInfluencers.UV2 = false;
    TmpMorphInfluencers.COLOR = false;
    PrepareAttributesForMorphTargets(attribs, mesh, TmpMorphInfluencers, true);
}
function PrepareAttributesForMorphTargets(attribs, mesh, defines, usePositionMorph = true) {
    const influencers = defines["NUM_MORPH_INFLUENCERS"];
    if (influencers > 0 && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EngineStore"].LastCreatedEngine) {
        const maxAttributesCount = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EngineStore"].LastCreatedEngine.getCaps().maxVertexAttribs;
        const manager = mesh.morphTargetManager;
        if (manager?.isUsingTextureForTargets) {
            return;
        }
        const position = manager && manager.supportsPositions && usePositionMorph;
        const normal = manager && manager.supportsNormals && defines["NORMAL"];
        const tangent = manager && manager.supportsTangents && defines["TANGENT"];
        const uv = manager && manager.supportsUVs && defines["UV1"];
        const uv2 = manager && manager.supportsUV2s && defines["UV2"];
        const color = manager && manager.supportsColors && defines["VERTEXCOLOR"];
        for(let index = 0; index < influencers; index++){
            if (position) {
                attribs.push(`position` + index);
            }
            if (normal) {
                attribs.push(`normal` + index);
            }
            if (tangent) {
                attribs.push(`tangent` + index);
            }
            if (uv) {
                attribs.push(`uv` + "_" + index);
            }
            if (uv2) {
                attribs.push(`uv2` + "_" + index);
            }
            if (color) {
                attribs.push(`color` + index);
            }
            if (attribs.length > maxAttributesCount) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Error("Cannot add more vertex attributes for mesh " + mesh.name);
            }
        }
    }
}
function PushAttributesForInstances(attribs, needsPreviousMatrices = false) {
    attribs.push("world0");
    attribs.push("world1");
    attribs.push("world2");
    attribs.push("world3");
    if (needsPreviousMatrices) {
        attribs.push("previousWorld0");
        attribs.push("previousWorld1");
        attribs.push("previousWorld2");
        attribs.push("previousWorld3");
    }
}
function BindMorphTargetParameters(abstractMesh, effect) {
    const manager = abstractMesh.morphTargetManager;
    if (!abstractMesh || !manager) {
        return;
    }
    effect.setFloatArray("morphTargetInfluences", manager.influences);
}
function BindSceneUniformBuffer(effect, sceneUbo) {
    sceneUbo.bindToEffect(effect, "Scene");
}
function BindIBLParameters(scene, defines, ubo, reflectionColor, reflectionTexture = null, realTimeFiltering = false, supportTextureInfo = false, supportLocalProjection = false, usePBR = false, supportSH = false, useColor = false, reflectionBlur = 0) {
    if (scene.texturesEnabled) {
        if (reflectionTexture && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].ReflectionTextureEnabled) {
            ubo.updateMatrix("reflectionMatrix", reflectionTexture.getReflectionTextureMatrix());
            ubo.updateFloat2("vReflectionInfos", reflectionTexture.level * scene.iblIntensity, reflectionBlur);
            if (supportLocalProjection && reflectionTexture.boundingBoxSize) {
                const cubeTexture = reflectionTexture;
                ubo.updateVector3("vReflectionPosition", cubeTexture.boundingBoxPosition);
                ubo.updateVector3("vReflectionSize", cubeTexture.boundingBoxSize);
            }
            if (realTimeFiltering) {
                const width = reflectionTexture.getSize().width;
                ubo.updateFloat2("vReflectionFilteringInfo", width, Math.log2(width));
            }
            if (supportSH && !defines.USEIRRADIANCEMAP) {
                const polynomials = reflectionTexture.sphericalPolynomial;
                if (defines.USESPHERICALFROMREFLECTIONMAP && polynomials) {
                    if (defines.SPHERICAL_HARMONICS) {
                        const preScaledHarmonics = polynomials.preScaledHarmonics;
                        ubo.updateVector3("vSphericalL00", preScaledHarmonics.l00);
                        ubo.updateVector3("vSphericalL1_1", preScaledHarmonics.l1_1);
                        ubo.updateVector3("vSphericalL10", preScaledHarmonics.l10);
                        ubo.updateVector3("vSphericalL11", preScaledHarmonics.l11);
                        ubo.updateVector3("vSphericalL2_2", preScaledHarmonics.l2_2);
                        ubo.updateVector3("vSphericalL2_1", preScaledHarmonics.l2_1);
                        ubo.updateVector3("vSphericalL20", preScaledHarmonics.l20);
                        ubo.updateVector3("vSphericalL21", preScaledHarmonics.l21);
                        ubo.updateVector3("vSphericalL22", preScaledHarmonics.l22);
                    } else {
                        ubo.updateFloat3("vSphericalX", polynomials.x.x, polynomials.x.y, polynomials.x.z);
                        ubo.updateFloat3("vSphericalY", polynomials.y.x, polynomials.y.y, polynomials.y.z);
                        ubo.updateFloat3("vSphericalZ", polynomials.z.x, polynomials.z.y, polynomials.z.z);
                        ubo.updateFloat3("vSphericalXX_ZZ", polynomials.xx.x - polynomials.zz.x, polynomials.xx.y - polynomials.zz.y, polynomials.xx.z - polynomials.zz.z);
                        ubo.updateFloat3("vSphericalYY_ZZ", polynomials.yy.x - polynomials.zz.x, polynomials.yy.y - polynomials.zz.y, polynomials.yy.z - polynomials.zz.z);
                        ubo.updateFloat3("vSphericalZZ", polynomials.zz.x, polynomials.zz.y, polynomials.zz.z);
                        ubo.updateFloat3("vSphericalXY", polynomials.xy.x, polynomials.xy.y, polynomials.xy.z);
                        ubo.updateFloat3("vSphericalYZ", polynomials.yz.x, polynomials.yz.y, polynomials.yz.z);
                        ubo.updateFloat3("vSphericalZX", polynomials.zx.x, polynomials.zx.y, polynomials.zx.z);
                    }
                }
            } else if (usePBR) {
                // If we're using an irradiance map with a dominant direction assigned, set it.
                if (defines.USEIRRADIANCEMAP && defines.USE_IRRADIANCE_DOMINANT_DIRECTION) {
                    ubo.updateVector3("vReflectionDominantDirection", reflectionTexture.irradianceTexture._dominantDirection);
                }
            }
            if (supportTextureInfo) {
                ubo.updateFloat3("vReflectionMicrosurfaceInfos", reflectionTexture.getSize().width, reflectionTexture.lodGenerationScale, reflectionTexture.lodGenerationOffset);
            }
        }
    }
    if (useColor) {
        ubo.updateColor3("vReflectionColor", reflectionColor);
    }
}
function BindIBLSamplers(scene, defines, ubo, reflectionTexture = null, realTimeFiltering = false) {
    if (reflectionTexture && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].ReflectionTextureEnabled) {
        if (defines.LODBASEDMICROSFURACE) {
            ubo.setTexture("reflectionSampler", reflectionTexture);
        } else {
            ubo.setTexture("reflectionSampler", reflectionTexture._lodTextureMid || reflectionTexture);
            ubo.setTexture("reflectionSamplerLow", reflectionTexture._lodTextureLow || reflectionTexture);
            ubo.setTexture("reflectionSamplerHigh", reflectionTexture._lodTextureHigh || reflectionTexture);
        }
        if (defines.USEIRRADIANCEMAP) {
            ubo.setTexture("irradianceSampler", reflectionTexture.irradianceTexture);
        }
        //if realtime filtering and using CDF maps, set them.
        const cdfGenerator = scene.iblCdfGenerator;
        if (realTimeFiltering && cdfGenerator) {
            ubo.setTexture("icdfSampler", cdfGenerator.getIcdfTexture());
        }
    }
}
function PrepareDefinesForMergedUV(texture, defines, key) {
    defines._needUVs = true;
    defines[key] = true;
    if (texture.optimizeUVAllocation && texture.getTextureMatrix().isIdentityAs3x2()) {
        defines[key + "DIRECTUV"] = texture.coordinatesIndex + 1;
        defines["MAINUV" + (texture.coordinatesIndex + 1)] = true;
    } else {
        defines[key + "DIRECTUV"] = 0;
    }
}
function BindTextureMatrix(texture, uniformBuffer, key) {
    const matrix = texture.getTextureMatrix();
    uniformBuffer.updateMatrix(key + "Matrix", matrix);
}
function PrepareAttributesForBakedVertexAnimation(attribs, mesh, defines) {
    const enabled = defines["BAKED_VERTEX_ANIMATION_TEXTURE"] && defines["INSTANCES"];
    if (enabled) {
        attribs.push("bakedVertexAnimationSettingsInstanced");
    }
}
// Copies the bones transformation matrices into the target array and returns the target's reference
function CopyBonesTransformationMatrices(source, target) {
    target.set(source);
    return target;
}
function BindBonesParameters(mesh, effect, prePassConfiguration) {
    if (!effect || !mesh) {
        return;
    }
    if (mesh.computeBonesUsingShaders && effect._bonesComputationForcedToCPU) {
        mesh.computeBonesUsingShaders = false;
    }
    if (mesh.useBones && mesh.computeBonesUsingShaders && mesh.skeleton) {
        const skeleton = mesh.skeleton;
        if (skeleton.isUsingTextureForMatrices && effect.getUniformIndex("boneTextureWidth") > -1) {
            const boneTexture = skeleton.getTransformMatrixTexture(mesh);
            effect.setTexture("boneSampler", boneTexture);
            effect.setFloat("boneTextureWidth", 4.0 * (skeleton.bones.length + 1));
        } else {
            const matrices = skeleton.getTransformMatrices(mesh);
            if (matrices) {
                effect.setMatrices("mBones", matrices);
                if (prePassConfiguration && mesh.getScene().prePassRenderer && mesh.getScene().prePassRenderer.getIndex(2)) {
                    if (!prePassConfiguration.previousBones[mesh.uniqueId]) {
                        prePassConfiguration.previousBones[mesh.uniqueId] = matrices.slice();
                    }
                    effect.setMatrices("mPreviousBones", prePassConfiguration.previousBones[mesh.uniqueId]);
                    CopyBonesTransformationMatrices(matrices, prePassConfiguration.previousBones[mesh.uniqueId]);
                }
            }
        }
    }
}
function BindLightProperties(light, effect, lightIndex) {
    light.transferToEffect(effect, lightIndex + "");
}
function BindLight(light, lightIndex, scene, effect, useSpecular, receiveShadows = true) {
    light._bindLight(lightIndex, scene, effect, useSpecular, receiveShadows);
}
function BindLights(scene, mesh, effect, defines, maxSimultaneousLights = 4) {
    const len = Math.min(mesh.lightSources.length, maxSimultaneousLights);
    for(let i = 0; i < len; i++){
        const light = mesh.lightSources[i];
        BindLight(light, i, scene, effect, typeof defines === "boolean" ? defines : defines["SPECULARTERM"], mesh.receiveShadows);
    }
}
function PrepareAttributesForBones(attribs, mesh, defines, fallbacks) {
    if (defines["NUM_BONE_INFLUENCERS"] > 0) {
        fallbacks.addCPUSkinningFallback(0, mesh);
        attribs.push(`matricesIndices`);
        attribs.push(`matricesWeights`);
        if (defines["NUM_BONE_INFLUENCERS"] > 4) {
            attribs.push(`matricesIndicesExtra`);
            attribs.push(`matricesWeightsExtra`);
        }
    }
}
function PrepareAttributesForInstances(attribs, defines) {
    if (defines["INSTANCES"] || defines["THIN_INSTANCES"]) {
        PushAttributesForInstances(attribs, !!defines["PREPASS_VELOCITY"]);
    }
    if (defines.INSTANCESCOLOR) {
        attribs.push(`instanceColor`);
    }
}
function HandleFallbacksForShadows(defines, fallbacks, maxSimultaneousLights = 4, rank = 0) {
    let lightFallbackRank = 0;
    for(let lightIndex = 0; lightIndex < maxSimultaneousLights; lightIndex++){
        if (!defines["LIGHT" + lightIndex]) {
            break;
        }
        if (lightIndex > 0) {
            lightFallbackRank = rank + lightIndex;
            fallbacks.addFallback(lightFallbackRank, "LIGHT" + lightIndex);
        }
        if (!defines["SHADOWS"]) {
            if (defines["SHADOW" + lightIndex]) {
                fallbacks.addFallback(rank, "SHADOW" + lightIndex);
            }
            if (defines["SHADOWPCF" + lightIndex]) {
                fallbacks.addFallback(rank, "SHADOWPCF" + lightIndex);
            }
            if (defines["SHADOWPCSS" + lightIndex]) {
                fallbacks.addFallback(rank, "SHADOWPCSS" + lightIndex);
            }
            if (defines["SHADOWPOISSON" + lightIndex]) {
                fallbacks.addFallback(rank, "SHADOWPOISSON" + lightIndex);
            }
            if (defines["SHADOWESM" + lightIndex]) {
                fallbacks.addFallback(rank, "SHADOWESM" + lightIndex);
            }
            if (defines["SHADOWCLOSEESM" + lightIndex]) {
                fallbacks.addFallback(rank, "SHADOWCLOSEESM" + lightIndex);
            }
        }
    }
    return lightFallbackRank++;
}
function GetFogState(mesh, scene) {
    return scene.fogEnabled && mesh.applyFog && scene.fogMode !== 0;
}
function PrepareDefinesForMisc(mesh, scene, useLogarithmicDepth, pointsCloud, fogEnabled, alphaTest, defines, applyDecalAfterDetail = false, useVertexPulling = false, renderingMesh, setVertexOutputInvariant) {
    if (defines._areMiscDirty) {
        defines["LOGARITHMICDEPTH"] = useLogarithmicDepth;
        defines["POINTSIZE"] = pointsCloud;
        defines["FOG"] = fogEnabled && GetFogState(mesh, scene);
        defines["NONUNIFORMSCALING"] = mesh.nonUniformScaling;
        defines["ALPHATEST"] = alphaTest;
        defines["DECAL_AFTER_DETAIL"] = applyDecalAfterDetail;
        defines["USE_VERTEX_PULLING"] = useVertexPulling;
        const indexBuffer = renderingMesh?.geometry?.getIndexBuffer();
        defines["VERTEX_PULLING_USE_INDEX_BUFFER"] = !!indexBuffer;
        defines["VERTEX_PULLING_INDEX_BUFFER_32BITS"] = indexBuffer ? indexBuffer.is32Bits : false;
        defines["VERTEXOUTPUT_INVARIANT"] = !!setVertexOutputInvariant;
    }
}
function PrepareDefinesForLights(scene, mesh, defines, specularSupported, maxSimultaneousLights = 4, disableLighting = false) {
    if (!defines._areLightsDirty) {
        return defines._needNormals;
    }
    let lightIndex = 0;
    const state = {
        needNormals: defines._needNormals,
        needRebuild: false,
        lightmapMode: false,
        shadowEnabled: false,
        specularEnabled: false
    };
    if (scene.lightsEnabled && !disableLighting) {
        for (const light of mesh.lightSources){
            PrepareDefinesForLight(scene, mesh, light, lightIndex, defines, specularSupported, state);
            lightIndex++;
            if (lightIndex === maxSimultaneousLights) {
                break;
            }
        }
    }
    defines["SPECULARTERM"] = state.specularEnabled;
    defines["SHADOWS"] = state.shadowEnabled;
    // Resetting all other lights if any
    const maxLightCount = Math.max(maxSimultaneousLights, defines["MAXLIGHTCOUNT"] || 0);
    for(let index = lightIndex; index < maxLightCount; index++){
        if (defines["LIGHT" + index] !== undefined) {
            defines["LIGHT" + index] = false;
            defines["HEMILIGHT" + index] = false;
            defines["POINTLIGHT" + index] = false;
            defines["DIRLIGHT" + index] = false;
            defines["SPOTLIGHT" + index] = false;
            defines["AREALIGHT" + index] = false;
            defines["CLUSTLIGHT" + index] = false;
            defines["SHADOW" + index] = false;
            defines["SHADOWCSM" + index] = false;
            defines["SHADOWCSMDEBUG" + index] = false;
            defines["SHADOWCSMNUM_CASCADES" + index] = false;
            defines["SHADOWCSMUSESHADOWMAXZ" + index] = false;
            defines["SHADOWCSMNOBLEND" + index] = false;
            defines["SHADOWCSM_RIGHTHANDED" + index] = false;
            defines["SHADOWPCF" + index] = false;
            defines["SHADOWPCSS" + index] = false;
            defines["SHADOWPOISSON" + index] = false;
            defines["SHADOWESM" + index] = false;
            defines["SHADOWCLOSEESM" + index] = false;
            defines["SHADOWCUBE" + index] = false;
            defines["SHADOWLOWQUALITY" + index] = false;
            defines["SHADOWMEDIUMQUALITY" + index] = false;
        }
    }
    defines["MAXLIGHTCOUNT"] = maxSimultaneousLights;
    const caps = scene.getEngine().getCaps();
    if (defines["SHADOWFLOAT"] === undefined) {
        state.needRebuild = true;
    }
    defines["SHADOWFLOAT"] = state.shadowEnabled && (caps.textureFloatRender && caps.textureFloatLinearFiltering || caps.textureHalfFloatRender && caps.textureHalfFloatLinearFiltering);
    defines["LIGHTMAPEXCLUDED"] = state.lightmapMode;
    if (state.needRebuild) {
        defines.rebuild();
    }
    return state.needNormals;
}
function PrepareDefinesForIBL(scene, reflectionTexture, defines, realTimeFiltering = false, realTimeFilteringQuality = 8, forceSHInVertex = false) {
    if (reflectionTexture && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].ReflectionTextureEnabled) {
        if (!reflectionTexture.isReadyOrNotBlocking()) {
            return false;
        }
        defines._needNormals = true;
        defines.REFLECTION = true;
        defines.GAMMAREFLECTION = reflectionTexture.gammaSpace;
        defines.RGBDREFLECTION = reflectionTexture.isRGBD;
        defines.LODINREFLECTIONALPHA = reflectionTexture.lodLevelInAlpha;
        defines.LINEARSPECULARREFLECTION = reflectionTexture.linearSpecularLOD;
        defines.USEIRRADIANCEMAP = false;
        const engine = scene.getEngine();
        if (realTimeFiltering && realTimeFilteringQuality > 0) {
            defines.NUM_SAMPLES = "" + realTimeFilteringQuality;
            if (engine._features.needTypeSuffixInShaderConstants) {
                defines.NUM_SAMPLES = defines.NUM_SAMPLES + "u";
            }
            defines.REALTIME_FILTERING = true;
            if (scene.iblCdfGenerator) {
                defines.IBL_CDF_FILTERING = true;
            }
        } else {
            defines.REALTIME_FILTERING = false;
        }
        defines.INVERTCUBICMAP = reflectionTexture.coordinatesMode === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Texture"].INVCUBIC_MODE;
        defines.REFLECTIONMAP_3D = reflectionTexture.isCube;
        defines.REFLECTIONMAP_OPPOSITEZ = defines.REFLECTIONMAP_3D && scene.useRightHandedSystem ? !reflectionTexture.invertZ : reflectionTexture.invertZ;
        defines.REFLECTIONMAP_CUBIC = false;
        defines.REFLECTIONMAP_EXPLICIT = false;
        defines.REFLECTIONMAP_PLANAR = false;
        defines.REFLECTIONMAP_PROJECTION = false;
        defines.REFLECTIONMAP_SKYBOX = false;
        defines.REFLECTIONMAP_SPHERICAL = false;
        defines.REFLECTIONMAP_EQUIRECTANGULAR = false;
        defines.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = false;
        defines.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = false;
        switch(reflectionTexture.coordinatesMode){
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Texture"].EXPLICIT_MODE:
                defines.REFLECTIONMAP_EXPLICIT = true;
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Texture"].PLANAR_MODE:
                defines.REFLECTIONMAP_PLANAR = true;
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Texture"].PROJECTION_MODE:
                defines.REFLECTIONMAP_PROJECTION = true;
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Texture"].SKYBOX_MODE:
                defines.REFLECTIONMAP_SKYBOX = true;
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Texture"].SPHERICAL_MODE:
                defines.REFLECTIONMAP_SPHERICAL = true;
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Texture"].EQUIRECTANGULAR_MODE:
                defines.REFLECTIONMAP_EQUIRECTANGULAR = true;
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Texture"].FIXED_EQUIRECTANGULAR_MODE:
                defines.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = true;
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Texture"].FIXED_EQUIRECTANGULAR_MIRRORED_MODE:
                defines.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = true;
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Texture"].CUBIC_MODE:
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Texture"].INVCUBIC_MODE:
            default:
                defines.REFLECTIONMAP_CUBIC = true;
                defines.USE_LOCAL_REFLECTIONMAP_CUBIC = reflectionTexture.boundingBoxSize ? true : false;
                break;
        }
        if (reflectionTexture.coordinatesMode !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Texture"].SKYBOX_MODE) {
            if (reflectionTexture.irradianceTexture) {
                defines.USEIRRADIANCEMAP = true;
                defines.USESPHERICALFROMREFLECTIONMAP = false;
                defines.USESPHERICALINVERTEX = false;
                if (reflectionTexture.irradianceTexture._dominantDirection) {
                    defines.USE_IRRADIANCE_DOMINANT_DIRECTION = true;
                }
            } else if (reflectionTexture.isCube) {
                defines.USESPHERICALFROMREFLECTIONMAP = true;
                defines.USEIRRADIANCEMAP = false;
                defines.USE_IRRADIANCE_DOMINANT_DIRECTION = false;
                defines.USESPHERICALINVERTEX = forceSHInVertex;
            }
        }
    } else {
        defines.REFLECTION = false;
        defines.REFLECTIONMAP_3D = false;
        defines.REFLECTIONMAP_SPHERICAL = false;
        defines.REFLECTIONMAP_PLANAR = false;
        defines.REFLECTIONMAP_CUBIC = false;
        defines.USE_LOCAL_REFLECTIONMAP_CUBIC = false;
        defines.REFLECTIONMAP_PROJECTION = false;
        defines.REFLECTIONMAP_SKYBOX = false;
        defines.REFLECTIONMAP_EXPLICIT = false;
        defines.REFLECTIONMAP_EQUIRECTANGULAR = false;
        defines.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = false;
        defines.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = false;
        defines.INVERTCUBICMAP = false;
        defines.USESPHERICALFROMREFLECTIONMAP = false;
        defines.USEIRRADIANCEMAP = false;
        defines.USE_IRRADIANCE_DOMINANT_DIRECTION = false;
        defines.USESPHERICALINVERTEX = false;
        defines.REFLECTIONMAP_OPPOSITEZ = false;
        defines.LODINREFLECTIONALPHA = false;
        defines.GAMMAREFLECTION = false;
        defines.RGBDREFLECTION = false;
        defines.LINEARSPECULARREFLECTION = false;
    }
    return true;
}
function PrepareDefinesForLight(scene, mesh, light, lightIndex, defines, specularSupported, state) {
    state.needNormals = true;
    if (defines["LIGHT" + lightIndex] === undefined) {
        state.needRebuild = true;
    }
    defines["LIGHT" + lightIndex] = true;
    defines["SPOTLIGHT" + lightIndex] = false;
    defines["HEMILIGHT" + lightIndex] = false;
    defines["POINTLIGHT" + lightIndex] = false;
    defines["DIRLIGHT" + lightIndex] = false;
    defines["AREALIGHT" + lightIndex] = false;
    defines["CLUSTLIGHT" + lightIndex] = false;
    light.prepareLightSpecificDefines(defines, lightIndex);
    // FallOff.
    defines["LIGHT_FALLOFF_PHYSICAL" + lightIndex] = false;
    defines["LIGHT_FALLOFF_GLTF" + lightIndex] = false;
    defines["LIGHT_FALLOFF_STANDARD" + lightIndex] = false;
    switch(light.falloffType){
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$lightConstants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LightConstants"].FALLOFF_GLTF:
            defines["LIGHT_FALLOFF_GLTF" + lightIndex] = true;
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$lightConstants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LightConstants"].FALLOFF_PHYSICAL:
            defines["LIGHT_FALLOFF_PHYSICAL" + lightIndex] = true;
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$lightConstants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LightConstants"].FALLOFF_STANDARD:
            defines["LIGHT_FALLOFF_STANDARD" + lightIndex] = true;
            break;
    }
    // Specular
    if (specularSupported && !light.specular.equalsFloats(0, 0, 0)) {
        state.specularEnabled = true;
    }
    // Shadows
    defines["SHADOW" + lightIndex] = false;
    defines["SHADOWCSM" + lightIndex] = false;
    defines["SHADOWCSMDEBUG" + lightIndex] = false;
    defines["SHADOWCSMNUM_CASCADES" + lightIndex] = false;
    defines["SHADOWCSMUSESHADOWMAXZ" + lightIndex] = false;
    defines["SHADOWCSMNOBLEND" + lightIndex] = false;
    defines["SHADOWCSM_RIGHTHANDED" + lightIndex] = false;
    defines["SHADOWPCF" + lightIndex] = false;
    defines["SHADOWPCSS" + lightIndex] = false;
    defines["SHADOWPOISSON" + lightIndex] = false;
    defines["SHADOWESM" + lightIndex] = false;
    defines["SHADOWCLOSEESM" + lightIndex] = false;
    defines["SHADOWCUBE" + lightIndex] = false;
    defines["SHADOWLOWQUALITY" + lightIndex] = false;
    defines["SHADOWMEDIUMQUALITY" + lightIndex] = false;
    if (mesh && mesh.receiveShadows && scene.shadowsEnabled && light.shadowEnabled) {
        const shadowGenerator = light.getShadowGenerator(scene.activeCamera) ?? light.getShadowGenerator();
        if (shadowGenerator) {
            const shadowMap = shadowGenerator.getShadowMap();
            if (shadowMap) {
                if (shadowMap.renderList && shadowMap.renderList.length > 0) {
                    state.shadowEnabled = true;
                    shadowGenerator.prepareDefines(defines, lightIndex);
                }
            }
        }
    }
    if (light.lightmapMode != __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$lightConstants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LightConstants"].LIGHTMAP_DEFAULT) {
        state.lightmapMode = true;
        defines["LIGHTMAPEXCLUDED" + lightIndex] = true;
        defines["LIGHTMAPNOSPECULAR" + lightIndex] = light.lightmapMode == __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Lights$2f$lightConstants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LightConstants"].LIGHTMAP_SHADOWSONLY;
    } else {
        defines["LIGHTMAPEXCLUDED" + lightIndex] = false;
        defines["LIGHTMAPNOSPECULAR" + lightIndex] = false;
    }
}
function PrepareDefinesForFrameBoundValues(scene, engine, material, defines, useInstances, useClipPlane = null, useThinInstances = false) {
    let changed = PrepareDefinesForCamera(scene, defines);
    if (useClipPlane !== false) {
        changed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$clipPlaneMaterialHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PrepareDefinesForClipPlanes"])(material, scene, defines);
    }
    if (defines["DEPTHPREPASS"] !== !engine.getColorWrite()) {
        defines["DEPTHPREPASS"] = !defines["DEPTHPREPASS"];
        changed = true;
    }
    if (defines["INSTANCES"] !== useInstances) {
        defines["INSTANCES"] = useInstances;
        changed = true;
    }
    if (defines["THIN_INSTANCES"] !== useThinInstances) {
        defines["THIN_INSTANCES"] = useThinInstances;
        changed = true;
    }
    if (changed) {
        defines.markAsUnprocessed();
    }
}
function PrepareDefinesForBones(mesh, defines) {
    if (mesh.useBones && mesh.computeBonesUsingShaders && mesh.skeleton) {
        defines["NUM_BONE_INFLUENCERS"] = mesh.numBoneInfluencers;
        const materialSupportsBoneTexture = defines["BONETEXTURE"] !== undefined;
        if (mesh.skeleton.isUsingTextureForMatrices && materialSupportsBoneTexture) {
            defines["BONETEXTURE"] = true;
        } else {
            defines["BonesPerMesh"] = mesh.skeleton.bones.length + 1;
            defines["BONETEXTURE"] = materialSupportsBoneTexture ? false : undefined;
            const prePassRenderer = mesh.getScene().prePassRenderer;
            if (prePassRenderer && prePassRenderer.enabled) {
                const nonExcluded = prePassRenderer.excludedSkinnedMesh.indexOf(mesh) === -1;
                defines["BONES_VELOCITY_ENABLED"] = nonExcluded;
            }
        }
    } else {
        defines["NUM_BONE_INFLUENCERS"] = 0;
        defines["BonesPerMesh"] = 0;
        if (defines["BONETEXTURE"] !== undefined) {
            defines["BONETEXTURE"] = false;
        }
    }
}
function PrepareDefinesForMorphTargets(mesh, defines) {
    const manager = mesh.morphTargetManager;
    if (manager) {
        defines["MORPHTARGETS_UV"] = manager.supportsUVs && defines["UV1"];
        defines["MORPHTARGETS_UV2"] = manager.supportsUV2s && defines["UV2"];
        defines["MORPHTARGETS_TANGENT"] = manager.supportsTangents && defines["TANGENT"];
        defines["MORPHTARGETS_NORMAL"] = manager.supportsNormals && defines["NORMAL"];
        defines["MORPHTARGETS_POSITION"] = manager.supportsPositions;
        defines["MORPHTARGETS_COLOR"] = manager.supportsColors;
        defines["MORPHTARGETTEXTURE_HASUVS"] = manager.hasUVs;
        defines["MORPHTARGETTEXTURE_HASUV2S"] = manager.hasUV2s;
        defines["MORPHTARGETTEXTURE_HASTANGENTS"] = manager.hasTangents;
        defines["MORPHTARGETTEXTURE_HASNORMALS"] = manager.hasNormals;
        defines["MORPHTARGETTEXTURE_HASPOSITIONS"] = manager.hasPositions;
        defines["MORPHTARGETTEXTURE_HASCOLORS"] = manager.hasColors;
        defines["NUM_MORPH_INFLUENCERS"] = manager.numMaxInfluencers || manager.numInfluencers;
        defines["MORPHTARGETS"] = defines["NUM_MORPH_INFLUENCERS"] > 0;
        defines["MORPHTARGETS_TEXTURE"] = manager.isUsingTextureForTargets;
    } else {
        defines["MORPHTARGETS_UV"] = false;
        defines["MORPHTARGETS_UV2"] = false;
        defines["MORPHTARGETS_TANGENT"] = false;
        defines["MORPHTARGETS_NORMAL"] = false;
        defines["MORPHTARGETS_POSITION"] = false;
        defines["MORPHTARGETS_COLOR"] = false;
        defines["MORPHTARGETTEXTURE_HASUVS"] = false;
        defines["MORPHTARGETTEXTURE_HASUV2S"] = false;
        defines["MORPHTARGETTEXTURE_HASTANGENTS"] = false;
        defines["MORPHTARGETTEXTURE_HASNORMALS"] = false;
        defines["MORPHTARGETTEXTURE_HASPOSITIONS"] = false;
        defines["MORPHTARGETTEXTURE_HAS_COLORS"] = false;
        defines["MORPHTARGETS"] = false;
        defines["NUM_MORPH_INFLUENCERS"] = 0;
    }
}
function PrepareDefinesForBakedVertexAnimation(mesh, defines) {
    const manager = mesh.bakedVertexAnimationManager;
    defines["BAKED_VERTEX_ANIMATION_TEXTURE"] = manager && manager.isEnabled ? true : false;
}
function PrepareDefinesForAttributes(mesh, defines, useVertexColor, useBones, useMorphTargets = false, useVertexAlpha = true, useBakedVertexAnimation = true) {
    if (!defines._areAttributesDirty && defines._needNormals === defines._normals && defines._needUVs === defines._uvs) {
        return false;
    }
    defines._normals = defines._needNormals;
    defines._uvs = defines._needUVs;
    defines["NORMAL"] = defines._needNormals && mesh.isVerticesDataPresent(`normal`);
    if (defines._needNormals && mesh.isVerticesDataPresent(`tangent`)) {
        defines["TANGENT"] = true;
    }
    for(let i = 1; i <= 6; ++i){
        defines["UV" + i] = defines._needUVs ? mesh.isVerticesDataPresent(`uv${i === 1 ? "" : i}`) : false;
    }
    if (useVertexColor) {
        const hasVertexColors = mesh.useVertexColors && mesh.isVerticesDataPresent(`color`);
        defines["VERTEXCOLOR"] = hasVertexColors;
        defines["VERTEXALPHA"] = mesh.hasVertexAlpha && hasVertexColors && useVertexAlpha;
    }
    if (mesh.isVerticesDataPresent(`instanceColor`) && (mesh.hasInstances || mesh.hasThinInstances)) {
        defines["INSTANCESCOLOR"] = true;
    }
    if (useBones) {
        PrepareDefinesForBones(mesh, defines);
    }
    if (useMorphTargets) {
        PrepareDefinesForMorphTargets(mesh, defines);
    }
    if (useBakedVertexAnimation) {
        PrepareDefinesForBakedVertexAnimation(mesh, defines);
    }
    return true;
}
function PrepareDefinesForMultiview(scene, defines) {
    if (scene.activeCamera) {
        const previousMultiview = defines.MULTIVIEW;
        defines.MULTIVIEW = scene.activeCamera.outputRenderTarget !== null && scene.activeCamera.outputRenderTarget.getViewCount() > 1;
        if (defines.MULTIVIEW != previousMultiview) {
            defines.markAsUnprocessed();
        }
    }
}
function PrepareDefinesForOIT(scene, defines, needAlphaBlending) {
    const previousDefine = defines.ORDER_INDEPENDENT_TRANSPARENCY;
    const previousDefine16Bits = defines.ORDER_INDEPENDENT_TRANSPARENCY_16BITS;
    defines.ORDER_INDEPENDENT_TRANSPARENCY = scene.useOrderIndependentTransparency && needAlphaBlending;
    defines.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !scene.getEngine().getCaps().textureFloatLinearFiltering;
    if (previousDefine !== defines.ORDER_INDEPENDENT_TRANSPARENCY || previousDefine16Bits !== defines.ORDER_INDEPENDENT_TRANSPARENCY_16BITS) {
        defines.markAsUnprocessed();
    }
}
function PrepareDefinesForPrePass(scene, defines, canRenderToMRT) {
    const previousPrePass = defines.PREPASS;
    if (!defines._arePrePassDirty) {
        return;
    }
    const texturesList = [
        {
            type: 1,
            define: "PREPASS_POSITION",
            index: "PREPASS_POSITION_INDEX"
        },
        {
            type: 9,
            define: "PREPASS_LOCAL_POSITION",
            index: "PREPASS_LOCAL_POSITION_INDEX"
        },
        {
            type: 2,
            define: "PREPASS_VELOCITY",
            index: "PREPASS_VELOCITY_INDEX"
        },
        {
            type: 11,
            define: "PREPASS_VELOCITY_LINEAR",
            index: "PREPASS_VELOCITY_LINEAR_INDEX"
        },
        {
            type: 3,
            define: "PREPASS_REFLECTIVITY",
            index: "PREPASS_REFLECTIVITY_INDEX"
        },
        {
            type: 0,
            define: "PREPASS_IRRADIANCE",
            index: "PREPASS_IRRADIANCE_INDEX"
        },
        {
            type: 7,
            define: "PREPASS_ALBEDO_SQRT",
            index: "PREPASS_ALBEDO_SQRT_INDEX"
        },
        {
            type: 5,
            define: "PREPASS_DEPTH",
            index: "PREPASS_DEPTH_INDEX"
        },
        {
            type: 10,
            define: "PREPASS_SCREENSPACE_DEPTH",
            index: "PREPASS_SCREENSPACE_DEPTH_INDEX"
        },
        {
            type: 6,
            define: "PREPASS_NORMAL",
            index: "PREPASS_NORMAL_INDEX"
        },
        {
            type: 8,
            define: "PREPASS_WORLD_NORMAL",
            index: "PREPASS_WORLD_NORMAL_INDEX"
        }
    ];
    if (scene.prePassRenderer && scene.prePassRenderer.enabled && canRenderToMRT) {
        defines.PREPASS = true;
        defines.SCENE_MRT_COUNT = scene.prePassRenderer.mrtCount;
        defines.PREPASS_NORMAL_WORLDSPACE = scene.prePassRenderer.generateNormalsInWorldSpace;
        defines.PREPASS_COLOR = true;
        defines.PREPASS_COLOR_INDEX = 0;
        for(let i = 0; i < texturesList.length; i++){
            const index = scene.prePassRenderer.getIndex(texturesList[i].type);
            if (index !== -1) {
                defines[texturesList[i].define] = true;
                defines[texturesList[i].index] = index;
            } else {
                defines[texturesList[i].define] = false;
            }
        }
    } else {
        defines.PREPASS = false;
        for(let i = 0; i < texturesList.length; i++){
            defines[texturesList[i].define] = false;
        }
    }
    if (defines.PREPASS != previousPrePass) {
        defines.markAsUnprocessed();
        defines.markAsImageProcessingDirty();
    }
}
function PrepareDefinesForCamera(scene, defines) {
    let changed = false;
    if (scene.activeCamera) {
        const wasOrtho = defines["CAMERA_ORTHOGRAPHIC"] ? 1 : 0;
        const wasPersp = defines["CAMERA_PERSPECTIVE"] ? 1 : 0;
        const isOrtho = scene.activeCamera.mode === 1 ? 1 : 0;
        const isPersp = scene.activeCamera.mode === 0 ? 1 : 0;
        if (wasOrtho ^ isOrtho || wasPersp ^ isPersp) {
            defines["CAMERA_ORTHOGRAPHIC"] = isOrtho === 1;
            defines["CAMERA_PERSPECTIVE"] = isPersp === 1;
            changed = true;
        }
    }
    return changed;
}
function PrepareUniformsAndSamplersForLight(lightIndex, uniformsList, samplersList, projectedLightTexture, uniformBuffersList = null, updateOnlyBuffersList = false, iesLightTexture = false, clusteredLightTextures = false) {
    if (uniformBuffersList) {
        uniformBuffersList.push("Light" + lightIndex);
    }
    if (updateOnlyBuffersList) {
        return;
    }
    uniformsList.push("vLightData" + lightIndex, "vLightDiffuse" + lightIndex, "vLightSpecular" + lightIndex, "vLightDirection" + lightIndex, "vLightWidth" + lightIndex, "vLightHeight" + lightIndex, "vLightFalloff" + lightIndex, "vLightGround" + lightIndex, "vSliceData" + lightIndex, "vSliceRanges" + lightIndex, "lightMatrix" + lightIndex, "shadowsInfo" + lightIndex, "depthValues" + lightIndex);
    samplersList.push("shadowTexture" + lightIndex);
    samplersList.push("depthTexture" + lightIndex);
    uniformsList.push("viewFrustumZ" + lightIndex, "cascadeBlendFactor" + lightIndex, "lightSizeUVCorrection" + lightIndex, "depthCorrection" + lightIndex, "penumbraDarkness" + lightIndex, "frustumLengths" + lightIndex);
    if (projectedLightTexture) {
        samplersList.push("projectionLightTexture" + lightIndex);
        uniformsList.push("textureProjectionMatrix" + lightIndex);
    }
    if (iesLightTexture) {
        samplersList.push("iesLightTexture" + lightIndex);
    }
    if (clusteredLightTextures) {
        samplersList.push("lightDataTexture" + lightIndex);
        samplersList.push("tileMaskTexture" + lightIndex);
    }
}
function PrepareUniformsAndSamplersForIBL(uniformsList, samplersList, useSH) {
    const iblUniforms = [
        "vReflectionMicrosurfaceInfos",
        "vReflectionDominantDirection",
        "reflectionMatrix",
        "vReflectionInfos",
        "vReflectionPosition",
        "vReflectionSize",
        "vReflectionColor",
        "vReflectionFilteringInfo"
    ];
    if (useSH) {
        iblUniforms.push("vSphericalX", "vSphericalY", "vSphericalZ", "vSphericalXX_ZZ", "vSphericalYY_ZZ", "vSphericalZZ", "vSphericalXY", "vSphericalYZ", "vSphericalZX", "vSphericalL00", "vSphericalL1_1", "vSphericalL10", "vSphericalL11", "vSphericalL2_2", "vSphericalL2_1", "vSphericalL20", "vSphericalL21", "vSphericalL22");
    }
    uniformsList.push(...iblUniforms);
    const iblSamplers = [
        "reflectionSampler",
        "reflectionSamplerLow",
        "reflectionSamplerHigh",
        "irradianceSampler",
        "icdfSampler"
    ];
    samplersList.push(...iblSamplers);
}
function PrepareUniformsAndSamplersList(uniformsListOrOptions, samplersList, defines, maxSimultaneousLights = 4) {
    let uniformsList;
    let uniformBuffersList;
    if (uniformsListOrOptions.uniformsNames) {
        const options = uniformsListOrOptions;
        uniformsList = options.uniformsNames;
        uniformBuffersList = options.uniformBuffersNames;
        samplersList = options.samplers;
        defines = options.defines;
        maxSimultaneousLights = options.maxSimultaneousLights || 0;
    } else {
        uniformsList = uniformsListOrOptions;
        if (!samplersList) {
            samplersList = [];
        }
    }
    for(let lightIndex = 0; lightIndex < maxSimultaneousLights; lightIndex++){
        if (!defines["LIGHT" + lightIndex]) {
            break;
        }
        PrepareUniformsAndSamplersForLight(lightIndex, uniformsList, samplersList, defines["PROJECTEDLIGHTTEXTURE" + lightIndex], uniformBuffersList, false, defines["IESLIGHTTEXTURE" + lightIndex], defines["CLUSTLIGHT" + lightIndex]);
    }
    if (defines["NUM_MORPH_INFLUENCERS"]) {
        uniformsList.push("morphTargetInfluences");
        uniformsList.push("morphTargetCount");
    }
    if (defines["BAKED_VERTEX_ANIMATION_TEXTURE"]) {
        uniformsList.push("bakedVertexAnimationSettings");
        uniformsList.push("bakedVertexAnimationTextureSizeInverted");
        uniformsList.push("bakedVertexAnimationTime");
        samplersList.push("bakedVertexAnimationTexture");
    }
}
function PrepareUniformLayoutForIBL(ubo, supportTextureInfo = false, supportLocalProjection = false, usePBR = false, supportSH = false, useColor = false) {
    ubo.addUniform("vReflectionInfos", 2);
    ubo.addUniform("reflectionMatrix", 16);
    if (supportTextureInfo) {
        ubo.addUniform("vReflectionMicrosurfaceInfos", 3);
    }
    if (supportLocalProjection) {
        ubo.addUniform("vReflectionPosition", 3);
        ubo.addUniform("vReflectionSize", 3);
    }
    if (usePBR) {
        ubo.addUniform("vReflectionFilteringInfo", 2);
        ubo.addUniform("vReflectionDominantDirection", 3);
    }
    if (useColor) {
        ubo.addUniform("vReflectionColor", 3);
    }
    if (supportSH) {
        ubo.addUniform("vSphericalL00", 3);
        ubo.addUniform("vSphericalL1_1", 3);
        ubo.addUniform("vSphericalL10", 3);
        ubo.addUniform("vSphericalL11", 3);
        ubo.addUniform("vSphericalL2_2", 3);
        ubo.addUniform("vSphericalL2_1", 3);
        ubo.addUniform("vSphericalL20", 3);
        ubo.addUniform("vSphericalL21", 3);
        ubo.addUniform("vSphericalL22", 3);
        ubo.addUniform("vSphericalX", 3);
        ubo.addUniform("vSphericalY", 3);
        ubo.addUniform("vSphericalZ", 3);
        ubo.addUniform("vSphericalXX_ZZ", 3);
        ubo.addUniform("vSphericalYY_ZZ", 3);
        ubo.addUniform("vSphericalZZ", 3);
        ubo.addUniform("vSphericalXY", 3);
        ubo.addUniform("vSphericalYZ", 3);
        ubo.addUniform("vSphericalZX", 3);
    }
} //# sourceMappingURL=materialHelper.functions.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialStencilState.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MaterialStencilState",
    ()=>MaterialStencilState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/decorators.serialization.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/decorators.js [app-ssr] (ecmascript)");
;
;
;
class MaterialStencilState {
    /**
     * Creates a material stencil state instance
     */ constructor(){
        this.reset();
    }
    /**
     * Resets all the stencil states to default values
     */ reset() {
        this.enabled = false;
        this.mask = 0xff;
        this.funcRef = 1;
        this.funcMask = 0xff;
        this.func = 519;
        this.opStencilFail = 7680;
        this.opDepthFail = 7680;
        this.opStencilDepthPass = 7681;
        this.backFunc = 519;
        this.backOpStencilFail = 7680;
        this.backOpDepthFail = 7680;
        this.backOpStencilDepthPass = 7681;
    }
    /**
     * Gets or sets the stencil function
     */ get func() {
        return this._func;
    }
    set func(value) {
        this._func = value;
    }
    /**
     * Gets or sets the stencil back function
     */ get backFunc() {
        return this._backFunc;
    }
    set backFunc(value) {
        this._backFunc = value;
    }
    /**
     * Gets or sets the stencil function reference
     */ get funcRef() {
        return this._funcRef;
    }
    set funcRef(value) {
        this._funcRef = value;
    }
    /**
     * Gets or sets the stencil function mask
     */ get funcMask() {
        return this._funcMask;
    }
    set funcMask(value) {
        this._funcMask = value;
    }
    /**
     * Gets or sets the operation when the stencil test fails
     */ get opStencilFail() {
        return this._opStencilFail;
    }
    set opStencilFail(value) {
        this._opStencilFail = value;
    }
    /**
     * Gets or sets the operation when the depth test fails
     */ get opDepthFail() {
        return this._opDepthFail;
    }
    set opDepthFail(value) {
        this._opDepthFail = value;
    }
    /**
     * Gets or sets the operation when the stencil+depth test succeeds
     */ get opStencilDepthPass() {
        return this._opStencilDepthPass;
    }
    set opStencilDepthPass(value) {
        this._opStencilDepthPass = value;
    }
    /**
     * Gets or sets the operation when the back stencil test fails
     */ get backOpStencilFail() {
        return this._backOpStencilFail;
    }
    set backOpStencilFail(value) {
        this._backOpStencilFail = value;
    }
    /**
     * Gets or sets the operation when the back depth test fails
     */ get backOpDepthFail() {
        return this._backOpDepthFail;
    }
    set backOpDepthFail(value) {
        this._backOpDepthFail = value;
    }
    /**
     * Gets or sets the operation when the back stencil+depth test succeeds
     */ get backOpStencilDepthPass() {
        return this._backOpStencilDepthPass;
    }
    set backOpStencilDepthPass(value) {
        this._backOpStencilDepthPass = value;
    }
    /**
     * Gets or sets the stencil mask
     */ get mask() {
        return this._mask;
    }
    set mask(value) {
        this._mask = value;
    }
    /**
     * Enables or disables the stencil test
     */ get enabled() {
        return this._enabled;
    }
    set enabled(value) {
        this._enabled = value;
    }
    /**
     * Get the current class name, useful for serialization or dynamic coding.
     * @returns "MaterialStencilState"
     */ getClassName() {
        return "MaterialStencilState";
    }
    /**
     * Makes a duplicate of the current configuration into another one.
     * @param stencilState defines stencil state where to copy the info
     */ copyTo(stencilState) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SerializationHelper"].Clone(()=>stencilState, this);
    }
    /**
     * Serializes this stencil configuration.
     * @returns - An object with the serialized config.
     */ serialize() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SerializationHelper"].Serialize(this);
    }
    /**
     * Parses a stencil state configuration from a serialized object.
     * @param source - Serialized object.
     * @param scene Defines the scene we are parsing for
     * @param rootUrl Defines the rootUrl to load from
     */ parse(source, scene, rootUrl) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SerializationHelper"].Parse(()=>this, source, scene, rootUrl);
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], MaterialStencilState.prototype, "func", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], MaterialStencilState.prototype, "backFunc", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], MaterialStencilState.prototype, "funcRef", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], MaterialStencilState.prototype, "funcMask", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], MaterialStencilState.prototype, "opStencilFail", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], MaterialStencilState.prototype, "opDepthFail", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], MaterialStencilState.prototype, "opStencilDepthPass", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], MaterialStencilState.prototype, "backOpStencilFail", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], MaterialStencilState.prototype, "backOpDepthFail", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], MaterialStencilState.prototype, "backOpStencilDepthPass", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], MaterialStencilState.prototype, "mask", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], MaterialStencilState.prototype, "enabled", null); //# sourceMappingURL=materialStencilState.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/material.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Material",
    ()=>Material
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/decorators.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/tools.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/engineStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$subMesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/subMesh.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$uniformBuffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/uniformBuffer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$plane$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.plane.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$drawWrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/drawWrapper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialStencilState$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialStencilState.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialHelper.functions.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/decorators.serialization.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$drawWrapper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/drawWrapper.functions.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
class Material {
    /**
     * Tells the engine to draw geometry using vertex pulling instead of index drawing. This will automatically
     * set the vertex buffers as storage buffers and make them accessible to the vertex shader (WebGPU only).
     */ get useVertexPulling() {
        return this._useVertexPulling;
    }
    set useVertexPulling(value) {
        if (this._useVertexPulling === value) {
            return;
        }
        this._useVertexPulling = value;
        this.markAsDirty(Material.MiscDirtyFlag);
    }
    /** @internal */ get _supportGlowLayer() {
        return false;
    }
    /** @internal */ set _glowModeEnabled(value) {
    // Do nothing here
    }
    /**
     * Gets the shader language used in this material.
     */ get shaderLanguage() {
        return this._shaderLanguage;
    }
    /**
     * If the material can be rendered to several textures with MRT extension
     */ get canRenderToMRT() {
        // By default, shaders are not compatible with MRTs
        // Base classes should override that if their shader supports MRT
        return false;
    }
    /**
     * Sets the alpha value of the material
     */ set alpha(value) {
        if (this._alpha === value) {
            return;
        }
        const oldValue = this._alpha;
        this._alpha = value;
        // Only call dirty when there is a state change (no alpha / alpha)
        if (oldValue === 1 || value === 1) {
            this.markAsDirty(Material.MiscDirtyFlag + Material.PrePassDirtyFlag);
        }
    }
    /**
     * Gets the alpha value of the material
     */ get alpha() {
        return this._alpha;
    }
    /**
     * Sets the culling state (true to enable culling, false to disable)
     */ set backFaceCulling(value) {
        if (this._backFaceCulling === value) {
            return;
        }
        this._backFaceCulling = value;
        this.markAsDirty(Material.TextureDirtyFlag);
    }
    /**
     * Gets the culling state
     */ get backFaceCulling() {
        return this._backFaceCulling;
    }
    /**
     * Sets the type of faces that should be culled (true for back faces, false for front faces)
     */ set cullBackFaces(value) {
        if (this._cullBackFaces === value) {
            return;
        }
        this._cullBackFaces = value;
        this.markAsDirty(Material.TextureDirtyFlag);
    }
    /**
     * Gets the type of faces that should be culled
     */ get cullBackFaces() {
        return this._cullBackFaces;
    }
    /**
     * Block the dirty-mechanism for this specific material
     * When set to false after being true the material will be marked as dirty.
     */ get blockDirtyMechanism() {
        return this._blockDirtyMechanism;
    }
    set blockDirtyMechanism(value) {
        if (this._blockDirtyMechanism === value) {
            return;
        }
        this._blockDirtyMechanism = value;
        if (!value) {
            this.markDirty();
        }
    }
    /**
     * This allows you to modify the material without marking it as dirty after every change.
     * This function should be used if you need to make more than one dirty-enabling change to the material - adding a texture, setting a new fill mode and so on.
     * The callback will pass the material as an argument, so you can make your changes to it.
     * @param callback the callback to be executed that will update the material
     */ atomicMaterialsUpdate(callback) {
        this.blockDirtyMechanism = true;
        try {
            callback(this);
        } finally{
            this.blockDirtyMechanism = false;
        }
    }
    /**
     * Gets a boolean indicating that current material needs to register RTT
     */ get hasRenderTargetTextures() {
        this._eventInfo.hasRenderTargetTextures = false;
        this._callbackPluginEventHasRenderTargetTextures(this._eventInfo);
        return this._eventInfo.hasRenderTargetTextures;
    }
    /**
     * Called during a dispose event
     */ set onDispose(callback) {
        if (this._onDisposeObserver) {
            this.onDisposeObservable.remove(this._onDisposeObserver);
        }
        this._onDisposeObserver = this.onDisposeObservable.add(callback);
    }
    /**
     * An event triggered when the material is bound
     */ get onBindObservable() {
        if (!this._onBindObservable) {
            this._onBindObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        }
        return this._onBindObservable;
    }
    /**
     * Called during a bind event
     */ set onBind(callback) {
        if (this._onBindObserver) {
            this.onBindObservable.remove(this._onBindObserver);
        }
        this._onBindObserver = this.onBindObservable.add(callback);
    }
    /**
     * An event triggered when the material is unbound
     */ get onUnBindObservable() {
        if (!this._onUnBindObservable) {
            this._onUnBindObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        }
        return this._onUnBindObservable;
    }
    /**
     * An event triggered when the effect is (re)created
     */ get onEffectCreatedObservable() {
        if (!this._onEffectCreatedObservable) {
            this._onEffectCreatedObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        }
        return this._onEffectCreatedObservable;
    }
    /**
     * Sets the value of the alpha mode.
     *
     * | Value | Type | Description |
     * | --- | --- | --- |
     * | 0 | ALPHA_DISABLE |  |
     * | 1 | ALPHA_ADD | Defines that alpha blending is COLOR=SRC_ALPHA * SRC + DEST, ALPHA=DEST_ALPHA |
     * | 2 | ALPHA_COMBINE | Defines that alpha blending is COLOR=SRC_ALPHA * SRC + (1 - SRC_ALPHA) * DEST, ALPHA=SRC_ALPHA + DEST_ALPHA |
     * | 3 | ALPHA_SUBTRACT | Defines that alpha blending is COLOR=(1 - SRC) * DEST, ALPHA=SRC_ALPHA - DEST_ALPHA |
     * | 4 | ALPHA_MULTIPLY | Defines that alpha blending is COLOR=DEST * SRC, ALPHA=SRC_ALPHA + DEST_ALPHA |
     * | 5 | ALPHA_MAXIMIZED | Defines that alpha blending is COLOR=SRC_ALPHA * SRC + (1 - SRC) * DEST, ALPHA=SRC_ALPHA + DEST_ALPHA |
     * | 6 | ALPHA_ONEONE | Defines that alpha blending is COLOR=SRC + DEST, ALPHA=DEST_ALPHA |
     * | 7 | ALPHA_PREMULTIPLIED | Defines that alpha blending is COLOR=SRC + (1 - SRC_ALPHA) * DEST, ALPHA=SRC_ALPHA + DEST_ALPHA |
     * | 8 | ALPHA_PREMULTIPLIED_PORTERDUFF | Defines that alpha blending is COLOR=SRC + (1 - SRC_ALPHA) * DEST, ALPHA=SRC_ALPHA + (1 - SRC_ALPHA) * DEST_ALPHA |
     * | 9 | ALPHA_INTERPOLATE | Defines that alpha blending is COLOR=CST * SRC + (1 - CST) * DEST, ALPHA=CST_ALPHA * SRC + (1 - CST_ALPHA) * DEST_ALPHA |
     * | 10 | ALPHA_SCREENMODE | Defines that alpha blending is COLOR=SRC + (1 - SRC) * DEST, ALPHA=SRC_ALPHA + (1 - SRC_ALPHA) * DEST_ALPHA |
     * | 11 | ALPHA_ONEONE_ONEONE | Defines that alpha blending is COLOR=SRC + DST, ALPHA=SRC_ALPHA + DEST_ALPHA |
     * | 12 | ALPHA_ALPHATOCOLOR | Defines that alpha blending is COLOR=DEST_ALPHA * SRC + DST, ALPHA=0 |
     * | 13 | ALPHA_REVERSEONEMINUS | Defines that alpha blending is COLOR=(1 - DEST) * SRC + (1 - SRC) * DEST, ALPHA=(1 - DEST_ALPHA) * SRC_ALPHA + (1 - SRC_ALPHA) * DEST_ALPHA |
     * | 14 | ALPHA_SRC_DSTONEMINUSSRCALPHA | Defines that alpha blending is ALPHA=SRC + (1 - SRC ALPHA) * DEST, ALPHA=SRC_ALPHA + (1 - SRC ALPHA) * DEST_ALPHA |
     * | 15 | ALPHA_ONEONE_ONEZERO | Defines that alpha blending is COLOR=SRC + DST, ALPHA=SRC_ALPHA |
     * | 16 | ALPHA_EXCLUSION | Defines that alpha blending is COLOR=(1 - DEST) * SRC + (1 - SRC) * DEST, ALPHA=DEST_ALPHA |
     * | 17 | ALPHA_LAYER_ACCUMULATE | Defines that alpha blending is COLOR=SRC_ALPHA * SRC + (1 - SRC ALPHA) * DEST, ALPHA=SRC_ALPHA + (1 - SRC_ALPHA) * DEST_ALPHA |
     * | 18 | ALPHA_MIN | Defines that alpha blending is COLOR=MIN(SRC, DEST), ALPHA=MIN(SRC_ALPHA, DEST_ALPHA) |
     * | 19 | ALPHA_MAX | Defines that alpha blending is COLOR=MAX(SRC, DEST), ALPHA=MAX(SRC_ALPHA, DEST_ALPHA) |
     * | 20 | ALPHA_DUAL_SRC0_ADD_SRC1xDST | Defines that alpha blending uses dual source blending and is COLOR=SRC + SRC1 * DEST, ALPHA=DST_ALPHA |
     *
     */ set alphaMode(value) {
        if (this._alphaMode[0] === value) {
            return;
        }
        this._alphaMode[0] = value;
        this.markAsDirty(Material.TextureDirtyFlag);
    }
    /**
     * Gets the value of the alpha mode
     */ get alphaMode() {
        return this._alphaMode[0];
    }
    /**
     * Gets the list of alpha modes (length greater than 1 for multi-targets)
     */ get alphaModes() {
        return this._alphaMode;
    }
    /**
     * Sets the value of the alpha mode for a specific target index.
     * @param value The alpha mode value to set.
     * @param targetIndex The index of the target to set the alpha mode for. Defaults to 0.
     */ setAlphaMode(value, targetIndex = 0) {
        if (this._alphaMode[targetIndex] === value) {
            return;
        }
        this._alphaMode[targetIndex] = value;
        this.markAsDirty(Material.TextureDirtyFlag);
    }
    /**
     * Sets the need depth pre-pass value
     */ set needDepthPrePass(value) {
        if (this._needDepthPrePass === value) {
            return;
        }
        this._needDepthPrePass = value;
        if (this._needDepthPrePass) {
            this.checkReadyOnEveryCall = true;
        }
    }
    /**
     * Gets the depth pre-pass value
     */ get needDepthPrePass() {
        return this._needDepthPrePass;
    }
    /**
     * Can this material render to prepass
     */ get isPrePassCapable() {
        return false;
    }
    /**
     * Sets the state for enabling fog
     */ set fogEnabled(value) {
        if (this._fogEnabled === value) {
            return;
        }
        this._fogEnabled = value;
        this.markAsDirty(Material.MiscDirtyFlag);
    }
    /**
     * Gets the value of the fog enabled state
     */ get fogEnabled() {
        return this._fogEnabled;
    }
    get wireframe() {
        switch(this._fillMode){
            case Material.WireFrameFillMode:
            case Material.LineListDrawMode:
            case Material.LineLoopDrawMode:
            case Material.LineStripDrawMode:
                return true;
        }
        return this._scene.forceWireframe;
    }
    /**
     * Sets the state of wireframe mode
     */ set wireframe(value) {
        this.fillMode = value ? Material.WireFrameFillMode : Material.TriangleFillMode;
    }
    /**
     * Gets the value specifying if point clouds are enabled
     */ get pointsCloud() {
        switch(this._fillMode){
            case Material.PointFillMode:
            case Material.PointListDrawMode:
                return true;
        }
        return this._scene.forcePointsCloud;
    }
    /**
     * Sets the state of point cloud mode
     */ set pointsCloud(value) {
        this.fillMode = value ? Material.PointFillMode : Material.TriangleFillMode;
    }
    /**
     * Gets the material fill mode
     */ get fillMode() {
        return this._fillMode;
    }
    /**
     * Sets the material fill mode
     */ set fillMode(value) {
        if (this._fillMode === value) {
            return;
        }
        this._fillMode = value;
        this.markAsDirty(Material.MiscDirtyFlag);
    }
    /**
     * In case the depth buffer does not allow enough depth precision for your scene (might be the case in large scenes)
     * You can try switching to logarithmic depth.
     * @see https://doc.babylonjs.com/features/featuresDeepDive/materials/advanced/logarithmicDepthBuffer
     */ get useLogarithmicDepth() {
        return this._useLogarithmicDepth;
    }
    set useLogarithmicDepth(value) {
        const fragmentDepthSupported = this.getScene().getEngine().getCaps().fragmentDepthSupported;
        if (value && !fragmentDepthSupported) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn("Logarithmic depth has been requested for a material on a device that doesn't support it.");
        }
        this._useLogarithmicDepth = value && fragmentDepthSupported;
        this._markAllSubMeshesAsMiscDirty();
    }
    /**
     * Gets or sets the vertex output invariant state
     * Setting this property to true will force the shader compiler to disable some optimization to make sure the vertex output is always calculated
     * the same way across different compilation units.
     * You may need to enable this option if you are seeing some depth artifacts when using a depth pre-pass, for e.g.
     * Note that this may have an impact on performance, so leave this option disabled if not needed.
     */ get isVertexOutputInvariant() {
        return this._isVertexOutputInvariant;
    }
    set isVertexOutputInvariant(value) {
        if (this._isVertexOutputInvariant === value) {
            return;
        }
        this._isVertexOutputInvariant = value;
        this._markAllSubMeshesAsMiscDirty();
    }
    /** @internal */ _getDrawWrapper() {
        return this._drawWrapper;
    }
    /**
     * @internal
     */ _setDrawWrapper(drawWrapper) {
        this._drawWrapper = drawWrapper;
    }
    /**
     * Creates a material instance
     * @param name defines the name of the material
     * @param scene defines the scene to reference
     * @param doNotAdd specifies if the material should be added to the scene
     * @param forceGLSL Use the GLSL code generation for the shader (even on WebGPU). Default is false
     */ constructor(name, scene, doNotAdd, forceGLSL = false){
        /**
         * Custom shadow depth material to use for shadow rendering instead of the in-built one
         */ this.shadowDepthWrapper = null;
        /**
         * Gets or sets a boolean indicating that the material is allowed (if supported) to do shader hot swapping.
         * This means that the material can keep using a previous shader while a new one is being compiled.
         * This is mostly used when shader parallel compilation is supported (true by default)
         */ this.allowShaderHotSwapping = true;
        /** Shader language used by the material */ this._shaderLanguage = 0 /* ShaderLanguage.GLSL */ ;
        this._forceGLSL = false;
        this._useVertexPulling = false;
        /**
         * Gets or sets user defined metadata
         */ this.metadata = null;
        /**
         * For internal use only. Please do not use.
         */ this.reservedDataStore = null;
        /**
         * Specifies if the ready state should be checked on each call
         */ this.checkReadyOnEveryCall = false;
        /**
         * Specifies if the ready state should be checked once
         */ this.checkReadyOnlyOnce = false;
        /**
         * The state of the material
         */ this.state = "";
        /**
         * The alpha value of the material
         */ this._alpha = 1.0;
        /**
         * Specifies if back face culling is enabled
         */ this._backFaceCulling = true;
        /**
         * Specifies if back or front faces should be culled (when culling is enabled)
         */ this._cullBackFaces = true;
        this._blockDirtyMechanism = false;
        /**
         * Stores the value for side orientation
         */ this.sideOrientation = null;
        /**
         * Callback triggered when the material is compiled
         */ this.onCompiled = null;
        /**
         * Callback triggered when an error occurs
         */ this.onError = null;
        /**
         * Callback triggered to get the render target textures
         */ this.getRenderTargetTextures = null;
        /**
         * Specifies if the material should be serialized
         */ this.doNotSerialize = false;
        /**
         * @internal
         */ this._storeEffectOnSubMeshes = false;
        /**
         * Stores the animations for the material
         */ this.animations = null;
        /**
         * An event triggered when the material is disposed
         */ this.onDisposeObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * An observer which watches for dispose events
         */ this._onDisposeObserver = null;
        this._onUnBindObservable = null;
        /**
         * An observer which watches for bind events
         */ this._onBindObserver = null;
        /**
         * Stores the value of the alpha mode
         */ this._alphaMode = [
            2
        ];
        /**
         * Stores the state of the need depth pre-pass value
         */ this._needDepthPrePass = false;
        /**
         * Specifies if depth writing should be disabled
         */ this.disableDepthWrite = false;
        /**
         * Specifies if color writing should be disabled
         */ this.disableColorWrite = false;
        /**
         * Specifies if depth writing should be forced
         */ this.forceDepthWrite = false;
        /**
         * Specifies the depth function that should be used. 0 means the default engine function
         */ this.depthFunction = 0;
        /**
         * Specifies if there should be a separate pass for culling
         */ this.separateCullingPass = false;
        /**
         * Stores the state specifying if fog should be enabled
         */ this._fogEnabled = true;
        /**
         * Stores the size of points
         */ this.pointSize = 1.0;
        /**
         * Stores the z offset Factor value
         */ this.zOffset = 0;
        /**
         * Stores the z offset Units value
         */ this.zOffsetUnits = 0;
        /**
         * Gives access to the stencil properties of the material
         */ this.stencil = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialStencilState$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialStencilState"]();
        this._isVertexOutputInvariant = Material.ForceVertexOutputInvariant;
        /**
         * Specifies if uniform buffers should be used
         */ this._useUBO = false;
        /**
         * Stores the fill mode state
         */ this._fillMode = Material.TriangleFillMode;
        /**
         * Specifies if the depth write state should be cached
         */ this._cachedDepthWriteState = false;
        /**
         * Specifies if the color write state should be cached
         */ this._cachedColorWriteState = false;
        /**
         * Specifies if the depth function state should be cached
         */ this._cachedDepthFunctionState = 0;
        /** @internal */ this._indexInSceneMaterialArray = -1;
        /** @internal */ this.meshMap = null;
        /** @internal */ this._parentContainer = null;
        /** @internal */ this._uniformBufferLayoutBuilt = false;
        this._eventInfo = {}; // will be initialized before each event notification
        /** @internal */ this._callbackPluginEventGeneric = ()=>void 0;
        /** @internal */ this._callbackPluginEventIsReadyForSubMesh = ()=>void 0;
        /** @internal */ this._callbackPluginEventPrepareDefines = ()=>void 0;
        /** @internal */ this._callbackPluginEventPrepareDefinesBeforeAttributes = ()=>void 0;
        /** @internal */ this._callbackPluginEventHardBindForSubMesh = ()=>void 0;
        /** @internal */ this._callbackPluginEventBindForSubMesh = ()=>void 0;
        /** @internal */ this._callbackPluginEventHasRenderTargetTextures = ()=>void 0;
        /** @internal */ this._callbackPluginEventFillRenderTargetTextures = ()=>void 0;
        /**
         * The transparency mode of the material.
         */ this._transparencyMode = null;
        this.name = name;
        const setScene = scene || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EngineStore"].LastCreatedScene;
        if (!setScene) {
            return;
        }
        this._scene = setScene;
        this._dirtyCallbacks = {};
        this._forceGLSL = forceGLSL;
        this._dirtyCallbacks[1] = this._markAllSubMeshesAsTexturesDirty.bind(this);
        this._dirtyCallbacks[2] = this._markAllSubMeshesAsLightsDirty.bind(this);
        this._dirtyCallbacks[4] = this._markAllSubMeshesAsFresnelDirty.bind(this);
        this._dirtyCallbacks[8] = this._markAllSubMeshesAsAttributesDirty.bind(this);
        this._dirtyCallbacks[16] = this._markAllSubMeshesAsMiscDirty.bind(this);
        this._dirtyCallbacks[32] = this._markAllSubMeshesAsPrePassDirty.bind(this);
        this._dirtyCallbacks[127] = this._markAllSubMeshesAsAllDirty.bind(this);
        this.id = name || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tools"].RandomId();
        this.uniqueId = this._scene.getUniqueId();
        this._materialContext = this._scene.getEngine().createMaterialContext();
        this._drawWrapper = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$drawWrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DrawWrapper"](this._scene.getEngine(), false);
        this._drawWrapper.materialContext = this._materialContext;
        this._uniformBuffer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$uniformBuffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UniformBuffer"](this._scene.getEngine(), undefined, undefined, name);
        this._useUBO = this.getScene().getEngine().supportsUniformBuffers;
        this._createUniformBuffer();
        if (!doNotAdd) {
            this._scene.addMaterial(this);
        }
        if (this._scene.useMaterialMeshMap) {
            this.meshMap = {};
        }
        Material.OnEventObservable.notifyObservers(this, 1 /* MaterialPluginEvent.Created */ );
    }
    /** @internal */ _createUniformBuffer() {
        const engine = this.getScene().getEngine();
        this._uniformBuffer?.dispose();
        if (engine.isWebGPU && !this._forceGLSL) {
            // Switch main UBO to non UBO to connect to leftovers UBO in webgpu
            this._uniformBuffer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$uniformBuffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UniformBuffer"](engine, undefined, undefined, this.name, true);
            this._shaderLanguage = 1 /* ShaderLanguage.WGSL */ ;
        } else {
            this._uniformBuffer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$uniformBuffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UniformBuffer"](this._scene.getEngine(), undefined, undefined, this.name);
        }
        this._uniformBufferLayoutBuilt = false;
    }
    /**
     * Returns a string representation of the current material
     * @param fullDetails defines a boolean indicating which levels of logging is desired
     * @returns a string with material information
     */ // eslint-disable-next-line @typescript-eslint/no-unused-vars
    toString(fullDetails) {
        const ret = "Name: " + this.name;
        return ret;
    }
    /**
     * Gets the class name of the material
     * @returns a string with the class name of the material
     */ getClassName() {
        return "Material";
    }
    /** @internal */ get _isMaterial() {
        return true;
    }
    /**
     * Specifies if updates for the material been locked
     */ get isFrozen() {
        return this.checkReadyOnlyOnce;
    }
    /**
     * Locks updates for the material
     */ freeze() {
        this.markDirty();
        this.checkReadyOnlyOnce = true;
    }
    /**
     * Unlocks updates for the material
     */ unfreeze() {
        this.markDirty();
        this.checkReadyOnlyOnce = false;
    }
    /**
     * Specifies if the material is ready to be used
     * @param mesh defines the mesh to check
     * @param useInstances specifies if instances should be used
     * @returns a boolean indicating if the material is ready to be used
     */ // eslint-disable-next-line @typescript-eslint/no-unused-vars
    isReady(mesh, useInstances) {
        return true;
    }
    /**
     * Specifies that the submesh is ready to be used
     * @param mesh defines the mesh to check
     * @param subMesh defines which submesh to check
     * @param useInstances specifies that instances should be used
     * @returns a boolean indicating that the submesh is ready or not
     */ // eslint-disable-next-line @typescript-eslint/no-unused-vars
    isReadyForSubMesh(mesh, subMesh, useInstances) {
        const defines = subMesh.materialDefines;
        if (!defines) {
            return false;
        }
        this._eventInfo.isReadyForSubMesh = true;
        this._eventInfo.defines = defines;
        this._callbackPluginEventIsReadyForSubMesh(this._eventInfo);
        return this._eventInfo.isReadyForSubMesh;
    }
    /**
     * Returns the material effect
     * @returns the effect associated with the material
     */ getEffect() {
        return this._drawWrapper.effect;
    }
    /**
     * Returns the current scene
     * @returns a Scene
     */ getScene() {
        return this._scene;
    }
    /** @internal */ _getEffectiveOrientation(mesh) {
        return this.sideOrientation !== null ? this.sideOrientation : mesh.sideOrientation;
    }
    /**
     * Gets the current transparency mode.
     */ get transparencyMode() {
        return this._transparencyMode;
    }
    /**
     * Sets the transparency mode of the material.
     *
     * | Value | Type                                | Description |
     * | ----- | ----------------------------------- | ----------- |
     * | 0     | OPAQUE                              |             |
     * | 1     | ALPHATEST                           |             |
     * | 2     | ALPHABLEND                          |             |
     * | 3     | ALPHATESTANDBLEND                   |             |
     *
     */ set transparencyMode(value) {
        if (this._transparencyMode === value) {
            return;
        }
        this._transparencyMode = value;
        this._markAllSubMeshesAsTexturesAndMiscDirty();
    }
    get _hasTransparencyMode() {
        return this._transparencyMode != null;
    }
    get _transparencyModeIsBlend() {
        return this._transparencyMode === Material.MATERIAL_ALPHABLEND || this._transparencyMode === Material.MATERIAL_ALPHATESTANDBLEND;
    }
    get _transparencyModeIsTest() {
        return this._transparencyMode === Material.MATERIAL_ALPHATEST || this._transparencyMode === Material.MATERIAL_ALPHATESTANDBLEND;
    }
    /**
     * Returns true if alpha blending should be disabled.
     */ get _disableAlphaBlending() {
        return this._transparencyMode === Material.MATERIAL_OPAQUE || this._transparencyMode === Material.MATERIAL_ALPHATEST;
    }
    /**
     * Specifies whether or not this material should be rendered in alpha blend mode.
     * @returns a boolean specifying if alpha blending is needed
     * @deprecated Please use needAlphaBlendingForMesh instead
     */ needAlphaBlending() {
        if (this._hasTransparencyMode) {
            return this._transparencyModeIsBlend;
        }
        if (this._disableAlphaBlending) {
            return false;
        }
        return this.alpha < 1.0;
    }
    /**
     * Specifies if the mesh will require alpha blending
     * @param mesh defines the mesh to check
     * @returns a boolean specifying if alpha blending is needed for the mesh
     */ needAlphaBlendingForMesh(mesh) {
        if (this._hasTransparencyMode) {
            return this._transparencyModeIsBlend;
        }
        if (mesh.visibility < 1.0) {
            return true;
        }
        if (this._disableAlphaBlending) {
            return false;
        }
        return mesh.hasVertexAlpha || this.needAlphaBlending();
    }
    /**
     * Specifies whether or not this material should be rendered in alpha test mode.
     * @returns a boolean specifying if an alpha test is needed.
     * @deprecated Please use needAlphaTestingForMesh instead
     */ needAlphaTesting() {
        if (this._hasTransparencyMode) {
            return this._transparencyModeIsTest;
        }
        return false;
    }
    /**
     * Specifies if material alpha testing should be turned on for the mesh
     * @param mesh defines the mesh to check
     * @returns a boolean specifying if alpha testing should be turned on for the mesh
     */ needAlphaTestingForMesh(mesh) {
        if (this._hasTransparencyMode) {
            return this._transparencyModeIsTest;
        }
        return !this.needAlphaBlendingForMesh(mesh) && this.needAlphaTesting();
    }
    /**
     * Gets the texture used for the alpha test
     * @returns the texture to use for alpha testing
     */ getAlphaTestTexture() {
        return null;
    }
    /**
     * Marks the material to indicate that it needs to be re-calculated
     * @param forceMaterialDirty - Forces the material to be marked as dirty for all components (same as this.markAsDirty(Material.AllDirtyFlag)). You should use this flag if the material is frozen and you want to force a recompilation.
     */ markDirty(forceMaterialDirty = false) {
        const meshes = this.getScene().meshes;
        for (const mesh of meshes){
            if (!mesh.subMeshes) {
                continue;
            }
            for (const subMesh of mesh.subMeshes){
                if (subMesh.getMaterial() !== this) {
                    continue;
                }
                for (const drawWrapper of subMesh._drawWrappers){
                    if (!drawWrapper) {
                        continue;
                    }
                    if (this._materialContext === drawWrapper.materialContext) {
                        drawWrapper._wasPreviouslyReady = false;
                        drawWrapper._wasPreviouslyUsingInstances = null;
                        drawWrapper._forceRebindOnNextCall = forceMaterialDirty;
                    }
                }
            }
        }
        if (forceMaterialDirty) {
            this.markAsDirty(Material.AllDirtyFlag);
        }
    }
    /**
     * @internal
     */ _preBind(effect, overrideOrientation = null) {
        const engine = this._scene.getEngine();
        const orientation = overrideOrientation == null ? this.sideOrientation : overrideOrientation;
        const reverse = orientation === Material.ClockWiseSideOrientation;
        const effectiveDrawWrapper = effect ? effect : this._getDrawWrapper();
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$drawWrapper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IsWrapper"])(effectiveDrawWrapper) && effectiveDrawWrapper.materialContext) {
            effectiveDrawWrapper.materialContext.useVertexPulling = this.useVertexPulling;
        }
        engine.enableEffect(effectiveDrawWrapper);
        engine.setState(this.backFaceCulling, this.zOffset, false, reverse, this._scene._mirroredCameraPosition ? !this.cullBackFaces : this.cullBackFaces, this.stencil, this.zOffsetUnits);
        return reverse;
    }
    /**
     * Binds the material to the mesh
     * @param world defines the world transformation matrix
     * @param mesh defines the mesh to bind the material to
     */ // eslint-disable-next-line @typescript-eslint/no-unused-vars
    bind(world, mesh) {}
    /**
     * Initializes the uniform buffer layout for the shader.
     */ buildUniformLayout() {
        const ubo = this._uniformBuffer;
        this._eventInfo.ubo = ubo;
        this._callbackPluginEventGeneric(8 /* MaterialPluginEvent.PrepareUniformBuffer */ , this._eventInfo);
        ubo.create();
        this._uniformBufferLayoutBuilt = true;
    }
    /**
     * Binds the submesh to the material
     * @param world defines the world transformation matrix
     * @param mesh defines the mesh containing the submesh
     * @param subMesh defines the submesh to bind the material to
     */ bindForSubMesh(world, mesh, subMesh) {
        const drawWrapper = subMesh._drawWrapper;
        this._eventInfo.subMesh = subMesh;
        this._callbackPluginEventBindForSubMesh(this._eventInfo);
        drawWrapper._forceRebindOnNextCall = false;
    }
    /**
     * Binds the world matrix to the material
     * @param world defines the world transformation matrix
     */ // eslint-disable-next-line @typescript-eslint/no-unused-vars
    bindOnlyWorldMatrix(world) {}
    /**
     * Binds the view matrix to the effect
     * @param effect defines the effect to bind the view matrix to
     */ bindView(effect) {
        if (!this._useUBO) {
            effect.setMatrix("view", this.getScene().getViewMatrix());
        } else {
            this._needToBindSceneUbo = true;
        }
    }
    /**
     * Binds the view projection and projection matrices to the effect
     * @param effect defines the effect to bind the view projection and projection matrices to
     */ bindViewProjection(effect) {
        if (!this._useUBO) {
            effect.setMatrix("viewProjection", this.getScene().getTransformMatrix());
            effect.setMatrix("projection", this.getScene().getProjectionMatrix());
        } else {
            this._needToBindSceneUbo = true;
        }
    }
    /**
     * Binds the view matrix to the effect
     * @param effect defines the effect to bind the view matrix to
     * @param variableName name of the shader variable that will hold the eye position
     */ bindEyePosition(effect, variableName) {
        if (!this._useUBO) {
            this._scene.bindEyePosition(effect, variableName);
        } else {
            this._needToBindSceneUbo = true;
        }
    }
    /**
     * Processes to execute after binding the material to a mesh
     * @param mesh defines the rendered mesh
     * @param effect defines the effect used to bind the material
     * @param _subMesh defines the subMesh that the material has been bound for
     */ _afterBind(mesh, effect = null, _subMesh) {
        this._scene._cachedMaterial = this;
        if (this._needToBindSceneUbo) {
            if (effect) {
                this._needToBindSceneUbo = false;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BindSceneUniformBuffer"])(effect, this.getScene().getSceneUniformBuffer());
                this._scene.finalizeSceneUbo();
            }
        }
        if (mesh) {
            this._scene._cachedVisibility = mesh.visibility;
        } else {
            this._scene._cachedVisibility = 1;
        }
        if (this._onBindObservable && mesh) {
            this._onBindObservable.notifyObservers(mesh);
        }
        if (this.disableDepthWrite) {
            const engine = this._scene.getEngine();
            this._cachedDepthWriteState = engine.getDepthWrite();
            engine.setDepthWrite(false);
        }
        if (this.disableColorWrite) {
            const engine = this._scene.getEngine();
            this._cachedColorWriteState = engine.getColorWrite();
            engine.setColorWrite(false);
        }
        if (this.depthFunction !== 0) {
            const engine = this._scene.getEngine();
            this._cachedDepthFunctionState = engine.getDepthFunction() || 0;
            engine.setDepthFunction(this.depthFunction);
        }
    }
    /**
     * Unbinds the material from the mesh
     */ unbind() {
        this._scene.getSceneUniformBuffer().unbindEffect();
        if (this._onUnBindObservable) {
            this._onUnBindObservable.notifyObservers(this);
        }
        if (this.depthFunction !== 0) {
            const engine = this._scene.getEngine();
            engine.setDepthFunction(this._cachedDepthFunctionState);
        }
        if (this.disableDepthWrite) {
            const engine = this._scene.getEngine();
            engine.setDepthWrite(this._cachedDepthWriteState);
        }
        if (this.disableColorWrite) {
            const engine = this._scene.getEngine();
            engine.setColorWrite(this._cachedColorWriteState);
        }
    }
    /**
     * Returns the animatable textures.
     * @returns - Array of animatable textures.
     */ getAnimatables() {
        this._eventInfo.animatables = [];
        this._callbackPluginEventGeneric(256 /* MaterialPluginEvent.GetAnimatables */ , this._eventInfo);
        return this._eventInfo.animatables;
    }
    /**
     * Gets the active textures from the material
     * @returns an array of textures
     */ getActiveTextures() {
        this._eventInfo.activeTextures = [];
        this._callbackPluginEventGeneric(512 /* MaterialPluginEvent.GetActiveTextures */ , this._eventInfo);
        return this._eventInfo.activeTextures;
    }
    /**
     * Specifies if the material uses a texture
     * @param texture defines the texture to check against the material
     * @returns a boolean specifying if the material uses the texture
     */ hasTexture(texture) {
        this._eventInfo.hasTexture = false;
        this._eventInfo.texture = texture;
        this._callbackPluginEventGeneric(1024 /* MaterialPluginEvent.HasTexture */ , this._eventInfo);
        return this._eventInfo.hasTexture;
    }
    /**
     * Makes a duplicate of the material, and gives it a new name
     * @param name defines the new name for the duplicated material
     * @returns the cloned material
     */ // eslint-disable-next-line @typescript-eslint/no-unused-vars
    clone(name) {
        return null;
    }
    _clonePlugins(targetMaterial, rootUrl) {
        const serializationObject = {};
        // Create plugins in targetMaterial in case they don't exist
        this._serializePlugins(serializationObject);
        Material._ParsePlugins(serializationObject, targetMaterial, this._scene, rootUrl);
        // Copy the properties of the current plugins to the cloned material's plugins
        if (this.pluginManager) {
            for (const plugin of this.pluginManager._plugins){
                const targetPlugin = targetMaterial.pluginManager.getPlugin(plugin.name);
                if (targetPlugin) {
                    plugin.copyTo(targetPlugin);
                }
            }
        }
    }
    /**
     * Gets the meshes bound to the material
     * @returns an array of meshes bound to the material
     */ getBindedMeshes() {
        if (this.meshMap) {
            const result = [];
            for(const meshId in this.meshMap){
                const mesh = this.meshMap[meshId];
                if (mesh) {
                    result.push(mesh);
                }
            }
            return result;
        } else {
            const meshes = this._scene.meshes;
            return meshes.filter((mesh)=>mesh.material === this);
        }
    }
    /**
     * Force shader compilation
     * @param mesh defines the mesh associated with this material
     * @param onCompiled defines a function to execute once the material is compiled
     * @param options defines the options to configure the compilation
     * @param onError defines a function to execute if the material fails compiling
     */ forceCompilation(mesh, onCompiled, options, onError) {
        const localOptions = {
            clipPlane: false,
            useInstances: false,
            ...options
        };
        const scene = this.getScene();
        const currentHotSwapingState = this.allowShaderHotSwapping;
        this.allowShaderHotSwapping = false; // Turned off to let us evaluate the real compilation state
        const checkReady = ()=>{
            if (!this._scene || !this._scene.getEngine()) {
                return;
            }
            const clipPlaneState = scene.clipPlane;
            if (localOptions.clipPlane) {
                scene.clipPlane = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$plane$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Plane"](0, 0, 0, 1);
            }
            if (this._storeEffectOnSubMeshes) {
                let allDone = true, lastError = null;
                if (mesh.subMeshes) {
                    const tempSubMesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$subMesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubMesh"](0, 0, 0, 0, 0, mesh, undefined, false, false);
                    if (tempSubMesh.materialDefines) {
                        tempSubMesh.materialDefines._renderId = -1;
                    }
                    if (!this.isReadyForSubMesh(mesh, tempSubMesh, localOptions.useInstances)) {
                        if (tempSubMesh.effect && tempSubMesh.effect.getCompilationError() && tempSubMesh.effect.allFallbacksProcessed()) {
                            lastError = tempSubMesh.effect.getCompilationError();
                        } else {
                            allDone = false;
                            setTimeout(checkReady, 16);
                        }
                    }
                }
                if (allDone) {
                    this.allowShaderHotSwapping = currentHotSwapingState;
                    if (lastError) {
                        if (onError) {
                            onError(lastError);
                        }
                    }
                    if (onCompiled) {
                        onCompiled(this);
                    }
                }
            } else {
                if (this.isReady()) {
                    this.allowShaderHotSwapping = currentHotSwapingState;
                    if (onCompiled) {
                        onCompiled(this);
                    }
                } else {
                    setTimeout(checkReady, 16);
                }
            }
            if (localOptions.clipPlane) {
                scene.clipPlane = clipPlaneState;
            }
        };
        checkReady();
    }
    /**
     * Force shader compilation
     * @param mesh defines the mesh that will use this material
     * @param options defines additional options for compiling the shaders
     * @returns a promise that resolves when the compilation completes
     */ async forceCompilationAsync(mesh, options) {
        return await new Promise((resolve, reject)=>{
            this.forceCompilation(mesh, ()=>{
                resolve();
            }, options, (reason)=>{
                // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
                reject(reason);
            });
        });
    }
    /**
     * Marks a define in the material to indicate that it needs to be re-computed
     * @param flag defines a flag used to determine which parts of the material have to be marked as dirty
     */ markAsDirty(flag) {
        if (this.getScene().blockMaterialDirtyMechanism || this._blockDirtyMechanism) {
            return;
        }
        Material._DirtyCallbackArray.length = 0;
        if (flag & Material.ImageProcessingDirtyFlag) {
            Material._DirtyCallbackArray.push(Material._ImageProcessingDirtyCallBack);
        }
        if (flag & Material.TextureDirtyFlag) {
            Material._DirtyCallbackArray.push(Material._TextureDirtyCallBack);
        }
        if (flag & Material.LightDirtyFlag) {
            Material._DirtyCallbackArray.push(Material._LightsDirtyCallBack);
        }
        if (flag & Material.FresnelDirtyFlag) {
            Material._DirtyCallbackArray.push(Material._FresnelDirtyCallBack);
        }
        if (flag & Material.AttributesDirtyFlag) {
            Material._DirtyCallbackArray.push(Material._AttributeDirtyCallBack);
        }
        if (flag & Material.MiscDirtyFlag) {
            Material._DirtyCallbackArray.push(Material._MiscDirtyCallBack);
        }
        if (flag & Material.PrePassDirtyFlag) {
            Material._DirtyCallbackArray.push(Material._PrePassDirtyCallBack);
        }
        if (Material._DirtyCallbackArray.length) {
            this._markAllSubMeshesAsDirty(Material._RunDirtyCallBacks);
        }
        this.getScene().resetCachedMaterial();
    }
    /**
     * Resets the draw wrappers cache for all submeshes that are using this material
     */ resetDrawCache() {
        const meshes = this.getScene().meshes;
        for (const mesh of meshes){
            if (!mesh.subMeshes) {
                continue;
            }
            for (const subMesh of mesh.subMeshes){
                if (subMesh.getMaterial() !== this) {
                    continue;
                }
                subMesh.resetDrawCache();
            }
        }
    }
    /**
     * Marks all submeshes of a material to indicate that their material defines need to be re-calculated
     * @param func defines a function which checks material defines against the submeshes
     */ _markAllSubMeshesAsDirty(func) {
        const scene = this.getScene();
        if (scene.blockMaterialDirtyMechanism || this._blockDirtyMechanism) {
            return;
        }
        const meshes = scene.meshes;
        for (const mesh of meshes){
            if (!mesh.subMeshes) {
                continue;
            }
            for (const subMesh of mesh.subMeshes){
                // We want to skip the submeshes which are not using this material or which have not yet rendered at least once
                const material = subMesh.getMaterial() || (scene._hasDefaultMaterial ? scene.defaultMaterial : null);
                if (material !== this) {
                    continue;
                }
                for (const drawWrapper of subMesh._drawWrappers){
                    if (!drawWrapper || !drawWrapper.defines || !drawWrapper.defines.markAllAsDirty) {
                        continue;
                    }
                    if (this._materialContext === drawWrapper.materialContext) {
                        func(drawWrapper.defines);
                    }
                }
            }
        }
    }
    /**
     * Indicates that the scene should check if the rendering now needs a prepass
     */ _markScenePrePassDirty() {
        if (this.getScene().blockMaterialDirtyMechanism || this._blockDirtyMechanism) {
            return;
        }
        const prePassRenderer = this.getScene().enablePrePassRenderer();
        if (prePassRenderer) {
            prePassRenderer.markAsDirty();
        }
    }
    /**
     * Indicates that we need to re-calculated for all submeshes
     */ _markAllSubMeshesAsAllDirty() {
        this._markAllSubMeshesAsDirty(Material._AllDirtyCallBack);
    }
    /**
     * Indicates that image processing needs to be re-calculated for all submeshes
     */ _markAllSubMeshesAsImageProcessingDirty() {
        this._markAllSubMeshesAsDirty(Material._ImageProcessingDirtyCallBack);
    }
    /**
     * Indicates that textures need to be re-calculated for all submeshes
     */ _markAllSubMeshesAsTexturesDirty() {
        this._markAllSubMeshesAsDirty(Material._TextureDirtyCallBack);
    }
    /**
     * Indicates that fresnel needs to be re-calculated for all submeshes
     */ _markAllSubMeshesAsFresnelDirty() {
        this._markAllSubMeshesAsDirty(Material._FresnelDirtyCallBack);
    }
    /**
     * Indicates that fresnel and misc need to be re-calculated for all submeshes
     */ _markAllSubMeshesAsFresnelAndMiscDirty() {
        this._markAllSubMeshesAsDirty(Material._FresnelAndMiscDirtyCallBack);
    }
    /**
     * Indicates that lights need to be re-calculated for all submeshes
     */ _markAllSubMeshesAsLightsDirty() {
        this._markAllSubMeshesAsDirty(Material._LightsDirtyCallBack);
    }
    /**
     * Indicates that attributes need to be re-calculated for all submeshes
     */ _markAllSubMeshesAsAttributesDirty() {
        this._markAllSubMeshesAsDirty(Material._AttributeDirtyCallBack);
    }
    /**
     * Indicates that misc needs to be re-calculated for all submeshes
     */ _markAllSubMeshesAsMiscDirty() {
        this._markAllSubMeshesAsDirty(Material._MiscDirtyCallBack);
    }
    /**
     * Indicates that prepass needs to be re-calculated for all submeshes
     */ _markAllSubMeshesAsPrePassDirty() {
        this._markAllSubMeshesAsDirty(Material._PrePassDirtyCallBack);
    }
    /**
     * Indicates that textures and misc need to be re-calculated for all submeshes
     */ _markAllSubMeshesAsTexturesAndMiscDirty() {
        this._markAllSubMeshesAsDirty(Material._TextureAndMiscDirtyCallBack);
    }
    _checkScenePerformancePriority() {
        if (this._scene.performancePriority !== 0 /* ScenePerformancePriority.BackwardCompatible */ ) {
            this.checkReadyOnlyOnce = true;
            // re-set the flag when the perf priority changes
            const observer = this._scene.onScenePerformancePriorityChangedObservable.addOnce(()=>{
                this.checkReadyOnlyOnce = false;
            });
            // if this material is disposed before the scene is disposed, cleanup the observer
            this.onDisposeObservable.add(()=>{
                this._scene.onScenePerformancePriorityChangedObservable.remove(observer);
            });
        }
    }
    /**
     * Sets the required values to the prepass renderer.
     * @param prePassRenderer defines the prepass renderer to setup.
     * @returns true if the pre pass is needed.
     */ // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setPrePassRenderer(prePassRenderer) {
        // Do Nothing by default
        return false;
    }
    /**
     * Disposes the material
     * @param _forceDisposeEffect kept for backward compat. We reference count the effect now.
     * @param forceDisposeTextures specifies if textures should be forcefully disposed
     * @param notBoundToMesh specifies if the material that is being disposed is known to be not bound to any mesh
     */ dispose(_forceDisposeEffect, forceDisposeTextures, notBoundToMesh) {
        const scene = this.getScene();
        // Animations
        scene.stopAnimation(this);
        scene.freeProcessedMaterials();
        // Remove from scene
        scene.removeMaterial(this);
        this._eventInfo.forceDisposeTextures = forceDisposeTextures;
        this._callbackPluginEventGeneric(2 /* MaterialPluginEvent.Disposed */ , this._eventInfo);
        if (this._parentContainer) {
            const index = this._parentContainer.materials.indexOf(this);
            if (index > -1) {
                this._parentContainer.materials.splice(index, 1);
            }
            this._parentContainer = null;
        }
        if (notBoundToMesh !== true) {
            // Remove from meshes
            if (this.meshMap) {
                for(const meshId in this.meshMap){
                    const mesh = this.meshMap[meshId];
                    this._disposeMeshResources(mesh);
                }
            } else {
                const meshes = scene.meshes;
                for (const mesh of meshes){
                    this._disposeMeshResources(mesh);
                }
            }
        }
        this._uniformBuffer.dispose();
        // Shader are kept in cache for further use but we can get rid of this by using forceDisposeEffect
        if (this._drawWrapper.effect) {
            if (!this._storeEffectOnSubMeshes) {
                this._drawWrapper.effect.dispose();
            }
            this._drawWrapper.effect = null;
        }
        this.metadata = null;
        // Callback
        this.onDisposeObservable.notifyObservers(this);
        this.onDisposeObservable.clear();
        if (this._onBindObservable) {
            this._onBindObservable.clear();
        }
        if (this._onUnBindObservable) {
            this._onUnBindObservable.clear();
        }
        if (this._onEffectCreatedObservable) {
            this._onEffectCreatedObservable.clear();
        }
        if (this._eventInfo) {
            this._eventInfo = {};
        }
    }
    _disposeMeshResources(mesh) {
        if (!mesh) {
            return;
        }
        const geometry = mesh.geometry;
        const materialForRenderPass = mesh._internalAbstractMeshDataInfo._materialForRenderPass;
        if (this._storeEffectOnSubMeshes) {
            if (mesh.subMeshes && materialForRenderPass) {
                for (const subMesh of mesh.subMeshes){
                    const drawWrappers = subMesh._drawWrappers;
                    for(let renderPassIndex = 0; renderPassIndex < drawWrappers.length; renderPassIndex++){
                        const effect = drawWrappers[renderPassIndex]?.effect;
                        if (!effect) {
                            continue;
                        }
                        const material = materialForRenderPass[renderPassIndex];
                        if (material === this) {
                            geometry?._releaseVertexArrayObject(effect);
                            subMesh._removeDrawWrapper(renderPassIndex, true, true);
                        }
                    }
                }
            }
        } else {
            geometry?._releaseVertexArrayObject(this._drawWrapper.effect);
        }
        if (mesh.material === this && !mesh.sourceMesh) {
            mesh.material = null;
        }
    }
    /**
     * Serializes this material
     * @returns the serialized material object
     */ serialize() {
        const serializationObject = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SerializationHelper"].Serialize(this);
        serializationObject.stencil = this.stencil.serialize();
        serializationObject.uniqueId = this.uniqueId;
        this._serializePlugins(serializationObject);
        return serializationObject;
    }
    _serializePlugins(serializationObject) {
        serializationObject.plugins = {};
        if (this.pluginManager) {
            for (const plugin of this.pluginManager._plugins){
                if (!plugin.doNotSerialize) {
                    serializationObject.plugins[plugin.getClassName()] = plugin.serialize();
                }
            }
        }
    }
    /**
     * Parses the alpha mode from the material data to parse
     * @param parsedMaterial defines the material data to parse
     * @param material defines the material to update
     */ static ParseAlphaMode(parsedMaterial, material) {
        if (parsedMaterial._alphaMode !== undefined) {
            material._alphaMode = Array.isArray(parsedMaterial._alphaMode) ? parsedMaterial._alphaMode : [
                parsedMaterial._alphaMode
            ];
        } else if (parsedMaterial.alphaMode !== undefined) {
            material._alphaMode = Array.isArray(parsedMaterial.alphaMode) ? parsedMaterial.alphaMode : [
                parsedMaterial.alphaMode
            ];
        } else {
            material._alphaMode = [
                2
            ];
        }
    }
    /**
     * Creates a material from parsed material data
     * @param parsedMaterial defines parsed material data
     * @param scene defines the hosting scene
     * @param rootUrl defines the root URL to use to load textures
     * @returns a new material
     */ static Parse(parsedMaterial, scene, rootUrl) {
        if (!parsedMaterial.customType) {
            parsedMaterial.customType = "BABYLON.StandardMaterial";
        } else if (parsedMaterial.customType === "BABYLON.PBRMaterial" && parsedMaterial.overloadedAlbedo) {
            parsedMaterial.customType = "BABYLON.LegacyPBRMaterial";
            if (!BABYLON.LegacyPBRMaterial) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Error("Your scene is trying to load a legacy version of the PBRMaterial, please, include it from the materials library.");
                return null;
            }
        }
        const materialType = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tools"].Instantiate(parsedMaterial.customType);
        const material = materialType.Parse(parsedMaterial, scene, rootUrl);
        material._loadedUniqueId = parsedMaterial.uniqueId;
        Material.ParseAlphaMode(parsedMaterial, material);
        return material;
    }
    static _ParsePlugins(serializationObject, material, scene, rootUrl) {
        if (!serializationObject.plugins) {
            return;
        }
        for(const pluginClassName in serializationObject.plugins){
            const pluginData = serializationObject.plugins[pluginClassName];
            let plugin = material.pluginManager?.getPlugin(pluginData.name);
            if (!plugin) {
                const pluginClassType = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tools"].Instantiate("BABYLON." + pluginClassName);
                if (pluginClassType) {
                    plugin = new pluginClassType(material);
                }
            }
            plugin?.parse(pluginData, scene, rootUrl);
        }
    }
}
/**
 * Returns the triangle fill mode
 */ Material.TriangleFillMode = 0;
/**
 * Returns the wireframe mode
 */ Material.WireFrameFillMode = 1;
/**
 * Returns the point fill mode
 */ Material.PointFillMode = 2;
/**
 * Returns the point list draw mode
 */ Material.PointListDrawMode = 3;
/**
 * Returns the line list draw mode
 */ Material.LineListDrawMode = 4;
/**
 * Returns the line loop draw mode
 */ Material.LineLoopDrawMode = 5;
/**
 * Returns the line strip draw mode
 */ Material.LineStripDrawMode = 6;
/**
 * Returns the triangle strip draw mode
 */ Material.TriangleStripDrawMode = 7;
/**
 * Returns the triangle fan draw mode
 */ Material.TriangleFanDrawMode = 8;
/**
 * Stores the clock-wise side orientation
 */ Material.ClockWiseSideOrientation = 0;
/**
 * Stores the counter clock-wise side orientation
 */ Material.CounterClockWiseSideOrientation = 1;
/**
 * The dirty image processing flag value
 */ Material.ImageProcessingDirtyFlag = 64;
/**
 * The dirty texture flag value
 */ Material.TextureDirtyFlag = 1;
/**
 * The dirty light flag value
 */ Material.LightDirtyFlag = 2;
/**
 * The dirty fresnel flag value
 */ Material.FresnelDirtyFlag = 4;
/**
 * The dirty attribute flag value
 */ Material.AttributesDirtyFlag = 8;
/**
 * The dirty misc flag value
 */ Material.MiscDirtyFlag = 16;
/**
 * The dirty prepass flag value
 */ Material.PrePassDirtyFlag = 32;
/**
 * The all dirty flag value
 */ Material.AllDirtyFlag = 127;
/**
 * MaterialTransparencyMode: No transparency mode, Alpha channel is not use.
 */ Material.MATERIAL_OPAQUE = 0;
/**
 * MaterialTransparencyMode: Alpha Test mode, pixel are discarded below a certain threshold defined by the alpha cutoff value.
 */ Material.MATERIAL_ALPHATEST = 1;
/**
 * MaterialTransparencyMode: Pixels are blended (according to the alpha mode) with the already drawn pixels in the current frame buffer.
 */ Material.MATERIAL_ALPHABLEND = 2;
/**
 * MaterialTransparencyMode: Pixels are blended (according to the alpha mode) with the already drawn pixels in the current frame buffer.
 * They are also discarded below the alpha cutoff threshold to improve performances.
 */ Material.MATERIAL_ALPHATESTANDBLEND = 3;
/**
 * The Whiteout method is used to blend normals.
 * Details of the algorithm can be found here: https://blog.selfshadow.com/publications/blending-in-detail/
 */ Material.MATERIAL_NORMALBLENDMETHOD_WHITEOUT = 0;
/**
 * The Reoriented Normal Mapping method is used to blend normals.
 * Details of the algorithm can be found here: https://blog.selfshadow.com/publications/blending-in-detail/
 */ Material.MATERIAL_NORMALBLENDMETHOD_RNM = 1;
/**
 * PBRMaterialLightFalloff Physical: light is falling off following the inverse squared distance law.
 */ Material.LIGHTFALLOFF_PHYSICAL = 0;
/**
 * PBRMaterialLightFalloff gltf: light is falling off as described in the gltf moving to PBR document
 * to enhance interoperability with other engines.
 */ Material.LIGHTFALLOFF_GLTF = 1;
/**
 * PBRMaterialLightFalloff Standard: light is falling off like in the standard material
 * to enhance interoperability with other materials.
 */ Material.LIGHTFALLOFF_STANDARD = 2;
/**
 * Event observable which raises global events common to all materials (like MaterialPluginEvent.Created)
 */ Material.OnEventObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
/**
 * If true, all materials will have their vertex output set to invariant (see the vertexOutputInvariant property).
 */ Material.ForceVertexOutputInvariant = false;
Material._AllDirtyCallBack = (defines)=>defines.markAllAsDirty();
Material._ImageProcessingDirtyCallBack = (defines)=>defines.markAsImageProcessingDirty();
Material._TextureDirtyCallBack = (defines)=>defines.markAsTexturesDirty();
Material._FresnelDirtyCallBack = (defines)=>defines.markAsFresnelDirty();
Material._MiscDirtyCallBack = (defines)=>defines.markAsMiscDirty();
Material._PrePassDirtyCallBack = (defines)=>defines.markAsPrePassDirty();
Material._LightsDirtyCallBack = (defines)=>defines.markAsLightDirty();
Material._AttributeDirtyCallBack = (defines)=>defines.markAsAttributesDirty();
Material._FresnelAndMiscDirtyCallBack = (defines)=>{
    Material._FresnelDirtyCallBack(defines);
    Material._MiscDirtyCallBack(defines);
};
Material._TextureAndMiscDirtyCallBack = (defines)=>{
    Material._TextureDirtyCallBack(defines);
    Material._MiscDirtyCallBack(defines);
};
Material._DirtyCallbackArray = [];
Material._RunDirtyCallBacks = (defines)=>{
    for (const cb of Material._DirtyCallbackArray){
        cb(defines);
    }
};
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], Material.prototype, "id", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], Material.prototype, "uniqueId", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], Material.prototype, "name", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], Material.prototype, "metadata", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], Material.prototype, "checkReadyOnEveryCall", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], Material.prototype, "checkReadyOnlyOnce", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], Material.prototype, "state", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])("alpha")
], Material.prototype, "_alpha", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])("backFaceCulling")
], Material.prototype, "_backFaceCulling", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])("cullBackFaces")
], Material.prototype, "_cullBackFaces", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], Material.prototype, "sideOrientation", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], Material.prototype, "_alphaMode", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], Material.prototype, "_needDepthPrePass", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], Material.prototype, "disableDepthWrite", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], Material.prototype, "disableColorWrite", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], Material.prototype, "forceDepthWrite", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], Material.prototype, "depthFunction", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], Material.prototype, "separateCullingPass", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])("fogEnabled")
], Material.prototype, "_fogEnabled", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], Material.prototype, "pointSize", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], Material.prototype, "zOffset", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], Material.prototype, "zOffsetUnits", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], Material.prototype, "pointsCloud", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], Material.prototype, "fillMode", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], Material.prototype, "useLogarithmicDepth", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], Material.prototype, "_isVertexOutputInvariant", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], Material.prototype, "transparencyMode", null); //# sourceMappingURL=material.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/multiMaterial.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MultiMaterial",
    ()=>MultiMaterial
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$material$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/material.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/tags.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
;
;
;
class MultiMaterial extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$material$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Material"] {
    /**
     * Gets or Sets the list of Materials used within the multi material.
     * They need to be ordered according to the submeshes order in the associated mesh
     */ get subMaterials() {
        return this._subMaterials;
    }
    set subMaterials(value) {
        this._subMaterials = value;
        this._hookArray(value);
    }
    /**
     * Function used to align with Node.getChildren()
     * @returns the list of Materials used within the multi material
     */ getChildren() {
        return this.subMaterials;
    }
    /**
     * Instantiates a new Multi Material
     * A multi-material is used to apply different materials to different parts of the same object without the need of
     * separate meshes. This can be use to improve performances.
     * @see https://doc.babylonjs.com/features/featuresDeepDive/materials/using/multiMaterials
     * @param name Define the name in the scene
     * @param scene Define the scene the material belongs to
     */ constructor(name, scene){
        super(name, scene, true);
        /** @internal */ this._waitingSubMaterialsUniqueIds = [];
        this.getScene().addMultiMaterial(this);
        this.subMaterials = [];
        this._storeEffectOnSubMeshes = true; // multimaterial is considered like a push material
    }
    _hookArray(array) {
        const oldPush = array.push;
        array.push = (...items)=>{
            const result = oldPush.apply(array, items);
            this._markAllSubMeshesAsTexturesDirty();
            return result;
        };
        const oldSplice = array.splice;
        array.splice = (index, deleteCount)=>{
            const deleted = oldSplice.apply(array, [
                index,
                deleteCount
            ]);
            this._markAllSubMeshesAsTexturesDirty();
            return deleted;
        };
    }
    /**
     * Get one of the submaterial by its index in the submaterials array
     * @param index The index to look the sub material at
     * @returns The Material if the index has been defined
     */ getSubMaterial(index) {
        if (index < 0 || index >= this.subMaterials.length) {
            return this.getScene().defaultMaterial;
        }
        return this.subMaterials[index];
    }
    /**
     * Get the list of active textures for the whole sub materials list.
     * @returns All the textures that will be used during the rendering
     */ getActiveTextures() {
        return super.getActiveTextures().concat(...this.subMaterials.map((subMaterial)=>{
            if (subMaterial) {
                return subMaterial.getActiveTextures();
            } else {
                return [];
            }
        }));
    }
    /**
     * Specifies if any sub-materials of this multi-material use a given texture.
     * @param texture Defines the texture to check against this multi-material's sub-materials.
     * @returns A boolean specifying if any sub-material of this multi-material uses the texture.
     */ hasTexture(texture) {
        if (super.hasTexture(texture)) {
            return true;
        }
        for(let i = 0; i < this.subMaterials.length; i++){
            if (this.subMaterials[i]?.hasTexture(texture)) {
                return true;
            }
        }
        return false;
    }
    /**
     * Gets the current class name of the material e.g. "MultiMaterial"
     * Mainly use in serialization.
     * @returns the class name
     */ getClassName() {
        return "MultiMaterial";
    }
    /**
     * Checks if the material is ready to render the requested sub mesh
     * @param mesh Define the mesh the submesh belongs to
     * @param subMesh Define the sub mesh to look readiness for
     * @param useInstances Define whether or not the material is used with instances
     * @returns true if ready, otherwise false
     */ isReadyForSubMesh(mesh, subMesh, useInstances) {
        for(let index = 0; index < this.subMaterials.length; index++){
            const subMaterial = this.subMaterials[index];
            if (subMaterial) {
                if (subMaterial._storeEffectOnSubMeshes) {
                    if (!subMaterial.isReadyForSubMesh(mesh, subMesh, useInstances)) {
                        return false;
                    }
                    continue;
                }
                if (!subMaterial.isReady(mesh)) {
                    return false;
                }
            }
        }
        return true;
    }
    /**
     * Clones the current material and its related sub materials
     * @param name Define the name of the newly cloned material
     * @param cloneChildren Define if submaterial will be cloned or shared with the parent instance
     * @returns the cloned material
     */ clone(name, cloneChildren) {
        const newMultiMaterial = new MultiMaterial(name, this.getScene());
        for(let index = 0; index < this.subMaterials.length; index++){
            let subMaterial = null;
            const current = this.subMaterials[index];
            if (cloneChildren && current) {
                subMaterial = current.clone(name + "-" + current.name);
            } else {
                subMaterial = this.subMaterials[index];
            }
            newMultiMaterial.subMaterials.push(subMaterial);
        }
        return newMultiMaterial;
    }
    /**
     * Serializes the materials into a JSON representation.
     * @returns the JSON representation
     */ serialize() {
        const serializationObject = {};
        serializationObject.name = this.name;
        serializationObject.id = this.id;
        serializationObject.uniqueId = this.uniqueId;
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tags"]) {
            serializationObject.tags = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tags"].GetTags(this);
        }
        serializationObject.materialsUniqueIds = [];
        serializationObject.materials = [];
        for(let matIndex = 0; matIndex < this.subMaterials.length; matIndex++){
            const subMat = this.subMaterials[matIndex];
            if (subMat) {
                serializationObject.materialsUniqueIds.push(subMat.uniqueId);
                serializationObject.materials.push(subMat.id);
            } else {
                serializationObject.materialsUniqueIds.push(null);
                serializationObject.materials.push(null);
            }
        }
        return serializationObject;
    }
    /**
     * Dispose the material and release its associated resources
     * @param forceDisposeEffect Define if we want to force disposing the associated effect (if false the shader is not released and could be reuse later on)
     * @param forceDisposeTextures Define if we want to force disposing the associated textures (if false, they will not be disposed and can still be use elsewhere in the app)
     * @param forceDisposeChildren Define if we want to force disposing the associated submaterials (if false, they will not be disposed and can still be use elsewhere in the app)
     */ dispose(forceDisposeEffect, forceDisposeTextures, forceDisposeChildren) {
        const scene = this.getScene();
        if (!scene) {
            return;
        }
        if (forceDisposeChildren) {
            for(let index = 0; index < this.subMaterials.length; index++){
                const subMaterial = this.subMaterials[index];
                if (subMaterial) {
                    subMaterial.dispose(forceDisposeEffect, forceDisposeTextures);
                }
            }
        }
        const index = scene.multiMaterials.indexOf(this);
        if (index >= 0) {
            scene.multiMaterials.splice(index, 1);
        }
        super.dispose(forceDisposeEffect, forceDisposeTextures);
    }
    /**
     * Creates a MultiMaterial from parsed MultiMaterial data.
     * @param parsedMultiMaterial defines parsed MultiMaterial data.
     * @param scene defines the hosting scene
     * @returns a new MultiMaterial
     */ static ParseMultiMaterial(parsedMultiMaterial, scene) {
        const multiMaterial = new MultiMaterial(parsedMultiMaterial.name, scene);
        multiMaterial.id = parsedMultiMaterial.id;
        multiMaterial._loadedUniqueId = parsedMultiMaterial.uniqueId;
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tags"]) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tags"].AddTagsTo(multiMaterial, parsedMultiMaterial.tags);
        }
        if (parsedMultiMaterial.materialsUniqueIds) {
            multiMaterial._waitingSubMaterialsUniqueIds = parsedMultiMaterial.materialsUniqueIds;
        } else {
            for (const subMatId of parsedMultiMaterial.materials){
                multiMaterial.subMaterials.push(scene.getLastMaterialById(subMatId));
            }
        }
        return multiMaterial;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.MultiMaterial", MultiMaterial); //# sourceMappingURL=multiMaterial.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/prePassConfiguration.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Configuration needed for prepass-capable materials
 */ __turbopack_context__.s([
    "PrePassConfiguration",
    ()=>PrePassConfiguration
]);
class PrePassConfiguration {
    constructor(){
        /**
         * Previous world matrices of meshes carrying this material
         * Used for computing velocity
         */ this.previousWorldMatrices = {};
        /**
         * Previous bones of meshes carrying this material
         * Used for computing velocity
         */ this.previousBones = {};
    }
    /**
     * Add the required uniforms to the current list.
     * @param uniforms defines the current uniform list.
     */ static AddUniforms(uniforms) {
        uniforms.push("previousWorld", "previousViewProjection", "mPreviousBones");
    }
    /**
     * Add the required samplers to the current list.
     * @param samplers defines the current sampler list.
     */ // eslint-disable-next-line @typescript-eslint/no-unused-vars
    static AddSamplers(samplers) {
    // pass
    }
    /**
     * Binds the material data.
     * @param effect defines the effect to update
     * @param scene defines the scene the material belongs to.
     * @param mesh The mesh
     * @param world World matrix of this mesh
     * @param isFrozen Is the material frozen
     */ // eslint-disable-next-line @typescript-eslint/no-unused-vars
    bindForSubMesh(effect, scene, mesh, world, isFrozen) {
        if (scene.prePassRenderer && scene.prePassRenderer.enabled && scene.prePassRenderer.currentRTisSceneRT) {
            if (scene.prePassRenderer.getIndex(2) !== -1 || scene.prePassRenderer.getIndex(11) !== -1) {
                if (!this.previousWorldMatrices[mesh.uniqueId]) {
                    this.previousWorldMatrices[mesh.uniqueId] = world.clone();
                }
                if (!this.previousViewProjection) {
                    this.previousViewProjection = scene.getTransformMatrix().clone();
                    this.currentViewProjection = scene.getTransformMatrix().clone();
                }
                const engine = scene.getEngine();
                if (this.currentViewProjection.updateFlag !== scene.getTransformMatrix().updateFlag) {
                    // First update of the prepass configuration for this rendering pass
                    this._lastUpdateFrameId = engine.frameId;
                    this.previousViewProjection.copyFrom(this.currentViewProjection);
                    this.currentViewProjection.copyFrom(scene.getTransformMatrix());
                } else if (this._lastUpdateFrameId !== engine.frameId) {
                    // The scene transformation did not change from the previous frame (so no camera motion), we must update previousViewProjection accordingly
                    this._lastUpdateFrameId = engine.frameId;
                    this.previousViewProjection.copyFrom(this.currentViewProjection);
                }
                effect.setMatrix("previousWorld", this.previousWorldMatrices[mesh.uniqueId]);
                effect.setMatrix("previousViewProjection", this.previousViewProjection);
                this.previousWorldMatrices[mesh.uniqueId] = world.clone();
            }
        }
    }
} //# sourceMappingURL=prePassConfiguration.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialDefines.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Manages the defines for the Material
 */ __turbopack_context__.s([
    "MaterialDefines",
    ()=>MaterialDefines
]);
class MaterialDefines {
    /**
     * Creates a new instance
     * @param externalProperties list of external properties to inject into the object
     */ constructor(externalProperties){
        this.VERTEXOUTPUT_INVARIANT = false;
        /** @internal */ this._keys = [];
        this._isDirty = true;
        /** @internal */ this._areLightsDirty = true;
        /** @internal */ this._areLightsDisposed = false;
        /** @internal */ this._areAttributesDirty = true;
        /** @internal */ this._areTexturesDirty = true;
        /** @internal */ this._areFresnelDirty = true;
        /** @internal */ this._areMiscDirty = true;
        /** @internal */ this._arePrePassDirty = true;
        /** @internal */ this._areImageProcessingDirty = true;
        /** @internal */ this._normals = false;
        /** @internal */ this._uvs = false;
        /** @internal */ this._needNormals = false;
        /** @internal */ this._needUVs = false;
        this._externalProperties = externalProperties;
        // Initialize External Properties
        if (externalProperties) {
            for(const prop in externalProperties){
                if (Object.prototype.hasOwnProperty.call(externalProperties, prop)) {
                    this._setDefaultValue(prop);
                }
            }
        }
    }
    /**
     * Specifies if the material needs to be re-calculated
     */ get isDirty() {
        return this._isDirty;
    }
    /**
     * Marks the material to indicate that it has been re-calculated
     */ markAsProcessed() {
        this._isDirty = false;
        this._areAttributesDirty = false;
        this._areTexturesDirty = false;
        this._areFresnelDirty = false;
        this._areLightsDirty = false;
        this._areLightsDisposed = false;
        this._areMiscDirty = false;
        this._arePrePassDirty = false;
        this._areImageProcessingDirty = false;
    }
    /**
     * Marks the material to indicate that it needs to be re-calculated
     */ markAsUnprocessed() {
        this._isDirty = true;
    }
    /**
     * Marks the material to indicate all of its defines need to be re-calculated
     */ markAllAsDirty() {
        this._areTexturesDirty = true;
        this._areAttributesDirty = true;
        this._areLightsDirty = true;
        this._areFresnelDirty = true;
        this._areMiscDirty = true;
        this._arePrePassDirty = true;
        this._areImageProcessingDirty = true;
        this._isDirty = true;
    }
    /**
     * Marks the material to indicate that image processing needs to be re-calculated
     */ markAsImageProcessingDirty() {
        this._areImageProcessingDirty = true;
        this._isDirty = true;
    }
    /**
     * Marks the material to indicate the lights need to be re-calculated
     * @param disposed Defines whether the light is dirty due to dispose or not
     */ markAsLightDirty(disposed = false) {
        this._areLightsDirty = true;
        this._areLightsDisposed = this._areLightsDisposed || disposed;
        this._isDirty = true;
    }
    /**
     * Marks the attribute state as changed
     */ markAsAttributesDirty() {
        this._areAttributesDirty = true;
        this._isDirty = true;
    }
    /**
     * Marks the texture state as changed
     */ markAsTexturesDirty() {
        this._areTexturesDirty = true;
        this._isDirty = true;
    }
    /**
     * Marks the fresnel state as changed
     */ markAsFresnelDirty() {
        this._areFresnelDirty = true;
        this._isDirty = true;
    }
    /**
     * Marks the misc state as changed
     */ markAsMiscDirty() {
        this._areMiscDirty = true;
        this._isDirty = true;
    }
    /**
     * Marks the prepass state as changed
     */ markAsPrePassDirty() {
        this._arePrePassDirty = true;
        this._isDirty = true;
    }
    /**
     * Rebuilds the material defines
     */ rebuild() {
        this._keys.length = 0;
        for (const key of Object.keys(this)){
            if (key[0] === "_") {
                continue;
            }
            this._keys.push(key);
        }
        if (this._externalProperties) {
            for(const name in this._externalProperties){
                if (this._keys.indexOf(name) === -1) {
                    this._keys.push(name);
                }
            }
        }
    }
    /**
     * Specifies if two material defines are equal
     * @param other - A material define instance to compare to
     * @returns - Boolean indicating if the material defines are equal (true) or not (false)
     */ isEqual(other) {
        if (this._keys.length !== other._keys.length) {
            return false;
        }
        for(let index = 0; index < this._keys.length; index++){
            const prop = this._keys[index];
            if (this[prop] !== other[prop]) {
                return false;
            }
        }
        return true;
    }
    /**
     * Clones this instance's defines to another instance
     * @param other - material defines to clone values to
     */ cloneTo(other) {
        if (this._keys.length !== other._keys.length) {
            other._keys = this._keys.slice(0);
        }
        for(let index = 0; index < this._keys.length; index++){
            const prop = this._keys[index];
            other[prop] = this[prop];
        }
    }
    /**
     * Resets the material define values
     */ reset() {
        for (const prop of this._keys){
            this._setDefaultValue(prop);
        }
    }
    _setDefaultValue(prop) {
        const type = this._externalProperties?.[prop]?.type ?? typeof this[prop];
        const defValue = this._externalProperties?.[prop]?.default;
        switch(type){
            case "number":
                this[prop] = defValue ?? 0;
                break;
            case "string":
                this[prop] = defValue ?? "";
                break;
            default:
                this[prop] = defValue ?? false;
                break;
        }
    }
    /**
     * Converts the material define values to a string
     * @returns - String of material define information
     */ toString() {
        let result = "";
        for(let index = 0; index < this._keys.length; index++){
            const prop = this._keys[index];
            const value = this[prop];
            const type = typeof value;
            switch(type){
                case "number":
                case "string":
                    result += "#define " + prop + " " + value + "\n";
                    break;
                default:
                    if (value) {
                        result += "#define " + prop + "\n";
                    }
                    break;
            }
        }
        return result;
    }
} //# sourceMappingURL=materialDefines.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/imageProcessingConfiguration.defines.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ImageProcessingConfigurationDefines",
    ()=>ImageProcessingConfigurationDefines,
    "ImageProcessingDefinesMixin",
    ()=>ImageProcessingDefinesMixin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialDefines$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialDefines.js [app-ssr] (ecmascript)");
;
function ImageProcessingDefinesMixin(base) {
    return class extends base {
        constructor(){
            super(...arguments);
            // Implement all members of IImageProcessingConfigurationDefines here
            this.IMAGEPROCESSING = false;
            this.VIGNETTE = false;
            this.VIGNETTEBLENDMODEMULTIPLY = false;
            this.VIGNETTEBLENDMODEOPAQUE = false;
            this.TONEMAPPING = 0;
            this.CONTRAST = false;
            this.COLORCURVES = false;
            this.COLORGRADING = false;
            this.COLORGRADING3D = false;
            this.SAMPLER3DGREENDEPTH = false;
            this.SAMPLER3DBGRMAP = false;
            this.DITHER = false;
            this.IMAGEPROCESSINGPOSTPROCESS = false;
            this.SKIPFINALCOLORCLAMP = false;
            this.EXPOSURE = false;
        }
    };
}
class ImageProcessingConfigurationDefines extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialDefines$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialDefines"] {
    constructor(){
        super();
        this.IMAGEPROCESSING = false;
        this.VIGNETTE = false;
        this.VIGNETTEBLENDMODEMULTIPLY = false;
        this.VIGNETTEBLENDMODEOPAQUE = false;
        this.TONEMAPPING = 0;
        this.CONTRAST = false;
        this.COLORCURVES = false;
        this.COLORGRADING = false;
        this.COLORGRADING3D = false;
        this.SAMPLER3DGREENDEPTH = false;
        this.SAMPLER3DBGRMAP = false;
        this.DITHER = false;
        this.IMAGEPROCESSINGPOSTPROCESS = false;
        this.EXPOSURE = false;
        this.SKIPFINALCOLORCLAMP = false;
        this.rebuild();
    }
} //# sourceMappingURL=imageProcessingConfiguration.defines.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/pushMaterial.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PushMaterial",
    ()=>PushMaterial
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$material$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/material.js [app-ssr] (ecmascript)");
;
;
class PushMaterial extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$material$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Material"] {
    constructor(name, scene, storeEffectOnSubMeshes = true, forceGLSL = false){
        super(name, scene, undefined, forceGLSL);
        this._normalMatrix = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"]();
        this._storeEffectOnSubMeshes = storeEffectOnSubMeshes;
    }
    getEffect() {
        return this._storeEffectOnSubMeshes ? this._activeEffect : super.getEffect();
    }
    isReady(mesh, useInstances) {
        if (!mesh) {
            return false;
        }
        if (!this._storeEffectOnSubMeshes) {
            return true;
        }
        if (!mesh.subMeshes || mesh.subMeshes.length === 0) {
            return true;
        }
        return this.isReadyForSubMesh(mesh, mesh.subMeshes[0], useInstances);
    }
    _isReadyForSubMesh(subMesh) {
        const defines = subMesh.materialDefines;
        if (!this.checkReadyOnEveryCall && subMesh.effect && defines) {
            if (defines._renderId === this.getScene().getRenderId()) {
                return true;
            }
        }
        return false;
    }
    /**
     * Binds the given world matrix to the active effect
     *
     * @param world the matrix to bind
     */ bindOnlyWorldMatrix(world) {
        this._activeEffect.setMatrix("world", world);
    }
    /**
     * Binds the given normal matrix to the active effect
     *
     * @param normalMatrix the matrix to bind
     */ bindOnlyNormalMatrix(normalMatrix) {
        this._activeEffect.setMatrix("normalMatrix", normalMatrix);
    }
    bind(world, mesh) {
        if (!mesh) {
            return;
        }
        this.bindForSubMesh(world, mesh, mesh.subMeshes[0]);
    }
    _afterBind(mesh, effect = null, subMesh) {
        super._afterBind(mesh, effect, subMesh);
        this.getScene()._cachedEffect = effect;
        if (subMesh) {
            subMesh._drawWrapper._forceRebindOnNextCall = false;
        } else {
            this._drawWrapper._forceRebindOnNextCall = false;
        }
    }
    _mustRebind(scene, effect, subMesh, visibility = 1) {
        return subMesh._drawWrapper._forceRebindOnNextCall || scene.isCachedMaterialInvalid(this, effect, visibility);
    }
    dispose(forceDisposeEffect, forceDisposeTextures, notBoundToMesh) {
        this._activeEffect = undefined;
        super.dispose(forceDisposeEffect, forceDisposeTextures, notBoundToMesh);
    }
} //# sourceMappingURL=pushMaterial.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialPluginManager.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MaterialPluginManager",
    ()=>MaterialPluginManager,
    "RegisterMaterialPlugin",
    ()=>RegisterMaterialPlugin,
    "UnregisterAllMaterialPlugins",
    ()=>UnregisterAllMaterialPlugins,
    "UnregisterMaterialPlugin",
    ()=>UnregisterMaterialPlugin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$material$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/material.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/engineStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Processors$2f$shaderProcessor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Processors/shaderProcessor.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
;
;
;
const RxOption = new RegExp("^([gimus]+)!");
class MaterialPluginManager {
    /**
     * Creates a new instance of the plugin manager
     * @param material material that this manager will manage the plugins for
     */ constructor(material){
        /** @internal */ this._plugins = [];
        this._activePlugins = [];
        this._activePluginsForExtraEvents = [];
        this._material = material;
        this._scene = material.getScene();
        this._engine = this._scene.getEngine();
    }
    /**
     * @internal
     */ _addPlugin(plugin) {
        for(let i = 0; i < this._plugins.length; ++i){
            if (this._plugins[i].name === plugin.name) {
                return false;
            }
        }
        if (this._material._uniformBufferLayoutBuilt) {
            this._material.resetDrawCache();
            this._material._createUniformBuffer();
        }
        if (!plugin.isCompatible(this._material.shaderLanguage)) {
            // eslint-disable-next-line no-throw-literal
            throw `The plugin "${plugin.name}" can't be added to the material "${this._material.name}" because the plugin is not compatible with the shader language of the material.`;
        }
        const pluginClassName = plugin.getClassName();
        if (!MaterialPluginManager._MaterialPluginClassToMainDefine[pluginClassName]) {
            MaterialPluginManager._MaterialPluginClassToMainDefine[pluginClassName] = "MATERIALPLUGIN_" + ++MaterialPluginManager._MaterialPluginCounter;
        }
        this._material._callbackPluginEventGeneric = (id, info)=>this._handlePluginEvent(id, info);
        this._plugins.push(plugin);
        this._plugins.sort((a, b)=>a.priority - b.priority);
        this._codeInjectionPoints = {};
        const defineNamesFromPlugins = {};
        defineNamesFromPlugins[MaterialPluginManager._MaterialPluginClassToMainDefine[pluginClassName]] = {
            type: "boolean",
            default: true
        };
        for (const plugin of this._plugins){
            plugin.collectDefines(defineNamesFromPlugins);
            this._collectPointNames("vertex", plugin.getCustomCode("vertex", this._material.shaderLanguage));
            this._collectPointNames("fragment", plugin.getCustomCode("fragment", this._material.shaderLanguage));
        }
        this._defineNamesFromPlugins = defineNamesFromPlugins;
        return true;
    }
    /**
     * @internal
     */ _activatePlugin(plugin) {
        if (this._activePlugins.indexOf(plugin) === -1) {
            this._activePlugins.push(plugin);
            this._activePlugins.sort((a, b)=>a.priority - b.priority);
            this._material._callbackPluginEventIsReadyForSubMesh = this._handlePluginEventIsReadyForSubMesh.bind(this);
            this._material._callbackPluginEventPrepareDefinesBeforeAttributes = this._handlePluginEventPrepareDefinesBeforeAttributes.bind(this);
            this._material._callbackPluginEventPrepareDefines = this._handlePluginEventPrepareDefines.bind(this);
            this._material._callbackPluginEventBindForSubMesh = this._handlePluginEventBindForSubMesh.bind(this);
            if (plugin.registerForExtraEvents) {
                this._activePluginsForExtraEvents.push(plugin);
                this._activePluginsForExtraEvents.sort((a, b)=>a.priority - b.priority);
                this._material._callbackPluginEventHasRenderTargetTextures = this._handlePluginEventHasRenderTargetTextures.bind(this);
                this._material._callbackPluginEventFillRenderTargetTextures = this._handlePluginEventFillRenderTargetTextures.bind(this);
                this._material._callbackPluginEventHardBindForSubMesh = this._handlePluginEventHardBindForSubMesh.bind(this);
            }
        }
    }
    /**
     * Gets a plugin from the list of plugins managed by this manager
     * @param name name of the plugin
     * @returns the plugin if found, else null
     */ getPlugin(name) {
        for(let i = 0; i < this._plugins.length; ++i){
            if (this._plugins[i].name === name) {
                return this._plugins[i];
            }
        }
        return null;
    }
    _handlePluginEventIsReadyForSubMesh(eventData) {
        let isReady = true;
        for (const plugin of this._activePlugins){
            isReady = isReady && plugin.isReadyForSubMesh(eventData.defines, this._scene, this._engine, eventData.subMesh);
        }
        eventData.isReadyForSubMesh = isReady;
    }
    _handlePluginEventPrepareDefinesBeforeAttributes(eventData) {
        for (const plugin of this._activePlugins){
            plugin.prepareDefinesBeforeAttributes(eventData.defines, this._scene, eventData.mesh);
        }
    }
    _handlePluginEventPrepareDefines(eventData) {
        for (const plugin of this._activePlugins){
            plugin.prepareDefines(eventData.defines, this._scene, eventData.mesh);
        }
    }
    _handlePluginEventHardBindForSubMesh(eventData) {
        for (const plugin of this._activePluginsForExtraEvents){
            plugin.hardBindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, eventData.subMesh);
        }
    }
    _handlePluginEventBindForSubMesh(eventData) {
        for (const plugin of this._activePlugins){
            plugin.bindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, eventData.subMesh);
        }
    }
    _handlePluginEventHasRenderTargetTextures(eventData) {
        let hasRenderTargetTextures = false;
        for (const plugin of this._activePluginsForExtraEvents){
            hasRenderTargetTextures = plugin.hasRenderTargetTextures();
            if (hasRenderTargetTextures) {
                break;
            }
        }
        eventData.hasRenderTargetTextures = hasRenderTargetTextures;
    }
    _handlePluginEventFillRenderTargetTextures(eventData) {
        for (const plugin of this._activePluginsForExtraEvents){
            plugin.fillRenderTargetTextures(eventData.renderTargets);
        }
    }
    _handlePluginEvent(id, info) {
        switch(id){
            case 512 /* MaterialPluginEvent.GetActiveTextures */ :
                {
                    const eventData = info;
                    for (const plugin of this._activePlugins){
                        plugin.getActiveTextures(eventData.activeTextures);
                    }
                    break;
                }
            case 256 /* MaterialPluginEvent.GetAnimatables */ :
                {
                    const eventData = info;
                    for (const plugin of this._activePlugins){
                        plugin.getAnimatables(eventData.animatables);
                    }
                    break;
                }
            case 1024 /* MaterialPluginEvent.HasTexture */ :
                {
                    const eventData = info;
                    let hasTexture = false;
                    for (const plugin of this._activePlugins){
                        hasTexture = plugin.hasTexture(eventData.texture);
                        if (hasTexture) {
                            break;
                        }
                    }
                    eventData.hasTexture = hasTexture;
                    break;
                }
            case 2 /* MaterialPluginEvent.Disposed */ :
                {
                    const eventData = info;
                    for (const plugin of this._plugins){
                        plugin.dispose(eventData.forceDisposeTextures);
                    }
                    break;
                }
            case 4 /* MaterialPluginEvent.GetDefineNames */ :
                {
                    const eventData = info;
                    eventData.defineNames = this._defineNamesFromPlugins;
                    break;
                }
            case 128 /* MaterialPluginEvent.PrepareEffect */ :
                {
                    const eventData = info;
                    for (const plugin of this._activePlugins){
                        eventData.fallbackRank = plugin.addFallbacks(eventData.defines, eventData.fallbacks, eventData.fallbackRank);
                        plugin.getAttributes(eventData.attributes, this._scene, eventData.mesh);
                    }
                    if (this._uniformList.length > 0) {
                        eventData.uniforms.push(...this._uniformList);
                    }
                    if (this._samplerList.length > 0) {
                        eventData.samplers.push(...this._samplerList);
                    }
                    if (this._uboList.length > 0) {
                        eventData.uniformBuffersNames.push(...this._uboList);
                    }
                    eventData.customCode = this._injectCustomCode(eventData, eventData.customCode);
                    break;
                }
            case 8 /* MaterialPluginEvent.PrepareUniformBuffer */ :
                {
                    const eventData = info;
                    this._uboDeclaration = "";
                    this._vertexDeclaration = "";
                    this._fragmentDeclaration = "";
                    this._uniformList = [];
                    this._samplerList = [];
                    this._uboList = [];
                    const isWebGPU = this._material.shaderLanguage === 1 /* ShaderLanguage.WGSL */ ;
                    for (const plugin of this._plugins){
                        const uniforms = plugin.getUniforms(this._material.shaderLanguage);
                        if (uniforms) {
                            if (uniforms.ubo) {
                                for (const uniform of uniforms.ubo){
                                    if (uniform.size && uniform.type) {
                                        const arraySize = uniform.arraySize ?? 0;
                                        eventData.ubo.addUniform(uniform.name, uniform.size, arraySize);
                                        if (isWebGPU) {
                                            let type;
                                            switch(uniform.type){
                                                case "mat4":
                                                    type = "mat4x4f";
                                                    break;
                                                case "float":
                                                    type = "f32";
                                                    break;
                                                default:
                                                    type = `${uniform.type}f`;
                                                    break;
                                            }
                                            if (arraySize > 0) {
                                                this._uboDeclaration += `uniform ${uniform.name}: array<${type}, ${arraySize}>;\n`;
                                            } else {
                                                this._uboDeclaration += `uniform ${uniform.name}: ${type};\n`;
                                            }
                                        } else {
                                            this._uboDeclaration += `${uniform.type} ${uniform.name}${arraySize > 0 ? `[${arraySize}]` : ""};\n`;
                                        }
                                    }
                                    this._uniformList.push(uniform.name);
                                }
                            }
                            if (uniforms.vertex) {
                                this._vertexDeclaration += uniforms.vertex + "\n";
                            }
                            if (uniforms.fragment) {
                                this._fragmentDeclaration += uniforms.fragment + "\n";
                            }
                            // These are uniforms which are used by the shader but not updated by the plugin directly.
                            // They still need to be present in the _uniformList so the Effect can determine their locations.
                            if (uniforms.externalUniforms) {
                                this._uniformList.push(...uniforms.externalUniforms);
                            }
                        }
                        plugin.getSamplers(this._samplerList);
                        plugin.getUniformBuffersNames(this._uboList);
                    }
                    break;
                }
        }
    }
    _collectPointNames(shaderType, customCode) {
        if (!customCode) {
            return;
        }
        for(const pointName in customCode){
            if (!this._codeInjectionPoints[shaderType]) {
                this._codeInjectionPoints[shaderType] = {};
            }
            this._codeInjectionPoints[shaderType][pointName] = true;
        }
    }
    _injectCustomCode(eventData, existingCallback) {
        return (shaderType, code)=>{
            if (existingCallback) {
                code = existingCallback(shaderType, code);
            }
            if (this._uboDeclaration) {
                code = code.replace("#define ADDITIONAL_UBO_DECLARATION", this._uboDeclaration);
            }
            if (this._vertexDeclaration) {
                code = code.replace("#define ADDITIONAL_VERTEX_DECLARATION", this._vertexDeclaration);
            }
            if (this._fragmentDeclaration) {
                code = code.replace("#define ADDITIONAL_FRAGMENT_DECLARATION", this._fragmentDeclaration);
            }
            const points = this._codeInjectionPoints?.[shaderType];
            if (!points) {
                return code;
            }
            let processorOptions = null;
            for(let pointName in points){
                let injectedCode = "";
                for (const plugin of this._activePlugins){
                    let customCode = plugin.getCustomCode(shaderType, this._material.shaderLanguage)?.[pointName];
                    if (!customCode) {
                        continue;
                    }
                    if (plugin.resolveIncludes) {
                        if (processorOptions === null) {
                            const shaderLanguage = 0 /* ShaderLanguage.GLSL */ ;
                            processorOptions = {
                                defines: [],
                                indexParameters: eventData.indexParameters,
                                isFragment: false,
                                shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
                                processor: undefined,
                                supportsUniformBuffers: this._engine.supportsUniformBuffers,
                                shadersRepository: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].GetShadersRepository(shaderLanguage),
                                includesShadersStore: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].GetIncludesShadersStore(shaderLanguage),
                                version: undefined,
                                platformName: this._engine.shaderPlatformName,
                                processingContext: undefined,
                                isNDCHalfZRange: this._engine.isNDCHalfZRange,
                                useReverseDepthBuffer: this._engine.useReverseDepthBuffer,
                                processCodeAfterIncludes: undefined
                            };
                        }
                        processorOptions.isFragment = shaderType === "fragment";
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Processors$2f$shaderProcessor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProcessIncludes"])(customCode, processorOptions, (code)=>customCode = code);
                    }
                    injectedCode += customCode + "\n";
                }
                if (injectedCode.length > 0) {
                    if (pointName.charAt(0) === "!") {
                        // pointName is a regular expression
                        pointName = pointName.substring(1);
                        let regexFlags = "g";
                        if (pointName.charAt(0) === "!") {
                            // no flags
                            regexFlags = "";
                            pointName = pointName.substring(1);
                        } else {
                            // get the flag(s)
                            const matchOption = RxOption.exec(pointName);
                            if (matchOption && matchOption.length >= 2) {
                                regexFlags = matchOption[1];
                                pointName = pointName.substring(regexFlags.length + 1);
                            }
                        }
                        if (regexFlags.indexOf("g") < 0) {
                            // we force the "g" flag so that the regexp object is stateful!
                            regexFlags += "g";
                        }
                        const sourceCode = code;
                        const rx = new RegExp(pointName, regexFlags);
                        let match = rx.exec(sourceCode);
                        while(match !== null){
                            let newCode = injectedCode;
                            for(let i = 0; i < match.length; ++i){
                                newCode = newCode.replace("$" + i, match[i]);
                            }
                            code = code.replace(match[0], newCode);
                            match = rx.exec(sourceCode);
                        }
                    } else {
                        const fullPointName = "#define " + pointName;
                        code = code.replace(fullPointName, "\n" + injectedCode + "\n" + fullPointName);
                    }
                }
            }
            return code;
        };
    }
}
/** Map a plugin class name to a #define name (used in the vertex/fragment shaders as a marker of the plugin usage) */ MaterialPluginManager._MaterialPluginClassToMainDefine = {};
MaterialPluginManager._MaterialPluginCounter = 0;
(()=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EngineStore"].OnEnginesDisposedObservable.add(()=>{
        UnregisterAllMaterialPlugins();
    });
})();
const Plugins = [];
let Inited = false;
let MaterialObserver = null;
function RegisterMaterialPlugin(pluginName, factory) {
    if (!Inited) {
        MaterialObserver = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$material$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Material"].OnEventObservable.add((material)=>{
            for (const [, factory] of Plugins){
                factory(material);
            }
        }, 1 /* MaterialPluginEvent.Created */ );
        Inited = true;
    }
    const existing = Plugins.filter(([name, _factory])=>name === pluginName);
    if (existing.length > 0) {
        existing[0][1] = factory;
    } else {
        Plugins.push([
            pluginName,
            factory
        ]);
    }
}
function UnregisterMaterialPlugin(pluginName) {
    for(let i = 0; i < Plugins.length; ++i){
        if (Plugins[i][0] === pluginName) {
            Plugins.splice(i, 1);
            if (Plugins.length === 0) {
                UnregisterAllMaterialPlugins();
            }
            return true;
        }
    }
    return false;
}
function UnregisterAllMaterialPlugins() {
    Plugins.length = 0;
    Inited = false;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$material$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Material"].OnEventObservable.remove(MaterialObserver);
    MaterialObserver = null;
} //# sourceMappingURL=materialPluginManager.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialPluginBase.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MaterialPluginBase",
    ()=>MaterialPluginBase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/decorators.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialPluginManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialPluginManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/decorators.serialization.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
;
;
;
;
;
class MaterialPluginBase {
    /**
     * Gets a boolean indicating that the plugin is compatible with a given shader language.
     * @param shaderLanguage The shader language to use.
     * @returns true if the plugin is compatible with the shader language
     */ isCompatible(shaderLanguage) {
        switch(shaderLanguage){
            case 0 /* ShaderLanguage.GLSL */ :
                return true;
            default:
                return false;
        }
    }
    _enable(enable) {
        if (enable) {
            this._pluginManager._activatePlugin(this);
        }
    }
    /**
     * Creates a new material plugin
     * @param material parent material of the plugin
     * @param name name of the plugin
     * @param priority priority of the plugin
     * @param defines list of defines used by the plugin. The value of the property is the default value for this property
     * @param addToPluginList true to add the plugin to the list of plugins managed by the material plugin manager of the material (default: true)
     * @param enable true to enable the plugin (it is handy if the plugin does not handle properties to switch its current activation)
     * @param resolveIncludes Indicates that any #include directive in the plugin code must be replaced by the corresponding code (default: false)
     */ constructor(material, name, priority, defines, addToPluginList = true, enable = false, resolveIncludes = false){
        /**
         * Defines the priority of the plugin. Lower numbers run first.
         */ this.priority = 500;
        /**
         * Indicates that any #include directive in the plugin code must be replaced by the corresponding code.
         */ this.resolveIncludes = false;
        /**
         * Indicates that this plugin should be notified for the extra events (HasRenderTargetTextures / FillRenderTargetTextures / HardBindForSubMesh)
         */ this.registerForExtraEvents = false;
        /**
         * Specifies if the material plugin should be serialized, `true` to skip serialization
         */ this.doNotSerialize = false;
        this._material = material;
        this.name = name;
        this.priority = priority;
        this.resolveIncludes = resolveIncludes;
        if (!material.pluginManager) {
            material.pluginManager = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialPluginManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialPluginManager"](material);
            material.onDisposeObservable.add(()=>{
                material.pluginManager = undefined;
            });
        }
        this._pluginDefineNames = defines;
        this._pluginManager = material.pluginManager;
        if (addToPluginList) {
            this._pluginManager._addPlugin(this);
        }
        if (enable) {
            this._enable(true);
        }
        this.markAllDefinesAsDirty = material._dirtyCallbacks[127];
    }
    /**
     * Gets the current class name useful for serialization or dynamic coding.
     * @returns The class name.
     */ getClassName() {
        return "MaterialPluginBase";
    }
    /**
     * Specifies that the submesh is ready to be used.
     * @param _defines the list of "defines" to update.
     * @param _scene defines the scene the material belongs to.
     * @param _engine the engine this scene belongs to.
     * @param _subMesh the submesh to check for readiness
     * @returns - boolean indicating that the submesh is ready or not.
     */ isReadyForSubMesh(_defines, _scene, _engine, _subMesh) {
        return true;
    }
    /**
     * Binds the material data (this function is called even if mustRebind() returns false)
     * @param _uniformBuffer defines the Uniform buffer to fill in.
     * @param _scene defines the scene the material belongs to.
     * @param _engine defines the engine the material belongs to.
     * @param _subMesh the submesh to bind data for
     */ hardBindForSubMesh(_uniformBuffer, _scene, _engine, _subMesh) {}
    /**
     * Binds the material data.
     * @param _uniformBuffer defines the Uniform buffer to fill in.
     * @param _scene defines the scene the material belongs to.
     * @param _engine the engine this scene belongs to.
     * @param _subMesh the submesh to bind data for
     */ bindForSubMesh(_uniformBuffer, _scene, _engine, _subMesh) {}
    /**
     * Disposes the resources of the material.
     * @param _forceDisposeTextures - Forces the disposal of all textures.
     */ dispose(_forceDisposeTextures) {}
    /**
     * Returns a list of custom shader code fragments to customize the shader.
     * @param _shaderType "vertex" or "fragment"
     * @param _shaderLanguage The shader language to use.
     * @returns null if no code to be added, or a list of pointName =\> code.
     * Note that `pointName` can also be a regular expression if it starts with a `!`.
     * In that case, the string found by the regular expression (if any) will be
     * replaced by the code provided.
     */ getCustomCode(_shaderType, _shaderLanguage = 0 /* ShaderLanguage.GLSL */ ) {
        return null;
    }
    /**
     * Collects all defines.
     * @param defines The object to append to.
     */ collectDefines(defines) {
        if (!this._pluginDefineNames) {
            return;
        }
        for (const key of Object.keys(this._pluginDefineNames)){
            if (key[0] === "_") {
                continue;
            }
            const type = typeof this._pluginDefineNames[key];
            defines[key] = {
                type: type === "number" ? "number" : type === "string" ? "string" : type === "boolean" ? "boolean" : "object",
                default: this._pluginDefineNames[key]
            };
        }
    }
    /**
     * Sets the defines for the next rendering. Called before PrepareDefinesForAttributes is called.
     * @param _defines the list of "defines" to update.
     * @param _scene defines the scene to the material belongs to.
     * @param _mesh the mesh being rendered
     */ prepareDefinesBeforeAttributes(_defines, _scene, _mesh) {}
    /**
     * Sets the defines for the next rendering
     * @param _defines the list of "defines" to update.
     * @param _scene defines the scene to the material belongs to.
     * @param _mesh the mesh being rendered
     */ prepareDefines(_defines, _scene, _mesh) {}
    /**
     * Checks to see if a texture is used in the material.
     * @param _texture - Base texture to use.
     * @returns - Boolean specifying if a texture is used in the material.
     */ hasTexture(_texture) {
        return false;
    }
    /**
     * Gets a boolean indicating that current material needs to register RTT
     * @returns true if this uses a render target otherwise false.
     */ hasRenderTargetTextures() {
        return false;
    }
    /**
     * Fills the list of render target textures.
     * @param _renderTargets the list of render targets to update
     */ fillRenderTargetTextures(_renderTargets) {}
    /**
     * Returns an array of the actively used textures.
     * @param _activeTextures Array of BaseTextures
     */ getActiveTextures(_activeTextures) {}
    /**
     * Returns the animatable textures.
     * @param _animatables Array of animatable textures.
     */ getAnimatables(_animatables) {}
    /**
     * Add fallbacks to the effect fallbacks list.
     * @param defines defines the Base texture to use.
     * @param fallbacks defines the current fallback list.
     * @param currentRank defines the current fallback rank.
     * @returns the new fallback rank.
     */ addFallbacks(defines, fallbacks, currentRank) {
        return currentRank;
    }
    /**
     * Gets the samplers used by the plugin.
     * @param _samplers list that the sampler names should be added to.
     */ getSamplers(_samplers) {}
    /**
     * Gets the attributes used by the plugin.
     * @param _attributes list that the attribute names should be added to.
     * @param _scene the scene that the material belongs to.
     * @param _mesh the mesh being rendered.
     */ getAttributes(_attributes, _scene, _mesh) {}
    /**
     * Gets the uniform buffers names added by the plugin.
     * @param _ubos list that the ubo names should be added to.
     */ getUniformBuffersNames(_ubos) {}
    /**
     * Gets the description of the uniforms to add to the ubo (if engine supports ubos) or to inject directly in the vertex/fragment shaders (if engine does not support ubos)
     * @param _shaderLanguage The shader language to use.
     * @returns the description of the uniforms
     */ getUniforms(_shaderLanguage = 0 /* ShaderLanguage.GLSL */ ) {
        return {};
    }
    /**
     * Makes a duplicate of the current configuration into another one.
     * @param plugin define the config where to copy the info
     */ copyTo(plugin) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SerializationHelper"].Clone(()=>plugin, this);
    }
    /**
     * Serializes this plugin configuration.
     * @returns - An object with the serialized config.
     */ serialize() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SerializationHelper"].Serialize(this);
    }
    /**
     * Parses a plugin configuration from a serialized object.
     * @param source - Serialized object.
     * @param scene Defines the scene we are parsing for
     * @param rootUrl Defines the rootUrl to load from
     */ parse(source, scene, rootUrl) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SerializationHelper"].Parse(()=>this, source, scene, rootUrl);
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], MaterialPluginBase.prototype, "name", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], MaterialPluginBase.prototype, "priority", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], MaterialPluginBase.prototype, "resolveIncludes", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], MaterialPluginBase.prototype, "registerForExtraEvents", void 0);
// Register Class Name
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.MaterialPluginBase", MaterialPluginBase); //# sourceMappingURL=materialPluginBase.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/material.detailMapConfiguration.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DetailMapConfiguration",
    ()=>DetailMapConfiguration,
    "MaterialDetailMapDefines",
    ()=>MaterialDetailMapDefines
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$material$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/material.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/decorators.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialFlags.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialDefines$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialDefines.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialPluginBase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialPluginBase.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialHelper.functions.js [app-ssr] (ecmascript) <locals>");
;
;
;
;
;
;
;
class MaterialDetailMapDefines extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialDefines$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialDefines"] {
    constructor(){
        super(...arguments);
        this.DETAIL = false;
        this.DETAILDIRECTUV = 0;
        this.DETAIL_NORMALBLENDMETHOD = 0;
    }
}
class DetailMapConfiguration extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialPluginBase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialPluginBase"] {
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
        super(material, "DetailMap", 140, new MaterialDetailMapDefines(), addToPluginList);
        this._texture = null;
        /**
         * Defines how strongly the detail diffuse/albedo channel is blended with the regular diffuse/albedo texture
         * Bigger values mean stronger blending
         */ this.diffuseBlendLevel = 1;
        /**
         * Defines how strongly the detail roughness channel is blended with the regular roughness value
         * Bigger values mean stronger blending. Only used with PBR materials
         */ this.roughnessBlendLevel = 1;
        /**
         * Defines how strong the bump effect from the detail map is
         * Bigger values mean stronger effect
         */ this.bumpLevel = 1;
        this._normalBlendMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$material$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Material"].MATERIAL_NORMALBLENDMETHOD_WHITEOUT;
        this._isEnabled = false;
        /**
         * Enable or disable the detail map on this material
         */ this.isEnabled = false;
        this._internalMarkAllSubMeshesAsTexturesDirty = material._dirtyCallbacks[1];
    }
    isReadyForSubMesh(defines, scene, engine) {
        if (!this._isEnabled) {
            return true;
        }
        if (defines._areTexturesDirty && scene.texturesEnabled) {
            if (engine.getCaps().standardDerivatives && this._texture && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].DetailTextureEnabled) {
                // Detail texture cannot be not blocking.
                if (!this._texture.isReady()) {
                    return false;
                }
            }
        }
        return true;
    }
    prepareDefines(defines, scene) {
        if (this._isEnabled) {
            defines.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod;
            const engine = scene.getEngine();
            if (defines._areTexturesDirty) {
                if (engine.getCaps().standardDerivatives && this._texture && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].DetailTextureEnabled && this._isEnabled) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareDefinesForMergedUV"])(this._texture, defines, "DETAIL");
                    defines.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod;
                } else {
                    defines.DETAIL = false;
                }
            }
        } else {
            defines.DETAIL = false;
        }
    }
    bindForSubMesh(uniformBuffer, scene) {
        if (!this._isEnabled) {
            return;
        }
        const isFrozen = this._material.isFrozen;
        if (!uniformBuffer.useUbo || !isFrozen || !uniformBuffer.isSync) {
            if (this._texture && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].DetailTextureEnabled) {
                uniformBuffer.updateFloat4("vDetailInfos", this._texture.coordinatesIndex, this.diffuseBlendLevel, this.bumpLevel, this.roughnessBlendLevel);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BindTextureMatrix"])(this._texture, uniformBuffer, "detail");
            }
        }
        // Textures
        if (scene.texturesEnabled) {
            if (this._texture && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].DetailTextureEnabled) {
                uniformBuffer.setTexture("detailSampler", this._texture);
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
            this._texture?.dispose();
        }
    }
    getClassName() {
        return "DetailMapConfiguration";
    }
    getSamplers(samplers) {
        samplers.push("detailSampler");
    }
    getUniforms() {
        return {
            ubo: [
                {
                    name: "vDetailInfos",
                    size: 4,
                    type: "vec4"
                },
                {
                    name: "detailMatrix",
                    size: 16,
                    type: "mat4"
                }
            ]
        };
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeAsTexture"])("detailTexture"),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], DetailMapConfiguration.prototype, "texture", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], DetailMapConfiguration.prototype, "diffuseBlendLevel", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], DetailMapConfiguration.prototype, "roughnessBlendLevel", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], DetailMapConfiguration.prototype, "bumpLevel", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], DetailMapConfiguration.prototype, "normalBlendMethod", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], DetailMapConfiguration.prototype, "isEnabled", void 0); //# sourceMappingURL=material.detailMapConfiguration.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialHelper.geometryrendering.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GeometryRenderingTextureClearType",
    ()=>GeometryRenderingTextureClearType,
    "MaterialHelperGeometryRendering",
    ()=>MaterialHelperGeometryRendering
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
;
var GeometryRenderingTextureClearType;
(function(GeometryRenderingTextureClearType) {
    /**
     * Clear the texture with zero.
     */ GeometryRenderingTextureClearType[GeometryRenderingTextureClearType["Zero"] = 0] = "Zero";
    /**
     * Clear the texture with one.
     */ GeometryRenderingTextureClearType[GeometryRenderingTextureClearType["One"] = 1] = "One";
    /**
     * Clear the texture with the maximum view Z value.
     */ GeometryRenderingTextureClearType[GeometryRenderingTextureClearType["MaxViewZ"] = 2] = "MaxViewZ";
})(GeometryRenderingTextureClearType || (GeometryRenderingTextureClearType = {}));
class MaterialHelperGeometryRendering {
    /**
     * Creates a new geometry rendering configuration.
     * @param renderPassId Render pass id the configuration is created for.
     * @returns The created configuration.
     */ static CreateConfiguration(renderPassId) {
        MaterialHelperGeometryRendering._Configurations[renderPassId] = {
            defines: {},
            previousWorldMatrices: {},
            previousViewProjection: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].Zero(),
            currentViewProjection: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].Zero(),
            previousBones: {},
            lastUpdateFrameId: -1,
            excludedSkinnedMesh: [],
            reverseCulling: false
        };
        return MaterialHelperGeometryRendering._Configurations[renderPassId];
    }
    /**
     * Deletes a geometry rendering configuration.
     * @param renderPassId The render pass id of the configuration to delete.
     */ static DeleteConfiguration(renderPassId) {
        delete MaterialHelperGeometryRendering._Configurations[renderPassId];
    }
    /**
     * Gets a geometry rendering configuration.
     * @param renderPassId The render pass id of the configuration to get.
     * @returns The configuration.
     */ static GetConfiguration(renderPassId) {
        return MaterialHelperGeometryRendering._Configurations[renderPassId];
    }
    /**
     * Adds uniforms and samplers for geometry rendering.
     * @param uniforms The array of uniforms to add to.
     * @param _samplers The array of samplers to add to.
     */ static AddUniformsAndSamplers(uniforms, _samplers) {
        uniforms.push("previousWorld", "previousViewProjection", "mPreviousBones");
    }
    /**
     * Marks a list of meshes as dirty for geometry rendering.
     * @param renderPassId The render pass id the meshes are marked as dirty for.
     * @param meshes The list of meshes to mark as dirty.
     */ static MarkAsDirty(renderPassId, meshes) {
        for (const mesh of meshes){
            if (!mesh.subMeshes) {
                continue;
            }
            for (const subMesh of mesh.subMeshes){
                subMesh._removeDrawWrapper(renderPassId);
            }
        }
    }
    /**
     * Prepares defines for geometry rendering.
     * @param renderPassId The render pass id the defines are prepared for.
     * @param mesh The mesh the defines are prepared for.
     * @param defines The defines to update according to the geometry rendering configuration.
     */ static PrepareDefines(renderPassId, mesh, defines) {
        if (!defines._arePrePassDirty) {
            return;
        }
        const configuration = MaterialHelperGeometryRendering._Configurations[renderPassId];
        if (!configuration) {
            return;
        }
        defines["PREPASS"] = true;
        defines["PREPASS_COLOR"] = false;
        defines["PREPASS_COLOR_INDEX"] = -1;
        let numMRT = 0;
        for(let i = 0; i < MaterialHelperGeometryRendering.GeometryTextureDescriptions.length; i++){
            const geometryTextureDescription = MaterialHelperGeometryRendering.GeometryTextureDescriptions[i];
            const defineName = geometryTextureDescription.define;
            const defineIndex = geometryTextureDescription.defineIndex;
            const index = configuration.defines[defineIndex];
            if (index !== undefined) {
                defines[defineName] = true;
                defines[defineIndex] = index;
                numMRT++;
            } else {
                defines[defineName] = false;
                delete defines[defineIndex];
            }
        }
        defines["SCENE_MRT_COUNT"] = numMRT;
        defines["BONES_VELOCITY_ENABLED"] = mesh.useBones && mesh.computeBonesUsingShaders && mesh.skeleton && !mesh.skeleton.isUsingTextureForMatrices && configuration.excludedSkinnedMesh.indexOf(mesh) === -1;
    }
    /**
     * Binds geometry rendering data for a mesh.
     * @param renderPassId The render pass id the geometry rendering data is bound for.
     * @param effect The effect to bind the geometry rendering data to.
     * @param mesh The mesh to bind the geometry rendering data for.
     * @param world The world matrix of the mesh.
     * @param material The material of the mesh.
     */ static Bind(renderPassId, effect, mesh, world, material) {
        const configuration = MaterialHelperGeometryRendering._Configurations[renderPassId];
        if (!configuration) {
            return;
        }
        const scene = mesh.getScene();
        const engine = scene.getEngine();
        if (configuration.reverseCulling) {
            engine.setStateCullFaceType(scene._mirroredCameraPosition ? material.cullBackFaces : !material.cullBackFaces);
        }
        if (configuration.defines["PREPASS_VELOCITY_INDEX"] !== undefined || configuration.defines["PREPASS_VELOCITY_LINEAR_INDEX"] !== undefined) {
            if (!configuration.previousWorldMatrices[mesh.uniqueId]) {
                configuration.previousWorldMatrices[mesh.uniqueId] = world.clone();
            }
            if (!configuration.previousViewProjection) {
                configuration.previousViewProjection = scene.getTransformMatrix().clone();
                configuration.currentViewProjection = scene.getTransformMatrix().clone();
            }
            if (configuration.currentViewProjection.updateFlag !== scene.getTransformMatrix().updateFlag) {
                // First update of the prepass configuration for this rendering pass
                configuration.lastUpdateFrameId = engine.frameId;
                configuration.previousViewProjection.copyFrom(configuration.currentViewProjection);
                configuration.currentViewProjection.copyFrom(scene.getTransformMatrix());
            } else if (configuration.lastUpdateFrameId !== engine.frameId) {
                // The scene transformation did not change from the previous frame (so no camera motion), we must update previousViewProjection accordingly
                configuration.lastUpdateFrameId = engine.frameId;
                configuration.previousViewProjection.copyFrom(configuration.currentViewProjection);
            }
            effect.setMatrix("previousWorld", configuration.previousWorldMatrices[mesh.uniqueId]);
            effect.setMatrix("previousViewProjection", configuration.previousViewProjection);
            configuration.previousWorldMatrices[mesh.uniqueId] = world.clone();
            if (mesh.useBones && mesh.computeBonesUsingShaders && mesh.skeleton) {
                const skeleton = mesh.skeleton;
                if (!skeleton.isUsingTextureForMatrices || effect.getUniformIndex("boneTextureWidth") === -1) {
                    const matrices = skeleton.getTransformMatrices(mesh);
                    if (matrices) {
                        if (!configuration.previousBones[mesh.uniqueId]) {
                            configuration.previousBones[mesh.uniqueId] = matrices.slice();
                        }
                        effect.setMatrices("mPreviousBones", configuration.previousBones[mesh.uniqueId]);
                        configuration.previousBones[mesh.uniqueId].set(matrices);
                    }
                }
            }
        }
    }
}
/**
 * Descriptions of the geometry textures.
 */ MaterialHelperGeometryRendering.GeometryTextureDescriptions = [
    {
        type: 0,
        name: "Irradiance",
        clearType: 0 /* GeometryRenderingTextureClearType.Zero */ ,
        define: "PREPASS_IRRADIANCE",
        defineIndex: "PREPASS_IRRADIANCE_INDEX"
    },
    {
        type: 1,
        name: "WorldPosition",
        clearType: 0 /* GeometryRenderingTextureClearType.Zero */ ,
        define: "PREPASS_POSITION",
        defineIndex: "PREPASS_POSITION_INDEX"
    },
    {
        type: 2,
        name: "Velocity",
        clearType: 0 /* GeometryRenderingTextureClearType.Zero */ ,
        define: "PREPASS_VELOCITY",
        defineIndex: "PREPASS_VELOCITY_INDEX"
    },
    {
        type: 3,
        name: "Reflectivity",
        clearType: 0 /* GeometryRenderingTextureClearType.Zero */ ,
        define: "PREPASS_REFLECTIVITY",
        defineIndex: "PREPASS_REFLECTIVITY_INDEX"
    },
    {
        type: 5,
        name: "ViewDepth",
        clearType: 2 /* GeometryRenderingTextureClearType.MaxViewZ */ ,
        define: "PREPASS_DEPTH",
        defineIndex: "PREPASS_DEPTH_INDEX"
    },
    {
        type: 6,
        name: "ViewNormal",
        clearType: 0 /* GeometryRenderingTextureClearType.Zero */ ,
        define: "PREPASS_NORMAL",
        defineIndex: "PREPASS_NORMAL_INDEX"
    },
    {
        type: 7,
        name: "AlbedoSqrt",
        clearType: 0 /* GeometryRenderingTextureClearType.Zero */ ,
        define: "PREPASS_ALBEDO_SQRT",
        defineIndex: "PREPASS_ALBEDO_SQRT_INDEX"
    },
    {
        type: 8,
        name: "WorldNormal",
        clearType: 0 /* GeometryRenderingTextureClearType.Zero */ ,
        define: "PREPASS_WORLD_NORMAL",
        defineIndex: "PREPASS_WORLD_NORMAL_INDEX"
    },
    {
        type: 9,
        name: "LocalPosition",
        clearType: 0 /* GeometryRenderingTextureClearType.Zero */ ,
        define: "PREPASS_LOCAL_POSITION",
        defineIndex: "PREPASS_LOCAL_POSITION_INDEX"
    },
    {
        type: 10,
        name: "ScreenDepth",
        clearType: 1 /* GeometryRenderingTextureClearType.One */ ,
        define: "PREPASS_SCREENSPACE_DEPTH",
        defineIndex: "PREPASS_SCREENSPACE_DEPTH_INDEX"
    },
    {
        type: 11,
        name: "LinearVelocity",
        clearType: 0 /* GeometryRenderingTextureClearType.Zero */ ,
        define: "PREPASS_VELOCITY_LINEAR",
        defineIndex: "PREPASS_VELOCITY_LINEAR_INDEX"
    },
    {
        type: 12,
        name: "Albedo",
        clearType: 0 /* GeometryRenderingTextureClearType.Zero */ ,
        define: "PREPASS_ALBEDO",
        defineIndex: "PREPASS_ALBEDO_INDEX"
    },
    {
        type: 13,
        name: "NormalizedViewDepth",
        clearType: 1 /* GeometryRenderingTextureClearType.One */ ,
        define: "PREPASS_NORMALIZED_VIEW_DEPTH",
        defineIndex: "PREPASS_NORMALIZED_VIEW_DEPTH_INDEX"
    }
];
MaterialHelperGeometryRendering._Configurations = {}; //# sourceMappingURL=materialHelper.geometryrendering.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/uv.defines.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Mixin to add UV defines to your material defines
 * @internal
 */ __turbopack_context__.s([
    "UVDefinesMixin",
    ()=>UVDefinesMixin
]);
function UVDefinesMixin(base) {
    return class extends base {
        constructor(){
            super(...arguments);
            this.MAINUV1 = false;
            this.MAINUV2 = false;
            this.MAINUV3 = false;
            this.MAINUV4 = false;
            this.MAINUV5 = false;
            this.MAINUV6 = false;
            this.UV1 = false;
            this.UV2 = false;
            this.UV3 = false;
            this.UV4 = false;
            this.UV5 = false;
            this.UV6 = false;
        }
    };
} //# sourceMappingURL=uv.defines.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/imageProcessing.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/naming-convention */ __turbopack_context__.s([
    "ImageProcessingMixin",
    ()=>ImageProcessingMixin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/decorators.js [app-ssr] (ecmascript)");
;
function ImageProcessingMixin(base) {
    return class extends base {
        /**
         * Constructor for the ImageProcessingMixin.
         * @param args - arguments to pass to the base class constructor
         */ constructor(...args){
            super(...args);
            // Decorators don't work on this annonymous class
            // so I'm setting this up manually.
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeAsImageProcessingConfiguration"].call(this, this, "_imageProcessingConfiguration");
        }
        /**
         * Gets the image processing configuration used either in this material.
         */ get imageProcessingConfiguration() {
            return this._imageProcessingConfiguration;
        }
        /**
         * Sets the Default image processing configuration used either in the this material.
         *
         * If sets to null, the scene one is in use.
         */ set imageProcessingConfiguration(value) {
            this._attachImageProcessingConfiguration(value);
            // Ensure the effect will be rebuilt.
            if (this._markAllSubMeshesAsImageProcessingDirty) {
                this._markAllSubMeshesAsImageProcessingDirty();
            }
        }
        /**
         * Attaches a new image processing configuration to the Standard Material.
         * @param configuration
         */ _attachImageProcessingConfiguration(configuration) {
            if (configuration === this._imageProcessingConfiguration) {
                return;
            }
            // Detaches observer
            if (this._imageProcessingConfiguration && this._imageProcessingObserver) {
                this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver);
            }
            // Pick the scene configuration if needed
            if (!configuration && this.getScene) {
                this._imageProcessingConfiguration = this.getScene().imageProcessingConfiguration;
            } else if (configuration) {
                this._imageProcessingConfiguration = configuration;
            }
            // Attaches observer
            if (this._imageProcessingConfiguration) {
                this._imageProcessingObserver = this._imageProcessingConfiguration.onUpdateParameters.add(()=>{
                    // Ensure the effect will be rebuilt.
                    if (this._markAllSubMeshesAsImageProcessingDirty) {
                        this._markAllSubMeshesAsImageProcessingDirty();
                    }
                });
            }
        }
        /**
         * Gets whether the color curves effect is enabled.
         */ get cameraColorCurvesEnabled() {
            return this.imageProcessingConfiguration.colorCurvesEnabled;
        }
        /**
         * Sets whether the color curves effect is enabled.
         */ set cameraColorCurvesEnabled(value) {
            this.imageProcessingConfiguration.colorCurvesEnabled = value;
        }
        /**
         * Gets whether the color grading effect is enabled.
         */ get cameraColorGradingEnabled() {
            return this.imageProcessingConfiguration.colorGradingEnabled;
        }
        /**
         * Gets whether the color grading effect is enabled.
         */ set cameraColorGradingEnabled(value) {
            this.imageProcessingConfiguration.colorGradingEnabled = value;
        }
        /**
         * Gets whether tonemapping is enabled or not.
         */ get cameraToneMappingEnabled() {
            return this._imageProcessingConfiguration.toneMappingEnabled;
        }
        /**
         * Sets whether tonemapping is enabled or not
         */ set cameraToneMappingEnabled(value) {
            this._imageProcessingConfiguration.toneMappingEnabled = value;
        }
        /**
         * The camera exposure used on this material.
         * This property is here and not in the camera to allow controlling exposure without full screen post process.
         * This corresponds to a photographic exposure.
         */ get cameraExposure() {
            return this._imageProcessingConfiguration.exposure;
        }
        /**
         * The camera exposure used on this material.
         * This property is here and not in the camera to allow controlling exposure without full screen post process.
         * This corresponds to a photographic exposure.
         */ set cameraExposure(value) {
            this._imageProcessingConfiguration.exposure = value;
        }
        /**
         * Gets The camera contrast used on this material.
         */ get cameraContrast() {
            return this._imageProcessingConfiguration.contrast;
        }
        /**
         * Sets The camera contrast used on this material.
         */ set cameraContrast(value) {
            this._imageProcessingConfiguration.contrast = value;
        }
        /**
         * Gets the Color Grading 2D Lookup Texture.
         */ get cameraColorGradingTexture() {
            return this._imageProcessingConfiguration.colorGradingTexture;
        }
        /**
         * Sets the Color Grading 2D Lookup Texture.
         */ set cameraColorGradingTexture(value) {
            this._imageProcessingConfiguration.colorGradingTexture = value;
        }
        /**
         * The color grading curves provide additional color adjustmnent that is applied after any color grading transform (3D LUT).
         * They allow basic adjustment of saturation and small exposure adjustments, along with color filter tinting to provide white balance adjustment or more stylistic effects.
         * These are similar to controls found in many professional imaging or colorist software. The global controls are applied to the entire image. For advanced tuning, extra controls are provided to adjust the shadow, midtone and highlight areas of the image;
         * corresponding to low luminance, medium luminance, and high luminance areas respectively.
         */ get cameraColorCurves() {
            return this._imageProcessingConfiguration.colorCurves;
        }
        /**
         * The color grading curves provide additional color adjustment that is applied after any color grading transform (3D LUT).
         * They allow basic adjustment of saturation and small exposure adjustments, along with color filter tinting to provide white balance adjustment or more stylistic effects.
         * These are similar to controls found in many professional imaging or colorist software. The global controls are applied to the entire image. For advanced tuning, extra controls are provided to adjust the shadow, midtone and highlight areas of the image;
         * corresponding to low luminance, medium luminance, and high luminance areas respectively.
         */ set cameraColorCurves(value) {
            this._imageProcessingConfiguration.colorCurves = value;
        }
    };
} //# sourceMappingURL=imageProcessing.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/shaderMaterial.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ShaderMaterial",
    ()=>ShaderMaterial
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/decorators.serialization.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$scene$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/scene.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Buffers/buffer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/texture.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$effectFallbacks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/effectFallbacks.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$webRequest$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/webRequest.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$pushMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/pushMaterial.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/engineStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$clipPlaneMaterialHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/clipPlaneMaterialHelper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialHelper.functions.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$pure$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialHelper.functions.pure.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
const OnCreatedEffectParameters = {
    effect: null,
    subMesh: null
};
class ShaderMaterial extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$pushMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PushMaterial"] {
    /**
     * Instantiate a new shader material.
     * The ShaderMaterial object has the necessary methods to pass data from your scene to the Vertex and Fragment Shaders and returns a material that can be applied to any mesh.
     * This returned material effects how the mesh will look based on the code in the shaders.
     * @see https://doc.babylonjs.com/features/featuresDeepDive/materials/shaders/shaderMaterial
     * @param name Define the name of the material in the scene
     * @param scene Define the scene the material belongs to
     * @param shaderPath Defines  the route to the shader code.
     * @param options Define the options used to create the shader
     * @param storeEffectOnSubMeshes true to store effect on submeshes, false to store the effect directly in the material class.
     */ constructor(name, scene, shaderPath, options = {}, storeEffectOnSubMeshes = true){
        super(name, scene, storeEffectOnSubMeshes);
        this._textures = {};
        this._internalTextures = {};
        this._textureArrays = {};
        this._externalTextures = {};
        this._floats = {};
        this._ints = {};
        this._uints = {};
        this._floatsArrays = {};
        this._colors3 = {};
        this._colors3Arrays = {};
        this._colors4 = {};
        this._colors4Arrays = {};
        this._vectors2 = {};
        this._vectors3 = {};
        this._vectors4 = {};
        this._quaternions = {};
        this._quaternionsArrays = {};
        this._matrices = {};
        this._matrixArrays = {};
        this._matrices3x3 = {};
        this._matrices2x2 = {};
        this._vectors2Arrays = {};
        this._vectors3Arrays = {};
        this._vectors4Arrays = {};
        this._uniformBuffers = {};
        this._textureSamplers = {};
        this._storageBuffers = {};
        this._cachedWorldViewMatrix = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"]();
        this._cachedWorldViewProjectionMatrix = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"]();
        this._multiview = false;
        /**
         * @internal
         */ this._materialHelperNeedsPreviousMatrices = false;
        this._shaderPath = shaderPath;
        this._options = {
            needAlphaBlending: false,
            needAlphaTesting: false,
            attributes: [
                "position",
                "normal",
                "uv"
            ],
            uniforms: [
                "worldViewProjection"
            ],
            uniformBuffers: [],
            samplers: [],
            externalTextures: [],
            samplerObjects: [],
            storageBuffers: [],
            defines: [],
            useClipPlane: false,
            ...options
        };
    }
    /**
     * Gets the shader path used to define the shader code
     * It can be modified to trigger a new compilation
     */ get shaderPath() {
        return this._shaderPath;
    }
    /**
     * Sets the shader path used to define the shader code
     * It can be modified to trigger a new compilation
     */ set shaderPath(shaderPath) {
        this._shaderPath = shaderPath;
    }
    /**
     * Gets the options used to compile the shader.
     * They can be modified to trigger a new compilation
     */ get options() {
        return this._options;
    }
    /**
     * is multiview set to true?
     */ get isMultiview() {
        return this._multiview;
    }
    /**
     * Gets the current class name of the material e.g. "ShaderMaterial"
     * Mainly use in serialization.
     * @returns the class name
     */ getClassName() {
        return "ShaderMaterial";
    }
    /**
     * Specifies if the material will require alpha blending
     * @returns a boolean specifying if alpha blending is needed
     */ needAlphaBlending() {
        return this.alpha < 1.0 || this._options.needAlphaBlending;
    }
    /**
     * Specifies if this material should be rendered in alpha test mode
     * @returns a boolean specifying if an alpha test is needed.
     */ needAlphaTesting() {
        return this._options.needAlphaTesting;
    }
    _checkUniform(uniformName) {
        if (this._options.uniforms.indexOf(uniformName) === -1) {
            this._options.uniforms.push(uniformName);
        }
    }
    /**
     * Set a texture in the shader.
     * @param name Define the name of the uniform samplers as defined in the shader
     * @param texture Define the texture to bind to this sampler
     * @returns the material itself allowing "fluent" like uniform updates
     */ setTexture(name, texture) {
        if (this._options.samplers.indexOf(name) === -1) {
            this._options.samplers.push(name);
        }
        this._textures[name] = texture;
        return this;
    }
    /**
     * Set an internal texture in the shader.
     * @param name Define the name of the uniform samplers as defined in the shader
     * @param texture Define the texture to bind to this sampler
     * @returns the material itself allowing "fluent" like uniform updates
     */ setInternalTexture(name, texture) {
        if (this._options.samplers.indexOf(name) === -1) {
            this._options.samplers.push(name);
        }
        this._internalTextures[name] = texture;
        return this;
    }
    /**
     * Remove a texture from the material.
     * @param name Define the name of the texture to remove
     */ removeTexture(name) {
        delete this._textures[name];
    }
    /**
     * Set a texture array in the shader.
     * @param name Define the name of the uniform sampler array as defined in the shader
     * @param textures Define the list of textures to bind to this sampler
     * @returns the material itself allowing "fluent" like uniform updates
     */ setTextureArray(name, textures) {
        if (this._options.samplers.indexOf(name) === -1) {
            this._options.samplers.push(name);
        }
        this._checkUniform(name);
        this._textureArrays[name] = textures;
        return this;
    }
    /**
     * Set an internal texture in the shader.
     * @param name Define the name of the uniform samplers as defined in the shader
     * @param texture Define the texture to bind to this sampler
     * @returns the material itself allowing "fluent" like uniform updates
     */ setExternalTexture(name, texture) {
        if (this._options.externalTextures.indexOf(name) === -1) {
            this._options.externalTextures.push(name);
        }
        this._externalTextures[name] = texture;
        return this;
    }
    /**
     * Set a float in the shader.
     * @param name Define the name of the uniform as defined in the shader
     * @param value Define the value to give to the uniform
     * @returns the material itself allowing "fluent" like uniform updates
     */ setFloat(name, value) {
        this._checkUniform(name);
        this._floats[name] = value;
        return this;
    }
    /**
     * Set a int in the shader.
     * @param name Define the name of the uniform as defined in the shader
     * @param value Define the value to give to the uniform
     * @returns the material itself allowing "fluent" like uniform updates
     */ setInt(name, value) {
        this._checkUniform(name);
        this._ints[name] = value;
        return this;
    }
    /**
     * Set a unsigned int in the shader.
     * @param name Define the name of the uniform as defined in the shader
     * @param value Define the value to give to the uniform
     * @returns the material itself allowing "fluent" like uniform updates
     */ setUInt(name, value) {
        this._checkUniform(name);
        this._uints[name] = value;
        return this;
    }
    /**
     * Set an array of floats in the shader.
     * @param name Define the name of the uniform as defined in the shader
     * @param value Define the value to give to the uniform
     * @returns the material itself allowing "fluent" like uniform updates
     */ setFloats(name, value) {
        this._checkUniform(name);
        this._floatsArrays[name] = value;
        return this;
    }
    /**
     * Set a vec3 in the shader from a Color3.
     * @param name Define the name of the uniform as defined in the shader
     * @param value Define the value to give to the uniform
     * @returns the material itself allowing "fluent" like uniform updates
     */ setColor3(name, value) {
        this._checkUniform(name);
        this._colors3[name] = value;
        return this;
    }
    /**
     * Set a vec3 array in the shader from a IColor3Like array.
     * @param name Define the name of the uniform as defined in the shader
     * @param value Define the value to give to the uniform
     * @returns the material itself allowing "fluent" like uniform updates
     */ setColor3Array(name, value) {
        this._checkUniform(name);
        this._colors3Arrays[name] = value.reduce((arr, color)=>{
            arr.push(color.r, color.g, color.b);
            return arr;
        }, []);
        return this;
    }
    /**
     * Set a vec4 in the shader from a Color4.
     * @param name Define the name of the uniform as defined in the shader
     * @param value Define the value to give to the uniform
     * @returns the material itself allowing "fluent" like uniform updates
     */ setColor4(name, value) {
        this._checkUniform(name);
        this._colors4[name] = value;
        return this;
    }
    /**
     * Set a vec4 array in the shader from a IColor4Like array.
     * @param name Define the name of the uniform as defined in the shader
     * @param value Define the value to give to the uniform
     * @returns the material itself allowing "fluent" like uniform updates
     */ setColor4Array(name, value) {
        this._checkUniform(name);
        this._colors4Arrays[name] = value.reduce((arr, color)=>{
            arr.push(color.r, color.g, color.b, color.a);
            return arr;
        }, []);
        return this;
    }
    /**
     * Set a vec2 in the shader from a Vector2.
     * @param name Define the name of the uniform as defined in the shader
     * @param value Define the value to give to the uniform
     * @returns the material itself allowing "fluent" like uniform updates
     */ setVector2(name, value) {
        this._checkUniform(name);
        this._vectors2[name] = value;
        return this;
    }
    /**
     * Set a vec3 in the shader from a Vector3.
     * @param name Define the name of the uniform as defined in the shader
     * @param value Define the value to give to the uniform
     * @returns the material itself allowing "fluent" like uniform updates
     */ setVector3(name, value) {
        this._checkUniform(name);
        this._vectors3[name] = value;
        return this;
    }
    /**
     * Set a vec4 in the shader from a Vector4.
     * @param name Define the name of the uniform as defined in the shader
     * @param value Define the value to give to the uniform
     * @returns the material itself allowing "fluent" like uniform updates
     */ setVector4(name, value) {
        this._checkUniform(name);
        this._vectors4[name] = value;
        return this;
    }
    /**
     * Set a vec4 in the shader from a Quaternion.
     * @param name Define the name of the uniform as defined in the shader
     * @param value Define the value to give to the uniform
     * @returns the material itself allowing "fluent" like uniform updates
     */ setQuaternion(name, value) {
        this._checkUniform(name);
        this._quaternions[name] = value;
        return this;
    }
    /**
     * Set a vec4 array in the shader from a Quaternion array.
     * @param name Define the name of the uniform as defined in the shader
     * @param value Define the value to give to the uniform
     * @returns the material itself allowing "fluent" like uniform updates
     */ setQuaternionArray(name, value) {
        this._checkUniform(name);
        this._quaternionsArrays[name] = value.reduce((arr, quaternion)=>{
            quaternion.toArray(arr, arr.length);
            return arr;
        }, []);
        return this;
    }
    /**
     * Set a mat4 in the shader from a Matrix.
     * @param name Define the name of the uniform as defined in the shader
     * @param value Define the value to give to the uniform
     * @returns the material itself allowing "fluent" like uniform updates
     */ setMatrix(name, value) {
        this._checkUniform(name);
        this._matrices[name] = value;
        return this;
    }
    /**
     * Set a float32Array in the shader from a matrix array.
     * @param name Define the name of the uniform as defined in the shader
     * @param value Define the value to give to the uniform
     * @returns the material itself allowing "fluent" like uniform updates
     */ setMatrices(name, value) {
        this._checkUniform(name);
        const float32Array = new Float32Array(value.length * 16);
        for(let index = 0; index < value.length; index++){
            const matrix = value[index];
            matrix.copyToArray(float32Array, index * 16);
        }
        this._matrixArrays[name] = float32Array;
        return this;
    }
    /**
     * Set a mat3 in the shader from a Float32Array.
     * @param name Define the name of the uniform as defined in the shader
     * @param value Define the value to give to the uniform
     * @returns the material itself allowing "fluent" like uniform updates
     */ setMatrix3x3(name, value) {
        this._checkUniform(name);
        this._matrices3x3[name] = value;
        return this;
    }
    /**
     * Set a mat2 in the shader from a Float32Array.
     * @param name Define the name of the uniform as defined in the shader
     * @param value Define the value to give to the uniform
     * @returns the material itself allowing "fluent" like uniform updates
     */ setMatrix2x2(name, value) {
        this._checkUniform(name);
        this._matrices2x2[name] = value;
        return this;
    }
    /**
     * Set a vec2 array in the shader from a number array.
     * @param name Define the name of the uniform as defined in the shader
     * @param value Define the value to give to the uniform
     * @returns the material itself allowing "fluent" like uniform updates
     */ setArray2(name, value) {
        this._checkUniform(name);
        this._vectors2Arrays[name] = value;
        return this;
    }
    /**
     * Set a vec3 array in the shader from a number array.
     * @param name Define the name of the uniform as defined in the shader
     * @param value Define the value to give to the uniform
     * @returns the material itself allowing "fluent" like uniform updates
     */ setArray3(name, value) {
        this._checkUniform(name);
        this._vectors3Arrays[name] = value;
        return this;
    }
    /**
     * Set a vec4 array in the shader from a number array.
     * @param name Define the name of the uniform as defined in the shader
     * @param value Define the value to give to the uniform
     * @returns the material itself allowing "fluent" like uniform updates
     */ setArray4(name, value) {
        this._checkUniform(name);
        this._vectors4Arrays[name] = value;
        return this;
    }
    /**
     * Set a uniform buffer in the shader
     * @param name Define the name of the uniform as defined in the shader
     * @param buffer Define the value to give to the uniform
     * @returns the material itself allowing "fluent" like uniform updates
     */ setUniformBuffer(name, buffer) {
        if (this._options.uniformBuffers.indexOf(name) === -1) {
            this._options.uniformBuffers.push(name);
        }
        this._uniformBuffers[name] = buffer;
        return this;
    }
    /**
     * Set a texture sampler in the shader
     * @param name Define the name of the uniform as defined in the shader
     * @param sampler Define the value to give to the uniform
     * @returns the material itself allowing "fluent" like uniform updates
     */ setTextureSampler(name, sampler) {
        if (this._options.samplerObjects.indexOf(name) === -1) {
            this._options.samplerObjects.push(name);
        }
        this._textureSamplers[name] = sampler;
        return this;
    }
    /**
     * Set a storage buffer in the shader
     * @param name Define the name of the storage buffer as defined in the shader
     * @param buffer Define the value to give to the uniform
     * @returns the material itself allowing "fluent" like uniform updates
     */ setStorageBuffer(name, buffer) {
        if (this._options.storageBuffers.indexOf(name) === -1) {
            this._options.storageBuffers.push(name);
        }
        this._storageBuffers[name] = buffer;
        return this;
    }
    /**
     * Adds, removes, or replaces the specified shader define and value.
     * * setDefine("MY_DEFINE", true); // enables a boolean define
     * * setDefine("MY_DEFINE", "0.5"); // adds "#define MY_DEFINE 0.5" to the shader (or sets and replaces the value of any existing define with that name)
     * * setDefine("MY_DEFINE", false); // disables and removes the define
     * Note if the active defines do change, the shader will be recompiled and this can be expensive.
     * @param define the define name e.g., "OUTPUT_TO_SRGB" or "#define OUTPUT_TO_SRGB". If the define was passed into the constructor already, the version used should match that, and in either case, it should not include any appended value.
     * @param value either the value of the define (e.g. a numerical value) or for booleans, true if the define should be enabled or false if it should be disabled
     * @returns the material itself allowing "fluent" like uniform updates
     */ setDefine(define, value) {
        // First remove any existing define with this name.
        const defineName = define.trimEnd() + " ";
        const existingDefineIdx = this.options.defines.findIndex((x)=>x === define || x.startsWith(defineName));
        if (existingDefineIdx >= 0) {
            this.options.defines.splice(existingDefineIdx, 1);
        }
        // Then add the new define value. (If it's a boolean value and false, don't add it.)
        if (typeof value !== "boolean" || value) {
            this.options.defines.push(defineName + value);
        }
        return this;
    }
    /**
     * Specifies that the submesh is ready to be used
     * @param mesh defines the mesh to check
     * @param subMesh defines which submesh to check
     * @param useInstances specifies that instances should be used
     * @returns a boolean indicating that the submesh is ready or not
     */ isReadyForSubMesh(mesh, subMesh, useInstances) {
        return this.isReady(mesh, useInstances, subMesh);
    }
    /**
     * Checks if the material is ready to render the requested mesh
     * @param mesh Define the mesh to render
     * @param useInstances Define whether or not the material is used with instances
     * @param subMesh defines which submesh to render
     * @returns true if ready, otherwise false
     */ isReady(mesh, useInstances, subMesh) {
        const storeEffectOnSubMeshes = subMesh && this._storeEffectOnSubMeshes;
        if (this.isFrozen) {
            const drawWrapper = storeEffectOnSubMeshes ? subMesh._drawWrapper : this._drawWrapper;
            if (drawWrapper.effect && drawWrapper._wasPreviouslyReady && drawWrapper._wasPreviouslyUsingInstances === useInstances) {
                return true;
            }
        }
        const scene = this.getScene();
        const engine = scene.getEngine();
        // Instances
        const defines = [];
        const attribs = [];
        let fallbacks = null;
        let shaderName = this._shaderPath, uniforms = this._options.uniforms, uniformBuffers = this._options.uniformBuffers, samplers = this._options.samplers;
        // global multiview
        if (engine.getCaps().multiview && scene.activeCamera && scene.activeCamera.outputRenderTarget && scene.activeCamera.outputRenderTarget.getViewCount() > 1) {
            this._multiview = true;
            defines.push("#define MULTIVIEW");
            if (uniforms.indexOf("viewProjection") !== -1 && uniforms.indexOf("viewProjectionR") === -1) {
                uniforms.push("viewProjectionR");
            }
        }
        for(let index = 0; index < this._options.defines.length; index++){
            const defineToAdd = this._options.defines[index].indexOf("#define") === 0 ? this._options.defines[index] : `#define ${this._options.defines[index]}`;
            defines.push(defineToAdd);
        }
        for(let index = 0; index < this._options.attributes.length; index++){
            attribs.push(this._options.attributes[index]);
        }
        if (mesh && mesh.isVerticesDataPresent(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].ColorKind)) {
            if (attribs.indexOf(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].ColorKind) === -1) {
                attribs.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].ColorKind);
            }
            defines.push("#define VERTEXCOLOR");
        }
        if (useInstances) {
            defines.push("#define INSTANCES");
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PushAttributesForInstances"])(attribs, this._materialHelperNeedsPreviousMatrices);
            if (mesh?.hasThinInstances) {
                defines.push("#define THIN_INSTANCES");
                if (mesh && mesh.isVerticesDataPresent(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].ColorInstanceKind)) {
                    attribs.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].ColorInstanceKind);
                    defines.push("#define INSTANCESCOLOR");
                }
            }
        }
        // Bones
        if (mesh && mesh.useBones && mesh.computeBonesUsingShaders && mesh.skeleton) {
            attribs.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].MatricesIndicesKind);
            attribs.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].MatricesWeightsKind);
            if (mesh.numBoneInfluencers > 4) {
                attribs.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].MatricesIndicesExtraKind);
                attribs.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].MatricesWeightsExtraKind);
            }
            const skeleton = mesh.skeleton;
            defines.push("#define NUM_BONE_INFLUENCERS " + mesh.numBoneInfluencers);
            fallbacks = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$effectFallbacks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EffectFallbacks"]();
            fallbacks.addCPUSkinningFallback(0, mesh);
            if (skeleton.isUsingTextureForMatrices) {
                defines.push("#define BONETEXTURE");
                if (uniforms.indexOf("boneTextureWidth") === -1) {
                    uniforms.push("boneTextureWidth");
                }
                if (this._options.samplers.indexOf("boneSampler") === -1) {
                    this._options.samplers.push("boneSampler");
                }
            } else {
                defines.push("#define BonesPerMesh " + (skeleton.bones.length + 1));
                if (uniforms.indexOf("mBones") === -1) {
                    uniforms.push("mBones");
                }
            }
        } else {
            defines.push("#define NUM_BONE_INFLUENCERS 0");
        }
        // Morph
        let numInfluencers = 0;
        const manager = mesh ? mesh.morphTargetManager : null;
        if (manager) {
            const uv = defines.indexOf("#define UV1") !== -1;
            const uv2 = defines.indexOf("#define UV2") !== -1;
            const tangent = defines.indexOf("#define TANGENT") !== -1;
            const normal = defines.indexOf("#define NORMAL") !== -1;
            const color = defines.indexOf("#define VERTEXCOLOR") !== -1;
            numInfluencers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareDefinesAndAttributesForMorphTargets"])(manager, defines, attribs, mesh, true, normal, tangent, uv, uv2, color // useColorMorph
            );
            if (manager.isUsingTextureForTargets) {
                if (uniforms.indexOf("morphTargetTextureIndices") === -1) {
                    uniforms.push("morphTargetTextureIndices");
                }
                if (this._options.samplers.indexOf("morphTargets") === -1) {
                    this._options.samplers.push("morphTargets");
                }
            }
            if (numInfluencers > 0) {
                uniforms = uniforms.slice();
                uniforms.push("morphTargetInfluences");
                uniforms.push("morphTargetCount");
                uniforms.push("morphTargetTextureInfo");
                uniforms.push("morphTargetTextureIndices");
            }
        } else {
            defines.push("#define NUM_MORPH_INFLUENCERS 0");
        }
        // Baked Vertex Animation
        if (mesh) {
            const bvaManager = mesh.bakedVertexAnimationManager;
            if (bvaManager && bvaManager.isEnabled) {
                defines.push("#define BAKED_VERTEX_ANIMATION_TEXTURE");
                if (uniforms.indexOf("bakedVertexAnimationSettings") === -1) {
                    uniforms.push("bakedVertexAnimationSettings");
                }
                if (uniforms.indexOf("bakedVertexAnimationTextureSizeInverted") === -1) {
                    uniforms.push("bakedVertexAnimationTextureSizeInverted");
                }
                if (uniforms.indexOf("bakedVertexAnimationTime") === -1) {
                    uniforms.push("bakedVertexAnimationTime");
                }
                if (this._options.samplers.indexOf("bakedVertexAnimationTexture") === -1) {
                    this._options.samplers.push("bakedVertexAnimationTexture");
                }
                if (useInstances) {
                    attribs.push("bakedVertexAnimationSettingsInstanced");
                }
            }
        }
        // Textures
        for(const name in this._textures){
            if (!this._textures[name].isReady()) {
                return false;
            }
        }
        for(const name in this._internalTextures){
            if (!this._internalTextures[name].isReady) {
                return false;
            }
        }
        // Alpha test
        if (mesh && this.needAlphaTestingForMesh(mesh)) {
            defines.push("#define ALPHATEST");
        }
        // Clip planes
        if (this._options.useClipPlane !== false) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$clipPlaneMaterialHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AddClipPlaneUniforms"])(uniforms);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$clipPlaneMaterialHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PrepareStringDefinesForClipPlanes"])(this, scene, defines);
        }
        // Fog
        if (scene.fogEnabled && mesh?.applyFog && scene.fogMode !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$scene$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Scene"].FOGMODE_NONE) {
            defines.push("#define FOG");
            if (uniforms.indexOf("view") === -1) {
                uniforms.push("view");
            }
            if (uniforms.indexOf("vFogInfos") === -1) {
                uniforms.push("vFogInfos");
            }
            if (uniforms.indexOf("vFogColor") === -1) {
                uniforms.push("vFogColor");
            }
        }
        // Misc
        if (this._useLogarithmicDepth) {
            defines.push("#define LOGARITHMICDEPTH");
            if (uniforms.indexOf("logarithmicDepthConstant") === -1) {
                uniforms.push("logarithmicDepthConstant");
            }
        }
        if (this.customShaderNameResolve) {
            uniforms = uniforms.slice();
            uniformBuffers = uniformBuffers.slice();
            samplers = samplers.slice();
            shaderName = this.customShaderNameResolve(this.name, uniforms, uniformBuffers, samplers, defines, attribs);
        }
        const renderingMesh = subMesh ? subMesh.getRenderingMesh() : mesh;
        if (renderingMesh && this.useVertexPulling) {
            defines.push("#define USE_VERTEX_PULLING");
            const indexBuffer = renderingMesh.geometry?.getIndexBuffer();
            if (indexBuffer) {
                defines.push("#define VERTEX_PULLING_USE_INDEX_BUFFER");
                if (indexBuffer.is32Bits) {
                    defines.push("#define VERTEX_PULLING_INDEX_BUFFER_32BITS");
                }
            }
        }
        const drawWrapper = storeEffectOnSubMeshes ? subMesh._getDrawWrapper(undefined, true) : this._drawWrapper;
        const previousEffect = drawWrapper?.effect ?? null;
        const previousDefines = drawWrapper?.defines ?? null;
        const join = defines.join("\n");
        let effect = previousEffect;
        if (previousDefines !== join) {
            effect = engine.createEffect(shaderName, {
                attributes: attribs,
                uniformsNames: uniforms,
                uniformBuffersNames: uniformBuffers,
                samplers: samplers,
                defines: join,
                fallbacks: fallbacks,
                onCompiled: this.onCompiled,
                onError: this.onError,
                indexParameters: {
                    maxSimultaneousMorphTargets: numInfluencers
                },
                shaderLanguage: this._options.shaderLanguage,
                extraInitializationsAsync: this._options.extraInitializationsAsync
            }, engine);
            if (storeEffectOnSubMeshes) {
                subMesh.setEffect(effect, join, this._materialContext);
            } else if (drawWrapper) {
                drawWrapper.setEffect(effect, join);
            }
            if (this._onEffectCreatedObservable) {
                OnCreatedEffectParameters.effect = effect;
                OnCreatedEffectParameters.subMesh = subMesh ?? mesh?.subMeshes[0] ?? null;
                this._onEffectCreatedObservable.notifyObservers(OnCreatedEffectParameters);
            }
        }
        drawWrapper._wasPreviouslyUsingInstances = !!useInstances;
        if (!effect?.isReady()) {
            return false;
        }
        if (previousEffect !== effect) {
            scene.resetCachedMaterial();
        }
        drawWrapper._wasPreviouslyReady = true;
        return true;
    }
    /**
     * Binds the world matrix to the material
     * @param world defines the world transformation matrix
     * @param effectOverride - If provided, use this effect instead of internal effect
     */ bindOnlyWorldMatrix(world, effectOverride) {
        const effect = effectOverride ?? this.getEffect();
        if (!effect) {
            return;
        }
        const uniforms = this._options.uniforms;
        if (uniforms.indexOf("world") !== -1) {
            effect.setMatrix("world", world);
        }
        const scene = this.getScene();
        if (uniforms.indexOf("worldView") !== -1) {
            world.multiplyToRef(scene.getViewMatrix(), this._cachedWorldViewMatrix);
            effect.setMatrix("worldView", this._cachedWorldViewMatrix);
        }
        if (uniforms.indexOf("worldViewProjection") !== -1) {
            world.multiplyToRef(scene.getTransformMatrix(), this._cachedWorldViewProjectionMatrix);
            effect.setMatrix("worldViewProjection", this._cachedWorldViewProjectionMatrix);
        }
        if (uniforms.indexOf("view") !== -1) {
            effect.setMatrix("view", scene.getViewMatrix());
        }
    }
    /**
     * Binds the submesh to this material by preparing the effect and shader to draw
     * @param world defines the world transformation matrix
     * @param mesh defines the mesh containing the submesh
     * @param subMesh defines the submesh to bind the material to
     */ bindForSubMesh(world, mesh, subMesh) {
        this.bind(world, mesh, subMesh._drawWrapperOverride?.effect, subMesh);
    }
    /**
     * Binds the material to the mesh
     * @param world defines the world transformation matrix
     * @param mesh defines the mesh to bind the material to
     * @param effectOverride - If provided, use this effect instead of internal effect
     * @param subMesh defines the submesh to bind the material to
     */ bind(world, mesh, effectOverride, subMesh) {
        // Std values
        const storeEffectOnSubMeshes = subMesh && this._storeEffectOnSubMeshes;
        const effect = effectOverride ?? (storeEffectOnSubMeshes ? subMesh.effect : this.getEffect());
        if (!effect) {
            return;
        }
        const scene = this.getScene();
        this._activeEffect = effect;
        this.bindOnlyWorldMatrix(world, effectOverride);
        const uniformBuffers = this._options.uniformBuffers;
        let useSceneUBO = false;
        if (effect && uniformBuffers && uniformBuffers.length > 0 && scene.getEngine().supportsUniformBuffers) {
            for(let i = 0; i < uniformBuffers.length; ++i){
                const bufferName = uniformBuffers[i];
                switch(bufferName){
                    case "Mesh":
                        if (mesh) {
                            mesh.getMeshUniformBuffer().bindToEffect(effect, "Mesh");
                            mesh.transferToEffect(world);
                        }
                        break;
                    case "Scene":
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BindSceneUniformBuffer"])(effect, scene.getSceneUniformBuffer());
                        scene.finalizeSceneUbo();
                        useSceneUBO = true;
                        break;
                }
            }
        }
        const mustRebind = mesh && storeEffectOnSubMeshes ? this._mustRebind(scene, effect, subMesh, mesh.visibility) : scene.getCachedMaterial() !== this;
        if (effect && mustRebind) {
            if (!useSceneUBO && this._options.uniforms.indexOf("view") !== -1) {
                effect.setMatrix("view", scene.getViewMatrix());
            }
            if (!useSceneUBO && this._options.uniforms.indexOf("projection") !== -1) {
                effect.setMatrix("projection", scene.getProjectionMatrix());
            }
            if (!useSceneUBO && this._options.uniforms.indexOf("viewProjection") !== -1) {
                effect.setMatrix("viewProjection", scene.getTransformMatrix());
                if (this._multiview) {
                    effect.setMatrix("viewProjectionR", scene._transformMatrixR);
                }
            }
            if (scene.activeCamera && this._options.uniforms.indexOf("cameraPosition") !== -1) {
                effect.setVector3("cameraPosition", scene.activeCamera.globalPosition);
            }
            // Bones
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BindBonesParameters"])(mesh, effect);
            // Clip plane
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$clipPlaneMaterialHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BindClipPlane"])(effect, this, scene);
            // Misc
            if (this._useLogarithmicDepth) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$pure$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BindLogDepth"])(storeEffectOnSubMeshes ? subMesh.materialDefines : effect.defines, effect, scene);
            }
            // Fog
            if (mesh) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BindFogParameters"])(scene, mesh, effect);
            }
            let name;
            // Texture
            for(name in this._textures){
                effect.setTexture(name, this._textures[name]);
            }
            for(name in this._internalTextures){
                effect._bindTexture(name, this._internalTextures[name]);
            }
            // Texture arrays
            for(name in this._textureArrays){
                effect.setTextureArray(name, this._textureArrays[name]);
            }
            // Int
            for(name in this._ints){
                effect.setInt(name, this._ints[name]);
            }
            // UInt
            for(name in this._uints){
                effect.setUInt(name, this._uints[name]);
            }
            // Float
            for(name in this._floats){
                effect.setFloat(name, this._floats[name]);
            }
            // Floats
            for(name in this._floatsArrays){
                effect.setArray(name, this._floatsArrays[name]);
            }
            // Color3
            for(name in this._colors3){
                effect.setColor3(name, this._colors3[name]);
            }
            // Color3Array
            for(name in this._colors3Arrays){
                effect.setArray3(name, this._colors3Arrays[name]);
            }
            // Color4
            for(name in this._colors4){
                const color = this._colors4[name];
                effect.setFloat4(name, color.r, color.g, color.b, color.a);
            }
            // Color4Array
            for(name in this._colors4Arrays){
                effect.setArray4(name, this._colors4Arrays[name]);
            }
            // Vector2
            for(name in this._vectors2){
                effect.setVector2(name, this._vectors2[name]);
            }
            // Vector3
            for(name in this._vectors3){
                effect.setVector3(name, this._vectors3[name]);
            }
            // Vector4
            for(name in this._vectors4){
                effect.setVector4(name, this._vectors4[name]);
            }
            // Quaternion
            for(name in this._quaternions){
                effect.setQuaternion(name, this._quaternions[name]);
            }
            // Matrix
            for(name in this._matrices){
                effect.setMatrix(name, this._matrices[name]);
            }
            // MatrixArray
            for(name in this._matrixArrays){
                effect.setMatrices(name, this._matrixArrays[name]);
            }
            // Matrix 3x3
            for(name in this._matrices3x3){
                effect.setMatrix3x3(name, this._matrices3x3[name]);
            }
            // Matrix 2x2
            for(name in this._matrices2x2){
                effect.setMatrix2x2(name, this._matrices2x2[name]);
            }
            // Vector2Array
            for(name in this._vectors2Arrays){
                effect.setArray2(name, this._vectors2Arrays[name]);
            }
            // Vector3Array
            for(name in this._vectors3Arrays){
                effect.setArray3(name, this._vectors3Arrays[name]);
            }
            // Vector4Array
            for(name in this._vectors4Arrays){
                effect.setArray4(name, this._vectors4Arrays[name]);
            }
            // QuaternionArray
            for(name in this._quaternionsArrays){
                effect.setArray4(name, this._quaternionsArrays[name]);
            }
            // Uniform buffers
            for(name in this._uniformBuffers){
                const buffer = this._uniformBuffers[name].getBuffer();
                if (buffer) {
                    effect.bindUniformBuffer(buffer, name);
                }
            }
            const engineWebGPU = scene.getEngine();
            // External texture
            const setExternalTexture = engineWebGPU.setExternalTexture;
            if (setExternalTexture) {
                for(name in this._externalTextures){
                    setExternalTexture.call(engineWebGPU, name, this._externalTextures[name]);
                }
            }
            // Samplers
            const setTextureSampler = engineWebGPU.setTextureSampler;
            if (setTextureSampler) {
                for(name in this._textureSamplers){
                    setTextureSampler.call(engineWebGPU, name, this._textureSamplers[name]);
                }
            }
            // Storage buffers
            const setStorageBuffer = engineWebGPU.setStorageBuffer;
            if (setStorageBuffer) {
                for(name in this._storageBuffers){
                    setStorageBuffer.call(engineWebGPU, name, this._storageBuffers[name]);
                }
            }
        }
        if (effect && mesh && (mustRebind || !this.isFrozen)) {
            // Morph targets
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BindMorphTargetParameters"])(mesh, effect);
            if (mesh.morphTargetManager && mesh.morphTargetManager.isUsingTextureForTargets) {
                mesh.morphTargetManager._bind(effect);
            }
            const bvaManager = mesh.bakedVertexAnimationManager;
            if (bvaManager && bvaManager.isEnabled) {
                const drawWrapper = storeEffectOnSubMeshes ? subMesh._drawWrapper : this._drawWrapper;
                mesh.bakedVertexAnimationManager?.bind(effect, !!drawWrapper._wasPreviouslyUsingInstances);
            }
        }
        this._afterBind(mesh, effect, subMesh);
    }
    /**
     * Gets the active textures from the material
     * @returns an array of textures
     */ getActiveTextures() {
        const activeTextures = super.getActiveTextures();
        for(const name in this._textures){
            activeTextures.push(this._textures[name]);
        }
        for(const name in this._textureArrays){
            const array = this._textureArrays[name];
            for(let index = 0; index < array.length; index++){
                activeTextures.push(array[index]);
            }
        }
        return activeTextures;
    }
    /**
     * Specifies if the material uses a texture
     * @param texture defines the texture to check against the material
     * @returns a boolean specifying if the material uses the texture
     */ hasTexture(texture) {
        if (super.hasTexture(texture)) {
            return true;
        }
        for(const name in this._textures){
            if (this._textures[name] === texture) {
                return true;
            }
        }
        const internalTexture = texture.getInternalTexture();
        for(const name in this._internalTextures){
            if (this._internalTextures[name] === internalTexture) {
                return true;
            }
        }
        for(const name in this._textureArrays){
            const array = this._textureArrays[name];
            for(let index = 0; index < array.length; index++){
                if (array[index] === texture) {
                    return true;
                }
            }
        }
        return false;
    }
    /**
     * Makes a duplicate of the material, and gives it a new name
     * @param name defines the new name for the duplicated material
     * @returns the cloned material
     */ clone(name) {
        const result = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SerializationHelper"].Clone(()=>new ShaderMaterial(name, this.getScene(), this._shaderPath, this._options, this._storeEffectOnSubMeshes), this);
        result.name = name;
        result.id = name;
        // Shader code path
        if (typeof result._shaderPath === "object") {
            result._shaderPath = {
                ...result._shaderPath
            };
        }
        // Options
        this._options = {
            ...this._options
        };
        const keys = Object.keys(this._options);
        for (const propName of keys){
            const propValue = this._options[propName];
            if (Array.isArray(propValue)) {
                this._options[propName] = propValue.slice(0);
            }
        }
        // Stencil
        this.stencil.copyTo(result.stencil);
        // Texture
        for(const key in this._textures){
            result.setTexture(key, this._textures[key]);
        }
        for(const key in this._internalTextures){
            result.setInternalTexture(key, this._internalTextures[key]);
        }
        // TextureArray
        for(const key in this._textureArrays){
            result.setTextureArray(key, this._textureArrays[key]);
        }
        // External texture
        for(const key in this._externalTextures){
            result.setExternalTexture(key, this._externalTextures[key]);
        }
        // Int
        for(const key in this._ints){
            result.setInt(key, this._ints[key]);
        }
        // UInt
        for(const key in this._uints){
            result.setUInt(key, this._uints[key]);
        }
        // Float
        for(const key in this._floats){
            result.setFloat(key, this._floats[key]);
        }
        // Floats
        for(const key in this._floatsArrays){
            result.setFloats(key, this._floatsArrays[key]);
        }
        // Color3
        for(const key in this._colors3){
            result.setColor3(key, this._colors3[key]);
        }
        // Color3Array
        for(const key in this._colors3Arrays){
            result._colors3Arrays[key] = this._colors3Arrays[key];
        }
        // Color4
        for(const key in this._colors4){
            result.setColor4(key, this._colors4[key]);
        }
        // Color4Array
        for(const key in this._colors4Arrays){
            result._colors4Arrays[key] = this._colors4Arrays[key];
        }
        // Vector2
        for(const key in this._vectors2){
            result.setVector2(key, this._vectors2[key]);
        }
        // Vector3
        for(const key in this._vectors3){
            result.setVector3(key, this._vectors3[key]);
        }
        // Vector4
        for(const key in this._vectors4){
            result.setVector4(key, this._vectors4[key]);
        }
        // Quaternion
        for(const key in this._quaternions){
            result.setQuaternion(key, this._quaternions[key]);
        }
        // QuaternionArray
        for(const key in this._quaternionsArrays){
            result._quaternionsArrays[key] = this._quaternionsArrays[key];
        }
        // Matrix
        for(const key in this._matrices){
            result.setMatrix(key, this._matrices[key]);
        }
        // MatrixArray
        for(const key in this._matrixArrays){
            result._matrixArrays[key] = this._matrixArrays[key].slice();
        }
        // Matrix 3x3
        for(const key in this._matrices3x3){
            result.setMatrix3x3(key, this._matrices3x3[key]);
        }
        // Matrix 2x2
        for(const key in this._matrices2x2){
            result.setMatrix2x2(key, this._matrices2x2[key]);
        }
        // Vector2Array
        for(const key in this._vectors2Arrays){
            result.setArray2(key, this._vectors2Arrays[key]);
        }
        // Vector3Array
        for(const key in this._vectors3Arrays){
            result.setArray3(key, this._vectors3Arrays[key]);
        }
        // Vector4Array
        for(const key in this._vectors4Arrays){
            result.setArray4(key, this._vectors4Arrays[key]);
        }
        // Uniform buffers
        for(const key in this._uniformBuffers){
            result.setUniformBuffer(key, this._uniformBuffers[key]);
        }
        // Samplers
        for(const key in this._textureSamplers){
            result.setTextureSampler(key, this._textureSamplers[key]);
        }
        // Storag buffers
        for(const key in this._storageBuffers){
            result.setStorageBuffer(key, this._storageBuffers[key]);
        }
        return result;
    }
    /**
     * Disposes the material
     * @param forceDisposeEffect specifies if effects should be forcefully disposed
     * @param forceDisposeTextures specifies if textures should be forcefully disposed
     * @param notBoundToMesh specifies if the material that is being disposed is known to be not bound to any mesh
     */ dispose(forceDisposeEffect, forceDisposeTextures, notBoundToMesh) {
        if (forceDisposeTextures) {
            let name;
            for(name in this._textures){
                this._textures[name].dispose();
            }
            for(name in this._internalTextures){
                this._internalTextures[name].dispose();
            }
            for(name in this._textureArrays){
                const array = this._textureArrays[name];
                for(let index = 0; index < array.length; index++){
                    array[index].dispose();
                }
            }
        }
        this._textures = {};
        this._internalTextures = {};
        super.dispose(forceDisposeEffect, forceDisposeTextures, notBoundToMesh);
    }
    /**
     * Serializes this material in a JSON representation
     * @returns the serialized material object
     */ serialize() {
        const serializationObject = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SerializationHelper"].Serialize(this);
        serializationObject.customType = "BABYLON.ShaderMaterial";
        serializationObject.uniqueId = this.uniqueId;
        serializationObject.options = this._options;
        serializationObject.shaderPath = this._shaderPath;
        serializationObject.storeEffectOnSubMeshes = this._storeEffectOnSubMeshes;
        let name;
        // Stencil
        serializationObject.stencil = this.stencil.serialize();
        // Texture
        serializationObject.textures = {};
        for(name in this._textures){
            serializationObject.textures[name] = this._textures[name].serialize();
        }
        // Texture arrays
        serializationObject.textureArrays = {};
        for(name in this._textureArrays){
            serializationObject.textureArrays[name] = [];
            const array = this._textureArrays[name];
            for(let index = 0; index < array.length; index++){
                serializationObject.textureArrays[name].push(array[index].serialize());
            }
        }
        // Int
        serializationObject.ints = {};
        for(name in this._ints){
            serializationObject.ints[name] = this._ints[name];
        }
        // UInt
        serializationObject.uints = {};
        for(name in this._uints){
            serializationObject.uints[name] = this._uints[name];
        }
        // Float
        serializationObject.floats = {};
        for(name in this._floats){
            serializationObject.floats[name] = this._floats[name];
        }
        // Floats
        serializationObject.floatsArrays = {};
        for(name in this._floatsArrays){
            serializationObject.floatsArrays[name] = this._floatsArrays[name];
        }
        // Color3
        serializationObject.colors3 = {};
        for(name in this._colors3){
            const color3 = this._colors3[name];
            serializationObject.colors3[name] = [
                color3.r,
                color3.g,
                color3.b
            ];
        }
        // Color3 array
        serializationObject.colors3Arrays = {};
        for(name in this._colors3Arrays){
            serializationObject.colors3Arrays[name] = this._colors3Arrays[name];
        }
        // Color4
        serializationObject.colors4 = {};
        for(name in this._colors4){
            const color4 = this._colors4[name];
            serializationObject.colors4[name] = [
                color4.r,
                color4.g,
                color4.b,
                color4.a
            ];
        }
        // Color4 array
        serializationObject.colors4Arrays = {};
        for(name in this._colors4Arrays){
            serializationObject.colors4Arrays[name] = this._colors4Arrays[name];
        }
        // Vector2
        serializationObject.vectors2 = {};
        for(name in this._vectors2){
            const v2 = this._vectors2[name];
            serializationObject.vectors2[name] = [
                v2.x,
                v2.y
            ];
        }
        // Vector3
        serializationObject.vectors3 = {};
        for(name in this._vectors3){
            const v3 = this._vectors3[name];
            serializationObject.vectors3[name] = [
                v3.x,
                v3.y,
                v3.z
            ];
        }
        // Vector4
        serializationObject.vectors4 = {};
        for(name in this._vectors4){
            const v4 = this._vectors4[name];
            serializationObject.vectors4[name] = [
                v4.x,
                v4.y,
                v4.z,
                v4.w
            ];
        }
        // Quaternion
        serializationObject.quaternions = {};
        for(name in this._quaternions){
            serializationObject.quaternions[name] = this._quaternions[name].asArray();
        }
        // Matrix
        serializationObject.matrices = {};
        for(name in this._matrices){
            serializationObject.matrices[name] = this._matrices[name].asArray();
        }
        // MatrixArray
        serializationObject.matrixArray = {};
        for(name in this._matrixArrays){
            serializationObject.matrixArray[name] = this._matrixArrays[name];
        }
        // Matrix 3x3
        serializationObject.matrices3x3 = {};
        for(name in this._matrices3x3){
            serializationObject.matrices3x3[name] = this._matrices3x3[name];
        }
        // Matrix 2x2
        serializationObject.matrices2x2 = {};
        for(name in this._matrices2x2){
            serializationObject.matrices2x2[name] = this._matrices2x2[name];
        }
        // Vector2Array
        serializationObject.vectors2Arrays = {};
        for(name in this._vectors2Arrays){
            serializationObject.vectors2Arrays[name] = this._vectors2Arrays[name];
        }
        // Vector3Array
        serializationObject.vectors3Arrays = {};
        for(name in this._vectors3Arrays){
            serializationObject.vectors3Arrays[name] = this._vectors3Arrays[name];
        }
        // Vector4Array
        serializationObject.vectors4Arrays = {};
        for(name in this._vectors4Arrays){
            serializationObject.vectors4Arrays[name] = this._vectors4Arrays[name];
        }
        // QuaternionArray
        serializationObject.quaternionsArrays = {};
        for(name in this._quaternionsArrays){
            serializationObject.quaternionsArrays[name] = this._quaternionsArrays[name];
        }
        return serializationObject;
    }
    /**
     * Creates a shader material from parsed shader material data
     * @param source defines the JSON representation of the material
     * @param scene defines the hosting scene
     * @param rootUrl defines the root URL to use to load textures and relative dependencies
     * @returns a new material
     */ static Parse(source, scene, rootUrl) {
        const material = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SerializationHelper"].Parse(()=>new ShaderMaterial(source.name, scene, source.shaderPath, source.options, source.storeEffectOnSubMeshes), source, scene, rootUrl);
        let name;
        // Stencil
        if (source.stencil) {
            material.stencil.parse(source.stencil, scene, rootUrl);
        }
        // Texture
        for(name in source.textures){
            material.setTexture(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Texture"].Parse(source.textures[name], scene, rootUrl));
        }
        // Texture arrays
        for(name in source.textureArrays){
            const array = source.textureArrays[name];
            const textureArray = [];
            for(let index = 0; index < array.length; index++){
                textureArray.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Texture"].Parse(array[index], scene, rootUrl));
            }
            material.setTextureArray(name, textureArray);
        }
        // Int
        for(name in source.ints){
            material.setInt(name, source.ints[name]);
        }
        // UInt
        for(name in source.uints){
            material.setUInt(name, source.uints[name]);
        }
        // Float
        for(name in source.floats){
            material.setFloat(name, source.floats[name]);
        }
        // Floats
        for(name in source.floatsArrays){
            material.setFloats(name, source.floatsArrays[name]);
        }
        // Color3
        for(name in source.colors3){
            const color = source.colors3[name];
            material.setColor3(name, {
                r: color[0],
                g: color[1],
                b: color[2]
            });
        }
        // Color3 arrays
        for(name in source.colors3Arrays){
            const colors = source.colors3Arrays[name].reduce((arr, num, i)=>{
                if (i % 3 === 0) {
                    arr.push([
                        num
                    ]);
                } else {
                    arr[arr.length - 1].push(num);
                }
                return arr;
            }, []).map((color)=>({
                    r: color[0],
                    g: color[1],
                    b: color[2]
                }));
            material.setColor3Array(name, colors);
        }
        // Color4
        for(name in source.colors4){
            const color = source.colors4[name];
            material.setColor4(name, {
                r: color[0],
                g: color[1],
                b: color[2],
                a: color[3]
            });
        }
        // Color4 arrays
        for(name in source.colors4Arrays){
            const colors = source.colors4Arrays[name].reduce((arr, num, i)=>{
                if (i % 4 === 0) {
                    arr.push([
                        num
                    ]);
                } else {
                    arr[arr.length - 1].push(num);
                }
                return arr;
            }, []).map((color)=>({
                    r: color[0],
                    g: color[1],
                    b: color[2],
                    a: color[3]
                }));
            material.setColor4Array(name, colors);
        }
        // Vector2
        for(name in source.vectors2){
            const vector = source.vectors2[name];
            material.setVector2(name, {
                x: vector[0],
                y: vector[1]
            });
        }
        // Vector3
        for(name in source.vectors3){
            const vector = source.vectors3[name];
            material.setVector3(name, {
                x: vector[0],
                y: vector[1],
                z: vector[2]
            });
        }
        // Vector4
        for(name in source.vectors4){
            const vector = source.vectors4[name];
            material.setVector4(name, {
                x: vector[0],
                y: vector[1],
                z: vector[2],
                w: vector[3]
            });
        }
        // Quaternion
        for(name in source.quaternions){
            material.setQuaternion(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"].FromArray(source.quaternions[name]));
        }
        // Matrix
        for(name in source.matrices){
            material.setMatrix(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].FromArray(source.matrices[name]));
        }
        // MatrixArray
        for(name in source.matrixArray){
            material._matrixArrays[name] = new Float32Array(source.matrixArray[name]);
        }
        // Matrix 3x3
        for(name in source.matrices3x3){
            material.setMatrix3x3(name, source.matrices3x3[name]);
        }
        // Matrix 2x2
        for(name in source.matrices2x2){
            material.setMatrix2x2(name, source.matrices2x2[name]);
        }
        // Vector2Array
        for(name in source.vectors2Arrays){
            material.setArray2(name, source.vectors2Arrays[name]);
        }
        // Vector3Array
        for(name in source.vectors3Arrays){
            material.setArray3(name, source.vectors3Arrays[name]);
        }
        // Vector4Array
        for(name in source.vectors4Arrays){
            material.setArray4(name, source.vectors4Arrays[name]);
        }
        // QuaternionArray
        for(name in source.quaternionsArrays){
            material.setArray4(name, source.quaternionsArrays[name]);
        }
        return material;
    }
    /**
     * Creates a new ShaderMaterial from a snippet saved in a remote file
     * @param name defines the name of the ShaderMaterial to create (can be null or empty to use the one from the json data)
     * @param url defines the url to load from
     * @param scene defines the hosting scene
     * @param rootUrl defines the root URL to use to load textures and relative dependencies
     * @returns a promise that will resolve to the new ShaderMaterial
     */ static async ParseFromFileAsync(name, url, scene, rootUrl = "") {
        return await new Promise((resolve, reject)=>{
            const request = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$webRequest$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebRequest"]();
            request.addEventListener("readystatechange", ()=>{
                if (request.readyState == 4) {
                    if (request.status == 200) {
                        const serializationObject = JSON.parse(request.responseText);
                        const output = this.Parse(serializationObject, scene || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EngineStore"].LastCreatedScene, rootUrl);
                        if (name) {
                            output.name = name;
                        }
                        resolve(output);
                    } else {
                        // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
                        reject("Unable to load the ShaderMaterial");
                    }
                }
            });
            request.open("GET", url);
            request.send();
        });
    }
    /**
     * Creates a ShaderMaterial from a snippet saved by the Inspector
     * @param snippetId defines the snippet to load
     * @param scene defines the hosting scene
     * @param rootUrl defines the root URL to use to load textures and relative dependencies
     * @returns a promise that will resolve to the new ShaderMaterial
     */ static async ParseFromSnippetAsync(snippetId, scene, rootUrl = "") {
        return await new Promise((resolve, reject)=>{
            const request = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$webRequest$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebRequest"]();
            request.addEventListener("readystatechange", ()=>{
                if (request.readyState == 4) {
                    if (request.status == 200) {
                        const snippet = JSON.parse(JSON.parse(request.responseText).jsonPayload);
                        const serializationObject = JSON.parse(snippet.shaderMaterial);
                        const output = this.Parse(serializationObject, scene || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EngineStore"].LastCreatedScene, rootUrl);
                        output.snippetId = snippetId;
                        resolve(output);
                    } else {
                        // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
                        reject("Unable to load the snippet " + snippetId);
                    }
                }
            });
            request.open("GET", this.SnippetUrl + "/" + snippetId.replace(/#/g, "/"));
            request.send();
        });
    }
}
/** Define the Url to load snippets */ ShaderMaterial.SnippetUrl = `https://snippet.babylonjs.com`;
/**
 * Creates a ShaderMaterial from a snippet saved by the Inspector
 * @deprecated Please use ParseFromSnippetAsync instead
 * @param snippetId defines the snippet to load
 * @param scene defines the hosting scene
 * @param rootUrl defines the root URL to use to load textures and relative dependencies
 * @returns a promise that will resolve to the new ShaderMaterial
 */ ShaderMaterial.CreateFromSnippetAsync = ShaderMaterial.ParseFromSnippetAsync;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.ShaderMaterial", ShaderMaterial); //# sourceMappingURL=shaderMaterial.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Background/backgroundMaterial.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BackgroundMaterial",
    ()=>BackgroundMaterial
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-ssr] (ecmascript)");
/* eslint-disable @typescript-eslint/naming-convention */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/decorators.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$smartArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/smartArray.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Buffers/buffer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialDefines$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialDefines.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$pushMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/pushMaterial.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$imageProcessingConfiguration$2e$defines$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/imageProcessingConfiguration.defines.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$imageProcessingConfiguration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/imageProcessingConfiguration.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialFlags.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.color.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$effectFallbacks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/effectFallbacks.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$clipPlaneMaterialHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/clipPlaneMaterialHelper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialHelper.functions.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$pure$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialHelper.functions.pure.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/decorators.serialization.js [app-ssr] (ecmascript)");
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
class BackgroundMaterialDefinesBase extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialDefines$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialDefines"] {
}
/**
 * Background material defines definition.
 * @internal Mainly internal Use
 */ class BackgroundMaterialDefines extends (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$imageProcessingConfiguration$2e$defines$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ImageProcessingDefinesMixin"])(BackgroundMaterialDefinesBase) {
    /**
     * Constructor of the defines.
     */ constructor(){
        super();
        /**
         * True if the diffuse texture is in use.
         */ this.DIFFUSE = false;
        /**
         * The direct UV channel to use.
         */ this.DIFFUSEDIRECTUV = 0;
        /**
         * True if the diffuse texture is in gamma space.
         */ this.GAMMADIFFUSE = false;
        /**
         * True if the diffuse texture has opacity in the alpha channel.
         */ this.DIFFUSEHASALPHA = false;
        /**
         * True if you want the material to fade to transparent at grazing angle.
         */ this.OPACITYFRESNEL = false;
        /**
         * True if an extra blur needs to be added in the reflection.
         */ this.REFLECTIONBLUR = false;
        /**
         * True if you want the material to fade to reflection at grazing angle.
         */ this.REFLECTIONFRESNEL = false;
        /**
         * True if you want the material to falloff as far as you move away from the scene center.
         */ this.REFLECTIONFALLOFF = false;
        /**
         * False if the current Webgl implementation does not support the texture lod extension.
         */ this.TEXTURELODSUPPORT = false;
        /**
         * True to ensure the data are premultiplied.
         */ this.PREMULTIPLYALPHA = false;
        /**
         * True if the texture contains cooked RGB values and not gray scaled multipliers.
         */ this.USERGBCOLOR = false;
        /**
         * True if highlight and shadow levels have been specified. It can help ensuring the main perceived color
         * stays aligned with the desired configuration.
         */ this.USEHIGHLIGHTANDSHADOWCOLORS = false;
        /**
         * True if only shadows must be rendered
         */ this.BACKMAT_SHADOWONLY = false;
        /**
         * True to add noise in order to reduce the banding effect.
         */ this.NOISE = false;
        /**
         * is the reflection texture in BGR color scheme?
         * Mainly used to solve a bug in ios10 video tag
         */ this.REFLECTIONBGR = false;
        /**
         * True if ground projection has been enabled.
         */ this.PROJECTED_GROUND = false;
        // Reflection.
        this.REFLECTION = false;
        this.REFLECTIONMAP_3D = false;
        this.REFLECTIONMAP_SPHERICAL = false;
        this.REFLECTIONMAP_PLANAR = false;
        this.REFLECTIONMAP_CUBIC = false;
        this.REFLECTIONMAP_PROJECTION = false;
        this.REFLECTIONMAP_SKYBOX = false;
        this.REFLECTIONMAP_EXPLICIT = false;
        this.REFLECTIONMAP_EQUIRECTANGULAR = false;
        this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = false;
        this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = false;
        this.INVERTCUBICMAP = false;
        this.REFLECTIONMAP_OPPOSITEZ = false;
        this.LODINREFLECTIONALPHA = false;
        this.GAMMAREFLECTION = false;
        this.RGBDREFLECTION = false;
        this.EQUIRECTANGULAR_RELFECTION_FOV = false;
        // Default BJS.
        this.MAINUV1 = false;
        this.MAINUV2 = false;
        this.UV1 = false;
        this.UV2 = false;
        this.CLIPPLANE = false;
        this.CLIPPLANE2 = false;
        this.CLIPPLANE3 = false;
        this.CLIPPLANE4 = false;
        this.CLIPPLANE5 = false;
        this.CLIPPLANE6 = false;
        this.POINTSIZE = false;
        this.FOG = false;
        this.NORMAL = false;
        this.NUM_BONE_INFLUENCERS = 0;
        this.BonesPerMesh = 0;
        this.INSTANCES = false;
        this.SHADOWFLOAT = false;
        this.LOGARITHMICDEPTH = false;
        this.NONUNIFORMSCALING = false;
        this.ALPHATEST = false;
        this.rebuild();
    }
}
class BackgroundMaterialBase extends (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$imageProcessing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ImageProcessingMixin"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$pushMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PushMaterial"]) {
}
class BackgroundMaterial extends BackgroundMaterialBase {
    /**
     * Experimental Internal Use Only.
     *
     * Key light Color in "perceptual value" meaning the color you would like to see on screen.
     * This acts as a helper to set the primary color to a more "human friendly" value.
     * Conversion to linear space as well as exposure and tone mapping correction will be applied to keep the
     * output color as close as possible from the chosen value.
     * (This does not account for contrast color grading and color curves as they are considered post effect and not directly
     * part of lighting setup.)
     */ get _perceptualColor() {
        return this.__perceptualColor;
    }
    set _perceptualColor(value) {
        this.__perceptualColor = value;
        this._computePrimaryColorFromPerceptualColor();
        this._markAllSubMeshesAsLightsDirty();
    }
    /**
     * Defines the level of the shadows (dark area of the reflection map) in order to help scaling the colors.
     * The color opposite to the primary color is used at the level chosen to define what the black area would look.
     */ get primaryColorShadowLevel() {
        return this._primaryColorShadowLevel;
    }
    set primaryColorShadowLevel(value) {
        this._primaryColorShadowLevel = value;
        this._computePrimaryColors();
        this._markAllSubMeshesAsLightsDirty();
    }
    /**
     * Defines the level of the highlights (highlight area of the reflection map) in order to help scaling the colors.
     * The primary color is used at the level chosen to define what the white area would look.
     */ get primaryColorHighlightLevel() {
        return this._primaryColorHighlightLevel;
    }
    set primaryColorHighlightLevel(value) {
        this._primaryColorHighlightLevel = value;
        this._computePrimaryColors();
        this._markAllSubMeshesAsLightsDirty();
    }
    /**
     * Sets the reflection reflectance fresnel values according to the default standard
     * empirically know to work well :-)
     */ set reflectionStandardFresnelWeight(value) {
        let reflectionWeight = value;
        if (reflectionWeight < 0.5) {
            reflectionWeight = reflectionWeight * 2.0;
            this.reflectionReflectance0 = BackgroundMaterial.StandardReflectance0 * reflectionWeight;
            this.reflectionReflectance90 = BackgroundMaterial.StandardReflectance90 * reflectionWeight;
        } else {
            reflectionWeight = reflectionWeight * 2.0 - 1.0;
            this.reflectionReflectance0 = BackgroundMaterial.StandardReflectance0 + (1.0 - BackgroundMaterial.StandardReflectance0) * reflectionWeight;
            this.reflectionReflectance90 = BackgroundMaterial.StandardReflectance90 + (1.0 - BackgroundMaterial.StandardReflectance90) * reflectionWeight;
        }
    }
    /**
     * The current fov(field of view) multiplier, 0.0 - 2.0. Defaults to 1.0. Lower values "zoom in" and higher values "zoom out".
     * Best used when trying to implement visual zoom effects like fish-eye or binoculars while not adjusting camera fov.
     * Recommended to be keep at 1.0 except for special cases.
     */ get fovMultiplier() {
        return this._fovMultiplier;
    }
    set fovMultiplier(value) {
        if (isNaN(value)) {
            value = 1.0;
        }
        this._fovMultiplier = Math.max(0.0, Math.min(2.0, value));
    }
    /**
     * Instantiates a Background Material in the given scene
     * @param name The friendly name of the material
     * @param scene The scene to add the material to
     * @param forceGLSL Use the GLSL code generation for the shader (even on WebGPU). Default is false
     */ constructor(name, scene, forceGLSL = false){
        super(name, scene, undefined, forceGLSL);
        /**
         * Key light Color (multiply against the environment texture)
         */ this.primaryColor = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"].White();
        this._primaryColorShadowLevel = 0;
        this._primaryColorHighlightLevel = 0;
        /**
         * Reflection Texture used in the material.
         * Should be author in a specific way for the best result (refer to the documentation).
         */ this.reflectionTexture = null;
        /**
         * Reflection Texture level of blur.
         *
         * Can be use to reuse an existing HDR Texture and target a specific LOD to prevent authoring the
         * texture twice.
         */ this.reflectionBlur = 0;
        /**
         * Diffuse Texture used in the material.
         * Should be author in a specific way for the best result (refer to the documentation).
         */ this.diffuseTexture = null;
        this._shadowLights = null;
        /**
         * Specify the list of lights casting shadow on the material.
         * All scene shadow lights will be included if null.
         */ this.shadowLights = null;
        /**
         * Helps adjusting the shadow to a softer level if required.
         * 0 means black shadows and 1 means no shadows.
         */ this.shadowLevel = 0;
        /**
         * In case of opacity Fresnel or reflection falloff, this is use as a scene center.
         * It is usually zero but might be interesting to modify according to your setup.
         */ this.sceneCenter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        /**
         * This helps specifying that the material is falling off to the sky box at grazing angle.
         * This helps ensuring a nice transition when the camera goes under the ground.
         */ this.opacityFresnel = true;
        /**
         * This helps specifying that the material is falling off from diffuse to the reflection texture at grazing angle.
         * This helps adding a mirror texture on the ground.
         */ this.reflectionFresnel = false;
        /**
         * This helps specifying the falloff radius off the reflection texture from the sceneCenter.
         * This helps adding a nice falloff effect to the reflection if used as a mirror for instance.
         */ this.reflectionFalloffDistance = 0.0;
        /**
         * This specifies the weight of the reflection against the background in case of reflection Fresnel.
         */ this.reflectionAmount = 1.0;
        /**
         * This specifies the weight of the reflection at grazing angle.
         */ this.reflectionReflectance0 = 0.05;
        /**
         * This specifies the weight of the reflection at a perpendicular point of view.
         */ this.reflectionReflectance90 = 0.5;
        /**
         * Helps to directly use the maps channels instead of their level.
         */ this.useRGBColor = true;
        /**
         * This helps reducing the banding effect that could occur on the background.
         */ this.enableNoise = false;
        this._fovMultiplier = 1.0;
        /**
         * Enable the FOV adjustment feature controlled by fovMultiplier.
         */ this.useEquirectangularFOV = false;
        this._maxSimultaneousLights = 4;
        /**
         * Number of Simultaneous lights allowed on the material.
         */ this.maxSimultaneousLights = 4;
        this._shadowOnly = false;
        /**
         * Make the material only render shadows
         */ this.shadowOnly = false;
        /**
         * Due to a bug in iOS10, video tags (which are using the background material) are in BGR and not RGB.
         * Setting this flag to true (not done automatically!) will convert it back to RGB.
         */ this.switchToBGR = false;
        this._enableGroundProjection = false;
        /**
         * Enables the ground projection mode on the material.
         * @see https://doc.babylonjs.com/features/featuresDeepDive/environment/skybox#ground-projection
         */ this.enableGroundProjection = false;
        /**
         * Defines the radius of the projected ground if enableGroundProjection is true.
         * @see https://doc.babylonjs.com/features/featuresDeepDive/environment/skybox#ground-projection
         */ this.projectedGroundRadius = 1000;
        /**
         * Defines the height of the projected ground if enableGroundProjection is true.
         * @see https://doc.babylonjs.com/features/featuresDeepDive/environment/skybox#ground-projection
         */ this.projectedGroundHeight = 10;
        // Temp values kept as cache in the material.
        this._renderTargets = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$smartArray$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SmartArray"](16);
        this._reflectionControls = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector4"].Zero();
        this._white = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"].White();
        this._primaryShadowColor = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"].Black();
        this._primaryHighlightColor = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"].Black();
        this._shadersLoaded = false;
        // Setup the default processing configuration to the scene.
        this._attachImageProcessingConfiguration(null);
        this.getRenderTargetTextures = ()=>{
            this._renderTargets.reset();
            if (this._diffuseTexture && this._diffuseTexture.isRenderTarget) {
                this._renderTargets.push(this._diffuseTexture);
            }
            if (this._reflectionTexture && this._reflectionTexture.isRenderTarget) {
                this._renderTargets.push(this._reflectionTexture);
            }
            return this._renderTargets;
        };
    }
    /**
     * Gets a boolean indicating that current material needs to register RTT
     */ get hasRenderTargetTextures() {
        if (this._diffuseTexture && this._diffuseTexture.isRenderTarget) {
            return true;
        }
        if (this._reflectionTexture && this._reflectionTexture.isRenderTarget) {
            return true;
        }
        return false;
    }
    /**
     * The entire material has been created in order to prevent overdraw.
     * @returns false
     */ needAlphaTesting() {
        return true;
    }
    /**
     * The entire material has been created in order to prevent overdraw.
     * @returns true if blending is enable
     */ needAlphaBlending() {
        return this.alpha < 1 || this._diffuseTexture != null && this._diffuseTexture.hasAlpha || this._shadowOnly;
    }
    /**
     * Checks whether the material is ready to be rendered for a given mesh.
     * @param mesh The mesh to render
     * @param subMesh The submesh to check against
     * @param useInstances Specify wether or not the material is used with instances
     * @returns true if all the dependencies are ready (Textures, Effects...)
     */ isReadyForSubMesh(mesh, subMesh, useInstances = false) {
        const drawWrapper = subMesh._drawWrapper;
        if (drawWrapper.effect && this.isFrozen) {
            if (drawWrapper._wasPreviouslyReady && drawWrapper._wasPreviouslyUsingInstances === useInstances) {
                return true;
            }
        }
        if (!subMesh.materialDefines) {
            subMesh.materialDefines = new BackgroundMaterialDefines();
        }
        const scene = this.getScene();
        const defines = subMesh.materialDefines;
        if (this._isReadyForSubMesh(subMesh)) {
            return true;
        }
        const engine = scene.getEngine();
        // Lights
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareDefinesForLights"])(scene, mesh, defines, false, this._maxSimultaneousLights);
        defines._needNormals = true;
        // Multiview
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareDefinesForMultiview"])(scene, defines);
        // Textures
        if (defines._areTexturesDirty) {
            defines._needUVs = false;
            if (scene.texturesEnabled) {
                if (scene.getEngine().getCaps().textureLOD) {
                    defines.TEXTURELODSUPPORT = true;
                }
                if (this._diffuseTexture && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].DiffuseTextureEnabled) {
                    if (!this._diffuseTexture.isReadyOrNotBlocking()) {
                        return false;
                    }
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareDefinesForMergedUV"])(this._diffuseTexture, defines, "DIFFUSE");
                    defines.DIFFUSEHASALPHA = this._diffuseTexture.hasAlpha;
                    defines.GAMMADIFFUSE = this._diffuseTexture.gammaSpace;
                    defines.OPACITYFRESNEL = this._opacityFresnel;
                } else {
                    defines.DIFFUSE = false;
                    defines.DIFFUSEDIRECTUV = 0;
                    defines.DIFFUSEHASALPHA = false;
                    defines.GAMMADIFFUSE = false;
                    defines.OPACITYFRESNEL = false;
                }
                const reflectionTexture = this._reflectionTexture;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareDefinesForIBL"])(scene, reflectionTexture, defines);
                if (reflectionTexture && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].ReflectionTextureEnabled) {
                    if (!reflectionTexture.isReadyOrNotBlocking()) {
                        return false;
                    }
                    defines.EQUIRECTANGULAR_RELFECTION_FOV = this.useEquirectangularFOV;
                    defines.REFLECTIONBGR = this.switchToBGR;
                    defines.REFLECTIONBLUR = this._reflectionBlur > 0;
                    if (this.reflectionFresnel) {
                        defines.REFLECTIONFRESNEL = true;
                        defines.REFLECTIONFALLOFF = this.reflectionFalloffDistance > 0;
                        this._reflectionControls.x = this.reflectionAmount;
                        this._reflectionControls.y = this.reflectionReflectance0;
                        this._reflectionControls.z = this.reflectionReflectance90;
                        this._reflectionControls.w = 1 / this.reflectionFalloffDistance;
                    } else {
                        defines.REFLECTIONFRESNEL = false;
                        defines.REFLECTIONFALLOFF = false;
                    }
                } else {
                    defines.REFLECTIONFRESNEL = false;
                    defines.REFLECTIONFALLOFF = false;
                    defines.REFLECTIONBLUR = false;
                }
            }
            defines.PREMULTIPLYALPHA = this.alphaMode === 7 || this.alphaMode === 8;
            defines.USERGBCOLOR = this._useRGBColor;
            defines.NOISE = this._enableNoise;
        }
        if (defines._areLightsDirty) {
            defines.USEHIGHLIGHTANDSHADOWCOLORS = !this._useRGBColor && (this._primaryColorShadowLevel !== 0 || this._primaryColorHighlightLevel !== 0);
            defines.BACKMAT_SHADOWONLY = this._shadowOnly;
        }
        if (defines._areImageProcessingDirty && this._imageProcessingConfiguration) {
            if (!this._imageProcessingConfiguration.isReady()) {
                return false;
            }
            this._imageProcessingConfiguration.prepareDefines(defines);
        }
        if (defines._areMiscDirty) {
            if (defines.REFLECTIONMAP_3D && this._enableGroundProjection) {
                defines.PROJECTED_GROUND = true;
                defines.REFLECTIONMAP_SKYBOX = true;
            } else {
                defines.PROJECTED_GROUND = false;
            }
        }
        // Misc.
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareDefinesForMisc"])(mesh, scene, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(mesh), defines, undefined, undefined, undefined, this._isVertexOutputInvariant);
        // Values that need to be evaluated on every frame
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareDefinesForFrameBoundValues"])(scene, engine, this, defines, useInstances, null, subMesh.getRenderingMesh().hasThinInstances);
        // Attribs
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareDefinesForAttributes"])(mesh, defines, false, true, false)) {
            if (mesh) {
                if (!scene.getEngine().getCaps().standardDerivatives && !mesh.isVerticesDataPresent(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].NormalKind)) {
                    mesh.createNormals(true);
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn("BackgroundMaterial: Normals have been created for the mesh: " + mesh.name);
                }
            }
        }
        // Get correct effect
        if (defines.isDirty) {
            defines.markAsProcessed();
            scene.resetCachedMaterial();
            // Fallbacks
            const fallbacks = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$effectFallbacks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EffectFallbacks"]();
            if (defines.FOG) {
                fallbacks.addFallback(0, "FOG");
            }
            if (defines.POINTSIZE) {
                fallbacks.addFallback(1, "POINTSIZE");
            }
            if (defines.MULTIVIEW) {
                fallbacks.addFallback(0, "MULTIVIEW");
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HandleFallbacksForShadows"])(defines, fallbacks, this._maxSimultaneousLights);
            //Attributes
            const attribs = [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].PositionKind
            ];
            if (defines.NORMAL) {
                attribs.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].NormalKind);
            }
            if (defines.UV1) {
                attribs.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].UVKind);
            }
            if (defines.UV2) {
                attribs.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].UV2Kind);
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareAttributesForBones"])(attribs, mesh, defines, fallbacks);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareAttributesForInstances"])(attribs, defines);
            const uniforms = [
                "world",
                "view",
                "viewProjection",
                "vEyePosition",
                "vLightsType",
                "vFogInfos",
                "vFogColor",
                "pointSize",
                "mBones",
                "vPrimaryColor",
                "vPrimaryColorShadow",
                "fFovMultiplier",
                "shadowLevel",
                "alpha",
                "vBackgroundCenter",
                "vReflectionControl",
                "vDiffuseInfos",
                "diffuseMatrix",
                "projectedGroundInfos",
                "logarithmicDepthConstant"
            ];
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$clipPlaneMaterialHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AddClipPlaneUniforms"])(uniforms);
            const samplers = [
                "diffuseSampler"
            ];
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareUniformsAndSamplersForIBL"])(uniforms, samplers, false);
            const uniformBuffers = [
                "Material",
                "Scene"
            ];
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
            const join = defines.toString();
            const effect = scene.getEngine().createEffect("background", {
                attributes: attribs,
                uniformsNames: uniforms,
                uniformBuffersNames: uniformBuffers,
                samplers: samplers,
                defines: join,
                fallbacks: fallbacks,
                onCompiled: this.onCompiled,
                onError: this.onError,
                indexParameters: {
                    maxSimultaneousLights: this._maxSimultaneousLights
                },
                shaderLanguage: this._shaderLanguage,
                extraInitializationsAsync: this._shadersLoaded ? undefined : async ()=>{
                    if (this.shaderLanguage === 1 /* ShaderLanguage.WGSL */ ) {
                        await Promise.all([
                            __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/background.vertex.js [app-ssr] (ecmascript, async loader)"),
                            __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/background.fragment.js [app-ssr] (ecmascript, async loader)")
                        ]);
                    } else {
                        await Promise.all([
                            __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/background.vertex.js [app-ssr] (ecmascript, async loader)"),
                            __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/background.fragment.js [app-ssr] (ecmascript, async loader)")
                        ]);
                    }
                    this._shadersLoaded = true;
                }
            }, engine);
            subMesh.setEffect(effect, defines, this._materialContext);
            this.buildUniformLayout();
        }
        if (!subMesh.effect || !subMesh.effect.isReady()) {
            return false;
        }
        defines._renderId = scene.getRenderId();
        drawWrapper._wasPreviouslyReady = true;
        drawWrapper._wasPreviouslyUsingInstances = useInstances;
        this._checkScenePerformancePriority();
        return true;
    }
    /**
     * Compute the primary color according to the chosen perceptual color.
     */ _computePrimaryColorFromPerceptualColor() {
        if (!this.__perceptualColor) {
            return;
        }
        this._primaryColor.copyFrom(this.__perceptualColor);
        // Revert gamma space.
        this._primaryColor.toLinearSpaceToRef(this._primaryColor, this.getScene().getEngine().useExactSrgbConversions);
        // Revert image processing configuration.
        if (this._imageProcessingConfiguration) {
            // Revert Exposure.
            this._primaryColor.scaleToRef(1 / this._imageProcessingConfiguration.exposure, this._primaryColor);
        }
        this._computePrimaryColors();
    }
    /**
     * Compute the highlights and shadow colors according to their chosen levels.
     */ _computePrimaryColors() {
        if (this._primaryColorShadowLevel === 0 && this._primaryColorHighlightLevel === 0) {
            return;
        }
        // Find the highlight color based on the configuration.
        this._primaryColor.scaleToRef(this._primaryColorShadowLevel, this._primaryShadowColor);
        this._primaryColor.subtractToRef(this._primaryShadowColor, this._primaryShadowColor);
        // Find the shadow color based on the configuration.
        this._white.subtractToRef(this._primaryColor, this._primaryHighlightColor);
        this._primaryHighlightColor.scaleToRef(this._primaryColorHighlightLevel, this._primaryHighlightColor);
        this._primaryColor.addToRef(this._primaryHighlightColor, this._primaryHighlightColor);
    }
    /**
     * Build the uniform buffer used in the material.
     */ buildUniformLayout() {
        // Order is important !
        this._uniformBuffer.addUniform("vPrimaryColor", 4);
        this._uniformBuffer.addUniform("vPrimaryColorShadow", 4);
        this._uniformBuffer.addUniform("vDiffuseInfos", 2);
        this._uniformBuffer.addUniform("diffuseMatrix", 16);
        this._uniformBuffer.addUniform("fFovMultiplier", 1);
        this._uniformBuffer.addUniform("pointSize", 1);
        this._uniformBuffer.addUniform("shadowLevel", 1);
        this._uniformBuffer.addUniform("alpha", 1);
        this._uniformBuffer.addUniform("vBackgroundCenter", 3);
        this._uniformBuffer.addUniform("vReflectionControl", 4);
        this._uniformBuffer.addUniform("projectedGroundInfos", 2);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareUniformLayoutForIBL"])(this._uniformBuffer, true, false, false);
        this._uniformBuffer.create();
    }
    /**
     * Unbind the material.
     */ unbind() {
        if (this._diffuseTexture && this._diffuseTexture.isRenderTarget) {
            this._uniformBuffer.setTexture("diffuseSampler", null);
        }
        if (this._reflectionTexture && this._reflectionTexture.isRenderTarget) {
            this._uniformBuffer.setTexture("reflectionSampler", null);
        }
        super.unbind();
    }
    /**
     * Bind only the world matrix to the material.
     * @param world The world matrix to bind.
     */ bindOnlyWorldMatrix(world) {
        this._activeEffect.setMatrix("world", world);
    }
    /**
     * Bind the material for a dedicated submesh (every used meshes will be considered opaque).
     * @param world The world matrix to bind.
     * @param mesh the mesh to bind for.
     * @param subMesh The submesh to bind for.
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
        // Matrices
        this.bindOnlyWorldMatrix(world);
        // Bones
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BindBonesParameters"])(mesh, this._activeEffect);
        const mustRebind = this._mustRebind(scene, effect, subMesh, mesh.visibility);
        if (mustRebind) {
            this._uniformBuffer.bindToEffect(effect, "Material");
            this.bindViewProjection(effect);
            const reflectionTexture = this._reflectionTexture;
            if (!this._uniformBuffer.useUbo || !this.isFrozen || !this._uniformBuffer.isSync || subMesh._drawWrapper._forceRebindOnNextCall) {
                // Texture uniforms
                if (scene.texturesEnabled) {
                    if (this._diffuseTexture && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].DiffuseTextureEnabled) {
                        this._uniformBuffer.updateFloat2("vDiffuseInfos", this._diffuseTexture.coordinatesIndex, this._diffuseTexture.level);
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BindTextureMatrix"])(this._diffuseTexture, this._uniformBuffer, "diffuse");
                    }
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BindIBLParameters"])(scene, defines, this._uniformBuffer, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"].White(), reflectionTexture, false, true, false, false, false, false, this._reflectionBlur);
                }
                if (this.shadowLevel > 0) {
                    this._uniformBuffer.updateFloat("shadowLevel", this.shadowLevel);
                }
                this._uniformBuffer.updateFloat("alpha", this.alpha);
                // Point size
                if (this.pointsCloud) {
                    this._uniformBuffer.updateFloat("pointSize", this.pointSize);
                }
                if (defines.USEHIGHLIGHTANDSHADOWCOLORS) {
                    this._uniformBuffer.updateColor4("vPrimaryColor", this._primaryHighlightColor, 1.0);
                    this._uniformBuffer.updateColor4("vPrimaryColorShadow", this._primaryShadowColor, 1.0);
                } else {
                    this._uniformBuffer.updateColor4("vPrimaryColor", this._primaryColor, 1.0);
                }
            }
            this._uniformBuffer.updateFloat("fFovMultiplier", this._fovMultiplier);
            // Fresnel
            if (defines.REFLECTIONFRESNEL) {
                this._uniformBuffer.updateFloat4("vReflectionControl", this._reflectionControls.x, this._reflectionControls.y, this._reflectionControls.z, this._reflectionControls.w);
            }
            if (defines.REFLECTIONFRESNEL && defines.REFLECTIONFALLOFF || defines.OPACITYFRESNEL) {
                const center = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0].copyFrom(this.sceneCenter).subtractInPlace(scene.floatingOriginOffset);
                this._uniformBuffer.updateFloat3("vBackgroundCenter", center.x, center.y, center.z);
            }
            // Textures
            if (scene.texturesEnabled) {
                if (this._diffuseTexture && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].DiffuseTextureEnabled) {
                    this._uniformBuffer.setTexture("diffuseSampler", this._diffuseTexture);
                }
                if (reflectionTexture && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].ReflectionTextureEnabled) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BindIBLSamplers"])(scene, defines, this._uniformBuffer, reflectionTexture);
                }
                if (defines.PROJECTED_GROUND) {
                    this._uniformBuffer.updateFloat2("projectedGroundInfos", this.projectedGroundRadius, this.projectedGroundHeight);
                }
            }
            // Clip plane
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$clipPlaneMaterialHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BindClipPlane"])(this._activeEffect, this, scene);
            scene.bindEyePosition(effect);
        } else if (scene.getEngine()._features.needToAlwaysBindUniformBuffers) {
            this._uniformBuffer.bindToEffect(effect, "Material");
            this._needToBindSceneUbo = true;
        }
        if (mustRebind || !this.isFrozen) {
            if (scene.lightsEnabled) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BindLights"])(scene, mesh, this._activeEffect, defines, this._maxSimultaneousLights);
            }
            // View
            this.bindView(effect);
            // Fog
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BindFogParameters"])(scene, mesh, this._activeEffect, true);
            // Log. depth
            if (this._useLogarithmicDepth) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$pure$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BindLogDepth"])(defines, effect, scene);
            }
            // image processing
            if (this._imageProcessingConfiguration) {
                this._imageProcessingConfiguration.bind(this._activeEffect);
            }
        }
        this._afterBind(mesh, this._activeEffect, subMesh);
        this._uniformBuffer.update();
    }
    /**
     * Checks to see if a texture is used in the material.
     * @param texture - Base texture to use.
     * @returns - Boolean specifying if a texture is used in the material.
     */ hasTexture(texture) {
        if (super.hasTexture(texture)) {
            return true;
        }
        if (this._reflectionTexture === texture) {
            return true;
        }
        if (this._diffuseTexture === texture) {
            return true;
        }
        return false;
    }
    /**
     * Dispose the material.
     * @param forceDisposeEffect Force disposal of the associated effect.
     * @param forceDisposeTextures Force disposal of the associated textures.
     */ dispose(forceDisposeEffect = false, forceDisposeTextures = false) {
        if (forceDisposeTextures) {
            if (this.diffuseTexture) {
                this.diffuseTexture.dispose();
            }
            if (this.reflectionTexture) {
                this.reflectionTexture.dispose();
            }
        }
        this._renderTargets.dispose();
        if (this._imageProcessingConfiguration && this._imageProcessingObserver) {
            this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver);
        }
        super.dispose(forceDisposeEffect);
    }
    /**
     * Clones the material.
     * @param name The cloned name.
     * @returns The cloned material.
     */ clone(name) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SerializationHelper"].Clone(()=>new BackgroundMaterial(name, this.getScene()), this);
    }
    /**
     * Serializes the current material to its JSON representation.
     * @returns The JSON representation.
     */ serialize() {
        const serializationObject = super.serialize();
        serializationObject.customType = "BABYLON.BackgroundMaterial";
        return serializationObject;
    }
    /**
     * Gets the class name of the material
     * @returns "BackgroundMaterial"
     */ getClassName() {
        return "BackgroundMaterial";
    }
    /**
     * Parse a JSON input to create back a background material.
     * @param source The JSON data to parse
     * @param scene The scene to create the parsed material in
     * @param rootUrl The root url of the assets the material depends upon
     * @returns the instantiated BackgroundMaterial.
     */ static Parse(source, scene, rootUrl) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SerializationHelper"].Parse(()=>new BackgroundMaterial(source.name, scene), source, scene, rootUrl);
    }
}
/**
 * Standard reflectance value at parallel view angle.
 */ BackgroundMaterial.StandardReflectance0 = 0.05;
/**
 * Standard reflectance value at grazing angle.
 */ BackgroundMaterial.StandardReflectance90 = 0.5;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeAsColor3"])()
], BackgroundMaterial.prototype, "_primaryColor", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsLightsDirty")
], BackgroundMaterial.prototype, "primaryColor", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeAsColor3"])()
], BackgroundMaterial.prototype, "__perceptualColor", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], BackgroundMaterial.prototype, "_primaryColorShadowLevel", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], BackgroundMaterial.prototype, "_primaryColorHighlightLevel", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsLightsDirty")
], BackgroundMaterial.prototype, "primaryColorHighlightLevel", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeAsTexture"])()
], BackgroundMaterial.prototype, "_reflectionTexture", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], BackgroundMaterial.prototype, "reflectionTexture", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], BackgroundMaterial.prototype, "_reflectionBlur", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], BackgroundMaterial.prototype, "reflectionBlur", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeAsTexture"])()
], BackgroundMaterial.prototype, "_diffuseTexture", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], BackgroundMaterial.prototype, "diffuseTexture", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], BackgroundMaterial.prototype, "shadowLights", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], BackgroundMaterial.prototype, "_shadowLevel", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], BackgroundMaterial.prototype, "shadowLevel", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeAsVector3"])()
], BackgroundMaterial.prototype, "_sceneCenter", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], BackgroundMaterial.prototype, "sceneCenter", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], BackgroundMaterial.prototype, "_opacityFresnel", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], BackgroundMaterial.prototype, "opacityFresnel", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], BackgroundMaterial.prototype, "_reflectionFresnel", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], BackgroundMaterial.prototype, "reflectionFresnel", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], BackgroundMaterial.prototype, "_reflectionFalloffDistance", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], BackgroundMaterial.prototype, "reflectionFalloffDistance", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], BackgroundMaterial.prototype, "_reflectionAmount", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], BackgroundMaterial.prototype, "reflectionAmount", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], BackgroundMaterial.prototype, "_reflectionReflectance0", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], BackgroundMaterial.prototype, "reflectionReflectance0", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], BackgroundMaterial.prototype, "_reflectionReflectance90", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], BackgroundMaterial.prototype, "reflectionReflectance90", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], BackgroundMaterial.prototype, "_useRGBColor", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], BackgroundMaterial.prototype, "useRGBColor", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], BackgroundMaterial.prototype, "_enableNoise", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], BackgroundMaterial.prototype, "enableNoise", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], BackgroundMaterial.prototype, "_maxSimultaneousLights", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], BackgroundMaterial.prototype, "maxSimultaneousLights", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], BackgroundMaterial.prototype, "_shadowOnly", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsLightsDirty")
], BackgroundMaterial.prototype, "shadowOnly", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsMiscDirty")
], BackgroundMaterial.prototype, "enableGroundProjection", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], BackgroundMaterial.prototype, "projectedGroundRadius", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], BackgroundMaterial.prototype, "projectedGroundHeight", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.BackgroundMaterial", BackgroundMaterial); //# sourceMappingURL=backgroundMaterial.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Background/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Background$2f$backgroundMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Background/backgroundMaterial.js [app-ssr] (ecmascript)");
// async-loaded shaders
// backgroundMaterial
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$background$2e$vertex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/background.vertex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$background$2e$fragment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/background.fragment.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$background$2e$vertex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/background.vertex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$background$2e$fragment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/background.fragment.js [app-ssr] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
;
;
;
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Background/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BackgroundMaterial",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Background$2f$backgroundMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BackgroundMaterial"],
    "backgroundPixelShader",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$background$2e$fragment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["backgroundPixelShader"],
    "backgroundPixelShaderWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$background$2e$fragment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["backgroundPixelShaderWGSL"],
    "backgroundVertexShader",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$background$2e$vertex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["backgroundVertexShader"],
    "backgroundVertexShaderWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$background$2e$vertex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["backgroundVertexShaderWGSL"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Background$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Background/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Background$2f$backgroundMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Background/backgroundMaterial.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$background$2e$vertex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/background.vertex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$background$2e$fragment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/background.fragment.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$background$2e$vertex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/background.vertex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$background$2e$fragment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/background.fragment.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/iEffectFallbacks.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
 //# sourceMappingURL=iEffectFallbacks.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/fresnelParameters.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FresnelParameters",
    ()=>FresnelParameters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$deepCopier$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/deepCopier.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.color.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/decorators.serialization.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/abstractEngine.js [app-ssr] (ecmascript)");
;
;
;
;
class FresnelParameters {
    /**
     * Define if the fresnel effect is enable or not.
     */ get isEnabled() {
        return this._isEnabled;
    }
    set isEnabled(value) {
        if (this._isEnabled === value) {
            return;
        }
        this._isEnabled = value;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].MarkAllMaterialsAsDirty(4 | 16);
    }
    /**
     * Creates a new FresnelParameters object.
     *
     * @param options provide your own settings to optionally to override defaults
     */ constructor(options = {}){
        this._isEnabled = true;
        this.bias = options.bias === undefined ? 0 : options.bias;
        this.power = options.power === undefined ? 1 : options.power;
        this.leftColor = options.leftColor || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"].White();
        this.rightColor = options.rightColor || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"].Black();
        if (options.isEnabled === false) {
            this.isEnabled = false;
        }
    }
    /**
     * Clones the current fresnel and its values
     * @returns a clone fresnel configuration
     */ clone() {
        const newFresnelParameters = new FresnelParameters();
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$deepCopier$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeepCopier"].DeepCopy(this, newFresnelParameters);
        return newFresnelParameters;
    }
    /**
     * Determines equality between FresnelParameters objects
     * @param otherFresnelParameters defines the second operand
     * @returns true if the power, bias, leftColor, rightColor and isEnabled values are equal to the given ones
     */ equals(otherFresnelParameters) {
        return otherFresnelParameters && this.bias === otherFresnelParameters.bias && this.power === otherFresnelParameters.power && this.leftColor.equals(otherFresnelParameters.leftColor) && this.rightColor.equals(otherFresnelParameters.rightColor) && this.isEnabled === otherFresnelParameters.isEnabled;
    }
    /**
     * Serializes the current fresnel parameters to a JSON representation.
     * @returns the JSON serialization
     */ serialize() {
        return {
            isEnabled: this.isEnabled,
            leftColor: this.leftColor.asArray(),
            rightColor: this.rightColor.asArray(),
            bias: this.bias,
            power: this.power
        };
    }
    /**
     * Parse a JSON object and deserialize it to a new Fresnel parameter object.
     * @param parsedFresnelParameters Define the JSON representation
     * @returns the parsed parameters
     */ static Parse(parsedFresnelParameters) {
        return new FresnelParameters({
            isEnabled: parsedFresnelParameters.isEnabled,
            leftColor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"].FromArray(parsedFresnelParameters.leftColor),
            rightColor: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"].FromArray(parsedFresnelParameters.rightColor),
            bias: parsedFresnelParameters.bias,
            power: parsedFresnelParameters.power || 1.0
        });
    }
}
// References the dependencies.
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SerializationHelper"]._FresnelParametersParser = FresnelParameters.Parse; //# sourceMappingURL=fresnelParameters.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialHelper.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MaterialHelper",
    ()=>MaterialHelper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialHelper.functions.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$pure$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialHelper.functions.pure.js [app-ssr] (ecmascript)");
;
class MaterialHelper {
}
/**
 * Binds the scene's uniform buffer to the effect.
 * @param effect defines the effect to bind to the scene uniform buffer
 * @param sceneUbo defines the uniform buffer storing scene data
 */ MaterialHelper.BindSceneUniformBuffer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BindSceneUniformBuffer"];
/**
 * Helps preparing the defines values about the UVs in used in the effect.
 * UVs are shared as much as we can across channels in the shaders.
 * @param texture The texture we are preparing the UVs for
 * @param defines The defines to update
 * @param key The channel key "diffuse", "specular"... used in the shader
 */ MaterialHelper.PrepareDefinesForMergedUV = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareDefinesForMergedUV"];
/**
 * Binds a texture matrix value to its corresponding uniform
 * @param texture The texture to bind the matrix for
 * @param uniformBuffer The uniform buffer receiving the data
 * @param key The channel key "diffuse", "specular"... used in the shader
 */ MaterialHelper.BindTextureMatrix = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BindTextureMatrix"];
/**
 * Gets the current status of the fog (should it be enabled?)
 * @param mesh defines the mesh to evaluate for fog support
 * @param scene defines the hosting scene
 * @returns true if fog must be enabled
 */ MaterialHelper.GetFogState = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["GetFogState"];
/**
 * Helper used to prepare the list of defines associated with misc. values for shader compilation
 * @param mesh defines the current mesh
 * @param scene defines the current scene
 * @param useLogarithmicDepth defines if logarithmic depth has to be turned on
 * @param pointsCloud defines if point cloud rendering has to be turned on
 * @param fogEnabled defines if fog has to be turned on
 * @param alphaTest defines if alpha testing has to be turned on
 * @param defines defines the current list of defines
 * @param applyDecalAfterDetail Defines if the decal is applied after or before the detail
 */ MaterialHelper.PrepareDefinesForMisc = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareDefinesForMisc"];
/**
 * Helper used to prepare the defines relative to the active camera
 * @param scene defines the current scene
 * @param defines specifies the list of active defines
 * @returns true if the defines have been updated, else false
 */ MaterialHelper.PrepareDefinesForCamera = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareDefinesForCamera"];
/**
 * Helper used to prepare the list of defines associated with frame values for shader compilation
 * @param scene defines the current scene
 * @param engine defines the current engine
 * @param material defines the material we are compiling the shader for
 * @param defines specifies the list of active defines
 * @param useInstances defines if instances have to be turned on
 * @param useClipPlane defines if clip plane have to be turned on
 * @param useThinInstances defines if thin instances have to be turned on
 */ MaterialHelper.PrepareDefinesForFrameBoundValues = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareDefinesForFrameBoundValues"];
/**
 * Prepares the defines for bones
 * @param mesh The mesh containing the geometry data we will draw
 * @param defines The defines to update
 */ MaterialHelper.PrepareDefinesForBones = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareDefinesForBones"];
/**
 * Prepares the defines for morph targets
 * @param mesh The mesh containing the geometry data we will draw
 * @param defines The defines to update
 */ MaterialHelper.PrepareDefinesForMorphTargets = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareDefinesForMorphTargets"];
/**
 * Prepares the defines for baked vertex animation
 * @param mesh The mesh containing the geometry data we will draw
 * @param defines The defines to update
 */ MaterialHelper.PrepareDefinesForBakedVertexAnimation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareDefinesForBakedVertexAnimation"];
/**
 * Prepares the defines used in the shader depending on the attributes data available in the mesh
 * @param mesh The mesh containing the geometry data we will draw
 * @param defines The defines to update
 * @param useVertexColor Precise whether vertex colors should be used or not (override mesh info)
 * @param useBones Precise whether bones should be used or not (override mesh info)
 * @param useMorphTargets Precise whether morph targets should be used or not (override mesh info)
 * @param useVertexAlpha Precise whether vertex alpha should be used or not (override mesh info)
 * @param useBakedVertexAnimation Precise whether baked vertex animation should be used or not (override mesh info)
 * @returns false if defines are considered not dirty and have not been checked
 */ MaterialHelper.PrepareDefinesForAttributes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareDefinesForAttributes"];
/**
 * Prepares the defines related to multiview
 * @param scene The scene we are intending to draw
 * @param defines The defines to update
 */ MaterialHelper.PrepareDefinesForMultiview = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareDefinesForMultiview"];
/**
 * Prepares the defines related to order independant transparency
 * @param scene The scene we are intending to draw
 * @param defines The defines to update
 * @param needAlphaBlending Determines if the material needs alpha blending
 */ // eslint-disable-next-line @typescript-eslint/naming-convention
MaterialHelper.PrepareDefinesForOIT = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareDefinesForOIT"];
/**
 * Prepares the defines related to the prepass
 * @param scene The scene we are intending to draw
 * @param defines The defines to update
 * @param canRenderToMRT Indicates if this material renders to several textures in the prepass
 */ MaterialHelper.PrepareDefinesForPrePass = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareDefinesForPrePass"];
/**
 * Prepares the defines related to the light information passed in parameter
 * @param scene The scene we are intending to draw
 * @param mesh The mesh the effect is compiling for
 * @param light The light the effect is compiling for
 * @param lightIndex The index of the light
 * @param defines The defines to update
 * @param specularSupported Specifies whether specular is supported or not (override lights data)
 * @param state Defines the current state regarding what is needed (normals, etc...)
 * @param state.needNormals
 * @param state.needRebuild
 * @param state.shadowEnabled
 * @param state.specularEnabled
 * @param state.lightmapMode
 */ MaterialHelper.PrepareDefinesForLight = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareDefinesForLight"];
/**
 * Prepares the defines related to the light information passed in parameter
 * @param scene The scene we are intending to draw
 * @param mesh The mesh the effect is compiling for
 * @param defines The defines to update
 * @param specularSupported Specifies whether specular is supported or not (override lights data)
 * @param maxSimultaneousLights Specifies how manuy lights can be added to the effect at max
 * @param disableLighting Specifies whether the lighting is disabled (override scene and light)
 * @returns true if normals will be required for the rest of the effect
 */ MaterialHelper.PrepareDefinesForLights = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareDefinesForLights"];
/**
 * Prepares the uniforms and samplers list to be used in the effect (for a specific light)
 * @param lightIndex defines the light index
 * @param uniformsList The uniform list
 * @param samplersList The sampler list
 * @param projectedLightTexture defines if projected texture must be used
 * @param uniformBuffersList defines an optional list of uniform buffers
 * @param updateOnlyBuffersList True to only update the uniformBuffersList array
 */ MaterialHelper.PrepareUniformsAndSamplersForLight = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareUniformsAndSamplersForLight"];
/**
 * Prepares the uniforms and samplers list to be used in the effect
 * @param uniformsListOrOptions The uniform names to prepare or an EffectCreationOptions containing the list and extra information
 * @param samplersList The sampler list
 * @param defines The defines helping in the list generation
 * @param maxSimultaneousLights The maximum number of simultaneous light allowed in the effect
 */ MaterialHelper.PrepareUniformsAndSamplersList = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareUniformsAndSamplersList"];
/**
 * This helps decreasing rank by rank the shadow quality (0 being the highest rank and quality)
 * @param defines The defines to update while falling back
 * @param fallbacks The authorized effect fallbacks
 * @param maxSimultaneousLights The maximum number of lights allowed
 * @param rank the current rank of the Effect
 * @returns The newly affected rank
 */ MaterialHelper.HandleFallbacksForShadows = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HandleFallbacksForShadows"];
/**
 * Prepares the list of attributes required for morph targets according to the effect defines.
 * @param attribs The current list of supported attribs
 * @param mesh The mesh to prepare the morph targets attributes for
 * @param influencers The number of influencers
 */ MaterialHelper.PrepareAttributesForMorphTargetsInfluencers = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareAttributesForMorphTargetsInfluencers"];
/**
 * Prepares the list of attributes required for morph targets according to the effect defines.
 * @param attribs The current list of supported attribs
 * @param mesh The mesh to prepare the morph targets attributes for
 * @param defines The current Defines of the effect
 */ MaterialHelper.PrepareAttributesForMorphTargets = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareAttributesForMorphTargets"];
/**
 * Prepares the list of attributes required for baked vertex animations according to the effect defines.
 * @param attribs The current list of supported attribs
 * @param mesh The mesh to prepare for baked vertex animations
 * @param defines The current Defines of the effect
 */ MaterialHelper.PrepareAttributesForBakedVertexAnimation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareAttributesForBakedVertexAnimation"];
/**
 * Prepares the list of attributes required for bones according to the effect defines.
 * @param attribs The current list of supported attribs
 * @param mesh The mesh to prepare the bones attributes for
 * @param defines The current Defines of the effect
 * @param fallbacks The current effect fallback strategy
 */ MaterialHelper.PrepareAttributesForBones = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareAttributesForBones"];
/**
 * Check and prepare the list of attributes required for instances according to the effect defines.
 * @param attribs The current list of supported attribs
 * @param defines The current MaterialDefines of the effect
 */ MaterialHelper.PrepareAttributesForInstances = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareAttributesForInstances"];
/**
 * Add the list of attributes required for instances to the attribs array.
 * @param attribs The current list of supported attribs
 * @param needsPreviousMatrices If the shader needs previous matrices
 */ MaterialHelper.PushAttributesForInstances = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PushAttributesForInstances"];
/**
 * Binds the light information to the effect.
 * @param light The light containing the generator
 * @param effect The effect we are binding the data to
 * @param lightIndex The light index in the effect used to render
 */ MaterialHelper.BindLightProperties = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BindLightProperties"];
/**
 * Binds the lights information from the scene to the effect for the given mesh.
 * @param light Light to bind
 * @param lightIndex Light index
 * @param scene The scene where the light belongs to
 * @param effect The effect we are binding the data to
 * @param useSpecular Defines if specular is supported
 * @param receiveShadows Defines if the effect (mesh) we bind the light for receives shadows
 */ MaterialHelper.BindLight = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BindLight"];
/**
 * Binds the lights information from the scene to the effect for the given mesh.
 * @param scene The scene the lights belongs to
 * @param mesh The mesh we are binding the information to render
 * @param effect The effect we are binding the data to
 * @param defines The generated defines for the effect
 * @param maxSimultaneousLights The maximum number of light that can be bound to the effect
 */ MaterialHelper.BindLights = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BindLights"];
/**
 * Binds the fog information from the scene to the effect for the given mesh.
 * @param scene The scene the lights belongs to
 * @param mesh The mesh we are binding the information to render
 * @param effect The effect we are binding the data to
 * @param linearSpace Defines if the fog effect is applied in linear space
 */ MaterialHelper.BindFogParameters = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BindFogParameters"];
/**
 * Binds the bones information from the mesh to the effect.
 * @param mesh The mesh we are binding the information to render
 * @param effect The effect we are binding the data to
 * @param prePassConfiguration Configuration for the prepass, in case prepass is activated
 */ MaterialHelper.BindBonesParameters = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BindBonesParameters"];
/**
 * Binds the morph targets information from the mesh to the effect.
 * @param abstractMesh The mesh we are binding the information to render
 * @param effect The effect we are binding the data to
 */ MaterialHelper.BindMorphTargetParameters = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BindMorphTargetParameters"];
/**
 * Binds the logarithmic depth information from the scene to the effect for the given defines.
 * @param defines The generated defines used in the effect
 * @param effect The effect we are binding the data to
 * @param scene The scene we are willing to render with logarithmic scale for
 */ MaterialHelper.BindLogDepth = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$pure$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BindLogDepth"]; //# sourceMappingURL=materialHelper.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Occlusion/occlusionMaterial.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OcclusionMaterial",
    ()=>OcclusionMaterial
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.color.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$shaderMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/shaderMaterial.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$color$2e$fragment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/color.fragment.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$color$2e$vertex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/color.vertex.js [app-ssr] (ecmascript)");
;
;
;
;
class OcclusionMaterial extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$shaderMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderMaterial"] {
    constructor(name, scene){
        super(name, scene, "color", {
            attributes: [
                "position"
            ],
            uniforms: [
                "world",
                "viewProjection",
                "color"
            ]
        });
        this.disableColorWrite = true;
        this.forceDepthWrite = true;
        this.setColor4("color", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color4"](0, 0, 0, 1));
    }
} //# sourceMappingURL=occlusionMaterial.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Occlusion/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Occlusion$2f$occlusionMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Occlusion/occlusionMaterial.js [app-ssr] (ecmascript)"); //# sourceMappingURL=index.js.map
;
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Occlusion/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OcclusionMaterial",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Occlusion$2f$occlusionMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OcclusionMaterial"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Occlusion$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Occlusion/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Occlusion$2f$occlusionMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Occlusion/occlusionMaterial.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/shaderLanguage.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Language of the shader code
 */ __turbopack_context__.s([
    "ShaderLanguage",
    ()=>ShaderLanguage
]);
var ShaderLanguage;
(function(ShaderLanguage) {
    /** language is GLSL (used by WebGL) */ ShaderLanguage[ShaderLanguage["GLSL"] = 0] = "GLSL";
    /** language is WGSL (used by WebGPU) */ ShaderLanguage[ShaderLanguage["WGSL"] = 1] = "WGSL";
})(ShaderLanguage || (ShaderLanguage = {})); //# sourceMappingURL=shaderLanguage.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/shadowDepthWrapper.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ShadowDepthWrapper",
    ()=>ShadowDepthWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$effect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/effect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$guid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/guid.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$drawWrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/drawWrapper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/engineStore.js [app-ssr] (ecmascript)");
;
;
;
;
class MapMap {
    constructor(){
        this.mm = new Map();
    }
    get(a, b) {
        const m = this.mm.get(a);
        if (m !== undefined) {
            return m.get(b);
        }
        return undefined;
    }
    set(a, b, v) {
        let m = this.mm.get(a);
        if (m === undefined) {
            this.mm.set(a, m = new Map());
        }
        m.set(b, v);
    }
}
class ShadowDepthWrapper {
    /** Gets the standalone status of the wrapper */ get standalone() {
        return this._options?.standalone ?? false;
    }
    /** Gets the base material the wrapper is built upon */ get baseMaterial() {
        return this._baseMaterial;
    }
    /** Gets the doNotInjectCode status of the wrapper */ get doNotInjectCode() {
        return this._options?.doNotInjectCode ?? false;
    }
    /**
     * Instantiate a new shadow depth wrapper.
     * It works by injecting some specific code in the vertex/fragment shaders of the base material and is used by a shadow generator to
     * generate the shadow depth map. For more information, please refer to the documentation:
     * https://doc.babylonjs.com/features/featuresDeepDive/lights/shadows
     * @param baseMaterial Material to wrap
     * @param scene Define the scene the material belongs to
     * @param options Options used to create the wrapper
     */ constructor(baseMaterial, scene, options){
        this._baseMaterial = baseMaterial;
        this._scene = scene ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EngineStore"].LastCreatedScene;
        this._options = options;
        this._subMeshToEffect = new Map();
        this._subMeshToDepthWrapper = new MapMap();
        this._meshes = new Map();
        // Register for onEffectCreated to store the effect of the base material when it is (re)generated. This effect will be used
        // to create the depth effect later on
        this._onEffectCreatedObserver = this._baseMaterial.onEffectCreatedObservable.add((params)=>{
            const mesh = params.subMesh?.getMesh();
            if (mesh && !this._meshes.has(mesh)) {
                // Register for mesh onDispose to clean up our internal maps when a mesh is disposed
                this._meshes.set(mesh, mesh.onDisposeObservable.add((mesh)=>{
                    const iterator = this._subMeshToEffect.keys();
                    for(let key = iterator.next(); key.done !== true; key = iterator.next()){
                        const subMesh = key.value;
                        if (subMesh?.getMesh() === mesh) {
                            this._subMeshToEffect.delete(subMesh);
                            this._deleteDepthWrapperEffect(subMesh);
                        }
                    }
                }));
            }
            if (this._subMeshToEffect.get(params.subMesh)?.[0] !== params.effect) {
                this._subMeshToEffect.set(params.subMesh, [
                    params.effect,
                    this._scene.getEngine().currentRenderPassId
                ]);
                this._deleteDepthWrapperEffect(params.subMesh);
            }
        });
    }
    _deleteDepthWrapperEffect(subMesh) {
        const depthWrapperEntries = this._subMeshToDepthWrapper.mm.get(subMesh);
        if (depthWrapperEntries) {
            // find and release the previous depth effect
            depthWrapperEntries.forEach((depthWrapper)=>{
                depthWrapper.mainDrawWrapper.effect?.dispose();
            });
            this._subMeshToDepthWrapper.mm.delete(subMesh); // trigger a depth effect recreation
        }
    }
    /**
     * Gets the effect to use to generate the depth map
     * @param subMesh subMesh to get the effect for
     * @param shadowGenerator shadow generator to get the effect for
     * @param passIdForDrawWrapper Id of the pass for which the effect from the draw wrapper must be retrieved from
     * @returns the effect to use to generate the depth map for the subMesh + shadow generator specified
     */ getEffect(subMesh, shadowGenerator, passIdForDrawWrapper) {
        const entry = this._subMeshToDepthWrapper.mm.get(subMesh)?.get(shadowGenerator);
        if (!entry) {
            return null;
        }
        let drawWrapper = entry.drawWrapper[passIdForDrawWrapper];
        if (!drawWrapper) {
            drawWrapper = entry.drawWrapper[passIdForDrawWrapper] = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$drawWrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DrawWrapper"](this._scene.getEngine());
            drawWrapper.setEffect(entry.mainDrawWrapper.effect, entry.mainDrawWrapper.defines);
        }
        return drawWrapper;
    }
    /**
     * Specifies that the submesh is ready to be used for depth rendering
     * @param subMesh submesh to check
     * @param defines the list of defines to take into account when checking the effect
     * @param shadowGenerator combined with subMesh, it defines the effect to check
     * @param useInstances specifies that instances should be used
     * @param passIdForDrawWrapper Id of the pass for which the draw wrapper should be created
     * @returns a boolean indicating that the submesh is ready or not
     */ isReadyForSubMesh(subMesh, defines, shadowGenerator, useInstances, passIdForDrawWrapper) {
        if (this.standalone) {
            // will ensure the effect is (re)created for the base material
            if (!this._baseMaterial.isReadyForSubMesh(subMesh.getMesh(), subMesh, useInstances)) {
                return false;
            }
        }
        return this._makeEffect(subMesh, defines, shadowGenerator, passIdForDrawWrapper)?.isReady() ?? false;
    }
    /**
     * Disposes the resources
     */ dispose() {
        this._baseMaterial.onEffectCreatedObservable.remove(this._onEffectCreatedObserver);
        this._onEffectCreatedObserver = null;
        const iterator = this._meshes.entries();
        for(let entry = iterator.next(); entry.done !== true; entry = iterator.next()){
            const [mesh, observer] = entry.value;
            mesh.onDisposeObservable.remove(observer);
        }
    }
    _makeEffect(subMesh, defines, shadowGenerator, passIdForDrawWrapper) {
        const engine = this._scene.getEngine();
        const origEffectAndRenderPassId = this._subMeshToEffect.get(subMesh);
        if (!origEffectAndRenderPassId) {
            return null;
        }
        const [origEffect, origRenderPassId] = origEffectAndRenderPassId;
        if (!origEffect.isReady()) {
            return null;
        }
        let params = this._subMeshToDepthWrapper.get(subMesh, shadowGenerator);
        if (!params) {
            const mainDrawWrapper = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$drawWrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DrawWrapper"](engine);
            mainDrawWrapper.defines = subMesh._getDrawWrapper(origRenderPassId)?.defines ?? null;
            params = {
                drawWrapper: [],
                mainDrawWrapper,
                depthDefines: "",
                token: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$guid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RandomGUID"])()
            };
            params.drawWrapper[passIdForDrawWrapper] = mainDrawWrapper;
            this._subMeshToDepthWrapper.set(subMesh, shadowGenerator, params);
        }
        const join = defines.join("\n");
        if (params.mainDrawWrapper.effect) {
            if (join === params.depthDefines) {
                // we already created the depth effect and it is still up to date for this submesh + shadow generator
                return params.mainDrawWrapper.effect;
            }
        }
        params.depthDefines = join;
        const uniforms = origEffect.getUniformNames().slice();
        // the depth effect is either out of date or has not been created yet
        let vertexCode = origEffect.vertexSourceCodeBeforeMigration, fragmentCode = origEffect.fragmentSourceCodeBeforeMigration;
        if (!vertexCode && !fragmentCode) {
            return null;
        }
        if (!this.doNotInjectCode) {
            // Declare the shadow map includes
            const vertexNormalBiasCode = this._options && this._options.remappedVariables ? `#include<shadowMapVertexNormalBias>(${this._options.remappedVariables.join(",")})` : `#include<shadowMapVertexNormalBias>`, vertexMetricCode = this._options && this._options.remappedVariables ? `#include<shadowMapVertexMetric>(${this._options.remappedVariables.join(",")})` : `#include<shadowMapVertexMetric>`, fragmentSoftTransparentShadow = this._options && this._options.remappedVariables ? `#include<shadowMapFragmentSoftTransparentShadow>(${this._options.remappedVariables.join(",")})` : `#include<shadowMapFragmentSoftTransparentShadow>`, fragmentBlockCode = `#include<shadowMapFragment>`, vertexExtraDeclartion = `#include<shadowMapVertexExtraDeclaration>`;
            // vertex code
            if (origEffect.shaderLanguage === 0 /* ShaderLanguage.GLSL */ ) {
                vertexCode = vertexCode.replace(/void\s+?main/g, `\n${vertexExtraDeclartion}\nvoid main`);
            } else {
                vertexCode = vertexCode.replace(/@vertex/g, `\n${vertexExtraDeclartion}\n@vertex`);
            }
            vertexCode = vertexCode.replace(/#define SHADOWDEPTH_NORMALBIAS|#define CUSTOM_VERTEX_UPDATE_WORLDPOS/g, vertexNormalBiasCode);
            if (vertexCode.indexOf("#define SHADOWDEPTH_METRIC") !== -1) {
                vertexCode = vertexCode.replace(/#define SHADOWDEPTH_METRIC/g, vertexMetricCode);
            } else {
                vertexCode = vertexCode.replace(/}\s*$/g, vertexMetricCode + "\n}");
            }
            vertexCode = vertexCode.replace(/#define SHADER_NAME.*?\n|out vec4 glFragColor;\n/g, "");
            // fragment code
            const hasLocationForSoftTransparentShadow = fragmentCode.indexOf("#define SHADOWDEPTH_SOFTTRANSPARENTSHADOW") >= 0 || fragmentCode.indexOf("#define CUSTOM_FRAGMENT_BEFORE_FOG") >= 0;
            const hasLocationForFragment = fragmentCode.indexOf("#define SHADOWDEPTH_FRAGMENT") !== -1;
            let fragmentCodeToInjectAtEnd = "";
            if (!hasLocationForSoftTransparentShadow) {
                fragmentCodeToInjectAtEnd = fragmentSoftTransparentShadow + "\n";
            } else {
                fragmentCode = fragmentCode.replace(/#define SHADOWDEPTH_SOFTTRANSPARENTSHADOW|#define CUSTOM_FRAGMENT_BEFORE_FOG/g, fragmentSoftTransparentShadow);
            }
            fragmentCode = fragmentCode.replace(/void\s+?main/g, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$effect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Effect"].IncludesShadersStore["shadowMapFragmentExtraDeclaration"] + "\nvoid main");
            if (hasLocationForFragment) {
                fragmentCode = fragmentCode.replace(/#define SHADOWDEPTH_FRAGMENT/g, fragmentBlockCode);
            } else {
                fragmentCodeToInjectAtEnd += fragmentBlockCode + "\n";
            }
            if (fragmentCodeToInjectAtEnd) {
                fragmentCode = fragmentCode.replace(/}\s*$/g, fragmentCodeToInjectAtEnd + "}");
            }
            uniforms.push("biasAndScaleSM", "depthValuesSM", "lightDataSM", "softTransparentShadowSM");
        }
        params.mainDrawWrapper.effect = engine.createEffect({
            vertexSource: vertexCode,
            fragmentSource: fragmentCode,
            vertexToken: params.token,
            fragmentToken: params.token
        }, {
            attributes: origEffect.getAttributesNames(),
            uniformsNames: uniforms,
            uniformBuffersNames: origEffect.getUniformBuffersNames(),
            samplers: origEffect.getSamplers(),
            defines: join + "\n" + origEffect.defines.replace("#define SHADOWS", "").replace(/#define SHADOW\d/g, ""),
            indexParameters: origEffect.getIndexParameters(),
            shaderLanguage: origEffect.shaderLanguage
        }, engine);
        for(let id = 0; id < params.drawWrapper.length; ++id){
            if (id !== passIdForDrawWrapper) {
                params.drawWrapper[id]?.setEffect(params.mainDrawWrapper.effect, params.mainDrawWrapper.defines);
            }
        }
        return params.mainDrawWrapper.effect;
    }
} //# sourceMappingURL=shadowDepthWrapper.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/GaussianSplatting/gaussianSplattingMaterial.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GaussianSplattingMaterial",
    ()=>GaussianSplattingMaterial
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/decorators.serialization.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Buffers/buffer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialDefines$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialDefines.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$pushMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/pushMaterial.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$clipPlaneMaterialHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/clipPlaneMaterialHelper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$camera$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/camera.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$shadowDepthWrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/shadowDepthWrapper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$shaderMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/shaderMaterial.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$gaussianSplatting$2e$fragment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/gaussianSplatting.fragment.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$gaussianSplatting$2e$vertex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/gaussianSplatting.vertex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$gaussianSplatting$2e$fragment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/gaussianSplatting.fragment.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$gaussianSplatting$2e$vertex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/gaussianSplatting.vertex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$gaussianSplattingDepth$2e$fragment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/gaussianSplattingDepth.fragment.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$gaussianSplattingDepth$2e$vertex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/gaussianSplattingDepth.vertex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$gaussianSplattingDepth$2e$fragment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/gaussianSplattingDepth.fragment.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$gaussianSplattingDepth$2e$vertex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/gaussianSplattingDepth.vertex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialHelper.functions.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$pure$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialHelper.functions.pure.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
/**
 * @internal
 */ class GaussianSplattingMaterialDefines extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialDefines$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialDefines"] {
    /**
     * Constructor of the defines.
     */ constructor(){
        super();
        this.FOG = false;
        this.THIN_INSTANCES = true;
        this.LOGARITHMICDEPTH = false;
        this.CLIPPLANE = false;
        this.CLIPPLANE2 = false;
        this.CLIPPLANE3 = false;
        this.CLIPPLANE4 = false;
        this.CLIPPLANE5 = false;
        this.CLIPPLANE6 = false;
        this.SH_DEGREE = 0;
        this.COMPENSATION = false;
        this.rebuild();
    }
}
class GaussianSplattingMaterial extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$pushMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PushMaterial"] {
    /**
     * Instantiates a Gaussian Splatting Material in the given scene
     * @param name The friendly name of the material
     * @param scene The scene to add the material to
     */ constructor(name, scene){
        super(name, scene);
        /**
         * Point spread function (default 0.3). Can be overriden per GS material, otherwise, using default static `KernelSize` value
         */ this.kernelSize = GaussianSplattingMaterial.KernelSize;
        this._compensation = GaussianSplattingMaterial.Compensation;
        // set to true when material defines are dirty
        this._isDirty = false;
        this.backFaceCulling = false;
        this.shadowDepthWrapper = GaussianSplattingMaterial._MakeGaussianSplattingShadowDepthWrapper(scene, this.shaderLanguage);
    }
    /**
     * Set compensation default value is `GaussianSplattingMaterial.Compensation`
     */ set compensation(value) {
        this._isDirty = this._isDirty != value;
        this._compensation = value;
    }
    /**
     * Get compensation
     */ get compensation() {
        return this._compensation;
    }
    /**
     * Gets a boolean indicating that current material needs to register RTT
     */ get hasRenderTargetTextures() {
        return false;
    }
    /**
     * Specifies whether or not this material should be rendered in alpha test mode.
     * @returns false
     */ needAlphaTesting() {
        return false;
    }
    /**
     * Specifies whether or not this material should be rendered in alpha blend mode.
     * @returns true
     */ needAlphaBlending() {
        return true;
    }
    /**
     * Checks whether the material is ready to be rendered for a given mesh.
     * @param mesh The mesh to render
     * @param subMesh The submesh to check against
     * @returns true if all the dependencies are ready (Textures, Effects...)
     */ isReadyForSubMesh(mesh, subMesh) {
        const useInstances = true;
        const drawWrapper = subMesh._drawWrapper;
        let defines = subMesh.materialDefines;
        if (defines && this._isDirty) {
            defines.markAsUnprocessed();
        }
        if (drawWrapper.effect && this.isFrozen) {
            if (drawWrapper._wasPreviouslyReady && drawWrapper._wasPreviouslyUsingInstances === useInstances) {
                return true;
            }
        }
        if (!subMesh.materialDefines) {
            defines = subMesh.materialDefines = new GaussianSplattingMaterialDefines();
        }
        const scene = this.getScene();
        if (this._isReadyForSubMesh(subMesh)) {
            return true;
        }
        const engine = scene.getEngine();
        const gsMesh = mesh;
        // Misc.
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareDefinesForMisc"])(mesh, scene, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, false, defines, undefined, undefined, undefined, this._isVertexOutputInvariant);
        // Values that need to be evaluated on every frame
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareDefinesForFrameBoundValues"])(scene, engine, this, defines, useInstances, null, true);
        // Attribs
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareDefinesForAttributes"])(mesh, defines, false, false);
        // SH is disabled for webGL1
        if (engine.version > 1 || engine.isWebGPU) {
            defines["SH_DEGREE"] = gsMesh.shDegree;
        }
        // Compensation
        const splatMaterial = gsMesh.material;
        defines["COMPENSATION"] = splatMaterial && splatMaterial.compensation ? splatMaterial.compensation : GaussianSplattingMaterial.Compensation;
        // Get correct effect
        if (defines.isDirty) {
            defines.markAsProcessed();
            scene.resetCachedMaterial();
            //Attributes
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareAttributesForInstances"])(GaussianSplattingMaterial._Attribs, defines);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareUniformsAndSamplersList"])({
                uniformsNames: GaussianSplattingMaterial._Uniforms,
                uniformBuffersNames: GaussianSplattingMaterial._UniformBuffers,
                samplers: GaussianSplattingMaterial._Samplers,
                defines: defines
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$clipPlaneMaterialHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AddClipPlaneUniforms"])(GaussianSplattingMaterial._Uniforms);
            const join = defines.toString();
            const effect = scene.getEngine().createEffect("gaussianSplatting", {
                attributes: GaussianSplattingMaterial._Attribs,
                uniformsNames: GaussianSplattingMaterial._Uniforms,
                uniformBuffersNames: GaussianSplattingMaterial._UniformBuffers,
                samplers: GaussianSplattingMaterial._Samplers,
                defines: join,
                onCompiled: this.onCompiled,
                onError: this.onError,
                indexParameters: {},
                shaderLanguage: this._shaderLanguage,
                extraInitializationsAsync: async ()=>{
                    if (this._shaderLanguage === 1 /* ShaderLanguage.WGSL */ ) {
                        await Promise.all([
                            __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/gaussianSplatting.fragment.js [app-ssr] (ecmascript, async loader)"),
                            __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/gaussianSplatting.vertex.js [app-ssr] (ecmascript, async loader)")
                        ]);
                    } else {
                        await Promise.all([
                            __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/gaussianSplatting.fragment.js [app-ssr] (ecmascript, async loader)"),
                            __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/gaussianSplatting.vertex.js [app-ssr] (ecmascript, async loader)")
                        ]);
                    }
                }
            }, engine);
            subMesh.setEffect(effect, defines, this._materialContext);
        }
        if (!subMesh.effect || !subMesh.effect.isReady()) {
            return false;
        }
        defines._renderId = scene.getRenderId();
        drawWrapper._wasPreviouslyReady = true;
        drawWrapper._wasPreviouslyUsingInstances = useInstances;
        this._isDirty = false;
        return true;
    }
    /**
     * Bind material effect for a specific Gaussian Splatting mesh
     * @param mesh Gaussian splatting mesh
     * @param effect Splatting material or node material
     * @param scene scene that contains mesh and camera used for rendering
     */ static BindEffect(mesh, effect, scene) {
        const engine = scene.getEngine();
        const camera = scene.activeCamera;
        const renderWidth = engine.getRenderWidth();
        const renderHeight = engine.getRenderHeight();
        const gsMesh = mesh;
        const gsMaterial = gsMesh.material;
        // check if rigcamera, get number of rigs
        const numberOfRigs = camera?.rigParent?.rigCameras.length || 1;
        effect.setFloat2("invViewport", 1 / (renderWidth / numberOfRigs), 1 / renderHeight);
        let focal = 1000;
        if (camera) {
            /*
            more explicit version:
            const t = camera.getProjectionMatrix().m[5];
            const FovY = Math.atan(1.0 / t) * 2.0;
            focal = renderHeight / 2.0 / Math.tan(FovY / 2.0);
            Using a shorter version here to not have tan(atan) and 2.0 factor
            */ const t = camera.getProjectionMatrix().m[5];
            if (camera.fovMode == __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$camera$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Camera"].FOVMODE_VERTICAL_FIXED) {
                focal = renderHeight * t / 2.0;
            } else {
                focal = renderWidth * t / 2.0;
            }
        }
        effect.setFloat2("focal", focal, focal);
        effect.setVector3("viewDirectionFactor", gsMesh.viewDirectionFactor);
        effect.setFloat("kernelSize", gsMaterial && gsMaterial.kernelSize ? gsMaterial.kernelSize : GaussianSplattingMaterial.KernelSize);
        scene.bindEyePosition(effect, "eyePosition", true);
        if (gsMesh.covariancesATexture) {
            const textureSize = gsMesh.covariancesATexture.getSize();
            effect.setFloat2("dataTextureSize", textureSize.width, textureSize.height);
            effect.setTexture("covariancesATexture", gsMesh.covariancesATexture);
            effect.setTexture("covariancesBTexture", gsMesh.covariancesBTexture);
            effect.setTexture("centersTexture", gsMesh.centersTexture);
            effect.setTexture("colorsTexture", gsMesh.colorsTexture);
            if (gsMesh.shTextures) {
                for(let i = 0; i < gsMesh.shTextures?.length; i++){
                    effect.setTexture(`shTexture${i}`, gsMesh.shTextures[i]);
                }
            }
        }
    }
    /**
     * Binds the submesh to this material by preparing the effect and shader to draw
     * @param world defines the world transformation matrix
     * @param mesh defines the mesh containing the submesh
     * @param subMesh defines the submesh to bind the material to
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
        // Bind data
        const mustRebind = this._mustRebind(scene, effect, subMesh, mesh.visibility);
        if (mustRebind) {
            this.bindView(effect);
            this.bindViewProjection(effect);
            GaussianSplattingMaterial.BindEffect(mesh, this._activeEffect, scene);
            // Clip plane
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$clipPlaneMaterialHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BindClipPlane"])(effect, this, scene);
        } else if (scene.getEngine()._features.needToAlwaysBindUniformBuffers) {
            this._needToBindSceneUbo = true;
        }
        // Fog
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BindFogParameters"])(scene, mesh, effect);
        // Log. depth
        if (this.useLogarithmicDepth) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$pure$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BindLogDepth"])(defines, effect, scene);
        }
        this._afterBind(mesh, this._activeEffect, subMesh);
    }
    static _MakeGaussianSplattingShadowDepthWrapper(scene, shaderLanguage) {
        const shaderMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$shaderMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderMaterial"]("gaussianSplattingDepth", scene, {
            vertex: "gaussianSplattingDepth",
            fragment: "gaussianSplattingDepth"
        }, {
            attributes: GaussianSplattingMaterial._Attribs,
            uniforms: GaussianSplattingMaterial._Uniforms,
            samplers: GaussianSplattingMaterial._Samplers,
            uniformBuffers: GaussianSplattingMaterial._UniformBuffers,
            shaderLanguage: shaderLanguage
        });
        const shadowDepthWrapper = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$shadowDepthWrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShadowDepthWrapper"](shaderMaterial, scene, {
            standalone: true
        });
        shaderMaterial.onBindObservable.add((mesh)=>{
            const effect = shaderMaterial.getEffect();
            const gsMaterial = mesh.material;
            const gsMesh = mesh;
            mesh.getMeshUniformBuffer().bindToEffect(effect, "Mesh");
            shaderMaterial.bindView(effect);
            shaderMaterial.bindViewProjection(effect);
            const shadowmapWidth = scene.getEngine().getRenderWidth();
            const shadowmapHeight = scene.getEngine().getRenderHeight();
            effect.setFloat2("invViewport", 1 / shadowmapWidth, 1 / shadowmapHeight);
            const projection = scene.getProjectionMatrix();
            const t = projection.m[5];
            const focal = shadowmapWidth * t / 2.0;
            effect.setFloat2("focal", focal, focal);
            effect.setFloat("kernelSize", gsMaterial && gsMaterial.kernelSize ? gsMaterial.kernelSize : GaussianSplattingMaterial.KernelSize);
            if (gsMesh.covariancesATexture) {
                const textureSize = gsMesh.covariancesATexture.getSize();
                effect.setFloat2("dataTextureSize", textureSize.width, textureSize.height);
                effect.setTexture("covariancesATexture", gsMesh.covariancesATexture);
                effect.setTexture("covariancesBTexture", gsMesh.covariancesBTexture);
                effect.setTexture("centersTexture", gsMesh.centersTexture);
                effect.setTexture("colorsTexture", gsMesh.colorsTexture);
            }
        });
        return shadowDepthWrapper;
    }
    /**
     * Clones the material.
     * @param name The cloned name.
     * @returns The cloned material.
     */ clone(name) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SerializationHelper"].Clone(()=>new GaussianSplattingMaterial(name, this.getScene()), this);
    }
    /**
     * Serializes the current material to its JSON representation.
     * @returns The JSON representation.
     */ serialize() {
        const serializationObject = super.serialize();
        serializationObject.customType = "BABYLON.GaussianSplattingMaterial";
        return serializationObject;
    }
    /**
     * Gets the class name of the material
     * @returns "GaussianSplattingMaterial"
     */ getClassName() {
        return "GaussianSplattingMaterial";
    }
    /**
     * Parse a JSON input to create back a Gaussian Splatting material.
     * @param source The JSON data to parse
     * @param scene The scene to create the parsed material in
     * @param rootUrl The root url of the assets the material depends upon
     * @returns the instantiated GaussianSplattingMaterial.
     */ static Parse(source, scene, rootUrl) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$serialization$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SerializationHelper"].Parse(()=>new GaussianSplattingMaterial(source.name, scene), source, scene, rootUrl);
    }
}
/**
 * Point spread function (default 0.3). Can be overriden per GS material
 */ GaussianSplattingMaterial.KernelSize = 0.3;
/**
 * Compensation
 */ GaussianSplattingMaterial.Compensation = false;
GaussianSplattingMaterial._Attribs = [
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].PositionKind,
    "splatIndex0",
    "splatIndex1",
    "splatIndex2",
    "splatIndex3"
];
GaussianSplattingMaterial._Samplers = [
    "covariancesATexture",
    "covariancesBTexture",
    "centersTexture",
    "colorsTexture",
    "shTexture0",
    "shTexture1",
    "shTexture2"
];
GaussianSplattingMaterial._UniformBuffers = [
    "Scene",
    "Mesh"
];
GaussianSplattingMaterial._Uniforms = [
    "world",
    "view",
    "projection",
    "vFogInfos",
    "vFogColor",
    "logarithmicDepthConstant",
    "invViewport",
    "dataTextureSize",
    "focal",
    "eyePosition",
    "kernelSize",
    "viewDirectionFactor"
];
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.GaussianSplattingMaterial", GaussianSplattingMaterial); //# sourceMappingURL=gaussianSplattingMaterial.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialPluginEvent.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @internal
 */ __turbopack_context__.s([
    "MaterialPluginEvent",
    ()=>MaterialPluginEvent
]);
var MaterialPluginEvent;
(function(MaterialPluginEvent) {
    MaterialPluginEvent[MaterialPluginEvent["Created"] = 1] = "Created";
    MaterialPluginEvent[MaterialPluginEvent["Disposed"] = 2] = "Disposed";
    MaterialPluginEvent[MaterialPluginEvent["GetDefineNames"] = 4] = "GetDefineNames";
    MaterialPluginEvent[MaterialPluginEvent["PrepareUniformBuffer"] = 8] = "PrepareUniformBuffer";
    MaterialPluginEvent[MaterialPluginEvent["IsReadyForSubMesh"] = 16] = "IsReadyForSubMesh";
    MaterialPluginEvent[MaterialPluginEvent["PrepareDefines"] = 32] = "PrepareDefines";
    MaterialPluginEvent[MaterialPluginEvent["BindForSubMesh"] = 64] = "BindForSubMesh";
    MaterialPluginEvent[MaterialPluginEvent["PrepareEffect"] = 128] = "PrepareEffect";
    MaterialPluginEvent[MaterialPluginEvent["GetAnimatables"] = 256] = "GetAnimatables";
    MaterialPluginEvent[MaterialPluginEvent["GetActiveTextures"] = 512] = "GetActiveTextures";
    MaterialPluginEvent[MaterialPluginEvent["HasTexture"] = 1024] = "HasTexture";
    MaterialPluginEvent[MaterialPluginEvent["FillRenderTargetTextures"] = 2048] = "FillRenderTargetTextures";
    MaterialPluginEvent[MaterialPluginEvent["HasRenderTargetTextures"] = 4096] = "HasRenderTargetTextures";
    MaterialPluginEvent[MaterialPluginEvent["HardBindForSubMesh"] = 8192] = "HardBindForSubMesh";
})(MaterialPluginEvent || (MaterialPluginEvent = {})); //# sourceMappingURL=materialPluginEvent.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/material.decalMapConfiguration.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DecalMapConfiguration",
    ()=>DecalMapConfiguration,
    "DecalMapDefines",
    ()=>DecalMapDefines
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/decorators.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialDefines$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialDefines.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialPluginBase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialPluginBase.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialFlags.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialHelper.functions.js [app-ssr] (ecmascript) <locals>");
;
;
;
;
;
;
;
class DecalMapDefines extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialDefines$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialDefines"] {
    constructor(){
        super(...arguments);
        this.DECAL = false;
        this.DECALDIRECTUV = 0;
        this.DECAL_SMOOTHALPHA = false;
        this.GAMMADECAL = false;
    }
}
class DecalMapConfiguration extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialPluginBase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialPluginBase"] {
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
    /**
     * Creates a new DecalMapConfiguration
     * @param material The material to attach the decal map plugin to
     * @param addToPluginList If the plugin should be added to the material plugin list
     */ constructor(material, addToPluginList = true){
        super(material, "DecalMap", 150, new DecalMapDefines(), addToPluginList);
        this._isEnabled = false;
        /**
         * Enables or disables the decal map on this material
         */ this.isEnabled = false;
        this._smoothAlpha = false;
        /**
         * Enables or disables the smooth alpha mode on this material. Default: false.
         * When enabled, the alpha value used to blend the decal map will be the squared value and will produce a smoother result.
         */ this.smoothAlpha = false;
        this.registerForExtraEvents = true; // because we override the hardBindForSubMesh method
        this._internalMarkAllSubMeshesAsTexturesDirty = material._dirtyCallbacks[1];
    }
    isReadyForSubMesh(defines, scene, engine, subMesh) {
        const decalMap = subMesh.getMesh().decalMap;
        if (!this._isEnabled || !decalMap?.texture || !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].DecalMapEnabled || !scene.texturesEnabled) {
            return true;
        }
        return decalMap.isReady();
    }
    prepareDefinesBeforeAttributes(defines, scene, mesh) {
        const decalMap = mesh.decalMap;
        if (!this._isEnabled || !decalMap?.texture || !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].DecalMapEnabled || !scene.texturesEnabled) {
            const isDirty = defines.DECAL;
            if (isDirty) {
                defines.markAsTexturesDirty();
            }
            defines.DECAL = false;
        } else {
            const isDirty = !defines.DECAL || defines.GAMMADECAL !== decalMap.texture.gammaSpace;
            if (isDirty) {
                defines.markAsTexturesDirty();
            }
            defines.DECAL = true;
            defines.GAMMADECAL = decalMap.texture.gammaSpace;
            defines.DECAL_SMOOTHALPHA = this._smoothAlpha;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareDefinesForMergedUV"])(decalMap.texture, defines, "DECAL");
        }
    }
    hardBindForSubMesh(uniformBuffer, scene, _engine, subMesh) {
        /**
         * Note that we override hardBindForSubMesh and not bindForSubMesh because the material can be shared by multiple meshes,
         * in which case mustRebind could return false even though the decal map is different for each mesh: that's because the decal map
         * is not part of the material but hosted by the decalMap of the mesh instead.
         */ const decalMap = subMesh.getMesh().decalMap;
        if (!this._isEnabled || !decalMap?.texture || !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialFlags"].DecalMapEnabled || !scene.texturesEnabled) {
            return;
        }
        const isFrozen = this._material.isFrozen;
        const texture = decalMap.texture;
        if (!uniformBuffer.useUbo || !isFrozen || !uniformBuffer.isSync) {
            uniformBuffer.updateFloat4("vDecalInfos", texture.coordinatesIndex, 0, 0, 0);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BindTextureMatrix"])(texture, uniformBuffer, "decal");
        }
        uniformBuffer.setTexture("decalSampler", texture);
    }
    getClassName() {
        return "DecalMapConfiguration";
    }
    getSamplers(samplers) {
        samplers.push("decalSampler");
    }
    getUniforms() {
        return {
            ubo: [
                {
                    name: "vDecalInfos",
                    size: 4,
                    type: "vec4"
                },
                {
                    name: "decalMatrix",
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
], DecalMapConfiguration.prototype, "isEnabled", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllSubMeshesAsTexturesDirty")
], DecalMapConfiguration.prototype, "smoothAlpha", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.DecalMapConfiguration", DecalMapConfiguration); //# sourceMappingURL=material.decalMapConfiguration.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialPluginFactoryExport.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createDetailMapPlugin",
    ()=>createDetailMapPlugin,
    "createPBRAnisotropicPlugin",
    ()=>createPBRAnisotropicPlugin,
    "createPBRBRDFPlugin",
    ()=>createPBRBRDFPlugin,
    "createPBRClearCoatPlugin",
    ()=>createPBRClearCoatPlugin,
    "createPBRIridescencePlugin",
    ()=>createPBRIridescencePlugin,
    "createPBRSheenPlugin",
    ()=>createPBRSheenPlugin,
    "createPBRSubSurfacePlugin",
    ()=>createPBRSubSurfacePlugin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$material$2e$detailMapConfiguration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/material.detailMapConfiguration.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrAnisotropicConfiguration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/PBR/pbrAnisotropicConfiguration.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrBaseMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/PBR/pbrBaseMaterial.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrBRDFConfiguration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/PBR/pbrBRDFConfiguration.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrClearCoatConfiguration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/PBR/pbrClearCoatConfiguration.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrIridescenceConfiguration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/PBR/pbrIridescenceConfiguration.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrSheenConfiguration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/PBR/pbrSheenConfiguration.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrSubSurfaceConfiguration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/PBR/pbrSubSurfaceConfiguration.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$standardMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/standardMaterial.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
function createPBRAnisotropicPlugin(material) {
    if (material instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrBaseMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PBRBaseMaterial"]) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrAnisotropicConfiguration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PBRAnisotropicConfiguration"](material);
    }
    return null;
}
function createPBRBRDFPlugin(material) {
    if (material instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrBaseMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PBRBaseMaterial"]) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrBRDFConfiguration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PBRBRDFConfiguration"](material);
    }
    return null;
}
function createPBRClearCoatPlugin(material) {
    if (material instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrBaseMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PBRBaseMaterial"]) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrClearCoatConfiguration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PBRClearCoatConfiguration"](material);
    }
    return null;
}
function createPBRIridescencePlugin(material) {
    if (material instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrBaseMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PBRBaseMaterial"]) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrIridescenceConfiguration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PBRIridescenceConfiguration"](material);
    }
    return null;
}
function createPBRSheenPlugin(material) {
    if (material instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrBaseMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PBRBaseMaterial"]) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrSheenConfiguration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PBRSheenConfiguration"](material);
    }
    return null;
}
function createPBRSubSurfacePlugin(material) {
    if (material instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrBaseMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PBRBaseMaterial"]) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrSubSurfaceConfiguration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PBRSubSurfaceConfiguration"](material);
    }
    return null;
}
function createDetailMapPlugin(material) {
    if (material instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrBaseMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PBRBaseMaterial"] || material instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$standardMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StandardMaterial"]) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$material$2e$detailMapConfiguration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DetailMapConfiguration"](material);
    }
    return null;
} //# sourceMappingURL=materialPluginFactoryExport.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/GreasedLine/greasedLineMaterialDefaults.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GreasedLineMaterialDefaults",
    ()=>GreasedLineMaterialDefaults
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.color.js [app-ssr] (ecmascript)");
;
class GreasedLineMaterialDefaults {
}
/**
 * Default line color for newly created lines
 */ GreasedLineMaterialDefaults.DEFAULT_COLOR = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"].White();
/**
 * Default line width when sizeAttenuation is true
 */ GreasedLineMaterialDefaults.DEFAULT_WIDTH_ATTENUATED = 1;
/**
 * Defaule line width
 */ GreasedLineMaterialDefaults.DEFAULT_WIDTH = 0.1; //# sourceMappingURL=greasedLineMaterialDefaults.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/GreasedLine/greasedLinePluginMaterialShadersGLSL.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Returns GLSL custom shader code
 * @param shaderType vertex or fragment
 * @param cameraFacing is in camera facing mode?
 * @returns GLSL custom shader code
 */ /** @internal */ __turbopack_context__.s([
    "GetCustomCode",
    ()=>GetCustomCode
]);
function GetCustomCode(shaderType, cameraFacing) {
    if (shaderType === "vertex") {
        const obj = {
            CUSTOM_VERTEX_DEFINITIONS: `
                attribute float grl_widths;
                attribute vec3 grl_offsets;
                attribute float grl_colorPointers;
                varying float grlCounters;
                varying float grlColorPointer;

                #ifdef GREASED_LINE_CAMERA_FACING
                    attribute vec4 grl_previousAndSide;
                    attribute vec4 grl_nextAndCounters;

                    vec2 grlFix( vec4 i, float aspect ) {
                        vec2 res = i.xy / i.w;
                        res.x *= aspect;
                        return res;
                    }
                #else
                    attribute vec3 grl_slopes;
                    attribute float grl_counters;
                #endif
                `,
            CUSTOM_VERTEX_UPDATE_POSITION: `
                #ifdef GREASED_LINE_CAMERA_FACING
                    vec3 grlPositionOffset = grl_offsets;
                    positionUpdated += grlPositionOffset;
                #else
                    positionUpdated = (positionUpdated + grl_offsets) + (grl_slopes * grl_widths);
                #endif
                `,
            CUSTOM_VERTEX_MAIN_END: `
                grlColorPointer = grl_colorPointers;

                #ifdef GREASED_LINE_CAMERA_FACING

                    float grlAspect = grl_aspect_resolution_lineWidth.x;
                    float grlBaseWidth = grl_aspect_resolution_lineWidth.w;

                    vec3 grlPrevious = grl_previousAndSide.xyz;
                    float grlSide = grl_previousAndSide.w;

                    vec3 grlNext = grl_nextAndCounters.xyz;
                    grlCounters = grl_nextAndCounters.w;
                    float grlWidth = grlBaseWidth * grl_widths;
                    
                    vec3 worldDir = normalize(grlNext - grlPrevious);
                    vec3 nearPosition = positionUpdated + (worldDir * 0.01);
                    mat4 grlMatrix = viewProjection * finalWorld;
                    vec4 grlFinalPosition = grlMatrix * vec4(positionUpdated , 1.0);
                    vec4 screenNearPos = grlMatrix * vec4(nearPosition, 1.0);
                    vec2 grlLinePosition = grlFix(grlFinalPosition, grlAspect);
                    vec2 grlLineNearPosition = grlFix(screenNearPos, grlAspect);
                    vec2 grlDir = normalize(grlLineNearPosition - grlLinePosition);

                    vec4 grlNormal = vec4(-grlDir.y, grlDir.x, 0., 1.);

                    #ifdef GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM
                        grlNormal.xy *= -.5 * grlWidth;
                    #else
                        grlNormal.xy *= .5 * grlWidth;
                    #endif

                    grlNormal *= grl_projection;

                    #ifdef GREASED_LINE_SIZE_ATTENUATION
                        grlNormal.xy *= grlFinalPosition.w;
                        grlNormal.xy /= (vec4(grl_aspect_resolution_lineWidth.yz, 0., 1.) * grl_projection).xy;
                    #endif

                    grlFinalPosition.xy += grlNormal.xy * grlSide;
                    gl_Position = grlFinalPosition;

                    vPositionW = vec3(grlFinalPosition);
                #else
                    grlCounters = grl_counters;
                #endif
                `
        };
        if (cameraFacing) {
            obj["!gl_Position\\=viewProjection\\*worldPos;"] = "//"; // not needed for camera facing GRL
        }
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return obj;
    }
    if (shaderType === "fragment") {
        return {
            CUSTOM_FRAGMENT_DEFINITIONS: `
                    #ifdef PBR
                         #define grlFinalColor finalColor
                    #else
                         #define grlFinalColor color
                    #endif

                    varying float grlCounters;
                    varying float grlColorPointer;
                    uniform sampler2D grl_colors;
                `,
            CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: `
                    float grlColorMode = grl_colorMode_visibility_colorsWidth_useColors.x;
                    float grlVisibility = grl_colorMode_visibility_colorsWidth_useColors.y;
                    float grlColorsWidth = grl_colorMode_visibility_colorsWidth_useColors.z;
                    float grlUseColors = grl_colorMode_visibility_colorsWidth_useColors.w;

                    float grlUseDash = grl_dashOptions.x;
                    float grlDashArray = grl_dashOptions.y;
                    float grlDashOffset = grl_dashOptions.z;
                    float grlDashRatio = grl_dashOptions.w;

                    grlFinalColor.a *= step(grlCounters, grlVisibility);
                    if(grlFinalColor.a == 0.) discard;

                    if(grlUseDash == 1.){
                        grlFinalColor.a *= ceil(mod(grlCounters + grlDashOffset, grlDashArray) - (grlDashArray * grlDashRatio));
                        if (grlFinalColor.a == 0.) discard;
                    }

                    #ifdef GREASED_LINE_HAS_COLOR
                        if (grlColorMode == ${0 /* GreasedLineMeshColorMode.COLOR_MODE_SET */ }.) {
                            grlFinalColor.rgb = grl_singleColor;
                        } else if (grlColorMode == ${1 /* GreasedLineMeshColorMode.COLOR_MODE_ADD */ }.) {
                            grlFinalColor.rgb += grl_singleColor;
                        } else if (grlColorMode == ${2 /* GreasedLineMeshColorMode.COLOR_MODE_MULTIPLY */ }.) {
                            grlFinalColor.rgb *= grl_singleColor;
                        }
                    #else
                        if (grlUseColors == 1.) {
                            #ifdef GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE
                                vec4 grlColor = texture2D(grl_colors, vec2(grlCounters, 0.), 0.);
                            #else
                                vec2 lookup = vec2(fract(grlColorPointer / grl_textureSize.x), 1.0 - floor(grlColorPointer / grl_textureSize.x) / max(grl_textureSize.y - 1.0, 1.0));
                                vec4 grlColor = texture2D(grl_colors, lookup, 0.0);
                            #endif
                            if (grlColorMode == ${0 /* GreasedLineMeshColorMode.COLOR_MODE_SET */ }.) {
                                grlFinalColor = grlColor;
                            } else if (grlColorMode == ${1 /* GreasedLineMeshColorMode.COLOR_MODE_ADD */ }.) {
                                grlFinalColor += grlColor;
                            } else if (grlColorMode == ${2 /* GreasedLineMeshColorMode.COLOR_MODE_MULTIPLY */ }.) {
                                grlFinalColor *= grlColor;
                            }
                        }
                    #endif
                `
        };
    }
    return null;
} //# sourceMappingURL=greasedLinePluginMaterialShadersGLSL.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/GreasedLine/greasedLinePluginMaterialShadersWGSL.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Returns WGSL custom shader code
 * @param shaderType vertex or fragment
 * @param cameraFacing is in camera facing mode?
 * @returns WGSL custom shader code
 */ /** @internal */ __turbopack_context__.s([
    "GetCustomCode",
    ()=>GetCustomCode
]);
function GetCustomCode(shaderType, cameraFacing) {
    if (shaderType === "vertex") {
        const obj = {
            CUSTOM_VERTEX_DEFINITIONS: `
                attribute grl_widths: f32;
                attribute grl_colorPointers: f32;
                varying grlCounters: f32;
                varying grlColorPointer: f32;

                #ifdef GREASED_LINE_USE_OFFSETS
                    attribute grl_offsets: vec3f;   
                #endif

                #ifdef GREASED_LINE_CAMERA_FACING
                    attribute grl_previousAndSide : vec4f;
                    attribute grl_nextAndCounters : vec4f;

                    fn grlFix(i: vec4f, aspect: f32) -> vec2f {
                        var res = i.xy / i.w;
                        res.x *= aspect;
                        return res;
                    }
                #else
                    attribute grl_slopes: f32;
                    attribute grl_counters: f32;
                #endif


                `,
            CUSTOM_VERTEX_UPDATE_POSITION: `
                #ifdef GREASED_LINE_USE_OFFSETS
                    var grlPositionOffset: vec3f = input.grl_offsets;
                #else
                    var grlPositionOffset = vec3f(0.);
                #endif

                #ifdef GREASED_LINE_CAMERA_FACING
                    positionUpdated += grlPositionOffset;
                #else
                    positionUpdated = (positionUpdated + grlPositionOffset) + (input.grl_slopes * input.grl_widths);
                #endif
                `,
            CUSTOM_VERTEX_MAIN_END: `
                vertexOutputs.grlColorPointer = input.grl_colorPointers;

                #ifdef GREASED_LINE_CAMERA_FACING

                    let grlAspect: f32 = uniforms.grl_aspect_resolution_lineWidth.x;
                    let grlBaseWidth: f32 = uniforms.grl_aspect_resolution_lineWidth.w;

                    let grlPrevious: vec3f = input.grl_previousAndSide.xyz;
                    let grlSide: f32 = input.grl_previousAndSide.w;

                    let grlNext: vec3f = input.grl_nextAndCounters.xyz;
                    vertexOutputs.grlCounters = input.grl_nextAndCounters.w;

                    let grlWidth: f32 = grlBaseWidth * input.grl_widths;

                    let worldDir: vec3f = normalize(grlNext - grlPrevious);
                    let nearPosition: vec3f = positionUpdated + (worldDir * 0.01);
                    let grlMatrix: mat4x4f = uniforms.viewProjection * finalWorld;
                    let grlFinalPosition: vec4f = grlMatrix * vec4f(positionUpdated, 1.0); 
                    let screenNearPos: vec4f = grlMatrix * vec4(nearPosition, 1.0);
                    let grlLinePosition: vec2f = grlFix(grlFinalPosition, grlAspect);
                    let grlLineNearPosition: vec2f = grlFix(screenNearPos, grlAspect);
                    let grlDir: vec2f = normalize(grlLineNearPosition - grlLinePosition);

                    var grlNormal: vec4f = vec4f(-grlDir.y, grlDir.x, 0.0, 1.0);

                    let grlHalfWidth: f32 = 0.5 * grlWidth;
                    #if defined(GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM)
                        grlNormal.x *= -grlHalfWidth;
                        grlNormal.y *= -grlHalfWidth;
                    #else
                        grlNormal.x *= grlHalfWidth;
                        grlNormal.y *= grlHalfWidth;
                    #endif

                    grlNormal *= uniforms.grl_projection;

                    #if defined(GREASED_LINE_SIZE_ATTENUATION)
                        grlNormal.x *= grlFinalPosition.w;
                        grlNormal.y *= grlFinalPosition.w;

                        let pr = vec4f(uniforms.grl_aspect_resolution_lineWidth.yz, 0.0, 1.0) * uniforms.grl_projection;
                        grlNormal.x /= pr.x;
                        grlNormal.y /= pr.y;
                    #endif

                    vertexOutputs.position = vec4f(grlFinalPosition.xy + grlNormal.xy * grlSide, grlFinalPosition.z, grlFinalPosition.w);
                    vertexOutputs.vPositionW = vertexOutputs.position.xyz;
                
                #else
                    vertexOutputs.grlCounters = input.grl_counters;
                #endif
                `
        };
        if (cameraFacing) {
            obj["!vertexOutputs\\.position\\s=\\sscene\\.viewProjection\\s\\*\\sworldPos;"] = "//"; // not needed for camera facing GRL
        }
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return obj;
    }
    if (shaderType === "fragment") {
        return {
            CUSTOM_FRAGMENT_DEFINITIONS: `
                    #ifdef PBR
                         #define grlFinalColor finalColor
                    #else
                         #define grlFinalColor color
                    #endif

                    varying grlCounters: f32;
                    varying grlColorPointer: 32;

                    var grl_colors: texture_2d<f32>;
                    var grl_colorsSampler: sampler;
                `,
            CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: `
                    let grlColorMode: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.x;
                    let grlVisibility: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.y;
                    let grlColorsWidth: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.z;
                    let grlUseColors: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.w;

                    let grlUseDash: f32 = uniforms.grl_dashOptions.x;
                    let grlDashArray: f32 = uniforms.grl_dashOptions.y;
                    let grlDashOffset: f32 = uniforms.grl_dashOptions.z;
                    let grlDashRatio: f32 = uniforms.grl_dashOptions.w;

                    grlFinalColor.a *= step(fragmentInputs.grlCounters, grlVisibility);
                    if (grlFinalColor.a == 0.0) {
                        discard;
                    }

                    if (grlUseDash == 1.0) {
                        let dashPosition = (fragmentInputs.grlCounters + grlDashOffset) % grlDashArray;
                        grlFinalColor.a *= ceil(dashPosition - (grlDashArray * grlDashRatio));

                        if (grlFinalColor.a == 0.0) {
                            discard;
                        }
                    }

                    #ifdef GREASED_LINE_HAS_COLOR
                        if (grlColorMode == ${0 /* GreasedLineMeshColorMode.COLOR_MODE_SET */ }.) {
                            grlFinalColor = vec4f(uniforms.grl_singleColor, grlFinalColor.a);
                        } else if (grlColorMode == ${1 /* GreasedLineMeshColorMode.COLOR_MODE_ADD */ }.) {
                            grlFinalColor += vec4f(uniforms.grl_singleColor, grlFinalColor.a);
                        } else if (grlColorMode == ${2 /* GreasedLineMeshColorMode.COLOR_MODE_MULTIPLY */ }.) {
                            grlFinalColor *= vec4f(uniforms.grl_singleColor, grlFinalColor.a);
                        }
                    #else
                        if (grlUseColors == 1.) {
                            #ifdef GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE
                                let grlColor: vec4f = textureSample(grl_colors, grl_colorsSampler, vec2f(fragmentInputs.grlCounters, 0.));
                            #else
                                let lookup: vec2f = vec2(fract(fragmentInputs.grlColorPointer / uniforms.grl_textureSize.x), 1.0 - floor(fragmentInputs.grlColorPointer / uniforms.grl_textureSize.x) / max(uniforms.grl_textureSize.y - 1.0, 1.0));
                                let grlColor: vec4f = textureSample(grl_colors, grl_colorsSampler, lookup);
                            #endif
                            if (grlColorMode == ${0 /* GreasedLineMeshColorMode.COLOR_MODE_SET */ }.) {
                                grlFinalColor = grlColor;
                            } else if (grlColorMode == ${1 /* GreasedLineMeshColorMode.COLOR_MODE_ADD */ }.) {
                                grlFinalColor += grlColor;
                            } else if (grlColorMode == ${2 /* GreasedLineMeshColorMode.COLOR_MODE_MULTIPLY */ }.) {
                                grlFinalColor *= grlColor;
                            }
                        }
                    #endif


                `
        };
    }
    return null;
} //# sourceMappingURL=greasedLinePluginMaterialShadersWGSL.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/GreasedLine/greasedLinePluginMaterial.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GreasedLinePluginMaterial",
    ()=>GreasedLinePluginMaterial,
    "MaterialGreasedLineDefines",
    ()=>MaterialGreasedLineDefines
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$rawTexture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/rawTexture.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialPluginBase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialPluginBase.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialDefines$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialDefines.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$GreasedLine$2f$greasedLineMaterialDefaults$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/GreasedLine/greasedLineMaterialDefaults.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$greasedLineTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/greasedLineTools.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$GreasedLine$2f$greasedLinePluginMaterialShadersGLSL$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/GreasedLine/greasedLinePluginMaterialShadersGLSL.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$GreasedLine$2f$greasedLinePluginMaterialShadersWGSL$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/GreasedLine/greasedLinePluginMaterialShadersWGSL.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
class MaterialGreasedLineDefines extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialDefines$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialDefines"] {
    constructor(){
        super(...arguments);
        /**
         * The material has a color option specified
         */ // eslint-disable-next-line @typescript-eslint/naming-convention
        this.GREASED_LINE_HAS_COLOR = false;
        /**
         * The material's size attenuation optiom
         */ // eslint-disable-next-line @typescript-eslint/naming-convention
        this.GREASED_LINE_SIZE_ATTENUATION = false;
        /**
         * The type of color distribution is set to line this value equals to true.
         */ // eslint-disable-next-line @typescript-eslint/naming-convention
        this.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = false;
        /**
         * True if scene is in right handed coordinate system.
         */ // eslint-disable-next-line @typescript-eslint/naming-convention
        this.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = false;
        /**
         * True if the line is in camera facing mode
         */ // eslint-disable-next-line @typescript-eslint/naming-convention
        this.GREASED_LINE_CAMERA_FACING = true;
        /**
         * True if the line uses offsets
         */ // eslint-disable-next-line @typescript-eslint/naming-convention
        this.GREASED_LINE_USE_OFFSETS = false;
    }
}
class GreasedLinePluginMaterial extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialPluginBase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialPluginBase"] {
    /**
     * Gets a boolean indicating that the plugin is compatible with a given shader language
     * @param _shaderLanguage The shader language to use
     * @returns true if the plugin is compatible with the shader language. Return always true since both GLSL and WGSL are supported
     */ isCompatible(_shaderLanguage) {
        return true;
    }
    /**
     * Creates a new instance of the GreasedLinePluginMaterial
     * @param material Base material for the plugin
     * @param scene The scene
     * @param options Plugin options
     */ constructor(material, scene, options){
        options = options || {
            color: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$GreasedLine$2f$greasedLineMaterialDefaults$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GreasedLineMaterialDefaults"].DEFAULT_COLOR
        };
        const defines = new MaterialGreasedLineDefines();
        defines.GREASED_LINE_HAS_COLOR = !!options.color && !options.useColors;
        defines.GREASED_LINE_SIZE_ATTENUATION = options.sizeAttenuation ?? false;
        defines.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = options.colorDistributionType === 1 /* GreasedLineMeshColorDistributionType.COLOR_DISTRIBUTION_TYPE_LINE */ ;
        defines.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = (scene ?? material.getScene()).useRightHandedSystem;
        defines.GREASED_LINE_CAMERA_FACING = options.cameraFacing ?? true;
        super(material, GreasedLinePluginMaterial.GREASED_LINE_MATERIAL_NAME, 200, defines, true, true);
        /**
         * You can provide a colorsTexture to use instead of one generated from the 'colors' option
         */ this.colorsTexture = null;
        this._forceGLSL = false;
        this._forceGLSL = options?.forceGLSL || GreasedLinePluginMaterial.ForceGLSL;
        this._scene = scene ?? material.getScene();
        this._engine = this._scene.getEngine();
        this._cameraFacing = options.cameraFacing ?? true;
        this.visibility = options.visibility ?? 1;
        this.useDash = options.useDash ?? false;
        this.dashRatio = options.dashRatio ?? 0.5;
        this.dashOffset = options.dashOffset ?? 0;
        this.width = options.width ? options.width : options.sizeAttenuation ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$GreasedLine$2f$greasedLineMaterialDefaults$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GreasedLineMaterialDefaults"].DEFAULT_WIDTH_ATTENUATED : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$GreasedLine$2f$greasedLineMaterialDefaults$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GreasedLineMaterialDefaults"].DEFAULT_WIDTH;
        this._sizeAttenuation = options.sizeAttenuation ?? false;
        this.colorMode = options.colorMode ?? 0 /* GreasedLineMeshColorMode.COLOR_MODE_SET */ ;
        this._color = options.color ?? null;
        this.useColors = options.useColors ?? false;
        this._colorsDistributionType = options.colorDistributionType ?? 0 /* GreasedLineMeshColorDistributionType.COLOR_DISTRIBUTION_TYPE_SEGMENT */ ;
        this.colorsSampling = options.colorsSampling ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$rawTexture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RawTexture"].NEAREST_NEAREST;
        this._colors = options.colors ?? null;
        this.dashCount = options.dashCount ?? 1; // calculate the _dashArray value, call the setter
        this.resolution = options.resolution ?? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"](this._engine.getRenderWidth(), this._engine.getRenderHeight()); // calculate aspect call the setter
        if (options.colorsTexture) {
            this.colorsTexture = options.colorsTexture; // colorsTexture from options takes precedence
        } else {
            if (this._colors) {
                this.colorsTexture = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$greasedLineTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GreasedLineTools"].CreateColorsTexture(`${material.name}-colors-texture`, this._colors, this.colorsSampling, this._scene);
            } else {
                this._color = this._color ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$GreasedLine$2f$greasedLineMaterialDefaults$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GreasedLineMaterialDefaults"].DEFAULT_COLOR;
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$greasedLineTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GreasedLineTools"].PrepareEmptyColorsTexture(this._scene);
            }
        }
        this._engine.onDisposeObservable.add(()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$greasedLineTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GreasedLineTools"].DisposeEmptyColorsTexture();
        });
    }
    /**
     * Get the shader attributes
     * @param attributes array which will be filled with the attributes
     */ getAttributes(attributes) {
        attributes.push("grl_offsets");
        attributes.push("grl_widths");
        attributes.push("grl_colorPointers");
        attributes.push("grl_counters");
        if (this._cameraFacing) {
            attributes.push("grl_previousAndSide");
            attributes.push("grl_nextAndCounters");
        } else {
            attributes.push("grl_slopes");
        }
    }
    /**
     * Get the shader samplers
     * @param samplers
     */ getSamplers(samplers) {
        samplers.push("grl_colors");
    }
    /**
     * Get the shader textures
     * @param activeTextures array which will be filled with the textures
     */ getActiveTextures(activeTextures) {
        if (this.colorsTexture) {
            activeTextures.push(this.colorsTexture);
        }
    }
    /**
     * Get the shader uniforms
     * @param shaderLanguage The shader language to use
     * @returns uniforms
     */ getUniforms(shaderLanguage = 0 /* ShaderLanguage.GLSL */ ) {
        const ubo = [
            {
                name: "grl_singleColor",
                size: 3,
                type: "vec3"
            },
            {
                name: "grl_textureSize",
                size: 2,
                type: "vec2"
            },
            {
                name: "grl_dashOptions",
                size: 4,
                type: "vec4"
            },
            {
                name: "grl_colorMode_visibility_colorsWidth_useColors",
                size: 4,
                type: "vec4"
            }
        ];
        if (this._cameraFacing) {
            ubo.push({
                name: "grl_projection",
                size: 16,
                type: "mat4"
            }, {
                name: "grl_aspect_resolution_lineWidth",
                size: 4,
                type: "vec4"
            });
        }
        if (shaderLanguage === 1 /* ShaderLanguage.WGSL */ ) {
            ubo.push({
                name: "viewProjection",
                size: 16,
                type: "mat4"
            });
        }
        return {
            ubo,
            vertex: this._cameraFacing && this._isGLSL(shaderLanguage) ? `
                    uniform vec4 grl_aspect_resolution_lineWidth;
                    uniform mat4 grl_projection;
    ` : "",
            fragment: this._isGLSL(shaderLanguage) ? `
                    uniform vec4 grl_dashOptions;
                    uniform vec2 grl_textureSize;
                    uniform vec4 grl_colorMode_visibility_colorsWidth_useColors;
                    uniform vec3 grl_singleColor;
    ` : ""
        };
    }
    // only getter, it doesn't make sense to use this plugin on a mesh other than GreasedLineMesh
    // and it doesn't make sense to disable it on the mesh
    get isEnabled() {
        return true;
    }
    /**
     * Bind the uniform buffer
     * @param uniformBuffer
     */ bindForSubMesh(uniformBuffer) {
        if (this._cameraFacing) {
            uniformBuffer.updateMatrix("grl_projection", this._scene.getProjectionMatrix());
            if (!this._isGLSL(this._material.shaderLanguage)) {
                uniformBuffer.updateMatrix("viewProjection", this._scene.getTransformMatrix());
            }
            const resolutionLineWidth = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Vector4[0];
            resolutionLineWidth.x = this._aspect;
            resolutionLineWidth.y = this._resolution.x;
            resolutionLineWidth.z = this._resolution.y;
            resolutionLineWidth.w = this.width;
            uniformBuffer.updateVector4("grl_aspect_resolution_lineWidth", resolutionLineWidth);
        }
        const dashOptions = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Vector4[0];
        dashOptions.x = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$greasedLineTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GreasedLineTools"].BooleanToNumber(this.useDash);
        dashOptions.y = this._dashArray;
        dashOptions.z = this.dashOffset;
        dashOptions.w = this.dashRatio;
        uniformBuffer.updateVector4("grl_dashOptions", dashOptions);
        const colorModeVisibilityColorsWidthUseColors = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Vector4[1];
        colorModeVisibilityColorsWidthUseColors.x = this.colorMode;
        colorModeVisibilityColorsWidthUseColors.y = this.visibility;
        colorModeVisibilityColorsWidthUseColors.z = this.colorsTexture ? this.colorsTexture.getSize().width : 0;
        colorModeVisibilityColorsWidthUseColors.w = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$greasedLineTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GreasedLineTools"].BooleanToNumber(this.useColors);
        uniformBuffer.updateVector4("grl_colorMode_visibility_colorsWidth_useColors", colorModeVisibilityColorsWidthUseColors);
        if (this._color) {
            uniformBuffer.updateColor3("grl_singleColor", this._color);
        }
        const texture = this.colorsTexture ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$GreasedLine$2f$greasedLineMaterialDefaults$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GreasedLineMaterialDefaults"].EmptyColorsTexture;
        uniformBuffer.setTexture("grl_colors", texture);
        uniformBuffer.updateFloat2("grl_textureSize", texture?.getSize().width ?? 1, texture?.getSize().height ?? 1);
    }
    /**
     * Prepare the defines
     * @param defines
     * @param _scene
     * @param mesh
     */ prepareDefines(defines, _scene, mesh) {
        defines.GREASED_LINE_HAS_COLOR = !!this.color && !this.useColors;
        defines.GREASED_LINE_SIZE_ATTENUATION = this._sizeAttenuation;
        defines.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = this._colorsDistributionType === 1 /* GreasedLineMeshColorDistributionType.COLOR_DISTRIBUTION_TYPE_LINE */ ;
        defines.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = _scene.useRightHandedSystem;
        defines.GREASED_LINE_CAMERA_FACING = this._cameraFacing;
        defines.GREASED_LINE_USE_OFFSETS = !!mesh.offsets;
    }
    /**
     * Get the class name
     * @returns class name
     */ getClassName() {
        return GreasedLinePluginMaterial.GREASED_LINE_MATERIAL_NAME;
    }
    /**
     * Get shader code
     * @param shaderType vertex/fragment
     * @param shaderLanguage GLSL or WGSL
     * @returns shader code
     */ getCustomCode(shaderType, shaderLanguage = 0 /* ShaderLanguage.GLSL */ ) {
        if (this._isGLSL(shaderLanguage)) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$GreasedLine$2f$greasedLinePluginMaterialShadersGLSL$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GetCustomCode"])(shaderType, this._cameraFacing);
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$GreasedLine$2f$greasedLinePluginMaterialShadersWGSL$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GetCustomCode"])(shaderType, this._cameraFacing);
    }
    /**
     * Disposes the plugin material.
     */ dispose() {
        this.colorsTexture?.dispose();
        super.dispose();
    }
    /**
     * Returns the colors used to colorize the line
     */ get colors() {
        return this._colors;
    }
    /**
     * Sets the colors used to colorize the line
     */ set colors(value) {
        this.setColors(value);
    }
    /**
     * Creates or updates the colors texture
     * @param colors color table RGBA
     * @param lazy if lazy, the colors are not updated
     * @param forceNewTexture force creation of a new texture
     */ setColors(colors, lazy = false, forceNewTexture = false) {
        const origColorsCount = this._colors?.length ?? 0;
        this._colors = colors;
        if (colors === null || colors.length === 0) {
            this.colorsTexture?.dispose();
            return;
        }
        if (lazy && !forceNewTexture) {
            return;
        }
        if (this.colorsTexture && origColorsCount === colors.length && !forceNewTexture) {
            const colorArray = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$greasedLineTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GreasedLineTools"].Color3toRGBAUint8(colors);
            this.colorsTexture.update(colorArray);
        } else {
            this.colorsTexture?.dispose();
            this.colorsTexture = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$greasedLineTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GreasedLineTools"].CreateColorsTexture(`${this._material.name}-colors-texture`, colors, this.colorsSampling, this._scene);
        }
    }
    /**
     * Updates the material. Use when material created in lazy mode.
     */ updateLazy() {
        if (this._colors) {
            this.setColors(this._colors, false, true);
        }
    }
    /**
     * Gets the number of dashes in the line
     */ get dashCount() {
        return this._dashCount;
    }
    /**
     * Sets the number of dashes in the line
     * @param value dash
     */ set dashCount(value) {
        this._dashCount = value;
        this._dashArray = 1 / value;
    }
    /**
     * If set to true the line will be rendered always with the same width regardless how far it is located from the camera.
     * Not supported for non camera facing lines.
     */ get sizeAttenuation() {
        return this._sizeAttenuation;
    }
    /**
     * Turn on/off size attenuation of the width option and widths array.
     * Not supported for non camera facing lines.
     * @param value If set to true the line will be rendered always with the same width regardless how far it is located from the camera.
     */ set sizeAttenuation(value) {
        this._sizeAttenuation = value;
        this.markAllDefinesAsDirty();
    }
    /**
     * Gets the color of the line
     */ get color() {
        return this._color;
    }
    /**
     * Sets the color of the line
     * @param value Color3 or null to clear the color. You need to clear the color if you use colors and useColors = true
     */ set color(value) {
        this.setColor(value);
    }
    /**
     * Sets the color of the line. If set the whole line will be mixed with this color according to the colorMode option.
     * @param value color
     * @param doNotMarkDirty if true, the material will not be marked as dirty
     */ setColor(value, doNotMarkDirty = false) {
        if (this._color === null && value !== null || this._color !== null && value === null) {
            this._color = value;
            if (!doNotMarkDirty) {
                this.markAllDefinesAsDirty();
            }
        } else {
            this._color = value;
        }
    }
    /**
     * Gets the color distributiopn type
     */ get colorsDistributionType() {
        return this._colorsDistributionType;
    }
    /**
     * Sets the color distribution type
     * @see GreasedLineMeshColorDistributionType
     * @param value color distribution type
     */ set colorsDistributionType(value) {
        this._colorsDistributionType = value;
        this.markAllDefinesAsDirty();
    }
    /**
     * Gets the resolution
     */ get resolution() {
        return this._resolution;
    }
    /**
     * Sets the resolution
     * @param value resolution of the screen for GreasedLine
     */ set resolution(value) {
        this._aspect = value.x / value.y;
        this._resolution = value;
    }
    /**
     * Serializes this plugin material
     * @returns serializationObjec
     */ serialize() {
        const serializationObject = super.serialize();
        const greasedLineMaterialOptions = {
            colorDistributionType: this._colorsDistributionType,
            colorsSampling: this.colorsSampling,
            colorMode: this.colorMode,
            dashCount: this._dashCount,
            dashOffset: this.dashOffset,
            dashRatio: this.dashRatio,
            resolution: this._resolution,
            sizeAttenuation: this._sizeAttenuation,
            useColors: this.useColors,
            useDash: this.useDash,
            visibility: this.visibility,
            width: this.width
        };
        if (this._colors) {
            greasedLineMaterialOptions.colors = this._colors;
        }
        if (this._color) {
            greasedLineMaterialOptions.color = this._color;
        }
        serializationObject.greasedLineMaterialOptions = greasedLineMaterialOptions;
        return serializationObject;
    }
    /**
     * Parses a serialized objects
     * @param source serialized object
     * @param scene scene
     * @param rootUrl root url for textures
     */ parse(source, scene, rootUrl) {
        super.parse(source, scene, rootUrl);
        const greasedLineMaterialOptions = source.greasedLineMaterialOptions;
        this.colorsTexture?.dispose();
        if (greasedLineMaterialOptions.color) {
            this.setColor(greasedLineMaterialOptions.color, true);
        }
        if (greasedLineMaterialOptions.colorDistributionType) {
            this.colorsDistributionType = greasedLineMaterialOptions.colorDistributionType;
        }
        if (greasedLineMaterialOptions.colors) {
            this.colors = greasedLineMaterialOptions.colors;
        }
        if (greasedLineMaterialOptions.colorsSampling) {
            this.colorsSampling = greasedLineMaterialOptions.colorsSampling;
        }
        if (greasedLineMaterialOptions.colorMode) {
            this.colorMode = greasedLineMaterialOptions.colorMode;
        }
        if (greasedLineMaterialOptions.useColors) {
            this.useColors = greasedLineMaterialOptions.useColors;
        }
        if (greasedLineMaterialOptions.visibility) {
            this.visibility = greasedLineMaterialOptions.visibility;
        }
        if (greasedLineMaterialOptions.useDash) {
            this.useDash = greasedLineMaterialOptions.useDash;
        }
        if (greasedLineMaterialOptions.dashCount) {
            this.dashCount = greasedLineMaterialOptions.dashCount;
        }
        if (greasedLineMaterialOptions.dashRatio) {
            this.dashRatio = greasedLineMaterialOptions.dashRatio;
        }
        if (greasedLineMaterialOptions.dashOffset) {
            this.dashOffset = greasedLineMaterialOptions.dashOffset;
        }
        if (greasedLineMaterialOptions.width) {
            this.width = greasedLineMaterialOptions.width;
        }
        if (greasedLineMaterialOptions.sizeAttenuation) {
            this.sizeAttenuation = greasedLineMaterialOptions.sizeAttenuation;
        }
        if (greasedLineMaterialOptions.resolution) {
            this.resolution = greasedLineMaterialOptions.resolution;
        }
        if (this.colors) {
            this.colorsTexture = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$greasedLineTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GreasedLineTools"].CreateColorsTexture(`${this._material.name}-colors-texture`, this.colors, this.colorsSampling, scene);
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$greasedLineTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GreasedLineTools"].PrepareEmptyColorsTexture(scene);
        }
        this.markAllDefinesAsDirty();
    }
    /**
     * Makes a duplicate of the current configuration into another one.
     * @param plugin define the config where to copy the info
     */ copyTo(plugin) {
        const dest = plugin;
        dest.colorsTexture?.dispose();
        if (this._colors) {
            dest.colorsTexture = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$greasedLineTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GreasedLineTools"].CreateColorsTexture(`${dest._material.name}-colors-texture`, this._colors, dest.colorsSampling, this._scene);
        }
        dest.setColor(this.color, true);
        dest.colorsDistributionType = this.colorsDistributionType;
        dest.colorsSampling = this.colorsSampling;
        dest.colorMode = this.colorMode;
        dest.useColors = this.useColors;
        dest.visibility = this.visibility;
        dest.useDash = this.useDash;
        dest.dashCount = this.dashCount;
        dest.dashRatio = this.dashRatio;
        dest.dashOffset = this.dashOffset;
        dest.width = this.width;
        dest.sizeAttenuation = this.sizeAttenuation;
        dest.resolution = this.resolution;
        dest.markAllDefinesAsDirty();
    }
    _isGLSL(shaderLanguage) {
        return shaderLanguage === 0 /* ShaderLanguage.GLSL */  || this._forceGLSL;
    }
}
/**
 * Plugin name
 */ GreasedLinePluginMaterial.GREASED_LINE_MATERIAL_NAME = "GreasedLinePluginMaterial";
/**
 * Force all the greased lines to compile to glsl even on WebGPU engines.
 * False by default. This is mostly meant for backward compatibility.
 */ GreasedLinePluginMaterial.ForceGLSL = false;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])(`BABYLON.${GreasedLinePluginMaterial.GREASED_LINE_MATERIAL_NAME}`, GreasedLinePluginMaterial); //# sourceMappingURL=greasedLinePluginMaterial.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/GreasedLine/greasedLineSimpleMaterial.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GreasedLineSimpleMaterial",
    ()=>GreasedLineSimpleMaterial,
    "GreasedLineUseOffsetsSimpleMaterialDefine",
    ()=>GreasedLineUseOffsetsSimpleMaterialDefine
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$rawTexture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/rawTexture.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$shaderMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/shaderMaterial.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.color.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$textureSampler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/textureSampler.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$greasedLineTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/greasedLineTools.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$GreasedLine$2f$greasedLineMaterialDefaults$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/GreasedLine/greasedLineMaterialDefaults.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
const GreasedLineUseOffsetsSimpleMaterialDefine = "GREASED_LINE_USE_OFFSETS";
class GreasedLineSimpleMaterial extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$shaderMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderMaterial"] {
    /**
     * GreasedLineSimple material constructor
     * @param name material name
     * @param scene the scene
     * @param options material options
     */ constructor(name, scene, options){
        const engine = scene.getEngine();
        const isWGSL = engine.isWebGPU && !(options.forceGLSL || GreasedLineSimpleMaterial.ForceGLSL);
        const defines = [
            `COLOR_DISTRIBUTION_TYPE_LINE ${1 /* GreasedLineMeshColorDistributionType.COLOR_DISTRIBUTION_TYPE_LINE */ }.`,
            `COLOR_DISTRIBUTION_TYPE_SEGMENT ${0 /* GreasedLineMeshColorDistributionType.COLOR_DISTRIBUTION_TYPE_SEGMENT */ }.`,
            `COLOR_MODE_SET ${0 /* GreasedLineMeshColorMode.COLOR_MODE_SET */ }.`,
            `COLOR_MODE_ADD ${1 /* GreasedLineMeshColorMode.COLOR_MODE_ADD */ }.`,
            `COLOR_MODE_MULTIPLY ${2 /* GreasedLineMeshColorMode.COLOR_MODE_MULTIPLY */ }.`
        ];
        if (scene.useRightHandedSystem) {
            defines.push("GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM");
        }
        const attributes = [
            "position",
            "grl_widths",
            "grl_offsets",
            "grl_colorPointers"
        ];
        if (options.cameraFacing) {
            defines.push("GREASED_LINE_CAMERA_FACING");
            attributes.push("grl_previousAndSide", "grl_nextAndCounters");
        } else {
            attributes.push("grl_slopes");
            attributes.push("grl_counters");
        }
        const uniforms = [
            "grlColorsWidth",
            "grlUseColors",
            "grlWidth",
            "grlColor",
            "grl_colorModeAndColorDistributionType",
            "grlResolution",
            "grlAspect",
            "grlAizeAttenuation",
            "grlDashArray",
            "grlDashOffset",
            "grlDashRatio",
            "grlUseDash",
            "grlVisibility",
            "grlColors"
        ];
        if (!isWGSL) {
            uniforms.push("world", "viewProjection", "view", "projection");
        }
        super(name, scene, {
            vertex: "greasedLine",
            fragment: "greasedLine"
        }, {
            uniformBuffers: isWGSL ? [
                "Scene",
                "Mesh"
            ] : undefined,
            attributes,
            uniforms,
            samplers: isWGSL ? [] : [
                "grlColors"
            ],
            defines,
            extraInitializationsAsync: async ()=>{
                if (isWGSL) {
                    await Promise.all([
                        __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/greasedLine.vertex.js [app-ssr] (ecmascript, async loader)"),
                        __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/greasedLine.fragment.js [app-ssr] (ecmascript, async loader)")
                    ]);
                } else {
                    await Promise.all([
                        __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/greasedLine.vertex.js [app-ssr] (ecmascript, async loader)"),
                        __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/greasedLine.fragment.js [app-ssr] (ecmascript, async loader)")
                    ]);
                }
            },
            shaderLanguage: isWGSL ? 1 /* ShaderLanguage.WGSL */  : 0 /* ShaderLanguage.GLSL */ 
        });
        this._color = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"].White();
        this._colorsDistributionType = 0 /* GreasedLineMeshColorDistributionType.COLOR_DISTRIBUTION_TYPE_SEGMENT */ ;
        this._colorsTexture = null;
        options = options || {
            color: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$GreasedLine$2f$greasedLineMaterialDefaults$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GreasedLineMaterialDefaults"].DEFAULT_COLOR
        };
        this.visibility = options.visibility ?? 1;
        this.useDash = options.useDash ?? false;
        this.dashRatio = options.dashRatio ?? 0.5;
        this.dashOffset = options.dashOffset ?? 0;
        this.dashCount = options.dashCount ?? 1; // calculate the _dashArray value, call the setter
        this.width = options.width ? options.width : options.sizeAttenuation && options.cameraFacing ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$GreasedLine$2f$greasedLineMaterialDefaults$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GreasedLineMaterialDefaults"].DEFAULT_WIDTH_ATTENUATED : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$GreasedLine$2f$greasedLineMaterialDefaults$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GreasedLineMaterialDefaults"].DEFAULT_WIDTH;
        this.sizeAttenuation = options.sizeAttenuation ?? false;
        this.color = options.color ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"].White();
        this.useColors = options.useColors ?? false;
        this.colorsDistributionType = options.colorDistributionType ?? 0 /* GreasedLineMeshColorDistributionType.COLOR_DISTRIBUTION_TYPE_SEGMENT */ ;
        this.colorsSampling = options.colorsSampling ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$rawTexture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RawTexture"].NEAREST_NEAREST;
        this.colorMode = options.colorMode ?? 0 /* GreasedLineMeshColorMode.COLOR_MODE_SET */ ;
        this._colors = options.colors ?? null;
        this._cameraFacing = options.cameraFacing ?? true;
        this.resolution = options.resolution ?? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"](engine.getRenderWidth(), engine.getRenderHeight()); // calculate aspect call the setter
        if (options.colorsTexture) {
            this.colorsTexture = options.colorsTexture;
        } else {
            if (this._colors) {
                this.colorsTexture = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$greasedLineTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GreasedLineTools"].CreateColorsTexture(`${this.name}-colors-texture`, this._colors, this.colorsSampling, scene);
            } else {
                this._color = this._color ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$GreasedLine$2f$greasedLineMaterialDefaults$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GreasedLineMaterialDefaults"].DEFAULT_COLOR;
                this.colorsTexture = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$greasedLineTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GreasedLineTools"].PrepareEmptyColorsTexture(scene);
            }
        }
        if (isWGSL) {
            const sampler = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$textureSampler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TextureSampler"]();
            sampler.setParameters(); // use the default values
            sampler.samplingMode = this.colorsSampling;
            this.setTextureSampler("grlColorsSampler", sampler);
        }
        engine.onDisposeObservable.add(()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$greasedLineTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GreasedLineTools"].DisposeEmptyColorsTexture();
        });
    }
    /**
     * Disposes the plugin material.
     */ dispose() {
        this._colorsTexture?.dispose();
        super.dispose();
    }
    _setColorModeAndColorDistributionType() {
        this.setVector2("grl_colorModeAndColorDistributionType", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"](this._colorMode, this._colorsDistributionType));
    }
    /**
     * Updates the material. Use when material created in lazy mode.
     */ updateLazy() {
        if (this._colors) {
            this.setColors(this._colors, false, true);
        }
    }
    /**
     * Returns the colors used to colorize the line
     */ get colors() {
        return this._colors;
    }
    /**
     * Sets the colors used to colorize the line
     */ set colors(value) {
        this.setColors(value);
    }
    /**
     * Creates or updates the colors texture
     * @param colors color table RGBA
     * @param lazy if lazy, the colors are not updated
     * @param forceNewTexture force creation of a new texture
     */ setColors(colors, lazy = false, forceNewTexture = false) {
        const origColorsCount = this._colors?.length ?? 0;
        this._colors = colors;
        if (colors === null || colors.length === 0) {
            this._colorsTexture?.dispose();
            return;
        }
        if (lazy && !forceNewTexture) {
            return;
        }
        if (this._colorsTexture && origColorsCount === colors.length && !forceNewTexture) {
            const colorArray = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$greasedLineTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GreasedLineTools"].Color3toRGBAUint8(colors);
            this._colorsTexture.update(colorArray);
        } else {
            this._colorsTexture?.dispose();
            this.colorsTexture = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$greasedLineTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GreasedLineTools"].CreateColorsTexture(`${this.name}-colors-texture`, colors, this.colorsSampling, this.getScene());
        }
    }
    /**
     * Gets the colors texture
     */ get colorsTexture() {
        return this._colorsTexture ?? null;
    }
    /**
     * Sets the colorsTexture
     */ set colorsTexture(value) {
        this._colorsTexture = value;
        this.setFloat("grlColorsWidth", this._colorsTexture.getSize().width);
        this.setTexture("grlColors", this._colorsTexture);
    }
    /**
     * Line base width. At each point the line width is calculated by widths[pointIndex] * width
     */ get width() {
        return this._width;
    }
    /**
     * Line base width. At each point the line width is calculated by widths[pointIndex] * width
     */ set width(value) {
        this._width = value;
        this.setFloat("grlWidth", value);
    }
    /**
     * Whether to use the colors option to colorize the line
     */ get useColors() {
        return this._useColors;
    }
    set useColors(value) {
        this._useColors = value;
        this.setFloat("grlUseColors", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$greasedLineTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GreasedLineTools"].BooleanToNumber(value));
    }
    /**
     * The type of sampling of the colors texture. The values are the same when using with textures.
     */ get colorsSampling() {
        return this._colorsSampling;
    }
    /**
     * The type of sampling of the colors texture. The values are the same when using with textures.
     */ set colorsSampling(value) {
        this._colorsSampling = value;
    }
    /**
     * Normalized value of how much of the line will be visible
     * 0 - 0% of the line will be visible
     * 1 - 100% of the line will be visible
     */ get visibility() {
        return this._visibility;
    }
    set visibility(value) {
        this._visibility = value;
        this.setFloat("grlVisibility", value);
    }
    /**
     * Turns on/off dash mode
     */ get useDash() {
        return this._useDash;
    }
    /**
     * Turns on/off dash mode
     */ set useDash(value) {
        this._useDash = value;
        this.setFloat("grlUseDash", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$greasedLineTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GreasedLineTools"].BooleanToNumber(value));
    }
    /**
     * Gets the dash offset
     */ get dashOffset() {
        return this._dashOffset;
    }
    /**
     * Sets the dash offset
     */ set dashOffset(value) {
        this._dashOffset = value;
        this.setFloat("grlDashOffset", value);
    }
    /**
     * Length of the dash. 0 to 1. 0.5 means half empty, half drawn.
     */ get dashRatio() {
        return this._dashRatio;
    }
    /**
     * Length of the dash. 0 to 1. 0.5 means half empty, half drawn.
     */ set dashRatio(value) {
        this._dashRatio = value;
        this.setFloat("grlDashRatio", value);
    }
    /**
     * Gets the number of dashes in the line
     */ get dashCount() {
        return this._dashCount;
    }
    /**
     * Sets the number of dashes in the line
     * @param value dash
     */ set dashCount(value) {
        this._dashCount = value;
        this._dashArray = 1 / value;
        this.setFloat("grlDashArray", this._dashArray);
    }
    /**
     * False means 1 unit in width = 1 unit on scene, true means 1 unit in width is reduced on the screen to make better looking lines
     */ get sizeAttenuation() {
        return this._sizeAttenuation;
    }
    /**
     * Turn on/off attenuation of the width option and widths array.
     * @param value false means 1 unit in width = 1 unit on scene, true means 1 unit in width is reduced on the screen to make better looking lines
     */ set sizeAttenuation(value) {
        this._sizeAttenuation = value;
        this.setFloat("grlSizeAttenuation", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$greasedLineTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GreasedLineTools"].BooleanToNumber(value));
    }
    /**
     * Gets the color of the line
     */ get color() {
        return this._color;
    }
    /**
     * Sets the color of the line
     * @param value Color3
     */ set color(value) {
        this.setColor(value);
    }
    /**
     * Sets the color of the line. If set the whole line will be mixed with this color according to the colorMode option.
     * The simple material always needs a color to be set. If you set it to null it will set the color to the default color (GreasedLineSimpleMaterial.DEFAULT_COLOR).
     * @param value color
     */ setColor(value) {
        value = value ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$GreasedLine$2f$greasedLineMaterialDefaults$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GreasedLineMaterialDefaults"].DEFAULT_COLOR;
        this._color = value;
        this.setColor3("grlColor", value);
    }
    /**
     * Gets the color distributiopn type
     */ get colorsDistributionType() {
        return this._colorsDistributionType;
    }
    /**
     * Sets the color distribution type
     * @see GreasedLineMeshColorDistributionType
     * @param value color distribution type
     */ set colorsDistributionType(value) {
        this._colorsDistributionType = value;
        this._setColorModeAndColorDistributionType();
    }
    /**
     * Gets the mixing mode of the color and colors paramaters. Default value is GreasedLineMeshColorMode.SET.
     * MATERIAL_TYPE_SIMPLE mixes the color and colors of the greased line material.
     * @see GreasedLineMeshColorMode
     */ get colorMode() {
        return this._colorMode;
    }
    /**
     * Sets the mixing mode of the color and colors paramaters. Default value is GreasedLineMeshColorMode.SET.
     * MATERIAL_TYPE_SIMPLE mixes the color and colors of the greased line material.
     * @see GreasedLineMeshColorMode
     */ set colorMode(value) {
        this._colorMode = value;
        this._setColorModeAndColorDistributionType();
    }
    /**
     * Gets the resolution
     */ get resolution() {
        return this._resolution;
    }
    /**
     * Sets the resolution
     * @param value resolution of the screen for GreasedLine
     */ set resolution(value) {
        this._resolution = value;
        this.setVector2("grlResolution", value);
        this.setFloat("grlAspect", value.x / value.y);
    }
    /**
     * Serializes this plugin material
     * @returns serializationObjec
     */ serialize() {
        const serializationObject = super.serialize();
        const greasedLineMaterialOptions = {
            colorDistributionType: this._colorsDistributionType,
            colorsSampling: this._colorsSampling,
            colorMode: this._colorMode,
            color: this._color,
            dashCount: this._dashCount,
            dashOffset: this._dashOffset,
            dashRatio: this._dashRatio,
            resolution: this._resolution,
            sizeAttenuation: this._sizeAttenuation,
            useColors: this._useColors,
            useDash: this._useDash,
            visibility: this._visibility,
            width: this._width,
            cameraFacing: this._cameraFacing
        };
        if (this._colors) {
            greasedLineMaterialOptions.colors = this._colors;
        }
        serializationObject.greasedLineMaterialOptions = greasedLineMaterialOptions;
        return serializationObject;
    }
    /**
     * Parses a serialized objects
     * @param source serialized object
     * @param scene scene
     * @param _rootUrl root url for textures
     */ parse(source, scene, _rootUrl) {
        const greasedLineMaterialOptions = source.greasedLineMaterialOptions;
        this._colorsTexture?.dispose();
        if (greasedLineMaterialOptions.color) {
            this.color = greasedLineMaterialOptions.color;
        }
        if (greasedLineMaterialOptions.colorDistributionType) {
            this.colorsDistributionType = greasedLineMaterialOptions.colorDistributionType;
        }
        if (greasedLineMaterialOptions.colorsSampling) {
            this.colorsSampling = greasedLineMaterialOptions.colorsSampling;
        }
        if (greasedLineMaterialOptions.colorMode) {
            this.colorMode = greasedLineMaterialOptions.colorMode;
        }
        if (greasedLineMaterialOptions.useColors) {
            this.useColors = greasedLineMaterialOptions.useColors;
        }
        if (greasedLineMaterialOptions.visibility) {
            this.visibility = greasedLineMaterialOptions.visibility;
        }
        if (greasedLineMaterialOptions.useDash) {
            this.useDash = greasedLineMaterialOptions.useDash;
        }
        if (greasedLineMaterialOptions.dashCount) {
            this.dashCount = greasedLineMaterialOptions.dashCount;
        }
        if (greasedLineMaterialOptions.dashRatio) {
            this.dashRatio = greasedLineMaterialOptions.dashRatio;
        }
        if (greasedLineMaterialOptions.dashOffset) {
            this.dashOffset = greasedLineMaterialOptions.dashOffset;
        }
        if (greasedLineMaterialOptions.width) {
            this.width = greasedLineMaterialOptions.width;
        }
        if (greasedLineMaterialOptions.sizeAttenuation) {
            this.sizeAttenuation = greasedLineMaterialOptions.sizeAttenuation;
        }
        if (greasedLineMaterialOptions.resolution) {
            this.resolution = greasedLineMaterialOptions.resolution;
        }
        if (greasedLineMaterialOptions.colors) {
            this.colorsTexture = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$greasedLineTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GreasedLineTools"].CreateColorsTexture(`${this.name}-colors-texture`, greasedLineMaterialOptions.colors, this.colorsSampling, this.getScene());
        } else {
            this.colorsTexture = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$greasedLineTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GreasedLineTools"].PrepareEmptyColorsTexture(scene);
        }
        this._cameraFacing = greasedLineMaterialOptions.cameraFacing ?? true;
        this.setDefine("GREASED_LINE_CAMERA_FACING", this._cameraFacing);
    }
}
/**
 * Force to use GLSL in WebGPU
 */ GreasedLineSimpleMaterial.ForceGLSL = false; //# sourceMappingURL=greasedLineSimpleMaterial.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/GreasedLine/greasedLineMaterialInterfaces.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Material types for GreasedLine
 * {@link https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/param/greased_line#materialtype}
 */ __turbopack_context__.s([
    "GreasedLineMeshColorDistributionType",
    ()=>GreasedLineMeshColorDistributionType,
    "GreasedLineMeshColorMode",
    ()=>GreasedLineMeshColorMode,
    "GreasedLineMeshMaterialType",
    ()=>GreasedLineMeshMaterialType
]);
var GreasedLineMeshMaterialType;
(function(GreasedLineMeshMaterialType) {
    /**
     * StandardMaterial
     */ GreasedLineMeshMaterialType[GreasedLineMeshMaterialType["MATERIAL_TYPE_STANDARD"] = 0] = "MATERIAL_TYPE_STANDARD";
    /**
     * PBR Material
     */ GreasedLineMeshMaterialType[GreasedLineMeshMaterialType["MATERIAL_TYPE_PBR"] = 1] = "MATERIAL_TYPE_PBR";
    /**
     * Simple and fast shader material without texture, light, fog, instances, ... support.
     * Just raw colored lines.
     * Dashing and visibility is supported.
     */ GreasedLineMeshMaterialType[GreasedLineMeshMaterialType["MATERIAL_TYPE_SIMPLE"] = 2] = "MATERIAL_TYPE_SIMPLE";
})(GreasedLineMeshMaterialType || (GreasedLineMeshMaterialType = {}));
var GreasedLineMeshColorMode;
(function(GreasedLineMeshColorMode) {
    /**
     * Color blending mode SET
     */ GreasedLineMeshColorMode[GreasedLineMeshColorMode["COLOR_MODE_SET"] = 0] = "COLOR_MODE_SET";
    /**
     * Color blending mode ADD
     */ GreasedLineMeshColorMode[GreasedLineMeshColorMode["COLOR_MODE_ADD"] = 1] = "COLOR_MODE_ADD";
    /**
     * Color blending mode ADD
     */ GreasedLineMeshColorMode[GreasedLineMeshColorMode["COLOR_MODE_MULTIPLY"] = 2] = "COLOR_MODE_MULTIPLY";
})(GreasedLineMeshColorMode || (GreasedLineMeshColorMode = {}));
var GreasedLineMeshColorDistributionType;
(function(GreasedLineMeshColorDistributionType) {
    /**
     * Colors distributed between segments of the line
     */ GreasedLineMeshColorDistributionType[GreasedLineMeshColorDistributionType["COLOR_DISTRIBUTION_TYPE_SEGMENT"] = 0] = "COLOR_DISTRIBUTION_TYPE_SEGMENT";
    /**
     * Colors distributed along the line ingoring the segments
     */ GreasedLineMeshColorDistributionType[GreasedLineMeshColorDistributionType["COLOR_DISTRIBUTION_TYPE_LINE"] = 1] = "COLOR_DISTRIBUTION_TYPE_LINE";
})(GreasedLineMeshColorDistributionType || (GreasedLineMeshColorDistributionType = {})); //# sourceMappingURL=greasedLineMaterialInterfaces.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/meshDebugPluginMaterial.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MeshDebugMode",
    ()=>MeshDebugMode,
    "MeshDebugPluginMaterial",
    ()=>MeshDebugPluginMaterial
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-ssr] (ecmascript)");
/* eslint-disable @typescript-eslint/naming-convention */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialPluginBase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialPluginBase.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialDefines$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialDefines.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.color.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/decorators.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
const vertexDefinitions = `#if defined(DBG_ENABLED)
attribute float dbg_initialPass;
varying vec3 dbg_vBarycentric;
flat varying vec3 dbg_vVertexWorldPos;
flat varying float dbg_vPass;
#endif`;
const vertexDefinitionsWebGPU = `#if defined(DBG_ENABLED)
attribute dbg_initialPass: f32;
varying dbg_vBarycentric: vec3f;
varying dbg_vVertexWorldPos: vec3f;
varying dbg_vPass: f32;
#endif`;
const vertexMainEnd = `#if defined(DBG_ENABLED)
float dbg_vertexIndex = mod(float(gl_VertexID), 3.);
if (dbg_vertexIndex == 0.0) { 
    dbg_vBarycentric = vec3(1.,0.,0.); 
}
else if (dbg_vertexIndex == 1.0) { 
    dbg_vBarycentric = vec3(0.,1.,0.); 
}
else { 
    dbg_vBarycentric = vec3(0.,0.,1.); 
}

dbg_vVertexWorldPos = vPositionW;
dbg_vPass = dbg_initialPass;
#endif`;
const vertexMainEndWebGPU = `#if defined(DBG_ENABLED)
var dbg_vertexIndex = f32(input.vertexIndex) % 3.;
if (dbg_vertexIndex == 0.0) { 
    vertexOutputs.dbg_vBarycentric = vec3f(1.,0.,0.); 
}
else if (dbg_vertexIndex == 1.0) { 
    vertexOutputs.dbg_vBarycentric = vec3f(0.,1.,0.); 
}
else { 
    vertexOutputs.dbg_vBarycentric = vec3f(0.,0.,1.); 
}

vertexOutputs.dbg_vVertexWorldPos = vertexOutputs.vPositionW;
vertexOutputs.dbg_vPass = input.dbg_initialPass;
#endif`;
const fragmentUniforms = `#if defined(DBG_ENABLED)
uniform vec3 dbg_shadedDiffuseColor;
uniform vec4 dbg_shadedSpecularColorPower;
uniform vec3 dbg_thicknessRadiusScale;

#if DBG_MODE == 2 || DBG_MODE == 3
    uniform vec3 dbg_vertexColor;
#endif

#if DBG_MODE == 1
    uniform vec3 dbg_wireframeTrianglesColor;
#elif DBG_MODE == 3
    uniform vec3 dbg_wireframeVerticesColor;
#elif DBG_MODE == 4 || DBG_MODE == 5
    uniform vec3 dbg_uvPrimaryColor;
    uniform vec3 dbg_uvSecondaryColor;
#elif DBG_MODE == 7
    uniform vec3 dbg_materialColor;
#endif
#endif`;
const fragmentUniformsWebGPU = `#if defined(DBG_ENABLED)
uniform dbg_shadedDiffuseColor: vec3f;
uniform dbg_shadedSpecularColorPower: vec4f;
uniform dbg_thicknessRadiusScale: vec3f;

#if DBG_MODE == 2 || DBG_MODE == 3
    uniform dbg_vertexColor: vec3f;
#endif

#if DBG_MODE == 1
    uniform dbg_wireframeTrianglesColor: vec3f;
#elif DBG_MODE == 3
    uniform  dbg_wireframeVerticesColor: vec3f;
#elif DBG_MODE == 4 || DBG_MODE == 5
    uniform dbg_uvPrimaryColor: vec3f;
    uniform dbg_uvSecondaryColor: vec3f;
#elif DBG_MODE == 7
    uniform dbg_materialColor: vec3f;
#endif
#endif`;
const fragmentDefinitions = `#if defined(DBG_ENABLED)
varying vec3 dbg_vBarycentric;
flat varying vec3 dbg_vVertexWorldPos;
flat varying float dbg_vPass;

#if !defined(DBG_MULTIPLY)
    vec3 dbg_applyShading(vec3 color) {
        vec3 N = vNormalW.xyz;
        vec3 L = normalize(vEyePosition.xyz - vPositionW.xyz);
        vec3 H = normalize(L + L);
        float LdotN = clamp(dot(L,N), 0., 1.);
        float HdotN = clamp(dot(H,N), 0., 1.);
        float specTerm = pow(HdotN, dbg_shadedSpecularColorPower.w);
        color *= (LdotN / PI);
        color += dbg_shadedSpecularColorPower.rgb * (specTerm / PI);
        return color;
    }
#endif

#if DBG_MODE == 1 || DBG_MODE == 3
    float dbg_edgeFactor() {
        vec3 d = fwidth(dbg_vBarycentric);
        vec3 a3 = smoothstep(vec3(0.), d * dbg_thicknessRadiusScale.x, dbg_vBarycentric);
        return min(min(a3.x, a3.y), a3.z);
    }
#endif

#if DBG_MODE == 2 || DBG_MODE == 3
    float dbg_cornerFactor() {
        vec3 worldPos = vPositionW;
        float dist = length(worldPos - dbg_vVertexWorldPos);
        float camDist = length(worldPos - vEyePosition.xyz);
        float d = sqrt(camDist) * .001;
        return smoothstep((dbg_thicknessRadiusScale.y * d), ((dbg_thicknessRadiusScale.y * 1.01) * d), dist);
    }
#endif

#if (DBG_MODE == 4 && defined(UV1)) || (DBG_MODE == 5 && defined(UV2))
    float dbg_checkerboardFactor(vec2 uv) {
        vec2 f = fract(uv * dbg_thicknessRadiusScale.z);
        f -= .5;
        return (f.x * f.y) > 0. ? 1. : 0.;
    }
#endif
#endif`;
const fragmentDefinitionsWebGPU = `#if defined(DBG_ENABLED)
varying dbg_vBarycentric: vec3f;
varying dbg_vVertexWorldPos: vec3f;
varying dbg_vPass: f32;

#if !defined(DBG_MULTIPLY)
    fn dbg_applyShading(color: vec3f) -> vec3f {
        var N = fragmentInputs.vNormalW.xyz;
        var L = normalize(scene.vEyePosition.xyz - fragmentInputs.vPositionW.xyz);
        var H = normalize(L + L);
        var LdotN = clamp(dot(L,N), 0., 1.);
        var HdotN = clamp(dot(H,N), 0., 1.);
        var specTerm = pow(HdotN, uniforms.dbg_shadedSpecularColorPower.w);
        var result = color * (LdotN / PI);
        result += uniforms.dbg_shadedSpecularColorPower.rgb * (specTerm / PI);
        return result;
    }
#endif

#if DBG_MODE == 1 || DBG_MODE == 3
    fn dbg_edgeFactor() -> f32 {
        var d = fwidth(fragmentInputs.dbg_vBarycentric);
        var a3 = smoothstep(vec3f(0.), d * uniforms.dbg_thicknessRadiusScale.x, fragmentInputs.dbg_vBarycentric);
        return min(min(a3.x, a3.y), a3.z);
    }
#endif

#if DBG_MODE == 2 || DBG_MODE == 3
    fn dbg_cornerFactor() -> f32 {
        var worldPos = fragmentInputs.vPositionW;
        float dist = length(worldPos - fragmentInputs.dbg_vVertexWorldPos);
        float camDist = length(worldPos - scene.vEyePosition.xyz);
        float d = sqrt(camDist) * .001;
        return smoothstep((uniforms.dbg_thicknessRadiusScale.y * d), ((uniforms.dbg_thicknessRadiusScale.y * 1.01) * d), dist);
    }
#endif

#if (DBG_MODE == 4 && defined(UV1)) || (DBG_MODE == 5 && defined(UV2))
    fn dbg_checkerboardFactor(uv: vec2f) -> f32 {
        var f = fract(uv * uniforms.dbg_thicknessRadiusScale.z);
        f -= .5;
        return (f.x * f.y) > 0. ? 1. : 0.;
    }
#endif
#endif`;
const fragmentMainEnd = `#if defined(DBG_ENABLED)
vec3 dbg_color = vec3(1.);
#if DBG_MODE == 1
    dbg_color = mix(dbg_wireframeTrianglesColor, vec3(1.), dbg_edgeFactor());
#elif DBG_MODE == 2 || DBG_MODE == 3
    float dbg_cornerFactor = dbg_cornerFactor();
    if (dbg_vPass == 0. && dbg_cornerFactor == 1.) discard;
    dbg_color = mix(dbg_vertexColor, vec3(1.), dbg_cornerFactor);
    #if DBG_MODE == 3
        dbg_color *= mix(dbg_wireframeVerticesColor, vec3(1.), dbg_edgeFactor());
    #endif
#elif DBG_MODE == 4 && defined(MAINUV1)
    dbg_color = mix(dbg_uvPrimaryColor, dbg_uvSecondaryColor, dbg_checkerboardFactor(vMainUV1));
#elif DBG_MODE == 5 && defined(MAINUV2)
    dbg_color = mix(dbg_uvPrimaryColor, dbg_uvSecondaryColor, dbg_checkerboardFactor(vMainUV2));
#elif DBG_MODE == 6 && defined(VERTEXCOLOR)
    dbg_color = vColor.rgb;
#elif DBG_MODE == 7
    dbg_color = dbg_materialColor;
#endif

#if defined(DBG_MULTIPLY)
    gl_FragColor *= vec4(dbg_color, 1.);
#else
    #if DBG_MODE != 6
        gl_FragColor = vec4(dbg_applyShading(dbg_shadedDiffuseColor) * dbg_color, 1.);
    #else
        gl_FragColor = vec4(dbg_color, 1.);
    #endif
#endif
#endif`;
const fragmentMainEndWebGPU = `#if defined(DBG_ENABLED)
var dbg_color = vec3f(1.);
#if DBG_MODE == 1
    dbg_color = mix(uniforms.dbg_wireframeTrianglesColor, vec3f(1.), dbg_edgeFactor());
#elif DBG_MODE == 2 || DBG_MODE == 3
    var dbg_cornerFactor = dbg_cornerFactor();
    if (fragmentInputs.dbg_vPass == 0. && dbg_cornerFactor == 1.) discard;
    dbg_color = mix(uniforms.dbg_vertexColor, vec3(1.), dbg_cornerFactor);
    #if DBG_MODE == 3
        dbg_color *= mix(uniforms.dbg_wireframeVerticesColor, vec3f(1.), dbg_edgeFactor());
    #endif
#elif DBG_MODE == 4 && defined(MAINUV1)
    dbg_color = mix(uniforms.dbg_uvPrimaryColor, uniforms.dbg_uvSecondaryColor, dbg_checkerboardFactor(fragmentInputs.vMainUV1));
#elif DBG_MODE == 5 && defined(MAINUV2)
    dbg_color = mix(uniforms.dbg_uvPrimaryColor, uniforms.dbg_uvSecondaryColor, dbg_checkerboardFactor(fragmentInputs.vMainUV2));
#elif DBG_MODE == 6 && defined(VERTEXCOLOR)
    dbg_color = fragmentInputs.vColor.rgb;
#elif DBG_MODE == 7
    dbg_color = uniforms.dbg_materialColor;
#endif

#if defined(DBG_MULTIPLY)
    fragmentOutputs.color *= vec4f(dbg_color, 1.);
#else
    #if DBG_MODE != 6
        fragmentOutputs.color = vec4f(dbg_applyShading(dbg_shadedDiffuseColor) * dbg_color, 1.);
    #else
        fragmentOutputs.color = vec4f(dbg_color, 1.);
    #endif
#endif
#endif`;
const defaultMaterialColors = [
    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"](0.98, 0.26, 0.38),
    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"](0.47, 0.75, 0.3),
    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"](0, 0.26, 0.77),
    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"](0.97, 0.6, 0.76),
    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"](0.19, 0.63, 0.78),
    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"](0.98, 0.8, 0.6),
    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"](0.65, 0.43, 0.15),
    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"](0.15, 0.47, 0.22),
    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"](0.67, 0.71, 0.86),
    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"](0.09, 0.46, 0.56),
    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"](0.8, 0.98, 0.02),
    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"](0.39, 0.29, 0.13),
    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"](0.53, 0.63, 0.06),
    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"](0.95, 0.96, 0.41),
    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"](1, 0.72, 0.94),
    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"](0.63, 0.08, 0.31),
    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"](0.66, 0.96, 0.95),
    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"](0.22, 0.14, 0.19),
    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"](0.14, 0.65, 0.59),
    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"](0.93, 1, 0.68),
    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"](0.93, 0.14, 0.44),
    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"](0.47, 0.86, 0.67),
    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"](0.85, 0.07, 0.78),
    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"](0.53, 0.64, 0.98),
    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"](0.43, 0.37, 0.56),
    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"](0.71, 0.65, 0.25),
    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"](0.66, 0.19, 0.01),
    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"](0.94, 0.53, 0.12),
    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"](0.41, 0.44, 0.44),
    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"](0.24, 0.71, 0.96),
    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"](0.57, 0.28, 0.56),
    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"](0.44, 0.98, 0.42)
];
var MeshDebugMode;
(function(MeshDebugMode) {
    /**
     * Material without any mesh debug visualization
     */ MeshDebugMode[MeshDebugMode["NONE"] = 0] = "NONE";
    /**
     * A wireframe of the mesh
     * NOTE: For this mode to work correctly, convertToUnIndexedMesh() or MeshDebugPluginMaterial.PrepareMeshForTrianglesAndVerticesMode() must first be called on mesh.
     */ MeshDebugMode[MeshDebugMode["TRIANGLES"] = 1] = "TRIANGLES";
    /**
     * Points drawn over vertices of mesh
     * NOTE: For this mode to work correctly, MeshDebugPluginMaterial.PrepareMeshForTrianglesAndVerticesMode() must first be called on mesh.
     */ MeshDebugMode[MeshDebugMode["VERTICES"] = 2] = "VERTICES";
    /**
     * A wireframe of the mesh, with points drawn over vertices
     * NOTE: For this mode to work correctly, MeshDebugPluginMaterial.PrepareMeshForTrianglesAndVerticesMode() must first be called on mesh.
     */ MeshDebugMode[MeshDebugMode["TRIANGLES_VERTICES"] = 3] = "TRIANGLES_VERTICES";
    /**
     * A checkerboard grid of the mesh's UV set 0
     */ MeshDebugMode[MeshDebugMode["UV0"] = 4] = "UV0";
    /**
     * A checkerboard grid of the mesh's UV set 1
     */ MeshDebugMode[MeshDebugMode["UV1"] = 5] = "UV1";
    /**
     * The mesh's vertex colors displayed as the primary texture
     */ MeshDebugMode[MeshDebugMode["VERTEXCOLORS"] = 6] = "VERTEXCOLORS";
    /**
     * An arbitrary, distinguishable color to identify the material
     */ MeshDebugMode[MeshDebugMode["MATERIALIDS"] = 7] = "MATERIALIDS";
})(MeshDebugMode || (MeshDebugMode = {}));
/** @internal */ class MeshDebugDefines extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialDefines$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialDefines"] {
    constructor(){
        super(...arguments);
        /**
         * Current mesh debug visualization.
         * Defaults to NONE.
         */ this.DBG_MODE = 0 /* MeshDebugMode.NONE */ ;
        /**
         * Whether the mesh debug visualization multiplies with colors underneath.
         * Defaults to true.
         */ this.DBG_MULTIPLY = true;
        /**
         * Whether the mesh debug plugin is enabled in the material.
         * Defaults to true.
         */ this.DBG_ENABLED = true;
    }
}
class MeshDebugPluginMaterial extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialPluginBase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MaterialPluginBase"] {
    /** @internal */ _markAllDefinesAsDirty() {
        this._enable(this._isEnabled);
        this.markAllDefinesAsDirty();
    }
    /**
     * Gets a boolean indicating that the plugin is compatible with a given shader language.
     * @param shaderLanguage The shader language to use.
     * @returns true if the plugin is compatible with the shader language
     */ isCompatible(shaderLanguage) {
        switch(shaderLanguage){
            case 0 /* ShaderLanguage.GLSL */ :
            case 1 /* ShaderLanguage.WGSL */ :
                return true;
            default:
                return false;
        }
    }
    /**
     * Creates a new MeshDebugPluginMaterial
     * @param material Material to attach the mesh debug plugin to
     * @param options Options for the mesh debug plugin
     */ constructor(material, options = {}){
        const defines = new MeshDebugDefines();
        defines.DBG_MODE = options.mode ?? defines.DBG_MODE;
        defines.DBG_MULTIPLY = options.multiply ?? defines.DBG_MULTIPLY;
        super(material, "MeshDebug", 200, defines, true, true);
        this._mode = defines.DBG_MODE;
        this._multiply = defines.DBG_MULTIPLY;
        this.shadedDiffuseColor = options.shadedDiffuseColor ?? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"](1, 1, 1);
        this.shadedSpecularColor = options.shadedSpecularColor ?? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"](0.8, 0.8, 0.8);
        this.shadedSpecularPower = options.shadedSpecularPower ?? 10;
        this.wireframeThickness = options.wireframeThickness ?? 0.7;
        this.wireframeTrianglesColor = options.wireframeTrianglesColor ?? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"](0, 0, 0);
        this.wireframeVerticesColor = options.wireframeVerticesColor ?? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"](0.8, 0.8, 0.8);
        this.vertexColor = options.vertexColor ?? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"](0, 0, 0);
        this.vertexRadius = options.vertexRadius ?? 1.2;
        this.uvScale = options.uvScale ?? 20;
        this.uvPrimaryColor = options.uvPrimaryColor ?? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"](1, 1, 1);
        this.uvSecondaryColor = options.uvSecondaryColor ?? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color3"](0.5, 0.5, 0.5);
        this._materialColor = MeshDebugPluginMaterial.MaterialColors[MeshDebugPluginMaterial._PluginCount++ % MeshDebugPluginMaterial.MaterialColors.length];
        this.isEnabled = true;
    }
    /**
     * Get the class name
     * @returns Class name
     */ getClassName() {
        return "MeshDebugPluginMaterial";
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
        if (!this._material.getScene().getEngine().isWebGPU && this._material.getScene().getEngine().version == 1) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Error("MeshDebugPluginMaterial is not supported on WebGL 1.0.");
            this._isEnabled = false;
            return;
        }
        this._isEnabled = value;
        this._markAllDefinesAsDirty();
    }
    /**
     * Prepare the defines
     * @param defines Mesh debug defines
     * @param scene Scene
     * @param mesh Mesh associated with material
     */ prepareDefines(defines, scene, mesh) {
        if ((this._mode == 2 /* MeshDebugMode.VERTICES */  || this._mode == 1 /* MeshDebugMode.TRIANGLES */  || this._mode == 3 /* MeshDebugMode.TRIANGLES_VERTICES */ ) && !mesh.isVerticesDataPresent("dbg_initialPass")) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn("For best results with TRIANGLES, TRIANGLES_VERTICES, or VERTICES modes, please use MeshDebugPluginMaterial.PrepareMeshForTrianglesAndVerticesMode() on mesh.", 1);
        }
        defines.DBG_MODE = this._mode;
        defines.DBG_MULTIPLY = this._multiply;
        defines.DBG_ENABLED = this._isEnabled;
    }
    /**
     * Get the shader attributes
     * @param attributes Array of attributes
     */ getAttributes(attributes) {
        attributes.push("dbg_initialPass");
    }
    /**
     * Get the shader uniforms
     * @param shaderLanguage The shader language to use.
     * @returns Uniforms
     */ getUniforms(shaderLanguage = 0 /* ShaderLanguage.GLSL */ ) {
        return {
            ubo: [
                {
                    name: "dbg_shadedDiffuseColor",
                    size: 3,
                    type: "vec3"
                },
                {
                    name: "dbg_shadedSpecularColorPower",
                    size: 4,
                    type: "vec4"
                },
                {
                    name: "dbg_thicknessRadiusScale",
                    size: 3,
                    type: "vec3"
                },
                {
                    name: "dbg_wireframeTrianglesColor",
                    size: 3,
                    type: "vec3"
                },
                {
                    name: "dbg_wireframeVerticesColor",
                    size: 3,
                    type: "vec3"
                },
                {
                    name: "dbg_vertexColor",
                    size: 3,
                    type: "vec3"
                },
                {
                    name: "dbg_uvPrimaryColor",
                    size: 3,
                    type: "vec3"
                },
                {
                    name: "dbg_uvSecondaryColor",
                    size: 3,
                    type: "vec3"
                },
                {
                    name: "dbg_materialColor",
                    size: 3,
                    type: "vec3"
                }
            ],
            fragment: shaderLanguage === 0 /* ShaderLanguage.GLSL */  ? fragmentUniforms : fragmentUniformsWebGPU
        };
    }
    /**
     * Bind the uniform buffer
     * @param uniformBuffer Uniform buffer
     */ bindForSubMesh(uniformBuffer) {
        if (!this._isEnabled) {
            return;
        }
        uniformBuffer.updateFloat3("dbg_shadedDiffuseColor", this.shadedDiffuseColor.r, this.shadedDiffuseColor.g, this.shadedDiffuseColor.b);
        uniformBuffer.updateFloat4("dbg_shadedSpecularColorPower", this.shadedSpecularColor.r, this.shadedSpecularColor.g, this.shadedSpecularColor.b, this.shadedSpecularPower);
        uniformBuffer.updateFloat3("dbg_thicknessRadiusScale", this.wireframeThickness, this.vertexRadius, this.uvScale);
        uniformBuffer.updateColor3("dbg_wireframeTrianglesColor", this.wireframeTrianglesColor);
        uniformBuffer.updateColor3("dbg_wireframeVerticesColor", this.wireframeVerticesColor);
        uniformBuffer.updateColor3("dbg_vertexColor", this.vertexColor);
        uniformBuffer.updateColor3("dbg_uvPrimaryColor", this.uvPrimaryColor);
        uniformBuffer.updateColor3("dbg_uvSecondaryColor", this.uvSecondaryColor);
        uniformBuffer.updateColor3("dbg_materialColor", this._materialColor);
    }
    /**
     * Get shader code
     * @param shaderType "vertex" or "fragment"
     * @param shaderLanguage The shader language to use.
     * @returns Shader code
     */ getCustomCode(shaderType, shaderLanguage = 0 /* ShaderLanguage.GLSL */ ) {
        if (shaderLanguage === 1 /* ShaderLanguage.WGSL */ ) {
            return shaderType === "vertex" ? {
                CUSTOM_VERTEX_DEFINITIONS: vertexDefinitionsWebGPU,
                CUSTOM_VERTEX_MAIN_END: vertexMainEndWebGPU
            } : {
                CUSTOM_FRAGMENT_DEFINITIONS: fragmentDefinitionsWebGPU,
                CUSTOM_FRAGMENT_MAIN_END: fragmentMainEndWebGPU
            };
        }
        return shaderType === "vertex" ? {
            CUSTOM_VERTEX_DEFINITIONS: vertexDefinitions,
            CUSTOM_VERTEX_MAIN_END: vertexMainEnd
        } : {
            CUSTOM_FRAGMENT_DEFINITIONS: fragmentDefinitions,
            CUSTOM_FRAGMENT_MAIN_END: fragmentMainEnd
        };
    }
    /**
     * Resets static variables of the plugin to their original state
     */ static Reset() {
        this._PluginCount = 0;
        this.MaterialColors = defaultMaterialColors;
    }
    /**
     * Renders triangles in a mesh 3 times by tripling the indices in the index buffer.
     * Used to prepare a mesh to be rendered in `TRIANGLES`, `VERTICES`, or `TRIANGLES_VERTICES` modes.
     * NOTE: This is a destructive operation. The mesh's index buffer and vertex buffers are modified, and a new vertex buffer is allocated.
     * If you'd like the ability to revert these changes, toggle the optional `returnRollback` flag.
     * @param mesh the mesh to target
     * @param returnRollback whether or not to return a function that reverts mesh to its initial state. Default: false.
     * @returns a rollback function if `returnRollback` is true, otherwise an empty function.
     */ static PrepareMeshForTrianglesAndVerticesMode(mesh, returnRollback = false) {
        let rollback = ()=>{};
        if (mesh.getTotalIndices() == 0) {
            return rollback;
        }
        if (returnRollback) {
            const kinds = mesh.getVerticesDataKinds();
            const indices = mesh.getIndices();
            const data = {};
            for (const kind of kinds){
                data[kind] = mesh.getVerticesData(kind);
            }
            rollback = function() {
                mesh.setIndices(indices);
                for (const kind of kinds){
                    const stride = mesh.getVertexBuffer(kind).getStrideSize();
                    mesh.setVerticesData(kind, data[kind], undefined, stride);
                }
                mesh.removeVerticesData("dbg_initialPass");
            };
        }
        let indices = Array.from(mesh.getIndices());
        const newIndices1 = [];
        for(let i = 0; i < indices.length; i += 3){
            newIndices1.push(indices[i + 1], indices[i + 2], indices[i + 0]);
        }
        mesh.setIndices(indices.concat(newIndices1));
        mesh.convertToUnIndexedMesh();
        mesh.isUnIndexed = false;
        indices = Array.from(mesh.getIndices());
        const newIndices2 = [];
        for(let i = indices.length / 2; i < indices.length; i += 3){
            newIndices2.push(indices[i + 1], indices[i + 2], indices[i + 0]);
        }
        mesh.setIndices(indices.concat(newIndices2));
        const num = mesh.getTotalVertices();
        const mid = num / 2;
        const pass = new Array(num).fill(1, 0, mid).fill(0, mid, num);
        mesh.setVerticesData("dbg_initialPass", pass, false, 1);
        return rollback;
    }
}
/**
 * Total number of instances of the plugin.
 * Starts at 0.
 */ MeshDebugPluginMaterial._PluginCount = 0;
/**
 * Color palette used for MATERIALIDS mode.
 * Defaults to `defaultMaterialColors`
 */ MeshDebugPluginMaterial.MaterialColors = defaultMaterialColors;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeAsColor3"])()
], MeshDebugPluginMaterial.prototype, "_materialColor", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], MeshDebugPluginMaterial.prototype, "_isEnabled", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllDefinesAsDirty")
], MeshDebugPluginMaterial.prototype, "mode", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])(),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["expandToProperty"])("_markAllDefinesAsDirty")
], MeshDebugPluginMaterial.prototype, "multiply", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeAsColor3"])()
], MeshDebugPluginMaterial.prototype, "shadedDiffuseColor", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeAsColor3"])()
], MeshDebugPluginMaterial.prototype, "shadedSpecularColor", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], MeshDebugPluginMaterial.prototype, "shadedSpecularPower", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], MeshDebugPluginMaterial.prototype, "wireframeThickness", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeAsColor3"])()
], MeshDebugPluginMaterial.prototype, "wireframeTrianglesColor", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeAsColor3"])()
], MeshDebugPluginMaterial.prototype, "wireframeVerticesColor", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeAsColor3"])()
], MeshDebugPluginMaterial.prototype, "vertexColor", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], MeshDebugPluginMaterial.prototype, "vertexRadius", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serialize"])()
], MeshDebugPluginMaterial.prototype, "uvScale", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeAsColor3"])()
], MeshDebugPluginMaterial.prototype, "uvPrimaryColor", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeAsColor3"])()
], MeshDebugPluginMaterial.prototype, "uvSecondaryColor", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.MeshDebugPluginMaterial", MeshDebugPluginMaterial); //# sourceMappingURL=meshDebugPluginMaterial.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/standardMaterial.decalMap.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$material$2e$decalMapConfiguration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/material.decalMapConfiguration.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$standardMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/standardMaterial.js [app-ssr] (ecmascript)");
;
;
Object.defineProperty(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$standardMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StandardMaterial"].prototype, "decalMap", {
    get: function() {
        if (!this._decalMap) {
            this._decalMap = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$material$2e$decalMapConfiguration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DecalMapConfiguration"](this);
        }
        return this._decalMap;
    },
    enumerable: true,
    configurable: true
}); //# sourceMappingURL=standardMaterial.decalMap.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/material.decalMap.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$standardMaterial$2e$decalMap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/standardMaterial.decalMap.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$pbrMaterial$2e$decalMap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/PBR/pbrMaterial.decalMap.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$abstractMesh$2e$decalMap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/abstractMesh.decalMap.js [app-ssr] (ecmascript)"); //# sourceMappingURL=material.decalMap.js.map
;
;
;
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/no-restricted-imports */ __turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Background$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Background/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$colorCurves$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/colorCurves.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$iEffectFallbacks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/iEffectFallbacks.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$effectFallbacks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/effectFallbacks.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$effect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/effect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$fresnelParameters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/fresnelParameters.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$imageProcessing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/imageProcessing.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$imageProcessingConfiguration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/imageProcessingConfiguration.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$material$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/material.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialDefines$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialDefines.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$clipPlaneMaterialHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/clipPlaneMaterialHelper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialHelper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$multiMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/multiMaterial.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Occlusion$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Occlusion/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$PBR$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/PBR/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$pushMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/pushMaterial.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$shaderLanguage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/shaderLanguage.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$shaderMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/shaderMaterial.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$standardMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/standardMaterial.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$uniformBuffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/uniformBuffer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialFlags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialFlags.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$effectRenderer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/effectRenderer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$shadowDepthWrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/shadowDepthWrapper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$drawWrapper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/drawWrapper.functions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$drawWrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/drawWrapper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialPluginBase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialPluginBase.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialPluginManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialPluginManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialPluginEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialPluginEvent.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$material$2e$detailMapConfiguration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/material.detailMapConfiguration.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$material$2e$decalMapConfiguration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/material.decalMapConfiguration.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialPluginFactoryExport$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialPluginFactoryExport.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$GreasedLine$2f$greasedLinePluginMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/GreasedLine/greasedLinePluginMaterial.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$GreasedLine$2f$greasedLineSimpleMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/GreasedLine/greasedLineSimpleMaterial.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$GreasedLine$2f$greasedLineMaterialInterfaces$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/GreasedLine/greasedLineMaterialInterfaces.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$GreasedLine$2f$greasedLineMaterialDefaults$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/GreasedLine/greasedLineMaterialDefaults.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$meshDebugPluginMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/meshDebugPluginMaterial.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$GaussianSplatting$2f$gaussianSplattingMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/GaussianSplatting/gaussianSplattingMaterial.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialHelper.functions.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$geometryrendering$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialHelper.geometryrendering.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialStencilState$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialStencilState.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$uv$2e$defines$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/uv.defines.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$floatingOriginMatrixOverrides$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/floatingOriginMatrixOverrides.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$material$2e$decalMap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/material.decalMap.js [app-ssr] (ecmascript)");
// async-loaded shaders
// StandardMaterial
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$default$2e$fragment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/default.fragment.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$default$2e$vertex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/default.vertex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$default$2e$fragment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/default.fragment.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$default$2e$vertex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/default.vertex.js [app-ssr] (ecmascript)");
// GreasedLineSimplMaterial
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$greasedLine$2e$fragment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/greasedLine.fragment.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$greasedLine$2e$vertex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/greasedLine.vertex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$greasedLine$2e$fragment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/greasedLine.fragment.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$greasedLine$2e$vertex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/greasedLine.vertex.js [app-ssr] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/uniformBufferEffectCommonAccessor.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** @internal */ __turbopack_context__.s([
    "UniformBufferEffectCommonAccessor",
    ()=>UniformBufferEffectCommonAccessor
]);
class UniformBufferEffectCommonAccessor {
    _isUbo(uboOrEffect) {
        return uboOrEffect.addUniform !== undefined;
    }
    constructor(uboOrEffect){
        if (this._isUbo(uboOrEffect)) {
            this.setMatrix3x3 = uboOrEffect.updateMatrix3x3.bind(uboOrEffect);
            this.setMatrix2x2 = uboOrEffect.updateMatrix2x2.bind(uboOrEffect);
            this.setFloat = uboOrEffect.updateFloat.bind(uboOrEffect);
            this.setFloat2 = uboOrEffect.updateFloat2.bind(uboOrEffect);
            this.setFloat3 = uboOrEffect.updateFloat3.bind(uboOrEffect);
            this.setFloat4 = uboOrEffect.updateFloat4.bind(uboOrEffect);
            this.setFloatArray = uboOrEffect.updateFloatArray.bind(uboOrEffect);
            this.setArray = uboOrEffect.updateArray.bind(uboOrEffect);
            this.setIntArray = uboOrEffect.updateIntArray.bind(uboOrEffect);
            this.setMatrix = uboOrEffect.updateMatrix.bind(uboOrEffect);
            this.setMatrices = uboOrEffect.updateMatrices.bind(uboOrEffect);
            this.setVector3 = uboOrEffect.updateVector3.bind(uboOrEffect);
            this.setVector4 = uboOrEffect.updateVector4.bind(uboOrEffect);
            this.setColor3 = uboOrEffect.updateColor3.bind(uboOrEffect);
            this.setColor4 = uboOrEffect.updateColor4.bind(uboOrEffect);
            this.setDirectColor4 = uboOrEffect.updateDirectColor4.bind(uboOrEffect);
            this.setInt = uboOrEffect.updateInt.bind(uboOrEffect);
            this.setInt2 = uboOrEffect.updateInt2.bind(uboOrEffect);
            this.setInt3 = uboOrEffect.updateInt3.bind(uboOrEffect);
            this.setInt4 = uboOrEffect.updateInt4.bind(uboOrEffect);
        } else {
            this.setMatrix3x3 = uboOrEffect.setMatrix3x3.bind(uboOrEffect);
            this.setMatrix2x2 = uboOrEffect.setMatrix2x2.bind(uboOrEffect);
            this.setFloat = uboOrEffect.setFloat.bind(uboOrEffect);
            this.setFloat2 = uboOrEffect.setFloat2.bind(uboOrEffect);
            this.setFloat3 = uboOrEffect.setFloat3.bind(uboOrEffect);
            this.setFloat4 = uboOrEffect.setFloat4.bind(uboOrEffect);
            this.setFloatArray = uboOrEffect.setFloatArray.bind(uboOrEffect);
            this.setArray = uboOrEffect.setArray.bind(uboOrEffect);
            this.setIntArray = uboOrEffect.setIntArray.bind(uboOrEffect);
            this.setMatrix = uboOrEffect.setMatrix.bind(uboOrEffect);
            this.setMatrices = uboOrEffect.setMatrices.bind(uboOrEffect);
            this.setVector3 = uboOrEffect.setVector3.bind(uboOrEffect);
            this.setVector4 = uboOrEffect.setVector4.bind(uboOrEffect);
            this.setColor3 = uboOrEffect.setColor3.bind(uboOrEffect);
            this.setColor4 = uboOrEffect.setColor4.bind(uboOrEffect);
            this.setDirectColor4 = uboOrEffect.setDirectColor4.bind(uboOrEffect);
            this.setInt = uboOrEffect.setInt.bind(uboOrEffect);
            this.setInt2 = uboOrEffect.setInt2.bind(uboOrEffect);
            this.setInt3 = uboOrEffect.setInt3.bind(uboOrEffect);
            this.setInt4 = uboOrEffect.setInt4.bind(uboOrEffect);
        }
    }
} //# sourceMappingURL=uniformBufferEffectCommonAccessor.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialHelper.functions.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BindBonesParameters",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BindBonesParameters"],
    "BindFogParameters",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BindFogParameters"],
    "BindIBLParameters",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BindIBLParameters"],
    "BindIBLSamplers",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BindIBLSamplers"],
    "BindLight",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BindLight"],
    "BindLightProperties",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BindLightProperties"],
    "BindLights",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BindLights"],
    "BindLogDepth",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$pure$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BindLogDepth"],
    "BindMorphTargetParameters",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BindMorphTargetParameters"],
    "BindSceneUniformBuffer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BindSceneUniformBuffer"],
    "BindTextureMatrix",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BindTextureMatrix"],
    "GetFogState",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["GetFogState"],
    "HandleFallbacksForShadows",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HandleFallbacksForShadows"],
    "PrepareAttributesForBakedVertexAnimation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareAttributesForBakedVertexAnimation"],
    "PrepareAttributesForBones",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareAttributesForBones"],
    "PrepareAttributesForInstances",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareAttributesForInstances"],
    "PrepareAttributesForMorphTargets",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareAttributesForMorphTargets"],
    "PrepareAttributesForMorphTargetsInfluencers",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareAttributesForMorphTargetsInfluencers"],
    "PrepareDefinesAndAttributesForMorphTargets",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareDefinesAndAttributesForMorphTargets"],
    "PrepareDefinesForAttributes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareDefinesForAttributes"],
    "PrepareDefinesForBakedVertexAnimation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareDefinesForBakedVertexAnimation"],
    "PrepareDefinesForBones",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareDefinesForBones"],
    "PrepareDefinesForCamera",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareDefinesForCamera"],
    "PrepareDefinesForFrameBoundValues",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareDefinesForFrameBoundValues"],
    "PrepareDefinesForIBL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareDefinesForIBL"],
    "PrepareDefinesForLight",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareDefinesForLight"],
    "PrepareDefinesForLights",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareDefinesForLights"],
    "PrepareDefinesForMergedUV",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareDefinesForMergedUV"],
    "PrepareDefinesForMisc",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareDefinesForMisc"],
    "PrepareDefinesForMorphTargets",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareDefinesForMorphTargets"],
    "PrepareDefinesForMultiview",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareDefinesForMultiview"],
    "PrepareDefinesForOIT",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareDefinesForOIT"],
    "PrepareDefinesForPrePass",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareDefinesForPrePass"],
    "PrepareUniformLayoutForIBL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareUniformLayoutForIBL"],
    "PrepareUniformsAndSamplersForIBL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareUniformsAndSamplersForIBL"],
    "PrepareUniformsAndSamplersForLight",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareUniformsAndSamplersForLight"],
    "PrepareUniformsAndSamplersList",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareUniformsAndSamplersList"],
    "PushAttributesForInstances",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PushAttributesForInstances"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialHelper.functions.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$pure$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialHelper.functions.pure.js [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=dcdbf_%40babylonjs_core_Materials_26dd7200._.js.map