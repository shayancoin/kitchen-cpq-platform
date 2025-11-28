module.exports = [
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/performanceConfigurator.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** @internal */ __turbopack_context__.s([
    "PerformanceConfigurator",
    ()=>PerformanceConfigurator
]);
class PerformanceConfigurator {
    /**
     * @internal
     */ static SetMatrixPrecision(use64bits) {
        PerformanceConfigurator.MatrixTrackPrecisionChange = false;
        if (use64bits && !PerformanceConfigurator.MatrixUse64Bits) {
            if (PerformanceConfigurator.MatrixTrackedMatrices) {
                for(let m = 0; m < PerformanceConfigurator.MatrixTrackedMatrices.length; ++m){
                    const matrix = PerformanceConfigurator.MatrixTrackedMatrices[m];
                    const values = matrix._m;
                    matrix._m = new Array(16);
                    for(let i = 0; i < 16; ++i){
                        matrix._m[i] = values[i];
                    }
                }
            }
        }
        PerformanceConfigurator.MatrixUse64Bits = use64bits;
        PerformanceConfigurator.MatrixCurrentType = PerformanceConfigurator.MatrixUse64Bits ? Array : Float32Array;
        PerformanceConfigurator.MatrixTrackedMatrices = null; // reclaim some memory, as we don't need _TrackedMatrices anymore
    }
}
/** @internal */ PerformanceConfigurator.MatrixUse64Bits = false;
/** @internal */ PerformanceConfigurator.MatrixTrackPrecisionChange = true;
/** @internal */ PerformanceConfigurator.MatrixCurrentType = Float32Array;
/** @internal */ PerformanceConfigurator.MatrixTrackedMatrices = []; //# sourceMappingURL=performanceConfigurator.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/engineStore.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EngineStore",
    ()=>EngineStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-ssr] (ecmascript)");
;
class EngineStore {
    /**
     * Gets the latest created engine
     */ static get LastCreatedEngine() {
        if (this.Instances.length === 0) {
            return null;
        }
        return this.Instances[this.Instances.length - 1];
    }
    /**
     * Gets the latest created scene
     */ static get LastCreatedScene() {
        return this._LastCreatedScene;
    }
}
/** Gets the list of created engines */ EngineStore.Instances = [];
/**
 * Notifies when an engine was disposed.
 * Mainly used for static/cache cleanup
 */ EngineStore.OnEnginesDisposedObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
/** @internal */ EngineStore._LastCreatedScene = null;
/**
 * Gets or sets a global variable indicating if fallback texture must be used when a texture cannot be loaded
 */ EngineStore.UseFallbackTexture = true;
/**
 * Texture content used if a texture cannot loaded
 */ EngineStore.FallbackTexture = ""; //# sourceMappingURL=engineStore.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Processors/shaderCodeNode.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ShaderCodeNode",
    ()=>ShaderCodeNode
]);
const DefaultAttributeKeywordName = "attribute";
const DefaultVaryingKeywordName = "varying";
class ShaderCodeNode {
    constructor(){
        this.children = [];
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    isValid(preprocessors) {
        return true;
    }
    process(preprocessors, options, preProcessorsFromCode) {
        let result = "";
        if (this.line) {
            let value = this.line;
            const processor = options.processor;
            if (processor) {
                // This must be done before other replacements to avoid mistakenly changing something that was already changed.
                if (processor.lineProcessor) {
                    value = processor.lineProcessor(value, options.isFragment, options.processingContext);
                }
                const attributeKeyword = options.processor?.attributeKeywordName ?? DefaultAttributeKeywordName;
                const varyingKeyword = options.isFragment && options.processor?.varyingFragmentKeywordName ? options.processor?.varyingFragmentKeywordName : !options.isFragment && options.processor?.varyingVertexKeywordName ? options.processor?.varyingVertexKeywordName : DefaultVaryingKeywordName;
                if (!options.isFragment && processor.attributeProcessor && this.line.startsWith(attributeKeyword)) {
                    value = processor.attributeProcessor(this.line, preprocessors, options.processingContext);
                } else if (processor.varyingProcessor && (processor.varyingCheck?.(this.line, options.isFragment) || !processor.varyingCheck && this.line.startsWith(varyingKeyword))) {
                    value = processor.varyingProcessor(this.line, options.isFragment, preprocessors, options.processingContext);
                } else if (processor.uniformProcessor && processor.uniformRegexp && processor.uniformRegexp.test(this.line)) {
                    if (!options.lookForClosingBracketForUniformBuffer) {
                        value = processor.uniformProcessor(this.line, options.isFragment, preprocessors, options.processingContext);
                    }
                } else if (processor.uniformBufferProcessor && processor.uniformBufferRegexp && processor.uniformBufferRegexp.test(this.line)) {
                    if (!options.lookForClosingBracketForUniformBuffer) {
                        value = processor.uniformBufferProcessor(this.line, options.isFragment, options.processingContext);
                        options.lookForClosingBracketForUniformBuffer = true;
                    }
                } else if (processor.textureProcessor && processor.textureRegexp && processor.textureRegexp.test(this.line)) {
                    value = processor.textureProcessor(this.line, options.isFragment, preprocessors, options.processingContext);
                } else if ((processor.uniformProcessor || processor.uniformBufferProcessor) && this.line.startsWith("uniform") && !options.lookForClosingBracketForUniformBuffer) {
                    const regex = /uniform\s+(?:(?:highp)?|(?:lowp)?)\s*(\S+)\s+(\S+)\s*;/;
                    if (regex.test(this.line)) {
                        // uniform
                        if (processor.uniformProcessor) {
                            value = processor.uniformProcessor(this.line, options.isFragment, preprocessors, options.processingContext);
                        }
                    } else {
                        // Uniform buffer
                        if (processor.uniformBufferProcessor) {
                            value = processor.uniformBufferProcessor(this.line, options.isFragment, options.processingContext);
                            options.lookForClosingBracketForUniformBuffer = true;
                        }
                    }
                }
                if (options.lookForClosingBracketForUniformBuffer && this.line.indexOf("}") !== -1) {
                    options.lookForClosingBracketForUniformBuffer = false;
                    if (processor.endOfUniformBufferProcessor) {
                        value = processor.endOfUniformBufferProcessor(this.line, options.isFragment, options.processingContext);
                    }
                }
            }
            result += value + "\n";
        }
        for (const child of this.children){
            result += child.process(preprocessors, options, preProcessorsFromCode);
        }
        if (this.additionalDefineKey) {
            preprocessors[this.additionalDefineKey] = this.additionalDefineValue || "true";
            preProcessorsFromCode[this.additionalDefineKey] = preprocessors[this.additionalDefineKey];
        }
        return result;
    }
} //# sourceMappingURL=shaderCodeNode.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Processors/shaderCodeCursor.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** @internal */ __turbopack_context__.s([
    "ShaderCodeCursor",
    ()=>ShaderCodeCursor
]);
class ShaderCodeCursor {
    constructor(){
        this._lines = [];
    }
    get currentLine() {
        return this._lines[this.lineIndex];
    }
    get canRead() {
        return this.lineIndex < this._lines.length - 1;
    }
    set lines(value) {
        this._lines.length = 0;
        for (const line of value){
            // Skip empty lines
            if (!line || line === "\r") {
                continue;
            }
            // Prevent removing line break in macros.
            if (line[0] === "#") {
                this._lines.push(line);
                continue;
            }
            // Do not split single line comments
            const trimmedLine = line.trim();
            if (!trimmedLine) {
                continue;
            }
            if (trimmedLine.startsWith("//")) {
                this._lines.push(line);
                continue;
            }
            // Work with semicolon in the line
            const semicolonIndex = trimmedLine.indexOf(";");
            if (semicolonIndex === -1) {
                // No semicolon in the line
                this._lines.push(trimmedLine);
            } else if (semicolonIndex === trimmedLine.length - 1) {
                // Single semicolon at the end of the line
                // If trimmedLine == ";", we must not push, to be backward compatible with the old code!
                if (trimmedLine.length > 1) {
                    this._lines.push(trimmedLine);
                }
            } else {
                // Semicolon in the middle of the line
                const split = line.split(";");
                for(let index = 0; index < split.length; index++){
                    let subLine = split[index];
                    if (!subLine) {
                        continue;
                    }
                    subLine = subLine.trim();
                    if (!subLine) {
                        continue;
                    }
                    this._lines.push(subLine + (index !== split.length - 1 ? ";" : ""));
                }
            }
        }
    }
} //# sourceMappingURL=shaderCodeCursor.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Processors/shaderCodeConditionNode.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ShaderCodeConditionNode",
    ()=>ShaderCodeConditionNode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Processors$2f$shaderCodeNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Processors/shaderCodeNode.js [app-ssr] (ecmascript)");
;
class ShaderCodeConditionNode extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Processors$2f$shaderCodeNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderCodeNode"] {
    process(preprocessors, options, preProcessorsFromCode) {
        for(let index = 0; index < this.children.length; index++){
            const node = this.children[index];
            if (node.isValid(preprocessors)) {
                return node.process(preprocessors, options, preProcessorsFromCode);
            }
        }
        return "";
    }
} //# sourceMappingURL=shaderCodeConditionNode.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Processors/shaderCodeTestNode.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ShaderCodeTestNode",
    ()=>ShaderCodeTestNode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Processors$2f$shaderCodeNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Processors/shaderCodeNode.js [app-ssr] (ecmascript)");
;
class ShaderCodeTestNode extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Processors$2f$shaderCodeNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderCodeNode"] {
    isValid(preprocessors) {
        return this.testExpression.isTrue(preprocessors);
    }
} //# sourceMappingURL=shaderCodeTestNode.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Processors/Expressions/shaderDefineExpression.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/naming-convention */ /** @internal */ __turbopack_context__.s([
    "ShaderDefineExpression",
    ()=>ShaderDefineExpression
]);
class ShaderDefineExpression {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    isTrue(preprocessors) {
        return true;
    }
    static postfixToInfix(postfix) {
        const stack = [];
        for (const c of postfix){
            if (ShaderDefineExpression._OperatorPriority[c] === undefined) {
                stack.push(c);
            } else {
                const v1 = stack[stack.length - 1], v2 = stack[stack.length - 2];
                stack.length -= 2;
                stack.push(`(${v2}${c}${v1})`);
            }
        }
        return stack[stack.length - 1];
    }
    /**
     * Converts an infix expression to a postfix expression.
     *
     * This method is used to transform infix expressions, which are more human-readable,
     * into postfix expressions, also known as Reverse Polish Notation (RPN), that can be
     * evaluated more efficiently by a computer. The conversion is based on the operator
     * priority defined in _OperatorPriority.
     *
     * The function employs a stack-based algorithm for the conversion and caches the result
     * to improve performance. The cache keeps track of each converted expression's access time
     * to manage the cache size and optimize memory usage. When the cache size exceeds a specified
     * limit, the least recently accessed items in the cache are deleted.
     *
     * The cache mechanism is particularly helpful for shader compilation, where the same infix
     * expressions might be encountered repeatedly, hence the caching can speed up the process.
     *
     * @param infix - The infix expression to be converted.
     * @returns The postfix expression as an array of strings.
     */ static infixToPostfix(infix) {
        // Is infix already in cache
        const cacheItem = ShaderDefineExpression._InfixToPostfixCache.get(infix);
        if (cacheItem) {
            cacheItem.accessTime = Date.now();
            return cacheItem.result;
        }
        // Is infix contain any operator
        if (!infix.includes("&&") && !infix.includes("||") && !infix.includes(")") && !infix.includes("(")) {
            return [
                infix
            ];
        }
        const result = [];
        let stackIdx = -1;
        const pushOperand = ()=>{
            operand = operand.trim();
            if (operand !== "") {
                result.push(operand);
                operand = "";
            }
        };
        const push = (s)=>{
            if (stackIdx < ShaderDefineExpression._Stack.length - 1) {
                ShaderDefineExpression._Stack[++stackIdx] = s;
            }
        };
        const peek = ()=>ShaderDefineExpression._Stack[stackIdx];
        const pop = ()=>stackIdx === -1 ? "!!INVALID EXPRESSION!!" : ShaderDefineExpression._Stack[stackIdx--];
        let idx = 0, operand = "";
        while(idx < infix.length){
            const c = infix.charAt(idx), token = idx < infix.length - 1 ? infix.substring(idx, 2 + idx) : "";
            if (c === "(") {
                operand = "";
                push(c);
            } else if (c === ")") {
                pushOperand();
                while(stackIdx !== -1 && peek() !== "("){
                    result.push(pop());
                }
                pop();
            } else if (ShaderDefineExpression._OperatorPriority[token] > 1) {
                pushOperand();
                while(stackIdx !== -1 && ShaderDefineExpression._OperatorPriority[peek()] >= ShaderDefineExpression._OperatorPriority[token]){
                    result.push(pop());
                }
                push(token);
                idx++;
            } else {
                operand += c;
            }
            idx++;
        }
        pushOperand();
        while(stackIdx !== -1){
            if (peek() === "(") {
                pop();
            } else {
                result.push(pop());
            }
        }
        // If the cache is at capacity, clear it before adding a new item
        if (ShaderDefineExpression._InfixToPostfixCache.size >= ShaderDefineExpression.InfixToPostfixCacheLimitSize) {
            ShaderDefineExpression.ClearCache();
        }
        // Add the new item to the cache, including the current time as the last access time
        ShaderDefineExpression._InfixToPostfixCache.set(infix, {
            result,
            accessTime: Date.now()
        });
        return result;
    }
    static ClearCache() {
        // Convert the cache to an array and sort by last access time
        const sortedCache = Array.from(ShaderDefineExpression._InfixToPostfixCache.entries()).sort((a, b)=>a[1].accessTime - b[1].accessTime);
        // Remove the least recently accessed half of the cache
        for(let i = 0; i < ShaderDefineExpression.InfixToPostfixCacheCleanupSize; i++){
            ShaderDefineExpression._InfixToPostfixCache.delete(sortedCache[i][0]);
        }
    }
}
/**
 * Cache items count limit for the InfixToPostfix cache.
 * It uses to improve the performance of the shader compilation.
 * For details see PR: https://github.com/BabylonJS/Babylon.js/pull/13936
 */ ShaderDefineExpression.InfixToPostfixCacheLimitSize = 50000;
/**
 * When the cache size is exceeded, a cache cleanup will be triggered
 * and the cache will be reduced by the size specified
 * in the InfixToPostfixCacheCleanupSize variable, removing entries
 * that have not been accessed the longest.
 */ ShaderDefineExpression.InfixToPostfixCacheCleanupSize = 25000;
ShaderDefineExpression._InfixToPostfixCache = new Map();
ShaderDefineExpression._OperatorPriority = {
    ")": 0,
    "(": 1,
    "||": 2,
    "&&": 3
};
ShaderDefineExpression._Stack = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
]; //# sourceMappingURL=shaderDefineExpression.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Processors/Expressions/Operators/shaderDefineIsDefinedOperator.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ShaderDefineIsDefinedOperator",
    ()=>ShaderDefineIsDefinedOperator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Processors$2f$Expressions$2f$shaderDefineExpression$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Processors/Expressions/shaderDefineExpression.js [app-ssr] (ecmascript)");
;
class ShaderDefineIsDefinedOperator extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Processors$2f$Expressions$2f$shaderDefineExpression$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderDefineExpression"] {
    constructor(define, not = false){
        super();
        this.define = define;
        this.not = not;
    }
    isTrue(preprocessors) {
        let condition = preprocessors[this.define] !== undefined;
        if (this.not) {
            condition = !condition;
        }
        return condition;
    }
} //# sourceMappingURL=shaderDefineIsDefinedOperator.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Processors/Expressions/Operators/shaderDefineOrOperator.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ShaderDefineOrOperator",
    ()=>ShaderDefineOrOperator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Processors$2f$Expressions$2f$shaderDefineExpression$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Processors/Expressions/shaderDefineExpression.js [app-ssr] (ecmascript)");
;
class ShaderDefineOrOperator extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Processors$2f$Expressions$2f$shaderDefineExpression$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderDefineExpression"] {
    isTrue(preprocessors) {
        return this.leftOperand.isTrue(preprocessors) || this.rightOperand.isTrue(preprocessors);
    }
} //# sourceMappingURL=shaderDefineOrOperator.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Processors/Expressions/Operators/shaderDefineAndOperator.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ShaderDefineAndOperator",
    ()=>ShaderDefineAndOperator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Processors$2f$Expressions$2f$shaderDefineExpression$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Processors/Expressions/shaderDefineExpression.js [app-ssr] (ecmascript)");
;
class ShaderDefineAndOperator extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Processors$2f$Expressions$2f$shaderDefineExpression$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderDefineExpression"] {
    isTrue(preprocessors) {
        return this.leftOperand.isTrue(preprocessors) && this.rightOperand.isTrue(preprocessors);
    }
} //# sourceMappingURL=shaderDefineAndOperator.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Processors/Expressions/Operators/shaderDefineArithmeticOperator.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ShaderDefineArithmeticOperator",
    ()=>ShaderDefineArithmeticOperator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Processors$2f$Expressions$2f$shaderDefineExpression$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Processors/Expressions/shaderDefineExpression.js [app-ssr] (ecmascript)");
;
class ShaderDefineArithmeticOperator extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Processors$2f$Expressions$2f$shaderDefineExpression$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderDefineExpression"] {
    constructor(define, operand, testValue){
        super();
        this.define = define;
        this.operand = operand;
        this.testValue = testValue;
    }
    toString() {
        return `${this.define} ${this.operand} ${this.testValue}`;
    }
    isTrue(preprocessors) {
        let condition = false;
        const left = parseInt(preprocessors[this.define] != undefined ? preprocessors[this.define] : this.define);
        const right = parseInt(preprocessors[this.testValue] != undefined ? preprocessors[this.testValue] : this.testValue);
        if (isNaN(left) || isNaN(right)) {
            // We can't evaluate the expression because we can't resolve the left and/or right side
            // We should not throw an error here because the code might be using a define that is not defined in the material/shader!
            return false;
        }
        switch(this.operand){
            case ">":
                condition = left > right;
                break;
            case "<":
                condition = left < right;
                break;
            case "<=":
                condition = left <= right;
                break;
            case ">=":
                condition = left >= right;
                break;
            case "==":
                condition = left === right;
                break;
            case "!=":
                condition = left !== right;
                break;
        }
        return condition;
    }
} //# sourceMappingURL=shaderDefineArithmeticOperator.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Processors/shaderProcessor.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/no-unused-vars */ __turbopack_context__.s([
    "Finalize",
    ()=>Finalize,
    "Initialize",
    ()=>Initialize,
    "PreProcess",
    ()=>PreProcess,
    "Process",
    ()=>Process,
    "ProcessIncludes",
    ()=>ProcessIncludes,
    "_FunctionContainer",
    ()=>_FunctionContainer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Processors$2f$shaderCodeNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Processors/shaderCodeNode.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Processors$2f$shaderCodeCursor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Processors/shaderCodeCursor.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Processors$2f$shaderCodeConditionNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Processors/shaderCodeConditionNode.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Processors$2f$shaderCodeTestNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Processors/shaderCodeTestNode.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Processors$2f$Expressions$2f$Operators$2f$shaderDefineIsDefinedOperator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Processors/Expressions/Operators/shaderDefineIsDefinedOperator.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Processors$2f$Expressions$2f$Operators$2f$shaderDefineOrOperator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Processors/Expressions/Operators/shaderDefineOrOperator.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Processors$2f$Expressions$2f$Operators$2f$shaderDefineAndOperator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Processors/Expressions/Operators/shaderDefineAndOperator.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Processors$2f$Expressions$2f$shaderDefineExpression$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Processors/Expressions/shaderDefineExpression.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Processors$2f$Expressions$2f$Operators$2f$shaderDefineArithmeticOperator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Processors/Expressions/Operators/shaderDefineArithmeticOperator.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$devTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/devTools.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/abstractEngine.functions.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
const RegexSe = /defined\s*?\((.+?)\)/g;
const RegexSeRevert = /defined\s*?\[(.+?)\]/g;
const RegexShaderInclude = /#include\s?<(.+)>(\((.*)\))*(\[(.*)\])*/g;
const RegexShaderDecl = /__decl__/;
const RegexLightX = /light\{X\}.(\w*)/g;
const RegexX = /\{X\}/g;
const ReusableMatches = [];
const MoveCursorRegex = /(#ifdef)|(#else)|(#elif)|(#endif)|(#ifndef)|(#if)/;
function Initialize(options) {
    if (options.processor && options.processor.initializeShaders) {
        options.processor.initializeShaders(options.processingContext);
    }
}
function Process(sourceCode, options, callback, engine) {
    if (options.processor?.preProcessShaderCode) {
        sourceCode = options.processor.preProcessShaderCode(sourceCode, options.isFragment);
    }
    ProcessIncludes(sourceCode, options, (codeWithIncludes)=>{
        if (options.processCodeAfterIncludes) {
            codeWithIncludes = options.processCodeAfterIncludes(options.isFragment ? "fragment" : "vertex", codeWithIncludes, options.defines);
        }
        const migratedCode = ProcessShaderConversion(codeWithIncludes, options, engine);
        callback(migratedCode, codeWithIncludes);
    });
}
function PreProcess(sourceCode, options, callback, engine) {
    if (options.processor?.preProcessShaderCode) {
        sourceCode = options.processor.preProcessShaderCode(sourceCode, options.isFragment);
    }
    ProcessIncludes(sourceCode, options, (codeWithIncludes)=>{
        if (options.processCodeAfterIncludes) {
            codeWithIncludes = options.processCodeAfterIncludes(options.isFragment ? "fragment" : "vertex", codeWithIncludes, options.defines);
        }
        const migratedCode = ApplyPreProcessing(codeWithIncludes, options, engine);
        callback(migratedCode, codeWithIncludes);
    });
}
function Finalize(vertexCode, fragmentCode, options) {
    if (!options.processor || !options.processor.finalizeShaders) {
        return {
            vertexCode,
            fragmentCode
        };
    }
    return options.processor.finalizeShaders(vertexCode, fragmentCode, options.processingContext);
}
function ProcessPrecision(source, options) {
    if (options.processor?.noPrecision) {
        return source;
    }
    const shouldUseHighPrecisionShader = options.shouldUseHighPrecisionShader;
    if (source.indexOf("precision highp float") === -1) {
        if (!shouldUseHighPrecisionShader) {
            source = "precision mediump float;\n" + source;
        } else {
            source = "precision highp float;\n" + source;
        }
    } else {
        if (!shouldUseHighPrecisionShader) {
            // Moving highp to mediump
            source = source.replace("precision highp float", "precision mediump float");
        }
    }
    return source;
}
function ExtractOperation(expression) {
    const regex = /defined\((.+)\)/;
    const match = regex.exec(expression);
    if (match && match.length) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Processors$2f$Expressions$2f$Operators$2f$shaderDefineIsDefinedOperator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderDefineIsDefinedOperator"](match[1].trim(), expression[0] === "!");
    }
    const operators = [
        "==",
        "!=",
        ">=",
        "<=",
        "<",
        ">"
    ];
    let operator = "";
    let indexOperator = 0;
    for (operator of operators){
        indexOperator = expression.indexOf(operator);
        if (indexOperator > -1) {
            break;
        }
    }
    if (indexOperator === -1) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Processors$2f$Expressions$2f$Operators$2f$shaderDefineIsDefinedOperator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderDefineIsDefinedOperator"](expression);
    }
    const define = expression.substring(0, indexOperator).trim();
    const value = expression.substring(indexOperator + operator.length).trim();
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Processors$2f$Expressions$2f$Operators$2f$shaderDefineArithmeticOperator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderDefineArithmeticOperator"](define, operator, value);
}
function BuildSubExpression(expression) {
    expression = expression.replace(RegexSe, "defined[$1]");
    const postfix = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Processors$2f$Expressions$2f$shaderDefineExpression$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderDefineExpression"].infixToPostfix(expression);
    const stack = [];
    for (const c of postfix){
        if (c !== "||" && c !== "&&") {
            stack.push(c);
        } else if (stack.length >= 2) {
            let v1 = stack[stack.length - 1], v2 = stack[stack.length - 2];
            stack.length -= 2;
            const operator = c == "&&" ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Processors$2f$Expressions$2f$Operators$2f$shaderDefineAndOperator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderDefineAndOperator"]() : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Processors$2f$Expressions$2f$Operators$2f$shaderDefineOrOperator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderDefineOrOperator"]();
            if (typeof v1 === "string") {
                v1 = v1.replace(RegexSeRevert, "defined($1)");
            }
            if (typeof v2 === "string") {
                v2 = v2.replace(RegexSeRevert, "defined($1)");
            }
            operator.leftOperand = typeof v2 === "string" ? ExtractOperation(v2) : v2;
            operator.rightOperand = typeof v1 === "string" ? ExtractOperation(v1) : v1;
            stack.push(operator);
        }
    }
    let result = stack[stack.length - 1];
    if (typeof result === "string") {
        result = result.replace(RegexSeRevert, "defined($1)");
    }
    // note: stack.length !== 1 if there was an error in the parsing
    return typeof result === "string" ? ExtractOperation(result) : result;
}
function BuildExpression(line, start) {
    const node = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Processors$2f$shaderCodeTestNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderCodeTestNode"]();
    const command = line.substring(0, start);
    let expression = line.substring(start);
    expression = expression.substring(0, (expression.indexOf("//") + 1 || expression.length + 1) - 1).trim();
    if (command === "#ifdef") {
        node.testExpression = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Processors$2f$Expressions$2f$Operators$2f$shaderDefineIsDefinedOperator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderDefineIsDefinedOperator"](expression);
    } else if (command === "#ifndef") {
        node.testExpression = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Processors$2f$Expressions$2f$Operators$2f$shaderDefineIsDefinedOperator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderDefineIsDefinedOperator"](expression, true);
    } else {
        node.testExpression = BuildSubExpression(expression);
    }
    return node;
}
function MoveCursorWithinIf(cursor, rootNode, ifNode, preProcessorsFromCode) {
    let line = cursor.currentLine;
    while(MoveCursor(cursor, ifNode, preProcessorsFromCode)){
        line = cursor.currentLine;
        const first5 = line.substring(0, 5).toLowerCase();
        if (first5 === "#else") {
            const elseNode = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Processors$2f$shaderCodeNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderCodeNode"]();
            rootNode.children.push(elseNode);
            MoveCursor(cursor, elseNode, preProcessorsFromCode);
            return;
        } else if (first5 === "#elif") {
            const elifNode = BuildExpression(line, 5);
            rootNode.children.push(elifNode);
            ifNode = elifNode;
        }
    }
}
function MoveCursor(cursor, rootNode, preProcessorsFromCode) {
    while(cursor.canRead){
        cursor.lineIndex++;
        const line = cursor.currentLine;
        if (line.indexOf("#") >= 0) {
            const matches = MoveCursorRegex.exec(line);
            if (matches && matches.length) {
                const keyword = matches[0];
                switch(keyword){
                    case "#ifdef":
                        {
                            const newRootNode = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Processors$2f$shaderCodeConditionNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderCodeConditionNode"]();
                            rootNode.children.push(newRootNode);
                            const ifNode = BuildExpression(line, 6);
                            newRootNode.children.push(ifNode);
                            MoveCursorWithinIf(cursor, newRootNode, ifNode, preProcessorsFromCode);
                            break;
                        }
                    case "#else":
                    case "#elif":
                        return true;
                    case "#endif":
                        return false;
                    case "#ifndef":
                        {
                            const newRootNode = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Processors$2f$shaderCodeConditionNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderCodeConditionNode"]();
                            rootNode.children.push(newRootNode);
                            const ifNode = BuildExpression(line, 7);
                            newRootNode.children.push(ifNode);
                            MoveCursorWithinIf(cursor, newRootNode, ifNode, preProcessorsFromCode);
                            break;
                        }
                    case "#if":
                        {
                            const newRootNode = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Processors$2f$shaderCodeConditionNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderCodeConditionNode"]();
                            const ifNode = BuildExpression(line, 3);
                            rootNode.children.push(newRootNode);
                            newRootNode.children.push(ifNode);
                            MoveCursorWithinIf(cursor, newRootNode, ifNode, preProcessorsFromCode);
                            break;
                        }
                }
                continue;
            }
        }
        const newNode = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Processors$2f$shaderCodeNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderCodeNode"]();
        newNode.line = line;
        rootNode.children.push(newNode);
        // Detect additional defines
        if (line[0] === "#" && line[1] === "d") {
            const split = line.replace(";", "").split(" ");
            newNode.additionalDefineKey = split[1];
            if (split.length === 3) {
                newNode.additionalDefineValue = split[2];
            }
        }
    }
    return false;
}
function EvaluatePreProcessors(sourceCode, preprocessors, options, preProcessorsFromCode) {
    const rootNode = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Processors$2f$shaderCodeNode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderCodeNode"]();
    const cursor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Processors$2f$shaderCodeCursor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderCodeCursor"]();
    cursor.lineIndex = -1;
    cursor.lines = sourceCode.split("\n");
    // Decompose (We keep it in 2 steps so it is easier to maintain and perf hit is insignificant)
    MoveCursor(cursor, rootNode, preProcessorsFromCode);
    // Recompose
    return rootNode.process(preprocessors, options, preProcessorsFromCode);
}
function PreparePreProcessors(options, engine) {
    const defines = options.defines;
    const preprocessors = {};
    for (const define of defines){
        const keyValue = define.replace("#define", "").replace(";", "").trim();
        const split = keyValue.split(" ");
        preprocessors[split[0]] = split.length > 1 ? split[1] : "";
    }
    if (options.processor?.shaderLanguage === 0 /* ShaderLanguage.GLSL */ ) {
        preprocessors["GL_ES"] = "true";
    }
    preprocessors["__VERSION__"] = options.version;
    preprocessors[options.platformName] = "true";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_GetGlobalDefines"])(preprocessors, engine?.isNDCHalfZRange, engine?.useReverseDepthBuffer, engine?.useExactSrgbConversions);
    return preprocessors;
}
function ProcessShaderConversion(sourceCode, options, engine) {
    let preparedSourceCode = ProcessPrecision(sourceCode, options);
    if (!options.processor) {
        return preparedSourceCode;
    }
    // Already converted
    if (options.processor.shaderLanguage === 0 /* ShaderLanguage.GLSL */  && preparedSourceCode.indexOf("#version 3") !== -1) {
        preparedSourceCode = preparedSourceCode.replace("#version 300 es", "");
        if (!options.processor.parseGLES3) {
            return preparedSourceCode;
        }
    }
    const defines = options.defines;
    const preprocessors = PreparePreProcessors(options, engine);
    // General pre processing
    if (options.processor.preProcessor) {
        preparedSourceCode = options.processor.preProcessor(preparedSourceCode, defines, preprocessors, options.isFragment, options.processingContext);
    }
    const preProcessorsFromCode = {};
    preparedSourceCode = EvaluatePreProcessors(preparedSourceCode, preprocessors, options, preProcessorsFromCode);
    // Post processing
    if (options.processor.postProcessor) {
        preparedSourceCode = options.processor.postProcessor(preparedSourceCode, defines, options.isFragment, options.processingContext, engine ? {
            drawBuffersExtensionDisabled: engine.getCaps().drawBuffersExtension ? false : true
        } : {}, preprocessors, preProcessorsFromCode);
    }
    // Inline functions tagged with #define inline
    if (engine?._features.needShaderCodeInlining) {
        preparedSourceCode = engine.inlineShaderCode(preparedSourceCode);
    }
    return preparedSourceCode;
}
function ApplyPreProcessing(sourceCode, options, engine) {
    let preparedSourceCode = sourceCode;
    const defines = options.defines;
    const preprocessors = PreparePreProcessors(options, engine);
    // General pre processing
    if (options.processor?.preProcessor) {
        preparedSourceCode = options.processor.preProcessor(preparedSourceCode, defines, preprocessors, options.isFragment, options.processingContext);
    }
    const preProcessorsFromCode = {};
    preparedSourceCode = EvaluatePreProcessors(preparedSourceCode, preprocessors, options, preProcessorsFromCode);
    // Post processing
    if (options.processor?.postProcessor) {
        preparedSourceCode = options.processor.postProcessor(preparedSourceCode, defines, options.isFragment, options.processingContext, engine ? {
            drawBuffersExtensionDisabled: engine.getCaps().drawBuffersExtension ? false : true
        } : {}, preprocessors, preProcessorsFromCode);
    }
    // Inline functions tagged with #define inline
    if (engine._features.needShaderCodeInlining) {
        preparedSourceCode = engine.inlineShaderCode(preparedSourceCode);
    }
    return preparedSourceCode;
}
function ProcessIncludes(sourceCode, options, callback) {
    ReusableMatches.length = 0;
    let match;
    // stay back-compat to the old matchAll syntax
    while((match = RegexShaderInclude.exec(sourceCode)) !== null){
        ReusableMatches.push(match);
    }
    let returnValue = String(sourceCode);
    let parts = [
        sourceCode
    ];
    let keepProcessing = false;
    for (const match of ReusableMatches){
        let includeFile = match[1];
        // Uniform declaration
        if (includeFile.indexOf("__decl__") !== -1) {
            includeFile = includeFile.replace(RegexShaderDecl, "");
            if (options.supportsUniformBuffers) {
                includeFile = includeFile.replace("Vertex", "Ubo").replace("Fragment", "Ubo");
            }
            includeFile = includeFile + "Declaration";
        }
        if (options.includesShadersStore[includeFile]) {
            // Substitution
            let includeContent = options.includesShadersStore[includeFile];
            if (match[2]) {
                const splits = match[3].split(",");
                for(let index = 0; index < splits.length; index += 2){
                    const source = new RegExp(splits[index], "g");
                    const dest = splits[index + 1];
                    includeContent = includeContent.replace(source, dest);
                }
            }
            if (match[4]) {
                const indexString = match[5];
                if (indexString.indexOf("..") !== -1) {
                    const indexSplits = indexString.split("..");
                    const minIndex = parseInt(indexSplits[0]);
                    let maxIndex = parseInt(indexSplits[1]);
                    let sourceIncludeContent = includeContent.slice(0);
                    includeContent = "";
                    if (isNaN(maxIndex)) {
                        maxIndex = options.indexParameters[indexSplits[1]];
                    }
                    for(let i = minIndex; i < maxIndex; i++){
                        if (!options.supportsUniformBuffers) {
                            // Ubo replacement
                            sourceIncludeContent = sourceIncludeContent.replace(RegexLightX, (str, p1)=>{
                                return p1 + "{X}";
                            });
                        }
                        includeContent += sourceIncludeContent.replace(RegexX, i.toString()) + "\n";
                    }
                } else {
                    if (!options.supportsUniformBuffers) {
                        // Ubo replacement
                        includeContent = includeContent.replace(RegexLightX, (str, p1)=>{
                            return p1 + "{X}";
                        });
                    }
                    includeContent = includeContent.replace(RegexX, indexString);
                }
            }
            // Replace
            // Split all parts on match[0] and intersperse the parts with the include content
            const newParts = [];
            for (const part of parts){
                const splitPart = part.split(match[0]);
                for(let i = 0; i < splitPart.length - 1; i++){
                    newParts.push(splitPart[i]);
                    newParts.push(includeContent);
                }
                newParts.push(splitPart[splitPart.length - 1]);
            }
            parts = newParts;
            keepProcessing = keepProcessing || includeContent.indexOf("#include<") >= 0 || includeContent.indexOf("#include <") >= 0;
        } else {
            const includeShaderUrl = options.shadersRepository + "ShadersInclude/" + includeFile + ".fx";
            _FunctionContainer.loadFile(includeShaderUrl, (fileContent)=>{
                options.includesShadersStore[includeFile] = fileContent;
                ProcessIncludes(parts.join(""), options, callback);
            });
            return;
        }
    }
    ReusableMatches.length = 0;
    returnValue = parts.join("");
    if (keepProcessing) {
        ProcessIncludes(returnValue.toString(), options, callback);
    } else {
        callback(returnValue);
    }
}
const _FunctionContainer = {
    /**
     * Loads a file from a url
     * @param url url to load
     * @param onSuccess callback called when the file successfully loads
     * @param onProgress callback called while file is loading (if the server supports this mode)
     * @param offlineProvider defines the offline provider for caching
     * @param useArrayBuffer defines a boolean indicating that date must be returned as ArrayBuffer
     * @param onError callback called when the file fails to load
     * @returns a file request object
     * @internal
     */ loadFile: (url, onSuccess, onProgress, offlineProvider, useArrayBuffer, onError)=>{
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$devTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_WarnImport"])("FileTools");
    }
}; //# sourceMappingURL=shaderProcessor.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Processors/shaderCodeInliner.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ShaderCodeInliner",
    ()=>ShaderCodeInliner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$codeStringParsingTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/codeStringParsingTools.js [app-ssr] (ecmascript)");
;
;
class ShaderCodeInliner {
    /** Gets the code after the inlining process */ get code() {
        return this._sourceCode;
    }
    /**
     * Initializes the inliner
     * @param sourceCode shader code source to inline
     * @param numMaxIterations maximum number of iterations (used to detect recursive calls)
     */ constructor(sourceCode, numMaxIterations = 20){
        /** Gets or sets the debug mode */ this.debug = false;
        this._sourceCode = sourceCode;
        this._numMaxIterations = numMaxIterations;
        this._functionDescr = [];
        this.inlineToken = "#define inline";
    }
    /**
     * Start the processing of the shader code
     */ processCode() {
        if (this.debug) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Log(`Start inlining process (code size=${this._sourceCode.length})...`);
        }
        this._collectFunctions();
        this._processInlining(this._numMaxIterations);
        if (this.debug) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Log("End of inlining process.");
        }
    }
    _collectFunctions() {
        let startIndex = 0;
        while(startIndex < this._sourceCode.length){
            // locate the function to inline and extract its name
            const inlineTokenIndex = this._sourceCode.indexOf(this.inlineToken, startIndex);
            if (inlineTokenIndex < 0) {
                break;
            }
            const funcParamsStartIndex = this._sourceCode.indexOf("(", inlineTokenIndex + this.inlineToken.length);
            if (funcParamsStartIndex < 0) {
                if (this.debug) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn(`Could not find the opening parenthesis after the token. startIndex=${startIndex}`);
                }
                startIndex = inlineTokenIndex + this.inlineToken.length;
                continue;
            }
            const funcNameMatch = ShaderCodeInliner._RegexpFindFunctionNameAndType.exec(this._sourceCode.substring(inlineTokenIndex + this.inlineToken.length, funcParamsStartIndex));
            if (!funcNameMatch) {
                if (this.debug) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn(`Could not extract the name/type of the function from: ${this._sourceCode.substring(inlineTokenIndex + this.inlineToken.length, funcParamsStartIndex)}`);
                }
                startIndex = inlineTokenIndex + this.inlineToken.length;
                continue;
            }
            const [funcType, funcName] = [
                funcNameMatch[3],
                funcNameMatch[4]
            ];
            // extract the parameters of the function as a whole string (without the leading / trailing parenthesis)
            const funcParamsEndIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$codeStringParsingTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ExtractBetweenMarkers"])("(", ")", this._sourceCode, funcParamsStartIndex);
            if (funcParamsEndIndex < 0) {
                if (this.debug) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn(`Could not extract the parameters the function '${funcName}' (type=${funcType}). funcParamsStartIndex=${funcParamsStartIndex}`);
                }
                startIndex = inlineTokenIndex + this.inlineToken.length;
                continue;
            }
            const funcParams = this._sourceCode.substring(funcParamsStartIndex + 1, funcParamsEndIndex);
            // extract the body of the function (with the curly brackets)
            const funcBodyStartIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$codeStringParsingTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SkipWhitespaces"])(this._sourceCode, funcParamsEndIndex + 1);
            if (funcBodyStartIndex === this._sourceCode.length) {
                if (this.debug) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn(`Could not extract the body of the function '${funcName}' (type=${funcType}). funcParamsEndIndex=${funcParamsEndIndex}`);
                }
                startIndex = inlineTokenIndex + this.inlineToken.length;
                continue;
            }
            const funcBodyEndIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$codeStringParsingTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ExtractBetweenMarkers"])("{", "}", this._sourceCode, funcBodyStartIndex);
            if (funcBodyEndIndex < 0) {
                if (this.debug) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn(`Could not extract the body of the function '${funcName}' (type=${funcType}). funcBodyStartIndex=${funcBodyStartIndex}`);
                }
                startIndex = inlineTokenIndex + this.inlineToken.length;
                continue;
            }
            const funcBody = this._sourceCode.substring(funcBodyStartIndex, funcBodyEndIndex + 1);
            // process the parameters: extract each names
            const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$codeStringParsingTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RemoveComments"])(funcParams).split(",");
            const paramNames = [];
            for(let p = 0; p < params.length; ++p){
                const param = params[p].trim();
                const idx = param.lastIndexOf(" ");
                if (idx >= 0) {
                    paramNames.push(param.substring(idx + 1));
                }
            }
            if (funcType !== "void") {
                // for functions that return a value, we will replace "return" by "tempvarname = ", tempvarname being a unique generated name
                paramNames.push("return");
            }
            // collect the function
            this._functionDescr.push({
                name: funcName,
                type: funcType,
                parameters: paramNames,
                body: funcBody,
                callIndex: 0
            });
            startIndex = funcBodyEndIndex + 1;
            // remove the function from the source code
            const partBefore = inlineTokenIndex > 0 ? this._sourceCode.substring(0, inlineTokenIndex) : "";
            const partAfter = funcBodyEndIndex + 1 < this._sourceCode.length - 1 ? this._sourceCode.substring(funcBodyEndIndex + 1) : "";
            this._sourceCode = partBefore + partAfter;
            startIndex -= funcBodyEndIndex + 1 - inlineTokenIndex;
        }
        if (this.debug) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Log(`Collect functions: ${this._functionDescr.length} functions found. functionDescr=${this._functionDescr}`);
        }
    }
    _processInlining(numMaxIterations = 20) {
        while(numMaxIterations-- >= 0){
            if (!this._replaceFunctionCallsByCode()) {
                break;
            }
        }
        if (this.debug) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Log(`numMaxIterations is ${numMaxIterations} after inlining process`);
        }
        return numMaxIterations >= 0;
    }
    _replaceFunctionCallsByCode() {
        let doAgain = false;
        for (const func of this._functionDescr){
            const { name, type, parameters, body } = func;
            let startIndex = 0;
            while(startIndex < this._sourceCode.length){
                // Look for the function name in the source code
                const functionCallIndex = this._sourceCode.indexOf(name, startIndex);
                if (functionCallIndex < 0) {
                    break;
                }
                // Make sure "name" is not part of a bigger string
                if (functionCallIndex === 0 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$codeStringParsingTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IsIdentifierChar"])(this._sourceCode.charAt(functionCallIndex - 1))) {
                    startIndex = functionCallIndex + name.length;
                    continue;
                }
                // Find the opening parenthesis
                const callParamsStartIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$codeStringParsingTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SkipWhitespaces"])(this._sourceCode, functionCallIndex + name.length);
                if (callParamsStartIndex === this._sourceCode.length || this._sourceCode.charAt(callParamsStartIndex) !== "(") {
                    startIndex = functionCallIndex + name.length;
                    continue;
                }
                // extract the parameters of the function call as a whole string (without the leading / trailing parenthesis)
                const callParamsEndIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$codeStringParsingTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ExtractBetweenMarkers"])("(", ")", this._sourceCode, callParamsStartIndex);
                if (callParamsEndIndex < 0) {
                    if (this.debug) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn(`Could not extract the parameters of the function call. Function '${name}' (type=${type}). callParamsStartIndex=${callParamsStartIndex}`);
                    }
                    startIndex = functionCallIndex + name.length;
                    continue;
                }
                const callParams = this._sourceCode.substring(callParamsStartIndex + 1, callParamsEndIndex);
                // process the parameter call: extract each names
                // this function split the parameter list used in the function call at ',' boundaries by taking care of potential parenthesis like in:
                //      myfunc(a, vec2(1., 0.), 4.)
                const splitParameterCall = (s)=>{
                    const parameters = [];
                    let curIdx = 0, startParamIdx = 0;
                    while(curIdx < s.length){
                        if (s.charAt(curIdx) === "(") {
                            const idx2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$codeStringParsingTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ExtractBetweenMarkers"])("(", ")", s, curIdx);
                            if (idx2 < 0) {
                                return null;
                            }
                            curIdx = idx2;
                        } else if (s.charAt(curIdx) === ",") {
                            parameters.push(s.substring(startParamIdx, curIdx));
                            startParamIdx = curIdx + 1;
                        }
                        curIdx++;
                    }
                    if (startParamIdx < curIdx) {
                        parameters.push(s.substring(startParamIdx, curIdx));
                    }
                    return parameters;
                };
                const params = splitParameterCall((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$codeStringParsingTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RemoveComments"])(callParams));
                if (params === null) {
                    if (this.debug) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn(`Invalid function call: can't extract the parameters of the function call. Function '${name}' (type=${type}). callParamsStartIndex=${callParamsStartIndex}, callParams=` + callParams);
                    }
                    startIndex = functionCallIndex + name.length;
                    continue;
                }
                const paramNames = [];
                for(let p = 0; p < params.length; ++p){
                    const param = params[p].trim();
                    paramNames.push(param);
                }
                const retParamName = type !== "void" ? name + "_" + func.callIndex++ : null;
                if (retParamName) {
                    paramNames.push(retParamName + " =");
                }
                if (paramNames.length !== parameters.length) {
                    if (this.debug) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn(`Invalid function call: not the same number of parameters for the call than the number expected by the function. Function '${name}' (type=${type}). function parameters=${parameters}, call parameters=${paramNames}`);
                    }
                    startIndex = functionCallIndex + name.length;
                    continue;
                }
                startIndex = callParamsEndIndex + 1;
                // replace the function call by the body function
                const funcBody = this._replaceNames(body, parameters, paramNames);
                let partBefore = functionCallIndex > 0 ? this._sourceCode.substring(0, functionCallIndex) : "";
                const partAfter = callParamsEndIndex + 1 < this._sourceCode.length - 1 ? this._sourceCode.substring(callParamsEndIndex + 1) : "";
                if (retParamName) {
                    // case where the function returns a value. We generate:
                    // FUNCTYPE retParamName;
                    // {function body}
                    // and replace the function call by retParamName
                    const injectDeclarationIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$codeStringParsingTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FindBackward"])(this._sourceCode, functionCallIndex - 1, "\n", "{");
                    partBefore = this._sourceCode.substring(0, injectDeclarationIndex + 1);
                    const partBetween = this._sourceCode.substring(injectDeclarationIndex + 1, functionCallIndex);
                    this._sourceCode = partBefore + type + " " + retParamName + ";\n" + funcBody + "\n" + partBetween + retParamName + partAfter;
                    if (this.debug) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Log(`Replace function call by code. Function '${name}' (type=${type}). injectDeclarationIndex=${injectDeclarationIndex}, call parameters=${paramNames}`);
                    }
                } else {
                    // simple case where the return value of the function is "void"
                    this._sourceCode = partBefore + funcBody + partAfter;
                    startIndex += funcBody.length - (callParamsEndIndex + 1 - functionCallIndex);
                    if (this.debug) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Log(`Replace function call by code. Function '${name}' (type=${type}). functionCallIndex=${functionCallIndex}, call parameters=${paramNames}`);
                    }
                }
                doAgain = true;
            }
        }
        return doAgain;
    }
    _replaceNames(code, sources, destinations) {
        for(let i = 0; i < sources.length; ++i){
            const source = new RegExp((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$codeStringParsingTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EscapeRegExp"])(sources[i]), "g"), sourceLen = sources[i].length, destination = destinations[i];
            code = code.replace(source, (match, ...args)=>{
                const offset = args[0];
                // Make sure "source" is not part of a bigger identifier (for eg, if source=view and we matched it with viewDirection)
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$codeStringParsingTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IsIdentifierChar"])(code.charAt(offset - 1)) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$codeStringParsingTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IsIdentifierChar"])(code.charAt(offset + sourceLen))) {
                    return sources[i];
                }
                return destination;
            });
        }
        return code;
    }
}
ShaderCodeInliner._RegexpFindFunctionNameAndType = /((\s+?)(\w+)\s+(\w+)\s*?)$/; //# sourceMappingURL=shaderCodeInliner.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Processors/iShaderProcessor.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
 //# sourceMappingURL=iShaderProcessor.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/abstractEngine.functions.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EngineFunctionContext",
    ()=>EngineFunctionContext,
    "_ConcatenateShader",
    ()=>_ConcatenateShader,
    "_GetGlobalDefines",
    ()=>_GetGlobalDefines,
    "_LoadFile",
    ()=>_LoadFile,
    "allocateAndCopyTypedBuffer",
    ()=>allocateAndCopyTypedBuffer,
    "getHostDocument",
    ()=>getHostDocument
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$devTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/devTools.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$domManagement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/domManagement.js [app-ssr] (ecmascript)");
;
;
const EngineFunctionContext = {};
function _ConcatenateShader(source, defines, shaderVersion = "") {
    return shaderVersion + (defines ? defines + "\n" : "") + source;
}
function _LoadFile(url, onSuccess, onProgress, offlineProvider, useArrayBuffer, onError, injectedLoadFile) {
    const loadFile = injectedLoadFile || EngineFunctionContext.loadFile;
    if (loadFile) {
        const request = loadFile(url, onSuccess, onProgress, offlineProvider, useArrayBuffer, onError);
        return request;
    }
    throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$devTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_WarnImport"])("FileTools");
}
function getHostDocument(renderingCanvas = null) {
    if (renderingCanvas && renderingCanvas.ownerDocument) {
        return renderingCanvas.ownerDocument;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$domManagement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IsDocumentAvailable"])() ? document : null;
}
function _GetGlobalDefines(defines, // eslint-disable-next-line @typescript-eslint/naming-convention
isNDCHalfZRange, useReverseDepthBuffer, useExactSrgbConversions) {
    if (defines) {
        if (isNDCHalfZRange) {
            defines["IS_NDC_HALF_ZRANGE"] = "";
        } else {
            delete defines["IS_NDC_HALF_ZRANGE"];
        }
        if (useReverseDepthBuffer) {
            defines["USE_REVERSE_DEPTHBUFFER"] = "";
        } else {
            delete defines["USE_REVERSE_DEPTHBUFFER"];
        }
        if (useExactSrgbConversions) {
            defines["USE_EXACT_SRGB_CONVERSIONS"] = "";
        } else {
            delete defines["USE_EXACT_SRGB_CONVERSIONS"];
        }
        return;
    } else {
        let s = "";
        if (isNDCHalfZRange) {
            s += "#define IS_NDC_HALF_ZRANGE";
        }
        if (useReverseDepthBuffer) {
            if (s) {
                s += "\n";
            }
            s += "#define USE_REVERSE_DEPTHBUFFER";
        }
        if (useExactSrgbConversions) {
            if (s) {
                s += "\n";
            }
            s += "#define USE_EXACT_SRGB_CONVERSIONS";
        }
        return s;
    }
}
function allocateAndCopyTypedBuffer(type, sizeOrDstBuffer, sizeInBytes = false, copyBuffer) {
    switch(type){
        case 3:
            {
                const buffer = sizeOrDstBuffer instanceof ArrayBuffer ? new Int8Array(sizeOrDstBuffer) : new Int8Array(sizeOrDstBuffer);
                if (copyBuffer) {
                    buffer.set(new Int8Array(copyBuffer));
                }
                return buffer;
            }
        case 0:
            {
                const buffer = sizeOrDstBuffer instanceof ArrayBuffer ? new Uint8Array(sizeOrDstBuffer) : new Uint8Array(sizeOrDstBuffer);
                if (copyBuffer) {
                    buffer.set(new Uint8Array(copyBuffer));
                }
                return buffer;
            }
        case 4:
            {
                const buffer = sizeOrDstBuffer instanceof ArrayBuffer ? new Int16Array(sizeOrDstBuffer) : new Int16Array(sizeInBytes ? sizeOrDstBuffer / 2 : sizeOrDstBuffer);
                if (copyBuffer) {
                    buffer.set(new Int16Array(copyBuffer));
                }
                return buffer;
            }
        case 5:
        case 8:
        case 9:
        case 10:
        case 2:
            {
                const buffer = sizeOrDstBuffer instanceof ArrayBuffer ? new Uint16Array(sizeOrDstBuffer) : new Uint16Array(sizeInBytes ? sizeOrDstBuffer / 2 : sizeOrDstBuffer);
                if (copyBuffer) {
                    buffer.set(new Uint16Array(copyBuffer));
                }
                return buffer;
            }
        case 6:
            {
                const buffer = sizeOrDstBuffer instanceof ArrayBuffer ? new Int32Array(sizeOrDstBuffer) : new Int32Array(sizeInBytes ? sizeOrDstBuffer / 4 : sizeOrDstBuffer);
                if (copyBuffer) {
                    buffer.set(new Int32Array(copyBuffer));
                }
                return buffer;
            }
        case 7:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
            {
                const buffer = sizeOrDstBuffer instanceof ArrayBuffer ? new Uint32Array(sizeOrDstBuffer) : new Uint32Array(sizeInBytes ? sizeOrDstBuffer / 4 : sizeOrDstBuffer);
                if (copyBuffer) {
                    buffer.set(new Uint32Array(copyBuffer));
                }
                return buffer;
            }
        case 1:
            {
                const buffer = sizeOrDstBuffer instanceof ArrayBuffer ? new Float32Array(sizeOrDstBuffer) : new Float32Array(sizeInBytes ? sizeOrDstBuffer / 4 : sizeOrDstBuffer);
                if (copyBuffer) {
                    buffer.set(new Float32Array(copyBuffer));
                }
                return buffer;
            }
    }
    const buffer = sizeOrDstBuffer instanceof ArrayBuffer ? new Uint8Array(sizeOrDstBuffer) : new Uint8Array(sizeOrDstBuffer);
    if (copyBuffer) {
        buffer.set(new Uint8Array(copyBuffer));
    }
    return buffer;
} //# sourceMappingURL=abstractEngine.functions.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Defines the shader related stores and directory
 */ __turbopack_context__.s([
    "ShaderStore",
    ()=>ShaderStore
]);
class ShaderStore {
    /**
     * Gets the shaders repository path for a given shader language
     * @param shaderLanguage the shader language
     * @returns the path to the shaders repository
     */ static GetShadersRepository(shaderLanguage = 0 /* ShaderLanguage.GLSL */ ) {
        return shaderLanguage === 0 /* ShaderLanguage.GLSL */  ? ShaderStore.ShadersRepository : ShaderStore.ShadersRepositoryWGSL;
    }
    /**
     * Gets the shaders store of a given shader language
     * @param shaderLanguage the shader language
     * @returns the shaders store
     */ static GetShadersStore(shaderLanguage = 0 /* ShaderLanguage.GLSL */ ) {
        return shaderLanguage === 0 /* ShaderLanguage.GLSL */  ? ShaderStore.ShadersStore : ShaderStore.ShadersStoreWGSL;
    }
    /**
     * Gets the include shaders store of a given shader language
     * @param shaderLanguage the shader language
     * @returns the include shaders store
     */ static GetIncludesShadersStore(shaderLanguage = 0 /* ShaderLanguage.GLSL */ ) {
        return shaderLanguage === 0 /* ShaderLanguage.GLSL */  ? ShaderStore.IncludesShadersStore : ShaderStore.IncludesShadersStoreWGSL;
    }
}
/**
 * Gets or sets the relative url used to load shaders if using the engine in non-minified mode
 */ ShaderStore.ShadersRepository = "src/Shaders/";
/**
 * Store of each shader (The can be looked up using effect.key)
 */ ShaderStore.ShadersStore = {};
/**
 * Store of each included file for a shader (The can be looked up using effect.key)
 */ ShaderStore.IncludesShadersStore = {};
/**
 * Gets or sets the relative url used to load shaders (WGSL) if using the engine in non-minified mode
 */ ShaderStore.ShadersRepositoryWGSL = "src/ShadersWGSL/";
/**
 * Store of each shader  (WGSL)
 */ ShaderStore.ShadersStoreWGSL = {};
/**
 * Store of each included file for a shader (WGSL)
 */ ShaderStore.IncludesShadersStoreWGSL = {}; //# sourceMappingURL=shaderStore.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGL/webGLPipelineContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** @internal */ __turbopack_context__.s([
    "WebGLPipelineContext",
    ()=>WebGLPipelineContext
]);
class WebGLPipelineContext {
    constructor(){
        this._valueCache = {};
        this.vertexCompilationError = null;
        this.fragmentCompilationError = null;
        this.programLinkError = null;
        this.programValidationError = null;
        /** @internal */ this._isDisposed = false;
    }
    // eslint-disable-next-line no-restricted-syntax
    get isAsync() {
        return this.isParallelCompiled;
    }
    get isReady() {
        if (this.program) {
            if (this.isParallelCompiled) {
                return this.engine._isRenderingStateCompiled(this);
            }
            return true;
        }
        return false;
    }
    _handlesSpectorRebuildCallback(onCompiled) {
        if (onCompiled && this.program) {
            onCompiled(this.program);
        }
    }
    setEngine(engine) {
        this.engine = engine;
    }
    _fillEffectInformation(effect, uniformBuffersNames, uniformsNames, uniforms, samplerList, samplers, attributesNames, attributes) {
        const engine = this.engine;
        if (engine.supportsUniformBuffers) {
            for(const name in uniformBuffersNames){
                effect.bindUniformBlock(name, uniformBuffersNames[name]);
            }
        }
        const effectAvailableUniforms = this.engine.getUniforms(this, uniformsNames);
        effectAvailableUniforms.forEach((uniform, index)=>{
            uniforms[uniformsNames[index]] = uniform;
        });
        this._uniforms = uniforms;
        let index;
        for(index = 0; index < samplerList.length; index++){
            const sampler = effect.getUniform(samplerList[index]);
            if (sampler == null) {
                samplerList.splice(index, 1);
                index--;
            }
        }
        samplerList.forEach((name, index)=>{
            samplers[name] = index;
        });
        for (const attr of engine.getAttributes(this, attributesNames)){
            attributes.push(attr);
        }
    }
    /**
     * Release all associated resources.
     **/ dispose() {
        this._uniforms = {};
        this._isDisposed = true;
    }
    /**
     * @internal
     */ _cacheMatrix(uniformName, matrix) {
        const cache = this._valueCache[uniformName];
        const flag = matrix.updateFlag;
        if (cache !== undefined && cache === flag) {
            return false;
        }
        this._valueCache[uniformName] = flag;
        return true;
    }
    /**
     * @internal
     */ _cacheFloat2(uniformName, x, y) {
        let cache = this._valueCache[uniformName];
        if (!cache || cache.length !== 2) {
            cache = [
                x,
                y
            ];
            this._valueCache[uniformName] = cache;
            return true;
        }
        let changed = false;
        if (cache[0] !== x) {
            cache[0] = x;
            changed = true;
        }
        if (cache[1] !== y) {
            cache[1] = y;
            changed = true;
        }
        return changed;
    }
    /**
     * @internal
     */ _cacheFloat3(uniformName, x, y, z) {
        let cache = this._valueCache[uniformName];
        if (!cache || cache.length !== 3) {
            cache = [
                x,
                y,
                z
            ];
            this._valueCache[uniformName] = cache;
            return true;
        }
        let changed = false;
        if (cache[0] !== x) {
            cache[0] = x;
            changed = true;
        }
        if (cache[1] !== y) {
            cache[1] = y;
            changed = true;
        }
        if (cache[2] !== z) {
            cache[2] = z;
            changed = true;
        }
        return changed;
    }
    /**
     * @internal
     */ _cacheFloat4(uniformName, x, y, z, w) {
        let cache = this._valueCache[uniformName];
        if (!cache || cache.length !== 4) {
            cache = [
                x,
                y,
                z,
                w
            ];
            this._valueCache[uniformName] = cache;
            return true;
        }
        let changed = false;
        if (cache[0] !== x) {
            cache[0] = x;
            changed = true;
        }
        if (cache[1] !== y) {
            cache[1] = y;
            changed = true;
        }
        if (cache[2] !== z) {
            cache[2] = z;
            changed = true;
        }
        if (cache[3] !== w) {
            cache[3] = w;
            changed = true;
        }
        return changed;
    }
    /**
     * Sets an integer value on a uniform variable.
     * @param uniformName Name of the variable.
     * @param value Value to be set.
     */ setInt(uniformName, value) {
        const cache = this._valueCache[uniformName];
        if (cache !== undefined && cache === value) {
            return;
        }
        if (this.engine.setInt(this._uniforms[uniformName], value)) {
            this._valueCache[uniformName] = value;
        }
    }
    /**
     * Sets a int2 on a uniform variable.
     * @param uniformName Name of the variable.
     * @param x First int in int2.
     * @param y Second int in int2.
     */ setInt2(uniformName, x, y) {
        if (this._cacheFloat2(uniformName, x, y)) {
            if (!this.engine.setInt2(this._uniforms[uniformName], x, y)) {
                this._valueCache[uniformName] = null;
            }
        }
    }
    /**
     * Sets a int3 on a uniform variable.
     * @param uniformName Name of the variable.
     * @param x First int in int3.
     * @param y Second int in int3.
     * @param z Third int in int3.
     */ setInt3(uniformName, x, y, z) {
        if (this._cacheFloat3(uniformName, x, y, z)) {
            if (!this.engine.setInt3(this._uniforms[uniformName], x, y, z)) {
                this._valueCache[uniformName] = null;
            }
        }
    }
    /**
     * Sets a int4 on a uniform variable.
     * @param uniformName Name of the variable.
     * @param x First int in int4.
     * @param y Second int in int4.
     * @param z Third int in int4.
     * @param w Fourth int in int4.
     */ setInt4(uniformName, x, y, z, w) {
        if (this._cacheFloat4(uniformName, x, y, z, w)) {
            if (!this.engine.setInt4(this._uniforms[uniformName], x, y, z, w)) {
                this._valueCache[uniformName] = null;
            }
        }
    }
    /**
     * Sets an int array on a uniform variable.
     * @param uniformName Name of the variable.
     * @param array array to be set.
     */ setIntArray(uniformName, array) {
        this._valueCache[uniformName] = null;
        this.engine.setIntArray(this._uniforms[uniformName], array);
    }
    /**
     * Sets an int array 2 on a uniform variable. (Array is specified as single array eg. [1,2,3,4] will result in [[1,2],[3,4]] in the shader)
     * @param uniformName Name of the variable.
     * @param array array to be set.
     */ setIntArray2(uniformName, array) {
        this._valueCache[uniformName] = null;
        this.engine.setIntArray2(this._uniforms[uniformName], array);
    }
    /**
     * Sets an int array 3 on a uniform variable. (Array is specified as single array eg. [1,2,3,4,5,6] will result in [[1,2,3],[4,5,6]] in the shader)
     * @param uniformName Name of the variable.
     * @param array array to be set.
     */ setIntArray3(uniformName, array) {
        this._valueCache[uniformName] = null;
        this.engine.setIntArray3(this._uniforms[uniformName], array);
    }
    /**
     * Sets an int array 4 on a uniform variable. (Array is specified as single array eg. [1,2,3,4,5,6,7,8] will result in [[1,2,3,4],[5,6,7,8]] in the shader)
     * @param uniformName Name of the variable.
     * @param array array to be set.
     */ setIntArray4(uniformName, array) {
        this._valueCache[uniformName] = null;
        this.engine.setIntArray4(this._uniforms[uniformName], array);
    }
    /**
     * Sets an unsigned integer value on a uniform variable.
     * @param uniformName Name of the variable.
     * @param value Value to be set.
     */ setUInt(uniformName, value) {
        const cache = this._valueCache[uniformName];
        if (cache !== undefined && cache === value) {
            return;
        }
        if (this.engine.setUInt(this._uniforms[uniformName], value)) {
            this._valueCache[uniformName] = value;
        }
    }
    /**
     * Sets an unsigned int2 value on a uniform variable.
     * @param uniformName Name of the variable.
     * @param x First unsigned int in uint2.
     * @param y Second unsigned int in uint2.
     */ setUInt2(uniformName, x, y) {
        if (this._cacheFloat2(uniformName, x, y)) {
            if (!this.engine.setUInt2(this._uniforms[uniformName], x, y)) {
                this._valueCache[uniformName] = null;
            }
        }
    }
    /**
     * Sets an unsigned int3 value on a uniform variable.
     * @param uniformName Name of the variable.
     * @param x First unsigned int in uint3.
     * @param y Second unsigned int in uint3.
     * @param z Third unsigned int in uint3.
     */ setUInt3(uniformName, x, y, z) {
        if (this._cacheFloat3(uniformName, x, y, z)) {
            if (!this.engine.setUInt3(this._uniforms[uniformName], x, y, z)) {
                this._valueCache[uniformName] = null;
            }
        }
    }
    /**
     * Sets an unsigned int4 value on a uniform variable.
     * @param uniformName Name of the variable.
     * @param x First unsigned int in uint4.
     * @param y Second unsigned int in uint4.
     * @param z Third unsigned int in uint4.
     * @param w Fourth unsigned int in uint4.
     */ setUInt4(uniformName, x, y, z, w) {
        if (this._cacheFloat4(uniformName, x, y, z, w)) {
            if (!this.engine.setUInt4(this._uniforms[uniformName], x, y, z, w)) {
                this._valueCache[uniformName] = null;
            }
        }
    }
    /**
     * Sets an unsigned int array on a uniform variable.
     * @param uniformName Name of the variable.
     * @param array array to be set.
     */ setUIntArray(uniformName, array) {
        this._valueCache[uniformName] = null;
        this.engine.setUIntArray(this._uniforms[uniformName], array);
    }
    /**
     * Sets an unsigned int array 2 on a uniform variable. (Array is specified as single array eg. [1,2,3,4] will result in [[1,2],[3,4]] in the shader)
     * @param uniformName Name of the variable.
     * @param array array to be set.
     */ setUIntArray2(uniformName, array) {
        this._valueCache[uniformName] = null;
        this.engine.setUIntArray2(this._uniforms[uniformName], array);
    }
    /**
     * Sets an unsigned int array 3 on a uniform variable. (Array is specified as single array eg. [1,2,3,4,5,6] will result in [[1,2,3],[4,5,6]] in the shader)
     * @param uniformName Name of the variable.
     * @param array array to be set.
     */ setUIntArray3(uniformName, array) {
        this._valueCache[uniformName] = null;
        this.engine.setUIntArray3(this._uniforms[uniformName], array);
    }
    /**
     * Sets an unsigned int array 4 on a uniform variable. (Array is specified as single array eg. [1,2,3,4,5,6,7,8] will result in [[1,2,3,4],[5,6,7,8]] in the shader)
     * @param uniformName Name of the variable.
     * @param array array to be set.
     */ setUIntArray4(uniformName, array) {
        this._valueCache[uniformName] = null;
        this.engine.setUIntArray4(this._uniforms[uniformName], array);
    }
    /**
     * Sets an array on a uniform variable.
     * @param uniformName Name of the variable.
     * @param array array to be set.
     */ setArray(uniformName, array) {
        this._valueCache[uniformName] = null;
        this.engine.setArray(this._uniforms[uniformName], array);
    }
    /**
     * Sets an array 2 on a uniform variable. (Array is specified as single array eg. [1,2,3,4] will result in [[1,2],[3,4]] in the shader)
     * @param uniformName Name of the variable.
     * @param array array to be set.
     */ setArray2(uniformName, array) {
        this._valueCache[uniformName] = null;
        this.engine.setArray2(this._uniforms[uniformName], array);
    }
    /**
     * Sets an array 3 on a uniform variable. (Array is specified as single array eg. [1,2,3,4,5,6] will result in [[1,2,3],[4,5,6]] in the shader)
     * @param uniformName Name of the variable.
     * @param array array to be set.
     */ setArray3(uniformName, array) {
        this._valueCache[uniformName] = null;
        this.engine.setArray3(this._uniforms[uniformName], array);
    }
    /**
     * Sets an array 4 on a uniform variable. (Array is specified as single array eg. [1,2,3,4,5,6,7,8] will result in [[1,2,3,4],[5,6,7,8]] in the shader)
     * @param uniformName Name of the variable.
     * @param array array to be set.
     */ setArray4(uniformName, array) {
        this._valueCache[uniformName] = null;
        this.engine.setArray4(this._uniforms[uniformName], array);
    }
    /**
     * Sets matrices on a uniform variable.
     * @param uniformName Name of the variable.
     * @param matrices matrices to be set.
     */ setMatrices(uniformName, matrices) {
        if (!matrices) {
            return;
        }
        this._valueCache[uniformName] = null;
        this.engine.setMatrices(this._uniforms[uniformName], matrices);
    }
    /**
     * Sets matrix on a uniform variable.
     * @param uniformName Name of the variable.
     * @param matrix matrix to be set.
     */ setMatrix(uniformName, matrix) {
        if (this._cacheMatrix(uniformName, matrix)) {
            if (!this.engine.setMatrices(this._uniforms[uniformName], matrix.asArray())) {
                this._valueCache[uniformName] = null;
            }
        }
    }
    /**
     * Sets a 3x3 matrix on a uniform variable. (Specified as [1,2,3,4,5,6,7,8,9] will result in [1,2,3][4,5,6][7,8,9] matrix)
     * @param uniformName Name of the variable.
     * @param matrix matrix to be set.
     */ setMatrix3x3(uniformName, matrix) {
        this._valueCache[uniformName] = null;
        this.engine.setMatrix3x3(this._uniforms[uniformName], matrix);
    }
    /**
     * Sets a 2x2 matrix on a uniform variable. (Specified as [1,2,3,4] will result in [1,2][3,4] matrix)
     * @param uniformName Name of the variable.
     * @param matrix matrix to be set.
     */ setMatrix2x2(uniformName, matrix) {
        this._valueCache[uniformName] = null;
        this.engine.setMatrix2x2(this._uniforms[uniformName], matrix);
    }
    /**
     * Sets a float on a uniform variable.
     * @param uniformName Name of the variable.
     * @param value value to be set.
     */ setFloat(uniformName, value) {
        const cache = this._valueCache[uniformName];
        if (cache !== undefined && cache === value) {
            return;
        }
        if (this.engine.setFloat(this._uniforms[uniformName], value)) {
            this._valueCache[uniformName] = value;
        }
    }
    /**
     * Sets a Vector2 on a uniform variable.
     * @param uniformName Name of the variable.
     * @param vector2 vector2 to be set.
     */ setVector2(uniformName, vector2) {
        if (this._cacheFloat2(uniformName, vector2.x, vector2.y)) {
            if (!this.engine.setFloat2(this._uniforms[uniformName], vector2.x, vector2.y)) {
                this._valueCache[uniformName] = null;
            }
        }
    }
    /**
     * Sets a float2 on a uniform variable.
     * @param uniformName Name of the variable.
     * @param x First float in float2.
     * @param y Second float in float2.
     */ setFloat2(uniformName, x, y) {
        if (this._cacheFloat2(uniformName, x, y)) {
            if (!this.engine.setFloat2(this._uniforms[uniformName], x, y)) {
                this._valueCache[uniformName] = null;
            }
        }
    }
    /**
     * Sets a Vector3 on a uniform variable.
     * @param uniformName Name of the variable.
     * @param vector3 Value to be set.
     */ setVector3(uniformName, vector3) {
        if (this._cacheFloat3(uniformName, vector3.x, vector3.y, vector3.z)) {
            if (!this.engine.setFloat3(this._uniforms[uniformName], vector3.x, vector3.y, vector3.z)) {
                this._valueCache[uniformName] = null;
            }
        }
    }
    /**
     * Sets a float3 on a uniform variable.
     * @param uniformName Name of the variable.
     * @param x First float in float3.
     * @param y Second float in float3.
     * @param z Third float in float3.
     */ setFloat3(uniformName, x, y, z) {
        if (this._cacheFloat3(uniformName, x, y, z)) {
            if (!this.engine.setFloat3(this._uniforms[uniformName], x, y, z)) {
                this._valueCache[uniformName] = null;
            }
        }
    }
    /**
     * Sets a Vector4 on a uniform variable.
     * @param uniformName Name of the variable.
     * @param vector4 Value to be set.
     */ setVector4(uniformName, vector4) {
        if (this._cacheFloat4(uniformName, vector4.x, vector4.y, vector4.z, vector4.w)) {
            if (!this.engine.setFloat4(this._uniforms[uniformName], vector4.x, vector4.y, vector4.z, vector4.w)) {
                this._valueCache[uniformName] = null;
            }
        }
    }
    /**
     * Sets a Quaternion on a uniform variable.
     * @param uniformName Name of the variable.
     * @param quaternion Value to be set.
     */ setQuaternion(uniformName, quaternion) {
        if (this._cacheFloat4(uniformName, quaternion.x, quaternion.y, quaternion.z, quaternion.w)) {
            if (!this.engine.setFloat4(this._uniforms[uniformName], quaternion.x, quaternion.y, quaternion.z, quaternion.w)) {
                this._valueCache[uniformName] = null;
            }
        }
    }
    /**
     * Sets a float4 on a uniform variable.
     * @param uniformName Name of the variable.
     * @param x First float in float4.
     * @param y Second float in float4.
     * @param z Third float in float4.
     * @param w Fourth float in float4.
     */ setFloat4(uniformName, x, y, z, w) {
        if (this._cacheFloat4(uniformName, x, y, z, w)) {
            if (!this.engine.setFloat4(this._uniforms[uniformName], x, y, z, w)) {
                this._valueCache[uniformName] = null;
            }
        }
    }
    /**
     * Sets a Color3 on a uniform variable.
     * @param uniformName Name of the variable.
     * @param color3 Value to be set.
     */ setColor3(uniformName, color3) {
        if (this._cacheFloat3(uniformName, color3.r, color3.g, color3.b)) {
            if (!this.engine.setFloat3(this._uniforms[uniformName], color3.r, color3.g, color3.b)) {
                this._valueCache[uniformName] = null;
            }
        }
    }
    /**
     * Sets a Color4 on a uniform variable.
     * @param uniformName Name of the variable.
     * @param color3 Value to be set.
     * @param alpha Alpha value to be set.
     */ setColor4(uniformName, color3, alpha) {
        if (this._cacheFloat4(uniformName, color3.r, color3.g, color3.b, alpha)) {
            if (!this.engine.setFloat4(this._uniforms[uniformName], color3.r, color3.g, color3.b, alpha)) {
                this._valueCache[uniformName] = null;
            }
        }
    }
    /**
     * Sets a Color4 on a uniform variable
     * @param uniformName defines the name of the variable
     * @param color4 defines the value to be set
     */ setDirectColor4(uniformName, color4) {
        if (this._cacheFloat4(uniformName, color4.r, color4.g, color4.b, color4.a)) {
            if (!this.engine.setFloat4(this._uniforms[uniformName], color4.r, color4.g, color4.b, color4.a)) {
                this._valueCache[uniformName] = null;
            }
        }
    }
    _getVertexShaderCode() {
        return this.vertexShader ? this.engine._getShaderSource(this.vertexShader) : null;
    }
    _getFragmentShaderCode() {
        return this.fragmentShader ? this.engine._getShaderSource(this.fragmentShader) : null;
    }
} //# sourceMappingURL=webGLPipelineContext.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGL/webGLShaderProcessors.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** @internal */ __turbopack_context__.s([
    "WebGLShaderProcessor",
    ()=>WebGLShaderProcessor
]);
class WebGLShaderProcessor {
    constructor(){
        this.shaderLanguage = 0 /* ShaderLanguage.GLSL */ ;
    }
    postProcessor(code, defines, isFragment, processingContext, parameters) {
        // Remove extensions
        if (parameters.drawBuffersExtensionDisabled) {
            // even if enclosed in #if/#endif, IE11 does parse the #extension declaration, so we need to remove it altogether
            const regex = /#extension.+GL_EXT_draw_buffers.+(enable|require)/g;
            code = code.replace(regex, "");
        }
        return code;
    }
} //# sourceMappingURL=webGLShaderProcessors.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGL/webGL2ShaderProcessors.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WebGL2ShaderProcessor",
    ()=>WebGL2ShaderProcessor
]);
const VaryingRegex = /(flat\s)?\s*varying\s*.*/;
class WebGL2ShaderProcessor {
    constructor(){
        this.shaderLanguage = 0 /* ShaderLanguage.GLSL */ ;
    }
    attributeProcessor(attribute) {
        return attribute.replace("attribute", "in");
    }
    varyingCheck(varying, _isFragment) {
        return VaryingRegex.test(varying);
    }
    varyingProcessor(varying, isFragment) {
        return varying.replace("varying", isFragment ? "in" : "out");
    }
    postProcessor(code, defines, isFragment) {
        const hasDrawBuffersExtension = code.search(/#extension.+GL_EXT_draw_buffers.+require/) !== -1;
        // Remove extensions
        const regex = /#extension.+(GL_OVR_multiview2|GL_OES_standard_derivatives|GL_EXT_shader_texture_lod|GL_EXT_frag_depth|GL_EXT_draw_buffers).+(enable|require)/g;
        code = code.replace(regex, "");
        // Replace instructions
        code = code.replace(/texture2D\s*\(/g, "texture(");
        if (isFragment) {
            const hasOutput = code.search(/layout *\(location *= *0\) *out/g) !== -1;
            const hasDualSourceBlending = defines.indexOf("#define DUAL_SOURCE_BLENDING") !== -1;
            const outputDeclaration = hasDualSourceBlending ? "layout(location = 0, index = 0) out vec4 glFragColor;\nlayout(location = 0, index = 1) out vec4 glFragColor2;\n" : "layout(location = 0) out vec4 glFragColor;\n";
            if (hasDualSourceBlending) {
                code = "#extension GL_EXT_blend_func_extended : require\n" + code;
            }
            code = code.replace(/texture2DLodEXT\s*\(/g, "textureLod(");
            code = code.replace(/textureCubeLodEXT\s*\(/g, "textureLod(");
            code = code.replace(/textureCube\s*\(/g, "texture(");
            code = code.replace(/gl_FragDepthEXT/g, "gl_FragDepth");
            code = code.replace(/gl_FragColor/g, "glFragColor");
            code = code.replace(/gl_FragData/g, "glFragData");
            code = code.replace(/void\s+?main\s*\(/g, (hasDrawBuffersExtension || hasOutput ? "" : outputDeclaration) + "void main(");
        } else {
            if (defines.indexOf("#define VERTEXOUTPUT_INVARIANT") >= 0) {
                code = "invariant gl_Position;\n" + code;
            }
            const hasMultiviewExtension = defines.indexOf("#define MULTIVIEW") !== -1;
            if (hasMultiviewExtension) {
                return "#extension GL_OVR_multiview2 : require\nlayout (num_views = 2) in;\n" + code;
            }
        }
        return code;
    }
} //# sourceMappingURL=webGL2ShaderProcessors.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGL/webGLHardwareTexture.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** @internal */ __turbopack_context__.s([
    "WebGLHardwareTexture",
    ()=>WebGLHardwareTexture
]);
class WebGLHardwareTexture {
    get underlyingResource() {
        return this._webGLTexture;
    }
    constructor(existingTexture = null, context){
        // There can be multiple buffers for a single WebGL texture because different layers of a 2DArrayTexture / 3DTexture
        // or different faces of a cube texture can be bound to different render targets at the same time.
        // eslint-disable-next-line @typescript-eslint/naming-convention
        this._MSAARenderBuffers = null;
        this._context = context;
        if (!existingTexture) {
            existingTexture = context.createTexture();
            if (!existingTexture) {
                throw new Error("Unable to create webGL texture");
            }
        }
        this.set(existingTexture);
    }
    setUsage() {}
    set(hardwareTexture) {
        this._webGLTexture = hardwareTexture;
    }
    reset() {
        this._webGLTexture = null;
        this._MSAARenderBuffers = null;
    }
    addMSAARenderBuffer(buffer) {
        if (!this._MSAARenderBuffers) {
            this._MSAARenderBuffers = [];
        }
        this._MSAARenderBuffers.push(buffer);
    }
    releaseMSAARenderBuffers() {
        if (this._MSAARenderBuffers) {
            for (const buffer of this._MSAARenderBuffers){
                this._context.deleteRenderbuffer(buffer);
            }
            this._MSAARenderBuffers = null;
        }
    }
    getMSAARenderBuffer(index = 0) {
        return this._MSAARenderBuffers?.[index] ?? null;
    }
    release() {
        this.releaseMSAARenderBuffers();
        if (this._webGLTexture) {
            this._context.deleteTexture(this._webGLTexture);
        }
        this.reset();
    }
} //# sourceMappingURL=webGLHardwareTexture.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGL/webGLRenderTargetWrapper.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WebGLRenderTargetWrapper",
    ()=>WebGLRenderTargetWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$renderTargetWrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/renderTargetWrapper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$textureHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/textureHelper.functions.js [app-ssr] (ecmascript)");
;
;
class WebGLRenderTargetWrapper extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$renderTargetWrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RenderTargetWrapper"] {
    setDepthStencilTexture(texture, disposeExisting = true) {
        super.setDepthStencilTexture(texture, disposeExisting);
        if (!texture) {
            return;
        }
        const engine = this._engine;
        const gl = this._context;
        const hardwareTexture = texture._hardwareTexture;
        if (hardwareTexture && texture._autoMSAAManagement && this._MSAAFramebuffer) {
            const currentFb = engine._currentFramebuffer;
            engine._bindUnboundFramebuffer(this._MSAAFramebuffer);
            gl.framebufferRenderbuffer(gl.FRAMEBUFFER, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$textureHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HasStencilAspect"])(texture.format) ? gl.DEPTH_STENCIL_ATTACHMENT : gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, hardwareTexture.getMSAARenderBuffer());
            engine._bindUnboundFramebuffer(currentFb);
        }
    }
    constructor(isMulti, isCube, size, engine, context){
        super(isMulti, isCube, size, engine);
        /**
         * @internal
         */ this._framebuffer = null;
        /**
         * @internal
         */ this._depthStencilBuffer = null;
        // eslint-disable-next-line @typescript-eslint/naming-convention
        /**
         * @internal
         */ // eslint-disable-next-line @typescript-eslint/naming-convention
        this._MSAAFramebuffer = null;
        // Multiview
        /**
         * @internal
         */ this._colorTextureArray = null;
        /**
         * @internal
         */ this._depthStencilTextureArray = null;
        /**
         * @internal
         */ this._disposeOnlyFramebuffers = false;
        /**
         * @internal
         */ this._currentLOD = 0;
        this._context = context;
    }
    _cloneRenderTargetWrapper() {
        let rtw = null;
        if (this._colorTextureArray && this._depthStencilTextureArray) {
            rtw = this._engine.createMultiviewRenderTargetTexture(this.width, this.height);
            rtw.texture.isReady = true;
        } else {
            rtw = super._cloneRenderTargetWrapper();
        }
        return rtw;
    }
    _swapRenderTargetWrapper(target) {
        super._swapRenderTargetWrapper(target);
        target._framebuffer = this._framebuffer;
        target._depthStencilBuffer = this._depthStencilBuffer;
        target._MSAAFramebuffer = this._MSAAFramebuffer;
        target._colorTextureArray = this._colorTextureArray;
        target._depthStencilTextureArray = this._depthStencilTextureArray;
        this._framebuffer = this._depthStencilBuffer = this._MSAAFramebuffer = this._colorTextureArray = this._depthStencilTextureArray = null;
    }
    /**
     * Creates the depth/stencil texture
     * @param comparisonFunction Comparison function to use for the texture
     * @param bilinearFiltering true if bilinear filtering should be used when sampling the texture
     * @param generateStencil true if the stencil aspect should also be created
     * @param samples sample count to use when creating the texture
     * @param format format of the depth texture
     * @param label defines the label to use for the texture (for debugging purpose only)
     * @returns the depth/stencil created texture
     */ createDepthStencilTexture(comparisonFunction = 0, bilinearFiltering = true, generateStencil = false, samples = 1, format = 14, label) {
        if (this._depthStencilBuffer) {
            const engine = this._engine;
            // Dispose previous depth/stencil render buffers and clear the corresponding attachment.
            // Next time this framebuffer is bound, the new depth/stencil texture will be attached.
            const currentFrameBuffer = engine._currentFramebuffer;
            const gl = this._context;
            engine._bindUnboundFramebuffer(this._framebuffer);
            gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_STENCIL_ATTACHMENT, gl.RENDERBUFFER, null);
            gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, null);
            gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.STENCIL_ATTACHMENT, gl.RENDERBUFFER, null);
            engine._bindUnboundFramebuffer(currentFrameBuffer);
            gl.deleteRenderbuffer(this._depthStencilBuffer);
            this._depthStencilBuffer = null;
        }
        return super.createDepthStencilTexture(comparisonFunction, bilinearFiltering, generateStencil, samples, format, label);
    }
    /**
     * Shares the depth buffer of this render target with another render target.
     * @param renderTarget Destination renderTarget
     */ shareDepth(renderTarget) {
        super.shareDepth(renderTarget);
        const gl = this._context;
        const depthbuffer = this._depthStencilBuffer;
        const framebuffer = renderTarget._MSAAFramebuffer || renderTarget._framebuffer;
        const engine = this._engine;
        if (renderTarget._depthStencilBuffer && renderTarget._depthStencilBuffer !== depthbuffer) {
            gl.deleteRenderbuffer(renderTarget._depthStencilBuffer);
        }
        renderTarget._depthStencilBuffer = depthbuffer;
        const attachment = renderTarget._generateStencilBuffer ? gl.DEPTH_STENCIL_ATTACHMENT : gl.DEPTH_ATTACHMENT;
        engine._bindUnboundFramebuffer(framebuffer);
        gl.framebufferRenderbuffer(gl.FRAMEBUFFER, attachment, gl.RENDERBUFFER, depthbuffer);
        engine._bindUnboundFramebuffer(null);
    }
    /**
     * Binds a texture to this render target on a specific attachment
     * @param texture The texture to bind to the framebuffer
     * @param attachmentIndex Index of the attachment
     * @param faceIndexOrLayer The face or layer of the texture to render to in case of cube texture or array texture
     * @param lodLevel defines the lod level to bind to the frame buffer
     */ _bindTextureRenderTarget(texture, attachmentIndex = 0, faceIndexOrLayer, lodLevel = 0) {
        const hardwareTexture = texture._hardwareTexture;
        if (!hardwareTexture) {
            return;
        }
        const framebuffer = this._framebuffer;
        const engine = this._engine;
        const currentFb = engine._currentFramebuffer;
        engine._bindUnboundFramebuffer(framebuffer);
        let attachment;
        if (engine.webGLVersion > 1) {
            const gl = this._context;
            attachment = gl["COLOR_ATTACHMENT" + attachmentIndex];
            if (texture.is2DArray || texture.is3D) {
                faceIndexOrLayer = faceIndexOrLayer ?? this.layerIndices?.[attachmentIndex] ?? 0;
                gl.framebufferTextureLayer(gl.FRAMEBUFFER, attachment, hardwareTexture.underlyingResource, lodLevel, faceIndexOrLayer);
            } else if (texture.isCube) {
                // if face index is not specified, try to query it from faceIndices
                // default is face 0
                faceIndexOrLayer = faceIndexOrLayer ?? this.faceIndices?.[attachmentIndex] ?? 0;
                gl.framebufferTexture2D(gl.FRAMEBUFFER, attachment, gl.TEXTURE_CUBE_MAP_POSITIVE_X + faceIndexOrLayer, hardwareTexture.underlyingResource, lodLevel);
            } else {
                gl.framebufferTexture2D(gl.FRAMEBUFFER, attachment, gl.TEXTURE_2D, hardwareTexture.underlyingResource, lodLevel);
            }
        } else {
            // Default behavior (WebGL)
            const gl = this._context;
            attachment = gl["COLOR_ATTACHMENT" + attachmentIndex + "_WEBGL"];
            const target = faceIndexOrLayer !== undefined ? gl.TEXTURE_CUBE_MAP_POSITIVE_X + faceIndexOrLayer : gl.TEXTURE_2D;
            gl.framebufferTexture2D(gl.FRAMEBUFFER, attachment, target, hardwareTexture.underlyingResource, lodLevel);
        }
        if (texture._autoMSAAManagement && this._MSAAFramebuffer) {
            const gl = this._context;
            engine._bindUnboundFramebuffer(this._MSAAFramebuffer);
            gl.framebufferRenderbuffer(gl.FRAMEBUFFER, attachment, gl.RENDERBUFFER, hardwareTexture.getMSAARenderBuffer());
        }
        engine._bindUnboundFramebuffer(currentFb);
    }
    /**
     * Set a texture in the textures array
     * @param texture the texture to set
     * @param index the index in the textures array to set
     * @param disposePrevious If this function should dispose the previous texture
     */ setTexture(texture, index = 0, disposePrevious = true) {
        super.setTexture(texture, index, disposePrevious);
        this._bindTextureRenderTarget(texture, index);
    }
    /**
     * Sets the layer and face indices of every render target texture
     * @param layers The layer of the texture to be set (make negative to not modify)
     * @param faces The face of the texture to be set (make negative to not modify)
     */ setLayerAndFaceIndices(layers, faces) {
        super.setLayerAndFaceIndices(layers, faces);
        if (!this.textures || !this.layerIndices || !this.faceIndices) {
            return;
        }
        // the length of this._attachments is the right one as it does not count the depth texture, in case we generated it
        const textureCount = this._attachments?.length ?? this.textures.length;
        for(let index = 0; index < textureCount; index++){
            const texture = this.textures[index];
            if (!texture) {
                continue;
            }
            if (texture.is2DArray || texture.is3D) {
                this._bindTextureRenderTarget(texture, index, this.layerIndices[index]);
            } else if (texture.isCube) {
                this._bindTextureRenderTarget(texture, index, this.faceIndices[index]);
            } else {
                this._bindTextureRenderTarget(texture, index);
            }
        }
    }
    /**
     * Set the face and layer indices of a texture in the textures array
     * @param index The index of the texture in the textures array to modify
     * @param layer The layer of the texture to be set
     * @param face The face of the texture to be set
     */ setLayerAndFaceIndex(index = 0, layer, face) {
        super.setLayerAndFaceIndex(index, layer, face);
        if (!this.textures || !this.layerIndices || !this.faceIndices) {
            return;
        }
        const texture = this.textures[index];
        if (texture.is2DArray || texture.is3D) {
            this._bindTextureRenderTarget(this.textures[index], index, this.layerIndices[index]);
        } else if (texture.isCube) {
            this._bindTextureRenderTarget(this.textures[index], index, this.faceIndices[index]);
        }
    }
    resolveMSAATextures() {
        const engine = this._engine;
        const currentFramebuffer = engine._currentFramebuffer;
        engine._bindUnboundFramebuffer(this._MSAAFramebuffer);
        super.resolveMSAATextures();
        engine._bindUnboundFramebuffer(currentFramebuffer);
    }
    dispose(disposeOnlyFramebuffers = this._disposeOnlyFramebuffers) {
        const gl = this._context;
        if (!disposeOnlyFramebuffers) {
            if (this._colorTextureArray) {
                this._context.deleteTexture(this._colorTextureArray);
                this._colorTextureArray = null;
            }
            if (this._depthStencilTextureArray) {
                this._context.deleteTexture(this._depthStencilTextureArray);
                this._depthStencilTextureArray = null;
            }
        }
        if (this._framebuffer) {
            gl.deleteFramebuffer(this._framebuffer);
            this._framebuffer = null;
        }
        if (this._depthStencilBuffer) {
            gl.deleteRenderbuffer(this._depthStencilBuffer);
            this._depthStencilBuffer = null;
        }
        if (this._MSAAFramebuffer) {
            gl.deleteFramebuffer(this._MSAAFramebuffer);
            this._MSAAFramebuffer = null;
        }
        super.dispose(disposeOnlyFramebuffers);
    }
} //# sourceMappingURL=webGLRenderTargetWrapper.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/thinEngine.functions.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_createShaderProgram",
    ()=>_createShaderProgram,
    "_executeWhenRenderingStateIsCompiled",
    ()=>_executeWhenRenderingStateIsCompiled,
    "_finalizePipelineContext",
    ()=>_finalizePipelineContext,
    "_isRenderingStateCompiled",
    ()=>_isRenderingStateCompiled,
    "_preparePipelineContext",
    ()=>_preparePipelineContext,
    "_setProgram",
    ()=>_setProgram,
    "createPipelineContext",
    ()=>createPipelineContext,
    "createRawShaderProgram",
    ()=>createRawShaderProgram,
    "createShaderProgram",
    ()=>createShaderProgram,
    "deleteStateObject",
    ()=>deleteStateObject,
    "getStateObject",
    ()=>getStateObject
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGL$2f$webGLPipelineContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGL/webGLPipelineContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/abstractEngine.functions.js [app-ssr] (ecmascript)");
;
;
const StateObject = new WeakMap();
/**
 * This will be used in cases where the engine doesn't have a context (like the nullengine)
 */ const SingleStateObject = {
    _webGLVersion: 2,
    cachedPipelines: {}
};
function getStateObject(context) {
    let state = StateObject.get(context);
    if (!state) {
        if (!context) {
            return SingleStateObject;
        }
        state = {
            // use feature detection. instanceof returns false. This only exists on WebGL2 context
            _webGLVersion: context.TEXTURE_BINDING_3D ? 2 : 1,
            _context: context,
            // when using the function without an engine we need to set it to enable parallel compilation
            parallelShaderCompile: context.getExtension("KHR_parallel_shader_compile") || undefined,
            cachedPipelines: {}
        };
        StateObject.set(context, state);
    }
    return state;
}
function deleteStateObject(context) {
    StateObject.delete(context);
}
function createRawShaderProgram(pipelineContext, vertexCode, fragmentCode, context, transformFeedbackVaryings, _createShaderProgramInjection) {
    const stateObject = getStateObject(context);
    if (!_createShaderProgramInjection) {
        _createShaderProgramInjection = stateObject._createShaderProgramInjection ?? _createShaderProgram;
    }
    const vertexShader = CompileRawShader(vertexCode, "vertex", context, stateObject._contextWasLost);
    const fragmentShader = CompileRawShader(fragmentCode, "fragment", context, stateObject._contextWasLost);
    return _createShaderProgramInjection(pipelineContext, vertexShader, fragmentShader, context, transformFeedbackVaryings, stateObject.validateShaderPrograms);
}
function createShaderProgram(pipelineContext, vertexCode, fragmentCode, defines, context, transformFeedbackVaryings = null, _createShaderProgramInjection) {
    const stateObject = getStateObject(context);
    if (!_createShaderProgramInjection) {
        _createShaderProgramInjection = stateObject._createShaderProgramInjection ?? _createShaderProgram;
    }
    const shaderVersion = stateObject._webGLVersion > 1 ? "#version 300 es\n#define WEBGL2 \n" : "";
    const vertexShader = CompileShader(vertexCode, "vertex", defines, shaderVersion, context, stateObject._contextWasLost);
    const fragmentShader = CompileShader(fragmentCode, "fragment", defines, shaderVersion, context, stateObject._contextWasLost);
    return _createShaderProgramInjection(pipelineContext, vertexShader, fragmentShader, context, transformFeedbackVaryings, stateObject.validateShaderPrograms);
}
function createPipelineContext(context, _shaderProcessingContext) {
    const pipelineContext = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGL$2f$webGLPipelineContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebGLPipelineContext"]();
    const stateObject = getStateObject(context);
    if (stateObject.parallelShaderCompile && !stateObject.disableParallelShaderCompile) {
        pipelineContext.isParallelCompiled = true;
    }
    pipelineContext.context = stateObject._context;
    return pipelineContext;
}
function _createShaderProgram(pipelineContext, vertexShader, fragmentShader, context, _transformFeedbackVaryings = null, validateShaderPrograms) {
    const shaderProgram = context.createProgram();
    pipelineContext.program = shaderProgram;
    if (!shaderProgram) {
        throw new Error("Unable to create program");
    }
    context.attachShader(shaderProgram, vertexShader);
    context.attachShader(shaderProgram, fragmentShader);
    context.linkProgram(shaderProgram);
    pipelineContext.context = context;
    pipelineContext.vertexShader = vertexShader;
    pipelineContext.fragmentShader = fragmentShader;
    if (!pipelineContext.isParallelCompiled) {
        _finalizePipelineContext(pipelineContext, context, validateShaderPrograms);
    }
    return shaderProgram;
}
function _isRenderingStateCompiled(pipelineContext, gl, validateShaderPrograms) {
    const webGLPipelineContext = pipelineContext;
    if (webGLPipelineContext._isDisposed) {
        return false;
    }
    const stateObject = getStateObject(gl);
    if (stateObject && stateObject.parallelShaderCompile && stateObject.parallelShaderCompile.COMPLETION_STATUS_KHR && webGLPipelineContext.program) {
        if (gl.getProgramParameter(webGLPipelineContext.program, stateObject.parallelShaderCompile.COMPLETION_STATUS_KHR)) {
            _finalizePipelineContext(webGLPipelineContext, gl, validateShaderPrograms);
            return true;
        }
    }
    return false;
}
function _finalizePipelineContext(pipelineContext, gl, validateShaderPrograms) {
    const context = pipelineContext.context;
    const vertexShader = pipelineContext.vertexShader;
    const fragmentShader = pipelineContext.fragmentShader;
    const program = pipelineContext.program;
    const linked = context.getProgramParameter(program, context.LINK_STATUS);
    if (!linked) {
        // Get more info
        // Vertex
        if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
            const log = gl.getShaderInfoLog(vertexShader);
            if (log) {
                pipelineContext.vertexCompilationError = log;
                throw new Error("VERTEX SHADER " + log);
            }
        }
        // Fragment
        if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
            const log = gl.getShaderInfoLog(fragmentShader);
            if (log) {
                pipelineContext.fragmentCompilationError = log;
                throw new Error("FRAGMENT SHADER " + log);
            }
        }
        const error = context.getProgramInfoLog(program);
        if (error) {
            pipelineContext.programLinkError = error;
            throw new Error(error);
        }
    }
    if (/*this.*/ validateShaderPrograms) {
        context.validateProgram(program);
        const validated = context.getProgramParameter(program, context.VALIDATE_STATUS);
        if (!validated) {
            const error = context.getProgramInfoLog(program);
            if (error) {
                pipelineContext.programValidationError = error;
                throw new Error(error);
            }
        }
    }
    context.deleteShader(vertexShader);
    context.deleteShader(fragmentShader);
    pipelineContext.vertexShader = undefined;
    pipelineContext.fragmentShader = undefined;
    if (pipelineContext.onCompiled) {
        pipelineContext.onCompiled();
        pipelineContext.onCompiled = undefined;
    }
}
function _preparePipelineContext(pipelineContext, vertexSourceCode, fragmentSourceCode, createAsRaw, _rawVertexSourceCode, _rawFragmentSourceCode, rebuildRebind, defines, transformFeedbackVaryings, _key = "", onReady, createRawShaderProgramInjection, createShaderProgramInjection) {
    const stateObject = getStateObject(pipelineContext.context);
    if (!createRawShaderProgramInjection) {
        createRawShaderProgramInjection = stateObject.createRawShaderProgramInjection ?? createRawShaderProgram;
    }
    if (!createShaderProgramInjection) {
        createShaderProgramInjection = stateObject.createShaderProgramInjection ?? createShaderProgram;
    }
    const webGLRenderingState = pipelineContext;
    if (createAsRaw) {
        webGLRenderingState.program = createRawShaderProgramInjection(webGLRenderingState, vertexSourceCode, fragmentSourceCode, webGLRenderingState.context, transformFeedbackVaryings);
    } else {
        webGLRenderingState.program = createShaderProgramInjection(webGLRenderingState, vertexSourceCode, fragmentSourceCode, defines, webGLRenderingState.context, transformFeedbackVaryings);
    }
    webGLRenderingState.program.__SPECTOR_rebuildProgram = rebuildRebind;
    onReady();
}
function CompileShader(source, type, defines, shaderVersion, gl, _contextWasLost) {
    return CompileRawShader((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_ConcatenateShader"])(source, defines, shaderVersion), type, gl, _contextWasLost);
}
function CompileRawShader(source, type, gl, _contextWasLost) {
    const shader = gl.createShader(type === "vertex" ? gl.VERTEX_SHADER : gl.FRAGMENT_SHADER);
    if (!shader) {
        let error = gl.NO_ERROR;
        let tempError = gl.NO_ERROR;
        while((tempError = gl.getError()) !== gl.NO_ERROR){
            error = tempError;
        }
        throw new Error(`Something went wrong while creating a gl ${type} shader object. gl error=${error}, gl isContextLost=${gl.isContextLost()}, _contextWasLost=${_contextWasLost}`);
    }
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    return shader;
}
function _setProgram(program, gl) {
    gl.useProgram(program);
}
function _executeWhenRenderingStateIsCompiled(pipelineContext, action) {
    const webGLPipelineContext = pipelineContext;
    if (!webGLPipelineContext.isParallelCompiled) {
        action(pipelineContext);
        return;
    }
    const oldHandler = webGLPipelineContext.onCompiled;
    webGLPipelineContext.onCompiled = ()=>{
        oldHandler?.();
        action(pipelineContext);
    };
} //# sourceMappingURL=thinEngine.functions.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/abstractEngine.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AbstractEngine",
    ()=>AbstractEngine,
    "QueueNewFrame",
    ()=>QueueNewFrame
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/engineStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$effect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/effect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$performanceConfigurator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/performanceConfigurator.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$precisionDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/precisionDate.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$States$2f$depthCullingState$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/States/depthCullingState.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$States$2f$stencilStateComposer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/States/stencilStateComposer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$States$2f$stencilState$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/States/stencilState.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$States$2f$alphaCullingState$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/States/alphaCullingState.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$devTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/devTools.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$internalTexture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/internalTexture.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$domManagement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/domManagement.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/abstractEngine.functions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$textureLoaderManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Loaders/textureLoaderManager.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function QueueNewFrame(func, requester) {
    // Note that there is kind of a typing issue here, as `setTimeout` might return something else than a number (NodeJs returns a NodeJS.Timeout object).
    // Also if the global `requestAnimationFrame`'s returnType is number, `requester.requestPostAnimationFrame` and `requester.requestAnimationFrame` types
    // are `any`.
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$domManagement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IsWindowObjectExist"])()) {
        if (typeof requestAnimationFrame === "function") {
            return requestAnimationFrame(func);
        }
    } else {
        const { requestAnimationFrame: requestAnimationFrame1 } = requester || window;
        if (typeof requestAnimationFrame1 === "function") {
            return requestAnimationFrame1(func);
        }
    }
    // fallback to the global `setTimeout`.
    // In most cases (aka in the browser), `window` is the global object, so instead of calling `window.setTimeout` we could call the global `setTimeout`.
    return setTimeout(func, 16);
}
class AbstractEngine {
    /**
     * Gets the current frame id
     */ get frameId() {
        return this._frameId;
    }
    /**
     * Gets a boolean indicating if the engine runs in WebGPU or not.
     */ get isWebGPU() {
        return this._isWebGPU;
    }
    /**
     * @internal
     */ _getShaderProcessor(_shaderLanguage) {
        return this._shaderProcessor;
    }
    /**
     * @internal
     */ _resetAlphaMode() {
        this._alphaMode.fill(-1);
        this._alphaEquation.fill(-1);
    }
    /**
     * Gets the shader platform name used by the effects.
     */ get shaderPlatformName() {
        return this._shaderPlatformName;
    }
    _clearEmptyResources() {
        this._emptyTexture = null;
        this._emptyCubeTexture = null;
        this._emptyTexture3D = null;
        this._emptyTexture2DArray = null;
    }
    /**
     * Gets or sets a boolean indicating if depth buffer should be reverse, going from far to near.
     * This can provide greater z depth for distant objects.
     */ get useReverseDepthBuffer() {
        return this._useReverseDepthBuffer;
    }
    set useReverseDepthBuffer(useReverse) {
        if (useReverse === this._useReverseDepthBuffer) {
            return;
        }
        this._useReverseDepthBuffer = useReverse;
        if (useReverse) {
            this._depthCullingState.depthFunc = 518;
        } else {
            this._depthCullingState.depthFunc = 515;
        }
    }
    /**
     * Enable or disable color writing
     * @param enable defines the state to set
     */ setColorWrite(enable) {
        if (enable !== this._colorWrite) {
            this._colorWriteChanged = true;
            this._colorWrite = enable;
        }
    }
    /**
     * Gets a boolean indicating if color writing is enabled
     * @returns the current color writing state
     */ getColorWrite() {
        return this._colorWrite;
    }
    /**
     * Gets the depth culling state manager
     */ get depthCullingState() {
        return this._depthCullingState;
    }
    /**
     * Gets the alpha state manager
     */ get alphaState() {
        return this._alphaState;
    }
    /**
     * Gets the stencil state manager
     */ get stencilState() {
        return this._stencilState;
    }
    /**
     * Gets the stencil state composer
     */ get stencilStateComposer() {
        return this._stencilStateComposer;
    }
    /** @internal */ _getGlobalDefines(defines) {
        if (defines) {
            if (this.isNDCHalfZRange) {
                defines["IS_NDC_HALF_ZRANGE"] = "";
            } else {
                delete defines["IS_NDC_HALF_ZRANGE"];
            }
            if (this.useReverseDepthBuffer) {
                defines["USE_REVERSE_DEPTHBUFFER"] = "";
            } else {
                delete defines["USE_REVERSE_DEPTHBUFFER"];
            }
            if (this.useExactSrgbConversions) {
                defines["USE_EXACT_SRGB_CONVERSIONS"] = "";
            } else {
                delete defines["USE_EXACT_SRGB_CONVERSIONS"];
            }
            return;
        } else {
            let s = "";
            if (this.isNDCHalfZRange) {
                s += "#define IS_NDC_HALF_ZRANGE";
            }
            if (this.useReverseDepthBuffer) {
                if (s) {
                    s += "\n";
                }
                s += "#define USE_REVERSE_DEPTHBUFFER";
            }
            if (this.useExactSrgbConversions) {
                if (s) {
                    s += "\n";
                }
                s += "#define USE_EXACT_SRGB_CONVERSIONS";
            }
            return s;
        }
    }
    _rebuildInternalTextures() {
        const currentState = this._internalTexturesCache.slice(); // Do a copy because the rebuild will add proxies
        for (const internalTexture of currentState){
            internalTexture._rebuild();
        }
    }
    _rebuildRenderTargetWrappers() {
        const currentState = this._renderTargetWrapperCache.slice(); // Do a copy because the rebuild will add proxies
        for (const renderTargetWrapper of currentState){
            renderTargetWrapper._rebuild();
        }
    }
    _rebuildEffects() {
        for(const key in this._compiledEffects){
            const effect = this._compiledEffects[key];
            effect._pipelineContext = null; // because _prepareEffect will try to dispose this pipeline before recreating it and that would lead to webgl errors
            effect._prepareEffect();
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$effect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Effect"].ResetCache();
    }
    _rebuildGraphicsResources() {
        // Ensure webgl and engine states are matching
        this.wipeCaches(true);
        // Rebuild effects
        this._rebuildEffects();
        this._rebuildComputeEffects?.();
        // Note:
        //  The call to _rebuildBuffers must be made before the call to _rebuildInternalTextures because in the process of _rebuildBuffers the buffers used by the post process managers will be rebuilt
        //  and we may need to use the post process manager of the scene during _rebuildInternalTextures (in WebGL1, non-POT textures are rescaled using a post process + post process manager of the scene)
        // Rebuild buffers
        this._rebuildBuffers();
        // Rebuild textures
        this._rebuildInternalTextures();
        // Rebuild textures
        this._rebuildTextures();
        // Rebuild textures
        this._rebuildRenderTargetWrappers();
        // Reset engine states after all the buffer/textures/... have been rebuilt
        this.wipeCaches(true);
    }
    _flagContextRestored() {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn(this.name + " context successfully restored.");
        this.onContextRestoredObservable.notifyObservers(this);
        this._contextWasLost = false;
    }
    _restoreEngineAfterContextLost(initEngine) {
        // Adding a timeout to avoid race condition at browser level
        setTimeout(()=>{
            this._clearEmptyResources();
            const depthTest = this._depthCullingState.depthTest; // backup those values because the call to initEngine / wipeCaches will reset them
            const depthFunc = this._depthCullingState.depthFunc;
            const depthMask = this._depthCullingState.depthMask;
            const stencilTest = this._stencilState.stencilTest;
            // Rebuild context
            initEngine();
            this._rebuildGraphicsResources();
            this._depthCullingState.depthTest = depthTest;
            this._depthCullingState.depthFunc = depthFunc;
            this._depthCullingState.depthMask = depthMask;
            this._stencilState.stencilTest = stencilTest;
            this._flagContextRestored();
        }, 0);
    }
    /** Gets a boolean indicating if the engine was disposed */ get isDisposed() {
        return this._isDisposed;
    }
    /**
     * Enables or disables the snapshot rendering mode
     * Note that the WebGL engine does not support snapshot rendering so setting the value won't have any effect for this engine
     */ get snapshotRendering() {
        return false;
    }
    set snapshotRendering(activate) {
    // Do nothing
    }
    /**
     * Gets or sets the snapshot rendering mode
     */ get snapshotRenderingMode() {
        return 0;
    }
    set snapshotRenderingMode(mode) {}
    /**
     * Returns the string "AbstractEngine"
     * @returns "AbstractEngine"
     */ getClassName() {
        return "AbstractEngine";
    }
    /**
     * Gets the default empty texture
     */ get emptyTexture() {
        if (!this._emptyTexture) {
            this._emptyTexture = this.createRawTexture(new Uint8Array(4), 1, 1, 5, false, false, 1);
        }
        return this._emptyTexture;
    }
    /**
     * Gets the default empty 3D texture
     */ get emptyTexture3D() {
        if (!this._emptyTexture3D) {
            this._emptyTexture3D = this.createRawTexture3D(new Uint8Array(4), 1, 1, 1, 5, false, false, 1);
        }
        return this._emptyTexture3D;
    }
    /**
     * Gets the default empty 2D array texture
     */ get emptyTexture2DArray() {
        if (!this._emptyTexture2DArray) {
            this._emptyTexture2DArray = this.createRawTexture2DArray(new Uint8Array(4), 1, 1, 1, 5, false, false, 1);
        }
        return this._emptyTexture2DArray;
    }
    /**
     * Gets the default empty cube texture
     */ get emptyCubeTexture() {
        if (!this._emptyCubeTexture) {
            const faceData = new Uint8Array(4);
            const cubeData = [
                faceData,
                faceData,
                faceData,
                faceData,
                faceData,
                faceData
            ];
            this._emptyCubeTexture = this.createRawCubeTexture(cubeData, 1, 5, 0, false, false, 1);
        }
        return this._emptyCubeTexture;
    }
    /**
     * Gets the list of current active render loop functions
     * @returns a read only array with the current render loop functions
     */ get activeRenderLoops() {
        return this._activeRenderLoops;
    }
    /**
     * stop executing a render loop function and remove it from the execution array
     * @param renderFunction defines the function to be removed. If not provided all functions will be removed.
     */ stopRenderLoop(renderFunction) {
        if (!renderFunction) {
            this._activeRenderLoops.length = 0;
            this._cancelFrame();
            return;
        }
        const index = this._activeRenderLoops.indexOf(renderFunction);
        if (index >= 0) {
            this._activeRenderLoops.splice(index, 1);
            if (this._activeRenderLoops.length == 0) {
                this._cancelFrame();
            }
        }
    }
    _cancelFrame() {
        if (this._frameHandler !== 0) {
            const handlerToCancel = this._frameHandler;
            this._frameHandler = 0;
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$domManagement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IsWindowObjectExist"])()) {
                if (typeof cancelAnimationFrame === "function") {
                    return cancelAnimationFrame(handlerToCancel);
                }
            } else {
                const { cancelAnimationFrame: cancelAnimationFrame1 } = this.getHostWindow() || window;
                if (typeof cancelAnimationFrame1 === "function") {
                    return cancelAnimationFrame1(handlerToCancel);
                }
            }
            return clearTimeout(handlerToCancel);
        }
    }
    /**
     * Begin a new frame
     */ beginFrame() {
        this.onBeginFrameObservable.notifyObservers(this);
    }
    /**
     * End the current frame
     */ endFrame() {
        this._frameId++;
        this.onEndFrameObservable.notifyObservers(this);
    }
    /** Gets or sets max frame per second allowed. Will return undefined if not capped */ get maxFPS() {
        return this._maxFPS;
    }
    set maxFPS(value) {
        this._maxFPS = value;
        if (value === undefined) {
            return;
        }
        if (value <= 0) {
            this._minFrameTime = Number.MAX_VALUE;
            return;
        }
        this._minFrameTime = 1000 / value;
    }
    _isOverFrameTime(timestamp) {
        if (!timestamp || this._maxFPS === undefined) {
            return false;
        }
        const elapsedTime = timestamp - this._lastFrameTime;
        this._lastFrameTime = timestamp;
        this._renderAccumulator += elapsedTime;
        if (this._renderAccumulator < this._minFrameTime) {
            return true;
        }
        this._renderAccumulator -= this._minFrameTime;
        if (this._renderAccumulator > this._minFrameTime) {
            this._renderAccumulator = this._minFrameTime;
        }
        return false;
    }
    _processFrame(timestamp) {
        this._frameHandler = 0;
        if (!this._contextWasLost && !this._isOverFrameTime(timestamp)) {
            let shouldRender = true;
            if (this.isDisposed || !this.renderEvenInBackground && this._windowIsBackground) {
                shouldRender = false;
            }
            if (shouldRender) {
                // Start new frame
                this.beginFrame();
                // Child canvases
                if (!this.skipFrameRender && !this._renderViews()) {
                    // Main frame
                    this._renderFrame();
                }
                // Present
                this.endFrame();
            }
        }
    }
    /** @internal */ _renderLoop(timestamp) {
        this._processFrame(timestamp);
        // The first condition prevents queuing another frame if we no longer have active render loops (e.g., if
        // `stopRenderLoop` is called mid frame). The second condition prevents queuing another frame if one has
        // already been queued (e.g., if `stopRenderLoop` and `runRenderLoop` is called mid frame).
        if (this._activeRenderLoops.length > 0 && this._frameHandler === 0) {
            this._frameHandler = this._queueNewFrame(this._boundRenderFunction, this.getHostWindow());
        }
    }
    /** @internal */ _renderFrame() {
        for(let index = 0; index < this._activeRenderLoops.length; index++){
            const renderFunction = this._activeRenderLoops[index];
            renderFunction();
        }
    }
    /** @internal */ _renderViews() {
        return false;
    }
    /**
     * Can be used to override the current requestAnimationFrame requester.
     * @internal
     */ _queueNewFrame(bindedRenderFunction, requester) {
        return QueueNewFrame(bindedRenderFunction, requester);
    }
    /**
     * Register and execute a render loop. The engine can have more than one render function
     * @param renderFunction defines the function to continuously execute
     */ runRenderLoop(renderFunction) {
        if (this._activeRenderLoops.indexOf(renderFunction) !== -1) {
            return;
        }
        this._activeRenderLoops.push(renderFunction);
        // On the first added function, start the render loop.
        if (this._activeRenderLoops.length === 1 && this._frameHandler === 0) {
            this._frameHandler = this._queueNewFrame(this._boundRenderFunction, this.getHostWindow());
        }
    }
    /**
     * Gets a boolean indicating if depth testing is enabled
     * @returns the current state
     */ getDepthBuffer() {
        return this._depthCullingState.depthTest;
    }
    /**
     * Enable or disable depth buffering
     * @param enable defines the state to set
     */ setDepthBuffer(enable) {
        this._depthCullingState.depthTest = enable;
    }
    /**
     * Set the z offset Factor to apply to current rendering
     * @param value defines the offset to apply
     */ setZOffset(value) {
        this._depthCullingState.zOffset = this.useReverseDepthBuffer ? -value : value;
    }
    /**
     * Gets the current value of the zOffset Factor
     * @returns the current zOffset Factor state
     */ getZOffset() {
        const zOffset = this._depthCullingState.zOffset;
        return this.useReverseDepthBuffer ? -zOffset : zOffset;
    }
    /**
     * Set the z offset Units to apply to current rendering
     * @param value defines the offset to apply
     */ setZOffsetUnits(value) {
        this._depthCullingState.zOffsetUnits = this.useReverseDepthBuffer ? -value : value;
    }
    /**
     * Gets the current value of the zOffset Units
     * @returns the current zOffset Units state
     */ getZOffsetUnits() {
        const zOffsetUnits = this._depthCullingState.zOffsetUnits;
        return this.useReverseDepthBuffer ? -zOffsetUnits : zOffsetUnits;
    }
    /**
     * Gets host window
     * @returns the host window object
     */ getHostWindow() {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$domManagement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IsWindowObjectExist"])()) {
            return null;
        }
        if (this._renderingCanvas && this._renderingCanvas.ownerDocument && this._renderingCanvas.ownerDocument.defaultView) {
            return this._renderingCanvas.ownerDocument.defaultView;
        }
        return window;
    }
    /**
     * (WebGPU only) True (default) to be in compatibility mode, meaning rendering all existing scenes without artifacts (same rendering than WebGL).
     * Setting the property to false will improve performances but may not work in some scenes if some precautions are not taken.
     * See https://doc.babylonjs.com/setup/support/webGPU/webGPUOptimization/webGPUNonCompatibilityMode for more details
     */ get compatibilityMode() {
        return this._compatibilityMode;
    }
    set compatibilityMode(mode) {
        // not supported in WebGL
        this._compatibilityMode = true;
    }
    _rebuildTextures() {
        for (const scene of this.scenes){
            scene._rebuildTextures();
        }
        for (const scene of this._virtualScenes){
            scene._rebuildTextures();
        }
    }
    /**
     * @internal
     */ _releaseRenderTargetWrapper(rtWrapper) {
        const index = this._renderTargetWrapperCache.indexOf(rtWrapper);
        if (index !== -1) {
            this._renderTargetWrapperCache.splice(index, 1);
        }
    }
    /**
     * Gets the current viewport
     */ get currentViewport() {
        return this._cachedViewport;
    }
    /**
     * Set the WebGL's viewport
     * @param viewport defines the viewport element to be used
     * @param requiredWidth defines the width required for rendering. If not provided the rendering canvas' width is used
     * @param requiredHeight defines the height required for rendering. If not provided the rendering canvas' height is used
     */ setViewport(viewport, requiredWidth, requiredHeight) {
        const width = requiredWidth || this.getRenderWidth();
        const height = requiredHeight || this.getRenderHeight();
        const x = viewport.x || 0;
        const y = viewport.y || 0;
        this._cachedViewport = viewport;
        this._viewport(x * width, y * height, width * viewport.width, height * viewport.height);
    }
    /**
     * Create an image to use with canvas
     * @returns IImage interface
     */ createCanvasImage() {
        return document.createElement("img");
    }
    /**
     * Create a 2D path to use with canvas
     * @returns IPath2D interface
     * @param d SVG path string
     */ createCanvasPath2D(d) {
        return new Path2D(d);
    }
    /**
     * Returns a string describing the current engine
     */ get description() {
        let description = this.name + this.version;
        if (this._caps.parallelShaderCompile) {
            description += " - Parallel shader compilation";
        }
        return description;
    }
    _createTextureBase(url, noMipmap, invertY, scene, samplingMode = 3, onLoad = null, onError = null, prepareTexture, prepareTextureProcess, buffer = null, fallback = null, format = null, forcedExtension = null, mimeType, loaderOptions, useSRGBBuffer) {
        url = url || "";
        const fromData = url.substring(0, 5) === "data:";
        const fromBlob = url.substring(0, 5) === "blob:";
        const isBase64 = fromData && url.indexOf(";base64,") !== -1;
        const texture = fallback ? fallback : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$internalTexture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InternalTexture"](this, 1 /* InternalTextureSource.Url */ );
        if (texture !== fallback) {
            texture.label = url.substring(0, 60); // default label, can be overriden by the caller
        }
        const originalUrl = url;
        if (this._transformTextureUrl && !isBase64 && !fallback && !buffer) {
            url = this._transformTextureUrl(url);
        }
        if (originalUrl !== url) {
            texture._originalUrl = originalUrl;
        }
        // establish the file extension, if possible
        const lastDot = url.lastIndexOf(".");
        let extension = forcedExtension ? forcedExtension : lastDot > -1 ? url.substring(lastDot).toLowerCase() : "";
        // Remove query string
        const queryStringIndex = extension.indexOf("?");
        if (queryStringIndex > -1) {
            extension = extension.split("?")[0];
        }
        const loaderPromise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$textureLoaderManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_GetCompatibleTextureLoader"])(extension, mimeType);
        if (scene) {
            scene.addPendingData(texture);
        }
        texture.url = url;
        texture.generateMipMaps = !noMipmap;
        texture.samplingMode = samplingMode;
        texture.invertY = invertY;
        texture._useSRGBBuffer = this._getUseSRGBBuffer(!!useSRGBBuffer, noMipmap);
        if (!this._doNotHandleContextLost) {
            // Keep a link to the buffer only if we plan to handle context lost
            texture._buffer = buffer;
        }
        let onLoadObserver = null;
        if (onLoad && !fallback) {
            onLoadObserver = texture.onLoadedObservable.add(onLoad);
        }
        if (!fallback) {
            this._internalTexturesCache.push(texture);
        }
        const onInternalError = (message, exception)=>{
            if (scene) {
                scene.removePendingData(texture);
            }
            if (url === originalUrl) {
                if (onLoadObserver) {
                    texture.onLoadedObservable.remove(onLoadObserver);
                }
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EngineStore"].UseFallbackTexture && url !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EngineStore"].FallbackTexture) {
                    this._createTextureBase(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EngineStore"].FallbackTexture, noMipmap, texture.invertY, scene, samplingMode, null, onError, prepareTexture, prepareTextureProcess, buffer, texture);
                }
                message = (message || "Unknown error") + (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EngineStore"].UseFallbackTexture ? " - Fallback texture was used" : "");
                texture.onErrorObservable.notifyObservers({
                    message,
                    exception
                });
                if (onError) {
                    onError(message, exception);
                }
            } else {
                // fall back to the original url if the transformed url fails to load
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn(`Failed to load ${url}, falling back to ${originalUrl}`);
                this._createTextureBase(originalUrl, noMipmap, texture.invertY, scene, samplingMode, onLoad, onError, prepareTexture, prepareTextureProcess, buffer, texture, format, forcedExtension, mimeType, loaderOptions, useSRGBBuffer);
            }
        };
        // processing for non-image formats
        if (loaderPromise) {
            const callbackAsync = async (data)=>{
                const loader = await loaderPromise;
                loader.loadData(data, texture, (width, height, loadMipmap, isCompressed, done, loadFailed)=>{
                    if (loadFailed) {
                        onInternalError("TextureLoader failed to load data");
                    } else {
                        prepareTexture(texture, extension, scene, {
                            width,
                            height
                        }, texture.invertY, !loadMipmap, isCompressed, ()=>{
                            done();
                            return false;
                        }, samplingMode);
                    }
                }, loaderOptions);
            };
            if (!buffer) {
                this._loadFile(url, (data)=>{
                    // eslint-disable-next-line @typescript-eslint/no-floating-promises
                    callbackAsync(new Uint8Array(data));
                }, undefined, scene ? scene.offlineProvider : undefined, true, (request, exception)=>{
                    onInternalError("Unable to load " + (request ? request.responseURL : url, exception));
                });
            } else {
                if (buffer instanceof ArrayBuffer) {
                    // eslint-disable-next-line @typescript-eslint/no-floating-promises
                    callbackAsync(new Uint8Array(buffer));
                } else if (ArrayBuffer.isView(buffer)) {
                    // eslint-disable-next-line @typescript-eslint/no-floating-promises
                    callbackAsync(buffer);
                } else {
                    if (onError) {
                        onError("Unable to load: only ArrayBuffer or ArrayBufferView is supported", null);
                    }
                }
            }
        } else {
            const onload = (img)=>{
                if (fromBlob && !this._doNotHandleContextLost) {
                    // We need to store the image if we need to rebuild the texture
                    // in case of a webgl context lost
                    texture._buffer = img;
                }
                prepareTexture(texture, extension, scene, img, texture.invertY, noMipmap, false, prepareTextureProcess, samplingMode);
            };
            // According to the WebGL spec section 6.10, ImageBitmaps must be inverted on creation.
            // So, we pass imageOrientation to _FileToolsLoadImage() as it may create an ImageBitmap.
            if (!fromData || isBase64) {
                if (buffer && (typeof buffer.decoding === "string" || buffer.close)) {
                    onload(buffer);
                } else {
                    AbstractEngine._FileToolsLoadImage(url || "", onload, onInternalError, scene ? scene.offlineProvider : null, mimeType, texture.invertY && this._features.needsInvertingBitmap ? {
                        imageOrientation: "flipY"
                    } : undefined, this);
                }
            } else if (typeof buffer === "string" || buffer instanceof ArrayBuffer || ArrayBuffer.isView(buffer) || buffer instanceof Blob) {
                AbstractEngine._FileToolsLoadImage(buffer, onload, onInternalError, scene ? scene.offlineProvider : null, mimeType, texture.invertY && this._features.needsInvertingBitmap ? {
                    imageOrientation: "flipY"
                } : undefined, this);
            } else if (buffer) {
                onload(buffer);
            }
        }
        return texture;
    }
    _rebuildBuffers() {
        // Uniforms
        for (const uniformBuffer of this._uniformBuffers){
            uniformBuffer._rebuildAfterContextLost();
        }
    }
    /** @internal */ get _shouldUseHighPrecisionShader() {
        return !!(this._caps.highPrecisionShaderSupported && this._highPrecisionShadersAllowed);
    }
    /**
     * Gets host document
     * @returns the host document object
     */ getHostDocument() {
        if (this._renderingCanvas && this._renderingCanvas.ownerDocument) {
            return this._renderingCanvas.ownerDocument;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$domManagement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IsDocumentAvailable"])() ? document : null;
    }
    /**
     * Gets the list of loaded textures
     * @returns an array containing all loaded textures
     */ getLoadedTexturesCache() {
        return this._internalTexturesCache;
    }
    /**
     * Clears the list of texture accessible through engine.
     * This can help preventing texture load conflict due to name collision.
     */ clearInternalTexturesCache() {
        this._internalTexturesCache.length = 0;
    }
    /**
     * Gets the object containing all engine capabilities
     * @returns the EngineCapabilities object
     */ getCaps() {
        return this._caps;
    }
    /**
     * Reset the texture cache to empty state
     */ resetTextureCache() {
        for(const key in this._boundTexturesCache){
            if (!Object.prototype.hasOwnProperty.call(this._boundTexturesCache, key)) {
                continue;
            }
            this._boundTexturesCache[key] = null;
        }
        this._currentTextureChannel = -1;
    }
    /**
     * Gets or sets the name of the engine
     */ get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    /**
     * Returns the current npm package of the sdk
     */ // Not mixed with Version for tooling purpose.
    static get NpmPackage() {
        return "babylonjs@8.39.0";
    }
    /**
     * Returns the current version of the framework
     */ static get Version() {
        return "8.39.0";
    }
    /**
     * Gets the HTML canvas attached with the current webGL context
     * @returns a HTML canvas
     */ getRenderingCanvas() {
        return this._renderingCanvas;
    }
    /**
     * Gets the audio context specified in engine initialization options
     * @deprecated please use AudioEngineV2 instead
     * @returns an Audio Context
     */ getAudioContext() {
        return this._audioContext;
    }
    /**
     * Gets the audio destination specified in engine initialization options
     * @deprecated please use AudioEngineV2 instead
     * @returns an audio destination node
     */ getAudioDestination() {
        return this._audioDestination;
    }
    /**
     * Defines the hardware scaling level.
     * By default the hardware scaling level is computed from the window device ratio.
     * if level = 1 then the engine will render at the exact resolution of the canvas. If level = 0.5 then the engine will render at twice the size of the canvas.
     * @param level defines the level to use
     */ setHardwareScalingLevel(level) {
        this._hardwareScalingLevel = level;
        this.resize();
    }
    /**
     * Gets the current hardware scaling level.
     * By default the hardware scaling level is computed from the window device ratio.
     * if level = 1 then the engine will render at the exact resolution of the canvas. If level = 0.5 then the engine will render at twice the size of the canvas.
     * @returns a number indicating the current hardware scaling level
     */ getHardwareScalingLevel() {
        return this._hardwareScalingLevel;
    }
    /**
     * Gets or sets a boolean indicating if resources should be retained to be able to handle context lost events
     * @see https://doc.babylonjs.com/features/featuresDeepDive/scene/optimize_your_scene#handling-webgl-context-lost
     */ get doNotHandleContextLost() {
        return this._doNotHandleContextLost;
    }
    set doNotHandleContextLost(value) {
        this._doNotHandleContextLost = value;
    }
    /**
     * Returns true if the stencil buffer has been enabled through the creation option of the context.
     */ get isStencilEnable() {
        return this._isStencilEnable;
    }
    /**
     * Gets the options used for engine creation
     * NOTE that modifying the object after engine creation will have no effect
     * @returns EngineOptions object
     */ getCreationOptions() {
        return this._creationOptions;
    }
    /**
     * Creates a new engine
     * @param antialias defines whether anti-aliasing should be enabled. If undefined, it means that the underlying engine is free to enable it or not
     * @param options defines further options to be sent to the creation context
     * @param adaptToDeviceRatio defines whether to adapt to the device's viewport characteristics (default: false)
     */ constructor(antialias, options, adaptToDeviceRatio){
        // States
        /** @internal */ this._colorWrite = true;
        /** @internal */ this._colorWriteChanged = true;
        /** @internal */ this._depthCullingState = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$States$2f$depthCullingState$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DepthCullingState"]();
        /** @internal */ this._stencilStateComposer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$States$2f$stencilStateComposer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StencilStateComposer"]();
        /** @internal */ this._stencilState = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$States$2f$stencilState$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StencilState"]();
        /** @internal */ this._alphaState = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$States$2f$alphaCullingState$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlphaState"](false);
        /** @internal */ this._alphaMode = Array(8).fill(-1);
        /** @internal */ this._alphaEquation = Array(8).fill(-1);
        this._activeRequests = [];
        /** @internal */ this._badOS = false;
        /** @internal */ this._badDesktopOS = false;
        this._compatibilityMode = true;
        /** @internal */ this._internalTexturesCache = new Array();
        /** @internal */ this._currentRenderTarget = null;
        /** @internal */ this._boundTexturesCache = {};
        /** @internal */ this._activeChannel = 0;
        /** @internal */ this._currentTextureChannel = -1;
        /** @internal */ this._viewportCached = {
            x: 0,
            y: 0,
            z: 0,
            w: 0
        };
        /** @internal */ this._isWebGPU = false;
        /**
         * Observable event triggered each time the canvas loses focus
         */ this.onCanvasBlurObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * Observable event triggered each time the canvas gains focus
         */ this.onCanvasFocusObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * Event raised when a new scene is created
         */ this.onNewSceneAddedObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * Observable event triggered each time the rendering canvas is resized
         */ this.onResizeObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * Observable event triggered each time the canvas receives pointerout event
         */ this.onCanvasPointerOutObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * Observable event triggered each time an effect compilation fails
         */ this.onEffectErrorObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * Turn this value on if you want to pause FPS computation when in background
         */ this.disablePerformanceMonitorInBackground = false;
        /**
         * Gets or sets a boolean indicating that vertex array object must be disabled even if they are supported
         */ this.disableVertexArrayObjects = false;
        /** @internal */ this._frameId = 0;
        /**
         * Gets information about the current host
         */ this.hostInformation = {
            isMobile: false
        };
        /**
         * Gets a boolean indicating if the engine is currently rendering in fullscreen mode
         */ this.isFullscreen = false;
        /**
         * Gets or sets a boolean to enable/disable IndexedDB support and avoid XHR on .manifest
         **/ this.enableOfflineSupport = false;
        /**
         * Gets or sets a boolean to enable/disable checking manifest if IndexedDB support is enabled (js will always consider the database is up to date)
         **/ this.disableManifestCheck = false;
        /**
         * Gets or sets a boolean to enable/disable the context menu (right-click) from appearing on the main canvas
         */ this.disableContextMenu = true;
        /**
         * Gets or sets the current render pass id
         */ this.currentRenderPassId = 0;
        /**
         * Gets a boolean indicating if the pointer is currently locked
         */ this.isPointerLock = false;
        /**
         * Gets the list of created postprocesses
         */ this.postProcesses = [];
        /** Gets or sets the tab index to set to the rendering canvas. 1 is the minimum value to set to be able to capture keyboard events */ this.canvasTabIndex = 1;
        /** @internal */ this._contextWasLost = false;
        this._useReverseDepthBuffer = false;
        /**
         * Indicates if the z range in NDC space is 0..1 (value: true) or -1..1 (value: false)
         */ this.isNDCHalfZRange = false;
        /**
         * Indicates that the origin of the texture/framebuffer space is the bottom left corner. If false, the origin is top left
         */ this.hasOriginBottomLeft = true;
        /** @internal */ this._renderTargetWrapperCache = new Array();
        /** @internal */ this._compiledEffects = {};
        /** @internal */ this._isDisposed = false;
        /**
         * Gets the list of created scenes
         */ this.scenes = [];
        /** @internal */ this._virtualScenes = new Array();
        /**
         * Observable event triggered before each texture is initialized
         */ this.onBeforeTextureInitObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * Gets or sets a boolean indicating if the engine must keep rendering even if the window is not in foreground
         */ this.renderEvenInBackground = true;
        /**
         * Gets or sets a boolean indicating that cache can be kept between frames
         */ this.preventCacheWipeBetweenFrames = false;
        /** @internal */ this._frameHandler = 0;
        /** @internal */ this._activeRenderLoops = new Array();
        /** @internal */ this._windowIsBackground = false;
        /** @internal */ this._boundRenderFunction = (timestamp)=>this._renderLoop(timestamp);
        this._lastFrameTime = 0;
        this._renderAccumulator = 0;
        /**
         * Skip frame rendering but keep the frame heartbeat (begin/end frame).
         * This is useful if you need all the plumbing but not the rendering work.
         * (for instance when capturing a screenshot where you do not want to mix rendering to the screen and to the screenshot)
         */ this.skipFrameRender = false;
        /**
         * Observable raised when the engine is about to compile a shader
         */ this.onBeforeShaderCompilationObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * Observable raised when the engine has just compiled a shader
         */ this.onAfterShaderCompilationObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * Observable raised when the engine begins a new frame
         */ this.onBeginFrameObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * Observable raised when the engine ends the current frame (requires a render loop, e.g. 'engine.runRenderLoop(...)')
         */ this.onEndFrameObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        /** @internal */ this._transformTextureUrl = null;
        /** @internal */ this._uniformBuffers = new Array();
        /** @internal */ this._storageBuffers = new Array();
        this._highPrecisionShadersAllowed = true;
        // Lost context
        /**
         * Observable signaled when a context lost event is raised
         */ this.onContextLostObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * Observable signaled when a context restored event is raised
         */ this.onContextRestoredObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        /** @internal */ this._name = "";
        /**
         * Defines whether the engine has been created with the premultipliedAlpha option on or not.
         */ this.premultipliedAlpha = true;
        /**
         * If set to true zooming in and out in the browser will rescale the hardware-scaling correctly.
         */ this.adaptToDeviceRatio = false;
        /** @internal */ this._lastDevicePixelRatio = 1.0;
        /** @internal */ this._doNotHandleContextLost = false;
        /**
         * Gets or sets a boolean indicating if back faces must be culled. If false, front faces are culled instead (true by default)
         * If non null, this takes precedence over the value from the material
         */ this.cullBackFaces = null;
        /** @internal */ this._renderPassNames = [
            "main"
        ];
        // FPS
        this._fps = 60;
        this._deltaTime = 0;
        // Deterministic lockstepMaxSteps
        /** @internal */ this._deterministicLockstep = false;
        /** @internal */ this._lockstepMaxSteps = 4;
        /** @internal */ this._timeStep = 1 / 60;
        /**
         * An event triggered when the engine is disposed.
         */ this.onDisposeObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * An event triggered when a global cleanup of all effects is required
         */ this.onReleaseEffectsObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EngineStore"].Instances.push(this);
        this.startTime = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$precisionDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PrecisionDate"].Now;
        this._stencilStateComposer.stencilGlobal = this._stencilState;
        // LargeWorldRendering set to true will set high precision matrix, regardless of useHighPrecisionMatrix value
        // It will also set all scenes to use floatingOriginMode upon their creation
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$performanceConfigurator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PerformanceConfigurator"].SetMatrixPrecision(!!options.useLargeWorldRendering || !!options.useHighPrecisionMatrix);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$domManagement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IsNavigatorAvailable"])() && navigator.userAgent) {
            // Detect if we are running on a faulty buggy OS.
            this._badOS = /iPad/i.test(navigator.userAgent) || /iPhone/i.test(navigator.userAgent);
            // Detect if we are running on a faulty buggy desktop OS.
            this._badDesktopOS = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        }
        // Save this off for use in resize().
        this.adaptToDeviceRatio = adaptToDeviceRatio ?? false;
        options.antialias = antialias ?? options.antialias;
        options.deterministicLockstep = options.deterministicLockstep ?? false;
        options.lockstepMaxSteps = options.lockstepMaxSteps ?? 4;
        options.timeStep = options.timeStep ?? 1 / 60;
        options.stencil = options.stencil ?? true;
        this._audioContext = options.audioEngineOptions?.audioContext ?? null;
        this._audioDestination = options.audioEngineOptions?.audioDestination ?? null;
        this.premultipliedAlpha = options.premultipliedAlpha ?? true;
        this._doNotHandleContextLost = !!options.doNotHandleContextLost;
        this._isStencilEnable = options.stencil ? true : false;
        this.useExactSrgbConversions = options.useExactSrgbConversions ?? false;
        const devicePixelRatio = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$domManagement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IsWindowObjectExist"])() ? window.devicePixelRatio || 1.0 : 1.0;
        const limitDeviceRatio = options.limitDeviceRatio || devicePixelRatio;
        // Viewport
        adaptToDeviceRatio = adaptToDeviceRatio || options.adaptToDeviceRatio || false;
        this._hardwareScalingLevel = adaptToDeviceRatio ? 1.0 / Math.min(limitDeviceRatio, devicePixelRatio) : 1.0;
        this._lastDevicePixelRatio = devicePixelRatio;
        this._creationOptions = options;
    }
    /**
     * Resize the view according to the canvas' size
     * @param forceSetSize true to force setting the sizes of the underlying canvas
     */ resize(forceSetSize = false) {
        let width;
        let height;
        // Re-query hardware scaling level to handle zoomed-in resizing.
        if (this.adaptToDeviceRatio) {
            const devicePixelRatio = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$domManagement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IsWindowObjectExist"])() ? window.devicePixelRatio || 1.0 : 1.0;
            const changeRatio = this._lastDevicePixelRatio / devicePixelRatio;
            this._lastDevicePixelRatio = devicePixelRatio;
            this._hardwareScalingLevel *= changeRatio;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$domManagement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IsWindowObjectExist"])() && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$domManagement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IsDocumentAvailable"])()) {
            // make sure it is a Node object, and is a part of the document.
            if (this._renderingCanvas) {
                const boundingRect = this._renderingCanvas.getBoundingClientRect?.();
                width = this._renderingCanvas.clientWidth || boundingRect?.width || this._renderingCanvas.width * this._hardwareScalingLevel || 100;
                height = this._renderingCanvas.clientHeight || boundingRect?.height || this._renderingCanvas.height * this._hardwareScalingLevel || 100;
            } else {
                width = window.innerWidth;
                height = window.innerHeight;
            }
        } else {
            width = this._renderingCanvas ? this._renderingCanvas.width : 100;
            height = this._renderingCanvas ? this._renderingCanvas.height : 100;
        }
        this.setSize(width / this._hardwareScalingLevel, height / this._hardwareScalingLevel, forceSetSize);
    }
    /**
     * Force a specific size of the canvas
     * @param width defines the new canvas' width
     * @param height defines the new canvas' height
     * @param forceSetSize true to force setting the sizes of the underlying canvas
     * @returns true if the size was changed
     */ setSize(width, height, forceSetSize = false) {
        if (!this._renderingCanvas) {
            return false;
        }
        width = width | 0;
        height = height | 0;
        if (!forceSetSize && this._renderingCanvas.width === width && this._renderingCanvas.height === height) {
            return false;
        }
        this._renderingCanvas.width = width;
        this._renderingCanvas.height = height;
        if (this.scenes) {
            for(let index = 0; index < this.scenes.length; index++){
                const scene = this.scenes[index];
                for(let camIndex = 0; camIndex < scene.cameras.length; camIndex++){
                    const cam = scene.cameras[camIndex];
                    cam._currentRenderId = 0;
                }
            }
            if (this.onResizeObservable.hasObservers()) {
                this.onResizeObservable.notifyObservers(this);
            }
        }
        return true;
    }
    // eslint-disable-next-line jsdoc/require-returns-check
    /**
     * Creates a raw texture
     * @param data defines the data to store in the texture
     * @param width defines the width of the texture
     * @param height defines the height of the texture
     * @param format defines the format of the data
     * @param generateMipMaps defines if the engine should generate the mip levels
     * @param invertY defines if data must be stored with Y axis inverted
     * @param samplingMode defines the required sampling mode (Texture.NEAREST_SAMPLINGMODE by default)
     * @param compression defines the compression used (null by default)
     * @param type defines the type fo the data (Engine.TEXTURETYPE_UNSIGNED_BYTE by default)
     * @param creationFlags specific flags to use when creating the texture (1 for storage textures, for eg)
     * @param useSRGBBuffer defines if the texture must be loaded in a sRGB GPU buffer (if supported by the GPU).
     * @returns the raw texture inside an InternalTexture
     */ createRawTexture(data, width, height, format, generateMipMaps, invertY, samplingMode, compression, type, creationFlags, useSRGBBuffer) {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$devTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_WarnImport"])("engine.rawTexture");
    }
    // eslint-disable-next-line jsdoc/require-returns-check
    /**
     * Creates a new raw cube texture
     * @param data defines the array of data to use to create each face
     * @param size defines the size of the textures
     * @param format defines the format of the data
     * @param type defines the type of the data (like Engine.TEXTURETYPE_UNSIGNED_BYTE)
     * @param generateMipMaps  defines if the engine should generate the mip levels
     * @param invertY defines if data must be stored with Y axis inverted
     * @param samplingMode defines the required sampling mode (like Texture.NEAREST_SAMPLINGMODE)
     * @param compression defines the compression used (null by default)
     * @returns the cube texture as an InternalTexture
     */ createRawCubeTexture(data, size, format, type, generateMipMaps, invertY, samplingMode, compression) {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$devTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_WarnImport"])("engine.rawTexture");
    }
    // eslint-disable-next-line jsdoc/require-returns-check
    /**
     * Creates a new raw 3D texture
     * @param data defines the data used to create the texture
     * @param width defines the width of the texture
     * @param height defines the height of the texture
     * @param depth defines the depth of the texture
     * @param format defines the format of the texture
     * @param generateMipMaps defines if the engine must generate mip levels
     * @param invertY defines if data must be stored with Y axis inverted
     * @param samplingMode defines the required sampling mode (like Texture.NEAREST_SAMPLINGMODE)
     * @param compression defines the compressed used (can be null)
     * @param textureType defines the compressed used (can be null)
     * @param creationFlags specific flags to use when creating the texture (1 for storage textures, for eg)
     * @returns a new raw 3D texture (stored in an InternalTexture)
     */ createRawTexture3D(data, width, height, depth, format, generateMipMaps, invertY, samplingMode, compression, textureType, creationFlags) {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$devTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_WarnImport"])("engine.rawTexture");
    }
    // eslint-disable-next-line jsdoc/require-returns-check
    /**
     * Creates a new raw 2D array texture
     * @param data defines the data used to create the texture
     * @param width defines the width of the texture
     * @param height defines the height of the texture
     * @param depth defines the number of layers of the texture
     * @param format defines the format of the texture
     * @param generateMipMaps defines if the engine must generate mip levels
     * @param invertY defines if data must be stored with Y axis inverted
     * @param samplingMode defines the required sampling mode (like Texture.NEAREST_SAMPLINGMODE)
     * @param compression defines the compressed used (can be null)
     * @param textureType defines the compressed used (can be null)
     * @param creationFlags specific flags to use when creating the texture (1 for storage textures, for eg)
     * @returns a new raw 2D array texture (stored in an InternalTexture)
     */ createRawTexture2DArray(data, width, height, depth, format, generateMipMaps, invertY, samplingMode, compression, textureType, creationFlags) {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$devTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_WarnImport"])("engine.rawTexture");
    }
    /**
     * Shared initialization across engines types.
     * @param canvas The canvas associated with this instance of the engine.
     */ _sharedInit(canvas) {
        this._renderingCanvas = canvas;
    }
    _setupMobileChecks() {
        if (!(navigator && navigator.userAgent)) {
            return;
        }
        // Function to check if running on mobile device
        this._checkForMobile = ()=>{
            const currentUa = navigator.userAgent;
            this.hostInformation.isMobile = currentUa.indexOf("Mobile") !== -1 || currentUa.indexOf("Mac") !== -1 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$domManagement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IsDocumentAvailable"])() && "ontouchend" in document;
        };
        // Set initial isMobile value
        this._checkForMobile();
        // Set up event listener to check when window is resized (used to get emulator activation to work properly)
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$domManagement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IsWindowObjectExist"])()) {
            window.addEventListener("resize", this._checkForMobile);
        }
    }
    /**
     * creates and returns a new video element
     * @param constraints video constraints
     * @returns video element
     */ // eslint-disable-next-line @typescript-eslint/no-unused-vars
    createVideoElement(constraints) {
        return document.createElement("video");
    }
    /**
     * @internal
     */ _reportDrawCall(numDrawCalls = 1) {
        this._drawCalls?.addCount(numDrawCalls, false);
    }
    /**
     * Gets the current framerate
     * @returns a number representing the framerate
     */ getFps() {
        return this._fps;
    }
    /**
     * Gets the time spent between current and previous frame
     * @returns a number representing the delta time in ms
     */ getDeltaTime() {
        return this._deltaTime;
    }
    /**
     * Gets a boolean indicating that the engine is running in deterministic lock step mode
     * @see https://doc.babylonjs.com/features/featuresDeepDive/animation/advanced_animations#deterministic-lockstep
     * @returns true if engine is in deterministic lock step mode
     */ isDeterministicLockStep() {
        return this._deterministicLockstep;
    }
    /**
     * Gets the max steps when engine is running in deterministic lock step
     * @see https://doc.babylonjs.com/features/featuresDeepDive/animation/advanced_animations#deterministic-lockstep
     * @returns the max steps
     */ getLockstepMaxSteps() {
        return this._lockstepMaxSteps;
    }
    /**
     * Returns the time in ms between steps when using deterministic lock step.
     * @returns time step in (ms)
     */ getTimeStep() {
        return this._timeStep * 1000;
    }
    /**
     * Engine abstraction for loading and creating an image bitmap from a given source string.
     * @param imageSource source to load the image from.
     * @param options An object that sets options for the image's extraction.
     */ // eslint-disable-next-line @typescript-eslint/promise-function-async
    _createImageBitmapFromSource(imageSource, options) {
        throw new Error("createImageBitmapFromSource is not implemented");
    }
    /**
     * Engine abstraction for createImageBitmap
     * @param image source for image
     * @param options An object that sets options for the image's extraction.
     * @returns ImageBitmap
     */ // eslint-disable-next-line @typescript-eslint/promise-function-async
    createImageBitmap(image, options) {
        return createImageBitmap(image, options);
    }
    /**
     * Resize an image and returns the image data as an uint8array
     * @param image image to resize
     * @param bufferWidth destination buffer width
     * @param bufferHeight destination buffer height
     */ resizeImageBitmap(image, bufferWidth, bufferHeight) {
        throw new Error("resizeImageBitmap is not implemented");
    }
    /**
     * Get Font size information
     * @param font font name
     */ getFontOffset(font) {
        throw new Error("getFontOffset is not implemented");
    }
    static _CreateCanvas(width, height) {
        if (typeof document === "undefined") {
            return new OffscreenCanvas(width, height);
        }
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        return canvas;
    }
    /**
     * Create a canvas. This method is overridden by other engines
     * @param width width
     * @param height height
     * @returns ICanvas interface
     */ createCanvas(width, height) {
        return AbstractEngine._CreateCanvas(width, height);
    }
    /**
     * Loads an image as an HTMLImageElement.
     * @param input url string, ArrayBuffer, or Blob to load
     * @param onLoad callback called when the image successfully loads
     * @param onError callback called when the image fails to load
     * @param offlineProvider offline provider for caching
     * @param mimeType optional mime type
     * @param imageBitmapOptions optional the options to use when creating an ImageBitmap
     * @param engine the engine instance to use
     * @returns the HTMLImageElement of the loaded image
     * @internal
     */ static _FileToolsLoadImage(input, onLoad, onError, offlineProvider, mimeType, imageBitmapOptions, engine) {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$devTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_WarnImport"])("FileTools");
    }
    /**
     * @internal
     */ _loadFile(url, onSuccess, onProgress, offlineProvider, useArrayBuffer, onError) {
        const request = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_LoadFile"])(url, onSuccess, onProgress, offlineProvider, useArrayBuffer, onError);
        this._activeRequests.push(request);
        request.onCompleteObservable.add(()=>{
            const index = this._activeRequests.indexOf(request);
            if (index !== -1) {
                this._activeRequests.splice(index, 1);
            }
        });
        return request;
    }
    /**
     * Loads a file from a url
     * @param url url to load
     * @param onSuccess callback called when the file successfully loads
     * @param onProgress callback called while file is loading (if the server supports this mode)
     * @param offlineProvider defines the offline provider for caching
     * @param useArrayBuffer defines a boolean indicating that date must be returned as ArrayBuffer
     * @param onError callback called when the file fails to load
     * @returns a file request object
     * @internal
     */ static _FileToolsLoadFile(url, onSuccess, onProgress, offlineProvider, useArrayBuffer, onError) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EngineFunctionContext"].loadFile) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EngineFunctionContext"].loadFile(url, onSuccess, onProgress, offlineProvider, useArrayBuffer, onError);
        }
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$devTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_WarnImport"])("FileTools");
    }
    /**
     * Dispose and release all associated resources
     */ dispose() {
        this.releaseEffects();
        this._isDisposed = true;
        this.stopRenderLoop();
        // Empty texture
        if (this._emptyTexture) {
            this._releaseTexture(this._emptyTexture);
            this._emptyTexture = null;
        }
        if (this._emptyCubeTexture) {
            this._releaseTexture(this._emptyCubeTexture);
            this._emptyCubeTexture = null;
        }
        this._renderingCanvas = null;
        // Clear observables
        if (this.onBeforeTextureInitObservable) {
            this.onBeforeTextureInitObservable.clear();
        }
        // Release postProcesses
        while(this.postProcesses.length){
            this.postProcesses[0].dispose();
        }
        // Release scenes
        while(this.scenes.length){
            this.scenes[0].dispose();
        }
        while(this._virtualScenes.length){
            this._virtualScenes[0].dispose();
        }
        // Release effects
        this.releaseComputeEffects?.();
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$effect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Effect"].ResetCache();
        // Abort active requests
        for (const request of this._activeRequests){
            request.abort();
        }
        this._boundRenderFunction = null;
        this.onDisposeObservable.notifyObservers(this);
        this.onDisposeObservable.clear();
        this.onResizeObservable.clear();
        this.onCanvasBlurObservable.clear();
        this.onCanvasFocusObservable.clear();
        this.onCanvasPointerOutObservable.clear();
        this.onNewSceneAddedObservable.clear();
        this.onEffectErrorObservable.clear();
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$domManagement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IsWindowObjectExist"])()) {
            window.removeEventListener("resize", this._checkForMobile);
        }
        // Remove from Instances
        const index = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EngineStore"].Instances.indexOf(this);
        if (index >= 0) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EngineStore"].Instances.splice(index, 1);
        }
        // no more engines left in the engine store? Notify!
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EngineStore"].Instances.length) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EngineStore"].OnEnginesDisposedObservable.notifyObservers(this);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EngineStore"].OnEnginesDisposedObservable.clear();
        }
        // Observables
        this.onBeginFrameObservable.clear();
        this.onEndFrameObservable.clear();
    }
    /**
     * Method called to create the default loading screen.
     * This can be overridden in your own app.
     * @param canvas The rendering canvas element
     */ // eslint-disable-next-line @typescript-eslint/no-unused-vars
    static DefaultLoadingScreenFactory(canvas) {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$devTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_WarnImport"])("LoadingScreen");
    }
    /**
     * Will flag all materials in all scenes in all engines as dirty to trigger new shader compilation
     * @param flag defines which part of the materials must be marked as dirty
     * @param predicate defines a predicate used to filter which materials should be affected
     */ static MarkAllMaterialsAsDirty(flag, predicate) {
        for(let engineIndex = 0; engineIndex < __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EngineStore"].Instances.length; engineIndex++){
            const engine = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EngineStore"].Instances[engineIndex];
            for(let sceneIndex = 0; sceneIndex < engine.scenes.length; sceneIndex++){
                engine.scenes[sceneIndex].markAllMaterialsAsDirty(flag, predicate);
            }
        }
    }
}
// eslint-disable-next-line @typescript-eslint/naming-convention
/** @internal */ AbstractEngine._RenderPassIdCounter = 0;
/**
 * Method called to create the default rescale post process on each engine.
 */ AbstractEngine._RescalePostProcessFactory = null;
// Updatable statics so stick with vars here
/**
 * Gets or sets the epsilon value used by collision engine
 */ AbstractEngine.CollisionsEpsilon = 0.001;
/**
 * Queue a new function into the requested animation frame pool (ie. this function will be executed by the browser (or the javascript engine) for the next frame)
 * @param func - the function to be called
 * @param requester - the object that will request the next frame. Falls back to window.
 * @returns frame number
 */ AbstractEngine.QueueNewFrame = QueueNewFrame; //# sourceMappingURL=abstractEngine.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/renderTargetWrapper.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RenderTargetWrapper",
    ()=>RenderTargetWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$textureHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/textureHelper.functions.js [app-ssr] (ecmascript)");
;
class RenderTargetWrapper {
    /**
     * Gets the depth/stencil texture
     */ get depthStencilTexture() {
        return this._depthStencilTexture;
    }
    /**
     * Sets the depth/stencil texture
     * @param texture The depth/stencil texture to set
     * @param disposeExisting True to dispose the existing depth/stencil texture (if any) before replacing it (default: true)
     */ setDepthStencilTexture(texture, disposeExisting = true) {
        if (disposeExisting && this._depthStencilTexture) {
            this._depthStencilTexture.dispose();
        }
        this._depthStencilTexture = texture;
        this._generateDepthBuffer = this._generateStencilBuffer = this._depthStencilTextureWithStencil = false;
        if (texture) {
            this._generateDepthBuffer = true;
            this._generateStencilBuffer = this._depthStencilTextureWithStencil = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$textureHelper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HasStencilAspect"])(texture.format);
        }
    }
    /**
     * Indicates if the depth/stencil texture has a stencil aspect
     */ get depthStencilTextureWithStencil() {
        return this._depthStencilTextureWithStencil;
    }
    /**
     * Defines if the render target wrapper is for a cube texture or if false a 2d texture
     */ get isCube() {
        return this._isCube;
    }
    /**
     * Defines if the render target wrapper is for a single or multi target render wrapper
     */ get isMulti() {
        return this._isMulti;
    }
    /**
     * Defines if the render target wrapper is for a single or an array of textures
     */ get is2DArray() {
        return this.layers > 0;
    }
    /**
     * Defines if the render target wrapper is for a 3D texture
     */ get is3D() {
        return this.depth > 0;
    }
    /**
     * Gets the size of the render target wrapper (used for cubes, as width=height in this case)
     */ get size() {
        return this.width;
    }
    /**
     * Gets the width of the render target wrapper
     */ get width() {
        return this._size.width ?? this._size;
    }
    /**
     * Gets the height of the render target wrapper
     */ get height() {
        return this._size.height ?? this._size;
    }
    /**
     * Gets the number of layers of the render target wrapper (only used if is2DArray is true and wrapper is not a multi render target)
     */ get layers() {
        return this._size.layers || 0;
    }
    /**
     * Gets the depth of the render target wrapper (only used if is3D is true and wrapper is not a multi render target)
     */ get depth() {
        return this._size.depth || 0;
    }
    /**
     * Gets the render texture. If this is a multi render target, gets the first texture
     */ get texture() {
        return this._textures?.[0] ?? null;
    }
    /**
     * Gets the list of render textures. If we are not in a multi render target, the list will be null (use the texture getter instead)
     */ get textures() {
        return this._textures;
    }
    /**
     * Gets the face indices that correspond to the list of render textures. If we are not in a multi render target, the list will be null
     */ get faceIndices() {
        return this._faceIndices;
    }
    /**
     * Gets the layer indices that correspond to the list of render textures. If we are not in a multi render target, the list will be null
     */ get layerIndices() {
        return this._layerIndices;
    }
    /**
     * Gets the base array layer of a texture in the textures array
     * This is an number that is calculated based on the layer and face indices set for this texture at that index
     * @param index The index of the texture in the textures array to get the base array layer for
     * @returns the base array layer of the texture at the given index
     */ getBaseArrayLayer(index) {
        if (!this._textures) {
            return -1;
        }
        const texture = this._textures[index];
        const layerIndex = this._layerIndices?.[index] ?? 0;
        const faceIndex = this._faceIndices?.[index] ?? 0;
        return texture.isCube ? layerIndex * 6 + faceIndex : texture.is3D ? 0 : layerIndex;
    }
    /**
     * Gets the sample count of the render target
     */ get samples() {
        return this._samples;
    }
    /**
     * Sets the sample count of the render target
     * @param value sample count
     * @param initializeBuffers If set to true, the engine will make an initializing call to drawBuffers (only used when isMulti=true).
     * @param force true to force calling the update sample count engine function even if the current sample count is equal to value
     * @returns the sample count that has been set
     */ setSamples(value, initializeBuffers = true, force = false) {
        if (this.samples === value && !force) {
            return value;
        }
        const result = this._isMulti ? this._engine.updateMultipleRenderTargetTextureSampleCount(this, value, initializeBuffers) : this._engine.updateRenderTargetTextureSampleCount(this, value);
        this._samples = value;
        return result;
    }
    /**
     * Resolves the MSAA textures into their non-MSAA version.
     * Note that if samples equals 1 (no MSAA), no resolve is performed.
     */ resolveMSAATextures() {
        if (this.isMulti) {
            this._engine.resolveMultiFramebuffer(this);
        } else {
            this._engine.resolveFramebuffer(this);
        }
    }
    /**
     * Generates mipmaps for each texture of the render target
     */ generateMipMaps() {
        if (this._engine._currentRenderTarget === this) {
            if (this.isMulti) {
                this._engine.unBindMultiColorAttachmentFramebuffer(this, true);
            } else {
                this._engine.unBindFramebuffer(this, true);
            }
        }
        if (this.isMulti) {
            this._engine.generateMipMapsMultiFramebuffer(this);
        } else {
            this._engine.generateMipMapsFramebuffer(this);
        }
    }
    /**
     * Initializes the render target wrapper
     * @param isMulti true if the wrapper is a multi render target
     * @param isCube true if the wrapper should render to a cube texture
     * @param size size of the render target (width/height/layers)
     * @param engine engine used to create the render target
     * @param label defines the label to use for the wrapper (for debugging purpose only)
     */ constructor(isMulti, isCube, size, engine, label){
        this._textures = null;
        this._faceIndices = null;
        this._layerIndices = null;
        /** @internal */ this._samples = 1;
        /** @internal */ this._attachments = null;
        /** @internal */ this._generateStencilBuffer = false;
        /** @internal */ this._generateDepthBuffer = false;
        /** @internal */ this._depthStencilTextureWithStencil = false;
        /**
         * Sets this property to true to disable the automatic MSAA resolve that happens when the render target wrapper is unbound (default is false)
         */ this.disableAutomaticMSAAResolve = false;
        /**
         * Indicates if MSAA color texture(s) should be resolved when a resolve occur (either automatically by the engine or manually by the user) (default is true)
         * Note that you can trigger a MSAA resolve at any time by calling resolveMSAATextures()
         */ this.resolveMSAAColors = true;
        /**
         * Indicates if MSAA depth texture should be resolved when a resolve occur (either automatically by the engine or manually by the user) (default is false)
         */ this.resolveMSAADepth = false;
        /**
         * Indicates if MSAA stencil texture should be resolved when a resolve occur (either automatically by the engine or manually by the user) (default is false)
         */ this.resolveMSAAStencil = false;
        /**
         * Indicates if the depth texture is in read-only mode (may allow some optimizations in WebGPU)
         */ this.depthReadOnly = false;
        /**
         * Indicates if the stencil texture is in read-only mode (may allow some optimizations in WebGPU)
         */ this.stencilReadOnly = false;
        this._isMulti = isMulti;
        this._isCube = isCube;
        this._size = size;
        this._engine = engine;
        this._depthStencilTexture = null;
        this.label = label;
    }
    /**
     * Sets the render target texture(s)
     * @param textures texture(s) to set
     */ setTextures(textures) {
        if (Array.isArray(textures)) {
            this._textures = textures;
        } else if (textures) {
            this._textures = [
                textures
            ];
        } else {
            this._textures = null;
        }
    }
    /**
     * Set a texture in the textures array
     * @param texture The texture to set
     * @param index The index in the textures array to set
     * @param disposePrevious If this function should dispose the previous texture
     */ setTexture(texture, index = 0, disposePrevious = true) {
        if (!this._textures) {
            this._textures = [];
        }
        if (this._textures[index] === texture) {
            return;
        }
        if (this._textures[index] && disposePrevious) {
            this._textures[index].dispose();
        }
        this._textures[index] = texture;
    }
    /**
     * Sets the layer and face indices of every render target texture bound to each color attachment
     * @param layers The layers of each texture to be set
     * @param faces The faces of each texture to be set
     */ setLayerAndFaceIndices(layers, faces) {
        this._layerIndices = layers;
        this._faceIndices = faces;
    }
    /**
     * Sets the layer and face indices of a texture in the textures array that should be bound to each color attachment
     * @param index The index of the texture in the textures array to modify
     * @param layer The layer of the texture to be set
     * @param face The face of the texture to be set
     */ setLayerAndFaceIndex(index = 0, layer, face) {
        if (!this._layerIndices) {
            this._layerIndices = [];
        }
        if (!this._faceIndices) {
            this._faceIndices = [];
        }
        if (layer !== undefined && layer >= 0) {
            this._layerIndices[index] = layer;
        }
        if (face !== undefined && face >= 0) {
            this._faceIndices[index] = face;
        }
    }
    /**
     * Creates the depth/stencil texture
     * @param comparisonFunction Comparison function to use for the texture
     * @param bilinearFiltering true if bilinear filtering should be used when sampling the texture
     * @param generateStencil Not used anymore. "format" will be used to determine if stencil should be created
     * @param samples sample count to use when creating the texture (default: 1)
     * @param format format of the depth texture (default: 14)
     * @param label defines the label to use for the texture (for debugging purpose only)
     * @returns the depth/stencil created texture
     */ createDepthStencilTexture(comparisonFunction = 0, bilinearFiltering = true, generateStencil = false, samples = 1, format = 14, label) {
        this._depthStencilTexture?.dispose();
        this._depthStencilTextureWithStencil = generateStencil;
        this._depthStencilTextureLabel = label;
        this._depthStencilTexture = this._engine.createDepthStencilTexture(this._size, {
            bilinearFiltering,
            comparisonFunction,
            generateStencil,
            isCube: this._isCube,
            samples,
            depthTextureFormat: format,
            label
        }, this);
        return this._depthStencilTexture;
    }
    /**
     * @deprecated Use shareDepth instead
     * @param renderTarget Destination renderTarget
     */ _shareDepth(renderTarget) {
        this.shareDepth(renderTarget);
    }
    /**
     * Shares the depth buffer of this render target with another render target.
     * @param renderTarget Destination renderTarget
     */ shareDepth(renderTarget) {
        if (this._depthStencilTexture) {
            if (renderTarget._depthStencilTexture) {
                renderTarget._depthStencilTexture.dispose();
            }
            renderTarget._depthStencilTexture = this._depthStencilTexture;
            renderTarget._depthStencilTextureWithStencil = this._depthStencilTextureWithStencil;
            this._depthStencilTexture.incrementReferences();
        }
    }
    /**
     * @internal
     */ _swapAndDie(target) {
        if (this.texture) {
            this.texture._swapAndDie(target);
        }
        this._textures = null;
        this.dispose(true);
    }
    _cloneRenderTargetWrapper() {
        let rtw = null;
        if (this._isMulti) {
            const textureArray = this.textures;
            if (textureArray && textureArray.length > 0) {
                let generateDepthTexture = false;
                let textureCount = textureArray.length;
                let depthTextureFormat = -1;
                const lastTextureSource = textureArray[textureArray.length - 1]._source;
                if (lastTextureSource === 14 /* InternalTextureSource.Depth */  || lastTextureSource === 12 /* InternalTextureSource.DepthStencil */ ) {
                    generateDepthTexture = true;
                    depthTextureFormat = textureArray[textureArray.length - 1].format;
                    textureCount--;
                }
                const samplingModes = [];
                const types = [];
                const formats = [];
                const targetTypes = [];
                const faceIndex = [];
                const layerIndex = [];
                const layerCounts = [];
                const internalTexture2Index = {};
                for(let i = 0; i < textureCount; ++i){
                    const texture = textureArray[i];
                    samplingModes.push(texture.samplingMode);
                    types.push(texture.type);
                    formats.push(texture.format);
                    const index = internalTexture2Index[texture.uniqueId];
                    if (index !== undefined) {
                        targetTypes.push(-1);
                        layerCounts.push(0);
                    } else {
                        internalTexture2Index[texture.uniqueId] = i;
                        if (texture.is2DArray) {
                            targetTypes.push(35866);
                            layerCounts.push(texture.depth);
                        } else if (texture.isCube) {
                            targetTypes.push(34067);
                            layerCounts.push(0);
                        } else if (texture.is3D) {
                            targetTypes.push(32879);
                            layerCounts.push(texture.depth);
                        } else {
                            targetTypes.push(3553);
                            layerCounts.push(0);
                        }
                    }
                    if (this._faceIndices) {
                        faceIndex.push(this._faceIndices[i] ?? 0);
                    }
                    if (this._layerIndices) {
                        layerIndex.push(this._layerIndices[i] ?? 0);
                    }
                }
                const optionsMRT = {
                    samplingModes,
                    generateMipMaps: textureArray[0].generateMipMaps,
                    generateDepthBuffer: this._generateDepthBuffer,
                    generateStencilBuffer: this._generateStencilBuffer,
                    generateDepthTexture,
                    depthTextureFormat,
                    types,
                    formats,
                    textureCount,
                    targetTypes,
                    faceIndex,
                    layerIndex,
                    layerCounts,
                    label: this.label
                };
                const size = {
                    width: this.width,
                    height: this.height,
                    depth: this.depth
                };
                rtw = this._engine.createMultipleRenderTarget(size, optionsMRT);
                for(let i = 0; i < textureCount; ++i){
                    if (targetTypes[i] !== -1) {
                        continue;
                    }
                    const index = internalTexture2Index[textureArray[i].uniqueId];
                    rtw.setTexture(rtw.textures[index], i);
                }
            }
        } else {
            const options = {};
            options.generateDepthBuffer = this._generateDepthBuffer;
            options.generateMipMaps = this.texture?.generateMipMaps ?? false;
            options.generateStencilBuffer = this._generateStencilBuffer;
            options.samplingMode = this.texture?.samplingMode;
            options.type = this.texture?.type;
            options.format = this.texture?.format;
            options.noColorAttachment = !this._textures;
            options.label = this.label;
            if (this.isCube) {
                rtw = this._engine.createRenderTargetCubeTexture(this.width, options);
            } else {
                const size = {
                    width: this.width,
                    height: this.height,
                    layers: this.is2DArray || this.is3D ? this.texture?.depth : undefined
                };
                rtw = this._engine.createRenderTargetTexture(size, options);
            }
            if (rtw.texture) {
                rtw.texture.isReady = true;
            }
        }
        return rtw;
    }
    _swapRenderTargetWrapper(target) {
        if (this._textures && target._textures) {
            for(let i = 0; i < this._textures.length; ++i){
                this._textures[i]._swapAndDie(target._textures[i], false);
                target._textures[i].isReady = true;
            }
        }
        if (this._depthStencilTexture && target._depthStencilTexture) {
            this._depthStencilTexture._swapAndDie(target._depthStencilTexture);
            target._depthStencilTexture.isReady = true;
        }
        this._textures = null;
        this._depthStencilTexture = null;
    }
    /** @internal */ _rebuild() {
        const rtw = this._cloneRenderTargetWrapper();
        if (!rtw) {
            return;
        }
        if (this._depthStencilTexture) {
            const samplingMode = this._depthStencilTexture.samplingMode;
            const format = this._depthStencilTexture.format;
            const bilinear = samplingMode === 2 || samplingMode === 3 || samplingMode === 11;
            rtw.createDepthStencilTexture(this._depthStencilTexture._comparisonFunction, bilinear, this._depthStencilTextureWithStencil, this._depthStencilTexture.samples, format, this._depthStencilTextureLabel);
        }
        if (this.samples > 1) {
            rtw.setSamples(this.samples);
        }
        rtw._swapRenderTargetWrapper(this);
        rtw.dispose();
    }
    /**
     * Releases the internal render textures
     */ releaseTextures() {
        if (this._textures) {
            for(let i = 0; i < this._textures.length; ++i){
                this._textures[i].dispose();
            }
        }
        this._textures = null;
    }
    /**
     * Disposes the whole render target wrapper
     * @param disposeOnlyFramebuffers true if only the frame buffers should be released (used for the WebGL engine). If false, all the textures will also be released
     */ dispose(disposeOnlyFramebuffers = false) {
        if (!disposeOnlyFramebuffers) {
            this._depthStencilTexture?.dispose();
            this._depthStencilTexture = null;
            this.releaseTextures();
        }
        this._engine._releaseRenderTargetWrapper(this);
    }
} //# sourceMappingURL=renderTargetWrapper.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/AbstractEngine/abstractEngine.texture.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/abstractEngine.js [app-ssr] (ecmascript)");
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].prototype.createDepthStencilTexture = function(size, options, rtWrapper) {
    if (options.isCube) {
        const width = size.width || size;
        return this._createDepthStencilCubeTexture(width, options);
    } else {
        return this._createDepthStencilTexture(size, options, rtWrapper);
    }
}; //# sourceMappingURL=abstractEngine.texture.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/AbstractEngine/abstractEngine.loadingScreen.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$domManagement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/domManagement.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/abstractEngine.js [app-ssr] (ecmascript)");
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].prototype.displayLoadingUI = function() {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$domManagement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IsWindowObjectExist"])()) {
        return;
    }
    const loadingScreen = this.loadingScreen;
    if (loadingScreen) {
        loadingScreen.displayLoadingUI();
    }
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].prototype.hideLoadingUI = function() {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$domManagement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IsWindowObjectExist"])()) {
        return;
    }
    const loadingScreen = this._loadingScreen;
    if (loadingScreen) {
        loadingScreen.hideLoadingUI();
    }
};
Object.defineProperty(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].prototype, "loadingScreen", {
    get: function() {
        if (!this._loadingScreen && this._renderingCanvas) {
            this._loadingScreen = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].DefaultLoadingScreenFactory(this._renderingCanvas);
        }
        return this._loadingScreen;
    },
    set: function(value) {
        this._loadingScreen = value;
    },
    enumerable: true,
    configurable: true
});
Object.defineProperty(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].prototype, "loadingUIText", {
    set: function(value) {
        this.loadingScreen.loadingUIText = value;
    },
    enumerable: true,
    configurable: true
});
Object.defineProperty(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].prototype, "loadingUIBackgroundColor", {
    set: function(value) {
        this.loadingScreen.loadingUIBackgroundColor = value;
    },
    enumerable: true,
    configurable: true
}); //# sourceMappingURL=abstractEngine.loadingScreen.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/AbstractEngine/abstractEngine.dom.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/abstractEngine.js [app-ssr] (ecmascript)");
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].prototype.getInputElement = function() {
    return this._renderingCanvas;
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].prototype.getRenderingCanvasClientRect = function() {
    if (!this._renderingCanvas) {
        return null;
    }
    return this._renderingCanvas.getBoundingClientRect();
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].prototype.getInputElementClientRect = function() {
    if (!this._renderingCanvas) {
        return null;
    }
    return this.getInputElement().getBoundingClientRect();
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].prototype.getAspectRatio = function(viewportOwner, useScreen = false) {
    const viewport = viewportOwner.viewport;
    return this.getRenderWidth(useScreen) * viewport.width / (this.getRenderHeight(useScreen) * viewport.height);
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].prototype.getScreenAspectRatio = function() {
    return this.getRenderWidth(true) / this.getRenderHeight(true);
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].prototype._verifyPointerLock = function() {
    this._onPointerLockChange?.();
}; //# sourceMappingURL=abstractEngine.dom.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/AbstractEngine/abstractEngine.alpha.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/abstractEngine.js [app-ssr] (ecmascript)");
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].prototype.setAlphaEquation = function(equation, targetIndex = 0) {
    if (this._alphaEquation[targetIndex] === equation) {
        return;
    }
    switch(equation){
        case 0:
            this._alphaState.setAlphaEquationParameters(32774, 32774, targetIndex);
            break;
        case 1:
            this._alphaState.setAlphaEquationParameters(32778, 32778, targetIndex);
            break;
        case 2:
            this._alphaState.setAlphaEquationParameters(32779, 32779, targetIndex);
            break;
        case 3:
            this._alphaState.setAlphaEquationParameters(32776, 32776, targetIndex);
            break;
        case 4:
            this._alphaState.setAlphaEquationParameters(32775, 32775, targetIndex);
            break;
        case 5:
            this._alphaState.setAlphaEquationParameters(32775, 32774, targetIndex);
            break;
    }
    this._alphaEquation[targetIndex] = equation;
}; //# sourceMappingURL=abstractEngine.alpha.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/AbstractEngine/abstractEngine.states.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/abstractEngine.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$AbstractEngine$2f$abstractEngine$2e$alpha$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/AbstractEngine/abstractEngine.alpha.js [app-ssr] (ecmascript)");
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].prototype.getInputElement = function() {
    return this._renderingCanvas;
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].prototype.getDepthFunction = function() {
    return this._depthCullingState.depthFunc;
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].prototype.setDepthFunction = function(depthFunc) {
    this._depthCullingState.depthFunc = depthFunc;
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].prototype.setDepthFunctionToGreater = function() {
    this.setDepthFunction(516);
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].prototype.setDepthFunctionToGreaterOrEqual = function() {
    this.setDepthFunction(518);
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].prototype.setDepthFunctionToLess = function() {
    this.setDepthFunction(513);
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].prototype.setDepthFunctionToLessOrEqual = function() {
    this.setDepthFunction(515);
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].prototype.getDepthWrite = function() {
    return this._depthCullingState.depthMask;
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].prototype.setDepthWrite = function(enable) {
    this._depthCullingState.depthMask = enable;
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].prototype.setAlphaConstants = function(r, g, b, a) {
    this._alphaState.setAlphaBlendConstants(r, g, b, a);
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].prototype.getAlphaMode = function(targetIndex = 0) {
    return this._alphaMode[targetIndex];
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].prototype.getAlphaEquation = function(targetIndex = 0) {
    return this._alphaEquation[targetIndex];
}; //# sourceMappingURL=abstractEngine.states.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/AbstractEngine/abstractEngine.stencil.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/abstractEngine.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$AbstractEngine$2f$abstractEngine$2e$alpha$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/AbstractEngine/abstractEngine.alpha.js [app-ssr] (ecmascript)");
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].prototype.getStencilBuffer = function() {
    return this._stencilState.stencilTest;
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].prototype.setStencilBuffer = function(enable) {
    this._stencilState.stencilTest = enable;
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].prototype.getStencilMask = function() {
    return this._stencilState.stencilMask;
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].prototype.setStencilMask = function(mask) {
    this._stencilState.stencilMask = mask;
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].prototype.getStencilFunction = function() {
    return this._stencilState.stencilFunc;
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].prototype.getStencilBackFunction = function() {
    return this._stencilState.stencilBackFunc;
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].prototype.getStencilFunctionReference = function() {
    return this._stencilState.stencilFuncRef;
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].prototype.getStencilFunctionMask = function() {
    return this._stencilState.stencilFuncMask;
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].prototype.setStencilFunction = function(stencilFunc) {
    this._stencilState.stencilFunc = stencilFunc;
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].prototype.setStencilBackFunction = function(stencilFunc) {
    this._stencilState.stencilBackFunc = stencilFunc;
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].prototype.setStencilFunctionReference = function(reference) {
    this._stencilState.stencilFuncRef = reference;
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].prototype.setStencilFunctionMask = function(mask) {
    this._stencilState.stencilFuncMask = mask;
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].prototype.getStencilOperationFail = function() {
    return this._stencilState.stencilOpStencilFail;
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].prototype.getStencilBackOperationFail = function() {
    return this._stencilState.stencilBackOpStencilFail;
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].prototype.getStencilOperationDepthFail = function() {
    return this._stencilState.stencilOpDepthFail;
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].prototype.getStencilBackOperationDepthFail = function() {
    return this._stencilState.stencilBackOpDepthFail;
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].prototype.getStencilOperationPass = function() {
    return this._stencilState.stencilOpStencilDepthPass;
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].prototype.getStencilBackOperationPass = function() {
    return this._stencilState.stencilBackOpStencilDepthPass;
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].prototype.setStencilOperationFail = function(operation) {
    this._stencilState.stencilOpStencilFail = operation;
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].prototype.setStencilBackOperationFail = function(operation) {
    this._stencilState.stencilBackOpStencilFail = operation;
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].prototype.setStencilOperationDepthFail = function(operation) {
    this._stencilState.stencilOpDepthFail = operation;
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].prototype.setStencilBackOperationDepthFail = function(operation) {
    this._stencilState.stencilBackOpDepthFail = operation;
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].prototype.setStencilOperationPass = function(operation) {
    this._stencilState.stencilOpStencilDepthPass = operation;
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].prototype.setStencilBackOperationPass = function(operation) {
    this._stencilState.stencilBackOpStencilDepthPass = operation;
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].prototype.cacheStencilState = function() {
    this._cachedStencilBuffer = this.getStencilBuffer();
    this._cachedStencilFunction = this.getStencilFunction();
    this._cachedStencilMask = this.getStencilMask();
    this._cachedStencilOperationPass = this.getStencilOperationPass();
    this._cachedStencilOperationFail = this.getStencilOperationFail();
    this._cachedStencilOperationDepthFail = this.getStencilOperationDepthFail();
    this._cachedStencilReference = this.getStencilFunctionReference();
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].prototype.restoreStencilState = function() {
    this.setStencilFunction(this._cachedStencilFunction);
    this.setStencilMask(this._cachedStencilMask);
    this.setStencilBuffer(this._cachedStencilBuffer);
    this.setStencilOperationPass(this._cachedStencilOperationPass);
    this.setStencilOperationFail(this._cachedStencilOperationFail);
    this.setStencilOperationDepthFail(this._cachedStencilOperationDepthFail);
    this.setStencilFunctionReference(this._cachedStencilReference);
}; //# sourceMappingURL=abstractEngine.stencil.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/AbstractEngine/abstractEngine.renderPass.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/abstractEngine.js [app-ssr] (ecmascript)");
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].prototype.getRenderPassNames = function() {
    return this._renderPassNames;
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].prototype.getCurrentRenderPassName = function() {
    return this._renderPassNames[this.currentRenderPassId];
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].prototype.createRenderPassId = function(name) {
    // Note: render pass id == 0 is always for the main render pass
    const id = ++__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"]._RenderPassIdCounter;
    this._renderPassNames[id] = name ?? "NONAME";
    return id;
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].prototype.releaseRenderPassId = function(id) {
    this._renderPassNames[id] = undefined;
    for(let s = 0; s < this.scenes.length; ++s){
        const scene = this.scenes[s];
        for(let m = 0; m < scene.meshes.length; ++m){
            const mesh = scene.meshes[m];
            if (mesh.subMeshes) {
                for(let b = 0; b < mesh.subMeshes.length; ++b){
                    const subMesh = mesh.subMeshes[b];
                    subMesh._removeDrawWrapper(id);
                }
            }
        }
    }
}; //# sourceMappingURL=abstractEngine.renderPass.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/AbstractEngine/abstractEngine.cubeTexture.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$internalTexture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/internalTexture.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$fileTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/fileTools.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$guid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/guid.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/abstractEngine.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$textureLoaderManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Loaders/textureLoaderManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$urlTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/urlTools.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].prototype._partialLoadFile = function(url, index, loadedFiles, onfinish, onErrorCallBack = null) {
    const onload = (data)=>{
        loadedFiles[index] = data;
        loadedFiles._internalCount++;
        if (loadedFiles._internalCount === 6) {
            onfinish(loadedFiles);
        }
    };
    const onerror = (request, exception)=>{
        if (onErrorCallBack && request) {
            onErrorCallBack(request.status + " " + request.statusText, exception);
        }
    };
    this._loadFile(url, onload, undefined, undefined, true, onerror);
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].prototype._cascadeLoadFiles = function(scene, onfinish, files, onError = null) {
    const loadedFiles = [];
    loadedFiles._internalCount = 0;
    for(let index = 0; index < 6; index++){
        this._partialLoadFile(files[index], index, loadedFiles, onfinish, onError);
    }
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].prototype._cascadeLoadImgs = function(scene, texture, onfinish, files, onError = null, mimeType) {
    const loadedImages = [];
    loadedImages._internalCount = 0;
    for(let index = 0; index < 6; index++){
        this._partialLoadImg(files[index], index, loadedImages, scene, texture, onfinish, onError, mimeType);
    }
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].prototype._partialLoadImg = function(url, index, loadedImages, scene, texture, onfinish, onErrorCallBack = null, mimeType) {
    const tokenPendingData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$guid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RandomGUID"])();
    const onload = (img)=>{
        loadedImages[index] = img;
        loadedImages._internalCount++;
        if (scene) {
            scene.removePendingData(tokenPendingData);
        }
        if (loadedImages._internalCount === 6 && onfinish) {
            onfinish(texture, loadedImages);
        }
    };
    const onerror = (message, exception)=>{
        if (scene) {
            scene.removePendingData(tokenPendingData);
        }
        if (onErrorCallBack) {
            onErrorCallBack(message, exception);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$fileTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LoadImage"])(url, onload, onerror, scene ? scene.offlineProvider : null, mimeType);
    if (scene) {
        scene.addPendingData(tokenPendingData);
    }
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].prototype.createCubeTextureBase = function(rootUrl, scene, files, noMipmap, onLoad = null, onError = null, format, forcedExtension = null, createPolynomials = false, lodScale = 0, lodOffset = 0, fallback = null, beforeLoadCubeDataCallback = null, imageHandler = null, useSRGBBuffer = false, buffer = null) {
    const texture = fallback ? fallback : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$internalTexture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InternalTexture"](this, 7 /* InternalTextureSource.Cube */ );
    texture.isCube = true;
    texture.url = rootUrl;
    texture.generateMipMaps = !noMipmap;
    texture._lodGenerationScale = lodScale;
    texture._lodGenerationOffset = lodOffset;
    texture._useSRGBBuffer = !!useSRGBBuffer && this._caps.supportSRGBBuffers && (this.version > 1 || this.isWebGPU || !!noMipmap);
    if (texture !== fallback) {
        texture.label = rootUrl.substring(0, 60); // default label, can be overriden by the caller
    }
    if (!this._doNotHandleContextLost) {
        texture._extension = forcedExtension;
        texture._files = files;
        texture._buffer = buffer;
    }
    const originalRootUrl = rootUrl;
    if (this._transformTextureUrl && !fallback) {
        rootUrl = this._transformTextureUrl(rootUrl);
    }
    const extension = forcedExtension ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$urlTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GetExtensionFromUrl"])(rootUrl);
    const loaderPromise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$textureLoaderManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_GetCompatibleTextureLoader"])(extension);
    const localOnError = (message, exception)=>{
        // if an error was thrown during load, dispose the texture, otherwise it will stay in the cache
        texture.dispose();
        if (onError) {
            onError(message, exception);
        } else if (message) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn(message);
        }
    };
    const onInternalError = (request, exception)=>{
        if (rootUrl === originalRootUrl) {
            if (request) {
                localOnError(request.status + " " + request.statusText, exception);
            }
        } else {
            // fall back to the original url if the transformed url fails to load
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn(`Failed to load ${rootUrl}, falling back to the ${originalRootUrl}`);
            this.createCubeTextureBase(originalRootUrl, scene, files, !!noMipmap, onLoad, localOnError, format, forcedExtension, createPolynomials, lodScale, lodOffset, texture, beforeLoadCubeDataCallback, imageHandler, useSRGBBuffer, buffer);
        }
    };
    if (loaderPromise) {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises, github/no-then
        loaderPromise.then((loader)=>{
            const onLoadData = (data)=>{
                if (beforeLoadCubeDataCallback) {
                    beforeLoadCubeDataCallback(texture, data);
                }
                loader.loadCubeData(data, texture, createPolynomials, onLoad, (message, exception)=>{
                    localOnError(message, exception);
                });
            };
            if (buffer) {
                onLoadData(buffer);
            } else if (files && files.length === 6) {
                if (loader.supportCascades) {
                    this._cascadeLoadFiles(scene, (images)=>onLoadData(images.map((image)=>new Uint8Array(image))), files, localOnError);
                } else {
                    localOnError("Textures type does not support cascades.");
                }
            } else {
                this._loadFile(rootUrl, (data)=>onLoadData(new Uint8Array(data)), undefined, scene ? scene.offlineProvider || null : undefined, true, onInternalError);
            }
        });
    } else {
        if (!files || files.length === 0) {
            throw new Error("Cannot load cubemap because files were not defined, or the correct loader was not found.");
        }
        this._cascadeLoadImgs(scene, texture, (texture, imgs)=>{
            if (imageHandler) {
                imageHandler(texture, imgs);
            }
        }, files, localOnError);
    }
    this._internalTexturesCache.push(texture);
    return texture;
}; //# sourceMappingURL=abstractEngine.cubeTexture.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/AbstractEngine/abstractEngine.timeQuery.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/abstractEngine.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$perfCounter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/perfCounter.js [app-ssr] (ecmascript)");
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].prototype.getGPUFrameTimeCounter = function() {
    if (!this._gpuFrameTime) {
        this._gpuFrameTime = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$perfCounter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PerfCounter"]();
    }
    return this._gpuFrameTime;
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].prototype.captureGPUFrameTime = function(value) {
// Do nothing. Must be implemented by child classes
}; //# sourceMappingURL=abstractEngine.timeQuery.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/AbstractEngine/abstractEngine.query.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_OcclusionDataStorage",
    ()=>_OcclusionDataStorage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$abstractMesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/abstractMesh.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/abstractEngine.js [app-ssr] (ecmascript)");
;
;
class _OcclusionDataStorage {
    constructor(){
        /** @internal */ this.occlusionInternalRetryCounter = 0;
        /** @internal */ this.isOcclusionQueryInProgress = false;
        /** @internal */ this.isOccluded = false;
        /** @internal */ this.occlusionRetryCount = -1;
        /** @internal */ this.occlusionType = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$abstractMesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractMesh"].OCCLUSION_TYPE_NONE;
        /** @internal */ this.occlusionQueryAlgorithmType = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$abstractMesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractMesh"].OCCLUSION_ALGORITHM_TYPE_CONSERVATIVE;
        /** @internal */ this.forceRenderingWhenOccluded = false;
    }
}
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].prototype.createQuery = function() {
    return null;
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].prototype.deleteQuery = function(query) {
    // Do nothing. Must be implemented by child classes
    return this;
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].prototype.isQueryResultAvailable = function(query) {
    // Do nothing. Must be implemented by child classes
    return false;
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].prototype.getQueryResult = function(query) {
    // Do nothing. Must be implemented by child classes
    return 0;
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].prototype.beginOcclusionQuery = function(algorithmType, query) {
    // Do nothing. Must be implemented by child classes
    return false;
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].prototype.endOcclusionQuery = function(algorithmType) {
    // Do nothing. Must be implemented by child classes
    return this;
};
Object.defineProperty(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$abstractMesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractMesh"].prototype, "isOcclusionQueryInProgress", {
    get: function() {
        return this._occlusionDataStorage.isOcclusionQueryInProgress;
    },
    set: function(value) {
        this._occlusionDataStorage.isOcclusionQueryInProgress = value;
    },
    enumerable: false,
    configurable: true
});
Object.defineProperty(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$abstractMesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractMesh"].prototype, "_occlusionDataStorage", {
    get: function() {
        if (!this.__occlusionDataStorage) {
            this.__occlusionDataStorage = new _OcclusionDataStorage();
        }
        return this.__occlusionDataStorage;
    },
    enumerable: false,
    configurable: true
});
Object.defineProperty(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$abstractMesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractMesh"].prototype, "isOccluded", {
    get: function() {
        return this._occlusionDataStorage.isOccluded;
    },
    set: function(value) {
        this._occlusionDataStorage.isOccluded = value;
    },
    enumerable: true,
    configurable: true
});
Object.defineProperty(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$abstractMesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractMesh"].prototype, "occlusionQueryAlgorithmType", {
    get: function() {
        return this._occlusionDataStorage.occlusionQueryAlgorithmType;
    },
    set: function(value) {
        this._occlusionDataStorage.occlusionQueryAlgorithmType = value;
    },
    enumerable: true,
    configurable: true
});
Object.defineProperty(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$abstractMesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractMesh"].prototype, "occlusionType", {
    get: function() {
        return this._occlusionDataStorage.occlusionType;
    },
    set: function(value) {
        this._occlusionDataStorage.occlusionType = value;
    },
    enumerable: true,
    configurable: true
});
Object.defineProperty(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$abstractMesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractMesh"].prototype, "occlusionRetryCount", {
    get: function() {
        return this._occlusionDataStorage.occlusionRetryCount;
    },
    set: function(value) {
        this._occlusionDataStorage.occlusionRetryCount = value;
    },
    enumerable: true,
    configurable: true
});
Object.defineProperty(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$abstractMesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractMesh"].prototype, "forceRenderingWhenOccluded", {
    get: function() {
        return this._occlusionDataStorage.forceRenderingWhenOccluded;
    },
    set: function(value) {
        this._occlusionDataStorage.forceRenderingWhenOccluded = value;
    },
    enumerable: true,
    configurable: true
});
// We also need to update AbstractMesh as there is a portion of the code there
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$abstractMesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractMesh"].prototype._checkOcclusionQuery = function() {
    const dataStorage = this._occlusionDataStorage;
    if (dataStorage.occlusionType === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$abstractMesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractMesh"].OCCLUSION_TYPE_NONE) {
        dataStorage.isOccluded = false;
        return false;
    }
    const engine = this.getEngine();
    if (!engine.getCaps().supportOcclusionQuery) {
        dataStorage.isOccluded = false;
        return false;
    }
    if (!engine.isQueryResultAvailable) {
        // Occlusion query where not referenced
        dataStorage.isOccluded = false;
        return false;
    }
    if (this.isOcclusionQueryInProgress && this._occlusionQuery !== null && this._occlusionQuery !== undefined) {
        const isOcclusionQueryAvailable = engine.isQueryResultAvailable(this._occlusionQuery);
        if (isOcclusionQueryAvailable) {
            const occlusionQueryResult = engine.getQueryResult(this._occlusionQuery);
            dataStorage.isOcclusionQueryInProgress = false;
            dataStorage.occlusionInternalRetryCounter = 0;
            dataStorage.isOccluded = occlusionQueryResult > 0 ? false : true;
        } else {
            dataStorage.occlusionInternalRetryCounter++;
            if (dataStorage.occlusionRetryCount !== -1 && dataStorage.occlusionInternalRetryCounter > dataStorage.occlusionRetryCount) {
                dataStorage.isOcclusionQueryInProgress = false;
                dataStorage.occlusionInternalRetryCounter = 0;
                // if optimistic set isOccluded to false regardless of the status of isOccluded. (Render in the current render loop)
                // if strict continue the last state of the object.
                dataStorage.isOccluded = dataStorage.occlusionType === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$abstractMesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractMesh"].OCCLUSION_TYPE_OPTIMISTIC ? false : dataStorage.isOccluded;
            } else {
                return dataStorage.occlusionType === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$abstractMesh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractMesh"].OCCLUSION_TYPE_OPTIMISTIC ? false : dataStorage.isOccluded;
            }
        }
    }
    const scene = this.getScene();
    if (scene.getBoundingBoxRenderer) {
        const occlusionBoundingBoxRenderer = scene.getBoundingBoxRenderer();
        if (this._occlusionQuery === null) {
            this._occlusionQuery = engine.createQuery();
        }
        if (this._occlusionQuery && engine.beginOcclusionQuery(dataStorage.occlusionQueryAlgorithmType, this._occlusionQuery)) {
            occlusionBoundingBoxRenderer.renderOcclusionBoundingBox(this);
            engine.endOcclusionQuery(dataStorage.occlusionQueryAlgorithmType);
            this._occlusionDataStorage.isOcclusionQueryInProgress = true;
        }
    }
    return dataStorage.isOccluded;
}; //# sourceMappingURL=abstractEngine.query.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/AbstractEngine/abstractEngine.views.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EngineView",
    ()=>EngineView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/abstractEngine.js [app-ssr] (ecmascript)");
;
;
class EngineView {
}
const OnBeforeViewRenderObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
const OnAfterViewRenderObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
Object.defineProperty(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].prototype, "onBeforeViewRenderObservable", {
    get: function() {
        return OnBeforeViewRenderObservable;
    }
});
Object.defineProperty(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].prototype, "onAfterViewRenderObservable", {
    get: function() {
        return OnAfterViewRenderObservable;
    }
});
Object.defineProperty(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].prototype, "inputElement", {
    get: function() {
        return this._inputElement;
    },
    set: function(value) {
        if (this._inputElement !== value) {
            this._inputElement = value;
            this._onEngineViewChanged?.();
        }
    }
});
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].prototype.getInputElement = function() {
    return this.inputElement || this.getRenderingCanvas();
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].prototype.registerView = function(canvas, camera, clearBeforeCopy) {
    if (!this.views) {
        this.views = [];
    }
    for (const view of this.views){
        if (view.target === canvas) {
            return view;
        }
    }
    const masterCanvas = this.getRenderingCanvas();
    if (masterCanvas) {
        canvas.width = masterCanvas.width;
        canvas.height = masterCanvas.height;
    }
    const newView = {
        target: canvas,
        camera,
        clearBeforeCopy,
        enabled: true,
        id: (Math.random() * 100000).toFixed()
    };
    this.views.push(newView);
    if (camera && !Array.isArray(camera)) {
        camera.onDisposeObservable.add(()=>{
            this.unRegisterView(canvas);
        });
    }
    return newView;
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].prototype.unRegisterView = function(canvas) {
    if (!this.views || this.views.length === 0) {
        return this;
    }
    for (const view of this.views){
        if (view.target === canvas) {
            const index = this.views.indexOf(view);
            if (index !== -1) {
                this.views.splice(index, 1);
            }
            break;
        }
    }
    return this;
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].prototype._renderViewStep = function(view) {
    const canvas = view.target;
    const context = canvas.getContext("2d");
    if (!context) {
        return true;
    }
    const parent = this.getRenderingCanvas();
    OnBeforeViewRenderObservable.notifyObservers(view);
    const camera = view.camera;
    let previewCamera = null;
    let previewCameras = null;
    let scene = null;
    if (camera) {
        scene = Array.isArray(camera) ? camera[0].getScene() : camera.getScene();
        previewCamera = scene.activeCamera;
        previewCameras = scene.activeCameras;
        if (Array.isArray(camera)) {
            scene.activeCameras = camera;
        } else {
            scene.activeCamera = camera;
            scene.activeCameras = null;
        }
    }
    this.activeView = view;
    if (view.customResize) {
        view.customResize(canvas);
    } else {
        // Set sizes
        const width = Math.floor(canvas.clientWidth / this._hardwareScalingLevel);
        const height = Math.floor(canvas.clientHeight / this._hardwareScalingLevel);
        const dimsChanged = width !== canvas.width || parent.width !== canvas.width || height !== canvas.height || parent.height !== canvas.height;
        if (canvas.clientWidth && canvas.clientHeight && dimsChanged) {
            canvas.width = width;
            canvas.height = height;
            this.setSize(width, height);
        }
    }
    if (!parent.width || !parent.height) {
        return false;
    }
    // Render the frame
    this._renderFrame();
    this.flushFramebuffer();
    // Copy to target
    if (view.clearBeforeCopy) {
        context.clearRect(0, 0, parent.width, parent.height);
    }
    context.drawImage(parent, 0, 0);
    // Restore
    if (scene) {
        scene.activeCameras = previewCameras;
        scene.activeCamera = previewCamera;
    }
    OnAfterViewRenderObservable.notifyObservers(view);
    return true;
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].prototype._renderViews = function() {
    if (!this.views || this.views.length === 0) {
        return false;
    }
    const parent = this.getRenderingCanvas();
    if (!parent) {
        return false;
    }
    let inputElementView;
    for (const view of this.views){
        if (!view.enabled) {
            continue;
        }
        const canvas = view.target;
        // Always render the view correspondent to the inputElement for last
        if (canvas === this.inputElement) {
            inputElementView = view;
            continue;
        }
        if (!this._renderViewStep(view)) {
            return false;
        }
    }
    if (inputElementView) {
        if (!this._renderViewStep(inputElementView)) {
            return false;
        }
    }
    this.activeView = null;
    return true;
}; //# sourceMappingURL=abstractEngine.views.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/AbstractEngine/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/* eslint-disable import/export */ __turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$AbstractEngine$2f$abstractEngine$2e$cubeTexture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/AbstractEngine/abstractEngine.cubeTexture.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$AbstractEngine$2f$abstractEngine$2e$loadingScreen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/AbstractEngine/abstractEngine.loadingScreen.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$AbstractEngine$2f$abstractEngine$2e$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/AbstractEngine/abstractEngine.dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$AbstractEngine$2f$abstractEngine$2e$states$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/AbstractEngine/abstractEngine.states.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$AbstractEngine$2f$abstractEngine$2e$stencil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/AbstractEngine/abstractEngine.stencil.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$AbstractEngine$2f$abstractEngine$2e$timeQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/AbstractEngine/abstractEngine.timeQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$AbstractEngine$2f$abstractEngine$2e$query$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/AbstractEngine/abstractEngine.query.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$AbstractEngine$2f$abstractEngine$2e$renderPass$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/AbstractEngine/abstractEngine.renderPass.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$AbstractEngine$2f$abstractEngine$2e$texture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/AbstractEngine/abstractEngine.texture.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$AbstractEngine$2f$abstractEngine$2e$alpha$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/AbstractEngine/abstractEngine.alpha.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$AbstractEngine$2f$abstractEngine$2e$views$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/AbstractEngine/abstractEngine.views.js [app-ssr] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
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
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/AbstractEngine/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EngineView",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$AbstractEngine$2f$abstractEngine$2e$views$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EngineView"],
    "_OcclusionDataStorage",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$AbstractEngine$2f$abstractEngine$2e$query$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_OcclusionDataStorage"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$AbstractEngine$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/AbstractEngine/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$AbstractEngine$2f$abstractEngine$2e$cubeTexture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/AbstractEngine/abstractEngine.cubeTexture.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$AbstractEngine$2f$abstractEngine$2e$loadingScreen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/AbstractEngine/abstractEngine.loadingScreen.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$AbstractEngine$2f$abstractEngine$2e$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/AbstractEngine/abstractEngine.dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$AbstractEngine$2f$abstractEngine$2e$states$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/AbstractEngine/abstractEngine.states.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$AbstractEngine$2f$abstractEngine$2e$stencil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/AbstractEngine/abstractEngine.stencil.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$AbstractEngine$2f$abstractEngine$2e$timeQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/AbstractEngine/abstractEngine.timeQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$AbstractEngine$2f$abstractEngine$2e$query$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/AbstractEngine/abstractEngine.query.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$AbstractEngine$2f$abstractEngine$2e$renderPass$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/AbstractEngine/abstractEngine.renderPass.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$AbstractEngine$2f$abstractEngine$2e$texture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/AbstractEngine/abstractEngine.texture.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$AbstractEngine$2f$abstractEngine$2e$alpha$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/AbstractEngine/abstractEngine.alpha.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$AbstractEngine$2f$abstractEngine$2e$views$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/AbstractEngine/abstractEngine.views.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/engine.common.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CreateImageBitmapFromSource",
    ()=>CreateImageBitmapFromSource,
    "ExitFullscreen",
    ()=>ExitFullscreen,
    "ExitPointerlock",
    ()=>ExitPointerlock,
    "GetFontOffset",
    ()=>GetFontOffset,
    "RequestFullscreen",
    ()=>RequestFullscreen,
    "RequestPointerlock",
    ()=>RequestPointerlock,
    "ResizeImageBitmap",
    ()=>ResizeImageBitmap,
    "_CommonDispose",
    ()=>_CommonDispose,
    "_CommonInit",
    ()=>_CommonInit
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$domManagement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/domManagement.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/abstractEngine.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/engineStore.js [app-ssr] (ecmascript)");
;
;
;
/** @internal */ function DisableTouchAction(canvas) {
    if (!canvas || !canvas.setAttribute) {
        return;
    }
    canvas.setAttribute("touch-action", "none");
    canvas.style.touchAction = "none";
    canvas.style.webkitTapHighlightColor = "transparent";
}
function _CommonInit(commonEngine, canvas, creationOptions) {
    commonEngine._onCanvasFocus = ()=>{
        commonEngine.onCanvasFocusObservable.notifyObservers(commonEngine);
    };
    commonEngine._onCanvasBlur = ()=>{
        commonEngine.onCanvasBlurObservable.notifyObservers(commonEngine);
    };
    commonEngine._onCanvasContextMenu = (evt)=>{
        if (commonEngine.disableContextMenu) {
            evt.preventDefault();
        }
    };
    canvas.addEventListener("focus", commonEngine._onCanvasFocus);
    canvas.addEventListener("blur", commonEngine._onCanvasBlur);
    canvas.addEventListener("contextmenu", commonEngine._onCanvasContextMenu);
    commonEngine._onBlur = ()=>{
        if (commonEngine.disablePerformanceMonitorInBackground) {
            commonEngine.performanceMonitor.disable();
        }
        commonEngine._windowIsBackground = true;
    };
    commonEngine._onFocus = ()=>{
        if (commonEngine.disablePerformanceMonitorInBackground) {
            commonEngine.performanceMonitor.enable();
        }
        commonEngine._windowIsBackground = false;
    };
    commonEngine._onCanvasPointerOut = (ev)=>{
        // Check that the element at the point of the pointer out isn't the canvas and if it isn't, notify observers
        // Note: This is a workaround for a bug with Safari
        if (document.elementFromPoint(ev.clientX, ev.clientY) !== canvas) {
            commonEngine.onCanvasPointerOutObservable.notifyObservers(ev);
        }
    };
    const hostWindow = commonEngine.getHostWindow(); // it calls IsWindowObjectExist()
    if (hostWindow && typeof hostWindow.addEventListener === "function") {
        hostWindow.addEventListener("blur", commonEngine._onBlur);
        hostWindow.addEventListener("focus", commonEngine._onFocus);
    }
    canvas.addEventListener("pointerout", commonEngine._onCanvasPointerOut);
    if (!creationOptions.doNotHandleTouchAction) {
        DisableTouchAction(canvas);
    }
    // Create Audio Engine if needed.
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].audioEngine && creationOptions.audioEngine && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].AudioEngineFactory) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].audioEngine = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].AudioEngineFactory(commonEngine.getRenderingCanvas(), commonEngine.getAudioContext(), commonEngine.getAudioDestination());
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$domManagement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IsDocumentAvailable"])()) {
        // Fullscreen
        commonEngine._onFullscreenChange = ()=>{
            commonEngine.isFullscreen = !!document.fullscreenElement;
            // Pointer lock
            if (commonEngine.isFullscreen && commonEngine._pointerLockRequested && canvas) {
                RequestPointerlock(canvas);
            }
        };
        document.addEventListener("fullscreenchange", commonEngine._onFullscreenChange, false);
        document.addEventListener("webkitfullscreenchange", commonEngine._onFullscreenChange, false);
        // Pointer lock
        commonEngine._onPointerLockChange = ()=>{
            commonEngine.isPointerLock = document.pointerLockElement === canvas;
        };
        document.addEventListener("pointerlockchange", commonEngine._onPointerLockChange, false);
        document.addEventListener("webkitpointerlockchange", commonEngine._onPointerLockChange, false);
    }
    commonEngine.enableOfflineSupport = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].OfflineProviderFactory !== undefined;
    commonEngine._deterministicLockstep = !!creationOptions.deterministicLockstep;
    commonEngine._lockstepMaxSteps = creationOptions.lockstepMaxSteps || 0;
    commonEngine._timeStep = creationOptions.timeStep || 1 / 60;
}
function _CommonDispose(commonEngine, canvas) {
    // Release audio engine
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EngineStore"].Instances.length === 1 && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].audioEngine) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].audioEngine.dispose();
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].audioEngine = null;
    }
    // Events
    const hostWindow = commonEngine.getHostWindow(); // it calls IsWindowObjectExist()
    if (hostWindow && typeof hostWindow.removeEventListener === "function") {
        hostWindow.removeEventListener("blur", commonEngine._onBlur);
        hostWindow.removeEventListener("focus", commonEngine._onFocus);
    }
    if (canvas) {
        canvas.removeEventListener("focus", commonEngine._onCanvasFocus);
        canvas.removeEventListener("blur", commonEngine._onCanvasBlur);
        canvas.removeEventListener("pointerout", commonEngine._onCanvasPointerOut);
        canvas.removeEventListener("contextmenu", commonEngine._onCanvasContextMenu);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$domManagement$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IsDocumentAvailable"])()) {
        document.removeEventListener("fullscreenchange", commonEngine._onFullscreenChange);
        document.removeEventListener("mozfullscreenchange", commonEngine._onFullscreenChange);
        document.removeEventListener("webkitfullscreenchange", commonEngine._onFullscreenChange);
        document.removeEventListener("msfullscreenchange", commonEngine._onFullscreenChange);
        document.removeEventListener("pointerlockchange", commonEngine._onPointerLockChange);
        document.removeEventListener("mspointerlockchange", commonEngine._onPointerLockChange);
        document.removeEventListener("mozpointerlockchange", commonEngine._onPointerLockChange);
        document.removeEventListener("webkitpointerlockchange", commonEngine._onPointerLockChange);
    }
}
function GetFontOffset(font) {
    const text = document.createElement("span");
    text.textContent = "Hg";
    text.style.font = font;
    const block = document.createElement("div");
    block.style.display = "inline-block";
    block.style.width = "1px";
    block.style.height = "0px";
    block.style.verticalAlign = "bottom";
    const div = document.createElement("div");
    div.style.whiteSpace = "nowrap";
    div.appendChild(text);
    div.appendChild(block);
    document.body.appendChild(div);
    let fontAscent = 0;
    let fontHeight = 0;
    try {
        fontHeight = block.getBoundingClientRect().top - text.getBoundingClientRect().top;
        block.style.verticalAlign = "baseline";
        fontAscent = block.getBoundingClientRect().top - text.getBoundingClientRect().top;
    } finally{
        document.body.removeChild(div);
    }
    return {
        ascent: fontAscent,
        height: fontHeight,
        descent: fontHeight - fontAscent
    };
}
async function CreateImageBitmapFromSource(engine, imageSource, options) {
    return await new Promise((resolve, reject)=>{
        const image = new Image();
        image.onload = ()=>{
            // eslint-disable-next-line @typescript-eslint/no-floating-promises, github/no-then
            image.decode().then(()=>{
                // eslint-disable-next-line @typescript-eslint/no-floating-promises, github/no-then
                engine.createImageBitmap(image, options).then((imageBitmap)=>{
                    resolve(imageBitmap);
                });
            });
        };
        image.onerror = ()=>{
            // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
            reject(`Error loading image ${image.src}`);
        };
        image.src = imageSource;
    });
}
function ResizeImageBitmap(engine, image, bufferWidth, bufferHeight) {
    const canvas = engine.createCanvas(bufferWidth, bufferHeight);
    const context = canvas.getContext("2d");
    if (!context) {
        throw new Error("Unable to get 2d context for resizeImageBitmap");
    }
    context.drawImage(image, 0, 0);
    // Create VertexData from map data
    // Cast is due to wrong definition in lib.d.ts from ts 1.3 - https://github.com/Microsoft/TypeScript/issues/949
    const buffer = context.getImageData(0, 0, bufferWidth, bufferHeight).data;
    return buffer;
}
function RequestFullscreen(element) {
    const requestFunction = element.requestFullscreen || element.webkitRequestFullscreen;
    if (!requestFunction) {
        return;
    }
    requestFunction.call(element);
}
function ExitFullscreen() {
    const anyDoc = document;
    if (document.exitFullscreen) {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        document.exitFullscreen();
    } else if (anyDoc.webkitCancelFullScreen) {
        anyDoc.webkitCancelFullScreen();
    }
}
function RequestPointerlock(element) {
    if (element.requestPointerLock) {
        // In some browsers, requestPointerLock returns a promise.
        // Handle possible rejections to avoid an unhandled top-level exception.
        const promise = element.requestPointerLock();
        if (promise instanceof Promise) {
            promise// eslint-disable-next-line github/no-then
            .then(()=>{
                element.focus();
            })// eslint-disable-next-line github/no-then
            .catch(()=>{});
        } else {
            element.focus();
        }
    }
}
function ExitPointerlock() {
    if (document.exitPointerLock) {
        document.exitPointerLock();
    }
} //# sourceMappingURL=engine.common.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/engine.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Engine",
    ()=>Engine
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$internalTexture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/internalTexture.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/engineStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/thinEngine.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$performanceMonitor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/performanceMonitor.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$WebGL$2f$webGLDataBuffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/WebGL/webGLDataBuffer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGL$2f$webGLHardwareTexture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGL/webGLHardwareTexture.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Extensions$2f$engine$2e$alpha$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Extensions/engine.alpha.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Extensions$2f$engine$2e$rawTexture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Extensions/engine.rawTexture.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Extensions$2f$engine$2e$readTexture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Extensions/engine.readTexture.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Extensions$2f$engine$2e$dynamicBuffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Extensions/engine.dynamicBuffer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Extensions$2f$engine$2e$cubeTexture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Extensions/engine.cubeTexture.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Extensions$2f$engine$2e$renderTarget$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Extensions/engine.renderTarget.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Extensions$2f$engine$2e$renderTargetTexture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Extensions/engine.renderTargetTexture.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Extensions$2f$engine$2e$renderTargetCube$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Extensions/engine.renderTargetCube.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Extensions$2f$engine$2e$prefilteredCubeTexture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Extensions/engine.prefilteredCubeTexture.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Extensions$2f$engine$2e$uniformBuffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Extensions/engine.uniformBuffer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$AbstractEngine$2f$abstractEngine$2e$loadingScreen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/AbstractEngine/abstractEngine.loadingScreen.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$AbstractEngine$2f$abstractEngine$2e$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/AbstractEngine/abstractEngine.dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$AbstractEngine$2f$abstractEngine$2e$states$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/AbstractEngine/abstractEngine.states.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$AbstractEngine$2f$abstractEngine$2e$stencil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/AbstractEngine/abstractEngine.stencil.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$AbstractEngine$2f$abstractEngine$2e$renderPass$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/AbstractEngine/abstractEngine.renderPass.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$AbstractEngine$2f$abstractEngine$2e$texture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/AbstractEngine/abstractEngine.texture.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/abstractEngine.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engine$2e$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/engine.common.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$perfCounter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/perfCounter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$timingTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/timingTools.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
class Engine extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ThinEngine"] {
    /**
     * Returns the current npm package of the sdk
     */ // Not mixed with Version for tooling purpose.
    static get NpmPackage() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].NpmPackage;
    }
    /**
     * Returns the current version of the framework
     */ static get Version() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].Version;
    }
    /** Gets the list of created engines */ static get Instances() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EngineStore"].Instances;
    }
    /**
     * Gets the latest created engine
     */ static get LastCreatedEngine() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EngineStore"].LastCreatedEngine;
    }
    /**
     * Gets the latest created scene
     */ static get LastCreatedScene() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EngineStore"].LastCreatedScene;
    }
    /** @internal */ // eslint-disable-next-line jsdoc/require-returns-check
    /**
     * Method called to create the default loading screen.
     * This can be overridden in your own app.
     * @param canvas The rendering canvas element
     * @returns The loading screen
     */ // eslint-disable-next-line @typescript-eslint/no-unused-vars
    static DefaultLoadingScreenFactory(canvas) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].DefaultLoadingScreenFactory(canvas);
    }
    get _supportsHardwareTextureRescaling() {
        return !!Engine._RescalePostProcessFactory;
    }
    _measureFps() {
        this._performanceMonitor.sampleFrame();
        this._fps = this._performanceMonitor.averageFPS;
        this._deltaTime = this._performanceMonitor.instantaneousFrameTime || 0;
    }
    /**
     * Gets the performance monitor attached to this engine
     * @see https://doc.babylonjs.com/features/featuresDeepDive/scene/optimize_your_scene#engineinstrumentation
     */ get performanceMonitor() {
        return this._performanceMonitor;
    }
    // Events
    /**
     * Creates a new engine
     * @param canvasOrContext defines the canvas or WebGL context to use for rendering. If you provide a WebGL context, Babylon.js will not hook events on the canvas (like pointers, keyboards, etc...) so no event observables will be available. This is mostly used when Babylon.js is used as a plugin on a system which already used the WebGL context
     * @param antialias defines enable antialiasing (default: false)
     * @param options defines further options to be sent to the getContext() function
     * @param adaptToDeviceRatio defines whether to adapt to the device's viewport characteristics (default: false)
     */ constructor(canvasOrContext, antialias, options, adaptToDeviceRatio = false){
        super(canvasOrContext, antialias, options, adaptToDeviceRatio);
        // Members
        /**
         * If set, will be used to request the next animation frame for the render loop
         */ this.customAnimationFrameRequester = null;
        this._performanceMonitor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$performanceMonitor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PerformanceMonitor"]();
        this._drawCalls = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$perfCounter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PerfCounter"]();
        if (!canvasOrContext) {
            return;
        }
        this._features.supportRenderPasses = true;
        options = this._creationOptions;
    }
    _initGLContext() {
        super._initGLContext();
        this._rescalePostProcess = null;
    }
    /**
     * Shared initialization across engines types.
     * @param canvas The canvas associated with this instance of the engine.
     */ _sharedInit(canvas) {
        super._sharedInit(canvas);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engine$2e$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_CommonInit"])(this, canvas, this._creationOptions);
    }
    /**
     * Resize an image and returns the image data as an uint8array
     * @param image image to resize
     * @param bufferWidth destination buffer width
     * @param bufferHeight destination buffer height
     * @returns an uint8array containing RGBA values of bufferWidth * bufferHeight size
     */ resizeImageBitmap(image, bufferWidth, bufferHeight) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engine$2e$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResizeImageBitmap"])(this, image, bufferWidth, bufferHeight);
    }
    /**
     * Engine abstraction for loading and creating an image bitmap from a given source string.
     * @param imageSource source to load the image from.
     * @param options An object that sets options for the image's extraction.
     * @returns ImageBitmap
     */ // eslint-disable-next-line @typescript-eslint/naming-convention
    async _createImageBitmapFromSource(imageSource, options) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engine$2e$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateImageBitmapFromSource"])(this, imageSource, options);
    }
    /**
     * Toggle full screen mode
     * @param requestPointerLock defines if a pointer lock should be requested from the user
     */ switchFullscreen(requestPointerLock) {
        if (this.isFullscreen) {
            this.exitFullscreen();
        } else {
            this.enterFullscreen(requestPointerLock);
        }
    }
    /**
     * Enters full screen mode
     * @param requestPointerLock defines if a pointer lock should be requested from the user
     */ enterFullscreen(requestPointerLock) {
        if (!this.isFullscreen) {
            this._pointerLockRequested = requestPointerLock;
            if (this._renderingCanvas) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engine$2e$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RequestFullscreen"])(this._renderingCanvas);
            }
        }
    }
    /**
     * Exits full screen mode
     */ exitFullscreen() {
        if (this.isFullscreen) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engine$2e$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ExitFullscreen"])();
        }
    }
    /** States */ /**
     * Sets a boolean indicating if the dithering state is enabled or disabled
     * @param value defines the dithering state
     */ setDitheringState(value) {
        if (value) {
            this._gl.enable(this._gl.DITHER);
        } else {
            this._gl.disable(this._gl.DITHER);
        }
    }
    /**
     * Sets a boolean indicating if the rasterizer state is enabled or disabled
     * @param value defines the rasterizer state
     */ setRasterizerState(value) {
        if (value) {
            this._gl.disable(this._gl.RASTERIZER_DISCARD);
        } else {
            this._gl.enable(this._gl.RASTERIZER_DISCARD);
        }
    }
    /**
     * Directly set the WebGL Viewport
     * @param x defines the x coordinate of the viewport (in screen space)
     * @param y defines the y coordinate of the viewport (in screen space)
     * @param width defines the width of the viewport (in screen space)
     * @param height defines the height of the viewport (in screen space)
     * @returns the current viewport Object (if any) that is being replaced by this call. You can restore this viewport later on to go back to the original state
     */ setDirectViewport(x, y, width, height) {
        const currentViewport = this._cachedViewport;
        this._cachedViewport = null;
        this._viewport(x, y, width, height);
        return currentViewport;
    }
    /**
     * Executes a scissor clear (ie. a clear on a specific portion of the screen)
     * @param x defines the x-coordinate of the bottom left corner of the clear rectangle
     * @param y defines the y-coordinate of the corner of the clear rectangle
     * @param width defines the width of the clear rectangle
     * @param height defines the height of the clear rectangle
     * @param clearColor defines the clear color
     */ scissorClear(x, y, width, height, clearColor) {
        this.enableScissor(x, y, width, height);
        this.clear(clearColor, true, true, true);
        this.disableScissor();
    }
    /**
     * Enable scissor test on a specific rectangle (ie. render will only be executed on a specific portion of the screen)
     * @param x defines the x-coordinate of the bottom left corner of the clear rectangle
     * @param y defines the y-coordinate of the corner of the clear rectangle
     * @param width defines the width of the clear rectangle
     * @param height defines the height of the clear rectangle
     */ enableScissor(x, y, width, height) {
        const gl = this._gl;
        // Change state
        gl.enable(gl.SCISSOR_TEST);
        gl.scissor(x, y, width, height);
    }
    /**
     * Disable previously set scissor test rectangle
     */ disableScissor() {
        const gl = this._gl;
        gl.disable(gl.SCISSOR_TEST);
    }
    /**
     * @internal
     */ async _loadFileAsync(url, offlineProvider, useArrayBuffer) {
        return await new Promise((resolve, reject)=>{
            this._loadFile(url, (data)=>{
                resolve(data);
            }, undefined, offlineProvider, useArrayBuffer, (request, exception)=>{
                // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
                reject(exception);
            });
        });
    }
    /**
     * Gets the source code of the vertex shader associated with a specific webGL program
     * @param program defines the program to use
     * @returns a string containing the source code of the vertex shader associated with the program
     */ getVertexShaderSource(program) {
        const shaders = this._gl.getAttachedShaders(program);
        if (!shaders) {
            return null;
        }
        return this._gl.getShaderSource(shaders[0]);
    }
    /**
     * Gets the source code of the fragment shader associated with a specific webGL program
     * @param program defines the program to use
     * @returns a string containing the source code of the fragment shader associated with the program
     */ getFragmentShaderSource(program) {
        const shaders = this._gl.getAttachedShaders(program);
        if (!shaders) {
            return null;
        }
        return this._gl.getShaderSource(shaders[1]);
    }
    /**
     * sets the object from which width and height will be taken from when getting render width and height
     * Will fallback to the gl object
     * @param dimensions the framebuffer width and height that will be used.
     */ set framebufferDimensionsObject(dimensions) {
        this._framebufferDimensionsObject = dimensions;
        if (this._framebufferDimensionsObject) {
            this.onResizeObservable.notifyObservers(this);
        }
    }
    _rebuildBuffers() {
        // Index / Vertex
        for (const scene of this.scenes){
            scene.resetCachedMaterial();
            scene._rebuildGeometries();
        }
        for (const scene of this._virtualScenes){
            scene.resetCachedMaterial();
            scene._rebuildGeometries();
        }
        super._rebuildBuffers();
    }
    /**
     * Get Font size information
     * @param font font name
     * @returns an object containing ascent, height and descent
     */ getFontOffset(font) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engine$2e$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GetFontOffset"])(font);
    }
    _cancelFrame() {
        if (this.customAnimationFrameRequester) {
            if (this._frameHandler !== 0) {
                this._frameHandler = 0;
                const { cancelAnimationFrame } = this.customAnimationFrameRequester;
                if (cancelAnimationFrame) {
                    cancelAnimationFrame(this.customAnimationFrameRequester.requestID);
                }
            }
        } else {
            super._cancelFrame();
        }
    }
    _renderLoop(timestamp) {
        this._processFrame(timestamp);
        // The first condition prevents queuing another frame if we no longer have active render loops (e.g., if
        // `stopRenderLoop` is called mid frame). The second condition prevents queuing another frame if one has
        // already been queued (e.g., if `stopRenderLoop` and `runRenderLoop` is called mid frame).
        if (this._activeRenderLoops.length > 0 && this._frameHandler === 0) {
            if (this.customAnimationFrameRequester) {
                this.customAnimationFrameRequester.requestID = this._queueNewFrame(this.customAnimationFrameRequester.renderFunction || this._boundRenderFunction, this.customAnimationFrameRequester);
                this._frameHandler = this.customAnimationFrameRequester.requestID;
            } else {
                this._frameHandler = this._queueNewFrame(this._boundRenderFunction, this.getHostWindow());
            }
        }
    }
    /**
     * Enters Pointerlock mode
     */ enterPointerlock() {
        if (this._renderingCanvas) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engine$2e$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RequestPointerlock"])(this._renderingCanvas);
        }
    }
    /**
     * Exits Pointerlock mode
     */ exitPointerlock() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engine$2e$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ExitPointerlock"])();
    }
    /**
     * Begin a new frame
     */ beginFrame() {
        this._measureFps();
        super.beginFrame();
    }
    _deletePipelineContext(pipelineContext) {
        const webGLPipelineContext = pipelineContext;
        if (webGLPipelineContext && webGLPipelineContext.program) {
            if (webGLPipelineContext.transformFeedback) {
                this.deleteTransformFeedback(webGLPipelineContext.transformFeedback);
                webGLPipelineContext.transformFeedback = null;
            }
        }
        super._deletePipelineContext(pipelineContext);
    }
    createShaderProgram(pipelineContext, vertexCode, fragmentCode, defines, context, transformFeedbackVaryings = null) {
        context = context || this._gl;
        this.onBeforeShaderCompilationObservable.notifyObservers(this);
        const program = super.createShaderProgram(pipelineContext, vertexCode, fragmentCode, defines, context, transformFeedbackVaryings);
        this.onAfterShaderCompilationObservable.notifyObservers(this);
        return program;
    }
    _createShaderProgram(pipelineContext, vertexShader, fragmentShader, context, transformFeedbackVaryings = null) {
        const shaderProgram = context.createProgram();
        pipelineContext.program = shaderProgram;
        if (!shaderProgram) {
            throw new Error("Unable to create program");
        }
        context.attachShader(shaderProgram, vertexShader);
        context.attachShader(shaderProgram, fragmentShader);
        if (this.webGLVersion > 1 && transformFeedbackVaryings) {
            const transformFeedback = this.createTransformFeedback();
            this.bindTransformFeedback(transformFeedback);
            this.setTranformFeedbackVaryings(shaderProgram, transformFeedbackVaryings);
            pipelineContext.transformFeedback = transformFeedback;
        }
        context.linkProgram(shaderProgram);
        if (this.webGLVersion > 1 && transformFeedbackVaryings) {
            this.bindTransformFeedback(null);
        }
        pipelineContext.context = context;
        pipelineContext.vertexShader = vertexShader;
        pipelineContext.fragmentShader = fragmentShader;
        if (!pipelineContext.isParallelCompiled) {
            this._finalizePipelineContext(pipelineContext);
        }
        return shaderProgram;
    }
    /**
     * @internal
     */ _releaseTexture(texture) {
        super._releaseTexture(texture);
    }
    /**
     * @internal
     */ _releaseRenderTargetWrapper(rtWrapper) {
        super._releaseRenderTargetWrapper(rtWrapper);
        // Set output texture of post process to null if the framebuffer has been released/disposed
        for (const scene of this.scenes){
            for (const postProcess of scene.postProcesses){
                if (postProcess._outputTexture === rtWrapper) {
                    postProcess._outputTexture = null;
                }
            }
            for (const camera of scene.cameras){
                for (const postProcess of camera._postProcesses){
                    if (postProcess) {
                        if (postProcess._outputTexture === rtWrapper) {
                            postProcess._outputTexture = null;
                        }
                    }
                }
            }
        }
    }
    /**
     * @internal
     * Rescales a texture
     * @param source input texture
     * @param destination destination texture
     * @param scene scene to use to render the resize
     * @param internalFormat format to use when resizing
     * @param onComplete callback to be called when resize has completed
     */ _rescaleTexture(source, destination, scene, internalFormat, onComplete) {
        this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, this._gl.LINEAR);
        this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, this._gl.LINEAR);
        this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_S, this._gl.CLAMP_TO_EDGE);
        this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_T, this._gl.CLAMP_TO_EDGE);
        const rtt = this.createRenderTargetTexture({
            width: destination.width,
            height: destination.height
        }, {
            generateMipMaps: false,
            type: 0,
            samplingMode: 2,
            generateDepthBuffer: false,
            generateStencilBuffer: false
        });
        if (!this._rescalePostProcess && Engine._RescalePostProcessFactory) {
            this._rescalePostProcess = Engine._RescalePostProcessFactory(this);
        }
        if (this._rescalePostProcess) {
            this._rescalePostProcess.externalTextureSamplerBinding = true;
            const onCompiled = ()=>{
                this._rescalePostProcess.onApply = function(effect) {
                    effect._bindTexture("textureSampler", source);
                };
                let hostingScene = scene;
                if (!hostingScene) {
                    hostingScene = this.scenes[this.scenes.length - 1];
                }
                hostingScene.postProcessManager.directRender([
                    this._rescalePostProcess
                ], rtt, true);
                this._bindTextureDirectly(this._gl.TEXTURE_2D, destination, true);
                this._gl.copyTexImage2D(this._gl.TEXTURE_2D, 0, internalFormat, 0, 0, destination.width, destination.height, 0);
                this.unBindFramebuffer(rtt);
                rtt.dispose();
                if (onComplete) {
                    onComplete();
                }
            };
            const effect = this._rescalePostProcess.getEffect();
            if (effect) {
                effect.executeWhenCompiled(onCompiled);
            } else {
                this._rescalePostProcess.onEffectCreatedObservable.addOnce((effect)=>{
                    effect.executeWhenCompiled(onCompiled);
                });
            }
        }
    }
    /**
     * Wraps an external web gl texture in a Babylon texture.
     * @param texture defines the external texture
     * @param hasMipMaps defines whether the external texture has mip maps (default: false)
     * @param samplingMode defines the sampling mode for the external texture (default: 3)
     * @param width defines the width for the external texture (default: 0)
     * @param height defines the height for the external texture (default: 0)
     * @returns the babylon internal texture
     */ wrapWebGLTexture(texture, hasMipMaps = false, samplingMode = 3, width = 0, height = 0) {
        const hardwareTexture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGL$2f$webGLHardwareTexture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebGLHardwareTexture"](texture, this._gl);
        const internalTexture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$internalTexture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InternalTexture"](this, 0 /* InternalTextureSource.Unknown */ , true);
        internalTexture._hardwareTexture = hardwareTexture;
        internalTexture.baseWidth = width;
        internalTexture.baseHeight = height;
        internalTexture.width = width;
        internalTexture.height = height;
        internalTexture.isReady = true;
        internalTexture.useMipMaps = hasMipMaps;
        this.updateTextureSamplingMode(samplingMode, internalTexture);
        return internalTexture;
    }
    /**
     * @internal
     */ _uploadImageToTexture(texture, image, faceIndex = 0, lod = 0) {
        const gl = this._gl;
        const textureType = this._getWebGLTextureType(texture.type);
        const format = this._getInternalFormat(texture.format);
        const internalFormat = this._getRGBABufferInternalSizedFormat(texture.type, format);
        const bindTarget = texture.isCube ? gl.TEXTURE_CUBE_MAP : gl.TEXTURE_2D;
        this._bindTextureDirectly(bindTarget, texture, true);
        this._unpackFlipY(texture.invertY);
        let target = gl.TEXTURE_2D;
        if (texture.isCube) {
            target = gl.TEXTURE_CUBE_MAP_POSITIVE_X + faceIndex;
        }
        gl.texImage2D(target, lod, internalFormat, format, textureType, image);
        this._bindTextureDirectly(bindTarget, null, true);
    }
    /**
     * Updates a depth texture Comparison Mode and Function.
     * If the comparison Function is equal to 0, the mode will be set to none.
     * Otherwise, this only works in webgl 2 and requires a shadow sampler in the shader.
     * @param texture The texture to set the comparison function for
     * @param comparisonFunction The comparison function to set, 0 if no comparison required
     */ updateTextureComparisonFunction(texture, comparisonFunction) {
        if (this.webGLVersion === 1) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Error("WebGL 1 does not support texture comparison.");
            return;
        }
        const gl = this._gl;
        if (texture.isCube) {
            this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, texture, true);
            if (comparisonFunction === 0) {
                gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_COMPARE_FUNC, 515);
                gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_COMPARE_MODE, gl.NONE);
            } else {
                gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_COMPARE_FUNC, comparisonFunction);
                gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_COMPARE_MODE, gl.COMPARE_REF_TO_TEXTURE);
            }
            this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null);
        } else {
            this._bindTextureDirectly(this._gl.TEXTURE_2D, texture, true);
            if (comparisonFunction === 0) {
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_COMPARE_FUNC, 515);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_COMPARE_MODE, gl.NONE);
            } else {
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_COMPARE_FUNC, comparisonFunction);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_COMPARE_MODE, gl.COMPARE_REF_TO_TEXTURE);
            }
            this._bindTextureDirectly(this._gl.TEXTURE_2D, null);
        }
        texture._comparisonFunction = comparisonFunction;
    }
    /**
     * Creates a webGL buffer to use with instantiation
     * @param capacity defines the size of the buffer
     * @returns the webGL buffer
     */ createInstancesBuffer(capacity) {
        const buffer = this._gl.createBuffer();
        if (!buffer) {
            throw new Error("Unable to create instance buffer");
        }
        const result = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$WebGL$2f$webGLDataBuffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebGLDataBuffer"](buffer);
        result.capacity = capacity;
        this.bindArrayBuffer(result);
        this._gl.bufferData(this._gl.ARRAY_BUFFER, capacity, this._gl.DYNAMIC_DRAW);
        result.references = 1;
        return result;
    }
    /**
     * Delete a webGL buffer used with instantiation
     * @param buffer defines the webGL buffer to delete
     */ deleteInstancesBuffer(buffer) {
        this._gl.deleteBuffer(buffer);
    }
    async _clientWaitAsync(sync, flags = 0, intervalms = 10) {
        const gl = this._gl;
        return await new Promise((resolve, reject)=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$timingTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_RetryWithInterval"])(()=>{
                const res = gl.clientWaitSync(sync, flags, 0);
                if (res == gl.WAIT_FAILED) {
                    throw new Error("clientWaitSync failed");
                }
                if (res == gl.TIMEOUT_EXPIRED) {
                    return false;
                }
                return true;
            }, resolve, reject, intervalms);
        });
    }
    /**
     * This function might return null synchronously, so it is technically not async.
     * @internal
     */ // eslint-disable-next-line no-restricted-syntax
    _readPixelsAsync(x, y, w, h, format, type, outputBuffer) {
        if (this._webGLVersion < 2) {
            throw new Error("_readPixelsAsync only work on WebGL2+");
        }
        const gl = this._gl;
        const buf = gl.createBuffer();
        gl.bindBuffer(gl.PIXEL_PACK_BUFFER, buf);
        gl.bufferData(gl.PIXEL_PACK_BUFFER, outputBuffer.byteLength, gl.STREAM_READ);
        gl.readPixels(x, y, w, h, format, type, 0);
        gl.bindBuffer(gl.PIXEL_PACK_BUFFER, null);
        const sync = gl.fenceSync(gl.SYNC_GPU_COMMANDS_COMPLETE, 0);
        if (!sync) {
            return null;
        }
        gl.flush();
        // eslint-disable-next-line github/no-then
        return this._clientWaitAsync(sync, 0, 10).then(()=>{
            gl.deleteSync(sync);
            gl.bindBuffer(gl.PIXEL_PACK_BUFFER, buf);
            gl.getBufferSubData(gl.PIXEL_PACK_BUFFER, 0, outputBuffer);
            gl.bindBuffer(gl.PIXEL_PACK_BUFFER, null);
            gl.deleteBuffer(buf);
            return outputBuffer;
        });
    }
    dispose() {
        this.hideLoadingUI();
        // Rescale PP
        if (this._rescalePostProcess) {
            this._rescalePostProcess.dispose();
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engine$2e$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_CommonDispose"])(this, this._renderingCanvas);
        super.dispose();
    }
}
// Const statics
/** Defines that alpha blending is disabled */ Engine.ALPHA_DISABLE = 0;
/** Defines that alpha blending to SRC ALPHA * SRC + DEST */ Engine.ALPHA_ADD = 1;
/** Defines that alpha blending to SRC ALPHA * SRC + (1 - SRC ALPHA) * DEST */ Engine.ALPHA_COMBINE = 2;
/** Defines that alpha blending to DEST - SRC * DEST */ Engine.ALPHA_SUBTRACT = 3;
/** Defines that alpha blending to SRC * DEST */ Engine.ALPHA_MULTIPLY = 4;
/** Defines that alpha blending to SRC ALPHA * SRC + (1 - SRC) * DEST */ Engine.ALPHA_MAXIMIZED = 5;
/** Defines that alpha blending to SRC + DEST */ Engine.ALPHA_ONEONE = 6;
/** Defines that alpha blending to SRC + (1 - SRC ALPHA) * DEST */ Engine.ALPHA_PREMULTIPLIED = 7;
/**
 * Defines that alpha blending to SRC + (1 - SRC ALPHA) * DEST
 * Alpha will be set to (1 - SRC ALPHA) * DEST ALPHA
 */ Engine.ALPHA_PREMULTIPLIED_PORTERDUFF = 8;
/** Defines that alpha blending to CST * SRC + (1 - CST) * DEST */ Engine.ALPHA_INTERPOLATE = 9;
/**
 * Defines that alpha blending to SRC + (1 - SRC) * DEST
 * Alpha will be set to SRC ALPHA + (1 - SRC ALPHA) * DEST ALPHA
 */ Engine.ALPHA_SCREENMODE = 10;
/** Defines that the resource is not delayed*/ Engine.DELAYLOADSTATE_NONE = 0;
/** Defines that the resource was successfully delay loaded */ Engine.DELAYLOADSTATE_LOADED = 1;
/** Defines that the resource is currently delay loading */ Engine.DELAYLOADSTATE_LOADING = 2;
/** Defines that the resource is delayed and has not started loading */ Engine.DELAYLOADSTATE_NOTLOADED = 4;
// Depht or Stencil test Constants.
/** Passed to depthFunction or stencilFunction to specify depth or stencil tests will never pass. i.e. Nothing will be drawn */ Engine.NEVER = 512;
/** Passed to depthFunction or stencilFunction to specify depth or stencil tests will always pass. i.e. Pixels will be drawn in the order they are drawn */ Engine.ALWAYS = 519;
/** Passed to depthFunction or stencilFunction to specify depth or stencil tests will pass if the new depth value is less than the stored value */ Engine.LESS = 513;
/** Passed to depthFunction or stencilFunction to specify depth or stencil tests will pass if the new depth value is equals to the stored value */ Engine.EQUAL = 514;
/** Passed to depthFunction or stencilFunction to specify depth or stencil tests will pass if the new depth value is less than or equal to the stored value */ Engine.LEQUAL = 515;
/** Passed to depthFunction or stencilFunction to specify depth or stencil tests will pass if the new depth value is greater than the stored value */ Engine.GREATER = 516;
/** Passed to depthFunction or stencilFunction to specify depth or stencil tests will pass if the new depth value is greater than or equal to the stored value */ Engine.GEQUAL = 518;
/** Passed to depthFunction or stencilFunction to specify depth or stencil tests will pass if the new depth value is not equal to the stored value */ Engine.NOTEQUAL = 517;
// Stencil Actions Constants.
/** Passed to stencilOperation to specify that stencil value must be kept */ Engine.KEEP = 7680;
/** Passed to stencilOperation to specify that stencil value must be replaced */ Engine.REPLACE = 7681;
/** Passed to stencilOperation to specify that stencil value must be incremented */ Engine.INCR = 7682;
/** Passed to stencilOperation to specify that stencil value must be decremented */ Engine.DECR = 7683;
/** Passed to stencilOperation to specify that stencil value must be inverted */ Engine.INVERT = 5386;
/** Passed to stencilOperation to specify that stencil value must be incremented with wrapping */ Engine.INCR_WRAP = 34055;
/** Passed to stencilOperation to specify that stencil value must be decremented with wrapping */ Engine.DECR_WRAP = 34056;
/** Texture is not repeating outside of 0..1 UVs */ Engine.TEXTURE_CLAMP_ADDRESSMODE = 0;
/** Texture is repeating outside of 0..1 UVs */ Engine.TEXTURE_WRAP_ADDRESSMODE = 1;
/** Texture is repeating and mirrored */ Engine.TEXTURE_MIRROR_ADDRESSMODE = 2;
/** ALPHA */ Engine.TEXTUREFORMAT_ALPHA = 0;
/** LUMINANCE */ Engine.TEXTUREFORMAT_LUMINANCE = 1;
/** LUMINANCE_ALPHA */ Engine.TEXTUREFORMAT_LUMINANCE_ALPHA = 2;
/** RGB */ // eslint-disable-next-line @typescript-eslint/naming-convention
Engine.TEXTUREFORMAT_RGB = 4;
/** RGBA */ // eslint-disable-next-line @typescript-eslint/naming-convention
Engine.TEXTUREFORMAT_RGBA = 5;
/** RED */ Engine.TEXTUREFORMAT_RED = 6;
/** RED (2nd reference) */ Engine.TEXTUREFORMAT_R = 6;
/** RED unsigned short normed to [0, 1] **/ Engine.TEXTUREFORMAT_R16_UNORM = 33322;
/** RG unsigned short normed to [0, 1] **/ Engine.TEXTUREFORMAT_RG16_UNORM = 33324;
/** RGB unsigned short normed to [0, 1] **/ // eslint-disable-next-line @typescript-eslint/naming-convention
Engine.TEXTUREFORMAT_RGB16_UNORM = 32852;
/** RGBA unsigned short normed to [0, 1] **/ // eslint-disable-next-line @typescript-eslint/naming-convention
Engine.TEXTUREFORMAT_RGBA16_UNORM = 32859;
/** RED signed short normed to [-1, 1] **/ Engine.TEXTUREFORMAT_R16_SNORM = 36760;
/** RG signed short normed to [-1, 1] **/ Engine.TEXTUREFORMAT_RG16_SNORM = 36761;
/** RGB signed short normed to [-1, 1] **/ // eslint-disable-next-line @typescript-eslint/naming-convention
Engine.TEXTUREFORMAT_RGB16_SNORM = 36762;
/** RGBA signed short normed to [-1, 1] **/ // eslint-disable-next-line @typescript-eslint/naming-convention
Engine.TEXTUREFORMAT_RGBA16_SNORM = 36763;
/** RG */ Engine.TEXTUREFORMAT_RG = 7;
/** RED_INTEGER */ Engine.TEXTUREFORMAT_RED_INTEGER = 8;
/** RED_INTEGER (2nd reference) */ Engine.TEXTUREFORMAT_R_INTEGER = 8;
/** RG_INTEGER */ Engine.TEXTUREFORMAT_RG_INTEGER = 9;
/** RGB_INTEGER */ // eslint-disable-next-line @typescript-eslint/naming-convention
Engine.TEXTUREFORMAT_RGB_INTEGER = 10;
/** RGBA_INTEGER */ // eslint-disable-next-line @typescript-eslint/naming-convention
Engine.TEXTUREFORMAT_RGBA_INTEGER = 11;
/** UNSIGNED_BYTE */ Engine.TEXTURETYPE_UNSIGNED_BYTE = 0;
/** @deprecated use more explicit TEXTURETYPE_UNSIGNED_BYTE instead. Use TEXTURETYPE_UNSIGNED_INTEGER for 32bits values.*/ Engine.TEXTURETYPE_UNSIGNED_INT = 0;
/** FLOAT */ Engine.TEXTURETYPE_FLOAT = 1;
/** HALF_FLOAT */ Engine.TEXTURETYPE_HALF_FLOAT = 2;
/** BYTE */ Engine.TEXTURETYPE_BYTE = 3;
/** SHORT */ Engine.TEXTURETYPE_SHORT = 4;
/** UNSIGNED_SHORT */ Engine.TEXTURETYPE_UNSIGNED_SHORT = 5;
/** INT */ Engine.TEXTURETYPE_INT = 6;
/** UNSIGNED_INT */ Engine.TEXTURETYPE_UNSIGNED_INTEGER = 7;
/** UNSIGNED_SHORT_4_4_4_4 */ Engine.TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4 = 8;
/** UNSIGNED_SHORT_5_5_5_1 */ Engine.TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1 = 9;
/** UNSIGNED_SHORT_5_6_5 */ Engine.TEXTURETYPE_UNSIGNED_SHORT_5_6_5 = 10;
/** UNSIGNED_INT_2_10_10_10_REV */ Engine.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV = 11;
/** UNSIGNED_INT_24_8 */ Engine.TEXTURETYPE_UNSIGNED_INT_24_8 = 12;
/** UNSIGNED_INT_10F_11F_11F_REV */ Engine.TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV = 13;
/** UNSIGNED_INT_5_9_9_9_REV */ Engine.TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV = 14;
/** FLOAT_32_UNSIGNED_INT_24_8_REV */ Engine.TEXTURETYPE_FLOAT_32_UNSIGNED_INT_24_8_REV = 15;
/** nearest is mag = nearest and min = nearest and mip = none */ Engine.TEXTURE_NEAREST_SAMPLINGMODE = 1;
/** Bilinear is mag = linear and min = linear and mip = nearest */ Engine.TEXTURE_BILINEAR_SAMPLINGMODE = 2;
/** Trilinear is mag = linear and min = linear and mip = linear */ Engine.TEXTURE_TRILINEAR_SAMPLINGMODE = 3;
/** nearest is mag = nearest and min = nearest and mip = linear */ Engine.TEXTURE_NEAREST_NEAREST_MIPLINEAR = 8;
/** Bilinear is mag = linear and min = linear and mip = nearest */ Engine.TEXTURE_LINEAR_LINEAR_MIPNEAREST = 11;
/** Trilinear is mag = linear and min = linear and mip = linear */ Engine.TEXTURE_LINEAR_LINEAR_MIPLINEAR = 3;
/** mag = nearest and min = nearest and mip = nearest */ Engine.TEXTURE_NEAREST_NEAREST_MIPNEAREST = 4;
/** mag = nearest and min = linear and mip = nearest */ Engine.TEXTURE_NEAREST_LINEAR_MIPNEAREST = 5;
/** mag = nearest and min = linear and mip = linear */ Engine.TEXTURE_NEAREST_LINEAR_MIPLINEAR = 6;
/** mag = nearest and min = linear and mip = none */ Engine.TEXTURE_NEAREST_LINEAR = 7;
/** mag = nearest and min = nearest and mip = none */ Engine.TEXTURE_NEAREST_NEAREST = 1;
/** mag = linear and min = nearest and mip = nearest */ Engine.TEXTURE_LINEAR_NEAREST_MIPNEAREST = 9;
/** mag = linear and min = nearest and mip = linear */ Engine.TEXTURE_LINEAR_NEAREST_MIPLINEAR = 10;
/** mag = linear and min = linear and mip = none */ Engine.TEXTURE_LINEAR_LINEAR = 2;
/** mag = linear and min = nearest and mip = none */ Engine.TEXTURE_LINEAR_NEAREST = 12;
/** Explicit coordinates mode */ Engine.TEXTURE_EXPLICIT_MODE = 0;
/** Spherical coordinates mode */ Engine.TEXTURE_SPHERICAL_MODE = 1;
/** Planar coordinates mode */ Engine.TEXTURE_PLANAR_MODE = 2;
/** Cubic coordinates mode */ Engine.TEXTURE_CUBIC_MODE = 3;
/** Projection coordinates mode */ Engine.TEXTURE_PROJECTION_MODE = 4;
/** Skybox coordinates mode */ Engine.TEXTURE_SKYBOX_MODE = 5;
/** Inverse Cubic coordinates mode */ Engine.TEXTURE_INVCUBIC_MODE = 6;
/** Equirectangular coordinates mode */ // eslint-disable-next-line @typescript-eslint/naming-convention
Engine.TEXTURE_EQUIRECTANGULAR_MODE = 7;
/** Equirectangular Fixed coordinates mode */ // eslint-disable-next-line @typescript-eslint/naming-convention
Engine.TEXTURE_FIXED_EQUIRECTANGULAR_MODE = 8;
/** Equirectangular Fixed Mirrored coordinates mode */ // eslint-disable-next-line @typescript-eslint/naming-convention
Engine.TEXTURE_FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9;
// Texture rescaling mode
/** Defines that texture rescaling will use a floor to find the closer power of 2 size */ Engine.SCALEMODE_FLOOR = 1;
/** Defines that texture rescaling will look for the nearest power of 2 size */ Engine.SCALEMODE_NEAREST = 2;
/** Defines that texture rescaling will use a ceil to find the closer power of 2 size */ Engine.SCALEMODE_CEILING = 3; //# sourceMappingURL=engine.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/constants.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/naming-convention */ /** Defines the cross module used constants to avoid circular dependencies */ __turbopack_context__.s([
    "Constants",
    ()=>Constants
]);
class Constants {
}
/** Sampler suffix when associated with a texture name */ Constants.AUTOSAMPLERSUFFIX = "Sampler";
/** Flag used to disable diagnostics for WebGPU */ Constants.DISABLEUA = "#define DISABLE_UNIFORMITY_ANALYSIS";
/** Defines that alpha blending is disabled */ Constants.ALPHA_DISABLE = 0;
/** Defines that alpha blending is COLOR=SRC_ALPHA * SRC + DEST, ALPHA=DEST_ALPHA */ Constants.ALPHA_ADD = 1;
/**
 *  Defines that alpha blending is COLOR=SRC_ALPHA * SRC + (1 - SRC_ALPHA) * DEST, ALPHA=SRC_ALPHA + DEST_ALPHA
 *  Go-to for transparency. 100% alpha means source, 0% alpha means background. Glass, UI fade, smoke
 */ Constants.ALPHA_COMBINE = 2;
/**
 * Defines that alpha blending is COLOR=(1 - SRC) * DEST, ALPHA=SRC_ALPHA - DEST_ALPHA
 * Subtracts source from destination, leading to darker results
 * */ Constants.ALPHA_SUBTRACT = 3;
/** Defines that alpha blending is COLOR=DEST * SRC, ALPHA=SRC_ALPHA + DEST_ALPHA */ Constants.ALPHA_MULTIPLY = 4;
/**
 * Defines that alpha blending is COLOR=SRC_ALPHA * SRC + (1 - SRC) * DEST, ALPHA=SRC_ALPHA + DEST_ALPHA
 * Prioritizes area with high source alpha, strongly emphasizes the source
 */ Constants.ALPHA_MAXIMIZED = 5;
/**
 * Defines that alpha blending is COLOR=SRC + DEST, ALPHA=DEST_ALPHA
 * Source color is added to the destination color without alpha affecting the result. Great for additive glow effects (fire, magic, lasers)
 */ Constants.ALPHA_ONEONE = 6;
/** Defines that alpha blending is COLOR=SRC + (1 - SRC_ALPHA) * DEST, ALPHA=SRC_ALPHA + DEST_ALPHA */ Constants.ALPHA_PREMULTIPLIED = 7;
/** Defines that alpha blending is COLOR=SRC + (1 - SRC_ALPHA) * DEST, ALPHA=SRC_ALPHA + (1 - SRC_ALPHA) * DEST_ALPHA */ Constants.ALPHA_PREMULTIPLIED_PORTERDUFF = 8;
/**
 * Defines that alpha blending is COLOR=CST * SRC + (1 - CST) * DEST, ALPHA=CST_ALPHA * SRC + (1 - CST_ALPHA) * DEST_ALPHA
 * Where CST is user-supplied color
 */ Constants.ALPHA_INTERPOLATE = 9;
/**
 * Defines that alpha blending is COLOR=SRC + (1 - SRC) * DEST, ALPHA=SRC_ALPHA + (1 - SRC_ALPHA) * DEST_ALPHA
 * Brightens, good for soft light or UI highlights (like photoshop's screen blend)
 */ Constants.ALPHA_SCREENMODE = 10;
/**
 * Defines that alpha blending is COLOR=SRC + DST, ALPHA=SRC_ALPHA + DEST_ALPHA
 * Straight addition of color and alpha- use when you want both source and destination colors and opacities to stack
 */ Constants.ALPHA_ONEONE_ONEONE = 11;
/**
 * Defines that alpha blending is COLOR=DEST_ALPHA * SRC + DST, ALPHA=0
 */ Constants.ALPHA_ALPHATOCOLOR = 12;
/**
 * Defines that alpha blending is COLOR=(1 - DEST) * SRC + (1 - SRC) * DEST, ALPHA=(1 - DEST_ALPHA) * SRC_ALPHA + (1 - SRC_ALPHA) * DEST_ALPHA
 * Result is between source and destination, used for experimental blending or styled effects
 */ Constants.ALPHA_REVERSEONEMINUS = 13;
/**
 * Defines that alpha blending is ALPHA=SRC + (1 - SRC ALPHA) * DEST, ALPHA=SRC_ALPHA + (1 - SRC ALPHA) * DEST_ALPHA
 * Smooths blending between source and destination, useful in layered alpha masks
 */ Constants.ALPHA_SRC_DSTONEMINUSSRCALPHA = 14;
/**
 * Defines that alpha blending is COLOR=SRC + DST, ALPHA=SRC_ALPHA
 * Color stacks, but only source alpha is kept
 */ Constants.ALPHA_ONEONE_ONEZERO = 15;
/**
 * Defines that alpha blending is COLOR=(1 - DEST) * SRC + (1 - SRC) * DEST, ALPHA=DEST_ALPHA
 * Produces inverted look (negative space), like 'exclusion' mode in photoshop
 */ Constants.ALPHA_EXCLUSION = 16;
/**
 * Defines that alpha blending is COLOR=SRC_ALPHA * SRC + (1 - SRC ALPHA) * DEST, ALPHA=SRC_ALPHA + (1 - SRC_ALPHA) * DEST_ALPHA
 * Great for layered rendering (particles, fog volumes), accumulates transparency in a more physically accurate way
 */ Constants.ALPHA_LAYER_ACCUMULATE = 17;
/**
 * Defines that alpha blending is COLOR=MIN(SRC, DEST), ALPHA=MIN(SRC_ALPHA, DEST_ALPHA)
 */ Constants.ALPHA_MIN = 18;
/**
 * Defines that alpha blending is COLOR=MAX(SRC, DEST), ALPHA=MAX(SRC_ALPHA, DEST_ALPHA)
 */ Constants.ALPHA_MAX = 19;
/**
 * Defines that alpha blending uses dual source blending and is COLOR=SRC + SRC1 * DEST, ALPHA=DST_ALPHA
 */ Constants.ALPHA_DUAL_SRC0_ADD_SRC1xDST = 20;
/** Defines that alpha blending equation a SUM */ Constants.ALPHA_EQUATION_ADD = 0;
/** Defines that alpha blending equation a SUBSTRACTION */ Constants.ALPHA_EQUATION_SUBSTRACT = 1;
/** Defines that alpha blending equation a REVERSE SUBSTRACTION */ Constants.ALPHA_EQUATION_REVERSE_SUBTRACT = 2;
/** Defines that alpha blending equation a MAX operation */ Constants.ALPHA_EQUATION_MAX = 3;
/** Defines that alpha blending equation a MIN operation */ Constants.ALPHA_EQUATION_MIN = 4;
/**
 * Defines that alpha blending equation a DARKEN operation:
 * It takes the min of the src and sums the alpha channels.
 */ Constants.ALPHA_EQUATION_DARKEN = 5;
/** Defines that the resource is not delayed*/ Constants.DELAYLOADSTATE_NONE = 0;
/** Defines that the resource was successfully delay loaded */ Constants.DELAYLOADSTATE_LOADED = 1;
/** Defines that the resource is currently delay loading */ Constants.DELAYLOADSTATE_LOADING = 2;
/** Defines that the resource is delayed and has not started loading */ Constants.DELAYLOADSTATE_NOTLOADED = 4;
// Depth or Stencil test Constants.
/** Passed to depthFunction or stencilFunction to specify depth or stencil tests will never pass. i.e. Nothing will be drawn */ Constants.NEVER = 0x0200;
/** Passed to depthFunction or stencilFunction to specify depth or stencil tests will always pass. i.e. Pixels will be drawn in the order they are drawn */ Constants.ALWAYS = 0x0207;
/** Passed to depthFunction or stencilFunction to specify depth or stencil tests will pass if the new depth value is less than the stored value */ Constants.LESS = 0x0201;
/** Passed to depthFunction or stencilFunction to specify depth or stencil tests will pass if the new depth value is equals to the stored value */ Constants.EQUAL = 0x0202;
/** Passed to depthFunction or stencilFunction to specify depth or stencil tests will pass if the new depth value is less than or equal to the stored value */ Constants.LEQUAL = 0x0203;
/** Passed to depthFunction or stencilFunction to specify depth or stencil tests will pass if the new depth value is greater than the stored value */ Constants.GREATER = 0x0204;
/** Passed to depthFunction or stencilFunction to specify depth or stencil tests will pass if the new depth value is greater than or equal to the stored value */ Constants.GEQUAL = 0x0206;
/** Passed to depthFunction or stencilFunction to specify depth or stencil tests will pass if the new depth value is not equal to the stored value */ Constants.NOTEQUAL = 0x0205;
// Stencil Actions Constants.
/** Passed to stencilOperation to specify that stencil value must be kept */ Constants.KEEP = 0x1e00;
/** Passed to stencilOperation to specify that stencil value must be zero */ Constants.ZERO = 0x0000;
/** Passed to stencilOperation to specify that stencil value must be replaced */ Constants.REPLACE = 0x1e01;
/** Passed to stencilOperation to specify that stencil value must be incremented */ Constants.INCR = 0x1e02;
/** Passed to stencilOperation to specify that stencil value must be decremented */ Constants.DECR = 0x1e03;
/** Passed to stencilOperation to specify that stencil value must be inverted */ Constants.INVERT = 0x150a;
/** Passed to stencilOperation to specify that stencil value must be incremented with wrapping */ Constants.INCR_WRAP = 0x8507;
/** Passed to stencilOperation to specify that stencil value must be decremented with wrapping */ Constants.DECR_WRAP = 0x8508;
/** Texture is not repeating outside of 0..1 UVs */ Constants.TEXTURE_CLAMP_ADDRESSMODE = 0;
/** Texture is repeating outside of 0..1 UVs */ Constants.TEXTURE_WRAP_ADDRESSMODE = 1;
/** Texture is repeating and mirrored */ Constants.TEXTURE_MIRROR_ADDRESSMODE = 2;
/** Flag to create a storage texture */ Constants.TEXTURE_CREATIONFLAG_STORAGE = 1;
/** ALPHA */ Constants.TEXTUREFORMAT_ALPHA = 0;
/** LUMINANCE */ Constants.TEXTUREFORMAT_LUMINANCE = 1;
/** LUMINANCE_ALPHA */ Constants.TEXTUREFORMAT_LUMINANCE_ALPHA = 2;
/** RGB */ Constants.TEXTUREFORMAT_RGB = 4;
/** RGBA */ Constants.TEXTUREFORMAT_RGBA = 5;
/** RED */ Constants.TEXTUREFORMAT_RED = 6;
/** RED (2nd reference) */ Constants.TEXTUREFORMAT_R = 6;
/** RED unsigned short normed to [0, 1] **/ Constants.TEXTUREFORMAT_R16_UNORM = 0x822a;
/** RG unsigned short normed to [0, 1] **/ Constants.TEXTUREFORMAT_RG16_UNORM = 0x822c;
/** RGB unsigned short normed to [0, 1] **/ Constants.TEXTUREFORMAT_RGB16_UNORM = 0x8054;
/** RGBA unsigned short normed to [0, 1] **/ Constants.TEXTUREFORMAT_RGBA16_UNORM = 0x805b;
/** RED signed short normed to [-1, 1] **/ Constants.TEXTUREFORMAT_R16_SNORM = 0x8f98;
/** RG signed short normed to [-1, 1] **/ Constants.TEXTUREFORMAT_RG16_SNORM = 0x8f99;
/** RGB signed short normed to [-1, 1] **/ Constants.TEXTUREFORMAT_RGB16_SNORM = 0x8f9a;
/** RGBA signed short normed to [-1, 1] **/ Constants.TEXTUREFORMAT_RGBA16_SNORM = 0x8f9b;
/** RG */ Constants.TEXTUREFORMAT_RG = 7;
/** RED_INTEGER */ Constants.TEXTUREFORMAT_RED_INTEGER = 8;
/** RED_INTEGER (2nd reference) */ Constants.TEXTUREFORMAT_R_INTEGER = 8;
/** RG_INTEGER */ Constants.TEXTUREFORMAT_RG_INTEGER = 9;
/** RGB_INTEGER */ Constants.TEXTUREFORMAT_RGB_INTEGER = 10;
/** RGBA_INTEGER */ Constants.TEXTUREFORMAT_RGBA_INTEGER = 11;
/** BGRA */ Constants.TEXTUREFORMAT_BGRA = 12;
/** Depth 24 bits + Stencil 8 bits */ Constants.TEXTUREFORMAT_DEPTH24_STENCIL8 = 13;
/** Depth 32 bits float */ Constants.TEXTUREFORMAT_DEPTH32_FLOAT = 14;
/** Depth 16 bits */ Constants.TEXTUREFORMAT_DEPTH16 = 15;
/** Depth 24 bits */ Constants.TEXTUREFORMAT_DEPTH24 = 16;
/** Depth 24 bits unorm + Stencil 8 bits */ Constants.TEXTUREFORMAT_DEPTH24UNORM_STENCIL8 = 17;
/** Depth 32 bits float + Stencil 8 bits */ Constants.TEXTUREFORMAT_DEPTH32FLOAT_STENCIL8 = 18;
/** Stencil 8 bits */ Constants.TEXTUREFORMAT_STENCIL8 = 19;
/** UNDEFINED */ Constants.TEXTUREFORMAT_UNDEFINED = 0xffffffff;
/** Compressed BC7 */ Constants.TEXTUREFORMAT_COMPRESSED_RGBA_BPTC_UNORM = 36492;
/** Compressed BC7 (SRGB+A) */ Constants.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_BPTC_UNORM = 36493;
/** Compressed BC6 unsigned float */ Constants.TEXTUREFORMAT_COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT = 36495;
/** Compressed BC6 signed float */ Constants.TEXTUREFORMAT_COMPRESSED_RGB_BPTC_SIGNED_FLOAT = 36494;
/** Compressed BC3 */ Constants.TEXTUREFORMAT_COMPRESSED_RGBA_S3TC_DXT5 = 33779;
/** Compressed BC3 (SRGB+A) */ Constants.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = 35919;
/** Compressed BC2 */ Constants.TEXTUREFORMAT_COMPRESSED_RGBA_S3TC_DXT3 = 33778;
/** Compressed BC2 (SRGB+A) */ Constants.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT = 35918;
/** Compressed BC1 (RGBA) */ Constants.TEXTUREFORMAT_COMPRESSED_RGBA_S3TC_DXT1 = 33777;
/** Compressed BC1 (RGB) */ Constants.TEXTUREFORMAT_COMPRESSED_RGB_S3TC_DXT1 = 33776;
/** Compressed BC1 (SRGB+A) */ Constants.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = 35917;
/** Compressed BC1 (SRGB) */ Constants.TEXTUREFORMAT_COMPRESSED_SRGB_S3TC_DXT1_EXT = 35916;
/** Compressed ASTC 4x4 */ Constants.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_4x4 = 37808;
/** Compressed ASTC 4x4 (SRGB+A) */ Constants.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR = 37840;
/** Compressed ETC1 (RGB) */ Constants.TEXTUREFORMAT_COMPRESSED_RGB_ETC1_WEBGL = 36196;
/** Compressed ETC2 (RGB) */ Constants.TEXTUREFORMAT_COMPRESSED_RGB8_ETC2 = 37492;
/** Compressed ETC2 (SRGB) */ Constants.TEXTUREFORMAT_COMPRESSED_SRGB8_ETC2 = 37493;
/** Compressed ETC2 (RGB+A1) */ Constants.TEXTUREFORMAT_COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37494;
/** Compressed ETC2 (SRGB+A1)*/ Constants.TEXTUREFORMAT_COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37495;
/** Compressed ETC2 (RGBA) */ Constants.TEXTUREFORMAT_COMPRESSED_RGBA8_ETC2_EAC = 37496;
/** Compressed ETC2 (SRGB+A) */ Constants.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = 37497;
/** UNSIGNED_BYTE */ Constants.TEXTURETYPE_UNSIGNED_BYTE = 0;
/** @deprecated use more explicit TEXTURETYPE_UNSIGNED_BYTE instead. Use TEXTURETYPE_UNSIGNED_INTEGER for 32bits values.*/ Constants.TEXTURETYPE_UNSIGNED_INT = 0;
/** FLOAT */ Constants.TEXTURETYPE_FLOAT = 1;
/** HALF_FLOAT */ Constants.TEXTURETYPE_HALF_FLOAT = 2;
/** BYTE */ Constants.TEXTURETYPE_BYTE = 3;
/** SHORT */ Constants.TEXTURETYPE_SHORT = 4;
/** UNSIGNED_SHORT */ Constants.TEXTURETYPE_UNSIGNED_SHORT = 5;
/** INT */ Constants.TEXTURETYPE_INT = 6;
/** UNSIGNED_INT */ Constants.TEXTURETYPE_UNSIGNED_INTEGER = 7;
/** UNSIGNED_SHORT_4_4_4_4 */ Constants.TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4 = 8;
/** UNSIGNED_SHORT_5_5_5_1 */ Constants.TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1 = 9;
/** UNSIGNED_SHORT_5_6_5 */ Constants.TEXTURETYPE_UNSIGNED_SHORT_5_6_5 = 10;
/** UNSIGNED_INT_2_10_10_10_REV */ Constants.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV = 11;
/** UNSIGNED_INT_24_8 */ Constants.TEXTURETYPE_UNSIGNED_INT_24_8 = 12;
/** UNSIGNED_INT_10F_11F_11F_REV */ Constants.TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV = 13;
/** UNSIGNED_INT_5_9_9_9_REV */ Constants.TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV = 14;
/** FLOAT_32_UNSIGNED_INT_24_8_REV */ Constants.TEXTURETYPE_FLOAT_32_UNSIGNED_INT_24_8_REV = 15;
/** UNDEFINED */ Constants.TEXTURETYPE_UNDEFINED = 16;
/** 2D Texture target*/ Constants.TEXTURE_2D = 3553;
/** 2D Array Texture target */ Constants.TEXTURE_2D_ARRAY = 35866;
/** Cube Map Texture target */ Constants.TEXTURE_CUBE_MAP = 34067;
/** Cube Map Array Texture target */ Constants.TEXTURE_CUBE_MAP_ARRAY = 0xdeadbeef;
/** 3D Texture target */ Constants.TEXTURE_3D = 32879;
/** nearest is mag = nearest and min = nearest and no mip */ Constants.TEXTURE_NEAREST_SAMPLINGMODE = 1;
/** mag = nearest and min = nearest and mip = none */ Constants.TEXTURE_NEAREST_NEAREST = 1;
/** Bilinear is mag = linear and min = linear and no mip */ Constants.TEXTURE_BILINEAR_SAMPLINGMODE = 2;
/** mag = linear and min = linear and mip = none */ Constants.TEXTURE_LINEAR_LINEAR = 2;
/** Trilinear is mag = linear and min = linear and mip = linear */ Constants.TEXTURE_TRILINEAR_SAMPLINGMODE = 3;
/** Trilinear is mag = linear and min = linear and mip = linear */ Constants.TEXTURE_LINEAR_LINEAR_MIPLINEAR = 3;
/** mag = nearest and min = nearest and mip = nearest */ Constants.TEXTURE_NEAREST_NEAREST_MIPNEAREST = 4;
/** mag = nearest and min = linear and mip = nearest */ Constants.TEXTURE_NEAREST_LINEAR_MIPNEAREST = 5;
/** mag = nearest and min = linear and mip = linear */ Constants.TEXTURE_NEAREST_LINEAR_MIPLINEAR = 6;
/** mag = nearest and min = linear and mip = none */ Constants.TEXTURE_NEAREST_LINEAR = 7;
/** nearest is mag = nearest and min = nearest and mip = linear */ Constants.TEXTURE_NEAREST_NEAREST_MIPLINEAR = 8;
/** mag = linear and min = nearest and mip = nearest */ Constants.TEXTURE_LINEAR_NEAREST_MIPNEAREST = 9;
/** mag = linear and min = nearest and mip = linear */ Constants.TEXTURE_LINEAR_NEAREST_MIPLINEAR = 10;
/** Bilinear is mag = linear and min = linear and mip = nearest */ Constants.TEXTURE_LINEAR_LINEAR_MIPNEAREST = 11;
/** mag = linear and min = nearest and mip = none */ Constants.TEXTURE_LINEAR_NEAREST = 12;
/** Explicit coordinates mode */ Constants.TEXTURE_EXPLICIT_MODE = 0;
/** Spherical coordinates mode */ Constants.TEXTURE_SPHERICAL_MODE = 1;
/** Planar coordinates mode */ Constants.TEXTURE_PLANAR_MODE = 2;
/** Cubic coordinates mode */ Constants.TEXTURE_CUBIC_MODE = 3;
/** Projection coordinates mode */ Constants.TEXTURE_PROJECTION_MODE = 4;
/** Skybox coordinates mode */ Constants.TEXTURE_SKYBOX_MODE = 5;
/** Inverse Cubic coordinates mode */ Constants.TEXTURE_INVCUBIC_MODE = 6;
/** Equirectangular coordinates mode */ Constants.TEXTURE_EQUIRECTANGULAR_MODE = 7;
/** Equirectangular Fixed coordinates mode */ Constants.TEXTURE_FIXED_EQUIRECTANGULAR_MODE = 8;
/** Equirectangular Fixed Mirrored coordinates mode */ Constants.TEXTURE_FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9;
/** Offline (baking) quality for texture filtering */ Constants.TEXTURE_FILTERING_QUALITY_OFFLINE = 4096;
/** High quality for texture filtering */ Constants.TEXTURE_FILTERING_QUALITY_HIGH = 64;
/** Medium quality for texture filtering */ Constants.TEXTURE_FILTERING_QUALITY_MEDIUM = 16;
/** Low quality for texture filtering */ Constants.TEXTURE_FILTERING_QUALITY_LOW = 8;
// Texture rescaling mode
/** Defines that texture rescaling will use a floor to find the closer power of 2 size */ Constants.SCALEMODE_FLOOR = 1;
/** Defines that texture rescaling will look for the nearest power of 2 size */ Constants.SCALEMODE_NEAREST = 2;
/** Defines that texture rescaling will use a ceil to find the closer power of 2 size */ Constants.SCALEMODE_CEILING = 3;
/**
 * The dirty texture flag value
 */ Constants.MATERIAL_TextureDirtyFlag = 1;
/**
 * The dirty light flag value
 */ Constants.MATERIAL_LightDirtyFlag = 2;
/**
 * The dirty fresnel flag value
 */ Constants.MATERIAL_FresnelDirtyFlag = 4;
/**
 * The dirty attribute flag value
 */ Constants.MATERIAL_AttributesDirtyFlag = 8;
/**
 * The dirty misc flag value
 */ Constants.MATERIAL_MiscDirtyFlag = 16;
/**
 * The dirty prepass flag value
 */ Constants.MATERIAL_PrePassDirtyFlag = 32;
/**
 * The dirty image processing flag value
 */ Constants.MATERIAL_ImageProcessingDirtyFlag = 64;
/**
 * The all dirty flag value
 */ Constants.MATERIAL_AllDirtyFlag = 127;
/**
 * Returns the triangle fill mode
 */ Constants.MATERIAL_TriangleFillMode = 0;
/**
 * Returns the wireframe mode
 */ Constants.MATERIAL_WireFrameFillMode = 1;
/**
 * Returns the point fill mode
 */ Constants.MATERIAL_PointFillMode = 2;
/**
 * Returns the point list draw mode
 */ Constants.MATERIAL_PointListDrawMode = 3;
/**
 * Returns the line list draw mode
 */ Constants.MATERIAL_LineListDrawMode = 4;
/**
 * Returns the line loop draw mode
 */ Constants.MATERIAL_LineLoopDrawMode = 5;
/**
 * Returns the line strip draw mode
 */ Constants.MATERIAL_LineStripDrawMode = 6;
/**
 * Returns the triangle strip draw mode
 */ Constants.MATERIAL_TriangleStripDrawMode = 7;
/**
 * Returns the triangle fan draw mode
 */ Constants.MATERIAL_TriangleFanDrawMode = 8;
/**
 * Stores the clock-wise side orientation
 */ Constants.MATERIAL_ClockWiseSideOrientation = 0;
/**
 * Stores the counter clock-wise side orientation
 */ Constants.MATERIAL_CounterClockWiseSideOrientation = 1;
/**
 * Energy-conserving Oren Nayar diffuse model type.
 */ Constants.MATERIAL_DIFFUSE_MODEL_E_OREN_NAYAR = 0;
/**
 * Burley diffuse model type.
 */ Constants.MATERIAL_DIFFUSE_MODEL_BURLEY = 1;
/**
 * Lambertian diffuse model type.
 */ Constants.MATERIAL_DIFFUSE_MODEL_LAMBERT = 2;
/**
 * Babylon.js version less than 8.x
 * IBL Lambert + Burley diffuse model type.
 */ Constants.MATERIAL_DIFFUSE_MODEL_LEGACY = 3;
/**
 * Specular lighting for dielectric materials follows the logic
 * in the glTF specification and KHR_materials_specular extension.
 * Specular colour is applied only at normal incidence (i.e. F0) while
 * glancing angles (i.e. F90) tend towards white.
 */ Constants.MATERIAL_DIELECTRIC_SPECULAR_MODEL_GLTF = 0;
/**
 * Specular lighting for dielectric materials follows the logic
 * in the OpenPBR specification. Specular colour is applied to all
 * dielectric reflection, not just at normal incidence (i.e. F0).
 */ Constants.MATERIAL_DIELECTRIC_SPECULAR_MODEL_OPENPBR = 1;
/**
 * Specular lighting for metals follows the logic in the glTF specification.
 * Base colour is applied at F0 while glancing angles tend towards white.
 */ Constants.MATERIAL_CONDUCTOR_SPECULAR_MODEL_GLTF = 0;
/**
 * Specular lighting for metals follows the logic in the OpenPBR specification.
 * Specular colour is applied to glancing angles using the F82 spec.
 */ Constants.MATERIAL_CONDUCTOR_SPECULAR_MODEL_OPENPBR = 1;
/**
 * Nothing
 * @see https://doc.babylonjs.com/features/featuresDeepDive/events/actions#triggers
 */ Constants.ACTION_NothingTrigger = 0;
/**
 * On pick
 * @see https://doc.babylonjs.com/features/featuresDeepDive/events/actions#triggers
 */ Constants.ACTION_OnPickTrigger = 1;
/**
 * On left pick
 * @see https://doc.babylonjs.com/features/featuresDeepDive/events/actions#triggers
 */ Constants.ACTION_OnLeftPickTrigger = 2;
/**
 * On right pick
 * @see https://doc.babylonjs.com/features/featuresDeepDive/events/actions#triggers
 */ Constants.ACTION_OnRightPickTrigger = 3;
/**
 * On center pick
 * @see https://doc.babylonjs.com/features/featuresDeepDive/events/actions#triggers
 */ Constants.ACTION_OnCenterPickTrigger = 4;
/**
 * On pick down
 * @see https://doc.babylonjs.com/features/featuresDeepDive/events/actions#triggers
 */ Constants.ACTION_OnPickDownTrigger = 5;
/**
 * On double pick
 * @see https://doc.babylonjs.com/features/featuresDeepDive/events/actions#triggers
 */ Constants.ACTION_OnDoublePickTrigger = 6;
/**
 * On pick up
 * @see https://doc.babylonjs.com/features/featuresDeepDive/events/actions#triggers
 */ Constants.ACTION_OnPickUpTrigger = 7;
/**
 * On pick out.
 * This trigger will only be raised if you also declared a OnPickDown
 * @see https://doc.babylonjs.com/features/featuresDeepDive/events/actions#triggers
 */ Constants.ACTION_OnPickOutTrigger = 16;
/**
 * On long press
 * @see https://doc.babylonjs.com/features/featuresDeepDive/events/actions#triggers
 */ Constants.ACTION_OnLongPressTrigger = 8;
/**
 * On pointer over
 * @see https://doc.babylonjs.com/features/featuresDeepDive/events/actions#triggers
 */ Constants.ACTION_OnPointerOverTrigger = 9;
/**
 * On pointer out
 * @see https://doc.babylonjs.com/features/featuresDeepDive/events/actions#triggers
 */ Constants.ACTION_OnPointerOutTrigger = 10;
/**
 * On every frame
 * @see https://doc.babylonjs.com/features/featuresDeepDive/events/actions#triggers
 */ Constants.ACTION_OnEveryFrameTrigger = 11;
/**
 * On intersection enter
 * @see https://doc.babylonjs.com/features/featuresDeepDive/events/actions#triggers
 */ Constants.ACTION_OnIntersectionEnterTrigger = 12;
/**
 * On intersection exit
 * @see https://doc.babylonjs.com/features/featuresDeepDive/events/actions#triggers
 */ Constants.ACTION_OnIntersectionExitTrigger = 13;
/**
 * On key down
 * @see https://doc.babylonjs.com/features/featuresDeepDive/events/actions#triggers
 */ Constants.ACTION_OnKeyDownTrigger = 14;
/**
 * On key up
 * @see https://doc.babylonjs.com/features/featuresDeepDive/events/actions#triggers
 */ Constants.ACTION_OnKeyUpTrigger = 15;
/**
 * Billboard mode will only apply to Y axis
 */ Constants.PARTICLES_BILLBOARDMODE_Y = 2;
/**
 * Billboard mode will apply to all axes
 */ Constants.PARTICLES_BILLBOARDMODE_ALL = 7;
/**
 * Special billboard mode where the particle will be biilboard to the camera but rotated to align with direction
 */ Constants.PARTICLES_BILLBOARDMODE_STRETCHED = 8;
/**
 * Special billboard mode where the particle will be billboard to the camera but only around the axis of the direction of particle emission
 */ Constants.PARTICLES_BILLBOARDMODE_STRETCHED_LOCAL = 9;
/** Default culling strategy : this is an exclusion test and it's the more accurate.
 *  Test order :
 *  Is the bounding sphere outside the frustum ?
 *  If not, are the bounding box vertices outside the frustum ?
 *  It not, then the cullable object is in the frustum.
 */ Constants.MESHES_CULLINGSTRATEGY_STANDARD = 0;
/** Culling strategy : Bounding Sphere Only.
 *  This is an exclusion test. It's faster than the standard strategy because the bounding box is not tested.
 *  It's also less accurate than the standard because some not visible objects can still be selected.
 *  Test : is the bounding sphere outside the frustum ?
 *  If not, then the cullable object is in the frustum.
 */ Constants.MESHES_CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY = 1;
/** Culling strategy : Optimistic Inclusion.
 *  This in an inclusion test first, then the standard exclusion test.
 *  This can be faster when a cullable object is expected to be almost always in the camera frustum.
 *  This could also be a little slower than the standard test when the tested object center is not the frustum but one of its bounding box vertex is still inside.
 *  Anyway, it's as accurate as the standard strategy.
 *  Test :
 *  Is the cullable object bounding sphere center in the frustum ?
 *  If not, apply the default culling strategy.
 */ Constants.MESHES_CULLINGSTRATEGY_OPTIMISTIC_INCLUSION = 2;
/** Culling strategy : Optimistic Inclusion then Bounding Sphere Only.
 *  This in an inclusion test first, then the bounding sphere only exclusion test.
 *  This can be the fastest test when a cullable object is expected to be almost always in the camera frustum.
 *  This could also be a little slower than the BoundingSphereOnly strategy when the tested object center is not in the frustum but its bounding sphere still intersects it.
 *  It's less accurate than the standard strategy and as accurate as the BoundingSphereOnly strategy.
 *  Test :
 *  Is the cullable object bounding sphere center in the frustum ?
 *  If not, apply the Bounding Sphere Only strategy. No Bounding Box is tested here.
 */ Constants.MESHES_CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY = 3;
/**
 * No logging while loading
 */ Constants.SCENELOADER_NO_LOGGING = 0;
/**
 * Minimal logging while loading
 */ Constants.SCENELOADER_MINIMAL_LOGGING = 1;
/**
 * Summary logging while loading
 */ Constants.SCENELOADER_SUMMARY_LOGGING = 2;
/**
 * Detailed logging while loading
 */ Constants.SCENELOADER_DETAILED_LOGGING = 3;
/**
 * Constant used to retrieve the irradiance texture index in the textures array in the prepass
 * using getIndex(Constants.PREPASS_IRRADIANCE_TEXTURE_TYPE)
 */ Constants.PREPASS_IRRADIANCE_TEXTURE_TYPE = 0;
/**
 * Constant used to retrieve the position texture index in the textures array in the prepass
 * using getIndex(Constants.PREPASS_POSITION_TEXTURE_INDEX)
 */ Constants.PREPASS_POSITION_TEXTURE_TYPE = 1;
/**
 * Constant used to retrieve the velocity texture index in the textures array in the prepass
 * using getIndex(Constants.PREPASS_VELOCITY_TEXTURE_TYPE)
 */ Constants.PREPASS_VELOCITY_TEXTURE_TYPE = 2;
/**
 * Constant used to retrieve the reflectivity texture index in the textures array in the prepass
 * using the getIndex(Constants.PREPASS_REFLECTIVITY_TEXTURE_TYPE)
 */ Constants.PREPASS_REFLECTIVITY_TEXTURE_TYPE = 3;
/**
 * Constant used to retrieve the lit color texture index in the textures array in the prepass
 * using the getIndex(Constants.PREPASS_COLOR_TEXTURE_TYPE)
 */ Constants.PREPASS_COLOR_TEXTURE_TYPE = 4;
/**
 * Constant used to retrieve (camera view) depth index in the textures array in the prepass
 * using the getIndex(Constants.PREPASS_DEPTH_TEXTURE_TYPE)
 */ Constants.PREPASS_DEPTH_TEXTURE_TYPE = 5;
/**
 * Constant used to retrieve normal index in the textures array in the prepass
 * using the getIndex(Constants.PREPASS_NORMAL_TEXTURE_TYPE)
 */ Constants.PREPASS_NORMAL_TEXTURE_TYPE = 6;
/**
 * Constant used to retrieve (sqrt) albedo index in the textures array in the prepass
 * using the getIndex(Constants.PREPASS_ALBEDO_SQRT_TEXTURE_TYPE)
 */ Constants.PREPASS_ALBEDO_SQRT_TEXTURE_TYPE = 7;
/**
 * Constant used to retrieve world normal index in the textures array in the prepass
 * using the getIndex(Constants.PREPASS_WORLD_NORMAL_TEXTURE_TYPE)
 */ Constants.PREPASS_WORLD_NORMAL_TEXTURE_TYPE = 8;
/**
 * Constant used to retrieve the local position texture index in the textures array in the prepass
 * using getIndex(Constants.PREPASS_LOCAL_POSITION_TEXTURE_TYPE)
 */ Constants.PREPASS_LOCAL_POSITION_TEXTURE_TYPE = 9;
/**
 * Constant used to retrieve screen-space (non-linear) depth index in the textures array in the prepass
 * using the getIndex(Constants.PREPASS_SCREENSPACE_DEPTH_TEXTURE_TYPE)
 */ Constants.PREPASS_SCREENSPACE_DEPTH_TEXTURE_TYPE = 10;
/**
 * Constant used to retrieve the velocity texture index in the textures array in the prepass
 * using getIndex(Constants.PREPASS_VELOCITY_LINEAR_TEXTURE_TYPE)
 */ Constants.PREPASS_VELOCITY_LINEAR_TEXTURE_TYPE = 11;
/**
 * Constant used to retrieve albedo index in the textures array in the prepass
 * using the getIndex(Constants.PREPASS_ALBEDO_TEXTURE_TYPE)
 */ Constants.PREPASS_ALBEDO_TEXTURE_TYPE = 12;
/**
 * Constant used to retrieve normalized camera view depth geometry texture
 */ Constants.PREPASS_NORMALIZED_VIEW_DEPTH_TEXTURE_TYPE = 13;
/** Flag to create a readable buffer (the buffer can be the source of a copy) */ Constants.BUFFER_CREATIONFLAG_READ = 1;
/** Flag to create a writable buffer (the buffer can be the destination of a copy) */ Constants.BUFFER_CREATIONFLAG_WRITE = 2;
/** Flag to create a readable and writable buffer */ Constants.BUFFER_CREATIONFLAG_READWRITE = 3;
/** Flag to create a buffer suitable to be used as a uniform buffer */ Constants.BUFFER_CREATIONFLAG_UNIFORM = 4;
/** Flag to create a buffer suitable to be used as a vertex buffer */ Constants.BUFFER_CREATIONFLAG_VERTEX = 8;
/** Flag to create a buffer suitable to be used as an index buffer */ Constants.BUFFER_CREATIONFLAG_INDEX = 16;
/** Flag to create a buffer suitable to be used as a storage buffer */ Constants.BUFFER_CREATIONFLAG_STORAGE = 32;
/** Flag to create a buffer suitable to be used for indirect calls, such as `dispatchIndirect` */ Constants.BUFFER_CREATIONFLAG_INDIRECT = 64;
/**
 * Prefixes used by the engine for sub mesh draw wrappers
 */ /** @internal */ Constants.RENDERPASS_MAIN = 0;
/**
 * Constant used as key code for Alt key
 */ Constants.INPUT_ALT_KEY = 18;
/**
 * Constant used as key code for Ctrl key
 */ Constants.INPUT_CTRL_KEY = 17;
/**
 * Constant used as key code for Meta key (Left Win, Left Cmd)
 */ Constants.INPUT_META_KEY1 = 91;
/**
 * Constant used as key code for Meta key (Right Win)
 */ Constants.INPUT_META_KEY2 = 92;
/**
 * Constant used as key code for Meta key (Right Win, Right Cmd)
 */ Constants.INPUT_META_KEY3 = 93;
/**
 * Constant used as key code for Shift key
 */ Constants.INPUT_SHIFT_KEY = 16;
/** Standard snapshot rendering. In this mode, some form of dynamic behavior is possible (for eg, uniform buffers are still updated) */ Constants.SNAPSHOTRENDERING_STANDARD = 0;
/** Fast snapshot rendering. In this mode, everything is static and only some limited form of dynamic behaviour is possible */ Constants.SNAPSHOTRENDERING_FAST = 1;
/**
 * This is the default projection mode used by the cameras.
 * It helps recreating a feeling of perspective and better appreciate depth.
 * This is the best way to simulate real life cameras.
 */ Constants.PERSPECTIVE_CAMERA = 0;
/**
 * This helps creating camera with an orthographic mode.
 * Orthographic is commonly used in engineering as a means to produce object specifications that communicate dimensions unambiguously, each line of 1 unit length (cm, meter..whatever) will appear to have the same length everywhere on the drawing. This allows the drafter to dimension only a subset of lines and let the reader know that other lines of that length on the drawing are also that length in reality. Every parallel line in the drawing is also parallel in the object.
 */ Constants.ORTHOGRAPHIC_CAMERA = 1;
/**
 * This is the default FOV mode for perspective cameras.
 * This setting aligns the upper and lower bounds of the viewport to the upper and lower bounds of the camera frustum.
 */ Constants.FOVMODE_VERTICAL_FIXED = 0;
/**
 * This setting aligns the left and right bounds of the viewport to the left and right bounds of the camera frustum.
 */ Constants.FOVMODE_HORIZONTAL_FIXED = 1;
/**
 * This specifies there is no need for a camera rig.
 * Basically only one eye is rendered corresponding to the camera.
 */ Constants.RIG_MODE_NONE = 0;
/**
 * Simulates a camera Rig with one blue eye and one red eye.
 * This can be use with 3d blue and red glasses.
 */ Constants.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10;
/**
 * Defines that both eyes of the camera will be rendered side by side with a parallel target.
 */ Constants.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11;
/**
 * Defines that both eyes of the camera will be rendered side by side with a none parallel target.
 */ Constants.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12;
/**
 * Defines that both eyes of the camera will be rendered over under each other.
 */ Constants.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13;
/**
 * Defines that both eyes of the camera will be rendered on successive lines interlaced for passive 3d monitors.
 */ Constants.RIG_MODE_STEREOSCOPIC_INTERLACED = 14;
/**
 * Defines that both eyes of the camera should be renderered in a VR mode (carbox).
 */ Constants.RIG_MODE_VR = 20;
/**
 * Custom rig mode allowing rig cameras to be populated manually with any number of cameras
 */ Constants.RIG_MODE_CUSTOM = 22;
/**
 * Maximum number of uv sets supported
 */ Constants.MAX_SUPPORTED_UV_SETS = 6;
/**
 * GL constants
 */ /** Alpha blend equation: ADD */ Constants.GL_ALPHA_EQUATION_ADD = 0x8006;
/** Alpha equation: MIN */ Constants.GL_ALPHA_EQUATION_MIN = 0x8007;
/** Alpha equation: MAX */ Constants.GL_ALPHA_EQUATION_MAX = 0x8008;
/** Alpha equation: SUBTRACT */ Constants.GL_ALPHA_EQUATION_SUBTRACT = 0x800a;
/** Alpha equation: REVERSE_SUBTRACT */ Constants.GL_ALPHA_EQUATION_REVERSE_SUBTRACT = 0x800b;
/** Alpha blend function: SRC */ Constants.GL_ALPHA_FUNCTION_SRC = 0x0300;
/** Alpha blend function: ONE_MINUS_SRC */ Constants.GL_ALPHA_FUNCTION_ONE_MINUS_SRC_COLOR = 0x0301;
/** Alpha blend function: SRC_ALPHA */ Constants.GL_ALPHA_FUNCTION_SRC_ALPHA = 0x0302;
/** Alpha blend function: ONE_MINUS_SRC_ALPHA */ Constants.GL_ALPHA_FUNCTION_ONE_MINUS_SRC_ALPHA = 0x0303;
/** Alpha blend function: DST_ALPHA */ Constants.GL_ALPHA_FUNCTION_DST_ALPHA = 0x0304;
/** Alpha blend function: ONE_MINUS_DST_ALPHA */ Constants.GL_ALPHA_FUNCTION_ONE_MINUS_DST_ALPHA = 0x0305;
/** Alpha blend function: ONE_MINUS_DST */ Constants.GL_ALPHA_FUNCTION_DST_COLOR = 0x0306;
/** Alpha blend function: ONE_MINUS_DST */ Constants.GL_ALPHA_FUNCTION_ONE_MINUS_DST_COLOR = 0x0307;
/** Alpha blend function: SRC_ALPHA_SATURATED */ Constants.GL_ALPHA_FUNCTION_SRC_ALPHA_SATURATED = 0x0308;
/** Alpha blend function: CONSTANT */ Constants.GL_ALPHA_FUNCTION_CONSTANT_COLOR = 0x8001;
/** Alpha blend function: ONE_MINUS_CONSTANT */ Constants.GL_ALPHA_FUNCTION_ONE_MINUS_CONSTANT_COLOR = 0x8002;
/** Alpha blend function: CONSTANT_ALPHA */ Constants.GL_ALPHA_FUNCTION_CONSTANT_ALPHA = 0x8003;
/** Alpha blend function: ONE_MINUS_CONSTANT_ALPHA */ Constants.GL_ALPHA_FUNCTION_ONE_MINUS_CONSTANT_ALPHA = 0x8004;
/** Alpha blend function: SRC1 */ Constants.GL_ALPHA_FUNCTION_SRC1_COLOR = 0x88f9;
/** Alpha blend function: SRC1 */ Constants.GL_ALPHA_FUNCTION_ONE_MINUS_SRC1_COLOR = 0x88fa;
/** Alpha blend function: SRC1 */ Constants.GL_ALPHA_FUNCTION_SRC1_ALPHA = 0x8589;
/** Alpha blend function: SRC1 */ Constants.GL_ALPHA_FUNCTION_ONE_MINUS_SRC1_ALPHA = 0x88fb;
/** URL to the snippet server. Points to the public snippet server by default */ Constants.SnippetUrl = "https://snippet.babylonjs.com";
/** The fog is deactivated */ Constants.FOGMODE_NONE = 0;
/** The fog density is following an exponential function */ Constants.FOGMODE_EXP = 1;
/** The fog density is following an exponential function faster than FOGMODE_EXP */ Constants.FOGMODE_EXP2 = 2;
/** The fog density is following a linear function. */ Constants.FOGMODE_LINEAR = 3;
/**
 * The byte type.
 */ Constants.BYTE = 5120;
/**
 * The unsigned byte type.
 */ Constants.UNSIGNED_BYTE = 5121;
/**
 * The short type.
 */ Constants.SHORT = 5122;
/**
 * The unsigned short type.
 */ Constants.UNSIGNED_SHORT = 5123;
/**
 * The integer type.
 */ Constants.INT = 5124;
/**
 * The unsigned integer type.
 */ Constants.UNSIGNED_INT = 5125;
/**
 * The float type.
 */ Constants.FLOAT = 5126;
/**
 * Positions
 */ Constants.PositionKind = "position";
/**
 * Normals
 */ Constants.NormalKind = "normal";
/**
 * Tangents
 */ Constants.TangentKind = "tangent";
/**
 * Texture coordinates
 */ Constants.UVKind = "uv";
/**
 * Texture coordinates 2
 */ Constants.UV2Kind = "uv2";
/**
 * Texture coordinates 3
 */ Constants.UV3Kind = "uv3";
/**
 * Texture coordinates 4
 */ Constants.UV4Kind = "uv4";
/**
 * Texture coordinates 5
 */ Constants.UV5Kind = "uv5";
/**
 * Texture coordinates 6
 */ Constants.UV6Kind = "uv6";
/**
 * Colors
 */ Constants.ColorKind = "color";
/**
 * Instance Colors
 */ Constants.ColorInstanceKind = "instanceColor";
/**
 * Matrix indices (for bones)
 */ Constants.MatricesIndicesKind = "matricesIndices";
/**
 * Matrix weights (for bones)
 */ Constants.MatricesWeightsKind = "matricesWeights";
/**
 * Additional matrix indices (for bones)
 */ Constants.MatricesIndicesExtraKind = "matricesIndicesExtra";
/**
 * Additional matrix weights (for bones)
 */ Constants.MatricesWeightsExtraKind = "matricesWeightsExtra";
// Animation type
/**
 * Float animation type
 */ Constants.ANIMATIONTYPE_FLOAT = 0;
/**
 * Vector3 animation type
 */ Constants.ANIMATIONTYPE_VECTOR3 = 1;
/**
 * Quaternion animation type
 */ Constants.ANIMATIONTYPE_QUATERNION = 2;
/**
 * Matrix animation type
 */ Constants.ANIMATIONTYPE_MATRIX = 3;
/**
 * Color3 animation type
 */ Constants.ANIMATIONTYPE_COLOR3 = 4;
/**
 * Color3 animation type
 */ Constants.ANIMATIONTYPE_COLOR4 = 7;
/**
 * Vector2 animation type
 */ Constants.ANIMATIONTYPE_VECTOR2 = 5;
/**
 * Size animation type
 */ Constants.ANIMATIONTYPE_SIZE = 6;
/**
 * The default minZ value for the near plane of a frustum light
 */ Constants.ShadowMinZ = 0;
/**
 * The default maxZ value for the far plane of a frustum light
 */ Constants.ShadowMaxZ = 10000; //# sourceMappingURL=constants.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/engineCapabilities.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
 //# sourceMappingURL=engineCapabilities.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/instancingAttributeInfo.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
 //# sourceMappingURL=instancingAttributeInfo.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/nullEngine.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/no-unused-vars */ __turbopack_context__.s([
    "NullEngine",
    ()=>NullEngine,
    "NullEngineOptions",
    ()=>NullEngineOptions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/engine.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$internalTexture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/internalTexture.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$dataBuffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Buffers/dataBuffer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$performanceConfigurator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/performanceConfigurator.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$renderTargetWrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/renderTargetWrapper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$drawWrapper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/drawWrapper.functions.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
class NullEngineOptions {
    constructor(){
        /**
         * Render width (Default: 512)
         */ this.renderWidth = 512;
        /**
         * Render height (Default: 256)
         */ this.renderHeight = 256;
        /**
         * Texture size (Default: 512)
         */ this.textureSize = 512;
        /**
         * If delta time between frames should be constant
         * @see https://doc.babylonjs.com/features/featuresDeepDive/animation/advanced_animations#deterministic-lockstep
         */ this.deterministicLockstep = false;
        /**
         * Maximum about of steps between frames (Default: 4)
         * @see https://doc.babylonjs.com/features/featuresDeepDive/animation/advanced_animations#deterministic-lockstep
         */ this.lockstepMaxSteps = 4;
    }
}
class NullEngine extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Engine"] {
    /**
     * Gets a boolean indicating that the engine is running in deterministic lock step mode
     * @see https://doc.babylonjs.com/features/featuresDeepDive/animation/advanced_animations#deterministic-lockstep
     * @returns true if engine is in deterministic lock step mode
     */ isDeterministicLockStep() {
        return this._options.deterministicLockstep;
    }
    /**
     * Gets the max steps when engine is running in deterministic lock step
     * @see https://doc.babylonjs.com/features/featuresDeepDive/animation/advanced_animations#deterministic-lockstep
     * @returns the max steps
     */ getLockstepMaxSteps() {
        return this._options.lockstepMaxSteps;
    }
    /**
     * Gets the current hardware scaling level.
     * By default the hardware scaling level is computed from the window device ratio.
     * if level = 1 then the engine will render at the exact resolution of the canvas. If level = 0.5 then the engine will render at twice the size of the canvas.
     * @returns a number indicating the current hardware scaling level
     */ getHardwareScalingLevel() {
        return 1.0;
    }
    constructor(options = new NullEngineOptions()){
        super(null);
        if (options.deterministicLockstep === undefined) {
            options.deterministicLockstep = false;
        }
        if (options.timeStep !== undefined) {
            this._timeStep = options.timeStep;
        }
        if (options.lockstepMaxSteps === undefined) {
            options.lockstepMaxSteps = 4;
        }
        this._options = options;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$performanceConfigurator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PerformanceConfigurator"].SetMatrixPrecision(!!options.useHighPrecisionMatrix);
        // Init caps
        // We consider we are on a webgl1 capable device
        this._caps = {
            maxTexturesImageUnits: 16,
            maxVertexTextureImageUnits: 16,
            maxCombinedTexturesImageUnits: 32,
            maxTextureSize: 512,
            maxCubemapTextureSize: 512,
            maxDrawBuffers: 0,
            maxRenderTextureSize: 512,
            maxVertexAttribs: 16,
            maxVaryingVectors: 16,
            maxFragmentUniformVectors: 16,
            maxVertexUniformVectors: 16,
            shaderFloatPrecision: 10,
            standardDerivatives: false,
            astc: null,
            pvrtc: null,
            etc1: null,
            etc2: null,
            bptc: null,
            maxAnisotropy: 0,
            uintIndices: false,
            fragmentDepthSupported: false,
            highPrecisionShaderSupported: true,
            colorBufferFloat: false,
            blendFloat: false,
            supportFloatTexturesResolve: false,
            rg11b10ufColorRenderable: false,
            textureFloat: false,
            textureFloatLinearFiltering: false,
            textureFloatRender: false,
            textureHalfFloat: false,
            textureHalfFloatLinearFiltering: false,
            textureHalfFloatRender: false,
            textureLOD: false,
            texelFetch: false,
            drawBuffersExtension: false,
            depthTextureExtension: false,
            vertexArrayObject: false,
            instancedArrays: false,
            supportOcclusionQuery: false,
            canUseTimestampForTimerQuery: false,
            maxMSAASamples: 1,
            blendMinMax: false,
            canUseGLInstanceID: false,
            canUseGLVertexID: false,
            supportComputeShaders: false,
            supportSRGBBuffers: false,
            supportTransformFeedbacks: false,
            textureMaxLevel: false,
            texture2DArrayMaxLayerCount: 128,
            disableMorphTargetTexture: false,
            textureNorm16: false,
            blendParametersPerTarget: false,
            dualSourceBlending: false
        };
        this._features = {
            forceBitmapOverHTMLImageElement: false,
            supportRenderAndCopyToLodForFloatTextures: false,
            supportDepthStencilTexture: false,
            supportShadowSamplers: false,
            uniformBufferHardCheckMatrix: false,
            allowTexturePrefiltering: false,
            trackUbosInFrame: false,
            checkUbosContentBeforeUpload: false,
            supportCSM: false,
            basisNeedsPOT: false,
            support3DTextures: false,
            needTypeSuffixInShaderConstants: false,
            supportMSAA: false,
            supportSSAO2: false,
            supportIBLShadows: false,
            supportExtendedTextureFormats: false,
            supportSwitchCaseInShader: false,
            supportSyncTextureRead: false,
            needsInvertingBitmap: false,
            useUBOBindingCache: false,
            needShaderCodeInlining: false,
            needToAlwaysBindUniformBuffers: false,
            supportRenderPasses: true,
            supportSpriteInstancing: false,
            forceVertexBufferStrideAndOffsetMultiple4Bytes: false,
            _checkNonFloatVertexBuffersDontRecreatePipelineContext: false,
            _collectUbosUpdatedInFrame: false
        };
        if (options.renderingCanvas) {
            this._renderingCanvas = options.renderingCanvas;
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Log(`Babylon.js v${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Engine"].Version} - Null engine`);
        // Wrappers
        const theCurrentGlobal = typeof self !== "undefined" ? self : ("TURBOPACK compile-time truthy", 1) ? /*TURBOPACK member replacement*/ __turbopack_context__.g : "TURBOPACK unreachable";
        if (typeof URL === "undefined") {
            theCurrentGlobal.URL = {
                createObjectURL: function() {},
                revokeObjectURL: function() {}
            };
        }
        if (typeof Blob === "undefined") {
            theCurrentGlobal.Blob = function() {};
        }
    }
    /**
     * Creates a vertex buffer
     * @param vertices the data for the vertex buffer
     * @returns the new WebGL static buffer
     */ createVertexBuffer(vertices) {
        const buffer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$dataBuffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DataBuffer"]();
        buffer.references = 1;
        return buffer;
    }
    /**
     * Creates a new index buffer
     * @param indices defines the content of the index buffer
     * @returns a new webGL buffer
     */ createIndexBuffer(indices) {
        const buffer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$dataBuffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DataBuffer"]();
        buffer.references = 1;
        return buffer;
    }
    /**
     * Clear the current render buffer or the current render target (if any is set up)
     * @param color defines the color to use
     * @param backBuffer defines if the back buffer must be cleared
     * @param depth defines if the depth buffer must be cleared
     * @param stencil defines if the stencil buffer must be cleared
     */ clear(color, backBuffer, depth, stencil = false) {}
    /**
     * Gets the current render width
     * @param useScreen defines if screen size must be used (or the current render target if any)
     * @returns a number defining the current render width
     */ getRenderWidth(useScreen = false) {
        if (!useScreen && this._currentRenderTarget) {
            return this._currentRenderTarget.width;
        }
        return this._options.renderWidth;
    }
    /**
     * Gets the current render height
     * @param useScreen defines if screen size must be used (or the current render target if any)
     * @returns a number defining the current render height
     */ getRenderHeight(useScreen = false) {
        if (!useScreen && this._currentRenderTarget) {
            return this._currentRenderTarget.height;
        }
        return this._options.renderHeight;
    }
    /**
     * Set the WebGL's viewport
     * @param viewport defines the viewport element to be used
     * @param requiredWidth defines the width required for rendering. If not provided the rendering canvas' width is used
     * @param requiredHeight defines the height required for rendering. If not provided the rendering canvas' height is used
     */ setViewport(viewport, requiredWidth, requiredHeight) {
        this._cachedViewport = viewport;
    }
    createShaderProgram(pipelineContext, vertexCode, fragmentCode, defines, context) {
        return {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            __SPECTOR_rebuildProgram: null
        };
    }
    /**
     * Gets the list of webGL uniform locations associated with a specific program based on a list of uniform names
     * @param pipelineContext defines the pipeline context to use
     * @param uniformsNames defines the list of uniform names
     * @returns an array of webGL uniform locations
     */ getUniforms(pipelineContext, uniformsNames) {
        return [];
    }
    /**
     * Gets the lsit of active attributes for a given webGL program
     * @param pipelineContext defines the pipeline context to use
     * @param attributesNames defines the list of attribute names to get
     * @returns an array of indices indicating the offset of each attribute
     */ getAttributes(pipelineContext, attributesNames) {
        return [];
    }
    /**
     * Binds an effect to the webGL context
     * @param effect defines the effect to bind
     */ bindSamplers(effect) {
        this._currentEffect = null;
    }
    /**
     * Activates an effect, making it the current one (ie. the one used for rendering)
     * @param effect defines the effect to activate
     */ enableEffect(effect) {
        effect = effect !== null && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$drawWrapper$2e$functions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IsWrapper"])(effect) ? effect.effect : effect; // get only the effect, we don't need a Wrapper in the WebGL engine
        this._currentEffect = effect;
        if (!effect) {
            return;
        }
        if (effect.onBind) {
            effect.onBind(effect);
        }
        if (effect._onBindObservable) {
            effect._onBindObservable.notifyObservers(effect);
        }
    }
    setStateCullFaceType(cullBackFaces, force) {}
    /**
     * Set various states to the webGL context
     * @param culling defines culling state: true to enable culling, false to disable it
     * @param zOffset defines the value to apply to zOffset (0 by default)
     * @param force defines if states must be applied even if cache is up to date
     * @param reverseSide defines if culling must be reversed (CCW if false, CW if true)
     * @param cullBackFaces true to cull back faces, false to cull front faces (if culling is enabled)
     * @param stencil stencil states to set
     * @param zOffsetUnits defines the value to apply to zOffsetUnits (0 by default)
     */ setState(culling, zOffset = 0, force, reverseSide = false, cullBackFaces, stencil, zOffsetUnits = 0) {}
    /**
     * Set the value of an uniform to an array of int32
     * @param uniform defines the webGL uniform location where to store the value
     * @param array defines the array of int32 to store
     * @returns true if value was set
     */ setIntArray(uniform, array) {
        return true;
    }
    /**
     * Set the value of an uniform to an array of int32 (stored as vec2)
     * @param uniform defines the webGL uniform location where to store the value
     * @param array defines the array of int32 to store
     * @returns true if value was set
     */ setIntArray2(uniform, array) {
        return true;
    }
    /**
     * Set the value of an uniform to an array of int32 (stored as vec3)
     * @param uniform defines the webGL uniform location where to store the value
     * @param array defines the array of int32 to store
     * @returns true if value was set
     */ setIntArray3(uniform, array) {
        return true;
    }
    /**
     * Set the value of an uniform to an array of int32 (stored as vec4)
     * @param uniform defines the webGL uniform location where to store the value
     * @param array defines the array of int32 to store
     * @returns true if value was set
     */ setIntArray4(uniform, array) {
        return true;
    }
    /**
     * Set the value of an uniform to an array of float32
     * @param uniform defines the webGL uniform location where to store the value
     * @param array defines the array of float32 to store
     * @returns true if value was set
     */ setFloatArray(uniform, array) {
        return true;
    }
    /**
     * Set the value of an uniform to an array of float32 (stored as vec2)
     * @param uniform defines the webGL uniform location where to store the value
     * @param array defines the array of float32 to store
     * @returns true if value was set
     */ setFloatArray2(uniform, array) {
        return true;
    }
    /**
     * Set the value of an uniform to an array of float32 (stored as vec3)
     * @param uniform defines the webGL uniform location where to store the value
     * @param array defines the array of float32 to store
     * @returns true if value was set
     */ setFloatArray3(uniform, array) {
        return true;
    }
    /**
     * Set the value of an uniform to an array of float32 (stored as vec4)
     * @param uniform defines the webGL uniform location where to store the value
     * @param array defines the array of float32 to store
     * @returns true if value was set
     */ setFloatArray4(uniform, array) {
        return true;
    }
    /**
     * Set the value of an uniform to an array of number
     * @param uniform defines the webGL uniform location where to store the value
     * @param array defines the array of number to store
     * @returns true if value was set
     */ setArray(uniform, array) {
        return true;
    }
    /**
     * Set the value of an uniform to an array of number (stored as vec2)
     * @param uniform defines the webGL uniform location where to store the value
     * @param array defines the array of number to store
     * @returns true if value was set
     */ setArray2(uniform, array) {
        return true;
    }
    /**
     * Set the value of an uniform to an array of number (stored as vec3)
     * @param uniform defines the webGL uniform location where to store the value
     * @param array defines the array of number to store
     * @returns true if value was set
     */ setArray3(uniform, array) {
        return true;
    }
    /**
     * Set the value of an uniform to an array of number (stored as vec4)
     * @param uniform defines the webGL uniform location where to store the value
     * @param array defines the array of number to store
     * @returns true if value was set
     */ setArray4(uniform, array) {
        return true;
    }
    /**
     * Set the value of an uniform to an array of float32 (stored as matrices)
     * @param uniform defines the webGL uniform location where to store the value
     * @param matrices defines the array of float32 to store
     * @returns true if value was set
     */ setMatrices(uniform, matrices) {
        return true;
    }
    /**
     * Set the value of an uniform to a matrix (3x3)
     * @param uniform defines the webGL uniform location where to store the value
     * @param matrix defines the Float32Array representing the 3x3 matrix to store
     * @returns true if value was set
     */ setMatrix3x3(uniform, matrix) {
        return true;
    }
    /**
     * Set the value of an uniform to a matrix (2x2)
     * @param uniform defines the webGL uniform location where to store the value
     * @param matrix defines the Float32Array representing the 2x2 matrix to store
     * @returns true if value was set
     */ setMatrix2x2(uniform, matrix) {
        return true;
    }
    /**
     * Set the value of an uniform to a number (float)
     * @param uniform defines the webGL uniform location where to store the value
     * @param value defines the float number to store
     * @returns true if value was set
     */ setFloat(uniform, value) {
        return true;
    }
    /**
     * Set the value of an uniform to a vec2
     * @param uniform defines the webGL uniform location where to store the value
     * @param x defines the 1st component of the value
     * @param y defines the 2nd component of the value
     * @returns true if value was set
     */ setFloat2(uniform, x, y) {
        return true;
    }
    /**
     * Set the value of an uniform to a vec3
     * @param uniform defines the webGL uniform location where to store the value
     * @param x defines the 1st component of the value
     * @param y defines the 2nd component of the value
     * @param z defines the 3rd component of the value
     * @returns true if value was set
     */ setFloat3(uniform, x, y, z) {
        return true;
    }
    /**
     * Set the value of an uniform to a boolean
     * @param uniform defines the webGL uniform location where to store the value
     * @param bool defines the boolean to store
     * @returns true if value was set
     */ setBool(uniform, bool) {
        return true;
    }
    /**
     * Set the value of an uniform to a vec4
     * @param uniform defines the webGL uniform location where to store the value
     * @param x defines the 1st component of the value
     * @param y defines the 2nd component of the value
     * @param z defines the 3rd component of the value
     * @param w defines the 4th component of the value
     * @returns true if value was set
     */ setFloat4(uniform, x, y, z, w) {
        return true;
    }
    /**
     * Sets the current alpha mode
     * @param mode defines the mode to use (one of the Engine.ALPHA_XXX)
     * @param noDepthWriteChange defines if depth writing state should remains unchanged (false by default)
     * @param targetIndex defines the index of the target to set the alpha mode for (default is 0)
     * @see https://doc.babylonjs.com/features/featuresDeepDive/materials/advanced/transparent_rendering
     */ setAlphaMode(mode, noDepthWriteChange = false, targetIndex = 0) {
        if (this._alphaMode[targetIndex] === mode) {
            return;
        }
        this.alphaState.setAlphaBlend(mode !== 0, 0);
        if (!noDepthWriteChange) {
            this.setDepthWrite(mode === 0);
        }
        this._alphaMode[targetIndex] = mode;
    }
    /**
     * Bind webGl buffers directly to the webGL context
     * @param vertexBuffers defines the vertex buffer to bind
     * @param indexBuffer defines the index buffer to bind
     * @param effect defines the effect associated with the vertex buffer
     */ bindBuffers(vertexBuffers, indexBuffer, effect) {}
    /**
     * Force the entire cache to be cleared
     * You should not have to use this function unless your engine needs to share the webGL context with another engine
     * @param bruteForce defines a boolean to force clearing ALL caches (including stencil, detoh and alpha states)
     */ wipeCaches(bruteForce) {
        if (this.preventCacheWipeBetweenFrames) {
            return;
        }
        this.resetTextureCache();
        this._currentEffect = null;
        if (bruteForce) {
            this._currentProgram = null;
            this._stencilStateComposer.reset();
            this.depthCullingState.reset();
            this.alphaState.reset();
        }
        this._cachedVertexBuffers = null;
        this._cachedIndexBuffer = null;
        this._cachedEffectForVertexBuffers = null;
    }
    /**
     * Send a draw order
     * @param useTriangles defines if triangles must be used to draw (else wireframe will be used)
     * @param indexStart defines the starting index
     * @param indexCount defines the number of index to draw
     * @param instancesCount defines the number of instances to draw (if instantiation is enabled)
     */ draw(useTriangles, indexStart, indexCount, instancesCount) {}
    /**
     * Draw a list of indexed primitives
     * @param fillMode defines the primitive to use
     * @param indexStart defines the starting index
     * @param indexCount defines the number of index to draw
     * @param instancesCount defines the number of instances to draw (if instantiation is enabled)
     */ drawElementsType(fillMode, indexStart, indexCount, instancesCount) {}
    /**
     * Draw a list of unindexed primitives
     * @param fillMode defines the primitive to use
     * @param verticesStart defines the index of first vertex to draw
     * @param verticesCount defines the count of vertices to draw
     * @param instancesCount defines the number of instances to draw (if instantiation is enabled)
     */ drawArraysType(fillMode, verticesStart, verticesCount, instancesCount) {}
    /** @internal */ _createTexture() {
        return {};
    }
    /**
     * @internal
     */ _releaseTexture(texture) {}
    /**
     * Usually called from Texture.ts.
     * Passed information to create a WebGLTexture
     * @param urlArg defines a value which contains one of the following:
     * * A conventional http URL, e.g. 'http://...' or 'file://...'
     * * A base64 string of in-line texture data, e.g. 'data:image/jpg;base64,/...'
     * * An indicator that data being passed using the buffer parameter, e.g. 'data:mytexture.jpg'
     * @param noMipmap defines a boolean indicating that no mipmaps shall be generated.  Ignored for compressed textures.  They must be in the file
     * @param invertY when true, image is flipped when loaded.  You probably want true. Certain compressed textures may invert this if their default is inverted (eg. ktx)
     * @param scene needed for loading to the correct scene
     * @param samplingMode mode with should be used sample / access the texture (Default: Texture.TRILINEAR_SAMPLINGMODE)
     * @param onLoad optional callback to be called upon successful completion
     * @param onError optional callback to be called upon failure
     * @param buffer a source of a file previously fetched as either a base64 string, an ArrayBuffer (compressed or image format), HTMLImageElement (image format), or a Blob
     * @param fallback an internal argument in case the function must be called again, due to etc1 not having alpha capabilities
     * @param format internal format.  Default: RGB when extension is '.jpg' else RGBA.  Ignored for compressed textures
     * @param forcedExtension defines the extension to use to pick the right loader
     * @param mimeType defines an optional mime type
     * @returns a InternalTexture for assignment back into BABYLON.Texture
     */ createTexture(urlArg, noMipmap, invertY, scene, samplingMode = 3, onLoad = null, onError = null, buffer = null, fallback = null, format = null, forcedExtension = null, mimeType) {
        const texture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$internalTexture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InternalTexture"](this, 1 /* InternalTextureSource.Url */ );
        const url = String(urlArg);
        texture.url = url;
        texture.generateMipMaps = !noMipmap;
        texture.samplingMode = samplingMode;
        texture.invertY = invertY;
        texture.baseWidth = this._options.textureSize;
        texture.baseHeight = this._options.textureSize;
        texture.width = this._options.textureSize;
        texture.height = this._options.textureSize;
        if (format) {
            texture.format = format;
        }
        texture.isReady = true;
        if (onLoad) {
            setTimeout(()=>{
                onLoad(texture);
            });
        }
        this._internalTexturesCache.push(texture);
        return texture;
    }
    /**
     * @internal
     */ _createHardwareRenderTargetWrapper(isMulti, isCube, size) {
        const rtWrapper = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$renderTargetWrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RenderTargetWrapper"](isMulti, isCube, size, this);
        this._renderTargetWrapperCache.push(rtWrapper);
        return rtWrapper;
    }
    /**
     * Creates a new render target wrapper
     * @param size defines the size of the texture
     * @param options defines the options used to create the texture
     * @returns a new render target wrapper
     */ createRenderTargetTexture(size, options) {
        const rtWrapper = this._createHardwareRenderTargetWrapper(false, false, size);
        const fullOptions = {};
        if (options !== undefined && typeof options === "object") {
            fullOptions.generateMipMaps = options.generateMipMaps;
            fullOptions.generateDepthBuffer = options.generateDepthBuffer === undefined ? true : options.generateDepthBuffer;
            fullOptions.generateStencilBuffer = fullOptions.generateDepthBuffer && options.generateStencilBuffer;
            fullOptions.type = options.type === undefined ? 0 : options.type;
            fullOptions.samplingMode = options.samplingMode === undefined ? 3 : options.samplingMode;
        } else {
            fullOptions.generateMipMaps = options;
            fullOptions.generateDepthBuffer = true;
            fullOptions.generateStencilBuffer = false;
            fullOptions.type = 0;
            fullOptions.samplingMode = 3;
        }
        const texture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$internalTexture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InternalTexture"](this, 5 /* InternalTextureSource.RenderTarget */ );
        rtWrapper.setTexture(texture);
        const width = size.width || size;
        const height = size.height || size;
        rtWrapper._generateDepthBuffer = fullOptions.generateDepthBuffer;
        rtWrapper._generateStencilBuffer = fullOptions.generateStencilBuffer ? true : false;
        texture.baseWidth = width;
        texture.baseHeight = height;
        texture.width = width;
        texture.height = height;
        texture.isReady = true;
        texture.samples = 1;
        texture.generateMipMaps = fullOptions.generateMipMaps ? true : false;
        texture.samplingMode = fullOptions.samplingMode;
        texture.type = fullOptions.type;
        this._internalTexturesCache.push(texture);
        return rtWrapper;
    }
    /**
     * Creates a new render target wrapper
     * @param size defines the size of the texture
     * @param options defines the options used to create the texture
     * @returns a new render target wrapper
     */ createRenderTargetCubeTexture(size, options) {
        const rtWrapper = this._createHardwareRenderTargetWrapper(false, true, size);
        const fullOptions = {
            generateMipMaps: true,
            generateDepthBuffer: true,
            generateStencilBuffer: false,
            type: 0,
            samplingMode: 3,
            format: 5,
            ...options
        };
        fullOptions.generateStencilBuffer = fullOptions.generateDepthBuffer && fullOptions.generateStencilBuffer;
        if (fullOptions.type === 1 && !this._caps.textureFloatLinearFiltering) {
            // if floating point linear (gl.FLOAT) then force to NEAREST_SAMPLINGMODE
            fullOptions.samplingMode = 1;
        } else if (fullOptions.type === 2 && !this._caps.textureHalfFloatLinearFiltering) {
            // if floating point linear (HALF_FLOAT) then force to NEAREST_SAMPLINGMODE
            fullOptions.samplingMode = 1;
        }
        rtWrapper._generateDepthBuffer = fullOptions.generateDepthBuffer;
        rtWrapper._generateStencilBuffer = fullOptions.generateStencilBuffer ? true : false;
        const texture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$internalTexture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InternalTexture"](this, 5 /* InternalTextureSource.RenderTarget */ );
        texture.baseWidth = size;
        texture.baseHeight = size;
        texture.width = size;
        texture.height = size;
        texture.isReady = true;
        texture.isCube = true;
        texture.samples = 1;
        texture.generateMipMaps = fullOptions.generateMipMaps ? true : false;
        texture.samplingMode = fullOptions.samplingMode;
        texture.type = fullOptions.type;
        this._internalTexturesCache.push(texture);
        return rtWrapper;
    }
    /**
     * Update the sampling mode of a given texture
     * @param samplingMode defines the required sampling mode
     * @param texture defines the texture to update
     */ updateTextureSamplingMode(samplingMode, texture) {
        texture.samplingMode = samplingMode;
    }
    /**
     * Creates a raw texture
     * @param data defines the data to store in the texture
     * @param width defines the width of the texture
     * @param height defines the height of the texture
     * @param format defines the format of the data
     * @param generateMipMaps defines if the engine should generate the mip levels
     * @param invertY defines if data must be stored with Y axis inverted
     * @param samplingMode defines the required sampling mode (Texture.NEAREST_SAMPLINGMODE by default)
     * @param compression defines the compression used (null by default)
     * @param type defines the type fo the data (Engine.TEXTURETYPE_UNSIGNED_BYTE by default)
     * @param creationFlags specific flags to use when creating the texture (1 for storage textures, for eg)
     * @param useSRGBBuffer defines if the texture must be loaded in a sRGB GPU buffer (if supported by the GPU).
     * @returns the raw texture inside an InternalTexture
     */ createRawTexture(data, width, height, format, generateMipMaps, invertY, samplingMode, compression = null, type = 0, creationFlags = 0, useSRGBBuffer = false) {
        const texture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$internalTexture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InternalTexture"](this, 3 /* InternalTextureSource.Raw */ );
        texture.baseWidth = width;
        texture.baseHeight = height;
        texture.width = width;
        texture.height = height;
        texture.format = format;
        texture.generateMipMaps = generateMipMaps;
        texture.samplingMode = samplingMode;
        texture.invertY = invertY;
        texture._compression = compression;
        texture.type = type;
        texture._useSRGBBuffer = useSRGBBuffer;
        if (!this._doNotHandleContextLost) {
            texture._bufferView = data;
        }
        return texture;
    }
    /**
     * Update a raw texture
     * @param texture defines the texture to update
     * @param data defines the data to store in the texture
     * @param format defines the format of the data
     * @param invertY defines if data must be stored with Y axis inverted
     * @param compression defines the compression used (null by default)
     * @param type defines the type fo the data (Engine.TEXTURETYPE_UNSIGNED_BYTE by default)
     * @param useSRGBBuffer defines if the texture must be loaded in a sRGB GPU buffer (if supported by the GPU).
     */ updateRawTexture(texture, data, format, invertY, compression = null, type = 0, useSRGBBuffer = false) {
        if (texture) {
            texture._bufferView = data;
            texture.format = format;
            texture.invertY = invertY;
            texture._compression = compression;
            texture.type = type;
            texture._useSRGBBuffer = useSRGBBuffer;
        }
    }
    /**
     * Binds the frame buffer to the specified texture.
     * @param rtWrapper The render target wrapper to render to
     * @param faceIndex The face of the texture to render to in case of cube texture
     * @param requiredWidth The width of the target to render to
     * @param requiredHeight The height of the target to render to
     * @param forceFullscreenViewport Forces the viewport to be the entire texture/screen if true
     */ bindFramebuffer(rtWrapper, faceIndex, requiredWidth, requiredHeight, forceFullscreenViewport) {
        if (this._currentRenderTarget) {
            this.unBindFramebuffer(this._currentRenderTarget);
        }
        this._currentRenderTarget = rtWrapper;
        this._currentFramebuffer = null;
        if (this._cachedViewport && !forceFullscreenViewport) {
            this.setViewport(this._cachedViewport, requiredWidth, requiredHeight);
        }
    }
    /**
     * Unbind the current render target texture from the webGL context
     * @param rtWrapper defines the render target wrapper to unbind
     * @param disableGenerateMipMaps defines a boolean indicating that mipmaps must not be generated
     * @param onBeforeUnbind defines a function which will be called before the effective unbind
     */ unBindFramebuffer(rtWrapper, disableGenerateMipMaps = false, onBeforeUnbind) {
        this._currentRenderTarget = null;
        if (onBeforeUnbind) {
            onBeforeUnbind();
        }
        this._currentFramebuffer = null;
    }
    /**
     * Creates a dynamic vertex buffer
     * @param vertices the data for the dynamic vertex buffer
     * @returns the new WebGL dynamic buffer
     */ createDynamicVertexBuffer(vertices) {
        const buffer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$dataBuffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DataBuffer"]();
        buffer.references = 1;
        buffer.capacity = 1;
        return buffer;
    }
    /**
     * Update the content of a dynamic texture
     * @param texture defines the texture to update
     * @param canvas defines the canvas containing the source
     * @param invertY defines if data must be stored with Y axis inverted
     * @param premulAlpha defines if alpha is stored as premultiplied
     * @param format defines the format of the data
     */ updateDynamicTexture(texture, canvas, invertY, premulAlpha = false, format) {}
    /**
     * Gets a boolean indicating if all created effects are ready
     * @returns true if all effects are ready
     */ areAllEffectsReady() {
        return true;
    }
    /**
     * @internal
     * Get the current error code of the webGL context
     * @returns the error code
     * @see https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getError
     */ getError() {
        return 0;
    }
    /** @internal */ _getUnpackAlignement() {
        return 1;
    }
    /**
     * @internal
     */ _unpackFlipY(value) {}
    /**
     * Update a dynamic index buffer
     * @param indexBuffer defines the target index buffer
     * @param indices defines the data to update
     * @param offset defines the offset in the target index buffer where update should start
     */ updateDynamicIndexBuffer(indexBuffer, indices, offset = 0) {}
    /**
     * Updates a dynamic vertex buffer.
     * @param vertexBuffer the vertex buffer to update
     * @param vertices the data used to update the vertex buffer
     * @param byteOffset the byte offset of the data (optional)
     * @param byteLength the byte length of the data (optional)
     */ updateDynamicVertexBuffer(vertexBuffer, vertices, byteOffset, byteLength) {}
    /**
     * @internal
     */ _bindTextureDirectly(target, texture) {
        if (this._boundTexturesCache[this._activeChannel] !== texture) {
            this._boundTexturesCache[this._activeChannel] = texture;
            return true;
        }
        return false;
    }
    /**
     * @internal
     */ _bindTexture(channel, texture) {
        if (channel < 0) {
            return;
        }
        this._bindTextureDirectly(0, texture);
    }
    _deleteBuffer(buffer) {}
    /**
     * Force the engine to release all cached effects. This means that next effect compilation will have to be done completely even if a similar effect was already compiled
     */ releaseEffects() {}
    displayLoadingUI() {}
    hideLoadingUI() {}
    set loadingUIText(_) {}
    flushFramebuffer() {}
    /**
     * @internal
     */ _uploadCompressedDataToTextureDirectly(texture, internalFormat, width, height, data, faceIndex = 0, lod = 0) {}
    /**
     * @internal
     */ _uploadDataToTextureDirectly(texture, imageData, faceIndex = 0, lod = 0) {}
    /**
     * @internal
     */ _uploadArrayBufferViewToTexture(texture, imageData, faceIndex = 0, lod = 0) {}
    /**
     * @internal
     */ _uploadImageToTexture(texture, image, faceIndex = 0, lod = 0) {}
} //# sourceMappingURL=nullEngine.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Native/nativeDataStream.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** @internal */ __turbopack_context__.s([
    "NativeDataStream",
    ()=>NativeDataStream
]);
class NativeDataStream {
    constructor(){
        const buffer = new ArrayBuffer(NativeDataStream.DEFAULT_BUFFER_SIZE);
        this._uint32s = new Uint32Array(buffer);
        this._int32s = new Int32Array(buffer);
        this._float32s = new Float32Array(buffer);
        this._length = NativeDataStream.DEFAULT_BUFFER_SIZE / 4;
        this._position = 0;
        this._nativeDataStream = new _native.NativeDataStream(()=>{
            this._flush();
        });
    }
    /**
     * Writes a uint32 to the stream
     * @param value the value to write
     */ writeUint32(value) {
        this._flushIfNecessary(1);
        this._uint32s[this._position++] = value;
    }
    /**
     * Writes an int32 to the stream
     * @param value the value to write
     */ writeInt32(value) {
        this._flushIfNecessary(1);
        this._int32s[this._position++] = value;
    }
    /**
     * Writes a float32 to the stream
     * @param value the value to write
     */ writeFloat32(value) {
        this._flushIfNecessary(1);
        this._float32s[this._position++] = value;
    }
    /**
     * Writes a uint32 array to the stream
     * @param values the values to write
     */ writeUint32Array(values) {
        this._flushIfNecessary(1 + values.length);
        this._uint32s[this._position++] = values.length;
        this._uint32s.set(values, this._position);
        this._position += values.length;
    }
    /**
     * Writes an int32 array to the stream
     * @param values the values to write
     */ writeInt32Array(values) {
        this._flushIfNecessary(1 + values.length);
        this._uint32s[this._position++] = values.length;
        this._int32s.set(values, this._position);
        this._position += values.length;
    }
    /**
     * Writes a float32 array to the stream
     * @param values the values to write
     */ writeFloat32Array(values) {
        this._flushIfNecessary(1 + values.length);
        this._uint32s[this._position++] = values.length;
        this._float32s.set(values, this._position);
        this._position += values.length;
    }
    /**
     * Writes native data to the stream
     * @param handle the handle to the native data
     */ writeNativeData(handle) {
        this._flushIfNecessary(handle.length);
        this._uint32s.set(handle, this._position);
        this._position += handle.length;
    }
    /**
     * Writes a boolean to the stream
     * @param value the value to write
     */ writeBoolean(value) {
        this.writeUint32(value ? 1 : 0);
    }
    _flushIfNecessary(required) {
        if (this._position + required > this._length) {
            this._flush();
        }
    }
    _flush() {
        this._nativeDataStream.writeBuffer(this._uint32s.buffer, this._position);
        this._position = 0;
    }
}
// Must be multiple of 4!
// eslint-disable-next-line @typescript-eslint/naming-convention
NativeDataStream.DEFAULT_BUFFER_SIZE = 65536; //# sourceMappingURL=nativeDataStream.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Native/nativeShaderProcessors.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NativeShaderProcessor",
    ()=>NativeShaderProcessor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$codeStringParsingTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/codeStringParsingTools.js [app-ssr] (ecmascript)");
;
const VaryingRegex = /(flat\s)?\s*varying\s*.*/;
class NativeShaderProcessor {
    constructor(){
        this.shaderLanguage = 0 /* ShaderLanguage.GLSL */ ;
    }
    initializeShaders(processingContext) {
        this._nativeProcessingContext = processingContext;
        if (this._nativeProcessingContext) {
            this._nativeProcessingContext.remappedAttributeNames = {};
            this._nativeProcessingContext.injectInVertexMain = "";
        }
    }
    attributeProcessor(attribute) {
        if (!this._nativeProcessingContext) {
            return attribute.replace("attribute", "in");
        }
        const attribRegex = /\s*(?:attribute|in)\s+(\S+)\s+(\S+)\s*;/gm;
        const match = attribRegex.exec(attribute);
        if (match !== null) {
            const attributeType = match[1];
            const name = match[2];
            const numComponents = this._nativeProcessingContext.vertexBufferKindToNumberOfComponents[name];
            if (numComponents !== undefined) {
                // Special case for an int/ivecX vertex buffer that is used as a float/vecX attribute in the shader.
                const newType = numComponents < 0 ? numComponents === -1 ? "int" : "ivec" + -numComponents : numComponents === 1 ? "uint" : "uvec" + numComponents;
                const newName = `_int_${name}_`;
                attribute = attribute.replace(match[0], `in ${newType} ${newName}; ${attributeType} ${name};`);
                this._nativeProcessingContext.injectInVertexMain += `${name} = ${attributeType}(${newName});\n`;
                this._nativeProcessingContext.remappedAttributeNames[name] = newName;
            } else {
                attribute = attribute.replace(match[0], `in ${attributeType} ${name};`);
            }
        }
        return attribute;
    }
    varyingCheck(varying, _isFragment) {
        return VaryingRegex.test(varying);
    }
    varyingProcessor(varying, isFragment) {
        return varying.replace("varying", isFragment ? "in" : "out");
    }
    postProcessor(code, defines, isFragment) {
        const hasDrawBuffersExtension = code.search(/#extension.+GL_EXT_draw_buffers.+require/) !== -1;
        // Remove extensions
        const regex = /#extension.+(GL_OVR_multiview2|GL_OES_standard_derivatives|GL_EXT_shader_texture_lod|GL_EXT_frag_depth|GL_EXT_draw_buffers).+(enable|require)/g;
        code = code.replace(regex, "");
        // Replace instructions
        code = code.replace(/texture2D\s*\(/g, "texture(");
        if (isFragment) {
            const hasOutput = code.search(/layout *\(location *= *0\) *out/g) !== -1;
            code = code.replace(/texture2DLodEXT\s*\(/g, "textureLod(");
            code = code.replace(/textureCubeLodEXT\s*\(/g, "textureLod(");
            code = code.replace(/textureCube\s*\(/g, "texture(");
            code = code.replace(/gl_FragDepthEXT/g, "gl_FragDepth");
            code = code.replace(/gl_FragColor/g, "glFragColor");
            code = code.replace(/gl_FragData/g, "glFragData");
            code = code.replace(/void\s+?main\s*\(/g, (hasDrawBuffersExtension || hasOutput ? "" : "layout(location = 0) out vec4 glFragColor;\n") + "void main(");
        } else {
            if (defines.indexOf("#define VERTEXOUTPUT_INVARIANT") >= 0) {
                code = "invariant gl_Position;\n" + code;
            }
            if (this._nativeProcessingContext?.injectInVertexMain) {
                code = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$codeStringParsingTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InjectStartingAndEndingCode"])(code, "void main", this._nativeProcessingContext.injectInVertexMain);
            }
            const hasMultiviewExtension = defines.indexOf("#define MULTIVIEW") !== -1;
            if (hasMultiviewExtension) {
                return "#extension GL_OVR_multiview2 : require\nlayout (num_views = 2) in;\n" + code;
            }
        }
        return code;
    }
} //# sourceMappingURL=nativeShaderProcessors.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Native/nativePipelineContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NativePipelineContext",
    ()=>NativePipelineContext
]);
class NativePipelineContext {
    get isReady() {
        if (this.compilationError) {
            const message = this.compilationError.message;
            throw new Error("SHADER ERROR" + (typeof message === "string" ? "\n" + message : ""));
        }
        return this.isCompiled;
    }
    _getVertexShaderCode() {
        return null;
    }
    _getFragmentShaderCode() {
        return null;
    }
    constructor(engine, isAsync, shaderProcessingContext){
        this.isCompiled = false;
        this.vertexBufferKindToType = {};
        this._valueCache = {};
        this._engine = engine;
        this.isAsync = isAsync;
        this.shaderProcessingContext = shaderProcessingContext;
    }
    _fillEffectInformation(effect, uniformBuffersNames, uniformsNames, uniforms, samplerList, samplers, attributesNames, attributes) {
        const engine = this._engine;
        if (engine.supportsUniformBuffers) {
            for(const name in uniformBuffersNames){
                effect.bindUniformBlock(name, uniformBuffersNames[name]);
            }
        }
        const effectAvailableUniforms = this._engine.getUniforms(this, uniformsNames);
        effectAvailableUniforms.forEach((uniform, index)=>{
            uniforms[uniformsNames[index]] = uniform;
        });
        this._uniforms = uniforms;
        let index;
        for(index = 0; index < samplerList.length; index++){
            const sampler = effect.getUniform(samplerList[index]);
            if (sampler == null) {
                samplerList.splice(index, 1);
                index--;
            }
        }
        samplerList.forEach((name, index)=>{
            samplers[name] = index;
        });
        attributes.push(...engine.getAttributes(this, attributesNames));
    }
    setEngine(engine) {
        this._engine = engine;
    }
    /**
     * Release all associated resources.
     **/ dispose() {
        this._uniforms = {};
    }
    /**
     * @internal
     */ _cacheMatrix(uniformName, matrix) {
        const cache = this._valueCache[uniformName];
        const flag = matrix.updateFlag;
        if (cache !== undefined && cache === flag) {
            return false;
        }
        this._valueCache[uniformName] = flag;
        return true;
    }
    /**
     * @internal
     */ _cacheFloat2(uniformName, x, y) {
        let cache = this._valueCache[uniformName];
        if (!cache) {
            cache = [
                x,
                y
            ];
            this._valueCache[uniformName] = cache;
            return true;
        }
        let changed = false;
        if (cache[0] !== x) {
            cache[0] = x;
            changed = true;
        }
        if (cache[1] !== y) {
            cache[1] = y;
            changed = true;
        }
        return changed;
    }
    /**
     * @internal
     */ _cacheFloat3(uniformName, x, y, z) {
        let cache = this._valueCache[uniformName];
        if (!cache) {
            cache = [
                x,
                y,
                z
            ];
            this._valueCache[uniformName] = cache;
            return true;
        }
        let changed = false;
        if (cache[0] !== x) {
            cache[0] = x;
            changed = true;
        }
        if (cache[1] !== y) {
            cache[1] = y;
            changed = true;
        }
        if (cache[2] !== z) {
            cache[2] = z;
            changed = true;
        }
        return changed;
    }
    /**
     * @internal
     */ _cacheFloat4(uniformName, x, y, z, w) {
        let cache = this._valueCache[uniformName];
        if (!cache) {
            cache = [
                x,
                y,
                z,
                w
            ];
            this._valueCache[uniformName] = cache;
            return true;
        }
        let changed = false;
        if (cache[0] !== x) {
            cache[0] = x;
            changed = true;
        }
        if (cache[1] !== y) {
            cache[1] = y;
            changed = true;
        }
        if (cache[2] !== z) {
            cache[2] = z;
            changed = true;
        }
        if (cache[3] !== w) {
            cache[3] = w;
            changed = true;
        }
        return changed;
    }
    /**
     * Sets an integer value on a uniform variable.
     * @param uniformName Name of the variable.
     * @param value Value to be set.
     */ setInt(uniformName, value) {
        const cache = this._valueCache[uniformName];
        if (cache !== undefined && cache === value) {
            return;
        }
        if (this._engine.setInt(this._uniforms[uniformName], value)) {
            this._valueCache[uniformName] = value;
        }
    }
    /**
     * Sets a int2 on a uniform variable.
     * @param uniformName Name of the variable.
     * @param x First int in int2.
     * @param y Second int in int2.
     */ setInt2(uniformName, x, y) {
        if (this._cacheFloat2(uniformName, x, y)) {
            if (!this._engine.setInt2(this._uniforms[uniformName], x, y)) {
                this._valueCache[uniformName] = null;
            }
        }
    }
    /**
     * Sets a int3 on a uniform variable.
     * @param uniformName Name of the variable.
     * @param x First int in int3.
     * @param y Second int in int3.
     * @param z Third int in int3.
     */ setInt3(uniformName, x, y, z) {
        if (this._cacheFloat3(uniformName, x, y, z)) {
            if (!this._engine.setInt3(this._uniforms[uniformName], x, y, z)) {
                this._valueCache[uniformName] = null;
            }
        }
    }
    /**
     * Sets a int4 on a uniform variable.
     * @param uniformName Name of the variable.
     * @param x First int in int4.
     * @param y Second int in int4.
     * @param z Third int in int4.
     * @param w Fourth int in int4.
     */ setInt4(uniformName, x, y, z, w) {
        if (this._cacheFloat4(uniformName, x, y, z, w)) {
            if (!this._engine.setInt4(this._uniforms[uniformName], x, y, z, w)) {
                this._valueCache[uniformName] = null;
            }
        }
    }
    /**
     * Sets an int array on a uniform variable.
     * @param uniformName Name of the variable.
     * @param array array to be set.
     */ setIntArray(uniformName, array) {
        this._valueCache[uniformName] = null;
        this._engine.setIntArray(this._uniforms[uniformName], array);
    }
    /**
     * Sets an int array 2 on a uniform variable. (Array is specified as single array eg. [1,2,3,4] will result in [[1,2],[3,4]] in the shader)
     * @param uniformName Name of the variable.
     * @param array array to be set.
     */ setIntArray2(uniformName, array) {
        this._valueCache[uniformName] = null;
        this._engine.setIntArray2(this._uniforms[uniformName], array);
    }
    /**
     * Sets an int array 3 on a uniform variable. (Array is specified as single array eg. [1,2,3,4,5,6] will result in [[1,2,3],[4,5,6]] in the shader)
     * @param uniformName Name of the variable.
     * @param array array to be set.
     */ setIntArray3(uniformName, array) {
        this._valueCache[uniformName] = null;
        this._engine.setIntArray3(this._uniforms[uniformName], array);
    }
    /**
     * Sets an int array 4 on a uniform variable. (Array is specified as single array eg. [1,2,3,4,5,6,7,8] will result in [[1,2,3,4],[5,6,7,8]] in the shader)
     * @param uniformName Name of the variable.
     * @param array array to be set.
     */ setIntArray4(uniformName, array) {
        this._valueCache[uniformName] = null;
        this._engine.setIntArray4(this._uniforms[uniformName], array);
    }
    /**
     * Sets an unsigned integer value on a uniform variable.
     * @param uniformName Name of the variable.
     * @param value Value to be set.
     */ setUInt(uniformName, value) {
        const cache = this._valueCache[uniformName];
        if (cache !== undefined && cache === value) {
            return;
        }
        if (this._engine.setUInt(this._uniforms[uniformName], value)) {
            this._valueCache[uniformName] = value;
        }
    }
    /**
     * Sets a unsigned int2 on a uniform variable.
     * @param uniformName Name of the variable.
     * @param x First unsigned int in uint2.
     * @param y Second unsigned int in uint2.
     */ setUInt2(uniformName, x, y) {
        if (this._cacheFloat2(uniformName, x, y)) {
            if (!this._engine.setUInt2(this._uniforms[uniformName], x, y)) {
                this._valueCache[uniformName] = null;
            }
        }
    }
    /**
     * Sets a unsigned int3 on a uniform variable.
     * @param uniformName Name of the variable.
     * @param x First unsigned int in uint3.
     * @param y Second unsigned int in uint3.
     * @param z Third unsigned int in uint3.
     */ setUInt3(uniformName, x, y, z) {
        if (this._cacheFloat3(uniformName, x, y, z)) {
            if (!this._engine.setUInt3(this._uniforms[uniformName], x, y, z)) {
                this._valueCache[uniformName] = null;
            }
        }
    }
    /**
     * Sets a unsigned int4 on a uniform variable.
     * @param uniformName Name of the variable.
     * @param x First unsigned int in uint4.
     * @param y Second unsigned int in uint4.
     * @param z Third unsigned int in uint4.
     * @param w Fourth unsigned int in uint4.
     */ setUInt4(uniformName, x, y, z, w) {
        if (this._cacheFloat4(uniformName, x, y, z, w)) {
            if (!this._engine.setUInt4(this._uniforms[uniformName], x, y, z, w)) {
                this._valueCache[uniformName] = null;
            }
        }
    }
    /**
     * Sets an unsigned int array on a uniform variable.
     * @param uniformName Name of the variable.
     * @param array array to be set.
     */ setUIntArray(uniformName, array) {
        this._valueCache[uniformName] = null;
        this._engine.setUIntArray(this._uniforms[uniformName], array);
    }
    /**
     * Sets an unsigned int array 2 on a uniform variable. (Array is specified as single array eg. [1,2,3,4] will result in [[1,2],[3,4]] in the shader)
     * @param uniformName Name of the variable.
     * @param array array to be set.
     */ setUIntArray2(uniformName, array) {
        this._valueCache[uniformName] = null;
        this._engine.setUIntArray2(this._uniforms[uniformName], array);
    }
    /**
     * Sets an unsigned int array 3 on a uniform variable. (Array is specified as single array eg. [1,2,3,4,5,6] will result in [[1,2,3],[4,5,6]] in the shader)
     * @param uniformName Name of the variable.
     * @param array array to be set.
     */ setUIntArray3(uniformName, array) {
        this._valueCache[uniformName] = null;
        this._engine.setUIntArray3(this._uniforms[uniformName], array);
    }
    /**
     * Sets an unsigned int array 4 on a uniform variable. (Array is specified as single array eg. [1,2,3,4,5,6,7,8] will result in [[1,2,3,4],[5,6,7,8]] in the shader)
     * @param uniformName Name of the variable.
     * @param array array to be set.
     */ setUIntArray4(uniformName, array) {
        this._valueCache[uniformName] = null;
        this._engine.setUIntArray4(this._uniforms[uniformName], array);
    }
    /**
     * Sets an float array on a uniform variable.
     * @param uniformName Name of the variable.
     * @param array array to be set.
     */ setFloatArray(uniformName, array) {
        this._valueCache[uniformName] = null;
        this._engine.setFloatArray(this._uniforms[uniformName], array);
    }
    /**
     * Sets an float array 2 on a uniform variable. (Array is specified as single array eg. [1,2,3,4] will result in [[1,2],[3,4]] in the shader)
     * @param uniformName Name of the variable.
     * @param array array to be set.
     */ setFloatArray2(uniformName, array) {
        this._valueCache[uniformName] = null;
        this._engine.setFloatArray2(this._uniforms[uniformName], array);
    }
    /**
     * Sets an float array 3 on a uniform variable. (Array is specified as single array eg. [1,2,3,4,5,6] will result in [[1,2,3],[4,5,6]] in the shader)
     * @param uniformName Name of the variable.
     * @param array array to be set.
     */ setFloatArray3(uniformName, array) {
        this._valueCache[uniformName] = null;
        this._engine.setFloatArray3(this._uniforms[uniformName], array);
    }
    /**
     * Sets an float array 4 on a uniform variable. (Array is specified as single array eg. [1,2,3,4,5,6,7,8] will result in [[1,2,3,4],[5,6,7,8]] in the shader)
     * @param uniformName Name of the variable.
     * @param array array to be set.
     */ setFloatArray4(uniformName, array) {
        this._valueCache[uniformName] = null;
        this._engine.setFloatArray4(this._uniforms[uniformName], array);
    }
    /**
     * Sets an array on a uniform variable.
     * @param uniformName Name of the variable.
     * @param array array to be set.
     */ setArray(uniformName, array) {
        this._valueCache[uniformName] = null;
        this._engine.setArray(this._uniforms[uniformName], array);
    }
    /**
     * Sets an array 2 on a uniform variable. (Array is specified as single array eg. [1,2,3,4] will result in [[1,2],[3,4]] in the shader)
     * @param uniformName Name of the variable.
     * @param array array to be set.
     */ setArray2(uniformName, array) {
        this._valueCache[uniformName] = null;
        this._engine.setArray2(this._uniforms[uniformName], array);
    }
    /**
     * Sets an array 3 on a uniform variable. (Array is specified as single array eg. [1,2,3,4,5,6] will result in [[1,2,3],[4,5,6]] in the shader)
     * @param uniformName Name of the variable.
     * @param array array to be set.
     */ setArray3(uniformName, array) {
        this._valueCache[uniformName] = null;
        this._engine.setArray3(this._uniforms[uniformName], array);
    }
    /**
     * Sets an array 4 on a uniform variable. (Array is specified as single array eg. [1,2,3,4,5,6,7,8] will result in [[1,2,3,4],[5,6,7,8]] in the shader)
     * @param uniformName Name of the variable.
     * @param array array to be set.
     */ setArray4(uniformName, array) {
        this._valueCache[uniformName] = null;
        this._engine.setArray4(this._uniforms[uniformName], array);
    }
    /**
     * Sets matrices on a uniform variable.
     * @param uniformName Name of the variable.
     * @param matrices matrices to be set.
     */ setMatrices(uniformName, matrices) {
        if (!matrices) {
            return;
        }
        this._valueCache[uniformName] = null;
        this._engine.setMatrices(this._uniforms[uniformName], matrices);
    }
    /**
     * Sets matrix on a uniform variable.
     * @param uniformName Name of the variable.
     * @param matrix matrix to be set.
     */ setMatrix(uniformName, matrix) {
        if (this._cacheMatrix(uniformName, matrix)) {
            if (!this._engine.setMatrices(this._uniforms[uniformName], matrix.asArray())) {
                this._valueCache[uniformName] = null;
            }
        }
    }
    /**
     * Sets a 3x3 matrix on a uniform variable. (Specified as [1,2,3,4,5,6,7,8,9] will result in [1,2,3][4,5,6][7,8,9] matrix)
     * @param uniformName Name of the variable.
     * @param matrix matrix to be set.
     */ setMatrix3x3(uniformName, matrix) {
        this._valueCache[uniformName] = null;
        this._engine.setMatrix3x3(this._uniforms[uniformName], matrix);
    }
    /**
     * Sets a 2x2 matrix on a uniform variable. (Specified as [1,2,3,4] will result in [1,2][3,4] matrix)
     * @param uniformName Name of the variable.
     * @param matrix matrix to be set.
     */ setMatrix2x2(uniformName, matrix) {
        this._valueCache[uniformName] = null;
        this._engine.setMatrix2x2(this._uniforms[uniformName], matrix);
    }
    /**
     * Sets a float on a uniform variable.
     * @param uniformName Name of the variable.
     * @param value value to be set.
     */ setFloat(uniformName, value) {
        const cache = this._valueCache[uniformName];
        if (cache !== undefined && cache === value) {
            return;
        }
        if (this._engine.setFloat(this._uniforms[uniformName], value)) {
            this._valueCache[uniformName] = value;
        }
    }
    /**
     * Sets a boolean on a uniform variable.
     * @param uniformName Name of the variable.
     * @param bool value to be set.
     */ setBool(uniformName, bool) {
        const cache = this._valueCache[uniformName];
        if (cache !== undefined && cache === bool) {
            return;
        }
        if (this._engine.setInt(this._uniforms[uniformName], bool ? 1 : 0)) {
            this._valueCache[uniformName] = bool ? 1 : 0;
        }
    }
    /**
     * Sets a Vector2 on a uniform variable.
     * @param uniformName Name of the variable.
     * @param vector2 vector2 to be set.
     */ setVector2(uniformName, vector2) {
        if (this._cacheFloat2(uniformName, vector2.x, vector2.y)) {
            if (!this._engine.setFloat2(this._uniforms[uniformName], vector2.x, vector2.y)) {
                this._valueCache[uniformName] = null;
            }
        }
    }
    /**
     * Sets a float2 on a uniform variable.
     * @param uniformName Name of the variable.
     * @param x First float in float2.
     * @param y Second float in float2.
     */ setFloat2(uniformName, x, y) {
        if (this._cacheFloat2(uniformName, x, y)) {
            if (!this._engine.setFloat2(this._uniforms[uniformName], x, y)) {
                this._valueCache[uniformName] = null;
            }
        }
    }
    /**
     * Sets a Vector3 on a uniform variable.
     * @param uniformName Name of the variable.
     * @param vector3 Value to be set.
     */ setVector3(uniformName, vector3) {
        if (this._cacheFloat3(uniformName, vector3.x, vector3.y, vector3.z)) {
            if (!this._engine.setFloat3(this._uniforms[uniformName], vector3.x, vector3.y, vector3.z)) {
                this._valueCache[uniformName] = null;
            }
        }
    }
    /**
     * Sets a float3 on a uniform variable.
     * @param uniformName Name of the variable.
     * @param x First float in float3.
     * @param y Second float in float3.
     * @param z Third float in float3.
     */ setFloat3(uniformName, x, y, z) {
        if (this._cacheFloat3(uniformName, x, y, z)) {
            if (!this._engine.setFloat3(this._uniforms[uniformName], x, y, z)) {
                this._valueCache[uniformName] = null;
            }
        }
    }
    /**
     * Sets a Vector4 on a uniform variable.
     * @param uniformName Name of the variable.
     * @param vector4 Value to be set.
     */ setVector4(uniformName, vector4) {
        if (this._cacheFloat4(uniformName, vector4.x, vector4.y, vector4.z, vector4.w)) {
            if (!this._engine.setFloat4(this._uniforms[uniformName], vector4.x, vector4.y, vector4.z, vector4.w)) {
                this._valueCache[uniformName] = null;
            }
        }
    }
    /**
     * Sets a Quaternion on a uniform variable.
     * @param uniformName Name of the variable.
     * @param quaternion Value to be set.
     */ setQuaternion(uniformName, quaternion) {
        if (this._cacheFloat4(uniformName, quaternion.x, quaternion.y, quaternion.z, quaternion.w)) {
            if (!this._engine.setFloat4(this._uniforms[uniformName], quaternion.x, quaternion.y, quaternion.z, quaternion.w)) {
                this._valueCache[uniformName] = null;
            }
        }
    }
    /**
     * Sets a float4 on a uniform variable.
     * @param uniformName Name of the variable.
     * @param x First float in float4.
     * @param y Second float in float4.
     * @param z Third float in float4.
     * @param w Fourth float in float4.
     */ setFloat4(uniformName, x, y, z, w) {
        if (this._cacheFloat4(uniformName, x, y, z, w)) {
            if (!this._engine.setFloat4(this._uniforms[uniformName], x, y, z, w)) {
                this._valueCache[uniformName] = null;
            }
        }
    }
    /**
     * Sets a Color3 on a uniform variable.
     * @param uniformName Name of the variable.
     * @param color3 Value to be set.
     */ setColor3(uniformName, color3) {
        if (this._cacheFloat3(uniformName, color3.r, color3.g, color3.b)) {
            if (!this._engine.setFloat3(this._uniforms[uniformName], color3.r, color3.g, color3.b)) {
                this._valueCache[uniformName] = null;
            }
        }
    }
    /**
     * Sets a Color4 on a uniform variable.
     * @param uniformName Name of the variable.
     * @param color3 Value to be set.
     * @param alpha Alpha value to be set.
     */ setColor4(uniformName, color3, alpha) {
        if (this._cacheFloat4(uniformName, color3.r, color3.g, color3.b, alpha)) {
            if (!this._engine.setFloat4(this._uniforms[uniformName], color3.r, color3.g, color3.b, alpha)) {
                this._valueCache[uniformName] = null;
            }
        }
    }
    /**
     * Sets a Color4 on a uniform variable
     * @param uniformName defines the name of the variable
     * @param color4 defines the value to be set
     */ setDirectColor4(uniformName, color4) {
        if (this._cacheFloat4(uniformName, color4.r, color4.g, color4.b, color4.a)) {
            if (!this._engine.setFloat4(this._uniforms[uniformName], color4.r, color4.g, color4.b, color4.a)) {
                this._valueCache[uniformName] = null;
            }
        }
    }
} //# sourceMappingURL=nativePipelineContext.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Native/nativeRenderTargetWrapper.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NativeRenderTargetWrapper",
    ()=>NativeRenderTargetWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$renderTargetWrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/renderTargetWrapper.js [app-ssr] (ecmascript)");
;
class NativeRenderTargetWrapper extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$renderTargetWrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RenderTargetWrapper"] {
    get _framebuffer() {
        return this.__framebuffer;
    }
    set _framebuffer(framebuffer) {
        if (this.__framebuffer) {
            this._engine._releaseFramebufferObjects(this.__framebuffer);
        }
        this.__framebuffer = framebuffer;
    }
    get _framebufferDepthStencil() {
        return this.__framebufferDepthStencil;
    }
    set _framebufferDepthStencil(framebufferDepthStencil) {
        if (this.__framebufferDepthStencil) {
            this._engine._releaseFramebufferObjects(this.__framebufferDepthStencil);
        }
        this.__framebufferDepthStencil = framebufferDepthStencil;
    }
    constructor(isMulti, isCube, size, engine){
        super(isMulti, isCube, size, engine);
        // eslint-disable-next-line @typescript-eslint/naming-convention
        this.__framebuffer = null;
        // eslint-disable-next-line @typescript-eslint/naming-convention
        this.__framebufferDepthStencil = null;
        this._engine = engine;
    }
    dispose(disposeOnlyFramebuffers = false) {
        this._framebuffer = null;
        this._framebufferDepthStencil = null;
        super.dispose(disposeOnlyFramebuffers);
    }
} //# sourceMappingURL=nativeRenderTargetWrapper.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Native/nativeHardwareTexture.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** @internal */ __turbopack_context__.s([
    "NativeHardwareTexture",
    ()=>NativeHardwareTexture
]);
class NativeHardwareTexture {
    get underlyingResource() {
        return this._nativeTexture;
    }
    constructor(existingTexture, engine){
        this._engine = engine;
        this.set(existingTexture);
    }
    setUsage() {}
    set(hardwareTexture) {
        this._nativeTexture = hardwareTexture;
    }
    reset() {
        this._nativeTexture = null;
    }
    release() {
        if (this._nativeTexture) {
            this._engine.deleteTexture(this._nativeTexture);
        }
        this.reset();
    }
} //# sourceMappingURL=nativeHardwareTexture.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Native/nativeHelpers.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/naming-convention */ __turbopack_context__.s([
    "getNativeAddressMode",
    ()=>getNativeAddressMode,
    "getNativeAlphaMode",
    ()=>getNativeAlphaMode,
    "getNativeAttribType",
    ()=>getNativeAttribType,
    "getNativeSamplingMode",
    ()=>getNativeSamplingMode,
    "getNativeStencilDepthFail",
    ()=>getNativeStencilDepthFail,
    "getNativeStencilDepthPass",
    ()=>getNativeStencilDepthPass,
    "getNativeStencilFunc",
    ()=>getNativeStencilFunc,
    "getNativeStencilOpFail",
    ()=>getNativeStencilOpFail,
    "getNativeTextureFormat",
    ()=>getNativeTextureFormat
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/error.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Buffers/buffer.js [app-ssr] (ecmascript)");
;
;
function getNativeTextureFormat(format, type) {
    switch(format){
        // Depth (type is ignored)
        case 15:
            return _native.Engine.TEXTURE_FORMAT_D16;
        case 16:
            return _native.Engine.TEXTURE_FORMAT_D24;
        case 13:
            return _native.Engine.TEXTURE_FORMAT_D24S8;
        case 14:
            return _native.Engine.TEXTURE_FORMAT_D32F;
        // Compressed (type is ignored)
        case 36492:
            return _native.Engine.TEXTURE_FORMAT_BC7;
        case 36494:
            return _native.Engine.TEXTURE_FORMAT_BC6H;
        case 33779:
            return _native.Engine.TEXTURE_FORMAT_BC3;
        case 33778:
            return _native.Engine.TEXTURE_FORMAT_BC2;
        case 33777:
            return _native.Engine.TEXTURE_FORMAT_BC1;
        case 33776:
            return _native.Engine.TEXTURE_FORMAT_BC1;
        case 37808:
            return _native.Engine.TEXTURE_FORMAT_ASTC4x4;
        case 36196:
            return _native.Engine.TEXTURE_FORMAT_ETC1;
        case 37492:
            return _native.Engine.TEXTURE_FORMAT_ETC2;
        case 37496:
            return _native.Engine.TEXTURE_FORMAT_ETC2A;
        case 4:
            {
                switch(type){
                    case 0:
                        return _native.Engine.TEXTURE_FORMAT_RGB8;
                    case 3:
                        return _native.Engine.TEXTURE_FORMAT_RGB8S;
                    case 6:
                        return _native.Engine.TEXTURE_FORMAT_RGB8I;
                    case 7:
                        return _native.Engine.TEXTURE_FORMAT_RGB8U;
                }
                break;
            }
        case 5:
            {
                switch(type){
                    case 0:
                        return _native.Engine.TEXTURE_FORMAT_RGBA8;
                    case 1:
                        return _native.Engine.TEXTURE_FORMAT_RGBA32F;
                    case 2:
                        return _native.Engine.TEXTURE_FORMAT_RGBA16F;
                    case 3:
                        return _native.Engine.TEXTURE_FORMAT_RGBA8S;
                    case 4:
                        return _native.Engine.TEXTURE_FORMAT_RGBA16I;
                    case 5:
                        return _native.Engine.TEXTURE_FORMAT_RGBA16U;
                    case 6:
                        return _native.Engine.TEXTURE_FORMAT_RGBA32I;
                    case 7:
                        return _native.Engine.TEXTURE_FORMAT_RGBA32U;
                }
                break;
            }
        case 6:
            {
                switch(type){
                    case 0:
                        return _native.Engine.TEXTURE_FORMAT_R8;
                    case 1:
                        return _native.Engine.TEXTURE_FORMAT_R32F;
                    case 2:
                        return _native.Engine.TEXTURE_FORMAT_R16F;
                    case 3:
                        return _native.Engine.TEXTURE_FORMAT_R8S;
                    case 4:
                        return _native.Engine.TEXTURE_FORMAT_R16S;
                    case 5:
                        return _native.Engine.TEXTURE_FORMAT_R16U;
                    case 6:
                        return _native.Engine.TEXTURE_FORMAT_R32I;
                    case 7:
                        return _native.Engine.TEXTURE_FORMAT_R32U;
                }
                break;
            }
        case 7:
            {
                switch(type){
                    case 0:
                        return _native.Engine.TEXTURE_FORMAT_RG8;
                    case 1:
                        return _native.Engine.TEXTURE_FORMAT_RG32F;
                    case 2:
                        return _native.Engine.TEXTURE_FORMAT_RG16F;
                    case 3:
                        return _native.Engine.TEXTURE_FORMAT_RG8S;
                    case 4:
                        return _native.Engine.TEXTURE_FORMAT_RG16S;
                    case 5:
                        return _native.Engine.TEXTURE_FORMAT_RG16U;
                    case 6:
                        return _native.Engine.TEXTURE_FORMAT_RG32I;
                    case 7:
                        return _native.Engine.TEXTURE_FORMAT_RG32U;
                }
                break;
            }
        case 12:
            {
                switch(type){
                    case 0:
                        return _native.Engine.TEXTURE_FORMAT_BGRA8;
                }
                break;
            }
    }
    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RuntimeError"](`Unsupported texture format or type: format ${format}, type ${type}.`, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ErrorCodes"].UnsupportedTextureError);
}
function getNativeSamplingMode(samplingMode) {
    switch(samplingMode){
        case 1:
            return _native.Engine.TEXTURE_NEAREST_NEAREST;
        case 2:
            return _native.Engine.TEXTURE_LINEAR_LINEAR;
        case 3:
            return _native.Engine.TEXTURE_LINEAR_LINEAR_MIPLINEAR;
        case 4:
            return _native.Engine.TEXTURE_NEAREST_NEAREST_MIPNEAREST;
        case 5:
            return _native.Engine.TEXTURE_NEAREST_LINEAR_MIPNEAREST;
        case 6:
            return _native.Engine.TEXTURE_NEAREST_LINEAR_MIPLINEAR;
        case 7:
            return _native.Engine.TEXTURE_NEAREST_LINEAR;
        case 8:
            return _native.Engine.TEXTURE_NEAREST_NEAREST_MIPLINEAR;
        case 9:
            return _native.Engine.TEXTURE_LINEAR_NEAREST_MIPNEAREST;
        case 10:
            return _native.Engine.TEXTURE_LINEAR_NEAREST_MIPLINEAR;
        case 11:
            return _native.Engine.TEXTURE_LINEAR_LINEAR_MIPNEAREST;
        case 12:
            return _native.Engine.TEXTURE_LINEAR_NEAREST;
        default:
            throw new Error(`Unsupported sampling mode: ${samplingMode}.`);
    }
}
function getNativeAddressMode(wrapMode) {
    switch(wrapMode){
        case 1:
            return _native.Engine.ADDRESS_MODE_WRAP;
        case 0:
            return _native.Engine.ADDRESS_MODE_CLAMP;
        case 2:
            return _native.Engine.ADDRESS_MODE_MIRROR;
        default:
            throw new Error("Unexpected wrap mode: " + wrapMode + ".");
    }
}
function getNativeStencilFunc(func) {
    switch(func){
        case 513:
            return _native.Engine.STENCIL_TEST_LESS;
        case 515:
            return _native.Engine.STENCIL_TEST_LEQUAL;
        case 514:
            return _native.Engine.STENCIL_TEST_EQUAL;
        case 518:
            return _native.Engine.STENCIL_TEST_GEQUAL;
        case 516:
            return _native.Engine.STENCIL_TEST_GREATER;
        case 517:
            return _native.Engine.STENCIL_TEST_NOTEQUAL;
        case 512:
            return _native.Engine.STENCIL_TEST_NEVER;
        case 519:
            return _native.Engine.STENCIL_TEST_ALWAYS;
        default:
            throw new Error(`Unsupported stencil func mode: ${func}.`);
    }
}
function getNativeStencilOpFail(opFail) {
    switch(opFail){
        case 7680:
            return _native.Engine.STENCIL_OP_FAIL_S_KEEP;
        case 0:
            return _native.Engine.STENCIL_OP_FAIL_S_ZERO;
        case 7681:
            return _native.Engine.STENCIL_OP_FAIL_S_REPLACE;
        case 7682:
            return _native.Engine.STENCIL_OP_FAIL_S_INCR;
        case 7683:
            return _native.Engine.STENCIL_OP_FAIL_S_DECR;
        case 5386:
            return _native.Engine.STENCIL_OP_FAIL_S_INVERT;
        case 34055:
            return _native.Engine.STENCIL_OP_FAIL_S_INCRSAT;
        case 34056:
            return _native.Engine.STENCIL_OP_FAIL_S_DECRSAT;
        default:
            throw new Error(`Unsupported stencil OpFail mode: ${opFail}.`);
    }
}
function getNativeStencilDepthFail(depthFail) {
    switch(depthFail){
        case 7680:
            return _native.Engine.STENCIL_OP_FAIL_Z_KEEP;
        case 0:
            return _native.Engine.STENCIL_OP_FAIL_Z_ZERO;
        case 7681:
            return _native.Engine.STENCIL_OP_FAIL_Z_REPLACE;
        case 7682:
            return _native.Engine.STENCIL_OP_FAIL_Z_INCR;
        case 7683:
            return _native.Engine.STENCIL_OP_FAIL_Z_DECR;
        case 5386:
            return _native.Engine.STENCIL_OP_FAIL_Z_INVERT;
        case 34055:
            return _native.Engine.STENCIL_OP_FAIL_Z_INCRSAT;
        case 34056:
            return _native.Engine.STENCIL_OP_FAIL_Z_DECRSAT;
        default:
            throw new Error(`Unsupported stencil depthFail mode: ${depthFail}.`);
    }
}
function getNativeStencilDepthPass(opPass) {
    switch(opPass){
        case 7680:
            return _native.Engine.STENCIL_OP_PASS_Z_KEEP;
        case 0:
            return _native.Engine.STENCIL_OP_PASS_Z_ZERO;
        case 7681:
            return _native.Engine.STENCIL_OP_PASS_Z_REPLACE;
        case 7682:
            return _native.Engine.STENCIL_OP_PASS_Z_INCR;
        case 7683:
            return _native.Engine.STENCIL_OP_PASS_Z_DECR;
        case 5386:
            return _native.Engine.STENCIL_OP_PASS_Z_INVERT;
        case 34055:
            return _native.Engine.STENCIL_OP_PASS_Z_INCRSAT;
        case 34056:
            return _native.Engine.STENCIL_OP_PASS_Z_DECRSAT;
        default:
            throw new Error(`Unsupported stencil opPass mode: ${opPass}.`);
    }
}
function getNativeAlphaMode(mode) {
    switch(mode){
        case 0:
            return _native.Engine.ALPHA_DISABLE;
        case 1:
            return _native.Engine.ALPHA_ADD;
        case 2:
            return _native.Engine.ALPHA_COMBINE;
        case 3:
            return _native.Engine.ALPHA_SUBTRACT;
        case 4:
            return _native.Engine.ALPHA_MULTIPLY;
        case 5:
            return _native.Engine.ALPHA_MAXIMIZED;
        case 6:
            return _native.Engine.ALPHA_ONEONE;
        case 7:
            return _native.Engine.ALPHA_PREMULTIPLIED;
        case 8:
            return _native.Engine.ALPHA_PREMULTIPLIED_PORTERDUFF;
        case 9:
            return _native.Engine.ALPHA_INTERPOLATE;
        case 10:
            return _native.Engine.ALPHA_SCREENMODE;
        default:
            throw new Error(`Unsupported alpha mode: ${mode}.`);
    }
}
function getNativeAttribType(type) {
    switch(type){
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].BYTE:
            return _native.Engine.ATTRIB_TYPE_INT8;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].UNSIGNED_BYTE:
            return _native.Engine.ATTRIB_TYPE_UINT8;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].SHORT:
            return _native.Engine.ATTRIB_TYPE_INT16;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].UNSIGNED_SHORT:
            return _native.Engine.ATTRIB_TYPE_UINT16;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].FLOAT:
            return _native.Engine.ATTRIB_TYPE_FLOAT;
        default:
            throw new Error(`Unsupported attribute type: ${type}.`);
    }
} //# sourceMappingURL=nativeHelpers.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Native/nativeShaderProcessingContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @internal
 */ __turbopack_context__.s([
    "NativeShaderProcessingContext",
    ()=>NativeShaderProcessingContext
]);
class NativeShaderProcessingContext {
    constructor(){
        this.vertexBufferKindToNumberOfComponents = {};
        this.remappedAttributeNames = {};
        this.injectInVertexMain = "";
    }
} //# sourceMappingURL=nativeShaderProcessingContext.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Native/validatedNativeDataStream.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ValidatedNativeDataStream",
    ()=>ValidatedNativeDataStream
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$nativeEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/nativeEngine.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Native$2f$nativeDataStream$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Native/nativeDataStream.js [app-ssr] (ecmascript)");
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$nativeEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NativeEngine"]._createNativeDataStream = function() {
    if (_native.NativeDataStream.VALIDATION_ENABLED) {
        return new ValidatedNativeDataStream();
    } else {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Native$2f$nativeDataStream$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NativeDataStream"]();
    }
};
class ValidatedNativeDataStream extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Native$2f$nativeDataStream$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NativeDataStream"] {
    constructor(){
        super();
    }
    writeUint32(value) {
        super.writeUint32(_native.NativeDataStream.VALIDATION_UINT_32);
        super.writeUint32(value);
    }
    writeInt32(value) {
        super.writeUint32(_native.NativeDataStream.VALIDATION_INT_32);
        super.writeInt32(value);
    }
    writeFloat32(value) {
        super.writeUint32(_native.NativeDataStream.VALIDATION_FLOAT_32);
        super.writeFloat32(value);
    }
    writeUint32Array(values) {
        super.writeUint32(_native.NativeDataStream.VALIDATION_UINT_32_ARRAY);
        super.writeUint32Array(values);
    }
    writeInt32Array(values) {
        super.writeUint32(_native.NativeDataStream.VALIDATION_INT_32_ARRAY);
        super.writeInt32Array(values);
    }
    writeFloat32Array(values) {
        super.writeUint32(_native.NativeDataStream.VALIDATION_FLOAT_32_ARRAY);
        super.writeFloat32Array(values);
    }
    writeNativeData(handle) {
        super.writeUint32(_native.NativeDataStream.VALIDATION_NATIVE_DATA);
        super.writeNativeData(handle);
    }
    writeBoolean(value) {
        super.writeUint32(_native.NativeDataStream.VALIDATION_BOOLEAN);
        super.writeBoolean(value);
    }
} //# sourceMappingURL=validatedNativeDataStream.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Native/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Native$2f$nativeDataStream$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Native/nativeDataStream.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Native$2f$validatedNativeDataStream$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Native/validatedNativeDataStream.js [app-ssr] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Native/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NativeDataStream",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Native$2f$nativeDataStream$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NativeDataStream"],
    "ValidatedNativeDataStream",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Native$2f$validatedNativeDataStream$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValidatedNativeDataStream"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Native$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Native/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Native$2f$nativeDataStream$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Native/nativeDataStream.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Native$2f$validatedNativeDataStream$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Native/validatedNativeDataStream.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/nativeEngine.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AcquireNativeObjectAsync",
    ()=>AcquireNativeObjectAsync,
    "NativeEngine",
    ()=>NativeEngine,
    "RegisterNativeTypeAsync",
    ()=>RegisterNativeTypeAsync
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/engine.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$internalTexture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/internalTexture.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/texture.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$dataBuffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Buffers/dataBuffer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/tools.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$environmentTextureTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/environmentTextureTools.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/thinEngine.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/engineStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Processors$2f$shaderCodeInliner$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Processors/shaderCodeInliner.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Native$2f$nativeShaderProcessors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Native/nativeShaderProcessors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Native$2f$nativeDataStream$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Native/nativeDataStream.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Native$2f$nativePipelineContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Native/nativePipelineContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Native$2f$nativeRenderTargetWrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Native/nativeRenderTargetWrapper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Native$2f$nativeHardwareTexture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Native/nativeHardwareTexture.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Native$2f$nativeHelpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Native/nativeHelpers.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$nonFloatVertexBuffers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Buffers/buffer.nonFloatVertexBuffers.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Native$2f$nativeShaderProcessingContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Native/nativeShaderProcessingContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$align$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Buffers/buffer.align.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$textureLoaderManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/Loaders/textureLoaderManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Instrumentation$2f$timeToken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Instrumentation/timeToken.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const onNativeObjectInitialized = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
if (typeof self !== "undefined" && !Object.prototype.hasOwnProperty.call(self, "_native")) {
    let __native;
    Object.defineProperty(self, "_native", {
        get: ()=>__native,
        set: (value)=>{
            __native = value;
            if (__native) {
                onNativeObjectInitialized.notifyObservers(__native);
            }
        }
    });
}
async function AcquireNativeObjectAsync() {
    return await new Promise((resolve)=>{
        if (typeof _native === "undefined") {
            onNativeObjectInitialized.addOnce((nativeObject)=>resolve(nativeObject));
        } else {
            resolve(_native);
        }
    });
}
async function RegisterNativeTypeAsync(typeName, constructor) {
    (await AcquireNativeObjectAsync())[typeName] = constructor;
}
/**
 * Container for accessors for natively-stored mesh data buffers.
 */ class NativeDataBuffer extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$dataBuffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DataBuffer"] {
}
/** @internal */ class CommandBufferEncoder {
    constructor(_engine){
        this._engine = _engine;
        this._pending = new Array();
        this._isCommandBufferScopeActive = false;
        this._commandStream = NativeEngine._createNativeDataStream();
        this._engine.setCommandDataStream(this._commandStream);
    }
    beginCommandScope() {
        if (this._isCommandBufferScopeActive) {
            throw new Error("Command scope already active.");
        }
        this._isCommandBufferScopeActive = true;
    }
    endCommandScope() {
        if (!this._isCommandBufferScopeActive) {
            throw new Error("Command scope is not active.");
        }
        this._isCommandBufferScopeActive = false;
        this._submit();
    }
    startEncodingCommand(command) {
        this._commandStream.writeNativeData(command);
    }
    encodeCommandArgAsUInt32(commandArg) {
        this._commandStream.writeUint32(commandArg);
    }
    encodeCommandArgAsUInt32s(commandArg) {
        this._commandStream.writeUint32Array(commandArg);
    }
    encodeCommandArgAsInt32(commandArg) {
        this._commandStream.writeInt32(commandArg);
    }
    encodeCommandArgAsInt32s(commandArg) {
        this._commandStream.writeInt32Array(commandArg);
    }
    encodeCommandArgAsFloat32(commandArg) {
        this._commandStream.writeFloat32(commandArg);
    }
    encodeCommandArgAsFloat32s(commandArg) {
        this._commandStream.writeFloat32Array(commandArg);
    }
    encodeCommandArgAsNativeData(commandArg) {
        this._commandStream.writeNativeData(commandArg);
        this._pending.push(commandArg);
    }
    finishEncodingCommand() {
        if (!this._isCommandBufferScopeActive) {
            this._submit();
        }
    }
    _submit() {
        this._engine.submitCommands();
        this._pending.length = 0;
    }
}
const remappedAttributesNames = [];
class NativeEngine extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Engine"] {
    setHardwareScalingLevel(level) {
        super.setHardwareScalingLevel(level);
        this._engine.setHardwareScalingLevel(level);
    }
    constructor(options = {}){
        super(null, false, undefined, options.adaptToDeviceRatio);
        this._engine = new _native.Engine({
            version: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Engine"].Version,
            nonFloatVertexBuffers: true
        });
        this._camera = _native.Camera ? new _native.Camera() : null;
        this._commandBufferEncoder = new CommandBufferEncoder(this._engine);
        this._frameStats = {
            gpuTimeNs: Number.NaN
        };
        this._boundBuffersVertexArray = null;
        this._currentDepthTest = _native.Engine.DEPTH_TEST_LEQUAL;
        this._stencilTest = false;
        this._stencilMask = 255;
        this._stencilFunc = 519;
        this._stencilFuncRef = 0;
        this._stencilFuncMask = 255;
        this._stencilOpStencilFail = 7680;
        this._stencilOpDepthFail = 7680;
        this._stencilOpStencilDepthPass = 7681;
        this._zOffset = 0;
        this._zOffsetUnits = 0;
        this._depthWrite = true;
        // warning for non supported fill mode has already been displayed
        this._fillModeWarningDisplayed = false;
        if (_native.Engine.PROTOCOL_VERSION !== NativeEngine.PROTOCOL_VERSION) {
            throw new Error(`Protocol version mismatch: ${_native.Engine.PROTOCOL_VERSION} (Native) !== ${NativeEngine.PROTOCOL_VERSION} (JS)`);
        }
        if (this._engine.setDeviceLostCallback) {
            this._engine.setDeviceLostCallback(()=>{
                this.onContextLostObservable.notifyObservers(this);
                this._contextWasLost = true;
                this._restoreEngineAfterContextLost();
            });
        }
        this._webGLVersion = 2;
        this.disableUniformBuffers = true;
        this._shaderPlatformName = "NATIVE";
        // TODO: Initialize this more correctly based on the hardware capabilities.
        // Init caps
        this._caps = {
            maxTexturesImageUnits: 16,
            maxVertexTextureImageUnits: 16,
            maxCombinedTexturesImageUnits: 32,
            maxTextureSize: _native.Engine.CAPS_LIMITS_MAX_TEXTURE_SIZE,
            maxCubemapTextureSize: 512,
            maxRenderTextureSize: 512,
            maxVertexAttribs: 16,
            maxVaryingVectors: 16,
            maxDrawBuffers: 8,
            maxFragmentUniformVectors: 16,
            maxVertexUniformVectors: 16,
            shaderFloatPrecision: 23,
            standardDerivatives: true,
            astc: null,
            pvrtc: null,
            etc1: null,
            etc2: null,
            bptc: null,
            maxAnisotropy: 16,
            uintIndices: true,
            fragmentDepthSupported: false,
            highPrecisionShaderSupported: true,
            colorBufferFloat: false,
            blendFloat: false,
            supportFloatTexturesResolve: false,
            rg11b10ufColorRenderable: false,
            textureFloat: true,
            textureFloatLinearFiltering: true,
            textureFloatRender: true,
            textureHalfFloat: true,
            textureHalfFloatLinearFiltering: true,
            textureHalfFloatRender: true,
            textureLOD: true,
            texelFetch: false,
            drawBuffersExtension: false,
            depthTextureExtension: false,
            vertexArrayObject: true,
            instancedArrays: true,
            supportOcclusionQuery: false,
            canUseTimestampForTimerQuery: false,
            blendMinMax: false,
            maxMSAASamples: 16,
            canUseGLInstanceID: true,
            canUseGLVertexID: true,
            supportComputeShaders: false,
            supportSRGBBuffers: true,
            supportTransformFeedbacks: false,
            textureMaxLevel: false,
            texture2DArrayMaxLayerCount: _native.Engine.CAPS_LIMITS_MAX_TEXTURE_LAYERS,
            disableMorphTargetTexture: false,
            parallelShaderCompile: {
                COMPLETION_STATUS_KHR: 0
            },
            textureNorm16: false,
            blendParametersPerTarget: false,
            dualSourceBlending: false
        };
        this._features = {
            forceBitmapOverHTMLImageElement: true,
            supportRenderAndCopyToLodForFloatTextures: false,
            supportDepthStencilTexture: false,
            supportShadowSamplers: false,
            uniformBufferHardCheckMatrix: false,
            allowTexturePrefiltering: false,
            trackUbosInFrame: false,
            checkUbosContentBeforeUpload: false,
            supportCSM: false,
            basisNeedsPOT: false,
            support3DTextures: false,
            needTypeSuffixInShaderConstants: false,
            supportMSAA: true,
            supportSSAO2: false,
            supportIBLShadows: false,
            supportExtendedTextureFormats: false,
            supportSwitchCaseInShader: false,
            supportSyncTextureRead: false,
            needsInvertingBitmap: true,
            useUBOBindingCache: true,
            needShaderCodeInlining: true,
            needToAlwaysBindUniformBuffers: false,
            supportRenderPasses: true,
            supportSpriteInstancing: false,
            forceVertexBufferStrideAndOffsetMultiple4Bytes: true,
            _checkNonFloatVertexBuffersDontRecreatePipelineContext: false,
            _collectUbosUpdatedInFrame: false
        };
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tools"].Log("Babylon Native (v" + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Engine"].Version + ") launched");
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tools"].LoadScript = function(scriptUrl, onSuccess, onError, scriptId) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tools"].LoadFile(scriptUrl, (data)=>{
                Function(data).apply(null);
                if (onSuccess) {
                    onSuccess();
                }
            }, undefined, undefined, false, (request, exception)=>{
                if (onError) {
                    onError("LoadScript Error", exception);
                }
            });
        };
        // Wrappers
        if (typeof URL === "undefined") {
            window.URL = {
                createObjectURL: function() {},
                revokeObjectURL: function() {}
            };
        }
        // TODO: Remove in next protocol version update
        if (typeof Blob === "undefined") {
            window.Blob = function(v) {
                return v;
            };
        }
        // polyfill for Chakra
        if (!Array.prototype.flat) {
            Object.defineProperty(Array.prototype, "flat", {
                configurable: true,
                value: function flat() {
                    const depth = isNaN(arguments[0]) ? 1 : Number(arguments[0]);
                    return depth ? Array.prototype.reduce.call(this, function(acc, cur) {
                        if (Array.isArray(cur)) {
                            // eslint-disable-next-line prefer-spread
                            acc.push.apply(acc, flat.call(cur, depth - 1));
                        } else {
                            acc.push(cur);
                        }
                        return acc;
                    }, []) : Array.prototype.slice.call(this);
                },
                writable: true
            });
        }
        // Currently we do not fully configure the ThinEngine on construction of NativeEngine.
        // Setup resolution scaling based on display settings.
        const devicePixelRatio = window ? window.devicePixelRatio || 1.0 : 1.0;
        this._hardwareScalingLevel = options.adaptToDeviceRatio ? 1.0 / devicePixelRatio : 1.0;
        this._engine.setHardwareScalingLevel(this._hardwareScalingLevel);
        this._lastDevicePixelRatio = devicePixelRatio;
        this.resize();
        const currentDepthFunction = this.getDepthFunction();
        if (currentDepthFunction) {
            this.setDepthFunction(currentDepthFunction);
        }
        // Shader processor
        this._shaderProcessor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Native$2f$nativeShaderProcessors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NativeShaderProcessor"]();
        this.onNewSceneAddedObservable.add((scene)=>{
            const originalRender = scene.render;
            scene.render = (...args)=>{
                this._commandBufferEncoder.beginCommandScope();
                originalRender.apply(scene, args);
                this._commandBufferEncoder.endCommandScope();
            };
        });
    }
    dispose() {
        super.dispose();
        if (this._boundBuffersVertexArray) {
            this._deleteVertexArray(this._boundBuffersVertexArray);
        }
        this._engine.dispose();
    }
    /** @internal */ static _createNativeDataStream() {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Native$2f$nativeDataStream$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NativeDataStream"]();
    }
    /**
     * Can be used to override the current requestAnimationFrame requester.
     * @internal
     */ _queueNewFrame(bindedRenderFunction, requester) {
        // Use the provided requestAnimationFrame, unless the requester is the window. In that case, we will default to the Babylon Native version of requestAnimationFrame.
        if (requester.requestAnimationFrame && requester !== window) {
            requester.requestAnimationFrame(bindedRenderFunction);
        } else {
            this._engine.requestAnimationFrame(bindedRenderFunction);
        }
        return 0;
    }
    _restoreEngineAfterContextLost() {
        this._clearEmptyResources();
        const depthTest = this._depthCullingState.depthTest; // backup those values because the call to initEngine / wipeCaches will reset them
        const depthFunc = this._depthCullingState.depthFunc;
        const depthMask = this._depthCullingState.depthMask;
        const stencilTest = this._stencilState.stencilTest;
        this._rebuildGraphicsResources();
        this._depthCullingState.depthTest = depthTest;
        this._depthCullingState.depthFunc = depthFunc;
        this._depthCullingState.depthMask = depthMask;
        this._stencilState.stencilTest = stencilTest;
        this._flagContextRestored();
    }
    /**
     * Override default engine behavior.
     * @param framebuffer
     */ _bindUnboundFramebuffer(framebuffer) {
        if (this._currentFramebuffer !== framebuffer) {
            if (this._currentFramebuffer) {
                this._commandBufferEncoder.startEncodingCommand(_native.Engine.COMMAND_UNBINDFRAMEBUFFER);
                this._commandBufferEncoder.encodeCommandArgAsNativeData(this._currentFramebuffer);
                this._commandBufferEncoder.finishEncodingCommand();
            }
            if (framebuffer) {
                this._commandBufferEncoder.startEncodingCommand(_native.Engine.COMMAND_BINDFRAMEBUFFER);
                this._commandBufferEncoder.encodeCommandArgAsNativeData(framebuffer);
                this._commandBufferEncoder.finishEncodingCommand();
            }
            this._currentFramebuffer = framebuffer;
        }
    }
    /**
     * Gets host document
     * @returns the host document object
     */ getHostDocument() {
        return null;
    }
    clear(color, backBuffer, depth, stencil = false, stencilClearValue = 0) {
        if (this.useReverseDepthBuffer) {
            throw new Error("reverse depth buffer is not currently implemented");
        }
        this._commandBufferEncoder.startEncodingCommand(_native.Engine.COMMAND_CLEAR);
        this._commandBufferEncoder.encodeCommandArgAsUInt32(backBuffer && color ? 1 : 0);
        this._commandBufferEncoder.encodeCommandArgAsFloat32(color ? color.r : 0);
        this._commandBufferEncoder.encodeCommandArgAsFloat32(color ? color.g : 0);
        this._commandBufferEncoder.encodeCommandArgAsFloat32(color ? color.b : 0);
        this._commandBufferEncoder.encodeCommandArgAsFloat32(color ? color.a : 1);
        this._commandBufferEncoder.encodeCommandArgAsUInt32(depth ? 1 : 0);
        this._commandBufferEncoder.encodeCommandArgAsFloat32(1);
        this._commandBufferEncoder.encodeCommandArgAsUInt32(stencil ? 1 : 0);
        this._commandBufferEncoder.encodeCommandArgAsUInt32(stencilClearValue);
        this._commandBufferEncoder.finishEncodingCommand();
    }
    createIndexBuffer(indices, updateable, _label) {
        const data = this._normalizeIndexData(indices);
        const buffer = new NativeDataBuffer();
        buffer.references = 1;
        buffer.is32Bits = data.BYTES_PER_ELEMENT === 4;
        if (data.byteLength) {
            buffer.nativeIndexBuffer = this._engine.createIndexBuffer(data.buffer, data.byteOffset, data.byteLength, buffer.is32Bits, updateable ?? false);
        }
        return buffer;
    }
    createVertexBuffer(vertices, updateable, _label) {
        const data = ArrayBuffer.isView(vertices) ? vertices : new Float32Array(vertices);
        const buffer = new NativeDataBuffer();
        buffer.references = 1;
        if (data.byteLength) {
            buffer.nativeVertexBuffer = this._engine.createVertexBuffer(data.buffer, data.byteOffset, data.byteLength, updateable ?? false);
        }
        return buffer;
    }
    _recordVertexArrayObject(vertexArray, vertexBuffers, indexBuffer, effect, overrideVertexBuffers) {
        if (!effect._checkedNonFloatVertexBuffers) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$nonFloatVertexBuffers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["checkNonFloatVertexBuffers"])(vertexBuffers, effect);
            effect._checkedNonFloatVertexBuffers = true;
        }
        if (indexBuffer) {
            this._engine.recordIndexBuffer(vertexArray, indexBuffer.nativeIndexBuffer);
        }
        const attributes = effect.getAttributesNames();
        for(let index = 0; index < attributes.length; index++){
            const location = effect.getAttributeLocation(index);
            if (location >= 0) {
                const kind = attributes[index];
                let vertexBuffer = null;
                if (overrideVertexBuffers) {
                    vertexBuffer = overrideVertexBuffers[kind];
                }
                if (!vertexBuffer) {
                    vertexBuffer = vertexBuffers[kind];
                }
                if (vertexBuffer) {
                    const buffer = vertexBuffer.effectiveBuffer;
                    if (buffer && buffer.nativeVertexBuffer) {
                        this._engine.recordVertexBuffer(vertexArray, buffer.nativeVertexBuffer, location, vertexBuffer.effectiveByteOffset, vertexBuffer.effectiveByteStride, vertexBuffer.getSize(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Native$2f$nativeHelpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNativeAttribType"])(vertexBuffer.type), vertexBuffer.normalized, vertexBuffer.getInstanceDivisor());
                    }
                }
            }
        }
    }
    bindBuffers(vertexBuffers, indexBuffer, effect) {
        if (this._boundBuffersVertexArray) {
            this._deleteVertexArray(this._boundBuffersVertexArray);
        }
        this._boundBuffersVertexArray = this._engine.createVertexArray();
        this._recordVertexArrayObject(this._boundBuffersVertexArray, vertexBuffers, indexBuffer, effect);
        this.bindVertexArrayObject(this._boundBuffersVertexArray);
    }
    recordVertexArrayObject(vertexBuffers, indexBuffer, effect, overrideVertexBuffers) {
        const vertexArray = this._engine.createVertexArray();
        this._recordVertexArrayObject(vertexArray, vertexBuffers, indexBuffer, effect, overrideVertexBuffers);
        return vertexArray;
    }
    _deleteVertexArray(vertexArray) {
        this._commandBufferEncoder.startEncodingCommand(_native.Engine.COMMAND_DELETEVERTEXARRAY);
        this._commandBufferEncoder.encodeCommandArgAsNativeData(vertexArray);
        this._commandBufferEncoder.finishEncodingCommand();
    }
    bindVertexArrayObject(vertexArray) {
        this._commandBufferEncoder.startEncodingCommand(_native.Engine.COMMAND_BINDVERTEXARRAY);
        this._commandBufferEncoder.encodeCommandArgAsNativeData(vertexArray);
        this._commandBufferEncoder.finishEncodingCommand();
    }
    releaseVertexArrayObject(vertexArray) {
        this._deleteVertexArray(vertexArray);
    }
    getAttributes(pipelineContext, attributesNames) {
        const nativePipelineContext = pipelineContext;
        const nativeShaderProcessingContext = nativePipelineContext.shaderProcessingContext;
        remappedAttributesNames.length = 0;
        for(let index = 0; index < attributesNames.length; index++){
            const origAttributeName = attributesNames[index];
            const attributeName = nativeShaderProcessingContext.remappedAttributeNames[origAttributeName] ?? origAttributeName;
            remappedAttributesNames[index] = attributeName;
        }
        return this._engine.getAttributes(nativePipelineContext.program, remappedAttributesNames);
    }
    /**
     * Triangle Fan and Line Loop are not supported by modern rendering API
     * @param fillMode  defines the primitive to use
     * @returns true if supported
     */ _checkSupportedFillMode(fillMode) {
        if (fillMode == 5 || fillMode == 8) {
            if (!this._fillModeWarningDisplayed) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn("Line Loop and Triangle Fan are not supported fill modes with Babylon Native. Elements with these fill mode will not be visible.");
                this._fillModeWarningDisplayed = true;
            }
            return false;
        }
        return true;
    }
    /**
     * Draw a list of indexed primitives
     * @param fillMode defines the primitive to use
     * @param indexStart defines the starting index
     * @param indexCount defines the number of index to draw
     * @param instancesCount defines the number of instances to draw (if instantiation is enabled)
     */ drawElementsType(fillMode, indexStart, indexCount, instancesCount) {
        if (!this._checkSupportedFillMode(fillMode)) {
            return;
        }
        // Apply states
        this._drawCalls.addCount(1, false);
        if (instancesCount) {
            this._commandBufferEncoder.startEncodingCommand(_native.Engine.COMMAND_DRAWINDEXEDINSTANCED);
            this._commandBufferEncoder.encodeCommandArgAsUInt32(fillMode);
            this._commandBufferEncoder.encodeCommandArgAsUInt32(indexStart);
            this._commandBufferEncoder.encodeCommandArgAsUInt32(indexCount);
            this._commandBufferEncoder.encodeCommandArgAsUInt32(instancesCount);
        } else {
            this._commandBufferEncoder.startEncodingCommand(_native.Engine.COMMAND_DRAWINDEXED);
            this._commandBufferEncoder.encodeCommandArgAsUInt32(fillMode);
            this._commandBufferEncoder.encodeCommandArgAsUInt32(indexStart);
            this._commandBufferEncoder.encodeCommandArgAsUInt32(indexCount);
        }
        this._commandBufferEncoder.finishEncodingCommand();
    }
    /**
     * Draw a list of unindexed primitives
     * @param fillMode defines the primitive to use
     * @param verticesStart defines the index of first vertex to draw
     * @param verticesCount defines the count of vertices to draw
     * @param instancesCount defines the number of instances to draw (if instantiation is enabled)
     */ drawArraysType(fillMode, verticesStart, verticesCount, instancesCount) {
        if (!this._checkSupportedFillMode(fillMode)) {
            return;
        }
        // Apply states
        this._drawCalls.addCount(1, false);
        if (instancesCount) {
            this._commandBufferEncoder.startEncodingCommand(_native.Engine.COMMAND_DRAWINSTANCED);
            this._commandBufferEncoder.encodeCommandArgAsUInt32(fillMode);
            this._commandBufferEncoder.encodeCommandArgAsUInt32(verticesStart);
            this._commandBufferEncoder.encodeCommandArgAsUInt32(verticesCount);
            this._commandBufferEncoder.encodeCommandArgAsUInt32(instancesCount);
        } else {
            this._commandBufferEncoder.startEncodingCommand(_native.Engine.COMMAND_DRAW);
            this._commandBufferEncoder.encodeCommandArgAsUInt32(fillMode);
            this._commandBufferEncoder.encodeCommandArgAsUInt32(verticesStart);
            this._commandBufferEncoder.encodeCommandArgAsUInt32(verticesCount);
        }
        this._commandBufferEncoder.finishEncodingCommand();
    }
    createPipelineContext(shaderProcessingContext) {
        const isAsync = !!this._caps.parallelShaderCompile;
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Native$2f$nativePipelineContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NativePipelineContext"](this, isAsync, shaderProcessingContext);
    }
    createMaterialContext() {
        return undefined;
    }
    createDrawContext() {
        return undefined;
    }
    /**
     * Function is not technically Async
     * @internal
     */ // eslint-disable-next-line no-restricted-syntax
    _preparePipelineContextAsync(pipelineContext, vertexSourceCode, fragmentSourceCode, createAsRaw, _rawVertexSourceCode, _rawFragmentSourceCode, _rebuildRebind, defines, _transformFeedbackVaryings, _key, onReady) {
        if (createAsRaw) {
            this.createRawShaderProgram();
        } else {
            this.createShaderProgram(pipelineContext, vertexSourceCode, fragmentSourceCode, defines);
        }
        onReady();
    }
    /**
     * @internal
     */ _getShaderProcessingContext(_shaderLanguage) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Native$2f$nativeShaderProcessingContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NativeShaderProcessingContext"]();
    }
    /**
     * @internal
     */ _executeWhenRenderingStateIsCompiled(pipelineContext, action) {
        const nativePipelineContext = pipelineContext;
        if (nativePipelineContext.isAsync) {
            if (nativePipelineContext.onCompiled) {
                const oldHandler = nativePipelineContext.onCompiled;
                nativePipelineContext.onCompiled = ()=>{
                    oldHandler();
                    action();
                };
            } else {
                nativePipelineContext.onCompiled = action;
            }
        } else {
            action();
        }
    }
    createRawShaderProgram() {
        throw new Error("Not Supported");
    }
    createShaderProgram(pipelineContext, vertexCode, fragmentCode, defines) {
        const nativePipelineContext = pipelineContext;
        this.onBeforeShaderCompilationObservable.notifyObservers(this);
        const vertexInliner = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Processors$2f$shaderCodeInliner$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderCodeInliner"](vertexCode);
        vertexInliner.processCode();
        vertexCode = vertexInliner.code;
        const fragmentInliner = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Processors$2f$shaderCodeInliner$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderCodeInliner"](fragmentCode);
        fragmentInliner.processCode();
        fragmentCode = fragmentInliner.code;
        vertexCode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ThinEngine"]._ConcatenateShader(vertexCode, defines);
        fragmentCode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ThinEngine"]._ConcatenateShader(fragmentCode, defines);
        const onSuccess = ()=>{
            nativePipelineContext.isCompiled = true;
            nativePipelineContext.onCompiled?.();
            this.onAfterShaderCompilationObservable.notifyObservers(this);
        };
        if (pipelineContext.isAsync) {
            nativePipelineContext.program = this._engine.createProgramAsync(vertexCode, fragmentCode, onSuccess, (error)=>{
                nativePipelineContext.compilationError = error;
            });
        } else {
            try {
                nativePipelineContext.program = this._engine.createProgram(vertexCode, fragmentCode);
                onSuccess();
            } catch (e) {
                const message = e?.message;
                throw new Error("SHADER ERROR" + (typeof message === "string" ? "\n" + message : ""));
            }
        }
        return nativePipelineContext.program;
    }
    /**
     * Inline functions in shader code that are marked to be inlined
     * @param code code to inline
     * @returns inlined code
     */ inlineShaderCode(code) {
        const sci = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Processors$2f$shaderCodeInliner$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderCodeInliner"](code);
        sci.debug = false;
        sci.processCode();
        return sci.code;
    }
    _setProgram(program) {
        if (this._currentProgram !== program) {
            this._commandBufferEncoder.startEncodingCommand(_native.Engine.COMMAND_SETPROGRAM);
            this._commandBufferEncoder.encodeCommandArgAsNativeData(program);
            this._commandBufferEncoder.finishEncodingCommand();
            this._currentProgram = program;
        }
    }
    _deletePipelineContext(pipelineContext) {
        const nativePipelineContext = pipelineContext;
        if (nativePipelineContext && nativePipelineContext.program) {
            this._commandBufferEncoder.startEncodingCommand(_native.Engine.COMMAND_DELETEPROGRAM);
            this._commandBufferEncoder.encodeCommandArgAsNativeData(nativePipelineContext.program);
            this._commandBufferEncoder.finishEncodingCommand();
        }
    }
    getUniforms(pipelineContext, uniformsNames) {
        const nativePipelineContext = pipelineContext;
        return this._engine.getUniforms(nativePipelineContext.program, uniformsNames);
    }
    bindUniformBlock(pipelineContext, blockName, index) {
        // TODO
        throw new Error("Not Implemented");
    }
    bindSamplers(effect) {
        const nativePipelineContext = effect.getPipelineContext();
        this._setProgram(nativePipelineContext.program);
        // TODO: share this with engine?
        const samplers = effect.getSamplers();
        for(let index = 0; index < samplers.length; index++){
            const uniform = effect.getUniform(samplers[index]);
            if (uniform) {
                this._boundUniforms[index] = uniform;
            }
        }
        this._currentEffect = null;
    }
    getRenderWidth(useScreen = false) {
        if (!useScreen && this._currentRenderTarget) {
            return this._currentRenderTarget.width;
        }
        return this._engine.getRenderWidth();
    }
    getRenderHeight(useScreen = false) {
        if (!useScreen && this._currentRenderTarget) {
            return this._currentRenderTarget.height;
        }
        return this._engine.getRenderHeight();
    }
    setViewport(viewport, requiredWidth, requiredHeight) {
        this._cachedViewport = viewport;
        this._commandBufferEncoder.startEncodingCommand(_native.Engine.COMMAND_SETVIEWPORT);
        this._commandBufferEncoder.encodeCommandArgAsFloat32(viewport.x);
        this._commandBufferEncoder.encodeCommandArgAsFloat32(viewport.y);
        this._commandBufferEncoder.encodeCommandArgAsFloat32(viewport.width);
        this._commandBufferEncoder.encodeCommandArgAsFloat32(viewport.height);
        this._commandBufferEncoder.finishEncodingCommand();
    }
    enableScissor(x, y, width, height) {
        this._commandBufferEncoder.startEncodingCommand(_native.Engine.COMMAND_SETSCISSOR);
        this._commandBufferEncoder.encodeCommandArgAsFloat32(x);
        this._commandBufferEncoder.encodeCommandArgAsFloat32(y);
        this._commandBufferEncoder.encodeCommandArgAsFloat32(width);
        this._commandBufferEncoder.encodeCommandArgAsFloat32(height);
        this._commandBufferEncoder.finishEncodingCommand();
    }
    disableScissor() {
        this._commandBufferEncoder.startEncodingCommand(_native.Engine.COMMAND_SETSCISSOR);
        this._commandBufferEncoder.encodeCommandArgAsFloat32(0);
        this._commandBufferEncoder.encodeCommandArgAsFloat32(0);
        this._commandBufferEncoder.encodeCommandArgAsFloat32(0);
        this._commandBufferEncoder.encodeCommandArgAsFloat32(0);
        this._commandBufferEncoder.finishEncodingCommand();
    }
    setStateCullFaceType(_cullBackFaces, _force) {
        throw new Error("setStateCullFaceType: Not Implemented");
    }
    setState(culling, zOffset = 0, force, reverseSide = false, cullBackFaces, stencil, zOffsetUnits = 0) {
        this._zOffset = zOffset;
        this._zOffsetUnits = zOffsetUnits;
        if (this._zOffset !== 0) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tools"].Warn("zOffset is not supported in Native engine.");
        }
        this._commandBufferEncoder.startEncodingCommand(_native.Engine.COMMAND_SETSTATE);
        this._commandBufferEncoder.encodeCommandArgAsUInt32(culling ? 1 : 0);
        this._commandBufferEncoder.encodeCommandArgAsFloat32(zOffset);
        this._commandBufferEncoder.encodeCommandArgAsFloat32(zOffsetUnits);
        this._commandBufferEncoder.encodeCommandArgAsUInt32(this.cullBackFaces ?? cullBackFaces ?? true ? 1 : 0);
        this._commandBufferEncoder.encodeCommandArgAsUInt32(reverseSide ? 1 : 0);
        this._commandBufferEncoder.finishEncodingCommand();
    }
    /**
     * Gets the client rect of native canvas.  Needed for InputManager.
     * @returns a client rectangle
     */ getInputElementClientRect() {
        const rect = {
            bottom: this.getRenderHeight(),
            height: this.getRenderHeight(),
            left: 0,
            right: this.getRenderWidth(),
            top: 0,
            width: this.getRenderWidth(),
            x: 0,
            y: 0,
            toJSON: ()=>{}
        };
        return rect;
    }
    /**
     * Set the z offset Factor to apply to current rendering
     * @param value defines the offset to apply
     */ setZOffset(value) {
        if (value !== this._zOffset) {
            this._zOffset = value;
            this._commandBufferEncoder.startEncodingCommand(_native.Engine.COMMAND_SETZOFFSET);
            this._commandBufferEncoder.encodeCommandArgAsFloat32(this.useReverseDepthBuffer ? -value : value);
            this._commandBufferEncoder.finishEncodingCommand();
        }
    }
    /**
     * Gets the current value of the zOffset Factor
     * @returns the current zOffset Factor state
     */ getZOffset() {
        return this._zOffset;
    }
    /**
     * Set the z offset Units to apply to current rendering
     * @param value defines the offset to apply
     */ setZOffsetUnits(value) {
        if (value !== this._zOffsetUnits) {
            this._zOffsetUnits = value;
            this._commandBufferEncoder.startEncodingCommand(_native.Engine.COMMAND_SETZOFFSETUNITS);
            this._commandBufferEncoder.encodeCommandArgAsFloat32(this.useReverseDepthBuffer ? -value : value);
            this._commandBufferEncoder.finishEncodingCommand();
        }
    }
    /**
     * Gets the current value of the zOffset Units
     * @returns the current zOffset Units state
     */ getZOffsetUnits() {
        return this._zOffsetUnits;
    }
    /**
     * Enable or disable depth buffering
     * @param enable defines the state to set
     */ setDepthBuffer(enable) {
        this._commandBufferEncoder.startEncodingCommand(_native.Engine.COMMAND_SETDEPTHTEST);
        this._commandBufferEncoder.encodeCommandArgAsUInt32(enable ? this._currentDepthTest : _native.Engine.DEPTH_TEST_ALWAYS);
        this._commandBufferEncoder.finishEncodingCommand();
    }
    /**
     * Gets a boolean indicating if depth writing is enabled
     * @returns the current depth writing state
     */ getDepthWrite() {
        return this._depthWrite;
    }
    getDepthFunction() {
        switch(this._currentDepthTest){
            case _native.Engine.DEPTH_TEST_NEVER:
                return 512;
            case _native.Engine.DEPTH_TEST_ALWAYS:
                return 519;
            case _native.Engine.DEPTH_TEST_GREATER:
                return 516;
            case _native.Engine.DEPTH_TEST_GEQUAL:
                return 518;
            case _native.Engine.DEPTH_TEST_NOTEQUAL:
                return 517;
            case _native.Engine.DEPTH_TEST_EQUAL:
                return 514;
            case _native.Engine.DEPTH_TEST_LESS:
                return 513;
            case _native.Engine.DEPTH_TEST_LEQUAL:
                return 515;
        }
        return null;
    }
    setDepthFunction(depthFunc) {
        let nativeDepthFunc = 0;
        switch(depthFunc){
            case 512:
                nativeDepthFunc = _native.Engine.DEPTH_TEST_NEVER;
                break;
            case 519:
                nativeDepthFunc = _native.Engine.DEPTH_TEST_ALWAYS;
                break;
            case 516:
                nativeDepthFunc = _native.Engine.DEPTH_TEST_GREATER;
                break;
            case 518:
                nativeDepthFunc = _native.Engine.DEPTH_TEST_GEQUAL;
                break;
            case 517:
                nativeDepthFunc = _native.Engine.DEPTH_TEST_NOTEQUAL;
                break;
            case 514:
                nativeDepthFunc = _native.Engine.DEPTH_TEST_EQUAL;
                break;
            case 513:
                nativeDepthFunc = _native.Engine.DEPTH_TEST_LESS;
                break;
            case 515:
                nativeDepthFunc = _native.Engine.DEPTH_TEST_LEQUAL;
                break;
        }
        this._currentDepthTest = nativeDepthFunc;
        this._commandBufferEncoder.startEncodingCommand(_native.Engine.COMMAND_SETDEPTHTEST);
        this._commandBufferEncoder.encodeCommandArgAsUInt32(this._currentDepthTest);
        this._commandBufferEncoder.finishEncodingCommand();
    }
    /**
     * Enable or disable depth writing
     * @param enable defines the state to set
     */ setDepthWrite(enable) {
        this._depthWrite = enable;
        this._commandBufferEncoder.startEncodingCommand(_native.Engine.COMMAND_SETDEPTHWRITE);
        this._commandBufferEncoder.encodeCommandArgAsUInt32(Number(enable));
        this._commandBufferEncoder.finishEncodingCommand();
    }
    /**
     * Enable or disable color writing
     * @param enable defines the state to set
     */ setColorWrite(enable) {
        this._colorWrite = enable;
        this._commandBufferEncoder.startEncodingCommand(_native.Engine.COMMAND_SETCOLORWRITE);
        this._commandBufferEncoder.encodeCommandArgAsUInt32(Number(enable));
        this._commandBufferEncoder.finishEncodingCommand();
    }
    /**
     * Gets a boolean indicating if color writing is enabled
     * @returns the current color writing state
     */ getColorWrite() {
        return this._colorWrite;
    }
    applyStencil() {
        this._setStencil(this._stencilMask, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Native$2f$nativeHelpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNativeStencilOpFail"])(this._stencilOpStencilFail), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Native$2f$nativeHelpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNativeStencilDepthFail"])(this._stencilOpDepthFail), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Native$2f$nativeHelpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNativeStencilDepthPass"])(this._stencilOpStencilDepthPass), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Native$2f$nativeHelpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNativeStencilFunc"])(this._stencilFunc), this._stencilFuncRef);
    }
    _setStencil(mask, stencilOpFail, depthOpFail, depthOpPass, func, ref) {
        this._commandBufferEncoder.startEncodingCommand(_native.Engine.COMMAND_SETSTENCIL);
        this._commandBufferEncoder.encodeCommandArgAsUInt32(mask);
        this._commandBufferEncoder.encodeCommandArgAsUInt32(stencilOpFail);
        this._commandBufferEncoder.encodeCommandArgAsUInt32(depthOpFail);
        this._commandBufferEncoder.encodeCommandArgAsUInt32(depthOpPass);
        this._commandBufferEncoder.encodeCommandArgAsUInt32(func);
        this._commandBufferEncoder.encodeCommandArgAsUInt32(ref);
        this._commandBufferEncoder.finishEncodingCommand();
    }
    /**
     * Enable or disable the stencil buffer
     * @param enable defines if the stencil buffer must be enabled or disabled
     */ setStencilBuffer(enable) {
        this._stencilTest = enable;
        if (enable) {
            this.applyStencil();
        } else {
            this._setStencil(255, _native.Engine.STENCIL_OP_FAIL_S_KEEP, _native.Engine.STENCIL_OP_FAIL_Z_KEEP, _native.Engine.STENCIL_OP_PASS_Z_KEEP, _native.Engine.STENCIL_TEST_ALWAYS, 0);
        }
    }
    /**
     * Gets a boolean indicating if stencil buffer is enabled
     * @returns the current stencil buffer state
     */ getStencilBuffer() {
        return this._stencilTest;
    }
    /**
     * Gets the current stencil operation when stencil passes
     * @returns a number defining stencil operation to use when stencil passes
     */ getStencilOperationPass() {
        return this._stencilOpStencilDepthPass;
    }
    /**
     * Sets the stencil operation to use when stencil passes
     * @param operation defines the stencil operation to use when stencil passes
     */ setStencilOperationPass(operation) {
        this._stencilOpStencilDepthPass = operation;
        this.applyStencil();
    }
    /**
     * Sets the current stencil mask
     * @param mask defines the new stencil mask to use
     */ setStencilMask(mask) {
        this._stencilMask = mask;
        this.applyStencil();
    }
    /**
     * Sets the current stencil function
     * @param stencilFunc defines the new stencil function to use
     */ setStencilFunction(stencilFunc) {
        this._stencilFunc = stencilFunc;
        this.applyStencil();
    }
    /**
     * Sets the current stencil reference
     * @param reference defines the new stencil reference to use
     */ setStencilFunctionReference(reference) {
        this._stencilFuncRef = reference;
        this.applyStencil();
    }
    /**
     * Sets the current stencil mask
     * @param mask defines the new stencil mask to use
     */ setStencilFunctionMask(mask) {
        this._stencilFuncMask = mask;
    }
    /**
     * Sets the stencil operation to use when stencil fails
     * @param operation defines the stencil operation to use when stencil fails
     */ setStencilOperationFail(operation) {
        this._stencilOpStencilFail = operation;
        this.applyStencil();
    }
    /**
     * Sets the stencil operation to use when depth fails
     * @param operation defines the stencil operation to use when depth fails
     */ setStencilOperationDepthFail(operation) {
        this._stencilOpDepthFail = operation;
        this.applyStencil();
    }
    /**
     * Gets the current stencil mask
     * @returns a number defining the new stencil mask to use
     */ getStencilMask() {
        return this._stencilMask;
    }
    /**
     * Gets the current stencil function
     * @returns a number defining the stencil function to use
     */ getStencilFunction() {
        return this._stencilFunc;
    }
    /**
     * Gets the current stencil reference value
     * @returns a number defining the stencil reference value to use
     */ getStencilFunctionReference() {
        return this._stencilFuncRef;
    }
    /**
     * Gets the current stencil mask
     * @returns a number defining the stencil mask to use
     */ getStencilFunctionMask() {
        return this._stencilFuncMask;
    }
    /**
     * Gets the current stencil operation when stencil fails
     * @returns a number defining stencil operation to use when stencil fails
     */ getStencilOperationFail() {
        return this._stencilOpStencilFail;
    }
    /**
     * Gets the current stencil operation when depth fails
     * @returns a number defining stencil operation to use when depth fails
     */ getStencilOperationDepthFail() {
        return this._stencilOpDepthFail;
    }
    /**
     * Sets alpha constants used by some alpha blending modes
     * @param r defines the red component
     * @param g defines the green component
     * @param b defines the blue component
     * @param a defines the alpha component
     */ setAlphaConstants(r, g, b, a) {
        throw new Error("Setting alpha blend constant color not yet implemented.");
    }
    /**
     * Sets the current alpha mode
     * @param mode defines the mode to use (one of the BABYLON.undefined)
     * @param noDepthWriteChange defines if depth writing state should remains unchanged (false by default)
     * @param targetIndex defines the index of the target to set the alpha mode for (default is 0)
     * @see https://doc.babylonjs.com/features/featuresDeepDive/materials/advanced/transparent_rendering
     */ setAlphaMode(mode, noDepthWriteChange = false, targetIndex = 0) {
        if (this._alphaMode[targetIndex] === mode) {
            return;
        }
        const nativeMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Native$2f$nativeHelpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNativeAlphaMode"])(mode);
        this._commandBufferEncoder.startEncodingCommand(_native.Engine.COMMAND_SETBLENDMODE);
        this._commandBufferEncoder.encodeCommandArgAsUInt32(nativeMode);
        this._commandBufferEncoder.finishEncodingCommand();
        if (!noDepthWriteChange) {
            this.setDepthWrite(mode === 0);
        }
        this._alphaMode[targetIndex] = mode;
    }
    setInt(uniform, int) {
        if (!uniform) {
            return false;
        }
        this._commandBufferEncoder.startEncodingCommand(_native.Engine.COMMAND_SETINT);
        this._commandBufferEncoder.encodeCommandArgAsNativeData(uniform);
        this._commandBufferEncoder.encodeCommandArgAsInt32(int);
        this._commandBufferEncoder.finishEncodingCommand();
        return true;
    }
    setIntArray(uniform, array) {
        if (!uniform) {
            return false;
        }
        this._commandBufferEncoder.startEncodingCommand(_native.Engine.COMMAND_SETINTARRAY);
        this._commandBufferEncoder.encodeCommandArgAsNativeData(uniform);
        this._commandBufferEncoder.encodeCommandArgAsInt32s(array);
        this._commandBufferEncoder.finishEncodingCommand();
        return true;
    }
    setIntArray2(uniform, array) {
        if (!uniform) {
            return false;
        }
        this._commandBufferEncoder.startEncodingCommand(_native.Engine.COMMAND_SETINTARRAY2);
        this._commandBufferEncoder.encodeCommandArgAsNativeData(uniform);
        this._commandBufferEncoder.encodeCommandArgAsInt32s(array);
        this._commandBufferEncoder.finishEncodingCommand();
        return true;
    }
    setIntArray3(uniform, array) {
        if (!uniform) {
            return false;
        }
        this._commandBufferEncoder.startEncodingCommand(_native.Engine.COMMAND_SETINTARRAY3);
        this._commandBufferEncoder.encodeCommandArgAsNativeData(uniform);
        this._commandBufferEncoder.encodeCommandArgAsInt32s(array);
        this._commandBufferEncoder.finishEncodingCommand();
        return true;
    }
    setIntArray4(uniform, array) {
        if (!uniform) {
            return false;
        }
        this._commandBufferEncoder.startEncodingCommand(_native.Engine.COMMAND_SETINTARRAY4);
        this._commandBufferEncoder.encodeCommandArgAsNativeData(uniform);
        this._commandBufferEncoder.encodeCommandArgAsInt32s(array);
        this._commandBufferEncoder.finishEncodingCommand();
        return true;
    }
    setFloatArray(uniform, array) {
        if (!uniform) {
            return false;
        }
        this._commandBufferEncoder.startEncodingCommand(_native.Engine.COMMAND_SETFLOATARRAY);
        this._commandBufferEncoder.encodeCommandArgAsNativeData(uniform);
        this._commandBufferEncoder.encodeCommandArgAsFloat32s(array);
        this._commandBufferEncoder.finishEncodingCommand();
        return true;
    }
    setFloatArray2(uniform, array) {
        if (!uniform) {
            return false;
        }
        this._commandBufferEncoder.startEncodingCommand(_native.Engine.COMMAND_SETFLOATARRAY2);
        this._commandBufferEncoder.encodeCommandArgAsNativeData(uniform);
        this._commandBufferEncoder.encodeCommandArgAsFloat32s(array);
        this._commandBufferEncoder.finishEncodingCommand();
        return true;
    }
    setFloatArray3(uniform, array) {
        if (!uniform) {
            return false;
        }
        this._commandBufferEncoder.startEncodingCommand(_native.Engine.COMMAND_SETFLOATARRAY3);
        this._commandBufferEncoder.encodeCommandArgAsNativeData(uniform);
        this._commandBufferEncoder.encodeCommandArgAsFloat32s(array);
        this._commandBufferEncoder.finishEncodingCommand();
        return true;
    }
    setFloatArray4(uniform, array) {
        if (!uniform) {
            return false;
        }
        this._commandBufferEncoder.startEncodingCommand(_native.Engine.COMMAND_SETFLOATARRAY4);
        this._commandBufferEncoder.encodeCommandArgAsNativeData(uniform);
        this._commandBufferEncoder.encodeCommandArgAsFloat32s(array);
        this._commandBufferEncoder.finishEncodingCommand();
        return true;
    }
    setArray(uniform, array) {
        if (!uniform) {
            return false;
        }
        return this.setFloatArray(uniform, new Float32Array(array));
    }
    setArray2(uniform, array) {
        if (!uniform) {
            return false;
        }
        return this.setFloatArray2(uniform, new Float32Array(array));
    }
    setArray3(uniform, array) {
        if (!uniform) {
            return false;
        }
        return this.setFloatArray3(uniform, new Float32Array(array));
    }
    setArray4(uniform, array) {
        if (!uniform) {
            return false;
        }
        return this.setFloatArray4(uniform, new Float32Array(array));
    }
    setMatrices(uniform, matrices) {
        if (!uniform) {
            return false;
        }
        this._commandBufferEncoder.startEncodingCommand(_native.Engine.COMMAND_SETMATRICES);
        this._commandBufferEncoder.encodeCommandArgAsNativeData(uniform);
        this._commandBufferEncoder.encodeCommandArgAsFloat32s(matrices);
        this._commandBufferEncoder.finishEncodingCommand();
        return true;
    }
    setMatrix3x3(uniform, matrix) {
        if (!uniform) {
            return false;
        }
        this._commandBufferEncoder.startEncodingCommand(_native.Engine.COMMAND_SETMATRIX3X3);
        this._commandBufferEncoder.encodeCommandArgAsNativeData(uniform);
        this._commandBufferEncoder.encodeCommandArgAsFloat32s(matrix);
        this._commandBufferEncoder.finishEncodingCommand();
        return true;
    }
    setMatrix2x2(uniform, matrix) {
        if (!uniform) {
            return false;
        }
        this._commandBufferEncoder.startEncodingCommand(_native.Engine.COMMAND_SETMATRIX2X2);
        this._commandBufferEncoder.encodeCommandArgAsNativeData(uniform);
        this._commandBufferEncoder.encodeCommandArgAsFloat32s(matrix);
        this._commandBufferEncoder.finishEncodingCommand();
        return true;
    }
    setFloat(uniform, value) {
        if (!uniform) {
            return false;
        }
        this._commandBufferEncoder.startEncodingCommand(_native.Engine.COMMAND_SETFLOAT);
        this._commandBufferEncoder.encodeCommandArgAsNativeData(uniform);
        this._commandBufferEncoder.encodeCommandArgAsFloat32(value);
        this._commandBufferEncoder.finishEncodingCommand();
        return true;
    }
    setFloat2(uniform, x, y) {
        if (!uniform) {
            return false;
        }
        this._commandBufferEncoder.startEncodingCommand(_native.Engine.COMMAND_SETFLOAT2);
        this._commandBufferEncoder.encodeCommandArgAsNativeData(uniform);
        this._commandBufferEncoder.encodeCommandArgAsFloat32(x);
        this._commandBufferEncoder.encodeCommandArgAsFloat32(y);
        this._commandBufferEncoder.finishEncodingCommand();
        return true;
    }
    setFloat3(uniform, x, y, z) {
        if (!uniform) {
            return false;
        }
        this._commandBufferEncoder.startEncodingCommand(_native.Engine.COMMAND_SETFLOAT3);
        this._commandBufferEncoder.encodeCommandArgAsNativeData(uniform);
        this._commandBufferEncoder.encodeCommandArgAsFloat32(x);
        this._commandBufferEncoder.encodeCommandArgAsFloat32(y);
        this._commandBufferEncoder.encodeCommandArgAsFloat32(z);
        this._commandBufferEncoder.finishEncodingCommand();
        return true;
    }
    setFloat4(uniform, x, y, z, w) {
        if (!uniform) {
            return false;
        }
        this._commandBufferEncoder.startEncodingCommand(_native.Engine.COMMAND_SETFLOAT4);
        this._commandBufferEncoder.encodeCommandArgAsNativeData(uniform);
        this._commandBufferEncoder.encodeCommandArgAsFloat32(x);
        this._commandBufferEncoder.encodeCommandArgAsFloat32(y);
        this._commandBufferEncoder.encodeCommandArgAsFloat32(z);
        this._commandBufferEncoder.encodeCommandArgAsFloat32(w);
        this._commandBufferEncoder.finishEncodingCommand();
        return true;
    }
    setColor3(uniform, color3) {
        if (!uniform) {
            return false;
        }
        this.setFloat3(uniform, color3.r, color3.g, color3.b);
        return true;
    }
    setColor4(uniform, color3, alpha) {
        if (!uniform) {
            return false;
        }
        this.setFloat4(uniform, color3.r, color3.g, color3.b, alpha);
        return true;
    }
    wipeCaches(bruteForce) {
        if (this.preventCacheWipeBetweenFrames) {
            return;
        }
        this.resetTextureCache();
        this._currentEffect = null;
        if (bruteForce) {
            this._currentProgram = null;
            this._stencilStateComposer.reset();
            this._depthCullingState.reset();
            this._alphaState.reset();
        }
        this._cachedVertexBuffers = null;
        this._cachedIndexBuffer = null;
        this._cachedEffectForVertexBuffers = null;
    }
    _createTexture() {
        return this._engine.createTexture();
    }
    _deleteTexture(texture) {
        if (texture) {
            this._engine.deleteTexture(texture.underlyingResource);
        }
    }
    /**
     * Update the content of a dynamic texture
     * @param texture defines the texture to update
     * @param canvas defines the canvas containing the source
     * @param invertY defines if data must be stored with Y axis inverted
     * @param premulAlpha defines if alpha is stored as premultiplied
     * @param format defines the format of the data
     */ updateDynamicTexture(texture, canvas, invertY, premulAlpha = false, format) {
        if (premulAlpha === void 0) {
            premulAlpha = false;
        }
        if (!!texture && !!texture._hardwareTexture) {
            const destination = texture._hardwareTexture.underlyingResource;
            const context = canvas.getContext();
            // flush need to happen before getCanvasTexture: flush will create the render target synchronously (if it's not been created before)
            context.flush();
            const source = canvas.getCanvasTexture();
            this._commandBufferEncoder.startEncodingCommand(_native.Engine.COMMAND_COPYTEXTURE);
            this._commandBufferEncoder.encodeCommandArgAsNativeData(source);
            this._commandBufferEncoder.encodeCommandArgAsNativeData(destination);
            this._commandBufferEncoder.finishEncodingCommand();
            texture.isReady = true;
        }
    }
    createDynamicTexture(width, height, generateMipMaps, samplingMode) {
        // it's not possible to create 0x0 texture sized. Many bgfx methods assume texture size is at least 1x1(best case).
        // Worst case is getting a crash/assert.
        width = Math.max(width, 1);
        height = Math.max(height, 1);
        return this.createRawTexture(new Uint8Array(width * height * 4), width, height, 5, false, false, samplingMode);
    }
    createVideoElement(constraints) {
        // create native object depending on stream. Only NativeCamera is supported for now.
        if (this._camera) {
            return this._camera.createVideo(constraints);
        }
        return null;
    }
    updateVideoTexture(texture, video, invertY) {
        if (texture && texture._hardwareTexture && this._camera) {
            const webGLTexture = texture._hardwareTexture.underlyingResource;
            this._camera.updateVideoTexture(webGLTexture, video, invertY);
        }
    }
    createRawTexture(data, width, height, format, generateMipMaps, invertY, samplingMode, compression = null, type = 0, creationFlags = 0, useSRGBBuffer = false) {
        const texture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$internalTexture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InternalTexture"](this, 3 /* InternalTextureSource.Raw */ );
        texture.format = format;
        texture.generateMipMaps = generateMipMaps;
        texture.samplingMode = samplingMode;
        texture.invertY = invertY;
        texture.baseWidth = width;
        texture.baseHeight = height;
        texture.width = texture.baseWidth;
        texture.height = texture.baseHeight;
        texture._compression = compression;
        texture.type = type;
        texture._useSRGBBuffer = this._getUseSRGBBuffer(useSRGBBuffer, !generateMipMaps);
        this.updateRawTexture(texture, data, format, invertY, compression, type, texture._useSRGBBuffer);
        if (texture._hardwareTexture) {
            const webGLTexture = texture._hardwareTexture.underlyingResource;
            const filter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Native$2f$nativeHelpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNativeSamplingMode"])(samplingMode);
            this._setTextureSampling(webGLTexture, filter);
        }
        this._internalTexturesCache.push(texture);
        return texture;
    }
    createRawTexture2DArray(data, width, height, depth, format, generateMipMaps, invertY, samplingMode, compression = null, textureType = 0) {
        const texture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$internalTexture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InternalTexture"](this, 11 /* InternalTextureSource.Raw2DArray */ );
        texture.baseWidth = width;
        texture.baseHeight = height;
        texture.baseDepth = depth;
        texture.width = width;
        texture.height = height;
        texture.depth = depth;
        texture.format = format;
        texture.type = textureType;
        texture.generateMipMaps = generateMipMaps;
        texture.samplingMode = samplingMode;
        texture.is2DArray = true;
        if (texture._hardwareTexture) {
            const nativeTexture = texture._hardwareTexture.underlyingResource;
            this._engine.loadRawTexture2DArray(nativeTexture, data, width, height, depth, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Native$2f$nativeHelpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNativeTextureFormat"])(format, textureType), generateMipMaps, invertY);
            const filter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Native$2f$nativeHelpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNativeSamplingMode"])(samplingMode);
            this._setTextureSampling(nativeTexture, filter);
        }
        texture.isReady = true;
        this._internalTexturesCache.push(texture);
        return texture;
    }
    updateRawTexture(texture, bufferView, format, invertY, compression = null, type = 0, useSRGBBuffer = false) {
        if (!texture) {
            return;
        }
        if (bufferView && texture._hardwareTexture) {
            const underlyingResource = texture._hardwareTexture.underlyingResource;
            this._engine.loadRawTexture(underlyingResource, bufferView, texture.width, texture.height, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Native$2f$nativeHelpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNativeTextureFormat"])(format, type), texture.generateMipMaps, texture.invertY);
        }
        texture.isReady = true;
    }
    // TODO: Refactor to share more logic with babylon.engine.ts version.
    /**
     * Usually called from Texture.ts.
     * Passed information to create a NativeTexture
     * @param url defines a value which contains one of the following:
     * * A conventional http URL, e.g. 'http://...' or 'file://...'
     * * A base64 string of in-line texture data, e.g. 'data:image/jpg;base64,/...'
     * * An indicator that data being passed using the buffer parameter, e.g. 'data:mytexture.jpg'
     * @param noMipmap defines a boolean indicating that no mipmaps shall be generated.  Ignored for compressed textures.  They must be in the file
     * @param invertY when true, image is flipped when loaded.  You probably want true. Certain compressed textures may invert this if their default is inverted (eg. ktx)
     * @param scene needed for loading to the correct scene
     * @param samplingMode mode with should be used sample / access the texture (Default: Texture.TRILINEAR_SAMPLINGMODE)
     * @param onLoad optional callback to be called upon successful completion
     * @param onError optional callback to be called upon failure
     * @param buffer a source of a file previously fetched as either a base64 string, an ArrayBuffer (compressed or image format), HTMLImageElement (image format), or a Blob
     * @param fallback an internal argument in case the function must be called again, due to etc1 not having alpha capabilities
     * @param format internal format.  Default: RGB when extension is '.jpg' else RGBA.  Ignored for compressed textures
     * @param forcedExtension defines the extension to use to pick the right loader
     * @param mimeType defines an optional mime type
     * @param loaderOptions options to be passed to the loader
     * @param creationFlags specific flags to use when creating the texture (1 for storage textures, for eg)
     * @param useSRGBBuffer defines if the texture must be loaded in a sRGB GPU buffer (if supported by the GPU).
     * @returns a InternalTexture for assignment back into BABYLON.Texture
     */ createTexture(url, noMipmap, invertY, scene, samplingMode = 3, onLoad = null, onError = null, buffer = null, fallback = null, format = null, forcedExtension = null, mimeType, loaderOptions, creationFlags, useSRGBBuffer = false) {
        url = url || "";
        const fromData = url.substring(0, 5) === "data:";
        //const fromBlob = url.substring(0, 5) === "blob:";
        const isBase64 = fromData && url.indexOf(";base64,") !== -1;
        const texture = fallback ? fallback : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$internalTexture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InternalTexture"](this, 1 /* InternalTextureSource.Url */ );
        const originalUrl = url;
        if (this._transformTextureUrl && !isBase64 && !fallback && !buffer) {
            url = this._transformTextureUrl(url);
        }
        // establish the file extension, if possible
        const lastDot = url.lastIndexOf(".");
        const extension = forcedExtension ? forcedExtension : lastDot > -1 ? url.substring(lastDot).toLowerCase() : "";
        // some formats are already supported by bimg, no need to try to load them with JS
        // leaving TextureLoader extension check for future use
        let loaderPromise = null;
        if (extension.endsWith(".basis") || extension.endsWith(".ktx") || extension.endsWith(".ktx2") || mimeType === "image/ktx" || mimeType === "image/ktx2") {
            loaderPromise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$Loaders$2f$textureLoaderManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_GetCompatibleTextureLoader"])(extension);
        }
        if (scene) {
            scene.addPendingData(texture);
        }
        texture.url = url;
        texture.generateMipMaps = !noMipmap;
        texture.samplingMode = samplingMode;
        texture.invertY = invertY;
        texture._useSRGBBuffer = this._getUseSRGBBuffer(useSRGBBuffer, noMipmap);
        if (!this.doNotHandleContextLost) {
            // Keep a link to the buffer only if we plan to handle context lost
            texture._buffer = buffer;
        }
        let onLoadObserver = null;
        if (onLoad && !fallback) {
            onLoadObserver = texture.onLoadedObservable.add(onLoad);
        }
        if (!fallback) {
            this._internalTexturesCache.push(texture);
        }
        const onInternalError = (message, exception)=>{
            if (scene) {
                scene.removePendingData(texture);
            }
            if (url === originalUrl) {
                if (onLoadObserver) {
                    texture.onLoadedObservable.remove(onLoadObserver);
                }
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EngineStore"].UseFallbackTexture) {
                    this.createTexture(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EngineStore"].FallbackTexture, noMipmap, texture.invertY, scene, samplingMode, null, onError, buffer, texture);
                }
                if (onError) {
                    onError((message || "Unknown error") + (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EngineStore"].UseFallbackTexture ? " - Fallback texture was used" : ""), exception);
                }
            } else {
                // fall back to the original url if the transformed url fails to load
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn(`Failed to load ${url}, falling back to ${originalUrl}`);
                this.createTexture(originalUrl, noMipmap, texture.invertY, scene, samplingMode, onLoad, onError, buffer, texture, format, forcedExtension, mimeType, loaderOptions);
            }
        };
        // processing for non-image formats
        if (loaderPromise) {
            throw new Error("Loading textures from IInternalTextureLoader not yet implemented.");
        } else {
            const onload = (data)=>{
                if (!texture._hardwareTexture) {
                    if (scene) {
                        scene.removePendingData(texture);
                    }
                    return;
                }
                const underlyingResource = texture._hardwareTexture.underlyingResource;
                this._engine.loadTexture(underlyingResource, data, !noMipmap, invertY, texture._useSRGBBuffer, ()=>{
                    texture.baseWidth = this._engine.getTextureWidth(underlyingResource);
                    texture.baseHeight = this._engine.getTextureHeight(underlyingResource);
                    texture.width = texture.baseWidth;
                    texture.height = texture.baseHeight;
                    texture.isReady = true;
                    const filter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Native$2f$nativeHelpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNativeSamplingMode"])(samplingMode);
                    this._setTextureSampling(underlyingResource, filter);
                    if (scene) {
                        scene.removePendingData(texture);
                    }
                    texture.onLoadedObservable.notifyObservers(texture);
                    texture.onLoadedObservable.clear();
                }, ()=>{
                    throw new Error("Could not load a native texture.");
                });
            };
            if (fromData && buffer) {
                if (buffer instanceof ArrayBuffer) {
                    onload(new Uint8Array(buffer));
                } else if (ArrayBuffer.isView(buffer)) {
                    onload(buffer);
                } else if (typeof buffer === "string") {
                    onload(new Uint8Array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tools"].DecodeBase64(buffer)));
                } else {
                    throw new Error("Unsupported buffer type");
                }
            } else {
                if (isBase64) {
                    onload(new Uint8Array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tools"].DecodeBase64(url)));
                } else {
                    this._loadFile(url, (data)=>onload(new Uint8Array(data)), undefined, undefined, true, (request, exception)=>{
                        onInternalError("Unable to load " + (request ? request.responseURL : url, exception));
                    });
                }
            }
        }
        return texture;
    }
    /**
     * Wraps an external native texture in a Babylon texture.
     * @param texture defines the external texture
     * @param hasMipMaps defines whether the external texture has mip maps
     * @param samplingMode defines the sampling mode for the external texture (default: 3)
     * @returns the babylon internal texture
     */ wrapNativeTexture(texture, hasMipMaps = false, samplingMode = 3) {
        const hardwareTexture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Native$2f$nativeHardwareTexture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NativeHardwareTexture"](texture, this._engine);
        const internalTexture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$internalTexture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InternalTexture"](this, 0 /* InternalTextureSource.Unknown */ , true);
        internalTexture._hardwareTexture = hardwareTexture;
        internalTexture.baseWidth = this._engine.getTextureWidth(texture);
        internalTexture.baseHeight = this._engine.getTextureHeight(texture);
        internalTexture.width = internalTexture.baseWidth;
        internalTexture.height = internalTexture.baseHeight;
        internalTexture.isReady = true;
        internalTexture.useMipMaps = hasMipMaps;
        this.updateTextureSamplingMode(samplingMode, internalTexture);
        return internalTexture;
    }
    // eslint-disable-next-line jsdoc/require-returns-check
    /**
     * Wraps an external web gl texture in a Babylon texture.
     * @returns the babylon internal texture
     */ wrapWebGLTexture() {
        throw new Error("wrapWebGLTexture is not supported, use wrapNativeTexture instead.");
    }
    _createDepthStencilTexture(size, options, rtWrapper) {
        // TODO: handle other options?
        const generateStencil = options.generateStencil || false;
        const samples = options.samples || 1;
        const nativeRTWrapper = rtWrapper;
        const texture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$internalTexture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InternalTexture"](this, 12 /* InternalTextureSource.DepthStencil */ );
        const width = size.width ?? size;
        const height = size.height ?? size;
        const framebuffer = this._engine.createFrameBuffer(texture._hardwareTexture.underlyingResource, width, height, generateStencil, true, samples);
        nativeRTWrapper._framebufferDepthStencil = framebuffer;
        return texture;
    }
    /**
     * @internal
     */ _releaseFramebufferObjects(framebuffer) {
        if (framebuffer) {
            this._commandBufferEncoder.startEncodingCommand(_native.Engine.COMMAND_DELETEFRAMEBUFFER);
            this._commandBufferEncoder.encodeCommandArgAsNativeData(framebuffer);
            this._commandBufferEncoder.finishEncodingCommand();
        }
    }
    /**
     * @internal Engine abstraction for loading and creating an image bitmap from a given source string.
     * @param imageSource source to load the image from.
     * @param _options An object that sets options for the image's extraction.
     * @returns ImageBitmap
     */ async _createImageBitmapFromSource(imageSource, _options) {
        const promise = new Promise((resolve, reject)=>{
            const image = this.createCanvasImage();
            image.onload = ()=>{
                try {
                    const imageBitmap = this._engine.createImageBitmap(image);
                    resolve(imageBitmap);
                } catch (error) {
                    // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
                    reject(`Error loading image ${image.src} with exception: ${error}`);
                }
            };
            image.onerror = (error)=>{
                // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
                reject(`Error loading image ${image.src} with exception: ${error}`);
            };
            image.src = imageSource;
        });
        return await promise;
    }
    /**
     * Engine abstraction for createImageBitmap
     * @param image source for image
     * @param options An object that sets options for the image's extraction.
     * @returns ImageBitmap
     */ async createImageBitmap(image, options) {
        // Back-compat: Because of the previous Blob hack, this could be an array of BlobParts.
        if (Array.isArray(image)) {
            const arr = image;
            if (arr.length) {
                return this._engine.createImageBitmap(arr[0]);
            }
        }
        if (image instanceof Blob) {
            const data = await image.arrayBuffer();
            return this._engine.createImageBitmap(data);
        }
        throw new Error("Unsupported data for createImageBitmap.");
    }
    /**
     * Resize an image and returns the image data as an uint8array
     * @param image image to resize
     * @param bufferWidth destination buffer width
     * @param bufferHeight destination buffer height
     * @returns an uint8array containing RGBA values of bufferWidth * bufferHeight size
     */ resizeImageBitmap(image, bufferWidth, bufferHeight) {
        return this._engine.resizeImageBitmap(image, bufferWidth, bufferHeight);
    }
    /**
     * Creates a cube texture
     * @param rootUrl defines the url where the files to load is located
     * @param scene defines the current scene
     * @param files defines the list of files to load (1 per face)
     * @param noMipmap defines a boolean indicating that no mipmaps shall be generated (false by default)
     * @param onLoad defines an optional callback raised when the texture is loaded
     * @param onError defines an optional callback raised if there is an issue to load the texture
     * @param format defines the format of the data
     * @param forcedExtension defines the extension to use to pick the right loader
     * @param createPolynomials if a polynomial sphere should be created for the cube texture
     * @param lodScale defines the scale applied to environment texture. This manages the range of LOD level used for IBL according to the roughness
     * @param lodOffset defines the offset applied to environment texture. This manages first LOD level used for IBL according to the roughness
     * @param fallback defines texture to use while falling back when (compressed) texture file not found.
     * @param loaderOptions options to be passed to the loader
     * @param useSRGBBuffer defines if the texture must be loaded in a sRGB GPU buffer (if supported by the GPU).
     * @param buffer defines the data buffer to load instead of loading the rootUrl
     * @returns the cube texture as an InternalTexture
     */ createCubeTexture(rootUrl, scene, files, noMipmap, onLoad = null, onError = null, format, forcedExtension = null, createPolynomials = false, lodScale = 0, lodOffset = 0, fallback = null, loaderOptions, useSRGBBuffer = false, buffer = null) {
        const texture = fallback ? fallback : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$internalTexture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InternalTexture"](this, 7 /* InternalTextureSource.Cube */ );
        texture.isCube = true;
        texture.url = rootUrl;
        texture.generateMipMaps = !noMipmap;
        texture._lodGenerationScale = lodScale;
        texture._lodGenerationOffset = lodOffset;
        texture._useSRGBBuffer = this._getUseSRGBBuffer(useSRGBBuffer, !!noMipmap);
        if (!this._doNotHandleContextLost) {
            texture._extension = forcedExtension;
            texture._files = files;
            texture._buffer = buffer;
        }
        const lastDot = rootUrl.lastIndexOf(".");
        const extension = forcedExtension ? forcedExtension : lastDot > -1 ? rootUrl.substring(lastDot).toLowerCase() : "";
        // TODO: use texture loader to load env files?
        if (extension === ".env") {
            const onloaddata = (data)=>{
                const info = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$environmentTextureTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GetEnvInfo"])(data);
                texture.width = info.width;
                texture.height = info.width;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$environmentTextureTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UploadEnvSpherical"])(texture, info);
                const specularInfo = info.specular;
                if (!specularInfo) {
                    throw new Error(`Nothing else parsed so far`);
                }
                texture._lodGenerationScale = specularInfo.lodGenerationScale;
                const imageData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$environmentTextureTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateRadianceImageDataArrayBufferViews"])(data, info);
                texture.format = 5;
                texture.type = 0;
                texture.generateMipMaps = true;
                texture.getEngine().updateTextureSamplingMode(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Texture"].TRILINEAR_SAMPLINGMODE, texture);
                texture._isRGBD = true;
                texture.invertY = true;
                this._engine.loadCubeTextureWithMips(texture._hardwareTexture.underlyingResource, imageData, false, texture._useSRGBBuffer, ()=>{
                    texture.isReady = true;
                    if (onLoad) {
                        onLoad();
                    }
                }, ()=>{
                    throw new Error("Could not load a native cube texture.");
                });
            };
            if (buffer) {
                onloaddata(buffer);
            } else if (files && files.length === 6) {
                throw new Error(`Multi-file loading not allowed on env files.`);
            } else {
                const onInternalError = (request, exception)=>{
                    if (onError && request) {
                        onError(request.status + " " + request.statusText, exception);
                    }
                };
                this._loadFile(rootUrl, (data)=>{
                    onloaddata(new Uint8Array(data, 0, data.byteLength));
                }, undefined, undefined, true, onInternalError);
            }
        } else {
            if (!files || files.length !== 6) {
                throw new Error("Cannot load cubemap because 6 files were not defined");
            }
            // Reorder from [+X, +Y, +Z, -X, -Y, -Z] to [+X, -X, +Y, -Y, +Z, -Z].
            const reorderedFiles = [
                files[0],
                files[3],
                files[1],
                files[4],
                files[2],
                files[5]
            ];
            // eslint-disable-next-line github/no-then
            Promise.all(reorderedFiles.map(async (file)=>await this._loadFileAsync(file, undefined, true).then((data)=>new Uint8Array(data, 0, data.byteLength))))// eslint-disable-next-line github/no-then
            .then(async (data)=>{
                return await new Promise((resolve, reject)=>{
                    this._engine.loadCubeTexture(texture._hardwareTexture.underlyingResource, data, !noMipmap, true, texture._useSRGBBuffer, resolve, reject);
                });
            })// eslint-disable-next-line github/no-then
            .then(()=>{
                texture.isReady = true;
                if (onLoad) {
                    onLoad();
                }
            }, (error)=>{
                if (onError) {
                    onError(`Failed to load cubemap: ${error.message}`, error);
                }
            });
        }
        this._internalTexturesCache.push(texture);
        return texture;
    }
    /** @internal */ _createHardwareTexture() {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Native$2f$nativeHardwareTexture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NativeHardwareTexture"](this._createTexture(), this._engine);
    }
    /** @internal */ _createHardwareRenderTargetWrapper(isMulti, isCube, size) {
        const rtWrapper = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Native$2f$nativeRenderTargetWrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NativeRenderTargetWrapper"](isMulti, isCube, size, this);
        this._renderTargetWrapperCache.push(rtWrapper);
        return rtWrapper;
    }
    /** @internal */ _createInternalTexture(size, options, _delayGPUTextureCreation = true, source = 0 /* InternalTextureSource.Unknown */ ) {
        let generateMipMaps = false;
        let type = 0;
        let samplingMode = 3;
        let format = 5;
        let useSRGBBuffer = false;
        let samples = 1;
        let label;
        if (options !== undefined && typeof options === "object") {
            generateMipMaps = !!options.generateMipMaps;
            type = options.type === undefined ? 0 : options.type;
            samplingMode = options.samplingMode === undefined ? 3 : options.samplingMode;
            format = options.format === undefined ? 5 : options.format;
            useSRGBBuffer = options.useSRGBBuffer === undefined ? false : options.useSRGBBuffer;
            samples = options.samples ?? 1;
            label = options.label;
        } else {
            generateMipMaps = !!options;
        }
        useSRGBBuffer = this._getUseSRGBBuffer(useSRGBBuffer, !generateMipMaps);
        if (type === 1 && !this._caps.textureFloatLinearFiltering) {
            // if floating point linear (gl.FLOAT) then force to NEAREST_SAMPLINGMODE
            samplingMode = 1;
        } else if (type === 2 && !this._caps.textureHalfFloatLinearFiltering) {
            // if floating point linear (HALF_FLOAT) then force to NEAREST_SAMPLINGMODE
            samplingMode = 1;
        }
        if (type === 1 && !this._caps.textureFloat) {
            type = 0;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn("Float textures are not supported. Type forced to TEXTURETYPE_UNSIGNED_BYTE");
        }
        const texture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$internalTexture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InternalTexture"](this, source);
        const width = size.width ?? size;
        const height = size.height ?? size;
        const layers = size.layers || 0;
        if (layers !== 0) {
            throw new Error("Texture layers are not supported in Babylon Native");
        }
        const nativeTexture = texture._hardwareTexture.underlyingResource;
        const nativeTextureFormat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Native$2f$nativeHelpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNativeTextureFormat"])(format, type);
        // REVIEW: We are always setting the renderTarget flag as we don't know whether the texture will be used as a render target.
        this._engine.initializeTexture(nativeTexture, width, height, generateMipMaps, nativeTextureFormat, true, useSRGBBuffer, samples);
        this._setTextureSampling(nativeTexture, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Native$2f$nativeHelpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNativeSamplingMode"])(samplingMode));
        texture._useSRGBBuffer = useSRGBBuffer;
        texture.baseWidth = width;
        texture.baseHeight = height;
        texture.width = width;
        texture.height = height;
        texture.depth = layers;
        texture.isReady = true;
        texture.samples = samples;
        texture.generateMipMaps = generateMipMaps;
        texture.samplingMode = samplingMode;
        texture.type = type;
        texture.format = format;
        texture.label = label;
        this._internalTexturesCache.push(texture);
        return texture;
    }
    createRenderTargetTexture(size, options) {
        const rtWrapper = this._createHardwareRenderTargetWrapper(false, false, size);
        let generateDepthBuffer = true;
        let generateStencilBuffer = false;
        let noColorAttachment = false;
        let colorAttachment = undefined;
        let samples = 1;
        if (options !== undefined && typeof options === "object") {
            generateDepthBuffer = options.generateDepthBuffer ?? true;
            generateStencilBuffer = !!options.generateStencilBuffer;
            noColorAttachment = !!options.noColorAttachment;
            colorAttachment = options.colorAttachment;
            samples = options.samples ?? 1;
        }
        const texture = colorAttachment || (noColorAttachment ? null : this._createInternalTexture(size, options, true, 5 /* InternalTextureSource.RenderTarget */ ));
        const width = size.width ?? size;
        const height = size.height ?? size;
        const framebuffer = this._engine.createFrameBuffer(texture ? texture._hardwareTexture.underlyingResource : null, width, height, generateStencilBuffer, generateDepthBuffer, samples);
        rtWrapper._framebuffer = framebuffer;
        rtWrapper._generateDepthBuffer = generateDepthBuffer;
        rtWrapper._generateStencilBuffer = generateStencilBuffer;
        rtWrapper._samples = samples;
        rtWrapper.setTextures(texture);
        return rtWrapper;
    }
    updateRenderTargetTextureSampleCount(rtWrapper, samples) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn("Updating render target sample count is not currently supported");
        return rtWrapper.samples;
    }
    updateTextureSamplingMode(samplingMode, texture) {
        if (texture._hardwareTexture) {
            const filter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Native$2f$nativeHelpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNativeSamplingMode"])(samplingMode);
            this._setTextureSampling(texture._hardwareTexture.underlyingResource, filter);
        }
        texture.samplingMode = samplingMode;
    }
    bindFramebuffer(texture, faceIndex, requiredWidth, requiredHeight, forceFullscreenViewport) {
        const nativeRTWrapper = texture;
        if (this._currentRenderTarget) {
            this.unBindFramebuffer(this._currentRenderTarget);
        }
        this._currentRenderTarget = texture;
        if (faceIndex) {
            throw new Error("Cuboid frame buffers are not yet supported in NativeEngine.");
        }
        if (requiredWidth || requiredHeight) {
            throw new Error("Required width/height for frame buffers not yet supported in NativeEngine.");
        }
        if (nativeRTWrapper._framebufferDepthStencil) {
            this._bindUnboundFramebuffer(nativeRTWrapper._framebufferDepthStencil);
        } else {
            this._bindUnboundFramebuffer(nativeRTWrapper._framebuffer);
        }
    }
    unBindFramebuffer(texture, disableGenerateMipMaps = false, onBeforeUnbind) {
        // NOTE: Disabling mipmap generation is not yet supported in NativeEngine.
        this._currentRenderTarget = null;
        if (onBeforeUnbind) {
            onBeforeUnbind();
        }
        this._bindUnboundFramebuffer(null);
    }
    createDynamicVertexBuffer(data) {
        return this.createVertexBuffer(data, true);
    }
    updateDynamicIndexBuffer(indexBuffer, indices, offset = 0) {
        const buffer = indexBuffer;
        const data = this._normalizeIndexData(indices);
        buffer.is32Bits = data.BYTES_PER_ELEMENT === 4;
        this._engine.updateDynamicIndexBuffer(buffer.nativeIndexBuffer, data.buffer, data.byteOffset, data.byteLength, offset);
    }
    updateDynamicVertexBuffer(vertexBuffer, data, byteOffset = 0, byteLength) {
        const buffer = vertexBuffer;
        const dataView = data instanceof Array ? new Float32Array(data) : data instanceof ArrayBuffer ? new Uint8Array(data) : data;
        const byteView = new Uint8Array(dataView.buffer, dataView.byteOffset, byteLength ?? dataView.byteLength);
        this._engine.updateDynamicVertexBuffer(buffer.nativeVertexBuffer, byteView.buffer, byteView.byteOffset, byteView.byteLength, byteOffset);
    }
    // TODO: Refactor to share more logic with base Engine implementation.
    /**
     * @internal
     */ _setTexture(channel, texture, isPartOfTextureArray = false, depthStencilTexture = false) {
        const uniform = this._boundUniforms[channel];
        if (!uniform) {
            return false;
        }
        // Not ready?
        if (!texture) {
            if (this._boundTexturesCache[channel] != null) {
                this._activeChannel = channel;
                this._boundTexturesCache[channel] = null;
                this._unsetNativeTexture(uniform);
            }
            return false;
        }
        // Video
        if (texture.video) {
            this._activeChannel = channel;
            texture.update();
        } else if (texture.delayLoadState === 4) {
            // Delay loading
            texture.delayLoad();
            return false;
        }
        let internalTexture;
        if (depthStencilTexture) {
            internalTexture = texture.depthStencilTexture;
        } else if (texture.isReady()) {
            internalTexture = texture.getInternalTexture();
        } else if (texture.isCube) {
            internalTexture = this.emptyCubeTexture;
        } else if (texture.is3D) {
            internalTexture = this.emptyTexture3D;
        } else if (texture.is2DArray) {
            internalTexture = this.emptyTexture2DArray;
        } else {
            internalTexture = this.emptyTexture;
        }
        this._activeChannel = channel;
        if (!internalTexture || !internalTexture._hardwareTexture) {
            return false;
        }
        this._setTextureWrapMode(internalTexture._hardwareTexture.underlyingResource, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Native$2f$nativeHelpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNativeAddressMode"])(texture.wrapU), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Native$2f$nativeHelpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNativeAddressMode"])(texture.wrapV), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Native$2f$nativeHelpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNativeAddressMode"])(texture.wrapR));
        this._updateAnisotropicLevel(texture);
        this._setNativeTexture(uniform, internalTexture._hardwareTexture.underlyingResource);
        return true;
    }
    // filter is a NativeFilter.XXXX value.
    _setTextureSampling(texture, filter) {
        this._commandBufferEncoder.startEncodingCommand(_native.Engine.COMMAND_SETTEXTURESAMPLING);
        this._commandBufferEncoder.encodeCommandArgAsNativeData(texture);
        this._commandBufferEncoder.encodeCommandArgAsUInt32(filter);
        this._commandBufferEncoder.finishEncodingCommand();
    }
    // addressModes are NativeAddressMode.XXXX values.
    _setTextureWrapMode(texture, addressModeU, addressModeV, addressModeW) {
        this._commandBufferEncoder.startEncodingCommand(_native.Engine.COMMAND_SETTEXTUREWRAPMODE);
        this._commandBufferEncoder.encodeCommandArgAsNativeData(texture);
        this._commandBufferEncoder.encodeCommandArgAsUInt32(addressModeU);
        this._commandBufferEncoder.encodeCommandArgAsUInt32(addressModeV);
        this._commandBufferEncoder.encodeCommandArgAsUInt32(addressModeW);
        this._commandBufferEncoder.finishEncodingCommand();
    }
    _setNativeTexture(uniform, texture) {
        this._commandBufferEncoder.startEncodingCommand(_native.Engine.COMMAND_SETTEXTURE);
        this._commandBufferEncoder.encodeCommandArgAsNativeData(uniform);
        this._commandBufferEncoder.encodeCommandArgAsNativeData(texture);
        this._commandBufferEncoder.finishEncodingCommand();
    }
    _unsetNativeTexture(uniform) {
        this._commandBufferEncoder.startEncodingCommand(_native.Engine.COMMAND_UNSETTEXTURE);
        this._commandBufferEncoder.encodeCommandArgAsNativeData(uniform);
        this._commandBufferEncoder.finishEncodingCommand();
    }
    // TODO: Share more of this logic with the base implementation.
    // TODO: Rename to match naming in base implementation once refactoring allows different parameters.
    _updateAnisotropicLevel(texture) {
        const internalTexture = texture.getInternalTexture();
        const value = texture.anisotropicFilteringLevel;
        if (!internalTexture || !internalTexture._hardwareTexture) {
            return;
        }
        if (internalTexture._cachedAnisotropicFilteringLevel !== value) {
            this._commandBufferEncoder.startEncodingCommand(_native.Engine.COMMAND_SETTEXTUREANISOTROPICLEVEL);
            this._commandBufferEncoder.encodeCommandArgAsNativeData(internalTexture._hardwareTexture.underlyingResource);
            this._commandBufferEncoder.encodeCommandArgAsUInt32(value);
            this._commandBufferEncoder.finishEncodingCommand();
            internalTexture._cachedAnisotropicFilteringLevel = value;
        }
    }
    /**
     * @internal
     */ _bindTexture(channel, texture) {
        const uniform = this._boundUniforms[channel];
        if (!uniform) {
            return;
        }
        if (texture && texture._hardwareTexture) {
            const underlyingResource = texture._hardwareTexture.underlyingResource;
            this._setNativeTexture(uniform, underlyingResource);
        } else {
            this._unsetNativeTexture(uniform);
        }
    }
    /**
     * Unbind all textures
     */ unbindAllTextures() {
        this._commandBufferEncoder.startEncodingCommand(_native.Engine.COMMAND_DISCARDALLTEXTURES);
        this._commandBufferEncoder.finishEncodingCommand();
    }
    _deleteBuffer(buffer) {
        if (buffer.nativeIndexBuffer) {
            this._commandBufferEncoder.startEncodingCommand(_native.Engine.COMMAND_DELETEINDEXBUFFER);
            this._commandBufferEncoder.encodeCommandArgAsNativeData(buffer.nativeIndexBuffer);
            this._commandBufferEncoder.finishEncodingCommand();
            delete buffer.nativeIndexBuffer;
        }
        if (buffer.nativeVertexBuffer) {
            this._commandBufferEncoder.startEncodingCommand(_native.Engine.COMMAND_DELETEVERTEXBUFFER);
            this._commandBufferEncoder.encodeCommandArgAsNativeData(buffer.nativeVertexBuffer);
            this._commandBufferEncoder.finishEncodingCommand();
            delete buffer.nativeVertexBuffer;
        }
    }
    /**
     * Create a canvas
     * @param width width
     * @param height height
     * @returns ICanvas interface
     */ createCanvas(width, height) {
        if (!_native.Canvas) {
            throw new Error("Native Canvas plugin not available.");
        }
        const canvas = new _native.Canvas();
        canvas.width = width;
        canvas.height = height;
        return canvas;
    }
    /**
     * Create an image to use with canvas
     * @returns IImage interface
     */ createCanvasImage() {
        if (!_native.Image) {
            throw new Error("Native Canvas plugin not available.");
        }
        const image = new _native.Image();
        return image;
    }
    /**
     * Create a 2D path to use with canvas
     * @returns IPath2D interface
     * @param d SVG path string
     */ createCanvasPath2D(d) {
        if (!_native.Path2D) {
            throw new Error("Native Canvas plugin not available.");
        }
        const path2d = new _native.Path2D(d);
        return path2d;
    }
    /**
     * Update a portion of an internal texture
     * @param texture defines the texture to update
     * @param imageData defines the data to store into the texture
     * @param xOffset defines the x coordinates of the update rectangle
     * @param yOffset defines the y coordinates of the update rectangle
     * @param width defines the width of the update rectangle
     * @param height defines the height of the update rectangle
     * @param faceIndex defines the face index if texture is a cube (0 by default)
     * @param lod defines the lod level to update (0 by default)
     * @param generateMipMaps defines whether to generate mipmaps or not
     */ updateTextureData(texture, imageData, xOffset, yOffset, width, height, faceIndex = 0, lod = 0, generateMipMaps = false) {
        throw new Error("updateTextureData not implemented.");
    }
    /**
     * @internal
     */ _uploadCompressedDataToTextureDirectly(texture, internalFormat, width, height, data, faceIndex = 0, lod = 0) {
        throw new Error("_uploadCompressedDataToTextureDirectly not implemented.");
    }
    /**
     * @internal
     */ _uploadDataToTextureDirectly(texture, imageData, faceIndex = 0, lod = 0) {
        throw new Error("_uploadDataToTextureDirectly not implemented.");
    }
    /**
     * @internal
     */ _uploadArrayBufferViewToTexture(texture, imageData, faceIndex = 0, lod = 0) {
        throw new Error("_uploadArrayBufferViewToTexture not implemented.");
    }
    /**
     * @internal
     */ _uploadImageToTexture(texture, image, faceIndex = 0, lod = 0) {
        throw new Error("_uploadArrayBufferViewToTexture not implemented.");
    }
    getFontOffset(font) {
        // TODO
        const result = {
            ascent: 0,
            height: 0,
            descent: 0
        };
        return result;
    }
    /**
     * No equivalent for native. Do nothing.
     */ flushFramebuffer() {}
    // eslint-disable-next-line @typescript-eslint/promise-function-async
    _readTexturePixels(texture, width, height, faceIndex, level, buffer, _flushRenderer, _noDataConversion, x, y) {
        if (faceIndex !== undefined && faceIndex !== -1) {
            throw new Error(`Reading cubemap faces is not supported, but faceIndex is ${faceIndex}.`);
        }
        return this._engine.readTexture(texture._hardwareTexture?.underlyingResource, level ?? 0, x ?? 0, y ?? 0, width, height, buffer?.buffer ?? null, buffer?.byteOffset ?? 0, buffer?.byteLength ?? 0)// eslint-disable-next-line github/no-then
        .then((rawBuffer)=>{
            if (!buffer) {
                buffer = new Uint8Array(rawBuffer);
            }
            return buffer;
        });
    }
    startTimeQuery() {
        if (!this._gpuFrameTimeToken) {
            this._gpuFrameTimeToken = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Instrumentation$2f$timeToken$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_TimeToken"]();
        }
        // Always return the same time token. For native, we don't need a start marker, we just query for native frame stats.
        return this._gpuFrameTimeToken;
    }
    endTimeQuery(token) {
        this._engine.populateFrameStats(this._frameStats);
        return this._frameStats.gpuTimeNs;
    }
}
// This must match the protocol version in NativeEngine.cpp
NativeEngine.PROTOCOL_VERSION = 9; //# sourceMappingURL=nativeEngine.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/thinWebGPUEngine.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThinWebGPUEngine",
    ()=>ThinWebGPUEngine
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/abstractEngine.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuTextureHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/webgpuTextureHelper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuPerfCounter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/webgpuPerfCounter.js [app-ssr] (ecmascript)");
;
;
;
;
class ThinWebGPUEngine extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"] {
    constructor(){
        super(...arguments);
        // TODO WEBGPU remove those variables when code stabilized
        /** @internal */ this.dbgShowShaderCode = false;
        /** @internal */ this.dbgSanityChecks = true;
        /** @internal */ this.dbgVerboseLogsNumFrames = 10;
        /** @internal */ this.dbgLogIfNotDrawWrapper = true;
        /** @internal */ this.dbgShowEmptyEnableEffectCalls = true;
        /** @internal */ this.dbgVerboseLogsForFirstFrames = false;
        /** @internal */ this._currentRenderPass = null;
        this._snapshotRenderingMode = 0;
        /** @internal */ this._timestampIndex = 0;
        /** @internal */ this._debugStackRenderPass = [];
    }
    /**
     * Enables or disables GPU timing measurements.
     * Note that this is only supported if the "timestamp-query" extension is enabled in the options.
     */ get enableGPUTimingMeasurements() {
        return this._timestampQuery.enable;
    }
    set enableGPUTimingMeasurements(enable) {
        if (this._timestampQuery.enable === enable) {
            return;
        }
        this.gpuTimeInFrameForMainPass = enable ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuPerfCounter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebGPUPerfCounter"]() : undefined;
        this._timestampQuery.enable = enable;
    }
    _currentPassIsMainPass() {
        return this._currentRenderTarget === null;
    }
    /** @internal */ _endCurrentRenderPass() {
        if (!this._currentRenderPass) {
            return 0;
        }
        if (this._debugStackRenderPass.length !== 0) {
            for(let i = 0; i < this._debugStackRenderPass.length; ++i){
                this._currentRenderPass.popDebugGroup();
            }
        }
        const currentPassIndex = this._currentPassIsMainPass() ? 2 : 1;
        if (!this._snapshotRendering.endRenderPass(this._currentRenderPass) && !this.compatibilityMode) {
            this._bundleList.run(this._currentRenderPass);
            this._bundleList.reset();
        }
        this._currentRenderPass.end();
        this._timestampQuery.endPass(this._timestampIndex, this._currentRenderTarget && this._currentRenderTarget.gpuTimeInFrame ? this._currentRenderTarget.gpuTimeInFrame : this.gpuTimeInFrameForMainPass);
        this._timestampIndex += 2;
        if (this.dbgVerboseLogsForFirstFrames) {
            if (this._count === undefined) {
                this._count = 0;
            }
            if (!this._count || this._count < this.dbgVerboseLogsNumFrames) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Log("frame #" + this._count + " - " + (currentPassIndex === 2 ? "main" : "render target") + " end pass" + (currentPassIndex === 1 ? " - internalTexture.uniqueId=" + this._currentRenderTarget?.texture?.uniqueId : ""));
            }
        }
        this._debugPopGroup?.(0);
        this._currentRenderPass = null;
        return currentPassIndex;
    }
    /**
     * @internal
     */ _generateMipmaps(texture, commandEncoder) {
        commandEncoder = commandEncoder ?? this._renderEncoder;
        const gpuHardwareTexture = texture._hardwareTexture;
        if (!gpuHardwareTexture) {
            return;
        }
        if (commandEncoder === this._renderEncoder) {
            // We must close the current pass (if any) because we are going to use the render encoder to generate the mipmaps (so, we are going to create a new render pass)
            this._endCurrentRenderPass();
        }
        const format = texture._hardwareTexture.format;
        const mipmapCount = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuTextureHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebGPUTextureHelper"].ComputeNumMipmapLevels(texture.width, texture.height);
        if (this.dbgVerboseLogsForFirstFrames) {
            if (this._count === undefined) {
                this._count = 0;
            }
            if (!this._count || this._count < this.dbgVerboseLogsNumFrames) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Log("frame #" + this._count + " - generate mipmaps - width=" + texture.width + ", height=" + texture.height + ", isCube=" + texture.isCube + ", command encoder=" + (commandEncoder === this._renderEncoder ? "render" : "copy"));
            }
        }
        if (texture.isCube) {
            this._textureHelper.generateCubeMipmaps(gpuHardwareTexture, format, mipmapCount, commandEncoder);
        } else {
            this._textureHelper.generateMipmaps(gpuHardwareTexture, format, mipmapCount, 0, texture.is3D, commandEncoder);
        }
    }
} //# sourceMappingURL=thinWebGPUEngine.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/IPipelineContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
 //# sourceMappingURL=IPipelineContext.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/ICanvas.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
 //# sourceMappingURL=ICanvas.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/engineFeatures.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
 //# sourceMappingURL=engineFeatures.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/engineFactory.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EngineFactory",
    ()=>EngineFactory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/engine.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$nullEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/nullEngine.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$webgpuEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/webgpuEngine.js [app-ssr] (ecmascript)");
;
;
;
class EngineFactory {
    /**
     * Creates an engine based on the capabilities of the underlying hardware
     * @param canvas Defines the canvas to use to display the result
     * @param options Defines the options passed to the engine to create the context dependencies
     * @returns a promise that resolves with the created engine
     */ static async CreateAsync(canvas, options) {
        const supported = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$webgpuEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebGPUEngine"].IsSupportedAsync;
        if (supported) {
            return await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$webgpuEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebGPUEngine"].CreateAsync(canvas, options);
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Engine"].IsSupported) {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Engine"](canvas, undefined, options);
        }
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$nullEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NullEngine"](options);
    }
} //# sourceMappingURL=engineFactory.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/IMaterialContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
 //# sourceMappingURL=IMaterialContext.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/IDrawContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
 //# sourceMappingURL=IDrawContext.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/no-restricted-imports */ __turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineCapabilities$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/engineCapabilities.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$instancingAttributeInfo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/instancingAttributeInfo.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/abstractEngine.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/thinEngine.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/engine.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/engineStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$nullEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/nullEngine.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$AbstractEngine$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/AbstractEngine/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Extensions$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Extensions/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Native$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Native/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$Extensions$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/Extensions/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$IPipelineContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/IPipelineContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$ICanvas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/ICanvas.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGL$2f$webGLPipelineContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGL/webGLPipelineContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGL$2f$webGLHardwareTexture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGL/webGLHardwareTexture.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuConstants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/webgpuConstants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$webgpuEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/webgpuEngine.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuCacheRenderPipeline$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/webgpuCacheRenderPipeline.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuCacheRenderPipelineTree$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/webgpuCacheRenderPipelineTree.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuCacheBindGroups$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/webgpuCacheBindGroups.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuCacheSampler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/webgpuCacheSampler.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuDrawContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/webgpuDrawContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuPipelineContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/webgpuPipelineContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuRenderTargetWrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/webgpuRenderTargetWrapper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuShaderProcessor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/webgpuShaderProcessor.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuTintWASM$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/webgpuTintWASM.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGL$2f$webGL2ShaderProcessors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGL/webGL2ShaderProcessors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$nativeEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/nativeEngine.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Processors$2f$shaderCodeInliner$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Processors/shaderCodeInliner.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$performanceConfigurator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/performanceConfigurator.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineFeatures$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/engineFeatures.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineFactory$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/engineFactory.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$IMaterialContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/IMaterialContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$IDrawContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/IDrawContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$renderTargetWrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/renderTargetWrapper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Processors$2f$iShaderProcessor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Processors/iShaderProcessor.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engine$2e$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/engine.common.js [app-ssr] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AbstractEngine",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"],
    "AcquireNativeObjectAsync",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$nativeEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AcquireNativeObjectAsync"],
    "AddressMode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuConstants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AddressMode"],
    "AutoLayoutMode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuConstants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AutoLayoutMode"],
    "BlendFactor",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuConstants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BlendFactor"],
    "BlendOperation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuConstants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BlendOperation"],
    "BufferBindingType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuConstants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BufferBindingType"],
    "BufferMapState",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuConstants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BufferMapState"],
    "BufferUsage",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuConstants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BufferUsage"],
    "CanvasAlphaMode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuConstants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CanvasAlphaMode"],
    "CanvasToneMappingMode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuConstants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CanvasToneMappingMode"],
    "ColorWrite",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuConstants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ColorWrite"],
    "CompareFunction",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuConstants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CompareFunction"],
    "CompilationMessageType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuConstants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CompilationMessageType"],
    "ComputeBindingType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Extensions$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ComputeBindingType"],
    "ComputePassTimestampLocation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuConstants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ComputePassTimestampLocation"],
    "Constants",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Constants"],
    "CreateImageBitmapFromSource",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engine$2e$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateImageBitmapFromSource"],
    "CullMode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuConstants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CullMode"],
    "DeviceLostReason",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuConstants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeviceLostReason"],
    "Engine",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Engine"],
    "EngineFactory",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineFactory$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EngineFactory"],
    "EngineStore",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EngineStore"],
    "EngineView",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$AbstractEngine$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EngineView"],
    "ErrorFilter",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuConstants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ErrorFilter"],
    "ExitFullscreen",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engine$2e$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ExitFullscreen"],
    "ExitPointerlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engine$2e$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ExitPointerlock"],
    "FeatureName",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuConstants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FeatureName"],
    "FilterMode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuConstants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FilterMode"],
    "FrontFace",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuConstants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FrontFace"],
    "GetFontOffset",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engine$2e$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GetFontOffset"],
    "IndexFormat",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuConstants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IndexFormat"],
    "LoadOp",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuConstants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LoadOp"],
    "MapMode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuConstants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MapMode"],
    "MipmapFilterMode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuConstants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MipmapFilterMode"],
    "NativeDataStream",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Native$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NativeDataStream"],
    "NativeEngine",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$nativeEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NativeEngine"],
    "NullEngine",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$nullEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NullEngine"],
    "NullEngineOptions",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$nullEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NullEngineOptions"],
    "PerformanceConfigurator",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$performanceConfigurator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PerformanceConfigurator"],
    "PipelineErrorReason",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuConstants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PipelineErrorReason"],
    "PowerPreference",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuConstants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PowerPreference"],
    "PrimitiveTopology",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuConstants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PrimitiveTopology"],
    "QueryType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuConstants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QueryType"],
    "QueueNewFrame",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QueueNewFrame"],
    "RegisterNativeTypeAsync",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$nativeEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterNativeTypeAsync"],
    "RenderPassTimestampLocation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuConstants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RenderPassTimestampLocation"],
    "RenderTargetWrapper",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$renderTargetWrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RenderTargetWrapper"],
    "RequestFullscreen",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engine$2e$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RequestFullscreen"],
    "RequestPointerlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engine$2e$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RequestPointerlock"],
    "ResizeImageBitmap",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engine$2e$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResizeImageBitmap"],
    "SamplerBindingType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuConstants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SamplerBindingType"],
    "ShaderCodeInliner",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Processors$2f$shaderCodeInliner$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderCodeInliner"],
    "ShaderStage",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuConstants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStage"],
    "ShaderStore",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"],
    "StencilOperation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuConstants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StencilOperation"],
    "StorageTextureAccess",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuConstants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StorageTextureAccess"],
    "StoreOp",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuConstants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StoreOp"],
    "TextureAspect",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuConstants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TextureAspect"],
    "TextureDimension",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuConstants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TextureDimension"],
    "TextureFormat",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuConstants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TextureFormat"],
    "TextureSampleType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuConstants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TextureSampleType"],
    "TextureUsage",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuConstants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TextureUsage"],
    "TextureViewDimension",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuConstants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TextureViewDimension"],
    "ThinEngine",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ThinEngine"],
    "ValidatedNativeDataStream",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Native$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValidatedNativeDataStream"],
    "VertexFormat",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuConstants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexFormat"],
    "VertexStepMode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuConstants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexStepMode"],
    "WebGL2ShaderProcessor",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGL$2f$webGL2ShaderProcessors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebGL2ShaderProcessor"],
    "WebGLHardwareTexture",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGL$2f$webGLHardwareTexture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebGLHardwareTexture"],
    "WebGLPipelineContext",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGL$2f$webGLPipelineContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebGLPipelineContext"],
    "WebGPUCacheBindGroups",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuCacheBindGroups$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebGPUCacheBindGroups"],
    "WebGPUCacheRenderPipeline",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuCacheRenderPipeline$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebGPUCacheRenderPipeline"],
    "WebGPUCacheRenderPipelineTree",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuCacheRenderPipelineTree$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebGPUCacheRenderPipelineTree"],
    "WebGPUCacheSampler",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuCacheSampler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebGPUCacheSampler"],
    "WebGPUDrawContext",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuDrawContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebGPUDrawContext"],
    "WebGPUEngine",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$webgpuEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebGPUEngine"],
    "WebGPUPipelineContext",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuPipelineContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebGPUPipelineContext"],
    "WebGPURenderTargetWrapper",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuRenderTargetWrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebGPURenderTargetWrapper"],
    "WebGPUShaderProcessor",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuShaderProcessor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebGPUShaderProcessor"],
    "WebGPUTintWASM",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuTintWASM$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebGPUTintWASM"],
    "_CommonDispose",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engine$2e$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_CommonDispose"],
    "_CommonInit",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engine$2e$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_CommonInit"],
    "_OcclusionDataStorage",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$AbstractEngine$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_OcclusionDataStorage"],
    "_forceTransformFeedbackToBundle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Extensions$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_forceTransformFeedbackToBundle"],
    "allocateAndCopyTypedBuffer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Extensions$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["allocateAndCopyTypedBuffer"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineCapabilities$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/engineCapabilities.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$instancingAttributeInfo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/instancingAttributeInfo.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/abstractEngine.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/thinEngine.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/engine.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/engineStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$nullEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/nullEngine.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$AbstractEngine$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/AbstractEngine/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Extensions$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Extensions/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Native$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Native/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$Extensions$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/Extensions/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$IPipelineContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/IPipelineContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$ICanvas$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/ICanvas.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGL$2f$webGLPipelineContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGL/webGLPipelineContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGL$2f$webGLHardwareTexture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGL/webGLHardwareTexture.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuConstants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/webgpuConstants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$webgpuEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/webgpuEngine.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuCacheRenderPipeline$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/webgpuCacheRenderPipeline.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuCacheRenderPipelineTree$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/webgpuCacheRenderPipelineTree.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuCacheBindGroups$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/webgpuCacheBindGroups.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuCacheSampler$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/webgpuCacheSampler.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuDrawContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/webgpuDrawContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuPipelineContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/webgpuPipelineContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuRenderTargetWrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/webgpuRenderTargetWrapper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuShaderProcessor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/webgpuShaderProcessor.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuTintWASM$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/webgpuTintWASM.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGL$2f$webGL2ShaderProcessors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGL/webGL2ShaderProcessors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$nativeEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/nativeEngine.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Processors$2f$shaderCodeInliner$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Processors/shaderCodeInliner.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$performanceConfigurator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/performanceConfigurator.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineFeatures$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/engineFeatures.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineFactory$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/engineFactory.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$IMaterialContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/IMaterialContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$IDrawContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/IDrawContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$renderTargetWrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/renderTargetWrapper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Processors$2f$iShaderProcessor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Processors/iShaderProcessor.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engine$2e$common$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/engine.common.js [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=dcdbf_%40babylonjs_core_Engines_47e6897c._.js.map