module.exports = [
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Sprites/thinSprite.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * ThinSprite Class used to represent a thin sprite
 * This is the base class for sprites but can also directly be used with ThinEngine
 * @see https://doc.babylonjs.com/features/featuresDeepDive/sprites
 */ __turbopack_context__.s([
    "ThinSprite",
    ()=>ThinSprite
]);
class ThinSprite {
    /**
     * Returns a boolean indicating if the animation is started
     */ get animationStarted() {
        return this._animationStarted;
    }
    /** Gets the initial key for the animation (setting it will restart the animation)  */ get fromIndex() {
        return this._fromIndex;
    }
    /** Gets or sets the end key for the animation (setting it will restart the animation)  */ get toIndex() {
        return this._toIndex;
    }
    /** Gets or sets a boolean indicating if the animation is looping (setting it will restart the animation)  */ get loopAnimation() {
        return this._loopAnimation;
    }
    /** Gets or sets the delay between cell changes (setting it will restart the animation)  */ get delay() {
        return Math.max(this._delay, 1);
    }
    /**
     * Creates a new Thin Sprite
     */ constructor(){
        /** Gets or sets the width */ this.width = 1.0;
        /** Gets or sets the height */ this.height = 1.0;
        /** Gets or sets rotation angle */ this.angle = 0;
        /** Gets or sets a boolean indicating if UV coordinates should be inverted in U axis */ this.invertU = false;
        /** Gets or sets a boolean indicating if UV coordinates should be inverted in B axis */ this.invertV = false;
        /** Gets or sets a boolean indicating if the sprite is visible (renderable). Default is true */ this.isVisible = true;
        this._animationStarted = false;
        this._loopAnimation = false;
        this._fromIndex = 0;
        this._toIndex = 0;
        this._delay = 0;
        this._direction = 1;
        this._time = 0;
        this._onBaseAnimationEnd = null;
        this.position = {
            x: 1.0,
            y: 1.0,
            z: 1.0
        };
        this.color = {
            r: 1.0,
            g: 1.0,
            b: 1.0,
            a: 1.0
        };
    }
    /**
     * Starts an animation
     * @param from defines the initial key
     * @param to defines the end key
     * @param loop defines if the animation must loop
     * @param delay defines the start delay (in ms)
     * @param onAnimationEnd defines a callback for when the animation ends
     */ playAnimation(from, to, loop, delay, onAnimationEnd) {
        this._fromIndex = from;
        this._toIndex = to;
        this._loopAnimation = loop;
        this._delay = delay || 1;
        this._animationStarted = true;
        this._onBaseAnimationEnd = onAnimationEnd;
        if (from < to) {
            this._direction = 1;
        } else {
            this._direction = -1;
            this._toIndex = from;
            this._fromIndex = to;
        }
        this.cellIndex = from;
        this._time = 0;
    }
    /** Stops current animation (if any) */ stopAnimation() {
        this._animationStarted = false;
    }
    /**
     * @internal
     */ _animate(deltaTime) {
        if (!this._animationStarted) {
            return;
        }
        this._time += deltaTime;
        if (this._time > this._delay) {
            this._time = this._time % this._delay;
            this.cellIndex += this._direction;
            if (this._direction > 0 && this.cellIndex > this._toIndex || this._direction < 0 && this.cellIndex < this._fromIndex) {
                if (this._loopAnimation) {
                    this.cellIndex = this._direction > 0 ? this._fromIndex : this._toIndex;
                } else {
                    this.cellIndex = this._toIndex;
                    this._animationStarted = false;
                    if (this._onBaseAnimationEnd) {
                        this._onBaseAnimationEnd();
                    }
                }
            }
        }
    }
} //# sourceMappingURL=thinSprite.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Sprites/sprite.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sprite",
    ()=>Sprite
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.color.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Sprites$2f$thinSprite$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Sprites/thinSprite.js [app-ssr] (ecmascript)");
;
;
;
;
class Sprite extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Sprites$2f$thinSprite$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ThinSprite"] {
    /**
     * Gets or sets the sprite size
     */ get size() {
        return this.width;
    }
    set size(value) {
        this.width = value;
        this.height = value;
    }
    /**
     * Gets the manager of this sprite
     */ get manager() {
        return this._manager;
    }
    /**
     * Creates a new Sprite
     * @param name defines the name
     * @param manager defines the manager
     */ constructor(/** defines the name */ name, manager){
        super();
        this.name = name;
        /** Gets the list of attached animations */ this.animations = new Array();
        /** Gets or sets a boolean indicating if the sprite can be picked */ this.isPickable = false;
        /** Gets or sets a boolean indicating that sprite texture alpha will be used for precise picking (false by default) */ this.useAlphaForPicking = false;
        /**
         * An event triggered when the control has been disposed
         */ this.onDisposeObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        this._onAnimationEnd = null;
        this._endAnimation = ()=>{
            if (this._onAnimationEnd) {
                this._onAnimationEnd();
            }
            if (this.disposeWhenFinishedAnimating) {
                this.dispose();
            }
        };
        this.color = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color4"](1.0, 1.0, 1.0, 1.0);
        this.position = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        this._manager = manager;
        this._manager.sprites.push(this);
        this.uniqueId = this._manager.scene.getUniqueId();
    }
    /**
     * Returns the string "Sprite"
     * @returns "Sprite"
     */ getClassName() {
        return "Sprite";
    }
    /** Gets or sets the initial key for the animation (setting it will restart the animation)  */ get fromIndex() {
        return this._fromIndex;
    }
    set fromIndex(value) {
        this.playAnimation(value, this._toIndex, this._loopAnimation, this._delay, this._onAnimationEnd);
    }
    /** Gets or sets the end key for the animation (setting it will restart the animation)  */ get toIndex() {
        return this._toIndex;
    }
    set toIndex(value) {
        this.playAnimation(this._fromIndex, value, this._loopAnimation, this._delay, this._onAnimationEnd);
    }
    /** Gets or sets a boolean indicating if the animation is looping (setting it will restart the animation)  */ get loopAnimation() {
        return this._loopAnimation;
    }
    set loopAnimation(value) {
        this.playAnimation(this._fromIndex, this._toIndex, value, this._delay, this._onAnimationEnd);
    }
    /** Gets or sets the delay between cell changes (setting it will restart the animation)  */ get delay() {
        return Math.max(this._delay, 1);
    }
    set delay(value) {
        this.playAnimation(this._fromIndex, this._toIndex, this._loopAnimation, value, this._onAnimationEnd);
    }
    /**
     * Starts an animation
     * @param from defines the initial key
     * @param to defines the end key
     * @param loop defines if the animation must loop
     * @param delay defines the start delay (in ms)
     * @param onAnimationEnd defines a callback to call when animation ends
     */ playAnimation(from, to, loop, delay, onAnimationEnd = null) {
        this._onAnimationEnd = onAnimationEnd;
        super.playAnimation(from, to, loop, delay, this._endAnimation);
    }
    /** Release associated resources */ dispose() {
        for(let i = 0; i < this._manager.sprites.length; i++){
            if (this._manager.sprites[i] == this) {
                this._manager.sprites.splice(i, 1);
            }
        }
        // Callback
        this.onDisposeObservable.notifyObservers(this);
        this.onDisposeObservable.clear();
    }
    /**
     * Serializes the sprite to a JSON object
     * @returns the JSON object
     */ serialize() {
        const serializationObject = {};
        serializationObject.name = this.name;
        serializationObject.position = this.position.asArray();
        serializationObject.color = this.color.asArray();
        serializationObject.width = this.width;
        serializationObject.height = this.height;
        serializationObject.angle = this.angle;
        serializationObject.cellIndex = this.cellIndex;
        serializationObject.cellRef = this.cellRef;
        serializationObject.invertU = this.invertU;
        serializationObject.invertV = this.invertV;
        serializationObject.disposeWhenFinishedAnimating = this.disposeWhenFinishedAnimating;
        serializationObject.isPickable = this.isPickable;
        serializationObject.isVisible = this.isVisible;
        serializationObject.useAlphaForPicking = this.useAlphaForPicking;
        serializationObject.animationStarted = this.animationStarted;
        serializationObject.fromIndex = this.fromIndex;
        serializationObject.toIndex = this.toIndex;
        serializationObject.loopAnimation = this.loopAnimation;
        serializationObject.delay = this.delay;
        return serializationObject;
    }
    /**
     * Parses a JSON object to create a new sprite
     * @param parsedSprite The JSON object to parse
     * @param manager defines the hosting manager
     * @returns the new sprite
     */ static Parse(parsedSprite, manager) {
        const sprite = new Sprite(parsedSprite.name, manager);
        sprite.position = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].FromArray(parsedSprite.position);
        sprite.color = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$color$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color4"].FromArray(parsedSprite.color);
        sprite.width = parsedSprite.width;
        sprite.height = parsedSprite.height;
        sprite.angle = parsedSprite.angle;
        sprite.cellIndex = parsedSprite.cellIndex;
        sprite.cellRef = parsedSprite.cellRef;
        sprite.invertU = parsedSprite.invertU;
        sprite.invertV = parsedSprite.invertV;
        sprite.disposeWhenFinishedAnimating = parsedSprite.disposeWhenFinishedAnimating;
        sprite.isPickable = parsedSprite.isPickable;
        sprite.isVisible = parsedSprite.isVisible;
        sprite.useAlphaForPicking = parsedSprite.useAlphaForPicking;
        sprite._fromIndex = parsedSprite.fromIndex;
        sprite._toIndex = parsedSprite.toIndex;
        sprite._loopAnimation = parsedSprite.loopAnimation;
        sprite._delay = parsedSprite.delay;
        if (parsedSprite.animationStarted) {
            sprite.playAnimation(sprite.fromIndex, sprite.toIndex, sprite.loopAnimation, sprite.delay);
        }
        return sprite;
    }
} //# sourceMappingURL=sprite.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Sprites/spriteSceneComponent.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SpriteSceneComponent",
    ()=>SpriteSceneComponent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$scene$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/scene.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$ray$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Culling/ray.core.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Collisions$2f$pickingInfo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Collisions/pickingInfo.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$sceneComponent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/sceneComponent.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Actions$2f$actionEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Actions/actionEvent.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
Object.defineProperty(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$scene$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Scene"].prototype, "onNewSpriteManagerAddedObservable", {
    get: function() {
        if (!this.isDisposed && !this._onNewSpriteManagerAddedObservable) {
            const onNewSpriteManagerAddedObservable = this._onNewSpriteManagerAddedObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
            this.onDisposeObservable.addOnce(()=>onNewSpriteManagerAddedObservable.clear());
        }
        return this._onNewSpriteManagerAddedObservable;
    },
    enumerable: true,
    configurable: true
});
Object.defineProperty(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$scene$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Scene"].prototype, "onSpriteManagerRemovedObservable", {
    get: function() {
        if (!this.isDisposed && !this._onSpriteManagerRemovedObservable) {
            const onSpriteManagerRemovedObservable = this._onSpriteManagerRemovedObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
            this.onDisposeObservable.addOnce(()=>onSpriteManagerRemovedObservable.clear());
        }
        return this._onSpriteManagerRemovedObservable;
    },
    enumerable: true,
    configurable: true
});
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$scene$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Scene"].prototype._internalPickSprites = function(ray, predicate, fastCheck, camera) {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Collisions$2f$pickingInfo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PickingInfo"]) {
        return null;
    }
    let pickingInfo = null;
    if (!camera) {
        if (!this.activeCamera) {
            return null;
        }
        camera = this.activeCamera;
    }
    if (this.spriteManagers && this.spriteManagers.length > 0) {
        for(let spriteIndex = 0; spriteIndex < this.spriteManagers.length; spriteIndex++){
            const spriteManager = this.spriteManagers[spriteIndex];
            if (!spriteManager.isPickable) {
                continue;
            }
            const result = spriteManager.intersects(ray, camera, predicate, fastCheck);
            if (!result || !result.hit) {
                continue;
            }
            if (!fastCheck && pickingInfo != null && result.distance >= pickingInfo.distance) {
                continue;
            }
            pickingInfo = result;
            if (fastCheck) {
                break;
            }
        }
    }
    return pickingInfo || new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Collisions$2f$pickingInfo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PickingInfo"]();
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$scene$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Scene"].prototype._internalMultiPickSprites = function(ray, predicate, camera) {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Collisions$2f$pickingInfo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PickingInfo"]) {
        return null;
    }
    let pickingInfos = [];
    if (!camera) {
        if (!this.activeCamera) {
            return null;
        }
        camera = this.activeCamera;
    }
    if (this.spriteManagers && this.spriteManagers.length > 0) {
        for(let spriteIndex = 0; spriteIndex < this.spriteManagers.length; spriteIndex++){
            const spriteManager = this.spriteManagers[spriteIndex];
            if (!spriteManager.isPickable) {
                continue;
            }
            const results = spriteManager.multiIntersects(ray, camera, predicate);
            if (results !== null) {
                pickingInfos = pickingInfos.concat(results);
            }
        }
    }
    return pickingInfos;
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$scene$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Scene"].prototype.pickSprite = function(x, y, predicate, fastCheck, camera) {
    if (!this._tempSpritePickingRay) {
        return null;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$ray$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreatePickingRayInCameraSpaceToRef"])(this, x, y, this._tempSpritePickingRay, camera);
    const result = this._internalPickSprites(this._tempSpritePickingRay, predicate, fastCheck, camera);
    if (result) {
        result.ray = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$ray$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreatePickingRayInCameraSpace"])(this, x, y, camera);
    }
    return result;
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$scene$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Scene"].prototype.pickSpriteWithRay = function(ray, predicate, fastCheck, camera) {
    if (!this._tempSpritePickingRay) {
        return null;
    }
    if (!camera) {
        if (!this.activeCamera) {
            return null;
        }
        camera = this.activeCamera;
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$ray$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Ray"].TransformToRef(ray, camera.getViewMatrix(), this._tempSpritePickingRay);
    const result = this._internalPickSprites(this._tempSpritePickingRay, predicate, fastCheck, camera);
    if (result) {
        result.ray = ray;
    }
    return result;
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$scene$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Scene"].prototype.multiPickSprite = function(x, y, predicate, camera) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$ray$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreatePickingRayInCameraSpaceToRef"])(this, x, y, this._tempSpritePickingRay, camera);
    return this._internalMultiPickSprites(this._tempSpritePickingRay, predicate, camera);
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$scene$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Scene"].prototype.multiPickSpriteWithRay = function(ray, predicate, camera) {
    if (!this._tempSpritePickingRay) {
        return null;
    }
    if (!camera) {
        if (!this.activeCamera) {
            return null;
        }
        camera = this.activeCamera;
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$ray$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Ray"].TransformToRef(ray, camera.getViewMatrix(), this._tempSpritePickingRay);
    return this._internalMultiPickSprites(this._tempSpritePickingRay, predicate, camera);
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$scene$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Scene"].prototype.setPointerOverSprite = function(sprite) {
    if (this._pointerOverSprite === sprite) {
        return;
    }
    if (this._pointerOverSprite && this._pointerOverSprite.actionManager) {
        this._pointerOverSprite.actionManager.processTrigger(10, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Actions$2f$actionEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ActionEvent"].CreateNewFromSprite(this._pointerOverSprite, this));
    }
    this._pointerOverSprite = sprite;
    if (this._pointerOverSprite && this._pointerOverSprite.actionManager) {
        this._pointerOverSprite.actionManager.processTrigger(9, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Actions$2f$actionEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ActionEvent"].CreateNewFromSprite(this._pointerOverSprite, this));
    }
};
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$scene$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Scene"].prototype.getPointerOverSprite = function() {
    return this._pointerOverSprite;
};
class SpriteSceneComponent {
    /**
     * Creates a new instance of the component for the given scene
     * @param scene Defines the scene to register the component in
     */ constructor(scene){
        /**
         * The component name helpfull to identify the component in the list of scene components.
         */ this.name = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$sceneComponent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SceneComponentConstants"].NAME_SPRITE;
        this.scene = scene;
        this.scene.spriteManagers = [];
        // This ray is used to pick sprites in the scene
        this.scene._tempSpritePickingRay = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$ray$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Ray"] ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Culling$2f$ray$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Ray"].Zero() : null;
        this.scene.onBeforeSpritesRenderingObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        this.scene.onAfterSpritesRenderingObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        this._spritePredicate = (sprite)=>{
            if (!sprite.actionManager) {
                return false;
            }
            return sprite.isPickable && sprite.actionManager.hasPointerTriggers;
        };
    }
    /**
     * Registers the component in a given scene
     */ register() {
        this.scene._pointerMoveStage.registerStep(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$sceneComponent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SceneComponentConstants"].STEP_POINTERMOVE_SPRITE, this, this._pointerMove);
        this.scene._pointerDownStage.registerStep(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$sceneComponent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SceneComponentConstants"].STEP_POINTERDOWN_SPRITE, this, this._pointerDown);
        this.scene._pointerUpStage.registerStep(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$sceneComponent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SceneComponentConstants"].STEP_POINTERUP_SPRITE, this, this._pointerUp);
    }
    /**
     * Rebuilds the elements related to this component in case of
     * context lost for instance.
     */ rebuild() {
    /** Nothing to do for sprites */ }
    /**
     * Disposes the component and the associated resources.
     */ dispose() {
        this.scene.onBeforeSpritesRenderingObservable.clear();
        this.scene.onAfterSpritesRenderingObservable.clear();
        const spriteManagers = this.scene.spriteManagers;
        if (!spriteManagers) {
            return;
        }
        while(spriteManagers.length){
            spriteManagers[0].dispose();
        }
    }
    _pickSpriteButKeepRay(originalPointerInfo, x, y, fastCheck, camera) {
        const result = this.scene.pickSprite(x, y, this._spritePredicate, fastCheck, camera);
        if (result) {
            result.ray = originalPointerInfo ? originalPointerInfo.ray : null;
        }
        return result;
    }
    _pointerMove(unTranslatedPointerX, unTranslatedPointerY, pickResult, isMeshPicked, element) {
        const scene = this.scene;
        if (isMeshPicked) {
            scene.setPointerOverSprite(null);
        } else {
            pickResult = this._pickSpriteButKeepRay(pickResult, unTranslatedPointerX, unTranslatedPointerY, false, scene.cameraToUseForPointers || undefined);
            if (pickResult && pickResult.hit && pickResult.pickedSprite) {
                scene.setPointerOverSprite(pickResult.pickedSprite);
                if (!scene.doNotHandleCursors && element) {
                    if (scene._pointerOverSprite && scene._pointerOverSprite.actionManager && scene._pointerOverSprite.actionManager.hoverCursor) {
                        element.style.cursor = scene._pointerOverSprite.actionManager.hoverCursor;
                    } else {
                        element.style.cursor = scene.hoverCursor;
                    }
                }
            } else {
                scene.setPointerOverSprite(null);
            }
        }
        return pickResult;
    }
    _pointerDown(unTranslatedPointerX, unTranslatedPointerY, pickResult, evt) {
        const scene = this.scene;
        scene._pickedDownSprite = null;
        if (scene.spriteManagers && scene.spriteManagers.length > 0) {
            pickResult = scene.pickSprite(unTranslatedPointerX, unTranslatedPointerY, this._spritePredicate, false, scene.cameraToUseForPointers || undefined);
            if (pickResult && pickResult.hit && pickResult.pickedSprite) {
                if (pickResult.pickedSprite.actionManager) {
                    scene._pickedDownSprite = pickResult.pickedSprite;
                    switch(evt.button){
                        case 0:
                            pickResult.pickedSprite.actionManager.processTrigger(2, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Actions$2f$actionEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ActionEvent"].CreateNewFromSprite(pickResult.pickedSprite, scene, evt));
                            break;
                        case 1:
                            pickResult.pickedSprite.actionManager.processTrigger(4, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Actions$2f$actionEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ActionEvent"].CreateNewFromSprite(pickResult.pickedSprite, scene, evt));
                            break;
                        case 2:
                            pickResult.pickedSprite.actionManager.processTrigger(3, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Actions$2f$actionEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ActionEvent"].CreateNewFromSprite(pickResult.pickedSprite, scene, evt));
                            break;
                    }
                    if (pickResult.pickedSprite.actionManager) {
                        pickResult.pickedSprite.actionManager.processTrigger(5, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Actions$2f$actionEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ActionEvent"].CreateNewFromSprite(pickResult.pickedSprite, scene, evt));
                    }
                }
            }
        }
        return pickResult;
    }
    _pointerUp(unTranslatedPointerX, unTranslatedPointerY, pickResult, evt, doubleClick) {
        const scene = this.scene;
        if (scene.spriteManagers && scene.spriteManagers.length > 0) {
            const spritePickResult = scene.pickSprite(unTranslatedPointerX, unTranslatedPointerY, this._spritePredicate, false, scene.cameraToUseForPointers || undefined);
            if (spritePickResult) {
                if (spritePickResult.hit && spritePickResult.pickedSprite) {
                    if (spritePickResult.pickedSprite.actionManager) {
                        spritePickResult.pickedSprite.actionManager.processTrigger(7, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Actions$2f$actionEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ActionEvent"].CreateNewFromSprite(spritePickResult.pickedSprite, scene, evt));
                        if (spritePickResult.pickedSprite.actionManager) {
                            if (!this.scene._inputManager._isPointerSwiping()) {
                                spritePickResult.pickedSprite.actionManager.processTrigger(1, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Actions$2f$actionEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ActionEvent"].CreateNewFromSprite(spritePickResult.pickedSprite, scene, evt));
                            }
                            if (doubleClick) {
                                spritePickResult.pickedSprite.actionManager.processTrigger(6, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Actions$2f$actionEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ActionEvent"].CreateNewFromSprite(spritePickResult.pickedSprite, scene, evt));
                            }
                        }
                    }
                }
                if (scene._pickedDownSprite && scene._pickedDownSprite.actionManager && scene._pickedDownSprite !== spritePickResult.pickedSprite) {
                    scene._pickedDownSprite.actionManager.processTrigger(16, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Actions$2f$actionEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ActionEvent"].CreateNewFromSprite(scene._pickedDownSprite, scene, evt));
                }
            }
        }
        return pickResult;
    }
} //# sourceMappingURL=spriteSceneComponent.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Sprites/spriteRenderer.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SpriteRenderer",
    ()=>SpriteRenderer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Buffers/buffer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$drawWrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/drawWrapper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$pure$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/materialHelper.functions.pure.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
;
;
;
;
;
class SpriteRenderer {
    /**
     * Gets or sets a boolean indicating if the manager must consider scene fog when rendering
     */ get fogEnabled() {
        return this._fogEnabled;
    }
    set fogEnabled(value) {
        if (this._fogEnabled === value) {
            return;
        }
        this._fogEnabled = value;
        this._createEffects();
    }
    /**
     * In case the depth buffer does not allow enough depth precision for your scene (might be the case in large scenes)
     * You can try switching to logarithmic depth.
     * @see https://doc.babylonjs.com/features/featuresDeepDive/materials/advanced/logarithmicDepthBuffer
     */ get useLogarithmicDepth() {
        return this._useLogarithmicDepth;
    }
    set useLogarithmicDepth(value) {
        const fragmentDepthSupported = !!this._scene?.getEngine().getCaps().fragmentDepthSupported;
        if (value && !fragmentDepthSupported) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Warn("Logarithmic depth has been requested for a sprite renderer on a device that doesn't support it.");
        }
        this._useLogarithmicDepth = value && fragmentDepthSupported;
        this._createEffects();
    }
    /**
     * Gets the capacity of the manager
     */ get capacity() {
        return this._capacity;
    }
    /**
     * Gets or sets a boolean indicating if the renderer must render sprites with pixel perfect rendering
     * Note that pixel perfect mode is not supported in WebGL 1
     */ get pixelPerfect() {
        return this._pixelPerfect;
    }
    set pixelPerfect(value) {
        if (this._pixelPerfect === value) {
            return;
        }
        this._pixelPerfect = value;
        this._createEffects();
    }
    /**
     * Gets the shader language used in this renderer.
     */ get shaderLanguage() {
        return this._shaderLanguage;
    }
    /**
     * Creates a new sprite renderer
     * @param engine defines the engine the renderer works with
     * @param capacity defines the maximum allowed number of sprites
     * @param epsilon defines the epsilon value to align texture (0.01 by default)
     * @param scene defines the hosting scene
     * @param rendererOptions options for the sprite renderer
     */ constructor(engine, capacity, epsilon = 0.01, scene = null, rendererOptions){
        /**
         * Blend mode use to render the particle, it can be any of
         * the static undefined properties provided in this class.
         * Default value is 2
         */ this.blendMode = 2;
        /**
         * Gets or sets a boolean indicating if alpha mode is automatically
         * reset.
         */ this.autoResetAlpha = true;
        /**
         * Disables writing to the depth buffer when rendering the sprites.
         * It can be handy to disable depth writing when using textures without alpha channel
         * and setting some specific blend modes.
         */ this.disableDepthWrite = false;
        this._fogEnabled = true;
        this._pixelPerfect = false;
        /** Shader language used by the material */ this._shaderLanguage = 0 /* ShaderLanguage.GLSL */ ;
        this._useVAO = false;
        this._useInstancing = false;
        this._vertexBuffers = {};
        this._isDisposed = false;
        this._shadersLoaded = false;
        this._pixelPerfect = rendererOptions?.pixelPerfect ?? false;
        this._capacity = capacity;
        this._epsilon = epsilon;
        this._engine = engine;
        this._useInstancing = engine.getCaps().instancedArrays && engine._features.supportSpriteInstancing;
        this._useVAO = engine.getCaps().vertexArrayObject && !engine.disableVertexArrayObjects;
        this._scene = scene;
        if (!this._useInstancing) {
            this._buildIndexBuffer();
        }
        // VBO
        // 18 floats per sprite (x, y, z, angle, sizeX, sizeY, offsetX, offsetY, invertU, invertV, cellLeft, cellTop, cellWidth, cellHeight, color r, color g, color b, color a)
        // 16 when using instances
        this._vertexBufferSize = this._useInstancing ? 16 : 18;
        this._vertexData = new Float32Array(capacity * this._vertexBufferSize * (this._useInstancing ? 1 : 4));
        this._buffer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Buffer"](engine, this._vertexData, true, this._vertexBufferSize);
        const positions = this._buffer.createVertexBuffer(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].PositionKind, 0, 4, this._vertexBufferSize, this._useInstancing);
        const options = this._buffer.createVertexBuffer("options", 4, 2, this._vertexBufferSize, this._useInstancing);
        let offset = 6;
        let offsets;
        if (this._useInstancing) {
            const spriteData = new Float32Array([
                this._epsilon,
                this._epsilon,
                1 - this._epsilon,
                this._epsilon,
                this._epsilon,
                1 - this._epsilon,
                1 - this._epsilon,
                1 - this._epsilon
            ]);
            this._spriteBuffer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Buffer"](engine, spriteData, false, 2);
            offsets = this._spriteBuffer.createVertexBuffer("offsets", 0, 2);
        } else {
            offsets = this._buffer.createVertexBuffer("offsets", offset, 2, this._vertexBufferSize, this._useInstancing);
            offset += 2;
        }
        const inverts = this._buffer.createVertexBuffer("inverts", offset, 2, this._vertexBufferSize, this._useInstancing);
        const cellInfo = this._buffer.createVertexBuffer("cellInfo", offset + 2, 4, this._vertexBufferSize, this._useInstancing);
        const colors = this._buffer.createVertexBuffer(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].ColorKind, offset + 6, 4, this._vertexBufferSize, this._useInstancing);
        this._vertexBuffers[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].PositionKind] = positions;
        this._vertexBuffers["options"] = options;
        this._vertexBuffers["offsets"] = offsets;
        this._vertexBuffers["inverts"] = inverts;
        this._vertexBuffers["cellInfo"] = cellInfo;
        this._vertexBuffers[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].ColorKind] = colors;
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this._initShaderSourceAsync();
    }
    async _initShaderSourceAsync() {
        const engine = this._engine;
        if (engine.isWebGPU && !SpriteRenderer.ForceGLSL) {
            this._shaderLanguage = 1 /* ShaderLanguage.WGSL */ ;
            await Promise.all([
                __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/sprites.vertex.js [app-ssr] (ecmascript, async loader)"),
                __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/sprites.fragment.js [app-ssr] (ecmascript, async loader)")
            ]);
        } else {
            await Promise.all([
                __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/sprites.vertex.js [app-ssr] (ecmascript, async loader)"),
                __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/sprites.fragment.js [app-ssr] (ecmascript, async loader)")
            ]);
        }
        this._shadersLoaded = true;
        this._createEffects();
    }
    _createEffects() {
        if (this._isDisposed || !this._shadersLoaded) {
            return;
        }
        this._drawWrapperBase?.dispose();
        this._drawWrapperDepth?.dispose();
        this._drawWrapperBase = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$drawWrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DrawWrapper"](this._engine);
        this._drawWrapperDepth = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$drawWrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DrawWrapper"](this._engine, false);
        if (this._drawWrapperBase.drawContext) {
            this._drawWrapperBase.drawContext.useInstancing = this._useInstancing;
        }
        if (this._drawWrapperDepth.drawContext) {
            this._drawWrapperDepth.drawContext.useInstancing = this._useInstancing;
        }
        let defines = "";
        if (this._pixelPerfect) {
            defines += "#define PIXEL_PERFECT\n";
        }
        if (this._scene && this._scene.fogEnabled && this._scene.fogMode !== 0 && this._fogEnabled) {
            defines += "#define FOG\n";
        }
        if (this._useLogarithmicDepth) {
            defines += "#define LOGARITHMICDEPTH\n";
        }
        this._drawWrapperBase.effect = this._engine.createEffect("sprites", [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].PositionKind,
            "options",
            "offsets",
            "inverts",
            "cellInfo",
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Buffers$2f$buffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VertexBuffer"].ColorKind
        ], [
            "view",
            "projection",
            "textureInfos",
            "alphaTest",
            "vFogInfos",
            "vFogColor",
            "logarithmicDepthConstant"
        ], [
            "diffuseSampler"
        ], defines, undefined, undefined, undefined, undefined, this._shaderLanguage);
        this._drawWrapperDepth.effect = this._drawWrapperBase.effect;
        this._drawWrapperBase.effect._refCount++;
        this._drawWrapperDepth.materialContext = this._drawWrapperBase.materialContext;
    }
    /**
     * Render all child sprites
     * @param sprites defines the list of sprites to render
     * @param deltaTime defines the time since last frame
     * @param viewMatrix defines the viewMatrix to use to render the sprites
     * @param projectionMatrix defines the projectionMatrix to use to render the sprites
     * @param customSpriteUpdate defines a custom function to update the sprites data before they render
     */ render(sprites, deltaTime, viewMatrix, projectionMatrix, customSpriteUpdate = null) {
        if (!this._shadersLoaded || !this.texture || !this.texture.isReady() || !sprites.length) {
            return;
        }
        const drawWrapper = this._drawWrapperBase;
        const drawWrapperDepth = this._drawWrapperDepth;
        const shouldRenderFog = this.fogEnabled && this._scene && this._scene.fogEnabled && this._scene.fogMode !== 0;
        const effect = drawWrapper.effect;
        // Check
        if (!effect.isReady()) {
            return;
        }
        const engine = this._engine;
        const useRightHandedSystem = !!(this._scene && this._scene.useRightHandedSystem);
        // Sprites
        const max = Math.min(this._capacity, sprites.length);
        let offset = 0;
        let noSprite = true;
        const floatingOriginOffset = this._scene?.floatingOriginOffset || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].ZeroReadOnly;
        for(let index = 0; index < max; index++){
            const sprite = sprites[index];
            if (!sprite || !sprite.isVisible) {
                continue;
            }
            noSprite = false;
            sprite._animate(deltaTime);
            const baseSize = this.texture.getBaseSize(); // This could be change by the user inside the animate callback (like onAnimationEnd)
            this._appendSpriteVertex(offset++, sprite, 0, 0, baseSize, useRightHandedSystem, customSpriteUpdate, floatingOriginOffset);
            if (!this._useInstancing) {
                this._appendSpriteVertex(offset++, sprite, 1, 0, baseSize, useRightHandedSystem, customSpriteUpdate, floatingOriginOffset);
                this._appendSpriteVertex(offset++, sprite, 1, 1, baseSize, useRightHandedSystem, customSpriteUpdate, floatingOriginOffset);
                this._appendSpriteVertex(offset++, sprite, 0, 1, baseSize, useRightHandedSystem, customSpriteUpdate, floatingOriginOffset);
            }
        }
        if (noSprite) {
            return;
        }
        this._buffer.update(this._vertexData);
        const culling = !!engine.depthCullingState.cull;
        const zOffset = engine.depthCullingState.zOffset;
        const zOffsetUnits = engine.depthCullingState.zOffsetUnits;
        engine.setState(culling, zOffset, false, false, undefined, undefined, zOffsetUnits);
        // Render
        engine.enableEffect(drawWrapper);
        effect.setTexture("diffuseSampler", this.texture);
        effect.setMatrix("view", viewMatrix);
        effect.setMatrix("projection", projectionMatrix);
        // Scene Info
        if (shouldRenderFog) {
            const scene = this._scene;
            // Fog
            effect.setFloat4("vFogInfos", scene.fogMode, scene.fogStart, scene.fogEnd, scene.fogDensity);
            effect.setColor3("vFogColor", scene.fogColor);
        }
        // Log. depth
        if (this.useLogarithmicDepth && this._scene) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$materialHelper$2e$functions$2e$pure$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BindLogDepth"])(drawWrapper.defines, effect, this._scene);
        }
        if (this._useVAO) {
            if (!this._vertexArrayObject) {
                this._vertexArrayObject = engine.recordVertexArrayObject(this._vertexBuffers, this._indexBuffer, effect);
            }
            engine.bindVertexArrayObject(this._vertexArrayObject, this._indexBuffer);
        } else {
            // VBOs
            engine.bindBuffers(this._vertexBuffers, this._indexBuffer, effect);
        }
        // Draw order
        engine.depthCullingState.depthFunc = engine.useReverseDepthBuffer ? 518 : 515;
        if (!this.disableDepthWrite) {
            effect.setBool("alphaTest", true);
            engine.setColorWrite(false);
            engine.enableEffect(drawWrapperDepth);
            if (this._useInstancing) {
                engine.drawArraysType(7, 0, 4, offset);
            } else {
                engine.drawElementsType(0, 0, offset / 4 * 6);
            }
            engine.enableEffect(drawWrapper);
            engine.setColorWrite(true);
            effect.setBool("alphaTest", false);
        }
        engine.setAlphaMode(this.blendMode);
        if (this._useInstancing) {
            engine.drawArraysType(7, 0, 4, offset);
        } else {
            engine.drawElementsType(0, 0, offset / 4 * 6);
        }
        if (this.autoResetAlpha) {
            engine.setAlphaMode(0);
        }
        // Restore Right Handed
        if (useRightHandedSystem) {
            this._scene.getEngine().setState(culling, zOffset, false, true, undefined, undefined, zOffsetUnits);
        }
        engine.unbindInstanceAttributes();
    }
    _appendSpriteVertex(index, sprite, offsetX, offsetY, baseSize, useRightHandedSystem, customSpriteUpdate, floatingOriginOffset) {
        let arrayOffset = index * this._vertexBufferSize;
        if (offsetX === 0) {
            offsetX = this._epsilon;
        } else if (offsetX === 1) {
            offsetX = 1 - this._epsilon;
        }
        if (offsetY === 0) {
            offsetY = this._epsilon;
        } else if (offsetY === 1) {
            offsetY = 1 - this._epsilon;
        }
        if (customSpriteUpdate) {
            customSpriteUpdate(sprite, baseSize);
        } else {
            if (!sprite.cellIndex) {
                sprite.cellIndex = 0;
            }
            const rowSize = baseSize.width / this.cellWidth;
            const offset = sprite.cellIndex / rowSize >> 0;
            sprite._xOffset = (sprite.cellIndex - offset * rowSize) * this.cellWidth / baseSize.width;
            sprite._yOffset = offset * this.cellHeight / baseSize.height;
            sprite._xSize = this.cellWidth;
            sprite._ySize = this.cellHeight;
        }
        // Positions
        this._vertexData[arrayOffset] = sprite.position.x - floatingOriginOffset.x;
        this._vertexData[arrayOffset + 1] = sprite.position.y - floatingOriginOffset.y;
        this._vertexData[arrayOffset + 2] = sprite.position.z - floatingOriginOffset.z;
        this._vertexData[arrayOffset + 3] = sprite.angle;
        // Options
        this._vertexData[arrayOffset + 4] = sprite.width;
        this._vertexData[arrayOffset + 5] = sprite.height;
        if (!this._useInstancing) {
            this._vertexData[arrayOffset + 6] = offsetX;
            this._vertexData[arrayOffset + 7] = offsetY;
        } else {
            arrayOffset -= 2;
        }
        // Inverts according to Right Handed
        if (useRightHandedSystem) {
            this._vertexData[arrayOffset + 8] = sprite.invertU ? 0 : 1;
        } else {
            this._vertexData[arrayOffset + 8] = sprite.invertU ? 1 : 0;
        }
        this._vertexData[arrayOffset + 9] = sprite.invertV ? 1 : 0;
        this._vertexData[arrayOffset + 10] = sprite._xOffset;
        this._vertexData[arrayOffset + 11] = sprite._yOffset;
        this._vertexData[arrayOffset + 12] = sprite._xSize / baseSize.width;
        this._vertexData[arrayOffset + 13] = sprite._ySize / baseSize.height;
        // Color
        this._vertexData[arrayOffset + 14] = sprite.color.r;
        this._vertexData[arrayOffset + 15] = sprite.color.g;
        this._vertexData[arrayOffset + 16] = sprite.color.b;
        this._vertexData[arrayOffset + 17] = sprite.color.a;
    }
    _buildIndexBuffer() {
        const indices = [];
        let index = 0;
        for(let count = 0; count < this._capacity; count++){
            indices.push(index);
            indices.push(index + 1);
            indices.push(index + 2);
            indices.push(index);
            indices.push(index + 2);
            indices.push(index + 3);
            index += 4;
        }
        this._indexBuffer = this._engine.createIndexBuffer(indices);
    }
    /**
     * Rebuilds the renderer (after a context lost, for eg)
     */ rebuild() {
        if (this._indexBuffer) {
            this._buildIndexBuffer();
        }
        if (this._useVAO) {
            this._vertexArrayObject = undefined;
        }
        this._buffer._rebuild();
        for(const key in this._vertexBuffers){
            const vertexBuffer = this._vertexBuffers[key];
            vertexBuffer._rebuild();
        }
        this._spriteBuffer?._rebuild();
    }
    /**
     * Release associated resources
     */ dispose() {
        if (this._buffer) {
            this._buffer.dispose();
            this._buffer = null;
        }
        if (this._spriteBuffer) {
            this._spriteBuffer.dispose();
            this._spriteBuffer = null;
        }
        if (this._indexBuffer) {
            this._engine._releaseBuffer(this._indexBuffer);
            this._indexBuffer = null;
        }
        if (this._vertexArrayObject) {
            this._engine.releaseVertexArrayObject(this._vertexArrayObject);
            this._vertexArrayObject = null;
        }
        if (this.texture) {
            this.texture.dispose();
            this.texture = null;
        }
        this._drawWrapperBase?.dispose();
        this._drawWrapperDepth?.dispose();
        this._isDisposed = true;
    }
}
/**
 * Force all the sprites to compile to glsl even on WebGPU engines.
 * False by default. This is mostly meant for backward compatibility.
 */ SpriteRenderer.ForceGLSL = false; //# sourceMappingURL=spriteRenderer.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Sprites/spriteManager.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SpriteManager",
    ()=>SpriteManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Sprites$2f$sprite$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Sprites/sprite.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Sprites$2f$spriteSceneComponent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Sprites/spriteSceneComponent.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Collisions$2f$pickingInfo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Collisions/pickingInfo.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/texture.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$sceneComponent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/sceneComponent.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/tools.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$webRequest$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/webRequest.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Sprites$2f$spriteRenderer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Sprites/spriteRenderer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/engineStore.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
class SpriteManager {
    /**
     * Callback called when the manager is disposed
     */ set onDispose(callback) {
        if (this._onDisposeObserver) {
            this.onDisposeObservable.remove(this._onDisposeObserver);
        }
        this._onDisposeObserver = this.onDisposeObservable.add(callback);
    }
    /**
     * Gets the array of sprites
     */ get children() {
        return this.sprites;
    }
    /**
     * Gets the hosting scene
     */ get scene() {
        return this._scene;
    }
    /**
     * Gets the capacity of the manager
     */ get capacity() {
        return this._spriteRenderer.capacity;
    }
    /**
     * Gets or sets the spritesheet texture
     */ get texture() {
        return this._spriteRenderer.texture;
    }
    set texture(value) {
        value.wrapU = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Texture"].CLAMP_ADDRESSMODE;
        value.wrapV = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Texture"].CLAMP_ADDRESSMODE;
        this._spriteRenderer.texture = value;
        this._textureContent = null;
    }
    /** Defines the default width of a cell in the spritesheet */ get cellWidth() {
        return this._spriteRenderer.cellWidth;
    }
    set cellWidth(value) {
        this._spriteRenderer.cellWidth = value;
    }
    /** Defines the default height of a cell in the spritesheet */ get cellHeight() {
        return this._spriteRenderer.cellHeight;
    }
    set cellHeight(value) {
        this._spriteRenderer.cellHeight = value;
    }
    /** Gets or sets a boolean indicating if the manager must consider scene fog when rendering */ get fogEnabled() {
        return this._spriteRenderer.fogEnabled;
    }
    set fogEnabled(value) {
        this._spriteRenderer.fogEnabled = value;
    }
    /** Gets or sets a boolean indicating if the manager must use logarithmic depth when rendering */ get useLogarithmicDepth() {
        return this._spriteRenderer.useLogarithmicDepth;
    }
    set useLogarithmicDepth(value) {
        this._spriteRenderer.useLogarithmicDepth = value;
    }
    /**
     * Blend mode use to render the particle, it can be any of
     * the static undefined properties provided in this class.
     * Default value is 2
     */ get blendMode() {
        return this._spriteRenderer.blendMode;
    }
    set blendMode(blendMode) {
        this._spriteRenderer.blendMode = blendMode;
    }
    /** Disables writing to the depth buffer when rendering the sprites.
     *  It can be handy to disable depth writing when using textures without alpha channel
     *  and setting some specific blend modes.
     */ get disableDepthWrite() {
        return this._disableDepthWrite;
    }
    set disableDepthWrite(value) {
        this._disableDepthWrite = value;
        this._spriteRenderer.disableDepthWrite = value;
    }
    /**
     * Gets or sets a boolean indicating if the renderer must render sprites with pixel perfect rendering
     * In this mode, sprites are rendered as "pixel art", which means that they appear as pixelated but remain stable when moving or when rotated or scaled.
     * Note that for this mode to work as expected, the sprite texture must use the BILINEAR sampling mode, not NEAREST!
     */ get pixelPerfect() {
        return this._spriteRenderer.pixelPerfect;
    }
    set pixelPerfect(value) {
        this._spriteRenderer.pixelPerfect = value;
        if (value && this.texture.samplingMode !== 3) {
            this.texture.updateSamplingMode(3);
        }
    }
    /**
     * Gets the sprite renderer associated with this manager
     */ get spriteRenderer() {
        return this._spriteRenderer;
    }
    /**
     * Creates a new sprite manager
     * @param name defines the manager's name
     * @param imgUrl defines the sprite sheet url
     * @param capacity defines the maximum allowed number of sprites
     * @param cellSize defines the size of a sprite cell
     * @param scene defines the hosting scene
     * @param epsilon defines the epsilon value to align texture (0.01 by default)
     * @param samplingMode defines the sampling mode to use with spritesheet
     * @param fromPacked set to false; do not alter
     * @param spriteJSON null otherwise a JSON object defining sprite sheet data; do not alter
     * @param options options used to create the SpriteManager instance
     */ constructor(/** defines the manager's name */ name, imgUrl, capacity, cellSize, scene, epsilon = 0.01, samplingMode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Texture"].TRILINEAR_SAMPLINGMODE, fromPacked = false, spriteJSON = null, options){
        this.name = name;
        /** Gets the list of sprites */ this.sprites = [];
        /** Gets or sets the rendering group id (0 by default) */ this.renderingGroupId = 0;
        /** Gets or sets camera layer mask */ this.layerMask = 0x0fffffff;
        /** Gets or sets a boolean indicating if the sprites are pickable */ this.isPickable = false;
        /**
         * Gets or sets an object used to store user defined information for the sprite manager
         */ this.metadata = null;
        /** @internal */ this._wasDispatched = false;
        /**
         * An event triggered when the manager is disposed.
         */ this.onDisposeObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * Specifies if the sprite manager should be serialized
         */ this.doNotSerialize = false;
        this._disableDepthWrite = false;
        /** True when packed cell data from JSON file is ready*/ this._packedAndReady = false;
        this._customUpdate = (sprite, baseSize)=>{
            if (!sprite.cellRef) {
                sprite.cellIndex = 0;
            }
            const num = sprite.cellIndex;
            if (typeof num === "number" && isFinite(num) && Math.floor(num) === num) {
                sprite.cellRef = this._spriteMap[sprite.cellIndex];
            }
            sprite._xOffset = this._cellData[sprite.cellRef].frame.x / baseSize.width;
            sprite._yOffset = this._cellData[sprite.cellRef].frame.y / baseSize.height;
            sprite._xSize = this._cellData[sprite.cellRef].frame.w;
            sprite._ySize = this._cellData[sprite.cellRef].frame.h;
        };
        if (!scene) {
            scene = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EngineStore"].LastCreatedScene;
        }
        if (!scene._getComponent(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$sceneComponent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SceneComponentConstants"].NAME_SPRITE)) {
            scene._addComponent(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Sprites$2f$spriteSceneComponent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SpriteSceneComponent"](scene));
        }
        this._fromPacked = fromPacked;
        this._scene = scene;
        const engine = this._scene.getEngine();
        this._spriteRenderer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Sprites$2f$spriteRenderer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SpriteRenderer"](engine, capacity, epsilon, scene, options?.spriteRendererOptions);
        if (cellSize.width && cellSize.height) {
            this.cellWidth = cellSize.width;
            this.cellHeight = cellSize.height;
        } else if (cellSize !== undefined) {
            this.cellWidth = cellSize;
            this.cellHeight = cellSize;
        } else {
            this._spriteRenderer = null;
            return;
        }
        this._scene.spriteManagers && this._scene.spriteManagers.push(this);
        this.uniqueId = this.scene.getUniqueId();
        if (imgUrl) {
            this.texture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Texture"](imgUrl, scene, true, false, samplingMode);
        }
        if (this._fromPacked) {
            this._makePacked(imgUrl, spriteJSON);
        }
        this._scene._onNewSpriteManagerAddedObservable?.notifyObservers(this);
    }
    /**
     * Returns the string "SpriteManager"
     * @returns "SpriteManager"
     */ getClassName() {
        return "SpriteManager";
    }
    _makePacked(imgUrl, spriteJSON) {
        if (spriteJSON !== null) {
            try {
                //Get the JSON and Check its structure.  If its an array parse it if its a JSON string etc...
                let celldata;
                if (typeof spriteJSON === "string") {
                    celldata = JSON.parse(spriteJSON);
                } else {
                    celldata = spriteJSON;
                }
                if (celldata.frames.length) {
                    const frametemp = {};
                    for(let i = 0; i < celldata.frames.length; i++){
                        const _f = celldata.frames[i];
                        if (typeof Object.keys(_f)[0] !== "string") {
                            throw new Error("Invalid JSON Format.  Check the frame values and make sure the name is the first parameter.");
                        }
                        const name = _f[Object.keys(_f)[0]];
                        frametemp[name] = _f;
                    }
                    celldata.frames = frametemp;
                }
                const spritemap = Reflect.ownKeys(celldata.frames);
                this._spriteMap = spritemap;
                this._packedAndReady = true;
                this._cellData = celldata.frames;
            } catch (e) {
                this._fromPacked = false;
                this._packedAndReady = false;
                throw new Error("Invalid JSON from string. Spritesheet managed with constant cell size.");
            }
        } else {
            const re = /\./g;
            let li;
            do {
                li = re.lastIndex;
                re.test(imgUrl);
            }while (re.lastIndex > 0)
            const jsonUrl = imgUrl.substring(0, li - 1) + ".json";
            const onerror = ()=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Error("JSON ERROR: Unable to load JSON file.");
                this._fromPacked = false;
                this._packedAndReady = false;
            };
            const onload = (data)=>{
                try {
                    const celldata = JSON.parse(data);
                    const spritemap = Reflect.ownKeys(celldata.frames);
                    this._spriteMap = spritemap;
                    this._packedAndReady = true;
                    this._cellData = celldata.frames;
                } catch (e) {
                    this._fromPacked = false;
                    this._packedAndReady = false;
                    throw new Error("Invalid JSON format. Please check documentation for format specifications.");
                }
            };
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tools"].LoadFile(jsonUrl, onload, undefined, undefined, false, onerror);
        }
    }
    _checkTextureAlpha(sprite, ray, distance, min, max) {
        if (!sprite.useAlphaForPicking || !this.texture?.isReady()) {
            return true;
        }
        const textureSize = this.texture.getSize();
        if (!this._textureContent) {
            this._textureContent = new Uint8Array(textureSize.width * textureSize.height * 4);
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            this.texture.readPixels(0, 0, this._textureContent);
        }
        const contactPoint = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0];
        contactPoint.copyFrom(ray.direction);
        contactPoint.normalize();
        contactPoint.scaleInPlace(distance);
        contactPoint.addInPlace(ray.origin);
        const contactPointU = (contactPoint.x - min.x) / (max.x - min.x);
        const contactPointV = 1.0 - (contactPoint.y - min.y) / (max.y - min.y);
        const u = sprite._xOffset * textureSize.width + contactPointU * sprite._xSize | 0;
        const v = sprite._yOffset * textureSize.height + contactPointV * sprite._ySize | 0;
        const alpha = this._textureContent[(u + v * textureSize.width) * 4 + 3];
        return alpha > 0.5;
    }
    /**
     * Intersects the sprites with a ray
     * @param ray defines the ray to intersect with
     * @param camera defines the current active camera
     * @param predicate defines a predicate used to select candidate sprites
     * @param fastCheck defines if a fast check only must be done (the first potential sprite is will be used and not the closer)
     * @returns null if no hit or a PickingInfo
     */ intersects(ray, camera, predicate, fastCheck) {
        const count = Math.min(this.capacity, this.sprites.length);
        const min = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        const max = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        let distance = Number.MAX_VALUE;
        let currentSprite = null;
        const pickedPoint = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0];
        const cameraSpacePosition = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[1];
        const cameraView = camera.getViewMatrix();
        let activeRay = ray;
        let pickedRay = ray;
        for(let index = 0; index < count; index++){
            const sprite = this.sprites[index];
            if (!sprite) {
                continue;
            }
            if (predicate) {
                if (!predicate(sprite)) {
                    continue;
                }
            } else if (!sprite.isPickable) {
                continue;
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinatesToRef(sprite.position, cameraView, cameraSpacePosition);
            if (sprite.angle) {
                // Create a rotation matrix to rotate the ray to the sprite's rotation
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].TranslationToRef(-cameraSpacePosition.x, -cameraSpacePosition.y, 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[1]);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].TranslationToRef(cameraSpacePosition.x, cameraSpacePosition.y, 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[2]);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"].RotationZToRef(-sprite.angle, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[3]);
                // inv translation x rotation x translation
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[1].multiplyToRef(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[3], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[4]);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[4].multiplyToRef(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[2], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[0]);
                activeRay = ray.clone();
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinatesToRef(ray.origin, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[0], activeRay.origin);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].TransformNormalToRef(ray.direction, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[0], activeRay.direction);
            } else {
                activeRay = ray;
            }
            min.copyFromFloats(cameraSpacePosition.x - sprite.width / 2, cameraSpacePosition.y - sprite.height / 2, cameraSpacePosition.z);
            max.copyFromFloats(cameraSpacePosition.x + sprite.width / 2, cameraSpacePosition.y + sprite.height / 2, cameraSpacePosition.z);
            if (activeRay.intersectsBoxMinMax(min, max)) {
                const currentDistance = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Distance(cameraSpacePosition, activeRay.origin);
                if (distance > currentDistance) {
                    if (!this._checkTextureAlpha(sprite, activeRay, currentDistance, min, max)) {
                        continue;
                    }
                    pickedRay = activeRay;
                    distance = currentDistance;
                    currentSprite = sprite;
                    if (fastCheck) {
                        break;
                    }
                }
            }
        }
        if (currentSprite) {
            const result = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Collisions$2f$pickingInfo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PickingInfo"]();
            cameraView.invertToRef(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[0]);
            result.hit = true;
            result.pickedSprite = currentSprite;
            result.distance = distance;
            // Get picked point
            const direction = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[2];
            direction.copyFrom(pickedRay.direction);
            direction.normalize();
            direction.scaleInPlace(distance);
            pickedRay.origin.addToRef(direction, pickedPoint);
            result.pickedPoint = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinates(pickedPoint, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[0]);
            return result;
        }
        return null;
    }
    /**
     * Intersects the sprites with a ray
     * @param ray defines the ray to intersect with
     * @param camera defines the current active camera
     * @param predicate defines a predicate used to select candidate sprites
     * @returns null if no hit or a PickingInfo array
     */ multiIntersects(ray, camera, predicate) {
        const count = Math.min(this.capacity, this.sprites.length);
        const min = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        const max = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        let distance;
        const results = [];
        const pickedPoint = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[0].copyFromFloats(0, 0, 0);
        const cameraSpacePosition = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[1].copyFromFloats(0, 0, 0);
        const cameraView = camera.getViewMatrix();
        for(let index = 0; index < count; index++){
            const sprite = this.sprites[index];
            if (!sprite) {
                continue;
            }
            if (predicate) {
                if (!predicate(sprite)) {
                    continue;
                }
            } else if (!sprite.isPickable) {
                continue;
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinatesToRef(sprite.position, cameraView, cameraSpacePosition);
            min.copyFromFloats(cameraSpacePosition.x - sprite.width / 2, cameraSpacePosition.y - sprite.height / 2, cameraSpacePosition.z);
            max.copyFromFloats(cameraSpacePosition.x + sprite.width / 2, cameraSpacePosition.y + sprite.height / 2, cameraSpacePosition.z);
            if (ray.intersectsBoxMinMax(min, max)) {
                distance = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Distance(cameraSpacePosition, ray.origin);
                if (!this._checkTextureAlpha(sprite, ray, distance, min, max)) {
                    continue;
                }
                const result = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Collisions$2f$pickingInfo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PickingInfo"]();
                results.push(result);
                cameraView.invertToRef(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[0]);
                result.hit = true;
                result.pickedSprite = sprite;
                result.distance = distance;
                // Get picked point
                const direction = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Vector3[2];
                direction.copyFrom(ray.direction);
                direction.normalize();
                direction.scaleInPlace(distance);
                ray.origin.addToRef(direction, pickedPoint);
                result.pickedPoint = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].TransformCoordinates(pickedPoint, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TmpVectors"].Matrix[0]);
            }
        }
        return results;
    }
    /**
     * Render all child sprites
     */ render() {
        // Check
        if (this._fromPacked && (!this._packedAndReady || !this._spriteMap || !this._cellData)) {
            return;
        }
        const engine = this._scene.getEngine();
        const deltaTime = engine.getDeltaTime();
        if (this._packedAndReady) {
            this._spriteRenderer.render(this.sprites, deltaTime, this._scene.getViewMatrix(), this._scene.getProjectionMatrix(), this._customUpdate);
        } else {
            this._spriteRenderer.render(this.sprites, deltaTime, this._scene.getViewMatrix(), this._scene.getProjectionMatrix());
        }
    }
    /**
     * Rebuilds the manager (after a context lost, for eg)
     */ rebuild() {
        this._spriteRenderer?.rebuild();
    }
    /**
     * Release associated resources
     */ dispose() {
        if (this._spriteRenderer) {
            this._spriteRenderer.dispose();
            this._spriteRenderer = null;
        }
        this._textureContent = null;
        // Remove from scene
        if (this._scene.spriteManagers) {
            const index = this._scene.spriteManagers.indexOf(this);
            this._scene.spriteManagers.splice(index, 1);
            this._scene._onSpriteManagerRemovedObservable?.notifyObservers(this);
        }
        // Callback
        this.onDisposeObservable.notifyObservers(this);
        this.onDisposeObservable.clear();
        this.metadata = null;
    }
    /**
     * Serializes the sprite manager to a JSON object
     * @param serializeTexture defines if the texture must be serialized as well
     * @returns the JSON object
     */ serialize(serializeTexture = false) {
        const serializationObject = {};
        serializationObject.name = this.name;
        serializationObject.capacity = this.capacity;
        serializationObject.cellWidth = this.cellWidth;
        serializationObject.cellHeight = this.cellHeight;
        serializationObject.fogEnabled = this.fogEnabled;
        serializationObject.blendMode = this.blendMode;
        serializationObject.disableDepthWrite = this.disableDepthWrite;
        serializationObject.pixelPerfect = this.pixelPerfect;
        serializationObject.useLogarithmicDepth = this.useLogarithmicDepth;
        if (this.texture) {
            if (serializeTexture) {
                serializationObject.texture = this.texture.serialize();
            } else {
                serializationObject.textureUrl = this.texture.name;
                serializationObject.invertY = this.texture._invertY;
            }
        }
        serializationObject.sprites = [];
        for (const sprite of this.sprites){
            serializationObject.sprites.push(sprite.serialize());
        }
        serializationObject.metadata = this.metadata;
        return serializationObject;
    }
    /**
     * Parses a JSON object to create a new sprite manager.
     * @param parsedManager The JSON object to parse
     * @param scene The scene to create the sprite manager
     * @param rootUrl The root url to use to load external dependencies like texture
     * @returns the new sprite manager
     */ static Parse(parsedManager, scene, rootUrl) {
        const manager = new SpriteManager(parsedManager.name, "", parsedManager.capacity, {
            width: parsedManager.cellWidth,
            height: parsedManager.cellHeight
        }, scene);
        if (parsedManager.fogEnabled !== undefined) {
            manager.fogEnabled = parsedManager.fogEnabled;
        }
        if (parsedManager.blendMode !== undefined) {
            manager.blendMode = parsedManager.blendMode;
        }
        if (parsedManager.disableDepthWrite !== undefined) {
            manager.disableDepthWrite = parsedManager.disableDepthWrite;
        }
        if (parsedManager.pixelPerfect !== undefined) {
            manager.pixelPerfect = parsedManager.pixelPerfect;
        }
        if (parsedManager.useLogarithmicDepth !== undefined) {
            manager.useLogarithmicDepth = parsedManager.useLogarithmicDepth;
        }
        if (parsedManager.metadata !== undefined) {
            manager.metadata = parsedManager.metadata;
        }
        if (parsedManager.texture) {
            manager.texture = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Texture"].Parse(parsedManager.texture, scene, rootUrl);
        } else if (parsedManager.textureName) {
            manager.texture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Texture"](rootUrl + parsedManager.textureUrl, scene, false, parsedManager.invertY !== undefined ? parsedManager.invertY : true);
        }
        for (const parsedSprite of parsedManager.sprites){
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Sprites$2f$sprite$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sprite"].Parse(parsedSprite, manager);
        }
        return manager;
    }
    /**
     * Creates a sprite manager from a snippet saved in a remote file
     * @param name defines the name of the sprite manager to create (can be null or empty to use the one from the json data)
     * @param url defines the url to load from
     * @param scene defines the hosting scene
     * @param rootUrl defines the root URL to use to load textures and relative dependencies
     * @returns a promise that will resolve to the new sprite manager
     */ static async ParseFromFileAsync(name, url, scene, rootUrl = "") {
        return await new Promise((resolve, reject)=>{
            const request = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$webRequest$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebRequest"]();
            request.addEventListener("readystatechange", ()=>{
                if (request.readyState == 4) {
                    if (request.status == 200) {
                        const serializationObject = JSON.parse(request.responseText);
                        const output = SpriteManager.Parse(serializationObject, scene || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EngineStore"].LastCreatedScene, rootUrl);
                        if (name) {
                            output.name = name;
                        }
                        resolve(output);
                    } else {
                        // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
                        reject("Unable to load the sprite manager");
                    }
                }
            });
            request.open("GET", url);
            request.send();
        });
    }
    /**
     * Creates a sprite manager from a snippet saved by the sprite editor
     * @param snippetId defines the snippet to load (can be set to _BLANK to create a default one)
     * @param scene defines the hosting scene
     * @param rootUrl defines the root URL to use to load textures and relative dependencies
     * @returns a promise that will resolve to the new sprite manager
     */ // eslint-disable-next-line @typescript-eslint/promise-function-async, no-restricted-syntax
    static ParseFromSnippetAsync(snippetId, scene, rootUrl = "") {
        if (snippetId === "_BLANK") {
            return Promise.resolve(new SpriteManager("Default sprite manager", "//playground.babylonjs.com/textures/player.png", 500, 64, scene));
        }
        return new Promise((resolve, reject)=>{
            const request = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$webRequest$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebRequest"]();
            request.addEventListener("readystatechange", ()=>{
                if (request.readyState == 4) {
                    if (request.status == 200) {
                        const snippet = JSON.parse(JSON.parse(request.responseText).jsonPayload);
                        const serializationObject = JSON.parse(snippet.spriteManager);
                        const output = SpriteManager.Parse(serializationObject, scene || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EngineStore"].LastCreatedScene, rootUrl);
                        output.snippetId = snippetId;
                        resolve(output);
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
/** Define the Url to load snippets */ SpriteManager.SnippetUrl = `https://snippet.babylonjs.com`;
/**
 * Creates a sprite manager from a snippet saved by the sprite editor
 * @deprecated Please use ParseFromSnippetAsync instead
 * @param snippetId defines the snippet to load (can be set to _BLANK to create a default one)
 * @param scene defines the hosting scene
 * @param rootUrl defines the root URL to use to load textures and relative dependencies
 * @returns a promise that will resolve to the new sprite manager
 */ SpriteManager.CreateFromSnippetAsync = SpriteManager.ParseFromSnippetAsync; //# sourceMappingURL=spriteManager.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Sprites/ISprites.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
 //# sourceMappingURL=ISprites.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Sprites/spriteMap.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SpriteMap",
    ()=>SpriteMap,
    "SpriteMapFrameRotationDirection",
    ()=>SpriteMapFrameRotationDirection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/texture.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$rawTexture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/rawTexture.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$shaderMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/shaderMaterial.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$effect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/effect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$planeBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Meshes/Builders/planeBuilder.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$spriteMap$2e$fragment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/spriteMap.fragment.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$spriteMap$2e$vertex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/spriteMap.vertex.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
var SpriteMapFrameRotationDirection;
(function(SpriteMapFrameRotationDirection) {
    SpriteMapFrameRotationDirection[SpriteMapFrameRotationDirection["CCW"] = 0] = "CCW";
    SpriteMapFrameRotationDirection[SpriteMapFrameRotationDirection["CW"] = 1] = "CW";
})(SpriteMapFrameRotationDirection || (SpriteMapFrameRotationDirection = {}));
class SpriteMap {
    /** Returns the Number of Sprites in the System */ get spriteCount() {
        return this.sprites.length;
    }
    /** Returns the Position of Output Plane*/ get position() {
        return this._output.position;
    }
    /** Returns the Position of Output Plane*/ set position(v) {
        this._output.position = v;
    }
    /** Returns the Rotation of Output Plane*/ get rotation() {
        return this._output.rotation;
    }
    /** Returns the Rotation of Output Plane*/ set rotation(v) {
        this._output.rotation = v;
    }
    /** Sets the AnimationMap*/ get animationMap() {
        return this._animationMap;
    }
    /** Sets the AnimationMap*/ set animationMap(v) {
        const buffer = v._texture._bufferView;
        const am = this._createTileAnimationBuffer(buffer);
        this._animationMap.dispose();
        this._animationMap = am;
        this._material.setTexture("animationMap", this._animationMap);
    }
    /** Gets or sets a boolean indicating if the sprite map must consider scene fog when rendering */ get fogEnabled() {
        return this._material.fogEnabled;
    }
    set fogEnabled(value) {
        this._material.fogEnabled = value;
    }
    /** Gets or sets a boolean indicating if the sprite map must use logarithmic depth when rendering */ get useLogarithmicDepth() {
        return this._material.useLogarithmicDepth;
    }
    set useLogarithmicDepth(value) {
        this._material.useLogarithmicDepth = value;
    }
    /**
     * Creates a new SpriteMap
     * @param name defines the SpriteMaps Name
     * @param atlasJSON is the JSON file that controls the Sprites Frames and Meta
     * @param spriteSheet is the Texture that the Sprites are on.
     * @param options a basic deployment configuration
     * @param scene The Scene that the map is deployed on
     */ constructor(name, atlasJSON, spriteSheet, options, scene){
        this.name = name;
        this.sprites = [];
        this.atlasJSON = atlasJSON;
        this.sprites = this.atlasJSON["frames"];
        this.spriteSheet = spriteSheet;
        /**
         * Run through the options and set what ever defaults are needed that where not declared.
         */ this.options = options;
        options.stageSize = options.stageSize || new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"](1, 1);
        options.outputSize = options.outputSize || options.stageSize;
        options.outputPosition = options.outputPosition || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        options.outputRotation = options.outputRotation || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        options.layerCount = options.layerCount || 1;
        options.maxAnimationFrames = options.maxAnimationFrames || 0;
        options.baseTile = options.baseTile || 0;
        options.flipU = options.flipU || false;
        options.colorMultiply = options.colorMultiply || new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](1, 1, 1);
        this._scene = scene;
        this._frameMap = this._createFrameBuffer();
        this._tileMaps = [];
        for(let i = 0; i < options.layerCount; i++){
            this._tileMaps.push(this._createTileBuffer(null, i));
        }
        this._animationMap = this._createTileAnimationBuffer(null);
        const defines = [];
        defines.push("#define LAYERS " + options.layerCount);
        if (options?.frameRotationDirection === SpriteMapFrameRotationDirection.CW) {
            defines.push("#define FR_CW");
        }
        if (options.flipU) {
            defines.push("#define FLIPU");
        }
        defines.push(`#define MAX_ANIMATION_FRAMES ${options.maxAnimationFrames}.0`);
        const shaderString = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$effect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Effect"].ShadersStore["spriteMapPixelShader"];
        let layerSampleString;
        if (!scene.getEngine()._features.supportSwitchCaseInShader) {
            layerSampleString = "";
            for(let i = 0; i < options.layerCount; i++){
                layerSampleString += `if (${i} == i) { frameID = texture2D(tileMaps[${i}], (tileID + 0.5) / stageSize, 0.).x; }`;
            }
        } else {
            layerSampleString = "switch(i) {";
            for(let i = 0; i < options.layerCount; i++){
                layerSampleString += "case " + i + " : frameID = texture(tileMaps[" + i + "], (tileID + 0.5) / stageSize, 0.).x;";
                layerSampleString += "break;";
            }
            layerSampleString += "}";
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$effect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Effect"].ShadersStore["spriteMap" + this.name + "PixelShader"] = shaderString.replace("#define LAYER_ID_SWITCH", layerSampleString);
        this._material = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$shaderMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderMaterial"]("spriteMap:" + this.name, this._scene, {
            vertex: "spriteMap",
            fragment: "spriteMap" + this.name
        }, {
            defines,
            attributes: [
                "position",
                "normal",
                "uv"
            ],
            uniforms: [
                "world",
                "view",
                "projection",
                "time",
                "stageSize",
                "outputSize",
                "spriteMapSize",
                "spriteCount",
                "time",
                "colorMul",
                "mousePosition",
                "curTile",
                "flipU"
            ],
            samplers: [
                "spriteSheet",
                "frameMap",
                "tileMaps",
                "animationMap"
            ],
            needAlphaBlending: true
        });
        this._time = 0;
        this._material.setFloat("spriteCount", this.spriteCount);
        this._material.setVector2("stageSize", options.stageSize);
        this._material.setVector2("outputSize", options.outputSize);
        this._material.setTexture("spriteSheet", this.spriteSheet);
        this._material.setVector2("spriteMapSize", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"](1, 1));
        this._material.setVector3("colorMul", options.colorMultiply);
        let tickSave = 0;
        const bindSpriteTexture = ()=>{
            if (this.spriteSheet && this.spriteSheet.isReady()) {
                if (this.spriteSheet._texture) {
                    this._material.setVector2("spriteMapSize", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"](this.spriteSheet._texture.baseWidth || 1, this.spriteSheet._texture.baseHeight || 1));
                    return;
                }
            }
            if (tickSave < 100) {
                setTimeout(()=>{
                    tickSave++;
                    bindSpriteTexture();
                }, 100);
            }
        };
        bindSpriteTexture();
        this._material.setVector3("colorMul", options.colorMultiply);
        this._material.setTexture("frameMap", this._frameMap);
        this._material.setTextureArray("tileMaps", this._tileMaps);
        this._material.setTexture("animationMap", this._animationMap);
        this._material.setFloat("time", this._time);
        this._output = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Meshes$2f$Builders$2f$planeBuilder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreatePlane"])(name + ":output", {
            size: 1,
            updatable: true
        }, scene);
        this._output.scaling.x = options.outputSize.x;
        this._output.scaling.y = options.outputSize.y;
        this.position = options.outputPosition;
        this.rotation = options.outputRotation;
        const obfunction = ()=>{
            this._time += this._scene.getEngine().getDeltaTime();
            this._material.setFloat("time", this._time);
        };
        this._scene.onBeforeRenderObservable.add(obfunction);
        this._output.material = this._material;
    }
    /**
     * Returns the index of the frame for a given filename
     * @param name filename of the frame
     * @returns index of the frame
     */ getTileIdxByName(name) {
        const idx = this.atlasJSON.frames.findIndex((f)=>f.filename === name);
        return idx;
    }
    /**
     * Returns tileID location
     * @returns Vector2 the cell position ID
     */ // eslint-disable-next-line @typescript-eslint/naming-convention
    getTileID() {
        const p = this.getMousePosition();
        p.multiplyInPlace(this.options.stageSize || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"].Zero());
        p.x = Math.floor(p.x);
        p.y = Math.floor(p.y);
        return p;
    }
    /**
     * Gets the UV location of the mouse over the SpriteMap.
     * @returns Vector2 the UV position of the mouse interaction
     */ getMousePosition() {
        const out = this._output;
        const pickinfo = this._scene.pick(this._scene.pointerX, this._scene.pointerY, (mesh)=>{
            if (mesh !== out) {
                return false;
            }
            return true;
        });
        if (!pickinfo || !pickinfo.hit || !pickinfo.getTextureCoordinates) {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"](-1, -1);
        }
        const coords = pickinfo.getTextureCoordinates();
        if (coords) {
            return coords;
        }
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"](-1, -1);
    }
    /**
     * Creates the "frame" texture Buffer
     * -------------------------------------
     * Structure of frames
     *  "filename": "Falling-Water-2.png",
     * "frame": {"x":69,"y":103,"w":24,"h":32},
     * "rotated": true,
     * "trimmed": true,
     * "spriteSourceSize": {"x":4,"y":0,"w":24,"h":32},
     * "sourceSize": {"w":32,"h":32}
     * @returns RawTexture of the frameMap
     */ _createFrameBuffer() {
        const data = [];
        //Do two Passes
        for(let i = 0; i < this.spriteCount; i++){
            data.push(0, 0, 0, 0); //frame
            data.push(0, 0, 0, 0); //spriteSourceSize
            data.push(0, 0, 0, 0); //sourceSize, rotated, trimmed
            data.push(0, 0, 0, 0); //Keep it pow2 cause I"m cool like that... it helps with sampling accuracy as well. Plus then we have 4 other parameters for future stuff.
        }
        //Second Pass
        for(let i = 0; i < this.spriteCount; i++){
            const f = this.sprites[i]["frame"];
            const sss = this.sprites[i]["spriteSourceSize"];
            const ss = this.sprites[i]["sourceSize"];
            const r = this.sprites[i]["rotated"] ? 1 : 0;
            const t = this.sprites[i]["trimmed"] ? 1 : 0;
            //frame
            data[i * 4] = f.x;
            data[i * 4 + 1] = f.y;
            data[i * 4 + 2] = f.w;
            data[i * 4 + 3] = f.h;
            //spriteSourceSize
            data[i * 4 + this.spriteCount * 4] = sss.x;
            data[i * 4 + 1 + this.spriteCount * 4] = sss.y;
            data[i * 4 + 3 + this.spriteCount * 4] = sss.h;
            //sourceSize, rotated, trimmed
            data[i * 4 + this.spriteCount * 8] = ss.w;
            data[i * 4 + 1 + this.spriteCount * 8] = ss.h;
            data[i * 4 + 2 + this.spriteCount * 8] = r;
            data[i * 4 + 3 + this.spriteCount * 8] = t;
        }
        const floatArray = new Float32Array(data);
        const t = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$rawTexture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RawTexture"].CreateRGBATexture(floatArray, this.spriteCount, 4, this._scene, false, false, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Texture"].NEAREST_NEAREST, 1);
        return t;
    }
    /**
     * Creates the tileMap texture Buffer
     * @param buffer normally and array of numbers, or a false to generate from scratch
     * @param _layer indicates what layer for a logic trigger dealing with the baseTile.  The system uses this
     * @returns RawTexture of the tileMap
     */ _createTileBuffer(buffer, _layer = 0) {
        let data = [];
        const _ty = this.options.stageSize.y || 0;
        const _tx = this.options.stageSize.x || 0;
        if (!buffer) {
            let bt = this.options.baseTile;
            if (_layer != 0) {
                bt = 0;
            }
            for(let y = 0; y < _ty; y++){
                for(let x = 0; x < _tx * 4; x += 4){
                    data.push(bt, 0, 0, 0);
                }
            }
        } else {
            data = buffer;
        }
        const floatArray = new Float32Array(data);
        const t = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$rawTexture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RawTexture"].CreateRGBATexture(floatArray, _tx, _ty, this._scene, false, false, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Texture"].NEAREST_NEAREST, 1);
        return t;
    }
    /**
     * Modifies the data of the tileMaps
     * @param _layer is the ID of the layer you want to edit on the SpriteMap
     * @param pos is the iVector2 Coordinates of the Tile
     * @param tile The SpriteIndex of the new Tile
     */ changeTiles(_layer = 0, pos, tile = 0) {
        const buffer = this._tileMaps[_layer]._texture._bufferView;
        if (buffer === null) {
            return;
        }
        let p = [];
        if (pos instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"]) {
            p.push(pos);
        } else {
            p = pos;
        }
        const _tx = this.options.stageSize.x || 0;
        for(let i = 0; i < p.length; i++){
            const _p = p[i];
            _p.x = Math.floor(_p.x);
            _p.y = Math.floor(_p.y);
            const id = _p.x * 4 + _p.y * (_tx * 4);
            buffer[id] = tile;
        }
        const t = this._createTileBuffer(buffer);
        this._tileMaps[_layer].dispose();
        this._tileMaps[_layer] = t;
        this._material.setTextureArray("tileMap", this._tileMaps);
    }
    /**
     * Creates the animationMap texture Buffer
     * @param buffer normally and array of numbers, or a false to generate from scratch
     * @returns RawTexture of the animationMap
     */ _createTileAnimationBuffer(buffer) {
        const data = [];
        let floatArray;
        if (!buffer) {
            for(let i = 0; i < this.spriteCount; i++){
                data.push(0, 0, 0, 0);
                let count = 1;
                while(count < (this.options.maxAnimationFrames || 4)){
                    data.push(0, 0, 0, 0);
                    count++;
                }
            }
            floatArray = new Float32Array(data);
        } else {
            floatArray = buffer;
        }
        const t = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$rawTexture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RawTexture"].CreateRGBATexture(floatArray, this.spriteCount, this.options.maxAnimationFrames || 4, this._scene, false, false, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Texture"].NEAREST_NEAREST, 1);
        return t;
    }
    /**
     * Modifies the data of the animationMap
     * @param cellID is the Index of the Sprite
     * @param _frame is the target Animation frame
     * @param toCell is the Target Index of the next frame of the animation
     * @param time is a value between 0-1 that is the trigger for when the frame should change tiles
     * @param speed is a global scalar of the time variable on the map.
     */ addAnimationToTile(cellID = 0, _frame = 0, toCell = 0, time = 0, speed = 1) {
        const buffer = this._animationMap._texture._bufferView;
        const id = cellID * 4 + this.spriteCount * 4 * _frame;
        if (!buffer) {
            return;
        }
        buffer[id] = toCell;
        buffer[id + 1] = time;
        buffer[id + 2] = speed;
        const t = this._createTileAnimationBuffer(buffer);
        this._animationMap.dispose();
        this._animationMap = t;
        this._material.setTexture("animationMap", this._animationMap);
    }
    /**
     * Exports the .tilemaps file
     */ saveTileMaps() {
        let maps = "";
        for(let i = 0; i < this._tileMaps.length; i++){
            if (i > 0) {
                maps += "\n\r";
            }
            maps += this._tileMaps[i]._texture._bufferView.toString();
        }
        const hiddenElement = document.createElement("a");
        hiddenElement.href = "data:octet/stream;charset=utf-8," + encodeURI(maps);
        hiddenElement.target = "_blank";
        hiddenElement.download = this.name + ".tilemaps";
        hiddenElement.click();
        hiddenElement.remove();
    }
    /**
     * Imports the .tilemaps file
     * @param url of the .tilemaps file
     */ loadTileMaps(url) {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        const _lc = this.options.layerCount || 0;
        xhr.onload = ()=>{
            const data = xhr.response.split("\n\r");
            for(let i = 0; i < _lc; i++){
                const d = data[i].split(",").map(Number);
                const t = this._createTileBuffer(d);
                this._tileMaps[i].dispose();
                this._tileMaps[i] = t;
            }
            this._material.setTextureArray("tileMap", this._tileMaps);
        };
        xhr.send();
    }
    /**
     * Release associated resources
     */ dispose() {
        this._output.dispose();
        this._material.dispose();
        this._animationMap.dispose();
        for (const tm of this._tileMaps){
            tm.dispose();
        }
        this._frameMap.dispose();
    }
} //# sourceMappingURL=spriteMap.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Sprites/spritePackedManager.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SpritePackedManager",
    ()=>SpritePackedManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Sprites$2f$spriteManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Sprites/spriteManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Materials/Textures/texture.js [app-ssr] (ecmascript)");
;
;
class SpritePackedManager extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Sprites$2f$spriteManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SpriteManager"] {
    /**
     * Creates a new sprite manager from a packed sprite sheet
     * @param name defines the manager's name
     * @param imgUrl defines the sprite sheet url
     * @param capacity defines the maximum allowed number of sprites
     * @param scene defines the hosting scene
     * @param spriteJSON null otherwise a JSON object defining sprite sheet data
     * @param epsilon defines the epsilon value to align texture (0.01 by default)
     * @param samplingMode defines the sampling mode to use with spritesheet
     * @param fromPacked set to true; do not alter
     * @param options options for the sprite manager
     */ constructor(/** defines the packed manager's name */ name, imgUrl, capacity, scene, spriteJSON = null, epsilon = 0.01, samplingMode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Materials$2f$Textures$2f$texture$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Texture"].TRILINEAR_SAMPLINGMODE, options){
        //the cellSize parameter is not used when built from JSON which provides individual cell data, defaults to 64 if JSON load fails
        super(name, imgUrl, capacity, 64, scene, epsilon, samplingMode, true, spriteJSON, options);
        this.name = name;
    }
} //# sourceMappingURL=spritePackedManager.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Sprites/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Sprites$2f$sprite$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Sprites/sprite.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Sprites$2f$ISprites$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Sprites/ISprites.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Sprites$2f$spriteManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Sprites/spriteManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Sprites$2f$spriteMap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Sprites/spriteMap.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Sprites$2f$spritePackedManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Sprites/spritePackedManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Sprites$2f$spriteSceneComponent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Sprites/spriteSceneComponent.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$sprites$2e$fragment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/sprites.fragment.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$sprites$2e$vertex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/sprites.vertex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$sprites$2e$fragment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/sprites.fragment.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$sprites$2e$vertex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/sprites.vertex.js [app-ssr] (ecmascript)"); //# sourceMappingURL=index.js.map
;
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
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Sprites/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sprite",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Sprites$2f$sprite$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sprite"],
    "SpriteManager",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Sprites$2f$spriteManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SpriteManager"],
    "SpriteMap",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Sprites$2f$spriteMap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SpriteMap"],
    "SpriteMapFrameRotationDirection",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Sprites$2f$spriteMap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SpriteMapFrameRotationDirection"],
    "SpritePackedManager",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Sprites$2f$spritePackedManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SpritePackedManager"],
    "SpriteSceneComponent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Sprites$2f$spriteSceneComponent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SpriteSceneComponent"],
    "spritesPixelShader",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$sprites$2e$fragment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spritesPixelShader"],
    "spritesPixelShaderWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$sprites$2e$fragment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spritesPixelShaderWGSL"],
    "spritesVertexShader",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$sprites$2e$vertex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spritesVertexShader"],
    "spritesVertexShaderWGSL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$sprites$2e$vertex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spritesVertexShaderWGSL"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Sprites$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Sprites/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Sprites$2f$sprite$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Sprites/sprite.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Sprites$2f$ISprites$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Sprites/ISprites.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Sprites$2f$spriteManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Sprites/spriteManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Sprites$2f$spriteMap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Sprites/spriteMap.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Sprites$2f$spritePackedManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Sprites/spritePackedManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Sprites$2f$spriteSceneComponent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Sprites/spriteSceneComponent.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$sprites$2e$fragment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/sprites.fragment.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Shaders$2f$sprites$2e$vertex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Shaders/sprites.vertex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$sprites$2e$fragment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/sprites.fragment.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$ShadersWGSL$2f$sprites$2e$vertex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/ShadersWGSL/sprites.vertex.js [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=dcdbf_%40babylonjs_core_Sprites_e925bbd5._.js.map