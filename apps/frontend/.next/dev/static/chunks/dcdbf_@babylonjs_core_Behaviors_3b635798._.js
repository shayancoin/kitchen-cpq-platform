(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Behaviors/behavior.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
 //# sourceMappingURL=behavior.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Behaviors/Cameras/autoRotationBehavior.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AutoRotationBehavior",
    ()=>AutoRotationBehavior
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$pointerEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Events/pointerEvents.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$precisionDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/precisionDate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.constants.js [app-client] (ecmascript)");
;
;
;
class AutoRotationBehavior {
    constructor(){
        this._zoomStopsAnimation = false;
        this._idleRotationSpeed = 0.05;
        this._idleRotationWaitTime = 2000;
        this._idleRotationSpinupTime = 2000;
        /**
         * Target alpha
         */ this.targetAlpha = null;
        this._attachedCamera = null;
        this._isPointerDown = false;
        this._lastFrameTime = null;
        this._lastInteractionTime = -Infinity;
        this._cameraRotationSpeed = 0;
        this._lastFrameRadius = 0;
    }
    /**
     * Gets the name of the behavior.
     */ get name() {
        return "AutoRotation";
    }
    /**
     * Sets the flag that indicates if user zooming should stop animation.
     */ set zoomStopsAnimation(flag) {
        this._zoomStopsAnimation = flag;
    }
    /**
     * Gets the flag that indicates if user zooming should stop animation.
     */ get zoomStopsAnimation() {
        return this._zoomStopsAnimation;
    }
    /**
     * Sets the default speed at which the camera rotates around the model.
     */ set idleRotationSpeed(speed) {
        this._idleRotationSpeed = speed;
    }
    /**
     * Gets the default speed at which the camera rotates around the model.
     */ get idleRotationSpeed() {
        return this._idleRotationSpeed;
    }
    /**
     * Sets the time (in milliseconds) to wait after user interaction before the camera starts rotating.
     */ set idleRotationWaitTime(time) {
        this._idleRotationWaitTime = time;
    }
    /**
     * Gets the time (milliseconds) to wait after user interaction before the camera starts rotating.
     */ get idleRotationWaitTime() {
        return this._idleRotationWaitTime;
    }
    /**
     * Sets the time (milliseconds) to take to spin up to the full idle rotation speed.
     */ set idleRotationSpinupTime(time) {
        this._idleRotationSpinupTime = time;
    }
    /**
     * Gets the time (milliseconds) to take to spin up to the full idle rotation speed.
     */ get idleRotationSpinupTime() {
        return this._idleRotationSpinupTime;
    }
    /**
     * Gets a value indicating if the camera is currently rotating because of this behavior
     */ get rotationInProgress() {
        return Math.abs(this._cameraRotationSpeed) > 0;
    }
    /**
     * Attached node of this behavior
     */ get attachedNode() {
        return this._attachedCamera;
    }
    /**
     * Initializes the behavior.
     */ init() {
    // Do nothing
    }
    /**
     * Attaches the behavior to its arc rotate camera.
     * @param camera Defines the camera to attach the behavior to
     */ attach(camera) {
        this._attachedCamera = camera;
        const scene = this._attachedCamera.getScene();
        this._onPrePointerObservableObserver = scene.onPrePointerObservable.add((pointerInfoPre)=>{
            if (pointerInfoPre.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$pointerEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointerEventTypes"].POINTERDOWN) {
                this._isPointerDown = true;
                return;
            }
            if (pointerInfoPre.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$pointerEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointerEventTypes"].POINTERUP) {
                this._isPointerDown = false;
            }
        });
        this._onAfterCheckInputsObserver = camera.onAfterCheckInputsObservable.add(()=>{
            if (this._reachTargetAlpha()) {
                return;
            }
            const now = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$precisionDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PrecisionDate"].Now;
            let dt = 0;
            if (this._lastFrameTime != null) {
                dt = now - this._lastFrameTime;
            }
            this._lastFrameTime = now;
            // Stop the animation if there is user interaction and the animation should stop for this interaction
            this._applyUserInteraction();
            const timeToRotation = now - this._lastInteractionTime - this._idleRotationWaitTime;
            const scale = Math.max(Math.min(timeToRotation / this._idleRotationSpinupTime, 1), 0);
            this._cameraRotationSpeed = this._idleRotationSpeed * scale;
            // Step camera rotation by rotation speed
            if (this._attachedCamera) {
                this._attachedCamera.alpha -= this._cameraRotationSpeed * (dt / 1000);
            }
        });
    }
    /**
     * Detaches the behavior from its current arc rotate camera.
     */ detach() {
        if (!this._attachedCamera) {
            return;
        }
        const scene = this._attachedCamera.getScene();
        if (this._onPrePointerObservableObserver) {
            scene.onPrePointerObservable.remove(this._onPrePointerObservableObserver);
        }
        this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver);
        this._attachedCamera = null;
        this._lastFrameTime = null;
    }
    /**
     * Force-reset the last interaction time
     * @param customTime an optional time that will be used instead of the current last interaction time. For example `Date.now()`
     */ resetLastInteractionTime(customTime) {
        this._lastInteractionTime = customTime ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$precisionDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PrecisionDate"].Now;
    }
    /**
     * Returns true if camera alpha reaches the target alpha
     * @returns true if camera alpha reaches the target alpha
     */ _reachTargetAlpha() {
        if (this._attachedCamera && this.targetAlpha) {
            return Math.abs(this._attachedCamera.alpha - this.targetAlpha) < __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Epsilon"];
        }
        return false;
    }
    /**
     * Returns true if user is scrolling.
     * @returns true if user is scrolling.
     */ _userIsZooming() {
        if (!this._attachedCamera) {
            return false;
        }
        return this._attachedCamera.inertialRadiusOffset !== 0;
    }
    _shouldAnimationStopForInteraction() {
        if (!this._attachedCamera) {
            return false;
        }
        let zoomHasHitLimit = false;
        if (this._lastFrameRadius === this._attachedCamera.radius && this._attachedCamera.inertialRadiusOffset !== 0) {
            zoomHasHitLimit = true;
        }
        // Update the record of previous radius - works as an approx. indicator of hitting radius limits
        this._lastFrameRadius = this._attachedCamera.radius;
        return this._zoomStopsAnimation ? zoomHasHitLimit : this._userIsZooming();
    }
    /**
     *  Applies any current user interaction to the camera. Takes into account maximum alpha rotation.
     */ _applyUserInteraction() {
        if (this._userIsMoving() && !this._shouldAnimationStopForInteraction()) {
            this._lastInteractionTime = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$precisionDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PrecisionDate"].Now;
        }
    }
    // Tools
    _userIsMoving() {
        if (!this._attachedCamera) {
            return false;
        }
        return this._attachedCamera.inertialAlphaOffset !== 0 || this._attachedCamera.inertialBetaOffset !== 0 || this._attachedCamera.inertialRadiusOffset !== 0 || this._attachedCamera.inertialPanningX !== 0 || this._attachedCamera.inertialPanningY !== 0 || this._isPointerDown;
    }
} //# sourceMappingURL=autoRotationBehavior.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Behaviors/Cameras/bouncingBehavior.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BouncingBehavior",
    ()=>BouncingBehavior
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$easing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Animations/easing.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Animations/animation.js [app-client] (ecmascript)");
;
;
class BouncingBehavior {
    constructor(){
        /**
         * The duration of the animation, in milliseconds
         */ this.transitionDuration = 450;
        /**
         * Length of the distance animated by the transition when lower radius is reached
         */ this.lowerRadiusTransitionRange = 2;
        /**
         * Length of the distance animated by the transition when upper radius is reached
         */ this.upperRadiusTransitionRange = -2;
        this._autoTransitionRange = false;
        // Connection
        this._attachedCamera = null;
        // Animations
        this._radiusIsAnimating = false;
        this._radiusBounceTransition = null;
        this._animatables = new Array();
    }
    /**
     * Gets the name of the behavior.
     */ get name() {
        return "Bouncing";
    }
    /**
     * Gets a value indicating if the lowerRadiusTransitionRange and upperRadiusTransitionRange are defined automatically
     */ get autoTransitionRange() {
        return this._autoTransitionRange;
    }
    /**
     * Sets a value indicating if the lowerRadiusTransitionRange and upperRadiusTransitionRange are defined automatically
     * Transition ranges will be set to 5% of the bounding box diagonal in world space
     */ set autoTransitionRange(value) {
        if (this._autoTransitionRange === value) {
            return;
        }
        this._autoTransitionRange = value;
        const camera = this._attachedCamera;
        if (!camera) {
            return;
        }
        if (value) {
            this._onMeshTargetChangedObserver = camera.onMeshTargetChangedObservable.add((transformNode)=>{
                if (!transformNode) {
                    return;
                }
                transformNode.computeWorldMatrix(true);
                if (transformNode.getBoundingInfo) {
                    const diagonal = transformNode.getBoundingInfo().diagonalLength;
                    this.lowerRadiusTransitionRange = diagonal * 0.05;
                    this.upperRadiusTransitionRange = diagonal * 0.05;
                }
            });
        } else if (this._onMeshTargetChangedObserver) {
            camera.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver);
        }
    }
    /**
     * Attached node of this behavior
     */ get attachedNode() {
        return this._attachedCamera;
    }
    /**
     * Initializes the behavior.
     */ init() {
    // Do nothing
    }
    /**
     * Attaches the behavior to its arc rotate camera.
     * @param camera Defines the camera to attach the behavior to
     */ attach(camera) {
        this._attachedCamera = camera;
        this._onAfterCheckInputsObserver = camera.onAfterCheckInputsObservable.add(()=>{
            if (!this._attachedCamera) {
                return;
            }
            // Add the bounce animation to the lower radius limit
            if (this._isRadiusAtLimit(this._attachedCamera.lowerRadiusLimit)) {
                this._applyBoundRadiusAnimation(this.lowerRadiusTransitionRange);
            }
            // Add the bounce animation to the upper radius limit
            if (this._isRadiusAtLimit(this._attachedCamera.upperRadiusLimit)) {
                this._applyBoundRadiusAnimation(this.upperRadiusTransitionRange);
            }
        });
    }
    /**
     * Detaches the behavior from its current arc rotate camera.
     */ detach() {
        if (!this._attachedCamera) {
            return;
        }
        if (this._onAfterCheckInputsObserver) {
            this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver);
        }
        if (this._onMeshTargetChangedObserver) {
            this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver);
        }
        this._attachedCamera = null;
    }
    /**
     * Checks if the camera radius is at the specified limit. Takes into account animation locks.
     * @param radiusLimit The limit to check against.
     * @returns Bool to indicate if at limit.
     */ _isRadiusAtLimit(radiusLimit) {
        if (!this._attachedCamera) {
            return false;
        }
        if (this._attachedCamera.radius === radiusLimit && !this._radiusIsAnimating) {
            return true;
        }
        return false;
    }
    /**
     * Applies an animation to the radius of the camera, extending by the radiusDelta.
     * @param radiusDelta The delta by which to animate to. Can be negative.
     */ _applyBoundRadiusAnimation(radiusDelta) {
        if (!this._attachedCamera) {
            return;
        }
        if (!this._radiusBounceTransition) {
            BouncingBehavior.EasingFunction.setEasingMode(BouncingBehavior.EasingMode);
            this._radiusBounceTransition = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Animation"].CreateAnimation("radius", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Animation"].ANIMATIONTYPE_FLOAT, 60, BouncingBehavior.EasingFunction);
        }
        // Prevent zoom until bounce has completed
        this._cachedWheelPrecision = this._attachedCamera.wheelPrecision;
        this._attachedCamera.wheelPrecision = Infinity;
        this._attachedCamera.inertialRadiusOffset = 0;
        // Animate to the radius limit
        this.stopAllAnimations();
        this._radiusIsAnimating = true;
        const animatable = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Animation"].TransitionTo("radius", this._attachedCamera.radius + radiusDelta, this._attachedCamera, this._attachedCamera.getScene(), 60, this._radiusBounceTransition, this.transitionDuration, ()=>this._clearAnimationLocks());
        if (animatable) {
            this._animatables.push(animatable);
        }
    }
    /**
     * Removes all animation locks. Allows new animations to be added to any of the camera properties.
     */ _clearAnimationLocks() {
        this._radiusIsAnimating = false;
        if (this._attachedCamera) {
            this._attachedCamera.wheelPrecision = this._cachedWheelPrecision;
        }
    }
    /**
     * Stops and removes all animations that have been applied to the camera
     */ stopAllAnimations() {
        if (this._attachedCamera) {
            this._attachedCamera.animations = [];
        }
        while(this._animatables.length){
            this._animatables[0].onAnimationEnd = null;
            this._animatables[0].stop();
            this._animatables.shift();
        }
    }
}
/**
 * The easing function used by animations
 */ BouncingBehavior.EasingFunction = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$easing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BackEase"](0.3);
/**
 * The easing mode used by animations
 */ BouncingBehavior.EasingMode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$easing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EasingFunction"].EASINGMODE_EASEOUT; //# sourceMappingURL=bouncingBehavior.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Behaviors/Cameras/framingBehavior.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FramingBehavior",
    ()=>FramingBehavior
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$easing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Animations/easing.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$pointerEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Events/pointerEvents.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$precisionDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/precisionDate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Animations/animation.js [app-client] (ecmascript)");
;
;
;
;
;
;
class FramingBehavior {
    constructor(){
        /**
         * An event triggered when the animation to zoom on target mesh has ended
         */ this.onTargetFramingAnimationEndObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        this._mode = FramingBehavior.FitFrustumSidesMode;
        this._radiusScale = 1.0;
        this._positionScale = 0.5;
        this._defaultElevation = 0.3;
        this._elevationReturnTime = 1500;
        this._elevationReturnWaitTime = 1000;
        this._zoomStopsAnimation = false;
        this._framingTime = 1500;
        /**
         * Define if the behavior should automatically change the configured
         * camera limits and sensibilities.
         */ this.autoCorrectCameraLimitsAndSensibility = true;
        this._attachedCamera = null;
        this._isPointerDown = false;
        this._lastInteractionTime = -Infinity;
        // Framing control
        this._animatables = new Array();
        this._betaIsAnimating = false;
    }
    /**
     * Gets the name of the behavior.
     */ get name() {
        return "Framing";
    }
    /**
     * Sets the current mode used by the behavior
     */ set mode(mode) {
        this._mode = mode;
    }
    /**
     * Gets current mode used by the behavior.
     */ get mode() {
        return this._mode;
    }
    /**
     * Sets the scale applied to the radius (1 by default)
     */ set radiusScale(radius) {
        this._radiusScale = radius;
    }
    /**
     * Gets the scale applied to the radius
     */ get radiusScale() {
        return this._radiusScale;
    }
    /**
     * Sets the scale to apply on Y axis to position camera focus. 0.5 by default which means the center of the bounding box.
     */ set positionScale(scale) {
        this._positionScale = scale;
    }
    /**
     * Gets the scale to apply on Y axis to position camera focus. 0.5 by default which means the center of the bounding box.
     */ get positionScale() {
        return this._positionScale;
    }
    /**
     * Sets the angle above/below the horizontal plane to return to when the return to default elevation idle
     * behaviour is triggered, in radians.
     */ set defaultElevation(elevation) {
        this._defaultElevation = elevation;
    }
    /**
     * Gets the angle above/below the horizontal plane to return to when the return to default elevation idle
     * behaviour is triggered, in radians.
     */ get defaultElevation() {
        return this._defaultElevation;
    }
    /**
     * Sets the time (in milliseconds) taken to return to the default beta position.
     * Negative value indicates camera should not return to default.
     */ set elevationReturnTime(speed) {
        this._elevationReturnTime = speed;
    }
    /**
     * Gets the time (in milliseconds) taken to return to the default beta position.
     * Negative value indicates camera should not return to default.
     */ get elevationReturnTime() {
        return this._elevationReturnTime;
    }
    /**
     * Sets the delay (in milliseconds) taken before the camera returns to the default beta position.
     */ set elevationReturnWaitTime(time) {
        this._elevationReturnWaitTime = time;
    }
    /**
     * Gets the delay (in milliseconds) taken before the camera returns to the default beta position.
     */ get elevationReturnWaitTime() {
        return this._elevationReturnWaitTime;
    }
    /**
     * Sets the flag that indicates if user zooming should stop animation.
     */ set zoomStopsAnimation(flag) {
        this._zoomStopsAnimation = flag;
    }
    /**
     * Gets the flag that indicates if user zooming should stop animation.
     */ get zoomStopsAnimation() {
        return this._zoomStopsAnimation;
    }
    /**
     * Sets the transition time when framing the mesh, in milliseconds
     */ set framingTime(time) {
        this._framingTime = time;
    }
    /**
     * Gets the transition time when framing the mesh, in milliseconds
     */ get framingTime() {
        return this._framingTime;
    }
    /**
     * Attached node of this behavior
     */ get attachedNode() {
        return this._attachedCamera;
    }
    /**
     * Initializes the behavior.
     */ init() {
    // Do nothing
    }
    /**
     * Attaches the behavior to its arc rotate camera.
     * @param camera Defines the camera to attach the behavior to
     */ attach(camera) {
        this._attachedCamera = camera;
        const scene = this._attachedCamera.getScene();
        FramingBehavior.EasingFunction.setEasingMode(FramingBehavior.EasingMode);
        this._onPrePointerObservableObserver = scene.onPrePointerObservable.add((pointerInfoPre)=>{
            if (pointerInfoPre.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$pointerEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointerEventTypes"].POINTERDOWN) {
                this._isPointerDown = true;
                return;
            }
            if (pointerInfoPre.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$pointerEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointerEventTypes"].POINTERUP) {
                this._isPointerDown = false;
            }
        });
        this._onMeshTargetChangedObserver = camera.onMeshTargetChangedObservable.add((transformNode)=>{
            if (transformNode && transformNode.getBoundingInfo) {
                this.zoomOnMesh(transformNode, undefined, ()=>{
                    this.onTargetFramingAnimationEndObservable.notifyObservers();
                });
            }
        });
        this._onAfterCheckInputsObserver = camera.onAfterCheckInputsObservable.add(()=>{
            // Stop the animation if there is user interaction and the animation should stop for this interaction
            this._applyUserInteraction();
            // Maintain the camera above the ground. If the user pulls the camera beneath the ground plane, lift it
            // back to the default position after a given timeout
            this._maintainCameraAboveGround();
        });
    }
    /**
     * Detaches the behavior from its current arc rotate camera.
     */ detach() {
        if (!this._attachedCamera) {
            return;
        }
        const scene = this._attachedCamera.getScene();
        if (this._onPrePointerObservableObserver) {
            scene.onPrePointerObservable.remove(this._onPrePointerObservableObserver);
        }
        if (this._onAfterCheckInputsObserver) {
            this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver);
        }
        if (this._onMeshTargetChangedObserver) {
            this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver);
        }
        this._attachedCamera = null;
    }
    /**
     * Targets the given mesh and updates zoom level accordingly.
     * @param mesh  The mesh to target.
     * @param focusOnOriginXZ Determines if the camera should focus on 0 in the X and Z axis instead of the mesh
     * @param onAnimationEnd Callback triggered at the end of the framing animation
     */ zoomOnMesh(mesh, focusOnOriginXZ = false, onAnimationEnd = null) {
        mesh.computeWorldMatrix(true);
        const boundingBox = mesh.getBoundingInfo().boundingBox;
        this.zoomOnBoundingInfo(boundingBox.minimumWorld, boundingBox.maximumWorld, focusOnOriginXZ, onAnimationEnd);
    }
    /**
     * Targets the given mesh with its children and updates zoom level accordingly.
     * @param mesh The mesh to target.
     * @param focusOnOriginXZ Determines if the camera should focus on 0 in the X and Z axis instead of the mesh
     * @param onAnimationEnd Callback triggered at the end of the framing animation
     */ zoomOnMeshHierarchy(mesh, focusOnOriginXZ = false, onAnimationEnd = null) {
        mesh.computeWorldMatrix(true);
        const boundingBox = mesh.getHierarchyBoundingVectors(true);
        this.zoomOnBoundingInfo(boundingBox.min, boundingBox.max, focusOnOriginXZ, onAnimationEnd);
    }
    /**
     * Targets the given meshes with their children and updates zoom level accordingly.
     * @param meshes  The mesh to target.
     * @param focusOnOriginXZ Determines if the camera should focus on 0 in the X and Z axis instead of the mesh
     * @param onAnimationEnd Callback triggered at the end of the framing animation
     */ zoomOnMeshesHierarchy(meshes, focusOnOriginXZ = false, onAnimationEnd = null) {
        const min = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
        const max = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        for(let i = 0; i < meshes.length; i++){
            const boundingInfo = meshes[i].getHierarchyBoundingVectors(true);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].CheckExtends(boundingInfo.min, min, max);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].CheckExtends(boundingInfo.max, min, max);
        }
        this.zoomOnBoundingInfo(min, max, focusOnOriginXZ, onAnimationEnd);
    }
    /**
     * Targets the bounding box info defined by its extends and updates zoom level accordingly.
     * @param minimumWorld Determines the smaller position of the bounding box extend
     * @param maximumWorld Determines the bigger position of the bounding box extend
     * @param focusOnOriginXZ Determines if the camera should focus on 0 in the X and Z axis instead of the mesh
     * @param onAnimationEnd Callback triggered at the end of the framing animation
     * @returns true if the zoom was done
     */ zoomOnBoundingInfo(minimumWorld, maximumWorld, focusOnOriginXZ = false, onAnimationEnd = null) {
        let zoomTarget;
        if (!this._attachedCamera) {
            return false;
        }
        // Find target by interpolating from bottom of bounding box in world-space to top via framingPositionY
        const bottom = minimumWorld.y;
        const top = maximumWorld.y;
        const zoomTargetY = bottom + (top - bottom) * this._positionScale;
        const radiusWorld = maximumWorld.subtract(minimumWorld).scale(0.5);
        if (!isFinite(zoomTargetY)) {
            return false; // Abort mission as there is no target
        }
        if (focusOnOriginXZ) {
            zoomTarget = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, zoomTargetY, 0);
        } else {
            const centerWorld = minimumWorld.add(radiusWorld);
            zoomTarget = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](centerWorld.x, zoomTargetY, centerWorld.z);
        }
        if (!this._vectorTransition) {
            this._vectorTransition = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Animation"].CreateAnimation("target", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Animation"].ANIMATIONTYPE_VECTOR3, 60, FramingBehavior.EasingFunction);
        }
        this._betaIsAnimating = true;
        let animatable = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Animation"].TransitionTo("target", zoomTarget, this._attachedCamera, this._attachedCamera.getScene(), 60, this._vectorTransition, this._framingTime);
        if (animatable) {
            this._animatables.push(animatable);
        }
        // sets the radius and lower radius bounds
        // Small delta ensures camera is not always at lower zoom limit.
        let radius = 0;
        if (this._mode === FramingBehavior.FitFrustumSidesMode) {
            const position = this._calculateLowerRadiusFromModelBoundingSphere(minimumWorld, maximumWorld);
            if (this.autoCorrectCameraLimitsAndSensibility) {
                this._attachedCamera.lowerRadiusLimit = radiusWorld.length() + this._attachedCamera.minZ;
            }
            radius = position;
        } else if (this._mode === FramingBehavior.IgnoreBoundsSizeMode) {
            radius = this._calculateLowerRadiusFromModelBoundingSphere(minimumWorld, maximumWorld);
            if (this.autoCorrectCameraLimitsAndSensibility && this._attachedCamera.lowerRadiusLimit === null) {
                this._attachedCamera.lowerRadiusLimit = this._attachedCamera.minZ;
            }
        }
        // Set sensibilities
        if (this.autoCorrectCameraLimitsAndSensibility) {
            const extend = maximumWorld.subtract(minimumWorld).length();
            this._attachedCamera.panningSensibility = 5000 / extend;
            this._attachedCamera.wheelPrecision = 100 / radius;
        }
        // transition to new radius
        if (!this._radiusTransition) {
            this._radiusTransition = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Animation"].CreateAnimation("radius", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Animation"].ANIMATIONTYPE_FLOAT, 60, FramingBehavior.EasingFunction);
        }
        animatable = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Animation"].TransitionTo("radius", radius, this._attachedCamera, this._attachedCamera.getScene(), 60, this._radiusTransition, this._framingTime, ()=>{
            this.stopAllAnimations();
            if (onAnimationEnd) {
                onAnimationEnd();
            }
            if (this._attachedCamera && this._attachedCamera.useInputToRestoreState) {
                this._attachedCamera.storeState();
            }
        });
        if (animatable) {
            this._animatables.push(animatable);
        }
        return true;
    }
    /**
     * Calculates the lowest radius for the camera based on the bounding box of the mesh.
     * @param minimumWorld
     * @param maximumWorld
     * @returns The minimum distance from the primary mesh's center point at which the camera must be kept in order
     *		 to fully enclose the mesh in the viewing frustum.
     */ _calculateLowerRadiusFromModelBoundingSphere(minimumWorld, maximumWorld) {
        const camera = this._attachedCamera;
        if (!camera) {
            return 0;
        }
        let distance = camera._calculateLowerRadiusFromModelBoundingSphere(minimumWorld, maximumWorld, this._radiusScale);
        if (camera.lowerRadiusLimit && this._mode === FramingBehavior.IgnoreBoundsSizeMode) {
            // Don't exceed the requested limit
            distance = distance < camera.lowerRadiusLimit ? camera.lowerRadiusLimit : distance;
        }
        // Don't exceed the upper radius limit
        if (camera.upperRadiusLimit) {
            distance = distance > camera.upperRadiusLimit ? camera.upperRadiusLimit : distance;
        }
        return distance;
    }
    /**
     * Keeps the camera above the ground plane. If the user pulls the camera below the ground plane, the camera
     * is automatically returned to its default position (expected to be above ground plane).
     */ _maintainCameraAboveGround() {
        if (this._elevationReturnTime < 0) {
            return;
        }
        const timeSinceInteraction = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$precisionDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PrecisionDate"].Now - this._lastInteractionTime;
        const defaultBeta = Math.PI * 0.5 - this._defaultElevation;
        const limitBeta = Math.PI * 0.5;
        // Bring the camera back up if below the ground plane
        if (this._attachedCamera && !this._betaIsAnimating && this._attachedCamera.beta > limitBeta && timeSinceInteraction >= this._elevationReturnWaitTime) {
            this._betaIsAnimating = true;
            //Transition to new position
            this.stopAllAnimations();
            if (!this._betaTransition) {
                this._betaTransition = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Animation"].CreateAnimation("beta", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Animation"].ANIMATIONTYPE_FLOAT, 60, FramingBehavior.EasingFunction);
            }
            const animatable = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Animation"].TransitionTo("beta", defaultBeta, this._attachedCamera, this._attachedCamera.getScene(), 60, this._betaTransition, this._elevationReturnTime, ()=>{
                this._clearAnimationLocks();
                this.stopAllAnimations();
            });
            if (animatable) {
                this._animatables.push(animatable);
            }
        }
    }
    /**
     * Removes all animation locks. Allows new animations to be added to any of the arcCamera properties.
     */ _clearAnimationLocks() {
        this._betaIsAnimating = false;
    }
    /**
     *  Applies any current user interaction to the camera. Takes into account maximum alpha rotation.
     */ _applyUserInteraction() {
        if (this.isUserIsMoving) {
            this._lastInteractionTime = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$precisionDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PrecisionDate"].Now;
            this.stopAllAnimations();
            this._clearAnimationLocks();
        }
    }
    /**
     * Stops and removes all animations that have been applied to the camera
     */ stopAllAnimations() {
        if (this._attachedCamera) {
            this._attachedCamera.animations = [];
        }
        while(this._animatables.length){
            if (this._animatables[0]) {
                this._animatables[0].onAnimationEnd = null;
                this._animatables[0].stop();
            }
            this._animatables.shift();
        }
    }
    /**
     * Gets a value indicating if the user is moving the camera
     */ get isUserIsMoving() {
        if (!this._attachedCamera) {
            return false;
        }
        return this._attachedCamera.inertialAlphaOffset !== 0 || this._attachedCamera.inertialBetaOffset !== 0 || this._attachedCamera.inertialRadiusOffset !== 0 || this._attachedCamera.inertialPanningX !== 0 || this._attachedCamera.inertialPanningY !== 0 || this._isPointerDown;
    }
}
/**
 * The easing function used by animations
 */ FramingBehavior.EasingFunction = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$easing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExponentialEase"]();
/**
 * The easing mode used by animations
 */ FramingBehavior.EasingMode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$easing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EasingFunction"].EASINGMODE_EASEINOUT;
// Statics
/**
 * The camera can move all the way towards the mesh.
 */ FramingBehavior.IgnoreBoundsSizeMode = 0;
/**
 * The camera is not allowed to zoom closer to the mesh than the point at which the adjusted bounding sphere touches the frustum sides
 */ FramingBehavior.FitFrustumSidesMode = 1; //# sourceMappingURL=framingBehavior.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Behaviors/Cameras/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Behaviors$2f$Cameras$2f$autoRotationBehavior$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Behaviors/Cameras/autoRotationBehavior.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Behaviors$2f$Cameras$2f$bouncingBehavior$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Behaviors/Cameras/bouncingBehavior.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Behaviors$2f$Cameras$2f$framingBehavior$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Behaviors/Cameras/framingBehavior.js [app-client] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
;
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Behaviors/Meshes/attachToBoxBehavior.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AttachToBoxBehavior",
    ()=>AttachToBoxBehavior
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
;
/**
 * @internal
 */ class FaceDirectionInfo {
    constructor(direction, rotatedDirection = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](), diff = 0, ignore = false){
        this.direction = direction;
        this.rotatedDirection = rotatedDirection;
        this.diff = diff;
        this.ignore = ignore;
    }
}
class AttachToBoxBehavior {
    /**
     * Attached node of this behavior
     */ get attachedNode() {
        return this._target;
    }
    /**
     * Creates the AttachToBoxBehavior, used to attach UI to the closest face of the box to a camera
     * @param _ui The transform node that should be attached to the mesh
     */ constructor(_ui){
        this._ui = _ui;
        /**
         *  ["AttachToBoxBehavior"] The name of the behavior
         */ this.name = "AttachToBoxBehavior";
        /**
         * [0.15] The distance away from the face of the mesh that the UI should be attached to (default: 0.15)
         */ this.distanceAwayFromFace = 0.15;
        /**
         * [0.15] The distance from the bottom of the face that the UI should be attached to (default: 0.15)
         */ this.distanceAwayFromBottomOfFace = 0.15;
        this._faceVectors = [
            new FaceDirectionInfo(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Up()),
            new FaceDirectionInfo(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Down()),
            new FaceDirectionInfo(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Left()),
            new FaceDirectionInfo(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Right()),
            new FaceDirectionInfo(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Forward()),
            new FaceDirectionInfo(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Forward().scaleInPlace(-1))
        ];
        this._tmpMatrix = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"]();
        this._tmpVector = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
        this._zeroVector = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        this._lookAtTmpMatrix = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"]();
        this._target = null;
    }
    /**
     *  Initializes the behavior
     */ init() {
    /* Does nothing */ }
    _closestFace(targetDirection) {
        // Go over each face and calculate the angle between the face's normal and targetDirection
        for (const v of this._faceVectors){
            if (!this._target.rotationQuaternion) {
                this._target.rotationQuaternion = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].RotationYawPitchRoll(this._target.rotation.y, this._target.rotation.x, this._target.rotation.z);
            }
            this._target.rotationQuaternion.toRotationMatrix(this._tmpMatrix);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinatesToRef(v.direction, this._tmpMatrix, v.rotatedDirection);
            v.diff = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].GetAngleBetweenVectors(v.rotatedDirection, targetDirection, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Cross(v.rotatedDirection, targetDirection));
        }
        // Return the face information of the one with the normal closest to target direction
        return this._faceVectors.reduce((min, p)=>{
            if (min.ignore) {
                return p;
            } else if (p.ignore) {
                return min;
            } else {
                return min.diff < p.diff ? min : p;
            }
        }, this._faceVectors[0]);
    }
    _lookAtToRef(pos, up = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 1, 0), ref) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].LookAtLHToRef(this._zeroVector, pos, up, this._lookAtTmpMatrix);
        this._lookAtTmpMatrix.invert();
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].FromRotationMatrixToRef(this._lookAtTmpMatrix, ref);
    }
    /**
     * Attaches the AttachToBoxBehavior to the passed in mesh
     * @param target The mesh that the specified node will be attached to
     */ attach(target) {
        this._target = target;
        this._scene = this._target.getScene();
        // Every frame, update the app bars position
        this._onRenderObserver = this._scene.onBeforeRenderObservable.add(()=>{
            if (!this._scene.activeCamera) {
                return;
            }
            // Find the face closest to the cameras position
            let cameraPos = this._scene.activeCamera.position;
            if (this._scene.activeCamera.devicePosition) {
                cameraPos = this._scene.activeCamera.devicePosition;
            }
            const facing = this._closestFace(cameraPos.subtract(target.position));
            if (this._scene.activeCamera.leftCamera) {
                this._scene.activeCamera.leftCamera.computeWorldMatrix().getRotationMatrixToRef(this._tmpMatrix);
            } else {
                this._scene.activeCamera.computeWorldMatrix().getRotationMatrixToRef(this._tmpMatrix);
            }
            // Get camera up direction
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinatesToRef(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Up(), this._tmpMatrix, this._tmpVector);
            // Ignore faces to not select a parallel face for the up vector of the UI
            for (const v of this._faceVectors){
                if (facing.direction.x && v.direction.x) {
                    v.ignore = true;
                }
                if (facing.direction.y && v.direction.y) {
                    v.ignore = true;
                }
                if (facing.direction.z && v.direction.z) {
                    v.ignore = true;
                }
            }
            const facingUp = this._closestFace(this._tmpVector);
            // Unignore faces
            for (const v of this._faceVectors){
                v.ignore = false;
            }
            // Position the app bar on that face
            this._ui.position.copyFrom(target.position);
            if (facing.direction.x) {
                facing.rotatedDirection.scaleToRef(target.scaling.x / 2 + this.distanceAwayFromFace, this._tmpVector);
                this._ui.position.addInPlace(this._tmpVector);
            }
            if (facing.direction.y) {
                facing.rotatedDirection.scaleToRef(target.scaling.y / 2 + this.distanceAwayFromFace, this._tmpVector);
                this._ui.position.addInPlace(this._tmpVector);
            }
            if (facing.direction.z) {
                facing.rotatedDirection.scaleToRef(target.scaling.z / 2 + this.distanceAwayFromFace, this._tmpVector);
                this._ui.position.addInPlace(this._tmpVector);
            }
            // Rotate to be oriented properly to the camera
            if (!this._ui.rotationQuaternion) {
                this._ui.rotationQuaternion = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].RotationYawPitchRoll(this._ui.rotation.y, this._ui.rotation.x, this._ui.rotation.z);
            }
            facing.rotatedDirection.scaleToRef(-1, this._tmpVector);
            this._lookAtToRef(this._tmpVector, facingUp.rotatedDirection, this._ui.rotationQuaternion);
            // Place ui the correct distance from the bottom of the mesh
            if (facingUp.direction.x) {
                this._ui.up.scaleToRef(this.distanceAwayFromBottomOfFace - target.scaling.x / 2, this._tmpVector);
            }
            if (facingUp.direction.y) {
                this._ui.up.scaleToRef(this.distanceAwayFromBottomOfFace - target.scaling.y / 2, this._tmpVector);
            }
            if (facingUp.direction.z) {
                this._ui.up.scaleToRef(this.distanceAwayFromBottomOfFace - target.scaling.z / 2, this._tmpVector);
            }
            this._ui.position.addInPlace(this._tmpVector);
        });
    }
    /**
     *  Detaches the behavior from the mesh
     */ detach() {
        this._scene.onBeforeRenderObservable.remove(this._onRenderObserver);
        this._target = null;
    }
} //# sourceMappingURL=attachToBoxBehavior.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Behaviors/Meshes/fadeInOutBehavior.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * A behavior that when attached to a mesh will allow the mesh to fade in and out
 */ __turbopack_context__.s([
    "FadeInOutBehavior",
    ()=>FadeInOutBehavior
]);
class FadeInOutBehavior {
    /**
     * Time in milliseconds to delay before fading in (Default: 0)
     * Will set both fade in and out delay to the same value
     */ get delay() {
        return this.fadeInDelay;
    }
    set delay(value) {
        this.fadeInDelay = value;
        this.fadeOutDelay = value;
    }
    /**
     * Attached node of this behavior
     */ get attachedNode() {
        return this._ownerNode;
    }
    /**
     * Instantiates the FadeInOutBehavior
     */ constructor(){
        /**
         * Time in milliseconds to delay before fading in (Default: 0)
         */ this.fadeInDelay = 0;
        /**
         * Time in milliseconds to delay before fading out (Default: 0)
         */ this.fadeOutDelay = 0;
        /**
         * Time in milliseconds for the mesh to fade in (Default: 300)
         */ this.fadeInTime = 300;
        /**
         * Time in milliseconds for the mesh to fade out (Default: 300)
         */ this.fadeOutTime = 300;
        this._millisecondsPerFrame = 1000 / 60;
        this._hovered = false;
        this._hoverValue = 0;
        this._ownerNode = null;
        this._delay = 0;
        this._time = 300;
        this._update = ()=>{
            if (this._ownerNode) {
                this._hoverValue += this._hovered ? this._millisecondsPerFrame : -this._millisecondsPerFrame;
                this._setAllVisibility(this._ownerNode, (this._hoverValue - this._delay) / this._time);
                if (this._ownerNode.visibility > 1) {
                    this._setAllVisibility(this._ownerNode, 1);
                    if (this._hoverValue > this._time) {
                        this._hoverValue = this._time;
                        this._detachObserver();
                        return;
                    }
                } else if (this._ownerNode.visibility < 0) {
                    this._setAllVisibility(this._ownerNode, 0);
                    if (this._hoverValue < 0) {
                        this._hoverValue = 0;
                        this._detachObserver();
                        return;
                    }
                }
                this._attachObserver();
            }
        };
    }
    /**
     *  The name of the behavior
     */ get name() {
        return "FadeInOut";
    }
    /**
     *  Initializes the behavior
     */ init() {}
    /**
     * Attaches the fade behavior on the passed in mesh
     * @param ownerNode The mesh that will be faded in/out once attached
     */ attach(ownerNode) {
        this._ownerNode = ownerNode;
        this._setAllVisibility(this._ownerNode, 0);
    }
    /**
     *  Detaches the behavior from the mesh
     */ detach() {
        this._ownerNode = null;
    }
    /**
     * Triggers the mesh to begin fading in (or out)
     * @param fadeIn if the object should fade in or out (true to fade in)
     */ fadeIn(fadeIn = true) {
        this._delay = fadeIn ? this.fadeInDelay : this.fadeOutDelay;
        this._time = fadeIn ? this.fadeInTime : this.fadeOutTime;
        // Cancel any pending updates
        this._detachObserver();
        // If fading in and already visible or fading out and already not visible do nothing
        if (this._ownerNode && (fadeIn && this._ownerNode.visibility >= 1 || !fadeIn && this._ownerNode.visibility <= 0)) {
            return;
        }
        this._hovered = fadeIn;
        if (!this._hovered) {
            // Make the delay the negative of fadeout delay so the hoverValue is kept above 1 until
            // fadeOutDelay has elapsed
            this._delay *= -1;
        }
        // Reset the hoverValue.  This is necessary because we may have been fading out, e.g. but not yet reached
        // the delay, so the hover value is greater than 1
        if (this._ownerNode.visibility >= 1) {
            this._hoverValue = this._time;
        } else if (this._ownerNode.visibility <= 0) {
            this._hoverValue = 0;
        }
        this._update();
    }
    /**
     * Triggers the mesh to begin fading out
     */ fadeOut() {
        this.fadeIn(false);
    }
    _setAllVisibility(mesh, value) {
        mesh.visibility = value;
        const children = mesh.getChildMeshes();
        for (const c of children){
            this._setAllVisibility(c, value);
        }
    }
    _attachObserver() {
        if (!this._onBeforeRenderObserver) {
            this._onBeforeRenderObserver = this._ownerNode?.getScene().onBeforeRenderObservable.add(this._update);
        }
    }
    _detachObserver() {
        if (this._onBeforeRenderObserver) {
            this._ownerNode?.getScene().onBeforeRenderObservable.remove(this._onBeforeRenderObserver);
            this._onBeforeRenderObserver = null;
        }
    }
} //# sourceMappingURL=fadeInOutBehavior.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Behaviors/Meshes/pointerDragBehavior.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PointerDragBehavior",
    ()=>PointerDragBehavior
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/mesh.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$scene$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/scene.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$pointerEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Events/pointerEvents.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$ray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Culling/ray.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$ray$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Culling/ray.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$pivotTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/pivotTools.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$planeBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/planeBuilder.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.constants.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
class PointerDragBehavior {
    /**
     * Get or set the currentDraggingPointerId
     * @deprecated Please use currentDraggingPointerId instead
     */ // eslint-disable-next-line @typescript-eslint/naming-convention
    get currentDraggingPointerID() {
        return this.currentDraggingPointerId;
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    set currentDraggingPointerID(currentDraggingPointerId) {
        this.currentDraggingPointerId = currentDraggingPointerId;
    }
    /**
     *  If the drag behavior will react to drag events (Default: true)
     */ set enabled(value) {
        if (value != this._enabled) {
            this.onEnabledObservable.notifyObservers(value);
        }
        this._enabled = value;
    }
    get enabled() {
        return this._enabled;
    }
    /**
     * Gets the options used by the behavior
     */ get options() {
        return this._options;
    }
    /**
     * Sets the options used by the behavior
     */ set options(options) {
        this._options = options;
    }
    /**
     * Creates a pointer drag behavior that can be attached to a mesh
     * @param options The drag axis or normal of the plane that will be dragged across. If no options are specified the drag plane will always face the ray's origin (eg. camera)
     * @param options.dragAxis
     * @param options.dragPlaneNormal
     */ constructor(options){
        this._useAlternatePickedPointAboveMaxDragAngleDragSpeed = -1.1;
        this._activeDragButton = -1;
        /**
         * The maximum tolerated angle between the drag plane and dragging pointer rays to trigger pointer events. Set to 0 to allow any angle (default: 0)
         */ this.maxDragAngle = 0;
        /**
         * Butttons that can be used to initiate a drag
         */ this.dragButtons = [
            0,
            1,
            2
        ];
        /**
         * @internal
         */ this._useAlternatePickedPointAboveMaxDragAngle = false;
        /**
         * The id of the pointer that is currently interacting with the behavior (-1 when no pointer is active)
         */ this.currentDraggingPointerId = -1;
        /**
         * If the behavior is currently in a dragging state
         */ this.dragging = false;
        /**
         * The distance towards the target drag position to move each frame. This can be useful to avoid jitter. Set this to 1 for no delay. (Default: 0.2)
         */ this.dragDeltaRatio = 0.2;
        /**
         * If the drag plane orientation should be updated during the dragging (Default: true)
         */ this.updateDragPlane = true;
        // Debug mode will display drag planes to help visualize behavior
        this._debugMode = false;
        this._moving = false;
        /**
         *  Fires each time the attached mesh is dragged with the pointer
         */ this.onDragObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         *  Fires each time a drag begins (eg. mouse down on mesh)
         */ this.onDragStartObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         *  Fires each time a drag ends (eg. mouse release after drag)
         */ this.onDragEndObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         *  Fires each time behavior enabled state changes
         */ this.onEnabledObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         *  If the attached mesh should be moved when dragged
         */ this.moveAttached = true;
        this._enabled = true;
        /**
         * If pointer events should start and release the drag (Default: true)
         */ this.startAndReleaseDragOnPointerEvents = true;
        /**
         * If camera controls should be detached during the drag
         */ this.detachCameraControls = true;
        /**
         * If set, the drag plane/axis will be rotated based on the attached mesh's world rotation (Default: true)
         */ this.useObjectOrientationForDragging = true;
        /**
         * Normally a drag is canceled when the user presses another button on the same pointer. If this is set to true,
         * the drag will continue even if another button is pressed on the same pointer.
         */ this.allowOtherButtonsDuringDrag = false;
        /**
         * Predicate to determine if it is valid to move the object to a new position when it is moved.
         * In the case of rotation gizmo, target contains the angle.
         * @param target destination position or desired angle delta
         * @returns boolean for whether or not it is valid to move
         */ // eslint-disable-next-line @typescript-eslint/no-unused-vars
        this.validateDrag = (target)=>{
            return true;
        };
        this._tmpVector = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 0);
        this._alternatePickedPoint = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 0);
        this._worldDragAxis = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 0);
        this._targetPosition = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 0);
        this._attachedToElement = false;
        this._startDragRay = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$ray$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ray"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]());
        this._lastPointerRay = {};
        this._dragDelta = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
        // Variables to avoid instantiation in the below method
        this._pointA = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 0);
        this._pointC = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 0);
        this._localAxis = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 0);
        this._lookAt = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 0);
        this._options = options ? options : {};
        let optionCount = 0;
        if (this._options.dragAxis) {
            optionCount++;
        }
        if (this._options.dragPlaneNormal) {
            optionCount++;
        }
        if (optionCount > 1) {
            // eslint-disable-next-line no-throw-literal
            throw "Multiple drag modes specified in dragBehavior options. Only one expected";
        }
    }
    /**
     *  The name of the behavior
     */ get name() {
        return "PointerDrag";
    }
    /**
     *  Initializes the behavior
     */ init() {}
    /**
     * Attaches the drag behavior the passed in mesh
     * @param ownerNode The mesh that will be dragged around once attached
     * @param predicate Predicate to use for pick filtering
     */ attach(ownerNode, predicate) {
        this._scene = ownerNode.getScene();
        ownerNode.isNearGrabbable = true;
        this.attachedNode = ownerNode;
        // Initialize drag plane to not interfere with existing scene
        if (!PointerDragBehavior._PlaneScene) {
            if (this._debugMode) {
                PointerDragBehavior._PlaneScene = this._scene;
            } else {
                PointerDragBehavior._PlaneScene = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$scene$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"](this._scene.getEngine(), {
                    virtual: true
                });
                PointerDragBehavior._PlaneScene.detachControl();
                this._scene.onDisposeObservable.addOnce(()=>{
                    PointerDragBehavior._PlaneScene.dispose();
                    PointerDragBehavior._PlaneScene = null;
                });
            }
        }
        this._dragPlane = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$planeBuilder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreatePlane"])("pointerDragPlane", {
            size: this._debugMode ? 1 : 10000,
            updatable: false,
            sideOrientation: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$mesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"].DOUBLESIDE
        }, PointerDragBehavior._PlaneScene);
        // State of the drag
        this.lastDragPosition = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 0);
        const pickPredicate = predicate ? predicate : (m)=>{
            return this.attachedNode == m || m.isDescendantOf(this.attachedNode);
        };
        this._pointerObserver = this._scene.onPointerObservable.add((pointerInfo)=>{
            if (!this.enabled) {
                // If behavior is disabled before releaseDrag is ever called, call it now.
                if (this._attachedToElement) {
                    this.releaseDrag();
                }
                return;
            }
            // If we are dragging and the user presses another button on the same pointer, end the drag. Otherwise,
            // tracking when the drag should end becomes very complex.
            // gizmo.ts has similar behavior.
            if (this.dragging && this.currentDraggingPointerId == pointerInfo.event.pointerId && pointerInfo.event.button !== -1 && pointerInfo.event.button !== this._activeDragButton && !this.allowOtherButtonsDuringDrag) {
                this.releaseDrag();
                return;
            }
            if (pointerInfo.type == __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$pointerEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointerEventTypes"].POINTERDOWN) {
                if (this.startAndReleaseDragOnPointerEvents && !this.dragging && pointerInfo.pickInfo && pointerInfo.pickInfo.hit && pointerInfo.pickInfo.pickedMesh && pointerInfo.pickInfo.pickedPoint && pointerInfo.pickInfo.ray && pickPredicate(pointerInfo.pickInfo.pickedMesh)) {
                    if (this._activeDragButton === -1 && this.dragButtons.indexOf(pointerInfo.event.button) !== -1) {
                        this._activeDragButton = pointerInfo.event.button;
                        this._activePointerInfo = pointerInfo;
                        this._startDrag(pointerInfo.event.pointerId, pointerInfo.pickInfo.ray, pointerInfo.pickInfo.pickedPoint);
                    }
                }
            } else if (pointerInfo.type == __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$pointerEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointerEventTypes"].POINTERUP) {
                if (this.startAndReleaseDragOnPointerEvents && this.currentDraggingPointerId == pointerInfo.event.pointerId && (this._activeDragButton === pointerInfo.event.button || this._activeDragButton === -1)) {
                    this.releaseDrag();
                }
            } else if (pointerInfo.type == __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$pointerEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointerEventTypes"].POINTERMOVE) {
                const pointerId = pointerInfo.event.pointerId;
                // If drag was started with anyMouseID specified, set pointerID to the next mouse that moved
                if (this.currentDraggingPointerId === PointerDragBehavior._AnyMouseId && pointerId !== PointerDragBehavior._AnyMouseId) {
                    const evt = pointerInfo.event;
                    const isMouseEvent = evt.pointerType === "mouse" || !this._scene.getEngine().hostInformation.isMobile && evt instanceof MouseEvent;
                    if (isMouseEvent) {
                        if (this._lastPointerRay[this.currentDraggingPointerId]) {
                            this._lastPointerRay[pointerId] = this._lastPointerRay[this.currentDraggingPointerId];
                            delete this._lastPointerRay[this.currentDraggingPointerId];
                        }
                        this.currentDraggingPointerId = pointerId;
                    }
                }
                // Keep track of last pointer ray, this is used simulating the start of a drag in startDrag()
                if (!this._lastPointerRay[pointerId]) {
                    this._lastPointerRay[pointerId] = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$ray$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Ray"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]());
                }
                if (pointerInfo.pickInfo && pointerInfo.pickInfo.ray) {
                    this._lastPointerRay[pointerId].origin.copyFrom(pointerInfo.pickInfo.ray.origin);
                    this._lastPointerRay[pointerId].direction.copyFrom(pointerInfo.pickInfo.ray.direction);
                    if (this.currentDraggingPointerId == pointerId && this.dragging) {
                        this._moveDrag(pointerInfo.pickInfo.ray);
                    }
                }
            }
        });
        this._beforeRenderObserver = this._scene.onBeforeRenderObservable.add(()=>{
            if (this._moving && this.moveAttached) {
                let needMatrixUpdate = false;
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$pivotTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PivotTools"]._RemoveAndStorePivotPoint(this.attachedNode);
                // Slowly move mesh to avoid jitter
                this._targetPosition.subtractToRef(this.attachedNode.absolutePosition, this._tmpVector);
                this._tmpVector.scaleInPlace(this.dragDeltaRatio);
                this.attachedNode.getAbsolutePosition().addToRef(this._tmpVector, this._tmpVector);
                if (this.validateDrag(this._tmpVector)) {
                    this.attachedNode.setAbsolutePosition(this._tmpVector);
                    needMatrixUpdate = true;
                }
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$pivotTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PivotTools"]._RestorePivotPoint(this.attachedNode);
                if (needMatrixUpdate) {
                    this.attachedNode.computeWorldMatrix();
                }
            }
        });
    }
    /**
     * Force release the drag action by code.
     */ releaseDrag() {
        if (this.dragging) {
            this.dragging = false;
            this.onDragEndObservable.notifyObservers({
                dragPlanePoint: this.lastDragPosition,
                pointerId: this.currentDraggingPointerId,
                pointerInfo: this._activePointerInfo
            });
        }
        this.currentDraggingPointerId = -1;
        this._activeDragButton = -1;
        this._activePointerInfo = null;
        this._moving = false;
        // Reattach camera controls
        if (this.detachCameraControls && this._attachedToElement && this._scene.activeCamera && !this._scene.activeCamera.leftCamera) {
            if (this._scene.activeCamera.getClassName() === "ArcRotateCamera") {
                const arcRotateCamera = this._scene.activeCamera;
                arcRotateCamera.attachControl(arcRotateCamera.inputs ? arcRotateCamera.inputs.noPreventDefault : true, arcRotateCamera._useCtrlForPanning, arcRotateCamera._panningMouseButton);
            } else {
                this._scene.activeCamera.attachControl(this._scene.activeCamera.inputs ? this._scene.activeCamera.inputs.noPreventDefault : true);
            }
            this._attachedToElement = false;
        }
    }
    /**
     * Simulates the start of a pointer drag event on the behavior
     * @param pointerId pointerID of the pointer that should be simulated (Default: Any mouse pointer ID)
     * @param fromRay initial ray of the pointer to be simulated (Default: Ray from camera to attached mesh)
     * @param startPickedPoint picked point of the pointer to be simulated (Default: attached mesh position)
     */ startDrag(pointerId = PointerDragBehavior._AnyMouseId, fromRay, startPickedPoint) {
        this._startDrag(pointerId, fromRay, startPickedPoint);
        let lastRay = this._lastPointerRay[pointerId];
        if (pointerId === PointerDragBehavior._AnyMouseId) {
            lastRay = this._lastPointerRay[Object.keys(this._lastPointerRay)[0]];
        }
        if (lastRay) {
            // if there was a last pointer ray drag the object there
            this._moveDrag(lastRay);
        }
    }
    _startDrag(pointerId, fromRay, startPickedPoint) {
        if (!this._scene.activeCamera || this.dragging || !this.attachedNode) {
            return;
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$pivotTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PivotTools"]._RemoveAndStorePivotPoint(this.attachedNode);
        // Create start ray from the camera to the object
        if (fromRay) {
            this._startDragRay.direction.copyFrom(fromRay.direction);
            this._startDragRay.origin.copyFrom(fromRay.origin);
        } else {
            this._startDragRay.origin.copyFrom(this._scene.activeCamera.position);
            this.attachedNode.getWorldMatrix().getTranslationToRef(this._tmpVector);
            this._tmpVector.subtractToRef(this._scene.activeCamera.position, this._startDragRay.direction);
        }
        this._updateDragPlanePosition(this._startDragRay, startPickedPoint ? startPickedPoint : this._tmpVector);
        const pickedPoint = this._pickWithRayOnDragPlane(this._startDragRay);
        if (pickedPoint) {
            this.dragging = true;
            this.currentDraggingPointerId = pointerId;
            this.lastDragPosition.copyFrom(pickedPoint);
            this.onDragStartObservable.notifyObservers({
                dragPlanePoint: pickedPoint,
                pointerId: this.currentDraggingPointerId,
                pointerInfo: this._activePointerInfo
            });
            this._targetPosition.copyFrom(this.attachedNode.getAbsolutePosition());
            // Detatch camera controls
            if (this.detachCameraControls && this._scene.activeCamera && this._scene.activeCamera.inputs && !this._scene.activeCamera.leftCamera) {
                if (this._scene.activeCamera.inputs.attachedToElement) {
                    this._scene.activeCamera.detachControl();
                    this._attachedToElement = true;
                } else {
                    this._attachedToElement = false;
                }
            }
        } else {
            this.releaseDrag();
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$pivotTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PivotTools"]._RestorePivotPoint(this.attachedNode);
    }
    _moveDrag(ray) {
        this._moving = true;
        const pickedPoint = this._pickWithRayOnDragPlane(ray);
        if (pickedPoint) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$pivotTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PivotTools"]._RemoveAndStorePivotPoint(this.attachedNode);
            if (this.updateDragPlane) {
                this._updateDragPlanePosition(ray, pickedPoint);
            }
            let dragLength = 0;
            // depending on the drag mode option drag accordingly
            if (this._options.dragAxis) {
                // Convert local drag axis to world if useObjectOrientationForDragging
                this.useObjectOrientationForDragging ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinatesToRef(this._options.dragAxis, this.attachedNode.getWorldMatrix().getRotationMatrix(), this._worldDragAxis) : this._worldDragAxis.copyFrom(this._options.dragAxis);
                // Project delta drag from the drag plane onto the drag axis
                pickedPoint.subtractToRef(this.lastDragPosition, this._tmpVector);
                this._worldDragAxis.normalize();
                dragLength = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Dot(this._tmpVector, this._worldDragAxis);
                this._worldDragAxis.scaleToRef(dragLength, this._dragDelta);
            } else {
                dragLength = this._dragDelta.length();
                pickedPoint.subtractToRef(this.lastDragPosition, this._dragDelta);
            }
            this._targetPosition.addInPlace(this._dragDelta);
            this.onDragObservable.notifyObservers({
                dragDistance: dragLength,
                delta: this._dragDelta,
                dragPlanePoint: pickedPoint,
                dragPlaneNormal: this._dragPlane.forward,
                pointerId: this.currentDraggingPointerId,
                pointerInfo: this._activePointerInfo
            });
            this.lastDragPosition.copyFrom(pickedPoint);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$pivotTools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PivotTools"]._RestorePivotPoint(this.attachedNode);
        }
    }
    _pickWithRayOnDragPlane(ray) {
        if (!ray) {
            return null;
        }
        // Calculate angle between plane normal and ray
        let angle = Math.acos(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Dot(this._dragPlane.forward, ray.direction));
        // Correct if ray is casted from oposite side
        if (angle > Math.PI / 2) {
            angle = Math.PI - angle;
        }
        // If the angle is too perpendicular to the plane pick another point on the plane where it is looking
        if (this.maxDragAngle > 0 && angle > this.maxDragAngle) {
            if (this._useAlternatePickedPointAboveMaxDragAngle) {
                // Invert ray direction along the towards object axis
                this._tmpVector.copyFrom(ray.direction);
                this.attachedNode.absolutePosition.subtractToRef(ray.origin, this._alternatePickedPoint);
                this._alternatePickedPoint.normalize();
                this._alternatePickedPoint.scaleInPlace(this._useAlternatePickedPointAboveMaxDragAngleDragSpeed * __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Dot(this._alternatePickedPoint, this._tmpVector));
                this._tmpVector.addInPlace(this._alternatePickedPoint);
                // Project resulting vector onto the drag plane and add it to the attached nodes absolute position to get a picked point
                const dot = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Dot(this._dragPlane.forward, this._tmpVector);
                this._dragPlane.forward.scaleToRef(-dot, this._alternatePickedPoint);
                this._alternatePickedPoint.addInPlace(this._tmpVector);
                this._alternatePickedPoint.addInPlace(this.attachedNode.absolutePosition);
                return this._alternatePickedPoint;
            } else {
                return null;
            }
        }
        // use an infinite plane instead of ray picking a mesh that must be updated every frame
        const planeNormal = this._dragPlane.forward;
        const planePosition = this._dragPlane.position;
        const dotProduct = ray.direction.dot(planeNormal);
        if (Math.abs(dotProduct) < __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Epsilon"]) {
            // Ray and plane are parallel, no intersection
            return null;
        }
        planePosition.subtractToRef(ray.origin, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0]);
        const t = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0].dot(planeNormal) / dotProduct;
        // Ensure the intersection point is in front of the ray (t must be positive)
        if (t < 0) {
            // Intersection point is behind the ray
            return null;
        }
        // Calculate the intersection point using the parameter t
        ray.direction.scaleToRef(t, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0]);
        const intersectionPoint = ray.origin.add(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0]);
        return intersectionPoint;
    }
    // Position the drag plane based on the attached mesh position, for single axis rotate the plane along the axis to face the camera
    _updateDragPlanePosition(ray, dragPlanePosition) {
        this._pointA.copyFrom(dragPlanePosition);
        if (this._options.dragAxis) {
            this.useObjectOrientationForDragging ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinatesToRef(this._options.dragAxis, this.attachedNode.getWorldMatrix().getRotationMatrix(), this._localAxis) : this._localAxis.copyFrom(this._options.dragAxis);
            // Calculate plane normal that is the cross product of local axis and (eye-dragPlanePosition)
            ray.origin.subtractToRef(this._pointA, this._pointC);
            this._pointC.normalize();
            if (Math.abs(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Dot(this._localAxis, this._pointC)) > 0.999) {
                // the drag axis is colinear with the (eye to position) ray. The cross product will give jittered values.
                // A new axis vector need to be computed
                if (Math.abs(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Dot(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].UpReadOnly, this._pointC)) > 0.999) {
                    this._lookAt.copyFrom(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Right());
                } else {
                    this._lookAt.copyFrom(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].UpReadOnly);
                }
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].CrossToRef(this._localAxis, this._pointC, this._lookAt);
                // Get perpendicular line from previous result and drag axis to adjust lineB to be perpendicular to camera
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].CrossToRef(this._localAxis, this._lookAt, this._lookAt);
                this._lookAt.normalize();
            }
            this._dragPlane.position.copyFrom(this._pointA);
            this._pointA.addToRef(this._lookAt, this._lookAt);
            this._dragPlane.lookAt(this._lookAt);
        } else if (this._options.dragPlaneNormal) {
            this.useObjectOrientationForDragging ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinatesToRef(this._options.dragPlaneNormal, this.attachedNode.getWorldMatrix().getRotationMatrix(), this._localAxis) : this._localAxis.copyFrom(this._options.dragPlaneNormal);
            this._dragPlane.position.copyFrom(this._pointA);
            this._pointA.addToRef(this._localAxis, this._lookAt);
            this._dragPlane.lookAt(this._lookAt);
        } else {
            if (this._scene.activeCamera) {
                this._scene.activeCamera.getForwardRay().direction.normalizeToRef(this._localAxis);
            }
            this._dragPlane.position.copyFrom(this._pointA);
            this._dragPlane.lookAt(this._pointA.add(this._localAxis));
        }
        // Update the position of the drag plane so it doesn't get out of sync with the node (eg. when moving back and forth quickly)
        this._dragPlane.position.copyFrom(this.attachedNode.getAbsolutePosition());
        this._dragPlane.computeWorldMatrix(true);
    }
    /**
     *  Detaches the behavior from the mesh
     */ detach() {
        this._lastPointerRay = {};
        if (this.attachedNode) {
            this.attachedNode.isNearGrabbable = false;
        }
        if (this._pointerObserver) {
            this._scene.onPointerObservable.remove(this._pointerObserver);
        }
        if (this._beforeRenderObserver) {
            this._scene.onBeforeRenderObservable.remove(this._beforeRenderObserver);
        }
        if (this._dragPlane) {
            this._dragPlane.dispose();
        }
        this.releaseDrag();
    }
}
PointerDragBehavior._AnyMouseId = -2; //# sourceMappingURL=pointerDragBehavior.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Behaviors/Meshes/multiPointerScaleBehavior.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MultiPointerScaleBehavior",
    ()=>MultiPointerScaleBehavior
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Behaviors$2f$Meshes$2f$pointerDragBehavior$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Behaviors/Meshes/pointerDragBehavior.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
;
;
class MultiPointerScaleBehavior {
    /**
     * Attached node of this behavior
     */ get attachedNode() {
        return this._ownerNode;
    }
    /**
     * Instantiate a new behavior that when attached to a mesh will allow the mesh to be scaled
     */ constructor(){
        this._startDistance = 0;
        this._initialScale = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 0);
        this._targetScale = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 0);
        this._sceneRenderObserver = null;
        this._dragBehaviorA = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Behaviors$2f$Meshes$2f$pointerDragBehavior$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointerDragBehavior"]({});
        this._dragBehaviorA.moveAttached = false;
        this._dragBehaviorB = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Behaviors$2f$Meshes$2f$pointerDragBehavior$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointerDragBehavior"]({});
        this._dragBehaviorB.moveAttached = false;
        this._ownerNode = null;
    }
    /**
     *  The name of the behavior
     */ get name() {
        return "MultiPointerScale";
    }
    /**
     *  Initializes the behavior
     */ init() {}
    _getCurrentDistance() {
        return this._dragBehaviorA.lastDragPosition.subtract(this._dragBehaviorB.lastDragPosition).length();
    }
    /**
     * Attaches the scale behavior the passed in mesh
     * @param ownerNode The mesh that will be scaled around once attached
     */ attach(ownerNode) {
        this._ownerNode = ownerNode;
        // Create 2 drag behaviors such that each will only be triggered by a separate pointer
        this._dragBehaviorA.onDragStartObservable.add(()=>{
            if (this._dragBehaviorA.dragging && this._dragBehaviorB.dragging) {
                if (this._dragBehaviorA.currentDraggingPointerId == this._dragBehaviorB.currentDraggingPointerId) {
                    this._dragBehaviorA.releaseDrag();
                } else {
                    this._initialScale.copyFrom(ownerNode.scaling);
                    this._startDistance = this._getCurrentDistance();
                }
            }
        });
        this._dragBehaviorB.onDragStartObservable.add(()=>{
            if (this._dragBehaviorA.dragging && this._dragBehaviorB.dragging) {
                if (this._dragBehaviorA.currentDraggingPointerId == this._dragBehaviorB.currentDraggingPointerId) {
                    this._dragBehaviorB.releaseDrag();
                } else {
                    this._initialScale.copyFrom(ownerNode.scaling);
                    this._startDistance = this._getCurrentDistance();
                }
            }
        });
        // Once both drag behaviors are active scale based on the distance between the two pointers
        const dragBehaviors = [
            this._dragBehaviorA,
            this._dragBehaviorB
        ];
        for (const behavior of dragBehaviors){
            behavior.onDragObservable.add(()=>{
                if (this._dragBehaviorA.dragging && this._dragBehaviorB.dragging) {
                    const ratio = this._getCurrentDistance() / this._startDistance;
                    this._initialScale.scaleToRef(ratio, this._targetScale);
                }
            });
        }
        ownerNode.addBehavior(this._dragBehaviorA);
        ownerNode.addBehavior(this._dragBehaviorB);
        // On every frame move towards target scaling to avoid jitter caused by vr controllers
        this._sceneRenderObserver = ownerNode.getScene().onBeforeRenderObservable.add(()=>{
            if (this._dragBehaviorA.dragging && this._dragBehaviorB.dragging) {
                const change = this._targetScale.subtract(ownerNode.scaling).scaleInPlace(0.1);
                if (change.length() > 0.01) {
                    ownerNode.scaling.addInPlace(change);
                }
            }
        });
    }
    /**
     *  Detaches the behavior from the mesh
     */ detach() {
        this._ownerNode.getScene().onBeforeRenderObservable.remove(this._sceneRenderObserver);
        const dragBehaviors = [
            this._dragBehaviorA,
            this._dragBehaviorB
        ];
        for (const behavior of dragBehaviors){
            behavior.onDragStartObservable.clear();
            behavior.onDragObservable.clear();
            this._ownerNode.removeBehavior(behavior);
        }
        this._ownerNode = null;
    }
} //# sourceMappingURL=multiPointerScaleBehavior.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Behaviors/Meshes/pointerDragEvents.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
 //# sourceMappingURL=pointerDragEvents.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Behaviors/Meshes/baseSixDofDragBehavior.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BaseSixDofDragBehavior",
    ()=>BaseSixDofDragBehavior
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$scene$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/scene.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$pointerEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Events/pointerEvents.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$transformNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/transformNode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Cameras/camera.js [app-client] (ecmascript)");
;
;
;
;
;
;
class BaseSixDofDragBehavior {
    constructor(){
        this._attachedToElement = false;
        this._virtualMeshesInfo = {};
        this._tmpVector = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
        this._tmpQuaternion = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"]();
        this._dragType = {
            NONE: 0,
            DRAG: 1,
            DRAG_WITH_CONTROLLER: 2,
            NEAR_DRAG: 3
        };
        this._moving = false;
        this._ownerNode = null;
        this._dragging = this._dragType.NONE;
        /**
         * The list of child meshes that can receive drag events
         * If `null`, all child meshes will receive drag event
         */ this.draggableMeshes = null;
        /**
         * How much faster the object should move when the controller is moving towards it. This is useful to bring objects that are far away from the user to them faster. Set this to 0 to avoid any speed increase. (Default: 3)
         */ this.zDragFactor = 3;
        /**
         * In case of multipointer interaction, all pointer ids currently active are stored here
         */ this.currentDraggingPointerIds = [];
        /**
        /**
         * If camera controls should be detached during the drag
         */ this.detachCameraControls = true;
        /**
         * Fires each time a drag starts
         */ this.onDragStartObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * Fires each time a drag happens
         */ this.onDragObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         *  Fires each time a drag ends (eg. mouse release after drag)
         */ this.onDragEndObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * Should the behavior allow simultaneous pointers to interact with the owner node.
         */ this.allowMultiPointer = true;
    }
    /**
     * The id of the pointer that is currently interacting with the behavior (-1 when no pointer is active)
     */ get currentDraggingPointerId() {
        if (this.currentDraggingPointerIds[0] !== undefined) {
            return this.currentDraggingPointerIds[0];
        }
        return -1;
    }
    set currentDraggingPointerId(value) {
        this.currentDraggingPointerIds[0] = value;
    }
    /**
     * Get or set the currentDraggingPointerId
     * @deprecated Please use currentDraggingPointerId instead
     */ // eslint-disable-next-line @typescript-eslint/naming-convention
    get currentDraggingPointerID() {
        return this.currentDraggingPointerId;
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    set currentDraggingPointerID(currentDraggingPointerID) {
        this.currentDraggingPointerId = currentDraggingPointerID;
    }
    /**
     *  The name of the behavior
     */ get name() {
        return "BaseSixDofDrag";
    }
    /**
     *  Returns true if the attached mesh is currently moving with this behavior
     */ get isMoving() {
        return this._moving;
    }
    /**
     * Attached node of this behavior
     */ get attachedNode() {
        return this._ownerNode;
    }
    /**
     *  Initializes the behavior
     */ init() {}
    /**
     * In the case of multiple active cameras, the cameraToUseForPointers should be used if set instead of active camera
     */ get _pointerCamera() {
        if (this._scene.cameraToUseForPointers) {
            return this._scene.cameraToUseForPointers;
        } else {
            return this._scene.activeCamera;
        }
    }
    _createVirtualMeshInfo() {
        // Setup virtual meshes to be used for dragging without dirtying the existing scene
        const dragMesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$transformNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransformNode"]("", BaseSixDofDragBehavior._VirtualScene);
        dragMesh.rotationQuaternion = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"]();
        const originMesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$transformNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransformNode"]("", BaseSixDofDragBehavior._VirtualScene);
        originMesh.rotationQuaternion = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"]();
        const pivotMesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$transformNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransformNode"]("", BaseSixDofDragBehavior._VirtualScene);
        pivotMesh.rotationQuaternion = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"]();
        return {
            dragging: false,
            moving: false,
            dragMesh,
            originMesh,
            pivotMesh,
            startingPivotPosition: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](),
            startingPivotOrientation: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"](),
            startingPosition: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](),
            startingOrientation: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"](),
            lastOriginPosition: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](),
            lastDragPosition: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]()
        };
    }
    _resetVirtualMeshesPosition() {
        for(let i = 0; i < this.currentDraggingPointerIds.length; i++){
            this._virtualMeshesInfo[this.currentDraggingPointerIds[i]].pivotMesh.position.copyFrom(this._ownerNode.getAbsolutePivotPoint());
            this._virtualMeshesInfo[this.currentDraggingPointerIds[i]].pivotMesh.rotationQuaternion.copyFrom(this._ownerNode.rotationQuaternion);
            this._virtualMeshesInfo[this.currentDraggingPointerIds[i]].startingPivotPosition.copyFrom(this._virtualMeshesInfo[this.currentDraggingPointerIds[i]].pivotMesh.position);
            this._virtualMeshesInfo[this.currentDraggingPointerIds[i]].startingPivotOrientation.copyFrom(this._virtualMeshesInfo[this.currentDraggingPointerIds[i]].pivotMesh.rotationQuaternion);
            this._virtualMeshesInfo[this.currentDraggingPointerIds[i]].startingPosition.copyFrom(this._virtualMeshesInfo[this.currentDraggingPointerIds[i]].dragMesh.position);
            this._virtualMeshesInfo[this.currentDraggingPointerIds[i]].startingOrientation.copyFrom(this._virtualMeshesInfo[this.currentDraggingPointerIds[i]].dragMesh.rotationQuaternion);
        }
    }
    _pointerUpdate2D(ray, pointerId, zDragFactor) {
        if (this._pointerCamera && this._pointerCamera.cameraRigMode == __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Camera"].RIG_MODE_NONE && !this._pointerCamera._isLeftCamera && !this._pointerCamera._isRightCamera) {
            ray.origin.copyFrom(this._pointerCamera.globalPosition);
            zDragFactor = 0;
        }
        const virtualMeshesInfo = this._virtualMeshesInfo[pointerId];
        // Calculate controller drag distance in controller space
        const originDragDifference = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[11];
        ray.origin.subtractToRef(virtualMeshesInfo.lastOriginPosition, originDragDifference);
        virtualMeshesInfo.lastOriginPosition.copyFrom(ray.origin);
        const localOriginDragDifference = -__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Dot(originDragDifference, ray.direction);
        virtualMeshesInfo.originMesh.addChild(virtualMeshesInfo.dragMesh);
        virtualMeshesInfo.originMesh.addChild(virtualMeshesInfo.pivotMesh);
        this._applyZOffset(virtualMeshesInfo.dragMesh, localOriginDragDifference, zDragFactor);
        this._applyZOffset(virtualMeshesInfo.pivotMesh, localOriginDragDifference, zDragFactor);
        // Update the controller position
        virtualMeshesInfo.originMesh.position.copyFrom(ray.origin);
        const lookAt = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[10];
        ray.origin.addToRef(ray.direction, lookAt);
        virtualMeshesInfo.originMesh.lookAt(lookAt);
        virtualMeshesInfo.originMesh.removeChild(virtualMeshesInfo.dragMesh);
        virtualMeshesInfo.originMesh.removeChild(virtualMeshesInfo.pivotMesh);
    }
    _pointerUpdateXR(controllerAimTransform, controllerGripTransform, pointerId, zDragFactor) {
        const virtualMeshesInfo = this._virtualMeshesInfo[pointerId];
        virtualMeshesInfo.originMesh.position.copyFrom(controllerAimTransform.position);
        if (this._dragging === this._dragType.NEAR_DRAG && controllerGripTransform) {
            virtualMeshesInfo.originMesh.rotationQuaternion.copyFrom(controllerGripTransform.rotationQuaternion);
        } else {
            virtualMeshesInfo.originMesh.rotationQuaternion.copyFrom(controllerAimTransform.rotationQuaternion);
        }
        virtualMeshesInfo.pivotMesh.computeWorldMatrix(true);
        virtualMeshesInfo.dragMesh.computeWorldMatrix(true);
        // Z scaling logic
        if (zDragFactor !== 0) {
            // Camera.getForwardRay modifies TmpVectors.Vector[0-3], so cache it in advance
            const cameraForwardVec = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[10];
            const originDragDirection = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[11];
            cameraForwardVec.copyFrom(this._pointerCamera.getForwardRay().direction);
            virtualMeshesInfo.originMesh.position.subtractToRef(virtualMeshesInfo.lastOriginPosition, originDragDirection);
            virtualMeshesInfo.lastOriginPosition.copyFrom(virtualMeshesInfo.originMesh.position);
            const controllerDragDistance = originDragDirection.length();
            originDragDirection.normalize();
            const cameraToDrag = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[12];
            const controllerToDrag = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[9];
            virtualMeshesInfo.dragMesh.absolutePosition.subtractToRef(this._pointerCamera.globalPosition, cameraToDrag);
            virtualMeshesInfo.dragMesh.absolutePosition.subtractToRef(virtualMeshesInfo.originMesh.position, controllerToDrag);
            const controllerToDragDistance = controllerToDrag.length();
            cameraToDrag.normalize();
            controllerToDrag.normalize();
            const controllerDragScaling = Math.abs(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Dot(originDragDirection, controllerToDrag)) * __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Dot(originDragDirection, cameraForwardVec);
            let zOffsetScaling = controllerDragScaling * zDragFactor * controllerDragDistance * controllerToDragDistance;
            // Prevent pulling the mesh through the controller
            const minDistanceFromControllerToDragMesh = 0.01;
            if (zOffsetScaling < 0 && minDistanceFromControllerToDragMesh - controllerToDragDistance > zOffsetScaling) {
                zOffsetScaling = Math.min(minDistanceFromControllerToDragMesh - controllerToDragDistance, 0);
            }
            controllerToDrag.scaleInPlace(zOffsetScaling);
            controllerToDrag.addToRef(virtualMeshesInfo.pivotMesh.absolutePosition, this._tmpVector);
            virtualMeshesInfo.pivotMesh.setAbsolutePosition(this._tmpVector);
            controllerToDrag.addToRef(virtualMeshesInfo.dragMesh.absolutePosition, this._tmpVector);
            virtualMeshesInfo.dragMesh.setAbsolutePosition(this._tmpVector);
        }
    }
    /**
     * Attaches the scale behavior the passed in mesh
     * @param ownerNode The mesh that will be scaled around once attached
     */ attach(ownerNode) {
        this._ownerNode = ownerNode;
        this._scene = this._ownerNode.getScene();
        if (!BaseSixDofDragBehavior._VirtualScene) {
            BaseSixDofDragBehavior._VirtualScene = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$scene$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"](this._scene.getEngine(), {
                virtual: true
            });
            BaseSixDofDragBehavior._VirtualScene.detachControl();
        }
        const pickPredicate = (m)=>{
            return this._ownerNode === m || m.isDescendantOf(this._ownerNode) && (!this.draggableMeshes || this.draggableMeshes.indexOf(m) !== -1);
        };
        this._pointerObserver = this._scene.onPointerObservable.add((pointerInfo)=>{
            const pointerId = pointerInfo.event.pointerId;
            if (!this._virtualMeshesInfo[pointerId]) {
                this._virtualMeshesInfo[pointerId] = this._createVirtualMeshInfo();
            }
            const virtualMeshesInfo = this._virtualMeshesInfo[pointerId];
            const isXRPointer = pointerInfo.event.pointerType === "xr-near" || pointerInfo.event.pointerType === "xr";
            const isNearXRPointer = pointerInfo.event.pointerType === "xr-near";
            if (pointerInfo.type == __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$pointerEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointerEventTypes"].POINTERDOWN) {
                if (!virtualMeshesInfo.dragging && pointerInfo.pickInfo && pointerInfo.pickInfo.hit && pointerInfo.pickInfo.pickedMesh && pointerInfo.pickInfo.pickedPoint && pointerInfo.pickInfo.ray && (!isNearXRPointer || pointerInfo.pickInfo.aimTransform) && pickPredicate(pointerInfo.pickInfo.pickedMesh)) {
                    if ((!this.allowMultiPointer || isXRPointer) && this.currentDraggingPointerIds.length > 0) {
                        return;
                    }
                    if (this._pointerCamera && this._pointerCamera.cameraRigMode === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Cameras$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Camera"].RIG_MODE_NONE && !this._pointerCamera._isLeftCamera && !this._pointerCamera._isRightCamera) {
                        pointerInfo.pickInfo.ray.origin.copyFrom(this._pointerCamera.globalPosition);
                    }
                    this._ownerNode.computeWorldMatrix(true);
                    const virtualMeshesInfo = this._virtualMeshesInfo[pointerId];
                    if (isXRPointer) {
                        this._dragging = pointerInfo.pickInfo.originMesh ? this._dragType.NEAR_DRAG : this._dragType.DRAG_WITH_CONTROLLER;
                        virtualMeshesInfo.originMesh.position.copyFrom(pointerInfo.pickInfo.aimTransform.position);
                        if (this._dragging === this._dragType.NEAR_DRAG && pointerInfo.pickInfo.gripTransform) {
                            virtualMeshesInfo.originMesh.rotationQuaternion.copyFrom(pointerInfo.pickInfo.gripTransform.rotationQuaternion);
                        } else {
                            virtualMeshesInfo.originMesh.rotationQuaternion.copyFrom(pointerInfo.pickInfo.aimTransform.rotationQuaternion);
                        }
                    } else {
                        this._dragging = this._dragType.DRAG;
                        virtualMeshesInfo.originMesh.position.copyFrom(pointerInfo.pickInfo.ray.origin);
                    }
                    virtualMeshesInfo.lastOriginPosition.copyFrom(virtualMeshesInfo.originMesh.position);
                    virtualMeshesInfo.dragMesh.position.copyFrom(pointerInfo.pickInfo.pickedPoint);
                    virtualMeshesInfo.lastDragPosition.copyFrom(pointerInfo.pickInfo.pickedPoint);
                    virtualMeshesInfo.pivotMesh.position.copyFrom(this._ownerNode.getAbsolutePivotPoint());
                    virtualMeshesInfo.pivotMesh.rotationQuaternion.copyFrom(this._ownerNode.absoluteRotationQuaternion);
                    virtualMeshesInfo.startingPosition.copyFrom(virtualMeshesInfo.dragMesh.position);
                    virtualMeshesInfo.startingPivotPosition.copyFrom(virtualMeshesInfo.pivotMesh.position);
                    virtualMeshesInfo.startingOrientation.copyFrom(virtualMeshesInfo.dragMesh.rotationQuaternion);
                    virtualMeshesInfo.startingPivotOrientation.copyFrom(virtualMeshesInfo.pivotMesh.rotationQuaternion);
                    if (isNearXRPointer) {
                        virtualMeshesInfo.originMesh.addChild(virtualMeshesInfo.dragMesh);
                        virtualMeshesInfo.originMesh.addChild(virtualMeshesInfo.pivotMesh);
                    } else {
                        virtualMeshesInfo.originMesh.lookAt(virtualMeshesInfo.dragMesh.position);
                    }
                    // Update state
                    virtualMeshesInfo.dragging = true;
                    if (this.currentDraggingPointerIds.indexOf(pointerId) === -1) {
                        this.currentDraggingPointerIds.push(pointerId);
                    }
                    // Detach camera controls
                    if (this.detachCameraControls && this._pointerCamera && !this._pointerCamera.leftCamera) {
                        if (this._pointerCamera.inputs && this._pointerCamera.inputs.attachedToElement) {
                            this._pointerCamera.detachControl();
                            this._attachedToElement = true;
                        } else if (!this.allowMultiPointer || this.currentDraggingPointerIds.length === 0) {
                            this._attachedToElement = false;
                        }
                    }
                    this._targetDragStart(virtualMeshesInfo.pivotMesh.position, virtualMeshesInfo.pivotMesh.rotationQuaternion, pointerId);
                    this.onDragStartObservable.notifyObservers({
                        position: virtualMeshesInfo.pivotMesh.position
                    });
                }
            } else if (pointerInfo.type == __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$pointerEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointerEventTypes"].POINTERUP || pointerInfo.type == __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$pointerEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointerEventTypes"].POINTERDOUBLETAP) {
                const registeredPointerIndex = this.currentDraggingPointerIds.indexOf(pointerId);
                // Update state
                virtualMeshesInfo.dragging = false;
                if (registeredPointerIndex !== -1) {
                    this.currentDraggingPointerIds.splice(registeredPointerIndex, 1);
                    if (this.currentDraggingPointerIds.length === 0) {
                        this._moving = false;
                        this._dragging = this._dragType.NONE;
                        // Reattach camera controls
                        if (this.detachCameraControls && this._attachedToElement && this._pointerCamera && !this._pointerCamera.leftCamera) {
                            this._reattachCameraControls();
                            this._attachedToElement = false;
                        }
                    }
                    virtualMeshesInfo.originMesh.removeChild(virtualMeshesInfo.dragMesh);
                    virtualMeshesInfo.originMesh.removeChild(virtualMeshesInfo.pivotMesh);
                    this._targetDragEnd(pointerId);
                    this.onDragEndObservable.notifyObservers({});
                }
            } else if (pointerInfo.type == __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$pointerEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointerEventTypes"].POINTERMOVE) {
                const registeredPointerIndex = this.currentDraggingPointerIds.indexOf(pointerId);
                if (registeredPointerIndex !== -1 && virtualMeshesInfo.dragging && pointerInfo.pickInfo && (pointerInfo.pickInfo.ray || pointerInfo.pickInfo.aimTransform)) {
                    let zDragFactor = this.zDragFactor;
                    // 2 pointer interaction should not have a z axis drag factor
                    // as well as near interaction
                    if (this.currentDraggingPointerIds.length > 1 || pointerInfo.pickInfo.originMesh) {
                        zDragFactor = 0;
                    }
                    this._ownerNode.computeWorldMatrix(true);
                    if (!isNearXRPointer) {
                        this._pointerUpdate2D(pointerInfo.pickInfo.ray, pointerId, zDragFactor);
                    } else {
                        this._pointerUpdateXR(pointerInfo.pickInfo.aimTransform, pointerInfo.pickInfo.gripTransform, pointerId, zDragFactor);
                    }
                    // Get change in rotation
                    this._tmpQuaternion.copyFrom(virtualMeshesInfo.startingPivotOrientation);
                    this._tmpQuaternion.x = -this._tmpQuaternion.x;
                    this._tmpQuaternion.y = -this._tmpQuaternion.y;
                    this._tmpQuaternion.z = -this._tmpQuaternion.z;
                    virtualMeshesInfo.pivotMesh.absoluteRotationQuaternion.multiplyToRef(this._tmpQuaternion, this._tmpQuaternion);
                    virtualMeshesInfo.pivotMesh.absolutePosition.subtractToRef(virtualMeshesInfo.startingPivotPosition, this._tmpVector);
                    this.onDragObservable.notifyObservers({
                        delta: this._tmpVector,
                        position: virtualMeshesInfo.pivotMesh.position,
                        pickInfo: pointerInfo.pickInfo
                    });
                    // Notify herited methods and observables
                    this._targetDrag(this._tmpVector, this._tmpQuaternion, pointerId);
                    virtualMeshesInfo.lastDragPosition.copyFrom(virtualMeshesInfo.dragMesh.absolutePosition);
                    this._moving = true;
                }
            }
        });
    }
    _applyZOffset(node, localOriginDragDifference, zDragFactor) {
        // Determine how much the controller moved to/away towards the dragged object and use this to move the object further when its further away
        node.position.z -= node.position.z < 1 ? localOriginDragDifference * zDragFactor : localOriginDragDifference * zDragFactor * node.position.z;
        if (node.position.z < 0) {
            node.position.z = 0;
        }
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _targetDragStart(worldPosition, worldRotation, pointerId) {
    // Herited classes can override that
    }
    _targetDrag(worldDeltaPosition, worldDeltaRotation, pointerId) {
    // Herited classes can override that
    }
    _targetDragEnd(pointerId) {
    // Herited classes can override that
    }
    _reattachCameraControls() {
        if (this._pointerCamera) {
            // If the camera is an ArcRotateCamera, preserve the settings from the camera
            // when reattaching control
            if (this._pointerCamera.getClassName() === "ArcRotateCamera") {
                const arcRotateCamera = this._pointerCamera;
                arcRotateCamera.attachControl(arcRotateCamera.inputs ? arcRotateCamera.inputs.noPreventDefault : true, arcRotateCamera._useCtrlForPanning, arcRotateCamera._panningMouseButton);
            } else {
                // preserve the settings from the camera when reattaching control
                this._pointerCamera.attachControl(this._pointerCamera.inputs ? this._pointerCamera.inputs.noPreventDefault : true);
            }
        }
    }
    /**
     * Detaches the behavior from the mesh
     */ detach() {
        if (this._scene) {
            if (this.detachCameraControls && this._attachedToElement && this._pointerCamera && !this._pointerCamera.leftCamera) {
                this._reattachCameraControls();
                this._attachedToElement = false;
            }
            this._scene.onPointerObservable.remove(this._pointerObserver);
        }
        for(const pointerId in this._virtualMeshesInfo){
            this._virtualMeshesInfo[pointerId].originMesh.dispose();
            this._virtualMeshesInfo[pointerId].dragMesh.dispose();
        }
        this.onDragEndObservable.clear();
        this.onDragObservable.clear();
        this.onDragStartObservable.clear();
        this._ownerNode = null;
    }
} //# sourceMappingURL=baseSixDofDragBehavior.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Behaviors/Meshes/sixDofDragBehavior.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SixDofDragBehavior",
    ()=>SixDofDragBehavior
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Behaviors$2f$Meshes$2f$baseSixDofDragBehavior$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Behaviors/Meshes/baseSixDofDragBehavior.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$transformNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/transformNode.js [app-client] (ecmascript)");
;
;
;
;
class SixDofDragBehavior extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Behaviors$2f$Meshes$2f$baseSixDofDragBehavior$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseSixDofDragBehavior"] {
    constructor(){
        super(...arguments);
        this._sceneRenderObserver = null;
        this._targetPosition = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 0);
        this._targetOrientation = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"]();
        this._targetScaling = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](1, 1, 1);
        this._startingPosition = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 0);
        this._startingOrientation = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"]();
        this._startingScaling = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](1, 1, 1);
        /**
         * Fires when position is updated
         */ this.onPositionChangedObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * The distance towards the target drag position to move each frame. This can be useful to avoid jitter. Set this to 1 for no delay. (Default: 0.2)
         */ this.dragDeltaRatio = 0.2;
        /**
         * If the object should rotate to face the drag origin
         */ this.rotateDraggedObject = true;
        /**
         * If `rotateDraggedObject` is set to `true`, this parameter determines if we are only rotating around the y axis (yaw)
         */ // eslint-disable-next-line @typescript-eslint/naming-convention
        this.rotateAroundYOnly = false;
        /**
         * Should the behavior rotate 1:1 with the motion controller, when one is used.
         */ this.rotateWithMotionController = true;
        /**
         * Use this flag to update the target but not move the owner node towards the target
         */ this.disableMovement = false;
        /**
         * Should the object rotate towards the camera when we start dragging it
         */ this.faceCameraOnDragStart = false;
    }
    /**
     *  The name of the behavior
     */ get name() {
        return "SixDofDrag";
    }
    /**
     * Attaches the six DoF drag behavior
     * In XR mode the mesh and its children will have their isNearGrabbable property set to true
     * @param ownerNode The mesh that will be dragged around once attached
     */ attach(ownerNode) {
        super.attach(ownerNode);
        ownerNode.isNearGrabbable = true;
        // if it has children, make sure they are grabbable too
        const children = ownerNode.getChildMeshes();
        for (const m of children){
            m.isNearGrabbable = true;
        }
        // Node that will save the owner's transform
        this._virtualTransformNode = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$transformNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransformNode"]("virtual_sixDof", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Behaviors$2f$Meshes$2f$baseSixDofDragBehavior$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseSixDofDragBehavior"]._VirtualScene);
        this._virtualTransformNode.rotationQuaternion = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].Identity();
        // On every frame move towards target scaling to avoid jitter caused by vr controllers
        this._sceneRenderObserver = ownerNode.getScene().onBeforeRenderObservable.add(()=>{
            if (this.currentDraggingPointerIds.length === 1 && this._moving && !this.disableMovement) {
                // 1 pointer only drags mesh
                const deltaToAdd = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0];
                deltaToAdd.copyFrom(this._targetPosition).subtractInPlace(ownerNode.absolutePosition).scaleInPlace(this.dragDeltaRatio);
                const deltaToAddTransformed = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[1];
                deltaToAddTransformed.copyFrom(deltaToAdd);
                // If the node has a parent, transform the delta to local space, so it can be added to the
                // position in local space
                if (ownerNode.parent) {
                    const parentRotationMatrixInverse = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[0];
                    ownerNode.parent.absoluteRotationQuaternion.toRotationMatrix(parentRotationMatrixInverse);
                    parentRotationMatrixInverse.invert();
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].TransformNormalToRef(deltaToAdd, parentRotationMatrixInverse, deltaToAddTransformed);
                }
                ownerNode.position.addInPlace(deltaToAddTransformed);
                this.onPositionChangedObservable.notifyObservers({
                    position: ownerNode.absolutePosition
                });
                // Only rotate the mesh if it's parent has uniform scaling
                if (!ownerNode.parent || ownerNode.parent.scaling && !ownerNode.parent.scaling.isNonUniformWithinEpsilon(0.001)) {
                    const rotationToApply = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Quaternion[0];
                    rotationToApply.copyFrom(this._targetOrientation);
                    if (ownerNode.parent) {
                        const parentRotationInverse = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Quaternion[0];
                        parentRotationInverse.copyFrom(ownerNode.parent.absoluteRotationQuaternion);
                        parentRotationInverse.invertInPlace();
                        parentRotationInverse.multiplyToRef(this._targetOrientation, rotationToApply);
                    }
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].SlerpToRef(ownerNode.rotationQuaternion, rotationToApply, this.dragDeltaRatio, ownerNode.rotationQuaternion);
                }
            }
        });
    }
    _getPositionOffsetAround(transformationLocalOrigin, scaling, rotation) {
        const translationMatrix = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[0]; // T
        const translationMatrixInv = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[1]; // T'
        const rotationMatrix = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[2]; // R
        const scaleMatrix = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[3]; // S
        const finalMatrix = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[4]; // T' x R x S x T
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].TranslationToRef(transformationLocalOrigin.x, transformationLocalOrigin.y, transformationLocalOrigin.z, translationMatrix); // T
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].TranslationToRef(-transformationLocalOrigin.x, -transformationLocalOrigin.y, -transformationLocalOrigin.z, translationMatrixInv); // T'
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].FromQuaternionToRef(rotation, rotationMatrix); // R
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].ScalingToRef(scaling, scaling, scaling, scaleMatrix);
        translationMatrixInv.multiplyToRef(rotationMatrix, finalMatrix); // T' x R
        finalMatrix.multiplyToRef(scaleMatrix, finalMatrix); // T' x R x S
        finalMatrix.multiplyToRef(translationMatrix, finalMatrix); // T' x R x S x T
        return finalMatrix.getTranslation();
    }
    _onePointerPositionUpdated(worldDeltaPosition, worldDeltaRotation) {
        const pointerDelta = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0];
        pointerDelta.setAll(0);
        if (this._dragging === this._dragType.DRAG) {
            if (this.rotateDraggedObject) {
                if (this.rotateAroundYOnly) {
                    // Convert change in rotation to only y axis rotation
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].RotationYawPitchRollToRef(worldDeltaRotation.toEulerAngles().y, 0, 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Quaternion[0]);
                } else {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Quaternion[0].copyFrom(worldDeltaRotation);
                }
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Quaternion[0].multiplyToRef(this._startingOrientation, this._targetOrientation);
            }
        } else if (this._dragging === this._dragType.NEAR_DRAG || this._dragging === this._dragType.DRAG_WITH_CONTROLLER && this.rotateWithMotionController) {
            worldDeltaRotation.multiplyToRef(this._startingOrientation, this._targetOrientation);
        }
        this._targetPosition.copyFrom(this._startingPosition).addInPlace(worldDeltaPosition);
    }
    _twoPointersPositionUpdated() {
        const startingPosition0 = this._virtualMeshesInfo[this.currentDraggingPointerIds[0]].startingPosition;
        const startingPosition1 = this._virtualMeshesInfo[this.currentDraggingPointerIds[1]].startingPosition;
        const startingCenter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0];
        startingPosition0.addToRef(startingPosition1, startingCenter);
        startingCenter.scaleInPlace(0.5);
        const startingVector = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[1];
        startingPosition1.subtractToRef(startingPosition0, startingVector);
        const currentPosition0 = this._virtualMeshesInfo[this.currentDraggingPointerIds[0]].dragMesh.absolutePosition;
        const currentPosition1 = this._virtualMeshesInfo[this.currentDraggingPointerIds[1]].dragMesh.absolutePosition;
        const currentCenter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[2];
        currentPosition0.addToRef(currentPosition1, currentCenter);
        currentCenter.scaleInPlace(0.5);
        const currentVector = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[3];
        currentPosition1.subtractToRef(currentPosition0, currentVector);
        const scaling = currentVector.length() / startingVector.length();
        const translation = currentCenter.subtract(startingCenter);
        const rotationQuaternion = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].FromEulerAngles(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].GetAngleBetweenVectorsOnPlane(startingVector.normalize(), currentVector.normalize(), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].UpReadOnly), 0);
        const oldParent = this._ownerNode.parent;
        this._ownerNode.setParent(null);
        const positionOffset = this._getPositionOffsetAround(startingCenter.subtract(this._virtualTransformNode.getAbsolutePivotPoint()), scaling, rotationQuaternion);
        this._virtualTransformNode.rotationQuaternion.multiplyToRef(rotationQuaternion, this._ownerNode.rotationQuaternion);
        this._virtualTransformNode.scaling.scaleToRef(scaling, this._ownerNode.scaling);
        this._virtualTransformNode.position.addToRef(translation.addInPlace(positionOffset), this._ownerNode.position);
        this.onPositionChangedObservable.notifyObservers({
            position: this._ownerNode.position
        });
        this._ownerNode.setParent(oldParent);
    }
    _targetDragStart() {
        const pointerCount = this.currentDraggingPointerIds.length;
        if (!this._ownerNode.rotationQuaternion) {
            this._ownerNode.rotationQuaternion = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].RotationYawPitchRoll(this._ownerNode.rotation.y, this._ownerNode.rotation.x, this._ownerNode.rotation.z);
        }
        const worldPivot = this._ownerNode.getAbsolutePivotPoint();
        if (pointerCount === 1) {
            this._targetPosition.copyFrom(this._ownerNode.absolutePosition);
            this._targetOrientation.copyFrom(this._ownerNode.rotationQuaternion);
            this._targetScaling.copyFrom(this._ownerNode.absoluteScaling);
            if (this.faceCameraOnDragStart && this._scene.activeCamera) {
                const toCamera = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0];
                this._scene.activeCamera.position.subtractToRef(worldPivot, toCamera);
                toCamera.normalize();
                const quat = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Quaternion[0];
                if (this._scene.useRightHandedSystem) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].FromLookDirectionRHToRef(toCamera, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 1, 0), quat);
                } else {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].FromLookDirectionLHToRef(toCamera, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 1, 0), quat);
                }
                quat.normalize();
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].RotationYawPitchRollToRef(quat.toEulerAngles().y, 0, 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Quaternion[0]);
                this._targetOrientation.copyFrom(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Quaternion[0]);
            }
            this._startingPosition.copyFrom(this._targetPosition);
            this._startingOrientation.copyFrom(this._targetOrientation);
            this._startingScaling.copyFrom(this._targetScaling);
        } else if (pointerCount === 2) {
            this._virtualTransformNode.setPivotPoint(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 0), 0 /* Space.LOCAL */ );
            this._virtualTransformNode.position.copyFrom(this._ownerNode.absolutePosition);
            this._virtualTransformNode.scaling.copyFrom(this._ownerNode.absoluteScaling);
            this._virtualTransformNode.rotationQuaternion.copyFrom(this._ownerNode.absoluteRotationQuaternion);
            this._virtualTransformNode.setPivotPoint(worldPivot, 1 /* Space.WORLD */ );
            this._resetVirtualMeshesPosition();
        }
    }
    _targetDrag(worldDeltaPosition, worldDeltaRotation) {
        if (this.currentDraggingPointerIds.length === 1) {
            this._onePointerPositionUpdated(worldDeltaPosition, worldDeltaRotation);
        } else if (this.currentDraggingPointerIds.length === 2) {
            this._twoPointersPositionUpdated();
        }
    }
    _targetDragEnd() {
        if (this.currentDraggingPointerIds.length === 1) {
            // We still have 1 active pointer, we must simulate a dragstart with a reseted position/orientation
            this._resetVirtualMeshesPosition();
            const previousFaceCameraFlag = this.faceCameraOnDragStart;
            this.faceCameraOnDragStart = false;
            this._targetDragStart();
            this.faceCameraOnDragStart = previousFaceCameraFlag;
        }
    }
    /**
     *  Detaches the behavior from the mesh
     */ detach() {
        if (this._ownerNode) {
            this._ownerNode.getScene().onBeforeRenderObservable.remove(this._sceneRenderObserver);
        }
        if (this._virtualTransformNode) {
            this._virtualTransformNode.dispose();
        }
        super.detach();
    }
} //# sourceMappingURL=sixDofDragBehavior.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Behaviors/Meshes/surfaceMagnetismBehavior.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SurfaceMagnetismBehavior",
    ()=>SurfaceMagnetismBehavior
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$pointerEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Events/pointerEvents.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
;
;
class SurfaceMagnetismBehavior {
    constructor(){
        this._attachedMesh = null;
        this._attachPointLocalOffset = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
        this._workingPosition = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
        this._workingQuaternion = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"]();
        this._lastTick = -1;
        this._hit = false;
        /**
         * Distance offset from the hit point to place the target at, along the hit normal.
         */ this.hitNormalOffset = 0.05;
        /**
         * Spatial mapping meshes to collide with
         */ this.meshes = [];
        /**
         * Set to false if the node should strictly follow the camera without any interpolation time
         */ this.interpolatePose = true;
        /**
         * Rate of interpolation of position and rotation of the attached node.
         * Higher values will give a slower interpolation.
         */ this.lerpTime = 250;
        /**
         * If true, pitch and roll are omitted.
         */ this.keepOrientationVertical = true;
        /**
         * Is this behavior reacting to pointer events
         */ this.enabled = true;
        /**
         * Maximum distance for the node to stick to the surface
         */ this.maxStickingDistance = 0.8;
    }
    /**
     * Name of the behavior
     */ get name() {
        return "SurfaceMagnetism";
    }
    /**
     * Function called when the behavior needs to be initialized (after attaching it to a target)
     */ init() {}
    /**
     * Attached node of this behavior
     */ get attachedNode() {
        return this._attachedMesh;
    }
    /**
     * Attaches the behavior to a transform node
     * @param target defines the target where the behavior is attached to
     * @param scene the scene
     */ attach(target, scene) {
        this._attachedMesh = target;
        this._scene = scene || target.getScene();
        if (!this._attachedMesh.rotationQuaternion) {
            this._attachedMesh.rotationQuaternion = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].RotationYawPitchRoll(this._attachedMesh.rotation.y, this._attachedMesh.rotation.x, this._attachedMesh.rotation.z);
        }
        this.updateAttachPoint();
        this._workingPosition.copyFrom(this._attachedMesh.position);
        this._workingQuaternion.copyFrom(this._attachedMesh.rotationQuaternion);
        this._addObservables();
    }
    /**
     * Detaches the behavior
     */ detach() {
        this._attachedMesh = null;
        this._removeObservables();
    }
    _getTargetPose(pickingInfo) {
        if (!this._attachedMesh) {
            return null;
        }
        if (pickingInfo && pickingInfo.hit) {
            const pickedNormal = pickingInfo.getNormal(true, true);
            const pickedPoint = pickingInfo.pickedPoint;
            if (!pickedNormal || !pickedPoint) {
                return null;
            }
            pickedNormal.normalize();
            const worldTarget = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0];
            worldTarget.copyFrom(pickedNormal);
            worldTarget.scaleInPlace(this.hitNormalOffset);
            worldTarget.addInPlace(pickedPoint);
            if (this._attachedMesh.parent) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[0].copyFrom(this._attachedMesh.parent.getWorldMatrix()).invert();
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].TransformNormalToRef(worldTarget, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[0], worldTarget);
            }
            return {
                position: worldTarget,
                quaternion: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].RotationYawPitchRoll(-Math.atan2(pickedNormal.x, -pickedNormal.z), this.keepOrientationVertical ? 0 : Math.atan2(pickedNormal.y, Math.sqrt(pickedNormal.z * pickedNormal.z + pickedNormal.x * pickedNormal.x)), 0)
            };
        }
        return null;
    }
    /**
     * Updates the attach point with the current geometry extents of the attached mesh
     */ updateAttachPoint() {
        this._getAttachPointOffsetToRef(this._attachPointLocalOffset);
    }
    /**
     * Finds the intersection point of the given ray onto the meshes and updates the target.
     * Transformation will be interpolated according to `interpolatePose` and `lerpTime` properties.
     * If no mesh of `meshes` are hit, this does nothing.
     * @param pickInfo The input pickingInfo that will be used to intersect the meshes
     * @returns a boolean indicating if we found a hit to stick to
     */ findAndUpdateTarget(pickInfo) {
        this._hit = false;
        if (!pickInfo.ray) {
            return false;
        }
        const subPicking = pickInfo.ray.intersectsMeshes(this.meshes)[0];
        if (this._attachedMesh && subPicking && subPicking.hit && subPicking.pickedMesh) {
            const pose = this._getTargetPose(subPicking);
            if (pose && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Distance(this._attachedMesh.position, pose.position) < this.maxStickingDistance) {
                this._workingPosition.copyFrom(pose.position);
                this._workingQuaternion.copyFrom(pose.quaternion);
                this._hit = true;
            }
        }
        return this._hit;
    }
    _getAttachPointOffsetToRef(ref) {
        if (!this._attachedMesh) {
            ref.setAll(0);
            return;
        }
        const storedQuat = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Quaternion[0];
        storedQuat.copyFrom(this._attachedMesh.rotationQuaternion);
        this._attachedMesh.rotationQuaternion.copyFromFloats(0, 0, 0, 1);
        this._attachedMesh.computeWorldMatrix();
        const boundingMinMax = this._attachedMesh.getHierarchyBoundingVectors();
        const center = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0];
        boundingMinMax.max.addToRef(boundingMinMax.min, center);
        center.scaleInPlace(0.5);
        center.z = boundingMinMax.max.z;
        // We max the z coordinate because we want the attach point to be on the back of the mesh
        const invWorld = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[0];
        this._attachedMesh.getWorldMatrix().invertToRef(invWorld);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinatesToRef(center, invWorld, ref);
        this._attachedMesh.rotationQuaternion.copyFrom(storedQuat);
    }
    _updateTransformToGoal(elapsed) {
        if (!this._attachedMesh || !this._hit) {
            return;
        }
        const oldParent = this._attachedMesh.parent;
        this._attachedMesh.setParent(null);
        const worldOffset = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0];
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].TransformNormalToRef(this._attachPointLocalOffset, this._attachedMesh.getWorldMatrix(), worldOffset);
        if (!this.interpolatePose) {
            this._attachedMesh.position.copyFrom(this._workingPosition).subtractInPlace(worldOffset);
            this._attachedMesh.rotationQuaternion.copyFrom(this._workingQuaternion);
            return;
        }
        // position
        const interpolatedPosition = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].SmoothToRef(this._attachedMesh.position, this._workingPosition, elapsed, this.lerpTime, interpolatedPosition);
        this._attachedMesh.position.copyFrom(interpolatedPosition);
        // rotation
        const currentRotation = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"]();
        currentRotation.copyFrom(this._attachedMesh.rotationQuaternion);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].SmoothToRef(currentRotation, this._workingQuaternion, elapsed, this.lerpTime, this._attachedMesh.rotationQuaternion);
        this._attachedMesh.setParent(oldParent);
    }
    _addObservables() {
        this._pointerObserver = this._scene.onPointerObservable.add((pointerInfo)=>{
            if (this.enabled && pointerInfo.type == __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Events$2f$pointerEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointerEventTypes"].POINTERMOVE && pointerInfo.pickInfo) {
                this.findAndUpdateTarget(pointerInfo.pickInfo);
            }
        });
        this._lastTick = Date.now();
        this._onBeforeRender = this._scene.onBeforeRenderObservable.add(()=>{
            const tick = Date.now();
            this._updateTransformToGoal(tick - this._lastTick);
            this._lastTick = tick;
        });
    }
    _removeObservables() {
        this._scene.onPointerObservable.remove(this._pointerObserver);
        this._scene.onBeforeRenderObservable.remove(this._onBeforeRender);
        this._pointerObserver = null;
        this._onBeforeRender = null;
    }
} //# sourceMappingURL=surfaceMagnetismBehavior.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Behaviors/Meshes/followBehavior.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FollowBehavior",
    ()=>FollowBehavior
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.scalar.functions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.constants.js [app-client] (ecmascript)");
;
;
;
class FollowBehavior {
    constructor(){
        // Memory cache to avoid GC usage
        this._tmpQuaternion = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"]();
        this._tmpVectors = [
            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](),
            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](),
            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](),
            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](),
            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](),
            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](),
            new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]()
        ];
        this._tmpMatrix = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"]();
        this._tmpInvertView = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"]();
        this._tmpForward = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
        this._tmpNodeForward = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
        this._tmpPosition = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
        this._workingPosition = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
        this._workingQuaternion = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"]();
        this._lastTick = -1;
        this._recenterNextUpdate = true;
        /**
         * Set to false if the node should strictly follow the camera without any interpolation time
         */ this.interpolatePose = true;
        /**
         * Rate of interpolation of position and rotation of the attached node.
         * Higher values will give a slower interpolation.
         */ this.lerpTime = 500;
        /**
         * If the behavior should ignore the pitch and roll of the camera.
         */ this.ignoreCameraPitchAndRoll = false;
        /**
         * Pitch offset from camera (relative to Max Distance)
         * Is only effective if `ignoreCameraPitchAndRoll` is set to `true`.
         */ this.pitchOffset = 15;
        /**
         * The vertical angle from the camera forward axis to the owner will not exceed this value
         */ this.maxViewVerticalDegrees = 30;
        /**
         * The horizontal angle from the camera forward axis to the owner will not exceed this value
         */ this.maxViewHorizontalDegrees = 30;
        /**
         * The attached node will not reorient until the angle between its forward vector and the vector to the camera is greater than this value
         */ this.orientToCameraDeadzoneDegrees = 60;
        /**
         * Option to ignore distance clamping
         */ this.ignoreDistanceClamp = false;
        /**
         * Option to ignore angle clamping
         */ this.ignoreAngleClamp = false;
        /**
         * Max vertical distance between the attachedNode and camera
         */ this.verticalMaxDistance = 0;
        /**
         *  Default distance from eye to attached node, i.e. the sphere radius
         */ this.defaultDistance = 0.8;
        /**
         *  Max distance from eye to attached node, i.e. the sphere radius
         */ this.maximumDistance = 2;
        /**
         *  Min distance from eye to attached node, i.e. the sphere radius
         */ this.minimumDistance = 0.3;
        /**
         * Ignore vertical movement and lock the Y position of the object.
         */ this.useFixedVerticalOffset = false;
        /**
         * Fixed vertical position offset distance.
         */ this.fixedVerticalOffset = 0;
        /**
         * Enables/disables the behavior
         * @internal
         */ this._enabled = true;
    }
    /**
     * The camera that should be followed by this behavior
     */ get followedCamera() {
        return this._followedCamera || this._scene.activeCamera;
    }
    set followedCamera(camera) {
        this._followedCamera = camera;
    }
    /**
     *  The name of the behavior
     */ get name() {
        return "Follow";
    }
    /**
     *  Initializes the behavior
     */ init() {}
    /**
     * Attaches the follow behavior
     * @param ownerNode The mesh that will be following once attached
     * @param followedCamera The camera that should be followed by the node
     */ attach(ownerNode, followedCamera) {
        this._scene = ownerNode.getScene();
        this.attachedNode = ownerNode;
        if (followedCamera) {
            this.followedCamera = followedCamera;
        }
        this._addObservables();
    }
    /**
     *  Detaches the behavior from the mesh
     */ detach() {
        this.attachedNode = null;
        this._removeObservables();
    }
    /**
     * Recenters the attached node in front of the camera on the next update
     */ recenter() {
        this._recenterNextUpdate = true;
    }
    _angleBetweenVectorAndPlane(vector, normal) {
        // Work on copies
        this._tmpVectors[0].copyFrom(vector);
        vector = this._tmpVectors[0];
        this._tmpVectors[1].copyFrom(normal);
        normal = this._tmpVectors[1];
        vector.normalize();
        normal.normalize();
        return Math.PI / 2 - Math.acos(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Dot(vector, normal));
    }
    _length2D(vector) {
        return Math.sqrt(vector.x * vector.x + vector.z * vector.z);
    }
    _distanceClamp(currentToTarget, moveToDefault = false) {
        let minDistance = this.minimumDistance;
        let maxDistance = this.maximumDistance;
        const defaultDistance = this.defaultDistance;
        const direction = this._tmpVectors[0];
        direction.copyFrom(currentToTarget);
        let currentDistance = direction.length();
        direction.normalizeFromLength(currentDistance);
        if (this.ignoreCameraPitchAndRoll) {
            // If we don't account for pitch offset, the casted object will float up/down as the reference
            // gets closer to it because we will still be casting in the direction of the pitched offset.
            // To fix this, only modify the XZ position of the object.
            minDistance = this._length2D(direction) * minDistance;
            maxDistance = this._length2D(direction) * maxDistance;
            const currentDistance2D = this._length2D(currentToTarget);
            direction.scaleInPlace(currentDistance / currentDistance2D);
            currentDistance = currentDistance2D;
        }
        let clampedDistance = currentDistance;
        if (moveToDefault) {
            clampedDistance = defaultDistance;
        } else {
            clampedDistance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Clamp"])(currentDistance, minDistance, maxDistance);
        }
        currentToTarget.copyFrom(direction).scaleInPlace(clampedDistance);
        return currentDistance !== clampedDistance;
    }
    _applyVerticalClamp(currentToTarget) {
        if (this.verticalMaxDistance !== 0) {
            currentToTarget.y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$scalar$2e$functions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Clamp"])(currentToTarget.y, -this.verticalMaxDistance, this.verticalMaxDistance);
        }
    }
    _toOrientationQuatToRef(vector, quaternion) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].RotationYawPitchRollToRef(Math.atan2(vector.x, vector.z), Math.atan2(vector.y, Math.sqrt(vector.z * vector.z + vector.x * vector.x)), 0, quaternion);
    }
    _applyPitchOffset(invertView) {
        const forward = this._tmpVectors[0];
        const right = this._tmpVectors[1];
        forward.copyFromFloats(0, 0, this._scene.useRightHandedSystem ? -1 : 1);
        right.copyFromFloats(1, 0, 0);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].TransformNormalToRef(forward, invertView, forward);
        forward.y = 0;
        forward.normalize();
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].TransformNormalToRef(right, invertView, right);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].RotationAxisToRef(right, this.pitchOffset * Math.PI / 180, this._tmpQuaternion);
        forward.rotateByQuaternionToRef(this._tmpQuaternion, forward);
        this._toOrientationQuatToRef(forward, this._tmpQuaternion);
        this._tmpQuaternion.toRotationMatrix(this._tmpMatrix);
        // Since we already extracted position from the invert view matrix, we can
        // disregard the position part of the matrix in the copy
        invertView.copyFrom(this._tmpMatrix);
    }
    _angularClamp(invertView, currentToTarget) {
        const forward = this._tmpVectors[5];
        forward.copyFromFloats(0, 0, this._scene.useRightHandedSystem ? -1 : 1);
        const right = this._tmpVectors[6];
        right.copyFromFloats(1, 0, 0);
        // forward and right are related to camera frame of reference
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].TransformNormalToRef(forward, invertView, forward);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].TransformNormalToRef(right, invertView, right);
        // Up is global Z
        const up = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].UpReadOnly;
        const dist = currentToTarget.length();
        if (dist < __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Epsilon"]) {
            return false;
        }
        let angularClamped = false;
        const rotationQuat = this._tmpQuaternion;
        // X-axis leashing
        if (this.ignoreCameraPitchAndRoll) {
            const angle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].GetAngleBetweenVectorsOnPlane(currentToTarget, forward, right);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].RotationAxisToRef(right, angle, rotationQuat);
            currentToTarget.rotateByQuaternionToRef(rotationQuat, currentToTarget);
        } else {
            const angle = -__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].GetAngleBetweenVectorsOnPlane(currentToTarget, forward, right);
            const minMaxAngle = this.maxViewVerticalDegrees * Math.PI / 180 * 0.5;
            if (angle < -minMaxAngle) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].RotationAxisToRef(right, -angle - minMaxAngle, rotationQuat);
                currentToTarget.rotateByQuaternionToRef(rotationQuat, currentToTarget);
                angularClamped = true;
            } else if (angle > minMaxAngle) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].RotationAxisToRef(right, -angle + minMaxAngle, rotationQuat);
                currentToTarget.rotateByQuaternionToRef(rotationQuat, currentToTarget);
                angularClamped = true;
            }
        }
        // Y-axis leashing
        const angle = this._angleBetweenVectorAndPlane(currentToTarget, right) * (this._scene.useRightHandedSystem ? -1 : 1);
        const minMaxAngle = this.maxViewHorizontalDegrees * Math.PI / 180 * 0.5;
        if (angle < -minMaxAngle) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].RotationAxisToRef(up, -angle - minMaxAngle, rotationQuat);
            currentToTarget.rotateByQuaternionToRef(rotationQuat, currentToTarget);
            angularClamped = true;
        } else if (angle > minMaxAngle) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].RotationAxisToRef(up, -angle + minMaxAngle, rotationQuat);
            currentToTarget.rotateByQuaternionToRef(rotationQuat, currentToTarget);
            angularClamped = true;
        }
        return angularClamped;
    }
    _orientationClamp(currentToTarget, rotationQuaternion) {
        // Construct a rotation quat from up vector and target vector
        const toFollowed = this._tmpVectors[0];
        toFollowed.copyFrom(currentToTarget).scaleInPlace(-1).normalize();
        const up = this._tmpVectors[1];
        const right = this._tmpVectors[2];
        // We use global up vector to orient the following node (global +Y)
        up.copyFromFloats(0, 1, 0);
        // Gram-Schmidt to create an orthonormal frame
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].CrossToRef(toFollowed, up, right);
        const length = right.length();
        if (length < __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Epsilon"]) {
            return;
        }
        right.normalizeFromLength(length);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].CrossToRef(right, toFollowed, up);
        if (this.attachedNode?.getScene().useRightHandedSystem) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].FromLookDirectionRHToRef(toFollowed, up, rotationQuaternion);
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].FromLookDirectionLHToRef(toFollowed, up, rotationQuaternion);
        }
    }
    _passedOrientationDeadzone(currentToTarget, forward) {
        const leashToFollow = this._tmpVectors[5];
        leashToFollow.copyFrom(currentToTarget);
        leashToFollow.normalize();
        const angle = Math.abs(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].GetAngleBetweenVectorsOnPlane(forward, leashToFollow, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].UpReadOnly));
        return angle * 180 / Math.PI > this.orientToCameraDeadzoneDegrees;
    }
    _updateLeashing(camera) {
        if (this.attachedNode && this._enabled) {
            const oldParent = this.attachedNode.parent;
            this.attachedNode.setParent(null);
            const worldMatrix = this.attachedNode.getWorldMatrix();
            const currentToTarget = this._workingPosition;
            const rotationQuaternion = this._workingQuaternion;
            const pivot = this.attachedNode.getPivotPoint();
            const invertView = this._tmpInvertView;
            invertView.copyFrom(camera.getViewMatrix());
            invertView.invert();
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinatesToRef(pivot, worldMatrix, currentToTarget);
            const position = this._tmpPosition;
            position.copyFromFloats(0, 0, 0);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinatesToRef(position, worldMatrix, position);
            position.scaleInPlace(-1).subtractInPlace(pivot);
            currentToTarget.subtractInPlace(camera.globalPosition);
            if (this.ignoreCameraPitchAndRoll) {
                this._applyPitchOffset(invertView);
            }
            let angularClamped = false;
            const forward = this._tmpForward;
            forward.copyFromFloats(0, 0, this._scene.useRightHandedSystem ? -1 : 1);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].TransformNormalToRef(forward, invertView, forward);
            const nodeForward = this._tmpNodeForward;
            nodeForward.copyFromFloats(0, 0, this._scene.useRightHandedSystem ? -1 : 1);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].TransformNormalToRef(nodeForward, worldMatrix, nodeForward);
            if (this._recenterNextUpdate) {
                currentToTarget.copyFrom(forward).scaleInPlace(this.defaultDistance);
            } else {
                if (this.ignoreAngleClamp) {
                    const currentDistance = currentToTarget.length();
                    currentToTarget.copyFrom(forward).scaleInPlace(currentDistance);
                } else {
                    angularClamped = this._angularClamp(invertView, currentToTarget);
                }
            }
            let distanceClamped = false;
            if (!this.ignoreDistanceClamp) {
                distanceClamped = this._distanceClamp(currentToTarget, angularClamped);
                this._applyVerticalClamp(currentToTarget);
            }
            if (this.useFixedVerticalOffset) {
                currentToTarget.y = position.y - camera.globalPosition.y + this.fixedVerticalOffset;
            }
            if (angularClamped || distanceClamped || this._passedOrientationDeadzone(currentToTarget, nodeForward) || this._recenterNextUpdate) {
                this._orientationClamp(currentToTarget, rotationQuaternion);
            }
            this._workingPosition.subtractInPlace(pivot);
            this._recenterNextUpdate = false;
            this.attachedNode.setParent(oldParent);
        }
    }
    _updateTransformToGoal(elapsed) {
        if (!this.attachedNode || !this.followedCamera || !this._enabled) {
            return;
        }
        if (!this.attachedNode.rotationQuaternion) {
            this.attachedNode.rotationQuaternion = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].Identity();
        }
        const oldParent = this.attachedNode.parent;
        this.attachedNode.setParent(null);
        if (!this.interpolatePose) {
            this.attachedNode.position.copyFrom(this.followedCamera.globalPosition).addInPlace(this._workingPosition);
            this.attachedNode.rotationQuaternion.copyFrom(this._workingQuaternion);
            return;
        }
        // position
        const currentDirection = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
        currentDirection.copyFrom(this.attachedNode.position).subtractInPlace(this.followedCamera.globalPosition);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].SmoothToRef(currentDirection, this._workingPosition, elapsed, this.lerpTime, currentDirection);
        currentDirection.addInPlace(this.followedCamera.globalPosition);
        this.attachedNode.position.copyFrom(currentDirection);
        // rotation
        const currentRotation = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"]();
        currentRotation.copyFrom(this.attachedNode.rotationQuaternion);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].SmoothToRef(currentRotation, this._workingQuaternion, elapsed, this.lerpTime, this.attachedNode.rotationQuaternion);
        this.attachedNode.setParent(oldParent);
    }
    _addObservables() {
        this._lastTick = Date.now();
        this._onBeforeRender = this._scene.onBeforeRenderObservable.add(()=>{
            if (!this.followedCamera) {
                return;
            }
            const tick = Date.now();
            this._updateLeashing(this.followedCamera);
            this._updateTransformToGoal(tick - this._lastTick);
            this._lastTick = tick;
        });
    }
    _removeObservables() {
        if (this._onBeforeRender) {
            this._scene.onBeforeRenderObservable.remove(this._onBeforeRender);
        }
    }
} //# sourceMappingURL=followBehavior.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Behaviors/Meshes/handConstraintBehavior.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HandConstraintBehavior",
    ()=>HandConstraintBehavior,
    "HandConstraintOrientation",
    ()=>HandConstraintOrientation,
    "HandConstraintVisibility",
    ()=>HandConstraintVisibility,
    "HandConstraintZone",
    ()=>HandConstraintZone
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRFeaturesManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/XR/webXRFeaturesManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/tools.js [app-client] (ecmascript)");
;
;
;
var HandConstraintZone;
(function(HandConstraintZone) {
    /**
     * Above finger tips
     */ HandConstraintZone[HandConstraintZone["ABOVE_FINGER_TIPS"] = 0] = "ABOVE_FINGER_TIPS";
    /**
     * Next to the thumb
     */ HandConstraintZone[HandConstraintZone["RADIAL_SIDE"] = 1] = "RADIAL_SIDE";
    /**
     * Next to the pinky finger
     */ HandConstraintZone[HandConstraintZone["ULNAR_SIDE"] = 2] = "ULNAR_SIDE";
    /**
     * Below the wrist
     */ HandConstraintZone[HandConstraintZone["BELOW_WRIST"] = 3] = "BELOW_WRIST";
})(HandConstraintZone || (HandConstraintZone = {}));
var HandConstraintOrientation;
(function(HandConstraintOrientation) {
    /**
     * Orientation is towards the camera
     */ HandConstraintOrientation[HandConstraintOrientation["LOOK_AT_CAMERA"] = 0] = "LOOK_AT_CAMERA";
    /**
     * Orientation is determined by the rotation of the palm
     */ HandConstraintOrientation[HandConstraintOrientation["HAND_ROTATION"] = 1] = "HAND_ROTATION";
})(HandConstraintOrientation || (HandConstraintOrientation = {}));
var HandConstraintVisibility;
(function(HandConstraintVisibility) {
    /**
     * Constraint is always visible
     */ HandConstraintVisibility[HandConstraintVisibility["ALWAYS_VISIBLE"] = 0] = "ALWAYS_VISIBLE";
    /**
     * Constraint is only visible when the palm is up
     */ HandConstraintVisibility[HandConstraintVisibility["PALM_UP"] = 1] = "PALM_UP";
    /**
     * Constraint is only visible when the user is looking at the constraint.
     * Uses XR Eye Tracking if enabled/available, otherwise uses camera direction
     */ HandConstraintVisibility[HandConstraintVisibility["GAZE_FOCUS"] = 2] = "GAZE_FOCUS";
    /**
     * Constraint is only visible when the palm is up and the user is looking at it
     */ HandConstraintVisibility[HandConstraintVisibility["PALM_AND_GAZE"] = 3] = "PALM_AND_GAZE";
})(HandConstraintVisibility || (HandConstraintVisibility = {}));
class HandConstraintBehavior {
    /**
     * Attached node of this behavior
     */ get attachedNode() {
        return this._node;
    }
    /**
     * Builds a hand constraint behavior
     */ constructor(){
        this._sceneRenderObserver = null;
        this._zoneAxis = {};
        /**
         * Sets the HandConstraintVisibility level for the hand constraint
         */ this.handConstraintVisibility = 3 /* HandConstraintVisibility.PALM_AND_GAZE */ ;
        /**
         * A number from 0.0 to 1.0, marking how restricted the direction the palm faces is for the attached node to be enabled.
         * A 1 means the palm must be directly facing the user before the node is enabled, a 0 means it is always enabled.
         * Used with HandConstraintVisibility.PALM_UP
         */ this.palmUpStrictness = 0.95;
        /**
         * The radius in meters around the center of the hand that the user must gaze inside for the attached node to be enabled and appear.
         * Used with HandConstraintVisibility.GAZE_FOCUS
         */ this.gazeProximityRadius = 0.15;
        /**
         * Offset distance from the hand in meters
         */ this.targetOffset = 0.1;
        /**
         * Where to place the node regarding the center of the hand.
         */ this.targetZone = 2 /* HandConstraintZone.ULNAR_SIDE */ ;
        /**
         * Orientation mode of the 4 zones around the hand
         */ this.zoneOrientationMode = 1 /* HandConstraintOrientation.HAND_ROTATION */ ;
        /**
         * Orientation mode of the node attached to this behavior
         */ this.nodeOrientationMode = 1 /* HandConstraintOrientation.HAND_ROTATION */ ;
        /**
         * Set the hand this behavior should follow. If set to "none", it will follow any visible hand (prioritising the left one).
         */ this.handedness = "none";
        /**
         * Rate of interpolation of position and rotation of the attached node.
         * Higher values will give a slower interpolation.
         */ this.lerpTime = 100;
        this._node = null;
        // For a right hand
        this._zoneAxis[0 /* HandConstraintZone.ABOVE_FINGER_TIPS */ ] = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, 1, 0);
        this._zoneAxis[1 /* HandConstraintZone.RADIAL_SIDE */ ] = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](-1, 0, 0);
        this._zoneAxis[2 /* HandConstraintZone.ULNAR_SIDE */ ] = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](1, 0, 0);
        this._zoneAxis[3 /* HandConstraintZone.BELOW_WRIST */ ] = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](0, -1, 0);
    }
    /** gets or sets behavior's name */ get name() {
        return "HandConstraint";
    }
    /** Enable the behavior */ enable() {
        this._node.setEnabled(true);
    }
    /** Disable the behavior */ disable() {
        this._node.setEnabled(false);
    }
    _getHandPose() {
        if (!this._handTracking) {
            return null;
        }
        // Retrieve any available hand, starting by the left
        let hand;
        if (this.handedness === "none") {
            hand = this._handTracking.getHandByHandedness("left") || this._handTracking.getHandByHandedness("right");
        } else {
            hand = this._handTracking.getHandByHandedness(this.handedness);
        }
        if (hand) {
            const pinkyMetacarpal = hand.getJointMesh("pinky-finger-metacarpal" /* WebXRHandJoint.PINKY_FINGER_METACARPAL */ );
            const middleMetacarpal = hand.getJointMesh("middle-finger-metacarpal" /* WebXRHandJoint.MIDDLE_FINGER_METACARPAL */ );
            const wrist = hand.getJointMesh("wrist" /* WebXRHandJoint.WRIST */ );
            if (wrist && middleMetacarpal && pinkyMetacarpal) {
                const handPose = {
                    position: middleMetacarpal.absolutePosition,
                    quaternion: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"](),
                    id: hand.xrController.uniqueId
                };
                // palm forward
                const up = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0];
                const forward = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[1];
                const left = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[2];
                up.copyFrom(middleMetacarpal.absolutePosition).subtractInPlace(wrist.absolutePosition).normalize();
                forward.copyFrom(pinkyMetacarpal.absolutePosition).subtractInPlace(middleMetacarpal.absolutePosition).normalize();
                // Create vectors for a rotation quaternion, where forward points out from the palm
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].CrossToRef(up, forward, forward);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].CrossToRef(forward, up, left);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].FromLookDirectionLHToRef(forward, up, handPose.quaternion);
                return handPose;
            }
        }
        return null;
    }
    /**
     * Initializes the hand constraint behavior
     */ init() {}
    /**
     * Attaches the hand constraint to a `TransformNode`
     * @param node defines the node to attach the behavior to
     */ attach(node) {
        this._node = node;
        this._scene = node.getScene();
        if (!this._node.rotationQuaternion) {
            this._node.rotationQuaternion = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].RotationYawPitchRoll(this._node.rotation.y, this._node.rotation.x, this._node.rotation.z);
        }
        let lastTick = Date.now();
        this._sceneRenderObserver = this._scene.onBeforeRenderObservable.add(()=>{
            const pose = this._getHandPose();
            this._node.reservedDataStore = this._node.reservedDataStore || {};
            this._node.reservedDataStore.nearInteraction = this._node.reservedDataStore.nearInteraction || {};
            this._node.reservedDataStore.nearInteraction.excludedControllerId = null;
            if (pose) {
                const zoneOffset = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0];
                const camera = this._scene.activeCamera;
                zoneOffset.copyFrom(this._zoneAxis[this.targetZone]);
                const cameraLookAtQuaternion = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Quaternion[0];
                if (camera && (this.zoneOrientationMode === 0 /* HandConstraintOrientation.LOOK_AT_CAMERA */  || this.nodeOrientationMode === 0 /* HandConstraintOrientation.LOOK_AT_CAMERA */ )) {
                    const toCamera = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[1];
                    toCamera.copyFrom(camera.position).subtractInPlace(pose.position).normalize();
                    if (this._scene.useRightHandedSystem) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].FromLookDirectionRHToRef(toCamera, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].UpReadOnly, cameraLookAtQuaternion);
                    } else {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].FromLookDirectionLHToRef(toCamera, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].UpReadOnly, cameraLookAtQuaternion);
                    }
                }
                if (this.zoneOrientationMode === 1 /* HandConstraintOrientation.HAND_ROTATION */ ) {
                    pose.quaternion.toRotationMatrix(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[0]);
                } else {
                    cameraLookAtQuaternion.toRotationMatrix(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[0]);
                }
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].TransformNormalToRef(zoneOffset, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[0], zoneOffset);
                zoneOffset.scaleInPlace(this.targetOffset);
                const targetPosition = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[2];
                const targetRotation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Quaternion[1];
                targetPosition.copyFrom(pose.position).addInPlace(zoneOffset);
                if (this.nodeOrientationMode === 1 /* HandConstraintOrientation.HAND_ROTATION */ ) {
                    targetRotation.copyFrom(pose.quaternion);
                } else {
                    targetRotation.copyFrom(cameraLookAtQuaternion);
                }
                const elapsed = Date.now() - lastTick;
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].SmoothToRef(this._node.position, targetPosition, elapsed, this.lerpTime, this._node.position);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].SmoothToRef(this._node.rotationQuaternion, targetRotation, elapsed, this.lerpTime, this._node.rotationQuaternion);
                this._node.reservedDataStore.nearInteraction.excludedControllerId = pose.id;
            }
            this._setVisibility(pose);
            lastTick = Date.now();
        });
    }
    _setVisibility(pose) {
        let palmVisible = true;
        let gazeVisible = true;
        const camera = this._scene.activeCamera;
        if (camera) {
            const cameraForward = camera.getForwardRay();
            if (this.handConstraintVisibility === 2 /* HandConstraintVisibility.GAZE_FOCUS */  || this.handConstraintVisibility === 3 /* HandConstraintVisibility.PALM_AND_GAZE */ ) {
                gazeVisible = false;
                let gaze;
                if (this._eyeTracking) {
                    gaze = this._eyeTracking.getEyeGaze();
                }
                gaze = gaze || cameraForward;
                const gazeToBehavior = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0];
                if (pose) {
                    pose.position.subtractToRef(gaze.origin, gazeToBehavior);
                } else {
                    this._node.getAbsolutePosition().subtractToRef(gaze.origin, gazeToBehavior);
                }
                const projectedDistance = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Dot(gazeToBehavior, gaze.direction);
                const projectedSquared = projectedDistance * projectedDistance;
                if (projectedDistance > 0) {
                    const radiusSquared = gazeToBehavior.lengthSquared() - projectedSquared;
                    if (radiusSquared < this.gazeProximityRadius * this.gazeProximityRadius) {
                        gazeVisible = true;
                    }
                }
            }
            if (this.handConstraintVisibility === 1 /* HandConstraintVisibility.PALM_UP */  || this.handConstraintVisibility === 3 /* HandConstraintVisibility.PALM_AND_GAZE */ ) {
                palmVisible = false;
                if (pose) {
                    const palmDirection = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0];
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].LeftHandedForwardReadOnly.rotateByQuaternionToRef(pose.quaternion, palmDirection);
                    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Dot(palmDirection, cameraForward.direction) > this.palmUpStrictness * 2 - 1) {
                        palmVisible = true;
                    }
                }
            }
        }
        this._node.setEnabled(palmVisible && gazeVisible);
    }
    /**
     * Detaches the behavior from the `TransformNode`
     */ detach() {
        this._scene.onBeforeRenderObservable.remove(this._sceneRenderObserver);
        this._node = null;
    }
    /**
     * Links the behavior to the XR experience in which to retrieve hand transform information.
     * @param xr xr experience
     */ linkToXRExperience(xr) {
        const featuresManager = xr.featuresManager ? xr.featuresManager : xr;
        if (!featuresManager) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tools"].Error("XR features manager must be available or provided directly for the Hand Menu to work");
        } else {
            try {
                this._eyeTracking = featuresManager.getEnabledFeature(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRFeaturesManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebXRFeatureName"].EYE_TRACKING);
            } catch  {}
            try {
                this._handTracking = featuresManager.getEnabledFeature(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$XR$2f$webXRFeaturesManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebXRFeatureName"].HAND_TRACKING);
            } catch  {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tools"].Error("Hand tracking must be enabled for the Hand Menu to work");
            }
        }
    }
} //# sourceMappingURL=handConstraintBehavior.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Behaviors/Meshes/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Behaviors$2f$Meshes$2f$attachToBoxBehavior$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Behaviors/Meshes/attachToBoxBehavior.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Behaviors$2f$Meshes$2f$fadeInOutBehavior$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Behaviors/Meshes/fadeInOutBehavior.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Behaviors$2f$Meshes$2f$multiPointerScaleBehavior$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Behaviors/Meshes/multiPointerScaleBehavior.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Behaviors$2f$Meshes$2f$pointerDragBehavior$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Behaviors/Meshes/pointerDragBehavior.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Behaviors$2f$Meshes$2f$pointerDragEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Behaviors/Meshes/pointerDragEvents.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Behaviors$2f$Meshes$2f$sixDofDragBehavior$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Behaviors/Meshes/sixDofDragBehavior.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Behaviors$2f$Meshes$2f$surfaceMagnetismBehavior$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Behaviors/Meshes/surfaceMagnetismBehavior.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Behaviors$2f$Meshes$2f$baseSixDofDragBehavior$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Behaviors/Meshes/baseSixDofDragBehavior.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Behaviors$2f$Meshes$2f$followBehavior$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Behaviors/Meshes/followBehavior.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Behaviors$2f$Meshes$2f$handConstraintBehavior$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Behaviors/Meshes/handConstraintBehavior.js [app-client] (ecmascript)"); //# sourceMappingURL=index.js.map
;
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
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Behaviors/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/no-restricted-imports */ __turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Behaviors$2f$behavior$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Behaviors/behavior.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Behaviors$2f$Cameras$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Behaviors/Cameras/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Behaviors$2f$Meshes$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Behaviors/Meshes/index.js [app-client] (ecmascript) <locals>"); //# sourceMappingURL=index.js.map
;
;
;
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Behaviors/Cameras/interpolatingBehavior.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InterpolatingBehavior",
    ()=>InterpolatingBehavior
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$easing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Animations/easing.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Animations/animation.js [app-client] (ecmascript)");
;
;
class InterpolatingBehavior {
    /**
     * Gets the name of the behavior.
     */ get name() {
        return "Interpolating";
    }
    /**
     * Attached node of this behavior
     */ get attachedNode() {
        return this._attachedCamera;
    }
    /**
     * Initializes the behavior
     */ constructor(){
        /**
         * The easing function to use for interpolation
         */ this.easingFunction = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$easing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CubicEase"]();
        /**
         * The easing mode (default is EASINGMODE_EASEINOUT)
         */ this.easingMode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$easing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EasingFunction"].EASINGMODE_EASEINOUT;
        /**
         * Duration of the animation in milliseconds
         */ this.transitionDuration = 450;
        this._attachedCamera = null;
        this._animatables = new Map();
        this.easingFunction.setEasingMode(this.easingMode);
    }
    /**
     * Initializes the behavior
     */ init() {
    // Nothing to do on init
    }
    /**
     * Attaches the behavior to a camera
     * @param camera The camera to attach to
     */ attach(camera) {
        this._attachedCamera = camera;
    }
    /**
     * Detaches the behavior from the camera
     */ detach() {
        if (!this._attachedCamera) {
            return;
        }
        this.stopAllAnimations();
        this._attachedCamera = null;
    }
    get isInterpolating() {
        return this._animatables.size > 0;
    }
    /**
     * Stops and removes all animations
     */ stopAllAnimations() {
        if (this._attachedCamera) {
            this._animatables.forEach((animatable)=>animatable.stop());
        }
        this._animatables.clear();
        this._promiseResolve?.();
        this._promiseResolve = undefined;
    }
    updateProperties(properties) {
        properties.forEach((value, key)=>{
            if (value !== undefined) {
                const animatable = this._animatables.get(String(key));
                animatable && (animatable.target = value);
            }
        });
    }
    async animatePropertiesAsync(properties, transitionDuration = this.transitionDuration, easingFn = this.easingFunction, updateAnimation) {
        const promise = new Promise((resolve)=>{
            this.stopAllAnimations();
            this._promiseResolve = resolve;
            if (!this._attachedCamera) {
                this._promiseResolve = undefined;
                return resolve();
            }
            const camera = this._attachedCamera;
            const scene = camera.getScene();
            const checkClear = (propertyName)=>{
                // Remove the associated animation from camera once the transition to target is complete so that property animations don't accumulate
                for(let i = camera.animations.length - 1; i >= 0; --i){
                    if (camera.animations[i].name === propertyName + "Animation") {
                        camera.animations.splice(i, 1);
                    }
                }
                this._animatables.delete(propertyName);
                if (this._animatables.size === 0) {
                    this._promiseResolve = undefined;
                    resolve();
                }
            };
            properties.forEach((value, key)=>{
                if (value !== undefined && camera[key] !== value) {
                    const propertyName = String(key);
                    const animation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Animation"].CreateAnimation(propertyName, GetAnimationType(value), 60, easingFn);
                    // Optionally allow caller to further customize the animation
                    updateAnimation?.(propertyName, animation);
                    // Pass false for stopCurrent so that we can interpolate multiple properties at once
                    const animatable = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Animation"].TransitionTo(propertyName, value, camera, scene, 60, animation, transitionDuration, ()=>checkClear(propertyName), false);
                    if (animatable) {
                        this._animatables.set(propertyName, animatable);
                    }
                }
            });
        });
        return await promise;
    }
}
// Structural type-guards (no instanceof)
function IsQuaternionLike(v) {
    return v != null && typeof v.x === "number" && typeof v.y === "number" && typeof v.z === "number" && typeof v.w === "number";
}
function IsMatrixLike(v) {
    return v != null && (Array.isArray(v.m) || typeof v.m === "object");
}
function IsVector3Like(v) {
    return v != null && typeof v.x === "number" && typeof v.y === "number" && typeof v.z === "number";
}
function IsVector2Like(v) {
    return v != null && typeof v.x === "number" && typeof v.y === "number";
}
function IsColor3Like(v) {
    return v != null && typeof v.r === "number" && typeof v.g === "number" && typeof v.b === "number";
}
function IsColor4Like(v) {
    return v != null && typeof v.r === "number" && typeof v.g === "number" && typeof v.b === "number" && typeof v.a === "number";
}
function IsSizeLike(v) {
    return v != null && typeof v.width === "number" && typeof v.height === "number";
}
const GetAnimationType = (value)=>{
    if (IsQuaternionLike(value)) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Animation"].ANIMATIONTYPE_QUATERNION;
    }
    if (IsMatrixLike(value)) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Animation"].ANIMATIONTYPE_MATRIX;
    }
    if (IsVector3Like(value)) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Animation"].ANIMATIONTYPE_VECTOR3;
    }
    if (IsVector2Like(value)) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Animation"].ANIMATIONTYPE_VECTOR2;
    }
    if (IsColor3Like(value)) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Animation"].ANIMATIONTYPE_COLOR3;
    }
    if (IsColor4Like(value)) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Animation"].ANIMATIONTYPE_COLOR4;
    }
    if (IsSizeLike(value)) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Animation"].ANIMATIONTYPE_SIZE;
    }
    // Fallback to float for numbers and unknown shapes
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Animations$2f$animation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Animation"].ANIMATIONTYPE_FLOAT;
}; //# sourceMappingURL=interpolatingBehavior.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Behaviors/Cameras/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AutoRotationBehavior",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Behaviors$2f$Cameras$2f$autoRotationBehavior$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AutoRotationBehavior"],
    "BouncingBehavior",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Behaviors$2f$Cameras$2f$bouncingBehavior$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BouncingBehavior"],
    "FramingBehavior",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Behaviors$2f$Cameras$2f$framingBehavior$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FramingBehavior"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Behaviors$2f$Cameras$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Behaviors/Cameras/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Behaviors$2f$Cameras$2f$autoRotationBehavior$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Behaviors/Cameras/autoRotationBehavior.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Behaviors$2f$Cameras$2f$bouncingBehavior$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Behaviors/Cameras/bouncingBehavior.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Behaviors$2f$Cameras$2f$framingBehavior$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Behaviors/Cameras/framingBehavior.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Behaviors/Meshes/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AttachToBoxBehavior",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Behaviors$2f$Meshes$2f$attachToBoxBehavior$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AttachToBoxBehavior"],
    "BaseSixDofDragBehavior",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Behaviors$2f$Meshes$2f$baseSixDofDragBehavior$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseSixDofDragBehavior"],
    "FadeInOutBehavior",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Behaviors$2f$Meshes$2f$fadeInOutBehavior$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FadeInOutBehavior"],
    "FollowBehavior",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Behaviors$2f$Meshes$2f$followBehavior$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FollowBehavior"],
    "HandConstraintBehavior",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Behaviors$2f$Meshes$2f$handConstraintBehavior$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HandConstraintBehavior"],
    "HandConstraintOrientation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Behaviors$2f$Meshes$2f$handConstraintBehavior$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HandConstraintOrientation"],
    "HandConstraintVisibility",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Behaviors$2f$Meshes$2f$handConstraintBehavior$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HandConstraintVisibility"],
    "HandConstraintZone",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Behaviors$2f$Meshes$2f$handConstraintBehavior$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HandConstraintZone"],
    "MultiPointerScaleBehavior",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Behaviors$2f$Meshes$2f$multiPointerScaleBehavior$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MultiPointerScaleBehavior"],
    "PointerDragBehavior",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Behaviors$2f$Meshes$2f$pointerDragBehavior$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointerDragBehavior"],
    "SixDofDragBehavior",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Behaviors$2f$Meshes$2f$sixDofDragBehavior$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SixDofDragBehavior"],
    "SurfaceMagnetismBehavior",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Behaviors$2f$Meshes$2f$surfaceMagnetismBehavior$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SurfaceMagnetismBehavior"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Behaviors$2f$Meshes$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Behaviors/Meshes/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Behaviors$2f$Meshes$2f$attachToBoxBehavior$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Behaviors/Meshes/attachToBoxBehavior.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Behaviors$2f$Meshes$2f$fadeInOutBehavior$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Behaviors/Meshes/fadeInOutBehavior.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Behaviors$2f$Meshes$2f$multiPointerScaleBehavior$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Behaviors/Meshes/multiPointerScaleBehavior.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Behaviors$2f$Meshes$2f$pointerDragBehavior$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Behaviors/Meshes/pointerDragBehavior.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Behaviors$2f$Meshes$2f$pointerDragEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Behaviors/Meshes/pointerDragEvents.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Behaviors$2f$Meshes$2f$sixDofDragBehavior$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Behaviors/Meshes/sixDofDragBehavior.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Behaviors$2f$Meshes$2f$surfaceMagnetismBehavior$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Behaviors/Meshes/surfaceMagnetismBehavior.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Behaviors$2f$Meshes$2f$baseSixDofDragBehavior$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Behaviors/Meshes/baseSixDofDragBehavior.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Behaviors$2f$Meshes$2f$followBehavior$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Behaviors/Meshes/followBehavior.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Behaviors$2f$Meshes$2f$handConstraintBehavior$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Behaviors/Meshes/handConstraintBehavior.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Behaviors/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AttachToBoxBehavior",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Behaviors$2f$Meshes$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AttachToBoxBehavior"],
    "AutoRotationBehavior",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Behaviors$2f$Cameras$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AutoRotationBehavior"],
    "BaseSixDofDragBehavior",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Behaviors$2f$Meshes$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseSixDofDragBehavior"],
    "BouncingBehavior",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Behaviors$2f$Cameras$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BouncingBehavior"],
    "FadeInOutBehavior",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Behaviors$2f$Meshes$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FadeInOutBehavior"],
    "FollowBehavior",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Behaviors$2f$Meshes$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FollowBehavior"],
    "FramingBehavior",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Behaviors$2f$Cameras$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FramingBehavior"],
    "HandConstraintBehavior",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Behaviors$2f$Meshes$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HandConstraintBehavior"],
    "HandConstraintOrientation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Behaviors$2f$Meshes$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HandConstraintOrientation"],
    "HandConstraintVisibility",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Behaviors$2f$Meshes$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HandConstraintVisibility"],
    "HandConstraintZone",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Behaviors$2f$Meshes$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HandConstraintZone"],
    "MultiPointerScaleBehavior",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Behaviors$2f$Meshes$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MultiPointerScaleBehavior"],
    "PointerDragBehavior",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Behaviors$2f$Meshes$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointerDragBehavior"],
    "SixDofDragBehavior",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Behaviors$2f$Meshes$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SixDofDragBehavior"],
    "SurfaceMagnetismBehavior",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Behaviors$2f$Meshes$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SurfaceMagnetismBehavior"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Behaviors$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Behaviors/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Behaviors$2f$behavior$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Behaviors/behavior.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Behaviors$2f$Cameras$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Behaviors/Cameras/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Behaviors$2f$Meshes$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Behaviors/Meshes/index.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=dcdbf_%40babylonjs_core_Behaviors_3b635798._.js.map