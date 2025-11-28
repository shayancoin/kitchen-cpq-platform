(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/screenSpaceCurvature.fragment.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Do not edit.
__turbopack_context__.s([
    "screenSpaceCurvaturePixelShaderWGSL",
    ()=>screenSpaceCurvaturePixelShaderWGSL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/shaderStore.js [app-client] (ecmascript)");
;
const name = "screenSpaceCurvaturePixelShader";
const shader = `varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;var normalSampler: texture_2d<f32>;uniform curvature_ridge: f32;uniform curvature_valley: f32;
#ifndef CURVATURE_OFFSET
#define CURVATURE_OFFSET 1
#endif
fn curvature_soft_clamp(curvature: f32,control: f32)->f32
{if (curvature<0.5/control) {return curvature*(1.0-curvature*control);}
return 0.25/control;}
fn calculate_curvature(texel: vec2i,ridge: f32,valley: f32)->f32
{let normal_up =textureLoad(normalSampler,texel+vec2i(0, CURVATURE_OFFSET),0).rb;let normal_down =textureLoad(normalSampler,texel+vec2i(0,-CURVATURE_OFFSET),0).rb;let normal_left =textureLoad(normalSampler,texel+vec2i(-CURVATURE_OFFSET,0),0).rb;let normal_right=textureLoad(normalSampler,texel+vec2i( CURVATURE_OFFSET,0),0).rb;let normal_diff=((normal_up.g-normal_down.g)+(normal_right.r-normal_left.r));if (normal_diff<0.0) {return -2.0*curvature_soft_clamp(-normal_diff,valley);}
return 2.0*curvature_soft_clamp(normal_diff,ridge);}
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs
{let texel=vec2i(fragmentInputs.position.xy);let baseColor=textureSample(textureSampler,textureSamplerSampler,fragmentInputs.vUV);let curvature=calculate_curvature(texel,uniforms.curvature_ridge,uniforms.curvature_valley);fragmentOutputs.color=vec4f(baseColor.rgb*(curvature+1.0),baseColor.a);}
`;
// Sideeffect
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name]) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$shaderStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderStore"].ShadersStoreWGSL[name] = shader;
}
const screenSpaceCurvaturePixelShaderWGSL = {
    name,
    shader
}; //# sourceMappingURL=screenSpaceCurvature.fragment.js.map
}),
]);

//# sourceMappingURL=dcdbf_%40babylonjs_core_ShadersWGSL_screenSpaceCurvature_fragment_0589c620.js.map