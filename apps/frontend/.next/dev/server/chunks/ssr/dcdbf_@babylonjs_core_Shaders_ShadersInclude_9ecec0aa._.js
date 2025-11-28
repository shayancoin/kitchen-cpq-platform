module.exports = [
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/clipPlaneFragmentDeclaration.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "clipPlaneFragmentDeclaration",
    ()=>clipPlaneFragmentDeclaration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "clipPlaneFragmentDeclaration";
const shader = `#ifdef CLIPPLANE
varying float fClipDistance;
#endif
#ifdef CLIPPLANE2
varying float fClipDistance2;
#endif
#ifdef CLIPPLANE3
varying float fClipDistance3;
#endif
#ifdef CLIPPLANE4
varying float fClipDistance4;
#endif
#ifdef CLIPPLANE5
varying float fClipDistance5;
#endif
#ifdef CLIPPLANE6
varying float fClipDistance6;
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const clipPlaneFragmentDeclaration = {
    name,
    shader
}; //# sourceMappingURL=clipPlaneFragmentDeclaration.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/packingFunctions.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "packingFunctions",
    ()=>packingFunctions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "packingFunctions";
const shader = `vec4 pack(float depth)
{const vec4 bit_shift=vec4(255.0*255.0*255.0,255.0*255.0,255.0,1.0);const vec4 bit_mask=vec4(0.0,1.0/255.0,1.0/255.0,1.0/255.0);vec4 res=fract(depth*bit_shift);res-=res.xxyz*bit_mask;return res;}
float unpack(vec4 color)
{const vec4 bit_shift=vec4(1.0/(255.0*255.0*255.0),1.0/(255.0*255.0),1.0/255.0,1.0);return dot(color,bit_shift);}`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const packingFunctions = {
    name,
    shader
}; //# sourceMappingURL=packingFunctions.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/clipPlaneFragment.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "clipPlaneFragment",
    ()=>clipPlaneFragment
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "clipPlaneFragment";
const shader = `#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)
if (false) {}
#endif
#ifdef CLIPPLANE
else if (fClipDistance>0.0)
{discard;}
#endif
#ifdef CLIPPLANE2
else if (fClipDistance2>0.0)
{discard;}
#endif
#ifdef CLIPPLANE3
else if (fClipDistance3>0.0)
{discard;}
#endif
#ifdef CLIPPLANE4
else if (fClipDistance4>0.0)
{discard;}
#endif
#ifdef CLIPPLANE5
else if (fClipDistance5>0.0)
{discard;}
#endif
#ifdef CLIPPLANE6
else if (fClipDistance6>0.0)
{discard;}
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const clipPlaneFragment = {
    name,
    shader
}; //# sourceMappingURL=clipPlaneFragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/bonesDeclaration.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "bonesDeclaration",
    ()=>bonesDeclaration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "bonesDeclaration";
const shader = `#if NUM_BONE_INFLUENCERS>0
attribute vec4 matricesIndices;attribute vec4 matricesWeights;
#if NUM_BONE_INFLUENCERS>4
attribute vec4 matricesIndicesExtra;attribute vec4 matricesWeightsExtra;
#endif
#ifndef BAKED_VERTEX_ANIMATION_TEXTURE
#ifdef BONETEXTURE
uniform highp sampler2D boneSampler;uniform float boneTextureWidth;
#else
uniform mat4 mBones[BonesPerMesh];
#endif
#ifdef BONES_VELOCITY_ENABLED
uniform mat4 mPreviousBones[BonesPerMesh];
#endif
#ifdef BONETEXTURE
#define inline
mat4 readMatrixFromRawSampler(sampler2D smp,float index)
{float offset=index *4.0;float dx=1.0/boneTextureWidth;vec4 m0=texture2D(smp,vec2(dx*(offset+0.5),0.));vec4 m1=texture2D(smp,vec2(dx*(offset+1.5),0.));vec4 m2=texture2D(smp,vec2(dx*(offset+2.5),0.));vec4 m3=texture2D(smp,vec2(dx*(offset+3.5),0.));return mat4(m0,m1,m2,m3);}
#endif
#endif
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const bonesDeclaration = {
    name,
    shader
}; //# sourceMappingURL=bonesDeclaration.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/bakedVertexAnimationDeclaration.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "bakedVertexAnimationDeclaration",
    ()=>bakedVertexAnimationDeclaration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "bakedVertexAnimationDeclaration";
const shader = `#ifdef BAKED_VERTEX_ANIMATION_TEXTURE
uniform float bakedVertexAnimationTime;uniform vec2 bakedVertexAnimationTextureSizeInverted;uniform vec4 bakedVertexAnimationSettings;uniform sampler2D bakedVertexAnimationTexture;
#ifdef INSTANCES
attribute vec4 bakedVertexAnimationSettingsInstanced;
#endif
#define inline
mat4 readMatrixFromRawSamplerVAT(sampler2D smp,float index,float frame)
{float offset=index*4.0;float frameUV=(frame+0.5)*bakedVertexAnimationTextureSizeInverted.y;float dx=bakedVertexAnimationTextureSizeInverted.x;vec4 m0=texture2D(smp,vec2(dx*(offset+0.5),frameUV));vec4 m1=texture2D(smp,vec2(dx*(offset+1.5),frameUV));vec4 m2=texture2D(smp,vec2(dx*(offset+2.5),frameUV));vec4 m3=texture2D(smp,vec2(dx*(offset+3.5),frameUV));return mat4(m0,m1,m2,m3);}
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const bakedVertexAnimationDeclaration = {
    name,
    shader
}; //# sourceMappingURL=bakedVertexAnimationDeclaration.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/morphTargetsVertexGlobalDeclaration.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "morphTargetsVertexGlobalDeclaration",
    ()=>morphTargetsVertexGlobalDeclaration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "morphTargetsVertexGlobalDeclaration";
const shader = `#ifdef MORPHTARGETS
uniform float morphTargetInfluences[NUM_MORPH_INFLUENCERS];
#ifdef MORPHTARGETS_TEXTURE 
uniform float morphTargetTextureIndices[NUM_MORPH_INFLUENCERS];uniform vec3 morphTargetTextureInfo;uniform highp sampler2DArray morphTargets;vec3 readVector3FromRawSampler(int targetIndex,float vertexIndex)
{ 
float y=floor(vertexIndex/morphTargetTextureInfo.y);float x=vertexIndex-y*morphTargetTextureInfo.y;vec3 textureUV=vec3((x+0.5)/morphTargetTextureInfo.y,(y+0.5)/morphTargetTextureInfo.z,morphTargetTextureIndices[targetIndex]);return texture(morphTargets,textureUV).xyz;}
vec4 readVector4FromRawSampler(int targetIndex,float vertexIndex)
{ 
float y=floor(vertexIndex/morphTargetTextureInfo.y);float x=vertexIndex-y*morphTargetTextureInfo.y;vec3 textureUV=vec3((x+0.5)/morphTargetTextureInfo.y,(y+0.5)/morphTargetTextureInfo.z,morphTargetTextureIndices[targetIndex]);return texture(morphTargets,textureUV);}
#endif
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const morphTargetsVertexGlobalDeclaration = {
    name,
    shader
}; //# sourceMappingURL=morphTargetsVertexGlobalDeclaration.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/morphTargetsVertexDeclaration.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "morphTargetsVertexDeclaration",
    ()=>morphTargetsVertexDeclaration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "morphTargetsVertexDeclaration";
const shader = `#ifdef MORPHTARGETS
#ifndef MORPHTARGETS_TEXTURE
#ifdef MORPHTARGETS_POSITION
attribute vec3 position{X};
#endif
#ifdef MORPHTARGETS_NORMAL
attribute vec3 normal{X};
#endif
#ifdef MORPHTARGETS_TANGENT
attribute vec3 tangent{X};
#endif
#ifdef MORPHTARGETS_UV
attribute vec2 uv_{X};
#endif
#ifdef MORPHTARGETS_UV2
attribute vec2 uv2_{X};
#endif
#ifdef MORPHTARGETS_COLOR
attribute vec4 color{X};
#endif
#elif {X}==0
uniform float morphTargetCount;
#endif
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const morphTargetsVertexDeclaration = {
    name,
    shader
}; //# sourceMappingURL=morphTargetsVertexDeclaration.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/clipPlaneVertexDeclaration.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "clipPlaneVertexDeclaration",
    ()=>clipPlaneVertexDeclaration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "clipPlaneVertexDeclaration";
const shader = `#ifdef CLIPPLANE
uniform vec4 vClipPlane;varying float fClipDistance;
#endif
#ifdef CLIPPLANE2
uniform vec4 vClipPlane2;varying float fClipDistance2;
#endif
#ifdef CLIPPLANE3
uniform vec4 vClipPlane3;varying float fClipDistance3;
#endif
#ifdef CLIPPLANE4
uniform vec4 vClipPlane4;varying float fClipDistance4;
#endif
#ifdef CLIPPLANE5
uniform vec4 vClipPlane5;varying float fClipDistance5;
#endif
#ifdef CLIPPLANE6
uniform vec4 vClipPlane6;varying float fClipDistance6;
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const clipPlaneVertexDeclaration = {
    name,
    shader
}; //# sourceMappingURL=clipPlaneVertexDeclaration.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/instancesDeclaration.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "instancesDeclaration",
    ()=>instancesDeclaration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "instancesDeclaration";
const shader = `#ifdef INSTANCES
attribute vec4 world0;attribute vec4 world1;attribute vec4 world2;attribute vec4 world3;
#ifdef INSTANCESCOLOR
attribute vec4 instanceColor;
#endif
#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)
uniform mat4 world;
#endif
#if defined(VELOCITY) || defined(PREPASS_VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)
attribute vec4 previousWorld0;attribute vec4 previousWorld1;attribute vec4 previousWorld2;attribute vec4 previousWorld3;
#ifdef THIN_INSTANCES
uniform mat4 previousWorld;
#endif
#endif
#else
#if !defined(WORLD_UBO)
uniform mat4 world;
#endif
#if defined(VELOCITY) || defined(PREPASS_VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)
uniform mat4 previousWorld;
#endif
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const instancesDeclaration = {
    name,
    shader
}; //# sourceMappingURL=instancesDeclaration.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/pointCloudVertexDeclaration.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "pointCloudVertexDeclaration",
    ()=>pointCloudVertexDeclaration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "pointCloudVertexDeclaration";
const shader = `#ifdef POINTSIZE
uniform float pointSize;
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const pointCloudVertexDeclaration = {
    name,
    shader
}; //# sourceMappingURL=pointCloudVertexDeclaration.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/morphTargetsVertexGlobal.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "morphTargetsVertexGlobal",
    ()=>morphTargetsVertexGlobal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "morphTargetsVertexGlobal";
const shader = `#ifdef MORPHTARGETS
#ifdef MORPHTARGETS_TEXTURE
float vertexID;
#endif
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const morphTargetsVertexGlobal = {
    name,
    shader
}; //# sourceMappingURL=morphTargetsVertexGlobal.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/morphTargetsVertex.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "morphTargetsVertex",
    ()=>morphTargetsVertex
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "morphTargetsVertex";
const shader = `#ifdef MORPHTARGETS
#ifdef MORPHTARGETS_TEXTURE
#if {X}==0
for (int i=0; i<NUM_MORPH_INFLUENCERS; i++) {if (float(i)>=morphTargetCount) break;vertexID=float(gl_VertexID)*morphTargetTextureInfo.x;
#ifdef MORPHTARGETS_POSITION
positionUpdated+=(readVector3FromRawSampler(i,vertexID)-position)*morphTargetInfluences[i];
#endif
#ifdef MORPHTARGETTEXTURE_HASPOSITIONS
vertexID+=1.0;
#endif
#ifdef MORPHTARGETS_NORMAL
normalUpdated+=(readVector3FromRawSampler(i,vertexID) -normal)*morphTargetInfluences[i];
#endif
#ifdef MORPHTARGETTEXTURE_HASNORMALS
vertexID+=1.0;
#endif
#ifdef MORPHTARGETS_UV
uvUpdated+=(readVector3FromRawSampler(i,vertexID).xy-uv)*morphTargetInfluences[i];
#endif
#ifdef MORPHTARGETTEXTURE_HASUVS
vertexID+=1.0;
#endif
#ifdef MORPHTARGETS_TANGENT
tangentUpdated.xyz+=(readVector3FromRawSampler(i,vertexID) -tangent.xyz)*morphTargetInfluences[i];
#endif
#ifdef MORPHTARGETTEXTURE_HASTANGENTS
vertexID+=1.0;
#endif
#ifdef MORPHTARGETS_UV2
uv2Updated+=(readVector3FromRawSampler(i,vertexID).xy-uv2)*morphTargetInfluences[i];
#endif
#ifdef MORPHTARGETTEXTURE_HASUV2S
vertexID+=1.0;
#endif
#ifdef MORPHTARGETS_COLOR
colorUpdated+=(readVector4FromRawSampler(i,vertexID)-color)*morphTargetInfluences[i];
#endif
}
#endif
#else
#ifdef MORPHTARGETS_POSITION
positionUpdated+=(position{X}-position)*morphTargetInfluences[{X}];
#endif
#ifdef MORPHTARGETS_NORMAL
normalUpdated+=(normal{X}-normal)*morphTargetInfluences[{X}];
#endif
#ifdef MORPHTARGETS_TANGENT
tangentUpdated.xyz+=(tangent{X}-tangent.xyz)*morphTargetInfluences[{X}];
#endif
#ifdef MORPHTARGETS_UV
uvUpdated+=(uv_{X}-uv)*morphTargetInfluences[{X}];
#endif
#ifdef MORPHTARGETS_UV2
uv2Updated+=(uv2_{X}-uv2)*morphTargetInfluences[{X}];
#endif
#ifdef MORPHTARGETS_COLOR
colorUpdated+=(color{X}-color)*morphTargetInfluences[{X}];
#endif
#endif
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const morphTargetsVertex = {
    name,
    shader
}; //# sourceMappingURL=morphTargetsVertex.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/instancesVertex.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "instancesVertex",
    ()=>instancesVertex
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "instancesVertex";
const shader = `#ifdef INSTANCES
mat4 finalWorld=mat4(world0,world1,world2,world3);
#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)
mat4 finalPreviousWorld=mat4(previousWorld0,previousWorld1,
previousWorld2,previousWorld3);
#endif
#ifdef THIN_INSTANCES
finalWorld=world*finalWorld;
#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)
finalPreviousWorld=previousWorld*finalPreviousWorld;
#endif
#endif
#else
mat4 finalWorld=world;
#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)
mat4 finalPreviousWorld=previousWorld;
#endif
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const instancesVertex = {
    name,
    shader
}; //# sourceMappingURL=instancesVertex.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/bonesVertex.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "bonesVertex",
    ()=>bonesVertex
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "bonesVertex";
const shader = `#ifndef BAKED_VERTEX_ANIMATION_TEXTURE
#if NUM_BONE_INFLUENCERS>0
mat4 influence;
#ifdef BONETEXTURE
influence=readMatrixFromRawSampler(boneSampler,matricesIndices[0])*matricesWeights[0];
#if NUM_BONE_INFLUENCERS>1
influence+=readMatrixFromRawSampler(boneSampler,matricesIndices[1])*matricesWeights[1];
#endif
#if NUM_BONE_INFLUENCERS>2
influence+=readMatrixFromRawSampler(boneSampler,matricesIndices[2])*matricesWeights[2];
#endif
#if NUM_BONE_INFLUENCERS>3
influence+=readMatrixFromRawSampler(boneSampler,matricesIndices[3])*matricesWeights[3];
#endif
#if NUM_BONE_INFLUENCERS>4
influence+=readMatrixFromRawSampler(boneSampler,matricesIndicesExtra[0])*matricesWeightsExtra[0];
#endif
#if NUM_BONE_INFLUENCERS>5
influence+=readMatrixFromRawSampler(boneSampler,matricesIndicesExtra[1])*matricesWeightsExtra[1];
#endif
#if NUM_BONE_INFLUENCERS>6
influence+=readMatrixFromRawSampler(boneSampler,matricesIndicesExtra[2])*matricesWeightsExtra[2];
#endif
#if NUM_BONE_INFLUENCERS>7
influence+=readMatrixFromRawSampler(boneSampler,matricesIndicesExtra[3])*matricesWeightsExtra[3];
#endif
#else
influence=mBones[int(matricesIndices[0])]*matricesWeights[0];
#if NUM_BONE_INFLUENCERS>1
influence+=mBones[int(matricesIndices[1])]*matricesWeights[1];
#endif
#if NUM_BONE_INFLUENCERS>2
influence+=mBones[int(matricesIndices[2])]*matricesWeights[2];
#endif
#if NUM_BONE_INFLUENCERS>3
influence+=mBones[int(matricesIndices[3])]*matricesWeights[3];
#endif
#if NUM_BONE_INFLUENCERS>4
influence+=mBones[int(matricesIndicesExtra[0])]*matricesWeightsExtra[0];
#endif
#if NUM_BONE_INFLUENCERS>5
influence+=mBones[int(matricesIndicesExtra[1])]*matricesWeightsExtra[1];
#endif
#if NUM_BONE_INFLUENCERS>6
influence+=mBones[int(matricesIndicesExtra[2])]*matricesWeightsExtra[2];
#endif
#if NUM_BONE_INFLUENCERS>7
influence+=mBones[int(matricesIndicesExtra[3])]*matricesWeightsExtra[3];
#endif
#endif
finalWorld=finalWorld*influence;
#endif
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const bonesVertex = {
    name,
    shader
}; //# sourceMappingURL=bonesVertex.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/bakedVertexAnimation.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "bakedVertexAnimation",
    ()=>bakedVertexAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "bakedVertexAnimation";
const shader = `#ifdef BAKED_VERTEX_ANIMATION_TEXTURE
{
#ifdef INSTANCES
#define BVASNAME bakedVertexAnimationSettingsInstanced
#else
#define BVASNAME bakedVertexAnimationSettings
#endif
float VATStartFrame=BVASNAME.x;float VATEndFrame=BVASNAME.y;float VATOffsetFrame=BVASNAME.z;float VATSpeed=BVASNAME.w;float totalFrames=VATEndFrame-VATStartFrame+1.0;float time=bakedVertexAnimationTime*VATSpeed/totalFrames;float frameCorrection=time<1.0 ? 0.0 : 1.0;float numOfFrames=totalFrames-frameCorrection;float VATFrameNum=fract(time)*numOfFrames;VATFrameNum=mod(VATFrameNum+VATOffsetFrame,numOfFrames);VATFrameNum=floor(VATFrameNum);VATFrameNum+=VATStartFrame+frameCorrection;mat4 VATInfluence;VATInfluence=readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,matricesIndices[0],VATFrameNum)*matricesWeights[0];
#if NUM_BONE_INFLUENCERS>1
VATInfluence+=readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,matricesIndices[1],VATFrameNum)*matricesWeights[1];
#endif
#if NUM_BONE_INFLUENCERS>2
VATInfluence+=readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,matricesIndices[2],VATFrameNum)*matricesWeights[2];
#endif
#if NUM_BONE_INFLUENCERS>3
VATInfluence+=readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,matricesIndices[3],VATFrameNum)*matricesWeights[3];
#endif
#if NUM_BONE_INFLUENCERS>4
VATInfluence+=readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,matricesIndicesExtra[0],VATFrameNum)*matricesWeightsExtra[0];
#endif
#if NUM_BONE_INFLUENCERS>5
VATInfluence+=readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,matricesIndicesExtra[1],VATFrameNum)*matricesWeightsExtra[1];
#endif
#if NUM_BONE_INFLUENCERS>6
VATInfluence+=readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,matricesIndicesExtra[2],VATFrameNum)*matricesWeightsExtra[2];
#endif
#if NUM_BONE_INFLUENCERS>7
VATInfluence+=readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,matricesIndicesExtra[3],VATFrameNum)*matricesWeightsExtra[3];
#endif
finalWorld=finalWorld*VATInfluence;}
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const bakedVertexAnimation = {
    name,
    shader
}; //# sourceMappingURL=bakedVertexAnimation.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/clipPlaneVertex.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "clipPlaneVertex",
    ()=>clipPlaneVertex
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "clipPlaneVertex";
const shader = `#ifdef CLIPPLANE
fClipDistance=dot(worldPos,vClipPlane);
#endif
#ifdef CLIPPLANE2
fClipDistance2=dot(worldPos,vClipPlane2);
#endif
#ifdef CLIPPLANE3
fClipDistance3=dot(worldPos,vClipPlane3);
#endif
#ifdef CLIPPLANE4
fClipDistance4=dot(worldPos,vClipPlane4);
#endif
#ifdef CLIPPLANE5
fClipDistance5=dot(worldPos,vClipPlane5);
#endif
#ifdef CLIPPLANE6
fClipDistance6=dot(worldPos,vClipPlane6);
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const clipPlaneVertex = {
    name,
    shader
}; //# sourceMappingURL=clipPlaneVertex.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/pointCloudVertex.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "pointCloudVertex",
    ()=>pointCloudVertex
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "pointCloudVertex";
const shader = `#if defined(POINTSIZE) && !defined(WEBGPU)
gl_PointSize=pointSize;
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const pointCloudVertex = {
    name,
    shader
}; //# sourceMappingURL=pointCloudVertex.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/helperFunctions.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "helperFunctions",
    ()=>helperFunctions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "helperFunctions";
const shader = `const float PI=3.1415926535897932384626433832795;const float TWO_PI=6.283185307179586;const float HALF_PI=1.5707963267948966;const float RECIPROCAL_PI=0.3183098861837907;const float RECIPROCAL_PI2=0.15915494309189535;const float RECIPROCAL_PI4=0.07957747154594767;const float HALF_MIN=5.96046448e-08; 
const float LinearEncodePowerApprox=2.2;const float GammaEncodePowerApprox=1.0/LinearEncodePowerApprox;const vec3 LuminanceEncodeApprox=vec3(0.2126,0.7152,0.0722);const float Epsilon=0.0000001;
#define saturate(x) clamp(x,0.0,1.0)
#define absEps(x) abs(x)+Epsilon
#define maxEps(x) max(x,Epsilon)
#define saturateEps(x) clamp(x,Epsilon,1.0)
mat3 transposeMat3(mat3 inMatrix) {vec3 i0=inMatrix[0];vec3 i1=inMatrix[1];vec3 i2=inMatrix[2];mat3 outMatrix=mat3(
vec3(i0.x,i1.x,i2.x),
vec3(i0.y,i1.y,i2.y),
vec3(i0.z,i1.z,i2.z)
);return outMatrix;}
mat3 inverseMat3(mat3 inMatrix) {float a00=inMatrix[0][0],a01=inMatrix[0][1],a02=inMatrix[0][2];float a10=inMatrix[1][0],a11=inMatrix[1][1],a12=inMatrix[1][2];float a20=inMatrix[2][0],a21=inMatrix[2][1],a22=inMatrix[2][2];float b01=a22*a11-a12*a21;float b11=-a22*a10+a12*a20;float b21=a21*a10-a11*a20;float det=a00*b01+a01*b11+a02*b21;return mat3(b01,(-a22*a01+a02*a21),(a12*a01-a02*a11),
b11,(a22*a00-a02*a20),(-a12*a00+a02*a10),
b21,(-a21*a00+a01*a20),(a11*a00-a01*a10))/det;}
#if USE_EXACT_SRGB_CONVERSIONS
vec3 toLinearSpaceExact(vec3 color)
{vec3 nearZeroSection=0.0773993808*color;vec3 remainingSection=pow(0.947867299*(color+vec3(0.055)),vec3(2.4));
#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)
return mix(remainingSection,nearZeroSection,lessThanEqual(color,vec3(0.04045)));
#else
return
vec3(
color.r<=0.04045 ? nearZeroSection.r : remainingSection.r,
color.g<=0.04045 ? nearZeroSection.g : remainingSection.g,
color.b<=0.04045 ? nearZeroSection.b : remainingSection.b);
#endif
}
vec3 toGammaSpaceExact(vec3 color)
{vec3 nearZeroSection=12.92*color;vec3 remainingSection=1.055*pow(color,vec3(0.41666))-vec3(0.055);
#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)
return mix(remainingSection,nearZeroSection,lessThanEqual(color,vec3(0.0031308)));
#else
return
vec3(
color.r<=0.0031308 ? nearZeroSection.r : remainingSection.r,
color.g<=0.0031308 ? nearZeroSection.g : remainingSection.g,
color.b<=0.0031308 ? nearZeroSection.b : remainingSection.b);
#endif
}
#endif
float toLinearSpace(float color)
{
#if USE_EXACT_SRGB_CONVERSIONS
float nearZeroSection=0.0773993808*color;float remainingSection=pow(0.947867299*(color+0.055),2.4);return color<=0.04045 ? nearZeroSection : remainingSection;
#else
return pow(color,LinearEncodePowerApprox);
#endif
}
vec3 toLinearSpace(vec3 color)
{
#if USE_EXACT_SRGB_CONVERSIONS
return toLinearSpaceExact(color);
#else
return pow(color,vec3(LinearEncodePowerApprox));
#endif
}
vec4 toLinearSpace(vec4 color)
{
#if USE_EXACT_SRGB_CONVERSIONS
return vec4(toLinearSpaceExact(color.rgb),color.a);
#else
return vec4(pow(color.rgb,vec3(LinearEncodePowerApprox)),color.a);
#endif
}
float toGammaSpace(float color)
{
#if USE_EXACT_SRGB_CONVERSIONS
float nearZeroSection=12.92*color;float remainingSection=1.055*pow(color,0.41666)-0.055;return color<=0.0031308 ? nearZeroSection : remainingSection;
#else
return pow(color,GammaEncodePowerApprox);
#endif
}
vec3 toGammaSpace(vec3 color)
{
#if USE_EXACT_SRGB_CONVERSIONS
return toGammaSpaceExact(color);
#else
return pow(color,vec3(GammaEncodePowerApprox));
#endif
}
vec4 toGammaSpace(vec4 color)
{
#if USE_EXACT_SRGB_CONVERSIONS
return vec4(toGammaSpaceExact(color.rgb),color.a);
#else
return vec4(pow(color.rgb,vec3(GammaEncodePowerApprox)),color.a);
#endif
}
float square(float value)
{return value*value;}
vec3 square(vec3 value)
{return value*value;}
float pow5(float value) {float sq=value*value;return sq*sq*value;}
float getLuminance(vec3 color)
{return saturate(dot(color,LuminanceEncodeApprox));}
float getRand(vec2 seed) {return fract(sin(dot(seed.xy ,vec2(12.9898,78.233)))*43758.5453);}
float dither(vec2 seed,float varianceAmount) {float rand=getRand(seed);float normVariance=varianceAmount/255.0;float dither=mix(-normVariance,normVariance,rand);return dither;}
const float rgbdMaxRange=255.;vec4 toRGBD(vec3 color) {float maxRGB=maxEps(max(color.r,max(color.g,color.b)));float D =max(rgbdMaxRange/maxRGB,1.);D =saturate(floor(D)/255.);vec3 rgb=color.rgb*D;rgb=toGammaSpace(rgb);return vec4(saturate(rgb),D);}
vec3 fromRGBD(vec4 rgbd) {rgbd.rgb=toLinearSpace(rgbd.rgb);return rgbd.rgb/rgbd.a;}
vec3 parallaxCorrectNormal( vec3 vertexPos,vec3 origVec,vec3 cubeSize,vec3 cubePos ) {vec3 invOrigVec=vec3(1.)/origVec;vec3 halfSize=cubeSize*0.5;vec3 intersecAtMaxPlane=(cubePos+halfSize-vertexPos)*invOrigVec;vec3 intersecAtMinPlane=(cubePos-halfSize-vertexPos)*invOrigVec;vec3 largestIntersec=max(intersecAtMaxPlane,intersecAtMinPlane);float distance=min(min(largestIntersec.x,largestIntersec.y),largestIntersec.z);vec3 intersectPositionWS=vertexPos+origVec*distance;return intersectPositionWS-cubePos;}
vec3 equirectangularToCubemapDirection(vec2 uv) {float longitude=uv.x*TWO_PI-PI;float latitude=HALF_PI-uv.y*PI;vec3 direction;direction.x=cos(latitude)*sin(longitude);direction.y=sin(latitude);direction.z=cos(latitude)*cos(longitude);return direction;}
float sqrtClamped(float value) {return sqrt(max(value,0.));}
float avg(vec3 value) {return dot(value,vec3(0.333333333));}
#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE) 
uint extractBits(uint value,int offset,int width) {return (value>>offset) & ((1u<<width)-1u);}
int onlyBitPosition(uint value) {return (floatBitsToInt(float(value))>>23)-0x7f;}
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const helperFunctions = {
    name,
    shader
}; //# sourceMappingURL=helperFunctions.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/bayerDitherFunctions.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "bayerDitherFunctions",
    ()=>bayerDitherFunctions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "bayerDitherFunctions";
const shader = `float bayerDither2(vec2 _P) {return mod(2.0*_P.y+_P.x+1.0,4.0);}
float bayerDither4(vec2 _P) {vec2 P1=mod(_P,2.0); 
vec2 P2=floor(0.5*mod(_P,4.0)); 
return 4.0*bayerDither2(P1)+bayerDither2(P2);}
float bayerDither8(vec2 _P) {vec2 P1=mod(_P,2.0); 
vec2 P2=floor(0.5 *mod(_P,4.0)); 
vec2 P4=floor(0.25*mod(_P,8.0)); 
return 4.0*(4.0*bayerDither2(P1)+bayerDither2(P2))+bayerDither2(P4);}
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const bayerDitherFunctions = {
    name,
    shader
}; //# sourceMappingURL=bayerDitherFunctions.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/shadowMapFragmentExtraDeclaration.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "shadowMapFragmentExtraDeclaration",
    ()=>shadowMapFragmentExtraDeclaration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$packingFunctions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/packingFunctions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$bayerDitherFunctions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/bayerDitherFunctions.js [app-ssr] (ecmascript)");
;
;
;
const name = "shadowMapFragmentExtraDeclaration";
const shader = `#if SM_FLOAT==0
#include<packingFunctions>
#endif
#if SM_SOFTTRANSPARENTSHADOW==1
#include<bayerDitherFunctions>
uniform vec2 softTransparentShadowSM;
#endif
varying float vDepthMetricSM;
#if SM_USEDISTANCE==1
uniform vec3 lightDataSM;varying vec3 vPositionWSM;
#endif
uniform vec3 biasAndScaleSM;uniform vec2 depthValuesSM;
#if defined(SM_DEPTHCLAMP) && SM_DEPTHCLAMP==1
varying float zSM;
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const shadowMapFragmentExtraDeclaration = {
    name,
    shader
}; //# sourceMappingURL=shadowMapFragmentExtraDeclaration.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/shadowMapFragment.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "shadowMapFragment",
    ()=>shadowMapFragment
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "shadowMapFragment";
const shader = `float depthSM=vDepthMetricSM;
#if defined(SM_DEPTHCLAMP) && SM_DEPTHCLAMP==1
#if SM_USEDISTANCE==1
depthSM=(length(vPositionWSM-lightDataSM)+depthValuesSM.x)/depthValuesSM.y+biasAndScaleSM.x;
#else
#ifdef USE_REVERSE_DEPTHBUFFER
depthSM=(-zSM+depthValuesSM.x)/depthValuesSM.y+biasAndScaleSM.x;
#else
depthSM=(zSM+depthValuesSM.x)/depthValuesSM.y+biasAndScaleSM.x;
#endif
#endif
depthSM=clamp(depthSM,0.0,1.0);
#ifdef USE_REVERSE_DEPTHBUFFER
gl_FragDepth=clamp(1.0-depthSM,0.0,1.0);
#else
gl_FragDepth=clamp(depthSM,0.0,1.0); 
#endif
#elif SM_USEDISTANCE==1
depthSM=(length(vPositionWSM-lightDataSM)+depthValuesSM.x)/depthValuesSM.y+biasAndScaleSM.x;
#endif
#if SM_ESM==1
depthSM=clamp(exp(-min(87.,biasAndScaleSM.z*depthSM)),0.,1.);
#endif
#if SM_FLOAT==1
gl_FragColor=vec4(depthSM,1.0,1.0,1.0);
#else
gl_FragColor=pack(depthSM);
#endif
return;`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const shadowMapFragment = {
    name,
    shader
}; //# sourceMappingURL=shadowMapFragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/sceneVertexDeclaration.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "sceneVertexDeclaration",
    ()=>sceneVertexDeclaration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "sceneVertexDeclaration";
const shader = `uniform mat4 viewProjection;
#ifdef MULTIVIEW
uniform mat4 viewProjectionR;
#endif
uniform mat4 view;uniform mat4 projection;uniform vec4 vEyePosition;
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const sceneVertexDeclaration = {
    name,
    shader
}; //# sourceMappingURL=sceneVertexDeclaration.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/meshVertexDeclaration.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "meshVertexDeclaration",
    ()=>meshVertexDeclaration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "meshVertexDeclaration";
const shader = `uniform mat4 world;uniform float visibility;
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const meshVertexDeclaration = {
    name,
    shader
}; //# sourceMappingURL=meshVertexDeclaration.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/shadowMapVertexDeclaration.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "shadowMapVertexDeclaration",
    ()=>shadowMapVertexDeclaration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$sceneVertexDeclaration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/sceneVertexDeclaration.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$meshVertexDeclaration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/meshVertexDeclaration.js [app-ssr] (ecmascript)");
;
;
;
const name = "shadowMapVertexDeclaration";
const shader = `#include<sceneVertexDeclaration>
#include<meshVertexDeclaration>
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const shadowMapVertexDeclaration = {
    name,
    shader
}; //# sourceMappingURL=shadowMapVertexDeclaration.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/sceneUboDeclaration.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "sceneUboDeclaration",
    ()=>sceneUboDeclaration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "sceneUboDeclaration";
const shader = `layout(std140,column_major) uniform;uniform Scene {mat4 viewProjection;
#ifdef MULTIVIEW
mat4 viewProjectionR;
#endif 
mat4 view;mat4 projection;vec4 vEyePosition;};
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const sceneUboDeclaration = {
    name,
    shader
}; //# sourceMappingURL=sceneUboDeclaration.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/meshUboDeclaration.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "meshUboDeclaration",
    ()=>meshUboDeclaration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "meshUboDeclaration";
const shader = `#ifdef WEBGL2
uniform mat4 world;uniform float visibility;
#else
layout(std140,column_major) uniform;uniform Mesh
{mat4 world;float visibility;};
#endif
#define WORLD_UBO
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const meshUboDeclaration = {
    name,
    shader
}; //# sourceMappingURL=meshUboDeclaration.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/shadowMapUboDeclaration.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "shadowMapUboDeclaration",
    ()=>shadowMapUboDeclaration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$sceneUboDeclaration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/sceneUboDeclaration.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$meshUboDeclaration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/meshUboDeclaration.js [app-ssr] (ecmascript)");
;
;
;
const name = "shadowMapUboDeclaration";
const shader = `layout(std140,column_major) uniform;
#include<sceneUboDeclaration>
#include<meshUboDeclaration>
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const shadowMapUboDeclaration = {
    name,
    shader
}; //# sourceMappingURL=shadowMapUboDeclaration.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/shadowMapVertexExtraDeclaration.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "shadowMapVertexExtraDeclaration",
    ()=>shadowMapVertexExtraDeclaration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "shadowMapVertexExtraDeclaration";
const shader = `#if SM_NORMALBIAS==1
uniform vec3 lightDataSM;
#endif
uniform vec3 biasAndScaleSM;uniform vec2 depthValuesSM;varying float vDepthMetricSM;
#if SM_USEDISTANCE==1
varying vec3 vPositionWSM;
#endif
#if defined(SM_DEPTHCLAMP) && SM_DEPTHCLAMP==1
varying float zSM;
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const shadowMapVertexExtraDeclaration = {
    name,
    shader
}; //# sourceMappingURL=shadowMapVertexExtraDeclaration.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/shadowMapVertexNormalBias.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "shadowMapVertexNormalBias",
    ()=>shadowMapVertexNormalBias
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "shadowMapVertexNormalBias";
const shader = `#if SM_NORMALBIAS==1
#if SM_DIRECTIONINLIGHTDATA==1
vec3 worldLightDirSM=normalize(-lightDataSM.xyz);
#else
vec3 directionToLightSM=lightDataSM.xyz-worldPos.xyz;vec3 worldLightDirSM=normalize(directionToLightSM);
#endif
float ndlSM=dot(vNormalW,worldLightDirSM);float sinNLSM=sqrt(1.0-ndlSM*ndlSM);float normalBiasSM=biasAndScaleSM.y*sinNLSM;worldPos.xyz-=vNormalW*normalBiasSM;
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const shadowMapVertexNormalBias = {
    name,
    shader
}; //# sourceMappingURL=shadowMapVertexNormalBias.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/shadowMapVertexMetric.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "shadowMapVertexMetric",
    ()=>shadowMapVertexMetric
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "shadowMapVertexMetric";
const shader = `#if SM_USEDISTANCE==1
vPositionWSM=worldPos.xyz;
#endif
#if SM_DEPTHTEXTURE==1
#ifdef IS_NDC_HALF_ZRANGE
#define BIASFACTOR 0.5
#else
#define BIASFACTOR 1.0
#endif
#ifdef USE_REVERSE_DEPTHBUFFER
gl_Position.z-=biasAndScaleSM.x*gl_Position.w*BIASFACTOR;
#else
gl_Position.z+=biasAndScaleSM.x*gl_Position.w*BIASFACTOR;
#endif
#endif
#if defined(SM_DEPTHCLAMP) && SM_DEPTHCLAMP==1
zSM=gl_Position.z;gl_Position.z=0.0;
#elif SM_USEDISTANCE==0
#ifdef USE_REVERSE_DEPTHBUFFER
vDepthMetricSM=(-gl_Position.z+depthValuesSM.x)/depthValuesSM.y+biasAndScaleSM.x;
#else
vDepthMetricSM=(gl_Position.z+depthValuesSM.x)/depthValuesSM.y+biasAndScaleSM.x;
#endif
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const shadowMapVertexMetric = {
    name,
    shader
}; //# sourceMappingURL=shadowMapVertexMetric.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/shadowMapFragmentSoftTransparentShadow.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "shadowMapFragmentSoftTransparentShadow",
    ()=>shadowMapFragmentSoftTransparentShadow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "shadowMapFragmentSoftTransparentShadow";
const shader = `#if SM_SOFTTRANSPARENTSHADOW==1
if ((bayerDither8(floor(mod(gl_FragCoord.xy,8.0))))/64.0>=softTransparentShadowSM.x*alpha) discard;
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const shadowMapFragmentSoftTransparentShadow = {
    name,
    shader
}; //# sourceMappingURL=shadowMapFragmentSoftTransparentShadow.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/clusteredLightingFunctions.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "clusteredLightingFunctions",
    ()=>clusteredLightingFunctions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "clusteredLightingFunctions";
const shader = `struct ClusteredLight {vec4 vLightData;vec4 vLightDiffuse;vec4 vLightSpecular;vec4 vLightDirection;vec4 vLightFalloff;};
#define inline
ClusteredLight getClusteredLight(sampler2D lightDataTexture,int index) {return ClusteredLight(
texelFetch(lightDataTexture,ivec2(0,index),0),
texelFetch(lightDataTexture,ivec2(1,index),0),
texelFetch(lightDataTexture,ivec2(2,index),0),
texelFetch(lightDataTexture,ivec2(3,index),0),
texelFetch(lightDataTexture,ivec2(4,index),0)
);}
int getClusteredSliceIndex(vec2 sliceData,float viewDepth) {return int(log(viewDepth)*sliceData.x+sliceData.y);}
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const clusteredLightingFunctions = {
    name,
    shader
}; //# sourceMappingURL=clusteredLightingFunctions.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/backgroundVertexDeclaration.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "backgroundVertexDeclaration",
    ()=>backgroundVertexDeclaration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "backgroundVertexDeclaration";
const shader = `uniform mat4 view;uniform mat4 viewProjection;
#ifdef MULTIVIEW
uniform mat4 viewProjectionR;
#endif
uniform float shadowLevel;
#ifdef DIFFUSE
uniform mat4 diffuseMatrix;uniform vec2 vDiffuseInfos;
#endif
#ifdef REFLECTION
uniform vec2 vReflectionInfos;uniform mat4 reflectionMatrix;uniform vec3 vReflectionMicrosurfaceInfos;uniform float fFovMultiplier;
#endif
#ifdef POINTSIZE
uniform float pointSize;
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const backgroundVertexDeclaration = {
    name,
    shader
}; //# sourceMappingURL=backgroundVertexDeclaration.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/backgroundUboDeclaration.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "backgroundUboDeclaration",
    ()=>backgroundUboDeclaration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$sceneUboDeclaration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/sceneUboDeclaration.js [app-ssr] (ecmascript)");
;
;
const name = "backgroundUboDeclaration";
const shader = `layout(std140,column_major) uniform;uniform Material
{uniform vec4 vPrimaryColor;uniform vec4 vPrimaryColorShadow;uniform vec2 vDiffuseInfos;uniform mat4 diffuseMatrix;uniform float fFovMultiplier;uniform float pointSize;uniform float shadowLevel;uniform float alpha;uniform vec3 vBackgroundCenter;uniform vec4 vReflectionControl;uniform vec2 projectedGroundInfos;uniform vec2 vReflectionInfos;uniform mat4 reflectionMatrix;uniform vec3 vReflectionMicrosurfaceInfos;};
#include<sceneUboDeclaration>
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const backgroundUboDeclaration = {
    name,
    shader
}; //# sourceMappingURL=backgroundUboDeclaration.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/fogVertexDeclaration.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "fogVertexDeclaration",
    ()=>fogVertexDeclaration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "fogVertexDeclaration";
const shader = `#ifdef FOG
varying vec3 vFogDistance;
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const fogVertexDeclaration = {
    name,
    shader
}; //# sourceMappingURL=fogVertexDeclaration.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/lightVxFragmentDeclaration.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "lightVxFragmentDeclaration",
    ()=>lightVxFragmentDeclaration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "lightVxFragmentDeclaration";
const shader = `#ifdef LIGHT{X}
uniform vec4 vLightData{X};uniform vec4 vLightDiffuse{X};
#ifdef SPECULARTERM
uniform vec4 vLightSpecular{X};
#else
vec4 vLightSpecular{X}=vec4(0.);
#endif
#ifdef SHADOW{X}
#ifdef SHADOWCSM{X}
uniform mat4 lightMatrix{X}[SHADOWCSMNUM_CASCADES{X}];varying vec4 vPositionFromLight{X}[SHADOWCSMNUM_CASCADES{X}];varying float vDepthMetric{X}[SHADOWCSMNUM_CASCADES{X}];varying vec4 vPositionFromCamera{X};
#elif defined(SHADOWCUBE{X})
#else
varying vec4 vPositionFromLight{X};varying float vDepthMetric{X};uniform mat4 lightMatrix{X};
#endif
uniform vec4 shadowsInfo{X};uniform vec2 depthValues{X};
#endif
#ifdef SPOTLIGHT{X}
uniform vec4 vLightDirection{X};uniform vec4 vLightFalloff{X};
#elif defined(POINTLIGHT{X})
uniform vec4 vLightFalloff{X};
#elif defined(HEMILIGHT{X})
uniform vec3 vLightGround{X};
#endif
#if defined(AREALIGHT{X})
uniform vec4 vLightWidth{X};uniform vec4 vLightHeight{X};
#endif
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const lightVxFragmentDeclaration = {
    name,
    shader
}; //# sourceMappingURL=lightVxFragmentDeclaration.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/lightVxUboDeclaration.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "lightVxUboDeclaration",
    ()=>lightVxUboDeclaration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "lightVxUboDeclaration";
const shader = `#ifdef LIGHT{X}
uniform Light{X}
{vec4 vLightData;vec4 vLightDiffuse;vec4 vLightSpecular;
#ifdef SPOTLIGHT{X}
vec4 vLightDirection;vec4 vLightFalloff;
#elif defined(POINTLIGHT{X})
vec4 vLightFalloff;
#elif defined(HEMILIGHT{X})
vec3 vLightGround;
#elif defined(CLUSTLIGHT{X})
vec2 vSliceData;vec2 vSliceRanges[CLUSTLIGHT_SLICES];
#endif
#if defined(AREALIGHT{X})
vec4 vLightWidth;vec4 vLightHeight;
#endif
vec4 shadowsInfo;vec2 depthValues;} light{X};
#ifdef SHADOW{X}
#ifdef SHADOWCSM{X}
uniform mat4 lightMatrix{X}[SHADOWCSMNUM_CASCADES{X}];varying vec4 vPositionFromLight{X}[SHADOWCSMNUM_CASCADES{X}];varying float vDepthMetric{X}[SHADOWCSMNUM_CASCADES{X}];varying vec4 vPositionFromCamera{X};
#elif defined(SHADOWCUBE{X})
#else
varying vec4 vPositionFromLight{X};varying float vDepthMetric{X};uniform mat4 lightMatrix{X};
#endif
#endif
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const lightVxUboDeclaration = {
    name,
    shader
}; //# sourceMappingURL=lightVxUboDeclaration.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/logDepthDeclaration.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "logDepthDeclaration",
    ()=>logDepthDeclaration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "logDepthDeclaration";
const shader = `#ifdef LOGARITHMICDEPTH
uniform float logarithmicDepthConstant;varying float vFragmentDepth;
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const logDepthDeclaration = {
    name,
    shader
}; //# sourceMappingURL=logDepthDeclaration.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/fogVertex.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "fogVertex",
    ()=>fogVertex
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "fogVertex";
const shader = `#ifdef FOG
vFogDistance=(view*worldPos).xyz;
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const fogVertex = {
    name,
    shader
}; //# sourceMappingURL=fogVertex.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/shadowsVertex.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "shadowsVertex",
    ()=>shadowsVertex
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "shadowsVertex";
const shader = `#ifdef SHADOWS
#if defined(SHADOWCSM{X})
vPositionFromCamera{X}=view*worldPos;for (int i=0; i<SHADOWCSMNUM_CASCADES{X}; i++) {vPositionFromLight{X}[i]=lightMatrix{X}[i]*worldPos;
#ifdef USE_REVERSE_DEPTHBUFFER
vDepthMetric{X}[i]=(-vPositionFromLight{X}[i].z+light{X}.depthValues.x)/light{X}.depthValues.y;
#else
vDepthMetric{X}[i]=(vPositionFromLight{X}[i].z+light{X}.depthValues.x)/light{X}.depthValues.y;
#endif
}
#elif defined(SHADOW{X}) && !defined(SHADOWCUBE{X})
vPositionFromLight{X}=lightMatrix{X}*worldPos;
#ifdef USE_REVERSE_DEPTHBUFFER
vDepthMetric{X}=(-vPositionFromLight{X}.z+light{X}.depthValues.x)/light{X}.depthValues.y;
#else
vDepthMetric{X}=(vPositionFromLight{X}.z+light{X}.depthValues.x)/light{X}.depthValues.y;
#endif
#endif
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const shadowsVertex = {
    name,
    shader
}; //# sourceMappingURL=shadowsVertex.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/logDepthVertex.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "logDepthVertex",
    ()=>logDepthVertex
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "logDepthVertex";
const shader = `#ifdef LOGARITHMICDEPTH
vFragmentDepth=1.0+gl_Position.w;gl_Position.z=log2(max(0.000001,vFragmentDepth))*logarithmicDepthConstant;
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const logDepthVertex = {
    name,
    shader
}; //# sourceMappingURL=logDepthVertex.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/backgroundFragmentDeclaration.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "backgroundFragmentDeclaration",
    ()=>backgroundFragmentDeclaration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "backgroundFragmentDeclaration";
const shader = `uniform vec4 vEyePosition;uniform vec4 vPrimaryColor;
#ifdef USEHIGHLIGHTANDSHADOWCOLORS
uniform vec4 vPrimaryColorShadow;
#endif
uniform float shadowLevel;uniform float alpha;
#ifdef DIFFUSE
uniform vec2 vDiffuseInfos;
#endif
#ifdef REFLECTION
uniform vec2 vReflectionInfos;uniform mat4 reflectionMatrix;uniform vec3 vReflectionMicrosurfaceInfos;
#endif
#if defined(REFLECTIONFRESNEL) || defined(OPACITYFRESNEL)
uniform vec3 vBackgroundCenter;
#endif
#ifdef REFLECTIONFRESNEL
uniform vec4 vReflectionControl;
#endif
#if defined(REFLECTIONMAP_SPHERICAL) || defined(REFLECTIONMAP_PROJECTION) || defined(REFRACTION)
uniform mat4 view;
#endif
#ifdef PROJECTED_GROUND
uniform vec2 projectedGroundInfos;
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const backgroundFragmentDeclaration = {
    name,
    shader
}; //# sourceMappingURL=backgroundFragmentDeclaration.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/reflectionFunction.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "reflectionFunction",
    ()=>reflectionFunction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "reflectionFunction";
const shader = `vec3 computeFixedEquirectangularCoords(vec4 worldPos,vec3 worldNormal,vec3 direction)
{float lon=atan(direction.z,direction.x);float lat=acos(direction.y);vec2 sphereCoords=vec2(lon,lat)*RECIPROCAL_PI2*2.0;float s=sphereCoords.x*0.5+0.5;float t=sphereCoords.y;return vec3(s,t,0); }
vec3 computeMirroredFixedEquirectangularCoords(vec4 worldPos,vec3 worldNormal,vec3 direction)
{float lon=atan(direction.z,direction.x);float lat=acos(direction.y);vec2 sphereCoords=vec2(lon,lat)*RECIPROCAL_PI2*2.0;float s=sphereCoords.x*0.5+0.5;float t=sphereCoords.y;return vec3(1.0-s,t,0); }
vec3 computeEquirectangularCoords(vec4 worldPos,vec3 worldNormal,vec3 eyePosition,mat4 reflectionMatrix)
{vec3 cameraToVertex=normalize(worldPos.xyz-eyePosition);vec3 r=normalize(reflect(cameraToVertex,worldNormal));r=vec3(reflectionMatrix*vec4(r,0));float lon=atan(r.z,r.x);float lat=acos(r.y);vec2 sphereCoords=vec2(lon,lat)*RECIPROCAL_PI2*2.0;float s=sphereCoords.x*0.5+0.5;float t=sphereCoords.y;return vec3(s,t,0);}
vec3 computeSphericalCoords(vec4 worldPos,vec3 worldNormal,mat4 view,mat4 reflectionMatrix)
{vec3 viewDir=normalize(vec3(view*worldPos));vec3 viewNormal=normalize(vec3(view*vec4(worldNormal,0.0)));vec3 r=reflect(viewDir,viewNormal);r=vec3(reflectionMatrix*vec4(r,0));r.z=r.z-1.0;float m=2.0*length(r);return vec3(r.x/m+0.5,1.0-r.y/m-0.5,0);}
vec3 computePlanarCoords(vec4 worldPos,vec3 worldNormal,vec3 eyePosition,mat4 reflectionMatrix)
{vec3 viewDir=worldPos.xyz-eyePosition;vec3 coords=normalize(reflect(viewDir,worldNormal));return vec3(reflectionMatrix*vec4(coords,1));}
vec3 computeCubicCoords(vec4 worldPos,vec3 worldNormal,vec3 eyePosition,mat4 reflectionMatrix)
{vec3 viewDir=normalize(worldPos.xyz-eyePosition);vec3 coords=reflect(viewDir,worldNormal);coords=vec3(reflectionMatrix*vec4(coords,0));
#ifdef INVERTCUBICMAP
coords.y*=-1.0;
#endif
return coords;}
vec3 computeCubicLocalCoords(vec4 worldPos,vec3 worldNormal,vec3 eyePosition,mat4 reflectionMatrix,vec3 reflectionSize,vec3 reflectionPosition)
{vec3 viewDir=normalize(worldPos.xyz-eyePosition);vec3 coords=reflect(viewDir,worldNormal);coords=parallaxCorrectNormal(worldPos.xyz,coords,reflectionSize,reflectionPosition);coords=vec3(reflectionMatrix*vec4(coords,0));
#ifdef INVERTCUBICMAP
coords.y*=-1.0;
#endif
return coords;}
vec3 computeProjectionCoords(vec4 worldPos,mat4 view,mat4 reflectionMatrix)
{return vec3(reflectionMatrix*(view*worldPos));}
vec3 computeSkyBoxCoords(vec3 positionW,mat4 reflectionMatrix)
{return vec3(reflectionMatrix*vec4(positionW,1.));}
#ifdef REFLECTION
vec3 computeReflectionCoords(vec4 worldPos,vec3 worldNormal)
{
#ifdef REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED
vec3 direction=normalize(vDirectionW);return computeMirroredFixedEquirectangularCoords(worldPos,worldNormal,direction);
#endif
#ifdef REFLECTIONMAP_EQUIRECTANGULAR_FIXED
vec3 direction=normalize(vDirectionW);return computeFixedEquirectangularCoords(worldPos,worldNormal,direction);
#endif
#ifdef REFLECTIONMAP_EQUIRECTANGULAR
return computeEquirectangularCoords(worldPos,worldNormal,vEyePosition.xyz,reflectionMatrix);
#endif
#ifdef REFLECTIONMAP_SPHERICAL
return computeSphericalCoords(worldPos,worldNormal,view,reflectionMatrix);
#endif
#ifdef REFLECTIONMAP_PLANAR
return computePlanarCoords(worldPos,worldNormal,vEyePosition.xyz,reflectionMatrix);
#endif
#ifdef REFLECTIONMAP_CUBIC
#ifdef USE_LOCAL_REFLECTIONMAP_CUBIC
return computeCubicLocalCoords(worldPos,worldNormal,vEyePosition.xyz,reflectionMatrix,vReflectionSize,vReflectionPosition);
#else
return computeCubicCoords(worldPos,worldNormal,vEyePosition.xyz,reflectionMatrix);
#endif
#endif
#ifdef REFLECTIONMAP_PROJECTION
return computeProjectionCoords(worldPos,view,reflectionMatrix);
#endif
#ifdef REFLECTIONMAP_SKYBOX
return computeSkyBoxCoords(vPositionUVW,reflectionMatrix);
#endif
#ifdef REFLECTIONMAP_EXPLICIT
return vec3(0,0,0);
#endif
}
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const reflectionFunction = {
    name,
    shader
}; //# sourceMappingURL=reflectionFunction.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/imageProcessingDeclaration.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "imageProcessingDeclaration",
    ()=>imageProcessingDeclaration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "imageProcessingDeclaration";
const shader = `#ifdef EXPOSURE
uniform float exposureLinear;
#endif
#ifdef CONTRAST
uniform float contrast;
#endif
#if defined(VIGNETTE) || defined(DITHER)
uniform vec2 vInverseScreenSize;
#endif
#ifdef VIGNETTE
uniform vec4 vignetteSettings1;uniform vec4 vignetteSettings2;
#endif
#ifdef COLORCURVES
uniform vec4 vCameraColorCurveNegative;uniform vec4 vCameraColorCurveNeutral;uniform vec4 vCameraColorCurvePositive;
#endif
#ifdef COLORGRADING
#ifdef COLORGRADING3D
uniform highp sampler3D txColorTransform;
#else
uniform sampler2D txColorTransform;
#endif
uniform vec4 colorTransformSettings;
#endif
#ifdef DITHER
uniform float ditherIntensity;
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const imageProcessingDeclaration = {
    name,
    shader
}; //# sourceMappingURL=imageProcessingDeclaration.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/lightFragmentDeclaration.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "lightFragmentDeclaration",
    ()=>lightFragmentDeclaration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "lightFragmentDeclaration";
const shader = `#ifdef LIGHT{X}
uniform vec4 vLightData{X};uniform vec4 vLightDiffuse{X};
#ifdef SPECULARTERM
uniform vec4 vLightSpecular{X};
#else
vec4 vLightSpecular{X}=vec4(0.);
#endif
#ifdef SHADOW{X}
#ifdef SHADOWCSM{X}
uniform mat4 lightMatrix{X}[SHADOWCSMNUM_CASCADES{X}];uniform float viewFrustumZ{X}[SHADOWCSMNUM_CASCADES{X}];uniform float frustumLengths{X}[SHADOWCSMNUM_CASCADES{X}];uniform float cascadeBlendFactor{X};varying vec4 vPositionFromLight{X}[SHADOWCSMNUM_CASCADES{X}];varying float vDepthMetric{X}[SHADOWCSMNUM_CASCADES{X}];varying vec4 vPositionFromCamera{X};
#if defined(SHADOWPCSS{X})
uniform highp sampler2DArrayShadow shadowTexture{X};uniform highp sampler2DArray depthTexture{X};uniform vec2 lightSizeUVCorrection{X}[SHADOWCSMNUM_CASCADES{X}];uniform float depthCorrection{X}[SHADOWCSMNUM_CASCADES{X}];uniform float penumbraDarkness{X};
#elif defined(SHADOWPCF{X})
uniform highp sampler2DArrayShadow shadowTexture{X};
#else
uniform highp sampler2DArray shadowTexture{X};
#endif
#ifdef SHADOWCSMDEBUG{X}
const vec3 vCascadeColorsMultiplier{X}[8]=vec3[8]
(
vec3 ( 1.5,0.0,0.0 ),
vec3 ( 0.0,1.5,0.0 ),
vec3 ( 0.0,0.0,5.5 ),
vec3 ( 1.5,0.0,5.5 ),
vec3 ( 1.5,1.5,0.0 ),
vec3 ( 1.0,1.0,1.0 ),
vec3 ( 0.0,1.0,5.5 ),
vec3 ( 0.5,3.5,0.75 )
);vec3 shadowDebug{X};
#endif
#ifdef SHADOWCSMUSESHADOWMAXZ{X}
int index{X}=-1;
#else
int index{X}=SHADOWCSMNUM_CASCADES{X}-1;
#endif
float diff{X}=0.;
#elif defined(SHADOWCUBE{X})
uniform samplerCube shadowTexture{X};
#else
varying vec4 vPositionFromLight{X};varying float vDepthMetric{X};
#if defined(SHADOWPCSS{X})
uniform highp sampler2DShadow shadowTexture{X};uniform highp sampler2D depthTexture{X};
#elif defined(SHADOWPCF{X})
uniform highp sampler2DShadow shadowTexture{X};
#else
uniform sampler2D shadowTexture{X};
#endif
uniform mat4 lightMatrix{X};
#endif
uniform vec4 shadowsInfo{X};uniform vec2 depthValues{X};
#endif
#ifdef SPOTLIGHT{X}
uniform vec4 vLightDirection{X};uniform vec4 vLightFalloff{X};
#elif defined(POINTLIGHT{X})
uniform vec4 vLightFalloff{X};
#elif defined(HEMILIGHT{X})
uniform vec3 vLightGround{X};
#endif
#ifdef AREALIGHT{X}
uniform vec4 vLightWidth{X};uniform vec4 vLightHeight{X};
#endif
#ifdef IESLIGHTTEXTURE{X}
uniform sampler2D iesLightTexture{X};
#endif
#ifdef PROJECTEDLIGHTTEXTURE{X}
uniform mat4 textureProjectionMatrix{X};uniform sampler2D projectionLightTexture{X};
#endif
#ifdef CLUSTLIGHT{X}
uniform vec2 vSliceData{X};uniform vec2 vSliceRanges{X}[CLUSTLIGHT_SLICES];uniform sampler2D lightDataTexture{X};uniform highp sampler2D tileMaskTexture{X};
#endif
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const lightFragmentDeclaration = {
    name,
    shader
}; //# sourceMappingURL=lightFragmentDeclaration.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/lightUboDeclaration.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "lightUboDeclaration",
    ()=>lightUboDeclaration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "lightUboDeclaration";
const shader = `#ifdef LIGHT{X}
uniform Light{X}
{vec4 vLightData;vec4 vLightDiffuse;vec4 vLightSpecular;
#ifdef SPOTLIGHT{X}
vec4 vLightDirection;vec4 vLightFalloff;
#elif defined(POINTLIGHT{X})
vec4 vLightFalloff;
#elif defined(HEMILIGHT{X})
vec3 vLightGround;
#elif defined(CLUSTLIGHT{X})
vec2 vSliceData;vec2 vSliceRanges[CLUSTLIGHT_SLICES];
#endif
#if defined(AREALIGHT{X})
vec4 vLightWidth;vec4 vLightHeight;
#endif
vec4 shadowsInfo;vec2 depthValues;} light{X};
#ifdef IESLIGHTTEXTURE{X}
uniform sampler2D iesLightTexture{X};
#endif
#ifdef PROJECTEDLIGHTTEXTURE{X}
uniform mat4 textureProjectionMatrix{X};uniform sampler2D projectionLightTexture{X};
#endif
#ifdef CLUSTLIGHT{X}
uniform sampler2D lightDataTexture{X};uniform highp sampler2D tileMaskTexture{X};
#endif
#ifdef SHADOW{X}
#ifdef SHADOWCSM{X}
uniform mat4 lightMatrix{X}[SHADOWCSMNUM_CASCADES{X}];uniform float viewFrustumZ{X}[SHADOWCSMNUM_CASCADES{X}];uniform float frustumLengths{X}[SHADOWCSMNUM_CASCADES{X}];uniform float cascadeBlendFactor{X};varying vec4 vPositionFromLight{X}[SHADOWCSMNUM_CASCADES{X}];varying float vDepthMetric{X}[SHADOWCSMNUM_CASCADES{X}];varying vec4 vPositionFromCamera{X};
#if defined(SHADOWPCSS{X})
uniform highp sampler2DArrayShadow shadowTexture{X};uniform highp sampler2DArray depthTexture{X};uniform vec2 lightSizeUVCorrection{X}[SHADOWCSMNUM_CASCADES{X}];uniform float depthCorrection{X}[SHADOWCSMNUM_CASCADES{X}];uniform float penumbraDarkness{X};
#elif defined(SHADOWPCF{X})
uniform highp sampler2DArrayShadow shadowTexture{X};
#else
uniform highp sampler2DArray shadowTexture{X};
#endif
#ifdef SHADOWCSMDEBUG{X}
const vec3 vCascadeColorsMultiplier{X}[8]=vec3[8]
(
vec3 ( 1.5,0.0,0.0 ),
vec3 ( 0.0,1.5,0.0 ),
vec3 ( 0.0,0.0,5.5 ),
vec3 ( 1.5,0.0,5.5 ),
vec3 ( 1.5,1.5,0.0 ),
vec3 ( 1.0,1.0,1.0 ),
vec3 ( 0.0,1.0,5.5 ),
vec3 ( 0.5,3.5,0.75 )
);vec3 shadowDebug{X};
#endif
#ifdef SHADOWCSMUSESHADOWMAXZ{X}
int index{X}=-1;
#else
int index{X}=SHADOWCSMNUM_CASCADES{X}-1;
#endif
float diff{X}=0.;
#elif defined(SHADOWCUBE{X})
uniform samplerCube shadowTexture{X}; 
#else
varying vec4 vPositionFromLight{X};varying float vDepthMetric{X};
#if defined(SHADOWPCSS{X})
uniform highp sampler2DShadow shadowTexture{X};uniform highp sampler2D depthTexture{X};
#elif defined(SHADOWPCF{X})
uniform highp sampler2DShadow shadowTexture{X};
#else
uniform sampler2D shadowTexture{X};
#endif
uniform mat4 lightMatrix{X};
#endif
#endif
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const lightUboDeclaration = {
    name,
    shader
}; //# sourceMappingURL=lightUboDeclaration.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/ltcHelperFunctions.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "ltcHelperFunctions",
    ()=>ltcHelperFunctions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "ltcHelperFunctions";
const shader = `vec2 LTCUv( const in vec3 N,const in vec3 V,const in float roughness ) {const float LUTSIZE=64.0;const float LUTSCALE=( LUTSIZE-1.0 )/LUTSIZE;const float LUTBIAS=0.5/LUTSIZE;float dotNV=saturate( dot( N,V ) );vec2 uv=vec2( roughness,sqrt( 1.0-dotNV ) );uv=uv*LUTSCALE+LUTBIAS;return uv;}
float LTCClippedSphereFormFactor( const in vec3 f ) {float l=length( f );return max( ( l*l+f.z )/( l+1.0 ),0.0 );}
vec3 LTCEdgeVectorFormFactor( const in vec3 v1,const in vec3 v2 ) {float x=dot( v1,v2 );float y=abs( x );float a=0.8543985+( 0.4965155+0.0145206*y )*y;float b=3.4175940+( 4.1616724+y )*y;float v=a/b;float thetaSintheta=0.0;if( x>0.0 )
{thetaSintheta=v;}
else
{thetaSintheta=0.5*inversesqrt( max( 1.0-x*x,1e-7 ) )-v;}
return cross( v1,v2 )*thetaSintheta;}
vec3 LTCEvaluate( const in vec3 N,const in vec3 V,const in vec3 P,const in mat3 mInv,const in vec3 rectCoords[ 4 ] ) {vec3 v1=rectCoords[ 1 ]-rectCoords[ 0 ];vec3 v2=rectCoords[ 3 ]-rectCoords[ 0 ];vec3 lightNormal=cross( v1,v2 );if( dot( lightNormal,P-rectCoords[ 0 ] )<0.0 ) return vec3( 0.0 );vec3 T1,T2;T1=normalize( V-N*dot( V,N ) );T2=- cross( N,T1 ); 
mat3 mat=mInv*transposeMat3( mat3( T1,T2,N ) );vec3 coords[ 4 ];coords[ 0 ]=mat*( rectCoords[ 0 ]-P );coords[ 1 ]=mat*( rectCoords[ 1 ]-P );coords[ 2 ]=mat*( rectCoords[ 2 ]-P );coords[ 3 ]=mat*( rectCoords[ 3 ]-P );coords[ 0 ]=normalize( coords[ 0 ] );coords[ 1 ]=normalize( coords[ 1 ] );coords[ 2 ]=normalize( coords[ 2 ] );coords[ 3 ]=normalize( coords[ 3 ] );vec3 vectorFormFactor=vec3( 0.0 );vectorFormFactor+=LTCEdgeVectorFormFactor( coords[ 0 ],coords[ 1 ] );vectorFormFactor+=LTCEdgeVectorFormFactor( coords[ 1 ],coords[ 2 ] );vectorFormFactor+=LTCEdgeVectorFormFactor( coords[ 2 ],coords[ 3 ] );vectorFormFactor+=LTCEdgeVectorFormFactor( coords[ 3 ],coords[ 0 ] );float result=LTCClippedSphereFormFactor( vectorFormFactor );return vec3( result );}
struct areaLightData
{vec3 Diffuse;vec3 Specular;vec4 Fresnel;};
#define inline
areaLightData computeAreaLightSpecularDiffuseFresnel(const in sampler2D ltc1,const in sampler2D ltc2,const in vec3 viewDir,const in vec3 normal,const in vec3 position,const in vec3 lightPos,const in vec3 halfWidth,const in vec3 halfHeight,const in float roughness) 
{areaLightData result;vec3 rectCoords[ 4 ];rectCoords[ 0 ]=lightPos+halfWidth-halfHeight; 
rectCoords[ 1 ]=lightPos-halfWidth-halfHeight;rectCoords[ 2 ]=lightPos-halfWidth+halfHeight;rectCoords[ 3 ]=lightPos+halfWidth+halfHeight;
#ifdef SPECULARTERM
vec2 uv=LTCUv( normal,viewDir,roughness );vec4 t1=texture2D( ltc1,uv );vec4 t2=texture2D( ltc2,uv );mat3 mInv=mat3(
vec3( t1.x,0,t1.y ),
vec3( 0,1, 0 ),
vec3( t1.z,0,t1.w )
);result.Specular=LTCEvaluate( normal,viewDir,position,mInv,rectCoords );result.Fresnel=t2;
#endif
result.Diffuse=LTCEvaluate( normal,viewDir,position,mat3( 1.0 ),rectCoords );return result;}`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const ltcHelperFunctions = {
    name,
    shader
}; //# sourceMappingURL=ltcHelperFunctions.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/lightsFragmentFunctions.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "lightsFragmentFunctions",
    ()=>lightsFragmentFunctions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$ltcHelperFunctions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/ltcHelperFunctions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$clusteredLightingFunctions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/clusteredLightingFunctions.js [app-ssr] (ecmascript)");
;
;
;
const name = "lightsFragmentFunctions";
const shader = `struct lightingInfo
{vec3 diffuse;
#ifdef SPECULARTERM
vec3 specular;
#endif
#ifdef NDOTL
float ndl;
#endif
};lightingInfo computeLighting(vec3 viewDirectionW,vec3 vNormal,vec4 lightData,vec3 diffuseColor,vec3 specularColor,float range,float glossiness) {lightingInfo result;vec3 lightVectorW;float attenuation=1.0;if (lightData.w==0.)
{vec3 direction=lightData.xyz-vPositionW;attenuation=max(0.,1.0-length(direction)/range);lightVectorW=normalize(direction);}
else
{lightVectorW=normalize(-lightData.xyz);}
float ndl=max(0.,dot(vNormal,lightVectorW));
#ifdef NDOTL
result.ndl=ndl;
#endif
result.diffuse=ndl*diffuseColor*attenuation;
#ifdef SPECULARTERM
vec3 angleW=normalize(viewDirectionW+lightVectorW);float specComp=max(0.,dot(vNormal,angleW));specComp=pow(specComp,max(1.,glossiness));result.specular=specComp*specularColor*attenuation;
#endif
return result;}
float getAttenuation(float cosAngle,float exponent) {return max(0.,pow(cosAngle,exponent));}
float getIESAttenuation(float cosAngle,sampler2D iesLightSampler) {float angle=acos(cosAngle)/PI;return texture2D(iesLightSampler,vec2(angle,0.)).r;}
lightingInfo basicSpotLighting(vec3 viewDirectionW,vec3 lightVectorW,vec3 vNormal,float attenuation,vec3 diffuseColor,vec3 specularColor,float glossiness) {lightingInfo result; 
float ndl=max(0.,dot(vNormal,lightVectorW));
#ifdef NDOTL
result.ndl=ndl;
#endif
result.diffuse=ndl*diffuseColor*attenuation;
#ifdef SPECULARTERM
vec3 angleW=normalize(viewDirectionW+lightVectorW);float specComp=max(0.,dot(vNormal,angleW));specComp=pow(specComp,max(1.,glossiness));result.specular=specComp*specularColor*attenuation;
#endif
return result;}
lightingInfo computeIESSpotLighting(vec3 viewDirectionW,vec3 vNormal,vec4 lightData,vec4 lightDirection,vec3 diffuseColor,vec3 specularColor,float range,float glossiness,sampler2D iesLightSampler) { 
vec3 direction=lightData.xyz-vPositionW;vec3 lightVectorW=normalize(direction);float attenuation=max(0.,1.0-length(direction)/range);float dotProduct=dot(lightDirection.xyz,-lightVectorW);float cosAngle=max(0.,dotProduct);if (cosAngle>=lightDirection.w)
{ 
attenuation*=getIESAttenuation(dotProduct,iesLightSampler);return basicSpotLighting(viewDirectionW,lightVectorW,vNormal,attenuation,diffuseColor,specularColor,glossiness);}
lightingInfo result;result.diffuse=vec3(0.);
#ifdef SPECULARTERM
result.specular=vec3(0.);
#endif
#ifdef NDOTL
result.ndl=0.;
#endif
return result;}
lightingInfo computeSpotLighting(vec3 viewDirectionW,vec3 vNormal,vec4 lightData,vec4 lightDirection,vec3 diffuseColor,vec3 specularColor,float range,float glossiness) {vec3 direction=lightData.xyz-vPositionW;vec3 lightVectorW=normalize(direction);float attenuation=max(0.,1.0-length(direction)/range);float cosAngle=max(0.,dot(lightDirection.xyz,-lightVectorW));if (cosAngle>=lightDirection.w)
{ 
attenuation*=getAttenuation(cosAngle,lightData.w);return basicSpotLighting(viewDirectionW,lightVectorW,vNormal,attenuation,diffuseColor,specularColor,glossiness);}
lightingInfo result;result.diffuse=vec3(0.);
#ifdef SPECULARTERM
result.specular=vec3(0.);
#endif
#ifdef NDOTL
result.ndl=0.;
#endif
return result;}
lightingInfo computeHemisphericLighting(vec3 viewDirectionW,vec3 vNormal,vec4 lightData,vec3 diffuseColor,vec3 specularColor,vec3 groundColor,float glossiness) {lightingInfo result;float ndl=dot(vNormal,lightData.xyz)*0.5+0.5;
#ifdef NDOTL
result.ndl=ndl;
#endif
result.diffuse=mix(groundColor,diffuseColor,ndl);
#ifdef SPECULARTERM
vec3 angleW=normalize(viewDirectionW+lightData.xyz);float specComp=max(0.,dot(vNormal,angleW));specComp=pow(specComp,max(1.,glossiness));result.specular=specComp*specularColor;
#endif
return result;}
#define inline
vec3 computeProjectionTextureDiffuseLighting(sampler2D projectionLightSampler,mat4 textureProjectionMatrix,vec3 posW){vec4 strq=textureProjectionMatrix*vec4(posW,1.0);strq/=strq.w;vec3 textureColor=texture2D(projectionLightSampler,strq.xy).rgb;return textureColor;}
#if defined(AREALIGHTUSED) && defined(AREALIGHTSUPPORTED)
#include<ltcHelperFunctions>
uniform sampler2D areaLightsLTC1Sampler;uniform sampler2D areaLightsLTC2Sampler;
#define inline
lightingInfo computeAreaLighting(sampler2D ltc1,sampler2D ltc2,vec3 viewDirectionW,vec3 vNormal,vec3 vPosition,vec3 lightPosition,vec3 halfWidth,vec3 halfHeight,vec3 diffuseColor,vec3 specularColor,float roughness) 
{lightingInfo result;areaLightData data=computeAreaLightSpecularDiffuseFresnel(ltc1,ltc2,viewDirectionW,vNormal,vPosition,lightPosition,halfWidth,halfHeight,roughness);
#ifdef SPECULARTERM
vec3 fresnel=( specularColor*data.Fresnel.x+( vec3( 1.0 )-specularColor )*data.Fresnel.y );result.specular+=specularColor*fresnel*data.Specular;
#endif
result.diffuse+=diffuseColor*data.Diffuse;return result;}
#endif
#if defined(CLUSTLIGHT_BATCH) && CLUSTLIGHT_BATCH>0
#include<clusteredLightingFunctions>
#define inline
lightingInfo computeClusteredLighting(
sampler2D lightDataTexture,
sampler2D tileMaskTexture,
vec3 viewDirectionW,
vec3 vNormal,
vec4 lightData,
ivec2 sliceRange,
float glossiness
) {lightingInfo result;ivec2 tilePosition=ivec2(gl_FragCoord.xy*lightData.xy);int maskHeight=int(lightData.z);tilePosition.y=min(tilePosition.y,maskHeight-1);ivec2 batchRange=sliceRange/CLUSTLIGHT_BATCH;int batchOffset=batchRange.x*CLUSTLIGHT_BATCH;tilePosition.y+=maskHeight*batchRange.x;for (int i=batchRange.x; i<=batchRange.y; i+=1) {uint mask=uint(texelFetch(tileMaskTexture,tilePosition,0).r);tilePosition.y+=maskHeight;int maskOffset=max(sliceRange.x-batchOffset,0);int maskWidth=min(sliceRange.y-batchOffset+1,CLUSTLIGHT_BATCH);mask=extractBits(mask,maskOffset,maskWidth);while (mask != 0u) {uint bit=mask & -mask;mask ^= bit;int position=onlyBitPosition(bit);ClusteredLight light=getClusteredLight(lightDataTexture,batchOffset+maskOffset+position);lightingInfo info;if (light.vLightDirection.w<0.0) {info=computeLighting(viewDirectionW,vNormal,light.vLightData,light.vLightDiffuse.rgb,light.vLightSpecular.rgb,light.vLightDiffuse.a,glossiness);} else {info=computeSpotLighting(viewDirectionW,vNormal,light.vLightData,light.vLightDirection,light.vLightDiffuse.rgb,light.vLightSpecular.rgb,light.vLightDiffuse.a,glossiness);}
result.diffuse+=info.diffuse;
#ifdef SPECULARTERM
result.specular+=info.specular;
#endif
}
batchOffset+=CLUSTLIGHT_BATCH;}
return result;}
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const lightsFragmentFunctions = {
    name,
    shader
}; //# sourceMappingURL=lightsFragmentFunctions.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/shadowsFragmentFunctions.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "shadowsFragmentFunctions",
    ()=>shadowsFragmentFunctions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "shadowsFragmentFunctions";
const shader = `#ifdef SHADOWS
#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)
#define TEXTUREFUNC(s,c,l) texture2DLodEXT(s,c,l)
#else
#define TEXTUREFUNC(s,c,b) texture2D(s,c,b)
#endif
#ifndef SHADOWFLOAT
float unpack(vec4 color)
{const vec4 bit_shift=vec4(1.0/(255.0*255.0*255.0),1.0/(255.0*255.0),1.0/255.0,1.0);return dot(color,bit_shift);}
#endif
float computeFallOff(float value,vec2 clipSpace,float frustumEdgeFalloff)
{float mask=smoothstep(1.0-frustumEdgeFalloff,1.00000012,clamp(dot(clipSpace,clipSpace),0.,1.));return mix(value,1.0,mask);}
#define inline
float computeShadowCube(vec3 worldPos,vec3 lightPosition,samplerCube shadowSampler,float darkness,vec2 depthValues)
{vec3 directionToLight=worldPos-lightPosition;float depth=length(directionToLight);depth=(depth+depthValues.x)/(depthValues.y);depth=clamp(depth,0.,1.0);directionToLight=normalize(directionToLight);directionToLight.y=-directionToLight.y;
#ifndef SHADOWFLOAT
float shadow=unpack(textureCube(shadowSampler,directionToLight));
#else
float shadow=textureCube(shadowSampler,directionToLight).x;
#endif
return depth>shadow ? darkness : 1.0;}
#define inline
float computeShadowWithPoissonSamplingCube(vec3 worldPos,vec3 lightPosition,samplerCube shadowSampler,float mapSize,float darkness,vec2 depthValues)
{vec3 directionToLight=worldPos-lightPosition;float depth=length(directionToLight);depth=(depth+depthValues.x)/(depthValues.y);depth=clamp(depth,0.,1.0);directionToLight=normalize(directionToLight);directionToLight.y=-directionToLight.y;float visibility=1.;vec3 poissonDisk[4];poissonDisk[0]=vec3(-1.0,1.0,-1.0);poissonDisk[1]=vec3(1.0,-1.0,-1.0);poissonDisk[2]=vec3(-1.0,-1.0,-1.0);poissonDisk[3]=vec3(1.0,-1.0,1.0);
#ifndef SHADOWFLOAT
if (unpack(textureCube(shadowSampler,directionToLight+poissonDisk[0]*mapSize))<depth) visibility-=0.25;if (unpack(textureCube(shadowSampler,directionToLight+poissonDisk[1]*mapSize))<depth) visibility-=0.25;if (unpack(textureCube(shadowSampler,directionToLight+poissonDisk[2]*mapSize))<depth) visibility-=0.25;if (unpack(textureCube(shadowSampler,directionToLight+poissonDisk[3]*mapSize))<depth) visibility-=0.25;
#else
if (textureCube(shadowSampler,directionToLight+poissonDisk[0]*mapSize).x<depth) visibility-=0.25;if (textureCube(shadowSampler,directionToLight+poissonDisk[1]*mapSize).x<depth) visibility-=0.25;if (textureCube(shadowSampler,directionToLight+poissonDisk[2]*mapSize).x<depth) visibility-=0.25;if (textureCube(shadowSampler,directionToLight+poissonDisk[3]*mapSize).x<depth) visibility-=0.25;
#endif
return min(1.0,visibility+darkness);}
#define inline
float computeShadowWithESMCube(vec3 worldPos,vec3 lightPosition,samplerCube shadowSampler,float darkness,float depthScale,vec2 depthValues)
{vec3 directionToLight=worldPos-lightPosition;float depth=length(directionToLight);depth=(depth+depthValues.x)/(depthValues.y);float shadowPixelDepth=clamp(depth,0.,1.0);directionToLight=normalize(directionToLight);directionToLight.y=-directionToLight.y;
#ifndef SHADOWFLOAT
float shadowMapSample=unpack(textureCube(shadowSampler,directionToLight));
#else
float shadowMapSample=textureCube(shadowSampler,directionToLight).x;
#endif
float esm=1.0-clamp(exp(min(87.,depthScale*shadowPixelDepth))*shadowMapSample,0.,1.-darkness);return esm;}
#define inline
float computeShadowWithCloseESMCube(vec3 worldPos,vec3 lightPosition,samplerCube shadowSampler,float darkness,float depthScale,vec2 depthValues)
{vec3 directionToLight=worldPos-lightPosition;float depth=length(directionToLight);depth=(depth+depthValues.x)/(depthValues.y);float shadowPixelDepth=clamp(depth,0.,1.0);directionToLight=normalize(directionToLight);directionToLight.y=-directionToLight.y;
#ifndef SHADOWFLOAT
float shadowMapSample=unpack(textureCube(shadowSampler,directionToLight));
#else
float shadowMapSample=textureCube(shadowSampler,directionToLight).x;
#endif
float esm=clamp(exp(min(87.,-depthScale*(shadowPixelDepth-shadowMapSample))),darkness,1.);return esm;}
#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)
#define inline
float computeShadowCSM(float layer,vec4 vPositionFromLight,float depthMetric,highp sampler2DArray shadowSampler,float darkness,float frustumEdgeFalloff)
{vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;vec2 uv=0.5*clipSpace.xy+vec2(0.5);vec3 uvLayer=vec3(uv.x,uv.y,layer);float shadowPixelDepth=clamp(depthMetric,0.,1.0);
#ifndef SHADOWFLOAT
float shadow=unpack(texture2D(shadowSampler,uvLayer));
#else
float shadow=texture2D(shadowSampler,uvLayer).x;
#endif
return shadowPixelDepth>shadow ? computeFallOff(darkness,clipSpace.xy,frustumEdgeFalloff) : 1.;}
#endif
#define inline
float computeShadow(vec4 vPositionFromLight,float depthMetric,sampler2D shadowSampler,float darkness,float frustumEdgeFalloff)
{vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;vec2 uv=0.5*clipSpace.xy+vec2(0.5);if (uv.x<0. || uv.x>1.0 || uv.y<0. || uv.y>1.0)
{return 1.0;}
else
{float shadowPixelDepth=clamp(depthMetric,0.,1.0);
#ifndef SHADOWFLOAT
float shadow=unpack(TEXTUREFUNC(shadowSampler,uv,0.));
#else
float shadow=TEXTUREFUNC(shadowSampler,uv,0.).x;
#endif
return shadowPixelDepth>shadow ? computeFallOff(darkness,clipSpace.xy,frustumEdgeFalloff) : 1.;}}
#define inline
float computeShadowWithPoissonSampling(vec4 vPositionFromLight,float depthMetric,sampler2D shadowSampler,float mapSize,float darkness,float frustumEdgeFalloff)
{vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;vec2 uv=0.5*clipSpace.xy+vec2(0.5);if (uv.x<0. || uv.x>1.0 || uv.y<0. || uv.y>1.0)
{return 1.0;}
else
{float shadowPixelDepth=clamp(depthMetric,0.,1.0);float visibility=1.;vec2 poissonDisk[4];poissonDisk[0]=vec2(-0.94201624,-0.39906216);poissonDisk[1]=vec2(0.94558609,-0.76890725);poissonDisk[2]=vec2(-0.094184101,-0.92938870);poissonDisk[3]=vec2(0.34495938,0.29387760);
#ifndef SHADOWFLOAT
if (unpack(TEXTUREFUNC(shadowSampler,uv+poissonDisk[0]*mapSize,0.))<shadowPixelDepth) visibility-=0.25;if (unpack(TEXTUREFUNC(shadowSampler,uv+poissonDisk[1]*mapSize,0.))<shadowPixelDepth) visibility-=0.25;if (unpack(TEXTUREFUNC(shadowSampler,uv+poissonDisk[2]*mapSize,0.))<shadowPixelDepth) visibility-=0.25;if (unpack(TEXTUREFUNC(shadowSampler,uv+poissonDisk[3]*mapSize,0.))<shadowPixelDepth) visibility-=0.25;
#else
if (TEXTUREFUNC(shadowSampler,uv+poissonDisk[0]*mapSize,0.).x<shadowPixelDepth) visibility-=0.25;if (TEXTUREFUNC(shadowSampler,uv+poissonDisk[1]*mapSize,0.).x<shadowPixelDepth) visibility-=0.25;if (TEXTUREFUNC(shadowSampler,uv+poissonDisk[2]*mapSize,0.).x<shadowPixelDepth) visibility-=0.25;if (TEXTUREFUNC(shadowSampler,uv+poissonDisk[3]*mapSize,0.).x<shadowPixelDepth) visibility-=0.25;
#endif
return computeFallOff(min(1.0,visibility+darkness),clipSpace.xy,frustumEdgeFalloff);}}
#define inline
float computeShadowWithESM(vec4 vPositionFromLight,float depthMetric,sampler2D shadowSampler,float darkness,float depthScale,float frustumEdgeFalloff)
{vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;vec2 uv=0.5*clipSpace.xy+vec2(0.5);if (uv.x<0. || uv.x>1.0 || uv.y<0. || uv.y>1.0)
{return 1.0;}
else
{float shadowPixelDepth=clamp(depthMetric,0.,1.0);
#ifndef SHADOWFLOAT
float shadowMapSample=unpack(TEXTUREFUNC(shadowSampler,uv,0.));
#else
float shadowMapSample=TEXTUREFUNC(shadowSampler,uv,0.).x;
#endif
float esm=1.0-clamp(exp(min(87.,depthScale*shadowPixelDepth))*shadowMapSample,0.,1.-darkness);return computeFallOff(esm,clipSpace.xy,frustumEdgeFalloff);}}
#define inline
float computeShadowWithCloseESM(vec4 vPositionFromLight,float depthMetric,sampler2D shadowSampler,float darkness,float depthScale,float frustumEdgeFalloff)
{vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;vec2 uv=0.5*clipSpace.xy+vec2(0.5);if (uv.x<0. || uv.x>1.0 || uv.y<0. || uv.y>1.0)
{return 1.0;}
else
{float shadowPixelDepth=clamp(depthMetric,0.,1.0); 
#ifndef SHADOWFLOAT
float shadowMapSample=unpack(TEXTUREFUNC(shadowSampler,uv,0.));
#else
float shadowMapSample=TEXTUREFUNC(shadowSampler,uv,0.).x;
#endif
float esm=clamp(exp(min(87.,-depthScale*(shadowPixelDepth-shadowMapSample))),darkness,1.);return computeFallOff(esm,clipSpace.xy,frustumEdgeFalloff);}}
#ifdef IS_NDC_HALF_ZRANGE
#define ZINCLIP clipSpace.z
#else
#define ZINCLIP uvDepth.z
#endif
#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)
#define SMALLEST_ABOVE_ZERO 1.1754943508e-38
#define GREATEST_LESS_THAN_ONE 0.99999994
#define DISABLE_UNIFORMITY_ANALYSIS
#define inline
float computeShadowWithCSMPCF1(float layer,vec4 vPositionFromLight,float depthMetric,highp sampler2DArrayShadow shadowSampler,float darkness,float frustumEdgeFalloff)
{vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;vec3 uvDepth=vec3(0.5*clipSpace.xyz+vec3(0.5));
#ifdef USE_REVERSE_DEPTHBUFFER
uvDepth.z=clamp(ZINCLIP,SMALLEST_ABOVE_ZERO,1.);
#else
uvDepth.z=clamp(ZINCLIP,0.,GREATEST_LESS_THAN_ONE);
#endif
vec4 uvDepthLayer=vec4(uvDepth.x,uvDepth.y,layer,uvDepth.z);float shadow=texture2D(shadowSampler,uvDepthLayer);shadow=mix(darkness,1.,shadow);return computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff);}
#define inline
float computeShadowWithCSMPCF3(float layer,vec4 vPositionFromLight,float depthMetric,highp sampler2DArrayShadow shadowSampler,vec2 shadowMapSizeAndInverse,float darkness,float frustumEdgeFalloff)
{vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;vec3 uvDepth=vec3(0.5*clipSpace.xyz+vec3(0.5));
#ifdef USE_REVERSE_DEPTHBUFFER
uvDepth.z=clamp(ZINCLIP,SMALLEST_ABOVE_ZERO,1.);
#else
uvDepth.z=clamp(ZINCLIP,0.,GREATEST_LESS_THAN_ONE);
#endif
vec2 uv=uvDepth.xy*shadowMapSizeAndInverse.x; 
uv+=0.5; 
vec2 st=fract(uv); 
vec2 base_uv=floor(uv)-0.5; 
base_uv*=shadowMapSizeAndInverse.y; 
vec2 uvw0=3.-2.*st;vec2 uvw1=1.+2.*st;vec2 u=vec2((2.-st.x)/uvw0.x-1.,st.x/uvw1.x+1.)*shadowMapSizeAndInverse.y;vec2 v=vec2((2.-st.y)/uvw0.y-1.,st.y/uvw1.y+1.)*shadowMapSizeAndInverse.y;float shadow=0.;shadow+=uvw0.x*uvw0.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[0],v[0]),layer,uvDepth.z));shadow+=uvw1.x*uvw0.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[1],v[0]),layer,uvDepth.z));shadow+=uvw0.x*uvw1.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[0],v[1]),layer,uvDepth.z));shadow+=uvw1.x*uvw1.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[1],v[1]),layer,uvDepth.z));shadow=shadow/16.;shadow=mix(darkness,1.,shadow);return computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff);}
#define inline
float computeShadowWithCSMPCF5(float layer,vec4 vPositionFromLight,float depthMetric,highp sampler2DArrayShadow shadowSampler,vec2 shadowMapSizeAndInverse,float darkness,float frustumEdgeFalloff)
{vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;vec3 uvDepth=vec3(0.5*clipSpace.xyz+vec3(0.5));
#ifdef USE_REVERSE_DEPTHBUFFER
uvDepth.z=clamp(ZINCLIP,SMALLEST_ABOVE_ZERO,1.);
#else
uvDepth.z=clamp(ZINCLIP,0.,GREATEST_LESS_THAN_ONE);
#endif
vec2 uv=uvDepth.xy*shadowMapSizeAndInverse.x; 
uv+=0.5; 
vec2 st=fract(uv); 
vec2 base_uv=floor(uv)-0.5; 
base_uv*=shadowMapSizeAndInverse.y; 
vec2 uvw0=4.-3.*st;vec2 uvw1=vec2(7.);vec2 uvw2=1.+3.*st;vec3 u=vec3((3.-2.*st.x)/uvw0.x-2.,(3.+st.x)/uvw1.x,st.x/uvw2.x+2.)*shadowMapSizeAndInverse.y;vec3 v=vec3((3.-2.*st.y)/uvw0.y-2.,(3.+st.y)/uvw1.y,st.y/uvw2.y+2.)*shadowMapSizeAndInverse.y;float shadow=0.;shadow+=uvw0.x*uvw0.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[0],v[0]),layer,uvDepth.z));shadow+=uvw1.x*uvw0.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[1],v[0]),layer,uvDepth.z));shadow+=uvw2.x*uvw0.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[2],v[0]),layer,uvDepth.z));shadow+=uvw0.x*uvw1.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[0],v[1]),layer,uvDepth.z));shadow+=uvw1.x*uvw1.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[1],v[1]),layer,uvDepth.z));shadow+=uvw2.x*uvw1.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[2],v[1]),layer,uvDepth.z));shadow+=uvw0.x*uvw2.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[0],v[2]),layer,uvDepth.z));shadow+=uvw1.x*uvw2.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[1],v[2]),layer,uvDepth.z));shadow+=uvw2.x*uvw2.y*texture2D(shadowSampler,vec4(base_uv.xy+vec2(u[2],v[2]),layer,uvDepth.z));shadow=shadow/144.;shadow=mix(darkness,1.,shadow);return computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff);}
#define inline
float computeShadowWithPCF1(vec4 vPositionFromLight,float depthMetric,highp sampler2DShadow shadowSampler,float darkness,float frustumEdgeFalloff)
{if (depthMetric>1.0 || depthMetric<0.0) {return 1.0;}
else
{vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;vec3 uvDepth=vec3(0.5*clipSpace.xyz+vec3(0.5));uvDepth.z=ZINCLIP;float shadow=TEXTUREFUNC(shadowSampler,uvDepth,0.);shadow=mix(darkness,1.,shadow);return computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff);}}
#define inline
float computeShadowWithPCF3(vec4 vPositionFromLight,float depthMetric,highp sampler2DShadow shadowSampler,vec2 shadowMapSizeAndInverse,float darkness,float frustumEdgeFalloff)
{if (depthMetric>1.0 || depthMetric<0.0) {return 1.0;}
else
{vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;vec3 uvDepth=vec3(0.5*clipSpace.xyz+vec3(0.5));uvDepth.z=ZINCLIP;vec2 uv=uvDepth.xy*shadowMapSizeAndInverse.x; 
uv+=0.5; 
vec2 st=fract(uv); 
vec2 base_uv=floor(uv)-0.5; 
base_uv*=shadowMapSizeAndInverse.y; 
vec2 uvw0=3.-2.*st;vec2 uvw1=1.+2.*st;vec2 u=vec2((2.-st.x)/uvw0.x-1.,st.x/uvw1.x+1.)*shadowMapSizeAndInverse.y;vec2 v=vec2((2.-st.y)/uvw0.y-1.,st.y/uvw1.y+1.)*shadowMapSizeAndInverse.y;float shadow=0.;shadow+=uvw0.x*uvw0.y*TEXTUREFUNC(shadowSampler,vec3(base_uv.xy+vec2(u[0],v[0]),uvDepth.z),0.);shadow+=uvw1.x*uvw0.y*TEXTUREFUNC(shadowSampler,vec3(base_uv.xy+vec2(u[1],v[0]),uvDepth.z),0.);shadow+=uvw0.x*uvw1.y*TEXTUREFUNC(shadowSampler,vec3(base_uv.xy+vec2(u[0],v[1]),uvDepth.z),0.);shadow+=uvw1.x*uvw1.y*TEXTUREFUNC(shadowSampler,vec3(base_uv.xy+vec2(u[1],v[1]),uvDepth.z),0.);shadow=shadow/16.;shadow=mix(darkness,1.,shadow);return computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff);}}
#define inline
float computeShadowWithPCF5(vec4 vPositionFromLight,float depthMetric,highp sampler2DShadow shadowSampler,vec2 shadowMapSizeAndInverse,float darkness,float frustumEdgeFalloff)
{if (depthMetric>1.0 || depthMetric<0.0) {return 1.0;}
else
{vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;vec3 uvDepth=vec3(0.5*clipSpace.xyz+vec3(0.5));uvDepth.z=ZINCLIP;vec2 uv=uvDepth.xy*shadowMapSizeAndInverse.x; 
uv+=0.5; 
vec2 st=fract(uv); 
vec2 base_uv=floor(uv)-0.5; 
base_uv*=shadowMapSizeAndInverse.y; 
vec2 uvw0=4.-3.*st;vec2 uvw1=vec2(7.);vec2 uvw2=1.+3.*st;vec3 u=vec3((3.-2.*st.x)/uvw0.x-2.,(3.+st.x)/uvw1.x,st.x/uvw2.x+2.)*shadowMapSizeAndInverse.y;vec3 v=vec3((3.-2.*st.y)/uvw0.y-2.,(3.+st.y)/uvw1.y,st.y/uvw2.y+2.)*shadowMapSizeAndInverse.y;float shadow=0.;shadow+=uvw0.x*uvw0.y*TEXTUREFUNC(shadowSampler,vec3(base_uv.xy+vec2(u[0],v[0]),uvDepth.z),0.);shadow+=uvw1.x*uvw0.y*TEXTUREFUNC(shadowSampler,vec3(base_uv.xy+vec2(u[1],v[0]),uvDepth.z),0.);shadow+=uvw2.x*uvw0.y*TEXTUREFUNC(shadowSampler,vec3(base_uv.xy+vec2(u[2],v[0]),uvDepth.z),0.);shadow+=uvw0.x*uvw1.y*TEXTUREFUNC(shadowSampler,vec3(base_uv.xy+vec2(u[0],v[1]),uvDepth.z),0.);shadow+=uvw1.x*uvw1.y*TEXTUREFUNC(shadowSampler,vec3(base_uv.xy+vec2(u[1],v[1]),uvDepth.z),0.);shadow+=uvw2.x*uvw1.y*TEXTUREFUNC(shadowSampler,vec3(base_uv.xy+vec2(u[2],v[1]),uvDepth.z),0.);shadow+=uvw0.x*uvw2.y*TEXTUREFUNC(shadowSampler,vec3(base_uv.xy+vec2(u[0],v[2]),uvDepth.z),0.);shadow+=uvw1.x*uvw2.y*TEXTUREFUNC(shadowSampler,vec3(base_uv.xy+vec2(u[1],v[2]),uvDepth.z),0.);shadow+=uvw2.x*uvw2.y*TEXTUREFUNC(shadowSampler,vec3(base_uv.xy+vec2(u[2],v[2]),uvDepth.z),0.);shadow=shadow/144.;shadow=mix(darkness,1.,shadow);return computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff);}}
const vec3 PoissonSamplers32[64]=vec3[64](
vec3(0.06407013,0.05409927,0.),
vec3(0.7366577,0.5789394,0.),
vec3(-0.6270542,-0.5320278,0.),
vec3(-0.4096107,0.8411095,0.),
vec3(0.6849564,-0.4990818,0.),
vec3(-0.874181,-0.04579735,0.),
vec3(0.9989998,0.0009880066,0.),
vec3(-0.004920578,-0.9151649,0.),
vec3(0.1805763,0.9747483,0.),
vec3(-0.2138451,0.2635818,0.),
vec3(0.109845,0.3884785,0.),
vec3(0.06876755,-0.3581074,0.),
vec3(0.374073,-0.7661266,0.),
vec3(0.3079132,-0.1216763,0.),
vec3(-0.3794335,-0.8271583,0.),
vec3(-0.203878,-0.07715034,0.),
vec3(0.5912697,0.1469799,0.),
vec3(-0.88069,0.3031784,0.),
vec3(0.5040108,0.8283722,0.),
vec3(-0.5844124,0.5494877,0.),
vec3(0.6017799,-0.1726654,0.),
vec3(-0.5554981,0.1559997,0.),
vec3(-0.3016369,-0.3900928,0.),
vec3(-0.5550632,-0.1723762,0.),
vec3(0.925029,0.2995041,0.),
vec3(-0.2473137,0.5538505,0.),
vec3(0.9183037,-0.2862392,0.),
vec3(0.2469421,0.6718712,0.),
vec3(0.3916397,-0.4328209,0.),
vec3(-0.03576927,-0.6220032,0.),
vec3(-0.04661255,0.7995201,0.),
vec3(0.4402924,0.3640312,0.),
vec3(0.),
vec3(0.),
vec3(0.),
vec3(0.),
vec3(0.),
vec3(0.),
vec3(0.),
vec3(0.),
vec3(0.),
vec3(0.),
vec3(0.),
vec3(0.),
vec3(0.),
vec3(0.),
vec3(0.),
vec3(0.),
vec3(0.),
vec3(0.),
vec3(0.),
vec3(0.),
vec3(0.),
vec3(0.),
vec3(0.),
vec3(0.),
vec3(0.),
vec3(0.),
vec3(0.),
vec3(0.),
vec3(0.),
vec3(0.),
vec3(0.),
vec3(0.)
);const vec3 PoissonSamplers64[64]=vec3[64](
vec3(-0.613392,0.617481,0.),
vec3(0.170019,-0.040254,0.),
vec3(-0.299417,0.791925,0.),
vec3(0.645680,0.493210,0.),
vec3(-0.651784,0.717887,0.),
vec3(0.421003,0.027070,0.),
vec3(-0.817194,-0.271096,0.),
vec3(-0.705374,-0.668203,0.),
vec3(0.977050,-0.108615,0.),
vec3(0.063326,0.142369,0.),
vec3(0.203528,0.214331,0.),
vec3(-0.667531,0.326090,0.),
vec3(-0.098422,-0.295755,0.),
vec3(-0.885922,0.215369,0.),
vec3(0.566637,0.605213,0.),
vec3(0.039766,-0.396100,0.),
vec3(0.751946,0.453352,0.),
vec3(0.078707,-0.715323,0.),
vec3(-0.075838,-0.529344,0.),
vec3(0.724479,-0.580798,0.),
vec3(0.222999,-0.215125,0.),
vec3(-0.467574,-0.405438,0.),
vec3(-0.248268,-0.814753,0.),
vec3(0.354411,-0.887570,0.),
vec3(0.175817,0.382366,0.),
vec3(0.487472,-0.063082,0.),
vec3(-0.084078,0.898312,0.),
vec3(0.488876,-0.783441,0.),
vec3(0.470016,0.217933,0.),
vec3(-0.696890,-0.549791,0.),
vec3(-0.149693,0.605762,0.),
vec3(0.034211,0.979980,0.),
vec3(0.503098,-0.308878,0.),
vec3(-0.016205,-0.872921,0.),
vec3(0.385784,-0.393902,0.),
vec3(-0.146886,-0.859249,0.),
vec3(0.643361,0.164098,0.),
vec3(0.634388,-0.049471,0.),
vec3(-0.688894,0.007843,0.),
vec3(0.464034,-0.188818,0.),
vec3(-0.440840,0.137486,0.),
vec3(0.364483,0.511704,0.),
vec3(0.034028,0.325968,0.),
vec3(0.099094,-0.308023,0.),
vec3(0.693960,-0.366253,0.),
vec3(0.678884,-0.204688,0.),
vec3(0.001801,0.780328,0.),
vec3(0.145177,-0.898984,0.),
vec3(0.062655,-0.611866,0.),
vec3(0.315226,-0.604297,0.),
vec3(-0.780145,0.486251,0.),
vec3(-0.371868,0.882138,0.),
vec3(0.200476,0.494430,0.),
vec3(-0.494552,-0.711051,0.),
vec3(0.612476,0.705252,0.),
vec3(-0.578845,-0.768792,0.),
vec3(-0.772454,-0.090976,0.),
vec3(0.504440,0.372295,0.),
vec3(0.155736,0.065157,0.),
vec3(0.391522,0.849605,0.),
vec3(-0.620106,-0.328104,0.),
vec3(0.789239,-0.419965,0.),
vec3(-0.545396,0.538133,0.),
vec3(-0.178564,-0.596057,0.)
);
#define inline
float computeShadowWithCSMPCSS(float layer,vec4 vPositionFromLight,float depthMetric,highp sampler2DArray depthSampler,highp sampler2DArrayShadow shadowSampler,float shadowMapSizeInverse,float lightSizeUV,float darkness,float frustumEdgeFalloff,int searchTapCount,int pcfTapCount,vec3[64] poissonSamplers,vec2 lightSizeUVCorrection,float depthCorrection,float penumbraDarkness)
{vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;vec3 uvDepth=vec3(0.5*clipSpace.xyz+vec3(0.5));
#ifdef USE_REVERSE_DEPTHBUFFER
uvDepth.z=clamp(ZINCLIP,SMALLEST_ABOVE_ZERO,1.);
#else
uvDepth.z=clamp(ZINCLIP,0.,GREATEST_LESS_THAN_ONE);
#endif
vec4 uvDepthLayer=vec4(uvDepth.x,uvDepth.y,layer,uvDepth.z);float blockerDepth=0.0;float sumBlockerDepth=0.0;float numBlocker=0.0;for (int i=0; i<searchTapCount; i ++) {blockerDepth=texture2D(depthSampler,vec3(uvDepth.xy+(lightSizeUV*lightSizeUVCorrection*shadowMapSizeInverse*PoissonSamplers32[i].xy),layer)).r;if (blockerDepth<depthMetric) {sumBlockerDepth+=blockerDepth;numBlocker++;}}
float avgBlockerDepth=sumBlockerDepth/numBlocker;float AAOffset=shadowMapSizeInverse*10.;float penumbraRatio=((depthMetric-avgBlockerDepth)*depthCorrection+AAOffset);vec4 filterRadius=vec4(penumbraRatio*lightSizeUV*lightSizeUVCorrection*shadowMapSizeInverse,0.,0.);float random=getRand(vPositionFromLight.xy);float rotationAngle=random*3.1415926;vec2 rotationVector=vec2(cos(rotationAngle),sin(rotationAngle));float shadow=0.;for (int i=0; i<pcfTapCount; i++) {vec4 offset=vec4(poissonSamplers[i],0.);offset=vec4(offset.x*rotationVector.x-offset.y*rotationVector.y,offset.y*rotationVector.x+offset.x*rotationVector.y,0.,0.);shadow+=texture2D(shadowSampler,uvDepthLayer+offset*filterRadius);}
shadow/=float(pcfTapCount);shadow=mix(shadow,1.,min((depthMetric-avgBlockerDepth)*depthCorrection*penumbraDarkness,1.));shadow=mix(darkness,1.,shadow);if (numBlocker<1.0) {return 1.0;}
else
{return computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff);}}
#define inline
float computeShadowWithPCSS(vec4 vPositionFromLight,float depthMetric,sampler2D depthSampler,highp sampler2DShadow shadowSampler,float shadowMapSizeInverse,float lightSizeUV,float darkness,float frustumEdgeFalloff,int searchTapCount,int pcfTapCount,vec3[64] poissonSamplers)
{if (depthMetric>1.0 || depthMetric<0.0) {return 1.0;}
else
{vec3 clipSpace=vPositionFromLight.xyz/vPositionFromLight.w;vec3 uvDepth=vec3(0.5*clipSpace.xyz+vec3(0.5));uvDepth.z=ZINCLIP;float blockerDepth=0.0;float sumBlockerDepth=0.0;float numBlocker=0.0;for (int i=0; i<searchTapCount; i ++) {blockerDepth=TEXTUREFUNC(depthSampler,uvDepth.xy+(lightSizeUV*shadowMapSizeInverse*PoissonSamplers32[i].xy),0.).r;if (blockerDepth<depthMetric) {sumBlockerDepth+=blockerDepth;numBlocker++;}}
if (numBlocker<1.0) {return 1.0;}
else
{float avgBlockerDepth=sumBlockerDepth/numBlocker;float AAOffset=shadowMapSizeInverse*10.;float penumbraRatio=((depthMetric-avgBlockerDepth)+AAOffset);float filterRadius=penumbraRatio*lightSizeUV*shadowMapSizeInverse;float random=getRand(vPositionFromLight.xy);float rotationAngle=random*3.1415926;vec2 rotationVector=vec2(cos(rotationAngle),sin(rotationAngle));float shadow=0.;for (int i=0; i<pcfTapCount; i++) {vec3 offset=poissonSamplers[i];offset=vec3(offset.x*rotationVector.x-offset.y*rotationVector.y,offset.y*rotationVector.x+offset.x*rotationVector.y,0.);shadow+=TEXTUREFUNC(shadowSampler,uvDepth+offset*filterRadius,0.);}
shadow/=float(pcfTapCount);shadow=mix(shadow,1.,depthMetric-avgBlockerDepth);shadow=mix(darkness,1.,shadow);return computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff);}}}
#define inline
float computeShadowWithPCSS16(vec4 vPositionFromLight,float depthMetric,sampler2D depthSampler,highp sampler2DShadow shadowSampler,float shadowMapSizeInverse,float lightSizeUV,float darkness,float frustumEdgeFalloff)
{return computeShadowWithPCSS(vPositionFromLight,depthMetric,depthSampler,shadowSampler,shadowMapSizeInverse,lightSizeUV,darkness,frustumEdgeFalloff,16,16,PoissonSamplers32);}
#define inline
float computeShadowWithPCSS32(vec4 vPositionFromLight,float depthMetric,sampler2D depthSampler,highp sampler2DShadow shadowSampler,float shadowMapSizeInverse,float lightSizeUV,float darkness,float frustumEdgeFalloff)
{return computeShadowWithPCSS(vPositionFromLight,depthMetric,depthSampler,shadowSampler,shadowMapSizeInverse,lightSizeUV,darkness,frustumEdgeFalloff,16,32,PoissonSamplers32);}
#define inline
float computeShadowWithPCSS64(vec4 vPositionFromLight,float depthMetric,sampler2D depthSampler,highp sampler2DShadow shadowSampler,float shadowMapSizeInverse,float lightSizeUV,float darkness,float frustumEdgeFalloff)
{return computeShadowWithPCSS(vPositionFromLight,depthMetric,depthSampler,shadowSampler,shadowMapSizeInverse,lightSizeUV,darkness,frustumEdgeFalloff,32,64,PoissonSamplers64);}
#define inline
float computeShadowWithCSMPCSS16(float layer,vec4 vPositionFromLight,float depthMetric,highp sampler2DArray depthSampler,highp sampler2DArrayShadow shadowSampler,float shadowMapSizeInverse,float lightSizeUV,float darkness,float frustumEdgeFalloff,vec2 lightSizeUVCorrection,float depthCorrection,float penumbraDarkness)
{return computeShadowWithCSMPCSS(layer,vPositionFromLight,depthMetric,depthSampler,shadowSampler,shadowMapSizeInverse,lightSizeUV,darkness,frustumEdgeFalloff,16,16,PoissonSamplers32,lightSizeUVCorrection,depthCorrection,penumbraDarkness);}
#define inline
float computeShadowWithCSMPCSS32(float layer,vec4 vPositionFromLight,float depthMetric,highp sampler2DArray depthSampler,highp sampler2DArrayShadow shadowSampler,float shadowMapSizeInverse,float lightSizeUV,float darkness,float frustumEdgeFalloff,vec2 lightSizeUVCorrection,float depthCorrection,float penumbraDarkness)
{return computeShadowWithCSMPCSS(layer,vPositionFromLight,depthMetric,depthSampler,shadowSampler,shadowMapSizeInverse,lightSizeUV,darkness,frustumEdgeFalloff,16,32,PoissonSamplers32,lightSizeUVCorrection,depthCorrection,penumbraDarkness);}
#define inline
float computeShadowWithCSMPCSS64(float layer,vec4 vPositionFromLight,float depthMetric,highp sampler2DArray depthSampler,highp sampler2DArrayShadow shadowSampler,float shadowMapSizeInverse,float lightSizeUV,float darkness,float frustumEdgeFalloff,vec2 lightSizeUVCorrection,float depthCorrection,float penumbraDarkness)
{return computeShadowWithCSMPCSS(layer,vPositionFromLight,depthMetric,depthSampler,shadowSampler,shadowMapSizeInverse,lightSizeUV,darkness,frustumEdgeFalloff,32,64,PoissonSamplers64,lightSizeUVCorrection,depthCorrection,penumbraDarkness);}
#endif
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const shadowsFragmentFunctions = {
    name,
    shader
}; //# sourceMappingURL=shadowsFragmentFunctions.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/imageProcessingFunctions.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "imageProcessingFunctions",
    ()=>imageProcessingFunctions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "imageProcessingFunctions";
const shader = `#if defined(COLORGRADING) && !defined(COLORGRADING3D)
/** 
* Polyfill for SAMPLE_TEXTURE_3D,which is unsupported in WebGL.
* sampler3dSetting.x=textureOffset (0.5/textureSize).
* sampler3dSetting.y=textureSize.
*/
#define inline
vec3 sampleTexture3D(sampler2D colorTransform,vec3 color,vec2 sampler3dSetting)
{float sliceSize=2.0*sampler3dSetting.x; 
#ifdef SAMPLER3DGREENDEPTH
float sliceContinuous=(color.g-sampler3dSetting.x)*sampler3dSetting.y;
#else
float sliceContinuous=(color.b-sampler3dSetting.x)*sampler3dSetting.y;
#endif
float sliceInteger=floor(sliceContinuous);float sliceFraction=sliceContinuous-sliceInteger;
#ifdef SAMPLER3DGREENDEPTH
vec2 sliceUV=color.rb;
#else
vec2 sliceUV=color.rg;
#endif
sliceUV.x*=sliceSize;sliceUV.x+=sliceInteger*sliceSize;sliceUV=saturate(sliceUV);vec4 slice0Color=texture2D(colorTransform,sliceUV);sliceUV.x+=sliceSize;sliceUV=saturate(sliceUV);vec4 slice1Color=texture2D(colorTransform,sliceUV);vec3 result=mix(slice0Color.rgb,slice1Color.rgb,sliceFraction);
#ifdef SAMPLER3DBGRMAP
color.rgb=result.rgb;
#else
color.rgb=result.bgr;
#endif
return color;}
#endif
#if TONEMAPPING==3
const float PBRNeutralStartCompression=0.8-0.04;const float PBRNeutralDesaturation=0.15;vec3 PBRNeutralToneMapping( vec3 color ) {float x=min(color.r,min(color.g,color.b));float offset=x<0.08 ? x-6.25*x*x : 0.04;color-=offset;float peak=max(color.r,max(color.g,color.b));if (peak<PBRNeutralStartCompression) return color;float d=1.-PBRNeutralStartCompression;float newPeak=1.-d*d/(peak+d-PBRNeutralStartCompression);color*=newPeak/peak;float g=1.-1./(PBRNeutralDesaturation*(peak-newPeak)+1.);return mix(color,newPeak*vec3(1,1,1),g);}
#endif
#if TONEMAPPING==2
const mat3 ACESInputMat=mat3(
vec3(0.59719,0.07600,0.02840),
vec3(0.35458,0.90834,0.13383),
vec3(0.04823,0.01566,0.83777)
);const mat3 ACESOutputMat=mat3(
vec3( 1.60475,-0.10208,-0.00327),
vec3(-0.53108, 1.10813,-0.07276),
vec3(-0.07367,-0.00605, 1.07602)
);vec3 RRTAndODTFit(vec3 v)
{vec3 a=v*(v+0.0245786)-0.000090537;vec3 b=v*(0.983729*v+0.4329510)+0.238081;return a/b;}
vec3 ACESFitted(vec3 color)
{color=ACESInputMat*color;color=RRTAndODTFit(color);color=ACESOutputMat*color;color=saturate(color);return color;}
#endif
#define CUSTOM_IMAGEPROCESSINGFUNCTIONS_DEFINITIONS
vec4 applyImageProcessing(vec4 result) {
#define CUSTOM_IMAGEPROCESSINGFUNCTIONS_UPDATERESULT_ATSTART
#ifdef EXPOSURE
result.rgb*=exposureLinear;
#endif
#ifdef VIGNETTE
vec2 viewportXY=gl_FragCoord.xy*vInverseScreenSize;viewportXY=viewportXY*2.0-1.0;vec3 vignetteXY1=vec3(viewportXY*vignetteSettings1.xy+vignetteSettings1.zw,1.0);float vignetteTerm=dot(vignetteXY1,vignetteXY1);float vignette=pow(vignetteTerm,vignetteSettings2.w);vec3 vignetteColor=vignetteSettings2.rgb;
#ifdef VIGNETTEBLENDMODEMULTIPLY
vec3 vignetteColorMultiplier=mix(vignetteColor,vec3(1,1,1),vignette);result.rgb*=vignetteColorMultiplier;
#endif
#ifdef VIGNETTEBLENDMODEOPAQUE
result.rgb=mix(vignetteColor,result.rgb,vignette);
#endif
#endif
#if TONEMAPPING==3
result.rgb=PBRNeutralToneMapping(result.rgb);
#elif TONEMAPPING==2
result.rgb=ACESFitted(result.rgb);
#elif TONEMAPPING==1
const float tonemappingCalibration=1.590579;result.rgb=1.0-exp2(-tonemappingCalibration*result.rgb);
#endif
result.rgb=toGammaSpace(result.rgb);result.rgb=saturate(result.rgb);
#ifdef CONTRAST
vec3 resultHighContrast=result.rgb*result.rgb*(3.0-2.0*result.rgb);if (contrast<1.0) {result.rgb=mix(vec3(0.5,0.5,0.5),result.rgb,contrast);} else {result.rgb=mix(result.rgb,resultHighContrast,contrast-1.0);}
result.rgb=max(result.rgb,0.);
#endif
#ifdef COLORGRADING
vec3 colorTransformInput=result.rgb*colorTransformSettings.xxx+colorTransformSettings.yyy;
#ifdef COLORGRADING3D
vec3 colorTransformOutput=texture(txColorTransform,colorTransformInput).rgb;
#else
vec3 colorTransformOutput=sampleTexture3D(txColorTransform,colorTransformInput,colorTransformSettings.yz).rgb;
#endif
result.rgb=mix(result.rgb,colorTransformOutput,colorTransformSettings.www);
#endif
#ifdef COLORCURVES
float luma=getLuminance(result.rgb);vec2 curveMix=clamp(vec2(luma*3.0-1.5,luma*-3.0+1.5),vec2(0.0),vec2(1.0));vec4 colorCurve=vCameraColorCurveNeutral+curveMix.x*vCameraColorCurvePositive-curveMix.y*vCameraColorCurveNegative;result.rgb*=colorCurve.rgb;result.rgb=mix(vec3(luma),result.rgb,colorCurve.a);
#endif
#ifdef DITHER
float rand=getRand(gl_FragCoord.xy*vInverseScreenSize);float dither=mix(-ditherIntensity,ditherIntensity,rand);result.rgb=saturate(result.rgb+vec3(dither));
#endif
#define CUSTOM_IMAGEPROCESSINGFUNCTIONS_UPDATERESULT_ATEND
return result;}`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const imageProcessingFunctions = {
    name,
    shader
}; //# sourceMappingURL=imageProcessingFunctions.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/fogFragmentDeclaration.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "fogFragmentDeclaration",
    ()=>fogFragmentDeclaration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "fogFragmentDeclaration";
const shader = `#ifdef FOG
#define FOGMODE_NONE 0.
#define FOGMODE_EXP 1.
#define FOGMODE_EXP2 2.
#define FOGMODE_LINEAR 3.
#define E 2.71828
uniform vec4 vFogInfos;uniform vec3 vFogColor;varying vec3 vFogDistance;float CalcFogFactor()
{float fogCoeff=1.0;float fogStart=vFogInfos.y;float fogEnd=vFogInfos.z;float fogDensity=vFogInfos.w;float fogDistance=length(vFogDistance);if (FOGMODE_LINEAR==vFogInfos.x)
{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);}
else if (FOGMODE_EXP==vFogInfos.x)
{fogCoeff=1.0/pow(E,fogDistance*fogDensity);}
else if (FOGMODE_EXP2==vFogInfos.x)
{fogCoeff=1.0/pow(E,fogDistance*fogDistance*fogDensity*fogDensity);}
return clamp(fogCoeff,0.0,1.0);}
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const fogFragmentDeclaration = {
    name,
    shader
}; //# sourceMappingURL=fogFragmentDeclaration.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/intersectionFunctions.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "intersectionFunctions",
    ()=>intersectionFunctions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "intersectionFunctions";
const shader = `float diskIntersectWithBackFaceCulling(vec3 ro,vec3 rd,vec3 c,float r) {float d=rd.y;if(d>0.0) { return 1e6; }
vec3 o=ro-c;float t=-o.y/d;vec3 q=o+rd*t;return (dot(q,q)<r*r) ? t : 1e6;}
vec2 sphereIntersect(vec3 ro,vec3 rd,vec3 ce,float ra) {vec3 oc=ro-ce;float b=dot(oc,rd);float c=dot(oc,oc)-ra*ra;float h=b*b-c;if(h<0.0) { return vec2(-1.0,-1.0); }
h=sqrt(h);return vec2(-b+h,-b-h);}
vec2 sphereIntersectFromOrigin(vec3 ro,vec3 rd,float ra) {float b=dot(ro,rd);float c=dot(ro,ro)-ra*ra;float h=b*b-c;if(h<0.0) { return vec2(-1.0,-1.0); }
h=sqrt(h);return vec2(-b+h,-b-h);}`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const intersectionFunctions = {
    name,
    shader
}; //# sourceMappingURL=intersectionFunctions.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/lightFragment.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "lightFragment",
    ()=>lightFragment
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "lightFragment";
const shader = `#ifdef LIGHT{X}
#if defined(SHADOWONLY) || defined(LIGHTMAP) && defined(LIGHTMAPEXCLUDED{X}) && defined(LIGHTMAPNOSPECULAR{X})
#else
vec4 diffuse{X}=light{X}.vLightDiffuse;
#define CUSTOM_LIGHT{X}_COLOR 
#if defined(PBR) && defined(CLUSTLIGHT{X}) && defined(CLUSTLIGHT_BATCH) && CLUSTLIGHT_BATCH>0
{int sliceIndex=min(getClusteredSliceIndex(light{X}.vSliceData,vViewDepth),CLUSTLIGHT_SLICES-1);info=computeClusteredLighting(
lightDataTexture{X},
tileMaskTexture{X},
light{X}.vLightData,
ivec2(light{X}.vSliceRanges[sliceIndex]),
viewDirectionW,
normalW,
vPositionW,
surfaceAlbedo,
reflectivityOut
#ifdef IRIDESCENCE
,iridescenceIntensity
#endif
#ifdef SS_TRANSLUCENCY
,subSurfaceOut
#endif
#ifdef SPECULARTERM
,AARoughnessFactors.x
#endif
#ifdef ANISOTROPIC
,anisotropicOut
#endif
#ifdef SHEEN
,sheenOut
#endif
#ifdef CLEARCOAT
,clearcoatOut
#endif
);}
#elif defined(PBR)
#ifdef SPOTLIGHT{X}
preInfo=computePointAndSpotPreLightingInfo(light{X}.vLightData,viewDirectionW,normalW,vPositionW);
#elif defined(POINTLIGHT{X})
preInfo=computePointAndSpotPreLightingInfo(light{X}.vLightData,viewDirectionW,normalW,vPositionW);
#elif defined(HEMILIGHT{X})
preInfo=computeHemisphericPreLightingInfo(light{X}.vLightData,viewDirectionW,normalW);
#elif defined(DIRLIGHT{X})
preInfo=computeDirectionalPreLightingInfo(light{X}.vLightData,viewDirectionW,normalW);
#elif defined(AREALIGHT{X}) && defined(AREALIGHTSUPPORTED)
preInfo=computeAreaPreLightingInfo(areaLightsLTC1Sampler,areaLightsLTC2Sampler,viewDirectionW,normalW,vPositionW,light{X}.vLightData,light{X}.vLightWidth.xyz,light{X}.vLightHeight.xyz,roughness);
#endif
preInfo.NdotV=NdotV;
#ifdef SPOTLIGHT{X}
#ifdef LIGHT_FALLOFF_GLTF{X}
preInfo.attenuation=computeDistanceLightFalloff_GLTF(preInfo.lightDistanceSquared,light{X}.vLightFalloff.y);
#ifdef IESLIGHTTEXTURE{X}
preInfo.attenuation*=computeDirectionalLightFalloff_IES(light{X}.vLightDirection.xyz,preInfo.L,iesLightTexture{X});
#else
preInfo.attenuation*=computeDirectionalLightFalloff_GLTF(light{X}.vLightDirection.xyz,preInfo.L,light{X}.vLightFalloff.z,light{X}.vLightFalloff.w);
#endif
#elif defined(LIGHT_FALLOFF_PHYSICAL{X})
preInfo.attenuation=computeDistanceLightFalloff_Physical(preInfo.lightDistanceSquared);
#ifdef IESLIGHTTEXTURE{X}
preInfo.attenuation*=computeDirectionalLightFalloff_IES(light{X}.vLightDirection.xyz,preInfo.L,iesLightTexture{X});
#else
preInfo.attenuation*=computeDirectionalLightFalloff_Physical(light{X}.vLightDirection.xyz,preInfo.L,light{X}.vLightDirection.w);
#endif
#elif defined(LIGHT_FALLOFF_STANDARD{X})
preInfo.attenuation=computeDistanceLightFalloff_Standard(preInfo.lightOffset,light{X}.vLightFalloff.x);
#ifdef IESLIGHTTEXTURE{X}
preInfo.attenuation*=computeDirectionalLightFalloff_IES(light{X}.vLightDirection.xyz,preInfo.L,iesLightTexture{X});
#else
preInfo.attenuation*=computeDirectionalLightFalloff_Standard(light{X}.vLightDirection.xyz,preInfo.L,light{X}.vLightDirection.w,light{X}.vLightData.w);
#endif
#else
preInfo.attenuation=computeDistanceLightFalloff(preInfo.lightOffset,preInfo.lightDistanceSquared,light{X}.vLightFalloff.x,light{X}.vLightFalloff.y);
#ifdef IESLIGHTTEXTURE{X}
preInfo.attenuation*=computeDirectionalLightFalloff_IES(light{X}.vLightDirection.xyz,preInfo.L,iesLightTexture{X});
#else
preInfo.attenuation*=computeDirectionalLightFalloff(light{X}.vLightDirection.xyz,preInfo.L,light{X}.vLightDirection.w,light{X}.vLightData.w,light{X}.vLightFalloff.z,light{X}.vLightFalloff.w);
#endif
#endif
#elif defined(POINTLIGHT{X})
#ifdef LIGHT_FALLOFF_GLTF{X}
preInfo.attenuation=computeDistanceLightFalloff_GLTF(preInfo.lightDistanceSquared,light{X}.vLightFalloff.y);
#elif defined(LIGHT_FALLOFF_PHYSICAL{X})
preInfo.attenuation=computeDistanceLightFalloff_Physical(preInfo.lightDistanceSquared);
#elif defined(LIGHT_FALLOFF_STANDARD{X})
preInfo.attenuation=computeDistanceLightFalloff_Standard(preInfo.lightOffset,light{X}.vLightFalloff.x);
#else
preInfo.attenuation=computeDistanceLightFalloff(preInfo.lightOffset,preInfo.lightDistanceSquared,light{X}.vLightFalloff.x,light{X}.vLightFalloff.y);
#endif
#else
preInfo.attenuation=1.0;
#endif
#if defined(HEMILIGHT{X}) || defined(AREALIGHT{X})
preInfo.roughness=roughness;
#else
preInfo.roughness=adjustRoughnessFromLightProperties(roughness,light{X}.vLightSpecular.a,preInfo.lightDistance);
#endif
preInfo.diffuseRoughness=diffuseRoughness;preInfo.surfaceAlbedo=surfaceAlbedo;
#ifdef IRIDESCENCE
preInfo.iridescenceIntensity=iridescenceIntensity;
#endif
#ifdef SS_TRANSLUCENCY
info.diffuseTransmission=vec3(0.0);
#endif
#ifdef HEMILIGHT{X}
info.diffuse=computeHemisphericDiffuseLighting(preInfo,diffuse{X}.rgb,light{X}.vLightGround);
#elif defined(AREALIGHT{X})
info.diffuse=computeAreaDiffuseLighting(preInfo,diffuse{X}.rgb);
#elif defined(SS_TRANSLUCENCY)
#ifndef SS_TRANSLUCENCY_LEGACY
info.diffuse=computeDiffuseLighting(preInfo,diffuse{X}.rgb)*(1.0-subSurfaceOut.translucencyIntensity);info.diffuseTransmission=computeDiffuseTransmittedLighting(preInfo,diffuse{X}.rgb,subSurfaceOut.transmittance); 
#else
info.diffuse=computeDiffuseTransmittedLighting(preInfo,diffuse{X}.rgb,subSurfaceOut.transmittance);
#endif
#else
info.diffuse=computeDiffuseLighting(preInfo,diffuse{X}.rgb);
#endif
#ifdef SPECULARTERM
#if AREALIGHT{X}
info.specular=computeAreaSpecularLighting(preInfo,light{X}.vLightSpecular.rgb,clearcoatOut.specularEnvironmentR0,reflectivityOut.colorReflectanceF90);
#else
#if (CONDUCTOR_SPECULAR_MODEL==CONDUCTOR_SPECULAR_MODEL_OPENPBR)
{vec3 metalFresnel=reflectivityOut.specularWeight*getF82Specular(preInfo.VdotH,clearcoatOut.specularEnvironmentR0,reflectivityOut.colorReflectanceF90,reflectivityOut.roughness);vec3 dielectricFresnel=fresnelSchlickGGX(preInfo.VdotH,reflectivityOut.dielectricColorF0,reflectivityOut.colorReflectanceF90);coloredFresnel=mix(dielectricFresnel,metalFresnel,reflectivityOut.metallic);}
#else
coloredFresnel=fresnelSchlickGGX(preInfo.VdotH,clearcoatOut.specularEnvironmentR0,reflectivityOut.colorReflectanceF90);
#endif
#ifndef LEGACY_SPECULAR_ENERGY_CONSERVATION
{float NdotH=dot(normalW,preInfo.H);vec3 fresnel=fresnelSchlickGGX(NdotH,vec3(reflectanceF0),specularEnvironmentR90);info.diffuse*=(vec3(1.0)-fresnel);}
#endif
#ifdef ANISOTROPIC
info.specular=computeAnisotropicSpecularLighting(preInfo,viewDirectionW,normalW,anisotropicOut.anisotropicTangent,anisotropicOut.anisotropicBitangent,anisotropicOut.anisotropy,clearcoatOut.specularEnvironmentR0,specularEnvironmentR90,AARoughnessFactors.x,diffuse{X}.rgb);
#else
info.specular=computeSpecularLighting(preInfo,normalW,clearcoatOut.specularEnvironmentR0,coloredFresnel,AARoughnessFactors.x,diffuse{X}.rgb);
#endif
#endif
#endif
#ifndef AREALIGHT{X}
#ifdef SHEEN
#ifdef SHEEN_LINKWITHALBEDO
preInfo.roughness=sheenOut.sheenIntensity;
#else
#ifdef HEMILIGHT{X}
preInfo.roughness=sheenOut.sheenRoughness;
#else
preInfo.roughness=adjustRoughnessFromLightProperties(sheenOut.sheenRoughness,light{X}.vLightSpecular.a,preInfo.lightDistance);
#endif
#endif
info.sheen=computeSheenLighting(preInfo,normalW,sheenOut.sheenColor,specularEnvironmentR90,AARoughnessFactors.x,diffuse{X}.rgb);
#endif
#ifdef CLEARCOAT
#ifdef HEMILIGHT{X}
preInfo.roughness=clearcoatOut.clearCoatRoughness;
#else
preInfo.roughness=adjustRoughnessFromLightProperties(clearcoatOut.clearCoatRoughness,light{X}.vLightSpecular.a,preInfo.lightDistance);
#endif
info.clearCoat=computeClearCoatLighting(preInfo,clearcoatOut.clearCoatNormalW,clearcoatOut.clearCoatAARoughnessFactors.x,clearcoatOut.clearCoatIntensity,diffuse{X}.rgb);
#ifdef CLEARCOAT_TINT
absorption=computeClearCoatLightingAbsorption(clearcoatOut.clearCoatNdotVRefract,preInfo.L,clearcoatOut.clearCoatNormalW,clearcoatOut.clearCoatColor,clearcoatOut.clearCoatThickness,clearcoatOut.clearCoatIntensity);info.diffuse*=absorption;
#ifdef SS_TRANSLUCENCY
info.diffuseTransmission*=absorption;
#endif
#ifdef SPECULARTERM
info.specular*=absorption;
#endif
#endif
info.diffuse*=info.clearCoat.w;
#ifdef SS_TRANSLUCENCY
info.diffuseTransmission*=info.clearCoat.w;
#endif
#ifdef SPECULARTERM
info.specular*=info.clearCoat.w;
#endif
#ifdef SHEEN
info.sheen*=info.clearCoat.w;
#endif
#endif
#endif
#else
#ifdef SPOTLIGHT{X}
#ifdef IESLIGHTTEXTURE{X}
info=computeIESSpotLighting(viewDirectionW,normalW,light{X}.vLightData,light{X}.vLightDirection,diffuse{X}.rgb,light{X}.vLightSpecular.rgb,diffuse{X}.a,glossiness,iesLightTexture{X});
#else
info=computeSpotLighting(viewDirectionW,normalW,light{X}.vLightData,light{X}.vLightDirection,diffuse{X}.rgb,light{X}.vLightSpecular.rgb,diffuse{X}.a,glossiness);
#endif
#elif defined(HEMILIGHT{X})
info=computeHemisphericLighting(viewDirectionW,normalW,light{X}.vLightData,diffuse{X}.rgb,light{X}.vLightSpecular.rgb,light{X}.vLightGround,glossiness);
#elif defined(POINTLIGHT{X}) || defined(DIRLIGHT{X})
info=computeLighting(viewDirectionW,normalW,light{X}.vLightData,diffuse{X}.rgb,light{X}.vLightSpecular.rgb,diffuse{X}.a,glossiness);
#elif defined(AREALIGHT{X}) && defined(AREALIGHTSUPPORTED)
info=computeAreaLighting(areaLightsLTC1Sampler,areaLightsLTC2Sampler,viewDirectionW,normalW,vPositionW,light{X}.vLightData.xyz,light{X}.vLightWidth.rgb,light{X}.vLightHeight.rgb,diffuse{X}.rgb,light{X}.vLightSpecular.rgb,
#ifdef AREALIGHTNOROUGHTNESS
0.5
#else
vReflectionInfos.y
#endif
);
#elif defined(CLUSTLIGHT{X}) && CLUSTLIGHT_BATCH>0
{int sliceIndex=min(getClusteredSliceIndex(light{X}.vSliceData,vViewDepth),CLUSTLIGHT_SLICES-1);info=computeClusteredLighting(lightDataTexture{X},tileMaskTexture{X},viewDirectionW,normalW,light{X}.vLightData,ivec2(light{X}.vSliceRanges[sliceIndex]),glossiness);}
#endif
#endif
#ifdef PROJECTEDLIGHTTEXTURE{X}
info.diffuse*=computeProjectionTextureDiffuseLighting(projectionLightTexture{X},textureProjectionMatrix{X},vPositionW);
#endif
#endif
#ifdef SHADOW{X}
#ifdef SHADOWCSM{X}
for (int i=0; i<SHADOWCSMNUM_CASCADES{X}; i++)
{
#ifdef SHADOWCSM_RIGHTHANDED{X}
diff{X}=viewFrustumZ{X}[i]+vPositionFromCamera{X}.z;
#else
diff{X}=viewFrustumZ{X}[i]-vPositionFromCamera{X}.z;
#endif
if (diff{X}>=0.) {index{X}=i;break;}}
#ifdef SHADOWCSMUSESHADOWMAXZ{X}
if (index{X}>=0)
#endif
{
#if defined(SHADOWPCF{X})
#if defined(SHADOWLOWQUALITY{X})
shadow=computeShadowWithCSMPCF1(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],shadowTexture{X},light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#elif defined(SHADOWMEDIUMQUALITY{X})
shadow=computeShadowWithCSMPCF3(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],shadowTexture{X},light{X}.shadowsInfo.yz,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#else
shadow=computeShadowWithCSMPCF5(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],shadowTexture{X},light{X}.shadowsInfo.yz,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#endif
#elif defined(SHADOWPCSS{X})
#if defined(SHADOWLOWQUALITY{X})
shadow=computeShadowWithCSMPCSS16(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],depthTexture{X},shadowTexture{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w,lightSizeUVCorrection{X}[index{X}],depthCorrection{X}[index{X}],penumbraDarkness{X});
#elif defined(SHADOWMEDIUMQUALITY{X})
shadow=computeShadowWithCSMPCSS32(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],depthTexture{X},shadowTexture{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w,lightSizeUVCorrection{X}[index{X}],depthCorrection{X}[index{X}],penumbraDarkness{X});
#else
shadow=computeShadowWithCSMPCSS64(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],depthTexture{X},shadowTexture{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w,lightSizeUVCorrection{X}[index{X}],depthCorrection{X}[index{X}],penumbraDarkness{X});
#endif
#else
shadow=computeShadowCSM(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],shadowTexture{X},light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#endif
#ifdef SHADOWCSMDEBUG{X}
shadowDebug{X}=vec3(shadow)*vCascadeColorsMultiplier{X}[index{X}];
#endif
#ifndef SHADOWCSMNOBLEND{X}
float frustumLength=frustumLengths{X}[index{X}];float diffRatio=clamp(diff{X}/frustumLength,0.,1.)*cascadeBlendFactor{X};if (index{X}<(SHADOWCSMNUM_CASCADES{X}-1) && diffRatio<1.)
{index{X}+=1;float nextShadow=0.;
#if defined(SHADOWPCF{X})
#if defined(SHADOWLOWQUALITY{X})
nextShadow=computeShadowWithCSMPCF1(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],shadowTexture{X},light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#elif defined(SHADOWMEDIUMQUALITY{X})
nextShadow=computeShadowWithCSMPCF3(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],shadowTexture{X},light{X}.shadowsInfo.yz,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#else
nextShadow=computeShadowWithCSMPCF5(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],shadowTexture{X},light{X}.shadowsInfo.yz,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#endif
#elif defined(SHADOWPCSS{X})
#if defined(SHADOWLOWQUALITY{X})
nextShadow=computeShadowWithCSMPCSS16(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],depthTexture{X},shadowTexture{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w,lightSizeUVCorrection{X}[index{X}],depthCorrection{X}[index{X}],penumbraDarkness{X});
#elif defined(SHADOWMEDIUMQUALITY{X})
nextShadow=computeShadowWithCSMPCSS32(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],depthTexture{X},shadowTexture{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w,lightSizeUVCorrection{X}[index{X}],depthCorrection{X}[index{X}],penumbraDarkness{X});
#else
nextShadow=computeShadowWithCSMPCSS64(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],depthTexture{X},shadowTexture{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w,lightSizeUVCorrection{X}[index{X}],depthCorrection{X}[index{X}],penumbraDarkness{X});
#endif
#else
nextShadow=computeShadowCSM(float(index{X}),vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],shadowTexture{X},light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#endif
shadow=mix(nextShadow,shadow,diffRatio);
#ifdef SHADOWCSMDEBUG{X}
shadowDebug{X}=mix(vec3(nextShadow)*vCascadeColorsMultiplier{X}[index{X}],shadowDebug{X},diffRatio);
#endif
}
#endif
}
#elif defined(SHADOWCLOSEESM{X})
#if defined(SHADOWCUBE{X})
shadow=computeShadowWithCloseESMCube(vPositionW,light{X}.vLightData.xyz,shadowTexture{X},light{X}.shadowsInfo.x,light{X}.shadowsInfo.z,light{X}.depthValues);
#else
shadow=computeShadowWithCloseESM(vPositionFromLight{X},vDepthMetric{X},shadowTexture{X},light{X}.shadowsInfo.x,light{X}.shadowsInfo.z,light{X}.shadowsInfo.w);
#endif
#elif defined(SHADOWESM{X})
#if defined(SHADOWCUBE{X})
shadow=computeShadowWithESMCube(vPositionW,light{X}.vLightData.xyz,shadowTexture{X},light{X}.shadowsInfo.x,light{X}.shadowsInfo.z,light{X}.depthValues);
#else
shadow=computeShadowWithESM(vPositionFromLight{X},vDepthMetric{X},shadowTexture{X},light{X}.shadowsInfo.x,light{X}.shadowsInfo.z,light{X}.shadowsInfo.w);
#endif
#elif defined(SHADOWPOISSON{X})
#if defined(SHADOWCUBE{X})
shadow=computeShadowWithPoissonSamplingCube(vPositionW,light{X}.vLightData.xyz,shadowTexture{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.x,light{X}.depthValues);
#else
shadow=computeShadowWithPoissonSampling(vPositionFromLight{X},vDepthMetric{X},shadowTexture{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#endif
#elif defined(SHADOWPCF{X})
#if defined(SHADOWLOWQUALITY{X})
shadow=computeShadowWithPCF1(vPositionFromLight{X},vDepthMetric{X},shadowTexture{X},light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#elif defined(SHADOWMEDIUMQUALITY{X})
shadow=computeShadowWithPCF3(vPositionFromLight{X},vDepthMetric{X},shadowTexture{X},light{X}.shadowsInfo.yz,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#else
shadow=computeShadowWithPCF5(vPositionFromLight{X},vDepthMetric{X},shadowTexture{X},light{X}.shadowsInfo.yz,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#endif
#elif defined(SHADOWPCSS{X})
#if defined(SHADOWLOWQUALITY{X})
shadow=computeShadowWithPCSS16(vPositionFromLight{X},vDepthMetric{X},depthTexture{X},shadowTexture{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#elif defined(SHADOWMEDIUMQUALITY{X})
shadow=computeShadowWithPCSS32(vPositionFromLight{X},vDepthMetric{X},depthTexture{X},shadowTexture{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#else
shadow=computeShadowWithPCSS64(vPositionFromLight{X},vDepthMetric{X},depthTexture{X},shadowTexture{X},light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#endif
#else
#if defined(SHADOWCUBE{X})
shadow=computeShadowCube(vPositionW,light{X}.vLightData.xyz,shadowTexture{X},light{X}.shadowsInfo.x,light{X}.depthValues);
#else
shadow=computeShadow(vPositionFromLight{X},vDepthMetric{X},shadowTexture{X},light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#endif
#endif
#ifdef SHADOWONLY
#ifndef SHADOWINUSE
#define SHADOWINUSE
#endif
globalShadow+=shadow;shadowLightCount+=1.0;
#endif
#else
shadow=1.;
#endif
aggShadow+=shadow;numLights+=1.0;
#ifndef SHADOWONLY
#ifdef CUSTOMUSERLIGHTING
diffuseBase+=computeCustomDiffuseLighting(info,diffuseBase,shadow);
#ifdef SPECULARTERM
specularBase+=computeCustomSpecularLighting(info,specularBase,shadow);
#endif
#elif defined(LIGHTMAP) && defined(LIGHTMAPEXCLUDED{X})
diffuseBase+=lightmapColor.rgb*shadow;
#ifdef SPECULARTERM
#ifndef LIGHTMAPNOSPECULAR{X}
specularBase+=info.specular*shadow*lightmapColor.rgb;
#endif
#endif
#ifdef CLEARCOAT
#ifndef LIGHTMAPNOSPECULAR{X}
clearCoatBase+=info.clearCoat.rgb*shadow*lightmapColor.rgb;
#endif
#endif
#ifdef SHEEN
#ifndef LIGHTMAPNOSPECULAR{X}
sheenBase+=info.sheen.rgb*shadow;
#endif
#endif
#else
#ifdef SHADOWCSMDEBUG{X}
diffuseBase+=info.diffuse*shadowDebug{X};
#else
diffuseBase+=info.diffuse*shadow;
#endif
#ifdef SS_TRANSLUCENCY
diffuseTransmissionBase+=info.diffuseTransmission*shadow;
#endif
#ifdef SPECULARTERM
specularBase+=info.specular*shadow;
#endif
#ifdef CLEARCOAT
clearCoatBase+=info.clearCoat.rgb*shadow;
#endif
#ifdef SHEEN
sheenBase+=info.sheen.rgb*shadow;
#endif
#endif
#endif
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const lightFragment = {
    name,
    shader
}; //# sourceMappingURL=lightFragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/logDepthFragment.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "logDepthFragment",
    ()=>logDepthFragment
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "logDepthFragment";
const shader = `#ifdef LOGARITHMICDEPTH
gl_FragDepthEXT=log2(vFragmentDepth)*logarithmicDepthConstant*0.5;
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const logDepthFragment = {
    name,
    shader
}; //# sourceMappingURL=logDepthFragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/fogFragment.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "fogFragment",
    ()=>fogFragment
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "fogFragment";
const shader = `#ifdef FOG
float fog=CalcFogFactor();
#ifdef PBR
fog=toLinearSpace(fog);
#endif
color.rgb=mix(vFogColor,color.rgb,fog);
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const fogFragment = {
    name,
    shader
}; //# sourceMappingURL=fogFragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/vertexColorMixing.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "vertexColorMixing",
    ()=>vertexColorMixing
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "vertexColorMixing";
const shader = `#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
vColor=vec4(1.0);
#ifdef VERTEXCOLOR
#ifdef VERTEXALPHA
vColor*=colorUpdated;
#else
vColor.rgb*=colorUpdated.rgb;
#endif
#endif
#ifdef INSTANCESCOLOR
vColor*=instanceColor;
#endif
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const vertexColorMixing = {
    name,
    shader
}; //# sourceMappingURL=vertexColorMixing.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/decalVertexDeclaration.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "decalVertexDeclaration",
    ()=>decalVertexDeclaration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "decalVertexDeclaration";
const shader = `#ifdef DECAL
uniform vec4 vDecalInfos;uniform mat4 decalMatrix;
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const decalVertexDeclaration = {
    name,
    shader
}; //# sourceMappingURL=decalVertexDeclaration.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/pbrVertexDeclaration.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "pbrVertexDeclaration",
    ()=>pbrVertexDeclaration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$decalVertexDeclaration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/decalVertexDeclaration.js [app-ssr] (ecmascript)");
;
;
const name = "pbrVertexDeclaration";
const shader = `uniform mat4 view;uniform mat4 viewProjection;uniform vec4 vEyePosition;
#ifdef MULTIVIEW
mat4 viewProjectionR;
#endif
#ifdef ALBEDO
uniform mat4 albedoMatrix;uniform vec2 vAlbedoInfos;
#endif
#ifdef BASE_WEIGHT
uniform mat4 baseWeightMatrix;uniform vec2 vBaseWeightInfos;
#endif
uniform float baseDiffuseRoughness;
#ifdef BASE_DIFFUSE_ROUGHNESS
uniform mat4 baseDiffuseRoughnessMatrix;uniform vec2 vBaseDiffuseRoughnessInfos;
#endif
#ifdef AMBIENT
uniform mat4 ambientMatrix;uniform vec4 vAmbientInfos;
#endif
#ifdef OPACITY
uniform mat4 opacityMatrix;uniform vec2 vOpacityInfos;
#endif
#ifdef EMISSIVE
uniform vec2 vEmissiveInfos;uniform mat4 emissiveMatrix;
#endif
#ifdef LIGHTMAP
uniform vec2 vLightmapInfos;uniform mat4 lightmapMatrix;
#endif
#ifdef REFLECTIVITY
uniform vec3 vReflectivityInfos;uniform mat4 reflectivityMatrix;
#endif
#ifdef METALLIC_REFLECTANCE
uniform vec2 vMetallicReflectanceInfos;uniform mat4 metallicReflectanceMatrix;
#endif
#ifdef REFLECTANCE
uniform vec2 vReflectanceInfos;uniform mat4 reflectanceMatrix;
#endif
#ifdef MICROSURFACEMAP
uniform vec2 vMicroSurfaceSamplerInfos;uniform mat4 microSurfaceSamplerMatrix;
#endif
#ifdef BUMP
uniform vec3 vBumpInfos;uniform mat4 bumpMatrix;
#endif
#ifdef POINTSIZE
uniform float pointSize;
#endif
uniform vec4 cameraInfo;
#ifdef REFLECTION
uniform vec2 vReflectionInfos;uniform mat4 reflectionMatrix;
#endif
#ifdef CLEARCOAT
#if defined(CLEARCOAT_TEXTURE) || defined(CLEARCOAT_TEXTURE_ROUGHNESS)
uniform vec4 vClearCoatInfos;
#endif
#ifdef CLEARCOAT_TEXTURE
uniform mat4 clearCoatMatrix;
#endif
#ifdef CLEARCOAT_TEXTURE_ROUGHNESS
uniform mat4 clearCoatRoughnessMatrix;
#endif
#ifdef CLEARCOAT_BUMP
uniform vec2 vClearCoatBumpInfos;uniform mat4 clearCoatBumpMatrix;
#endif
#ifdef CLEARCOAT_TINT_TEXTURE
uniform vec2 vClearCoatTintInfos;uniform mat4 clearCoatTintMatrix;
#endif
#endif
#ifdef IRIDESCENCE
#if defined(IRIDESCENCE_TEXTURE) || defined(IRIDESCENCE_THICKNESS_TEXTURE)
uniform vec4 vIridescenceInfos;
#endif
#ifdef IRIDESCENCE_TEXTURE
uniform mat4 iridescenceMatrix;
#endif
#ifdef IRIDESCENCE_THICKNESS_TEXTURE
uniform mat4 iridescenceThicknessMatrix;
#endif
#endif
#ifdef ANISOTROPIC
#ifdef ANISOTROPIC_TEXTURE
uniform vec2 vAnisotropyInfos;uniform mat4 anisotropyMatrix;
#endif
#endif
#ifdef SHEEN
#if defined(SHEEN_TEXTURE) || defined(SHEEN_TEXTURE_ROUGHNESS)
uniform vec4 vSheenInfos;
#endif
#ifdef SHEEN_TEXTURE
uniform mat4 sheenMatrix;
#endif
#ifdef SHEEN_TEXTURE_ROUGHNESS
uniform mat4 sheenRoughnessMatrix;
#endif
#endif
#ifdef SUBSURFACE
#ifdef SS_REFRACTION
uniform vec4 vRefractionInfos;uniform mat4 refractionMatrix;
#endif
#ifdef SS_THICKNESSANDMASK_TEXTURE
uniform vec2 vThicknessInfos;uniform mat4 thicknessMatrix;
#endif
#ifdef SS_REFRACTIONINTENSITY_TEXTURE
uniform vec2 vRefractionIntensityInfos;uniform mat4 refractionIntensityMatrix;
#endif
#ifdef SS_TRANSLUCENCYINTENSITY_TEXTURE
uniform vec2 vTranslucencyIntensityInfos;uniform mat4 translucencyIntensityMatrix;
#endif
#ifdef SS_TRANSLUCENCYCOLOR_TEXTURE
uniform vec2 vTranslucencyColorInfos;uniform mat4 translucencyColorMatrix;
#endif
#endif
#ifdef NORMAL
#if defined(USESPHERICALFROMREFLECTIONMAP) && defined(USESPHERICALINVERTEX)
#ifdef USESPHERICALFROMREFLECTIONMAP
#ifdef SPHERICAL_HARMONICS
uniform vec3 vSphericalL00;uniform vec3 vSphericalL1_1;uniform vec3 vSphericalL10;uniform vec3 vSphericalL11;uniform vec3 vSphericalL2_2;uniform vec3 vSphericalL2_1;uniform vec3 vSphericalL20;uniform vec3 vSphericalL21;uniform vec3 vSphericalL22;
#else
uniform vec3 vSphericalX;uniform vec3 vSphericalY;uniform vec3 vSphericalZ;uniform vec3 vSphericalXX_ZZ;uniform vec3 vSphericalYY_ZZ;uniform vec3 vSphericalZZ;uniform vec3 vSphericalXY;uniform vec3 vSphericalYZ;uniform vec3 vSphericalZX;
#endif
#endif
#endif
#endif
#ifdef DETAIL
uniform vec4 vDetailInfos;uniform mat4 detailMatrix;
#endif
#include<decalVertexDeclaration>
#define ADDITIONAL_VERTEX_DECLARATION
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const pbrVertexDeclaration = {
    name,
    shader
}; //# sourceMappingURL=pbrVertexDeclaration.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/pbrUboDeclaration.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "pbrUboDeclaration",
    ()=>pbrUboDeclaration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$sceneUboDeclaration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/sceneUboDeclaration.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$meshUboDeclaration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/meshUboDeclaration.js [app-ssr] (ecmascript)");
;
;
;
const name = "pbrUboDeclaration";
const shader = `layout(std140,column_major) uniform;uniform Material {vec2 vAlbedoInfos;vec2 vBaseWeightInfos;vec2 vBaseDiffuseRoughnessInfos;vec4 vAmbientInfos;vec2 vOpacityInfos;vec2 vEmissiveInfos;vec2 vLightmapInfos;vec3 vReflectivityInfos;vec2 vMicroSurfaceSamplerInfos;vec3 vBumpInfos;mat4 albedoMatrix;mat4 baseWeightMatrix;mat4 baseDiffuseRoughnessMatrix;mat4 ambientMatrix;mat4 opacityMatrix;mat4 emissiveMatrix;mat4 lightmapMatrix;mat4 reflectivityMatrix;mat4 microSurfaceSamplerMatrix;mat4 bumpMatrix;vec2 vTangentSpaceParams;vec4 vAlbedoColor;float baseWeight;float baseDiffuseRoughness;vec4 vLightingIntensity;float pointSize;vec4 vReflectivityColor;vec3 vEmissiveColor;vec3 vAmbientColor;vec2 vDebugMode;vec4 vMetallicReflectanceFactors;vec2 vMetallicReflectanceInfos;mat4 metallicReflectanceMatrix;vec2 vReflectanceInfos;mat4 reflectanceMatrix;vec4 cameraInfo;vec2 vReflectionInfos;mat4 reflectionMatrix;vec3 vReflectionMicrosurfaceInfos;vec3 vReflectionPosition;vec3 vReflectionSize;vec2 vReflectionFilteringInfo;vec3 vReflectionDominantDirection;vec3 vReflectionColor;vec3 vSphericalL00;vec3 vSphericalL1_1;vec3 vSphericalL10;vec3 vSphericalL11;vec3 vSphericalL2_2;vec3 vSphericalL2_1;vec3 vSphericalL20;vec3 vSphericalL21;vec3 vSphericalL22;vec3 vSphericalX;vec3 vSphericalY;vec3 vSphericalZ;vec3 vSphericalXX_ZZ;vec3 vSphericalYY_ZZ;vec3 vSphericalZZ;vec3 vSphericalXY;vec3 vSphericalYZ;vec3 vSphericalZX;
#define ADDITIONAL_UBO_DECLARATION
};
#include<sceneUboDeclaration>
#include<meshUboDeclaration>
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const pbrUboDeclaration = {
    name,
    shader
}; //# sourceMappingURL=pbrUboDeclaration.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/uvAttributeDeclaration.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "uvAttributeDeclaration",
    ()=>uvAttributeDeclaration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "uvAttributeDeclaration";
const shader = `#ifdef UV{X}
attribute vec2 uv{X};
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const uvAttributeDeclaration = {
    name,
    shader
}; //# sourceMappingURL=uvAttributeDeclaration.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/mainUVVaryingDeclaration.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "mainUVVaryingDeclaration",
    ()=>mainUVVaryingDeclaration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "mainUVVaryingDeclaration";
const shader = `#ifdef MAINUV{X}
varying vec2 vMainUV{X};
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const mainUVVaryingDeclaration = {
    name,
    shader
}; //# sourceMappingURL=mainUVVaryingDeclaration.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/pbrBRDFFunctions.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "pbrBRDFFunctions",
    ()=>pbrBRDFFunctions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "pbrBRDFFunctions";
const shader = `#define FRESNEL_MAXIMUM_ON_ROUGH 0.25
#define BRDF_DIFFUSE_MODEL_EON 0
#define BRDF_DIFFUSE_MODEL_BURLEY 1
#define BRDF_DIFFUSE_MODEL_LAMBERT 2
#define BRDF_DIFFUSE_MODEL_LEGACY 3
#define DIELECTRIC_SPECULAR_MODEL_GLTF 0
#define DIELECTRIC_SPECULAR_MODEL_OPENPBR 1
#define CONDUCTOR_SPECULAR_MODEL_GLTF 0
#define CONDUCTOR_SPECULAR_MODEL_OPENPBR 1
#if !defined(PBR_VERTEX_SHADER) && !defined(OPENPBR_VERTEX_SHADER)
#ifdef MS_BRDF_ENERGY_CONSERVATION
vec3 getEnergyConservationFactor(const vec3 specularEnvironmentR0,const vec3 environmentBrdf) {return 1.0+specularEnvironmentR0*(1.0/environmentBrdf.y-1.0);}
#endif
#if CONDUCTOR_SPECULAR_MODEL==CONDUCTOR_SPECULAR_MODEL_OPENPBR 
vec3 getF82Specular(float NdotV,vec3 F0,vec3 edgeTint,float roughness) {const float cos_theta_max=0.142857143; 
const float one_minus_cos_theta_max_to_the_fifth=0.462664366; 
const float one_minus_cos_theta_max_to_the_sixth=0.396569457; 
vec3 white_minus_F0=vec3(1.0)-F0;vec3 b_numerator=(F0+white_minus_F0*one_minus_cos_theta_max_to_the_fifth)*(vec3(1.0)-edgeTint);const float b_denominator=cos_theta_max*one_minus_cos_theta_max_to_the_sixth;const float b_denominator_reciprocal=1.0/b_denominator;vec3 b=b_numerator*b_denominator_reciprocal; 
float cos_theta=max(roughness,NdotV);float one_minus_cos_theta=1.0-cos_theta;vec3 offset_from_F0=(white_minus_F0-b*cos_theta*one_minus_cos_theta)*pow(one_minus_cos_theta,5.0);return clamp(F0+offset_from_F0,0.0,1.0);}
#endif
#ifdef FUZZENVIRONMENTBRDF
vec3 getFuzzBRDFLookup(float NdotV,float perceptualRoughness) {vec2 UV=vec2(perceptualRoughness,NdotV);vec4 brdfLookup=texture2D(environmentFuzzBrdfSampler,UV);const vec2 RiRange=vec2(0.0,0.75);const vec2 ARange =vec2(0.005,0.88);const vec2 BRange =vec2(-0.18,0.002);brdfLookup.r=mix(ARange.x, ARange.y, brdfLookup.r);brdfLookup.g=mix(BRange.x, BRange.y, brdfLookup.g);brdfLookup.b=mix(RiRange.x,RiRange.y,brdfLookup.b);return brdfLookup.rgb;}
#endif
#ifdef ENVIRONMENTBRDF
vec3 getBRDFLookup(float NdotV,float perceptualRoughness) {vec2 UV=vec2(NdotV,perceptualRoughness);vec4 brdfLookup=texture2D(environmentBrdfSampler,UV);
#ifdef ENVIRONMENTBRDF_RGBD
brdfLookup.rgb=fromRGBD(brdfLookup.rgba);
#endif
return brdfLookup.rgb;}
vec3 getReflectanceFromBRDFLookup(const vec3 specularEnvironmentR0,const vec3 specularEnvironmentR90,const vec3 environmentBrdf) {
#ifdef BRDF_V_HEIGHT_CORRELATED
vec3 reflectance=(specularEnvironmentR90-specularEnvironmentR0)*environmentBrdf.x+specularEnvironmentR0*environmentBrdf.y;
#else
vec3 reflectance=specularEnvironmentR0*environmentBrdf.x+specularEnvironmentR90*environmentBrdf.y;
#endif
return reflectance;}
vec3 getReflectanceFromBRDFLookup(const vec3 specularEnvironmentR0,const vec3 environmentBrdf) {
#ifdef BRDF_V_HEIGHT_CORRELATED
vec3 reflectance=mix(environmentBrdf.xxx,environmentBrdf.yyy,specularEnvironmentR0);
#else
vec3 reflectance=specularEnvironmentR0*environmentBrdf.x+environmentBrdf.y;
#endif
return reflectance;}
#endif
/* NOT USED
#if defined(SHEEN) && defined(SHEEN_SOFTER)
float getBRDFLookupCharlieSheen(float NdotV,float perceptualRoughness)
{float c=1.0-NdotV;float c3=c*c*c;return 0.65584461*c3+1.0/(4.16526551+exp(-7.97291361*perceptualRoughness+6.33516894));}
#endif
*/
#if !defined(ENVIRONMENTBRDF) || defined(REFLECTIONMAP_SKYBOX) || defined(ALPHAFRESNEL)
vec3 getReflectanceFromAnalyticalBRDFLookup_Jones(float VdotN,vec3 reflectance0,vec3 reflectance90,float smoothness)
{float weight=mix(FRESNEL_MAXIMUM_ON_ROUGH,1.0,smoothness);return reflectance0+weight*(reflectance90-reflectance0)*pow5(saturate(1.0-VdotN));}
#endif
#if defined(SHEEN) && defined(ENVIRONMENTBRDF)
/**
* The sheen BRDF not containing F can be easily stored in the blue channel of the BRDF texture.
* The blue channel contains DCharlie*VAshikhmin*NdotL as a lokkup table
*/
vec3 getSheenReflectanceFromBRDFLookup(const vec3 reflectance0,const vec3 environmentBrdf) {vec3 sheenEnvironmentReflectance=reflectance0*environmentBrdf.b;return sheenEnvironmentReflectance;}
#endif
vec3 fresnelSchlickGGX(float VdotH,vec3 reflectance0,vec3 reflectance90)
{return reflectance0+(reflectance90-reflectance0)*pow5(1.0-VdotH);}
float fresnelSchlickGGX(float VdotH,float reflectance0,float reflectance90)
{return reflectance0+(reflectance90-reflectance0)*pow5(1.0-VdotH);}
#ifdef CLEARCOAT
vec3 getR0RemappedForClearCoat(vec3 f0) {
#ifdef CLEARCOAT_DEFAULTIOR
#ifdef MOBILE
return saturate(f0*(f0*0.526868+0.529324)-0.0482256);
#else
return saturate(f0*(f0*(0.941892-0.263008*f0)+0.346479)-0.0285998);
#endif
#else
vec3 s=sqrt(f0);vec3 t=(vClearCoatRefractionParams.z+vClearCoatRefractionParams.w*s)/(vClearCoatRefractionParams.w+vClearCoatRefractionParams.z*s);return square(t);
#endif
}
#endif
#ifdef IRIDESCENCE
const mat3 XYZ_TO_REC709=mat3(
3.2404542,-0.9692660, 0.0556434,
-1.5371385, 1.8760108,-0.2040259,
-0.4985314, 0.0415560, 1.0572252
);vec3 getIORTfromAirToSurfaceR0(vec3 f0) {vec3 sqrtF0=sqrt(f0);return (1.+sqrtF0)/(1.-sqrtF0);}
vec3 getR0fromIORs(vec3 iorT,float iorI) {return square((iorT-vec3(iorI))/(iorT+vec3(iorI)));}
float getR0fromIORs(float iorT,float iorI) {return square((iorT-iorI)/(iorT+iorI));}
vec3 evalSensitivity(float opd,vec3 shift) {float phase=2.0*PI*opd*1.0e-9;const vec3 val=vec3(5.4856e-13,4.4201e-13,5.2481e-13);const vec3 pos=vec3(1.6810e+06,1.7953e+06,2.2084e+06);const vec3 var=vec3(4.3278e+09,9.3046e+09,6.6121e+09);vec3 xyz=val*sqrt(2.0*PI*var)*cos(pos*phase+shift)*exp(-square(phase)*var);xyz.x+=9.7470e-14*sqrt(2.0*PI*4.5282e+09)*cos(2.2399e+06*phase+shift[0])*exp(-4.5282e+09*square(phase));xyz/=1.0685e-7;vec3 srgb=XYZ_TO_REC709*xyz;return srgb;}
vec3 evalIridescence(float outsideIOR,float eta2,float cosTheta1,float thinFilmThickness,vec3 baseF0) {vec3 I=vec3(1.0);float iridescenceIOR=mix(outsideIOR,eta2,smoothstep(0.0,0.03,thinFilmThickness));float sinTheta2Sq=square(outsideIOR/iridescenceIOR)*(1.0-square(cosTheta1));float cosTheta2Sq=1.0-sinTheta2Sq;if (cosTheta2Sq<0.0) {return I;}
float cosTheta2=sqrt(cosTheta2Sq);float R0=getR0fromIORs(iridescenceIOR,outsideIOR);float R12=fresnelSchlickGGX(cosTheta1,R0,1.);float R21=R12;float T121=1.0-R12;float phi12=0.0;if (iridescenceIOR<outsideIOR) phi12=PI;float phi21=PI-phi12;vec3 baseIOR=getIORTfromAirToSurfaceR0(clamp(baseF0,0.0,0.9999)); 
vec3 R1=getR0fromIORs(baseIOR,iridescenceIOR);vec3 R23=fresnelSchlickGGX(cosTheta2,R1,vec3(1.));vec3 phi23=vec3(0.0);if (baseIOR[0]<iridescenceIOR) phi23[0]=PI;if (baseIOR[1]<iridescenceIOR) phi23[1]=PI;if (baseIOR[2]<iridescenceIOR) phi23[2]=PI;float opd=2.0*iridescenceIOR*thinFilmThickness*cosTheta2;vec3 phi=vec3(phi21)+phi23;vec3 R123=clamp(R12*R23,1e-5,0.9999);vec3 r123=sqrt(R123);vec3 Rs=square(T121)*R23/(vec3(1.0)-R123);vec3 C0=R12+Rs;I=C0;vec3 Cm=Rs-T121;for (int m=1; m<=2; ++m)
{Cm*=r123;vec3 Sm=2.0*evalSensitivity(float(m)*opd,float(m)*phi);I+=Cm*Sm;}
return max(I,vec3(0.0));}
#endif
float normalDistributionFunction_TrowbridgeReitzGGX(float NdotH,float alphaG)
{float a2=square(alphaG);float d=NdotH*NdotH*(a2-1.0)+1.0;return a2/(PI*d*d);}
#ifdef SHEEN
float normalDistributionFunction_CharlieSheen(float NdotH,float alphaG)
{float invR=1./alphaG;float cos2h=NdotH*NdotH;float sin2h=1.-cos2h;return (2.+invR)*pow(sin2h,invR*.5)/(2.*PI);}
#endif
#ifdef ANISOTROPIC
float normalDistributionFunction_BurleyGGX_Anisotropic(float NdotH,float TdotH,float BdotH,const vec2 alphaTB) {float a2=alphaTB.x*alphaTB.y;vec3 v=vec3(alphaTB.y*TdotH,alphaTB.x *BdotH,a2*NdotH);float v2=dot(v,v);float w2=a2/v2;return a2*w2*w2*RECIPROCAL_PI;}
#endif
#ifdef BRDF_V_HEIGHT_CORRELATED
float smithVisibility_GGXCorrelated(float NdotL,float NdotV,float alphaG) {
#ifdef MOBILE
float GGXV=NdotL*(NdotV*(1.0-alphaG)+alphaG);float GGXL=NdotV*(NdotL*(1.0-alphaG)+alphaG);return 0.5/(GGXV+GGXL);
#else
float a2=alphaG*alphaG;float GGXV=NdotL*sqrt(NdotV*(NdotV-a2*NdotV)+a2);float GGXL=NdotV*sqrt(NdotL*(NdotL-a2*NdotL)+a2);return 0.5/(GGXV+GGXL);
#endif
}
#else
float smithVisibilityG1_TrowbridgeReitzGGXFast(float dot,float alphaG)
{
#ifdef MOBILE
return 1.0/(dot+alphaG+(1.0-alphaG)*dot ));
#else
float alphaSquared=alphaG*alphaG;return 1.0/(dot+sqrt(alphaSquared+(1.0-alphaSquared)*dot*dot));
#endif
}
float smithVisibility_TrowbridgeReitzGGXFast(float NdotL,float NdotV,float alphaG)
{float visibility=smithVisibilityG1_TrowbridgeReitzGGXFast(NdotL,alphaG)*smithVisibilityG1_TrowbridgeReitzGGXFast(NdotV,alphaG);return visibility;}
#endif
#ifdef ANISOTROPIC
float smithVisibility_GGXCorrelated_Anisotropic(float NdotL,float NdotV,float TdotV,float BdotV,float TdotL,float BdotL,const vec2 alphaTB) {float lambdaV=NdotL*length(vec3(alphaTB.x*TdotV,alphaTB.y*BdotV,NdotV));float lambdaL=NdotV*length(vec3(alphaTB.x*TdotL,alphaTB.y*BdotL,NdotL));float v=0.5/(lambdaV+lambdaL);return v;}
#endif
#ifdef CLEARCOAT
float visibility_Kelemen(float VdotH) {return 0.25/(VdotH*VdotH); }
#endif
#ifdef SHEEN
float visibility_Ashikhmin(float NdotL,float NdotV)
{return 1./(4.*(NdotL+NdotV-NdotL*NdotV));}
/* NOT USED
#ifdef SHEEN_SOFTER
float l(float x,float alphaG)
{float oneMinusAlphaSq=(1.0-alphaG)*(1.0-alphaG);float a=mix(21.5473,25.3245,oneMinusAlphaSq);float b=mix(3.82987,3.32435,oneMinusAlphaSq);float c=mix(0.19823,0.16801,oneMinusAlphaSq);float d=mix(-1.97760,-1.27393,oneMinusAlphaSq);float e=mix(-4.32054,-4.85967,oneMinusAlphaSq);return a/(1.0+b*pow(x,c))+d*x+e;}
float lambdaSheen(float cosTheta,float alphaG)
{return abs(cosTheta)<0.5 ? exp(l(cosTheta,alphaG)) : exp(2.0*l(0.5,alphaG)-l(1.0-cosTheta,alphaG));}
float visibility_CharlieSheen(float NdotL,float NdotV,float alphaG)
{float G=1.0/(1.0+lambdaSheen(NdotV,alphaG)+lambdaSheen(NdotL,alphaG));return G/(4.0*NdotV*NdotL);}
#endif
*/
#endif
float diffuseBRDF_Burley(float NdotL,float NdotV,float VdotH,float roughness) {float diffuseFresnelNV=pow5(saturateEps(1.0-NdotL));float diffuseFresnelNL=pow5(saturateEps(1.0-NdotV));float diffuseFresnel90=0.5+2.0*VdotH*VdotH*roughness;float fresnel =
(1.0+(diffuseFresnel90-1.0)*diffuseFresnelNL) *
(1.0+(diffuseFresnel90-1.0)*diffuseFresnelNV);return fresnel/PI;}
const float constant1_FON=0.5-2.0/(3.0*PI);const float constant2_FON=2.0/3.0-28.0/(15.0*PI);float E_FON_approx(float mu,float roughness)
{float sigma=roughness; 
float mucomp=1.0-mu;float mucomp2=mucomp*mucomp;const mat2 Gcoeffs=mat2(0.0571085289,-0.332181442,
0.491881867,0.0714429953);float GoverPi=dot(Gcoeffs*vec2(mucomp,mucomp2),vec2(1.0,mucomp2));return (1.0+sigma*GoverPi)/(1.0+constant1_FON*sigma);}
vec3 diffuseBRDF_EON(vec3 albedo,float roughness,float NdotL,float NdotV,float LdotV)
{vec3 rho=albedo;float sigma=roughness; 
float mu_i=NdotL; 
float mu_o=NdotV; 
float s=LdotV-mu_i*mu_o; 
float sovertF=s>0.0 ? s/max(mu_i,mu_o) : s; 
float AF=1.0/(1.0+constant1_FON*sigma); 
vec3 f_ss=(rho*RECIPROCAL_PI)*AF*(1.0+sigma*sovertF); 
float EFo=E_FON_approx(mu_o,sigma); 
float EFi=E_FON_approx(mu_i,sigma); 
float avgEF=AF*(1.0+constant2_FON*sigma); 
vec3 rho_ms=(rho*rho)*avgEF/(vec3(1.0)-rho*(1.0-avgEF));const float eps=1.0e-7;vec3 f_ms=(rho_ms*RECIPROCAL_PI)*max(eps,1.0-EFo) 
* max(eps,1.0-EFi)
/ max(eps,1.0-avgEF);return (f_ss+f_ms);}
#ifdef SS_TRANSLUCENCY
vec3 transmittanceBRDF_Burley(const vec3 tintColor,const vec3 diffusionDistance,float thickness) {vec3 S=1./maxEps(diffusionDistance);vec3 temp=exp((-0.333333333*thickness)*S);return tintColor.rgb*0.25*(temp*temp*temp+3.0*temp);}
float computeWrappedDiffuseNdotL(float NdotL,float w) {float t=1.0+w;float invt2=1.0/square(t);return saturate((NdotL+w)*invt2);}
#endif
#endif 
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const pbrBRDFFunctions = {
    name,
    shader
}; //# sourceMappingURL=pbrBRDFFunctions.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/prePassVertexDeclaration.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "prePassVertexDeclaration",
    ()=>prePassVertexDeclaration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "prePassVertexDeclaration";
const shader = `#ifdef PREPASS
#ifdef PREPASS_LOCAL_POSITION
varying vec3 vPosition;
#endif
#ifdef PREPASS_DEPTH
varying vec3 vViewPos;
#endif
#ifdef PREPASS_NORMALIZED_VIEW_DEPTH
varying float vNormViewDepth;
#endif
#if defined(PREPASS_VELOCITY) || defined(PREPASS_VELOCITY_LINEAR)
uniform mat4 previousViewProjection;varying vec4 vCurrentPosition;varying vec4 vPreviousPosition;
#endif
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const prePassVertexDeclaration = {
    name,
    shader
}; //# sourceMappingURL=prePassVertexDeclaration.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/samplerVertexDeclaration.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "samplerVertexDeclaration",
    ()=>samplerVertexDeclaration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "samplerVertexDeclaration";
const shader = `#if defined(_DEFINENAME_) && _DEFINENAME_DIRECTUV==0
varying vec2 v_VARYINGNAME_UV;
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const samplerVertexDeclaration = {
    name,
    shader
}; //# sourceMappingURL=samplerVertexDeclaration.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/harmonicsFunctions.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "harmonicsFunctions",
    ()=>harmonicsFunctions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "harmonicsFunctions";
const shader = `#ifdef USESPHERICALFROMREFLECTIONMAP
#ifdef SPHERICAL_HARMONICS
vec3 computeEnvironmentIrradiance(vec3 normal) {return vSphericalL00
+ vSphericalL1_1*(normal.y)
+ vSphericalL10*(normal.z)
+ vSphericalL11*(normal.x)
+ vSphericalL2_2*(normal.y*normal.x)
+ vSphericalL2_1*(normal.y*normal.z)
+ vSphericalL20*((3.0*normal.z*normal.z)-1.0)
+ vSphericalL21*(normal.z*normal.x)
+ vSphericalL22*(normal.x*normal.x-(normal.y*normal.y));}
#else
vec3 computeEnvironmentIrradiance(vec3 normal) {float Nx=normal.x;float Ny=normal.y;float Nz=normal.z;vec3 C1=vSphericalZZ.rgb;vec3 Cx=vSphericalX.rgb;vec3 Cy=vSphericalY.rgb;vec3 Cz=vSphericalZ.rgb;vec3 Cxx_zz=vSphericalXX_ZZ.rgb;vec3 Cyy_zz=vSphericalYY_ZZ.rgb;vec3 Cxy=vSphericalXY.rgb;vec3 Cyz=vSphericalYZ.rgb;vec3 Czx=vSphericalZX.rgb;vec3 a1=Cyy_zz*Ny+Cy;vec3 a2=Cyz*Nz+a1;vec3 b1=Czx*Nz+Cx;vec3 b2=Cxy*Ny+b1;vec3 b3=Cxx_zz*Nx+b2;vec3 t1=Cz *Nz+C1;vec3 t2=a2 *Ny+t1;vec3 t3=b3 *Nx+t2;return t3;}
#endif
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const harmonicsFunctions = {
    name,
    shader
}; //# sourceMappingURL=harmonicsFunctions.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/bumpVertexDeclaration.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "bumpVertexDeclaration",
    ()=>bumpVertexDeclaration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "bumpVertexDeclaration";
const shader = `#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)
#if defined(TANGENT) && defined(NORMAL) 
varying mat3 vTBN;
#endif
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const bumpVertexDeclaration = {
    name,
    shader
}; //# sourceMappingURL=bumpVertexDeclaration.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/prePassVertex.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "prePassVertex",
    ()=>prePassVertex
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "prePassVertex";
const shader = `#ifdef PREPASS_DEPTH
vViewPos=(view*worldPos).rgb;
#endif
#ifdef PREPASS_NORMALIZED_VIEW_DEPTH
vNormViewDepth=((view*worldPos).z-cameraInfo.x)/(cameraInfo.y-cameraInfo.x);
#endif
#ifdef PREPASS_LOCAL_POSITION
vPosition=positionUpdated.xyz;
#endif
#if (defined(PREPASS_VELOCITY) || defined(PREPASS_VELOCITY_LINEAR)) && defined(BONES_VELOCITY_ENABLED)
vCurrentPosition=viewProjection*worldPos;
#if NUM_BONE_INFLUENCERS>0
mat4 previousInfluence;previousInfluence=mPreviousBones[int(matricesIndices[0])]*matricesWeights[0];
#if NUM_BONE_INFLUENCERS>1
previousInfluence+=mPreviousBones[int(matricesIndices[1])]*matricesWeights[1];
#endif 
#if NUM_BONE_INFLUENCERS>2
previousInfluence+=mPreviousBones[int(matricesIndices[2])]*matricesWeights[2];
#endif 
#if NUM_BONE_INFLUENCERS>3
previousInfluence+=mPreviousBones[int(matricesIndices[3])]*matricesWeights[3];
#endif
#if NUM_BONE_INFLUENCERS>4
previousInfluence+=mPreviousBones[int(matricesIndicesExtra[0])]*matricesWeightsExtra[0];
#endif 
#if NUM_BONE_INFLUENCERS>5
previousInfluence+=mPreviousBones[int(matricesIndicesExtra[1])]*matricesWeightsExtra[1];
#endif 
#if NUM_BONE_INFLUENCERS>6
previousInfluence+=mPreviousBones[int(matricesIndicesExtra[2])]*matricesWeightsExtra[2];
#endif 
#if NUM_BONE_INFLUENCERS>7
previousInfluence+=mPreviousBones[int(matricesIndicesExtra[3])]*matricesWeightsExtra[3];
#endif
vPreviousPosition=previousViewProjection*finalPreviousWorld*previousInfluence*vec4(positionUpdated,1.0);
#else
vPreviousPosition=previousViewProjection*finalPreviousWorld*vec4(positionUpdated,1.0);
#endif
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const prePassVertex = {
    name,
    shader
}; //# sourceMappingURL=prePassVertex.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/uvVariableDeclaration.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "uvVariableDeclaration",
    ()=>uvVariableDeclaration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "uvVariableDeclaration";
const shader = `#if !defined(UV{X}) && defined(MAINUV{X})
vec2 uv{X}=vec2(0.,0.);
#endif
#ifdef MAINUV{X}
vMainUV{X}=uv{X};
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const uvVariableDeclaration = {
    name,
    shader
}; //# sourceMappingURL=uvVariableDeclaration.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/samplerVertexImplementation.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "samplerVertexImplementation",
    ()=>samplerVertexImplementation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "samplerVertexImplementation";
const shader = `#if defined(_DEFINENAME_) && _DEFINENAME_DIRECTUV==0
if (v_INFONAME_==0.)
{v_VARYINGNAME_UV=vec2(_MATRIXNAME_Matrix*vec4(uvUpdated,1.0,0.0));}
#ifdef UV2
else if (v_INFONAME_==1.)
{v_VARYINGNAME_UV=vec2(_MATRIXNAME_Matrix*vec4(uv2Updated,1.0,0.0));}
#endif
#ifdef UV3
else if (v_INFONAME_==2.)
{v_VARYINGNAME_UV=vec2(_MATRIXNAME_Matrix*vec4(uv3,1.0,0.0));}
#endif
#ifdef UV4
else if (v_INFONAME_==3.)
{v_VARYINGNAME_UV=vec2(_MATRIXNAME_Matrix*vec4(uv4,1.0,0.0));}
#endif
#ifdef UV5
else if (v_INFONAME_==4.)
{v_VARYINGNAME_UV=vec2(_MATRIXNAME_Matrix*vec4(uv5,1.0,0.0));}
#endif
#ifdef UV6
else if (v_INFONAME_==5.)
{v_VARYINGNAME_UV=vec2(_MATRIXNAME_Matrix*vec4(uv6,1.0,0.0));}
#endif
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const samplerVertexImplementation = {
    name,
    shader
}; //# sourceMappingURL=samplerVertexImplementation.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/bumpVertex.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "bumpVertex",
    ()=>bumpVertex
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "bumpVertex";
const shader = `#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)
#if defined(TANGENT) && defined(NORMAL)
vec3 tbnNormal=normalize(normalUpdated);vec3 tbnTangent=normalize(tangentUpdated.xyz);vec3 tbnBitangent=cross(tbnNormal,tbnTangent)*tangentUpdated.w;vTBN=mat3(finalWorld)*mat3(tbnTangent,tbnBitangent,tbnNormal);
#endif
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const bumpVertex = {
    name,
    shader
}; //# sourceMappingURL=bumpVertex.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/prePassDeclaration.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "prePassDeclaration",
    ()=>prePassDeclaration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "prePassDeclaration";
const shader = `#ifdef PREPASS
#extension GL_EXT_draw_buffers : require
layout(location=0) out highp vec4 glFragData[{X}];highp vec4 gl_FragColor;
#ifdef PREPASS_LOCAL_POSITION
varying highp vec3 vPosition;
#endif
#ifdef PREPASS_DEPTH
varying highp vec3 vViewPos;
#endif
#ifdef PREPASS_NORMALIZED_VIEW_DEPTH
varying highp float vNormViewDepth;
#endif
#if defined(PREPASS_VELOCITY) || defined(PREPASS_VELOCITY_LINEAR)
varying highp vec4 vCurrentPosition;varying highp vec4 vPreviousPosition;
#endif
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const prePassDeclaration = {
    name,
    shader
}; //# sourceMappingURL=prePassDeclaration.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/oitDeclaration.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "oitDeclaration",
    ()=>oitDeclaration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "oitDeclaration";
const shader = `#ifdef ORDER_INDEPENDENT_TRANSPARENCY
#extension GL_EXT_draw_buffers : require
layout(location=0) out vec2 depth; 
layout(location=1) out vec4 frontColor;layout(location=2) out vec4 backColor;
#define MAX_DEPTH 99999.0
highp vec4 gl_FragColor;uniform sampler2D oitDepthSampler;uniform sampler2D oitFrontColorSampler;
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const oitDeclaration = {
    name,
    shader
}; //# sourceMappingURL=oitDeclaration.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/decalFragmentDeclaration.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "decalFragmentDeclaration",
    ()=>decalFragmentDeclaration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "decalFragmentDeclaration";
const shader = `#ifdef DECAL
uniform vec4 vDecalInfos;
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const decalFragmentDeclaration = {
    name,
    shader
}; //# sourceMappingURL=decalFragmentDeclaration.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/pbrFragmentDeclaration.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "pbrFragmentDeclaration",
    ()=>pbrFragmentDeclaration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$decalFragmentDeclaration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/decalFragmentDeclaration.js [app-ssr] (ecmascript)");
;
;
const name = "pbrFragmentDeclaration";
const shader = `uniform vec4 vEyePosition;uniform vec3 vReflectionColor;uniform vec4 vAlbedoColor;uniform float baseWeight;uniform float baseDiffuseRoughness;uniform vec4 vLightingIntensity;uniform vec4 vReflectivityColor;uniform vec4 vMetallicReflectanceFactors;uniform vec3 vEmissiveColor;uniform float visibility;uniform vec3 vAmbientColor;
#ifdef ALBEDO
uniform vec2 vAlbedoInfos;
#endif
#ifdef BASE_WEIGHT
uniform vec2 vBaseWeightInfos;
#endif
#ifdef BASE_DIFFUSE_ROUGHNESS
uniform vec2 vBaseDiffuseRoughnessInfos;
#endif
#ifdef AMBIENT
uniform vec4 vAmbientInfos;
#endif
#ifdef BUMP
uniform vec3 vBumpInfos;uniform vec2 vTangentSpaceParams;
#endif
#ifdef OPACITY
uniform vec2 vOpacityInfos;
#endif
#ifdef EMISSIVE
uniform vec2 vEmissiveInfos;
#endif
#ifdef LIGHTMAP
uniform vec2 vLightmapInfos;
#endif
#ifdef REFLECTIVITY
uniform vec3 vReflectivityInfos;
#endif
#ifdef MICROSURFACEMAP
uniform vec2 vMicroSurfaceSamplerInfos;
#endif
#if defined(REFLECTIONMAP_SPHERICAL) || defined(REFLECTIONMAP_PROJECTION) || defined(SS_REFRACTION) || defined(PREPASS)
uniform mat4 view;
#endif
#ifdef REFLECTION
uniform vec2 vReflectionInfos;
#ifdef REALTIME_FILTERING
uniform vec2 vReflectionFilteringInfo;
#endif
uniform mat4 reflectionMatrix;uniform vec3 vReflectionMicrosurfaceInfos;
#if defined(USEIRRADIANCEMAP) && defined(USE_IRRADIANCE_DOMINANT_DIRECTION)
uniform vec3 vReflectionDominantDirection;
#endif
#if defined(USE_LOCAL_REFLECTIONMAP_CUBIC) && defined(REFLECTIONMAP_CUBIC)
uniform vec3 vReflectionPosition;uniform vec3 vReflectionSize;
#endif
#endif
#if defined(SS_REFRACTION) && defined(SS_USE_LOCAL_REFRACTIONMAP_CUBIC)
uniform vec3 vRefractionPosition;uniform vec3 vRefractionSize;
#endif
#ifdef CLEARCOAT
uniform vec2 vClearCoatParams;uniform vec4 vClearCoatRefractionParams;
#if defined(CLEARCOAT_TEXTURE) || defined(CLEARCOAT_TEXTURE_ROUGHNESS)
uniform vec4 vClearCoatInfos;
#endif
#ifdef CLEARCOAT_TEXTURE
uniform mat4 clearCoatMatrix;
#endif
#ifdef CLEARCOAT_TEXTURE_ROUGHNESS
uniform mat4 clearCoatRoughnessMatrix;
#endif
#ifdef CLEARCOAT_BUMP
uniform vec2 vClearCoatBumpInfos;uniform vec2 vClearCoatTangentSpaceParams;uniform mat4 clearCoatBumpMatrix;
#endif
#ifdef CLEARCOAT_TINT
uniform vec4 vClearCoatTintParams;uniform float clearCoatColorAtDistance;
#ifdef CLEARCOAT_TINT_TEXTURE
uniform vec2 vClearCoatTintInfos;uniform mat4 clearCoatTintMatrix;
#endif
#endif
#endif
#ifdef IRIDESCENCE
uniform vec4 vIridescenceParams;
#if defined(IRIDESCENCE_TEXTURE) || defined(IRIDESCENCE_THICKNESS_TEXTURE)
uniform vec4 vIridescenceInfos;
#endif
#ifdef IRIDESCENCE_TEXTURE
uniform mat4 iridescenceMatrix;
#endif
#ifdef IRIDESCENCE_THICKNESS_TEXTURE
uniform mat4 iridescenceThicknessMatrix;
#endif
#endif
#ifdef ANISOTROPIC
uniform vec3 vAnisotropy;
#ifdef ANISOTROPIC_TEXTURE
uniform vec2 vAnisotropyInfos;uniform mat4 anisotropyMatrix;
#endif
#endif
#ifdef SHEEN
uniform vec4 vSheenColor;
#ifdef SHEEN_ROUGHNESS
uniform float vSheenRoughness;
#endif
#if defined(SHEEN_TEXTURE) || defined(SHEEN_TEXTURE_ROUGHNESS)
uniform vec4 vSheenInfos;
#endif
#ifdef SHEEN_TEXTURE
uniform mat4 sheenMatrix;
#endif
#ifdef SHEEN_TEXTURE_ROUGHNESS
uniform mat4 sheenRoughnessMatrix;
#endif
#endif
#ifdef SUBSURFACE
#ifdef SS_REFRACTION
uniform vec4 vRefractionMicrosurfaceInfos;uniform vec4 vRefractionInfos;uniform mat4 refractionMatrix;
#ifdef REALTIME_FILTERING
uniform vec2 vRefractionFilteringInfo;
#endif
#ifdef SS_DISPERSION
uniform float dispersion;
#endif
#endif
#ifdef SS_THICKNESSANDMASK_TEXTURE
uniform vec2 vThicknessInfos;uniform mat4 thicknessMatrix;
#endif
#ifdef SS_REFRACTIONINTENSITY_TEXTURE
uniform vec2 vRefractionIntensityInfos;uniform mat4 refractionIntensityMatrix;
#endif
#ifdef SS_TRANSLUCENCYINTENSITY_TEXTURE
uniform vec2 vTranslucencyIntensityInfos;uniform mat4 translucencyIntensityMatrix;
#endif
uniform vec2 vThicknessParam;uniform vec3 vDiffusionDistance;uniform vec4 vTintColor;uniform vec3 vSubSurfaceIntensity;uniform vec4 vTranslucencyColor;
#ifdef SS_TRANSLUCENCYCOLOR_TEXTURE
uniform vec2 vTranslucencyColorInfos;uniform mat4 translucencyColorMatrix;
#endif
#endif
#ifdef PREPASS
#ifdef SS_SCATTERING
uniform float scatteringDiffusionProfile;
#endif
#endif
#if DEBUGMODE>0
uniform vec2 vDebugMode;
#endif
#ifdef DETAIL
uniform vec4 vDetailInfos;
#endif
#include<decalFragmentDeclaration>
#ifdef USESPHERICALFROMREFLECTIONMAP
#ifdef SPHERICAL_HARMONICS
uniform vec3 vSphericalL00;uniform vec3 vSphericalL1_1;uniform vec3 vSphericalL10;uniform vec3 vSphericalL11;uniform vec3 vSphericalL2_2;uniform vec3 vSphericalL2_1;uniform vec3 vSphericalL20;uniform vec3 vSphericalL21;uniform vec3 vSphericalL22;
#else
uniform vec3 vSphericalX;uniform vec3 vSphericalY;uniform vec3 vSphericalZ;uniform vec3 vSphericalXX_ZZ;uniform vec3 vSphericalYY_ZZ;uniform vec3 vSphericalZZ;uniform vec3 vSphericalXY;uniform vec3 vSphericalYZ;uniform vec3 vSphericalZX;
#endif
#endif
#define ADDITIONAL_FRAGMENT_DECLARATION
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const pbrFragmentDeclaration = {
    name,
    shader
}; //# sourceMappingURL=pbrFragmentDeclaration.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/pbrFragmentExtraDeclaration.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "pbrFragmentExtraDeclaration",
    ()=>pbrFragmentExtraDeclaration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$mainUVVaryingDeclaration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/mainUVVaryingDeclaration.js [app-ssr] (ecmascript)");
;
;
const name = "pbrFragmentExtraDeclaration";
const shader = `varying vec3 vPositionW;
#if DEBUGMODE>0
varying vec4 vClipSpacePosition;
#endif
#include<mainUVVaryingDeclaration>[1..7]
#ifdef NORMAL
varying vec3 vNormalW;
#if defined(USESPHERICALFROMREFLECTIONMAP) && defined(USESPHERICALINVERTEX)
varying vec3 vEnvironmentIrradiance;
#endif
#endif
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
varying vec4 vColor;
#endif
#if defined(CLUSTLIGHT_BATCH) && CLUSTLIGHT_BATCH>0
varying float vViewDepth;
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const pbrFragmentExtraDeclaration = {
    name,
    shader
}; //# sourceMappingURL=pbrFragmentExtraDeclaration.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/samplerFragmentDeclaration.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "samplerFragmentDeclaration",
    ()=>samplerFragmentDeclaration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "samplerFragmentDeclaration";
const shader = `#ifdef _DEFINENAME_
#if _DEFINENAME_DIRECTUV==1
#define v_VARYINGNAME_UV vMainUV1
#elif _DEFINENAME_DIRECTUV==2
#define v_VARYINGNAME_UV vMainUV2
#elif _DEFINENAME_DIRECTUV==3
#define v_VARYINGNAME_UV vMainUV3
#elif _DEFINENAME_DIRECTUV==4
#define v_VARYINGNAME_UV vMainUV4
#elif _DEFINENAME_DIRECTUV==5
#define v_VARYINGNAME_UV vMainUV5
#elif _DEFINENAME_DIRECTUV==6
#define v_VARYINGNAME_UV vMainUV6
#else
varying vec2 v_VARYINGNAME_UV;
#endif
uniform sampler2D _SAMPLERNAME_Sampler;
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const samplerFragmentDeclaration = {
    name,
    shader
}; //# sourceMappingURL=samplerFragmentDeclaration.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/samplerFragmentAlternateDeclaration.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "samplerFragmentAlternateDeclaration",
    ()=>samplerFragmentAlternateDeclaration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "samplerFragmentAlternateDeclaration";
const shader = `#ifdef _DEFINENAME_
#if _DEFINENAME_DIRECTUV==1
#define v_VARYINGNAME_UV vMainUV1
#elif _DEFINENAME_DIRECTUV==2
#define v_VARYINGNAME_UV vMainUV2
#elif _DEFINENAME_DIRECTUV==3
#define v_VARYINGNAME_UV vMainUV3
#elif _DEFINENAME_DIRECTUV==4
#define v_VARYINGNAME_UV vMainUV4
#elif _DEFINENAME_DIRECTUV==5
#define v_VARYINGNAME_UV vMainUV5
#elif _DEFINENAME_DIRECTUV==6
#define v_VARYINGNAME_UV vMainUV6
#else
varying vec2 v_VARYINGNAME_UV;
#endif
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const samplerFragmentAlternateDeclaration = {
    name,
    shader
}; //# sourceMappingURL=samplerFragmentAlternateDeclaration.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/pbrFragmentSamplersDeclaration.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "pbrFragmentSamplersDeclaration",
    ()=>pbrFragmentSamplersDeclaration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$samplerFragmentDeclaration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/samplerFragmentDeclaration.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$samplerFragmentAlternateDeclaration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/samplerFragmentAlternateDeclaration.js [app-ssr] (ecmascript)");
;
;
;
const name = "pbrFragmentSamplersDeclaration";
const shader = `#include<samplerFragmentDeclaration>(_DEFINENAME_,ALBEDO,_VARYINGNAME_,Albedo,_SAMPLERNAME_,albedo)
#include<samplerFragmentDeclaration>(_DEFINENAME_,BASE_WEIGHT,_VARYINGNAME_,BaseWeight,_SAMPLERNAME_,baseWeight)
#include<samplerFragmentDeclaration>(_DEFINENAME_,BASE_DIFFUSE_ROUGHNESS,_VARYINGNAME_,BaseDiffuseRoughness,_SAMPLERNAME_,baseDiffuseRoughness)
#include<samplerFragmentDeclaration>(_DEFINENAME_,AMBIENT,_VARYINGNAME_,Ambient,_SAMPLERNAME_,ambient)
#include<samplerFragmentDeclaration>(_DEFINENAME_,OPACITY,_VARYINGNAME_,Opacity,_SAMPLERNAME_,opacity)
#include<samplerFragmentDeclaration>(_DEFINENAME_,EMISSIVE,_VARYINGNAME_,Emissive,_SAMPLERNAME_,emissive)
#include<samplerFragmentDeclaration>(_DEFINENAME_,LIGHTMAP,_VARYINGNAME_,Lightmap,_SAMPLERNAME_,lightmap)
#include<samplerFragmentDeclaration>(_DEFINENAME_,REFLECTIVITY,_VARYINGNAME_,Reflectivity,_SAMPLERNAME_,reflectivity)
#include<samplerFragmentDeclaration>(_DEFINENAME_,MICROSURFACEMAP,_VARYINGNAME_,MicroSurfaceSampler,_SAMPLERNAME_,microSurface)
#include<samplerFragmentDeclaration>(_DEFINENAME_,METALLIC_REFLECTANCE,_VARYINGNAME_,MetallicReflectance,_SAMPLERNAME_,metallicReflectance)
#include<samplerFragmentDeclaration>(_DEFINENAME_,REFLECTANCE,_VARYINGNAME_,Reflectance,_SAMPLERNAME_,reflectance)
#include<samplerFragmentDeclaration>(_DEFINENAME_,DECAL,_VARYINGNAME_,Decal,_SAMPLERNAME_,decal)
#ifdef CLEARCOAT
#include<samplerFragmentDeclaration>(_DEFINENAME_,CLEARCOAT_TEXTURE,_VARYINGNAME_,ClearCoat,_SAMPLERNAME_,clearCoat)
#include<samplerFragmentAlternateDeclaration>(_DEFINENAME_,CLEARCOAT_TEXTURE_ROUGHNESS,_VARYINGNAME_,ClearCoatRoughness)
#if defined(CLEARCOAT_TEXTURE_ROUGHNESS)
uniform sampler2D clearCoatRoughnessSampler;
#endif
#include<samplerFragmentDeclaration>(_DEFINENAME_,CLEARCOAT_BUMP,_VARYINGNAME_,ClearCoatBump,_SAMPLERNAME_,clearCoatBump)
#include<samplerFragmentDeclaration>(_DEFINENAME_,CLEARCOAT_TINT_TEXTURE,_VARYINGNAME_,ClearCoatTint,_SAMPLERNAME_,clearCoatTint)
#endif
#ifdef IRIDESCENCE
#include<samplerFragmentDeclaration>(_DEFINENAME_,IRIDESCENCE_TEXTURE,_VARYINGNAME_,Iridescence,_SAMPLERNAME_,iridescence)
#include<samplerFragmentDeclaration>(_DEFINENAME_,IRIDESCENCE_THICKNESS_TEXTURE,_VARYINGNAME_,IridescenceThickness,_SAMPLERNAME_,iridescenceThickness)
#endif
#ifdef SHEEN
#include<samplerFragmentDeclaration>(_DEFINENAME_,SHEEN_TEXTURE,_VARYINGNAME_,Sheen,_SAMPLERNAME_,sheen)
#include<samplerFragmentAlternateDeclaration>(_DEFINENAME_,SHEEN_TEXTURE_ROUGHNESS,_VARYINGNAME_,SheenRoughness)
#if defined(SHEEN_ROUGHNESS) && defined(SHEEN_TEXTURE_ROUGHNESS)
uniform sampler2D sheenRoughnessSampler;
#endif
#endif
#ifdef ANISOTROPIC
#include<samplerFragmentDeclaration>(_DEFINENAME_,ANISOTROPIC_TEXTURE,_VARYINGNAME_,Anisotropy,_SAMPLERNAME_,anisotropy)
#endif
#ifdef REFLECTION
#ifdef REFLECTIONMAP_3D
#define sampleReflection(s,c) textureCube(s,c)
uniform samplerCube reflectionSampler;
#ifdef LODBASEDMICROSFURACE
#define sampleReflectionLod(s,c,l) textureCubeLodEXT(s,c,l)
#else
uniform samplerCube reflectionSamplerLow;uniform samplerCube reflectionSamplerHigh;
#endif
#ifdef USEIRRADIANCEMAP
uniform samplerCube irradianceSampler;
#endif
#else
#define sampleReflection(s,c) texture2D(s,c)
uniform sampler2D reflectionSampler;
#ifdef LODBASEDMICROSFURACE
#define sampleReflectionLod(s,c,l) texture2DLodEXT(s,c,l)
#else
uniform sampler2D reflectionSamplerLow;uniform sampler2D reflectionSamplerHigh;
#endif
#ifdef USEIRRADIANCEMAP
uniform sampler2D irradianceSampler;
#endif
#endif
#ifdef REFLECTIONMAP_SKYBOX
varying vec3 vPositionUVW;
#else
#if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)
varying vec3 vDirectionW;
#endif
#endif
#endif
#ifdef ENVIRONMENTBRDF
uniform sampler2D environmentBrdfSampler;
#endif
#ifdef SUBSURFACE
#ifdef SS_REFRACTION
#ifdef SS_REFRACTIONMAP_3D
#define sampleRefraction(s,c) textureCube(s,c)
uniform samplerCube refractionSampler;
#ifdef LODBASEDMICROSFURACE
#define sampleRefractionLod(s,c,l) textureCubeLodEXT(s,c,l)
#else
uniform samplerCube refractionSamplerLow;uniform samplerCube refractionSamplerHigh;
#endif
#else
#define sampleRefraction(s,c) texture2D(s,c)
uniform sampler2D refractionSampler;
#ifdef LODBASEDMICROSFURACE
#define sampleRefractionLod(s,c,l) texture2DLodEXT(s,c,l)
#else
uniform sampler2D refractionSamplerLow;uniform sampler2D refractionSamplerHigh;
#endif
#endif
#endif
#include<samplerFragmentDeclaration>(_DEFINENAME_,SS_THICKNESSANDMASK_TEXTURE,_VARYINGNAME_,Thickness,_SAMPLERNAME_,thickness)
#include<samplerFragmentDeclaration>(_DEFINENAME_,SS_REFRACTIONINTENSITY_TEXTURE,_VARYINGNAME_,RefractionIntensity,_SAMPLERNAME_,refractionIntensity)
#include<samplerFragmentDeclaration>(_DEFINENAME_,SS_TRANSLUCENCYINTENSITY_TEXTURE,_VARYINGNAME_,TranslucencyIntensity,_SAMPLERNAME_,translucencyIntensity)
#include<samplerFragmentDeclaration>(_DEFINENAME_,SS_TRANSLUCENCYCOLOR_TEXTURE,_VARYINGNAME_,TranslucencyColor,_SAMPLERNAME_,translucencyColor)
#endif
#ifdef IBL_CDF_FILTERING
uniform sampler2D icdfSampler;
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const pbrFragmentSamplersDeclaration = {
    name,
    shader
}; //# sourceMappingURL=pbrFragmentSamplersDeclaration.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/subSurfaceScatteringFunctions.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "subSurfaceScatteringFunctions",
    ()=>subSurfaceScatteringFunctions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "subSurfaceScatteringFunctions";
const shader = `bool testLightingForSSS(float diffusionProfile)
{return diffusionProfile<1.;}`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const subSurfaceScatteringFunctions = {
    name,
    shader
}; //# sourceMappingURL=subSurfaceScatteringFunctions.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/importanceSampling.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "importanceSampling",
    ()=>importanceSampling
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "importanceSampling";
const shader = `vec3 hemisphereCosSample(vec2 u) {float phi=2.*PI*u.x;float cosTheta2=1.-u.y;float cosTheta=sqrt(cosTheta2);float sinTheta=sqrt(1.-cosTheta2);return vec3(sinTheta*cos(phi),sinTheta*sin(phi),cosTheta);}
vec3 hemisphereImportanceSampleDggx(vec2 u,float a) {float phi=2.*PI*u.x;float cosTheta2=(1.-u.y)/(1.+(a+1.)*((a-1.)*u.y));float cosTheta=sqrt(cosTheta2);float sinTheta=sqrt(1.-cosTheta2);return vec3(sinTheta*cos(phi),sinTheta*sin(phi),cosTheta);}
vec3 hemisphereImportanceSampleDggxAnisotropic(vec2 Xi,float alphaTangent,float alphaBitangent)
{alphaTangent=max(alphaTangent,0.0001);alphaBitangent=max(alphaBitangent,0.0001);float phi=atan(alphaBitangent/alphaTangent*tan(2.0*3.14159265*Xi.x));if (Xi.x>0.5) phi+=3.14159265; 
float cosPhi=cos(phi);float sinPhi=sin(phi);float alpha2=(cosPhi*cosPhi)/(alphaTangent*alphaTangent) +
(sinPhi*sinPhi)/(alphaBitangent*alphaBitangent);float tanTheta2=Xi.y/(1.0-Xi.y)/alpha2;float cosTheta=1.0/sqrt(1.0+tanTheta2);float sinTheta=sqrt(max(0.0,1.0-cosTheta*cosTheta));return vec3(sinTheta*cosPhi,sinTheta*sinPhi,cosTheta);}
vec3 hemisphereImportanceSampleDCharlie(vec2 u,float a) { 
float phi=2.*PI*u.x;float sinTheta=pow(u.y,a/(2.*a+1.));float cosTheta=sqrt(1.-sinTheta*sinTheta);return vec3(sinTheta*cos(phi),sinTheta*sin(phi),cosTheta);}`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const importanceSampling = {
    name,
    shader
}; //# sourceMappingURL=importanceSampling.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/pbrHelperFunctions.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "pbrHelperFunctions",
    ()=>pbrHelperFunctions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "pbrHelperFunctions";
const shader = `#define MINIMUMVARIANCE 0.0005
float convertRoughnessToAverageSlope(float roughness)
{return square(roughness)+MINIMUMVARIANCE;}
float fresnelGrazingReflectance(float reflectance0) {float reflectance90=saturate(reflectance0*25.0);return reflectance90;}
vec2 getAARoughnessFactors(vec3 normalVector) {
#ifdef SPECULARAA
vec3 nDfdx=dFdx(normalVector.xyz);vec3 nDfdy=dFdy(normalVector.xyz);float slopeSquare=max(dot(nDfdx,nDfdx),dot(nDfdy,nDfdy));float geometricRoughnessFactor=pow(saturate(slopeSquare),0.333);float geometricAlphaGFactor=sqrt(slopeSquare);geometricAlphaGFactor*=0.75;return vec2(geometricRoughnessFactor,geometricAlphaGFactor);
#else
return vec2(0.);
#endif
}
#ifdef ANISOTROPIC
#ifdef ANISOTROPIC_LEGACY
vec2 getAnisotropicRoughness(float alphaG,float anisotropy) {float alphaT=max(alphaG*(1.0+anisotropy),MINIMUMVARIANCE);float alphaB=max(alphaG*(1.0-anisotropy),MINIMUMVARIANCE);return vec2(alphaT,alphaB);}
vec3 getAnisotropicBentNormals(const vec3 T,const vec3 B,const vec3 N,const vec3 V,float anisotropy,float roughness) {vec3 anisotropicFrameDirection;if (anisotropy>=0.0) {anisotropicFrameDirection=B;} else {anisotropicFrameDirection=T;}
vec3 anisotropicFrameTangent=cross(normalize(anisotropicFrameDirection),V);vec3 anisotropicFrameNormal=cross(anisotropicFrameTangent,anisotropicFrameDirection);vec3 anisotropicNormal=normalize(mix(N,anisotropicFrameNormal,abs(anisotropy)));return anisotropicNormal;}
#elif ANISOTROPIC_OPENPBR
vec2 getAnisotropicRoughness(float alphaG,float anisotropy) {float alphaT=alphaG*sqrt(2.0/(1.0+(1.0-anisotropy)*(1.0-anisotropy)));float alphaB=max(alphaT*(1.0-anisotropy),MINIMUMVARIANCE);return vec2(alphaT,alphaB);}
#else
vec2 getAnisotropicRoughness(float alphaG,float anisotropy) {float alphaT=max(mix(alphaG,1.0,anisotropy*anisotropy),MINIMUMVARIANCE);float alphaB=max(alphaG,MINIMUMVARIANCE);return vec2(alphaT,alphaB);}
vec3 getAnisotropicBentNormals(const vec3 T,const vec3 B,const vec3 N,const vec3 V,float anisotropy,float roughness) {vec3 bentNormal=cross(B,V);bentNormal=normalize(cross(bentNormal,B));float a=square(square(1.0-anisotropy*(1.0-roughness)));bentNormal=normalize(mix(bentNormal,N,a));return bentNormal;}
#endif
#endif
#if defined(CLEARCOAT) || defined(SS_REFRACTION)
vec3 cocaLambert(vec3 alpha,float distance) {return exp(-alpha*distance);}
vec3 cocaLambert(float NdotVRefract,float NdotLRefract,vec3 alpha,float thickness) {return cocaLambert(alpha,(thickness*((NdotLRefract+NdotVRefract)/(NdotLRefract*NdotVRefract))));}
vec3 computeColorAtDistanceInMedia(vec3 color,float distance) {return -log(color)/distance;}
vec3 computeClearCoatAbsorption(float NdotVRefract,float NdotLRefract,vec3 clearCoatColor,float clearCoatThickness,float clearCoatIntensity) {vec3 clearCoatAbsorption=mix(vec3(1.0),
cocaLambert(NdotVRefract,NdotLRefract,clearCoatColor,clearCoatThickness),
clearCoatIntensity);return clearCoatAbsorption;}
#endif
#ifdef MICROSURFACEAUTOMATIC
float computeDefaultMicroSurface(float microSurface,vec3 reflectivityColor)
{const float kReflectivityNoAlphaWorkflow_SmoothnessMax=0.95;float reflectivityLuminance=getLuminance(reflectivityColor);float reflectivityLuma=sqrt(reflectivityLuminance);microSurface=reflectivityLuma*kReflectivityNoAlphaWorkflow_SmoothnessMax;return microSurface;}
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const pbrHelperFunctions = {
    name,
    shader
}; //# sourceMappingURL=pbrHelperFunctions.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/pbrDirectLightingSetupFunctions.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "pbrDirectLightingSetupFunctions",
    ()=>pbrDirectLightingSetupFunctions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$ltcHelperFunctions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/ltcHelperFunctions.js [app-ssr] (ecmascript)");
;
;
const name = "pbrDirectLightingSetupFunctions";
const shader = `struct preLightingInfo
{vec3 lightOffset;float lightDistanceSquared;float lightDistance;float attenuation;vec3 L;vec3 H;float NdotV;float NdotLUnclamped;float NdotL;float VdotH;float LdotV;float roughness;float diffuseRoughness;vec3 surfaceAlbedo;
#ifdef IRIDESCENCE
float iridescenceIntensity;
#endif
#if defined(AREALIGHTUSED) && defined(AREALIGHTSUPPORTED)
vec3 areaLightDiffuse;
#ifdef SPECULARTERM
vec3 areaLightSpecular;vec4 areaLightFresnel;
#endif
#endif
};preLightingInfo computePointAndSpotPreLightingInfo(vec4 lightData,vec3 V,vec3 N,vec3 posW) {preLightingInfo result;result.lightOffset=lightData.xyz-posW;result.lightDistanceSquared=dot(result.lightOffset,result.lightOffset);result.lightDistance=sqrt(result.lightDistanceSquared);result.L=normalize(result.lightOffset);result.H=normalize(V+result.L);result.VdotH=saturate(dot(V,result.H));result.NdotLUnclamped=dot(N,result.L);result.NdotL=saturateEps(result.NdotLUnclamped);result.LdotV=0.;result.roughness=0.;result.diffuseRoughness=0.;result.surfaceAlbedo=vec3(0.);return result;}
preLightingInfo computeDirectionalPreLightingInfo(vec4 lightData,vec3 V,vec3 N) {preLightingInfo result;result.lightDistance=length(-lightData.xyz);result.L=normalize(-lightData.xyz);result.H=normalize(V+result.L);result.VdotH=saturate(dot(V,result.H));result.NdotLUnclamped=dot(N,result.L);result.NdotL=saturateEps(result.NdotLUnclamped);result.LdotV=dot(result.L,V);result.roughness=0.;result.diffuseRoughness=0.;result.surfaceAlbedo=vec3(0.);return result;}
preLightingInfo computeHemisphericPreLightingInfo(vec4 lightData,vec3 V,vec3 N) {preLightingInfo result;result.NdotL=dot(N,lightData.xyz)*0.5+0.5;result.NdotL=saturateEps(result.NdotL);result.NdotLUnclamped=result.NdotL;
#ifdef SPECULARTERM
result.L=normalize(lightData.xyz);result.H=normalize(V+result.L);result.VdotH=saturate(dot(V,result.H));
#endif
result.LdotV=0.;result.roughness=0.;result.diffuseRoughness=0.;result.surfaceAlbedo=vec3(0.);return result;}
#if defined(AREALIGHTUSED) && defined(AREALIGHTSUPPORTED)
#include<ltcHelperFunctions>
uniform sampler2D areaLightsLTC1Sampler;uniform sampler2D areaLightsLTC2Sampler;preLightingInfo computeAreaPreLightingInfo(sampler2D ltc1,sampler2D ltc2,vec3 viewDirectionW,vec3 vNormal,vec3 vPosition,vec4 lightData,vec3 halfWidth,vec3 halfHeight,float roughness )
{preLightingInfo result;result.lightOffset=lightData.xyz-vPosition;result.lightDistanceSquared=dot(result.lightOffset,result.lightOffset);result.lightDistance=sqrt(result.lightDistanceSquared);areaLightData data=computeAreaLightSpecularDiffuseFresnel(ltc1,ltc2,viewDirectionW,vNormal,vPosition,lightData.xyz,halfWidth,halfHeight,roughness);
#ifdef SPECULARTERM
result.areaLightFresnel=data.Fresnel;result.areaLightSpecular=data.Specular;
#endif
result.areaLightDiffuse=data.Diffuse;result.LdotV=0.;result.roughness=0.;result.diffuseRoughness=0.;result.surfaceAlbedo=vec3(0.);return result;}
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const pbrDirectLightingSetupFunctions = {
    name,
    shader
}; //# sourceMappingURL=pbrDirectLightingSetupFunctions.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/pbrDirectLightingFalloffFunctions.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "pbrDirectLightingFalloffFunctions",
    ()=>pbrDirectLightingFalloffFunctions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "pbrDirectLightingFalloffFunctions";
const shader = `float computeDistanceLightFalloff_Standard(vec3 lightOffset,float range)
{return max(0.,1.0-length(lightOffset)/range);}
float computeDistanceLightFalloff_Physical(float lightDistanceSquared)
{return 1.0/maxEps(lightDistanceSquared);}
float computeDistanceLightFalloff_GLTF(float lightDistanceSquared,float inverseSquaredRange)
{float lightDistanceFalloff=1.0/maxEps(lightDistanceSquared);float factor=lightDistanceSquared*inverseSquaredRange;float attenuation=saturate(1.0-factor*factor);attenuation*=attenuation;lightDistanceFalloff*=attenuation;return lightDistanceFalloff;}
float computeDistanceLightFalloff(vec3 lightOffset,float lightDistanceSquared,float range,float inverseSquaredRange)
{
#ifdef USEPHYSICALLIGHTFALLOFF
return computeDistanceLightFalloff_Physical(lightDistanceSquared);
#elif defined(USEGLTFLIGHTFALLOFF)
return computeDistanceLightFalloff_GLTF(lightDistanceSquared,inverseSquaredRange);
#else
return computeDistanceLightFalloff_Standard(lightOffset,range);
#endif
}
float computeDirectionalLightFalloff_Standard(vec3 lightDirection,vec3 directionToLightCenterW,float cosHalfAngle,float exponent)
{float falloff=0.0;float cosAngle=maxEps(dot(-lightDirection,directionToLightCenterW));if (cosAngle>=cosHalfAngle)
{falloff=max(0.,pow(cosAngle,exponent));}
return falloff;}
float computeDirectionalLightFalloff_IES(vec3 lightDirection,vec3 directionToLightCenterW,sampler2D iesLightSampler)
{float cosAngle=dot(-lightDirection,directionToLightCenterW);float angle=acos(cosAngle)/PI;return texture2D(iesLightSampler,vec2(angle,0.)).r;}
float computeDirectionalLightFalloff_Physical(vec3 lightDirection,vec3 directionToLightCenterW,float cosHalfAngle)
{const float kMinusLog2ConeAngleIntensityRatio=6.64385618977; 
float concentrationKappa=kMinusLog2ConeAngleIntensityRatio/(1.0-cosHalfAngle);vec4 lightDirectionSpreadSG=vec4(-lightDirection*concentrationKappa,-concentrationKappa);float falloff=exp2(dot(vec4(directionToLightCenterW,1.0),lightDirectionSpreadSG));return falloff;}
float computeDirectionalLightFalloff_GLTF(vec3 lightDirection,vec3 directionToLightCenterW,float lightAngleScale,float lightAngleOffset)
{float cd=dot(-lightDirection,directionToLightCenterW);float falloff=saturate(cd*lightAngleScale+lightAngleOffset);falloff*=falloff;return falloff;}
float computeDirectionalLightFalloff(vec3 lightDirection,vec3 directionToLightCenterW,float cosHalfAngle,float exponent,float lightAngleScale,float lightAngleOffset)
{
#ifdef USEPHYSICALLIGHTFALLOFF
return computeDirectionalLightFalloff_Physical(lightDirection,directionToLightCenterW,cosHalfAngle);
#elif defined(USEGLTFLIGHTFALLOFF)
return computeDirectionalLightFalloff_GLTF(lightDirection,directionToLightCenterW,lightAngleScale,lightAngleOffset);
#else
return computeDirectionalLightFalloff_Standard(lightDirection,directionToLightCenterW,cosHalfAngle,exponent);
#endif
}`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const pbrDirectLightingFalloffFunctions = {
    name,
    shader
}; //# sourceMappingURL=pbrDirectLightingFalloffFunctions.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/hdrFilteringFunctions.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "hdrFilteringFunctions",
    ()=>hdrFilteringFunctions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "hdrFilteringFunctions";
const shader = `#if NUM_SAMPLES
#if NUM_SAMPLES>0
#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)
float radicalInverse_VdC(uint bits) 
{bits=(bits<<16u) | (bits>>16u);bits=((bits & 0x55555555u)<<1u) | ((bits & 0xAAAAAAAAu)>>1u);bits=((bits & 0x33333333u)<<2u) | ((bits & 0xCCCCCCCCu)>>2u);bits=((bits & 0x0F0F0F0Fu)<<4u) | ((bits & 0xF0F0F0F0u)>>4u);bits=((bits & 0x00FF00FFu)<<8u) | ((bits & 0xFF00FF00u)>>8u);return float(bits)*2.3283064365386963e-10; }
vec2 hammersley(uint i,uint N)
{return vec2(float(i)/float(N),radicalInverse_VdC(i));}
#else
float vanDerCorpus(int n,int base)
{float invBase=1.0/float(base);float denom =1.0;float result =0.0;for(int i=0; i<32; ++i)
{if(n>0)
{denom =mod(float(n),2.0);result+=denom*invBase;invBase=invBase/2.0;n =int(float(n)/2.0);}}
return result;}
vec2 hammersley(int i,int N)
{return vec2(float(i)/float(N),vanDerCorpus(i,2));}
#endif
float log4(float x) {return log2(x)/2.;}
vec3 uv_to_normal(vec2 uv) {vec3 N;vec2 uvRange=uv;float theta=uvRange.x*2.*PI;float phi=uvRange.y*PI;float sinPhi=sin(phi);N.x=cos(theta)*sinPhi;N.z=sin(theta)*sinPhi;N.y=cos(phi);return N;}
const float NUM_SAMPLES_FLOAT=float(NUM_SAMPLES);const float NUM_SAMPLES_FLOAT_INVERSED=1./NUM_SAMPLES_FLOAT;const float K=4.;
#define inline
vec3 irradiance(
#ifdef CUSTOM_IRRADIANCE_FILTERING_INPUT
CUSTOM_IRRADIANCE_FILTERING_INPUT
#else
samplerCube inputTexture,
#endif
vec3 inputN,vec2 filteringInfo,
float diffuseRoughness,
vec3 surfaceAlbedo,
vec3 inputV
#if IBL_CDF_FILTERING
,sampler2D icdfSampler
#endif
)
{vec3 n=normalize(inputN);vec3 result=vec3(0.);
#ifndef IBL_CDF_FILTERING
vec3 tangent=abs(n.z)<0.999 ? vec3(0.,0.,1.) : vec3(1.,0.,0.);tangent=normalize(cross(tangent,n));vec3 bitangent=cross(n,tangent);mat3 tbn=mat3(tangent,bitangent,n);mat3 tbnInverse=mat3(tangent.x,bitangent.x,n.x,tangent.y,bitangent.y,n.y,tangent.z,bitangent.z,n.z);
#endif
float maxLevel=filteringInfo.y;float dim0=filteringInfo.x;float omegaP=(4.*PI)/(6.*dim0*dim0);vec3 clampedAlbedo=clamp(surfaceAlbedo,vec3(0.1),vec3(1.0));
#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)
for(uint i=0u; i<NUM_SAMPLES; ++i)
#else
for(int i=0; i<NUM_SAMPLES; ++i)
#endif
{vec2 Xi=hammersley(i,NUM_SAMPLES);
#if IBL_CDF_FILTERING
vec2 T;T.x=texture2D(icdfSampler,vec2(Xi.x,0.)).x;T.y=texture2D(icdfSampler,vec2(T.x,Xi.y)).y;vec3 Ls=uv_to_normal(vec2(1.0-fract(T.x+0.25),T.y));float NoL=dot(n,Ls);float NoV=dot(n,inputV);
#if BASE_DIFFUSE_MODEL==BRDF_DIFFUSE_MODEL_EON
float LoV=dot (Ls,inputV);
#elif BASE_DIFFUSE_MODEL==BRDF_DIFFUSE_MODEL_BURLEY
vec3 H=(inputV+Ls)*0.5;float VoH=dot(inputV,H);
#endif
#else
vec3 Ls=hemisphereCosSample(Xi);Ls=normalize(Ls);float NoL=Ls.z; 
vec3 V=tbnInverse*inputV;float NoV=V.z; 
#if BASE_DIFFUSE_MODEL==BRDF_DIFFUSE_MODEL_EON
float LoV=dot (Ls,V);
#elif BASE_DIFFUSE_MODEL==BRDF_DIFFUSE_MODEL_BURLEY
vec3 H=(V+Ls)*0.5;float VoH=dot(V,H);
#endif
#endif
if (NoL>0.) {
#if IBL_CDF_FILTERING
float pdf=texture2D(icdfSampler,T).z;vec3 c=textureCubeLodEXT(inputTexture,Ls,0.).rgb;
#else
float pdf_inversed=PI/NoL;float omegaS=NUM_SAMPLES_FLOAT_INVERSED*pdf_inversed;float l=log4(omegaS)-log4(omegaP)+log4(K);float mipLevel=clamp(l,0.,maxLevel);
#ifdef CUSTOM_IRRADIANCE_FILTERING_FUNCTION
CUSTOM_IRRADIANCE_FILTERING_FUNCTION
#else
vec3 c=textureCubeLodEXT(inputTexture,tbn*Ls,mipLevel).rgb;
#endif
#endif
#if GAMMA_INPUT
c=toLinearSpace(c);
#endif
vec3 diffuseRoughnessTerm=vec3(1.0);
#if BASE_DIFFUSE_MODEL==BRDF_DIFFUSE_MODEL_EON
diffuseRoughnessTerm=diffuseBRDF_EON(clampedAlbedo,diffuseRoughness,NoL,NoV,LoV)*PI;
#elif BASE_DIFFUSE_MODEL==BRDF_DIFFUSE_MODEL_BURLEY
diffuseRoughnessTerm=vec3(diffuseBRDF_Burley(NoL,NoV,VoH,diffuseRoughness)*PI);
#endif
#if IBL_CDF_FILTERING
vec3 light=pdf<1e-6 ? vec3(0.0) : vec3(1.0)/vec3(pdf)*c;result+=NoL*diffuseRoughnessTerm*light;
#else
result+=c*diffuseRoughnessTerm;
#endif
}}
result=result*NUM_SAMPLES_FLOAT_INVERSED;
#if BASE_DIFFUSE_MODEL==BRDF_DIFFUSE_MODEL_EON
result=result/clampedAlbedo;
#endif
return result;}
#define inline
vec3 radiance(float alphaG,samplerCube inputTexture,vec3 inputN,vec2 filteringInfo)
{vec3 n=normalize(inputN);vec3 c=textureCube(inputTexture,n).rgb; 
if (alphaG==0.) {
#if GAMMA_INPUT
c=toLinearSpace(c);
#endif
return c;} else {vec3 result=vec3(0.);vec3 tangent=abs(n.z)<0.999 ? vec3(0.,0.,1.) : vec3(1.,0.,0.);tangent=normalize(cross(tangent,n));vec3 bitangent=cross(n,tangent);mat3 tbn=mat3(tangent,bitangent,n);float maxLevel=filteringInfo.y;float dim0=filteringInfo.x;float omegaP=(4.*PI)/(6.*dim0*dim0);float weight=0.;
#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)
for(uint i=0u; i<NUM_SAMPLES; ++i)
#else
for(int i=0; i<NUM_SAMPLES; ++i)
#endif
{vec2 Xi=hammersley(i,NUM_SAMPLES);vec3 H=hemisphereImportanceSampleDggx(Xi,alphaG);float NoV=1.;float NoH=H.z;float NoH2=H.z*H.z;float NoL=2.*NoH2-1.;vec3 L=vec3(2.*NoH*H.x,2.*NoH*H.y,NoL);L=normalize(L);if (NoL>0.) {float pdf_inversed=4./normalDistributionFunction_TrowbridgeReitzGGX(NoH,alphaG);float omegaS=NUM_SAMPLES_FLOAT_INVERSED*pdf_inversed;float l=log4(omegaS)-log4(omegaP)+log4(K);float mipLevel=clamp(float(l),0.0,maxLevel);weight+=NoL;vec3 c=textureCubeLodEXT(inputTexture,tbn*L,mipLevel).rgb;
#if GAMMA_INPUT
c=toLinearSpace(c);
#endif
result+=c*NoL;}}
result=result/weight;return result;}}
#ifdef ANISOTROPIC
#define inline
vec3 radianceAnisotropic(
float alphaTangent, 
float alphaBitangent, 
samplerCube inputTexture,
vec3 inputView, 
vec3 inputTangent, 
vec3 inputBitangent, 
vec3 inputNormal, 
vec2 filteringInfo,
vec2 noiseInput 
)
{vec3 V=inputView;vec3 N=inputNormal;vec3 T=inputTangent;vec3 B=inputBitangent;vec3 R=reflect(-V,N);if (alphaTangent==0. && alphaBitangent==0.) {vec3 c=textureCube(inputTexture,R).rgb;
#if GAMMA_INPUT
c=toLinearSpace(c);
#endif
return c;}
vec3 result=vec3(0.);float maxLevel=filteringInfo.y;float dim0=filteringInfo.x;float effectiveDim=dim0*sqrt(alphaTangent*alphaBitangent);float omegaP=(4.*PI)/(6.*effectiveDim*effectiveDim);const float noiseScale=clamp(log2(float(NUM_SAMPLES))/12.0f,0.0f,1.0f);float weight=0.;
#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)
for(uint i=0u; i<NUM_SAMPLES; ++i)
#else
for(int i=0; i<NUM_SAMPLES; ++i)
#endif
{vec2 Xi=hammersley(i,NUM_SAMPLES);Xi=fract(Xi+noiseInput*mix(0.5f,0.015f,noiseScale)); 
vec3 H_tangent=hemisphereImportanceSampleDggxAnisotropic(Xi,alphaTangent,alphaBitangent);vec3 H=normalize(H_tangent.x*T+H_tangent.y*B+H_tangent.z*N);vec3 L=normalize(2.0*dot(V,H)*H-V);float NoH=max(dot(N,H),0.001);float VoH=max(dot(V,H),0.001);float NoL=max(dot(N,L),0.001);if (NoL>0.) {float pdf_inversed=4./normalDistributionFunction_BurleyGGX_Anisotropic(
H_tangent.z,H_tangent.x,H_tangent.y,vec2(alphaTangent,alphaBitangent)
);float omegaS=NUM_SAMPLES_FLOAT_INVERSED*pdf_inversed;float l=log4(omegaS)-log4(omegaP)+log4(K);float mipLevel=clamp(float(l),0.0,maxLevel);weight+=NoL;vec3 c=textureCubeLodEXT(inputTexture,L,mipLevel).rgb;
#if GAMMA_INPUT
c=toLinearSpace(c);
#endif
result+=c*NoL;}}
result=result/weight;return result;}
#endif
#endif
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const hdrFilteringFunctions = {
    name,
    shader
}; //# sourceMappingURL=hdrFilteringFunctions.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/pbrDirectLightingFunctions.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "pbrDirectLightingFunctions",
    ()=>pbrDirectLightingFunctions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "pbrDirectLightingFunctions";
const shader = `#define CLEARCOATREFLECTANCE90 1.0
struct lightingInfo
{vec3 diffuse;
#ifdef SS_TRANSLUCENCY
vec3 diffuseTransmission;
#endif
#ifdef SPECULARTERM
vec3 specular;
#endif
#ifdef CLEARCOAT
vec4 clearCoat;
#endif
#ifdef SHEEN
vec3 sheen;
#endif
};float adjustRoughnessFromLightProperties(float roughness,float lightRadius,float lightDistance) {
#if defined(USEPHYSICALLIGHTFALLOFF) || defined(USEGLTFLIGHTFALLOFF)
float lightRoughness=lightRadius/lightDistance;float totalRoughness=saturate(lightRoughness+roughness);return totalRoughness;
#else
return roughness;
#endif
}
vec3 computeHemisphericDiffuseLighting(preLightingInfo info,vec3 lightColor,vec3 groundColor) {return mix(groundColor,lightColor,info.NdotL);}
#if defined(AREALIGHTUSED) && defined(AREALIGHTSUPPORTED)
vec3 computeAreaDiffuseLighting(preLightingInfo info,vec3 lightColor) {return info.areaLightDiffuse*lightColor;}
#endif
vec3 computeDiffuseLighting(preLightingInfo info,vec3 lightColor) {vec3 diffuseTerm=vec3(1.0/PI);
#if BASE_DIFFUSE_MODEL==BRDF_DIFFUSE_MODEL_LEGACY
diffuseTerm=vec3(diffuseBRDF_Burley(info.NdotL,info.NdotV,info.VdotH,info.roughness));
#elif BASE_DIFFUSE_MODEL==BRDF_DIFFUSE_MODEL_BURLEY
diffuseTerm=vec3(diffuseBRDF_Burley(info.NdotL,info.NdotV,info.VdotH,info.diffuseRoughness));
#elif BASE_DIFFUSE_MODEL==BRDF_DIFFUSE_MODEL_EON
vec3 clampedAlbedo=clamp(info.surfaceAlbedo,vec3(0.1),vec3(1.0));diffuseTerm=diffuseBRDF_EON(clampedAlbedo,info.diffuseRoughness,info.NdotL,info.NdotV,info.LdotV);diffuseTerm/=clampedAlbedo;
#endif
return diffuseTerm*info.attenuation*info.NdotL*lightColor;}
#define inline
vec3 computeProjectionTextureDiffuseLighting(sampler2D projectionLightSampler,mat4 textureProjectionMatrix,vec3 posW){vec4 strq=textureProjectionMatrix*vec4(posW,1.0);strq/=strq.w;vec3 textureColor=texture2D(projectionLightSampler,strq.xy).rgb;return toLinearSpace(textureColor);}
#ifdef SS_TRANSLUCENCY
vec3 computeDiffuseTransmittedLighting(preLightingInfo info,vec3 lightColor,vec3 transmittance) {vec3 transmittanceNdotL=vec3(0.);float NdotL=absEps(info.NdotLUnclamped);
#ifndef SS_TRANSLUCENCY_LEGACY
if (info.NdotLUnclamped<0.0) {
#endif
float wrapNdotL=computeWrappedDiffuseNdotL(NdotL,0.02);float trAdapt=step(0.,info.NdotLUnclamped);transmittanceNdotL=mix(transmittance*wrapNdotL,vec3(wrapNdotL),trAdapt);
#ifndef SS_TRANSLUCENCY_LEGACY
}
vec3 diffuseTerm=vec3(1.0/PI);
#if BASE_DIFFUSE_MODEL==BRDF_DIFFUSE_MODEL_LEGACY
diffuseTerm=vec3(diffuseBRDF_Burley(info.NdotL,info.NdotV,info.VdotH,info.roughness));
#elif BASE_DIFFUSE_MODEL==BRDF_DIFFUSE_MODEL_BURLEY
diffuseTerm=vec3(diffuseBRDF_Burley(info.NdotL,info.NdotV,info.VdotH,info.diffuseRoughness));
#elif BASE_DIFFUSE_MODEL==BRDF_DIFFUSE_MODEL_EON
vec3 clampedAlbedo=clamp(info.surfaceAlbedo,vec3(0.1),vec3(1.0));diffuseTerm=diffuseBRDF_EON(clampedAlbedo,info.diffuseRoughness,info.NdotL,info.NdotV,info.LdotV);diffuseTerm/=clampedAlbedo;
#endif
#else
float diffuseTerm=diffuseBRDF_Burley(NdotL,info.NdotV,info.VdotH,info.roughness);
#endif
return diffuseTerm*transmittanceNdotL*info.attenuation*lightColor;}
#endif
#ifdef SPECULARTERM
vec3 computeSpecularLighting(preLightingInfo info,vec3 N,vec3 reflectance0,vec3 fresnel,float geometricRoughnessFactor,vec3 lightColor) {float NdotH=saturateEps(dot(N,info.H));float roughness=max(info.roughness,geometricRoughnessFactor);float alphaG=convertRoughnessToAverageSlope(roughness);
#ifdef IRIDESCENCE
fresnel=mix(fresnel,reflectance0,info.iridescenceIntensity);
#endif
float distribution=normalDistributionFunction_TrowbridgeReitzGGX(NdotH,alphaG);
#ifdef BRDF_V_HEIGHT_CORRELATED
float smithVisibility=smithVisibility_GGXCorrelated(info.NdotL,info.NdotV,alphaG);
#else
float smithVisibility=smithVisibility_TrowbridgeReitzGGXFast(info.NdotL,info.NdotV,alphaG);
#endif
vec3 specTerm=fresnel*distribution*smithVisibility;return specTerm*info.attenuation*info.NdotL*lightColor;}
#if defined(AREALIGHTUSED) && defined(AREALIGHTSUPPORTED)
vec3 computeAreaSpecularLighting(preLightingInfo info,vec3 specularColor,vec3 reflectance0,vec3 reflectance90) {vec3 fresnel=specularColor*info.areaLightFresnel.x*reflectance0+( vec3( 1.0 )-specularColor )*info.areaLightFresnel.y*reflectance90;return specularColor*fresnel*info.areaLightSpecular;}
#endif
#endif
#ifdef FUZZ
float evalFuzz(vec3 L,float NdotL,float NdotV,vec3 T,vec3 B,vec3 ltcLut)
{if (NdotL<=0.0 || NdotV<=0.0)
return 0.0;mat3 M=mat3(
vec3(ltcLut.r,0.0,0.0),
vec3(ltcLut.g,1.0,0.0),
vec3(0.0,0.0,1.0)
);vec3 Llocal=vec3(dot(L,T),dot(L,B),NdotL);vec3 Lwarp=normalize(M*Llocal);float cosThetaWarp=max(Lwarp.z,0.0);return cosThetaWarp*NdotL;}
#endif
#if defined(ANISOTROPIC) && defined(ANISOTROPIC_OPENPBR)
vec3 computeAnisotropicSpecularLighting(preLightingInfo info,vec3 V,vec3 N,vec3 T,vec3 B,float anisotropy,float geometricRoughnessFactor,vec3 lightColor) {float NdotH=saturateEps(dot(N,info.H));float TdotH=dot(T,info.H);float BdotH=dot(B,info.H);float TdotV=dot(T,V);float BdotV=dot(B,V);float TdotL=dot(T,info.L);float BdotL=dot(B,info.L);float alphaG=convertRoughnessToAverageSlope(info.roughness);vec2 alphaTB=getAnisotropicRoughness(alphaG,anisotropy);alphaTB=max(alphaTB,square(geometricRoughnessFactor));float distribution=normalDistributionFunction_BurleyGGX_Anisotropic(NdotH,TdotH,BdotH,alphaTB);float smithVisibility=smithVisibility_GGXCorrelated_Anisotropic(info.NdotL,info.NdotV,TdotV,BdotV,TdotL,BdotL,alphaTB);vec3 specTerm=vec3(distribution*smithVisibility);return specTerm*info.attenuation*info.NdotL*lightColor;}
#elif defined(ANISOTROPIC)
vec3 computeAnisotropicSpecularLighting(preLightingInfo info,vec3 V,vec3 N,vec3 T,vec3 B,float anisotropy,vec3 reflectance0,vec3 reflectance90,float geometricRoughnessFactor,vec3 lightColor) {float NdotH=saturateEps(dot(N,info.H));float TdotH=dot(T,info.H);float BdotH=dot(B,info.H);float TdotV=dot(T,V);float BdotV=dot(B,V);float TdotL=dot(T,info.L);float BdotL=dot(B,info.L);float alphaG=convertRoughnessToAverageSlope(info.roughness);vec2 alphaTB=getAnisotropicRoughness(alphaG,anisotropy);alphaTB=max(alphaTB,square(geometricRoughnessFactor));vec3 fresnel=fresnelSchlickGGX(info.VdotH,reflectance0,reflectance90);
#ifdef IRIDESCENCE
fresnel=mix(fresnel,reflectance0,info.iridescenceIntensity);
#endif
float distribution=normalDistributionFunction_BurleyGGX_Anisotropic(NdotH,TdotH,BdotH,alphaTB);float smithVisibility=smithVisibility_GGXCorrelated_Anisotropic(info.NdotL,info.NdotV,TdotV,BdotV,TdotL,BdotL,alphaTB);vec3 specTerm=fresnel*distribution*smithVisibility;return specTerm*info.attenuation*info.NdotL*lightColor;}
#endif
#ifdef CLEARCOAT
vec4 computeClearCoatLighting(preLightingInfo info,vec3 Ncc,float geometricRoughnessFactor,float clearCoatIntensity,vec3 lightColor) {float NccdotL=saturateEps(dot(Ncc,info.L));float NccdotH=saturateEps(dot(Ncc,info.H));float clearCoatRoughness=max(info.roughness,geometricRoughnessFactor);float alphaG=convertRoughnessToAverageSlope(clearCoatRoughness);float fresnel=fresnelSchlickGGX(info.VdotH,vClearCoatRefractionParams.x,CLEARCOATREFLECTANCE90);fresnel*=clearCoatIntensity;float distribution=normalDistributionFunction_TrowbridgeReitzGGX(NccdotH,alphaG);float kelemenVisibility=visibility_Kelemen(info.VdotH);float clearCoatTerm=fresnel*distribution*kelemenVisibility;return vec4(
clearCoatTerm*info.attenuation*NccdotL*lightColor,
1.0-fresnel
);}
vec3 computeClearCoatLightingAbsorption(float NdotVRefract,vec3 L,vec3 Ncc,vec3 clearCoatColor,float clearCoatThickness,float clearCoatIntensity) {vec3 LRefract=-refract(L,Ncc,vClearCoatRefractionParams.y);float NdotLRefract=saturateEps(dot(Ncc,LRefract));vec3 absorption=computeClearCoatAbsorption(NdotVRefract,NdotLRefract,clearCoatColor,clearCoatThickness,clearCoatIntensity);return absorption;}
#endif
#ifdef SHEEN
vec3 computeSheenLighting(preLightingInfo info,vec3 N,vec3 reflectance0,vec3 reflectance90,float geometricRoughnessFactor,vec3 lightColor) {float NdotH=saturateEps(dot(N,info.H));float roughness=max(info.roughness,geometricRoughnessFactor);float alphaG=convertRoughnessToAverageSlope(roughness);float fresnel=1.;float distribution=normalDistributionFunction_CharlieSheen(NdotH,alphaG);/*#ifdef SHEEN_SOFTER
float visibility=visibility_CharlieSheen(info.NdotL,info.NdotV,alphaG);
#else */
float visibility=visibility_Ashikhmin(info.NdotL,info.NdotV);/* #endif */
float sheenTerm=fresnel*distribution*visibility;return sheenTerm*info.attenuation*info.NdotL*lightColor;}
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const pbrDirectLightingFunctions = {
    name,
    shader
}; //# sourceMappingURL=pbrDirectLightingFunctions.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/pbrIBLFunctions.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "pbrIBLFunctions",
    ()=>pbrIBLFunctions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "pbrIBLFunctions";
const shader = `#if defined(REFLECTION) || defined(SS_REFRACTION)
float getLodFromAlphaG(float cubeMapDimensionPixels,float microsurfaceAverageSlope) {float microsurfaceAverageSlopeTexels=cubeMapDimensionPixels*microsurfaceAverageSlope;float lod=log2(microsurfaceAverageSlopeTexels);return lod;}
float getLinearLodFromRoughness(float cubeMapDimensionPixels,float roughness) {float lod=log2(cubeMapDimensionPixels)*roughness;return lod;}
#endif
#if defined(ENVIRONMENTBRDF) && defined(RADIANCEOCCLUSION)
float environmentRadianceOcclusion(float ambientOcclusion,float NdotVUnclamped) {float temp=NdotVUnclamped+ambientOcclusion;return saturate(square(temp)-1.0+ambientOcclusion);}
#endif
#if defined(ENVIRONMENTBRDF) && defined(HORIZONOCCLUSION)
float environmentHorizonOcclusion(vec3 view,vec3 normal,vec3 geometricNormal) {vec3 reflection=reflect(view,normal);float temp=saturate(1.0+1.1*dot(reflection,geometricNormal));return square(temp);}
#endif
#if defined(LODINREFLECTIONALPHA) || defined(SS_LODINREFRACTIONALPHA)
#define UNPACK_LOD(x) (1.0-x)*255.0
float getLodFromAlphaG(float cubeMapDimensionPixels,float alphaG,float NdotV) {float microsurfaceAverageSlope=alphaG;microsurfaceAverageSlope*=sqrt(abs(NdotV));return getLodFromAlphaG(cubeMapDimensionPixels,microsurfaceAverageSlope);}
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const pbrIBLFunctions = {
    name,
    shader
}; //# sourceMappingURL=pbrIBLFunctions.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/bumpFragmentMainFunctions.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "bumpFragmentMainFunctions",
    ()=>bumpFragmentMainFunctions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "bumpFragmentMainFunctions";
const shader = `#if defined(BUMP) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC) || defined(DETAIL)
#if defined(TANGENT) && defined(NORMAL) 
varying mat3 vTBN;
#endif
#ifdef OBJECTSPACE_NORMALMAP
uniform mat4 normalMatrix;
#if defined(WEBGL2) || defined(WEBGPU)
mat4 toNormalMatrix(mat4 wMatrix)
{mat4 ret=inverse(wMatrix);ret=transpose(ret);ret[0][3]=0.;ret[1][3]=0.;ret[2][3]=0.;ret[3]=vec4(0.,0.,0.,1.);return ret;}
#else
mat4 toNormalMatrix(mat4 m)
{float
a00=m[0][0],a01=m[0][1],a02=m[0][2],a03=m[0][3],
a10=m[1][0],a11=m[1][1],a12=m[1][2],a13=m[1][3],
a20=m[2][0],a21=m[2][1],a22=m[2][2],a23=m[2][3],
a30=m[3][0],a31=m[3][1],a32=m[3][2],a33=m[3][3],
b00=a00*a11-a01*a10,
b01=a00*a12-a02*a10,
b02=a00*a13-a03*a10,
b03=a01*a12-a02*a11,
b04=a01*a13-a03*a11,
b05=a02*a13-a03*a12,
b06=a20*a31-a21*a30,
b07=a20*a32-a22*a30,
b08=a20*a33-a23*a30,
b09=a21*a32-a22*a31,
b10=a21*a33-a23*a31,
b11=a22*a33-a23*a32,
det=b00*b11-b01*b10+b02*b09+b03*b08-b04*b07+b05*b06;mat4 mi=mat4(
a11*b11-a12*b10+a13*b09,
a02*b10-a01*b11-a03*b09,
a31*b05-a32*b04+a33*b03,
a22*b04-a21*b05-a23*b03,
a12*b08-a10*b11-a13*b07,
a00*b11-a02*b08+a03*b07,
a32*b02-a30*b05-a33*b01,
a20*b05-a22*b02+a23*b01,
a10*b10-a11*b08+a13*b06,
a01*b08-a00*b10-a03*b06,
a30*b04-a31*b02+a33*b00,
a21*b02-a20*b04-a23*b00,
a11*b07-a10*b09-a12*b06,
a00*b09-a01*b07+a02*b06,
a31*b01-a30*b03-a32*b00,
a20*b03-a21*b01+a22*b00)/det;return mat4(mi[0][0],mi[1][0],mi[2][0],mi[3][0],
mi[0][1],mi[1][1],mi[2][1],mi[3][1],
mi[0][2],mi[1][2],mi[2][2],mi[3][2],
mi[0][3],mi[1][3],mi[2][3],mi[3][3]);}
#endif
#endif
vec3 perturbNormalBase(mat3 cotangentFrame,vec3 normal,float scale)
{
#ifdef NORMALXYSCALE
normal=normalize(normal*vec3(scale,scale,1.0));
#endif
return normalize(cotangentFrame*normal);}
vec3 perturbNormal(mat3 cotangentFrame,vec3 textureSample,float scale)
{return perturbNormalBase(cotangentFrame,textureSample*2.0-1.0,scale);}
mat3 cotangent_frame(vec3 normal,vec3 p,vec2 uv,vec2 tangentSpaceParams)
{vec3 dp1=dFdx(p);vec3 dp2=dFdy(p);vec2 duv1=dFdx(uv);vec2 duv2=dFdy(uv);vec3 dp2perp=cross(dp2,normal);vec3 dp1perp=cross(normal,dp1);vec3 tangent=dp2perp*duv1.x+dp1perp*duv2.x;vec3 bitangent=dp2perp*duv1.y+dp1perp*duv2.y;tangent*=tangentSpaceParams.x;bitangent*=tangentSpaceParams.y;float det=max(dot(tangent,tangent),dot(bitangent,bitangent));float invmax=det==0.0 ? 0.0 : inversesqrt(det);return mat3(tangent*invmax,bitangent*invmax,normal);}
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const bumpFragmentMainFunctions = {
    name,
    shader
}; //# sourceMappingURL=bumpFragmentMainFunctions.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/bumpFragmentFunctions.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "bumpFragmentFunctions",
    ()=>bumpFragmentFunctions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$samplerFragmentDeclaration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/samplerFragmentDeclaration.js [app-ssr] (ecmascript)");
;
;
const name = "bumpFragmentFunctions";
const shader = `#if defined(BUMP)
#include<samplerFragmentDeclaration>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump,_SAMPLERNAME_,bump)
#endif
#if defined(DETAIL)
#include<samplerFragmentDeclaration>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail,_SAMPLERNAME_,detail)
#endif
#if defined(BUMP) && defined(PARALLAX)
const float minSamples=4.;const float maxSamples=15.;const int iMaxSamples=15;vec2 parallaxOcclusion(vec3 vViewDirCoT,vec3 vNormalCoT,vec2 texCoord,float parallaxScale) {float parallaxLimit=length(vViewDirCoT.xy)/vViewDirCoT.z;parallaxLimit*=parallaxScale;vec2 vOffsetDir=normalize(vViewDirCoT.xy);vec2 vMaxOffset=vOffsetDir*parallaxLimit;float numSamples=maxSamples+(dot(vViewDirCoT,vNormalCoT)*(minSamples-maxSamples));float stepSize=1.0/numSamples;float currRayHeight=1.0;vec2 vCurrOffset=vec2(0,0);vec2 vLastOffset=vec2(0,0);float lastSampledHeight=1.0;float currSampledHeight=1.0;bool keepWorking=true;for (int i=0; i<iMaxSamples; i++)
{currSampledHeight=texture2D(bumpSampler,texCoord+vCurrOffset).w;if (!keepWorking)
{}
else if (currSampledHeight>currRayHeight)
{float delta1=currSampledHeight-currRayHeight;float delta2=(currRayHeight+stepSize)-lastSampledHeight;float ratio=delta1/(delta1+delta2);vCurrOffset=(ratio)* vLastOffset+(1.0-ratio)*vCurrOffset;keepWorking=false;}
else
{currRayHeight-=stepSize;vLastOffset=vCurrOffset;
#ifdef PARALLAX_RHS
vCurrOffset-=stepSize*vMaxOffset;
#else
vCurrOffset+=stepSize*vMaxOffset;
#endif
lastSampledHeight=currSampledHeight;}}
return vCurrOffset;}
vec2 parallaxOffset(vec3 viewDir,float heightScale)
{float height=texture2D(bumpSampler,vBumpUV).w;vec2 texCoordOffset=heightScale*viewDir.xy*height;
#ifdef PARALLAX_RHS
return texCoordOffset;
#else
return -texCoordOffset;
#endif
}
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const bumpFragmentFunctions = {
    name,
    shader
}; //# sourceMappingURL=bumpFragmentFunctions.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/decalFragment.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "decalFragment",
    ()=>decalFragment
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "decalFragment";
const shader = `#ifdef DECAL
#ifdef GAMMADECAL
decalColor.rgb=toLinearSpace(decalColor.rgb);
#endif
#ifdef DECAL_SMOOTHALPHA
decalColor.a*=decalColor.a;
#endif
surfaceAlbedo.rgb=mix(surfaceAlbedo.rgb,decalColor.rgb,decalColor.a);
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const decalFragment = {
    name,
    shader
}; //# sourceMappingURL=decalFragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/pbrBlockAlbedoOpacity.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "pbrBlockAlbedoOpacity",
    ()=>pbrBlockAlbedoOpacity
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$decalFragment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/decalFragment.js [app-ssr] (ecmascript)");
;
;
const name = "pbrBlockAlbedoOpacity";
const shader = `struct albedoOpacityOutParams
{vec3 surfaceAlbedo;float alpha;};
#define pbr_inline
albedoOpacityOutParams albedoOpacityBlock(
in vec4 vAlbedoColor
#ifdef ALBEDO
,in vec4 albedoTexture
,in vec2 albedoInfos
#endif
,in float baseWeight
#ifdef BASE_WEIGHT
,in vec4 baseWeightTexture
,in vec2 vBaseWeightInfos
#endif
#ifdef OPACITY
,in vec4 opacityMap
,in vec2 vOpacityInfos
#endif
#ifdef DETAIL
,in vec4 detailColor
,in vec4 vDetailInfos
#endif
#ifdef DECAL
,in vec4 decalColor
,in vec4 vDecalInfos
#endif
)
{albedoOpacityOutParams outParams;vec3 surfaceAlbedo=vAlbedoColor.rgb;float alpha=vAlbedoColor.a;
#ifdef ALBEDO
#if defined(ALPHAFROMALBEDO) || defined(ALPHATEST)
alpha*=albedoTexture.a;
#endif
#ifdef GAMMAALBEDO
surfaceAlbedo*=toLinearSpace(albedoTexture.rgb);
#else
surfaceAlbedo*=albedoTexture.rgb;
#endif
surfaceAlbedo*=albedoInfos.y;
#endif
#ifndef DECAL_AFTER_DETAIL
#include<decalFragment>
#endif
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
surfaceAlbedo*=vColor.rgb;
#endif
#ifdef DETAIL
float detailAlbedo=2.0*mix(0.5,detailColor.r,vDetailInfos.y);surfaceAlbedo.rgb=surfaceAlbedo.rgb*detailAlbedo*detailAlbedo; 
#endif
#ifdef DECAL_AFTER_DETAIL
#include<decalFragment>
#endif
#define CUSTOM_FRAGMENT_UPDATE_ALBEDO
surfaceAlbedo*=baseWeight;
#ifdef BASE_WEIGHT
surfaceAlbedo*=baseWeightTexture.r;
#endif
#ifdef OPACITY
#ifdef OPACITYRGB
alpha=getLuminance(opacityMap.rgb);
#else
alpha*=opacityMap.a;
#endif
alpha*=vOpacityInfos.y;
#endif
#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)
alpha*=vColor.a;
#endif
#if !defined(SS_LINKREFRACTIONTOTRANSPARENCY) && !defined(ALPHAFRESNEL)
#ifdef ALPHATEST
#if DEBUGMODE != 88
if (alpha<ALPHATESTVALUE)
discard;
#endif
#ifndef ALPHABLEND
alpha=1.0;
#endif
#endif
#endif
outParams.surfaceAlbedo=surfaceAlbedo;outParams.alpha=alpha;return outParams;}
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const pbrBlockAlbedoOpacity = {
    name,
    shader
}; //# sourceMappingURL=pbrBlockAlbedoOpacity.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/pbrBlockReflectivity.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "pbrBlockReflectivity",
    ()=>pbrBlockReflectivity
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "pbrBlockReflectivity";
const shader = `struct reflectivityOutParams
{float microSurface;float roughness;float diffuseRoughness;float reflectanceF0;vec3 reflectanceF90;vec3 colorReflectanceF0;vec3 colorReflectanceF90;
#ifdef METALLICWORKFLOW
vec3 surfaceAlbedo;float metallic;float specularWeight;vec3 dielectricColorF0;
#endif
#if defined(METALLICWORKFLOW) && defined(REFLECTIVITY) && defined(AOSTOREINMETALMAPRED)
vec3 ambientOcclusionColor;
#endif
#if DEBUGMODE>0
#ifdef METALLICWORKFLOW
#ifdef REFLECTIVITY
vec4 surfaceMetallicColorMap;
#endif
vec3 metallicF0;
#else
#ifdef REFLECTIVITY
vec4 surfaceReflectivityColorMap;
#endif
#endif
#endif
};
#define pbr_inline
reflectivityOutParams reflectivityBlock(
in vec4 reflectivityColor
#ifdef METALLICWORKFLOW
,in vec3 surfaceAlbedo
,in vec4 metallicReflectanceFactors
#endif
,in float baseDiffuseRoughness
#ifdef BASE_DIFFUSE_ROUGHNESS
,in float baseDiffuseRoughnessTexture
,in vec2 baseDiffuseRoughnessInfos
#endif
#ifdef REFLECTIVITY
,in vec3 reflectivityInfos
,in vec4 surfaceMetallicOrReflectivityColorMap
#endif
#if defined(METALLICWORKFLOW) && defined(REFLECTIVITY) && defined(AOSTOREINMETALMAPRED)
,in vec3 ambientOcclusionColorIn
#endif
#ifdef MICROSURFACEMAP
,in vec4 microSurfaceTexel
#endif
#ifdef DETAIL
,in vec4 detailColor
,in vec4 vDetailInfos
#endif
)
{reflectivityOutParams outParams;float microSurface=reflectivityColor.a;vec3 surfaceReflectivityColor=reflectivityColor.rgb;
#ifdef METALLICWORKFLOW
vec2 metallicRoughness=surfaceReflectivityColor.rg;float ior=surfaceReflectivityColor.b;
#ifdef REFLECTIVITY
#if DEBUGMODE>0
outParams.surfaceMetallicColorMap=surfaceMetallicOrReflectivityColorMap;
#endif
#ifdef AOSTOREINMETALMAPRED
vec3 aoStoreInMetalMap=vec3(surfaceMetallicOrReflectivityColorMap.r,surfaceMetallicOrReflectivityColorMap.r,surfaceMetallicOrReflectivityColorMap.r);outParams.ambientOcclusionColor=mix(ambientOcclusionColorIn,aoStoreInMetalMap,reflectivityInfos.z);
#endif
#ifdef METALLNESSSTOREINMETALMAPBLUE
metallicRoughness.r*=surfaceMetallicOrReflectivityColorMap.b;
#else
metallicRoughness.r*=surfaceMetallicOrReflectivityColorMap.r;
#endif
#ifdef ROUGHNESSSTOREINMETALMAPALPHA
metallicRoughness.g*=surfaceMetallicOrReflectivityColorMap.a;
#else
#ifdef ROUGHNESSSTOREINMETALMAPGREEN
metallicRoughness.g*=surfaceMetallicOrReflectivityColorMap.g;
#endif
#endif
#endif
#ifdef DETAIL
float detailRoughness=mix(0.5,detailColor.b,vDetailInfos.w);float loLerp=mix(0.,metallicRoughness.g,detailRoughness*2.);float hiLerp=mix(metallicRoughness.g,1.,(detailRoughness-0.5)*2.);metallicRoughness.g=mix(loLerp,hiLerp,step(detailRoughness,0.5));
#endif
#ifdef MICROSURFACEMAP
metallicRoughness.g*=microSurfaceTexel.r;
#endif
#define CUSTOM_FRAGMENT_UPDATE_METALLICROUGHNESS
microSurface=1.0-metallicRoughness.g;vec3 baseColor=surfaceAlbedo;outParams.metallic=metallicRoughness.r;outParams.specularWeight=metallicReflectanceFactors.a;float dielectricF0=reflectivityColor.a*outParams.specularWeight;surfaceReflectivityColor=metallicReflectanceFactors.rgb;
#if DEBUGMODE>0
outParams.metallicF0=vec3(dielectricF0)*surfaceReflectivityColor;
#endif
#ifdef LEGACY_SPECULAR_ENERGY_CONSERVATION
outParams.surfaceAlbedo=baseColor.rgb*(vec3(1.0)-vec3(dielectricF0)*surfaceReflectivityColor)*(1.0-outParams.metallic);
#else
outParams.surfaceAlbedo=baseColor.rgb;
#endif
#ifdef LEGACY_SPECULAR_ENERGY_CONSERVATION
{vec3 reflectivityColor=mix(dielectricF0*surfaceReflectivityColor,baseColor.rgb,outParams.metallic);outParams.reflectanceF0=max(reflectivityColor.r,max(reflectivityColor.g,reflectivityColor.b));}
#else
#if DIELECTRIC_SPECULAR_MODEL==DIELECTRIC_SPECULAR_MODEL_GLTF
float maxF0=max(surfaceReflectivityColor.r,max(surfaceReflectivityColor.g,surfaceReflectivityColor.b));outParams.reflectanceF0=mix(dielectricF0*maxF0,1.0,outParams.metallic);
#else
outParams.reflectanceF0=mix(dielectricF0,1.0,outParams.metallic);
#endif
#endif
#ifdef LEGACY_SPECULAR_ENERGY_CONSERVATION
outParams.reflectanceF90=vec3(outParams.specularWeight);float f90Scale=1.0;
#else
float f90Scale=clamp(2.0*(ior-1.0),0.0,1.0);outParams.reflectanceF90=vec3(mix(outParams.specularWeight*f90Scale,1.0,outParams.metallic));
#endif
outParams.dielectricColorF0=vec3(dielectricF0*surfaceReflectivityColor);vec3 metallicColorF0=baseColor.rgb;outParams.colorReflectanceF0=mix(outParams.dielectricColorF0,metallicColorF0,outParams.metallic);
#if (DIELECTRIC_SPECULAR_MODEL==DIELECTRIC_SPECULAR_MODEL_OPENPBR)
vec3 dielectricColorF90=surfaceReflectivityColor*vec3(outParams.specularWeight)*vec3(f90Scale);
#else
vec3 dielectricColorF90=vec3(outParams.specularWeight*f90Scale);
#endif
#if (CONDUCTOR_SPECULAR_MODEL==CONDUCTOR_SPECULAR_MODEL_OPENPBR)
vec3 conductorColorF90=surfaceReflectivityColor;
#else
#ifdef LEGACY_SPECULAR_ENERGY_CONSERVATION
vec3 conductorColorF90=outParams.reflectanceF90;
#else
vec3 conductorColorF90=vec3(1.0);
#endif
#endif
outParams.colorReflectanceF90=mix(dielectricColorF90,conductorColorF90,outParams.metallic);
#else
#ifdef REFLECTIVITY
surfaceReflectivityColor*=surfaceMetallicOrReflectivityColorMap.rgb;
#if DEBUGMODE>0
outParams.surfaceReflectivityColorMap=surfaceMetallicOrReflectivityColorMap;
#endif
#ifdef MICROSURFACEFROMREFLECTIVITYMAP
microSurface*=surfaceMetallicOrReflectivityColorMap.a;microSurface*=reflectivityInfos.z;
#else
#ifdef MICROSURFACEAUTOMATIC
microSurface*=computeDefaultMicroSurface(microSurface,surfaceReflectivityColor);
#endif
#ifdef MICROSURFACEMAP
microSurface*=microSurfaceTexel.r;
#endif
#define CUSTOM_FRAGMENT_UPDATE_MICROSURFACE
#endif
#endif
outParams.colorReflectanceF0=surfaceReflectivityColor;outParams.reflectanceF0=max(surfaceReflectivityColor.r,max(surfaceReflectivityColor.g,surfaceReflectivityColor.b));outParams.reflectanceF90=vec3(1.0);
#if (DIELECTRIC_SPECULAR_MODEL==DIELECTRIC_SPECULAR_MODEL_OPENPBR)
outParams.colorReflectanceF90=surfaceReflectivityColor;
#else
outParams.colorReflectanceF90=vec3(1.0);
#endif
#endif
microSurface=saturate(microSurface);float roughness=1.-microSurface;float diffuseRoughness=baseDiffuseRoughness;
#ifdef BASE_DIFFUSE_ROUGHNESS
diffuseRoughness*=baseDiffuseRoughnessTexture*baseDiffuseRoughnessInfos.y;
#endif
outParams.microSurface=microSurface;outParams.roughness=roughness;outParams.diffuseRoughness=diffuseRoughness;return outParams;}
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const pbrBlockReflectivity = {
    name,
    shader
}; //# sourceMappingURL=pbrBlockReflectivity.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/pbrBlockAmbientOcclusion.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "pbrBlockAmbientOcclusion",
    ()=>pbrBlockAmbientOcclusion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "pbrBlockAmbientOcclusion";
const shader = `struct ambientOcclusionOutParams
{vec3 ambientOcclusionColor;
#if DEBUGMODE>0 && defined(AMBIENT)
vec3 ambientOcclusionColorMap;
#endif
};ambientOcclusionOutParams ambientOcclusionBlock(
#ifdef AMBIENT
in vec3 ambientOcclusionColorMap_,
in vec4 vAmbientInfos
#endif
)
{ambientOcclusionOutParams outParams;vec3 ambientOcclusionColor=vec3(1.,1.,1.);
#ifdef AMBIENT
vec3 ambientOcclusionColorMap=ambientOcclusionColorMap_*vAmbientInfos.y;
#ifdef AMBIENTINGRAYSCALE
ambientOcclusionColorMap=vec3(ambientOcclusionColorMap.r,ambientOcclusionColorMap.r,ambientOcclusionColorMap.r);
#endif
ambientOcclusionColor=mix(ambientOcclusionColor,ambientOcclusionColorMap,vAmbientInfos.z);
#if DEBUGMODE>0
outParams.ambientOcclusionColorMap=ambientOcclusionColorMap;
#endif
#endif
outParams.ambientOcclusionColor=ambientOcclusionColor;return outParams;}
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const pbrBlockAmbientOcclusion = {
    name,
    shader
}; //# sourceMappingURL=pbrBlockAmbientOcclusion.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/pbrBlockAlphaFresnel.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "pbrBlockAlphaFresnel",
    ()=>pbrBlockAlphaFresnel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "pbrBlockAlphaFresnel";
const shader = `#ifdef ALPHAFRESNEL
#if defined(ALPHATEST) || defined(ALPHABLEND)
struct alphaFresnelOutParams
{float alpha;};
#define pbr_inline
alphaFresnelOutParams alphaFresnelBlock(
in vec3 normalW,
in vec3 viewDirectionW,
in float alpha,
in float microSurface
)
{alphaFresnelOutParams outParams;float opacityPerceptual=alpha;
#ifdef LINEARALPHAFRESNEL
float opacity0=opacityPerceptual;
#else
float opacity0=opacityPerceptual*opacityPerceptual;
#endif
float opacity90=fresnelGrazingReflectance(opacity0);vec3 normalForward=faceforward(normalW,-viewDirectionW,normalW);outParams.alpha=getReflectanceFromAnalyticalBRDFLookup_Jones(saturate(dot(viewDirectionW,normalForward)),vec3(opacity0),vec3(opacity90),sqrt(microSurface)).x;
#ifdef ALPHATEST
if (outParams.alpha<ALPHATESTVALUE)
discard;
#ifndef ALPHABLEND
outParams.alpha=1.0;
#endif
#endif
return outParams;}
#endif
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const pbrBlockAlphaFresnel = {
    name,
    shader
}; //# sourceMappingURL=pbrBlockAlphaFresnel.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/pbrBlockAnisotropic.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "pbrBlockAnisotropic",
    ()=>pbrBlockAnisotropic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "pbrBlockAnisotropic";
const shader = `#ifdef ANISOTROPIC
struct anisotropicOutParams
{float anisotropy;vec3 anisotropicTangent;vec3 anisotropicBitangent;vec3 anisotropicNormal;
#if DEBUGMODE>0 && defined(ANISOTROPIC_TEXTURE)
vec3 anisotropyMapData;
#endif
};
#define pbr_inline
anisotropicOutParams anisotropicBlock(
in vec3 vAnisotropy,
in float roughness,
#ifdef ANISOTROPIC_TEXTURE
in vec3 anisotropyMapData,
#endif
in mat3 TBN,
in vec3 normalW,
in vec3 viewDirectionW
)
{anisotropicOutParams outParams;float anisotropy=vAnisotropy.b;vec3 anisotropyDirection=vec3(vAnisotropy.xy,0.);
#ifdef ANISOTROPIC_TEXTURE
anisotropy*=anisotropyMapData.b;
#if DEBUGMODE>0
outParams.anisotropyMapData=anisotropyMapData;
#endif
anisotropyMapData.rg=anisotropyMapData.rg*2.0-1.0;
#ifdef ANISOTROPIC_LEGACY
anisotropyDirection.rg*=anisotropyMapData.rg;
#else
anisotropyDirection.xy=mat2(anisotropyDirection.x,anisotropyDirection.y,-anisotropyDirection.y,anisotropyDirection.x)*normalize(anisotropyMapData.rg);
#endif
#endif
mat3 anisoTBN=mat3(normalize(TBN[0]),normalize(TBN[1]),normalize(TBN[2]));vec3 anisotropicTangent=normalize(anisoTBN*anisotropyDirection);vec3 anisotropicBitangent=normalize(cross(anisoTBN[2],anisotropicTangent));outParams.anisotropy=anisotropy;outParams.anisotropicTangent=anisotropicTangent;outParams.anisotropicBitangent=anisotropicBitangent;outParams.anisotropicNormal=getAnisotropicBentNormals(anisotropicTangent,anisotropicBitangent,normalW,viewDirectionW,anisotropy,roughness);return outParams;}
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const pbrBlockAnisotropic = {
    name,
    shader
}; //# sourceMappingURL=pbrBlockAnisotropic.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/pbrBlockReflection.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "pbrBlockReflection",
    ()=>pbrBlockReflection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "pbrBlockReflection";
const shader = `#ifdef REFLECTION
struct reflectionOutParams
{vec4 environmentRadiance;vec3 environmentIrradiance;
#ifdef REFLECTIONMAP_3D
vec3 reflectionCoords;
#else
vec2 reflectionCoords;
#endif
#ifdef SS_TRANSLUCENCY
#ifdef USESPHERICALFROMREFLECTIONMAP
#if !defined(NORMAL) || !defined(USESPHERICALINVERTEX)
vec3 irradianceVector;
#endif
#endif
#endif
};
#define pbr_inline
void createReflectionCoords(
in vec3 vPositionW,
in vec3 normalW,
#ifdef ANISOTROPIC
in anisotropicOutParams anisotropicOut,
#endif
#ifdef REFLECTIONMAP_3D
out vec3 reflectionCoords
#else
out vec2 reflectionCoords
#endif
)
{
#ifdef ANISOTROPIC
vec3 reflectionVector=computeReflectionCoords(vec4(vPositionW,1.0),anisotropicOut.anisotropicNormal);
#else
vec3 reflectionVector=computeReflectionCoords(vec4(vPositionW,1.0),normalW);
#endif
#ifdef REFLECTIONMAP_OPPOSITEZ
reflectionVector.z*=-1.0;
#endif
#ifdef REFLECTIONMAP_3D
reflectionCoords=reflectionVector;
#else
reflectionCoords=reflectionVector.xy;
#ifdef REFLECTIONMAP_PROJECTION
reflectionCoords/=reflectionVector.z;
#endif
reflectionCoords.y=1.0-reflectionCoords.y;
#endif
}
#define pbr_inline
#define inline
void sampleReflectionTexture(
in float alphaG,
in vec3 vReflectionMicrosurfaceInfos,
in vec2 vReflectionInfos,
in vec3 vReflectionColor,
#if defined(LODINREFLECTIONALPHA) && !defined(REFLECTIONMAP_SKYBOX)
in float NdotVUnclamped,
#endif
#ifdef LINEARSPECULARREFLECTION
in float roughness,
#endif
#ifdef REFLECTIONMAP_3D
in samplerCube reflectionSampler,
const vec3 reflectionCoords,
#else
in sampler2D reflectionSampler,
const vec2 reflectionCoords,
#endif
#ifndef LODBASEDMICROSFURACE
#ifdef REFLECTIONMAP_3D
in samplerCube reflectionSamplerLow,
in samplerCube reflectionSamplerHigh,
#else
in sampler2D reflectionSamplerLow,
in sampler2D reflectionSamplerHigh,
#endif
#endif
#ifdef REALTIME_FILTERING
in vec2 vReflectionFilteringInfo,
#endif
out vec4 environmentRadiance
)
{
#if defined(LODINREFLECTIONALPHA) && !defined(REFLECTIONMAP_SKYBOX)
float reflectionLOD=getLodFromAlphaG(vReflectionMicrosurfaceInfos.x,alphaG,NdotVUnclamped);
#elif defined(LINEARSPECULARREFLECTION)
float reflectionLOD=getLinearLodFromRoughness(vReflectionMicrosurfaceInfos.x,roughness);
#else
float reflectionLOD=getLodFromAlphaG(vReflectionMicrosurfaceInfos.x,alphaG);
#endif
#ifdef LODBASEDMICROSFURACE
reflectionLOD=reflectionLOD*vReflectionMicrosurfaceInfos.y+vReflectionMicrosurfaceInfos.z;
#ifdef LODINREFLECTIONALPHA
float automaticReflectionLOD=UNPACK_LOD(sampleReflection(reflectionSampler,reflectionCoords).a);float requestedReflectionLOD=max(automaticReflectionLOD,reflectionLOD);
#else
float requestedReflectionLOD=reflectionLOD;
#endif
#ifdef REALTIME_FILTERING
environmentRadiance=vec4(radiance(alphaG,reflectionSampler,reflectionCoords,vReflectionFilteringInfo),1.0);
#else
environmentRadiance=sampleReflectionLod(reflectionSampler,reflectionCoords,reflectionLOD);
#endif
#else
float lodReflectionNormalized=saturate(reflectionLOD/log2(vReflectionMicrosurfaceInfos.x));float lodReflectionNormalizedDoubled=lodReflectionNormalized*2.0;vec4 environmentMid=sampleReflection(reflectionSampler,reflectionCoords);if (lodReflectionNormalizedDoubled<1.0){environmentRadiance=mix(
sampleReflection(reflectionSamplerHigh,reflectionCoords),
environmentMid,
lodReflectionNormalizedDoubled
);} else {environmentRadiance=mix(
environmentMid,
sampleReflection(reflectionSamplerLow,reflectionCoords),
lodReflectionNormalizedDoubled-1.0
);}
#endif
#ifdef RGBDREFLECTION
environmentRadiance.rgb=fromRGBD(environmentRadiance);
#endif
#ifdef GAMMAREFLECTION
environmentRadiance.rgb=toLinearSpace(environmentRadiance.rgb);
#endif
environmentRadiance.rgb*=vReflectionInfos.x;environmentRadiance.rgb*=vReflectionColor.rgb;}
#define pbr_inline
#define inline
reflectionOutParams reflectionBlock(
in vec3 vPositionW
,in vec3 normalW
,in float alphaG
,in vec3 vReflectionMicrosurfaceInfos
,in vec2 vReflectionInfos
,in vec3 vReflectionColor
#ifdef ANISOTROPIC
,in anisotropicOutParams anisotropicOut
#endif
#if defined(LODINREFLECTIONALPHA) && !defined(REFLECTIONMAP_SKYBOX)
,in float NdotVUnclamped
#endif
#ifdef LINEARSPECULARREFLECTION
,in float roughness
#endif
#ifdef REFLECTIONMAP_3D
,in samplerCube reflectionSampler
#else
,in sampler2D reflectionSampler
#endif
#if defined(NORMAL) && defined(USESPHERICALINVERTEX)
,in vec3 vEnvironmentIrradiance
#endif
#if (defined(USESPHERICALFROMREFLECTIONMAP) && (!defined(NORMAL) || !defined(USESPHERICALINVERTEX))) || (defined(USEIRRADIANCEMAP) && defined(REFLECTIONMAP_3D))
,in mat4 reflectionMatrix
#endif
#ifdef USEIRRADIANCEMAP
#ifdef REFLECTIONMAP_3D
,in samplerCube irradianceSampler
#else
,in sampler2D irradianceSampler
#endif
#ifdef USE_IRRADIANCE_DOMINANT_DIRECTION
,in vec3 reflectionDominantDirection
#endif
#endif
#ifndef LODBASEDMICROSFURACE
#ifdef REFLECTIONMAP_3D
,in samplerCube reflectionSamplerLow
,in samplerCube reflectionSamplerHigh
#else
,in sampler2D reflectionSamplerLow
,in sampler2D reflectionSamplerHigh
#endif
#endif
#ifdef REALTIME_FILTERING
,in vec2 vReflectionFilteringInfo
#ifdef IBL_CDF_FILTERING
,in sampler2D icdfSampler
#endif
#endif
,in vec3 viewDirectionW
,in float diffuseRoughness
,in vec3 surfaceAlbedo
)
{reflectionOutParams outParams;vec4 environmentRadiance=vec4(0.,0.,0.,0.);
#ifdef REFLECTIONMAP_3D
vec3 reflectionCoords=vec3(0.);
#else
vec2 reflectionCoords=vec2(0.);
#endif
createReflectionCoords(
vPositionW,
normalW,
#ifdef ANISOTROPIC
anisotropicOut,
#endif
reflectionCoords
);sampleReflectionTexture(
alphaG,
vReflectionMicrosurfaceInfos,
vReflectionInfos,
vReflectionColor,
#if defined(LODINREFLECTIONALPHA) && !defined(REFLECTIONMAP_SKYBOX)
NdotVUnclamped,
#endif
#ifdef LINEARSPECULARREFLECTION
roughness,
#endif
#ifdef REFLECTIONMAP_3D
reflectionSampler,
reflectionCoords,
#else
reflectionSampler,
reflectionCoords,
#endif
#ifndef LODBASEDMICROSFURACE
reflectionSamplerLow,
reflectionSamplerHigh,
#endif
#ifdef REALTIME_FILTERING
vReflectionFilteringInfo,
#endif
environmentRadiance
);vec3 environmentIrradiance=vec3(0.,0.,0.);
#if (defined(USESPHERICALFROMREFLECTIONMAP) && (!defined(NORMAL) || !defined(USESPHERICALINVERTEX))) || (defined(USEIRRADIANCEMAP) && defined(REFLECTIONMAP_3D))
#ifdef ANISOTROPIC
vec3 irradianceVector=vec3(reflectionMatrix*vec4(anisotropicOut.anisotropicNormal,0)).xyz;
#else
vec3 irradianceVector=vec3(reflectionMatrix*vec4(normalW,0)).xyz;
#endif
vec3 irradianceView=vec3(reflectionMatrix*vec4(viewDirectionW,0)).xyz;
#if !defined(USE_IRRADIANCE_DOMINANT_DIRECTION) && !defined(REALTIME_FILTERING)
#if BASE_DIFFUSE_MODEL != BRDF_DIFFUSE_MODEL_LAMBERT && BASE_DIFFUSE_MODEL != BRDF_DIFFUSE_MODEL_LEGACY
float NdotV=max(dot(normalW,viewDirectionW),0.0);irradianceVector=mix(irradianceVector,irradianceView,(0.5*(1.0-NdotV))*diffuseRoughness);
#endif
#endif
#ifdef REFLECTIONMAP_OPPOSITEZ
irradianceVector.z*=-1.0;
#endif
#ifdef INVERTCUBICMAP
irradianceVector.y*=-1.0;
#endif
#endif
#ifdef USESPHERICALFROMREFLECTIONMAP
#if defined(NORMAL) && defined(USESPHERICALINVERTEX)
environmentIrradiance=vEnvironmentIrradiance;
#else
#if defined(REALTIME_FILTERING)
environmentIrradiance=irradiance(reflectionSampler,irradianceVector,vReflectionFilteringInfo,diffuseRoughness,surfaceAlbedo,irradianceView
#ifdef IBL_CDF_FILTERING
,icdfSampler
#endif
);
#else
environmentIrradiance=computeEnvironmentIrradiance(irradianceVector);
#endif
#ifdef SS_TRANSLUCENCY
outParams.irradianceVector=irradianceVector;
#endif
#endif
#elif defined(USEIRRADIANCEMAP)
#ifdef REFLECTIONMAP_3D
vec4 environmentIrradiance4=sampleReflection(irradianceSampler,irradianceVector);
#else
vec4 environmentIrradiance4=sampleReflection(irradianceSampler,reflectionCoords);
#endif
environmentIrradiance=environmentIrradiance4.rgb;
#ifdef RGBDREFLECTION
environmentIrradiance.rgb=fromRGBD(environmentIrradiance4);
#endif
#ifdef GAMMAREFLECTION
environmentIrradiance.rgb=toLinearSpace(environmentIrradiance.rgb);
#endif
#ifdef USE_IRRADIANCE_DOMINANT_DIRECTION
vec3 Ls=normalize(reflectionDominantDirection);float NoL=dot(irradianceVector,Ls);float NoV=dot(irradianceVector,irradianceView);vec3 diffuseRoughnessTerm=vec3(1.0);
#if BASE_DIFFUSE_MODEL==BRDF_DIFFUSE_MODEL_EON
float LoV=dot (Ls,irradianceView);float mag=length(reflectionDominantDirection)*2.0;vec3 clampedAlbedo=clamp(surfaceAlbedo,vec3(0.1),vec3(1.0));diffuseRoughnessTerm=diffuseBRDF_EON(clampedAlbedo,diffuseRoughness,NoL,NoV,LoV)*PI;diffuseRoughnessTerm=diffuseRoughnessTerm/clampedAlbedo;diffuseRoughnessTerm=mix(vec3(1.0),diffuseRoughnessTerm,sqrt(clamp(mag*NoV,0.0,1.0)));
#elif BASE_DIFFUSE_MODEL==BRDF_DIFFUSE_MODEL_BURLEY
vec3 H=(irradianceView+Ls)*0.5;float VoH=dot(irradianceView,H);diffuseRoughnessTerm=vec3(diffuseBRDF_Burley(NoL,NoV,VoH,diffuseRoughness)*PI);
#endif
environmentIrradiance=environmentIrradiance.rgb*diffuseRoughnessTerm;
#endif
#endif
environmentIrradiance*=vReflectionColor.rgb*vReflectionInfos.x;
#ifdef MIX_IBL_RADIANCE_WITH_IRRADIANCE
outParams.environmentRadiance=vec4(mix(environmentRadiance.rgb,environmentIrradiance,alphaG),environmentRadiance.a);
#else
outParams.environmentRadiance=environmentRadiance;
#endif
outParams.environmentIrradiance=environmentIrradiance;outParams.reflectionCoords=reflectionCoords;return outParams;}
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const pbrBlockReflection = {
    name,
    shader
}; //# sourceMappingURL=pbrBlockReflection.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/pbrBlockSheen.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "pbrBlockSheen",
    ()=>pbrBlockSheen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "pbrBlockSheen";
const shader = `#ifdef SHEEN
struct sheenOutParams
{float sheenIntensity;vec3 sheenColor;float sheenRoughness;
#ifdef SHEEN_LINKWITHALBEDO
vec3 surfaceAlbedo;
#endif
#if defined(ENVIRONMENTBRDF) && defined(SHEEN_ALBEDOSCALING)
float sheenAlbedoScaling;
#endif
#if defined(REFLECTION) && defined(ENVIRONMENTBRDF)
vec3 finalSheenRadianceScaled;
#endif
#if DEBUGMODE>0
#ifdef SHEEN_TEXTURE
vec4 sheenMapData;
#endif
#if defined(REFLECTION) && defined(ENVIRONMENTBRDF)
vec3 sheenEnvironmentReflectance;
#endif
#endif
};
#define pbr_inline
#define inline
sheenOutParams sheenBlock(
in vec4 vSheenColor
#ifdef SHEEN_ROUGHNESS
,in float vSheenRoughness
#if defined(SHEEN_TEXTURE_ROUGHNESS) && !defined(SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE)
,in vec4 sheenMapRoughnessData
#endif
#endif
,in float roughness
#ifdef SHEEN_TEXTURE
,in vec4 sheenMapData
,in float sheenMapLevel
#endif
,in float reflectance
#ifdef SHEEN_LINKWITHALBEDO
,in vec3 baseColor
,in vec3 surfaceAlbedo
#endif
#ifdef ENVIRONMENTBRDF
,in float NdotV
,in vec3 environmentBrdf
#endif
#if defined(REFLECTION) && defined(ENVIRONMENTBRDF)
,in vec2 AARoughnessFactors
,in vec3 vReflectionMicrosurfaceInfos
,in vec2 vReflectionInfos
,in vec3 vReflectionColor
,in vec4 vLightingIntensity
#ifdef REFLECTIONMAP_3D
,in samplerCube reflectionSampler
,in vec3 reflectionCoords
#else
,in sampler2D reflectionSampler
,in vec2 reflectionCoords
#endif
,in float NdotVUnclamped
#ifndef LODBASEDMICROSFURACE
#ifdef REFLECTIONMAP_3D
,in samplerCube reflectionSamplerLow
,in samplerCube reflectionSamplerHigh
#else
,in sampler2D reflectionSamplerLow
,in sampler2D reflectionSamplerHigh
#endif
#endif
#ifdef REALTIME_FILTERING
,in vec2 vReflectionFilteringInfo
#endif
#if !defined(REFLECTIONMAP_SKYBOX) && defined(RADIANCEOCCLUSION)
,in float seo
#endif
#if !defined(REFLECTIONMAP_SKYBOX) && defined(HORIZONOCCLUSION) && defined(BUMP) && defined(REFLECTIONMAP_3D)
,in float eho
#endif
#endif
)
{sheenOutParams outParams;float sheenIntensity=vSheenColor.a;
#ifdef SHEEN_TEXTURE
#if DEBUGMODE>0
outParams.sheenMapData=sheenMapData;
#endif
#endif
#ifdef SHEEN_LINKWITHALBEDO
float sheenFactor=pow5(1.0-sheenIntensity);vec3 sheenColor=baseColor.rgb*(1.0-sheenFactor);float sheenRoughness=sheenIntensity;outParams.surfaceAlbedo=surfaceAlbedo*sheenFactor;
#ifdef SHEEN_TEXTURE
sheenIntensity*=sheenMapData.a;
#endif
#else
vec3 sheenColor=vSheenColor.rgb;
#ifdef SHEEN_TEXTURE
#ifdef SHEEN_GAMMATEXTURE
sheenColor.rgb*=toLinearSpace(sheenMapData.rgb);
#else
sheenColor.rgb*=sheenMapData.rgb;
#endif
sheenColor.rgb*=sheenMapLevel;
#endif
#ifdef SHEEN_ROUGHNESS
float sheenRoughness=vSheenRoughness;
#ifdef SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE
#if defined(SHEEN_TEXTURE)
sheenRoughness*=sheenMapData.a;
#endif
#elif defined(SHEEN_TEXTURE_ROUGHNESS)
sheenRoughness*=sheenMapRoughnessData.a;
#endif
#else
float sheenRoughness=roughness;
#ifdef SHEEN_TEXTURE
sheenIntensity*=sheenMapData.a;
#endif
#endif
#if !defined(SHEEN_ALBEDOSCALING)
sheenIntensity*=(1.-reflectance);
#endif
sheenColor*=sheenIntensity;
#endif
#ifdef ENVIRONMENTBRDF
/*#ifdef SHEEN_SOFTER
vec3 environmentSheenBrdf=vec3(0.,0.,getBRDFLookupCharlieSheen(NdotV,sheenRoughness));
#else*/
#ifdef SHEEN_ROUGHNESS
vec3 environmentSheenBrdf=getBRDFLookup(NdotV,sheenRoughness);
#else
vec3 environmentSheenBrdf=environmentBrdf;
#endif
/*#endif*/
#endif
#if defined(REFLECTION) && defined(ENVIRONMENTBRDF)
float sheenAlphaG=convertRoughnessToAverageSlope(sheenRoughness);
#ifdef SPECULARAA
sheenAlphaG+=AARoughnessFactors.y;
#endif
vec4 environmentSheenRadiance=vec4(0.,0.,0.,0.);sampleReflectionTexture(
sheenAlphaG,
vReflectionMicrosurfaceInfos,
vReflectionInfos,
vReflectionColor,
#if defined(LODINREFLECTIONALPHA) && !defined(REFLECTIONMAP_SKYBOX)
NdotVUnclamped,
#endif
#ifdef LINEARSPECULARREFLECTION
sheenRoughness,
#endif
reflectionSampler,
reflectionCoords,
#ifndef LODBASEDMICROSFURACE
reflectionSamplerLow,
reflectionSamplerHigh,
#endif
#ifdef REALTIME_FILTERING
vReflectionFilteringInfo,
#endif
environmentSheenRadiance
);vec3 sheenEnvironmentReflectance=getSheenReflectanceFromBRDFLookup(sheenColor,environmentSheenBrdf);
#if !defined(REFLECTIONMAP_SKYBOX) && defined(RADIANCEOCCLUSION)
sheenEnvironmentReflectance*=seo;
#endif
#if !defined(REFLECTIONMAP_SKYBOX) && defined(HORIZONOCCLUSION) && defined(BUMP) && defined(REFLECTIONMAP_3D)
sheenEnvironmentReflectance*=eho;
#endif
#if DEBUGMODE>0
outParams.sheenEnvironmentReflectance=sheenEnvironmentReflectance;
#endif
outParams.finalSheenRadianceScaled=
environmentSheenRadiance.rgb *
sheenEnvironmentReflectance *
vLightingIntensity.z;
#endif
#if defined(ENVIRONMENTBRDF) && defined(SHEEN_ALBEDOSCALING)
outParams.sheenAlbedoScaling=1.0-sheenIntensity*max(max(sheenColor.r,sheenColor.g),sheenColor.b)*environmentSheenBrdf.b;
#endif
outParams.sheenIntensity=sheenIntensity;outParams.sheenColor=sheenColor;outParams.sheenRoughness=sheenRoughness;return outParams;}
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const pbrBlockSheen = {
    name,
    shader
}; //# sourceMappingURL=pbrBlockSheen.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/pbrBlockClearcoat.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "pbrBlockClearcoat",
    ()=>pbrBlockClearcoat
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "pbrBlockClearcoat";
const shader = `struct clearcoatOutParams
{vec3 specularEnvironmentR0;float conservationFactor;vec3 clearCoatNormalW;vec2 clearCoatAARoughnessFactors;float clearCoatIntensity;float clearCoatRoughness;
#ifdef REFLECTION
vec3 finalClearCoatRadianceScaled;
#endif
#ifdef CLEARCOAT_TINT
vec3 absorption;float clearCoatNdotVRefract;vec3 clearCoatColor;float clearCoatThickness;
#endif
#if defined(ENVIRONMENTBRDF) && defined(MS_BRDF_ENERGY_CONSERVATION)
vec3 energyConservationFactorClearCoat;
#endif
#if DEBUGMODE>0
#ifdef CLEARCOAT_BUMP
mat3 TBNClearCoat;
#endif
#ifdef CLEARCOAT_TEXTURE
vec2 clearCoatMapData;
#endif
#if defined(CLEARCOAT_TINT) && defined(CLEARCOAT_TINT_TEXTURE)
vec4 clearCoatTintMapData;
#endif
#ifdef REFLECTION
vec4 environmentClearCoatRadiance;vec3 clearCoatEnvironmentReflectance;
#endif
float clearCoatNdotV;
#endif
};
#ifdef CLEARCOAT
#define pbr_inline
#define inline
clearcoatOutParams clearcoatBlock(
in vec3 vPositionW
,in vec3 geometricNormalW
,in vec3 viewDirectionW
,in vec2 vClearCoatParams
#if defined(CLEARCOAT_TEXTURE_ROUGHNESS) && !defined(CLEARCOAT_TEXTURE_ROUGHNESS_IDENTICAL) && !defined(CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE)
,in vec4 clearCoatMapRoughnessData
#endif
,in vec3 specularEnvironmentR0
#ifdef CLEARCOAT_TEXTURE
,in vec2 clearCoatMapData
#endif
#ifdef CLEARCOAT_TINT
,in vec4 vClearCoatTintParams
,in float clearCoatColorAtDistance
,in vec4 vClearCoatRefractionParams
#ifdef CLEARCOAT_TINT_TEXTURE
,in vec4 clearCoatTintMapData
#endif
#endif
#ifdef CLEARCOAT_BUMP
,in vec2 vClearCoatBumpInfos
,in vec4 clearCoatBumpMapData
,in vec2 vClearCoatBumpUV
#if defined(TANGENT) && defined(NORMAL)
,in mat3 vTBN
#else
,in vec2 vClearCoatTangentSpaceParams
#endif
#ifdef OBJECTSPACE_NORMALMAP
,in mat4 normalMatrix
#endif
#endif
#if defined(FORCENORMALFORWARD) && defined(NORMAL)
,in vec3 faceNormal
#endif
#ifdef REFLECTION
,in vec3 vReflectionMicrosurfaceInfos
,in vec2 vReflectionInfos
,in vec3 vReflectionColor
,in vec4 vLightingIntensity
#ifdef REFLECTIONMAP_3D
,in samplerCube reflectionSampler
#else
,in sampler2D reflectionSampler
#endif
#ifndef LODBASEDMICROSFURACE
#ifdef REFLECTIONMAP_3D
,in samplerCube reflectionSamplerLow
,in samplerCube reflectionSamplerHigh
#else
,in sampler2D reflectionSamplerLow
,in sampler2D reflectionSamplerHigh
#endif
#endif
#ifdef REALTIME_FILTERING
,in vec2 vReflectionFilteringInfo
#endif
#endif
#if defined(CLEARCOAT_BUMP) || defined(TWOSIDEDLIGHTING)
,in float frontFacingMultiplier
#endif
)
{clearcoatOutParams outParams;float clearCoatIntensity=vClearCoatParams.x;float clearCoatRoughness=vClearCoatParams.y;
#ifdef CLEARCOAT_TEXTURE
clearCoatIntensity*=clearCoatMapData.x;
#ifdef CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE
clearCoatRoughness*=clearCoatMapData.y;
#endif
#if DEBUGMODE>0
outParams.clearCoatMapData=clearCoatMapData;
#endif
#endif
#if defined(CLEARCOAT_TEXTURE_ROUGHNESS) && !defined(CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE)
clearCoatRoughness*=clearCoatMapRoughnessData.y;
#endif
outParams.clearCoatIntensity=clearCoatIntensity;outParams.clearCoatRoughness=clearCoatRoughness;
#ifdef CLEARCOAT_TINT
vec3 clearCoatColor=vClearCoatTintParams.rgb;float clearCoatThickness=vClearCoatTintParams.a;
#ifdef CLEARCOAT_TINT_TEXTURE
#ifdef CLEARCOAT_TINT_GAMMATEXTURE
clearCoatColor*=toLinearSpace(clearCoatTintMapData.rgb);
#else
clearCoatColor*=clearCoatTintMapData.rgb;
#endif
clearCoatThickness*=clearCoatTintMapData.a;
#if DEBUGMODE>0
outParams.clearCoatTintMapData=clearCoatTintMapData;
#endif
#endif
outParams.clearCoatColor=computeColorAtDistanceInMedia(clearCoatColor,clearCoatColorAtDistance);outParams.clearCoatThickness=clearCoatThickness;
#endif
#ifdef CLEARCOAT_REMAP_F0
vec3 specularEnvironmentR0Updated=getR0RemappedForClearCoat(specularEnvironmentR0);
#else
vec3 specularEnvironmentR0Updated=specularEnvironmentR0;
#endif
outParams.specularEnvironmentR0=mix(specularEnvironmentR0,specularEnvironmentR0Updated,clearCoatIntensity);vec3 clearCoatNormalW=geometricNormalW;
#ifdef CLEARCOAT_BUMP
#ifdef NORMALXYSCALE
float clearCoatNormalScale=1.0;
#else
float clearCoatNormalScale=vClearCoatBumpInfos.y;
#endif
#if defined(TANGENT) && defined(NORMAL)
mat3 TBNClearCoat=vTBN;
#else
vec2 TBNClearCoatUV=vClearCoatBumpUV*frontFacingMultiplier;mat3 TBNClearCoat=cotangent_frame(clearCoatNormalW*clearCoatNormalScale,vPositionW,TBNClearCoatUV,vClearCoatTangentSpaceParams);
#endif
#if DEBUGMODE>0
outParams.TBNClearCoat=TBNClearCoat;
#endif
#ifdef OBJECTSPACE_NORMALMAP
clearCoatNormalW=normalize(clearCoatBumpMapData.xyz *2.0-1.0);clearCoatNormalW=normalize(mat3(normalMatrix)*clearCoatNormalW);
#else
clearCoatNormalW=perturbNormal(TBNClearCoat,clearCoatBumpMapData.xyz,vClearCoatBumpInfos.y);
#endif
#endif
#if defined(FORCENORMALFORWARD) && defined(NORMAL)
clearCoatNormalW*=sign(dot(clearCoatNormalW,faceNormal));
#endif
#if defined(TWOSIDEDLIGHTING) && defined(NORMAL)
clearCoatNormalW=clearCoatNormalW*frontFacingMultiplier;
#endif
outParams.clearCoatNormalW=clearCoatNormalW;outParams.clearCoatAARoughnessFactors=getAARoughnessFactors(clearCoatNormalW.xyz);float clearCoatNdotVUnclamped=dot(clearCoatNormalW,viewDirectionW);float clearCoatNdotV=absEps(clearCoatNdotVUnclamped);
#if DEBUGMODE>0
outParams.clearCoatNdotV=clearCoatNdotV;
#endif
#ifdef CLEARCOAT_TINT
vec3 clearCoatVRefract=refract(-viewDirectionW,clearCoatNormalW,vClearCoatRefractionParams.y);outParams.clearCoatNdotVRefract=absEps(dot(clearCoatNormalW,clearCoatVRefract));
#endif
#if defined(ENVIRONMENTBRDF) && (!defined(REFLECTIONMAP_SKYBOX) || defined(MS_BRDF_ENERGY_CONSERVATION))
vec3 environmentClearCoatBrdf=getBRDFLookup(clearCoatNdotV,clearCoatRoughness);
#endif
#if defined(REFLECTION)
float clearCoatAlphaG=convertRoughnessToAverageSlope(clearCoatRoughness);
#ifdef SPECULARAA
clearCoatAlphaG+=outParams.clearCoatAARoughnessFactors.y;
#endif
vec4 environmentClearCoatRadiance=vec4(0.,0.,0.,0.);vec3 clearCoatReflectionVector=computeReflectionCoords(vec4(vPositionW,1.0),clearCoatNormalW);
#ifdef REFLECTIONMAP_OPPOSITEZ
clearCoatReflectionVector.z*=-1.0;
#endif
#ifdef REFLECTIONMAP_3D
vec3 clearCoatReflectionCoords=clearCoatReflectionVector;
#else
vec2 clearCoatReflectionCoords=clearCoatReflectionVector.xy;
#ifdef REFLECTIONMAP_PROJECTION
clearCoatReflectionCoords/=clearCoatReflectionVector.z;
#endif
clearCoatReflectionCoords.y=1.0-clearCoatReflectionCoords.y;
#endif
sampleReflectionTexture(
clearCoatAlphaG,
vReflectionMicrosurfaceInfos,
vReflectionInfos,
vReflectionColor,
#if defined(LODINREFLECTIONALPHA) && !defined(REFLECTIONMAP_SKYBOX)
clearCoatNdotVUnclamped,
#endif
#ifdef LINEARSPECULARREFLECTION
clearCoatRoughness,
#endif
reflectionSampler,
clearCoatReflectionCoords,
#ifndef LODBASEDMICROSFURACE
reflectionSamplerLow,
reflectionSamplerHigh,
#endif
#ifdef REALTIME_FILTERING
vReflectionFilteringInfo,
#endif
environmentClearCoatRadiance
);
#if DEBUGMODE>0
outParams.environmentClearCoatRadiance=environmentClearCoatRadiance;
#endif
#if defined(ENVIRONMENTBRDF) && !defined(REFLECTIONMAP_SKYBOX)
vec3 clearCoatEnvironmentReflectance=getReflectanceFromBRDFLookup(vec3(vClearCoatRefractionParams.x),environmentClearCoatBrdf);
#ifdef HORIZONOCCLUSION
#ifdef BUMP
#ifdef REFLECTIONMAP_3D
float clearCoatEho=environmentHorizonOcclusion(-viewDirectionW,clearCoatNormalW,geometricNormalW);clearCoatEnvironmentReflectance*=clearCoatEho;
#endif
#endif
#endif
#else
vec3 clearCoatEnvironmentReflectance=getReflectanceFromAnalyticalBRDFLookup_Jones(clearCoatNdotV,vec3(1.),vec3(1.),sqrt(1.-clearCoatRoughness));
#endif
clearCoatEnvironmentReflectance*=clearCoatIntensity;
#if DEBUGMODE>0
outParams.clearCoatEnvironmentReflectance=clearCoatEnvironmentReflectance;
#endif
outParams.finalClearCoatRadianceScaled=
environmentClearCoatRadiance.rgb *
clearCoatEnvironmentReflectance *
vLightingIntensity.z;
#endif
#if defined(CLEARCOAT_TINT)
outParams.absorption=computeClearCoatAbsorption(outParams.clearCoatNdotVRefract,outParams.clearCoatNdotVRefract,outParams.clearCoatColor,clearCoatThickness,clearCoatIntensity);
#endif
float fresnelIBLClearCoat=fresnelSchlickGGX(clearCoatNdotV,vClearCoatRefractionParams.x,CLEARCOATREFLECTANCE90);fresnelIBLClearCoat*=clearCoatIntensity;outParams.conservationFactor=(1.-fresnelIBLClearCoat);
#if defined(ENVIRONMENTBRDF) && defined(MS_BRDF_ENERGY_CONSERVATION)
outParams.energyConservationFactorClearCoat=getEnergyConservationFactor(outParams.specularEnvironmentR0,environmentClearCoatBrdf);
#endif
return outParams;}
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const pbrBlockClearcoat = {
    name,
    shader
}; //# sourceMappingURL=pbrBlockClearcoat.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/pbrBlockIridescence.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "pbrBlockIridescence",
    ()=>pbrBlockIridescence
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "pbrBlockIridescence";
const shader = `struct iridescenceOutParams
{float iridescenceIntensity;float iridescenceIOR;float iridescenceThickness;vec3 specularEnvironmentR0;};
#ifdef IRIDESCENCE
#define pbr_inline
#define inline
iridescenceOutParams iridescenceBlock(
in vec4 vIridescenceParams
,in float viewAngle
,in vec3 specularEnvironmentR0
#ifdef IRIDESCENCE_TEXTURE
,in vec2 iridescenceMapData
#endif
#ifdef IRIDESCENCE_THICKNESS_TEXTURE
,in vec2 iridescenceThicknessMapData
#endif
#ifdef CLEARCOAT
,in float NdotVUnclamped
,in vec2 vClearCoatParams
#ifdef CLEARCOAT_TEXTURE
,in vec2 clearCoatMapData
#endif
#endif
)
{iridescenceOutParams outParams;float iridescenceIntensity=vIridescenceParams.x;float iridescenceIOR=vIridescenceParams.y;float iridescenceThicknessMin=vIridescenceParams.z;float iridescenceThicknessMax=vIridescenceParams.w;float iridescenceThicknessWeight=1.;
#ifdef IRIDESCENCE_TEXTURE
iridescenceIntensity*=iridescenceMapData.x;
#endif
#if defined(IRIDESCENCE_THICKNESS_TEXTURE)
iridescenceThicknessWeight=iridescenceThicknessMapData.g;
#endif
float iridescenceThickness=mix(iridescenceThicknessMin,iridescenceThicknessMax,iridescenceThicknessWeight);float topIor=1.; 
#ifdef CLEARCOAT
float clearCoatIntensity=vClearCoatParams.x;
#ifdef CLEARCOAT_TEXTURE
clearCoatIntensity*=clearCoatMapData.x;
#endif
topIor=mix(1.0,vClearCoatRefractionParams.w-1.,clearCoatIntensity);viewAngle=sqrt(1.0+square(1.0/topIor)*(square(NdotVUnclamped)-1.0));
#endif
vec3 iridescenceFresnel=evalIridescence(topIor,iridescenceIOR,viewAngle,iridescenceThickness,specularEnvironmentR0);outParams.specularEnvironmentR0=mix(specularEnvironmentR0,iridescenceFresnel,iridescenceIntensity);outParams.iridescenceIntensity=iridescenceIntensity;outParams.iridescenceThickness=iridescenceThickness;outParams.iridescenceIOR=iridescenceIOR;return outParams;}
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const pbrBlockIridescence = {
    name,
    shader
}; //# sourceMappingURL=pbrBlockIridescence.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/pbrBlockSubSurface.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "pbrBlockSubSurface",
    ()=>pbrBlockSubSurface
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "pbrBlockSubSurface";
const shader = `struct subSurfaceOutParams
{vec3 specularEnvironmentReflectance;
#ifdef SS_REFRACTION
vec3 finalRefraction;vec3 surfaceAlbedo;
#ifdef SS_LINKREFRACTIONTOTRANSPARENCY
float alpha;
#endif
float refractionOpacity;
#endif
#ifdef SS_TRANSLUCENCY
vec3 transmittance;float translucencyIntensity;
#ifdef REFLECTION
vec3 refractionIrradiance;
#endif
#endif
#if DEBUGMODE>0
#ifdef SS_THICKNESSANDMASK_TEXTURE
vec4 thicknessMap;
#endif
#ifdef SS_REFRACTION
vec4 environmentRefraction;vec3 refractionTransmittance;
#endif
#endif
};
#ifdef SUBSURFACE
#ifdef SS_REFRACTION
#define pbr_inline
#define inline
vec4 sampleEnvironmentRefraction(
in float ior
,in float thickness
,in float refractionLOD
,in vec3 normalW
,in vec3 vPositionW
,in vec3 viewDirectionW
,in mat4 view
,in vec4 vRefractionInfos
,in mat4 refractionMatrix
,in vec4 vRefractionMicrosurfaceInfos
,in float alphaG
#ifdef SS_REFRACTIONMAP_3D
,in samplerCube refractionSampler
#ifndef LODBASEDMICROSFURACE
,in samplerCube refractionSamplerLow
,in samplerCube refractionSamplerHigh
#endif
#else
,in sampler2D refractionSampler
#ifndef LODBASEDMICROSFURACE
,in sampler2D refractionSamplerLow
,in sampler2D refractionSamplerHigh
#endif
#endif
#ifdef ANISOTROPIC
,in anisotropicOutParams anisotropicOut
#endif
#ifdef REALTIME_FILTERING
,in vec2 vRefractionFilteringInfo
#endif
#ifdef SS_USE_LOCAL_REFRACTIONMAP_CUBIC
,in vec3 refractionPosition
,in vec3 refractionSize
#endif
) {vec4 environmentRefraction=vec4(0.,0.,0.,0.);
#ifdef ANISOTROPIC
vec3 refractionVector=refract(-viewDirectionW,anisotropicOut.anisotropicNormal,ior);
#else
vec3 refractionVector=refract(-viewDirectionW,normalW,ior);
#endif
#ifdef SS_REFRACTIONMAP_OPPOSITEZ
refractionVector.z*=-1.0;
#endif
#ifdef SS_REFRACTIONMAP_3D
#ifdef SS_USE_LOCAL_REFRACTIONMAP_CUBIC
refractionVector=parallaxCorrectNormal(vPositionW,refractionVector,refractionSize,refractionPosition);
#endif
refractionVector.y=refractionVector.y*vRefractionInfos.w;vec3 refractionCoords=refractionVector;refractionCoords=vec3(refractionMatrix*vec4(refractionCoords,0));
#else
#ifdef SS_USE_THICKNESS_AS_DEPTH
vec3 vRefractionUVW=vec3(refractionMatrix*(view*vec4(vPositionW+refractionVector*thickness,1.0)));
#else
vec3 vRefractionUVW=vec3(refractionMatrix*(view*vec4(vPositionW+refractionVector*vRefractionInfos.z,1.0)));
#endif
vec2 refractionCoords=vRefractionUVW.xy/vRefractionUVW.z;refractionCoords.y=1.0-refractionCoords.y;
#endif
#ifdef LODBASEDMICROSFURACE
refractionLOD=refractionLOD*vRefractionMicrosurfaceInfos.y+vRefractionMicrosurfaceInfos.z;
#ifdef SS_LODINREFRACTIONALPHA
float automaticRefractionLOD=UNPACK_LOD(sampleRefraction(refractionSampler,refractionCoords).a);float requestedRefractionLOD=max(automaticRefractionLOD,refractionLOD);
#else
float requestedRefractionLOD=refractionLOD;
#endif
#if defined(REALTIME_FILTERING) && defined(SS_REFRACTIONMAP_3D)
environmentRefraction=vec4(radiance(alphaG,refractionSampler,refractionCoords,vRefractionFilteringInfo),1.0);
#else
environmentRefraction=sampleRefractionLod(refractionSampler,refractionCoords,requestedRefractionLOD);
#endif
#else
float lodRefractionNormalized=saturate(refractionLOD/log2(vRefractionMicrosurfaceInfos.x));float lodRefractionNormalizedDoubled=lodRefractionNormalized*2.0;vec4 environmentRefractionMid=sampleRefraction(refractionSampler,refractionCoords);if (lodRefractionNormalizedDoubled<1.0){environmentRefraction=mix(
sampleRefraction(refractionSamplerHigh,refractionCoords),
environmentRefractionMid,
lodRefractionNormalizedDoubled
);} else {environmentRefraction=mix(
environmentRefractionMid,
sampleRefraction(refractionSamplerLow,refractionCoords),
lodRefractionNormalizedDoubled-1.0
);}
#endif
#ifdef SS_RGBDREFRACTION
environmentRefraction.rgb=fromRGBD(environmentRefraction);
#endif
#ifdef SS_GAMMAREFRACTION
environmentRefraction.rgb=toLinearSpace(environmentRefraction.rgb);
#endif
return environmentRefraction;}
#endif
#define pbr_inline
#define inline
subSurfaceOutParams subSurfaceBlock(
in vec3 vSubSurfaceIntensity
,in vec2 vThicknessParam
,in vec4 vTintColor
,in vec3 normalW
,in vec3 vSpecularEnvironmentReflectance
#ifdef SS_THICKNESSANDMASK_TEXTURE
,in vec4 thicknessMap
#endif
#ifdef SS_REFRACTIONINTENSITY_TEXTURE
,in vec4 refractionIntensityMap
#endif
#ifdef SS_TRANSLUCENCYINTENSITY_TEXTURE
,in vec4 translucencyIntensityMap
#endif
#ifdef REFLECTION
#ifdef SS_TRANSLUCENCY
,in mat4 reflectionMatrix
#ifdef USESPHERICALFROMREFLECTIONMAP
#if !defined(NORMAL) || !defined(USESPHERICALINVERTEX)
,in vec3 irradianceVector_
#endif
#if defined(REALTIME_FILTERING)
,in samplerCube reflectionSampler
,in vec2 vReflectionFilteringInfo
#ifdef IBL_CDF_FILTERING
,in sampler2D icdfSampler
#endif
#endif
#endif
#ifdef USEIRRADIANCEMAP
#ifdef REFLECTIONMAP_3D
,in samplerCube irradianceSampler
#else
,in sampler2D irradianceSampler
#endif
#endif
#endif
#endif
#if defined(SS_REFRACTION) || defined(SS_TRANSLUCENCY)
,in vec3 surfaceAlbedo
#endif
#ifdef SS_REFRACTION
,in vec3 vPositionW
,in vec3 viewDirectionW
,in mat4 view
,in vec4 vRefractionInfos
,in mat4 refractionMatrix
,in vec4 vRefractionMicrosurfaceInfos
,in vec4 vLightingIntensity
#ifdef SS_LINKREFRACTIONTOTRANSPARENCY
,in float alpha
#endif
#ifdef SS_LODINREFRACTIONALPHA
,in float NdotVUnclamped
#endif
#ifdef SS_LINEARSPECULARREFRACTION
,in float roughness
#endif
,in float alphaG
#ifdef SS_REFRACTIONMAP_3D
,in samplerCube refractionSampler
#ifndef LODBASEDMICROSFURACE
,in samplerCube refractionSamplerLow
,in samplerCube refractionSamplerHigh
#endif
#else
,in sampler2D refractionSampler
#ifndef LODBASEDMICROSFURACE
,in sampler2D refractionSamplerLow
,in sampler2D refractionSamplerHigh
#endif
#endif
#ifdef ANISOTROPIC
,in anisotropicOutParams anisotropicOut
#endif
#ifdef REALTIME_FILTERING
,in vec2 vRefractionFilteringInfo
#endif
#ifdef SS_USE_LOCAL_REFRACTIONMAP_CUBIC
,in vec3 refractionPosition
,in vec3 refractionSize
#endif
#ifdef SS_DISPERSION
,in float dispersion
#endif
#endif
#ifdef SS_TRANSLUCENCY
,in vec3 vDiffusionDistance
,in vec4 vTranslucencyColor
#ifdef SS_TRANSLUCENCYCOLOR_TEXTURE
,in vec4 translucencyColorMap
#endif
#endif
)
{subSurfaceOutParams outParams;outParams.specularEnvironmentReflectance=vSpecularEnvironmentReflectance;
#ifdef SS_REFRACTION
float refractionIntensity=vSubSurfaceIntensity.x;
#ifdef SS_LINKREFRACTIONTOTRANSPARENCY
refractionIntensity*=(1.0-alpha);outParams.alpha=1.0;
#endif
#endif
#ifdef SS_TRANSLUCENCY
float translucencyIntensity=vSubSurfaceIntensity.y;
#endif
#ifdef SS_THICKNESSANDMASK_TEXTURE
#ifdef SS_USE_GLTF_TEXTURES
float thickness=thicknessMap.g*vThicknessParam.y+vThicknessParam.x;
#else
float thickness=thicknessMap.r*vThicknessParam.y+vThicknessParam.x;
#endif
#if DEBUGMODE>0
outParams.thicknessMap=thicknessMap;
#endif
#if defined(SS_REFRACTION) && defined(SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS)
#ifdef SS_USE_GLTF_TEXTURES
refractionIntensity*=thicknessMap.r;
#else
refractionIntensity*=thicknessMap.g;
#endif
#endif
#if defined(SS_TRANSLUCENCY) && defined(SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS)
#ifdef SS_USE_GLTF_TEXTURES
translucencyIntensity*=thicknessMap.a;
#else
translucencyIntensity*=thicknessMap.b;
#endif
#endif
#else
float thickness=vThicknessParam.y;
#endif
#if defined(SS_REFRACTION) && defined(SS_REFRACTIONINTENSITY_TEXTURE)
#ifdef SS_USE_GLTF_TEXTURES
refractionIntensity*=refractionIntensityMap.r;
#else
refractionIntensity*=refractionIntensityMap.g;
#endif
#endif
#if defined(SS_TRANSLUCENCY) && defined(SS_TRANSLUCENCYINTENSITY_TEXTURE)
#ifdef SS_USE_GLTF_TEXTURES
translucencyIntensity*=translucencyIntensityMap.a;
#else
translucencyIntensity*=translucencyIntensityMap.b;
#endif
#endif
#ifdef SS_TRANSLUCENCY
thickness=maxEps(thickness);vec4 translucencyColor=vTranslucencyColor;
#ifdef SS_TRANSLUCENCYCOLOR_TEXTURE
translucencyColor*=translucencyColorMap;
#endif
vec3 transmittance=transmittanceBRDF_Burley(translucencyColor.rgb,vDiffusionDistance,thickness);transmittance*=translucencyIntensity;outParams.transmittance=transmittance;outParams.translucencyIntensity=translucencyIntensity;
#endif
#ifdef SS_REFRACTION
vec4 environmentRefraction=vec4(0.,0.,0.,0.);
#ifdef SS_HAS_THICKNESS
float ior=vRefractionInfos.y;
#else
float ior=vRefractionMicrosurfaceInfos.w;
#endif
#ifdef SS_LODINREFRACTIONALPHA
float refractionAlphaG=alphaG;refractionAlphaG=mix(alphaG,0.0,clamp(ior*3.0-2.0,0.0,1.0));float refractionLOD=getLodFromAlphaG(vRefractionMicrosurfaceInfos.x,refractionAlphaG,NdotVUnclamped);
#elif defined(SS_LINEARSPECULARREFRACTION)
float refractionRoughness=alphaG;refractionRoughness=mix(alphaG,0.0,clamp(ior*3.0-2.0,0.0,1.0));float refractionLOD=getLinearLodFromRoughness(vRefractionMicrosurfaceInfos.x,refractionRoughness);
#else
float refractionAlphaG=alphaG;refractionAlphaG=mix(alphaG,0.0,clamp(ior*3.0-2.0,0.0,1.0));float refractionLOD=getLodFromAlphaG(vRefractionMicrosurfaceInfos.x,refractionAlphaG);
#endif
float refraction_ior=vRefractionInfos.y;
#ifdef SS_DISPERSION
float realIOR=1.0/refraction_ior;float iorDispersionSpread=0.04*dispersion*(realIOR-1.0);vec3 iors=vec3(1.0/(realIOR-iorDispersionSpread),refraction_ior,1.0/(realIOR+iorDispersionSpread));for (int i=0; i<3; i++) {refraction_ior=iors[i];
#endif
vec4 envSample=sampleEnvironmentRefraction(refraction_ior,thickness,refractionLOD,normalW,vPositionW,viewDirectionW,view,vRefractionInfos,refractionMatrix,vRefractionMicrosurfaceInfos,alphaG
#ifdef SS_REFRACTIONMAP_3D
,refractionSampler
#ifndef LODBASEDMICROSFURACE
,refractionSamplerLow
,refractionSamplerHigh
#endif
#else
,refractionSampler
#ifndef LODBASEDMICROSFURACE
,refractionSamplerLow
,refractionSamplerHigh
#endif
#endif
#ifdef ANISOTROPIC
,anisotropicOut
#endif
#ifdef REALTIME_FILTERING
,vRefractionFilteringInfo
#endif
#ifdef SS_USE_LOCAL_REFRACTIONMAP_CUBIC
,refractionPosition
,refractionSize
#endif
);
#ifdef SS_DISPERSION
environmentRefraction[i]=envSample[i];}
#else
environmentRefraction=envSample;
#endif
environmentRefraction.rgb*=vRefractionInfos.x;
#endif
#ifdef SS_REFRACTION
vec3 refractionTransmittance=vec3(refractionIntensity);
#ifdef SS_THICKNESSANDMASK_TEXTURE
vec3 volumeAlbedo=computeColorAtDistanceInMedia(vTintColor.rgb,vTintColor.w);refractionTransmittance*=cocaLambert(volumeAlbedo,thickness);
#elif defined(SS_LINKREFRACTIONTOTRANSPARENCY)
float maxChannel=max(max(surfaceAlbedo.r,surfaceAlbedo.g),surfaceAlbedo.b);vec3 volumeAlbedo=saturate(maxChannel*surfaceAlbedo);environmentRefraction.rgb*=volumeAlbedo;
#else
vec3 volumeAlbedo=computeColorAtDistanceInMedia(vTintColor.rgb,vTintColor.w);refractionTransmittance*=cocaLambert(volumeAlbedo,vThicknessParam.y);
#endif
#ifdef SS_ALBEDOFORREFRACTIONTINT
environmentRefraction.rgb*=surfaceAlbedo.rgb;
#endif
outParams.surfaceAlbedo=surfaceAlbedo;outParams.refractionOpacity=1.-refractionIntensity;
#ifdef LEGACY_SPECULAR_ENERGY_CONSERVATION
outParams.surfaceAlbedo*=outParams.refractionOpacity;
#endif
#ifdef UNUSED_MULTIPLEBOUNCES
vec3 bounceSpecularEnvironmentReflectance=(2.0*vSpecularEnvironmentReflectance)/(1.0+vSpecularEnvironmentReflectance);outParams.specularEnvironmentReflectance=mix(bounceSpecularEnvironmentReflectance,vSpecularEnvironmentReflectance,refractionIntensity);
#endif
#if DEBUGMODE>0
outParams.refractionTransmittance=refractionTransmittance;
#endif
outParams.finalRefraction=environmentRefraction.rgb*refractionTransmittance*vLightingIntensity.z;outParams.finalRefraction*=vec3(1.0)-vSpecularEnvironmentReflectance;
#if DEBUGMODE>0
outParams.environmentRefraction=environmentRefraction;
#endif
#endif
#if defined(REFLECTION) && defined(SS_TRANSLUCENCY)
#if defined(NORMAL) && defined(USESPHERICALINVERTEX) || !defined(USESPHERICALFROMREFLECTIONMAP)
vec3 irradianceVector=vec3(reflectionMatrix*vec4(normalW,0)).xyz;
#ifdef REFLECTIONMAP_OPPOSITEZ
irradianceVector.z*=-1.0;
#endif
#ifdef INVERTCUBICMAP
irradianceVector.y*=-1.0;
#endif
#else
vec3 irradianceVector=irradianceVector_;
#endif
#if defined(USESPHERICALFROMREFLECTIONMAP)
#if defined(REALTIME_FILTERING)
vec3 refractionIrradiance=irradiance(reflectionSampler,-irradianceVector,vReflectionFilteringInfo,0.0,surfaceAlbedo,irradianceVector
#ifdef IBL_CDF_FILTERING
,icdfSampler
#endif
);
#else
vec3 refractionIrradiance=computeEnvironmentIrradiance(-irradianceVector);
#endif
#elif defined(USEIRRADIANCEMAP)
#ifdef REFLECTIONMAP_3D
vec3 irradianceCoords=irradianceVector;
#else
vec2 irradianceCoords=irradianceVector.xy;
#ifdef REFLECTIONMAP_PROJECTION
irradianceCoords/=irradianceVector.z;
#endif
irradianceCoords.y=1.0-irradianceCoords.y;
#endif
vec4 refractionIrradiance=sampleReflection(irradianceSampler,-irradianceCoords);
#ifdef RGBDREFLECTION
refractionIrradiance.rgb=fromRGBD(refractionIrradiance);
#endif
#ifdef GAMMAREFLECTION
refractionIrradiance.rgb=toLinearSpace(refractionIrradiance.rgb);
#endif
#else
vec4 refractionIrradiance=vec4(0.);
#endif
refractionIrradiance.rgb*=transmittance;
#ifdef SS_ALBEDOFORTRANSLUCENCYTINT
refractionIrradiance.rgb*=surfaceAlbedo.rgb;
#endif
outParams.refractionIrradiance=refractionIrradiance.rgb;
#endif
return outParams;}
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const pbrBlockSubSurface = {
    name,
    shader
}; //# sourceMappingURL=pbrBlockSubSurface.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/pbrBlockReflectance0.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "pbrBlockReflectance0",
    ()=>pbrBlockReflectance0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "pbrBlockReflectance0";
const shader = `float reflectanceF0=reflectivityOut.reflectanceF0;vec3 specularEnvironmentR0=reflectivityOut.colorReflectanceF0;vec3 specularEnvironmentR90=reflectivityOut.colorReflectanceF90;
#ifdef ALPHAFRESNEL
float reflectance90=fresnelGrazingReflectance(reflectanceF0);specularEnvironmentR90=specularEnvironmentR90*reflectance90;
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const pbrBlockReflectance0 = {
    name,
    shader
}; //# sourceMappingURL=pbrBlockReflectance0.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/pbrClusteredLightingFunctions.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "pbrClusteredLightingFunctions",
    ()=>pbrClusteredLightingFunctions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$clusteredLightingFunctions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/clusteredLightingFunctions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$pbrBlockReflectance0$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/pbrBlockReflectance0.js [app-ssr] (ecmascript)");
;
;
;
const name = "pbrClusteredLightingFunctions";
const shader = `#if defined(CLUSTLIGHT_BATCH) && CLUSTLIGHT_BATCH>0
#include<clusteredLightingFunctions>
#define inline
lightingInfo computeClusteredLighting(
sampler2D lightDataTexture,
sampler2D tileMaskTexture,
vec4 lightData,
ivec2 sliceRange,
vec3 V,
vec3 N,
vec3 posW,
vec3 surfaceAlbedo,
reflectivityOutParams reflectivityOut
#ifdef IRIDESCENCE
,float iridescenceIntensity
#endif
#ifdef SS_TRANSLUCENCY
,subSurfaceOutParams subSurfaceOut
#endif
#ifdef SPECULARTERM
,float AARoughnessFactor
#endif
#ifdef ANISOTROPIC
,anisotropicOutParams anisotropicOut
#endif
#ifdef SHEEN
,sheenOutParams sheenOut
#endif
#ifdef CLEARCOAT
,clearcoatOutParams clearcoatOut
#endif
) {float NdotV=absEps(dot(N,V));
#include<pbrBlockReflectance0>
#ifdef CLEARCOAT
specularEnvironmentR0=clearcoatOut.specularEnvironmentR0;
#endif
lightingInfo result;ivec2 tilePosition=ivec2(gl_FragCoord.xy*lightData.xy);int maskHeight=int(lightData.z);tilePosition.y=min(tilePosition.y,maskHeight-1);ivec2 batchRange=sliceRange/CLUSTLIGHT_BATCH;int batchOffset=batchRange.x*CLUSTLIGHT_BATCH;tilePosition.y+=maskHeight*batchRange.x;for (int i=batchRange.x; i<=batchRange.y; i+=1) {uint mask=uint(texelFetch(tileMaskTexture,tilePosition,0).r);tilePosition.y+=maskHeight;int maskOffset=max(sliceRange.x-batchOffset,0);int maskWidth=min(sliceRange.y-batchOffset+1,CLUSTLIGHT_BATCH);mask=extractBits(mask,maskOffset,maskWidth);while (mask != 0u) {uint bit=mask & -mask;mask ^= bit;int position=onlyBitPosition(bit);ClusteredLight light=getClusteredLight(lightDataTexture,batchOffset+maskOffset+position);preLightingInfo preInfo=computePointAndSpotPreLightingInfo(light.vLightData,V,N,posW);preInfo.NdotV=NdotV;preInfo.attenuation=computeDistanceLightFalloff(preInfo.lightOffset,preInfo.lightDistanceSquared,light.vLightFalloff.x,light.vLightFalloff.y);if (light.vLightDirection.w>=0.0) {preInfo.attenuation*=computeDirectionalLightFalloff(light.vLightDirection.xyz,preInfo.L,light.vLightDirection.w,light.vLightData.w,light.vLightFalloff.z,light.vLightFalloff.w);}
preInfo.roughness=adjustRoughnessFromLightProperties(reflectivityOut.roughness,light.vLightSpecular.a,preInfo.lightDistance);preInfo.diffuseRoughness=reflectivityOut.diffuseRoughness;preInfo.surfaceAlbedo=surfaceAlbedo;
#ifdef IRIDESCENCE
preInfo.iridescenceIntensity=iridescenceIntensity;
#endif
lightingInfo info;
#ifdef SS_TRANSLUCENCY
#ifdef SS_TRANSLUCENCY_LEGACY
info.diffuse=computeDiffuseTransmittedLighting(preInfo,light.vLightDiffuse.rgb,subSurfaceOut.transmittance);info.diffuseTransmission=vec3(0);
#else
info.diffuse=computeDiffuseLighting(preInfo,light.vLightDiffuse.rgb)*(1.0-subSurfaceOut.translucencyIntensity);info.diffuseTransmission=computeDiffuseTransmittedLighting(preInfo,light.vLightDiffuse.rgb,subSurfaceOut.transmittance);
#endif
#else
info.diffuse=computeDiffuseLighting(preInfo,light.vLightDiffuse.rgb);
#endif
#ifdef SPECULARTERM
#if CONDUCTOR_SPECULAR_MODEL==CONDUCTOR_SPECULAR_MODEL_OPENPBR
vec3 metalFresnel=reflectivityOut.specularWeight*getF82Specular(preInfo.VdotH,specularEnvironmentR0,reflectivityOut.colorReflectanceF90,reflectivityOut.roughness);vec3 dielectricFresnel=fresnelSchlickGGX(preInfo.VdotH,reflectivityOut.dielectricColorF0,reflectivityOut.colorReflectanceF90);vec3 coloredFresnel=mix(dielectricFresnel,metalFresnel,reflectivityOut.metallic);
#else
vec3 coloredFresnel=fresnelSchlickGGX(preInfo.VdotH,specularEnvironmentR0,reflectivityOut.colorReflectanceF90);
#endif
#ifndef LEGACY_SPECULAR_ENERGY_CONSERVATION
float NdotH=dot(N,preInfo.H);vec3 fresnel=fresnelSchlickGGX(NdotH,vec3(reflectanceF0),specularEnvironmentR90);info.diffuse*=(vec3(1.0)-fresnel);
#endif
#ifdef ANISOTROPIC
info.specular=computeAnisotropicSpecularLighting(preInfo,V,N,anisotropicOut.anisotropicTangent,anisotropicOut.anisotropicBitangent,anisotropicOut.anisotropy,clearcoatOut.specularEnvironmentR0,specularEnvironmentR90,AARoughnessFactor,light.vLightDiffuse.rgb);
#else
info.specular=computeSpecularLighting(preInfo,N,specularEnvironmentR0,coloredFresnel,AARoughnessFactor,light.vLightDiffuse.rgb);
#endif
#endif
#ifdef SHEEN
#ifdef SHEEN_LINKWITHALBEDO
preInfo.roughness=sheenOut.sheenIntensity;
#else
preInfo.roughness=adjustRoughnessFromLightProperties(sheenOut.sheenRoughness,light.vLightSpecular.a,preInfo.lightDistance);
#endif
info.sheen=computeSheenLighting(preInfo,normalW,sheenOut.sheenColor,specularEnvironmentR90,AARoughnessFactor,light.vLightDiffuse.rgb);
#endif
#ifdef CLEARCOAT
preInfo.roughness=adjustRoughnessFromLightProperties(clearcoatOut.clearCoatRoughness,light.vLightSpecular.a,preInfo.lightDistance);info.clearCoat=computeClearCoatLighting(preInfo,clearcoatOut.clearCoatNormalW,clearcoatOut.clearCoatAARoughnessFactors.x,clearcoatOut.clearCoatIntensity,light.vLightDiffuse.rgb);
#ifdef CLEARCOAT_TINT
float absorption=computeClearCoatLightingAbsorption(clearcoatOut.clearCoatNdotVRefract,preInfo.L,clearcoatOut.clearCoatNormalW,clearcoatOut.clearCoatColor,clearcoatOut.clearCoatThickness,clearcoatOut.clearCoatIntensity);info.diffuse*=absorption;
#ifdef SS_TRANSLUCENCY
info.diffuseTransmission*=absorption;
#endif
#ifdef SPECULARTERM
info.specular*=absorption;
#endif
#endif
info.diffuse*=info.clearCoat.w;
#ifdef SS_TRANSLUCENCY
info.diffuseTransmission*=info.clearCoat.w;
#endif
#ifdef SPECULARTERM
info.specular*=info.clearCoat.w;
#endif
#ifdef SHEEN
info.sheen*=info.clearCoat.w;
#endif
#endif
result.diffuse+=info.diffuse;
#ifdef SS_TRANSLUCENCY
result.diffuseTransmission+=info.diffuseTransmission;
#endif
#ifdef SPECULARTERM
result.specular+=info.specular;
#endif
#ifdef CLEARCOAT
result.clearCoat+=info.clearCoat;
#endif
#ifdef SHEEN
result.sheen+=info.sheen;
#endif
}
batchOffset+=CLUSTLIGHT_BATCH;}
return result;}
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const pbrClusteredLightingFunctions = {
    name,
    shader
}; //# sourceMappingURL=pbrClusteredLightingFunctions.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/pbrBlockNormalGeometric.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "pbrBlockNormalGeometric",
    ()=>pbrBlockNormalGeometric
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "pbrBlockNormalGeometric";
const shader = `vec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);
#ifdef NORMAL
vec3 normalW=normalize(vNormalW);
#else
vec3 normalW=normalize(cross(dFdx(vPositionW),dFdy(vPositionW)))*vEyePosition.w;
#endif
vec3 geometricNormalW=normalW;
#if defined(TWOSIDEDLIGHTING) && defined(NORMAL)
geometricNormalW=gl_FrontFacing ? geometricNormalW : -geometricNormalW;
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const pbrBlockNormalGeometric = {
    name,
    shader
}; //# sourceMappingURL=pbrBlockNormalGeometric.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/bumpFragment.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "bumpFragment",
    ()=>bumpFragment
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "bumpFragment";
const shader = `vec2 uvOffset=vec2(0.0,0.0);
#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)
#ifdef NORMALXYSCALE
float normalScale=1.0;
#elif defined(BUMP)
float normalScale=vBumpInfos.y;
#else
float normalScale=1.0;
#endif
#if defined(TANGENT) && defined(NORMAL)
mat3 TBN=vTBN;
#elif defined(BUMP)
vec2 TBNUV=gl_FrontFacing ? vBumpUV : -vBumpUV;mat3 TBN=cotangent_frame(normalW*normalScale,vPositionW,TBNUV,vTangentSpaceParams);
#else
vec2 TBNUV=gl_FrontFacing ? vDetailUV : -vDetailUV;mat3 TBN=cotangent_frame(normalW*normalScale,vPositionW,TBNUV,vec2(1.,1.));
#endif
#elif defined(ANISOTROPIC)
#if defined(TANGENT) && defined(NORMAL)
mat3 TBN=vTBN;
#else
vec2 TBNUV=gl_FrontFacing ? vMainUV1 : -vMainUV1;mat3 TBN=cotangent_frame(normalW,vPositionW,TBNUV,vec2(1.,1.));
#endif
#endif
#ifdef PARALLAX
mat3 invTBN=transposeMat3(TBN);
#ifdef PARALLAXOCCLUSION
uvOffset=parallaxOcclusion(invTBN*-viewDirectionW,invTBN*normalW,vBumpUV,vBumpInfos.z);
#else
uvOffset=parallaxOffset(invTBN*viewDirectionW,vBumpInfos.z);
#endif
#endif
#ifdef DETAIL
vec4 detailColor=texture2D(detailSampler,vDetailUV+uvOffset);vec2 detailNormalRG=detailColor.wy*2.0-1.0;float detailNormalB=sqrt(1.-saturate(dot(detailNormalRG,detailNormalRG)));vec3 detailNormal=vec3(detailNormalRG,detailNormalB);
#endif
#ifdef BUMP
#ifdef OBJECTSPACE_NORMALMAP
#define CUSTOM_FRAGMENT_BUMP_FRAGMENT
normalW=normalize(texture2D(bumpSampler,vBumpUV).xyz *2.0-1.0);normalW=normalize(mat3(normalMatrix)*normalW);
#elif !defined(DETAIL)
normalW=perturbNormal(TBN,texture2D(bumpSampler,vBumpUV+uvOffset).xyz,vBumpInfos.y);
#else
vec3 bumpNormal=texture2D(bumpSampler,vBumpUV+uvOffset).xyz*2.0-1.0;
#if DETAIL_NORMALBLENDMETHOD==0 
detailNormal.xy*=vDetailInfos.z;vec3 blendedNormal=normalize(vec3(bumpNormal.xy+detailNormal.xy,bumpNormal.z*detailNormal.z));
#elif DETAIL_NORMALBLENDMETHOD==1 
detailNormal.xy*=vDetailInfos.z;bumpNormal+=vec3(0.0,0.0,1.0);detailNormal*=vec3(-1.0,-1.0,1.0);vec3 blendedNormal=bumpNormal*dot(bumpNormal,detailNormal)/bumpNormal.z-detailNormal;
#endif
normalW=perturbNormalBase(TBN,blendedNormal,vBumpInfos.y);
#endif
#elif defined(DETAIL)
detailNormal.xy*=vDetailInfos.z;normalW=perturbNormalBase(TBN,detailNormal,vDetailInfos.z);
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const bumpFragment = {
    name,
    shader
}; //# sourceMappingURL=bumpFragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/pbrBlockNormalFinal.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "pbrBlockNormalFinal",
    ()=>pbrBlockNormalFinal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "pbrBlockNormalFinal";
const shader = `#if defined(FORCENORMALFORWARD) && defined(NORMAL)
vec3 faceNormal=normalize(cross(dFdx(vPositionW),dFdy(vPositionW)))*vEyePosition.w;
#if defined(TWOSIDEDLIGHTING)
faceNormal=gl_FrontFacing ? faceNormal : -faceNormal;
#endif
normalW*=sign(dot(normalW,faceNormal));
#endif
#if defined(TWOSIDEDLIGHTING) && defined(NORMAL)
#if defined(MIRRORED)
normalW=gl_FrontFacing ? -normalW : normalW;
#else
normalW=gl_FrontFacing ? normalW : -normalW;
#endif
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const pbrBlockNormalFinal = {
    name,
    shader
}; //# sourceMappingURL=pbrBlockNormalFinal.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/depthPrePass.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "depthPrePass",
    ()=>depthPrePass
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "depthPrePass";
const shader = `#ifdef DEPTHPREPASS
gl_FragColor=vec4(0.,0.,0.,1.0);return;
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const depthPrePass = {
    name,
    shader
}; //# sourceMappingURL=depthPrePass.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/pbrBlockLightmapInit.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "pbrBlockLightmapInit",
    ()=>pbrBlockLightmapInit
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "pbrBlockLightmapInit";
const shader = `#ifdef LIGHTMAP
vec4 lightmapColor=texture2D(lightmapSampler,vLightmapUV+uvOffset);
#ifdef RGBDLIGHTMAP
lightmapColor.rgb=fromRGBD(lightmapColor);
#endif
#ifdef GAMMALIGHTMAP
lightmapColor.rgb=toLinearSpace(lightmapColor.rgb);
#endif
lightmapColor.rgb*=vLightmapInfos.y;
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const pbrBlockLightmapInit = {
    name,
    shader
}; //# sourceMappingURL=pbrBlockLightmapInit.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/pbrBlockGeometryInfo.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "pbrBlockGeometryInfo",
    ()=>pbrBlockGeometryInfo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "pbrBlockGeometryInfo";
const shader = `float NdotVUnclamped=dot(normalW,viewDirectionW);float NdotV=absEps(NdotVUnclamped);float alphaG=convertRoughnessToAverageSlope(roughness);vec2 AARoughnessFactors=getAARoughnessFactors(normalW.xyz);
#ifdef SPECULARAA
alphaG+=AARoughnessFactors.y;
#endif
#if defined(ENVIRONMENTBRDF)
vec3 environmentBrdf=getBRDFLookup(NdotV,roughness);
#endif
#if defined(ENVIRONMENTBRDF) && !defined(REFLECTIONMAP_SKYBOX)
#ifdef RADIANCEOCCLUSION
#ifdef AMBIENTINGRAYSCALE
float ambientMonochrome=aoOut.ambientOcclusionColor.r;
#else
float ambientMonochrome=getLuminance(aoOut.ambientOcclusionColor);
#endif
float seo=environmentRadianceOcclusion(ambientMonochrome,NdotVUnclamped);
#endif
#ifdef HORIZONOCCLUSION
#ifdef BUMP
#ifdef REFLECTIONMAP_3D
float eho=environmentHorizonOcclusion(-viewDirectionW,normalW,geometricNormalW);
#endif
#endif
#endif
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const pbrBlockGeometryInfo = {
    name,
    shader
}; //# sourceMappingURL=pbrBlockGeometryInfo.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/pbrBlockReflectance.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "pbrBlockReflectance",
    ()=>pbrBlockReflectance
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "pbrBlockReflectance";
const shader = `#if defined(ENVIRONMENTBRDF) && !defined(REFLECTIONMAP_SKYBOX)
vec3 baseSpecularEnvironmentReflectance=getReflectanceFromBRDFLookup(vec3(reflectanceF0),reflectivityOut.reflectanceF90,environmentBrdf);
#if (CONDUCTOR_SPECULAR_MODEL==CONDUCTOR_SPECULAR_MODEL_OPENPBR)
vec3 metalEnvironmentReflectance=reflectivityOut.specularWeight*getF82Specular(NdotV,clearcoatOut.specularEnvironmentR0,reflectivityOut.colorReflectanceF90,reflectivityOut.roughness);vec3 dielectricEnvironmentReflectance=getReflectanceFromBRDFLookup(reflectivityOut.dielectricColorF0,reflectivityOut.colorReflectanceF90,environmentBrdf);vec3 colorSpecularEnvironmentReflectance=mix(dielectricEnvironmentReflectance,metalEnvironmentReflectance,reflectivityOut.metallic);
#else
vec3 colorSpecularEnvironmentReflectance=getReflectanceFromBRDFLookup(clearcoatOut.specularEnvironmentR0,reflectivityOut.colorReflectanceF90,environmentBrdf);
#endif
#ifdef RADIANCEOCCLUSION
colorSpecularEnvironmentReflectance*=seo;
#endif
#ifdef HORIZONOCCLUSION
#ifdef BUMP
#ifdef REFLECTIONMAP_3D
colorSpecularEnvironmentReflectance*=eho;
#endif
#endif
#endif
#else
vec3 colorSpecularEnvironmentReflectance=getReflectanceFromAnalyticalBRDFLookup_Jones(NdotV,clearcoatOut.specularEnvironmentR0,specularEnvironmentR90,sqrt(microSurface));vec3 baseSpecularEnvironmentReflectance=getReflectanceFromAnalyticalBRDFLookup_Jones(NdotV,vec3(reflectanceF0),reflectivityOut.reflectanceF90,sqrt(microSurface));
#endif
#ifdef CLEARCOAT
colorSpecularEnvironmentReflectance*=clearcoatOut.conservationFactor;
#if defined(CLEARCOAT_TINT)
colorSpecularEnvironmentReflectance*=clearcoatOut.absorption;
#endif
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const pbrBlockReflectance = {
    name,
    shader
}; //# sourceMappingURL=pbrBlockReflectance.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/pbrBlockDirectLighting.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "pbrBlockDirectLighting",
    ()=>pbrBlockDirectLighting
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "pbrBlockDirectLighting";
const shader = `vec3 diffuseBase=vec3(0.,0.,0.);
#ifdef SS_TRANSLUCENCY
vec3 diffuseTransmissionBase=vec3(0.,0.,0.);
#endif
#ifdef SPECULARTERM
vec3 specularBase=vec3(0.,0.,0.);
#endif
#ifdef CLEARCOAT
vec3 clearCoatBase=vec3(0.,0.,0.);
#endif
#ifdef SHEEN
vec3 sheenBase=vec3(0.,0.,0.);
#endif
#if defined(SPECULARTERM) && defined(LIGHT0)
vec3 coloredFresnel;
#endif
preLightingInfo preInfo;lightingInfo info;float shadow=1.; 
float aggShadow=0.;float numLights=0.;
#if defined(CLEARCOAT) && defined(CLEARCOAT_TINT)
vec3 absorption=vec3(0.);
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const pbrBlockDirectLighting = {
    name,
    shader
}; //# sourceMappingURL=pbrBlockDirectLighting.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/pbrBlockFinalLitComponents.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "pbrBlockFinalLitComponents",
    ()=>pbrBlockFinalLitComponents
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "pbrBlockFinalLitComponents";
const shader = `aggShadow=aggShadow/numLights;
#if defined(ENVIRONMENTBRDF)
#ifdef MS_BRDF_ENERGY_CONSERVATION
vec3 baseSpecularEnergyConservationFactor=getEnergyConservationFactor(vec3(reflectanceF0),environmentBrdf);vec3 coloredEnergyConservationFactor=getEnergyConservationFactor(clearcoatOut.specularEnvironmentR0,environmentBrdf);
#endif
#endif
#if defined(SHEEN) && defined(SHEEN_ALBEDOSCALING) && defined(ENVIRONMENTBRDF)
surfaceAlbedo.rgb=sheenOut.sheenAlbedoScaling*surfaceAlbedo.rgb;
#endif
#ifdef LEGACY_SPECULAR_ENERGY_CONSERVATION
#ifndef METALLICWORKFLOW
#ifdef SPECULAR_GLOSSINESS_ENERGY_CONSERVATION
surfaceAlbedo.rgb=(1.-reflectanceF0)*surfaceAlbedo.rgb;
#endif
#endif
#endif
#ifdef REFLECTION
vec3 finalIrradiance=reflectionOut.environmentIrradiance;
#ifndef LEGACY_SPECULAR_ENERGY_CONSERVATION
#if defined(METALLICWORKFLOW) || defined(SPECULAR_GLOSSINESS_ENERGY_CONSERVATION)
vec3 baseSpecularEnergy=vec3(baseSpecularEnvironmentReflectance);
#if defined(ENVIRONMENTBRDF)
#ifdef MS_BRDF_ENERGY_CONSERVATION
baseSpecularEnergy*=baseSpecularEnergyConservationFactor;
#endif
#endif
finalIrradiance*=clamp(vec3(1.0)-baseSpecularEnergy,0.0,1.0);
#endif
#endif
#if defined(CLEARCOAT)
finalIrradiance*=clearcoatOut.conservationFactor;
#if defined(CLEARCOAT_TINT)
finalIrradiance*=clearcoatOut.absorption;
#endif
#endif
#ifndef SS_APPLY_ALBEDO_AFTER_SUBSURFACE
finalIrradiance*=surfaceAlbedo.rgb;
#endif
#if defined(SS_REFRACTION)
finalIrradiance*=subSurfaceOut.refractionOpacity;
#endif
#if defined(SS_TRANSLUCENCY)
finalIrradiance*=(1.0-subSurfaceOut.translucencyIntensity);finalIrradiance+=subSurfaceOut.refractionIrradiance;
#endif
#ifdef SS_APPLY_ALBEDO_AFTER_SUBSURFACE
finalIrradiance*=surfaceAlbedo.rgb;
#endif
finalIrradiance*=vLightingIntensity.z;finalIrradiance*=aoOut.ambientOcclusionColor;
#endif
#ifdef SPECULARTERM
vec3 finalSpecular=specularBase;finalSpecular=max(finalSpecular,0.0);vec3 finalSpecularScaled=finalSpecular*vLightingIntensity.x*vLightingIntensity.w;
#if defined(ENVIRONMENTBRDF) && defined(MS_BRDF_ENERGY_CONSERVATION)
finalSpecularScaled*=coloredEnergyConservationFactor;
#endif
#if defined(SHEEN) && defined(ENVIRONMENTBRDF) && defined(SHEEN_ALBEDOSCALING)
finalSpecularScaled*=sheenOut.sheenAlbedoScaling;
#endif
#endif
#ifdef REFLECTION
vec3 finalRadiance=reflectionOut.environmentRadiance.rgb;finalRadiance*=colorSpecularEnvironmentReflectance;vec3 finalRadianceScaled=finalRadiance*vLightingIntensity.z;
#if defined(ENVIRONMENTBRDF) && defined(MS_BRDF_ENERGY_CONSERVATION)
finalRadianceScaled*=coloredEnergyConservationFactor;
#endif
#if defined(SHEEN) && defined(ENVIRONMENTBRDF) && defined(SHEEN_ALBEDOSCALING)
finalRadianceScaled*=sheenOut.sheenAlbedoScaling;
#endif
#endif
#ifdef SHEEN
vec3 finalSheen=sheenBase*sheenOut.sheenColor;finalSheen=max(finalSheen,0.0);vec3 finalSheenScaled=finalSheen*vLightingIntensity.x*vLightingIntensity.w;
#if defined(CLEARCOAT) && defined(REFLECTION) && defined(ENVIRONMENTBRDF)
sheenOut.finalSheenRadianceScaled*=clearcoatOut.conservationFactor;
#if defined(CLEARCOAT_TINT)
sheenOut.finalSheenRadianceScaled*=clearcoatOut.absorption;
#endif
#endif
#endif
#ifdef CLEARCOAT
vec3 finalClearCoat=clearCoatBase;finalClearCoat=max(finalClearCoat,0.0);vec3 finalClearCoatScaled=finalClearCoat*vLightingIntensity.x*vLightingIntensity.w;
#if defined(ENVIRONMENTBRDF) && defined(MS_BRDF_ENERGY_CONSERVATION)
finalClearCoatScaled*=clearcoatOut.energyConservationFactorClearCoat;
#endif
#ifdef SS_REFRACTION
subSurfaceOut.finalRefraction*=clearcoatOut.conservationFactor;
#ifdef CLEARCOAT_TINT
subSurfaceOut.finalRefraction*=clearcoatOut.absorption;
#endif
#endif
#endif
#ifdef ALPHABLEND
float luminanceOverAlpha=0.0;
#if defined(REFLECTION) && defined(RADIANCEOVERALPHA)
luminanceOverAlpha+=getLuminance(finalRadianceScaled);
#if defined(CLEARCOAT)
luminanceOverAlpha+=getLuminance(clearcoatOut.finalClearCoatRadianceScaled);
#endif
#endif
#if defined(SPECULARTERM) && defined(SPECULAROVERALPHA)
luminanceOverAlpha+=getLuminance(finalSpecularScaled);
#endif
#if defined(CLEARCOAT) && defined(CLEARCOATOVERALPHA)
luminanceOverAlpha+=getLuminance(finalClearCoatScaled);
#endif
#if defined(RADIANCEOVERALPHA) || defined(SPECULAROVERALPHA) || defined(CLEARCOATOVERALPHA)
alpha=saturate(alpha+luminanceOverAlpha*luminanceOverAlpha);
#endif
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const pbrBlockFinalLitComponents = {
    name,
    shader
}; //# sourceMappingURL=pbrBlockFinalLitComponents.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/pbrBlockFinalUnlitComponents.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "pbrBlockFinalUnlitComponents",
    ()=>pbrBlockFinalUnlitComponents
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "pbrBlockFinalUnlitComponents";
const shader = `vec3 finalDiffuse=diffuseBase;finalDiffuse*=surfaceAlbedo;
#if defined(SS_REFRACTION) && !defined(UNLIT) && !defined(LEGACY_SPECULAR_ENERGY_CONSERVATION)
finalDiffuse*=subSurfaceOut.refractionOpacity;
#endif
#if defined(SS_TRANSLUCENCY) && !defined(UNLIT)
finalDiffuse+=diffuseTransmissionBase;
#endif
finalDiffuse=max(finalDiffuse,0.0);finalDiffuse*=vLightingIntensity.x;vec3 finalAmbient=vAmbientColor;finalAmbient*=surfaceAlbedo.rgb;vec3 finalEmissive=vEmissiveColor;
#ifdef EMISSIVE
vec3 emissiveColorTex=texture2D(emissiveSampler,vEmissiveUV+uvOffset).rgb;
#ifdef GAMMAEMISSIVE
finalEmissive*=toLinearSpace(emissiveColorTex.rgb);
#else
finalEmissive*=emissiveColorTex.rgb;
#endif
finalEmissive*= vEmissiveInfos.y;
#endif
finalEmissive*=vLightingIntensity.y;
#ifdef AMBIENT
vec3 ambientOcclusionForDirectDiffuse=mix(vec3(1.),aoOut.ambientOcclusionColor,vAmbientInfos.w);
#else
vec3 ambientOcclusionForDirectDiffuse=aoOut.ambientOcclusionColor;
#endif
finalAmbient*=aoOut.ambientOcclusionColor;finalDiffuse*=ambientOcclusionForDirectDiffuse;
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const pbrBlockFinalUnlitComponents = {
    name,
    shader
}; //# sourceMappingURL=pbrBlockFinalUnlitComponents.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/pbrBlockFinalColorComposition.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "pbrBlockFinalColorComposition",
    ()=>pbrBlockFinalColorComposition
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "pbrBlockFinalColorComposition";
const shader = `vec4 finalColor=vec4(
#ifndef UNLIT
#ifdef REFLECTION
finalIrradiance +
#endif
#ifdef SPECULARTERM
finalSpecularScaled +
#endif
#ifdef SHEEN
finalSheenScaled +
#endif
#ifdef CLEARCOAT
finalClearCoatScaled +
#endif
#ifdef REFLECTION
finalRadianceScaled +
#if defined(SHEEN) && defined(ENVIRONMENTBRDF)
sheenOut.finalSheenRadianceScaled +
#endif
#ifdef CLEARCOAT
clearcoatOut.finalClearCoatRadianceScaled +
#endif
#endif
#ifdef SS_REFRACTION
subSurfaceOut.finalRefraction +
#endif
#endif
finalAmbient +
finalDiffuse,
alpha);
#ifdef LIGHTMAP
#ifndef LIGHTMAPEXCLUDED
#ifdef USELIGHTMAPASSHADOWMAP
finalColor.rgb*=lightmapColor.rgb;
#else
finalColor.rgb+=lightmapColor.rgb;
#endif
#endif
#endif
finalColor.rgb+=finalEmissive;
#define CUSTOM_FRAGMENT_BEFORE_FOG
finalColor=max(finalColor,0.0);
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const pbrBlockFinalColorComposition = {
    name,
    shader
}; //# sourceMappingURL=pbrBlockFinalColorComposition.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/pbrBlockImageProcessing.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "pbrBlockImageProcessing",
    ()=>pbrBlockImageProcessing
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "pbrBlockImageProcessing";
const shader = `#if defined(IMAGEPROCESSINGPOSTPROCESS) || defined(SS_SCATTERING)
#if !defined(SKIPFINALCOLORCLAMP)
finalColor.rgb=clamp(finalColor.rgb,0.,30.0);
#endif
#else
finalColor=applyImageProcessing(finalColor);
#endif
finalColor.a*=visibility;
#ifdef PREMULTIPLYALPHA
finalColor.rgb*=finalColor.a;
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const pbrBlockImageProcessing = {
    name,
    shader
}; //# sourceMappingURL=pbrBlockImageProcessing.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/pbrBlockPrePass.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "pbrBlockPrePass",
    ()=>pbrBlockPrePass
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "pbrBlockPrePass";
const shader = `#if SCENE_MRT_COUNT>0
float writeGeometryInfo=finalColor.a>ALPHATESTVALUE ? 1.0 : 0.0;
#ifdef PREPASS_POSITION
gl_FragData[PREPASS_POSITION_INDEX]=vec4(vPositionW,writeGeometryInfo);
#endif
#ifdef PREPASS_LOCAL_POSITION
gl_FragData[PREPASS_LOCAL_POSITION_INDEX]=vec4(vPosition,writeGeometryInfo);
#endif
#if defined(PREPASS_VELOCITY)
vec2 a=(vCurrentPosition.xy/vCurrentPosition.w)*0.5+0.5;vec2 b=(vPreviousPosition.xy/vPreviousPosition.w)*0.5+0.5;vec2 velocity=abs(a-b);velocity=vec2(pow(velocity.x,1.0/3.0),pow(velocity.y,1.0/3.0))*sign(a-b)*0.5+0.5;gl_FragData[PREPASS_VELOCITY_INDEX]=vec4(velocity,0.0,writeGeometryInfo);
#elif defined(PREPASS_VELOCITY_LINEAR)
vec2 velocity=vec2(0.5)*((vPreviousPosition.xy/vPreviousPosition.w)-(vCurrentPosition.xy/vCurrentPosition.w));gl_FragData[PREPASS_VELOCITY_LINEAR_INDEX]=vec4(velocity,0.0,writeGeometryInfo);
#endif
#ifdef PREPASS_ALBEDO
gl_FragData[PREPASS_ALBEDO_INDEX]=vec4(surfaceAlbedo,writeGeometryInfo);
#endif
#ifdef PREPASS_ALBEDO_SQRT
vec3 sqAlbedo=sqrt(surfaceAlbedo); 
#endif
#ifdef PREPASS_IRRADIANCE
vec3 irradiance=finalDiffuse;
#ifndef UNLIT
#ifdef REFLECTION
irradiance+=finalIrradiance;
#endif
#endif
#ifdef SS_SCATTERING
#ifdef PREPASS_COLOR
gl_FragData[PREPASS_COLOR_INDEX]=vec4(finalColor.rgb-irradiance,finalColor.a); 
#endif
irradiance/=sqAlbedo;
#else
#ifdef PREPASS_COLOR
gl_FragData[PREPASS_COLOR_INDEX]=finalColor; 
#endif
float scatteringDiffusionProfile=255.;
#endif
gl_FragData[PREPASS_IRRADIANCE_INDEX]=vec4(clamp(irradiance,vec3(0.),vec3(1.)),writeGeometryInfo*scatteringDiffusionProfile/255.); 
#elif defined(PREPASS_COLOR)
gl_FragData[PREPASS_COLOR_INDEX]=vec4(finalColor.rgb,finalColor.a);
#endif
#ifdef PREPASS_DEPTH
gl_FragData[PREPASS_DEPTH_INDEX]=vec4(vViewPos.z,0.0,0.0,writeGeometryInfo); 
#endif
#ifdef PREPASS_SCREENSPACE_DEPTH
gl_FragData[PREPASS_SCREENSPACE_DEPTH_INDEX]=vec4(gl_FragCoord.z,0.0,0.0,writeGeometryInfo);
#endif
#ifdef PREPASS_NORMALIZED_VIEW_DEPTH
gl_FragData[PREPASS_NORMALIZED_VIEW_DEPTH_INDEX]=vec4(vNormViewDepth,0.0,0.0,writeGeometryInfo);
#endif
#ifdef PREPASS_NORMAL
#ifdef PREPASS_NORMAL_WORLDSPACE
gl_FragData[PREPASS_NORMAL_INDEX]=vec4(normalW,writeGeometryInfo);
#else
gl_FragData[PREPASS_NORMAL_INDEX]=vec4(normalize((view*vec4(normalW,0.0)).rgb),writeGeometryInfo);
#endif
#endif
#ifdef PREPASS_WORLD_NORMAL
gl_FragData[PREPASS_WORLD_NORMAL_INDEX]=vec4(normalW*0.5+0.5,writeGeometryInfo); 
#endif
#ifdef PREPASS_ALBEDO_SQRT
gl_FragData[PREPASS_ALBEDO_SQRT_INDEX]=vec4(sqAlbedo,writeGeometryInfo); 
#endif
#ifdef PREPASS_REFLECTIVITY
#ifndef UNLIT
gl_FragData[PREPASS_REFLECTIVITY_INDEX]=vec4(specularEnvironmentR0,microSurface)*writeGeometryInfo;
#else
gl_FragData[PREPASS_REFLECTIVITY_INDEX]=vec4( 0.0,0.0,0.0,1.0 )*writeGeometryInfo;
#endif
#endif
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const pbrBlockPrePass = {
    name,
    shader
}; //# sourceMappingURL=pbrBlockPrePass.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/oitFragment.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "oitFragment",
    ()=>oitFragment
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "oitFragment";
const shader = `#ifdef ORDER_INDEPENDENT_TRANSPARENCY
float fragDepth=gl_FragCoord.z; 
#ifdef ORDER_INDEPENDENT_TRANSPARENCY_16BITS
uint halfFloat=packHalf2x16(vec2(fragDepth));vec2 full=unpackHalf2x16(halfFloat);fragDepth=full.x;
#endif
ivec2 fragCoord=ivec2(gl_FragCoord.xy);vec2 lastDepth=texelFetch(oitDepthSampler,fragCoord,0).rg;vec4 lastFrontColor=texelFetch(oitFrontColorSampler,fragCoord,0);depth.rg=vec2(-MAX_DEPTH);frontColor=lastFrontColor;backColor=vec4(0.0);
#ifdef USE_REVERSE_DEPTHBUFFER
float furthestDepth=-lastDepth.x;float nearestDepth=lastDepth.y;
#else
float nearestDepth=-lastDepth.x;float furthestDepth=lastDepth.y;
#endif
float alphaMultiplier=1.0-lastFrontColor.a;
#ifdef USE_REVERSE_DEPTHBUFFER
if (fragDepth>nearestDepth || fragDepth<furthestDepth) {
#else
if (fragDepth<nearestDepth || fragDepth>furthestDepth) {
#endif
return;}
#ifdef USE_REVERSE_DEPTHBUFFER
if (fragDepth<nearestDepth && fragDepth>furthestDepth) {
#else
if (fragDepth>nearestDepth && fragDepth<furthestDepth) {
#endif
depth.rg=vec2(-fragDepth,fragDepth);return;}
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const oitFragment = {
    name,
    shader
}; //# sourceMappingURL=oitFragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/pbrDebug.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "pbrDebug",
    ()=>pbrDebug
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "pbrDebug";
const shader = `#if DEBUGMODE>0
if (vClipSpacePosition.x/vClipSpacePosition.w>=vDebugMode.x) {
#if DEBUGMODE==1
gl_FragColor.rgb=vPositionW.rgb;
#define DEBUGMODE_NORMALIZE
#elif DEBUGMODE==2 && defined(NORMAL)
gl_FragColor.rgb=vNormalW.rgb;
#define DEBUGMODE_NORMALIZE
#elif DEBUGMODE==3 && defined(BUMP) || DEBUGMODE==3 && defined(PARALLAX) || DEBUGMODE==3 && defined(ANISOTROPIC)
gl_FragColor.rgb=TBN[0];
#define DEBUGMODE_NORMALIZE
#elif DEBUGMODE==4 && defined(BUMP) || DEBUGMODE==4 && defined(PARALLAX) || DEBUGMODE==4 && defined(ANISOTROPIC)
gl_FragColor.rgb=TBN[1];
#define DEBUGMODE_NORMALIZE
#elif DEBUGMODE==5
gl_FragColor.rgb=normalW;
#define DEBUGMODE_NORMALIZE
#elif DEBUGMODE==6 && defined(MAINUV1)
gl_FragColor.rgb=vec3(vMainUV1,0.0);
#elif DEBUGMODE==7 && defined(MAINUV2)
gl_FragColor.rgb=vec3(vMainUV2,0.0);
#elif DEBUGMODE==8 && defined(CLEARCOAT) && defined(CLEARCOAT_BUMP)
gl_FragColor.rgb=clearcoatOut.TBNClearCoat[0];
#define DEBUGMODE_NORMALIZE
#elif DEBUGMODE==9 && defined(CLEARCOAT) && defined(CLEARCOAT_BUMP)
gl_FragColor.rgb=clearcoatOut.TBNClearCoat[1];
#define DEBUGMODE_NORMALIZE
#elif DEBUGMODE==10 && defined(CLEARCOAT)
gl_FragColor.rgb=clearcoatOut.clearCoatNormalW;
#define DEBUGMODE_NORMALIZE
#elif DEBUGMODE==11 && defined(ANISOTROPIC)
gl_FragColor.rgb=anisotropicOut.anisotropicNormal;
#define DEBUGMODE_NORMALIZE
#elif DEBUGMODE==12 && defined(ANISOTROPIC)
gl_FragColor.rgb=anisotropicOut.anisotropicTangent;
#define DEBUGMODE_NORMALIZE
#elif DEBUGMODE==13 && defined(ANISOTROPIC)
gl_FragColor.rgb=anisotropicOut.anisotropicBitangent;
#define DEBUGMODE_NORMALIZE
#elif DEBUGMODE==20 && defined(ALBEDO)
gl_FragColor.rgb=albedoTexture.rgb;
#ifndef GAMMAALBEDO
#define DEBUGMODE_GAMMA
#endif
#elif DEBUGMODE==21 && defined(AMBIENT)
gl_FragColor.rgb=aoOut.ambientOcclusionColorMap.rgb;
#elif DEBUGMODE==22 && defined(OPACITY)
gl_FragColor.rgb=opacityMap.rgb;
#elif DEBUGMODE==23 && defined(EMISSIVE)
gl_FragColor.rgb=emissiveColorTex.rgb;
#ifndef GAMMAEMISSIVE
#define DEBUGMODE_GAMMA
#endif
#elif DEBUGMODE==24 && defined(LIGHTMAP)
gl_FragColor.rgb=lightmapColor.rgb;
#ifndef GAMMALIGHTMAP
#define DEBUGMODE_GAMMA
#endif
#elif DEBUGMODE==25 && defined(REFLECTIVITY) && defined(METALLICWORKFLOW)
gl_FragColor.rgb=reflectivityOut.surfaceMetallicColorMap.rgb;
#elif DEBUGMODE==26 && defined(REFLECTIVITY) && !defined(METALLICWORKFLOW)
gl_FragColor.rgb=reflectivityOut.surfaceReflectivityColorMap.rgb;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==27 && defined(CLEARCOAT) && defined(CLEARCOAT_TEXTURE)
gl_FragColor.rgb=vec3(clearcoatOut.clearCoatMapData.rg,0.0);
#elif DEBUGMODE==28 && defined(CLEARCOAT) && defined(CLEARCOAT_TINT) && defined(CLEARCOAT_TINT_TEXTURE)
gl_FragColor.rgb=clearcoatOut.clearCoatTintMapData.rgb;
#elif DEBUGMODE==29 && defined(SHEEN) && defined(SHEEN_TEXTURE)
gl_FragColor.rgb=sheenOut.sheenMapData.rgb;
#elif DEBUGMODE==30 && defined(ANISOTROPIC) && defined(ANISOTROPIC_TEXTURE)
gl_FragColor.rgb=anisotropicOut.anisotropyMapData.rgb;
#elif DEBUGMODE==31 && defined(SUBSURFACE) && defined(SS_THICKNESSANDMASK_TEXTURE)
gl_FragColor.rgb=subSurfaceOut.thicknessMap.rgb;
#elif DEBUGMODE==32 && defined(BUMP)
gl_FragColor.rgb=texture2D(bumpSampler,vBumpUV).rgb;
#elif DEBUGMODE==40 && defined(SS_REFRACTION)
gl_FragColor.rgb=subSurfaceOut.environmentRefraction.rgb;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==41 && defined(REFLECTION)
gl_FragColor.rgb=reflectionOut.environmentRadiance.rgb;
#ifndef GAMMAREFLECTION
#define DEBUGMODE_GAMMA
#endif
#elif DEBUGMODE==42 && defined(CLEARCOAT) && defined(REFLECTION)
gl_FragColor.rgb=clearcoatOut.environmentClearCoatRadiance.rgb;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==50
gl_FragColor.rgb=diffuseBase.rgb;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==51 && defined(SPECULARTERM)
gl_FragColor.rgb=specularBase.rgb;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==52 && defined(CLEARCOAT)
gl_FragColor.rgb=clearCoatBase.rgb;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==53 && defined(SHEEN)
gl_FragColor.rgb=sheenBase.rgb;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==54 && defined(REFLECTION)
gl_FragColor.rgb=reflectionOut.environmentIrradiance.rgb;
#ifndef GAMMAREFLECTION
#define DEBUGMODE_GAMMA
#endif
#elif DEBUGMODE==60
gl_FragColor.rgb=surfaceAlbedo.rgb;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==61
gl_FragColor.rgb=clearcoatOut.specularEnvironmentR0;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==62 && defined(METALLICWORKFLOW)
gl_FragColor.rgb=vec3(reflectivityOut.metallic);
#elif DEBUGMODE==71 && defined(METALLICWORKFLOW)
gl_FragColor.rgb=reflectivityOut.metallicF0;
#elif DEBUGMODE==63
gl_FragColor.rgb=vec3(roughness);
#elif DEBUGMODE==64
gl_FragColor.rgb=vec3(alphaG);
#elif DEBUGMODE==65
gl_FragColor.rgb=vec3(NdotV);
#elif DEBUGMODE==66 && defined(CLEARCOAT) && defined(CLEARCOAT_TINT)
gl_FragColor.rgb=clearcoatOut.clearCoatColor.rgb;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==67 && defined(CLEARCOAT)
gl_FragColor.rgb=vec3(clearcoatOut.clearCoatRoughness);
#elif DEBUGMODE==68 && defined(CLEARCOAT)
gl_FragColor.rgb=vec3(clearcoatOut.clearCoatNdotV);
#elif DEBUGMODE==69 && defined(SUBSURFACE) && defined(SS_TRANSLUCENCY)
gl_FragColor.rgb=subSurfaceOut.transmittance;
#elif DEBUGMODE==70 && defined(SUBSURFACE) && defined(SS_REFRACTION)
gl_FragColor.rgb=subSurfaceOut.refractionTransmittance;
#elif DEBUGMODE==72
gl_FragColor.rgb=vec3(microSurface);
#elif DEBUGMODE==73
gl_FragColor.rgb=vAlbedoColor.rgb;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==74 && !defined(METALLICWORKFLOW)
gl_FragColor.rgb=vReflectivityColor.rgb;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==75
gl_FragColor.rgb=vEmissiveColor.rgb;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==80 && defined(RADIANCEOCCLUSION)
gl_FragColor.rgb=vec3(seo);
#elif DEBUGMODE==81 && defined(HORIZONOCCLUSION) && defined(BUMP) && defined(REFLECTIONMAP_3D)
gl_FragColor.rgb=vec3(eho);
#elif DEBUGMODE==82 && defined(MS_BRDF_ENERGY_CONSERVATION)
gl_FragColor.rgb=vec3(energyConservationFactor);
#elif DEBUGMODE==83 && defined(ENVIRONMENTBRDF) && !defined(REFLECTIONMAP_SKYBOX)
gl_FragColor.rgb=baseSpecularEnvironmentReflectance;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==84 && defined(CLEARCOAT) && defined(ENVIRONMENTBRDF) && !defined(REFLECTIONMAP_SKYBOX)
gl_FragColor.rgb=clearcoatOut.clearCoatEnvironmentReflectance;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==85 && defined(SHEEN) && defined(REFLECTION)
gl_FragColor.rgb=sheenOut.sheenEnvironmentReflectance;
#define DEBUGMODE_GAMMA
#elif DEBUGMODE==86 && defined(ALPHABLEND)
gl_FragColor.rgb=vec3(luminanceOverAlpha);
#elif DEBUGMODE==87
gl_FragColor.rgb=vec3(alpha);
#elif DEBUGMODE==88 && defined(ALBEDO)
gl_FragColor.rgb=vec3(albedoTexture.a);
#elif DEBUGMODE==89
gl_FragColor.rgb=aoOut.ambientOcclusionColor.rgb;
#else
float stripeWidth=30.;float stripePos=floor(gl_FragCoord.x/stripeWidth);float whichColor=mod(stripePos,2.);vec3 color1=vec3(.6,.2,.2);vec3 color2=vec3(.3,.1,.1);gl_FragColor.rgb=mix(color1,color2,whichColor);
#endif
gl_FragColor.rgb*=vDebugMode.y;
#ifdef DEBUGMODE_NORMALIZE
gl_FragColor.rgb=normalize(gl_FragColor.rgb)*0.5+0.5;
#endif
#ifdef DEBUGMODE_GAMMA
gl_FragColor.rgb=toGammaSpace(gl_FragColor.rgb);
#endif
gl_FragColor.a=1.0;
#ifdef PREPASS
gl_FragData[0]=toLinearSpace(gl_FragColor); 
gl_FragData[1]=vec4(0.,0.,0.,0.); 
#endif
#ifdef DEBUGMODE_FORCERETURN
return;
#endif
}
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const pbrDebug = {
    name,
    shader
}; //# sourceMappingURL=pbrDebug.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/openpbrVertexDeclaration.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "openpbrVertexDeclaration",
    ()=>openpbrVertexDeclaration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$decalVertexDeclaration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/decalVertexDeclaration.js [app-ssr] (ecmascript)");
;
;
const name = "openpbrVertexDeclaration";
const shader = `uniform mat4 view;uniform mat4 viewProjection;uniform vec4 vEyePosition;
#ifdef MULTIVIEW
mat4 viewProjectionR;
#endif
#ifdef BASE_COLOR
uniform vec2 vBaseColorInfos;uniform mat4 baseColorMatrix;
#endif
#ifdef BASE_WEIGHT
uniform mat4 baseWeightMatrix;uniform vec2 vBaseWeightInfos;
#endif
uniform float vBaseDiffuseRoughness;
#ifdef BASE_DIFFUSE_ROUGHNESS
uniform mat4 baseDiffuseRoughnessMatrix;uniform vec2 vBaseDiffuseRoughnessInfos;
#endif
#ifdef AMBIENT_OCCLUSION
uniform vec2 vAmbientOcclusionInfos;uniform mat4 ambientOcclusionMatrix;
#endif
#ifdef EMISSION_COLOR
uniform vec2 vEmissionColorInfos;uniform mat4 emissionColorMatrix;
#endif
#ifdef LIGHTMAP
uniform vec2 vLightmapInfos;uniform mat4 lightmapMatrix;
#endif
#ifdef BASE_METALNESS
uniform vec2 vBaseMetalnessInfos;uniform mat4 baseMetalnessMatrix;
#endif
#ifdef SPECULAR_WEIGHT
uniform vec2 vSpecularWeightInfos;uniform mat4 specularWeightMatrix;
#endif
#ifdef SPECULAR_COLOR
uniform vec2 vSpecularColorInfos;uniform mat4 specularColorMatrix;
#endif
#ifdef SPECULAR_ROUGHNESS
uniform vec2 vSpecularRoughnessInfos;uniform mat4 specularRoughnessMatrix;
#endif
#ifdef SPECULAR_ROUGHNESS_ANISOTROPY
uniform vec2 vSpecularRoughnessAnisotropyInfos;uniform mat4 specularRoughnessAnisotropyMatrix;
#endif
#ifdef COAT_WEIGHT
uniform vec2 vCoatWeightInfos;uniform mat4 coatWeightMatrix;
#endif
#ifdef COAT_COLOR
uniform vec2 vCoatColorInfos;uniform mat4 coatColorMatrix;
#endif
#ifdef COAT_ROUGHNESS
uniform vec2 vCoatRoughnessInfos;uniform mat4 coatRoughnessMatrix;
#endif
#ifdef COAT_ROUGHNESS_ANISOTROPY
uniform vec2 vCoatRoughnessAnisotropyInfos;uniform mat4 coatRoughnessAnisotropyMatrix;
#endif
#ifdef COAT_IOR
uniform vec2 vCoatIorInfos;uniform mat4 coatIorMatrix;
#endif
#ifdef COAT_DARKENING
uniform vec2 vCoatDarkeningInfos;uniform mat4 coatDarkeningMatrix;
#endif
#ifdef FUZZ_WEIGHT
uniform vec2 vFuzzWeightInfos;uniform mat4 fuzzWeightMatrix;
#endif
#ifdef FUZZ_COLOR
uniform vec2 vFuzzColorInfos;uniform mat4 fuzzColorMatrix;
#endif
#ifdef FUZZ_ROUGHNESS
uniform vec2 vFuzzRoughnessInfos;uniform mat4 fuzzRoughnessMatrix;
#endif
#ifdef GEOMETRY_NORMAL
uniform vec2 vGeometryNormalInfos;uniform mat4 geometryNormalMatrix;
#endif
#ifdef GEOMETRY_TANGENT
uniform vec2 vGeometryTangentInfos;uniform mat4 geometryTangentMatrix;
#endif
#ifdef GEOMETRY_COAT_NORMAL
uniform vec2 vGeometryCoatNormalInfos;uniform mat4 geometryCoatNormalMatrix;
#endif
#ifdef THIN_FILM_WEIGHT
uniform vec2 vThinFilmWeightInfos;uniform mat4 thinFilmWeightMatrix;
#endif
#ifdef THIN_FILM_THICKNESS
uniform vec2 vThinFilmThicknessInfos;uniform mat4 thinFilmThicknessMatrix;
#endif
#ifdef GEOMETRY_OPACITY
uniform mat4 geometryOpacityMatrix;uniform vec2 vGeometryOpacityInfos;
#endif
#ifdef POINTSIZE
uniform float pointSize;
#endif
uniform vec4 cameraInfo;
#ifdef REFLECTION
uniform vec2 vReflectionInfos;uniform mat4 reflectionMatrix;
#endif
#ifdef NORMAL
#if defined(USESPHERICALFROMREFLECTIONMAP) && defined(USESPHERICALINVERTEX)
#ifdef USESPHERICALFROMREFLECTIONMAP
#ifdef SPHERICAL_HARMONICS
uniform vec3 vSphericalL00;uniform vec3 vSphericalL1_1;uniform vec3 vSphericalL10;uniform vec3 vSphericalL11;uniform vec3 vSphericalL2_2;uniform vec3 vSphericalL2_1;uniform vec3 vSphericalL20;uniform vec3 vSphericalL21;uniform vec3 vSphericalL22;
#else
uniform vec3 vSphericalX;uniform vec3 vSphericalY;uniform vec3 vSphericalZ;uniform vec3 vSphericalXX_ZZ;uniform vec3 vSphericalYY_ZZ;uniform vec3 vSphericalZZ;uniform vec3 vSphericalXY;uniform vec3 vSphericalYZ;uniform vec3 vSphericalZX;
#endif
#endif
#endif
#endif
#ifdef DETAIL
uniform vec4 vDetailInfos;uniform mat4 detailMatrix;
#endif
#include<decalVertexDeclaration>
#define ADDITIONAL_VERTEX_DECLARATION
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const openpbrVertexDeclaration = {
    name,
    shader
}; //# sourceMappingURL=openpbrVertexDeclaration.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/openpbrUboDeclaration.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "openpbrUboDeclaration",
    ()=>openpbrUboDeclaration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$sceneUboDeclaration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/sceneUboDeclaration.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$meshUboDeclaration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/meshUboDeclaration.js [app-ssr] (ecmascript)");
;
;
;
const name = "openpbrUboDeclaration";
const shader = `layout(std140,column_major) uniform;uniform Material {vec2 vTangentSpaceParams;vec4 vLightingIntensity;float pointSize;vec2 vDebugMode;vec4 cameraInfo;vec2 vReflectionInfos;mat4 reflectionMatrix;vec3 vReflectionMicrosurfaceInfos;vec3 vReflectionPosition;vec3 vReflectionSize;vec2 vReflectionFilteringInfo;vec3 vReflectionDominantDirection;vec3 vReflectionColor;vec3 vSphericalL00;vec3 vSphericalL1_1;vec3 vSphericalL10;vec3 vSphericalL11;vec3 vSphericalL2_2;vec3 vSphericalL2_1;vec3 vSphericalL20;vec3 vSphericalL21;vec3 vSphericalL22;vec3 vSphericalX;vec3 vSphericalY;vec3 vSphericalZ;vec3 vSphericalXX_ZZ;vec3 vSphericalYY_ZZ;vec3 vSphericalZZ;vec3 vSphericalXY;vec3 vSphericalYZ;vec3 vSphericalZX;float vBaseWeight;vec4 vBaseColor;float vBaseDiffuseRoughness;vec4 vReflectanceInfo;vec4 vSpecularColor;vec3 vSpecularAnisotropy;float vCoatWeight;vec3 vCoatColor;float vCoatRoughness;float vCoatRoughnessAnisotropy;float vCoatIor;float vCoatDarkening;float vFuzzWeight;vec3 vFuzzColor;float vFuzzRoughness;vec2 vGeometryCoatTangent;vec3 vEmissionColor;float vThinFilmWeight;vec2 vThinFilmThickness;float vThinFilmIor;vec2 vBaseWeightInfos;mat4 baseWeightMatrix;vec2 vBaseColorInfos;mat4 baseColorMatrix;vec2 vBaseDiffuseRoughnessInfos;mat4 baseDiffuseRoughnessMatrix;vec2 vBaseMetalnessInfos;mat4 baseMetalnessMatrix;vec2 vSpecularWeightInfos;mat4 specularWeightMatrix;vec2 vSpecularColorInfos;mat4 specularColorMatrix;vec2 vSpecularRoughnessInfos;mat4 specularRoughnessMatrix;vec2 vSpecularRoughnessAnisotropyInfos;mat4 specularRoughnessAnisotropyMatrix;vec2 vCoatWeightInfos;mat4 coatWeightMatrix;vec2 vCoatColorInfos;mat4 coatColorMatrix;vec2 vCoatRoughnessInfos;mat4 coatRoughnessMatrix;vec2 vCoatRoughnessAnisotropyInfos;mat4 coatRoughnessAnisotropyMatrix;vec2 vCoatDarkeningInfos;mat4 coatDarkeningMatrix;vec2 vFuzzWeightInfos;mat4 fuzzWeightMatrix;vec2 vFuzzColorInfos;mat4 fuzzColorMatrix;vec2 vFuzzRoughnessInfos;mat4 fuzzRoughnessMatrix;vec2 vGeometryNormalInfos;mat4 geometryNormalMatrix;vec2 vGeometryTangentInfos;mat4 geometryTangentMatrix;vec2 vGeometryCoatNormalInfos;mat4 geometryCoatNormalMatrix;vec2 vGeometryCoatTangentInfos;mat4 geometryCoatTangentMatrix;vec2 vGeometryOpacityInfos;mat4 geometryOpacityMatrix;vec2 vEmissionColorInfos;mat4 emissionColorMatrix;vec2 vThinFilmWeightInfos;mat4 thinFilmWeightMatrix;vec2 vThinFilmThicknessInfos;mat4 thinFilmThicknessMatrix;vec2 vAmbientOcclusionInfos;mat4 ambientOcclusionMatrix;
#define ADDITIONAL_UBO_DECLARATION
};
#include<sceneUboDeclaration>
#include<meshUboDeclaration>
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const openpbrUboDeclaration = {
    name,
    shader
}; //# sourceMappingURL=openpbrUboDeclaration.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/openpbrNormalMapVertexDeclaration.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "openpbrNormalMapVertexDeclaration",
    ()=>openpbrNormalMapVertexDeclaration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "openpbrNormalMapVertexDeclaration";
const shader = `#if defined(GEOMETRY_NORMAL) || defined(PARALLAX) || defined(GEOMETRY_COAT_NORMAL) || defined(ANISOTROPIC) || defined(FUZZ)
#if defined(TANGENT) && defined(NORMAL) 
varying mat3 vTBN;
#endif
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const openpbrNormalMapVertexDeclaration = {
    name,
    shader
}; //# sourceMappingURL=openpbrNormalMapVertexDeclaration.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/openpbrNormalMapVertex.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "openpbrNormalMapVertex",
    ()=>openpbrNormalMapVertex
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "openpbrNormalMapVertex";
const shader = `#if defined(GEOMETRY_NORMAL) || defined(PARALLAX) || defined(GEOMETRY_COAT_NORMAL) || defined(ANISOTROPIC) || defined(FUZZ)
#if defined(TANGENT) && defined(NORMAL)
vec3 tbnNormal=normalize(normalUpdated);vec3 tbnTangent=normalize(tangentUpdated.xyz);vec3 tbnBitangent=cross(tbnNormal,tbnTangent)*tangentUpdated.w;vTBN=mat3(finalWorld)*mat3(tbnTangent,tbnBitangent,tbnNormal);
#endif
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const openpbrNormalMapVertex = {
    name,
    shader
}; //# sourceMappingURL=openpbrNormalMapVertex.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/openpbrFragmentDeclaration.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "openpbrFragmentDeclaration",
    ()=>openpbrFragmentDeclaration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$decalFragmentDeclaration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/decalFragmentDeclaration.js [app-ssr] (ecmascript)");
;
;
const name = "openpbrFragmentDeclaration";
const shader = `uniform vec4 vEyePosition;uniform float vBaseWeight;uniform vec4 vBaseColor;uniform float vBaseDiffuseRoughness;uniform vec4 vReflectanceInfo;uniform vec4 vSpecularColor;uniform vec3 vSpecularAnisotropy;uniform float vCoatWeight;uniform vec3 vCoatColor;uniform float vCoatRoughness;uniform float vCoatRoughnessAnisotropy;uniform float vCoatIor;uniform float vCoatDarkening;uniform float vFuzzWeight;uniform vec3 vFuzzColor;uniform float vFuzzRoughness;uniform vec2 vGeometryCoatTangent;uniform vec3 vEmissionColor;uniform float vThinFilmWeight;uniform vec2 vThinFilmThickness;uniform float vThinFilmIor;uniform vec4 vLightingIntensity;uniform float visibility;
#ifdef BASE_COLOR
uniform vec2 vBaseColorInfos;
#endif
#ifdef BASE_WEIGHT
uniform vec2 vBaseWeightInfos;
#endif
#ifdef BASE_METALNESS
uniform vec2 vBaseMetalnessInfos;
#endif
#ifdef BASE_DIFFUSE_ROUGHNESS
uniform vec2 vBaseDiffuseRoughnessInfos;
#endif
#ifdef SPECULAR_WEIGHT
uniform vec2 vSpecularWeightInfos;
#endif
#ifdef SPECULAR_COLOR
uniform vec2 vSpecularColorInfos;
#endif
#ifdef SPECULAR_ROUGHNESS
uniform vec2 vSpecularRoughnessInfos;
#endif
#ifdef SPECULAR_ROUGHNESS_ANISOTROPY
uniform vec2 vSpecularRoughnessAnisotropyInfos;
#endif
#ifdef SPECULAR_IOR
uniform vec2 vSpecularIorInfos;
#endif
#ifdef AMBIENT_OCCLUSION
uniform vec2 vAmbientOcclusionInfos;
#endif
#ifdef GEOMETRY_NORMAL
uniform vec2 vGeometryNormalInfos;uniform vec2 vTangentSpaceParams;
#endif
#ifdef GEOMETRY_TANGENT
uniform vec2 vGeometryTangentInfos;
#endif
#ifdef GEOMETRY_COAT_NORMAL
uniform vec2 vGeometryCoatNormalInfos;
#endif
#ifdef GEOMETRY_OPACITY
uniform vec2 vGeometryOpacityInfos;
#endif
#ifdef EMISSION_COLOR
uniform vec2 vEmissionColorInfos;
#endif
#ifdef COAT_WEIGHT
uniform vec2 vCoatWeightInfos;
#endif
#ifdef COAT_COLOR
uniform vec2 vCoatColorInfos;
#endif
#ifdef COAT_ROUGHNESS
uniform vec2 vCoatRoughnessInfos;
#endif
#ifdef COAT_ROUGHNESS_ANISOTROPY
uniform vec2 vCoatRoughnessAnisotropyInfos;
#endif
#ifdef COAT_IOR
uniform vec2 vCoatIorInfos;
#endif
#ifdef COAT_DARKENING
uniform vec2 vCoatDarkeningInfos;
#endif
#ifdef FUZZ_WEIGHT
uniform vec2 vFuzzWeightInfos;
#endif
#ifdef FUZZ_COLOR
uniform vec2 vFuzzColorInfos;
#endif
#ifdef FUZZ_ROUGHNESS
uniform vec2 vFuzzRoughnessInfos;
#endif
#ifdef GEOMETRY_COAT_TANGENT
uniform vec2 vGeometryCoatTangentInfos;
#endif
#ifdef THIN_FILM_WEIGHT
uniform vec2 vThinFilmWeightInfos;
#endif
#ifdef THIN_FILM_THICKNESS
uniform vec2 vThinFilmThicknessInfos;
#endif
#if defined(REFLECTIONMAP_SPHERICAL) || defined(REFLECTIONMAP_PROJECTION) || defined(SS_REFRACTION) || defined(PREPASS)
uniform mat4 view;
#endif
#ifdef REFLECTION
uniform vec2 vReflectionInfos;
#ifdef REALTIME_FILTERING
uniform vec2 vReflectionFilteringInfo;
#endif
uniform mat4 reflectionMatrix;uniform vec3 vReflectionMicrosurfaceInfos;
#if defined(USEIRRADIANCEMAP) && defined(USE_IRRADIANCE_DOMINANT_DIRECTION)
uniform vec3 vReflectionDominantDirection;
#endif
#if defined(USE_LOCAL_REFLECTIONMAP_CUBIC) && defined(REFLECTIONMAP_CUBIC)
uniform vec3 vReflectionPosition;uniform vec3 vReflectionSize;
#endif
#endif
#ifdef PREPASS
#ifdef SS_SCATTERING
uniform float scatteringDiffusionProfile;
#endif
#endif
#if DEBUGMODE>0
uniform vec2 vDebugMode;
#endif
#ifdef DETAIL
uniform vec4 vDetailInfos;
#endif
#include<decalFragmentDeclaration>
#ifdef USESPHERICALFROMREFLECTIONMAP
#ifdef SPHERICAL_HARMONICS
uniform vec3 vSphericalL00;uniform vec3 vSphericalL1_1;uniform vec3 vSphericalL10;uniform vec3 vSphericalL11;uniform vec3 vSphericalL2_2;uniform vec3 vSphericalL2_1;uniform vec3 vSphericalL20;uniform vec3 vSphericalL21;uniform vec3 vSphericalL22;
#else
uniform vec3 vSphericalX;uniform vec3 vSphericalY;uniform vec3 vSphericalZ;uniform vec3 vSphericalXX_ZZ;uniform vec3 vSphericalYY_ZZ;uniform vec3 vSphericalZZ;uniform vec3 vSphericalXY;uniform vec3 vSphericalYZ;uniform vec3 vSphericalZX;
#endif
#endif
#define ADDITIONAL_FRAGMENT_DECLARATION
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const openpbrFragmentDeclaration = {
    name,
    shader
}; //# sourceMappingURL=openpbrFragmentDeclaration.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/openpbrFragmentSamplersDeclaration.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "openpbrFragmentSamplersDeclaration",
    ()=>openpbrFragmentSamplersDeclaration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$samplerFragmentDeclaration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/samplerFragmentDeclaration.js [app-ssr] (ecmascript)");
;
;
const name = "openpbrFragmentSamplersDeclaration";
const shader = `#include<samplerFragmentDeclaration>(_DEFINENAME_,BASE_COLOR,_VARYINGNAME_,BaseColor,_SAMPLERNAME_,baseColor)
#include<samplerFragmentDeclaration>(_DEFINENAME_,BASE_WEIGHT,_VARYINGNAME_,BaseWeight,_SAMPLERNAME_,baseWeight)
#include<samplerFragmentDeclaration>(_DEFINENAME_,BASE_DIFFUSE_ROUGHNESS,_VARYINGNAME_,BaseDiffuseRoughness,_SAMPLERNAME_,baseDiffuseRoughness)
#include<samplerFragmentDeclaration>(_DEFINENAME_,BASE_METALNESS,_VARYINGNAME_,BaseMetalness,_SAMPLERNAME_,baseMetalness)
#include<samplerFragmentDeclaration>(_DEFINENAME_,SPECULAR_WEIGHT,_VARYINGNAME_,SpecularWeight,_SAMPLERNAME_,specularWeight)
#include<samplerFragmentDeclaration>(_DEFINENAME_,SPECULAR_COLOR,_VARYINGNAME_,SpecularColor,_SAMPLERNAME_,specularColor)
#include<samplerFragmentDeclaration>(_DEFINENAME_,SPECULAR_ROUGHNESS,_VARYINGNAME_,SpecularRoughness,_SAMPLERNAME_,specularRoughness)
#include<samplerFragmentDeclaration>(_DEFINENAME_,SPECULAR_ROUGHNESS_ANISOTROPY,_VARYINGNAME_,SpecularRoughnessAnisotropy,_SAMPLERNAME_,specularRoughnessAnisotropy)
#include<samplerFragmentDeclaration>(_DEFINENAME_,COAT_WEIGHT,_VARYINGNAME_,CoatWeight,_SAMPLERNAME_,coatWeight)
#include<samplerFragmentDeclaration>(_DEFINENAME_,COAT_COLOR,_VARYINGNAME_,CoatColor,_SAMPLERNAME_,coatColor)
#include<samplerFragmentDeclaration>(_DEFINENAME_,COAT_ROUGHNESS,_VARYINGNAME_,CoatRoughness,_SAMPLERNAME_,coatRoughness)
#include<samplerFragmentDeclaration>(_DEFINENAME_,COAT_ROUGHNESS_ANISOTROPY,_VARYINGNAME_,CoatRoughnessAnisotropy,_SAMPLERNAME_,coatRoughnessAnisotropy)
#include<samplerFragmentDeclaration>(_DEFINENAME_,COAT_DARKENING,_VARYINGNAME_,CoatDarkening,_SAMPLERNAME_,coatDarkening)
#include<samplerFragmentDeclaration>(_DEFINENAME_,FUZZ_WEIGHT,_VARYINGNAME_,FuzzWeight,_SAMPLERNAME_,fuzzWeight)
#include<samplerFragmentDeclaration>(_DEFINENAME_,FUZZ_COLOR,_VARYINGNAME_,FuzzColor,_SAMPLERNAME_,fuzzColor)
#include<samplerFragmentDeclaration>(_DEFINENAME_,FUZZ_ROUGHNESS,_VARYINGNAME_,FuzzRoughness,_SAMPLERNAME_,fuzzRoughness)
#include<samplerFragmentDeclaration>(_DEFINENAME_,GEOMETRY_OPACITY,_VARYINGNAME_,GeometryOpacity,_SAMPLERNAME_,geometryOpacity)
#include<samplerFragmentDeclaration>(_DEFINENAME_,GEOMETRY_TANGENT,_VARYINGNAME_,GeometryTangent,_SAMPLERNAME_,geometryTangent)
#include<samplerFragmentDeclaration>(_DEFINENAME_,GEOMETRY_COAT_TANGENT,_VARYINGNAME_,GeometryCoatTangent,_SAMPLERNAME_,geometryCoatTangent)
#include<samplerFragmentDeclaration>(_DEFINENAME_,EMISSION_COLOR,_VARYINGNAME_,EmissionColor,_SAMPLERNAME_,emissionColor)
#include<samplerFragmentDeclaration>(_DEFINENAME_,THIN_FILM_WEIGHT,_VARYINGNAME_,ThinFilmWeight,_SAMPLERNAME_,thinFilmWeight)
#include<samplerFragmentDeclaration>(_DEFINENAME_,THIN_FILM_THICKNESS,_VARYINGNAME_,ThinFilmThickness,_SAMPLERNAME_,thinFilmThickness)
#include<samplerFragmentDeclaration>(_DEFINENAME_,AMBIENT_OCCLUSION,_VARYINGNAME_,AmbientOcclusion,_SAMPLERNAME_,ambientOcclusion)
#include<samplerFragmentDeclaration>(_DEFINENAME_,DECAL,_VARYINGNAME_,Decal,_SAMPLERNAME_,decal)
#ifdef REFLECTION
#ifdef REFLECTIONMAP_3D
#define sampleReflection(s,c) textureCube(s,c)
uniform samplerCube reflectionSampler;
#ifdef LODBASEDMICROSFURACE
#define sampleReflectionLod(s,c,l) textureCubeLodEXT(s,c,l)
#else
uniform samplerCube reflectionSamplerLow;uniform samplerCube reflectionSamplerHigh;
#endif
#ifdef USEIRRADIANCEMAP
uniform samplerCube irradianceSampler;
#endif
#else
#define sampleReflection(s,c) texture2D(s,c)
uniform sampler2D reflectionSampler;
#ifdef LODBASEDMICROSFURACE
#define sampleReflectionLod(s,c,l) texture2DLodEXT(s,c,l)
#else
uniform sampler2D reflectionSamplerLow;uniform sampler2D reflectionSamplerHigh;
#endif
#ifdef USEIRRADIANCEMAP
uniform sampler2D irradianceSampler;
#endif
#endif
#ifdef REFLECTIONMAP_SKYBOX
varying vec3 vPositionUVW;
#else
#if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)
varying vec3 vDirectionW;
#endif
#endif
#endif
#ifdef ENVIRONMENTBRDF
uniform sampler2D environmentBrdfSampler;
#endif
#ifdef FUZZENVIRONMENTBRDF
uniform sampler2D environmentFuzzBrdfSampler;
#endif
#if defined(ANISOTROPIC) || defined(FUZZ)
uniform sampler2D blueNoiseSampler;
#endif
#ifdef IBL_CDF_FILTERING
uniform sampler2D icdfSampler;
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const openpbrFragmentSamplersDeclaration = {
    name,
    shader
}; //# sourceMappingURL=openpbrFragmentSamplersDeclaration.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/openpbrNormalMapFragmentMainFunctions.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "openpbrNormalMapFragmentMainFunctions",
    ()=>openpbrNormalMapFragmentMainFunctions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "openpbrNormalMapFragmentMainFunctions";
const shader = `#if defined(GEOMETRY_NORMAL) || defined(GEOMETRY_COAT_NORMAL) || defined(ANISOTROPIC) || defined(FUZZ) || defined(DETAIL)
#if defined(TANGENT) && defined(NORMAL) 
varying mat3 vTBN;
#endif
#ifdef OBJECTSPACE_NORMALMAP
uniform mat4 normalMatrix;
#if defined(WEBGL2) || defined(WEBGPU)
mat4 toNormalMatrix(mat4 wMatrix)
{mat4 ret=inverse(wMatrix);ret=transpose(ret);ret[0][3]=0.;ret[1][3]=0.;ret[2][3]=0.;ret[3]=vec4(0.,0.,0.,1.);return ret;}
#else
mat4 toNormalMatrix(mat4 m)
{float
a00=m[0][0],a01=m[0][1],a02=m[0][2],a03=m[0][3],
a10=m[1][0],a11=m[1][1],a12=m[1][2],a13=m[1][3],
a20=m[2][0],a21=m[2][1],a22=m[2][2],a23=m[2][3],
a30=m[3][0],a31=m[3][1],a32=m[3][2],a33=m[3][3],
b00=a00*a11-a01*a10,
b01=a00*a12-a02*a10,
b02=a00*a13-a03*a10,
b03=a01*a12-a02*a11,
b04=a01*a13-a03*a11,
b05=a02*a13-a03*a12,
b06=a20*a31-a21*a30,
b07=a20*a32-a22*a30,
b08=a20*a33-a23*a30,
b09=a21*a32-a22*a31,
b10=a21*a33-a23*a31,
b11=a22*a33-a23*a32,
det=b00*b11-b01*b10+b02*b09+b03*b08-b04*b07+b05*b06;mat4 mi=mat4(
a11*b11-a12*b10+a13*b09,
a02*b10-a01*b11-a03*b09,
a31*b05-a32*b04+a33*b03,
a22*b04-a21*b05-a23*b03,
a12*b08-a10*b11-a13*b07,
a00*b11-a02*b08+a03*b07,
a32*b02-a30*b05-a33*b01,
a20*b05-a22*b02+a23*b01,
a10*b10-a11*b08+a13*b06,
a01*b08-a00*b10-a03*b06,
a30*b04-a31*b02+a33*b00,
a21*b02-a20*b04-a23*b00,
a11*b07-a10*b09-a12*b06,
a00*b09-a01*b07+a02*b06,
a31*b01-a30*b03-a32*b00,
a20*b03-a21*b01+a22*b00)/det;return mat4(mi[0][0],mi[1][0],mi[2][0],mi[3][0],
mi[0][1],mi[1][1],mi[2][1],mi[3][1],
mi[0][2],mi[1][2],mi[2][2],mi[3][2],
mi[0][3],mi[1][3],mi[2][3],mi[3][3]);}
#endif
#endif
vec3 perturbNormalBase(mat3 cotangentFrame,vec3 normal,float scale)
{
#ifdef NORMALXYSCALE
normal=normalize(normal*vec3(scale,scale,1.0));
#endif
return normalize(cotangentFrame*normal);}
vec3 perturbNormal(mat3 cotangentFrame,vec3 textureSample,float scale)
{return perturbNormalBase(cotangentFrame,textureSample*2.0-1.0,scale);}
mat3 cotangent_frame(vec3 normal,vec3 p,vec2 uv,vec2 tangentSpaceParams)
{vec3 dp1=dFdx(p);vec3 dp2=dFdy(p);vec2 duv1=dFdx(uv);vec2 duv2=dFdy(uv);vec3 dp2perp=cross(dp2,normal);vec3 dp1perp=cross(normal,dp1);vec3 tangent=dp2perp*duv1.x+dp1perp*duv2.x;vec3 bitangent=dp2perp*duv1.y+dp1perp*duv2.y;tangent*=tangentSpaceParams.x;bitangent*=tangentSpaceParams.y;float det=max(dot(tangent,tangent),dot(bitangent,bitangent));float invmax=det==0.0 ? 0.0 : inversesqrt(det);return mat3(tangent*invmax,bitangent*invmax,normal);}
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const openpbrNormalMapFragmentMainFunctions = {
    name,
    shader
}; //# sourceMappingURL=openpbrNormalMapFragmentMainFunctions.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/openpbrNormalMapFragmentFunctions.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "openpbrNormalMapFragmentFunctions",
    ()=>openpbrNormalMapFragmentFunctions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$samplerFragmentDeclaration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/samplerFragmentDeclaration.js [app-ssr] (ecmascript)");
;
;
const name = "openpbrNormalMapFragmentFunctions";
const shader = `#if defined(GEOMETRY_NORMAL)
#include<samplerFragmentDeclaration>(_DEFINENAME_,GEOMETRY_NORMAL,_VARYINGNAME_,GeometryNormal,_SAMPLERNAME_,geometryNormal)
#endif
#if defined(GEOMETRY_COAT_NORMAL)
#include<samplerFragmentDeclaration>(_DEFINENAME_,GEOMETRY_COAT_NORMAL,_VARYINGNAME_,GeometryCoatNormal,_SAMPLERNAME_,geometryCoatNormal)
#endif
#if defined(DETAIL)
#include<samplerFragmentDeclaration>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail,_SAMPLERNAME_,detail)
#endif
#if defined(GEOMETRY_NORMAL) && defined(PARALLAX)
const float minSamples=4.;const float maxSamples=15.;const int iMaxSamples=15;vec2 parallaxOcclusion(vec3 vViewDirCoT,vec3 vNormalCoT,vec2 texCoord,float parallaxScale) {float parallaxLimit=length(vViewDirCoT.xy)/vViewDirCoT.z;parallaxLimit*=parallaxScale;vec2 vOffsetDir=normalize(vViewDirCoT.xy);vec2 vMaxOffset=vOffsetDir*parallaxLimit;float numSamples=maxSamples+(dot(vViewDirCoT,vNormalCoT)*(minSamples-maxSamples));float stepSize=1.0/numSamples;float currRayHeight=1.0;vec2 vCurrOffset=vec2(0,0);vec2 vLastOffset=vec2(0,0);float lastSampledHeight=1.0;float currSampledHeight=1.0;bool keepWorking=true;for (int i=0; i<iMaxSamples; i++)
{currSampledHeight=texture2D(geometryNormalSampler,texCoord+vCurrOffset).w;if (!keepWorking)
{}
else if (currSampledHeight>currRayHeight)
{float delta1=currSampledHeight-currRayHeight;float delta2=(currRayHeight+stepSize)-lastSampledHeight;float ratio=delta1/(delta1+delta2);vCurrOffset=(ratio)* vLastOffset+(1.0-ratio)*vCurrOffset;keepWorking=false;}
else
{currRayHeight-=stepSize;vLastOffset=vCurrOffset;
#ifdef PARALLAX_RHS
vCurrOffset-=stepSize*vMaxOffset;
#else
vCurrOffset+=stepSize*vMaxOffset;
#endif
lastSampledHeight=currSampledHeight;}}
return vCurrOffset;}
vec2 parallaxOffset(vec3 viewDir,float heightScale)
{float height=texture2D(geometryNormalSampler,vGeometryNormalUV).w;vec2 texCoordOffset=heightScale*viewDir.xy*height;
#ifdef PARALLAX_RHS
return texCoordOffset;
#else
return -texCoordOffset;
#endif
}
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const openpbrNormalMapFragmentFunctions = {
    name,
    shader
}; //# sourceMappingURL=openpbrNormalMapFragmentFunctions.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/openpbrDielectricReflectance.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "openpbrDielectricReflectance",
    ()=>openpbrDielectricReflectance
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "openpbrDielectricReflectance";
const shader = `struct ReflectanceParams
{float F0;float F90;vec3 coloredF0;vec3 coloredF90;};
#define pbr_inline
ReflectanceParams dielectricReflectance(
in float insideIOR,in float outsideIOR,in vec3 specularColor,in float specularWeight
)
{ReflectanceParams outParams;float dielectricF0=pow((insideIOR-outsideIOR)/(insideIOR+outsideIOR),2.0);float dielectricF0_NoSpec=pow((1.0-outsideIOR)/(1.0+outsideIOR),2.0);float f90Scale=clamp(2.0*abs(insideIOR-outsideIOR),0.0,1.0);float f90Scale_NoSpec=clamp(2.0*abs(1.0-outsideIOR),0.0,1.0);
#if (DIELECTRIC_SPECULAR_MODEL==DIELECTRIC_SPECULAR_MODEL_OPENPBR)
vec3 dielectricColorF90=specularColor.rgb*vec3(f90Scale);vec3 dielectricColorF90_NoSpec=specularColor.rgb*vec3(f90Scale_NoSpec);
#else
vec3 dielectricColorF90=vec3(f90Scale);vec3 dielectricColorF90_NoSpec=vec3(f90Scale_NoSpec);
#endif
#if DIELECTRIC_SPECULAR_MODEL==DIELECTRIC_SPECULAR_MODEL_GLTF
float maxF0=max(specularColor.r,max(specularColor.g,specularColor.b));outParams.F0=mix(dielectricF0_NoSpec,dielectricF0,specularWeight)*maxF0;
#else
outParams.F0=mix(dielectricF0_NoSpec,dielectricF0,specularWeight);
#endif
outParams.F90=mix(f90Scale_NoSpec,f90Scale,specularWeight);outParams.coloredF0=mix(vec3(dielectricF0_NoSpec),vec3(dielectricF0),specularWeight)*specularColor.rgb;outParams.coloredF90=mix(dielectricColorF90_NoSpec,dielectricColorF90,specularWeight);return outParams;}
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const openpbrDielectricReflectance = {
    name,
    shader
}; //# sourceMappingURL=openpbrDielectricReflectance.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/openpbrConductorReflectance.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "openpbrConductorReflectance",
    ()=>openpbrConductorReflectance
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "openpbrConductorReflectance";
const shader = `#define pbr_inline
ReflectanceParams conductorReflectance(in vec3 baseColor,in vec3 specularColor,in float specularWeight)
{ReflectanceParams outParams;
#if (CONDUCTOR_SPECULAR_MODEL==CONDUCTOR_SPECULAR_MODEL_OPENPBR)
outParams.coloredF0=baseColor*specularWeight;outParams.coloredF90=specularColor*specularWeight;
#else
outParams.coloredF0=baseColor;outParams.coloredF90=vec3(1.0);
#endif
outParams.F0=1.0;outParams.F90=1.0;return outParams;}`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const openpbrConductorReflectance = {
    name,
    shader
}; //# sourceMappingURL=openpbrConductorReflectance.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/openpbrBlockAmbientOcclusion.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "openpbrBlockAmbientOcclusion",
    ()=>openpbrBlockAmbientOcclusion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "openpbrBlockAmbientOcclusion";
const shader = `struct ambientOcclusionOutParams
{vec3 ambientOcclusionColor;
#if DEBUGMODE>0 && defined(AMBIENT_OCCLUSION)
vec3 ambientOcclusionColorMap;
#endif
};
#define pbr_inline
ambientOcclusionOutParams ambientOcclusionBlock(
#ifdef AMBIENT_OCCLUSION
in vec3 ambientOcclusionColorMap_,
in vec2 ambientInfos
#endif
)
{ambientOcclusionOutParams outParams;vec3 ambientOcclusionColor=vec3(1.,1.,1.);
#ifdef AMBIENT_OCCLUSION
vec3 ambientOcclusionColorMap=ambientOcclusionColorMap_*ambientInfos.y;
#ifdef AMBIENTINGRAYSCALE
ambientOcclusionColorMap=vec3(ambientOcclusionColorMap.r,ambientOcclusionColorMap.r,ambientOcclusionColorMap.r);
#endif
#if DEBUGMODE>0
outParams.ambientOcclusionColorMap=ambientOcclusionColorMap;
#endif
#endif
outParams.ambientOcclusionColor=ambientOcclusionColor;return outParams;}
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const openpbrBlockAmbientOcclusion = {
    name,
    shader
}; //# sourceMappingURL=openpbrBlockAmbientOcclusion.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/openpbrGeometryInfo.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "openpbrGeometryInfo",
    ()=>openpbrGeometryInfo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "openpbrGeometryInfo";
const shader = `struct geometryInfoOutParams
{float NdotV;float NdotVUnclamped;vec3 environmentBrdf;float horizonOcclusion;};struct geometryInfoAnisoOutParams
{float NdotV;float NdotVUnclamped;vec3 environmentBrdf;float horizonOcclusion;float anisotropy;vec3 anisotropicTangent;vec3 anisotropicBitangent;mat3 TBN;};
#define pbr_inline
geometryInfoOutParams geometryInfo(
in vec3 normalW,in vec3 viewDirectionW,in float roughness,in vec3 geometricNormalW
)
{geometryInfoOutParams outParams;outParams.NdotVUnclamped=dot(normalW,viewDirectionW);outParams.NdotV=absEps(outParams.NdotVUnclamped);
#if defined(ENVIRONMENTBRDF)
outParams.environmentBrdf=getBRDFLookup(outParams.NdotV,roughness);
#else
outParams.environmentBrdf=vec3(0.0);
#endif
outParams.horizonOcclusion=1.0;
#if defined(ENVIRONMENTBRDF) && !defined(REFLECTIONMAP_SKYBOX)
#ifdef HORIZONOCCLUSION
#if defined(GEOMETRY_NORMAL) || defined(GEOMETRY_COAT_NORMAL)
#ifdef REFLECTIONMAP_3D
outParams.horizonOcclusion=environmentHorizonOcclusion(-viewDirectionW,normalW,geometricNormalW);
#endif
#endif
#endif
#endif
return outParams;}
#define pbr_inline
geometryInfoAnisoOutParams geometryInfoAniso(
in vec3 normalW,in vec3 viewDirectionW,in float roughness,in vec3 geometricNormalW
,in vec3 vAnisotropy,in mat3 TBN
)
{geometryInfoOutParams geoInfo=geometryInfo(normalW,viewDirectionW,roughness,geometricNormalW);geometryInfoAnisoOutParams outParams;outParams.NdotV=geoInfo.NdotV;outParams.NdotVUnclamped=geoInfo.NdotVUnclamped;outParams.environmentBrdf=geoInfo.environmentBrdf;outParams.horizonOcclusion=geoInfo.horizonOcclusion;outParams.anisotropy=vAnisotropy.b;vec3 anisotropyDirection=vec3(vAnisotropy.xy,0.);mat3 anisoTBN=mat3(normalize(TBN[0]),normalize(TBN[1]),normalize(TBN[2]));outParams.anisotropicTangent=normalize(anisoTBN*anisotropyDirection);outParams.anisotropicBitangent=normalize(cross(anisoTBN[2],outParams.anisotropicTangent));outParams.TBN=TBN;return outParams;}`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const openpbrGeometryInfo = {
    name,
    shader
}; //# sourceMappingURL=openpbrGeometryInfo.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/openpbrIblFunctions.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "openpbrIblFunctions",
    ()=>openpbrIblFunctions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "openpbrIblFunctions";
const shader = `#ifdef REFLECTION
vec3 sampleIrradiance(
in vec3 surfaceNormal
#if defined(NORMAL) && defined(USESPHERICALINVERTEX)
,in vec3 vEnvironmentIrradianceSH
#endif
#if (defined(USESPHERICALFROMREFLECTIONMAP) && (!defined(NORMAL) || !defined(USESPHERICALINVERTEX))) || (defined(USEIRRADIANCEMAP) && defined(REFLECTIONMAP_3D))
,in mat4 iblMatrix
#endif
#ifdef USEIRRADIANCEMAP
#ifdef REFLECTIONMAP_3D
,in samplerCube irradianceSampler
#else
,in sampler2D irradianceSampler
#endif
#ifdef USE_IRRADIANCE_DOMINANT_DIRECTION
,in vec3 reflectionDominantDirection
#endif
#endif
#ifdef REALTIME_FILTERING
,in vec2 vReflectionFilteringInfo
#ifdef IBL_CDF_FILTERING
,in sampler2D icdfSampler
#endif
#endif
,in vec2 vReflectionInfos
,in vec3 viewDirectionW
,in float diffuseRoughness
,in vec3 surfaceAlbedo
) {vec3 environmentIrradiance=vec3(0.,0.,0.);
#if (defined(USESPHERICALFROMREFLECTIONMAP) && (!defined(NORMAL) || !defined(USESPHERICALINVERTEX))) || (defined(USEIRRADIANCEMAP) && defined(REFLECTIONMAP_3D))
vec3 irradianceVector=(iblMatrix*vec4(surfaceNormal,0)).xyz;vec3 irradianceView=(iblMatrix*vec4(viewDirectionW,0)).xyz;
#if !defined(USE_IRRADIANCE_DOMINANT_DIRECTION) && !defined(REALTIME_FILTERING)
#if BASE_DIFFUSE_MODEL != BRDF_DIFFUSE_MODEL_LAMBERT && BASE_DIFFUSE_MODEL != BRDF_DIFFUSE_MODEL_LEGACY
{float NdotV=max(dot(surfaceNormal,viewDirectionW),0.0);irradianceVector=mix(irradianceVector,irradianceView,(0.5*(1.0-NdotV))*diffuseRoughness);}
#endif
#endif
#ifdef REFLECTIONMAP_OPPOSITEZ
irradianceVector.z*=-1.0;
#endif
#ifdef INVERTCUBICMAP
irradianceVector.y*=-1.0;
#endif
#endif
#ifdef USESPHERICALFROMREFLECTIONMAP
#if defined(NORMAL) && defined(USESPHERICALINVERTEX)
environmentIrradiance=vEnvironmentIrradianceSH;
#else
#if defined(REALTIME_FILTERING)
environmentIrradiance=irradiance(reflectionSampler,irradianceVector,vReflectionFilteringInfo,diffuseRoughness,surfaceAlbedo,irradianceView
#ifdef IBL_CDF_FILTERING
,icdfSampler
#endif
);
#else
environmentIrradiance=computeEnvironmentIrradiance(irradianceVector);
#endif
#endif
#elif defined(USEIRRADIANCEMAP)
#ifdef REFLECTIONMAP_3D
vec4 environmentIrradianceFromTexture=sampleReflection(irradianceSampler,irradianceVector);
#else
vec4 environmentIrradianceFromTexture=sampleReflection(irradianceSampler,reflectionCoords);
#endif
environmentIrradiance=environmentIrradianceFromTexture.rgb;
#ifdef RGBDREFLECTION
environmentIrradiance.rgb=fromRGBD(environmentIrradianceFromTexture);
#endif
#ifdef GAMMAREFLECTION
environmentIrradiance.rgb=toLinearSpace(environmentIrradiance.rgb);
#endif
#ifdef USE_IRRADIANCE_DOMINANT_DIRECTION
vec3 Ls=normalize(reflectionDominantDirection);float NoL=dot(irradianceVector,Ls);float NoV=dot(irradianceVector,irradianceView);vec3 diffuseRoughnessTerm=vec3(1.0);
#if BASE_DIFFUSE_MODEL==BRDF_DIFFUSE_MODEL_EON
float LoV=dot (Ls,irradianceView);float mag=length(reflectionDominantDirection)*2.0;vec3 clampedAlbedo=clamp(surfaceAlbedo,vec3(0.1),vec3(1.0));diffuseRoughnessTerm=diffuseBRDF_EON(clampedAlbedo,diffuseRoughness,NoL,NoV,LoV)*PI;diffuseRoughnessTerm=diffuseRoughnessTerm/clampedAlbedo;diffuseRoughnessTerm=mix(vec3(1.0),diffuseRoughnessTerm,sqrt(clamp(mag*NoV,0.0,1.0)));
#elif BASE_DIFFUSE_MODEL==BRDF_DIFFUSE_MODEL_BURLEY
vec3 H=(irradianceView+Ls)*0.5;float VoH=dot(irradianceView,H);diffuseRoughnessTerm=vec3(diffuseBRDF_Burley(NoL,NoV,VoH,diffuseRoughness)*PI);
#endif
environmentIrradiance=environmentIrradiance.rgb*diffuseRoughnessTerm;
#endif
#endif
environmentIrradiance*=vReflectionInfos.x;return environmentIrradiance;}
#define pbr_inline
#ifdef REFLECTIONMAP_3D
vec3 createReflectionCoords(
#else
vec2 createReflectionCoords(
#endif
in vec3 vPositionW
,in vec3 normalW
)
{vec3 reflectionVector=computeReflectionCoords(vec4(vPositionW,1.0),normalW);
#ifdef REFLECTIONMAP_OPPOSITEZ
reflectionVector.z*=-1.0;
#endif
#ifdef REFLECTIONMAP_3D
vec3 reflectionCoords=reflectionVector;
#else
vec2 reflectionCoords=reflectionVector.xy;
#ifdef REFLECTIONMAP_PROJECTION
reflectionCoords/=reflectionVector.z;
#endif
reflectionCoords.y=1.0-reflectionCoords.y;
#endif
return reflectionCoords;}
#define pbr_inline
#define inline
vec3 sampleRadiance(
in float alphaG
,in vec3 vReflectionMicrosurfaceInfos
,in vec2 vReflectionInfos
,in geometryInfoOutParams geoInfo
#ifdef REFLECTIONMAP_3D
,in samplerCube reflectionSampler
,const vec3 reflectionCoords
#else
,in sampler2D reflectionSampler
,const vec2 reflectionCoords
#endif
#ifdef REALTIME_FILTERING
,in vec2 vReflectionFilteringInfo
#endif
)
{vec4 environmentRadiance=vec4(0.,0.,0.,0.);
#if defined(LODINREFLECTIONALPHA) && !defined(REFLECTIONMAP_SKYBOX)
float reflectionLOD=getLodFromAlphaG(vReflectionMicrosurfaceInfos.x,alphaG,geoInfo.NdotVUnclamped);
#elif defined(LINEARSPECULARREFLECTION)
float reflectionLOD=getLinearLodFromRoughness(vReflectionMicrosurfaceInfos.x,roughness);
#else
float reflectionLOD=getLodFromAlphaG(vReflectionMicrosurfaceInfos.x,alphaG);
#endif
reflectionLOD=reflectionLOD*vReflectionMicrosurfaceInfos.y+vReflectionMicrosurfaceInfos.z;
#ifdef REALTIME_FILTERING
environmentRadiance=vec4(radiance(alphaG,reflectionSampler,reflectionCoords,vReflectionFilteringInfo),1.0);
#else
environmentRadiance=sampleReflectionLod(reflectionSampler,reflectionCoords,reflectionLOD);
#endif
#ifdef RGBDREFLECTION
environmentRadiance.rgb=fromRGBD(environmentRadiance);
#endif
#ifdef GAMMAREFLECTION
environmentRadiance.rgb=toLinearSpace(environmentRadiance.rgb);
#endif
environmentRadiance.rgb*=vec3(vReflectionInfos.x);return environmentRadiance.rgb;}
#if defined(ANISOTROPIC)
#define pbr_inline
#define inline
vec3 sampleRadianceAnisotropic(
in float alphaG
,in vec3 vReflectionMicrosurfaceInfos
,in vec2 vReflectionInfos
,in geometryInfoAnisoOutParams geoInfo
,const vec3 normalW
,const vec3 viewDirectionW
,const vec3 positionW
,const vec3 noise
#ifdef REFLECTIONMAP_3D
,in samplerCube reflectionSampler
#else
,in sampler2D reflectionSampler
#endif
#ifdef REALTIME_FILTERING
,in vec2 vReflectionFilteringInfo
#endif
)
{vec4 environmentRadiance=vec4(0.,0.,0.,0.);float alphaT=alphaG*sqrt(2.0/(1.0+(1.0-geoInfo.anisotropy)*(1.0-geoInfo.anisotropy)));float alphaB=(1.0-geoInfo.anisotropy)*alphaT;alphaG=alphaB;
#if defined(LODINREFLECTIONALPHA) && !defined(REFLECTIONMAP_SKYBOX)
float reflectionLOD=getLodFromAlphaG(vReflectionMicrosurfaceInfos.x,alphaG,geoInfo.NdotVUnclamped);
#elif defined(LINEARSPECULARREFLECTION)
float reflectionLOD=getLinearLodFromRoughness(vReflectionMicrosurfaceInfos.x,roughness);
#else
float reflectionLOD=getLodFromAlphaG(vReflectionMicrosurfaceInfos.x,alphaG);
#endif
reflectionLOD=reflectionLOD*vReflectionMicrosurfaceInfos.y+vReflectionMicrosurfaceInfos.z;
#ifdef REALTIME_FILTERING
vec3 view=(reflectionMatrix*vec4(viewDirectionW,0.0)).xyz;vec3 tangent=(reflectionMatrix*vec4(geoInfo.anisotropicTangent,0.0)).xyz;vec3 bitangent=(reflectionMatrix*vec4(geoInfo.anisotropicBitangent,0.0)).xyz;vec3 normal=(reflectionMatrix*vec4(normalW,0.0)).xyz;
#ifdef REFLECTIONMAP_OPPOSITEZ
view.z*=-1.0;tangent.z*=-1.0;bitangent.z*=-1.0;normal.z*=-1.0;
#endif
environmentRadiance =
vec4(radianceAnisotropic(alphaT,alphaB,reflectionSampler,
view,tangent,
bitangent,normal,
vReflectionFilteringInfo,noise.xy),
1.0);
#else
const int samples=16;vec4 radianceSample=vec4(0.0);vec3 reflectionCoords=vec3(0.0);float sample_weight=0.0;float total_weight=0.0;float step=1.0/float(max(samples-1,1));for (int i=0; i<samples; ++i) {float t=mix(-1.0,1.0,float(i)*step);t+=step*2.0*noise.x;sample_weight=max(1.0-abs(t),0.001);sample_weight*=sample_weight;t*=min(4.0*alphaT*geoInfo.anisotropy,1.0);vec3 bentNormal;if (t<0.0) {float blend=t+1.0;bentNormal=normalize(mix(-geoInfo.anisotropicTangent,normalW,blend));} else if (t>0.0) {float blend=t;bentNormal=normalize(mix(normalW,geoInfo.anisotropicTangent,blend));} else {bentNormal=normalW;}
reflectionCoords=createReflectionCoords(positionW,bentNormal);radianceSample=sampleReflectionLod(reflectionSampler,reflectionCoords,reflectionLOD);
#ifdef RGBDREFLECTION
environmentRadiance.rgb+=sample_weight*fromRGBD(radianceSample);
#elif defined(GAMMAREFLECTION)
environmentRadiance.rgb+=sample_weight*toLinearSpace(radianceSample.rgb);
#else
environmentRadiance.rgb+=sample_weight*radianceSample.rgb;
#endif
total_weight+=sample_weight;}
environmentRadiance=vec4(environmentRadiance.xyz/float(total_weight),1.0);
#endif
environmentRadiance.rgb*=vec3(vReflectionInfos.x);return environmentRadiance.rgb;}
#endif
#define pbr_inline
vec3 conductorIblFresnel(in ReflectanceParams reflectance,in float NdotV,in float roughness,in vec3 environmentBrdf)
{
#if (CONDUCTOR_SPECULAR_MODEL==CONDUCTOR_SPECULAR_MODEL_OPENPBR)
vec3 albedoF0=mix(reflectance.coloredF0,pow(reflectance.coloredF0,vec3(1.4)),roughness);return getF82Specular(NdotV,albedoF0,reflectance.coloredF90,roughness);
#else
return getReflectanceFromBRDFLookup(reflectance.coloredF0,reflectance.coloredF90,environmentBrdf);
#endif
}
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const openpbrIblFunctions = {
    name,
    shader
}; //# sourceMappingURL=openpbrIblFunctions.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/openpbrNormalMapFragment.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "openpbrNormalMapFragment",
    ()=>openpbrNormalMapFragment
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "openpbrNormalMapFragment";
const shader = `vec2 uvOffset=vec2(0.0,0.0);
#if defined(GEOMETRY_NORMAL) || defined(GEOMETRY_COAT_NORMAL) || defined(PARALLAX) || defined(DETAIL)
#ifdef NORMALXYSCALE
float normalScale=1.0;
#elif defined(GEOMETRY_NORMAL)
float normalScale=vGeometryNormalInfos.y;
#else
float normalScale=1.0;
#endif
#if defined(TANGENT) && defined(NORMAL)
mat3 TBN=vTBN;
#elif defined(GEOMETRY_NORMAL)
vec2 TBNUV=gl_FrontFacing ? vGeometryNormalUV : -vGeometryNormalUV;mat3 TBN=cotangent_frame(normalW*normalScale,vPositionW,TBNUV,vTangentSpaceParams);
#else
vec2 TBNUV=gl_FrontFacing ? vDetailUV : -vDetailUV;mat3 TBN=cotangent_frame(normalW*normalScale,vPositionW,TBNUV,vec2(1.,1.));
#endif
#elif defined(ANISOTROPIC) || defined(FUZZ)
#if defined(TANGENT) && defined(NORMAL)
mat3 TBN=vTBN;
#else
vec2 TBNUV=gl_FrontFacing ? vMainUV1 : -vMainUV1;mat3 TBN=cotangent_frame(normalW,vPositionW,TBNUV,vec2(1.,1.));
#endif
#endif
#ifdef PARALLAX
mat3 invTBN=transposeMat3(TBN);
#ifdef PARALLAXOCCLUSION
#else
#endif
#endif
#ifdef DETAIL
vec4 detailColor=texture2D(detailSampler,vDetailUV+uvOffset);vec2 detailNormalRG=detailColor.wy*2.0-1.0;float detailNormalB=sqrt(1.-saturate(dot(detailNormalRG,detailNormalRG)));vec3 detailNormal=vec3(detailNormalRG,detailNormalB);
#endif
#ifdef GEOMETRY_COAT_NORMAL
coatNormalW=perturbNormal(TBN,texture2D(geometryCoatNormalSampler,vGeometryCoatNormalUV+uvOffset).xyz,vGeometryCoatNormalInfos.y);
#endif
#ifdef GEOMETRY_NORMAL
#ifdef OBJECTSPACE_NORMALMAP
#define CUSTOM_FRAGMENT_BUMP_FRAGMENT
normalW=normalize(texture2D(geometryNormalSampler,vGeometryNormalUV).xyz *2.0-1.0);normalW=normalize(mat3(normalMatrix)*normalW);
#elif !defined(DETAIL)
normalW=perturbNormal(TBN,texture2D(geometryNormalSampler,vGeometryNormalUV+uvOffset).xyz,vGeometryNormalInfos.y);
#else
vec3 sampledNormal=texture2D(geometryNormalSampler,vGeometryNormalUV+uvOffset).xyz*2.0-1.0;
#if DETAIL_NORMALBLENDMETHOD==0 
detailNormal.xy*=vDetailInfos.z;vec3 blendedNormal=normalize(vec3(sampledNormal.xy+detailNormal.xy,sampledNormal.z*detailNormal.z));
#elif DETAIL_NORMALBLENDMETHOD==1 
detailNormal.xy*=vDetailInfos.z;sampledNormal+=vec3(0.0,0.0,1.0);detailNormal*=vec3(-1.0,-1.0,1.0);vec3 blendedNormal=sampledNormal*dot(sampledNormal,detailNormal)/sampledNormal.z-detailNormal;
#endif
normalW=perturbNormalBase(TBN,blendedNormal,vGeometryNormalInfos.y);
#endif
#elif defined(DETAIL)
detailNormal.xy*=vDetailInfos.z;normalW=perturbNormalBase(TBN,detailNormal,vDetailInfos.z);
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const openpbrNormalMapFragment = {
    name,
    shader
}; //# sourceMappingURL=openpbrNormalMapFragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/openpbrBlockNormalFinal.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "openpbrBlockNormalFinal",
    ()=>openpbrBlockNormalFinal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "openpbrBlockNormalFinal";
const shader = `#if defined(FORCENORMALFORWARD) && defined(NORMAL)
vec3 faceNormal=normalize(cross(dFdx(vPositionW),dFdy(vPositionW)))*vEyePosition.w;
#if defined(TWOSIDEDLIGHTING)
faceNormal=gl_FrontFacing ? faceNormal : -faceNormal;
#endif
normalW*=sign(dot(normalW,faceNormal));coatNormalW*=sign(dot(coatNormalW,faceNormal));
#endif
#if defined(TWOSIDEDLIGHTING) && defined(NORMAL)
#if defined(MIRRORED)
normalW=gl_FrontFacing ? -normalW : normalW;coatNormalW=gl_FrontFacing ? -coatNormalW : coatNormalW;
#else
normalW=gl_FrontFacing ? normalW : -normalW;coatNormalW=gl_FrontFacing ? coatNormalW : -coatNormalW;
#endif
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const openpbrBlockNormalFinal = {
    name,
    shader
}; //# sourceMappingURL=openpbrBlockNormalFinal.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/openpbrBaseLayerData.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "openpbrBaseLayerData",
    ()=>openpbrBaseLayerData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "openpbrBaseLayerData";
const shader = `vec3 base_color=vec3(0.8);float base_metalness=0.0;float base_diffuse_roughness=0.0;float specular_weight=1.0;float specular_roughness=0.3;vec3 specular_color=vec3(1.0);float specular_roughness_anisotropy=0.0;float specular_ior=1.5;float alpha=1.0;vec2 geometry_tangent=vec2(1.0,0.0);
#ifdef BASE_WEIGHT
vec4 baseWeightFromTexture=texture2D(baseWeightSampler,vBaseWeightUV+uvOffset);
#endif
#ifdef BASE_COLOR
vec4 baseColorFromTexture=texture2D(baseColorSampler,vBaseColorUV+uvOffset);
#endif
#ifdef BASE_METALNESS
vec4 metallicFromTexture=texture2D(baseMetalnessSampler,vBaseMetalnessUV+uvOffset);
#endif
#if defined(ROUGHNESSSTOREINMETALMAPGREEN) && defined(BASE_METALNESS)
float roughnessFromTexture=metallicFromTexture.g;
#elif defined(SPECULAR_ROUGHNESS)
float roughnessFromTexture=texture2D(specularRoughnessSampler,vSpecularRoughnessUV+uvOffset).r;
#endif
#ifdef GEOMETRY_TANGENT
vec3 geometryTangentFromTexture=texture2D(geometryTangentSampler,vGeometryTangentUV+uvOffset).rgb;
#endif
#ifdef SPECULAR_ROUGHNESS_ANISOTROPY
float anisotropyFromTexture=texture2D(specularRoughnessAnisotropySampler,vSpecularRoughnessAnisotropyUV+uvOffset).r*vSpecularRoughnessAnisotropyInfos.y;
#endif
#ifdef BASE_DIFFUSE_ROUGHNESS
float baseDiffuseRoughnessFromTexture=texture2D(baseDiffuseRoughnessSampler,vBaseDiffuseRoughnessUV+uvOffset).r;
#endif
#ifdef GEOMETRY_OPACITY
vec4 opacityFromTexture=texture2D(geometryOpacitySampler,vGeometryOpacityUV+uvOffset);
#endif
#ifdef DECAL
vec4 decalFromTexture=texture2D(decalSampler,vDecalUV+uvOffset);
#endif
#ifdef SPECULAR_COLOR
vec4 specularColorFromTexture=texture2D(specularColorSampler,vSpecularColorUV+uvOffset);
#endif
#ifdef SPECULAR_WEIGHT
#ifdef SPECULAR_WEIGHT_IN_ALPHA
float specularWeightFromTexture=texture2D(specularWeightSampler,vSpecularWeightUV+uvOffset).a;
#else
float specularWeightFromTexture=texture2D(specularWeightSampler,vSpecularWeightUV+uvOffset).r;
#endif
#endif
#if defined(ANISOTROPIC) || defined(FUZZ)
vec3 noise=texture2D(blueNoiseSampler,gl_FragCoord.xy/256.0).xyz;
#endif
base_color=vBaseColor.rgb;
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
base_color*=vColor.rgb;
#endif
#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)
alpha*=vColor.a;
#endif
base_color*=vec3(vBaseWeight);alpha=vBaseColor.a;base_metalness=vReflectanceInfo.x;base_diffuse_roughness=vBaseDiffuseRoughness;specular_roughness=vReflectanceInfo.y;specular_color=vSpecularColor.rgb;specular_weight=vReflectanceInfo.a;specular_ior=vReflectanceInfo.z;specular_roughness_anisotropy=vSpecularAnisotropy.b;geometry_tangent=vSpecularAnisotropy.rg;
#ifdef BASE_COLOR
#ifdef BASE_COLOR_GAMMA
base_color*=toLinearSpace(baseColorFromTexture.rgb);
#else
base_color*=baseColorFromTexture.rgb;
#endif
base_color*=vBaseColorInfos.y;
#endif
#ifdef BASE_WEIGHT
base_color*=baseWeightFromTexture.r;
#endif
#if defined(BASE_COLOR) && defined(ALPHA_FROM_BASE_COLOR_TEXTURE)
alpha*=baseColorFromTexture.a;
#elif defined(GEOMETRY_OPACITY)
alpha*=opacityFromTexture.r;alpha*=vGeometryOpacityInfos.y;
#endif
#ifdef ALPHATEST
#if DEBUGMODE != 88
if (alpha<ALPHATESTVALUE)
discard;
#endif
#ifndef ALPHABLEND
alpha=1.0;
#endif
#endif
#ifdef BASE_METALNESS
#ifdef METALLNESSSTOREINMETALMAPBLUE
base_metalness*=metallicFromTexture.b;
#else
base_metalness*=metallicFromTexture.r;
#endif
#endif
#ifdef BASE_DIFFUSE_ROUGHNESS
base_diffuse_roughness*=baseDiffuseRoughnessFromTexture*vBaseDiffuseRoughnessInfos.y;
#endif
#ifdef SPECULAR_COLOR
#ifdef SPECULAR_COLOR_GAMMA
specular_color*=toLinearSpace(specularColorFromTexture.rgb);
#else
specular_color*=specularColorFromTexture.rgb;
#endif
#endif
#ifdef SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE
specular_weight*=specularColorFromTexture.a;
#elif defined(SPECULAR_WEIGHT)
specular_weight*=specularWeightFromTexture;
#endif
#if defined(SPECULAR_ROUGHNESS) || (defined(ROUGHNESSSTOREINMETALMAPGREEN) && defined(BASE_METALNESS))
specular_roughness*=roughnessFromTexture;
#endif
#ifdef GEOMETRY_TANGENT
{vec2 tangentFromTexture=normalize(geometryTangentFromTexture.xy*2.0-1.0);float tangent_angle_texture=atan(tangentFromTexture.y,tangentFromTexture.x);float tangent_angle_uniform=atan(geometry_tangent.y,geometry_tangent.x);float tangent_angle=tangent_angle_texture+tangent_angle_uniform;geometry_tangent=vec2(cos(tangent_angle),sin(tangent_angle));}
#endif
#if defined(GEOMETRY_TANGENT) && \
defined(SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE)
specular_roughness_anisotropy*=geometryTangentFromTexture.b;
#elif defined(SPECULAR_ROUGHNESS_ANISOTROPY)
specular_roughness_anisotropy*=anisotropyFromTexture;
#endif
#ifdef DETAIL
float detailRoughness=mix(0.5,detailColor.b,vDetailInfos.w);float loLerp=mix(0.,specular_roughness,detailRoughness*2.);float hiLerp=mix(specular_roughness,1.,(detailRoughness-0.5)*2.);specular_roughness=mix(loLerp,hiLerp,step(detailRoughness,0.5));
#endif
#ifdef USE_GLTF_STYLE_ANISOTROPY
float baseAlpha=specular_roughness*specular_roughness;float roughnessT=mix(baseAlpha,1.0,specular_roughness_anisotropy*specular_roughness_anisotropy);float roughnessB=baseAlpha;specular_roughness_anisotropy=1.0-roughnessB/max(roughnessT,0.00001);specular_roughness=sqrt(roughnessT/sqrt(2.0/(1.0+(1.0-specular_roughness_anisotropy)*(1.0-specular_roughness_anisotropy))));
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const openpbrBaseLayerData = {
    name,
    shader
}; //# sourceMappingURL=openpbrBaseLayerData.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/openpbrCoatLayerData.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "openpbrCoatLayerData",
    ()=>openpbrCoatLayerData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "openpbrCoatLayerData";
const shader = `float coat_weight=0.0;vec3 coat_color=vec3(1.0);float coat_roughness=0.0;float coat_roughness_anisotropy=0.0;float coat_ior=1.6;float coat_darkening=1.0;vec2 geometry_coat_tangent=vec2(1.0,0.0);
#ifdef COAT_WEIGHT
vec4 coatWeightFromTexture=texture2D(coatWeightSampler,vCoatWeightUV+uvOffset);
#endif
#ifdef COAT_COLOR
vec4 coatColorFromTexture=texture2D(coatColorSampler,vCoatColorUV+uvOffset);
#endif
#ifdef COAT_ROUGHNESS
vec4 coatRoughnessFromTexture=texture2D(coatRoughnessSampler,vCoatRoughnessUV+uvOffset);
#endif
#ifdef COAT_ROUGHNESS_ANISOTROPY
float coatRoughnessAnisotropyFromTexture=texture2D(coatRoughnessAnisotropySampler,vCoatRoughnessAnisotropyUV+uvOffset).r;
#endif
#ifdef COAT_DARKENING
vec4 coatDarkeningFromTexture=texture2D(coatDarkeningSampler,vCoatDarkeningUV+uvOffset);
#endif
#ifdef GEOMETRY_COAT_TANGENT
vec3 geometryCoatTangentFromTexture=texture2D(geometryCoatTangentSampler,vGeometryCoatTangentUV+uvOffset).rgb;
#endif
coat_color=vCoatColor.rgb;coat_weight=vCoatWeight;coat_roughness=vCoatRoughness;coat_roughness_anisotropy=vCoatRoughnessAnisotropy;coat_ior=vCoatIor;coat_darkening=vCoatDarkening;geometry_coat_tangent=vGeometryCoatTangent.rg;
#ifdef COAT_WEIGHT
coat_weight*=coatWeightFromTexture.r;
#endif
#ifdef COAT_COLOR
#ifdef COAT_COLOR_GAMMA
coat_color*=toLinearSpace(coatColorFromTexture.rgb);
#else
coat_color*=coatColorFromTexture.rgb;
#endif
coat_color*=vCoatColorInfos.y;
#endif
#ifdef COAT_ROUGHNESS
#ifdef COAT_ROUGHNESS_FROM_GREEN_CHANNEL
coat_roughness*=coatRoughnessFromTexture.g;
#else
coat_roughness*=coatRoughnessFromTexture.r;
#endif
#endif
#if defined(GEOMETRY_COAT_TANGENT) && defined(COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE)
coat_roughness_anisotropy*=geometryCoatTangentFromTexture.b;
#elif defined(COAT_ROUGHNESS_ANISOTROPY)
coat_roughness_anisotropy*=coatRoughnessAnisotropyFromTexture;
#endif
#ifdef COAT_DARKENING
coat_darkening*=coatDarkeningFromTexture.r;
#endif
#ifdef GEOMETRY_COAT_TANGENT
{vec2 tangentFromTexture=normalize(geometryCoatTangentFromTexture.xy*2.0-1.0);float tangent_angle_texture=atan(tangentFromTexture.y,tangentFromTexture.x);float tangent_angle_uniform=atan(geometry_coat_tangent.y,geometry_coat_tangent.x);float tangent_angle=tangent_angle_texture+tangent_angle_uniform;geometry_coat_tangent=vec2(cos(tangent_angle),sin(tangent_angle));}
#endif
#ifdef USE_GLTF_STYLE_ANISOTROPY
float coatAlpha=coat_roughness*coat_roughness;float coatRoughnessT=mix(coatAlpha,1.0,coat_roughness_anisotropy*coat_roughness_anisotropy);float coatRoughnessB=coatAlpha;coat_roughness_anisotropy=1.0-coatRoughnessB/max(coatRoughnessT,0.00001);coat_roughness=sqrt(coatRoughnessT/sqrt(2.0/(1.0+(1.0-coat_roughness_anisotropy)*(1.0-coat_roughness_anisotropy))));
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const openpbrCoatLayerData = {
    name,
    shader
}; //# sourceMappingURL=openpbrCoatLayerData.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/openpbrThinFilmLayerData.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "openpbrThinFilmLayerData",
    ()=>openpbrThinFilmLayerData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "openpbrThinFilmLayerData";
const shader = `#ifdef THIN_FILM
float thin_film_weight=vThinFilmWeight;float thin_film_thickness=vThinFilmThickness.r*1000.0; 
float thin_film_ior=vThinFilmIor;
#ifdef THIN_FILM_WEIGHT
float thinFilmWeightFromTexture=texture2D(thinFilmWeightSampler,vThinFilmWeightUV+uvOffset).r*vThinFilmWeightInfos.y;
#endif
#ifdef THIN_FILM_THICKNESS
float thinFilmThicknessFromTexture=texture2D(thinFilmThicknessSampler,vThinFilmThicknessUV+uvOffset).g*vThinFilmThicknessInfos.y;
#endif
#ifdef THIN_FILM_WEIGHT
thin_film_weight*=thinFilmWeightFromTexture;
#endif
#ifdef THIN_FILM_THICKNESS
thin_film_thickness*=thinFilmThicknessFromTexture;
#endif
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const openpbrThinFilmLayerData = {
    name,
    shader
}; //# sourceMappingURL=openpbrThinFilmLayerData.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/openpbrFuzzLayerData.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "openpbrFuzzLayerData",
    ()=>openpbrFuzzLayerData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "openpbrFuzzLayerData";
const shader = `float fuzz_weight=0.0;vec3 fuzz_color=vec3(1.0);float fuzz_roughness=0.0;
#ifdef FUZZ
#ifdef FUZZ_WEIGHT
vec4 fuzzWeightFromTexture=texture2D(fuzzWeightSampler,vFuzzWeightUV+uvOffset);
#endif
#ifdef FUZZ_COLOR
vec4 fuzzColorFromTexture=texture2D(fuzzColorSampler,vFuzzColorUV+uvOffset);
#endif
#ifdef FUZZ_ROUGHNESS
vec4 fuzzRoughnessFromTexture=texture2D(fuzzRoughnessSampler,vFuzzRoughnessUV+uvOffset);
#endif
fuzz_color=vFuzzColor.rgb;fuzz_weight=vFuzzWeight;fuzz_roughness=vFuzzRoughness;
#ifdef FUZZ_WEIGHT
fuzz_weight*=fuzzWeightFromTexture.r;
#endif
#ifdef FUZZ_COLOR
#ifdef FUZZ_COLOR_GAMMA
fuzz_color*=toLinearSpace(fuzzColorFromTexture.rgb);
#else
fuzz_color*=fuzzColorFromTexture.rgb;
#endif
fuzz_color*=vFuzzColorInfos.y;
#endif
#if defined(FUZZ_ROUGHNESS) && defined(FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA)
fuzz_roughness*=fuzzRoughnessFromTexture.a;
#elif defined(FUZZ_ROUGHNESS)
fuzz_roughness*=fuzzRoughnessFromTexture.r;
#endif
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const openpbrFuzzLayerData = {
    name,
    shader
}; //# sourceMappingURL=openpbrFuzzLayerData.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/openpbrEnvironmentLighting.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "openpbrEnvironmentLighting",
    ()=>openpbrEnvironmentLighting
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "openpbrEnvironmentLighting";
const shader = `#ifdef REFLECTION
#ifdef FUZZ
vec3 environmentFuzzBrdf=getFuzzBRDFLookup(fuzzGeoInfo.NdotV,sqrt(fuzz_roughness));
#endif
vec3 baseDiffuseEnvironmentLight=sampleIrradiance(
normalW
#if defined(NORMAL) && defined(USESPHERICALINVERTEX)
,vEnvironmentIrradiance
#endif
#if (defined(USESPHERICALFROMREFLECTIONMAP) && (!defined(NORMAL) || !defined(USESPHERICALINVERTEX))) || (defined(USEIRRADIANCEMAP) && defined(REFLECTIONMAP_3D))
,reflectionMatrix
#endif
#ifdef USEIRRADIANCEMAP
,irradianceSampler
#ifdef USE_IRRADIANCE_DOMINANT_DIRECTION
,vReflectionDominantDirection
#endif
#endif
#ifdef REALTIME_FILTERING
,vReflectionFilteringInfo
#ifdef IBL_CDF_FILTERING
,icdfSampler
#endif
#endif
,vReflectionInfos
,viewDirectionW
,base_diffuse_roughness
,base_color
);
#ifdef REFLECTIONMAP_3D
vec3 reflectionCoords=vec3(0.,0.,0.);
#else
vec2 reflectionCoords=vec2(0.,0.);
#endif
float specularAlphaG=specular_roughness*specular_roughness;
#ifdef ANISOTROPIC_BASE
vec3 baseSpecularEnvironmentLight=sampleRadianceAnisotropic(specularAlphaG,vReflectionMicrosurfaceInfos.rgb,vReflectionInfos
,baseGeoInfo
,normalW
,viewDirectionW
,vPositionW
,noise
,reflectionSampler
#ifdef REALTIME_FILTERING
,vReflectionFilteringInfo
#endif
);
#else
reflectionCoords=createReflectionCoords(vPositionW,normalW);vec3 baseSpecularEnvironmentLight=sampleRadiance(specularAlphaG,vReflectionMicrosurfaceInfos.rgb,vReflectionInfos
,baseGeoInfo
,reflectionSampler
,reflectionCoords
#ifdef REALTIME_FILTERING
,vReflectionFilteringInfo
#endif
);
#endif
#ifdef ANISOTROPIC_BASE
baseSpecularEnvironmentLight=mix(baseSpecularEnvironmentLight.rgb,baseDiffuseEnvironmentLight,specularAlphaG*specularAlphaG*max(1.0-baseGeoInfo.anisotropy,0.3));
#else
baseSpecularEnvironmentLight=mix(baseSpecularEnvironmentLight.rgb,baseDiffuseEnvironmentLight,specularAlphaG);
#endif
vec3 coatEnvironmentLight=vec3(0.,0.,0.);if (coat_weight>0.0) {
#ifdef REFLECTIONMAP_3D
vec3 reflectionCoords=vec3(0.,0.,0.);
#else
vec2 reflectionCoords=vec2(0.,0.);
#endif
reflectionCoords=createReflectionCoords(vPositionW,coatNormalW);float coatAlphaG=coat_roughness*coat_roughness;
#ifdef ANISOTROPIC_COAT
coatEnvironmentLight=sampleRadianceAnisotropic(coatAlphaG,vReflectionMicrosurfaceInfos.rgb,vReflectionInfos
,coatGeoInfo
,coatNormalW
,viewDirectionW
,vPositionW
,noise
,reflectionSampler
#ifdef REALTIME_FILTERING
,vReflectionFilteringInfo
#endif
);
#else
coatEnvironmentLight=sampleRadiance(coatAlphaG,vReflectionMicrosurfaceInfos.rgb,vReflectionInfos
,coatGeoInfo
,reflectionSampler
,reflectionCoords
#ifdef REALTIME_FILTERING
,vReflectionFilteringInfo
#endif
);
#endif
}
#ifdef FUZZ
float modifiedFuzzRoughness=clamp(fuzz_roughness*(1.0-0.5*environmentFuzzBrdf.y),0.0,1.0);vec3 fuzzEnvironmentLight=vec3(0.0);float totalWeight=0.0;float fuzzIblFresnel=sqrt(environmentFuzzBrdf.z);for (int i=0; i<FUZZ_IBL_SAMPLES; ++i) {float angle=(float(i)+noise.x)*(3.141592*2.0/float(FUZZ_IBL_SAMPLES));vec3 fiberCylinderNormal=normalize(cos(angle)*fuzzTangent+sin(angle)*fuzzBitangent);float fiberBend=min(environmentFuzzBrdf.x*environmentFuzzBrdf.x*modifiedFuzzRoughness,1.0);fiberCylinderNormal=normalize(mix(fiberCylinderNormal,fuzzNormalW,fiberBend));float sampleWeight=max(dot(viewDirectionW,fiberCylinderNormal),0.0);vec3 fuzzReflectionCoords=createReflectionCoords(vPositionW,fiberCylinderNormal);vec3 radianceSample=sampleRadiance(modifiedFuzzRoughness,vReflectionMicrosurfaceInfos.rgb,vReflectionInfos
,fuzzGeoInfo
,reflectionSampler
,fuzzReflectionCoords
#ifdef REALTIME_FILTERING
,vReflectionFilteringInfo
#endif
);fuzzEnvironmentLight+=sampleWeight*mix(radianceSample,baseDiffuseEnvironmentLight,fiberBend);totalWeight+=sampleWeight;}
fuzzEnvironmentLight/=totalWeight;
#endif
float dielectricIblFresnel=getReflectanceFromBRDFLookup(vec3(baseDielectricReflectance.F0),vec3(baseDielectricReflectance.F90),baseGeoInfo.environmentBrdf).r;vec3 dielectricIblColoredFresnel=dielectricIblFresnel*specular_color;
#ifdef THIN_FILM
float thinFilmIorScale=clamp(2.0*abs(thin_film_ior-1.0),0.0,1.0);vec3 thinFilmDielectricFresnel=evalIridescence(thin_film_outside_ior,thin_film_ior,baseGeoInfo.NdotV,thin_film_thickness,baseDielectricReflectance.coloredF0);float thin_film_desaturation_scale=(thin_film_ior-1.0)*sqrt(thin_film_thickness*0.001*baseGeoInfo.NdotV);thinFilmDielectricFresnel=mix(thinFilmDielectricFresnel,vec3(dot(thinFilmDielectricFresnel,vec3(0.3333))),thin_film_desaturation_scale);dielectricIblColoredFresnel=mix(dielectricIblColoredFresnel,thinFilmDielectricFresnel*specular_color,thin_film_weight*thinFilmIorScale);
#endif
vec3 conductorIblFresnel=conductorIblFresnel(baseConductorReflectance,baseGeoInfo.NdotV,specular_roughness,baseGeoInfo.environmentBrdf);
#ifdef THIN_FILM
vec3 thinFilmConductorFresnel=specular_weight*evalIridescence(thin_film_outside_ior,thin_film_ior,baseGeoInfo.NdotV,thin_film_thickness,baseConductorReflectance.coloredF0);thinFilmConductorFresnel=mix(thinFilmConductorFresnel,vec3(dot(thinFilmConductorFresnel,vec3(0.3333))),thin_film_desaturation_scale);conductorIblFresnel=mix(conductorIblFresnel,thinFilmConductorFresnel,thin_film_weight*thinFilmIorScale);
#endif
float coatIblFresnel=0.0;if (coat_weight>0.0) {coatIblFresnel=getReflectanceFromBRDFLookup(vec3(coatReflectance.F0),vec3(coatReflectance.F90),coatGeoInfo.environmentBrdf).r;}
vec3 slab_diffuse_ibl=vec3(0.,0.,0.);vec3 slab_glossy_ibl=vec3(0.,0.,0.);vec3 slab_metal_ibl=vec3(0.,0.,0.);vec3 slab_coat_ibl=vec3(0.,0.,0.);slab_diffuse_ibl=baseDiffuseEnvironmentLight*vLightingIntensity.z;slab_diffuse_ibl*=aoOut.ambientOcclusionColor;slab_glossy_ibl=baseSpecularEnvironmentLight*vLightingIntensity.z;slab_metal_ibl=baseSpecularEnvironmentLight*conductorIblFresnel*vLightingIntensity.z;vec3 coatAbsorption=vec3(1.0);if (coat_weight>0.0) {slab_coat_ibl=coatEnvironmentLight*vLightingIntensity.z;float hemisphere_avg_fresnel=coatReflectance.F0+0.5*(1.0-coatReflectance.F0);float averageReflectance=(coatIblFresnel+hemisphere_avg_fresnel)*0.5;float roughnessFactor=1.0-coat_roughness*0.5;averageReflectance*=roughnessFactor;float darkened_transmission=(1.0-averageReflectance)*(1.0-averageReflectance);darkened_transmission=mix(1.0,darkened_transmission,coat_darkening);float sin2=1.0-coatGeoInfo.NdotV*coatGeoInfo.NdotV;sin2=sin2/(coat_ior*coat_ior);float cos_t=sqrt(1.0-sin2);float coatPathLength=1.0/cos_t;vec3 colored_transmission=pow(coat_color,vec3(coatPathLength));coatAbsorption=mix(vec3(1.0),colored_transmission*darkened_transmission,coat_weight);}
#ifdef FUZZ
vec3 slab_fuzz_ibl=fuzzEnvironmentLight*vLightingIntensity.z;
#endif
vec3 slab_subsurface_ibl=vec3(0.,0.,0.);vec3 slab_translucent_base_ibl=vec3(0.,0.,0.);slab_diffuse_ibl*=base_color.rgb;
#define CUSTOM_FRAGMENT_BEFORE_IBLLAYERCOMPOSITION
vec3 material_opaque_base_ibl=mix(slab_diffuse_ibl,slab_subsurface_ibl,subsurface_weight);vec3 material_dielectric_base_ibl=mix(material_opaque_base_ibl,slab_translucent_base_ibl,transmission_weight);vec3 material_dielectric_gloss_ibl=material_dielectric_base_ibl*(1.0-dielectricIblFresnel)+slab_glossy_ibl*dielectricIblColoredFresnel;vec3 material_base_substrate_ibl=mix(material_dielectric_gloss_ibl,slab_metal_ibl,base_metalness);vec3 material_coated_base_ibl=layer(material_base_substrate_ibl,slab_coat_ibl,coatIblFresnel,coatAbsorption,vec3(1.0));
#ifdef FUZZ
material_surface_ibl=layer(material_coated_base_ibl,slab_fuzz_ibl,fuzzIblFresnel*fuzz_weight,vec3(1.0),fuzz_color);
#else
material_surface_ibl=material_coated_base_ibl;
#endif
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const openpbrEnvironmentLighting = {
    name,
    shader
}; //# sourceMappingURL=openpbrEnvironmentLighting.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/openpbrDirectLightingInit.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "openpbrDirectLightingInit",
    ()=>openpbrDirectLightingInit
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "openpbrDirectLightingInit";
const shader = `#ifdef LIGHT{X}
preLightingInfo preInfo{X};preLightingInfo preInfoCoat{X};vec4 lightColor{X}=light{X}.vLightDiffuse;float shadow{X}=1.;
#if defined(SHADOWONLY) || defined(LIGHTMAP) && defined(LIGHTMAPEXCLUDED{X}) && defined(LIGHTMAPNOSPECULAR{X})
#else
#define CUSTOM_LIGHT{X}_COLOR 
#ifdef SPOTLIGHT{X}
preInfo{X}=computePointAndSpotPreLightingInfo(light{X}.vLightData,viewDirectionW,normalW,vPositionW);preInfoCoat{X}=computePointAndSpotPreLightingInfo(light{X}.vLightData,viewDirectionW,coatNormalW,vPositionW);
#elif defined(POINTLIGHT{X})
preInfo{X}=computePointAndSpotPreLightingInfo(light{X}.vLightData,viewDirectionW,normalW,vPositionW);preInfoCoat{X}=computePointAndSpotPreLightingInfo(light{X}.vLightData,viewDirectionW,coatNormalW,vPositionW);
#elif defined(HEMILIGHT{X})
preInfo{X}=computeHemisphericPreLightingInfo(light{X}.vLightData,viewDirectionW,normalW);preInfoCoat{X}=computeHemisphericPreLightingInfo(light{X}.vLightData,viewDirectionW,coatNormalW);
#elif defined(DIRLIGHT{X})
preInfo{X}=computeDirectionalPreLightingInfo(light{X}.vLightData,viewDirectionW,normalW);preInfoCoat{X}=computeDirectionalPreLightingInfo(light{X}.vLightData,viewDirectionW,coatNormalW);
#elif defined(AREALIGHT{X}) && defined(AREALIGHTSUPPORTED)
preInfo{X}=computeAreaPreLightingInfo(areaLightsLTC1Sampler,areaLightsLTC2Sampler,viewDirectionW,normalW,vPositionW,light{X}.vLightData,light{X}.vLightWidth.xyz,light{X}.vLightHeight.xyz,specular_roughness);preInfoCoat{X}=computeAreaPreLightingInfo(areaLightsLTC1Sampler,areaLightsLTC2Sampler,viewDirectionW,coatNormalW,vPositionW,light{X}.vLightData,light{X}.vLightWidth.xyz,light{X}.vLightHeight.xyz,coat_roughness);
#endif
preInfo{X}.NdotV=baseGeoInfo.NdotV;preInfoCoat{X}.NdotV=coatGeoInfo.NdotV;
#ifdef SPOTLIGHT{X}
#ifdef LIGHT_FALLOFF_GLTF{X}
preInfo{X}.attenuation=computeDistanceLightFalloff_GLTF(preInfo{X}.lightDistanceSquared,light{X}.vLightFalloff.y);
#ifdef IESLIGHTTEXTURE{X}
preInfo{X}.attenuation*=computeDirectionalLightFalloff_IES(light{X}.vLightDirection.xyz,preInfo{X}.L,iesLightTexture{X});
#else
preInfo{X}.attenuation*=computeDirectionalLightFalloff_GLTF(light{X}.vLightDirection.xyz,preInfo{X}.L,light{X}.vLightFalloff.z,light{X}.vLightFalloff.w);
#endif
#elif defined(LIGHT_FALLOFF_PHYSICAL{X})
preInfo{X}.attenuation=computeDistanceLightFalloff_Physical(preInfo{X}.lightDistanceSquared);
#ifdef IESLIGHTTEXTURE{X}
preInfo{X}.attenuation*=computeDirectionalLightFalloff_IES(light{X}.vLightDirection.xyz,preInfo{X}.L,iesLightTexture{X});
#else
preInfo{X}.attenuation*=computeDirectionalLightFalloff_Physical(light{X}.vLightDirection.xyz,preInfo{X}.L,light{X}.vLightDirection.w);
#endif
#elif defined(LIGHT_FALLOFF_STANDARD{X})
preInfo{X}.attenuation=computeDistanceLightFalloff_Standard(preInfo{X}.lightOffset,light{X}.vLightFalloff.x);
#ifdef IESLIGHTTEXTURE{X}
preInfo{X}.attenuation*=computeDirectionalLightFalloff_IES(light{X}.vLightDirection.xyz,preInfo{X}.L,iesLightTexture{X});
#else
preInfo{X}.attenuation*=computeDirectionalLightFalloff_Standard(light{X}.vLightDirection.xyz,preInfo{X}.L,light{X}.vLightDirection.w,light{X}.vLightData.w);
#endif
#else
preInfo{X}.attenuation=computeDistanceLightFalloff(preInfo{X}.lightOffset,preInfo{X}.lightDistanceSquared,light{X}.vLightFalloff.x,light{X}.vLightFalloff.y);
#ifdef IESLIGHTTEXTURE{X}
preInfo{X}.attenuation*=computeDirectionalLightFalloff_IES(light{X}.vLightDirection.xyz,preInfo{X}.L,iesLightTexture{X});
#else
preInfo{X}.attenuation*=computeDirectionalLightFalloff(light{X}.vLightDirection.xyz,preInfo{X}.L,light{X}.vLightDirection.w,light{X}.vLightData.w,light{X}.vLightFalloff.z,light{X}.vLightFalloff.w);
#endif
#endif
#elif defined(POINTLIGHT{X})
#ifdef LIGHT_FALLOFF_GLTF{X}
preInfo{X}.attenuation=computeDistanceLightFalloff_GLTF(preInfo{X}.lightDistanceSquared,light{X}.vLightFalloff.y);
#elif defined(LIGHT_FALLOFF_PHYSICAL{X})
preInfo{X}.attenuation=computeDistanceLightFalloff_Physical(preInfo{X}.lightDistanceSquared);
#elif defined(LIGHT_FALLOFF_STANDARD{X})
preInfo{X}.attenuation=computeDistanceLightFalloff_Standard(preInfo{X}.lightOffset,light{X}.vLightFalloff.x);
#else
preInfo{X}.attenuation=computeDistanceLightFalloff(preInfo{X}.lightOffset,preInfo{X}.lightDistanceSquared,light{X}.vLightFalloff.x,light{X}.vLightFalloff.y);
#endif
#else
preInfo{X}.attenuation=1.0;
#endif
preInfoCoat{X}.attenuation=preInfo{X}.attenuation;
#if defined(HEMILIGHT{X}) || defined(AREALIGHT{X})
preInfo{X}.roughness=specular_roughness;preInfoCoat{X}.roughness=coat_roughness;
#else
preInfo{X}.roughness=adjustRoughnessFromLightProperties(specular_roughness,light{X}.vLightSpecular.a,preInfo{X}.lightDistance);preInfoCoat{X}.roughness=adjustRoughnessFromLightProperties(coat_roughness,light{X}.vLightSpecular.a,preInfoCoat{X}.lightDistance);
#endif
preInfo{X}.diffuseRoughness=base_diffuse_roughness;preInfo{X}.surfaceAlbedo=base_color.rgb;
#endif
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const openpbrDirectLightingInit = {
    name,
    shader
}; //# sourceMappingURL=openpbrDirectLightingInit.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/openpbrDirectLighting.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "openpbrDirectLighting",
    ()=>openpbrDirectLighting
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "openpbrDirectLighting";
const shader = `#ifdef LIGHT{X}
{vec3 slab_diffuse=vec3(0.,0.,0.);vec3 slab_subsurface=vec3(0.,0.,0.);vec3 slab_translucent=vec3(0.,0.,0.);vec3 slab_glossy=vec3(0.,0.,0.);float specularFresnel=0.0;vec3 specularColoredFresnel=vec3(0.,0.,0.);vec3 slab_metal=vec3(0.,0.,0.);vec3 slab_coat=vec3(0.,0.,0.);float coatFresnel=0.0;vec3 slab_fuzz=vec3(0.,0.,0.);float fuzzFresnel=0.0;
#ifdef HEMILIGHT{X}
slab_diffuse=computeHemisphericDiffuseLighting(preInfo{X},lightColor{X}.rgb,light{X}.vLightGround);
#elif defined(AREALIGHT{X})
slab_diffuse=computeAreaDiffuseLighting(preInfo{X},lightColor{X}.rgb);
#else
slab_diffuse=computeDiffuseLighting(preInfo{X},lightColor{X}.rgb);
#endif
#ifdef PROJECTEDLIGHTTEXTURE{X}
slab_diffuse*=computeProjectionTextureDiffuseLighting(projectionLightTexture{X},textureProjectionMatrix{X},vPositionW);
#endif
numLights+=1.0;
#ifdef FUZZ
float fuzzNdotH=max(dot(fuzzNormalW,preInfo{X}.H),0.0);vec3 fuzzBrdf=getFuzzBRDFLookup(fuzzNdotH,sqrt(fuzz_roughness));
#endif
#ifdef THIN_FILM
float thin_film_desaturation_scale=(thin_film_ior-1.0)*sqrt(thin_film_thickness*0.001);
#endif
#if AREALIGHT{X}
slab_glossy=computeAreaSpecularLighting(preInfo{X},light{X}.vLightSpecular.rgb,baseConductorReflectance.F0,baseConductorReflectance.F90);
#else
{
#ifdef ANISOTROPIC_BASE
slab_glossy=computeAnisotropicSpecularLighting(preInfo{X},viewDirectionW,normalW,
baseGeoInfo.anisotropicTangent,baseGeoInfo.anisotropicBitangent,baseGeoInfo.anisotropy,
0.0,lightColor{X}.rgb);
#else
slab_glossy=computeSpecularLighting(preInfo{X},normalW,vec3(1.0),vec3(1.0),specular_roughness,lightColor{X}.rgb);
#endif
float NdotH=dot(normalW,preInfo{X}.H);specularFresnel=fresnelSchlickGGX(NdotH,baseDielectricReflectance.F0,baseDielectricReflectance.F90);specularColoredFresnel=specularFresnel*specular_color;
#ifdef THIN_FILM
float thinFilmIorScale=clamp(2.0*abs(thin_film_ior-1.0),0.0,1.0);vec3 thinFilmDielectricFresnel=evalIridescence(thin_film_outside_ior,thin_film_ior,preInfo{X}.VdotH,thin_film_thickness,baseDielectricReflectance.coloredF0);thinFilmDielectricFresnel=mix(thinFilmDielectricFresnel,vec3(dot(thinFilmDielectricFresnel,vec3(0.3333))),thin_film_desaturation_scale);specularColoredFresnel=mix(specularColoredFresnel,thinFilmDielectricFresnel*specular_color,thin_film_weight*thinFilmIorScale);
#endif
}
#endif
#if AREALIGHT{X}
slab_metal=computeAreaSpecularLighting(preInfo{X},light{X}.vLightSpecular.rgb,baseConductorReflectance.F0,baseConductorReflectance.F90);
#else
{
#if (CONDUCTOR_SPECULAR_MODEL==CONDUCTOR_SPECULAR_MODEL_OPENPBR)
vec3 coloredFresnel=getF82Specular(preInfo{X}.VdotH,baseConductorReflectance.coloredF0,baseConductorReflectance.coloredF90,specular_roughness);
#else
vec3 coloredFresnel=fresnelSchlickGGX(preInfo{X}.VdotH,baseConductorReflectance.coloredF0,baseConductorReflectance.coloredF90);
#endif
#ifdef THIN_FILM
float thinFilmIorScale=clamp(2.0*abs(thin_film_ior-1.0),0.0,1.0);vec3 thinFilmConductorFresnel=evalIridescence(thin_film_outside_ior,thin_film_ior,preInfo{X}.VdotH,thin_film_thickness,baseConductorReflectance.coloredF0);thinFilmConductorFresnel=mix(thinFilmConductorFresnel,vec3(dot(thinFilmConductorFresnel,vec3(0.3333))),thin_film_desaturation_scale);coloredFresnel=mix(coloredFresnel,specular_weight*thinFilmIorScale*thinFilmConductorFresnel,thin_film_weight);
#endif
#ifdef ANISOTROPIC_BASE
slab_metal=computeAnisotropicSpecularLighting(preInfo{X},viewDirectionW,normalW,baseGeoInfo.anisotropicTangent,baseGeoInfo.anisotropicBitangent,baseGeoInfo.anisotropy,0.0,lightColor{X}.rgb);
#else
slab_metal=computeSpecularLighting(preInfo{X},normalW,vec3(1.0),coloredFresnel,specular_roughness,lightColor{X}.rgb);
#endif
}
#endif
#if AREALIGHT{X}
slab_coat=computeAreaSpecularLighting(preInfoCoat{X},light{X}.vLightSpecular.rgb,coatReflectance.F0,coatReflectance.F90);
#else
{
#ifdef ANISOTROPIC_COAT
slab_coat=computeAnisotropicSpecularLighting(preInfoCoat{X},viewDirectionW,coatNormalW,
coatGeoInfo.anisotropicTangent,coatGeoInfo.anisotropicBitangent,coatGeoInfo.anisotropy,
0.0,lightColor{X}.rgb);
#else
slab_coat=computeSpecularLighting(preInfoCoat{X},coatNormalW,vec3(coatReflectance.F0),vec3(1.0),coat_roughness,lightColor{X}.rgb);
#endif
float NdotH=dot(coatNormalW,preInfoCoat{X}.H);coatFresnel=fresnelSchlickGGX(NdotH,coatReflectance.F0,coatReflectance.F90);}
#endif
vec3 coatAbsorption=vec3(1.0);if (coat_weight>0.0) {float cosTheta_view=max(preInfoCoat{X}.NdotV,0.001);float cosTheta_light=max(preInfoCoat{X}.NdotL,0.001);float fresnel_view=coatReflectance.F0+(1.0-coatReflectance.F0)*pow(1.0-cosTheta_view,5.0);float fresnel_light=coatReflectance.F0+(1.0-coatReflectance.F0)*pow(1.0-cosTheta_light,5.0);float averageReflectance=(fresnel_view+fresnel_light)*0.5;float darkened_transmission=(1.0-averageReflectance)/(1.0+averageReflectance);darkened_transmission=mix(1.0,darkened_transmission,coat_darkening);float sin2=1.0-cosTheta_view*cosTheta_view;sin2=sin2/(coat_ior*coat_ior);float cos_t=sqrt(1.0-sin2);float coatPathLength=1.0/cos_t;vec3 colored_transmission=pow(coat_color,vec3(coatPathLength));coatAbsorption=mix(vec3(1.0),colored_transmission*darkened_transmission,coat_weight);}
#ifdef FUZZ
fuzzFresnel=fuzzBrdf.z;vec3 fuzzNormalW=mix(normalW,coatNormalW,coat_weight);float fuzzNdotV=max(dot(fuzzNormalW,viewDirectionW.xyz),0.0);float fuzzNdotL=max(dot(fuzzNormalW,preInfo{X}.L),0.0);slab_fuzz=lightColor{X}.rgb*preInfo{X}.attenuation*evalFuzz(preInfo{X}.L,fuzzNdotL,fuzzNdotV,fuzzTangent,fuzzBitangent,fuzzBrdf);
#else
vec3 fuzz_color=vec3(0.0);
#endif
slab_diffuse*=base_color.rgb;vec3 material_opaque_base=mix(slab_diffuse,slab_subsurface,subsurface_weight);vec3 material_dielectric_base=mix(material_opaque_base,slab_translucent,transmission_weight);vec3 material_dielectric_gloss=material_dielectric_base*(1.0-specularFresnel)+slab_glossy*specularColoredFresnel;vec3 material_base_substrate=mix(material_dielectric_gloss,slab_metal,base_metalness);vec3 material_coated_base=layer(material_base_substrate,slab_coat,coatFresnel,coatAbsorption,vec3(1.0));material_surface_direct+=layer(material_coated_base,slab_fuzz,fuzzFresnel*fuzz_weight,vec3(1.0),fuzz_color);}
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const openpbrDirectLighting = {
    name,
    shader
}; //# sourceMappingURL=openpbrDirectLighting.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/gaussianSplattingFragmentDeclaration.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "gaussianSplattingFragmentDeclaration",
    ()=>gaussianSplattingFragmentDeclaration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$logDepthFragment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/logDepthFragment.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$fogFragment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/fogFragment.js [app-ssr] (ecmascript)");
;
;
;
const name = "gaussianSplattingFragmentDeclaration";
const shader = `vec4 gaussianColor(vec4 inColor)
{float A=-dot(vPosition,vPosition);if (A<-4.0) discard;float B=exp(A)*inColor.a;
#include<logDepthFragment>
vec3 color=inColor.rgb;
#ifdef FOG
#include<fogFragment>
#endif
return vec4(color,B);}
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const gaussianSplattingFragmentDeclaration = {
    name,
    shader
}; //# sourceMappingURL=gaussianSplattingFragmentDeclaration.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/gaussianSplattingVertexDeclaration.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "gaussianSplattingVertexDeclaration",
    ()=>gaussianSplattingVertexDeclaration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "gaussianSplattingVertexDeclaration";
const shader = `attribute vec3 position;attribute vec4 splatIndex0;attribute vec4 splatIndex1;attribute vec4 splatIndex2;attribute vec4 splatIndex3;uniform mat4 view;uniform mat4 projection;uniform mat4 world;uniform vec4 vEyePosition;`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const gaussianSplattingVertexDeclaration = {
    name,
    shader
}; //# sourceMappingURL=gaussianSplattingVertexDeclaration.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/gaussianSplattingUboDeclaration.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "gaussianSplattingUboDeclaration",
    ()=>gaussianSplattingUboDeclaration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$sceneUboDeclaration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/sceneUboDeclaration.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$meshUboDeclaration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/meshUboDeclaration.js [app-ssr] (ecmascript)");
;
;
;
const name = "gaussianSplattingUboDeclaration";
const shader = `#include<sceneUboDeclaration>
#include<meshUboDeclaration>
attribute vec3 position;attribute vec4 splatIndex0;attribute vec4 splatIndex1;attribute vec4 splatIndex2;attribute vec4 splatIndex3;
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const gaussianSplattingUboDeclaration = {
    name,
    shader
}; //# sourceMappingURL=gaussianSplattingUboDeclaration.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/gaussianSplatting.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "gaussianSplatting",
    ()=>gaussianSplatting
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "gaussianSplatting";
const shader = `#if !defined(WEBGL2) && !defined(WEBGPU) && !defined(NATIVE)
mat3 transpose(mat3 matrix) {return mat3(matrix[0][0],matrix[1][0],matrix[2][0],
matrix[0][1],matrix[1][1],matrix[2][1],
matrix[0][2],matrix[1][2],matrix[2][2]);}
#endif
vec2 getDataUV(float index,vec2 textureSize) {float y=floor(index/textureSize.x);float x=index-y*textureSize.x;return vec2((x+0.5)/textureSize.x,(y+0.5)/textureSize.y);}
#if SH_DEGREE>0
ivec2 getDataUVint(float index,vec2 textureSize) {float y=floor(index/textureSize.x);float x=index-y*textureSize.x;return ivec2(uint(x+0.5),uint(y+0.5));}
#endif
struct Splat {vec4 center;vec4 color;vec4 covA;vec4 covB;
#if SH_DEGREE>0
uvec4 sh0; 
#endif
#if SH_DEGREE>1
uvec4 sh1;
#endif
#if SH_DEGREE>2
uvec4 sh2;
#endif
};float getSplatIndex(int localIndex)
{float splatIndex;switch (localIndex)
{case 0: splatIndex=splatIndex0.x; break;case 1: splatIndex=splatIndex0.y; break;case 2: splatIndex=splatIndex0.z; break;case 3: splatIndex=splatIndex0.w; break;case 4: splatIndex=splatIndex1.x; break;case 5: splatIndex=splatIndex1.y; break;case 6: splatIndex=splatIndex1.z; break;case 7: splatIndex=splatIndex1.w; break;case 8: splatIndex=splatIndex2.x; break;case 9: splatIndex=splatIndex2.y; break;case 10: splatIndex=splatIndex2.z; break;case 11: splatIndex=splatIndex2.w; break;case 12: splatIndex=splatIndex3.x; break;case 13: splatIndex=splatIndex3.y; break;case 14: splatIndex=splatIndex3.z; break;case 15: splatIndex=splatIndex3.w; break;}
return splatIndex;}
Splat readSplat(float splatIndex)
{Splat splat;vec2 splatUV=getDataUV(splatIndex,dataTextureSize);splat.center=texture2D(centersTexture,splatUV);splat.color=texture2D(colorsTexture,splatUV);splat.covA=texture2D(covariancesATexture,splatUV)*splat.center.w;splat.covB=texture2D(covariancesBTexture,splatUV)*splat.center.w;
#if SH_DEGREE>0
ivec2 splatUVint=getDataUVint(splatIndex,dataTextureSize);splat.sh0=texelFetch(shTexture0,splatUVint,0);
#endif
#if SH_DEGREE>1
splat.sh1=texelFetch(shTexture1,splatUVint,0);
#endif
#if SH_DEGREE>2
splat.sh2=texelFetch(shTexture2,splatUVint,0);
#endif
return splat;}
#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)
vec3 computeColorFromSHDegree(vec3 dir,const vec3 sh[16])
{const float SH_C0=0.28209479;const float SH_C1=0.48860251;float SH_C2[5];SH_C2[0]=1.092548430;SH_C2[1]=-1.09254843;SH_C2[2]=0.315391565;SH_C2[3]=-1.09254843;SH_C2[4]=0.546274215;float SH_C3[7];SH_C3[0]=-0.59004358;SH_C3[1]=2.890611442;SH_C3[2]=-0.45704579;SH_C3[3]=0.373176332;SH_C3[4]=-0.45704579;SH_C3[5]=1.445305721;SH_C3[6]=-0.59004358;vec3 result=/*SH_C0**/sh[0];
#if SH_DEGREE>0
float x=dir.x;float y=dir.y;float z=dir.z;result+=- SH_C1*y*sh[1]+SH_C1*z*sh[2]-SH_C1*x*sh[3];
#if SH_DEGREE>1
float xx=x*x,yy=y*y,zz=z*z;float xy=x*y,yz=y*z,xz=x*z;result+=
SH_C2[0]*xy*sh[4] +
SH_C2[1]*yz*sh[5] +
SH_C2[2]*(2.0*zz-xx-yy)*sh[6] +
SH_C2[3]*xz*sh[7] +
SH_C2[4]*(xx-yy)*sh[8];
#if SH_DEGREE>2
result+=
SH_C3[0]*y*(3.0*xx-yy)*sh[9] +
SH_C3[1]*xy*z*sh[10] +
SH_C3[2]*y*(4.0*zz-xx-yy)*sh[11] +
SH_C3[3]*z*(2.0*zz-3.0*xx-3.0*yy)*sh[12] +
SH_C3[4]*x*(4.0*zz-xx-yy)*sh[13] +
SH_C3[5]*z*(xx-yy)*sh[14] +
SH_C3[6]*x*(xx-3.0*yy)*sh[15];
#endif
#endif
#endif
return result;}
vec4 decompose(uint value)
{vec4 components=vec4(
float((value ) & 255u),
float((value>>uint( 8)) & 255u),
float((value>>uint(16)) & 255u),
float((value>>uint(24)) & 255u));return components*vec4(2./255.)-vec4(1.);}
vec3 computeSH(Splat splat,vec3 dir)
{vec3 sh[16];sh[0]=vec3(0.,0.,0.);
#if SH_DEGREE>0
vec4 sh00=decompose(splat.sh0.x);vec4 sh01=decompose(splat.sh0.y);vec4 sh02=decompose(splat.sh0.z);sh[1]=vec3(sh00.x,sh00.y,sh00.z);sh[2]=vec3(sh00.w,sh01.x,sh01.y);sh[3]=vec3(sh01.z,sh01.w,sh02.x);
#endif
#if SH_DEGREE>1
vec4 sh03=decompose(splat.sh0.w);vec4 sh04=decompose(splat.sh1.x);vec4 sh05=decompose(splat.sh1.y);sh[4]=vec3(sh02.y,sh02.z,sh02.w);sh[5]=vec3(sh03.x,sh03.y,sh03.z);sh[6]=vec3(sh03.w,sh04.x,sh04.y);sh[7]=vec3(sh04.z,sh04.w,sh05.x);sh[8]=vec3(sh05.y,sh05.z,sh05.w);
#endif
#if SH_DEGREE>2
vec4 sh06=decompose(splat.sh1.z);vec4 sh07=decompose(splat.sh1.w);vec4 sh08=decompose(splat.sh2.x);vec4 sh09=decompose(splat.sh2.y);vec4 sh10=decompose(splat.sh2.z);vec4 sh11=decompose(splat.sh2.w);sh[9]=vec3(sh06.x,sh06.y,sh06.z);sh[10]=vec3(sh06.w,sh07.x,sh07.y);sh[11]=vec3(sh07.z,sh07.w,sh08.x);sh[12]=vec3(sh08.y,sh08.z,sh08.w);sh[13]=vec3(sh09.x,sh09.y,sh09.z);sh[14]=vec3(sh09.w,sh10.x,sh10.y);sh[15]=vec3(sh10.z,sh10.w,sh11.x); 
#endif
return computeColorFromSHDegree(dir,sh);}
#else
vec3 computeSH(Splat splat,vec3 dir)
{return vec3(0.,0.,0.);}
#endif
vec4 gaussianSplatting(vec2 meshPos,vec3 worldPos,vec2 scale,vec3 covA,vec3 covB,mat4 worldMatrix,mat4 viewMatrix,mat4 projectionMatrix)
{mat4 modelView=viewMatrix*worldMatrix;vec4 camspace=viewMatrix*vec4(worldPos,1.);vec4 pos2d=projectionMatrix*camspace;float bounds=1.2*pos2d.w;if (pos2d.z<-pos2d.w || pos2d.x<-bounds || pos2d.x>bounds
|| pos2d.y<-bounds || pos2d.y>bounds) {return vec4(0.0,0.0,2.0,1.0);}
mat3 Vrk=mat3(
covA.x,covA.y,covA.z,
covA.y,covB.x,covB.y,
covA.z,covB.y,covB.z
);bool isOrtho=abs(projectionMatrix[3][3]-1.0)<0.001;mat3 J;if (isOrtho) {J=mat3(
focal.x,0.,0.,
0.,focal.y,0.,
0.,0.,0.
);} else {J=mat3(
focal.x/camspace.z,0.,-(focal.x*camspace.x)/(camspace.z*camspace.z),
0.,focal.y/camspace.z,-(focal.y*camspace.y)/(camspace.z*camspace.z),
0.,0.,0.
);}
mat3 invy=mat3(1,0,0,0,-1,0,0,0,1);mat3 T=invy*transpose(mat3(modelView))*J;mat3 cov2d=transpose(T)*Vrk*T;
#if COMPENSATION
float c00=cov2d[0][0];float c11=cov2d[1][1];float c01=cov2d[0][1];float detOrig=c00*c11-c01*c01;
#endif
cov2d[0][0]+=kernelSize;cov2d[1][1]+=kernelSize;
#if COMPENSATION
vec3 c2d=vec3(cov2d[0][0],c01,cov2d[1][1]);float detBlur=c2d.x*c2d.z-c2d.y*c2d.y;float compensation=sqrt(max(0.,detOrig/detBlur));vColor.w*=compensation;
#endif
float mid=(cov2d[0][0]+cov2d[1][1])/2.0;float radius=length(vec2((cov2d[0][0]-cov2d[1][1])/2.0,cov2d[0][1]));float epsilon=0.0001;float lambda1=mid+radius+epsilon,lambda2=mid-radius+epsilon;if (lambda2<0.0)
{return vec4(0.0,0.0,2.0,1.0);}
vec2 diagonalVector=normalize(vec2(cov2d[0][1],lambda1-cov2d[0][0]));vec2 majorAxis=min(sqrt(2.0*lambda1),1024.0)*diagonalVector;vec2 minorAxis=min(sqrt(2.0*lambda2),1024.0)*vec2(diagonalVector.y,-diagonalVector.x);vec2 vCenter=vec2(pos2d);float scaleFactor=isOrtho ? 1.0 : pos2d.w;return vec4(
vCenter 
+ ((meshPos.x*majorAxis
+ meshPos.y*minorAxis)*invViewport*scaleFactor)*scale,pos2d.zw);}`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const gaussianSplatting = {
    name,
    shader
}; //# sourceMappingURL=gaussianSplatting.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/fresnelFunction.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "fresnelFunction",
    ()=>fresnelFunction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "fresnelFunction";
const shader = `#ifdef FRESNEL
float computeFresnelTerm(vec3 viewDirection,vec3 worldNormal,float bias,float power)
{float fresnelTerm=pow(bias+abs(dot(viewDirection,worldNormal)),power);return clamp(fresnelTerm,0.,1.);}
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const fresnelFunction = {
    name,
    shader
}; //# sourceMappingURL=fresnelFunction.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/defaultFragmentDeclaration.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "defaultFragmentDeclaration",
    ()=>defaultFragmentDeclaration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$decalFragmentDeclaration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/decalFragmentDeclaration.js [app-ssr] (ecmascript)");
;
;
const name = "defaultFragmentDeclaration";
const shader = `uniform vec4 vEyePosition;uniform vec4 vDiffuseColor;uniform vec4 vSpecularColor;uniform vec3 vEmissiveColor;uniform vec3 vAmbientColor;uniform float visibility;
#ifdef DIFFUSE
uniform vec2 vDiffuseInfos;
#endif
#ifdef AMBIENT
uniform vec2 vAmbientInfos;
#endif
#ifdef OPACITY 
uniform vec2 vOpacityInfos;
#endif
#ifdef EMISSIVE
uniform vec2 vEmissiveInfos;
#endif
#ifdef LIGHTMAP
uniform vec2 vLightmapInfos;
#endif
#ifdef BUMP
uniform vec3 vBumpInfos;uniform vec2 vTangentSpaceParams;
#endif
#ifdef ALPHATEST
uniform float alphaCutOff;
#endif
#if defined(REFLECTIONMAP_SPHERICAL) || defined(REFLECTIONMAP_PROJECTION) || defined(REFRACTION) || defined(PREPASS)
uniform mat4 view;
#endif
#ifdef REFRACTION
uniform vec4 vRefractionInfos;
#ifndef REFRACTIONMAP_3D
uniform mat4 refractionMatrix;
#endif
#ifdef REFRACTIONFRESNEL
uniform vec4 refractionLeftColor;uniform vec4 refractionRightColor;
#endif
#if defined(USE_LOCAL_REFRACTIONMAP_CUBIC) && defined(REFRACTIONMAP_3D)
uniform vec3 vRefractionPosition;uniform vec3 vRefractionSize; 
#endif
#endif
#if defined(SPECULAR) && defined(SPECULARTERM)
uniform vec2 vSpecularInfos;
#endif
#ifdef DIFFUSEFRESNEL
uniform vec4 diffuseLeftColor;uniform vec4 diffuseRightColor;
#endif
#ifdef OPACITYFRESNEL
uniform vec4 opacityParts;
#endif
#ifdef EMISSIVEFRESNEL
uniform vec4 emissiveLeftColor;uniform vec4 emissiveRightColor;
#endif
#if defined(REFLECTION) || (defined(AREALIGHTUSED) && defined(AREALIGHTSUPPORTED))
uniform vec2 vReflectionInfos;
#if defined(REFLECTIONMAP_PLANAR) || defined(REFLECTIONMAP_CUBIC) || defined(REFLECTIONMAP_PROJECTION) || defined(REFLECTIONMAP_EQUIRECTANGULAR) || defined(REFLECTIONMAP_SPHERICAL) || defined(REFLECTIONMAP_SKYBOX)
uniform mat4 reflectionMatrix;
#endif
#ifndef REFLECTIONMAP_SKYBOX
#if defined(USE_LOCAL_REFLECTIONMAP_CUBIC) && defined(REFLECTIONMAP_CUBIC)
uniform vec3 vReflectionPosition;uniform vec3 vReflectionSize; 
#endif
#endif
#ifdef REFLECTIONFRESNEL
uniform vec4 reflectionLeftColor;uniform vec4 reflectionRightColor;
#endif
#endif
#ifdef DETAIL
uniform vec4 vDetailInfos;
#endif
#include<decalFragmentDeclaration>
#define ADDITIONAL_FRAGMENT_DECLARATION
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const defaultFragmentDeclaration = {
    name,
    shader
}; //# sourceMappingURL=defaultFragmentDeclaration.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/defaultUboDeclaration.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "defaultUboDeclaration",
    ()=>defaultUboDeclaration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$sceneUboDeclaration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/sceneUboDeclaration.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$meshUboDeclaration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/meshUboDeclaration.js [app-ssr] (ecmascript)");
;
;
;
const name = "defaultUboDeclaration";
const shader = `layout(std140,column_major) uniform;uniform Material
{vec4 diffuseLeftColor;vec4 diffuseRightColor;vec4 opacityParts;vec4 reflectionLeftColor;vec4 reflectionRightColor;vec4 refractionLeftColor;vec4 refractionRightColor;vec4 emissiveLeftColor;vec4 emissiveRightColor;vec2 vDiffuseInfos;vec2 vAmbientInfos;vec2 vOpacityInfos;vec2 vEmissiveInfos;vec2 vLightmapInfos;vec2 vSpecularInfos;vec3 vBumpInfos;mat4 diffuseMatrix;mat4 ambientMatrix;mat4 opacityMatrix;mat4 emissiveMatrix;mat4 lightmapMatrix;mat4 specularMatrix;mat4 bumpMatrix;vec2 vTangentSpaceParams;float pointSize;float alphaCutOff;mat4 refractionMatrix;vec4 vRefractionInfos;vec3 vRefractionPosition;vec3 vRefractionSize;vec4 vSpecularColor;vec3 vEmissiveColor;vec4 vDiffuseColor;vec3 vAmbientColor;vec4 cameraInfo;vec2 vReflectionInfos;mat4 reflectionMatrix;vec3 vReflectionPosition;vec3 vReflectionSize;
#define ADDITIONAL_UBO_DECLARATION
};
#include<sceneUboDeclaration>
#include<meshUboDeclaration>
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const defaultUboDeclaration = {
    name,
    shader
}; //# sourceMappingURL=defaultUboDeclaration.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/defaultVertexDeclaration.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "defaultVertexDeclaration",
    ()=>defaultVertexDeclaration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$decalVertexDeclaration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/decalVertexDeclaration.js [app-ssr] (ecmascript)");
;
;
const name = "defaultVertexDeclaration";
const shader = `uniform mat4 viewProjection;
#ifdef MULTIVIEW
mat4 viewProjectionR;
#endif 
uniform mat4 view;
#ifdef DIFFUSE
uniform mat4 diffuseMatrix;uniform vec2 vDiffuseInfos;
#endif
#ifdef AMBIENT
uniform mat4 ambientMatrix;uniform vec2 vAmbientInfos;
#endif
#ifdef OPACITY
uniform mat4 opacityMatrix;uniform vec2 vOpacityInfos;
#endif
#ifdef EMISSIVE
uniform vec2 vEmissiveInfos;uniform mat4 emissiveMatrix;
#endif
#ifdef LIGHTMAP
uniform vec2 vLightmapInfos;uniform mat4 lightmapMatrix;
#endif
#if defined(SPECULAR) && defined(SPECULARTERM)
uniform vec2 vSpecularInfos;uniform mat4 specularMatrix;
#endif
#ifdef BUMP
uniform vec3 vBumpInfos;uniform mat4 bumpMatrix;
#endif
#ifdef REFLECTION
uniform mat4 reflectionMatrix;
#endif
#ifdef POINTSIZE
uniform float pointSize;
#endif
#ifdef DETAIL
uniform vec4 vDetailInfos;uniform mat4 detailMatrix;
#endif
uniform vec4 cameraInfo;
#include<decalVertexDeclaration>
#define ADDITIONAL_VERTEX_DECLARATION
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const defaultVertexDeclaration = {
    name,
    shader
}; //# sourceMappingURL=defaultVertexDeclaration.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/clipPlaneFragmentDeclaration2.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "clipPlaneFragmentDeclaration2",
    ()=>clipPlaneFragmentDeclaration2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "clipPlaneFragmentDeclaration2";
const shader = `#ifdef CLIPPLANE
in float fClipDistance;
#endif
#ifdef CLIPPLANE2
in float fClipDistance2;
#endif
#ifdef CLIPPLANE3
in float fClipDistance3;
#endif
#ifdef CLIPPLANE4
in float fClipDistance4;
#endif
#ifdef CLIPPLANE5
in float fClipDistance5;
#endif
#ifdef CLIPPLANE6
in float fClipDistance6;
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const clipPlaneFragmentDeclaration2 = {
    name,
    shader
}; //# sourceMappingURL=clipPlaneFragmentDeclaration2.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/clipPlaneVertexDeclaration2.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "clipPlaneVertexDeclaration2",
    ()=>clipPlaneVertexDeclaration2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "clipPlaneVertexDeclaration2";
const shader = `#ifdef CLIPPLANE
uniform vec4 vClipPlane;out float fClipDistance;
#endif
#ifdef CLIPPLANE2
uniform vec4 vClipPlane2;out float fClipDistance2;
#endif
#ifdef CLIPPLANE3
uniform vec4 vClipPlane3;out float fClipDistance3;
#endif
#ifdef CLIPPLANE4
uniform vec4 vClipPlane4;out float fClipDistance4;
#endif
#ifdef CLIPPLANE5
uniform vec4 vClipPlane5;out float fClipDistance5;
#endif
#ifdef CLIPPLANE6
uniform vec4 vClipPlane6;out float fClipDistance6;
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const clipPlaneVertexDeclaration2 = {
    name,
    shader
}; //# sourceMappingURL=clipPlaneVertexDeclaration2.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/mrtFragmentDeclaration.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "mrtFragmentDeclaration",
    ()=>mrtFragmentDeclaration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "mrtFragmentDeclaration";
const shader = `#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)
layout(location=0) out vec4 glFragData[{X}];
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const mrtFragmentDeclaration = {
    name,
    shader
}; //# sourceMappingURL=mrtFragmentDeclaration.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/geometryVertexDeclaration.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "geometryVertexDeclaration",
    ()=>geometryVertexDeclaration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "geometryVertexDeclaration";
const shader = `uniform mat4 viewProjection;uniform mat4 view;`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const geometryVertexDeclaration = {
    name,
    shader
}; //# sourceMappingURL=geometryVertexDeclaration.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/geometryUboDeclaration.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "geometryUboDeclaration",
    ()=>geometryUboDeclaration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$sceneUboDeclaration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/sceneUboDeclaration.js [app-ssr] (ecmascript)");
;
;
const name = "geometryUboDeclaration";
const shader = `#include<sceneUboDeclaration>
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const geometryUboDeclaration = {
    name,
    shader
}; //# sourceMappingURL=geometryUboDeclaration.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/screenSpaceRayTrace.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "screenSpaceRayTrace",
    ()=>screenSpaceRayTrace
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "screenSpaceRayTrace";
const shader = `float distanceSquared(vec2 a,vec2 b) { a-=b; return dot(a,a); }
#ifdef SSRAYTRACE_SCREENSPACE_DEPTH
float linearizeDepth(float depth,float near,float far) {
#ifdef SSRAYTRACE_RIGHT_HANDED_SCENE
return -(near*far)/(far-depth*(far-near));
#else
return (near*far)/(far-depth*(far-near));
#endif
}
#endif
/**
\param csOrigin Camera-space ray origin,which must be 
within the view volume and must have z>0.01 and project within the valid screen rectangle
\param csDirection Unit length camera-space ray direction
\param projectToPixelMatrix A projection matrix that maps to **pixel** coordinates 
(**not** [-1,+1] normalized device coordinates).
\param csZBuffer The camera-space Z buffer
\param csZBufferSize Dimensions of csZBuffer
\param csZThickness Camera space csZThickness to ascribe to each pixel in the depth buffer
\param nearPlaneZ Positive number. Doesn't have to be THE actual near plane,just a reasonable value
for clipping rays headed towards the camera
\param stride Step in horizontal or vertical pixels between samples. This is a float
because integer math is slow on GPUs,but should be set to an integer>=1
\param jitterFraction Number between 0 and 1 for how far to bump the ray in stride units
to conceal banding artifacts,plus the stride ray offset.
\param maxSteps Maximum number of iterations. Higher gives better images but may be slow
\param maxRayTraceDistance Maximum camera-space distance to trace before returning a miss
\param selfCollisionNumSkip Number of steps to skip at start when raytracing to avoid self collisions.
1 is a reasonable value,depending on the scene you may need to set this value to 2
\param hitPixel Pixel coordinates of the first intersection with the scene
\param numIterations number of iterations performed
\param csHitPoint Camera space location of the ray hit
*/
#define inline
bool traceScreenSpaceRay1(
vec3 csOrigin,
vec3 csDirection,
mat4 projectToPixelMatrix,
sampler2D csZBuffer,
vec2 csZBufferSize,
#ifdef SSRAYTRACE_USE_BACK_DEPTHBUFFER
sampler2D csZBackBuffer,
float csZBackSizeFactor,
#endif
float csZThickness,
float nearPlaneZ,
float farPlaneZ,
float stride,
float jitterFraction,
float maxSteps,
float maxRayTraceDistance,
float selfCollisionNumSkip,
out vec2 startPixel,
out vec2 hitPixel,
out vec3 csHitPoint,
out float numIterations
#ifdef SSRAYTRACE_DEBUG
,out vec3 debugColor
#endif
)
{
#ifdef SSRAYTRACE_RIGHT_HANDED_SCENE
float rayLength=(csOrigin.z+csDirection.z*maxRayTraceDistance)>-nearPlaneZ ? (-nearPlaneZ-csOrigin.z)/csDirection.z : maxRayTraceDistance;
#else
float rayLength=(csOrigin.z+csDirection.z*maxRayTraceDistance)<nearPlaneZ ? (nearPlaneZ-csOrigin.z)/csDirection.z : maxRayTraceDistance;
#endif
vec3 csEndPoint=csOrigin+csDirection*rayLength;hitPixel=vec2(-1.0,-1.0);vec4 H0=projectToPixelMatrix*vec4(csOrigin,1.0);vec4 H1=projectToPixelMatrix*vec4(csEndPoint,1.0);float k0=1.0/H0.w;float k1=1.0/H1.w;vec3 Q0=csOrigin*k0;vec3 Q1=csEndPoint*k1;vec2 P0=H0.xy*k0;vec2 P1=H1.xy*k1;
#ifdef SSRAYTRACE_CLIP_TO_FRUSTUM
float xMax=csZBufferSize.x-0.5,xMin=0.5,yMax=csZBufferSize.y-0.5,yMin=0.5;float alpha=0.0;if ((P1.y>yMax) || (P1.y<yMin)) {alpha=(P1.y-((P1.y>yMax) ? yMax : yMin))/(P1.y-P0.y);}
if ((P1.x>xMax) || (P1.x<xMin)) {alpha=max(alpha,(P1.x-((P1.x>xMax) ? xMax : xMin))/(P1.x-P0.x));}
P1=mix(P1,P0,alpha); k1=mix(k1,k0,alpha); Q1=mix(Q1,Q0,alpha);
#endif
P1+=vec2((distanceSquared(P0,P1)<0.0001) ? 0.01 : 0.0);vec2 delta=P1-P0;bool permute=false;if (abs(delta.x)<abs(delta.y)) { 
permute=true;delta=delta.yx;P0=P0.yx;P1=P1.yx; }
float stepDirection=sign(delta.x);float invdx=stepDirection/delta.x;vec2 dP=vec2(stepDirection,delta.y*invdx);vec3 dQ=(Q1-Q0)*invdx;float dk=(k1-k0)*invdx;float zMin=min(csEndPoint.z,csOrigin.z);float zMax=max(csEndPoint.z,csOrigin.z);dP*=stride; dQ*=stride; dk*=stride;P0+=dP*jitterFraction; Q0+=dQ*jitterFraction; k0+=dk*jitterFraction;vec4 pqk=vec4(P0,Q0.z,k0);vec4 dPQK=vec4(dP,dQ.z,dk);startPixel=permute ? P0.yx : P0.xy;float prevZMaxEstimate=csOrigin.z;float rayZMin=prevZMaxEstimate,rayZMax=prevZMaxEstimate;float sceneZMax=rayZMax+1e4;float end=P1.x*stepDirection;bool hit=false;float stepCount;for (stepCount=0.0;stepCount<=selfCollisionNumSkip ||
(pqk.x*stepDirection)<=end &&
stepCount<maxSteps &&
!hit &&
sceneZMax != 0.0; 
pqk+=dPQK,++stepCount)
{hitPixel=permute ? pqk.yx : pqk.xy;rayZMin=prevZMaxEstimate;rayZMax=(dPQK.z*0.5+pqk.z)/(dPQK.w*0.5+pqk.w);rayZMax=clamp(rayZMax,zMin,zMax);prevZMaxEstimate=rayZMax;if (rayZMin>rayZMax) { 
float t=rayZMin; rayZMin=rayZMax; rayZMax=t;}
sceneZMax=texelFetch(csZBuffer,ivec2(hitPixel),0).r;
#ifdef SSRAYTRACE_SCREENSPACE_DEPTH
sceneZMax=linearizeDepth(sceneZMax,nearPlaneZ,farPlaneZ);
#endif
if (sceneZMax==0.0) sceneZMax=1e8;
#ifdef SSRAYTRACE_RIGHT_HANDED_SCENE
#ifdef SSRAYTRACE_USE_BACK_DEPTHBUFFER
float sceneBackZ=texelFetch(csZBackBuffer,ivec2(hitPixel/csZBackSizeFactor),0).r;
#ifdef SSRAYTRACE_SCREENSPACE_DEPTH
sceneBackZ=linearizeDepth(sceneBackZ,nearPlaneZ,farPlaneZ);
#endif
if (sceneBackZ==0.0) sceneBackZ=-1e8;hit=(rayZMax>=sceneBackZ-csZThickness) && (rayZMin<=sceneZMax);
#else
hit=(rayZMax>=sceneZMax-csZThickness) && (rayZMin<=sceneZMax);
#endif
#else
#ifdef SSRAYTRACE_USE_BACK_DEPTHBUFFER
float sceneBackZ=texelFetch(csZBackBuffer,ivec2(hitPixel/csZBackSizeFactor),0).r;
#ifdef SSRAYTRACE_SCREENSPACE_DEPTH
sceneBackZ=linearizeDepth(sceneBackZ,nearPlaneZ,farPlaneZ);
#endif
if (sceneBackZ==0.0) sceneBackZ=1e8;hit=(rayZMin<=sceneBackZ+csZThickness) && (rayZMax>=sceneZMax) && (sceneZMax != 0.0);
#else
hit=(rayZMin<=sceneZMax+csZThickness) && (rayZMax>=sceneZMax);
#endif
#endif
}
pqk-=dPQK;stepCount-=1.0;if (((pqk.x+dPQK.x)*stepDirection)>end || (stepCount+1.0)>=maxSteps || sceneZMax==0.0) {hit=false;}
#ifdef SSRAYTRACE_ENABLE_REFINEMENT
if (stride>1.0 && hit) {pqk-=dPQK;stepCount-=1.0;float invStride=1.0/stride;dPQK*=invStride;float refinementStepCount=0.0;prevZMaxEstimate=pqk.z/pqk.w;rayZMax=prevZMaxEstimate;sceneZMax=rayZMax+1e7;for (;refinementStepCount<=1.0 ||
(refinementStepCount<=stride*1.4) &&
(rayZMax<sceneZMax) && (sceneZMax != 0.0);pqk+=dPQK,refinementStepCount+=1.0)
{rayZMin=prevZMaxEstimate;rayZMax=(dPQK.z*0.5+pqk.z)/(dPQK.w*0.5+pqk.w);rayZMax=clamp(rayZMax,zMin,zMax);prevZMaxEstimate=rayZMax;rayZMax=max(rayZMax,rayZMin);hitPixel=permute ? pqk.yx : pqk.xy;sceneZMax=texelFetch(csZBuffer,ivec2(hitPixel),0).r;
#ifdef SSRAYTRACE_SCREENSPACE_DEPTH
sceneZMax=linearizeDepth(sceneZMax,nearPlaneZ,farPlaneZ);
#endif
}
pqk-=dPQK;refinementStepCount-=1.0;stepCount+=refinementStepCount/stride;}
#endif
Q0.xy+=dQ.xy*stepCount;Q0.z=pqk.z;csHitPoint=Q0/pqk.w;numIterations=stepCount+1.0;
#ifdef SSRAYTRACE_DEBUG
if (((pqk.x+dPQK.x)*stepDirection)>end) {debugColor=vec3(0,0,1);} else if ((stepCount+1.0)>=maxSteps) {debugColor=vec3(1,0,0);} else if (sceneZMax==0.0) {debugColor=vec3(1,1,0);} else {debugColor=vec3(0,stepCount/maxSteps,0);}
#endif
return hit;}
/**
texCoord: in the [0,1] range
depth: depth in view space (range [znear,zfar]])
*/
vec3 computeViewPosFromUVDepth(vec2 texCoord,float depth,mat4 projection,mat4 invProjectionMatrix) {vec4 ndc;ndc.xy=texCoord*2.0-1.0;
#ifdef SSRAYTRACE_RIGHT_HANDED_SCENE
#ifdef ORTHOGRAPHIC_CAMERA
ndc.z=-projection[2].z*depth+projection[3].z;
#else
ndc.z=-projection[2].z-projection[3].z/depth;
#endif
#else
#ifdef ORTHOGRAPHIC_CAMERA
ndc.z=projection[2].z*depth+projection[3].z;
#else
ndc.z=projection[2].z+projection[3].z/depth;
#endif
#endif
ndc.w=1.0;vec4 eyePos=invProjectionMatrix*ndc;eyePos.xyz/=eyePos.w;return eyePos.xyz;}
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const screenSpaceRayTrace = {
    name,
    shader
}; //# sourceMappingURL=screenSpaceRayTrace.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/kernelBlurVaryingDeclaration.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "kernelBlurVaryingDeclaration",
    ()=>kernelBlurVaryingDeclaration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "kernelBlurVaryingDeclaration";
const shader = `varying vec2 sampleCoord{X};`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const kernelBlurVaryingDeclaration = {
    name,
    shader
}; //# sourceMappingURL=kernelBlurVaryingDeclaration.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/kernelBlurFragment.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "kernelBlurFragment",
    ()=>kernelBlurFragment
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "kernelBlurFragment";
const shader = `#ifdef DOF
factor=sampleCoC(sampleCoord{X}); 
computedWeight=KERNEL_WEIGHT{X}*factor;sumOfWeights+=computedWeight;
#else
computedWeight=KERNEL_WEIGHT{X};
#endif
#ifdef PACKEDFLOAT
blend+=unpack(texture2D(textureSampler,sampleCoord{X}))*computedWeight;
#else
blend+=texture2D(textureSampler,sampleCoord{X})*computedWeight;
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const kernelBlurFragment = {
    name,
    shader
}; //# sourceMappingURL=kernelBlurFragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/kernelBlurFragment2.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "kernelBlurFragment2",
    ()=>kernelBlurFragment2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "kernelBlurFragment2";
const shader = `#ifdef DOF
factor=sampleCoC(sampleCenter+delta*KERNEL_DEP_OFFSET{X});computedWeight=KERNEL_DEP_WEIGHT{X}*factor;sumOfWeights+=computedWeight;
#else
computedWeight=KERNEL_DEP_WEIGHT{X};
#endif
#ifdef PACKEDFLOAT
blend+=unpack(texture2D(textureSampler,sampleCenter+delta*KERNEL_DEP_OFFSET{X}))*computedWeight;
#else
blend+=texture2D(textureSampler,sampleCenter+delta*KERNEL_DEP_OFFSET{X})*computedWeight;
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const kernelBlurFragment2 = {
    name,
    shader
}; //# sourceMappingURL=kernelBlurFragment2.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/kernelBlurVertex.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "kernelBlurVertex",
    ()=>kernelBlurVertex
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "kernelBlurVertex";
const shader = `sampleCoord{X}=sampleCenter+delta*KERNEL_OFFSET{X};`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const kernelBlurVertex = {
    name,
    shader
}; //# sourceMappingURL=kernelBlurVertex.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/fibonacci.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "fibonacci",
    ()=>fibonacci
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "fibonacci";
const shader = `#define rcp(x) 1./x
#define GOLDEN_RATIO 1.618033988749895
vec2 Golden2dSeq(int i,float n)
{return vec2(float(i)/n+(0.5/n),fract(float(i)*rcp(GOLDEN_RATIO)));}
vec2 SampleDiskGolden(int i,int sampleCount)
{vec2 f=Golden2dSeq(i,float(sampleCount));return vec2(sqrt(f.x),TWO_PI*f.y);}`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const fibonacci = {
    name,
    shader
}; //# sourceMappingURL=fibonacci.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/diffusionProfile.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "diffusionProfile",
    ()=>diffusionProfile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "diffusionProfile";
const shader = `uniform vec3 diffusionS[5];uniform float diffusionD[5];uniform float filterRadii[5];`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const diffusionProfile = {
    name,
    shader
}; //# sourceMappingURL=diffusionProfile.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/boundingBoxRendererFragmentDeclaration.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "boundingBoxRendererFragmentDeclaration",
    ()=>boundingBoxRendererFragmentDeclaration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "boundingBoxRendererFragmentDeclaration";
const shader = `uniform vec4 color;
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const boundingBoxRendererFragmentDeclaration = {
    name,
    shader
}; //# sourceMappingURL=boundingBoxRendererFragmentDeclaration.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/boundingBoxRendererUboDeclaration.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "boundingBoxRendererUboDeclaration",
    ()=>boundingBoxRendererUboDeclaration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "boundingBoxRendererUboDeclaration";
const shader = `#ifdef WEBGL2
uniform vec4 color;uniform mat4 world;uniform mat4 viewProjection;
#ifdef MULTIVIEW
uniform mat4 viewProjectionR;
#endif
#else
layout(std140,column_major) uniform;uniform BoundingBoxRenderer {vec4 color;mat4 world;mat4 viewProjection;mat4 viewProjectionR;};
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const boundingBoxRendererUboDeclaration = {
    name,
    shader
}; //# sourceMappingURL=boundingBoxRendererUboDeclaration.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/boundingBoxRendererVertexDeclaration.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "boundingBoxRendererVertexDeclaration",
    ()=>boundingBoxRendererVertexDeclaration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "boundingBoxRendererVertexDeclaration";
const shader = `uniform mat4 world;uniform mat4 viewProjection;
#ifdef MULTIVIEW
uniform mat4 viewProjectionR;
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const boundingBoxRendererVertexDeclaration = {
    name,
    shader
}; //# sourceMappingURL=boundingBoxRendererVertexDeclaration.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/lineVertexDeclaration.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "lineVertexDeclaration",
    ()=>lineVertexDeclaration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "lineVertexDeclaration";
const shader = `uniform mat4 viewProjection;
#define ADDITIONAL_VERTEX_DECLARATION
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const lineVertexDeclaration = {
    name,
    shader
}; //# sourceMappingURL=lineVertexDeclaration.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/lineUboDeclaration.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "lineUboDeclaration",
    ()=>lineUboDeclaration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$sceneUboDeclaration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/sceneUboDeclaration.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$ShadersInclude$2f$meshUboDeclaration$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/meshUboDeclaration.js [app-ssr] (ecmascript)");
;
;
;
const name = "lineUboDeclaration";
const shader = `layout(std140,column_major) uniform;
#include<sceneUboDeclaration>
#include<meshUboDeclaration>
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const lineUboDeclaration = {
    name,
    shader
}; //# sourceMappingURL=lineUboDeclaration.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/imageProcessingCompatibility.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "imageProcessingCompatibility",
    ()=>imageProcessingCompatibility
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "imageProcessingCompatibility";
const shader = `#ifdef IMAGEPROCESSINGPOSTPROCESS
gl_FragColor.rgb=pow(gl_FragColor.rgb,vec3(2.2));
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const imageProcessingCompatibility = {
    name,
    shader
}; //# sourceMappingURL=imageProcessingCompatibility.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/ShadersInclude/sceneFragmentDeclaration.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "sceneFragmentDeclaration",
    ()=>sceneFragmentDeclaration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-ssr] (ecmascript)");
;
const name = "sceneFragmentDeclaration";
const shader = `uniform mat4 viewProjection;
#ifdef MULTIVIEW
uniform mat4 viewProjectionR;
#endif
uniform mat4 view;uniform mat4 projection;uniform vec4 vEyePosition;
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderStore"].IncludesShadersStore[name] = shader;
}
const sceneFragmentDeclaration = {
    name,
    shader
}; //# sourceMappingURL=sceneFragmentDeclaration.js.map
}),
];

//# sourceMappingURL=dcdbf_%40babylonjs_core_Shaders_ShadersInclude_9ecec0aa._.js.map