(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Extensions/engine.alpha.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/thinEngine.js [app-client] (ecmascript)");
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinEngine"].prototype.setAlphaMode = function(mode, noDepthWriteChange = false, targetIndex = 0) {
    if (this._alphaMode[targetIndex] === mode) {
        if (!noDepthWriteChange) {
            // Make sure we still have the correct depth mask according to the alpha mode (a transparent material could have forced writting to the depth buffer, for instance)
            const depthMask = mode === 0;
            if (this.depthCullingState.depthMask !== depthMask) {
                this.depthCullingState.depthMask = depthMask;
            }
        }
        return;
    }
    const alphaBlendDisabled = mode === 0;
    this._alphaState.setAlphaBlend(!alphaBlendDisabled, targetIndex);
    this._alphaState.setAlphaMode(mode, targetIndex);
    if (!noDepthWriteChange) {
        this.depthCullingState.depthMask = alphaBlendDisabled;
    }
    this._alphaMode[targetIndex] = mode;
}; //# sourceMappingURL=engine.alpha.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Extensions/engine.rawTexture.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$internalTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/internalTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/thinEngine.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/tools.functions.js [app-client] (ecmascript)");
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinEngine"].prototype.updateRawTexture = function(texture, data, format, invertY, compression = null, type = 0, useSRGBBuffer = false) {
    if (!texture) {
        return;
    }
    // Babylon's internalSizedFomat but gl's texImage2D internalFormat
    const internalSizedFomat = this._getRGBABufferInternalSizedFormat(type, format, useSRGBBuffer);
    // Babylon's internalFormat but gl's texImage2D format
    const internalFormat = this._getInternalFormat(format);
    const textureType = this._getWebGLTextureType(type);
    this._bindTextureDirectly(this._gl.TEXTURE_2D, texture, true);
    this._unpackFlipY(invertY === undefined ? true : invertY ? true : false);
    if (!this._doNotHandleContextLost) {
        texture._bufferView = data;
        texture.format = format;
        texture.type = type;
        texture.invertY = invertY;
        texture._compression = compression;
    }
    if (texture.width % 4 !== 0) {
        this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1);
    }
    if (compression && data) {
        this._gl.compressedTexImage2D(this._gl.TEXTURE_2D, 0, this.getCaps().s3tc[compression], texture.width, texture.height, 0, data);
    } else {
        this._gl.texImage2D(this._gl.TEXTURE_2D, 0, internalSizedFomat, texture.width, texture.height, 0, internalFormat, textureType, data);
    }
    if (texture.generateMipMaps) {
        this._gl.generateMipmap(this._gl.TEXTURE_2D);
    }
    this._bindTextureDirectly(this._gl.TEXTURE_2D, null);
    //  this.resetTextureCache();
    texture.isReady = true;
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinEngine"].prototype.createRawTexture = function(data, width, height, format, generateMipMaps, invertY, samplingMode, compression = null, type = 0, // eslint-disable-next-line @typescript-eslint/no-unused-vars
creationFlags = 0, useSRGBBuffer = false) {
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
    texture._useSRGBBuffer = this._getUseSRGBBuffer(useSRGBBuffer, !generateMipMaps);
    if (!this._doNotHandleContextLost) {
        texture._bufferView = data;
    }
    this.updateRawTexture(texture, data, format, invertY, compression, type, texture._useSRGBBuffer);
    this._bindTextureDirectly(this._gl.TEXTURE_2D, texture, true);
    // Filters
    const filters = this._getSamplingParameters(samplingMode, generateMipMaps);
    this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, filters.mag);
    this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, filters.min);
    if (generateMipMaps) {
        this._gl.generateMipmap(this._gl.TEXTURE_2D);
    }
    this._bindTextureDirectly(this._gl.TEXTURE_2D, null);
    this._internalTexturesCache.push(texture);
    return texture;
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinEngine"].prototype.createRawCubeTexture = function(data, size, format, type, generateMipMaps, invertY, samplingMode, compression = null) {
    const gl = this._gl;
    const texture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$internalTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InternalTexture"](this, 8 /* InternalTextureSource.CubeRaw */ );
    texture.isCube = true;
    texture.format = format;
    texture.type = type;
    if (!this._doNotHandleContextLost) {
        texture._bufferViewArray = data;
    }
    const textureType = this._getWebGLTextureType(type);
    let internalFormat = this._getInternalFormat(format);
    if (internalFormat === gl.RGB) {
        internalFormat = gl.RGBA;
    }
    // Mipmap generation needs a sized internal format that is both color-renderable and texture-filterable
    if (textureType === gl.FLOAT && !this._caps.textureFloatLinearFiltering) {
        generateMipMaps = false;
        samplingMode = 1;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Warn("Float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively.");
    } else if (textureType === this._gl.HALF_FLOAT_OES && !this._caps.textureHalfFloatLinearFiltering) {
        generateMipMaps = false;
        samplingMode = 1;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Warn("Half float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively.");
    } else if (textureType === gl.FLOAT && !this._caps.textureFloatRender) {
        generateMipMaps = false;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Warn("Render to float textures is not supported. Mipmap generation forced to false.");
    } else if (textureType === gl.HALF_FLOAT && !this._caps.colorBufferFloat) {
        generateMipMaps = false;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Warn("Render to half float textures is not supported. Mipmap generation forced to false.");
    }
    const width = size;
    const height = width;
    texture.width = width;
    texture.height = height;
    texture.invertY = invertY;
    texture._compression = compression;
    // Double check on POT to generate Mips.
    const isPot = !this.needPOTTextures || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IsExponentOfTwo"])(texture.width) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IsExponentOfTwo"])(texture.height);
    if (!isPot) {
        generateMipMaps = false;
    }
    // Upload data if needed. The texture won't be ready until then.
    if (data) {
        this.updateRawCubeTexture(texture, data, format, type, invertY, compression);
    } else {
        const internalSizedFomat = this._getRGBABufferInternalSizedFormat(type);
        const level = 0;
        this._bindTextureDirectly(gl.TEXTURE_CUBE_MAP, texture, true);
        for(let faceIndex = 0; faceIndex < 6; faceIndex++){
            if (compression) {
                gl.compressedTexImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X + faceIndex, level, this.getCaps().s3tc[compression], texture.width, texture.height, 0, undefined);
            } else {
                gl.texImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X + faceIndex, level, internalSizedFomat, texture.width, texture.height, 0, internalFormat, textureType, null);
            }
        }
        this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null);
    }
    this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, texture, true);
    // Filters
    if (data && generateMipMaps) {
        this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP);
    }
    const filters = this._getSamplingParameters(samplingMode, generateMipMaps);
    gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MAG_FILTER, filters.mag);
    gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MIN_FILTER, filters.min);
    gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    this._bindTextureDirectly(gl.TEXTURE_CUBE_MAP, null);
    texture.generateMipMaps = generateMipMaps;
    texture.samplingMode = samplingMode;
    texture.isReady = true;
    return texture;
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinEngine"].prototype.updateRawCubeTexture = function(texture, data, format, type, invertY, compression = null, level = 0) {
    texture._bufferViewArray = data;
    texture.format = format;
    texture.type = type;
    texture.invertY = invertY;
    texture._compression = compression;
    const gl = this._gl;
    const textureType = this._getWebGLTextureType(type);
    let internalFormat = this._getInternalFormat(format);
    const internalSizedFomat = this._getRGBABufferInternalSizedFormat(type);
    let needConversion = false;
    if (internalFormat === gl.RGB) {
        internalFormat = gl.RGBA;
        needConversion = true;
    }
    this._bindTextureDirectly(gl.TEXTURE_CUBE_MAP, texture, true);
    this._unpackFlipY(invertY === undefined ? true : invertY ? true : false);
    if (texture.width % 4 !== 0) {
        gl.pixelStorei(gl.UNPACK_ALIGNMENT, 1);
    }
    // Data are known to be in +X +Y +Z -X -Y -Z
    for(let faceIndex = 0; faceIndex < 6; faceIndex++){
        let faceData = data[faceIndex];
        if (compression) {
            gl.compressedTexImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X + faceIndex, level, this.getCaps().s3tc[compression], texture.width, texture.height, 0, faceData);
        } else {
            if (needConversion) {
                faceData = ConvertRGBtoRGBATextureData(faceData, texture.width, texture.height, type);
            }
            gl.texImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X + faceIndex, level, internalSizedFomat, texture.width, texture.height, 0, internalFormat, textureType, faceData);
        }
    }
    const isPot = !this.needPOTTextures || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IsExponentOfTwo"])(texture.width) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IsExponentOfTwo"])(texture.height);
    if (isPot && texture.generateMipMaps && level === 0) {
        this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP);
    }
    this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null);
    // this.resetTextureCache();
    texture.isReady = true;
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinEngine"].prototype.createRawCubeTextureFromUrl = function(url, scene, size, format, type, noMipmap, callback, mipmapGenerator, onLoad = null, onError = null, samplingMode = 3, invertY = false) {
    const gl = this._gl;
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
        // If the texture has been disposed
        if (!texture._hardwareTexture) {
            return;
        }
        const faceDataArraysResult = callback(data);
        if (!faceDataArraysResult) {
            return;
        }
        const faceDataArrays = faceDataArraysResult instanceof Promise ? await faceDataArraysResult : faceDataArraysResult;
        const width = texture.width;
        if (mipmapGenerator) {
            const textureType = this._getWebGLTextureType(type);
            let internalFormat = this._getInternalFormat(format);
            const internalSizedFomat = this._getRGBABufferInternalSizedFormat(type);
            let needConversion = false;
            if (internalFormat === gl.RGB) {
                internalFormat = gl.RGBA;
                needConversion = true;
            }
            this._bindTextureDirectly(gl.TEXTURE_CUBE_MAP, texture, true);
            this._unpackFlipY(false);
            const mipData = mipmapGenerator(faceDataArrays);
            for(let level = 0; level < mipData.length; level++){
                const mipSize = width >> level;
                for(let faceIndex = 0; faceIndex < 6; faceIndex++){
                    let mipFaceData = mipData[level][faceIndex];
                    if (needConversion) {
                        mipFaceData = ConvertRGBtoRGBATextureData(mipFaceData, mipSize, mipSize, type);
                    }
                    gl.texImage2D(faceIndex, level, internalSizedFomat, mipSize, mipSize, 0, internalFormat, textureType, mipFaceData);
                }
            }
            this._bindTextureDirectly(gl.TEXTURE_CUBE_MAP, null);
        } else {
            this.updateRawCubeTexture(texture, faceDataArrays, format, type, invertY);
        }
        texture.isReady = true;
        // this.resetTextureCache();
        scene?.removePendingData(texture);
        texture.onLoadedObservable.notifyObservers(texture);
        texture.onLoadedObservable.clear();
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
}
/**
 * Create a function for createRawTexture3D/createRawTexture2DArray
 * @param is3D true for TEXTURE_3D and false for TEXTURE_2D_ARRAY
 * @internal
 */ // eslint-disable-next-line @typescript-eslint/naming-convention
function MakeCreateRawTextureFunction(is3D) {
    return function(data, width, height, depth, format, generateMipMaps, invertY, samplingMode, compression = null, textureType = 0) {
        const target = is3D ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY;
        const source = is3D ? 10 /* InternalTextureSource.Raw3D */  : 11 /* InternalTextureSource.Raw2DArray */ ;
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
        if (is3D) {
            texture.is3D = true;
        } else {
            texture.is2DArray = true;
        }
        if (!this._doNotHandleContextLost) {
            texture._bufferView = data;
        }
        if (is3D) {
            this.updateRawTexture3D(texture, data, format, invertY, compression, textureType);
        } else {
            this.updateRawTexture2DArray(texture, data, format, invertY, compression, textureType);
        }
        this._bindTextureDirectly(target, texture, true);
        // Filters
        const filters = this._getSamplingParameters(samplingMode, generateMipMaps);
        this._gl.texParameteri(target, this._gl.TEXTURE_MAG_FILTER, filters.mag);
        this._gl.texParameteri(target, this._gl.TEXTURE_MIN_FILTER, filters.min);
        if (generateMipMaps) {
            this._gl.generateMipmap(target);
        }
        this._bindTextureDirectly(target, null);
        this._internalTexturesCache.push(texture);
        return texture;
    };
}
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinEngine"].prototype.createRawTexture2DArray = MakeCreateRawTextureFunction(false);
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinEngine"].prototype.createRawTexture3D = MakeCreateRawTextureFunction(true);
/**
 * Create a function for updateRawTexture3D/updateRawTexture2DArray
 * @param is3D true for TEXTURE_3D and false for TEXTURE_2D_ARRAY
 * @internal
 */ function MakeUpdateRawTextureFunction(is3D) {
    return function(texture, data, format, invertY, compression = null, textureType = 0) {
        const target = is3D ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY;
        const internalType = this._getWebGLTextureType(textureType);
        const internalFormat = this._getInternalFormat(format);
        const internalSizedFomat = this._getRGBABufferInternalSizedFormat(textureType, format);
        this._bindTextureDirectly(target, texture, true);
        this._unpackFlipY(invertY === undefined ? true : invertY ? true : false);
        if (!this._doNotHandleContextLost) {
            texture._bufferView = data;
            texture.format = format;
            texture.invertY = invertY;
            texture._compression = compression;
        }
        if (texture.width % 4 !== 0) {
            this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1);
        }
        if (compression && data) {
            this._gl.compressedTexImage3D(target, 0, this.getCaps().s3tc[compression], texture.width, texture.height, texture.depth, 0, data);
        } else {
            this._gl.texImage3D(target, 0, internalSizedFomat, texture.width, texture.height, texture.depth, 0, internalFormat, internalType, data);
        }
        if (texture.generateMipMaps) {
            this._gl.generateMipmap(target);
        }
        this._bindTextureDirectly(target, null);
        // this.resetTextureCache();
        texture.isReady = true;
    };
}
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinEngine"].prototype.updateRawTexture2DArray = MakeUpdateRawTextureFunction(false);
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinEngine"].prototype.updateRawTexture3D = MakeUpdateRawTextureFunction(true); //# sourceMappingURL=engine.rawTexture.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Extensions/engine.readTexture.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/thinEngine.js [app-client] (ecmascript)");
// back-compat
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/abstractEngine.functions.js [app-client] (ecmascript)");
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinEngine"].prototype._readTexturePixelsSync = function(texture, width, height, faceIndex = -1, level = 0, buffer = null, flushRenderer = true, noDataConversion = false, x = 0, y = 0) {
    const gl = this._gl;
    if (!gl) {
        throw new Error("Engine does not have gl rendering context.");
    }
    if (!this._dummyFramebuffer) {
        const dummy = gl.createFramebuffer();
        if (!dummy) {
            throw new Error("Unable to create dummy framebuffer");
        }
        this._dummyFramebuffer = dummy;
    }
    gl.bindFramebuffer(gl.FRAMEBUFFER, this._dummyFramebuffer);
    if (faceIndex > -1) {
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_CUBE_MAP_POSITIVE_X + faceIndex, texture._hardwareTexture?.underlyingResource, level);
    } else {
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture._hardwareTexture?.underlyingResource, level);
    }
    let readType = texture.type !== undefined ? this._getWebGLTextureType(texture.type) : gl.UNSIGNED_BYTE;
    if (!noDataConversion) {
        switch(readType){
            case gl.UNSIGNED_BYTE:
                if (!buffer) {
                    buffer = new Uint8Array(4 * width * height);
                }
                readType = gl.UNSIGNED_BYTE;
                break;
            default:
                if (!buffer) {
                    buffer = new Float32Array(4 * width * height);
                }
                readType = gl.FLOAT;
                break;
        }
    } else if (!buffer) {
        buffer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["allocateAndCopyTypedBuffer"])(texture.type, 4 * width * height);
    }
    if (flushRenderer) {
        this.flushFramebuffer();
    }
    gl.readPixels(x, y, width, height, gl.RGBA, readType, buffer);
    gl.bindFramebuffer(gl.FRAMEBUFFER, this._currentFramebuffer);
    return buffer;
};
// eslint-disable-next-line @typescript-eslint/promise-function-async
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinEngine"].prototype._readTexturePixels = function(texture, width, height, faceIndex = -1, level = 0, buffer = null, flushRenderer = true, noDataConversion = false, x = 0, y = 0) {
    return Promise.resolve(this._readTexturePixelsSync(texture, width, height, faceIndex, level, buffer, flushRenderer, noDataConversion, x, y));
}; //# sourceMappingURL=engine.readTexture.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Extensions/engine.dynamicBuffer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/thinEngine.js [app-client] (ecmascript)");
;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinEngine"].prototype.updateDynamicIndexBuffer = function(indexBuffer, indices, offset = 0) {
    // Force cache update
    this._currentBoundBuffer[this._gl.ELEMENT_ARRAY_BUFFER] = null;
    this.bindIndexBuffer(indexBuffer);
    let view;
    if (indexBuffer.is32Bits) {
        // anything else than Uint32Array needs to be converted to Uint32Array
        view = indices instanceof Uint32Array ? indices : new Uint32Array(indices);
    } else {
        // anything else than Uint16Array needs to be converted to Uint16Array
        view = indices instanceof Uint16Array ? indices : new Uint16Array(indices);
    }
    this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, view, this._gl.DYNAMIC_DRAW);
    this._resetIndexBufferBinding();
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinEngine"].prototype.updateDynamicVertexBuffer = function(vertexBuffer, data, byteOffset, byteLength) {
    this.bindArrayBuffer(vertexBuffer);
    if (byteOffset === undefined) {
        byteOffset = 0;
    }
    const dataLength = data.byteLength || data.length;
    if (byteLength === undefined || byteLength >= dataLength && byteOffset === 0) {
        if (data instanceof Array) {
            this._gl.bufferSubData(this._gl.ARRAY_BUFFER, byteOffset, new Float32Array(data));
        } else {
            this._gl.bufferSubData(this._gl.ARRAY_BUFFER, byteOffset, data);
        }
    } else {
        if (data instanceof Array) {
            this._gl.bufferSubData(this._gl.ARRAY_BUFFER, byteOffset, new Float32Array(data).subarray(0, byteLength / 4));
        } else {
            if (data instanceof ArrayBuffer) {
                data = new Uint8Array(data, 0, byteLength);
            } else {
                data = new Uint8Array(data.buffer, data.byteOffset, byteLength);
            }
            this._gl.bufferSubData(this._gl.ARRAY_BUFFER, byteOffset, data);
        }
    }
    this._resetVertexBufferBinding();
}; //# sourceMappingURL=engine.dynamicBuffer.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Extensions/engine.cubeTexture.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/thinEngine.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$internalTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/internalTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/tools.functions.js [app-client] (ecmascript)");
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinEngine"].prototype._createDepthStencilCubeTexture = function(size, options) {
    const internalTexture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$internalTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InternalTexture"](this, 12 /* InternalTextureSource.DepthStencil */ );
    internalTexture.isCube = true;
    if (this.webGLVersion === 1) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Error("Depth cube texture is not supported by WebGL 1.");
        return internalTexture;
    }
    const internalOptions = {
        bilinearFiltering: false,
        comparisonFunction: 0,
        generateStencil: false,
        ...options
    };
    const gl = this._gl;
    this._bindTextureDirectly(gl.TEXTURE_CUBE_MAP, internalTexture, true);
    this._setupDepthStencilTexture(internalTexture, size, internalOptions.bilinearFiltering, internalOptions.comparisonFunction);
    // Create the depth/stencil buffer
    for(let face = 0; face < 6; face++){
        if (internalOptions.generateStencil) {
            gl.texImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X + face, 0, gl.DEPTH24_STENCIL8, size, size, 0, gl.DEPTH_STENCIL, gl.UNSIGNED_INT_24_8, null);
        } else {
            gl.texImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X + face, 0, gl.DEPTH_COMPONENT24, size, size, 0, gl.DEPTH_COMPONENT, gl.UNSIGNED_INT, null);
        }
    }
    this._bindTextureDirectly(gl.TEXTURE_CUBE_MAP, null);
    this._internalTexturesCache.push(internalTexture);
    return internalTexture;
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinEngine"].prototype._setCubeMapTextureParams = function(texture, loadMipmap, maxLevel) {
    const gl = this._gl;
    gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MIN_FILTER, loadMipmap ? gl.LINEAR_MIPMAP_LINEAR : gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    texture.samplingMode = loadMipmap ? 3 : 2;
    if (loadMipmap && this.getCaps().textureMaxLevel && maxLevel !== undefined && maxLevel > 0) {
        gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MAX_LEVEL, maxLevel);
        texture._maxLodLevel = maxLevel;
    }
    this._bindTextureDirectly(gl.TEXTURE_CUBE_MAP, null);
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinEngine"].prototype.createCubeTexture = function(rootUrl, scene, files, noMipmap, onLoad = null, onError = null, format, forcedExtension = null, createPolynomials = false, lodScale = 0, lodOffset = 0, fallback = null, loaderOptions, useSRGBBuffer = false, buffer = null) {
    const gl = this._gl;
    return this.createCubeTextureBase(rootUrl, scene, files, !!noMipmap, onLoad, onError, format, forcedExtension, createPolynomials, lodScale, lodOffset, fallback, (texture)=>this._bindTextureDirectly(gl.TEXTURE_CUBE_MAP, texture, true), (texture, imgs)=>{
        const width = this.needPOTTextures ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GetExponentOfTwo"])(imgs[0].width, this._caps.maxCubemapTextureSize) : imgs[0].width;
        const height = width;
        const faces = [
            gl.TEXTURE_CUBE_MAP_POSITIVE_X,
            gl.TEXTURE_CUBE_MAP_POSITIVE_Y,
            gl.TEXTURE_CUBE_MAP_POSITIVE_Z,
            gl.TEXTURE_CUBE_MAP_NEGATIVE_X,
            gl.TEXTURE_CUBE_MAP_NEGATIVE_Y,
            gl.TEXTURE_CUBE_MAP_NEGATIVE_Z
        ];
        this._bindTextureDirectly(gl.TEXTURE_CUBE_MAP, texture, true);
        this._unpackFlipY(false);
        const internalFormat = format ? this._getInternalFormat(format, texture._useSRGBBuffer) : texture._useSRGBBuffer ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : gl.RGBA;
        let texelFormat = format ? this._getInternalFormat(format) : gl.RGBA;
        if (texture._useSRGBBuffer && this.webGLVersion === 1) {
            texelFormat = internalFormat;
        }
        for(let index = 0; index < faces.length; index++){
            if (imgs[index].width !== width || imgs[index].height !== height) {
                this._prepareWorkingCanvas();
                if (!this._workingCanvas || !this._workingContext) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Warn("Cannot create canvas to resize texture.");
                    return;
                }
                this._workingCanvas.width = width;
                this._workingCanvas.height = height;
                this._workingContext.drawImage(imgs[index], 0, 0, imgs[index].width, imgs[index].height, 0, 0, width, height);
                gl.texImage2D(faces[index], 0, internalFormat, texelFormat, gl.UNSIGNED_BYTE, this._workingCanvas);
            } else {
                gl.texImage2D(faces[index], 0, internalFormat, texelFormat, gl.UNSIGNED_BYTE, imgs[index]);
            }
        }
        if (!noMipmap) {
            gl.generateMipmap(gl.TEXTURE_CUBE_MAP);
        }
        this._setCubeMapTextureParams(texture, !noMipmap);
        texture.width = width;
        texture.height = height;
        texture.isReady = true;
        if (format) {
            texture.format = format;
        }
        texture.onLoadedObservable.notifyObservers(texture);
        texture.onLoadedObservable.clear();
        if (onLoad) {
            onLoad();
        }
    }, !!useSRGBBuffer, buffer);
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinEngine"].prototype.generateMipMapsForCubemap = function(texture, unbind = true) {
    if (texture.generateMipMaps) {
        const gl = this._gl;
        this._bindTextureDirectly(gl.TEXTURE_CUBE_MAP, texture, true);
        gl.generateMipmap(gl.TEXTURE_CUBE_MAP);
        if (unbind) {
            this._bindTextureDirectly(gl.TEXTURE_CUBE_MAP, null);
        }
    }
}; //# sourceMappingURL=engine.cubeTexture.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Extensions/engine.renderTarget.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$internalTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/internalTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/thinEngine.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGL$2f$webGLRenderTargetWrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/WebGL/webGLRenderTargetWrapper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$textureHelper$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/textureHelper.functions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$AbstractEngine$2f$abstractEngine$2e$texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/AbstractEngine/abstractEngine.texture.js [app-client] (ecmascript)");
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinEngine"].prototype._createHardwareRenderTargetWrapper = function(isMulti, isCube, size) {
    const rtWrapper = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$WebGL$2f$webGLRenderTargetWrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGLRenderTargetWrapper"](isMulti, isCube, size, this, this._gl);
    this._renderTargetWrapperCache.push(rtWrapper);
    return rtWrapper;
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinEngine"].prototype.createRenderTargetTexture = function(size, options) {
    const rtWrapper = this._createHardwareRenderTargetWrapper(false, false, size);
    let generateDepthBuffer = true;
    let generateStencilBuffer = false;
    let noColorAttachment = false;
    let colorAttachment = undefined;
    let samples = 1;
    let label = undefined;
    if (options !== undefined && typeof options === "object") {
        generateDepthBuffer = options.generateDepthBuffer ?? true;
        generateStencilBuffer = !!options.generateStencilBuffer;
        noColorAttachment = !!options.noColorAttachment;
        colorAttachment = options.colorAttachment;
        samples = options.samples ?? 1;
        label = options.label;
    }
    const texture = colorAttachment || (noColorAttachment ? null : this._createInternalTexture(size, options, true, 5 /* InternalTextureSource.RenderTarget */ ));
    const width = size.width || size;
    const height = size.height || size;
    const currentFrameBuffer = this._currentFramebuffer;
    const gl = this._gl;
    // Create the framebuffer
    const framebuffer = gl.createFramebuffer();
    this._bindUnboundFramebuffer(framebuffer);
    rtWrapper._depthStencilBuffer = this._setupFramebufferDepthAttachments(generateStencilBuffer, generateDepthBuffer, width, height);
    // No need to rebind on every frame
    if (texture && !texture.is2DArray && !texture.is3D) {
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture._hardwareTexture.underlyingResource, 0);
    }
    this._bindUnboundFramebuffer(currentFrameBuffer);
    rtWrapper.label = label ?? "RenderTargetWrapper";
    rtWrapper._framebuffer = framebuffer;
    rtWrapper._generateDepthBuffer = generateDepthBuffer;
    rtWrapper._generateStencilBuffer = generateStencilBuffer;
    rtWrapper.setTextures(texture);
    if (!colorAttachment) {
        this.updateRenderTargetTextureSampleCount(rtWrapper, samples);
    } else {
        rtWrapper._samples = colorAttachment.samples;
        if (colorAttachment.samples > 1) {
            const msaaRenderBuffer = colorAttachment._hardwareTexture.getMSAARenderBuffer(0);
            rtWrapper._MSAAFramebuffer = gl.createFramebuffer();
            this._bindUnboundFramebuffer(rtWrapper._MSAAFramebuffer);
            gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.RENDERBUFFER, msaaRenderBuffer);
            this._bindUnboundFramebuffer(null);
        }
    }
    return rtWrapper;
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinEngine"].prototype._createDepthStencilTexture = function(size, options, rtWrapper) {
    const gl = this._gl;
    const layers = size.layers || 0;
    const depth = size.depth || 0;
    let target = gl.TEXTURE_2D;
    if (layers !== 0) {
        target = gl.TEXTURE_2D_ARRAY;
    } else if (depth !== 0) {
        target = gl.TEXTURE_3D;
    }
    const internalTexture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$internalTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InternalTexture"](this, 12 /* InternalTextureSource.DepthStencil */ );
    internalTexture.label = options.label;
    if (!this._caps.depthTextureExtension) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Error("Depth texture is not supported by your browser or hardware.");
        return internalTexture;
    }
    const internalOptions = {
        bilinearFiltering: false,
        comparisonFunction: 0,
        generateStencil: false,
        ...options
    };
    this._bindTextureDirectly(target, internalTexture, true);
    this._setupDepthStencilTexture(internalTexture, size, internalOptions.comparisonFunction === 0 ? false : internalOptions.bilinearFiltering, internalOptions.comparisonFunction, internalOptions.samples);
    if (internalOptions.depthTextureFormat !== undefined) {
        if (internalOptions.depthTextureFormat !== 15 && internalOptions.depthTextureFormat !== 16 && internalOptions.depthTextureFormat !== 17 && internalOptions.depthTextureFormat !== 13 && internalOptions.depthTextureFormat !== 14 && internalOptions.depthTextureFormat !== 18) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Error(`Depth texture ${internalOptions.depthTextureFormat} format is not supported.`);
            return internalTexture;
        }
        internalTexture.format = internalOptions.depthTextureFormat;
    } else {
        internalTexture.format = internalOptions.generateStencil ? 13 : 16;
    }
    const hasStencil = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$textureHelper$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HasStencilAspect"])(internalTexture.format);
    const type = this._getWebGLTextureTypeFromDepthTextureFormat(internalTexture.format);
    const format = hasStencil ? gl.DEPTH_STENCIL : gl.DEPTH_COMPONENT;
    const internalFormat = this._getInternalFormatFromDepthTextureFormat(internalTexture.format, true, hasStencil);
    if (internalTexture.is2DArray) {
        gl.texImage3D(target, 0, internalFormat, internalTexture.width, internalTexture.height, layers, 0, format, type, null);
    } else if (internalTexture.is3D) {
        gl.texImage3D(target, 0, internalFormat, internalTexture.width, internalTexture.height, depth, 0, format, type, null);
    } else {
        gl.texImage2D(target, 0, internalFormat, internalTexture.width, internalTexture.height, 0, format, type, null);
    }
    this._bindTextureDirectly(target, null);
    this._internalTexturesCache.push(internalTexture);
    if (rtWrapper._depthStencilBuffer) {
        gl.deleteRenderbuffer(rtWrapper._depthStencilBuffer);
        rtWrapper._depthStencilBuffer = null;
    }
    this._bindUnboundFramebuffer(rtWrapper._MSAAFramebuffer ?? rtWrapper._framebuffer);
    rtWrapper._generateStencilBuffer = hasStencil;
    rtWrapper._depthStencilTextureWithStencil = hasStencil;
    rtWrapper._depthStencilBuffer = this._setupFramebufferDepthAttachments(rtWrapper._generateStencilBuffer, rtWrapper._generateDepthBuffer, rtWrapper.width, rtWrapper.height, rtWrapper.samples, internalTexture.format);
    this._bindUnboundFramebuffer(null);
    return internalTexture;
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinEngine"].prototype.updateRenderTargetTextureSampleCount = function(rtWrapper, samples) {
    if (this.webGLVersion < 2 || !rtWrapper) {
        return 1;
    }
    if (rtWrapper.samples === samples) {
        return samples;
    }
    const gl = this._gl;
    samples = Math.min(samples, this.getCaps().maxMSAASamples);
    // Dispose previous render buffers
    if (rtWrapper._depthStencilBuffer) {
        gl.deleteRenderbuffer(rtWrapper._depthStencilBuffer);
        rtWrapper._depthStencilBuffer = null;
    }
    if (rtWrapper._MSAAFramebuffer) {
        gl.deleteFramebuffer(rtWrapper._MSAAFramebuffer);
        rtWrapper._MSAAFramebuffer = null;
    }
    const hardwareTexture = rtWrapper.texture?._hardwareTexture;
    hardwareTexture?.releaseMSAARenderBuffers();
    if (rtWrapper.texture && samples > 1 && typeof gl.renderbufferStorageMultisample === "function") {
        const framebuffer = gl.createFramebuffer();
        if (!framebuffer) {
            throw new Error("Unable to create multi sampled framebuffer");
        }
        rtWrapper._MSAAFramebuffer = framebuffer;
        this._bindUnboundFramebuffer(rtWrapper._MSAAFramebuffer);
        const colorRenderbuffer = this._createRenderBuffer(rtWrapper.texture.width, rtWrapper.texture.height, samples, -1 /* not used */ , this._getRGBABufferInternalSizedFormat(rtWrapper.texture.type, rtWrapper.texture.format, rtWrapper.texture._useSRGBBuffer), gl.COLOR_ATTACHMENT0, false);
        if (!colorRenderbuffer) {
            throw new Error("Unable to create multi sampled framebuffer");
        }
        hardwareTexture?.addMSAARenderBuffer(colorRenderbuffer);
    }
    this._bindUnboundFramebuffer(rtWrapper._MSAAFramebuffer ?? rtWrapper._framebuffer);
    if (rtWrapper.texture) {
        rtWrapper.texture.samples = samples;
    }
    rtWrapper._samples = samples;
    const depthFormat = rtWrapper._depthStencilTexture ? rtWrapper._depthStencilTexture.format : undefined;
    rtWrapper._depthStencilBuffer = this._setupFramebufferDepthAttachments(rtWrapper._generateStencilBuffer, rtWrapper._generateDepthBuffer, rtWrapper.width, rtWrapper.height, samples, depthFormat);
    this._bindUnboundFramebuffer(null);
    return samples;
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinEngine"].prototype._setupDepthStencilTexture = function(internalTexture, size, bilinearFiltering, comparisonFunction, samples = 1) {
    const width = size.width ?? size;
    const height = size.height ?? size;
    const layers = size.layers || 0;
    const depth = size.depth || 0;
    internalTexture.baseWidth = width;
    internalTexture.baseHeight = height;
    internalTexture.width = width;
    internalTexture.height = height;
    internalTexture.is2DArray = layers > 0;
    internalTexture.depth = layers || depth;
    internalTexture.isReady = true;
    internalTexture.samples = samples;
    internalTexture.generateMipMaps = false;
    internalTexture.samplingMode = bilinearFiltering ? 2 : 1;
    internalTexture.type = 0;
    internalTexture._comparisonFunction = comparisonFunction;
    const gl = this._gl;
    const target = this._getTextureTarget(internalTexture);
    const samplingParameters = this._getSamplingParameters(internalTexture.samplingMode, false);
    gl.texParameteri(target, gl.TEXTURE_MAG_FILTER, samplingParameters.mag);
    gl.texParameteri(target, gl.TEXTURE_MIN_FILTER, samplingParameters.min);
    gl.texParameteri(target, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(target, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    // TEXTURE_COMPARE_FUNC/MODE are only availble in WebGL2.
    if (this.webGLVersion > 1) {
        if (comparisonFunction === 0) {
            gl.texParameteri(target, gl.TEXTURE_COMPARE_FUNC, 515);
            gl.texParameteri(target, gl.TEXTURE_COMPARE_MODE, gl.NONE);
        } else {
            gl.texParameteri(target, gl.TEXTURE_COMPARE_FUNC, comparisonFunction);
            gl.texParameteri(target, gl.TEXTURE_COMPARE_MODE, gl.COMPARE_REF_TO_TEXTURE);
        }
    }
}; //# sourceMappingURL=engine.renderTarget.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Extensions/engine.renderTargetTexture.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/thinEngine.js [app-client] (ecmascript)");
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinEngine"].prototype.setDepthStencilTexture = function(channel, uniform, texture, name) {
    if (channel === undefined) {
        return;
    }
    if (uniform) {
        this._boundUniforms[channel] = uniform;
    }
    if (!texture || !texture.depthStencilTexture) {
        this._setTexture(channel, null, undefined, undefined, name);
    } else {
        this._setTexture(channel, texture, false, true, name);
    }
}; //# sourceMappingURL=engine.renderTargetTexture.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Extensions/engine.renderTargetCube.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$internalTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/internalTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/thinEngine.js [app-client] (ecmascript)");
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinEngine"].prototype.createRenderTargetCubeTexture = function(size, options) {
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
    const gl = this._gl;
    const texture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$internalTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InternalTexture"](this, 5 /* InternalTextureSource.RenderTarget */ );
    this._bindTextureDirectly(gl.TEXTURE_CUBE_MAP, texture, true);
    const filters = this._getSamplingParameters(fullOptions.samplingMode, fullOptions.generateMipMaps);
    if (fullOptions.type === 1 && !this._caps.textureFloat) {
        fullOptions.type = 0;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Warn("Float textures are not supported. Cube render target forced to TEXTURETYPE_UNESIGNED_BYTE type");
    }
    gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MAG_FILTER, filters.mag);
    gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MIN_FILTER, filters.min);
    gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    for(let face = 0; face < 6; face++){
        gl.texImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X + face, 0, this._getRGBABufferInternalSizedFormat(fullOptions.type, fullOptions.format), size, size, 0, this._getInternalFormat(fullOptions.format), this._getWebGLTextureType(fullOptions.type), null);
    }
    // Create the framebuffer
    const framebuffer = gl.createFramebuffer();
    this._bindUnboundFramebuffer(framebuffer);
    rtWrapper._depthStencilBuffer = this._setupFramebufferDepthAttachments(fullOptions.generateStencilBuffer, fullOptions.generateDepthBuffer, size, size);
    // MipMaps
    if (fullOptions.generateMipMaps) {
        gl.generateMipmap(gl.TEXTURE_CUBE_MAP);
    }
    // Unbind
    this._bindTextureDirectly(gl.TEXTURE_CUBE_MAP, null);
    this._bindUnboundFramebuffer(null);
    rtWrapper._framebuffer = framebuffer;
    rtWrapper._generateDepthBuffer = fullOptions.generateDepthBuffer;
    rtWrapper._generateStencilBuffer = fullOptions.generateStencilBuffer;
    texture.width = size;
    texture.height = size;
    texture.isReady = true;
    texture.isCube = true;
    texture.samples = 1;
    texture.generateMipMaps = fullOptions.generateMipMaps;
    texture.samplingMode = fullOptions.samplingMode;
    texture.type = fullOptions.type;
    texture.format = fullOptions.format;
    this._internalTexturesCache.push(texture);
    rtWrapper.setTextures(texture);
    return rtWrapper;
}; //# sourceMappingURL=engine.renderTargetCube.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Extensions/engine.prefilteredCubeTexture.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/thinEngine.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$internalTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/internalTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$sphericalPolynomial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/sphericalPolynomial.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$baseTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/baseTexture.js [app-client] (ecmascript)");
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinEngine"].prototype.createPrefilteredCubeTexture = function(rootUrl, scene, lodScale, lodOffset, onLoad = null, onError = null, format, forcedExtension = null, createPolynomials = true) {
    const callbackAsync = async (loadData)=>{
        if (!loadData) {
            if (onLoad) {
                onLoad(null);
            }
            return;
        }
        const texture = loadData.texture;
        if (!createPolynomials) {
            texture._sphericalPolynomial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$sphericalPolynomial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SphericalPolynomial"]();
        } else if (loadData.info.sphericalPolynomial) {
            texture._sphericalPolynomial = loadData.info.sphericalPolynomial;
        }
        texture._source = 9 /* InternalTextureSource.CubePrefiltered */ ;
        if (this.getCaps().textureLOD) {
            // Do not add extra process if texture lod is supported.
            if (onLoad) {
                onLoad(texture);
            }
            return;
        }
        const mipSlices = 3;
        const gl = this._gl;
        const width = loadData.width;
        if (!width) {
            return;
        }
        const { DDSTools } = await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/dds.js [app-client] (ecmascript, async loader)");
        const textures = [];
        for(let i = 0; i < mipSlices; i++){
            //compute LOD from even spacing in smoothness (matching shader calculation)
            const smoothness = i / (mipSlices - 1);
            const roughness = 1 - smoothness;
            const minLODIndex = lodOffset; // roughness = 0
            const maxLODIndex = Math.log2(width) * lodScale + lodOffset; // roughness = 1
            const lodIndex = minLODIndex + (maxLODIndex - minLODIndex) * roughness;
            const mipmapIndex = Math.round(Math.min(Math.max(lodIndex, 0), maxLODIndex));
            const glTextureFromLod = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$internalTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InternalTexture"](this, 2 /* InternalTextureSource.Temp */ );
            glTextureFromLod.type = texture.type;
            glTextureFromLod.format = texture.format;
            glTextureFromLod.width = Math.pow(2, Math.max(Math.log2(width) - mipmapIndex, 0));
            glTextureFromLod.height = glTextureFromLod.width;
            glTextureFromLod.isCube = true;
            glTextureFromLod._cachedWrapU = 0;
            glTextureFromLod._cachedWrapV = 0;
            this._bindTextureDirectly(gl.TEXTURE_CUBE_MAP, glTextureFromLod, true);
            glTextureFromLod.samplingMode = 2;
            gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
            gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
            gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
            if (loadData.isDDS) {
                const info = loadData.info;
                const data = loadData.data;
                this._unpackFlipY(info.isCompressed);
                DDSTools.UploadDDSLevels(this, glTextureFromLod, data, info, true, 6, mipmapIndex);
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Warn("DDS is the only prefiltered cube map supported so far.");
            }
            this._bindTextureDirectly(gl.TEXTURE_CUBE_MAP, null);
            // Wrap in a base texture for easy binding.
            const lodTexture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$baseTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseTexture"](scene);
            lodTexture._isCube = true;
            lodTexture._texture = glTextureFromLod;
            glTextureFromLod.isReady = true;
            textures.push(lodTexture);
        }
        texture._lodTextureHigh = textures[2];
        texture._lodTextureMid = textures[1];
        texture._lodTextureLow = textures[0];
        if (onLoad) {
            onLoad(texture);
        }
    };
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    return this.createCubeTexture(rootUrl, scene, null, false, callbackAsync, onError, format, forcedExtension, createPolynomials, lodScale, lodOffset);
}; //# sourceMappingURL=engine.prefilteredCubeTexture.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Extensions/engine.uniformBuffer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/thinEngine.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$WebGL$2f$webGLDataBuffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/WebGL/webGLDataBuffer.js [app-client] (ecmascript)");
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinEngine"].prototype.createUniformBuffer = function(elements, _label) {
    const ubo = this._gl.createBuffer();
    if (!ubo) {
        throw new Error("Unable to create uniform buffer");
    }
    const result = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$WebGL$2f$webGLDataBuffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGLDataBuffer"](ubo);
    this.bindUniformBuffer(result);
    if (elements instanceof Float32Array) {
        this._gl.bufferData(this._gl.UNIFORM_BUFFER, elements, this._gl.STATIC_DRAW);
    } else {
        this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(elements), this._gl.STATIC_DRAW);
    }
    this.bindUniformBuffer(null);
    result.references = 1;
    return result;
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinEngine"].prototype.createDynamicUniformBuffer = function(elements, _label) {
    const ubo = this._gl.createBuffer();
    if (!ubo) {
        throw new Error("Unable to create dynamic uniform buffer");
    }
    const result = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$WebGL$2f$webGLDataBuffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGLDataBuffer"](ubo);
    this.bindUniformBuffer(result);
    if (elements instanceof Float32Array) {
        this._gl.bufferData(this._gl.UNIFORM_BUFFER, elements, this._gl.DYNAMIC_DRAW);
    } else {
        this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(elements), this._gl.DYNAMIC_DRAW);
    }
    this.bindUniformBuffer(null);
    result.references = 1;
    return result;
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinEngine"].prototype.updateUniformBuffer = function(uniformBuffer, elements, offset, count) {
    this.bindUniformBuffer(uniformBuffer);
    if (offset === undefined) {
        offset = 0;
    }
    if (count === undefined) {
        if (elements instanceof Float32Array) {
            this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, offset, elements);
        } else {
            this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, offset, new Float32Array(elements));
        }
    } else {
        if (elements instanceof Float32Array) {
            this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, elements.subarray(offset, offset + count));
        } else {
            this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, new Float32Array(elements).subarray(offset, offset + count));
        }
    }
    this.bindUniformBuffer(null);
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinEngine"].prototype.bindUniformBuffer = function(buffer) {
    this._gl.bindBuffer(this._gl.UNIFORM_BUFFER, buffer ? buffer.underlyingResource : null);
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinEngine"].prototype.bindUniformBufferBase = function(buffer, location, name) {
    this._gl.bindBufferBase(this._gl.UNIFORM_BUFFER, location, buffer ? buffer.underlyingResource : null);
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinEngine"].prototype.bindUniformBlock = function(pipelineContext, blockName, index) {
    const program = pipelineContext.program;
    const uniformLocation = this._gl.getUniformBlockIndex(program, blockName);
    if (uniformLocation !== 0xffffffff) {
        this._gl.uniformBlockBinding(program, uniformLocation, index);
    }
}; //# sourceMappingURL=engine.uniformBuffer.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Extensions/engine.multiview.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/camera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/engine.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$scene$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/scene.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$internalTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/internalTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$uniformBuffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/uniformBuffer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$MultiviewRenderTarget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/MultiviewRenderTarget.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$frustum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.frustum.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Engine"].prototype.createMultiviewRenderTargetTexture = function(width, height, colorTexture, depthStencilTexture) {
    const gl = this._gl;
    if (!this.getCaps().multiview) {
        // eslint-disable-next-line no-throw-literal
        throw "Multiview is not supported";
    }
    const rtWrapper = this._createHardwareRenderTargetWrapper(false, false, {
        width,
        height
    });
    rtWrapper._framebuffer = gl.createFramebuffer();
    const internalTexture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$internalTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InternalTexture"](this, 0 /* InternalTextureSource.Unknown */ , true);
    internalTexture.width = width;
    internalTexture.height = height;
    internalTexture.isMultiview = true;
    if (!colorTexture) {
        colorTexture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D_ARRAY, colorTexture);
        gl.texStorage3D(gl.TEXTURE_2D_ARRAY, 1, gl.RGBA8, width, height, 2);
    }
    rtWrapper._colorTextureArray = colorTexture;
    if (!depthStencilTexture) {
        depthStencilTexture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D_ARRAY, depthStencilTexture);
        gl.texStorage3D(gl.TEXTURE_2D_ARRAY, 1, gl.DEPTH24_STENCIL8, width, height, 2);
    }
    rtWrapper._depthStencilTextureArray = depthStencilTexture;
    internalTexture.isReady = true;
    rtWrapper.setTextures(internalTexture);
    rtWrapper._depthStencilTexture = internalTexture;
    return rtWrapper;
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Engine"].prototype.bindMultiviewFramebuffer = function(_multiviewTexture) {
    const multiviewTexture = _multiviewTexture;
    const gl = this._gl;
    const ext = this.getCaps().oculusMultiview || this.getCaps().multiview;
    this.bindFramebuffer(multiviewTexture, undefined, undefined, undefined, true);
    gl.bindFramebuffer(gl.DRAW_FRAMEBUFFER, multiviewTexture._framebuffer);
    if (multiviewTexture._colorTextureArray && multiviewTexture._depthStencilTextureArray) {
        if (this.getCaps().oculusMultiview) {
            ext.framebufferTextureMultisampleMultiviewOVR(gl.DRAW_FRAMEBUFFER, gl.COLOR_ATTACHMENT0, multiviewTexture._colorTextureArray, 0, multiviewTexture.samples, 0, 2);
            ext.framebufferTextureMultisampleMultiviewOVR(gl.DRAW_FRAMEBUFFER, gl.DEPTH_STENCIL_ATTACHMENT, multiviewTexture._depthStencilTextureArray, 0, multiviewTexture.samples, 0, 2);
        } else {
            ext.framebufferTextureMultiviewOVR(gl.DRAW_FRAMEBUFFER, gl.COLOR_ATTACHMENT0, multiviewTexture._colorTextureArray, 0, 0, 2);
            ext.framebufferTextureMultiviewOVR(gl.DRAW_FRAMEBUFFER, gl.DEPTH_STENCIL_ATTACHMENT, multiviewTexture._depthStencilTextureArray, 0, 0, 2);
        }
    } else {
        // eslint-disable-next-line no-throw-literal
        throw "Invalid multiview frame buffer";
    }
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Engine"].prototype.bindSpaceWarpFramebuffer = function(_spaceWarpTexture) {
    const spaceWarpTexture = _spaceWarpTexture;
    const gl = this._gl;
    const ext = this.getCaps().oculusMultiview || this.getCaps().multiview;
    this.bindFramebuffer(spaceWarpTexture, undefined, undefined, undefined, true);
    gl.bindFramebuffer(gl.DRAW_FRAMEBUFFER, spaceWarpTexture._framebuffer);
    if (spaceWarpTexture._colorTextureArray && spaceWarpTexture._depthStencilTextureArray) {
        ext.framebufferTextureMultiviewOVR(gl.DRAW_FRAMEBUFFER, gl.COLOR_ATTACHMENT0, spaceWarpTexture._colorTextureArray, 0, 0, 2);
        ext.framebufferTextureMultiviewOVR(gl.DRAW_FRAMEBUFFER, gl.DEPTH_ATTACHMENT, spaceWarpTexture._depthStencilTextureArray, 0, 0, 2);
    } else {
        throw new Error("Invalid Space Warp framebuffer");
    }
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Camera"].prototype._useMultiviewToSingleView = false;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Camera"].prototype._multiviewTexture = null;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Camera"].prototype._resizeOrCreateMultiviewTexture = function(width, height) {
    if (!this._multiviewTexture) {
        this._multiviewTexture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$MultiviewRenderTarget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MultiviewRenderTarget"](this.getScene(), {
            width: width,
            height: height
        });
    } else if (this._multiviewTexture.getRenderWidth() != width || this._multiviewTexture.getRenderHeight() != height) {
        this._multiviewTexture.dispose();
        this._multiviewTexture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$MultiviewRenderTarget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MultiviewRenderTarget"](this.getScene(), {
            width: width,
            height: height
        });
    }
};
function CreateMultiviewUbo(engine, name, trackUBOsInFrame) {
    const ubo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$uniformBuffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UniformBuffer"](engine, undefined, true, name, undefined, trackUBOsInFrame);
    ubo.addUniform("viewProjection", 16);
    ubo.addUniform("viewProjectionR", 16);
    ubo.addUniform("view", 16);
    ubo.addUniform("projection", 16);
    ubo.addUniform("vEyePosition", 4);
    return ubo;
}
const CurrentCreateSceneUniformBuffer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$scene$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"].prototype.createSceneUniformBuffer;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$scene$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"].prototype._transformMatrixR = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].Zero();
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$scene$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"].prototype._multiviewSceneUbo = null;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$scene$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"].prototype._createMultiviewUbo = function() {
    this._multiviewSceneUbo = CreateMultiviewUbo(this.getEngine(), "scene_multiview");
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$scene$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"].prototype.createSceneUniformBuffer = function(name, trackUBOsInFrame) {
    if (this._multiviewSceneUbo) {
        return CreateMultiviewUbo(this.getEngine(), name, trackUBOsInFrame);
    }
    return CurrentCreateSceneUniformBuffer.bind(this)(name, trackUBOsInFrame);
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$scene$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"].prototype._updateMultiviewUbo = function(viewR, projectionR) {
    if (viewR && projectionR) {
        viewR.multiplyToRef(projectionR, this._transformMatrixR);
    }
    if (viewR && projectionR) {
        viewR.multiplyToRef(projectionR, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[0]);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$frustum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Frustum"].GetRightPlaneToRef(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[0], this._frustumPlanes[3]); // Replace right plane by second camera right plane
    }
    if (this._multiviewSceneUbo) {
        this._multiviewSceneUbo.updateMatrix("viewProjection", this.getTransformMatrix());
        this._multiviewSceneUbo.updateMatrix("viewProjectionR", this._transformMatrixR);
        this._multiviewSceneUbo.updateMatrix("view", this._viewMatrix);
        this._multiviewSceneUbo.updateMatrix("projection", this._projectionMatrix);
    }
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$scene$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"].prototype._renderMultiviewToSingleView = function(camera) {
    // Multiview is only able to be displayed directly for API's such as webXR
    // This displays a multiview image by rendering to the multiview image and then
    // copying the result into the sub cameras instead of rendering them and proceeding as normal from there
    // Render to a multiview texture
    camera._resizeOrCreateMultiviewTexture(camera._rigPostProcess && camera._rigPostProcess && camera._rigPostProcess.width > 0 ? camera._rigPostProcess.width : this.getEngine().getRenderWidth(true), camera._rigPostProcess && camera._rigPostProcess && camera._rigPostProcess.height > 0 ? camera._rigPostProcess.height : this.getEngine().getRenderHeight(true));
    if (!this._multiviewSceneUbo) {
        this._createMultiviewUbo();
    }
    camera.outputRenderTarget = camera._multiviewTexture;
    this._renderForCamera(camera);
    camera.outputRenderTarget = null;
    // Consume the multiview texture through a shader for each eye
    for(let index = 0; index < camera._rigCameras.length; index++){
        const engine = this.getEngine();
        this._activeCamera = camera._rigCameras[index];
        engine.setViewport(this._activeCamera.viewport);
        if (this.postProcessManager) {
            this.postProcessManager._prepareFrame();
            this.postProcessManager._finalizeFrame(this._activeCamera.isIntermediate);
        }
    }
}; //# sourceMappingURL=engine.multiview.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Extensions/engine.dynamicTexture.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/tools.functions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/thinEngine.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$internalTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/internalTexture.js [app-client] (ecmascript)");
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinEngine"].prototype.createDynamicTexture = function(width, height, generateMipMaps, samplingMode) {
    const texture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$internalTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InternalTexture"](this, 4 /* InternalTextureSource.Dynamic */ );
    texture.baseWidth = width;
    texture.baseHeight = height;
    if (generateMipMaps) {
        width = this.needPOTTextures ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GetExponentOfTwo"])(width, this._caps.maxTextureSize) : width;
        height = this.needPOTTextures ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GetExponentOfTwo"])(height, this._caps.maxTextureSize) : height;
    }
    //  this.resetTextureCache();
    texture.width = width;
    texture.height = height;
    texture.isReady = false;
    texture.generateMipMaps = generateMipMaps;
    texture.samplingMode = samplingMode;
    this.updateTextureSamplingMode(samplingMode, texture);
    this._internalTexturesCache.push(texture);
    return texture;
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinEngine"].prototype.updateDynamicTexture = function(texture, source, invertY, premulAlpha = false, format, forceBindTexture = false, // eslint-disable-next-line @typescript-eslint/no-unused-vars
allowGPUOptimization = false) {
    if (!texture) {
        return;
    }
    const gl = this._gl;
    const target = gl.TEXTURE_2D;
    const wasPreviouslyBound = this._bindTextureDirectly(target, texture, true, forceBindTexture);
    this._unpackFlipY(invertY === undefined ? texture.invertY : invertY);
    if (premulAlpha) {
        gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1);
    }
    const textureType = this._getWebGLTextureType(texture.type);
    const glformat = this._getInternalFormat(format ? format : texture.format);
    const internalFormat = this._getRGBABufferInternalSizedFormat(texture.type, glformat);
    gl.texImage2D(target, 0, internalFormat, glformat, textureType, source);
    if (texture.generateMipMaps) {
        gl.generateMipmap(target);
    }
    if (!wasPreviouslyBound) {
        this._bindTextureDirectly(target, null);
    }
    if (premulAlpha) {
        gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0);
    }
    if (format) {
        texture.format = format;
    }
    texture._dynamicTextureSource = source;
    texture._premulAlpha = premulAlpha;
    texture.invertY = invertY || false;
    texture.isReady = true;
}; //# sourceMappingURL=engine.dynamicTexture.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Extensions/engine.debugging.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/no-unused-vars */ __turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/abstractEngine.js [app-client] (ecmascript)");
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AbstractEngine"].prototype._debugPushGroup = function(groupName, targetObject) {};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AbstractEngine"].prototype._debugPopGroup = function(targetObject) {};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AbstractEngine"].prototype._debugInsertMarker = function(text, targetObject) {};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AbstractEngine"].prototype._debugFlushPendingCommands = function() {}; //# sourceMappingURL=engine.debugging.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Extensions/engine.query.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/thinEngine.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$abstractMesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/abstractMesh.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Instrumentation$2f$timeToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Instrumentation/timeToken.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$AbstractEngine$2f$abstractEngine$2e$timeQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/AbstractEngine/abstractEngine.timeQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$AbstractEngine$2f$abstractEngine$2e$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/AbstractEngine/abstractEngine.query.js [app-client] (ecmascript)");
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinEngine"].prototype.createQuery = function() {
    const query = this._gl.createQuery();
    if (!query) {
        throw new Error("Unable to create Occlusion Query");
    }
    return query;
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinEngine"].prototype.deleteQuery = function(query) {
    this._gl.deleteQuery(query);
    return this;
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinEngine"].prototype.isQueryResultAvailable = function(query) {
    return this._gl.getQueryParameter(query, this._gl.QUERY_RESULT_AVAILABLE);
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinEngine"].prototype.getQueryResult = function(query) {
    return this._gl.getQueryParameter(query, this._gl.QUERY_RESULT);
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinEngine"].prototype.beginOcclusionQuery = function(algorithmType, query) {
    const glAlgorithm = this._getGlAlgorithmType(algorithmType);
    this._gl.beginQuery(glAlgorithm, query);
    return true;
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinEngine"].prototype.endOcclusionQuery = function(algorithmType) {
    const glAlgorithm = this._getGlAlgorithmType(algorithmType);
    this._gl.endQuery(glAlgorithm);
    return this;
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinEngine"].prototype._createTimeQuery = function() {
    const timerQuery = this.getCaps().timerQuery;
    if (timerQuery.createQueryEXT) {
        return timerQuery.createQueryEXT();
    }
    return this.createQuery();
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinEngine"].prototype._deleteTimeQuery = function(query) {
    const timerQuery = this.getCaps().timerQuery;
    if (timerQuery.deleteQueryEXT) {
        timerQuery.deleteQueryEXT(query);
        return;
    }
    this.deleteQuery(query);
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinEngine"].prototype._getTimeQueryResult = function(query) {
    const timerQuery = this.getCaps().timerQuery;
    if (timerQuery.getQueryObjectEXT) {
        return timerQuery.getQueryObjectEXT(query, timerQuery.QUERY_RESULT_EXT);
    }
    return this.getQueryResult(query);
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinEngine"].prototype._getTimeQueryAvailability = function(query) {
    const timerQuery = this.getCaps().timerQuery;
    if (timerQuery.getQueryObjectEXT) {
        return timerQuery.getQueryObjectEXT(query, timerQuery.QUERY_RESULT_AVAILABLE_EXT);
    }
    return this.isQueryResultAvailable(query);
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinEngine"].prototype.startTimeQuery = function() {
    const caps = this.getCaps();
    const timerQuery = caps.timerQuery;
    if (!timerQuery) {
        return null;
    }
    const token = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Instrumentation$2f$timeToken$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_TimeToken"]();
    this._gl.getParameter(timerQuery.GPU_DISJOINT_EXT);
    if (caps.canUseTimestampForTimerQuery) {
        token._startTimeQuery = this._createTimeQuery();
        if (token._startTimeQuery) {
            timerQuery.queryCounterEXT(token._startTimeQuery, timerQuery.TIMESTAMP_EXT);
        }
    } else {
        if (this._currentNonTimestampToken) {
            return this._currentNonTimestampToken;
        }
        token._timeElapsedQuery = this._createTimeQuery();
        if (token._timeElapsedQuery) {
            if (timerQuery.beginQueryEXT) {
                timerQuery.beginQueryEXT(timerQuery.TIME_ELAPSED_EXT, token._timeElapsedQuery);
            } else {
                this._gl.beginQuery(timerQuery.TIME_ELAPSED_EXT, token._timeElapsedQuery);
            }
        }
        this._currentNonTimestampToken = token;
    }
    return token;
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinEngine"].prototype.endTimeQuery = function(token) {
    const caps = this.getCaps();
    const timerQuery = caps.timerQuery;
    if (!timerQuery || !token) {
        return -1;
    }
    if (caps.canUseTimestampForTimerQuery) {
        if (!token._startTimeQuery) {
            return -1;
        }
        if (!token._endTimeQuery) {
            token._endTimeQuery = this._createTimeQuery();
            if (token._endTimeQuery) {
                timerQuery.queryCounterEXT(token._endTimeQuery, timerQuery.TIMESTAMP_EXT);
            }
        }
    } else if (!token._timeElapsedQueryEnded) {
        if (!token._timeElapsedQuery) {
            return -1;
        }
        if (timerQuery.endQueryEXT) {
            timerQuery.endQueryEXT(timerQuery.TIME_ELAPSED_EXT);
        } else {
            this._gl.endQuery(timerQuery.TIME_ELAPSED_EXT);
            this._currentNonTimestampToken = null;
        }
        token._timeElapsedQueryEnded = true;
    }
    const disjoint = this._gl.getParameter(timerQuery.GPU_DISJOINT_EXT);
    let available = false;
    if (token._endTimeQuery) {
        available = this._getTimeQueryAvailability(token._endTimeQuery);
    } else if (token._timeElapsedQuery) {
        available = this._getTimeQueryAvailability(token._timeElapsedQuery);
    }
    if (available && !disjoint) {
        let result = 0;
        if (caps.canUseTimestampForTimerQuery) {
            if (!token._startTimeQuery || !token._endTimeQuery) {
                return -1;
            }
            const timeStart = this._getTimeQueryResult(token._startTimeQuery);
            const timeEnd = this._getTimeQueryResult(token._endTimeQuery);
            result = timeEnd - timeStart;
            this._deleteTimeQuery(token._startTimeQuery);
            this._deleteTimeQuery(token._endTimeQuery);
            token._startTimeQuery = null;
            token._endTimeQuery = null;
        } else {
            if (!token._timeElapsedQuery) {
                return -1;
            }
            result = this._getTimeQueryResult(token._timeElapsedQuery);
            this._deleteTimeQuery(token._timeElapsedQuery);
            token._timeElapsedQuery = null;
            token._timeElapsedQueryEnded = false;
        }
        return result;
    }
    return -1;
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinEngine"].prototype.captureGPUFrameTime = function(value) {
    if (value === this._captureGPUFrameTime) {
        return;
    }
    this._captureGPUFrameTime = value;
    if (value) {
        const gpuFrameTime = this.getGPUFrameTimeCounter();
        this._onBeginFrameObserver = this.onBeginFrameObservable.add(()=>{
            if (!this._gpuFrameTimeToken) {
                this._gpuFrameTimeToken = this.startTimeQuery();
            }
        });
        this._onEndFrameObserver = this.onEndFrameObservable.add(()=>{
            if (!this._gpuFrameTimeToken) {
                return;
            }
            const time = this.endTimeQuery(this._gpuFrameTimeToken);
            if (time > -1) {
                this._gpuFrameTimeToken = null;
                gpuFrameTime.fetchNewFrame();
                gpuFrameTime.addCount(time, true);
            }
        });
    } else {
        this.onBeginFrameObservable.remove(this._onBeginFrameObserver);
        this._onBeginFrameObserver = null;
        this.onEndFrameObservable.remove(this._onEndFrameObserver);
        this._onEndFrameObserver = null;
    }
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinEngine"].prototype._getGlAlgorithmType = function(algorithmType) {
    return algorithmType === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$abstractMesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AbstractMesh"].OCCLUSION_ALGORITHM_TYPE_CONSERVATIVE ? this._gl.ANY_SAMPLES_PASSED_CONSERVATIVE : this._gl.ANY_SAMPLES_PASSED;
}; //# sourceMappingURL=engine.query.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Extensions/engine.transformFeedback.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_forceTransformFeedbackToBundle",
    ()=>_forceTransformFeedbackToBundle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/engine.js [app-client] (ecmascript)");
;
var _forceTransformFeedbackToBundle = true;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Engine"].prototype.createTransformFeedback = function() {
    const transformFeedback = this._gl.createTransformFeedback();
    if (!transformFeedback) {
        throw new Error("Unable to create Transform Feedback");
    }
    return transformFeedback;
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Engine"].prototype.deleteTransformFeedback = function(value) {
    this._gl.deleteTransformFeedback(value);
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Engine"].prototype.bindTransformFeedback = function(value) {
    this._gl.bindTransformFeedback(this._gl.TRANSFORM_FEEDBACK, value);
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Engine"].prototype.beginTransformFeedback = function(usePoints = true) {
    this._gl.beginTransformFeedback(usePoints ? this._gl.POINTS : this._gl.TRIANGLES);
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Engine"].prototype.endTransformFeedback = function() {
    this._gl.endTransformFeedback();
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Engine"].prototype.setTranformFeedbackVaryings = function(program, value) {
    this._gl.transformFeedbackVaryings(program, value, this._gl.INTERLEAVED_ATTRIBS);
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Engine"].prototype.bindTransformFeedbackBuffer = function(value) {
    this._gl.bindBufferBase(this._gl.TRANSFORM_FEEDBACK_BUFFER, 0, value ? value.underlyingResource : null);
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Engine"].prototype.readTransformFeedbackBuffer = function(target) {
    this._gl.getBufferSubData(this._gl.TRANSFORM_FEEDBACK_BUFFER, 0, target);
}; //# sourceMappingURL=engine.transformFeedback.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Extensions/engine.videoTexture.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/thinEngine.js [app-client] (ecmascript)");
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinEngine"].prototype.updateVideoTexture = function(texture, video, invertY) {
    if (!texture || texture._isDisabled) {
        return;
    }
    const glformat = this._getInternalFormat(texture.format);
    const internalFormat = this._getRGBABufferInternalSizedFormat(0, texture.format);
    const wasPreviouslyBound = this._bindTextureDirectly(this._gl.TEXTURE_2D, texture, true);
    this._unpackFlipY(!invertY); // Video are upside down by default
    try {
        // Testing video texture support
        if (this._videoTextureSupported === undefined) {
            // clear old errors just in case.
            this._gl.getError();
            this._gl.texImage2D(this._gl.TEXTURE_2D, 0, internalFormat, glformat, this._gl.UNSIGNED_BYTE, video);
            if (this._gl.getError() !== 0) {
                this._videoTextureSupported = false;
            } else {
                this._videoTextureSupported = true;
            }
        }
        // Copy video through the current working canvas if video texture is not supported
        if (!this._videoTextureSupported) {
            if (!texture._workingCanvas) {
                texture._workingCanvas = this.createCanvas(texture.width, texture.height);
                const context = texture._workingCanvas.getContext("2d");
                if (!context) {
                    throw new Error("Unable to get 2d context");
                }
                texture._workingContext = context;
                texture._workingCanvas.width = texture.width;
                texture._workingCanvas.height = texture.height;
            }
            texture._workingContext.clearRect(0, 0, texture.width, texture.height);
            texture._workingContext.drawImage(video, 0, 0, video.videoWidth, video.videoHeight, 0, 0, texture.width, texture.height);
            this._gl.texImage2D(this._gl.TEXTURE_2D, 0, internalFormat, glformat, this._gl.UNSIGNED_BYTE, texture._workingCanvas);
        } else {
            this._gl.texImage2D(this._gl.TEXTURE_2D, 0, internalFormat, glformat, this._gl.UNSIGNED_BYTE, video);
        }
        if (texture.generateMipMaps) {
            this._gl.generateMipmap(this._gl.TEXTURE_2D);
        }
        if (!wasPreviouslyBound) {
            this._bindTextureDirectly(this._gl.TEXTURE_2D, null);
        }
        //    this.resetTextureCache();
        texture.isReady = true;
    } catch (ex) {
        // Something unexpected
        // Let's disable the texture
        texture._isDisabled = true;
    }
}; //# sourceMappingURL=engine.videoTexture.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Extensions/engine.multiRender.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$internalTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/internalTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/thinEngine.js [app-client] (ecmascript)");
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinEngine"].prototype.restoreSingleAttachment = function() {
    const gl = this._gl;
    this.bindAttachments([
        gl.BACK
    ]);
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinEngine"].prototype.restoreSingleAttachmentForRenderTarget = function() {
    const gl = this._gl;
    this.bindAttachments([
        gl.COLOR_ATTACHMENT0
    ]);
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinEngine"].prototype.buildTextureLayout = function(textureStatus, backBufferLayout = false) {
    const gl = this._gl;
    const result = [];
    if (backBufferLayout) {
        result.push(gl.BACK);
    } else {
        for(let i = 0; i < textureStatus.length; i++){
            if (textureStatus[i]) {
                result.push(gl["COLOR_ATTACHMENT" + i]);
            } else {
                result.push(gl.NONE);
            }
        }
    }
    return result;
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinEngine"].prototype.bindAttachments = function(attachments) {
    const gl = this._gl;
    gl.drawBuffers(attachments);
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinEngine"].prototype.unBindMultiColorAttachmentFramebuffer = function(rtWrapper, disableGenerateMipMaps = false, onBeforeUnbind) {
    this._currentRenderTarget = null;
    if (!rtWrapper.disableAutomaticMSAAResolve) {
        this.resolveMultiFramebuffer(rtWrapper);
    }
    if (!disableGenerateMipMaps) {
        this.generateMipMapsMultiFramebuffer(rtWrapper);
    }
    if (onBeforeUnbind) {
        if (rtWrapper._MSAAFramebuffer) {
            // Bind the correct framebuffer
            this._bindUnboundFramebuffer(rtWrapper._framebuffer);
        }
        onBeforeUnbind();
    }
    this._bindUnboundFramebuffer(null);
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinEngine"].prototype.createMultipleRenderTarget = function(size, options, initializeBuffers = true) {
    let generateMipMaps = false;
    let generateDepthBuffer = true;
    let generateStencilBuffer = false;
    let generateDepthTexture = false;
    let depthTextureFormat = undefined;
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
    let dontCreateTextures = false;
    const rtWrapper = this._createHardwareRenderTargetWrapper(true, false, size);
    if (options !== undefined) {
        generateMipMaps = options.generateMipMaps === undefined ? false : options.generateMipMaps;
        generateDepthBuffer = options.generateDepthBuffer === undefined ? true : options.generateDepthBuffer;
        generateStencilBuffer = options.generateStencilBuffer === undefined ? false : options.generateStencilBuffer;
        generateDepthTexture = options.generateDepthTexture === undefined ? false : options.generateDepthTexture;
        textureCount = options.textureCount ?? 1;
        samples = options.samples ?? samples;
        types = options.types || types;
        samplingModes = options.samplingModes || samplingModes;
        useSRGBBuffers = options.useSRGBBuffers || useSRGBBuffers;
        formats = options.formats || formats;
        targets = options.targetTypes || targets;
        faceIndex = options.faceIndex || faceIndex;
        layerIndex = options.layerIndex || layerIndex;
        layers = options.layerCounts || layers;
        labels = options.labels || labels;
        dontCreateTextures = options.dontCreateTextures ?? false;
        if (this.webGLVersion > 1 && (options.depthTextureFormat === 13 || options.depthTextureFormat === 17 || options.depthTextureFormat === 16 || options.depthTextureFormat === 14 || options.depthTextureFormat === 18)) {
            depthTextureFormat = options.depthTextureFormat;
        }
    }
    if (depthTextureFormat === undefined) {
        depthTextureFormat = generateStencilBuffer ? 13 : 14;
    }
    const gl = this._gl;
    // Create the framebuffer
    const currentFramebuffer = this._currentFramebuffer;
    const framebuffer = gl.createFramebuffer();
    this._bindUnboundFramebuffer(framebuffer);
    const width = size.width ?? size;
    const height = size.height ?? size;
    const textures = [];
    const attachments = [];
    const useStencilTexture = this.webGLVersion > 1 && (depthTextureFormat === 13 || depthTextureFormat === 17 || depthTextureFormat === 18);
    rtWrapper.label = options?.label ?? "MultiRenderTargetWrapper";
    rtWrapper._framebuffer = framebuffer;
    rtWrapper._generateDepthBuffer = generateDepthTexture || generateDepthBuffer;
    rtWrapper._generateStencilBuffer = generateDepthTexture ? useStencilTexture : generateStencilBuffer;
    rtWrapper._depthStencilBuffer = this._setupFramebufferDepthAttachments(rtWrapper._generateStencilBuffer, rtWrapper._generateDepthBuffer, width, height, 1, depthTextureFormat);
    rtWrapper._attachments = attachments;
    for(let i = 0; i < textureCount; i++){
        let samplingMode = samplingModes[i] || defaultSamplingMode;
        let type = types[i] || defaultType;
        let useSRGBBuffer = useSRGBBuffers[i] || defaultUseSRGBBuffer;
        const format = formats[i] || defaultFormat;
        const target = targets[i] || defaultTarget;
        const layerCount = layers[i] ?? 1;
        if (type === 1 && !this._caps.textureFloatLinearFiltering) {
            // if floating point linear (gl.FLOAT) then force to NEAREST_SAMPLINGMODE
            samplingMode = 1;
        } else if (type === 2 && !this._caps.textureHalfFloatLinearFiltering) {
            // if floating point linear (HALF_FLOAT) then force to NEAREST_SAMPLINGMODE
            samplingMode = 1;
        }
        const filters = this._getSamplingParameters(samplingMode, generateMipMaps);
        if (type === 1 && !this._caps.textureFloat) {
            type = 0;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Warn("Float textures are not supported. Render target forced to TEXTURETYPE_UNSIGNED_BYTE type");
        }
        useSRGBBuffer = useSRGBBuffer && this._caps.supportSRGBBuffers && (this.webGLVersion > 1 || this.isWebGPU);
        const isWebGL2 = this.webGLVersion > 1;
        const attachment = gl[isWebGL2 ? "COLOR_ATTACHMENT" + i : "COLOR_ATTACHMENT" + i + "_WEBGL"];
        attachments.push(attachment);
        if (target === -1 || dontCreateTextures) {
            continue;
        }
        const texture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$internalTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InternalTexture"](this, 6 /* InternalTextureSource.MultiRenderTarget */ );
        textures[i] = texture;
        gl.activeTexture(gl["TEXTURE" + i]);
        gl.bindTexture(target, texture._hardwareTexture.underlyingResource);
        gl.texParameteri(target, gl.TEXTURE_MAG_FILTER, filters.mag);
        gl.texParameteri(target, gl.TEXTURE_MIN_FILTER, filters.min);
        gl.texParameteri(target, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(target, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        const internalSizedFormat = this._getRGBABufferInternalSizedFormat(type, format, useSRGBBuffer);
        const internalFormat = this._getInternalFormat(format);
        const webGLTextureType = this._getWebGLTextureType(type);
        if (isWebGL2 && (target === 35866 || target === 32879)) {
            if (target === 35866) {
                texture.is2DArray = true;
            } else {
                texture.is3D = true;
            }
            texture.baseDepth = texture.depth = layerCount;
            gl.texImage3D(target, 0, internalSizedFormat, width, height, layerCount, 0, internalFormat, webGLTextureType, null);
        } else if (target === 34067) {
            // We have to generate all faces to complete the framebuffer
            for(let i = 0; i < 6; i++){
                gl.texImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, 0, internalSizedFormat, width, height, 0, internalFormat, webGLTextureType, null);
            }
            texture.isCube = true;
        } else {
            gl.texImage2D(gl.TEXTURE_2D, 0, internalSizedFormat, width, height, 0, internalFormat, webGLTextureType, null);
        }
        if (generateMipMaps) {
            gl.generateMipmap(target);
        }
        // Unbind
        this._bindTextureDirectly(target, null);
        texture.baseWidth = width;
        texture.baseHeight = height;
        texture.width = width;
        texture.height = height;
        texture.isReady = true;
        texture.samples = 1;
        texture.generateMipMaps = generateMipMaps;
        texture.samplingMode = samplingMode;
        texture.type = type;
        texture._useSRGBBuffer = useSRGBBuffer;
        texture.format = format;
        texture.label = labels[i] ?? rtWrapper.label + "-Texture" + i;
        this._internalTexturesCache.push(texture);
    }
    if (generateDepthTexture && this._caps.depthTextureExtension && !dontCreateTextures) {
        // Depth texture
        const depthTexture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$internalTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InternalTexture"](this, 14 /* InternalTextureSource.Depth */ );
        let depthTextureType = 5;
        let glDepthTextureInternalFormat = gl.DEPTH_COMPONENT16;
        let glDepthTextureFormat = gl.DEPTH_COMPONENT;
        let glDepthTextureType = gl.UNSIGNED_SHORT;
        let glDepthTextureAttachment = gl.DEPTH_ATTACHMENT;
        if (this.webGLVersion < 2) {
            glDepthTextureInternalFormat = gl.DEPTH_COMPONENT;
        } else {
            if (depthTextureFormat === 14) {
                depthTextureType = 1;
                glDepthTextureType = gl.FLOAT;
                glDepthTextureInternalFormat = gl.DEPTH_COMPONENT32F;
            } else if (depthTextureFormat === 18) {
                depthTextureType = 0;
                glDepthTextureType = gl.FLOAT_32_UNSIGNED_INT_24_8_REV;
                glDepthTextureInternalFormat = gl.DEPTH32F_STENCIL8;
                glDepthTextureFormat = gl.DEPTH_STENCIL;
                glDepthTextureAttachment = gl.DEPTH_STENCIL_ATTACHMENT;
            } else if (depthTextureFormat === 16) {
                depthTextureType = 0;
                glDepthTextureType = gl.UNSIGNED_INT;
                glDepthTextureInternalFormat = gl.DEPTH_COMPONENT24;
                glDepthTextureAttachment = gl.DEPTH_ATTACHMENT;
            } else if (depthTextureFormat === 13 || depthTextureFormat === 17) {
                depthTextureType = 12;
                glDepthTextureType = gl.UNSIGNED_INT_24_8;
                glDepthTextureInternalFormat = gl.DEPTH24_STENCIL8;
                glDepthTextureFormat = gl.DEPTH_STENCIL;
                glDepthTextureAttachment = gl.DEPTH_STENCIL_ATTACHMENT;
            }
        }
        this._bindTextureDirectly(gl.TEXTURE_2D, depthTexture, true);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texImage2D(gl.TEXTURE_2D, 0, glDepthTextureInternalFormat, width, height, 0, glDepthTextureFormat, glDepthTextureType, null);
        gl.framebufferTexture2D(gl.FRAMEBUFFER, glDepthTextureAttachment, gl.TEXTURE_2D, depthTexture._hardwareTexture.underlyingResource, 0);
        this._bindTextureDirectly(gl.TEXTURE_2D, null);
        rtWrapper._depthStencilTexture = depthTexture;
        rtWrapper._depthStencilTextureWithStencil = useStencilTexture;
        depthTexture.baseWidth = width;
        depthTexture.baseHeight = height;
        depthTexture.width = width;
        depthTexture.height = height;
        depthTexture.isReady = true;
        depthTexture.samples = 1;
        depthTexture.generateMipMaps = generateMipMaps;
        depthTexture.samplingMode = 1;
        depthTexture.format = depthTextureFormat;
        depthTexture.type = depthTextureType;
        depthTexture.label = rtWrapper.label + "-DepthStencil";
        textures[textureCount] = depthTexture;
        this._internalTexturesCache.push(depthTexture);
    }
    rtWrapper.setTextures(textures);
    if (initializeBuffers) {
        gl.drawBuffers(attachments);
    }
    this._bindUnboundFramebuffer(currentFramebuffer);
    rtWrapper.setLayerAndFaceIndices(layerIndex, faceIndex);
    this.resetTextureCache();
    if (!dontCreateTextures) {
        this.updateMultipleRenderTargetTextureSampleCount(rtWrapper, samples, initializeBuffers);
    } else if (samples > 1) {
        const framebuffer = gl.createFramebuffer();
        if (!framebuffer) {
            throw new Error("Unable to create multi sampled framebuffer");
        }
        rtWrapper._samples = samples;
        rtWrapper._MSAAFramebuffer = framebuffer;
        if (textureCount > 0 && initializeBuffers) {
            this._bindUnboundFramebuffer(framebuffer);
            gl.drawBuffers(attachments);
            this._bindUnboundFramebuffer(currentFramebuffer);
        }
    }
    return rtWrapper;
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinEngine"].prototype.updateMultipleRenderTargetTextureSampleCount = function(rtWrapper, samples, initializeBuffers = true) {
    if (this.webGLVersion < 2 || !rtWrapper) {
        return 1;
    }
    if (rtWrapper.samples === samples) {
        return samples;
    }
    const gl = this._gl;
    samples = Math.min(samples, this.getCaps().maxMSAASamples);
    // Dispose previous render buffers
    if (rtWrapper._depthStencilBuffer) {
        gl.deleteRenderbuffer(rtWrapper._depthStencilBuffer);
        rtWrapper._depthStencilBuffer = null;
    }
    if (rtWrapper._MSAAFramebuffer) {
        gl.deleteFramebuffer(rtWrapper._MSAAFramebuffer);
        rtWrapper._MSAAFramebuffer = null;
    }
    const count = rtWrapper._attachments.length; // We do it this way instead of rtWrapper.textures.length to avoid taking into account the depth/stencil texture, in case it has been created
    for(let i = 0; i < count; i++){
        const texture = rtWrapper.textures[i];
        const hardwareTexture = texture._hardwareTexture;
        hardwareTexture?.releaseMSAARenderBuffers();
    }
    if (samples > 1 && typeof gl.renderbufferStorageMultisample === "function") {
        const framebuffer = gl.createFramebuffer();
        if (!framebuffer) {
            throw new Error("Unable to create multi sampled framebuffer");
        }
        rtWrapper._MSAAFramebuffer = framebuffer;
        this._bindUnboundFramebuffer(framebuffer);
        const attachments = [];
        for(let i = 0; i < count; i++){
            const texture = rtWrapper.textures[i];
            const hardwareTexture = texture._hardwareTexture;
            const attachment = gl[this.webGLVersion > 1 ? "COLOR_ATTACHMENT" + i : "COLOR_ATTACHMENT" + i + "_WEBGL"];
            const colorRenderbuffer = this._createRenderBuffer(texture.width, texture.height, samples, -1 /* not used */ , this._getRGBABufferInternalSizedFormat(texture.type, texture.format, texture._useSRGBBuffer), attachment);
            if (!colorRenderbuffer) {
                throw new Error("Unable to create multi sampled framebuffer");
            }
            hardwareTexture.addMSAARenderBuffer(colorRenderbuffer);
            texture.samples = samples;
            attachments.push(attachment);
        }
        if (initializeBuffers) {
            gl.drawBuffers(attachments);
        }
    } else {
        this._bindUnboundFramebuffer(rtWrapper._framebuffer);
    }
    const depthFormat = rtWrapper._depthStencilTexture ? rtWrapper._depthStencilTexture.format : undefined;
    rtWrapper._depthStencilBuffer = this._setupFramebufferDepthAttachments(rtWrapper._generateStencilBuffer, rtWrapper._generateDepthBuffer, rtWrapper.width, rtWrapper.height, samples, depthFormat);
    this._bindUnboundFramebuffer(null);
    rtWrapper._samples = samples;
    return samples;
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinEngine"].prototype.generateMipMapsMultiFramebuffer = function(texture) {
    const rtWrapper = texture;
    const gl = this._gl;
    if (!rtWrapper.isMulti) {
        return;
    }
    for(let i = 0; i < rtWrapper._attachments.length; i++){
        const texture = rtWrapper.textures[i];
        if (texture?.generateMipMaps && !texture?.isCube && !texture?.is3D) {
            this._bindTextureDirectly(gl.TEXTURE_2D, texture, true);
            gl.generateMipmap(gl.TEXTURE_2D);
            this._bindTextureDirectly(gl.TEXTURE_2D, null);
        }
    }
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinEngine"].prototype.resolveMultiFramebuffer = function(texture) {
    const rtWrapper = texture;
    const gl = this._gl;
    if (!rtWrapper._MSAAFramebuffer || !rtWrapper.isMulti) {
        return;
    }
    let bufferBits = rtWrapper.resolveMSAAColors ? gl.COLOR_BUFFER_BIT : 0;
    bufferBits |= rtWrapper._generateDepthBuffer && rtWrapper.resolveMSAADepth ? gl.DEPTH_BUFFER_BIT : 0;
    bufferBits |= rtWrapper._generateStencilBuffer && rtWrapper.resolveMSAAStencil ? gl.STENCIL_BUFFER_BIT : 0;
    const attachments = rtWrapper._attachments;
    const count = attachments.length;
    gl.bindFramebuffer(gl.READ_FRAMEBUFFER, rtWrapper._MSAAFramebuffer);
    gl.bindFramebuffer(gl.DRAW_FRAMEBUFFER, rtWrapper._framebuffer);
    for(let i = 0; i < count; i++){
        const texture = rtWrapper.textures[i];
        for(let j = 0; j < count; j++){
            attachments[j] = gl.NONE;
        }
        attachments[i] = gl[this.webGLVersion > 1 ? "COLOR_ATTACHMENT" + i : "COLOR_ATTACHMENT" + i + "_WEBGL"];
        gl.readBuffer(attachments[i]);
        gl.drawBuffers(attachments);
        gl.blitFramebuffer(0, 0, texture.width, texture.height, 0, 0, texture.width, texture.height, bufferBits, gl.NEAREST);
    }
    for(let i = 0; i < count; i++){
        attachments[i] = gl[this.webGLVersion > 1 ? "COLOR_ATTACHMENT" + i : "COLOR_ATTACHMENT" + i + "_WEBGL"];
    }
    gl.drawBuffers(attachments);
    gl.bindFramebuffer(this._gl.FRAMEBUFFER, rtWrapper._MSAAFramebuffer);
}; //# sourceMappingURL=engine.multiRender.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Extensions/engine.computeShader.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ComputeBindingType",
    ()=>ComputeBindingType
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/thinEngine.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/abstractEngine.js [app-client] (ecmascript)");
;
;
var ComputeBindingType;
(function(ComputeBindingType) {
    ComputeBindingType[ComputeBindingType["Texture"] = 0] = "Texture";
    ComputeBindingType[ComputeBindingType["StorageTexture"] = 1] = "StorageTexture";
    ComputeBindingType[ComputeBindingType["UniformBuffer"] = 2] = "UniformBuffer";
    ComputeBindingType[ComputeBindingType["StorageBuffer"] = 3] = "StorageBuffer";
    ComputeBindingType[ComputeBindingType["TextureWithoutSampler"] = 4] = "TextureWithoutSampler";
    ComputeBindingType[ComputeBindingType["Sampler"] = 5] = "Sampler";
    ComputeBindingType[ComputeBindingType["ExternalTexture"] = 6] = "ExternalTexture";
    ComputeBindingType[ComputeBindingType["DataBuffer"] = 7] = "DataBuffer";
    ComputeBindingType[ComputeBindingType["InternalTexture"] = 8] = "InternalTexture";
})(ComputeBindingType || (ComputeBindingType = {}));
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinEngine"].prototype.createComputeEffect = function(baseName, options) {
    throw new Error("createComputeEffect: This engine does not support compute shaders!");
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinEngine"].prototype.createComputePipelineContext = function() {
    throw new Error("createComputePipelineContext: This engine does not support compute shaders!");
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinEngine"].prototype.createComputeContext = function() {
    return undefined;
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinEngine"].prototype.computeDispatch = function(effect, context, bindings, x, y, z, bindingsMapping) {
    throw new Error("computeDispatch: This engine does not support compute shaders!");
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinEngine"].prototype.computeDispatchIndirect = function(effect, context, bindings, buffer, offset, bindingsMapping) {
    throw new Error("computeDispatchIndirect: This engine does not support compute shaders!");
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinEngine"].prototype.areAllComputeEffectsReady = function() {
    return true;
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinEngine"].prototype.releaseComputeEffects = function() {};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinEngine"].prototype._prepareComputePipelineContext = function(pipelineContext, computeSourceCode, rawComputeSourceCode, defines, entryPoint) {};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinEngine"].prototype._rebuildComputeEffects = function() {};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AbstractEngine"].prototype._executeWhenComputeStateIsCompiled = function(pipelineContext, action) {
    action(null);
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinEngine"].prototype._releaseComputeEffect = function(effect) {};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$thinEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThinEngine"].prototype._deleteComputePipelineContext = function(pipelineContext) {}; //# sourceMappingURL=engine.computeShader.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Extensions/engine.textureSelector.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/engine.js [app-client] (ecmascript)");
;
function TransformTextureUrl(url) {
    const excludeFn = (entry)=>{
        const strRegExPattern = "\\b" + entry + "\\b";
        return url && (url === entry || url.match(new RegExp(strRegExPattern, "g")));
    };
    if (this._excludedCompressedTextures && this._excludedCompressedTextures.some(excludeFn)) {
        return url;
    }
    const lastDot = url.lastIndexOf(".");
    const lastQuestionMark = url.lastIndexOf("?");
    const querystring = lastQuestionMark > -1 ? url.substring(lastQuestionMark, url.length) : "";
    return (lastDot > -1 ? url.substring(0, lastDot) : url) + this._textureFormatInUse + querystring;
}
Object.defineProperty(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Engine"].prototype, "texturesSupported", {
    get: function() {
        // Intelligently add supported compressed formats in order to check for.
        // Check for ASTC support first as it is most powerful and to be very cross platform.
        // Next PVRTC & DXT, which are probably superior to ETC1/2.
        // Likely no hardware which supports both PVR & DXT, so order matters little.
        // ETC2 is newer and handles ETC1 (no alpha capability), so check for first.
        const texturesSupported = [];
        if (this._caps.astc) {
            texturesSupported.push("-astc.ktx");
        }
        if (this._caps.s3tc) {
            texturesSupported.push("-dxt.ktx");
        }
        if (this._caps.pvrtc) {
            texturesSupported.push("-pvrtc.ktx");
        }
        if (this._caps.etc2) {
            texturesSupported.push("-etc2.ktx");
        }
        if (this._caps.etc1) {
            texturesSupported.push("-etc1.ktx");
        }
        return texturesSupported;
    },
    enumerable: true,
    configurable: true
});
Object.defineProperty(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Engine"].prototype, "textureFormatInUse", {
    get: function() {
        return this._textureFormatInUse || null;
    },
    enumerable: true,
    configurable: true
});
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Engine"].prototype.setCompressedTextureExclusions = function(skippedFiles) {
    this._excludedCompressedTextures = skippedFiles;
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Engine"].prototype.setTextureFormatToUse = function(formatsAvailable) {
    const texturesSupported = this.texturesSupported;
    for(let i = 0, len1 = texturesSupported.length; i < len1; i++){
        for(let j = 0, len2 = formatsAvailable.length; j < len2; j++){
            if (texturesSupported[i] === formatsAvailable[j].toLowerCase()) {
                this._transformTextureUrl = TransformTextureUrl.bind(this);
                return this._textureFormatInUse = texturesSupported[i];
            }
        }
    }
    // actively set format to nothing, to allow this to be called more than once
    // and possibly fail the 2nd time
    this._textureFormatInUse = "";
    this._transformTextureUrl = null;
    return null;
}; //# sourceMappingURL=engine.textureSelector.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Extensions/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/* eslint-disable import/export */ __turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Extensions$2f$engine$2e$alpha$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Extensions/engine.alpha.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Extensions$2f$engine$2e$debugging$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Extensions/engine.debugging.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Extensions$2f$engine$2e$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Extensions/engine.query.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Extensions$2f$engine$2e$transformFeedback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Extensions/engine.transformFeedback.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Extensions$2f$engine$2e$multiview$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Extensions/engine.multiview.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Extensions$2f$engine$2e$rawTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Extensions/engine.rawTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Extensions$2f$engine$2e$dynamicTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Extensions/engine.dynamicTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Extensions$2f$engine$2e$videoTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Extensions/engine.videoTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Extensions$2f$engine$2e$multiRender$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Extensions/engine.multiRender.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Extensions$2f$engine$2e$cubeTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Extensions/engine.cubeTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Extensions$2f$engine$2e$prefilteredCubeTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Extensions/engine.prefilteredCubeTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Extensions$2f$engine$2e$renderTarget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Extensions/engine.renderTarget.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Extensions$2f$engine$2e$renderTargetCube$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Extensions/engine.renderTargetCube.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Extensions$2f$engine$2e$renderTargetTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Extensions/engine.renderTargetTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Extensions$2f$engine$2e$uniformBuffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Extensions/engine.uniformBuffer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Extensions$2f$engine$2e$dynamicBuffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Extensions/engine.dynamicBuffer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Extensions$2f$engine$2e$readTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Extensions/engine.readTexture.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Extensions$2f$engine$2e$computeShader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Extensions/engine.computeShader.js [app-client] (ecmascript)");
// must import first since nothing references the exports
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Extensions$2f$engine$2e$textureSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Extensions/engine.textureSelector.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
 //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Extensions/engine.readTexture.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "allocateAndCopyTypedBuffer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["allocateAndCopyTypedBuffer"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Extensions$2f$engine$2e$readTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Extensions/engine.readTexture.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/abstractEngine.functions.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Extensions/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ComputeBindingType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Extensions$2f$engine$2e$computeShader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComputeBindingType"],
    "_forceTransformFeedbackToBundle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Extensions$2f$engine$2e$transformFeedback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_forceTransformFeedbackToBundle"],
    "allocateAndCopyTypedBuffer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Extensions$2f$engine$2e$readTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["allocateAndCopyTypedBuffer"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Extensions$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Extensions/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Extensions$2f$engine$2e$alpha$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Extensions/engine.alpha.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Extensions$2f$engine$2e$debugging$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Extensions/engine.debugging.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Extensions$2f$engine$2e$query$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Extensions/engine.query.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Extensions$2f$engine$2e$transformFeedback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Extensions/engine.transformFeedback.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Extensions$2f$engine$2e$multiview$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Extensions/engine.multiview.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Extensions$2f$engine$2e$rawTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Extensions/engine.rawTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Extensions$2f$engine$2e$dynamicTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Extensions/engine.dynamicTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Extensions$2f$engine$2e$videoTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Extensions/engine.videoTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Extensions$2f$engine$2e$multiRender$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Extensions/engine.multiRender.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Extensions$2f$engine$2e$cubeTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Extensions/engine.cubeTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Extensions$2f$engine$2e$prefilteredCubeTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Extensions/engine.prefilteredCubeTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Extensions$2f$engine$2e$renderTarget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Extensions/engine.renderTarget.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Extensions$2f$engine$2e$renderTargetCube$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Extensions/engine.renderTargetCube.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Extensions$2f$engine$2e$renderTargetTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Extensions/engine.renderTargetTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Extensions$2f$engine$2e$uniformBuffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Extensions/engine.uniformBuffer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Extensions$2f$engine$2e$dynamicBuffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Extensions/engine.dynamicBuffer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Extensions$2f$engine$2e$readTexture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Extensions/engine.readTexture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Extensions$2f$engine$2e$computeShader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Extensions/engine.computeShader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$Extensions$2f$engine$2e$textureSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/Extensions/engine.textureSelector.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=dcdbf_%40babylonjs_core_Engines_Extensions_a083921c._.js.map