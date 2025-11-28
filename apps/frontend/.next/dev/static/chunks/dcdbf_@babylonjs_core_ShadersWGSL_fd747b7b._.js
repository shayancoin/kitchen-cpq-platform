(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/minmaxRedux.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "minmaxReduxPixelShaderWGSL",
    ()=>minmaxReduxPixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
;
const name = "minmaxReduxPixelShader";
const shader = `varying vUV: vec2f;var textureSampler: texture_2d<f32>;
#if defined(INITIAL)
uniform texSize: vec2f;@fragment
fn main(input: FragmentInputs)->FragmentOutputs {let coord=vec2i(fragmentInputs.vUV*(uniforms.texSize-1.0));let f1=textureLoad(textureSampler,coord,0).r;let f2=textureLoad(textureSampler,coord+vec2i(1,0),0).r;let f3=textureLoad(textureSampler,coord+vec2i(1,1),0).r;let f4=textureLoad(textureSampler,coord+vec2i(0,1),0).r;
#ifdef DEPTH_REDUX
#ifdef VIEW_DEPTH
var minz=3.4e38;if (f1 != 0.0) { minz=f1; }
if (f2 != 0.0) { minz=min(minz,f2); }
if (f3 != 0.0) { minz=min(minz,f3); }
if (f4 != 0.0) { minz=min(minz,f4); }
let maxz=max(max(max(f1,f2),f3),f4);
#else
let minz=min(min(min(f1,f2),f3),f4);let maxz=max(max(max(sign(1.0-f1)*f1,sign(1.0-f2)*f2),sign(1.0-f3)*f3),sign(1.0-f4)*f4);
#endif
#else
let minz=min(min(min(f1,f2),f3),f4);let maxz=max(max(max(f1,f2),f3),f4);
#endif
fragmentOutputs.color=vec4f(minz,maxz,0.,0.);}
#elif defined(MAIN)
uniform texSize: vec2f;@fragment
fn main(input: FragmentInputs)->FragmentOutputs {let coord=vec2i(fragmentInputs.vUV*(uniforms.texSize-1.0));let f1=textureLoad(textureSampler,coord,0).rg;let f2=textureLoad(textureSampler,coord+vec2i(1,0),0).rg;let f3=textureLoad(textureSampler,coord+vec2i(1,1),0).rg;let f4=textureLoad(textureSampler,coord+vec2i(0,1),0).rg;let minz=min(min(min(f1.x,f2.x),f3.x),f4.x);let maxz=max(max(max(f1.y,f2.y),f3.y),f4.y);fragmentOutputs.color=vec4(minz,maxz,0.,0.);}
#elif defined(ONEBEFORELAST)
uniform texSize: vec2i;@fragment
fn main(input: FragmentInputs)->FragmentOutputs {let coord=vec2i(fragmentInputs.vUV*vec2f(uniforms.texSize-1));let f1=textureLoad(textureSampler,coord % uniforms.texSize,0).rg;let f2=textureLoad(textureSampler,(coord+vec2i(1,0)) % uniforms.texSize,0).rg;let f3=textureLoad(textureSampler,(coord+vec2i(1,1)) % uniforms.texSize,0).rg;let f4=textureLoad(textureSampler,(coord+vec2i(0,1)) % uniforms.texSize,0).rg;let minz=min(min(min(f1.x,f2.x),f3.x),f4.x);let maxz=max(max(max(f1.y,f2.y),f3.y),f4.y);fragmentOutputs.color=vec4(minz,maxz,0.,0.);}
#elif defined(LAST)
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=vec4f(0.);if (true) { 
discard;}}
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const minmaxReduxPixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=minmaxRedux.fragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/picking.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "pickingPixelShaderWGSL",
    ()=>pickingPixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
;
const name = "pickingPixelShader";
const shader = `#if defined(INSTANCES)
flat varying vMeshID: f32;
#else
uniform meshID: f32;
#endif
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var id: i32;
#if defined(INSTANCES)
id=i32(input.vMeshID);
#else
id=i32(uniforms.meshID);
#endif
var color=vec3f(
f32((id>>16) & 0xFF),
f32((id>>8) & 0xFF),
f32(id & 0xFF),
)/255.0;fragmentOutputs.color=vec4f(color,1.0);}
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const pickingPixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=picking.fragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/picking.vertex.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "pickingVertexShaderWGSL",
    ()=>pickingVertexShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$bonesDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/bonesDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$bakedVertexAnimationDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/bakedVertexAnimationDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$morphTargetsVertexGlobalDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/morphTargetsVertexGlobalDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$morphTargetsVertexDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/morphTargetsVertexDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$instancesDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/instancesDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$morphTargetsVertexGlobal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/morphTargetsVertexGlobal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$morphTargetsVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/morphTargetsVertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$instancesVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/instancesVertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$bonesVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/bonesVertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$bakedVertexAnimation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/bakedVertexAnimation.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
const name = "pickingVertexShader";
const shader = `attribute position: vec3f;
#if defined(INSTANCES)
attribute instanceMeshID: f32;
#endif
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]
#include<instancesDeclaration>
uniform viewProjection: mat4x4f;
#if defined(INSTANCES)
flat varying vMeshID: f32;
#endif
@vertex
fn main(input : VertexInputs)->FragmentInputs {
#include<morphTargetsVertexGlobal>
#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
var worldPos: vec4f=finalWorld*vec4f(input.position,1.0);vertexOutputs.position=uniforms.viewProjection*worldPos;
#if defined(INSTANCES)
vertexOutputs.vMeshID=input.instanceMeshID;
#endif
}
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const pickingVertexShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=picking.vertex.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/boundingInfo.compute.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "boundingInfoComputeShaderWGSL",
    ()=>boundingInfoComputeShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
;
const name = "boundingInfoComputeShader";
const shader = `struct Results {minX : atomic<i32>,
minY : atomic<i32>,
minZ : atomic<i32>,
maxX : atomic<i32>,
maxY : atomic<i32>,
maxZ : atomic<i32>,
dummy1 : i32,
dummy2 : i32,};fn floatToBits(value: f32)->i32 {return bitcast<i32>(value);}
fn bitsToFloat(value: i32)->f32 {return bitcast<f32>(value);}
fn atomicMinFloat(atomicVar: ptr<storage,atomic<i32>,read_write>,value: f32) {let intValue=floatToBits(value);loop {let oldIntValue=atomicLoad(atomicVar);let oldValue=bitsToFloat(oldIntValue);if (value>=oldValue) {break;}
if (atomicCompareExchangeWeak(atomicVar,oldIntValue,intValue).old_value==oldIntValue) {break;}}}
fn atomicMaxFloat(atomicVar: ptr<storage,atomic<i32>,read_write>,value: f32) {let intValue=floatToBits(value);loop {let oldIntValue=atomicLoad(atomicVar);let oldValue=bitsToFloat(oldIntValue);if (value<=oldValue) {break;}
if (atomicCompareExchangeWeak(atomicVar,oldIntValue,intValue).old_value==oldIntValue) {break;}}}
fn readMatrixFromRawSampler(smp : texture_2d<f32>,index : f32)->mat4x4<f32>
{let offset=i32(index) *4; 
let m0=textureLoad(smp,vec2<i32>(offset+0,0),0);let m1=textureLoad(smp,vec2<i32>(offset+1,0),0);let m2=textureLoad(smp,vec2<i32>(offset+2,0),0);let m3=textureLoad(smp,vec2<i32>(offset+3,0),0);return mat4x4<f32>(m0,m1,m2,m3);}
const identity=mat4x4f(
vec4f(1.0,0.0,0.0,0.0),
vec4f(0.0,1.0,0.0,0.0),
vec4f(0.0,0.0,1.0,0.0),
vec4f(0.0,0.0,0.0,1.0)
);struct Settings {morphTargetTextureInfo: vec3f,
morphTargetCount: f32,
indexResult : u32,};@group(0) @binding(0) var<storage,read> positionBuffer : array<f32>;@group(0) @binding(1) var<storage,read_write> resultBuffer : array<Results>;@group(0) @binding(7) var<uniform> settings : Settings;
#if NUM_BONE_INFLUENCERS>0
@group(0) @binding(2) var boneSampler : texture_2d<f32>;@group(0) @binding(3) var<storage,read> indexBuffer : array<vec4f>;@group(0) @binding(4) var<storage,read> weightBuffer : array<vec4f>;
#if NUM_BONE_INFLUENCERS>4
@group(0) @binding(5) var<storage,read> indexExtraBuffer : array<vec4f>;@group(0) @binding(6) var<storage,read> weightExtraBuffer : array<vec4f>;
#endif
#endif
#ifdef MORPHTARGETS
@group(0) @binding(8) var morphTargets : texture_2d_array<f32>;@group(0) @binding(9) var<storage,read> morphTargetInfluences : array<f32>;@group(0) @binding(10) var<storage,read> morphTargetTextureIndices : array<f32>;
#endif
#ifdef MORPHTARGETS
fn readVector3FromRawSampler(targetIndex : i32,vertexIndex : u32)->vec3f
{ 
let vertexID=f32(vertexIndex)*settings.morphTargetTextureInfo.x;let y=floor(vertexID/settings.morphTargetTextureInfo.y);let x=vertexID-y*settings.morphTargetTextureInfo.y;let textureUV=vec2<i32>(i32(x),i32(y));return textureLoad(morphTargets,textureUV,i32(morphTargetTextureIndices[targetIndex]),0).xyz;}
fn readVector4FromRawSampler(targetIndex : i32,vertexIndex : u32)->vec4f
{ 
let vertexID=f32(vertexIndex)*settings.morphTargetTextureInfo.x;let y=floor(vertexID/settings.morphTargetTextureInfo.y);let x=vertexID-y*settings.morphTargetTextureInfo.y;let textureUV=vec2<i32>(i32(x),i32(y));return textureLoad(morphTargets,textureUV,i32(morphTargetTextureIndices[targetIndex]),0);}
#endif
@compute @workgroup_size(256,1,1)
fn main(@builtin(global_invocation_id) global_id : vec3<u32>) {let index=global_id.x;if (index>=arrayLength(&positionBuffer)/3) {return;}
let position=vec3f(positionBuffer[index*3],positionBuffer[index*3+1],positionBuffer[index*3+2]);var finalWorld=identity;var positionUpdated=position;
#if NUM_BONE_INFLUENCERS>0
var influence : mat4x4<f32>;let matricesIndices=indexBuffer[index];let matricesWeights=weightBuffer[index];influence=readMatrixFromRawSampler(boneSampler,matricesIndices[0])*matricesWeights[0];
#if NUM_BONE_INFLUENCERS>1
influence=influence+readMatrixFromRawSampler(boneSampler,matricesIndices[1])*matricesWeights[1];
#endif 
#if NUM_BONE_INFLUENCERS>2
influence=influence+readMatrixFromRawSampler(boneSampler,matricesIndices[2])*matricesWeights[2];
#endif 
#if NUM_BONE_INFLUENCERS>3
influence=influence+readMatrixFromRawSampler(boneSampler,matricesIndices[3])*matricesWeights[3];
#endif 
#if NUM_BONE_INFLUENCERS>4
let matricesIndicesExtra=indexExtraBuffer[index];let matricesWeightsExtra=weightExtraBuffer[index];influence=influence+readMatrixFromRawSampler(boneSampler,matricesIndicesExtra.x)*matricesWeightsExtra.x;
#if NUM_BONE_INFLUENCERS>5
influence=influence+readMatrixFromRawSampler(boneSampler,matricesIndicesExtra.y)*matricesWeightsExtra.y;
#endif 
#if NUM_BONE_INFLUENCERS>6
influence=influence+readMatrixFromRawSampler(boneSampler,matricesIndicesExtra.z)*matricesWeightsExtra.z;
#endif 
#if NUM_BONE_INFLUENCERS>7
influence=influence+readMatrixFromRawSampler(boneSampler,matricesIndicesExtra.w)*matricesWeightsExtra.w;
#endif 
#endif 
finalWorld=finalWorld*influence;
#endif
#ifdef MORPHTARGETS
for (var i=0; i<NUM_MORPH_INFLUENCERS; i=i+1) {if (f32(i)>=settings.morphTargetCount) {break;}
positionUpdated=positionUpdated+(readVector3FromRawSampler(i,index)-position)*morphTargetInfluences[i];}
#endif
var worldPos=finalWorld*vec4f(positionUpdated.x,positionUpdated.y,positionUpdated.z,1.0);atomicMinFloat(&resultBuffer[settings.indexResult].minX,worldPos.x);atomicMinFloat(&resultBuffer[settings.indexResult].minY,worldPos.y);atomicMinFloat(&resultBuffer[settings.indexResult].minZ,worldPos.z);atomicMaxFloat(&resultBuffer[settings.indexResult].maxX,worldPos.x);atomicMaxFloat(&resultBuffer[settings.indexResult].maxY,worldPos.y);atomicMaxFloat(&resultBuffer[settings.indexResult].maxZ,worldPos.z);}
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const boundingInfoComputeShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=boundingInfo.compute.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/clearQuad.vertex.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "clearQuadVertexShaderWGSL",
    ()=>clearQuadVertexShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
;
const name = "clearQuadVertexShader";
const shader = `uniform depthValue: f32;const pos=array(
vec2f(-1.0,1.0),
vec2f(1.0,1.0),
vec2f(-1.0,-1.0),
vec2f(1.0,-1.0)
);
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {
#define CUSTOM_VERTEX_MAIN_BEGIN
vertexOutputs.position=vec4f(pos[input.vertexIndex],uniforms.depthValue,1.0);
#define CUSTOM_VERTEX_MAIN_END
}
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const clearQuadVertexShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=clearQuad.vertex.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/clearQuad.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "clearQuadPixelShaderWGSL",
    ()=>clearQuadPixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
;
const name = "clearQuadPixelShader";
const shader = `uniform color: vec4f;@fragment
fn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=uniforms.color;}
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const clearQuadPixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=clearQuad.fragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/glowMapGeneration.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "glowMapGenerationPixelShaderWGSL",
    ()=>glowMapGenerationPixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$helperFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/helperFunctions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$clipPlaneFragmentDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/clipPlaneFragmentDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$clipPlaneFragment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/clipPlaneFragment.js [app-client] (ecmascript)");
;
;
;
;
const name = "glowMapGenerationPixelShader";
const shader = `#if defined(DIFFUSE_ISLINEAR) || defined(EMISSIVE_ISLINEAR)
#include<helperFunctions>
#endif
#ifdef DIFFUSE
varying vUVDiffuse: vec2f;var diffuseSamplerSampler: sampler;var diffuseSampler: texture_2d<f32>;
#endif
#ifdef OPACITY
varying vUVOpacity: vec2f;var opacitySamplerSampler: sampler;var opacitySampler: texture_2d<f32>;uniform opacityIntensity: f32;
#endif
#ifdef EMISSIVE
varying vUVEmissive: vec2f;var emissiveSamplerSampler: sampler;var emissiveSampler: texture_2d<f32>;
#endif
#ifdef VERTEXALPHA
varying vColor: vec4f;
#endif
uniform glowColor: vec4f;uniform glowIntensity: f32;
#include<clipPlaneFragmentDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#include<clipPlaneFragment>
var finalColor: vec4f=uniforms.glowColor;
#ifdef DIFFUSE
var albedoTexture: vec4f=textureSample(diffuseSampler,diffuseSamplerSampler,fragmentInputs.vUVDiffuse);
#ifdef DIFFUSE_ISLINEAR
albedoTexture=toGammaSpace(albedoTexture);
#endif
#ifdef GLOW
finalColor=vec4f(finalColor.rgb,finalColor.a*albedoTexture.a);
#endif
#ifdef HIGHLIGHT
finalColor=vec4f(finalColor.rgb,albedoTexture.a);
#endif
#endif
#ifdef OPACITY
var opacityMap: vec4f=textureSample(opacitySampler,opacitySamplerSampler,fragmentInputs.vUVOpacity);
#ifdef OPACITYRGB
finalColor=vec4f(finalColor.rgb,finalColor.a*getLuminance(opacityMap.rgb));
#else
finalColor=vec4f(finalColor.rgb,finalColor.a*opacityMap.a);
#endif
finalColor=vec4f(finalColor.rgb,finalColor.a*uniforms.opacityIntensity);
#endif
#ifdef VERTEXALPHA
finalColor=vec4f(finalColor.rgb,finalColor.a*fragmentInputs.vColor.a);
#endif
#ifdef ALPHATEST
if (finalColor.a<ALPHATESTVALUE) {discard;}
#endif
#ifdef EMISSIVE
var emissive: vec4f=textureSample(emissiveSampler,emissiveSamplerSampler,fragmentInputs.vUVEmissive);
#ifdef EMISSIVE_ISLINEAR
emissive=toGammaSpace(emissive);
#endif
fragmentOutputs.color=emissive*finalColor*uniforms.glowIntensity;
#else
fragmentOutputs.color=finalColor*uniforms.glowIntensity;
#endif
#ifdef HIGHLIGHT
fragmentOutputs.color=vec4f(fragmentOutputs.color.rgb,uniforms.glowColor.a);
#endif
}
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const glowMapGenerationPixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=glowMapGeneration.fragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/glowMapGeneration.vertex.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "glowMapGenerationVertexShaderWGSL",
    ()=>glowMapGenerationVertexShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$bonesDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/bonesDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$bakedVertexAnimationDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/bakedVertexAnimationDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$morphTargetsVertexGlobalDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/morphTargetsVertexGlobalDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$morphTargetsVertexDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/morphTargetsVertexDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$clipPlaneVertexDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/clipPlaneVertexDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$instancesDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/instancesDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$morphTargetsVertexGlobal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/morphTargetsVertexGlobal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$morphTargetsVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/morphTargetsVertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$instancesVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/instancesVertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$bonesVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/bonesVertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$bakedVertexAnimation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/bakedVertexAnimation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$clipPlaneVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/clipPlaneVertex.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
const name = "glowMapGenerationVertexShader";
const shader = `attribute position: vec3f;
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]
#include<clipPlaneVertexDeclaration>
#include<instancesDeclaration>
uniform viewProjection: mat4x4f;varying vPosition: vec4f;
#ifdef UV1
attribute uv: vec2f;
#endif
#ifdef UV2
attribute uv2: vec2f;
#endif
#ifdef DIFFUSE
varying vUVDiffuse: vec2f;uniform diffuseMatrix: mat4x4f;
#endif
#ifdef OPACITY
varying vUVOpacity: vec2f;uniform opacityMatrix: mat4x4f;
#endif
#ifdef EMISSIVE
varying vUVEmissive: vec2f;uniform emissiveMatrix: mat4x4f;
#endif
#ifdef VERTEXALPHA
attribute color: vec4f;varying vColor: vec4f;
#endif
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {var positionUpdated: vec3f=input.position;
#ifdef UV1
var uvUpdated: vec2f=input.uv;
#endif
#ifdef UV2
var uv2Updated: vec2f=input.uv2;
#endif
#include<morphTargetsVertexGlobal>
#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
var worldPos: vec4f=finalWorld* vec4f(positionUpdated,1.0);
#ifdef CUBEMAP
vertexOutputs.vPosition=worldPos;vertexOutputs.position=uniforms.viewProjection*finalWorld* vec4f(input.position,1.0);
#else
vertexOutputs.vPosition=uniforms.viewProjection*worldPos;vertexOutputs.position=vertexOutputs.vPosition;
#endif
#ifdef DIFFUSE
#ifdef DIFFUSEUV1
vertexOutputs.vUVDiffuse= (uniforms.diffuseMatrix* vec4f(uvUpdated,1.0,0.0)).xy;
#endif
#ifdef DIFFUSEUV2
vertexOutputs.vUVDiffuse= (uniforms.diffuseMatrix* vec4f(uv2Updated,1.0,0.0)).xy;
#endif
#endif
#ifdef OPACITY
#ifdef OPACITYUV1
vertexOutputs.vUVOpacity= (uniforms.opacityMatrix* vec4f(uvUpdated,1.0,0.0)).xy;
#endif
#ifdef OPACITYUV2
vertexOutputs.vUVOpacity= (uniforms.opacityMatrix* vec4f(uv2Updated,1.0,0.0)).xy;
#endif
#endif
#ifdef EMISSIVE
#ifdef EMISSIVEUV1
vertexOutputs.vUVEmissive= (uniforms.emissiveMatrix* vec4f(uvUpdated,1.0,0.0)).xy;
#endif
#ifdef EMISSIVEUV2
vertexOutputs.vUVEmissive= (uniforms.emissiveMatrix* vec4f(uv2Updated,1.0,0.0)).xy;
#endif
#endif
#ifdef VERTEXALPHA
vertexOutputs.vColor=vertexInputs.color;
#endif
#include<clipPlaneVertex>
}`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const glowMapGenerationVertexShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=glowMapGeneration.vertex.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/glowMapMerge.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "glowMapMergePixelShaderWGSL",
    ()=>glowMapMergePixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
;
const name = "glowMapMergePixelShader";
const shader = `varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;
#ifdef EMISSIVE
var textureSampler2Sampler: sampler;var textureSampler2: texture_2d<f32>;
#endif
uniform offset: f32;
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
var baseColor: vec4f=textureSample(textureSampler,textureSamplerSampler,input.vUV);
#ifdef EMISSIVE
baseColor+=textureSample(textureSampler2,textureSampler2Sampler,input.vUV);baseColor*=uniforms.offset;
#else
baseColor=vec4f(baseColor.rgb,abs(uniforms.offset-baseColor.a));
#ifdef STROKE
var alpha: f32=smoothstep(.0,.1,baseColor.a);baseColor=vec4f(baseColor.rgb*alpha,alpha);
#endif
#endif
#if LDR
baseColor=clamp(baseColor,vec4f(0.),vec4f(1.0));
#endif
fragmentOutputs.color=baseColor;
#define CUSTOM_FRAGMENT_MAIN_END
}
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const glowMapMergePixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=glowMapMerge.fragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/glowMapMerge.vertex.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "glowMapMergeVertexShaderWGSL",
    ()=>glowMapMergeVertexShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
;
const name = "glowMapMergeVertexShader";
const shader = `attribute position: vec2f;varying vUV: vec2f;
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {const madd: vec2f= vec2f(0.5,0.5);
#define CUSTOM_VERTEX_MAIN_BEGIN
vertexOutputs.vUV=input.position*madd+madd;vertexOutputs.position= vec4f(input.position,0.0,1.0);
#define CUSTOM_VERTEX_MAIN_END
}`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const glowMapMergeVertexShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=glowMapMerge.vertex.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/glowBlurPostProcess.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "glowBlurPostProcessPixelShaderWGSL",
    ()=>glowBlurPostProcessPixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
;
const name = "glowBlurPostProcessPixelShader";
const shader = `varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;uniform screenSize: vec2f;uniform direction: vec2f;uniform blurWidth: f32;fn getLuminance(color: vec3f)->f32
{return dot(color, vec3f(0.2126,0.7152,0.0722));}
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var weights: array<f32 ,7>;weights[0]=0.05;weights[1]=0.1;weights[2]=0.2;weights[3]=0.3;weights[4]=0.2;weights[5]=0.1;weights[6]=0.05;var texelSize: vec2f= vec2f(1.0/uniforms.screenSize.x,1.0/uniforms.screenSize.y);var texelStep: vec2f=texelSize*uniforms.direction*uniforms.blurWidth;var start: vec2f=input.vUV-3.0*texelStep;var baseColor: vec4f= vec4f(0.,0.,0.,0.);var texelOffset: vec2f= vec2f(0.,0.);for (var i: i32=0; i<7; i++)
{var texel: vec4f=textureSample(textureSampler,textureSamplerSampler,start+texelOffset);baseColor=vec4f(baseColor.rgb,baseColor.a+texel.a*weights[i]);var luminance: f32=getLuminance(baseColor.rgb);var luminanceTexel: f32=getLuminance(texel.rgb);var choice: f32=step(luminanceTexel,luminance);baseColor=vec4f(choice*baseColor.rgb+(1.0-choice)*texel.rgb,baseColor.a);texelOffset+=texelStep;}
fragmentOutputs.color=baseColor;}`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const glowBlurPostProcessPixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=glowBlurPostProcess.fragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/layer.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "layerPixelShaderWGSL",
    ()=>layerPixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$helperFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/helperFunctions.js [app-client] (ecmascript)");
;
;
const name = "layerPixelShader";
const shader = `varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;uniform color: vec4f;
#include<helperFunctions>
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
var baseColor: vec4f=textureSample(textureSampler,textureSamplerSampler,input.vUV);
#if defined(CONVERT_TO_GAMMA)
baseColor=toGammaSpace(baseColor);
#elif defined(CONVERT_TO_LINEAR)
baseColor=toLinearSpaceVec4(baseColor);
#endif
#ifdef ALPHATEST
if (baseColor.a<0.4) {discard;}
#endif
fragmentOutputs.color=baseColor*uniforms.color;
#define CUSTOM_FRAGMENT_MAIN_END
}`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const layerPixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=layer.fragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/layer.vertex.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "layerVertexShaderWGSL",
    ()=>layerVertexShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
;
const name = "layerVertexShader";
const shader = `attribute position: vec2f;uniform scale: vec2f;uniform offset: vec2f;uniform textureMatrix: mat4x4f;varying vUV: vec2f;const madd: vec2f= vec2f(0.5,0.5);
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {
#define CUSTOM_VERTEX_MAIN_BEGIN
var shiftedPosition: vec2f=input.position*uniforms.scale+uniforms.offset;vertexOutputs.vUV=(uniforms.textureMatrix* vec4f(shiftedPosition*madd+madd,1.0,0.0)).xy;vertexOutputs.position= vec4f(shiftedPosition,0.0,1.0);
#define CUSTOM_VERTEX_MAIN_END
}`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const layerVertexShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=layer.vertex.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/lensFlare.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "lensFlarePixelShaderWGSL",
    ()=>lensFlarePixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
;
const name = "lensFlarePixelShader";
const shader = `varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;uniform color: vec4f;
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
var baseColor: vec4f=textureSample(textureSampler,textureSamplerSampler,input.vUV);fragmentOutputs.color=baseColor*uniforms.color;
#define CUSTOM_FRAGMENT_MAIN_END
}`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const lensFlarePixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=lensFlare.fragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/lensFlare.vertex.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "lensFlareVertexShaderWGSL",
    ()=>lensFlareVertexShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
;
const name = "lensFlareVertexShader";
const shader = `attribute position: vec2f;uniform viewportMatrix: mat4x4f;varying vUV: vec2f;const madd: vec2f= vec2f(0.5,0.5);
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {
#define CUSTOM_VERTEX_MAIN_BEGIN
vertexOutputs.vUV=input.position*madd+madd;vertexOutputs.position=uniforms.viewportMatrix* vec4f(input.position,0.0,1.0);
#define CUSTOM_VERTEX_MAIN_END
}`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const lensFlareVertexShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=lensFlare.vertex.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/shadowMap.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "shadowMapPixelShaderWGSL",
    ()=>shadowMapPixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$shadowMapFragmentExtraDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/shadowMapFragmentExtraDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$clipPlaneFragmentDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/clipPlaneFragmentDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$clipPlaneFragment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/clipPlaneFragment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$shadowMapFragment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/shadowMapFragment.js [app-client] (ecmascript)");
;
;
;
;
;
const name = "shadowMapPixelShader";
const shader = `#include<shadowMapFragmentExtraDeclaration>
#ifdef ALPHATEXTURE
varying vUV: vec2f;var diffuseSamplerSampler: sampler;var diffuseSampler: texture_2d<f32>;
#endif
#include<clipPlaneFragmentDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#include<clipPlaneFragment>
#ifdef ALPHATEXTURE
var opacityMap: vec4f=textureSample(diffuseSampler,diffuseSamplerSampler,fragmentInputs.vUV);var alphaFromAlphaTexture: f32=opacityMap.a;
#if SM_SOFTTRANSPARENTSHADOW==1
if (uniforms.softTransparentShadowSM.y==1.0) {opacityMap=vec4f(opacityMap.rgb* vec3f(0.3,0.59,0.11),opacityMap.a);alphaFromAlphaTexture=opacityMap.x+opacityMap.y+opacityMap.z;}
#endif
#ifdef ALPHATESTVALUE
if (alphaFromAlphaTexture<ALPHATESTVALUE) {discard;}
#endif
#endif
#if SM_SOFTTRANSPARENTSHADOW==1
#ifdef ALPHATEXTURE
if ((bayerDither8(floor(((fragmentInputs.position.xy)%(8.0)))))/64.0>=uniforms.softTransparentShadowSM.x*alphaFromAlphaTexture) {discard;}
#else
if ((bayerDither8(floor(((fragmentInputs.position.xy)%(8.0)))))/64.0>=uniforms.softTransparentShadowSM.x) {discard;} 
#endif
#endif
#include<shadowMapFragment>
}`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const shadowMapPixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=shadowMap.fragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/shadowMap.vertex.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "shadowMapVertexShaderWGSL",
    ()=>shadowMapVertexShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$bonesDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/bonesDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$bakedVertexAnimationDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/bakedVertexAnimationDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$morphTargetsVertexGlobalDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/morphTargetsVertexGlobalDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$morphTargetsVertexDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/morphTargetsVertexDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$helperFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/helperFunctions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$sceneUboDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/sceneUboDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$meshUboDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/meshUboDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$shadowMapVertexExtraDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/shadowMapVertexExtraDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$clipPlaneVertexDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/clipPlaneVertexDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$morphTargetsVertexGlobal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/morphTargetsVertexGlobal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$morphTargetsVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/morphTargetsVertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$instancesVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/instancesVertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$bonesVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/bonesVertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$bakedVertexAnimation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/bakedVertexAnimation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$shadowMapVertexNormalBias$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/shadowMapVertexNormalBias.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$shadowMapVertexMetric$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/shadowMapVertexMetric.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$clipPlaneVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/clipPlaneVertex.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const name = "shadowMapVertexShader";
const shader = `attribute position: vec3f;
#ifdef NORMAL
attribute normal: vec3f;
#endif
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]
#ifdef INSTANCES
attribute world0: vec4f;attribute world1: vec4f;attribute world2: vec4f;attribute world3: vec4f;
#endif
#include<helperFunctions>
#include<sceneUboDeclaration>
#include<meshUboDeclaration>
#ifdef ALPHATEXTURE
varying vUV: vec2f;uniform diffuseMatrix: mat4x4f;
#ifdef UV1
attribute uv: vec2f;
#endif
#ifdef UV2
attribute uv2: vec2f;
#endif
#endif
#include<shadowMapVertexExtraDeclaration>
#include<clipPlaneVertexDeclaration>
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {var positionUpdated: vec3f=input.position;
#ifdef UV1
var uvUpdated: vec2f=input.uv;
#endif
#ifdef UV2
var uv2Updated: vec2f=input.uv2;
#endif
#ifdef NORMAL
var normalUpdated: vec3f=input.normal;
#endif
#include<morphTargetsVertexGlobal>
#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
var worldPos: vec4f=finalWorld* vec4f(positionUpdated,1.0);
#ifdef NORMAL
var normWorldSM: mat3x3f= mat3x3f(finalWorld[0].xyz,finalWorld[1].xyz,finalWorld[2].xyz);
#if defined(INSTANCES) && defined(THIN_INSTANCES)
var vNormalW: vec3f=normalUpdated/ vec3f(dot(normWorldSM[0],normWorldSM[0]),dot(normWorldSM[1],normWorldSM[1]),dot(normWorldSM[2],normWorldSM[2]));vNormalW=normalize(normWorldSM*vNormalW);
#else
#ifdef NONUNIFORMSCALING
normWorldSM=transposeMat3(inverseMat3(normWorldSM));
#endif
var vNormalW: vec3f=normalize(normWorldSM*normalUpdated);
#endif
#endif
#include<shadowMapVertexNormalBias>
vertexOutputs.position=scene.viewProjection*worldPos;
#include<shadowMapVertexMetric>
#ifdef ALPHATEXTURE
#ifdef UV1
vertexOutputs.vUV= (uniforms.diffuseMatrix* vec4f(uvUpdated,1.0,0.0)).xy;
#endif
#ifdef UV2
vertexOutputs.vUV= (uniforms.diffuseMatrix* vec4f(uv2Updated,1.0,0.0)).xy;
#endif
#endif
#include<clipPlaneVertex>
}`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const shadowMapVertexShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=shadowMap.vertex.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/depthBoxBlur.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "depthBoxBlurPixelShaderWGSL",
    ()=>depthBoxBlurPixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
;
const name = "depthBoxBlurPixelShader";
const shader = `varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;uniform screenSize: vec2f;
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var colorDepth: vec4f=vec4f(0.0);for (var x: i32=-OFFSET; x<=OFFSET; x++) {for (var y: i32=-OFFSET; y<=OFFSET; y++) {colorDepth+=textureSample(textureSampler,textureSamplerSampler,input.vUV+ vec2f(f32(x),f32(y))/uniforms.screenSize);}}
fragmentOutputs.color=(colorDepth/ f32((OFFSET*2+1)*(OFFSET*2+1)));}`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const depthBoxBlurPixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=depthBoxBlur.fragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/lightProxy.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "lightProxyPixelShaderWGSL",
    ()=>lightProxyPixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
;
const name = "lightProxyPixelShader";
const shader = `flat varying vOffset: u32;flat varying vMask: u32;uniform tileMaskResolution: vec3f;var<storage,read_write> tileMaskBuffer: array<atomic<u32>>;@fragment
fn main(input: FragmentInputs)->FragmentOutputs {let maskResolution=vec2u(uniforms.tileMaskResolution.yz);let tilePosition=vec2u(fragmentInputs.position.xy);let tileIndex=(tilePosition.x*maskResolution.x+tilePosition.y)*maskResolution.y+fragmentInputs.vOffset;atomicOr(&tileMaskBuffer[tileIndex],fragmentInputs.vMask);}
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const lightProxyPixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=lightProxy.fragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/lightProxy.vertex.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "lightProxyVertexShaderWGSL",
    ()=>lightProxyVertexShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$sceneUboDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/sceneUboDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$clusteredLightingFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/clusteredLightingFunctions.js [app-client] (ecmascript)");
;
;
;
const name = "lightProxyVertexShader";
const shader = `attribute position: vec3f;flat varying vOffset: u32;flat varying vMask: u32;
#include<sceneUboDeclaration>
var lightDataTexture: texture_2d<f32>;uniform tileMaskResolution: vec3f;uniform halfTileRes: vec2f;
#include<clusteredLightingFunctions>
@vertex
fn main(input: VertexInputs)->FragmentInputs {let light=getClusteredLight(lightDataTexture,vertexInputs.instanceIndex);let range=light.vLightFalloff.x;let viewPosition=scene.view*vec4f(light.vLightData.xyz,1);let viewPositionSq=viewPosition*viewPosition;let distSq=viewPositionSq.xy+viewPositionSq.z;let sinSq=(range*range)/distSq;let cosSq=max(1.0-sinSq,vec2f(0.01));let sinCos=vertexInputs.position.xy*sqrt(sinSq*cosSq);let rotatedX=mat2x2f(cosSq.x,-sinCos.x,sinCos.x,cosSq.x)*viewPosition.xz;let rotatedY=mat2x2f(cosSq.y,-sinCos.y,sinCos.y,cosSq.y)*viewPosition.yz;let projX=scene.projection*vec4f(rotatedX.x,0,rotatedX.y,1);let projY=scene.projection*vec4f(0,rotatedY.x,rotatedY.y,1);var projPosition=vec2f(projX.x/max(projX.w,0.01),projY.y/max(projY.w,0.01));projPosition=select(vertexInputs.position.xy,projPosition,cosSq>vec2(0.01));let halfTileRes=uniforms.tileMaskResolution.xy/2.0;var tilePosition=(projPosition+1.0)*halfTileRes;tilePosition=select(floor(tilePosition)-0.01,ceil(tilePosition)+0.01,vertexInputs.position.xy>vec2f(0));vertexOutputs.position=vec4f(tilePosition/halfTileRes-1.0,0,1);vertexOutputs.vOffset=vertexInputs.instanceIndex/CLUSTLIGHT_BATCH;vertexOutputs.vMask=1u<<(vertexInputs.instanceIndex % CLUSTLIGHT_BATCH);}
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const lightProxyVertexShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=lightProxy.vertex.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/lightingVolume.compute.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "lightingVolumeComputeShaderWGSL",
    ()=>lightingVolumeComputeShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
;
const name = "lightingVolumeComputeShader";
const shader = `struct Params {invViewProjMatrix : mat4x4f,
startVertexIndex: u32,
step: f32,
tesselation: u32,};@group(0) @binding(0) var shadowMap : texture_2d<f32>;@group(0) @binding(1) var<uniform> params : Params;@group(0) @binding(2) var<storage,read_write> positions : array<f32>;@compute @workgroup_size(8,8,1)
fn main(@builtin(global_invocation_id) global_id : vec3u) {let coord=global_id.xy;
#ifdef KEEP_EDGES
if (any(coord>=vec2u(params.tesselation)) || any(coord<=vec2u(0))) {
#else
if (any(coord>=vec2u(params.tesselation+1))) {
#endif
return;}
let stepY=floor(params.step*f32(coord.y));let depthCoord=vec2u(u32(floor(f32(coord.x)*params.step)),u32(stepY));var depth=textureLoad(shadowMap,depthCoord,0).r;
#ifdef MOVE_FAR_DEPTH_TO_NEAR
if (depth==1.0) {depth=0.0;}
#endif
let halfTesselation=f32(params.tesselation>>1);let ndc=vec4f((f32(coord.x)-halfTesselation)/halfTesselation,(f32(coord.y)-halfTesselation)/halfTesselation,depth,1.0);var worldCoords=params.invViewProjMatrix*ndc;let idx=params.startVertexIndex+(coord.y*(params.tesselation+1)+coord.x)*3;positions[idx]=worldCoords.x/worldCoords.w;positions[idx+1]=worldCoords.y/worldCoords.w;positions[idx+2]=worldCoords.z/worldCoords.w;}
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const lightingVolumeComputeShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=lightingVolume.compute.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/background.vertex.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "backgroundVertexShaderWGSL",
    ()=>backgroundVertexShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$backgroundUboDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/backgroundUboDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$helperFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/helperFunctions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$bonesDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/bonesDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$bakedVertexAnimationDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/bakedVertexAnimationDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$instancesDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/instancesDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$clipPlaneVertexDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/clipPlaneVertexDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$fogVertexDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/fogVertexDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$lightVxUboDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/lightVxUboDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$logDepthDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/logDepthDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$instancesVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/instancesVertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$bonesVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/bonesVertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$bakedVertexAnimation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/bakedVertexAnimation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$clipPlaneVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/clipPlaneVertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$fogVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/fogVertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$shadowsVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/shadowsVertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$logDepthVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/logDepthVertex.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const name = "backgroundVertexShader";
const shader = `#include<backgroundUboDeclaration>
#include<helperFunctions>
attribute position: vec3f;
#ifdef NORMAL
attribute normal: vec3f;
#endif
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<instancesDeclaration>
varying vPositionW: vec3f;
#ifdef NORMAL
varying vNormalW: vec3f;
#endif
#ifdef UV1
attribute uv: vec2f;
#endif
#ifdef UV2
attribute uv2: vec2f;
#endif
#ifdef MAINUV1
varying vMainUV1: vec2f;
#endif
#ifdef MAINUV2
varying vMainUV2: vec2f;
#endif
#if defined(DIFFUSE) && DIFFUSEDIRECTUV==0
varying vDiffuseUV: vec2f;
#endif
#include<clipPlaneVertexDeclaration>
#include<fogVertexDeclaration>
#include<lightVxUboDeclaration>[0..maxSimultaneousLights]
#ifdef REFLECTIONMAP_SKYBOX
varying vPositionUVW: vec3f;
#endif
#if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)
varying vDirectionW: vec3f;
#endif
#include<logDepthDeclaration>
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {
#define CUSTOM_VERTEX_MAIN_BEGIN
#ifdef REFLECTIONMAP_SKYBOX
vertexOutputs.vPositionUVW=input.position;
#endif
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
#ifdef MULTIVIEW
if (gl_ViewID_OVR==0u) {vertexOutputs.position=scene.viewProjection*finalWorld* vec4f(input.position,1.0);} else {vertexOutputs.position=scene.viewProjectionR*finalWorld* vec4f(input.position,1.0);}
#else
vertexOutputs.position=scene.viewProjection*finalWorld* vec4f(input.position,1.0);
#endif
var worldPos: vec4f=finalWorld* vec4f(input.position,1.0);vertexOutputs.vPositionW= worldPos.xyz;
#ifdef NORMAL
var normalWorld: mat3x3f=mat3x3f(finalWorld[0].xyz,finalWorld[1].xyz,finalWorld[2].xyz);
#ifdef NONUNIFORMSCALING
normalWorld=transposeMat3(inverseMat3(normalWorld));
#endif
vertexOutputs.vNormalW=normalize(normalWorld*input.normal);
#endif
#if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)
vertexOutputs.vDirectionW=normalize((finalWorld*vec4f(input.position,0.0)).xyz);
#ifdef EQUIRECTANGULAR_RELFECTION_FOV
var screenToWorld: mat3x3f=inverseMat3( mat3x3f(finalWorld*scene.viewProjection));var segment: vec3f=mix(vertexOutputs.vDirectionW,screenToWorld* vec3f(0.0,0.0,1.0),abs(fFovMultiplier-1.0));if (fFovMultiplier<=1.0) {vertexOutputs.vDirectionW=normalize(segment);} else {vertexOutputs.vDirectionW=normalize(vertexOutputs.vDirectionW+(vertexOutputs.vDirectionW-segment));}
#endif
#endif
#ifndef UV1
var uv: vec2f=vec2f(0.,0.);
#else
var uv=input.uv;
#endif
#ifndef UV2
var uv2: vec2f=vec2f(0.,0.);
#else
var uv2=input.uv2;
#endif
#ifdef MAINUV1
vertexOutputs.vMainUV1=uv;
#endif
#ifdef MAINUV2
vertexOutputs.vMainUV2=uv2;
#endif
#if defined(DIFFUSE) && DIFFUSEDIRECTUV==0
if (uniforms.vDiffuseInfos.x==0.)
{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uv,1.0,0.0)).xy;}
else
{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uv2,1.0,0.0)).xy;}
#endif
#include<clipPlaneVertex>
#include<fogVertex>
#include<shadowsVertex>[0..maxSimultaneousLights]
#ifdef VERTEXCOLOR
vertexOutputs.vColor=vertexInputs.color;
#endif
#include<logDepthVertex>
#define CUSTOM_VERTEX_MAIN_END
}
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const backgroundVertexShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=background.vertex.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/background.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "backgroundPixelShaderWGSL",
    ()=>backgroundPixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$backgroundUboDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/backgroundUboDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$helperFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/helperFunctions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$reflectionFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/reflectionFunction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$imageProcessingDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/imageProcessingDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$lightUboDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/lightUboDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$lightsFragmentFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/lightsFragmentFunctions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$shadowsFragmentFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/shadowsFragmentFunctions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$imageProcessingFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/imageProcessingFunctions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$logDepthDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/logDepthDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$clipPlaneFragmentDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/clipPlaneFragmentDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$fogFragmentDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/fogFragmentDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$intersectionFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/intersectionFunctions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$clipPlaneFragment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/clipPlaneFragment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$lightFragment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/lightFragment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$logDepthFragment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/logDepthFragment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$fogFragment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/fogFragment.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const name = "backgroundPixelShader";
const shader = `#include<backgroundUboDeclaration>
#include<helperFunctions>
varying vPositionW: vec3f;
#ifdef MAINUV1
varying vMainUV1: vec2f;
#endif 
#ifdef MAINUV2 
varying vMainUV2: vec2f; 
#endif 
#ifdef NORMAL
varying vNormalW: vec3f;
#endif
#ifdef DIFFUSE
#if DIFFUSEDIRECTUV==1
#define vDiffuseUV vMainUV1
#elif DIFFUSEDIRECTUV==2
#define vDiffuseUV vMainUV2
#else
varying vDiffuseUV: vec2f;
#endif
var diffuseSamplerSampler: sampler;var diffuseSampler: texture_2d<f32>;
#endif
#ifdef REFLECTION
#ifdef REFLECTIONMAP_3D
var reflectionSamplerSampler: sampler;var reflectionSampler: texture_cube<f32>;
#ifdef TEXTURELODSUPPORT
#else
var reflectionLowSamplerSampler: sampler;var reflectionLowSampler: texture_cube<f32>;var reflectionHighSamplerSampler: sampler;var reflectionHighSampler: texture_cube<f32>;
#endif
#else
var reflectionSamplerSampler: sampler;var reflectionSampler: texture_2d<f32>;
#ifdef TEXTURELODSUPPORT
#else
var reflectionLowSamplerSampler: sampler;var reflectionLowSampler: texture_2d<f32>;var reflectionHighSamplerSampler: sampler;var reflectionHighSampler: texture_2d<f32>;
#endif
#endif
#ifdef REFLECTIONMAP_SKYBOX
varying vPositionUVW: vec3f;
#else
#if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)
varying vDirectionW: vec3f;
#endif
#endif
#include<reflectionFunction>
#endif
#ifndef FROMLINEARSPACE
#define FROMLINEARSPACE;
#endif
#ifndef SHADOWONLY
#define SHADOWONLY;
#endif
#include<imageProcessingDeclaration>
#include<lightUboDeclaration>[0..maxSimultaneousLights]
#include<lightsFragmentFunctions>
#include<shadowsFragmentFunctions>
#include<imageProcessingFunctions>
#include<logDepthDeclaration>
#include<clipPlaneFragmentDeclaration>
#include<fogFragmentDeclaration>
#ifdef REFLECTIONFRESNEL
#define FRESNEL_MAXIMUM_ON_ROUGH 0.25
fn fresnelSchlickEnvironmentGGX(VdotN: f32,reflectance0: vec3f,reflectance90: vec3f,smoothness: f32)->vec3f
{var weight: f32=mix(FRESNEL_MAXIMUM_ON_ROUGH,1.0,smoothness);return reflectance0+weight*(reflectance90-reflectance0)*pow5(saturate(1.0-VdotN));}
#endif
#ifdef PROJECTED_GROUND
#include<intersectionFunctions>
fn project(viewDirectionW: vec3f,eyePosition: vec3f)->vec3f {var radius: f32=uniforms.projectedGroundInfos.x;var height: f32=uniforms.projectedGroundInfos.y;var camDir: vec3f=-viewDirectionW;var skySphereDistance: f32=sphereIntersectFromOrigin(eyePosition,camDir,radius).x;var skySpherePositionW: vec3f=eyePosition+camDir*skySphereDistance;var p: vec3f=normalize(skySpherePositionW);var upEyePosition=vec3f(eyePosition.x,eyePosition.y-height,eyePosition.z);var sIntersection: f32=sphereIntersectFromOrigin(upEyePosition,p,radius).x;var h: vec3f= vec3f(0.0,-height,0.0);var dIntersection: f32=diskIntersectWithBackFaceCulling(upEyePosition,p,h,radius);p=(upEyePosition+min(sIntersection,dIntersection)*p);return p;}
#endif
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
var viewDirectionW: vec3f=normalize(scene.vEyePosition.xyz-input.vPositionW);
#ifdef NORMAL
var normalW: vec3f=normalize(fragmentInputs.vNormalW);
#else
var normalW: vec3f= vec3f(0.0,1.0,0.0);
#endif
var shadow: f32=1.;var globalShadow: f32=0.;var shadowLightCount: f32=0.;var aggShadow: f32=0.;var numLights: f32=0.;
#include<lightFragment>[0..maxSimultaneousLights]
#ifdef SHADOWINUSE
globalShadow/=shadowLightCount;
#else
globalShadow=1.0;
#endif
#ifndef BACKMAT_SHADOWONLY
var reflectionColor: vec4f= vec4f(1.,1.,1.,1.);
#ifdef REFLECTION
#ifdef PROJECTED_GROUND
var reflectionVector: vec3f=project(viewDirectionW,scene.vEyePosition.xyz);reflectionVector= (uniforms.reflectionMatrix*vec4f(reflectionVector,1.)).xyz;
#else
var reflectionVector: vec3f=computeReflectionCoords( vec4f(fragmentInputs.vPositionW,1.0),normalW);
#endif
#ifdef REFLECTIONMAP_OPPOSITEZ
reflectionVector.z*=-1.0;
#endif
#ifdef REFLECTIONMAP_3D
var reflectionCoords: vec3f=reflectionVector;
#else
var reflectionCoords: vec2f=reflectionVector.xy;
#ifdef REFLECTIONMAP_PROJECTION
reflectionCoords/=reflectionVector.z;
#endif
reflectionCoords.y=1.0-reflectionCoords.y;
#endif
#ifdef REFLECTIONBLUR
var reflectionLOD: f32=uniforms.vReflectionInfos.y;
#ifdef TEXTURELODSUPPORT
reflectionLOD=reflectionLOD*log2(uniforms.vReflectionMicrosurfaceInfos.x)*uniforms.vReflectionMicrosurfaceInfos.y+uniforms.vReflectionMicrosurfaceInfos.z;reflectionColor=textureSampleLevel(reflectionSampler,reflectionSamplerSampler,reflectionCoords,reflectionLOD);
#else
var lodReflectionNormalized: f32=saturate(reflectionLOD);var lodReflectionNormalizedDoubled: f32=lodReflectionNormalized*2.0;var reflectionSpecularMid: vec4f=textureSample(reflectionSampler,reflectionSamplerSampler,reflectionCoords);if(lodReflectionNormalizedDoubled<1.0){reflectionColor=mix(
textureSample(reflectionrHighSampler,reflectionrHighSamplerSampler,reflectionCoords),
reflectionSpecularMid,
lodReflectionNormalizedDoubled
);} else {reflectionColor=mix(
reflectionSpecularMid,
textureSample(reflectionLowSampler,reflectionLowSamplerSampler,reflectionCoords),
lodReflectionNormalizedDoubled-1.0
);}
#endif
#else
var reflectionSample: vec4f=textureSample(reflectionSampler,reflectionSamplerSampler,reflectionCoords);reflectionColor=reflectionSample;
#endif
#ifdef RGBDREFLECTION
reflectionColor=vec4f(fromRGBD(reflectionColor).rgb,reflectionColor.a);
#endif
#ifdef GAMMAREFLECTION
reflectionColor=vec4f(toLinearSpaceVec3(reflectionColor.rgb),reflectionColor.a);
#endif
#ifdef REFLECTIONBGR
reflectionColor=vec4f(reflectionColor.bgr,reflectionColor.a);
#endif
reflectionColor=vec4f(reflectionColor.rgb*uniforms.vReflectionInfos.x,reflectionColor.a);
#endif
var diffuseColor: vec3f= vec3f(1.,1.,1.);var finalAlpha: f32=uniforms.alpha;
#ifdef DIFFUSE
var diffuseMap: vec4f=textureSample(diffuseSampler,diffuseSamplerSampler,input.vDiffuseUV);
#ifdef GAMMADIFFUSE
diffuseMap=vec4f(toLinearSpaceVec3(diffuseMap.rgb),diffuseMap.a);
#endif
diffuseMap=vec4f(diffuseMap.rgb *uniforms.vDiffuseInfos.y,diffuseMap.a);
#ifdef DIFFUSEHASALPHA
finalAlpha*=diffuseMap.a;
#endif
diffuseColor=diffuseMap.rgb;
#endif
#ifdef REFLECTIONFRESNEL
var colorBase: vec3f=diffuseColor;
#else
var colorBase: vec3f=reflectionColor.rgb*diffuseColor;
#endif
colorBase=max(colorBase,vec3f(0.0));
#ifdef USERGBCOLOR
var finalColor: vec3f=colorBase;
#else
#ifdef USEHIGHLIGHTANDSHADOWCOLORS
var mainColor: vec3f=mix(uniforms.vPrimaryColorShadow.rgb,uniforms.vPrimaryColor.rgb,colorBase);
#else
var mainColor: vec3f=uniforms.vPrimaryColor.rgb;
#endif
var finalColor: vec3f=colorBase*mainColor;
#endif
#ifdef REFLECTIONFRESNEL
var reflectionAmount: vec3f=uniforms.vReflectionControl.xxx;var reflectionReflectance0: vec3f=uniforms.vReflectionControl.yyy;var reflectionReflectance90: vec3f=uniforms.vReflectionControl.zzz;var VdotN: f32=dot(normalize(scene.vEyePosition.xyz),normalW);var planarReflectionFresnel: vec3f=fresnelSchlickEnvironmentGGX(saturate(VdotN),reflectionReflectance0,reflectionReflectance90,1.0);reflectionAmount*=planarReflectionFresnel;
#ifdef REFLECTIONFALLOFF
var reflectionDistanceFalloff: f32=1.0-saturate(length(vPositionW.xyz-uniforms.vBackgroundCenter)*uniforms.vReflectionControl.w);reflectionDistanceFalloff*=reflectionDistanceFalloff;reflectionAmount*=reflectionDistanceFalloff;
#endif
finalColor=mix(finalColor,reflectionColor.rgb,saturateVec3(reflectionAmount));
#endif
#ifdef OPACITYFRESNEL
var viewAngleToFloor: f32=dot(normalW,normalize(scene.vEyePosition.xyz-uniforms.vBackgroundCenter));const startAngle: f32=0.1;var fadeFactor: f32=saturate(viewAngleToFloor/startAngle);finalAlpha*=fadeFactor*fadeFactor;
#endif
#ifdef SHADOWINUSE
finalColor=mix(finalColor*uniforms.shadowLevel,finalColor,globalShadow);
#endif
var color: vec4f= vec4f(finalColor,finalAlpha);
#else
var color: vec4f= vec4f(uniforms.vPrimaryColor.rgb,(1.0-clamp(globalShadow,0.,1.))*uniforms.alpha);
#endif
#include<logDepthFragment>
#include<fogFragment>
#ifdef IMAGEPROCESSINGPOSTPROCESS
#if !defined(SKIPFINALCOLORCLAMP)
color=vec4f(clamp(color.rgb,vec3f(0.),vec3f(30.0)),color.a);
#endif
#else
color=applyImageProcessing(color);
#endif
#ifdef PREMULTIPLYALPHA
color=vec4f(color.rgb *color.a,color.a);
#endif
#ifdef NOISE
color=vec4f(color.rgb+dither(fragmentInputs.vPositionW.xy,0.5),color.a);color=max(color,vec4f(0.0));
#endif
fragmentOutputs.color=color;
#define CUSTOM_FRAGMENT_MAIN_END
}
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const backgroundPixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=background.fragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/pbr.vertex.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "pbrVertexShaderWGSL",
    ()=>pbrVertexShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$pbrUboDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/pbrUboDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$uvAttributeDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/uvAttributeDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$mainUVVaryingDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/mainUVVaryingDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$helperFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/helperFunctions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$pbrBRDFFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/pbrBRDFFunctions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$bonesDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/bonesDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$bakedVertexAnimationDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/bakedVertexAnimationDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$instancesDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/instancesDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$prePassVertexDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/prePassVertexDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$samplerVertexDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/samplerVertexDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$harmonicsFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/harmonicsFunctions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$bumpVertexDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/bumpVertexDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$clipPlaneVertexDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/clipPlaneVertexDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$fogVertexDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/fogVertexDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$lightVxUboDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/lightVxUboDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$morphTargetsVertexGlobalDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/morphTargetsVertexGlobalDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$morphTargetsVertexDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/morphTargetsVertexDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$logDepthDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/logDepthDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$morphTargetsVertexGlobal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/morphTargetsVertexGlobal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$morphTargetsVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/morphTargetsVertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$instancesVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/instancesVertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$bonesVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/bonesVertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$bakedVertexAnimation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/bakedVertexAnimation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$prePassVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/prePassVertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$uvVariableDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/uvVariableDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$samplerVertexImplementation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/samplerVertexImplementation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$bumpVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/bumpVertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$clipPlaneVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/clipPlaneVertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$fogVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/fogVertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$shadowsVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/shadowsVertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$vertexColorMixing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/vertexColorMixing.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$logDepthVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/logDepthVertex.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const name = "pbrVertexShader";
const shader = `#define PBR_VERTEX_SHADER
#include<pbrUboDeclaration>
#define CUSTOM_VERTEX_BEGIN
attribute position: vec3f;
#ifdef NORMAL
attribute normal: vec3f;
#endif
#ifdef TANGENT
attribute tangent: vec4f;
#endif
#ifdef UV1
attribute uv: vec2f;
#endif
#include<uvAttributeDeclaration>[2..7]
#include<mainUVVaryingDeclaration>[1..7]
#ifdef VERTEXCOLOR
attribute color: vec4f;
#endif
#include<helperFunctions>
#include<pbrBRDFFunctions>
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<instancesDeclaration>
#include<prePassVertexDeclaration>
#include<samplerVertexDeclaration>(_DEFINENAME_,ALBEDO,_VARYINGNAME_,Albedo)
#include<samplerVertexDeclaration>(_DEFINENAME_,BASE_WEIGHT,_VARYINGNAME_,BaseWeight)
#include<samplerVertexDeclaration>(_DEFINENAME_,BASE_DIFFUSE_ROUGHNESS,_VARYINGNAME_,BaseDiffuseRoughness)
#include<samplerVertexDeclaration>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail)
#include<samplerVertexDeclaration>(_DEFINENAME_,AMBIENT,_VARYINGNAME_,Ambient)
#include<samplerVertexDeclaration>(_DEFINENAME_,OPACITY,_VARYINGNAME_,Opacity)
#include<samplerVertexDeclaration>(_DEFINENAME_,EMISSIVE,_VARYINGNAME_,Emissive)
#include<samplerVertexDeclaration>(_DEFINENAME_,LIGHTMAP,_VARYINGNAME_,Lightmap)
#include<samplerVertexDeclaration>(_DEFINENAME_,REFLECTIVITY,_VARYINGNAME_,Reflectivity)
#include<samplerVertexDeclaration>(_DEFINENAME_,MICROSURFACEMAP,_VARYINGNAME_,MicroSurfaceSampler)
#include<samplerVertexDeclaration>(_DEFINENAME_,METALLIC_REFLECTANCE,_VARYINGNAME_,MetallicReflectance)
#include<samplerVertexDeclaration>(_DEFINENAME_,REFLECTANCE,_VARYINGNAME_,Reflectance)
#include<samplerVertexDeclaration>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump)
#include<samplerVertexDeclaration>(_DEFINENAME_,DECAL,_VARYINGNAME_,Decal)
#ifdef CLEARCOAT
#include<samplerVertexDeclaration>(_DEFINENAME_,CLEARCOAT_TEXTURE,_VARYINGNAME_,ClearCoat)
#include<samplerVertexDeclaration>(_DEFINENAME_,CLEARCOAT_TEXTURE_ROUGHNESS,_VARYINGNAME_,ClearCoatRoughness)
#include<samplerVertexDeclaration>(_DEFINENAME_,CLEARCOAT_BUMP,_VARYINGNAME_,ClearCoatBump)
#include<samplerVertexDeclaration>(_DEFINENAME_,CLEARCOAT_TINT_TEXTURE,_VARYINGNAME_,ClearCoatTint)
#endif
#ifdef IRIDESCENCE
#include<samplerVertexDeclaration>(_DEFINENAME_,IRIDESCENCE_TEXTURE,_VARYINGNAME_,Iridescence)
#include<samplerVertexDeclaration>(_DEFINENAME_,IRIDESCENCE_THICKNESS_TEXTURE,_VARYINGNAME_,IridescenceThickness)
#endif
#ifdef SHEEN
#include<samplerVertexDeclaration>(_DEFINENAME_,SHEEN_TEXTURE,_VARYINGNAME_,Sheen)
#include<samplerVertexDeclaration>(_DEFINENAME_,SHEEN_TEXTURE_ROUGHNESS,_VARYINGNAME_,SheenRoughness)
#endif
#ifdef ANISOTROPIC
#include<samplerVertexDeclaration>(_DEFINENAME_,ANISOTROPIC_TEXTURE,_VARYINGNAME_,Anisotropy)
#endif
#ifdef SUBSURFACE
#include<samplerVertexDeclaration>(_DEFINENAME_,SS_THICKNESSANDMASK_TEXTURE,_VARYINGNAME_,Thickness)
#include<samplerVertexDeclaration>(_DEFINENAME_,SS_REFRACTIONINTENSITY_TEXTURE,_VARYINGNAME_,RefractionIntensity)
#include<samplerVertexDeclaration>(_DEFINENAME_,SS_TRANSLUCENCYINTENSITY_TEXTURE,_VARYINGNAME_,TranslucencyIntensity)
#include<samplerVertexDeclaration>(_DEFINENAME_,SS_TRANSLUCENCYCOLOR_TEXTURE,_VARYINGNAME_,TranslucencyColor)
#endif
varying vPositionW: vec3f;
#if DEBUGMODE>0
varying vClipSpacePosition: vec4f;
#endif
#ifdef NORMAL
varying vNormalW: vec3f;
#if defined(USESPHERICALFROMREFLECTIONMAP) && defined(USESPHERICALINVERTEX)
varying vEnvironmentIrradiance: vec3f;
#include<harmonicsFunctions>
#endif
#endif
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
varying vColor: vec4f;
#endif
#include<bumpVertexDeclaration>
#include<clipPlaneVertexDeclaration>
#include<fogVertexDeclaration>
#include<lightVxUboDeclaration>[0..maxSimultaneousLights]
#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]
#ifdef REFLECTIONMAP_SKYBOX
varying vPositionUVW: vec3f;
#endif
#if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)
varying vDirectionW: vec3f;
#endif
#if defined(CLUSTLIGHT_BATCH) && CLUSTLIGHT_BATCH>0
varying vViewDepth: f32;
#endif
#include<logDepthDeclaration>
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {
#define CUSTOM_VERTEX_MAIN_BEGIN
var positionUpdated: vec3f=vertexInputs.position;
#ifdef NORMAL
var normalUpdated: vec3f=vertexInputs.normal;
#endif
#ifdef TANGENT
var tangentUpdated: vec4f=vertexInputs.tangent;
#endif
#ifdef UV1
var uvUpdated: vec2f=vertexInputs.uv;
#endif
#ifdef UV2
var uv2Updated: vec2f=vertexInputs.uv2;
#endif
#ifdef VERTEXCOLOR
var colorUpdated: vec4f=vertexInputs.color;
#endif
#include<morphTargetsVertexGlobal>
#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]
#ifdef REFLECTIONMAP_SKYBOX
vertexOutputs.vPositionUVW=positionUpdated;
#endif
#define CUSTOM_VERTEX_UPDATE_POSITION
#define CUSTOM_VERTEX_UPDATE_NORMAL
#include<instancesVertex>
#if defined(PREPASS) && ((defined(PREPASS_VELOCITY) || defined(PREPASS_VELOCITY_LINEAR)) && !defined(BONES_VELOCITY_ENABLED)
vertexOutputs.vCurrentPosition=scene.viewProjection*finalWorld*vec4f(positionUpdated,1.0);vertexOutputs.vPreviousPosition=uniforms.previousViewProjection*finalPreviousWorld*vec4f(positionUpdated,1.0);
#endif
#include<bonesVertex>
#include<bakedVertexAnimation>
var worldPos: vec4f=finalWorld* vec4f(positionUpdated,1.0);vertexOutputs.vPositionW= worldPos.xyz;
#ifdef PREPASS
#include<prePassVertex>
#endif
#ifdef NORMAL
var normalWorld: mat3x3f= mat3x3f(finalWorld[0].xyz,finalWorld[1].xyz,finalWorld[2].xyz);
#if defined(INSTANCES) && defined(THIN_INSTANCES)
vertexOutputs.vNormalW=normalUpdated/ vec3f(dot(normalWorld[0],normalWorld[0]),dot(normalWorld[1],normalWorld[1]),dot(normalWorld[2],normalWorld[2]));vertexOutputs.vNormalW=normalize(normalWorld*vertexOutputs.vNormalW);
#else
#ifdef NONUNIFORMSCALING
normalWorld=transposeMat3(inverseMat3(normalWorld));
#endif
vertexOutputs.vNormalW=normalize(normalWorld*normalUpdated);
#endif
#if defined(USESPHERICALFROMREFLECTIONMAP) && defined(USESPHERICALINVERTEX)
#if BASE_DIFFUSE_MODEL != BRDF_DIFFUSE_MODEL_LAMBERT && BASE_DIFFUSE_MODEL != BRDF_DIFFUSE_MODEL_LEGACY
var viewDirectionW: vec3f=normalize(scene.vEyePosition.xyz-vertexOutputs.vPositionW);var NdotV: f32=max(dot(vertexOutputs.vNormalW,viewDirectionW),0.0);var roughNormal: vec3f=mix(vertexOutputs.vNormalW,viewDirectionW,(0.5*(1.0-NdotV))*uniforms.baseDiffuseRoughness);var reflectionVector: vec3f= (uniforms.reflectionMatrix* vec4f(roughNormal,0)).xyz;
#else
var reflectionVector: vec3f= (uniforms.reflectionMatrix* vec4f(vertexOutputs.vNormalW,0)).xyz;
#endif
#ifdef REFLECTIONMAP_OPPOSITEZ
reflectionVector.z*=-1.0;
#endif
vertexOutputs.vEnvironmentIrradiance=computeEnvironmentIrradiance(reflectionVector);
#endif
#endif
#define CUSTOM_VERTEX_UPDATE_WORLDPOS
#ifdef MULTIVIEW
if (gl_ViewID_OVR==0u) {vertexOutputs.position=scene.viewProjection*worldPos;} else {vertexOutputs.position=scene.viewProjectionR*worldPos;}
#else
vertexOutputs.position=scene.viewProjection*worldPos;
#endif
#if DEBUGMODE>0
vertexOutputs.vClipSpacePosition=vertexOutputs.position;
#endif
#if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)
vertexOutputs.vDirectionW=normalize((finalWorld*vec4f(positionUpdated,0.0)).xyz);
#endif
#if defined(CLUSTLIGHT_BATCH) && CLUSTLIGHT_BATCH>0
vertexOutputs.vViewDepth=(scene.view*worldPos).z;
#endif
#ifndef UV1
var uvUpdated: vec2f= vec2f(0.,0.);
#endif
#ifdef MAINUV1
vertexOutputs.vMainUV1=uvUpdated;
#endif
#ifndef UV2
var uv2Updated: vec2f= vec2f(0.,0.);
#endif
#ifdef MAINUV2
vertexOutputs.vMainUV2=uv2Updated;
#endif
#include<uvVariableDeclaration>[3..7]
#include<samplerVertexImplementation>(_DEFINENAME_,ALBEDO,_VARYINGNAME_,Albedo,_MATRIXNAME_,albedo,_INFONAME_,AlbedoInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,BASE_WEIGHT,_VARYINGNAME_,BaseWeight,_MATRIXNAME_,baseWeight,_INFONAME_,BaseWeightInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,BASE_DIFFUSE_ROUGHNESS,_VARYINGNAME_,BaseDiffuseRoughness,_MATRIXNAME_,baseDiffuseRoughness,_INFONAME_,BaseDiffuseRoughnessInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail,_MATRIXNAME_,detail,_INFONAME_,DetailInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,AMBIENT,_VARYINGNAME_,Ambient,_MATRIXNAME_,ambient,_INFONAME_,AmbientInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,OPACITY,_VARYINGNAME_,Opacity,_MATRIXNAME_,opacity,_INFONAME_,OpacityInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,EMISSIVE,_VARYINGNAME_,Emissive,_MATRIXNAME_,emissive,_INFONAME_,EmissiveInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,LIGHTMAP,_VARYINGNAME_,Lightmap,_MATRIXNAME_,lightmap,_INFONAME_,LightmapInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,REFLECTIVITY,_VARYINGNAME_,Reflectivity,_MATRIXNAME_,reflectivity,_INFONAME_,ReflectivityInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,MICROSURFACEMAP,_VARYINGNAME_,MicroSurfaceSampler,_MATRIXNAME_,microSurfaceSampler,_INFONAME_,MicroSurfaceSamplerInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,METALLIC_REFLECTANCE,_VARYINGNAME_,MetallicReflectance,_MATRIXNAME_,metallicReflectance,_INFONAME_,MetallicReflectanceInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,REFLECTANCE,_VARYINGNAME_,Reflectance,_MATRIXNAME_,reflectance,_INFONAME_,ReflectanceInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump,_MATRIXNAME_,bump,_INFONAME_,BumpInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,DECAL,_VARYINGNAME_,Decal,_MATRIXNAME_,decal,_INFONAME_,DecalInfos.x)
#ifdef CLEARCOAT
#include<samplerVertexImplementation>(_DEFINENAME_,CLEARCOAT_TEXTURE,_VARYINGNAME_,ClearCoat,_MATRIXNAME_,clearCoat,_INFONAME_,ClearCoatInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,CLEARCOAT_TEXTURE_ROUGHNESS,_VARYINGNAME_,ClearCoatRoughness,_MATRIXNAME_,clearCoatRoughness,_INFONAME_,ClearCoatInfos.z)
#include<samplerVertexImplementation>(_DEFINENAME_,CLEARCOAT_BUMP,_VARYINGNAME_,ClearCoatBump,_MATRIXNAME_,clearCoatBump,_INFONAME_,ClearCoatBumpInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,CLEARCOAT_TINT_TEXTURE,_VARYINGNAME_,ClearCoatTint,_MATRIXNAME_,clearCoatTint,_INFONAME_,ClearCoatTintInfos.x)
#endif
#ifdef IRIDESCENCE
#include<samplerVertexImplementation>(_DEFINENAME_,IRIDESCENCE_TEXTURE,_VARYINGNAME_,Iridescence,_MATRIXNAME_,iridescence,_INFONAME_,IridescenceInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,IRIDESCENCE_THICKNESS_TEXTURE,_VARYINGNAME_,IridescenceThickness,_MATRIXNAME_,iridescenceThickness,_INFONAME_,IridescenceInfos.z)
#endif
#ifdef SHEEN
#include<samplerVertexImplementation>(_DEFINENAME_,SHEEN_TEXTURE,_VARYINGNAME_,Sheen,_MATRIXNAME_,sheen,_INFONAME_,SheenInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,SHEEN_TEXTURE_ROUGHNESS,_VARYINGNAME_,SheenRoughness,_MATRIXNAME_,sheenRoughness,_INFONAME_,SheenInfos.z)
#endif
#ifdef ANISOTROPIC
#include<samplerVertexImplementation>(_DEFINENAME_,ANISOTROPIC_TEXTURE,_VARYINGNAME_,Anisotropy,_MATRIXNAME_,anisotropy,_INFONAME_,AnisotropyInfos.x)
#endif
#ifdef SUBSURFACE
#include<samplerVertexImplementation>(_DEFINENAME_,SS_THICKNESSANDMASK_TEXTURE,_VARYINGNAME_,Thickness,_MATRIXNAME_,thickness,_INFONAME_,ThicknessInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,SS_REFRACTIONINTENSITY_TEXTURE,_VARYINGNAME_,RefractionIntensity,_MATRIXNAME_,refractionIntensity,_INFONAME_,RefractionIntensityInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,SS_TRANSLUCENCYINTENSITY_TEXTURE,_VARYINGNAME_,TranslucencyIntensity,_MATRIXNAME_,translucencyIntensity,_INFONAME_,TranslucencyIntensityInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,SS_TRANSLUCENCYCOLOR_TEXTURE,_VARYINGNAME_,TranslucencyColor,_MATRIXNAME_,translucencyColor,_INFONAME_,TranslucencyColorInfos.x)
#endif
#include<bumpVertex>
#include<clipPlaneVertex>
#include<fogVertex>
#include<shadowsVertex>[0..maxSimultaneousLights]
#include<vertexColorMixing>
#include<logDepthVertex>
#define CUSTOM_VERTEX_MAIN_END
}`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const pbrVertexShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=pbr.vertex.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/pbr.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "pbrPixelShaderWGSL",
    ()=>pbrPixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$prePassDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/prePassDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$oitDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/oitDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$pbrUboDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/pbrUboDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$pbrFragmentExtraDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/pbrFragmentExtraDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$lightUboDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/lightUboDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$pbrFragmentSamplersDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/pbrFragmentSamplersDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$imageProcessingDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/imageProcessingDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$clipPlaneFragmentDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/clipPlaneFragmentDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$logDepthDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/logDepthDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$fogFragmentDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/fogFragmentDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$helperFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/helperFunctions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$subSurfaceScatteringFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/subSurfaceScatteringFunctions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$importanceSampling$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/importanceSampling.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$pbrHelperFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/pbrHelperFunctions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$imageProcessingFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/imageProcessingFunctions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$shadowsFragmentFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/shadowsFragmentFunctions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$harmonicsFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/harmonicsFunctions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$pbrDirectLightingSetupFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/pbrDirectLightingSetupFunctions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$pbrDirectLightingFalloffFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/pbrDirectLightingFalloffFunctions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$pbrBRDFFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/pbrBRDFFunctions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$hdrFilteringFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/hdrFilteringFunctions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$pbrDirectLightingFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/pbrDirectLightingFunctions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$pbrIBLFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/pbrIBLFunctions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$bumpFragmentMainFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/bumpFragmentMainFunctions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$bumpFragmentFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/bumpFragmentFunctions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$reflectionFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/reflectionFunction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$pbrBlockAlbedoOpacity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/pbrBlockAlbedoOpacity.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$pbrBlockReflectivity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/pbrBlockReflectivity.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$pbrBlockAmbientOcclusion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/pbrBlockAmbientOcclusion.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$pbrBlockAlphaFresnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/pbrBlockAlphaFresnel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$pbrBlockAnisotropic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/pbrBlockAnisotropic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$pbrBlockReflection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/pbrBlockReflection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$pbrBlockSheen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/pbrBlockSheen.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$pbrBlockClearcoat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/pbrBlockClearcoat.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$pbrBlockIridescence$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/pbrBlockIridescence.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$pbrBlockSubSurface$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/pbrBlockSubSurface.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$clipPlaneFragment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/clipPlaneFragment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$pbrBlockNormalGeometric$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/pbrBlockNormalGeometric.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$bumpFragment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/bumpFragment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$pbrBlockNormalFinal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/pbrBlockNormalFinal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$depthPrePass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/depthPrePass.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$pbrBlockLightmapInit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/pbrBlockLightmapInit.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$pbrBlockGeometryInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/pbrBlockGeometryInfo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$pbrBlockReflectance0$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/pbrBlockReflectance0.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$pbrBlockReflectance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/pbrBlockReflectance.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$pbrBlockDirectLighting$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/pbrBlockDirectLighting.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$lightFragment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/lightFragment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$pbrBlockFinalLitComponents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/pbrBlockFinalLitComponents.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$pbrBlockFinalUnlitComponents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/pbrBlockFinalUnlitComponents.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$pbrBlockFinalColorComposition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/pbrBlockFinalColorComposition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$logDepthFragment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/logDepthFragment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$fogFragment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/fogFragment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$pbrBlockImageProcessing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/pbrBlockImageProcessing.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$pbrBlockPrePass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/pbrBlockPrePass.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$oitFragment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/oitFragment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$pbrDebug$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/pbrDebug.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const name = "pbrPixelShader";
const shader = `#define PBR_FRAGMENT_SHADER
#define CUSTOM_FRAGMENT_BEGIN
#include<prePassDeclaration>[SCENE_MRT_COUNT]
#include<oitDeclaration>
#ifndef FROMLINEARSPACE
#define FROMLINEARSPACE
#endif
#include<pbrUboDeclaration>
#include<pbrFragmentExtraDeclaration>
#include<lightUboDeclaration>[0..maxSimultaneousLights]
#include<pbrFragmentSamplersDeclaration>
#include<imageProcessingDeclaration>
#include<clipPlaneFragmentDeclaration>
#include<logDepthDeclaration>
#include<fogFragmentDeclaration>
#include<helperFunctions>
#include<subSurfaceScatteringFunctions>
#include<importanceSampling>
#include<pbrHelperFunctions>
#include<imageProcessingFunctions>
#include<shadowsFragmentFunctions>
#include<harmonicsFunctions>
#include<pbrDirectLightingSetupFunctions>
#include<pbrDirectLightingFalloffFunctions>
#include<pbrBRDFFunctions>
#include<hdrFilteringFunctions>
#include<pbrDirectLightingFunctions>
#include<pbrIBLFunctions>
#include<bumpFragmentMainFunctions>
#include<bumpFragmentFunctions>
#ifdef REFLECTION
#include<reflectionFunction>
#endif
#define CUSTOM_FRAGMENT_DEFINITIONS
#include<pbrBlockAlbedoOpacity>
#include<pbrBlockReflectivity>
#include<pbrBlockAmbientOcclusion>
#include<pbrBlockAlphaFresnel>
#include<pbrBlockAnisotropic>
#include<pbrBlockReflection>
#include<pbrBlockSheen>
#include<pbrBlockClearcoat>
#include<pbrBlockIridescence>
#include<pbrBlockSubSurface>
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
#include<pbrBlockNormalGeometric>
#include<bumpFragment>
#include<pbrBlockNormalFinal>
var albedoOpacityOut: albedoOpacityOutParams;
#ifdef ALBEDO
var albedoTexture: vec4f=textureSample(albedoSampler,albedoSamplerSampler,fragmentInputs.vAlbedoUV+uvOffset);
#endif
#ifdef BASE_WEIGHT
var baseWeightTexture: vec4f=textureSample(baseWeightSampler,baseWeightSamplerSampler,fragmentInputs.vBaseWeightUV+uvOffset);
#endif
#ifdef OPACITY
var opacityMap: vec4f=textureSample(opacitySampler,opacitySamplerSampler,fragmentInputs.vOpacityUV+uvOffset);
#endif
#ifdef DECAL
var decalColor: vec4f=textureSample(decalSampler,decalSamplerSampler,fragmentInputs.vDecalUV+uvOffset);
#endif
albedoOpacityOut=albedoOpacityBlock(
uniforms.vAlbedoColor
#ifdef ALBEDO
,albedoTexture
,uniforms.vAlbedoInfos
#endif
,uniforms.baseWeight
#ifdef BASE_WEIGHT
,baseWeightTexture
,uniforms.vBaseWeightInfos
#endif
#ifdef OPACITY
,opacityMap
,uniforms.vOpacityInfos
#endif
#ifdef DETAIL
,detailColor
,uniforms.vDetailInfos
#endif
#ifdef DECAL
,decalColor
,uniforms.vDecalInfos
#endif
);var surfaceAlbedo: vec3f=albedoOpacityOut.surfaceAlbedo;var alpha: f32=albedoOpacityOut.alpha;
#define CUSTOM_FRAGMENT_UPDATE_ALPHA
#include<depthPrePass>
#define CUSTOM_FRAGMENT_BEFORE_LIGHTS
var aoOut: ambientOcclusionOutParams;
#ifdef AMBIENT
var ambientOcclusionColorMap: vec3f=textureSample(ambientSampler,ambientSamplerSampler,fragmentInputs.vAmbientUV+uvOffset).rgb;
#endif
aoOut=ambientOcclusionBlock(
#ifdef AMBIENT
ambientOcclusionColorMap,
uniforms.vAmbientInfos
#endif
);
#include<pbrBlockLightmapInit>
#ifdef UNLIT
var diffuseBase: vec3f= vec3f(1.,1.,1.);
#else
var baseColor: vec3f=surfaceAlbedo;var reflectivityOut: reflectivityOutParams;
#if defined(REFLECTIVITY)
var surfaceMetallicOrReflectivityColorMap: vec4f=textureSample(reflectivitySampler,reflectivitySamplerSampler,fragmentInputs.vReflectivityUV+uvOffset);var baseReflectivity: vec4f=surfaceMetallicOrReflectivityColorMap;
#ifndef METALLICWORKFLOW
#ifdef REFLECTIVITY_GAMMA
surfaceMetallicOrReflectivityColorMap=toLinearSpaceVec4(surfaceMetallicOrReflectivityColorMap);
#endif
surfaceMetallicOrReflectivityColorMap=vec4f(surfaceMetallicOrReflectivityColorMap.rgb*uniforms.vReflectivityInfos.y,surfaceMetallicOrReflectivityColorMap.a);
#endif
#endif
#if defined(MICROSURFACEMAP)
var microSurfaceTexel: vec4f=textureSample(microSurfaceSampler,microSurfaceSamplerSampler,fragmentInputs.vMicroSurfaceSamplerUV+uvOffset)*uniforms.vMicroSurfaceSamplerInfos.y;
#endif
#ifdef BASE_DIFFUSE_ROUGHNESS
var baseDiffuseRoughnessTexture: f32=textureSample(baseDiffuseRoughnessSampler,baseDiffuseRoughnessSamplerSampler,fragmentInputs.vBaseDiffuseRoughnessUV+uvOffset).x;
#endif
#ifdef METALLICWORKFLOW
var metallicReflectanceFactors: vec4f=uniforms.vMetallicReflectanceFactors;
#ifdef REFLECTANCE
var reflectanceFactorsMap: vec4f=textureSample(reflectanceSampler,reflectanceSamplerSampler,fragmentInputs.vReflectanceUV+uvOffset);
#ifdef REFLECTANCE_GAMMA
reflectanceFactorsMap=toLinearSpaceVec4(reflectanceFactorsMap);
#endif
metallicReflectanceFactors=vec4f(metallicReflectanceFactors.rgb*reflectanceFactorsMap.rgb,metallicReflectanceFactors.a);
#endif
#ifdef METALLIC_REFLECTANCE
var metallicReflectanceFactorsMap: vec4f=textureSample(metallicReflectanceSampler,metallicReflectanceSamplerSampler,fragmentInputs.vMetallicReflectanceUV+uvOffset);
#ifdef METALLIC_REFLECTANCE_GAMMA
metallicReflectanceFactorsMap=toLinearSpaceVec4(metallicReflectanceFactorsMap);
#endif
#ifndef METALLIC_REFLECTANCE_USE_ALPHA_ONLY
metallicReflectanceFactors=vec4f(metallicReflectanceFactors.rgb*metallicReflectanceFactorsMap.rgb,metallicReflectanceFactors.a);
#endif
metallicReflectanceFactors.a*=metallicReflectanceFactorsMap.a;
#endif
#endif
reflectivityOut=reflectivityBlock(
uniforms.vReflectivityColor
#ifdef METALLICWORKFLOW
,surfaceAlbedo
,metallicReflectanceFactors
#endif
,uniforms.baseDiffuseRoughness
#ifdef BASE_DIFFUSE_ROUGHNESS
,baseDiffuseRoughnessTexture
,uniforms.vBaseDiffuseRoughnessInfos
#endif
#ifdef REFLECTIVITY
,uniforms.vReflectivityInfos
,surfaceMetallicOrReflectivityColorMap
#endif
#if defined(METALLICWORKFLOW) && defined(REFLECTIVITY) && defined(AOSTOREINMETALMAPRED)
,aoOut.ambientOcclusionColor
#endif
#ifdef MICROSURFACEMAP
,microSurfaceTexel
#endif
#ifdef DETAIL
,detailColor
,uniforms.vDetailInfos
#endif
);var microSurface: f32=reflectivityOut.microSurface;var roughness: f32=reflectivityOut.roughness;var diffuseRoughness: f32=reflectivityOut.diffuseRoughness;
#ifdef METALLICWORKFLOW
surfaceAlbedo=reflectivityOut.surfaceAlbedo;
#endif
#if defined(METALLICWORKFLOW) && defined(REFLECTIVITY) && defined(AOSTOREINMETALMAPRED)
aoOut.ambientOcclusionColor=reflectivityOut.ambientOcclusionColor;
#endif
#ifdef ALPHAFRESNEL
#if defined(ALPHATEST) || defined(ALPHABLEND)
var alphaFresnelOut: alphaFresnelOutParams;alphaFresnelOut=alphaFresnelBlock(
normalW,
viewDirectionW,
alpha,
microSurface
);alpha=alphaFresnelOut.alpha;
#endif
#endif
#include<pbrBlockGeometryInfo>
#ifdef ANISOTROPIC
var anisotropicOut: anisotropicOutParams;
#ifdef ANISOTROPIC_TEXTURE
var anisotropyMapData: vec3f=textureSample(anisotropySampler,anisotropySamplerSampler,fragmentInputs.vAnisotropyUV+uvOffset).rgb*uniforms.vAnisotropyInfos.y;
#endif
anisotropicOut=anisotropicBlock(
uniforms.vAnisotropy,
roughness,
#ifdef ANISOTROPIC_TEXTURE
anisotropyMapData,
#endif
TBN,
normalW,
viewDirectionW
);
#endif
#ifdef REFLECTION
var reflectionOut: reflectionOutParams;
#ifndef USE_CUSTOM_REFLECTION
reflectionOut=reflectionBlock(
fragmentInputs.vPositionW
,normalW
,alphaG
,uniforms.vReflectionMicrosurfaceInfos
,uniforms.vReflectionInfos
,uniforms.vReflectionColor
#ifdef ANISOTROPIC
,anisotropicOut
#endif
#if defined(LODINREFLECTIONALPHA) && !defined(REFLECTIONMAP_SKYBOX)
,NdotVUnclamped
#endif
#ifdef LINEARSPECULARREFLECTION
,roughness
#endif
,reflectionSampler
,reflectionSamplerSampler
#if defined(NORMAL) && defined(USESPHERICALINVERTEX)
,fragmentInputs.vEnvironmentIrradiance
#endif
#if (defined(USESPHERICALFROMREFLECTIONMAP) && (!defined(NORMAL) || !defined(USESPHERICALINVERTEX))) || (defined(USEIRRADIANCEMAP) && defined(REFLECTIONMAP_3D))
,uniforms.reflectionMatrix
#endif
#ifdef USEIRRADIANCEMAP
,irradianceSampler
,irradianceSamplerSampler
#ifdef USE_IRRADIANCE_DOMINANT_DIRECTION
,uniforms.vReflectionDominantDirection
#endif
#endif
#ifndef LODBASEDMICROSFURACE
,reflectionLowSampler
,reflectionLowSamplerSampler
,reflectionHighSampler
,reflectionHighSamplerSampler
#endif
#ifdef REALTIME_FILTERING
,uniforms.vReflectionFilteringInfo
#ifdef IBL_CDF_FILTERING
,icdfSampler
,icdfSamplerSampler
#endif
#endif
,viewDirectionW
,diffuseRoughness
,surfaceAlbedo
);
#else
#define CUSTOM_REFLECTION
#endif
#endif
#include<pbrBlockReflectance0>
#ifdef SHEEN
var sheenOut: sheenOutParams;
#ifdef SHEEN_TEXTURE
var sheenMapData: vec4f=textureSample(sheenSampler,sheenSamplerSampler,fragmentInputs.vSheenUV+uvOffset);
#endif
#if defined(SHEEN_ROUGHNESS) && defined(SHEEN_TEXTURE_ROUGHNESS) && !defined(SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE)
var sheenMapRoughnessData: vec4f=textureSample(sheenRoughnessSampler,sheenRoughnessSamplerSampler,fragmentInputs.vSheenRoughnessUV+uvOffset)*uniforms.vSheenInfos.w;
#endif
sheenOut=sheenBlock(
uniforms.vSheenColor
#ifdef SHEEN_ROUGHNESS
,uniforms.vSheenRoughness
#if defined(SHEEN_TEXTURE_ROUGHNESS) && !defined(SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE)
,sheenMapRoughnessData
#endif
#endif
,roughness
#ifdef SHEEN_TEXTURE
,sheenMapData
,uniforms.vSheenInfos.y
#endif
,reflectanceF0
#ifdef SHEEN_LINKWITHALBEDO
,baseColor
,surfaceAlbedo
#endif
#ifdef ENVIRONMENTBRDF
,NdotV
,environmentBrdf
#endif
#if defined(REFLECTION) && defined(ENVIRONMENTBRDF)
,AARoughnessFactors
,uniforms.vReflectionMicrosurfaceInfos
,uniforms.vReflectionInfos
,uniforms.vReflectionColor
,uniforms.vLightingIntensity
,reflectionSampler
,reflectionSamplerSampler
,reflectionOut.reflectionCoords
,NdotVUnclamped
#ifndef LODBASEDMICROSFURACE
,reflectionLowSampler
,reflectionLowSamplerSampler
,reflectionHighSampler
,reflectionHighSamplerSampler
#endif
#ifdef REALTIME_FILTERING
,uniforms.vReflectionFilteringInfo
#endif
#if !defined(REFLECTIONMAP_SKYBOX) && defined(RADIANCEOCCLUSION)
,seo
#endif
#if !defined(REFLECTIONMAP_SKYBOX) && defined(HORIZONOCCLUSION) && defined(BUMP) && defined(REFLECTIONMAP_3D)
,eho
#endif
#endif
);
#ifdef SHEEN_LINKWITHALBEDO
surfaceAlbedo=sheenOut.surfaceAlbedo;
#endif
#endif
#ifdef CLEARCOAT
#ifdef CLEARCOAT_TEXTURE
var clearCoatMapData: vec2f=textureSample(clearCoatSampler,clearCoatSamplerSampler,fragmentInputs.vClearCoatUV+uvOffset).rg*uniforms.vClearCoatInfos.y;
#endif
#endif
#ifdef IRIDESCENCE
var iridescenceOut: iridescenceOutParams;
#ifdef IRIDESCENCE_TEXTURE
var iridescenceMapData: vec2f=textureSample(iridescenceSampler,iridescenceSamplerSampler,fragmentInputs.vIridescenceUV+uvOffset).rg*uniforms.vIridescenceInfos.y;
#endif
#ifdef IRIDESCENCE_THICKNESS_TEXTURE
var iridescenceThicknessMapData: vec2f=textureSample(iridescenceThicknessSampler,iridescenceThicknessSamplerSampler,fragmentInputs.vIridescenceThicknessUV+uvOffset).rg*uniforms.vIridescenceInfos.w;
#endif
iridescenceOut=iridescenceBlock(
uniforms.vIridescenceParams
,NdotV
,specularEnvironmentR0
#ifdef IRIDESCENCE_TEXTURE
,iridescenceMapData
#endif
#ifdef IRIDESCENCE_THICKNESS_TEXTURE
,iridescenceThicknessMapData
#endif
#ifdef CLEARCOAT
,NdotVUnclamped
,uniforms.vClearCoatParams
#ifdef CLEARCOAT_TEXTURE
,clearCoatMapData
#endif
#endif
);var iridescenceIntensity: f32=iridescenceOut.iridescenceIntensity;specularEnvironmentR0=iridescenceOut.specularEnvironmentR0;
#endif
var clearcoatOut: clearcoatOutParams;
#ifdef CLEARCOAT
#if defined(CLEARCOAT_TEXTURE_ROUGHNESS) && !defined(CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE)
var clearCoatMapRoughnessData: vec4f=textureSample(clearCoatRoughnessSampler,clearCoatRoughnessSamplerSampler,fragmentInputs.vClearCoatRoughnessUV+uvOffset)*uniforms.vClearCoatInfos.w;
#endif
#if defined(CLEARCOAT_TINT) && defined(CLEARCOAT_TINT_TEXTURE)
var clearCoatTintMapData: vec4f=textureSample(clearCoatTintSampler,clearCoatTintSamplerSampler,fragmentInputs.vClearCoatTintUV+uvOffset);
#endif
#ifdef CLEARCOAT_BUMP
var clearCoatBumpMapData: vec4f=textureSample(clearCoatBumpSampler,clearCoatBumpSamplerSampler,fragmentInputs.vClearCoatBumpUV+uvOffset);
#endif
clearcoatOut=clearcoatBlock(
fragmentInputs.vPositionW
,geometricNormalW
,viewDirectionW
,uniforms.vClearCoatParams
#if defined(CLEARCOAT_TEXTURE_ROUGHNESS) && !defined(CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE)
,clearCoatMapRoughnessData
#endif
,specularEnvironmentR0
#ifdef CLEARCOAT_TEXTURE
,clearCoatMapData
#endif
#ifdef CLEARCOAT_TINT
,uniforms.vClearCoatTintParams
,uniforms.clearCoatColorAtDistance
,uniforms.vClearCoatRefractionParams
#ifdef CLEARCOAT_TINT_TEXTURE
,clearCoatTintMapData
#endif
#endif
#ifdef CLEARCOAT_BUMP
,uniforms.vClearCoatBumpInfos
,clearCoatBumpMapData
,fragmentInputs.vClearCoatBumpUV
#if defined(TANGENT) && defined(NORMAL)
,mat3x3<f32>(input.vTBN0,input.vTBN1,input.vTBN2)
#else
,uniforms.vClearCoatTangentSpaceParams
#endif
#ifdef OBJECTSPACE_NORMALMAP
,uniforms.normalMatrix
#endif
#endif
#if defined(FORCENORMALFORWARD) && defined(NORMAL)
,faceNormal
#endif
#ifdef REFLECTION
,uniforms.vReflectionMicrosurfaceInfos
,uniforms.vReflectionInfos
,uniforms.vReflectionColor
,uniforms.vLightingIntensity
,reflectionSampler
,reflectionSamplerSampler
#ifndef LODBASEDMICROSFURACE
,reflectionLowSampler
,reflectionLowSamplerSampler
,reflectionHighSampler
,reflectionHighSamplerSampler
#endif
#ifdef REALTIME_FILTERING
,uniforms.vReflectionFilteringInfo
#endif
#endif
#if defined(CLEARCOAT_BUMP) || defined(TWOSIDEDLIGHTING)
,select(-1.,1.,fragmentInputs.frontFacing)
#endif
);
#else
clearcoatOut.specularEnvironmentR0=specularEnvironmentR0;
#endif
#include<pbrBlockReflectance>
var subSurfaceOut: subSurfaceOutParams;
#ifdef SUBSURFACE
#ifdef SS_THICKNESSANDMASK_TEXTURE
var thicknessMap: vec4f=textureSample(thicknessSampler,thicknessSamplerSampler,fragmentInputs.vThicknessUV+uvOffset);
#endif
#ifdef SS_REFRACTIONINTENSITY_TEXTURE
var refractionIntensityMap: vec4f=textureSample(refractionIntensitySampler,refractionIntensitySamplerSampler,fragmentInputs.vRefractionIntensityUV+uvOffset);
#endif
#ifdef SS_TRANSLUCENCYINTENSITY_TEXTURE
var translucencyIntensityMap: vec4f=textureSample(translucencyIntensitySampler,translucencyIntensitySamplerSampler,fragmentInputs.vTranslucencyIntensityUV+uvOffset);
#endif
#ifdef SS_TRANSLUCENCYCOLOR_TEXTURE
var translucencyColorMap: vec4f=textureSample(translucencyColorSampler,translucencyColorSamplerSampler,fragmentInputs.vTranslucencyColorUV+uvOffset);
#ifdef SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA
translucencyColorMap=toLinearSpaceVec4(translucencyColorMap);
#endif
#endif
subSurfaceOut=subSurfaceBlock(
uniforms.vSubSurfaceIntensity
,uniforms.vThicknessParam
,uniforms.vTintColor
,normalW
#ifdef LEGACY_SPECULAR_ENERGY_CONSERVATION
,vec3f(max(colorSpecularEnvironmentReflectance.r,max(colorSpecularEnvironmentReflectance.g,colorSpecularEnvironmentReflectance.b)))
#else
,baseSpecularEnvironmentReflectance
#endif
#ifdef SS_THICKNESSANDMASK_TEXTURE
,thicknessMap
#endif
#ifdef SS_REFRACTIONINTENSITY_TEXTURE
,refractionIntensityMap
#endif
#ifdef SS_TRANSLUCENCYINTENSITY_TEXTURE
,translucencyIntensityMap
#endif
#ifdef REFLECTION
#ifdef SS_TRANSLUCENCY
,uniforms.reflectionMatrix
#ifdef USESPHERICALFROMREFLECTIONMAP
#if !defined(NORMAL) || !defined(USESPHERICALINVERTEX)
,reflectionOut.irradianceVector
#endif
#if defined(REALTIME_FILTERING)
,reflectionSampler
,reflectionSamplerSampler
,uniforms.vReflectionFilteringInfo
#ifdef IBL_CDF_FILTERING
,icdfSampler
,icdfSamplerSampler
#endif
#endif
#endif
#ifdef USEIRRADIANCEMAP
,irradianceSampler
,irradianceSamplerSampler
#endif
#endif
#endif
#if defined(SS_REFRACTION) || defined(SS_TRANSLUCENCY)
,surfaceAlbedo
#endif
#ifdef SS_REFRACTION
,fragmentInputs.vPositionW
,viewDirectionW
,scene.view
,uniforms.vRefractionInfos
,uniforms.refractionMatrix
,uniforms.vRefractionMicrosurfaceInfos
,uniforms.vLightingIntensity
#ifdef SS_LINKREFRACTIONTOTRANSPARENCY
,alpha
#endif
#ifdef SS_LODINREFRACTIONALPHA
,NdotVUnclamped
#endif
#ifdef SS_LINEARSPECULARREFRACTION
,roughness
#endif
,alphaG
,refractionSampler
,refractionSamplerSampler
#ifndef LODBASEDMICROSFURACE
,refractionLowSampler
,refractionLowSamplerSampler
,refractionHighSampler
,refractionHighSamplerSampler
#endif
#ifdef ANISOTROPIC
,anisotropicOut
#endif
#ifdef REALTIME_FILTERING
,uniforms.vRefractionFilteringInfo
#endif
#ifdef SS_USE_LOCAL_REFRACTIONMAP_CUBIC
,uniforms.vRefractionPosition
,uniforms.vRefractionSize
#endif
#ifdef SS_DISPERSION
,uniforms.dispersion
#endif
#endif
#ifdef SS_TRANSLUCENCY
,uniforms.vDiffusionDistance
,uniforms.vTranslucencyColor
#ifdef SS_TRANSLUCENCYCOLOR_TEXTURE
,translucencyColorMap
#endif
#endif
);
#ifdef SS_REFRACTION
surfaceAlbedo=subSurfaceOut.surfaceAlbedo;
#ifdef SS_LINKREFRACTIONTOTRANSPARENCY
alpha=subSurfaceOut.alpha;
#endif
#endif
#else
subSurfaceOut.specularEnvironmentReflectance=colorSpecularEnvironmentReflectance;
#endif
#include<pbrBlockDirectLighting>
#include<lightFragment>[0..maxSimultaneousLights]
#include<pbrBlockFinalLitComponents>
#endif 
#include<pbrBlockFinalUnlitComponents>
#define CUSTOM_FRAGMENT_BEFORE_FINALCOLORCOMPOSITION
#include<pbrBlockFinalColorComposition>
#include<logDepthFragment>
#include<fogFragment>(color,finalColor)
#include<pbrBlockImageProcessing>
#define CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR
#ifdef PREPASS
#include<pbrBlockPrePass>
#endif
#if !defined(PREPASS) && !defined(ORDER_INDEPENDENT_TRANSPARENCY)
fragmentOutputs.color=finalColor;
#endif
#include<oitFragment>
#if ORDER_INDEPENDENT_TRANSPARENCY
if (fragDepth==nearestDepth) {fragmentOutputs.frontColor=vec4f(fragmentOutputs.frontColor.rgb+finalColor.rgb*finalColor.a*alphaMultiplier,1.0-alphaMultiplier*(1.0-finalColor.a));} else {fragmentOutputs.backColor+=finalColor;}
#endif
#include<pbrDebug>
#define CUSTOM_FRAGMENT_MAIN_END
}
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const pbrPixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=pbr.fragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/openpbr.vertex.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "openpbrVertexShaderWGSL",
    ()=>openpbrVertexShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$openpbrUboDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/openpbrUboDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$uvAttributeDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/uvAttributeDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$mainUVVaryingDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/mainUVVaryingDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$helperFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/helperFunctions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$pbrBRDFFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/pbrBRDFFunctions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$bonesDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/bonesDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$bakedVertexAnimationDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/bakedVertexAnimationDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$instancesDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/instancesDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$prePassVertexDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/prePassVertexDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$samplerVertexDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/samplerVertexDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$harmonicsFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/harmonicsFunctions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$openpbrNormalMapVertexDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/openpbrNormalMapVertexDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$clipPlaneVertexDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/clipPlaneVertexDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$fogVertexDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/fogVertexDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$lightVxUboDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/lightVxUboDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$morphTargetsVertexGlobalDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/morphTargetsVertexGlobalDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$morphTargetsVertexDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/morphTargetsVertexDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$logDepthDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/logDepthDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$morphTargetsVertexGlobal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/morphTargetsVertexGlobal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$morphTargetsVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/morphTargetsVertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$instancesVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/instancesVertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$bonesVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/bonesVertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$bakedVertexAnimation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/bakedVertexAnimation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$prePassVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/prePassVertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$uvVariableDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/uvVariableDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$samplerVertexImplementation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/samplerVertexImplementation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$openpbrNormalMapVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/openpbrNormalMapVertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$clipPlaneVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/clipPlaneVertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$fogVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/fogVertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$shadowsVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/shadowsVertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$vertexColorMixing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/vertexColorMixing.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$logDepthVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/logDepthVertex.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const name = "openpbrVertexShader";
const shader = `#define OPENPBR_VERTEX_SHADER
#include<openpbrUboDeclaration>
#define CUSTOM_VERTEX_BEGIN
attribute position: vec3f;
#ifdef NORMAL
attribute normal: vec3f;
#endif
#ifdef TANGENT
attribute tangent: vec4f;
#endif
#ifdef UV1
attribute uv: vec2f;
#endif
#include<uvAttributeDeclaration>[2..7]
#include<mainUVVaryingDeclaration>[1..7]
#ifdef VERTEXCOLOR
attribute color: vec4f;
#endif
#include<helperFunctions>
#include<pbrBRDFFunctions>
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<instancesDeclaration>
#include<prePassVertexDeclaration>
#include<samplerVertexDeclaration>(_DEFINENAME_,BASE_COLOR,_VARYINGNAME_,BaseColor)
#include<samplerVertexDeclaration>(_DEFINENAME_,BASE_WEIGHT,_VARYINGNAME_,BaseWeight)
#include<samplerVertexDeclaration>(_DEFINENAME_,BASE_DIFFUSE_ROUGHNESS,_VARYINGNAME_,BaseDiffuseRoughness)
#include<samplerVertexDeclaration>(_DEFINENAME_,BASE_METALNESS,_VARYINGNAME_,BaseMetalness)
#include<samplerVertexDeclaration>(_DEFINENAME_,SPECULAR_WEIGHT,_VARYINGNAME_,SpecularWeight)
#include<samplerVertexDeclaration>(_DEFINENAME_,SPECULAR_COLOR,_VARYINGNAME_,SpecularColor)
#include<samplerVertexDeclaration>(_DEFINENAME_,SPECULAR_ROUGHNESS,_VARYINGNAME_,SpecularRoughness)
#include<samplerVertexDeclaration>(_DEFINENAME_,SPECULAR_ROUGHNESS_ANISOTROPY,_VARYINGNAME_,SpecularRoughnessAnisotropy)
#include<samplerVertexDeclaration>(_DEFINENAME_,COAT_WEIGHT,_VARYINGNAME_,CoatWeight)
#include<samplerVertexDeclaration>(_DEFINENAME_,COAT_COLOR,_VARYINGNAME_,CoatColor)
#include<samplerVertexDeclaration>(_DEFINENAME_,COAT_ROUGHNESS,_VARYINGNAME_,CoatRoughness)
#include<samplerVertexDeclaration>(_DEFINENAME_,COAT_ROUGHNESS_ANISOTROPY,_VARYINGNAME_,CoatRoughnessAnisotropy)
#include<samplerVertexDeclaration>(_DEFINENAME_,COAT_DARKENING,_VARYINGNAME_,CoatDarkening)
#include<samplerVertexDeclaration>(_DEFINENAME_,FUZZ_WEIGHT,_VARYINGNAME_,FuzzWeight)
#include<samplerVertexDeclaration>(_DEFINENAME_,FUZZ_COLOR,_VARYINGNAME_,FuzzColor)
#include<samplerVertexDeclaration>(_DEFINENAME_,FUZZ_ROUGHNESS,_VARYINGNAME_,FuzzRoughness)
#include<samplerVertexDeclaration>(_DEFINENAME_,GEOMETRY_NORMAL,_VARYINGNAME_,GeometryNormal)
#include<samplerVertexDeclaration>(_DEFINENAME_,GEOMETRY_TANGENT,_VARYINGNAME_,GeometryTangent)
#include<samplerVertexDeclaration>(_DEFINENAME_,GEOMETRY_COAT_NORMAL,_VARYINGNAME_,GeometryCoatNormal)
#include<samplerVertexDeclaration>(_DEFINENAME_,GEOMETRY_OPACITY,_VARYINGNAME_,GeometryOpacity)
#include<samplerVertexDeclaration>(_DEFINENAME_,EMISSION_COLOR,_VARYINGNAME_,EmissionColor)
#include<samplerVertexDeclaration>(_DEFINENAME_,THIN_FILM_WEIGHT,_VARYINGNAME_,ThinFilmWeight)
#include<samplerVertexDeclaration>(_DEFINENAME_,THIN_FILM_THICKNESS,_VARYINGNAME_,ThinFilmThickness)
#include<samplerVertexDeclaration>(_DEFINENAME_,AMBIENT_OCCLUSION,_VARYINGNAME_,AmbientOcclusion)
#include<samplerVertexDeclaration>(_DEFINENAME_,DECAL,_VARYINGNAME_,Decal)
#include<samplerVertexDeclaration>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail)
varying vPositionW: vec3f;
#if DEBUGMODE>0
varying vClipSpacePosition: vec4f;
#endif
#ifdef NORMAL
varying vNormalW: vec3f;
#if defined(USESPHERICALFROMREFLECTIONMAP) && defined(USESPHERICALINVERTEX)
varying vEnvironmentIrradiance: vec3f;
#include<harmonicsFunctions>
#endif
#endif
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
varying vColor: vec4f;
#endif
#include<openpbrNormalMapVertexDeclaration>
#include<clipPlaneVertexDeclaration>
#include<fogVertexDeclaration>
#include<lightVxUboDeclaration>[0..maxSimultaneousLights]
#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]
#ifdef REFLECTIONMAP_SKYBOX
varying vPositionUVW: vec3f;
#endif
#if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)
varying vDirectionW: vec3f;
#endif
#include<logDepthDeclaration>
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {
#define CUSTOM_VERTEX_MAIN_BEGIN
var positionUpdated: vec3f=vertexInputs.position;
#ifdef NORMAL
var normalUpdated: vec3f=vertexInputs.normal;
#endif
#ifdef TANGENT
var tangentUpdated: vec4f=vertexInputs.tangent;
#endif
#ifdef UV1
var uvUpdated: vec2f=vertexInputs.uv;
#endif
#ifdef UV2
var uv2Updated: vec2f=vertexInputs.uv2;
#endif
#ifdef VERTEXCOLOR
var colorUpdated: vec4f=vertexInputs.color;
#endif
#include<morphTargetsVertexGlobal>
#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]
#ifdef REFLECTIONMAP_SKYBOX
vertexOutputs.vPositionUVW=positionUpdated;
#endif
#define CUSTOM_VERTEX_UPDATE_POSITION
#define CUSTOM_VERTEX_UPDATE_NORMAL
#include<instancesVertex>
#if defined(PREPASS) && ((defined(PREPASS_VELOCITY) || defined(PREPASS_VELOCITY_LINEAR)) && !defined(BONES_VELOCITY_ENABLED)
vertexOutputs.vCurrentPosition=scene.viewProjection*finalWorld*vec4f(positionUpdated,1.0);vertexOutputs.vPreviousPosition=uniforms.previousViewProjection*finalPreviousWorld*vec4f(positionUpdated,1.0);
#endif
#include<bonesVertex>
#include<bakedVertexAnimation>
var worldPos: vec4f=finalWorld* vec4f(positionUpdated,1.0);vertexOutputs.vPositionW= worldPos.xyz;
#ifdef PREPASS
#include<prePassVertex>
#endif
#ifdef NORMAL
var normalWorld: mat3x3f= mat3x3f(finalWorld[0].xyz,finalWorld[1].xyz,finalWorld[2].xyz);
#if defined(INSTANCES) && defined(THIN_INSTANCES)
vertexOutputs.vNormalW=normalUpdated/ vec3f(dot(normalWorld[0],normalWorld[0]),dot(normalWorld[1],normalWorld[1]),dot(normalWorld[2],normalWorld[2]));vertexOutputs.vNormalW=normalize(normalWorld*vertexOutputs.vNormalW);
#else
#ifdef NONUNIFORMSCALING
normalWorld=transposeMat3(inverseMat3(normalWorld));
#endif
vertexOutputs.vNormalW=normalize(normalWorld*normalUpdated);
#endif
#if defined(USESPHERICALFROMREFLECTIONMAP) && defined(USESPHERICALINVERTEX)
#if BASE_DIFFUSE_MODEL != BRDF_DIFFUSE_MODEL_LAMBERT && BASE_DIFFUSE_MODEL != BRDF_DIFFUSE_MODEL_LEGACY
var viewDirectionW: vec3f=normalize(scene.vEyePosition.xyz-vertexOutputs.vPositionW);var NdotV: f32=max(dot(vertexOutputs.vNormalW,viewDirectionW),0.0);var roughNormal: vec3f=mix(vertexOutputs.vNormalW,viewDirectionW,(0.5*(1.0-NdotV))*uniforms.vBaseDiffuseRoughness);var reflectionVector: vec3f= (uniforms.reflectionMatrix* vec4f(roughNormal,0)).xyz;
#else
var reflectionVector: vec3f= (uniforms.reflectionMatrix* vec4f(vertexOutputs.vNormalW,0)).xyz;
#endif
#ifdef REFLECTIONMAP_OPPOSITEZ
reflectionVector.z*=-1.0;
#endif
vertexOutputs.vEnvironmentIrradiance=computeEnvironmentIrradiance(reflectionVector);
#endif
#endif
#define CUSTOM_VERTEX_UPDATE_WORLDPOS
#ifdef MULTIVIEW
if (gl_ViewID_OVR==0u) {vertexOutputs.position=scene.viewProjection*worldPos;} else {vertexOutputs.position=scene.viewProjectionR*worldPos;}
#else
vertexOutputs.position=scene.viewProjection*worldPos;
#endif
#if DEBUGMODE>0
vertexOutputs.vClipSpacePosition=vertexOutputs.position;
#endif
#if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)
vertexOutputs.vDirectionW=normalize((finalWorld*vec4f(positionUpdated,0.0)).xyz);
#endif
#ifndef UV1
var uvUpdated: vec2f= vec2f(0.,0.);
#endif
#ifdef MAINUV1
vertexOutputs.vMainUV1=uvUpdated;
#endif
#ifndef UV2
var uv2Updated: vec2f= vec2f(0.,0.);
#endif
#ifdef MAINUV2
vertexOutputs.vMainUV2=uv2Updated;
#endif
#include<uvVariableDeclaration>[3..7]
#include<samplerVertexImplementation>(_DEFINENAME_,BASE_COLOR,_VARYINGNAME_,BaseColor,_MATRIXNAME_,baseColor,_INFONAME_,BaseColorInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,BASE_WEIGHT,_VARYINGNAME_,BaseWeight,_MATRIXNAME_,baseWeight,_INFONAME_,BaseWeightInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,BASE_DIFFUSE_ROUGHNESS,_VARYINGNAME_,BaseDiffuseRoughness,_MATRIXNAME_,baseDiffuseRoughness,_INFONAME_,BaseDiffuseRoughnessInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,BASE_METALNESS,_VARYINGNAME_,BaseMetalness,_MATRIXNAME_,baseMetalness,_INFONAME_,BaseMetalnessInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,SPECULAR_WEIGHT,_VARYINGNAME_,SpecularWeight,_MATRIXNAME_,specularWeight,_INFONAME_,SpecularWeightInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,SPECULAR_COLOR,_VARYINGNAME_,SpecularColor,_MATRIXNAME_,specularColor,_INFONAME_,SpecularColorInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,SPECULAR_ROUGHNESS,_VARYINGNAME_,SpecularRoughness,_MATRIXNAME_,specularRoughness,_INFONAME_,SpecularRoughnessInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,SPECULAR_ROUGHNESS_ANISOTROPY,_VARYINGNAME_,SpecularRoughnessAnisotropy,_MATRIXNAME_,specularRoughnessAnisotropy,_INFONAME_,SpecularRoughnessAnisotropyInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,COAT_WEIGHT,_VARYINGNAME_,CoatWeight,_MATRIXNAME_,coatWeight,_INFONAME_,CoatWeightInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,COAT_COLOR,_VARYNAME_,CoatColor,_MATRIXNAME_,coatColor,_INFONAME_,CoatColorInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,COAT_ROUGHNESS,_VARYINGNAME_,CoatRoughness,_MATRIXNAME_,coatRoughness,_INFONAME_,CoatRoughnessInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,COAT_ROUGHNESS_ANISOTROPY,_VARYINGNAME_,CoatRoughnessAnisotropy,_MATRIXNAME_,coatRoughnessAnisotropy,_INFONAME_,CoatRoughnessAnisotropyInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,COAT_DARKENING,_VARYINGNAME_,CoatDarkening,_MATRIXNAME_,coatDarkening,_INFONAME_,CoatDarkeningInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,FUZZ_WEIGHT,_VARYINGNAME_,FuzzWeight,_MATRIXNAME_,fuzzWeight,_INFONAME_,FuzzWeightInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,FUZZ_COLOR,_VARYINGNAME_,FuzzColor,_MATRIXNAME_,fuzzColor,_INFONAME_,FuzzColorInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,FUZZ_ROUGHNESS,_VARYINGNAME_,FuzzRoughness,_MATRIXNAME_,fuzzRoughness,_INFONAME_,FuzzRoughnessInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,GEOMETRY_NORMAL,_VARYINGNAME_,GeometryNormal,_MATRIXNAME_,geometryNormal,_INFONAME_,GeometryNormalInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,GEOMETRY_TANGENT,_VARYINGNAME_,GeometryTangent,_MATRIXNAME_,geometryTangent,_INFONAME_,GeometryTangentInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,GEOMETRY_COAT_NORMAL,_VARYINGNAME_,GeometryCoatNormal,_MATRIXNAME_,geometryCoatNormal,_INFONAME_,GeometryCoatNormalInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,GEOMETRY_OPACITY,_VARYINGNAME_,GeometryOpacity,_MATRIXNAME_,geometryOpacity,_INFONAME_,GeometryOpacityInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,EMISSION_COLOR,_VARYINGNAME_,EmissionColor,_MATRIXNAME_,emissionColor,_INFONAME_,EmissionColorInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,THIN_FILM_WEIGHT,_VARYINGNAME_,ThinFilmWeight,_MATRIXNAME_,thinFilmWeight,_INFONAME_,ThinFilmWeightInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,THIN_FILM_THICKNESS,_VARYINGNAME_,ThinFilmThickness,_MATRIXNAME_,thinFilmThickness,_INFONAME_,ThinFilmThicknessInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,AMBIENT_OCCLUSION,_VARYINGNAME_,AmbientOcclusion,_MATRIXNAME_,ambientOcclusion,_INFONAME_,AmbientOcclusionInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,DECAL,_VARYINGNAME_,Decal,_MATRIXNAME_,decal,_INFONAME_,DecalInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail,_MATRIXNAME_,detail,_INFONAME_,DetailInfos.x)
#include<openpbrNormalMapVertex>
#include<clipPlaneVertex>
#include<fogVertex>
#include<shadowsVertex>[0..maxSimultaneousLights]
#include<vertexColorMixing>
#include<logDepthVertex>
#define CUSTOM_VERTEX_MAIN_END
}`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const openpbrVertexShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=openpbr.vertex.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/openpbr.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "openpbrPixelShaderWGSL",
    ()=>openpbrPixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$prePassDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/prePassDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$oitDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/oitDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$openpbrUboDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/openpbrUboDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$pbrFragmentExtraDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/pbrFragmentExtraDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$lightUboDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/lightUboDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$openpbrFragmentSamplersDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/openpbrFragmentSamplersDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$imageProcessingDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/imageProcessingDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$clipPlaneFragmentDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/clipPlaneFragmentDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$logDepthDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/logDepthDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$fogFragmentDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/fogFragmentDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$helperFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/helperFunctions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$subSurfaceScatteringFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/subSurfaceScatteringFunctions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$importanceSampling$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/importanceSampling.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$pbrHelperFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/pbrHelperFunctions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$imageProcessingFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/imageProcessingFunctions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$shadowsFragmentFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/shadowsFragmentFunctions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$harmonicsFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/harmonicsFunctions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$pbrDirectLightingSetupFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/pbrDirectLightingSetupFunctions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$pbrDirectLightingFalloffFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/pbrDirectLightingFalloffFunctions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$pbrBRDFFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/pbrBRDFFunctions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$hdrFilteringFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/hdrFilteringFunctions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$pbrDirectLightingFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/pbrDirectLightingFunctions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$pbrIBLFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/pbrIBLFunctions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$openpbrNormalMapFragmentMainFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/openpbrNormalMapFragmentMainFunctions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$openpbrNormalMapFragmentFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/openpbrNormalMapFragmentFunctions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$reflectionFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/reflectionFunction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$openpbrDielectricReflectance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/openpbrDielectricReflectance.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$openpbrConductorReflectance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/openpbrConductorReflectance.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$openpbrBlockAmbientOcclusion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/openpbrBlockAmbientOcclusion.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$openpbrGeometryInfo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/openpbrGeometryInfo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$openpbrIblFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/openpbrIblFunctions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$clipPlaneFragment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/clipPlaneFragment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$pbrBlockNormalGeometric$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/pbrBlockNormalGeometric.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$openpbrNormalMapFragment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/openpbrNormalMapFragment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$openpbrBlockNormalFinal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/openpbrBlockNormalFinal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$openpbrBaseLayerData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/openpbrBaseLayerData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$openpbrCoatLayerData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/openpbrCoatLayerData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$openpbrThinFilmLayerData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/openpbrThinFilmLayerData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$openpbrFuzzLayerData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/openpbrFuzzLayerData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$depthPrePass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/depthPrePass.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$openpbrEnvironmentLighting$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/openpbrEnvironmentLighting.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$openpbrDirectLightingInit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/openpbrDirectLightingInit.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$openpbrDirectLighting$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/openpbrDirectLighting.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$logDepthFragment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/logDepthFragment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$fogFragment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/fogFragment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$pbrBlockImageProcessing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/pbrBlockImageProcessing.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$pbrBlockPrePass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/pbrBlockPrePass.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$oitFragment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/oitFragment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$pbrDebug$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/pbrDebug.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const name = "openpbrPixelShader";
const shader = `#define OPENPBR_FRAGMENT_SHADER
#define CUSTOM_FRAGMENT_BEGIN
#include<prePassDeclaration>[SCENE_MRT_COUNT]
#include<oitDeclaration>
#ifndef FROMLINEARSPACE
#define FROMLINEARSPACE
#endif
#include<openpbrUboDeclaration>
#include<pbrFragmentExtraDeclaration>
#include<lightUboDeclaration>[0..maxSimultaneousLights]
#include<openpbrFragmentSamplersDeclaration>
#include<imageProcessingDeclaration>
#include<clipPlaneFragmentDeclaration>
#include<logDepthDeclaration>
#include<fogFragmentDeclaration>
#include<helperFunctions>
#include<subSurfaceScatteringFunctions>
#include<importanceSampling>
#include<pbrHelperFunctions>
#include<imageProcessingFunctions>
#include<shadowsFragmentFunctions>
#include<harmonicsFunctions>
#include<pbrDirectLightingSetupFunctions>
#include<pbrDirectLightingFalloffFunctions>
#include<pbrBRDFFunctions>
#include<hdrFilteringFunctions>
#include<pbrDirectLightingFunctions>
#include<pbrIBLFunctions>
#include<openpbrNormalMapFragmentMainFunctions>
#include<openpbrNormalMapFragmentFunctions>
#ifdef REFLECTION
#include<reflectionFunction>
#endif
#define CUSTOM_FRAGMENT_DEFINITIONS
#include<openpbrDielectricReflectance>
#include<openpbrConductorReflectance>
#include<openpbrBlockAmbientOcclusion>
#include<openpbrGeometryInfo>
#include<openpbrIblFunctions>
fn layer(slab_bottom: vec3f,slab_top: vec3f,lerp_factor: f32,bottom_multiplier: vec3f,top_multiplier: vec3f)->vec3f {return mix(slab_bottom*bottom_multiplier,slab_top*top_multiplier,lerp_factor);}
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
#include<pbrBlockNormalGeometric>
var coatNormalW: vec3f=normalW;
#include<openpbrNormalMapFragment>
#include<openpbrBlockNormalFinal>
#include<openpbrBaseLayerData>
#include<openpbrCoatLayerData>
#include<openpbrThinFilmLayerData>
#include<openpbrFuzzLayerData>
var subsurface_weight: f32=0.0f;var transmission_weight: f32=0.0f;
#define CUSTOM_FRAGMENT_UPDATE_ALPHA
#include<depthPrePass>
#define CUSTOM_FRAGMENT_BEFORE_LIGHTS
var aoOut: ambientOcclusionOutParams;
#ifdef AMBIENT_OCCLUSION
var ambientOcclusionFromTexture: vec3f=textureSample(ambientOcclusionSampler,ambientOcclusionSamplerSampler,fragmentInputs.vAmbientOcclusionUV+uvOffset).rgb;
#endif
aoOut=ambientOcclusionBlock(
#ifdef AMBIENT_OCCLUSION
ambientOcclusionFromTexture,
uniforms.vAmbientOcclusionInfos
#endif
);
#ifdef ANISOTROPIC_COAT
let coatGeoInfo: geometryInfoAnisoOutParams=geometryInfoAniso(
coatNormalW,viewDirectionW.xyz,coat_roughness,geometricNormalW
,vec3f(geometry_coat_tangent.x,geometry_coat_tangent.y,coat_roughness_anisotropy),TBN
);
#else
let coatGeoInfo: geometryInfoOutParams=geometryInfo(
coatNormalW,viewDirectionW.xyz,coat_roughness,geometricNormalW
);
#endif
specular_roughness=mix(specular_roughness,pow(min(1.0f,pow(specular_roughness,4.0f)+2.0f*pow(coat_roughness,4.0f)),0.25f),coat_weight);
#ifdef ANISOTROPIC_BASE
let baseGeoInfo: geometryInfoAnisoOutParams=geometryInfoAniso(
normalW,viewDirectionW.xyz,specular_roughness,geometricNormalW
,vec3f(geometry_tangent.x,geometry_tangent.y,specular_roughness_anisotropy),TBN
);
#else
let baseGeoInfo: geometryInfoOutParams=geometryInfo(
normalW,viewDirectionW.xyz,specular_roughness,geometricNormalW
);
#endif
#ifdef FUZZ
let fuzzNormalW=normalize(mix(normalW,coatNormalW,coat_weight));var fuzzTangent=normalize(TBN[0]);fuzzTangent=normalize(fuzzTangent-dot(fuzzTangent,fuzzNormalW)*fuzzNormalW);let fuzzBitangent=cross(fuzzNormalW,fuzzTangent);let fuzzGeoInfo: geometryInfoOutParams=geometryInfo(
fuzzNormalW,viewDirectionW.xyz,fuzz_roughness,geometricNormalW
);
#endif
let coatReflectance: ReflectanceParams=dielectricReflectance(
coat_ior 
,1.0f 
,vec3f(1.0f)
,coat_weight
);
#ifdef THIN_FILM
let thin_film_outside_ior: f32=mix(1.0f,coat_ior,coat_weight);
#endif
let baseDielectricReflectance: ReflectanceParams=dielectricReflectance(
specular_ior 
,mix(1.0f,coat_ior,coat_weight) 
,specular_color
,specular_weight
);let baseConductorReflectance: ReflectanceParams=conductorReflectance(base_color,specular_color,specular_weight);var material_surface_ibl: vec3f=vec3f(0.f,0.f,0.f);
#include<openpbrEnvironmentLighting>
var material_surface_direct: vec3f=vec3f(0.f,0.f,0.f);
#if defined(LIGHT0)
var aggShadow: f32=0.f;var numLights: f32=0.f;
#include<openpbrDirectLightingInit>[0..maxSimultaneousLights]
#include<openpbrDirectLighting>[0..maxSimultaneousLights]
#endif
var material_surface_emission: vec3f=uniforms.vEmissionColor;
#ifdef EMISSION_COLOR
let emissionColorTex: vec3f=textureSample(emissionColorSampler,emissionColorSamplerSampler,uniforms.vEmissionColorUV+uvOffset).rgb;
#ifdef EMISSION_COLOR_GAMMA
material_surface_emission*=toLinearSpace(emissionColorTex.rgb);
#else
material_surface_emission*=emissionColorTex.rgb;
#endif
material_surface_emission*= uniforms.vEmissionColorInfos.y;
#endif
material_surface_emission*=uniforms.vLightingIntensity.y;
#define CUSTOM_FRAGMENT_BEFORE_FINALCOLORCOMPOSITION
var finalColor: vec4f=vec4f(material_surface_ibl+material_surface_direct+material_surface_emission,alpha);
#define CUSTOM_FRAGMENT_BEFORE_FOG
finalColor=max(finalColor,vec4f(0.0));
#include<logDepthFragment>
#include<fogFragment>(color,finalColor)
#include<pbrBlockImageProcessing>
#define CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR
#ifdef PREPASS
#include<pbrBlockPrePass>
#endif
#if !defined(PREPASS) && !defined(ORDER_INDEPENDENT_TRANSPARENCY)
fragmentOutputs.color=finalColor;
#endif
#include<oitFragment>
#if ORDER_INDEPENDENT_TRANSPARENCY
if (fragDepth==nearestDepth) {fragmentOutputs.frontColor=vec4f(fragmentOutputs.frontColor.rgb+finalColor.rgb*finalColor.a*alphaMultiplier,1.0-alphaMultiplier*(1.0-finalColor.a));} else {fragmentOutputs.backColor+=finalColor;}
#endif
#include<pbrDebug>
#define CUSTOM_FRAGMENT_MAIN_END
}
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const openpbrPixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=openpbr.fragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/procedural.vertex.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "proceduralVertexShaderWGSL",
    ()=>proceduralVertexShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
;
const name = "proceduralVertexShader";
const shader = `attribute position: vec2f;varying vPosition: vec2f;varying vUV: vec2f;const madd: vec2f= vec2f(0.5,0.5);
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {
#define CUSTOM_VERTEX_MAIN_BEGIN
vertexOutputs.vPosition=input.position;vertexOutputs.vUV=input.position*madd+madd;vertexOutputs.position= vec4f(input.position,0.0,1.0);
#define CUSTOM_VERTEX_MAIN_END
}`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const proceduralVertexShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=procedural.vertex.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/hdrFiltering.vertex.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "hdrFilteringVertexShaderWGSL",
    ()=>hdrFilteringVertexShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
;
const name = "hdrFilteringVertexShader";
const shader = `attribute position: vec2f;varying direction: vec3f;uniform up: vec3f;uniform right: vec3f;uniform front: vec3f;
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {
#define CUSTOM_VERTEX_MAIN_BEGIN
var view: mat3x3f= mat3x3f(uniforms.up,uniforms.right,uniforms.front);vertexOutputs.direction=view*vec3f(input.position,1.0);vertexOutputs.position= vec4f(input.position,0.0,1.0);
#define CUSTOM_VERTEX_MAIN_END
}`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const hdrFilteringVertexShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=hdrFiltering.vertex.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/hdrFiltering.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "hdrFilteringPixelShaderWGSL",
    ()=>hdrFilteringPixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$helperFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/helperFunctions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$importanceSampling$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/importanceSampling.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$pbrBRDFFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/pbrBRDFFunctions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$hdrFilteringFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/hdrFilteringFunctions.js [app-client] (ecmascript)");
;
;
;
;
;
const name = "hdrFilteringPixelShader";
const shader = `#include<helperFunctions>
#include<importanceSampling>
#include<pbrBRDFFunctions>
#include<hdrFilteringFunctions>
uniform alphaG: f32;var inputTextureSampler: sampler;var inputTexture: texture_cube<f32>;uniform vFilteringInfo: vec2f;uniform hdrScale: f32;varying direction: vec3f;@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var color: vec3f=radiance(uniforms.alphaG,inputTexture,inputTextureSampler,input.direction,uniforms.vFilteringInfo);fragmentOutputs.color= vec4f(color*uniforms.hdrScale,1.0);}`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const hdrFilteringPixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=hdrFiltering.fragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/hdrIrradianceFiltering.vertex.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "hdrIrradianceFilteringVertexShaderWGSL",
    ()=>hdrIrradianceFilteringVertexShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
;
const name = "hdrIrradianceFilteringVertexShader";
const shader = `attribute position: vec2f;varying direction: vec3f;uniform up: vec3f;uniform right: vec3f;uniform front: vec3f;
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {
#define CUSTOM_VERTEX_MAIN_BEGIN
var view: mat3x3f= mat3x3f(uniforms.up,uniforms.right,uniforms.front);vertexOutputs.direction=view*vec3f(input.position,1.0);vertexOutputs.position= vec4f(input.position,0.0,1.0);
#define CUSTOM_VERTEX_MAIN_END
}`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const hdrIrradianceFilteringVertexShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=hdrIrradianceFiltering.vertex.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/hdrIrradianceFiltering.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "hdrIrradianceFilteringPixelShaderWGSL",
    ()=>hdrIrradianceFilteringPixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$helperFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/helperFunctions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$importanceSampling$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/importanceSampling.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$pbrBRDFFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/pbrBRDFFunctions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$hdrFilteringFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/hdrFilteringFunctions.js [app-client] (ecmascript)");
;
;
;
;
;
const name = "hdrIrradianceFilteringPixelShader";
const shader = `#include<helperFunctions>
#include<importanceSampling>
#include<pbrBRDFFunctions>
#include<hdrFilteringFunctions>
var inputTextureSampler: sampler;var inputTexture: texture_cube<f32>;
#ifdef IBL_CDF_FILTERING
var icdfTextureSampler: sampler;var icdfTexture: texture_2d<f32>;
#endif
uniform vFilteringInfo: vec2f;uniform hdrScale: f32;varying direction: vec3f;@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var color: vec3f=irradiance(inputTexture,inputTextureSampler,input.direction,uniforms.vFilteringInfo,0.0,vec3f(1.0),input.direction
#ifdef IBL_CDF_FILTERING
,icdfTexture,icdfTextureSampler
#endif
);fragmentOutputs.color= vec4f(color*uniforms.hdrScale,1.0);}`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const hdrIrradianceFilteringPixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=hdrIrradianceFiltering.fragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/gaussianSplatting.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "gaussianSplattingPixelShaderWGSL",
    ()=>gaussianSplattingPixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$clipPlaneFragmentDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/clipPlaneFragmentDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$logDepthDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/logDepthDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$fogFragmentDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/fogFragmentDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$gaussianSplattingFragmentDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/gaussianSplattingFragmentDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$clipPlaneFragment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/clipPlaneFragment.js [app-client] (ecmascript)");
;
;
;
;
;
;
const name = "gaussianSplattingPixelShader";
const shader = `#include<clipPlaneFragmentDeclaration>
#include<logDepthDeclaration>
#include<fogFragmentDeclaration>
varying vColor: vec4f;varying vPosition: vec2f;
#include<gaussianSplattingFragmentDeclaration>
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#include<clipPlaneFragment>
fragmentOutputs.color=gaussianColor(input.vColor,input.vPosition);}
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const gaussianSplattingPixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=gaussianSplatting.fragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/gaussianSplatting.vertex.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "gaussianSplattingVertexShaderWGSL",
    ()=>gaussianSplattingVertexShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$sceneUboDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/sceneUboDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$meshUboDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/meshUboDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$helperFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/helperFunctions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$clipPlaneVertexDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/clipPlaneVertexDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$fogVertexDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/fogVertexDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$logDepthDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/logDepthDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$gaussianSplatting$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/gaussianSplatting.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$clipPlaneVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/clipPlaneVertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$fogVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/fogVertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$logDepthVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/logDepthVertex.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
const name = "gaussianSplattingVertexShader";
const shader = `#include<sceneUboDeclaration>
#include<meshUboDeclaration>
#include<helperFunctions>
#include<clipPlaneVertexDeclaration>
#include<fogVertexDeclaration>
#include<logDepthDeclaration>
attribute splatIndex0: vec4f;attribute splatIndex1: vec4f;attribute splatIndex2: vec4f;attribute splatIndex3: vec4f;attribute position: vec3f;uniform invViewport: vec2f;uniform dataTextureSize: vec2f;uniform focal: vec2f;uniform kernelSize: f32;uniform eyePosition: vec3f;uniform viewDirectionFactor: vec3f;var covariancesATexture: texture_2d<f32>;var covariancesBTexture: texture_2d<f32>;var centersTexture: texture_2d<f32>;var colorsTexture: texture_2d<f32>;
#if SH_DEGREE>0
var shTexture0: texture_2d<u32>;
#endif
#if SH_DEGREE>1
var shTexture1: texture_2d<u32>;
#endif
#if SH_DEGREE>2
var shTexture2: texture_2d<u32>;
#endif
varying vColor: vec4f;varying vPosition: vec2f;
#include<gaussianSplatting>
@vertex
fn main(input : VertexInputs)->FragmentInputs {let splatIndex: f32=getSplatIndex(i32(input.position.z+0.5),input.splatIndex0,input.splatIndex1,input.splatIndex2,input.splatIndex3);var splat: Splat=readSplat(splatIndex,uniforms.dataTextureSize);var covA: vec3f=splat.covA.xyz;var covB: vec3f=vec3f(splat.covA.w,splat.covB.xy);let worldPos: vec4f=mesh.world*vec4f(splat.center.xyz,1.0);vertexOutputs.vPosition=input.position.xy;
#if SH_DEGREE>0
let worldRot: mat3x3f= mat3x3f(mesh.world[0].xyz,mesh.world[1].xyz,mesh.world[2].xyz);let normWorldRot: mat3x3f=inverseMat3(worldRot);var dir: vec3f=normalize(normWorldRot*(worldPos.xyz-uniforms.eyePosition.xyz));dir*=uniforms.viewDirectionFactor;vertexOutputs.vColor=vec4f(splat.color.xyz+computeSH(splat,dir),splat.color.w);
#else
vertexOutputs.vColor=splat.color;
#endif
vertexOutputs.position=gaussianSplatting(input.position.xy,worldPos.xyz,vec2f(1.0,1.0),covA,covB,mesh.world,scene.view,scene.projection,uniforms.focal,uniforms.invViewport,uniforms.kernelSize);
#include<clipPlaneVertex>
#include<fogVertex>
#include<logDepthVertex>
}
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const gaussianSplattingVertexShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=gaussianSplatting.vertex.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/gaussianSplattingDepth.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "gaussianSplattingDepthPixelShaderWGSL",
    ()=>gaussianSplattingDepthPixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$gaussianSplattingFragmentDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/gaussianSplattingFragmentDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$shadowMapFragmentExtraDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/shadowMapFragmentExtraDeclaration.js [app-client] (ecmascript)");
;
;
;
const name = "gaussianSplattingDepthPixelShader";
const shader = `#include<gaussianSplattingFragmentDeclaration>
#include<shadowMapFragmentExtraDeclaration>
varying vPosition: vec2f;varying vColor: vec4f;fn checkDiscard(inPosition: vec2f,inColor: vec4f)->vec4f {var A : f32=-dot(inPosition,inPosition);var alpha : f32=exp(A)*inColor.a;
#if defined(SM_SOFTTRANSPARENTSHADOW) && SM_SOFTTRANSPARENTSHADOW==1
if (A<-4.) {discard;}
#else
if (A<-1.) {discard;}
#endif
return vec4f(inColor.rgb,alpha);}
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=checkDiscard(fragmentInputs.vPosition,fragmentInputs.vColor);
#if defined(SM_SOFTTRANSPARENTSHADOW) && SM_SOFTTRANSPARENTSHADOW==1
var alpha : f32=fragmentOutputs.color.a;
#endif
}
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const gaussianSplattingDepthPixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=gaussianSplattingDepth.fragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/gaussianSplattingDepth.vertex.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "gaussianSplattingDepthVertexShaderWGSL",
    ()=>gaussianSplattingDepthVertexShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$sceneUboDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/sceneUboDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$meshUboDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/meshUboDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$gaussianSplatting$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/gaussianSplatting.js [app-client] (ecmascript)");
;
;
;
;
const name = "gaussianSplattingDepthVertexShader";
const shader = `#include<sceneUboDeclaration>
#include<meshUboDeclaration>
attribute splatIndex0: vec4f;attribute splatIndex1: vec4f;attribute splatIndex2: vec4f;attribute splatIndex3: vec4f;attribute position: vec3f;uniform invViewport: vec2f;uniform dataTextureSize: vec2f;uniform focal: vec2f;uniform kernelSize: f32;var covariancesATexture: texture_2d<f32>;var covariancesBTexture: texture_2d<f32>;var centersTexture: texture_2d<f32>;var colorsTexture: texture_2d<f32>;varying vPosition: vec2f;varying vColor: vec4f;
#include<gaussianSplatting>
@vertex
fn main(input : VertexInputs)->FragmentInputs {let splatIndex: f32=getSplatIndex(i32(input.position.z+0.5),input.splatIndex0,input.splatIndex1,input.splatIndex2,input.splatIndex3);var splat: Splat=readSplat(splatIndex,uniforms.dataTextureSize);var covA: vec3f=splat.covA.xyz;var covB: vec3f=vec3f(splat.covA.w,splat.covB.xy);let worldPos: vec4f=mesh.world*vec4f(splat.center.xyz,1.0);vertexOutputs.vPosition=input.position.xy;vertexOutputs.vColor=splat.color;vertexOutputs.position=gaussianSplatting(input.position.xy,worldPos.xyz,vec2f(1.0,1.0),covA,covB,mesh.world,scene.view,scene.projection,uniforms.focal,uniforms.invViewport,uniforms.kernelSize);}`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const gaussianSplattingDepthVertexShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=gaussianSplattingDepth.vertex.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/default.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "defaultPixelShaderWGSL",
    ()=>defaultPixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$defaultUboDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/defaultUboDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$prePassDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/prePassDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$oitDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/oitDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$mainUVVaryingDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/mainUVVaryingDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$helperFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/helperFunctions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$lightUboDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/lightUboDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$lightsFragmentFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/lightsFragmentFunctions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$shadowsFragmentFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/shadowsFragmentFunctions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$samplerFragmentDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/samplerFragmentDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$fresnelFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/fresnelFunction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$reflectionFunction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/reflectionFunction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$imageProcessingDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/imageProcessingDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$imageProcessingFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/imageProcessingFunctions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$bumpFragmentMainFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/bumpFragmentMainFunctions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$bumpFragmentFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/bumpFragmentFunctions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$clipPlaneFragmentDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/clipPlaneFragmentDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$logDepthDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/logDepthDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$fogFragmentDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/fogFragmentDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$clipPlaneFragment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/clipPlaneFragment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$bumpFragment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/bumpFragment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$decalFragment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/decalFragment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$depthPrePass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/depthPrePass.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$lightFragment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/lightFragment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$logDepthFragment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/logDepthFragment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$fogFragment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/fogFragment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$oitFragment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/oitFragment.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const name = "defaultPixelShader";
const shader = `#include<defaultUboDeclaration>
#include<prePassDeclaration>[SCENE_MRT_COUNT]
#include<oitDeclaration>
#define CUSTOM_FRAGMENT_BEGIN
varying vPositionW: vec3f;
#ifdef NORMAL
varying vNormalW: vec3f;
#endif
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
varying vColor: vec4f;
#endif
#if defined(CLUSTLIGHT_BATCH) && CLUSTLIGHT_BATCH>0
varying vViewDepth: f32;
#endif
#include<mainUVVaryingDeclaration>[1..7]
#include<helperFunctions>
#include<lightUboDeclaration>[0..maxSimultaneousLights]
#include<lightsFragmentFunctions>
#include<shadowsFragmentFunctions>
#include<samplerFragmentDeclaration>(_DEFINENAME_,DIFFUSE,_VARYINGNAME_,Diffuse,_SAMPLERNAME_,diffuse)
#include<samplerFragmentDeclaration>(_DEFINENAME_,AMBIENT,_VARYINGNAME_,Ambient,_SAMPLERNAME_,ambient)
#include<samplerFragmentDeclaration>(_DEFINENAME_,OPACITY,_VARYINGNAME_,Opacity,_SAMPLERNAME_,opacity)
#include<samplerFragmentDeclaration>(_DEFINENAME_,EMISSIVE,_VARYINGNAME_,Emissive,_SAMPLERNAME_,emissive)
#include<samplerFragmentDeclaration>(_DEFINENAME_,LIGHTMAP,_VARYINGNAME_,Lightmap,_SAMPLERNAME_,lightmap)
#include<samplerFragmentDeclaration>(_DEFINENAME_,DECAL,_VARYINGNAME_,Decal,_SAMPLERNAME_,decal)
#ifdef REFRACTION
#ifdef REFRACTIONMAP_3D
var refractionCubeSamplerSampler: sampler;var refractionCubeSampler: texture_cube<f32>;
#else
var refraction2DSamplerSampler: sampler;var refraction2DSampler: texture_2d<f32>;
#endif
#endif
#if defined(SPECULARTERM)
#include<samplerFragmentDeclaration>(_DEFINENAME_,SPECULAR,_VARYINGNAME_,Specular,_SAMPLERNAME_,specular)
#endif
#include<fresnelFunction>
#ifdef REFLECTION
#ifdef REFLECTIONMAP_3D
var reflectionCubeSamplerSampler: sampler;var reflectionCubeSampler: texture_cube<f32>;
#else
var reflection2DSamplerSampler: sampler;var reflection2DSampler: texture_2d<f32>;
#endif
#ifdef REFLECTIONMAP_SKYBOX
varying vPositionUVW: vec3f;
#else
#if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)
varying vDirectionW: vec3f;
#endif
#endif
#include<reflectionFunction>
#endif
#include<imageProcessingDeclaration>
#include<imageProcessingFunctions>
#include<bumpFragmentMainFunctions>
#include<bumpFragmentFunctions>
#include<clipPlaneFragmentDeclaration>
#include<logDepthDeclaration>
#include<fogFragmentDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
var viewDirectionW: vec3f=normalize(scene.vEyePosition.xyz-fragmentInputs.vPositionW);var baseColor: vec4f= vec4f(1.,1.,1.,1.);var diffuseColor: vec3f=uniforms.vDiffuseColor.rgb;var alpha: f32=uniforms.vDiffuseColor.a;
#ifdef NORMAL
var normalW: vec3f=normalize(fragmentInputs.vNormalW);
#else
var normalW: vec3f=normalize(cross(dpdx(fragmentInputs.vPositionW),dpdy(fragmentInputs.vPositionW)))* scene.vEyePosition.w;
#endif
#include<bumpFragment>
#ifdef TWOSIDEDLIGHTING
normalW=select(-normalW,normalW,fragmentInputs.frontFacing);
#endif
#ifdef DIFFUSE
baseColor=textureSample(diffuseSampler,diffuseSamplerSampler,fragmentInputs.vDiffuseUV+uvOffset);
#if defined(ALPHATEST) && !defined(ALPHATEST_AFTERALLALPHACOMPUTATIONS)
if (baseColor.a<uniforms.alphaCutOff) {discard;}
#endif
#ifdef ALPHAFROMDIFFUSE
alpha*=baseColor.a;
#endif
#define CUSTOM_FRAGMENT_UPDATE_ALPHA
baseColor=vec4f(baseColor.rgb*uniforms.vDiffuseInfos.y,baseColor.a);
#endif
#if defined(DECAL) && !defined(DECAL_AFTER_DETAIL)
var decalColor: vec4f=textureSample(decalSampler,decalSamplerSampler,fragmentInputs.vDecalUV+uvOffset);
#include<decalFragment>(surfaceAlbedo,baseColor,GAMMADECAL,_GAMMADECAL_NOTUSED_)
#endif
#include<depthPrePass>
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
baseColor=vec4f(baseColor.rgb*fragmentInputs.vColor.rgb,baseColor.a);
#endif
#ifdef DETAIL
baseColor=vec4f(baseColor.rgb*2.0*mix(0.5,detailColor.r,uniforms.vDetailInfos.y),baseColor.a);
#endif
#if defined(DECAL) && defined(DECAL_AFTER_DETAIL)
var decalColor: vec4f=textureSample(decalSampler,decalSamplerSampler,fragmentInputs.vDecalUV+uvOffset);
#include<decalFragment>(surfaceAlbedo,baseColor,GAMMADECAL,_GAMMADECAL_NOTUSED_)
#endif
#define CUSTOM_FRAGMENT_UPDATE_DIFFUSE
var baseAmbientColor: vec3f= vec3f(1.,1.,1.);
#ifdef AMBIENT
baseAmbientColor=textureSample(ambientSampler,ambientSamplerSampler,fragmentInputs.vAmbientUV+uvOffset).rgb*uniforms.vAmbientInfos.y;
#endif
#define CUSTOM_FRAGMENT_BEFORE_LIGHTS
var glossiness: f32=uniforms.vSpecularColor.a;var specularColor: vec3f=uniforms.vSpecularColor.rgb;
#ifdef SPECULARTERM
#ifdef SPECULAR
var specularMapColor: vec4f=textureSample(specularSampler,specularSamplerSampler,fragmentInputs.vSpecularUV+uvOffset);specularColor=specularMapColor.rgb;
#ifdef GLOSSINESS
glossiness=glossiness*specularMapColor.a;
#endif
#endif
#endif
var diffuseBase: vec3f= vec3f(0.,0.,0.);var info: lightingInfo;
#ifdef SPECULARTERM
var specularBase: vec3f= vec3f(0.,0.,0.);
#endif
var shadow: f32=1.;var aggShadow: f32=0.;var numLights: f32=0.;
#ifdef LIGHTMAP
var lightmapColor: vec4f=textureSample(lightmapSampler,lightmapSamplerSampler,fragmentInputs.vLightmapUV+uvOffset);
#ifdef RGBDLIGHTMAP
lightmapColor=vec4f(fromRGBD(lightmapColor),lightmapColor.a);
#endif
lightmapColor=vec4f(lightmapColor.rgb*uniforms.vLightmapInfos.y,lightmapColor.a);
#endif
#include<lightFragment>[0..maxSimultaneousLights]
aggShadow=aggShadow/numLights;var refractionColor: vec4f= vec4f(0.,0.,0.,1.);
#ifdef REFRACTION
var refractionVector: vec3f=normalize(refract(-viewDirectionW,normalW,uniforms.vRefractionInfos.y));
#ifdef REFRACTIONMAP_3D
#ifdef USE_LOCAL_REFRACTIONMAP_CUBIC
refractionVector=parallaxCorrectNormal(fragmentInputs.vPositionW,refractionVector,uniforms.vRefractionSize,uniforms.vRefractionPosition);
#endif
refractionVector.y=refractionVector.y*uniforms.vRefractionInfos.w;var refractionLookup: vec4f=textureSample(refractionCubeSampler,refractionCubeSamplerSampler,refractionVector);if (dot(refractionVector,viewDirectionW)<1.0) {refractionColor=refractionLookup;}
#else
var vRefractionUVW: vec3f= (uniforms.refractionMatrix*(scene.view* vec4f(fragmentInputs.vPositionW+refractionVector*uniforms.vRefractionInfos.z,1.0))).xyz;var refractionCoords: vec2f=vRefractionUVW.xy/vRefractionUVW.z;refractionCoords.y=1.0-refractionCoords.y;refractionColor=textureSample(refraction2DSampler,refraction2DSamplerSampler,refractionCoords);
#endif
#ifdef RGBDREFRACTION
refractionColor=vec4f(fromRGBD(refractionColor),refractionColor.a);
#endif
#ifdef IS_REFRACTION_LINEAR
refractionColor=vec4f(toGammaSpaceVec3(refractionColor.rgb),refractionColor.a);
#endif
refractionColor=vec4f(refractionColor.rgb*uniforms.vRefractionInfos.x,refractionColor.a);
#endif
var reflectionColor: vec4f= vec4f(0.,0.,0.,1.);
#ifdef REFLECTION
var vReflectionUVW: vec3f=computeReflectionCoords( vec4f(fragmentInputs.vPositionW,1.0),normalW);
#ifdef REFLECTIONMAP_OPPOSITEZ
vReflectionUVW=vec3f(vReflectionUVW.x,vReflectionUVW.y,vReflectionUVW.z*-1.0);
#endif
#ifdef REFLECTIONMAP_3D
#ifdef ROUGHNESS
var bias: f32=uniforms.vReflectionInfos.y;
#ifdef SPECULARTERM
#ifdef SPECULAR
#ifdef GLOSSINESS
bias*=(1.0-specularMapColor.a);
#endif
#endif
#endif
reflectionColor=textureSampleLevel(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW,bias);
#else
reflectionColor=textureSample(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW);
#endif
#else
var coords: vec2f=vReflectionUVW.xy;
#ifdef REFLECTIONMAP_PROJECTION
coords/=vReflectionUVW.z;
#endif
coords.y=1.0-coords.y;reflectionColor=textureSample(reflection2DSampler,reflection2DSamplerSampler,coords);
#endif
#ifdef RGBDREFLECTION
reflectionColor=vec4f(fromRGBD(reflectionColor),reflectionColor.a);
#endif
#ifdef IS_REFLECTION_LINEAR
reflectionColor=vec4f(toGammaSpaceVec3(reflectionColor.rgb),reflectionColor.a);
#endif
reflectionColor=vec4f(reflectionColor.rgb*uniforms.vReflectionInfos.x,reflectionColor.a);
#ifdef REFLECTIONFRESNEL
var reflectionFresnelTerm: f32=computeFresnelTerm(viewDirectionW,normalW,uniforms.reflectionRightColor.a,uniforms.reflectionLeftColor.a);
#ifdef REFLECTIONFRESNELFROMSPECULAR
#ifdef SPECULARTERM
reflectionColor=vec4f(reflectionColor.rgb*specularColor.rgb*(1.0-reflectionFresnelTerm)+reflectionFresnelTerm*uniforms.reflectionRightColor.rgb,reflectionColor.a);
#else
reflectionColor=vec4f(reflectionColor.rgb*uniforms.reflectionLeftColor.rgb*(1.0-reflectionFresnelTerm)+reflectionFresnelTerm*uniforms.reflectionRightColor.rgb,reflectionColor.a);
#endif
#else
reflectionColor=vec4f(reflectionColor.rgb*uniforms.reflectionLeftColor.rgb*(1.0-reflectionFresnelTerm)+reflectionFresnelTerm*uniforms.reflectionRightColor.rgb,reflectionColor.a);
#endif
#endif
#endif
#ifdef REFRACTIONFRESNEL
var refractionFresnelTerm: f32=computeFresnelTerm(viewDirectionW,normalW,uniforms.refractionRightColor.a,uniforms.refractionLeftColor.a);refractionColor=vec4f(refractionColor.rgb*uniforms.refractionLeftColor.rgb*(1.0-refractionFresnelTerm)+refractionFresnelTerm*uniforms.refractionRightColor.rgb,refractionColor.a);
#endif
#ifdef OPACITY
var opacityMap: vec4f=textureSample(opacitySampler,opacitySamplerSampler,fragmentInputs.vOpacityUV+uvOffset);
#ifdef OPACITYRGB
opacityMap=vec4f(opacityMap.rgb* vec3f(0.3,0.59,0.11),opacityMap.a);alpha*=(opacityMap.x+opacityMap.y+opacityMap.z)* uniforms.vOpacityInfos.y;
#else
alpha*=opacityMap.a*uniforms.vOpacityInfos.y;
#endif
#endif
#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)
alpha*=fragmentInputs.vColor.a;
#endif
#ifdef OPACITYFRESNEL
var opacityFresnelTerm: f32=computeFresnelTerm(viewDirectionW,normalW,uniforms.opacityParts.z,uniforms.opacityParts.w);alpha+=uniforms.opacityParts.x*(1.0-opacityFresnelTerm)+opacityFresnelTerm*uniforms.opacityParts.y;
#endif
#ifdef ALPHATEST
#ifdef ALPHATEST_AFTERALLALPHACOMPUTATIONS
if (alpha<uniforms.alphaCutOff) {discard;}
#endif
#ifndef ALPHABLEND
alpha=1.0;
#endif
#endif
var emissiveColor: vec3f=uniforms.vEmissiveColor;
#ifdef EMISSIVE
emissiveColor+=textureSample(emissiveSampler,emissiveSamplerSampler,fragmentInputs.vEmissiveUV+uvOffset).rgb*uniforms.vEmissiveInfos.y;
#endif
#ifdef EMISSIVEFRESNEL
var emissiveFresnelTerm: f32=computeFresnelTerm(viewDirectionW,normalW,uniforms.emissiveRightColor.a,uniforms.emissiveLeftColor.a);emissiveColor*=uniforms.emissiveLeftColor.rgb*(1.0-emissiveFresnelTerm)+emissiveFresnelTerm*uniforms.emissiveRightColor.rgb;
#endif
#ifdef DIFFUSEFRESNEL
var diffuseFresnelTerm: f32=computeFresnelTerm(viewDirectionW,normalW,uniforms.diffuseRightColor.a,uniforms.diffuseLeftColor.a);diffuseBase*=uniforms.diffuseLeftColor.rgb*(1.0-diffuseFresnelTerm)+diffuseFresnelTerm*uniforms.diffuseRightColor.rgb;
#endif
#ifdef EMISSIVEASILLUMINATION
var finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;
#else
#ifdef LINKEMISSIVEWITHDIFFUSE
var finalDiffuse: vec3f=clamp((diffuseBase+emissiveColor)*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;
#else
var finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+emissiveColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;
#endif
#endif
#ifdef SPECULARTERM
var finalSpecular: vec3f=specularBase*specularColor;
#ifdef SPECULAROVERALPHA
alpha=clamp(alpha+dot(finalSpecular, vec3f(0.3,0.59,0.11)),0.0,1.0);
#endif
#else
var finalSpecular: vec3f= vec3f(0.0);
#endif
#ifdef REFLECTIONOVERALPHA
alpha=clamp(alpha+dot(reflectionColor.rgb, vec3f(0.3,0.59,0.11)),0.0,1.0);
#endif
#ifdef EMISSIVEASILLUMINATION
var color: vec4f= vec4f(clamp(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+emissiveColor+refractionColor.rgb,0.0,1.0),alpha);
#else
var color: vec4f= vec4f(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+refractionColor.rgb,alpha);
#endif
#ifdef LIGHTMAP
#ifndef LIGHTMAPEXCLUDED
#ifdef USELIGHTMAPASSHADOWMAP
color=vec4f(color.rgb*lightmapColor.rgb,color.a);
#else
color=vec4f(color.rgb+lightmapColor.rgb,color.a);
#endif
#endif
#endif
#define CUSTOM_FRAGMENT_BEFORE_FOG
color=vec4f(max(color.rgb,vec3f(0.)),color.a);
#include<logDepthFragment>
#include<fogFragment>
#ifdef IMAGEPROCESSINGPOSTPROCESS
color=vec4f(toLinearSpaceVec3(color.rgb),color.a);
#else
#ifdef IMAGEPROCESSING
color=vec4f(toLinearSpaceVec3(color.rgb),color.a);color=applyImageProcessing(color);
#endif
#endif
color=vec4f(color.rgb,color.a*mesh.visibility);
#ifdef PREMULTIPLYALPHA
color=vec4f(color.rgb*color.a, color.a);
#endif
#define CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR
#ifdef PREPASS
#if SCENE_MRT_COUNT>0
var writeGeometryInfo: f32=select(0.0,1.0,color.a>0.4);var fragData: array<vec4<f32>,SCENE_MRT_COUNT>;
#ifdef PREPASS_COLOR
fragData[PREPASS_COLOR_INDEX]=color; 
#endif
#ifdef PREPASS_POSITION
fragData[PREPASS_POSITION_INDEX]=vec4f(fragmentInputs.vPositionW,writeGeometryInfo);
#endif
#ifdef PREPASS_LOCAL_POSITION
fragData[PREPASS_LOCAL_POSITION_INDEX]=vec4f(fragmentInputs.vPosition,writeGeometryInfo);
#endif
#ifdef PREPASS_VELOCITY
var a: vec2f=(fragmentInputs.vCurrentPosition.xy/fragmentInputs.vCurrentPosition.w)*0.5+0.5;var b: vec2f=(fragmentInputs.vPreviousPosition.xy/fragmentInputs.vPreviousPosition.w)*0.5+0.5;var velocity: vec2f=abs(a-b);velocity= vec2f(pow(velocity.x,1.0/3.0),pow(velocity.y,1.0/3.0))*sign(a-b)*0.5+0.5;fragData[PREPASS_VELOCITY_INDEX]= vec4f(velocity,0.0,writeGeometryInfo);
#elif defined(PREPASS_VELOCITY_LINEAR)
var velocity : vec2f=vec2f(0.5)*((fragmentInputs.vPreviousPosition.xy/fragmentInputs.vPreviousPosition.w) -
(fragmentInputs.vCurrentPosition.xy/fragmentInputs.vCurrentPosition.w));fragData[PREPASS_VELOCITY_LINEAR_INDEX]=vec4f(velocity,0.0,writeGeometryInfo);
#endif
#ifdef PREPASS_IRRADIANCE
fragData[PREPASS_IRRADIANCE_INDEX]=vec4f(0.0,0.0,0.0,writeGeometryInfo); 
#endif
#ifdef PREPASS_DEPTH
fragData[PREPASS_DEPTH_INDEX]=vec4f(fragmentInputs.vViewPos.z,0.0,0.0,writeGeometryInfo); 
#endif
#ifdef PREPASS_SCREENSPACE_DEPTH
fragData[PREPASS_SCREENSPACE_DEPTH_INDEX]=vec4f(fragmentInputs.position.z,0.0,0.0,writeGeometryInfo);
#endif
#ifdef PREPASS_NORMALIZED_VIEW_DEPTH
fragData[PREPASS_NORMALIZED_VIEW_DEPTH_INDEX]=vec4f(fragmentInputs.vNormViewDepth,0.0,0.0,writeGeometryInfo);
#endif
#ifdef PREPASS_NORMAL
#ifdef PREPASS_NORMAL_WORLDSPACE
fragData[PREPASS_NORMAL_INDEX]=vec4f(normalW,writeGeometryInfo);
#else
fragData[PREPASS_NORMAL_INDEX]=vec4f(normalize((scene.view*vec4f(normalW,0.0)).rgb),writeGeometryInfo);
#endif
#endif
#ifdef PREPASS_WORLD_NORMAL
fragData[PREPASS_WORLD_NORMAL_INDEX]=vec4f(normalW*0.5+0.5,writeGeometryInfo);
#endif
#ifdef PREPASS_ALBEDO
fragData[PREPASS_ALBEDO_INDEX]=vec4f(baseColor.rgb,writeGeometryInfo);
#endif
#ifdef PREPASS_ALBEDO_SQRT
fragData[PREPASS_ALBEDO_SQRT_INDEX]=vec4f(sqrt(baseColor.rgb),writeGeometryInfo);
#endif
#ifdef PREPASS_REFLECTIVITY
#if defined(SPECULAR)
fragData[PREPASS_REFLECTIVITY_INDEX]=vec4f(toLinearSpaceVec4(specularMapColor))*writeGeometryInfo; 
#else
fragData[PREPASS_REFLECTIVITY_INDEX]=vec4f(toLinearSpaceVec3(specularColor),1.0)*writeGeometryInfo;
#endif
#endif
#if SCENE_MRT_COUNT>0
fragmentOutputs.fragData0=fragData[0];
#endif
#if SCENE_MRT_COUNT>1
fragmentOutputs.fragData1=fragData[1];
#endif
#if SCENE_MRT_COUNT>2
fragmentOutputs.fragData2=fragData[2];
#endif
#if SCENE_MRT_COUNT>3
fragmentOutputs.fragData3=fragData[3];
#endif
#if SCENE_MRT_COUNT>4
fragmentOutputs.fragData4=fragData[4];
#endif
#if SCENE_MRT_COUNT>5
fragmentOutputs.fragData5=fragData[5];
#endif
#if SCENE_MRT_COUNT>6
fragmentOutputs.fragData6=fragData[6];
#endif
#if SCENE_MRT_COUNT>7
fragmentOutputs.fragData7=fragData[7];
#endif
#endif
#endif
#if !defined(PREPASS) && !defined(ORDER_INDEPENDENT_TRANSPARENCY)
fragmentOutputs.color=color;
#endif
#include<oitFragment>
#if ORDER_INDEPENDENT_TRANSPARENCY
if (fragDepth==nearestDepth) {fragmentOutputs.frontColor=vec4f(fragmentOutputs.frontColor.rgb+color.rgb*color.a*alphaMultiplier,1.0-alphaMultiplier*(1.0-color.a));} else {fragmentOutputs.backColor+=color;}
#endif
#define CUSTOM_FRAGMENT_MAIN_END
}
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const defaultPixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=default.fragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/default.vertex.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "defaultVertexShaderWGSL",
    ()=>defaultVertexShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$defaultUboDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/defaultUboDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$uvAttributeDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/uvAttributeDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$helperFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/helperFunctions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$bonesDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/bonesDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$bakedVertexAnimationDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/bakedVertexAnimationDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$instancesDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/instancesDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$prePassVertexDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/prePassVertexDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$mainUVVaryingDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/mainUVVaryingDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$samplerVertexDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/samplerVertexDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$bumpVertexDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/bumpVertexDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$clipPlaneVertexDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/clipPlaneVertexDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$fogVertexDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/fogVertexDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$lightVxFragmentDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/lightVxFragmentDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$lightVxUboDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/lightVxUboDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$morphTargetsVertexGlobalDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/morphTargetsVertexGlobalDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$morphTargetsVertexDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/morphTargetsVertexDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$logDepthDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/logDepthDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$morphTargetsVertexGlobal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/morphTargetsVertexGlobal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$morphTargetsVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/morphTargetsVertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$instancesVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/instancesVertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$bonesVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/bonesVertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$bakedVertexAnimation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/bakedVertexAnimation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$prePassVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/prePassVertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$uvVariableDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/uvVariableDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$samplerVertexImplementation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/samplerVertexImplementation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$bumpVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/bumpVertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$clipPlaneVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/clipPlaneVertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$fogVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/fogVertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$shadowsVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/shadowsVertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$vertexColorMixing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/vertexColorMixing.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$logDepthVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/logDepthVertex.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const name = "defaultVertexShader";
const shader = `#include<defaultUboDeclaration>
#define CUSTOM_VERTEX_BEGIN
attribute position: vec3f;
#ifdef NORMAL
attribute normal: vec3f;
#endif
#ifdef TANGENT
attribute tangent: vec4f;
#endif
#ifdef UV1
attribute uv: vec2f;
#endif
#include<uvAttributeDeclaration>[2..7]
#ifdef VERTEXCOLOR
attribute color: vec4f;
#endif
#include<helperFunctions>
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<instancesDeclaration>
#include<prePassVertexDeclaration>
#include<mainUVVaryingDeclaration>[1..7]
#include<samplerVertexDeclaration>(_DEFINENAME_,DIFFUSE,_VARYINGNAME_,Diffuse)
#include<samplerVertexDeclaration>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail)
#include<samplerVertexDeclaration>(_DEFINENAME_,AMBIENT,_VARYINGNAME_,Ambient)
#include<samplerVertexDeclaration>(_DEFINENAME_,OPACITY,_VARYINGNAME_,Opacity)
#include<samplerVertexDeclaration>(_DEFINENAME_,EMISSIVE,_VARYINGNAME_,Emissive)
#include<samplerVertexDeclaration>(_DEFINENAME_,LIGHTMAP,_VARYINGNAME_,Lightmap)
#if defined(SPECULARTERM)
#include<samplerVertexDeclaration>(_DEFINENAME_,SPECULAR,_VARYINGNAME_,Specular)
#endif
#include<samplerVertexDeclaration>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump)
#include<samplerVertexDeclaration>(_DEFINENAME_,DECAL,_VARYINGNAME_,Decal)
varying vPositionW: vec3f;
#ifdef NORMAL
varying vNormalW: vec3f;
#endif
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
varying vColor: vec4f;
#endif
#include<bumpVertexDeclaration>
#include<clipPlaneVertexDeclaration>
#include<fogVertexDeclaration>
#include<__decl__lightVxFragment>[0..maxSimultaneousLights]
#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]
#ifdef REFLECTIONMAP_SKYBOX
varying vPositionUVW: vec3f;
#endif
#if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)
varying vDirectionW: vec3f;
#endif
#if defined(CLUSTLIGHT_BATCH) && CLUSTLIGHT_BATCH>0
varying vViewDepth: f32;
#endif
#include<logDepthDeclaration>
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {
#define CUSTOM_VERTEX_MAIN_BEGIN
var positionUpdated: vec3f=vertexInputs.position;
#ifdef NORMAL
var normalUpdated: vec3f=vertexInputs.normal;
#endif
#ifdef TANGENT
var tangentUpdated: vec4f=vertexInputs.tangent;
#endif
#ifdef UV1
var uvUpdated: vec2f=vertexInputs.uv;
#endif
#ifdef UV2
var uv2Updated: vec2f=vertexInputs.uv2;
#endif
#ifdef VERTEXCOLOR
var colorUpdated: vec4f=vertexInputs.color;
#endif
#include<morphTargetsVertexGlobal>
#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]
#ifdef REFLECTIONMAP_SKYBOX
vertexOutputs.vPositionUVW=positionUpdated;
#endif
#define CUSTOM_VERTEX_UPDATE_POSITION
#define CUSTOM_VERTEX_UPDATE_NORMAL
#include<instancesVertex>
#if defined(PREPASS) && ((defined(PREPASS_VELOCITY) || defined(PREPASS_VELOCITY_LINEAR)) && !defined(BONES_VELOCITY_ENABLED)
vertexOutputs.vCurrentPosition=scene.viewProjection*finalWorld*vec4f(positionUpdated,1.0);vertexOutputs.vPreviousPosition=uniforms.previousViewProjection*finalPreviousWorld*vec4f(positionUpdated,1.0);
#endif
#include<bonesVertex>
#include<bakedVertexAnimation>
var worldPos: vec4f=finalWorld*vec4f(positionUpdated,1.0);
#ifdef NORMAL
var normalWorld: mat3x3f= mat3x3f(finalWorld[0].xyz,finalWorld[1].xyz,finalWorld[2].xyz);
#if defined(INSTANCES) && defined(THIN_INSTANCES)
vertexOutputs.vNormalW=normalUpdated/ vec3f(dot(normalWorld[0],normalWorld[0]),dot(normalWorld[1],normalWorld[1]),dot(normalWorld[2],normalWorld[2]));vertexOutputs.vNormalW=normalize(normalWorld*vertexOutputs.vNormalW);
#else
#ifdef NONUNIFORMSCALING
normalWorld=transposeMat3(inverseMat3(normalWorld));
#endif
vertexOutputs.vNormalW=normalize(normalWorld*normalUpdated);
#endif
#endif
#define CUSTOM_VERTEX_UPDATE_WORLDPOS
#ifdef MULTIVIEW
if (gl_ViewID_OVR==0u) {vertexOutputs.position=scene.viewProjection*worldPos;} else {vertexOutputs.position=scene.viewProjectionR*worldPos;}
#else
vertexOutputs.position=scene.viewProjection*worldPos;
#endif
vertexOutputs.vPositionW= worldPos.xyz;
#ifdef PREPASS
#include<prePassVertex>
#endif
#if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)
vertexOutputs.vDirectionW=normalize((finalWorld* vec4f(positionUpdated,0.0)).xyz);
#endif
#if defined(CLUSTLIGHT_BATCH) && CLUSTLIGHT_BATCH>0
vertexOutputs.vViewDepth=(scene.view*worldPos).z;
#endif
#ifndef UV1
var uvUpdated: vec2f=vec2f(0.,0.);
#endif
#ifdef MAINUV1
vertexOutputs.vMainUV1=uvUpdated;
#endif
#ifndef UV2
var uv2Updated: vec2f=vec2f(0.,0.);
#endif
#ifdef MAINUV2
vertexOutputs.vMainUV2=uv2Updated;
#endif
#include<uvVariableDeclaration>[3..7]
#include<samplerVertexImplementation>(_DEFINENAME_,DIFFUSE,_VARYINGNAME_,Diffuse,_MATRIXNAME_,diffuse,_INFONAME_,DiffuseInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail,_MATRIXNAME_,detail,_INFONAME_,DetailInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,AMBIENT,_VARYINGNAME_,Ambient,_MATRIXNAME_,ambient,_INFONAME_,AmbientInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,OPACITY,_VARYINGNAME_,Opacity,_MATRIXNAME_,opacity,_INFONAME_,OpacityInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,EMISSIVE,_VARYINGNAME_,Emissive,_MATRIXNAME_,emissive,_INFONAME_,EmissiveInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,LIGHTMAP,_VARYINGNAME_,Lightmap,_MATRIXNAME_,lightmap,_INFONAME_,LightmapInfos.x)
#if defined(SPECULARTERM)
#include<samplerVertexImplementation>(_DEFINENAME_,SPECULAR,_VARYINGNAME_,Specular,_MATRIXNAME_,specular,_INFONAME_,SpecularInfos.x)
#endif
#include<samplerVertexImplementation>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump,_MATRIXNAME_,bump,_INFONAME_,BumpInfos.x)
#include<samplerVertexImplementation>(_DEFINENAME_,DECAL,_VARYINGNAME_,Decal,_MATRIXNAME_,decal,_INFONAME_,DecalInfos.x)
#include<bumpVertex>
#include<clipPlaneVertex>
#include<fogVertex>
#include<shadowsVertex>[0..maxSimultaneousLights]
#include<vertexColorMixing>
#include<logDepthVertex>
#define CUSTOM_VERTEX_MAIN_END
}
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const defaultVertexShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=default.vertex.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/greasedLine.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "greasedLinePixelShaderWGSL",
    ()=>greasedLinePixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
;
const name = "greasedLinePixelShader";
const shader = `var grlColors: texture_2d<f32>;var grlColorsSampler: sampler;uniform grlUseColors: f32;uniform grlUseDash: f32;uniform grlDashArray: f32;uniform grlDashOffset: f32;uniform grlDashRatio: f32;uniform grlVisibility: f32;uniform grlColorsWidth: f32;uniform grl_colorModeAndColorDistributionType: vec2f;uniform grlColor: vec3f;varying grlCounters: f32;varying grlColorPointer: f32;
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
let grlColorMode: f32=uniforms.grl_colorModeAndColorDistributionType.x;let grlColorDistributionType: f32=uniforms.grl_colorModeAndColorDistributionType.y;var outColor=vec4(uniforms.grlColor,1.);outColor.a=step(fragmentInputs.grlCounters,uniforms.grlVisibility);if (outColor.a==0.0) {discard;}
if (uniforms.grlUseDash==1.0) {let dashPosition=(fragmentInputs.grlCounters+uniforms.grlDashOffset) % uniforms.grlDashArray;outColor.a*=ceil(dashPosition-(uniforms.grlDashArray*uniforms.grlDashRatio));if (outColor.a==0.0) {discard;}}
if (uniforms.grlUseColors==1.) {
#ifdef GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE
let grlColor: vec4f=textureSample(grlColors,grlColorsSampler,vec2f(fragmentInputs.grlCounters,0.));
#else
let lookup: vec2f=vec2(fract(fragmentInputs.grlColorPointer/uniforms.grlColorsWidth),1.0-floor(fragmentInputs.grlColorPointer/uniforms.grlColorsWidth));let grlColor: vec4f=textureSample(grlColors,grlColorsSampler,lookup);
#endif
if (grlColorMode==COLOR_MODE_SET) {outColor=grlColor;} else if (grlColorMode==COLOR_MODE_ADD) {outColor+=grlColor;} else if (grlColorMode==COLOR_MODE_MULTIPLY) {outColor*=grlColor;}}
#if !defined(PREPASS) && !defined(ORDER_INDEPENDENT_TRANSPARENCY)
fragmentOutputs.color=outColor;
#endif
#if ORDER_INDEPENDENT_TRANSPARENCY
if (fragDepth==nearestDepth) {fragmentOutputs.frontColor=vec4f(fragmentOutputs.frontColor.rgb+outColor.rgb*outColor.a*alphaMultiplier,1.0-alphaMultiplier*(1.0-outColor.a));} else {fragmentOutputs.backColor+=outColor;}
#endif
#define CUSTOM_FRAGMENT_MAIN_END
}
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const greasedLinePixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=greasedLine.fragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/greasedLine.vertex.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "greasedLineVertexShaderWGSL",
    ()=>greasedLineVertexShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$instancesDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/instancesDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$sceneUboDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/sceneUboDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$meshUboDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/meshUboDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$instancesVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/instancesVertex.js [app-client] (ecmascript)");
;
;
;
;
;
const name = "greasedLineVertexShader";
const shader = `#include<instancesDeclaration>
#include<sceneUboDeclaration>
#include<meshUboDeclaration>
attribute grl_widths: f32;
#ifdef GREASED_LINE_USE_OFFSETS
attribute grl_offsets: vec3f; 
#endif
attribute grl_colorPointers: f32;attribute position: vec3f;varying grlCounters: f32;varying grlColorPointer: f32;
#ifdef GREASED_LINE_CAMERA_FACING
attribute grl_nextAndCounters: vec4f;attribute grl_previousAndSide: vec4f;uniform grlResolution: vec2f;uniform grlAspect: f32;uniform grlWidth: f32;uniform grlSizeAttenuation: f32;fn grlFix(i: vec4f,aspect: f32)->vec2f {var res=i.xy/i.w;res.x*=aspect;return res;}
#else
attribute grl_slopes: vec3f;attribute grl_counters: f32;
#endif
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {
#define CUSTOM_VERTEX_MAIN_BEGIN
#include<instancesVertex>
vertexOutputs.grlColorPointer=input.grl_colorPointers;let grlMatrix: mat4x4f=scene.viewProjection*mesh.world ;
#ifdef GREASED_LINE_CAMERA_FACING
let grlBaseWidth: f32=uniforms.grlWidth;let grlPrevious: vec3f=input.grl_previousAndSide.xyz;let grlSide: f32=input.grl_previousAndSide.w;let grlNext: vec3f=input.grl_nextAndCounters.xyz;vertexOutputs.grlCounters=input.grl_nextAndCounters.w;let grlWidth:f32=grlBaseWidth*input.grl_widths;
#ifdef GREASED_LINE_USE_OFFSETS
var grlPositionOffset: vec3f=input.grl_offsets;
#else
var grlPositionOffset=vec3f(0.);
#endif
let positionUpdated: vec3f=vertexInputs.position+grlPositionOffset;let worldDir: vec3f=normalize(grlNext-grlPrevious);let nearPosition: vec3f=positionUpdated+(worldDir*0.001);let grlFinalPosition: vec4f=grlMatrix*vec4f(positionUpdated,1.0);let screenNearPos: vec4f=grlMatrix*vec4(nearPosition,1.0);let grlLinePosition: vec2f=grlFix(grlFinalPosition,uniforms.grlAspect);let grlLineNearPosition: vec2f=grlFix(screenNearPos,uniforms.grlAspect);let grlDir: vec2f=normalize(grlLineNearPosition-grlLinePosition);var grlNormal: vec4f=vec4f(-grlDir.y,grlDir.x,0.0,1.0);let grlHalfWidth: f32=0.5*grlWidth;
#if defined(GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM)
grlNormal.x*=-grlHalfWidth;grlNormal.y*=-grlHalfWidth;
#else
grlNormal.x*=grlHalfWidth;grlNormal.y*=grlHalfWidth;
#endif
grlNormal*=scene.projection;if (uniforms.grlSizeAttenuation==1.) {grlNormal.x*=grlFinalPosition.w;grlNormal.y*=grlFinalPosition.w;let pr=vec4f(uniforms.grlResolution,0.0,1.0)*scene.projection;grlNormal.x/=pr.x;grlNormal.y/=pr.y;}
vertexOutputs.position=vec4f(grlFinalPosition.xy+grlNormal.xy*grlSide,grlFinalPosition.z,grlFinalPosition.w);
#else
vertexOutputs.grlCounters=input.grl_counters;vertexOutputs.position=grlMatrix*vec4f((vertexInputs.position+input.grl_offsets)+input.grl_slopes*input.grl_widths,1.0) ;
#endif
#define CUSTOM_VERTEX_MAIN_END
}
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const greasedLineVertexShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=greasedLine.vertex.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/color.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "colorPixelShaderWGSL",
    ()=>colorPixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$clipPlaneFragmentDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/clipPlaneFragmentDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$fogFragmentDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/fogFragmentDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$clipPlaneFragment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/clipPlaneFragment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$fogFragment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/fogFragment.js [app-client] (ecmascript)");
;
;
;
;
;
const name = "colorPixelShader";
const shader = `#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
#define VERTEXCOLOR
varying vColor: vec4f;
#else
uniform color: vec4f;
#endif
#include<clipPlaneFragmentDeclaration>
#include<fogFragmentDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
fragmentOutputs.color=input.vColor;
#else
fragmentOutputs.color=uniforms.color;
#endif
#include<fogFragment>(color,fragmentOutputs.color)
#define CUSTOM_FRAGMENT_MAIN_END
}`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const colorPixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=color.fragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/color.vertex.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "colorVertexShaderWGSL",
    ()=>colorVertexShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$bonesDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/bonesDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$bakedVertexAnimationDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/bakedVertexAnimationDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$clipPlaneVertexDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/clipPlaneVertexDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$fogVertexDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/fogVertexDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$instancesDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/instancesDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$instancesVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/instancesVertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$bonesVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/bonesVertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$bakedVertexAnimation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/bakedVertexAnimation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$clipPlaneVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/clipPlaneVertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$fogVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/fogVertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$vertexColorMixing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/vertexColorMixing.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
const name = "colorVertexShader";
const shader = `attribute position: vec3f;
#ifdef VERTEXCOLOR
attribute color: vec4f;
#endif
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<clipPlaneVertexDeclaration>
#include<fogVertexDeclaration>
#ifdef FOG
uniform view: mat4x4f;
#endif
#include<instancesDeclaration>
uniform viewProjection: mat4x4f;
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
varying vColor: vec4f;
#endif
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {
#define CUSTOM_VERTEX_MAIN_BEGIN
#ifdef VERTEXCOLOR
var colorUpdated: vec4f=vertexInputs.color;
#endif
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
var worldPos: vec4f=finalWorld* vec4f(input.position,1.0);vertexOutputs.position=uniforms.viewProjection*worldPos;
#include<clipPlaneVertex>
#include<fogVertex>
#include<vertexColorMixing>
#define CUSTOM_VERTEX_MAIN_END
}`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const colorVertexShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=color.vertex.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/meshUVSpaceRenderer.vertex.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "meshUVSpaceRendererVertexShaderWGSL",
    ()=>meshUVSpaceRendererVertexShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$bonesDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/bonesDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$bakedVertexAnimationDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/bakedVertexAnimationDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$morphTargetsVertexGlobalDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/morphTargetsVertexGlobalDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$morphTargetsVertexDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/morphTargetsVertexDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$instancesDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/instancesDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$morphTargetsVertexGlobal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/morphTargetsVertexGlobal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$morphTargetsVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/morphTargetsVertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$instancesVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/instancesVertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$bonesVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/bonesVertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$bakedVertexAnimation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/bakedVertexAnimation.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
const name = "meshUVSpaceRendererVertexShader";
const shader = `attribute position: vec3f;attribute normal: vec3f;attribute uv: vec2f;uniform projMatrix: mat4x4f;varying vDecalTC: vec2f;
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]
#include<instancesDeclaration>
@vertex
fn main(input : VertexInputs)->FragmentInputs {var positionUpdated: vec3f=input.position;var normalUpdated: vec3f=input.normal;
#include<morphTargetsVertexGlobal>
#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
var worldPos: vec4f=finalWorld* vec4f(positionUpdated,1.0);var normWorldSM: mat3x3f= mat3x3f(finalWorld[0].xyz,finalWorld[1].xyz,finalWorld[2].xyz);var vNormalW: vec3f;
#if defined(INSTANCES) && defined(THIN_INSTANCES)
vNormalW=normalUpdated/ vec3f(dot(normWorldSM[0],normWorldSM[0]),dot(normWorldSM[1],normWorldSM[1]),dot(normWorldSM[2],normWorldSM[2]));vNormalW=normalize(normWorldSM*vNormalW);
#else
#ifdef NONUNIFORMSCALING
normWorldSM=transposeMat3(inverseMat3(normWorldSM));
#endif
vNormalW=normalize(normWorldSM*normalUpdated);
#endif
var normalView: vec3f=normalize((uniforms.projMatrix* vec4f(vNormalW,0.0)).xyz);var decalTC: vec3f=(uniforms.projMatrix*worldPos).xyz;vertexOutputs.vDecalTC=decalTC.xy;vertexOutputs.position=vec4f(input.uv*2.0-1.0,select(decalTC.z,2.,normalView.z>0.0),1.0);}`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const meshUVSpaceRendererVertexShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=meshUVSpaceRenderer.vertex.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/meshUVSpaceRenderer.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "meshUVSpaceRendererPixelShaderWGSL",
    ()=>meshUVSpaceRendererPixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
;
const name = "meshUVSpaceRendererPixelShader";
const shader = `varying vDecalTC: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;@fragment
fn main(input: FragmentInputs)->FragmentOutputs {if (input.vDecalTC.x<0. || input.vDecalTC.x>1. || input.vDecalTC.y<0. || input.vDecalTC.y>1.) {discard;}
fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,input.vDecalTC);}
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const meshUVSpaceRendererPixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=meshUVSpaceRenderer.fragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/meshUVSpaceRendererMasker.vertex.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "meshUVSpaceRendererMaskerVertexShaderWGSL",
    ()=>meshUVSpaceRendererMaskerVertexShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
;
const name = "meshUVSpaceRendererMaskerVertexShader";
const shader = `attribute uv: vec2f;varying vUV: vec2f;@vertex
fn main(input : VertexInputs)->FragmentInputs {vertexOutputs.position= vec4f( vec2f(input.uv.x,input.uv.y)*2.0-1.0,0.,1.0);vertexOutputs.vUV=input.uv;}`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const meshUVSpaceRendererMaskerVertexShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=meshUVSpaceRendererMasker.vertex.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/meshUVSpaceRendererMasker.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "meshUVSpaceRendererMaskerPixelShaderWGSL",
    ()=>meshUVSpaceRendererMaskerPixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
;
const name = "meshUVSpaceRendererMaskerPixelShader";
const shader = `varying vUV: vec2f;@fragment
fn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color= vec4f(1.0,1.0,1.0,1.0);}
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const meshUVSpaceRendererMaskerPixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=meshUVSpaceRendererMasker.fragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/meshUVSpaceRendererFinaliser.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "meshUVSpaceRendererFinaliserPixelShaderWGSL",
    ()=>meshUVSpaceRendererFinaliserPixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
;
const name = "meshUVSpaceRendererFinaliserPixelShader";
const shader = `#define DISABLE_UNIFORMITY_ANALYSIS
varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;var maskTextureSamplerSampler: sampler;var maskTextureSampler: texture_2d<f32>;uniform textureSize: vec2f;@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var mask: vec4f=textureSample(maskTextureSampler,maskTextureSamplerSampler,input.vUV).rgba;if (mask.r>0.5) {fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,input.vUV);} else {var texelSize: vec2f=4.0/uniforms.textureSize;var uv_p01: vec2f=input.vUV+ vec2f(-1.0,0.0)*texelSize;var uv_p21: vec2f=input.vUV+ vec2f(1.0,0.0)*texelSize;var uv_p10: vec2f=input.vUV+ vec2f(0.0,-1.0)*texelSize;var uv_p12: vec2f=input.vUV+ vec2f(0.0,1.0)*texelSize;var mask_p01: f32=textureSample(maskTextureSampler,maskTextureSamplerSampler,uv_p01).r;var mask_p21: f32=textureSample(maskTextureSampler,maskTextureSamplerSampler,uv_p21).r;var mask_p10: f32=textureSample(maskTextureSampler,maskTextureSamplerSampler,uv_p10).r;var mask_p12: f32=textureSample(maskTextureSampler,maskTextureSamplerSampler,uv_p12).r;var col: vec4f= vec4f(0.0,0.0,0.0,0.0);var total_weight: f32=0.0;if (mask_p01>0.5) {col+=textureSample(textureSampler,textureSamplerSampler,uv_p01);total_weight+=1.0;}
if (mask_p21>0.5) {col+=textureSample(textureSampler,textureSamplerSampler,uv_p21);total_weight+=1.0;}
if (mask_p10>0.5) {col+=textureSample(textureSampler,textureSamplerSampler,uv_p10);total_weight+=1.0;}
if (mask_p12>0.5) {col+=textureSample(textureSampler,textureSamplerSampler,uv_p12);total_weight+=1.0;}
if (total_weight>0.0) {fragmentOutputs.color=col/total_weight;} else {fragmentOutputs.color=col;}}}
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const meshUVSpaceRendererFinaliserPixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=meshUVSpaceRendererFinaliser.fragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/meshUVSpaceRendererFinaliser.vertex.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "meshUVSpaceRendererFinaliserVertexShaderWGSL",
    ()=>meshUVSpaceRendererFinaliserVertexShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
;
const name = "meshUVSpaceRendererFinaliserVertexShader";
const shader = `attribute position: vec3f;attribute uv: vec2f;uniform worldViewProjection: mat4x4f;varying vUV: vec2f;@vertex
fn main(input : VertexInputs)->FragmentInputs {vertexOutputs.position=uniforms.worldViewProjection* vec4f(input.position,1.0);vertexOutputs.positionvUV=input.uv;}
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const meshUVSpaceRendererFinaliserVertexShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=meshUVSpaceRendererFinaliser.vertex.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/lodCube.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "lodCubePixelShaderWGSL",
    ()=>lodCubePixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
;
const name = "lodCubePixelShader";
const shader = `const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_cube<f32>;uniform lod: f32;uniform gamma: i32;@fragment
fn main(input: FragmentInputs)->FragmentOutputs {let uv=fragmentInputs.vUV*2.0-1.0;
#ifdef POSITIVEX
fragmentOutputs.color=textureSampleLevel(textureSampler,textureSamplerSampler,vec3f(1.001,uv.y,uv.x),uniforms.lod);
#endif
#ifdef NEGATIVEX
fragmentOutputs.color=textureSampleLevel(textureSampler,textureSamplerSampler,vec3f(-1.001,uv.y,uv.x),uniforms.lod);
#endif
#ifdef POSITIVEY
fragmentOutputs.color=textureSampleLevel(textureSampler,textureSamplerSampler,vec3f(uv.y,1.001,uv.x),uniforms.lod);
#endif
#ifdef NEGATIVEY
fragmentOutputs.color=textureSampleLevel(textureSampler,textureSamplerSampler,vec3f(uv.y,-1.001,uv.x),uniforms.lod);
#endif
#ifdef POSITIVEZ
fragmentOutputs.color=textureSampleLevel(textureSampler,textureSamplerSampler,vec3f(uv,1.001),uniforms.lod);
#endif
#ifdef NEGATIVEZ
fragmentOutputs.color=textureSampleLevel(textureSampler,textureSamplerSampler,vec3f(uv,-1.001),uniforms.lod);
#endif
if (uniforms.gamma==0) {fragmentOutputs.color=vec4f(pow(fragmentOutputs.color.rgb,vec3f(GammaEncodePowerApprox)),fragmentOutputs.color.a);}}
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const lodCubePixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=lodCube.fragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/lod.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "lodPixelShaderWGSL",
    ()=>lodPixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
;
const name = "lodPixelShader";
const shader = `const GammaEncodePowerApprox=1.0/2.2;varying vUV: vec2f;var textureSampler: texture_2d<f32>;uniform lod: f32;uniform gamma: i32;@fragment
fn main(input: FragmentInputs)->FragmentOutputs {let textureSize=textureDimensions(textureSampler);fragmentOutputs.color=textureLoad(textureSampler,vec2u(fragmentInputs.vUV*vec2f(textureSize)),u32(uniforms.lod));if (uniforms.gamma==0) {fragmentOutputs.color=vec4f(pow(fragmentOutputs.color.rgb,vec3f(GammaEncodePowerApprox)),fragmentOutputs.color.a);}}
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const lodPixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=lod.fragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/rgbdDecode.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "rgbdDecodePixelShaderWGSL",
    ()=>rgbdDecodePixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$helperFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/helperFunctions.js [app-client] (ecmascript)");
;
;
const name = "rgbdDecodePixelShader";
const shader = `varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;
#include<helperFunctions>
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=vec4f(fromRGBD(textureSample(textureSampler,textureSamplerSampler,input.vUV)),1.0);}`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const rgbdDecodePixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=rgbdDecode.fragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/rgbdEncode.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "rgbdEncodePixelShaderWGSL",
    ()=>rgbdEncodePixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$helperFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/helperFunctions.js [app-client] (ecmascript)");
;
;
const name = "rgbdEncodePixelShader";
const shader = `varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;
#include<helperFunctions>
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=toRGBD(textureSample(textureSampler,textureSamplerSampler,input.vUV).rgb);}`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const rgbdEncodePixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=rgbdEncode.fragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/copyTextureToTexture.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "copyTextureToTexturePixelShaderWGSL",
    ()=>copyTextureToTexturePixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$helperFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/helperFunctions.js [app-client] (ecmascript)");
;
;
const name = "copyTextureToTexturePixelShader";
const shader = `uniform conversion: f32;
#ifndef NO_SAMPLER
var textureSamplerSampler: sampler;
#endif
var textureSampler: texture_2d<f32>;uniform lodLevel : f32;varying vUV: vec2f;
#include<helperFunctions>
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#ifdef NO_SAMPLER
var color: vec4f=textureLoad(textureSampler,vec2u(fragmentInputs.position.xy),u32(uniforms.lodLevel));
#else
var color: vec4f=textureSampleLevel(textureSampler,textureSamplerSampler,input.vUV,uniforms.lodLevel);
#endif
#ifdef DEPTH_TEXTURE
fragmentOutputs.fragDepth=color.r;
#else
if (uniforms.conversion==1.) {color=toLinearSpaceVec4(color);} else if (uniforms.conversion==2.) {color=toGammaSpace(color);}
fragmentOutputs.color=color;
#endif
}
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const copyTextureToTexturePixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=copyTextureToTexture.fragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/gpuUpdateParticles.compute.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "gpuUpdateParticlesComputeShaderWGSL",
    ()=>gpuUpdateParticlesComputeShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
;
const name = "gpuUpdateParticlesComputeShader";
const shader = `struct Particle {position : vec3<f32>,
age : f32,
size : vec3<f32>,
life : f32,
seed : vec4<f32>,
direction : vec3<f32>,
dummy0: f32,
#ifdef CUSTOMEMITTER
initialPosition : vec3<f32>,
dummy1: f32,
#endif
#ifndef COLORGRADIENTS
color : vec4<f32>,
#endif
#ifndef BILLBOARD
initialDirection : vec3<f32>,
dummy2: f32,
#endif
#ifdef NOISE
noiseCoordinates1 : vec3<f32>,
dummy3: f32,
noiseCoordinates2 : vec3<f32>,
dummy4: f32,
#endif
#ifdef ANGULARSPEEDGRADIENTS
angle : f32,
#else
angle : vec2<f32>,
#endif
#ifdef ANIMATESHEET
cellIndex : f32,
#ifdef ANIMATESHEETRANDOMSTART
cellStartOffset : f32,
#endif
#endif
};struct Particles {particles : array<Particle>,};struct SimParams {currentCount : f32,
timeDelta : f32,
stopFactor : f32,
randomTextureSize: i32,
lifeTime : vec2<f32>,
emitPower : vec2<f32>,
#ifndef COLORGRADIENTS
color1 : vec4<f32>,
color2 : vec4<f32>,
#endif
sizeRange : vec2<f32>,
scaleRange : vec4<f32>,
angleRange : vec4<f32>,
gravity : vec3<f32>,
#ifdef LIMITVELOCITYGRADIENTS
limitVelocityDamping : f32,
#endif
#ifdef ANIMATESHEET
cellInfos : vec4<f32>,
#endif
#ifdef NOISE
noiseStrength : vec3<f32>,
#endif
#ifdef FLOWMAP
flowMapProjection : mat4x4<f32>,
flowMapStrength : f32,
#endif
#ifndef LOCAL
emitterWM : mat4x4<f32>,
#endif
#ifdef BOXEMITTER
direction1 : vec3<f32>,
direction2 : vec3<f32>,
minEmitBox : vec3<f32>,
maxEmitBox : vec3<f32>,
#endif
#ifdef CONEEMITTER
radius : vec2<f32>,
coneAngle : f32,
height : vec2<f32>,
#ifdef DIRECTEDCONEEMITTER
direction1 : vec3<f32>,
direction2 : vec3<f32>,
#else
directionRandomizer : f32,
#endif
#endif
#ifdef CYLINDEREMITTER
radius : f32,
height : f32,
radiusRange : f32,
#ifdef DIRECTEDCYLINDEREMITTER
direction1 : vec3<f32>,
direction2 : vec3<f32>,
#else
directionRandomizer : f32,
#endif
#endif
#ifdef HEMISPHERICEMITTER
radius : f32,
radiusRange : f32,
directionRandomizer : f32,
#endif
#ifdef POINTEMITTER
direction1 : vec3<f32>,
direction2 : vec3<f32>,
#endif
#ifdef SPHEREEMITTER
radius : f32,
radiusRange : f32,
#ifdef DIRECTEDSPHEREEMITTER
direction1 : vec3<f32>,
direction2 : vec3<f32>,
#else
directionRandomizer : f32,
#endif
#endif
};@binding(0) @group(0) var<uniform> params : SimParams;@binding(1) @group(0) var<storage,read> particlesIn : Particles;@binding(2) @group(0) var<storage,read_write> particlesOut : Particles;@binding(3) @group(0) var randomTexture : texture_2d<f32>;@binding(4) @group(0) var randomTexture2 : texture_2d<f32>;
#ifdef SIZEGRADIENTS
@binding(0) @group(1) var sizeGradientSampler : sampler;@binding(1) @group(1) var sizeGradientTexture : texture_2d<f32>;
#endif 
#ifdef ANGULARSPEEDGRADIENTS
@binding(2) @group(1) var angularSpeedGradientSampler : sampler;@binding(3) @group(1) var angularSpeedGradientTexture : texture_2d<f32>;
#endif 
#ifdef VELOCITYGRADIENTS
@binding(4) @group(1) var velocityGradientSampler : sampler;@binding(5) @group(1) var velocityGradientTexture : texture_2d<f32>;
#endif
#ifdef LIMITVELOCITYGRADIENTS
@binding(6) @group(1) var limitVelocityGradientSampler : sampler;@binding(7) @group(1) var limitVelocityGradientTexture : texture_2d<f32>;
#endif
#ifdef DRAGGRADIENTS
@binding(8) @group(1) var dragGradientSampler : sampler;@binding(9) @group(1) var dragGradientTexture : texture_2d<f32>;
#endif
#ifdef NOISE
@binding(10) @group(1) var noiseSampler : sampler;@binding(11) @group(1) var noiseTexture : texture_2d<f32>;
#endif
#ifdef FLOWMAP
@binding(12) @group(1) var flowMapSampler : sampler;@binding(13) @group(1) var flowMapTexture : texture_2d<f32>;
#endif
fn getRandomVec3(offset : f32,vertexID : f32)->vec3<f32> {return textureLoad(randomTexture2,vec2<i32>(i32(vertexID*offset/params.currentCount*f32(params.randomTextureSize)) % params.randomTextureSize,0),0).rgb;}
fn getRandomVec4(offset : f32,vertexID : f32)->vec4<f32> {return textureLoad(randomTexture,vec2<i32>(i32(vertexID*offset/params.currentCount*f32(params.randomTextureSize)) % params.randomTextureSize,0),0);}
@compute @workgroup_size(64)
fn main(@builtin(global_invocation_id) GlobalInvocationID : vec3<u32>) {let index : u32=GlobalInvocationID.x;let vertexID : f32=f32(index);if (index>=u32(params.currentCount)) {return;}
let PI : f32=3.14159;let timeDelta : f32=params.timeDelta;let newAge : f32=particlesIn.particles[index].age+timeDelta;let life : f32=particlesIn.particles[index].life;let seed : vec4<f32>=particlesIn.particles[index].seed;let direction : vec3<f32>=particlesIn.particles[index].direction;if (newAge>=life && params.stopFactor != 0.) {var newPosition : vec3<f32>;var newDirection : vec3<f32>;let randoms : vec4<f32>=getRandomVec4(seed.x,vertexID);let outLife : f32=params.lifeTime.x+(params.lifeTime.y-params.lifeTime.x)*randoms.r;particlesOut.particles[index].life=outLife;particlesOut.particles[index].age=newAge-life;particlesOut.particles[index].seed=seed;var sizex : f32;
#ifdef SIZEGRADIENTS 
sizex=textureSampleLevel(sizeGradientTexture,sizeGradientSampler,vec2<f32>(0.,0.),0.).r;
#else
sizex=params.sizeRange.x+(params.sizeRange.y-params.sizeRange.x)*randoms.g;
#endif
particlesOut.particles[index].size=vec3<f32>(
sizex,
params.scaleRange.x+(params.scaleRange.y-params.scaleRange.x)*randoms.b,
params.scaleRange.z+(params.scaleRange.w-params.scaleRange.z)*randoms.a);
#ifndef COLORGRADIENTS
particlesOut.particles[index].color=params.color1+(params.color2-params.color1)*randoms.b;
#endif
#ifndef ANGULARSPEEDGRADIENTS 
particlesOut.particles[index].angle=vec2<f32>(
params.angleRange.z+(params.angleRange.w-params.angleRange.z)*randoms.r,
params.angleRange.x+(params.angleRange.y-params.angleRange.x)*randoms.a);
#else
particlesOut.particles[index].angle=params.angleRange.z+(params.angleRange.w-params.angleRange.z)*randoms.r;
#endif 
#if defined(POINTEMITTER)
let randoms2 : vec3<f32>=getRandomVec3(seed.y,vertexID);let randoms3 : vec3<f32>=getRandomVec3(seed.z,vertexID);newPosition=vec3<f32>(0.,0.,0.);newDirection=params.direction1+(params.direction2-params.direction1)*randoms3;
#elif defined(BOXEMITTER)
let randoms2 : vec3<f32>=getRandomVec3(seed.y,vertexID);let randoms3 : vec3<f32>=getRandomVec3(seed.z,vertexID);newPosition=params.minEmitBox+(params.maxEmitBox-params.minEmitBox)*randoms2;newDirection=params.direction1+(params.direction2-params.direction1)*randoms3; 
#elif defined(HEMISPHERICEMITTER)
let randoms2 : vec3<f32>=getRandomVec3(seed.y,vertexID);let randoms3 : vec3<f32>=getRandomVec3(seed.z,vertexID);let phi : f32=2.0*PI*randoms2.x;let theta : f32=acos(-1.0+2.0*randoms2.y);let randX : f32=cos(phi)*sin(theta);let randY : f32=cos(theta);let randZ : f32=sin(phi)*sin(theta);newPosition=(params.radius-(params.radius*params.radiusRange*randoms2.z))*vec3<f32>(randX,abs(randY),randZ);newDirection=normalize(newPosition+params.directionRandomizer*randoms3);
#elif defined(SPHEREEMITTER)
let randoms2 : vec3<f32>=getRandomVec3(seed.y,vertexID);let randoms3 : vec3<f32>=getRandomVec3(seed.z,vertexID);let phi : f32=2.0*PI*randoms2.x;let theta : f32=acos(-1.0+2.0*randoms2.y);let randX : f32=cos(phi)*sin(theta);let randY : f32=cos(theta);let randZ : f32=sin(phi)*sin(theta);newPosition=(params.radius-(params.radius*params.radiusRange*randoms2.z))*vec3<f32>(randX,randY,randZ);
#ifdef DIRECTEDSPHEREEMITTER
newDirection=normalize(params.direction1+(params.direction2-params.direction1)*randoms3);
#else
newDirection=normalize(newPosition+params.directionRandomizer*randoms3);
#endif
#elif defined(CYLINDEREMITTER)
let randoms2 : vec3<f32>=getRandomVec3(seed.y,vertexID);let randoms3 : vec3<f32>=getRandomVec3(seed.z,vertexID);let yPos : f32=(-0.5+randoms2.x)*params.height;var angle : f32=randoms2.y*PI*2.;let inverseRadiusRangeSquared : f32=(1.-params.radiusRange)*(1.-params.radiusRange);let positionRadius : f32=params.radius*sqrt(inverseRadiusRangeSquared+randoms2.z*(1.-inverseRadiusRangeSquared));let xPos : f32=positionRadius*cos(angle);let zPos : f32=positionRadius*sin(angle);newPosition=vec3<f32>(xPos,yPos,zPos);
#ifdef DIRECTEDCYLINDEREMITTER
newDirection=params.direction1+(params.direction2-params.direction1)*randoms3;
#else
angle=angle+(-0.5+randoms3.x)*PI*params.directionRandomizer;newDirection=vec3<f32>(cos(angle),(-0.5+randoms3.y)*params.directionRandomizer,sin(angle));newDirection=normalize(newDirection);
#endif
#elif defined(CONEEMITTER)
let randoms2 : vec3<f32>=getRandomVec3(seed.y,vertexID);let s : f32=2.0*PI*randoms2.x;
#ifdef CONEEMITTERSPAWNPOINT
let h : f32=0.0001;
#else
var h : f32=randoms2.y*params.height.y;h=1.-h*h; 
#endif
var lRadius : f32=params.radius.x-params.radius.x*randoms2.z*params.radius.y;lRadius=lRadius*h;let randX : f32=lRadius*sin(s);let randZ : f32=lRadius*cos(s);let randY : f32=h *params.height.x;newPosition=vec3<f32>(randX,randY,randZ); 
let randoms3 : vec3<f32>=getRandomVec3(seed.z,vertexID);
#ifdef DIRECTEDCONEEMITTER
newDirection=params.direction1+(params.direction2-params.direction1)*randoms3;
#else
if (abs(cos(params.coneAngle))==1.0) {newDirection=vec3<f32>(0.,1.0,0.);} else {newDirection=normalize(newPosition+params.directionRandomizer*randoms3); }
#endif
#elif defined(CUSTOMEMITTER)
newPosition=particlesIn.particles[index].initialPosition;particlesOut.particles[index].initialPosition=newPosition;
#else 
newPosition=vec3<f32>(0.,0.,0.);newDirection=2.0*(getRandomVec3(seed.w,vertexID)-vec3<f32>(0.5,0.5,0.5));
#endif
let power : f32=params.emitPower.x+(params.emitPower.y-params.emitPower.x)*randoms.a;
#ifdef LOCAL
particlesOut.particles[index].position=newPosition;
#else
particlesOut.particles[index].position=(params.emitterWM*vec4<f32>(newPosition,1.)).xyz;
#endif
#ifdef CUSTOMEMITTER
particlesOut.particles[index].direction=direction;
#ifndef BILLBOARD 
particlesOut.particles[index].initialDirection=direction;
#endif
#else
#ifdef LOCAL
let initial : vec3<f32>=newDirection;
#else 
let initial : vec3<f32>=(params.emitterWM*vec4<f32>(newDirection,0.)).xyz;
#endif
particlesOut.particles[index].direction=initial*power;
#ifndef BILLBOARD 
particlesOut.particles[index].initialDirection=initial;
#endif
#endif
#ifdef ANIMATESHEET 
particlesOut.particles[index].cellIndex=params.cellInfos.x;
#ifdef ANIMATESHEETRANDOMSTART
particlesOut.particles[index].cellStartOffset=randoms.a*outLife;
#endif 
#endif
#ifdef NOISE
particlesOut.particles[index].noiseCoordinates1=particlesIn.particles[index].noiseCoordinates1;particlesOut.particles[index].noiseCoordinates2=particlesIn.particles[index].noiseCoordinates2;
#endif
} else {var directionScale : f32=timeDelta;particlesOut.particles[index].age=newAge;let ageGradient : f32=newAge/life;
#ifdef VELOCITYGRADIENTS
directionScale=directionScale*textureSampleLevel(velocityGradientTexture,velocityGradientSampler,vec2<f32>(ageGradient,0.),0.).r;
#endif
#ifdef DRAGGRADIENTS
directionScale=directionScale*(1.0-textureSampleLevel(dragGradientTexture,dragGradientSampler,vec2<f32>(ageGradient,0.),0.).r);
#endif
let position : vec3<f32>=particlesIn.particles[index].position;
#if defined(CUSTOMEMITTER)
particlesOut.particles[index].position=position+(direction-position)*ageGradient; 
particlesOut.particles[index].initialPosition=particlesIn.particles[index].initialPosition;
#else
particlesOut.particles[index].position=position+direction*directionScale;
#endif
particlesOut.particles[index].life=life;particlesOut.particles[index].seed=seed;
#ifndef COLORGRADIENTS 
particlesOut.particles[index].color=particlesIn.particles[index].color;
#endif
#ifdef SIZEGRADIENTS
particlesOut.particles[index].size=vec3<f32>(
textureSampleLevel(sizeGradientTexture,sizeGradientSampler,vec2<f32>(ageGradient,0.),0.).r,
particlesIn.particles[index].size.yz);
#else
particlesOut.particles[index].size=particlesIn.particles[index].size;
#endif 
#ifndef BILLBOARD 
particlesOut.particles[index].initialDirection=particlesIn.particles[index].initialDirection;
#endif
#ifdef CUSTOMEMITTER
particlesOut.particles[index].direction=direction;
#else
var updatedDirection : vec3<f32>=direction+params.gravity*timeDelta;
#ifdef FLOWMAP
var clipSpace=(params.flowMapProjection*vec4f(position,1.));var ndcSpace=clipSpace.xyz/clipSpace.w;var flowMapUV=ndcSpace.xy*0.5+0.5;var flowMapValue=textureSampleLevel(flowMapTexture,flowMapSampler,flowMapUV,0.);var flowMapDirection=(flowMapValue.xyz*2.0-1.0)*flowMapValue.w;updatedDirection+=flowMapDirection*timeDelta*params.flowMapStrength;
#endif
#ifdef LIMITVELOCITYGRADIENTS
let limitVelocity : f32=textureSampleLevel(limitVelocityGradientTexture,limitVelocityGradientSampler,vec2<f32>(ageGradient,0.),0.).r;let currentVelocity : f32=length(updatedDirection);if (currentVelocity>limitVelocity) {updatedDirection=updatedDirection*params.limitVelocityDamping;}
#endif
particlesOut.particles[index].direction=updatedDirection;
#ifdef NOISE
let noiseCoordinates1 : vec3<f32>=particlesIn.particles[index].noiseCoordinates1;let noiseCoordinates2 : vec3<f32>=particlesIn.particles[index].noiseCoordinates2;let fetchedR : f32=textureSampleLevel(noiseTexture,noiseSampler,vec2<f32>(noiseCoordinates1.x,noiseCoordinates1.y)*vec2<f32>(0.5,0.5)+vec2<f32>(0.5,0.5),0.).r;let fetchedG : f32=textureSampleLevel(noiseTexture,noiseSampler,vec2<f32>(noiseCoordinates1.z,noiseCoordinates2.x)*vec2<f32>(0.5,0.5)+vec2<f32>(0.5,0.5),0.).r;let fetchedB : f32=textureSampleLevel(noiseTexture,noiseSampler,vec2<f32>(noiseCoordinates2.y,noiseCoordinates2.z)*vec2<f32>(0.5,0.5)+vec2<f32>(0.5,0.5),0.).r;let force : vec3<f32>=vec3<f32>(-1.+2.*fetchedR,-1.+2.*fetchedG,-1.+2.*fetchedB)*params.noiseStrength;particlesOut.particles[index].direction=particlesOut.particles[index].direction+force*timeDelta;particlesOut.particles[index].noiseCoordinates1=noiseCoordinates1;particlesOut.particles[index].noiseCoordinates2=noiseCoordinates2;
#endif 
#endif 
#ifdef ANGULARSPEEDGRADIENTS
let angularSpeed : f32=textureSampleLevel(angularSpeedGradientTexture,angularSpeedGradientSampler,vec2<f32>(ageGradient,0.),0.).r;particlesOut.particles[index].angle=particlesIn.particles[index].angle+angularSpeed*timeDelta;
#else
let angle : vec2<f32>=particlesIn.particles[index].angle;particlesOut.particles[index].angle=vec2<f32>(angle.x+angle.y*timeDelta,angle.y);
#endif
#ifdef ANIMATESHEET 
var offsetAge : f32=particlesOut.particles[index].age;let dist : f32=params.cellInfos.y-params.cellInfos.x;
#ifdef ANIMATESHEETRANDOMSTART
let cellStartOffset : f32=particlesIn.particles[index].cellStartOffset;particlesOut.particles[index].cellStartOffset=cellStartOffset;offsetAge=offsetAge+cellStartOffset;
#else
let cellStartOffset : f32=0.;
#endif 
var ratio : f32;if (params.cellInfos.w==1.0) {ratio=clamp(((cellStartOffset+params.cellInfos.z*offsetAge) % life)/life,0.,1.0);}
else {ratio=clamp((cellStartOffset+params.cellInfos.z*offsetAge)/life,0.,1.0);}
particlesOut.particles[index].cellIndex=f32(i32(params.cellInfos.x+ratio*dist));
#endif
}}
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const gpuUpdateParticlesComputeShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=gpuUpdateParticles.compute.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/particles.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "particlesPixelShaderWGSL",
    ()=>particlesPixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$clipPlaneFragmentDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/clipPlaneFragmentDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$imageProcessingDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/imageProcessingDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$logDepthDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/logDepthDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$helperFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/helperFunctions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$imageProcessingFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/imageProcessingFunctions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$fogFragmentDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/fogFragmentDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$clipPlaneFragment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/clipPlaneFragment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$logDepthFragment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/logDepthFragment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$fogFragment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/fogFragment.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
const name = "particlesPixelShader";
const shader = `varying vUV: vec2f;varying vColor: vec4f;uniform textureMask: vec4f;var diffuseSamplerSampler: sampler;var diffuseSampler: texture_2d<f32>;
#include<clipPlaneFragmentDeclaration>
#include<imageProcessingDeclaration>
#include<logDepthDeclaration>
#include<helperFunctions>
#include<imageProcessingFunctions>
#ifdef RAMPGRADIENT
varying remapRanges: vec4f;var rampSamplerSampler: sampler;var rampSampler: texture_2d<f32>;
#endif
#include<fogFragmentDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
var textureColor: vec4f=textureSample(diffuseSampler,diffuseSamplerSampler,input.vUV);var baseColor: vec4f=(textureColor*uniforms.textureMask+( vec4f(1.,1.,1.,1.)-uniforms.textureMask))*input.vColor;
#ifdef RAMPGRADIENT
var alpha: f32=baseColor.a;var remappedColorIndex: f32=clamp((alpha-input.remapRanges.x)/input.remapRanges.y,0.0,1.0);var rampColor: vec4f=textureSample(rampSampler,rampSamplerSampler,vec2f(1.0-remappedColorIndex,0.));baseColor=vec4f(baseColor.rgb*rampColor.rgb,baseColor.a);var finalAlpha: f32=baseColor.a;baseColor.a=clamp((alpha*rampColor.a-input.remapRanges.z)/input.remapRanges.w,0.0,1.0);
#endif
#ifdef BLENDMULTIPLYMODE
var sourceAlpha: f32=input.vColor.a*textureColor.a;baseColor=vec4f(baseColor.rgb*sourceAlpha+ vec3f(1.0)*(1.0-sourceAlpha),baseColor.a);
#endif
#include<logDepthFragment>
#include<fogFragment>(color,baseColor)
#ifdef IMAGEPROCESSINGPOSTPROCESS
baseColor=vec4f(toLinearSpaceVec3(baseColor.rgb),baseColor.a);
#else
#ifdef IMAGEPROCESSING
baseColor=vec4f(toLinearSpaceVec3(baseColor.rgb),baseColor.a);baseColor=applyImageProcessing(baseColor);
#endif
#endif
fragmentOutputs.color=baseColor;
#define CUSTOM_FRAGMENT_MAIN_END
}`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const particlesPixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=particles.fragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/particles.vertex.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "particlesVertexShaderWGSL",
    ()=>particlesVertexShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$clipPlaneVertexDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/clipPlaneVertexDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$fogVertexDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/fogVertexDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$logDepthDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/logDepthDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$clipPlaneVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/clipPlaneVertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$fogVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/fogVertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$logDepthVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/logDepthVertex.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
const name = "particlesVertexShader";
const shader = `attribute position: vec3f;attribute color: vec4f;attribute angle: f32;attribute size: vec2f;
#ifdef ANIMATESHEET
attribute cellIndex: f32;
#endif
#ifndef BILLBOARD
attribute direction: vec3f;
#endif
#ifdef BILLBOARDSTRETCHED
attribute direction: vec3f;
#endif
#ifdef RAMPGRADIENT
attribute remapData: vec4f;
#endif
attribute offset: vec2f;uniform view: mat4x4f;uniform projection: mat4x4f;uniform translationPivot: vec2f;
#ifdef ANIMATESHEET
uniform particlesInfos: vec3f; 
#endif
varying vUV: vec2f;varying vColor: vec4f;
#ifdef RAMPGRADIENT
varying remapRanges: vec4f;
#endif
#if defined(BILLBOARD) && !defined(BILLBOARDY) && !defined(BILLBOARDSTRETCHED)
uniform invView: mat4x4f;
#endif
#include<clipPlaneVertexDeclaration>
#include<fogVertexDeclaration>
#include<logDepthDeclaration>
#ifdef BILLBOARD
uniform eyePosition: vec3f;
#endif
fn rotate(yaxis: vec3f,rotatedCorner: vec3f)->vec3f {var xaxis: vec3f=normalize(cross( vec3f(0.,1.0,0.),yaxis));var zaxis: vec3f=normalize(cross(yaxis,xaxis));var row0: vec3f= vec3f(xaxis.x,xaxis.y,xaxis.z);var row1: vec3f= vec3f(yaxis.x,yaxis.y,yaxis.z);var row2: vec3f= vec3f(zaxis.x,zaxis.y,zaxis.z);var rotMatrix: mat3x3f= mat3x3f(row0,row1,row2);var alignedCorner: vec3f=rotMatrix*rotatedCorner;return vertexInputs.position+alignedCorner;}
#ifdef BILLBOARDSTRETCHED
fn rotateAlign(toCamera: vec3f,rotatedCorner: vec3f)->vec3f {var normalizedToCamera: vec3f=normalize(toCamera);var normalizedCrossDirToCamera: vec3f=normalize(cross(normalize(vertexInputs.direction),normalizedToCamera));var row0: vec3f= vec3f(normalizedCrossDirToCamera.x,normalizedCrossDirToCamera.y,normalizedCrossDirToCamera.z);var row2: vec3f= vec3f(normalizedToCamera.x,normalizedToCamera.y,normalizedToCamera.z);
#ifdef BILLBOARDSTRETCHED_LOCAL
var row1: vec3f=normalize(vertexInputs.direction);
#else
var crossProduct: vec3f=normalize(cross(normalizedToCamera,normalizedCrossDirToCamera));var row1: vec3f= vec3f(crossProduct.x,crossProduct.y,crossProduct.z);
#endif
var rotMatrix: mat3x3f= mat3x3f(row0,row1,row2);var alignedCorner: vec3f=rotMatrix*rotatedCorner;return vertexInputs.position+alignedCorner;}
#endif
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {
#define CUSTOM_VERTEX_MAIN_BEGIN
var cornerPos: vec2f;var vPositionW: vec3f;cornerPos=( vec2f(input.offset.x-0.5,input.offset.y -0.5)-uniforms.translationPivot)*input.size;
#ifdef BILLBOARD
var rotatedCorner: vec3f;
#ifdef BILLBOARDY
rotatedCorner.x=cornerPos.x*cos(input.angle)-cornerPos.y*sin(input.angle)+uniforms.translationPivot.x;rotatedCorner.z=cornerPos.x*sin(input.angle)+cornerPos.y*cos(input.angle)+uniforms.translationPivot.y;rotatedCorner.y=0.;var yaxis: vec3f=input.position-uniforms.eyePosition;yaxis.y=0.;vPositionW=rotate(normalize(yaxis),rotatedCorner);var viewPos: vec3f=(uniforms.view* vec4f(vPositionW,1.0)).xyz;
#elif defined(BILLBOARDSTRETCHED)
rotatedCorner.x=cornerPos.x*cos(input.angle)-cornerPos.y*sin(input.angle)+uniforms.translationPivot.x;rotatedCorner.y=cornerPos.x*sin(input.angle)+cornerPos.y*cos(input.angle)+uniforms.translationPivot.y;rotatedCorner.z=0.;var toCamera: vec3f=input.position-uniforms.eyePosition;vPositionW=rotateAlign(toCamera,rotatedCorner);var viewPos: vec3f=(uniforms.view* vec4f(vPositionW,1.0)).xyz;
#else
rotatedCorner.x=cornerPos.x*cos(input.angle)-cornerPos.y*sin(input.angle)+uniforms.translationPivot.x;rotatedCorner.y=cornerPos.x*sin(input.angle)+cornerPos.y*cos(input.angle)+uniforms.translationPivot.y;rotatedCorner.z=0.;var viewPos: vec3f=(uniforms.view* vec4f(input.position,1.0)).xyz+rotatedCorner;vPositionW=(uniforms.invView* vec4f(viewPos,1)).xyz;
#endif
#ifdef RAMPGRADIENT
vertexOutputs.remapRanges=input.remapData;
#endif
vertexOutputs.position=uniforms.projection* vec4f(viewPos,1.0);
#else
var rotatedCorner: vec3f;rotatedCorner.x=cornerPos.x*cos(input.angle)-cornerPos.y*sin(input.angle)+uniforms.translationPivot.x;rotatedCorner.z=cornerPos.x*sin(input.angle)+cornerPos.y*cos(input.angle)+uniforms.translationPivot.y;rotatedCorner.y=0.;var yaxis: vec3f=normalize(vertexInputs.direction);vPositionW=rotate(yaxis,rotatedCorner);vertexOutputs.position=uniforms.projection*uniforms.view* vec4f(vPositionW,1.0);
#endif
vertexOutputs.vColor=input.color;
#ifdef ANIMATESHEET
var rowOffset: f32=floor(input.cellIndex*uniforms.particlesInfos.z);var columnOffset: f32=input.cellIndex-rowOffset/uniforms.particlesInfos.z;var uvScale: vec2f=uniforms.particlesInfos.xy;var uvOffset: vec2f= vec2f(input.offset.x ,1.0-input.offset.y);vertexOutputs.vUV=(uvOffset+ vec2f(columnOffset,rowOffset))*uvScale;
#else
vertexOutputs.vUV=input.offset;
#endif
#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6) || defined(FOG)
var worldPos: vec4f= vec4f(vPositionW,1.0);
#endif
#include<clipPlaneVertex>
#include<fogVertex>
#include<logDepthVertex>
#define CUSTOM_VERTEX_MAIN_END
}`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const particlesVertexShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=particles.vertex.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ssao2.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "ssao2PixelShaderWGSL",
    ()=>ssao2PixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
;
const name = "ssao2PixelShader";
const shader = `varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;
#ifdef SSAO
const scales: array<f32,16>=array<f32,16>(
0.1,
0.11406250000000001,
0.131640625,
0.15625,
0.187890625,
0.2265625,
0.272265625,
0.325,
0.384765625,
0.4515625,
0.525390625,
0.60625,
0.694140625,
0.7890625,
0.891015625,
1.0
);uniform near: f32;uniform radius: f32;var depthSamplerSampler: sampler;var depthSampler: texture_2d<f32>;var randomSamplerSampler: sampler;var randomSampler: texture_2d<f32>;var normalSamplerSampler: sampler;var normalSampler: texture_2d<f32>;uniform randTextureTiles: f32;uniform samplesFactor: f32;uniform sampleSphere: array<vec3f,SAMPLES>;uniform totalStrength: f32;uniform base: f32;
#ifdef ORTHOGRAPHIC_CAMERA
uniform viewport: vec4f;
#else
uniform xViewport: f32;uniform yViewport: f32;
#endif
uniform depthProjection: mat3x3f;uniform maxZ: f32;uniform minZAspect: f32;uniform texelSize: vec2f;uniform projection: mat4x4f;@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var random: vec3f=textureSampleLevel(randomSampler,randomSamplerSampler,input.vUV*uniforms.randTextureTiles,0.0).rgb;var depth: f32=textureSampleLevel(depthSampler,depthSamplerSampler,input.vUV,0.0).r;var depthSign: f32=sign(depth);depth=depth*depthSign;var normal: vec3f=textureSampleLevel(normalSampler,normalSamplerSampler,input.vUV,0.0).rgb;var occlusion: f32=0.0;var correctedRadius: f32=min(uniforms.radius,uniforms.minZAspect*depth/uniforms.near);
#ifdef ORTHOGRAPHIC_CAMERA
var vViewRay: vec3f= vec3f(mix(uniforms.viewport.x,uniforms.viewport.y,input.vUV.x),mix(uniforms.viewport.z,uniforms.viewport.w,input.vUV.y),depthSign);
#else
var vViewRay: vec3f= vec3f((input.vUV.x*2.0-1.0)*uniforms.xViewport,(input.vUV.y*2.0-1.0)*uniforms.yViewport,depthSign);
#endif
var vDepthFactor: vec3f=uniforms.depthProjection* vec3f(1.0,1.0,depth);var origin: vec3f=vViewRay*vDepthFactor;var rvec: vec3f=random*2.0-1.0;rvec.z=0.0;var dotProduct: f32=dot(rvec,normal);rvec=select( vec3f(-rvec.y,0.0,rvec.x),rvec,1.0-abs(dotProduct)>1e-2);var tangent: vec3f=normalize(rvec-normal*dot(rvec,normal));var bitangent: vec3f=cross(normal,tangent);var tbn: mat3x3f= mat3x3f(tangent,bitangent,normal);var difference: f32;for (var i: i32=0; i<SAMPLES; i++) {var samplePosition: vec3f=scales[(i+ i32(random.x*16.0)) % 16]*tbn*uniforms.sampleSphere[(i+ i32(random.y*16.0)) % 16];samplePosition=samplePosition*correctedRadius+origin;var offset: vec4f= vec4f(samplePosition,1.0);offset=uniforms.projection*offset;offset=vec4f(offset.xyz/offset.w,offset.w);offset=vec4f(offset.xy*0.5+0.5,offset.z,offset.w);if (offset.x<0.0 || offset.y<0.0 || offset.x>1.0 || offset.y>1.0) {continue;}
var sampleDepth: f32=abs(textureSampleLevel(depthSampler,depthSamplerSampler,offset.xy,0.0).r);difference=depthSign*samplePosition.z-sampleDepth;var rangeCheck: f32=1.0-smoothstep(correctedRadius*0.5,correctedRadius,difference);occlusion+=step(EPSILON,difference)*rangeCheck;}
occlusion=occlusion*(1.0-smoothstep(uniforms.maxZ*0.75,uniforms.maxZ,depth));var ao: f32=1.0-uniforms.totalStrength*occlusion*uniforms.samplesFactor;var result: f32=clamp(ao+uniforms.base,0.0,1.0);fragmentOutputs.color= vec4f( vec3f(result),1.0);}
#else
#ifdef BLUR
uniform outSize: f32;uniform soften: f32;uniform tolerance: f32;uniform samples: i32;
#ifndef BLUR_BYPASS
var depthSamplerSampler: sampler;var depthSampler: texture_2d<f32>;
#ifdef BLUR_LEGACY
fn blur13Bilateral(image: texture_2d<f32>,imageSampler: sampler,uv: vec2f,step: vec2f)->f32 {var result: f32=0.0;var off1: vec2f= vec2f(1.411764705882353)*step;var off2: vec2f= vec2f(3.2941176470588234)*step;var off3: vec2f= vec2f(5.176470588235294)*step;var compareDepth: f32=abs(textureSampleLevel(depthSampler,depthSamplerSampler,uv,0.0).r);var sampleDepth: f32;var weight: f32;var weightSum: f32=30.0;result+=textureSampleLevel(image,imageSampler,uv,0.0).r*30.0;sampleDepth=abs(textureSampleLevel(depthSampler,depthSamplerSampler,uv+off1,0.0).r);weight=clamp(1.0/( 0.003+abs(compareDepth-sampleDepth)),0.0,30.0);weightSum+= weight;result+=textureSampleLevel(image,imageSampler,uv+off1,0.0).r*weight;sampleDepth=abs(textureSampleLevel(depthSampler,depthSamplerSampler,uv-off1,0.0).r);weight=clamp(1.0/( 0.003+abs(compareDepth-sampleDepth)),0.0,30.0);weightSum+= weight;result+=textureSampleLevel(image,imageSampler,uv-off1,0.0).r*weight;sampleDepth=abs(textureSampleLevel(depthSampler,depthSamplerSampler,uv+off2,0.0).r);weight=clamp(1.0/( 0.003+abs(compareDepth-sampleDepth)),0.0,30.0);weightSum+=weight;result+=textureSampleLevel(image,imageSampler,uv+off2,0.0).r*weight;sampleDepth=abs(textureSampleLevel(depthSampler,depthSamplerSampler,uv-off2,0.0).r);weight=clamp(1.0/( 0.003+abs(compareDepth-sampleDepth)),0.0,30.0);weightSum+=weight;result+=textureSampleLevel(image,imageSampler,uv-off2,0.0).r*weight;sampleDepth=abs(textureSampleLevel(depthSampler,depthSamplerSampler,uv+off3,0.0).r);weight=clamp(1.0/( 0.003+abs(compareDepth-sampleDepth)),0.0,30.0);weightSum+=weight;result+=textureSampleLevel(image,imageSampler,uv+off3,0.0).r*weight;sampleDepth=abs(textureSampleLevel(depthSampler,depthSamplerSampler,uv-off3,0.0).r);weight=clamp(1.0/( 0.003+abs(compareDepth-sampleDepth)),0.0,30.0);weightSum+=weight;result+=textureSampleLevel(image,imageSampler,uv-off3,0.0).r*weight;return result/weightSum;}
#endif
#endif
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var result: f32=0.0;
#ifdef BLUR_BYPASS
result=textureSampleLevel(textureSampler,textureSamplerSampler,input.vUV,0.0).r;
#else
#ifdef BLUR_H
var step: vec2f= vec2f(1.0/uniforms.outSize,0.0);
#else
var step: vec2f= vec2f(0.0,1.0/uniforms.outSize);
#endif
#ifdef BLUR_LEGACY
result=blur13Bilateral(textureSampler,textureSamplerSampler,input.vUV,step);
#else
var compareDepth: f32=abs(textureSampleLevel(depthSampler,depthSamplerSampler,input.vUV,0.0).r);var weightSum: f32=0.0;for (var i: i32=-uniforms.samples; i<uniforms.samples; i+=2)
{var samplePos: vec2f=input.vUV+step*( f32(i)+0.5);var sampleDepth: f32=abs(textureSampleLevel(depthSampler,depthSamplerSampler,samplePos,0.0).r);var falloff: f32=smoothstep(0.0,
f32(uniforms.samples),
f32(uniforms.samples)-abs( f32(i))*uniforms.soften);var minDivider: f32=uniforms.tolerance*0.5+0.003;var weight: f32=falloff/( minDivider+abs(compareDepth-sampleDepth));result+=textureSampleLevel(textureSampler,textureSamplerSampler,samplePos,0.0).r*weight;weightSum+=weight;}
result/=weightSum;
#endif
#endif
fragmentOutputs.color=vec4f(result,result,result,1.0);}
#endif
#endif
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const ssao2PixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=ssao2.fragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ssaoCombine.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "ssaoCombinePixelShaderWGSL",
    ()=>ssaoCombinePixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
;
const name = "ssaoCombinePixelShader";
const shader = `varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;var originalColorSampler: sampler;var originalColor: texture_2d<f32>;uniform viewport: vec4f;
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
var uv: vec2f=uniforms.viewport.xy+input.vUV*uniforms.viewport.zw;var ssaoColor: vec4f=textureSample(textureSampler,textureSamplerSampler,uv);var sceneColor: vec4f=textureSample(originalColor,originalColorSampler,uv);fragmentOutputs.color=sceneColor*ssaoColor;
#define CUSTOM_FRAGMENT_MAIN_END
}
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const ssaoCombinePixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=ssaoCombine.fragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/screenSpaceReflection2.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "screenSpaceReflection2PixelShaderWGSL",
    ()=>screenSpaceReflection2PixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$helperFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/helperFunctions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$pbrBRDFFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/pbrBRDFFunctions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$screenSpaceRayTrace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/screenSpaceRayTrace.js [app-client] (ecmascript)");
;
;
;
;
const name = "screenSpaceReflection2PixelShader";
const shader = `var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;varying vUV: vec2f;
#ifdef SSR_SUPPORTED
var reflectivitySamplerSampler: sampler;var reflectivitySampler: texture_2d<f32>;var normalSampler: texture_2d<f32>;var depthSampler: texture_2d<f32>;
#ifdef SSRAYTRACE_USE_BACK_DEPTHBUFFER
var backDepthSampler: texture_2d<f32>;uniform backSizeFactor: f32;
#endif
#ifdef SSR_USE_ENVIRONMENT_CUBE
var envCubeSamplerSampler: sampler;var envCubeSampler: texture_cube<f32>;
#ifdef SSR_USE_LOCAL_REFLECTIONMAP_CUBIC
uniform vReflectionPosition: vec3f;uniform vReflectionSize: vec3f;
#endif
#endif
uniform view: mat4x4f;uniform invView: mat4x4f;uniform projection: mat4x4f;uniform invProjectionMatrix: mat4x4f;uniform projectionPixel: mat4x4f;uniform nearPlaneZ: f32;uniform farPlaneZ: f32;uniform stepSize: f32;uniform maxSteps: f32;uniform strength: f32;uniform thickness: f32;uniform roughnessFactor: f32;uniform reflectionSpecularFalloffExponent: f32;uniform maxDistance: f32;uniform selfCollisionNumSkip: f32;uniform reflectivityThreshold: f32;
#include<helperFunctions>
#include<pbrBRDFFunctions>
#include<screenSpaceRayTrace>
fn hash(a: vec3f)->vec3f
{var result=fract(a*0.8);result+=dot(result,result.yxz+19.19);return fract((result.xxy+result.yxx)*result.zyx);}
fn computeAttenuationForIntersection(ihitPixel: vec2f,hitUV: vec2f,vsRayOrigin: vec3f,vsHitPoint: vec3f,reflectionVector: vec3f,maxRayDistance: f32,numIterations: f32)->f32 {var attenuation: f32=1.0;
#ifdef SSR_ATTENUATE_SCREEN_BORDERS
var dCoords: vec2f=smoothstep(vec2f(0.2),vec2f(0.6),abs( vec2f(0.5,0.5)-hitUV.xy));attenuation*=clamp(1.0-(dCoords.x+dCoords.y),0.0,1.0);
#endif
#ifdef SSR_ATTENUATE_INTERSECTION_DISTANCE
attenuation*=1.0-clamp(distance(vsRayOrigin,vsHitPoint)/maxRayDistance,0.0,1.0);
#endif
#ifdef SSR_ATTENUATE_INTERSECTION_NUMITERATIONS
attenuation*=1.0-(numIterations/uniforms.maxSteps);
#endif
#ifdef SSR_ATTENUATE_BACKFACE_REFLECTION
var reflectionNormal: vec3f=texelFetch(normalSampler,hitPixel,0).xyz;var directionBasedAttenuation: f32=smoothstep(-0.17,0.0,dot(reflectionNormal,-reflectionVector));attenuation*=directionBasedAttenuation;
#endif
return attenuation;}
#endif
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#ifdef SSR_SUPPORTED
var colorFull: vec4f=textureSampleLevel(textureSampler,textureSamplerSampler,input.vUV,0.0);var color: vec3f=colorFull.rgb;var reflectivity: vec4f=max(textureSampleLevel(reflectivitySampler,reflectivitySamplerSampler,input.vUV,0.0),vec4f(0.0));
#ifndef SSR_DISABLE_REFLECTIVITY_TEST
if (max(reflectivity.r,max(reflectivity.g,reflectivity.b))<=uniforms.reflectivityThreshold) {
#ifdef SSR_USE_BLUR
fragmentOutputs.color= vec4f(0.);
#else
fragmentOutputs.color=colorFull;
#endif
return fragmentOutputs;}
#endif
#ifdef SSR_INPUT_IS_GAMMA_SPACE
color=toLinearSpaceVec3(color);
#endif
var texSize: vec2f= vec2f(textureDimensions(depthSampler,0));var csNormal: vec3f=textureLoad(normalSampler,vec2<i32>(input.vUV*texSize),0).xyz; 
#ifdef SSR_DECODE_NORMAL
csNormal=csNormal*2.0-1.0;
#endif
#ifdef SSR_NORMAL_IS_IN_WORLDSPACE
csNormal=(uniforms.view* vec4f(csNormal,0.0)).xyz;
#endif
var depth: f32=textureLoad(depthSampler,vec2<i32>(input.vUV*texSize),0).r;
#ifdef SSRAYTRACE_SCREENSPACE_DEPTH
depth=linearizeDepth(depth,uniforms.nearPlaneZ,uniforms.farPlaneZ);
#endif
var csPosition: vec3f=computeViewPosFromUVDepth(input.vUV,depth,uniforms.projection,uniforms.invProjectionMatrix);
#ifdef ORTHOGRAPHIC_CAMERA
var csViewDirection: vec3f= vec3f(0.,0.,1.);
#else
var csViewDirection: vec3f=normalize(csPosition);
#endif
var csReflectedVector: vec3f=reflect(csViewDirection,csNormal);
#ifdef SSR_USE_ENVIRONMENT_CUBE
var wReflectedVector: vec3f=(uniforms.invView* vec4f(csReflectedVector,0.0)).xyz;
#ifdef SSR_USE_LOCAL_REFLECTIONMAP_CUBIC
var worldPos: vec4f=uniforms.invView* vec4f(csPosition,1.0);wReflectedVector=parallaxCorrectNormal(worldPos.xyz,normalize(wReflectedVector),uniforms.vReflectionSize,uniforms.vReflectionPosition);
#endif
#ifdef SSR_INVERTCUBICMAP
wReflectedVector.y*=-1.0;
#endif
#ifdef SSRAYTRACE_RIGHT_HANDED_SCENE
wReflectedVector.z*=-1.0;
#endif
var envColor: vec3f=textureSampleLevel(envCubeSampler,envCubeSamplerSampler,wReflectedVector,0.0).xyz;
#ifdef SSR_ENVIRONMENT_CUBE_IS_GAMMASPACE
envColor=toLinearSpaceVec3(envColor);
#endif
#else
var envColor: vec3f=color;
#endif
var reflectionAttenuation: f32=1.0;var rayHasHit: bool=false;var startPixel: vec2f;var hitPixel: vec2f;var hitPoint: vec3f;var numIterations: f32;
#ifdef SSRAYTRACE_DEBUG
var debugColor: vec3f;
#endif
#ifdef SSR_ATTENUATE_FACING_CAMERA
reflectionAttenuation*=1.0-smoothstep(0.25,0.5,dot(-csViewDirection,csReflectedVector));
#endif
if (reflectionAttenuation>0.0) {
#ifdef SSR_USE_BLUR
var jitt: vec3f= vec3f(0.);
#else
var roughness: f32=1.0-reflectivity.a;var jitt: vec3f=mix( vec3f(0.0),hash(csPosition)- vec3f(0.5),roughness)*uniforms.roughnessFactor; 
#endif
var uv2: vec2f=input.vUV*texSize;var c: f32=(uv2.x+uv2.y)*0.25;var jitter: f32=((c)%(1.0)); 
rayHasHit=traceScreenSpaceRay1(
csPosition,
normalize(csReflectedVector+jitt),
uniforms.projectionPixel,
depthSampler,
texSize,
#ifdef SSRAYTRACE_USE_BACK_DEPTHBUFFER
backDepthSampler,
uniforms.backSizeFactor,
#endif
uniforms.thickness,
uniforms.nearPlaneZ,
uniforms.farPlaneZ,
uniforms.stepSize,
jitter,
uniforms.maxSteps,
uniforms.maxDistance,
uniforms.selfCollisionNumSkip,
&startPixel,
&hitPixel,
&hitPoint,
&numIterations
#ifdef SSRAYTRACE_DEBUG
,&debugColor
#endif
);}
#ifdef SSRAYTRACE_DEBUG
fragmentOutputs.color= vec4f(debugColor,1.);return fragmentOutputs;
#endif
var F0: vec3f=reflectivity.rgb;var fresnel: vec3f=fresnelSchlickGGXVec3(max(dot(csNormal,-csViewDirection),0.0),F0, vec3f(1.));var SSR: vec3f=envColor;if (rayHasHit) {var reflectedColor: vec3f=textureLoad(textureSampler,vec2<i32>(hitPixel),0).rgb;
#ifdef SSR_INPUT_IS_GAMMA_SPACE
reflectedColor=toLinearSpaceVec3(reflectedColor);
#endif
reflectionAttenuation*=computeAttenuationForIntersection(hitPixel,hitPixel/texSize,csPosition,hitPoint,csReflectedVector,uniforms.maxDistance,numIterations);SSR=reflectedColor*reflectionAttenuation+(1.0-reflectionAttenuation)*envColor;}
#ifndef SSR_BLEND_WITH_FRESNEL
SSR*=fresnel;
#endif
#ifdef SSR_USE_BLUR
var blur_radius: f32=0.0;var roughness: f32=1.0-reflectivity.a*(1.0-uniforms.roughnessFactor);if (roughness>0.001) {var cone_angle: f32=min(roughness,0.999)*3.14159265*0.5;var cone_len: f32=distance(startPixel,hitPixel);var op_len: f32=2.0*tan(cone_angle)*cone_len; 
var a: f32=op_len;var h: f32=cone_len;var a2: f32=a*a;var fh2: f32=4.0f*h*h;blur_radius=(a*(sqrt(a2+fh2)-a))/(4.0f*h);}
fragmentOutputs.color= vec4f(SSR,blur_radius/255.0); 
#else
#ifdef SSR_BLEND_WITH_FRESNEL
var reflectionMultiplier: vec3f=clamp(pow(fresnel*uniforms.strength, vec3f(uniforms.reflectionSpecularFalloffExponent)),vec3f(0.0),vec3f(1.0));
#else
var reflectionMultiplier: vec3f=clamp(pow(reflectivity.rgb*uniforms.strength, vec3f(uniforms.reflectionSpecularFalloffExponent)),vec3f(0.0),vec3f(1.0));
#endif
var colorMultiplier: vec3f=1.0-reflectionMultiplier;var finalColor: vec3f=(color*colorMultiplier)+(SSR*reflectionMultiplier);
#ifdef SSR_OUTPUT_IS_GAMMA_SPACE
finalColor=toGammaSpaceVec3(finalColor);
#endif
fragmentOutputs.color= vec4f(finalColor,colorFull.a);
#endif
#else
fragmentOutputs.color=textureSampleLevel(textureSampler,textureSamplerSampler,input.vUV,0.0);
#endif
}
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const screenSpaceReflection2PixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=screenSpaceReflection2.fragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/screenSpaceReflection2Blur.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "screenSpaceReflection2BlurPixelShaderWGSL",
    ()=>screenSpaceReflection2BlurPixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
;
const name = "screenSpaceReflection2BlurPixelShader";
const shader = `var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;varying vUV: vec2f;uniform texelOffsetScale: vec2f;const weights: array<f32,8>=array<f32,8>(0.071303,0.131514,0.189879,0.321392,0.452906, 0.584419,0.715932,0.847445);fn processSample(uv: vec2f,i: f32,stepSize: vec2f,accumulator: ptr<function,vec4f>,denominator: ptr<function,f32>)
{var offsetUV: vec2f=stepSize*i+uv;var coefficient: f32=weights[ i32(2.0-abs(i))];*accumulator+=textureSampleLevel(textureSampler,textureSamplerSampler,offsetUV,0.0)*coefficient;*denominator+=coefficient;}
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var colorFull: vec4f=textureSampleLevel(textureSampler,textureSamplerSampler,input.vUV,0.0);if (dot(colorFull, vec4f(1.0))==0.0) {fragmentOutputs.color=colorFull;return fragmentOutputs;}
var blurRadius: f32=colorFull.a*255.0; 
var stepSize: vec2f=uniforms.texelOffsetScale.xy*blurRadius;var accumulator: vec4f=textureSampleLevel(textureSampler,textureSamplerSampler,input.vUV,0.0)*0.214607;var denominator: f32=0.214607;processSample(input.vUV,1.0,stepSize,&accumulator,&denominator);processSample(input.vUV,1.0*0.2,stepSize,&accumulator,&denominator);processSample(input.vUV,1.0*0.4,stepSize,&accumulator,&denominator);processSample(input.vUV,1.0*0.6,stepSize,&accumulator,&denominator);processSample(input.vUV,1.0*0.8,stepSize,&accumulator,&denominator);processSample(input.vUV,1.0*1.2,stepSize,&accumulator,&denominator);processSample(input.vUV,1.0*1.4,stepSize,&accumulator,&denominator);processSample(input.vUV,1.0*1.6,stepSize,&accumulator,&denominator);processSample(input.vUV,1.0*1.8,stepSize,&accumulator,&denominator);processSample(input.vUV,1.0*2.0,stepSize,&accumulator,&denominator);processSample(input.vUV,-1.0,stepSize,&accumulator,&denominator);processSample(input.vUV,-1.0*0.2,stepSize,&accumulator,&denominator);processSample(input.vUV,-1.0*0.4,stepSize,&accumulator,&denominator);processSample(input.vUV,-1.0*0.6,stepSize,&accumulator,&denominator);processSample(input.vUV,-1.0*0.8,stepSize,&accumulator,&denominator);processSample(input.vUV,-1.0*1.2,stepSize,&accumulator,&denominator);processSample(input.vUV,-1.0*1.4,stepSize,&accumulator,&denominator);processSample(input.vUV,-1.0*1.6,stepSize,&accumulator,&denominator);processSample(input.vUV,-1.0*1.8,stepSize,&accumulator,&denominator);processSample(input.vUV,-1.0*2.0,stepSize,&accumulator,&denominator);fragmentOutputs.color= vec4f(accumulator.rgb/denominator,colorFull.a);}
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const screenSpaceReflection2BlurPixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=screenSpaceReflection2Blur.fragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/screenSpaceReflection2BlurCombiner.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "screenSpaceReflection2BlurCombinerPixelShaderWGSL",
    ()=>screenSpaceReflection2BlurCombinerPixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$helperFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/helperFunctions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$pbrBRDFFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/pbrBRDFFunctions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$screenSpaceRayTrace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/screenSpaceRayTrace.js [app-client] (ecmascript)");
;
;
;
;
const name = "screenSpaceReflection2BlurCombinerPixelShader";
const shader = `var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>; 
var mainSamplerSampler: sampler;var mainSampler: texture_2d<f32>;var reflectivitySamplerSampler: sampler;var reflectivitySampler: texture_2d<f32>;uniform strength: f32;uniform reflectionSpecularFalloffExponent: f32;uniform reflectivityThreshold: f32;varying vUV: vec2f;
#include<helperFunctions>
#ifdef SSR_BLEND_WITH_FRESNEL
#include<pbrBRDFFunctions>
#include<screenSpaceRayTrace>
uniform projection: mat4x4f;uniform invProjectionMatrix: mat4x4f;
#ifdef SSR_NORMAL_IS_IN_WORLDSPACE
uniform view: mat4x4f;
#endif
var normalSampler: texture_2d<f32>;var depthSampler: texture_2d<f32>;
#ifdef SSRAYTRACE_SCREENSPACE_DEPTH
uniform nearPlaneZ: f32;uniform farPlaneZ: f32;
#endif
#endif
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#ifdef SSRAYTRACE_DEBUG
fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,input.vUV);
#else
var SSR: vec3f=textureSample(textureSampler,textureSamplerSampler,input.vUV).rgb;var color: vec4f=textureSample(mainSampler,textureSamplerSampler,input.vUV);var reflectivity: vec4f=textureSample(reflectivitySampler,reflectivitySamplerSampler,input.vUV);
#ifndef SSR_DISABLE_REFLECTIVITY_TEST
if (max(reflectivity.r,max(reflectivity.g,reflectivity.b))<=uniforms.reflectivityThreshold) {fragmentOutputs.color=color;return fragmentOutputs;}
#endif
#ifdef SSR_INPUT_IS_GAMMA_SPACE
color=toLinearSpaceVec4(color);
#endif
#ifdef SSR_BLEND_WITH_FRESNEL
var texSize: vec2f= vec2f(textureDimensions(depthSampler,0));var csNormal: vec3f=textureLoad(normalSampler,vec2<i32>(input.vUV*texSize),0).xyz;
#ifdef SSR_DECODE_NORMAL
csNormal=csNormal*2.0-1.0;
#endif
#ifdef SSR_NORMAL_IS_IN_WORLDSPACE
csNormal=(uniforms.view*vec4f(csNormal,0.0)).xyz;
#endif
var depth: f32=textureLoad(depthSampler,vec2<i32>(input.vUV*texSize),0).r;
#ifdef SSRAYTRACE_SCREENSPACE_DEPTH
depth=linearizeDepth(depth,uniforms.nearPlaneZ,uniforms.farPlaneZ);
#endif
var csPosition: vec3f=computeViewPosFromUVDepth(input.vUV,depth,uniforms.projection,uniforms.invProjectionMatrix);var csViewDirection: vec3f=normalize(csPosition);var F0: vec3f=reflectivity.rgb;var fresnel: vec3f=fresnelSchlickGGXVec3(max(dot(csNormal,-csViewDirection),0.0),F0, vec3f(1.));var reflectionMultiplier: vec3f=clamp(pow(fresnel*uniforms.strength, vec3f(uniforms.reflectionSpecularFalloffExponent)),vec3f(0.0),vec3f(1.0));
#else
var reflectionMultiplier: vec3f=clamp(pow(reflectivity.rgb*uniforms.strength, vec3f(uniforms.reflectionSpecularFalloffExponent)),vec3f(0.0),vec3f(1.0));
#endif
var colorMultiplier: vec3f=1.0-reflectionMultiplier;var finalColor: vec3f=(color.rgb*colorMultiplier)+(SSR*reflectionMultiplier);
#ifdef SSR_OUTPUT_IS_GAMMA_SPACE
finalColor=toGammaSpaceVec3(finalColor);
#endif
fragmentOutputs.color= vec4f(finalColor,color.a);
#endif
}
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const screenSpaceReflection2BlurCombinerPixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=screenSpaceReflection2BlurCombiner.fragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/taa.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "taaPixelShaderWGSL",
    ()=>taaPixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
;
const name = "taaPixelShader";
const shader = `varying vUV: vec2f;var textureSampler: texture_2d<f32>;var historySampler: texture_2d<f32>;
#ifdef TAA_REPROJECT_HISTORY
var historySamplerSampler: sampler;var velocitySampler: texture_2d<f32>;
#endif
uniform factor: f32;@fragment
fn main(input: FragmentInputs)->FragmentOutputs {let pos=vec2i(fragmentInputs.position.xy);let c=textureLoad(textureSampler,pos,0);
#ifdef TAA_REPROJECT_HISTORY
let v=textureLoad(velocitySampler,pos,0);var h=textureSample(historySampler,historySamplerSampler,input.vUV+v.xy);
#else
var h=textureLoad(historySampler,pos,0);
#endif
#ifdef TAA_CLAMP_HISTORY
var cmin=vec4f(1);var cmax=vec4f(0);for (var x=-1; x<=1; x+=1) {for (var y=-1; y<=1; y+=1) {let c=textureLoad(textureSampler,pos+vec2i(x,y),0);cmin=min(cmin,c);cmax=max(cmax,c);}}
h=clamp(h,cmin,cmax);
#endif
fragmentOutputs.color= mix(h,c,uniforms.factor);}
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const taaPixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=taa.fragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/postprocess.vertex.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "postprocessVertexShaderWGSL",
    ()=>postprocessVertexShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
;
const name = "postprocessVertexShader";
const shader = `attribute position: vec2<f32>;uniform scale: vec2<f32>;varying vUV: vec2<f32>;const madd=vec2(0.5,0.5);
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {
#define CUSTOM_VERTEX_MAIN_BEGIN
vertexOutputs.vUV=(vertexInputs.position*madd+madd)*uniforms.scale;vertexOutputs.position=vec4(vertexInputs.position,0.0,1.0);
#define CUSTOM_VERTEX_MAIN_END
}
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const postprocessVertexShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=postprocess.vertex.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/kernelBlur.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "kernelBlurPixelShaderWGSL",
    ()=>kernelBlurPixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$kernelBlurVaryingDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/kernelBlurVaryingDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$packingFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/packingFunctions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$kernelBlurFragment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/kernelBlurFragment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$kernelBlurFragment2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/kernelBlurFragment2.js [app-client] (ecmascript)");
;
;
;
;
;
const name = "kernelBlurPixelShader";
const shader = `var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;uniform delta: vec2f;varying sampleCenter: vec2f;
#ifdef DOF
var circleOfConfusionSamplerSampler: sampler;var circleOfConfusionSampler: texture_2d<f32>;fn sampleCoC(offset: vec2f)->f32 {var coc: f32=textureSample(circleOfConfusionSampler,circleOfConfusionSamplerSampler,offset).r;return coc; }
#endif
#include<kernelBlurVaryingDeclaration>[0..varyingCount]
#ifdef PACKEDFLOAT
#include<packingFunctions>
#endif
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var computedWeight: f32=0.0;
#ifdef PACKEDFLOAT
var blend: f32=0.;
#else
var blend: vec4f= vec4f(0.);
#endif
#ifdef DOF
var sumOfWeights: f32=CENTER_WEIGHT; 
var factor: f32=0.0;
#ifdef PACKEDFLOAT
blend+=unpack(textureSample(textureSampler,textureSamplerSampler,input.sampleCenter))*CENTER_WEIGHT;
#else
blend+=textureSample(textureSampler,textureSamplerSampler,input.sampleCenter)*CENTER_WEIGHT;
#endif
#endif
#include<kernelBlurFragment>[0..varyingCount]
#include<kernelBlurFragment2>[0..depCount]
#ifdef PACKEDFLOAT
fragmentOutputs.color=pack(blend);
#else
fragmentOutputs.color=blend;
#endif
#ifdef DOF
fragmentOutputs.color/=sumOfWeights;
#endif
}`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const kernelBlurPixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=kernelBlur.fragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/kernelBlur.vertex.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "kernelBlurVertexShaderWGSL",
    ()=>kernelBlurVertexShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$kernelBlurVaryingDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/kernelBlurVaryingDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$kernelBlurVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/kernelBlurVertex.js [app-client] (ecmascript)");
;
;
;
const name = "kernelBlurVertexShader";
const shader = `attribute position: vec2f;uniform delta: vec2f;varying sampleCenter: vec2f;
#include<kernelBlurVaryingDeclaration>[0..varyingCount]
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {const madd: vec2f= vec2f(0.5,0.5);
#define CUSTOM_VERTEX_MAIN_BEGIN
vertexOutputs.sampleCenter=(input.position*madd+madd);
#include<kernelBlurVertex>[0..varyingCount]
vertexOutputs.position= vec4f(input.position,0.0,1.0);
#define CUSTOM_VERTEX_MAIN_END
}`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const kernelBlurVertexShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=kernelBlur.vertex.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/pass.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "passPixelShaderWGSL",
    ()=>passPixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
;
const name = "passPixelShader";
const shader = `varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,input.vUV);}`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const passPixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=pass.fragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/passCube.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "passCubePixelShaderWGSL",
    ()=>passCubePixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
;
const name = "passCubePixelShader";
const shader = `varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_cube<f32>;
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var uv: vec2f=input.vUV*2.0-1.0;
#ifdef POSITIVEX
fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,vec3f(1.001,uv.y,uv.x));
#endif
#ifdef NEGATIVEX
fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,vec3f(-1.001,uv.y,uv.x));
#endif
#ifdef POSITIVEY
fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,vec3f(uv.y,1.001,uv.x));
#endif
#ifdef NEGATIVEY
fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,vec3f(uv.y,-1.001,uv.x));
#endif
#ifdef POSITIVEZ
fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,vec3f(uv,1.001));
#endif
#ifdef NEGATIVEZ
fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,vec3f(uv,-1.001));
#endif
}`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const passCubePixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=passCube.fragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/vrDistortionCorrection.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "vrDistortionCorrectionPixelShaderWGSL",
    ()=>vrDistortionCorrectionPixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
;
const name = "vrDistortionCorrectionPixelShader";
const shader = `#define DISABLE_UNIFORMITY_ANALYSIS
varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;uniform LensCenter: vec2f;uniform Scale: vec2f;uniform ScaleIn: vec2f;uniform HmdWarpParam: vec4f;fn HmdWarp(in01: vec2f)->vec2f {var theta: vec2f=(in01-uniforms.LensCenter)*uniforms.ScaleIn; 
var rSq: f32=theta.x*theta.x+theta.y*theta.y;var rvector: vec2f=theta*(uniforms.HmdWarpParam.x+uniforms.HmdWarpParam.y*rSq+uniforms.HmdWarpParam.z*rSq*rSq+uniforms.HmdWarpParam.w*rSq*rSq*rSq);return uniforms.LensCenter+uniforms.Scale*rvector;}
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var tc: vec2f=HmdWarp(input.vUV);if (tc.x <0.0 || tc.x>1.0 || tc.y<0.0 || tc.y>1.0) {fragmentOutputs.color=vec4f(0.0,0.0,0.0,0.0);}
else{fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,tc);}}`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const vrDistortionCorrectionPixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=vrDistortionCorrection.fragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/imageProcessing.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "imageProcessingPixelShaderWGSL",
    ()=>imageProcessingPixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$imageProcessingDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/imageProcessingDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$helperFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/helperFunctions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$imageProcessingFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/imageProcessingFunctions.js [app-client] (ecmascript)");
;
;
;
;
const name = "imageProcessingPixelShader";
const shader = `varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;
#include<imageProcessingDeclaration>
#include<helperFunctions>
#include<imageProcessingFunctions>
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var result: vec4f=textureSample(textureSampler,textureSamplerSampler,input.vUV);result=vec4f(max(result.rgb,vec3f(0.)),result.a);
#ifdef IMAGEPROCESSING
#ifndef FROMLINEARSPACE
result=vec4f(toLinearSpaceVec3(result.rgb),result.a);
#endif
result=applyImageProcessing(result);
#else
#ifdef FROMLINEARSPACE
result=applyImageProcessing(result);
#endif
#endif
fragmentOutputs.color=result;}`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const imageProcessingPixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=imageProcessing.fragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/sharpen.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "sharpenPixelShaderWGSL",
    ()=>sharpenPixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
;
const name = "sharpenPixelShader";
const shader = `varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;uniform screenSize: vec2f;uniform sharpnessAmounts: vec2f;
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var onePixel: vec2f= vec2f(1.0,1.0)/uniforms.screenSize;var color: vec4f=textureSample(textureSampler,textureSamplerSampler,input.vUV);var edgeDetection: vec4f=textureSample(textureSampler,textureSamplerSampler,input.vUV+onePixel*vec2f(0,-1)) +
textureSample(textureSampler,textureSamplerSampler,input.vUV+onePixel*vec2f(-1,0)) +
textureSample(textureSampler,textureSamplerSampler,input.vUV+onePixel*vec2f(1,0)) +
textureSample(textureSampler,textureSamplerSampler,input.vUV+onePixel*vec2f(0,1)) -
color*4.0;fragmentOutputs.color=max(vec4f(color.rgb*uniforms.sharpnessAmounts.y,color.a)-(uniforms.sharpnessAmounts.x* vec4f(edgeDetection.rgb,0)),vec4f(0.));}`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const sharpenPixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=sharpen.fragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/grain.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "grainPixelShaderWGSL",
    ()=>grainPixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$helperFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/helperFunctions.js [app-client] (ecmascript)");
;
;
const name = "grainPixelShader";
const shader = `#include<helperFunctions>
varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;uniform intensity: f32;uniform animatedSeed: f32;
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,input.vUV);var seed: vec2f=input.vUV*uniforms.animatedSeed;var grain: f32=dither(seed,uniforms.intensity);var lum: f32=getLuminance(fragmentOutputs.color.rgb);var grainAmount: f32=(cos(-PI+(lum*PI*2.))+1.)/2.;fragmentOutputs.color=vec4f(fragmentOutputs.color.rgb+grain*grainAmount,fragmentOutputs.color.a);fragmentOutputs.color=vec4f(max(fragmentOutputs.color.rgb,vec3f(0.0)),fragmentOutputs.color.a);}`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const grainPixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=grain.fragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/chromaticAberration.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "chromaticAberrationPixelShaderWGSL",
    ()=>chromaticAberrationPixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
;
const name = "chromaticAberrationPixelShader";
const shader = `varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;uniform chromatic_aberration: f32;uniform radialIntensity: f32;uniform direction: vec2f;uniform centerPosition: vec2f;uniform screen_width: f32;uniform screen_height: f32;
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var centered_screen_pos: vec2f= vec2f(input.vUV.x-uniforms.centerPosition.x,input.vUV.y-uniforms.centerPosition.y);var directionOfEffect: vec2f=uniforms.direction;if(directionOfEffect.x==0. && directionOfEffect.y==0.){directionOfEffect=normalize(centered_screen_pos);}
var radius2: f32=centered_screen_pos.x*centered_screen_pos.x
+ centered_screen_pos.y*centered_screen_pos.y;var radius: f32=sqrt(radius2);var ref_indices: vec3f= vec3f(-0.3,0.0,0.3);var ref_shiftX: f32=uniforms.chromatic_aberration*pow(radius,uniforms.radialIntensity)*directionOfEffect.x/uniforms.screen_width;var ref_shiftY: f32=uniforms.chromatic_aberration*pow(radius,uniforms.radialIntensity)*directionOfEffect.y/uniforms.screen_height;var ref_coords_r: vec2f=vec2f(input.vUV.x+ref_indices.r*ref_shiftX,input.vUV.y+ref_indices.r*ref_shiftY*0.5);var ref_coords_g: vec2f=vec2f(input.vUV.x+ref_indices.g*ref_shiftX,input.vUV.y+ref_indices.g*ref_shiftY*0.5);var ref_coords_b: vec2f=vec2f(input.vUV.x+ref_indices.b*ref_shiftX,input.vUV.y+ref_indices.b*ref_shiftY*0.5);var r=textureSample(textureSampler,textureSamplerSampler,ref_coords_r);var g=textureSample(textureSampler,textureSamplerSampler,ref_coords_g);var b=textureSample(textureSampler,textureSamplerSampler,ref_coords_b);var a=clamp(r.a+g.a+b.a,0.,1.);fragmentOutputs.color=vec4f(r.r,g.g,b.b,a);}`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const chromaticAberrationPixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=chromaticAberration.fragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/depthOfFieldMerge.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "depthOfFieldMergePixelShaderWGSL",
    ()=>depthOfFieldMergePixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
;
const name = "depthOfFieldMergePixelShader";
const shader = `varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;var circleOfConfusionSamplerSampler: sampler;var circleOfConfusionSampler: texture_2d<f32>;var blurStep0Sampler: sampler;var blurStep0: texture_2d<f32>;
#if BLUR_LEVEL>0
var blurStep1Sampler: sampler;var blurStep1: texture_2d<f32>;
#endif
#if BLUR_LEVEL>1
var blurStep2Sampler: sampler;var blurStep2: texture_2d<f32>;
#endif
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var coc: f32=textureSampleLevel(circleOfConfusionSampler,circleOfConfusionSamplerSampler,input.vUV,0.0).r;
#if BLUR_LEVEL==0
var original: vec4f=textureSampleLevel(textureSampler,textureSamplerSampler,input.vUV,0.0);var blurred0: vec4f=textureSampleLevel(blurStep0,blurStep0Sampler,input.vUV,0.0);fragmentOutputs.color=mix(original,blurred0,coc);
#endif
#if BLUR_LEVEL==1
if(coc<0.5){var original: vec4f=textureSampleLevel(textureSampler,textureSamplerSampler,input.vUV,0.0);var blurred1: vec4f=textureSampleLevel(blurStep1,blurStep1Sampler,input.vUV,0.0);fragmentOutputs.color=mix(original,blurred1,coc/0.5);}else{var blurred0: vec4f=textureSampleLevel(blurStep0,blurStep0Sampler,input.vUV,0.0);var blurred1: vec4f=textureSampleLevel(blurStep1,blurStep1Sampler,input.vUV,0.0);fragmentOutputs.color=mix(blurred1,blurred0,(coc-0.5)/0.5);}
#endif
#if BLUR_LEVEL==2
if(coc<0.33){var original: vec4f=textureSampleLevel(textureSampler,textureSamplerSampler,input.vUV,0.0);var blurred2: vec4f=textureSampleLevel(blurStep2,blurStep2Sampler,input.vUV,0.0);fragmentOutputs.color=mix(original,blurred2,coc/0.33);}else if(coc<0.66){var blurred1: vec4f=textureSampleLevel(blurStep1,blurStep1Sampler,input.vUV,0.0);var blurred2: vec4f=textureSampleLevel(blurStep2,blurStep2Sampler,input.vUV,0.0);fragmentOutputs.color=mix(blurred2,blurred1,(coc-0.33)/0.33);}else{var blurred0: vec4f=textureSampleLevel(blurStep0,blurStep0Sampler,input.vUV,0.0);var blurred1: vec4f=textureSampleLevel(blurStep1,blurStep1Sampler,input.vUV,0.0);fragmentOutputs.color=mix(blurred1,blurred0,(coc-0.66)/0.34);}
#endif
}
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const depthOfFieldMergePixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=depthOfFieldMerge.fragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/circleOfConfusion.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "circleOfConfusionPixelShaderWGSL",
    ()=>circleOfConfusionPixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
;
const name = "circleOfConfusionPixelShader";
const shader = `varying vUV: vec2f;var depthSamplerSampler: sampler;var depthSampler: texture_2d<f32>;
#ifndef COC_DEPTH_NOT_NORMALIZED
uniform cameraMinMaxZ: vec2f;
#endif
uniform focusDistance: f32;uniform cocPrecalculation: f32;
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var depth: f32=textureSample(depthSampler,depthSamplerSampler,input.vUV).r;
#define CUSTOM_COC_DEPTH
#ifdef COC_DEPTH_NOT_NORMALIZED
let pixelDistance=depth*1000.0;
#else
let pixelDistance: f32=(uniforms.cameraMinMaxZ.x+uniforms.cameraMinMaxZ.y*depth)*1000.0; 
#endif
#define CUSTOM_COC_PIXELDISTANCE
var coc: f32=abs(uniforms.cocPrecalculation*((uniforms.focusDistance-pixelDistance)/pixelDistance));coc=clamp(coc,0.0,1.0);fragmentOutputs.color= vec4f(coc,coc,coc,1.0);}
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const circleOfConfusionPixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=circleOfConfusion.fragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/bloomMerge.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "bloomMergePixelShaderWGSL",
    ()=>bloomMergePixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
;
const name = "bloomMergePixelShader";
const shader = `varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;var bloomBlurSampler: sampler;var bloomBlur: texture_2d<f32>;uniform bloomWeight: f32;
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,input.vUV);var blurred: vec3f=textureSample(bloomBlur,bloomBlurSampler,input.vUV).rgb;fragmentOutputs.color=vec4f(fragmentOutputs.color.rgb+(blurred.rgb*uniforms.bloomWeight),fragmentOutputs.color.a);}
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const bloomMergePixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=bloomMerge.fragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/extractHighlights.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "extractHighlightsPixelShaderWGSL",
    ()=>extractHighlightsPixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$helperFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/helperFunctions.js [app-client] (ecmascript)");
;
;
const name = "extractHighlightsPixelShader";
const shader = `#include<helperFunctions>
varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;uniform threshold: f32;uniform exposure: f32;
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,input.vUV);var luma: f32=dot(LuminanceEncodeApprox,fragmentOutputs.color.rgb*uniforms.exposure);fragmentOutputs.color=vec4f(step(uniforms.threshold,luma)*fragmentOutputs.color.rgb,fragmentOutputs.color.a);}`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const extractHighlightsPixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=extractHighlights.fragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/fxaa.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "fxaaPixelShaderWGSL",
    ()=>fxaaPixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
;
const name = "fxaaPixelShader";
const shader = `varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;uniform texelSize: vec2f;varying sampleCoordS: vec2f;varying sampleCoordE: vec2f;varying sampleCoordN: vec2f;varying sampleCoordW: vec2f;varying sampleCoordNW: vec2f;varying sampleCoordSE: vec2f;varying sampleCoordNE: vec2f;varying sampleCoordSW: vec2f;const fxaaQualitySubpix: f32=1.0;const fxaaQualityEdgeThreshold: f32=0.166;const fxaaQualityEdgeThresholdMin: f32=0.0833;const kLumaCoefficients: vec3f= vec3f(0.2126,0.7152,0.0722);fn FxaaLuma(rgba: vec4f)->f32 {return dot(rgba.rgb,kLumaCoefficients);} 
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var posM: vec2f;posM.x=input.vUV.x;posM.y=input.vUV.y;var rgbyM: vec4f=textureSampleLevel(textureSampler,textureSamplerSampler,input.vUV,0.0);var lumaM: f32=FxaaLuma(rgbyM);var lumaS: f32=FxaaLuma(textureSampleLevel(textureSampler,textureSamplerSampler,input.sampleCoordS,0.0));var lumaE: f32=FxaaLuma(textureSampleLevel(textureSampler,textureSamplerSampler,input.sampleCoordE,0.0));var lumaN: f32=FxaaLuma(textureSampleLevel(textureSampler,textureSamplerSampler,input.sampleCoordN,0.0));var lumaW: f32=FxaaLuma(textureSampleLevel(textureSampler,textureSamplerSampler,input.sampleCoordW,0.0));var maxSM: f32=max(lumaS,lumaM);var minSM: f32=min(lumaS,lumaM);var maxESM: f32=max(lumaE,maxSM);var minESM: f32=min(lumaE,minSM);var maxWN: f32=max(lumaN,lumaW);var minWN: f32=min(lumaN,lumaW);var rangeMax: f32=max(maxWN,maxESM);var rangeMin: f32=min(minWN,minESM);var rangeMaxScaled: f32=rangeMax*fxaaQualityEdgeThreshold;var range: f32=rangeMax-rangeMin;var rangeMaxClamped: f32=max(fxaaQualityEdgeThresholdMin,rangeMaxScaled);
#ifndef MALI
if(range<rangeMaxClamped) 
{fragmentOutputs.color=rgbyM;return fragmentOutputs;}
#endif
var lumaNW: f32=FxaaLuma(textureSampleLevel(textureSampler,textureSamplerSampler,input.sampleCoordNW,0.0));var lumaSE: f32=FxaaLuma(textureSampleLevel(textureSampler,textureSamplerSampler,input.sampleCoordSE,0.0));var lumaNE: f32=FxaaLuma(textureSampleLevel(textureSampler,textureSamplerSampler,input.sampleCoordNE,0.0));var lumaSW: f32=FxaaLuma(textureSampleLevel(textureSampler,textureSamplerSampler,input.sampleCoordSW,0.0));var lumaNS: f32=lumaN+lumaS;var lumaWE: f32=lumaW+lumaE;var subpixRcpRange: f32=1.0/range;var subpixNSWE: f32=lumaNS+lumaWE;var edgeHorz1: f32=(-2.0*lumaM)+lumaNS;var edgeVert1: f32=(-2.0*lumaM)+lumaWE;var lumaNESE: f32=lumaNE+lumaSE;var lumaNWNE: f32=lumaNW+lumaNE;var edgeHorz2: f32=(-2.0*lumaE)+lumaNESE;var edgeVert2: f32=(-2.0*lumaN)+lumaNWNE;var lumaNWSW: f32=lumaNW+lumaSW;var lumaSWSE: f32=lumaSW+lumaSE;var edgeHorz4: f32=(abs(edgeHorz1)*2.0)+abs(edgeHorz2);var edgeVert4: f32=(abs(edgeVert1)*2.0)+abs(edgeVert2);var edgeHorz3: f32=(-2.0*lumaW)+lumaNWSW;var edgeVert3: f32=(-2.0*lumaS)+lumaSWSE;var edgeHorz: f32=abs(edgeHorz3)+edgeHorz4;var edgeVert: f32=abs(edgeVert3)+edgeVert4;var subpixNWSWNESE: f32=lumaNWSW+lumaNESE;var lengthSign: f32=uniforms.texelSize.x;var horzSpan: bool=edgeHorz>=edgeVert;var subpixA: f32=subpixNSWE*2.0+subpixNWSWNESE;if (!horzSpan)
{lumaN=lumaW;}
if (!horzSpan) 
{lumaS=lumaE;}
if (horzSpan) 
{lengthSign=uniforms.texelSize.y;}
var subpixB: f32=(subpixA*(1.0/12.0))-lumaM;var gradientN: f32=lumaN-lumaM;var gradientS: f32=lumaS-lumaM;var lumaNN: f32=lumaN+lumaM;var lumaSS: f32=lumaS+lumaM;var pairN: bool=abs(gradientN)>=abs(gradientS);var gradient: f32=max(abs(gradientN),abs(gradientS));if (pairN)
{lengthSign=-lengthSign;}
var subpixC: f32=clamp(abs(subpixB)*subpixRcpRange,0.0,1.0);var posB: vec2f;posB.x=posM.x;posB.y=posM.y;var offNP: vec2f;offNP.x=select(uniforms.texelSize.x,0.0,(!horzSpan));offNP.y=select(uniforms.texelSize.y,0.0,(horzSpan));if (!horzSpan) 
{posB.x+=lengthSign*0.5;}
if (horzSpan)
{posB.y+=lengthSign*0.5;}
var posN: vec2f;posN.x=posB.x-offNP.x*1.5;posN.y=posB.y-offNP.y*1.5;var posP: vec2f;posP.x=posB.x+offNP.x*1.5;posP.y=posB.y+offNP.y*1.5;var subpixD: f32=((-2.0)*subpixC)+3.0;var lumaEndN: f32=FxaaLuma(textureSampleLevel(textureSampler,textureSamplerSampler,posN,0.0));var subpixE: f32=subpixC*subpixC;var lumaEndP: f32=FxaaLuma(textureSampleLevel(textureSampler,textureSamplerSampler,posP,0.0));if (!pairN) 
{lumaNN=lumaSS;}
var gradientScaled: f32=gradient*1.0/4.0;var lumaMM: f32=lumaM-lumaNN*0.5;var subpixF: f32=subpixD*subpixE;var lumaMLTZero: bool=lumaMM<0.0;lumaEndN-=lumaNN*0.5;lumaEndP-=lumaNN*0.5;var doneN: bool=abs(lumaEndN)>=gradientScaled;var doneP: bool=abs(lumaEndP)>=gradientScaled;if (!doneN) 
{posN.x-=offNP.x*3.0;}
if (!doneN) 
{posN.y-=offNP.y*3.0;}
var doneNP: bool=(!doneN) || (!doneP);if (!doneP) 
{posP.x+=offNP.x*3.0;}
if (!doneP)
{posP.y+=offNP.y*3.0;}
if (doneNP)
{if (!doneN) {lumaEndN=FxaaLuma(textureSampleLevel(textureSampler,textureSamplerSampler,posN.xy,0.0));}
if (!doneP) {lumaEndP=FxaaLuma(textureSampleLevel(textureSampler,textureSamplerSampler,posP.xy,0.0));}
if (!doneN) {lumaEndN=lumaEndN-lumaNN*0.5;}
if (!doneP) {lumaEndP=lumaEndP-lumaNN*0.5;}
doneN=abs(lumaEndN)>=gradientScaled;doneP=abs(lumaEndP)>=gradientScaled;if (!doneN) {posN.x-=offNP.x*12.0;}
if (!doneN) {posN.y-=offNP.y*12.0;}
doneNP=(!doneN) || (!doneP);if (!doneP) {posP.x+=offNP.x*12.0;}
if (!doneP) {posP.y+=offNP.y*12.0;}}
var dstN: f32=posM.x-posN.x;var dstP: f32=posP.x-posM.x;if (!horzSpan)
{dstN=posM.y-posN.y;}
if (!horzSpan) 
{dstP=posP.y-posM.y;}
var goodSpanN: bool=(lumaEndN<0.0) != lumaMLTZero;var spanLength: f32=(dstP+dstN);var goodSpanP: bool=(lumaEndP<0.0) != lumaMLTZero;var spanLengthRcp: f32=1.0/spanLength;var directionN: bool=dstN<dstP;var dst: f32=min(dstN,dstP);var goodSpan: bool=select(goodSpanP,goodSpanN,directionN);var subpixG: f32=subpixF*subpixF;var pixelOffset: f32=(dst*(-spanLengthRcp))+0.5;var subpixH: f32=subpixG*fxaaQualitySubpix;var pixelOffsetGood: f32=select(0.0,pixelOffset,goodSpan);var pixelOffsetSubpix: f32=max(pixelOffsetGood,subpixH);if (!horzSpan)
{posM.x+=pixelOffsetSubpix*lengthSign;}
if (horzSpan)
{posM.y+=pixelOffsetSubpix*lengthSign;}
#ifdef MALI
if(range<rangeMaxClamped) 
{fragmentOutputs.color=rgbyM;}
else
{fragmentOutputs.color=textureSampleLevel(textureSampler,textureSamplerSampler,posM,0.0);}
#else
fragmentOutputs.color=textureSampleLevel(textureSampler,textureSamplerSampler,posM,0.0);
#endif
}`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const fxaaPixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=fxaa.fragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/fxaa.vertex.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "fxaaVertexShaderWGSL",
    ()=>fxaaVertexShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
;
const name = "fxaaVertexShader";
const shader = `attribute position: vec2f;uniform texelSize: vec2f;varying vUV: vec2f;varying sampleCoordS: vec2f;varying sampleCoordE: vec2f;varying sampleCoordN: vec2f;varying sampleCoordW: vec2f;varying sampleCoordNW: vec2f;varying sampleCoordSE: vec2f;varying sampleCoordNE: vec2f;varying sampleCoordSW: vec2f;const madd: vec2f= vec2f(0.5,0.5);
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {
#define CUSTOM_VERTEX_MAIN_BEGIN
vertexOutputs.vUV=(input.position*madd+madd);vertexOutputs.sampleCoordS=vertexOutputs.vUV+ vec2f( 0.0,1.0)*uniforms.texelSize;vertexOutputs.sampleCoordE=vertexOutputs.vUV+ vec2f( 1.0,0.0)*uniforms.texelSize;vertexOutputs.sampleCoordN=vertexOutputs.vUV+ vec2f( 0.0,-1.0)*uniforms.texelSize;vertexOutputs.sampleCoordW=vertexOutputs.vUV+ vec2f(-1.0,0.0)*uniforms.texelSize;vertexOutputs.sampleCoordNW=vertexOutputs.vUV+ vec2f(-1.0,-1.0)*uniforms.texelSize;vertexOutputs.sampleCoordSE=vertexOutputs.vUV+ vec2f( 1.0,1.0)*uniforms.texelSize;vertexOutputs.sampleCoordNE=vertexOutputs.vUV+ vec2f( 1.0,-1.0)*uniforms.texelSize;vertexOutputs.sampleCoordSW=vertexOutputs.vUV+ vec2f(-1.0,1.0)*uniforms.texelSize;vertexOutputs.position=vec4f(input.position,0.0,1.0);
#define CUSTOM_VERTEX_MAIN_END
}`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const fxaaVertexShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=fxaa.vertex.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/blackAndWhite.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "blackAndWhitePixelShaderWGSL",
    ()=>blackAndWhitePixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
;
const name = "blackAndWhitePixelShader";
const shader = `varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;uniform degree: f32;
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var color: vec3f=textureSample(textureSampler,textureSamplerSampler,input.vUV).rgb;var luminance: f32=dot(color, vec3f(0.3,0.59,0.11)); 
var blackAndWhite: vec3f= vec3f(luminance,luminance,luminance);fragmentOutputs.color= vec4f(color-((color-blackAndWhite)*uniforms.degree),1.0);}`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const blackAndWhitePixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=blackAndWhite.fragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/anaglyph.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "anaglyphPixelShaderWGSL",
    ()=>anaglyphPixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
;
const name = "anaglyphPixelShader";
const shader = `varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;var leftSamplerSampler: sampler;var leftSampler: texture_2d<f32>;
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var leftFrag: vec4f=textureSample(leftSampler,leftSamplerSampler,input.vUV);leftFrag= vec4f(1.0,leftFrag.g,leftFrag.b,1.0);var rightFrag: vec4f=textureSample(textureSampler,textureSamplerSampler,input.vUV);rightFrag= vec4f(rightFrag.r,1.0,1.0,1.0);fragmentOutputs.color= vec4f(rightFrag.rgb*leftFrag.rgb,1.0);}`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const anaglyphPixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=anaglyph.fragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/convolution.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "convolutionPixelShaderWGSL",
    ()=>convolutionPixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
;
const name = "convolutionPixelShader";
const shader = `varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;uniform screenSize: vec2f;uniform kernel: array<f32,9>;
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var onePixel: vec2f= vec2f(1.0,1.0)/uniforms.screenSize;var colorSum: vec4f =
textureSample(textureSampler,textureSamplerSampler,input.vUV+onePixel* vec2f(-1,-1))*uniforms.kernel[0] +
textureSample(textureSampler,textureSamplerSampler,input.vUV+onePixel* vec2f(0,-1))*uniforms.kernel[1] +
textureSample(textureSampler,textureSamplerSampler,input.vUV+onePixel* vec2f(1,-1))*uniforms.kernel[2] +
textureSample(textureSampler,textureSamplerSampler,input.vUV+onePixel* vec2f(-1,0))*uniforms.kernel[3] +
textureSample(textureSampler,textureSamplerSampler,input.vUV+onePixel* vec2f(0,0))*uniforms.kernel[4] +
textureSample(textureSampler,textureSamplerSampler,input.vUV+onePixel* vec2f(1,0))*uniforms.kernel[5] +
textureSample(textureSampler,textureSamplerSampler,input.vUV+onePixel* vec2f(-1,1))*uniforms.kernel[6] +
textureSample(textureSampler,textureSamplerSampler,input.vUV+onePixel* vec2f(0,1))*uniforms.kernel[7] +
textureSample(textureSampler,textureSamplerSampler,input.vUV+onePixel* vec2f(1,1))*uniforms.kernel[8];var kernelWeight: f32 =
uniforms.kernel[0] +
uniforms.kernel[1] +
uniforms.kernel[2] +
uniforms.kernel[3] +
uniforms.kernel[4] +
uniforms.kernel[5] +
uniforms.kernel[6] +
uniforms.kernel[7] +
uniforms.kernel[8];if (kernelWeight<=0.0) {kernelWeight=1.0;}
fragmentOutputs.color= vec4f((colorSum/kernelWeight).rgb,1);}`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const convolutionPixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=convolution.fragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/colorCorrection.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "colorCorrectionPixelShaderWGSL",
    ()=>colorCorrectionPixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
;
const name = "colorCorrectionPixelShader";
const shader = `varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;varying vUV: vec2f;var colorTableSampler: sampler;var colorTable: texture_2d<f32>;const SLICE_COUNT: f32=16.0; 
fn sampleAs3DTexture(uv: vec3f,width: f32)->vec4f {var sliceSize: f32=1.0/width; 
var slicePixelSize: f32=sliceSize/width; 
var sliceInnerSize: f32=slicePixelSize*(width-1.0); 
var zSlice0: f32=min(floor(uv.z*width),width-1.0);var zSlice1: f32=min(zSlice0+1.0,width-1.0);var xOffset: f32=slicePixelSize*0.5+uv.x*sliceInnerSize;var s0: f32=xOffset+(zSlice0*sliceSize);var s1: f32=xOffset+(zSlice1*sliceSize);var slice0Color: vec4f=textureSample(colorTable,colorTableSampler,vec2f(s0,uv.y));var slice1Color: vec4f=textureSample(colorTable,colorTableSampler,vec2f(s1,uv.y));var zOffset: f32=((uv.z*width)%(1.0));return mix(slice0Color,slice1Color,zOffset);}
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var screen_color: vec4f=textureSample(textureSampler,textureSamplerSampler,input.vUV);fragmentOutputs.color=sampleAs3DTexture(screen_color.rgb,SLICE_COUNT);}`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const colorCorrectionPixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=colorCorrection.fragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/motionBlur.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "motionBlurPixelShaderWGSL",
    ()=>motionBlurPixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
;
const name = "motionBlurPixelShader";
const shader = `varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;uniform motionStrength: f32;uniform motionScale: f32;uniform screenSize: vec2f;
#ifdef OBJECT_BASED
var velocitySamplerSampler: sampler;var velocitySampler: texture_2d<f32>;
#else
var depthSamplerSampler: sampler;var depthSampler: texture_2d<f32>;uniform inverseViewProjection: mat4x4f;uniform prevViewProjection: mat4x4f;uniform projection: mat4x4f;
#endif
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#ifdef GEOMETRY_SUPPORTED
#ifdef OBJECT_BASED
var texelSize: vec2f=1.0/uniforms.screenSize;var velocityColor: vec4f=textureSampleLevel(velocitySampler,velocitySamplerSampler,input.vUV,0.0);velocityColor=vec4f(velocityColor.rg*2.0- vec2f(1.0),velocityColor.b,velocityColor.a);let signs=sign(velocityColor.rg);var velocity=pow(abs(velocityColor.rg),vec2f(3.0))*signs*velocityColor.a;velocity*=uniforms.motionScale*uniforms.motionStrength;var speed: f32=length(velocity/texelSize);var samplesCount: i32= i32(clamp(speed,1.0,SAMPLES));velocity=normalize(velocity)*texelSize;var hlim: f32= f32(-samplesCount)*0.5+0.5;var result: vec4f=textureSampleLevel(textureSampler,textureSamplerSampler, input.vUV,0.0);for (var i: i32=1; i< i32(SAMPLES); i++)
{if (i>=samplesCount) {break;}
var offset: vec2f=input.vUV+velocity*(hlim+ f32(i));result+=textureSampleLevel(textureSampler,textureSamplerSampler, offset,0.0);}
fragmentOutputs.color=vec4f(result.rgb/ f32(samplesCount),1.0);
#else
var result: vec4f=textureSampleLevel(textureSampler,textureSamplerSampler, input.vUV,0.0);var texelSize: vec2f=1.0/uniforms.screenSize;var depth: f32=textureSampleLevel(depthSampler,depthSamplerSampler,input.vUV,0.0).r;if (depth==0.0) {fragmentOutputs.color=result;return fragmentOutputs;}
depth=uniforms.projection[2].z+uniforms.projection[3].z/depth; 
var cpos: vec4f= vec4f(input.vUV*2.0-1.0,depth,1.0);cpos=uniforms.inverseViewProjection*cpos;cpos/=cpos.w;var ppos: vec4f=uniforms.prevViewProjection*cpos;ppos/=ppos.w;ppos=vec4f(ppos.xy*0.5+0.5,ppos.zw);var velocity: vec2f=(ppos.xy-input.vUV)*uniforms.motionScale*uniforms.motionStrength;var speed: f32=length(velocity/texelSize);var nSamples: i32= i32(clamp(speed,1.0,SAMPLES));for (var i: i32=1; i< i32(SAMPLES); i++) {if (i>=nSamples) {break;}
var offset1: vec2f=input.vUV+velocity*( f32(i)/ f32(nSamples-1)-0.5);result+=textureSampleLevel(textureSampler,textureSamplerSampler, offset1,0.0);}
fragmentOutputs.color=result/ f32(nSamples);
#endif
#else
fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler, input.vUV);
#endif
}
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const motionBlurPixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=motionBlur.fragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/filter.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "filterPixelShaderWGSL",
    ()=>filterPixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
;
const name = "filterPixelShader";
const shader = `varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;uniform kernelMatrix: mat4x4f;
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var baseColor: vec3f=textureSample(textureSampler,textureSamplerSampler,input.vUV).rgb;var updatedColor: vec3f=(uniforms.kernelMatrix* vec4f(baseColor,1.0)).rgb;fragmentOutputs.color= vec4f(updatedColor,1.0);}`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const filterPixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=filter.fragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/highlights.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "highlightsPixelShaderWGSL",
    ()=>highlightsPixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
;
const name = "highlightsPixelShader";
const shader = `varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;const RGBLuminanceCoefficients: vec3f= vec3f(0.2126,0.7152,0.0722);
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var tex: vec4f=textureSample(textureSampler,textureSamplerSampler,input.vUV);var c: vec3f=tex.rgb;var luma: f32=dot(c.rgb,RGBLuminanceCoefficients);fragmentOutputs.color= vec4f(pow(c, vec3f(25.0-luma*15.0)),tex.a); }`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const highlightsPixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=highlights.fragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/displayPass.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "displayPassPixelShaderWGSL",
    ()=>displayPassPixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
;
const name = "displayPassPixelShader";
const shader = `varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;var passSamplerSampler: sampler;var passSampler: texture_2d<f32>;
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureSample(passSampler,passSamplerSampler,input.vUV);}`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const displayPassPixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=displayPass.fragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/tonemap.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "tonemapPixelShaderWGSL",
    ()=>tonemapPixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
;
const name = "tonemapPixelShader";
const shader = `varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;uniform _ExposureAdjustment: f32;
#if defined(HABLE_TONEMAPPING)
const A: f32=0.15;const B: f32=0.50;const C: f32=0.10;const D: f32=0.20;const E: f32=0.02;const F: f32=0.30;const W: f32=11.2;
#endif
fn Luminance(c: vec3f)->f32
{return dot(c, vec3f(0.22,0.707,0.071));}
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var colour: vec3f=textureSample(textureSampler,textureSamplerSampler,input.vUV).rgb;
#if defined(REINHARD_TONEMAPPING)
var lum: f32=Luminance(colour.rgb); 
var lumTm: f32=lum*uniforms._ExposureAdjustment;var scale: f32=lumTm/(1.0+lumTm); 
colour*=scale/lum;
#elif defined(HABLE_TONEMAPPING)
colour*=uniforms._ExposureAdjustment;const ExposureBias: f32=2.0;var x: vec3f=ExposureBias*colour;var curr: vec3f=((x*(A*x+C*B)+D*E)/(x*(A*x+B)+D*F))-E/F;x= vec3f(W,W,W);var whiteScale: vec3f=1.0/(((x*(A*x+C*B)+D*E)/(x*(A*x+B)+D*F))-E/F);colour=curr*whiteScale;
#elif defined(OPTIMIZED_HEJIDAWSON_TONEMAPPING)
colour*=uniforms._ExposureAdjustment;var X: vec3f=max( vec3f(0.0,0.0,0.0),colour-0.004);var retColor: vec3f=(X*(6.2*X+0.5))/(X*(6.2*X+1.7)+0.06);colour=retColor*retColor;
#elif defined(PHOTOGRAPHIC_TONEMAPPING)
colour= vec3f(1.0,1.0,1.0)-exp2(-uniforms._ExposureAdjustment*colour);
#endif
fragmentOutputs.color= vec4f(colour.rgb,1.0);}`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const tonemapPixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=tonemap.fragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/subSurfaceScattering.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "subSurfaceScatteringPixelShaderWGSL",
    ()=>subSurfaceScatteringPixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$helperFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/helperFunctions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$fibonacci$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/fibonacci.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$subSurfaceScatteringFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/subSurfaceScatteringFunctions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$diffusionProfile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/diffusionProfile.js [app-client] (ecmascript)");
;
;
;
;
;
const name = "subSurfaceScatteringPixelShader";
const shader = `#include<helperFunctions>
#include<fibonacci>
#include<subSurfaceScatteringFunctions>
#include<diffusionProfile>
varying vUV: vec2f;uniform texelSize: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;var irradianceSamplerSampler: sampler;var irradianceSampler: texture_2d<f32>;var depthSamplerSampler: sampler;var depthSampler: texture_2d<f32>;var albedoSamplerSampler: sampler;var albedoSampler: texture_2d<f32>;uniform viewportSize: vec2f;uniform metersPerUnit: f32;const LOG2_E=1.4426950408889634;const SSS_PIXELS_PER_SAMPLE=4.;const _SssSampleBudget=40u;
#define SSS_BILATERAL_FILTER true
fn EvalBurleyDiffusionProfile(r: f32,S: vec3f)->vec3f
{let exp_13=exp2(((LOG2_E*(-1.0/3.0))*r)*S); 
let expSum=exp_13*(1.+exp_13*exp_13); 
return (S*rcp(8.*PI))*expSum; }
fn SampleBurleyDiffusionProfile(u_: f32,rcpS: f32)->vec2f
{let u=1.-u_; 
let g=1.+(4.*u)*(2.*u+sqrt(1.+(4.*u)*u));let n=exp2(log2(g)*(-1.0/3.0)); 
let p=(g*n)*n; 
let c=1.+p+n; 
let d=(3./LOG2_E*2.)+(3./LOG2_E)*log2(u); 
let x=(3./LOG2_E)*log2(c)-d; 
let rcpExp=((c*c)*c)*rcp((4.*u)*((c*c)+(4.*u)*(4.*u)));let r=x*rcpS;let rcpPdf=(8.*PI*rcpS)*rcpExp; 
return vec2f(r,rcpPdf);}
fn ComputeBilateralWeight(xy2: f32,z_: f32,mmPerUnit: f32,S: vec3f,rcpPdf: f32)->vec3f
{
#ifndef SSS_BILATERAL_FILTER
let z=0.;
#else
let z=z_;
#endif
let r=sqrt(xy2+(z*mmPerUnit)*(z*mmPerUnit));let area=rcpPdf;
#ifdef SSS_CLAMP_ARTIFACT
return clamp(EvalBurleyDiffusionProfile(r,S)*area,vec3f(0.0),vec3f(1.0));
#else
return EvalBurleyDiffusionProfile(r,S)*area;
#endif
}
fn EvaluateSample(i: u32,n: u32,S: vec3f,d: f32,centerPosVS: vec3f,mmPerUnit: f32,pixelsPerMm: f32,
phase: f32,totalIrradiance: ptr<function,vec3f>,totalWeight: ptr<function,vec3f>)
{let scale =rcp(f32(n));let offset=rcp(f32(n))*0.5;let sinPhase=sin(phase);let cosPhase=cos(phase);let bdp=SampleBurleyDiffusionProfile(f32(i)*scale+offset,d);let r=bdp.x;let rcpPdf=bdp.y;let phi=SampleDiskGolden(i,n).y;let sinPhi=sin(phi);let cosPhi=cos(phi);let sinPsi=cosPhase*sinPhi+sinPhase*cosPhi; 
let cosPsi=cosPhase*cosPhi-sinPhase*sinPhi; 
let vec=r*vec2f(cosPsi,sinPsi);let position=fragmentInputs.vUV+round((pixelsPerMm*r)*vec2(cosPsi,sinPsi))*uniforms.texelSize;let xy2 =r*r;let textureRead=textureSampleLevel(irradianceSampler,irradianceSamplerSampler,position,0.);let viewZ=textureSampleLevel(depthSampler,depthSamplerSampler,position,0.).r;let irradiance =textureRead.rgb;if (testLightingForSSS(textureRead.a))
{let relZ=viewZ-centerPosVS.z;let weight=ComputeBilateralWeight(xy2,relZ,mmPerUnit,S,rcpPdf);*totalIrradiance+=weight*irradiance;*totalWeight +=weight;}
else
{}}
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {let irradianceAndDiffusionProfile =textureSampleLevel(irradianceSampler,irradianceSamplerSampler,fragmentInputs.vUV,0.);let centerIrradiance=irradianceAndDiffusionProfile.rgb;let diffusionProfileIndex=u32(round(irradianceAndDiffusionProfile.a*255.));var centerDepth =0.;let inputColor=textureSampleLevel(textureSampler,textureSamplerSampler,fragmentInputs.vUV,0.);let passedStencilTest=testLightingForSSS(irradianceAndDiffusionProfile.a);if (passedStencilTest)
{centerDepth=textureSampleLevel(depthSampler,depthSamplerSampler,fragmentInputs.vUV,0.).r;}
if (!passedStencilTest) { 
fragmentOutputs.color=inputColor;return fragmentOutputs;}
let distScale =1.;let S =uniforms.diffusionS[diffusionProfileIndex];let d =uniforms.diffusionD[diffusionProfileIndex];let filterRadius=uniforms.filterRadii[diffusionProfileIndex];let centerPosNDC=fragmentInputs.vUV;let cornerPosNDC=fragmentInputs.vUV+0.5*uniforms.texelSize;let centerPosVS =vec3f(centerPosNDC*uniforms.viewportSize,1.0)*centerDepth; 
let cornerPosVS =vec3f(cornerPosNDC*uniforms.viewportSize,1.0)*centerDepth; 
let mmPerUnit =1000.*(uniforms.metersPerUnit*rcp(distScale));let unitsPerMm=rcp(mmPerUnit);let unitsPerPixel=2.*abs(cornerPosVS.x-centerPosVS.x);let pixelsPerMm =rcp(unitsPerPixel)*unitsPerMm;let filterArea =PI*square(filterRadius*pixelsPerMm);let sampleCount =u32(filterArea*rcp(SSS_PIXELS_PER_SAMPLE));let sampleBudget=_SssSampleBudget;let albedo =textureSampleLevel(albedoSampler,albedoSamplerSampler,fragmentInputs.vUV,0.).rgb;if (distScale==0. || sampleCount<1)
{
#ifdef DEBUG_SSS_SAMPLES
let green=vec3f(0.,1.,0.);fragmentOutputs.color=vec4f(green,1.0);return fragmentOutputs;
#endif
fragmentOutputs.color=vec4f(inputColor.rgb+albedo*centerIrradiance,1.0);return fragmentOutputs;}
#ifdef DEBUG_SSS_SAMPLES
let red =vec3f(1.,0.,0.);let blue=vec3f(0.,0.,1.);fragmentOutputs.color=vec4f(mix(blue,red,clamp(f32(sampleCount)/f32(sampleBudget),0.0,1.0)),1.0);return fragmentOutputs;
#endif
let phase=0.;let n=min(sampleCount,sampleBudget);var totalIrradiance=vec3f(0.);var totalWeight =vec3f(0.);for (var i=0u; i<n; i++)
{EvaluateSample(i,n,S,d,centerPosVS,mmPerUnit,pixelsPerMm,
phase,&totalIrradiance,&totalWeight);}
totalWeight=max(totalWeight,vec3f(HALF_MIN));fragmentOutputs.color=vec4f(inputColor.rgb+albedo*max(totalIrradiance/totalWeight,vec3f(0.0)),1.);}
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const subSurfaceScatteringPixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=subSurfaceScattering.fragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/fluidRenderingParticleDepth.vertex.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "fluidRenderingParticleDepthVertexShaderWGSL",
    ()=>fluidRenderingParticleDepthVertexShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
;
const name = "fluidRenderingParticleDepthVertexShader";
const shader = `attribute position: vec3f;attribute offset: vec2f;uniform view: mat4x4f;uniform projection: mat4x4f;uniform size: vec2f;varying uv: vec2f;varying viewPos: vec3f;varying sphereRadius: f32;
#ifdef FLUIDRENDERING_VELOCITY
attribute velocity: vec3f;varying velocityNorm: f32;
#endif
@vertex
fn main(input: VertexInputs)->FragmentInputs {var cornerPos: vec3f=vec3f(
vec2f(input.offset.x-0.5,input.offset.y-0.5)*uniforms.size,
0.0
);vertexOutputs.viewPos=(uniforms.view*vec4f(input.position,1.0)).xyz;vertexOutputs.position=uniforms.projection*vec4f(vertexOutputs.viewPos+cornerPos,1.0);vertexOutputs.uv=input.offset;vertexOutputs.sphereRadius=uniforms.size.x/2.0;
#ifdef FLUIDRENDERING_VELOCITY
vertexOutputs.velocityNorm=length(velocity);
#endif
}
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const fluidRenderingParticleDepthVertexShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=fluidRenderingParticleDepth.vertex.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/fluidRenderingParticleDepth.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "fluidRenderingParticleDepthPixelShaderWGSL",
    ()=>fluidRenderingParticleDepthPixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
;
const name = "fluidRenderingParticleDepthPixelShader";
const shader = `uniform projection: mat4x4f;varying uv: vec2f;varying viewPos: vec3f;varying sphereRadius: f32;
#ifdef FLUIDRENDERING_VELOCITY
varying velocityNorm: f32;
#endif
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var normalxy: vec2f=input.uv*2.0-1.0;var r2: f32=dot(normalxy,normalxy);if (r2>1.0) {discard;}
var normal: vec3f=vec3f(normalxy,sqrt(1.0-r2));
#ifndef FLUIDRENDERING_RHS
normal.z=-normal.z;
#endif
var realViewPos: vec4f=vec4f(input.viewPos+normal*input.sphereRadius,1.0);var clipSpacePos: vec4f=uniforms.projection*realViewPos;fragmentOutputs.fragDepth=clipSpacePos.z/clipSpacePos.w;
#ifdef FLUIDRENDERING_RHS
realViewPos.z=-realViewPos.z;
#endif
#ifdef FLUIDRENDERING_VELOCITY
fragmentOutputs.color=vec4f(realViewPos.z,input.velocityNorm,0.,1.);
#else
fragmentOutputs.color=vec4f(realViewPos.z,0.,0.,1.);
#endif
}
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const fluidRenderingParticleDepthPixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=fluidRenderingParticleDepth.fragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/fluidRenderingParticleThickness.vertex.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "fluidRenderingParticleThicknessVertexShaderWGSL",
    ()=>fluidRenderingParticleThicknessVertexShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
;
const name = "fluidRenderingParticleThicknessVertexShader";
const shader = `attribute position: vec3f;attribute offset: vec2f;uniform view: mat4x4f;uniform projection: mat4x4f;uniform size: vec2f;varying uv: vec2f;@vertex
fn main(input: VertexInputs)->FragmentInputs {var cornerPos: vec3f=vec3f(
vec2f(input.offset.x-0.5,input.offset.y-0.5)*uniforms.size,
0.0
);var viewPos: vec3f=(uniforms.view*vec4f(input.position,1.0)).xyz+cornerPos;vertexOutputs.position=uniforms.projection*vec4f(viewPos,1.0);vertexOutputs.uv=input.offset;}
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const fluidRenderingParticleThicknessVertexShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=fluidRenderingParticleThickness.vertex.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/fluidRenderingParticleThickness.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "fluidRenderingParticleThicknessPixelShaderWGSL",
    ()=>fluidRenderingParticleThicknessPixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
;
const name = "fluidRenderingParticleThicknessPixelShader";
const shader = `uniform particleAlpha: f32;varying uv: vec2f;@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var normalxy: vec2f=input.uv*2.0-1.0;var r2: f32=dot(normalxy,normalxy);if (r2>1.0) {discard;}
var thickness: f32=sqrt(1.0-r2);fragmentOutputs.color=vec4f(vec3f(uniforms.particleAlpha*thickness),1.0);}
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const fluidRenderingParticleThicknessPixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=fluidRenderingParticleThickness.fragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/fluidRenderingParticleDiffuse.vertex.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "fluidRenderingParticleDiffuseVertexShaderWGSL",
    ()=>fluidRenderingParticleDiffuseVertexShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
;
const name = "fluidRenderingParticleDiffuseVertexShader";
const shader = `attribute position: vec3f;attribute offset: vec2f;attribute color: vec4f;uniform view: mat4x4f;uniform projection: mat4x4f;uniform size: vec2f;varying uv: vec2f;varying diffuseColor: vec3f;@vertex
fn main(input: VertexInputs)->FragmentInputs {var cornerPos: vec3f=vec3f(
vec2f(input.offset.x-0.5,input.offset.y-0.5)*uniforms.size,
0.0
);var viewPos: vec3f=(uniforms.view*vec4f(input.position,1.0)).xyz+cornerPos;vertexOutputs.position=uniforms.projection*vec4f(viewPos,1.0);vertexOutputs.uv=input.offset;vertexOutputs.diffuseColor=input.color.rgb;}
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const fluidRenderingParticleDiffuseVertexShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=fluidRenderingParticleDiffuse.vertex.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/fluidRenderingParticleDiffuse.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "fluidRenderingParticleDiffusePixelShaderWGSL",
    ()=>fluidRenderingParticleDiffusePixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
;
const name = "fluidRenderingParticleDiffusePixelShader";
const shader = `uniform particleAlpha: f32;varying uv: vec2f;varying diffuseColor: vec3f;@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var normalxy: vec2f=input.uv*2.0-1.0;var r2: f32=dot(normalxy,normalxy);if (r2>1.0) {discard;}
fragmentOutputs.color=vec4f(input.diffuseColor,1.0);}
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const fluidRenderingParticleDiffusePixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=fluidRenderingParticleDiffuse.fragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/fluidRenderingBilateralBlur.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "fluidRenderingBilateralBlurPixelShaderWGSL",
    ()=>fluidRenderingBilateralBlurPixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
;
const name = "fluidRenderingBilateralBlurPixelShader";
const shader = `var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;uniform maxFilterSize: i32;uniform blurDir: vec2f;uniform projectedParticleConstant: f32;uniform depthThreshold: f32;varying vUV: vec2f;@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var depth: f32=textureSampleLevel(textureSampler,textureSamplerSampler,input.vUV,0.).x;if (depth>=1e6 || depth<=0.) {fragmentOutputs.color=vec4f(vec3f(depth),1.);return fragmentOutputs;}
var filterSize: i32=min(uniforms.maxFilterSize,i32(ceil(uniforms.projectedParticleConstant/depth)));var sigma: f32=f32(filterSize)/3.0;var two_sigma2: f32=2.0*sigma*sigma;var sigmaDepth: f32=uniforms.depthThreshold/3.0;var two_sigmaDepth2: f32=2.0*sigmaDepth*sigmaDepth;var sum: f32=0.;var wsum: f32=0.;var sumVel: f32=0.;for (var x: i32=-filterSize; x<=filterSize; x++) {var coords: vec2f=vec2f(f32(x));var sampleDepthVel: vec2f=textureSampleLevel(textureSampler,textureSamplerSampler,input.vUV+coords*uniforms.blurDir,0.).rg;var r: f32=dot(coords,coords);var w: f32=exp(-r/two_sigma2);var rDepth: f32=sampleDepthVel.r-depth;var wd: f32=exp(-rDepth*rDepth/two_sigmaDepth2);sum+=sampleDepthVel.r*w*wd;sumVel+=sampleDepthVel.g*w*wd;wsum+=w*wd;}
fragmentOutputs.color=vec4f(sum/wsum,sumVel/wsum,0.,1.);}
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const fluidRenderingBilateralBlurPixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=fluidRenderingBilateralBlur.fragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/fluidRenderingStandardBlur.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "fluidRenderingStandardBlurPixelShaderWGSL",
    ()=>fluidRenderingStandardBlurPixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
;
const name = "fluidRenderingStandardBlurPixelShader";
const shader = `var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;uniform filterSize: i32;uniform blurDir: vec2f;varying vUV: vec2f;@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var s: vec4f=textureSampleLevel(textureSampler,textureSamplerSampler,input.vUV,0.);if (s.r==0.) {fragmentOutputs.color=vec4f(0.,0.,0.,1.);return fragmentOutputs;}
var sigma: f32=f32(uniforms.filterSize)/3.0;var twoSigma2: f32=2.0*sigma*sigma;var sum: vec4f=vec4f(0.);var wsum: f32=0.;for (var x: i32=-uniforms.filterSize; x<=uniforms.filterSize; x++) {var coords: vec2f=vec2f(f32(x));var sampl: vec4f=textureSampleLevel(textureSampler,textureSamplerSampler,input.vUV+coords*uniforms.blurDir,0.);var w: f32=exp(-coords.x*coords.x/twoSigma2);sum+=sampl*w;wsum+=w;}
sum/=wsum;fragmentOutputs.color=vec4f(sum.rgb,1.);}
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const fluidRenderingStandardBlurPixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=fluidRenderingStandardBlur.fragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/fluidRenderingRender.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "fluidRenderingRenderPixelShaderWGSL",
    ()=>fluidRenderingRenderPixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
;
const name = "fluidRenderingRenderPixelShader";
const shader = `#define DISABLE_UNIFORMITY_ANALYSIS
#define IOR 1.333
#define ETA 1.0/IOR
#define F0 0.02
var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;var depthSamplerSampler: sampler;var depthSampler: texture_2d<f32>;
#ifdef FLUIDRENDERING_DIFFUSETEXTURE
var diffuseSamplerSampler: sampler;var diffuseSampler: texture_2d<f32>;
#else
uniform diffuseColor: vec3f;
#endif
#ifdef FLUIDRENDERING_FIXED_THICKNESS
uniform thickness: f32;var bgDepthSamplerSampler: sampler;var bgDepthSampler: texture_2d<f32>;
#else
uniform minimumThickness: f32;var thicknessSamplerSampler: sampler;var thicknessSampler: texture_2d<f32>;
#endif
#ifdef FLUIDRENDERING_ENVIRONMENT
var reflectionSamplerSampler: sampler;var reflectionSampler: texture_cube<f32>;
#endif
#if defined(FLUIDRENDERING_DEBUG) && defined(FLUIDRENDERING_DEBUG_TEXTURE)
var debugSamplerSampler: sampler;var debugSampler: texture_2d<f32>;
#endif
uniform viewMatrix: mat4x4f;uniform projectionMatrix: mat4x4f;uniform invProjectionMatrix: mat4x4f;uniform texelSize: vec2f;uniform dirLight: vec3f;uniform cameraFar: f32;uniform density: f32;uniform refractionStrength: f32;uniform fresnelClamp: f32;uniform specularPower: f32;varying vUV: vec2f;fn computeViewPosFromUVDepth(texCoord: vec2f,depth: f32)->vec3f {var ndc: vec4f=vec4f(texCoord*2.0-1.0,0.0,1.0);
#ifdef FLUIDRENDERING_RHS
ndc.z=-uniforms.projectionMatrix[2].z+uniforms.projectionMatrix[3].z/depth;
#else
ndc.z=uniforms.projectionMatrix[2].z+uniforms.projectionMatrix[3].z/depth;
#endif
ndc.w=1.0;var eyePos: vec4f=uniforms.invProjectionMatrix*ndc;return eyePos.xyz/eyePos.w;}
fn getViewPosFromTexCoord(texCoord: vec2f)->vec3f {var depth: f32=textureSampleLevel(depthSampler,depthSamplerSampler,texCoord,0.).x;return computeViewPosFromUVDepth(texCoord,depth);}
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var texCoord: vec2f=input.vUV;
#if defined(FLUIDRENDERING_DEBUG) && defined(FLUIDRENDERING_DEBUG_TEXTURE)
var color: vec4f=textureSample(debugSampler,debugSamplerSampler,texCoord);
#ifdef FLUIDRENDERING_DEBUG_DEPTH
fragmentOutputs.color=vec4f(color.rgb/vec3f(2.0),1.);if (color.r>0.999 && color.g>0.999) {fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,texCoord);}
#else
fragmentOutputs.color=vec4f(color.rgb,1.);if (color.r<0.001 && color.g<0.001 && color.b<0.001) {fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,texCoord);}
#endif
return fragmentOutputs;
#endif
var depthVel: vec2f=textureSampleLevel(depthSampler,depthSamplerSampler,texCoord,0.).rg;var depth: f32=depthVel.r;
#ifndef FLUIDRENDERING_FIXED_THICKNESS
var thickness: f32=textureSample(thicknessSampler,thicknessSamplerSampler,texCoord).x;
#else
var thickness: f32=uniforms.thickness;var bgDepth: f32=textureSample(bgDepthSampler,bgDepthSamplerSampler,texCoord).x;var depthNonLinear: f32=uniforms.projectionMatrix[2].z+uniforms.projectionMatrix[3].z/depth;depthNonLinear=depthNonLinear*0.5+0.5;
#endif
var backColor: vec4f=textureSample(textureSampler,textureSamplerSampler,texCoord);
#ifndef FLUIDRENDERING_FIXED_THICKNESS
if (depth>=uniforms.cameraFar || depth<=0. || thickness<=uniforms.minimumThickness) {
#else
if (depth>=uniforms.cameraFar || depth<=0. || bgDepth<=depthNonLinear) {
#endif
#ifdef FLUIDRENDERING_COMPOSITE_MODE
fragmentOutputs.color=vec4f(backColor.rgb*backColor.a,backColor.a);
#else
fragmentOutputs.color=backColor;
#endif
return fragmentOutputs;}
var viewPos: vec3f=computeViewPosFromUVDepth(texCoord,depth);var ddx: vec3f=getViewPosFromTexCoord(texCoord+vec2f(uniforms.texelSize.x,0.))-viewPos;var ddy: vec3f=getViewPosFromTexCoord(texCoord+vec2f(0.,uniforms.texelSize.y))-viewPos;var ddx2: vec3f=viewPos-getViewPosFromTexCoord(texCoord+vec2f(-uniforms.texelSize.x,0.));if (abs(ddx.z)>abs(ddx2.z)) {ddx=ddx2;}
var ddy2: vec3f=viewPos-getViewPosFromTexCoord(texCoord+vec2f(0.,-uniforms.texelSize.y));if (abs(ddy.z)>abs(ddy2.z)) {ddy=ddy2;}
var normal: vec3f=normalize(cross(ddy,ddx));
#ifdef FLUIDRENDERING_RHS
normal=-normal;
#endif
#if defined(FLUIDRENDERING_DEBUG) && defined(FLUIDRENDERING_DEBUG_SHOWNORMAL)
fragmentOutputs.color=vec4f(normal*0.5+0.5,1.0);return fragmentOutputs;
#endif
var rayDir: vec3f=normalize(viewPos); 
#ifdef FLUIDRENDERING_DIFFUSETEXTURE
var diffuseColor: vec3f=textureSampleLevel(diffuseSampler,diffuseSamplerSampler,texCoord,0.0).rgb;
#else
var diffuseColor: vec3f=uniforms.diffuseColor;
#endif
var lightDir: vec3f=normalize((uniforms.viewMatrix*vec4f(-uniforms.dirLight,0.)).xyz);var H: vec3f =normalize(lightDir-rayDir);var specular: f32 =pow(max(0.0,dot(H,normal)),uniforms.specularPower);
#ifdef FLUIDRENDERING_DEBUG_DIFFUSERENDERING
var diffuse: f32 =max(0.0,dot(lightDir,normal))*1.0;fragmentOutputs.color=vec4f(vec3f(0.1) /*ambient*/+vec3f(0.42,0.50,1.00)*diffuse+vec3f(0,0,0.2)+specular,1.);return fragmentOutputs;
#endif
var refractionDir: vec3f=refract(rayDir,normal,ETA);var transmitted: vec4f=textureSampleLevel(textureSampler,textureSamplerSampler,vec2f(texCoord+refractionDir.xy*thickness*uniforms.refractionStrength),0.0);
#ifdef FLUIDRENDERING_COMPOSITE_MODE
if (transmitted.a==0.) {transmitted.a=thickness;}
#endif
var transmittance: vec3f=exp(-uniforms.density*thickness*(1.0-diffuseColor)); 
var refractionColor: vec3f=transmitted.rgb*transmittance;
#ifdef FLUIDRENDERING_ENVIRONMENT
var reflectionDir: vec3f=reflect(rayDir,normal);var reflectionColor: vec3f=(textureSample(reflectionSampler,reflectionSamplerSampler,reflectionDir).rgb);var fresnel: f32=clamp(F0+(1.0-F0)*pow(1.0-dot(normal,-rayDir),5.0),0.,uniforms.fresnelClamp);var finalColor: vec3f=mix(refractionColor,reflectionColor,fresnel)+specular;
#else
var finalColor: vec3f=refractionColor+specular;
#endif
#ifdef FLUIDRENDERING_VELOCITY
var velocity: f32=depthVel.g;finalColor=mix(finalColor,vec3f(1.0),smoothstep(0.3,1.0,velocity/6.0));
#endif
fragmentOutputs.color=vec4f(finalColor,transmitted.a);}
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const fluidRenderingRenderPixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=fluidRenderingRender.fragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/bilateralBlur.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "bilateralBlurPixelShaderWGSL",
    ()=>bilateralBlurPixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
;
const name = "bilateralBlurPixelShader";
const shader = `var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;var normalSamplerSampler: sampler;var normalSampler: texture_2d<f32>;var depthSamplerSampler: sampler;var depthSampler: texture_2d<f32>;uniform filterSize: i32;uniform blurDir: vec2f;uniform depthThreshold: f32;uniform normalThreshold: f32;varying vUV: vec2f;@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var color: vec3f=textureSampleLevel(textureSampler,textureSamplerSampler,input.vUV,0.).rgb;var depth: f32=textureSampleLevel(depthSampler,depthSamplerSampler,input.vUV,0.).x;if (depth>=1e6 || depth<=0.) {fragmentOutputs.color= vec4f(color,1.);return fragmentOutputs;}
var normal: vec3f=textureSampleLevel(normalSampler,normalSamplerSampler,input.vUV,0.).rgb;
#ifdef DECODE_NORMAL
normal=normal*2.0-1.0;
#endif
var sigma: f32= f32(uniforms.filterSize);var two_sigma2: f32=2.0*sigma*sigma;var sigmaDepth: f32=uniforms.depthThreshold;var two_sigmaDepth2: f32=2.0*sigmaDepth*sigmaDepth;var sigmaNormal: f32=uniforms.normalThreshold;var two_sigmaNormal2: f32=2.0*sigmaNormal*sigmaNormal;var sum: vec3f= vec3f(0.);var wsum: f32=0.;for (var x: i32=-uniforms.filterSize; x<=uniforms.filterSize; x++) {var coords=vec2f(f32(x));var sampleColor: vec3f=textureSampleLevel(textureSampler,textureSamplerSampler,input.vUV+coords*uniforms.blurDir,0.).rgb;var sampleDepth: f32=textureSampleLevel(depthSampler,depthSamplerSampler,input.vUV+coords*uniforms.blurDir,0.).r;var sampleNormal: vec3f=textureSampleLevel(normalSampler,normalSamplerSampler,input.vUV+coords*uniforms.blurDir,0.).rgb;
#ifdef DECODE_NORMAL
sampleNormal=sampleNormal*2.0-1.0;
#endif
var r: f32=dot(coords,coords);var w: f32=exp(-r/two_sigma2);var depthDelta: f32=abs(sampleDepth-depth);var wd: f32=step(depthDelta,uniforms.depthThreshold);var normalDelta: vec3f=abs(sampleNormal-normal);var wn: f32=step(normalDelta.x+normalDelta.y+normalDelta.z,uniforms.normalThreshold);sum+=sampleColor*w*wd*wn;wsum+=w*wd*wn;}
fragmentOutputs.color= vec4f(sum/wsum,1.);}
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const bilateralBlurPixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=bilateralBlur.fragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/bilateralBlurQuality.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "bilateralBlurQualityPixelShaderWGSL",
    ()=>bilateralBlurQualityPixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
;
const name = "bilateralBlurQualityPixelShader";
const shader = `var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;var normalSamplerSampler: sampler;var normalSampler: texture_2d<f32>;var depthSamplerSampler: sampler;var depthSampler: texture_2d<f32>;uniform filterSize: i32;uniform blurDir: vec2f;uniform depthThreshold: f32;uniform normalThreshold: f32;varying vUV: vec2f;@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var color: vec3f=textureSampleLevel(textureSampler,textureSamplerSampler,input.vUV,0.).rgb;var depth: f32=textureSampleLevel(depthSampler,depthSamplerSampler,input.vUV,0.).x;if (depth>=1e6 || depth<=0.) {fragmentOutputs.color= vec4f(color,1.);return fragmentOutputs;}
var normal: vec3f=textureSampleLevel(normalSampler,normalSamplerSampler,input.vUV,0.).rgb;
#ifdef DECODE_NORMAL
normal=normal*2.0-1.0;
#endif
var sigma: f32= f32(uniforms.filterSize);var two_sigma2: f32=2.0*sigma*sigma;var sigmaDepth: f32=uniforms.depthThreshold;var two_sigmaDepth2: f32=2.0*sigmaDepth*sigmaDepth;var sigmaNormal: f32=uniforms.normalThreshold;var two_sigmaNormal2: f32=2.0*sigmaNormal*sigmaNormal;var sum: vec3f= vec3f(0.);var wsum: f32=0.;for (var x: i32=-uniforms.filterSize; x<=uniforms.filterSize; x++) {for (var y: i32=-uniforms.filterSize; y<=uniforms.filterSize; y++) {var coords: vec2f= vec2f(f32(x),f32(y))*uniforms.blurDir;var sampleColor: vec3f=textureSampleLevel(textureSampler,textureSamplerSampler,input.vUV+coords,0.).rgb;var sampleDepth: f32=textureSampleLevel(depthSampler,depthSamplerSampler,input.vUV+coords,0.).r;var sampleNormal: vec3f=textureSampleLevel(normalSampler,normalSamplerSampler,input.vUV+coords,0.).rgb;
#ifdef DECODE_NORMAL
sampleNormal=sampleNormal*2.0-1.0;
#endif
var r: f32=dot(coords,coords);var w: f32=exp(-r/two_sigma2);var rDepth: f32=sampleDepth-depth;var wd: f32=exp(-rDepth*rDepth/two_sigmaDepth2);var rNormal: f32=abs(sampleNormal.x-normal.x)+abs(sampleNormal.y-normal.y)+abs(sampleNormal.z-normal.z);var wn: f32=exp(-rNormal*rNormal/two_sigmaNormal2);sum+=sampleColor*w*wd*wn;wsum+=w*wd*wn;}}
fragmentOutputs.color= vec4f(sum/wsum,1.);}
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const bilateralBlurQualityPixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=bilateralBlurQuality.fragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/rsmGlobalIllumination.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "rsmGlobalIlluminationPixelShaderWGSL",
    ()=>rsmGlobalIlluminationPixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
;
const name = "rsmGlobalIlluminationPixelShader";
const shader = `/**
* The implementation is an application of the formula found in http:
* For better results,it also adds a random (noise) rotation to the RSM samples (the noise artifacts are easier to remove than the banding artifacts).
*/
varying vUV: vec2f;uniform rsmLightMatrix: mat4x4f;uniform rsmInfo: vec4f;uniform rsmInfo2: vec4f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;var normalSamplerSampler: sampler;var normalSampler: texture_2d<f32>;var rsmPositionWSampler: sampler;var rsmPositionW: texture_2d<f32>;var rsmNormalWSampler: sampler;var rsmNormalW: texture_2d<f32>;var rsmFluxSampler: sampler;var rsmFlux: texture_2d<f32>;var rsmSamples: texture_2d<f32>;
#ifdef TRANSFORM_NORMAL
uniform invView: mat4x4f;
#endif
fn mod289(x: f32)->f32{return x-floor(x*(1.0/289.0))*289.0;}
fn mod289Vec4(x: vec4f)->vec4f {return x-floor(x*(1.0/289.0))* 289.0;}
fn perm(x: vec4f)->vec4f {return mod289Vec4(((x*34.0)+1.0)*x) ;}
fn noise(p: vec3f)->f32{var a: vec3f=floor(p);var d: vec3f=p-a;d=d*d*(3.0-2.0*d);var b: vec4f=a.xxyy+ vec4f(0.0,1.0,0.0,1.0);var k1: vec4f=perm(b.xyxy);var k2: vec4f=perm(k1.xyxy+b.zzww);var c: vec4f=k2+a.zzzz;var k3: vec4f=perm(c);var k4: vec4f=perm(c+1.0);var o1: vec4f=fract(k3*(1.0/41.0));var o2: vec4f=fract(k4*(1.0/41.0));var o3: vec4f=o2*d.z+o1*(1.0-d.z);var o4: vec2f=o3.yw*d.x+o3.xz*(1.0-d.x);return o4.y*d.y+o4.x*(1.0-d.y);}
fn computeIndirect(p: vec3f,n: vec3f)->vec3f {var indirectDiffuse: vec3f= vec3f(0.);var numSamples: i32= i32(uniforms.rsmInfo.x);var radius: f32=uniforms.rsmInfo.y;var intensity: f32=uniforms.rsmInfo.z;var edgeArtifactCorrection: f32=uniforms.rsmInfo.w;var texRSM: vec4f=uniforms.rsmLightMatrix* vec4f(p,1.);texRSM=vec4f(texRSM.xy/texRSM.w,texRSM.z,texRSM.w);texRSM=vec4f(texRSM.xy*0.5+0.5,texRSM.z,texRSM.w);var angle: f32=noise(p*uniforms.rsmInfo2.x);var c: f32=cos(angle);var s: f32=sin(angle);for (var i: i32=0; i<numSamples; i++) {var rsmSample: vec3f=textureLoad(rsmSamples,vec2<i32>(i,0),0).xyz;var weightSquare: f32=rsmSample.z;if (uniforms.rsmInfo2.y==1.0){rsmSample=vec3f(rsmSample.x*c+rsmSample.y*s,-rsmSample.x*s+rsmSample.y*c,rsmSample.z);}
var uv: vec2f=texRSM.xy+rsmSample.xy*radius;if (uv.x<0. || uv.x>1. || uv.y<0. || uv.y>1.) {continue;}
var vplPositionW: vec3f=textureSampleLevel(rsmPositionW,rsmPositionWSampler,uv,0.).xyz;var vplNormalW: vec3f=textureSampleLevel(rsmNormalW,rsmNormalWSampler,uv,0.).xyz*2.0-1.0;var vplFlux: vec3f=textureSampleLevel(rsmFlux,rsmFluxSampler,uv,0.).rgb;vplPositionW-=vplNormalW*edgeArtifactCorrection; 
var dist2: f32=dot(vplPositionW-p,vplPositionW-p);indirectDiffuse+=vplFlux*weightSquare*max(0.,dot(n,vplPositionW-p))*max(0.,dot(vplNormalW,p-vplPositionW))/(dist2*dist2);}
return clamp(indirectDiffuse*intensity,vec3f(0.0),vec3f(1.0));}
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var positionW: vec3f=textureSample(textureSampler,textureSamplerSampler,input.vUV).xyz;var normalW: vec3f=textureSample(normalSampler,normalSamplerSampler,input.vUV).xyz;
#ifdef DECODE_NORMAL
normalW=normalW*2.0-1.0;
#endif
#ifdef TRANSFORM_NORMAL
normalW=(uniforms.invView* vec4f(normalW,0.)).xyz;
#endif
fragmentOutputs.color=vec4f(computeIndirect(positionW,normalW),1.0);}
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const rsmGlobalIlluminationPixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=rsmGlobalIllumination.fragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/rsmFullGlobalIllumination.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "rsmFullGlobalIlluminationPixelShaderWGSL",
    ()=>rsmFullGlobalIlluminationPixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
;
const name = "rsmFullGlobalIlluminationPixelShader";
const shader = `/**
* The implementation is a direct application of the formula found in http:
*/
varying vUV: vec2f;uniform rsmLightMatrix: mat4x4f;uniform rsmInfo: vec4f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;var normalSamplerSampler: sampler;var normalSampler: texture_2d<f32>;var rsmPositionW: texture_2d<f32>;var rsmNormalW: texture_2d<f32>;var rsmFlux: texture_2d<f32>;
#ifdef TRANSFORM_NORMAL
uniform invView: mat4x4f;
#endif
fn computeIndirect(p: vec3f,n: vec3f)->vec3f {var indirectDiffuse: vec3f= vec3f(0.);var intensity: f32=uniforms.rsmInfo.z;var edgeArtifactCorrection: f32=uniforms.rsmInfo.w;var texRSM: vec4f=uniforms.rsmLightMatrix* vec4f(p,1.);texRSM=vec4f(texRSM.xy/texRSM.w,texRSM.z,texRSM.w);texRSM=vec4f(texRSM.xy*0.5+0.5,texRSM.z,texRSM.w);var width: i32= i32(uniforms.rsmInfo.x);var height: i32= i32(uniforms.rsmInfo.y);for (var j: i32=0; j<height; j++) {for (var i: i32=0; i<width; i++) {var uv=vec2<i32>(i,j);var vplPositionW: vec3f=textureLoad(rsmPositionW,uv,0).xyz;var vplNormalW: vec3f=textureLoad(rsmNormalW,uv,0).xyz*2.0-1.0;var vplFlux: vec3f=textureLoad(rsmFlux,uv,0).rgb;vplPositionW-=vplNormalW*edgeArtifactCorrection; 
var dist2: f32=dot(vplPositionW-p,vplPositionW-p);indirectDiffuse+=vplFlux*max(0.,dot(n,vplPositionW-p))*max(0.,dot(vplNormalW,p-vplPositionW))/(dist2*dist2);}}
return clamp(indirectDiffuse*intensity,vec3f(0.0),vec3f(1.0));}
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var positionW: vec3f=textureSample(textureSampler,textureSamplerSampler,fragmentInputs.vUV).xyz;var normalW: vec3f=textureSample(normalSampler,normalSamplerSampler,fragmentInputs.vUV).xyz;
#ifdef DECODE_NORMAL
normalW=normalW*2.0-1.0;
#endif
#ifdef TRANSFORM_NORMAL
normalW=(uniforms.invView* vec4f(normalW,0.)).xyz;
#endif
fragmentOutputs.color=vec4f(computeIndirect(positionW,normalW),1.0);}
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const rsmFullGlobalIlluminationPixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=rsmFullGlobalIllumination.fragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/depth.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "depthPixelShaderWGSL",
    ()=>depthPixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$clipPlaneFragmentDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/clipPlaneFragmentDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$packingFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/packingFunctions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$clipPlaneFragment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/clipPlaneFragment.js [app-client] (ecmascript)");
;
;
;
;
const name = "depthPixelShader";
const shader = `#ifdef ALPHATEST
varying vUV: vec2f;var diffuseSamplerSampler: sampler;var diffuseSampler: texture_2d<f32>;
#endif
#include<clipPlaneFragmentDeclaration>
varying vDepthMetric: f32;
#ifdef PACKED
#include<packingFunctions>
#endif
#ifdef STORE_CAMERASPACE_Z
varying vViewPos: vec4f;
#endif
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#include<clipPlaneFragment>
#ifdef ALPHATEST
if (textureSample(diffuseSampler,diffuseSamplerSampler,input.vUV).a<0.4) {discard;}
#endif
#ifdef STORE_CAMERASPACE_Z
#ifdef PACKED
fragmentOutputs.color=pack(input.vViewPos.z);
#else
fragmentOutputs.color= vec4f(input.vViewPos.z,0.0,0.0,1.0);
#endif
#else
#ifdef NONLINEARDEPTH
#ifdef PACKED
fragmentOutputs.color=pack(input.position.z);
#else
fragmentOutputs.color= vec4f(input.position.z,0.0,0.0,0.0);
#endif
#else
#ifdef PACKED
fragmentOutputs.color=pack(input.vDepthMetric);
#else
fragmentOutputs.color= vec4f(input.vDepthMetric,0.0,0.0,1.0);
#endif
#endif
#endif
}`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const depthPixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=depth.fragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/depth.vertex.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "depthVertexShaderWGSL",
    ()=>depthVertexShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$bonesDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/bonesDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$bakedVertexAnimationDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/bakedVertexAnimationDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$morphTargetsVertexGlobalDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/morphTargetsVertexGlobalDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$morphTargetsVertexDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/morphTargetsVertexDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$clipPlaneVertexDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/clipPlaneVertexDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$instancesDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/instancesDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$morphTargetsVertexGlobal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/morphTargetsVertexGlobal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$morphTargetsVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/morphTargetsVertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$instancesVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/instancesVertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$bonesVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/bonesVertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$bakedVertexAnimation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/bakedVertexAnimation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$clipPlaneVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/clipPlaneVertex.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
const name = "depthVertexShader";
const shader = `attribute position: vec3f;
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]
#include<clipPlaneVertexDeclaration>
#include<instancesDeclaration>
uniform viewProjection: mat4x4f;uniform depthValues: vec2f;
#if defined(ALPHATEST) || defined(NEED_UV)
varying vUV: vec2f;uniform diffuseMatrix: mat4x4f;
#ifdef UV1
attribute uv: vec2f;
#endif
#ifdef UV2
attribute uv2: vec2f;
#endif
#endif
#ifdef STORE_CAMERASPACE_Z
uniform view: mat4x4f;varying vViewPos: vec4f;
#endif
varying vDepthMetric: f32;
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {var positionUpdated: vec3f=input.position;
#ifdef UV1
var uvUpdated: vec2f=input.uv;
#endif
#ifdef UV2
var uv2Updated: vec2f=input.uv2;
#endif
#include<morphTargetsVertexGlobal>
#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
var worldPos: vec4f=finalWorld* vec4f(positionUpdated,1.0);
#include<clipPlaneVertex>
vertexOutputs.position=uniforms.viewProjection*worldPos;
#ifdef STORE_CAMERASPACE_Z
vertexOutputs.vViewPos=uniforms.view*worldPos;
#else
#ifdef USE_REVERSE_DEPTHBUFFER
vertexOutputs.vDepthMetric=((-vertexOutputs.position.z+uniforms.depthValues.x)/(uniforms.depthValues.y));
#else
vertexOutputs.vDepthMetric=((vertexOutputs.position.z+uniforms.depthValues.x)/(uniforms.depthValues.y));
#endif
#endif
#if defined(ALPHATEST) || defined(BASIC_RENDER)
#ifdef UV1
vertexOutputs.vUV= (uniforms.diffuseMatrix* vec4f(uvUpdated,1.0,0.0)).xy;
#endif
#ifdef UV2
vertexOutputs.vUV= (uniforms.diffuseMatrix* vec4f(uv2Updated,1.0,0.0)).xy;
#endif
#endif
}
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const depthVertexShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=depth.vertex.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/geometry.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "geometryPixelShaderWGSL",
    ()=>geometryPixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$clipPlaneFragmentDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/clipPlaneFragmentDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$bumpFragmentMainFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/bumpFragmentMainFunctions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$bumpFragmentFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/bumpFragmentFunctions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$helperFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/helperFunctions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$clipPlaneFragment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/clipPlaneFragment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$bumpFragment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/bumpFragment.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
const name = "geometryPixelShader";
const shader = `#ifdef BUMP
varying vWorldView0: vec4f;varying vWorldView1: vec4f;varying vWorldView2: vec4f;varying vWorldView3: vec4f;varying vNormalW: vec3f;
#else
varying vNormalV: vec3f;
#endif
varying vViewPos: vec4f;
#if defined(POSITION) || defined(BUMP)
varying vPositionW: vec3f;
#endif
#if defined(VELOCITY) || defined(VELOCITY_LINEAR)
varying vCurrentPosition: vec4f;varying vPreviousPosition: vec4f;
#endif
#ifdef NEED_UV
varying vUV: vec2f;
#endif
#ifdef BUMP
uniform vBumpInfos: vec3f;uniform vTangentSpaceParams: vec2f;
#endif
#if defined(REFLECTIVITY)
#if defined(ORMTEXTURE) || defined(SPECULARGLOSSINESSTEXTURE) || defined(REFLECTIVITYTEXTURE)
var reflectivitySamplerSampler: sampler;var reflectivitySampler: texture_2d<f32>;varying vReflectivityUV: vec2f;
#else
#ifdef METALLIC_TEXTURE
var metallicSamplerSampler: sampler;var metallicSampler: texture_2d<f32>;varying vMetallicUV: vec2f;
#endif
#ifdef ROUGHNESS_TEXTURE
var roughnessSamplerSampler: sampler;var roughnessSampler: texture_2d<f32>;varying vRoughnessUV: vec2f;
#endif
#endif
#ifdef ALBEDOTEXTURE
varying vAlbedoUV: vec2f;var albedoSamplerSampler: sampler;var albedoSampler: texture_2d<f32>;
#endif
#ifdef REFLECTIVITYCOLOR
uniform reflectivityColor: vec3f;
#endif
#ifdef ALBEDOCOLOR
uniform albedoColor: vec3f;
#endif
#ifdef METALLIC
uniform metallic: f32;
#endif
#if defined(ROUGHNESS) || defined(GLOSSINESS)
uniform glossiness: f32;
#endif
#endif
#if defined(ALPHATEST) && defined(NEED_UV)
var diffuseSamplerSampler: sampler;var diffuseSampler: texture_2d<f32>;
#endif
#include<clipPlaneFragmentDeclaration>
#include<bumpFragmentMainFunctions>
#include<bumpFragmentFunctions>
#include<helperFunctions>
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#include<clipPlaneFragment>
#ifdef ALPHATEST
if (textureSample(diffuseSampler,diffuseSamplerSampler,input.vUV).a<0.4) {discard;}
#endif
var normalOutput: vec3f;
#ifdef BUMP
var normalW: vec3f=normalize(input.vNormalW);
#include<bumpFragment>
#ifdef NORMAL_WORLDSPACE
normalOutput=normalW;
#else
normalOutput=normalize( (mat4x4f(input.vWorldView0,input.vWorldView1,input.vWorldView2,input.vWorldView3)* vec4f(normalW,0.0)).xyz);
#endif
#elif defined(HAS_NORMAL_ATTRIBUTE)
normalOutput=normalize(input.vNormalV);
#elif defined(POSITION)
normalOutput=normalize(-cross(dpdx(input.vPositionW),dpdy(input.vPositionW)));
#endif
#ifdef ENCODE_NORMAL
normalOutput=normalOutput*0.5+0.5;
#endif
var fragData: array<vec4<f32>,SCENE_MRT_COUNT>;
#ifdef DEPTH
fragData[DEPTH_INDEX]=vec4f(input.vViewPos.z/input.vViewPos.w,0.0,0.0,1.0);
#endif
#ifdef NORMAL
fragData[NORMAL_INDEX]=vec4f(normalOutput,1.0);
#endif
#ifdef SCREENSPACE_DEPTH
fragData[SCREENSPACE_DEPTH_INDEX]=vec4f(fragmentInputs.position.z,0.0,0.0,1.0);
#endif
#ifdef POSITION
fragData[POSITION_INDEX]= vec4f(input.vPositionW,1.0);
#endif
#ifdef VELOCITY
var a: vec2f=(input.vCurrentPosition.xy/input.vCurrentPosition.w)*0.5+0.5;var b: vec2f=(input.vPreviousPosition.xy/input.vPreviousPosition.w)*0.5+0.5;var velocity: vec2f=abs(a-b);velocity= vec2f(pow(velocity.x,1.0/3.0),pow(velocity.y,1.0/3.0))*sign(a-b)*0.5+0.5;fragData[VELOCITY_INDEX]= vec4f(velocity,0.0,1.0);
#endif
#ifdef VELOCITY_LINEAR
var velocity : vec2f=vec2f(0.5)*((input.vPreviousPosition.xy /
input.vPreviousPosition.w) -
(input.vCurrentPosition.xy /
input.vCurrentPosition.w));fragData[VELOCITY_LINEAR_INDEX]=vec4f(velocity,0.0,1.0);
#endif
#ifdef REFLECTIVITY
var reflectivity: vec4f= vec4f(0.0,0.0,0.0,1.0);
#ifdef METALLICWORKFLOW
var metal: f32=1.0;var roughness: f32=1.0;
#ifdef ORMTEXTURE
metal*=textureSample(reflectivitySampler,reflectivitySamplerSampler,input.vReflectivityUV).b;roughness*=textureSample(reflectivitySampler,reflectivitySamplerSampler,input.vReflectivityUV).g;
#else
#ifdef METALLIC_TEXTURE
metal*=textureSample(metallicSampler,metallicSamplerSampler,input.vMetallicUV).r;
#endif
#ifdef ROUGHNESS_TEXTURE
roughness*=textureSample(roughnessSampler,roughnessSamplerSampler,input.vRoughnessUV).r;
#endif
#endif
#ifdef METALLIC
metal*=uniforms.metallic;
#endif
#ifdef ROUGHNESS
roughness*=(1.0-uniforms.glossiness); 
#endif
reflectivity=vec4f(reflectivity.rgb,reflectivity.a-roughness);var color: vec3f= vec3f(1.0);
#ifdef ALBEDOTEXTURE
color=textureSample(albedoSampler,albedoSamplerSampler,input.vAlbedoUV).rgb;
#ifdef GAMMAALBEDO
color=toLinearSpaceVec4(color);
#endif
#endif
#ifdef ALBEDOCOLOR
color*=uniforms.albedoColor.xyz;
#endif
reflectivity=vec4f(mix( vec3f(0.04),color,metal),reflectivity.a);
#else
#if defined(SPECULARGLOSSINESSTEXTURE) || defined(REFLECTIVITYTEXTURE)
reflectivity=textureSample(reflectivitySampler,reflectivitySamplerSampler,input.vReflectivityUV);
#ifdef GAMMAREFLECTIVITYTEXTURE
reflectivity=vec4f(toLinearSpaceVec3(reflectivity.rgb),reflectivity.a);
#endif
#else 
#ifdef REFLECTIVITYCOLOR
reflectivity=vec4f(toLinearSpaceVec3(uniforms.reflectivityColor.xyz),1.0);
#endif
#endif
#ifdef GLOSSINESSS
reflectivity=vec4f(reflectivity.rgb,reflectivity.a*glossiness); 
#endif
#endif
fragData[REFLECTIVITY_INDEX]=reflectivity;
#endif
#if SCENE_MRT_COUNT>0
fragmentOutputs.fragData0=fragData[0];
#endif
#if SCENE_MRT_COUNT>1
fragmentOutputs.fragData1=fragData[1];
#endif
#if SCENE_MRT_COUNT>2
fragmentOutputs.fragData2=fragData[2];
#endif
#if SCENE_MRT_COUNT>3
fragmentOutputs.fragData3=fragData[3];
#endif
#if SCENE_MRT_COUNT>4
fragmentOutputs.fragData4=fragData[4];
#endif
#if SCENE_MRT_COUNT>5
fragmentOutputs.fragData5=fragData[5];
#endif
#if SCENE_MRT_COUNT>6
fragmentOutputs.fragData6=fragData[6];
#endif
#if SCENE_MRT_COUNT>7
fragmentOutputs.fragData7=fragData[7];
#endif
}
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const geometryPixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=geometry.fragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/geometry.vertex.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "geometryVertexShaderWGSL",
    ()=>geometryVertexShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$bonesDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/bonesDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$bakedVertexAnimationDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/bakedVertexAnimationDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$morphTargetsVertexGlobalDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/morphTargetsVertexGlobalDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$morphTargetsVertexDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/morphTargetsVertexDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$instancesDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/instancesDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$sceneUboDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/sceneUboDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$clipPlaneVertexDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/clipPlaneVertexDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$morphTargetsVertexGlobal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/morphTargetsVertexGlobal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$morphTargetsVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/morphTargetsVertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$instancesVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/instancesVertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$bonesVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/bonesVertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$bakedVertexAnimation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/bakedVertexAnimation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$clipPlaneVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/clipPlaneVertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$bumpVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/bumpVertex.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const name = "geometryVertexShader";
const shader = `#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]
#include<instancesDeclaration>
#include<sceneUboDeclaration>
#include<clipPlaneVertexDeclaration>
attribute position: vec3f;
#ifdef HAS_NORMAL_ATTRIBUTE
attribute normal: vec3f;
#endif
#ifdef NEED_UV
varying vUV: vec2f;
#ifdef ALPHATEST
uniform diffuseMatrix: mat4x4f;
#endif
#ifdef BUMP
uniform bumpMatrix: mat4x4f;varying vBumpUV: vec2f;
#endif
#ifdef REFLECTIVITY
uniform reflectivityMatrix: mat4x4f;uniform albedoMatrix: mat4x4f;varying vReflectivityUV: vec2f;varying vAlbedoUV: vec2f;
#endif
#ifdef METALLIC_TEXTURE
varying vMetallicUV: vec2f;uniform metallicMatrix: mat4x4f;
#endif
#ifdef ROUGHNESS_TEXTURE
varying vRoughnessUV: vec2f;uniform roughnessMatrix: mat4x4f;
#endif
#ifdef UV1
attribute uv: vec2f;
#endif
#ifdef UV2
attribute uv2: vec2f;
#endif
#endif
#ifdef BUMP
varying vWorldView0: vec4f;varying vWorldView1: vec4f;varying vWorldView2: vec4f;varying vWorldView3: vec4f;
#endif
#ifdef BUMP
varying vNormalW: vec3f;
#else
varying vNormalV: vec3f;
#endif
varying vViewPos: vec4f;
#if defined(POSITION) || defined(BUMP)
varying vPositionW: vec3f;
#endif
#if defined(VELOCITY) || defined(VELOCITY_LINEAR)
uniform previousViewProjection: mat4x4f;varying vCurrentPosition: vec4f;varying vPreviousPosition: vec4f;
#endif
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {var positionUpdated: vec3f=input.position;
#ifdef HAS_NORMAL_ATTRIBUTE
var normalUpdated: vec3f=input.normal;
#else
var normalUpdated: vec3f=vec3f(0.0,0.0,0.0);
#endif
#ifdef UV1
var uvUpdated: vec2f=input.uv;
#endif
#ifdef UV2
var uv2Updated: vec2f=input.uv2;
#endif
#include<morphTargetsVertexGlobal>
#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]
#include<instancesVertex>
#if (defined(VELOCITY) || defined(VELOCITY_LINEAR)) && !defined(BONES_VELOCITY_ENABLED)
vCurrentPosition=scene.viewProjection*finalWorld*vec4f(positionUpdated,1.0);vPreviousPosition=uniforms.previousViewProjection*finalPreviousWorld* vec4f(positionUpdated,1.0);
#endif
#include<bonesVertex>
#include<bakedVertexAnimation>
var worldPos: vec4f= vec4f(finalWorld* vec4f(positionUpdated,1.0));
#ifdef BUMP
let vWorldView=scene.view*finalWorld;vertexOutputs.vWorldView0=vWorldView[0];vertexOutputs.vWorldView1=vWorldView[1];vertexOutputs.vWorldView2=vWorldView[2];vertexOutputs.vWorldView3=vWorldView[3];let normalWorld: mat3x3f= mat3x3f(finalWorld[0].xyz,finalWorld[1].xyz,finalWorld[2].xyz);vertexOutputs.vNormalW=normalize(normalWorld*normalUpdated);
#else
#ifdef NORMAL_WORLDSPACE
vertexOutputs.vNormalV=normalize((finalWorld* vec4f(normalUpdated,0.0)).xyz);
#else
vertexOutputs.vNormalV=normalize(((scene.view*finalWorld)* vec4f(normalUpdated,0.0)).xyz);
#endif
#endif
vertexOutputs.vViewPos=scene.view*worldPos;
#if (defined(VELOCITY) || defined(VELOCITY_LINEAR)) && defined(BONES_VELOCITY_ENABLED)
vertexOutputs.vCurrentPosition=scene.viewProjection*finalWorld* vec4f(positionUpdated,1.0);
#if NUM_BONE_INFLUENCERS>0
var previousInfluence: mat4x4f;previousInfluence=uniforms.mPreviousBones[ i32(vertexInputs.matricesIndices[0])]*vertexInputs.matricesWeights[0];
#if NUM_BONE_INFLUENCERS>1
previousInfluence+=uniforms.mPreviousBones[ i32(vertexInputs.matricesIndices[1])]*vertexInputs.matricesWeights[1];
#endif
#if NUM_BONE_INFLUENCERS>2
previousInfluence+=uniforms.mPreviousBones[ i32(vertexInputs.matricesIndices[2])]*vertexInputs.matricesWeights[2];
#endif
#if NUM_BONE_INFLUENCERS>3
previousInfluence+=uniforms.mPreviousBones[ i32(vertexInputs.matricesIndices[3])]*vertexInputs.matricesWeights[3];
#endif
#if NUM_BONE_INFLUENCERS>4
previousInfluence+=uniforms.mPreviousBones[ i32(vertexInputs.matricesIndicesExtra[0])]*vertexInputs.matricesWeightsExtra[0];
#endif
#if NUM_BONE_INFLUENCERS>5
previousInfluence+=uniforms.mPreviousBones[ i32(vertexInputs.matricesIndicesExtra[1])]*vertexInputs.matricesWeightsExtra[1];
#endif
#if NUM_BONE_INFLUENCERS>6
previousInfluence+=uniforms.mPreviousBones[ i32(vertexInputs.matricesIndicesExtra[2])]*vertexInputs.matricesWeightsExtra[2];
#endif
#if NUM_BONE_INFLUENCERS>7
previousInfluence+=uniforms.mPreviousBones[ i32(vertexInputs.matricesIndicesExtra[3])]*vertexInputs.matricesWeightsExtra[3];
#endif
vertexOutputs.vPreviousPosition=uniforms.previousViewProjection*finalPreviousWorld*previousInfluence* vec4f(positionUpdated,1.0);
#else
vertexOutputs.vPreviousPosition=uniforms.previousViewProjection*finalPreviousWorld* vec4f(positionUpdated,1.0);
#endif
#endif
#if defined(POSITION) || defined(BUMP)
vertexOutputs.vPositionW=worldPos.xyz/worldPos.w;
#endif
vertexOutputs.position=scene.viewProjection*finalWorld* vec4f(positionUpdated,1.0);
#include<clipPlaneVertex>
#ifdef NEED_UV
#ifdef UV1
#if defined(ALPHATEST) && defined(ALPHATEST_UV1)
vertexOutputs.vUV=(uniforms.diffuseMatrix* vec4f(uvUpdated,1.0,0.0)).xy;
#else
vertexOutputs.vUV=uvUpdated;
#endif
#ifdef BUMP_UV1
vertexOutputs.vBumpUV=(uniforms.bumpMatrix* vec4f(uvUpdated,1.0,0.0)).xy;
#endif
#ifdef REFLECTIVITY_UV1
vertexOutputs.vReflectivityUV=(uniforms.reflectivityMatrix* vec4f(uvUpdated,1.0,0.0)).xy;
#else
#ifdef METALLIC_UV1
vertexOutputs.vMetallicUV=(uniforms.metallicMatrix* vec4f(uvUpdated,1.0,0.0)).xy;
#endif
#ifdef ROUGHNESS_UV1
vertexOutputs.vRoughnessUV=(uniforms.roughnessMatrix* vec4f(uvUpdated,1.0,0.0)).xy;
#endif
#endif
#ifdef ALBEDO_UV1
vertexOutputs.vAlbedoUV=(uniforms.albedoMatrix* vec4f(uvUpdated,1.0,0.0)).xy;
#endif
#endif
#ifdef UV2
#if defined(ALPHATEST) && defined(ALPHATEST_UV2)
vertexOutputs.vUV=(uniforms.diffuseMatrix* vec4f(uv2Updated,1.0,0.0)).xy;
#else
vertexOutputs.vUV=uv2Updated;
#endif
#ifdef BUMP_UV2
vertexOutputs.vBumpUV=(uniforms.bumpMatrix* vec4f(uv2Updated,1.0,0.0)).xy;
#endif
#ifdef REFLECTIVITY_UV2
vertexOutputs.vReflectivityUV=(uniforms.reflectivityMatrix* vec4f(uv2Updated,1.0,0.0)).xy;
#else
#ifdef METALLIC_UV2
vertexOutputs.vMetallicUV=(uniforms.metallicMatrix* vec4f(uv2Updated,1.0,0.0)).xy;
#endif
#ifdef ROUGHNESS_UV2
vertexOutputs.vRoughnessUV=(uniforms.roughnessMatrix* vec4f(uv2Updated,1.0,0.0)).xy;
#endif
#endif
#ifdef ALBEDO_UV2
vertexOutputs.vAlbedoUV=(uniforms.albedoMatrix* vec4f(uv2Updated,1.0,0.0)).xy;
#endif
#endif
#endif
#include<bumpVertex>
}
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const geometryVertexShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=geometry.vertex.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/boundingBoxRenderer.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "boundingBoxRendererPixelShaderWGSL",
    ()=>boundingBoxRendererPixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
;
const name = "boundingBoxRendererPixelShader";
const shader = `uniform color: vec4f;
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
fragmentOutputs.color=uniforms.color;
#define CUSTOM_FRAGMENT_MAIN_END
}`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const boundingBoxRendererPixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=boundingBoxRenderer.fragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/boundingBoxRenderer.vertex.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "boundingBoxRendererVertexShaderWGSL",
    ()=>boundingBoxRendererVertexShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
;
const name = "boundingBoxRendererVertexShader";
const shader = `attribute position: vec3f;uniform world: mat4x4f;uniform viewProjection: mat4x4f;
#ifdef INSTANCES
attribute world0 : vec4<f32>;attribute world1 : vec4<f32>;attribute world2 : vec4<f32>;attribute world3 : vec4<f32>;
#endif
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {
#define CUSTOM_VERTEX_MAIN_BEGIN
#ifdef INSTANCES
var finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);var worldPos: vec4f=finalWorld* vec4f(input.position,1.0);
#else
var worldPos: vec4f=uniforms.world* vec4f(input.position,1.0);
#endif
vertexOutputs.position=uniforms.viewProjection*worldPos;
#define CUSTOM_VERTEX_MAIN_END
}
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const boundingBoxRendererVertexShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=boundingBoxRenderer.vertex.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/line.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "linePixelShaderWGSL",
    ()=>linePixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$clipPlaneFragmentDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/clipPlaneFragmentDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$logDepthDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/logDepthDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$logDepthFragment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/logDepthFragment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$clipPlaneFragment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/clipPlaneFragment.js [app-client] (ecmascript)");
;
;
;
;
;
const name = "linePixelShader";
const shader = `#include<clipPlaneFragmentDeclaration>
uniform color: vec4f;
#include<logDepthDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<logDepthFragment>
#include<clipPlaneFragment>
fragmentOutputs.color=uniforms.color;
#define CUSTOM_FRAGMENT_MAIN_END
}`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const linePixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=line.fragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/line.vertex.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "lineVertexShaderWGSL",
    ()=>lineVertexShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$instancesDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/instancesDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$clipPlaneVertexDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/clipPlaneVertexDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$sceneUboDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/sceneUboDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$meshUboDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/meshUboDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$logDepthDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/logDepthDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$instancesVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/instancesVertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$clipPlaneVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/clipPlaneVertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$logDepthVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/logDepthVertex.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
const name = "lineVertexShader";
const shader = `#define ADDITIONAL_VERTEX_DECLARATION
#include<instancesDeclaration>
#include<clipPlaneVertexDeclaration>
#include<sceneUboDeclaration>
#include<meshUboDeclaration>
attribute position: vec3f;attribute normal: vec4f;uniform width: f32;uniform aspectRatio: f32;
#include<logDepthDeclaration>
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {
#define CUSTOM_VERTEX_MAIN_BEGIN
#include<instancesVertex>
var worldViewProjection: mat4x4f=scene.viewProjection*finalWorld;var viewPosition: vec4f=worldViewProjection* vec4f(input.position,1.0);var viewPositionNext: vec4f=worldViewProjection* vec4f(input.normal.xyz,1.0);var currentScreen: vec2f=viewPosition.xy/viewPosition.w;var nextScreen: vec2f=viewPositionNext.xy/viewPositionNext.w;currentScreen=vec2f(currentScreen.x*uniforms.aspectRatio,currentScreen.y);nextScreen=vec2f(nextScreen.x*uniforms.aspectRatio,nextScreen.y);var dir: vec2f=normalize(nextScreen-currentScreen);var normalDir: vec2f= vec2f(-dir.y,dir.x);normalDir*=uniforms.width/2.0;normalDir=vec2f(normalDir.x/uniforms.aspectRatio,normalDir.y);var offset: vec4f= vec4f(normalDir*input.normal.w,0.0,0.0);vertexOutputs.position=viewPosition+offset;
#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)
var worldPos: vec4f=finalWorld*vec4f(input.position,1.0);
#include<clipPlaneVertex>
#endif
#include<logDepthVertex>
#define CUSTOM_VERTEX_MAIN_END
}`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const lineVertexShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=line.vertex.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/outline.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "outlinePixelShaderWGSL",
    ()=>outlinePixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$clipPlaneFragmentDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/clipPlaneFragmentDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$logDepthDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/logDepthDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$clipPlaneFragment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/clipPlaneFragment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$logDepthFragment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/logDepthFragment.js [app-client] (ecmascript)");
;
;
;
;
;
const name = "outlinePixelShader";
const shader = `uniform color: vec4f;
#ifdef ALPHATEST
varying vUV: vec2f;var diffuseSamplerSampler: sampler;var diffuseSampler: texture_2d<f32>;
#endif
#include<clipPlaneFragmentDeclaration>
#include<logDepthDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
#ifdef ALPHATEST
if (textureSample(diffuseSampler,diffuseSamplerSampler,fragmentInputs.vUV).a<0.4) {discard;}
#endif
#include<logDepthFragment>
fragmentOutputs.color=uniforms.color;
#define CUSTOM_FRAGMENT_MAIN_END
}`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const outlinePixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=outline.fragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/outline.vertex.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "outlineVertexShaderWGSL",
    ()=>outlineVertexShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$bonesDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/bonesDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$bakedVertexAnimationDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/bakedVertexAnimationDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$morphTargetsVertexGlobalDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/morphTargetsVertexGlobalDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$morphTargetsVertexDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/morphTargetsVertexDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$clipPlaneVertexDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/clipPlaneVertexDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$instancesDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/instancesDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$logDepthDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/logDepthDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$morphTargetsVertexGlobal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/morphTargetsVertexGlobal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$morphTargetsVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/morphTargetsVertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$instancesVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/instancesVertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$bonesVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/bonesVertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$bakedVertexAnimation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/bakedVertexAnimation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$clipPlaneVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/clipPlaneVertex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$logDepthVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/logDepthVertex.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const name = "outlineVertexShader";
const shader = `attribute position: vec3f;attribute normal: vec3f;
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]
#include<clipPlaneVertexDeclaration>
uniform offset: f32;
#include<instancesDeclaration>
uniform viewProjection: mat4x4f;
#ifdef ALPHATEST
varying vUV: vec2f;uniform diffuseMatrix: mat4x4f; 
#ifdef UV1
attribute uv: vec2f;
#endif
#ifdef UV2
attribute uv2: vec2f;
#endif
#endif
#include<logDepthDeclaration>
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input: VertexInputs)->FragmentInputs {var positionUpdated: vec3f=vertexInputs.position;var normalUpdated: vec3f=vertexInputs.normal;
#ifdef UV1
var uvUpdated: vec2f=vertexInputs.uv;
#endif
#ifdef UV2
var uv2Updated: vec2f=vertexInputs.uv2;
#endif
#include<morphTargetsVertexGlobal>
#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]
var offsetPosition: vec3f=positionUpdated+(normalUpdated*uniforms.offset);
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
var worldPos: vec4f=finalWorld*vec4f(offsetPosition,1.0);vertexOutputs.position=uniforms.viewProjection*worldPos;
#ifdef ALPHATEST
#ifdef UV1
vertexOutputs.vUV=(uniforms.diffuseMatrix*vec4f(uvUpdated,1.0,0.0)).xy;
#endif
#ifdef UV2
vertexOutputs.vUV=(uniforms.diffuseMatrix*vec4f(uv2Updated,1.0,0.0)).xy;
#endif
#endif
#include<clipPlaneVertex>
#include<logDepthVertex>
}
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const outlineVertexShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=outline.vertex.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/copyTexture3DLayerToTexture.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "copyTexture3DLayerToTexturePixelShaderWGSL",
    ()=>copyTexture3DLayerToTexturePixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
;
const name = "copyTexture3DLayerToTexturePixelShader";
const shader = `var textureSampler: texture_3d<f32>;uniform layerNum: i32;varying vUV: vec2f;@fragment
fn main(input: FragmentInputs)->FragmentOutputs {let coord=vec3f(vec2f(input.vUV.x,input.vUV.y)*vec2f(textureDimensions(textureSampler,0).xy),f32(uniforms.layerNum));let color=textureLoad(textureSampler,vec3i(coord),0).rgb;fragmentOutputs.color= vec4f(color,1);}`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const copyTexture3DLayerToTexturePixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=copyTexture3DLayerToTexture.fragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/iblShadowVoxelTracing.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "iblShadowVoxelTracingPixelShaderWGSL",
    ()=>iblShadowVoxelTracingPixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
;
const name = "iblShadowVoxelTracingPixelShader";
const shader = `#define PI 3.1415927
varying vUV: vec2f;
#define DISABLE_UNIFORMITY_ANALYSIS
var depthSampler: texture_2d<f32>;var worldNormalSampler : texture_2d<f32>;var blueNoiseSampler: texture_2d<f32>;var icdfSamplerSampler: sampler;var icdfSampler: texture_2d<f32>;var voxelGridSamplerSampler: sampler;var voxelGridSampler: texture_3d<f32>;
#ifdef COLOR_SHADOWS
var iblSamplerSampler: sampler;var iblSampler: texture_cube<f32>;
#endif
uniform shadowParameters: vec4f;
#define SHADOWdirs uniforms.shadowParameters.x
#define SHADOWframe uniforms.shadowParameters.y
#define SHADOWenvRot uniforms.shadowParameters.w
uniform voxelBiasParameters : vec4f;
#define highestMipLevel uniforms.voxelBiasParameters.z
uniform sssParameters: vec4f;
#define SSSsamples uniforms.sssParameters.x
#define SSSstride uniforms.sssParameters.y
#define SSSmaxDistance uniforms.sssParameters.z
#define SSSthickness uniforms.sssParameters.w
uniform shadowOpacity: vec4f;uniform projMtx: mat4x4f;uniform viewMtx: mat4x4f;uniform invProjMtx: mat4x4f;uniform invViewMtx: mat4x4f;uniform wsNormalizationMtx: mat4x4f;uniform invVPMtx: mat4x4f;
#define PI 3.1415927
#define GOLD 0.618034
struct AABB3f {m_min: vec3f,
m_max: vec3f,};struct Ray {orig: vec3f,
dir: vec3f,
dir_rcp: vec3f,
t_min: f32,
t_max: f32,};fn make_ray(origin: vec3f,direction: vec3f,tmin: f32,
tmax: f32)->Ray {var ray: Ray;ray.orig=origin;ray.dir=direction;ray.dir_rcp=1.0f/direction;ray.t_min=tmin;ray.t_max=tmax;return ray;}
fn ray_box_intersection(aabb: AABB3f,ray: Ray ,
distance_near: ptr<function,f32>,distance_far: ptr<function,f32>)->bool{var tbot: vec3f=ray.dir_rcp*(aabb.m_min-ray.orig);var ttop: vec3f=ray.dir_rcp*(aabb.m_max-ray.orig);var tmin: vec3f=min(ttop,tbot);var tmax: vec3f=max(ttop,tbot);*distance_near=max(ray.t_min,max(tmin.x,max(tmin.y,tmin.z)));*distance_far=min(ray.t_max,min(tmax.x,min(tmax.y,tmax.z)));return *distance_near<=*distance_far;}
#if VOXEL_MARCH_DIAGNOSTIC_INFO_OPTION
struct VoxelMarchDiagnosticInfo {heat: f32,
voxel_intersect_coords: vec3i,};
#endif
fn hash(i: u32)->u32 {var temp=i ^ (i>>16u);temp*=0x7FEB352Du;temp ^= temp>>15u;temp*=0x846CA68Bu;temp ^= temp>>16u;return temp;}
fn uintBitsToFloat(x: u32)->f32 {return bitcast<f32>(x);}
fn uint2float(i: u32)->f32 {return uintBitsToFloat(0x3F800000u | (i>>9u))-1.0;}
fn uv_to_normal(uv: vec2f)->vec3f {var N: vec3f;var uvRange: vec2f=uv;var theta: f32=uvRange.x*2.0*PI;var phi: f32=uvRange.y*PI;N.x=cos(theta)*sin(phi);N.z=sin(theta)*sin(phi);N.y=cos(phi);return N;}
fn plasticSequence(rstate: u32)->vec2f {return vec2f(uint2float(rstate*3242174889u),
uint2float(rstate*2447445414u));}
fn goldenSequence(rstate: u32)->f32 {return uint2float(rstate*2654435769u);}
fn distanceSquared(a: vec2f,b: vec2f)->f32 {var diff: vec2f=a-b;return dot(diff,diff);}
fn genTB(N: vec3f,T: ptr<function,vec3f>,B: ptr<function,vec3f>) {var s: f32=select(1.0,-1.0,N.z<0.0);var a: f32=-1.0/(s+N.z);var b: f32=N.x*N.y*a;*T= vec3f(1.0+s*N.x*N.x*a,s*b,-s*N.x);*B= vec3f(b,s+N.y*N.y*a,-N.y);}
fn lessThan(x: vec3f,y: vec3f)->vec3<bool> {return x<y;}
#ifdef VOXEL_MARCH_DIAGNOSTIC_INFO_OPTION
fn anyHitVoxels(ray_vs: Ray,
voxel_march_diagnostic_info: ptr<function,VoxelMarchDiagnosticInfo>)->bool {
#else
fn anyHitVoxels(ray_vs: Ray)->bool {
#endif
var stack=array<i32,24>(); 
var invD: vec3f=ray_vs.dir_rcp;var D: vec3f=ray_vs.dir;var O: vec3f=ray_vs.orig;var negD=vec3i(lessThan(D, vec3f(0,0,0)));var voxel0: i32=negD.x | (negD.y<<1) | (negD.z<<2);var t0: vec3f=-O*invD;var t1=(vec3f(1.0)-O)*invD;var maxLod: i32= i32(highestMipLevel);var stackLevel: i32=0;
#if VOXEL_MARCH_DIAGNOSTIC_INFO_OPTION
var steps: u32=0u;
#endif
stack[stackLevel]=maxLod<<24;stackLevel++;while (stackLevel>0) {stackLevel=stackLevel-1;var elem: i32=stack[stackLevel];var Coords: vec4i =
vec4i(elem & 0xFF,(elem>>8) & 0xFF,(elem>>16) & 0xFF,elem>>24);if (Coords.w==0) {
#if VOXEL_MARCH_DIAGNOSTIC_INFO_OPTION
*voxel_march_diagnostic_info.heat= f32(steps)/24.0;
#endif
return true;}
#if VOXEL_MARCH_DIAGNOSTIC_INFO_OPTION
++steps;
#endif
var invRes: f32=exp2(f32(Coords.w-maxLod));var bbmin: vec3f=invRes*vec3f(Coords.xyz+negD);var bbmax: vec3f=invRes*vec3f(Coords.xyz-negD+vec3i(1));var mint: vec3f=mix(t0,t1,bbmin);var maxt: vec3f=mix(t0,t1,bbmax);var midt: vec3f=0.5*(mint+maxt);mint.x=max(0.0,mint.x);midt.x=max(0.0,midt.x);var nodeMask: u32= u32(
round(textureLoad(voxelGridSampler,Coords.xyz,Coords.w).x*255.0));Coords.w--;var voxelBit: u32=u32(voxel0);Coords=vec4i((Coords.xyz<<vec3u(1))+negD,Coords.w);var packedCoords: i32 =
Coords.x | (Coords.y<<8) | (Coords.z<<16) | (Coords.w<<24);if (max(mint.x,max(mint.y,mint.z))<min(midt.x,min(midt.y,midt.z)) &&
((1u<<voxelBit) & nodeMask) != 0) {stack[stackLevel]=packedCoords;stackLevel++;}
voxelBit ^= 0x1;packedCoords ^= 0x00001;if (max(midt.x,max(mint.y,mint.z))<min(maxt.x,min(midt.y,midt.z)) &&
((1u<<voxelBit) & nodeMask) != 0) {stack[stackLevel]=packedCoords;stackLevel++;}
voxelBit ^= 0x2;packedCoords ^= 0x00100;if (max(midt.x,max(midt.y,mint.z))<min(maxt.x,min(maxt.y,midt.z)) &&
((1u<<voxelBit) & nodeMask) != 0) {stack[stackLevel]=packedCoords;stackLevel++;}
voxelBit ^= 0x1;packedCoords ^= 0x00001;if (max(mint.x,max(midt.y,mint.z))<min(midt.x,min(maxt.y,midt.z)) &&
((1u<<voxelBit) & nodeMask) != 0) {stack[stackLevel]=packedCoords;stackLevel++;}
voxelBit ^= 0x4;packedCoords ^= 0x10000;if (max(mint.x,max(midt.y,midt.z))<min(midt.x,min(maxt.y,maxt.z)) &&
((1u<<voxelBit) & nodeMask) != 0) {stack[stackLevel]=packedCoords;stackLevel++;}
voxelBit ^= 0x1;packedCoords ^= 0x00001;if (max(midt.x,max(midt.y,midt.z))<min(maxt.x,min(maxt.y,maxt.z)) &&
((1u<<voxelBit) & nodeMask) != 0) {stack[stackLevel]=packedCoords;stackLevel++;}
voxelBit ^= 0x2;packedCoords ^= 0x00100;if (max(midt.x,max(mint.y,midt.z))<min(maxt.x,min(midt.y,maxt.z)) &&
((1u<<voxelBit) & nodeMask) != 0) {stack[stackLevel]=packedCoords;stackLevel++;}
voxelBit ^= 0x1;packedCoords ^= 0x00001;if (max(mint.x,max(mint.y,midt.z))<min(midt.x,min(midt.y,maxt.z)) &&
((1u<<voxelBit) & nodeMask) != 0) {stack[stackLevel]=packedCoords;stackLevel++;}}
#if VOXEL_MARCH_DIAGNOSTIC_INFO_OPTION
*voxel_march_diagnostic_info.heat= f32(steps)/24.0;
#endif
return false;}
fn linearizeDepth(depth: f32,near: f32,far: f32)->f32 {return (near*far)/(far-depth*(far-near));}
fn screenSpaceShadow(csOrigin: vec3f,csDirection: vec3f,csZBufferSize: vec2f,
nearPlaneZ: f32,farPlaneZ: f32,noise: f32)->f32 {
#ifdef RIGHT_HANDED
var csZDir : f32=-1.0;
#else 
var csZDir : f32=1.0;
#endif
var ssSamples: f32=SSSsamples;var ssMaxDist: f32=SSSmaxDistance;var ssStride: f32=SSSstride;var ssThickness: f32=SSSthickness;var rayLength: f32 =
select(ssMaxDist,(nearPlaneZ-csOrigin.z)/csDirection.z,
csZDir*(csOrigin.z+ssMaxDist*csDirection.z)<csZDir*nearPlaneZ);var csEndPoint: vec3f=csOrigin+rayLength*csDirection;var H0: vec4f=uniforms.projMtx*vec4f(csOrigin,1.0);var H1: vec4f=uniforms.projMtx*vec4f(csEndPoint,1.0);var Z0=vec2f(csOrigin.z ,1.0)/H0.w;var Z1=vec2f(csEndPoint.z,1.0)/H1.w;var P0=csZBufferSize*(0.5*H0.xy*Z0.y+0.5);var P1=csZBufferSize*(0.5*H1.xy*Z1.y+0.5);P1+= vec2f(select(0.0,0.01,distanceSquared(P0,P1)<0.0001));var delta: vec2f=P1-P0;var permute: bool=false;if (abs(delta.x)<abs(delta.y)) {permute=true;P0=P0.yx;P1=P1.yx;delta=delta.yx;}
var stepDirection: f32=sign(delta.x);var invdx: f32=stepDirection/delta.x;var dP: vec2f=ssStride* vec2f(stepDirection,invdx*delta.y);var dZ: vec2f=ssStride*invdx*(Z1-Z0);var opacity: f32=0.0;var P: vec2f=P0+noise*dP;var Z: vec2f=Z0+noise*dZ;var end: f32=P1.x*stepDirection;var rayZMax=csZDir*Z.x/Z.y;var sceneDepth=rayZMax;Z+=dZ;for (var stepCount: f32=0.0; 
opacity<1.0 && P.x*stepDirection<end && sceneDepth>0.0 && stepCount<ssSamples;stepCount+=1) { 
var coords=vec2i(select(P,P.yx,permute));sceneDepth=textureLoad(depthSampler,coords,0).x;sceneDepth=linearizeDepth(sceneDepth,nearPlaneZ,farPlaneZ);sceneDepth=csZDir*sceneDepth;if (sceneDepth<=0.0) {break;}
var rayZMin: f32=rayZMax;rayZMax=csZDir*Z.x/Z.y;opacity+=max(opacity,step(rayZMax,sceneDepth+ssThickness)*step(sceneDepth,rayZMin));P+=dP;Z+=dZ;}
return opacity;}
#if VOXEL_MARCH_DIAGNOSTIC_INFO_OPTION
fn voxelShadow(wsOrigin: vec3f,wsDirection: vec3f,wsNormal: vec3f,
DitherNoise: vec2f,
voxel_march_diagnostic_info: ptr<function,VoxelMarchDiagnosticInfo>)->f32 {
#else
fn voxelShadow(wsOrigin: vec3f,wsDirection: vec3f,wsNormal: vec3f,
DitherNoise: vec2f)->f32 {
#endif
var vxResolution: f32=f32(textureDimensions(voxelGridSampler,0).x);var T: vec3f;var B: vec3f;genTB(wsDirection,&T,&B);var DitherXY: vec2f=sqrt(DitherNoise.x)* vec2f(cos(2.0*PI*DitherNoise.y),
sin(2.0*PI*DitherNoise.y));var Dithering : vec3f=(uniforms.voxelBiasParameters.x*wsNormal +
uniforms.voxelBiasParameters.y*wsDirection +
DitherXY.x*T+DitherXY.y*B) /
vxResolution;var O: vec3f=0.5*wsOrigin+0.5+Dithering;var ray_vs=make_ray(O,wsDirection,0.0,10.0);var voxel_aabb: AABB3f;voxel_aabb.m_min=vec3f(0);voxel_aabb.m_max=vec3f(1);var near: f32=0;var far: f32=0;if (!ray_box_intersection(voxel_aabb,ray_vs,&near,&far)) {return 0.0;}
ray_vs.t_min=max(ray_vs.t_min,near);ray_vs.t_max=min(ray_vs.t_max,far);
#if VOXEL_MARCH_DIAGNOSTIC_INFO_OPTION
return select(0.0f,1.0f,anyHitVoxels(ray_vs,voxel_march_diagnostic_info));
#else
return select(0.0f,1.0f,anyHitVoxels(ray_vs));
#endif
}
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var nbDirs=u32(SHADOWdirs);var frameId=u32(SHADOWframe);var envRot: f32=SHADOWenvRot;var Resolution: vec2f= vec2f(textureDimensions(depthSampler,0));var currentPixel=vec2i(fragmentInputs.vUV*Resolution);var GlobalIndex =
(frameId*u32(Resolution.y)+u32(currentPixel.y))*u32(Resolution.x) +
u32(currentPixel.x);var N : vec3f=textureLoad(worldNormalSampler,currentPixel,0).xyz;if (length(N)<0.01) {fragmentOutputs.color=vec4f(1.0,1.0,0.0,1.0);return fragmentOutputs;}
var normalizedRotation: f32=envRot/(2.0*PI);var depth : f32=textureLoad(depthSampler,currentPixel,0).x;
#ifndef IS_NDC_HALF_ZRANGE
depth=depth*2.0-1.0;
#endif
var temp : vec2f=(vec2f(currentPixel)+vec2f(0.5))*2.0/Resolution -
vec2f(1.0);var VP : vec4f=uniforms.invProjMtx*vec4f(temp.x,-temp.y,depth,1.0);VP/=VP.w;N=normalize(N);var noise : vec3f=textureLoad(blueNoiseSampler,currentPixel & vec2i(0xFF),0).xyz;noise.z=fract(noise.z+goldenSequence(frameId*nbDirs));
#ifdef VOXEL_MARCH_DIAGNOSTIC_INFO_OPTION
var heat: f32=0.0f;
#endif
var shadowAccum: f32=0.001;var specShadowAccum: f32=0.001;var sampleWeight : f32=0.001;
#ifdef COLOR_SHADOWS
var totalLight: vec3f=vec3f(0.001);var shadowedLight: vec3f=vec3f(0.0);
#endif
for (var i: u32=0; i<nbDirs; i++) {var dirId: u32=nbDirs*GlobalIndex+i;var L: vec4f;var T: vec2f;{var r: vec2f=plasticSequence(frameId*nbDirs+i);r=fract(r+ vec2f(2.0)*abs(noise.xy- vec2f(0.5)));T.x=textureSampleLevel(icdfSampler,icdfSamplerSampler,vec2f(r.x,0.0),0.0).x;T.y=textureSampleLevel(icdfSampler,icdfSamplerSampler,vec2f(T.x,r.y),0.0).y;L= vec4f(uv_to_normal(vec2f(T.x-normalizedRotation,T.y)),0);
#ifndef RIGHT_HANDED
L.z*=-1.0;
#endif
}
#ifdef COLOR_SHADOWS
var lightDir: vec3f=uv_to_normal(vec2f(1.0-fract(T.x+0.25),T.y));var ibl: vec3f=textureSampleLevel(iblSampler,iblSamplerSampler,lightDir,0.0).xyz;var pdf: f32=textureSampleLevel(icdfSampler,icdfSamplerSampler,T,0.0).z;
#endif
var cosNL: f32=dot(N,L.xyz);var opacity: f32=0.0;if (cosNL>0.0) {var VP2: vec4f=VP;VP2.y*=-1.0;var unormWP : vec4f=uniforms.invViewMtx*VP2;var WP: vec3f=(uniforms.wsNormalizationMtx*unormWP).xyz;var vxNoise: vec2f=vec2f(uint2float(hash(dirId*2)),uint2float(hash(dirId*2+1)));
#ifdef VOXEL_MARCH_DIAGNOSTIC_INFO_OPTION
VoxelMarchDiagnosticInfo voxel_march_diagnostic_info;opacity=max(opacity,
uniforms.shadowOpacity.x*voxelShadow(WP,L.xyz,N,vxNoise,
voxel_march_diagnostic_info));heat+=voxel_march_diagnostic_info.heat;
#else
opacity =
max(opacity,uniforms.shadowOpacity.x*voxelShadow(WP,L.xyz,N,vxNoise));
#endif
var VL : vec3f=(uniforms.viewMtx*L).xyz;
#ifdef RIGHT_HANDED
var nearPlaneZ: f32=-2.0*uniforms.projMtx[3][2]/(uniforms.projMtx[2][2]-1.0); 
var farPlaneZ: f32=-uniforms.projMtx[3][2]/(uniforms.projMtx[2][2]+1.0);
#else
var nearPlaneZ: f32=-2.0*uniforms.projMtx[3][2]/(uniforms.projMtx[2][2]+1.0); 
var farPlaneZ: f32=-uniforms.projMtx[3][2]/(uniforms.projMtx[2][2]-1.0);
#endif
var ssShadow: f32=uniforms.shadowOpacity.y *
screenSpaceShadow(VP2.xyz,VL,Resolution,nearPlaneZ,farPlaneZ,
abs(2.0*noise.z-1.0));opacity=max(opacity,ssShadow);
#ifdef COLOR_SHADOWS
var light: vec3f=select(vec3f(0.0),vec3f(cosNL)/vec3f(pdf)*ibl,pdf>1e-6);shadowedLight+=light*opacity;totalLight+=light;
#else
var rcos: f32=1.0-cosNL;shadowAccum+=(1.0-opacity*(1.0-pow(rcos,8.0)));sampleWeight+=1.0;var VR : vec3f=abs((uniforms.viewMtx*vec4f(reflect(-L.xyz,N),0.0)).xyz);specShadowAccum+=max(1.0-(opacity*pow(VR.z,8.0)),0.0);
#endif
}
noise.z=fract(noise.z+GOLD);}
#ifdef COLOR_SHADOWS
var shadow: vec3f=(totalLight-shadowedLight)/totalLight;var maxShadow: f32=max(max(shadow.x,max(shadow.y,shadow.z)),1.0);fragmentOutputs.color=vec4f(shadow/maxShadow,1.0);
#else
#ifdef VOXEL_MARCH_DIAGNOSTIC_INFO_OPTION
fragmentOutputs.color =
vec4f(shadowAccum/sampleWeight,specShadowAccum/sampleWeight,heat/sampleWeight,1.0);
#else
fragmentOutputs.color=vec4f(shadowAccum/sampleWeight,specShadowAccum/sampleWeight,0.0,1.0);
#endif
#endif
}`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const iblShadowVoxelTracingPixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=iblShadowVoxelTracing.fragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/iblShadowDebug.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "iblShadowDebugPixelShaderWGSL",
    ()=>iblShadowDebugPixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
;
const name = "iblShadowDebugPixelShader";
const shader = `varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;var debugSamplerSampler: sampler;var debugSampler: texture_2d<f32>;uniform sizeParams: vec4f;
#define offsetX uniforms.sizeParams.x
#define offsetY uniforms.sizeParams.y
#define widthScale uniforms.sizeParams.z
#define heightScale uniforms.sizeParams.w
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var uv: vec2f =
vec2f((offsetX+fragmentInputs.vUV.x)*widthScale,(offsetY+fragmentInputs.vUV.y)*heightScale);var background: vec4f=textureSample(textureSampler,textureSamplerSampler,fragmentInputs.vUV);var debugColour: vec4f=textureSample(debugSampler,debugSamplerSampler,fragmentInputs.vUV);if (uv.x<0.0 || uv.x>1.0 || uv.y<0.0 || uv.y>1.0) {fragmentOutputs.color=background;} else {fragmentOutputs.color=vec4f(mix(debugColour.rgb,background.rgb,0.0),1.0);}}`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const iblShadowDebugPixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=iblShadowDebug.fragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/iblShadowSpatialBlur.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "iblShadowSpatialBlurPixelShaderWGSL",
    ()=>iblShadowSpatialBlurPixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
;
const name = "iblShadowSpatialBlurPixelShader";
const shader = `#define PI 3.1415927
varying vUV: vec2f;var depthSampler: texture_2d<f32>;var worldNormalSampler: texture_2d<f32>;var voxelTracingSampler : texture_2d<f32>;uniform blurParameters: vec4f;
#define stridef uniforms.blurParameters.x
#define worldScale uniforms.blurParameters.y
const weights=array<f32,5>(0.0625,0.25,0.375,0.25,0.0625);const nbWeights: i32=5;fn max2(v: vec2f,w: vec2f)->vec2f {return vec2f(max(v.x,w.x),max(v.y,w.y));}
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var gbufferRes=vec2f(textureDimensions(depthSampler,0));var gbufferPixelCoord= vec2i(fragmentInputs.vUV*gbufferRes);var shadowRes=vec2f(textureDimensions(voxelTracingSampler,0));var shadowPixelCoord= vec2i(fragmentInputs.vUV*shadowRes);var N: vec3f=textureLoad(worldNormalSampler,gbufferPixelCoord,0).xyz;if (length(N)<0.01) {fragmentOutputs.color=vec4f(1.0,1.0,0.0,1.0);return fragmentOutputs;}
var depth: f32=-textureLoad(depthSampler,gbufferPixelCoord,0).x;var X: vec4f= vec4f(0.0);for(var y: i32=0; y<nbWeights; y++) {for(var x: i32=0; x<nbWeights; x++) {var gBufferCoords: vec2i=gbufferPixelCoord+i32(stridef)*vec2i(x-(nbWeights>>1),y-(nbWeights>>1));var shadowCoords: vec2i=shadowPixelCoord+i32(stridef)*vec2i(x-(nbWeights>>1),y-(nbWeights>>1));var T : vec3f=textureLoad(voxelTracingSampler,shadowCoords,0).xyz;var ddepth: f32=-textureLoad(depthSampler,gBufferCoords,0).x-depth;var dN: vec3f=textureLoad(worldNormalSampler,gBufferCoords,0).xyz-N;var w: f32=weights[x]*weights[y] *
exp2(max(-1000.0/(worldScale*worldScale),-0.5) *
(ddepth*ddepth) -
1e1*dot(dN,dN));X+= vec4f(w*T.x,w*T.y,w*T.z,w);}}
fragmentOutputs.color= vec4f(X.x/X.w,X.y/X.w,X.z/X.w,1.0);}`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const iblShadowSpatialBlurPixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=iblShadowSpatialBlur.fragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/iblShadowAccumulation.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "iblShadowAccumulationPixelShaderWGSL",
    ()=>iblShadowAccumulationPixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
;
const name = "iblShadowAccumulationPixelShader";
const shader = `varying vUV: vec2f;uniform accumulationParameters: vec4f;
#define remanence uniforms.accumulationParameters.x
#define resetb uniforms.accumulationParameters.y
#define sceneSize uniforms.accumulationParameters.z
var motionSampler: texture_2d<f32>;var positionSampler: texture_2d<f32>;var spatialBlurSampler : texture_2d<f32>;var oldAccumulationSamplerSampler: sampler;var oldAccumulationSampler: texture_2d<f32>;var prevPositionSamplerSampler: sampler;var prevPositionSampler: texture_2d<f32>;fn max2(v: vec2f,w: vec2f)->vec2f { 
return vec2f(max(v.x,w.x),max(v.y,w.y)); }
fn lessThan(x: vec2f,y: vec2f)->vec2<bool> {return x<y;}
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var reset: bool= bool(resetb);var gbufferRes : vec2f=vec2f(textureDimensions(positionSampler,0));var gbufferPixelCoord: vec2i= vec2i(input.vUV*gbufferRes);var shadowRes : vec2f=vec2f(textureDimensions(spatialBlurSampler,0));var shadowPixelCoord: vec2i= vec2i(input.vUV*shadowRes);var LP: vec4f=textureLoad(positionSampler,gbufferPixelCoord,0);if (0.0==LP.w) {fragmentOutputs.color=vec4f(1.0,0.0,0.0,1.0);return fragmentOutputs;}
var velocityColor: vec2f=textureLoad(motionSampler,gbufferPixelCoord,0).xy;var prevCoord: vec2f=input.vUV+velocityColor;var PrevLP: vec3f=textureSampleLevel(prevPositionSampler,prevPositionSamplerSampler,prevCoord,0.0).xyz;var PrevShadows: vec4f=textureSampleLevel(oldAccumulationSampler,oldAccumulationSamplerSampler,prevCoord,0.0);var newShadows : vec3f=textureLoad(spatialBlurSampler,shadowPixelCoord,0).xyz;PrevShadows.a=select(1.0,max(PrevShadows.a/(1.0+PrevShadows.a),1.0-remanence),!reset && all(lessThan(abs(prevCoord- vec2f(0.5)), vec2f(0.5))) &&
distance(LP.xyz,PrevLP)<5e-2*sceneSize);PrevShadows=max( vec4f(0.0),PrevShadows);fragmentOutputs.color= vec4f(mix(PrevShadows.x,newShadows.x,PrevShadows.a),
mix(PrevShadows.y,newShadows.y,PrevShadows.a),
mix(PrevShadows.z,newShadows.z,PrevShadows.a),PrevShadows.a);}`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const iblShadowAccumulationPixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=iblShadowAccumulation.fragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/iblShadowsCombine.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "iblShadowsCombinePixelShaderWGSL",
    ()=>iblShadowsCombinePixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
;
const name = "iblShadowsCombinePixelShader";
const shader = `varying vUV: vec2f;var shadowSamplerSampler : sampler;var shadowSampler : texture_2d<f32>;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;uniform shadowOpacity: f32;@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var shadow
: vec3f =
textureSample(shadowSampler,shadowSamplerSampler,input.vUV).rgb;var color
: vec3f =
textureSample(textureSampler,textureSamplerSampler,input.vUV).rgb;var shadowValue: f32=mix(1.0,shadow.x,uniforms.shadowOpacity);fragmentOutputs.color=vec4f(color*shadowValue,1.0);}`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const iblShadowsCombinePixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=iblShadowsCombine.fragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/iblCombineVoxelGrids.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "iblCombineVoxelGridsPixelShaderWGSL",
    ()=>iblCombineVoxelGridsPixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
;
const name = "iblCombineVoxelGridsPixelShader";
const shader = `varying vUV: vec2f;var voxelXaxisSamplerSampler: sampler;var voxelXaxisSampler: texture_3d<f32>;var voxelYaxisSamplerSampler: sampler;var voxelYaxisSampler: texture_3d<f32>;var voxelZaxisSamplerSampler: sampler;var voxelZaxisSampler: texture_3d<f32>;uniform layer: f32;@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var coordZ: vec3f= vec3f(fragmentInputs.vUV.x,fragmentInputs.vUV.y,uniforms.layer);var voxelZ: f32=textureSample(voxelZaxisSampler,voxelZaxisSamplerSampler,coordZ).r;var coordX: vec3f= vec3f(1.0-uniforms.layer,fragmentInputs.vUV.y,fragmentInputs.vUV.x);var voxelX: f32=textureSample(voxelXaxisSampler,voxelXaxisSamplerSampler,coordX).r;var coordY: vec3f= vec3f(uniforms.layer,fragmentInputs.vUV.x,fragmentInputs.vUV.y);var voxelY: f32=textureSample(voxelYaxisSampler,voxelYaxisSamplerSampler,coordY).r;var voxel=select(0.0,1.0,(voxelX>0.0 || voxelY>0.0 || voxelZ>0.0));fragmentOutputs.color= vec4f( vec3f(voxel),1.0);}`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const iblCombineVoxelGridsPixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=iblCombineVoxelGrids.fragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/iblGenerateVoxelMip.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "iblGenerateVoxelMipPixelShaderWGSL",
    ()=>iblGenerateVoxelMipPixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
;
const name = "iblGenerateVoxelMipPixelShader";
const shader = `varying vUV: vec2f;var srcMip: texture_3d<f32>;uniform layerNum: i32;@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var Coords=vec3i(2)*vec3i(vec2i(fragmentInputs.position.xy),uniforms.layerNum);var tex =
(u32(select(0u,1u,textureLoad(srcMip,Coords+vec3i(0,0,0),0).x>0.0f))
<< 0u) |
(u32(select(0u,1u,textureLoad(srcMip,Coords+vec3i(1,0,0),0).x>0.0f))
<< 1u) |
(u32(select(0u,1u,textureLoad(srcMip,Coords+vec3i(0,1,0),0).x>0.0f))
<< 2u) |
(u32(select(0u,1u,textureLoad(srcMip,Coords+vec3i(1,1,0),0).x>0.0f))
<< 3u) |
(u32(select(0u,1u,textureLoad(srcMip,Coords+vec3i(0,0,1),0).x>0.0f))
<< 4u) |
(u32(select(0u,1u,textureLoad(srcMip,Coords+vec3i(1,0,1),0).x>0.0f))
<< 5u) |
(u32(select(0u,1u,textureLoad(srcMip,Coords+vec3i(0,1,1),0).x>0.0f))
<< 6u) |
(u32(select(0u,1u,textureLoad(srcMip,Coords+vec3i(1,1,1),0).x>0.0f))
<< 7u);fragmentOutputs.color=vec4f( f32(tex)/255.0f,0.0f,0.0f,1.0);}`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const iblGenerateVoxelMipPixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=iblGenerateVoxelMip.fragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/iblShadowGBufferDebug.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "iblShadowGBufferDebugPixelShaderWGSL",
    ()=>iblShadowGBufferDebugPixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
;
const name = "iblShadowGBufferDebugPixelShader";
const shader = `varying vUV : vec2f;var textureSamplerSampler : sampler;var textureSampler : texture_2d<f32>;var depthSamplerSampler : sampler;var depthSampler : texture_2d<f32>;var normalSamplerSampler : sampler;var normalSampler : texture_2d<f32>;var positionSamplerSampler : sampler;var positionSampler : texture_2d<f32>;var velocitySamplerSampler : sampler;var velocitySampler : texture_2d<f32>;uniform sizeParams : vec4f;
#define offsetX uniforms.sizeParams.x
#define offsetY uniforms.sizeParams.y
#define widthScale uniforms.sizeParams.z
#define heightScale uniforms.sizeParams.w
@fragment fn main(input : FragmentInputs)->FragmentOutputs {var uv : vec2f=
vec2f((offsetX+input.vUV.x)*widthScale,(offsetY+input.vUV.y)*heightScale);var backgroundColour: vec4f=textureSample(textureSampler,textureSamplerSampler,input.vUV).rgba;var depth : vec4f=textureSample(depthSampler,depthSamplerSampler,input.vUV);var worldNormal: vec4f=textureSample(normalSampler,normalSamplerSampler,input.vUV);var worldPosition : vec4f=textureSample(positionSampler,positionSamplerSampler,input.vUV);var velocityLinear : vec4f=textureSample(velocitySampler,velocitySamplerSampler,input.vUV);if (uv.x<0.0 || uv.x>1.0 || uv.y<0.0 || uv.y>1.0) {fragmentOutputs.color=backgroundColour;} else {if (uv.x<=0.25) {fragmentOutputs.color=vec4f(depth.rgb,1.0);} else if (uv.x<=0.5) {velocityLinear =
vec4f(velocityLinear.r*0.5+0.5,velocityLinear.g*0.5+0.5,
velocityLinear.b,velocityLinear.a);fragmentOutputs.color=vec4f(velocityLinear.rgb,1.0);} else if (uv.x<=0.75) {fragmentOutputs.color=vec4f(worldPosition.rgb,1.0);} else {fragmentOutputs.color=vec4f(worldNormal.rgb,1.0);}}}`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const iblShadowGBufferDebugPixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=iblShadowGBufferDebug.fragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/iblCdfx.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "iblCdfxPixelShaderWGSL",
    ()=>iblCdfxPixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
;
const name = "iblCdfxPixelShader";
const shader = `#define PI 3.1415927
varying vUV: vec2f;var cdfy: texture_2d<f32>;@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var cdfyRes=textureDimensions(cdfy,0);var currentPixel=vec2u(fragmentInputs.position.xy);var cdfx: f32=0.0;for (var x: u32=1; x<=currentPixel.x; x++) {cdfx+=textureLoad(cdfy, vec2u(x-1,cdfyRes.y-1),0).x;}
fragmentOutputs.color= vec4f( vec3f(cdfx),1.0);}`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const iblCdfxPixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=iblCdfx.fragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/iblCdfy.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "iblCdfyPixelShaderWGSL",
    ()=>iblCdfyPixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
;
const name = "iblCdfyPixelShader";
const shader = `varying vUV : vec2f;
#include <helperFunctions>
#ifdef IBL_USE_CUBE_MAP
var iblSourceSampler: sampler;var iblSource: texture_cube<f32>;
#else
var iblSourceSampler: sampler;var iblSource: texture_2d<f32>;
#endif
uniform iblHeight: i32;
#ifdef IBL_USE_CUBE_MAP
fn fetchCube(uv: vec2f)->f32 {var direction: vec3f=equirectangularToCubemapDirection(uv);return sin(PI*uv.y) *
dot(textureSampleLevel(iblSource,iblSourceSampler,direction,0.0)
.rgb,
LuminanceEncodeApprox);}
#else
fn fetchPanoramic(Coords: vec2i,envmapHeight: f32)->f32 {return sin(PI*(f32(Coords.y)+0.5)/envmapHeight) *
dot(textureLoad(iblSource,Coords,0).rgb,LuminanceEncodeApprox);}
#endif
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var coords: vec2i= vec2i(fragmentInputs.position.xy);var cdfy: f32=0.0;for (var y: i32=1; y<=coords.y; y++) {
#ifdef IBL_USE_CUBE_MAP
var uv: vec2f= vec2f(input.vUV.x,( f32(y-1)+0.5)/ f32(uniforms.iblHeight));cdfy+=fetchCube(uv);
#else
cdfy+=fetchPanoramic( vec2i(coords.x,y-1), f32(uniforms.iblHeight));
#endif
}
fragmentOutputs.color= vec4f(cdfy,0.0,0.0,1.0);}`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const iblCdfyPixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=iblCdfy.fragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/iblIcdf.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "iblIcdfPixelShaderWGSL",
    ()=>iblIcdfPixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$helperFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/helperFunctions.js [app-client] (ecmascript)");
;
;
const name = "iblIcdfPixelShader";
const shader = `#include<helperFunctions>
varying vUV: vec2f;
#ifdef IBL_USE_CUBE_MAP
var iblSourceSampler: sampler;var iblSource: texture_cube<f32>;
#else
var iblSourceSampler: sampler;var iblSource: texture_2d<f32>;
#endif
var scaledLuminanceSamplerSampler : sampler;var scaledLuminanceSampler : texture_2d<f32>;var cdfx: texture_2d<f32>;var cdfy: texture_2d<f32>;fn fetchLuminance(coords: vec2f)->f32 {
#ifdef IBL_USE_CUBE_MAP
var direction: vec3f=equirectangularToCubemapDirection(coords);var color: vec3f=textureSampleLevel(iblSource,iblSourceSampler,direction,0.0).rgb;
#else
var color: vec3f=textureSampleLevel(iblSource,iblSourceSampler,coords,0.0).rgb;
#endif
return dot(color,LuminanceEncodeApprox);}
fn fetchCDFx(x: u32)->f32 {return textureLoad(cdfx, vec2u(x,0),0).x;}
fn bisectx(size: u32,targetValue: f32)->f32
{var a: u32=0;var b=size-1;while (b-a>1) {var c: u32=(a+b)>>1;if (fetchCDFx(c)<targetValue) {a=c;}
else {b=c;}}
return mix( f32(a), f32(b),(targetValue-fetchCDFx(a))/(fetchCDFx(b)-fetchCDFx(a)))/ f32(size-1);}
fn fetchCDFy(y: u32,invocationId: u32)->f32 {return textureLoad(cdfy, vec2u(invocationId,y),0).x;}
fn bisecty(size: u32,targetValue: f32,invocationId: u32)->f32
{var a: u32=0;var b=size-1;while (b-a>1) {var c=(a+b)>>1;if (fetchCDFy(c,invocationId)<targetValue) {a=c;}
else {b=c;}}
return mix( f32(a), f32(b),(targetValue-fetchCDFy(a,invocationId))/(fetchCDFy(b,invocationId)-fetchCDFy(a,invocationId)))/ f32(size-1);}
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var cdfxSize: vec2u=textureDimensions(cdfx,0);var cdfWidth: u32=cdfxSize.x;var icdfWidth: u32=cdfWidth-1;var currentPixel: vec2u= vec2u(fragmentInputs.position.xy);var outputColor: vec3f=vec3f(1.0);if (currentPixel.x==0)
{outputColor.x= 0.0;}
else if (currentPixel.x==icdfWidth-1) {outputColor.x= 1.0;} else {var targetValue: f32=fetchCDFx(cdfWidth-1)*input.vUV.x;outputColor.x= bisectx(cdfWidth,targetValue);}
var cdfySize: vec2u=textureDimensions(cdfy,0);var cdfHeight: u32=cdfySize.y;if (currentPixel.y==0) {outputColor.y= 0.0;}
else if (currentPixel.y==cdfHeight-2) {outputColor.y= 1.0;} else {var targetValue: f32=fetchCDFy(cdfHeight-1,currentPixel.x)*input.vUV.y;outputColor.y= max(bisecty(cdfHeight,targetValue,currentPixel.x),0.0);}
var size : vec2f=vec2f(textureDimensions(scaledLuminanceSampler,0));var highestMip: f32=floor(log2(size.x));var normalization : f32=textureSampleLevel(scaledLuminanceSampler,
scaledLuminanceSamplerSampler,
input.vUV,highestMip)
.r;var pixelLuminance: f32=fetchLuminance(input.vUV);outputColor.z=pixelLuminance/(2.0*PI*normalization);fragmentOutputs.color=vec4( outputColor,1.0);}`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const iblIcdfPixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=iblIcdf.fragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/iblCdfDebug.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "iblCdfDebugPixelShaderWGSL",
    ()=>iblCdfDebugPixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
;
const name = "iblCdfDebugPixelShader";
const shader = `#define PI 3.1415927
varying vUV: vec2f;var cdfySampler: sampler;var cdfy: texture_2d<f32>;var cdfxSampler: sampler;var cdfx: texture_2d<f32>;var icdfSampler: sampler;var icdf: texture_2d<f32>;
#ifdef IBL_USE_CUBE_MAP
var iblSourceSampler: sampler;var iblSource: texture_cube<f32>;
#else
var iblSourceSampler: sampler;var iblSource: texture_2d<f32>;
#endif
var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;
#define cdfyVSize (0.8/3.0)
#define cdfxVSize 0.1
#define cdfyHSize 0.5
uniform sizeParams: vec4f;
#ifdef IBL_USE_CUBE_MAP
fn equirectangularToCubemapDirection(uv: vec2f)->vec3f {var longitude: f32=uv.x*2.0*PI-PI;var latitude: f32=PI*0.5-uv.y*PI;var direction: vec3f;direction.x=cos(latitude)*sin(longitude);direction.y=sin(latitude);direction.z=cos(latitude)*cos(longitude);return direction;}
#endif
@fragment
fn main(input: FragmentInputs)->FragmentOutputs { 
var colour: vec3f= vec3f(0.0);var uv: vec2f =
vec2f((uniforms.sizeParams.x+input.vUV.x)*uniforms.sizeParams.z,(uniforms.sizeParams.y+input.vUV.y)*uniforms.sizeParams.w);var backgroundColour: vec3f=textureSample(textureSampler,textureSamplerSampler,input.vUV).rgb;var cdfxWidth: u32=textureDimensions(cdfx,0).x;var cdfyHeight: u32=textureDimensions(cdfy,0).y;const iblStart: f32=1.0-cdfyVSize;const pdfStart: f32=1.0-2.0*cdfyVSize;const cdfyStart: f32=1.0-3.0*cdfyVSize;const cdfxStart: f32=1.0-3.0*cdfyVSize-cdfxVSize;const icdfxStart: f32=1.0-3.0*cdfyVSize-2.0*cdfxVSize;
#ifdef IBL_USE_CUBE_MAP
var direction: vec3f=equirectangularToCubemapDirection(
(uv- vec2f(0.0,iblStart))* vec2f(1.0,1.0/cdfyVSize));var iblColour: vec3f=textureSampleLevel(iblSource,iblSourceSampler,direction,0.0).rgb;
#else
var iblColour: vec3f=textureSample(iblSource,iblSourceSampler,(uv- vec2f(0.0,iblStart)) *
vec2f(1.0,1.0/cdfyVSize))
.rgb;
#endif
var pdfColour: vec3f =
textureSample(icdf,icdfSampler,(uv- vec2f(0.0,pdfStart))* vec2f(1.0,1.0/cdfyVSize)).zzz;var cdfyColour: f32 =
textureSample(cdfy,cdfySampler,(uv- vec2f(0.0,cdfyStart))* vec2f(2.0,1.0/cdfyVSize)).r;var icdfyColour: f32 =
textureSample(icdf,icdfSampler,(uv- vec2f(0.5,cdfyStart))* vec2f(2.0,1.0/cdfyVSize)).g;var cdfxColour: f32 =
textureSample(cdfx,cdfxSampler,(uv- vec2f(0.0,cdfxStart))* vec2f(1.0,1.0/cdfxVSize)).r;var icdfxColour: f32=textureSample(icdf,icdfSampler,(uv- vec2f(0.0,icdfxStart)) *
vec2f(1.0,1.0/cdfxVSize)).r;if (uv.x<0.0 || uv.x>1.0 || uv.y<0.0 || uv.y>1.0) {colour=backgroundColour;} else if (uv.y>iblStart) {colour+=iblColour;} else if (uv.y>pdfStart) {colour+=pdfColour;} else if (uv.y>cdfyStart && uv.x<0.5) {colour.r+=cdfyColour/f32(cdfyHeight);} else if (uv.y>cdfyStart && uv.x>0.5) {colour.r+=icdfyColour;} else if (uv.y>cdfxStart) {colour.r+=cdfxColour/f32(cdfxWidth);} else if (uv.y>icdfxStart) {colour.r+=icdfxColour;}
fragmentOutputs.color =vec4(mix(colour,backgroundColour,0.5),1.0);}`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const iblCdfDebugPixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=iblCdfDebug.fragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/iblScaledLuminance.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "iblScaledLuminancePixelShaderWGSL",
    ()=>iblScaledLuminancePixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$helperFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/helperFunctions.js [app-client] (ecmascript)");
;
;
const name = "iblScaledLuminancePixelShader";
const shader = `#include<helperFunctions>
#ifdef IBL_USE_CUBE_MAP
var iblSourceSampler: sampler;var iblSource: texture_cube<f32>;
#else
var iblSourceSampler: sampler;var iblSource: texture_2d<f32>;
#endif
uniform iblHeight: i32;uniform iblWidth: i32;fn fetchLuminance(coords: vec2f)->f32 {
#ifdef IBL_USE_CUBE_MAP
var direction: vec3f=equirectangularToCubemapDirection(coords);var color: vec3f=textureSampleLevel(iblSource,iblSourceSampler,direction,0.0).rgb;
#else
var color: vec3f=textureSampleLevel(iblSource,iblSourceSampler,coords,0.0).rgb;
#endif
return dot(color,LuminanceEncodeApprox);}
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var deform: f32=sin(input.vUV.y*PI);var luminance: f32=fetchLuminance(input.vUV);fragmentOutputs.color=vec4f(vec3f(deform*luminance),1.0);}`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const iblScaledLuminancePixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=iblScaledLuminance.fragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/iblDominantDirection.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "iblDominantDirectionPixelShaderWGSL",
    ()=>iblDominantDirectionPixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$helperFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/helperFunctions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$importanceSampling$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/importanceSampling.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$pbrBRDFFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/pbrBRDFFunctions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$hdrFilteringFunctions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/hdrFilteringFunctions.js [app-client] (ecmascript)");
;
;
;
;
;
const name = "iblDominantDirectionPixelShader";
const shader = `#include<helperFunctions>
#include<importanceSampling>
#include<pbrBRDFFunctions>
#include<hdrFilteringFunctions>
var icdfSamplerSampler: sampler;var icdfSampler: texture_2d<f32>;@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var lightDir: vec3f=vec3f(0.0,0.0,0.0);for(var i: u32=0u; i<NUM_SAMPLES; i++)
{var Xi: vec2f=hammersley(i,NUM_SAMPLES);var T: vec2f;T.x=textureSampleLevel(icdfSampler,icdfSamplerSampler,vec2(Xi.x,0.0),0.0).x;T.y=textureSampleLevel(icdfSampler,icdfSamplerSampler,vec2(T.x,Xi.y),0.0).y;var Ls: vec3f=uv_to_normal(vec2f(1.0-fract(T.x+0.25),T.y));lightDir+=Ls;}
lightDir/=vec3f(f32(NUM_SAMPLES));fragmentOutputs.color=vec4f(lightDir,1.0);}`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const iblDominantDirectionPixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=iblDominantDirection.fragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/iblVoxelGrid2dArrayDebug.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "iblVoxelGrid2dArrayDebugPixelShaderWGSL",
    ()=>iblVoxelGrid2dArrayDebugPixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
;
const name = "iblVoxelGrid2dArrayDebugPixelShader";
const shader = `varying vUV: vec2f;var voxelTextureSampler: sampler;var voxelTexture: texture_3d<f32>;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;uniform slice: i32;@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var size: vec3u=textureDimensions(voxelTexture,0);var dimension: f32=sqrt( f32(size.z));var samplePos: vec2f=fract(input.vUV.xy* vec2f(dimension));var sampleIndex: u32= u32(floor(input.vUV.x* f32(dimension))+floor(input.vUV.y* f32(dimension))*dimension);var color=textureSample(voxelTexture,voxelTextureSampler, vec3f(samplePos.xy,sampleIndex)).rrr;color+=textureSample(textureSampler,textureSamplerSampler,input.vUV.xy).rgb;fragmentOutputs.color=vec4f(color,1.0);}`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const iblVoxelGrid2dArrayDebugPixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=iblVoxelGrid2dArrayDebug.fragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/iblVoxelGrid.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "iblVoxelGridPixelShaderWGSL",
    ()=>iblVoxelGridPixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
;
const name = "iblVoxelGridPixelShader";
const shader = `var voxel_storage: texture_storage_3d<rgba8unorm,write>;varying vNormalizedPosition: vec3f;flat varying f_swizzle: i32;@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var size: vec3f=vec3f(textureDimensions(voxel_storage));var normPos: vec3f=input.vNormalizedPosition.xyz;var outputColor: vec4f=vec4f(0.0,0.0,0.0,1.0);switch (input.f_swizzle) {case 0: {normPos=normPos.zxy; 
outputColor=vec4f(1.0,1.0,0.0,1.0);break;}
case 1: {normPos=normPos.yzx;outputColor=vec4f(1.0,1.0,1.0,1.0);break;}
default: {normPos=normPos.xyz;outputColor=vec4f(1.0,1.0,0.0,1.0);break;}}
textureStore(voxel_storage,vec3<i32>(i32(normPos.x*size.x),i32(normPos.y*size.y),i32(normPos.z*size.z)),outputColor);fragmentOutputs.color=vec4<f32>(vec3<f32>(normPos),1.);}`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const iblVoxelGridPixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=iblVoxelGrid.fragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/iblVoxelGrid.vertex.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "iblVoxelGridVertexShaderWGSL",
    ()=>iblVoxelGridVertexShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$morphTargetsVertexGlobalDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/morphTargetsVertexGlobalDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$morphTargetsVertexDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/morphTargetsVertexDeclaration.js [app-client] (ecmascript)");
;
;
;
const name = "iblVoxelGridVertexShader";
const shader = `#include <bakedVertexAnimationDeclaration>
#include <bonesDeclaration>
#include <helperFunctions>
#include <instancesDeclaration>
#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]
#ifdef VERTEX_PULLING_USE_INDEX_BUFFER
var<storage,read> indices : array<u32>;
#endif
var<storage,read> position : array<f32>;uniform world : mat4x4f;uniform invWorldScale: mat4x4f;varying vNormalizedPosition : vec3f;flat varying f_swizzle: i32;fn readVertexPosition(index : u32)->vec3f {var pos : vec3f;pos.x=position[index*3];pos.y=position[index*3+1];pos.z=position[index*3+2];return pos;}
fn readVertexIndex(index : u32)->u32 {
#ifndef VERTEX_PULLING_USE_INDEX_BUFFER
return index;
#else
#ifdef VERTEX_PULLING_INDEX_BUFFER_32BITS
return indices[index];
#else
let u32_index=index/2u;let bit_offset=(index & 1u)*16u;return (indices[u32_index]>>bit_offset) & 0xFFFFu;
#endif
#endif
}
fn calculateTriangleNormal(v0
: vec3<f32>,v1
: vec3<f32>,v2
: vec3<f32>)
->vec3<f32> {let edge1=v1-v0;let edge2=v2-v0;let triangleNormal=cross(edge1,edge2);let normalizedTriangleNormal=normalize(triangleNormal);return normalizedTriangleNormal;}
@vertex
fn main(input : VertexInputs)->FragmentInputs {var vertIdx=readVertexIndex(input.vertexIndex);var positionUpdated=readVertexPosition(vertIdx);
#include <morphTargetsVertexGlobal>
let inputPosition: vec3f=positionUpdated;
#include <morphTargetsVertex>(vertexInputs.position\\),inputPosition))[0..maxSimultaneousMorphTargets]
#include <instancesVertex>
#include <bakedVertexAnimation>
#include <bonesVertex>
let worldPos=finalWorld*vec4f(positionUpdated,1.0);vertexOutputs.position=uniforms.invWorldScale*worldPos;var provokingVertNum : u32=input.vertexIndex/3*3;var pos0=readVertexPosition(readVertexIndex(provokingVertNum));var pos1=readVertexPosition(readVertexIndex(provokingVertNum+1));var pos2=readVertexPosition(readVertexIndex(provokingVertNum+2));var N : vec3<f32>=calculateTriangleNormal(pos0,pos1,pos2);N=abs(N);if (N.x>N.y && N.x>N.z) {vertexOutputs.f_swizzle=0;vertexOutputs.position=vec4f(vertexOutputs.position.yzx,1.0);} else if (N.y>N.z) {vertexOutputs.f_swizzle=1;vertexOutputs.position=vec4f(vertexOutputs.position.zxy,1.0);} else {vertexOutputs.f_swizzle=2;vertexOutputs.position=vec4f(vertexOutputs.position.xyz,1.0);}
vertexOutputs.vNormalizedPosition=vertexOutputs.position.xyz*0.5+0.5;vertexOutputs.position.z =
vertexOutputs.vNormalizedPosition.z; }
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const iblVoxelGridVertexShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=iblVoxelGrid.vertex.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/iblVoxelGrid3dDebug.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "iblVoxelGrid3dDebugPixelShaderWGSL",
    ()=>iblVoxelGrid3dDebugPixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
;
const name = "iblVoxelGrid3dDebugPixelShader";
const shader = `varying vUV: vec2f;var voxelTextureSampler: sampler;var voxelTexture: texture_3d<f32>;var voxelSlabTextureSampler: sampler;var voxelSlabTexture: texture_2d<f32>;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;uniform sizeParams: vec4f;
#define offsetX uniforms.sizeParams.x
#define offsetY uniforms.sizeParams.y
#define widthScale uniforms.sizeParams.z
#define heightScale uniforms.sizeParams.w
uniform mipNumber: f32;@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var uv: vec2f =
vec2f((offsetX+input.vUV.x)*widthScale,(offsetY+input.vUV.y)*heightScale);var background: vec4f=textureSample(textureSampler,textureSamplerSampler,input.vUV);var voxelSlab: vec4f=textureSample(voxelSlabTexture,voxelSlabTextureSampler,input.vUV);var size: vec3u=textureDimensions(voxelTexture, i32(uniforms.mipNumber));var dimension: f32=ceil(sqrt( f32(size.z)));var samplePos: vec2f=fract(uv.xy* vec2f(dimension));var sampleIndex: u32= u32(floor(uv.x* f32(dimension)) +
floor(uv.y* f32(dimension))*dimension);var mip_separator: f32=0.0;if (samplePos.x<0.01 || samplePos.y<0.01) {mip_separator=1.0;}
var outBounds: bool=select(false,true,sampleIndex>size.z-1);sampleIndex=clamp(sampleIndex,0,size.z-1);var samplePosInt: vec2i= vec2i(samplePos.xy* vec2f(size.xy));var voxel: vec3f=textureLoad(voxelTexture,
vec3i(i32(samplePosInt.x),i32(samplePosInt.y),i32(sampleIndex)),
i32(uniforms.mipNumber)).rgb;if (uv.x<0.0 || uv.x>1.0 || uv.y<0.0 || uv.y>1.0) {fragmentOutputs.color=background;} else {if (outBounds) {voxel= vec3f(0.15,0.0,0.0);} else {voxel.r+=mip_separator;}
fragmentOutputs.color=vec4f(mix(background.rgb,voxelSlab.rgb,voxelSlab.a)+voxel,1.0);}}`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const iblVoxelGrid3dDebugPixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=iblVoxelGrid3dDebug.fragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/iblVoxelSlabDebug.vertex.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "iblVoxelSlabDebugVertexShaderWGSL",
    ()=>iblVoxelSlabDebugVertexShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
;
const name = "iblVoxelSlabDebugVertexShader";
const shader = `attribute position: vec3f;varying vNormalizedPosition: vec3f;uniform world: mat4x4f;uniform invWorldScale: mat4x4f;uniform cameraViewMatrix: mat4x4f;uniform projection: mat4x4f;uniform viewMatrix: mat4x4f;@vertex
fn main(input : VertexInputs)->FragmentInputs {var worldPosition: vec4f=(uniforms.world* vec4f(input.position,1.));vertexOutputs.position=uniforms.projection*uniforms.cameraViewMatrix*worldPosition;vertexOutputs.vNormalizedPosition=(uniforms.viewMatrix*uniforms.invWorldScale*worldPosition).rgb;vertexOutputs.vNormalizedPosition=vertexOutputs.vNormalizedPosition* vec3f(0.5)+ vec3f(0.5);}`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const iblVoxelSlabDebugVertexShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=iblVoxelSlabDebug.vertex.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/iblVoxelSlabDebug.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "iblVoxelSlabDebugPixelShaderWGSL",
    ()=>iblVoxelSlabDebugPixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
;
const name = "iblVoxelSlabDebugPixelShader";
const shader = `varying vNormalizedPosition: vec3f;uniform nearPlane: f32;uniform farPlane: f32;uniform stepSize: f32;@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var normPos: vec3f=input.vNormalizedPosition.xyz;var chunkSize: f32=uniforms.stepSize* f32(MAX_DRAW_BUFFERS);var numChunks: f32=1.0/chunkSize;var positionInChunk: f32=fract(normPos.z/chunkSize);var slab: f32=floor(positionInChunk* f32(MAX_DRAW_BUFFERS)) /
f32(MAX_DRAW_BUFFERS);if (normPos.x<0.0 || normPos.y<0.0 || normPos.z<0.0 ||
normPos.x>1.0 || normPos.y>1.0 || normPos.z>1.0) {fragmentOutputs.color= vec4f(0.0,0.0,0.0,0.0);} else {fragmentOutputs.color= vec4f(slab,0.0,0.0,0.75);}}`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const iblVoxelSlabDebugPixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=iblVoxelSlabDebug.fragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/oitBackBlend.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "oitBackBlendPixelShaderWGSL",
    ()=>oitBackBlendPixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
;
const name = "oitBackBlendPixelShader";
const shader = `var uBackColor: texture_2d<f32>;@fragment
fn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureLoad(uBackColor,vec2i(fragmentInputs.position.xy),0);if (fragmentOutputs.color.a==0.0) {discard;}}
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const oitBackBlendPixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=oitBackBlend.fragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/oitFinal.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "oitFinalPixelShaderWGSL",
    ()=>oitFinalPixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
;
const name = "oitFinalPixelShader";
const shader = `var uFrontColor: texture_2d<f32>;var uBackColor: texture_2d<f32>;@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var fragCoord: vec2i=vec2i(fragmentInputs.position.xy);var frontColor: vec4f=textureLoad(uFrontColor,fragCoord,0);var backColor: vec4f=textureLoad(uBackColor,fragCoord,0);var alphaMultiplier: f32=1.0-frontColor.a;fragmentOutputs.color=vec4f(
frontColor.rgb+alphaMultiplier*backColor.rgb,
frontColor.a+backColor.a
);}
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const oitFinalPixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=oitFinal.fragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/sprites.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "spritesPixelShaderWGSL",
    ()=>spritesPixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$fogFragmentDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/fogFragmentDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$logDepthDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/logDepthDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$logDepthFragment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/logDepthFragment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$fogFragment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/fogFragment.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$imageProcessingCompatibility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/imageProcessingCompatibility.js [app-client] (ecmascript)");
;
;
;
;
;
;
const name = "spritesPixelShader";
const shader = `uniform alphaTest: i32;varying vColor: vec4f;varying vUV: vec2f;var diffuseSamplerSampler: sampler;var diffuseSampler: texture_2d<f32>;
#include<fogFragmentDeclaration>
#include<logDepthDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
#ifdef PIXEL_PERFECT
fn uvPixelPerfect(uv: vec2f)->vec2f {var res: vec2f= vec2f(textureDimensions(diffuseSampler,0));var uvTemp=uv*res;var seam: vec2f=floor(uvTemp+0.5);uvTemp=seam+clamp((uvTemp-seam)/fwidth(uvTemp),vec2f(-0.5),vec2f(0.5));return uvTemp/res;}
#endif
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#ifdef PIXEL_PERFECT
var uv: vec2f=uvPixelPerfect(input.vUV);
#else
var uv: vec2f=input.vUV;
#endif
var color: vec4f=textureSample(diffuseSampler,diffuseSamplerSampler,uv);var fAlphaTest: f32= f32(uniforms.alphaTest);if (fAlphaTest != 0.)
{if (color.a<0.95) {discard;}}
color*=input.vColor;
#include<logDepthFragment>
#include<fogFragment>
fragmentOutputs.color=color;
#include<imageProcessingCompatibility>
#define CUSTOM_FRAGMENT_MAIN_END
}`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const spritesPixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=sprites.fragment.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/sprites.vertex.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "spritesVertexShaderWGSL",
    ()=>spritesVertexShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$fogVertexDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/fogVertexDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$logDepthDeclaration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/logDepthDeclaration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$ShadersInclude$2f$logDepthVertex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/ShadersInclude/logDepthVertex.js [app-client] (ecmascript)");
;
;
;
;
const name = "spritesVertexShader";
const shader = `attribute position: vec4f;attribute options: vec2f;attribute offsets: vec2f;attribute inverts: vec2f;attribute cellInfo: vec4f;attribute color: vec4f;uniform view: mat4x4f;uniform projection: mat4x4f;varying vUV: vec2f;varying vColor: vec4f;
#include<fogVertexDeclaration>
#include<logDepthDeclaration>
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {
#define CUSTOM_VERTEX_MAIN_BEGIN
var viewPos: vec3f=(uniforms.view* vec4f(input.position.xyz,1.0)).xyz; 
var cornerPos: vec2f;var angle: f32=input.position.w;var size: vec2f= vec2f(input.options.x,input.options.y);var offset: vec2f=input.offsets.xy;cornerPos= vec2f(offset.x-0.5,offset.y -0.5)*size;var rotatedCorner: vec3f;rotatedCorner.x=cornerPos.x*cos(angle)-cornerPos.y*sin(angle);rotatedCorner.y=cornerPos.x*sin(angle)+cornerPos.y*cos(angle);rotatedCorner.z=0.;viewPos+=rotatedCorner;vertexOutputs.position=uniforms.projection*vec4f(viewPos,1.0); 
vertexOutputs.vColor=input.color;var uvOffset: vec2f= vec2f(abs(offset.x-input.inverts.x),abs(1.0-offset.y-input.inverts.y));var uvPlace: vec2f=input.cellInfo.xy;var uvSize: vec2f=input.cellInfo.zw;vertexOutputs.vUV.x=uvPlace.x+uvSize.x*uvOffset.x;vertexOutputs.vUV.y=uvPlace.y+uvSize.y*uvOffset.y;
#ifdef FOG
vertexOutputs.vFogDistance=viewPos;
#endif
#include<logDepthVertex>
#define CUSTOM_VERTEX_MAIN_END
}`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const spritesVertexShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=sprites.vertex.js.map
}),
]);

//# sourceMappingURL=dcdbf_%40babylonjs_core_ShadersWGSL_fd747b7b._.js.map