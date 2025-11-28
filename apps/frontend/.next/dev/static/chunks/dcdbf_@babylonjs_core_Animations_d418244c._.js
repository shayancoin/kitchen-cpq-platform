(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Animations/animationRange.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Represents the range of an animation
 */ __turbopack_context__.s([
    "AnimationRange",
    ()=>AnimationRange
]);
class AnimationRange {
    /**
     * Initializes the range of an animation
     * @param name The name of the animation range
     * @param from The starting frame of the animation
     * @param to The ending frame of the animation
     */ constructor(/**The name of the animation range**/ name, /**The starting frame of the animation */ from, /**The ending frame of the animation*/ to){
        this.name = name;
        this.from = from;
        this.to = to;
    }
    /**
     * Makes a copy of the animation range
     * @returns A copy of the animation range
     */ clone() {
        return new AnimationRange(this.name, this.from, this.to);
    }
} //# sourceMappingURL=animationRange.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Animations/animation.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Animation",
    ()=>Animation,
    "_StaticOffsetValueColor3",
    ()=>_StaticOffsetValueColor3,
    "_StaticOffsetValueColor4",
    ()=>_StaticOffsetValueColor4,
    "_StaticOffsetValueQuaternion",
    ()=>_StaticOffsetValueQuaternion,
    "_StaticOffsetValueSize",
    ()=>_StaticOffsetValueSize,
    "_StaticOffsetValueVector2",
    ()=>_StaticOffsetValueVector2,
    "_StaticOffsetValueVector3",
    ()=>_StaticOffsetValueVector3
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.color.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.scalar.functions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animationRange$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Animations/animationRange.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/node.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$size$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.size.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$webRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/webRequest.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/decorators.serialization.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
const _StaticOffsetValueQuaternion = Object.freeze(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"](0, 0, 0, 0));
const _StaticOffsetValueVector3 = Object.freeze(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero());
const _StaticOffsetValueVector2 = Object.freeze(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"].Zero());
const _StaticOffsetValueSize = Object.freeze(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$size$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Size"].Zero());
const _StaticOffsetValueColor3 = Object.freeze(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color3"].Black());
const _StaticOffsetValueColor4 = Object.freeze(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color4"](0, 0, 0, 0));
const EvaluateAnimationState = {
    key: 0,
    repeatCount: 0,
    loopMode: 2 /*Animation.ANIMATIONLOOPMODE_CONSTANT*/ 
};
class Animation {
    /**
     * @internal Internal use
     */ static _PrepareAnimation(name, targetProperty, framePerSecond, totalFrame, from, to, loopMode, easingFunction) {
        let dataType = undefined;
        if (!isNaN(parseFloat(from)) && isFinite(from)) {
            dataType = Animation.ANIMATIONTYPE_FLOAT;
        } else if (from instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"]) {
            dataType = Animation.ANIMATIONTYPE_QUATERNION;
        } else if (from instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]) {
            dataType = Animation.ANIMATIONTYPE_VECTOR3;
        } else if (from instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"]) {
            dataType = Animation.ANIMATIONTYPE_VECTOR2;
        } else if (from instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color3"]) {
            dataType = Animation.ANIMATIONTYPE_COLOR3;
        } else if (from instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color4"]) {
            dataType = Animation.ANIMATIONTYPE_COLOR4;
        } else if (from instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$size$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Size"]) {
            dataType = Animation.ANIMATIONTYPE_SIZE;
        }
        if (dataType == undefined) {
            return null;
        }
        const animation = new Animation(name, targetProperty, framePerSecond, dataType, loopMode);
        const keys = [
            {
                frame: 0,
                value: from
            },
            {
                frame: totalFrame,
                value: to
            }
        ];
        animation.setKeys(keys);
        if (easingFunction !== undefined) {
            animation.setEasingFunction(easingFunction);
        }
        return animation;
    }
    /**
     * Sets up an animation
     * @param property The property to animate
     * @param animationType The animation type to apply
     * @param framePerSecond The frames per second of the animation
     * @param easingFunction The easing function used in the animation
     * @returns The created animation
     */ static CreateAnimation(property, animationType, framePerSecond, easingFunction) {
        const animation = new Animation(property + "Animation", property, framePerSecond, animationType, Animation.ANIMATIONLOOPMODE_CONSTANT);
        animation.setEasingFunction(easingFunction);
        return animation;
    }
    /**
     * Create and start an animation on a node
     * @param name defines the name of the global animation that will be run on all nodes
     * @param target defines the target where the animation will take place
     * @param targetProperty defines property to animate
     * @param framePerSecond defines the number of frame per second yo use
     * @param totalFrame defines the number of frames in total
     * @param from defines the initial value
     * @param to defines the final value
     * @param loopMode defines which loop mode you want to use (off by default)
     * @param easingFunction defines the easing function to use (linear by default)
     * @param onAnimationEnd defines the callback to call when animation end
     * @param scene defines the hosting scene
     * @returns the animatable created for this animation
     */ static CreateAndStartAnimation(name, target, targetProperty, framePerSecond, totalFrame, from, to, loopMode, easingFunction, onAnimationEnd, scene) {
        const animation = Animation._PrepareAnimation(name, targetProperty, framePerSecond, totalFrame, from, to, loopMode, easingFunction);
        if (!animation) {
            return null;
        }
        if (target.getScene) {
            scene = target.getScene();
        }
        if (!scene) {
            return null;
        }
        return scene.beginDirectAnimation(target, [
            animation
        ], 0, totalFrame, animation.loopMode !== Animation.ANIMATIONLOOPMODE_CONSTANT, 1.0, onAnimationEnd);
    }
    /**
     * Create and start an animation on a node and its descendants
     * @param name defines the name of the global animation that will be run on all nodes
     * @param node defines the root node where the animation will take place
     * @param directDescendantsOnly if true only direct descendants will be used, if false direct and also indirect (children of children, an so on in a recursive manner) descendants will be used
     * @param targetProperty defines property to animate
     * @param framePerSecond defines the number of frame per second to use
     * @param totalFrame defines the number of frames in total
     * @param from defines the initial value
     * @param to defines the final value
     * @param loopMode defines which loop mode you want to use (off by default)
     * @param easingFunction defines the easing function to use (linear by default)
     * @param onAnimationEnd defines the callback to call when an animation ends (will be called once per node)
     * @returns the list of animatables created for all nodes
     * @example https://www.babylonjs-playground.com/#MH0VLI
     */ static CreateAndStartHierarchyAnimation(name, node, directDescendantsOnly, targetProperty, framePerSecond, totalFrame, from, to, loopMode, easingFunction, onAnimationEnd) {
        const animation = Animation._PrepareAnimation(name, targetProperty, framePerSecond, totalFrame, from, to, loopMode, easingFunction);
        if (!animation) {
            return null;
        }
        const scene = node.getScene();
        return scene.beginDirectHierarchyAnimation(node, directDescendantsOnly, [
            animation
        ], 0, totalFrame, animation.loopMode === 1, 1.0, onAnimationEnd);
    }
    /**
     * Creates a new animation, merges it with the existing animations and starts it
     * @param name Name of the animation
     * @param node Node which contains the scene that begins the animations
     * @param targetProperty Specifies which property to animate
     * @param framePerSecond The frames per second of the animation
     * @param totalFrame The total number of frames
     * @param from The frame at the beginning of the animation
     * @param to The frame at the end of the animation
     * @param loopMode Specifies the loop mode of the animation
     * @param easingFunction (Optional) The easing function of the animation, which allow custom mathematical formulas for animations
     * @param onAnimationEnd Callback to run once the animation is complete
     * @returns Nullable animation
     */ static CreateMergeAndStartAnimation(name, node, targetProperty, framePerSecond, totalFrame, from, to, loopMode, easingFunction, onAnimationEnd) {
        const animation = Animation._PrepareAnimation(name, targetProperty, framePerSecond, totalFrame, from, to, loopMode, easingFunction);
        if (!animation) {
            return null;
        }
        node.animations.push(animation);
        return node.getScene().beginAnimation(node, 0, totalFrame, animation.loopMode === 1, 1.0, onAnimationEnd);
    }
    /** @internal */ static MakeAnimationAdditive(sourceAnimation, referenceFrameOrOptions, range, cloneOriginal = false, clonedName) {
        let options;
        if (typeof referenceFrameOrOptions === "object") {
            options = referenceFrameOrOptions;
        } else {
            options = {
                referenceFrame: referenceFrameOrOptions ?? 0,
                range: range,
                cloneOriginalAnimation: cloneOriginal,
                clonedAnimationName: clonedName
            };
        }
        let animation = sourceAnimation;
        if (options.cloneOriginalAnimation) {
            animation = sourceAnimation.clone();
            animation.name = options.clonedAnimationName || animation.name;
        }
        if (!animation._keys.length) {
            return animation;
        }
        const referenceFrame = options.referenceFrame && options.referenceFrame >= 0 ? options.referenceFrame : 0;
        let startIndex = 0;
        const firstKey = animation._keys[0];
        let endIndex = animation._keys.length - 1;
        const lastKey = animation._keys[endIndex];
        const valueStore = {
            referenceValue: firstKey.value,
            referencePosition: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0],
            referenceQuaternion: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Quaternion[0],
            referenceScaling: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[1],
            keyPosition: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[2],
            keyQuaternion: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Quaternion[1],
            keyScaling: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[3]
        };
        let from = firstKey.frame;
        let to = lastKey.frame;
        if (options.range) {
            const rangeValue = animation.getRange(options.range);
            if (rangeValue) {
                from = rangeValue.from;
                to = rangeValue.to;
            }
        } else {
            from = options.fromFrame ?? from;
            to = options.toFrame ?? to;
        }
        if (from !== firstKey.frame) {
            startIndex = animation.createKeyForFrame(from);
        }
        if (to !== lastKey.frame) {
            endIndex = animation.createKeyForFrame(to);
        }
        // There's only one key, so use it
        if (animation._keys.length === 1) {
            const value = animation._getKeyValue(animation._keys[0]);
            valueStore.referenceValue = value.clone ? value.clone() : value;
        } else if (referenceFrame <= firstKey.frame) {
            const value = animation._getKeyValue(firstKey.value);
            valueStore.referenceValue = value.clone ? value.clone() : value;
        } else if (referenceFrame >= lastKey.frame) {
            const value = animation._getKeyValue(lastKey.value);
            valueStore.referenceValue = value.clone ? value.clone() : value;
        } else {
            EvaluateAnimationState.key = 0;
            const value = animation._interpolate(referenceFrame, EvaluateAnimationState);
            valueStore.referenceValue = value.clone ? value.clone() : value;
        }
        // Conjugate the quaternion
        if (animation.dataType === Animation.ANIMATIONTYPE_QUATERNION) {
            valueStore.referenceValue.normalize().conjugateInPlace();
        } else if (animation.dataType === Animation.ANIMATIONTYPE_MATRIX) {
            valueStore.referenceValue.decompose(valueStore.referenceScaling, valueStore.referenceQuaternion, valueStore.referencePosition);
            valueStore.referenceQuaternion.normalize().conjugateInPlace();
        }
        let startFrame = Number.MAX_VALUE;
        const clippedKeys = options.clipKeys ? [] : null;
        // Subtract the reference value from all of the key values
        for(let index = startIndex; index <= endIndex; index++){
            let key = animation._keys[index];
            if (clippedKeys || options.cloneOriginalAnimation) {
                key = {
                    frame: key.frame,
                    value: key.value.clone ? key.value.clone() : key.value,
                    inTangent: key.inTangent,
                    outTangent: key.outTangent,
                    interpolation: key.interpolation,
                    lockedTangent: key.lockedTangent
                };
                if (clippedKeys) {
                    if (startFrame === Number.MAX_VALUE) {
                        startFrame = key.frame;
                    }
                    key.frame -= startFrame;
                    clippedKeys.push(key);
                }
            }
            // If this key was duplicated to create a frame 0 key, skip it because its value has already been updated
            if (index && animation.dataType !== Animation.ANIMATIONTYPE_FLOAT && key.value === firstKey.value) {
                continue;
            }
            switch(animation.dataType){
                case Animation.ANIMATIONTYPE_MATRIX:
                    key.value.decompose(valueStore.keyScaling, valueStore.keyQuaternion, valueStore.keyPosition);
                    valueStore.keyPosition.subtractInPlace(valueStore.referencePosition);
                    valueStore.keyScaling.divideInPlace(valueStore.referenceScaling);
                    valueStore.referenceQuaternion.multiplyToRef(valueStore.keyQuaternion, valueStore.keyQuaternion);
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].ComposeToRef(valueStore.keyScaling, valueStore.keyQuaternion, valueStore.keyPosition, key.value);
                    break;
                case Animation.ANIMATIONTYPE_QUATERNION:
                    valueStore.referenceValue.multiplyToRef(key.value, key.value);
                    break;
                case Animation.ANIMATIONTYPE_VECTOR2:
                case Animation.ANIMATIONTYPE_VECTOR3:
                case Animation.ANIMATIONTYPE_COLOR3:
                case Animation.ANIMATIONTYPE_COLOR4:
                    key.value.subtractToRef(valueStore.referenceValue, key.value);
                    break;
                case Animation.ANIMATIONTYPE_SIZE:
                    key.value.width -= valueStore.referenceValue.width;
                    key.value.height -= valueStore.referenceValue.height;
                    break;
                default:
                    key.value -= valueStore.referenceValue;
            }
        }
        if (clippedKeys) {
            animation.setKeys(clippedKeys, true);
        }
        return animation;
    }
    /**
     * Transition property of an host to the target Value
     * @param property The property to transition
     * @param targetValue The target Value of the property
     * @param host The object where the property to animate belongs
     * @param scene Scene used to run the animation
     * @param frameRate Framerate (in frame/s) to use
     * @param transition The transition type we want to use
     * @param duration The duration of the animation, in milliseconds
     * @param onAnimationEnd Callback trigger at the end of the animation
     * @param stopCurrent If true, will stop the current animation on the property
     * @param customKeys defines custom keys to use for the animation instead of the from-to keys
     * @returns Nullable animation
     */ static TransitionTo(property, targetValue, host, scene, frameRate, transition, duration, onAnimationEnd = null, stopCurrent = true, customKeys) {
        if (duration <= 0) {
            host[property] = targetValue;
            if (onAnimationEnd) {
                onAnimationEnd();
            }
            return null;
        }
        const endFrame = frameRate * (duration / 1000);
        transition.setKeys(customKeys ?? [
            {
                frame: 0,
                value: host[property].clone ? host[property].clone() : host[property]
            },
            {
                frame: endFrame,
                value: targetValue
            }
        ]);
        if (!host.animations) {
            host.animations = [];
        }
        host.animations.push(transition);
        const animation = scene.beginAnimation(host, 0, endFrame, false, 1.0, onAnimationEnd ?? undefined, undefined, stopCurrent);
        return animation;
    }
    /**
     * Return the array of runtime animations currently using this animation
     */ get runtimeAnimations() {
        return this._runtimeAnimations;
    }
    /**
     * Specifies if any of the runtime animations are currently running
     */ get hasRunningRuntimeAnimations() {
        for (const runtimeAnimation of this._runtimeAnimations){
            if (!runtimeAnimation.isStopped()) {
                return true;
            }
        }
        return false;
    }
    /**
     * Initializes the animation
     * @param name Name of the animation
     * @param targetProperty Property to animate
     * @param framePerSecond The frames per second of the animation
     * @param dataType The data type of the animation
     * @param loopMode The loop mode of the animation
     * @param enableBlending Specifies if blending should be enabled
     */ constructor(/**Name of the animation */ name, /**Property to animate */ targetProperty, /**The frames per second of the animation */ framePerSecond, /**The data type of the animation */ dataType, /**The loop mode of the animation */ loopMode, /**Specifies if blending should be enabled */ enableBlending){
        this.name = name;
        this.targetProperty = targetProperty;
        this.framePerSecond = framePerSecond;
        this.dataType = dataType;
        this.loopMode = loopMode;
        this.enableBlending = enableBlending;
        /**
         * Stores the easing function of the animation
         */ this._easingFunction = null;
        /**
         * @internal Internal use only
         */ this._runtimeAnimations = new Array();
        /**
         * The set of event that will be linked to this animation
         */ this._events = new Array();
        /**
         * Stores the blending speed of the animation
         */ this.blendingSpeed = 0.01;
        /**
         * Stores the animation ranges for the animation
         */ this._ranges = {};
        /** @internal */ this._coreAnimation = null;
        this.targetPropertyPath = targetProperty.split(".");
        this.dataType = dataType;
        this.loopMode = loopMode === undefined ? Animation.ANIMATIONLOOPMODE_CYCLE : loopMode;
        this.uniqueId = Animation._UniqueIdGenerator++;
    }
    // Methods
    /**
     * Converts the animation to a string
     * @param fullDetails support for multiple levels of logging within scene loading
     * @returns String form of the animation
     */ toString(fullDetails) {
        let ret = "Name: " + this.name + ", property: " + this.targetProperty;
        ret += ", datatype: " + [
            "Float",
            "Vector3",
            "Quaternion",
            "Matrix",
            "Color3",
            "Vector2"
        ][this.dataType];
        ret += ", nKeys: " + (this._keys ? this._keys.length : "none");
        ret += ", nRanges: " + (this._ranges ? Object.keys(this._ranges).length : "none");
        if (fullDetails) {
            ret += ", Ranges: {";
            let first = true;
            for(const name in this._ranges){
                if (first) {
                    ret += ", ";
                    first = false;
                }
                ret += name;
            }
            ret += "}";
        }
        return ret;
    }
    /**
     * Add an event to this animation
     * @param event Event to add
     */ addEvent(event) {
        this._events.push(event);
        this._events.sort((a, b)=>a.frame - b.frame);
    }
    /**
     * Remove all events found at the given frame
     * @param frame The frame to remove events from
     */ removeEvents(frame) {
        for(let index = 0; index < this._events.length; index++){
            if (this._events[index].frame === frame) {
                this._events.splice(index, 1);
                index--;
            }
        }
    }
    /**
     * Retrieves all the events from the animation
     * @returns Events from the animation
     */ getEvents() {
        return this._events;
    }
    /**
     * Creates an animation range
     * @param name Name of the animation range
     * @param from Starting frame of the animation range
     * @param to Ending frame of the animation
     */ createRange(name, from, to) {
        // check name not already in use; could happen for bones after serialized
        if (!this._ranges[name]) {
            this._ranges[name] = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animationRange$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimationRange"](name, from, to);
        }
    }
    /**
     * Deletes an animation range by name
     * @param name Name of the animation range to delete
     * @param deleteFrames Specifies if the key frames for the range should also be deleted (true) or not (false)
     */ deleteRange(name, deleteFrames = true) {
        const range = this._ranges[name];
        if (!range) {
            return;
        }
        if (deleteFrames) {
            const from = range.from;
            const to = range.to;
            // this loop MUST go high to low for multiple splices to work
            for(let key = this._keys.length - 1; key >= 0; key--){
                if (this._keys[key].frame >= from && this._keys[key].frame <= to) {
                    this._keys.splice(key, 1);
                }
            }
        }
        this._ranges[name] = null; // said much faster than 'delete this._range[name]'
    }
    /**
     * Gets the animation range by name, or null if not defined
     * @param name Name of the animation range
     * @returns Nullable animation range
     */ getRange(name) {
        return this._ranges[name];
    }
    /**
     * Gets the key frames from the animation
     * @returns The key frames of the animation
     */ getKeys() {
        return this._keys;
    }
    /**
     * Gets the highest frame of the animation
     * @returns Highest frame of the animation
     */ getHighestFrame() {
        let ret = 0;
        for(let key = 0, nKeys = this._keys.length; key < nKeys; key++){
            if (ret < this._keys[key].frame) {
                ret = this._keys[key].frame;
            }
        }
        return ret;
    }
    /**
     * Gets the easing function of the animation
     * @returns Easing function of the animation
     */ getEasingFunction() {
        return this._easingFunction;
    }
    /**
     * Sets the easing function of the animation
     * @param easingFunction A custom mathematical formula for animation
     */ setEasingFunction(easingFunction) {
        this._easingFunction = easingFunction;
    }
    /**
     * Interpolates a scalar linearly
     * @param startValue Start value of the animation curve
     * @param endValue End value of the animation curve
     * @param gradient Scalar amount to interpolate
     * @returns Interpolated scalar value
     */ floatInterpolateFunction(startValue, endValue, gradient) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Lerp"])(startValue, endValue, gradient);
    }
    /**
     * Interpolates a scalar cubically
     * @param startValue Start value of the animation curve
     * @param outTangent End tangent of the animation
     * @param endValue End value of the animation curve
     * @param inTangent Start tangent of the animation curve
     * @param gradient Scalar amount to interpolate
     * @returns Interpolated scalar value
     */ floatInterpolateFunctionWithTangents(startValue, outTangent, endValue, inTangent, gradient) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hermite"])(startValue, outTangent, endValue, inTangent, gradient);
    }
    /**
     * Interpolates a quaternion using a spherical linear interpolation
     * @param startValue Start value of the animation curve
     * @param endValue End value of the animation curve
     * @param gradient Scalar amount to interpolate
     * @returns Interpolated quaternion value
     */ quaternionInterpolateFunction(startValue, endValue, gradient) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].Slerp(startValue, endValue, gradient);
    }
    /**
     * Interpolates a quaternion cubically
     * @param startValue Start value of the animation curve
     * @param outTangent End tangent of the animation curve
     * @param endValue End value of the animation curve
     * @param inTangent Start tangent of the animation curve
     * @param gradient Scalar amount to interpolate
     * @returns Interpolated quaternion value
     */ quaternionInterpolateFunctionWithTangents(startValue, outTangent, endValue, inTangent, gradient) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].Hermite(startValue, outTangent, endValue, inTangent, gradient).normalize();
    }
    /**
     * Interpolates a Vector3 linearly
     * @param startValue Start value of the animation curve
     * @param endValue End value of the animation curve
     * @param gradient Scalar amount to interpolate (value between 0 and 1)
     * @returns Interpolated scalar value
     */ vector3InterpolateFunction(startValue, endValue, gradient) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Lerp(startValue, endValue, gradient);
    }
    /**
     * Interpolates a Vector3 cubically
     * @param startValue Start value of the animation curve
     * @param outTangent End tangent of the animation
     * @param endValue End value of the animation curve
     * @param inTangent Start tangent of the animation curve
     * @param gradient Scalar amount to interpolate (value between 0 and 1)
     * @returns InterpolatedVector3 value
     */ vector3InterpolateFunctionWithTangents(startValue, outTangent, endValue, inTangent, gradient) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Hermite(startValue, outTangent, endValue, inTangent, gradient);
    }
    /**
     * Interpolates a Vector2 linearly
     * @param startValue Start value of the animation curve
     * @param endValue End value of the animation curve
     * @param gradient Scalar amount to interpolate (value between 0 and 1)
     * @returns Interpolated Vector2 value
     */ vector2InterpolateFunction(startValue, endValue, gradient) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"].Lerp(startValue, endValue, gradient);
    }
    /**
     * Interpolates a Vector2 cubically
     * @param startValue Start value of the animation curve
     * @param outTangent End tangent of the animation
     * @param endValue End value of the animation curve
     * @param inTangent Start tangent of the animation curve
     * @param gradient Scalar amount to interpolate (value between 0 and 1)
     * @returns Interpolated Vector2 value
     */ vector2InterpolateFunctionWithTangents(startValue, outTangent, endValue, inTangent, gradient) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"].Hermite(startValue, outTangent, endValue, inTangent, gradient);
    }
    /**
     * Interpolates a size linearly
     * @param startValue Start value of the animation curve
     * @param endValue End value of the animation curve
     * @param gradient Scalar amount to interpolate
     * @returns Interpolated Size value
     */ sizeInterpolateFunction(startValue, endValue, gradient) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$size$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Size"].Lerp(startValue, endValue, gradient);
    }
    /**
     * Interpolates a Color3 linearly
     * @param startValue Start value of the animation curve
     * @param endValue End value of the animation curve
     * @param gradient Scalar amount to interpolate
     * @returns Interpolated Color3 value
     */ color3InterpolateFunction(startValue, endValue, gradient) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color3"].Lerp(startValue, endValue, gradient);
    }
    /**
     * Interpolates a Color3 cubically
     * @param startValue Start value of the animation curve
     * @param outTangent End tangent of the animation
     * @param endValue End value of the animation curve
     * @param inTangent Start tangent of the animation curve
     * @param gradient Scalar amount to interpolate
     * @returns interpolated value
     */ color3InterpolateFunctionWithTangents(startValue, outTangent, endValue, inTangent, gradient) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color3"].Hermite(startValue, outTangent, endValue, inTangent, gradient);
    }
    /**
     * Interpolates a Color4 linearly
     * @param startValue Start value of the animation curve
     * @param endValue End value of the animation curve
     * @param gradient Scalar amount to interpolate
     * @returns Interpolated Color3 value
     */ color4InterpolateFunction(startValue, endValue, gradient) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color4"].Lerp(startValue, endValue, gradient);
    }
    /**
     * Interpolates a Color4 cubically
     * @param startValue Start value of the animation curve
     * @param outTangent End tangent of the animation
     * @param endValue End value of the animation curve
     * @param inTangent Start tangent of the animation curve
     * @param gradient Scalar amount to interpolate
     * @returns interpolated value
     */ color4InterpolateFunctionWithTangents(startValue, outTangent, endValue, inTangent, gradient) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color4"].Hermite(startValue, outTangent, endValue, inTangent, gradient);
    }
    /**
     * @internal Internal use only
     */ _getKeyValue(value) {
        if (typeof value === "function") {
            return value();
        }
        return value;
    }
    /**
     * Evaluate the animation value at a given frame
     * @param currentFrame defines the frame where we want to evaluate the animation
     * @returns the animation value
     */ evaluate(currentFrame) {
        EvaluateAnimationState.key = 0;
        return this._interpolate(currentFrame, EvaluateAnimationState);
    }
    /**
     * @internal Internal use only
     */ _interpolate(currentFrame, state, searchClosestKeyOnly = false) {
        if (state.loopMode === Animation.ANIMATIONLOOPMODE_CONSTANT && state.repeatCount > 0) {
            return state.highLimitValue.clone ? state.highLimitValue.clone() : state.highLimitValue;
        }
        const keys = this._keys;
        let key;
        if (!this._coreAnimation) {
            const keysLength = keys.length;
            key = state.key;
            while(key >= 0 && currentFrame < keys[key].frame){
                --key;
            }
            while(key + 1 <= keysLength - 1 && currentFrame >= keys[key + 1].frame){
                ++key;
            }
            state.key = key;
            if (key < 0) {
                return searchClosestKeyOnly ? undefined : this._getKeyValue(keys[0].value);
            } else if (key + 1 > keysLength - 1) {
                return searchClosestKeyOnly ? undefined : this._getKeyValue(keys[keysLength - 1].value);
            }
            this._key = key;
        } else {
            key = this._coreAnimation._key;
        }
        const startKey = keys[key];
        const endKey = keys[key + 1];
        if (searchClosestKeyOnly && (currentFrame === startKey.frame || currentFrame === endKey.frame)) {
            return undefined;
        }
        const startValue = this._getKeyValue(startKey.value);
        const endValue = this._getKeyValue(endKey.value);
        if (startKey.interpolation === 1 /* AnimationKeyInterpolation.STEP */ ) {
            if (endKey.frame > currentFrame) {
                return startValue;
            } else {
                return endValue;
            }
        }
        const useTangent = startKey.outTangent !== undefined && endKey.inTangent !== undefined;
        const frameDelta = endKey.frame - startKey.frame;
        // gradient : percent of currentFrame between the frame inf and the frame sup
        let gradient = (currentFrame - startKey.frame) / frameDelta;
        // check for easingFunction and correction of gradient
        const easingFunction = startKey.easingFunction || this.getEasingFunction();
        // can also be undefined, if not provided
        if (easingFunction) {
            gradient = easingFunction.ease(gradient);
        }
        switch(this.dataType){
            // Float
            case Animation.ANIMATIONTYPE_FLOAT:
                {
                    const floatValue = useTangent ? this.floatInterpolateFunctionWithTangents(startValue, startKey.outTangent * frameDelta, endValue, endKey.inTangent * frameDelta, gradient) : this.floatInterpolateFunction(startValue, endValue, gradient);
                    switch(state.loopMode){
                        case Animation.ANIMATIONLOOPMODE_CYCLE:
                        case Animation.ANIMATIONLOOPMODE_CONSTANT:
                        case Animation.ANIMATIONLOOPMODE_YOYO:
                            return floatValue;
                        case Animation.ANIMATIONLOOPMODE_RELATIVE:
                        case Animation.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                            return (state.offsetValue ?? 0) * state.repeatCount + floatValue;
                    }
                    break;
                }
            // Quaternion
            case Animation.ANIMATIONTYPE_QUATERNION:
                {
                    const quatValue = useTangent ? this.quaternionInterpolateFunctionWithTangents(startValue, startKey.outTangent.scale(frameDelta), endValue, endKey.inTangent.scale(frameDelta), gradient) : this.quaternionInterpolateFunction(startValue, endValue, gradient);
                    switch(state.loopMode){
                        case Animation.ANIMATIONLOOPMODE_CYCLE:
                        case Animation.ANIMATIONLOOPMODE_CONSTANT:
                        case Animation.ANIMATIONLOOPMODE_YOYO:
                            return quatValue;
                        case Animation.ANIMATIONLOOPMODE_RELATIVE:
                        case Animation.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                            return quatValue.addInPlace((state.offsetValue || _StaticOffsetValueQuaternion).scale(state.repeatCount));
                    }
                    return quatValue;
                }
            // Vector3
            case Animation.ANIMATIONTYPE_VECTOR3:
                {
                    const vec3Value = useTangent ? this.vector3InterpolateFunctionWithTangents(startValue, startKey.outTangent.scale(frameDelta), endValue, endKey.inTangent.scale(frameDelta), gradient) : this.vector3InterpolateFunction(startValue, endValue, gradient);
                    switch(state.loopMode){
                        case Animation.ANIMATIONLOOPMODE_CYCLE:
                        case Animation.ANIMATIONLOOPMODE_CONSTANT:
                        case Animation.ANIMATIONLOOPMODE_YOYO:
                            return vec3Value;
                        case Animation.ANIMATIONLOOPMODE_RELATIVE:
                        case Animation.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                            return vec3Value.add((state.offsetValue || _StaticOffsetValueVector3).scale(state.repeatCount));
                    }
                    break;
                }
            // Vector2
            case Animation.ANIMATIONTYPE_VECTOR2:
                {
                    const vec2Value = useTangent ? this.vector2InterpolateFunctionWithTangents(startValue, startKey.outTangent.scale(frameDelta), endValue, endKey.inTangent.scale(frameDelta), gradient) : this.vector2InterpolateFunction(startValue, endValue, gradient);
                    switch(state.loopMode){
                        case Animation.ANIMATIONLOOPMODE_CYCLE:
                        case Animation.ANIMATIONLOOPMODE_CONSTANT:
                        case Animation.ANIMATIONLOOPMODE_YOYO:
                            return vec2Value;
                        case Animation.ANIMATIONLOOPMODE_RELATIVE:
                        case Animation.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                            return vec2Value.add((state.offsetValue || _StaticOffsetValueVector2).scale(state.repeatCount));
                    }
                    break;
                }
            // Size
            case Animation.ANIMATIONTYPE_SIZE:
                {
                    switch(state.loopMode){
                        case Animation.ANIMATIONLOOPMODE_CYCLE:
                        case Animation.ANIMATIONLOOPMODE_CONSTANT:
                        case Animation.ANIMATIONLOOPMODE_YOYO:
                            return this.sizeInterpolateFunction(startValue, endValue, gradient);
                        case Animation.ANIMATIONLOOPMODE_RELATIVE:
                        case Animation.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                            return this.sizeInterpolateFunction(startValue, endValue, gradient).add((state.offsetValue || _StaticOffsetValueSize).scale(state.repeatCount));
                    }
                    break;
                }
            // Color3
            case Animation.ANIMATIONTYPE_COLOR3:
                {
                    const color3Value = useTangent ? this.color3InterpolateFunctionWithTangents(startValue, startKey.outTangent.scale(frameDelta), endValue, endKey.inTangent.scale(frameDelta), gradient) : this.color3InterpolateFunction(startValue, endValue, gradient);
                    switch(state.loopMode){
                        case Animation.ANIMATIONLOOPMODE_CYCLE:
                        case Animation.ANIMATIONLOOPMODE_CONSTANT:
                        case Animation.ANIMATIONLOOPMODE_YOYO:
                            return color3Value;
                        case Animation.ANIMATIONLOOPMODE_RELATIVE:
                        case Animation.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                            return color3Value.add((state.offsetValue || _StaticOffsetValueColor3).scale(state.repeatCount));
                    }
                    break;
                }
            // Color4
            case Animation.ANIMATIONTYPE_COLOR4:
                {
                    const color4Value = useTangent ? this.color4InterpolateFunctionWithTangents(startValue, startKey.outTangent.scale(frameDelta), endValue, endKey.inTangent.scale(frameDelta), gradient) : this.color4InterpolateFunction(startValue, endValue, gradient);
                    switch(state.loopMode){
                        case Animation.ANIMATIONLOOPMODE_CYCLE:
                        case Animation.ANIMATIONLOOPMODE_CONSTANT:
                        case Animation.ANIMATIONLOOPMODE_YOYO:
                            return color4Value;
                        case Animation.ANIMATIONLOOPMODE_RELATIVE:
                        case Animation.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                            return color4Value.add((state.offsetValue || _StaticOffsetValueColor4).scale(state.repeatCount));
                    }
                    break;
                }
            // Matrix
            case Animation.ANIMATIONTYPE_MATRIX:
                {
                    switch(state.loopMode){
                        case Animation.ANIMATIONLOOPMODE_CYCLE:
                        case Animation.ANIMATIONLOOPMODE_CONSTANT:
                        case Animation.ANIMATIONLOOPMODE_YOYO:
                            {
                                if (Animation.AllowMatricesInterpolation) {
                                    return this.matrixInterpolateFunction(startValue, endValue, gradient, state.workValue);
                                }
                                return startValue;
                            }
                        case Animation.ANIMATIONLOOPMODE_RELATIVE:
                        case Animation.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                            {
                                return startValue;
                            }
                    }
                    break;
                }
        }
        return 0;
    }
    /**
     * Defines the function to use to interpolate matrices
     * @param startValue defines the start matrix
     * @param endValue defines the end matrix
     * @param gradient defines the gradient between both matrices
     * @param result defines an optional target matrix where to store the interpolation
     * @returns the interpolated matrix
     */ matrixInterpolateFunction(startValue, endValue, gradient, result) {
        if (Animation.AllowMatrixDecomposeForInterpolation) {
            if (result) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].DecomposeLerpToRef(startValue, endValue, gradient, result);
                return result;
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].DecomposeLerp(startValue, endValue, gradient);
        }
        if (result) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].LerpToRef(startValue, endValue, gradient, result);
            return result;
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].Lerp(startValue, endValue, gradient);
    }
    /**
     * Makes a copy of the animation
     * @returns Cloned animation
     */ clone() {
        const clone = new Animation(this.name, this.targetPropertyPath.join("."), this.framePerSecond, this.dataType, this.loopMode);
        clone.enableBlending = this.enableBlending;
        clone.blendingSpeed = this.blendingSpeed;
        if (this._keys) {
            clone.setKeys(this._keys);
        }
        if (this._ranges) {
            clone._ranges = {};
            for(const name in this._ranges){
                const range = this._ranges[name];
                if (!range) {
                    continue;
                }
                clone._ranges[name] = range.clone();
            }
        }
        return clone;
    }
    /**
     * Sets the key frames of the animation
     * @param values The animation key frames to set
     * @param dontClone Whether to clone the keys or not (default is false, so the array of keys is cloned)
     */ setKeys(values, dontClone = false) {
        this._keys = !dontClone ? values.slice(0) : values;
    }
    /**
     * Creates a key for the frame passed as a parameter and adds it to the animation IF a key doesn't already exist for that frame
     * @param frame Frame number
     * @returns The key index if the key was added or the index of the pre existing key if the frame passed as parameter already has a corresponding key
     */ createKeyForFrame(frame) {
        // Find the key corresponding to frame
        EvaluateAnimationState.key = 0;
        const value = this._interpolate(frame, EvaluateAnimationState, true);
        if (!value) {
            // A key corresponding to this frame already exists
            return this._keys[EvaluateAnimationState.key].frame === frame ? EvaluateAnimationState.key : EvaluateAnimationState.key + 1;
        }
        // The frame is between two keys, so create a new key
        const newKey = {
            frame,
            value: value.clone ? value.clone() : value
        };
        this._keys.splice(EvaluateAnimationState.key + 1, 0, newKey);
        return EvaluateAnimationState.key + 1;
    }
    /**
     * Serializes the animation to an object
     * @returns Serialized object
     */ serialize() {
        const serializationObject = {};
        serializationObject.name = this.name;
        serializationObject.property = this.targetProperty;
        serializationObject.framePerSecond = this.framePerSecond;
        serializationObject.dataType = this.dataType;
        serializationObject.loopBehavior = this.loopMode;
        serializationObject.enableBlending = this.enableBlending;
        serializationObject.blendingSpeed = this.blendingSpeed;
        const dataType = this.dataType;
        serializationObject.keys = [];
        const keys = this.getKeys();
        for(let index = 0; index < keys.length; index++){
            const animationKey = keys[index];
            const key = {};
            key.frame = animationKey.frame;
            switch(dataType){
                case Animation.ANIMATIONTYPE_FLOAT:
                    key.values = [
                        animationKey.value
                    ];
                    if (animationKey.inTangent !== undefined) {
                        key.values.push(animationKey.inTangent);
                    }
                    if (animationKey.outTangent !== undefined) {
                        if (animationKey.inTangent === undefined) {
                            key.values.push(undefined);
                        }
                        key.values.push(animationKey.outTangent);
                    }
                    if (animationKey.interpolation !== undefined) {
                        if (animationKey.inTangent === undefined) {
                            key.values.push(undefined);
                        }
                        if (animationKey.outTangent === undefined) {
                            key.values.push(undefined);
                        }
                        key.values.push(animationKey.interpolation);
                    }
                    break;
                case Animation.ANIMATIONTYPE_QUATERNION:
                case Animation.ANIMATIONTYPE_MATRIX:
                case Animation.ANIMATIONTYPE_VECTOR3:
                case Animation.ANIMATIONTYPE_COLOR3:
                case Animation.ANIMATIONTYPE_COLOR4:
                    key.values = animationKey.value.asArray();
                    if (animationKey.inTangent != undefined) {
                        key.values.push(animationKey.inTangent.asArray());
                    }
                    if (animationKey.outTangent != undefined) {
                        if (animationKey.inTangent === undefined) {
                            key.values.push(undefined);
                        }
                        key.values.push(animationKey.outTangent.asArray());
                    }
                    if (animationKey.interpolation !== undefined) {
                        if (animationKey.inTangent === undefined) {
                            key.values.push(undefined);
                        }
                        if (animationKey.outTangent === undefined) {
                            key.values.push(undefined);
                        }
                        key.values.push(animationKey.interpolation);
                    }
                    break;
            }
            serializationObject.keys.push(key);
        }
        serializationObject.ranges = [];
        for(const name in this._ranges){
            const source = this._ranges[name];
            if (!source) {
                continue;
            }
            const range = {};
            range.name = name;
            range.from = source.from;
            range.to = source.to;
            serializationObject.ranges.push(range);
        }
        return serializationObject;
    }
    /**
     * @internal
     */ static _UniversalLerp(left, right, amount) {
        const constructor = left.constructor;
        if (constructor.Lerp) {
            // Lerp supported
            return constructor.Lerp(left, right, amount);
        } else if (constructor.Slerp) {
            // Slerp supported
            return constructor.Slerp(left, right, amount);
        } else if (left.toFixed) {
            // Number
            return left * (1.0 - amount) + amount * right;
        } else {
            // Blending not supported
            return right;
        }
    }
    /**
     * Parses an animation object and creates an animation
     * @param parsedAnimation Parsed animation object
     * @returns Animation object
     */ static Parse(parsedAnimation) {
        const animation = new Animation(parsedAnimation.name, parsedAnimation.property, parsedAnimation.framePerSecond, parsedAnimation.dataType, parsedAnimation.loopBehavior);
        const dataType = parsedAnimation.dataType;
        const keys = [];
        let data;
        let index;
        if (parsedAnimation.enableBlending) {
            animation.enableBlending = parsedAnimation.enableBlending;
        }
        if (parsedAnimation.blendingSpeed) {
            animation.blendingSpeed = parsedAnimation.blendingSpeed;
        }
        for(index = 0; index < parsedAnimation.keys.length; index++){
            const key = parsedAnimation.keys[index];
            let inTangent = undefined;
            let outTangent = undefined;
            let interpolation = undefined;
            switch(dataType){
                case Animation.ANIMATIONTYPE_FLOAT:
                    data = key.values[0];
                    if (key.values.length >= 2) {
                        inTangent = key.values[1];
                    }
                    if (key.values.length >= 3) {
                        outTangent = key.values[2];
                    }
                    if (key.values.length >= 4) {
                        interpolation = key.values[3];
                    }
                    break;
                case Animation.ANIMATIONTYPE_QUATERNION:
                    data = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].FromArray(key.values);
                    if (key.values.length >= 8) {
                        const _inTangent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].FromArray(key.values.slice(4, 8));
                        if (!_inTangent.equals(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].Zero())) {
                            inTangent = _inTangent;
                        }
                    }
                    if (key.values.length >= 12) {
                        const _outTangent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].FromArray(key.values.slice(8, 12));
                        if (!_outTangent.equals(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].Zero())) {
                            outTangent = _outTangent;
                        }
                    }
                    if (key.values.length >= 13) {
                        interpolation = key.values[12];
                    }
                    break;
                case Animation.ANIMATIONTYPE_MATRIX:
                    data = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].FromArray(key.values);
                    if (key.values.length >= 17) {
                        interpolation = key.values[16];
                    }
                    break;
                case Animation.ANIMATIONTYPE_COLOR3:
                    data = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color3"].FromArray(key.values);
                    if (key.values[3]) {
                        inTangent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color3"].FromArray(key.values[3]);
                    }
                    if (key.values[4]) {
                        outTangent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color3"].FromArray(key.values[4]);
                    }
                    if (key.values[5]) {
                        interpolation = key.values[5];
                    }
                    break;
                case Animation.ANIMATIONTYPE_COLOR4:
                    data = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color4"].FromArray(key.values);
                    if (key.values[4]) {
                        inTangent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color4"].FromArray(key.values[4]);
                    }
                    if (key.values[5]) {
                        outTangent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color4"].FromArray(key.values[5]);
                    }
                    if (key.values[6]) {
                        interpolation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color4"].FromArray(key.values[6]);
                    }
                    break;
                case Animation.ANIMATIONTYPE_VECTOR3:
                default:
                    data = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].FromArray(key.values);
                    if (key.values[3]) {
                        inTangent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].FromArray(key.values[3]);
                    }
                    if (key.values[4]) {
                        outTangent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].FromArray(key.values[4]);
                    }
                    if (key.values[5]) {
                        interpolation = key.values[5];
                    }
                    break;
            }
            const keyData = {};
            keyData.frame = key.frame;
            keyData.value = data;
            if (inTangent != undefined) {
                keyData.inTangent = inTangent;
            }
            if (outTangent != undefined) {
                keyData.outTangent = outTangent;
            }
            if (interpolation != undefined) {
                keyData.interpolation = interpolation;
            }
            keys.push(keyData);
        }
        animation.setKeys(keys);
        if (parsedAnimation.ranges) {
            for(index = 0; index < parsedAnimation.ranges.length; index++){
                data = parsedAnimation.ranges[index];
                animation.createRange(data.name, data.from, data.to);
            }
        }
        return animation;
    }
    /**
     * Appends the serialized animations from the source animations
     * @param source Source containing the animations
     * @param destination Target to store the animations
     */ static AppendSerializedAnimations(source, destination) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$decorators$2e$serialization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SerializationHelper"].AppendSerializedAnimations(source, destination);
    }
    /**
     * Creates a new animation or an array of animations from a snippet saved in a remote file
     * @param name defines the name of the animation to create (can be null or empty to use the one from the json data)
     * @param url defines the url to load from
     * @returns a promise that will resolve to the new animation or an array of animations
     */ static async ParseFromFileAsync(name, url) {
        return await new Promise((resolve, reject)=>{
            const request = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$webRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebRequest"]();
            request.addEventListener("readystatechange", ()=>{
                if (request.readyState == 4) {
                    if (request.status == 200) {
                        let serializationObject = JSON.parse(request.responseText);
                        if (serializationObject.animations) {
                            serializationObject = serializationObject.animations;
                        }
                        if (serializationObject.length) {
                            const output = [];
                            for (const serializedAnimation of serializationObject){
                                output.push(this.Parse(serializedAnimation));
                            }
                            resolve(output);
                        } else {
                            const output = this.Parse(serializationObject);
                            if (name) {
                                output.name = name;
                            }
                            resolve(output);
                        }
                    } else {
                        // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
                        reject("Unable to load the animation");
                    }
                }
            });
            request.open("GET", url);
            request.send();
        });
    }
    /**
     * Creates an animation or an array of animations from a snippet saved by the Inspector
     * @param snippetId defines the snippet to load
     * @returns a promise that will resolve to the new animation or a new array of animations
     */ static async ParseFromSnippetAsync(snippetId) {
        return await new Promise((resolve, reject)=>{
            const request = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$webRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebRequest"]();
            request.addEventListener("readystatechange", ()=>{
                if (request.readyState == 4) {
                    if (request.status == 200) {
                        const snippet = JSON.parse(JSON.parse(request.responseText).jsonPayload);
                        if (snippet.animations) {
                            const serializationObject = JSON.parse(snippet.animations);
                            const outputs = [];
                            for (const serializedAnimation of serializationObject.animations){
                                const output = this.Parse(serializedAnimation);
                                output.snippetId = snippetId;
                                outputs.push(output);
                            }
                            resolve(outputs);
                        } else {
                            const serializationObject = JSON.parse(snippet.animation);
                            const output = this.Parse(serializationObject);
                            output.snippetId = snippetId;
                            resolve(output);
                        }
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
Animation._UniqueIdGenerator = 0;
/**
 * Use matrix interpolation instead of using direct key value when animating matrices
 */ Animation.AllowMatricesInterpolation = false;
/**
 * When matrix interpolation is enabled, this boolean forces the system to use Matrix.DecomposeLerp instead of Matrix.Lerp. Interpolation is more precise but slower
 */ Animation.AllowMatrixDecomposeForInterpolation = true;
/** Define the Url to load snippets */ Animation.SnippetUrl = `https://snippet.babylonjs.com`;
// Statics
/**
 * Float animation type
 */ Animation.ANIMATIONTYPE_FLOAT = 0;
/**
 * Vector3 animation type
 */ Animation.ANIMATIONTYPE_VECTOR3 = 1;
/**
 * Quaternion animation type
 */ Animation.ANIMATIONTYPE_QUATERNION = 2;
/**
 * Matrix animation type
 */ Animation.ANIMATIONTYPE_MATRIX = 3;
/**
 * Color3 animation type
 */ Animation.ANIMATIONTYPE_COLOR3 = 4;
/**
 * Color3 animation type
 */ Animation.ANIMATIONTYPE_COLOR4 = 7;
/**
 * Vector2 animation type
 */ Animation.ANIMATIONTYPE_VECTOR2 = 5;
/**
 * Size animation type
 */ Animation.ANIMATIONTYPE_SIZE = 6;
/**
 * Relative Loop Mode
 */ Animation.ANIMATIONLOOPMODE_RELATIVE = 0;
/**
 * Cycle Loop Mode
 */ Animation.ANIMATIONLOOPMODE_CYCLE = 1;
/**
 * Constant Loop Mode
 */ Animation.ANIMATIONLOOPMODE_CONSTANT = 2;
/**
 * Yoyo Loop Mode
 */ Animation.ANIMATIONLOOPMODE_YOYO = 4;
/**
 * Relative Loop Mode (add to current value of animated object, unlike ANIMATIONLOOPMODE_RELATIVE)
 */ Animation.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT = 5;
/**
 * Creates an animation or an array of animations from a snippet saved by the Inspector
 * @deprecated Please use ParseFromSnippetAsync instead
 * @param snippetId defines the snippet to load
 * @returns a promise that will resolve to the new animation or a new array of animations
 */ Animation.CreateFromSnippetAsync = Animation.ParseFromSnippetAsync;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.Animation", Animation);
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node"]._AnimationRangeFactory = (name, from, to)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animationRange$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimationRange"](name, from, to); //# sourceMappingURL=animation.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Animations/runtimeAnimation.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RuntimeAnimation",
    ()=>RuntimeAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Animations/animation.js [app-client] (ecmascript)");
;
;
class RuntimeAnimation {
    /**
     * Gets the current frame of the runtime animation
     */ get currentFrame() {
        return this._currentFrame;
    }
    /**
     * Gets the weight of the runtime animation
     */ get weight() {
        return this._weight;
    }
    /**
     * Gets the current value of the runtime animation
     */ get currentValue() {
        return this._currentValue;
    }
    /**
     * Gets or sets the target path of the runtime animation
     */ get targetPath() {
        return this._targetPath;
    }
    /**
     * Gets the actual target of the runtime animation
     */ get target() {
        return this._currentActiveTarget;
    }
    /**
     * Gets the additive state of the runtime animation
     */ get isAdditive() {
        return this._host && this._host.isAdditive;
    }
    /**
     * Create a new RuntimeAnimation object
     * @param target defines the target of the animation
     * @param animation defines the source animation object
     * @param scene defines the hosting scene
     * @param host defines the initiating Animatable
     */ constructor(target, animation, scene, host){
        this._events = new Array();
        /**
         * The current frame of the runtime animation
         */ this._currentFrame = 0;
        /**
         * The original value of the runtime animation
         */ this._originalValue = new Array();
        /**
         * The original blend value of the runtime animation
         */ this._originalBlendValue = null;
        /**
         * The offsets cache of the runtime animation
         */ this._offsetsCache = {};
        /**
         * The high limits cache of the runtime animation
         */ this._highLimitsCache = {};
        /**
         * Specifies if the runtime animation has been stopped
         */ this._stopped = false;
        /**
         * The blending factor of the runtime animation
         */ this._blendingFactor = 0;
        /**
         * The current value of the runtime animation
         */ this._currentValue = null;
        this._currentActiveTarget = null;
        this._directTarget = null;
        /**
         * The target path of the runtime animation
         */ this._targetPath = "";
        /**
         * The weight of the runtime animation
         */ this._weight = 1.0;
        /**
         * The absolute frame offset of the runtime animation
         */ this._absoluteFrameOffset = 0;
        /**
         * The previous elapsed time (since start of animation) of the runtime animation
         */ this._previousElapsedTime = 0;
        this._yoyoDirection = 1;
        /**
         * The previous absolute frame of the runtime animation (meaning, without taking into account the from/to values, only the elapsed time and the fps)
         */ this._previousAbsoluteFrame = 0;
        this._targetIsArray = false;
        /** @internal */ this._coreRuntimeAnimation = null;
        this._animation = animation;
        this._target = target;
        this._scene = scene;
        this._host = host;
        this._activeTargets = [];
        animation._runtimeAnimations.push(this);
        // State
        this._animationState = {
            key: 0,
            repeatCount: 0,
            loopMode: this._getCorrectLoopMode()
        };
        if (this._animation.dataType === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Animation"].ANIMATIONTYPE_MATRIX) {
            this._animationState.workValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].Zero();
        }
        // Limits
        this._keys = this._animation.getKeys();
        this._minFrame = this._keys[0].frame;
        this._maxFrame = this._keys[this._keys.length - 1].frame;
        // Add a start key at frame 0 if missing
        if (this._minFrame !== 0) {
            const newKey = {
                frame: 0,
                value: this._keys[0].value
            };
            this._keys.splice(0, 0, newKey);
        }
        // Check data
        if (this._target instanceof Array) {
            let index = 0;
            for (const target of this._target){
                this._preparePath(target, index);
                this._getOriginalValues(index);
                index++;
            }
            this._targetIsArray = true;
        } else {
            this._preparePath(this._target);
            this._getOriginalValues();
            this._targetIsArray = false;
            this._directTarget = this._activeTargets[0];
        }
        // Cloning events locally
        const events = animation.getEvents();
        if (events && events.length > 0) {
            for (const e of events){
                this._events.push(e._clone());
            }
        }
        this._enableBlending = target && target.animationPropertiesOverride ? target.animationPropertiesOverride.enableBlending : this._animation.enableBlending;
    }
    _preparePath(target, targetIndex = 0) {
        const targetPropertyPath = this._animation.targetPropertyPath;
        if (targetPropertyPath.length > 1) {
            let property = target;
            for(let index = 0; index < targetPropertyPath.length - 1; index++){
                const name = targetPropertyPath[index];
                property = property[name];
                if (property === undefined) {
                    throw new Error(`Invalid property (${name}) in property path (${targetPropertyPath.join(".")})`);
                }
            }
            this._targetPath = targetPropertyPath[targetPropertyPath.length - 1];
            this._activeTargets[targetIndex] = property;
        } else {
            this._targetPath = targetPropertyPath[0];
            this._activeTargets[targetIndex] = target;
        }
        if (this._activeTargets[targetIndex][this._targetPath] === undefined) {
            throw new Error(`Invalid property (${this._targetPath}) in property path (${targetPropertyPath.join(".")})`);
        }
    }
    /**
     * Gets the animation from the runtime animation
     */ get animation() {
        return this._animation;
    }
    /**
     * Resets the runtime animation to the beginning
     * @param restoreOriginal defines whether to restore the target property to the original value
     */ reset(restoreOriginal = false) {
        if (restoreOriginal) {
            if (this._target instanceof Array) {
                let index = 0;
                for (const target of this._target){
                    if (this._originalValue[index] !== undefined) {
                        this._setValue(target, this._activeTargets[index], this._originalValue[index], -1, index);
                    }
                    index++;
                }
            } else {
                if (this._originalValue[0] !== undefined) {
                    this._setValue(this._target, this._directTarget, this._originalValue[0], -1, 0);
                }
            }
        }
        this._offsetsCache = {};
        this._highLimitsCache = {};
        this._currentFrame = 0;
        this._blendingFactor = 0;
        // Events
        for(let index = 0; index < this._events.length; index++){
            this._events[index].isDone = false;
        }
    }
    /**
     * Specifies if the runtime animation is stopped
     * @returns Boolean specifying if the runtime animation is stopped
     */ isStopped() {
        return this._stopped;
    }
    /**
     * Disposes of the runtime animation
     */ dispose() {
        const index = this._animation.runtimeAnimations.indexOf(this);
        if (index > -1) {
            this._animation.runtimeAnimations.splice(index, 1);
        }
    }
    /**
     * Apply the interpolated value to the target
     * @param currentValue defines the value computed by the animation
     * @param weight defines the weight to apply to this value (Defaults to 1.0)
     */ setValue(currentValue, weight) {
        if (this._targetIsArray) {
            for(let index = 0; index < this._target.length; index++){
                const target = this._target[index];
                this._setValue(target, this._activeTargets[index], currentValue, weight, index);
            }
            return;
        }
        this._setValue(this._target, this._directTarget, currentValue, weight, 0);
    }
    _getOriginalValues(targetIndex = 0) {
        let originalValue;
        const target = this._activeTargets[targetIndex];
        if (target.getLocalMatrix && this._targetPath === "_matrix") {
            // For bones
            originalValue = target.getLocalMatrix();
        } else {
            originalValue = target[this._targetPath];
        }
        if (originalValue && originalValue.clone) {
            this._originalValue[targetIndex] = originalValue.clone();
        } else {
            this._originalValue[targetIndex] = originalValue;
        }
    }
    _registerTargetForLateAnimationBinding(runtimeAnimation, originalValue) {
        const target = runtimeAnimation.target;
        this._scene._registeredForLateAnimationBindings.pushNoDuplicate(target);
        if (!target._lateAnimationHolders) {
            target._lateAnimationHolders = {};
        }
        if (!target._lateAnimationHolders[runtimeAnimation.targetPath]) {
            target._lateAnimationHolders[runtimeAnimation.targetPath] = {
                totalWeight: 0,
                totalAdditiveWeight: 0,
                animations: [],
                additiveAnimations: [],
                originalValue: originalValue
            };
        }
        if (runtimeAnimation.isAdditive) {
            target._lateAnimationHolders[runtimeAnimation.targetPath].additiveAnimations.push(runtimeAnimation);
            target._lateAnimationHolders[runtimeAnimation.targetPath].totalAdditiveWeight += runtimeAnimation.weight;
        } else {
            target._lateAnimationHolders[runtimeAnimation.targetPath].animations.push(runtimeAnimation);
            target._lateAnimationHolders[runtimeAnimation.targetPath].totalWeight += runtimeAnimation.weight;
        }
    }
    _setValue(target, destination, currentValue, weight, targetIndex) {
        // Set value
        this._currentActiveTarget = destination;
        this._weight = weight;
        if (this._enableBlending && this._blendingFactor <= 1.0) {
            if (!this._originalBlendValue) {
                const originalValue = destination[this._targetPath];
                if (originalValue.clone) {
                    this._originalBlendValue = originalValue.clone();
                } else {
                    this._originalBlendValue = originalValue;
                }
            }
            if (this._originalBlendValue.m) {
                // Matrix
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Animation"].AllowMatrixDecomposeForInterpolation) {
                    if (this._currentValue) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].DecomposeLerpToRef(this._originalBlendValue, currentValue, this._blendingFactor, this._currentValue);
                    } else {
                        this._currentValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].DecomposeLerp(this._originalBlendValue, currentValue, this._blendingFactor);
                    }
                } else {
                    if (this._currentValue) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].LerpToRef(this._originalBlendValue, currentValue, this._blendingFactor, this._currentValue);
                    } else {
                        this._currentValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].Lerp(this._originalBlendValue, currentValue, this._blendingFactor);
                    }
                }
            } else {
                this._currentValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Animation"]._UniversalLerp(this._originalBlendValue, currentValue, this._blendingFactor);
            }
            const blendingSpeed = target && target.animationPropertiesOverride ? target.animationPropertiesOverride.blendingSpeed : this._animation.blendingSpeed;
            this._blendingFactor += blendingSpeed;
        } else {
            if (!this._currentValue) {
                if (currentValue?.clone) {
                    this._currentValue = currentValue.clone();
                } else {
                    this._currentValue = currentValue;
                }
            } else if (this._currentValue.copyFrom) {
                this._currentValue.copyFrom(currentValue);
            } else {
                this._currentValue = currentValue;
            }
        }
        if (weight !== -1.0) {
            this._registerTargetForLateAnimationBinding(this, this._originalValue[targetIndex]);
        } else {
            if (this._animationState.loopMode === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Animation"].ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT) {
                if (this._currentValue.addToRef) {
                    this._currentValue.addToRef(this._originalValue[targetIndex], destination[this._targetPath]);
                } else {
                    destination[this._targetPath] = this._originalValue[targetIndex] + this._currentValue;
                }
            } else {
                destination[this._targetPath] = this._currentValue;
            }
        }
        if (target.markAsDirty) {
            target.markAsDirty(this._animation.targetProperty);
        }
    }
    /**
     * Gets the loop pmode of the runtime animation
     * @returns Loop Mode
     */ _getCorrectLoopMode() {
        if (this._target && this._target.animationPropertiesOverride) {
            return this._target.animationPropertiesOverride.loopMode;
        }
        return this._animation.loopMode;
    }
    /**
     * Move the current animation to a given frame
     * @param frame defines the frame to move to
     * @param weight defines the weight to apply to the animation (-1.0 by default)
     */ goToFrame(frame, weight = -1) {
        const keys = this._animation.getKeys();
        if (frame < keys[0].frame) {
            frame = keys[0].frame;
        } else if (frame > keys[keys.length - 1].frame) {
            frame = keys[keys.length - 1].frame;
        }
        // Need to reset animation events
        const events = this._events;
        if (events.length) {
            for(let index = 0; index < events.length; index++){
                if (!events[index].onlyOnce) {
                    // reset events in the future
                    events[index].isDone = events[index].frame < frame;
                }
            }
        }
        this._currentFrame = frame;
        const currentValue = this._animation._interpolate(frame, this._animationState);
        this.setValue(currentValue, weight);
    }
    /**
     * @internal Internal use only
     */ _prepareForSpeedRatioChange(newSpeedRatio) {
        const newAbsoluteFrame = this._previousElapsedTime * (this._animation.framePerSecond * newSpeedRatio) / 1000.0;
        this._absoluteFrameOffset = this._previousAbsoluteFrame - newAbsoluteFrame;
    }
    /**
     * Execute the current animation
     * @param elapsedTimeSinceAnimationStart defines the elapsed time (in milliseconds) since the animation was started
     * @param from defines the lower frame of the animation range
     * @param to defines the upper frame of the animation range
     * @param loop defines if the current animation must loop
     * @param speedRatio defines the current speed ratio
     * @param weight defines the weight of the animation (default is -1 so no weight)
     * @returns a boolean indicating if the animation is running
     */ animate(elapsedTimeSinceAnimationStart, from, to, loop, speedRatio, weight = -1.0) {
        const animation = this._animation;
        const targetPropertyPath = animation.targetPropertyPath;
        if (!targetPropertyPath || targetPropertyPath.length < 1) {
            this._stopped = true;
            return false;
        }
        let returnValue = true;
        let currentFrame;
        const events = this._events;
        let frameRange = 0;
        if (!this._coreRuntimeAnimation) {
            // Check limits
            if (from < this._minFrame || from > this._maxFrame) {
                from = this._minFrame;
            }
            if (to < this._minFrame || to > this._maxFrame) {
                to = this._maxFrame;
            }
            frameRange = to - from;
            let offsetValue;
            // Compute the frame according to the elapsed time and the fps of the animation ("from" and "to" are not factored in!)
            let absoluteFrame = elapsedTimeSinceAnimationStart * (animation.framePerSecond * speedRatio) / 1000.0 + this._absoluteFrameOffset;
            let highLimitValue = 0;
            // Apply the yoyo function if required
            let yoyoLoop = false;
            const yoyoMode = loop && this._animationState.loopMode === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Animation"].ANIMATIONLOOPMODE_YOYO;
            if (yoyoMode) {
                const position = (absoluteFrame - from) / frameRange;
                // Apply the yoyo curve
                const sin = Math.sin(position * Math.PI);
                const yoyoPosition = Math.abs(sin);
                // Map the yoyo position back to the range
                absoluteFrame = yoyoPosition * frameRange + from;
                const direction = sin >= 0 ? 1 : -1;
                if (this._yoyoDirection !== direction) {
                    yoyoLoop = true;
                }
                this._yoyoDirection = direction;
            }
            this._previousElapsedTime = elapsedTimeSinceAnimationStart;
            this._previousAbsoluteFrame = absoluteFrame;
            if (!loop && to >= from && (absoluteFrame >= frameRange && speedRatio > 0 || absoluteFrame <= 0 && speedRatio < 0)) {
                // If we are out of range and not looping get back to caller
                returnValue = false;
                highLimitValue = animation.evaluate(to);
            } else if (!loop && from >= to && (absoluteFrame <= frameRange && speedRatio < 0 || absoluteFrame >= 0 && speedRatio > 0)) {
                returnValue = false;
                highLimitValue = animation.evaluate(from);
            } else if (this._animationState.loopMode !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Animation"].ANIMATIONLOOPMODE_CYCLE) {
                const keyOffset = to.toString() + from.toString();
                if (!this._offsetsCache[keyOffset]) {
                    this._animationState.repeatCount = 0;
                    this._animationState.loopMode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Animation"].ANIMATIONLOOPMODE_CYCLE; // force a specific codepath in animation._interpolate()!
                    const fromValue = animation._interpolate(from, this._animationState);
                    const toValue = animation._interpolate(to, this._animationState);
                    this._animationState.loopMode = this._getCorrectLoopMode();
                    switch(animation.dataType){
                        // Float
                        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Animation"].ANIMATIONTYPE_FLOAT:
                            this._offsetsCache[keyOffset] = toValue - fromValue;
                            break;
                        // Quaternion
                        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Animation"].ANIMATIONTYPE_QUATERNION:
                            this._offsetsCache[keyOffset] = toValue.subtract(fromValue);
                            break;
                        // Vector3
                        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Animation"].ANIMATIONTYPE_VECTOR3:
                            this._offsetsCache[keyOffset] = toValue.subtract(fromValue);
                            break;
                        // Vector2
                        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Animation"].ANIMATIONTYPE_VECTOR2:
                            this._offsetsCache[keyOffset] = toValue.subtract(fromValue);
                            break;
                        // Size
                        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Animation"].ANIMATIONTYPE_SIZE:
                            this._offsetsCache[keyOffset] = toValue.subtract(fromValue);
                            break;
                        // Color3
                        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Animation"].ANIMATIONTYPE_COLOR3:
                            this._offsetsCache[keyOffset] = toValue.subtract(fromValue);
                            break;
                        default:
                            break;
                    }
                    this._highLimitsCache[keyOffset] = toValue;
                }
                highLimitValue = this._highLimitsCache[keyOffset];
                offsetValue = this._offsetsCache[keyOffset];
            }
            if (offsetValue === undefined) {
                switch(animation.dataType){
                    // Float
                    case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Animation"].ANIMATIONTYPE_FLOAT:
                        offsetValue = 0;
                        break;
                    // Quaternion
                    case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Animation"].ANIMATIONTYPE_QUATERNION:
                        offsetValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_StaticOffsetValueQuaternion"];
                        break;
                    // Vector3
                    case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Animation"].ANIMATIONTYPE_VECTOR3:
                        offsetValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_StaticOffsetValueVector3"];
                        break;
                    // Vector2
                    case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Animation"].ANIMATIONTYPE_VECTOR2:
                        offsetValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_StaticOffsetValueVector2"];
                        break;
                    // Size
                    case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Animation"].ANIMATIONTYPE_SIZE:
                        offsetValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_StaticOffsetValueSize"];
                        break;
                    // Color3
                    case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Animation"].ANIMATIONTYPE_COLOR3:
                        offsetValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_StaticOffsetValueColor3"];
                        break;
                    case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Animation"].ANIMATIONTYPE_COLOR4:
                        offsetValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_StaticOffsetValueColor4"];
                        break;
                }
            }
            // Compute value
            if (this._host && this._host.syncRoot) {
                // If we must sync with an animatable, calculate the current frame based on the frame of the root animatable
                const syncRoot = this._host.syncRoot;
                const hostNormalizedFrame = (syncRoot.masterFrame - syncRoot.fromFrame) / (syncRoot.toFrame - syncRoot.fromFrame);
                currentFrame = from + frameRange * hostNormalizedFrame;
            } else {
                if (absoluteFrame > 0 && from > to || absoluteFrame < 0 && from < to) {
                    currentFrame = returnValue && frameRange !== 0 ? to + absoluteFrame % frameRange : from;
                } else {
                    currentFrame = returnValue && frameRange !== 0 ? from + absoluteFrame % frameRange : to;
                }
            }
            // Reset event/state if looping
            if (!yoyoMode && (speedRatio > 0 && this.currentFrame > currentFrame || speedRatio < 0 && this.currentFrame < currentFrame) || yoyoMode && yoyoLoop) {
                this._onLoop();
                // Need to reset animation events
                for(let index = 0; index < events.length; index++){
                    if (!events[index].onlyOnce) {
                        // reset event, the animation is looping
                        events[index].isDone = false;
                    }
                }
                this._animationState.key = speedRatio > 0 ? 0 : animation.getKeys().length - 1;
            }
            this._currentFrame = currentFrame;
            this._animationState.repeatCount = frameRange === 0 ? 0 : absoluteFrame / frameRange >> 0;
            this._animationState.highLimitValue = highLimitValue;
            this._animationState.offsetValue = offsetValue;
        } else {
            frameRange = to - from;
            currentFrame = this._coreRuntimeAnimation.currentFrame;
            this._currentFrame = currentFrame;
            this._animationState.repeatCount = this._coreRuntimeAnimation._animationState.repeatCount;
            this._animationState.highLimitValue = this._coreRuntimeAnimation._animationState.highLimitValue;
            this._animationState.offsetValue = this._coreRuntimeAnimation._animationState.offsetValue;
        }
        const currentValue = animation._interpolate(currentFrame, this._animationState);
        // Set value
        this.setValue(currentValue, weight);
        // Check events
        if (events.length) {
            for(let index = 0; index < events.length; index++){
                // Make sure current frame has passed event frame and that event frame is within the current range
                // Also, handle both forward and reverse animations
                if (frameRange >= 0 && currentFrame >= events[index].frame && events[index].frame >= from || frameRange < 0 && currentFrame <= events[index].frame && events[index].frame <= from) {
                    const event = events[index];
                    if (!event.isDone) {
                        // If event should be done only once, remove it.
                        if (event.onlyOnce) {
                            events.splice(index, 1);
                            index--;
                        }
                        event.isDone = true;
                        event.action(currentFrame);
                    } // Don't do anything if the event has already been done.
                }
            }
        }
        if (!returnValue) {
            this._stopped = true;
        }
        return returnValue;
    }
} //# sourceMappingURL=runtimeAnimation.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Animations/animatable.core.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AddAnimationExtensions",
    ()=>AddAnimationExtensions,
    "Animatable",
    ()=>Animatable,
    "RegisterTargetForLateAnimationBinding",
    ()=>RegisterTargetForLateAnimationBinding
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$runtimeAnimation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Animations/runtimeAnimation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Animations/animation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$precisionDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/precisionDate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
;
;
;
;
;
class Animatable {
    /**
     * Gets the root Animatable used to synchronize and normalize animations
     */ get syncRoot() {
        return this._syncRoot;
    }
    /**
     * Gets the current frame of the first RuntimeAnimation
     * Used to synchronize Animatables
     */ get masterFrame() {
        if (this._runtimeAnimations.length === 0) {
            return 0;
        }
        return this._runtimeAnimations[0].currentFrame;
    }
    /**
     * Gets or sets the animatable weight (-1.0 by default meaning not weighted)
     */ get weight() {
        return this._weight;
    }
    set weight(value) {
        if (value === -1) {
            // -1 is ok and means no weight
            this._weight = -1;
            return;
        }
        // Else weight must be in [0, 1] range
        this._weight = Math.min(Math.max(value, 0), 1.0);
    }
    /**
     * Gets or sets the speed ratio to apply to the animatable (1.0 by default)
     */ get speedRatio() {
        return this._speedRatio;
    }
    set speedRatio(value) {
        for(let index = 0; index < this._runtimeAnimations.length; index++){
            const animation = this._runtimeAnimations[index];
            animation._prepareForSpeedRatioChange(value);
        }
        this._speedRatio = value;
        // Resync _manualJumpDelay in case goToFrame was called before speedRatio was set.
        if (this._goToFrame !== null) {
            this.goToFrame(this._goToFrame);
        }
    }
    /**
     * Gets the elapsed time since the animatable started in milliseconds
     */ get elapsedTime() {
        return this._localDelayOffset === null ? 0 : this._scene._animationTime - this._localDelayOffset;
    }
    /**
     * Creates a new Animatable
     * @param scene defines the hosting scene
     * @param target defines the target object
     * @param fromFrame defines the starting frame number (default is 0)
     * @param toFrame defines the ending frame number (default is 100)
     * @param loopAnimation defines if the animation must loop (default is false)
     * @param speedRatio defines the factor to apply to animation speed (default is 1)
     * @param onAnimationEnd defines a callback to call when animation ends if it is not looping
     * @param animations defines a group of animation to add to the new Animatable
     * @param onAnimationLoop defines a callback to call when animation loops
     * @param isAdditive defines whether the animation should be evaluated additively
     * @param playOrder defines the order in which this animatable should be processed in the list of active animatables (default: 0)
     */ constructor(scene, /** defines the target object */ target, /** [0] defines the starting frame number (default is 0) */ fromFrame = 0, /** [100] defines the ending frame number (default is 100) */ toFrame = 100, /** [false] defines if the animation must loop (default is false)  */ loopAnimation = false, speedRatio = 1.0, /** defines a callback to call when animation ends if it is not looping */ onAnimationEnd, animations, /** defines a callback to call when animation loops */ onAnimationLoop, /** [false] defines whether the animation should be evaluated additively */ isAdditive = false, /** [0] defines the order in which this animatable should be processed in the list of active animatables (default: 0) */ playOrder = 0){
        this.target = target;
        this.fromFrame = fromFrame;
        this.toFrame = toFrame;
        this.loopAnimation = loopAnimation;
        this.onAnimationEnd = onAnimationEnd;
        this.onAnimationLoop = onAnimationLoop;
        this.isAdditive = isAdditive;
        this.playOrder = playOrder;
        this._localDelayOffset = null;
        this._pausedDelay = null;
        this._manualJumpDelay = null;
        /** @hidden */ this._runtimeAnimations = new Array();
        this._paused = false;
        this._speedRatio = 1;
        this._weight = -1.0;
        this._previousWeight = -1.0;
        this._syncRoot = null;
        this._frameToSyncFromJump = null;
        this._goToFrame = null;
        /**
         * Gets or sets a boolean indicating if the animatable must be disposed and removed at the end of the animation.
         * This will only apply for non looping animation (default is true)
         */ this.disposeOnEnd = true;
        /**
         * Gets a boolean indicating if the animation has started
         */ this.animationStarted = false;
        /**
         * Observer raised when the animation ends
         */ this.onAnimationEndObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * Observer raised when the animation loops
         */ this.onAnimationLoopObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        this._scene = scene;
        if (animations) {
            this.appendAnimations(target, animations);
        }
        this._speedRatio = speedRatio;
        scene._activeAnimatables.push(this);
    }
    // Methods
    /**
     * Synchronize and normalize current Animatable with a source Animatable
     * This is useful when using animation weights and when animations are not of the same length
     * @param root defines the root Animatable to synchronize with (null to stop synchronizing)
     * @returns the current Animatable
     */ syncWith(root) {
        this._syncRoot = root;
        if (root) {
            // Make sure this animatable will animate after the root
            const index = this._scene._activeAnimatables.indexOf(this);
            if (index > -1) {
                this._scene._activeAnimatables.splice(index, 1);
                this._scene._activeAnimatables.push(this);
            }
        }
        return this;
    }
    /**
     * Gets the list of runtime animations
     * @returns an array of RuntimeAnimation
     */ getAnimations() {
        return this._runtimeAnimations;
    }
    /**
     * Adds more animations to the current animatable
     * @param target defines the target of the animations
     * @param animations defines the new animations to add
     */ appendAnimations(target, animations) {
        for(let index = 0; index < animations.length; index++){
            const animation = animations[index];
            const newRuntimeAnimation = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$runtimeAnimation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RuntimeAnimation"](target, animation, this._scene, this);
            newRuntimeAnimation._onLoop = ()=>{
                this.onAnimationLoopObservable.notifyObservers(this);
                if (this.onAnimationLoop) {
                    this.onAnimationLoop();
                }
            };
            this._runtimeAnimations.push(newRuntimeAnimation);
        }
    }
    /**
     * Gets the source animation for a specific property
     * @param property defines the property to look for
     * @returns null or the source animation for the given property
     */ getAnimationByTargetProperty(property) {
        const runtimeAnimations = this._runtimeAnimations;
        for(let index = 0; index < runtimeAnimations.length; index++){
            if (runtimeAnimations[index].animation.targetProperty === property) {
                return runtimeAnimations[index].animation;
            }
        }
        return null;
    }
    /**
     * Gets the runtime animation for a specific property
     * @param property defines the property to look for
     * @returns null or the runtime animation for the given property
     */ getRuntimeAnimationByTargetProperty(property) {
        const runtimeAnimations = this._runtimeAnimations;
        for(let index = 0; index < runtimeAnimations.length; index++){
            if (runtimeAnimations[index].animation.targetProperty === property) {
                return runtimeAnimations[index];
            }
        }
        return null;
    }
    /**
     * Resets the animatable to its original state
     */ reset() {
        const runtimeAnimations = this._runtimeAnimations;
        for(let index = 0; index < runtimeAnimations.length; index++){
            runtimeAnimations[index].reset(true);
        }
        this._localDelayOffset = null;
        this._pausedDelay = null;
    }
    /**
     * Allows the animatable to blend with current running animations
     * @see https://doc.babylonjs.com/features/featuresDeepDive/animation/advanced_animations#animation-blending
     * @param blendingSpeed defines the blending speed to use
     */ enableBlending(blendingSpeed) {
        const runtimeAnimations = this._runtimeAnimations;
        for(let index = 0; index < runtimeAnimations.length; index++){
            runtimeAnimations[index].animation.enableBlending = true;
            runtimeAnimations[index].animation.blendingSpeed = blendingSpeed;
        }
    }
    /**
     * Disable animation blending
     * @see https://doc.babylonjs.com/features/featuresDeepDive/animation/advanced_animations#animation-blending
     */ disableBlending() {
        const runtimeAnimations = this._runtimeAnimations;
        for(let index = 0; index < runtimeAnimations.length; index++){
            runtimeAnimations[index].animation.enableBlending = false;
        }
    }
    /**
     * Jump directly to a given frame
     * @param frame defines the frame to jump to
     * @param useWeight defines whether the animation weight should be applied to the image to be jumped to (false by default)
     */ goToFrame(frame, useWeight = false) {
        const runtimeAnimations = this._runtimeAnimations;
        if (runtimeAnimations[0]) {
            const fps = runtimeAnimations[0].animation.framePerSecond;
            this._frameToSyncFromJump = this._frameToSyncFromJump ?? runtimeAnimations[0].currentFrame;
            const delay = this.speedRatio === 0 ? 0 : (frame - this._frameToSyncFromJump) / fps * 1000 / this.speedRatio;
            this._manualJumpDelay = -delay;
        }
        for(let index = 0; index < runtimeAnimations.length; index++){
            runtimeAnimations[index].goToFrame(frame, useWeight ? this._weight : -1);
        }
        this._goToFrame = frame;
    }
    /**
     * Returns true if the animations for this animatable are paused
     */ get paused() {
        return this._paused;
    }
    /**
     * Pause the animation
     */ pause() {
        if (this._paused) {
            return;
        }
        this._paused = true;
    }
    /**
     * Restart the animation
     */ restart() {
        this._paused = false;
    }
    _raiseOnAnimationEnd() {
        if (this.onAnimationEnd) {
            this.onAnimationEnd();
        }
        this.onAnimationEndObservable.notifyObservers(this);
    }
    /**
     * Stop and delete the current animation
     * @param animationName defines a string used to only stop some of the runtime animations instead of all
     * @param targetMask a function that determines if the animation should be stopped based on its target (all animations will be stopped if both this and animationName are empty)
     * @param useGlobalSplice if true, the animatables will be removed by the caller of this function (false by default)
     * @param skipOnAnimationEnd defines if the system should not raise onAnimationEnd. Default is false
     */ stop(animationName, targetMask, useGlobalSplice = false, skipOnAnimationEnd = false) {
        if (animationName || targetMask) {
            const idx = this._scene._activeAnimatables.indexOf(this);
            if (idx > -1) {
                const runtimeAnimations = this._runtimeAnimations;
                for(let index = runtimeAnimations.length - 1; index >= 0; index--){
                    const runtimeAnimation = runtimeAnimations[index];
                    if (animationName && runtimeAnimation.animation.name != animationName) {
                        continue;
                    }
                    if (targetMask && !targetMask(runtimeAnimation.target)) {
                        continue;
                    }
                    runtimeAnimation.dispose();
                    runtimeAnimations.splice(index, 1);
                }
                if (runtimeAnimations.length == 0) {
                    if (!useGlobalSplice) {
                        this._scene._activeAnimatables.splice(idx, 1);
                    }
                    if (!skipOnAnimationEnd) {
                        this._raiseOnAnimationEnd();
                    }
                }
            }
        } else {
            const index = this._scene._activeAnimatables.indexOf(this);
            if (index > -1) {
                if (!useGlobalSplice) {
                    this._scene._activeAnimatables.splice(index, 1);
                }
                const runtimeAnimations = this._runtimeAnimations;
                for(let index = 0; index < runtimeAnimations.length; index++){
                    runtimeAnimations[index].dispose();
                }
                this._runtimeAnimations.length = 0;
                if (!skipOnAnimationEnd) {
                    this._raiseOnAnimationEnd();
                }
            }
        }
    }
    /**
     * Wait asynchronously for the animation to end
     * @returns a promise which will be fulfilled when the animation ends
     */ async waitAsync() {
        return await new Promise((resolve)=>{
            this.onAnimationEndObservable.add(()=>{
                resolve(this);
            }, undefined, undefined, this, true);
        });
    }
    /**
     * @internal
     */ _animate(delay) {
        if (this._paused) {
            this.animationStarted = false;
            if (this._pausedDelay === null) {
                this._pausedDelay = delay;
            }
            return true;
        }
        if (this._localDelayOffset === null) {
            this._localDelayOffset = delay;
            this._pausedDelay = null;
        } else if (this._pausedDelay !== null) {
            this._localDelayOffset += delay - this._pausedDelay;
            this._pausedDelay = null;
        }
        if (this._manualJumpDelay !== null) {
            this._localDelayOffset += this.speedRatio < 0 ? -this._manualJumpDelay : this._manualJumpDelay;
            this._manualJumpDelay = null;
            this._frameToSyncFromJump = null;
        }
        this._goToFrame = null;
        if (!Animatable.ProcessPausedAnimatables && this._weight === 0 && this._previousWeight === 0) {
            // We consider that an animatable with a weight === 0 is "actively" paused
            return true;
        }
        this._previousWeight = this._weight;
        // Animating
        let running = false;
        const runtimeAnimations = this._runtimeAnimations;
        let index;
        for(index = 0; index < runtimeAnimations.length; index++){
            const animation = runtimeAnimations[index];
            const isRunning = animation.animate(delay - this._localDelayOffset, this.fromFrame, this.toFrame, this.loopAnimation, this._speedRatio, this._weight);
            running = running || isRunning;
        }
        this.animationStarted = running;
        if (!running) {
            if (this.disposeOnEnd) {
                // Remove from active animatables
                index = this._scene._activeAnimatables.indexOf(this);
                this._scene._activeAnimatables.splice(index, 1);
                // Dispose all runtime animations
                for(index = 0; index < runtimeAnimations.length; index++){
                    runtimeAnimations[index].dispose();
                }
            }
            this._raiseOnAnimationEnd();
            if (this.disposeOnEnd) {
                this.onAnimationEnd = null;
                this.onAnimationLoop = null;
                this.onAnimationLoopObservable.clear();
                this.onAnimationEndObservable.clear();
            }
        }
        return running;
    }
}
/**
 * If true, the animatable will be processed even if it is considered actively paused (weight of 0 and previous weight of 0).
 * This can be used to force the full processing of paused animatables in the animation engine.
 * Default is false.
 */ Animatable.ProcessPausedAnimatables = false;
/** @internal */ function ProcessLateAnimationBindingsForMatrices(holder) {
    if (holder.totalWeight === 0 && holder.totalAdditiveWeight === 0) {
        return holder.originalValue;
    }
    let normalizer = 1.0;
    const finalPosition = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0];
    const finalScaling = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[1];
    const finalQuaternion = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Quaternion[0];
    let startIndex = 0;
    const originalAnimation = holder.animations[0];
    const originalValue = holder.originalValue;
    let scale = 1;
    let skipOverride = false;
    if (holder.totalWeight < 1.0) {
        // We need to mix the original value in
        scale = 1.0 - holder.totalWeight;
        originalValue.decompose(finalScaling, finalQuaternion, finalPosition);
    } else {
        startIndex = 1;
        // We need to normalize the weights
        normalizer = holder.totalWeight;
        scale = originalAnimation.weight / normalizer;
        if (scale == 1) {
            if (holder.totalAdditiveWeight) {
                skipOverride = true;
            } else {
                return originalAnimation.currentValue;
            }
        }
        originalAnimation.currentValue.decompose(finalScaling, finalQuaternion, finalPosition);
    }
    // Add up the override animations
    if (!skipOverride) {
        finalScaling.scaleInPlace(scale);
        finalPosition.scaleInPlace(scale);
        finalQuaternion.scaleInPlace(scale);
        for(let animIndex = startIndex; animIndex < holder.animations.length; animIndex++){
            const runtimeAnimation = holder.animations[animIndex];
            if (runtimeAnimation.weight === 0) {
                continue;
            }
            scale = runtimeAnimation.weight / normalizer;
            const currentPosition = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[2];
            const currentScaling = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[3];
            const currentQuaternion = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Quaternion[1];
            runtimeAnimation.currentValue.decompose(currentScaling, currentQuaternion, currentPosition);
            currentScaling.scaleAndAddToRef(scale, finalScaling);
            currentQuaternion.scaleAndAddToRef(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].Dot(finalQuaternion, currentQuaternion) > 0 ? scale : -scale, finalQuaternion);
            currentPosition.scaleAndAddToRef(scale, finalPosition);
        }
        finalQuaternion.normalize();
    }
    // Add up the additive animations
    for(let animIndex = 0; animIndex < holder.additiveAnimations.length; animIndex++){
        const runtimeAnimation = holder.additiveAnimations[animIndex];
        if (runtimeAnimation.weight === 0) {
            continue;
        }
        const currentPosition = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[2];
        const currentScaling = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[3];
        const currentQuaternion = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Quaternion[1];
        runtimeAnimation.currentValue.decompose(currentScaling, currentQuaternion, currentPosition);
        currentScaling.multiplyToRef(finalScaling, currentScaling);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].LerpToRef(finalScaling, currentScaling, runtimeAnimation.weight, finalScaling);
        finalQuaternion.multiplyToRef(currentQuaternion, currentQuaternion);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].SlerpToRef(finalQuaternion, currentQuaternion, runtimeAnimation.weight, finalQuaternion);
        currentPosition.scaleAndAddToRef(runtimeAnimation.weight, finalPosition);
    }
    const workValue = originalAnimation ? originalAnimation._animationState.workValue : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[0].clone();
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].ComposeToRef(finalScaling, finalQuaternion, finalPosition, workValue);
    return workValue;
}
/** @internal */ function ProcessLateAnimationBindingsForQuaternions(holder, refQuaternion) {
    if (holder.totalWeight === 0 && holder.totalAdditiveWeight === 0) {
        return refQuaternion;
    }
    const originalAnimation = holder.animations[0];
    const originalValue = holder.originalValue;
    let cumulativeQuaternion = refQuaternion;
    if (holder.totalWeight === 0 && holder.totalAdditiveWeight > 0) {
        cumulativeQuaternion.copyFrom(originalValue);
    } else if (holder.animations.length === 1) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].SlerpToRef(originalValue, originalAnimation.currentValue, Math.min(1.0, holder.totalWeight), cumulativeQuaternion);
        if (holder.totalAdditiveWeight === 0) {
            return cumulativeQuaternion;
        }
    } else if (holder.animations.length > 1) {
        // Add up the override animations
        let normalizer = 1.0;
        let quaternions;
        let weights;
        if (holder.totalWeight < 1.0) {
            const scale = 1.0 - holder.totalWeight;
            quaternions = [];
            weights = [];
            quaternions.push(originalValue);
            weights.push(scale);
        } else {
            if (holder.animations.length === 2) {
                // Slerp as soon as we can
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].SlerpToRef(holder.animations[0].currentValue, holder.animations[1].currentValue, holder.animations[1].weight / holder.totalWeight, refQuaternion);
                if (holder.totalAdditiveWeight === 0) {
                    return refQuaternion;
                }
            }
            quaternions = [];
            weights = [];
            normalizer = holder.totalWeight;
        }
        for(let animIndex = 0; animIndex < holder.animations.length; animIndex++){
            const runtimeAnimation = holder.animations[animIndex];
            quaternions.push(runtimeAnimation.currentValue);
            weights.push(runtimeAnimation.weight / normalizer);
        }
        // https://gamedev.stackexchange.com/questions/62354/method-for-interpolation-between-3-quaternions
        let cumulativeAmount = 0;
        for(let index = 0; index < quaternions.length;){
            if (!index) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].SlerpToRef(quaternions[index], quaternions[index + 1], weights[index + 1] / (weights[index] + weights[index + 1]), refQuaternion);
                cumulativeQuaternion = refQuaternion;
                cumulativeAmount = weights[index] + weights[index + 1];
                index += 2;
                continue;
            }
            cumulativeAmount += weights[index];
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].SlerpToRef(cumulativeQuaternion, quaternions[index], weights[index] / cumulativeAmount, cumulativeQuaternion);
            index++;
        }
    }
    // Add up the additive animations
    for(let animIndex = 0; animIndex < holder.additiveAnimations.length; animIndex++){
        const runtimeAnimation = holder.additiveAnimations[animIndex];
        if (runtimeAnimation.weight === 0) {
            continue;
        }
        cumulativeQuaternion.multiplyToRef(runtimeAnimation.currentValue, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Quaternion[0]);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].SlerpToRef(cumulativeQuaternion, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Quaternion[0], runtimeAnimation.weight, cumulativeQuaternion);
    }
    return cumulativeQuaternion;
}
/** @internal */ function ProcessLateAnimationBindings(scene) {
    if (!scene._registeredForLateAnimationBindings.length) {
        return;
    }
    for(let index = 0; index < scene._registeredForLateAnimationBindings.length; index++){
        const target = scene._registeredForLateAnimationBindings.data[index];
        for(const path in target._lateAnimationHolders){
            const holder = target._lateAnimationHolders[path];
            const originalAnimation = holder.animations[0];
            const originalValue = holder.originalValue;
            if (originalValue === undefined || originalValue === null) {
                continue;
            }
            const matrixDecomposeMode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Animation"].AllowMatrixDecomposeForInterpolation && originalValue.m; // ie. data is matrix
            let finalValue = target[path];
            if (matrixDecomposeMode) {
                finalValue = ProcessLateAnimationBindingsForMatrices(holder);
            } else {
                const quaternionMode = originalValue.w !== undefined;
                if (quaternionMode) {
                    finalValue = ProcessLateAnimationBindingsForQuaternions(holder, finalValue || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].Identity());
                } else {
                    let startIndex = 0;
                    let normalizer = 1.0;
                    const originalAnimationIsLoopRelativeFromCurrent = originalAnimation && originalAnimation._animationState.loopMode === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Animation"].ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT;
                    if (holder.totalWeight < 1.0) {
                        // We need to mix the original value in
                        if (originalAnimationIsLoopRelativeFromCurrent) {
                            finalValue = originalValue.clone ? originalValue.clone() : originalValue;
                        } else if (originalAnimation && originalValue.scale) {
                            finalValue = originalValue.scale(1.0 - holder.totalWeight);
                        } else if (originalAnimation) {
                            finalValue = originalValue * (1.0 - holder.totalWeight);
                        } else if (originalValue.clone) {
                            finalValue = originalValue.clone();
                        } else {
                            finalValue = originalValue;
                        }
                    } else if (originalAnimation) {
                        // We need to normalize the weights
                        normalizer = holder.totalWeight;
                        const scale = originalAnimation.weight / normalizer;
                        if (scale !== 1) {
                            if (originalAnimation.currentValue.scale) {
                                finalValue = originalAnimation.currentValue.scale(scale);
                            } else {
                                finalValue = originalAnimation.currentValue * scale;
                            }
                        } else {
                            finalValue = originalAnimation.currentValue;
                        }
                        if (originalAnimationIsLoopRelativeFromCurrent) {
                            if (finalValue.addToRef) {
                                finalValue.addToRef(originalValue, finalValue);
                            } else {
                                finalValue += originalValue;
                            }
                        }
                        startIndex = 1;
                    }
                    // Add up the override animations
                    for(let animIndex = startIndex; animIndex < holder.animations.length; animIndex++){
                        const runtimeAnimation = holder.animations[animIndex];
                        const scale = runtimeAnimation.weight / normalizer;
                        if (!scale) {
                            continue;
                        } else if (runtimeAnimation.currentValue.scaleAndAddToRef) {
                            runtimeAnimation.currentValue.scaleAndAddToRef(scale, finalValue);
                        } else {
                            finalValue += runtimeAnimation.currentValue * scale;
                        }
                    }
                    // Add up the additive animations
                    for(let animIndex = 0; animIndex < holder.additiveAnimations.length; animIndex++){
                        const runtimeAnimation = holder.additiveAnimations[animIndex];
                        const scale = runtimeAnimation.weight;
                        if (!scale) {
                            continue;
                        } else if (runtimeAnimation.currentValue.scaleAndAddToRef) {
                            runtimeAnimation.currentValue.scaleAndAddToRef(scale, finalValue);
                        } else {
                            finalValue += runtimeAnimation.currentValue * scale;
                        }
                    }
                }
            }
            target[path] = finalValue;
        }
        target._lateAnimationHolders = {};
    }
    scene._registeredForLateAnimationBindings.reset();
}
function RegisterTargetForLateAnimationBinding(scene, runtimeAnimation, originalValue) {
    const target = runtimeAnimation.target;
    scene._registeredForLateAnimationBindings.pushNoDuplicate(target);
    if (!target._lateAnimationHolders) {
        target._lateAnimationHolders = {};
    }
    if (!target._lateAnimationHolders[runtimeAnimation.targetPath]) {
        target._lateAnimationHolders[runtimeAnimation.targetPath] = {
            totalWeight: 0,
            totalAdditiveWeight: 0,
            animations: [],
            additiveAnimations: [],
            originalValue: originalValue
        };
    }
    if (runtimeAnimation.isAdditive) {
        target._lateAnimationHolders[runtimeAnimation.targetPath].additiveAnimations.push(runtimeAnimation);
        target._lateAnimationHolders[runtimeAnimation.targetPath].totalAdditiveWeight += runtimeAnimation.weight;
    } else {
        target._lateAnimationHolders[runtimeAnimation.targetPath].animations.push(runtimeAnimation);
        target._lateAnimationHolders[runtimeAnimation.targetPath].totalWeight += runtimeAnimation.weight;
    }
}
function AddAnimationExtensions(sceneClass, boneClass) {
    if (boneClass) {
        boneClass.prototype.copyAnimationRange = function(source, rangeName, frameOffset, rescaleAsRequired = false, skelDimensionsRatio = null) {
            // all animation may be coming from a library skeleton, so may need to create animation
            if (this.animations.length === 0) {
                this.animations.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Animation"](this.name, "_matrix", source.animations[0].framePerSecond, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Animation"].ANIMATIONTYPE_MATRIX, 0));
                this.animations[0].setKeys([]);
            }
            // get animation info / verify there is such a range from the source bone
            const sourceRange = source.animations[0].getRange(rangeName);
            if (!sourceRange) {
                return false;
            }
            const from = sourceRange.from;
            const to = sourceRange.to;
            const sourceKeys = source.animations[0].getKeys();
            // rescaling prep
            const sourceBoneLength = source.length;
            const sourceParent = source.getParent();
            const parent = this.getParent();
            const parentScalingReqd = rescaleAsRequired && sourceParent && sourceBoneLength && this.length && sourceBoneLength !== this.length;
            const parentRatio = parentScalingReqd && parent && sourceParent ? parent.length / sourceParent.length : 1;
            const dimensionsScalingReqd = rescaleAsRequired && !parent && skelDimensionsRatio && (skelDimensionsRatio.x !== 1 || skelDimensionsRatio.y !== 1 || skelDimensionsRatio.z !== 1);
            const destKeys = this.animations[0].getKeys();
            // loop vars declaration
            let orig;
            let origTranslation;
            let mat;
            for(let key = 0, nKeys = sourceKeys.length; key < nKeys; key++){
                orig = sourceKeys[key];
                if (orig.frame >= from && orig.frame <= to) {
                    if (rescaleAsRequired) {
                        mat = orig.value.clone();
                        // scale based on parent ratio, when bone has parent
                        if (parentScalingReqd) {
                            origTranslation = mat.getTranslation();
                            mat.setTranslation(origTranslation.scaleInPlace(parentRatio));
                        // scale based on skeleton dimension ratio when root bone, and value is passed
                        } else if (dimensionsScalingReqd && skelDimensionsRatio) {
                            origTranslation = mat.getTranslation();
                            mat.setTranslation(origTranslation.multiplyInPlace(skelDimensionsRatio));
                        // use original when root bone, and no data for skelDimensionsRatio
                        } else {
                            mat = orig.value;
                        }
                    } else {
                        mat = orig.value;
                    }
                    destKeys.push({
                        frame: orig.frame + frameOffset,
                        value: mat
                    });
                }
            }
            this.animations[0].createRange(rangeName, from + frameOffset, to + frameOffset);
            return true;
        };
    }
    if (!sceneClass) {
        return;
    }
    sceneClass.prototype._animate = function(customDeltaTime) {
        if (!this.animationsEnabled) {
            return;
        }
        // Getting time
        const now = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$precisionDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PrecisionDate"].Now;
        if (!this._animationTimeLast) {
            if (this._pendingData.length > 0) {
                return;
            }
            this._animationTimeLast = now;
        }
        this.deltaTime = customDeltaTime !== undefined ? customDeltaTime : this.useConstantAnimationDeltaTime ? 16.0 : (now - this._animationTimeLast) * this.animationTimeScale;
        this._animationTimeLast = now;
        const animatables = this._activeAnimatables;
        if (animatables.length === 0) {
            return;
        }
        this._animationTime += this.deltaTime;
        const animationTime = this._animationTime;
        for(let index = 0; index < animatables.length; index++){
            const animatable = animatables[index];
            if (!animatable._animate(animationTime) && animatable.disposeOnEnd) {
                index--; // Array was updated
            }
        }
        // Late animation bindings
        ProcessLateAnimationBindings(this);
    };
    sceneClass.prototype.sortActiveAnimatables = function() {
        this._activeAnimatables.sort((a, b)=>{
            return a.playOrder - b.playOrder;
        });
    };
    sceneClass.prototype.beginWeightedAnimation = function(target, from, to, weight = 1.0, loop, speedRatio = 1.0, onAnimationEnd, animatable, targetMask, onAnimationLoop, isAdditive = false) {
        const returnedAnimatable = this.beginAnimation(target, from, to, loop, speedRatio, onAnimationEnd, animatable, false, targetMask, onAnimationLoop, isAdditive);
        returnedAnimatable.weight = weight;
        return returnedAnimatable;
    };
    sceneClass.prototype.beginAnimation = function(target, from, to, loop, speedRatio = 1.0, onAnimationEnd, animatable, stopCurrent = true, targetMask, onAnimationLoop, isAdditive = false) {
        // get speed speedRatio, to and from, based on the sign and value(s)
        if (speedRatio < 0) {
            const tmp = from;
            from = to;
            to = tmp;
            speedRatio = -speedRatio;
        }
        // if from > to switch speed ratio
        if (from > to) {
            speedRatio = -speedRatio;
        }
        if (stopCurrent) {
            this.stopAnimation(target, undefined, targetMask);
        }
        if (!animatable) {
            animatable = new Animatable(this, target, from, to, loop, speedRatio, onAnimationEnd, undefined, onAnimationLoop, isAdditive);
        }
        const shouldRunTargetAnimations = targetMask ? targetMask(target) : true;
        // Local animations
        if (target.animations && shouldRunTargetAnimations) {
            animatable.appendAnimations(target, target.animations);
        }
        // Children animations
        if (target.getAnimatables) {
            const animatables = target.getAnimatables();
            for(let index = 0; index < animatables.length; index++){
                this.beginAnimation(animatables[index], from, to, loop, speedRatio, onAnimationEnd, animatable, stopCurrent, targetMask, onAnimationLoop);
            }
        }
        animatable.reset();
        return animatable;
    };
    sceneClass.prototype.beginHierarchyAnimation = function(target, directDescendantsOnly, from, to, loop, speedRatio = 1.0, onAnimationEnd, animatable, stopCurrent = true, targetMask, onAnimationLoop, isAdditive = false) {
        const children = target.getDescendants(directDescendantsOnly);
        const result = [];
        result.push(this.beginAnimation(target, from, to, loop, speedRatio, onAnimationEnd, animatable, stopCurrent, targetMask, undefined, isAdditive));
        for (const child of children){
            result.push(this.beginAnimation(child, from, to, loop, speedRatio, onAnimationEnd, animatable, stopCurrent, targetMask, undefined, isAdditive));
        }
        return result;
    };
    sceneClass.prototype.beginDirectAnimation = function(target, animations, from, to, loop, speedRatio = 1.0, onAnimationEnd, onAnimationLoop, isAdditive = false) {
        // get speed speedRatio, to and from, based on the sign and value(s)
        if (speedRatio < 0) {
            const tmp = from;
            from = to;
            to = tmp;
            speedRatio = -speedRatio;
        }
        // if from > to switch speed ratio
        if (from > to) {
            speedRatio = -speedRatio;
        }
        const animatable = new Animatable(this, target, from, to, loop, speedRatio, onAnimationEnd, animations, onAnimationLoop, isAdditive);
        return animatable;
    };
    sceneClass.prototype.beginDirectHierarchyAnimation = function(target, directDescendantsOnly, animations, from, to, loop, speedRatio, onAnimationEnd, onAnimationLoop, isAdditive = false) {
        const children = target.getDescendants(directDescendantsOnly);
        const result = [];
        result.push(this.beginDirectAnimation(target, animations, from, to, loop, speedRatio, onAnimationEnd, onAnimationLoop, isAdditive));
        for (const child of children){
            result.push(this.beginDirectAnimation(child, animations, from, to, loop, speedRatio, onAnimationEnd, onAnimationLoop, isAdditive));
        }
        return result;
    };
    sceneClass.prototype.getAnimatableByTarget = function(target) {
        for(let index = 0; index < this._activeAnimatables.length; index++){
            if (this._activeAnimatables[index].target === target) {
                return this._activeAnimatables[index];
            }
        }
        return null;
    };
    sceneClass.prototype.getAllAnimatablesByTarget = function(target) {
        const result = [];
        for(let index = 0; index < this._activeAnimatables.length; index++){
            if (this._activeAnimatables[index].target === target) {
                result.push(this._activeAnimatables[index]);
            }
        }
        return result;
    };
    sceneClass.prototype.stopAnimation = function(target, animationName, targetMask) {
        const animatables = this.getAllAnimatablesByTarget(target);
        for (const animatable of animatables){
            animatable.stop(animationName, targetMask);
        }
    };
    sceneClass.prototype.stopAllAnimations = function() {
        if (this._activeAnimatables) {
            for(let i = 0; i < this._activeAnimatables.length; i++){
                this._activeAnimatables[i].stop(undefined, undefined, true);
            }
            this._activeAnimatables.length = 0;
        }
        for (const group of this.animationGroups){
            group.stop();
        }
    };
} //# sourceMappingURL=animatable.core.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Animations/animatable.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Bones$2f$bone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Bones/bone.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animatable$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Animations/animatable.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$scene$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/scene.js [app-client] (ecmascript)");
;
;
;
;
// Connect everything!
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animatable$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AddAnimationExtensions"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$scene$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Bones$2f$bone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bone"]); //# sourceMappingURL=animatable.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Animations/animationPropertiesOverride.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnimationPropertiesOverride",
    ()=>AnimationPropertiesOverride
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Animations/animation.js [app-client] (ecmascript)");
;
class AnimationPropertiesOverride {
    constructor(){
        /**
         * Gets or sets a value indicating if animation blending must be used
         */ this.enableBlending = false;
        /**
         * Gets or sets the blending speed to use when enableBlending is true
         */ this.blendingSpeed = 0.01;
        /**
         * Gets or sets the default loop mode to use
         */ this.loopMode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Animation"].ANIMATIONLOOPMODE_CYCLE;
    }
} //# sourceMappingURL=animationPropertiesOverride.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Animations/easing.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BackEase",
    ()=>BackEase,
    "BezierCurveEase",
    ()=>BezierCurveEase,
    "BounceEase",
    ()=>BounceEase,
    "CircleEase",
    ()=>CircleEase,
    "CubicEase",
    ()=>CubicEase,
    "EasingFunction",
    ()=>EasingFunction,
    "ElasticEase",
    ()=>ElasticEase,
    "ExponentialEase",
    ()=>ExponentialEase,
    "PowerEase",
    ()=>PowerEase,
    "QuadraticEase",
    ()=>QuadraticEase,
    "QuarticEase",
    ()=>QuarticEase,
    "QuinticEase",
    ()=>QuinticEase,
    "SineEase",
    ()=>SineEase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$path$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.path.js [app-client] (ecmascript)");
;
class EasingFunction {
    constructor(){
        this._easingMode = EasingFunction.EASINGMODE_EASEIN;
    }
    /**
     * Sets the easing mode of the current function.
     * @param easingMode Defines the willing mode (EASINGMODE_EASEIN, EASINGMODE_EASEOUT or EASINGMODE_EASEINOUT)
     */ setEasingMode(easingMode) {
        const n = Math.min(Math.max(easingMode, 0), 2);
        this._easingMode = n;
    }
    /**
     * Gets the current easing mode.
     * @returns the easing mode
     */ getEasingMode() {
        return this._easingMode;
    }
    /**
     * @internal
     */ // eslint-disable-next-line @typescript-eslint/no-unused-vars
    easeInCore(gradient) {
        throw new Error("You must implement this method");
    }
    /**
     * Given an input gradient between 0 and 1, this returns the corresponding value
     * of the easing function.
     * @param gradient Defines the value between 0 and 1 we want the easing value for
     * @returns the corresponding value on the curve defined by the easing function
     */ ease(gradient) {
        switch(this._easingMode){
            case EasingFunction.EASINGMODE_EASEIN:
                return this.easeInCore(gradient);
            case EasingFunction.EASINGMODE_EASEOUT:
                return 1 - this.easeInCore(1 - gradient);
        }
        if (gradient >= 0.5) {
            return (1 - this.easeInCore((1 - gradient) * 2)) * 0.5 + 0.5;
        }
        return this.easeInCore(gradient * 2) * 0.5;
    }
}
/**
 * Interpolation follows the mathematical formula associated with the easing function.
 */ EasingFunction.EASINGMODE_EASEIN = 0;
/**
 * Interpolation follows 100% interpolation minus the output of the formula associated with the easing function.
 */ EasingFunction.EASINGMODE_EASEOUT = 1;
/**
 * Interpolation uses EaseIn for the first half of the animation and EaseOut for the second half.
 */ EasingFunction.EASINGMODE_EASEINOUT = 2;
class CircleEase extends EasingFunction {
    /**
     * @internal
     */ easeInCore(gradient) {
        gradient = Math.max(0, Math.min(1, gradient));
        return 1.0 - Math.sqrt(1.0 - gradient * gradient);
    }
}
class BackEase extends EasingFunction {
    /**
     * Instantiates a back ease easing
     * @see https://easings.net/#easeInBack
     * @param amplitude Defines the amplitude of the function
     */ constructor(/** [1] Defines the amplitude of the function */ amplitude = 1){
        super();
        this.amplitude = amplitude;
    }
    /**
     * @internal
     */ easeInCore(gradient) {
        const num = Math.max(0, this.amplitude);
        return Math.pow(gradient, 3.0) - gradient * num * Math.sin(3.1415926535897931 * gradient);
    }
}
class BounceEase extends EasingFunction {
    /**
     * Instantiates a bounce easing
     * @see https://easings.net/#easeInBounce
     * @param bounces Defines the number of bounces
     * @param bounciness Defines the amplitude of the bounce
     */ constructor(/** [3] Defines the number of bounces */ bounces = 3, /** [2] Defines the amplitude of the bounce */ bounciness = 2){
        super();
        this.bounces = bounces;
        this.bounciness = bounciness;
    }
    /**
     * @internal
     */ easeInCore(gradient) {
        const y = Math.max(0.0, this.bounces);
        let bounciness = this.bounciness;
        if (bounciness <= 1.0) {
            bounciness = 1.001;
        }
        const num9 = Math.pow(bounciness, y);
        const num5 = 1.0 - bounciness;
        const num4 = (1.0 - num9) / num5 + num9 * 0.5;
        const num15 = gradient * num4;
        const num65 = Math.log(-num15 * (1.0 - bounciness) + 1.0) / Math.log(bounciness);
        const num3 = Math.floor(num65);
        const num13 = num3 + 1.0;
        const num8 = (1.0 - Math.pow(bounciness, num3)) / (num5 * num4);
        const num12 = (1.0 - Math.pow(bounciness, num13)) / (num5 * num4);
        const num7 = (num8 + num12) * 0.5;
        const num6 = gradient - num7;
        const num2 = num7 - num8;
        return -Math.pow(1.0 / bounciness, y - num3) / (num2 * num2) * (num6 - num2) * (num6 + num2);
    }
}
class CubicEase extends EasingFunction {
    /**
     * @internal
     */ easeInCore(gradient) {
        return gradient * gradient * gradient;
    }
}
class ElasticEase extends EasingFunction {
    /**
     * Instantiates an elastic easing function
     * @see https://easings.net/#easeInElastic
     * @param oscillations Defines the number of oscillations
     * @param springiness Defines the amplitude of the oscillations
     */ constructor(/** [3] Defines the number of oscillations*/ oscillations = 3, /** [3] Defines the amplitude of the oscillations*/ springiness = 3){
        super();
        this.oscillations = oscillations;
        this.springiness = springiness;
    }
    /**
     * @internal
     */ easeInCore(gradient) {
        let num2;
        const num3 = Math.max(0.0, this.oscillations);
        const num = Math.max(0.0, this.springiness);
        if (num == 0) {
            num2 = gradient;
        } else {
            num2 = (Math.exp(num * gradient) - 1.0) / (Math.exp(num) - 1.0);
        }
        return num2 * Math.sin((6.2831853071795862 * num3 + 1.5707963267948966) * gradient);
    }
}
class ExponentialEase extends EasingFunction {
    /**
     * Instantiates an exponential easing function
     * @see https://easings.net/#easeInExpo
     * @param exponent Defines the exponent of the function
     */ constructor(/** [3] Defines the exponent of the function */ exponent = 2){
        super();
        this.exponent = exponent;
    }
    /**
     * @internal
     */ easeInCore(gradient) {
        if (this.exponent <= 0) {
            return gradient;
        }
        return (Math.exp(this.exponent * gradient) - 1.0) / (Math.exp(this.exponent) - 1.0);
    }
}
class PowerEase extends EasingFunction {
    /**
     * Instantiates an power base easing function
     * @see https://easings.net/#easeInQuad
     * @param power Defines the power of the function
     */ constructor(/** [2] Defines the power of the function */ power = 2){
        super();
        this.power = power;
    }
    /**
     * @internal
     */ easeInCore(gradient) {
        const y = Math.max(0.0, this.power);
        return Math.pow(gradient, y);
    }
}
class QuadraticEase extends EasingFunction {
    /**
     * @internal
     */ easeInCore(gradient) {
        return gradient * gradient;
    }
}
class QuarticEase extends EasingFunction {
    /**
     * @internal
     */ easeInCore(gradient) {
        return gradient * gradient * gradient * gradient;
    }
}
class QuinticEase extends EasingFunction {
    /**
     * @internal
     */ easeInCore(gradient) {
        return gradient * gradient * gradient * gradient * gradient;
    }
}
class SineEase extends EasingFunction {
    /**
     * @internal
     */ easeInCore(gradient) {
        return 1.0 - Math.sin(1.5707963267948966 * (1.0 - gradient));
    }
}
class BezierCurveEase extends EasingFunction {
    /**
     * Instantiates a bezier function
     * @see http://cubic-bezier.com/#.17,.67,.83,.67
     * @param x1 Defines the x component of the start tangent in the bezier curve
     * @param y1 Defines the y component of the start tangent in the bezier curve
     * @param x2 Defines the x component of the end tangent in the bezier curve
     * @param y2 Defines the y component of the end tangent in the bezier curve
     */ constructor(/** [0] Defines the x component of the start tangent in the bezier curve */ x1 = 0, /** [0] Defines the y component of the start tangent in the bezier curve */ y1 = 0, /** [1] Defines the x component of the end tangent in the bezier curve */ x2 = 1, /** [1] Defines the y component of the end tangent in the bezier curve */ y2 = 1){
        super();
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
    }
    /**
     * @internal
     */ easeInCore(gradient) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$path$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BezierCurve"].Interpolate(gradient, this.x1, this.y1, this.x2, this.y2);
    }
} //# sourceMappingURL=easing.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Animations/animationEvent.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Composed of a frame, and an action function
 */ __turbopack_context__.s([
    "AnimationEvent",
    ()=>AnimationEvent
]);
class AnimationEvent {
    /**
     * Initializes the animation event
     * @param frame The frame for which the event is triggered
     * @param action The event to perform when triggered
     * @param onlyOnce Specifies if the event should be triggered only once
     */ constructor(/** The frame for which the event is triggered **/ frame, /** The event to perform when triggered **/ action, /** Specifies if the event should be triggered only once**/ onlyOnce){
        this.frame = frame;
        this.action = action;
        this.onlyOnce = onlyOnce;
        /**
         * Specifies if the animation event is done
         */ this.isDone = false;
    }
    /** @internal */ _clone() {
        return new AnimationEvent(this.frame, this.action, this.onlyOnce);
    }
} //# sourceMappingURL=animationEvent.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Animations/animationGroup.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnimationGroup",
    ()=>AnimationGroup,
    "TargetedAnimation",
    ()=>TargetedAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Animations/animation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/engineStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/tags.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animatable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Animations/animatable.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$uniqueIdGenerator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/uniqueIdGenerator.js [app-client] (ecmascript)");
;
;
;
;
;
;
class TargetedAnimation {
    /**
     * Returns the string "TargetedAnimation"
     * @returns "TargetedAnimation"
     */ getClassName() {
        return "TargetedAnimation";
    }
    /**
     * Creates a new targeted animation
     * @param parent The animation group to which the animation belongs
     */ constructor(parent){
        this.parent = parent;
        /**
         * Gets or sets the unique id of the targeted animation
         */ this.uniqueId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$uniqueIdGenerator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UniqueIdGenerator"].UniqueId;
    }
    /**
     * Serialize the object
     * @returns the JSON object representing the current entity
     */ serialize() {
        const serializationObject = {};
        serializationObject.animation = this.animation.serialize();
        serializationObject.targetId = this.target.id;
        return serializationObject;
    }
}
class AnimationGroup {
    /**
     * Gets or sets the mask associated with this animation group. This mask is used to filter which objects should be animated.
     */ get mask() {
        return this._mask;
    }
    set mask(value) {
        if (this._mask === value) {
            return;
        }
        this._mask = value;
        this.syncWithMask(true);
    }
    /**
     * Makes sure that the animations are either played or stopped according to the animation group mask.
     * Note however that the call won't have any effect if the animation group has not been started yet.
     * @param forceUpdate If true, forces to loop over the animatables even if no mask is defined (used internally, you shouldn't need to use it). Default: false.
     */ syncWithMask(forceUpdate = false) {
        if (!this.mask && !forceUpdate) {
            this._numActiveAnimatables = this._targetedAnimations.length;
            return;
        }
        this._numActiveAnimatables = 0;
        for(let i = 0; i < this._animatables.length; ++i){
            const animatable = this._animatables[i];
            if (!this.mask || this.mask.disabled || this.mask.retainsTarget(animatable.target.name)) {
                this._numActiveAnimatables++;
                if (animatable.paused) {
                    animatable.restart();
                }
            } else {
                if (!animatable.paused) {
                    animatable.pause();
                }
            }
        }
    }
    /**
     * Removes all animations for the targets not retained by the animation group mask.
     * Use this function if you know you won't need those animations anymore and if you want to free memory.
     */ removeUnmaskedAnimations() {
        if (!this.mask || this.mask.disabled) {
            return;
        }
        // Removes all animatables (in case the animation group has already been started)
        for(let i = 0; i < this._animatables.length; ++i){
            const animatable = this._animatables[i];
            if (!this.mask.retainsTarget(animatable.target.name)) {
                animatable.stop();
                this._animatables.splice(i, 1);
                --i;
            }
        }
        // Removes the targeted animations
        for(let index = 0; index < this._targetedAnimations.length; index++){
            const targetedAnimation = this._targetedAnimations[index];
            if (!this.mask.retainsTarget(targetedAnimation.target.name)) {
                this._targetedAnimations.splice(index, 1);
                --index;
            }
        }
    }
    /**
     * Gets or sets the first frame
     */ get from() {
        return this._from;
    }
    set from(value) {
        if (this._from === value) {
            return;
        }
        this._from = value;
        for(let index = 0; index < this._animatables.length; index++){
            const animatable = this._animatables[index];
            animatable.fromFrame = this._from;
        }
    }
    /**
     * Gets or sets the last frame
     */ get to() {
        return this._to;
    }
    set to(value) {
        if (this._to === value) {
            return;
        }
        this._to = value;
        for(let index = 0; index < this._animatables.length; index++){
            const animatable = this._animatables[index];
            animatable.toFrame = this._to;
        }
    }
    /**
     * Define if the animations are started
     */ get isStarted() {
        return this._isStarted;
    }
    /**
     * Gets a value indicating that the current group is playing
     */ get isPlaying() {
        return this._isStarted && !this._isPaused;
    }
    /**
     * Gets or sets the speed ratio to use for all animations
     */ get speedRatio() {
        return this._speedRatio;
    }
    /**
     * Gets or sets the speed ratio to use for all animations
     */ set speedRatio(value) {
        if (this._speedRatio === value) {
            return;
        }
        this._speedRatio = value;
        for(let index = 0; index < this._animatables.length; index++){
            const animatable = this._animatables[index];
            animatable.speedRatio = this._speedRatio;
        }
    }
    /**
     * Gets or sets if all animations should loop or not
     */ get loopAnimation() {
        return this._loopAnimation;
    }
    set loopAnimation(value) {
        if (this._loopAnimation === value) {
            return;
        }
        this._loopAnimation = value;
        for(let index = 0; index < this._animatables.length; index++){
            const animatable = this._animatables[index];
            animatable.loopAnimation = this._loopAnimation;
        }
    }
    /**
     * Gets or sets if all animations should be evaluated additively
     */ get isAdditive() {
        return this._isAdditive;
    }
    set isAdditive(value) {
        if (this._isAdditive === value) {
            return;
        }
        this._isAdditive = value;
        for(let index = 0; index < this._animatables.length; index++){
            const animatable = this._animatables[index];
            animatable.isAdditive = this._isAdditive;
        }
    }
    /**
     * Gets or sets the weight to apply to all animations of the group
     */ get weight() {
        return this._weight;
    }
    set weight(value) {
        if (this._weight === value) {
            return;
        }
        this._weight = value;
        this.setWeightForAllAnimatables(this._weight);
    }
    /**
     * Gets the targeted animations for this animation group
     */ get targetedAnimations() {
        return this._targetedAnimations;
    }
    /**
     * returning the list of animatables controlled by this animation group.
     */ get animatables() {
        return this._animatables;
    }
    /**
     * Gets the list of target animations
     */ get children() {
        return this._targetedAnimations;
    }
    /**
     * Gets or sets the order of play of the animation group (default: 0)
     */ get playOrder() {
        return this._playOrder;
    }
    set playOrder(value) {
        if (this._playOrder === value) {
            return;
        }
        this._playOrder = value;
        if (this._animatables.length > 0) {
            for(let i = 0; i < this._animatables.length; i++){
                this._animatables[i].playOrder = this._playOrder;
            }
            this._scene.sortActiveAnimatables();
        }
    }
    /**
     * Allows the animations of the animation group to blend with current running animations
     * Note that a null value means that each animation will use their own existing blending configuration (Animation.enableBlending)
     */ get enableBlending() {
        return this._enableBlending;
    }
    set enableBlending(value) {
        if (this._enableBlending === value) {
            return;
        }
        this._enableBlending = value;
        if (value !== null) {
            for(let i = 0; i < this._targetedAnimations.length; ++i){
                this._targetedAnimations[i].animation.enableBlending = value;
            }
        }
    }
    /**
     * Gets or sets the animation blending speed
     * Note that a null value means that each animation will use their own existing blending configuration (Animation.blendingSpeed)
     */ get blendingSpeed() {
        return this._blendingSpeed;
    }
    set blendingSpeed(value) {
        if (this._blendingSpeed === value) {
            return;
        }
        this._blendingSpeed = value;
        if (value !== null) {
            for(let i = 0; i < this._targetedAnimations.length; ++i){
                this._targetedAnimations[i].animation.blendingSpeed = value;
            }
        }
    }
    /**
     * Gets the length (in seconds) of the animation group
     * This function assumes that all animations are played at the same framePerSecond speed!
     * Note: you can only call this method after you've added at least one targeted animation!
     * @param from Starting frame range (default is AnimationGroup.from)
     * @param to Ending frame range (default is AnimationGroup.to)
     * @returns The length in seconds
     */ getLength(from, to) {
        from = from ?? this._from;
        to = to ?? this._to;
        const fps = this.targetedAnimations[0].animation.framePerSecond * this._speedRatio;
        return (to - from) / fps;
    }
    /**
     * Merge the array of animation groups into a new animation group
     * @param animationGroups List of animation groups to merge
     * @param disposeSource If true, animation groups will be disposed after being merged (default: true)
     * @param normalize If true, animation groups will be normalized before being merged, so that all animations have the same "from" and "to" frame (default: false)
     * @param weight Weight for the new animation group. If not provided, it will inherit the weight from the first animation group of the array
     * @returns The new animation group or null if no animation groups were passed
     */ static MergeAnimationGroups(animationGroups, disposeSource = true, normalize = false, weight) {
        if (animationGroups.length === 0) {
            return null;
        }
        weight = weight ?? animationGroups[0].weight;
        let beginFrame = Number.MAX_VALUE;
        let endFrame = -Number.MAX_VALUE;
        if (normalize) {
            for (const animationGroup of animationGroups){
                if (animationGroup.from < beginFrame) {
                    beginFrame = animationGroup.from;
                }
                if (animationGroup.to > endFrame) {
                    endFrame = animationGroup.to;
                }
            }
        }
        const mergedAnimationGroup = new AnimationGroup(animationGroups[0].name + "_merged", animationGroups[0]._scene, weight);
        for (const animationGroup of animationGroups){
            if (normalize) {
                animationGroup.normalize(beginFrame, endFrame);
            }
            for (const targetedAnimation of animationGroup.targetedAnimations){
                mergedAnimationGroup.addTargetedAnimation(targetedAnimation.animation, targetedAnimation.target);
            }
            if (disposeSource) {
                animationGroup.dispose();
            }
        }
        return mergedAnimationGroup;
    }
    /**
     * Gets the scene the animation group belongs to
     * @returns The scene the animation group belongs to
     */ getScene() {
        return this._scene;
    }
    /**
     * Instantiates a new Animation Group.
     * This helps managing several animations at once.
     * @see https://doc.babylonjs.com/features/featuresDeepDive/animation/groupAnimations
     * @param name Defines the name of the group
     * @param scene Defines the scene the group belongs to
     * @param weight Defines the weight to use for animations in the group (-1.0 by default, meaning "no weight")
     * @param playOrder Defines the order of play of the animation group (default is 0)
     */ constructor(/** The name of the animation group */ name, scene = null, weight = -1, playOrder = 0){
        this.name = name;
        this._targetedAnimations = new Array();
        this._animatables = new Array();
        this._from = Number.MAX_VALUE;
        this._to = -Number.MAX_VALUE;
        this._speedRatio = 1;
        this._loopAnimation = false;
        this._isAdditive = false;
        this._weight = -1;
        this._playOrder = 0;
        this._enableBlending = null;
        this._blendingSpeed = null;
        this._numActiveAnimatables = 0;
        this._shouldStart = true;
        /** @internal */ this._parentContainer = null;
        /**
         * This observable will notify when one animation have ended
         */ this.onAnimationEndObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * Observer raised when one animation loops
         */ this.onAnimationLoopObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * Observer raised when all animations have looped
         */ this.onAnimationGroupLoopObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * This observable will notify when all animations have ended.
         */ this.onAnimationGroupEndObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * This observable will notify when all animations have paused.
         */ this.onAnimationGroupPauseObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * This observable will notify when all animations are playing.
         */ this.onAnimationGroupPlayObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * Gets or sets an object used to store user defined information for the node
         */ this.metadata = null;
        this._mask = null;
        this._animationLoopFlags = [];
        this._scene = scene || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EngineStore"].LastCreatedScene;
        this._weight = weight;
        this._playOrder = playOrder;
        this.uniqueId = this._scene.getUniqueId();
        this._scene.addAnimationGroup(this);
    }
    /**
     * Add an animation (with its target) in the group
     * @param animation defines the animation we want to add
     * @param target defines the target of the animation
     * @returns the TargetedAnimation object
     */ addTargetedAnimation(animation, target) {
        const targetedAnimation = new TargetedAnimation(this);
        targetedAnimation.animation = animation;
        targetedAnimation.target = target;
        const keys = animation.getKeys();
        if (this._from > keys[0].frame) {
            this._from = keys[0].frame;
        }
        if (this._to < keys[keys.length - 1].frame) {
            this._to = keys[keys.length - 1].frame;
        }
        if (this._enableBlending !== null) {
            animation.enableBlending = this._enableBlending;
        }
        if (this._blendingSpeed !== null) {
            animation.blendingSpeed = this._blendingSpeed;
        }
        this._targetedAnimations.push(targetedAnimation);
        this._shouldStart = true;
        return targetedAnimation;
    }
    /**
     * Remove an animation from the group
     * @param animation defines the animation we want to remove
     */ removeTargetedAnimation(animation) {
        for(let index = this._targetedAnimations.length - 1; index > -1; index--){
            const targetedAnimation = this._targetedAnimations[index];
            if (targetedAnimation.animation === animation) {
                this._targetedAnimations.splice(index, 1);
            }
        }
    }
    /**
     * This function will normalize every animation in the group to make sure they all go from beginFrame to endFrame
     * It can add constant keys at begin or end
     * @param beginFrame defines the new begin frame for all animations or the smallest begin frame of all animations if null (defaults to null)
     * @param endFrame defines the new end frame for all animations or the largest end frame of all animations if null (defaults to null)
     * @returns the animation group
     */ normalize(beginFrame = null, endFrame = null) {
        if (beginFrame == null) {
            beginFrame = this._from;
        }
        if (endFrame == null) {
            endFrame = this._to;
        }
        for(let index = 0; index < this._targetedAnimations.length; index++){
            const targetedAnimation = this._targetedAnimations[index];
            const keys = targetedAnimation.animation.getKeys();
            const startKey = keys[0];
            const endKey = keys[keys.length - 1];
            if (startKey.frame > beginFrame) {
                const newKey = {
                    frame: beginFrame,
                    value: startKey.value,
                    inTangent: startKey.inTangent,
                    outTangent: startKey.outTangent,
                    interpolation: startKey.interpolation
                };
                keys.splice(0, 0, newKey);
            }
            if (endKey.frame < endFrame) {
                const newKey = {
                    frame: endFrame,
                    value: endKey.value,
                    inTangent: endKey.inTangent,
                    outTangent: endKey.outTangent,
                    interpolation: endKey.interpolation
                };
                keys.push(newKey);
            }
        }
        this._from = beginFrame;
        this._to = endFrame;
        return this;
    }
    _processLoop(animatable, targetedAnimation, index) {
        animatable.onAnimationLoop = ()=>{
            this.onAnimationLoopObservable.notifyObservers(targetedAnimation);
            if (this._animationLoopFlags[index]) {
                return;
            }
            this._animationLoopFlags[index] = true;
            this._animationLoopCount++;
            if (this._animationLoopCount === this._numActiveAnimatables) {
                this.onAnimationGroupLoopObservable.notifyObservers(this);
                this._animationLoopCount = 0;
                this._animationLoopFlags.length = 0;
            }
        };
    }
    /**
     * Start all animations on given targets
     * @param loop defines if animations must loop
     * @param speedRatio defines the ratio to apply to animation speed (1 by default)
     * @param from defines the from key (optional)
     * @param to defines the to key (optional)
     * @param isAdditive defines the additive state for the resulting animatables (optional)
     * @returns the current animation group
     */ start(loop = false, speedRatio = 1, from, to, isAdditive) {
        if (this._isStarted || this._targetedAnimations.length === 0) {
            return this;
        }
        this._loopAnimation = loop;
        this._shouldStart = false;
        this._animationLoopCount = 0;
        this._animationLoopFlags.length = 0;
        for(let index = 0; index < this._targetedAnimations.length; index++){
            const targetedAnimation = this._targetedAnimations[index];
            const animatable = this._scene.beginDirectAnimation(targetedAnimation.target, [
                targetedAnimation.animation
            ], from !== undefined ? from : this._from, to !== undefined ? to : this._to, loop, speedRatio, undefined, undefined, isAdditive !== undefined ? isAdditive : this._isAdditive);
            animatable.weight = this._weight;
            animatable.playOrder = this._playOrder;
            animatable.onAnimationEnd = ()=>{
                this.onAnimationEndObservable.notifyObservers(targetedAnimation);
                this._checkAnimationGroupEnded(animatable);
            };
            this._processLoop(animatable, targetedAnimation, index);
            this._animatables.push(animatable);
        }
        this.syncWithMask();
        this._scene.sortActiveAnimatables();
        this._speedRatio = speedRatio;
        this._isStarted = true;
        this._isPaused = false;
        this.onAnimationGroupPlayObservable.notifyObservers(this);
        return this;
    }
    /**
     * Pause all animations
     * @returns the animation group
     */ pause() {
        if (!this._isStarted) {
            return this;
        }
        this._isPaused = true;
        for(let index = 0; index < this._animatables.length; index++){
            const animatable = this._animatables[index];
            animatable.pause();
        }
        this.onAnimationGroupPauseObservable.notifyObservers(this);
        return this;
    }
    /**
     * Play all animations to initial state
     * This function will start() the animations if they were not started or will restart() them if they were paused
     * @param loop defines if animations must loop
     * @returns the animation group
     */ play(loop) {
        // only if there are animatable available
        if (this.isStarted && this._animatables.length && !this._shouldStart) {
            if (loop !== undefined) {
                this.loopAnimation = loop;
            }
            this.restart();
        } else {
            this.stop();
            this.start(loop, this._speedRatio);
        }
        return this;
    }
    /**
     * Reset all animations to initial state
     * @returns the animation group
     */ reset() {
        if (!this._isStarted) {
            this.play();
            this.goToFrame(0);
            this.stop(true);
            return this;
        }
        for(let index = 0; index < this._animatables.length; index++){
            const animatable = this._animatables[index];
            animatable.reset();
        }
        return this;
    }
    /**
     * Restart animations from after pausing it
     * @returns the animation group
     */ restart() {
        if (!this._isStarted) {
            return this;
        }
        for(let index = 0; index < this._animatables.length; index++){
            const animatable = this._animatables[index];
            animatable.restart();
        }
        this.syncWithMask();
        this._isPaused = false;
        this.onAnimationGroupPlayObservable.notifyObservers(this);
        return this;
    }
    /**
     * Stop all animations
     * @param skipOnAnimationEnd defines if the system should not raise onAnimationEnd. Default is false
     * @returns the animation group
     */ stop(skipOnAnimationEnd = false) {
        if (!this._isStarted) {
            return this;
        }
        const list = this._animatables.slice();
        for(let index = 0; index < list.length; index++){
            list[index].stop(undefined, undefined, true, skipOnAnimationEnd);
        }
        // We will take care of removing all stopped animatables
        let curIndex = 0;
        for(let index = 0; index < this._scene._activeAnimatables.length; index++){
            const animatable = this._scene._activeAnimatables[index];
            if (animatable._runtimeAnimations.length > 0) {
                this._scene._activeAnimatables[curIndex++] = animatable;
            } else if (skipOnAnimationEnd) {
                // We normally rely on the onAnimationEnd callback (assigned in the start function) to be notified when an animatable
                // ends and should be removed from the active animatables array. However, if the animatable is stopped with the skipOnAnimationEnd
                // flag set to true, then we need to explicitly remove it from the active animatables array.
                this._checkAnimationGroupEnded(animatable, skipOnAnimationEnd);
            }
        }
        this._scene._activeAnimatables.length = curIndex;
        this._isStarted = false;
        return this;
    }
    /**
     * Set animation weight for all animatables
     *
     * @since 6.12.4
     *  You can pass the weight to the AnimationGroup constructor, or use the weight property to set it after the group has been created,
     *  making it easier to define the overall animation weight than calling setWeightForAllAnimatables() after the animation group has been started
     * @param weight defines the weight to use
     * @returns the animationGroup
     * @see https://doc.babylonjs.com/features/featuresDeepDive/animation/advanced_animations#animation-weights
     */ setWeightForAllAnimatables(weight) {
        for(let index = 0; index < this._animatables.length; index++){
            const animatable = this._animatables[index];
            animatable.weight = weight;
        }
        return this;
    }
    /**
     * Synchronize and normalize all animatables with a source animatable
     * @param root defines the root animatable to synchronize with (null to stop synchronizing)
     * @returns the animationGroup
     * @see https://doc.babylonjs.com/features/featuresDeepDive/animation/advanced_animations#animation-weights
     */ syncAllAnimationsWith(root) {
        for(let index = 0; index < this._animatables.length; index++){
            const animatable = this._animatables[index];
            animatable.syncWith(root);
        }
        return this;
    }
    /**
     * Goes to a specific frame in this animation group. Note that the animation group must be in playing or paused status
     * @param frame the frame number to go to
     * @param useWeight defines whether the animation weight should be applied to the image to be jumped to (false by default)
     * @returns the animationGroup
     */ goToFrame(frame, useWeight = false) {
        if (!this._isStarted) {
            return this;
        }
        for(let index = 0; index < this._animatables.length; index++){
            const animatable = this._animatables[index];
            animatable.goToFrame(frame, useWeight);
        }
        return this;
    }
    /**
     * Helper to get the current frame. This will return 0 if the AnimationGroup is not running, and it might return wrong results if multiple animations are running in different frames.
     * @returns current animation frame.
     */ getCurrentFrame() {
        return this.animatables[0]?.masterFrame || 0;
    }
    /**
     * Dispose all associated resources
     */ dispose() {
        if (this.isStarted) {
            this.stop();
        }
        this._targetedAnimations.length = 0;
        this._animatables.length = 0;
        // Remove from scene
        this._scene.removeAnimationGroup(this);
        if (this._parentContainer) {
            const index = this._parentContainer.animationGroups.indexOf(this);
            if (index > -1) {
                this._parentContainer.animationGroups.splice(index, 1);
            }
            this._parentContainer = null;
        }
        this.onAnimationEndObservable.clear();
        this.onAnimationGroupEndObservable.clear();
        this.onAnimationGroupPauseObservable.clear();
        this.onAnimationGroupPlayObservable.clear();
        this.onAnimationLoopObservable.clear();
        this.onAnimationGroupLoopObservable.clear();
    }
    _checkAnimationGroupEnded(animatable, skipOnAnimationEnd = false) {
        // animatable should be taken out of the array
        const idx = this._animatables.indexOf(animatable);
        if (idx > -1) {
            this._animatables.splice(idx, 1);
        }
        // all animatables were removed? animation group ended!
        if (this._animatables.length === this._targetedAnimations.length - this._numActiveAnimatables) {
            this._isStarted = false;
            if (!skipOnAnimationEnd) {
                this.onAnimationGroupEndObservable.notifyObservers(this);
            }
            this._animatables.length = 0;
        }
    }
    /**
     * Clone the current animation group and returns a copy
     * @param newName defines the name of the new group
     * @param targetConverter defines an optional function used to convert current animation targets to new ones
     * @param cloneAnimations defines if the animations should be cloned or referenced
     * @returns the new animation group
     */ clone(newName, targetConverter, cloneAnimations = false) {
        const newGroup = new AnimationGroup(newName || this.name, this._scene, this._weight, this._playOrder);
        newGroup._from = this.from;
        newGroup._to = this.to;
        newGroup._speedRatio = this.speedRatio;
        newGroup._loopAnimation = this.loopAnimation;
        newGroup._isAdditive = this.isAdditive;
        newGroup._enableBlending = this.enableBlending;
        newGroup._blendingSpeed = this.blendingSpeed;
        newGroup.metadata = this.metadata;
        newGroup.mask = this.mask;
        for (const targetAnimation of this._targetedAnimations){
            newGroup.addTargetedAnimation(cloneAnimations ? targetAnimation.animation.clone() : targetAnimation.animation, targetConverter ? targetConverter(targetAnimation.target) : targetAnimation.target);
        }
        return newGroup;
    }
    /**
     * Serializes the animationGroup to an object
     * @returns Serialized object
     */ serialize() {
        const serializationObject = {};
        serializationObject.name = this.name;
        serializationObject.from = this.from;
        serializationObject.to = this.to;
        serializationObject.speedRatio = this.speedRatio;
        serializationObject.loopAnimation = this.loopAnimation;
        serializationObject.isAdditive = this.isAdditive;
        serializationObject.weight = this.weight;
        serializationObject.playOrder = this.playOrder;
        serializationObject.enableBlending = this.enableBlending;
        serializationObject.blendingSpeed = this.blendingSpeed;
        serializationObject.targetedAnimations = [];
        for(let targetedAnimationIndex = 0; targetedAnimationIndex < this.targetedAnimations.length; targetedAnimationIndex++){
            const targetedAnimation = this.targetedAnimations[targetedAnimationIndex];
            serializationObject.targetedAnimations[targetedAnimationIndex] = targetedAnimation.serialize();
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tags"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tags"].HasTags(this)) {
            serializationObject.tags = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tags"].GetTags(this);
        }
        // Metadata
        if (this.metadata) {
            serializationObject.metadata = this.metadata;
        }
        return serializationObject;
    }
    // Statics
    /**
     * Returns a new AnimationGroup object parsed from the source provided.
     * @param parsedAnimationGroup defines the source
     * @param scene defines the scene that will receive the animationGroup
     * @param nodeMap a map of node.id to node in this scene, to accelerate node lookup
     * @returns a new AnimationGroup
     */ static Parse(parsedAnimationGroup, scene, nodeMap) {
        const animationGroup = new AnimationGroup(parsedAnimationGroup.name, scene, parsedAnimationGroup.weight, parsedAnimationGroup.playOrder);
        for(let i = 0; i < parsedAnimationGroup.targetedAnimations.length; i++){
            const targetedAnimation = parsedAnimationGroup.targetedAnimations[i];
            const animation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Animation"].Parse(targetedAnimation.animation);
            const id = targetedAnimation.targetId;
            if (targetedAnimation.animation.property === "influence") {
                // morph target animation
                const morphTarget = scene.getMorphTargetById(id);
                if (morphTarget) {
                    animationGroup.addTargetedAnimation(animation, morphTarget);
                }
            } else {
                const targetNode = nodeMap ? nodeMap.get(id) : scene.getNodeById(id);
                if (targetNode != null) {
                    animationGroup.addTargetedAnimation(animation, targetNode);
                }
            }
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tags"]) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tags"].AddTagsTo(animationGroup, parsedAnimationGroup.tags);
        }
        if (parsedAnimationGroup.from !== null && parsedAnimationGroup.to !== null) {
            animationGroup.normalize(parsedAnimationGroup.from, parsedAnimationGroup.to);
        }
        if (parsedAnimationGroup.speedRatio !== undefined) {
            animationGroup._speedRatio = parsedAnimationGroup.speedRatio;
        }
        if (parsedAnimationGroup.loopAnimation !== undefined) {
            animationGroup._loopAnimation = parsedAnimationGroup.loopAnimation;
        }
        if (parsedAnimationGroup.isAdditive !== undefined) {
            animationGroup._isAdditive = parsedAnimationGroup.isAdditive;
        }
        if (parsedAnimationGroup.weight !== undefined) {
            animationGroup._weight = parsedAnimationGroup.weight;
        }
        if (parsedAnimationGroup.playOrder !== undefined) {
            animationGroup._playOrder = parsedAnimationGroup.playOrder;
        }
        if (parsedAnimationGroup.enableBlending !== undefined) {
            animationGroup._enableBlending = parsedAnimationGroup.enableBlending;
        }
        if (parsedAnimationGroup.blendingSpeed !== undefined) {
            animationGroup._blendingSpeed = parsedAnimationGroup.blendingSpeed;
        }
        if (parsedAnimationGroup.metadata !== undefined) {
            animationGroup.metadata = parsedAnimationGroup.metadata;
        }
        return animationGroup;
    }
    /** @internal */ static MakeAnimationAdditive(sourceAnimationGroup, referenceFrameOrOptions, range, cloneOriginal = false, clonedName) {
        let options;
        if (typeof referenceFrameOrOptions === "object") {
            options = referenceFrameOrOptions;
        } else {
            options = {
                referenceFrame: referenceFrameOrOptions,
                range: range,
                cloneOriginalAnimationGroup: cloneOriginal,
                clonedAnimationName: clonedName
            };
        }
        let animationGroup = sourceAnimationGroup;
        if (options.cloneOriginalAnimationGroup) {
            animationGroup = sourceAnimationGroup.clone(options.clonedAnimationGroupName || animationGroup.name);
        }
        const targetedAnimations = animationGroup.targetedAnimations;
        for(let index = 0; index < targetedAnimations.length; index++){
            const targetedAnimation = targetedAnimations[index];
            targetedAnimation.animation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Animation"].MakeAnimationAdditive(targetedAnimation.animation, options);
        }
        animationGroup.isAdditive = true;
        if (options.clipKeys) {
            // We need to recalculate the from/to frames for the animation group because some keys may have been removed
            let from = Number.MAX_VALUE;
            let to = -Number.MAX_VALUE;
            const targetedAnimations = animationGroup.targetedAnimations;
            for(let index = 0; index < targetedAnimations.length; index++){
                const targetedAnimation = targetedAnimations[index];
                const animation = targetedAnimation.animation;
                const keys = animation.getKeys();
                if (from > keys[0].frame) {
                    from = keys[0].frame;
                }
                if (to < keys[keys.length - 1].frame) {
                    to = keys[keys.length - 1].frame;
                }
            }
            animationGroup._from = from;
            animationGroup._to = to;
        }
        return animationGroup;
    }
    /**
     * Creates a new animation, keeping only the keys that are inside a given key range
     * @param sourceAnimationGroup defines the animation group on which to operate
     * @param fromKey defines the lower bound of the range
     * @param toKey defines the upper bound of the range
     * @param name defines the name of the new animation group. If not provided, use the same name as animationGroup
     * @param dontCloneAnimations defines whether or not the animations should be cloned before clipping the keys. Default is false, so animations will be cloned
     * @returns a new animation group stripped from all the keys outside the given range
     */ static ClipKeys(sourceAnimationGroup, fromKey, toKey, name, dontCloneAnimations) {
        const animationGroup = sourceAnimationGroup.clone(name || sourceAnimationGroup.name);
        return AnimationGroup.ClipKeysInPlace(animationGroup, fromKey, toKey, dontCloneAnimations);
    }
    /**
     * Updates an existing animation, keeping only the keys that are inside a given key range
     * @param animationGroup defines the animation group on which to operate
     * @param fromKey defines the lower bound of the range
     * @param toKey defines the upper bound of the range
     * @param dontCloneAnimations defines whether or not the animations should be cloned before clipping the keys. Default is false, so animations will be cloned
     * @returns the animationGroup stripped from all the keys outside the given range
     */ static ClipKeysInPlace(animationGroup, fromKey, toKey, dontCloneAnimations) {
        return AnimationGroup.ClipInPlace(animationGroup, fromKey, toKey, dontCloneAnimations, false);
    }
    /**
     * Creates a new animation, keeping only the frames that are inside a given frame range
     * @param sourceAnimationGroup defines the animation group on which to operate
     * @param fromFrame defines the lower bound of the range
     * @param toFrame defines the upper bound of the range
     * @param name defines the name of the new animation group. If not provided, use the same name as animationGroup
     * @param dontCloneAnimations defines whether or not the animations should be cloned before clipping the frames. Default is false, so animations will be cloned
     * @returns a new animation group stripped from all the frames outside the given range
     */ static ClipFrames(sourceAnimationGroup, fromFrame, toFrame, name, dontCloneAnimations) {
        const animationGroup = sourceAnimationGroup.clone(name || sourceAnimationGroup.name);
        return AnimationGroup.ClipFramesInPlace(animationGroup, fromFrame, toFrame, dontCloneAnimations);
    }
    /**
     * Updates an existing animation, keeping only the frames that are inside a given frame range
     * @param animationGroup defines the animation group on which to operate
     * @param fromFrame defines the lower bound of the range
     * @param toFrame defines the upper bound of the range
     * @param dontCloneAnimations defines whether or not the animations should be cloned before clipping the frames. Default is false, so animations will be cloned
     * @returns the animationGroup stripped from all the frames outside the given range
     */ static ClipFramesInPlace(animationGroup, fromFrame, toFrame, dontCloneAnimations) {
        return AnimationGroup.ClipInPlace(animationGroup, fromFrame, toFrame, dontCloneAnimations, true);
    }
    /**
     * Updates an existing animation, keeping only the keys that are inside a given key or frame range
     * @param animationGroup defines the animation group on which to operate
     * @param start defines the lower bound of the range
     * @param end defines the upper bound of the range
     * @param dontCloneAnimations defines whether or not the animations should be cloned before clipping the keys. Default is false, so animations will be cloned
     * @param useFrame defines if the range is defined by frame numbers or key indices (default is false which means use key indices)
     * @returns the animationGroup stripped from all the keys outside the given range
     */ static ClipInPlace(animationGroup, start, end, dontCloneAnimations, useFrame = false) {
        let from = Number.MAX_VALUE;
        let to = -Number.MAX_VALUE;
        const targetedAnimations = animationGroup.targetedAnimations;
        for(let index = 0; index < targetedAnimations.length; index++){
            const targetedAnimation = targetedAnimations[index];
            const animation = dontCloneAnimations ? targetedAnimation.animation : targetedAnimation.animation.clone();
            if (useFrame) {
                // Make sure we have keys corresponding to the bounds of the frame range
                animation.createKeyForFrame(start);
                animation.createKeyForFrame(end);
            }
            const keys = animation.getKeys();
            const newKeys = [];
            let startFrame = Number.MAX_VALUE;
            for(let k = 0; k < keys.length; k++){
                const key = keys[k];
                if (!useFrame && k >= start && k <= end || useFrame && key.frame >= start && key.frame <= end) {
                    const newKey = {
                        frame: key.frame,
                        value: key.value.clone ? key.value.clone() : key.value,
                        inTangent: key.inTangent,
                        outTangent: key.outTangent,
                        interpolation: key.interpolation,
                        lockedTangent: key.lockedTangent
                    };
                    if (startFrame === Number.MAX_VALUE) {
                        startFrame = newKey.frame;
                    }
                    newKey.frame -= startFrame;
                    newKeys.push(newKey);
                }
            }
            if (newKeys.length === 0) {
                targetedAnimations.splice(index, 1);
                index--;
                continue;
            }
            if (from > newKeys[0].frame) {
                from = newKeys[0].frame;
            }
            if (to < newKeys[newKeys.length - 1].frame) {
                to = newKeys[newKeys.length - 1].frame;
            }
            animation.setKeys(newKeys, true);
            targetedAnimation.animation = animation; // in case the animation has been cloned
        }
        animationGroup._from = from;
        animationGroup._to = to;
        return animationGroup;
    }
    /**
     * Returns the string "AnimationGroup"
     * @returns "AnimationGroup"
     */ getClassName() {
        return "AnimationGroup";
    }
    /**
     * Creates a detailed string about the object
     * @param fullDetails defines if the output string will support multiple levels of logging within scene loading
     * @returns a string representing the object
     */ toString(fullDetails) {
        let ret = "Name: " + this.name;
        ret += ", type: " + this.getClassName();
        if (fullDetails) {
            ret += ", from: " + this._from;
            ret += ", to: " + this._to;
            ret += ", isStarted: " + this._isStarted;
            ret += ", speedRatio: " + this._speedRatio;
            ret += ", targetedAnimations length: " + this._targetedAnimations.length;
            ret += ", animatables length: " + this._animatables;
        }
        return ret;
    }
} //# sourceMappingURL=animationGroup.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Animations/animationKey.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Enum for the animation key frame interpolation type
 */ __turbopack_context__.s([
    "AnimationKeyInterpolation",
    ()=>AnimationKeyInterpolation
]);
var AnimationKeyInterpolation;
(function(AnimationKeyInterpolation) {
    /**
     * Use tangents to interpolate between start and end values.
     */ AnimationKeyInterpolation[AnimationKeyInterpolation["NONE"] = 0] = "NONE";
    /**
     * Do not interpolate between keys and use the start key value only. Tangents are ignored
     */ AnimationKeyInterpolation[AnimationKeyInterpolation["STEP"] = 1] = "STEP";
})(AnimationKeyInterpolation || (AnimationKeyInterpolation = {})); //# sourceMappingURL=animationKey.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Animations/animatable.interface.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
 //# sourceMappingURL=animatable.interface.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Animations/pathCursor.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PathCursor",
    ()=>PathCursor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
;
class PathCursor {
    /**
     * Initializes the path cursor
     * @param _path The path to track
     */ constructor(_path){
        this._path = _path;
        /**
         * Stores path cursor callbacks for when an onchange event is triggered
         */ this._onchange = new Array();
        /**
         * The value of the path cursor
         */ this.value = 0;
        /**
         * The animation array of the path cursor
         */ this.animations = [];
    }
    /**
     * Gets the cursor point on the path
     * @returns A point on the path cursor at the cursor location
     */ getPoint() {
        const point = this._path.getPointAtLengthPosition(this.value);
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](point.x, 0, point.y);
    }
    /**
     * Moves the cursor ahead by the step amount
     * @param step The amount to move the cursor forward
     * @returns This path cursor
     */ moveAhead(step = 0.002) {
        this.move(step);
        return this;
    }
    /**
     * Moves the cursor behind by the step amount
     * @param step The amount to move the cursor back
     * @returns This path cursor
     */ moveBack(step = 0.002) {
        this.move(-step);
        return this;
    }
    /**
     * Moves the cursor by the step amount
     * If the step amount is greater than one, an exception is thrown
     * @param step The amount to move the cursor
     * @returns This path cursor
     */ move(step) {
        if (Math.abs(step) > 1) {
            // eslint-disable-next-line no-throw-literal
            throw "step size should be less than 1.";
        }
        this.value += step;
        this._ensureLimits();
        this._raiseOnChange();
        return this;
    }
    /**
     * Ensures that the value is limited between zero and one
     * @returns This path cursor
     */ _ensureLimits() {
        while(this.value > 1){
            this.value -= 1;
        }
        while(this.value < 0){
            this.value += 1;
        }
        return this;
    }
    /**
     * Runs onchange callbacks on change (used by the animation engine)
     * @returns This path cursor
     */ _raiseOnChange() {
        for (const f of this._onchange){
            f(this);
        }
        return this;
    }
    /**
     * Executes a function on change
     * @param f A path cursor onchange callback
     * @returns This path cursor
     */ onchange(f) {
        this._onchange.push(f);
        return this;
    }
} //# sourceMappingURL=pathCursor.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Animations/animationGroupMask.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Enum used to define the mode for an animation group mask
 */ __turbopack_context__.s([
    "AnimationGroupMask",
    ()=>AnimationGroupMask,
    "AnimationGroupMaskMode",
    ()=>AnimationGroupMaskMode
]);
var AnimationGroupMaskMode;
(function(AnimationGroupMaskMode) {
    /**
     * The mask defines the animatable target names that should be included
     */ AnimationGroupMaskMode[AnimationGroupMaskMode["Include"] = 0] = "Include";
    /**
     * The mask defines the animatable target names in a "exclude" mode: all animatable targets will be animated except the ones defined in the mask
     */ AnimationGroupMaskMode[AnimationGroupMaskMode["Exclude"] = 1] = "Exclude";
})(AnimationGroupMaskMode || (AnimationGroupMaskMode = {}));
class AnimationGroupMask {
    /**
     * Creates a new mask
     * @param names The list of target names to add to the mask (optional)
     * @param mode Defines the mode for the mask (default: AnimationGroupMaskMode.Include)
     */ constructor(names, /**
     * [0] Defines the mode for the mask
     */ mode = 0 /* AnimationGroupMaskMode.Include */ ){
        this.mode = mode;
        /**
         * Gets or sets a boolean indicating if the mask is disabled (default is false)
         */ this.disabled = false;
        this._targetNames = new Set();
        if (names) {
            this.addTargetName(names);
        }
    }
    /**
     * Adds one or several target names to the mask
     * @param name The name(s) to add to the mask
     */ addTargetName(name) {
        if (Array.isArray(name)) {
            for (const n of name){
                this._targetNames.add(n);
            }
            return;
        }
        this._targetNames.add(name);
    }
    /**
     * Removes one or several target names from the mask
     * @param name The name(s) to remove from the mask
     */ removeTargetName(name) {
        if (Array.isArray(name)) {
            for (const n of name){
                this._targetNames.delete(n);
            }
            return;
        }
        this._targetNames.delete(name);
    }
    /**
     * Checks if the mask includes a target name.
     * This method is intended to know if a given target name is included in the mask, not if the name is actually retained by the mask (see retainsTarget() instead).
     * @param name The name to check with the mask
     * @returns True if the mask includes the name, false otherwise
     */ hasTarget(name) {
        return this._targetNames.has(name);
    }
    /**
     * Checks if the mask retains a target name.
     * Note that in the "Exclude" mode, this will return false if the mask includes the name, and true otherwise!
     * This method is intended to know if a given target name is retained by the mask, not if the name is in the list of target names.
     * @param name The name to check with the mask
     * @returns True if the mask retains the name, false otherwise
     */ retainsTarget(name) {
        return this._targetNames.has(name) === (this.mode === 0 /* AnimationGroupMaskMode.Include */ );
    }
} //# sourceMappingURL=animationGroupMask.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Animations/animation.optimizations.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * This is a destructive optimization that merges all animatables into the first one.
 * That animatable will also host all the runtime animations.
 * We expect that all the animatables are on the same timeframe (same start, end, loop, etc..)
 * @param scene defines the scene to optimize
 * @param options defines the optimization options
 */ __turbopack_context__.s([
    "OptimizeAnimations",
    ()=>OptimizeAnimations
]);
function OptimizeAnimations(scene, options = {}) {
    const mergeRuntimeAnimations = options.mergeRuntimeAnimations ?? true;
    const mergeKeyFrames = options.mergeRuntimeAnimations === true ? options.mergeKeyFrames ?? false : false;
    // We will go through all the current animatables and merge them
    const animatables = scene.animatables;
    if (animatables.length === 0) {
        return;
    }
    const mainAnimatable = animatables[0];
    for(let i = 1; i < animatables.length; i++){
        const animatable = animatables[i];
        // Merge the current animatable with the main one
        mainAnimatable._runtimeAnimations.push(...animatable._runtimeAnimations);
    }
    if (mergeRuntimeAnimations && mainAnimatable._runtimeAnimations.length > 1) {
        // Make sure only one runtime animation is driving the beat
        const mainRuntimeAnimation = mainAnimatable._runtimeAnimations[0];
        for(let i = 1; i < mainAnimatable._runtimeAnimations.length; i++){
            const runtimeAnimation = mainAnimatable._runtimeAnimations[i];
            runtimeAnimation._coreRuntimeAnimation = mainRuntimeAnimation;
        }
    }
    if (mergeKeyFrames && mainAnimatable._runtimeAnimations.length > 1) {
        // Merge the keyframes from all the runtime animations into the first one
        const mainAnimation = mainAnimatable._runtimeAnimations[0]._animation;
        for(let i = 1; i < mainAnimatable._runtimeAnimations.length; i++){
            const runtimeAnimation = mainAnimatable._runtimeAnimations[i];
            const animation = runtimeAnimation._animation;
            animation._coreAnimation = mainAnimation;
        }
    }
    scene._activeAnimatables = [
        mainAnimatable
    ];
} //# sourceMappingURL=animation.optimizations.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Animations/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animatable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Animations/animatable.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Animations/animation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animationPropertiesOverride$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Animations/animationPropertiesOverride.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$easing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Animations/easing.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$runtimeAnimation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Animations/runtimeAnimation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animationEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Animations/animationEvent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animationGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Animations/animationGroup.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animationKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Animations/animationKey.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animationRange$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Animations/animationRange.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animatable$2e$interface$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Animations/animatable.interface.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$pathCursor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Animations/pathCursor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animationGroupMask$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Animations/animationGroupMask.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$optimizations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Animations/animation.optimizations.js [app-client] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
;
;
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
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Animations/animatable.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AddAnimationExtensions",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animatable$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AddAnimationExtensions"],
    "Animatable",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animatable$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Animatable"],
    "RegisterTargetForLateAnimationBinding",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animatable$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterTargetForLateAnimationBinding"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animatable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Animations/animatable.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animatable$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Animations/animatable.core.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Animations/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AddAnimationExtensions",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animatable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AddAnimationExtensions"],
    "Animatable",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animatable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Animatable"],
    "Animation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Animation"],
    "AnimationEvent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animationEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimationEvent"],
    "AnimationGroup",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animationGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimationGroup"],
    "AnimationGroupMask",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animationGroupMask$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimationGroupMask"],
    "AnimationGroupMaskMode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animationGroupMask$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimationGroupMaskMode"],
    "AnimationKeyInterpolation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animationKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimationKeyInterpolation"],
    "AnimationPropertiesOverride",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animationPropertiesOverride$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimationPropertiesOverride"],
    "AnimationRange",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animationRange$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimationRange"],
    "BackEase",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$easing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BackEase"],
    "BezierCurveEase",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$easing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BezierCurveEase"],
    "BounceEase",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$easing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BounceEase"],
    "CircleEase",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$easing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CircleEase"],
    "CubicEase",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$easing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CubicEase"],
    "EasingFunction",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$easing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EasingFunction"],
    "ElasticEase",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$easing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ElasticEase"],
    "ExponentialEase",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$easing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExponentialEase"],
    "OptimizeAnimations",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$optimizations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptimizeAnimations"],
    "PathCursor",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$pathCursor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PathCursor"],
    "PowerEase",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$easing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PowerEase"],
    "QuadraticEase",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$easing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QuadraticEase"],
    "QuarticEase",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$easing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QuarticEase"],
    "QuinticEase",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$easing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QuinticEase"],
    "RegisterTargetForLateAnimationBinding",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animatable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegisterTargetForLateAnimationBinding"],
    "RuntimeAnimation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$runtimeAnimation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RuntimeAnimation"],
    "SineEase",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$easing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SineEase"],
    "TargetedAnimation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animationGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TargetedAnimation"],
    "_StaticOffsetValueColor3",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_StaticOffsetValueColor3"],
    "_StaticOffsetValueColor4",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_StaticOffsetValueColor4"],
    "_StaticOffsetValueQuaternion",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_StaticOffsetValueQuaternion"],
    "_StaticOffsetValueSize",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_StaticOffsetValueSize"],
    "_StaticOffsetValueVector2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_StaticOffsetValueVector2"],
    "_StaticOffsetValueVector3",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_StaticOffsetValueVector3"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Animations/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animatable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Animations/animatable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Animations/animation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animationPropertiesOverride$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Animations/animationPropertiesOverride.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$easing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Animations/easing.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$runtimeAnimation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Animations/runtimeAnimation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animationEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Animations/animationEvent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animationGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Animations/animationGroup.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animationKey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Animations/animationKey.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animationRange$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Animations/animationRange.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animatable$2e$interface$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Animations/animatable.interface.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$pathCursor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Animations/pathCursor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animationGroupMask$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Animations/animationGroupMask.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$optimizations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Animations/animation.optimizations.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=dcdbf_%40babylonjs_core_Animations_d418244c._.js.map