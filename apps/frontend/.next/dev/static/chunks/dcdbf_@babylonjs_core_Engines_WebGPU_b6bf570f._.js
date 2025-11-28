(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/webgpuPerfCounter.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WebGPUPerfCounter",
    ()=>WebGPUPerfCounter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$perfCounter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/perfCounter.js [app-client] (ecmascript)");
;
class WebGPUPerfCounter {
    constructor(){
        this._gpuTimeInFrameId = -1;
        /**
         * The GPU time in nanoseconds spent in the last frame
         */ this.counter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$perfCounter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PerfCounter"]();
    }
    /**
     * @internal
     */ _addDuration(currentFrameId, duration) {
        if (currentFrameId < this._gpuTimeInFrameId) {
            return;
        }
        if (this._gpuTimeInFrameId !== currentFrameId) {
            this.counter._fetchResult();
            this.counter.fetchNewFrame();
            this.counter.addCount(duration, false);
            this._gpuTimeInFrameId = currentFrameId;
        } else {
            this.counter.addCount(duration, false);
        }
    }
} //# sourceMappingURL=webgpuPerfCounter.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/webgpuTextureHelper.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WebGPUTextureHelper",
    ()=>WebGPUTextureHelper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.scalar.functions.js [app-client] (ecmascript)");
;
class WebGPUTextureHelper {
    static ComputeNumMipmapLevels(width, height) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ILog2"])(Math.max(width, height)) + 1;
    }
    static GetTextureTypeFromFormat(format) {
        switch(format){
            // One Component = 8 bits unsigned
            case "r8unorm" /* WebGPUConstants.TextureFormat.R8Unorm */ :
            case "r8uint" /* WebGPUConstants.TextureFormat.R8Uint */ :
            case "rg8unorm" /* WebGPUConstants.TextureFormat.RG8Unorm */ :
            case "rg8uint" /* WebGPUConstants.TextureFormat.RG8Uint */ :
            case "rgba8unorm" /* WebGPUConstants.TextureFormat.RGBA8Unorm */ :
            case "rgba8unorm-srgb" /* WebGPUConstants.TextureFormat.RGBA8UnormSRGB */ :
            case "rgba8uint" /* WebGPUConstants.TextureFormat.RGBA8Uint */ :
            case "bgra8unorm" /* WebGPUConstants.TextureFormat.BGRA8Unorm */ :
            case "bgra8unorm-srgb" /* WebGPUConstants.TextureFormat.BGRA8UnormSRGB */ :
            case "rgb10a2uint" /* WebGPUConstants.TextureFormat.RGB10A2UINT */ :
            case "rgb10a2unorm" /* WebGPUConstants.TextureFormat.RGB10A2Unorm */ :
            case "rgb9e5ufloat" /* WebGPUConstants.TextureFormat.RGB9E5UFloat */ :
            case "rg11b10ufloat" /* WebGPUConstants.TextureFormat.RG11B10UFloat */ :
            case "bc7-rgba-unorm" /* WebGPUConstants.TextureFormat.BC7RGBAUnorm */ :
            case "bc7-rgba-unorm-srgb" /* WebGPUConstants.TextureFormat.BC7RGBAUnormSRGB */ :
            case "bc6h-rgb-ufloat" /* WebGPUConstants.TextureFormat.BC6HRGBUFloat */ :
            case "bc5-rg-unorm" /* WebGPUConstants.TextureFormat.BC5RGUnorm */ :
            case "bc3-rgba-unorm" /* WebGPUConstants.TextureFormat.BC3RGBAUnorm */ :
            case "bc3-rgba-unorm-srgb" /* WebGPUConstants.TextureFormat.BC3RGBAUnormSRGB */ :
            case "bc2-rgba-unorm" /* WebGPUConstants.TextureFormat.BC2RGBAUnorm */ :
            case "bc2-rgba-unorm-srgb" /* WebGPUConstants.TextureFormat.BC2RGBAUnormSRGB */ :
            case "bc4-r-unorm" /* WebGPUConstants.TextureFormat.BC4RUnorm */ :
            case "bc1-rgba-unorm" /* WebGPUConstants.TextureFormat.BC1RGBAUnorm */ :
            case "bc1-rgba-unorm-srgb" /* WebGPUConstants.TextureFormat.BC1RGBAUnormSRGB */ :
            case "etc2-rgb8unorm" /* WebGPUConstants.TextureFormat.ETC2RGB8Unorm */ :
            case "etc2-rgb8unorm-srgb" /* WebGPUConstants.TextureFormat.ETC2RGB8UnormSRGB */ :
            case "etc2-rgb8a1unorm" /* WebGPUConstants.TextureFormat.ETC2RGB8A1Unorm */ :
            case "etc2-rgb8a1unorm-srgb" /* WebGPUConstants.TextureFormat.ETC2RGB8A1UnormSRGB */ :
            case "etc2-rgba8unorm" /* WebGPUConstants.TextureFormat.ETC2RGBA8Unorm */ :
            case "etc2-rgba8unorm-srgb" /* WebGPUConstants.TextureFormat.ETC2RGBA8UnormSRGB */ :
            case "eac-r11unorm" /* WebGPUConstants.TextureFormat.EACR11Unorm */ :
            case "eac-rg11unorm" /* WebGPUConstants.TextureFormat.EACRG11Unorm */ :
            case "astc-4x4-unorm" /* WebGPUConstants.TextureFormat.ASTC4x4Unorm */ :
            case "astc-4x4-unorm-srgb" /* WebGPUConstants.TextureFormat.ASTC4x4UnormSRGB */ :
            case "astc-5x4-unorm" /* WebGPUConstants.TextureFormat.ASTC5x4Unorm */ :
            case "astc-5x4-unorm-srgb" /* WebGPUConstants.TextureFormat.ASTC5x4UnormSRGB */ :
            case "astc-5x5-unorm" /* WebGPUConstants.TextureFormat.ASTC5x5Unorm */ :
            case "astc-5x5-unorm-srgb" /* WebGPUConstants.TextureFormat.ASTC5x5UnormSRGB */ :
            case "astc-6x5-unorm" /* WebGPUConstants.TextureFormat.ASTC6x5Unorm */ :
            case "astc-6x5-unorm-srgb" /* WebGPUConstants.TextureFormat.ASTC6x5UnormSRGB */ :
            case "astc-6x6-unorm" /* WebGPUConstants.TextureFormat.ASTC6x6Unorm */ :
            case "astc-6x6-unorm-srgb" /* WebGPUConstants.TextureFormat.ASTC6x6UnormSRGB */ :
            case "astc-8x5-unorm" /* WebGPUConstants.TextureFormat.ASTC8x5Unorm */ :
            case "astc-8x5-unorm-srgb" /* WebGPUConstants.TextureFormat.ASTC8x5UnormSRGB */ :
            case "astc-8x6-unorm" /* WebGPUConstants.TextureFormat.ASTC8x6Unorm */ :
            case "astc-8x6-unorm-srgb" /* WebGPUConstants.TextureFormat.ASTC8x6UnormSRGB */ :
            case "astc-8x8-unorm" /* WebGPUConstants.TextureFormat.ASTC8x8Unorm */ :
            case "astc-8x8-unorm-srgb" /* WebGPUConstants.TextureFormat.ASTC8x8UnormSRGB */ :
            case "astc-10x5-unorm" /* WebGPUConstants.TextureFormat.ASTC10x5Unorm */ :
            case "astc-10x5-unorm-srgb" /* WebGPUConstants.TextureFormat.ASTC10x5UnormSRGB */ :
            case "astc-10x6-unorm" /* WebGPUConstants.TextureFormat.ASTC10x6Unorm */ :
            case "astc-10x6-unorm-srgb" /* WebGPUConstants.TextureFormat.ASTC10x6UnormSRGB */ :
            case "astc-10x8-unorm" /* WebGPUConstants.TextureFormat.ASTC10x8Unorm */ :
            case "astc-10x8-unorm-srgb" /* WebGPUConstants.TextureFormat.ASTC10x8UnormSRGB */ :
            case "astc-10x10-unorm" /* WebGPUConstants.TextureFormat.ASTC10x10Unorm */ :
            case "astc-10x10-unorm-srgb" /* WebGPUConstants.TextureFormat.ASTC10x10UnormSRGB */ :
            case "astc-12x10-unorm" /* WebGPUConstants.TextureFormat.ASTC12x10Unorm */ :
            case "astc-12x10-unorm-srgb" /* WebGPUConstants.TextureFormat.ASTC12x10UnormSRGB */ :
            case "astc-12x12-unorm" /* WebGPUConstants.TextureFormat.ASTC12x12Unorm */ :
            case "astc-12x12-unorm-srgb" /* WebGPUConstants.TextureFormat.ASTC12x12UnormSRGB */ :
            case "stencil8" /* WebGPUConstants.TextureFormat.Stencil8 */ :
                return 0;
            // One Component = 8 bits signed
            case "r8snorm" /* WebGPUConstants.TextureFormat.R8Snorm */ :
            case "r8sint" /* WebGPUConstants.TextureFormat.R8Sint */ :
            case "rg8snorm" /* WebGPUConstants.TextureFormat.RG8Snorm */ :
            case "rg8sint" /* WebGPUConstants.TextureFormat.RG8Sint */ :
            case "rgba8snorm" /* WebGPUConstants.TextureFormat.RGBA8Snorm */ :
            case "rgba8sint" /* WebGPUConstants.TextureFormat.RGBA8Sint */ :
            case "bc6h-rgb-float" /* WebGPUConstants.TextureFormat.BC6HRGBFloat */ :
            case "bc5-rg-snorm" /* WebGPUConstants.TextureFormat.BC5RGSnorm */ :
            case "bc4-r-snorm" /* WebGPUConstants.TextureFormat.BC4RSnorm */ :
            case "eac-r11snorm" /* WebGPUConstants.TextureFormat.EACR11Snorm */ :
            case "eac-rg11snorm" /* WebGPUConstants.TextureFormat.EACRG11Snorm */ :
                return 3;
            // One component = 16 bits unsigned
            case "r16uint" /* WebGPUConstants.TextureFormat.R16Uint */ :
            case "r16unorm" /* WebGPUConstants.TextureFormat.R16Unorm */ :
            case "rg16unorm" /* WebGPUConstants.TextureFormat.RG16Unorm */ :
            case "rgba16unorm" /* WebGPUConstants.TextureFormat.RGBA16Unorm */ :
            case "rg16uint" /* WebGPUConstants.TextureFormat.RG16Uint */ :
            case "rgba16uint" /* WebGPUConstants.TextureFormat.RGBA16Uint */ :
            case "depth16unorm" /* WebGPUConstants.TextureFormat.Depth16Unorm */ :
                return 5;
            // One component = 16 bits signed
            case "r16sint" /* WebGPUConstants.TextureFormat.R16Sint */ :
            case "r16snorm" /* WebGPUConstants.TextureFormat.R16Snorm */ :
            case "rg16snorm" /* WebGPUConstants.TextureFormat.RG16Snorm */ :
            case "rgba16snorm" /* WebGPUConstants.TextureFormat.RGBA16Snorm */ :
            case "rg16sint" /* WebGPUConstants.TextureFormat.RG16Sint */ :
            case "rgba16sint" /* WebGPUConstants.TextureFormat.RGBA16Sint */ :
                return 4;
            case "r16float" /* WebGPUConstants.TextureFormat.R16Float */ :
            case "rg16float" /* WebGPUConstants.TextureFormat.RG16Float */ :
            case "rgba16float" /* WebGPUConstants.TextureFormat.RGBA16Float */ :
                return 2;
            // One component = 32 bits unsigned
            case "r32uint" /* WebGPUConstants.TextureFormat.R32Uint */ :
            case "rg32uint" /* WebGPUConstants.TextureFormat.RG32Uint */ :
            case "rgba32uint" /* WebGPUConstants.TextureFormat.RGBA32Uint */ :
                return 7;
            // One component = 32 bits signed
            case "r32sint" /* WebGPUConstants.TextureFormat.R32Sint */ :
            case "rg32sint" /* WebGPUConstants.TextureFormat.RG32Sint */ :
            case "rgba32sint" /* WebGPUConstants.TextureFormat.RGBA32Sint */ :
                return 7;
            case "r32float" /* WebGPUConstants.TextureFormat.R32Float */ :
            case "rg32float" /* WebGPUConstants.TextureFormat.RG32Float */ :
            case "rgba32float" /* WebGPUConstants.TextureFormat.RGBA32Float */ :
            case "depth32float" /* WebGPUConstants.TextureFormat.Depth32Float */ :
            case "depth32float-stencil8" /* WebGPUConstants.TextureFormat.Depth32FloatStencil8 */ :
            case "depth24plus" /* WebGPUConstants.TextureFormat.Depth24Plus */ :
            case "depth24plus-stencil8" /* WebGPUConstants.TextureFormat.Depth24PlusStencil8 */ :
                return 1;
        }
        return 0;
    }
    static GetBlockInformationFromFormat(format) {
        switch(format){
            // 8 bits formats
            case "r8unorm" /* WebGPUConstants.TextureFormat.R8Unorm */ :
            case "r8snorm" /* WebGPUConstants.TextureFormat.R8Snorm */ :
            case "r8uint" /* WebGPUConstants.TextureFormat.R8Uint */ :
            case "r8sint" /* WebGPUConstants.TextureFormat.R8Sint */ :
                return {
                    width: 1,
                    height: 1,
                    length: 1
                };
            // 16 bits formats
            case "r16uint" /* WebGPUConstants.TextureFormat.R16Uint */ :
            case "r16sint" /* WebGPUConstants.TextureFormat.R16Sint */ :
            case "r16unorm" /* WebGPUConstants.TextureFormat.R16Unorm */ :
            case "r16snorm" /* WebGPUConstants.TextureFormat.R16Snorm */ :
            case "r16float" /* WebGPUConstants.TextureFormat.R16Float */ :
            case "rg8unorm" /* WebGPUConstants.TextureFormat.RG8Unorm */ :
            case "rg8snorm" /* WebGPUConstants.TextureFormat.RG8Snorm */ :
            case "rg8uint" /* WebGPUConstants.TextureFormat.RG8Uint */ :
            case "rg8sint" /* WebGPUConstants.TextureFormat.RG8Sint */ :
                return {
                    width: 1,
                    height: 1,
                    length: 2
                };
            // 32 bits formats
            case "r32uint" /* WebGPUConstants.TextureFormat.R32Uint */ :
            case "r32sint" /* WebGPUConstants.TextureFormat.R32Sint */ :
            case "r32float" /* WebGPUConstants.TextureFormat.R32Float */ :
            case "rg16uint" /* WebGPUConstants.TextureFormat.RG16Uint */ :
            case "rg16sint" /* WebGPUConstants.TextureFormat.RG16Sint */ :
            case "rg16float" /* WebGPUConstants.TextureFormat.RG16Float */ :
            case "rg16unorm" /* WebGPUConstants.TextureFormat.RG16Unorm */ :
            case "rg16snorm" /* WebGPUConstants.TextureFormat.RG16Snorm */ :
            case "rgba8unorm" /* WebGPUConstants.TextureFormat.RGBA8Unorm */ :
            case "rgba8unorm-srgb" /* WebGPUConstants.TextureFormat.RGBA8UnormSRGB */ :
            case "rgba8snorm" /* WebGPUConstants.TextureFormat.RGBA8Snorm */ :
            case "rgba8uint" /* WebGPUConstants.TextureFormat.RGBA8Uint */ :
            case "rgba8sint" /* WebGPUConstants.TextureFormat.RGBA8Sint */ :
            case "bgra8unorm" /* WebGPUConstants.TextureFormat.BGRA8Unorm */ :
            case "bgra8unorm-srgb" /* WebGPUConstants.TextureFormat.BGRA8UnormSRGB */ :
            case "rgb9e5ufloat" /* WebGPUConstants.TextureFormat.RGB9E5UFloat */ :
            case "rgb10a2uint" /* WebGPUConstants.TextureFormat.RGB10A2UINT */ :
            case "rgb10a2unorm" /* WebGPUConstants.TextureFormat.RGB10A2Unorm */ :
            case "rg11b10ufloat" /* WebGPUConstants.TextureFormat.RG11B10UFloat */ :
                return {
                    width: 1,
                    height: 1,
                    length: 4
                };
            // 64 bits formats
            case "rg32uint" /* WebGPUConstants.TextureFormat.RG32Uint */ :
            case "rg32sint" /* WebGPUConstants.TextureFormat.RG32Sint */ :
            case "rg32float" /* WebGPUConstants.TextureFormat.RG32Float */ :
            case "rgba16uint" /* WebGPUConstants.TextureFormat.RGBA16Uint */ :
            case "rgba16sint" /* WebGPUConstants.TextureFormat.RGBA16Sint */ :
            case "rgba16float" /* WebGPUConstants.TextureFormat.RGBA16Float */ :
            case "rgba16unorm" /* WebGPUConstants.TextureFormat.RGBA16Unorm */ :
            case "rgba16snorm" /* WebGPUConstants.TextureFormat.RGBA16Snorm */ :
                return {
                    width: 1,
                    height: 1,
                    length: 8
                };
            // 128 bits formats
            case "rgba32uint" /* WebGPUConstants.TextureFormat.RGBA32Uint */ :
            case "rgba32sint" /* WebGPUConstants.TextureFormat.RGBA32Sint */ :
            case "rgba32float" /* WebGPUConstants.TextureFormat.RGBA32Float */ :
                return {
                    width: 1,
                    height: 1,
                    length: 16
                };
            // Depth and stencil formats
            case "stencil8" /* WebGPUConstants.TextureFormat.Stencil8 */ :
                // eslint-disable-next-line no-throw-literal
                throw "No fixed size for Stencil8 format!";
            case "depth16unorm" /* WebGPUConstants.TextureFormat.Depth16Unorm */ :
                return {
                    width: 1,
                    height: 1,
                    length: 2
                };
            case "depth24plus" /* WebGPUConstants.TextureFormat.Depth24Plus */ :
                // eslint-disable-next-line no-throw-literal
                throw "No fixed size for Depth24Plus format!";
            case "depth24plus-stencil8" /* WebGPUConstants.TextureFormat.Depth24PlusStencil8 */ :
                // eslint-disable-next-line no-throw-literal
                throw "No fixed size for Depth24PlusStencil8 format!";
            case "depth32float" /* WebGPUConstants.TextureFormat.Depth32Float */ :
                return {
                    width: 1,
                    height: 1,
                    length: 4
                };
            case "depth32float-stencil8" /* WebGPUConstants.TextureFormat.Depth32FloatStencil8 */ :
                return {
                    width: 1,
                    height: 1,
                    length: 5
                };
            // BC compressed formats usable if "texture-compression-bc" is both
            // supported by the device/user agent and enabled in requestDevice.
            case "bc7-rgba-unorm" /* WebGPUConstants.TextureFormat.BC7RGBAUnorm */ :
            case "bc7-rgba-unorm-srgb" /* WebGPUConstants.TextureFormat.BC7RGBAUnormSRGB */ :
            case "bc6h-rgb-ufloat" /* WebGPUConstants.TextureFormat.BC6HRGBUFloat */ :
            case "bc6h-rgb-float" /* WebGPUConstants.TextureFormat.BC6HRGBFloat */ :
            case "bc5-rg-unorm" /* WebGPUConstants.TextureFormat.BC5RGUnorm */ :
            case "bc5-rg-snorm" /* WebGPUConstants.TextureFormat.BC5RGSnorm */ :
            case "bc3-rgba-unorm" /* WebGPUConstants.TextureFormat.BC3RGBAUnorm */ :
            case "bc3-rgba-unorm-srgb" /* WebGPUConstants.TextureFormat.BC3RGBAUnormSRGB */ :
            case "bc2-rgba-unorm" /* WebGPUConstants.TextureFormat.BC2RGBAUnorm */ :
            case "bc2-rgba-unorm-srgb" /* WebGPUConstants.TextureFormat.BC2RGBAUnormSRGB */ :
                return {
                    width: 4,
                    height: 4,
                    length: 16
                };
            case "bc4-r-unorm" /* WebGPUConstants.TextureFormat.BC4RUnorm */ :
            case "bc4-r-snorm" /* WebGPUConstants.TextureFormat.BC4RSnorm */ :
            case "bc1-rgba-unorm" /* WebGPUConstants.TextureFormat.BC1RGBAUnorm */ :
            case "bc1-rgba-unorm-srgb" /* WebGPUConstants.TextureFormat.BC1RGBAUnormSRGB */ :
                return {
                    width: 4,
                    height: 4,
                    length: 8
                };
            // ETC2 compressed formats usable if "texture-compression-etc2" is both
            // supported by the device/user agent and enabled in requestDevice.
            case "etc2-rgb8unorm" /* WebGPUConstants.TextureFormat.ETC2RGB8Unorm */ :
            case "etc2-rgb8unorm-srgb" /* WebGPUConstants.TextureFormat.ETC2RGB8UnormSRGB */ :
            case "etc2-rgb8a1unorm" /* WebGPUConstants.TextureFormat.ETC2RGB8A1Unorm */ :
            case "etc2-rgb8a1unorm-srgb" /* WebGPUConstants.TextureFormat.ETC2RGB8A1UnormSRGB */ :
            case "eac-r11unorm" /* WebGPUConstants.TextureFormat.EACR11Unorm */ :
            case "eac-r11snorm" /* WebGPUConstants.TextureFormat.EACR11Snorm */ :
                return {
                    width: 4,
                    height: 4,
                    length: 8
                };
            case "etc2-rgba8unorm" /* WebGPUConstants.TextureFormat.ETC2RGBA8Unorm */ :
            case "etc2-rgba8unorm-srgb" /* WebGPUConstants.TextureFormat.ETC2RGBA8UnormSRGB */ :
            case "eac-rg11unorm" /* WebGPUConstants.TextureFormat.EACRG11Unorm */ :
            case "eac-rg11snorm" /* WebGPUConstants.TextureFormat.EACRG11Snorm */ :
                return {
                    width: 4,
                    height: 4,
                    length: 16
                };
            // ASTC compressed formats usable if "texture-compression-astc" is both
            // supported by the device/user agent and enabled in requestDevice.
            case "astc-4x4-unorm" /* WebGPUConstants.TextureFormat.ASTC4x4Unorm */ :
            case "astc-4x4-unorm-srgb" /* WebGPUConstants.TextureFormat.ASTC4x4UnormSRGB */ :
                return {
                    width: 4,
                    height: 4,
                    length: 16
                };
            case "astc-5x4-unorm" /* WebGPUConstants.TextureFormat.ASTC5x4Unorm */ :
            case "astc-5x4-unorm-srgb" /* WebGPUConstants.TextureFormat.ASTC5x4UnormSRGB */ :
                return {
                    width: 5,
                    height: 4,
                    length: 16
                };
            case "astc-5x5-unorm" /* WebGPUConstants.TextureFormat.ASTC5x5Unorm */ :
            case "astc-5x5-unorm-srgb" /* WebGPUConstants.TextureFormat.ASTC5x5UnormSRGB */ :
                return {
                    width: 5,
                    height: 5,
                    length: 16
                };
            case "astc-6x5-unorm" /* WebGPUConstants.TextureFormat.ASTC6x5Unorm */ :
            case "astc-6x5-unorm-srgb" /* WebGPUConstants.TextureFormat.ASTC6x5UnormSRGB */ :
                return {
                    width: 6,
                    height: 5,
                    length: 16
                };
            case "astc-6x6-unorm" /* WebGPUConstants.TextureFormat.ASTC6x6Unorm */ :
            case "astc-6x6-unorm-srgb" /* WebGPUConstants.TextureFormat.ASTC6x6UnormSRGB */ :
                return {
                    width: 6,
                    height: 6,
                    length: 16
                };
            case "astc-8x5-unorm" /* WebGPUConstants.TextureFormat.ASTC8x5Unorm */ :
            case "astc-8x5-unorm-srgb" /* WebGPUConstants.TextureFormat.ASTC8x5UnormSRGB */ :
                return {
                    width: 8,
                    height: 5,
                    length: 16
                };
            case "astc-8x6-unorm" /* WebGPUConstants.TextureFormat.ASTC8x6Unorm */ :
            case "astc-8x6-unorm-srgb" /* WebGPUConstants.TextureFormat.ASTC8x6UnormSRGB */ :
                return {
                    width: 8,
                    height: 6,
                    length: 16
                };
            case "astc-8x8-unorm" /* WebGPUConstants.TextureFormat.ASTC8x8Unorm */ :
            case "astc-8x8-unorm-srgb" /* WebGPUConstants.TextureFormat.ASTC8x8UnormSRGB */ :
                return {
                    width: 8,
                    height: 8,
                    length: 16
                };
            case "astc-10x5-unorm" /* WebGPUConstants.TextureFormat.ASTC10x5Unorm */ :
            case "astc-10x5-unorm-srgb" /* WebGPUConstants.TextureFormat.ASTC10x5UnormSRGB */ :
                return {
                    width: 10,
                    height: 5,
                    length: 16
                };
            case "astc-10x6-unorm" /* WebGPUConstants.TextureFormat.ASTC10x6Unorm */ :
            case "astc-10x6-unorm-srgb" /* WebGPUConstants.TextureFormat.ASTC10x6UnormSRGB */ :
                return {
                    width: 10,
                    height: 6,
                    length: 16
                };
            case "astc-10x8-unorm" /* WebGPUConstants.TextureFormat.ASTC10x8Unorm */ :
            case "astc-10x8-unorm-srgb" /* WebGPUConstants.TextureFormat.ASTC10x8UnormSRGB */ :
                return {
                    width: 10,
                    height: 8,
                    length: 16
                };
            case "astc-10x10-unorm" /* WebGPUConstants.TextureFormat.ASTC10x10Unorm */ :
            case "astc-10x10-unorm-srgb" /* WebGPUConstants.TextureFormat.ASTC10x10UnormSRGB */ :
                return {
                    width: 10,
                    height: 10,
                    length: 16
                };
            case "astc-12x10-unorm" /* WebGPUConstants.TextureFormat.ASTC12x10Unorm */ :
            case "astc-12x10-unorm-srgb" /* WebGPUConstants.TextureFormat.ASTC12x10UnormSRGB */ :
                return {
                    width: 12,
                    height: 10,
                    length: 16
                };
            case "astc-12x12-unorm" /* WebGPUConstants.TextureFormat.ASTC12x12Unorm */ :
            case "astc-12x12-unorm-srgb" /* WebGPUConstants.TextureFormat.ASTC12x12UnormSRGB */ :
                return {
                    width: 12,
                    height: 12,
                    length: 16
                };
        }
        return {
            width: 1,
            height: 1,
            length: 4
        };
    }
    static IsHardwareTexture(texture) {
        return !!texture.release;
    }
    static IsInternalTexture(texture) {
        return !!texture.dispose;
    }
    static IsImageBitmap(imageBitmap) {
        return imageBitmap.close !== undefined;
    }
    static IsImageBitmapArray(imageBitmap) {
        return Array.isArray(imageBitmap) && imageBitmap[0].close !== undefined;
    }
    static IsCompressedFormat(format) {
        switch(format){
            case "bc7-rgba-unorm-srgb" /* WebGPUConstants.TextureFormat.BC7RGBAUnormSRGB */ :
            case "bc7-rgba-unorm" /* WebGPUConstants.TextureFormat.BC7RGBAUnorm */ :
            case "bc6h-rgb-float" /* WebGPUConstants.TextureFormat.BC6HRGBFloat */ :
            case "bc6h-rgb-ufloat" /* WebGPUConstants.TextureFormat.BC6HRGBUFloat */ :
            case "bc5-rg-snorm" /* WebGPUConstants.TextureFormat.BC5RGSnorm */ :
            case "bc5-rg-unorm" /* WebGPUConstants.TextureFormat.BC5RGUnorm */ :
            case "bc4-r-snorm" /* WebGPUConstants.TextureFormat.BC4RSnorm */ :
            case "bc4-r-unorm" /* WebGPUConstants.TextureFormat.BC4RUnorm */ :
            case "bc3-rgba-unorm-srgb" /* WebGPUConstants.TextureFormat.BC3RGBAUnormSRGB */ :
            case "bc3-rgba-unorm" /* WebGPUConstants.TextureFormat.BC3RGBAUnorm */ :
            case "bc2-rgba-unorm-srgb" /* WebGPUConstants.TextureFormat.BC2RGBAUnormSRGB */ :
            case "bc2-rgba-unorm" /* WebGPUConstants.TextureFormat.BC2RGBAUnorm */ :
            case "bc1-rgba-unorm-srgb" /* WebGPUConstants.TextureFormat.BC1RGBAUnormSRGB */ :
            case "bc1-rgba-unorm" /* WebGPUConstants.TextureFormat.BC1RGBAUnorm */ :
            case "etc2-rgb8unorm" /* WebGPUConstants.TextureFormat.ETC2RGB8Unorm */ :
            case "etc2-rgb8unorm-srgb" /* WebGPUConstants.TextureFormat.ETC2RGB8UnormSRGB */ :
            case "etc2-rgb8a1unorm" /* WebGPUConstants.TextureFormat.ETC2RGB8A1Unorm */ :
            case "etc2-rgb8a1unorm-srgb" /* WebGPUConstants.TextureFormat.ETC2RGB8A1UnormSRGB */ :
            case "etc2-rgba8unorm" /* WebGPUConstants.TextureFormat.ETC2RGBA8Unorm */ :
            case "etc2-rgba8unorm-srgb" /* WebGPUConstants.TextureFormat.ETC2RGBA8UnormSRGB */ :
            case "eac-r11unorm" /* WebGPUConstants.TextureFormat.EACR11Unorm */ :
            case "eac-r11snorm" /* WebGPUConstants.TextureFormat.EACR11Snorm */ :
            case "eac-rg11unorm" /* WebGPUConstants.TextureFormat.EACRG11Unorm */ :
            case "eac-rg11snorm" /* WebGPUConstants.TextureFormat.EACRG11Snorm */ :
            case "astc-4x4-unorm" /* WebGPUConstants.TextureFormat.ASTC4x4Unorm */ :
            case "astc-4x4-unorm-srgb" /* WebGPUConstants.TextureFormat.ASTC4x4UnormSRGB */ :
            case "astc-5x4-unorm" /* WebGPUConstants.TextureFormat.ASTC5x4Unorm */ :
            case "astc-5x4-unorm-srgb" /* WebGPUConstants.TextureFormat.ASTC5x4UnormSRGB */ :
            case "astc-5x5-unorm" /* WebGPUConstants.TextureFormat.ASTC5x5Unorm */ :
            case "astc-5x5-unorm-srgb" /* WebGPUConstants.TextureFormat.ASTC5x5UnormSRGB */ :
            case "astc-6x5-unorm" /* WebGPUConstants.TextureFormat.ASTC6x5Unorm */ :
            case "astc-6x5-unorm-srgb" /* WebGPUConstants.TextureFormat.ASTC6x5UnormSRGB */ :
            case "astc-6x6-unorm" /* WebGPUConstants.TextureFormat.ASTC6x6Unorm */ :
            case "astc-6x6-unorm-srgb" /* WebGPUConstants.TextureFormat.ASTC6x6UnormSRGB */ :
            case "astc-8x5-unorm" /* WebGPUConstants.TextureFormat.ASTC8x5Unorm */ :
            case "astc-8x5-unorm-srgb" /* WebGPUConstants.TextureFormat.ASTC8x5UnormSRGB */ :
            case "astc-8x6-unorm" /* WebGPUConstants.TextureFormat.ASTC8x6Unorm */ :
            case "astc-8x6-unorm-srgb" /* WebGPUConstants.TextureFormat.ASTC8x6UnormSRGB */ :
            case "astc-8x8-unorm" /* WebGPUConstants.TextureFormat.ASTC8x8Unorm */ :
            case "astc-8x8-unorm-srgb" /* WebGPUConstants.TextureFormat.ASTC8x8UnormSRGB */ :
            case "astc-10x5-unorm" /* WebGPUConstants.TextureFormat.ASTC10x5Unorm */ :
            case "astc-10x5-unorm-srgb" /* WebGPUConstants.TextureFormat.ASTC10x5UnormSRGB */ :
            case "astc-10x6-unorm" /* WebGPUConstants.TextureFormat.ASTC10x6Unorm */ :
            case "astc-10x6-unorm-srgb" /* WebGPUConstants.TextureFormat.ASTC10x6UnormSRGB */ :
            case "astc-10x8-unorm" /* WebGPUConstants.TextureFormat.ASTC10x8Unorm */ :
            case "astc-10x8-unorm-srgb" /* WebGPUConstants.TextureFormat.ASTC10x8UnormSRGB */ :
            case "astc-10x10-unorm" /* WebGPUConstants.TextureFormat.ASTC10x10Unorm */ :
            case "astc-10x10-unorm-srgb" /* WebGPUConstants.TextureFormat.ASTC10x10UnormSRGB */ :
            case "astc-12x10-unorm" /* WebGPUConstants.TextureFormat.ASTC12x10Unorm */ :
            case "astc-12x10-unorm-srgb" /* WebGPUConstants.TextureFormat.ASTC12x10UnormSRGB */ :
            case "astc-12x12-unorm" /* WebGPUConstants.TextureFormat.ASTC12x12Unorm */ :
            case "astc-12x12-unorm-srgb" /* WebGPUConstants.TextureFormat.ASTC12x12UnormSRGB */ :
                return true;
        }
        return false;
    }
    static GetWebGPUTextureFormat(type, format, useSRGBBuffer = false) {
        switch(format){
            case 15:
                return "depth16unorm" /* WebGPUConstants.TextureFormat.Depth16Unorm */ ;
            case 16:
                return "depth24plus" /* WebGPUConstants.TextureFormat.Depth24Plus */ ;
            case 13:
                return "depth24plus-stencil8" /* WebGPUConstants.TextureFormat.Depth24PlusStencil8 */ ;
            case 14:
                return "depth32float" /* WebGPUConstants.TextureFormat.Depth32Float */ ;
            case 18:
                return "depth32float-stencil8" /* WebGPUConstants.TextureFormat.Depth32FloatStencil8 */ ;
            case 19:
                return "stencil8" /* WebGPUConstants.TextureFormat.Stencil8 */ ;
            case 36492:
                return useSRGBBuffer ? "bc7-rgba-unorm-srgb" /* WebGPUConstants.TextureFormat.BC7RGBAUnormSRGB */  : "bc7-rgba-unorm" /* WebGPUConstants.TextureFormat.BC7RGBAUnorm */ ;
            case 36495:
                return "bc6h-rgb-ufloat" /* WebGPUConstants.TextureFormat.BC6HRGBUFloat */ ;
            case 36494:
                return "bc6h-rgb-float" /* WebGPUConstants.TextureFormat.BC6HRGBFloat */ ;
            case 33779:
                return useSRGBBuffer ? "bc3-rgba-unorm-srgb" /* WebGPUConstants.TextureFormat.BC3RGBAUnormSRGB */  : "bc3-rgba-unorm" /* WebGPUConstants.TextureFormat.BC3RGBAUnorm */ ;
            case 33778:
                return useSRGBBuffer ? "bc2-rgba-unorm-srgb" /* WebGPUConstants.TextureFormat.BC2RGBAUnormSRGB */  : "bc2-rgba-unorm" /* WebGPUConstants.TextureFormat.BC2RGBAUnorm */ ;
            case 33777:
            case 33776:
                return useSRGBBuffer ? "bc1-rgba-unorm-srgb" /* WebGPUConstants.TextureFormat.BC1RGBAUnormSRGB */  : "bc1-rgba-unorm" /* WebGPUConstants.TextureFormat.BC1RGBAUnorm */ ;
            case 37808:
                return useSRGBBuffer ? "astc-4x4-unorm-srgb" /* WebGPUConstants.TextureFormat.ASTC4x4UnormSRGB */  : "astc-4x4-unorm" /* WebGPUConstants.TextureFormat.ASTC4x4Unorm */ ;
            case 36196:
            case 37492:
                return useSRGBBuffer ? "etc2-rgb8unorm-srgb" /* WebGPUConstants.TextureFormat.ETC2RGB8UnormSRGB */  : "etc2-rgb8unorm" /* WebGPUConstants.TextureFormat.ETC2RGB8Unorm */ ;
            case 37496:
                return useSRGBBuffer ? "etc2-rgba8unorm-srgb" /* WebGPUConstants.TextureFormat.ETC2RGBA8UnormSRGB */  : "etc2-rgba8unorm" /* WebGPUConstants.TextureFormat.ETC2RGBA8Unorm */ ;
        }
        switch(type){
            case 3:
                switch(format){
                    case 6:
                        return "r8snorm" /* WebGPUConstants.TextureFormat.R8Snorm */ ;
                    case 7:
                        return "rg8snorm" /* WebGPUConstants.TextureFormat.RG8Snorm */ ;
                    case 4:
                        // eslint-disable-next-line no-throw-literal
                        throw "RGB format not supported in WebGPU";
                    case 8:
                        return "r8sint" /* WebGPUConstants.TextureFormat.R8Sint */ ;
                    case 9:
                        return "rg8sint" /* WebGPUConstants.TextureFormat.RG8Sint */ ;
                    case 10:
                        // eslint-disable-next-line no-throw-literal
                        throw "RGB_INTEGER format not supported in WebGPU";
                    case 11:
                        return "rgba8sint" /* WebGPUConstants.TextureFormat.RGBA8Sint */ ;
                    default:
                        return "rgba8snorm" /* WebGPUConstants.TextureFormat.RGBA8Snorm */ ;
                }
            case 0:
                switch(format){
                    case 6:
                        return "r8unorm" /* WebGPUConstants.TextureFormat.R8Unorm */ ;
                    case 7:
                        return "rg8unorm" /* WebGPUConstants.TextureFormat.RG8Unorm */ ;
                    case 4:
                        // eslint-disable-next-line no-throw-literal
                        throw "TEXTUREFORMAT_RGB format not supported in WebGPU";
                    case 5:
                        return useSRGBBuffer ? "rgba8unorm-srgb" /* WebGPUConstants.TextureFormat.RGBA8UnormSRGB */  : "rgba8unorm" /* WebGPUConstants.TextureFormat.RGBA8Unorm */ ;
                    case 12:
                        return useSRGBBuffer ? "bgra8unorm-srgb" /* WebGPUConstants.TextureFormat.BGRA8UnormSRGB */  : "bgra8unorm" /* WebGPUConstants.TextureFormat.BGRA8Unorm */ ;
                    case 8:
                        return "r8uint" /* WebGPUConstants.TextureFormat.R8Uint */ ;
                    case 9:
                        return "rg8uint" /* WebGPUConstants.TextureFormat.RG8Uint */ ;
                    case 10:
                        // eslint-disable-next-line no-throw-literal
                        throw "RGB_INTEGER format not supported in WebGPU";
                    case 11:
                        return "rgba8uint" /* WebGPUConstants.TextureFormat.RGBA8Uint */ ;
                    case 0:
                        // eslint-disable-next-line no-throw-literal
                        throw "TEXTUREFORMAT_ALPHA format not supported in WebGPU";
                    case 1:
                        // eslint-disable-next-line no-throw-literal
                        throw "TEXTUREFORMAT_LUMINANCE format not supported in WebGPU";
                    case 2:
                        // eslint-disable-next-line no-throw-literal
                        throw "TEXTUREFORMAT_LUMINANCE_ALPHA format not supported in WebGPU";
                    default:
                        return "rgba8unorm" /* WebGPUConstants.TextureFormat.RGBA8Unorm */ ;
                }
            case 4:
                switch(format){
                    case 8:
                        return "r16sint" /* WebGPUConstants.TextureFormat.R16Sint */ ;
                    case 9:
                        return "rg16sint" /* WebGPUConstants.TextureFormat.RG16Sint */ ;
                    case 10:
                        // eslint-disable-next-line no-throw-literal
                        throw "TEXTUREFORMAT_RGB_INTEGER format not supported in WebGPU";
                    case 11:
                        return "rgba16sint" /* WebGPUConstants.TextureFormat.RGBA16Sint */ ;
                    default:
                        return "rgba16sint" /* WebGPUConstants.TextureFormat.RGBA16Sint */ ;
                }
            case 5:
                switch(format){
                    case 8:
                        return "r16uint" /* WebGPUConstants.TextureFormat.R16Uint */ ;
                    case 9:
                        return "rg16uint" /* WebGPUConstants.TextureFormat.RG16Uint */ ;
                    case 10:
                        // eslint-disable-next-line no-throw-literal
                        throw "TEXTUREFORMAT_RGB_INTEGER format not supported in WebGPU";
                    case 11:
                        return "rgba16uint" /* WebGPUConstants.TextureFormat.RGBA16Uint */ ;
                    default:
                        return "rgba16uint" /* WebGPUConstants.TextureFormat.RGBA16Uint */ ;
                }
            case 6:
                switch(format){
                    case 8:
                        return "r32sint" /* WebGPUConstants.TextureFormat.R32Sint */ ;
                    case 9:
                        return "rg32sint" /* WebGPUConstants.TextureFormat.RG32Sint */ ;
                    case 10:
                        // eslint-disable-next-line no-throw-literal
                        throw "TEXTUREFORMAT_RGB_INTEGER format not supported in WebGPU";
                    case 11:
                        return "rgba32sint" /* WebGPUConstants.TextureFormat.RGBA32Sint */ ;
                    default:
                        return "rgba32sint" /* WebGPUConstants.TextureFormat.RGBA32Sint */ ;
                }
            case 7:
                switch(format){
                    case 8:
                        return "r32uint" /* WebGPUConstants.TextureFormat.R32Uint */ ;
                    case 9:
                        return "rg32uint" /* WebGPUConstants.TextureFormat.RG32Uint */ ;
                    case 10:
                        // eslint-disable-next-line no-throw-literal
                        throw "TEXTUREFORMAT_RGB_INTEGER format not supported in WebGPU";
                    case 11:
                        return "rgba32uint" /* WebGPUConstants.TextureFormat.RGBA32Uint */ ;
                    default:
                        return "rgba32uint" /* WebGPUConstants.TextureFormat.RGBA32Uint */ ;
                }
            case 1:
                switch(format){
                    case 6:
                        return "r32float" /* WebGPUConstants.TextureFormat.R32Float */ ; // By default. Other possibility is R16Float.
                    case 7:
                        return "rg32float" /* WebGPUConstants.TextureFormat.RG32Float */ ; // By default. Other possibility is RG16Float.
                    case 4:
                        // eslint-disable-next-line no-throw-literal
                        throw "TEXTUREFORMAT_RGB format not supported in WebGPU";
                    case 5:
                        return "rgba32float" /* WebGPUConstants.TextureFormat.RGBA32Float */ ; // By default. Other possibility is RGBA16Float.
                    default:
                        return "rgba32float" /* WebGPUConstants.TextureFormat.RGBA32Float */ ;
                }
            case 2:
                switch(format){
                    case 6:
                        return "r16float" /* WebGPUConstants.TextureFormat.R16Float */ ;
                    case 7:
                        return "rg16float" /* WebGPUConstants.TextureFormat.RG16Float */ ;
                    case 4:
                        // eslint-disable-next-line no-throw-literal
                        throw "TEXTUREFORMAT_RGB format not supported in WebGPU";
                    case 5:
                        return "rgba16float" /* WebGPUConstants.TextureFormat.RGBA16Float */ ;
                    default:
                        return "rgba16float" /* WebGPUConstants.TextureFormat.RGBA16Float */ ;
                }
            case 10:
                // eslint-disable-next-line no-throw-literal
                throw "TEXTURETYPE_UNSIGNED_SHORT_5_6_5 format not supported in WebGPU";
            case 13:
                switch(format){
                    case 5:
                        return "rg11b10ufloat" /* WebGPUConstants.TextureFormat.RG11B10UFloat */ ;
                    case 11:
                        // eslint-disable-next-line no-throw-literal
                        throw "TEXTUREFORMAT_RGBA_INTEGER format not supported in WebGPU when type is TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV";
                    default:
                        return "rg11b10ufloat" /* WebGPUConstants.TextureFormat.RG11B10UFloat */ ;
                }
            case 14:
                switch(format){
                    case 5:
                        return "rgb9e5ufloat" /* WebGPUConstants.TextureFormat.RGB9E5UFloat */ ;
                    case 11:
                        // eslint-disable-next-line no-throw-literal
                        throw "TEXTUREFORMAT_RGBA_INTEGER format not supported in WebGPU when type is TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV";
                    default:
                        return "rgb9e5ufloat" /* WebGPUConstants.TextureFormat.RGB9E5UFloat */ ;
                }
            case 8:
                // eslint-disable-next-line no-throw-literal
                throw "TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4 format not supported in WebGPU";
            case 9:
                // eslint-disable-next-line no-throw-literal
                throw "TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1 format not supported in WebGPU";
            case 11:
                switch(format){
                    case 5:
                        return "rgb10a2unorm" /* WebGPUConstants.TextureFormat.RGB10A2Unorm */ ;
                    case 11:
                        return "rgb10a2uint" /* WebGPUConstants.TextureFormat.RGB10A2UINT */ ;
                    default:
                        return "rgb10a2unorm" /* WebGPUConstants.TextureFormat.RGB10A2Unorm */ ;
                }
        }
        return useSRGBBuffer ? "rgba8unorm-srgb" /* WebGPUConstants.TextureFormat.RGBA8UnormSRGB */  : "rgba8unorm" /* WebGPUConstants.TextureFormat.RGBA8Unorm */ ;
    }
    static GetNumChannelsFromWebGPUTextureFormat(format) {
        switch(format){
            case "r8unorm" /* WebGPUConstants.TextureFormat.R8Unorm */ :
            case "r8snorm" /* WebGPUConstants.TextureFormat.R8Snorm */ :
            case "r8uint" /* WebGPUConstants.TextureFormat.R8Uint */ :
            case "r8sint" /* WebGPUConstants.TextureFormat.R8Sint */ :
            case "bc4-r-unorm" /* WebGPUConstants.TextureFormat.BC4RUnorm */ :
            case "bc4-r-snorm" /* WebGPUConstants.TextureFormat.BC4RSnorm */ :
            case "r16uint" /* WebGPUConstants.TextureFormat.R16Uint */ :
            case "r16sint" /* WebGPUConstants.TextureFormat.R16Sint */ :
            case "depth16unorm" /* WebGPUConstants.TextureFormat.Depth16Unorm */ :
            case "r16float" /* WebGPUConstants.TextureFormat.R16Float */ :
            case "r16unorm" /* WebGPUConstants.TextureFormat.R16Unorm */ :
            case "r16snorm" /* WebGPUConstants.TextureFormat.R16Snorm */ :
            case "r32uint" /* WebGPUConstants.TextureFormat.R32Uint */ :
            case "r32sint" /* WebGPUConstants.TextureFormat.R32Sint */ :
            case "r32float" /* WebGPUConstants.TextureFormat.R32Float */ :
            case "depth32float" /* WebGPUConstants.TextureFormat.Depth32Float */ :
            case "stencil8" /* WebGPUConstants.TextureFormat.Stencil8 */ :
            case "depth24plus" /* WebGPUConstants.TextureFormat.Depth24Plus */ :
            case "eac-r11unorm" /* WebGPUConstants.TextureFormat.EACR11Unorm */ :
            case "eac-r11snorm" /* WebGPUConstants.TextureFormat.EACR11Snorm */ :
                return 1;
            case "rg8unorm" /* WebGPUConstants.TextureFormat.RG8Unorm */ :
            case "rg8snorm" /* WebGPUConstants.TextureFormat.RG8Snorm */ :
            case "rg8uint" /* WebGPUConstants.TextureFormat.RG8Uint */ :
            case "rg8sint" /* WebGPUConstants.TextureFormat.RG8Sint */ :
            case "depth32float-stencil8" /* WebGPUConstants.TextureFormat.Depth32FloatStencil8 */ :
            case "bc5-rg-unorm" /* WebGPUConstants.TextureFormat.BC5RGUnorm */ :
            case "bc5-rg-snorm" /* WebGPUConstants.TextureFormat.BC5RGSnorm */ :
            case "rg16uint" /* WebGPUConstants.TextureFormat.RG16Uint */ :
            case "rg16sint" /* WebGPUConstants.TextureFormat.RG16Sint */ :
            case "rg16float" /* WebGPUConstants.TextureFormat.RG16Float */ :
            case "rg16unorm" /* WebGPUConstants.TextureFormat.RG16Unorm */ :
            case "rg16snorm" /* WebGPUConstants.TextureFormat.RG16Snorm */ :
            case "rg32uint" /* WebGPUConstants.TextureFormat.RG32Uint */ :
            case "rg32sint" /* WebGPUConstants.TextureFormat.RG32Sint */ :
            case "rg32float" /* WebGPUConstants.TextureFormat.RG32Float */ :
            case "depth24plus-stencil8" /* WebGPUConstants.TextureFormat.Depth24PlusStencil8 */ :
            case "eac-rg11unorm" /* WebGPUConstants.TextureFormat.EACRG11Unorm */ :
            case "eac-rg11snorm" /* WebGPUConstants.TextureFormat.EACRG11Snorm */ :
                return 2;
            case "rgb9e5ufloat" /* WebGPUConstants.TextureFormat.RGB9E5UFloat */ :
            case "rg11b10ufloat" /* WebGPUConstants.TextureFormat.RG11B10UFloat */ :
            case "bc6h-rgb-ufloat" /* WebGPUConstants.TextureFormat.BC6HRGBUFloat */ :
            case "bc6h-rgb-float" /* WebGPUConstants.TextureFormat.BC6HRGBFloat */ :
            case "etc2-rgb8unorm" /* WebGPUConstants.TextureFormat.ETC2RGB8Unorm */ :
            case "etc2-rgb8unorm-srgb" /* WebGPUConstants.TextureFormat.ETC2RGB8UnormSRGB */ :
                return 3;
            case "rgba8unorm" /* WebGPUConstants.TextureFormat.RGBA8Unorm */ :
            case "rgba8unorm-srgb" /* WebGPUConstants.TextureFormat.RGBA8UnormSRGB */ :
            case "rgba8snorm" /* WebGPUConstants.TextureFormat.RGBA8Snorm */ :
            case "rgba8uint" /* WebGPUConstants.TextureFormat.RGBA8Uint */ :
            case "rgba8sint" /* WebGPUConstants.TextureFormat.RGBA8Sint */ :
            case "bgra8unorm" /* WebGPUConstants.TextureFormat.BGRA8Unorm */ :
            case "bgra8unorm-srgb" /* WebGPUConstants.TextureFormat.BGRA8UnormSRGB */ :
            case "rgba16unorm" /* WebGPUConstants.TextureFormat.RGBA16Unorm */ :
            case "rgba16snorm" /* WebGPUConstants.TextureFormat.RGBA16Snorm */ :
            case "rgb10a2uint" /* WebGPUConstants.TextureFormat.RGB10A2UINT */ :
            case "rgb10a2unorm" /* WebGPUConstants.TextureFormat.RGB10A2Unorm */ :
            case "bc7-rgba-unorm" /* WebGPUConstants.TextureFormat.BC7RGBAUnorm */ :
            case "bc7-rgba-unorm-srgb" /* WebGPUConstants.TextureFormat.BC7RGBAUnormSRGB */ :
            case "bc3-rgba-unorm" /* WebGPUConstants.TextureFormat.BC3RGBAUnorm */ :
            case "bc3-rgba-unorm-srgb" /* WebGPUConstants.TextureFormat.BC3RGBAUnormSRGB */ :
            case "bc2-rgba-unorm" /* WebGPUConstants.TextureFormat.BC2RGBAUnorm */ :
            case "bc2-rgba-unorm-srgb" /* WebGPUConstants.TextureFormat.BC2RGBAUnormSRGB */ :
            case "bc1-rgba-unorm" /* WebGPUConstants.TextureFormat.BC1RGBAUnorm */ :
            case "bc1-rgba-unorm-srgb" /* WebGPUConstants.TextureFormat.BC1RGBAUnormSRGB */ :
            case "rgba16uint" /* WebGPUConstants.TextureFormat.RGBA16Uint */ :
            case "rgba16sint" /* WebGPUConstants.TextureFormat.RGBA16Sint */ :
            case "rgba16float" /* WebGPUConstants.TextureFormat.RGBA16Float */ :
            case "rgba32uint" /* WebGPUConstants.TextureFormat.RGBA32Uint */ :
            case "rgba32sint" /* WebGPUConstants.TextureFormat.RGBA32Sint */ :
            case "rgba32float" /* WebGPUConstants.TextureFormat.RGBA32Float */ :
            case "etc2-rgb8a1unorm" /* WebGPUConstants.TextureFormat.ETC2RGB8A1Unorm */ :
            case "etc2-rgb8a1unorm-srgb" /* WebGPUConstants.TextureFormat.ETC2RGB8A1UnormSRGB */ :
            case "etc2-rgba8unorm" /* WebGPUConstants.TextureFormat.ETC2RGBA8Unorm */ :
            case "etc2-rgba8unorm-srgb" /* WebGPUConstants.TextureFormat.ETC2RGBA8UnormSRGB */ :
            case "astc-4x4-unorm" /* WebGPUConstants.TextureFormat.ASTC4x4Unorm */ :
            case "astc-4x4-unorm-srgb" /* WebGPUConstants.TextureFormat.ASTC4x4UnormSRGB */ :
            case "astc-5x4-unorm" /* WebGPUConstants.TextureFormat.ASTC5x4Unorm */ :
            case "astc-5x4-unorm-srgb" /* WebGPUConstants.TextureFormat.ASTC5x4UnormSRGB */ :
            case "astc-5x5-unorm" /* WebGPUConstants.TextureFormat.ASTC5x5Unorm */ :
            case "astc-5x5-unorm-srgb" /* WebGPUConstants.TextureFormat.ASTC5x5UnormSRGB */ :
            case "astc-6x5-unorm" /* WebGPUConstants.TextureFormat.ASTC6x5Unorm */ :
            case "astc-6x5-unorm-srgb" /* WebGPUConstants.TextureFormat.ASTC6x5UnormSRGB */ :
            case "astc-6x6-unorm" /* WebGPUConstants.TextureFormat.ASTC6x6Unorm */ :
            case "astc-6x6-unorm-srgb" /* WebGPUConstants.TextureFormat.ASTC6x6UnormSRGB */ :
            case "astc-8x5-unorm" /* WebGPUConstants.TextureFormat.ASTC8x5Unorm */ :
            case "astc-8x5-unorm-srgb" /* WebGPUConstants.TextureFormat.ASTC8x5UnormSRGB */ :
            case "astc-8x6-unorm" /* WebGPUConstants.TextureFormat.ASTC8x6Unorm */ :
            case "astc-8x6-unorm-srgb" /* WebGPUConstants.TextureFormat.ASTC8x6UnormSRGB */ :
            case "astc-8x8-unorm" /* WebGPUConstants.TextureFormat.ASTC8x8Unorm */ :
            case "astc-8x8-unorm-srgb" /* WebGPUConstants.TextureFormat.ASTC8x8UnormSRGB */ :
            case "astc-10x5-unorm" /* WebGPUConstants.TextureFormat.ASTC10x5Unorm */ :
            case "astc-10x5-unorm-srgb" /* WebGPUConstants.TextureFormat.ASTC10x5UnormSRGB */ :
            case "astc-10x6-unorm" /* WebGPUConstants.TextureFormat.ASTC10x6Unorm */ :
            case "astc-10x6-unorm-srgb" /* WebGPUConstants.TextureFormat.ASTC10x6UnormSRGB */ :
            case "astc-10x8-unorm" /* WebGPUConstants.TextureFormat.ASTC10x8Unorm */ :
            case "astc-10x8-unorm-srgb" /* WebGPUConstants.TextureFormat.ASTC10x8UnormSRGB */ :
            case "astc-10x10-unorm" /* WebGPUConstants.TextureFormat.ASTC10x10Unorm */ :
            case "astc-10x10-unorm-srgb" /* WebGPUConstants.TextureFormat.ASTC10x10UnormSRGB */ :
            case "astc-12x10-unorm" /* WebGPUConstants.TextureFormat.ASTC12x10Unorm */ :
            case "astc-12x10-unorm-srgb" /* WebGPUConstants.TextureFormat.ASTC12x10UnormSRGB */ :
            case "astc-12x12-unorm" /* WebGPUConstants.TextureFormat.ASTC12x12Unorm */ :
            case "astc-12x12-unorm-srgb" /* WebGPUConstants.TextureFormat.ASTC12x12UnormSRGB */ :
                return 4;
        }
        // eslint-disable-next-line no-throw-literal
        throw `Unknown format ${format}!`;
    }
    static HasStencilAspect(format) {
        switch(format){
            case "stencil8" /* WebGPUConstants.TextureFormat.Stencil8 */ :
            case "depth32float-stencil8" /* WebGPUConstants.TextureFormat.Depth32FloatStencil8 */ :
            case "depth24plus-stencil8" /* WebGPUConstants.TextureFormat.Depth24PlusStencil8 */ :
                return true;
        }
        return false;
    }
    static HasDepthAspect(format) {
        switch(format){
            case "depth16unorm" /* WebGPUConstants.TextureFormat.Depth16Unorm */ :
            case "depth24plus" /* WebGPUConstants.TextureFormat.Depth24Plus */ :
            case "depth24plus-stencil8" /* WebGPUConstants.TextureFormat.Depth24PlusStencil8 */ :
            case "depth32float" /* WebGPUConstants.TextureFormat.Depth32Float */ :
            case "depth32float-stencil8" /* WebGPUConstants.TextureFormat.Depth32FloatStencil8 */ :
                return true;
        }
        return false;
    }
    static HasDepthAndStencilAspects(format) {
        switch(format){
            case "depth32float-stencil8" /* WebGPUConstants.TextureFormat.Depth32FloatStencil8 */ :
            case "depth24plus-stencil8" /* WebGPUConstants.TextureFormat.Depth24PlusStencil8 */ :
                return true;
        }
        return false;
    }
    static GetDepthFormatOnly(format) {
        switch(format){
            case "depth16unorm" /* WebGPUConstants.TextureFormat.Depth16Unorm */ :
                return "depth16unorm" /* WebGPUConstants.TextureFormat.Depth16Unorm */ ;
            case "depth24plus" /* WebGPUConstants.TextureFormat.Depth24Plus */ :
                return "depth24plus" /* WebGPUConstants.TextureFormat.Depth24Plus */ ;
            case "depth24plus-stencil8" /* WebGPUConstants.TextureFormat.Depth24PlusStencil8 */ :
                return "depth24plus" /* WebGPUConstants.TextureFormat.Depth24Plus */ ;
            case "depth32float" /* WebGPUConstants.TextureFormat.Depth32Float */ :
                return "depth32float" /* WebGPUConstants.TextureFormat.Depth32Float */ ;
            case "depth32float-stencil8" /* WebGPUConstants.TextureFormat.Depth32FloatStencil8 */ :
                return "depth32float" /* WebGPUConstants.TextureFormat.Depth32Float */ ;
        }
        return format;
    }
    static GetSample(sampleCount) {
        // WebGPU only supports 1 or 4
        return sampleCount > 1 ? 4 : 1;
    }
} //# sourceMappingURL=webgpuTextureHelper.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/Extensions/engine.alpha.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/abstractEngine.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$AbstractEngine$2f$abstractEngine$2e$alpha$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/AbstractEngine/abstractEngine.alpha.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinWebGPUEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/thinWebGPUEngine.js [app-client] (ecmascript)");
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinWebGPUEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinWebGPUEngine"].prototype.setAlphaMode = function(mode, noDepthWriteChange = false, targetIndex = 0) {
    const alphaBlend = this._alphaState._alphaBlend[targetIndex];
    if (this._alphaMode[targetIndex] === mode && (mode === 0 && !alphaBlend || mode !== 0 && alphaBlend)) {
        if (!noDepthWriteChange) {
            // Make sure we still have the correct depth mask according to the alpha mode (a transparent material could have forced writting to the depth buffer, for instance)
            const depthMask = mode === 0;
            if (this.depthCullingState.depthMask !== depthMask) {
                this.setDepthWrite(depthMask);
                this._cacheRenderPipeline.setDepthWriteEnabled(depthMask);
            }
        }
        return;
    }
    const alphaBlendDisabled = mode === 0;
    this._alphaState.setAlphaBlend(!alphaBlendDisabled, targetIndex);
    this._alphaState.setAlphaMode(mode, targetIndex);
    if (!noDepthWriteChange) {
        this.setDepthWrite(alphaBlendDisabled);
        this._cacheRenderPipeline.setDepthWriteEnabled(alphaBlendDisabled);
    }
    this._alphaMode[targetIndex] = mode;
    this._cacheRenderPipeline.setAlphaBlendEnabled(this._alphaState._alphaBlend, this._alphaState._numTargetEnabled);
    this._cacheRenderPipeline.setAlphaBlendFactors(this._alphaState._blendFunctionParameters, this._alphaState._blendEquationParameters);
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinWebGPUEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinWebGPUEngine"].prototype.setAlphaEquation = function(equation, targetIndex = 0) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AbstractEngine"].prototype.setAlphaEquation.call(this, equation, targetIndex);
    this._cacheRenderPipeline.setAlphaBlendFactors(this._alphaState._blendFunctionParameters, this._alphaState._blendEquationParameters);
}; //# sourceMappingURL=engine.alpha.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/webgpuConstants.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/naming-convention */ /** @internal */ // eslint-disable-next-line import/export
__turbopack_context__.s([
    "AddressMode",
    ()=>AddressMode,
    "AutoLayoutMode",
    ()=>AutoLayoutMode,
    "BlendFactor",
    ()=>BlendFactor,
    "BlendOperation",
    ()=>BlendOperation,
    "BufferBindingType",
    ()=>BufferBindingType,
    "BufferMapState",
    ()=>BufferMapState,
    "BufferUsage",
    ()=>BufferUsage,
    "CanvasAlphaMode",
    ()=>CanvasAlphaMode,
    "CanvasToneMappingMode",
    ()=>CanvasToneMappingMode,
    "ColorWrite",
    ()=>ColorWrite,
    "CompareFunction",
    ()=>CompareFunction,
    "CompilationMessageType",
    ()=>CompilationMessageType,
    "ComputePassTimestampLocation",
    ()=>ComputePassTimestampLocation,
    "CullMode",
    ()=>CullMode,
    "DeviceLostReason",
    ()=>DeviceLostReason,
    "ErrorFilter",
    ()=>ErrorFilter,
    "FeatureName",
    ()=>FeatureName,
    "FilterMode",
    ()=>FilterMode,
    "FrontFace",
    ()=>FrontFace,
    "IndexFormat",
    ()=>IndexFormat,
    "LoadOp",
    ()=>LoadOp,
    "MapMode",
    ()=>MapMode,
    "MipmapFilterMode",
    ()=>MipmapFilterMode,
    "PipelineErrorReason",
    ()=>PipelineErrorReason,
    "PowerPreference",
    ()=>PowerPreference,
    "PrimitiveTopology",
    ()=>PrimitiveTopology,
    "QueryType",
    ()=>QueryType,
    "RenderPassTimestampLocation",
    ()=>RenderPassTimestampLocation,
    "SamplerBindingType",
    ()=>SamplerBindingType,
    "ShaderStage",
    ()=>ShaderStage,
    "StencilOperation",
    ()=>StencilOperation,
    "StorageTextureAccess",
    ()=>StorageTextureAccess,
    "StoreOp",
    ()=>StoreOp,
    "TextureAspect",
    ()=>TextureAspect,
    "TextureDimension",
    ()=>TextureDimension,
    "TextureFormat",
    ()=>TextureFormat,
    "TextureSampleType",
    ()=>TextureSampleType,
    "TextureUsage",
    ()=>TextureUsage,
    "TextureViewDimension",
    ()=>TextureViewDimension,
    "VertexFormat",
    ()=>VertexFormat,
    "VertexStepMode",
    ()=>VertexStepMode
]);
var PowerPreference;
(function(PowerPreference) {
    PowerPreference["LowPower"] = "low-power";
    PowerPreference["HighPerformance"] = "high-performance";
})(PowerPreference || (PowerPreference = {}));
var FeatureName;
(function(FeatureName) {
    FeatureName["CoreFeaturesAndLimits"] = "core-features-and-limits";
    FeatureName["DepthClipControl"] = "depth-clip-control";
    FeatureName["Depth32FloatStencil8"] = "depth32float-stencil8";
    FeatureName["TextureCompressionBC"] = "texture-compression-bc";
    FeatureName["TextureCompressionBCSliced3D"] = "texture-compression-bc-sliced-3d";
    FeatureName["TextureCompressionETC2"] = "texture-compression-etc2";
    FeatureName["TextureCompressionASTC"] = "texture-compression-astc";
    FeatureName["TextureCompressionASTCSliced3D"] = "texture-compression-astc-sliced-3d";
    FeatureName["TimestampQuery"] = "timestamp-query";
    FeatureName["IndirectFirstInstance"] = "indirect-first-instance";
    FeatureName["ShaderF16"] = "shader-f16";
    FeatureName["RG11B10UFloatRenderable"] = "rg11b10ufloat-renderable";
    FeatureName["BGRA8UnormStorage"] = "bgra8unorm-storage";
    FeatureName["Float32Filterable"] = "float32-filterable";
    FeatureName["Float32Blendable"] = "float32-blendable";
    FeatureName["ClipDistances"] = "clip-distances";
    FeatureName["DualSourceBlending"] = "dual-source-blending";
    FeatureName["Subgroups"] = "subgroups";
    FeatureName["TextureFormatsTier1"] = "texture-formats-tier1";
    FeatureName["TextureFormatsTier2"] = "texture-formats-tier2";
})(FeatureName || (FeatureName = {}));
var BufferMapState;
(function(BufferMapState) {
    BufferMapState["Unmapped"] = "unmapped";
    BufferMapState["Pending"] = "pending";
    BufferMapState["Mapped"] = "mapped";
})(BufferMapState || (BufferMapState = {}));
var BufferUsage;
(function(BufferUsage) {
    BufferUsage[BufferUsage["MapRead"] = 1] = "MapRead";
    BufferUsage[BufferUsage["MapWrite"] = 2] = "MapWrite";
    BufferUsage[BufferUsage["CopySrc"] = 4] = "CopySrc";
    BufferUsage[BufferUsage["CopyDst"] = 8] = "CopyDst";
    BufferUsage[BufferUsage["Index"] = 16] = "Index";
    BufferUsage[BufferUsage["Vertex"] = 32] = "Vertex";
    BufferUsage[BufferUsage["Uniform"] = 64] = "Uniform";
    BufferUsage[BufferUsage["Storage"] = 128] = "Storage";
    BufferUsage[BufferUsage["Indirect"] = 256] = "Indirect";
    BufferUsage[BufferUsage["QueryResolve"] = 512] = "QueryResolve";
})(BufferUsage || (BufferUsage = {}));
var MapMode;
(function(MapMode) {
    MapMode[MapMode["Read"] = 1] = "Read";
    MapMode[MapMode["Write"] = 2] = "Write";
})(MapMode || (MapMode = {}));
var TextureDimension;
(function(TextureDimension) {
    TextureDimension["E1d"] = "1d";
    TextureDimension["E2d"] = "2d";
    TextureDimension["E3d"] = "3d";
})(TextureDimension || (TextureDimension = {}));
var TextureUsage;
(function(TextureUsage) {
    TextureUsage[TextureUsage["CopySrc"] = 1] = "CopySrc";
    TextureUsage[TextureUsage["CopyDst"] = 2] = "CopyDst";
    TextureUsage[TextureUsage["TextureBinding"] = 4] = "TextureBinding";
    TextureUsage[TextureUsage["StorageBinding"] = 8] = "StorageBinding";
    TextureUsage[TextureUsage["RenderAttachment"] = 16] = "RenderAttachment";
})(TextureUsage || (TextureUsage = {}));
var TextureViewDimension;
(function(TextureViewDimension) {
    TextureViewDimension["E1d"] = "1d";
    TextureViewDimension["E2d"] = "2d";
    TextureViewDimension["E2dArray"] = "2d-array";
    TextureViewDimension["Cube"] = "cube";
    TextureViewDimension["CubeArray"] = "cube-array";
    TextureViewDimension["E3d"] = "3d";
})(TextureViewDimension || (TextureViewDimension = {}));
var TextureAspect;
(function(TextureAspect) {
    TextureAspect["All"] = "all";
    TextureAspect["StencilOnly"] = "stencil-only";
    TextureAspect["DepthOnly"] = "depth-only";
})(TextureAspect || (TextureAspect = {}));
var TextureFormat;
(function(TextureFormat) {
    // 8-bit formats
    TextureFormat["R8Unorm"] = "r8unorm";
    TextureFormat["R8Snorm"] = "r8snorm";
    TextureFormat["R8Uint"] = "r8uint";
    TextureFormat["R8Sint"] = "r8sint";
    // 16-bit formats
    TextureFormat["R16Uint"] = "r16uint";
    TextureFormat["R16Sint"] = "r16sint";
    TextureFormat["R16Float"] = "r16float";
    TextureFormat["RG8Unorm"] = "rg8unorm";
    TextureFormat["RG8Snorm"] = "rg8snorm";
    TextureFormat["RG8Uint"] = "rg8uint";
    TextureFormat["RG8Sint"] = "rg8sint";
    TextureFormat["R16Unorm"] = "r16unorm";
    TextureFormat["R16Snorm"] = "r16snorm";
    // 32-bit formats
    TextureFormat["R32Uint"] = "r32uint";
    TextureFormat["R32Sint"] = "r32sint";
    TextureFormat["R32Float"] = "r32float";
    TextureFormat["RG16Uint"] = "rg16uint";
    TextureFormat["RG16Sint"] = "rg16sint";
    TextureFormat["RG16Float"] = "rg16float";
    TextureFormat["RGBA8Unorm"] = "rgba8unorm";
    TextureFormat["RGBA8UnormSRGB"] = "rgba8unorm-srgb";
    TextureFormat["RGBA8Snorm"] = "rgba8snorm";
    TextureFormat["RGBA8Uint"] = "rgba8uint";
    TextureFormat["RGBA8Sint"] = "rgba8sint";
    TextureFormat["BGRA8Unorm"] = "bgra8unorm";
    TextureFormat["BGRA8UnormSRGB"] = "bgra8unorm-srgb";
    TextureFormat["RG16Unorm"] = "rg16unorm";
    TextureFormat["RG16Snorm"] = "rg16snorm";
    // Packed 32-bit formats
    TextureFormat["RGB9E5UFloat"] = "rgb9e5ufloat";
    TextureFormat["RGB10A2UINT"] = "rgb10a2uint";
    TextureFormat["RGB10A2Unorm"] = "rgb10a2unorm";
    TextureFormat["RG11B10UFloat"] = "rg11b10ufloat";
    // 64-bit formats
    TextureFormat["RG32Uint"] = "rg32uint";
    TextureFormat["RG32Sint"] = "rg32sint";
    TextureFormat["RG32Float"] = "rg32float";
    TextureFormat["RGBA16Uint"] = "rgba16uint";
    TextureFormat["RGBA16Sint"] = "rgba16sint";
    TextureFormat["RGBA16Float"] = "rgba16float";
    TextureFormat["RGBA16Unorm"] = "rgba16unorm";
    TextureFormat["RGBA16Snorm"] = "rgba16snorm";
    // 128-bit formats
    TextureFormat["RGBA32Uint"] = "rgba32uint";
    TextureFormat["RGBA32Sint"] = "rgba32sint";
    TextureFormat["RGBA32Float"] = "rgba32float";
    // Depth and stencil formats
    TextureFormat["Stencil8"] = "stencil8";
    TextureFormat["Depth16Unorm"] = "depth16unorm";
    TextureFormat["Depth24Plus"] = "depth24plus";
    TextureFormat["Depth24PlusStencil8"] = "depth24plus-stencil8";
    TextureFormat["Depth32Float"] = "depth32float";
    // BC compressed formats usable if "texture-compression-bc" is both
    // supported by the device/user agent and enabled in requestDevice.
    TextureFormat["BC1RGBAUnorm"] = "bc1-rgba-unorm";
    TextureFormat["BC1RGBAUnormSRGB"] = "bc1-rgba-unorm-srgb";
    TextureFormat["BC2RGBAUnorm"] = "bc2-rgba-unorm";
    TextureFormat["BC2RGBAUnormSRGB"] = "bc2-rgba-unorm-srgb";
    TextureFormat["BC3RGBAUnorm"] = "bc3-rgba-unorm";
    TextureFormat["BC3RGBAUnormSRGB"] = "bc3-rgba-unorm-srgb";
    TextureFormat["BC4RUnorm"] = "bc4-r-unorm";
    TextureFormat["BC4RSnorm"] = "bc4-r-snorm";
    TextureFormat["BC5RGUnorm"] = "bc5-rg-unorm";
    TextureFormat["BC5RGSnorm"] = "bc5-rg-snorm";
    TextureFormat["BC6HRGBUFloat"] = "bc6h-rgb-ufloat";
    TextureFormat["BC6HRGBFloat"] = "bc6h-rgb-float";
    TextureFormat["BC7RGBAUnorm"] = "bc7-rgba-unorm";
    TextureFormat["BC7RGBAUnormSRGB"] = "bc7-rgba-unorm-srgb";
    // ETC2 compressed formats usable if "texture-compression-etc2" is both
    // supported by the device/user agent and enabled in requestDevice.
    TextureFormat["ETC2RGB8Unorm"] = "etc2-rgb8unorm";
    TextureFormat["ETC2RGB8UnormSRGB"] = "etc2-rgb8unorm-srgb";
    TextureFormat["ETC2RGB8A1Unorm"] = "etc2-rgb8a1unorm";
    TextureFormat["ETC2RGB8A1UnormSRGB"] = "etc2-rgb8a1unorm-srgb";
    TextureFormat["ETC2RGBA8Unorm"] = "etc2-rgba8unorm";
    TextureFormat["ETC2RGBA8UnormSRGB"] = "etc2-rgba8unorm-srgb";
    TextureFormat["EACR11Unorm"] = "eac-r11unorm";
    TextureFormat["EACR11Snorm"] = "eac-r11snorm";
    TextureFormat["EACRG11Unorm"] = "eac-rg11unorm";
    TextureFormat["EACRG11Snorm"] = "eac-rg11snorm";
    // ASTC compressed formats usable if "texture-compression-astc" is both
    // supported by the device/user agent and enabled in requestDevice.
    TextureFormat["ASTC4x4Unorm"] = "astc-4x4-unorm";
    TextureFormat["ASTC4x4UnormSRGB"] = "astc-4x4-unorm-srgb";
    TextureFormat["ASTC5x4Unorm"] = "astc-5x4-unorm";
    TextureFormat["ASTC5x4UnormSRGB"] = "astc-5x4-unorm-srgb";
    TextureFormat["ASTC5x5Unorm"] = "astc-5x5-unorm";
    TextureFormat["ASTC5x5UnormSRGB"] = "astc-5x5-unorm-srgb";
    TextureFormat["ASTC6x5Unorm"] = "astc-6x5-unorm";
    TextureFormat["ASTC6x5UnormSRGB"] = "astc-6x5-unorm-srgb";
    TextureFormat["ASTC6x6Unorm"] = "astc-6x6-unorm";
    TextureFormat["ASTC6x6UnormSRGB"] = "astc-6x6-unorm-srgb";
    TextureFormat["ASTC8x5Unorm"] = "astc-8x5-unorm";
    TextureFormat["ASTC8x5UnormSRGB"] = "astc-8x5-unorm-srgb";
    TextureFormat["ASTC8x6Unorm"] = "astc-8x6-unorm";
    TextureFormat["ASTC8x6UnormSRGB"] = "astc-8x6-unorm-srgb";
    TextureFormat["ASTC8x8Unorm"] = "astc-8x8-unorm";
    TextureFormat["ASTC8x8UnormSRGB"] = "astc-8x8-unorm-srgb";
    TextureFormat["ASTC10x5Unorm"] = "astc-10x5-unorm";
    TextureFormat["ASTC10x5UnormSRGB"] = "astc-10x5-unorm-srgb";
    TextureFormat["ASTC10x6Unorm"] = "astc-10x6-unorm";
    TextureFormat["ASTC10x6UnormSRGB"] = "astc-10x6-unorm-srgb";
    TextureFormat["ASTC10x8Unorm"] = "astc-10x8-unorm";
    TextureFormat["ASTC10x8UnormSRGB"] = "astc-10x8-unorm-srgb";
    TextureFormat["ASTC10x10Unorm"] = "astc-10x10-unorm";
    TextureFormat["ASTC10x10UnormSRGB"] = "astc-10x10-unorm-srgb";
    TextureFormat["ASTC12x10Unorm"] = "astc-12x10-unorm";
    TextureFormat["ASTC12x10UnormSRGB"] = "astc-12x10-unorm-srgb";
    TextureFormat["ASTC12x12Unorm"] = "astc-12x12-unorm";
    TextureFormat["ASTC12x12UnormSRGB"] = "astc-12x12-unorm-srgb";
    // "depth32float-stencil8" feature
    TextureFormat["Depth32FloatStencil8"] = "depth32float-stencil8";
})(TextureFormat || (TextureFormat = {}));
var AddressMode;
(function(AddressMode) {
    AddressMode["ClampToEdge"] = "clamp-to-edge";
    AddressMode["Repeat"] = "repeat";
    AddressMode["MirrorRepeat"] = "mirror-repeat";
})(AddressMode || (AddressMode = {}));
var FilterMode;
(function(FilterMode) {
    FilterMode["Nearest"] = "nearest";
    FilterMode["Linear"] = "linear";
})(FilterMode || (FilterMode = {}));
var MipmapFilterMode;
(function(MipmapFilterMode) {
    MipmapFilterMode["Nearest"] = "nearest";
    MipmapFilterMode["Linear"] = "linear";
})(MipmapFilterMode || (MipmapFilterMode = {}));
var CompareFunction;
(function(CompareFunction) {
    CompareFunction["Never"] = "never";
    CompareFunction["Less"] = "less";
    CompareFunction["Equal"] = "equal";
    CompareFunction["LessEqual"] = "less-equal";
    CompareFunction["Greater"] = "greater";
    CompareFunction["NotEqual"] = "not-equal";
    CompareFunction["GreaterEqual"] = "greater-equal";
    CompareFunction["Always"] = "always";
})(CompareFunction || (CompareFunction = {}));
var ShaderStage;
(function(ShaderStage) {
    ShaderStage[ShaderStage["Vertex"] = 1] = "Vertex";
    ShaderStage[ShaderStage["Fragment"] = 2] = "Fragment";
    ShaderStage[ShaderStage["Compute"] = 4] = "Compute";
})(ShaderStage || (ShaderStage = {}));
var BufferBindingType;
(function(BufferBindingType) {
    BufferBindingType["Uniform"] = "uniform";
    BufferBindingType["Storage"] = "storage";
    BufferBindingType["ReadOnlyStorage"] = "read-only-storage";
})(BufferBindingType || (BufferBindingType = {}));
var SamplerBindingType;
(function(SamplerBindingType) {
    SamplerBindingType["Filtering"] = "filtering";
    SamplerBindingType["NonFiltering"] = "non-filtering";
    SamplerBindingType["Comparison"] = "comparison";
})(SamplerBindingType || (SamplerBindingType = {}));
var TextureSampleType;
(function(TextureSampleType) {
    TextureSampleType["Float"] = "float";
    TextureSampleType["UnfilterableFloat"] = "unfilterable-float";
    TextureSampleType["Depth"] = "depth";
    TextureSampleType["Sint"] = "sint";
    TextureSampleType["Uint"] = "uint";
})(TextureSampleType || (TextureSampleType = {}));
var StorageTextureAccess;
(function(StorageTextureAccess) {
    StorageTextureAccess["WriteOnly"] = "write-only";
    StorageTextureAccess["ReadOnly"] = "read-only";
    StorageTextureAccess["ReadWrite"] = "read-write";
})(StorageTextureAccess || (StorageTextureAccess = {}));
var CompilationMessageType;
(function(CompilationMessageType) {
    CompilationMessageType["Error"] = "error";
    CompilationMessageType["Warning"] = "warning";
    CompilationMessageType["Info"] = "info";
})(CompilationMessageType || (CompilationMessageType = {}));
var PipelineErrorReason;
(function(PipelineErrorReason) {
    PipelineErrorReason["Validation"] = "validation";
    PipelineErrorReason["Internal"] = "internal";
})(PipelineErrorReason || (PipelineErrorReason = {}));
var AutoLayoutMode;
(function(AutoLayoutMode) {
    AutoLayoutMode["Auto"] = "auto";
})(AutoLayoutMode || (AutoLayoutMode = {}));
var PrimitiveTopology;
(function(PrimitiveTopology) {
    PrimitiveTopology["PointList"] = "point-list";
    PrimitiveTopology["LineList"] = "line-list";
    PrimitiveTopology["LineStrip"] = "line-strip";
    PrimitiveTopology["TriangleList"] = "triangle-list";
    PrimitiveTopology["TriangleStrip"] = "triangle-strip";
})(PrimitiveTopology || (PrimitiveTopology = {}));
var FrontFace;
(function(FrontFace) {
    FrontFace["CCW"] = "ccw";
    FrontFace["CW"] = "cw";
})(FrontFace || (FrontFace = {}));
var CullMode;
(function(CullMode) {
    CullMode["None"] = "none";
    CullMode["Front"] = "front";
    CullMode["Back"] = "back";
})(CullMode || (CullMode = {}));
var ColorWrite;
(function(ColorWrite) {
    ColorWrite[ColorWrite["Red"] = 1] = "Red";
    ColorWrite[ColorWrite["Green"] = 2] = "Green";
    ColorWrite[ColorWrite["Blue"] = 4] = "Blue";
    ColorWrite[ColorWrite["Alpha"] = 8] = "Alpha";
    ColorWrite[ColorWrite["All"] = 15] = "All";
})(ColorWrite || (ColorWrite = {}));
var BlendFactor;
(function(BlendFactor) {
    BlendFactor["Zero"] = "zero";
    BlendFactor["One"] = "one";
    BlendFactor["Src"] = "src";
    BlendFactor["OneMinusSrc"] = "one-minus-src";
    BlendFactor["SrcAlpha"] = "src-alpha";
    BlendFactor["OneMinusSrcAlpha"] = "one-minus-src-alpha";
    BlendFactor["Dst"] = "dst";
    BlendFactor["OneMinusDst"] = "one-minus-dst";
    BlendFactor["DstAlpha"] = "dst-alpha";
    BlendFactor["OneMinusDstAlpha"] = "one-minus-dst-alpha";
    BlendFactor["SrcAlphaSaturated"] = "src-alpha-saturated";
    BlendFactor["Constant"] = "constant";
    BlendFactor["OneMinusConstant"] = "one-minus-constant";
    BlendFactor["Src1"] = "src1";
    BlendFactor["OneMinusSrc1"] = "one-minus-src1";
    BlendFactor["Src1Alpha"] = "src1-alpha";
    BlendFactor["OneMinusSrc1Alpha"] = "one-minus-src1-alpha";
})(BlendFactor || (BlendFactor = {}));
var BlendOperation;
(function(BlendOperation) {
    BlendOperation["Add"] = "add";
    BlendOperation["Subtract"] = "subtract";
    BlendOperation["ReverseSubtract"] = "reverse-subtract";
    BlendOperation["Min"] = "min";
    BlendOperation["Max"] = "max";
})(BlendOperation || (BlendOperation = {}));
var StencilOperation;
(function(StencilOperation) {
    StencilOperation["Keep"] = "keep";
    StencilOperation["Zero"] = "zero";
    StencilOperation["Replace"] = "replace";
    StencilOperation["Invert"] = "invert";
    StencilOperation["IncrementClamp"] = "increment-clamp";
    StencilOperation["DecrementClamp"] = "decrement-clamp";
    StencilOperation["IncrementWrap"] = "increment-wrap";
    StencilOperation["DecrementWrap"] = "decrement-wrap";
})(StencilOperation || (StencilOperation = {}));
var IndexFormat;
(function(IndexFormat) {
    IndexFormat["Uint16"] = "uint16";
    IndexFormat["Uint32"] = "uint32";
})(IndexFormat || (IndexFormat = {}));
var VertexFormat;
(function(VertexFormat) {
    VertexFormat["Uint8"] = "uint8";
    VertexFormat["Uint8x2"] = "uint8x2";
    VertexFormat["Uint8x4"] = "uint8x4";
    VertexFormat["Sint8"] = "sint8";
    VertexFormat["Sint8x2"] = "sint8x2";
    VertexFormat["Sint8x4"] = "sint8x4";
    VertexFormat["Unorm8"] = "unorm8";
    VertexFormat["Unorm8x2"] = "unorm8x2";
    VertexFormat["Unorm8x4"] = "unorm8x4";
    VertexFormat["Snorm8"] = "snorm8";
    VertexFormat["Snorm8x2"] = "snorm8x2";
    VertexFormat["Snorm8x4"] = "snorm8x4";
    VertexFormat["Uint16"] = "uint16";
    VertexFormat["Uint16x2"] = "uint16x2";
    VertexFormat["Uint16x4"] = "uint16x4";
    VertexFormat["Sint16"] = "sint16";
    VertexFormat["Sint16x2"] = "sint16x2";
    VertexFormat["Sint16x4"] = "sint16x4";
    VertexFormat["Unorm16"] = "unorm16";
    VertexFormat["Unorm16x2"] = "unorm16x2";
    VertexFormat["Unorm16x4"] = "unorm16x4";
    VertexFormat["Snorm16"] = "snorm16";
    VertexFormat["Snorm16x2"] = "snorm16x2";
    VertexFormat["Snorm16x4"] = "snorm16x4";
    VertexFormat["Float16"] = "float16";
    VertexFormat["Float16x2"] = "float16x2";
    VertexFormat["Float16x4"] = "float16x4";
    VertexFormat["Float32"] = "float32";
    VertexFormat["Float32x2"] = "float32x2";
    VertexFormat["Float32x3"] = "float32x3";
    VertexFormat["Float32x4"] = "float32x4";
    VertexFormat["Uint32"] = "uint32";
    VertexFormat["Uint32x2"] = "uint32x2";
    VertexFormat["Uint32x3"] = "uint32x3";
    VertexFormat["Uint32x4"] = "uint32x4";
    VertexFormat["Sint32"] = "sint32";
    VertexFormat["Sint32x2"] = "sint32x2";
    VertexFormat["Sint32x3"] = "sint32x3";
    VertexFormat["Sint32x4"] = "sint32x4";
    VertexFormat["UNORM10x10x10x2"] = "unorm10-10-10-2";
    VertexFormat["UNORM8x4BGRA"] = "unorm8x4-bgra";
})(VertexFormat || (VertexFormat = {}));
var VertexStepMode;
(function(VertexStepMode) {
    VertexStepMode["Vertex"] = "vertex";
    VertexStepMode["Instance"] = "instance";
})(VertexStepMode || (VertexStepMode = {}));
var ComputePassTimestampLocation;
(function(ComputePassTimestampLocation) {
    ComputePassTimestampLocation["Beginning"] = "beginning";
    ComputePassTimestampLocation["End"] = "end";
})(ComputePassTimestampLocation || (ComputePassTimestampLocation = {}));
var RenderPassTimestampLocation;
(function(RenderPassTimestampLocation) {
    RenderPassTimestampLocation["Beginning"] = "beginning";
    RenderPassTimestampLocation["End"] = "end";
})(RenderPassTimestampLocation || (RenderPassTimestampLocation = {}));
var LoadOp;
(function(LoadOp) {
    LoadOp["Load"] = "load";
    LoadOp["Clear"] = "clear";
})(LoadOp || (LoadOp = {}));
var StoreOp;
(function(StoreOp) {
    StoreOp["Store"] = "store";
    StoreOp["Discard"] = "discard";
})(StoreOp || (StoreOp = {}));
var QueryType;
(function(QueryType) {
    QueryType["Occlusion"] = "occlusion";
    QueryType["Timestamp"] = "timestamp";
})(QueryType || (QueryType = {}));
var CanvasAlphaMode;
(function(CanvasAlphaMode) {
    CanvasAlphaMode["Opaque"] = "opaque";
    CanvasAlphaMode["Premultiplied"] = "premultiplied";
})(CanvasAlphaMode || (CanvasAlphaMode = {}));
var CanvasToneMappingMode;
(function(CanvasToneMappingMode) {
    CanvasToneMappingMode["Standard"] = "standard";
    CanvasToneMappingMode["Extended"] = "extended";
})(CanvasToneMappingMode || (CanvasToneMappingMode = {}));
var DeviceLostReason;
(function(DeviceLostReason) {
    DeviceLostReason["Unknown"] = "unknown";
    DeviceLostReason["Destroyed"] = "destroyed";
})(DeviceLostReason || (DeviceLostReason = {}));
var ErrorFilter;
(function(ErrorFilter) {
    ErrorFilter["Validation"] = "validation";
    ErrorFilter["OutOfMemory"] = "out-of-memory";
    ErrorFilter["Internal"] = "internal";
})(ErrorFilter || (ErrorFilter = {})); //# sourceMappingURL=webgpuConstants.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/webgpuShaderProcessor.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** @internal */ __turbopack_context__.s([
    "WebGPUShaderProcessor",
    ()=>WebGPUShaderProcessor
]);
class WebGPUShaderProcessor {
    constructor(){
        this.shaderLanguage = 0 /* ShaderLanguage.GLSL */ ;
    }
    _addUniformToLeftOverUBO(name, uniformType, preProcessors) {
        let length = 0;
        [name, uniformType, length] = this._getArraySize(name, uniformType, preProcessors);
        for(let i = 0; i < this._webgpuProcessingContext.leftOverUniforms.length; i++){
            if (this._webgpuProcessingContext.leftOverUniforms[i].name === name) {
                return;
            }
        }
        this._webgpuProcessingContext.leftOverUniforms.push({
            name,
            type: uniformType,
            length
        });
    }
    _buildLeftOverUBO() {
        if (!this._webgpuProcessingContext.leftOverUniforms.length) {
            return "";
        }
        const name = WebGPUShaderProcessor.LeftOvertUBOName;
        let availableUBO = this._webgpuProcessingContext.availableBuffers[name];
        if (!availableUBO) {
            availableUBO = {
                binding: this._webgpuProcessingContext.getNextFreeUBOBinding()
            };
            this._webgpuProcessingContext.availableBuffers[name] = availableUBO;
            this._addBufferBindingDescription(name, availableUBO, "uniform" /* WebGPUConstants.BufferBindingType.Uniform */ , true);
            this._addBufferBindingDescription(name, availableUBO, "uniform" /* WebGPUConstants.BufferBindingType.Uniform */ , false);
        }
        return this._generateLeftOverUBOCode(name, availableUBO);
    }
    _collectBindingNames() {
        // collect all the binding names for faster processing in WebGPUCacheBindGroup
        for(let i = 0; i < this._webgpuProcessingContext.bindGroupLayoutEntries.length; i++){
            const setDefinition = this._webgpuProcessingContext.bindGroupLayoutEntries[i];
            if (setDefinition === undefined) {
                this._webgpuProcessingContext.bindGroupLayoutEntries[i] = [];
                continue;
            }
            for(let j = 0; j < setDefinition.length; j++){
                const entry = this._webgpuProcessingContext.bindGroupLayoutEntries[i][j];
                const name = this._webgpuProcessingContext.bindGroupLayoutEntryInfo[i][entry.binding].name;
                const nameInArrayOfTexture = this._webgpuProcessingContext.bindGroupLayoutEntryInfo[i][entry.binding].nameInArrayOfTexture;
                if (entry) {
                    if (entry.texture || entry.externalTexture || entry.storageTexture) {
                        this._webgpuProcessingContext.textureNames.push(nameInArrayOfTexture);
                    } else if (entry.sampler) {
                        this._webgpuProcessingContext.samplerNames.push(name);
                    } else if (entry.buffer) {
                        this._webgpuProcessingContext.bufferNames.push(name);
                    }
                }
            }
        }
    }
    _preCreateBindGroupEntries() {
        const bindGroupEntries = this._webgpuProcessingContext.bindGroupEntries;
        for(let i = 0; i < this._webgpuProcessingContext.bindGroupLayoutEntries.length; i++){
            const setDefinition = this._webgpuProcessingContext.bindGroupLayoutEntries[i];
            const entries = [];
            for(let j = 0; j < setDefinition.length; j++){
                const entry = this._webgpuProcessingContext.bindGroupLayoutEntries[i][j];
                if (entry.sampler || entry.texture || entry.storageTexture || entry.externalTexture) {
                    entries.push({
                        binding: entry.binding,
                        resource: undefined
                    });
                } else if (entry.buffer) {
                    entries.push({
                        binding: entry.binding,
                        resource: {
                            buffer: undefined,
                            offset: 0,
                            size: 0
                        }
                    });
                }
            }
            bindGroupEntries[i] = entries;
        }
    }
    _addTextureBindingDescription(name, textureInfo, textureIndex, dimension, format, isVertex) {
        // eslint-disable-next-line prefer-const
        let { groupIndex, bindingIndex } = textureInfo.textures[textureIndex];
        if (!this._webgpuProcessingContext.bindGroupLayoutEntries[groupIndex]) {
            this._webgpuProcessingContext.bindGroupLayoutEntries[groupIndex] = [];
            this._webgpuProcessingContext.bindGroupLayoutEntryInfo[groupIndex] = [];
        }
        if (!this._webgpuProcessingContext.bindGroupLayoutEntryInfo[groupIndex][bindingIndex]) {
            let len;
            if (dimension === null) {
                len = this._webgpuProcessingContext.bindGroupLayoutEntries[groupIndex].push({
                    binding: bindingIndex,
                    visibility: 0,
                    externalTexture: {}
                });
            } else if (format) {
                len = this._webgpuProcessingContext.bindGroupLayoutEntries[groupIndex].push({
                    binding: bindingIndex,
                    visibility: 0,
                    storageTexture: {
                        access: "write-only" /* WebGPUConstants.StorageTextureAccess.WriteOnly */ ,
                        format,
                        viewDimension: dimension
                    }
                });
            } else {
                len = this._webgpuProcessingContext.bindGroupLayoutEntries[groupIndex].push({
                    binding: bindingIndex,
                    visibility: 0,
                    texture: {
                        sampleType: textureInfo.sampleType,
                        viewDimension: dimension,
                        multisampled: false
                    }
                });
            }
            const textureName = textureInfo.isTextureArray ? name + textureIndex : name;
            this._webgpuProcessingContext.bindGroupLayoutEntryInfo[groupIndex][bindingIndex] = {
                name,
                index: len - 1,
                nameInArrayOfTexture: textureName
            };
        }
        bindingIndex = this._webgpuProcessingContext.bindGroupLayoutEntryInfo[groupIndex][bindingIndex].index;
        if (isVertex) {
            this._webgpuProcessingContext.bindGroupLayoutEntries[groupIndex][bindingIndex].visibility |= 1 /* WebGPUConstants.ShaderStage.Vertex */ ;
        } else {
            this._webgpuProcessingContext.bindGroupLayoutEntries[groupIndex][bindingIndex].visibility |= 2 /* WebGPUConstants.ShaderStage.Fragment */ ;
        }
    }
    _addSamplerBindingDescription(name, samplerInfo, isVertex) {
        // eslint-disable-next-line prefer-const
        let { groupIndex, bindingIndex } = samplerInfo.binding;
        if (!this._webgpuProcessingContext.bindGroupLayoutEntries[groupIndex]) {
            this._webgpuProcessingContext.bindGroupLayoutEntries[groupIndex] = [];
            this._webgpuProcessingContext.bindGroupLayoutEntryInfo[groupIndex] = [];
        }
        if (!this._webgpuProcessingContext.bindGroupLayoutEntryInfo[groupIndex][bindingIndex]) {
            const len = this._webgpuProcessingContext.bindGroupLayoutEntries[groupIndex].push({
                binding: bindingIndex,
                visibility: 0,
                sampler: {
                    type: samplerInfo.type
                }
            });
            this._webgpuProcessingContext.bindGroupLayoutEntryInfo[groupIndex][bindingIndex] = {
                name,
                index: len - 1
            };
        }
        bindingIndex = this._webgpuProcessingContext.bindGroupLayoutEntryInfo[groupIndex][bindingIndex].index;
        if (isVertex) {
            this._webgpuProcessingContext.bindGroupLayoutEntries[groupIndex][bindingIndex].visibility |= 1 /* WebGPUConstants.ShaderStage.Vertex */ ;
        } else {
            this._webgpuProcessingContext.bindGroupLayoutEntries[groupIndex][bindingIndex].visibility |= 2 /* WebGPUConstants.ShaderStage.Fragment */ ;
        }
    }
    _addBufferBindingDescription(name, uniformBufferInfo, bufferType, isVertex) {
        // eslint-disable-next-line prefer-const
        let { groupIndex, bindingIndex } = uniformBufferInfo.binding;
        if (!this._webgpuProcessingContext.bindGroupLayoutEntries[groupIndex]) {
            this._webgpuProcessingContext.bindGroupLayoutEntries[groupIndex] = [];
            this._webgpuProcessingContext.bindGroupLayoutEntryInfo[groupIndex] = [];
        }
        if (!this._webgpuProcessingContext.bindGroupLayoutEntryInfo[groupIndex][bindingIndex]) {
            const len = this._webgpuProcessingContext.bindGroupLayoutEntries[groupIndex].push({
                binding: bindingIndex,
                visibility: 0,
                buffer: {
                    type: bufferType
                }
            });
            this._webgpuProcessingContext.bindGroupLayoutEntryInfo[groupIndex][bindingIndex] = {
                name,
                index: len - 1
            };
        }
        bindingIndex = this._webgpuProcessingContext.bindGroupLayoutEntryInfo[groupIndex][bindingIndex].index;
        if (isVertex) {
            this._webgpuProcessingContext.bindGroupLayoutEntries[groupIndex][bindingIndex].visibility |= 1 /* WebGPUConstants.ShaderStage.Vertex */ ;
        } else {
            this._webgpuProcessingContext.bindGroupLayoutEntries[groupIndex][bindingIndex].visibility |= 2 /* WebGPUConstants.ShaderStage.Fragment */ ;
        }
    }
}
WebGPUShaderProcessor.LeftOvertUBOName = "LeftOver";
WebGPUShaderProcessor.InternalsUBOName = "Internals";
WebGPUShaderProcessor.UniformSizes = {
    // GLSL types
    bool: 1,
    int: 1,
    float: 1,
    vec2: 2,
    ivec2: 2,
    uvec2: 2,
    vec3: 3,
    ivec3: 3,
    uvec3: 3,
    vec4: 4,
    ivec4: 4,
    uvec4: 4,
    mat2: 4,
    mat3: 12,
    mat4: 16,
    // WGSL types
    i32: 1,
    u32: 1,
    f32: 1,
    mat2x2: 4,
    mat3x3: 12,
    mat4x4: 16,
    mat2x2f: 4,
    mat3x3f: 12,
    mat4x4f: 16,
    vec2i: 2,
    vec3i: 3,
    vec4i: 4,
    vec2u: 2,
    vec3u: 3,
    vec4u: 4,
    vec2f: 2,
    vec3f: 3,
    vec4f: 4,
    vec2h: 1,
    vec3h: 2,
    vec4h: 2
};
// eslint-disable-next-line @typescript-eslint/naming-convention
WebGPUShaderProcessor._SamplerFunctionByWebGLSamplerType = {
    sampler2D: "sampler2D",
    sampler2DArray: "sampler2DArray",
    sampler2DShadow: "sampler2DShadow",
    sampler2DArrayShadow: "sampler2DArrayShadow",
    samplerCube: "samplerCube",
    sampler3D: "sampler3D"
};
// eslint-disable-next-line @typescript-eslint/naming-convention
WebGPUShaderProcessor._TextureTypeByWebGLSamplerType = {
    sampler2D: "texture2D",
    sampler2DArray: "texture2DArray",
    sampler2DShadow: "texture2D",
    sampler2DArrayShadow: "texture2DArray",
    samplerCube: "textureCube",
    samplerCubeArray: "textureCubeArray",
    sampler3D: "texture3D"
};
// eslint-disable-next-line @typescript-eslint/naming-convention
WebGPUShaderProcessor._GpuTextureViewDimensionByWebGPUTextureType = {
    textureCube: "cube" /* WebGPUConstants.TextureViewDimension.Cube */ ,
    textureCubeArray: "cube-array" /* WebGPUConstants.TextureViewDimension.CubeArray */ ,
    texture2D: "2d" /* WebGPUConstants.TextureViewDimension.E2d */ ,
    texture2DArray: "2d-array" /* WebGPUConstants.TextureViewDimension.E2dArray */ ,
    texture3D: "3d" /* WebGPUConstants.TextureViewDimension.E3d */ 
};
// if the webgl sampler type is not listed in this array, "sampler" is taken by default
// eslint-disable-next-line @typescript-eslint/naming-convention
WebGPUShaderProcessor._SamplerTypeByWebGLSamplerType = {
    sampler2DShadow: "samplerShadow",
    sampler2DArrayShadow: "samplerShadow"
};
// eslint-disable-next-line @typescript-eslint/naming-convention
WebGPUShaderProcessor._IsComparisonSamplerByWebGPUSamplerType = {
    samplerShadow: true,
    samplerArrayShadow: true,
    sampler: false
}; //# sourceMappingURL=webgpuShaderProcessor.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/webgpuPipelineContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WebGPUPipelineContext",
    ()=>WebGPUPipelineContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$uniformBuffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/uniformBuffer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuShaderProcessor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/webgpuShaderProcessor.js [app-client] (ecmascript)");
;
;
class WebGPUPipelineContext {
    // eslint-disable-next-line no-restricted-syntax
    get isAsync() {
        return false;
    }
    get isReady() {
        if (this.stages) {
            return true;
        }
        return false;
    }
    constructor(shaderProcessingContext, engine){
        // The field is indexed by textureState. See @WebGPUMaterialContext.textureState for more information.
        this.bindGroupLayouts = {};
        this._name = "unnamed";
        this.shaderProcessingContext = shaderProcessingContext;
        this._leftOverUniformsByName = {};
        this.engine = engine;
        this.vertexBufferKindToType = {};
    }
    _handlesSpectorRebuildCallback() {
    // Nothing to do yet for spector.
    }
    _fillEffectInformation(effect, uniformBuffersNames, uniformsNames, uniforms, samplerList, samplers, attributesNames, attributes) {
        const engine = this.engine;
        if (engine._doNotHandleContextLost) {
            effect._fragmentSourceCode = "";
            effect._vertexSourceCode = "";
        }
        const foundSamplers = this.shaderProcessingContext.availableTextures;
        let index;
        for(index = 0; index < samplerList.length; index++){
            const name = samplerList[index];
            const sampler = foundSamplers[samplerList[index]];
            if (sampler == null || sampler == undefined) {
                samplerList.splice(index, 1);
                index--;
            } else {
                samplers[name] = index;
            }
        }
        for (const attr of engine.getAttributes(this, attributesNames)){
            attributes.push(attr);
        }
        // Build the uniform layout for the left over uniforms.
        this.buildUniformLayout();
        const attributeNamesFromEffect = [];
        const attributeLocationsFromEffect = [];
        for(index = 0; index < attributesNames.length; index++){
            const location = attributes[index];
            if (location >= 0) {
                attributeNamesFromEffect.push(attributesNames[index]);
                attributeLocationsFromEffect.push(location);
            }
        }
        this.shaderProcessingContext.attributeNamesFromEffect = attributeNamesFromEffect;
        this.shaderProcessingContext.attributeLocationsFromEffect = attributeLocationsFromEffect;
    }
    /** @internal */ /**
     * Build the uniform buffer used in the material.
     */ buildUniformLayout() {
        if (!this.shaderProcessingContext.leftOverUniforms.length) {
            return;
        }
        this.uniformBuffer?.dispose();
        this.uniformBuffer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$uniformBuffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UniformBuffer"](this.engine, undefined, undefined, "leftOver-" + this._name);
        for (const leftOverUniform of this.shaderProcessingContext.leftOverUniforms){
            const type = leftOverUniform.type.replace(/^(.*?)(<.*>)?$/, "$1");
            const size = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuShaderProcessor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGPUShaderProcessor"].UniformSizes[type];
            this.uniformBuffer.addUniform(leftOverUniform.name, size, leftOverUniform.length);
            this._leftOverUniformsByName[leftOverUniform.name] = leftOverUniform.type;
        }
        this.uniformBuffer.create();
    }
    setEngine(engine) {
        this.engine = engine;
    }
    /**
     * Release all associated resources.
     **/ dispose() {
        if (this.uniformBuffer) {
            this.uniformBuffer.dispose();
        }
    }
    /**
     * Sets an integer value on a uniform variable.
     * @param uniformName Name of the variable.
     * @param value Value to be set.
     */ setInt(uniformName, value) {
        if (!this.uniformBuffer || !this._leftOverUniformsByName[uniformName]) {
            return;
        }
        this.uniformBuffer.updateInt(uniformName, value);
    }
    /**
     * Sets an int2 value on a uniform variable.
     * @param uniformName Name of the variable.
     * @param x First int in int2.
     * @param y Second int in int2.
     */ setInt2(uniformName, x, y) {
        if (!this.uniformBuffer || !this._leftOverUniformsByName[uniformName]) {
            return;
        }
        this.uniformBuffer.updateInt2(uniformName, x, y);
    }
    /**
     * Sets an int3 value on a uniform variable.
     * @param uniformName Name of the variable.
     * @param x First int in int3.
     * @param y Second int in int3.
     * @param z Third int in int3.
     */ setInt3(uniformName, x, y, z) {
        if (!this.uniformBuffer || !this._leftOverUniformsByName[uniformName]) {
            return;
        }
        this.uniformBuffer.updateInt3(uniformName, x, y, z);
    }
    /**
     * Sets an int4 value on a uniform variable.
     * @param uniformName Name of the variable.
     * @param x First int in int4.
     * @param y Second int in int4.
     * @param z Third int in int4.
     * @param w Fourth int in int4.
     */ setInt4(uniformName, x, y, z, w) {
        if (!this.uniformBuffer || !this._leftOverUniformsByName[uniformName]) {
            return;
        }
        this.uniformBuffer.updateInt4(uniformName, x, y, z, w);
    }
    /**
     * Sets an int array on a uniform variable.
     * @param uniformName Name of the variable.
     * @param array array to be set.
     */ setIntArray(uniformName, array) {
        if (!this.uniformBuffer || !this._leftOverUniformsByName[uniformName]) {
            return;
        }
        this.uniformBuffer.updateIntArray(uniformName, array);
    }
    /**
     * Sets an int array 2 on a uniform variable. (Array is specified as single array eg. [1,2,3,4] will result in [[1,2],[3,4]] in the shader)
     * @param uniformName Name of the variable.
     * @param array array to be set.
     */ setIntArray2(uniformName, array) {
        this.setIntArray(uniformName, array);
    }
    /**
     * Sets an int array 3 on a uniform variable. (Array is specified as single array eg. [1,2,3,4,5,6] will result in [[1,2,3],[4,5,6]] in the shader)
     * @param uniformName Name of the variable.
     * @param array array to be set.
     */ setIntArray3(uniformName, array) {
        this.setIntArray(uniformName, array);
    }
    /**
     * Sets an int array 4 on a uniform variable. (Array is specified as single array eg. [1,2,3,4,5,6,7,8] will result in [[1,2,3,4],[5,6,7,8]] in the shader)
     * @param uniformName Name of the variable.
     * @param array array to be set.
     */ setIntArray4(uniformName, array) {
        this.setIntArray(uniformName, array);
    }
    /**
     * Sets an unsigned integer value on a uniform variable.
     * @param uniformName Name of the variable.
     * @param value Value to be set.
     */ setUInt(uniformName, value) {
        if (!this.uniformBuffer || !this._leftOverUniformsByName[uniformName]) {
            return;
        }
        this.uniformBuffer.updateUInt(uniformName, value);
    }
    /**
     * Sets an unsigned int2 value on a uniform variable.
     * @param uniformName Name of the variable.
     * @param x First unsigned int in uint2.
     * @param y Second unsigned int in uint2.
     */ setUInt2(uniformName, x, y) {
        if (!this.uniformBuffer || !this._leftOverUniformsByName[uniformName]) {
            return;
        }
        this.uniformBuffer.updateUInt2(uniformName, x, y);
    }
    /**
     * Sets an unsigned int3 value on a uniform variable.
     * @param uniformName Name of the variable.
     * @param x First unsigned int in uint3.
     * @param y Second unsigned int in uint3.
     * @param z Third unsigned int in uint3.
     */ setUInt3(uniformName, x, y, z) {
        if (!this.uniformBuffer || !this._leftOverUniformsByName[uniformName]) {
            return;
        }
        this.uniformBuffer.updateUInt3(uniformName, x, y, z);
    }
    /**
     * Sets an unsigned int4 value on a uniform variable.
     * @param uniformName Name of the variable.
     * @param x First unsigned int in uint4.
     * @param y Second unsigned int in uint4.
     * @param z Third unsigned int in uint4.
     * @param w Fourth unsigned int in uint4.
     */ setUInt4(uniformName, x, y, z, w) {
        if (!this.uniformBuffer || !this._leftOverUniformsByName[uniformName]) {
            return;
        }
        this.uniformBuffer.updateUInt4(uniformName, x, y, z, w);
    }
    /**
     * Sets an unsigned int array on a uniform variable.
     * @param uniformName Name of the variable.
     * @param array array to be set.
     */ setUIntArray(uniformName, array) {
        if (!this.uniformBuffer || !this._leftOverUniformsByName[uniformName]) {
            return;
        }
        this.uniformBuffer.updateUIntArray(uniformName, array);
    }
    /**
     * Sets an unsigned int array 2 on a uniform variable. (Array is specified as single array eg. [1,2,3,4] will result in [[1,2],[3,4]] in the shader)
     * @param uniformName Name of the variable.
     * @param array array to be set.
     */ setUIntArray2(uniformName, array) {
        this.setUIntArray(uniformName, array);
    }
    /**
     * Sets an unsigned int array 3 on a uniform variable. (Array is specified as single array eg. [1,2,3,4,5,6] will result in [[1,2,3],[4,5,6]] in the shader)
     * @param uniformName Name of the variable.
     * @param array array to be set.
     */ setUIntArray3(uniformName, array) {
        this.setUIntArray(uniformName, array);
    }
    /**
     * Sets an unsigned int array 4 on a uniform variable. (Array is specified as single array eg. [1,2,3,4,5,6,7,8] will result in [[1,2,3,4],[5,6,7,8]] in the shader)
     * @param uniformName Name of the variable.
     * @param array array to be set.
     */ setUIntArray4(uniformName, array) {
        this.setUIntArray(uniformName, array);
    }
    /**
     * Sets an array on a uniform variable.
     * @param uniformName Name of the variable.
     * @param array array to be set.
     */ setArray(uniformName, array) {
        if (!this.uniformBuffer || !this._leftOverUniformsByName[uniformName]) {
            return;
        }
        this.uniformBuffer.updateArray(uniformName, array);
    }
    /**
     * Sets an array 2 on a uniform variable. (Array is specified as single array eg. [1,2,3,4] will result in [[1,2],[3,4]] in the shader)
     * @param uniformName Name of the variable.
     * @param array array to be set.
     */ setArray2(uniformName, array) {
        this.setArray(uniformName, array);
    }
    /**
     * Sets an array 3 on a uniform variable. (Array is specified as single array eg. [1,2,3,4,5,6] will result in [[1,2,3],[4,5,6]] in the shader)
     * @param uniformName Name of the variable.
     * @param array array to be set.
     */ setArray3(uniformName, array) {
        this.setArray(uniformName, array);
    }
    /**
     * Sets an array 4 on a uniform variable. (Array is specified as single array eg. [1,2,3,4,5,6,7,8] will result in [[1,2,3,4],[5,6,7,8]] in the shader)
     * @param uniformName Name of the variable.
     * @param array array to be set.
     */ setArray4(uniformName, array) {
        this.setArray(uniformName, array);
    }
    /**
     * Sets matrices on a uniform variable.
     * @param uniformName Name of the variable.
     * @param matrices matrices to be set.
     */ setMatrices(uniformName, matrices) {
        if (!this.uniformBuffer || !this._leftOverUniformsByName[uniformName]) {
            return;
        }
        this.uniformBuffer.updateMatrices(uniformName, matrices);
    }
    /**
     * Sets matrix on a uniform variable.
     * @param uniformName Name of the variable.
     * @param matrix matrix to be set.
     */ setMatrix(uniformName, matrix) {
        if (!this.uniformBuffer || !this._leftOverUniformsByName[uniformName]) {
            return;
        }
        this.uniformBuffer.updateMatrix(uniformName, matrix);
    }
    /**
     * Sets a 3x3 matrix on a uniform variable. (Specified as [1,2,3,4,5,6,7,8,9] will result in [1,2,3][4,5,6][7,8,9] matrix)
     * @param uniformName Name of the variable.
     * @param matrix matrix to be set.
     */ setMatrix3x3(uniformName, matrix) {
        if (!this.uniformBuffer || !this._leftOverUniformsByName[uniformName]) {
            return;
        }
        this.uniformBuffer.updateMatrix3x3(uniformName, matrix);
    }
    /**
     * Sets a 2x2 matrix on a uniform variable. (Specified as [1,2,3,4] will result in [1,2][3,4] matrix)
     * @param uniformName Name of the variable.
     * @param matrix matrix to be set.
     */ setMatrix2x2(uniformName, matrix) {
        if (!this.uniformBuffer || !this._leftOverUniformsByName[uniformName]) {
            return;
        }
        this.uniformBuffer.updateMatrix2x2(uniformName, matrix);
    }
    /**
     * Sets a float on a uniform variable.
     * @param uniformName Name of the variable.
     * @param value value to be set.
     */ setFloat(uniformName, value) {
        if (!this.uniformBuffer || !this._leftOverUniformsByName[uniformName]) {
            return;
        }
        this.uniformBuffer.updateFloat(uniformName, value);
    }
    /**
     * Sets a Vector2 on a uniform variable.
     * @param uniformName Name of the variable.
     * @param vector2 vector2 to be set.
     */ setVector2(uniformName, vector2) {
        this.setFloat2(uniformName, vector2.x, vector2.y);
    }
    /**
     * Sets a float2 on a uniform variable.
     * @param uniformName Name of the variable.
     * @param x First float in float2.
     * @param y Second float in float2.
     */ setFloat2(uniformName, x, y) {
        if (!this.uniformBuffer || !this._leftOverUniformsByName[uniformName]) {
            return;
        }
        this.uniformBuffer.updateFloat2(uniformName, x, y);
    }
    /**
     * Sets a Vector3 on a uniform variable.
     * @param uniformName Name of the variable.
     * @param vector3 Value to be set.
     */ setVector3(uniformName, vector3) {
        this.setFloat3(uniformName, vector3.x, vector3.y, vector3.z);
    }
    /**
     * Sets a float3 on a uniform variable.
     * @param uniformName Name of the variable.
     * @param x First float in float3.
     * @param y Second float in float3.
     * @param z Third float in float3.
     */ setFloat3(uniformName, x, y, z) {
        if (!this.uniformBuffer || !this._leftOverUniformsByName[uniformName]) {
            return;
        }
        this.uniformBuffer.updateFloat3(uniformName, x, y, z);
    }
    /**
     * Sets a Vector4 on a uniform variable.
     * @param uniformName Name of the variable.
     * @param vector4 Value to be set.
     */ setVector4(uniformName, vector4) {
        this.setFloat4(uniformName, vector4.x, vector4.y, vector4.z, vector4.w);
    }
    /**
     * Sets a Quaternion on a uniform variable.
     * @param uniformName Name of the variable.
     * @param quaternion Value to be set.
     */ setQuaternion(uniformName, quaternion) {
        this.setFloat4(uniformName, quaternion.x, quaternion.y, quaternion.z, quaternion.w);
    }
    /**
     * Sets a float4 on a uniform variable.
     * @param uniformName Name of the variable.
     * @param x First float in float4.
     * @param y Second float in float4.
     * @param z Third float in float4.
     * @param w Fourth float in float4.
     */ setFloat4(uniformName, x, y, z, w) {
        if (!this.uniformBuffer || !this._leftOverUniformsByName[uniformName]) {
            return;
        }
        this.uniformBuffer.updateFloat4(uniformName, x, y, z, w);
    }
    /**
     * Sets a Color3 on a uniform variable.
     * @param uniformName Name of the variable.
     * @param color3 Value to be set.
     */ setColor3(uniformName, color3) {
        this.setFloat3(uniformName, color3.r, color3.g, color3.b);
    }
    /**
     * Sets a Color4 on a uniform variable.
     * @param uniformName Name of the variable.
     * @param color3 Value to be set.
     * @param alpha Alpha value to be set.
     */ setColor4(uniformName, color3, alpha) {
        this.setFloat4(uniformName, color3.r, color3.g, color3.b, alpha);
    }
    /**
     * Sets a Color4 on a uniform variable
     * @param uniformName defines the name of the variable
     * @param color4 defines the value to be set
     */ setDirectColor4(uniformName, color4) {
        this.setFloat4(uniformName, color4.r, color4.g, color4.b, color4.a);
    }
    _getVertexShaderCode() {
        return this.sources?.vertex;
    }
    _getFragmentShaderCode() {
        return this.sources?.fragment;
    }
} //# sourceMappingURL=webgpuPipelineContext.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/webgpuShaderProcessingContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WebGPUShaderProcessingContext",
    ()=>WebGPUShaderProcessingContext
]);
const MaxGroups = 4;
const MaxBindingsPerGroup = 1 << 16;
// all types not listed are assumed to consume 1 location
const TypeToLocationSize = {
    // GLSL types
    mat2: 2,
    mat3: 3,
    mat4: 4,
    // WGSL types
    mat2x2: 2,
    mat3x3: 3,
    mat4x4: 4
};
class WebGPUShaderProcessingContext {
    static get KnownUBOs() {
        return WebGPUShaderProcessingContext._SimplifiedKnownBindings ? WebGPUShaderProcessingContext._SimplifiedKnownUBOs : WebGPUShaderProcessingContext._KnownUBOs;
    }
    constructor(shaderLanguage, pureMode = false){
        this.vertexBufferKindToNumberOfComponents = {};
        this.shaderLanguage = shaderLanguage;
        this._attributeNextLocation = 0;
        this._varyingNextLocation = 0;
        this.freeGroupIndex = 0;
        this.freeBindingIndex = 0;
        this.availableVaryings = {};
        this.availableAttributes = {};
        this.availableBuffers = {};
        this.availableTextures = {};
        this.availableSamplers = {};
        this.orderedAttributes = [];
        this.bindGroupLayoutEntries = [];
        this.bindGroupLayoutEntryInfo = [];
        this.bindGroupEntries = [];
        this.bufferNames = [];
        this.textureNames = [];
        this.samplerNames = [];
        this.leftOverUniforms = [];
        if (!pureMode) {
            this._findStartingGroupBinding();
        }
    }
    _findStartingGroupBinding() {
        const knownUBOs = WebGPUShaderProcessingContext.KnownUBOs;
        const groups = [];
        for(const name in knownUBOs){
            const binding = knownUBOs[name].binding;
            if (binding.groupIndex === -1) {
                continue;
            }
            if (groups[binding.groupIndex] === undefined) {
                groups[binding.groupIndex] = binding.bindingIndex;
            } else {
                groups[binding.groupIndex] = Math.max(groups[binding.groupIndex], binding.bindingIndex);
            }
        }
        this.freeGroupIndex = groups.length - 1;
        if (this.freeGroupIndex === 0) {
            this.freeGroupIndex++;
            this.freeBindingIndex = 0;
        } else {
            this.freeBindingIndex = groups[groups.length - 1] + 1;
        }
    }
    getAttributeNextLocation(dataType, arrayLength = 0) {
        const index = this._attributeNextLocation;
        this._attributeNextLocation += (TypeToLocationSize[dataType] ?? 1) * (arrayLength || 1);
        return index;
    }
    getVaryingNextLocation(dataType, arrayLength = 0) {
        const index = this._varyingNextLocation;
        this._varyingNextLocation += (TypeToLocationSize[dataType] ?? 1) * (arrayLength || 1);
        return index;
    }
    getNextFreeUBOBinding() {
        return this._getNextFreeBinding(1);
    }
    _getNextFreeBinding(bindingCount) {
        if (this.freeBindingIndex > MaxBindingsPerGroup - bindingCount) {
            this.freeGroupIndex++;
            this.freeBindingIndex = 0;
        }
        if (this.freeGroupIndex === MaxGroups) {
            // eslint-disable-next-line no-throw-literal
            throw "Too many textures or UBOs have been declared and it is not supported in WebGPU.";
        }
        const returnValue = {
            groupIndex: this.freeGroupIndex,
            bindingIndex: this.freeBindingIndex
        };
        this.freeBindingIndex += bindingCount;
        return returnValue;
    }
}
/** @internal */ WebGPUShaderProcessingContext._SimplifiedKnownBindings = true; // if true, use only group=0,binding=0 as a known group/binding for the Scene ubo and use group=1,binding=X for all other bindings
// if false, see _KnownUBOs for the known groups/bindings used
WebGPUShaderProcessingContext._SimplifiedKnownUBOs = {
    Scene: {
        binding: {
            groupIndex: 0,
            bindingIndex: 0
        }
    },
    Light0: {
        binding: {
            groupIndex: -1,
            bindingIndex: -1
        }
    },
    Light1: {
        binding: {
            groupIndex: -1,
            bindingIndex: -1
        }
    },
    Light2: {
        binding: {
            groupIndex: -1,
            bindingIndex: -1
        }
    },
    Light3: {
        binding: {
            groupIndex: -1,
            bindingIndex: -1
        }
    },
    Light4: {
        binding: {
            groupIndex: -1,
            bindingIndex: -1
        }
    },
    Light5: {
        binding: {
            groupIndex: -1,
            bindingIndex: -1
        }
    },
    Light6: {
        binding: {
            groupIndex: -1,
            bindingIndex: -1
        }
    },
    Light7: {
        binding: {
            groupIndex: -1,
            bindingIndex: -1
        }
    },
    Light8: {
        binding: {
            groupIndex: -1,
            bindingIndex: -1
        }
    },
    Light9: {
        binding: {
            groupIndex: -1,
            bindingIndex: -1
        }
    },
    Light10: {
        binding: {
            groupIndex: -1,
            bindingIndex: -1
        }
    },
    Light11: {
        binding: {
            groupIndex: -1,
            bindingIndex: -1
        }
    },
    Light12: {
        binding: {
            groupIndex: -1,
            bindingIndex: -1
        }
    },
    Light13: {
        binding: {
            groupIndex: -1,
            bindingIndex: -1
        }
    },
    Light14: {
        binding: {
            groupIndex: -1,
            bindingIndex: -1
        }
    },
    Light15: {
        binding: {
            groupIndex: -1,
            bindingIndex: -1
        }
    },
    Light16: {
        binding: {
            groupIndex: -1,
            bindingIndex: -1
        }
    },
    Light17: {
        binding: {
            groupIndex: -1,
            bindingIndex: -1
        }
    },
    Light18: {
        binding: {
            groupIndex: -1,
            bindingIndex: -1
        }
    },
    Light19: {
        binding: {
            groupIndex: -1,
            bindingIndex: -1
        }
    },
    Light20: {
        binding: {
            groupIndex: -1,
            bindingIndex: -1
        }
    },
    Light21: {
        binding: {
            groupIndex: -1,
            bindingIndex: -1
        }
    },
    Light22: {
        binding: {
            groupIndex: -1,
            bindingIndex: -1
        }
    },
    Light23: {
        binding: {
            groupIndex: -1,
            bindingIndex: -1
        }
    },
    Light24: {
        binding: {
            groupIndex: -1,
            bindingIndex: -1
        }
    },
    Light25: {
        binding: {
            groupIndex: -1,
            bindingIndex: -1
        }
    },
    Light26: {
        binding: {
            groupIndex: -1,
            bindingIndex: -1
        }
    },
    Light27: {
        binding: {
            groupIndex: -1,
            bindingIndex: -1
        }
    },
    Light28: {
        binding: {
            groupIndex: -1,
            bindingIndex: -1
        }
    },
    Light29: {
        binding: {
            groupIndex: -1,
            bindingIndex: -1
        }
    },
    Light30: {
        binding: {
            groupIndex: -1,
            bindingIndex: -1
        }
    },
    Light31: {
        binding: {
            groupIndex: -1,
            bindingIndex: -1
        }
    },
    Material: {
        binding: {
            groupIndex: -1,
            bindingIndex: -1
        }
    },
    Mesh: {
        binding: {
            groupIndex: -1,
            bindingIndex: -1
        }
    },
    Internals: {
        binding: {
            groupIndex: -1,
            bindingIndex: -1
        }
    }
};
WebGPUShaderProcessingContext._KnownUBOs = {
    Scene: {
        binding: {
            groupIndex: 0,
            bindingIndex: 0
        }
    },
    Light0: {
        binding: {
            groupIndex: 1,
            bindingIndex: 0
        }
    },
    Light1: {
        binding: {
            groupIndex: 1,
            bindingIndex: 1
        }
    },
    Light2: {
        binding: {
            groupIndex: 1,
            bindingIndex: 2
        }
    },
    Light3: {
        binding: {
            groupIndex: 1,
            bindingIndex: 3
        }
    },
    Light4: {
        binding: {
            groupIndex: 1,
            bindingIndex: 4
        }
    },
    Light5: {
        binding: {
            groupIndex: 1,
            bindingIndex: 5
        }
    },
    Light6: {
        binding: {
            groupIndex: 1,
            bindingIndex: 6
        }
    },
    Light7: {
        binding: {
            groupIndex: 1,
            bindingIndex: 7
        }
    },
    Light8: {
        binding: {
            groupIndex: 1,
            bindingIndex: 8
        }
    },
    Light9: {
        binding: {
            groupIndex: 1,
            bindingIndex: 9
        }
    },
    Light10: {
        binding: {
            groupIndex: 1,
            bindingIndex: 10
        }
    },
    Light11: {
        binding: {
            groupIndex: 1,
            bindingIndex: 11
        }
    },
    Light12: {
        binding: {
            groupIndex: 1,
            bindingIndex: 12
        }
    },
    Light13: {
        binding: {
            groupIndex: 1,
            bindingIndex: 13
        }
    },
    Light14: {
        binding: {
            groupIndex: 1,
            bindingIndex: 14
        }
    },
    Light15: {
        binding: {
            groupIndex: 1,
            bindingIndex: 15
        }
    },
    Light16: {
        binding: {
            groupIndex: 1,
            bindingIndex: 16
        }
    },
    Light17: {
        binding: {
            groupIndex: 1,
            bindingIndex: 17
        }
    },
    Light18: {
        binding: {
            groupIndex: 1,
            bindingIndex: 18
        }
    },
    Light19: {
        binding: {
            groupIndex: 1,
            bindingIndex: 19
        }
    },
    Light20: {
        binding: {
            groupIndex: 1,
            bindingIndex: 20
        }
    },
    Light21: {
        binding: {
            groupIndex: 1,
            bindingIndex: 21
        }
    },
    Light22: {
        binding: {
            groupIndex: 1,
            bindingIndex: 22
        }
    },
    Light23: {
        binding: {
            groupIndex: 1,
            bindingIndex: 23
        }
    },
    Light24: {
        binding: {
            groupIndex: 1,
            bindingIndex: 24
        }
    },
    Light25: {
        binding: {
            groupIndex: 1,
            bindingIndex: 25
        }
    },
    Light26: {
        binding: {
            groupIndex: 1,
            bindingIndex: 26
        }
    },
    Light27: {
        binding: {
            groupIndex: 1,
            bindingIndex: 27
        }
    },
    Light28: {
        binding: {
            groupIndex: 1,
            bindingIndex: 28
        }
    },
    Light29: {
        binding: {
            groupIndex: 1,
            bindingIndex: 29
        }
    },
    Light30: {
        binding: {
            groupIndex: 1,
            bindingIndex: 30
        }
    },
    Light31: {
        binding: {
            groupIndex: 1,
            bindingIndex: 31
        }
    },
    Material: {
        binding: {
            groupIndex: 2,
            bindingIndex: 0
        }
    },
    Mesh: {
        binding: {
            groupIndex: 2,
            bindingIndex: 1
        }
    },
    Internals: {
        binding: {
            groupIndex: 2,
            bindingIndex: 2
        }
    }
}; //# sourceMappingURL=webgpuShaderProcessingContext.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/webgpuShaderProcessorsGLSL.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WebGPUShaderProcessorGLSL",
    ()=>WebGPUShaderProcessorGLSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuShaderProcessingContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/webgpuShaderProcessingContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuShaderProcessor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/webgpuShaderProcessor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$codeStringParsingTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/codeStringParsingTools.js [app-client] (ecmascript)");
;
;
;
;
class WebGPUShaderProcessorGLSL extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuShaderProcessor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGPUShaderProcessor"] {
    constructor(){
        super(...arguments);
        this._missingVaryings = [];
        this._textureArrayProcessing = [];
        this._vertexIsGLES3 = false;
        this._fragmentIsGLES3 = false;
        this.shaderLanguage = 0 /* ShaderLanguage.GLSL */ ;
        this.parseGLES3 = true;
    }
    _getArraySize(name, type, preProcessors) {
        let length = 0;
        const startArray = name.indexOf("[");
        const endArray = name.indexOf("]");
        if (startArray > 0 && endArray > 0) {
            const lengthInString = name.substring(startArray + 1, endArray);
            length = +lengthInString;
            if (isNaN(length)) {
                length = +preProcessors[lengthInString.trim()];
            }
            name = name.substring(0, startArray);
        }
        return [
            name,
            type,
            length
        ];
    }
    initializeShaders(processingContext) {
        this._webgpuProcessingContext = processingContext;
        this._missingVaryings.length = 0;
        this._textureArrayProcessing.length = 0;
        this.attributeKeywordName = undefined;
        this.varyingVertexKeywordName = undefined;
        this.varyingFragmentKeywordName = undefined;
    }
    preProcessShaderCode(code, isFragment) {
        const ubDeclaration = `// Internals UBO\nuniform ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuShaderProcessor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGPUShaderProcessor"].InternalsUBOName} {\nfloat yFactor_;\nfloat textureOutputHeight_;\n};\n`;
        const alreadyInjected = code.indexOf("// Internals UBO") !== -1;
        if (isFragment) {
            this._fragmentIsGLES3 = code.indexOf("#version 3") !== -1;
            if (this._fragmentIsGLES3) {
                this.varyingFragmentKeywordName = "in";
            }
            return alreadyInjected ? code : ubDeclaration + "##INJECTCODE##\n" + code;
        }
        this._vertexIsGLES3 = code.indexOf("#version 3") !== -1;
        if (this._vertexIsGLES3) {
            this.attributeKeywordName = "in";
            this.varyingVertexKeywordName = "out";
        }
        return alreadyInjected ? code : ubDeclaration + code;
    }
    varyingCheck(varying, isFragment) {
        const outRegex = /(flat\s)?\s*\bout\b/;
        const inRegex = /(flat\s)?\s*\bin\b/;
        const varyingRegex = /(flat\s)?\s*\bvarying\b/;
        const regex = isFragment && this._fragmentIsGLES3 ? inRegex : !isFragment && this._vertexIsGLES3 ? outRegex : varyingRegex;
        return regex.test(varying);
    }
    varyingProcessor(varying, isFragment, preProcessors) {
        this._preProcessors = preProcessors;
        const outRegex = /\s*(flat)?\s*out\s+(?:(?:highp)?|(?:lowp)?)\s*(\S+)\s+(\S+)\s*;/gm;
        const inRegex = /\s*(flat)?\s*in\s+(?:(?:highp)?|(?:lowp)?)\s*(\S+)\s+(\S+)\s*;/gm;
        const varyingRegex = /\s*(flat)?\s*varying\s+(?:(?:highp)?|(?:lowp)?)\s*(\S+)\s+(\S+)\s*;/gm;
        const regex = isFragment && this._fragmentIsGLES3 ? inRegex : !isFragment && this._vertexIsGLES3 ? outRegex : varyingRegex;
        const match = regex.exec(varying);
        if (match !== null) {
            const interpolationQualifier = match[1] ?? "";
            const varyingType = match[2];
            const name = match[3];
            let location;
            if (isFragment) {
                location = this._webgpuProcessingContext.availableVaryings[name];
                this._missingVaryings[location] = "";
                if (location === undefined) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Warn(`Invalid fragment shader: The varying named "${name}" is not declared in the vertex shader! This declaration will be ignored.`);
                }
            } else {
                location = this._webgpuProcessingContext.getVaryingNextLocation(varyingType, this._getArraySize(name, varyingType, preProcessors)[2]);
                this._webgpuProcessingContext.availableVaryings[name] = location;
                this._missingVaryings[location] = `layout(location = ${location}) ${interpolationQualifier} in ${varyingType} ${name};`;
            }
            varying = varying.replace(match[0], location === undefined ? "" : `layout(location = ${location}) ${interpolationQualifier} ${isFragment ? "in" : "out"} ${varyingType} ${name};`);
        }
        return varying;
    }
    attributeProcessor(attribute, preProcessors) {
        this._preProcessors = preProcessors;
        const inRegex = /\s*in\s+(\S+)\s+(\S+)\s*;/gm;
        const attribRegex = /\s*attribute\s+(\S+)\s+(\S+)\s*;/gm;
        const regex = this._vertexIsGLES3 ? inRegex : attribRegex;
        const match = regex.exec(attribute);
        if (match !== null) {
            const attributeType = match[1];
            const name = match[2];
            const location = this._webgpuProcessingContext.getAttributeNextLocation(attributeType, this._getArraySize(name, attributeType, preProcessors)[2]);
            this._webgpuProcessingContext.availableAttributes[name] = location;
            this._webgpuProcessingContext.orderedAttributes[location] = name;
            const numComponents = this._webgpuProcessingContext.vertexBufferKindToNumberOfComponents[name];
            if (numComponents !== undefined) {
                // Special case for an int/ivecX vertex buffer that is used as a float/vecX attribute in the shader.
                const newType = numComponents < 0 ? numComponents === -1 ? "int" : "ivec" + -numComponents : numComponents === 1 ? "uint" : "uvec" + numComponents;
                const newName = `_int_${name}_`;
                attribute = attribute.replace(match[0], `layout(location = ${location}) in ${newType} ${newName}; ${attributeType} ${name} = ${attributeType}(${newName});`);
            } else {
                attribute = attribute.replace(match[0], `layout(location = ${location}) in ${attributeType} ${name};`);
            }
        }
        return attribute;
    }
    uniformProcessor(uniform, isFragment, preProcessors) {
        this._preProcessors = preProcessors;
        const uniformRegex = /\s*uniform\s+(?:(?:highp)?|(?:lowp)?)\s*(\S+)\s+(\S+)\s*;/gm;
        const match = uniformRegex.exec(uniform);
        if (match !== null) {
            let uniformType = match[1];
            let name = match[2];
            if (uniformType.indexOf("sampler") === 0 || uniformType.indexOf("sampler") === 1) {
                let arraySize = 0; // 0 means the texture is not declared as an array
                [name, uniformType, arraySize] = this._getArraySize(name, uniformType, preProcessors);
                let textureInfo = this._webgpuProcessingContext.availableTextures[name];
                if (!textureInfo) {
                    textureInfo = {
                        autoBindSampler: true,
                        isTextureArray: arraySize > 0,
                        isStorageTexture: false,
                        textures: [],
                        sampleType: "float" /* WebGPUConstants.TextureSampleType.Float */ 
                    };
                    for(let i = 0; i < (arraySize || 1); ++i){
                        textureInfo.textures.push(this._webgpuProcessingContext.getNextFreeUBOBinding());
                    }
                }
                const samplerType = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuShaderProcessor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGPUShaderProcessor"]._SamplerTypeByWebGLSamplerType[uniformType] ?? "sampler";
                const isComparisonSampler = !!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuShaderProcessor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGPUShaderProcessor"]._IsComparisonSamplerByWebGPUSamplerType[samplerType];
                const samplerBindingType = isComparisonSampler ? "comparison" /* WebGPUConstants.SamplerBindingType.Comparison */  : "filtering" /* WebGPUConstants.SamplerBindingType.Filtering */ ;
                const samplerName = name + `Sampler`;
                let samplerInfo = this._webgpuProcessingContext.availableSamplers[samplerName];
                if (!samplerInfo) {
                    samplerInfo = {
                        binding: this._webgpuProcessingContext.getNextFreeUBOBinding(),
                        type: samplerBindingType
                    };
                }
                const componentType = uniformType.charAt(0) === "u" ? "u" : uniformType.charAt(0) === "i" ? "i" : "";
                if (componentType) {
                    uniformType = uniformType.substring(1);
                }
                const sampleType = isComparisonSampler ? "depth" /* WebGPUConstants.TextureSampleType.Depth */  : componentType === "u" ? "uint" /* WebGPUConstants.TextureSampleType.Uint */  : componentType === "i" ? "sint" /* WebGPUConstants.TextureSampleType.Sint */  : "float" /* WebGPUConstants.TextureSampleType.Float */ ;
                textureInfo.sampleType = sampleType;
                const isTextureArray = arraySize > 0;
                const samplerGroupIndex = samplerInfo.binding.groupIndex;
                const samplerBindingIndex = samplerInfo.binding.bindingIndex;
                const samplerFunction = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuShaderProcessor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGPUShaderProcessor"]._SamplerFunctionByWebGLSamplerType[uniformType];
                const textureType = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuShaderProcessor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGPUShaderProcessor"]._TextureTypeByWebGLSamplerType[uniformType];
                const textureDimension = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuShaderProcessor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGPUShaderProcessor"]._GpuTextureViewDimensionByWebGPUTextureType[textureType];
                // Manage textures and samplers.
                if (!isTextureArray) {
                    arraySize = 1;
                    uniform = `layout(set = ${samplerGroupIndex}, binding = ${samplerBindingIndex}) uniform ${samplerType} ${samplerName};
                        layout(set = ${textureInfo.textures[0].groupIndex}, binding = ${textureInfo.textures[0].bindingIndex}) uniform ${componentType}${textureType} ${name}Texture;
                        #define ${name} ${componentType}${samplerFunction}(${name}Texture, ${samplerName})`;
                } else {
                    const layouts = [];
                    layouts.push(`layout(set = ${samplerGroupIndex}, binding = ${samplerBindingIndex}) uniform ${componentType}${samplerType} ${samplerName};`);
                    uniform = `\n`;
                    for(let i = 0; i < arraySize; ++i){
                        const textureSetIndex = textureInfo.textures[i].groupIndex;
                        const textureBindingIndex = textureInfo.textures[i].bindingIndex;
                        layouts.push(`layout(set = ${textureSetIndex}, binding = ${textureBindingIndex}) uniform ${textureType} ${name}Texture${i};`);
                        uniform += `${i > 0 ? "\n" : ""}#define ${name}${i} ${componentType}${samplerFunction}(${name}Texture${i}, ${samplerName})`;
                    }
                    uniform = layouts.join("\n") + uniform;
                    this._textureArrayProcessing.push(name);
                }
                this._webgpuProcessingContext.availableTextures[name] = textureInfo;
                this._webgpuProcessingContext.availableSamplers[samplerName] = samplerInfo;
                this._addSamplerBindingDescription(samplerName, samplerInfo, !isFragment);
                for(let i = 0; i < arraySize; ++i){
                    this._addTextureBindingDescription(name, textureInfo, i, textureDimension, null, !isFragment);
                }
            } else {
                this._addUniformToLeftOverUBO(name, uniformType, preProcessors);
                uniform = "";
            }
        }
        return uniform;
    }
    uniformBufferProcessor(uniformBuffer, isFragment) {
        const uboRegex = /uniform\s+(\w+)/gm;
        const match = uboRegex.exec(uniformBuffer);
        if (match !== null) {
            const name = match[1];
            let uniformBufferInfo = this._webgpuProcessingContext.availableBuffers[name];
            if (!uniformBufferInfo) {
                const knownUBO = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuShaderProcessingContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGPUShaderProcessingContext"].KnownUBOs[name];
                let binding;
                if (knownUBO && knownUBO.binding.groupIndex !== -1) {
                    binding = knownUBO.binding;
                } else {
                    binding = this._webgpuProcessingContext.getNextFreeUBOBinding();
                }
                uniformBufferInfo = {
                    binding
                };
                this._webgpuProcessingContext.availableBuffers[name] = uniformBufferInfo;
            }
            this._addBufferBindingDescription(name, uniformBufferInfo, "uniform" /* WebGPUConstants.BufferBindingType.Uniform */ , !isFragment);
            uniformBuffer = uniformBuffer.replace("uniform", `layout(set = ${uniformBufferInfo.binding.groupIndex}, binding = ${uniformBufferInfo.binding.bindingIndex}) uniform`);
        }
        return uniformBuffer;
    }
    postProcessor(code, defines, isFragment, _processingContext, _parameters, preProcessors) {
        const hasDrawBuffersExtension = code.search(/#extension.+GL_EXT_draw_buffers.+require/) !== -1;
        // Remove extensions
        const regex = /#extension.+(GL_OVR_multiview2|GL_OES_standard_derivatives|GL_EXT_shader_texture_lod|GL_EXT_frag_depth|GL_EXT_draw_buffers).+(enable|require)/g;
        code = code.replace(regex, "");
        // Replace instructions
        code = code.replace(/texture2D\s*\(/g, "texture(");
        if (isFragment) {
            const hasFragCoord = code.indexOf("gl_FragCoord") >= 0;
            const fragCoordCode = `
                glFragCoord_ = gl_FragCoord;
                if (yFactor_ == 1.) {
                    glFragCoord_.y = textureOutputHeight_ - glFragCoord_.y;
                }
            `;
            const injectCode = hasFragCoord ? "vec4 glFragCoord_;\n" : "";
            const hasOutput = code.search(/layout *\(location *= *0\) *out/g) !== -1;
            code = code.replace(/texture2DLodEXT\s*\(/g, "textureLod(");
            code = code.replace(/textureCubeLodEXT\s*\(/g, "textureLod(");
            code = code.replace(/textureCube\s*\(/g, "texture(");
            code = code.replace(/gl_FragDepthEXT/g, "gl_FragDepth");
            code = code.replace(/gl_FragColor/g, "glFragColor");
            code = code.replace(/gl_FragData/g, "glFragData");
            code = code.replace(/gl_FragCoord/g, "glFragCoord_");
            if (!this._fragmentIsGLES3) {
                code = code.replace(/void\s+?main\s*\(/g, (hasDrawBuffersExtension || hasOutput ? "" : "layout(location = 0) out vec4 glFragColor;\n") + "void main(");
            } else {
                const match = /^\s*out\s+\S+\s+\S+\s*;/gm.exec(code);
                if (match !== null) {
                    code = code.substring(0, match.index) + "layout(location = 0) " + code.substring(match.index);
                }
            }
            code = code.replace(/dFdy/g, "(-yFactor_)*dFdy"); // will also handle dFdyCoarse and dFdyFine
            code = code.replace("##INJECTCODE##", injectCode);
            if (hasFragCoord) {
                code = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$codeStringParsingTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InjectStartingAndEndingCode"])(code, "void main", fragCoordCode);
            }
        } else {
            if ("VERTEXOUTPUT_INVARIANT" in preProcessors) {
                code = "invariant gl_Position;\n" + code;
            }
            code = code.replace(/gl_InstanceID/g, "gl_InstanceIndex");
            code = code.replace(/gl_VertexID/g, "gl_VertexIndex");
            const hasMultiviewExtension = defines.indexOf("#define MULTIVIEW") !== -1;
            if (hasMultiviewExtension) {
                return "#extension GL_OVR_multiview2 : require\nlayout (num_views = 2) in;\n" + code;
            }
        }
        // Flip Y + convert z range from [-1,1] to [0,1]
        if (!isFragment) {
            const lastClosingCurly = code.lastIndexOf("}");
            code = code.substring(0, lastClosingCurly);
            code += "gl_Position.y *= yFactor_;\n";
            // isNDCHalfZRange is always true in WebGPU
            code += "}";
        }
        return code;
    }
    _applyTextureArrayProcessing(code, name) {
        // Replaces the occurrences of name[XX] by nameXX
        const regex = new RegExp(name + "\\s*\\[(.+)?\\]", "gm");
        let match = regex.exec(code);
        while(match !== null){
            const index = match[1];
            let iindex = +index;
            if (this._preProcessors && isNaN(iindex)) {
                iindex = +this._preProcessors[index.trim()];
            }
            code = code.replace(match[0], name + iindex);
            match = regex.exec(code);
        }
        return code;
    }
    _generateLeftOverUBOCode(name, uniformBufferDescription) {
        let ubo = `layout(set = ${uniformBufferDescription.binding.groupIndex}, binding = ${uniformBufferDescription.binding.bindingIndex}) uniform ${name} {\n    `;
        for (const leftOverUniform of this._webgpuProcessingContext.leftOverUniforms){
            if (leftOverUniform.length > 0) {
                ubo += `    ${leftOverUniform.type} ${leftOverUniform.name}[${leftOverUniform.length}];\n`;
            } else {
                ubo += `    ${leftOverUniform.type} ${leftOverUniform.name};\n`;
            }
        }
        ubo += "};\n\n";
        return ubo;
    }
    finalizeShaders(vertexCode, fragmentCode) {
        // make replacements for texture names in the texture array case
        for(let i = 0; i < this._textureArrayProcessing.length; ++i){
            const name = this._textureArrayProcessing[i];
            vertexCode = this._applyTextureArrayProcessing(vertexCode, name);
            fragmentCode = this._applyTextureArrayProcessing(fragmentCode, name);
        }
        // inject the missing varying in the fragment shader
        for(let i = 0; i < this._missingVaryings.length; ++i){
            const decl = this._missingVaryings[i];
            if (decl && decl.length > 0) {
                fragmentCode = decl + "\n" + fragmentCode;
            }
        }
        // Builds the leftover UBOs.
        const leftOverUBO = this._buildLeftOverUBO();
        vertexCode = leftOverUBO + vertexCode;
        fragmentCode = leftOverUBO + fragmentCode;
        this._collectBindingNames();
        this._preCreateBindGroupEntries();
        this._preProcessors = null;
        this._webgpuProcessingContext.vertexBufferKindToNumberOfComponents = {};
        return {
            vertexCode,
            fragmentCode
        };
    }
} //# sourceMappingURL=webgpuShaderProcessorsGLSL.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/webgpuShaderProcessorsWGSL.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WebGPUShaderProcessorWGSL",
    ()=>WebGPUShaderProcessorWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuShaderProcessingContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/webgpuShaderProcessingContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuShaderProcessor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/webgpuShaderProcessor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$codeStringParsingTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/codeStringParsingTools.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$bakedVertexAnimationDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/bakedVertexAnimationDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$bakedVertexAnimation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/bakedVertexAnimation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$instancesDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/instancesDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$instancesVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/instancesVertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$helperFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/helperFunctions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$fresnelFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/fresnelFunction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$meshUboDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/meshUboDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$sceneUboDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/sceneUboDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$decalFragment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/decalFragment.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
const builtInName_frag_depth = "fragmentOutputs.fragDepth";
const leftOverVarName = "uniforms";
const internalsVarName = "internals";
const gpuTextureViewDimensionByWebGPUTextureFunction = {
    texture_1d: "1d" /* WebGPUConstants.TextureViewDimension.E1d */ ,
    texture_2d: "2d" /* WebGPUConstants.TextureViewDimension.E2d */ ,
    texture_2d_array: "2d-array" /* WebGPUConstants.TextureViewDimension.E2dArray */ ,
    texture_3d: "3d" /* WebGPUConstants.TextureViewDimension.E3d */ ,
    texture_cube: "cube" /* WebGPUConstants.TextureViewDimension.Cube */ ,
    texture_cube_array: "cube-array" /* WebGPUConstants.TextureViewDimension.CubeArray */ ,
    texture_multisampled_2d: "2d" /* WebGPUConstants.TextureViewDimension.E2d */ ,
    texture_depth_2d: "2d" /* WebGPUConstants.TextureViewDimension.E2d */ ,
    texture_depth_2d_array: "2d-array" /* WebGPUConstants.TextureViewDimension.E2dArray */ ,
    texture_depth_cube: "cube" /* WebGPUConstants.TextureViewDimension.Cube */ ,
    texture_depth_cube_array: "cube-array" /* WebGPUConstants.TextureViewDimension.CubeArray */ ,
    texture_depth_multisampled_2d: "2d" /* WebGPUConstants.TextureViewDimension.E2d */ ,
    texture_storage_1d: "1d" /* WebGPUConstants.TextureViewDimension.E1d */ ,
    texture_storage_2d: "2d" /* WebGPUConstants.TextureViewDimension.E2d */ ,
    texture_storage_2d_array: "2d-array" /* WebGPUConstants.TextureViewDimension.E2dArray */ ,
    texture_storage_3d: "3d" /* WebGPUConstants.TextureViewDimension.E3d */ ,
    texture_external: null
};
class WebGPUShaderProcessorWGSL extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuShaderProcessor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGPUShaderProcessor"] {
    constructor(){
        super(...arguments);
        this.shaderLanguage = 1 /* ShaderLanguage.WGSL */ ;
        this.uniformRegexp = /uniform\s+(\w+)\s*:\s*(.+)\s*;/;
        this.textureRegexp = /var\s+(\w+)\s*:\s*((array<\s*)?(texture_\w+)\s*(<\s*(.+)\s*>)?\s*(,\s*\w+\s*>\s*)?);/;
        this.noPrecision = true;
        this.pureMode = false;
    }
    _getArraySize(name, uniformType, preProcessors) {
        let length = 0;
        const endArray = uniformType.lastIndexOf(">");
        if (uniformType.indexOf("array") >= 0 && endArray > 0) {
            let startArray = endArray;
            while(startArray > 0 && uniformType.charAt(startArray) !== " " && uniformType.charAt(startArray) !== ","){
                startArray--;
            }
            const lengthInString = uniformType.substring(startArray + 1, endArray);
            length = +lengthInString;
            if (isNaN(length)) {
                length = +preProcessors[lengthInString.trim()];
            }
            while(startArray > 0 && (uniformType.charAt(startArray) === " " || uniformType.charAt(startArray) === ",")){
                startArray--;
            }
            uniformType = uniformType.substring(uniformType.indexOf("<") + 1, startArray + 1);
        }
        return [
            name,
            uniformType,
            length
        ];
    }
    initializeShaders(processingContext) {
        this._webgpuProcessingContext = processingContext;
        this._attributesInputWGSL = [];
        this._attributesWGSL = [];
        this._attributesConversionCodeWGSL = [];
        this._hasNonFloatAttribute = false;
        this._varyingsWGSL = [];
        this._varyingNamesWGSL = [];
        this._stridedUniformArrays = [];
    }
    preProcessShaderCode(code) {
        // Same check as in webgpuShaderProcessorsGLSL to avoid same ubDelcaration to be injected twice.
        const ubDeclaration = this.pureMode ? "" : `struct ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuShaderProcessor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGPUShaderProcessor"].InternalsUBOName} {\n  yFactor_: f32,\n  textureOutputHeight_: f32,\n};\nvar<uniform> ${internalsVarName} : ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuShaderProcessor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGPUShaderProcessor"].InternalsUBOName};\n`;
        const alreadyInjected = code.indexOf(ubDeclaration) !== -1;
        return alreadyInjected ? code : ubDeclaration + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$codeStringParsingTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RemoveComments"])(code);
    }
    varyingCheck(varying) {
        const regex = /(flat|linear|perspective)?\s*(center|centroid|sample)?\s*\bvarying\b/;
        return regex.test(varying);
    }
    varyingProcessor(varying, isFragment, preProcessors) {
        const varyingRegex = /\s*(flat|linear|perspective)?\s*(center|centroid|sample)?\s*varying\s+(?:(?:highp)?|(?:lowp)?)\s*(\S+)\s*:\s*(.+)\s*;/gm;
        const match = varyingRegex.exec(varying);
        if (match !== null) {
            const interpolationType = match[1] ?? "perspective";
            const interpolationSampling = match[2] ?? "center";
            const varyingType = match[4];
            const name = match[3];
            const interpolation = interpolationType === "flat" ? `@interpolate(${interpolationType})` : `@interpolate(${interpolationType}, ${interpolationSampling})`;
            let location;
            if (isFragment) {
                location = this._webgpuProcessingContext.availableVaryings[name];
                if (location === undefined) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Warn(`Invalid fragment shader: The varying named "${name}" is not declared in the vertex shader! This declaration will be ignored.`);
                }
            } else {
                location = this._webgpuProcessingContext.getVaryingNextLocation(varyingType, this._getArraySize(name, varyingType, preProcessors)[2]);
                this._webgpuProcessingContext.availableVaryings[name] = location;
                this._varyingsWGSL.push(`  @location(${location}) ${interpolation} ${name} : ${varyingType},`);
                this._varyingNamesWGSL.push(name);
            }
            varying = "";
        }
        return varying;
    }
    attributeProcessor(attribute, preProcessors) {
        const attribRegex = /\s*attribute\s+(\S+)\s*:\s*(.+)\s*;/gm;
        const match = attribRegex.exec(attribute);
        if (match !== null) {
            const attributeType = match[2];
            const name = match[1];
            const location = this._webgpuProcessingContext.getAttributeNextLocation(attributeType, this._getArraySize(name, attributeType, preProcessors)[2]);
            this._webgpuProcessingContext.availableAttributes[name] = location;
            this._webgpuProcessingContext.orderedAttributes[location] = name;
            const numComponents = this._webgpuProcessingContext.vertexBufferKindToNumberOfComponents[name];
            if (numComponents !== undefined) {
                // Special case for an int/ivecX vertex buffer that is used as a float/vecX attribute in the shader.
                const newType = numComponents < 0 ? numComponents === -1 ? "i32" : "vec" + -numComponents + "<i32>" : numComponents === 1 ? "u32" : "vec" + numComponents + "<u32>";
                const newName = `_int_${name}_`;
                this._attributesInputWGSL.push(`@location(${location}) ${newName} : ${newType},`);
                this._attributesWGSL.push(`${name} : ${attributeType},`);
                this._attributesConversionCodeWGSL.push(`vertexInputs.${name} = ${attributeType}(vertexInputs_.${newName});`);
                this._hasNonFloatAttribute = true;
            } else {
                this._attributesInputWGSL.push(`@location(${location}) ${name} : ${attributeType},`);
                this._attributesWGSL.push(`${name} : ${attributeType},`);
                this._attributesConversionCodeWGSL.push(`vertexInputs.${name} = vertexInputs_.${name};`);
            }
            attribute = "";
        }
        return attribute;
    }
    uniformProcessor(uniform, isFragment, preProcessors) {
        const match = this.uniformRegexp.exec(uniform);
        if (match !== null) {
            const uniformType = match[2];
            const name = match[1];
            this._addUniformToLeftOverUBO(name, uniformType, preProcessors);
            uniform = "";
        }
        return uniform;
    }
    textureProcessor(texture, isFragment, preProcessors) {
        const match = this.textureRegexp.exec(texture);
        if (match !== null) {
            const name = match[1]; // name of the variable
            const type = match[2]; // texture_2d<f32> or array<texture_2d_array<f32>, 5> for eg
            const isArrayOfTexture = !!match[3];
            const textureFunc = match[4]; // texture_2d, texture_depth_2d, etc
            const isStorageTexture = textureFunc.indexOf("storage") > 0;
            const componentType = match[6]; // f32 or i32 or u32 or undefined
            const storageTextureFormat = isStorageTexture ? componentType.substring(0, componentType.indexOf(",")).trim() : null;
            let arraySize = isArrayOfTexture ? this._getArraySize(name, type, preProcessors)[2] : 0;
            let textureInfo = this._webgpuProcessingContext.availableTextures[name];
            if (!textureInfo) {
                textureInfo = {
                    isTextureArray: arraySize > 0,
                    isStorageTexture,
                    textures: [],
                    sampleType: "float" /* WebGPUConstants.TextureSampleType.Float */ 
                };
                arraySize = arraySize || 1;
                for(let i = 0; i < arraySize; ++i){
                    textureInfo.textures.push(this._webgpuProcessingContext.getNextFreeUBOBinding());
                }
            } else {
                arraySize = textureInfo.textures.length;
            }
            this._webgpuProcessingContext.availableTextures[name] = textureInfo;
            const isDepthTexture = textureFunc.indexOf("depth") > 0;
            const textureDimension = gpuTextureViewDimensionByWebGPUTextureFunction[textureFunc];
            const sampleType = isDepthTexture ? "depth" /* WebGPUConstants.TextureSampleType.Depth */  : componentType === "u32" ? "uint" /* WebGPUConstants.TextureSampleType.Uint */  : componentType === "i32" ? "sint" /* WebGPUConstants.TextureSampleType.Sint */  : "float" /* WebGPUConstants.TextureSampleType.Float */ ;
            textureInfo.sampleType = sampleType;
            if (textureDimension === undefined) {
                // eslint-disable-next-line no-throw-literal
                throw `Can't get the texture dimension corresponding to the texture function "${textureFunc}"!`;
            }
            for(let i = 0; i < arraySize; ++i){
                const { groupIndex, bindingIndex } = textureInfo.textures[i];
                if (i === 0) {
                    texture = `@group(${groupIndex}) @binding(${bindingIndex}) ${texture}`;
                }
                this._addTextureBindingDescription(name, textureInfo, i, textureDimension, storageTextureFormat, !isFragment);
            }
        }
        return texture;
    }
    _convertDefinesToConst(preProcessors) {
        let code = "";
        for(const key in preProcessors){
            const value = preProcessors[key];
            if (key.startsWith("__")) {
                continue;
            }
            if (!isNaN(parseInt(value)) || !isNaN(parseFloat(value))) {
                code += `const ${key} = ${value};\n`;
            } else if (key && value === "") {
                code += `const ${key} = true;\n`;
            }
        }
        return code;
    }
    postProcessor(code, _defines, _isFragment, _processingContext, _parameters, preProcessors, preProcessorsFromCode) {
        // Collect the preprocessor names (coming from a "#define NAME VALUE" declaration) directly defined in the shader code (preProcessorsFromCode) and not defined at the material level (preProcessors).
        // This is because we will have to perform a replace on the code to replace the defines with their values.
        //
        // We don't have to do it for preprocessor names defined at the material level because replacing them by "const NAME = VALUE;" will take care of it (see _convertDefinesToConst()) and is faster than doing a search/replace for each of them.
        //
        // The reason why doing "const NAME = VALUE;" doesn't work for preprocessor names defined in the code is that VALUE can be any string and not only numbers or booleans.
        // So, if we have this code:
        //
        //      #define vDiffuseUV vMainUV
        //      textureSample(..., fragmentInputs.vDiffuseUV)
        ///
        // only a search/replace will work, 'const vDiffuseUV = "vMainUV";' will not work
        //
        // Note that the search/replace text processing will also apply to the "#define NAME VALUE" definition itself, so it will become "#define VALUE VALUE"
        // It's not a problem, though, because all #define XXX will be commented out in the final code.
        const defineList = [];
        for(const key in preProcessorsFromCode){
            const value = preProcessorsFromCode[key];
            // Excludes the defines that are booleans (note that there aren't "false" booleans: we simply don't add them in the preProcessorsFromCode object).
            // That's because we need (at least some of) them to stay untouched, like #define DISABLE_UNIFORMTY_ANALYSIS or #define CUSTOM_VERTEX_BEGIN (else, they would be replaced with "#define true" after the search/replace processing)
            if (value !== "true") {
                defineList.push(key);
            }
        }
        // We must sort the define names by length to avoid replacing a define with a longer name (ex: #define A 1 and #define AB 2, if we replace A with 1, we will have #define 1B 2)
        // So, we start by longest names and we finish with the shortest ones.
        defineList.sort((a, b)=>a.length - b.length > 0 ? -1 : a.length === b.length ? 0 : 1);
        for (const name of defineList){
            // Let's retrieve the value of the define from the code
            // Note that we can't use the value from preProcessorsFromCode[name] because this value could have been changed from a previous replace
            // For example:
            //      #define IOR 1.333
            //      #define ETA 1.0/IOR
            //
            // After IOR replacement is performed, we will have:
            //      #define 1.333 1.333
            //      #define ETA 1.0/1.333
            //
            // but preProcessorsFromCode["ETA"] is still "1.0/IOR" and not "1.0/1.333", so we must retrieve the value for ETA from the current code
            const i0 = code.indexOf("#define " + name);
            let i1 = code.indexOf("\n", i0);
            if (i1 === -1) {
                i1 = code.length;
            }
            const value = code.substring(i0 + 8 + name.length + 1, i1);
            code = code.replace(new RegExp(name, "g"), value);
        }
        code = this._convertDefinesToConst(preProcessors) + code;
        if ("VERTEXOUTPUT_INVARIANT" in preProcessors) {
            code = "#define VERTEXOUTPUT_INVARIANT\n" + code;
        }
        return code;
    }
    finalizeShaders(vertexCode, fragmentCode) {
        const enabledExtensions = [];
        const fragCoordCode = fragmentCode.indexOf("fragmentInputs.position") >= 0 && !this.pureMode ? `
            if (internals.yFactor_ == 1.) {
                fragmentInputs.position.y = internals.textureOutputHeight_ - fragmentInputs.position.y;
            }
        ` : "";
        // Add the group/binding info to the sampler declaration (var xxx: sampler|sampler_comparison)
        vertexCode = this._processSamplers(vertexCode, true);
        fragmentCode = this._processSamplers(fragmentCode, false);
        // Add the group/binding info to the uniform/storage buffer declarations (var<uniform> XXX:YYY or var<storage(,read_write|read)> XXX:YYY)
        vertexCode = this._processCustomBuffers(vertexCode, true);
        fragmentCode = this._processCustomBuffers(fragmentCode, false);
        // Builds the leftover UBOs.
        const leftOverUBO = this._buildLeftOverUBO();
        vertexCode = leftOverUBO + vertexCode;
        fragmentCode = leftOverUBO + fragmentCode;
        // Vertex code
        vertexCode = vertexCode.replace(/#define /g, "//#define ");
        vertexCode = this._processStridedUniformArrays(vertexCode);
        let vertexInputs = "struct VertexInputs {\n  @builtin(vertex_index) vertexIndex : u32,\n  @builtin(instance_index) instanceIndex : u32,\n";
        if (this._attributesInputWGSL.length > 0) {
            vertexInputs += this._attributesInputWGSL.join("\n");
        }
        vertexInputs += "\n};\nvar<private> vertexInputs" + (this._hasNonFloatAttribute ? "_" : "") + " : VertexInputs;\n";
        if (this._hasNonFloatAttribute) {
            vertexInputs += "struct VertexInputs_ {\n  vertexIndex : u32, instanceIndex : u32,\n";
            vertexInputs += this._attributesWGSL.join("\n");
            vertexInputs += "\n};\nvar<private> vertexInputs : VertexInputs_;\n";
        }
        let vertexOutputs = "struct FragmentInputs {\n  @builtin(position)" + (vertexCode.indexOf("#define VERTEXOUTPUT_INVARIANT") >= 0 ? " @invariant" : "") + " position : vec4<f32>,\n";
        if (this._varyingsWGSL.length > 0) {
            vertexOutputs += this._varyingsWGSL.join("\n");
        }
        vertexOutputs += "\n};\nvar<private> vertexOutputs : FragmentInputs;\n";
        vertexCode = vertexInputs + vertexOutputs + vertexCode;
        let vertexMainStartingCode = `\n  vertexInputs${this._hasNonFloatAttribute ? "_" : ""} = input;\n`;
        if (this._hasNonFloatAttribute) {
            vertexMainStartingCode += "vertexInputs.vertexIndex = vertexInputs_.vertexIndex;\nvertexInputs.instanceIndex = vertexInputs_.instanceIndex;\n";
            vertexMainStartingCode += this._attributesConversionCodeWGSL.join("\n");
            vertexMainStartingCode += "\n";
        }
        const vertexMainEndingCode = this.pureMode ? `  return vertexOutputs;` : `  vertexOutputs.position.y = vertexOutputs.position.y * internals.yFactor_;\n  return vertexOutputs;`;
        let needDiagnosticOff = vertexCode.indexOf(`#define DISABLE_UNIFORMITY_ANALYSIS`) !== -1;
        vertexCode = (needDiagnosticOff ? "diagnostic(off, derivative_uniformity);\n" : "") + "diagnostic(off, chromium.unreachable_code);\n" + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$codeStringParsingTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InjectStartingAndEndingCode"])(vertexCode, "fn main", vertexMainStartingCode, vertexMainEndingCode);
        // fragment code
        fragmentCode = fragmentCode.replace(/#define /g, "//#define ");
        fragmentCode = this._processStridedUniformArrays(fragmentCode);
        if (!this.pureMode) {
            fragmentCode = fragmentCode.replace(/dpdy/g, "(-internals.yFactor_)*dpdy"); // will also handle dpdyCoarse and dpdyFine
        }
        let fragmentInputs = "struct FragmentInputs {\n  @builtin(position) position : vec4<f32>,\n  @builtin(front_facing) frontFacing : bool,\n";
        if (this._varyingsWGSL.length > 0) {
            fragmentInputs += this._varyingsWGSL.join("\n");
        }
        fragmentInputs += "\n};\nvar<private> fragmentInputs : FragmentInputs;\n";
        let fragmentOutputs = "struct FragmentOutputs {\n";
        // Adding fragData output locations
        const regexRoot = "fragmentOutputs\\.fragData";
        let match = fragmentCode.match(new RegExp(regexRoot + "0", "g"));
        let indexLocation = 0;
        if (match) {
            fragmentOutputs += ` @location(${indexLocation}) fragData0 : vec4<f32>,\n`;
            indexLocation++;
            for(let index = 1; index < 8; index++){
                match = fragmentCode.match(new RegExp(regexRoot + index, "g"));
                if (match) {
                    fragmentOutputs += ` @location(${indexLocation}) fragData${indexLocation} : vec4<f32>,\n`;
                    indexLocation++;
                }
            }
            if (fragmentCode.indexOf("MRT_AND_COLOR") !== -1) {
                fragmentOutputs += `  @location(${indexLocation}) color : vec4<f32>,\n`;
                indexLocation++;
            }
        }
        // Adding fragData output locations
        const regex = /oitDepthSampler/;
        match = fragmentCode.match(regex);
        if (match) {
            fragmentOutputs += ` @location(${indexLocation++}) depth : vec2<f32>,\n`;
            fragmentOutputs += ` @location(${indexLocation++}) frontColor : vec4<f32>,\n`;
            fragmentOutputs += ` @location(${indexLocation++}) backColor : vec4<f32>,\n`;
        }
        if (indexLocation === 0) {
            const useDualSourceBlending = fragmentCode.indexOf("DUAL_SOURCE_BLENDING") !== -1;
            if (useDualSourceBlending) {
                enabledExtensions.push("dual_source_blending");
                fragmentOutputs += "  @location(0) @blend_src(0) color : vec4<f32>,\n";
                fragmentOutputs += "  @location(0) @blend_src(1) color2 : vec4<f32>,\n";
            } else {
                fragmentOutputs += "  @location(0) color : vec4<f32>,\n";
            }
            indexLocation++;
        }
        // FragDepth
        let hasFragDepth = false;
        let idx = 0;
        while(!hasFragDepth){
            idx = fragmentCode.indexOf(builtInName_frag_depth, idx);
            if (idx < 0) {
                break;
            }
            const saveIndex = idx;
            hasFragDepth = true;
            while(idx > 1 && fragmentCode.charAt(idx) !== "\n"){
                if (fragmentCode.charAt(idx) === "/" && fragmentCode.charAt(idx - 1) === "/") {
                    hasFragDepth = false;
                    break;
                }
                idx--;
            }
            idx = saveIndex + builtInName_frag_depth.length;
        }
        if (hasFragDepth) {
            fragmentOutputs += "  @builtin(frag_depth) fragDepth: f32,\n";
        }
        fragmentOutputs += "};\nvar<private> fragmentOutputs : FragmentOutputs;\n";
        fragmentCode = fragmentInputs + fragmentOutputs + fragmentCode;
        const fragmentStartingCode = "  fragmentInputs = input;\n  " + fragCoordCode;
        const fragmentEndingCode = "  return fragmentOutputs;";
        needDiagnosticOff = fragmentCode.indexOf(`#define DISABLE_UNIFORMITY_ANALYSIS`) !== -1;
        if (enabledExtensions.length > 0) {
            fragmentCode = "enable " + enabledExtensions.join(";\nenable ") + ";\n" + fragmentCode;
        }
        fragmentCode = (needDiagnosticOff ? "diagnostic(off, derivative_uniformity);\n" : "") + "diagnostic(off, chromium.unreachable_code);\n" + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$codeStringParsingTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InjectStartingAndEndingCode"])(fragmentCode, "fn main", fragmentStartingCode, fragmentEndingCode);
        this._collectBindingNames();
        this._preCreateBindGroupEntries();
        this._webgpuProcessingContext.vertexBufferKindToNumberOfComponents = {};
        return {
            vertexCode,
            fragmentCode
        };
    }
    _generateLeftOverUBOCode(name, uniformBufferDescription) {
        let stridedArrays = "";
        let ubo = `struct ${name} {\n`;
        for (const leftOverUniform of this._webgpuProcessingContext.leftOverUniforms){
            const type = leftOverUniform.type.replace(/^(.*?)(<.*>)?$/, "$1");
            const size = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuShaderProcessor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGPUShaderProcessor"].UniformSizes[type];
            if (leftOverUniform.length > 0) {
                if (size <= 2) {
                    const stridedArrayType = `${name}_${this._stridedUniformArrays.length}_strided_arr`;
                    stridedArrays += `struct ${stridedArrayType} {
                        @size(16)
                        el: ${type},
                    }`;
                    this._stridedUniformArrays.push(leftOverUniform.name);
                    ubo += ` @align(16) ${leftOverUniform.name} : array<${stridedArrayType}, ${leftOverUniform.length}>,\n`;
                } else {
                    ubo += ` ${leftOverUniform.name} : array<${leftOverUniform.type}, ${leftOverUniform.length}>,\n`;
                }
            } else {
                ubo += `  ${leftOverUniform.name} : ${leftOverUniform.type},\n`;
            }
        }
        ubo += "};\n";
        ubo = `${stridedArrays}\n${ubo}`;
        ubo += `@group(${uniformBufferDescription.binding.groupIndex}) @binding(${uniformBufferDescription.binding.bindingIndex}) var<uniform> ${leftOverVarName} : ${name};\n`;
        return ubo;
    }
    _processSamplers(code, isVertex) {
        const samplerRegexp = /var\s+(\w+Sampler)\s*:\s*(sampler|sampler_comparison)\s*;/gm;
        // eslint-disable-next-line no-constant-condition
        while(true){
            const match = samplerRegexp.exec(code);
            if (match === null) {
                break;
            }
            const name = match[1]; // name of the variable
            const samplerType = match[2]; // sampler or sampler_comparison
            const suffixLessLength = name.length - `Sampler`.length;
            const textureName = name.lastIndexOf(`Sampler`) === suffixLessLength ? name.substring(0, suffixLessLength) : null;
            const samplerBindingType = samplerType === "sampler_comparison" ? "comparison" /* WebGPUConstants.SamplerBindingType.Comparison */  : "filtering" /* WebGPUConstants.SamplerBindingType.Filtering */ ;
            if (textureName) {
                const textureInfo = this._webgpuProcessingContext.availableTextures[textureName];
                if (textureInfo) {
                    textureInfo.autoBindSampler = true;
                }
            }
            let samplerInfo = this._webgpuProcessingContext.availableSamplers[name];
            if (!samplerInfo) {
                samplerInfo = {
                    binding: this._webgpuProcessingContext.getNextFreeUBOBinding(),
                    type: samplerBindingType
                };
                this._webgpuProcessingContext.availableSamplers[name] = samplerInfo;
            }
            this._addSamplerBindingDescription(name, samplerInfo, isVertex);
            const part1 = code.substring(0, match.index);
            const insertPart = `@group(${samplerInfo.binding.groupIndex}) @binding(${samplerInfo.binding.bindingIndex}) `;
            const part2 = code.substring(match.index);
            code = part1 + insertPart + part2;
            samplerRegexp.lastIndex += insertPart.length;
        }
        return code;
    }
    _processCustomBuffers(code, isVertex) {
        const instantiateBufferRegexp = /var<\s*(uniform|storage)\s*(,\s*(read|read_write)\s*)?>\s+(\S+)\s*:\s*(\S+)\s*;/gm;
        // eslint-disable-next-line no-constant-condition
        while(true){
            const match = instantiateBufferRegexp.exec(code);
            if (match === null) {
                break;
            }
            const type = match[1];
            const decoration = match[3];
            let name = match[4];
            const structName = match[5];
            let bufferInfo = this._webgpuProcessingContext.availableBuffers[name];
            if (!bufferInfo) {
                const knownUBO = type === "uniform" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuShaderProcessingContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGPUShaderProcessingContext"].KnownUBOs[structName] : null;
                let binding;
                if (knownUBO) {
                    name = structName;
                    binding = knownUBO.binding;
                    if (binding.groupIndex === -1) {
                        binding = this._webgpuProcessingContext.availableBuffers[name]?.binding;
                        if (!binding) {
                            binding = this._webgpuProcessingContext.getNextFreeUBOBinding();
                        }
                    }
                } else {
                    binding = this._webgpuProcessingContext.getNextFreeUBOBinding();
                }
                bufferInfo = {
                    binding
                };
                this._webgpuProcessingContext.availableBuffers[name] = bufferInfo;
            }
            this._addBufferBindingDescription(name, this._webgpuProcessingContext.availableBuffers[name], decoration === "read_write" ? "storage" /* WebGPUConstants.BufferBindingType.Storage */  : type === "storage" ? "read-only-storage" /* WebGPUConstants.BufferBindingType.ReadOnlyStorage */  : "uniform" /* WebGPUConstants.BufferBindingType.Uniform */ , isVertex);
            const groupIndex = bufferInfo.binding.groupIndex;
            const bindingIndex = bufferInfo.binding.bindingIndex;
            const part1 = code.substring(0, match.index);
            const insertPart = `@group(${groupIndex}) @binding(${bindingIndex}) `;
            const part2 = code.substring(match.index);
            code = part1 + insertPart + part2;
            instantiateBufferRegexp.lastIndex += insertPart.length;
        }
        return code;
    }
    _processStridedUniformArrays(code) {
        for (const uniformArrayName of this._stridedUniformArrays){
            code = code.replace(new RegExp(`${uniformArrayName}\\s*\\[(.*?)\\]`, "g"), `${uniformArrayName}[$1].el`);
        }
        return code;
    }
} //# sourceMappingURL=webgpuShaderProcessorsWGSL.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/webgpuHardwareTexture.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WebGPUHardwareTexture",
    ()=>WebGPUHardwareTexture
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.scalar.functions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuTextureHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/webgpuTextureHelper.js [app-client] (ecmascript)");
;
;
class WebGPUHardwareTexture {
    get underlyingResource() {
        return this._webgpuTexture;
    }
    getMSAATexture(index) {
        return this._webgpuMSAATexture?.[index] ?? null;
    }
    setMSAATexture(texture, index) {
        if (!this._webgpuMSAATexture) {
            this._webgpuMSAATexture = [];
        }
        this._webgpuMSAATexture[index] = texture;
    }
    releaseMSAATexture(index) {
        if (this._webgpuMSAATexture) {
            if (index !== undefined) {
                this._engine._textureHelper.releaseTexture(this._webgpuMSAATexture[index]);
                delete this._webgpuMSAATexture[index];
            } else {
                for (const texture of this._webgpuMSAATexture){
                    this._engine._textureHelper.releaseTexture(texture);
                }
                this._webgpuMSAATexture = null;
            }
        }
    }
    constructor(_engine, existingTexture = null){
        this._engine = _engine;
        /** @internal */ this._originalFormatIsRGB = false;
        this.format = "rgba8unorm" /* WebGPUConstants.TextureFormat.RGBA8Unorm */ ;
        this.textureUsages = 0;
        this.textureAdditionalUsages = 0;
        this._webgpuTexture = existingTexture;
        this._webgpuMSAATexture = null;
        this.view = null;
        this.viewForWriting = null;
    }
    set(hardwareTexture) {
        this._webgpuTexture = hardwareTexture;
    }
    setUsage(_textureSource, generateMipMaps, is2DArray, isCube, is3D, width, height, depth) {
        let viewDimension = "2d" /* WebGPUConstants.TextureViewDimension.E2d */ ;
        let arrayLayerCount = 1;
        if (isCube) {
            viewDimension = is2DArray ? "cube-array" /* WebGPUConstants.TextureViewDimension.CubeArray */  : "cube" /* WebGPUConstants.TextureViewDimension.Cube */ ;
            arrayLayerCount = 6 * (depth || 1);
        } else if (is3D) {
            viewDimension = "3d" /* WebGPUConstants.TextureViewDimension.E3d */ ;
            arrayLayerCount = 1;
        } else if (is2DArray) {
            viewDimension = "2d-array" /* WebGPUConstants.TextureViewDimension.E2dArray */ ;
            arrayLayerCount = depth;
        }
        const format = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuTextureHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGPUTextureHelper"].GetDepthFormatOnly(this.format);
        const aspect = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuTextureHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGPUTextureHelper"].HasDepthAndStencilAspects(this.format) ? "depth-only" /* WebGPUConstants.TextureAspect.DepthOnly */  : "all" /* WebGPUConstants.TextureAspect.All */ ;
        this.createView({
            label: `TextureView${is3D ? "3D" : isCube ? "Cube" : "2D"}${is2DArray ? "_Array" + arrayLayerCount : ""}_${width}x${height}_${generateMipMaps ? "wmips" : "womips"}_${this.format}_${viewDimension}`,
            format,
            dimension: viewDimension,
            mipLevelCount: generateMipMaps ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ILog2"])(Math.max(width, height)) + 1 : 1,
            baseArrayLayer: 0,
            baseMipLevel: 0,
            arrayLayerCount,
            aspect
        });
    }
    createView(descriptor, createViewForWriting = false) {
        this.view = this._webgpuTexture.createView(descriptor);
        if (createViewForWriting && descriptor) {
            const saveNumMipMaps = descriptor.mipLevelCount;
            descriptor.mipLevelCount = 1;
            this.viewForWriting = this._webgpuTexture.createView(descriptor);
            descriptor.mipLevelCount = saveNumMipMaps;
        }
    }
    reset() {
        this._webgpuTexture = null;
        this._webgpuMSAATexture = null;
        this.view = null;
        this.viewForWriting = null;
    }
    release() {
        this._webgpuTexture?.destroy();
        this.releaseMSAATexture();
        this._copyInvertYTempTexture?.destroy();
        this.reset();
    }
} //# sourceMappingURL=webgpuHardwareTexture.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/webgpuTextureManager.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/naming-convention */ /* eslint-disable babylonjs/available */ /* eslint-disable jsdoc/require-jsdoc */ // License for the mipmap generation code:
//
// Copyright 2020 Brandon Jones
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
__turbopack_context__.s([
    "WebGPUTextureManager",
    ()=>WebGPUTextureManager,
    "renderableTextureFormatToIndex",
    ()=>renderableTextureFormatToIndex
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/webgpuConstants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuHardwareTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/webgpuHardwareTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuTextureHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/webgpuTextureHelper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Processors$2f$shaderProcessor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Processors/shaderProcessor.js [app-client] (ecmascript)");
;
;
;
;
// TODO WEBGPU improve mipmap generation by using compute shaders
const mipmapVertexSource = `
    const pos = array<vec2<f32>, 4>( vec2f(-1.0f, 1.0f),  vec2f(1.0f, 1.0f),  vec2f(-1.0f, -1.0f),  vec2f(1.0f, -1.0f));
    const tex = array<vec2<f32>, 4>( vec2f(0.0f, 0.0f),  vec2f(1.0f, 0.0f),  vec2f(0.0f, 1.0f),  vec2f(1.0f, 1.0f));

    varying vTex: vec2f;

    @vertex
    fn main(input : VertexInputs) -> FragmentInputs {
        vertexOutputs.vTex = tex[input.vertexIndex];
        vertexOutputs.position = vec4f(pos[input.vertexIndex], 0.0, 1.0);
    }
    `;
const mipmapFragmentSource = `
    var imgSampler: sampler;
    var img: texture_2d<f32>;

    varying vTex: vec2f;

    @fragment
    fn main(input: FragmentInputs) -> FragmentOutputs {
        fragmentOutputs.color = textureSample(img, imgSampler, input.vTex);
    }
    `;
const invertYPreMultiplyAlphaVertexSource = `
    const pos = array<vec2<f32>, 4>( vec2f(-1.0f, 1.0f),  vec2f(1.0f, 1.0f),  vec2f(-1.0f, -1.0f),  vec2f(1.0f, -1.0f));
    const tex = array<vec2<f32>, 4>( vec2f(0.0f, 0.0f),  vec2f(1.0f, 0.0f),  vec2f(0.0f, 1.0f),  vec2f(1.0f, 1.0f));

    var img: texture_2d<f32>;

    #ifdef INVERTY
        varying vTextureSize: vec2f;
    #endif

    @vertex
    fn main(input : VertexInputs) -> FragmentInputs {
        #ifdef INVERTY
            vertexOutputs.vTextureSize = vec2f(textureDimensions(img, 0));
        #endif
        vertexOutputs.position =  vec4f(pos[input.vertexIndex], 0.0, 1.0);
    }
    `;
const invertYPreMultiplyAlphaFragmentSource = `
    var img: texture_2d<f32>;

    #ifdef INVERTY
        varying vTextureSize: vec2f;
    #endif

    @fragment
    fn main(input: FragmentInputs) -> FragmentOutputs {
    #ifdef INVERTY
        var color: vec4f = textureLoad(img, vec2i(i32(input.position.x), i32(input.vTextureSize.y - input.position.y)), 0);
    #else
        var color: vec4f = textureLoad(img, vec2i(input.position.xy), 0);
    #endif
    #ifdef PREMULTIPLYALPHA
        color = vec4f(color.rgb * color.a, color.a);
    #endif
        fragmentOutputs.color = color;
    }
    `;
const invertYPreMultiplyAlphaWithOfstVertexSource = invertYPreMultiplyAlphaVertexSource;
const invertYPreMultiplyAlphaWithOfstFragmentSource = `
    var img: texture_2d<f32>;
    uniform ofstX: f32;
    uniform ofstY: f32;
    uniform width: f32;
    uniform height: f32;

    #ifdef INVERTY
        varying vTextureSize: vec2f;
    #endif

    @fragment
    fn main(input: FragmentInputs) -> FragmentOutputs {
        if (input.position.x < uniforms.ofstX || input.position.x >= uniforms.ofstX + uniforms.width) {
            discard;
        }
        if (input.position.y < uniforms.ofstY || input.position.y >= uniforms.ofstY + uniforms.height) {
            discard;
        }
    #ifdef INVERTY
        var color: vec4f = textureLoad(img, vec2i(i32(input.position.x), i32(uniforms.ofstY + uniforms.height - (input.position.y - uniforms.ofstY))), 0);
    #else
        var color: vec4f = textureLoad(img, vec2i(input.position.xy), 0);
    #endif
    #ifdef PREMULTIPLYALPHA
        color = vec4f(color.rgb * color.a, color.a);
    #endif
        fragmentOutputs.color = color;
    }
    `;
const clearVertexSource = `
    const pos = array<vec2<f32>, 4>( vec2f(-1.0f, 1.0f),  vec2f(1.0f, 1.0f),  vec2f(-1.0f, -1.0f),  vec2f(1.0f, -1.0f));

    @vertex
    fn main(input : VertexInputs) -> FragmentInputs {
        vertexOutputs.position =  vec4f(pos[input.vertexIndex], 0.0, 1.0);
    }
    `;
const clearFragmentSource = `
    uniform color: vec4f;

    @fragment
    fn main(input: FragmentInputs) -> FragmentOutputs {
        fragmentOutputs.color = uniforms.color;
    }
    `;
const copyVideoToTextureVertexSource = `
    struct VertexOutput {
        @builtin(position) Position : vec4<f32>,
        @location(0) fragUV : vec2<f32>
    }

    @vertex
    fn main(
        @builtin(vertex_index) VertexIndex : u32
    ) -> VertexOutput {
        var pos = array<vec2<f32>, 4>(
            vec2(-1.0,  1.0),
            vec2( 1.0,  1.0),
            vec2(-1.0, -1.0),
            vec2( 1.0, -1.0)
        );
        var tex = array<vec2<f32>, 4>(
            vec2(0.0, 0.0),
            vec2(1.0, 0.0),
            vec2(0.0, 1.0),
            vec2(1.0, 1.0)
        );

        var output: VertexOutput;

        output.Position = vec4<f32>(pos[VertexIndex], 0.0, 1.0);
        output.fragUV = tex[VertexIndex];

        return output;
    }
    `;
const copyVideoToTextureFragmentSource = `
    @group(0) @binding(0) var videoSampler: sampler;
    @group(0) @binding(1) var videoTexture: texture_external;

    @fragment
    fn main(
        @location(0) fragUV: vec2<f32>
    ) -> @location(0) vec4<f32> {
        return textureSampleBaseClampToEdge(videoTexture, videoSampler, fragUV);
    }
    `;
const copyVideoToTextureInvertYFragmentSource = `
    @group(0) @binding(0) var videoSampler: sampler;
    @group(0) @binding(1) var videoTexture: texture_external;

    @fragment
    fn main(
        @location(0) fragUV: vec2<f32>
    ) -> @location(0) vec4<f32> {
        return textureSampleBaseClampToEdge(videoTexture, videoSampler, vec2<f32>(fragUV.x, 1.0 - fragUV.y));
    }
    `;
const resolveDepthVertexSource = `
    const pos = array<vec2<f32>, 4>( vec2f(-1.0f, 1.0f),  vec2f(1.0f, 1.0f),  vec2f(-1.0f, -1.0f),  vec2f(1.0f, -1.0f));

    @vertex
    fn main(input : VertexInputs) -> FragmentInputs {
        vertexOutputs.position = vec4f(pos[input.vertexIndex], 0.0, 1.0);
    }
    `;
const resolveDepthFragmentSource = `
    var msaaDepthTexture: texture_depth_multisampled_2d;

    @fragment
    fn main(input: FragmentInputs) -> FragmentOutputs {
    #ifdef USE_MIN
        let numSamples = textureNumSamples(msaaDepthTexture);
        var depth = 1.0;

        for (var i = 0u; i < numSamples; i = i + 1u) {
            depth = min(depth, textureLoad(msaaDepthTexture, vec2u(input.position.xy), i));
        }
        
        fragmentOutputs.color = vec4f(depth);
    #else
        fragmentOutputs.color = vec4f(textureLoad(msaaDepthTexture, vec2u(input.position.xy), 0)); // do like WebGL, take the first sample
    #endif
    }
    `;
var PipelineType;
(function(PipelineType) {
    PipelineType[PipelineType["MipMap"] = 0] = "MipMap";
    PipelineType[PipelineType["InvertYPremultiplyAlpha"] = 1] = "InvertYPremultiplyAlpha";
    PipelineType[PipelineType["Clear"] = 2] = "Clear";
    PipelineType[PipelineType["InvertYPremultiplyAlphaWithOfst"] = 3] = "InvertYPremultiplyAlphaWithOfst";
    PipelineType[PipelineType["ResolveDepth"] = 4] = "ResolveDepth";
})(PipelineType || (PipelineType = {}));
var VideoPipelineType;
(function(VideoPipelineType) {
    VideoPipelineType[VideoPipelineType["DontInvertY"] = 0] = "DontInvertY";
    VideoPipelineType[VideoPipelineType["InvertY"] = 1] = "InvertY";
})(VideoPipelineType || (VideoPipelineType = {}));
const shadersForPipelineType = [
    {
        vertex: mipmapVertexSource,
        fragment: mipmapFragmentSource
    },
    {
        vertex: invertYPreMultiplyAlphaVertexSource,
        fragment: invertYPreMultiplyAlphaFragmentSource
    },
    {
        vertex: clearVertexSource,
        fragment: clearFragmentSource
    },
    {
        vertex: invertYPreMultiplyAlphaWithOfstVertexSource,
        fragment: invertYPreMultiplyAlphaWithOfstFragmentSource
    },
    {
        vertex: resolveDepthVertexSource,
        fragment: resolveDepthFragmentSource
    }
];
const renderableTextureFormatToIndex = {
    "": 0,
    r8unorm: 1,
    r8uint: 2,
    r8sint: 3,
    r16uint: 4,
    r16sint: 5,
    r16float: 6,
    rg8unorm: 7,
    rg8uint: 8,
    rg8sint: 9,
    r32uint: 10,
    r32sint: 11,
    r32float: 12,
    rg16uint: 13,
    rg16sint: 14,
    rg16float: 15,
    rgba8unorm: 16,
    "rgba8unorm-srgb": 17,
    rgba8uint: 18,
    rgba8sint: 19,
    bgra8unorm: 20,
    "bgra8unorm-srgb": 21,
    rgb10a2uint: 22,
    rgb10a2unorm: 23,
    /* rg11b10ufloat: this entry is dynamically added if the "RG11B10UFloatRenderable" extension is supported */ rg32uint: 24,
    rg32sint: 25,
    rg32float: 26,
    rgba16uint: 27,
    rgba16sint: 28,
    rgba16float: 29,
    rgba32uint: 30,
    rgba32sint: 31,
    rgba32float: 32,
    stencil8: 33,
    depth16unorm: 34,
    depth24plus: 35,
    "depth24plus-stencil8": 36,
    depth32float: 37,
    "depth32float-stencil8": 38,
    r16unorm: 39,
    rg16unorm: 40,
    rgba16unorm: 41,
    r16snorm: 42,
    rg16snorm: 43,
    rgba16snorm: 44
};
class WebGPUTextureManager {
    //------------------------------------------------------------------------------
    //                         Initialization / Helpers
    //------------------------------------------------------------------------------
    constructor(engine, device, bufferManager, enabledExtensions){
        this._pipelines = {};
        this._compiledShaders = [];
        this._videoPipelines = {};
        this._videoCompiledShaders = [];
        this._deferredReleaseTextures = [];
        this._engine = engine;
        this._device = device;
        this._bufferManager = bufferManager;
        if (enabledExtensions.indexOf("rg11b10ufloat-renderable" /* WebGPUConstants.FeatureName.RG11B10UFloatRenderable */ ) !== -1) {
            const keys = Object.keys(renderableTextureFormatToIndex);
            renderableTextureFormatToIndex["rg11b10ufloat" /* WebGPUConstants.TextureFormat.RG11B10UFloat */ ] = renderableTextureFormatToIndex[keys[keys.length - 1]] + 1;
        }
        this._mipmapSampler = device.createSampler({
            minFilter: "linear" /* WebGPUConstants.FilterMode.Linear */ 
        });
        this._videoSampler = device.createSampler({
            minFilter: "linear" /* WebGPUConstants.FilterMode.Linear */ 
        });
        this._ubCopyWithOfst = this._bufferManager.createBuffer(4 * 4, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferUsage"].Uniform | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferUsage"].CopyDst, "UBCopyWithOffset").underlyingResource;
        this._getPipeline("rgba8unorm" /* WebGPUConstants.TextureFormat.RGBA8Unorm */ );
        this._getVideoPipeline("rgba8unorm" /* WebGPUConstants.TextureFormat.RGBA8Unorm */ );
    }
    _getPipeline(format, type = PipelineType.MipMap, params) {
        const index = type === PipelineType.MipMap ? 1 << 0 : type === PipelineType.InvertYPremultiplyAlpha ? ((params.invertY ? 1 : 0) << 1) + ((params.premultiplyAlpha ? 1 : 0) << 2) : type === PipelineType.Clear ? 1 << 3 : type === PipelineType.InvertYPremultiplyAlphaWithOfst ? ((params.invertY ? 1 : 0) << 4) + ((params.premultiplyAlpha ? 1 : 0) << 5) : type === PipelineType.ResolveDepth ? 1 << 6 : 0;
        if (!this._pipelines[format]) {
            this._pipelines[format] = [];
        }
        let pipelineAndBGL = this._pipelines[format][index];
        if (!pipelineAndBGL) {
            let defines = "";
            if (type === PipelineType.InvertYPremultiplyAlpha || type === PipelineType.InvertYPremultiplyAlphaWithOfst) {
                if (params.invertY) {
                    defines += "#define INVERTY\n";
                }
                if (params.premultiplyAlpha) {
                    defines += "#define PREMULTIPLYALPHA\n";
                }
            }
            let modules = this._compiledShaders[index];
            if (!modules) {
                let vertexCode = shadersForPipelineType[type].vertex;
                let fragmentCode = shadersForPipelineType[type].fragment;
                const processorOptions = {
                    defines: defines.split("\n"),
                    indexParameters: null,
                    isFragment: false,
                    shouldUseHighPrecisionShader: true,
                    processor: this._engine._getShaderProcessor(1 /* ShaderLanguage.WGSL */ ),
                    supportsUniformBuffers: true,
                    shadersRepository: "",
                    includesShadersStore: {},
                    version: (this._engine.version * 100).toString(),
                    platformName: this._engine.shaderPlatformName,
                    processingContext: this._engine._getShaderProcessingContext(1 /* ShaderLanguage.WGSL */ , true),
                    isNDCHalfZRange: this._engine.isNDCHalfZRange,
                    useReverseDepthBuffer: this._engine.useReverseDepthBuffer
                };
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Processors$2f$shaderProcessor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Initialize"])(processorOptions);
                // Disable special additions not needed here
                processorOptions.processor.pureMode = true;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Processors$2f$shaderProcessor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Process"])(vertexCode, processorOptions, (migratedVertexCode)=>{
                    vertexCode = migratedVertexCode;
                }, this._engine);
                processorOptions.isFragment = true;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Processors$2f$shaderProcessor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Process"])(fragmentCode, processorOptions, (migratedFragmentCode)=>{
                    fragmentCode = migratedFragmentCode;
                }, this._engine);
                const final = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Processors$2f$shaderProcessor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Finalize"])(vertexCode, fragmentCode, processorOptions);
                // Restore
                processorOptions.processor.pureMode = false;
                const vertexModule = this._device.createShaderModule({
                    label: `BabylonWebGPUDevice${this._engine.uniqueId}_InternalVertexShader_${index}`,
                    code: final.vertexCode
                });
                const fragmentModule = this._device.createShaderModule({
                    label: `BabylonWebGPUDevice${this._engine.uniqueId}_InternalFragmentShader_${index}`,
                    code: final.fragmentCode
                });
                modules = this._compiledShaders[index] = [
                    vertexModule,
                    fragmentModule
                ];
            }
            const pipeline = this._device.createRenderPipeline({
                label: `BabylonWebGPUDevice${this._engine.uniqueId}_InternalPipeline_${format}_${index}`,
                layout: "auto" /* WebGPUConstants.AutoLayoutMode.Auto */ ,
                vertex: {
                    module: modules[0],
                    entryPoint: "main"
                },
                fragment: {
                    module: modules[1],
                    entryPoint: "main",
                    targets: [
                        {
                            format
                        }
                    ]
                },
                primitive: {
                    topology: "triangle-strip" /* WebGPUConstants.PrimitiveTopology.TriangleStrip */ ,
                    stripIndexFormat: "uint16" /* WebGPUConstants.IndexFormat.Uint16 */ 
                }
            });
            pipelineAndBGL = this._pipelines[format][index] = [
                pipeline,
                pipeline.getBindGroupLayout(0)
            ];
        }
        return pipelineAndBGL;
    }
    _getVideoPipeline(format, type = VideoPipelineType.DontInvertY) {
        const index = type === VideoPipelineType.InvertY ? 1 << 0 : 0;
        if (!this._videoPipelines[format]) {
            this._videoPipelines[format] = [];
        }
        let pipelineAndBGL = this._videoPipelines[format][index];
        if (!pipelineAndBGL) {
            let modules = this._videoCompiledShaders[index];
            if (!modules) {
                const vertexModule = this._device.createShaderModule({
                    code: copyVideoToTextureVertexSource,
                    label: `BabylonWebGPUDevice${this._engine.uniqueId}_CopyVideoToTexture_VertexShader`
                });
                const fragmentModule = this._device.createShaderModule({
                    code: index === 0 ? copyVideoToTextureFragmentSource : copyVideoToTextureInvertYFragmentSource,
                    label: `BabylonWebGPUDevice${this._engine.uniqueId}_CopyVideoToTexture_FragmentShader_${index === 0 ? "DontInvertY" : "InvertY"}`
                });
                modules = this._videoCompiledShaders[index] = [
                    vertexModule,
                    fragmentModule
                ];
            }
            const pipeline = this._device.createRenderPipeline({
                label: `BabylonWebGPUDevice${this._engine.uniqueId}_InternalVideoPipeline_${format}_${index === 0 ? "DontInvertY" : "InvertY"}`,
                layout: "auto" /* WebGPUConstants.AutoLayoutMode.Auto */ ,
                vertex: {
                    module: modules[0],
                    entryPoint: "main"
                },
                fragment: {
                    module: modules[1],
                    entryPoint: "main",
                    targets: [
                        {
                            format
                        }
                    ]
                },
                primitive: {
                    topology: "triangle-strip" /* WebGPUConstants.PrimitiveTopology.TriangleStrip */ ,
                    stripIndexFormat: "uint16" /* WebGPUConstants.IndexFormat.Uint16 */ 
                }
            });
            pipelineAndBGL = this._videoPipelines[format][index] = [
                pipeline,
                pipeline.getBindGroupLayout(0)
            ];
        }
        return pipelineAndBGL;
    }
    setCommandEncoder(encoder) {
        this._commandEncoderForCreation = encoder;
    }
    copyVideoToTexture(video, texture, format, invertY = false, commandEncoder) {
        const useOwnCommandEncoder = commandEncoder === undefined;
        const [pipeline, bindGroupLayout] = this._getVideoPipeline(format, invertY ? VideoPipelineType.InvertY : VideoPipelineType.DontInvertY);
        if (useOwnCommandEncoder) {
            commandEncoder = this._device.createCommandEncoder({});
        }
        commandEncoder.pushDebugGroup?.(`copy video to texture - invertY=${invertY}`);
        const webgpuHardwareTexture = texture._hardwareTexture;
        const renderPassDescriptor = {
            label: `BabylonWebGPUDevice${this._engine.uniqueId}_copyVideoToTexture_${format}_${invertY ? "InvertY" : "DontInvertY"}${texture.label ? "_" + texture.label : ""}`,
            colorAttachments: [
                {
                    view: webgpuHardwareTexture.underlyingResource.createView({
                        format,
                        dimension: "2d" /* WebGPUConstants.TextureViewDimension.E2d */ ,
                        mipLevelCount: 1,
                        baseArrayLayer: 0,
                        baseMipLevel: 0,
                        arrayLayerCount: 1,
                        aspect: "all" /* WebGPUConstants.TextureAspect.All */ 
                    }),
                    loadOp: "load" /* WebGPUConstants.LoadOp.Load */ ,
                    storeOp: "store" /* WebGPUConstants.StoreOp.Store */ 
                }
            ]
        };
        const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);
        const descriptor = {
            layout: bindGroupLayout,
            entries: [
                {
                    binding: 0,
                    resource: this._videoSampler
                },
                {
                    binding: 1,
                    resource: this._device.importExternalTexture({
                        source: video.underlyingResource
                    })
                }
            ]
        };
        const bindGroup = this._device.createBindGroup(descriptor);
        passEncoder.setPipeline(pipeline);
        passEncoder.setBindGroup(0, bindGroup);
        passEncoder.draw(4, 1, 0, 0);
        passEncoder.end();
        commandEncoder.popDebugGroup?.();
        if (useOwnCommandEncoder) {
            this._device.queue.submit([
                commandEncoder.finish()
            ]);
            commandEncoder = null;
        }
    }
    invertYPreMultiplyAlpha(gpuOrHdwTexture, width, height, format, invertY = false, premultiplyAlpha = false, faceIndex = 0, mipLevel = 0, layers = 1, ofstX = 0, ofstY = 0, rectWidth = 0, rectHeight = 0, commandEncoder, // eslint-disable-next-line @typescript-eslint/no-unused-vars
    allowGPUOptimization) {
        const useRect = rectWidth !== 0;
        const useOwnCommandEncoder = commandEncoder === undefined;
        const [pipeline, bindGroupLayout] = this._getPipeline(format, useRect ? PipelineType.InvertYPremultiplyAlphaWithOfst : PipelineType.InvertYPremultiplyAlpha, {
            invertY,
            premultiplyAlpha
        });
        faceIndex = Math.max(faceIndex, 0);
        if (useOwnCommandEncoder) {
            commandEncoder = this._device.createCommandEncoder({});
        }
        commandEncoder.pushDebugGroup?.(`internal process texture - invertY=${invertY} premultiplyAlpha=${premultiplyAlpha}`);
        let gpuTexture;
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuTextureHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGPUTextureHelper"].IsHardwareTexture(gpuOrHdwTexture)) {
            gpuTexture = gpuOrHdwTexture.underlyingResource;
            if (!(invertY && !premultiplyAlpha && layers === 1 && faceIndex === 0)) {
                // we optimize only for the most likely case (invertY=true, premultiplyAlpha=false, layers=1, faceIndex=0) to avoid dealing with big caches
                gpuOrHdwTexture = undefined;
            }
        } else {
            gpuTexture = gpuOrHdwTexture;
            gpuOrHdwTexture = undefined;
        }
        if (!gpuTexture) {
            return;
        }
        if (useRect) {
            this._bufferManager.setRawData(this._ubCopyWithOfst, 0, new Float32Array([
                ofstX,
                ofstY,
                rectWidth,
                rectHeight
            ]), 0, 4 * 4);
        }
        const webgpuHardwareTexture = gpuOrHdwTexture;
        const outputTexture = webgpuHardwareTexture?._copyInvertYTempTexture ?? this.createTexture({
            width,
            height,
            layers: 1
        }, false, false, false, false, false, format, 1, commandEncoder, 1 /* WebGPUConstants.TextureUsage.CopySrc */  | 16 /* WebGPUConstants.TextureUsage.RenderAttachment */  | 4 /* WebGPUConstants.TextureUsage.TextureBinding */ , undefined, "TempTextureForCopyWithInvertY");
        const renderPassDescriptor = webgpuHardwareTexture?._copyInvertYRenderPassDescr ?? {
            label: `BabylonWebGPUDevice${this._engine.uniqueId}_invertYPreMultiplyAlpha_${format}_${invertY ? "InvertY" : "DontInvertY"}_${premultiplyAlpha ? "PremultiplyAlpha" : "DontPremultiplyAlpha"}`,
            colorAttachments: [
                {
                    view: outputTexture.createView({
                        format,
                        dimension: "2d" /* WebGPUConstants.TextureViewDimension.E2d */ ,
                        baseMipLevel: 0,
                        mipLevelCount: 1,
                        arrayLayerCount: 1,
                        baseArrayLayer: 0
                    }),
                    loadOp: "load" /* WebGPUConstants.LoadOp.Load */ ,
                    storeOp: "store" /* WebGPUConstants.StoreOp.Store */ 
                }
            ]
        };
        const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);
        let bindGroup = useRect ? webgpuHardwareTexture?._copyInvertYBindGroupWithOfst : webgpuHardwareTexture?._copyInvertYBindGroup;
        if (!bindGroup) {
            const descriptor = {
                layout: bindGroupLayout,
                entries: [
                    {
                        binding: 0,
                        resource: gpuTexture.createView({
                            format,
                            dimension: "2d" /* WebGPUConstants.TextureViewDimension.E2d */ ,
                            baseMipLevel: mipLevel,
                            mipLevelCount: 1,
                            arrayLayerCount: layers,
                            baseArrayLayer: faceIndex
                        })
                    }
                ]
            };
            if (useRect) {
                descriptor.entries.push({
                    binding: 1,
                    resource: {
                        buffer: this._ubCopyWithOfst
                    }
                });
            }
            bindGroup = this._device.createBindGroup(descriptor);
        }
        passEncoder.setPipeline(pipeline);
        passEncoder.setBindGroup(0, bindGroup);
        passEncoder.draw(4, 1, 0, 0);
        passEncoder.end();
        commandEncoder.copyTextureToTexture({
            texture: outputTexture
        }, {
            texture: gpuTexture,
            mipLevel,
            origin: {
                x: 0,
                y: 0,
                z: faceIndex
            }
        }, {
            width: rectWidth || width,
            height: rectHeight || height,
            depthOrArrayLayers: 1
        });
        if (webgpuHardwareTexture) {
            webgpuHardwareTexture._copyInvertYTempTexture = outputTexture;
            webgpuHardwareTexture._copyInvertYRenderPassDescr = renderPassDescriptor;
            if (useRect) {
                webgpuHardwareTexture._copyInvertYBindGroupWithOfst = bindGroup;
            } else {
                webgpuHardwareTexture._copyInvertYBindGroup = bindGroup;
            }
        } else {
            this._deferredReleaseTextures.push([
                outputTexture,
                null
            ]);
        }
        commandEncoder.popDebugGroup?.();
        if (useOwnCommandEncoder) {
            this._device.queue.submit([
                commandEncoder.finish()
            ]);
            commandEncoder = null;
        }
    }
    //------------------------------------------------------------------------------
    //                               Creation
    //------------------------------------------------------------------------------
    createTexture(imageBitmap, hasMipmaps = false, generateMipmaps = false, invertY = false, premultiplyAlpha = false, is3D = false, format = "rgba8unorm" /* WebGPUConstants.TextureFormat.RGBA8Unorm */ , sampleCount = 1, commandEncoder, usage = -1, additionalUsages = 0, label) {
        sampleCount = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuTextureHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGPUTextureHelper"].GetSample(sampleCount);
        const layerCount = imageBitmap.layers || 1;
        const textureSize = {
            width: imageBitmap.width,
            height: imageBitmap.height,
            depthOrArrayLayers: layerCount
        };
        const renderAttachmentFlag = renderableTextureFormatToIndex[format] ? 16 /* WebGPUConstants.TextureUsage.RenderAttachment */  : 0;
        const isCompressedFormat = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuTextureHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGPUTextureHelper"].IsCompressedFormat(format);
        const mipLevelCount = hasMipmaps ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuTextureHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGPUTextureHelper"].ComputeNumMipmapLevels(imageBitmap.width, imageBitmap.height) : 1;
        const usages = usage >= 0 ? usage : 1 /* WebGPUConstants.TextureUsage.CopySrc */  | 2 /* WebGPUConstants.TextureUsage.CopyDst */  | 4 /* WebGPUConstants.TextureUsage.TextureBinding */ ;
        additionalUsages |= hasMipmaps && !isCompressedFormat ? 1 /* WebGPUConstants.TextureUsage.CopySrc */  | renderAttachmentFlag : 0;
        if (!isCompressedFormat && !is3D) {
            // we don't know in advance if the texture will be updated with copyExternalImageToTexture (which requires to have those flags), so we need to force the flags all the times
            additionalUsages |= renderAttachmentFlag | 2 /* WebGPUConstants.TextureUsage.CopyDst */ ;
        }
        const gpuTexture = this._device.createTexture({
            label: `BabylonWebGPUDevice${this._engine.uniqueId}_Texture${is3D ? "3D" : "2D"}_${label ? label + "_" : ""}${textureSize.width}x${textureSize.height}x${textureSize.depthOrArrayLayers}_${hasMipmaps ? "wmips" : "womips"}_${format}_samples${sampleCount}`,
            size: textureSize,
            dimension: is3D ? "3d" /* WebGPUConstants.TextureDimension.E3d */  : "2d" /* WebGPUConstants.TextureDimension.E2d */ ,
            format,
            usage: usages | additionalUsages,
            sampleCount,
            mipLevelCount
        });
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuTextureHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGPUTextureHelper"].IsImageBitmap(imageBitmap)) {
            this.updateTexture(imageBitmap, gpuTexture, imageBitmap.width, imageBitmap.height, layerCount, format, 0, 0, invertY, premultiplyAlpha, 0, 0);
            if (hasMipmaps && generateMipmaps) {
                this.generateMipmaps(gpuTexture, format, mipLevelCount, 0, is3D, commandEncoder);
            }
        }
        return gpuTexture;
    }
    createCubeTexture(imageBitmaps, hasMipmaps = false, generateMipmaps = false, invertY = false, premultiplyAlpha = false, format = "rgba8unorm" /* WebGPUConstants.TextureFormat.RGBA8Unorm */ , sampleCount = 1, commandEncoder, usage = -1, additionalUsages = 0, label) {
        sampleCount = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuTextureHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGPUTextureHelper"].GetSample(sampleCount);
        const width = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuTextureHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGPUTextureHelper"].IsImageBitmapArray(imageBitmaps) ? imageBitmaps[0].width : imageBitmaps.width;
        const height = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuTextureHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGPUTextureHelper"].IsImageBitmapArray(imageBitmaps) ? imageBitmaps[0].height : imageBitmaps.height;
        const renderAttachmentFlag = renderableTextureFormatToIndex[format] ? 16 /* WebGPUConstants.TextureUsage.RenderAttachment */  : 0;
        const isCompressedFormat = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuTextureHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGPUTextureHelper"].IsCompressedFormat(format);
        const mipLevelCount = hasMipmaps ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuTextureHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGPUTextureHelper"].ComputeNumMipmapLevels(width, height) : 1;
        const usages = usage >= 0 ? usage : 1 /* WebGPUConstants.TextureUsage.CopySrc */  | 2 /* WebGPUConstants.TextureUsage.CopyDst */  | 4 /* WebGPUConstants.TextureUsage.TextureBinding */ ;
        additionalUsages |= hasMipmaps && !isCompressedFormat ? 1 /* WebGPUConstants.TextureUsage.CopySrc */  | renderAttachmentFlag : 0;
        if (!isCompressedFormat) {
            // we don't know in advance if the texture will be updated with copyExternalImageToTexture (which requires to have those flags), so we need to force the flags all the times
            additionalUsages |= renderAttachmentFlag | 2 /* WebGPUConstants.TextureUsage.CopyDst */ ;
        }
        const gpuTexture = this._device.createTexture({
            label: `BabylonWebGPUDevice${this._engine.uniqueId}_TextureCube_${label ? label + "_" : ""}${width}x${height}x6_${hasMipmaps ? "wmips" : "womips"}_${format}_samples${sampleCount}`,
            size: {
                width,
                height,
                depthOrArrayLayers: 6
            },
            dimension: "2d" /* WebGPUConstants.TextureDimension.E2d */ ,
            format,
            usage: usages | additionalUsages,
            sampleCount,
            mipLevelCount
        });
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuTextureHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGPUTextureHelper"].IsImageBitmapArray(imageBitmaps)) {
            this.updateCubeTextures(imageBitmaps, gpuTexture, width, height, format, invertY, premultiplyAlpha, 0, 0);
            if (hasMipmaps && generateMipmaps) {
                this.generateCubeMipmaps(gpuTexture, format, mipLevelCount, commandEncoder);
            }
        }
        return gpuTexture;
    }
    generateCubeMipmaps(gpuTexture, format, mipLevelCount, commandEncoder) {
        const useOwnCommandEncoder = commandEncoder === undefined;
        if (useOwnCommandEncoder) {
            commandEncoder = this._device.createCommandEncoder({});
        }
        commandEncoder.pushDebugGroup?.(`create cube mipmaps - ${mipLevelCount} levels`);
        for(let f = 0; f < 6; ++f){
            this.generateMipmaps(gpuTexture, format, mipLevelCount, f, false, commandEncoder);
        }
        commandEncoder.popDebugGroup?.();
        if (useOwnCommandEncoder) {
            this._device.queue.submit([
                commandEncoder.finish()
            ]);
            commandEncoder = null;
        }
    }
    generateMipmaps(gpuOrHdwTexture, format, mipLevelCount, faceIndex = 0, is3D = false, commandEncoder) {
        const useOwnCommandEncoder = commandEncoder === undefined;
        const [pipeline, bindGroupLayout] = this._getPipeline(format);
        faceIndex = Math.max(faceIndex, 0);
        if (useOwnCommandEncoder) {
            commandEncoder = this._device.createCommandEncoder({});
        }
        commandEncoder.pushDebugGroup?.(`create mipmaps for face #${faceIndex} - ${mipLevelCount} levels`);
        let gpuTexture;
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuTextureHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGPUTextureHelper"].IsHardwareTexture(gpuOrHdwTexture)) {
            gpuTexture = gpuOrHdwTexture.underlyingResource;
            gpuOrHdwTexture._mipmapGenRenderPassDescr = gpuOrHdwTexture._mipmapGenRenderPassDescr || [];
            gpuOrHdwTexture._mipmapGenBindGroup = gpuOrHdwTexture._mipmapGenBindGroup || [];
        } else {
            gpuTexture = gpuOrHdwTexture;
            gpuOrHdwTexture = undefined;
        }
        if (!gpuTexture) {
            return;
        }
        const webgpuHardwareTexture = gpuOrHdwTexture;
        for(let i = 1; i < mipLevelCount; ++i){
            const renderPassDescriptor = webgpuHardwareTexture?._mipmapGenRenderPassDescr[faceIndex]?.[i - 1] ?? {
                label: `BabylonWebGPUDevice${this._engine.uniqueId}_generateMipmaps_${format}_faceIndex${faceIndex}_level${i}`,
                colorAttachments: [
                    {
                        view: gpuTexture.createView({
                            format,
                            dimension: is3D ? "3d" /* WebGPUConstants.TextureViewDimension.E3d */  : "2d" /* WebGPUConstants.TextureViewDimension.E2d */ ,
                            baseMipLevel: i,
                            mipLevelCount: 1,
                            arrayLayerCount: 1,
                            baseArrayLayer: faceIndex
                        }),
                        loadOp: "load" /* WebGPUConstants.LoadOp.Load */ ,
                        storeOp: "store" /* WebGPUConstants.StoreOp.Store */ 
                    }
                ]
            };
            if (webgpuHardwareTexture) {
                webgpuHardwareTexture._mipmapGenRenderPassDescr[faceIndex] = webgpuHardwareTexture._mipmapGenRenderPassDescr[faceIndex] || [];
                webgpuHardwareTexture._mipmapGenRenderPassDescr[faceIndex][i - 1] = renderPassDescriptor;
            }
            const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);
            const bindGroup = webgpuHardwareTexture?._mipmapGenBindGroup[faceIndex]?.[i - 1] ?? this._device.createBindGroup({
                layout: bindGroupLayout,
                entries: [
                    {
                        binding: 0,
                        resource: gpuTexture.createView({
                            format,
                            dimension: is3D ? "3d" /* WebGPUConstants.TextureViewDimension.E3d */  : "2d" /* WebGPUConstants.TextureViewDimension.E2d */ ,
                            baseMipLevel: i - 1,
                            mipLevelCount: 1,
                            arrayLayerCount: 1,
                            baseArrayLayer: faceIndex
                        })
                    },
                    {
                        binding: 1,
                        resource: this._mipmapSampler
                    }
                ]
            });
            if (webgpuHardwareTexture) {
                webgpuHardwareTexture._mipmapGenBindGroup[faceIndex] = webgpuHardwareTexture._mipmapGenBindGroup[faceIndex] || [];
                webgpuHardwareTexture._mipmapGenBindGroup[faceIndex][i - 1] = bindGroup;
            }
            passEncoder.setPipeline(pipeline);
            passEncoder.setBindGroup(0, bindGroup);
            passEncoder.draw(4, 1, 0, 0);
            passEncoder.end();
        }
        commandEncoder.popDebugGroup?.();
        if (useOwnCommandEncoder) {
            this._device.queue.submit([
                commandEncoder.finish()
            ]);
            commandEncoder = null;
        }
    }
    createGPUTextureForInternalTexture(texture, width, height, depth, creationFlags, dontCreateMSAATexture) {
        if (!texture._hardwareTexture) {
            texture._hardwareTexture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuHardwareTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGPUHardwareTexture"](this._engine);
        }
        if (width === undefined) {
            width = texture.width;
        }
        if (height === undefined) {
            height = texture.height;
        }
        if (depth === undefined) {
            depth = texture.depth;
        }
        texture.width = texture.baseWidth = width;
        texture.height = texture.baseHeight = height;
        texture.depth = texture.baseDepth = depth;
        const gpuTextureWrapper = texture._hardwareTexture;
        const isStorageTexture = ((creationFlags ?? 0) & 1) !== 0;
        gpuTextureWrapper.format = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuTextureHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGPUTextureHelper"].GetWebGPUTextureFormat(texture.type, texture.format, texture._useSRGBBuffer);
        if (!dontCreateMSAATexture) {
            this.createMSAATexture(texture, texture.samples);
        }
        if (texture.samples > 1) {
            // In case of a MSAA texture, the current texture will be the "resolve" texture, which cannot have a depth format
            switch(gpuTextureWrapper.format){
                case "depth16unorm" /* WebGPUConstants.TextureFormat.Depth16Unorm */ :
                    gpuTextureWrapper.format = "r16unorm" /* WebGPUConstants.TextureFormat.R16Unorm */ ;
                    break;
                case "depth24plus" /* WebGPUConstants.TextureFormat.Depth24Plus */ :
                case "depth24plus-stencil8" /* WebGPUConstants.TextureFormat.Depth24PlusStencil8 */ :
                case "depth32float" /* WebGPUConstants.TextureFormat.Depth32Float */ :
                case "depth32float-stencil8" /* WebGPUConstants.TextureFormat.Depth32FloatStencil8 */ :
                    gpuTextureWrapper.format = "r32float" /* WebGPUConstants.TextureFormat.R32Float */ ;
                    break;
            }
        }
        gpuTextureWrapper.textureUsages = texture._source === 5 /* InternalTextureSource.RenderTarget */  || texture.source === 6 /* InternalTextureSource.MultiRenderTarget */  ? 4 /* WebGPUConstants.TextureUsage.TextureBinding */  | 1 /* WebGPUConstants.TextureUsage.CopySrc */  | 16 /* WebGPUConstants.TextureUsage.RenderAttachment */  : texture._source === 12 /* InternalTextureSource.DepthStencil */  ? 4 /* WebGPUConstants.TextureUsage.TextureBinding */  | 16 /* WebGPUConstants.TextureUsage.RenderAttachment */  : -1;
        gpuTextureWrapper.textureAdditionalUsages = isStorageTexture ? 8 /* WebGPUConstants.TextureUsage.StorageBinding */  : 0;
        const hasMipMaps = texture.generateMipMaps;
        const layerCount = depth || 1;
        let mipmapCount;
        if (texture._maxLodLevel !== null) {
            mipmapCount = texture._maxLodLevel;
        } else {
            mipmapCount = hasMipMaps ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuTextureHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGPUTextureHelper"].ComputeNumMipmapLevels(width, height) : 1;
        }
        if (texture.isCube) {
            const gpuTexture = this.createCubeTexture({
                width,
                height
            }, texture.generateMipMaps, texture.generateMipMaps, texture.invertY, false, gpuTextureWrapper.format, 1, this._commandEncoderForCreation, gpuTextureWrapper.textureUsages, gpuTextureWrapper.textureAdditionalUsages, texture.label);
            gpuTextureWrapper.set(gpuTexture);
            const arrayLayerCount = texture.is3D ? 1 : layerCount;
            const format = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuTextureHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGPUTextureHelper"].GetDepthFormatOnly(gpuTextureWrapper.format);
            const aspect = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuTextureHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGPUTextureHelper"].HasDepthAndStencilAspects(gpuTextureWrapper.format) ? "depth-only" /* WebGPUConstants.TextureAspect.DepthOnly */  : "all" /* WebGPUConstants.TextureAspect.All */ ;
            const dimension = texture.is2DArray ? "cube-array" /* WebGPUConstants.TextureViewDimension.CubeArray */  : "cube" /* WebGPUConstants.TextureViewDimension.Cube */ ;
            gpuTextureWrapper.createView({
                label: `BabylonWebGPUDevice${this._engine.uniqueId}_TextureViewCube${texture.is2DArray ? "_Array" + arrayLayerCount : ""}_${width}x${height}_${hasMipMaps ? "wmips" : "womips"}_${format}_${dimension}_${aspect}_${texture.label ?? "noname"}`,
                format,
                dimension,
                mipLevelCount: mipmapCount,
                baseArrayLayer: 0,
                baseMipLevel: 0,
                arrayLayerCount: 6,
                aspect
            }, isStorageTexture);
        } else {
            const gpuTexture = this.createTexture({
                width,
                height,
                layers: layerCount
            }, texture.generateMipMaps, texture.generateMipMaps, texture.invertY, false, texture.is3D, gpuTextureWrapper.format, 1, this._commandEncoderForCreation, gpuTextureWrapper.textureUsages, gpuTextureWrapper.textureAdditionalUsages, texture.label);
            gpuTextureWrapper.set(gpuTexture);
            const arrayLayerCount = texture.is3D ? 1 : layerCount;
            const format = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuTextureHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGPUTextureHelper"].GetDepthFormatOnly(gpuTextureWrapper.format);
            const aspect = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuTextureHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGPUTextureHelper"].HasDepthAndStencilAspects(gpuTextureWrapper.format) ? "depth-only" /* WebGPUConstants.TextureAspect.DepthOnly */  : "all" /* WebGPUConstants.TextureAspect.All */ ;
            const dimension = texture.is2DArray ? "2d-array" /* WebGPUConstants.TextureViewDimension.E2dArray */  : texture.is3D ? "3d" /* WebGPUConstants.TextureDimension.E3d */  : "2d" /* WebGPUConstants.TextureViewDimension.E2d */ ;
            gpuTextureWrapper.createView({
                label: `BabylonWebGPUDevice${this._engine.uniqueId}_TextureView${texture.is3D ? "3D" : "2D"}${texture.is2DArray ? "_Array" + arrayLayerCount : ""}_${width}x${height}${texture.is3D ? "x" + layerCount : ""}_${hasMipMaps ? "wmips" : "womips"}_${format}_${dimension}_${aspect}_${texture.label ?? "noname"}`,
                format,
                dimension,
                mipLevelCount: mipmapCount,
                baseArrayLayer: 0,
                baseMipLevel: 0,
                arrayLayerCount,
                aspect
            }, isStorageTexture);
        }
        return gpuTextureWrapper;
    }
    createMSAATexture(texture, samples, releaseExisting = true, index = 0) {
        const gpuTextureWrapper = texture._hardwareTexture;
        if (releaseExisting) {
            gpuTextureWrapper?.releaseMSAATexture();
        }
        if (!gpuTextureWrapper || (samples ?? 1) <= 1) {
            return;
        }
        const width = texture.width;
        const height = texture.height;
        const gpuMSAATexture = this.createTexture({
            width,
            height,
            layers: 1
        }, false, false, false, false, false, gpuTextureWrapper.format, samples, this._commandEncoderForCreation, 16 /* WebGPUConstants.TextureUsage.RenderAttachment */  | 4 /* WebGPUConstants.TextureUsage.TextureBinding */ , 0, texture.label ? "MSAA_" + texture.label : "MSAA");
        gpuTextureWrapper.setMSAATexture(gpuMSAATexture, index);
    }
    resolveMSAADepthTexture(msaaTexture, outputTexture, commandEncoder) {
        const format = outputTexture.format;
        const useOwnCommandEncoder = commandEncoder === undefined;
        const [pipeline, bindGroupLayout] = this._getPipeline(format, PipelineType.ResolveDepth);
        if (useOwnCommandEncoder) {
            commandEncoder = this._device.createCommandEncoder({});
        }
        commandEncoder.pushDebugGroup(`resolve MSAA Depth texture${msaaTexture.label ? " - " + msaaTexture.label : ""}`);
        const renderPassDescriptor = {
            label: `BabylonWebGPUDevice${this._engine.uniqueId}_resolveMSAADepthTexture${msaaTexture.label ? "_" + msaaTexture.label : ""}`,
            colorAttachments: [
                {
                    view: outputTexture,
                    loadOp: "load" /* WebGPUConstants.LoadOp.Load */ ,
                    storeOp: "store" /* WebGPUConstants.StoreOp.Store */ 
                }
            ]
        };
        const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);
        const descriptor = {
            layout: bindGroupLayout,
            entries: [
                {
                    binding: 0,
                    resource: msaaTexture.createView({
                        format: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuTextureHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGPUTextureHelper"].GetDepthFormatOnly(msaaTexture.format),
                        dimension: "2d" /* WebGPUConstants.TextureViewDimension.E2d */ ,
                        mipLevelCount: 1,
                        baseArrayLayer: 0,
                        baseMipLevel: 0,
                        arrayLayerCount: 1,
                        aspect: "depth-only" /* WebGPUConstants.TextureAspect.DepthOnly */ 
                    })
                }
            ]
        };
        const bindGroup = this._device.createBindGroup(descriptor);
        passEncoder.setPipeline(pipeline);
        passEncoder.setBindGroup(0, bindGroup);
        passEncoder.draw(4, 1, 0, 0);
        passEncoder.end();
        commandEncoder.popDebugGroup();
        if (useOwnCommandEncoder) {
            this._device.queue.submit([
                commandEncoder.finish()
            ]);
            commandEncoder = null;
        }
    }
    //------------------------------------------------------------------------------
    //                                  Update
    //------------------------------------------------------------------------------
    updateCubeTextures(imageBitmaps, gpuTexture, width, height, format, invertY = false, premultiplyAlpha = false, offsetX = 0, offsetY = 0) {
        const faces = [
            0,
            3,
            1,
            4,
            2,
            5
        ];
        for(let f = 0; f < faces.length; ++f){
            const imageBitmap = imageBitmaps[faces[f]];
            this.updateTexture(imageBitmap, gpuTexture, width, height, 1, format, f, 0, invertY, premultiplyAlpha, offsetX, offsetY);
        }
    }
    // TODO WEBGPU handle data source not being in the same format than the destination texture?
    updateTexture(imageBitmap, texture, width, height, layers, format, faceIndex = 0, mipLevel = 0, invertY = false, premultiplyAlpha = false, offsetX = 0, offsetY = 0, allowGPUOptimization) {
        const gpuTexture = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuTextureHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGPUTextureHelper"].IsInternalTexture(texture) ? texture._hardwareTexture.underlyingResource : texture;
        const blockInformation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuTextureHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGPUTextureHelper"].GetBlockInformationFromFormat(format);
        const gpuOrHdwTexture = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuTextureHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGPUTextureHelper"].IsInternalTexture(texture) ? texture._hardwareTexture : texture;
        const textureCopyView = {
            texture: gpuTexture,
            origin: {
                x: offsetX,
                y: offsetY,
                z: Math.max(faceIndex, 0)
            },
            mipLevel: mipLevel,
            premultipliedAlpha: premultiplyAlpha
        };
        const textureExtent = {
            width: Math.ceil(width / blockInformation.width) * blockInformation.width,
            height: Math.ceil(height / blockInformation.height) * blockInformation.height,
            depthOrArrayLayers: layers || 1
        };
        if (imageBitmap.byteLength !== undefined) {
            imageBitmap = imageBitmap;
            const bytesPerRow = Math.ceil(width / blockInformation.width) * blockInformation.length;
            const aligned = Math.ceil(bytesPerRow / 256) * 256 === bytesPerRow;
            if (aligned) {
                const commandEncoder = this._device.createCommandEncoder({});
                const buffer = this._bufferManager.createRawBuffer(imageBitmap.byteLength, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferUsage"].MapWrite | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferUsage"].CopySrc, true, "TempBufferForUpdateTexture" + (gpuTexture ? "_" + gpuTexture.label : ""));
                const arrayBuffer = buffer.getMappedRange();
                new Uint8Array(arrayBuffer).set(imageBitmap);
                buffer.unmap();
                commandEncoder.copyBufferToTexture({
                    buffer: buffer,
                    offset: 0,
                    bytesPerRow,
                    rowsPerImage: textureExtent.height / blockInformation.height
                }, textureCopyView, textureExtent);
                this._device.queue.submit([
                    commandEncoder.finish()
                ]);
                this._bufferManager.releaseBuffer(buffer);
            } else {
                this._device.queue.writeTexture(textureCopyView, imageBitmap, {
                    offset: 0,
                    bytesPerRow,
                    rowsPerImage: textureExtent.height / blockInformation.height
                }, textureExtent);
            }
            if (invertY || premultiplyAlpha) {
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuTextureHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGPUTextureHelper"].IsInternalTexture(texture)) {
                    const dontUseRect = offsetX === 0 && offsetY === 0 && width === texture.width && height === texture.height;
                    this.invertYPreMultiplyAlpha(gpuOrHdwTexture, texture.width, texture.height, format, invertY, premultiplyAlpha, faceIndex, mipLevel, layers || 1, offsetX, offsetY, dontUseRect ? 0 : width, dontUseRect ? 0 : height, undefined, allowGPUOptimization);
                } else {
                    // we should never take this code path
                    // eslint-disable-next-line no-throw-literal
                    throw "updateTexture: Can't process the texture data because a GPUTexture was provided instead of an InternalTexture!";
                }
            }
        } else {
            imageBitmap = imageBitmap;
            this._device.queue.copyExternalImageToTexture({
                source: imageBitmap,
                flipY: invertY
            }, textureCopyView, textureExtent);
        }
    }
    // eslint-disable-next-line @typescript-eslint/promise-function-async
    readPixels(texture, x, y, width, height, format, faceIndex = 0, mipLevel = 0, buffer = null, noDataConversion = false) {
        const blockInformation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuTextureHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGPUTextureHelper"].GetBlockInformationFromFormat(format);
        const bytesPerRow = Math.ceil(width / blockInformation.width) * blockInformation.length;
        const bytesPerRowAligned = Math.ceil(bytesPerRow / 256) * 256;
        const size = bytesPerRowAligned * height;
        const gpuBuffer = this._bufferManager.createRawBuffer(size, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferUsage"].MapRead | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferUsage"].CopyDst, undefined, "TempBufferForReadPixels" + (texture.label ? "_" + texture.label : ""));
        const commandEncoder = this._device.createCommandEncoder({});
        commandEncoder.copyTextureToBuffer({
            texture,
            mipLevel,
            origin: {
                x,
                y,
                z: Math.max(faceIndex, 0)
            }
        }, {
            buffer: gpuBuffer,
            offset: 0,
            bytesPerRow: bytesPerRowAligned
        }, {
            width,
            height,
            depthOrArrayLayers: 1
        });
        this._device.queue.submit([
            commandEncoder.finish()
        ]);
        return this._bufferManager.readDataFromBuffer(gpuBuffer, size, width, height, bytesPerRow, bytesPerRowAligned, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuTextureHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGPUTextureHelper"].GetTextureTypeFromFormat(format), 0, buffer, true, noDataConversion);
    }
    //------------------------------------------------------------------------------
    //                              Dispose
    //------------------------------------------------------------------------------
    releaseTexture(texture) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuTextureHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGPUTextureHelper"].IsInternalTexture(texture)) {
            const hardwareTexture = texture._hardwareTexture;
            const irradianceTexture = texture._irradianceTexture;
            // We can't destroy the objects just now because they could be used in the current frame - we delay the destroying after the end of the frame
            this._deferredReleaseTextures.push([
                hardwareTexture,
                irradianceTexture
            ]);
        } else {
            this._deferredReleaseTextures.push([
                texture,
                null
            ]);
        }
    }
    destroyDeferredTextures() {
        for(let i = 0; i < this._deferredReleaseTextures.length; ++i){
            const [hardwareTexture, irradianceTexture] = this._deferredReleaseTextures[i];
            if (hardwareTexture) {
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuTextureHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGPUTextureHelper"].IsHardwareTexture(hardwareTexture)) {
                    hardwareTexture.release();
                } else {
                    hardwareTexture.destroy();
                }
            }
            irradianceTexture?.dispose();
        }
        this._deferredReleaseTextures.length = 0;
    }
} //# sourceMappingURL=webgpuTextureManager.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/webgpuBufferManager.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WebGPUBufferManager",
    ()=>WebGPUBufferManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$WebGPU$2f$webgpuDataBuffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/WebGPU/webgpuDataBuffer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$textureTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/textureTools.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/abstractEngine.functions.js [app-client] (ecmascript)");
// eslint-disable-next-line @typescript-eslint/naming-convention
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/webgpuConstants.js [app-client] (ecmascript)");
;
;
;
;
class WebGPUBufferManager {
    static _IsGPUBuffer(buffer) {
        return buffer.underlyingResource === undefined;
    }
    static _FlagsToString(flags, suffix = "") {
        let result = suffix;
        for(let i = 0; i <= 9; ++i){
            if (flags & 1 << i) {
                if (result) {
                    result += "_";
                }
                result += __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferUsage"][1 << i];
            }
        }
        return result;
    }
    constructor(engine, device){
        this._deferredReleaseBuffers = [];
        this._engine = engine;
        this._device = device;
    }
    createRawBuffer(viewOrSize, flags, mappedAtCreation = false, label) {
        const alignedLength = viewOrSize.byteLength !== undefined ? viewOrSize.byteLength + 3 & ~3 : viewOrSize + 3 & ~3; // 4 bytes alignments (because of the upload which requires this)
        const verticesBufferDescriptor = {
            label: "BabylonWebGPUDevice" + this._engine.uniqueId + "_" + WebGPUBufferManager._FlagsToString(flags, label ?? "Buffer") + "_size" + alignedLength,
            mappedAtCreation,
            size: alignedLength,
            usage: flags
        };
        return this._device.createBuffer(verticesBufferDescriptor);
    }
    createBuffer(viewOrSize, flags, label) {
        const isView = viewOrSize.byteLength !== undefined;
        const dataBuffer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$WebGPU$2f$webgpuDataBuffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGPUDataBuffer"]();
        const labelId = "DataBufferUniqueId=" + dataBuffer.uniqueId;
        dataBuffer.buffer = this.createRawBuffer(viewOrSize, flags, undefined, label ? labelId + "-" + label : labelId);
        dataBuffer.references = 1;
        dataBuffer.capacity = isView ? viewOrSize.byteLength : viewOrSize;
        dataBuffer.engineId = this._engine.uniqueId;
        if (isView) {
            this.setSubData(dataBuffer, 0, viewOrSize);
        }
        return dataBuffer;
    }
    // This calls GPUBuffer.writeBuffer() with no alignment corrections
    // dstByteOffset and byteLength must both be aligned to 4 bytes and bytes moved must be within src and dst arrays
    setRawData(buffer, dstByteOffset, src, srcByteOffset, byteLength) {
        srcByteOffset += src.byteOffset;
        this._device.queue.writeBuffer(buffer, dstByteOffset, src.buffer, srcByteOffset, byteLength);
    }
    // This calls GPUBuffer.writeBuffer() with alignment corrections (dstByteOffset and byteLength will be aligned to 4 byte boundaries)
    // If alignment is needed, src must be a full copy of dataBuffer, or at least should be large enough to cope with the additional bytes copied because of alignment!
    setSubData(dataBuffer, dstByteOffset, src, srcByteOffset = 0, byteLength = 0) {
        const buffer = dataBuffer.underlyingResource;
        byteLength = byteLength || src.byteLength - srcByteOffset;
        // Make sure the dst offset is aligned to 4 bytes
        const startPre = dstByteOffset & 3;
        srcByteOffset -= startPre;
        dstByteOffset -= startPre;
        // Make sure the byte length is aligned to 4 bytes
        const originalByteLength = byteLength;
        byteLength = byteLength + startPre + 3 & ~3;
        // Check if the backing buffer of src is large enough to cope with the additional bytes copied because of alignment
        const backingBufferSize = src.buffer.byteLength - src.byteOffset;
        if (backingBufferSize < byteLength) {
            // Not enough place in the backing buffer for the aligned copy.
            // Creates a new buffer and copy the source data to it.
            // The buffer will have byteLength - originalByteLength zeros at the end.
            const tmpBuffer = new Uint8Array(byteLength);
            tmpBuffer.set(new Uint8Array(src.buffer, src.byteOffset + srcByteOffset, originalByteLength));
            src = tmpBuffer;
            srcByteOffset = 0;
        }
        this.setRawData(buffer, dstByteOffset, src, srcByteOffset, byteLength);
    }
    _getHalfFloatAsFloatRGBAArrayBuffer(dataLength, arrayBuffer, destArray) {
        if (!destArray) {
            destArray = new Float32Array(dataLength);
        } else {
            dataLength = Math.min(dataLength, destArray.length);
        }
        const srcData = new Uint16Array(arrayBuffer);
        while(dataLength--){
            destArray[dataLength] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$textureTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FromHalfFloat"])(srcData[dataLength]);
        }
        return destArray;
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention, @typescript-eslint/promise-function-async
    readDataFromBuffer(gpuBuffer, size, width, height, bytesPerRow, bytesPerRowAligned, type = 0, offset = 0, buffer = null, destroyBuffer = true, noDataConversion = false) {
        const floatFormat = type === 1 ? 2 : type === 2 ? 1 : 0;
        const engineId = this._engine.uniqueId;
        return new Promise((resolve, reject)=>{
            // eslint-disable-next-line github/no-then
            gpuBuffer.mapAsync(1 /* WebGPUConstants.MapMode.Read */ , offset, size).then(()=>{
                const copyArrayBuffer = gpuBuffer.getMappedRange(offset, size);
                let data = buffer;
                if (noDataConversion) {
                    if (data === null) {
                        data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["allocateAndCopyTypedBuffer"])(type, size, true, copyArrayBuffer);
                    } else {
                        data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["allocateAndCopyTypedBuffer"])(type, data.buffer, undefined, copyArrayBuffer);
                    }
                } else {
                    if (data === null) {
                        switch(floatFormat){
                            case 0:
                                data = new Uint8Array(size);
                                data.set(new Uint8Array(copyArrayBuffer));
                                break;
                            case 1:
                                // TODO WEBGPU use computer shaders (or render pass) to make the conversion?
                                data = this._getHalfFloatAsFloatRGBAArrayBuffer(size / 2, copyArrayBuffer);
                                break;
                            case 2:
                                data = new Float32Array(size / 4);
                                data.set(new Float32Array(copyArrayBuffer));
                                break;
                        }
                    } else {
                        switch(floatFormat){
                            case 0:
                                data = new Uint8Array(data.buffer);
                                data.set(new Uint8Array(copyArrayBuffer, 0, Math.min(data.byteLength, size)));
                                break;
                            case 1:
                                // TODO WEBGPU use computer shaders (or render pass) to make the conversion?
                                data = this._getHalfFloatAsFloatRGBAArrayBuffer(size / 2, copyArrayBuffer, buffer);
                                break;
                            case 2:
                                data = new Float32Array(data.buffer);
                                data.set(new Float32Array(copyArrayBuffer, 0, data.byteLength / 4));
                                break;
                        }
                    }
                }
                if (bytesPerRow !== bytesPerRowAligned) {
                    // TODO WEBGPU use computer shaders (or render pass) to build the final buffer data?
                    if (floatFormat === 1 && !noDataConversion) {
                        // half float have been converted to float above
                        bytesPerRow *= 2;
                        bytesPerRowAligned *= 2;
                    }
                    const data2 = new Uint8Array(data.buffer);
                    let offset = bytesPerRow, offset2 = 0;
                    for(let y = 1; y < height; ++y){
                        offset2 = y * bytesPerRowAligned;
                        for(let x = 0; x < bytesPerRow; ++x){
                            data2[offset++] = data2[offset2++];
                        }
                    }
                    if (floatFormat !== 0 && !noDataConversion) {
                        data = new Float32Array(data2.buffer, 0, offset / 4);
                    } else {
                        data = new Uint8Array(data2.buffer, 0, offset);
                    }
                }
                gpuBuffer.unmap();
                if (destroyBuffer) {
                    this.releaseBuffer(gpuBuffer);
                }
                resolve(data);
            }, (reason)=>{
                if (this._engine.isDisposed || this._engine.uniqueId !== engineId) {
                    // The engine was disposed while waiting for the promise, or a context loss/restoration has occurred: don't reject
                    resolve(new Uint8Array());
                } else {
                    // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
                    reject(reason);
                }
            });
        });
    }
    releaseBuffer(buffer) {
        if (WebGPUBufferManager._IsGPUBuffer(buffer)) {
            this._deferredReleaseBuffers.push(buffer);
            return true;
        }
        buffer.references--;
        if (buffer.references === 0) {
            this._deferredReleaseBuffers.push(buffer.underlyingResource);
            return true;
        }
        return false;
    }
    destroyDeferredBuffers() {
        for(let i = 0; i < this._deferredReleaseBuffers.length; ++i){
            this._deferredReleaseBuffers[i].destroy();
        }
        this._deferredReleaseBuffers.length = 0;
    }
} //# sourceMappingURL=webgpuBufferManager.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/webgpuCacheSampler.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Note: we don't make a difference between mipmaps enabled or not when computing these bits (so, TEXTURE_NEAREST_NEAREST and TEXTURE_NEAREST_NEAREST_MIPNEAREST have the same bits, for example).
 * There's another bit in the hash code for that (see FilterNoMipToBits).
 */ __turbopack_context__.s([
    "WebGPUCacheSampler",
    ()=>WebGPUCacheSampler
]);
const FilterToBits = [
    0 | 0 << 1 | 0 << 2,
    0 | 0 << 1 | 0 << 2,
    1 | 1 << 1 | 0 << 2,
    1 | 1 << 1 | 1 << 2,
    0 | 0 << 1 | 0 << 2,
    0 | 1 << 1 | 0 << 2,
    0 | 1 << 1 | 1 << 2,
    0 | 1 << 1 | 0 << 2,
    0 | 0 << 1 | 1 << 2,
    1 | 0 << 1 | 0 << 2,
    1 | 0 << 1 | 1 << 2,
    1 | 1 << 1 | 0 << 2,
    1 | 0 << 1 | 0 << 2
];
// subtract 0x01FF from the comparison function value before indexing this array!
const ComparisonFunctionToBits = [
    0 << 3 | 0 << 4 | 0 << 5 | 0 << 6,
    0 << 3 | 0 << 4 | 0 << 5 | 1 << 6,
    0 << 3 | 0 << 4 | 1 << 5 | 0 << 6,
    0 << 3 | 0 << 4 | 1 << 5 | 1 << 6,
    0 << 3 | 1 << 4 | 0 << 5 | 0 << 6,
    0 << 3 | 1 << 4 | 0 << 5 | 1 << 6,
    0 << 3 | 1 << 4 | 1 << 5 | 0 << 6,
    0 << 3 | 1 << 4 | 1 << 5 | 1 << 6,
    1 << 3 | 0 << 4 | 0 << 5 | 0 << 6
];
const FilterNoMipToBits = [
    0 << 7,
    1 << 7,
    1 << 7,
    0 << 7,
    0 << 7,
    0 << 7,
    0 << 7,
    1 << 7,
    0 << 7,
    0 << 7,
    0 << 7,
    0 << 7,
    1 << 7
];
class WebGPUCacheSampler {
    constructor(device){
        this._samplers = {};
        this._device = device;
        this.disabled = false;
    }
    static GetSamplerHashCode(sampler) {
        // The WebGPU spec currently only allows values 1 and 4 for anisotropy
        const anisotropy = sampler._cachedAnisotropicFilteringLevel ? sampler._cachedAnisotropicFilteringLevel : 1;
        const code = FilterToBits[sampler.samplingMode] + ComparisonFunctionToBits[(sampler._comparisonFunction || 0x0202) - 0x0200 + 1] + FilterNoMipToBits[sampler.samplingMode] + // handle the lodMinClamp = lodMaxClamp = 0 case when no filter used for mip mapping
        ((sampler._cachedWrapU ?? 1) << 8) + ((sampler._cachedWrapV ?? 1) << 10) + ((sampler._cachedWrapR ?? 1) << 12) + ((sampler.useMipMaps ? 1 : 0) << 14) + // need to factor this in because _getSamplerFilterDescriptor depends on samplingMode AND useMipMaps!
        (anisotropy << 15);
        return code;
    }
    static _GetSamplerFilterDescriptor(sampler, anisotropy) {
        let magFilter, minFilter, mipmapFilter, lodMinClamp, lodMaxClamp;
        const useMipMaps = sampler.useMipMaps;
        switch(sampler.samplingMode){
            case 11:
                magFilter = "linear" /* WebGPUConstants.FilterMode.Linear */ ;
                minFilter = "linear" /* WebGPUConstants.FilterMode.Linear */ ;
                mipmapFilter = "nearest" /* WebGPUConstants.FilterMode.Nearest */ ;
                if (!useMipMaps) {
                    lodMinClamp = lodMaxClamp = 0;
                }
                break;
            case 3:
            case 3:
                magFilter = "linear" /* WebGPUConstants.FilterMode.Linear */ ;
                minFilter = "linear" /* WebGPUConstants.FilterMode.Linear */ ;
                if (!useMipMaps) {
                    mipmapFilter = "nearest" /* WebGPUConstants.FilterMode.Nearest */ ;
                    lodMinClamp = lodMaxClamp = 0;
                } else {
                    mipmapFilter = "linear" /* WebGPUConstants.FilterMode.Linear */ ;
                }
                break;
            case 8:
                magFilter = "nearest" /* WebGPUConstants.FilterMode.Nearest */ ;
                minFilter = "nearest" /* WebGPUConstants.FilterMode.Nearest */ ;
                if (!useMipMaps) {
                    mipmapFilter = "nearest" /* WebGPUConstants.FilterMode.Nearest */ ;
                    lodMinClamp = lodMaxClamp = 0;
                } else {
                    mipmapFilter = "linear" /* WebGPUConstants.FilterMode.Linear */ ;
                }
                break;
            case 4:
                magFilter = "nearest" /* WebGPUConstants.FilterMode.Nearest */ ;
                minFilter = "nearest" /* WebGPUConstants.FilterMode.Nearest */ ;
                mipmapFilter = "nearest" /* WebGPUConstants.FilterMode.Nearest */ ;
                if (!useMipMaps) {
                    lodMinClamp = lodMaxClamp = 0;
                }
                break;
            case 5:
                magFilter = "nearest" /* WebGPUConstants.FilterMode.Nearest */ ;
                minFilter = "linear" /* WebGPUConstants.FilterMode.Linear */ ;
                mipmapFilter = "nearest" /* WebGPUConstants.FilterMode.Nearest */ ;
                if (!useMipMaps) {
                    lodMinClamp = lodMaxClamp = 0;
                }
                break;
            case 6:
                magFilter = "nearest" /* WebGPUConstants.FilterMode.Nearest */ ;
                minFilter = "linear" /* WebGPUConstants.FilterMode.Linear */ ;
                if (!useMipMaps) {
                    mipmapFilter = "nearest" /* WebGPUConstants.FilterMode.Nearest */ ;
                    lodMinClamp = lodMaxClamp = 0;
                } else {
                    mipmapFilter = "linear" /* WebGPUConstants.FilterMode.Linear */ ;
                }
                break;
            case 7:
                magFilter = "nearest" /* WebGPUConstants.FilterMode.Nearest */ ;
                minFilter = "linear" /* WebGPUConstants.FilterMode.Linear */ ;
                mipmapFilter = "nearest" /* WebGPUConstants.FilterMode.Nearest */ ;
                lodMinClamp = lodMaxClamp = 0;
                break;
            case 1:
            case 1:
                magFilter = "nearest" /* WebGPUConstants.FilterMode.Nearest */ ;
                minFilter = "nearest" /* WebGPUConstants.FilterMode.Nearest */ ;
                mipmapFilter = "nearest" /* WebGPUConstants.FilterMode.Nearest */ ;
                lodMinClamp = lodMaxClamp = 0;
                break;
            case 9:
                magFilter = "linear" /* WebGPUConstants.FilterMode.Linear */ ;
                minFilter = "nearest" /* WebGPUConstants.FilterMode.Nearest */ ;
                mipmapFilter = "nearest" /* WebGPUConstants.FilterMode.Nearest */ ;
                if (!useMipMaps) {
                    lodMinClamp = lodMaxClamp = 0;
                }
                break;
            case 10:
                magFilter = "linear" /* WebGPUConstants.FilterMode.Linear */ ;
                minFilter = "nearest" /* WebGPUConstants.FilterMode.Nearest */ ;
                if (!useMipMaps) {
                    mipmapFilter = "nearest" /* WebGPUConstants.FilterMode.Nearest */ ;
                    lodMinClamp = lodMaxClamp = 0;
                } else {
                    mipmapFilter = "linear" /* WebGPUConstants.FilterMode.Linear */ ;
                }
                break;
            case 2:
            case 2:
                magFilter = "linear" /* WebGPUConstants.FilterMode.Linear */ ;
                minFilter = "linear" /* WebGPUConstants.FilterMode.Linear */ ;
                // In WebGL, if sampling mode is TEXTURE_BILINEAR_SAMPLINGMODE and anisotropy is greater than 1, anisotropy is enabled for the sampler
                if (anisotropy > 1) {
                    mipmapFilter = "linear" /* WebGPUConstants.FilterMode.Linear */ ;
                } else {
                    mipmapFilter = "nearest" /* WebGPUConstants.FilterMode.Nearest */ ;
                    lodMinClamp = lodMaxClamp = 0;
                }
                break;
            case 12:
                magFilter = "linear" /* WebGPUConstants.FilterMode.Linear */ ;
                minFilter = "nearest" /* WebGPUConstants.FilterMode.Nearest */ ;
                mipmapFilter = "nearest" /* WebGPUConstants.FilterMode.Nearest */ ;
                lodMinClamp = lodMaxClamp = 0;
                break;
            default:
                magFilter = "nearest" /* WebGPUConstants.FilterMode.Nearest */ ;
                minFilter = "nearest" /* WebGPUConstants.FilterMode.Nearest */ ;
                mipmapFilter = "nearest" /* WebGPUConstants.FilterMode.Nearest */ ;
                lodMinClamp = lodMaxClamp = 0;
                break;
        }
        if (anisotropy > 1 && (lodMinClamp !== 0 || lodMaxClamp !== 0)) {
            return {
                magFilter: "linear" /* WebGPUConstants.FilterMode.Linear */ ,
                minFilter: "linear" /* WebGPUConstants.FilterMode.Linear */ ,
                mipmapFilter: "linear" /* WebGPUConstants.FilterMode.Linear */ ,
                anisotropyEnabled: true
            };
        }
        return {
            magFilter,
            minFilter,
            mipmapFilter,
            lodMinClamp,
            lodMaxClamp
        };
    }
    static _GetWrappingMode(mode) {
        switch(mode){
            case 1:
                return "repeat" /* WebGPUConstants.AddressMode.Repeat */ ;
            case 0:
                return "clamp-to-edge" /* WebGPUConstants.AddressMode.ClampToEdge */ ;
            case 2:
                return "mirror-repeat" /* WebGPUConstants.AddressMode.MirrorRepeat */ ;
        }
        return "repeat" /* WebGPUConstants.AddressMode.Repeat */ ;
    }
    static _GetSamplerWrappingDescriptor(sampler) {
        return {
            addressModeU: this._GetWrappingMode(sampler._cachedWrapU),
            addressModeV: this._GetWrappingMode(sampler._cachedWrapV),
            addressModeW: this._GetWrappingMode(sampler._cachedWrapR)
        };
    }
    static _GetSamplerDescriptor(sampler, label) {
        // The check with 2 is to be iso with the WebGL implementation
        let anisotropy = (sampler.useMipMaps || sampler.samplingMode === 2) && sampler._cachedAnisotropicFilteringLevel ? sampler._cachedAnisotropicFilteringLevel : 1;
        // To be iso with the WebGL implementation
        if (sampler.samplingMode !== 11 && sampler.samplingMode !== 3 && sampler.samplingMode !== 2) {
            anisotropy = 1;
        }
        const filterDescriptor = this._GetSamplerFilterDescriptor(sampler, anisotropy);
        return {
            label,
            ...filterDescriptor,
            ...this._GetSamplerWrappingDescriptor(sampler),
            compare: sampler._comparisonFunction ? WebGPUCacheSampler.GetCompareFunction(sampler._comparisonFunction) : undefined,
            maxAnisotropy: filterDescriptor.anisotropyEnabled ? anisotropy : 1
        };
    }
    static GetCompareFunction(compareFunction) {
        switch(compareFunction){
            case 519:
                return "always" /* WebGPUConstants.CompareFunction.Always */ ;
            case 514:
                return "equal" /* WebGPUConstants.CompareFunction.Equal */ ;
            case 516:
                return "greater" /* WebGPUConstants.CompareFunction.Greater */ ;
            case 518:
                return "greater-equal" /* WebGPUConstants.CompareFunction.GreaterEqual */ ;
            case 513:
                return "less" /* WebGPUConstants.CompareFunction.Less */ ;
            case 515:
                return "less-equal" /* WebGPUConstants.CompareFunction.LessEqual */ ;
            case 512:
                return "never" /* WebGPUConstants.CompareFunction.Never */ ;
            case 517:
                return "not-equal" /* WebGPUConstants.CompareFunction.NotEqual */ ;
            default:
                return "less" /* WebGPUConstants.CompareFunction.Less */ ;
        }
    }
    getSampler(sampler, bypassCache = false, hash = 0, label) {
        if (this.disabled) {
            return this._device.createSampler(WebGPUCacheSampler._GetSamplerDescriptor(sampler, label));
        }
        if (bypassCache) {
            hash = 0;
        } else if (hash === 0) {
            hash = WebGPUCacheSampler.GetSamplerHashCode(sampler);
        }
        let gpuSampler = bypassCache ? undefined : this._samplers[hash];
        if (!gpuSampler) {
            gpuSampler = this._device.createSampler(WebGPUCacheSampler._GetSamplerDescriptor(sampler, label));
            if (!bypassCache) {
                this._samplers[hash] = gpuSampler;
            }
        }
        return gpuSampler;
    }
} //# sourceMappingURL=webgpuCacheSampler.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/webgpuCacheRenderPipeline.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/naming-convention */ /* eslint-disable babylonjs/available */ /* eslint-disable jsdoc/require-jsdoc */ __turbopack_context__.s([
    "WebGPUCacheRenderPipeline",
    ()=>WebGPUCacheRenderPipeline
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Buffers/buffer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuTextureHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/webgpuTextureHelper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuTextureManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/webgpuTextureManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$nonFloatVertexBuffers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Buffers/buffer.nonFloatVertexBuffers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-client] (ecmascript)");
;
;
;
;
;
var StatePosition;
(function(StatePosition) {
    StatePosition[StatePosition["StencilReadMask"] = 0] = "StencilReadMask";
    StatePosition[StatePosition["StencilWriteMask"] = 1] = "StencilWriteMask";
    //DepthBiasClamp = 1, // not used, so remove it to improve perf
    StatePosition[StatePosition["DepthBias"] = 2] = "DepthBias";
    StatePosition[StatePosition["DepthBiasSlopeScale"] = 3] = "DepthBiasSlopeScale";
    StatePosition[StatePosition["DepthStencilState"] = 4] = "DepthStencilState";
    StatePosition[StatePosition["MRTAttachments"] = 5] = "MRTAttachments";
    StatePosition[StatePosition["RasterizationState"] = 6] = "RasterizationState";
    StatePosition[StatePosition["ColorStates1"] = 7] = "ColorStates1";
    StatePosition[StatePosition["ColorStates2"] = 8] = "ColorStates2";
    StatePosition[StatePosition["ColorStates3"] = 9] = "ColorStates3";
    StatePosition[StatePosition["ColorStates4"] = 10] = "ColorStates4";
    StatePosition[StatePosition["ShaderStage"] = 11] = "ShaderStage";
    StatePosition[StatePosition["TextureStage"] = 12] = "TextureStage";
    StatePosition[StatePosition["VertexState"] = 13] = "VertexState";
    StatePosition[StatePosition["NumStates"] = 14] = "NumStates";
})(StatePosition || (StatePosition = {}));
const alphaBlendFactorToIndex = {
    0: 1,
    1: 2,
    0x0300: 3,
    0x0301: 4,
    0x0302: 5,
    0x0303: 6,
    0x0304: 7,
    0x0305: 8,
    0x0306: 9,
    0x0307: 10,
    0x0308: 11,
    0x8001: 12,
    0x8002: 13,
    0x8003: 14,
    0x8004: 15,
    0x88f9: 16,
    0x88fa: 17,
    0x8589: 18,
    0x88fb: 19
};
const alphaBlendEquationToIndex = {
    0x8006: 0,
    0x8007: 1,
    0x8008: 2,
    0x800a: 3,
    0x800b: 4
};
const stencilOpToIndex = {
    0x0000: 0,
    0x1e00: 1,
    0x1e01: 2,
    0x1e02: 3,
    0x1e03: 4,
    0x150a: 5,
    0x8507: 6,
    0x8508: 7
};
const colorStates = [
    0,
    0,
    0,
    0
];
class WebGPUCacheRenderPipeline {
    constructor(device, emptyVertexBuffer){
        this.mrtTextureCount = 0;
        this._device = device;
        this._useTextureStage = true; // we force usage because we must handle depth textures with "float" filtering, which can't be fixed by a caps (like "textureFloatLinearFiltering" can for float textures)
        this._states = new Array(30); // pre-allocate enough room so that no new allocation will take place afterwards
        this._statesLength = 0;
        this._stateDirtyLowestIndex = 0;
        this._emptyVertexBuffer = emptyVertexBuffer;
        this._mrtFormats = [];
        this._parameter = {
            token: undefined,
            pipeline: null
        };
        this.disabled = false;
        this.vertexBuffers = [];
        this._kMaxVertexBufferStride = device.limits.maxVertexBufferArrayStride || 2048;
        this.reset();
    }
    reset() {
        this._isDirty = true;
        this.vertexBuffers.length = 0;
        this.setAlphaToCoverage(false);
        this.resetDepthCullingState();
        this.setClampDepth(false);
        this.setDepthBias(0);
        //this.setDepthBiasClamp(0);
        this._webgpuColorFormat = [
            "bgra8unorm" /* WebGPUConstants.TextureFormat.BGRA8Unorm */ 
        ];
        this.setColorFormat("bgra8unorm" /* WebGPUConstants.TextureFormat.BGRA8Unorm */ );
        this.setMRT([]);
        this.setAlphaBlendEnabled([
            false
        ], 1);
        this.setAlphaBlendFactors([
            null,
            null,
            null,
            null
        ], [
            null,
            null
        ]);
        this.setWriteMask(0xf);
        this.setDepthStencilFormat("depth24plus-stencil8" /* WebGPUConstants.TextureFormat.Depth24PlusStencil8 */ );
        this.setStencilEnabled(false);
        this.resetStencilState();
        this.setBuffers(null, null, null);
        this._setTextureState(0);
    }
    get colorFormats() {
        return this._mrtAttachments > 0 ? this._mrtFormats : this._webgpuColorFormat;
    }
    getRenderPipeline(fillMode, effect, sampleCount, textureState = 0) {
        sampleCount = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuTextureHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGPUTextureHelper"].GetSample(sampleCount);
        if (this.disabled) {
            const topology = WebGPUCacheRenderPipeline._GetTopology(fillMode);
            this._setVertexState(effect); // to fill this.vertexBuffers with correct data
            this._setTextureState(textureState);
            this._parameter.pipeline = this._createRenderPipeline(effect, topology, sampleCount);
            WebGPUCacheRenderPipeline.NumCacheMiss++;
            WebGPUCacheRenderPipeline._NumPipelineCreationCurrentFrame++;
            return this._parameter.pipeline;
        }
        this._setShaderStage(effect.uniqueId);
        this._setRasterizationState(fillMode, sampleCount);
        this._setColorStates();
        this._setDepthStencilState();
        this._setVertexState(effect);
        this._setTextureState(textureState);
        this.lastStateDirtyLowestIndex = this._stateDirtyLowestIndex;
        if (!this._isDirty && this._parameter.pipeline) {
            this._stateDirtyLowestIndex = this._statesLength;
            WebGPUCacheRenderPipeline.NumCacheHitWithoutHash++;
            return this._parameter.pipeline;
        }
        this._getRenderPipeline(this._parameter);
        this._isDirty = false;
        this._stateDirtyLowestIndex = this._statesLength;
        if (this._parameter.pipeline) {
            WebGPUCacheRenderPipeline.NumCacheHitWithHash++;
            return this._parameter.pipeline;
        }
        const topology = WebGPUCacheRenderPipeline._GetTopology(fillMode);
        this._parameter.pipeline = this._createRenderPipeline(effect, topology, sampleCount);
        this._setRenderPipeline(this._parameter);
        WebGPUCacheRenderPipeline.NumCacheMiss++;
        WebGPUCacheRenderPipeline._NumPipelineCreationCurrentFrame++;
        return this._parameter.pipeline;
    }
    endFrame() {
        WebGPUCacheRenderPipeline.NumPipelineCreationLastFrame = WebGPUCacheRenderPipeline._NumPipelineCreationCurrentFrame;
        WebGPUCacheRenderPipeline._NumPipelineCreationCurrentFrame = 0;
    }
    setAlphaToCoverage(enabled) {
        this._alphaToCoverageEnabled = enabled;
    }
    setFrontFace(frontFace) {
        this._frontFace = frontFace;
    }
    setCullEnabled(enabled) {
        this._cullEnabled = enabled;
    }
    setCullFace(cullFace) {
        this._cullFace = cullFace;
    }
    setClampDepth(clampDepth) {
        this._clampDepth = clampDepth;
    }
    resetDepthCullingState() {
        this.setDepthCullingState(false, 2, 1, 0, 0, true, true, 519);
    }
    setDepthCullingState(cullEnabled, frontFace, cullFace, zOffset, zOffsetUnits, depthTestEnabled, depthWriteEnabled, depthCompare) {
        this._depthWriteEnabled = depthWriteEnabled;
        this._depthTestEnabled = depthTestEnabled;
        this._depthCompare = (depthCompare ?? 519) - 0x0200;
        this._cullFace = cullFace;
        this._cullEnabled = cullEnabled;
        this._frontFace = frontFace;
        this.setDepthBiasSlopeScale(zOffset);
        this.setDepthBias(zOffsetUnits);
    }
    setDepthBias(depthBias) {
        if (this._depthBias !== depthBias) {
            this._depthBias = depthBias;
            this._states[StatePosition.DepthBias] = depthBias;
            this._isDirty = true;
            this._stateDirtyLowestIndex = Math.min(this._stateDirtyLowestIndex, StatePosition.DepthBias);
        }
    }
    /*public setDepthBiasClamp(depthBiasClamp: number): void {
        if (this._depthBiasClamp !== depthBiasClamp) {
            this._depthBiasClamp = depthBiasClamp;
            this._states[StatePosition.DepthBiasClamp] = depthBiasClamp.toString();
            this._isDirty = true;
        }
    }*/ setDepthBiasSlopeScale(depthBiasSlopeScale) {
        if (this._depthBiasSlopeScale !== depthBiasSlopeScale) {
            this._depthBiasSlopeScale = depthBiasSlopeScale;
            this._states[StatePosition.DepthBiasSlopeScale] = depthBiasSlopeScale;
            this._isDirty = true;
            this._stateDirtyLowestIndex = Math.min(this._stateDirtyLowestIndex, StatePosition.DepthBiasSlopeScale);
        }
    }
    setColorFormat(format) {
        this._webgpuColorFormat[0] = format;
        this._colorFormat = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuTextureManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderableTextureFormatToIndex"][format ?? ""];
    }
    // Must be called after setMRT!
    setMRTAttachments(attachments) {
        this.mrtAttachments = attachments;
        let mask = 0;
        for(let i = 0; i < attachments.length; ++i){
            if (attachments[i] !== 0) {
                mask += 1 << i;
            }
        }
        if (this._mrtEnabledMask !== mask) {
            this._mrtEnabledMask = mask;
            this._isDirty = true;
            this._stateDirtyLowestIndex = Math.min(this._stateDirtyLowestIndex, StatePosition.MRTAttachments);
        }
    }
    setMRT(textureArray, textureCount) {
        textureCount = textureCount ?? textureArray.length;
        if (textureCount > 8) {
            // We only support 8 MRTs in WebGPU, so we throw an error if we try to set more than that.
            throw new Error("Can't handle more than 8 attachments for a MRT in cache render pipeline!");
        }
        this.mrtTextureArray = textureArray;
        this.mrtTextureCount = textureCount;
        // Since we need approximately 45 different values per texture format (see WebGPUTextureManager.renderableTextureFormatToIndex), we use 6 bits to encode a texture format,
        // which means we can encode 8 texture formats in 48 bits (a double can represent integers exactly up until 2^53, so 48 bits is ok).
        this._mrtEnabledMask = 0xffff; // all textures are enabled at start (meaning we can write to them). Calls to setMRTAttachments may disable some
        let mrtAttachments = 0;
        let mask = 0;
        for(let i = 0; i < textureCount; ++i){
            const texture = textureArray[i];
            const gpuWrapper = texture?._hardwareTexture;
            this._mrtFormats[i] = gpuWrapper?.format ?? this._webgpuColorFormat[0];
            mrtAttachments += __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuTextureManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderableTextureFormatToIndex"][this._mrtFormats[i] ?? ""] * 2 ** mask;
            mask += 6;
        }
        this._mrtFormats.length = textureCount;
        if (this._mrtAttachments !== mrtAttachments) {
            this._mrtAttachments = mrtAttachments;
            this._states[StatePosition.MRTAttachments] = mrtAttachments;
            this._isDirty = true;
            this._stateDirtyLowestIndex = Math.min(this._stateDirtyLowestIndex, StatePosition.MRTAttachments);
        }
    }
    setAlphaBlendEnabled(enabled, numAlphaBlendTargetsEnabled) {
        this._alphaBlendEnabled = enabled;
        this._numAlphaBlendTargetsEnabled = numAlphaBlendTargetsEnabled;
    }
    setAlphaBlendFactors(factors, operations) {
        this._alphaBlendFuncParams = factors;
        this._alphaBlendEqParams = operations;
    }
    setWriteMask(mask) {
        this._writeMask = mask;
    }
    setDepthStencilFormat(format) {
        this._webgpuDepthStencilFormat = format;
        this._depthStencilFormat = format === undefined ? 0 : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuTextureManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderableTextureFormatToIndex"][format];
    }
    setDepthTestEnabled(enabled) {
        this._depthTestEnabled = enabled;
    }
    setDepthWriteEnabled(enabled) {
        this._depthWriteEnabled = enabled;
    }
    setDepthCompare(func) {
        this._depthCompare = (func ?? 519) - 0x0200;
    }
    setStencilEnabled(enabled) {
        this._stencilEnabled = enabled;
    }
    setStencilCompare(func) {
        this._stencilFrontCompare = (func ?? 519) - 0x0200;
    }
    setStencilDepthFailOp(op) {
        this._stencilFrontDepthFailOp = op === null ? 1 /* KEEP */  : stencilOpToIndex[op];
    }
    setStencilPassOp(op) {
        this._stencilFrontPassOp = op === null ? 2 /* REPLACE */  : stencilOpToIndex[op];
    }
    setStencilFailOp(op) {
        this._stencilFrontFailOp = op === null ? 1 /* KEEP */  : stencilOpToIndex[op];
    }
    setStencilBackCompare(func) {
        this._stencilBackCompare = (func ?? 519) - 0x0200;
    }
    setStencilBackDepthFailOp(op) {
        this._stencilBackDepthFailOp = op === null ? 1 /* KEEP */  : stencilOpToIndex[op];
    }
    setStencilBackPassOp(op) {
        this._stencilBackPassOp = op === null ? 2 /* REPLACE */  : stencilOpToIndex[op];
    }
    setStencilBackFailOp(op) {
        this._stencilBackFailOp = op === null ? 1 /* KEEP */  : stencilOpToIndex[op];
    }
    setStencilReadMask(mask) {
        if (this._stencilReadMask !== mask) {
            this._stencilReadMask = mask;
            this._states[StatePosition.StencilReadMask] = mask;
            this._isDirty = true;
            this._stateDirtyLowestIndex = Math.min(this._stateDirtyLowestIndex, StatePosition.StencilReadMask);
        }
    }
    setStencilWriteMask(mask) {
        if (this._stencilWriteMask !== mask) {
            this._stencilWriteMask = mask;
            this._states[StatePosition.StencilWriteMask] = mask;
            this._isDirty = true;
            this._stateDirtyLowestIndex = Math.min(this._stateDirtyLowestIndex, StatePosition.StencilWriteMask);
        }
    }
    resetStencilState() {
        this.setStencilState(false, 519, 7680, 7681, 7680, 0xff, 0xff);
    }
    setStencilState(stencilEnabled, compare, depthFailOp, passOp, failOp, readMask, writeMask, backCompare = null, backDepthFailOp = null, backPassOp = null, backFailOp = null) {
        this._stencilEnabled = stencilEnabled;
        this._stencilFrontCompare = (compare ?? 519) - 0x0200;
        this._stencilFrontDepthFailOp = depthFailOp === null ? 1 /* KEEP */  : stencilOpToIndex[depthFailOp];
        this._stencilFrontPassOp = passOp === null ? 2 /* REPLACE */  : stencilOpToIndex[passOp];
        this._stencilFrontFailOp = failOp === null ? 1 /* KEEP */  : stencilOpToIndex[failOp];
        this._stencilBackCompare = (backCompare ?? 519) - 0x0200;
        this._stencilBackDepthFailOp = backDepthFailOp === null ? 1 /* KEEP */  : stencilOpToIndex[backDepthFailOp];
        this._stencilBackPassOp = backPassOp === null ? 2 /* REPLACE */  : stencilOpToIndex[backPassOp];
        this._stencilBackFailOp = backFailOp === null ? 1 /* KEEP */  : stencilOpToIndex[backFailOp];
        this.setStencilReadMask(readMask);
        this.setStencilWriteMask(writeMask);
    }
    setBuffers(vertexBuffers, indexBuffer, overrideVertexBuffers) {
        this._vertexBuffers = vertexBuffers;
        this._overrideVertexBuffers = overrideVertexBuffers;
        this.indexBuffer = indexBuffer;
    }
    static _GetTopology(fillMode) {
        switch(fillMode){
            // Triangle views
            case 0:
                return "triangle-list" /* WebGPUConstants.PrimitiveTopology.TriangleList */ ;
            case 2:
                return "point-list" /* WebGPUConstants.PrimitiveTopology.PointList */ ;
            case 1:
                return "line-list" /* WebGPUConstants.PrimitiveTopology.LineList */ ;
            // Draw modes
            case 3:
                return "point-list" /* WebGPUConstants.PrimitiveTopology.PointList */ ;
            case 4:
                return "line-list" /* WebGPUConstants.PrimitiveTopology.LineList */ ;
            case 5:
                // return this._gl.LINE_LOOP;
                // TODO WEBGPU. Line Loop Mode Fallback at buffer load time.
                // eslint-disable-next-line no-throw-literal
                throw "LineLoop is an unsupported fillmode in WebGPU";
            case 6:
                return "line-strip" /* WebGPUConstants.PrimitiveTopology.LineStrip */ ;
            case 7:
                return "triangle-strip" /* WebGPUConstants.PrimitiveTopology.TriangleStrip */ ;
            case 8:
                // return this._gl.TRIANGLE_FAN;
                // TODO WEBGPU. Triangle Fan Mode Fallback at buffer load time.
                // eslint-disable-next-line no-throw-literal
                throw "TriangleFan is an unsupported fillmode in WebGPU";
            default:
                return "triangle-list" /* WebGPUConstants.PrimitiveTopology.TriangleList */ ;
        }
    }
    static _GetAphaBlendOperation(operation) {
        switch(operation){
            case 32774:
                return "add" /* WebGPUConstants.BlendOperation.Add */ ;
            case 32778:
                return "subtract" /* WebGPUConstants.BlendOperation.Subtract */ ;
            case 32779:
                return "reverse-subtract" /* WebGPUConstants.BlendOperation.ReverseSubtract */ ;
            case 32775:
                return "min" /* WebGPUConstants.BlendOperation.Min */ ;
            case 32776:
                return "max" /* WebGPUConstants.BlendOperation.Max */ ;
            default:
                return "add" /* WebGPUConstants.BlendOperation.Add */ ;
        }
    }
    static _GetAphaBlendFactor(factor) {
        switch(factor){
            case 0:
                return "zero" /* WebGPUConstants.BlendFactor.Zero */ ;
            case 1:
                return "one" /* WebGPUConstants.BlendFactor.One */ ;
            case 768:
                return "src" /* WebGPUConstants.BlendFactor.Src */ ;
            case 769:
                return "one-minus-src" /* WebGPUConstants.BlendFactor.OneMinusSrc */ ;
            case 770:
                return "src-alpha" /* WebGPUConstants.BlendFactor.SrcAlpha */ ;
            case 771:
                return "one-minus-src-alpha" /* WebGPUConstants.BlendFactor.OneMinusSrcAlpha */ ;
            case 772:
                return "dst-alpha" /* WebGPUConstants.BlendFactor.DstAlpha */ ;
            case 773:
                return "one-minus-dst-alpha" /* WebGPUConstants.BlendFactor.OneMinusDstAlpha */ ;
            case 774:
                return "dst" /* WebGPUConstants.BlendFactor.Dst */ ;
            case 775:
                return "one-minus-dst" /* WebGPUConstants.BlendFactor.OneMinusDst */ ;
            case 776:
                return "src-alpha-saturated" /* WebGPUConstants.BlendFactor.SrcAlphaSaturated */ ;
            case 32769:
            case 32771:
                return "constant" /* WebGPUConstants.BlendFactor.Constant */ ;
            case 32770:
            case 32772:
                return "one-minus-constant" /* WebGPUConstants.BlendFactor.OneMinusConstant */ ;
            case 35065:
                return "src1" /* WebGPUConstants.BlendFactor.Src1 */ ;
            case 35066:
                return "one-minus-src1" /* WebGPUConstants.BlendFactor.OneMinusSrc1 */ ;
            case 34185:
                return "src1-alpha" /* WebGPUConstants.BlendFactor.Src1Alpha */ ;
            case 35067:
                return "one-minus-src1-alpha" /* WebGPUConstants.BlendFactor.OneMinusSrc1Alpha */ ;
            default:
                return "one" /* WebGPUConstants.BlendFactor.One */ ;
        }
    }
    static _GetCompareFunction(compareFunction) {
        switch(compareFunction){
            case 0:
                return "never" /* WebGPUConstants.CompareFunction.Never */ ;
            case 1:
                return "less" /* WebGPUConstants.CompareFunction.Less */ ;
            case 2:
                return "equal" /* WebGPUConstants.CompareFunction.Equal */ ;
            case 3:
                return "less-equal" /* WebGPUConstants.CompareFunction.LessEqual */ ;
            case 4:
                return "greater" /* WebGPUConstants.CompareFunction.Greater */ ;
            case 5:
                return "not-equal" /* WebGPUConstants.CompareFunction.NotEqual */ ;
            case 6:
                return "greater-equal" /* WebGPUConstants.CompareFunction.GreaterEqual */ ;
            case 7:
                return "always" /* WebGPUConstants.CompareFunction.Always */ ;
        }
        return "never" /* WebGPUConstants.CompareFunction.Never */ ;
    }
    static _GetStencilOpFunction(operation) {
        switch(operation){
            case 0:
                return "zero" /* WebGPUConstants.StencilOperation.Zero */ ;
            case 1:
                return "keep" /* WebGPUConstants.StencilOperation.Keep */ ;
            case 2:
                return "replace" /* WebGPUConstants.StencilOperation.Replace */ ;
            case 3:
                return "increment-clamp" /* WebGPUConstants.StencilOperation.IncrementClamp */ ;
            case 4:
                return "decrement-clamp" /* WebGPUConstants.StencilOperation.DecrementClamp */ ;
            case 5:
                return "invert" /* WebGPUConstants.StencilOperation.Invert */ ;
            case 6:
                return "increment-wrap" /* WebGPUConstants.StencilOperation.IncrementWrap */ ;
            case 7:
                return "decrement-wrap" /* WebGPUConstants.StencilOperation.DecrementWrap */ ;
        }
        return "keep" /* WebGPUConstants.StencilOperation.Keep */ ;
    }
    static _GetVertexInputDescriptorFormat(vertexBuffer) {
        const type = vertexBuffer.type;
        const normalized = vertexBuffer.normalized;
        const size = vertexBuffer.getSize();
        switch(type){
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VertexBuffer"].BYTE:
                switch(size){
                    case 1:
                    case 2:
                        return normalized ? "snorm8x2" /* WebGPUConstants.VertexFormat.Snorm8x2 */  : "sint8x2" /* WebGPUConstants.VertexFormat.Sint8x2 */ ;
                    case 3:
                    case 4:
                        return normalized ? "snorm8x4" /* WebGPUConstants.VertexFormat.Snorm8x4 */  : "sint8x4" /* WebGPUConstants.VertexFormat.Sint8x4 */ ;
                }
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VertexBuffer"].UNSIGNED_BYTE:
                switch(size){
                    case 1:
                    case 2:
                        return normalized ? "unorm8x2" /* WebGPUConstants.VertexFormat.Unorm8x2 */  : "uint8x2" /* WebGPUConstants.VertexFormat.Uint8x2 */ ;
                    case 3:
                    case 4:
                        return normalized ? "unorm8x4" /* WebGPUConstants.VertexFormat.Unorm8x4 */  : "uint8x4" /* WebGPUConstants.VertexFormat.Uint8x4 */ ;
                }
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VertexBuffer"].SHORT:
                switch(size){
                    case 1:
                    case 2:
                        return normalized ? "snorm16x2" /* WebGPUConstants.VertexFormat.Snorm16x2 */  : "sint16x2" /* WebGPUConstants.VertexFormat.Sint16x2 */ ;
                    case 3:
                    case 4:
                        return normalized ? "snorm16x4" /* WebGPUConstants.VertexFormat.Snorm16x4 */  : "sint16x4" /* WebGPUConstants.VertexFormat.Sint16x4 */ ;
                }
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VertexBuffer"].UNSIGNED_SHORT:
                switch(size){
                    case 1:
                    case 2:
                        return normalized ? "unorm16x2" /* WebGPUConstants.VertexFormat.Unorm16x2 */  : "uint16x2" /* WebGPUConstants.VertexFormat.Uint16x2 */ ;
                    case 3:
                    case 4:
                        return normalized ? "unorm16x4" /* WebGPUConstants.VertexFormat.Unorm16x4 */  : "uint16x4" /* WebGPUConstants.VertexFormat.Uint16x4 */ ;
                }
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VertexBuffer"].INT:
                switch(size){
                    case 1:
                        return "sint32" /* WebGPUConstants.VertexFormat.Sint32 */ ;
                    case 2:
                        return "sint32x2" /* WebGPUConstants.VertexFormat.Sint32x2 */ ;
                    case 3:
                        return "sint32x3" /* WebGPUConstants.VertexFormat.Sint32x3 */ ;
                    case 4:
                        return "sint32x4" /* WebGPUConstants.VertexFormat.Sint32x4 */ ;
                }
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VertexBuffer"].UNSIGNED_INT:
                switch(size){
                    case 1:
                        return "uint32" /* WebGPUConstants.VertexFormat.Uint32 */ ;
                    case 2:
                        return "uint32x2" /* WebGPUConstants.VertexFormat.Uint32x2 */ ;
                    case 3:
                        return "uint32x3" /* WebGPUConstants.VertexFormat.Uint32x3 */ ;
                    case 4:
                        return "uint32x4" /* WebGPUConstants.VertexFormat.Uint32x4 */ ;
                }
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VertexBuffer"].FLOAT:
                switch(size){
                    case 1:
                        return "float32" /* WebGPUConstants.VertexFormat.Float32 */ ;
                    case 2:
                        return "float32x2" /* WebGPUConstants.VertexFormat.Float32x2 */ ;
                    case 3:
                        return "float32x3" /* WebGPUConstants.VertexFormat.Float32x3 */ ;
                    case 4:
                        return "float32x4" /* WebGPUConstants.VertexFormat.Float32x4 */ ;
                }
                break;
        }
        throw new Error(`Invalid Format '${vertexBuffer.getKind()}' - type=${type}, normalized=${normalized}, size=${size}`);
    }
    _getAphaBlendState(targetIndex) {
        if (!this._alphaBlendEnabled[targetIndex]) {
            return null;
        }
        return {
            srcFactor: WebGPUCacheRenderPipeline._GetAphaBlendFactor(this._alphaBlendFuncParams[targetIndex * 4 + 2]),
            dstFactor: WebGPUCacheRenderPipeline._GetAphaBlendFactor(this._alphaBlendFuncParams[targetIndex * 4 + 3]),
            operation: WebGPUCacheRenderPipeline._GetAphaBlendOperation(this._alphaBlendEqParams[targetIndex * 2 + 1])
        };
    }
    _getColorBlendState(targetIndex) {
        if (!this._alphaBlendEnabled) {
            return null;
        }
        return {
            srcFactor: WebGPUCacheRenderPipeline._GetAphaBlendFactor(this._alphaBlendFuncParams[targetIndex * 4 + 0]),
            dstFactor: WebGPUCacheRenderPipeline._GetAphaBlendFactor(this._alphaBlendFuncParams[targetIndex * 4 + 1]),
            operation: WebGPUCacheRenderPipeline._GetAphaBlendOperation(this._alphaBlendEqParams[targetIndex * 2 + 0])
        };
    }
    _setShaderStage(id) {
        if (this._shaderId !== id) {
            this._shaderId = id;
            this._states[StatePosition.ShaderStage] = id;
            this._isDirty = true;
            this._stateDirtyLowestIndex = Math.min(this._stateDirtyLowestIndex, StatePosition.ShaderStage);
        }
    }
    _setRasterizationState(topology, sampleCount) {
        const frontFace = this._frontFace;
        const cullMode = this._cullEnabled ? this._cullFace : 0;
        const clampDepth = this._clampDepth ? 1 : 0;
        const alphaToCoverage = this._alphaToCoverageEnabled ? 1 : 0;
        const rasterizationState = frontFace - 1 + (cullMode << 1) + (clampDepth << 3) + (alphaToCoverage << 4) + (topology << 5) + (sampleCount << 8);
        if (this._rasterizationState !== rasterizationState) {
            this._rasterizationState = rasterizationState;
            this._states[StatePosition.RasterizationState] = this._rasterizationState;
            this._isDirty = true;
            this._stateDirtyLowestIndex = Math.min(this._stateDirtyLowestIndex, StatePosition.RasterizationState);
        }
    }
    _setColorStates() {
        // Note that _depthWriteEnabled state has been moved from depthStencilState here because alpha and depth are related (generally when alpha is on, depth write is off and the other way around)
        // We need 4 color states because we will be grouping 2 blend targets in each state (and WebGPU supports up to 8 targets).
        // Integers can only be represented exactly in 53 bits with a double, so we can only use 53 bits for each state.
        // We use 25 bits for each blend target (5 bits for the 2 (color/alpha) equations and 4*5 bits for the 4 factors (src/dst color and src/dst alpha)).
        // This means that we need 25*2=50 bits to pack 2 blend targets, and we can use the remaining 3 bits for other states (write mask, depth write, color format).
        // The color format is encoded on 6 bits, so we dispatch it over 3 bits to the last two color states.
        colorStates[0] = (this._writeMask ? 1 : 0) * 2 ** 53;
        colorStates[1] = (this._depthWriteEnabled ? 1 : 0) * 2 ** 53;
        colorStates[2] = (this._colorFormat & 0x07) * 2 ** 50;
        colorStates[3] = (this._colorFormat & 0x38) * 2 ** 47;
        let colorStateIndex = 0;
        let isDirty = false;
        for(let i = 0; i < 8; i++){
            if (this._alphaBlendEnabled[i]) {
                const index0 = i * 4 + 0;
                const index1 = i * 4 + 1;
                const index2 = i * 4 + 2;
                const index3 = i * 4 + 3;
                const indexEq0 = i * 2 + 0;
                const indexEq1 = i * 2 + 1;
                const eq0 = this._alphaBlendEqParams[indexEq0] === null ? 0 : alphaBlendEquationToIndex[this._alphaBlendEqParams[indexEq0]];
                const eq1 = this._alphaBlendEqParams[indexEq1] === null ? 0 : alphaBlendEquationToIndex[this._alphaBlendEqParams[indexEq1]];
                colorStates[colorStateIndex] += ((this._alphaBlendFuncParams[index0] === null ? 1 : alphaBlendFactorToIndex[this._alphaBlendFuncParams[index0]]) << 0) + ((this._alphaBlendFuncParams[index1] === null ? 1 : alphaBlendFactorToIndex[this._alphaBlendFuncParams[index1]]) << 5) + ((this._alphaBlendFuncParams[index2] === null ? 1 : alphaBlendFactorToIndex[this._alphaBlendFuncParams[index2]]) << 10) + ((this._alphaBlendFuncParams[index3] === null ? 1 : alphaBlendFactorToIndex[this._alphaBlendFuncParams[index3]]) << 15) + (eq0 + eq1 * 5) * (1 << 20);
            }
            if (i & 1) {
                isDirty = isDirty || this._states[StatePosition.ColorStates1 + colorStateIndex] !== colorStates[colorStateIndex];
                this._states[StatePosition.ColorStates1 + colorStateIndex] = colorStates[colorStateIndex];
                colorStateIndex++;
            }
        }
        if (isDirty) {
            this._isDirty = true;
            this._stateDirtyLowestIndex = Math.min(this._stateDirtyLowestIndex, StatePosition.ColorStates1);
        }
    }
    _setDepthStencilState() {
        const stencilState = !this._stencilEnabled ? 7 /* ALWAYS */  + (1 /* KEEP */  << 3) + (1 /* KEEP */  << 6) + (1 /* KEEP */  << 9) + // front
        (7 /* ALWAYS */  << 12) + (1 /* KEEP */  << 15) + (1 /* KEEP */  << 18) + (1 /* KEEP */  << 21) // back
         : this._stencilFrontCompare + (this._stencilFrontDepthFailOp << 3) + (this._stencilFrontPassOp << 6) + (this._stencilFrontFailOp << 9) + // front
        (this._stencilBackCompare << 12) + (this._stencilBackDepthFailOp << 15) + (this._stencilBackPassOp << 18) + (this._stencilBackFailOp << 21); // back
        const depthStencilState = this._depthStencilFormat + ((this._depthTestEnabled ? this._depthCompare : 7) << 6) + stencilState * (1 << 10); // stencil front + back
        if (this._depthStencilState !== depthStencilState) {
            this._depthStencilState = depthStencilState;
            this._states[StatePosition.DepthStencilState] = this._depthStencilState;
            this._isDirty = true;
            this._stateDirtyLowestIndex = Math.min(this._stateDirtyLowestIndex, StatePosition.DepthStencilState);
        }
    }
    _setVertexState(effect) {
        const currStateLen = this._statesLength;
        let newNumStates = StatePosition.VertexState;
        const webgpuPipelineContext = effect._pipelineContext;
        const attributes = webgpuPipelineContext.shaderProcessingContext.attributeNamesFromEffect;
        const locations = webgpuPipelineContext.shaderProcessingContext.attributeLocationsFromEffect;
        let currentGPUBuffer;
        let numVertexBuffers = 0;
        for(let index = 0; index < attributes.length; index++){
            const location = locations[index];
            let vertexBuffer = (this._overrideVertexBuffers && this._overrideVertexBuffers[attributes[index]]) ?? this._vertexBuffers[attributes[index]];
            if (!vertexBuffer) {
                // In WebGL it's valid to not bind a vertex buffer to an attribute, but it's not valid in WebGPU
                // So we must bind a dummy buffer when we are not given one for a specific attribute
                vertexBuffer = this._emptyVertexBuffer;
                if (WebGPUCacheRenderPipeline.LogErrorIfNoVertexBuffer) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Error(`No vertex buffer is provided for the "${attributes[index]}" attribute. A default empty vertex buffer will be used, but this may generate errors in some browsers.`);
                }
            }
            const buffer = vertexBuffer.effectiveBuffer?.underlyingResource;
            // We optimize usage of GPUVertexBufferLayout: we will create a single GPUVertexBufferLayout for all the attributes which follow each other and which use the same GPU buffer
            // However, there are some constraints in the attribute.offset value range, so we must check for them before being able to reuse the same GPUVertexBufferLayout
            // See _getVertexInputDescriptor() below
            if (vertexBuffer._validOffsetRange === undefined) {
                const offset = vertexBuffer.effectiveByteOffset;
                const formatSize = vertexBuffer.getSize(true);
                const byteStride = vertexBuffer.effectiveByteStride;
                vertexBuffer._validOffsetRange = offset + formatSize <= this._kMaxVertexBufferStride && byteStride === 0 || byteStride !== 0 && offset + formatSize <= byteStride;
            }
            if (!(currentGPUBuffer && currentGPUBuffer === buffer && vertexBuffer._validOffsetRange)) {
                // we can't combine the previous vertexBuffer with the current one
                this.vertexBuffers[numVertexBuffers++] = vertexBuffer;
                currentGPUBuffer = vertexBuffer._validOffsetRange ? buffer : null;
            }
            const vid = vertexBuffer.hashCode + (location << 7);
            this._isDirty = this._isDirty || this._states[newNumStates] !== vid;
            this._states[newNumStates++] = vid;
        }
        this.vertexBuffers.length = numVertexBuffers;
        this._statesLength = newNumStates;
        this._isDirty = this._isDirty || newNumStates !== currStateLen;
        if (this._isDirty) {
            this._stateDirtyLowestIndex = Math.min(this._stateDirtyLowestIndex, StatePosition.VertexState);
        }
    }
    _setTextureState(textureState) {
        if (this._textureState !== textureState) {
            this._textureState = textureState;
            this._states[StatePosition.TextureStage] = this._textureState;
            this._isDirty = true;
            this._stateDirtyLowestIndex = Math.min(this._stateDirtyLowestIndex, StatePosition.TextureStage);
        }
    }
    _createPipelineLayout(webgpuPipelineContext) {
        if (this._useTextureStage) {
            return this._createPipelineLayoutWithTextureStage(webgpuPipelineContext);
        }
        const bindGroupLayouts = [];
        const bindGroupLayoutEntries = webgpuPipelineContext.shaderProcessingContext.bindGroupLayoutEntries;
        for(let i = 0; i < bindGroupLayoutEntries.length; i++){
            const setDefinition = bindGroupLayoutEntries[i];
            bindGroupLayouts[i] = this._device.createBindGroupLayout({
                entries: setDefinition
            });
        }
        webgpuPipelineContext.bindGroupLayouts[0] = bindGroupLayouts;
        return this._device.createPipelineLayout({
            bindGroupLayouts
        });
    }
    _createPipelineLayoutWithTextureStage(webgpuPipelineContext) {
        const shaderProcessingContext = webgpuPipelineContext.shaderProcessingContext;
        const bindGroupLayoutEntries = shaderProcessingContext.bindGroupLayoutEntries;
        let bitVal = 1;
        for(let i = 0; i < bindGroupLayoutEntries.length; i++){
            const setDefinition = bindGroupLayoutEntries[i];
            for(let j = 0; j < setDefinition.length; j++){
                const entry = bindGroupLayoutEntries[i][j];
                if (entry.texture) {
                    const name = shaderProcessingContext.bindGroupLayoutEntryInfo[i][entry.binding].name;
                    const textureInfo = shaderProcessingContext.availableTextures[name];
                    const samplerInfo = textureInfo.autoBindSampler ? shaderProcessingContext.availableSamplers[name + `Sampler`] : null;
                    let sampleType = textureInfo.sampleType;
                    let samplerType = samplerInfo?.type ?? "filtering" /* WebGPUConstants.SamplerBindingType.Filtering */ ;
                    if (this._textureState & bitVal && sampleType !== "depth" /* WebGPUConstants.TextureSampleType.Depth */ ) {
                        // The texture is a 32 bits float texture but the system does not support linear filtering for them OR the texture is a depth texture with "float" filtering:
                        // we set the sampler to "non-filtering" and the texture sample type to "unfilterable-float"
                        if (textureInfo.autoBindSampler) {
                            samplerType = "non-filtering" /* WebGPUConstants.SamplerBindingType.NonFiltering */ ;
                        }
                        sampleType = "unfilterable-float" /* WebGPUConstants.TextureSampleType.UnfilterableFloat */ ;
                    }
                    entry.texture.sampleType = sampleType;
                    if (samplerInfo) {
                        const binding = shaderProcessingContext.bindGroupLayoutEntryInfo[samplerInfo.binding.groupIndex][samplerInfo.binding.bindingIndex].index;
                        bindGroupLayoutEntries[samplerInfo.binding.groupIndex][binding].sampler.type = samplerType;
                    }
                    bitVal = bitVal << 1;
                }
            }
        }
        const bindGroupLayouts = [];
        for(let i = 0; i < bindGroupLayoutEntries.length; ++i){
            bindGroupLayouts[i] = this._device.createBindGroupLayout({
                entries: bindGroupLayoutEntries[i]
            });
        }
        webgpuPipelineContext.bindGroupLayouts[this._textureState] = bindGroupLayouts;
        return this._device.createPipelineLayout({
            bindGroupLayouts
        });
    }
    _getVertexInputDescriptor(effect) {
        const descriptors = [];
        const webgpuPipelineContext = effect._pipelineContext;
        const attributes = webgpuPipelineContext.shaderProcessingContext.attributeNamesFromEffect;
        const locations = webgpuPipelineContext.shaderProcessingContext.attributeLocationsFromEffect;
        let currentGPUBuffer;
        let currentGPUAttributes;
        for(let index = 0; index < attributes.length; index++){
            const location = locations[index];
            let vertexBuffer = (this._overrideVertexBuffers && this._overrideVertexBuffers[attributes[index]]) ?? this._vertexBuffers[attributes[index]];
            if (!vertexBuffer) {
                // In WebGL it's valid to not bind a vertex buffer to an attribute, but it's not valid in WebGPU
                // So we must bind a dummy buffer when we are not given one for a specific attribute
                vertexBuffer = this._emptyVertexBuffer;
            }
            let buffer = vertexBuffer.effectiveBuffer?.underlyingResource;
            // We reuse the same GPUVertexBufferLayout for all attributes that use the same underlying GPU buffer (and for attributes that follow each other in the attributes array)
            let offset = vertexBuffer.effectiveByteOffset;
            const invalidOffsetRange = !vertexBuffer._validOffsetRange;
            if (!(currentGPUBuffer && currentGPUAttributes && currentGPUBuffer === buffer) || invalidOffsetRange) {
                const vertexBufferDescriptor = {
                    arrayStride: vertexBuffer.effectiveByteStride,
                    stepMode: vertexBuffer.getIsInstanced() ? "instance" /* WebGPUConstants.VertexStepMode.Instance */  : "vertex" /* WebGPUConstants.VertexStepMode.Vertex */ ,
                    attributes: []
                };
                descriptors.push(vertexBufferDescriptor);
                currentGPUAttributes = vertexBufferDescriptor.attributes;
                if (invalidOffsetRange) {
                    offset = 0; // the offset will be set directly in the setVertexBuffer call
                    buffer = null; // buffer can't be reused
                }
            }
            currentGPUAttributes.push({
                shaderLocation: location,
                offset,
                format: WebGPUCacheRenderPipeline._GetVertexInputDescriptorFormat(vertexBuffer)
            });
            currentGPUBuffer = buffer;
        }
        return descriptors;
    }
    _createRenderPipeline(effect, topology, sampleCount) {
        const webgpuPipelineContext = effect._pipelineContext;
        const inputStateDescriptor = this._getVertexInputDescriptor(effect);
        const pipelineLayout = this._createPipelineLayout(webgpuPipelineContext);
        const colorStates = [];
        if (this._vertexBuffers) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$nonFloatVertexBuffers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkNonFloatVertexBuffers"])(this._vertexBuffers, effect);
        }
        if (this._mrtAttachments > 0) {
            for(let i = 0; i < this._mrtFormats.length; ++i){
                const format = this._mrtFormats[i];
                if (format) {
                    const descr = {
                        format,
                        writeMask: (this._mrtEnabledMask & 1 << i) !== 0 ? this._writeMask : 0
                    };
                    const alphaBlend = this._getAphaBlendState(i < this._numAlphaBlendTargetsEnabled ? i : 0);
                    const colorBlend = this._getColorBlendState(i < this._numAlphaBlendTargetsEnabled ? i : 0);
                    if (alphaBlend && colorBlend) {
                        descr.blend = {
                            alpha: alphaBlend,
                            color: colorBlend
                        };
                    }
                    colorStates.push(descr);
                } else {
                    colorStates.push(null);
                }
            }
        } else {
            if (this._webgpuColorFormat[0]) {
                const descr = {
                    format: this._webgpuColorFormat[0],
                    writeMask: this._writeMask
                };
                const alphaBlend = this._getAphaBlendState(0);
                const colorBlend = this._getColorBlendState(0);
                if (alphaBlend && colorBlend) {
                    descr.blend = {
                        alpha: alphaBlend,
                        color: colorBlend
                    };
                }
                colorStates.push(descr);
            } else {
                colorStates.push(null);
            }
        }
        const stencilFront = {
            compare: WebGPUCacheRenderPipeline._GetCompareFunction(this._stencilEnabled ? this._stencilFrontCompare : 7 /* ALWAYS */ ),
            depthFailOp: WebGPUCacheRenderPipeline._GetStencilOpFunction(this._stencilEnabled ? this._stencilFrontDepthFailOp : 1 /* KEEP */ ),
            failOp: WebGPUCacheRenderPipeline._GetStencilOpFunction(this._stencilEnabled ? this._stencilFrontFailOp : 1 /* KEEP */ ),
            passOp: WebGPUCacheRenderPipeline._GetStencilOpFunction(this._stencilEnabled ? this._stencilFrontPassOp : 1 /* KEEP */ )
        };
        const stencilBack = {
            compare: WebGPUCacheRenderPipeline._GetCompareFunction(this._stencilEnabled ? this._stencilBackCompare : 7 /* ALWAYS */ ),
            depthFailOp: WebGPUCacheRenderPipeline._GetStencilOpFunction(this._stencilEnabled ? this._stencilBackDepthFailOp : 1 /* KEEP */ ),
            failOp: WebGPUCacheRenderPipeline._GetStencilOpFunction(this._stencilEnabled ? this._stencilBackFailOp : 1 /* KEEP */ ),
            passOp: WebGPUCacheRenderPipeline._GetStencilOpFunction(this._stencilEnabled ? this._stencilBackPassOp : 1 /* KEEP */ )
        };
        const topologyIsTriangle = topology === "triangle-list" /* WebGPUConstants.PrimitiveTopology.TriangleList */  || topology === "triangle-strip" /* WebGPUConstants.PrimitiveTopology.TriangleStrip */ ;
        let stripIndexFormat = undefined;
        if (topology === "line-strip" /* WebGPUConstants.PrimitiveTopology.LineStrip */  || topology === "triangle-strip" /* WebGPUConstants.PrimitiveTopology.TriangleStrip */ ) {
            stripIndexFormat = !this.indexBuffer || this.indexBuffer.is32Bits ? "uint32" /* WebGPUConstants.IndexFormat.Uint32 */  : "uint16" /* WebGPUConstants.IndexFormat.Uint16 */ ;
        }
        const depthStencilFormatHasStencil = this._webgpuDepthStencilFormat ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuTextureHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGPUTextureHelper"].HasStencilAspect(this._webgpuDepthStencilFormat) : false;
        return this._device.createRenderPipeline({
            label: `RenderPipeline_${colorStates[0]?.format ?? "nooutput"}_${this._webgpuDepthStencilFormat ?? "nodepth"}_samples${sampleCount}_textureState${this._textureState}`,
            layout: pipelineLayout,
            vertex: {
                module: webgpuPipelineContext.stages.vertexStage.module,
                entryPoint: webgpuPipelineContext.stages.vertexStage.entryPoint,
                buffers: inputStateDescriptor
            },
            primitive: {
                topology,
                stripIndexFormat,
                frontFace: this._frontFace === 1 ? "ccw" /* WebGPUConstants.FrontFace.CCW */  : "cw" /* WebGPUConstants.FrontFace.CW */ ,
                cullMode: !this._cullEnabled ? "none" /* WebGPUConstants.CullMode.None */  : this._cullFace === 2 ? "front" /* WebGPUConstants.CullMode.Front */  : "back" /* WebGPUConstants.CullMode.Back */ 
            },
            fragment: !webgpuPipelineContext.stages.fragmentStage ? undefined : {
                module: webgpuPipelineContext.stages.fragmentStage.module,
                entryPoint: webgpuPipelineContext.stages.fragmentStage.entryPoint,
                targets: colorStates
            },
            multisample: {
                count: sampleCount
            },
            depthStencil: this._webgpuDepthStencilFormat === undefined ? undefined : {
                depthWriteEnabled: this._depthWriteEnabled,
                depthCompare: this._depthTestEnabled ? WebGPUCacheRenderPipeline._GetCompareFunction(this._depthCompare) : "always" /* WebGPUConstants.CompareFunction.Always */ ,
                format: this._webgpuDepthStencilFormat,
                stencilFront: this._stencilEnabled && depthStencilFormatHasStencil ? stencilFront : undefined,
                stencilBack: this._stencilEnabled && depthStencilFormatHasStencil ? stencilBack : undefined,
                stencilReadMask: this._stencilEnabled && depthStencilFormatHasStencil ? this._stencilReadMask : undefined,
                stencilWriteMask: this._stencilEnabled && depthStencilFormatHasStencil ? this._stencilWriteMask : undefined,
                depthBias: this._depthBias,
                depthBiasClamp: topologyIsTriangle ? this._depthBiasClamp : 0,
                depthBiasSlopeScale: topologyIsTriangle ? this._depthBiasSlopeScale : 0
            }
        });
    }
}
WebGPUCacheRenderPipeline.LogErrorIfNoVertexBuffer = false;
WebGPUCacheRenderPipeline.NumCacheHitWithoutHash = 0;
WebGPUCacheRenderPipeline.NumCacheHitWithHash = 0;
WebGPUCacheRenderPipeline.NumCacheMiss = 0;
WebGPUCacheRenderPipeline.NumPipelineCreationLastFrame = 0;
WebGPUCacheRenderPipeline._NumPipelineCreationCurrentFrame = 0; //# sourceMappingURL=webgpuCacheRenderPipeline.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/webgpuCacheRenderPipelineTree.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WebGPUCacheRenderPipelineTree",
    ()=>WebGPUCacheRenderPipelineTree
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuCacheRenderPipeline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/webgpuCacheRenderPipeline.js [app-client] (ecmascript)");
;
/** @internal */ class NodeState {
    constructor(){
        this.values = {};
    }
    count() {
        let countNode = 0, countPipeline = this.pipeline ? 1 : 0;
        for(const value in this.values){
            const node = this.values[value];
            const [childCountNodes, childCoundPipeline] = node.count();
            countNode += childCountNodes;
            countPipeline += childCoundPipeline;
            countNode++;
        }
        return [
            countNode,
            countPipeline
        ];
    }
}
class WebGPUCacheRenderPipelineTree extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuCacheRenderPipeline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGPUCacheRenderPipeline"] {
    static GetNodeCounts() {
        const counts = WebGPUCacheRenderPipelineTree._Cache.count();
        return {
            nodeCount: counts[0],
            pipelineCount: counts[1]
        };
    }
    static _GetPipelines(node, pipelines, curPath, curPathLen) {
        if (node.pipeline) {
            const path = curPath.slice();
            path.length = curPathLen;
            pipelines.push(path);
        }
        for(const value in node.values){
            const nnode = node.values[value];
            curPath[curPathLen] = parseInt(value);
            WebGPUCacheRenderPipelineTree._GetPipelines(nnode, pipelines, curPath, curPathLen + 1);
        }
    }
    static GetPipelines() {
        const pipelines = [];
        WebGPUCacheRenderPipelineTree._GetPipelines(WebGPUCacheRenderPipelineTree._Cache, pipelines, [], 0);
        return pipelines;
    }
    static ResetCache() {
        WebGPUCacheRenderPipelineTree._Cache = new NodeState();
    }
    reset() {
        this._nodeStack = [];
        this._nodeStack[0] = WebGPUCacheRenderPipelineTree._Cache;
        super.reset();
    }
    _getRenderPipeline(param) {
        let node = this._nodeStack[this._stateDirtyLowestIndex];
        for(let i = this._stateDirtyLowestIndex; i < this._statesLength; ++i){
            let nn = node.values[this._states[i]];
            if (!nn) {
                nn = new NodeState();
                node.values[this._states[i]] = nn;
            }
            node = nn;
            this._nodeStack[i + 1] = node;
        }
        param.token = node;
        param.pipeline = node.pipeline;
    }
    _setRenderPipeline(param) {
        param.token.pipeline = param.pipeline;
    }
}
WebGPUCacheRenderPipelineTree._Cache = new NodeState(); //# sourceMappingURL=webgpuCacheRenderPipelineTree.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/webgpuStencilStateComposer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WebGPUStencilStateComposer",
    ()=>WebGPUStencilStateComposer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$States$2f$stencilStateComposer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/States/stencilStateComposer.js [app-client] (ecmascript)");
;
class WebGPUStencilStateComposer extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$States$2f$stencilStateComposer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StencilStateComposer"] {
    constructor(cache){
        super(false);
        this._cache = cache;
        this.reset();
    }
    get func() {
        return this._func;
    }
    set func(value) {
        if (this._func === value) {
            return;
        }
        this._func = value;
        this._cache.setStencilCompare(value);
    }
    get backFunc() {
        return this._backFunc;
    }
    set backFunc(value) {
        if (this._backFunc === value) {
            return;
        }
        this._backFunc = value;
        this._cache.setStencilBackCompare(value);
    }
    get funcMask() {
        return this._funcMask;
    }
    set funcMask(value) {
        if (this._funcMask === value) {
            return;
        }
        this._funcMask = value;
        this._cache.setStencilReadMask(value);
    }
    get opStencilFail() {
        return this._opStencilFail;
    }
    set opStencilFail(value) {
        if (this._opStencilFail === value) {
            return;
        }
        this._opStencilFail = value;
        this._cache.setStencilFailOp(value);
    }
    get opDepthFail() {
        return this._opDepthFail;
    }
    set opDepthFail(value) {
        if (this._opDepthFail === value) {
            return;
        }
        this._opDepthFail = value;
        this._cache.setStencilDepthFailOp(value);
    }
    get opStencilDepthPass() {
        return this._opStencilDepthPass;
    }
    set opStencilDepthPass(value) {
        if (this._opStencilDepthPass === value) {
            return;
        }
        this._opStencilDepthPass = value;
        this._cache.setStencilPassOp(value);
    }
    get backOpStencilFail() {
        return this._backOpStencilFail;
    }
    set backOpStencilFail(value) {
        if (this._backOpStencilFail === value) {
            return;
        }
        this._backOpStencilFail = value;
        this._cache.setStencilBackFailOp(value);
    }
    get backOpDepthFail() {
        return this._backOpDepthFail;
    }
    set backOpDepthFail(value) {
        if (this._backOpDepthFail === value) {
            return;
        }
        this._backOpDepthFail = value;
        this._cache.setStencilBackDepthFailOp(value);
    }
    get backOpStencilDepthPass() {
        return this._backOpStencilDepthPass;
    }
    set backOpStencilDepthPass(value) {
        if (this._backOpStencilDepthPass === value) {
            return;
        }
        this._backOpStencilDepthPass = value;
        this._cache.setStencilBackPassOp(value);
    }
    get mask() {
        return this._mask;
    }
    set mask(value) {
        if (this._mask === value) {
            return;
        }
        this._mask = value;
        this._cache.setStencilWriteMask(value);
    }
    get enabled() {
        return this._enabled;
    }
    set enabled(value) {
        if (this._enabled === value) {
            return;
        }
        this._enabled = value;
        this._cache.setStencilEnabled(value);
    }
    reset() {
        super.reset();
        this._cache.resetStencilState();
    }
    apply() {
        const stencilMaterialEnabled = !this.useStencilGlobalOnly && !!this.stencilMaterial?.enabled;
        this.enabled = stencilMaterialEnabled ? this.stencilMaterial.enabled : this.stencilGlobal.enabled;
        if (!this.enabled) {
            return;
        }
        this.mask = stencilMaterialEnabled ? this.stencilMaterial.mask : this.stencilGlobal.mask;
        this.funcRef = stencilMaterialEnabled ? this.stencilMaterial.funcRef : this.stencilGlobal.funcRef;
        this.funcMask = stencilMaterialEnabled ? this.stencilMaterial.funcMask : this.stencilGlobal.funcMask;
        this.func = stencilMaterialEnabled ? this.stencilMaterial.func : this.stencilGlobal.func;
        this.opStencilFail = stencilMaterialEnabled ? this.stencilMaterial.opStencilFail : this.stencilGlobal.opStencilFail;
        this.opDepthFail = stencilMaterialEnabled ? this.stencilMaterial.opDepthFail : this.stencilGlobal.opDepthFail;
        this.opStencilDepthPass = stencilMaterialEnabled ? this.stencilMaterial.opStencilDepthPass : this.stencilGlobal.opStencilDepthPass;
        this.backFunc = stencilMaterialEnabled ? this.stencilMaterial.backFunc : this.stencilGlobal.backFunc;
        this.backOpStencilFail = stencilMaterialEnabled ? this.stencilMaterial.backOpStencilFail : this.stencilGlobal.backOpStencilFail;
        this.backOpDepthFail = stencilMaterialEnabled ? this.stencilMaterial.backOpDepthFail : this.stencilGlobal.backOpDepthFail;
        this.backOpStencilDepthPass = stencilMaterialEnabled ? this.stencilMaterial.backOpStencilDepthPass : this.stencilGlobal.backOpStencilDepthPass;
    }
} //# sourceMappingURL=webgpuStencilStateComposer.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/webgpuDepthCullingState.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WebGPUDepthCullingState",
    ()=>WebGPUDepthCullingState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$States$2f$depthCullingState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/States/depthCullingState.js [app-client] (ecmascript)");
;
class WebGPUDepthCullingState extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$States$2f$depthCullingState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DepthCullingState"] {
    /**
     * Initializes the state.
     * @param cache
     */ constructor(cache){
        super(false);
        this._cache = cache;
        this.reset();
    }
    get zOffset() {
        return this._zOffset;
    }
    set zOffset(value) {
        if (this._zOffset === value) {
            return;
        }
        this._zOffset = value;
        this._isZOffsetDirty = true;
        this._cache.setDepthBiasSlopeScale(value);
    }
    get zOffsetUnits() {
        return this._zOffsetUnits;
    }
    set zOffsetUnits(value) {
        if (this._zOffsetUnits === value) {
            return;
        }
        this._zOffsetUnits = value;
        this._isZOffsetDirty = true;
        this._cache.setDepthBias(value);
    }
    get cullFace() {
        return this._cullFace;
    }
    set cullFace(value) {
        if (this._cullFace === value) {
            return;
        }
        this._cullFace = value;
        this._isCullFaceDirty = true;
        this._cache.setCullFace(value ?? 1);
    }
    get cull() {
        return this._cull;
    }
    set cull(value) {
        if (this._cull === value) {
            return;
        }
        this._cull = value;
        this._isCullDirty = true;
        this._cache.setCullEnabled(!!value);
    }
    get depthFunc() {
        return this._depthFunc;
    }
    set depthFunc(value) {
        if (this._depthFunc === value) {
            return;
        }
        this._depthFunc = value;
        this._isDepthFuncDirty = true;
        this._cache.setDepthCompare(value);
    }
    get depthMask() {
        return this._depthMask;
    }
    set depthMask(value) {
        if (this._depthMask === value) {
            return;
        }
        this._depthMask = value;
        this._isDepthMaskDirty = true;
        this._cache.setDepthWriteEnabled(value);
    }
    get depthTest() {
        return this._depthTest;
    }
    set depthTest(value) {
        if (this._depthTest === value) {
            return;
        }
        this._depthTest = value;
        this._isDepthTestDirty = true;
        this._cache.setDepthTestEnabled(value);
    }
    get frontFace() {
        return this._frontFace;
    }
    set frontFace(value) {
        if (this._frontFace === value) {
            return;
        }
        this._frontFace = value;
        this._isFrontFaceDirty = true;
        this._cache.setFrontFace(value ?? 2);
    }
    reset() {
        super.reset();
        this._cache.resetDepthCullingState();
    }
    apply() {
    // nothing to do
    }
} //# sourceMappingURL=webgpuDepthCullingState.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/webgpuMaterialContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable babylonjs/available */ /* eslint-disable jsdoc/require-jsdoc */ __turbopack_context__.s([
    "WebGPUMaterialContext",
    ()=>WebGPUMaterialContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$externalTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/externalTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuCacheSampler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/webgpuCacheSampler.js [app-client] (ecmascript)");
;
;
class WebGPUMaterialContext {
    get forceBindGroupCreation() {
        // If there is at least one external texture to bind, we must recreate the bind groups each time
        // because we need to retrieve a new texture each frame (by calling device.importExternalTexture)
        return this._numExternalTextures > 0;
    }
    get hasFloatOrDepthTextures() {
        return this._numFloatOrDepthTextures > 0;
    }
    constructor(){
        this.useVertexPulling = false;
        this.uniqueId = WebGPUMaterialContext._Counter++;
        this.updateId = 0;
        this.textureState = 0;
        this.reset();
    }
    reset() {
        this.samplers = {};
        this.textures = {};
        this.isDirty = true;
        this._numFloatOrDepthTextures = 0;
        this._numExternalTextures = 0;
    }
    setSampler(name, sampler) {
        let samplerCache = this.samplers[name];
        let currentHashCode = -1;
        if (!samplerCache) {
            this.samplers[name] = samplerCache = {
                sampler,
                hashCode: 0
            };
        } else {
            currentHashCode = samplerCache.hashCode;
        }
        samplerCache.sampler = sampler;
        samplerCache.hashCode = sampler ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuCacheSampler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGPUCacheSampler"].GetSamplerHashCode(sampler) : 0;
        const isDirty = currentHashCode !== samplerCache.hashCode;
        if (isDirty) {
            this.updateId++;
        }
        this.isDirty || (this.isDirty = isDirty);
    }
    setTexture(name, texture) {
        let textureCache = this.textures[name];
        let currentTextureId = -1;
        if (!textureCache) {
            this.textures[name] = textureCache = {
                texture,
                isFloatOrDepthTexture: false,
                isExternalTexture: false
            };
        } else {
            currentTextureId = textureCache.texture?.uniqueId ?? -1;
        }
        if (textureCache.isExternalTexture) {
            this._numExternalTextures--;
        }
        if (textureCache.isFloatOrDepthTexture) {
            this._numFloatOrDepthTextures--;
        }
        if (texture) {
            textureCache.isFloatOrDepthTexture = texture.type === 1 || texture.format >= 13 && texture.format <= 18;
            textureCache.isExternalTexture = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$externalTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExternalTexture"].IsExternalTexture(texture);
            if (textureCache.isFloatOrDepthTexture) {
                this._numFloatOrDepthTextures++;
            }
            if (textureCache.isExternalTexture) {
                this._numExternalTextures++;
            }
        } else {
            textureCache.isFloatOrDepthTexture = false;
            textureCache.isExternalTexture = false;
        }
        textureCache.texture = texture;
        const isDirty = currentTextureId !== (texture?.uniqueId ?? -1);
        if (isDirty) {
            this.updateId++;
        }
        this.isDirty || (this.isDirty = isDirty);
    }
}
WebGPUMaterialContext._Counter = 0; //# sourceMappingURL=webgpuMaterialContext.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/webgpuDrawContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WebGPUDrawContext",
    ()=>WebGPUDrawContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/webgpuConstants.js [app-client] (ecmascript)");
;
class WebGPUDrawContext {
    /**
     * Checks if the draw context is dirty.
     * @param materialContextUpdateId The update ID of the material context associated with the draw context.
     * @returns True if the draw or material context is dirty, false otherwise.
     */ isDirty(materialContextUpdateId) {
        return this._isDirty || this._materialContextUpdateId !== materialContextUpdateId;
    }
    /**
     * Resets the dirty state of the draw context.
     * @param materialContextUpdateId The update ID of the material context associated with the draw context.
     */ resetIsDirty(materialContextUpdateId) {
        this._isDirty = false;
        this._materialContextUpdateId = materialContextUpdateId;
    }
    get enableIndirectDraw() {
        return this._enableIndirectDraw;
    }
    set enableIndirectDraw(enable) {
        this._enableIndirectDrawInCompatMode = true;
        if (this._enableIndirectDraw === enable) {
            return;
        }
        this._enableIndirectDraw = enable;
        if (!enable && !this._useInstancing && this.indirectDrawBuffer) {
            this._bufferManager.releaseBuffer(this.indirectDrawBuffer);
            this.indirectDrawBuffer = undefined;
            this._indirectDrawData = undefined;
        } else if (enable && !this.indirectDrawBuffer) {
            this.indirectDrawBuffer = this._bufferManager.createRawBuffer(20, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferUsage"].CopyDst | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferUsage"].Indirect | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferUsage"].Storage, undefined, "IndirectDrawBuffer");
            this._indirectDrawData = new Uint32Array(5);
            this._indirectDrawData[3] = 0;
            this._indirectDrawData[4] = 0;
        }
    }
    get useInstancing() {
        return this._useInstancing;
    }
    set useInstancing(use) {
        if (this._useInstancing === use) {
            return;
        }
        this._useInstancing = use;
        this._currentInstanceCount = -1;
        const enableIndirectDrawInCompatMode = this._enableIndirectDrawInCompatMode;
        this.enableIndirectDraw = use;
        this._enableIndirectDrawInCompatMode = enableIndirectDrawInCompatMode;
    }
    /**
     * Creates a new WebGPUDrawContext.
     * @param bufferManager The buffer manager used to manage WebGPU buffers.
     * @param _dummyIndexBuffer A dummy index buffer to be bound as the "indices"
     * storage buffer when no index buffer is provided.
     */ constructor(bufferManager, _dummyIndexBuffer){
        this._dummyIndexBuffer = _dummyIndexBuffer;
        /**
         * @internal
         * By default, indirect draws are enabled in NON compatibility mode only
         * To enable indirect draws in compatibility mode (done by the end user), enableIndirectDraw must be set to true
         */ this._enableIndirectDrawInCompatMode = false;
        this._bufferManager = bufferManager;
        this.uniqueId = WebGPUDrawContext._Counter++;
        this._useInstancing = false;
        this._currentInstanceCount = 0;
        this._enableIndirectDraw = false;
        this._vertexPullingEnabled = false;
        this.reset();
    }
    reset() {
        this.buffers = {};
        this._isDirty = true;
        this._materialContextUpdateId = 0;
        this.fastBundle = undefined;
        this.bindGroups = undefined;
        this._vertexPullingEnabled = false;
    }
    /**
     * Associates a buffer to the draw context.
     * @param name The name of the buffer.
     * @param buffer The buffer to set.
     */ setBuffer(name, buffer) {
        this._isDirty || (this._isDirty = buffer?.uniqueId !== this.buffers[name]?.uniqueId);
        this.buffers[name] = buffer;
    }
    setIndirectData(indexOrVertexCount, instanceCount, firstIndexOrVertex, forceUpdate = false) {
        if (!forceUpdate && instanceCount === this._currentInstanceCount || !this.indirectDrawBuffer || !this._indirectDrawData) {
            // The current buffer is already up to date so do nothing
            // Note that we only check for instanceCount and not indexOrVertexCount nor firstIndexOrVertex because those values
            // are supposed to not change during the lifetime of a draw context
            return;
        }
        this._currentInstanceCount = instanceCount;
        this._indirectDrawData[0] = indexOrVertexCount;
        this._indirectDrawData[1] = instanceCount;
        this._indirectDrawData[2] = firstIndexOrVertex;
        this._bufferManager.setRawData(this.indirectDrawBuffer, 0, this._indirectDrawData, 0, 20);
    }
    setVertexPulling(useVertexPulling, webgpuPipelineContext, vertexBuffers, indexBuffer, overrideVertexBuffers) {
        if (this._vertexPullingEnabled === useVertexPulling) {
            return;
        }
        this._vertexPullingEnabled = useVertexPulling;
        this._isDirty = true;
        const bufferNames = webgpuPipelineContext.shaderProcessingContext.bufferNames;
        if (overrideVertexBuffers) {
            for(const attributeName in overrideVertexBuffers){
                const vertexBuffer = overrideVertexBuffers[attributeName];
                if (!vertexBuffer || bufferNames.indexOf(attributeName) === -1) {
                    continue;
                }
                const buffer = vertexBuffer.effectiveBuffer;
                this.setBuffer(attributeName, useVertexPulling ? buffer : null);
            }
        }
        for(const attributeName in vertexBuffers){
            if (overrideVertexBuffers && attributeName in overrideVertexBuffers) {
                continue;
            }
            const vertexBuffer = vertexBuffers[attributeName];
            if (!vertexBuffer || bufferNames.indexOf(attributeName) === -1) {
                continue;
            }
            const buffer = vertexBuffer.effectiveBuffer;
            this.setBuffer(attributeName, useVertexPulling ? buffer : null);
        }
        if (bufferNames.indexOf("indices") !== -1) {
            this.setBuffer("indices", !useVertexPulling ? null : indexBuffer ?? this._dummyIndexBuffer);
        }
    }
    dispose() {
        if (this.indirectDrawBuffer) {
            this._bufferManager.releaseBuffer(this.indirectDrawBuffer);
            this.indirectDrawBuffer = undefined;
            this._indirectDrawData = undefined;
        }
        this.fastBundle = undefined;
        this.bindGroups = undefined;
        this.buffers = undefined;
        this._enableIndirectDraw = false;
    }
}
WebGPUDrawContext._Counter = 0; //# sourceMappingURL=webgpuDrawContext.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/webgpuCacheBindGroups.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable babylonjs/available */ /* eslint-disable jsdoc/require-jsdoc */ __turbopack_context__.s([
    "WebGPUCacheBindGroups",
    ()=>WebGPUCacheBindGroups
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-client] (ecmascript)");
;
/**
 * Sampler hash codes are 19 bits long, so using a start value of 2^20 for buffer ids will ensure we can't have any collision with the sampler hash codes
 */ const BufferIdStart = 1 << 20;
/**
 * textureIdStart is added to texture ids to ensure we can't have any collision with the buffer ids / sampler hash codes.
 * 2^35 for textureIdStart means we can have:
 * - 2^(35-20) = 2^15 = 32768 possible buffer ids
 * - 2^(53-35) = 2^18 = 524288 possible texture ids
 */ const TextureIdStart = 2 ** 35;
class WebGPUBindGroupCacheNode {
    constructor(){
        this.values = {};
    }
}
class WebGPUCacheBindGroups {
    static get Statistics() {
        return {
            totalCreated: WebGPUCacheBindGroups.NumBindGroupsCreatedTotal,
            lastFrameCreated: WebGPUCacheBindGroups.NumBindGroupsCreatedLastFrame,
            lookupLastFrame: WebGPUCacheBindGroups.NumBindGroupsLookupLastFrame,
            noLookupLastFrame: WebGPUCacheBindGroups.NumBindGroupsNoLookupLastFrame
        };
    }
    static ResetCache() {
        WebGPUCacheBindGroups._Cache = new WebGPUBindGroupCacheNode();
        WebGPUCacheBindGroups.NumBindGroupsCreatedTotal = 0;
        WebGPUCacheBindGroups.NumBindGroupsCreatedLastFrame = 0;
        WebGPUCacheBindGroups.NumBindGroupsLookupLastFrame = 0;
        WebGPUCacheBindGroups.NumBindGroupsNoLookupLastFrame = 0;
        WebGPUCacheBindGroups._NumBindGroupsCreatedCurrentFrame = 0;
        WebGPUCacheBindGroups._NumBindGroupsLookupCurrentFrame = 0;
        WebGPUCacheBindGroups._NumBindGroupsNoLookupCurrentFrame = 0;
    }
    constructor(device, cacheSampler, engine){
        this.disabled = false;
        this._device = device;
        this._cacheSampler = cacheSampler;
        this._engine = engine;
    }
    endFrame() {
        WebGPUCacheBindGroups.NumBindGroupsCreatedLastFrame = WebGPUCacheBindGroups._NumBindGroupsCreatedCurrentFrame;
        WebGPUCacheBindGroups.NumBindGroupsLookupLastFrame = WebGPUCacheBindGroups._NumBindGroupsLookupCurrentFrame;
        WebGPUCacheBindGroups.NumBindGroupsNoLookupLastFrame = WebGPUCacheBindGroups._NumBindGroupsNoLookupCurrentFrame;
        WebGPUCacheBindGroups._NumBindGroupsCreatedCurrentFrame = 0;
        WebGPUCacheBindGroups._NumBindGroupsLookupCurrentFrame = 0;
        WebGPUCacheBindGroups._NumBindGroupsNoLookupCurrentFrame = 0;
    }
    /**
     * Cache is currently based on the uniform/storage buffers, samplers and textures used by the binding groups.
     * Note that all uniform buffers have an offset of 0 in Babylon and we don't have a use case where we would have the same buffer used with different capacity values:
     * that means we don't need to factor in the offset/size of the buffer in the cache, only the id
     * @param webgpuPipelineContext
     * @param drawContext
     * @param materialContext
     * @returns a bind group array
     */ getBindGroups(webgpuPipelineContext, drawContext, materialContext) {
        let bindGroups = undefined;
        let node = WebGPUCacheBindGroups._Cache;
        const cacheIsDisabled = this.disabled || materialContext.forceBindGroupCreation;
        if (!cacheIsDisabled) {
            if (!drawContext.isDirty(materialContext.updateId) && !materialContext.isDirty) {
                WebGPUCacheBindGroups._NumBindGroupsNoLookupCurrentFrame++;
                return drawContext.bindGroups;
            }
            for (const bufferName of webgpuPipelineContext.shaderProcessingContext.bufferNames){
                const uboId = (drawContext.buffers[bufferName]?.uniqueId ?? 0) + BufferIdStart;
                let nextNode = node.values[uboId];
                if (!nextNode) {
                    nextNode = new WebGPUBindGroupCacheNode();
                    node.values[uboId] = nextNode;
                }
                node = nextNode;
            }
            for (const samplerName of webgpuPipelineContext.shaderProcessingContext.samplerNames){
                const samplerHashCode = materialContext.samplers[samplerName]?.hashCode ?? 0;
                let nextNode = node.values[samplerHashCode];
                if (!nextNode) {
                    nextNode = new WebGPUBindGroupCacheNode();
                    node.values[samplerHashCode] = nextNode;
                }
                node = nextNode;
            }
            for (const textureName of webgpuPipelineContext.shaderProcessingContext.textureNames){
                const textureId = (materialContext.textures[textureName]?.texture?.uniqueId ?? 0) + TextureIdStart;
                let nextNode = node.values[textureId];
                if (!nextNode) {
                    nextNode = new WebGPUBindGroupCacheNode();
                    node.values[textureId] = nextNode;
                }
                node = nextNode;
            }
            bindGroups = node.bindGroups;
        }
        drawContext.resetIsDirty(materialContext.updateId);
        materialContext.isDirty = false;
        if (bindGroups) {
            drawContext.bindGroups = bindGroups;
            WebGPUCacheBindGroups._NumBindGroupsLookupCurrentFrame++;
            return bindGroups;
        }
        bindGroups = [];
        drawContext.bindGroups = bindGroups;
        if (!cacheIsDisabled) {
            node.bindGroups = bindGroups;
        }
        WebGPUCacheBindGroups.NumBindGroupsCreatedTotal++;
        WebGPUCacheBindGroups._NumBindGroupsCreatedCurrentFrame++;
        const bindGroupLayouts = webgpuPipelineContext.bindGroupLayouts[materialContext.textureState];
        for(let i = 0; i < webgpuPipelineContext.shaderProcessingContext.bindGroupLayoutEntries.length; i++){
            const setDefinition = webgpuPipelineContext.shaderProcessingContext.bindGroupLayoutEntries[i];
            const entries = webgpuPipelineContext.shaderProcessingContext.bindGroupEntries[i];
            for(let j = 0; j < setDefinition.length; j++){
                const entry = webgpuPipelineContext.shaderProcessingContext.bindGroupLayoutEntries[i][j];
                const entryInfo = webgpuPipelineContext.shaderProcessingContext.bindGroupLayoutEntryInfo[i][entry.binding];
                const name = entryInfo.nameInArrayOfTexture ?? entryInfo.name;
                if (entry.sampler) {
                    const bindingInfo = materialContext.samplers[name];
                    if (bindingInfo) {
                        const sampler = bindingInfo.sampler;
                        if (!sampler) {
                            if (this._engine.dbgSanityChecks) {
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Error(`Trying to bind a null sampler! entry=${JSON.stringify(entry)}, name=${name}, bindingInfo=${JSON.stringify(bindingInfo, (key, value)=>key === "texture" ? "<no dump>" : value)}, materialContext.uniqueId=${materialContext.uniqueId}`, 50);
                            }
                            continue;
                        }
                        entries[j].resource = this._cacheSampler.getSampler(sampler, false, bindingInfo.hashCode, sampler.label);
                    } else {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Error(`Sampler "${name}" not found in the material context. Make sure you bound it. entry=${JSON.stringify(entry)}, materialContext=${JSON.stringify(materialContext, (key, value)=>key === "texture" || key === "sampler" ? "<no dump>" : value)}`, 50);
                    }
                } else if (entry.texture || entry.storageTexture) {
                    const bindingInfo = materialContext.textures[name];
                    if (bindingInfo) {
                        if (this._engine.dbgSanityChecks && bindingInfo.texture === null) {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Error(`Trying to bind a null texture! name="${name}", entry=${JSON.stringify(entry)}, bindingInfo=${JSON.stringify(bindingInfo, (key, value)=>key === "texture" ? "<no dump>" : value)}, materialContext.uniqueId=${materialContext.uniqueId}`, 50);
                            continue;
                        }
                        const hardwareTexture = bindingInfo.texture._hardwareTexture;
                        if (this._engine.dbgSanityChecks && (!hardwareTexture || entry.texture && !hardwareTexture.view || entry.storageTexture && !hardwareTexture.viewForWriting)) {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Error(`Trying to bind a null gpu texture or view! entry=${JSON.stringify(entry)}, name=${name}, bindingInfo=${JSON.stringify(bindingInfo, (key, value)=>key === "texture" ? "<no dump>" : value)}, isReady=${bindingInfo.texture?.isReady}, materialContext.uniqueId=${materialContext.uniqueId}`, 50);
                            continue;
                        }
                        entries[j].resource = entry.storageTexture ? hardwareTexture.viewForWriting : hardwareTexture.view;
                    } else {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Error(`Texture "${name}" not found in the material context. Make sure you bound it (something like effect.setTexture("${name}", texture)). entry=${JSON.stringify(entry)}, materialContext=${JSON.stringify(materialContext, (key, value)=>key === "texture" || key === "sampler" ? "<no dump>" : value)}`, 50);
                    }
                } else if (entry.externalTexture) {
                    const bindingInfo = materialContext.textures[name];
                    if (bindingInfo) {
                        if (this._engine.dbgSanityChecks && bindingInfo.texture === null) {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Error(`Trying to bind a null external texture! entry=${JSON.stringify(entry)}, name=${name}, bindingInfo=${JSON.stringify(bindingInfo, (key, value)=>key === "texture" ? "<no dump>" : value)}, materialContext.uniqueId=${materialContext.uniqueId}`, 50);
                            continue;
                        }
                        const externalTexture = bindingInfo.texture.underlyingResource;
                        if (this._engine.dbgSanityChecks && !externalTexture) {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Error(`Trying to bind a null gpu external texture! entry=${JSON.stringify(entry)}, name=${name}, bindingInfo=${JSON.stringify(bindingInfo, (key, value)=>key === "texture" ? "<no dump>" : value)}, isReady=${bindingInfo.texture?.isReady}, materialContext.uniqueId=${materialContext.uniqueId}`, 50);
                            continue;
                        }
                        entries[j].resource = this._device.importExternalTexture({
                            source: externalTexture
                        });
                    } else {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Error(`External texture "${name}" not found in the material context. Make sure you bound it. entry=${JSON.stringify(entry)}, materialContext=${JSON.stringify(materialContext, (key, value)=>key === "texture" || key === "sampler" ? "<no dump>" : value)}`, 50);
                    }
                } else if (entry.buffer) {
                    const dataBuffer = drawContext.buffers[name];
                    if (dataBuffer) {
                        const webgpuBuffer = dataBuffer.underlyingResource;
                        entries[j].resource.buffer = webgpuBuffer;
                        entries[j].resource.size = dataBuffer.capacity;
                    } else {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Error(`Can't find buffer "${name}" in the draw context. Make sure you bound it. entry=${JSON.stringify(entry)}, buffers=${JSON.stringify(drawContext.buffers)}, drawContext.uniqueId=${drawContext.uniqueId}`, 50);
                    }
                }
            }
            const groupLayout = bindGroupLayouts[i];
            bindGroups[i] = this._device.createBindGroup({
                layout: groupLayout,
                entries
            });
        }
        return bindGroups;
    }
}
WebGPUCacheBindGroups.NumBindGroupsCreatedTotal = 0;
WebGPUCacheBindGroups.NumBindGroupsCreatedLastFrame = 0;
WebGPUCacheBindGroups.NumBindGroupsLookupLastFrame = 0;
WebGPUCacheBindGroups.NumBindGroupsNoLookupLastFrame = 0;
WebGPUCacheBindGroups._Cache = new WebGPUBindGroupCacheNode();
WebGPUCacheBindGroups._NumBindGroupsCreatedCurrentFrame = 0;
WebGPUCacheBindGroups._NumBindGroupsLookupCurrentFrame = 0;
WebGPUCacheBindGroups._NumBindGroupsNoLookupCurrentFrame = 0; //# sourceMappingURL=webgpuCacheBindGroups.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/webgpuClearQuad.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WebGPUClearQuad",
    ()=>WebGPUClearQuad
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuCacheRenderPipelineTree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/webgpuCacheRenderPipelineTree.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuShaderProcessingContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/webgpuShaderProcessingContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuTextureHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/webgpuTextureHelper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuTextureManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/webgpuTextureManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$clearQuad$2e$vertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/clearQuad.vertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$clearQuad$2e$fragment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/clearQuad.fragment.js [app-client] (ecmascript)");
;
;
;
;
;
;
class WebGPUClearQuad {
    setDepthStencilFormat(format) {
        this._depthTextureFormat = format;
        this._cacheRenderPipeline.setDepthStencilFormat(format);
    }
    setColorFormat(format) {
        this._cacheRenderPipeline.setColorFormat(format);
    }
    setMRTAttachments(attachments, textureArray, textureCount) {
        this._cacheRenderPipeline.setMRT(textureArray, textureCount);
        this._cacheRenderPipeline.setMRTAttachments(attachments);
    }
    constructor(device, engine, emptyVertexBuffer){
        this._bindGroups = {};
        this._bundleCache = {};
        this._keyTemp = [];
        this._device = device;
        this._engine = engine;
        this._cacheRenderPipeline = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuCacheRenderPipelineTree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGPUCacheRenderPipelineTree"](this._device, emptyVertexBuffer);
        this._cacheRenderPipeline.setDepthTestEnabled(false);
        this._cacheRenderPipeline.setStencilReadMask(0xff);
        this._effect = engine.createEffect("clearQuad", [], [
            "color",
            "depthValue"
        ], undefined, undefined, undefined, undefined, undefined, undefined, 1 /* ShaderLanguage.WGSL */ );
    }
    clear(renderPass, clearColor, clearDepth, clearStencil, sampleCount = 1) {
        let renderPass2;
        let bundle = null;
        let bundleKey;
        const isRTTPass = !!this._engine._currentRenderTarget;
        if (renderPass) {
            renderPass2 = renderPass;
        } else {
            let idx = 0;
            this._keyTemp.length = 0;
            for(let i = 0; i < this._cacheRenderPipeline.colorFormats.length; ++i){
                this._keyTemp[idx++] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuTextureManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderableTextureFormatToIndex"][this._cacheRenderPipeline.colorFormats[i] ?? ""];
            }
            const depthStencilFormatIndex = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuTextureManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderableTextureFormatToIndex"][this._depthTextureFormat ?? 0];
            this._keyTemp[idx] = (clearColor ? clearColor.r + clearColor.g * 256 + clearColor.b * 256 * 256 + clearColor.a * 256 * 256 * 256 : 0) + (clearDepth ? 2 ** 32 : 0) + (clearStencil ? 2 ** 33 : 0) + (this._engine.useReverseDepthBuffer ? 2 ** 34 : 0) + (isRTTPass ? 2 ** 35 : 0) + (sampleCount > 1 ? 2 ** 36 : 0) + depthStencilFormatIndex * 2 ** 37;
            bundleKey = this._keyTemp.join("_");
            bundle = this._bundleCache[bundleKey];
            if (bundle) {
                return bundle;
            }
            renderPass2 = this._device.createRenderBundleEncoder({
                label: "clearQuadRenderBundle",
                colorFormats: this._cacheRenderPipeline.colorFormats,
                depthStencilFormat: this._depthTextureFormat,
                sampleCount: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuTextureHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGPUTextureHelper"].GetSample(sampleCount)
            });
        }
        this._cacheRenderPipeline.setDepthWriteEnabled(!!clearDepth);
        this._cacheRenderPipeline.setStencilEnabled(!!clearStencil && !!this._depthTextureFormat && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuTextureHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGPUTextureHelper"].HasStencilAspect(this._depthTextureFormat));
        this._cacheRenderPipeline.setStencilWriteMask(clearStencil ? 0xff : 0);
        this._cacheRenderPipeline.setStencilCompare(clearStencil ? 519 : 512);
        this._cacheRenderPipeline.setStencilPassOp(clearStencil ? 7681 : 7680);
        this._cacheRenderPipeline.setWriteMask(clearColor ? 0xf : 0);
        const pipeline = this._cacheRenderPipeline.getRenderPipeline(7, this._effect, sampleCount);
        const webgpuPipelineContext = this._effect._pipelineContext;
        if (clearColor) {
            this._effect.setDirectColor4("color", clearColor);
        }
        this._effect.setFloat("depthValue", this._engine.useReverseDepthBuffer ? this._engine._clearReverseDepthValue : this._engine._clearDepthValue);
        webgpuPipelineContext.uniformBuffer.update();
        const bufferInternals = isRTTPass ? this._engine._ubInvertY : this._engine._ubDontInvertY;
        const bufferLeftOver = webgpuPipelineContext.uniformBuffer.getBuffer();
        const key = bufferLeftOver.uniqueId + "-" + bufferInternals.uniqueId;
        let bindGroups = this._bindGroups[key];
        if (!bindGroups) {
            const bindGroupLayouts = webgpuPipelineContext.bindGroupLayouts[0];
            bindGroups = this._bindGroups[key] = [];
            bindGroups.push(this._device.createBindGroup({
                label: `clearQuadBindGroup0-${key}`,
                layout: bindGroupLayouts[0],
                entries: []
            }));
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuShaderProcessingContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGPUShaderProcessingContext"]._SimplifiedKnownBindings) {
                bindGroups.push(this._device.createBindGroup({
                    label: `clearQuadBindGroup1-${key}`,
                    layout: bindGroupLayouts[1],
                    entries: []
                }));
            }
            bindGroups.push(this._device.createBindGroup({
                label: `clearQuadBindGroup${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuShaderProcessingContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGPUShaderProcessingContext"]._SimplifiedKnownBindings ? 1 : 2}-${key}`,
                layout: bindGroupLayouts[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuShaderProcessingContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGPUShaderProcessingContext"]._SimplifiedKnownBindings ? 1 : 2],
                entries: [
                    {
                        binding: 0,
                        resource: {
                            buffer: bufferInternals.underlyingResource,
                            size: bufferInternals.capacity
                        }
                    },
                    {
                        binding: 1,
                        resource: {
                            buffer: bufferLeftOver.underlyingResource,
                            size: bufferLeftOver.capacity
                        }
                    }
                ]
            }));
        }
        renderPass2.setPipeline(pipeline);
        for(let i = 0; i < bindGroups.length; ++i){
            renderPass2.setBindGroup(i, bindGroups[i]);
        }
        renderPass2.draw(4, 1, 0, 0);
        if (!renderPass) {
            bundle = renderPass2.finish();
            this._bundleCache[bundleKey] = bundle;
        }
        return bundle;
    }
} //# sourceMappingURL=webgpuClearQuad.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/webgpuBundleList.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WebGPUBundleList",
    ()=>WebGPUBundleList,
    "WebGPURenderItemBeginOcclusionQuery",
    ()=>WebGPURenderItemBeginOcclusionQuery,
    "WebGPURenderItemBlendColor",
    ()=>WebGPURenderItemBlendColor,
    "WebGPURenderItemEndOcclusionQuery",
    ()=>WebGPURenderItemEndOcclusionQuery,
    "WebGPURenderItemScissor",
    ()=>WebGPURenderItemScissor,
    "WebGPURenderItemStencilRef",
    ()=>WebGPURenderItemStencilRef,
    "WebGPURenderItemViewport",
    ()=>WebGPURenderItemViewport
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuTextureHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/webgpuTextureHelper.js [app-client] (ecmascript)");
;
class WebGPURenderItemViewport {
    constructor(x, y, w, h){
        this.x = Math.floor(x);
        this.y = Math.floor(y);
        this.w = Math.floor(w);
        this.h = Math.floor(h);
    }
    run(renderPass) {
        renderPass.setViewport(this.x, this.y, this.w, this.h, 0, 1);
    }
    clone() {
        return new WebGPURenderItemViewport(this.x, this.y, this.w, this.h);
    }
}
class WebGPURenderItemScissor {
    constructor(x, y, w, h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
    run(renderPass) {
        renderPass.setScissorRect(this.x, this.y, this.w, this.h);
    }
    clone() {
        return new WebGPURenderItemScissor(this.x, this.y, this.w, this.h);
    }
}
class WebGPURenderItemStencilRef {
    constructor(ref){
        this.ref = ref;
    }
    run(renderPass) {
        renderPass.setStencilReference(this.ref);
    }
    clone() {
        return new WebGPURenderItemStencilRef(this.ref);
    }
}
class WebGPURenderItemBlendColor {
    constructor(color){
        this.color = color;
    }
    run(renderPass) {
        renderPass.setBlendConstant(this.color);
    }
    clone() {
        return new WebGPURenderItemBlendColor(this.color);
    }
}
class WebGPURenderItemBeginOcclusionQuery {
    constructor(query){
        this.query = query;
    }
    run(renderPass) {
        renderPass.beginOcclusionQuery(this.query);
    }
    clone() {
        return new WebGPURenderItemBeginOcclusionQuery(this.query);
    }
}
class WebGPURenderItemEndOcclusionQuery {
    constructor(){}
    run(renderPass) {
        renderPass.endOcclusionQuery();
    }
    clone() {
        return new WebGPURenderItemEndOcclusionQuery();
    }
}
class WebGPURenderItemBundles {
    constructor(){
        this.bundles = [];
    }
    run(renderPass) {
        renderPass.executeBundles(this.bundles);
    }
    clone() {
        const cloned = new WebGPURenderItemBundles();
        cloned.bundles = this.bundles;
        return cloned;
    }
}
class WebGPUBundleList {
    constructor(device){
        this.numDrawCalls = 0;
        this._device = device;
        this._list = new Array(10);
        this._listLength = 0;
    }
    addBundle(bundle) {
        if (!this._currentItemIsBundle) {
            const item = new WebGPURenderItemBundles();
            this._list[this._listLength++] = item;
            this._currentBundleList = item.bundles;
            this._currentItemIsBundle = true;
        }
        if (bundle) {
            this._currentBundleList.push(bundle);
        }
    }
    _finishBundle() {
        if (this._currentItemIsBundle && this._bundleEncoder) {
            this._currentBundleList.push(this._bundleEncoder.finish());
            this._bundleEncoder = undefined;
            this._currentItemIsBundle = false;
        }
    }
    addItem(item) {
        this._finishBundle();
        this._list[this._listLength++] = item;
        this._currentItemIsBundle = false;
    }
    getBundleEncoder(colorFormats, depthStencilFormat, sampleCount) {
        if (!this._currentItemIsBundle) {
            this.addBundle();
            this._bundleEncoder = this._device.createRenderBundleEncoder({
                colorFormats,
                depthStencilFormat,
                sampleCount: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuTextureHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGPUTextureHelper"].GetSample(sampleCount)
            });
        }
        return this._bundleEncoder;
    }
    close() {
        this._finishBundle();
    }
    run(renderPass) {
        this.close();
        for(let i = 0; i < this._listLength; ++i){
            this._list[i].run(renderPass);
        }
    }
    reset() {
        this._listLength = 0;
        this._currentItemIsBundle = false;
        this.numDrawCalls = 0;
    }
    clone() {
        this.close();
        const cloned = new WebGPUBundleList(this._device);
        cloned._list = new Array(this._listLength);
        cloned._listLength = this._listLength;
        cloned.numDrawCalls = this.numDrawCalls;
        for(let i = 0; i < this._listLength; ++i){
            cloned._list[i] = this._list[i].clone();
        }
        return cloned;
    }
} //# sourceMappingURL=webgpuBundleList.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/webgpuQuerySet.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WebGPUQuerySet",
    ()=>WebGPUQuerySet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/webgpuConstants.js [app-client] (ecmascript)");
;
class WebGPUQuerySet {
    get querySet() {
        return this._querySet;
    }
    constructor(engine, count, type, device, bufferManager, canUseMultipleBuffers = true, label){
        this._dstBuffers = [];
        this._engine = engine;
        this._device = device;
        this._bufferManager = bufferManager;
        this._count = count;
        this._canUseMultipleBuffers = canUseMultipleBuffers;
        this._querySet = device.createQuerySet({
            label: label ?? "QuerySet",
            type,
            count
        });
        this._queryBuffer = bufferManager.createRawBuffer(8 * count, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferUsage"].QueryResolve | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferUsage"].CopySrc, undefined, "QueryBuffer");
        if (!canUseMultipleBuffers) {
            this._dstBuffers.push(this._bufferManager.createRawBuffer(8 * this._count, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferUsage"].MapRead | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferUsage"].CopyDst, undefined, "QueryBufferNoMultipleBuffers"));
        }
    }
    _getBuffer(firstQuery, queryCount) {
        if (!this._canUseMultipleBuffers && this._dstBuffers.length === 0) {
            return null;
        }
        const encoderResult = this._device.createCommandEncoder();
        let buffer;
        if (this._dstBuffers.length === 0) {
            buffer = this._bufferManager.createRawBuffer(8 * this._count, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferUsage"].MapRead | __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuConstants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferUsage"].CopyDst, undefined, "QueryBufferAdditionalBuffer");
        } else {
            buffer = this._dstBuffers[this._dstBuffers.length - 1];
            this._dstBuffers.length--;
        }
        encoderResult.resolveQuerySet(this._querySet, firstQuery, queryCount, this._queryBuffer, 0);
        encoderResult.copyBufferToBuffer(this._queryBuffer, 0, buffer, 0, 8 * queryCount);
        this._device.queue.submit([
            encoderResult.finish()
        ]);
        return buffer;
    }
    async readValues(firstQuery = 0, queryCount = 1) {
        const buffer = this._getBuffer(firstQuery, queryCount);
        if (buffer === null) {
            return null;
        }
        const engineId = this._engine.uniqueId;
        try {
            await buffer.mapAsync(1 /* WebGPUConstants.MapMode.Read */ );
            const arrayBuf = new BigUint64Array(buffer.getMappedRange()).slice();
            buffer.unmap();
            this._dstBuffers[this._dstBuffers.length] = buffer;
            return arrayBuf;
        } catch (err) {
            if (this._engine.isDisposed || this._engine.uniqueId !== engineId) {
                // Engine disposed or context loss/restoration
                return null;
            }
            throw err;
        }
    }
    async readValue(firstQuery = 0) {
        const buffer = this._getBuffer(firstQuery, 1);
        if (buffer === null) {
            return null;
        }
        const engineId = this._engine.uniqueId;
        try {
            await buffer.mapAsync(1 /* WebGPUConstants.MapMode.Read */ );
            const arrayBuf = new BigUint64Array(buffer.getMappedRange());
            const value = Number(arrayBuf[0]);
            buffer.unmap();
            this._dstBuffers[this._dstBuffers.length] = buffer;
            return value;
        } catch (err) {
            if (this._engine.isDisposed || this._engine.uniqueId !== engineId) {
                // Engine disposed or context loss/restoration
                return 0;
            }
            throw err;
        }
    }
    async readTwoValuesAndSubtract(firstQuery = 0) {
        const buffer = this._getBuffer(firstQuery, 2);
        if (buffer === null) {
            return null;
        }
        const engineId = this._engine.uniqueId;
        try {
            await buffer.mapAsync(1 /* WebGPUConstants.MapMode.Read */ );
            const arrayBuf = new BigUint64Array(buffer.getMappedRange());
            const value = Number(arrayBuf[1] - arrayBuf[0]);
            buffer.unmap();
            this._dstBuffers[this._dstBuffers.length] = buffer;
            return value;
        } catch (err) {
            if (this._engine.isDisposed || this._engine.uniqueId !== engineId) {
                // Engine disposed or context loss/restoration
                return 0;
            }
            throw err;
        }
    }
    dispose() {
        this._querySet.destroy();
        this._bufferManager.releaseBuffer(this._queryBuffer);
        for(let i = 0; i < this._dstBuffers.length; ++i){
            this._bufferManager.releaseBuffer(this._dstBuffers[i]);
        }
    }
} //# sourceMappingURL=webgpuQuerySet.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/webgpuTimestampQuery.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WebGPUDurationMeasure",
    ()=>WebGPUDurationMeasure,
    "WebGPUTimestampQuery",
    ()=>WebGPUTimestampQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$perfCounter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/perfCounter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuQuerySet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/webgpuQuerySet.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-client] (ecmascript)");
;
;
;
class WebGPUTimestampQuery {
    get gpuFrameTimeCounter() {
        return this._gpuFrameTimeCounter;
    }
    constructor(engine, device, bufferManager){
        this._enabled = false;
        this._gpuFrameTimeCounter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$perfCounter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PerfCounter"]();
        this._measureDurationState = 0;
        this._engine = engine;
        this._device = device;
        this._bufferManager = bufferManager;
    }
    get enable() {
        return this._enabled;
    }
    set enable(value) {
        if (this._enabled === value) {
            return;
        }
        this._enabled = value;
        this._measureDurationState = 0;
        if (value) {
            try {
                this._measureDuration = new WebGPUDurationMeasure(this._engine, this._device, this._bufferManager, 2000, "QuerySet_TimestampQuery");
            } catch (e) {
                this._enabled = false;
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Error("Could not create a WebGPUDurationMeasure!\nError: " + e.message + "\nMake sure timestamp query is supported and enabled in your browser.");
                return;
            }
        } else {
            this._measureDuration.dispose();
        }
    }
    startFrame(commandEncoder) {
        if (this._enabled && this._measureDurationState === 0) {
            this._measureDuration.start(commandEncoder);
            this._measureDurationState = 1;
        }
    }
    endFrame(commandEncoder) {
        if (this._measureDurationState === 1) {
            this._measureDurationState = 2;
            // eslint-disable-next-line @typescript-eslint/no-floating-promises, github/no-then
            this._measureDuration.stop(commandEncoder).then((duration)=>{
                if (duration !== null && duration >= 0) {
                    this._gpuFrameTimeCounter.fetchNewFrame();
                    this._gpuFrameTimeCounter.addCount(duration, true);
                }
                this._measureDurationState = 0;
            });
        }
    }
    startPass(descriptor, index) {
        if (this._enabled) {
            this._measureDuration.startPass(descriptor, index);
        } else {
            descriptor.timestampWrites = undefined;
        }
    }
    endPass(index, gpuPerfCounter) {
        if (!this._enabled || !gpuPerfCounter) {
            return;
        }
        const currentFrameId = this._engine.frameId;
        // eslint-disable-next-line @typescript-eslint/no-floating-promises, github/no-then
        this._measureDuration.stopPass(index).then((duration_)=>{
            gpuPerfCounter._addDuration(currentFrameId, duration_ !== null && duration_ > 0 ? duration_ : 0);
        });
    }
    dispose() {
        this._measureDuration?.dispose();
    }
}
class WebGPUDurationMeasure {
    constructor(engine, device, bufferManager, count = 2, querySetLabel){
        this._count = count;
        this._querySet = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuQuerySet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGPUQuerySet"](engine, count, "timestamp" /* WebGPUConstants.QueryType.Timestamp */ , device, bufferManager, true, querySetLabel);
    }
    start(encoder) {
        encoder.writeTimestamp?.(this._querySet.querySet, 0);
    }
    async stop(encoder) {
        encoder.writeTimestamp?.(this._querySet.querySet, 1);
        return encoder.writeTimestamp ? await this._querySet.readTwoValuesAndSubtract(0) : 0;
    }
    startPass(descriptor, index) {
        if (index + 3 > this._count) {
            throw new Error("WebGPUDurationMeasure: index out of range (" + index + ")");
        }
        descriptor.timestampWrites = {
            querySet: this._querySet.querySet,
            beginningOfPassWriteIndex: index + 2,
            endOfPassWriteIndex: index + 3
        };
    }
    async stopPass(index) {
        return await this._querySet.readTwoValuesAndSubtract(index + 2);
    }
    dispose() {
        this._querySet.dispose();
    }
} //# sourceMappingURL=webgpuTimestampQuery.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/webgpuOcclusionQuery.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WebGPUOcclusionQuery",
    ()=>WebGPUOcclusionQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuQuerySet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/webgpuQuerySet.js [app-client] (ecmascript)");
;
class WebGPUOcclusionQuery {
    get querySet() {
        return this._querySet.querySet;
    }
    get hasQueries() {
        return this._currentTotalIndices !== this._availableIndices.length;
    }
    canBeginQuery(index) {
        if (this._frameQuerySetIsDirty === this._engine.frameId || this._queryFrameId[index] === this._engine.frameId) {
            return false;
        }
        const canBegin = this._engine._getCurrentRenderPassWrapper().renderPassDescriptor.occlusionQuerySet !== undefined;
        if (canBegin) {
            this._queryFrameId[index] = this._engine.frameId;
        }
        return canBegin;
    }
    constructor(engine, device, bufferManager, startCount = 50, incrementCount = 100){
        this._availableIndices = [];
        this._frameQuerySetIsDirty = -1;
        this._queryFrameId = [];
        this._engine = engine;
        this._device = device;
        this._bufferManager = bufferManager;
        this._frameLastBuffer = -1;
        this._currentTotalIndices = 0;
        this._countIncrement = incrementCount;
        this._allocateNewIndices(startCount);
    }
    createQuery() {
        if (this._availableIndices.length === 0) {
            this._allocateNewIndices();
        }
        const index = this._availableIndices[this._availableIndices.length - 1];
        this._availableIndices.length--;
        return index;
    }
    deleteQuery(index) {
        this._availableIndices[this._availableIndices.length] = index;
    }
    isQueryResultAvailable(index) {
        this._retrieveQueryBuffer();
        return !!this._lastBuffer && index < this._lastBuffer.length;
    }
    getQueryResult(index) {
        return Number(this._lastBuffer?.[index] ?? -1);
    }
    _retrieveQueryBuffer() {
        if (this._lastBuffer && this._frameLastBuffer === this._engine.frameId) {
            return;
        }
        if (this._frameLastBuffer !== this._engine.frameId) {
            this._frameLastBuffer = this._engine.frameId;
            // eslint-disable-next-line @typescript-eslint/no-floating-promises, github/no-then
            this._querySet.readValues(0, this._currentTotalIndices).then((arrayBuffer)=>{
                this._lastBuffer = arrayBuffer;
            });
        }
    }
    _allocateNewIndices(numIndices) {
        numIndices = numIndices ?? this._countIncrement;
        this._delayQuerySetDispose();
        for(let i = 0; i < numIndices; ++i){
            this._availableIndices.push(this._currentTotalIndices + i);
        }
        this._currentTotalIndices += numIndices;
        this._querySet = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuQuerySet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGPUQuerySet"](this._engine, this._currentTotalIndices, "occlusion" /* WebGPUConstants.QueryType.Occlusion */ , this._device, this._bufferManager, false, "QuerySet_OcclusionQuery_count_" + this._currentTotalIndices);
        this._frameQuerySetIsDirty = this._engine.frameId;
    }
    _delayQuerySetDispose() {
        const querySet = this._querySet;
        if (querySet) {
            // Wait a bit before disposing of the queryset, in case some queries are still running for it
            setTimeout(()=>querySet.dispose, 1000);
        }
    }
    dispose() {
        this._querySet?.dispose();
        this._availableIndices.length = 0;
    }
} //# sourceMappingURL=webgpuOcclusionQuery.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/webgpuTintWASM.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WebGPUTintWASM",
    ()=>WebGPUTintWASM
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/tools.js [app-client] (ecmascript)");
;
;
class WebGPUTintWASM {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    async initTwgsl(twgslOptions) {
        if (WebGPUTintWASM._Twgsl) {
            return;
        }
        twgslOptions = twgslOptions || {};
        twgslOptions = {
            ...WebGPUTintWASM._TwgslDefaultOptions,
            ...twgslOptions
        };
        if (twgslOptions.twgsl) {
            WebGPUTintWASM._Twgsl = twgslOptions.twgsl;
            return;
        }
        if (twgslOptions.jsPath && twgslOptions.wasmPath) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tools"].LoadBabylonScriptAsync(twgslOptions.jsPath);
        }
        if (self.twgsl) {
            // eslint-disable-next-line require-atomic-updates
            WebGPUTintWASM._Twgsl = await self.twgsl(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tools"].GetBabylonScriptURL(twgslOptions.wasmPath));
            return;
        }
        throw new Error("twgsl is not available.");
    }
    convertSpirV2WGSL(code, disableUniformityAnalysis = false) {
        const ccode = WebGPUTintWASM._Twgsl.convertSpirV2WGSL(code, WebGPUTintWASM.DisableUniformityAnalysis || disableUniformityAnalysis);
        if (WebGPUTintWASM.ShowWGSLShaderCode) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Log(ccode);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Log("***********************************************");
        }
        return WebGPUTintWASM.DisableUniformityAnalysis || disableUniformityAnalysis ? "diagnostic(off, derivative_uniformity);\n" + ccode : ccode;
    }
}
// Default twgsl options.
WebGPUTintWASM._TwgslDefaultOptions = {
    jsPath: `${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tools"]._DefaultCdnUrl}/twgsl/twgsl.js`,
    wasmPath: `${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tools"]._DefaultCdnUrl}/twgsl/twgsl.wasm`
};
WebGPUTintWASM.ShowWGSLShaderCode = false;
WebGPUTintWASM.DisableUniformityAnalysis = false;
WebGPUTintWASM._Twgsl = null; //# sourceMappingURL=webgpuTintWASM.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/webgpuSnapshotRendering.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WebGPUSnapshotRendering",
    ()=>WebGPUSnapshotRendering
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-client] (ecmascript)");
;
class WebGPUSnapshotRendering {
    constructor(engine, renderingMode, bundleList){
        this._record = false;
        this._play = false;
        this._playBundleListIndex = 0;
        this._allBundleLists = [];
        this._enabled = false;
        this.showDebugLogs = false;
        this._engine = engine;
        this._mode = renderingMode;
        this._bundleList = bundleList;
    }
    get enabled() {
        return this._enabled;
    }
    get play() {
        return this._play;
    }
    get record() {
        return this._record;
    }
    set enabled(activate) {
        this._log("enabled", `activate=${activate}, mode=${this._mode}`);
        this._allBundleLists.length = 0;
        this._record = this._enabled = activate;
        this._play = false;
        if (activate) {
            this._modeSaved = this._mode;
            this._mode = 0; // need to reset to standard for the recording pass to avoid some code being bypassed
        }
    }
    get mode() {
        return this._mode;
    }
    set mode(mode) {
        if (this._record) {
            this._modeSaved = mode;
        } else {
            this._mode = mode;
        }
    }
    endRenderPass(currentRenderPass) {
        if (!this._record && !this._play) {
            // Snapshot rendering mode is not enabled
            return false;
        }
        let bundleList = null;
        if (this._record) {
            bundleList = this._bundleList.clone();
            this._allBundleLists.push(bundleList);
            this._bundleList.reset();
            this._log("endRenderPass", `bundleList recorded at position #${this._allBundleLists.length - 1}`);
        } else {
            // We are playing the snapshot
            if (this._playBundleListIndex >= this._allBundleLists.length) {
                this._log("endRenderPass", `empty or out-of-sync bundleList (_allBundleLists.length=${this._allBundleLists.length}, playBundleListIndex=${this._playBundleListIndex})`);
            } else {
                this._log("endRenderPass", `run bundleList #${this._playBundleListIndex}`);
                bundleList = this._allBundleLists[this._playBundleListIndex++];
            }
        }
        if (bundleList) {
            bundleList.run(currentRenderPass);
            if (this._mode === 1) {
                this._engine._reportDrawCall(bundleList.numDrawCalls);
            }
        }
        return true;
    }
    endFrame() {
        if (this._record) {
            // We stop recording and switch to replay mode for the next frames
            this._record = false;
            this._play = true;
            this._mode = this._modeSaved;
            this._log("endFrame", "bundles recorded, switching to play mode");
        }
        this._playBundleListIndex = 0;
    }
    reset() {
        this._log("reset", "called");
        if (this._record) {
            this._mode = this._modeSaved;
        }
        this.enabled = false;
        this.enabled = true;
    }
    _log(funcName, message) {
        if (this.showDebugLogs) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Log(`[Frame: ${this._engine.frameId}] WebGPUSnapshotRendering:${funcName} - ${message}`);
        }
    }
} //# sourceMappingURL=webgpuSnapshotRendering.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/webgpuExternalTexture.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WebGPUExternalTexture",
    ()=>WebGPUExternalTexture
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$externalTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/externalTexture.js [app-client] (ecmascript)");
;
class WebGPUExternalTexture extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$externalTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExternalTexture"] {
    constructor(video){
        super(video);
    }
} //# sourceMappingURL=webgpuExternalTexture.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/Extensions/engine.rawTexture.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$internalTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/internalTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinWebGPUEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/thinWebGPUEngine.js [app-client] (ecmascript)");
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinWebGPUEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinWebGPUEngine"].prototype.createRawTexture = function(data, width, height, format, generateMipMaps, invertY, samplingMode, compression = null, type = 0, creationFlags = 0, useSRGBBuffer = false) {
    const texture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$internalTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InternalTexture"](this, 3 /* InternalTextureSource.Raw */ );
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
    texture._creationFlags = creationFlags;
    texture._useSRGBBuffer = useSRGBBuffer;
    if (!this._doNotHandleContextLost) {
        texture._bufferView = data;
    }
    this._textureHelper.createGPUTextureForInternalTexture(texture, width, height, undefined, creationFlags);
    this.updateRawTexture(texture, data, format, invertY, compression, type, useSRGBBuffer);
    this._internalTexturesCache.push(texture);
    return texture;
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinWebGPUEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinWebGPUEngine"].prototype.updateRawTexture = function(texture, bufferView, format, invertY, compression = null, type = 0, useSRGBBuffer = false) {
    if (!texture) {
        return;
    }
    if (!this._doNotHandleContextLost) {
        texture._bufferView = bufferView;
        texture.invertY = invertY;
        texture._compression = compression;
        texture._useSRGBBuffer = useSRGBBuffer;
    }
    if (bufferView) {
        const gpuTextureWrapper = texture._hardwareTexture;
        const needConversion = format === 4;
        if (needConversion) {
            bufferView = ConvertRGBtoRGBATextureData(bufferView, texture.width, texture.height, type);
        }
        const data = new Uint8Array(bufferView.buffer, bufferView.byteOffset, bufferView.byteLength);
        this._textureHelper.updateTexture(data, texture, texture.width, texture.height, texture.depth, gpuTextureWrapper.format, 0, 0, invertY, false, 0, 0);
        if (texture.generateMipMaps) {
            this._generateMipmaps(texture, this._uploadEncoder);
        }
    }
    texture.isReady = true;
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinWebGPUEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinWebGPUEngine"].prototype.createRawCubeTexture = function(data, size, format, type, generateMipMaps, invertY, samplingMode, compression = null) {
    const texture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$internalTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InternalTexture"](this, 8 /* InternalTextureSource.CubeRaw */ );
    if (type === 1 && !this._caps.textureFloatLinearFiltering) {
        generateMipMaps = false;
        samplingMode = 1;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Warn("Float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively.");
    } else if (type === 2 && !this._caps.textureHalfFloatLinearFiltering) {
        generateMipMaps = false;
        samplingMode = 1;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Warn("Half float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively.");
    } else if (type === 1 && !this._caps.textureFloatRender) {
        generateMipMaps = false;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Warn("Render to float textures is not supported. Mipmap generation forced to false.");
    } else if (type === 2 && !this._caps.colorBufferFloat) {
        generateMipMaps = false;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Warn("Render to half float textures is not supported. Mipmap generation forced to false.");
    }
    texture.isCube = true;
    texture._originalFormat = format;
    texture.format = format === 4 ? 5 : format;
    texture.type = type;
    texture.generateMipMaps = generateMipMaps;
    texture.width = size;
    texture.height = size;
    texture.samplingMode = samplingMode;
    if (!this._doNotHandleContextLost) {
        texture._bufferViewArray = data;
    }
    texture.invertY = invertY;
    texture._compression = compression;
    texture._cachedWrapU = 0;
    texture._cachedWrapV = 0;
    this._textureHelper.createGPUTextureForInternalTexture(texture);
    if (format === 4) {
        const gpuTextureWrapper = texture._hardwareTexture;
        gpuTextureWrapper._originalFormatIsRGB = true;
    }
    if (data) {
        this.updateRawCubeTexture(texture, data, format, type, invertY, compression);
    }
    texture.isReady = true;
    return texture;
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinWebGPUEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinWebGPUEngine"].prototype.updateRawCubeTexture = function(texture, bufferView, _format, type, invertY, compression = null) {
    texture._bufferViewArray = bufferView;
    texture.invertY = invertY;
    texture._compression = compression;
    const gpuTextureWrapper = texture._hardwareTexture;
    const needConversion = gpuTextureWrapper._originalFormatIsRGB;
    const faces = [
        0,
        2,
        4,
        1,
        3,
        5
    ];
    const data = [];
    for(let i = 0; i < bufferView.length; ++i){
        let faceData = bufferView[faces[i]];
        if (needConversion) {
            faceData = ConvertRGBtoRGBATextureData(faceData, texture.width, texture.height, type);
        }
        data.push(new Uint8Array(faceData.buffer, faceData.byteOffset, faceData.byteLength));
    }
    this._textureHelper.updateCubeTextures(data, gpuTextureWrapper.underlyingResource, texture.width, texture.height, gpuTextureWrapper.format, invertY, false, 0, 0);
    if (texture.generateMipMaps) {
        this._generateMipmaps(texture, this._uploadEncoder);
    }
    texture.isReady = true;
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinWebGPUEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinWebGPUEngine"].prototype.createRawCubeTextureFromUrl = function(url, scene, size, format, type, noMipmap, callback, mipmapGenerator, onLoad = null, onError = null, samplingMode = 3, invertY = false) {
    const texture = this.createRawCubeTexture(null, size, format, type, !noMipmap, invertY, samplingMode, null);
    scene?.addPendingData(texture);
    texture.url = url;
    texture.isReady = false;
    this._internalTexturesCache.push(texture);
    const onerror = (request, exception)=>{
        scene?.removePendingData(texture);
        if (onError && request) {
            onError(request.status + " " + request.statusText, exception);
        }
    };
    const internalCallbackAsync = async (data)=>{
        const faceDataArraysResult = callback(data);
        if (!faceDataArraysResult) {
            return;
        }
        const faceDataArrays = faceDataArraysResult instanceof Promise ? await faceDataArraysResult : faceDataArraysResult;
        const width = texture.width;
        if (mipmapGenerator) {
            const needConversion = format === 4;
            const mipData = mipmapGenerator(faceDataArrays);
            const gpuTextureWrapper = texture._hardwareTexture;
            const faces = [
                0,
                1,
                2,
                3,
                4,
                5
            ];
            for(let level = 0; level < mipData.length; level++){
                const mipSize = width >> level;
                const allFaces = [];
                for(let faceIndex = 0; faceIndex < 6; faceIndex++){
                    let mipFaceData = mipData[level][faces[faceIndex]];
                    if (needConversion) {
                        mipFaceData = ConvertRGBtoRGBATextureData(mipFaceData, mipSize, mipSize, type);
                    }
                    allFaces.push(new Uint8Array(mipFaceData.buffer, mipFaceData.byteOffset, mipFaceData.byteLength));
                }
                this._textureHelper.updateCubeTextures(allFaces, gpuTextureWrapper.underlyingResource, mipSize, mipSize, gpuTextureWrapper.format, invertY, false, 0, 0);
            }
        } else {
            this.updateRawCubeTexture(texture, faceDataArrays, format, type, invertY);
        }
        texture.isReady = true;
        scene?.removePendingData(texture);
        if (onLoad) {
            onLoad();
        }
    };
    this._loadFile(url, (data)=>{
        // eslint-disable-next-line github/no-then
        internalCallbackAsync(data).catch((err)=>{
            onerror(undefined, err);
        });
    }, undefined, scene?.offlineProvider, true, onerror);
    return texture;
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinWebGPUEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinWebGPUEngine"].prototype.createRawTexture3D = function(data, width, height, depth, format, generateMipMaps, invertY, samplingMode, compression = null, textureType = 0, creationFlags = 0) {
    const source = 10 /* InternalTextureSource.Raw3D */ ;
    const texture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$internalTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InternalTexture"](this, source);
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
    texture.is3D = true;
    texture._creationFlags = creationFlags;
    if (!this._doNotHandleContextLost) {
        texture._bufferView = data;
    }
    this._textureHelper.createGPUTextureForInternalTexture(texture, width, height, undefined, creationFlags);
    this.updateRawTexture3D(texture, data, format, invertY, compression, textureType);
    this._internalTexturesCache.push(texture);
    return texture;
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinWebGPUEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinWebGPUEngine"].prototype.updateRawTexture3D = function(texture, bufferView, format, invertY, compression = null, textureType = 0) {
    if (!this._doNotHandleContextLost) {
        texture._bufferView = bufferView;
        texture.format = format;
        texture.invertY = invertY;
        texture._compression = compression;
    }
    if (bufferView) {
        const gpuTextureWrapper = texture._hardwareTexture;
        const needConversion = format === 4;
        if (needConversion) {
            bufferView = ConvertRGBtoRGBATextureData(bufferView, texture.width, texture.height, textureType);
        }
        const data = new Uint8Array(bufferView.buffer, bufferView.byteOffset, bufferView.byteLength);
        this._textureHelper.updateTexture(data, texture, texture.width, texture.height, texture.depth, gpuTextureWrapper.format, 0, 0, invertY, false, 0, 0);
        if (texture.generateMipMaps) {
            this._generateMipmaps(texture, this._uploadEncoder);
        }
    }
    texture.isReady = true;
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinWebGPUEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinWebGPUEngine"].prototype.createRawTexture2DArray = function(data, width, height, depth, format, generateMipMaps, invertY, samplingMode, compression = null, textureType = 0, creationFlags = 0) {
    const source = 11 /* InternalTextureSource.Raw2DArray */ ;
    const texture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$internalTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InternalTexture"](this, source);
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
    texture._creationFlags = creationFlags;
    if (!this._doNotHandleContextLost) {
        texture._bufferView = data;
    }
    this._textureHelper.createGPUTextureForInternalTexture(texture, width, height, depth, creationFlags);
    this.updateRawTexture2DArray(texture, data, format, invertY, compression, textureType);
    this._internalTexturesCache.push(texture);
    return texture;
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinWebGPUEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinWebGPUEngine"].prototype.updateRawTexture2DArray = function(texture, bufferView, format, invertY, compression = null, textureType = 0) {
    if (!this._doNotHandleContextLost) {
        texture._bufferView = bufferView;
        texture.format = format;
        texture.invertY = invertY;
        texture._compression = compression;
    }
    if (bufferView) {
        const gpuTextureWrapper = texture._hardwareTexture;
        const needConversion = format === 4;
        if (needConversion) {
            bufferView = ConvertRGBtoRGBATextureData(bufferView, texture.width, texture.height, textureType);
        }
        const data = new Uint8Array(bufferView.buffer, bufferView.byteOffset, bufferView.byteLength);
        this._textureHelper.updateTexture(data, texture, texture.width, texture.height, texture.depth, gpuTextureWrapper.format, 0, 0, invertY, false, 0, 0);
        if (texture.generateMipMaps) {
            this._generateMipmaps(texture, this._uploadEncoder);
        }
    }
    texture.isReady = true;
};
/**
 * @internal
 */ function ConvertRGBtoRGBATextureData(rgbData, width, height, textureType) {
    // Create new RGBA data container.
    let rgbaData;
    let val1 = 1;
    if (textureType === 1) {
        rgbaData = new Float32Array(width * height * 4);
    } else if (textureType === 2) {
        rgbaData = new Uint16Array(width * height * 4);
        val1 = 15360; // 15360 is the encoding of 1 in half float
    } else if (textureType === 7) {
        rgbaData = new Uint32Array(width * height * 4);
    } else {
        rgbaData = new Uint8Array(width * height * 4);
    }
    // Convert each pixel.
    for(let x = 0; x < width; x++){
        for(let y = 0; y < height; y++){
            const index = (y * width + x) * 3;
            const newIndex = (y * width + x) * 4;
            // Map Old Value to new value.
            rgbaData[newIndex + 0] = rgbData[index + 0];
            rgbaData[newIndex + 1] = rgbData[index + 1];
            rgbaData[newIndex + 2] = rgbData[index + 2];
            // Add fully opaque alpha channel.
            rgbaData[newIndex + 3] = val1;
        }
    }
    return rgbaData;
} //# sourceMappingURL=engine.rawTexture.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/Extensions/engine.readTexture.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinWebGPUEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/thinWebGPUEngine.js [app-client] (ecmascript)");
;
// eslint-disable-next-line @typescript-eslint/promise-function-async
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinWebGPUEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinWebGPUEngine"].prototype._readTexturePixels = function(texture, width, height, faceIndex = -1, level = 0, buffer = null, flushRenderer = true, noDataConversion = false, x = 0, y = 0) {
    const gpuTextureWrapper = texture._hardwareTexture;
    if (flushRenderer) {
        this.flushFramebuffer();
    }
    return this._textureHelper.readPixels(gpuTextureWrapper.underlyingResource, x, y, width, height, gpuTextureWrapper.format, faceIndex, level, buffer, noDataConversion);
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinWebGPUEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinWebGPUEngine"].prototype._readTexturePixelsSync = function() {
    // eslint-disable-next-line no-throw-literal
    throw "_readTexturePixelsSync is unsupported in WebGPU!";
}; //# sourceMappingURL=engine.readTexture.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/Extensions/engine.cubeTexture.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$internalTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/internalTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuTextureHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/webgpuTextureHelper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinWebGPUEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/thinWebGPUEngine.js [app-client] (ecmascript)");
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinWebGPUEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinWebGPUEngine"].prototype._createDepthStencilCubeTexture = function(size, options) {
    const internalTexture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$internalTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InternalTexture"](this, options.generateStencil ? 12 /* InternalTextureSource.DepthStencil */  : 14 /* InternalTextureSource.Depth */ );
    internalTexture.isCube = true;
    internalTexture.label = options.label;
    const internalOptions = {
        bilinearFiltering: false,
        comparisonFunction: 0,
        generateStencil: false,
        samples: 1,
        depthTextureFormat: options.generateStencil ? 13 : 14,
        ...options
    };
    internalTexture.format = internalOptions.depthTextureFormat;
    this._setupDepthStencilTexture(internalTexture, size, internalOptions.bilinearFiltering, internalOptions.comparisonFunction, internalOptions.samples);
    this._textureHelper.createGPUTextureForInternalTexture(internalTexture);
    // Now that the hardware texture is created, we can retrieve the GPU format and set the right type to the internal texture
    const gpuTextureWrapper = internalTexture._hardwareTexture;
    internalTexture.type = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuTextureHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGPUTextureHelper"].GetTextureTypeFromFormat(gpuTextureWrapper.format);
    this._internalTexturesCache.push(internalTexture);
    return internalTexture;
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinWebGPUEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinWebGPUEngine"].prototype.createCubeTexture = function(rootUrl, scene, files, noMipmap, onLoad = null, onError = null, format, forcedExtension = null, createPolynomials = false, lodScale = 0, lodOffset = 0, fallback = null, loaderOptions, useSRGBBuffer = false, buffer = null) {
    return this.createCubeTextureBase(rootUrl, scene, files, !!noMipmap, onLoad, onError, format, forcedExtension, createPolynomials, lodScale, lodOffset, fallback, null, (texture, imgs)=>{
        const imageBitmaps = imgs; // we will always get an ImageBitmap array in WebGPU
        const width = imageBitmaps[0].width;
        const height = width;
        this._setCubeMapTextureParams(texture, !noMipmap);
        texture.format = format ?? -1;
        const gpuTextureWrapper = this._textureHelper.createGPUTextureForInternalTexture(texture, width, height);
        this._textureHelper.updateCubeTextures(imageBitmaps, gpuTextureWrapper.underlyingResource, width, height, gpuTextureWrapper.format, false, false, 0, 0);
        if (!noMipmap) {
            this._generateMipmaps(texture, this._uploadEncoder);
        }
        texture.isReady = true;
        texture.onLoadedObservable.notifyObservers(texture);
        texture.onLoadedObservable.clear();
        if (onLoad) {
            onLoad();
        }
    }, !!useSRGBBuffer, buffer);
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinWebGPUEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinWebGPUEngine"].prototype._setCubeMapTextureParams = function(texture, loadMipmap, maxLevel) {
    texture.samplingMode = loadMipmap ? 3 : 2;
    texture._cachedWrapU = 0;
    texture._cachedWrapV = 0;
    if (maxLevel) {
        texture._maxLodLevel = maxLevel;
    }
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinWebGPUEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinWebGPUEngine"].prototype.generateMipMapsForCubemap = function(texture) {
    if (texture.generateMipMaps) {
        const gpuTexture = texture._hardwareTexture?.underlyingResource;
        if (!gpuTexture) {
            this._textureHelper.createGPUTextureForInternalTexture(texture);
        }
        this._generateMipmaps(texture);
    }
}; //# sourceMappingURL=engine.cubeTexture.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/webgpuRenderTargetWrapper.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WebGPURenderTargetWrapper",
    ()=>WebGPURenderTargetWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$renderTargetWrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/renderTargetWrapper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuPerfCounter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/webgpuPerfCounter.js [app-client] (ecmascript)");
;
;
class WebGPURenderTargetWrapper extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$renderTargetWrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RenderTargetWrapper"] {
    /**
     * Initializes the render target wrapper
     * @param isMulti true if the wrapper is a multi render target
     * @param isCube true if the wrapper should render to a cube texture
     * @param size size of the render target (width/height/layers)
     * @param engine engine used to create the render target
     * @param label defines the label to use for the wrapper (for debugging purpose only)
     */ constructor(isMulti, isCube, size, engine, label){
        super(isMulti, isCube, size, engine, label);
        if (engine.enableGPUTimingMeasurements) {
            this.gpuTimeInFrame = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuPerfCounter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGPUPerfCounter"]();
        }
    }
} //# sourceMappingURL=webgpuRenderTargetWrapper.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/Extensions/engine.renderTarget.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$internalTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/internalTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuRenderTargetWrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/webgpuRenderTargetWrapper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$textureHelper$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/textureHelper.functions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$AbstractEngine$2f$abstractEngine$2e$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/AbstractEngine/abstractEngine.texture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinWebGPUEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/thinWebGPUEngine.js [app-client] (ecmascript)");
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinWebGPUEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinWebGPUEngine"].prototype._createHardwareRenderTargetWrapper = function(isMulti, isCube, size) {
    const rtWrapper = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuRenderTargetWrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGPURenderTargetWrapper"](isMulti, isCube, size, this);
    this._renderTargetWrapperCache.push(rtWrapper);
    return rtWrapper;
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinWebGPUEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinWebGPUEngine"].prototype.createRenderTargetTexture = function(size, options) {
    const rtWrapper = this._createHardwareRenderTargetWrapper(false, false, size);
    const fullOptions = {};
    if (options !== undefined && typeof options === "object") {
        fullOptions.generateMipMaps = options.generateMipMaps;
        fullOptions.generateDepthBuffer = options.generateDepthBuffer === undefined ? true : options.generateDepthBuffer;
        fullOptions.generateStencilBuffer = fullOptions.generateDepthBuffer && options.generateStencilBuffer;
        fullOptions.samplingMode = options.samplingMode === undefined ? 3 : options.samplingMode;
        fullOptions.creationFlags = options.creationFlags ?? 0;
        fullOptions.noColorAttachment = !!options.noColorAttachment;
        fullOptions.colorAttachment = options.colorAttachment;
        fullOptions.samples = options.samples;
        fullOptions.label = options.label;
        fullOptions.format = options.format;
        fullOptions.type = options.type;
    } else {
        fullOptions.generateMipMaps = options;
        fullOptions.generateDepthBuffer = true;
        fullOptions.generateStencilBuffer = false;
        fullOptions.samplingMode = 3;
        fullOptions.creationFlags = 0;
        fullOptions.noColorAttachment = false;
    }
    const texture = fullOptions.colorAttachment || (fullOptions.noColorAttachment ? null : this._createInternalTexture(size, fullOptions, true, 5 /* InternalTextureSource.RenderTarget */ ));
    rtWrapper.label = fullOptions.label ?? "RenderTargetWrapper";
    rtWrapper._samples = fullOptions.colorAttachment?.samples ?? fullOptions.samples ?? 1;
    rtWrapper._generateDepthBuffer = fullOptions.generateDepthBuffer;
    rtWrapper._generateStencilBuffer = fullOptions.generateStencilBuffer ? true : false;
    rtWrapper.setTextures(texture);
    if (rtWrapper._generateDepthBuffer || rtWrapper._generateStencilBuffer) {
        rtWrapper.createDepthStencilTexture(0, false, rtWrapper._generateStencilBuffer, rtWrapper.samples, fullOptions.generateStencilBuffer ? 13 : 14, fullOptions.label ? fullOptions.label + "-DepthStencil" : undefined);
    }
    if (texture && !fullOptions.colorAttachment) {
        if (options !== undefined && typeof options === "object" && options.createMipMaps && !fullOptions.generateMipMaps) {
            texture.generateMipMaps = true;
        }
        this._textureHelper.createGPUTextureForInternalTexture(texture, undefined, undefined, undefined, fullOptions.creationFlags);
        if (options !== undefined && typeof options === "object" && options.createMipMaps && !fullOptions.generateMipMaps) {
            texture.generateMipMaps = false;
        }
    }
    return rtWrapper;
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinWebGPUEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinWebGPUEngine"].prototype._createDepthStencilTexture = function(size, options, wrapper) {
    const internalOptions = {
        bilinearFiltering: false,
        comparisonFunction: 0,
        generateStencil: false,
        samples: 1,
        depthTextureFormat: options.generateStencil ? 13 : 14,
        ...options
    };
    const hasStencil = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$textureHelper$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HasStencilAspect"])(internalOptions.depthTextureFormat);
    wrapper._depthStencilTextureWithStencil = hasStencil;
    const internalTexture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$internalTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InternalTexture"](this, hasStencil ? 12 /* InternalTextureSource.DepthStencil */  : 14 /* InternalTextureSource.Depth */ );
    internalTexture.label = options.label;
    internalTexture.format = internalOptions.depthTextureFormat;
    internalTexture.type = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$textureHelper$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GetTypeForDepthTexture"])(internalTexture.format);
    this._setupDepthStencilTexture(internalTexture, size, internalOptions.bilinearFiltering, internalOptions.comparisonFunction, internalOptions.samples);
    this._textureHelper.createGPUTextureForInternalTexture(internalTexture);
    this._internalTexturesCache.push(internalTexture);
    return internalTexture;
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinWebGPUEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinWebGPUEngine"].prototype._setupDepthStencilTexture = function(internalTexture, size, bilinearFiltering, comparisonFunction, samples = 1) {
    const width = size.width ?? size;
    const height = size.height ?? size;
    const layers = size.layers || 0;
    const depth = size.depth || 0;
    internalTexture.baseWidth = width;
    internalTexture.baseHeight = height;
    internalTexture.width = width;
    internalTexture.height = height;
    internalTexture.is2DArray = layers > 0;
    internalTexture.is3D = depth > 0;
    internalTexture.depth = layers || depth;
    internalTexture.isReady = true;
    internalTexture.samples = samples;
    internalTexture.generateMipMaps = false;
    internalTexture.samplingMode = bilinearFiltering ? 2 : 1;
    internalTexture.type = 1; // the right type will be set later
    internalTexture._comparisonFunction = comparisonFunction;
    internalTexture._cachedWrapU = 0;
    internalTexture._cachedWrapV = 0;
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinWebGPUEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinWebGPUEngine"].prototype.updateRenderTargetTextureSampleCount = function(rtWrapper, samples) {
    if (!rtWrapper || !rtWrapper.texture || rtWrapper.samples === samples) {
        return samples;
    }
    samples = Math.min(samples, this.getCaps().maxMSAASamples);
    this._textureHelper.createMSAATexture(rtWrapper.texture, samples);
    if (rtWrapper._depthStencilTexture) {
        this._textureHelper.createMSAATexture(rtWrapper._depthStencilTexture, samples);
        rtWrapper._depthStencilTexture.samples = samples;
    }
    rtWrapper._samples = samples;
    rtWrapper.texture.samples = samples;
    return samples;
}; //# sourceMappingURL=engine.renderTarget.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/Extensions/engine.renderTargetTexture.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinWebGPUEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/thinWebGPUEngine.js [app-client] (ecmascript)");
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinWebGPUEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinWebGPUEngine"].prototype.setDepthStencilTexture = function(channel, uniform, texture, name) {
    if (!texture || !texture.depthStencilTexture) {
        this._setTexture(channel, null, undefined, undefined, name);
    } else {
        this._setTexture(channel, texture, false, true, name);
    }
}; //# sourceMappingURL=engine.renderTargetTexture.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/Extensions/engine.renderTargetCube.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinWebGPUEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/thinWebGPUEngine.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$internalTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/internalTexture.js [app-client] (ecmascript)");
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinWebGPUEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinWebGPUEngine"].prototype.createRenderTargetCubeTexture = function(size, options) {
    const rtWrapper = this._createHardwareRenderTargetWrapper(false, true, size);
    const fullOptions = {
        generateMipMaps: true,
        generateDepthBuffer: true,
        generateStencilBuffer: false,
        type: 0,
        samplingMode: 3,
        format: 5,
        samples: 1,
        ...options
    };
    fullOptions.generateStencilBuffer = fullOptions.generateDepthBuffer && fullOptions.generateStencilBuffer;
    rtWrapper.label = fullOptions.label ?? "RenderTargetWrapper";
    rtWrapper._generateDepthBuffer = fullOptions.generateDepthBuffer;
    rtWrapper._generateStencilBuffer = fullOptions.generateStencilBuffer;
    const texture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$internalTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InternalTexture"](this, 5 /* InternalTextureSource.RenderTarget */ );
    texture.width = size;
    texture.height = size;
    texture.depth = 0;
    texture.isReady = true;
    texture.isCube = true;
    texture.samples = fullOptions.samples;
    texture.generateMipMaps = fullOptions.generateMipMaps;
    texture.samplingMode = fullOptions.samplingMode;
    texture.type = fullOptions.type;
    texture.format = fullOptions.format;
    this._internalTexturesCache.push(texture);
    rtWrapper.setTextures(texture);
    if (rtWrapper._generateDepthBuffer || rtWrapper._generateStencilBuffer) {
        rtWrapper.createDepthStencilTexture(0, fullOptions.samplingMode === undefined || fullOptions.samplingMode === 2 || fullOptions.samplingMode === 2 || fullOptions.samplingMode === 3 || fullOptions.samplingMode === 3 || fullOptions.samplingMode === 5 || fullOptions.samplingMode === 6 || fullOptions.samplingMode === 7 || fullOptions.samplingMode === 11, rtWrapper._generateStencilBuffer, rtWrapper.samples);
    }
    if (options && options.createMipMaps && !fullOptions.generateMipMaps) {
        texture.generateMipMaps = true;
    }
    this._textureHelper.createGPUTextureForInternalTexture(texture);
    if (options && options.createMipMaps && !fullOptions.generateMipMaps) {
        texture.generateMipMaps = false;
    }
    return rtWrapper;
}; //# sourceMappingURL=engine.renderTargetCube.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/Extensions/engine.query.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinWebGPUEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/thinWebGPUEngine.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuBundleList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/webgpuBundleList.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$AbstractEngine$2f$abstractEngine$2e$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/AbstractEngine/abstractEngine.query.js [app-client] (ecmascript)");
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinWebGPUEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinWebGPUEngine"].prototype.getGPUFrameTimeCounter = function() {
    return this._timestampQuery.gpuFrameTimeCounter;
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinWebGPUEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinWebGPUEngine"].prototype.captureGPUFrameTime = function(value) {
    this._timestampQuery.enable = value && !!this._caps.timerQuery;
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinWebGPUEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinWebGPUEngine"].prototype.createQuery = function() {
    return this._occlusionQuery.createQuery();
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinWebGPUEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinWebGPUEngine"].prototype.deleteQuery = function(query) {
    this._occlusionQuery.deleteQuery(query);
    return this;
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinWebGPUEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinWebGPUEngine"].prototype.isQueryResultAvailable = function(query) {
    return this._occlusionQuery.isQueryResultAvailable(query);
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinWebGPUEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinWebGPUEngine"].prototype.getQueryResult = function(query) {
    return this._occlusionQuery.getQueryResult(query);
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinWebGPUEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinWebGPUEngine"].prototype.beginOcclusionQuery = function(algorithmType, query) {
    if (this.compatibilityMode) {
        if (this._occlusionQuery.canBeginQuery(query)) {
            this._currentRenderPass?.beginOcclusionQuery(query);
            return true;
        }
    } else {
        this._bundleList.addItem(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuBundleList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGPURenderItemBeginOcclusionQuery"](query));
        return true;
    }
    return false;
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinWebGPUEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinWebGPUEngine"].prototype.endOcclusionQuery = function() {
    if (this.compatibilityMode) {
        this._currentRenderPass?.endOcclusionQuery();
    } else {
        this._bundleList.addItem(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuBundleList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGPURenderItemEndOcclusionQuery"]());
    }
    return this;
}; //# sourceMappingURL=engine.query.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/webgpuComputeContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WebGPUComputeContext",
    ()=>WebGPUComputeContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-client] (ecmascript)");
;
class WebGPUComputeContext {
    getBindGroups(bindings, computePipeline, bindingsMapping) {
        if (!bindingsMapping) {
            throw new Error("WebGPUComputeContext.getBindGroups: bindingsMapping is required until browsers support reflection for wgsl shaders!");
        }
        if (this._bindGroups.length === 0) {
            const bindGroupEntriesExist = this._bindGroupEntries.length > 0;
            for(const key in bindings){
                const binding = bindings[key], location = bindingsMapping[key], group = location.group, index = location.binding, type = binding.type, object = binding.object;
                let indexInGroupEntries = binding.indexInGroupEntries;
                let entries = this._bindGroupEntries[group];
                if (!entries) {
                    entries = this._bindGroupEntries[group] = [];
                }
                switch(type){
                    case 5 /* ComputeBindingType.Sampler */ :
                        {
                            const sampler = object;
                            if (indexInGroupEntries !== undefined && bindGroupEntriesExist) {
                                entries[indexInGroupEntries].resource = this._cacheSampler.getSampler(sampler);
                            } else {
                                binding.indexInGroupEntries = entries.length;
                                entries.push({
                                    binding: index,
                                    resource: this._cacheSampler.getSampler(sampler)
                                });
                            }
                            break;
                        }
                    case 0 /* ComputeBindingType.Texture */ :
                    case 4 /* ComputeBindingType.TextureWithoutSampler */ :
                        {
                            const texture = object;
                            const hardwareTexture = texture._texture._hardwareTexture;
                            if (indexInGroupEntries !== undefined && bindGroupEntriesExist) {
                                if (type === 0 /* ComputeBindingType.Texture */ ) {
                                    entries[indexInGroupEntries++].resource = this._cacheSampler.getSampler(texture._texture);
                                }
                                entries[indexInGroupEntries].resource = hardwareTexture.view;
                            } else {
                                binding.indexInGroupEntries = entries.length;
                                if (type === 0 /* ComputeBindingType.Texture */ ) {
                                    entries.push({
                                        binding: index - 1,
                                        resource: this._cacheSampler.getSampler(texture._texture)
                                    });
                                }
                                entries.push({
                                    binding: index,
                                    resource: hardwareTexture.view
                                });
                            }
                            break;
                        }
                    case 8 /* ComputeBindingType.InternalTexture */ :
                        {
                            const texture = object;
                            const hardwareTexture = texture._hardwareTexture;
                            if (indexInGroupEntries !== undefined && bindGroupEntriesExist) {
                                entries[indexInGroupEntries].resource = hardwareTexture.view;
                            } else {
                                binding.indexInGroupEntries = entries.length;
                                entries.push({
                                    binding: index,
                                    resource: hardwareTexture.view
                                });
                            }
                            break;
                        }
                    case 1 /* ComputeBindingType.StorageTexture */ :
                        {
                            const texture = object;
                            const hardwareTexture = texture._texture._hardwareTexture;
                            if ((hardwareTexture.textureAdditionalUsages & 8 /* WebGPUConstants.TextureUsage.StorageBinding */ ) === 0) {
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Error(`computeDispatch: The texture (name=${texture.name}, uniqueId=${texture.uniqueId}) is not a storage texture!`, 50);
                            }
                            if (indexInGroupEntries !== undefined && bindGroupEntriesExist) {
                                entries[indexInGroupEntries].resource = hardwareTexture.viewForWriting;
                            } else {
                                binding.indexInGroupEntries = entries.length;
                                entries.push({
                                    binding: index,
                                    resource: hardwareTexture.viewForWriting
                                });
                            }
                            break;
                        }
                    case 6 /* ComputeBindingType.ExternalTexture */ :
                        {
                            const texture = object;
                            const externalTexture = texture.underlyingResource;
                            if (indexInGroupEntries !== undefined && bindGroupEntriesExist) {
                                entries[indexInGroupEntries].resource = this._device.importExternalTexture({
                                    source: externalTexture
                                });
                            } else {
                                binding.indexInGroupEntries = entries.length;
                                entries.push({
                                    binding: index,
                                    resource: this._device.importExternalTexture({
                                        source: externalTexture
                                    })
                                });
                            }
                            break;
                        }
                    case 2 /* ComputeBindingType.UniformBuffer */ :
                    case 3 /* ComputeBindingType.StorageBuffer */ :
                    case 7 /* ComputeBindingType.DataBuffer */ :
                        {
                            const dataBuffer = type === 7 /* ComputeBindingType.DataBuffer */  ? object : type === 2 /* ComputeBindingType.UniformBuffer */  ? object.getBuffer() : object.getBuffer();
                            const webgpuBuffer = dataBuffer.underlyingResource;
                            if (indexInGroupEntries !== undefined && bindGroupEntriesExist) {
                                entries[indexInGroupEntries].resource.buffer = webgpuBuffer;
                                entries[indexInGroupEntries].resource.size = dataBuffer.capacity;
                            } else {
                                binding.indexInGroupEntries = entries.length;
                                entries.push({
                                    binding: index,
                                    resource: {
                                        buffer: webgpuBuffer,
                                        offset: 0,
                                        size: dataBuffer.capacity
                                    }
                                });
                            }
                            break;
                        }
                }
            }
            for(let i = 0; i < this._bindGroupEntries.length; ++i){
                const entries = this._bindGroupEntries[i];
                if (!entries) {
                    this._bindGroups[i] = undefined;
                    continue;
                }
                this._bindGroups[i] = this._device.createBindGroup({
                    layout: computePipeline.getBindGroupLayout(i),
                    entries
                });
            }
            this._bindGroups.length = this._bindGroupEntries.length;
        }
        return this._bindGroups;
    }
    constructor(device, cacheSampler){
        this._device = device;
        this._cacheSampler = cacheSampler;
        this.uniqueId = WebGPUComputeContext._Counter++;
        this._bindGroupEntries = [];
        this.clear();
    }
    clear() {
        this._bindGroups = [];
    // Don't reset _bindGroupEntries if they have already been created, they are still ok even if we have to clear _bindGroups (the layout of the compute shader can't change once created)
    }
}
WebGPUComputeContext._Counter = 0; //# sourceMappingURL=webgpuComputeContext.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/webgpuComputePipelineContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** @internal */ __turbopack_context__.s([
    "WebGPUComputePipelineContext",
    ()=>WebGPUComputePipelineContext
]);
class WebGPUComputePipelineContext {
    // eslint-disable-next-line no-restricted-syntax
    get isAsync() {
        return false;
    }
    get isReady() {
        if (this.isAsync) {
            // When async mode is implemented, this should return true if the pipeline is ready
            return false;
        }
        // In synchronous mode, we return false, the readiness being determined by ComputeEffect
        return false;
    }
    constructor(engine){
        this._name = "unnamed";
        this.engine = engine;
    }
    _getComputeShaderCode() {
        return this.sources?.compute;
    }
    dispose() {}
} //# sourceMappingURL=webgpuComputePipelineContext.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/Extensions/engine.computeShader.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Compute$2f$computeEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Compute/computeEffect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$webgpuEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/webgpuEngine.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuComputeContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/webgpuComputeContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuComputePipelineContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/webgpuComputePipelineContext.js [app-client] (ecmascript)");
;
;
;
;
;
const ComputePassDescriptor = {};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$webgpuEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGPUEngine"].prototype.createComputeContext = function() {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuComputeContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGPUComputeContext"](this._device, this._cacheSampler);
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$webgpuEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGPUEngine"].prototype.createComputeEffect = function(baseName, options) {
    const compute = typeof baseName === "string" ? baseName : baseName.computeToken || baseName.computeSource || baseName.computeElement || baseName.compute;
    const name = compute + "@" + options.defines;
    if (this._compiledComputeEffects[name]) {
        const compiledEffect = this._compiledComputeEffects[name];
        if (options.onCompiled && compiledEffect.isReady()) {
            options.onCompiled(compiledEffect);
        }
        return compiledEffect;
    }
    const effect = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Compute$2f$computeEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComputeEffect"](baseName, options, this, name);
    this._compiledComputeEffects[name] = effect;
    return effect;
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$webgpuEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGPUEngine"].prototype.createComputePipelineContext = function() {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$webgpuComputePipelineContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGPUComputePipelineContext"](this);
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$webgpuEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGPUEngine"].prototype.areAllComputeEffectsReady = function() {
    for(const key in this._compiledComputeEffects){
        const effect = this._compiledComputeEffects[key];
        if (!effect.isReady()) {
            return false;
        }
    }
    return true;
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$webgpuEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGPUEngine"].prototype.computeDispatch = function(effect, context, bindings, x, y = 1, z = 1, bindingsMapping, gpuPerfCounter) {
    this._computeDispatch(effect, context, bindings, x, y, z, undefined, undefined, bindingsMapping, gpuPerfCounter);
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$webgpuEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGPUEngine"].prototype.computeDispatchIndirect = function(effect, context, bindings, buffer, offset = 0, bindingsMapping, gpuPerfCounter) {
    this._computeDispatch(effect, context, bindings, undefined, undefined, undefined, buffer, offset, bindingsMapping, gpuPerfCounter);
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$webgpuEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGPUEngine"].prototype._computeDispatch = function(effect, context, bindings, x, y, z, buffer, offset, bindingsMapping, gpuPerfCounter) {
    this._endCurrentRenderPass();
    const contextPipeline = effect._pipelineContext;
    const computeContext = context;
    if (!contextPipeline.computePipeline) {
        contextPipeline.computePipeline = this._device.createComputePipeline({
            layout: "auto" /* WebGPUConstants.AutoLayoutMode.Auto */ ,
            compute: contextPipeline.stage
        });
    }
    if (gpuPerfCounter) {
        this._timestampQuery.startPass(ComputePassDescriptor, this._timestampIndex);
    }
    const computePass = this._renderEncoder.beginComputePass(ComputePassDescriptor);
    computePass.setPipeline(contextPipeline.computePipeline);
    const bindGroups = computeContext.getBindGroups(bindings, contextPipeline.computePipeline, bindingsMapping);
    for(let i = 0; i < bindGroups.length; ++i){
        const bindGroup = bindGroups[i];
        if (!bindGroup) {
            continue;
        }
        computePass.setBindGroup(i, bindGroup);
    }
    if (buffer !== undefined) {
        computePass.dispatchWorkgroupsIndirect(buffer.underlyingResource, offset);
    } else {
        if (x + y + z > 0) {
            computePass.dispatchWorkgroups(x, y, z);
        }
    }
    computePass.end();
    if (gpuPerfCounter) {
        this._timestampQuery.endPass(this._timestampIndex, gpuPerfCounter);
        this._timestampIndex += 2;
    }
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$webgpuEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGPUEngine"].prototype.releaseComputeEffects = function() {
    for(const name in this._compiledComputeEffects){
        const webGPUPipelineContextCompute = this._compiledComputeEffects[name].getPipelineContext();
        this._deleteComputePipelineContext(webGPUPipelineContextCompute);
    }
    this._compiledComputeEffects = {};
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$webgpuEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGPUEngine"].prototype._prepareComputePipelineContext = function(pipelineContext, computeSourceCode, rawComputeSourceCode, defines, entryPoint) {
    const webGpuContext = pipelineContext;
    if (this.dbgShowShaderCode) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Log(defines);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Log(computeSourceCode);
    }
    webGpuContext.sources = {
        compute: computeSourceCode,
        rawCompute: rawComputeSourceCode
    };
    webGpuContext.stage = this._createComputePipelineStageDescriptor(computeSourceCode, defines, entryPoint);
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$webgpuEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGPUEngine"].prototype._releaseComputeEffect = function(effect) {
    if (this._compiledComputeEffects[effect._key]) {
        delete this._compiledComputeEffects[effect._key];
        this._deleteComputePipelineContext(effect.getPipelineContext());
    }
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$webgpuEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGPUEngine"].prototype._rebuildComputeEffects = function() {
    for(const key in this._compiledComputeEffects){
        const effect = this._compiledComputeEffects[key];
        effect._pipelineContext = null;
        effect._wasPreviouslyReady = false;
        effect._prepareEffect();
    }
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$webgpuEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGPUEngine"].prototype._executeWhenComputeStateIsCompiled = function(pipelineContext, action) {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises, github/no-then
    pipelineContext.stage.module.getCompilationInfo().then((info)=>{
        const compilationMessages = {
            numErrors: 0,
            messages: []
        };
        for (const message of info.messages){
            if (message.type === "error") {
                compilationMessages.numErrors++;
            }
            compilationMessages.messages.push({
                type: message.type,
                text: message.message,
                line: message.lineNum,
                column: message.linePos,
                length: message.length,
                offset: message.offset
            });
        }
        action(compilationMessages);
    });
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$webgpuEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGPUEngine"].prototype._deleteComputePipelineContext = function(pipelineContext) {
    const webgpuPipelineContext = pipelineContext;
    if (webgpuPipelineContext) {
        pipelineContext.dispose();
    }
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$webgpuEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGPUEngine"].prototype._createComputePipelineStageDescriptor = function(computeShader, defines, entryPoint) {
    if (defines) {
        defines = "//" + defines.split("\n").join("\n//") + "\n";
    } else {
        defines = "";
    }
    return {
        module: this._device.createShaderModule({
            code: defines + computeShader
        }),
        entryPoint
    };
}; //# sourceMappingURL=engine.computeShader.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/Extensions/engine.debugging.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$webgpuEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/webgpuEngine.js [app-client] (ecmascript)");
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$webgpuEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGPUEngine"].prototype._debugPushGroup = function(groupName, targetObject) {
    if (!this._options.enableGPUDebugMarkers) {
        return;
    }
    if (targetObject === 0 || targetObject === 1) {
        if (targetObject === 1) {
            if (this._currentRenderTarget) {
                this.unBindFramebuffer(this._currentRenderTarget);
            } else {
                this._endCurrentRenderPass();
            }
        }
        this._renderEncoder.pushDebugGroup(groupName);
    } else if (this._currentRenderPass) {
        this._currentRenderPass.pushDebugGroup(groupName);
        this._debugStackRenderPass.push(groupName);
    } else {
        this._pendingDebugCommands.push([
            "push",
            groupName,
            targetObject
        ]);
    }
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$webgpuEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGPUEngine"].prototype._debugPopGroup = function(targetObject) {
    if (!this._options.enableGPUDebugMarkers) {
        return;
    }
    if (targetObject === 0 || targetObject === 1) {
        if (targetObject === 1) {
            if (this._currentRenderTarget) {
                this.unBindFramebuffer(this._currentRenderTarget);
            } else {
                this._endCurrentRenderPass();
            }
        }
        this._renderEncoder.popDebugGroup();
    } else if (this._currentRenderPass) {
        this._currentRenderPass.popDebugGroup();
        this._debugStackRenderPass.pop();
    } else {
        this._pendingDebugCommands.push([
            "pop",
            null,
            targetObject
        ]);
    }
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$webgpuEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGPUEngine"].prototype._debugInsertMarker = function(text, targetObject) {
    if (!this._options.enableGPUDebugMarkers) {
        return;
    }
    if (targetObject === 0 || targetObject === 1) {
        if (targetObject === 1) {
            if (this._currentRenderTarget) {
                this.unBindFramebuffer(this._currentRenderTarget);
            } else {
                this._endCurrentRenderPass();
            }
        }
        this._renderEncoder.insertDebugMarker(text);
    } else if (this._currentRenderPass) {
        this._currentRenderPass.insertDebugMarker(text);
    } else {
        this._pendingDebugCommands.push([
            "insert",
            text,
            targetObject
        ]);
    }
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$webgpuEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGPUEngine"].prototype._debugFlushPendingCommands = function() {
    if (this._debugStackRenderPass.length !== 0) {
        const currentDebugStack = this._debugStackRenderPass.slice();
        this._debugStackRenderPass.length = 0;
        for(let i = 0; i < currentDebugStack.length; ++i){
            this._debugPushGroup(currentDebugStack[i], 2);
        }
    }
    for(let i = 0; i < this._pendingDebugCommands.length; ++i){
        const [name, param, targetObject] = this._pendingDebugCommands[i];
        switch(name){
            case "push":
                this._debugPushGroup(param, targetObject);
                break;
            case "pop":
                this._debugPopGroup(targetObject);
                break;
            case "insert":
                this._debugInsertMarker(param, targetObject);
                break;
        }
    }
    this._pendingDebugCommands.length = 0;
}; //# sourceMappingURL=engine.debugging.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/Extensions/engine.dynamicTexture.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$internalTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/internalTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$webgpuEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/webgpuEngine.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/tools.functions.js [app-client] (ecmascript)");
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$webgpuEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGPUEngine"].prototype.createDynamicTexture = function(width, height, generateMipMaps, samplingMode) {
    const texture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$internalTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InternalTexture"](this, 4 /* InternalTextureSource.Dynamic */ );
    texture.baseWidth = width;
    texture.baseHeight = height;
    if (generateMipMaps) {
        width = this.needPOTTextures ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GetExponentOfTwo"])(width, this._caps.maxTextureSize) : width;
        height = this.needPOTTextures ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GetExponentOfTwo"])(height, this._caps.maxTextureSize) : height;
    }
    texture.width = width;
    texture.height = height;
    texture.isReady = false;
    texture.generateMipMaps = generateMipMaps;
    texture.samplingMode = samplingMode;
    this.updateTextureSamplingMode(samplingMode, texture);
    this._internalTexturesCache.push(texture);
    if (width && height) {
        this._textureHelper.createGPUTextureForInternalTexture(texture, width, height);
    }
    return texture;
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$webgpuEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGPUEngine"].prototype.updateDynamicTexture = function(texture, source, invertY, premulAlpha = false, format, forceBindTexture, allowGPUOptimization) {
    if (!texture) {
        return;
    }
    const width = source.width, height = source.height;
    let gpuTextureWrapper = texture._hardwareTexture;
    if (!texture._hardwareTexture?.underlyingResource) {
        gpuTextureWrapper = this._textureHelper.createGPUTextureForInternalTexture(texture, width, height);
    }
    this._textureHelper.updateTexture(source, texture, width, height, texture.depth, gpuTextureWrapper.format, 0, 0, invertY, premulAlpha, 0, 0, allowGPUOptimization);
    if (texture.generateMipMaps) {
        this._generateMipmaps(texture);
    }
    texture._dynamicTextureSource = source;
    texture._premulAlpha = premulAlpha;
    texture.invertY = invertY || false;
    texture.isReady = true;
}; //# sourceMappingURL=engine.dynamicTexture.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/Extensions/engine.multiRender.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$internalTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/internalTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$webgpuEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/webgpuEngine.js [app-client] (ecmascript)");
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$webgpuEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGPUEngine"].prototype.unBindMultiColorAttachmentFramebuffer = function(rtWrapper, disableGenerateMipMaps = false, onBeforeUnbind) {
    if (onBeforeUnbind) {
        onBeforeUnbind();
    }
    this._endCurrentRenderPass();
    if (!rtWrapper.disableAutomaticMSAAResolve) {
        this.resolveMultiFramebuffer(rtWrapper, false);
    }
    if (!disableGenerateMipMaps) {
        this.generateMipMapsMultiFramebuffer(rtWrapper);
    }
    this._currentRenderTarget = null;
    this._mrtAttachments = [];
    this._cacheRenderPipeline.setMRT([]);
    this._cacheRenderPipeline.setMRTAttachments(this._mrtAttachments);
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$webgpuEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGPUEngine"].prototype.createMultipleRenderTarget = function(size, options, initializeBuffers) {
    let generateMipMaps = false;
    let generateDepthBuffer = true;
    let generateStencilBuffer = false;
    let generateDepthTexture = false;
    let depthTextureFormat = 15;
    let textureCount = 1;
    let samples = 1;
    const defaultType = 0;
    const defaultSamplingMode = 3;
    const defaultUseSRGBBuffer = false;
    const defaultFormat = 5;
    const defaultTarget = 3553;
    let types = [];
    let samplingModes = [];
    let useSRGBBuffers = [];
    let formats = [];
    let targets = [];
    let faceIndex = [];
    let layerIndex = [];
    let layers = [];
    let labels = [];
    let creationFlags = [];
    let dontCreateTextures = false;
    const rtWrapper = this._createHardwareRenderTargetWrapper(true, false, size);
    if (options !== undefined) {
        generateMipMaps = options.generateMipMaps ?? false;
        generateDepthBuffer = options.generateDepthBuffer ?? true;
        generateStencilBuffer = options.generateStencilBuffer ?? false;
        generateDepthTexture = options.generateDepthTexture ?? false;
        textureCount = options.textureCount ?? 1;
        depthTextureFormat = options.depthTextureFormat ?? 15;
        types = options.types || types;
        samplingModes = options.samplingModes || samplingModes;
        useSRGBBuffers = options.useSRGBBuffers || useSRGBBuffers;
        formats = options.formats || formats;
        targets = options.targetTypes || targets;
        faceIndex = options.faceIndex || faceIndex;
        layerIndex = options.layerIndex || layerIndex;
        layers = options.layerCounts || layers;
        labels = options.labels || labels;
        creationFlags = options.creationFlags || creationFlags;
        samples = options.samples ?? samples;
        dontCreateTextures = options.dontCreateTextures ?? false;
    }
    const width = size.width ?? size;
    const height = size.height ?? size;
    const textures = [];
    const attachments = [];
    const defaultAttachments = [];
    rtWrapper.label = options?.label ?? "MultiRenderTargetWrapper";
    rtWrapper._generateDepthBuffer = generateDepthBuffer;
    rtWrapper._generateStencilBuffer = generateStencilBuffer;
    rtWrapper._attachments = attachments;
    rtWrapper._defaultAttachments = defaultAttachments;
    let depthStencilTexture = null;
    if ((generateDepthBuffer || generateStencilBuffer || generateDepthTexture) && !dontCreateTextures) {
        if (!generateDepthTexture) {
            // The caller doesn't want a depth texture, so we are free to use the depth texture format we want.
            // So, we will align with what the WebGL engine does
            if (generateDepthBuffer && generateStencilBuffer) {
                depthTextureFormat = 13;
            } else if (generateDepthBuffer) {
                depthTextureFormat = 14;
            } else {
                depthTextureFormat = 19;
            }
        }
        depthStencilTexture = rtWrapper.createDepthStencilTexture(0, false, generateStencilBuffer, 1, depthTextureFormat, rtWrapper.label + "-DepthStencil");
    }
    const mipmapsCreationOnly = options !== undefined && typeof options === "object" && options.createMipMaps && !generateMipMaps;
    for(let i = 0; i < textureCount; i++){
        let samplingMode = samplingModes[i] || defaultSamplingMode;
        let type = types[i] || defaultType;
        const format = formats[i] || defaultFormat;
        const useSRGBBuffer = (useSRGBBuffers[i] || defaultUseSRGBBuffer) && this._caps.supportSRGBBuffers;
        const target = targets[i] || defaultTarget;
        const layerCount = layers[i] ?? 1;
        const creationFlag = creationFlags[i];
        if (type === 1 && !this._caps.textureFloatLinearFiltering) {
            // if floating point linear (FLOAT) then force to NEAREST_SAMPLINGMODE
            samplingMode = 1;
        } else if (type === 2 && !this._caps.textureHalfFloatLinearFiltering) {
            // if floating point linear (HALF_FLOAT) then force to NEAREST_SAMPLINGMODE
            samplingMode = 1;
        }
        if (type === 1 && !this._caps.textureFloat) {
            type = 0;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Warn("Float textures are not supported. Render target forced to TEXTURETYPE_UNSIGNED_BYTE type");
        }
        attachments.push(i + 1);
        defaultAttachments.push(initializeBuffers ? i + 1 : i === 0 ? 1 : 0);
        if (target === -1 || dontCreateTextures) {
            continue;
        }
        const texture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$internalTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InternalTexture"](this, 6 /* InternalTextureSource.MultiRenderTarget */ );
        textures[i] = texture;
        switch(target){
            case 34067:
                texture.isCube = true;
                break;
            case 32879:
                texture.is3D = true;
                texture.baseDepth = texture.depth = layerCount;
                break;
            case 35866:
                texture.is2DArray = true;
                texture.baseDepth = texture.depth = layerCount;
                break;
        }
        texture.baseWidth = width;
        texture.baseHeight = height;
        texture.width = width;
        texture.height = height;
        texture.isReady = true;
        texture.samples = 1;
        texture.generateMipMaps = generateMipMaps;
        texture.samplingMode = samplingMode;
        texture.type = type;
        texture._cachedWrapU = 0;
        texture._cachedWrapV = 0;
        texture._useSRGBBuffer = useSRGBBuffer;
        texture.format = format;
        texture.label = labels[i] ?? rtWrapper.label + "-Texture" + i;
        this._internalTexturesCache.push(texture);
        if (mipmapsCreationOnly) {
            // createGPUTextureForInternalTexture will only create a texture with mipmaps if generateMipMaps is true, as InternalTexture has no createMipMaps property, separate from generateMipMaps.
            texture.generateMipMaps = true;
        }
        this._textureHelper.createGPUTextureForInternalTexture(texture, undefined, undefined, undefined, creationFlag, true);
        if (mipmapsCreationOnly) {
            texture.generateMipMaps = false;
        }
    }
    if (depthStencilTexture) {
        depthStencilTexture.incrementReferences();
        textures[textureCount] = depthStencilTexture;
        this._internalTexturesCache.push(depthStencilTexture);
    }
    rtWrapper.setTextures(textures);
    rtWrapper.setLayerAndFaceIndices(layerIndex, faceIndex);
    if (!dontCreateTextures) {
        this.updateMultipleRenderTargetTextureSampleCount(rtWrapper, samples);
    } else {
        rtWrapper._samples = samples;
    }
    return rtWrapper;
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$webgpuEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGPUEngine"].prototype.updateMultipleRenderTargetTextureSampleCount = function(rtWrapper, samples) {
    if (!rtWrapper || !rtWrapper.textures || rtWrapper.textures.length === 0 || rtWrapper.textures[0].samples === samples) {
        return samples;
    }
    const count = rtWrapper.textures.length;
    if (count === 0) {
        return 1;
    }
    samples = Math.min(samples, this.getCaps().maxMSAASamples);
    for(let i = 0; i < count; ++i){
        const texture = rtWrapper.textures[i];
        const gpuTextureWrapper = texture._hardwareTexture;
        gpuTextureWrapper?.releaseMSAATexture(rtWrapper.getBaseArrayLayer(i));
    }
    // Note that rtWrapper.textures can't have null textures, lastTextureIsDepthTexture can't be true if rtWrapper._depthStencilTexture is null
    const lastTextureIsDepthTexture = rtWrapper._depthStencilTexture === rtWrapper.textures[count - 1];
    for(let i = 0; i < count; ++i){
        const texture = rtWrapper.textures[i];
        this._textureHelper.createMSAATexture(texture, samples, false, rtWrapper.getBaseArrayLayer(i));
        texture.samples = samples;
    }
    // Note that the last texture of textures is the depth texture if the depth texture has been generated by the MRT class and so the MSAA texture
    // will be recreated for this texture by the loop above: in that case, there's no need to create the MSAA texture for rtWrapper._depthStencilTexture
    // because rtWrapper._depthStencilTexture is the same texture than the depth texture
    if (rtWrapper._depthStencilTexture && !lastTextureIsDepthTexture) {
        this._textureHelper.createMSAATexture(rtWrapper._depthStencilTexture, samples);
        rtWrapper._depthStencilTexture.samples = samples;
    }
    rtWrapper._samples = samples;
    return samples;
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$webgpuEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGPUEngine"].prototype.generateMipMapsMultiFramebuffer = function(texture) {
    const rtWrapper = texture;
    if (!rtWrapper.isMulti) {
        return;
    }
    const attachments = rtWrapper._attachments;
    const count = attachments.length;
    for(let i = 0; i < count; i++){
        const texture = rtWrapper.textures[i];
        if (texture.generateMipMaps && !texture.isCube && !texture.is3D) {
            this._generateMipmaps(texture);
        }
    }
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$webgpuEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGPUEngine"].prototype.resolveMultiFramebuffer = function(texture, resolveColors = true) {
    this.resolveFramebuffer(texture, resolveColors);
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$webgpuEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGPUEngine"].prototype.bindAttachments = function(attachments) {
    if (attachments.length === 0 || !this._currentRenderTarget) {
        return;
    }
    this._mrtAttachments = attachments;
    if (this._currentRenderPass) {
        // the render pass has already been created, we need to call setMRTAttachments to update the state of the attachments
        this._cacheRenderPipeline.setMRTAttachments(attachments);
    } else {
    // the render pass is not created yet so we don't need to call setMRTAttachments: it will be called as part of the render pass creation (see WebGPUEngine._startRenderTargetRenderPass)
    }
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$webgpuEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGPUEngine"].prototype.buildTextureLayout = function(textureStatus, backBufferLayout = false) {
    const result = [];
    if (backBufferLayout) {
        result.push(1);
    } else {
        for(let i = 0; i < textureStatus.length; i++){
            if (textureStatus[i]) {
                result.push(i + 1);
            } else {
                result.push(0);
            }
        }
    }
    return result;
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$webgpuEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGPUEngine"].prototype.restoreSingleAttachment = function() {
// not sure what to do, probably nothing... This function and restoreSingleAttachmentForRenderTarget are not called in Babylon.js so it's hard to know the use case
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$webgpuEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGPUEngine"].prototype.restoreSingleAttachmentForRenderTarget = function() {
// not sure what to do, probably nothing... This function and restoreSingleAttachment are not called in Babylon.js so it's hard to know the use case
}; //# sourceMappingURL=engine.multiRender.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/Extensions/engine.videoTexture.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$webgpuEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/webgpuEngine.js [app-client] (ecmascript)");
;
function IsExternalTexture(texture) {
    return texture && texture.underlyingResource !== undefined ? true : false;
}
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$webgpuEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGPUEngine"].prototype.updateVideoTexture = function(texture, video, invertY) {
    if (!texture || texture._isDisabled) {
        return;
    }
    if (this._videoTextureSupported === undefined) {
        this._videoTextureSupported = true;
    }
    let gpuTextureWrapper = texture._hardwareTexture;
    if (!texture._hardwareTexture?.underlyingResource) {
        gpuTextureWrapper = this._textureHelper.createGPUTextureForInternalTexture(texture);
    }
    if (IsExternalTexture(video)) {
        if (video.isReady()) {
            try {
                this._textureHelper.copyVideoToTexture(video, texture, gpuTextureWrapper.format, !invertY);
                if (texture.generateMipMaps) {
                    this._generateMipmaps(texture);
                }
            } catch (e) {
            // WebGPU doesn't support video element who are not playing so far
            // Ignore this error ensures we can start a video texture in a paused state
            }
            texture.isReady = true;
        }
    } else if (video) {
        this.createImageBitmap(video)// eslint-disable-next-line github/no-then
        .then((bitmap)=>{
            this._textureHelper.updateTexture(bitmap, texture, texture.width, texture.height, texture.depth, gpuTextureWrapper.format, 0, 0, !invertY, false, 0, 0);
            if (texture.generateMipMaps) {
                this._generateMipmaps(texture);
            }
            texture.isReady = true;
        })// eslint-disable-next-line github/no-then
        .catch(()=>{
            // Sometimes createImageBitmap(video) fails with "Failed to execute 'createImageBitmap' on 'Window': The provided element's player has no current data."
            // Just keep going on
            texture.isReady = true;
        });
    }
}; //# sourceMappingURL=engine.videoTexture.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/Extensions/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$Extensions$2f$engine$2e$alpha$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/Extensions/engine.alpha.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$Extensions$2f$engine$2e$computeShader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/Extensions/engine.computeShader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$Extensions$2f$engine$2e$cubeTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/Extensions/engine.cubeTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$Extensions$2f$engine$2e$debugging$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/Extensions/engine.debugging.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$Extensions$2f$engine$2e$dynamicTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/Extensions/engine.dynamicTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$Extensions$2f$engine$2e$multiRender$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/Extensions/engine.multiRender.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$Extensions$2f$engine$2e$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/Extensions/engine.query.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$Extensions$2f$engine$2e$rawTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/Extensions/engine.rawTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$Extensions$2f$engine$2e$readTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/Extensions/engine.readTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$Extensions$2f$engine$2e$renderTarget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/Extensions/engine.renderTarget.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$Extensions$2f$engine$2e$renderTargetCube$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/Extensions/engine.renderTargetCube.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$Extensions$2f$engine$2e$renderTargetTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/Extensions/engine.renderTargetTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGPU$2f$Extensions$2f$engine$2e$videoTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGPU/Extensions/engine.videoTexture.js [app-client] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
;
;
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
]);

//# sourceMappingURL=dcdbf_%40babylonjs_core_Engines_WebGPU_b6bf570f._.js.map