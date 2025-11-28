module.exports = [
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Fragment/fragmentOutputBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FragmentOutputBlock",
    ()=>FragmentOutputBlock,
    "FragmentOutputBlockColorSpace",
    ()=>FragmentOutputBlockColorSpace
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Decorators/nodeDecorator.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialHelper.functions.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$pure$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialHelper.functions.pure.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
var FragmentOutputBlockColorSpace;
(function(FragmentOutputBlockColorSpace) {
    /** Unspecified */ FragmentOutputBlockColorSpace[FragmentOutputBlockColorSpace["NoColorSpace"] = 0] = "NoColorSpace";
    /** Gamma */ FragmentOutputBlockColorSpace[FragmentOutputBlockColorSpace["Gamma"] = 1] = "Gamma";
    /** Linear */ FragmentOutputBlockColorSpace[FragmentOutputBlockColorSpace["Linear"] = 2] = "Linear";
})(FragmentOutputBlockColorSpace || (FragmentOutputBlockColorSpace = {}));
class FragmentOutputBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * Create a new FragmentOutputBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment, true, true);
        /** Gets or sets a boolean indicating if content needs to be converted to gamma space */ this.convertToGammaSpace = false;
        /** Gets or sets a boolean indicating if content needs to be converted to linear space */ this.convertToLinearSpace = false;
        /** Gets or sets a boolean indicating if logarithmic depth should be used */ this.useLogarithmicDepth = false;
        this.registerInput("rgba", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color4, true);
        this.registerInput("rgb", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color3, true);
        this.registerInput("a", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float, true);
        this.registerInput("glow", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color3, true);
        this.rgb.acceptedConnectionPointTypes.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3);
        this.rgb.acceptedConnectionPointTypes.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float);
        this.additionalColor.acceptedConnectionPointTypes.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3);
        this.additionalColor.acceptedConnectionPointTypes.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float);
    }
    /**
     * Gets or sets the color space used for the block
     */ get colorSpace() {
        if (this.convertToGammaSpace) {
            return FragmentOutputBlockColorSpace.Gamma;
        }
        if (this.convertToLinearSpace) {
            return FragmentOutputBlockColorSpace.Linear;
        }
        return FragmentOutputBlockColorSpace.NoColorSpace;
    }
    set colorSpace(value) {
        this.convertToGammaSpace = value === FragmentOutputBlockColorSpace.Gamma;
        this.convertToLinearSpace = value === FragmentOutputBlockColorSpace.Linear;
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "FragmentOutputBlock";
    }
    /**
     * Initialize the block and prepare the context for build
     * @param state defines the state that will be used for the build
     */ initialize(state) {
        state._excludeVariableName("logarithmicDepthConstant");
        state._excludeVariableName("vFragmentDepth");
    }
    /**
     * Gets the rgba input component
     */ get rgba() {
        return this._inputs[0];
    }
    /**
     * Gets the rgb input component
     */ get rgb() {
        return this._inputs[1];
    }
    /**
     * Gets the a input component
     */ get a() {
        return this._inputs[2];
    }
    /**
     * Gets the additionalColor input component (named glow in the UI for now)
     */ get additionalColor() {
        return this._inputs[3];
    }
    /**
     * Gets the glow input component
     */ get glow() {
        return this._inputs[3];
    }
    _getOutputString(state) {
        return state.shaderLanguage === 1 /* ShaderLanguage.WGSL */  ? "fragmentOutputsColor" : "gl_FragColor";
    }
    prepareDefines(defines, nodeMaterial) {
        defines.setValue(this._linearDefineName, this.convertToLinearSpace, true);
        defines.setValue(this._gammaDefineName, this.convertToGammaSpace, true);
        defines.setValue(this._additionalColorDefineName, this.additionalColor.connectedPoint && nodeMaterial._useAdditionalColor, true);
    }
    bind(effect, nodeMaterial, mesh) {
        if ((this.useLogarithmicDepth || nodeMaterial.useLogarithmicDepth) && mesh) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$pure$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BindLogDepth"])(undefined, effect, mesh.getScene());
        }
    }
    _buildBlock(state) {
        super._buildBlock(state);
        const rgba = this.rgba;
        const rgb = this.rgb;
        const a = this.a;
        const additionalColor = this.additionalColor;
        const isWebGPU = state.shaderLanguage === 1 /* ShaderLanguage.WGSL */ ;
        state.sharedData.hints.needAlphaBlending = rgba.isConnected || a.isConnected;
        state.sharedData.blocksWithDefines.push(this);
        if (this.useLogarithmicDepth || state.sharedData.nodeMaterial.useLogarithmicDepth) {
            state._emitUniformFromString("logarithmicDepthConstant", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float);
            state._emitVaryingFromString("vFragmentDepth", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float);
            state.sharedData.bindableBlocks.push(this);
        }
        if (additionalColor.connectedPoint) {
            state._excludeVariableName("useAdditionalColor");
            state._emitUniformFromString("useAdditionalColor", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float);
            this._additionalColorDefineName = state._getFreeDefineName("USEADDITIONALCOLOR");
        }
        this._linearDefineName = state._getFreeDefineName("CONVERTTOLINEAR");
        this._gammaDefineName = state._getFreeDefineName("CONVERTTOGAMMA");
        const comments = `//${this.name}`;
        state._emitFunctionFromInclude("helperFunctions", comments);
        const outputString = this._getOutputString(state);
        if (state.shaderLanguage === 1 /* ShaderLanguage.WGSL */ ) {
            state.compilationString += `var ${outputString} : vec4<f32>;\r\n`;
        }
        const vec4 = state._getShaderType(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4);
        if (additionalColor.connectedPoint) {
            let aValue = "1.0";
            if (a.connectedPoint) {
                aValue = a.associatedVariableName;
            }
            state.compilationString += `#ifdef ${this._additionalColorDefineName}\n`;
            if (additionalColor.connectedPoint.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float) {
                state.compilationString += `${outputString}  = ${vec4}(${additionalColor.associatedVariableName}, ${additionalColor.associatedVariableName}, ${additionalColor.associatedVariableName}, ${aValue});\n`;
            } else {
                state.compilationString += `${outputString}  = ${vec4}(${additionalColor.associatedVariableName}, ${aValue});\n`;
            }
            state.compilationString += `#else\n`;
        }
        if (rgba.connectedPoint) {
            if (a.isConnected) {
                state.compilationString += `${outputString} = ${vec4}(${rgba.associatedVariableName}.rgb, ${a.associatedVariableName});\n`;
            } else {
                state.compilationString += `${outputString}  = ${rgba.associatedVariableName};\n`;
            }
        } else if (rgb.connectedPoint) {
            let aValue = "1.0";
            if (a.connectedPoint) {
                aValue = a.associatedVariableName;
            }
            if (rgb.connectedPoint.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float) {
                state.compilationString += `${outputString}  = ${vec4}(${rgb.associatedVariableName}, ${rgb.associatedVariableName}, ${rgb.associatedVariableName}, ${aValue});\n`;
            } else {
                state.compilationString += `${outputString}  = ${vec4}(${rgb.associatedVariableName}, ${aValue});\n`;
            }
        } else {
            state.sharedData.checks.notConnectedNonOptionalInputs.push(rgba);
        }
        if (additionalColor.connectedPoint) {
            state.compilationString += `#endif\n`;
        }
        state.compilationString += `#ifdef ${this._linearDefineName}\n`;
        state.compilationString += `${outputString}  = toLinearSpace(${outputString});\n`;
        state.compilationString += `#endif\n`;
        state.compilationString += `#ifdef ${this._gammaDefineName}\n`;
        state.compilationString += `${outputString}  = toGammaSpace(${outputString});\n`;
        state.compilationString += `#endif\n`;
        if (state.shaderLanguage === 1 /* ShaderLanguage.WGSL */ ) {
            state.compilationString += `#if !defined(PREPASS)\r\n`;
            state.compilationString += `fragmentOutputs.color = ${outputString};\r\n`;
            state.compilationString += `#endif\r\n`;
        }
        if (this.useLogarithmicDepth || state.sharedData.nodeMaterial.useLogarithmicDepth) {
            const fragDepth = isWebGPU ? "input.vFragmentDepth" : "vFragmentDepth";
            const uniformP = isWebGPU ? "uniforms." : "";
            const output = isWebGPU ? "fragmentOutputs.fragDepth" : "gl_FragDepthEXT";
            state.compilationString += `${output} = log2(${fragDepth}) * ${uniformP}logarithmicDepthConstant * 0.5;\n`;
        }
        state.compilationString += `#if defined(PREPASS)\r\n`;
        state.compilationString += `${isWebGPU ? "fragmentOutputs.fragData0" : "gl_FragData[0]"} = ${outputString};\r\n`;
        state.compilationString += `#endif\r\n`;
        return this;
    }
    _dumpPropertiesCode() {
        let codeString = super._dumpPropertiesCode();
        codeString += `${this._codeVariableName}.convertToGammaSpace = ${this.convertToGammaSpace};\n`;
        codeString += `${this._codeVariableName}.convertToLinearSpace = ${this.convertToLinearSpace};\n`;
        codeString += `${this._codeVariableName}.useLogarithmicDepth = ${this.useLogarithmicDepth};\n`;
        return codeString;
    }
    serialize() {
        const serializationObject = super.serialize();
        serializationObject.convertToGammaSpace = this.convertToGammaSpace;
        serializationObject.convertToLinearSpace = this.convertToLinearSpace;
        serializationObject.useLogarithmicDepth = this.useLogarithmicDepth;
        return serializationObject;
    }
    _deserialize(serializationObject, scene, rootUrl) {
        super._deserialize(serializationObject, scene, rootUrl);
        this.convertToGammaSpace = !!serializationObject.convertToGammaSpace;
        this.convertToLinearSpace = !!serializationObject.convertToLinearSpace;
        this.useLogarithmicDepth = serializationObject.useLogarithmicDepth ?? false;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("Use logarithmic depth", 0 /* PropertyTypeForEdition.Boolean */ , "PROPERTIES", {
        embedded: true
    })
], FragmentOutputBlock.prototype, "useLogarithmicDepth", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("Color space", 5 /* PropertyTypeForEdition.List */ , "ADVANCED", {
        notifiers: {
            rebuild: true
        },
        embedded: true,
        options: [
            {
                label: "No color space",
                value: FragmentOutputBlockColorSpace.NoColorSpace
            },
            {
                label: "Gamma",
                value: FragmentOutputBlockColorSpace.Gamma
            },
            {
                label: "Linear",
                value: FragmentOutputBlockColorSpace.Linear
            }
        ]
    })
], FragmentOutputBlock.prototype, "colorSpace", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.FragmentOutputBlock", FragmentOutputBlock); //# sourceMappingURL=fragmentOutputBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Fragment/screenSizeBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScreenSizeBlock",
    ()=>ScreenSizeBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
;
;
;
;
class ScreenSizeBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * Name of the variable in the shader that holds the screen size
     */ get associatedVariableName() {
        return this._varName;
    }
    /**
     * Creates a new ScreenSizeBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this.registerOutput("xy", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector2, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this.registerOutput("x", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this.registerOutput("y", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "ScreenSizeBlock";
    }
    /**
     * Gets the xy component
     */ get xy() {
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
    bind(effect) {
        const engine = this._scene.getEngine();
        effect.setFloat2(this._varName, engine.getRenderWidth(), engine.getRenderHeight());
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    writeOutputs(state, varName) {
        let code = "";
        for (const output of this._outputs){
            if (output.hasEndpoints) {
                code += `${state._declareOutput(output)} = ${varName}.${output.name};\n`;
            }
        }
        return code;
    }
    _buildBlock(state) {
        super._buildBlock(state);
        this._scene = state.sharedData.scene;
        if (state.target === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Vertex) {
            state.sharedData.raiseBuildError("ScreenSizeBlock must only be used in a fragment shader");
            return this;
        }
        state.sharedData.bindableBlocks.push(this);
        this._varName = state._getFreeVariableName("screenSize");
        state._emitUniformFromString(this._varName, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector2);
        const prefix = state.shaderLanguage === 1 /* ShaderLanguage.WGSL */  ? "uniforms." : "";
        state.compilationString += this.writeOutputs(state, prefix + this._varName);
        return this;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.ScreenSizeBlock", ScreenSizeBlock); //# sourceMappingURL=screenSizeBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Fragment/smartFilterFragmentOutputBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SfeModeDefine",
    ()=>SfeModeDefine,
    "SmartFilterFragmentOutputBlock",
    ()=>SmartFilterFragmentOutputBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$fragmentOutputBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Fragment/fragmentOutputBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialModes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialModes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$inputBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Input/inputBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$screenSizeBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Fragment/screenSizeBlock.js [app-ssr] (ecmascript)");
;
;
;
;
;
const SfeModeDefine = "USE_SFE_FRAMEWORK";
class SmartFilterFragmentOutputBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$fragmentOutputBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FragmentOutputBlock"] {
    /**
     * Create a new SmartFilterFragmentOutputBlock
     * @param name defines the block name
     */ constructor(name){
        super(name);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "SmartFilterFragmentOutputBlock";
    }
    /**
     * Initialize the block and prepare the context for build
     * @param state defines the state that will be used for the build
     */ initialize(state) {
        super.initialize(state);
        if (state.sharedData.nodeMaterial.mode !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialModes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialModes"].SFE) {
            state.sharedData.raiseBuildError("SmartFilterFragmentOutputBlock should not be used outside of SFE mode.");
        }
        if (state.sharedData.nodeMaterial.shaderLanguage !== 0 /* ShaderLanguage.GLSL */ ) {
            state.sharedData.raiseBuildError("WebGPU is not supported in SmartFilters mode.");
        }
        // Annotate uniforms of InputBlocks and bindable blocks with their current values
        if (!state.sharedData.formatConfig.getUniformAnnotation) {
            state.sharedData.formatConfig.getUniformAnnotation = (name)=>{
                for (const block of state.sharedData.nodeMaterial.attachedBlocks){
                    if (block instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$inputBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputBlock"] && block.isUniform && block.associatedVariableName === name) {
                        return this._generateInputBlockAnnotation(block);
                    }
                    if (block instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$screenSizeBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScreenSizeBlock"] && block.associatedVariableName === name) {
                        return this._generateScreenSizeBlockAnnotation();
                    }
                }
                return "";
            };
        }
        // Do our best to clean up variable names, as they will be used as display names.
        state.sharedData.formatConfig.formatVariablename = (n)=>{
            let name = n;
            const hasUnderscoredPrefix = name.length > 1 && name[1] === "_";
            if (hasUnderscoredPrefix) {
                name = name.substring(2);
            }
            return name.replace(/[^a-zA-Z]+/g, "");
        };
    }
    _generateInputBlockAnnotation(inputBlock) {
        const value = inputBlock.valueCallback ? inputBlock.valueCallback() : inputBlock.value;
        return `// { "default": ${JSON.stringify(value)} }\n`;
    }
    _generateScreenSizeBlockAnnotation() {
        return `// { "autoBind": "outputResolution" }\n`;
    }
    _getMainUvName(state) {
        // Get the ScreenUVBlock's name, which is required for SFE and should be vUV.
        // NOTE: In the future, when we move to vertex shaders, update this to check for the nearest vec2 varying output.
        const screenUv = state.sharedData.nodeMaterial.getInputBlockByPredicate((b)=>b.isAttribute && b.name === "postprocess_uv");
        if (!screenUv || !screenUv.isAnAncestorOf(this)) {
            return "";
        }
        return screenUv.associatedVariableName;
    }
    _getOutputString() {
        return "outColor";
    }
    _buildBlock(state) {
        super._buildBlock(state);
        const outputString = this._getOutputString();
        state._customEntryHeader += `#ifdef ${SfeModeDefine}\n`;
        state._customEntryHeader += `vec4 nmeMain(vec2 ${this._getMainUvName(state)}) { // main\n`;
        state._customEntryHeader += `#else\n`;
        state._customEntryHeader += `void main(void) {\n`;
        state._customEntryHeader += `#endif\n`;
        state._customEntryHeader += `vec4 ${outputString} = vec4(0.0);\n`;
        state.compilationString += `\n#ifndef ${SfeModeDefine}\n`;
        state.compilationString += `gl_FragColor = ${outputString};\n`;
        state.compilationString += `#else\n`;
        state.compilationString += `return ${outputString};\n`;
        state.compilationString += `#endif\n`;
        return this;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.SmartFilterFragmentOutputBlock", SmartFilterFragmentOutputBlock); //# sourceMappingURL=smartFilterFragmentOutputBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Fragment/imageProcessingBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ImageProcessingBlock",
    ()=>ImageProcessingBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Decorators/nodeDecorator.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
class ImageProcessingBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * Create a new ImageProcessingBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        /**
         * Defines if the input should be converted to linear space (default: true)
         */ this.convertInputToLinearSpace = true;
        this.registerInput("color", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].AutoDetect);
        this.registerOutput("output", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color4);
        this.registerOutput("rgb", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color3);
        this._inputs[0].addExcludedConnectionPointFromAllowedTypes(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color3 | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color4 | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3 | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "ImageProcessingBlock";
    }
    /**
     * Gets the color input component
     */ get color() {
        return this._inputs[0];
    }
    /**
     * Gets the output component
     */ get output() {
        return this._outputs[0];
    }
    /**
     * Gets the rgb component
     */ get rgb() {
        return this._outputs[1];
    }
    /**
     * Initialize the block and prepare the context for build
     * @param state defines the state that will be used for the build
     */ initialize(state) {
        state._excludeVariableName("exposureLinear");
        state._excludeVariableName("contrast");
        state._excludeVariableName("vInverseScreenSize");
        state._excludeVariableName("vignetteSettings1");
        state._excludeVariableName("vignetteSettings2");
        state._excludeVariableName("vCameraColorCurveNegative");
        state._excludeVariableName("vCameraColorCurveNeutral");
        state._excludeVariableName("vCameraColorCurvePositive");
        state._excludeVariableName("txColorTransform");
        state._excludeVariableName("colorTransformSettings");
        state._excludeVariableName("ditherIntensity");
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this._initShaderSourceAsync(state.shaderLanguage);
    }
    async _initShaderSourceAsync(shaderLanguage) {
        this._codeIsReady = false;
        if (shaderLanguage === 1 /* ShaderLanguage.WGSL */ ) {
            await Promise.all([
                __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/helperFunctions.js [app-ssr] (ecmascript, async loader)"),
                __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/imageProcessingDeclaration.js [app-ssr] (ecmascript, async loader)"),
                __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/imageProcessingFunctions.js [app-ssr] (ecmascript, async loader)")
            ]);
        } else {
            await Promise.all([
                __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/helperFunctions.js [app-ssr] (ecmascript, async loader)"),
                __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/imageProcessingDeclaration.js [app-ssr] (ecmascript, async loader)"),
                __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/imageProcessingFunctions.js [app-ssr] (ecmascript, async loader)")
            ]);
        }
        this._codeIsReady = true;
        this.onCodeIsReadyObservable.notifyObservers(this);
    }
    isReady(mesh, nodeMaterial, defines) {
        if (defines._areImageProcessingDirty && nodeMaterial.imageProcessingConfiguration) {
            if (!nodeMaterial.imageProcessingConfiguration.isReady()) {
                return false;
            }
        }
        return true;
    }
    prepareDefines(defines, nodeMaterial) {
        if (defines._areImageProcessingDirty && nodeMaterial.imageProcessingConfiguration) {
            nodeMaterial.imageProcessingConfiguration.prepareDefines(defines);
        }
    }
    bind(effect, nodeMaterial, mesh) {
        if (!mesh) {
            return;
        }
        if (!nodeMaterial.imageProcessingConfiguration) {
            return;
        }
        nodeMaterial.imageProcessingConfiguration.bind(effect);
    }
    _buildBlock(state) {
        super._buildBlock(state);
        // Register for defines
        state.sharedData.blocksWithDefines.push(this);
        // Register for blocking
        state.sharedData.blockingBlocks.push(this);
        // Register for binding
        state.sharedData.bindableBlocks.push(this);
        // Uniforms
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
        // Emit code
        const color = this.color;
        const output = this._outputs[0];
        const comments = `//${this.name}`;
        const overrideText = state.shaderLanguage === 1 /* ShaderLanguage.WGSL */  ? "Vec3" : "";
        state._emitFunctionFromInclude("helperFunctions", comments);
        state._emitFunctionFromInclude("imageProcessingDeclaration", comments);
        state._emitFunctionFromInclude("imageProcessingFunctions", comments);
        if (color.connectedPoint?.isConnected) {
            if (color.connectedPoint.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color4 || color.connectedPoint.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4) {
                state.compilationString += `${state._declareOutput(output)} = ${color.associatedVariableName};\n`;
            } else {
                state.compilationString += `${state._declareOutput(output)} = vec4${state.fSuffix}(${color.associatedVariableName}, 1.0);\n`;
            }
            state.compilationString += `#ifdef IMAGEPROCESSINGPOSTPROCESS\n`;
            if (this.convertInputToLinearSpace) {
                state.compilationString += `${output.associatedVariableName} = vec4${state.fSuffix}(toLinearSpace${overrideText}(${color.associatedVariableName}.rgb), ${color.associatedVariableName}.a);\n`;
            }
            state.compilationString += `#else\n`;
            state.compilationString += `#ifdef IMAGEPROCESSING\n`;
            if (this.convertInputToLinearSpace) {
                state.compilationString += `${output.associatedVariableName} = vec4${state.fSuffix}(toLinearSpace${overrideText}(${color.associatedVariableName}.rgb), ${color.associatedVariableName}.a);\n`;
            }
            state.compilationString += `${output.associatedVariableName} = applyImageProcessing(${output.associatedVariableName});\n`;
            state.compilationString += `#endif\n`;
            state.compilationString += `#endif\n`;
            if (this.rgb.hasEndpoints) {
                state.compilationString += state._declareOutput(this.rgb) + ` = ${this.output.associatedVariableName}.xyz;\n`;
            }
        }
        return this;
    }
    _dumpPropertiesCode() {
        let codeString = super._dumpPropertiesCode();
        codeString += `${this._codeVariableName}.convertInputToLinearSpace = ${this.convertInputToLinearSpace};\n`;
        return codeString;
    }
    serialize() {
        const serializationObject = super.serialize();
        serializationObject.convertInputToLinearSpace = this.convertInputToLinearSpace;
        return serializationObject;
    }
    _deserialize(serializationObject, scene, rootUrl) {
        super._deserialize(serializationObject, scene, rootUrl);
        this.convertInputToLinearSpace = serializationObject.convertInputToLinearSpace ?? true;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("Convert input to linear space", 0 /* PropertyTypeForEdition.Boolean */ , "ADVANCED")
], ImageProcessingBlock.prototype, "convertInputToLinearSpace", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.ImageProcessingBlock", ImageProcessingBlock); //# sourceMappingURL=imageProcessingBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Fragment/TBNBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TBNBlock",
    ()=>TBNBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialConnectionPointCustomObject$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialConnectionPointCustomObject.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialSystemValues$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialSystemValues.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$inputBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Input/inputBlock.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
class TBNBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * Create a new TBNBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment, true);
        this.registerInput("normal", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].AutoDetect, false);
        this.normal.addExcludedConnectionPointFromAllowedTypes(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color4 | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4 | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3);
        this.registerInput("tangent", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4, false);
        this.registerInput("world", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Matrix, false);
        this.registerOutput("TBN", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Object, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialConnectionPointCustomObject$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialConnectionPointCustomObject"]("TBN", this, 1 /* NodeMaterialConnectionPointDirection.Output */ , TBNBlock, "TBNBlock"));
        this.registerOutput("row0", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this.registerOutput("row1", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this.registerOutput("row2", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "TBNBlock";
    }
    /**
     * Initialize the block and prepare the context for build
     * @param state defines the state that will be used for the build
     */ initialize(state) {
        state._excludeVariableName("tbnNormal");
        state._excludeVariableName("tbnTangent");
        state._excludeVariableName("tbnBitangent");
        state._excludeVariableName("TBN");
    }
    /**
     * Gets the normal input component
     */ get normal() {
        return this._inputs[0];
    }
    /**
     * Gets the tangent input component
     */ get tangent() {
        return this._inputs[1];
    }
    /**
     * Gets the world matrix input component
     */ get world() {
        return this._inputs[2];
    }
    /**
     * Gets the TBN output component
     */ // eslint-disable-next-line @typescript-eslint/naming-convention
    get TBN() {
        return this._outputs[0];
    }
    /**
     * Gets the row0 of the output matrix
     */ get row0() {
        return this._outputs[1];
    }
    /**
     * Gets the row1 of the output matrix
     */ get row1() {
        return this._outputs[2];
    }
    /**
     * Gets the row2 of the output matrix
     */ get row2() {
        return this._outputs[3];
    }
    get target() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment;
    }
    set target(value) {}
    autoConfigure(material, additionalFilteringInfo = ()=>true) {
        if (!this.world.isConnected) {
            let worldInput = material.getInputBlockByPredicate((b)=>b.isSystemValue && b.systemValue === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialSystemValues$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialSystemValues"].World && additionalFilteringInfo(b));
            if (!worldInput) {
                worldInput = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$inputBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputBlock"]("world");
                worldInput.setAsSystemValue(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialSystemValues$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialSystemValues"].World);
            }
            worldInput.output.connectTo(this.world);
        }
        if (!this.normal.isConnected) {
            let normalInput = material.getInputBlockByPredicate((b)=>b.isAttribute && b.name === "normal" && additionalFilteringInfo(b));
            if (!normalInput) {
                normalInput = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$inputBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputBlock"]("normal");
                normalInput.setAsAttribute("normal");
            }
            normalInput.output.connectTo(this.normal);
        }
        if (!this.tangent.isConnected) {
            let tangentInput = material.getInputBlockByPredicate((b)=>b.isAttribute && b.name === "tangent" && b.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4 && additionalFilteringInfo(b));
            if (!tangentInput) {
                tangentInput = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$inputBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputBlock"]("tangent");
                tangentInput.setAsAttribute("tangent");
            }
            tangentInput.output.connectTo(this.tangent);
        }
    }
    prepareDefines(defines, nodeMaterial, mesh) {
        if (!mesh) {
            return;
        }
        const normal = this.normal;
        const tangent = this.tangent;
        let normalAvailable = normal.isConnected;
        if (normal.connectInputBlock?.isAttribute && !mesh.isVerticesDataPresent(normal.connectInputBlock?.name)) {
            normalAvailable = false;
        }
        let tangentAvailable = tangent.isConnected;
        if (tangent.connectInputBlock?.isAttribute && !mesh.isVerticesDataPresent(tangent.connectInputBlock?.name)) {
            tangentAvailable = false;
        }
        const useTBNBlock = normalAvailable && tangentAvailable;
        defines.setValue("TBNBLOCK", useTBNBlock, true);
    }
    _buildBlock(state) {
        super._buildBlock(state);
        const normal = this.normal;
        const tangent = this.tangent;
        const world = this.world;
        const tbn = this.TBN;
        const row0 = this.row0;
        const row1 = this.row1;
        const row2 = this.row2;
        const isWebGPU = state.shaderLanguage === 1 /* ShaderLanguage.WGSL */ ;
        const mat3 = isWebGPU ? "mat3x3f" : "mat3";
        const fSuffix = isWebGPU ? "f" : "";
        // Fragment
        if (state.target === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment) {
            state.compilationString += `
                // ${this.name}
                ${state._declareLocalVar("tbnNormal", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3)} = normalize(${normal.associatedVariableName}).xyz;
                ${state._declareLocalVar("tbnTangent", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3)} = normalize(${tangent.associatedVariableName}.xyz);
                ${state._declareLocalVar("tbnBitangent", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3)} = cross(tbnNormal, tbnTangent) * ${tangent.associatedVariableName}.w;
                ${isWebGPU ? "var" : "mat3"} ${tbn.associatedVariableName} = ${mat3}(${world.associatedVariableName}[0].xyz, ${world.associatedVariableName}[1].xyz, ${world.associatedVariableName}[2].xyz) * ${mat3}(tbnTangent, tbnBitangent, tbnNormal);
            `;
            if (row0.hasEndpoints) {
                state.compilationString += state._declareOutput(row0) + ` = vec3${fSuffix}(${tbn.associatedVariableName}[0][0], ${tbn.associatedVariableName}[0][1], ${tbn.associatedVariableName}[0][2]);\n`;
            }
            if (row1.hasEndpoints) {
                state.compilationString += state._declareOutput(row1) + ` = vec3${fSuffix}(${tbn.associatedVariableName}[1[0], ${tbn.associatedVariableName}[1][1], ${tbn.associatedVariableName}[1][2]);\n`;
            }
            if (row2.hasEndpoints) {
                state.compilationString += state._declareOutput(row2) + ` = vec3${fSuffix}(${tbn.associatedVariableName}[2][0], ${tbn.associatedVariableName}[2][1], ${tbn.associatedVariableName}[2][2]);\n`;
            }
            state.sharedData.blocksWithDefines.push(this);
        }
        return this;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.TBNBlock", TBNBlock); //# sourceMappingURL=TBNBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Fragment/perturbNormalBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PerturbNormalBlock",
    ()=>PerturbNormalBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$inputBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Input/inputBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Decorators/nodeDecorator.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialConnectionPointCustomObject$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialConnectionPointCustomObject.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$TBNBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Fragment/TBNBlock.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
class PerturbNormalBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * Create a new PerturbNormalBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this._tangentSpaceParameterName = "";
        this._tangentCorrectionFactorName = "";
        this._worldMatrixName = "";
        /** Gets or sets a boolean indicating that normal should be inverted on X axis */ this.invertX = false;
        /** Gets or sets a boolean indicating that normal should be inverted on Y axis */ this.invertY = false;
        /** Gets or sets a boolean indicating that parallax occlusion should be enabled */ this.useParallaxOcclusion = false;
        /** Gets or sets a boolean indicating that sampling mode is in Object space */ this.useObjectSpaceNormalMap = false;
        this._isUnique = true;
        // Vertex
        this.registerInput("worldPosition", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4, false);
        this.registerInput("worldNormal", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4, false);
        this.registerInput("worldTangent", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4, true);
        this.registerInput("uv", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector2, false);
        this.registerInput("normalMapColor", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color3, false);
        this.registerInput("strength", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float, false);
        this.registerInput("viewDirection", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3, true);
        this.registerInput("parallaxScale", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float, true);
        this.registerInput("parallaxHeight", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float, true);
        this.registerInput("TBN", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Object, true, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].VertexAndFragment, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialConnectionPointCustomObject$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialConnectionPointCustomObject"]("TBN", this, 0 /* NodeMaterialConnectionPointDirection.Input */ , __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$TBNBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TBNBlock"], "TBNBlock"));
        this.registerInput("world", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Matrix, true);
        // Fragment
        this.registerOutput("output", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4);
        this.registerOutput("uvOffset", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector2);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "PerturbNormalBlock";
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
     * Gets the world tangent input component
     */ get worldTangent() {
        return this._inputs[2];
    }
    /**
     * Gets the uv input component
     */ get uv() {
        return this._inputs[3];
    }
    /**
     * Gets the normal map color input component
     */ get normalMapColor() {
        return this._inputs[4];
    }
    /**
     * Gets the strength input component
     */ get strength() {
        return this._inputs[5];
    }
    /**
     * Gets the view direction input component
     */ get viewDirection() {
        return this._inputs[6];
    }
    /**
     * Gets the parallax scale input component
     */ get parallaxScale() {
        return this._inputs[7];
    }
    /**
     * Gets the parallax height input component
     */ get parallaxHeight() {
        return this._inputs[8];
    }
    /**
     * Gets the TBN input component
     */ // eslint-disable-next-line @typescript-eslint/naming-convention
    get TBN() {
        return this._inputs[9];
    }
    /**
     * Gets the World input component
     */ get world() {
        return this._inputs[10];
    }
    /**
     * Gets the output component
     */ get output() {
        return this._outputs[0];
    }
    /**
     * Gets the uv offset output component
     */ get uvOffset() {
        return this._outputs[1];
    }
    initialize(state) {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this._initShaderSourceAsync(state.shaderLanguage);
    }
    async _initShaderSourceAsync(shaderLanguage) {
        this._codeIsReady = false;
        if (shaderLanguage === 1 /* ShaderLanguage.WGSL */ ) {
            await Promise.all([
                __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/bumpFragment.js [app-ssr] (ecmascript, async loader)"),
                __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/bumpFragmentMainFunctions.js [app-ssr] (ecmascript, async loader)"),
                __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/bumpFragmentFunctions.js [app-ssr] (ecmascript, async loader)")
            ]);
        } else {
            await Promise.all([
                __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/bumpFragment.js [app-ssr] (ecmascript, async loader)"),
                __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/bumpFragmentMainFunctions.js [app-ssr] (ecmascript, async loader)"),
                __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/bumpFragmentFunctions.js [app-ssr] (ecmascript, async loader)")
            ]);
        }
        this._codeIsReady = true;
        this.onCodeIsReadyObservable.notifyObservers(this);
    }
    prepareDefines(defines, nodeMaterial) {
        const normalSamplerName = this.normalMapColor.connectedPoint._ownerBlock.samplerName;
        const useParallax = this.viewDirection.isConnected && (this.useParallaxOcclusion && !!normalSamplerName || !this.useParallaxOcclusion && this.parallaxHeight.isConnected);
        defines.setValue("BUMP", true);
        defines.setValue("PARALLAX", useParallax, true);
        defines.setValue("PARALLAX_RHS", nodeMaterial.getScene().useRightHandedSystem, true);
        defines.setValue("PARALLAXOCCLUSION", this.useParallaxOcclusion, true);
        defines.setValue("OBJECTSPACE_NORMALMAP", this.useObjectSpaceNormalMap, true);
    }
    bind(effect, nodeMaterial, mesh) {
        if (nodeMaterial.getScene()._mirroredCameraPosition) {
            effect.setFloat2(this._tangentSpaceParameterName, this.invertX ? 1.0 : -1.0, this.invertY ? 1.0 : -1.0);
        } else {
            effect.setFloat2(this._tangentSpaceParameterName, this.invertX ? -1.0 : 1.0, this.invertY ? -1.0 : 1.0);
        }
        if (mesh) {
            effect.setFloat(this._tangentCorrectionFactorName, mesh.getWorldMatrix().determinant() < 0 ? -1 : 1);
            if (this.useObjectSpaceNormalMap && !this.world.isConnected) {
                // World default to the mesh world matrix
                effect.setMatrix(this._worldMatrixName, mesh.getWorldMatrix());
            }
        }
    }
    autoConfigure(material, additionalFilteringInfo = ()=>true) {
        if (!this.uv.isConnected) {
            let uvInput = material.getInputBlockByPredicate((b)=>b.isAttribute && b.name === "uv" && additionalFilteringInfo(b));
            if (!uvInput) {
                uvInput = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$inputBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputBlock"]("uv");
                uvInput.setAsAttribute();
            }
            uvInput.output.connectTo(this.uv);
        }
        if (!this.strength.isConnected) {
            const strengthInput = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$inputBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputBlock"]("strength");
            strengthInput.value = 1.0;
            strengthInput.output.connectTo(this.strength);
        }
    }
    _buildBlock(state) {
        super._buildBlock(state);
        const comments = `//${this.name}`;
        const uv = this.uv;
        const worldPosition = this.worldPosition;
        const worldNormal = this.worldNormal;
        const worldTangent = this.worldTangent;
        const isWebGPU = state.shaderLanguage === 1 /* ShaderLanguage.WGSL */ ;
        const mat3 = isWebGPU ? "mat3x3f" : "mat3";
        const fSuffix = isWebGPU ? "f" : "";
        const uniformPrefix = isWebGPU ? "uniforms." : "";
        const fragmentInputsPrefix = isWebGPU ? "fragmentInputs." : "";
        state.sharedData.blocksWithDefines.push(this);
        state.sharedData.bindableBlocks.push(this);
        this._tangentSpaceParameterName = state._getFreeDefineName("tangentSpaceParameter");
        state._emitUniformFromString(this._tangentSpaceParameterName, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector2);
        this._tangentCorrectionFactorName = state._getFreeDefineName("tangentCorrectionFactor");
        state._emitUniformFromString(this._tangentCorrectionFactorName, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float);
        this._worldMatrixName = state._getFreeDefineName("perturbNormalWorldMatrix");
        state._emitUniformFromString(this._worldMatrixName, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Matrix);
        let normalSamplerName = null;
        if (this.normalMapColor.connectedPoint) {
            normalSamplerName = this.normalMapColor.connectedPoint._ownerBlock.samplerName;
        }
        const useParallax = this.viewDirection.isConnected && (this.useParallaxOcclusion && !!normalSamplerName || !this.useParallaxOcclusion && this.parallaxHeight.isConnected);
        const replaceForParallaxInfos = !this.parallaxScale.isConnectedToInputBlock ? "0.05" : this.parallaxScale.connectInputBlock.isConstant ? state._emitFloat(this.parallaxScale.connectInputBlock.value) : this.parallaxScale.associatedVariableName;
        const replaceForBumpInfos = this.strength.isConnectedToInputBlock && this.strength.connectInputBlock.isConstant ? `\n#if !defined(NORMALXYSCALE)\n1.0/\n#endif\n${state._emitFloat(this.strength.connectInputBlock.value)}` : `\n#if !defined(NORMALXYSCALE)\n1.0/\n#endif\n${this.strength.associatedVariableName}`;
        if (!isWebGPU) {
            state._emitExtension("derivatives", "#extension GL_OES_standard_derivatives : enable");
        }
        const tangentReplaceString = {
            search: /defined\(TANGENT\)/g,
            replace: worldTangent.isConnected ? "defined(TANGENT)" : "defined(IGNORE)"
        };
        const tbnVarying = {
            search: /varying mat3 vTBN;/g,
            replace: ""
        };
        const normalMatrixReplaceString = {
            search: isWebGPU ? /uniform normalMatrix: mat4x4f;/g : /uniform mat4 normalMatrix;/g,
            replace: ""
        };
        const tbn = this.TBN;
        if (tbn.isConnected) {
            state.compilationString += `
            #ifdef TBNBLOCK
            ${isWebGPU ? "var" : "mat3"} vTBN = ${tbn.associatedVariableName};
            #endif
            `;
        } else if (worldTangent.isConnected) {
            state.compilationString += `${state._declareLocalVar("tbnNormal", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3)} = normalize(${worldNormal.associatedVariableName}.xyz);\n`;
            state.compilationString += `${state._declareLocalVar("tbnTangent", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3)} = normalize(${worldTangent.associatedVariableName}.xyz);\n`;
            state.compilationString += `${state._declareLocalVar("tbnBitangent", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3)} = cross(tbnNormal, tbnTangent) * ${uniformPrefix}${this._tangentCorrectionFactorName};\n`;
            state.compilationString += `${isWebGPU ? "var" : "mat3"} vTBN = ${mat3}(tbnTangent, tbnBitangent, tbnNormal);\n`;
        }
        let replaceStrings = [
            tangentReplaceString,
            tbnVarying,
            normalMatrixReplaceString
        ];
        if (isWebGPU) {
            replaceStrings.push({
                search: /varying vTBN0: vec3f;/g,
                replace: ""
            });
            replaceStrings.push({
                search: /varying vTBN1: vec3f;/g,
                replace: ""
            });
            replaceStrings.push({
                search: /varying vTBN2: vec3f;/g,
                replace: ""
            });
        }
        state._emitFunctionFromInclude("bumpFragmentMainFunctions", comments, {
            replaceStrings: replaceStrings
        });
        const replaceString0 = isWebGPU ? "fn parallaxOcclusion(vViewDirCoT: vec3f, vNormalCoT: vec3f, texCoord: vec2f, parallaxScale:f32, bumpSampler: texture_2d<f32>, bumpSamplerSampler: sampler)" : "#define inline\nvec2 parallaxOcclusion(vec3 vViewDirCoT, vec3 vNormalCoT, vec2 texCoord, float parallaxScale, sampler2D bumpSampler)";
        const searchExp0 = isWebGPU ? /fn parallaxOcclusion\(vViewDirCoT: vec3f,vNormalCoT: vec3f,texCoord: vec2f,parallaxScale: f32\)/g : /vec2 parallaxOcclusion\(vec3 vViewDirCoT,vec3 vNormalCoT,vec2 texCoord,float parallaxScale\)/g;
        const replaceString1 = isWebGPU ? "fn parallaxOffset(viewDir: vec3f, heightScale: f32, height_: f32)" : "vec2 parallaxOffset(vec3 viewDir, float heightScale, float height_)";
        const searchExp1 = isWebGPU ? /fn parallaxOffset\(viewDir: vec3f,heightScale: f32\)/g : /vec2 parallaxOffset\(vec3 viewDir,float heightScale\)/g;
        state._emitFunctionFromInclude("bumpFragmentFunctions", comments, {
            replaceStrings: [
                {
                    search: /#include<samplerFragmentDeclaration>\(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump,_SAMPLERNAME_,bump\)/g,
                    replace: ""
                },
                {
                    search: /uniform sampler2D bumpSampler;/g,
                    replace: ""
                },
                {
                    search: searchExp0,
                    replace: replaceString0
                },
                {
                    search: searchExp1,
                    replace: replaceString1
                },
                {
                    search: /texture.+?bumpSampler,.*?vBumpUV\)\.w/g,
                    replace: "height_"
                }
            ]
        });
        const normalRead = isWebGPU ? `textureSample(${normalSamplerName}, ${normalSamplerName + `Sampler`}` : `texture2D(${normalSamplerName}`;
        const uvForPerturbNormal = !useParallax || !normalSamplerName ? this.normalMapColor.associatedVariableName : `${normalRead}, ${uv.associatedVariableName} + uvOffset).xyz`;
        const tempOutput = state._getFreeVariableName("tempOutput");
        state.compilationString += state._declareLocalVar(tempOutput, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3) + ` = vec3${fSuffix}(0.);\n`;
        replaceStrings = [
            {
                search: new RegExp(`texture.+?bumpSampler${isWebGPU ? "Sampler,fragmentInputs." : ","}vBumpUV\\)`, "g"),
                replace: `${uvForPerturbNormal}`
            },
            {
                search: /#define CUSTOM_FRAGMENT_BUMP_FRAGMENT/g,
                replace: `${state._declareLocalVar("normalMatrix", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Matrix)} = toNormalMatrix(${this.world.isConnected ? this.world.associatedVariableName : uniformPrefix + this._worldMatrixName});`
            },
            {
                search: new RegExp(`perturbNormal\\(TBN,texture.+?bumpSampler${isWebGPU ? "Sampler,fragmentInputs." : ","}vBumpUV\\+uvOffset\\).xyz,${uniformPrefix}vBumpInfos.y\\)`, "g"),
                replace: `perturbNormal(TBN, ${uvForPerturbNormal}, ${uniformPrefix}vBumpInfos.y)`
            },
            {
                search: /parallaxOcclusion\(invTBN\*-viewDirectionW,invTBN\*normalW,(fragmentInputs\.)?vBumpUV,(uniforms\.)?vBumpInfos.z\)/g,
                replace: `parallaxOcclusion((invTBN * -viewDirectionW), (invTBN * normalW), ${fragmentInputsPrefix}vBumpUV, ${uniformPrefix}vBumpInfos.z, ${isWebGPU ? useParallax && this.useParallaxOcclusion ? `${normalSamplerName}, ${normalSamplerName + `Sampler`}` : "bump, bumpSampler" : useParallax && this.useParallaxOcclusion ? normalSamplerName : "bumpSampler"})`
            },
            {
                search: /parallaxOffset\(invTBN\*viewDirectionW,vBumpInfos\.z\)/g,
                replace: `parallaxOffset(invTBN * viewDirectionW, ${uniformPrefix}vBumpInfos.z, ${useParallax ? this.parallaxHeight.associatedVariableName : "0."})`
            },
            {
                search: isWebGPU ? /uniforms.vBumpInfos.y/g : /vBumpInfos.y/g,
                replace: replaceForBumpInfos
            },
            {
                search: isWebGPU ? /uniforms.vBumpInfos.z/g : /vBumpInfos.z/g,
                replace: replaceForParallaxInfos
            },
            {
                search: /normalW=/g,
                replace: tempOutput + " = "
            },
            isWebGPU ? {
                search: /mat3x3f\(uniforms\.normalMatrix\[0\].xyz,uniforms\.normalMatrix\[1\]\.xyz,uniforms\.normalMatrix\[2\].xyz\)\*normalW/g,
                replace: `${mat3}(normalMatrix[0].xyz, normalMatrix[1].xyz, normalMatrix[2].xyz) * ` + tempOutput
            } : {
                search: /mat3\(normalMatrix\)\*normalW/g,
                replace: `${mat3}(normalMatrix) * ` + tempOutput
            },
            {
                search: /normalW/g,
                replace: worldNormal.associatedVariableName + ".xyz"
            },
            {
                search: /viewDirectionW/g,
                replace: useParallax ? this.viewDirection.associatedVariableName : `vec3${fSuffix}(0.)`
            },
            tangentReplaceString
        ];
        if (isWebGPU) {
            replaceStrings.push({
                search: /fragmentInputs.vBumpUV/g,
                replace: uv.associatedVariableName
            });
            replaceStrings.push({
                search: /input.vPositionW/g,
                replace: worldPosition.associatedVariableName + ".xyz"
            });
            replaceStrings.push({
                search: /uniforms.vTangentSpaceParams/g,
                replace: uniformPrefix + this._tangentSpaceParameterName
            });
            replaceStrings.push({
                search: /var TBN: mat3x3f=mat3x3<f32>\(input.vTBN0,input.vTBN1,input.vTBN2\);/g,
                replace: `var TBN = vTBN;`
            });
        } else {
            replaceStrings.push({
                search: /vBumpUV/g,
                replace: uv.associatedVariableName
            });
            replaceStrings.push({
                search: /vPositionW/g,
                replace: worldPosition.associatedVariableName + ".xyz"
            });
            replaceStrings.push({
                search: /vTangentSpaceParams/g,
                replace: uniformPrefix + this._tangentSpaceParameterName
            });
        }
        state.compilationString += state._emitCodeFromInclude("bumpFragment", comments, {
            replaceStrings: replaceStrings
        });
        state.compilationString += state._declareOutput(this.output) + ` = vec4${fSuffix}(${tempOutput}, 0.);\n`;
        return this;
    }
    _dumpPropertiesCode() {
        let codeString = super._dumpPropertiesCode() + `${this._codeVariableName}.invertX = ${this.invertX};\n`;
        codeString += `${this._codeVariableName}.invertY = ${this.invertY};\n`;
        codeString += `${this._codeVariableName}.useParallaxOcclusion = ${this.useParallaxOcclusion};\n`;
        codeString += `${this._codeVariableName}.useObjectSpaceNormalMap = ${this.useObjectSpaceNormalMap};\n`;
        return codeString;
    }
    serialize() {
        const serializationObject = super.serialize();
        serializationObject.invertX = this.invertX;
        serializationObject.invertY = this.invertY;
        serializationObject.useParallaxOcclusion = this.useParallaxOcclusion;
        serializationObject.useObjectSpaceNormalMap = this.useObjectSpaceNormalMap;
        return serializationObject;
    }
    _deserialize(serializationObject, scene, rootUrl) {
        super._deserialize(serializationObject, scene, rootUrl);
        this.invertX = serializationObject.invertX;
        this.invertY = serializationObject.invertY;
        this.useParallaxOcclusion = !!serializationObject.useParallaxOcclusion;
        this.useObjectSpaceNormalMap = !!serializationObject.useObjectSpaceNormalMap;
        this.parallaxScale._isInactive = this.useParallaxOcclusion;
        this.parallaxHeight._isInactive = this.useParallaxOcclusion;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("Invert X axis", 0 /* PropertyTypeForEdition.Boolean */ , "PROPERTIES", {
        embedded: true,
        notifiers: {
            update: true
        }
    })
], PerturbNormalBlock.prototype, "invertX", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("Invert Y axis", 0 /* PropertyTypeForEdition.Boolean */ , "PROPERTIES", {
        embedded: true,
        notifiers: {
            update: true
        }
    })
], PerturbNormalBlock.prototype, "invertY", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("Use parallax occlusion", 0 /* PropertyTypeForEdition.Boolean */ , undefined, {
        embedded: true,
        notifiers: {
            update: true,
            callback: (_scene, block)=>{
                block.parallaxScale._isInactive = block.useParallaxOcclusion;
                block.parallaxHeight._isInactive = block.useParallaxOcclusion;
                return true;
            }
        }
    })
], PerturbNormalBlock.prototype, "useParallaxOcclusion", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("Object Space Mode", 0 /* PropertyTypeForEdition.Boolean */ , "PROPERTIES", {
        embedded: true,
        notifiers: {
            update: true
        }
    })
], PerturbNormalBlock.prototype, "useObjectSpaceNormalMap", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.PerturbNormalBlock", PerturbNormalBlock); //# sourceMappingURL=perturbNormalBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Fragment/discardBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DiscardBlock",
    ()=>DiscardBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
;
;
;
;
class DiscardBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * Create a new DiscardBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment, true);
        this.registerInput("value", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float, true);
        this.registerInput("cutoff", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float, true);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "DiscardBlock";
    }
    /**
     * Gets the color input component
     */ get value() {
        return this._inputs[0];
    }
    /**
     * Gets the cutoff input component
     */ get cutoff() {
        return this._inputs[1];
    }
    _buildBlock(state) {
        super._buildBlock(state);
        state.sharedData.hints.needAlphaTesting = true;
        if (!this.cutoff.isConnected || !this.value.isConnected) {
            return;
        }
        state.compilationString += `if (${this.value.associatedVariableName} < ${this.cutoff.associatedVariableName}) { discard; }\n`;
        return this;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.DiscardBlock", DiscardBlock); //# sourceMappingURL=discardBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Fragment/frontFacingBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FrontFacingBlock",
    ()=>FrontFacingBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
;
;
;
;
class FrontFacingBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * Creates a new FrontFacingBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this.registerOutput("output", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "FrontFacingBlock";
    }
    /**
     * Gets the output component
     */ get output() {
        return this._outputs[0];
    }
    _buildBlock(state) {
        super._buildBlock(state);
        if (state.target === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Vertex) {
            state.sharedData.raiseBuildError("FrontFacingBlock must only be used in a fragment shader");
            return this;
        }
        const output = this._outputs[0];
        state.compilationString += state._declareOutput(output) + ` = ${state._generateTernary("1.0", "0.0", state.shaderLanguage === 0 /* ShaderLanguage.GLSL */  ? "gl_FrontFacing" : "fragmentInputs.frontFacing")};\n`;
        return this;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.FrontFacingBlock", FrontFacingBlock); //# sourceMappingURL=frontFacingBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Fragment/derivativeBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DerivativeBlock",
    ()=>DerivativeBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
;
;
;
;
class DerivativeBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * Create a new DerivativeBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this.registerInput("input", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].AutoDetect, false);
        this.registerOutput("dx", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].BasedOnInput);
        this.registerOutput("dy", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].BasedOnInput);
        this._outputs[0]._typeConnectionSource = this._inputs[0];
        this._outputs[1]._typeConnectionSource = this._inputs[0];
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "DerivativeBlock";
    }
    /**
     * Gets the input component
     */ get input() {
        return this._inputs[0];
    }
    /**
     * Gets the derivative output on x
     */ get dx() {
        return this._outputs[0];
    }
    /**
     * Gets the derivative output on y
     */ get dy() {
        return this._outputs[1];
    }
    _buildBlock(state) {
        super._buildBlock(state);
        const dx = this._outputs[0];
        const dy = this._outputs[1];
        state._emitExtension("derivatives", "#extension GL_OES_standard_derivatives : enable");
        let dpdx = "dFdx";
        let dpdy = "dFdy";
        if (state.shaderLanguage === 1 /* ShaderLanguage.WGSL */ ) {
            dpdx = "dpdx";
            dpdy = "dpdy";
        }
        if (dx.hasEndpoints) {
            state.compilationString += state._declareOutput(dx) + ` = ${dpdx}(${this.input.associatedVariableName});\n`;
        }
        if (dy.hasEndpoints) {
            state.compilationString += state._declareOutput(dy) + ` = ${dpdy}(${this.input.associatedVariableName});\n`;
        }
        return this;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.DerivativeBlock", DerivativeBlock); //# sourceMappingURL=derivativeBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Fragment/fragCoordBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FragCoordBlock",
    ()=>FragCoordBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
;
;
;
;
class FragCoordBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * Creates a new FragCoordBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this.registerOutput("xy", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector2, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this.registerOutput("xyz", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this.registerOutput("xyzw", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this.registerOutput("x", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this.registerOutput("y", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this.registerOutput("z", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this.registerOutput("w", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "FragCoordBlock";
    }
    /**
     * Gets the xy component
     */ get xy() {
        return this._outputs[0];
    }
    /**
     * Gets the xyz component
     */ get xyz() {
        return this._outputs[1];
    }
    /**
     * Gets the xyzw component
     */ get xyzw() {
        return this._outputs[2];
    }
    /**
     * Gets the x component
     */ get x() {
        return this._outputs[3];
    }
    /**
     * Gets the y component
     */ get y() {
        return this._outputs[4];
    }
    /**
     * Gets the z component
     */ get z() {
        return this._outputs[5];
    }
    /**
     * Gets the w component
     */ get output() {
        return this._outputs[6];
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    writeOutputs(state) {
        let code = "";
        const coord = state.shaderLanguage === 1 /* ShaderLanguage.WGSL */  ? "fragmentInputs.position" : "gl_FragCoord";
        for (const output of this._outputs){
            if (output.hasEndpoints) {
                code += `${state._declareOutput(output)} = ${coord}.${output.name};\n`;
            }
        }
        return code;
    }
    _buildBlock(state) {
        super._buildBlock(state);
        if (state.target === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Vertex) {
            state.sharedData.raiseBuildError("FragCoordBlock must only be used in a fragment shader");
            return this;
        }
        state.compilationString += this.writeOutputs(state);
        return this;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.FragCoordBlock", FragCoordBlock); //# sourceMappingURL=fragCoordBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Fragment/screenSpaceBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScreenSpaceBlock",
    ()=>ScreenSpaceBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialSystemValues$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialSystemValues.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$inputBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Input/inputBlock.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
class ScreenSpaceBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * Creates a new ScreenSpaceBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this.registerInput("vector", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].AutoDetect);
        this.registerInput("worldViewProjection", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Matrix);
        this.registerOutput("output", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector2);
        this.registerOutput("x", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float);
        this.registerOutput("y", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float);
        this.inputs[0].addExcludedConnectionPointFromAllowedTypes(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color3 | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3 | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "ScreenSpaceBlock";
    }
    /**
     * Gets the vector input
     */ get vector() {
        return this._inputs[0];
    }
    /**
     * Gets the worldViewProjection transform input
     */ get worldViewProjection() {
        return this._inputs[1];
    }
    /**
     * Gets the output component
     */ get output() {
        return this._outputs[0];
    }
    /**
     * Gets the x output component
     */ get x() {
        return this._outputs[1];
    }
    /**
     * Gets the y output component
     */ get y() {
        return this._outputs[2];
    }
    autoConfigure(material, additionalFilteringInfo = ()=>true) {
        if (!this.worldViewProjection.isConnected) {
            let worldViewProjectionInput = material.getInputBlockByPredicate((b)=>b.systemValue === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialSystemValues$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialSystemValues"].WorldViewProjection && additionalFilteringInfo(b));
            if (!worldViewProjectionInput) {
                worldViewProjectionInput = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$inputBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputBlock"]("worldViewProjection");
                worldViewProjectionInput.setAsSystemValue(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialSystemValues$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialSystemValues"].WorldViewProjection);
            }
            worldViewProjectionInput.output.connectTo(this.worldViewProjection);
        }
    }
    _buildBlock(state) {
        super._buildBlock(state);
        const vector = this.vector;
        const worldViewProjection = this.worldViewProjection;
        if (!vector.connectedPoint) {
            return;
        }
        const worldViewProjectionName = worldViewProjection.associatedVariableName;
        const tempVariableName = state._getFreeVariableName("screenSpaceTemp");
        switch(vector.connectedPoint.type){
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3:
                state.compilationString += `${state._declareLocalVar(tempVariableName, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4)} = ${worldViewProjectionName} * vec4${state.fSuffix}(${vector.associatedVariableName}, 1.0);\n`;
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4:
                state.compilationString += `${state._declareLocalVar(tempVariableName, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4)} = ${worldViewProjectionName} * ${vector.associatedVariableName};\n`;
                break;
        }
        state.compilationString += `${tempVariableName} = vec4${state.fSuffix}(${tempVariableName}.xy / ${tempVariableName}.w, ${tempVariableName}.zw);`;
        state.compilationString += `${tempVariableName} = vec4${state.fSuffix}(${tempVariableName}.xy * 0.5 + vec2${state.fSuffix}(0.5, 0.5), ${tempVariableName}.zw);`;
        if (this.output.hasEndpoints) {
            state.compilationString += state._declareOutput(this.output) + ` = ${tempVariableName}.xy;\n`;
        }
        if (this.x.hasEndpoints) {
            state.compilationString += state._declareOutput(this.x) + ` = ${tempVariableName}.x;\n`;
        }
        if (this.y.hasEndpoints) {
            state.compilationString += state._declareOutput(this.y) + ` = ${tempVariableName}.y;\n`;
        }
        return this;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.ScreenSpaceBlock", ScreenSpaceBlock); //# sourceMappingURL=screenSpaceBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Fragment/twirlBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TwirlBlock",
    ()=>TwirlBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$inputBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Input/inputBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
class TwirlBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * Creates a new TwirlBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this.registerInput("input", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector2);
        this.registerInput("strength", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float);
        this.registerInput("center", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector2);
        this.registerInput("offset", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector2);
        this.registerOutput("output", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector2);
        this.registerOutput("x", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float);
        this.registerOutput("y", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "TwirlBlock";
    }
    /**
     * Gets the input component
     */ get input() {
        return this._inputs[0];
    }
    /**
     * Gets the strength component
     */ get strength() {
        return this._inputs[1];
    }
    /**
     * Gets the center component
     */ get center() {
        return this._inputs[2];
    }
    /**
     * Gets the offset component
     */ get offset() {
        return this._inputs[3];
    }
    /**
     * Gets the output component
     */ get output() {
        return this._outputs[0];
    }
    /**
     * Gets the x output component
     */ get x() {
        return this._outputs[1];
    }
    /**
     * Gets the y output component
     */ get y() {
        return this._outputs[2];
    }
    autoConfigure() {
        if (!this.center.isConnected) {
            const centerInput = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$inputBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputBlock"]("center");
            centerInput.value = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"](0.5, 0.5);
            centerInput.output.connectTo(this.center);
        }
        if (!this.strength.isConnected) {
            const strengthInput = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$inputBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputBlock"]("strength");
            strengthInput.value = 1.0;
            strengthInput.output.connectTo(this.strength);
        }
        if (!this.offset.isConnected) {
            const offsetInput = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Input$2f$inputBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputBlock"]("offset");
            offsetInput.value = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"](0, 0);
            offsetInput.output.connectTo(this.offset);
        }
    }
    _buildBlock(state) {
        super._buildBlock(state);
        const tempDelta = state._getFreeVariableName("delta");
        const tempAngle = state._getFreeVariableName("angle");
        const tempX = state._getFreeVariableName("x");
        const tempY = state._getFreeVariableName("y");
        const tempResult = state._getFreeVariableName("result");
        state.compilationString += `        
            ${state._declareLocalVar(tempDelta, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector2)} = ${this.input.associatedVariableName} - ${this.center.associatedVariableName};
            ${state._declareLocalVar(tempAngle, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float)} = ${this.strength.associatedVariableName} * length(${tempDelta});
            ${state._declareLocalVar(tempX, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float)} = cos(${tempAngle}) * ${tempDelta}.x - sin(${tempAngle}) * ${tempDelta}.y;
            ${state._declareLocalVar(tempY, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float)} = sin(${tempAngle}) * ${tempDelta}.x + cos(${tempAngle}) * ${tempDelta}.y;
            ${state._declareLocalVar(tempResult, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector2)} = vec2(${tempX} + ${this.center.associatedVariableName}.x + ${this.offset.associatedVariableName}.x, ${tempY} + ${this.center.associatedVariableName}.y + ${this.offset.associatedVariableName}.y);
        `;
        if (this.output.hasEndpoints) {
            state.compilationString += state._declareOutput(this.output) + ` = ${tempResult};\n`;
        }
        if (this.x.hasEndpoints) {
            state.compilationString += state._declareOutput(this.x) + ` = ${tempResult}.x;\n`;
        }
        if (this.y.hasEndpoints) {
            state.compilationString += state._declareOutput(this.y) + ` = ${tempResult}.y;\n`;
        }
        return this;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.TwirlBlock", TwirlBlock); //# sourceMappingURL=twirlBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Fragment/heightToNormalBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeightToNormalBlock",
    ()=>HeightToNormalBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Decorators/nodeDecorator.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
class HeightToNormalBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * Creates a new HeightToNormalBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        /**
         * Defines if the output should be generated in world or tangent space.
         * Note that in tangent space the result is also scaled by 0.5 and offsetted by 0.5 so that it can directly be used as a PerturbNormal.normalMapColor input
         */ this.generateInWorldSpace = false;
        /**
         * Defines that the worldNormal input will be normalized by the HeightToNormal block before being used
         */ this.automaticNormalizationNormal = true;
        /**
         * Defines that the worldTangent input will be normalized by the HeightToNormal block before being used
         */ this.automaticNormalizationTangent = true;
        this.registerInput("input", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float);
        this.registerInput("worldPosition", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3);
        this.registerInput("worldNormal", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3);
        this.registerInput("worldTangent", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].AutoDetect, true);
        this.registerOutput("output", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4);
        this.registerOutput("xyz", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3);
        this._inputs[3].addExcludedConnectionPointFromAllowedTypes(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color3 | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3 | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "HeightToNormalBlock";
    }
    /**
     * Gets the input component
     */ get input() {
        return this._inputs[0];
    }
    /**
     * Gets the position component
     */ get worldPosition() {
        return this._inputs[1];
    }
    /**
     * Gets the normal component
     */ get worldNormal() {
        return this._inputs[2];
    }
    /**
     * Gets the tangent component
     */ get worldTangent() {
        return this._inputs[3];
    }
    /**
     * Gets the output component
     */ get output() {
        return this._outputs[0];
    }
    /**
     * Gets the xyz component
     */ get xyz() {
        return this._outputs[1];
    }
    _buildBlock(state) {
        super._buildBlock(state);
        const output = this._outputs[0];
        const isWebGPU = state.shaderLanguage === 1 /* ShaderLanguage.WGSL */ ;
        const fPrefix = state.fSuffix;
        if (!this.generateInWorldSpace && !this.worldTangent.isConnected) {
            state.sharedData.raiseBuildError(`You must connect the 'worldTangent' input of the ${this.name} block!`);
        }
        const startCode = this.generateInWorldSpace ? "" : `
            vec3 biTangent = cross(norm, tgt);
            mat3 TBN = mat3(tgt, biTangent, norm);
            `;
        const endCode = this.generateInWorldSpace ? "" : `
            result = TBN * result;
            result = result * vec3(0.5) + vec3(0.5);
            `;
        let heightToNormal = `
            vec4 heightToNormal(float height, vec3 position, vec3 tangent, vec3 normal) {
                vec3 tgt = ${this.automaticNormalizationTangent ? "normalize(tangent);" : "tangent;"}
                vec3 norm = ${this.automaticNormalizationNormal ? "normalize(normal);" : "normal;"}
                ${startCode}
                vec3 worlddX = dFdx(position);
                vec3 worlddY = dFdy(position);
                vec3 crossX = cross(norm, worlddX);
                vec3 crossY = cross(worlddY, norm);
                float d = abs(dot(crossY, worlddX));
                vec3 inToNormal = vec3(((((height + dFdx(height)) - height) * crossY) + (((height + dFdy(height)) - height) * crossX)) * sign(d));
                inToNormal.y *= -1.0;
                vec3 result = normalize((d * norm) - inToNormal);
                ${endCode}
                return vec4(result, 0.);
            }`;
        if (isWebGPU) {
            heightToNormal = state._babylonSLtoWGSL(heightToNormal);
        } else {
            state._emitExtension("derivatives", "#extension GL_OES_standard_derivatives : enable");
        }
        state._emitFunction("heightToNormal", heightToNormal, "// heightToNormal");
        state.compilationString += state._declareOutput(output) + ` = heightToNormal(${this.input.associatedVariableName}, ${this.worldPosition.associatedVariableName}, ${this.worldTangent.isConnected ? this.worldTangent.associatedVariableName : `vec3${fPrefix}(0.)`}.xyz, ${this.worldNormal.associatedVariableName});\n`;
        if (this.xyz.hasEndpoints) {
            state.compilationString += state._declareOutput(this.xyz) + ` = ${this.output.associatedVariableName}.xyz;\n`;
        }
        return this;
    }
    _dumpPropertiesCode() {
        let codeString = super._dumpPropertiesCode();
        codeString += `${this._codeVariableName}.generateInWorldSpace = ${this.generateInWorldSpace};\n`;
        codeString += `${this._codeVariableName}.automaticNormalizationNormal = ${this.automaticNormalizationNormal};\n`;
        codeString += `${this._codeVariableName}.automaticNormalizationTangent = ${this.automaticNormalizationTangent};\n`;
        return codeString;
    }
    serialize() {
        const serializationObject = super.serialize();
        serializationObject.generateInWorldSpace = this.generateInWorldSpace;
        serializationObject.automaticNormalizationNormal = this.automaticNormalizationNormal;
        serializationObject.automaticNormalizationTangent = this.automaticNormalizationTangent;
        return serializationObject;
    }
    _deserialize(serializationObject, scene, rootUrl) {
        super._deserialize(serializationObject, scene, rootUrl);
        this.generateInWorldSpace = serializationObject.generateInWorldSpace;
        this.automaticNormalizationNormal = serializationObject.automaticNormalizationNormal;
        this.automaticNormalizationTangent = serializationObject.automaticNormalizationTangent;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("Generate in world space instead of tangent space", 0 /* PropertyTypeForEdition.Boolean */ , "PROPERTIES", {
        notifiers: {
            update: true
        }
    })
], HeightToNormalBlock.prototype, "generateInWorldSpace", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("Force normalization for the worldNormal input", 0 /* PropertyTypeForEdition.Boolean */ , "PROPERTIES", {
        notifiers: {
            update: true
        }
    })
], HeightToNormalBlock.prototype, "automaticNormalizationNormal", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("Force normalization for the worldTangent input", 0 /* PropertyTypeForEdition.Boolean */ , "PROPERTIES", {
        notifiers: {
            update: true
        }
    })
], HeightToNormalBlock.prototype, "automaticNormalizationTangent", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.HeightToNormalBlock", HeightToNormalBlock); //# sourceMappingURL=heightToNormalBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Fragment/fragDepthBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FragDepthBlock",
    ()=>FragDepthBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-ssr] (ecmascript)");
;
;
;
;
;
class FragDepthBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * Create a new FragDepthBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment, true);
        this.registerInput("depth", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float, true);
        this.registerInput("worldPos", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4, true);
        this.registerInput("viewProjection", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Matrix, true);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "FragDepthBlock";
    }
    /**
     * Gets the depth input component
     */ get depth() {
        return this._inputs[0];
    }
    /**
     * Gets the worldPos input component
     */ get worldPos() {
        return this._inputs[1];
    }
    /**
     * Gets the viewProjection input component
     */ get viewProjection() {
        return this._inputs[2];
    }
    _buildBlock(state) {
        super._buildBlock(state);
        const fragDepth = state.shaderLanguage === 0 /* ShaderLanguage.GLSL */  ? "gl_FragDepth" : "fragmentOutputs.fragDepth";
        if (this.depth.isConnected) {
            state.compilationString += `${fragDepth} = ${this.depth.associatedVariableName};\n`;
        } else if (this.worldPos.isConnected && this.viewProjection.isConnected) {
            state.compilationString += `
                ${state._declareLocalVar("p", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4)} = ${this.viewProjection.associatedVariableName} * ${this.worldPos.associatedVariableName};
                ${state._declareLocalVar("v", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float)} = p.z / p.w;
                #ifndef IS_NDC_HALF_ZRANGE
                    v = v * 0.5 + 0.5;
                #endif
                ${fragDepth} = v;
    
            `;
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn("FragDepthBlock: either the depth input or both the worldPos and viewProjection inputs must be connected!");
        }
        return this;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.FragDepthBlock", FragDepthBlock); //# sourceMappingURL=fragDepthBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Fragment/shadowMapBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ShadowMapBlock",
    ()=>ShadowMapBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
;
;
;
;
class ShadowMapBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * Create a new ShadowMapBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        this.registerInput("worldPosition", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4, false);
        this.registerInput("viewProjection", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Matrix, false);
        this.registerInput("worldNormal", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].AutoDetect, true);
        this.registerOutput("depth", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3);
        this.worldNormal.addExcludedConnectionPointFromAllowedTypes(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color3 | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3 | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "ShadowMapBlock";
    }
    /**
     * Initialize the block and prepare the context for build
     * @param state defines the state that will be used for the build
     */ initialize(state) {
        state._excludeVariableName("vPositionWSM");
        state._excludeVariableName("lightDataSM");
        state._excludeVariableName("biasAndScaleSM");
        state._excludeVariableName("depthValuesSM");
        state._excludeVariableName("clipPos");
        state._excludeVariableName("worldPos");
        state._excludeVariableName("zSM");
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this._initShaderSourceAsync(state.shaderLanguage);
    }
    async _initShaderSourceAsync(shaderLanguage) {
        this._codeIsReady = false;
        if (shaderLanguage === 1 /* ShaderLanguage.WGSL */ ) {
            await Promise.all([
                __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/shadowMapVertexMetric.js [app-ssr] (ecmascript, async loader)"),
                __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/packingFunctions.js [app-ssr] (ecmascript, async loader)"),
                __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/shadowMapFragment.js [app-ssr] (ecmascript, async loader)")
            ]);
        } else {
            await Promise.all([
                __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/shadowMapVertexMetric.js [app-ssr] (ecmascript, async loader)"),
                __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/packingFunctions.js [app-ssr] (ecmascript, async loader)"),
                __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/shadowMapFragment.js [app-ssr] (ecmascript, async loader)")
            ]);
        }
        this._codeIsReady = true;
        this.onCodeIsReadyObservable.notifyObservers(this);
    }
    /**
     * Gets the world position input component
     */ get worldPosition() {
        return this._inputs[0];
    }
    /**
     * Gets the view x projection input component
     */ get viewProjection() {
        return this._inputs[1];
    }
    /**
     * Gets the world normal input component
     */ get worldNormal() {
        return this._inputs[2];
    }
    /**
     * Gets the depth output component
     */ get depth() {
        return this._outputs[0];
    }
    _buildBlock(state) {
        super._buildBlock(state);
        const comments = `//${this.name}`;
        const isWebGPU = state.shaderLanguage === 1 /* ShaderLanguage.WGSL */ ;
        state._emitUniformFromString("biasAndScaleSM", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3);
        state._emitUniformFromString("lightDataSM", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3);
        state._emitUniformFromString("depthValuesSM", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector2);
        state._emitFunctionFromInclude("packingFunctions", comments);
        state.compilationString += `${state._declareLocalVar("worldPos", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4)} = ${this.worldPosition.associatedVariableName};\n`;
        state.compilationString += `${state._declareLocalVar("vPositionWSM", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3)};\n`;
        state.compilationString += `${state._declareLocalVar("vDepthMetricSM", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float)} = 0.0;\n`;
        state.compilationString += `${state._declareLocalVar("zSM", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float)};\n`;
        if (this.worldNormal.isConnected) {
            state.compilationString += `${state._declareLocalVar("vNormalW", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3)} = ${this.worldNormal.associatedVariableName}.xyz;\n`;
            state.compilationString += state._emitCodeFromInclude("shadowMapVertexNormalBias", comments);
        }
        state.compilationString += `${state._declareLocalVar("clipPos", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4)} = ${this.viewProjection.associatedVariableName} * worldPos;\n`;
        state.compilationString += state._emitCodeFromInclude("shadowMapVertexMetric", comments, {
            replaceStrings: [
                {
                    search: /gl_Position/g,
                    replace: "clipPos"
                },
                {
                    search: /vertexOutputs.position/g,
                    replace: "clipPos"
                },
                {
                    search: /vertexOutputs\.vDepthMetricSM/g,
                    replace: "vDepthMetricSM"
                }
            ]
        });
        state.compilationString += state._emitCodeFromInclude("shadowMapFragment", comments, {
            replaceStrings: [
                {
                    search: /return;/g,
                    replace: ""
                },
                {
                    search: /fragmentInputs\.vDepthMetricSM/g,
                    replace: "vDepthMetricSM"
                }
            ]
        });
        const output = isWebGPU ? "fragmentOutputs.fragDepth" : "gl_FragDepth";
        state.compilationString += `
            #if SM_DEPTHTEXTURE == 1
                #ifdef IS_NDC_HALF_ZRANGE
                    ${output} = (clipPos.z / clipPos.w);
                #else
                    ${output} = (clipPos.z / clipPos.w) * 0.5 + 0.5;
                #endif
            #endif
        `;
        state.compilationString += `${state._declareOutput(this.depth)} = vec3${state.fSuffix}(depthSM, 1., 1.);\n`;
        return this;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.ShadowMapBlock", ShadowMapBlock); //# sourceMappingURL=shadowMapBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Fragment/prePassOutputBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PrePassOutputBlock",
    ()=>PrePassOutputBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
;
;
;
;
class PrePassOutputBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * Create a new PrePassOutputBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment, true);
        this.registerInput("viewDepth", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float, true);
        this.registerInput("screenDepth", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float, true);
        this.registerInput("worldPosition", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].AutoDetect, true);
        this.registerInput("localPosition", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].AutoDetect, true);
        this.registerInput("viewNormal", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].AutoDetect, true);
        this.registerInput("worldNormal", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].AutoDetect, true);
        this.registerInput("reflectivity", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].AutoDetect, true);
        this.registerInput("velocity", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].AutoDetect, true);
        this.registerInput("velocityLinear", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].AutoDetect, true);
        this.inputs[2].addExcludedConnectionPointFromAllowedTypes(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3 | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4);
        this.inputs[3].addExcludedConnectionPointFromAllowedTypes(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3 | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4);
        this.inputs[4].addExcludedConnectionPointFromAllowedTypes(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3 | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4);
        this.inputs[5].addExcludedConnectionPointFromAllowedTypes(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3 | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4);
        this.inputs[6].addExcludedConnectionPointFromAllowedTypes(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3 | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4 | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color3 | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Color4);
        this.inputs[7].addExcludedConnectionPointFromAllowedTypes(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3 | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4);
        this.inputs[8].addExcludedConnectionPointFromAllowedTypes(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector3 | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "PrePassOutputBlock";
    }
    /**
     * Gets the view depth component
     */ get viewDepth() {
        return this._inputs[0];
    }
    /**
     * Gets the screen depth component
     */ get screenDepth() {
        return this._inputs[1];
    }
    /**
     * Gets the world position component
     */ get worldPosition() {
        return this._inputs[2];
    }
    /**
     * Gets the position in local space component
     */ get localPosition() {
        return this._inputs[3];
    }
    /**
     * Gets the view normal component
     */ get viewNormal() {
        return this._inputs[4];
    }
    /**
     * Gets the world normal component
     */ get worldNormal() {
        return this._inputs[5];
    }
    /**
     * Gets the reflectivity component
     */ get reflectivity() {
        return this._inputs[6];
    }
    /**
     * Gets the velocity component
     */ get velocity() {
        return this._inputs[7];
    }
    /**
     * Gets the linear velocity component
     */ get velocityLinear() {
        return this._inputs[8];
    }
    _getFragData(isWebGPU, index) {
        return isWebGPU ? `fragmentOutputs.fragData${index}` : `gl_FragData[${index}]`;
    }
    _buildBlock(state) {
        super._buildBlock(state);
        const worldPosition = this.worldPosition;
        const localPosition = this.localPosition;
        const viewNormal = this.viewNormal;
        const worldNormal = this.worldNormal;
        const viewDepth = this.viewDepth;
        const reflectivity = this.reflectivity;
        const screenDepth = this.screenDepth;
        const velocity = this.velocity;
        const velocityLinear = this.velocityLinear;
        state.sharedData.blocksWithDefines.push(this);
        const comments = `//${this.name}`;
        const vec4 = state._getShaderType(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4);
        const isWebGPU = state.shaderLanguage === 1 /* ShaderLanguage.WGSL */ ;
        state._emitFunctionFromInclude("helperFunctions", comments);
        state.compilationString += `#if defined(PREPASS)\r\n`;
        state.compilationString += isWebGPU ? `var fragData: array<vec4<f32>, SCENE_MRT_COUNT>;\r\n` : `vec4 fragData[SCENE_MRT_COUNT];\r\n`;
        state.compilationString += `#ifdef PREPASS_DEPTH\r\n`;
        if (viewDepth.connectedPoint) {
            state.compilationString += ` fragData[PREPASS_DEPTH_INDEX] = ${vec4}(${viewDepth.associatedVariableName}, 0.0, 0.0, 1.0);\r\n`;
        } else {
            // We have to write something on the viewDepth output or it will raise a gl error
            state.compilationString += ` fragData[PREPASS_DEPTH_INDEX] = ${vec4}(0.0, 0.0, 0.0, 0.0);\r\n`;
        }
        state.compilationString += `#endif\r\n`;
        state.compilationString += `#ifdef PREPASS_SCREENSPACE_DEPTH\r\n`;
        if (screenDepth.connectedPoint) {
            state.compilationString += ` gl_FragData[PREPASS_SCREENSPACE_DEPTH_INDEX] = vec4(${screenDepth.associatedVariableName}, 0.0, 0.0, 1.0);\r\n`;
        } else {
            // We have to write something on the viewDepth output or it will raise a gl error
            state.compilationString += ` gl_FragData[PREPASS_SCREENSPACE_DEPTH_INDEX] = vec4(0.0, 0.0, 0.0, 0.0);\r\n`;
        }
        state.compilationString += `#endif\r\n`;
        state.compilationString += `#ifdef PREPASS_POSITION\r\n`;
        if (worldPosition.connectedPoint) {
            state.compilationString += `fragData[PREPASS_POSITION_INDEX] = ${vec4}(${worldPosition.associatedVariableName}.rgb, ${worldPosition.connectedPoint.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4 ? worldPosition.associatedVariableName + ".a" : "1.0"});\r\n`;
        } else {
            // We have to write something on the position output or it will raise a gl error
            state.compilationString += ` fragData[PREPASS_POSITION_INDEX] = ${vec4}(0.0, 0.0, 0.0, 0.0);\r\n`;
        }
        state.compilationString += `#endif\r\n`;
        state.compilationString += `#ifdef PREPASS_LOCAL_POSITION\r\n`;
        if (localPosition.connectedPoint) {
            state.compilationString += ` gl_FragData[PREPASS_LOCAL_POSITION_INDEX] = vec4(${localPosition.associatedVariableName}.rgb, ${localPosition.connectedPoint.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4 ? localPosition.associatedVariableName + ".a" : "1.0"});\r\n`;
        } else {
            // We have to write something on the position output or it will raise a gl error
            state.compilationString += ` gl_FragData[PREPASS_LOCAL_POSITION_INDEX] = vec4(0.0, 0.0, 0.0, 0.0);\r\n`;
        }
        state.compilationString += `#endif\r\n`;
        state.compilationString += `#ifdef PREPASS_NORMAL\r\n`;
        if (viewNormal.connectedPoint) {
            state.compilationString += ` fragData[PREPASS_NORMAL_INDEX] = ${vec4}(${viewNormal.associatedVariableName}.rgb, ${viewNormal.connectedPoint.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4 ? viewNormal.associatedVariableName + ".a" : "1.0"});\r\n`;
        } else {
            // We have to write something on the normal output or it will raise a gl error
            state.compilationString += ` fragData[PREPASS_NORMAL_INDEX] = ${vec4}(0.0, 0.0, 0.0, 0.0);\r\n`;
        }
        state.compilationString += `#endif\r\n`;
        state.compilationString += `#ifdef PREPASS_WORLD_NORMAL\r\n`;
        if (worldNormal.connectedPoint) {
            state.compilationString += ` gl_FragData[PREPASS_WORLD_NORMAL_INDEX] = vec4(${worldNormal.associatedVariableName}.rgb, ${worldNormal.connectedPoint.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4 ? worldNormal.associatedVariableName + ".a" : "1.0"});\r\n`;
        } else {
            // We have to write something on the normal output or it will raise a gl error
            state.compilationString += ` gl_FragData[PREPASS_WORLD_NORMAL_INDEX] = vec4(0.0, 0.0, 0.0, 0.0);\r\n`;
        }
        state.compilationString += `#endif\r\n`;
        state.compilationString += `#ifdef PREPASS_REFLECTIVITY\r\n`;
        if (reflectivity.connectedPoint) {
            state.compilationString += ` fragData[PREPASS_REFLECTIVITY_INDEX] = ${vec4}(${reflectivity.associatedVariableName}.rgb, ${reflectivity.connectedPoint.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4 ? reflectivity.associatedVariableName + ".a" : "1.0"});\r\n`;
        } else {
            // We have to write something on the reflectivity output or it will raise a gl error
            state.compilationString += ` fragData[PREPASS_REFLECTIVITY_INDEX] = ${vec4}(0.0, 0.0, 0.0, 1.0);\r\n`;
        }
        state.compilationString += `#endif\r\n`;
        state.compilationString += `#ifdef PREPASS_VELOCITY\r\n`;
        if (velocity.connectedPoint) {
            state.compilationString += ` fragData[PREPASS_VELOCITY_INDEX] = ${vec4}(${velocity.associatedVariableName}.rgb, ${velocity.connectedPoint.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4 ? velocity.associatedVariableName + ".a" : "1.0"});\r\n`;
        } else {
            // We have to write something on the reflectivity output or it will raise a gl error
            state.compilationString += ` fragData[PREPASS_VELOCITY_INDEX] = ${vec4}(0.0, 0.0, 0.0, 1.0);\r\n`;
        }
        state.compilationString += `#endif\r\n`;
        state.compilationString += `#ifdef PREPASS_VELOCITY_LINEAR\r\n`;
        if (velocityLinear.connectedPoint) {
            state.compilationString += ` fragData[PREPASS_VELOCITY_LINEAR_INDEX] = ${vec4}(${velocityLinear.associatedVariableName}.rgb, ${velocityLinear.connectedPoint.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector4 ? velocityLinear.associatedVariableName + ".a" : "1.0"});\r\n`;
        } else {
            // We have to write something on the reflectivity output or it will raise a gl error
            state.compilationString += ` fragData[PREPASS_VELOCITY_LINEAR_INDEX] = ${vec4}(0.0, 0.0, 0.0, 1.0);\r\n`;
        }
        state.compilationString += `#endif\r\n`;
        state.compilationString += `#if SCENE_MRT_COUNT > 1\r\n`;
        state.compilationString += `${this._getFragData(isWebGPU, 1)} = fragData[1];\r\n`;
        state.compilationString += `#endif\r\n`;
        state.compilationString += `#if SCENE_MRT_COUNT > 2\r\n`;
        state.compilationString += `${this._getFragData(isWebGPU, 2)} = fragData[2];\r\n`;
        state.compilationString += `#endif\r\n`;
        state.compilationString += `#if SCENE_MRT_COUNT > 3\r\n`;
        state.compilationString += `${this._getFragData(isWebGPU, 3)} = fragData[3];\r\n`;
        state.compilationString += `#endif\r\n`;
        state.compilationString += `#if SCENE_MRT_COUNT > 4\r\n`;
        state.compilationString += `${this._getFragData(isWebGPU, 4)} = fragData[4];\r\n`;
        state.compilationString += `#endif\r\n`;
        state.compilationString += `#if SCENE_MRT_COUNT > 5\r\n`;
        state.compilationString += `${this._getFragData(isWebGPU, 5)} = fragData[5];\r\n`;
        state.compilationString += `#endif\r\n`;
        state.compilationString += `#if SCENE_MRT_COUNT > 6\r\n`;
        state.compilationString += `${this._getFragData(isWebGPU, 6)} = fragData[6];\r\n`;
        state.compilationString += `#endif\r\n`;
        state.compilationString += `#if SCENE_MRT_COUNT > 7\r\n`;
        state.compilationString += `${this._getFragData(isWebGPU, 7)} = fragData[7];\r\n`;
        state.compilationString += `#endif\r\n`;
        state.compilationString += `#endif\r\n`;
        return this;
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.PrePassOutputBlock", PrePassOutputBlock); //# sourceMappingURL=prePassOutputBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Fragment/ambientOcclusionBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AmbientOcclusionBlock",
    ()=>AmbientOcclusionBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/tslib.es6.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialConnectionPointCustomObject$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/nodeMaterialConnectionPointCustomObject.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.scalar.functions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$rawTexture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/rawTexture.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/texture.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Decorators/nodeDecorator.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$imageSourceBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Dual/imageSourceBlock.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
class AmbientOcclusionBlock extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlock"] {
    /**
     * Create a new AmbientOcclusionBlock
     * @param name defines the block name
     */ constructor(name){
        super(name, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].Fragment);
        /**
         * Defines the radius around the analyzed pixel used by the SSAO post-process
         */ this.radius = 0.0001;
        /**
         * Related to fallOff, used to interpolate SSAO samples (first interpolate function input) based on the occlusion difference of each pixel
         * Must not be equal to fallOff and superior to fallOff.
         */ this.area = 0.0075;
        /**
         * Related to area, used to interpolate SSAO samples (second interpolate function input) based on the occlusion difference of each pixel
         * Must not be equal to area and inferior to area.
         */ this.fallOff = 0.000001;
        this.registerInput("source", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Object, true, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockTargets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockTargets"].VertexAndFragment, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$nodeMaterialConnectionPointCustomObject$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialConnectionPointCustomObject"]("source", this, 0 /* NodeMaterialConnectionPointDirection.Input */ , __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Dual$2f$imageSourceBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ImageSourceBlock"], "ImageSourceBlock"));
        this.registerInput("screenSize", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Vector2);
        this.registerOutput("occlusion", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Enums$2f$nodeMaterialBlockConnectionPointTypes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NodeMaterialBlockConnectionPointTypes"].Float);
    }
    /**
     * Gets the current class name
     * @returns the class name
     */ getClassName() {
        return "AmbientOcclusionBlock";
    }
    /**
     * Gets the source component
     */ get source() {
        return this._inputs[0];
    }
    /**
     * Gets the screenSize component
     */ get screenSize() {
        return this._inputs[1];
    }
    /**
     * Gets the occlusion output
     */ get occlusion() {
        return this._outputs[0];
    }
    bind(effect) {
        if (!this._randomTexture) {
            this._createRandomTexture(effect.getEngine());
        }
        effect.setTexture(this._randomSamplerName, this._randomTexture);
    }
    _createRandomTexture(engine) {
        const size = 512;
        const data = new Uint8Array(size * size * 4);
        for(let index = 0; index < data.length;){
            data[index++] = Math.floor(Math.max(0.0, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RandomRange"])(-1.0, 1.0)) * 255);
            data[index++] = Math.floor(Math.max(0.0, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RandomRange"])(-1.0, 1.0)) * 255);
            data[index++] = Math.floor(Math.max(0.0, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RandomRange"])(-1.0, 1.0)) * 255);
            data[index++] = 255;
        }
        const texture = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$rawTexture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RawTexture"].CreateRGBATexture(data, size, size, engine, false, false, 2);
        texture.name = "SSAORandomTexture";
        texture.wrapU = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Texture"].WRAP_ADDRESSMODE;
        texture.wrapV = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Texture"].WRAP_ADDRESSMODE;
        this._randomTexture = texture;
    }
    _buildBlock(state) {
        super._buildBlock(state);
        if (!this.source.connectedPoint) {
            return this;
        }
        state.sharedData.bindableBlocks.push(this);
        const depthSource = this.source.connectedPoint.ownerBlock;
        const occlusion = this._outputs[0];
        const screenSize = this.screenSize;
        let functionString;
        // Get view position from depth
        if (state.shaderLanguage === 1 /* ShaderLanguage.WGSL */ ) {
            functionString = `fn normalFromDepth(depth: f32, coords: vec2f, radius: f32) -> vec3f {
                let offset1: vec2f = vec2f(0.0, radius);
                let offset2: vec2f = vec2f(radius, 0.0);

                let depth1: f32 = textureSampleLevel(${depthSource.samplerName}, ${depthSource.samplerName}Sampler, coords + offset1, 0.0).r;
                let depth2: f32 = textureSampleLevel(${depthSource.samplerName}, ${depthSource.samplerName}Sampler, coords + offset2, 0.0).r;

                let p1: vec3f = vec3f(offset1, depth1 - depth);
                let p2: vec3f = vec3f(offset2, depth2 - depth);

                var normal: vec3f = cross(p1, p2);
                normal.z = -normal.z;

                return normalize(normal);
            }
            `;
        } else {
            functionString = `vec3 normalFromDepth(float depth, vec2 coords, float radius) {
                vec2 offset1 = vec2(0.0, radius);
                vec2 offset2 = vec2(radius, 0.0);

                float depth1 = textureLod(${depthSource.samplerName}, coords + offset1, 0.0).r;
                float depth2 = textureLod(${depthSource.samplerName}, coords + offset2, 0.0).r;

                vec3 p1 = vec3(offset1, depth1 - depth);
                vec3 p2 = vec3(offset2, depth2 - depth);

                vec3 normal = cross(p1, p2);
                normal.z = -normal.z;

                return normalize(normal);
            }
            `;
        }
        state._emitFunction("normalFromDepth", functionString, "// normalFromDepth function");
        // Calculate ambient occlusion
        this._randomSamplerName = state._getFreeVariableName("randomSampler");
        state._emit2DSampler(this._randomSamplerName);
        if (state.shaderLanguage === 1 /* ShaderLanguage.WGSL */ ) {
            functionString = `
            const sampleSphere: array<vec3f, 16> = array<vec3f, 16>(
                vec3f( 0.5381,  0.1856, -0.4319),
                vec3f( 0.1379,  0.2486,  0.4430),
                vec3f( 0.3371,  0.5679, -0.0057),
                vec3f(-0.6999, -0.0451, -0.0019),
                vec3f( 0.0689, -0.1598, -0.8547),
                vec3f( 0.0560,  0.0069, -0.1843),
                vec3f(-0.0146,  0.1402,  0.0762),
                vec3f( 0.0100, -0.1924, -0.0344),
                vec3f(-0.3577, -0.5301, -0.4358),
                vec3f(-0.3169,  0.1063,  0.0158),
                vec3f( 0.0103, -0.5869,  0.0046),
                vec3f(-0.0897, -0.4940,  0.3287),
                vec3f( 0.7119, -0.0154, -0.0918),
                vec3f(-0.0533,  0.0596, -0.5411),
                vec3f( 0.0352, -0.0631,  0.5460),
                vec3f(-0.4776,  0.2847, -0.0271)
            );

            fn computeOcclusion(screenSize: vec2f) -> f32 {
                let uv: vec2f = fragmentInputs.position.xy / screenSize;
                let random: vec3f = normalize(textureSampleLevel(${this._randomSamplerName}, ${this._randomSamplerName}Sampler, uv * 4.0, 0.0).rgb);
                let depth: f32 = textureSampleLevel(${depthSource.samplerName}, ${depthSource.samplerName}Sampler, uv, 0.0).r;
                let position: vec3f = vec3f(uv, depth);
                let normal: vec3f = normalFromDepth(depth, uv, ${this.radius}f);

                let radiusDepth: f32 = ${this.radius}f / depth;
                var occlusion: f32 = 0.0;

                var ray: vec3f;
                var hemiRay: vec3f;
                var occlusionDepth: f32;
                var difference: f32;

                for (var i: i32 = 0; i < 16; i++)
                {
                    ray = radiusDepth * reflect(sampleSphere[i], random);
                    hemiRay = position + sign(dot(ray, normal)) * ray;

                    occlusionDepth = textureSample(${depthSource.samplerName}, ${depthSource.samplerName}Sampler, clamp(hemiRay.xy, vec2f(0.001, 0.001), vec2f(0.999, 0.999))).r;
                    difference = depth - occlusionDepth;

                    occlusion += step(${this.fallOff}f, difference) * (1.0 - smoothstep(${this.fallOff}f, ${this.area}f, difference));
                }

                return clamp(1.0 - occlusion / 16.0, 0.0, 1.0);
            }
            `;
        } else {
            functionString = `
            const vec3 sampleSphere[16] = vec3[](
                vec3( 0.5381,  0.1856, -0.4319),
                vec3( 0.1379,  0.2486,  0.4430),
                vec3( 0.3371,  0.5679, -0.0057),
                vec3(-0.6999, -0.0451, -0.0019),
                vec3( 0.0689, -0.1598, -0.8547),
                vec3( 0.0560,  0.0069, -0.1843),
                vec3(-0.0146,  0.1402,  0.0762),
                vec3( 0.0100, -0.1924, -0.0344),
                vec3(-0.3577, -0.5301, -0.4358),
                vec3(-0.3169,  0.1063,  0.0158),
                vec3( 0.0103, -0.5869,  0.0046),
                vec3(-0.0897, -0.4940,  0.3287),
                vec3( 0.7119, -0.0154, -0.0918),
                vec3(-0.0533,  0.0596, -0.5411),
                vec3( 0.0352, -0.0631,  0.5460),
                vec3(-0.4776,  0.2847, -0.0271)
            );

            float computeOcclusion(vec2 screenSize) {
                vec2 uv = gl_FragCoord.xy / screenSize;
                vec3 random = normalize(textureLod(${this._randomSamplerName}, uv * 4., 0.0).rgb);
                float depth = textureLod(${depthSource.samplerName}, uv, 0.0).r;              
                vec3 position = vec3(uv, depth);
                vec3 normal = normalFromDepth(depth, uv, ${this.radius} );

                float radiusDepth = ${this.radius} / depth;
                float occlusion = 0.0;

                vec3 ray;
                vec3 hemiRay;
                float occlusionDepth;
                float difference;

                for (int i = 0; i < 16; i++)
                {
                    ray = radiusDepth * reflect(sampleSphere[i], random);
                    hemiRay = position + sign(dot(ray, normal)) * ray;

                    occlusionDepth = texture2D(${depthSource.samplerName}, clamp(hemiRay.xy, vec2(0.001, 0.001), vec2(0.999, 0.999))).r;
                    difference = depth - occlusionDepth;

                    occlusion += step(${this.fallOff}, difference) * (1.0 - smoothstep(${this.fallOff}, ${this.area}, difference));
                }

                return clamp(1.0 - occlusion / 16.0, 0.0, 1.0);
            }
            `;
        }
        state._emitFunction("computeOcclusion", functionString, "// computeOcclusion function");
        state.compilationString += state._declareOutput(occlusion) + ` = computeOcclusion(${screenSize.associatedVariableName});`;
        return this;
    }
    dispose() {
        if (this._randomTexture) {
            this._randomTexture.dispose();
            this._randomTexture = null;
        }
        super.dispose();
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("radius", 1 /* PropertyTypeForEdition.Float */ , "ADVANCED", {
        min: 0.0001
    })
], AmbientOcclusionBlock.prototype, "radius", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("area", 1 /* PropertyTypeForEdition.Float */ , "ADVANCED", {
        min: 0
    })
], AmbientOcclusionBlock.prototype, "area", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$tslib$2e$es6$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__decorate"])([
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Decorators$2f$nodeDecorator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["editableInPropertyPage"])("fallOff", 1 /* PropertyTypeForEdition.Float */ , "ADVANCED", {
        min: 0
    })
], AmbientOcclusionBlock.prototype, "fallOff", void 0);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.AmbientOcclusionBlock", AmbientOcclusionBlock); //# sourceMappingURL=ambientOcclusionBlock.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Fragment/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$fragmentOutputBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Fragment/fragmentOutputBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$smartFilterFragmentOutputBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Fragment/smartFilterFragmentOutputBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$imageProcessingBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Fragment/imageProcessingBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$perturbNormalBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Fragment/perturbNormalBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$discardBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Fragment/discardBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$frontFacingBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Fragment/frontFacingBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$derivativeBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Fragment/derivativeBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$fragCoordBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Fragment/fragCoordBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$screenSizeBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Fragment/screenSizeBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$screenSpaceBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Fragment/screenSpaceBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$twirlBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Fragment/twirlBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$TBNBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Fragment/TBNBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$heightToNormalBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Fragment/heightToNormalBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$fragDepthBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Fragment/fragDepthBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$shadowMapBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Fragment/shadowMapBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$prePassOutputBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Fragment/prePassOutputBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$ambientOcclusionBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Fragment/ambientOcclusionBlock.js [app-ssr] (ecmascript)");
// async-loaded shaders
// imageProcessingBlock
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$helperFunctions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/helperFunctions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$imageProcessingDeclaration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/imageProcessingDeclaration.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$imageProcessingFunctions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/imageProcessingFunctions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$helperFunctions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/helperFunctions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$imageProcessingDeclaration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/imageProcessingDeclaration.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$imageProcessingFunctions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/imageProcessingFunctions.js [app-ssr] (ecmascript)");
// perturbNormalBlock
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$bumpFragment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/bumpFragment.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$bumpFragmentMainFunctions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/bumpFragmentMainFunctions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$bumpFragmentFunctions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/bumpFragmentFunctions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$bumpFragment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/bumpFragment.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$bumpFragmentMainFunctions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/bumpFragmentMainFunctions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$bumpFragmentFunctions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/bumpFragmentFunctions.js [app-ssr] (ecmascript)");
// shadowMapBlock
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$shadowMapVertexMetric$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/shadowMapVertexMetric.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$packingFunctions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/packingFunctions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$shadowMapFragment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/shadowMapFragment.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$shadowMapVertexMetric$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/shadowMapVertexMetric.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$packingFunctions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/packingFunctions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$shadowMapFragment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/shadowMapFragment.js [app-ssr] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Fragment/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AmbientOcclusionBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$ambientOcclusionBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AmbientOcclusionBlock"],
    "DerivativeBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$derivativeBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DerivativeBlock"],
    "DiscardBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$discardBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DiscardBlock"],
    "FragCoordBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$fragCoordBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FragCoordBlock"],
    "FragDepthBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$fragDepthBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FragDepthBlock"],
    "FragmentOutputBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$fragmentOutputBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FragmentOutputBlock"],
    "FragmentOutputBlockColorSpace",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$fragmentOutputBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FragmentOutputBlockColorSpace"],
    "FrontFacingBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$frontFacingBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FrontFacingBlock"],
    "HeightToNormalBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$heightToNormalBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HeightToNormalBlock"],
    "ImageProcessingBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$imageProcessingBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ImageProcessingBlock"],
    "PerturbNormalBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$perturbNormalBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PerturbNormalBlock"],
    "PrePassOutputBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$prePassOutputBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PrePassOutputBlock"],
    "ScreenSizeBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$screenSizeBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScreenSizeBlock"],
    "ScreenSpaceBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$screenSpaceBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScreenSpaceBlock"],
    "SfeModeDefine",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$smartFilterFragmentOutputBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SfeModeDefine"],
    "ShadowMapBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$shadowMapBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShadowMapBlock"],
    "SmartFilterFragmentOutputBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$smartFilterFragmentOutputBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SmartFilterFragmentOutputBlock"],
    "TBNBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$TBNBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TBNBlock"],
    "TwirlBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$twirlBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TwirlBlock"],
    "bumpFragment",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$bumpFragment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bumpFragment"],
    "bumpFragmentFunctions",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$bumpFragmentFunctions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bumpFragmentFunctions"],
    "bumpFragmentFunctionsWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$bumpFragmentFunctions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bumpFragmentFunctionsWGSL"],
    "bumpFragmentMainFunctions",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$bumpFragmentMainFunctions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bumpFragmentMainFunctions"],
    "bumpFragmentMainFunctionsWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$bumpFragmentMainFunctions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bumpFragmentMainFunctionsWGSL"],
    "bumpFragmentWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$bumpFragment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bumpFragmentWGSL"],
    "helperFunctions",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$helperFunctions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["helperFunctions"],
    "helperFunctionsWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$helperFunctions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["helperFunctionsWGSL"],
    "imageProcessingDeclaration",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$imageProcessingDeclaration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["imageProcessingDeclaration"],
    "imageProcessingDeclarationWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$imageProcessingDeclaration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["imageProcessingDeclarationWGSL"],
    "imageProcessingFunctions",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$imageProcessingFunctions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["imageProcessingFunctions"],
    "imageProcessingFunctionsWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$imageProcessingFunctions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["imageProcessingFunctionsWGSL"],
    "packingFunctions",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$packingFunctions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["packingFunctions"],
    "packingFunctionsWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$packingFunctions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["packingFunctionsWGSL"],
    "shadowMapFragment",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$shadowMapFragment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shadowMapFragment"],
    "shadowMapFragmentWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$shadowMapFragment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shadowMapFragmentWGSL"],
    "shadowMapVertexMetric",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$shadowMapVertexMetric$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shadowMapVertexMetric"],
    "shadowMapVertexMetricWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$shadowMapVertexMetric$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shadowMapVertexMetricWGSL"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Fragment/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$fragmentOutputBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Fragment/fragmentOutputBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$smartFilterFragmentOutputBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Fragment/smartFilterFragmentOutputBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$imageProcessingBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Fragment/imageProcessingBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$perturbNormalBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Fragment/perturbNormalBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$discardBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Fragment/discardBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$frontFacingBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Fragment/frontFacingBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$derivativeBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Fragment/derivativeBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$fragCoordBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Fragment/fragCoordBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$screenSizeBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Fragment/screenSizeBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$screenSpaceBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Fragment/screenSpaceBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$twirlBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Fragment/twirlBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$TBNBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Fragment/TBNBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$heightToNormalBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Fragment/heightToNormalBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$fragDepthBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Fragment/fragDepthBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$shadowMapBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Fragment/shadowMapBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$prePassOutputBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Fragment/prePassOutputBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Node$2f$Blocks$2f$Fragment$2f$ambientOcclusionBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Node/Blocks/Fragment/ambientOcclusionBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$helperFunctions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/helperFunctions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$imageProcessingDeclaration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/imageProcessingDeclaration.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$imageProcessingFunctions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/imageProcessingFunctions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$helperFunctions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/helperFunctions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$imageProcessingDeclaration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/imageProcessingDeclaration.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$imageProcessingFunctions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/imageProcessingFunctions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$bumpFragment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/bumpFragment.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$bumpFragmentMainFunctions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/bumpFragmentMainFunctions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$bumpFragmentFunctions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/bumpFragmentFunctions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$bumpFragment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/bumpFragment.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$bumpFragmentMainFunctions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/bumpFragmentMainFunctions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$bumpFragmentFunctions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/bumpFragmentFunctions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$shadowMapVertexMetric$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/shadowMapVertexMetric.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$packingFunctions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/packingFunctions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$shadowMapFragment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/shadowMapFragment.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$shadowMapVertexMetric$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/shadowMapVertexMetric.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$packingFunctions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/packingFunctions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$shadowMapFragment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/shadowMapFragment.js [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=dcdbf_%40babylonjs_core_Materials_Node_Blocks_Fragment_9a1de494._.js.map