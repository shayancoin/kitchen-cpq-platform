(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Dual/currentScreenBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CurrentScreenBlock",
    ()=>CurrentScreenBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/texture.js [app-client] (ecmascript)");
;
;
;
;
;
class CurrentScreenBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * The name of the sampler to read the screen texture from.
     */ get samplerName() {
        return this._samplerName;
    }
    /**
     * Gets or sets the texture associated with the node
     */ get texture() {
        return this._texture;
    }
    set texture(value) {
        this._texture = value;
    }
    /**
     * Create a new CurrentScreenBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].VertexAndFragment);
        this._samplerName = "textureSampler";
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
        this._inputs[0]._prioritizeVertex = false;
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "CurrentScreenBlock";
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
        state._excludeVariableName(this.samplerName);
    }
    get target() {
        if (!this.uv.isConnected) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].VertexAndFragment;
        }
        if (this.uv.sourceBlock.isInput) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].VertexAndFragment;
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment;
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
    _getMainUvName(state) {
        return "vMain" + this.uv.associatedVariableName;
    }
    _injectVertexCode(state) {
        const uvInput = this.uv;
        if (uvInput.connectedPoint.ownerBlock.isInput) {
            const uvInputOwnerBlock = uvInput.connectedPoint.ownerBlock;
            if (!uvInputOwnerBlock.isAttribute) {
                state._emitUniformFromString(uvInput.associatedVariableName, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector2);
            }
        }
        state.compilationString += `${this._mainUVName} = ${uvInput.associatedVariableName}.xy;\n`;
        if (!this._outputs.some((o)=>o.isConnectedInVertexShader)) {
            return;
        }
        this._writeTextureRead(state, true);
        for (const output of this._outputs){
            if (output.hasEndpoints) {
                this._writeOutput(state, output, output.name, true);
            }
        }
    }
    _writeTextureRead(state, vertexMode = false) {
        const uvInput = this.uv;
        if (vertexMode) {
            if (state.target === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment) {
                return;
            }
            const textureReadFunc = state.shaderLanguage === 0 /* ShaderLanguage.GLSL */  ? `texture2D(${this.samplerName},` : `textureSampleLevel(${this.samplerName}, ${this.samplerName + `Sampler`},`;
            const complement = state.shaderLanguage === 0 /* ShaderLanguage.GLSL */  ? "" : ", 0";
            state.compilationString += `${state._declareLocalVar(this._tempTextureRead, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4)} = ${textureReadFunc} ${uvInput.associatedVariableName}${complement});\n`;
            return;
        }
        const textureReadFunc = state.shaderLanguage === 0 /* ShaderLanguage.GLSL */  ? `texture2D(${this.samplerName},` : `textureSample(${this.samplerName}, ${this.samplerName + `Sampler`},`;
        if (this.uv.ownerBlock.target === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment) {
            state.compilationString += `${state._declareLocalVar(this._tempTextureRead, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4)} = ${textureReadFunc} ${uvInput.associatedVariableName});\n`;
            return;
        }
        state.compilationString += `${state._declareLocalVar(this._tempTextureRead, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4)} = ${textureReadFunc} ${this._mainUVName});\n`;
    }
    _writeOutput(state, output, swizzle, vertexMode = false) {
        if (vertexMode) {
            if (state.target === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment) {
                return;
            }
            state.compilationString += `${state._declareOutput(output)} = ${this._tempTextureRead}.${swizzle};\n`;
            return;
        }
        if (this.uv.ownerBlock.target === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment) {
            state.compilationString += `${state._declareOutput(output)} = ${this._tempTextureRead}.${swizzle};\n`;
            return;
        }
        state.compilationString += `${state._declareOutput(output)} = ${this._tempTextureRead}.${swizzle};\n`;
        state.compilationString += `#ifdef ${this._linearDefineName}\n`;
        state.compilationString += `${output.associatedVariableName} = toGammaSpace(${output.associatedVariableName});\n`;
        state.compilationString += `#endif\n`;
        state.compilationString += `#ifdef ${this._gammaDefineName}\n`;
        state.compilationString += `${output.associatedVariableName} = toLinearSpace(${output.associatedVariableName});\n`;
        state.compilationString += `#endif\n`;
    }
    _emitUvAndSampler(state) {
        state._emitVaryingFromString(this._mainUVName, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector2);
        state._emit2DSampler(this.samplerName);
    }
    _buildBlock(state) {
        super._buildBlock(state);
        this._tempTextureRead = state._getFreeVariableName("tempTextureRead");
        if (state.sharedData.blockingBlocks.indexOf(this) < 0) {
            state.sharedData.blockingBlocks.push(this);
        }
        if (state.sharedData.textureBlocks.indexOf(this) < 0) {
            state.sharedData.textureBlocks.push(this);
        }
        if (state.sharedData.blocksWithDefines.indexOf(this) < 0) {
            state.sharedData.blocksWithDefines.push(this);
        }
        this._mainUVName = this._getMainUvName(state);
        this._emitUvAndSampler(state);
        if (state.target !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment) {
            // Vertex
            this._injectVertexCode(state);
            return;
        }
        // Fragment
        if (!this._outputs.some((o)=>o.isConnectedInFragmentShader)) {
            return;
        }
        this._linearDefineName = state._getFreeDefineName("ISLINEAR");
        this._gammaDefineName = state._getFreeDefineName("ISGAMMA");
        const comments = `//${this.name}`;
        state._emitFunctionFromInclude("helperFunctions", comments);
        this._writeTextureRead(state);
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
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.CurrentScreenBlock", CurrentScreenBlock); //# sourceMappingURL=currentScreenBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Dual/imageSourceBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ImageSourceBlock",
    ()=>ImageSourceBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/texture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterial.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialConnectionPointCustomObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialConnectionPointCustomObject.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/engineStore.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
class ImageSourceBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * Gets or sets the texture associated with the node
     */ get texture() {
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
     * Gets the sampler name associated with this image source
     */ get samplerName() {
        return this._samplerName;
    }
    /**
     * Creates a new ImageSourceBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].VertexAndFragment);
        this.registerOutput("source", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Object, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].VertexAndFragment, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialConnectionPointCustomObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialConnectionPointCustomObject"]("source", this, 1 /* NodeMaterialConnectionPointDirection.Output */ , ImageSourceBlock, "ImageSourceBlock"));
        this.registerOutput("dimensions", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector2);
    }
    bind(effect, _nodeMaterial) {
        if (!this.texture) {
            return;
        }
        effect.setTexture(this._samplerName, this.texture);
    }
    isReady() {
        if (this.texture && !this.texture.isReadyOrNotBlocking()) {
            return false;
        }
        return true;
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "ImageSourceBlock";
    }
    /**
     * Gets the output component
     */ get source() {
        return this._outputs[0];
    }
    /**
     * Gets the dimension component
     */ get dimensions() {
        return this._outputs[1];
    }
    _buildBlock(state) {
        super._buildBlock(state);
        if (state.target === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Vertex) {
            this._samplerName = state._getFreeVariableName(this.name);
            // Declarations
            state.sharedData.blockingBlocks.push(this);
            state.sharedData.textureBlocks.push(this);
            state.sharedData.bindableBlocks.push(this);
        }
        if (this.dimensions.isConnected) {
            let affect = "";
            if (state.shaderLanguage === 1 /* ShaderLanguage.WGSL */ ) {
                affect = `vec2f(textureDimensions(${this._samplerName}, 0).xy)`;
            } else {
                affect = `vec2(textureSize(${this._samplerName}, 0).xy)`;
            }
            state.compilationString += `${state._declareOutput(this.dimensions)} = ${affect};\n`;
        }
        if (this._texture?._texture?.is2DArray) {
            state._emit2DArraySampler(this._samplerName);
        } else {
            state._emit2DSampler(this._samplerName);
        }
        return this;
    }
    _dumpPropertiesCode(ignoreTexture = false) {
        let codeString = super._dumpPropertiesCode();
        if (!this.texture || ignoreTexture) {
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
    serialize(ignoreTexture = false) {
        const serializationObject = super.serialize();
        if (!ignoreTexture && this.texture && (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterial"].AllowSerializationOfRenderTargetTextures || !this.texture.isRenderTarget) && this.texture.getClassName() !== "VideoTexture") {
            serializationObject.texture = this.texture.serialize();
        }
        return serializationObject;
    }
    _deserialize(serializationObject, scene, rootUrl, urlRewriter) {
        super._deserialize(serializationObject, scene, rootUrl, urlRewriter);
        if (serializationObject.texture && !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterial"].IgnoreTexturesAtLoadTime) {
            if (serializationObject.texture.url !== undefined) {
                if (serializationObject.texture.url.indexOf("data:") === 0) {
                    rootUrl = "";
                } else if (urlRewriter) {
                    serializationObject.texture.url = urlRewriter(serializationObject.texture.url);
                    serializationObject.texture.name = serializationObject.texture.url;
                }
            }
            if (serializationObject.texture.base64String || serializationObject.texture.url !== undefined) {
                this.texture = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"].Parse(serializationObject.texture, scene, rootUrl);
            }
        }
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.ImageSourceBlock", ImageSourceBlock); //# sourceMappingURL=imageSourceBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Dual/smartFilterTextureBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SmartFilterTextureBlock",
    ()=>SmartFilterTextureBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$currentScreenBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Dual/currentScreenBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$inputBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Input/inputBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$smartFilterFragmentOutputBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Fragment/smartFilterFragmentOutputBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialConnectionPointCustomObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialConnectionPointCustomObject.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$imageSourceBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Dual/imageSourceBlock.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
class SmartFilterTextureBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$currentScreenBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CurrentScreenBlock"] {
    /**
     * Gets the sampler name associated with this texture
     */ get samplerName() {
        if (this.source.connectedPoint) {
            return this.source.connectedPoint.ownerBlock.samplerName;
        }
        return this._samplerName;
    }
    /**
     * Gets or sets the texture associated with this block
     */ get texture() {
        if (this.source.connectedPoint) {
            return this.source.connectedPoint.ownerBlock.texture;
        }
        return this._texture;
    }
    set texture(value) {
        this._texture = value;
    }
    /**
     * Create a new SmartFilterTextureBlock
     * @param name defines the block name
     */ constructor(name){
        super(name);
        this._firstInit = true;
        /**
         * A boolean indicating whether this block should be the main input for the SFE pipeline.
         * If true, it can be used in SFE for auto-disabling.
         */ this.isMainInput = false;
        this.registerInput("source", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Object, true, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].VertexAndFragment, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialConnectionPointCustomObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialConnectionPointCustomObject"]("source", this, 0 /* NodeMaterialConnectionPointDirection.Input */ , __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$imageSourceBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImageSourceBlock"], "ImageSourceBlock"));
    }
    /**
     * Gets the source input component
     */ get source() {
        return this._inputs[1];
    }
    /**
     * Gets a boolean indicating that this block is linked to an ImageSourceBlock
     */ get hasImageSource() {
        return this.source.isConnected;
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "SmartFilterTextureBlock";
    }
    /**
     * Initialize the block and prepare the context for build
     * @param state defines the state that will be used for the build
     */ initialize(state) {
        if (this._firstInit) {
            this._samplerName = state._getFreeVariableName(this.name);
            this._firstInit = false;
        }
    }
    _getMainUvName(state) {
        // Get the ScreenUVBlock's name, which is required for SFE and should be vUV.
        // NOTE: In the future, when we move to vertex shaders, update this to check for the nearest vec2 varying output.
        const screenUv = state.sharedData.nodeMaterial.getInputBlockByPredicate((b)=>b.isAttribute && b.name === "postprocess_uv");
        if (!screenUv || !screenUv.isAnAncestorOf(this)) {
            state.sharedData.raiseBuildError("SmartFilterTextureBlock: 'postprocess_uv' attribute from ScreenUVBlock is required.");
            return "";
        }
        return screenUv.associatedVariableName;
    }
    _emitUvAndSampler(state) {
        if (state.target === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment) {
            // Wrap the varying in a define, as it won't be needed in SFE.
            state._emitVaryingFromString(this._mainUVName, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector2, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$smartFilterFragmentOutputBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SfeModeDefine"], true);
            if (!this.hasImageSource) {
                // Append `// main` to denote this as the main input texture to composite
                const annotation = this.isMainInput ? "// main" : undefined;
                state._emit2DSampler(this._samplerName, undefined, undefined, annotation);
            }
        }
    }
    autoConfigure(material, additionalFilteringInfo = ()=>true) {
        if (!this.uv.isConnected) {
            let uvInput = material.getInputBlockByPredicate((b)=>b.isAttribute && b.name === "postprocess_uv" && additionalFilteringInfo(b));
            if (!uvInput) {
                uvInput = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$inputBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputBlock"]("uv");
                uvInput.setAsAttribute("postprocess_uv");
            }
            uvInput.output.connectTo(this.uv);
        }
    }
    _postBuildBlock() {
        this._firstInit = true;
    }
    serialize() {
        const serializationObject = super.serialize();
        serializationObject.isMainInput = this.isMainInput;
        return serializationObject;
    }
    _deserialize(serializationObject, scene, rootUrl) {
        super._deserialize(serializationObject, scene, rootUrl);
        this.isMainInput = serializationObject.isMainInput;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.SmartFilterTextureBlock", SmartFilterTextureBlock); //# sourceMappingURL=smartFilterTextureBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Dual/fogBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FogBlock",
    ()=>FogBlock
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
class FogBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * Create a new FogBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].VertexAndFragment, false);
        // Vertex
        this.registerInput("worldPosition", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4, false, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Vertex);
        this.registerInput("view", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Matrix, false, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Vertex);
        // Fragment
        this.registerInput("input", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].AutoDetect, false, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this.registerInput("fogColor", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].AutoDetect, false, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this.registerOutput("output", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color3, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this.input.addExcludedConnectionPointFromAllowedTypes(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color3 | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3 | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color4);
        this.fogColor.addExcludedConnectionPointFromAllowedTypes(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color3 | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3 | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color4);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "FogBlock";
    }
    /**
     * Gets the world position input component
     */ get worldPosition() {
        return this._inputs[0];
    }
    /**
     * Gets the view input component
     */ get view() {
        return this._inputs[1];
    }
    /**
     * Gets the color input component
     */ get input() {
        return this._inputs[2];
    }
    /**
     * Gets the fog color input component
     */ get fogColor() {
        return this._inputs[3];
    }
    /**
     * Gets the output component
     */ get output() {
        return this._outputs[0];
    }
    initialize(state) {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this._initShaderSourceAsync(state.shaderLanguage);
    }
    async _initShaderSourceAsync(shaderLanguage) {
        this._codeIsReady = false;
        if (shaderLanguage === 1 /* ShaderLanguage.WGSL */ ) {
            await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/fogFragmentDeclaration.js [app-client] (ecmascript, async loader)");
        } else {
            await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/fogFragmentDeclaration.js [app-client] (ecmascript, async loader)");
        }
        this._codeIsReady = true;
        this.onCodeIsReadyObservable.notifyObservers(this);
    }
    autoConfigure(material, additionalFilteringInfo = ()=>true) {
        if (!this.view.isConnected) {
            let viewInput = material.getInputBlockByPredicate((b)=>b.systemValue === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialSystemValues$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialSystemValues"].View && additionalFilteringInfo(b));
            if (!viewInput) {
                viewInput = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$inputBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputBlock"]("view");
                viewInput.setAsSystemValue(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialSystemValues$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialSystemValues"].View);
            }
            viewInput.output.connectTo(this.view);
        }
        if (!this.fogColor.isConnected) {
            let fogColorInput = material.getInputBlockByPredicate((b)=>b.systemValue === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialSystemValues$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialSystemValues"].FogColor && additionalFilteringInfo(b));
            if (!fogColorInput) {
                fogColorInput = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$inputBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputBlock"]("fogColor", undefined, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color3);
                fogColorInput.setAsSystemValue(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialSystemValues$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialSystemValues"].FogColor);
            }
            fogColorInput.output.connectTo(this.fogColor);
        }
    }
    prepareDefines(defines, nodeMaterial, mesh) {
        if (!mesh) {
            return;
        }
        const scene = mesh.getScene();
        defines.setValue("FOG", nodeMaterial.fogEnabled && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["GetFogState"])(mesh, scene));
    }
    bind(effect, nodeMaterial, mesh) {
        if (!mesh) {
            return;
        }
        const scene = mesh.getScene();
        effect.setFloat4(this._fogParameters, scene.fogMode, scene.fogStart, scene.fogEnd, scene.fogDensity);
    }
    _buildBlock(state) {
        super._buildBlock(state);
        if (state.target === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment) {
            state.sharedData.blocksWithDefines.push(this);
            state.sharedData.bindableBlocks.push(this);
            let replaceStrings = [];
            let prefix1 = "";
            let prefix2 = "";
            if (state.shaderLanguage === 1 /* ShaderLanguage.WGSL */ ) {
                replaceStrings = [
                    {
                        search: /fn CalcFogFactor\(\)/,
                        replace: "fn CalcFogFactor(vFogDistance: vec3f, vFogInfos: vec4f)"
                    },
                    {
                        search: /uniforms.vFogInfos/g,
                        replace: "vFogInfos"
                    },
                    {
                        search: /fragmentInputs.vFogDistance/g,
                        replace: "vFogDistance"
                    }
                ];
                prefix1 = "fragmentInputs.";
                prefix2 = "uniforms.";
            } else {
                replaceStrings = [
                    {
                        search: /float CalcFogFactor\(\)/,
                        replace: "float CalcFogFactor(vec3 vFogDistance, vec4 vFogInfos)"
                    }
                ];
            }
            state._emitFunctionFromInclude("fogFragmentDeclaration", `//${this.name}`, {
                removeUniforms: true,
                removeVaryings: true,
                removeIfDef: false,
                replaceStrings: replaceStrings
            });
            const tempFogVariablename = state._getFreeVariableName("fog");
            const color = this.input;
            const fogColor = this.fogColor;
            this._fogParameters = state._getFreeVariableName("fogParameters");
            const output = this._outputs[0];
            state._emitUniformFromString(this._fogParameters, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4);
            state.compilationString += `#ifdef FOG\n`;
            state.compilationString += `${state._declareLocalVar(tempFogVariablename, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float)} = CalcFogFactor(${prefix1}${this._fogDistanceName}, ${prefix2}${this._fogParameters});\n`;
            state.compilationString += state._declareOutput(output) + ` = ${tempFogVariablename} * ${color.associatedVariableName}.rgb + (1.0 - ${tempFogVariablename}) * ${fogColor.associatedVariableName}.rgb;\n`;
            state.compilationString += `#else\n${state._declareOutput(output)} =  ${color.associatedVariableName}.rgb;\n`;
            state.compilationString += `#endif\n`;
        } else {
            const worldPos = this.worldPosition;
            const view = this.view;
            this._fogDistanceName = state._getFreeVariableName("vFogDistance");
            state._emitVaryingFromString(this._fogDistanceName, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3);
            const prefix = state.shaderLanguage === 1 /* ShaderLanguage.WGSL */  ? "vertexOutputs." : "";
            state.compilationString += `${prefix}${this._fogDistanceName} = (${view.associatedVariableName} * ${worldPos.associatedVariableName}).xyz;\n`;
        }
        return this;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.FogBlock", FogBlock); //# sourceMappingURL=fogBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Dual/lightBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LightBlock",
    ()=>LightBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialSystemValues$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialSystemValues.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$inputBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Input/inputBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Decorators/nodeDecorator.js [app-client] (ecmascript)");
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
class LightBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    static _OnGenerateOnlyFragmentCodeChanged(block, _propertyName) {
        const that = block;
        if (that.worldPosition.isConnected) {
            that.generateOnlyFragmentCode = !that.generateOnlyFragmentCode;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Error("The worldPosition input must not be connected to be able to switch!");
            return false;
        }
        that._setTarget();
        return true;
    }
    _setTarget() {
        this._setInitialTarget(this.generateOnlyFragmentCode ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].VertexAndFragment);
        this.getInputByName("worldPosition").target = this.generateOnlyFragmentCode ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Vertex;
    }
    /**
     * Create a new LightBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].VertexAndFragment);
        this._lightId = 0;
        /** Indicates that no code should be generated in the vertex shader. Can be useful in some specific circumstances (like when doing ray marching for eg) */ this.generateOnlyFragmentCode = false;
        this._isUnique = true;
        this.registerInput("worldPosition", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4, false, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Vertex);
        this.registerInput("worldNormal", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4, false, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this.registerInput("cameraPosition", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3, false, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this.registerInput("glossiness", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float, true, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this.registerInput("glossPower", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float, true, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this.registerInput("diffuseColor", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color3, true, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this.registerInput("specularColor", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color3, true, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this.registerInput("view", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Matrix, true);
        this.registerOutput("diffuseOutput", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color3, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this.registerOutput("specularOutput", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color3, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this.registerOutput("shadow", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "LightBlock";
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
     * Gets the camera (or eye) position component
     */ get cameraPosition() {
        return this._inputs[2];
    }
    /**
     * Gets the glossiness component
     */ get glossiness() {
        return this._inputs[3];
    }
    /**
     * Gets the glossiness power component
     */ get glossPower() {
        return this._inputs[4];
    }
    /**
     * Gets the diffuse color component
     */ get diffuseColor() {
        return this._inputs[5];
    }
    /**
     * Gets the specular color component
     */ get specularColor() {
        return this._inputs[6];
    }
    /**
     * Gets the view matrix component
     */ get view() {
        return this._inputs[7];
    }
    /**
     * Gets the diffuse output component
     */ get diffuseOutput() {
        return this._outputs[0];
    }
    /**
     * Gets the specular output component
     */ get specularOutput() {
        return this._outputs[1];
    }
    /**
     * Gets the shadow output component
     */ get shadow() {
        return this._outputs[2];
    }
    initialize(state) {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this._initShaderSourceAsync(state.shaderLanguage);
        state._excludeVariableName("vViewDepth");
    }
    async _initShaderSourceAsync(shaderLanguage) {
        this._codeIsReady = false;
        if (shaderLanguage === 1 /* ShaderLanguage.WGSL */ ) {
            await Promise.all([
                __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/lightFragment.js [app-client] (ecmascript, async loader)"),
                __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/lightUboDeclaration.js [app-client] (ecmascript, async loader)"),
                __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/lightVxUboDeclaration.js [app-client] (ecmascript, async loader)"),
                __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/helperFunctions.js [app-client] (ecmascript, async loader)"),
                __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/lightsFragmentFunctions.js [app-client] (ecmascript, async loader)"),
                __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/shadowsFragmentFunctions.js [app-client] (ecmascript, async loader)"),
                __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/shadowsVertex.js [app-client] (ecmascript, async loader)")
            ]);
        } else {
            await Promise.all([
                __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/lightFragmentDeclaration.js [app-client] (ecmascript, async loader)"),
                __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/lightFragment.js [app-client] (ecmascript, async loader)"),
                __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/lightUboDeclaration.js [app-client] (ecmascript, async loader)"),
                __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/lightVxUboDeclaration.js [app-client] (ecmascript, async loader)"),
                __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/lightVxFragmentDeclaration.js [app-client] (ecmascript, async loader)"),
                __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/helperFunctions.js [app-client] (ecmascript, async loader)"),
                __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/lightsFragmentFunctions.js [app-client] (ecmascript, async loader)"),
                __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/shadowsFragmentFunctions.js [app-client] (ecmascript, async loader)"),
                __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/shadowsVertex.js [app-client] (ecmascript, async loader)")
            ]);
        }
        this._codeIsReady = true;
        this.onCodeIsReadyObservable.notifyObservers(this);
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
    prepareDefines(defines, nodeMaterial, mesh) {
        if (!mesh || !defines._areLightsDirty) {
            return;
        }
        const scene = mesh.getScene();
        if (!this.light) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareDefinesForLights"])(scene, mesh, defines, true, nodeMaterial.maxSimultaneousLights);
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
        state.samplers.push("areaLightsLTC1Sampler");
        state.samplers.push("areaLightsLTC2Sampler");
        for(let lightIndex = 0; lightIndex < nodeMaterial.maxSimultaneousLights; lightIndex++){
            if (!defines["LIGHT" + lightIndex]) {
                break;
            }
            const onlyUpdateBuffersList = state.uniforms.indexOf("vLightData" + lightIndex) >= 0;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrepareUniformsAndSamplersForLight"])(lightIndex, state.uniforms, state.samplers, defines["PROJECTEDLIGHTTEXTURE" + lightIndex], uniformBuffers, onlyUpdateBuffersList, defines["IESLIGHTTEXTURE" + lightIndex], defines["CLUSTLIGHT" + lightIndex]);
        }
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
    }
    _injectVertexCode(state) {
        const worldPos = this.worldPosition;
        const comments = `//${this.name}`;
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
            state.compilationString += (state.shaderLanguage === 1 /* ShaderLanguage.WGSL */  ? "vertexOutputs." : "") + `${worldPosVaryingName} = ${worldPos.associatedVariableName};\n`;
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
    _injectUBODeclaration(state) {
        const comments = `//${this.name}`;
        if (!this.light) {
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
    }
    _buildBlock(state) {
        super._buildBlock(state);
        const isWGSL = state.shaderLanguage === 1 /* ShaderLanguage.WGSL */ ;
        const addF = isWGSL ? "f" : "";
        const comments = `//${this.name}`;
        if (state.target !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment) {
            // Vertex
            this._injectVertexCode(state); // won't be executed if this.generateOnlyFragmentCode is true
            return;
        }
        if (this.generateOnlyFragmentCode) {
            state.sharedData.dynamicUniformBlocks.push(this);
        }
        // Fragment
        const accessor = isWGSL ? "fragmentInputs." : "";
        state.sharedData.forcedBindableBlocks.push(this);
        state.sharedData.blocksWithDefines.push(this);
        const worldPos = this.worldPosition;
        let worldPosVariableName = worldPos.associatedVariableName;
        if (this.generateOnlyFragmentCode) {
            worldPosVariableName = state._getFreeVariableName("globalWorldPos");
            state._emitFunction("light_globalworldpos", `${state._declareLocalVar(worldPosVariableName, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3, false, true)};\n`, comments);
            state.compilationString += `${worldPosVariableName} = ${worldPos.associatedVariableName}.xyz;\n`;
            state.compilationString += state._emitCodeFromInclude("shadowsVertex", comments, {
                repeatKey: "maxSimultaneousLights",
                substitutionVars: `worldPos,${worldPos.associatedVariableName}`
            });
        } else {
            worldPosVariableName = accessor + "v_" + worldPosVariableName + ".xyz";
        }
        state._emitFunctionFromInclude("helperFunctions", comments);
        let replaceString = {
            search: /vPositionW/g,
            replace: worldPosVariableName
        };
        if (isWGSL) {
            replaceString = {
                search: /fragmentInputs\.vPositionW/g,
                replace: worldPosVariableName
            };
        }
        state._emitFunctionFromInclude("lightsFragmentFunctions", comments, {
            replaceStrings: [
                replaceString
            ]
        });
        state._emitFunctionFromInclude("shadowsFragmentFunctions", comments, {
            replaceStrings: [
                replaceString
            ]
        });
        this._injectUBODeclaration(state);
        // Code
        if (this._lightId === 0) {
            if (state._registerTempVariable("viewDirectionW")) {
                state.compilationString += `${state._declareLocalVar("viewDirectionW", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3)} = normalize(${this.cameraPosition.associatedVariableName} - ${worldPosVariableName});\n`;
            }
            if (this.generateOnlyFragmentCode && this.view.isConnected) {
                state.compilationString += `${state._declareLocalVar("vViewDepth", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float)} = (${this.view.associatedVariableName} * ${worldPos.associatedVariableName}).z;\n`;
            }
            state.compilationString += isWGSL ? `var info: lightingInfo;\n` : `lightingInfo info;\n`;
            state.compilationString += `${state._declareLocalVar("shadow", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float)} = 1.;\n`;
            state.compilationString += `${state._declareLocalVar("aggShadow", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float)} = 0.;\n`;
            state.compilationString += `${state._declareLocalVar("numLights", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float)} = 0.;\n`;
            state.compilationString += `${state._declareLocalVar("glossiness", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float)} = ${this.glossiness.isConnected ? this.glossiness.associatedVariableName : "1.0"} * ${this.glossPower.isConnected ? this.glossPower.associatedVariableName : "1024.0"};\n`;
            state.compilationString += `${state._declareLocalVar("diffuseBase", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3)} = vec3${addF}(0., 0., 0.);\n`;
            state.compilationString += `${state._declareLocalVar("specularBase", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3)}  = vec3${addF}(0., 0., 0.);\n`;
            state.compilationString += `${state._declareLocalVar("normalW", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3)} = ${this.worldNormal.associatedVariableName}.xyz;\n`;
        }
        if (this.light) {
            let replaceString = [
                {
                    search: /vPositionW/g,
                    replace: worldPosVariableName + ".xyz"
                }
            ];
            if (isWGSL) {
                replaceString = [
                    {
                        search: /fragmentInputs\.vPositionW/g,
                        replace: worldPosVariableName + ".xyz"
                    },
                    {
                        search: /uniforms\.vReflectivityColor/g,
                        replace: "vReflectivityColor"
                    }
                ];
            }
            state.compilationString += state._emitCodeFromInclude("lightFragment", comments, {
                replaceStrings: [
                    {
                        search: /{X}/g,
                        replace: this._lightId.toString()
                    },
                    ...replaceString
                ]
            });
        } else {
            let substitutionVars = `vPositionW,${worldPosVariableName}.xyz`;
            if (isWGSL) {
                substitutionVars = `fragmentInputs.vPositionW,${worldPosVariableName}.xyz`;
                if (this.generateOnlyFragmentCode) {
                    substitutionVars += `,fragmentInputs.vViewDepth,vViewDepth`;
                }
            }
            state.compilationString += state._emitCodeFromInclude("lightFragment", comments, {
                repeatKey: "maxSimultaneousLights",
                substitutionVars: substitutionVars
            });
        }
        if (this._lightId === 0) {
            state.compilationString += `aggShadow = aggShadow / numLights;\n`;
        }
        const diffuseOutput = this.diffuseOutput;
        const specularOutput = this.specularOutput;
        state.compilationString += state._declareOutput(diffuseOutput) + ` = diffuseBase${this.diffuseColor.isConnected ? " * " + this.diffuseColor.associatedVariableName : ""};\n`;
        if (specularOutput.hasEndpoints) {
            state.compilationString += state._declareOutput(specularOutput) + ` = specularBase${this.specularColor.isConnected ? " * " + this.specularColor.associatedVariableName : ""};\n`;
        }
        if (this.shadow.hasEndpoints) {
            state.compilationString += state._declareOutput(this.shadow) + ` = aggShadow;\n`;
        }
        return this;
    }
    serialize() {
        const serializationObject = super.serialize();
        serializationObject.generateOnlyFragmentCode = this.generateOnlyFragmentCode;
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
        this.generateOnlyFragmentCode = serializationObject.generateOnlyFragmentCode;
        this._setTarget();
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("Generate only fragment code", 0 /* PropertyTypeForEdition.Boolean */ , "ADVANCED", {
        notifiers: {
            rebuild: true,
            update: true,
            onValidation: LightBlock._OnGenerateOnlyFragmentCodeChanged
        }
    })
], LightBlock.prototype, "generateOnlyFragmentCode", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.LightBlock", LightBlock); //# sourceMappingURL=lightBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Dual/textureBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TextureBlock",
    ()=>TextureBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterial.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$inputBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Input/inputBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/texture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialModes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialModes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$helperFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/helperFunctions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$imageSourceBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Dual/imageSourceBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialConnectionPointCustomObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialConnectionPointCustomObject.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/engineStore.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
class TextureBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
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
    static _IsPrePassTextureBlock(block) {
        return block?.getClassName() === "PrePassTextureBlock";
    }
    get _isSourcePrePass() {
        return TextureBlock._IsPrePassTextureBlock(this._imageSource);
    }
    /**
     * Gets the sampler name associated with this texture
     */ get samplerName() {
        if (this._imageSource) {
            if (!TextureBlock._IsPrePassTextureBlock(this._imageSource)) {
                return this._imageSource.samplerName;
            }
            if (this.source.connectedPoint) {
                return this._imageSource.getSamplerName(this.source.connectedPoint);
            }
        }
        return this._samplerName;
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
     * Create a new TextureBlock
     * @param name defines the block name
     * @param fragmentOnly
     */ constructor(name, fragmentOnly = false){
        super(name, fragmentOnly ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].VertexAndFragment);
        this._convertToGammaSpace = false;
        this._convertToLinearSpace = false;
        /**
         * Gets or sets a boolean indicating if multiplication of texture with level should be disabled
         */ this.disableLevelMultiplication = false;
        this._fragmentOnly = fragmentOnly;
        this.registerInput("uv", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].AutoDetect, false, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].VertexAndFragment);
        this.registerInput("source", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Object, true, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].VertexAndFragment, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialConnectionPointCustomObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialConnectionPointCustomObject"]("source", this, 0 /* NodeMaterialConnectionPointDirection.Input */ , __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$imageSourceBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImageSourceBlock"], "ImageSourceBlock"));
        this.registerInput("layer", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float, true);
        this.registerInput("lod", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float, true);
        this.registerOutput("rgba", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color4, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Neutral);
        this.registerOutput("rgb", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color3, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Neutral);
        this.registerOutput("r", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Neutral);
        this.registerOutput("g", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Neutral);
        this.registerOutput("b", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Neutral);
        this.registerOutput("a", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Neutral);
        this.registerOutput("level", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Neutral);
        this._inputs[0].addExcludedConnectionPointFromAllowedTypes(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector2 | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3 | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4);
        this._inputs[0]._prioritizeVertex = !fragmentOnly;
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "TextureBlock";
    }
    /**
     * Gets the uv input component
     */ get uv() {
        return this._inputs[0];
    }
    /**
     * Gets the source input component
     */ get source() {
        return this._inputs[1];
    }
    /**
     * Gets the layer input component
     */ get layer() {
        return this._inputs[2];
    }
    /**
     * Gets the LOD input component
     */ get lod() {
        return this._inputs[3];
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
    _isTiedToFragment(input) {
        if (input.target === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment) {
            return true;
        }
        if (input.target === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Vertex) {
            return false;
        }
        if (input.target === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Neutral || input.target === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].VertexAndFragment) {
            const parentBlock = input.ownerBlock;
            if (parentBlock.target === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment) {
                return true;
            }
            for (const input of parentBlock.inputs){
                if (!input.isConnected) {
                    continue;
                }
                if (this._isTiedToFragment(input.connectedPoint)) {
                    return true;
                }
            }
        }
        return false;
    }
    _getEffectiveTarget() {
        if (this._fragmentOnly) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment;
        }
        // TextureBlock has a special optimizations for uvs that come from the vertex shaders as they can be packed into a single varyings.
        // But we need to detect uvs coming from fragment then
        if (!this.uv.isConnected) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].VertexAndFragment;
        }
        if (this.uv.sourceBlock.isInput) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].VertexAndFragment;
        }
        if (this._isTiedToFragment(this.uv.connectedPoint)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment;
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].VertexAndFragment;
    }
    get target() {
        return this._getEffectiveTarget();
    }
    set target(value) {}
    autoConfigure(material, additionalFilteringInfo = ()=>true) {
        if (!this.uv.isConnected) {
            if (material.mode === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialModes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialModes"].PostProcess) {
                const uvInput = material.getBlockByPredicate((b)=>b.name === "uv" && additionalFilteringInfo(b));
                if (uvInput) {
                    uvInput.connectTo(this);
                }
            } else if (material.mode !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialModes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialModes"].ProceduralTexture) {
                const attributeName = material.mode === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialModes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialModes"].Particle ? "particle_uv" : "uv";
                let uvInput = material.getInputBlockByPredicate((b)=>b.isAttribute && b.name === attributeName && additionalFilteringInfo(b));
                if (!uvInput) {
                    uvInput = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$inputBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputBlock"]("uv");
                    uvInput.setAsAttribute(attributeName);
                }
                uvInput.output.connectTo(this.uv);
            }
        }
    }
    initializeDefines(defines) {
        if (!defines._areTexturesDirty) {
            return;
        }
        if (this._mainUVDefineName !== undefined) {
            defines.setValue(this._mainUVDefineName, false, true);
        }
    }
    prepareDefines(defines) {
        if (!defines._areTexturesDirty) {
            return;
        }
        if (!this.texture || !this.texture.getTextureMatrix) {
            if (this._isMixed) {
                defines.setValue(this._defineName, false, true);
                defines.setValue(this._mainUVDefineName, true, true);
            }
            return;
        }
        const toGamma = this.convertToGammaSpace && this.texture && !this.texture.gammaSpace;
        const toLinear = this.convertToLinearSpace && this.texture && this.texture.gammaSpace;
        // Not a bug... Name defines the texture space not the required conversion
        defines.setValue(this._linearDefineName, toGamma, true);
        defines.setValue(this._gammaDefineName, toLinear, true);
        if (this._isMixed) {
            if (!this.texture.getTextureMatrix().isIdentityAs3x2()) {
                defines.setValue(this._defineName, true);
                if (defines[this._mainUVDefineName] == undefined) {
                    defines.setValue(this._mainUVDefineName, false, true);
                }
            } else {
                defines.setValue(this._defineName, false, true);
                defines.setValue(this._mainUVDefineName, true, true);
            }
        }
    }
    isReady() {
        if (this._isSourcePrePass) {
            return true;
        }
        if (this.texture && !this.texture.isReadyOrNotBlocking()) {
            return false;
        }
        return true;
    }
    bind(effect) {
        if (this._isSourcePrePass) {
            effect.setFloat(this._textureInfoName, 1);
        }
        if (!this.texture) {
            return;
        }
        if (this._isMixed) {
            effect.setFloat(this._textureInfoName, this.texture.level);
            effect.setMatrix(this._textureTransformName, this.texture.getTextureMatrix());
        }
        if (!this._imageSource) {
            effect.setTexture(this._samplerName, this.texture);
        }
    }
    get _isMixed() {
        return this.target !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment;
    }
    _injectVertexCode(state) {
        const uvInput = this.uv;
        // Inject code in vertex
        this._defineName = state._getFreeDefineName("UVTRANSFORM");
        this._mainUVDefineName = "VMAIN" + uvInput.declarationVariableName.toUpperCase();
        this._mainUVName = "vMain" + uvInput.declarationVariableName;
        this._transformedUVName = state._getFreeVariableName("transformedUV");
        this._textureTransformName = state._getFreeVariableName("textureTransform");
        this._textureInfoName = state._getFreeVariableName("textureInfoName");
        this.level.associatedVariableName = this._textureInfoName;
        state._emitVaryingFromString(this._transformedUVName, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector2, this._defineName);
        state._emitVaryingFromString(this._mainUVName, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector2, this._mainUVDefineName);
        state._emitUniformFromString(this._textureTransformName, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Matrix, this._defineName);
        const vec4 = state._getShaderType(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4);
        const vec2 = state._getShaderType(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector2);
        state.compilationString += `#ifdef ${this._defineName}\n`;
        state.compilationString += `${state._getVaryingName(this._transformedUVName)} = ${vec2}(${this._textureTransformName} * ${vec4}(${uvInput.associatedVariableName}.xy, 1.0, 0.0));\n`;
        state.compilationString += `#elif defined(${this._mainUVDefineName})\n`;
        let automaticPrefix = "";
        if (state.shaderLanguage === 1 /* ShaderLanguage.WGSL */ ) {
            if (uvInput.isConnectedToInputBlock && uvInput.associatedVariableName.indexOf("vertexInputs.") === -1) {
                automaticPrefix = "vertexInputs."; // Force the prefix
            }
        }
        state.compilationString += `${state._getVaryingName(this._mainUVName)} = ${automaticPrefix}${uvInput.associatedVariableName}.xy;\n`;
        state.compilationString += `#endif\n`;
        if (!this._outputs.some((o)=>o.isConnectedInVertexShader)) {
            return;
        }
        this._writeTextureRead(state, true);
        for (const output of this._outputs){
            if (output.hasEndpoints && output.name !== "level") {
                this._writeOutput(state, output, output.name, true);
            }
        }
    }
    _getUVW(uvName) {
        let coords = uvName;
        const is2DArrayTexture = this._texture?._texture?.is2DArray ?? false;
        const is3D = this._texture?._texture?.is3D ?? false;
        if (is2DArrayTexture) {
            const layerValue = this.layer.isConnected ? this.layer.associatedVariableName : "0";
            coords = `vec3(${uvName}, ${layerValue})`;
        } else if (is3D) {
            const layerValue = this.layer.isConnected ? this.layer.associatedVariableName : "0";
            coords = `vec3(${uvName}, ${layerValue})`;
        }
        return coords;
    }
    _samplerFunc(state) {
        if (state.shaderLanguage === 1 /* ShaderLanguage.WGSL */ ) {
            return state.target === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Vertex ? "textureSampleLevel" : "textureSample";
        }
        return this.lod.isConnected ? "texture2DLodEXT" : "texture2D";
    }
    get _samplerLodSuffix() {
        return this.lod.isConnected ? `, ${this.lod.associatedVariableName}` : "";
    }
    _generateTextureSample(uv, state) {
        if (state.shaderLanguage === 1 /* ShaderLanguage.WGSL */ ) {
            const isVertex = state.target === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Vertex;
            return `${this._samplerFunc(state)}(${this.samplerName},${this.samplerName + `Sampler`}, ${this._getUVW(uv)}${this._samplerLodSuffix}${isVertex ? ", 0" : ""})`;
        }
        return `${this._samplerFunc(state)}(${this.samplerName}, ${this._getUVW(uv)}${this._samplerLodSuffix})`;
    }
    _generateTextureLookup(state) {
        state.compilationString += `#ifdef ${this._defineName}\n`;
        state.compilationString += `${state._declareLocalVar(this._tempTextureRead, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4)} = ${this._generateTextureSample(state._getVaryingName(this._transformedUVName), state)};\n`;
        state.compilationString += `#elif defined(${this._mainUVDefineName})\n`;
        state.compilationString += `${state._declareLocalVar(this._tempTextureRead, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4)} = ${this._generateTextureSample(this._mainUVName ? state._getVaryingName(this._mainUVName) : this.uv.associatedVariableName, state)}${this._samplerLodSuffix};\n`;
        state.compilationString += `#endif\n`;
    }
    _writeTextureRead(state, vertexMode = false) {
        const uvInput = this.uv;
        if (vertexMode) {
            if (state.target === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment) {
                return;
            }
            this._generateTextureLookup(state);
            return;
        }
        if (this.uv.ownerBlock.target === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment) {
            state.compilationString += `${state._declareLocalVar(this._tempTextureRead, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4)} = ${this._generateTextureSample(uvInput.associatedVariableName, state)}${this._samplerLodSuffix};\n`;
            return;
        }
        this._generateTextureLookup(state);
    }
    _generateConversionCode(state, output, swizzle) {
        if (swizzle !== "a") {
            // no conversion if the output is "a" (alpha)
            if (!this.texture || !this.texture.gammaSpace) {
                state.compilationString += `#ifdef ${this._linearDefineName}
                    ${output.associatedVariableName} = toGammaSpace(${output.associatedVariableName});
                    #endif
                `;
            }
            state.compilationString += `#ifdef ${this._gammaDefineName}
                ${output.associatedVariableName} = ${state._toLinearSpace(output)};
                #endif
            `;
        }
    }
    _writeOutput(state, output, swizzle, vertexMode = false) {
        if (vertexMode) {
            if (state.target === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment) {
                return;
            }
            state.compilationString += `${state._declareOutput(output)} = ${this._tempTextureRead}.${swizzle};\n`;
            this._generateConversionCode(state, output, swizzle);
            return;
        }
        if (this.uv.ownerBlock.target === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment) {
            state.compilationString += `${state._declareOutput(output)} = ${this._tempTextureRead}.${swizzle};\n`;
            this._generateConversionCode(state, output, swizzle);
            return;
        }
        let complement = "";
        if (!this.disableLevelMultiplication) {
            complement = ` * ${(state.shaderLanguage === 1 /* ShaderLanguage.WGSL */  ? "uniforms." : "") + this._textureInfoName}`;
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
        if (state.target === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Vertex || this._fragmentOnly || state.target === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment) {
            this._tempTextureRead = state._getFreeVariableName("tempTextureRead");
            this._linearDefineName = state._getFreeDefineName("ISLINEAR");
            this._gammaDefineName = state._getFreeDefineName("ISGAMMA");
        }
        if (!this._isMixed && state.target === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment || this._isMixed && state.target === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Vertex) {
            if (!this._imageSource) {
                const varName = state._getFreeVariableName(this.name);
                this._samplerName = varName + "Texture";
                if (this._texture?._texture?.is2DArray) {
                    state._emit2DArraySampler(this._samplerName);
                } else {
                    state._emit2DSampler(this._samplerName);
                }
            }
            // Declarations
            state.sharedData.blockingBlocks.push(this);
            state.sharedData.textureBlocks.push(this);
            state.sharedData.blocksWithDefines.push(this);
            state.sharedData.bindableBlocks.push(this);
        }
        if (state.target !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment) {
            // Vertex
            this._injectVertexCode(state);
            return;
        }
        // Fragment
        if (!this._outputs.some((o)=>o.isConnectedInFragmentShader)) {
            return;
        }
        if (this._isMixed && !this._imageSource) {
            // Reexport the sampler
            if (this._texture?._texture?.is2DArray) {
                state._emit2DArraySampler(this._samplerName);
            } else {
                state._emit2DSampler(this._samplerName);
            }
        }
        const comments = `//${this.name}`;
        state._emitFunctionFromInclude("helperFunctions", comments);
        if (this._isMixed) {
            state._emitUniformFromString(this._textureInfoName, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float);
        }
        this._writeTextureRead(state);
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
        serializationObject.fragmentOnly = this._fragmentOnly;
        serializationObject.disableLevelMultiplication = this.disableLevelMultiplication;
        if (!this.hasImageSource && this.texture && (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterial"].AllowSerializationOfRenderTargetTextures || !this.texture.isRenderTarget) && this.texture.getClassName() !== "VideoTexture") {
            serializationObject.texture = this.texture.serialize();
        }
        return serializationObject;
    }
    _deserialize(serializationObject, scene, rootUrl, urlRewriter) {
        super._deserialize(serializationObject, scene, rootUrl);
        this.convertToGammaSpace = serializationObject.convertToGammaSpace;
        this.convertToLinearSpace = !!serializationObject.convertToLinearSpace;
        this._fragmentOnly = !!serializationObject.fragmentOnly;
        this.disableLevelMultiplication = !!serializationObject.disableLevelMultiplication;
        if (serializationObject.texture && !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterial"].IgnoreTexturesAtLoadTime) {
            if (serializationObject.texture.url !== undefined) {
                if (serializationObject.texture.url.indexOf("data:") === 0) {
                    rootUrl = "";
                } else if (urlRewriter) {
                    serializationObject.texture.url = urlRewriter(serializationObject.texture.url);
                    serializationObject.texture.name = serializationObject.texture.url;
                }
            }
            if (serializationObject.texture.base64String || serializationObject.texture.url !== undefined) {
                this.texture = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"].Parse(serializationObject.texture, scene, rootUrl);
            }
        }
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.TextureBlock", TextureBlock); //# sourceMappingURL=textureBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Dual/reflectionTextureBaseBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReflectionTextureBaseBlock",
    ()=>ReflectionTextureBaseBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterial.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$inputBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Input/inputBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialSystemValues$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialSystemValues.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$cubeTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/cubeTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/texture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/engineStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Decorators/nodeDecorator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
class ReflectionTextureBaseBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * Gets or sets the texture associated with the node
     */ get texture() {
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
    static _OnGenerateOnlyFragmentCodeChanged(block, _propertyName) {
        const that = block;
        return that._onGenerateOnlyFragmentCodeChanged();
    }
    _onGenerateOnlyFragmentCodeChanged() {
        this._setTarget();
        return true;
    }
    _setTarget() {
        this._setInitialTarget(this.generateOnlyFragmentCode ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].VertexAndFragment);
    }
    /**
     * Create a new ReflectionTextureBaseBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].VertexAndFragment);
        /** Indicates that no code should be generated in the vertex shader. Can be useful in some specific circumstances (like when doing ray marching for eg) */ this.generateOnlyFragmentCode = false;
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "ReflectionTextureBaseBlock";
    }
    _getTexture() {
        return this.texture;
    }
    initialize(state) {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this._initShaderSourceAsync(state.shaderLanguage);
    }
    async _initShaderSourceAsync(shaderLanguage) {
        this._codeIsReady = false;
        if (shaderLanguage === 1 /* ShaderLanguage.WGSL */ ) {
            await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/reflectionFunction.js [app-client] (ecmascript, async loader)");
        } else {
            await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/reflectionFunction.js [app-client] (ecmascript, async loader)");
        }
        this._codeIsReady = true;
        this.onCodeIsReadyObservable.notifyObservers(this);
    }
    /**
     * Auto configure the node based on the existing material
     * @param material defines the material to configure
     * @param additionalFilteringInfo defines additional info to be used when filtering inputs (we might want to skip some non relevant blocks)
     */ autoConfigure(material, additionalFilteringInfo = ()=>true) {
        if (!this.position.isConnected) {
            let positionInput = material.getInputBlockByPredicate((b)=>b.isAttribute && b.name === "position" && additionalFilteringInfo(b));
            if (!positionInput) {
                positionInput = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$inputBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputBlock"]("position");
                positionInput.setAsAttribute();
            }
            positionInput.output.connectTo(this.position);
        }
        if (!this.world.isConnected) {
            let worldInput = material.getInputBlockByPredicate((b)=>b.systemValue === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialSystemValues$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialSystemValues"].World && additionalFilteringInfo(b));
            if (!worldInput) {
                worldInput = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$inputBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputBlock"]("world");
                worldInput.setAsSystemValue(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialSystemValues$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialSystemValues"].World);
            }
            worldInput.output.connectTo(this.world);
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
        if (!defines._areTexturesDirty) {
            return;
        }
        const texture = this._getTexture();
        if (!texture || !texture.getTextureMatrix) {
            return;
        }
        defines.setValue(this._define3DName, texture.isCube, true);
        defines.setValue(this._defineLocalCubicName, texture.boundingBoxSize ? true : false, true);
        defines.setValue(this._defineExplicitName, texture.coordinatesMode === 0, true);
        defines.setValue(this._defineSkyboxName, texture.coordinatesMode === 5, true);
        defines.setValue(this._defineCubicName, texture.coordinatesMode === 3 || texture.coordinatesMode === 6, true);
        defines.setValue("INVERTCUBICMAP", texture.coordinatesMode === 6, true);
        defines.setValue(this._defineSphericalName, texture.coordinatesMode === 1, true);
        defines.setValue(this._definePlanarName, texture.coordinatesMode === 2, true);
        defines.setValue(this._defineProjectionName, texture.coordinatesMode === 4, true);
        defines.setValue(this._defineEquirectangularName, texture.coordinatesMode === 7, true);
        defines.setValue(this._defineEquirectangularFixedName, texture.coordinatesMode === 8, true);
        defines.setValue(this._defineMirroredEquirectangularFixedName, texture.coordinatesMode === 9, true);
    }
    isReady() {
        const texture = this._getTexture();
        if (texture && !texture.isReadyOrNotBlocking()) {
            return false;
        }
        return true;
    }
    bind(effect, nodeMaterial, mesh, _subMesh) {
        const texture = this._getTexture();
        if (!mesh || !texture) {
            return;
        }
        effect.setMatrix(this._reflectionMatrixName, texture.getReflectionTextureMatrix());
        if (texture.isCube) {
            effect.setTexture(this._cubeSamplerName, texture);
        } else {
            effect.setTexture(this._2DSamplerName, texture);
        }
        if (texture.boundingBoxSize) {
            const cubeTexture = texture;
            effect.setVector3(this._reflectionPositionName, cubeTexture.boundingBoxPosition);
            effect.setVector3(this._reflectionSizeName, cubeTexture.boundingBoxSize);
        }
    }
    /**
     * Gets the code to inject in the vertex shader
     * @param state current state of the node material building
     * @returns the shader code
     */ handleVertexSide(state) {
        if (this.generateOnlyFragmentCode && state.target === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Vertex) {
            return "";
        }
        const isWebGPU = state.shaderLanguage === 1 /* ShaderLanguage.WGSL */ ;
        this._define3DName = state._getFreeDefineName("REFLECTIONMAP_3D");
        this._defineCubicName = state._getFreeDefineName("REFLECTIONMAP_CUBIC");
        this._defineSphericalName = state._getFreeDefineName("REFLECTIONMAP_SPHERICAL");
        this._definePlanarName = state._getFreeDefineName("REFLECTIONMAP_PLANAR");
        this._defineProjectionName = state._getFreeDefineName("REFLECTIONMAP_PROJECTION");
        this._defineExplicitName = state._getFreeDefineName("REFLECTIONMAP_EXPLICIT");
        this._defineEquirectangularName = state._getFreeDefineName("REFLECTIONMAP_EQUIRECTANGULAR");
        this._defineLocalCubicName = state._getFreeDefineName("USE_LOCAL_REFLECTIONMAP_CUBIC");
        this._defineMirroredEquirectangularFixedName = state._getFreeDefineName("REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED");
        this._defineEquirectangularFixedName = state._getFreeDefineName("REFLECTIONMAP_EQUIRECTANGULAR_FIXED");
        this._defineSkyboxName = state._getFreeDefineName("REFLECTIONMAP_SKYBOX");
        this._defineOppositeZ = state._getFreeDefineName("REFLECTIONMAP_OPPOSITEZ");
        this._reflectionMatrixName = state._getFreeVariableName("reflectionMatrix");
        state._emitUniformFromString(this._reflectionMatrixName, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Matrix);
        let code = "";
        this._worldPositionNameInFragmentOnlyMode = state._getFreeVariableName("worldPosition");
        const worldPosVaryingName = this.generateOnlyFragmentCode ? this._worldPositionNameInFragmentOnlyMode : "v_" + this.worldPosition.associatedVariableName;
        if (this.generateOnlyFragmentCode || state._emitVaryingFromString(worldPosVaryingName, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4)) {
            if (this.generateOnlyFragmentCode) {
                code += `${state._declareLocalVar(worldPosVaryingName, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4)} = ${this.worldPosition.associatedVariableName};\n`;
            } else {
                code += `${isWebGPU ? "vertexOutputs." : ""}${worldPosVaryingName} = ${this.worldPosition.associatedVariableName};\n`;
            }
        }
        this._positionUVWName = state._getFreeVariableName("positionUVW");
        this._directionWname = state._getFreeVariableName("directionW");
        if (this.generateOnlyFragmentCode || state._emitVaryingFromString(this._positionUVWName, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3, this._defineSkyboxName)) {
            code += `#ifdef ${this._defineSkyboxName}\n`;
            if (this.generateOnlyFragmentCode) {
                code += `${state._declareLocalVar(this._positionUVWName, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3)} = ${this.position.associatedVariableName}.xyz;\n`;
            } else {
                code += `${isWebGPU ? "vertexOutputs." : ""}${this._positionUVWName} = ${this.position.associatedVariableName}.xyz;\n`;
            }
            code += `#endif\n`;
        }
        if (this.generateOnlyFragmentCode || state._emitVaryingFromString(this._directionWname, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3, `defined(${this._defineEquirectangularFixedName}) || defined(${this._defineMirroredEquirectangularFixedName})`)) {
            code += `#if defined(${this._defineEquirectangularFixedName}) || defined(${this._defineMirroredEquirectangularFixedName})\n`;
            if (this.generateOnlyFragmentCode) {
                code += `${state._declareLocalVar(this._directionWname, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3)} = normalize(vec3${state.fSuffix}(${this.world.associatedVariableName} * vec4${state.fSuffix}(${this.position.associatedVariableName}.xyz, 0.0)));\n`;
            } else {
                code += `${isWebGPU ? "vertexOutputs." : ""}${this._directionWname} = normalize(vec3${state.fSuffix}(${this.world.associatedVariableName} * vec4${state.fSuffix}(${this.position.associatedVariableName}.xyz, 0.0)));\n`;
            }
            code += `#endif\n`;
        }
        return code;
    }
    /**
     * Handles the inits for the fragment code path
     * @param state node material build state
     */ handleFragmentSideInits(state) {
        state.sharedData.blockingBlocks.push(this);
        state.sharedData.textureBlocks.push(this);
        // Samplers
        this._cubeSamplerName = state._getFreeVariableName(this.name + "CubeSampler");
        state.samplers.push(this._cubeSamplerName);
        this._2DSamplerName = state._getFreeVariableName(this.name + "2DSampler");
        state.samplers.push(this._2DSamplerName);
        state._samplerDeclaration += `#ifdef ${this._define3DName}\n`;
        state._emitCubeSampler(this._cubeSamplerName, "", true);
        state._samplerDeclaration += `#else\n`;
        state._emit2DSampler(this._2DSamplerName, "", true);
        state._samplerDeclaration += `#endif\n`;
        // Fragment
        state.sharedData.blocksWithDefines.push(this);
        state.sharedData.bindableBlocks.push(this);
        const comments = `//${this.name}`;
        state._emitFunctionFromInclude("helperFunctions", comments);
        state._emitFunctionFromInclude("reflectionFunction", comments, {
            replaceStrings: [
                {
                    search: /vec3 computeReflectionCoords/g,
                    replace: "void DUMMYFUNC"
                },
                {
                    search: /fn computeReflectionCoords\(worldPos: vec4f,worldNormal: vec3f\)->vec3f/g,
                    replace: "fn DUMMYFUNC()"
                }
            ]
        });
        this._reflectionColorName = state._getFreeVariableName("reflectionColor");
        this._reflectionVectorName = state._getFreeVariableName("reflectionUVW");
        this._reflectionCoordsName = state._getFreeVariableName("reflectionCoords");
        this._reflectionPositionName = state._getFreeVariableName("vReflectionPosition");
        state._emitUniformFromString(this._reflectionPositionName, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3);
        this._reflectionSizeName = state._getFreeVariableName("vReflectionPosition");
        state._emitUniformFromString(this._reflectionSizeName, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3);
    }
    /**
     * Generates the reflection coords code for the fragment code path
     * @param state defines the build state
     * @param worldNormalVarName name of the world normal variable
     * @param worldPos name of the world position variable. If not provided, will use the world position connected to this block
     * @param onlyReflectionVector if true, generates code only for the reflection vector computation, not for the reflection coordinates
     * @param doNotEmitInvertZ if true, does not emit the invertZ code
     * @returns the shader code
     */ handleFragmentSideCodeReflectionCoords(state, worldNormalVarName, worldPos, onlyReflectionVector = false, doNotEmitInvertZ = false) {
        const isWebGPU = state.shaderLanguage === 1 /* ShaderLanguage.WGSL */ ;
        const reflectionMatrix = (isWebGPU ? "uniforms." : "") + this._reflectionMatrixName;
        const direction = `normalize(${this._directionWname})`;
        const positionUVW = `${this._positionUVWName}`;
        const vEyePosition = `${this.cameraPosition.associatedVariableName}`;
        const view = `${this.view.associatedVariableName}`;
        const fragmentInputsPrefix = isWebGPU ? "fragmentInputs." : "";
        if (!worldPos) {
            worldPos = this.generateOnlyFragmentCode ? this._worldPositionNameInFragmentOnlyMode : `${fragmentInputsPrefix}v_${this.worldPosition.associatedVariableName}`;
        }
        worldNormalVarName += ".xyz";
        let code = `
            #ifdef ${this._defineMirroredEquirectangularFixedName}
               ${state._declareLocalVar(this._reflectionVectorName, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3)} = computeMirroredFixedEquirectangularCoords(${worldPos}, ${worldNormalVarName}, ${direction});
            #endif

            #ifdef ${this._defineEquirectangularFixedName}
                ${state._declareLocalVar(this._reflectionVectorName, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3)} = computeFixedEquirectangularCoords(${worldPos}, ${worldNormalVarName}, ${direction});
            #endif

            #ifdef ${this._defineEquirectangularName}
                ${state._declareLocalVar(this._reflectionVectorName, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3)} = computeEquirectangularCoords(${worldPos}, ${worldNormalVarName}, ${vEyePosition}.xyz, ${reflectionMatrix});
            #endif

            #ifdef ${this._defineSphericalName}
                ${state._declareLocalVar(this._reflectionVectorName, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3)} = computeSphericalCoords(${worldPos}, ${worldNormalVarName}, ${view}, ${reflectionMatrix});
            #endif

            #ifdef ${this._definePlanarName}
                ${state._declareLocalVar(this._reflectionVectorName, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3)} = computePlanarCoords(${worldPos}, ${worldNormalVarName}, ${vEyePosition}.xyz, ${reflectionMatrix});
            #endif

            #ifdef ${this._defineCubicName}
                #ifdef ${this._defineLocalCubicName}
                    ${state._declareLocalVar(this._reflectionVectorName, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3)} = computeCubicLocalCoords(${worldPos}, ${worldNormalVarName}, ${vEyePosition}.xyz, ${reflectionMatrix}, ${this._reflectionSizeName}, ${this._reflectionPositionName});
                #else
                ${state._declareLocalVar(this._reflectionVectorName, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3)} = computeCubicCoords(${worldPos}, ${worldNormalVarName}, ${vEyePosition}.xyz, ${reflectionMatrix});
                #endif
            #endif

            #ifdef ${this._defineProjectionName}
                ${state._declareLocalVar(this._reflectionVectorName, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3)} = computeProjectionCoords(${worldPos}, ${view}, ${reflectionMatrix});
            #endif

            #ifdef ${this._defineSkyboxName}
                ${state._declareLocalVar(this._reflectionVectorName, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3)} = computeSkyBoxCoords(${positionUVW}, ${reflectionMatrix});
            #endif

            #ifdef ${this._defineExplicitName}
                ${state._declareLocalVar(this._reflectionVectorName, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3)} = vec3(0, 0, 0);
            #endif\n`;
        if (!doNotEmitInvertZ) {
            code += `#ifdef ${this._defineOppositeZ}
                ${this._reflectionVectorName}.z *= -1.0;
            #endif\n`;
        }
        if (!onlyReflectionVector) {
            code += `
                #ifdef ${this._define3DName}
                    ${state._declareLocalVar(this._reflectionCoordsName, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3)} = ${this._reflectionVectorName};
                #else
                    ${state._declareLocalVar(this._reflectionCoordsName, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector2)} = ${this._reflectionVectorName}.xy;
                    #ifdef ${this._defineProjectionName}
                        ${this._reflectionCoordsName} /= ${this._reflectionVectorName}.z;
                    #endif
                    ${this._reflectionCoordsName}.y = 1.0 - ${this._reflectionCoordsName}.y;
                #endif\n`;
        }
        return code;
    }
    /**
     * Generates the reflection color code for the fragment code path
     * @param state defines the build state
     * @param lodVarName name of the lod variable
     * @param swizzleLookupTexture swizzle to use for the final color variable
     * @returns the shader code
     */ handleFragmentSideCodeReflectionColor(state, lodVarName, swizzleLookupTexture = ".rgb") {
        let colorType = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4;
        if (swizzleLookupTexture.length === 3) {
            colorType = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3;
        }
        let code = `${state._declareLocalVar(this._reflectionColorName, colorType)};
            #ifdef ${this._define3DName}\n`;
        if (lodVarName) {
            code += `${this._reflectionColorName} = ${state._generateTextureSampleCubeLOD(this._reflectionVectorName, this._cubeSamplerName, lodVarName)}${swizzleLookupTexture};\n`;
        } else {
            code += `${this._reflectionColorName} = ${state._generateTextureSampleCube(this._reflectionVectorName, this._cubeSamplerName)}${swizzleLookupTexture};\n`;
        }
        code += `
            #else\n`;
        if (lodVarName) {
            code += `${this._reflectionColorName} =${state._generateTextureSampleLOD(this._reflectionCoordsName, this._2DSamplerName, lodVarName)}${swizzleLookupTexture};\n`;
        } else {
            code += `${this._reflectionColorName} = ${state._generateTextureSample(this._reflectionCoordsName, this._2DSamplerName)}${swizzleLookupTexture};\n`;
        }
        code += `#endif\n`;
        return code;
    }
    /**
     * Generates the code corresponding to the connected output points
     * @param state node material build state
     * @param varName name of the variable to output
     * @returns the shader code
     */ writeOutputs(state, varName) {
        let code = "";
        if (state.target === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment) {
            for (const output of this._outputs){
                if (output.hasEndpoints) {
                    code += `${state._declareOutput(output)} = ${varName}.${output.name};\n`;
                }
            }
        }
        return code;
    }
    _buildBlock(state) {
        super._buildBlock(state);
        return this;
    }
    _dumpPropertiesCode() {
        let codeString = super._dumpPropertiesCode();
        if (!this.texture) {
            return codeString;
        }
        if (this.texture.isCube) {
            const forcedExtension = this.texture.forcedExtension;
            codeString += `${this._codeVariableName}.texture = new BABYLON.CubeTexture("${this.texture.name}", undefined, undefined, ${this.texture.noMipmap}, null, undefined, undefined, undefined, ${this.texture._prefiltered}, ${forcedExtension ? '"' + forcedExtension + '"' : "null"});\n`;
        } else {
            codeString += `${this._codeVariableName}.texture = new BABYLON.Texture("${this.texture.name}", null);\n`;
        }
        codeString += `${this._codeVariableName}.texture.coordinatesMode = ${this.texture.coordinatesMode};\n`;
        return codeString;
    }
    serialize() {
        const serializationObject = super.serialize();
        if (this.texture && !this.texture.isRenderTarget) {
            serializationObject.texture = this.texture.serialize();
        }
        serializationObject.generateOnlyFragmentCode = this.generateOnlyFragmentCode;
        return serializationObject;
    }
    _deserialize(serializationObject, scene, rootUrl) {
        super._deserialize(serializationObject, scene, rootUrl);
        if (serializationObject.texture && !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterial"].IgnoreTexturesAtLoadTime) {
            rootUrl = serializationObject.texture.url.indexOf("data:") === 0 ? "" : rootUrl;
            if (serializationObject.texture.isCube) {
                this.texture = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$cubeTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CubeTexture"].Parse(serializationObject.texture, scene, rootUrl);
            } else {
                this.texture = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texture"].Parse(serializationObject.texture, scene, rootUrl);
            }
        }
        this.generateOnlyFragmentCode = serializationObject.generateOnlyFragmentCode;
        this._setTarget();
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("Generate only fragment code", 0 /* PropertyTypeForEdition.Boolean */ , "ADVANCED", {
        notifiers: {
            rebuild: true,
            update: true,
            onValidation: ReflectionTextureBaseBlock._OnGenerateOnlyFragmentCodeChanged
        }
    })
], ReflectionTextureBaseBlock.prototype, "generateOnlyFragmentCode", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.ReflectionTextureBaseBlock", ReflectionTextureBaseBlock); //# sourceMappingURL=reflectionTextureBaseBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Dual/reflectionTextureBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReflectionTextureBlock",
    ()=>ReflectionTextureBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$inputBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Input/inputBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialSystemValues$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialSystemValues.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$reflectionTextureBaseBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Dual/reflectionTextureBaseBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
class ReflectionTextureBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$reflectionTextureBaseBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReflectionTextureBaseBlock"] {
    _onGenerateOnlyFragmentCodeChanged() {
        if (this.position.isConnected) {
            this.generateOnlyFragmentCode = !this.generateOnlyFragmentCode;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Error("The position input must not be connected to be able to switch!");
            return false;
        }
        if (this.worldPosition.isConnected) {
            this.generateOnlyFragmentCode = !this.generateOnlyFragmentCode;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Error("The worldPosition input must not be connected to be able to switch!");
            return false;
        }
        this._setTarget();
        return true;
    }
    _setTarget() {
        super._setTarget();
        this.getInputByName("position").target = this.generateOnlyFragmentCode ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Vertex;
        this.getInputByName("worldPosition").target = this.generateOnlyFragmentCode ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Vertex;
    }
    /**
     * Create a new ReflectionTextureBlock
     * @param name defines the block name
     */ constructor(name){
        super(name);
        this.registerInput("position", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].AutoDetect, false, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Vertex);
        this.registerInput("worldPosition", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4, false, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Vertex);
        this.registerInput("worldNormal", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4, false, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment); // Flagging as fragment as the normal can be changed by fragment code
        this.registerInput("world", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Matrix, false, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Vertex);
        this.registerInput("cameraPosition", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3, false, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this.registerInput("view", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Matrix, false, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this.registerOutput("rgb", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color3, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this.registerOutput("rgba", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color4, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this.registerOutput("r", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this.registerOutput("g", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this.registerOutput("b", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this.registerOutput("a", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this._inputs[0].addExcludedConnectionPointFromAllowedTypes(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color3 | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3 | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "ReflectionTextureBlock";
    }
    /**
     * Gets the world position input component
     */ get position() {
        return this._inputs[0];
    }
    /**
     * Gets the world position input component
     */ get worldPosition() {
        return this._inputs[1];
    }
    /**
     * Gets the world normal input component
     */ get worldNormal() {
        return this._inputs[2];
    }
    /**
     * Gets the world input component
     */ get world() {
        return this._inputs[3];
    }
    /**
     * Gets the camera (or eye) position component
     */ get cameraPosition() {
        return this._inputs[4];
    }
    /**
     * Gets the view input component
     */ get view() {
        return this._inputs[5];
    }
    /**
     * Gets the rgb output component
     */ get rgb() {
        return this._outputs[0];
    }
    /**
     * Gets the rgba output component
     */ get rgba() {
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
    autoConfigure(material, additionalFilteringInfo = ()=>true) {
        super.autoConfigure(material);
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
        if (!this.texture) {
            state.compilationString += this.writeOutputs(state, `vec4${state.fSuffix}(0.)`);
            return this;
        }
        if (state.target !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment) {
            state.compilationString += this.handleVertexSide(state);
            return this;
        }
        if (this.generateOnlyFragmentCode) {
            state.compilationString += this.handleVertexSide(state);
        }
        this.handleFragmentSideInits(state);
        const normalWUnit = state._getFreeVariableName("normalWUnit");
        state.compilationString += `${state._declareLocalVar(normalWUnit, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4)} = normalize(${this.worldNormal.associatedVariableName});\n`;
        state.compilationString += this.handleFragmentSideCodeReflectionCoords(state, normalWUnit);
        state.compilationString += this.handleFragmentSideCodeReflectionColor(state, undefined, "");
        state.compilationString += this.writeOutputs(state, this._reflectionColorName);
        return this;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.ReflectionTextureBlock", ReflectionTextureBlock); //# sourceMappingURL=reflectionTextureBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Dual/sceneDepthBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SceneDepthBlock",
    ()=>SceneDepthBlock
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
class SceneDepthBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * Create a new SceneDepthBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].VertexAndFragment);
        /**
         * Defines if the depth renderer should be setup in non linear mode
         */ this.useNonLinearDepth = false;
        /**
         * Defines if the depth renderer should be setup in camera space Z mode (if set, useNonLinearDepth has no effect)
         */ this.storeCameraSpaceZ = false;
        /**
         * Defines if the depth renderer should be setup in full 32 bits float mode
         */ this.force32itsFloat = false;
        this._isUnique = true;
        this.registerInput("uv", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].AutoDetect, false, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].VertexAndFragment);
        this.registerOutput("depth", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Neutral);
        this._inputs[0].addExcludedConnectionPointFromAllowedTypes(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector2 | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3 | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4);
        this._inputs[0]._prioritizeVertex = false;
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "SceneDepthBlock";
    }
    /**
     * Gets the uv input component
     */ get uv() {
        return this._inputs[0];
    }
    /**
     * Gets the depth output component
     */ get depth() {
        return this._outputs[0];
    }
    /**
     * Initialize the block and prepare the context for build
     * @param state defines the state that will be used for the build
     */ initialize(state) {
        state._excludeVariableName("textureSampler");
    }
    get target() {
        if (!this.uv.isConnected) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].VertexAndFragment;
        }
        if (this.uv.sourceBlock.isInput) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].VertexAndFragment;
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment;
    }
    _getTexture(scene) {
        const depthRenderer = scene.enableDepthRenderer(undefined, this.useNonLinearDepth, this.force32itsFloat, undefined, this.storeCameraSpaceZ);
        return depthRenderer.getDepthMap();
    }
    bind(effect, nodeMaterial) {
        const texture = this._getTexture(nodeMaterial.getScene());
        effect.setTexture(this._samplerName, texture);
    }
    _injectVertexCode(state) {
        const uvInput = this.uv;
        if (uvInput.connectedPoint.ownerBlock.isInput) {
            const uvInputOwnerBlock = uvInput.connectedPoint.ownerBlock;
            if (!uvInputOwnerBlock.isAttribute) {
                state._emitUniformFromString(uvInput.associatedVariableName, uvInput.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3 ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3 : uvInput.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4 ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4 : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector2);
            }
        }
        this._mainUVName = "vMain" + uvInput.associatedVariableName;
        state._emitVaryingFromString(this._mainUVName, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector2);
        state.compilationString += `${this._mainUVName} = ${uvInput.associatedVariableName}.xy;\n`;
        if (!this._outputs.some((o)=>o.isConnectedInVertexShader)) {
            return;
        }
        this._writeTextureRead(state, true);
        for (const output of this._outputs){
            if (output.hasEndpoints) {
                this._writeOutput(state, output, "r", true);
            }
        }
    }
    _writeTextureRead(state, vertexMode = false) {
        const uvInput = this.uv;
        if (vertexMode) {
            if (state.target === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment) {
                return;
            }
            const textureReadFunc = state.shaderLanguage === 0 /* ShaderLanguage.GLSL */  ? `texture2D(${this._samplerName},` : `textureSampleLevel(${this._samplerName}, ${this._samplerName + `Sampler`},`;
            const complement = state.shaderLanguage === 0 /* ShaderLanguage.GLSL */  ? "" : ", 0";
            state.compilationString += `${state._declareLocalVar(this._tempTextureRead, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4)}=  ${textureReadFunc} ${uvInput.associatedVariableName}.xy${complement});\n`;
            return;
        }
        const textureReadFunc = state.shaderLanguage === 0 /* ShaderLanguage.GLSL */  ? `texture2D(${this._samplerName},` : `textureSample(${this._samplerName}, ${this._samplerName + `Sampler`},`;
        if (this.uv.ownerBlock.target === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment) {
            state.compilationString += `${state._declareLocalVar(this._tempTextureRead, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4)} = ${textureReadFunc} ${uvInput.associatedVariableName}.xy);\n`;
            return;
        }
        state.compilationString += `${state._declareLocalVar(this._tempTextureRead, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4)} = ${textureReadFunc} ${this._mainUVName});\n`;
    }
    _writeOutput(state, output, swizzle, vertexMode = false) {
        if (vertexMode) {
            if (state.target === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment) {
                return;
            }
            state.compilationString += `${state._declareOutput(output)} = ${this._tempTextureRead}.${swizzle};\n`;
            return;
        }
        if (this.uv.ownerBlock.target === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment) {
            state.compilationString += `${state._declareOutput(output)} = ${this._tempTextureRead}.${swizzle};\n`;
            return;
        }
        state.compilationString += `${state._declareOutput(output)} = ${this._tempTextureRead}.${swizzle};\n`;
    }
    _buildBlock(state) {
        super._buildBlock(state);
        this._samplerName = state._getFreeVariableName(this.name + "Sampler");
        this._tempTextureRead = state._getFreeVariableName("tempTextureRead");
        if (state.sharedData.bindableBlocks.indexOf(this) < 0) {
            state.sharedData.bindableBlocks.push(this);
        }
        if (state.target !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment) {
            // Vertex
            state._emit2DSampler(this._samplerName);
            this._injectVertexCode(state);
            return;
        }
        // Fragment
        if (!this._outputs.some((o)=>o.isConnectedInFragmentShader)) {
            return;
        }
        state._emit2DSampler(this._samplerName);
        this._writeTextureRead(state);
        for (const output of this._outputs){
            if (output.hasEndpoints) {
                this._writeOutput(state, output, "r");
            }
        }
        return this;
    }
    serialize() {
        const serializationObject = super.serialize();
        serializationObject.useNonLinearDepth = this.useNonLinearDepth;
        serializationObject.storeCameraSpaceZ = this.storeCameraSpaceZ;
        serializationObject.force32itsFloat = this.force32itsFloat;
        return serializationObject;
    }
    _deserialize(serializationObject, scene, rootUrl) {
        super._deserialize(serializationObject, scene, rootUrl);
        this.useNonLinearDepth = serializationObject.useNonLinearDepth;
        this.storeCameraSpaceZ = !!serializationObject.storeCameraSpaceZ;
        this.force32itsFloat = serializationObject.force32itsFloat;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("Use non linear depth", 0 /* PropertyTypeForEdition.Boolean */ , "ADVANCED", {
        embedded: true,
        notifiers: {
            activatePreviewCommand: true,
            callback: (scene, block)=>{
                const sceneDepthBlock = block;
                let retVal = false;
                if (sceneDepthBlock.useNonLinearDepth) {
                    sceneDepthBlock.storeCameraSpaceZ = false;
                    retVal = true;
                }
                if (scene) {
                    scene.disableDepthRenderer();
                }
                return retVal;
            }
        }
    })
], SceneDepthBlock.prototype, "useNonLinearDepth", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("Store Camera space Z", 0 /* PropertyTypeForEdition.Boolean */ , "ADVANCED", {
        notifiers: {
            activatePreviewCommand: true,
            callback: (scene, block)=>{
                const sceneDepthBlock = block;
                let retVal = false;
                if (sceneDepthBlock.storeCameraSpaceZ) {
                    sceneDepthBlock.useNonLinearDepth = false;
                    retVal = true;
                }
                if (scene) {
                    scene.disableDepthRenderer();
                }
                return retVal;
            }
        }
    })
], SceneDepthBlock.prototype, "storeCameraSpaceZ", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("Force 32 bits float", 0 /* PropertyTypeForEdition.Boolean */ , "ADVANCED", {
        notifiers: {
            activatePreviewCommand: true,
            callback: (scene)=>scene?.disableDepthRenderer()
        }
    })
], SceneDepthBlock.prototype, "force32itsFloat", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.SceneDepthBlock", SceneDepthBlock); //# sourceMappingURL=sceneDepthBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Dual/depthSourceBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DepthSourceBlock",
    ()=>DepthSourceBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$imageSourceBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Dual/imageSourceBlock.js [app-client] (ecmascript)");
;
;
class DepthSourceBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$imageSourceBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImageSourceBlock"] {
    /**
     * Creates a new DepthSourceBlock
     * @param name defines the block name
     */ constructor(name){
        super(name);
    }
    /**
     * Gets or sets the texture associated with the node
     */ get texture() {
        return this._texture;
    }
    set texture(texture) {
    // Do nothing, we always use the depth texture from the scene
    }
    bind(effect, nodeMaterial) {
        const scene = nodeMaterial.getScene();
        const renderer = scene.enableDepthRenderer();
        this._texture = renderer.getDepthMap();
        super.bind(effect, nodeMaterial);
    }
    isReady() {
        return true;
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "DepthSourceBlock";
    }
    _dumpPropertiesCode() {
        return super._dumpPropertiesCode(true);
    }
    serialize() {
        return super.serialize(true);
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.DepthSourceBlock", DepthSourceBlock); //# sourceMappingURL=depthSourceBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Dual/clipPlanesBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClipPlanesBlock",
    ()=>ClipPlanesBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$clipPlaneMaterialHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/clipPlaneMaterialHelper.js [app-client] (ecmascript)");
;
;
;
;
;
class ClipPlanesBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * Create a new ClipPlanesBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].VertexAndFragment, true);
        this.registerInput("worldPosition", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4, false);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "ClipPlanesBlock";
    }
    /**
     * Initialize the block and prepare the context for build
     * @param state defines the state that will be used for the build
     */ initialize(state) {
        state._excludeVariableName("vClipPlane");
        state._excludeVariableName("fClipDistance");
        state._excludeVariableName("vClipPlane2");
        state._excludeVariableName("fClipDistance2");
        state._excludeVariableName("vClipPlane3");
        state._excludeVariableName("fClipDistance3");
        state._excludeVariableName("vClipPlane4");
        state._excludeVariableName("fClipDistance4");
        state._excludeVariableName("vClipPlane5");
        state._excludeVariableName("fClipDistance5");
        state._excludeVariableName("vClipPlane6");
        state._excludeVariableName("fClipDistance6");
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this._initShaderSourceAsync(state.shaderLanguage);
    }
    async _initShaderSourceAsync(shaderLanguage) {
        this._codeIsReady = false;
        if (shaderLanguage === 1 /* ShaderLanguage.WGSL */ ) {
            await Promise.all([
                __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/clipPlaneFragment.js [app-client] (ecmascript, async loader)"),
                __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/clipPlaneFragmentDeclaration.js [app-client] (ecmascript, async loader)"),
                __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/clipPlaneVertex.js [app-client] (ecmascript, async loader)"),
                __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/clipPlaneVertexDeclaration.js [app-client] (ecmascript, async loader)")
            ]);
        } else {
            await Promise.all([
                __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/clipPlaneFragment.js [app-client] (ecmascript, async loader)"),
                __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/clipPlaneFragmentDeclaration.js [app-client] (ecmascript, async loader)"),
                __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/clipPlaneVertex.js [app-client] (ecmascript, async loader)"),
                __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/clipPlaneVertexDeclaration.js [app-client] (ecmascript, async loader)")
            ]);
        }
        this._codeIsReady = true;
        this.onCodeIsReadyObservable.notifyObservers(this);
    }
    /**
     * Gets the worldPosition input component
     */ get worldPosition() {
        return this._inputs[0];
    }
    get target() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].VertexAndFragment;
    }
    set target(value) {}
    prepareDefines(defines, nodeMaterial, mesh) {
        if (!mesh) {
            return;
        }
        const scene = mesh.getScene();
        const useClipPlane1 = nodeMaterial.clipPlane ?? scene.clipPlane ? true : false;
        const useClipPlane2 = nodeMaterial.clipPlane2 ?? scene.clipPlane2 ? true : false;
        const useClipPlane3 = nodeMaterial.clipPlane3 ?? scene.clipPlane3 ? true : false;
        const useClipPlane4 = nodeMaterial.clipPlane4 ?? scene.clipPlane4 ? true : false;
        const useClipPlane5 = nodeMaterial.clipPlane5 ?? scene.clipPlane5 ? true : false;
        const useClipPlane6 = nodeMaterial.clipPlane6 ?? scene.clipPlane6 ? true : false;
        defines.setValue("CLIPPLANE", useClipPlane1, true);
        defines.setValue("CLIPPLANE2", useClipPlane2, true);
        defines.setValue("CLIPPLANE3", useClipPlane3, true);
        defines.setValue("CLIPPLANE4", useClipPlane4, true);
        defines.setValue("CLIPPLANE5", useClipPlane5, true);
        defines.setValue("CLIPPLANE6", useClipPlane6, true);
    }
    bind(effect, nodeMaterial, mesh) {
        if (!mesh) {
            return;
        }
        const scene = mesh.getScene();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$clipPlaneMaterialHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BindClipPlane"])(effect, nodeMaterial, scene);
    }
    _buildBlock(state) {
        super._buildBlock(state);
        const comments = `//${this.name}`;
        if (state.target !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment) {
            // Vertex
            const worldPos = this.worldPosition;
            state._emitFunctionFromInclude("clipPlaneVertexDeclaration", comments, {
                replaceStrings: [
                    {
                        search: /uniform vec4 vClipPlane\d*;/g,
                        replace: ""
                    }
                ]
            });
            state.compilationString += state._emitCodeFromInclude("clipPlaneVertex", comments, {
                replaceStrings: [
                    {
                        search: /worldPos/g,
                        replace: worldPos.associatedVariableName
                    }
                ]
            });
            state._emitUniformFromString("vClipPlane", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4);
            state._emitUniformFromString("vClipPlane2", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4);
            state._emitUniformFromString("vClipPlane3", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4);
            state._emitUniformFromString("vClipPlane4", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4);
            state._emitUniformFromString("vClipPlane5", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4);
            state._emitUniformFromString("vClipPlane6", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4);
            return;
        }
        // Fragment
        state.sharedData.bindableBlocks.push(this);
        state.sharedData.blocksWithDefines.push(this);
        state._emitFunctionFromInclude("clipPlaneFragmentDeclaration", comments);
        state.compilationString += state._emitCodeFromInclude("clipPlaneFragment", comments);
        return this;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.ClipPlanesBlock", ClipPlanesBlock); //# sourceMappingURL=clipPlanesBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Dual/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$fogBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Dual/fogBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$lightBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Dual/lightBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$textureBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Dual/textureBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$reflectionTextureBaseBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Dual/reflectionTextureBaseBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$reflectionTextureBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Dual/reflectionTextureBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$currentScreenBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Dual/currentScreenBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$sceneDepthBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Dual/sceneDepthBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$imageSourceBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Dual/imageSourceBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$depthSourceBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Dual/depthSourceBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$clipPlanesBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Dual/clipPlanesBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$smartFilterTextureBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Dual/smartFilterTextureBlock.js [app-client] (ecmascript)");
// async-loaded shaders
// clipPlaneBlock
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$clipPlaneFragment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/clipPlaneFragment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$clipPlaneFragmentDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/clipPlaneFragmentDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$clipPlaneVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/clipPlaneVertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$clipPlaneVertexDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/clipPlaneVertexDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$clipPlaneFragment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/clipPlaneFragment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$clipPlaneFragmentDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/clipPlaneFragmentDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$clipPlaneVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/clipPlaneVertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$clipPlaneVertexDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/clipPlaneVertexDeclaration.js [app-client] (ecmascript)");
// fogBlock
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$fogFragmentDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/fogFragmentDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$fogFragmentDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/fogFragmentDeclaration.js [app-client] (ecmascript)");
// lightBlock
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$lightFragment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/lightFragment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$lightUboDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/lightUboDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$lightVxUboDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/lightVxUboDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$helperFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/helperFunctions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$lightsFragmentFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/lightsFragmentFunctions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$shadowsFragmentFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/shadowsFragmentFunctions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$shadowsVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/shadowsVertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$lightFragmentDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/lightFragmentDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$lightFragment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/lightFragment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$lightUboDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/lightUboDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$lightVxUboDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/lightVxUboDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$lightVxFragmentDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/lightVxFragmentDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$helperFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/helperFunctions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$lightsFragmentFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/lightsFragmentFunctions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$shadowsFragmentFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/shadowsFragmentFunctions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$shadowsVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/shadowsVertex.js [app-client] (ecmascript)");
// reflectionTextureBlock
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$reflectionFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/reflectionFunction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$reflectionFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/reflectionFunction.js [app-client] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Dual/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClipPlanesBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$clipPlanesBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClipPlanesBlock"],
    "CurrentScreenBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$currentScreenBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CurrentScreenBlock"],
    "DepthSourceBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$depthSourceBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DepthSourceBlock"],
    "FogBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$fogBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FogBlock"],
    "ImageSourceBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$imageSourceBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImageSourceBlock"],
    "LightBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$lightBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LightBlock"],
    "ReflectionTextureBaseBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$reflectionTextureBaseBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReflectionTextureBaseBlock"],
    "ReflectionTextureBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$reflectionTextureBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReflectionTextureBlock"],
    "SceneDepthBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$sceneDepthBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SceneDepthBlock"],
    "SmartFilterTextureBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$smartFilterTextureBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SmartFilterTextureBlock"],
    "TextureBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$textureBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextureBlock"],
    "clipPlaneFragment",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$clipPlaneFragment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clipPlaneFragment"],
    "clipPlaneFragmentDeclaration",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$clipPlaneFragmentDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clipPlaneFragmentDeclaration"],
    "clipPlaneFragmentDeclarationWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$clipPlaneFragmentDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clipPlaneFragmentDeclarationWGSL"],
    "clipPlaneFragmentWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$clipPlaneFragment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clipPlaneFragmentWGSL"],
    "clipPlaneVertex",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$clipPlaneVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clipPlaneVertex"],
    "clipPlaneVertexDeclaration",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$clipPlaneVertexDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clipPlaneVertexDeclaration"],
    "clipPlaneVertexDeclarationWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$clipPlaneVertexDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clipPlaneVertexDeclarationWGSL"],
    "clipPlaneVertexWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$clipPlaneVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clipPlaneVertexWGSL"],
    "fogFragmentDeclaration",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$fogFragmentDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fogFragmentDeclaration"],
    "fogFragmentDeclarationWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$fogFragmentDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fogFragmentDeclarationWGSL"],
    "helperFunctions",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$helperFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["helperFunctions"],
    "helperFunctionsWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$helperFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["helperFunctionsWGSL"],
    "lightFragment",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$lightFragment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lightFragment"],
    "lightFragmentDeclaration",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$lightFragmentDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lightFragmentDeclaration"],
    "lightFragmentWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$lightFragment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lightFragmentWGSL"],
    "lightUboDeclaration",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$lightUboDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lightUboDeclaration"],
    "lightUboDeclarationWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$lightUboDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lightUboDeclarationWGSL"],
    "lightVxFragmentDeclaration",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$lightVxFragmentDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lightVxFragmentDeclaration"],
    "lightVxUboDeclaration",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$lightVxUboDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lightVxUboDeclaration"],
    "lightVxUboDeclarationWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$lightVxUboDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lightVxUboDeclarationWGSL"],
    "lightsFragmentFunctions",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$lightsFragmentFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lightsFragmentFunctions"],
    "lightsFragmentFunctionsWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$lightsFragmentFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lightsFragmentFunctionsWGSL"],
    "reflectionFunction",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$reflectionFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reflectionFunction"],
    "reflectionFunctionWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$reflectionFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reflectionFunctionWGSL"],
    "shadowsFragmentFunctions",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$shadowsFragmentFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shadowsFragmentFunctions"],
    "shadowsFragmentFunctionsWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$shadowsFragmentFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shadowsFragmentFunctionsWGSL"],
    "shadowsVertex",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$shadowsVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shadowsVertex"],
    "shadowsVertexWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$shadowsVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shadowsVertexWGSL"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Dual/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$fogBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Dual/fogBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$lightBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Dual/lightBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$textureBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Dual/textureBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$reflectionTextureBaseBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Dual/reflectionTextureBaseBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$reflectionTextureBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Dual/reflectionTextureBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$currentScreenBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Dual/currentScreenBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$sceneDepthBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Dual/sceneDepthBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$imageSourceBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Dual/imageSourceBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$depthSourceBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Dual/depthSourceBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$clipPlanesBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Dual/clipPlanesBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$smartFilterTextureBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Dual/smartFilterTextureBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$clipPlaneFragment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/clipPlaneFragment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$clipPlaneFragmentDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/clipPlaneFragmentDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$clipPlaneVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/clipPlaneVertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$clipPlaneVertexDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/clipPlaneVertexDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$clipPlaneFragment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/clipPlaneFragment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$clipPlaneFragmentDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/clipPlaneFragmentDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$clipPlaneVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/clipPlaneVertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$clipPlaneVertexDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/clipPlaneVertexDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$fogFragmentDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/fogFragmentDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$fogFragmentDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/fogFragmentDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$lightFragment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/lightFragment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$lightUboDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/lightUboDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$lightVxUboDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/lightVxUboDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$helperFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/helperFunctions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$lightsFragmentFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/lightsFragmentFunctions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$shadowsFragmentFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/shadowsFragmentFunctions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$shadowsVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/shadowsVertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$lightFragmentDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/lightFragmentDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$lightFragment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/lightFragment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$lightUboDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/lightUboDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$lightVxUboDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/lightVxUboDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$lightVxFragmentDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/lightVxFragmentDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$helperFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/helperFunctions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$lightsFragmentFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/lightsFragmentFunctions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$shadowsFragmentFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/shadowsFragmentFunctions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$shadowsVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/shadowsVertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$reflectionFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/reflectionFunction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$reflectionFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/reflectionFunction.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=dcdbf_%40babylonjs_core_Materials_Node_Blocks_Dual_ec4e74e9._.js.map