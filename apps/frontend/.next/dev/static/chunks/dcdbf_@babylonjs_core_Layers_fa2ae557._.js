(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Layers/thinEffectLayer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThinEffectLayer",
    ()=>ThinEffectLayer,
    "ThinGlowBlurPostProcess",
    ()=>ThinGlowBlurPostProcess
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.color.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/engineStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Buffers/buffer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$effectRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/effectRenderer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$material$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/material.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$effectFallbacks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/effectFallbacks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$drawWrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/drawWrapper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$clipPlaneMaterialHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/clipPlaneMaterialHelper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialHelper.functions.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Rendering$2f$objectRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Rendering/objectRenderer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/engine.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
class ThinGlowBlurPostProcess extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$effectRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EffectWrapper"] {
    constructor(name, engine = null, direction, kernel, options){
        super({
            ...options,
            name,
            engine: engine || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Engine"].LastCreatedEngine,
            useShaderStore: true,
            useAsPostProcess: true,
            fragmentShader: ThinGlowBlurPostProcess.FragmentUrl,
            uniforms: ThinGlowBlurPostProcess.Uniforms
        });
        this.direction = direction;
        this.kernel = kernel;
        this.textureWidth = 0;
        this.textureHeight = 0;
    }
    _gatherImports(useWebGPU, list) {
        if (useWebGPU) {
            this._webGPUReady = true;
            list.push(__turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/glowBlurPostProcess.fragment.js [app-client] (ecmascript, async loader)"));
        } else {
            list.push(__turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/glowBlurPostProcess.fragment.js [app-client] (ecmascript, async loader)"));
        }
        super._gatherImports(useWebGPU, list);
    }
    bind() {
        super.bind();
        this._drawWrapper.effect.setFloat2("screenSize", this.textureWidth, this.textureHeight);
        this._drawWrapper.effect.setVector2("direction", this.direction);
        this._drawWrapper.effect.setFloat("blurWidth", this.kernel);
    }
}
/**
 * The fragment shader url
 */ ThinGlowBlurPostProcess.FragmentUrl = "glowBlurPostProcess";
/**
 * The list of uniforms used by the effect
 */ ThinGlowBlurPostProcess.Uniforms = [
    "screenSize",
    "direction",
    "blurWidth"
];
class ThinEffectLayer {
    /**
     * Gets/sets the camera attached to the layer.
     */ get camera() {
        return this._options.camera;
    }
    set camera(camera) {
        this._options.camera = camera;
    }
    /**
     * Gets the rendering group id the layer should render in.
     */ get renderingGroupId() {
        return this._options.renderingGroupId;
    }
    set renderingGroupId(renderingGroupId) {
        this._options.renderingGroupId = renderingGroupId;
    }
    /**
     * Gets the object renderer used to render objects in the layer
     */ get objectRenderer() {
        return this._objectRenderer;
    }
    /**
     * Gets the shader language used in this material.
     */ get shaderLanguage() {
        return this._shaderLanguage;
    }
    /**
     * Sets a specific material to be used to render a mesh/a list of meshes in the layer
     * @param mesh mesh or array of meshes
     * @param material material to use by the layer when rendering the mesh(es). If undefined is passed, the specific material created by the layer will be used.
     */ setMaterialForRendering(mesh, material) {
        this._objectRenderer.setMaterialForRendering(mesh, material);
        if (Array.isArray(mesh)) {
            for(let i = 0; i < mesh.length; ++i){
                const currentMesh = mesh[i];
                if (!material) {
                    delete this._materialForRendering[currentMesh.uniqueId];
                } else {
                    this._materialForRendering[currentMesh.uniqueId] = [
                        currentMesh,
                        material
                    ];
                }
            }
        } else {
            if (!material) {
                delete this._materialForRendering[mesh.uniqueId];
            } else {
                this._materialForRendering[mesh.uniqueId] = [
                    mesh,
                    material
                ];
            }
        }
    }
    /**
     * Gets the intensity of the effect for a specific mesh.
     * @param mesh The mesh to get the effect intensity for
     * @returns The intensity of the effect for the mesh
     */ getEffectIntensity(mesh) {
        return this._effectIntensity[mesh.uniqueId] ?? 1;
    }
    /**
     * Sets the intensity of the effect for a specific mesh.
     * @param mesh The mesh to set the effect intensity for
     * @param intensity The intensity of the effect for the mesh
     */ setEffectIntensity(mesh, intensity) {
        this._effectIntensity[mesh.uniqueId] = intensity;
    }
    /**
     * Instantiates a new effect Layer
     * @param name The name of the layer
     * @param scene The scene to use the layer in
     * @param forceGLSL Use the GLSL code generation for the shader (even on WebGPU). Default is false
     * @param dontCheckIfReady Specifies if the layer should disable checking whether all the post processes are ready (default: false). To save performance, this should be set to true and you should call `isReady` manually before rendering to the layer.
     * @param _additionalImportShadersAsync Additional shaders to import when the layer is created
     */ constructor(name, scene, forceGLSL = false, dontCheckIfReady = false, _additionalImportShadersAsync){
        this._additionalImportShadersAsync = _additionalImportShadersAsync;
        this._vertexBuffers = {};
        this._dontCheckIfReady = false;
        /** @internal */ this._shouldRender = true;
        /** @internal */ this._emissiveTextureAndColor = {
            texture: null,
            color: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color4"]()
        };
        /** @internal */ this._effectIntensity = {};
        /** @internal */ this._postProcesses = [];
        /**
         * The clear color of the texture used to generate the glow map.
         */ this.neutralColor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color4"]();
        /**
         * Specifies whether the effect layer is enabled or not.
         */ this.isEnabled = true;
        /**
         * Specifies if the bounding boxes should be rendered normally or if they should undergo the effect of the layer
         */ this.disableBoundingBoxesFromEffectLayer = false;
        /**
         * An event triggered when the effect layer has been disposed.
         */ this.onDisposeObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * An event triggered when the effect layer is about rendering the main texture with the glowy parts.
         */ this.onBeforeRenderLayerObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * An event triggered when the generated texture is being merged in the scene.
         */ this.onBeforeComposeObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * An event triggered when the mesh is rendered into the effect render target.
         */ this.onBeforeRenderMeshToEffect = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * An event triggered after the mesh has been rendered into the effect render target.
         */ this.onAfterRenderMeshToEffect = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * An event triggered when the generated texture has been merged in the scene.
         */ this.onAfterComposeObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * An event triggered when the layer is being blurred.
         */ this.onBeforeBlurObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * An event triggered when the layer has been blurred.
         */ this.onAfterBlurObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        this._shaderLanguage = 0 /* ShaderLanguage.GLSL */ ;
        this._materialForRendering = {};
        /** @internal */ this._shadersLoaded = false;
        this.name = name;
        this._scene = scene || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EngineStore"].LastCreatedScene;
        this._dontCheckIfReady = dontCheckIfReady;
        const engine = this._scene.getEngine();
        if (engine.isWebGPU && !forceGLSL && !ThinEffectLayer.ForceGLSL) {
            this._shaderLanguage = 1 /* ShaderLanguage.WGSL */ ;
        }
        this._engine = this._scene.getEngine();
        this._mergeDrawWrapper = [];
        // Generate Buffers
        this._generateIndexBuffer();
        this._generateVertexBuffer();
    }
    /**
     * Get the effect name of the layer.
     * @returns The effect name
     */ getEffectName() {
        return "";
    }
    /**
     * Checks for the readiness of the element composing the layer.
     * @param _subMesh the mesh to check for
     * @param _useInstances specify whether or not to use instances to render the mesh
     * @returns true if ready otherwise, false
     */ isReady(_subMesh, _useInstances) {
        return true;
    }
    /**
     * Returns whether or not the layer needs stencil enabled during the mesh rendering.
     * @returns true if the effect requires stencil during the main canvas render pass.
     */ needStencil() {
        return false;
    }
    /** @internal */ _createMergeEffect() {
        throw new Error("Effect Layer: no merge effect defined");
    }
    /** @internal */ _createTextureAndPostProcesses() {}
    /** @internal */ _internalCompose(_effect, _renderIndex) {}
    /** @internal */ _setEmissiveTextureAndColor(_mesh, _subMesh, _material) {}
    /** @internal */ _numInternalDraws() {
        return 1;
    }
    /** @internal */ _init(options) {
        // Adapt options
        this._options = {
            mainTextureRatio: 0.5,
            mainTextureFixedSize: 0,
            mainTextureType: 0,
            alphaBlendingMode: 2,
            camera: null,
            renderingGroupId: -1,
            ...options
        };
        this._createObjectRenderer();
    }
    _generateIndexBuffer() {
        // Indices
        const indices = [];
        indices.push(0);
        indices.push(1);
        indices.push(2);
        indices.push(0);
        indices.push(2);
        indices.push(3);
        this._indexBuffer = this._engine.createIndexBuffer(indices);
    }
    _generateVertexBuffer() {
        // VBO
        const vertices = [];
        vertices.push(1, 1);
        vertices.push(-1, 1);
        vertices.push(-1, -1);
        vertices.push(1, -1);
        const vertexBuffer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VertexBuffer"](this._engine, vertices, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VertexBuffer"].PositionKind, false, false, 2);
        this._vertexBuffers[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VertexBuffer"].PositionKind] = vertexBuffer;
    }
    _createObjectRenderer() {
        this._objectRenderer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Rendering$2f$objectRenderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ObjectRenderer"](`ObjectRenderer for thin effect layer ${this.name}`, this._scene, {
            doNotChangeAspectRatio: true
        });
        this._objectRenderer.activeCamera = this._options.camera;
        this._objectRenderer.renderParticles = false;
        this._objectRenderer.renderList = null;
        // Prevent package size in es6 (getBoundingBoxRenderer might not be present)
        const hasBoundingBoxRenderer = !!this._scene.getBoundingBoxRenderer;
        let boundingBoxRendererEnabled = false;
        if (hasBoundingBoxRenderer) {
            this._objectRenderer.onBeforeRenderObservable.add(()=>{
                boundingBoxRendererEnabled = this._scene.getBoundingBoxRenderer().enabled;
                this._scene.getBoundingBoxRenderer().enabled = !this.disableBoundingBoxesFromEffectLayer && boundingBoxRendererEnabled;
            });
            this._objectRenderer.onAfterRenderObservable.add(()=>{
                this._scene.getBoundingBoxRenderer().enabled = boundingBoxRendererEnabled;
            });
        }
        this._objectRenderer.customIsReadyFunction = (mesh, refreshRate, preWarm)=>{
            if ((preWarm || refreshRate === 0) && mesh.subMeshes) {
                for(let i = 0; i < mesh.subMeshes.length; ++i){
                    const subMesh = mesh.subMeshes[i];
                    const material = subMesh.getMaterial();
                    const renderingMesh = subMesh.getRenderingMesh();
                    if (!material) {
                        continue;
                    }
                    const batch = renderingMesh._getInstancesRenderList(subMesh._id, !!subMesh.getReplacementMesh());
                    const hardwareInstancedRendering = batch.hardwareInstancedRendering[subMesh._id] || renderingMesh.hasThinInstances;
                    this._setEmissiveTextureAndColor(renderingMesh, subMesh, material);
                    if (!this._isSubMeshReady(subMesh, hardwareInstancedRendering, this._emissiveTextureAndColor.texture)) {
                        return false;
                    }
                }
            }
            return true;
        };
        // Custom render function
        this._objectRenderer.customRenderFunction = (opaqueSubMeshes, alphaTestSubMeshes, transparentSubMeshes, depthOnlySubMeshes)=>{
            this.onBeforeRenderLayerObservable.notifyObservers(this);
            let index;
            const engine = this._scene.getEngine();
            if (depthOnlySubMeshes.length) {
                engine.setColorWrite(false);
                for(index = 0; index < depthOnlySubMeshes.length; index++){
                    this._renderSubMesh(depthOnlySubMeshes.data[index]);
                }
                engine.setColorWrite(true);
            }
            for(index = 0; index < opaqueSubMeshes.length; index++){
                this._renderSubMesh(opaqueSubMeshes.data[index]);
            }
            for(index = 0; index < alphaTestSubMeshes.length; index++){
                this._renderSubMesh(alphaTestSubMeshes.data[index]);
            }
            const previousAlphaMode = engine.getAlphaMode();
            for(index = 0; index < transparentSubMeshes.length; index++){
                const subMesh = transparentSubMeshes.data[index];
                const material = subMesh.getMaterial();
                if (material && material.needDepthPrePass) {
                    const engine = material.getScene().getEngine();
                    engine.setColorWrite(false);
                    this._renderSubMesh(subMesh);
                    engine.setColorWrite(true);
                }
                this._renderSubMesh(subMesh, true);
            }
            engine.setAlphaMode(previousAlphaMode);
        };
    }
    /** @internal */ _addCustomEffectDefines(_defines) {}
    /** @internal */ _internalIsSubMeshReady(subMesh, useInstances, emissiveTexture) {
        const engine = this._scene.getEngine();
        const mesh = subMesh.getMesh();
        const renderingMaterial = mesh._internalAbstractMeshDataInfo._materialForRenderPass?.[engine.currentRenderPassId];
        if (renderingMaterial) {
            return renderingMaterial.isReadyForSubMesh(mesh, subMesh, useInstances);
        }
        const material = subMesh.getMaterial();
        if (!material) {
            return false;
        }
        if (this._useMeshMaterial(subMesh.getRenderingMesh())) {
            return material.isReadyForSubMesh(subMesh.getMesh(), subMesh, useInstances);
        }
        const defines = [];
        const attribs = [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VertexBuffer"].PositionKind
        ];
        let uv1 = false;
        let uv2 = false;
        const color = false;
        // Diffuse
        if (material) {
            const needAlphaTest = material.needAlphaTestingForMesh(mesh);
            const diffuseTexture = material.getAlphaTestTexture();
            const needAlphaBlendFromDiffuse = diffuseTexture && diffuseTexture.hasAlpha && (material.useAlphaFromDiffuseTexture || material._useAlphaFromAlbedoTexture);
            if (diffuseTexture && (needAlphaTest || needAlphaBlendFromDiffuse)) {
                defines.push("#define DIFFUSE");
                if (mesh.isVerticesDataPresent(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VertexBuffer"].UV2Kind) && diffuseTexture.coordinatesIndex === 1) {
                    defines.push("#define DIFFUSEUV2");
                    uv2 = true;
                } else if (mesh.isVerticesDataPresent(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VertexBuffer"].UVKind)) {
                    defines.push("#define DIFFUSEUV1");
                    uv1 = true;
                }
                if (needAlphaTest) {
                    defines.push("#define ALPHATEST");
                    defines.push("#define ALPHATESTVALUE 0.4");
                }
                if (!diffuseTexture.gammaSpace) {
                    defines.push("#define DIFFUSE_ISLINEAR");
                }
            }
            const opacityTexture = material.opacityTexture;
            if (opacityTexture) {
                defines.push("#define OPACITY");
                if (mesh.isVerticesDataPresent(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VertexBuffer"].UV2Kind) && opacityTexture.coordinatesIndex === 1) {
                    defines.push("#define OPACITYUV2");
                    uv2 = true;
                } else if (mesh.isVerticesDataPresent(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VertexBuffer"].UVKind)) {
                    defines.push("#define OPACITYUV1");
                    uv1 = true;
                }
            }
        }
        // Emissive
        if (emissiveTexture) {
            defines.push("#define EMISSIVE");
            if (mesh.isVerticesDataPresent(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VertexBuffer"].UV2Kind) && emissiveTexture.coordinatesIndex === 1) {
                defines.push("#define EMISSIVEUV2");
                uv2 = true;
            } else if (mesh.isVerticesDataPresent(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VertexBuffer"].UVKind)) {
                defines.push("#define EMISSIVEUV1");
                uv1 = true;
            }
            if (!emissiveTexture.gammaSpace) {
                defines.push("#define EMISSIVE_ISLINEAR");
            }
        }
        // Vertex
        if (mesh.useVertexColors && mesh.isVerticesDataPresent(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VertexBuffer"].ColorKind) && mesh.hasVertexAlpha && material.transparencyMode !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$material$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Material"].MATERIAL_OPAQUE) {
            attribs.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VertexBuffer"].ColorKind);
            defines.push("#define VERTEXALPHA");
        }
        if (uv1) {
            attribs.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VertexBuffer"].UVKind);
            defines.push("#define UV1");
        }
        if (uv2) {
            attribs.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VertexBuffer"].UV2Kind);
            defines.push("#define UV2");
        }
        // Bones
        const fallbacks = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$effectFallbacks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EffectFallbacks"]();
        if (mesh.useBones && mesh.computeBonesUsingShaders) {
            attribs.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VertexBuffer"].MatricesIndicesKind);
            attribs.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VertexBuffer"].MatricesWeightsKind);
            if (mesh.numBoneInfluencers > 4) {
                attribs.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VertexBuffer"].MatricesIndicesExtraKind);
                attribs.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VertexBuffer"].MatricesWeightsExtraKind);
            }
            defines.push("#define NUM_BONE_INFLUENCERS " + mesh.numBoneInfluencers);
            const skeleton = mesh.skeleton;
            if (skeleton && skeleton.isUsingTextureForMatrices) {
                defines.push("#define BONETEXTURE");
            } else {
                defines.push("#define BonesPerMesh " + (skeleton ? skeleton.bones.length + 1 : 0));
            }
            if (mesh.numBoneInfluencers > 0) {
                fallbacks.addCPUSkinningFallback(0, mesh);
            }
        } else {
            defines.push("#define NUM_BONE_INFLUENCERS 0");
        }
        // Morph targets
        const numMorphInfluencers = mesh.morphTargetManager ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareDefinesAndAttributesForMorphTargets"])(mesh.morphTargetManager, defines, attribs, mesh, true, false, false, uv1, uv2, color // useColorMorph
        ) : 0;
        // Instances
        if (useInstances) {
            defines.push("#define INSTANCES");
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PushAttributesForInstances"])(attribs);
            if (subMesh.getRenderingMesh().hasThinInstances) {
                defines.push("#define THIN_INSTANCES");
            }
        }
        // ClipPlanes
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$clipPlaneMaterialHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PrepareStringDefinesForClipPlanes"])(material, this._scene, defines);
        this._addCustomEffectDefines(defines);
        // Get correct effect
        const drawWrapper = subMesh._getDrawWrapper(undefined, true);
        const cachedDefines = drawWrapper.defines;
        const join = defines.join("\n");
        if (cachedDefines !== join) {
            const uniforms = [
                "world",
                "mBones",
                "viewProjection",
                "glowColor",
                "morphTargetInfluences",
                "morphTargetCount",
                "boneTextureWidth",
                "diffuseMatrix",
                "emissiveMatrix",
                "opacityMatrix",
                "opacityIntensity",
                "morphTargetTextureInfo",
                "morphTargetTextureIndices",
                "glowIntensity"
            ];
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$clipPlaneMaterialHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AddClipPlaneUniforms"])(uniforms);
            drawWrapper.setEffect(this._engine.createEffect("glowMapGeneration", attribs, uniforms, [
                "diffuseSampler",
                "emissiveSampler",
                "opacitySampler",
                "boneSampler",
                "morphTargets"
            ], join, fallbacks, undefined, undefined, {
                maxSimultaneousMorphTargets: numMorphInfluencers
            }, this._shaderLanguage, this._shadersLoaded ? undefined : async ()=>{
                await this._importShadersAsync();
                this._shadersLoaded = true;
            }), join);
        }
        const effectIsReady = drawWrapper.effect.isReady();
        return effectIsReady && (this._dontCheckIfReady || !this._dontCheckIfReady && this.isLayerReady());
    }
    /** @internal */ _isSubMeshReady(subMesh, useInstances, emissiveTexture) {
        return this._internalIsSubMeshReady(subMesh, useInstances, emissiveTexture);
    }
    async _importShadersAsync() {
        if (this._shaderLanguage === 1 /* ShaderLanguage.WGSL */ ) {
            await Promise.all([
                __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/glowMapGeneration.vertex.js [app-client] (ecmascript, async loader)"),
                __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/glowMapGeneration.fragment.js [app-client] (ecmascript, async loader)")
            ]);
        } else {
            await Promise.all([
                __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/glowMapGeneration.vertex.js [app-client] (ecmascript, async loader)"),
                __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/glowMapGeneration.fragment.js [app-client] (ecmascript, async loader)")
            ]);
        }
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this._additionalImportShadersAsync?.();
    }
    /** @internal */ _internalIsLayerReady() {
        let isReady = true;
        for(let i = 0; i < this._postProcesses.length; i++){
            isReady = this._postProcesses[i].isReady() && isReady;
        }
        const numDraws = this._numInternalDraws();
        for(let i = 0; i < numDraws; ++i){
            let currentEffect = this._mergeDrawWrapper[i];
            if (!currentEffect) {
                currentEffect = this._mergeDrawWrapper[i] = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$drawWrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DrawWrapper"](this._engine);
                currentEffect.setEffect(this._createMergeEffect());
            }
            isReady = currentEffect.effect.isReady() && isReady;
        }
        return isReady;
    }
    /**
     * Checks if the layer is ready to be used.
     * @returns true if the layer is ready to be used
     */ isLayerReady() {
        return this._internalIsLayerReady();
    }
    /**
     * Renders the glowing part of the scene by blending the blurred glowing meshes on top of the rendered scene.
     * @returns true if the rendering was successful
     */ compose() {
        if (!this._dontCheckIfReady && !this.isLayerReady()) {
            return false;
        }
        const engine = this._scene.getEngine();
        const numDraws = this._numInternalDraws();
        this.onBeforeComposeObservable.notifyObservers(this);
        const previousAlphaMode = engine.getAlphaMode();
        for(let i = 0; i < numDraws; ++i){
            const currentEffect = this._mergeDrawWrapper[i];
            // Render
            engine.enableEffect(currentEffect);
            engine.setState(false);
            // VBOs
            engine.bindBuffers(this._vertexBuffers, this._indexBuffer, currentEffect.effect);
            // Go Blend.
            engine.setAlphaMode(this._options.alphaBlendingMode);
            // Blends the map on the main canvas.
            this._internalCompose(currentEffect.effect, i);
        }
        // Restore Alpha
        engine.setAlphaMode(previousAlphaMode);
        this.onAfterComposeObservable.notifyObservers(this);
        return true;
    }
    /** @internal */ _internalHasMesh(mesh) {
        if (this.renderingGroupId === -1 || mesh.renderingGroupId === this.renderingGroupId) {
            return true;
        }
        return false;
    }
    /**
     * Determine if a given mesh will be used in the current effect.
     * @param mesh mesh to test
     * @returns true if the mesh will be used
     */ hasMesh(mesh) {
        return this._internalHasMesh(mesh);
    }
    /** @internal */ _internalShouldRender() {
        return this.isEnabled && this._shouldRender;
    }
    /**
     * Returns true if the layer contains information to display, otherwise false.
     * @returns true if the glow layer should be rendered
     */ shouldRender() {
        return this._internalShouldRender();
    }
    /** @internal */ _shouldRenderMesh(_mesh) {
        return true;
    }
    /** @internal */ _internalCanRenderMesh(mesh, material) {
        return !material.needAlphaBlendingForMesh(mesh);
    }
    /** @internal */ _canRenderMesh(mesh, material) {
        return this._internalCanRenderMesh(mesh, material);
    }
    _renderSubMesh(subMesh, enableAlphaMode = false) {
        if (!this._internalShouldRender()) {
            return;
        }
        const material = subMesh.getMaterial();
        const ownerMesh = subMesh.getMesh();
        const replacementMesh = subMesh.getReplacementMesh();
        const renderingMesh = subMesh.getRenderingMesh();
        const effectiveMesh = subMesh.getEffectiveMesh();
        const scene = this._scene;
        const engine = scene.getEngine();
        effectiveMesh._internalAbstractMeshDataInfo._isActiveIntermediate = false;
        if (!material) {
            return;
        }
        // Do not block in blend mode.
        if (!this._canRenderMesh(renderingMesh, material)) {
            return;
        }
        // Culling
        let sideOrientation = material._getEffectiveOrientation(renderingMesh);
        const mainDeterminant = effectiveMesh._getWorldMatrixDeterminant();
        if (mainDeterminant < 0) {
            sideOrientation = sideOrientation === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$material$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Material"].ClockWiseSideOrientation ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$material$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Material"].CounterClockWiseSideOrientation : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$material$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Material"].ClockWiseSideOrientation;
        }
        const reverse = sideOrientation === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$material$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Material"].ClockWiseSideOrientation;
        engine.setState(material.backFaceCulling, material.zOffset, undefined, reverse, material.cullBackFaces, undefined, material.zOffsetUnits);
        // Managing instances
        const batch = renderingMesh._getInstancesRenderList(subMesh._id, !!replacementMesh);
        if (batch.mustReturn) {
            return;
        }
        // Early Exit per mesh
        if (!this._shouldRenderMesh(renderingMesh)) {
            return;
        }
        const hardwareInstancedRendering = batch.hardwareInstancedRendering[subMesh._id] || renderingMesh.hasThinInstances;
        this._setEmissiveTextureAndColor(renderingMesh, subMesh, material);
        this.onBeforeRenderMeshToEffect.notifyObservers(ownerMesh);
        if (this._useMeshMaterial(renderingMesh)) {
            subMesh.getMaterial()._glowModeEnabled = true;
            renderingMesh.render(subMesh, enableAlphaMode, replacementMesh || undefined);
            subMesh.getMaterial()._glowModeEnabled = false;
        } else if (this._isSubMeshReady(subMesh, hardwareInstancedRendering, this._emissiveTextureAndColor.texture)) {
            const renderingMaterial = effectiveMesh._internalAbstractMeshDataInfo._materialForRenderPass?.[engine.currentRenderPassId];
            let drawWrapper = subMesh._getDrawWrapper();
            if (!drawWrapper && renderingMaterial) {
                drawWrapper = renderingMaterial._getDrawWrapper();
            }
            if (!drawWrapper) {
                return;
            }
            const effect = drawWrapper.effect;
            engine.enableEffect(drawWrapper);
            if (!hardwareInstancedRendering) {
                renderingMesh._bind(subMesh, effect, material.fillMode);
            }
            if (!renderingMaterial) {
                effect.setMatrix("viewProjection", scene.getTransformMatrix());
                effect.setMatrix("world", effectiveMesh.getWorldMatrix());
                effect.setFloat4("glowColor", this._emissiveTextureAndColor.color.r, this._emissiveTextureAndColor.color.g, this._emissiveTextureAndColor.color.b, this._emissiveTextureAndColor.color.a);
            } else {
                renderingMaterial.bindForSubMesh(effectiveMesh.getWorldMatrix(), effectiveMesh, subMesh);
            }
            if (!renderingMaterial) {
                const needAlphaTest = material.needAlphaTestingForMesh(effectiveMesh);
                const diffuseTexture = material.getAlphaTestTexture();
                const needAlphaBlendFromDiffuse = diffuseTexture && diffuseTexture.hasAlpha && (material.useAlphaFromDiffuseTexture || material._useAlphaFromAlbedoTexture);
                if (diffuseTexture && (needAlphaTest || needAlphaBlendFromDiffuse)) {
                    effect.setTexture("diffuseSampler", diffuseTexture);
                    const textureMatrix = diffuseTexture.getTextureMatrix();
                    if (textureMatrix) {
                        effect.setMatrix("diffuseMatrix", textureMatrix);
                    }
                }
                const opacityTexture = material.opacityTexture;
                if (opacityTexture) {
                    effect.setTexture("opacitySampler", opacityTexture);
                    effect.setFloat("opacityIntensity", opacityTexture.level);
                    const textureMatrix = opacityTexture.getTextureMatrix();
                    if (textureMatrix) {
                        effect.setMatrix("opacityMatrix", textureMatrix);
                    }
                }
                // Glow emissive only
                if (this._emissiveTextureAndColor.texture) {
                    effect.setTexture("emissiveSampler", this._emissiveTextureAndColor.texture);
                    effect.setMatrix("emissiveMatrix", this._emissiveTextureAndColor.texture.getTextureMatrix());
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
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BindMorphTargetParameters"])(renderingMesh, effect);
                if (renderingMesh.morphTargetManager && renderingMesh.morphTargetManager.isUsingTextureForTargets) {
                    renderingMesh.morphTargetManager._bind(effect);
                }
                // Alpha mode
                if (enableAlphaMode) {
                    engine.setAlphaMode(material.alphaMode);
                }
                // Intensity of effect
                effect.setFloat("glowIntensity", this.getEffectIntensity(renderingMesh));
                // Clip planes
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$clipPlaneMaterialHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BindClipPlane"])(effect, material, scene);
            }
            // Draw
            renderingMesh._processRendering(effectiveMesh, subMesh, effect, material.fillMode, batch, hardwareInstancedRendering, (isInstance, world)=>effect.setMatrix("world", world));
        } else {
            // Need to reset refresh rate of the main map
            this._objectRenderer.resetRefreshCounter();
        }
        this.onAfterRenderMeshToEffect.notifyObservers(ownerMesh);
    }
    /** @internal */ _useMeshMaterial(_mesh) {
        return false;
    }
    /** @internal */ _rebuild() {
        const vb = this._vertexBuffers[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VertexBuffer"].PositionKind];
        if (vb) {
            vb._rebuild();
        }
        this._generateIndexBuffer();
    }
    /**
     * Dispose the effect layer and free resources.
     */ dispose() {
        const vertexBuffer = this._vertexBuffers[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VertexBuffer"].PositionKind];
        if (vertexBuffer) {
            vertexBuffer.dispose();
            this._vertexBuffers[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VertexBuffer"].PositionKind] = null;
        }
        if (this._indexBuffer) {
            this._scene.getEngine()._releaseBuffer(this._indexBuffer);
            this._indexBuffer = null;
        }
        for (const drawWrapper of this._mergeDrawWrapper){
            drawWrapper.dispose();
        }
        this._mergeDrawWrapper = [];
        this._objectRenderer.dispose();
        // Callback
        this.onDisposeObservable.notifyObservers(this);
        this.onDisposeObservable.clear();
        this.onBeforeRenderLayerObservable.clear();
        this.onBeforeComposeObservable.clear();
        this.onBeforeRenderMeshToEffect.clear();
        this.onAfterRenderMeshToEffect.clear();
        this.onAfterComposeObservable.clear();
    }
}
/**
 * Force all the effect layers to compile to glsl even on WebGPU engines.
 * False by default. This is mostly meant for backward compatibility.
 */ ThinEffectLayer.ForceGLSL = false; //# sourceMappingURL=thinEffectLayer.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Layers/thinGlowLayer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThinGlowLayer",
    ()=>ThinGlowLayer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Buffers/buffer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$material$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/material.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Layers$2f$thinEffectLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Layers/thinEffectLayer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.color.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$PostProcesses$2f$thinBlurPostProcess$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/PostProcesses/thinBlurPostProcess.js [app-client] (ecmascript)");
;
;
;
;
;
;
class ThinGlowLayer extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Layers$2f$thinEffectLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinEffectLayer"] {
    /**
     * Gets the ldrMerge option.
     */ get ldrMerge() {
        return this._options.ldrMerge;
    }
    /**
     * Sets the kernel size of the blur.
     */ set blurKernelSize(value) {
        if (value === this._options.blurKernelSize) {
            return;
        }
        this._options.blurKernelSize = value;
        const effectiveKernel = this._getEffectiveBlurKernelSize();
        this._horizontalBlurPostprocess1.kernel = effectiveKernel;
        this._verticalBlurPostprocess1.kernel = effectiveKernel;
        this._horizontalBlurPostprocess2.kernel = effectiveKernel;
        this._verticalBlurPostprocess2.kernel = effectiveKernel;
    }
    /**
     * Gets the kernel size of the blur.
     */ get blurKernelSize() {
        return this._options.blurKernelSize;
    }
    /**
     * Sets the glow intensity.
     */ set intensity(value) {
        this._intensity = value;
    }
    /**
     * Gets the glow intensity.
     */ get intensity() {
        return this._intensity;
    }
    /**
     * Instantiates a new glow Layer and references it to the scene.
     * @param name The name of the layer
     * @param scene The scene to use the layer in
     * @param options Sets of none mandatory options to use with the layer (see IGlowLayerOptions for more information)
     * @param dontCheckIfReady Specifies if the layer should disable checking whether all the post processes are ready (default: false). To save performance, this should be set to true and you should call `isReady` manually before rendering to the layer.
     */ constructor(name, scene, options, dontCheckIfReady = false){
        super(name, scene, false, dontCheckIfReady);
        this._intensity = 1.0;
        /** @internal */ this._includedOnlyMeshes = [];
        /** @internal */ this._excludedMeshes = [];
        this._meshesUsingTheirOwnMaterials = [];
        /** @internal */ this._renderPassId = 0;
        this.neutralColor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color4"](0, 0, 0, 1);
        // Adapt options
        this._options = {
            mainTextureRatio: 0.5,
            mainTextureFixedSize: 0,
            mainTextureType: 0,
            blurKernelSize: 32,
            camera: null,
            renderingGroupId: -1,
            ldrMerge: false,
            alphaBlendingMode: 1,
            ...options
        };
        // Initialize the layer
        this._init(this._options);
        if (dontCheckIfReady) {
            // When dontCheckIfReady is true, we are in the new ThinXXX layer mode, so we must call _createTextureAndPostProcesses ourselves (it is called by EffectLayer otherwise)
            this._createTextureAndPostProcesses();
        }
    }
    /**
     * Gets the class name of the thin glow layer
     * @returns the string with the class name of the glow layer
     */ getClassName() {
        return "GlowLayer";
    }
    async _importShadersAsync() {
        if (this._shaderLanguage === 1 /* ShaderLanguage.WGSL */ ) {
            await Promise.all([
                __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/glowMapMerge.fragment.js [app-client] (ecmascript, async loader)"),
                __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/glowMapMerge.vertex.js [app-client] (ecmascript, async loader)"),
                __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/glowBlurPostProcess.fragment.js [app-client] (ecmascript, async loader)")
            ]);
        } else {
            await Promise.all([
                __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/glowMapMerge.fragment.js [app-client] (ecmascript, async loader)"),
                __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/glowMapMerge.vertex.js [app-client] (ecmascript, async loader)"),
                __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/glowBlurPostProcess.fragment.js [app-client] (ecmascript, async loader)")
            ]);
        }
        await super._importShadersAsync();
    }
    getEffectName() {
        return ThinGlowLayer.EffectName;
    }
    _createMergeEffect() {
        let defines = "#define EMISSIVE \n";
        if (this._options.ldrMerge) {
            defines += "#define LDR \n";
        }
        // Effect
        return this._engine.createEffect("glowMapMerge", [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VertexBuffer"].PositionKind
        ], [
            "offset"
        ], [
            "textureSampler",
            "textureSampler2"
        ], defines, undefined, undefined, undefined, undefined, this.shaderLanguage, this._shadersLoaded ? undefined : async ()=>{
            await this._importShadersAsync();
            this._shadersLoaded = true;
        });
    }
    _createTextureAndPostProcesses() {
        const effectiveKernel = this._getEffectiveBlurKernelSize();
        this._horizontalBlurPostprocess1 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$PostProcesses$2f$thinBlurPostProcess$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinBlurPostProcess"]("GlowLayerHBP1", this._scene.getEngine(), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](1.0, 0), effectiveKernel);
        this._verticalBlurPostprocess1 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$PostProcesses$2f$thinBlurPostProcess$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinBlurPostProcess"]("GlowLayerVBP1", this._scene.getEngine(), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](0, 1.0), effectiveKernel);
        this._horizontalBlurPostprocess2 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$PostProcesses$2f$thinBlurPostProcess$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinBlurPostProcess"]("GlowLayerHBP2", this._scene.getEngine(), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](1.0, 0), effectiveKernel);
        this._verticalBlurPostprocess2 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$PostProcesses$2f$thinBlurPostProcess$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinBlurPostProcess"]("GlowLayerVBP2", this._scene.getEngine(), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](0, 1.0), effectiveKernel);
        this._postProcesses = [
            this._horizontalBlurPostprocess1,
            this._verticalBlurPostprocess1,
            this._horizontalBlurPostprocess2,
            this._verticalBlurPostprocess2
        ];
    }
    _getEffectiveBlurKernelSize() {
        return this._options.blurKernelSize / 2;
    }
    isReady(subMesh, useInstances) {
        const material = subMesh.getMaterial();
        const mesh = subMesh.getRenderingMesh();
        if (!material || !mesh) {
            return false;
        }
        const emissiveTexture = material.emissiveTexture;
        return super._isSubMeshReady(subMesh, useInstances, emissiveTexture);
    }
    _canRenderMesh(_mesh, _material) {
        return true;
    }
    _internalCompose(effect) {
        // Texture
        this.bindTexturesForCompose(effect);
        effect.setFloat("offset", this._intensity);
        // Cache
        const engine = this._engine;
        const previousStencilBuffer = engine.getStencilBuffer();
        // Draw order
        engine.setStencilBuffer(false);
        engine.drawElementsType(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$material$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Material"].TriangleFillMode, 0, 6);
        // Draw order
        engine.setStencilBuffer(previousStencilBuffer);
    }
    _setEmissiveTextureAndColor(mesh, subMesh, material) {
        let textureLevel = 1.0;
        if (this.customEmissiveTextureSelector) {
            this._emissiveTextureAndColor.texture = this.customEmissiveTextureSelector(mesh, subMesh, material);
        } else {
            if (material) {
                this._emissiveTextureAndColor.texture = material.emissiveTexture;
                if (this._emissiveTextureAndColor.texture) {
                    textureLevel = this._emissiveTextureAndColor.texture.level;
                }
            } else {
                this._emissiveTextureAndColor.texture = null;
            }
        }
        if (this.customEmissiveColorSelector) {
            this.customEmissiveColorSelector(mesh, subMesh, material, this._emissiveTextureAndColor.color);
        } else {
            if (material.emissiveColor) {
                const emissiveIntensity = material.emissiveIntensity ?? 1;
                textureLevel *= emissiveIntensity;
                this._emissiveTextureAndColor.color.set(material.emissiveColor.r * textureLevel, material.emissiveColor.g * textureLevel, material.emissiveColor.b * textureLevel, material.alpha);
            } else {
                this._emissiveTextureAndColor.color.set(this.neutralColor.r, this.neutralColor.g, this.neutralColor.b, this.neutralColor.a);
            }
        }
    }
    _shouldRenderMesh(mesh) {
        return this.hasMesh(mesh);
    }
    _addCustomEffectDefines(defines) {
        defines.push("#define GLOW");
    }
    /**
     * Add a mesh in the exclusion list to prevent it to impact or being impacted by the glow layer.
     * @param mesh The mesh to exclude from the glow layer
     */ addExcludedMesh(mesh) {
        if (this._excludedMeshes.indexOf(mesh.uniqueId) === -1) {
            this._excludedMeshes.push(mesh.uniqueId);
        }
    }
    /**
     * Remove a mesh from the exclusion list to let it impact or being impacted by the glow layer.
     * @param mesh The mesh to remove
     */ removeExcludedMesh(mesh) {
        const index = this._excludedMeshes.indexOf(mesh.uniqueId);
        if (index !== -1) {
            this._excludedMeshes.splice(index, 1);
        }
    }
    /**
     * Add a mesh in the inclusion list to impact or being impacted by the glow layer.
     * @param mesh The mesh to include in the glow layer
     */ addIncludedOnlyMesh(mesh) {
        if (this._includedOnlyMeshes.indexOf(mesh.uniqueId) === -1) {
            this._includedOnlyMeshes.push(mesh.uniqueId);
        }
    }
    /**
     * Remove a mesh from the Inclusion list to prevent it to impact or being impacted by the glow layer.
     * @param mesh The mesh to remove
     */ removeIncludedOnlyMesh(mesh) {
        const index = this._includedOnlyMeshes.indexOf(mesh.uniqueId);
        if (index !== -1) {
            this._includedOnlyMeshes.splice(index, 1);
        }
    }
    hasMesh(mesh) {
        if (!super.hasMesh(mesh)) {
            return false;
        }
        // Included Mesh
        if (this._includedOnlyMeshes.length) {
            return this._includedOnlyMeshes.indexOf(mesh.uniqueId) !== -1;
        }
        // Excluded Mesh
        if (this._excludedMeshes.length) {
            return this._excludedMeshes.indexOf(mesh.uniqueId) === -1;
        }
        return true;
    }
    _useMeshMaterial(mesh) {
        // Specific case of material supporting glow directly
        if (mesh.material?._supportGlowLayer) {
            return true;
        }
        if (this._meshesUsingTheirOwnMaterials.length == 0) {
            return false;
        }
        return this._meshesUsingTheirOwnMaterials.indexOf(mesh.uniqueId) > -1;
    }
    /**
     * Add a mesh to be rendered through its own material and not with emissive only.
     * @param mesh The mesh for which we need to use its material
     */ referenceMeshToUseItsOwnMaterial(mesh) {
        mesh.resetDrawCache(this._renderPassId);
        this._meshesUsingTheirOwnMaterials.push(mesh.uniqueId);
        mesh.onDisposeObservable.add(()=>{
            this._disposeMesh(mesh);
        });
    }
    /**
     * Remove a mesh from being rendered through its own material and not with emissive only.
     * @param mesh The mesh for which we need to not use its material
     * @param renderPassId The render pass id used when rendering the mesh
     */ unReferenceMeshFromUsingItsOwnMaterial(mesh, renderPassId) {
        let index = this._meshesUsingTheirOwnMaterials.indexOf(mesh.uniqueId);
        while(index >= 0){
            this._meshesUsingTheirOwnMaterials.splice(index, 1);
            index = this._meshesUsingTheirOwnMaterials.indexOf(mesh.uniqueId);
        }
        mesh.resetDrawCache(renderPassId);
    }
    /** @internal */ _disposeMesh(mesh) {
        this.removeIncludedOnlyMesh(mesh);
        this.removeExcludedMesh(mesh);
    }
}
/**
 * Effect Name of the layer.
 */ ThinGlowLayer.EffectName = "GlowLayer";
/**
 * The default blur kernel size used for the glow.
 */ ThinGlowLayer.DefaultBlurKernelSize = 32; //# sourceMappingURL=thinGlowLayer.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Layers/thinHighlightLayer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThinHighlightLayer",
    ()=>ThinHighlightLayer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Buffers/buffer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$material$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/material.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$PostProcesses$2f$thinPassPostProcess$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/PostProcesses/thinPassPostProcess.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Layers$2f$thinEffectLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Layers/thinEffectLayer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.color.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$PostProcesses$2f$thinBlurPostProcess$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/PostProcesses/thinBlurPostProcess.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
class ThinHighlightLayer extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Layers$2f$thinEffectLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinEffectLayer"] {
    /**
     * Specifies the horizontal size of the blur.
     */ set blurHorizontalSize(value) {
        this._horizontalBlurPostprocess.kernel = value;
        this._options.blurHorizontalSize = value;
    }
    /**
     * Specifies the vertical size of the blur.
     */ set blurVerticalSize(value) {
        this._verticalBlurPostprocess.kernel = value;
        this._options.blurVerticalSize = value;
    }
    /**
     * Gets the horizontal size of the blur.
     */ get blurHorizontalSize() {
        return this._horizontalBlurPostprocess.kernel;
    }
    /**
     * Gets the vertical size of the blur.
     */ get blurVerticalSize() {
        return this._verticalBlurPostprocess.kernel;
    }
    /**
     * Instantiates a new highlight Layer and references it to the scene..
     * @param name The name of the layer
     * @param scene The scene to use the layer in
     * @param options Sets of none mandatory options to use with the layer (see IHighlightLayerOptions for more information)
     * @param dontCheckIfReady Specifies if the layer should disable checking whether all the post processes are ready (default: false). To save performance, this should be set to true and you should call `isReady` manually before rendering to the layer.
     */ constructor(name, scene, options, dontCheckIfReady = false){
        super(name, scene, options !== undefined ? !!options.forceGLSL : false);
        /**
         * Specifies whether or not the inner glow is ACTIVE in the layer.
         */ this.innerGlow = true;
        /**
         * Specifies whether or not the outer glow is ACTIVE in the layer.
         */ this.outerGlow = true;
        this._instanceGlowingMeshStencilReference = ThinHighlightLayer.GlowingMeshStencilReference++;
        /** @internal */ this._meshes = {};
        /** @internal */ this._excludedMeshes = {};
        /** @internal */ this._mainObjectRendererRenderPassId = -1;
        this.neutralColor = ThinHighlightLayer.NeutralColor;
        // Adapt options
        this._options = {
            mainTextureRatio: 0.5,
            blurTextureSizeRatio: 0.5,
            mainTextureFixedSize: 0,
            blurHorizontalSize: 1.0,
            blurVerticalSize: 1.0,
            alphaBlendingMode: 2,
            camera: null,
            renderingGroupId: -1,
            forceGLSL: false,
            mainTextureType: 0,
            isStroke: false,
            ...options
        };
        // Initialize the layer
        this._init(this._options);
        // Do not render as long as no meshes have been added
        this._shouldRender = false;
        if (dontCheckIfReady) {
            // When dontCheckIfReady is true, we are in the new ThinXXX layer mode, so we must call _createTextureAndPostProcesses ourselves (it is called by EffectLayer otherwise)
            this._createTextureAndPostProcesses();
        }
    }
    /**
     * Gets the class name of the effect layer
     * @returns the string with the class name of the effect layer
     */ getClassName() {
        return "HighlightLayer";
    }
    async _importShadersAsync() {
        if (this._shaderLanguage === 1 /* ShaderLanguage.WGSL */ ) {
            await Promise.all([
                __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/glowMapMerge.fragment.js [app-client] (ecmascript, async loader)"),
                __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/glowMapMerge.vertex.js [app-client] (ecmascript, async loader)"),
                __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/glowBlurPostProcess.fragment.js [app-client] (ecmascript, async loader)")
            ]);
        } else {
            await Promise.all([
                __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/glowMapMerge.fragment.js [app-client] (ecmascript, async loader)"),
                __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/glowMapMerge.vertex.js [app-client] (ecmascript, async loader)"),
                __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/glowBlurPostProcess.fragment.js [app-client] (ecmascript, async loader)")
            ]);
        }
        await super._importShadersAsync();
    }
    getEffectName() {
        return ThinHighlightLayer.EffectName;
    }
    _numInternalDraws() {
        return 2; // we need two rendering, one for the inner glow and the other for the outer glow
    }
    _createMergeEffect() {
        return this._engine.createEffect("glowMapMerge", [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VertexBuffer"].PositionKind
        ], [
            "offset"
        ], [
            "textureSampler"
        ], this._options.isStroke ? "#define STROKE \n" : undefined, undefined, undefined, undefined, undefined, this._shaderLanguage, this._shadersLoaded ? undefined : async ()=>{
            await this._importShadersAsync();
            this._shadersLoaded = true;
        });
    }
    _createTextureAndPostProcesses() {
        if (this._options.alphaBlendingMode === 2) {
            this._downSamplePostprocess = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$PostProcesses$2f$thinPassPostProcess$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinPassPostProcess"]("HighlightLayerPPP", this._scene.getEngine());
            this._horizontalBlurPostprocess = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Layers$2f$thinEffectLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinGlowBlurPostProcess"]("HighlightLayerHBP", this._scene.getEngine(), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](1.0, 0), this._options.blurHorizontalSize);
            this._verticalBlurPostprocess = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Layers$2f$thinEffectLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinGlowBlurPostProcess"]("HighlightLayerVBP", this._scene.getEngine(), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](0, 1.0), this._options.blurVerticalSize);
            this._postProcesses = [
                this._downSamplePostprocess,
                this._horizontalBlurPostprocess,
                this._verticalBlurPostprocess
            ];
        } else {
            this._horizontalBlurPostprocess = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$PostProcesses$2f$thinBlurPostProcess$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinBlurPostProcess"]("HighlightLayerHBP", this._scene.getEngine(), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](1.0, 0), this._options.blurHorizontalSize / 2);
            this._verticalBlurPostprocess = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$PostProcesses$2f$thinBlurPostProcess$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinBlurPostProcess"]("HighlightLayerVBP", this._scene.getEngine(), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](0, 1.0), this._options.blurVerticalSize / 2);
            this._postProcesses = [
                this._horizontalBlurPostprocess,
                this._verticalBlurPostprocess
            ];
        }
    }
    needStencil() {
        return true;
    }
    isReady(subMesh, useInstances) {
        const material = subMesh.getMaterial();
        const mesh = subMesh.getRenderingMesh();
        if (!material || !mesh || !this._meshes) {
            return false;
        }
        let emissiveTexture = null;
        const highlightLayerMesh = this._meshes[mesh.uniqueId];
        if (highlightLayerMesh && highlightLayerMesh.glowEmissiveOnly && material) {
            emissiveTexture = material.emissiveTexture;
        }
        return super._isSubMeshReady(subMesh, useInstances, emissiveTexture);
    }
    _canRenderMesh(_mesh, _material) {
        // all meshes can be rendered in the highlight layer, even transparent ones
        return true;
    }
    _internalCompose(effect, renderIndex) {
        // Texture
        this.bindTexturesForCompose(effect);
        // Cache
        const engine = this._engine;
        engine.cacheStencilState();
        // Stencil operations
        engine.setStencilOperationPass(7681);
        engine.setStencilOperationFail(7680);
        engine.setStencilOperationDepthFail(7680);
        // Draw order
        engine.setStencilMask(0x00);
        engine.setStencilBuffer(true);
        engine.setStencilFunctionReference(this._instanceGlowingMeshStencilReference);
        // 2 passes inner outer
        if (this.outerGlow && renderIndex === 0) {
            // the outer glow is rendered the first time _internalRender is called, so when renderIndex == 0 (and only if outerGlow is enabled)
            effect.setFloat("offset", 0);
            engine.setStencilFunction(517);
            engine.drawElementsType(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$material$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Material"].TriangleFillMode, 0, 6);
        }
        if (this.innerGlow && renderIndex === 1) {
            // the inner glow is rendered the second time _internalRender is called, so when renderIndex == 1 (and only if innerGlow is enabled)
            effect.setFloat("offset", 1);
            engine.setStencilFunction(514);
            engine.drawElementsType(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$material$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Material"].TriangleFillMode, 0, 6);
        }
        // Restore Cache
        engine.restoreStencilState();
    }
    _setEmissiveTextureAndColor(mesh, _subMesh, material) {
        const highlightLayerMesh = this._meshes[mesh.uniqueId];
        if (highlightLayerMesh) {
            this._emissiveTextureAndColor.color.set(highlightLayerMesh.color.r, highlightLayerMesh.color.g, highlightLayerMesh.color.b, 1.0);
        } else {
            this._emissiveTextureAndColor.color.set(this.neutralColor.r, this.neutralColor.g, this.neutralColor.b, this.neutralColor.a);
        }
        if (highlightLayerMesh && highlightLayerMesh.glowEmissiveOnly && material) {
            this._emissiveTextureAndColor.texture = material.emissiveTexture;
            this._emissiveTextureAndColor.color.set(1.0, 1.0, 1.0, 1.0);
        } else {
            this._emissiveTextureAndColor.texture = null;
        }
    }
    shouldRender() {
        return this._meshes && super.shouldRender() ? true : false;
    }
    _shouldRenderMesh(mesh) {
        if (this._excludedMeshes && this._excludedMeshes[mesh.uniqueId]) {
            return false;
        }
        return super.hasMesh(mesh);
    }
    _addCustomEffectDefines(defines) {
        defines.push("#define HIGHLIGHT");
    }
    /**
     * Add a mesh in the exclusion list to prevent it to impact or being impacted by the highlight layer.
     * @param mesh The mesh to exclude from the highlight layer
     */ addExcludedMesh(mesh) {
        if (!this._excludedMeshes) {
            return;
        }
        const meshExcluded = this._excludedMeshes[mesh.uniqueId];
        if (!meshExcluded) {
            const obj = {
                mesh: mesh,
                beforeBind: null,
                afterRender: null,
                stencilState: false
            };
            obj.beforeBind = mesh.onBeforeBindObservable.add((mesh)=>{
                if (this._mainObjectRendererRenderPassId !== -1 && this._mainObjectRendererRenderPassId !== this._engine.currentRenderPassId) {
                    return;
                }
                obj.stencilState = mesh.getEngine().getStencilBuffer();
                mesh.getEngine().setStencilBuffer(false);
            });
            obj.afterRender = mesh.onAfterRenderObservable.add((mesh)=>{
                if (this._mainObjectRendererRenderPassId !== -1 && this._mainObjectRendererRenderPassId !== this._engine.currentRenderPassId) {
                    return;
                }
                mesh.getEngine().setStencilBuffer(obj.stencilState);
            });
            this._excludedMeshes[mesh.uniqueId] = obj;
        }
    }
    /**
     * Remove a mesh from the exclusion list to let it impact or being impacted by the highlight layer.
     * @param mesh The mesh to highlight
     */ removeExcludedMesh(mesh) {
        if (!this._excludedMeshes) {
            return;
        }
        const meshExcluded = this._excludedMeshes[mesh.uniqueId];
        if (meshExcluded) {
            if (meshExcluded.beforeBind) {
                mesh.onBeforeBindObservable.remove(meshExcluded.beforeBind);
            }
            if (meshExcluded.afterRender) {
                mesh.onAfterRenderObservable.remove(meshExcluded.afterRender);
            }
        }
        this._excludedMeshes[mesh.uniqueId] = null;
    }
    hasMesh(mesh) {
        if (!this._meshes || !super.hasMesh(mesh)) {
            return false;
        }
        return !!this._meshes[mesh.uniqueId];
    }
    /**
     * Add a mesh in the highlight layer in order to make it glow with the chosen color.
     * @param mesh The mesh to highlight
     * @param color The color of the highlight
     * @param glowEmissiveOnly Extract the glow from the emissive texture
     */ addMesh(mesh, color, glowEmissiveOnly = false) {
        if (!this._meshes) {
            return;
        }
        const meshHighlight = this._meshes[mesh.uniqueId];
        if (meshHighlight) {
            meshHighlight.color = color;
        } else {
            this._meshes[mesh.uniqueId] = {
                mesh: mesh,
                color: color,
                // Lambda required for capture due to Observable this context
                observerHighlight: mesh.onBeforeBindObservable.add((mesh)=>{
                    if (this._mainObjectRendererRenderPassId !== -1 && this._mainObjectRendererRenderPassId !== this._engine.currentRenderPassId) {
                        return;
                    }
                    if (this.isEnabled) {
                        if (this._excludedMeshes && this._excludedMeshes[mesh.uniqueId]) {
                            this._defaultStencilReference(mesh);
                        } else {
                            mesh.getScene().getEngine().setStencilFunctionReference(this._instanceGlowingMeshStencilReference);
                        }
                    }
                }),
                observerDefault: mesh.onAfterRenderObservable.add((mesh)=>{
                    if (this._mainObjectRendererRenderPassId !== -1 && this._mainObjectRendererRenderPassId !== this._engine.currentRenderPassId) {
                        return;
                    }
                    if (this.isEnabled) {
                        this._defaultStencilReference(mesh);
                    }
                }),
                glowEmissiveOnly: glowEmissiveOnly
            };
            mesh.onDisposeObservable.add(()=>{
                this._disposeMesh(mesh);
            });
        }
        this._shouldRender = true;
    }
    /**
     * Remove a mesh from the highlight layer in order to make it stop glowing.
     * @param mesh The mesh to highlight
     */ removeMesh(mesh) {
        if (!this._meshes) {
            return;
        }
        const meshHighlight = this._meshes[mesh.uniqueId];
        if (meshHighlight) {
            if (meshHighlight.observerHighlight) {
                mesh.onBeforeBindObservable.remove(meshHighlight.observerHighlight);
            }
            if (meshHighlight.observerDefault) {
                mesh.onAfterRenderObservable.remove(meshHighlight.observerDefault);
            }
            delete this._meshes[mesh.uniqueId];
        }
        this._shouldRender = false;
        for(const meshHighlightToCheck in this._meshes){
            if (this._meshes[meshHighlightToCheck]) {
                this._shouldRender = true;
                break;
            }
        }
    }
    /**
     * Remove all the meshes currently referenced in the highlight layer
     */ removeAllMeshes() {
        if (!this._meshes) {
            return;
        }
        for(const uniqueId in this._meshes){
            if (Object.prototype.hasOwnProperty.call(this._meshes, uniqueId)) {
                const mesh = this._meshes[uniqueId];
                if (mesh) {
                    this.removeMesh(mesh.mesh);
                }
            }
        }
    }
    _defaultStencilReference(mesh) {
        mesh.getScene().getEngine().setStencilFunctionReference(ThinHighlightLayer.NormalMeshStencilReference);
    }
    _disposeMesh(mesh) {
        this.removeMesh(mesh);
        this.removeExcludedMesh(mesh);
    }
    dispose() {
        if (this._meshes) {
            // Clean mesh references
            for(const id in this._meshes){
                const meshHighlight = this._meshes[id];
                if (meshHighlight && meshHighlight.mesh) {
                    if (meshHighlight.observerHighlight) {
                        meshHighlight.mesh.onBeforeBindObservable.remove(meshHighlight.observerHighlight);
                    }
                    if (meshHighlight.observerDefault) {
                        meshHighlight.mesh.onAfterRenderObservable.remove(meshHighlight.observerDefault);
                    }
                }
            }
            this._meshes = null;
        }
        if (this._excludedMeshes) {
            for(const id in this._excludedMeshes){
                const meshHighlight = this._excludedMeshes[id];
                if (meshHighlight) {
                    if (meshHighlight.beforeBind) {
                        meshHighlight.mesh.onBeforeBindObservable.remove(meshHighlight.beforeBind);
                    }
                    if (meshHighlight.afterRender) {
                        meshHighlight.mesh.onAfterRenderObservable.remove(meshHighlight.afterRender);
                    }
                }
            }
            this._excludedMeshes = null;
        }
        super.dispose();
    }
}
/**
 * Effect Name of the highlight layer.
 */ ThinHighlightLayer.EffectName = "HighlightLayer";
/**
 * The neutral color used during the preparation of the glow effect.
 * This is black by default as the blend operation is a blend operation.
 */ ThinHighlightLayer.NeutralColor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color4"](0, 0, 0, 0);
/**
 * Stencil value used for glowing meshes.
 */ ThinHighlightLayer.GlowingMeshStencilReference = 0x02;
/**
 * Stencil value used for the other meshes in the scene.
 */ ThinHighlightLayer.NormalMeshStencilReference = 0x01; //# sourceMappingURL=thinHighlightLayer.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Layers/effectLayer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EffectLayer",
    ()=>EffectLayer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/decorators.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/tools.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/engineStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/texture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$renderTargetTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/renderTargetTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$devTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/devTools.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/tools.functions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Layers$2f$thinEffectLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Layers/thinEffectLayer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$uniqueIdGenerator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/uniqueIdGenerator.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
class EffectLayer {
    get _shouldRender() {
        return this._thinEffectLayer._shouldRender;
    }
    set _shouldRender(value) {
        this._thinEffectLayer._shouldRender = value;
    }
    get _emissiveTextureAndColor() {
        return this._thinEffectLayer._emissiveTextureAndColor;
    }
    set _emissiveTextureAndColor(value) {
        this._thinEffectLayer._emissiveTextureAndColor = value;
    }
    get _effectIntensity() {
        return this._thinEffectLayer._effectIntensity;
    }
    set _effectIntensity(value) {
        this._thinEffectLayer._effectIntensity = value;
    }
    /**
     * Force all the effect layers to compile to glsl even on WebGPU engines.
     * False by default. This is mostly meant for backward compatibility.
     */ static get ForceGLSL() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Layers$2f$thinEffectLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinEffectLayer"].ForceGLSL;
    }
    static set ForceGLSL(value) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Layers$2f$thinEffectLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinEffectLayer"].ForceGLSL = value;
    }
    /**
     * The name of the layer
     */ get name() {
        return this._thinEffectLayer.name;
    }
    set name(value) {
        this._thinEffectLayer.name = value;
    }
    /**
     * The clear color of the texture used to generate the glow map.
     */ get neutralColor() {
        return this._thinEffectLayer.neutralColor;
    }
    set neutralColor(value) {
        this._thinEffectLayer.neutralColor = value;
    }
    /**
     * Specifies whether the highlight layer is enabled or not.
     */ get isEnabled() {
        return this._thinEffectLayer.isEnabled;
    }
    set isEnabled(value) {
        this._thinEffectLayer.isEnabled = value;
    }
    /**
     * Gets the camera attached to the layer.
     */ get camera() {
        return this._thinEffectLayer.camera;
    }
    /**
     * Gets the rendering group id the layer should render in.
     */ get renderingGroupId() {
        return this._thinEffectLayer.renderingGroupId;
    }
    set renderingGroupId(renderingGroupId) {
        this._thinEffectLayer.renderingGroupId = renderingGroupId;
    }
    /**
     * Specifies if the bounding boxes should be rendered normally or if they should undergo the effect of the layer
     */ get disableBoundingBoxesFromEffectLayer() {
        return this._thinEffectLayer.disableBoundingBoxesFromEffectLayer;
    }
    set disableBoundingBoxesFromEffectLayer(value) {
        this._thinEffectLayer.disableBoundingBoxesFromEffectLayer = value;
    }
    /**
     * Gets the main texture where the effect is rendered
     */ get mainTexture() {
        return this._mainTexture;
    }
    get _shaderLanguage() {
        return this._thinEffectLayer.shaderLanguage;
    }
    /**
     * Gets the shader language used in this material.
     */ get shaderLanguage() {
        return this._thinEffectLayer.shaderLanguage;
    }
    /**
     * Sets a specific material to be used to render a mesh/a list of meshes in the layer
     * @param mesh mesh or array of meshes
     * @param material material to use by the layer when rendering the mesh(es). If undefined is passed, the specific material created by the layer will be used.
     */ setMaterialForRendering(mesh, material) {
        this._thinEffectLayer.setMaterialForRendering(mesh, material);
    }
    /**
     * Gets the intensity of the effect for a specific mesh.
     * @param mesh The mesh to get the effect intensity for
     * @returns The intensity of the effect for the mesh
     */ getEffectIntensity(mesh) {
        return this._thinEffectLayer.getEffectIntensity(mesh);
    }
    /**
     * Sets the intensity of the effect for a specific mesh.
     * @param mesh The mesh to set the effect intensity for
     * @param intensity The intensity of the effect for the mesh
     */ setEffectIntensity(mesh, intensity) {
        this._thinEffectLayer.setEffectIntensity(mesh, intensity);
    }
    /**
     * Instantiates a new effect Layer and references it in the scene.
     * @param name The name of the layer
     * @param scene The scene to use the layer in
     * @param forceGLSL Use the GLSL code generation for the shader (even on WebGPU). Default is false
     * @param thinEffectLayer The thin instance of the effect layer (optional)
     */ constructor(/** The Friendly of the effect in the scene */ name, scene, forceGLSL = false, thinEffectLayer){
        this._mainTextureCreatedSize = {
            width: 0,
            height: 0
        };
        this._maxSize = 0;
        this._mainTextureDesiredSize = {
            width: 0,
            height: 0
        };
        this._postProcesses = [];
        this._textures = [];
        /**
         * The unique id of the layer
         */ this.uniqueId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$uniqueIdGenerator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UniqueIdGenerator"].UniqueId;
        /**
         * An event triggered when the effect layer has been disposed.
         */ this.onDisposeObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * An event triggered when the effect layer is about rendering the main texture with the glowy parts.
         */ this.onBeforeRenderMainTextureObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * An event triggered when the generated texture is being merged in the scene.
         */ this.onBeforeComposeObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * An event triggered when the mesh is rendered into the effect render target.
         */ this.onBeforeRenderMeshToEffect = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * An event triggered after the mesh has been rendered into the effect render target.
         */ this.onAfterRenderMeshToEffect = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * An event triggered when the generated texture has been merged in the scene.
         */ this.onAfterComposeObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * An event triggered when the effect layer changes its size.
         */ this.onSizeChangedObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        this._internalThinEffectLayer = !thinEffectLayer;
        if (!thinEffectLayer) {
            thinEffectLayer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Layers$2f$thinEffectLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinEffectLayer"](name, scene, forceGLSL, false, this._importShadersAsync.bind(this));
            thinEffectLayer.getEffectName = this.getEffectName.bind(this);
            thinEffectLayer.isReady = this.isReady.bind(this);
            thinEffectLayer._createMergeEffect = this._createMergeEffect.bind(this);
            thinEffectLayer._createTextureAndPostProcesses = this._createTextureAndPostProcesses.bind(this);
            thinEffectLayer._internalCompose = this._internalRender.bind(this);
            thinEffectLayer._setEmissiveTextureAndColor = this._setEmissiveTextureAndColor.bind(this);
            thinEffectLayer._numInternalDraws = this._numInternalDraws.bind(this);
            thinEffectLayer._addCustomEffectDefines = this._addCustomEffectDefines.bind(this);
            thinEffectLayer.hasMesh = this.hasMesh.bind(this);
            thinEffectLayer.shouldRender = this.shouldRender.bind(this);
            thinEffectLayer._shouldRenderMesh = this._shouldRenderMesh.bind(this);
            thinEffectLayer._canRenderMesh = this._canRenderMesh.bind(this);
            thinEffectLayer._useMeshMaterial = this._useMeshMaterial.bind(this);
        }
        this._thinEffectLayer = thinEffectLayer;
        this.name = name;
        this._scene = scene || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EngineStore"].LastCreatedScene;
        EffectLayer._SceneComponentInitialization(this._scene);
        this._engine = this._scene.getEngine();
        this._maxSize = this._engine.getCaps().maxTextureSize;
        this._scene.addEffectLayer(this);
        this._thinEffectLayer.onDisposeObservable.add(()=>{
            this.onDisposeObservable.notifyObservers(this);
        });
        this._thinEffectLayer.onBeforeRenderLayerObservable.add(()=>{
            this.onBeforeRenderMainTextureObservable.notifyObservers(this);
        });
        this._thinEffectLayer.onBeforeComposeObservable.add(()=>{
            this.onBeforeComposeObservable.notifyObservers(this);
        });
        this._thinEffectLayer.onBeforeRenderMeshToEffect.add((mesh)=>{
            this.onBeforeRenderMeshToEffect.notifyObservers(mesh);
        });
        this._thinEffectLayer.onAfterRenderMeshToEffect.add((mesh)=>{
            this.onAfterRenderMeshToEffect.notifyObservers(mesh);
        });
        this._thinEffectLayer.onAfterComposeObservable.add(()=>{
            this.onAfterComposeObservable.notifyObservers(this);
        });
    }
    get _shadersLoaded() {
        return this._thinEffectLayer._shadersLoaded;
    }
    set _shadersLoaded(value) {
        this._thinEffectLayer._shadersLoaded = value;
    }
    /**
     * Number of times _internalRender will be called. Some effect layers need to render the mesh several times, so they should override this method with the number of times the mesh should be rendered
     * @returns Number of times a mesh must be rendered in the layer
     */ _numInternalDraws() {
        return this._internalThinEffectLayer ? 1 : this._thinEffectLayer._numInternalDraws();
    }
    /**
     * Initializes the effect layer with the required options.
     * @param options Sets of none mandatory options to use with the layer (see IEffectLayerOptions for more information)
     */ _init(options) {
        // Adapt options
        this._effectLayerOptions = {
            mainTextureRatio: 0.5,
            alphaBlendingMode: 2,
            camera: null,
            renderingGroupId: -1,
            mainTextureType: 0,
            generateStencilBuffer: false,
            ...options
        };
        this._setMainTextureSize();
        this._thinEffectLayer._init(options);
        this._createMainTexture();
        this._createTextureAndPostProcesses();
    }
    /**
     * Sets the main texture desired size which is the closest power of two
     * of the engine canvas size.
     */ _setMainTextureSize() {
        if (this._effectLayerOptions.mainTextureFixedSize) {
            this._mainTextureDesiredSize.width = this._effectLayerOptions.mainTextureFixedSize;
            this._mainTextureDesiredSize.height = this._effectLayerOptions.mainTextureFixedSize;
        } else {
            this._mainTextureDesiredSize.width = this._engine.getRenderWidth() * this._effectLayerOptions.mainTextureRatio;
            this._mainTextureDesiredSize.height = this._engine.getRenderHeight() * this._effectLayerOptions.mainTextureRatio;
            this._mainTextureDesiredSize.width = this._engine.needPOTTextures ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GetExponentOfTwo"])(this._mainTextureDesiredSize.width, this._maxSize) : this._mainTextureDesiredSize.width;
            this._mainTextureDesiredSize.height = this._engine.needPOTTextures ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GetExponentOfTwo"])(this._mainTextureDesiredSize.height, this._maxSize) : this._mainTextureDesiredSize.height;
        }
        this._mainTextureDesiredSize.width = Math.floor(this._mainTextureDesiredSize.width);
        this._mainTextureDesiredSize.height = Math.floor(this._mainTextureDesiredSize.height);
    }
    /**
     * Creates the main texture for the effect layer.
     */ _createMainTexture() {
        this._mainTexture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$renderTargetTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RenderTargetTexture"]("EffectLayerMainRTT", {
            width: this._mainTextureDesiredSize.width,
            height: this._mainTextureDesiredSize.height
        }, this._scene, {
            type: this._effectLayerOptions.mainTextureType,
            samplingMode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"].TRILINEAR_SAMPLINGMODE,
            generateStencilBuffer: this._effectLayerOptions.generateStencilBuffer,
            existingObjectRenderer: this._thinEffectLayer.objectRenderer
        });
        this._mainTexture.activeCamera = this._effectLayerOptions.camera;
        this._mainTexture.wrapU = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"].CLAMP_ADDRESSMODE;
        this._mainTexture.wrapV = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"].CLAMP_ADDRESSMODE;
        this._mainTexture.anisotropicFilteringLevel = 1;
        this._mainTexture.updateSamplingMode(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"].BILINEAR_SAMPLINGMODE);
        this._mainTexture.renderParticles = false;
        this._mainTexture.renderList = null;
        this._mainTexture.ignoreCameraViewport = true;
        this._mainTexture.onClearObservable.add((engine)=>{
            engine.clear(this.neutralColor, true, true, true);
        });
    }
    /**
     * Adds specific effects defines.
     * @param defines The defines to add specifics to.
     */ // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _addCustomEffectDefines(defines) {
    // Nothing to add by default.
    }
    /**
     * Checks for the readiness of the element composing the layer.
     * @param subMesh the mesh to check for
     * @param useInstances specify whether or not to use instances to render the mesh
     * @param emissiveTexture the associated emissive texture used to generate the glow
     * @returns true if ready otherwise, false
     */ _isReady(subMesh, useInstances, emissiveTexture) {
        return this._internalThinEffectLayer ? this._thinEffectLayer._internalIsSubMeshReady(subMesh, useInstances, emissiveTexture) : this._thinEffectLayer._isSubMeshReady(subMesh, useInstances, emissiveTexture);
    }
    async _importShadersAsync() {}
    _arePostProcessAndMergeReady() {
        return this._internalThinEffectLayer ? this._thinEffectLayer._internalIsLayerReady() : this._thinEffectLayer.isLayerReady();
    }
    /**
     * Checks if the layer is ready to be used.
     * @returns true if the layer is ready to be used
     */ isLayerReady() {
        return this._arePostProcessAndMergeReady() && this._mainTexture.isReady();
    }
    /**
     * Renders the glowing part of the scene by blending the blurred glowing meshes on top of the rendered scene.
     */ render() {
        if (!this._thinEffectLayer.compose()) {
            return;
        }
        // Handle size changes.
        this._setMainTextureSize();
        if ((this._mainTextureCreatedSize.width !== this._mainTextureDesiredSize.width || this._mainTextureCreatedSize.height !== this._mainTextureDesiredSize.height) && this._mainTextureDesiredSize.width !== 0 && this._mainTextureDesiredSize.height !== 0) {
            // Recreate RTT and post processes on size change.
            this.onSizeChangedObservable.notifyObservers(this);
            this._disposeTextureAndPostProcesses();
            this._createMainTexture();
            this._createTextureAndPostProcesses();
            this._mainTextureCreatedSize.width = this._mainTextureDesiredSize.width;
            this._mainTextureCreatedSize.height = this._mainTextureDesiredSize.height;
        }
    }
    /**
     * Determine if a given mesh will be used in the current effect.
     * @param mesh mesh to test
     * @returns true if the mesh will be used
     */ hasMesh(mesh) {
        return this._internalThinEffectLayer ? this._thinEffectLayer._internalHasMesh(mesh) : this._thinEffectLayer.hasMesh(mesh);
    }
    /**
     * Returns true if the layer contains information to display, otherwise false.
     * @returns true if the glow layer should be rendered
     */ shouldRender() {
        return this._internalThinEffectLayer ? this._thinEffectLayer._internalShouldRender() : this._thinEffectLayer.shouldRender();
    }
    /**
     * Returns true if the mesh should render, otherwise false.
     * @param mesh The mesh to render
     * @returns true if it should render otherwise false
     */ // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _shouldRenderMesh(mesh) {
        return this._internalThinEffectLayer ? true : this._thinEffectLayer._shouldRenderMesh(mesh);
    }
    /**
     * Returns true if the mesh can be rendered, otherwise false.
     * @param mesh The mesh to render
     * @param material The material used on the mesh
     * @returns true if it can be rendered otherwise false
     */ _canRenderMesh(mesh, material) {
        return this._internalThinEffectLayer ? this._thinEffectLayer._internalCanRenderMesh(mesh, material) : this._thinEffectLayer._canRenderMesh(mesh, material);
    }
    /**
     * Returns true if the mesh should render, otherwise false.
     * @returns true if it should render otherwise false
     */ _shouldRenderEmissiveTextureForMesh() {
        return true;
    }
    /**
     * Defines whether the current material of the mesh should be use to render the effect.
     * @param mesh defines the current mesh to render
     * @returns true if the mesh material should be use
     */ // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _useMeshMaterial(mesh) {
        return this._internalThinEffectLayer ? false : this._thinEffectLayer._useMeshMaterial(mesh);
    }
    /**
     * Rebuild the required buffers.
     * @internal Internal use only.
     */ _rebuild() {
        this._thinEffectLayer._rebuild();
    }
    /**
     * Dispose only the render target textures and post process.
     */ _disposeTextureAndPostProcesses() {
        this._mainTexture.dispose();
        for(let i = 0; i < this._postProcesses.length; i++){
            if (this._postProcesses[i]) {
                this._postProcesses[i].dispose();
            }
        }
        this._postProcesses = [];
        for(let i = 0; i < this._textures.length; i++){
            if (this._textures[i]) {
                this._textures[i].dispose();
            }
        }
        this._textures = [];
    }
    /**
     * Dispose the highlight layer and free resources.
     */ dispose() {
        this._thinEffectLayer.dispose();
        // Clean textures and post processes
        this._disposeTextureAndPostProcesses();
        // Remove from scene
        this._scene.removeEffectLayer(this);
        // Callback
        this.onDisposeObservable.clear();
        this.onBeforeRenderMainTextureObservable.clear();
        this.onBeforeComposeObservable.clear();
        this.onBeforeRenderMeshToEffect.clear();
        this.onAfterRenderMeshToEffect.clear();
        this.onAfterComposeObservable.clear();
        this.onSizeChangedObservable.clear();
    }
    /**
     * Gets the class name of the effect layer
     * @returns the string with the class name of the effect layer
     */ getClassName() {
        return "EffectLayer";
    }
    /**
     * Creates an effect layer from parsed effect layer data
     * @param parsedEffectLayer defines effect layer data
     * @param scene defines the current scene
     * @param rootUrl defines the root URL containing the effect layer information
     * @returns a parsed effect Layer
     */ static Parse(parsedEffectLayer, scene, rootUrl) {
        const effectLayerType = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tools"].Instantiate(parsedEffectLayer.customType);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return effectLayerType.Parse(parsedEffectLayer, scene, rootUrl);
    }
}
/**
 * @internal
 */ EffectLayer._SceneComponentInitialization = (_)=>{
    throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$devTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_WarnImport"])("EffectLayerSceneComponent");
};
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], EffectLayer.prototype, "name", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeAsColor4"])()
], EffectLayer.prototype, "neutralColor", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], EffectLayer.prototype, "isEnabled", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeAsCameraReference"])()
], EffectLayer.prototype, "camera", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], EffectLayer.prototype, "renderingGroupId", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], EffectLayer.prototype, "disableBoundingBoxesFromEffectLayer", null); //# sourceMappingURL=effectLayer.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Layers/effectLayerSceneComponent.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EffectLayerSceneComponent",
    ()=>EffectLayerSceneComponent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/camera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$sceneComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/sceneComponent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Layers$2f$effectLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Layers/effectLayer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/engineStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Loading$2f$Plugins$2f$babylonFileParser$2e$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Loading/Plugins/babylonFileParser.function.js [app-client] (ecmascript)");
;
;
;
;
;
// Adds the parser to the scene parsers.
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Loading$2f$Plugins$2f$babylonFileParser$2e$function$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AddParser"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$sceneComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SceneComponentConstants"].NAME_EFFECTLAYER, (parsedData, scene, container, rootUrl)=>{
    if (parsedData.effectLayers) {
        if (!container.effectLayers) {
            container.effectLayers = [];
        }
        for(let index = 0; index < parsedData.effectLayers.length; index++){
            const effectLayer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Layers$2f$effectLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EffectLayer"].Parse(parsedData.effectLayers[index], scene, rootUrl);
            container.effectLayers.push(effectLayer);
        }
    }
});
class EffectLayerSceneComponent {
    /**
     * Creates a new instance of the component for the given scene
     * @param scene Defines the scene to register the component in
     */ constructor(scene){
        /**
         * The component name helpful to identify the component in the list of scene components.
         */ this.name = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$sceneComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SceneComponentConstants"].NAME_EFFECTLAYER;
        this._renderEffects = false;
        this._needStencil = false;
        this._previousStencilState = false;
        this.scene = scene || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EngineStore"].LastCreatedScene;
        if (!this.scene) {
            return;
        }
        this._engine = this.scene.getEngine();
    }
    /**
     * Registers the component in a given scene
     */ register() {
        this.scene._isReadyForMeshStage.registerStep(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$sceneComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SceneComponentConstants"].STEP_ISREADYFORMESH_EFFECTLAYER, this, this._isReadyForMesh);
        this.scene._cameraDrawRenderTargetStage.registerStep(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$sceneComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SceneComponentConstants"].STEP_CAMERADRAWRENDERTARGET_EFFECTLAYER, this, this._renderMainTexture);
        this.scene._beforeCameraDrawStage.registerStep(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$sceneComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SceneComponentConstants"].STEP_BEFORECAMERADRAW_EFFECTLAYER, this, this._setStencil);
        this.scene._afterRenderingGroupDrawStage.registerStep(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$sceneComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SceneComponentConstants"].STEP_AFTERRENDERINGGROUPDRAW_EFFECTLAYER_DRAW, this, this._drawRenderingGroup);
        this.scene._afterCameraDrawStage.registerStep(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$sceneComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SceneComponentConstants"].STEP_AFTERCAMERADRAW_EFFECTLAYER, this, this._setStencilBack);
        this.scene._afterCameraDrawStage.registerStep(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$sceneComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SceneComponentConstants"].STEP_AFTERCAMERADRAW_EFFECTLAYER_DRAW, this, this._drawCamera);
    }
    /**
     * Rebuilds the elements related to this component in case of
     * context lost for instance.
     */ rebuild() {
        const layers = this.scene.effectLayers;
        for (const effectLayer of layers){
            effectLayer._rebuild();
        }
    }
    /**
     * Serializes the component data to the specified json object
     * @param serializationObject The object to serialize to
     */ serialize(serializationObject) {
        // Effect layers
        serializationObject.effectLayers = [];
        const layers = this.scene.effectLayers;
        for (const effectLayer of layers){
            if (effectLayer.serialize) {
                serializationObject.effectLayers.push(effectLayer.serialize());
            }
        }
    }
    /**
     * Adds all the elements from the container to the scene
     * @param container the container holding the elements
     */ addFromContainer(container) {
        if (!container.effectLayers) {
            return;
        }
        for (const o of container.effectLayers){
            this.scene.addEffectLayer(o);
        }
    }
    /**
     * Removes all the elements in the container from the scene
     * @param container contains the elements to remove
     * @param dispose if the removed element should be disposed (default: false)
     */ removeFromContainer(container, dispose) {
        if (!container.effectLayers) {
            return;
        }
        for (const o of container.effectLayers){
            this.scene.removeEffectLayer(o);
            if (dispose) {
                o.dispose();
            }
        }
    }
    /**
     * Disposes the component and the associated resources.
     */ dispose() {
        const layers = this.scene.effectLayers;
        while(layers.length){
            layers[0].dispose();
        }
    }
    _isReadyForMesh(mesh, hardwareInstancedRendering) {
        const currentRenderPassId = this._engine.currentRenderPassId;
        const layers = this.scene.effectLayers;
        for (const layer of layers){
            if (!layer.hasMesh(mesh)) {
                continue;
            }
            const renderTarget = layer._mainTexture;
            this._engine.currentRenderPassId = renderTarget.renderPassId;
            for (const subMesh of mesh.subMeshes){
                if (!layer.isReady(subMesh, hardwareInstancedRendering)) {
                    this._engine.currentRenderPassId = currentRenderPassId;
                    return false;
                }
            }
        }
        this._engine.currentRenderPassId = currentRenderPassId;
        return true;
    }
    _renderMainTexture(camera) {
        this._renderEffects = false;
        this._needStencil = false;
        let needRebind = false;
        const layers = this.scene.effectLayers;
        if (layers && layers.length > 0) {
            this._previousStencilState = this._engine.getStencilBuffer();
            for (const effectLayer of layers){
                if (effectLayer.shouldRender() && (!effectLayer.camera || effectLayer.camera.cameraRigMode === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Camera"].RIG_MODE_NONE && camera === effectLayer.camera || effectLayer.camera.cameraRigMode !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Camera"].RIG_MODE_NONE && effectLayer.camera._rigCameras.indexOf(camera) > -1)) {
                    this._renderEffects = true;
                    this._needStencil = this._needStencil || effectLayer.needStencil();
                    const renderTarget = effectLayer._mainTexture;
                    if (renderTarget._shouldRender()) {
                        this.scene.incrementRenderId();
                        renderTarget.render(false, false);
                        needRebind = true;
                    }
                }
            }
            this.scene.incrementRenderId();
        }
        return needRebind;
    }
    _setStencil() {
        // Activate effect Layer stencil
        if (this._needStencil) {
            this._engine.setStencilBuffer(true);
        }
    }
    _setStencilBack() {
        // Restore effect Layer stencil
        if (this._needStencil) {
            this._engine.setStencilBuffer(this._previousStencilState);
        }
    }
    _draw(renderingGroupId) {
        if (this._renderEffects) {
            this._engine.setDepthBuffer(false);
            const layers = this.scene.effectLayers;
            for(let i = 0; i < layers.length; i++){
                const effectLayer = layers[i];
                if (effectLayer.renderingGroupId === renderingGroupId) {
                    if (effectLayer.shouldRender()) {
                        effectLayer.render();
                    }
                }
            }
            this._engine.setDepthBuffer(true);
        }
    }
    _drawCamera() {
        if (this._renderEffects) {
            this._draw(-1);
        }
    }
    _drawRenderingGroup(index) {
        if (!this.scene._isInIntermediateRendering() && this._renderEffects) {
            this._draw(index);
        }
    }
}
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Layers$2f$effectLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EffectLayer"]._SceneComponentInitialization = (scene)=>{
    let component = scene._getComponent(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$sceneComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SceneComponentConstants"].NAME_EFFECTLAYER);
    if (!component) {
        component = new EffectLayerSceneComponent(scene);
        scene._addComponent(component);
    }
}; //# sourceMappingURL=effectLayerSceneComponent.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Layers/glowLayer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GlowLayer",
    ()=>GlowLayer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-client] (ecmascript)");
/* eslint-disable @typescript-eslint/no-unused-vars */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/decorators.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$scene$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/scene.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/texture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$renderTargetTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/renderTargetTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$PostProcesses$2f$blurPostProcess$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/PostProcesses/blurPostProcess.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Layers$2f$effectLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Layers/effectLayer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Layers$2f$effectLayerSceneComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Layers/effectLayerSceneComponent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/decorators.serialization.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/tools.functions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Layers$2f$thinGlowLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Layers/thinGlowLayer.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$scene$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"].prototype.getGlowLayerByName = function(name) {
    for(let index = 0; index < this.effectLayers?.length; index++){
        if (this.effectLayers[index].name === name && this.effectLayers[index].getEffectName() === GlowLayer.EffectName) {
            return this.effectLayers[index];
        }
    }
    return null;
};
class GlowLayer extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Layers$2f$effectLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EffectLayer"] {
    /**
     * Effect Name of the layer.
     */ static get EffectName() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Layers$2f$thinGlowLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinGlowLayer"].EffectName;
    }
    /**
     * Sets the kernel size of the blur.
     */ set blurKernelSize(value) {
        this._thinEffectLayer.blurKernelSize = value;
    }
    /**
     * Gets the kernel size of the blur.
     */ get blurKernelSize() {
        return this._thinEffectLayer.blurKernelSize;
    }
    /**
     * Sets the glow intensity.
     */ set intensity(value) {
        this._thinEffectLayer.intensity = value;
    }
    /**
     * Gets the glow intensity.
     */ get intensity() {
        return this._thinEffectLayer.intensity;
    }
    /**
     * Callback used to let the user override the color selection on a per mesh basis
     */ get customEmissiveColorSelector() {
        return this._thinEffectLayer.customEmissiveColorSelector;
    }
    set customEmissiveColorSelector(value) {
        this._thinEffectLayer.customEmissiveColorSelector = value;
    }
    /**
     * Callback used to let the user override the texture selection on a per mesh basis
     */ get customEmissiveTextureSelector() {
        return this._thinEffectLayer.customEmissiveTextureSelector;
    }
    set customEmissiveTextureSelector(value) {
        this._thinEffectLayer.customEmissiveTextureSelector = value;
    }
    /**
     * Instantiates a new glow Layer and references it to the scene.
     * @param name The name of the layer
     * @param scene The scene to use the layer in
     * @param options Sets of none mandatory options to use with the layer (see IGlowLayerOptions for more information)
     */ constructor(name, scene, options){
        super(name, scene, false, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Layers$2f$thinGlowLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinGlowLayer"](name, scene, options));
        // Adapt options
        this._options = {
            mainTextureRatio: GlowLayer.DefaultTextureRatio,
            blurKernelSize: 32,
            mainTextureFixedSize: undefined,
            camera: null,
            mainTextureSamples: 1,
            renderingGroupId: -1,
            ldrMerge: false,
            alphaBlendingMode: 1,
            mainTextureType: 0,
            generateStencilBuffer: false,
            ...options
        };
        // Initialize the layer
        this._init(this._options);
    }
    /**
     * Get the effect name of the layer.
     * @returns The effect name
     */ getEffectName() {
        return GlowLayer.EffectName;
    }
    /**
     * @internal
     * Create the merge effect. This is the shader use to blit the information back
     * to the main canvas at the end of the scene rendering.
     */ _createMergeEffect() {
        return this._thinEffectLayer._createMergeEffect();
    }
    /**
     * Creates the render target textures and post processes used in the glow layer.
     */ _createTextureAndPostProcesses() {
        this._thinEffectLayer._renderPassId = this._mainTexture.renderPassId;
        let blurTextureWidth = this._mainTextureDesiredSize.width;
        let blurTextureHeight = this._mainTextureDesiredSize.height;
        blurTextureWidth = this._engine.needPOTTextures ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GetExponentOfTwo"])(blurTextureWidth, this._maxSize) : blurTextureWidth;
        blurTextureHeight = this._engine.needPOTTextures ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GetExponentOfTwo"])(blurTextureHeight, this._maxSize) : blurTextureHeight;
        let textureType = 0;
        if (this._engine.getCaps().textureHalfFloatRender) {
            textureType = 2;
        } else {
            textureType = 0;
        }
        this._blurTexture1 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$renderTargetTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RenderTargetTexture"]("GlowLayerBlurRTT", {
            width: blurTextureWidth,
            height: blurTextureHeight
        }, this._scene, false, true, textureType);
        this._blurTexture1.wrapU = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"].CLAMP_ADDRESSMODE;
        this._blurTexture1.wrapV = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"].CLAMP_ADDRESSMODE;
        this._blurTexture1.updateSamplingMode(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"].BILINEAR_SAMPLINGMODE);
        this._blurTexture1.renderParticles = false;
        this._blurTexture1.ignoreCameraViewport = true;
        const blurTextureWidth2 = Math.floor(blurTextureWidth / 2);
        const blurTextureHeight2 = Math.floor(blurTextureHeight / 2);
        this._blurTexture2 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$renderTargetTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RenderTargetTexture"]("GlowLayerBlurRTT2", {
            width: blurTextureWidth2,
            height: blurTextureHeight2
        }, this._scene, false, true, textureType);
        this._blurTexture2.wrapU = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"].CLAMP_ADDRESSMODE;
        this._blurTexture2.wrapV = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"].CLAMP_ADDRESSMODE;
        this._blurTexture2.updateSamplingMode(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"].BILINEAR_SAMPLINGMODE);
        this._blurTexture2.renderParticles = false;
        this._blurTexture2.ignoreCameraViewport = true;
        this._textures = [
            this._blurTexture1,
            this._blurTexture2
        ];
        this._thinEffectLayer.bindTexturesForCompose = (effect)=>{
            effect.setTexture("textureSampler", this._blurTexture1);
            effect.setTexture("textureSampler2", this._blurTexture2);
            effect.setFloat("offset", this.intensity);
        };
        this._thinEffectLayer._createTextureAndPostProcesses();
        const thinBlurPostProcesses1 = this._thinEffectLayer._postProcesses[0];
        this._horizontalBlurPostprocess1 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$PostProcesses$2f$blurPostProcess$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlurPostProcess"]("GlowLayerHBP1", thinBlurPostProcesses1.direction, thinBlurPostProcesses1.kernel, {
            samplingMode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"].BILINEAR_SAMPLINGMODE,
            engine: this._scene.getEngine(),
            width: blurTextureWidth,
            height: blurTextureHeight,
            textureType,
            effectWrapper: thinBlurPostProcesses1
        });
        this._horizontalBlurPostprocess1.width = blurTextureWidth;
        this._horizontalBlurPostprocess1.height = blurTextureHeight;
        this._horizontalBlurPostprocess1.externalTextureSamplerBinding = true;
        this._horizontalBlurPostprocess1.onApplyObservable.add((effect)=>{
            effect.setTexture("textureSampler", this._mainTexture);
        });
        const thinBlurPostProcesses2 = this._thinEffectLayer._postProcesses[1];
        this._verticalBlurPostprocess1 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$PostProcesses$2f$blurPostProcess$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlurPostProcess"]("GlowLayerVBP1", thinBlurPostProcesses2.direction, thinBlurPostProcesses2.kernel, {
            samplingMode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"].BILINEAR_SAMPLINGMODE,
            engine: this._scene.getEngine(),
            width: blurTextureWidth,
            height: blurTextureHeight,
            textureType,
            effectWrapper: thinBlurPostProcesses2
        });
        const thinBlurPostProcesses3 = this._thinEffectLayer._postProcesses[2];
        this._horizontalBlurPostprocess2 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$PostProcesses$2f$blurPostProcess$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlurPostProcess"]("GlowLayerHBP2", thinBlurPostProcesses3.direction, thinBlurPostProcesses3.kernel, {
            samplingMode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"].BILINEAR_SAMPLINGMODE,
            engine: this._scene.getEngine(),
            width: blurTextureWidth2,
            height: blurTextureHeight2,
            textureType,
            effectWrapper: thinBlurPostProcesses3
        });
        this._horizontalBlurPostprocess2.width = blurTextureWidth2;
        this._horizontalBlurPostprocess2.height = blurTextureHeight2;
        this._horizontalBlurPostprocess2.externalTextureSamplerBinding = true;
        this._horizontalBlurPostprocess2.onApplyObservable.add((effect)=>{
            effect.setTexture("textureSampler", this._blurTexture1);
        });
        const thinBlurPostProcesses4 = this._thinEffectLayer._postProcesses[3];
        this._verticalBlurPostprocess2 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$PostProcesses$2f$blurPostProcess$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlurPostProcess"]("GlowLayerVBP2", thinBlurPostProcesses4.direction, thinBlurPostProcesses4.kernel, {
            samplingMode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"].BILINEAR_SAMPLINGMODE,
            engine: this._scene.getEngine(),
            width: blurTextureWidth2,
            height: blurTextureHeight2,
            textureType,
            effectWrapper: thinBlurPostProcesses4
        });
        this._postProcesses = [
            this._horizontalBlurPostprocess1,
            this._verticalBlurPostprocess1,
            this._horizontalBlurPostprocess2,
            this._verticalBlurPostprocess2
        ];
        this._postProcesses1 = [
            this._horizontalBlurPostprocess1,
            this._verticalBlurPostprocess1
        ];
        this._postProcesses2 = [
            this._horizontalBlurPostprocess2,
            this._verticalBlurPostprocess2
        ];
        this._mainTexture.samples = this._options.mainTextureSamples;
        this._mainTexture.onAfterUnbindObservable.add(()=>{
            const internalTexture = this._blurTexture1.renderTarget;
            if (internalTexture) {
                this._scene.postProcessManager.directRender(this._postProcesses1, internalTexture, true);
                const internalTexture2 = this._blurTexture2.renderTarget;
                if (internalTexture2) {
                    this._scene.postProcessManager.directRender(this._postProcesses2, internalTexture2, true);
                }
                this._engine.unBindFramebuffer(internalTexture2 ?? internalTexture, true);
            }
        });
        // Prevent autoClear.
        this._postProcesses.map((pp)=>{
            pp.autoClear = false;
        });
    }
    /**
     * Checks for the readiness of the element composing the layer.
     * @param subMesh the mesh to check for
     * @param useInstances specify whether or not to use instances to render the mesh
     * @returns true if ready otherwise, false
     */ isReady(subMesh, useInstances) {
        return this._thinEffectLayer.isReady(subMesh, useInstances);
    }
    /**
     * @returns whether or not the layer needs stencil enabled during the mesh rendering.
     */ needStencil() {
        return false;
    }
    /**
     * Returns true if the mesh can be rendered, otherwise false.
     * @param mesh The mesh to render
     * @param material The material used on the mesh
     * @returns true if it can be rendered otherwise false
     */ _canRenderMesh(mesh, material) {
        return this._thinEffectLayer._canRenderMesh(mesh, material);
    }
    /**
     * Implementation specific of rendering the generating effect on the main canvas.
     * @param effect The effect used to render through
     */ _internalRender(effect) {
        this._thinEffectLayer._internalCompose(effect);
    }
    /**
     * Sets the required values for both the emissive texture and and the main color.
     * @param mesh
     * @param subMesh
     * @param material
     */ _setEmissiveTextureAndColor(mesh, subMesh, material) {
        this._thinEffectLayer._setEmissiveTextureAndColor(mesh, subMesh, material);
    }
    /**
     * Returns true if the mesh should render, otherwise false.
     * @param mesh The mesh to render
     * @returns true if it should render otherwise false
     */ _shouldRenderMesh(mesh) {
        return this._thinEffectLayer._shouldRenderMesh(mesh);
    }
    /**
     * Adds specific effects defines.
     * @param defines The defines to add specifics to.
     */ _addCustomEffectDefines(defines) {
        this._thinEffectLayer._addCustomEffectDefines(defines);
    }
    /**
     * Add a mesh in the exclusion list to prevent it to impact or being impacted by the glow layer.
     * @param mesh The mesh to exclude from the glow layer
     */ addExcludedMesh(mesh) {
        this._thinEffectLayer.addExcludedMesh(mesh);
    }
    /**
     * Remove a mesh from the exclusion list to let it impact or being impacted by the glow layer.
     * @param mesh The mesh to remove
     */ removeExcludedMesh(mesh) {
        this._thinEffectLayer.removeExcludedMesh(mesh);
    }
    /**
     * Add a mesh in the inclusion list to impact or being impacted by the glow layer.
     * @param mesh The mesh to include in the glow layer
     */ addIncludedOnlyMesh(mesh) {
        this._thinEffectLayer.addIncludedOnlyMesh(mesh);
    }
    /**
     * Remove a mesh from the Inclusion list to prevent it to impact or being impacted by the glow layer.
     * @param mesh The mesh to remove
     */ removeIncludedOnlyMesh(mesh) {
        this._thinEffectLayer.removeIncludedOnlyMesh(mesh);
    }
    /**
     * Determine if a given mesh will be used in the glow layer
     * @param mesh The mesh to test
     * @returns true if the mesh will be highlighted by the current glow layer
     */ hasMesh(mesh) {
        return this._thinEffectLayer.hasMesh(mesh);
    }
    /**
     * Defines whether the current material of the mesh should be use to render the effect.
     * @param mesh defines the current mesh to render
     * @returns true if the material of the mesh should be use to render the effect
     */ _useMeshMaterial(mesh) {
        return this._thinEffectLayer._useMeshMaterial(mesh);
    }
    /**
     * Add a mesh to be rendered through its own material and not with emissive only.
     * @param mesh The mesh for which we need to use its material
     */ referenceMeshToUseItsOwnMaterial(mesh) {
        this._thinEffectLayer.referenceMeshToUseItsOwnMaterial(mesh);
    }
    /**
     * Remove a mesh from being rendered through its own material and not with emissive only.
     * @param mesh The mesh for which we need to not use its material
     */ unReferenceMeshFromUsingItsOwnMaterial(mesh) {
        this._thinEffectLayer.unReferenceMeshFromUsingItsOwnMaterial(mesh, this._mainTexture.renderPassId);
    }
    /**
     * Free any resources and references associated to a mesh.
     * Internal use
     * @param mesh The mesh to free.
     * @internal
     */ _disposeMesh(mesh) {
        this._thinEffectLayer._disposeMesh(mesh);
    }
    /**
     * Gets the class name of the effect layer
     * @returns the string with the class name of the effect layer
     */ getClassName() {
        return "GlowLayer";
    }
    /**
     * Serializes this glow layer
     * @returns a serialized glow layer object
     */ serialize() {
        const serializationObject = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SerializationHelper"].Serialize(this);
        serializationObject.customType = "BABYLON.GlowLayer";
        let index;
        // Included meshes
        serializationObject.includedMeshes = [];
        const includedOnlyMeshes = this._thinEffectLayer._includedOnlyMeshes;
        if (includedOnlyMeshes.length) {
            for(index = 0; index < includedOnlyMeshes.length; index++){
                const mesh = this._scene.getMeshByUniqueId(includedOnlyMeshes[index]);
                if (mesh) {
                    serializationObject.includedMeshes.push(mesh.id);
                }
            }
        }
        // Excluded meshes
        serializationObject.excludedMeshes = [];
        const excludedMeshes = this._thinEffectLayer._excludedMeshes;
        if (excludedMeshes.length) {
            for(index = 0; index < excludedMeshes.length; index++){
                const mesh = this._scene.getMeshByUniqueId(excludedMeshes[index]);
                if (mesh) {
                    serializationObject.excludedMeshes.push(mesh.id);
                }
            }
        }
        return serializationObject;
    }
    /**
     * Creates a Glow Layer from parsed glow layer data
     * @param parsedGlowLayer defines glow layer data
     * @param scene defines the current scene
     * @param rootUrl defines the root URL containing the glow layer information
     * @returns a parsed Glow Layer
     */ static Parse(parsedGlowLayer, scene, rootUrl) {
        const gl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SerializationHelper"].Parse(()=>new GlowLayer(parsedGlowLayer.name, scene, parsedGlowLayer.options), parsedGlowLayer, scene, rootUrl);
        let index;
        // Excluded meshes
        for(index = 0; index < parsedGlowLayer.excludedMeshes.length; index++){
            const mesh = scene.getMeshById(parsedGlowLayer.excludedMeshes[index]);
            if (mesh) {
                gl.addExcludedMesh(mesh);
            }
        }
        // Included meshes
        for(index = 0; index < parsedGlowLayer.includedMeshes.length; index++){
            const mesh = scene.getMeshById(parsedGlowLayer.includedMeshes[index]);
            if (mesh) {
                gl.addIncludedOnlyMesh(mesh);
            }
        }
        return gl;
    }
}
/**
 * The default blur kernel size used for the glow.
 */ GlowLayer.DefaultBlurKernelSize = 32;
/**
 * The default texture size ratio used for the glow.
 */ GlowLayer.DefaultTextureRatio = 0.5;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], GlowLayer.prototype, "blurKernelSize", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], GlowLayer.prototype, "intensity", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])("options")
], GlowLayer.prototype, "_options", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.GlowLayer", GlowLayer); //# sourceMappingURL=glowLayer.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Layers/highlightLayer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HighlightLayer",
    ()=>HighlightLayer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-client] (ecmascript)");
/* eslint-disable @typescript-eslint/no-unused-vars */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/decorators.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$scene$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/scene.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/texture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$renderTargetTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/renderTargetTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$PostProcesses$2f$postProcess$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/PostProcesses/postProcess.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$PostProcesses$2f$passPostProcess$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/PostProcesses/passPostProcess.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$PostProcesses$2f$blurPostProcess$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/PostProcesses/blurPostProcess.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Layers$2f$effectLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Layers/effectLayer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.color.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/decorators.serialization.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/tools.functions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Layers$2f$thinHighlightLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Layers/thinHighlightLayer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Layers$2f$thinEffectLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Layers/thinEffectLayer.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$scene$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"].prototype.getHighlightLayerByName = function(name) {
    for(let index = 0; index < this.effectLayers?.length; index++){
        if (this.effectLayers[index].name === name && this.effectLayers[index].getEffectName() === HighlightLayer.EffectName) {
            return this.effectLayers[index];
        }
    }
    return null;
};
/**
 * Special Glow Blur post process only blurring the alpha channel
 * It enforces keeping the most luminous color in the color channel.
 */ class GlowBlurPostProcess extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$PostProcesses$2f$postProcess$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PostProcess"] {
    constructor(name, direction, kernel, options, camera = null, samplingMode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"].BILINEAR_SAMPLINGMODE, engine, reusable){
        const localOptions = {
            uniforms: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Layers$2f$thinEffectLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinGlowBlurPostProcess"].Uniforms,
            size: typeof options === "number" ? options : undefined,
            camera,
            samplingMode,
            engine,
            reusable,
            ...options
        };
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Layers$2f$thinEffectLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinGlowBlurPostProcess"].FragmentUrl, {
            effectWrapper: typeof options === "number" || !options.effectWrapper ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Layers$2f$thinEffectLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinGlowBlurPostProcess"](name, engine, direction, kernel, localOptions) : undefined,
            ...localOptions
        });
        this.direction = direction;
        this.kernel = kernel;
        this.onApplyObservable.add(()=>{
            this._effectWrapper.textureWidth = this.width;
            this._effectWrapper.textureHeight = this.height;
        });
    }
    _gatherImports(useWebGPU, list) {
        if (useWebGPU) {
            this._webGPUReady = true;
            list.push(__turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/glowBlurPostProcess.fragment.js [app-client] (ecmascript, async loader)"));
        } else {
            list.push(__turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/glowBlurPostProcess.fragment.js [app-client] (ecmascript, async loader)"));
        }
        super._gatherImports(useWebGPU, list);
    }
}
class HighlightLayer extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Layers$2f$effectLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EffectLayer"] {
    /**
     * The neutral color used during the preparation of the glow effect.
     * This is black by default as the blend operation is a blend operation.
     */ static get NeutralColor() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Layers$2f$thinHighlightLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinHighlightLayer"].NeutralColor;
    }
    static set NeutralColor(value) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Layers$2f$thinHighlightLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinHighlightLayer"].NeutralColor = value;
    }
    /**
     * Specifies whether or not the inner glow is ACTIVE in the layer.
     */ get innerGlow() {
        return this._thinEffectLayer.innerGlow;
    }
    set innerGlow(value) {
        this._thinEffectLayer.innerGlow = value;
    }
    /**
     * Specifies whether or not the outer glow is ACTIVE in the layer.
     */ get outerGlow() {
        return this._thinEffectLayer.outerGlow;
    }
    set outerGlow(value) {
        this._thinEffectLayer.outerGlow = value;
    }
    /**
     * Specifies the horizontal size of the blur.
     */ set blurHorizontalSize(value) {
        this._thinEffectLayer.blurHorizontalSize = value;
    }
    /**
     * Specifies the vertical size of the blur.
     */ set blurVerticalSize(value) {
        this._thinEffectLayer.blurVerticalSize = value;
    }
    /**
     * Gets the horizontal size of the blur.
     */ get blurHorizontalSize() {
        return this._thinEffectLayer.blurHorizontalSize;
    }
    /**
     * Gets the vertical size of the blur.
     */ get blurVerticalSize() {
        return this._thinEffectLayer.blurVerticalSize;
    }
    /**
     * Instantiates a new highlight Layer and references it to the scene..
     * @param name The name of the layer
     * @param scene The scene to use the layer in
     * @param options Sets of none mandatory options to use with the layer (see IHighlightLayerOptions for more information)
     */ constructor(name, scene, options){
        super(name, scene, options !== undefined ? !!options.forceGLSL : false, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Layers$2f$thinHighlightLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinHighlightLayer"](name, scene, options));
        /**
         * An event triggered when the highlight layer is being blurred.
         */ this.onBeforeBlurObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * An event triggered when the highlight layer has been blurred.
         */ this.onAfterBlurObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        // Warn on stencil
        if (!this._engine.isStencilEnable) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Warn("Rendering the Highlight Layer requires the stencil to be active on the canvas. var engine = new Engine(canvas, antialias, { stencil: true }");
        }
        // Adapt options
        this._options = {
            mainTextureRatio: 0.5,
            blurTextureSizeRatio: 0.5,
            mainTextureFixedSize: 0,
            blurHorizontalSize: 1.0,
            blurVerticalSize: 1.0,
            alphaBlendingMode: 2,
            camera: null,
            renderingGroupId: -1,
            mainTextureType: 0,
            forceGLSL: false,
            isStroke: false,
            ...options
        };
        // Initialize the layer
        this._init(this._options);
        // Do not render as long as no meshes have been added
        this._shouldRender = false;
    }
    /**
     * Get the effect name of the layer.
     * @returns The effect name
     */ getEffectName() {
        return HighlightLayer.EffectName;
    }
    _numInternalDraws() {
        return 2; // we need two rendering, one for the inner glow and the other for the outer glow
    }
    /**
     * Create the merge effect. This is the shader use to blit the information back
     * to the main canvas at the end of the scene rendering.
     * @returns The effect created
     */ _createMergeEffect() {
        return this._thinEffectLayer._createMergeEffect();
    }
    /**
     * Creates the render target textures and post processes used in the highlight layer.
     */ _createTextureAndPostProcesses() {
        let blurTextureWidth = this._mainTextureDesiredSize.width * this._options.blurTextureSizeRatio;
        let blurTextureHeight = this._mainTextureDesiredSize.height * this._options.blurTextureSizeRatio;
        blurTextureWidth = this._engine.needPOTTextures ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GetExponentOfTwo"])(blurTextureWidth, this._maxSize) : blurTextureWidth;
        blurTextureHeight = this._engine.needPOTTextures ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GetExponentOfTwo"])(blurTextureHeight, this._maxSize) : blurTextureHeight;
        let textureType = 0;
        if (this._engine.getCaps().textureHalfFloatRender) {
            textureType = 2;
        } else {
            textureType = 0;
        }
        this._blurTexture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$renderTargetTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RenderTargetTexture"]("HighlightLayerBlurRTT", {
            width: blurTextureWidth,
            height: blurTextureHeight
        }, this._scene, false, true, textureType);
        this._blurTexture.wrapU = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"].CLAMP_ADDRESSMODE;
        this._blurTexture.wrapV = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"].CLAMP_ADDRESSMODE;
        this._blurTexture.anisotropicFilteringLevel = 16;
        this._blurTexture.updateSamplingMode(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"].TRILINEAR_SAMPLINGMODE);
        this._blurTexture.renderParticles = false;
        this._blurTexture.ignoreCameraViewport = true;
        this._textures = [
            this._blurTexture
        ];
        this._thinEffectLayer.bindTexturesForCompose = (effect)=>{
            effect.setTexture("textureSampler", this._blurTexture);
        };
        this._thinEffectLayer._createTextureAndPostProcesses();
        if (this._options.alphaBlendingMode === 2) {
            this._downSamplePostprocess = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$PostProcesses$2f$passPostProcess$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PassPostProcess"]("HighlightLayerPPP", {
                size: this._options.blurTextureSizeRatio,
                samplingMode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"].BILINEAR_SAMPLINGMODE,
                engine: this._scene.getEngine(),
                effectWrapper: this._thinEffectLayer._postProcesses[0]
            });
            this._downSamplePostprocess.externalTextureSamplerBinding = true;
            this._downSamplePostprocess.onApplyObservable.add((effect)=>{
                effect.setTexture("textureSampler", this._mainTexture);
            });
            this._horizontalBlurPostprocess = new GlowBlurPostProcess("HighlightLayerHBP", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](1.0, 0), this._options.blurHorizontalSize, {
                samplingMode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"].BILINEAR_SAMPLINGMODE,
                engine: this._scene.getEngine(),
                effectWrapper: this._thinEffectLayer._postProcesses[1]
            });
            this._horizontalBlurPostprocess.onApplyObservable.add((effect)=>{
                effect.setFloat2("screenSize", blurTextureWidth, blurTextureHeight);
            });
            this._verticalBlurPostprocess = new GlowBlurPostProcess("HighlightLayerVBP", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](0, 1.0), this._options.blurVerticalSize, {
                samplingMode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"].BILINEAR_SAMPLINGMODE,
                engine: this._scene.getEngine(),
                effectWrapper: this._thinEffectLayer._postProcesses[2]
            });
            this._verticalBlurPostprocess.onApplyObservable.add((effect)=>{
                effect.setFloat2("screenSize", blurTextureWidth, blurTextureHeight);
            });
            this._postProcesses = [
                this._downSamplePostprocess,
                this._horizontalBlurPostprocess,
                this._verticalBlurPostprocess
            ];
        } else {
            this._horizontalBlurPostprocess = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$PostProcesses$2f$blurPostProcess$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlurPostProcess"]("HighlightLayerHBP", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](1.0, 0), this._options.blurHorizontalSize / 2, {
                size: {
                    width: blurTextureWidth,
                    height: blurTextureHeight
                },
                samplingMode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"].BILINEAR_SAMPLINGMODE,
                engine: this._scene.getEngine(),
                textureType,
                effectWrapper: this._thinEffectLayer._postProcesses[0]
            });
            this._horizontalBlurPostprocess.width = blurTextureWidth;
            this._horizontalBlurPostprocess.height = blurTextureHeight;
            this._horizontalBlurPostprocess.externalTextureSamplerBinding = true;
            this._horizontalBlurPostprocess.onApplyObservable.add((effect)=>{
                effect.setTexture("textureSampler", this._mainTexture);
            });
            this._verticalBlurPostprocess = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$PostProcesses$2f$blurPostProcess$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlurPostProcess"]("HighlightLayerVBP", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](0, 1.0), this._options.blurVerticalSize / 2, {
                size: {
                    width: blurTextureWidth,
                    height: blurTextureHeight
                },
                samplingMode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"].BILINEAR_SAMPLINGMODE,
                engine: this._scene.getEngine(),
                textureType
            });
            this._postProcesses = [
                this._horizontalBlurPostprocess,
                this._verticalBlurPostprocess
            ];
        }
        this._mainTexture.onAfterUnbindObservable.add(()=>{
            this.onBeforeBlurObservable.notifyObservers(this);
            const internalTexture = this._blurTexture.renderTarget;
            if (internalTexture) {
                this._scene.postProcessManager.directRender(this._postProcesses, internalTexture, true);
                this._engine.unBindFramebuffer(internalTexture, true);
            }
            this.onAfterBlurObservable.notifyObservers(this);
        });
        // Prevent autoClear.
        this._postProcesses.map((pp)=>{
            pp.autoClear = false;
        });
    }
    /**
     * @returns whether or not the layer needs stencil enabled during the mesh rendering.
     */ needStencil() {
        return this._thinEffectLayer.needStencil();
    }
    /**
     * Checks for the readiness of the element composing the layer.
     * @param subMesh the mesh to check for
     * @param useInstances specify whether or not to use instances to render the mesh
     * @returns true if ready otherwise, false
     */ isReady(subMesh, useInstances) {
        return this._thinEffectLayer.isReady(subMesh, useInstances);
    }
    /**
     * Implementation specific of rendering the generating effect on the main canvas.
     * @param effect The effect used to render through
     * @param renderIndex
     */ _internalRender(effect, renderIndex) {
        this._thinEffectLayer._internalCompose(effect, renderIndex);
    }
    /**
     * @returns true if the layer contains information to display, otherwise false.
     */ shouldRender() {
        return this._thinEffectLayer.shouldRender();
    }
    /**
     * Returns true if the mesh should render, otherwise false.
     * @param mesh The mesh to render
     * @returns true if it should render otherwise false
     */ _shouldRenderMesh(mesh) {
        return this._thinEffectLayer._shouldRenderMesh(mesh);
    }
    /**
     * Returns true if the mesh can be rendered, otherwise false.
     * @param mesh The mesh to render
     * @param material The material used on the mesh
     * @returns true if it can be rendered otherwise false
     */ _canRenderMesh(mesh, material) {
        return this._thinEffectLayer._canRenderMesh(mesh, material);
    }
    /**
     * Adds specific effects defines.
     * @param defines The defines to add specifics to.
     */ _addCustomEffectDefines(defines) {
        this._thinEffectLayer._addCustomEffectDefines(defines);
    }
    /**
     * Sets the required values for both the emissive texture and and the main color.
     * @param mesh
     * @param subMesh
     * @param material
     */ _setEmissiveTextureAndColor(mesh, subMesh, material) {
        this._thinEffectLayer._setEmissiveTextureAndColor(mesh, subMesh, material);
    }
    /**
     * Add a mesh in the exclusion list to prevent it to impact or being impacted by the highlight layer.
     * @param mesh The mesh to exclude from the highlight layer
     */ addExcludedMesh(mesh) {
        this._thinEffectLayer.addExcludedMesh(mesh);
    }
    /**
     * Remove a mesh from the exclusion list to let it impact or being impacted by the highlight layer.
     * @param mesh The mesh to highlight
     */ removeExcludedMesh(mesh) {
        this._thinEffectLayer.removeExcludedMesh(mesh);
    }
    /**
     * Determine if a given mesh will be highlighted by the current HighlightLayer
     * @param mesh mesh to test
     * @returns true if the mesh will be highlighted by the current HighlightLayer
     */ hasMesh(mesh) {
        return this._thinEffectLayer.hasMesh(mesh);
    }
    /**
     * Add a mesh in the highlight layer in order to make it glow with the chosen color.
     * @param mesh The mesh to highlight
     * @param color The color of the highlight
     * @param glowEmissiveOnly Extract the glow from the emissive texture
     */ addMesh(mesh, color, glowEmissiveOnly = false) {
        this._thinEffectLayer.addMesh(mesh, color, glowEmissiveOnly);
    }
    /**
     * Remove a mesh from the highlight layer in order to make it stop glowing.
     * @param mesh The mesh to highlight
     */ removeMesh(mesh) {
        this._thinEffectLayer.removeMesh(mesh);
    }
    /**
     * Remove all the meshes currently referenced in the highlight layer
     */ removeAllMeshes() {
        this._thinEffectLayer.removeAllMeshes();
    }
    /**
     * Free any resources and references associated to a mesh.
     * Internal use
     * @param mesh The mesh to free.
     * @internal
     */ _disposeMesh(mesh) {
        this._thinEffectLayer._disposeMesh(mesh);
    }
    /**
     * Gets the class name of the effect layer
     * @returns the string with the class name of the effect layer
     */ getClassName() {
        return "HighlightLayer";
    }
    /**
     * Serializes this Highlight layer
     * @returns a serialized Highlight layer object
     */ serialize() {
        const serializationObject = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SerializationHelper"].Serialize(this);
        serializationObject.customType = "BABYLON.HighlightLayer";
        // Highlighted meshes
        serializationObject.meshes = [];
        const meshes = this._thinEffectLayer._meshes;
        if (meshes) {
            for(const m in meshes){
                const mesh = meshes[m];
                if (mesh) {
                    serializationObject.meshes.push({
                        glowEmissiveOnly: mesh.glowEmissiveOnly,
                        color: mesh.color.asArray(),
                        meshId: mesh.mesh.id
                    });
                }
            }
        }
        // Excluded meshes
        serializationObject.excludedMeshes = [];
        const excludedMeshes = this._thinEffectLayer._excludedMeshes;
        if (excludedMeshes) {
            for(const e in excludedMeshes){
                const excludedMesh = excludedMeshes[e];
                if (excludedMesh) {
                    serializationObject.excludedMeshes.push(excludedMesh.mesh.id);
                }
            }
        }
        return serializationObject;
    }
    /**
     * Creates a Highlight layer from parsed Highlight layer data
     * @param parsedHightlightLayer defines the Highlight layer data
     * @param scene defines the current scene
     * @param rootUrl defines the root URL containing the Highlight layer information
     * @returns a parsed Highlight layer
     */ static Parse(parsedHightlightLayer, scene, rootUrl) {
        const hl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SerializationHelper"].Parse(()=>new HighlightLayer(parsedHightlightLayer.name, scene, parsedHightlightLayer.options), parsedHightlightLayer, scene, rootUrl);
        let index;
        // Excluded meshes
        for(index = 0; index < parsedHightlightLayer.excludedMeshes.length; index++){
            const mesh = scene.getMeshById(parsedHightlightLayer.excludedMeshes[index]);
            if (mesh) {
                hl.addExcludedMesh(mesh);
            }
        }
        // Included meshes
        for(index = 0; index < parsedHightlightLayer.meshes.length; index++){
            const highlightedMesh = parsedHightlightLayer.meshes[index];
            const mesh = scene.getMeshById(highlightedMesh.meshId);
            if (mesh) {
                hl.addMesh(mesh, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color3"].FromArray(highlightedMesh.color), highlightedMesh.glowEmissiveOnly);
            }
        }
        return hl;
    }
}
/**
 * Effect Name of the highlight layer.
 */ HighlightLayer.EffectName = "HighlightLayer";
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], HighlightLayer.prototype, "innerGlow", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], HighlightLayer.prototype, "outerGlow", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], HighlightLayer.prototype, "blurHorizontalSize", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])()
], HighlightLayer.prototype, "blurVerticalSize", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])("options")
], HighlightLayer.prototype, "_options", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.HighlightLayer", HighlightLayer); //# sourceMappingURL=highlightLayer.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Layers/layerSceneComponent.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LayerSceneComponent",
    ()=>LayerSceneComponent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$sceneComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/sceneComponent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/engineStore.js [app-client] (ecmascript)");
;
;
class LayerSceneComponent {
    /**
     * Creates a new instance of the component for the given scene
     * @param scene Defines the scene to register the component in
     */ constructor(scene){
        /**
         * The component name helpful to identify the component in the list of scene components.
         */ this.name = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$sceneComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SceneComponentConstants"].NAME_LAYER;
        this.scene = scene || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EngineStore"].LastCreatedScene;
        if (!this.scene) {
            return;
        }
        this._engine = this.scene.getEngine();
    }
    /**
     * Registers the component in a given scene
     */ register() {
        this.scene._beforeCameraDrawStage.registerStep(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$sceneComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SceneComponentConstants"].STEP_BEFORECAMERADRAW_LAYER, this, this._drawCameraBackground);
        this.scene._afterCameraDrawStage.registerStep(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$sceneComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SceneComponentConstants"].STEP_AFTERCAMERADRAW_LAYER, this, this._drawCameraForegroundWithPostProcessing);
        this.scene._afterCameraPostProcessStage.registerStep(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$sceneComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SceneComponentConstants"].STEP_AFTERCAMERAPOSTPROCESS_LAYER, this, this._drawCameraForegroundWithoutPostProcessing);
        this.scene._beforeRenderTargetDrawStage.registerStep(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$sceneComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SceneComponentConstants"].STEP_BEFORERENDERTARGETDRAW_LAYER, this, this._drawRenderTargetBackground);
        this.scene._afterRenderTargetDrawStage.registerStep(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$sceneComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SceneComponentConstants"].STEP_AFTERRENDERTARGETDRAW_LAYER, this, this._drawRenderTargetForegroundWithPostProcessing);
        this.scene._afterRenderTargetPostProcessStage.registerStep(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$sceneComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SceneComponentConstants"].STEP_AFTERRENDERTARGETPOSTPROCESS_LAYER, this, this._drawRenderTargetForegroundWithoutPostProcessing);
    }
    /**
     * Rebuilds the elements related to this component in case of
     * context lost for instance.
     */ rebuild() {
        const layers = this.scene.layers;
        for (const layer of layers){
            layer._rebuild();
        }
    }
    /**
     * Disposes the component and the associated resources.
     */ dispose() {
        const layers = this.scene.layers;
        while(layers.length){
            layers[0].dispose();
        }
    }
    _draw(predicate) {
        const layers = this.scene.layers;
        if (layers.length) {
            this._engine.setDepthBuffer(false);
            for (const layer of layers){
                if (predicate(layer)) {
                    layer.render();
                }
            }
            this._engine.setDepthBuffer(true);
        }
    }
    _drawCameraPredicate(layer, isBackground, applyPostProcess, cameraLayerMask) {
        return !layer.renderOnlyInRenderTargetTextures && layer.isBackground === isBackground && layer.applyPostProcess === applyPostProcess && (layer.layerMask & cameraLayerMask) !== 0;
    }
    _drawCameraBackground(camera) {
        this._draw((layer)=>{
            return this._drawCameraPredicate(layer, true, true, camera.layerMask);
        });
    }
    _drawCameraForegroundWithPostProcessing(camera) {
        this._draw((layer)=>{
            return this._drawCameraPredicate(layer, false, true, camera.layerMask);
        });
    }
    _drawCameraForegroundWithoutPostProcessing(camera) {
        this._draw((layer)=>{
            return this._drawCameraPredicate(layer, false, false, camera.layerMask);
        });
    }
    _drawRenderTargetPredicate(layer, isBackground, applyPostProcess, cameraLayerMask, renderTargetTexture) {
        return layer.renderTargetTextures.length > 0 && layer.isBackground === isBackground && layer.applyPostProcess === applyPostProcess && layer.renderTargetTextures.indexOf(renderTargetTexture) > -1 && (layer.layerMask & cameraLayerMask) !== 0;
    }
    _drawRenderTargetBackground(renderTarget) {
        this._draw((layer)=>{
            return this._drawRenderTargetPredicate(layer, true, true, this.scene.activeCamera ? this.scene.activeCamera.layerMask : 0, renderTarget);
        });
    }
    _drawRenderTargetForegroundWithPostProcessing(renderTarget) {
        this._draw((layer)=>{
            return this._drawRenderTargetPredicate(layer, false, true, this.scene.activeCamera ? this.scene.activeCamera.layerMask : 0, renderTarget);
        });
    }
    _drawRenderTargetForegroundWithoutPostProcessing(renderTarget) {
        this._draw((layer)=>{
            return this._drawRenderTargetPredicate(layer, false, false, this.scene.activeCamera ? this.scene.activeCamera.layerMask : 0, renderTarget);
        });
    }
    /**
     * Adds all the elements from the container to the scene
     * @param container the container holding the elements
     */ addFromContainer(container) {
        if (!container.layers) {
            return;
        }
        for (const layer of container.layers){
            this.scene.layers.push(layer);
        }
    }
    /**
     * Removes all the elements in the container from the scene
     * @param container contains the elements to remove
     * @param dispose if the removed element should be disposed (default: false)
     */ removeFromContainer(container, dispose = false) {
        if (!container.layers) {
            return;
        }
        for (const layer of container.layers){
            const index = this.scene.layers.indexOf(layer);
            if (index !== -1) {
                this.scene.layers.splice(index, 1);
            }
            if (dispose) {
                layer.dispose();
            }
        }
    }
} //# sourceMappingURL=layerSceneComponent.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Layers/layer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Layer",
    ()=>Layer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.color.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/engineStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Buffers/buffer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$material$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/material.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/texture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$sceneComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/sceneComponent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Layers$2f$layerSceneComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Layers/layerSceneComponent.js [app-client] (ecmascript)");
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
class Layer {
    /**
     * Determines if the layer is drawn before (true) or after (false) post-processing.
     * If the layer is background, it is always before.
     */ set applyPostProcess(value) {
        this._applyPostProcess = value;
    }
    get applyPostProcess() {
        return this.isBackground || this._applyPostProcess;
    }
    /**
     * Back compatibility with callback before the onDisposeObservable existed.
     * The set callback will be triggered when the layer has been disposed.
     */ set onDispose(callback) {
        if (this._onDisposeObserver) {
            this.onDisposeObservable.remove(this._onDisposeObserver);
        }
        this._onDisposeObserver = this.onDisposeObservable.add(callback);
    }
    /**
     * Back compatibility with callback before the onBeforeRenderObservable existed.
     * The set callback will be triggered just before rendering the layer.
     */ set onBeforeRender(callback) {
        if (this._onBeforeRenderObserver) {
            this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver);
        }
        this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(callback);
    }
    /**
     * Back compatibility with callback before the onAfterRenderObservable existed.
     * The set callback will be triggered just after rendering the layer.
     */ set onAfterRender(callback) {
        if (this._onAfterRenderObserver) {
            this.onAfterRenderObservable.remove(this._onAfterRenderObserver);
        }
        this._onAfterRenderObserver = this.onAfterRenderObservable.add(callback);
    }
    /**
     * Gets the shader language used in this material.
     */ get shaderLanguage() {
        return this._shaderLanguage;
    }
    /**
     * Instantiates a new layer.
     * This represents a full screen 2d layer.
     * This can be useful to display a picture in the  background of your scene for instance.
     * @see https://www.babylonjs-playground.com/#08A2BS#1
     * @param name Define the name of the layer in the scene
     * @param imgUrl Define the url of the texture to display in the layer
     * @param scene Define the scene the layer belongs to
     * @param isBackground Defines whether the layer is displayed in front or behind the scene
     * @param color Defines a color for the layer
     * @param forceGLSL Use the GLSL code generation for the shader (even on WebGPU). Default is false
     */ constructor(/**
     * Define the name of the layer.
     */ name, imgUrl, scene, isBackground, color, forceGLSL = false){
        this.name = name;
        this._applyPostProcess = true;
        /**
         * Define the scale of the layer in order to zoom in out of the texture.
         */ this.scale = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](1, 1);
        /**
         * Define an offset for the layer in order to shift the texture.
         */ this.offset = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](0, 0);
        /**
         * Define the alpha blending mode used in the layer in case the texture or color has an alpha.
         */ this.alphaBlendingMode = 2;
        /**
         * Define a mask to restrict the layer to only some of the scene cameras.
         */ this.layerMask = 0x0fffffff;
        /**
         * Define the list of render target the layer is visible into.
         */ this.renderTargetTextures = [];
        /**
         * Define if the layer is only used in renderTarget or if it also
         * renders in the main frame buffer of the canvas.
         */ this.renderOnlyInRenderTargetTextures = false;
        /**
         * Define if the colors of the layer should be generated in linear space (default: false)
         */ this.convertToLinearSpace = false;
        /**
         * Define if the layer is enabled (ie. should be displayed). Default: true
         */ this.isEnabled = true;
        this._vertexBuffers = {};
        /**
         * An event triggered when the layer is disposed.
         */ this.onDisposeObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * An event triggered before rendering the scene
         */ this.onBeforeRenderObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * An event triggered after rendering the scene
         */ this.onAfterRenderObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        /** Shader language used by the material */ this._shaderLanguage = 0 /* ShaderLanguage.GLSL */ ;
        this._shadersLoaded = false;
        this.texture = imgUrl ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"](imgUrl, scene, true) : null;
        this.isBackground = isBackground === undefined ? true : isBackground;
        this.color = color === undefined ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color4"](1, 1, 1, 1) : color;
        this._scene = scene || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EngineStore"].LastCreatedScene;
        const engine = this._scene.getEngine();
        if (engine.isWebGPU && !forceGLSL && !Layer.ForceGLSL) {
            this._shaderLanguage = 1 /* ShaderLanguage.WGSL */ ;
        }
        let layerComponent = this._scene._getComponent(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$sceneComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SceneComponentConstants"].NAME_LAYER);
        if (!layerComponent) {
            layerComponent = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Layers$2f$layerSceneComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LayerSceneComponent"](this._scene);
            this._scene._addComponent(layerComponent);
        }
        this._scene.layers.push(this);
        this._drawWrapper = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$drawWrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DrawWrapper"](engine);
        // VBO
        const vertices = [];
        vertices.push(1, 1);
        vertices.push(-1, 1);
        vertices.push(-1, -1);
        vertices.push(1, -1);
        const vertexBuffer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VertexBuffer"](engine, vertices, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VertexBuffer"].PositionKind, false, false, 2);
        this._vertexBuffers[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VertexBuffer"].PositionKind] = vertexBuffer;
        this._createIndexBuffer();
    }
    _createIndexBuffer() {
        const engine = this._scene.getEngine();
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
    }
    /**
     * Checks if the layer is ready to be rendered
     * @returns true if the layer is ready. False otherwise.
     */ isReady() {
        const engine = this._scene.getEngine();
        let defines = "";
        if (this.alphaTest) {
            defines = "#define ALPHATEST";
        }
        if (this.texture) {
            if (this.texture.gammaSpace) {
                if (this.convertToLinearSpace) {
                    defines += "\n#define CONVERT_TO_LINEAR";
                }
            } else if (!this.convertToLinearSpace) {
                defines += "\n#define CONVERT_TO_GAMMA";
            }
        }
        if (this._previousDefines !== defines) {
            this._previousDefines = defines;
            this._drawWrapper.effect = engine.createEffect("layer", [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VertexBuffer"].PositionKind
            ], [
                "textureMatrix",
                "color",
                "scale",
                "offset"
            ], [
                "textureSampler"
            ], defines, undefined, undefined, undefined, undefined, this._shaderLanguage, this._shadersLoaded ? undefined : async ()=>{
                if (this._shaderLanguage === 1 /* ShaderLanguage.WGSL */ ) {
                    await Promise.all([
                        __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/layer.vertex.js [app-client] (ecmascript, async loader)"),
                        __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/layer.fragment.js [app-client] (ecmascript, async loader)")
                    ]);
                } else {
                    await Promise.all([
                        __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/layer.vertex.js [app-client] (ecmascript, async loader)"),
                        __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/layer.fragment.js [app-client] (ecmascript, async loader)")
                    ]);
                }
                this._shadersLoaded = true;
            });
        }
        const currentEffect = this._drawWrapper.effect;
        return !!currentEffect?.isReady() && (!this.texture || this.texture.isReady());
    }
    /**
     * Renders the layer in the scene.
     */ render() {
        if (!this.isEnabled) {
            return;
        }
        const engine = this._scene.getEngine();
        // Check
        if (!this.isReady()) {
            return;
        }
        const currentEffect = this._drawWrapper.effect;
        this.onBeforeRenderObservable.notifyObservers(this);
        // Render
        engine.enableEffect(this._drawWrapper);
        engine.setState(false);
        // Texture
        if (this.texture) {
            currentEffect.setTexture("textureSampler", this.texture);
            currentEffect.setMatrix("textureMatrix", this.texture.getTextureMatrix());
        }
        // Color
        currentEffect.setFloat4("color", this.color.r, this.color.g, this.color.b, this.color.a);
        // Scale / offset
        currentEffect.setVector2("offset", this.offset);
        currentEffect.setVector2("scale", this.scale);
        // VBOs
        engine.bindBuffers(this._vertexBuffers, this._indexBuffer, currentEffect);
        // Draw order
        if (!this.alphaTest) {
            engine.setAlphaMode(this.alphaBlendingMode);
            engine.drawElementsType(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$material$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Material"].TriangleFillMode, 0, 6);
            engine.setAlphaMode(0);
        } else {
            engine.drawElementsType(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$material$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Material"].TriangleFillMode, 0, 6);
        }
        this.onAfterRenderObservable.notifyObservers(this);
    }
    /**
     * Disposes and releases the associated resources.
     */ dispose() {
        const vertexBuffer = this._vertexBuffers[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VertexBuffer"].PositionKind];
        if (vertexBuffer) {
            vertexBuffer.dispose();
            this._vertexBuffers[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VertexBuffer"].PositionKind] = null;
        }
        if (this._indexBuffer) {
            this._scene.getEngine()._releaseBuffer(this._indexBuffer);
            this._indexBuffer = null;
        }
        if (this.texture) {
            this.texture.dispose();
            this.texture = null;
        }
        // Clean RTT list
        this.renderTargetTextures = [];
        // Remove from scene
        const index = this._scene.layers.indexOf(this);
        this._scene.layers.splice(index, 1);
        // Callback
        this.onDisposeObservable.notifyObservers(this);
        this.onDisposeObservable.clear();
        this.onAfterRenderObservable.clear();
        this.onBeforeRenderObservable.clear();
    }
}
/**
 * Force all the layers to compile to glsl even on WebGPU engines.
 * False by default. This is mostly meant for backward compatibility.
 */ Layer.ForceGLSL = false; //# sourceMappingURL=layer.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Layers/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Layers$2f$effectLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Layers/effectLayer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Layers$2f$effectLayerSceneComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Layers/effectLayerSceneComponent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Layers$2f$glowLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Layers/glowLayer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Layers$2f$highlightLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Layers/highlightLayer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Layers$2f$layer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Layers/layer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Layers$2f$layerSceneComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Layers/layerSceneComponent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Layers$2f$thinEffectLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Layers/thinEffectLayer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Layers$2f$thinGlowLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Layers/thinGlowLayer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Layers$2f$thinHighlightLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Layers/thinHighlightLayer.js [app-client] (ecmascript)");
// EffectLayer
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$glowMapGeneration$2e$fragment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/glowMapGeneration.fragment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$glowMapGeneration$2e$vertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/glowMapGeneration.vertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$glowMapGeneration$2e$fragment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/glowMapGeneration.fragment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$glowMapGeneration$2e$vertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/glowMapGeneration.vertex.js [app-client] (ecmascript)");
// Highlights
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$glowMapMerge$2e$fragment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/glowMapMerge.fragment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$glowMapMerge$2e$vertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/glowMapMerge.vertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$glowBlurPostProcess$2e$fragment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/glowBlurPostProcess.fragment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$glowMapMerge$2e$fragment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/glowMapMerge.fragment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$glowMapMerge$2e$vertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/glowMapMerge.vertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$glowBlurPostProcess$2e$fragment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/glowBlurPostProcess.fragment.js [app-client] (ecmascript)");
// Layers shaders
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$layer$2e$fragment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/layer.fragment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$layer$2e$vertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/layer.vertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$layer$2e$fragment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/layer.fragment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$layer$2e$vertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/layer.vertex.js [app-client] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Layers/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EffectLayer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Layers$2f$effectLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EffectLayer"],
    "EffectLayerSceneComponent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Layers$2f$effectLayerSceneComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EffectLayerSceneComponent"],
    "GlowLayer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Layers$2f$glowLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GlowLayer"],
    "HighlightLayer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Layers$2f$highlightLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HighlightLayer"],
    "Layer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Layers$2f$layer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Layer"],
    "LayerSceneComponent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Layers$2f$layerSceneComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LayerSceneComponent"],
    "ThinEffectLayer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Layers$2f$thinEffectLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinEffectLayer"],
    "ThinGlowBlurPostProcess",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Layers$2f$thinEffectLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinGlowBlurPostProcess"],
    "ThinGlowLayer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Layers$2f$thinGlowLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinGlowLayer"],
    "ThinHighlightLayer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Layers$2f$thinHighlightLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinHighlightLayer"],
    "glowBlurPostProcessPixelShader",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$glowBlurPostProcess$2e$fragment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["glowBlurPostProcessPixelShader"],
    "glowBlurPostProcessPixelShaderWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$glowBlurPostProcess$2e$fragment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["glowBlurPostProcessPixelShaderWGSL"],
    "glowMapGenerationPixelShader",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$glowMapGeneration$2e$fragment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["glowMapGenerationPixelShader"],
    "glowMapGenerationPixelShaderWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$glowMapGeneration$2e$fragment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["glowMapGenerationPixelShaderWGSL"],
    "glowMapGenerationVertexShader",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$glowMapGeneration$2e$vertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["glowMapGenerationVertexShader"],
    "glowMapGenerationVertexShaderWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$glowMapGeneration$2e$vertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["glowMapGenerationVertexShaderWGSL"],
    "glowMapMergePixelShader",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$glowMapMerge$2e$fragment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["glowMapMergePixelShader"],
    "glowMapMergePixelShaderWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$glowMapMerge$2e$fragment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["glowMapMergePixelShaderWGSL"],
    "glowMapMergeVertexShader",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$glowMapMerge$2e$vertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["glowMapMergeVertexShader"],
    "glowMapMergeVertexShaderWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$glowMapMerge$2e$vertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["glowMapMergeVertexShaderWGSL"],
    "layerPixelShader",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$layer$2e$fragment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["layerPixelShader"],
    "layerPixelShaderWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$layer$2e$fragment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["layerPixelShaderWGSL"],
    "layerVertexShader",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$layer$2e$vertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["layerVertexShader"],
    "layerVertexShaderWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$layer$2e$vertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["layerVertexShaderWGSL"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Layers$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Layers/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Layers$2f$effectLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Layers/effectLayer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Layers$2f$effectLayerSceneComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Layers/effectLayerSceneComponent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Layers$2f$glowLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Layers/glowLayer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Layers$2f$highlightLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Layers/highlightLayer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Layers$2f$layer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Layers/layer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Layers$2f$layerSceneComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Layers/layerSceneComponent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Layers$2f$thinEffectLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Layers/thinEffectLayer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Layers$2f$thinGlowLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Layers/thinGlowLayer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Layers$2f$thinHighlightLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Layers/thinHighlightLayer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$glowMapGeneration$2e$fragment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/glowMapGeneration.fragment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$glowMapGeneration$2e$vertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/glowMapGeneration.vertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$glowMapGeneration$2e$fragment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/glowMapGeneration.fragment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$glowMapGeneration$2e$vertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/glowMapGeneration.vertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$glowMapMerge$2e$fragment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/glowMapMerge.fragment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$glowMapMerge$2e$vertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/glowMapMerge.vertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$glowBlurPostProcess$2e$fragment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/glowBlurPostProcess.fragment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$glowMapMerge$2e$fragment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/glowMapMerge.fragment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$glowMapMerge$2e$vertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/glowMapMerge.vertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$glowBlurPostProcess$2e$fragment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/glowBlurPostProcess.fragment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$layer$2e$fragment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/layer.fragment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$layer$2e$vertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/layer.vertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$layer$2e$fragment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/layer.fragment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$layer$2e$vertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/layer.vertex.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=dcdbf_%40babylonjs_core_Layers_fa2ae557._.js.map