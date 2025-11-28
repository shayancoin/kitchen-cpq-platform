(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/audioEngineV2.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AudioEngineV2",
    ()=>AudioEngineV2,
    "CreateAudioBusAsync",
    ()=>CreateAudioBusAsync,
    "CreateMainAudioBusAsync",
    ()=>CreateMainAudioBusAsync,
    "CreateMicrophoneSoundSourceAsync",
    ()=>CreateMicrophoneSoundSourceAsync,
    "CreateSoundAsync",
    ()=>CreateSoundAsync,
    "CreateSoundBufferAsync",
    ()=>CreateSoundBufferAsync,
    "CreateSoundSourceAsync",
    ()=>CreateSoundSourceAsync,
    "CreateStreamingSoundAsync",
    ()=>CreateStreamingSoundAsync,
    "LastCreatedAudioEngine",
    ()=>LastCreatedAudioEngine,
    "_GetAudioEngine",
    ()=>_GetAudioEngine
]);
const Instances = [];
function LastCreatedAudioEngine() {
    if (Instances.length === 0) {
        return null;
    }
    return Instances[Instances.length - 1];
}
class AudioEngineV2 {
    constructor(options){
        /** Not owned, but all items should be in `_nodes` container, too, which is owned. */ this._mainBuses = new Set();
        this._sounds = new Set();
        this._soundsArray = null;
        /** Owned top-level sound and bus nodes. */ this._nodes = new Set();
        this._defaultMainBus = null;
        this._parameterRampDuration = 0.01;
        Instances.push(this);
        if (typeof options.parameterRampDuration === "number") {
            this.parameterRampDuration = options.parameterRampDuration;
        }
    }
    /**
     * The default main bus that will be used for audio buses and sounds if their `outBus` option is not set.
     * @see {@link IAudioBusOptions.outBus}
     * @see {@link IAbstractSoundOptions.outBus}
     */ get defaultMainBus() {
        if (this._mainBuses.size === 0) {
            return null;
        }
        if (!this._defaultMainBus) {
            this._defaultMainBus = Array.from(this._mainBuses)[0];
        }
        return this._defaultMainBus;
    }
    /**
     * The smoothing duration to use when changing audio parameters, in seconds. Defaults to `0.01` (10 milliseconds).
     */ get parameterRampDuration() {
        return this._parameterRampDuration;
    }
    set parameterRampDuration(value) {
        this._parameterRampDuration = Math.max(0, value);
    }
    /**
     * The list of static and streaming sounds created by the audio engine.
     */ get sounds() {
        if (!this._soundsArray) {
            this._soundsArray = Array.from(this._sounds);
        }
        return this._soundsArray;
    }
    /**
     * Releases associated resources.
     */ dispose() {
        if (Instances.includes(this)) {
            Instances.splice(Instances.indexOf(this), 1);
        }
        const nodeIt = this._nodes.values();
        for(let next = nodeIt.next(); !next.done; next = nodeIt.next()){
            next.value.dispose();
        }
        this._mainBuses.clear();
        this._nodes.clear();
        this._sounds.clear();
        this._disposeSoundsArray();
        this._defaultMainBus = null;
    }
    /**
     * Unlocks the audio engine if it is locked.
     * - Note that the returned promise may already be resolved if the audio engine is already unlocked.
     * @returns A promise that is resolved when the audio engine is unlocked.
     */ // eslint-disable-next-line @typescript-eslint/promise-function-async, no-restricted-syntax
    unlockAsync() {
        return this.resumeAsync();
    }
    _addMainBus(mainBus) {
        this._mainBuses.add(mainBus);
        this._addNode(mainBus);
    }
    _removeMainBus(mainBus) {
        this._mainBuses.delete(mainBus);
        this._defaultMainBus = null;
        this._removeNode(mainBus);
    }
    _addNode(node) {
        this._nodes.add(node);
    }
    _removeNode(node) {
        this._nodes.delete(node);
    }
    _addSound(sound) {
        this._disposeSoundsArray();
        this._sounds.add(sound);
        this._addNode(sound);
    }
    _removeSound(sound) {
        this._disposeSoundsArray();
        this._sounds.delete(sound);
        this._removeNode(sound);
    }
    _disposeSoundsArray() {
        if (this._soundsArray) {
            this._soundsArray.length = 0;
            this._soundsArray = null;
        }
    }
}
function _GetAudioEngine(engine) {
    if (!engine) {
        engine = LastCreatedAudioEngine();
    }
    if (engine) {
        return engine;
    }
    throw new Error("No audio engine.");
}
function CreateAudioBusAsync(name, options = {}, engine = null) {
    engine = _GetAudioEngine(engine);
    return engine.createBusAsync(name, options);
}
function CreateMainAudioBusAsync(name, options = {}, engine = null) {
    engine = _GetAudioEngine(engine);
    return engine.createMainBusAsync(name, options);
}
function CreateMicrophoneSoundSourceAsync(name, options = {}, engine = null) {
    engine = _GetAudioEngine(engine);
    return engine.createMicrophoneSoundSourceAsync(name, options);
}
function CreateSoundAsync(name, source, options = {}, engine = null) {
    engine = _GetAudioEngine(engine);
    return engine.createSoundAsync(name, source, options);
}
async function CreateSoundBufferAsync(source, options = {}, engine = null) {
    engine = _GetAudioEngine(engine);
    return await engine.createSoundBufferAsync(source, options);
}
function CreateSoundSourceAsync(name, source, options = {}, engine = null) {
    engine = _GetAudioEngine(engine);
    return engine.createSoundSourceAsync(name, source, options);
}
function CreateStreamingSoundAsync(name, source, options = {}, engine = null) {
    engine = _GetAudioEngine(engine);
    return engine.createStreamingSoundAsync(name, source, options);
} //# sourceMappingURL=audioEngineV2.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/subProperties/abstractSpatialAudioListener.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AbstractSpatialAudioListener",
    ()=>AbstractSpatialAudioListener,
    "_HasSpatialAudioListenerOptions",
    ()=>_HasSpatialAudioListenerOptions,
    "_SpatialAudioListenerDefaults",
    ()=>_SpatialAudioListenerDefaults
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
;
const _SpatialAudioListenerDefaults = {
    position: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero(),
    rotation: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero(),
    rotationQuaternion: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"]()
};
function _HasSpatialAudioListenerOptions(options) {
    return options.listenerEnabled || options.listenerMinUpdateTime !== undefined || options.listenerPosition !== undefined || options.listenerRotation !== undefined || options.listenerRotationQuaternion !== undefined;
}
class AbstractSpatialAudioListener {
} //# sourceMappingURL=abstractSpatialAudioListener.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/components/spatialAudioAttacherComponent.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_SpatialAudioAttacherComponent",
    ()=>_SpatialAudioAttacherComponent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
;
class _SpatialAudioAttacherComponent {
    /** @internal */ constructor(spatialAudioNode){
        /** @internal */ this._attachmentType = 3 /* SpatialAudioAttachmentType.PositionAndRotation */ ;
        this._position = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
        this._rotationQuaternion = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"]();
        this._sceneNode = null;
        this._useBoundingBox = false;
        /**
         * Releases associated resources.
         */ this.dispose = ()=>{
            this.detach();
        };
        this._spatialAudioNode = spatialAudioNode;
    }
    /**
     * Returns `true` if attached to a scene node; otherwise returns `false`.
     */ get isAttached() {
        return this._sceneNode !== null;
    }
    /**
     * Attaches to a scene node.
     *
     * Detaches automatically before attaching to the given scene node.
     * If `sceneNode` is `null` it is the same as calling `detach()`.
     *
     * @param sceneNode The scene node to attach to, or `null` to detach.
     * @param useBoundingBox Whether to use the scene node's bounding box for positioning. Defaults to `false`.
     * @param attachmentType Whether to attach to the scene node's position and/or rotation. Defaults to `PositionAndRotation`.
     */ attach(sceneNode, useBoundingBox, attachmentType) {
        if (this._sceneNode === sceneNode) {
            return;
        }
        this.detach();
        if (!sceneNode) {
            return;
        }
        this._attachmentType = attachmentType;
        this._sceneNode = sceneNode;
        this._sceneNode.onDisposeObservable.add(this.dispose);
        this._useBoundingBox = useBoundingBox;
    }
    /**
     * Detaches from the scene node if attached.
     */ detach() {
        this._sceneNode?.onDisposeObservable.removeCallback(this.dispose);
        this._sceneNode = null;
    }
    /**
     * Updates the position and rotation of the associated audio engine object in the audio rendering graph.
     *
     * This is called automatically by default and only needs to be called manually if automatic updates are disabled.
     */ update() {
        if (this._attachmentType & 1 /* SpatialAudioAttachmentType.Position */ ) {
            if (this._useBoundingBox && this._sceneNode.getBoundingInfo) {
                this._position.copyFrom(this._sceneNode.getBoundingInfo().boundingBox.centerWorld);
            } else {
                this._sceneNode?.getWorldMatrix().getTranslationToRef(this._position);
            }
            this._spatialAudioNode.position.copyFrom(this._position);
            this._spatialAudioNode._updatePosition();
        }
        if (this._attachmentType & 2 /* SpatialAudioAttachmentType.Rotation */ ) {
            this._sceneNode?.getWorldMatrix().decompose(undefined, this._rotationQuaternion);
            this._spatialAudioNode.rotationQuaternion.copyFrom(this._rotationQuaternion);
            this._spatialAudioNode._updateRotation();
        }
    }
} //# sourceMappingURL=spatialAudioAttacherComponent.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/subProperties/spatialAudioListener.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_SpatialAudioListener",
    ()=>_SpatialAudioListener
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$components$2f$spatialAudioAttacherComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/components/spatialAudioAttacherComponent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$abstractSpatialAudioListener$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/subProperties/abstractSpatialAudioListener.js [app-client] (ecmascript)");
;
;
class _SpatialAudioListener extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$abstractSpatialAudioListener$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AbstractSpatialAudioListener"] {
    constructor(){
        super();
        this._attacherComponent = null;
        this._attacherComponent = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$components$2f$spatialAudioAttacherComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_SpatialAudioAttacherComponent"](this);
    }
    /** @internal */ get isAttached() {
        return this._attacherComponent !== null && this._attacherComponent.isAttached;
    }
    /**
     * Attaches to a scene node.
     *
     * Detaches automatically before attaching to the given scene node.
     * If `sceneNode` is `null` it is the same as calling `detach()`.
     *
     * @param sceneNode The scene node to attach to, or `null` to detach.
     * @param useBoundingBox Whether to use the bounding box of the node for positioning. Defaults to `false`.
     * @param attachmentType Whether to attach to the node's position and/or rotation. Defaults to `PositionAndRotation`.
     */ attach(sceneNode, useBoundingBox = false, attachmentType = 3 /* SpatialAudioAttachmentType.PositionAndRotation */ ) {
        if (!this._attacherComponent) {
            this._attacherComponent = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$components$2f$spatialAudioAttacherComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_SpatialAudioAttacherComponent"](this);
        }
        this._attacherComponent.attach(sceneNode, useBoundingBox, attachmentType);
    }
    /**
     * Detaches from the scene node if attached.
     */ detach() {
        this._attacherComponent?.detach();
    }
    /** @internal */ dispose() {
        this._attacherComponent?.dispose();
        this._attacherComponent = null;
    }
    /** @internal */ setOptions(options) {
        if (options.listenerMinUpdateTime !== undefined) {
            this.minUpdateTime = options.listenerMinUpdateTime;
        }
        if (options.listenerPosition) {
            this.position = options.listenerPosition.clone();
        }
        if (options.listenerRotationQuaternion) {
            this.rotationQuaternion = options.listenerRotationQuaternion.clone();
        } else if (options.listenerRotation) {
            this.rotation = options.listenerRotation.clone();
        } else {
            this.rotationQuaternion = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$abstractSpatialAudioListener$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_SpatialAudioListenerDefaults"].rotationQuaternion.clone();
        }
        this.update();
    }
} //# sourceMappingURL=spatialAudioListener.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/webAudio/components/spatialWebAudioUpdaterComponent.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_SpatialWebAudioUpdaterComponent",
    ()=>_SpatialWebAudioUpdaterComponent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$precisionDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/precisionDate.js [app-client] (ecmascript)");
;
class _SpatialWebAudioUpdaterComponent {
    /** @internal */ constructor(parent, autoUpdate, minUpdateTime){
        this._autoUpdate = true;
        this._lastUpdateTime = 0;
        /** @internal */ this.minUpdateTime = 0;
        if (!autoUpdate) {
            return;
        }
        this.minUpdateTime = minUpdateTime;
        const update = ()=>{
            if (!this._autoUpdate) {
                return;
            }
            let skipUpdate = false;
            if (0 < this.minUpdateTime) {
                const now = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$precisionDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PrecisionDate"].Now;
                if (this._lastUpdateTime && now - this._lastUpdateTime < this.minUpdateTime) {
                    skipUpdate = true;
                }
                this._lastUpdateTime = now;
            }
            if (!skipUpdate) {
                parent.update();
            }
            requestAnimationFrame(update);
        };
        requestAnimationFrame(update);
    }
    /** @internal */ dispose() {
        this._autoUpdate = false;
    }
} //# sourceMappingURL=spatialWebAudioUpdaterComponent.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/audioUtils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_CleanUrl",
    ()=>_CleanUrl,
    "_FileExtensionRegex",
    ()=>_FileExtensionRegex,
    "_GetAudioParamCurveValues",
    ()=>_GetAudioParamCurveValues
]);
const _FileExtensionRegex = new RegExp("\\.(\\w{3,4})($|\\?)");
const CurveLength = 100;
const TmpLineValues = new Float32Array([
    0,
    0
]);
let TmpCurveValues = null;
let ExpCurve = null;
let LogCurve = null;
/**
 * @returns A Float32Array representing an exponential ramp from (0, 0) to (1, 1).
 */ function GetExpCurve() {
    if (!ExpCurve) {
        ExpCurve = new Float32Array(CurveLength);
        const increment = 1 / (CurveLength - 1);
        let x = increment;
        for(let i = 1; i < CurveLength; i++){
            ExpCurve[i] = Math.exp(-11.512925464970227 * (1 - x));
            x += increment;
        }
    }
    return ExpCurve;
}
/**
 * @returns A Float32Array representing a logarithmic ramp from (0, 0) to (1, 1).
 */ function GetLogCurve() {
    if (!LogCurve) {
        LogCurve = new Float32Array(CurveLength);
        const increment = 1 / CurveLength;
        let x = increment;
        for(let i = 0; i < CurveLength; i++){
            LogCurve[i] = 1 + Math.log10(x) / Math.log10(CurveLength);
            x += increment;
        }
    }
    return LogCurve;
}
function _GetAudioParamCurveValues(shape, from, to) {
    if (!TmpCurveValues) {
        TmpCurveValues = new Float32Array(CurveLength);
    }
    let normalizedCurve;
    if (shape === "linear" /* AudioParameterRampShape.Linear */ ) {
        TmpLineValues[0] = from;
        TmpLineValues[1] = to;
        return TmpLineValues;
    } else if (shape === "exponential" /* AudioParameterRampShape.Exponential */ ) {
        normalizedCurve = GetExpCurve();
    } else if (shape === "logarithmic" /* AudioParameterRampShape.Logarithmic */ ) {
        normalizedCurve = GetLogCurve();
    } else {
        throw new Error(`Unknown ramp shape: ${shape}`);
    }
    const direction = Math.sign(to - from);
    const range = Math.abs(to - from);
    if (direction === 1) {
        for(let i = 0; i < normalizedCurve.length; i++){
            TmpCurveValues[i] = from + range * normalizedCurve[i];
        }
    } else {
        let j = CurveLength - 1;
        for(let i = 0; i < normalizedCurve.length; i++, j--){
            TmpCurveValues[i] = from - range * (1 - normalizedCurve[j]);
        }
    }
    return TmpCurveValues;
}
function _CleanUrl(url) {
    return url.replace(/#/gm, "%23");
} //# sourceMappingURL=audioUtils.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/webAudio/components/webAudioParameterComponent.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_WebAudioParameterComponent",
    ()=>_WebAudioParameterComponent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$audioUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/audioUtils.js [app-client] (ecmascript)");
;
/**
 * Minimum duration in seconds for a ramp to be considered valid.
 *
 * If the duration is less than this value, the value will be set immediately instead of being ramped smoothly since
 * there is no perceptual difference for such short durations, so a ramp is not needed.
 */ const MinRampDuration = 0.000001;
class _WebAudioParameterComponent {
    /** @internal */ constructor(engine, param){
        this._rampEndTime = 0;
        this._engine = engine;
        this._param = param;
        this._targetValue = param.value;
    }
    /** @internal */ get isRamping() {
        return this._engine.currentTime < this._rampEndTime;
    }
    /** @internal */ get targetValue() {
        return this._targetValue;
    }
    set targetValue(value) {
        this.setTargetValue(value);
    }
    /** @internal */ get value() {
        return this._param.value;
    }
    /** @internal */ dispose() {
        this._param = null;
        this._engine = null;
    }
    /**
     * Sets the target value of the audio parameter with an optional ramping duration and shape.
     *
     * @internal
     */ setTargetValue(value, options = null) {
        const shape = typeof options?.shape === "string" ? options.shape : "linear" /* AudioParameterRampShape.Linear */ ;
        const startTime = this._engine.currentTime;
        if (shape === "none" /* AudioParameterRampShape.None */ ) {
            this._param.cancelScheduledValues(startTime);
            this._param.value = this._targetValue = value;
            this._rampEndTime = startTime;
            return;
        }
        let duration = typeof options?.duration === "number" ? Math.max(options.duration, this._engine.parameterRampDuration) : this._engine.parameterRampDuration;
        if ((duration = Math.max(this._engine.parameterRampDuration, duration)) < MinRampDuration) {
            this._param.setValueAtTime(this._targetValue = value, startTime);
            return;
        }
        this._param.cancelScheduledValues(startTime);
        this._param.setValueCurveAtTime((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$audioUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_GetAudioParamCurveValues"])(shape, this._param.value, this._targetValue = value), startTime, duration);
        this._rampEndTime = startTime + duration;
    }
} //# sourceMappingURL=webAudioParameterComponent.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/webAudio/subProperties/spatialWebAudioListener.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_CreateSpatialAudioListener",
    ()=>_CreateSpatialAudioListener
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$spatialAudioListener$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/subProperties/spatialAudioListener.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$components$2f$spatialWebAudioUpdaterComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/webAudio/components/spatialWebAudioUpdaterComponent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$components$2f$webAudioParameterComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/webAudio/components/webAudioParameterComponent.js [app-client] (ecmascript)");
;
;
;
;
const TmpMatrix = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].Zero();
const TmpQuaternion = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"]();
const TmpVector1 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
const TmpVector2 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
function _CreateSpatialAudioListener(engine, autoUpdate, minUpdateTime) {
    const listener = engine._audioContext.listener;
    if (listener.forwardX && listener.forwardY && listener.forwardZ && listener.positionX && listener.positionY && listener.positionZ && listener.upX && listener.upY && listener.upZ) {
        return new _SpatialWebAudioListener(engine, autoUpdate, minUpdateTime);
    } else {
        return new _SpatialWebAudioListenerFallback(engine, autoUpdate, minUpdateTime);
    }
}
class _AbstractSpatialWebAudioListener extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$spatialAudioListener$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_SpatialAudioListener"] {
    /** @internal */ constructor(engine, autoUpdate, minUpdateTime){
        super();
        this._lastPosition = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        this._lastRotation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        this._lastRotationQuaternion = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"]();
        /** @internal */ this.position = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        /** @internal */ this.rotation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        /** @internal */ this.rotationQuaternion = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"]();
        this._listener = engine._audioContext.listener;
        this.engine = engine;
        this._updaterComponent = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$components$2f$spatialWebAudioUpdaterComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_SpatialWebAudioUpdaterComponent"](this, autoUpdate, minUpdateTime);
    }
    /** @internal */ dispose() {
        super.dispose();
        this._updaterComponent.dispose();
        this._updaterComponent = null;
    }
    /** @internal */ get minUpdateTime() {
        return this._updaterComponent.minUpdateTime;
    }
    /** @internal */ set minUpdateTime(value) {
        this._updaterComponent.minUpdateTime = value;
    }
    /** @internal */ update() {
        if (this.isAttached) {
            this._attacherComponent?.update();
        } else {
            this._updatePosition();
            this._updateRotation();
        }
    }
    _updatePosition() {
        if (this._lastPosition.equalsWithEpsilon(this.position)) {
            return;
        }
        this._setWebAudioPosition(this.position);
        this._lastPosition.copyFrom(this.position);
    }
    _updateRotation() {
        if (!this._lastRotationQuaternion.equalsWithEpsilon(this.rotationQuaternion)) {
            TmpQuaternion.copyFrom(this.rotationQuaternion);
            this._lastRotationQuaternion.copyFrom(this.rotationQuaternion);
        } else if (!this._lastRotation.equalsWithEpsilon(this.rotation)) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].FromEulerAnglesToRef(this.rotation.x, this.rotation.y, this.rotation.z, TmpQuaternion);
            this._lastRotation.copyFrom(this.rotation);
        } else {
            return;
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].FromQuaternionToRef(TmpQuaternion, TmpMatrix);
        // NB: The WebAudio API is right-handed.
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].TransformNormalToRef(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].RightHandedForwardReadOnly, TmpMatrix, TmpVector1);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].TransformNormalToRef(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Up(), TmpMatrix, TmpVector2);
        this._setWebAudioOrientation(TmpVector1, TmpVector2);
    }
}
/**
 * Full-featured spatial audio listener for the Web Audio API.
 *
 * Used in browsers that support the `forwardX/Y/Z`, `positionX/Y/Z`, and `upX/Y/Z` properties on the AudioContext listener.
 *
 * NB: Firefox falls back to using this implementation.
 *
 * @see _SpatialWebAudioListenerFallback for the implementation used if only `setPosition` and `setOrientation` are available.
 *
 * NB: This sub property is not backed by a sub node and all properties are set directly on the audio context listener.
 *
 * @internal
 */ class _SpatialWebAudioListener extends _AbstractSpatialWebAudioListener {
    constructor(engine, autoUpdate, minUpdateTime){
        super(engine, autoUpdate, minUpdateTime);
        const listener = engine._audioContext.listener;
        this._forwardX = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$components$2f$webAudioParameterComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_WebAudioParameterComponent"](engine, listener.forwardX);
        this._forwardY = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$components$2f$webAudioParameterComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_WebAudioParameterComponent"](engine, listener.forwardY);
        this._forwardZ = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$components$2f$webAudioParameterComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_WebAudioParameterComponent"](engine, listener.forwardZ);
        this._positionX = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$components$2f$webAudioParameterComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_WebAudioParameterComponent"](engine, listener.positionX);
        this._positionY = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$components$2f$webAudioParameterComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_WebAudioParameterComponent"](engine, listener.positionY);
        this._positionZ = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$components$2f$webAudioParameterComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_WebAudioParameterComponent"](engine, listener.positionZ);
        this._upX = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$components$2f$webAudioParameterComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_WebAudioParameterComponent"](engine, listener.upX);
        this._upY = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$components$2f$webAudioParameterComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_WebAudioParameterComponent"](engine, listener.upY);
        this._upZ = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$components$2f$webAudioParameterComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_WebAudioParameterComponent"](engine, listener.upZ);
    }
    _setWebAudioPosition(position) {
        // If attached and there is a ramp in progress, we assume another update is coming soon that we can wait for.
        // We don't do this for unattached nodes because there may not be another update coming.
        if (this.isAttached && (this._positionX.isRamping || this._positionY.isRamping || this._positionZ.isRamping)) {
            return;
        }
        this._positionX.targetValue = position.x;
        this._positionY.targetValue = position.y;
        this._positionZ.targetValue = position.z;
    }
    _setWebAudioOrientation(forward, up) {
        // If attached and there is a ramp in progress, we assume another update is coming soon that we can wait for.
        // We don't do this for unattached nodes because there may not be another update coming.
        if (this.isAttached && (this._forwardX.isRamping || this._forwardY.isRamping || this._forwardZ.isRamping || this._upX.isRamping || this._upY.isRamping || this._upZ.isRamping)) {
            return;
        }
        this._forwardX.targetValue = forward.x;
        this._forwardY.targetValue = forward.y;
        this._forwardZ.targetValue = forward.z;
        this._upX.targetValue = up.x;
        this._upY.targetValue = up.y;
        this._upZ.targetValue = up.z;
    }
}
/**
 * Fallback spatial audio listener for the Web Audio API.
 *
 * Used in browsers that do not support the `forwardX/Y/Z`, `positionX/Y/Z`, and `upX/Y/Z` properties on the
 * AudioContext listener.
 *
 * @see _SpatialWebAudioListener for the implementation used if the `forwardX/Y/Z`, `positionX/Y/Z`, and `upX/Y/Z`
 * properties are available.
 *
 * NB: This sub property is not backed by a sub node and all properties are set directly on the audio context listener.
 *
 * @internal
 */ class _SpatialWebAudioListenerFallback extends _AbstractSpatialWebAudioListener {
    _setWebAudioPosition(position) {
        this._listener.setPosition(position.x, position.y, position.z);
    }
    _setWebAudioOrientation(forward, up) {
        this._listener.setOrientation(forward.x, forward.y, forward.z, up.x, up.y, up.z);
    }
} //# sourceMappingURL=spatialWebAudioListener.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/abstractAudioNode.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AbstractAudioNode",
    ()=>AbstractAudioNode,
    "AbstractNamedAudioNode",
    ()=>AbstractNamedAudioNode,
    "AudioNodeType",
    ()=>AudioNodeType
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-client] (ecmascript)");
;
var AudioNodeType;
(function(AudioNodeType) {
    AudioNodeType[AudioNodeType["HAS_INPUTS"] = 1] = "HAS_INPUTS";
    AudioNodeType[AudioNodeType["HAS_OUTPUTS"] = 2] = "HAS_OUTPUTS";
    AudioNodeType[AudioNodeType["HAS_INPUTS_AND_OUTPUTS"] = 3] = "HAS_INPUTS_AND_OUTPUTS";
})(AudioNodeType || (AudioNodeType = {}));
class AbstractAudioNode {
    constructor(engine, nodeType){
        /**
         * Observable for when the audio node is disposed.
         */ this.onDisposeObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        this.engine = engine;
        if (nodeType & 1 /* AudioNodeType.HAS_INPUTS */ ) {
            this._upstreamNodes = new Set();
        }
        if (nodeType & 2 /* AudioNodeType.HAS_OUTPUTS */ ) {
            this._downstreamNodes = new Set();
        }
    }
    /**
     * Releases associated resources.
     * - Triggers `onDisposeObservable`.
     * @see {@link onDisposeObservable}
     */ dispose() {
        if (this._downstreamNodes) {
            for (const node of Array.from(this._downstreamNodes)){
                if (!this._disconnect(node)) {
                    throw new Error("Disconnect failed");
                }
            }
            this._downstreamNodes.clear();
        }
        if (this._upstreamNodes) {
            for (const node of Array.from(this._upstreamNodes)){
                if (!node._disconnect(this)) {
                    throw new Error("Disconnect failed");
                }
            }
            this._upstreamNodes.clear();
        }
        this.onDisposeObservable.notifyObservers(this);
        this.onDisposeObservable.clear();
    }
    /**
     * Connect to a downstream audio input node.
     * @param node - The downstream audio input node to connect
     * @returns `true` if the node is successfully connected; otherwise `false`
     */ _connect(node) {
        if (!this._downstreamNodes) {
            return false;
        }
        if (this._downstreamNodes.has(node)) {
            return false;
        }
        if (!node._onConnect(this)) {
            return false;
        }
        this._downstreamNodes.add(node);
        return true;
    }
    /**
     * Disconnects a downstream audio input node.
     * @param node - The downstream audio input node to disconnect
     * @returns `true` if the node is successfully disconnected; otherwise `false`
     */ _disconnect(node) {
        if (!this._downstreamNodes) {
            return false;
        }
        if (!this._downstreamNodes.delete(node)) {
            return false;
        }
        return node._onDisconnect(this);
    }
    /**
     * Called when an upstream audio output node is connecting.
     * @param node - The connecting upstream audio node
     * @returns `true` if the node is successfully connected; otherwise `false`
     */ _onConnect(node) {
        if (!this._upstreamNodes) {
            return false;
        }
        if (this._upstreamNodes.has(node)) {
            return false;
        }
        this._upstreamNodes.add(node);
        return true;
    }
    /**
     * Called when an upstream audio output node disconnects.
     * @param node - The disconnecting upstream audio node
     * @returns `true` if node is sucessfully disconnected; otherwise `false`
     */ _onDisconnect(node) {
        return this._upstreamNodes?.delete(node) ?? false;
    }
}
class AbstractNamedAudioNode extends AbstractAudioNode {
    constructor(name, engine, nodeType){
        super(engine, nodeType);
        /**
         * Observable for when the audio node is renamed.
         */ this.onNameChangedObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        this._name = name;
    }
    /**
     * The name of the audio node.
     * - Triggers `onNameChangedObservable` when changed.
     * @see {@link onNameChangedObservable}
     */ get name() {
        return this._name;
    }
    set name(newName) {
        if (this._name === newName) {
            return;
        }
        const oldName = this._name;
        this._name = newName;
        this.onNameChangedObservable.notifyObservers({
            newName,
            oldName,
            node: this
        });
    }
    dispose() {
        super.dispose();
        this.onNameChangedObservable.clear();
    }
} //# sourceMappingURL=abstractAudioNode.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/mainAudioOut.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_MainAudioOut",
    ()=>_MainAudioOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$abstractAudioNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/abstractAudioNode.js [app-client] (ecmascript)");
;
class _MainAudioOut extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$abstractAudioNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AbstractAudioNode"] {
    constructor(engine){
        super(engine, 1 /* AudioNodeType.HAS_INPUTS */ );
    }
} //# sourceMappingURL=mainAudioOut.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/webAudio/webAudioMainOut.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_WebAudioMainOut",
    ()=>_WebAudioMainOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$mainAudioOut$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/mainAudioOut.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$components$2f$webAudioParameterComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/webAudio/components/webAudioParameterComponent.js [app-client] (ecmascript)");
;
;
class _WebAudioMainOut extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$mainAudioOut$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_MainAudioOut"] {
    /** @internal */ constructor(engine){
        super(engine);
        this._setGainNode(new GainNode(engine._audioContext));
    }
    /** @internal */ dispose() {
        super.dispose();
        this._volume.dispose();
        this._gainNode.disconnect();
        this._destinationNode.disconnect();
    }
    /** @internal */ get _inNode() {
        return this._gainNode;
    }
    set _inNode(value) {
        if (this._gainNode === value) {
            return;
        }
        this._setGainNode(value);
    }
    /** @internal */ get volume() {
        return this._volume.targetValue;
    }
    /** @internal */ set volume(value) {
        this._volume.targetValue = value;
    }
    get _destinationNode() {
        return this.engine._audioDestination;
    }
    /** @internal */ getClassName() {
        return "_WebAudioMainOut";
    }
    /** @internal */ setVolume(value, options = null) {
        this._volume.setTargetValue(value, options);
    }
    _setGainNode(gainNode) {
        if (this._gainNode === gainNode) {
            return;
        }
        this._gainNode?.disconnect();
        gainNode.connect(this._destinationNode);
        this._volume = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$components$2f$webAudioParameterComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_WebAudioParameterComponent"](this.engine, gainNode.gain);
        this._gainNode = gainNode;
    }
} //# sourceMappingURL=webAudioMainOut.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/webAudio/webAudioUnmuteUI.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_WebAudioUnmuteUI",
    ()=>_WebAudioUnmuteUI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/engineStore.js [app-client] (ecmascript)");
;
class _WebAudioUnmuteUI {
    /** @internal */ constructor(engine, parentElement){
        this._button = null;
        this._enabled = true;
        this._style = null;
        this._onStateChanged = ()=>{
            if (!this._button) {
                return;
            }
            if (this._engine.state === "running") {
                this._hide();
            } else {
                this._show();
            }
        };
        this._engine = engine;
        const parent = parentElement || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EngineStore"].LastCreatedEngine?.getInputElement()?.parentElement || document.body;
        const top = (parent?.offsetTop || 0) + 20;
        this._style = document.createElement("style");
        this._style.appendChild(document.createTextNode(`.babylonUnmute{position:absolute;top:${top}px;margin-left:20px;height:40px;width:60px;background-color:rgba(51,51,51,0.7);background-image:url("data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2239%22%20height%3D%2232%22%20viewBox%3D%220%200%2039%2032%22%3E%3Cpath%20fill%3D%22white%22%20d%3D%22M9.625%2018.938l-0.031%200.016h-4.953q-0.016%200-0.031-0.016v-12.453q0-0.016%200.031-0.016h4.953q0.031%200%200.031%200.016v12.453zM12.125%207.688l8.719-8.703v27.453l-8.719-8.719-0.016-0.047v-9.938zM23.359%207.875l1.406-1.406%204.219%204.203%204.203-4.203%201.422%201.406-4.219%204.219%204.219%204.203-1.484%201.359-4.141-4.156-4.219%204.219-1.406-1.422%204.219-4.203z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E");background-size:80%;background-repeat:no-repeat;background-position:center;background-position-y:4px;border:none;outline:none;transition:transform 0.125s ease-out;cursor:pointer;z-index:9999;}.babylonUnmute:hover{transform:scale(1.05)}`));
        document.head.appendChild(this._style);
        this._button = document.createElement("button");
        this._button.className = "babylonUnmute";
        this._button.id = "babylonUnmuteButton";
        this._button.addEventListener("click", ()=>{
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            this._engine.unlockAsync();
        });
        parent.appendChild(this._button);
        this._engine.stateChangedObservable.add(this._onStateChanged);
    }
    /** @internal */ dispose() {
        this._button?.remove();
        this._button = null;
        this._style?.remove();
        this._style = null;
        this._engine.stateChangedObservable.removeCallback(this._onStateChanged);
    }
    /** @internal */ get enabled() {
        return this._enabled;
    }
    set enabled(value) {
        this._enabled = value;
        if (value) {
            if (this._engine.state !== "running") {
                this._show();
            }
        } else {
            this._hide();
        }
    }
    _show() {
        if (!this._button || !this._enabled) {
            return;
        }
        this._button.style.display = "block";
    }
    _hide() {
        if (!this._button) {
            return;
        }
        this._button.style.display = "none";
    }
} //# sourceMappingURL=webAudioUnmuteUI.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/webAudio/webAudioEngine.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CreateAudioEngineAsync",
    ()=>CreateAudioEngineAsync,
    "_WebAudioEngine",
    ()=>_WebAudioEngine
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$audioEngineV2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/audioEngineV2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$abstractSpatialAudioListener$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/subProperties/abstractSpatialAudioListener.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$subProperties$2f$spatialWebAudioListener$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/webAudio/subProperties/spatialWebAudioListener.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$webAudioMainOut$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/webAudio/webAudioMainOut.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$webAudioUnmuteUI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/webAudio/webAudioUnmuteUI.js [app-client] (ecmascript)");
;
;
;
;
;
;
async function CreateAudioEngineAsync(options = {}) {
    const engine = new _WebAudioEngine(options);
    await engine._initAsync(options);
    return engine;
}
const FormatMimeTypes = {
    aac: "audio/aac",
    ac3: "audio/ac3",
    flac: "audio/flac",
    m4a: "audio/mp4",
    mp3: 'audio/mpeg; codecs="mp3"',
    mp4: "audio/mp4",
    ogg: 'audio/ogg; codecs="vorbis"',
    wav: "audio/wav",
    webm: 'audio/webm; codecs="vorbis"'
};
class _WebAudioEngine extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$audioEngineV2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AudioEngineV2"] {
    /** @internal */ constructor(options = {}){
        super(options);
        this._audioContextStarted = false;
        this._destinationNode = null;
        this._invalidFormats = new Set();
        this._isUpdating = false;
        this._listener = null;
        this._listenerAutoUpdate = true;
        this._listenerMinUpdateTime = 0;
        this._pauseCalled = false;
        this._resumeOnInteraction = true;
        this._resumeOnPause = true;
        this._resumeOnPauseRetryInterval = 1000;
        this._resumeOnPauseTimerId = null;
        this._resumePromise = null;
        this._silentHtmlAudio = null;
        this._unmuteUI = null;
        this._updateObservable = null;
        this._validFormats = new Set();
        this._volume = 1;
        /** @internal */ this._isUsingOfflineAudioContext = false;
        /** @internal */ this.isReadyPromise = new Promise((resolve)=>{
            this._resolveIsReadyPromise = resolve;
        });
        /** @internal */ this.stateChangedObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        /** @internal */ this.userGestureObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        this._initAudioContextAsync = async ()=>{
            this._audioContext.addEventListener("statechange", this._onAudioContextStateChange);
            this._mainOut = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$webAudioMainOut$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_WebAudioMainOut"](this);
            this._mainOut.volume = this._volume;
            await this.createMainBusAsync("default");
        };
        this._onAudioContextStateChange = ()=>{
            if (this.state === "running") {
                clearInterval(this._resumeOnPauseTimerId);
                this._audioContextStarted = true;
                this._resumePromise = null;
            }
            if (this.state === "suspended" || this.state === "interrupted") {
                if (this._audioContextStarted && this._resumeOnPause && !this._pauseCalled) {
                    clearInterval(this._resumeOnPauseTimerId);
                    this._resumeOnPauseTimerId = setInterval(()=>{
                        // eslint-disable-next-line @typescript-eslint/no-floating-promises
                        this.resumeAsync();
                    }, this._resumeOnPauseRetryInterval);
                }
            }
            this.stateChangedObservable.notifyObservers(this.state);
        };
        this._onUserGestureAsync = async ()=>{
            if (this._resumeOnInteraction) {
                await this._audioContext.resume();
            }
            // On iOS the ringer switch must be turned on for WebAudio to play.
            // This gets WebAudio to play with the ringer switch turned off by playing an HTMLAudioElement.
            if (!this._silentHtmlAudio) {
                this._silentHtmlAudio = document.createElement("audio");
                const audio = this._silentHtmlAudio;
                audio.controls = false;
                audio.preload = "auto";
                audio.loop = true;
                // Wave data for 0.0001 seconds of silence.
                audio.src = "data:audio/wav;base64,UklGRjAAAABXQVZFZm10IBAAAAABAAEAgLsAAAB3AQACABAAZGF0YQwAAAAAAAEA/v8CAP//AQA=";
                // eslint-disable-next-line @typescript-eslint/no-floating-promises
                audio.play();
            }
            this.userGestureObservable.notifyObservers();
        };
        this._startUpdating = ()=>{
            if (this._isUpdating) {
                return;
            }
            this._isUpdating = true;
            if (this.state === "running") {
                this._update();
            } else {
                const callback = ()=>{
                    if (this.state === "running") {
                        this._update();
                        this.stateChangedObservable.removeCallback(callback);
                    }
                };
                this.stateChangedObservable.add(callback);
            }
        };
        this._update = ()=>{
            if (this._updateObservable?.hasObservers()) {
                this._updateObservable.notifyObservers();
                requestAnimationFrame(this._update);
            } else {
                this._isUpdating = false;
            }
        };
        if (typeof options.listenerAutoUpdate === "boolean") {
            this._listenerAutoUpdate = options.listenerAutoUpdate;
        }
        if (typeof options.listenerMinUpdateTime === "number") {
            this._listenerMinUpdateTime = options.listenerMinUpdateTime;
        }
        this._volume = options.volume ?? 1;
        if (options.audioContext) {
            this._isUsingOfflineAudioContext = options.audioContext instanceof OfflineAudioContext;
            this._audioContext = options.audioContext;
        } else {
            this._audioContext = new AudioContext();
        }
        if (!options.disableDefaultUI) {
            this._unmuteUI = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$webAudioUnmuteUI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_WebAudioUnmuteUI"](this, options.defaultUIParentElement);
        }
    }
    /** @internal */ async _initAsync(options) {
        this._resumeOnInteraction = typeof options.resumeOnInteraction === "boolean" ? options.resumeOnInteraction : true;
        this._resumeOnPause = typeof options.resumeOnPause === "boolean" ? options.resumeOnPause : true;
        this._resumeOnPauseRetryInterval = options.resumeOnPauseRetryInterval ?? 1000;
        document.addEventListener("click", this._onUserGestureAsync);
        await this._initAudioContextAsync();
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$abstractSpatialAudioListener$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_HasSpatialAudioListenerOptions"])(options)) {
            this._listener = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$subProperties$2f$spatialWebAudioListener$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_CreateSpatialAudioListener"])(this, this._listenerAutoUpdate, this._listenerMinUpdateTime);
            this._listener.setOptions(options);
        }
        this._resolveIsReadyPromise();
    }
    /** @internal */ get currentTime() {
        return this._audioContext.currentTime ?? 0;
    }
    /** @internal */ get _inNode() {
        return this._audioContext.destination;
    }
    /** @internal */ get mainOut() {
        return this._mainOut;
    }
    /** @internal */ get listener() {
        return this._listener ?? (this._listener = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$subProperties$2f$spatialWebAudioListener$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_CreateSpatialAudioListener"])(this, this._listenerAutoUpdate, this._listenerMinUpdateTime));
    }
    /** @internal */ get state() {
        // Always return "running" for OfflineAudioContext so sound `play` calls work while the context is suspended.
        return this._isUsingOfflineAudioContext ? "running" : this._audioContext.state;
    }
    /** @internal */ get volume() {
        return this._volume;
    }
    /** @internal */ set volume(value) {
        if (this._volume === value) {
            return;
        }
        this._volume = value;
        if (this._mainOut) {
            this._mainOut.volume = value;
        }
    }
    /**
     * This property should only be used by the legacy audio engine.
     * @internal
     * */ get _audioDestination() {
        return this._destinationNode ? this._destinationNode : this._destinationNode = this._audioContext.destination;
    }
    set _audioDestination(value) {
        this._destinationNode = value;
    }
    /**
     * This property should only be used by the legacy audio engine.
     * @internal
     */ get _unmuteUIEnabled() {
        return this._unmuteUI ? this._unmuteUI.enabled : false;
    }
    set _unmuteUIEnabled(value) {
        if (this._unmuteUI) {
            this._unmuteUI.enabled = value;
        }
    }
    /** @internal */ async createBusAsync(name, options = {}) {
        const module = await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/webAudio/webAudioBus.js [app-client] (ecmascript, async loader)");
        const bus = new module._WebAudioBus(name, this, options);
        await bus._initAsync(options);
        return bus;
    }
    /** @internal */ async createMainBusAsync(name, options = {}) {
        const module = await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/webAudio/webAudioMainBus.js [app-client] (ecmascript, async loader)");
        const bus = new module._WebAudioMainBus(name, this);
        await bus._initAsync(options);
        return bus;
    }
    /** @internal */ async createMicrophoneSoundSourceAsync(name, options) {
        let mediaStream;
        try {
            mediaStream = await navigator.mediaDevices.getUserMedia({
                audio: true
            });
        } catch (e) {
            throw new Error("Unable to access microphone: " + e);
        }
        return await this.createSoundSourceAsync(name, new MediaStreamAudioSourceNode(this._audioContext, {
            mediaStream
        }), {
            outBusAutoDefault: false,
            ...options
        });
    }
    /** @internal */ async createSoundAsync(name, source, options = {}) {
        const module = await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/webAudio/webAudioStaticSound.js [app-client] (ecmascript, async loader)");
        const sound = new module._WebAudioStaticSound(name, this, options);
        await sound._initAsync(source, options);
        return sound;
    }
    /** @internal */ async createSoundBufferAsync(source, options = {}) {
        const module = await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/webAudio/webAudioStaticSound.js [app-client] (ecmascript, async loader)");
        const soundBuffer = new module._WebAudioStaticSoundBuffer(this);
        await soundBuffer._initAsync(source, options);
        return soundBuffer;
    }
    /** @internal */ async createSoundSourceAsync(name, source, options = {}) {
        const module = await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/webAudio/webAudioSoundSource.js [app-client] (ecmascript, async loader)");
        const soundSource = new module._WebAudioSoundSource(name, source, this, options);
        await soundSource._initAsync(options);
        return soundSource;
    }
    /** @internal */ async createStreamingSoundAsync(name, source, options = {}) {
        const module = await __turbopack_context__.A("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/webAudio/webAudioStreamingSound.js [app-client] (ecmascript, async loader)");
        const sound = new module._WebAudioStreamingSound(name, this, options);
        await sound._initAsync(source, options);
        return sound;
    }
    /** @internal */ dispose() {
        super.dispose();
        this._listener?.dispose();
        this._listener = null;
        // Note that OfflineAudioContext does not have a `close` method.
        if (this._audioContext.state !== "closed" && !this._isUsingOfflineAudioContext) {
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            this._audioContext.close();
        }
        document.removeEventListener("click", this._onUserGestureAsync);
        this._audioContext.removeEventListener("statechange", this._onAudioContextStateChange);
        this._silentHtmlAudio?.remove();
        this._updateObservable?.clear();
        this._updateObservable = null;
        this._unmuteUI?.dispose();
        this._unmuteUI = null;
        this.stateChangedObservable.clear();
    }
    /** @internal */ flagInvalidFormat(format) {
        this._invalidFormats.add(format);
    }
    /** @internal */ isFormatValid(format) {
        if (this._validFormats.has(format)) {
            return true;
        }
        if (this._invalidFormats.has(format)) {
            return false;
        }
        const mimeType = FormatMimeTypes[format];
        if (mimeType === undefined) {
            return false;
        }
        const audio = new Audio();
        if (audio.canPlayType(mimeType) === "") {
            this._invalidFormats.add(format);
            return false;
        }
        this._validFormats.add(format);
        return true;
    }
    /** @internal */ async pauseAsync() {
        await this._audioContext.suspend();
        this._pauseCalled = true;
    }
    /** @internal */ // eslint-disable-next-line @typescript-eslint/promise-function-async, no-restricted-syntax
    resumeAsync() {
        this._pauseCalled = false;
        if (this._resumePromise) {
            return this._resumePromise;
        }
        this._resumePromise = this._audioContext.resume();
        return this._resumePromise;
    }
    /** @internal */ setVolume(value, options = null) {
        if (this._mainOut) {
            this._mainOut.setVolume(value, options);
        } else {
            throw new Error("Main output not initialized yet.");
        }
    }
    /** @internal */ _addMainBus(mainBus) {
        super._addMainBus(mainBus);
    }
    /** @internal */ _removeMainBus(mainBus) {
        super._removeMainBus(mainBus);
    }
    /** @internal */ _addNode(node) {
        super._addNode(node);
    }
    /** @internal */ _removeNode(node) {
        super._removeNode(node);
    }
    /** @internal */ _addSound(sound) {
        super._addSound(sound);
    }
    /** @internal */ _removeSound(sound) {
        super._removeSound(sound);
    }
    /** @internal */ _addUpdateObserver(callback) {
        if (!this._updateObservable) {
            this._updateObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        }
        this._updateObservable.add(callback);
        this._startUpdating();
    }
    _removeUpdateObserver(callback) {
        if (this._updateObservable) {
            this._updateObservable.removeCallback(callback);
        }
    }
} //# sourceMappingURL=webAudioEngine.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/subNodes/abstractAudioSubNode.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_AbstractAudioSubNode",
    ()=>_AbstractAudioSubNode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$abstractAudioNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/abstractAudioNode.js [app-client] (ecmascript)");
;
class _AbstractAudioSubNode extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$abstractAudioNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AbstractNamedAudioNode"] {
    /** @internal */ constructor(name, engine){
        super(name, engine, 3 /* AudioNodeType.HAS_INPUTS_AND_OUTPUTS */ );
    }
    /** @internal */ connect(node) {
        if (!this._connect(node)) {
            throw new Error("Connect failed");
        }
    }
    /** @internal */ disconnect(node) {
        if (!this._disconnect(node)) {
            throw new Error("Disconnect failed");
        }
    }
    /** @internal */ disconnectAll() {
        if (!this._downstreamNodes) {
            throw new Error("Disconnect failed");
        }
        const it = this._downstreamNodes.values();
        for(let next = it.next(); !next.done; next = it.next()){
            if (!this._disconnect(next.value)) {
                throw new Error("Disconnect failed");
            }
        }
    }
} //# sourceMappingURL=abstractAudioSubNode.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/subNodes/volumeAudioSubNode.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_GetVolumeAudioProperty",
    ()=>_GetVolumeAudioProperty,
    "_GetVolumeAudioSubNode",
    ()=>_GetVolumeAudioSubNode,
    "_VolumeAudioDefaults",
    ()=>_VolumeAudioDefaults,
    "_VolumeAudioSubNode",
    ()=>_VolumeAudioSubNode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subNodes$2f$abstractAudioSubNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/subNodes/abstractAudioSubNode.js [app-client] (ecmascript)");
;
const _VolumeAudioDefaults = {
    volume: 1
};
class _VolumeAudioSubNode extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subNodes$2f$abstractAudioSubNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_AbstractAudioSubNode"] {
    constructor(engine){
        super("Volume" /* AudioSubNode.VOLUME */ , engine);
    }
    /** @internal */ setOptions(options) {
        this.setVolume(options.volume ?? _VolumeAudioDefaults.volume, {
            shape: "none" /* AudioParameterRampShape.None */ 
        });
    }
}
function _GetVolumeAudioSubNode(subGraph) {
    return subGraph.getSubNode("Volume" /* AudioSubNode.VOLUME */ );
}
function _GetVolumeAudioProperty(subGraph, property) {
    return _GetVolumeAudioSubNode(subGraph)?.[property] ?? _VolumeAudioDefaults[property];
} //# sourceMappingURL=volumeAudioSubNode.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/subProperties/abstractAudioAnalyzer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AbstractAudioAnalyzer",
    ()=>AbstractAudioAnalyzer,
    "_AudioAnalyzerDefaults",
    ()=>_AudioAnalyzerDefaults,
    "_HasAudioAnalyzerOptions",
    ()=>_HasAudioAnalyzerOptions
]);
const _AudioAnalyzerDefaults = {
    fftSize: 2048,
    minDecibels: -100,
    maxDecibels: -30,
    smoothing: 0.8
};
function _HasAudioAnalyzerOptions(options) {
    return options.analyzerEnabled || options.analyzerFFTSize !== undefined || options.analyzerMinDecibels !== undefined || options.analyzerMaxDecibels !== undefined || options.analyzerSmoothing !== undefined;
}
class AbstractAudioAnalyzer {
    /**
     * The number of data values that will be returned when calling getByteFrequencyData() or getFloatFrequencyData(). This is always half the `fftSize`.
     */ get frequencyBinCount() {
        return this.fftSize / 2;
    }
} //# sourceMappingURL=abstractAudioAnalyzer.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/subNodes/audioAnalyzerSubNode.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_AudioAnalyzerSubNode",
    ()=>_AudioAnalyzerSubNode,
    "_GetAudioAnalyzerSubNode",
    ()=>_GetAudioAnalyzerSubNode,
    "_SetAudioAnalyzerProperty",
    ()=>_SetAudioAnalyzerProperty
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$abstractAudioAnalyzer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/subProperties/abstractAudioAnalyzer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subNodes$2f$abstractAudioSubNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/subNodes/abstractAudioSubNode.js [app-client] (ecmascript)");
;
;
class _AudioAnalyzerSubNode extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subNodes$2f$abstractAudioSubNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_AbstractAudioSubNode"] {
    constructor(engine){
        super("Analyzer" /* AudioSubNode.ANALYZER */ , engine);
    }
    /** @internal */ setOptions(options) {
        this.fftSize = options.analyzerFFTSize ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$abstractAudioAnalyzer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_AudioAnalyzerDefaults"].fftSize;
        this.minDecibels = options.analyzerMinDecibels ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$abstractAudioAnalyzer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_AudioAnalyzerDefaults"].minDecibels;
        this.maxDecibels = options.analyzerMaxDecibels ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$abstractAudioAnalyzer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_AudioAnalyzerDefaults"].maxDecibels;
        this.smoothing = options.analyzerSmoothing ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$abstractAudioAnalyzer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_AudioAnalyzerDefaults"].smoothing;
    }
}
function _GetAudioAnalyzerSubNode(subGraph) {
    return subGraph.getSubNode("Analyzer" /* AudioSubNode.ANALYZER */ );
}
function _SetAudioAnalyzerProperty(subGraph, property, value) {
    subGraph.callOnSubNode("Analyzer" /* AudioSubNode.ANALYZER */ , (node)=>{
        node[property] = value;
    });
} //# sourceMappingURL=audioAnalyzerSubNode.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/subProperties/audioAnalyzer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_AudioAnalyzer",
    ()=>_AudioAnalyzer,
    "_GetEmptyByteFrequencyData",
    ()=>_GetEmptyByteFrequencyData,
    "_GetEmptyFloatFrequencyData",
    ()=>_GetEmptyFloatFrequencyData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$abstractAudioAnalyzer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/subProperties/abstractAudioAnalyzer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subNodes$2f$audioAnalyzerSubNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/subNodes/audioAnalyzerSubNode.js [app-client] (ecmascript)");
;
;
;
let EmptyByteFrequencyData = null;
let EmptyFloatFrequencyData = null;
function _GetEmptyByteFrequencyData() {
    if (!EmptyByteFrequencyData) {
        EmptyByteFrequencyData = new Uint8Array();
    }
    return EmptyByteFrequencyData;
}
function _GetEmptyFloatFrequencyData() {
    if (!EmptyFloatFrequencyData) {
        EmptyFloatFrequencyData = new Float32Array();
    }
    return EmptyFloatFrequencyData;
}
class _AudioAnalyzer extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$abstractAudioAnalyzer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AbstractAudioAnalyzer"] {
    /** @internal */ constructor(subGraph){
        super();
        this._fftSize = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$abstractAudioAnalyzer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_AudioAnalyzerDefaults"].fftSize;
        this._maxDecibels = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$abstractAudioAnalyzer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_AudioAnalyzerDefaults"].maxDecibels;
        this._minDecibels = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$abstractAudioAnalyzer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_AudioAnalyzerDefaults"].minDecibels;
        this._smoothing = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$abstractAudioAnalyzer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_AudioAnalyzerDefaults"].smoothing;
        this._subGraph = subGraph;
    }
    /** @internal */ get fftSize() {
        return this._fftSize;
    }
    set fftSize(value) {
        this._fftSize = value;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subNodes$2f$audioAnalyzerSubNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_SetAudioAnalyzerProperty"])(this._subGraph, "fftSize", value);
    }
    /** @internal */ get isEnabled() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subNodes$2f$audioAnalyzerSubNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_GetAudioAnalyzerSubNode"])(this._subGraph) !== null;
    }
    /** @internal */ get minDecibels() {
        return this._minDecibels;
    }
    set minDecibels(value) {
        this._minDecibels = value;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subNodes$2f$audioAnalyzerSubNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_SetAudioAnalyzerProperty"])(this._subGraph, "minDecibels", value);
    }
    /** @internal */ get maxDecibels() {
        return this._maxDecibels;
    }
    set maxDecibels(value) {
        this._maxDecibels = value;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subNodes$2f$audioAnalyzerSubNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_SetAudioAnalyzerProperty"])(this._subGraph, "maxDecibels", value);
    }
    /** @internal */ get smoothing() {
        return this._smoothing;
    }
    set smoothing(value) {
        this._smoothing = value;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subNodes$2f$audioAnalyzerSubNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_SetAudioAnalyzerProperty"])(this._subGraph, "smoothing", value);
    }
    /** @internal */ dispose() {
        const subNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subNodes$2f$audioAnalyzerSubNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_GetAudioAnalyzerSubNode"])(this._subGraph);
        if (subNode) {
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            this._subGraph.removeSubNodeAsync(subNode);
            subNode.dispose();
        }
    }
    /** @internal */ async enableAsync() {
        const subNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subNodes$2f$audioAnalyzerSubNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_GetAudioAnalyzerSubNode"])(this._subGraph);
        if (!subNode) {
            await this._subGraph.createAndAddSubNodeAsync("Analyzer" /* AudioSubNode.ANALYZER */ );
        }
    }
    /** @internal */ getByteFrequencyData() {
        const subNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subNodes$2f$audioAnalyzerSubNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_GetAudioAnalyzerSubNode"])(this._subGraph);
        if (!subNode) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Warn("AudioAnalyzer not enabled");
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            this.enableAsync();
            return _GetEmptyByteFrequencyData();
        }
        return subNode.getByteFrequencyData();
    }
    /** @internal */ getFloatFrequencyData() {
        const subNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subNodes$2f$audioAnalyzerSubNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_GetAudioAnalyzerSubNode"])(this._subGraph);
        if (!subNode) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Warn("AudioAnalyzer not enabled");
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            this.enableAsync();
            return _GetEmptyFloatFrequencyData();
        }
        return subNode.getFloatFrequencyData();
    }
} //# sourceMappingURL=audioAnalyzer.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/abstractAudioOutNode.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AbstractAudioOutNode",
    ()=>AbstractAudioOutNode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$abstractAudioNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/abstractAudioNode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subNodes$2f$volumeAudioSubNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/subNodes/volumeAudioSubNode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$audioAnalyzer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/subProperties/audioAnalyzer.js [app-client] (ecmascript)");
;
;
;
class AbstractAudioOutNode extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$abstractAudioNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AbstractNamedAudioNode"] {
    constructor(name, engine, nodeType){
        super(name, engine, nodeType);
        this._analyzer = null;
    }
    /**
     * The analyzer features of the bus.
     */ get analyzer() {
        return this._analyzer ?? (this._analyzer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$audioAnalyzer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_AudioAnalyzer"](this._subGraph));
    }
    /**
     * The audio output volume.
     */ get volume() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subNodes$2f$volumeAudioSubNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_GetVolumeAudioProperty"])(this._subGraph, "volume");
    }
    set volume(value) {
        // The volume subnode is created on initialization and should always exist.
        const node = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subNodes$2f$volumeAudioSubNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_GetVolumeAudioSubNode"])(this._subGraph);
        if (!node) {
            throw new Error("No volume subnode");
        }
        node.volume = value;
    }
    /**
     * Releases associated resources.
     */ dispose() {
        super.dispose();
        this._analyzer?.dispose();
        this._analyzer = null;
        this._subGraph.dispose();
    }
    /**
     * Sets the audio output volume with optional ramping.
     * If the duration is 0 then the volume is set immediately, otherwise it is ramped to the new value over the given duration using the given shape.
     * If a ramp is already in progress then the volume is not set and an error is thrown.
     * @param value The value to set the volume to.
     * @param options The options to use for ramping the volume change.
     */ setVolume(value, options = null) {
        const node = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subNodes$2f$volumeAudioSubNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_GetVolumeAudioSubNode"])(this._subGraph);
        if (!node) {
            throw new Error("No volume subnode");
        }
        node.setVolume(value, options);
    }
} //# sourceMappingURL=abstractAudioOutNode.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/abstractAudioBus.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AbstractAudioBus",
    ()=>AbstractAudioBus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$abstractAudioOutNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/abstractAudioOutNode.js [app-client] (ecmascript)");
;
class AbstractAudioBus extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$abstractAudioOutNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AbstractAudioOutNode"] {
    constructor(name, engine){
        super(name, engine, 3 /* AudioNodeType.HAS_INPUTS_AND_OUTPUTS */ );
    }
} //# sourceMappingURL=abstractAudioBus.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/abstractSoundSource.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AbstractSoundSource",
    ()=>AbstractSoundSource
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$abstractAudioOutNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/abstractAudioOutNode.js [app-client] (ecmascript)");
;
class AbstractSoundSource extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$abstractAudioOutNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AbstractAudioOutNode"] {
    constructor(name, engine, nodeType = 2 /* AudioNodeType.HAS_OUTPUTS */ ){
        super(name, engine, nodeType);
        this._outBus = null;
        this._onOutBusDisposed = ()=>{
            this._outBus = null;
        };
    }
    /**
     * The output bus for the sound.
     * @see {@link AudioEngineV2.defaultMainBus}
     */ get outBus() {
        return this._outBus;
    }
    set outBus(outBus) {
        if (this._outBus === outBus) {
            return;
        }
        if (this._outBus) {
            this._outBus.onDisposeObservable.removeCallback(this._onOutBusDisposed);
            if (!this._disconnect(this._outBus)) {
                throw new Error("Disconnect failed");
            }
        }
        this._outBus = outBus;
        if (this._outBus) {
            this._outBus.onDisposeObservable.add(this._onOutBusDisposed);
            if (!this._connect(this._outBus)) {
                throw new Error("Connect failed");
            }
        }
    }
    /**
     * Releases associated resources.
     */ dispose() {
        super.dispose();
        this._outBus = null;
    }
} //# sourceMappingURL=abstractSoundSource.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/abstractSound.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AbstractSound",
    ()=>AbstractSound
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$abstractSoundSource$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/abstractSoundSource.js [app-client] (ecmascript)");
;
;
class AbstractSound extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$abstractSoundSource$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AbstractSoundSource"] {
    constructor(name, engine){
        super(name, engine, 3 /* AudioNodeType.HAS_INPUTS_AND_OUTPUTS */ ); // Inputs are for instances.
        this._newestInstance = null;
        this._privateInstances = new Set();
        this._state = 1 /* SoundState.Stopped */ ;
        this._instances = this._privateInstances;
        /**
         * Observable for when the sound stops playing.
         */ this.onEndedObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        this._onInstanceEnded = (instance)=>{
            if (this._newestInstance === instance) {
                this._newestInstance = null;
            }
            this._privateInstances.delete(instance);
            if (this._instances.size === 0) {
                this._state = 1 /* SoundState.Stopped */ ;
                this.onEndedObservable.notifyObservers(this);
            }
            instance.dispose();
        };
    }
    /**
     * The number of active instances of the sound that are currently playing.
     */ get activeInstancesCount() {
        return this._instances.size;
    }
    /**
     * Whether the sound should start playing automatically. Defaults to `false`.
     */ get autoplay() {
        return this._options.autoplay;
    }
    /**
     * The current playback time of the sound, in seconds.
     */ get currentTime() {
        const instance = this._getNewestInstance();
        return instance ? instance.currentTime : 0;
    }
    set currentTime(value) {
        this.startOffset = value;
        const instance = this._getNewestInstance();
        if (instance) {
            instance.currentTime = value;
        }
    }
    /**
     * Whether the sound should loop. Defaults to `false`.
     */ get loop() {
        return this._options.loop;
    }
    set loop(value) {
        this._options.loop = value;
    }
    /**
     * The maximum number of instances that can play at the same time. Defaults to `Infinity`.
     */ get maxInstances() {
        return this._options.maxInstances;
    }
    set maxInstances(value) {
        this._options.maxInstances = value;
    }
    /**
     * The time within the sound buffer to start playing at, in seconds. Defaults to `0`.
     */ get startOffset() {
        return this._options.startOffset;
    }
    set startOffset(value) {
        this._options.startOffset = value;
    }
    /**
     * The state of the sound.
     */ get state() {
        return this._state;
    }
    /**
     * Releases associated resources.
     */ dispose() {
        super.dispose();
        this.stop();
        this._newestInstance = null;
        this._privateInstances.clear();
        this.onEndedObservable.clear();
    }
    /**
     * Pauses the sound.
     */ pause() {
        const it = this._instances.values();
        for(let next = it.next(); !next.done; next = it.next()){
            next.value.pause();
        }
        this._state = 5 /* SoundState.Paused */ ;
    }
    /**
     * Resumes the sound.
     */ resume() {
        if (this._state !== 5 /* SoundState.Paused */ ) {
            return;
        }
        const it = this._instances.values();
        for(let next = it.next(); !next.done; next = it.next()){
            next.value.resume();
        }
        this._state = 3 /* SoundState.Started */ ;
    }
    _beforePlay(instance) {
        if (this.state === 5 /* SoundState.Paused */  && this._instances.size > 0) {
            this.resume();
            return;
        }
        instance.onEndedObservable.addOnce(this._onInstanceEnded);
        this._privateInstances.add(instance);
        this._newestInstance = instance;
    }
    _afterPlay(instance) {
        this._state = instance.state;
    }
    _getNewestInstance() {
        if (this._instances.size === 0) {
            return null;
        }
        if (!this._newestInstance) {
            const it = this._instances.values();
            for(let next = it.next(); !next.done; next = it.next()){
                this._newestInstance = next.value;
            }
        }
        return this._newestInstance;
    }
    _setState(state) {
        this._state = state;
    }
    _stopExcessInstances() {
        if (this.maxInstances < Infinity) {
            const numberOfInstancesToStop = Array.from(this._instances).filter((instance)=>instance.state === 3 /* SoundState.Started */ ).length - this.maxInstances;
            const it = this._instances.values();
            for(let i = 0; i < numberOfInstancesToStop; i++){
                const instance = it.next().value;
                instance.stop();
            }
        }
    }
} //# sourceMappingURL=abstractSound.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/audioBus.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AudioBus",
    ()=>AudioBus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$abstractAudioBus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/abstractAudioBus.js [app-client] (ecmascript)");
;
class AudioBus extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$abstractAudioBus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AbstractAudioBus"] {
    constructor(name, engine){
        super(name, engine);
        this._outBus = null;
        this._onOutBusDisposed = ()=>{
            this.outBus = this.engine.defaultMainBus;
        };
    }
    /**
     * The output bus of the audio bus. Defaults to the audio engine's default main bus.
     */ get outBus() {
        return this._outBus;
    }
    set outBus(outBus) {
        if (this._outBus === outBus) {
            return;
        }
        if (this._outBus) {
            this._outBus.onDisposeObservable.removeCallback(this._onOutBusDisposed);
            if (!this._disconnect(this._outBus)) {
                throw new Error("Disconnect failed");
            }
        }
        this._outBus = outBus;
        if (this._outBus) {
            this._outBus.onDisposeObservable.add(this._onOutBusDisposed);
            if (!this._connect(this._outBus)) {
                throw new Error("Connect failed");
            }
        }
    }
    /**
     * Releases associated resources.
     */ dispose() {
        super.dispose();
        this._outBus = null;
    }
} //# sourceMappingURL=audioBus.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/mainAudioBus.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MainAudioBus",
    ()=>MainAudioBus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$abstractAudioBus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/abstractAudioBus.js [app-client] (ecmascript)");
;
class MainAudioBus extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$abstractAudioBus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AbstractAudioBus"] {
    constructor(name, engine){
        super(name, engine);
    }
} //# sourceMappingURL=mainAudioBus.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/staticSound.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StaticSound",
    ()=>StaticSound
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$abstractSound$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/abstractSound.js [app-client] (ecmascript)");
;
class StaticSound extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$abstractSound$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AbstractSound"] {
    constructor(name, engine){
        super(name, engine);
    }
    /**
     * The amount of time to play the sound for, in seconds. Defaults to `0`.
     * - If less than or equal to `0`, the sound plays for its full duration.
     */ get duration() {
        return this._options.duration;
    }
    set duration(value) {
        this._options.duration = value;
    }
    /**
     * The start of the loop range, in seconds. Defaults to `0`.
     * - If less than or equal to `0`, the loop starts at the beginning of the sound.
     */ get loopStart() {
        return this._options.loopStart;
    }
    set loopStart(value) {
        this._options.loopStart = value;
    }
    /**
     * The end of the loop range, in seconds. Defaults to `0`.
     * - If less than or equal to `0`, the loop plays for the sound's full duration.
     */ get loopEnd() {
        return this._options.loopEnd;
    }
    set loopEnd(value) {
        this._options.loopEnd = value;
    }
    /**
     * The pitch of the sound, in cents. Defaults to `0`.
     * - Gets combined with {@link playbackRate} to determine the final pitch.
     */ get pitch() {
        return this._options.pitch;
    }
    set pitch(value) {
        this._options.pitch = value;
        const it = this._instances.values();
        for(let instance = it.next(); !instance.done; instance = it.next()){
            instance.value.pitch = value;
        }
    }
    /**
     * The playback rate of the sound. Defaults to `1`.
     * - Gets combined with {@link pitch} to determine the final playback rate.
     */ get playbackRate() {
        return this._options.playbackRate;
    }
    set playbackRate(value) {
        this._options.playbackRate = value;
        const it = this._instances.values();
        for(let instance = it.next(); !instance.done; instance = it.next()){
            instance.value.playbackRate = value;
        }
    }
    /**
     * Plays the sound.
     * - Triggers `onEndedObservable` if played for the full duration and the `loop` option is not set.
     * @param options The options to use when playing the sound. Options set here override the sound's options.
     */ play(options = {}) {
        if (this.state === 5 /* SoundState.Paused */ ) {
            this.resume();
            return;
        }
        options.duration ?? (options.duration = this.duration);
        options.loop ?? (options.loop = this.loop);
        options.loopStart ?? (options.loopStart = this.loopStart);
        options.loopEnd ?? (options.loopEnd = this.loopEnd);
        options.startOffset ?? (options.startOffset = this.startOffset);
        options.volume ?? (options.volume = 1);
        options.waitTime ?? (options.waitTime = 0);
        const instance = this._createInstance();
        this._beforePlay(instance);
        instance.play(options);
        this._afterPlay(instance);
        this._stopExcessInstances();
    }
    /**
     * Stops the sound.
     * - Triggers `onEndedObservable` if the sound is playing.
     * @param options - The options to use when stopping the sound.
     */ stop(options = {}) {
        if (options.waitTime && 0 < options.waitTime) {
            this._setState(0 /* SoundState.Stopping */ );
        } else {
            this._setState(1 /* SoundState.Stopped */ );
        }
        if (!this._instances) {
            return;
        }
        for (const instance of Array.from(this._instances)){
            instance.stop(options);
        }
    }
} //# sourceMappingURL=staticSound.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/staticSoundBuffer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StaticSoundBuffer",
    ()=>StaticSoundBuffer
]);
let StaticSoundBufferId = 1;
class StaticSoundBuffer {
    constructor(engine){
        /**
         * The name of the sound buffer.
         */ this.name = `StaticSoundBuffer #${StaticSoundBufferId++}`;
        this.engine = engine;
    }
} //# sourceMappingURL=staticSoundBuffer.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/streamingSound.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StreamingSound",
    ()=>StreamingSound
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$abstractSound$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/abstractSound.js [app-client] (ecmascript)");
;
class StreamingSound extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$abstractSound$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AbstractSound"] {
    constructor(name, engine){
        super(name, engine);
        this._preloadedInstances = new Array();
    }
    /**
     * The number of instances to preload. Defaults to `1`.
     */ get preloadCount() {
        return this._options.preloadCount ?? 1;
    }
    /**
     * Returns the number of instances that have been preloaded.
     */ get preloadCompletedCount() {
        return this._preloadedInstances.length;
    }
    /**
     * Preloads an instance of the sound.
     * @returns A promise that resolves when the instance is preloaded.
     */ // eslint-disable-next-line @typescript-eslint/promise-function-async, no-restricted-syntax
    preloadInstanceAsync() {
        const instance = this._createInstance();
        this._addPreloadedInstance(instance);
        return instance.preloadedPromise;
    }
    /**
     * Preloads the given number of instances of the sound.
     * @param count - The number of instances to preload.
     * @returns A promise that resolves when all instances are preloaded.
     */ async preloadInstancesAsync(count) {
        for(let i = 0; i < count; i++){
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            this.preloadInstanceAsync();
        }
        await Promise.all(this._preloadedInstances.map(async (instance)=>await instance.preloadedPromise));
    }
    /**
     * Plays the sound.
     * - Triggers `onEndedObservable` if played for the full duration and the `loop` option is not set.
     * @param options The options to use when playing the sound. Options set here override the sound's options.
     */ play(options = {}) {
        if (this.state === 5 /* SoundState.Paused */ ) {
            this.resume();
            return;
        }
        let instance;
        if (this.preloadCompletedCount > 0) {
            instance = this._preloadedInstances[0];
            instance.startOffset = this.startOffset;
            this._removePreloadedInstance(instance);
        } else {
            instance = this._createInstance();
        }
        const onInstanceStateChanged = ()=>{
            if (instance.state === 3 /* SoundState.Started */ ) {
                this._stopExcessInstances();
                instance.onStateChangedObservable.removeCallback(onInstanceStateChanged);
            }
        };
        instance.onStateChangedObservable.add(onInstanceStateChanged);
        options.startOffset ?? (options.startOffset = this.startOffset);
        options.loop ?? (options.loop = this.loop);
        options.volume ?? (options.volume = 1);
        this._beforePlay(instance);
        instance.play(options);
        this._afterPlay(instance);
    }
    /**
     * Stops the sound.
     */ stop() {
        this._setState(1 /* SoundState.Stopped */ );
        if (!this._instances) {
            return;
        }
        for (const instance of Array.from(this._instances)){
            instance.stop();
        }
    }
    _addPreloadedInstance(instance) {
        if (!this._preloadedInstances.includes(instance)) {
            this._preloadedInstances.push(instance);
        }
    }
    _removePreloadedInstance(instance) {
        const index = this._preloadedInstances.indexOf(instance);
        if (index !== -1) {
            this._preloadedInstances.splice(index, 1);
        }
    }
} //# sourceMappingURL=streamingSound.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AbstractSpatialAudio",
    ()=>AbstractSpatialAudio,
    "_HasSpatialAudioOptions",
    ()=>_HasSpatialAudioOptions,
    "_SpatialAudioDefaults",
    ()=>_SpatialAudioDefaults
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
;
const _SpatialAudioDefaults = {
    coneInnerAngle: 6.28318530718,
    coneOuterAngle: 6.28318530718,
    coneOuterVolume: 0,
    distanceModel: "linear",
    maxDistance: 10000,
    minDistance: 1,
    panningModel: "equalpower",
    position: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero(),
    rolloffFactor: 1,
    rotation: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero(),
    rotationQuaternion: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"]()
};
function _HasSpatialAudioOptions(options) {
    return options.spatialEnabled || options.spatialAutoUpdate !== undefined || options.spatialConeInnerAngle !== undefined || options.spatialConeOuterAngle !== undefined || options.spatialConeOuterVolume !== undefined || options.spatialDistanceModel !== undefined || options.spatialMaxDistance !== undefined || options.spatialMinDistance !== undefined || options.spatialMinUpdateTime !== undefined || options.spatialPanningModel !== undefined || options.spatialPosition !== undefined || options.spatialRolloffFactor !== undefined || options.spatialRotation !== undefined || options.spatialRotationQuaternion !== undefined;
}
class AbstractSpatialAudio {
} //# sourceMappingURL=abstractSpatialAudio.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/subProperties/abstractStereoAudio.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AbstractStereoAudio",
    ()=>AbstractStereoAudio,
    "_HasStereoAudioOptions",
    ()=>_HasStereoAudioOptions,
    "_StereoAudioDefaults",
    ()=>_StereoAudioDefaults
]);
const _StereoAudioDefaults = {
    pan: 0
};
function _HasStereoAudioOptions(options) {
    return options.stereoEnabled || options.stereoPan !== undefined;
}
class AbstractStereoAudio {
} //# sourceMappingURL=abstractStereoAudio.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/subProperties/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$abstractAudioAnalyzer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/subProperties/abstractAudioAnalyzer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$abstractSpatialAudio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$abstractSpatialAudioListener$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/subProperties/abstractSpatialAudioListener.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$abstractStereoAudio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/subProperties/abstractStereoAudio.js [app-client] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
;
;
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/no-restricted-imports */ __turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$abstractAudioBus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/abstractAudioBus.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$abstractAudioNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/abstractAudioNode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$abstractAudioOutNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/abstractAudioOutNode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$abstractSound$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/abstractSound.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$audioBus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/audioBus.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$audioEngineV2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/audioEngineV2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$mainAudioBus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/mainAudioBus.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$staticSound$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/staticSound.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$staticSoundBuffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/staticSoundBuffer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$streamingSound$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/streamingSound.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/subProperties/index.js [app-client] (ecmascript) <locals>"); //# sourceMappingURL=index.js.map
;
;
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
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/audioParameter.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * The shape of the audio ramp used to set an audio parameter's value, such as a sound's volume.
 */ __turbopack_context__.s([
    "AudioParameterRampShape",
    ()=>AudioParameterRampShape
]);
var AudioParameterRampShape;
(function(AudioParameterRampShape) {
    /**
     * The ramp is linear.
     */ AudioParameterRampShape["Linear"] = "linear";
    /**
     * The ramp is exponential.
     */ AudioParameterRampShape["Exponential"] = "exponential";
    /**
     * The ramp is logarithmic.
     */ AudioParameterRampShape["Logarithmic"] = "logarithmic";
    /**
     * No ramp is used; the value is set immediately.
     */ AudioParameterRampShape["None"] = "none";
})(AudioParameterRampShape || (AudioParameterRampShape = {})); //# sourceMappingURL=audioParameter.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/soundState.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * The state of a sound.
 */ __turbopack_context__.s([
    "SoundState",
    ()=>SoundState
]);
var SoundState;
(function(SoundState) {
    /**
     * The sound is waiting for its instances to stop.
     */ SoundState[SoundState["Stopping"] = 0] = "Stopping";
    /**
     * The sound is stopped.
     */ SoundState[SoundState["Stopped"] = 1] = "Stopped";
    /**
     * The sound is waiting for its instances to start.
     */ SoundState[SoundState["Starting"] = 2] = "Starting";
    /**
     * The sound has started playing.
     */ SoundState[SoundState["Started"] = 3] = "Started";
    /**
     * The sound failed to start, most likely due to the user not interacting with the page, yet.
     */ SoundState[SoundState["FailedToStart"] = 4] = "FailedToStart";
    /**
     * The sound is paused.
     */ SoundState[SoundState["Paused"] = 5] = "Paused";
})(SoundState || (SoundState = {})); //# sourceMappingURL=soundState.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/spatialAudioAttachmentType.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SpatialAudioAttachmentType",
    ()=>SpatialAudioAttachmentType
]);
var SpatialAudioAttachmentType;
(function(SpatialAudioAttachmentType) {
    SpatialAudioAttachmentType[SpatialAudioAttachmentType["Position"] = 1] = "Position";
    SpatialAudioAttachmentType[SpatialAudioAttachmentType["Rotation"] = 2] = "Rotation";
    SpatialAudioAttachmentType[SpatialAudioAttachmentType["PositionAndRotation"] = 3] = "PositionAndRotation";
})(SpatialAudioAttachmentType || (SpatialAudioAttachmentType = {})); //# sourceMappingURL=spatialAudioAttachmentType.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/subNodes/stereoAudioSubNode.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_GetStereoAudioSubNode",
    ()=>_GetStereoAudioSubNode,
    "_SetStereoAudioProperty",
    ()=>_SetStereoAudioProperty,
    "_StereoAudioSubNode",
    ()=>_StereoAudioSubNode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subNodes$2f$abstractAudioSubNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/subNodes/abstractAudioSubNode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$abstractStereoAudio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/subProperties/abstractStereoAudio.js [app-client] (ecmascript)");
;
;
class _StereoAudioSubNode extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subNodes$2f$abstractAudioSubNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_AbstractAudioSubNode"] {
    constructor(engine){
        super("Stereo" /* AudioSubNode.STEREO */ , engine);
    }
    /** @internal */ setOptions(options) {
        this.pan = options.stereoPan ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$abstractStereoAudio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_StereoAudioDefaults"].pan;
    }
}
function _GetStereoAudioSubNode(subGraph) {
    return subGraph.getSubNode("Stereo" /* AudioSubNode.STEREO */ );
}
function _SetStereoAudioProperty(subGraph, property, value) {
    subGraph.callOnSubNode("Stereo" /* AudioSubNode.STEREO */ , (node)=>{
        node[property] = value;
    });
} //# sourceMappingURL=stereoAudioSubNode.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/subProperties/stereoAudio.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_StereoAudio",
    ()=>_StereoAudio
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$abstractStereoAudio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/subProperties/abstractStereoAudio.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subNodes$2f$stereoAudioSubNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/subNodes/stereoAudioSubNode.js [app-client] (ecmascript)");
;
;
class _StereoAudio extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$abstractStereoAudio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AbstractStereoAudio"] {
    /** @internal */ constructor(subGraph){
        super();
        this._pan = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$abstractStereoAudio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_StereoAudioDefaults"].pan;
        this._subGraph = subGraph;
    }
    /** @internal */ get pan() {
        return this._pan;
    }
    set pan(value) {
        this._pan = value;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subNodes$2f$stereoAudioSubNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_SetStereoAudioProperty"])(this._subGraph, "pan", value);
    }
} //# sourceMappingURL=stereoAudio.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/subNodes/spatialAudioSubNode.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_GetSpatialAudioSubNode",
    ()=>_GetSpatialAudioSubNode,
    "_SetSpatialAudioProperty",
    ()=>_SetSpatialAudioProperty,
    "_SpatialAudioSubNode",
    ()=>_SpatialAudioSubNode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$components$2f$spatialAudioAttacherComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/components/spatialAudioAttacherComponent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$abstractSpatialAudio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subNodes$2f$abstractAudioSubNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/subNodes/abstractAudioSubNode.js [app-client] (ecmascript)");
;
;
;
class _SpatialAudioSubNode extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subNodes$2f$abstractAudioSubNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_AbstractAudioSubNode"] {
    constructor(engine){
        super("Spatial" /* AudioSubNode.SPATIAL */ , engine);
        this._attacherComponent = null;
    }
    /** @internal */ get isAttached() {
        return this._attacherComponent !== null && this._attacherComponent.isAttached;
    }
    /** @internal */ attach(sceneNode, useBoundingBox, attachmentType) {
        this.detach();
        if (!this._attacherComponent) {
            this._attacherComponent = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$components$2f$spatialAudioAttacherComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_SpatialAudioAttacherComponent"](this);
        }
        this._attacherComponent.attach(sceneNode, useBoundingBox, attachmentType);
    }
    /** @internal */ detach() {
        this._attacherComponent?.detach();
    }
    /** @internal */ dispose() {
        super.dispose();
        this._attacherComponent?.dispose();
        this._attacherComponent = null;
    }
    /** @internal */ setOptions(options) {
        this.coneInnerAngle = options.spatialConeInnerAngle ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$abstractSpatialAudio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_SpatialAudioDefaults"].coneInnerAngle;
        this.coneOuterAngle = options.spatialConeOuterAngle ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$abstractSpatialAudio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_SpatialAudioDefaults"].coneOuterAngle;
        this.coneOuterVolume = options.spatialConeOuterVolume ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$abstractSpatialAudio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_SpatialAudioDefaults"].coneOuterVolume;
        this.distanceModel = options.spatialDistanceModel ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$abstractSpatialAudio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_SpatialAudioDefaults"].distanceModel;
        this.maxDistance = options.spatialMaxDistance ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$abstractSpatialAudio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_SpatialAudioDefaults"].maxDistance;
        this.minDistance = options.spatialMinDistance ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$abstractSpatialAudio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_SpatialAudioDefaults"].minDistance;
        this.panningModel = options.spatialPanningModel ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$abstractSpatialAudio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_SpatialAudioDefaults"].panningModel;
        this.rolloffFactor = options.spatialRolloffFactor ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$abstractSpatialAudio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_SpatialAudioDefaults"].rolloffFactor;
        if (options.spatialPosition) {
            this.position = options.spatialPosition.clone();
        }
        if (options.spatialRotationQuaternion) {
            this.rotationQuaternion = options.spatialRotationQuaternion.clone();
        } else if (options.spatialRotation) {
            this.rotation = options.spatialRotation.clone();
        } else {
            this.rotationQuaternion = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$abstractSpatialAudio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_SpatialAudioDefaults"].rotationQuaternion.clone();
        }
        this.update();
    }
    /** @internal */ update() {
        if (this.isAttached) {
            this._attacherComponent?.update();
        } else {
            this._updatePosition();
            this._updateRotation();
        }
    }
}
function _GetSpatialAudioSubNode(subGraph) {
    return subGraph.getSubNode("Spatial" /* AudioSubNode.SPATIAL */ );
}
function _SetSpatialAudioProperty(subGraph, property, value) {
    subGraph.callOnSubNode("Spatial" /* AudioSubNode.SPATIAL */ , (node)=>{
        node[property] = value;
    });
} //# sourceMappingURL=spatialAudioSubNode.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/webAudio/subNodes/spatialWebAudioSubNode.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_CreateSpatialAudioSubNodeAsync",
    ()=>_CreateSpatialAudioSubNodeAsync,
    "_SpatialWebAudioSubNode",
    ()=>_SpatialWebAudioSubNode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subNodes$2f$spatialAudioSubNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/subNodes/spatialAudioSubNode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$abstractSpatialAudio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$components$2f$webAudioParameterComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/webAudio/components/webAudioParameterComponent.js [app-client] (ecmascript)");
;
;
;
;
const TmpMatrix = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].Zero();
const TmpQuaternion = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"]();
const TmpVector = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
function D2r(degrees) {
    return degrees * Math.PI / 180;
}
function R2d(radians) {
    return radians * 180 / Math.PI;
}
async function _CreateSpatialAudioSubNodeAsync(engine) {
    return new _SpatialWebAudioSubNode(engine);
}
class _SpatialWebAudioSubNode extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subNodes$2f$spatialAudioSubNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_SpatialAudioSubNode"] {
    /** @internal */ constructor(engine){
        super(engine);
        this._lastPosition = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        this._lastRotation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        this._lastRotationQuaternion = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"]();
        /** @internal */ this.position = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$abstractSpatialAudio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_SpatialAudioDefaults"].position.clone();
        /** @internal */ this.rotation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$abstractSpatialAudio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_SpatialAudioDefaults"].rotation.clone();
        /** @internal */ this.rotationQuaternion = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$abstractSpatialAudio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_SpatialAudioDefaults"].rotationQuaternion.clone();
        this.node = new PannerNode(engine._audioContext);
        this._orientationX = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$components$2f$webAudioParameterComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_WebAudioParameterComponent"](engine, this.node.orientationX);
        this._orientationY = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$components$2f$webAudioParameterComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_WebAudioParameterComponent"](engine, this.node.orientationY);
        this._orientationZ = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$components$2f$webAudioParameterComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_WebAudioParameterComponent"](engine, this.node.orientationZ);
        this._positionX = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$components$2f$webAudioParameterComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_WebAudioParameterComponent"](engine, this.node.positionX);
        this._positionY = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$components$2f$webAudioParameterComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_WebAudioParameterComponent"](engine, this.node.positionY);
        this._positionZ = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$components$2f$webAudioParameterComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_WebAudioParameterComponent"](engine, this.node.positionZ);
    }
    /** @internal */ dispose() {
        super.dispose();
        this._orientationX.dispose();
        this._orientationY.dispose();
        this._orientationZ.dispose();
        this._positionX.dispose();
        this._positionY.dispose();
        this._positionZ.dispose();
        this.node.disconnect();
    }
    /** @internal */ get coneInnerAngle() {
        return D2r(this.node.coneInnerAngle);
    }
    set coneInnerAngle(value) {
        this.node.coneInnerAngle = R2d(value);
    }
    /** @internal */ get coneOuterAngle() {
        return D2r(this.node.coneOuterAngle);
    }
    set coneOuterAngle(value) {
        this.node.coneOuterAngle = R2d(value);
    }
    /** @internal */ get coneOuterVolume() {
        return this.node.coneOuterGain;
    }
    set coneOuterVolume(value) {
        this.node.coneOuterGain = value;
    }
    /** @internal */ get distanceModel() {
        return this.node.distanceModel;
    }
    set distanceModel(value) {
        this.node.distanceModel = value;
        // Wiggle the max distance to make the change take effect.
        const maxDistance = this.node.maxDistance;
        this.node.maxDistance = maxDistance + 0.001;
        this.node.maxDistance = maxDistance;
    }
    /** @internal */ get minDistance() {
        return this.node.refDistance;
    }
    set minDistance(value) {
        this.node.refDistance = value;
    }
    /** @internal */ get maxDistance() {
        return this.node.maxDistance;
    }
    set maxDistance(value) {
        this.node.maxDistance = value;
    }
    /** @internal */ get panningModel() {
        return this.node.panningModel;
    }
    set panningModel(value) {
        this.node.panningModel = value;
    }
    /** @internal */ get rolloffFactor() {
        return this.node.rolloffFactor;
    }
    set rolloffFactor(value) {
        this.node.rolloffFactor = value;
    }
    /** @internal */ get _inNode() {
        return this.node;
    }
    /** @internal */ get _outNode() {
        return this.node;
    }
    /** @internal */ _updatePosition() {
        if (this._lastPosition.equalsWithEpsilon(this.position)) {
            return;
        }
        // If attached and there is a ramp in progress, we assume another update is coming soon that we can wait for.
        // We don't do this for unattached nodes because there may not be another update coming.
        if (this.isAttached && (this._positionX.isRamping || this._positionY.isRamping || this._positionZ.isRamping)) {
            return;
        }
        this._positionX.targetValue = this.position.x;
        this._positionY.targetValue = this.position.y;
        this._positionZ.targetValue = this.position.z;
        this._lastPosition.copyFrom(this.position);
    }
    /** @internal */ _updateRotation() {
        // If attached and there is a ramp in progress, we assume another update is coming soon that we can wait for.
        // We don't do this for unattached nodes because there may not be another update coming.
        if (this.isAttached && (this._orientationX.isRamping || this._orientationY.isRamping || this._orientationZ.isRamping)) {
            return;
        }
        if (!this._lastRotationQuaternion.equalsWithEpsilon(this.rotationQuaternion)) {
            TmpQuaternion.copyFrom(this.rotationQuaternion);
            this._lastRotationQuaternion.copyFrom(this.rotationQuaternion);
        } else if (!this._lastRotation.equalsWithEpsilon(this.rotation)) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Quaternion"].FromEulerAnglesToRef(this.rotation.x, this.rotation.y, this.rotation.z, TmpQuaternion);
            this._lastRotation.copyFrom(this.rotation);
        } else {
            return;
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix"].FromQuaternionToRef(TmpQuaternion, TmpMatrix);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].TransformNormalToRef(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"].RightReadOnly, TmpMatrix, TmpVector);
        this._orientationX.targetValue = TmpVector.x;
        this._orientationY.targetValue = TmpVector.y;
        this._orientationZ.targetValue = TmpVector.z;
    }
    _connect(node) {
        const connected = super._connect(node);
        if (!connected) {
            return false;
        }
        // If the wrapped node is not available now, it will be connected later by the subgraph.
        if (node._inNode) {
            this.node.connect(node._inNode);
        }
        return true;
    }
    _disconnect(node) {
        const disconnected = super._disconnect(node);
        if (!disconnected) {
            return false;
        }
        if (node._inNode) {
            this.node.disconnect(node._inNode);
        }
        return true;
    }
    /** @internal */ getClassName() {
        return "_SpatialWebAudioSubNode";
    }
} //# sourceMappingURL=spatialWebAudioSubNode.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/webAudio/subNodes/stereoWebAudioSubNode.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_CreateStereoAudioSubNodeAsync",
    ()=>_CreateStereoAudioSubNodeAsync,
    "_StereoWebAudioSubNode",
    ()=>_StereoWebAudioSubNode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subNodes$2f$stereoAudioSubNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/subNodes/stereoAudioSubNode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$components$2f$webAudioParameterComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/webAudio/components/webAudioParameterComponent.js [app-client] (ecmascript)");
;
;
async function _CreateStereoAudioSubNodeAsync(engine) {
    return new _StereoWebAudioSubNode(engine);
}
class _StereoWebAudioSubNode extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subNodes$2f$stereoAudioSubNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_StereoAudioSubNode"] {
    /** @internal */ constructor(engine){
        super(engine);
        this.node = new StereoPannerNode(engine._audioContext);
        this._pan = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$components$2f$webAudioParameterComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_WebAudioParameterComponent"](engine, this.node.pan);
    }
    /** @internal */ dispose() {
        super.dispose();
        this._pan.dispose();
    }
    /** @internal */ get pan() {
        return this._pan.targetValue;
    }
    /** @internal */ set pan(value) {
        this._pan.targetValue = value;
    }
    /** @internal */ get _inNode() {
        return this.node;
    }
    /** @internal */ get _outNode() {
        return this.node;
    }
    /** @internal */ getClassName() {
        return "_StereoWebAudioSubNode";
    }
    _connect(node) {
        const connected = super._connect(node);
        if (!connected) {
            return false;
        }
        // If the wrapped node is not available now, it will be connected later by the subgraph.
        if (node._inNode) {
            this.node.connect(node._inNode);
        }
        return true;
    }
    _disconnect(node) {
        const disconnected = super._disconnect(node);
        if (!disconnected) {
            return false;
        }
        if (node._inNode) {
            this.node.disconnect(node._inNode);
        }
        return true;
    }
} //# sourceMappingURL=stereoWebAudioSubNode.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/subNodes/abstractAudioSubGraph.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Adds common sub graph functionality to an audio node.
 *
 * Audio nodes such as static sounds, streaming sounds, and buses can use audio sub graphs to process audio internally
 * before sending it to connected downstream audio nodes. This is useful for applying effects, spatial audio, and other
 * audio processing tasks common to multiple audio node classes.
 *
 * A key feature of audio sub graphs is their audio sub nodes are created asynchronously on demand so the minimum set
 * of sub nodes are used at all times to save memory and CPU resources. The tradeoff is a small delay when first
 * setting a property backed by a sub node. This delay is avoided by using the appropriate options to initialize the
 * sub node on creation, e.g. `spatialEnabled` and `stereoEnabled`, or by setting any creation option backed by the
 * sub node, e.g. `spatialPosition` and `stereoPan`.
 *
 * @internal
 */ __turbopack_context__.s([
    "_AbstractAudioSubGraph",
    ()=>_AbstractAudioSubGraph
]);
class _AbstractAudioSubGraph {
    constructor(){
        this._createSubNodePromises = {};
        this._isDisposed = false;
        this._subNodes = {};
        this._onSubNodeDisposed = (node)=>{
            const subNode = node;
            delete this._subNodes[subNode.name];
            this._onSubNodesChanged();
        };
    }
    /**
     * Executes the given callback with the named sub node, creating the sub node if needed.
     *
     * @param name The name of the sub node
     * @param callback The function to call with the named sub node
     *
     * @internal
     */ callOnSubNode(name, callback) {
        const node = this.getSubNode(name);
        if (node) {
            callback(node);
            return;
        }
        // eslint-disable-next-line @typescript-eslint/no-floating-promises, github/no-then
        this._createSubNodePromisesResolvedAsync().then(()=>{
            const node = this.getSubNode(name);
            if (node) {
                callback(node);
                return;
            }
            // eslint-disable-next-line @typescript-eslint/no-floating-promises, github/no-then
            this.createAndAddSubNodeAsync(name).then((node)=>{
                callback(node);
            });
        });
    }
    /**
     * Creates the named subnode and adds it to the sub graph.
     *
     * @param name The name of the sub node.
     * @returns A promise that resolves to the created sub node.
     *
     * @internal
     */ // eslint-disable-next-line @typescript-eslint/promise-function-async, no-restricted-syntax
    createAndAddSubNodeAsync(name) {
        var _a;
        // eslint-disable-next-line github/no-then
        (_a = this._createSubNodePromises)[name] || (_a[name] = this._createSubNode(name).then((node)=>{
            this._addSubNode(node);
            return node;
        }));
        return this._createSubNodePromises[name];
    }
    /**
     * Releases associated resources.
     *
     * @internal
     */ dispose() {
        this._isDisposed = true;
        const subNodes = Object.values(this._subNodes);
        for (const subNode of subNodes){
            subNode.dispose();
        }
        this._subNodes = {};
        this._createSubNodePromises = {};
    }
    /**
     * Gets a previously created sub node.
     *
     * @param name - The name of the sub node
     * @returns The named sub node, or `null` if it has not been created, yet
     *
     * @internal
     * */ getSubNode(name) {
        return this._subNodes[name] ?? null;
    }
    /**
     * Removes a sub node from the sub graph.
     *
     * @param subNode - The sub node to remove
     * @returns A promise that resolves when the sub node is removed
     *
     * @internal
     */ async removeSubNodeAsync(subNode) {
        await this._createSubNodePromisesResolvedAsync();
        const name = subNode.name;
        if (this._subNodes[name]) {
            delete this._subNodes[name];
        }
        delete this._createSubNodePromises[name];
        this._onSubNodesChanged();
    }
    async _createSubNodePromisesResolvedAsync() {
        return await Promise.all(Object.values(this._createSubNodePromises));
    }
    _addSubNode(node) {
        if (this._isDisposed) {
            node.dispose();
            return;
        }
        this._subNodes[node.name] = node;
        node.onDisposeObservable.addOnce(this._onSubNodeDisposed);
        this._onSubNodesChanged();
    }
} //# sourceMappingURL=abstractAudioSubGraph.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/webAudio/subNodes/volumeWebAudioSubNode.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_CreateVolumeAudioSubNodeAsync",
    ()=>_CreateVolumeAudioSubNodeAsync,
    "_VolumeWebAudioSubNode",
    ()=>_VolumeWebAudioSubNode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subNodes$2f$volumeAudioSubNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/subNodes/volumeAudioSubNode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$components$2f$webAudioParameterComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/webAudio/components/webAudioParameterComponent.js [app-client] (ecmascript)");
;
;
async function _CreateVolumeAudioSubNodeAsync(engine) {
    return new _VolumeWebAudioSubNode(engine);
}
class _VolumeWebAudioSubNode extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subNodes$2f$volumeAudioSubNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_VolumeAudioSubNode"] {
    /** @internal */ constructor(engine){
        super(engine);
        const gainNode = this.node = new GainNode(engine._audioContext);
        this._volume = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$components$2f$webAudioParameterComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_WebAudioParameterComponent"](engine, gainNode.gain);
    }
    /** @internal */ dispose() {
        super.dispose();
        this._volume.dispose();
    }
    /** @internal */ get volume() {
        return this._volume.value;
    }
    /** @internal */ set volume(value) {
        this.setVolume(value);
    }
    /** @internal */ get _inNode() {
        return this.node;
    }
    /** @internal */ get _outNode() {
        return this.node;
    }
    /** @internal */ setVolume(value, options = null) {
        this._volume.setTargetValue(value, options);
    }
    _connect(node) {
        const connected = super._connect(node);
        if (!connected) {
            return false;
        }
        // If the wrapped node is not available now, it will be connected later by the subgraph.
        if (node._inNode) {
            this.node.connect(node._inNode);
        }
        return true;
    }
    _disconnect(node) {
        const disconnected = super._disconnect(node);
        if (!disconnected) {
            return false;
        }
        if (node._inNode) {
            this.node.disconnect(node._inNode);
        }
        return true;
    }
    /** @internal */ getClassName() {
        return "_VolumeWebAudioSubNode";
    }
} //# sourceMappingURL=volumeWebAudioSubNode.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/webAudio/subNodes/webAudioAnalyzerSubNode.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_CreateAudioAnalyzerSubNodeAsync",
    ()=>_CreateAudioAnalyzerSubNodeAsync,
    "_WebAudioAnalyzerSubNode",
    ()=>_WebAudioAnalyzerSubNode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subNodes$2f$audioAnalyzerSubNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/subNodes/audioAnalyzerSubNode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$audioAnalyzer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/subProperties/audioAnalyzer.js [app-client] (ecmascript)");
;
;
async function _CreateAudioAnalyzerSubNodeAsync(engine) {
    return new _WebAudioAnalyzerSubNode(engine);
}
class _WebAudioAnalyzerSubNode extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subNodes$2f$audioAnalyzerSubNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_AudioAnalyzerSubNode"] {
    /** @internal */ constructor(engine){
        super(engine);
        this._byteFrequencyData = null;
        this._floatFrequencyData = null;
        this._analyzerNode = new AnalyserNode(engine._audioContext);
    }
    /** @internal */ get fftSize() {
        return this._analyzerNode.fftSize;
    }
    set fftSize(value) {
        if (value === this._analyzerNode.fftSize) {
            return;
        }
        this._analyzerNode.fftSize = value;
        this._clearArrays();
    }
    /** @internal */ get _inNode() {
        return this._analyzerNode;
    }
    /** @internal */ get minDecibels() {
        return this._analyzerNode.minDecibels;
    }
    set minDecibels(value) {
        this._analyzerNode.minDecibels = value;
    }
    /** @internal */ get maxDecibels() {
        return this._analyzerNode.maxDecibels;
    }
    set maxDecibels(value) {
        this._analyzerNode.maxDecibels = value;
    }
    /** @internal */ get smoothing() {
        return this._analyzerNode.smoothingTimeConstant;
    }
    set smoothing(value) {
        this._analyzerNode.smoothingTimeConstant = value;
    }
    /** @internal */ dispose() {
        super.dispose();
        this._clearArrays();
        this._byteFrequencyData = null;
        this._floatFrequencyData = null;
        this._analyzerNode.disconnect();
    }
    /** @internal */ getClassName() {
        return "_WebAudioAnalyzerSubNode";
    }
    /** @internal */ getByteFrequencyData() {
        if (!this._byteFrequencyData || this._byteFrequencyData.length === 0) {
            this._byteFrequencyData = new Uint8Array(this._analyzerNode.frequencyBinCount);
        }
        this._analyzerNode.getByteFrequencyData(this._byteFrequencyData);
        return this._byteFrequencyData;
    }
    /** @internal */ getFloatFrequencyData() {
        if (!this._floatFrequencyData || this._floatFrequencyData.length === 0) {
            this._floatFrequencyData = new Float32Array(this._analyzerNode.frequencyBinCount);
        }
        this._analyzerNode.getFloatFrequencyData(this._floatFrequencyData);
        return this._floatFrequencyData;
    }
    _clearArrays() {
        this._byteFrequencyData?.set((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$audioAnalyzer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_GetEmptyByteFrequencyData"])());
        this._floatFrequencyData?.set((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$audioAnalyzer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_GetEmptyFloatFrequencyData"])());
    }
} //# sourceMappingURL=webAudioAnalyzerSubNode.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/webAudio/subNodes/webAudioBaseSubGraph.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_WebAudioBaseSubGraph",
    ()=>_WebAudioBaseSubGraph
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subNodes$2f$abstractAudioSubGraph$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/subNodes/abstractAudioSubGraph.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subNodes$2f$audioAnalyzerSubNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/subNodes/audioAnalyzerSubNode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subNodes$2f$volumeAudioSubNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/subNodes/volumeAudioSubNode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$abstractAudioAnalyzer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/subProperties/abstractAudioAnalyzer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$subNodes$2f$volumeWebAudioSubNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/webAudio/subNodes/volumeWebAudioSubNode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$subNodes$2f$webAudioAnalyzerSubNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/webAudio/subNodes/webAudioAnalyzerSubNode.js [app-client] (ecmascript)");
;
;
;
;
;
;
class _WebAudioBaseSubGraph extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subNodes$2f$abstractAudioSubGraph$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_AbstractAudioSubGraph"] {
    /** @internal */ constructor(owner){
        super();
        this._outputNode = null;
        this._owner = owner;
    }
    /** @internal */ async initAsync(options) {
        const hasAnalyzerOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$abstractAudioAnalyzer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_HasAudioAnalyzerOptions"])(options);
        if (hasAnalyzerOptions) {
            await this.createAndAddSubNodeAsync("Analyzer" /* AudioSubNode.ANALYZER */ );
        }
        await this.createAndAddSubNodeAsync("Volume" /* AudioSubNode.VOLUME */ );
        await this._createSubNodePromisesResolvedAsync();
        if (hasAnalyzerOptions) {
            const analyzerNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subNodes$2f$audioAnalyzerSubNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_GetAudioAnalyzerSubNode"])(this);
            if (!analyzerNode) {
                throw new Error("No analyzer subnode.");
            }
            analyzerNode.setOptions(options);
        }
        const volumeNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subNodes$2f$volumeAudioSubNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_GetVolumeAudioSubNode"])(this);
        if (!volumeNode) {
            throw new Error("No volume subnode.");
        }
        volumeNode.setOptions(options);
        if (volumeNode.getClassName() !== "_VolumeWebAudioSubNode") {
            throw new Error("Not a WebAudio subnode.");
        }
        this._outputNode = volumeNode.node;
        // Connect the new wrapped WebAudio node to the wrapped downstream WebAudio nodes.
        // The wrapper nodes are unaware of this change.
        if (this._outputNode && this._downstreamNodes) {
            const it = this._downstreamNodes.values();
            for(let next = it.next(); !next.done; next = it.next()){
                const inNode = next.value._inNode;
                if (inNode) {
                    this._outputNode.connect(inNode);
                }
            }
        }
    }
    /** @internal */ get _inNode() {
        return this._outputNode;
    }
    /** @internal */ get _outNode() {
        return this._outputNode;
    }
    // Function is async, but throws synchronously. Avoiding breaking changes.
    // eslint-disable-next-line @typescript-eslint/promise-function-async
    _createSubNode(name) {
        switch(name){
            case "Analyzer" /* AudioSubNode.ANALYZER */ :
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$subNodes$2f$webAudioAnalyzerSubNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_CreateAudioAnalyzerSubNodeAsync"])(this._owner.engine);
            case "Volume" /* AudioSubNode.VOLUME */ :
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$subNodes$2f$volumeWebAudioSubNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_CreateVolumeAudioSubNodeAsync"])(this._owner.engine);
            default:
                throw new Error(`Unknown subnode name: ${name}`);
        }
    }
    _onSubNodesChanged() {
        const analyzerNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subNodes$2f$audioAnalyzerSubNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_GetAudioAnalyzerSubNode"])(this);
        const volumeNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subNodes$2f$volumeAudioSubNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_GetVolumeAudioSubNode"])(this);
        if (analyzerNode && volumeNode) {
            volumeNode.connect(analyzerNode);
        }
    }
} //# sourceMappingURL=webAudioBaseSubGraph.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/webAudio/subNodes/webAudioBusAndSoundSubGraph.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_WebAudioBusAndSoundSubGraph",
    ()=>_WebAudioBusAndSoundSubGraph
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subNodes$2f$spatialAudioSubNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/subNodes/spatialAudioSubNode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subNodes$2f$stereoAudioSubNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/subNodes/stereoAudioSubNode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subNodes$2f$volumeAudioSubNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/subNodes/volumeAudioSubNode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$abstractSpatialAudio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$abstractStereoAudio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/subProperties/abstractStereoAudio.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$subNodes$2f$spatialWebAudioSubNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/webAudio/subNodes/spatialWebAudioSubNode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$subNodes$2f$stereoWebAudioSubNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/webAudio/subNodes/stereoWebAudioSubNode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$subNodes$2f$webAudioBaseSubGraph$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/webAudio/subNodes/webAudioBaseSubGraph.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
class _WebAudioBusAndSoundSubGraph extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$subNodes$2f$webAudioBaseSubGraph$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_WebAudioBaseSubGraph"] {
    constructor(){
        super(...arguments);
        this._rootNode = null;
        this._inputNode = null;
    }
    /** @internal */ async initAsync(options) {
        await super.initAsync(options);
        let hasSpatialOptions = false;
        let hasStereoOptions = false;
        if (hasSpatialOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$abstractSpatialAudio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_HasSpatialAudioOptions"])(options)) {
            await this.createAndAddSubNodeAsync("Spatial" /* AudioSubNode.SPATIAL */ );
        }
        if (hasStereoOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$abstractStereoAudio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_HasStereoAudioOptions"])(options)) {
            await this.createAndAddSubNodeAsync("Stereo" /* AudioSubNode.STEREO */ );
        }
        await this._createSubNodePromisesResolvedAsync();
        if (hasSpatialOptions) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subNodes$2f$spatialAudioSubNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_GetSpatialAudioSubNode"])(this)?.setOptions(options);
        }
        if (hasStereoOptions) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subNodes$2f$stereoAudioSubNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_GetStereoAudioSubNode"])(this)?.setOptions(options);
        }
    }
    /** @internal */ get _inNode() {
        return this._inputNode;
    }
    // eslint-disable-next-line @typescript-eslint/promise-function-async
    _createSubNode(name) {
        try {
            const node = super._createSubNode(name);
            return node;
        } catch (e) {}
        switch(name){
            case "Spatial" /* AudioSubNode.SPATIAL */ :
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$subNodes$2f$spatialWebAudioSubNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_CreateSpatialAudioSubNodeAsync"])(this._owner.engine);
            case "Stereo" /* AudioSubNode.STEREO */ :
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$subNodes$2f$stereoWebAudioSubNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_CreateStereoAudioSubNodeAsync"])(this._owner.engine);
            default:
                throw new Error(`Unknown subnode name: ${name}`);
        }
    }
    _onSubNodesChanged() {
        super._onSubNodesChanged();
        const spatialNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subNodes$2f$spatialAudioSubNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_GetSpatialAudioSubNode"])(this);
        const stereoNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subNodes$2f$stereoAudioSubNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_GetStereoAudioSubNode"])(this);
        const volumeNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subNodes$2f$volumeAudioSubNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_GetVolumeAudioSubNode"])(this);
        if (spatialNode && spatialNode.getClassName() !== "_SpatialWebAudioSubNode") {
            throw new Error("Not a WebAudio subnode.");
        }
        if (stereoNode && stereoNode.getClassName() !== "_StereoWebAudioSubNode") {
            throw new Error("Not a WebAudio subnode.");
        }
        if (volumeNode && volumeNode.getClassName() !== "_VolumeWebAudioSubNode") {
            throw new Error("Not a WebAudio subnode.");
        }
        if (spatialNode) {
            spatialNode.disconnectAll();
            if (volumeNode) {
                spatialNode.connect(volumeNode);
            }
        }
        if (stereoNode) {
            stereoNode.disconnectAll();
            if (volumeNode) {
                stereoNode.connect(volumeNode);
            }
        }
        if (spatialNode && stereoNode) {
            this._rootNode = new GainNode(this._owner.engine._audioContext);
            this._rootNode.connect(spatialNode._outNode);
            this._rootNode.connect(stereoNode._outNode);
        } else {
            this._rootNode?.disconnect();
            this._rootNode = null;
        }
        let inSubNode = null;
        let inNode = null;
        if (this._rootNode) {
            inNode = this._rootNode;
        } else {
            if (spatialNode) {
                inSubNode = spatialNode;
            } else if (stereoNode) {
                inSubNode = stereoNode;
            } else if (volumeNode) {
                inSubNode = volumeNode;
            }
            inNode = inSubNode?.node ?? null;
        }
        if (this._inputNode !== inNode) {
            // Disconnect the wrapped upstream WebAudio nodes from the old wrapped WebAudio node.
            // The wrapper nodes are unaware of this change.
            if (this._inputNode && this._upstreamNodes) {
                const it = this._upstreamNodes.values();
                for(let next = it.next(); !next.done; next = it.next()){
                    next.value._outNode?.disconnect(this._inputNode);
                }
            }
            this._inputNode = inNode;
            // Connect the wrapped upstream WebAudio nodes to the new wrapped WebAudio node.
            // The wrapper nodes are unaware of this change.
            if (inNode && this._upstreamNodes) {
                const it = this._upstreamNodes.values();
                for(let next = it.next(); !next.done; next = it.next()){
                    next.value._outNode?.connect(inNode);
                }
            }
        }
    }
} //# sourceMappingURL=webAudioBusAndSoundSubGraph.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/subProperties/spatialAudio.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_SpatialAudio",
    ()=>_SpatialAudio
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subNodes$2f$spatialAudioSubNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/subNodes/spatialAudioSubNode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$abstractSpatialAudio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.js [app-client] (ecmascript)");
;
;
class _SpatialAudio extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$abstractSpatialAudio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AbstractSpatialAudio"] {
    /** @internal */ constructor(subGraph){
        super();
        this._coneInnerAngle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$abstractSpatialAudio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_SpatialAudioDefaults"].coneInnerAngle;
        this._coneOuterAngle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$abstractSpatialAudio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_SpatialAudioDefaults"].coneOuterAngle;
        this._coneOuterVolume = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$abstractSpatialAudio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_SpatialAudioDefaults"].coneOuterVolume;
        this._distanceModel = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$abstractSpatialAudio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_SpatialAudioDefaults"].distanceModel;
        this._maxDistance = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$abstractSpatialAudio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_SpatialAudioDefaults"].maxDistance;
        this._minDistance = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$abstractSpatialAudio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_SpatialAudioDefaults"].minDistance;
        this._panningModel = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$abstractSpatialAudio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_SpatialAudioDefaults"].panningModel;
        this._rolloffFactor = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$abstractSpatialAudio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_SpatialAudioDefaults"].rolloffFactor;
        const subNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subNodes$2f$spatialAudioSubNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_GetSpatialAudioSubNode"])(subGraph);
        if (subNode) {
            this._position = subNode.position.clone();
            this._rotation = subNode.rotation.clone();
            this._rotationQuaternion = subNode.rotationQuaternion.clone();
        } else {
            this._position = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$abstractSpatialAudio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_SpatialAudioDefaults"].position.clone();
            this._rotation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$abstractSpatialAudio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_SpatialAudioDefaults"].rotation.clone();
            this._rotationQuaternion = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$abstractSpatialAudio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_SpatialAudioDefaults"].rotationQuaternion.clone();
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            subGraph.createAndAddSubNodeAsync("Spatial" /* AudioSubNode.SPATIAL */ );
        }
        this._subGraph = subGraph;
    }
    /** @internal */ get coneInnerAngle() {
        return this._coneInnerAngle;
    }
    set coneInnerAngle(value) {
        this._coneInnerAngle = value;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subNodes$2f$spatialAudioSubNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_SetSpatialAudioProperty"])(this._subGraph, "coneInnerAngle", value);
    }
    /** @internal */ get coneOuterAngle() {
        return this._coneOuterAngle;
    }
    set coneOuterAngle(value) {
        this._coneOuterAngle = value;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subNodes$2f$spatialAudioSubNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_SetSpatialAudioProperty"])(this._subGraph, "coneOuterAngle", value);
    }
    /** @internal */ get coneOuterVolume() {
        return this._coneOuterVolume;
    }
    set coneOuterVolume(value) {
        this._coneOuterVolume = value;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subNodes$2f$spatialAudioSubNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_SetSpatialAudioProperty"])(this._subGraph, "coneOuterVolume", value);
    }
    /** @internal */ get distanceModel() {
        return this._distanceModel;
    }
    set distanceModel(value) {
        this._distanceModel = value;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subNodes$2f$spatialAudioSubNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_SetSpatialAudioProperty"])(this._subGraph, "distanceModel", value);
    }
    /** @internal */ get isAttached() {
        return this._subGraph.getSubNode("Spatial" /* AudioSubNode.SPATIAL */ )?.isAttached ?? false;
    }
    /** @internal */ get maxDistance() {
        return this._maxDistance;
    }
    set maxDistance(value) {
        if (value <= 0) {
            value = 0.000001;
        }
        this._maxDistance = value;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subNodes$2f$spatialAudioSubNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_SetSpatialAudioProperty"])(this._subGraph, "maxDistance", value);
    }
    /** @internal */ get minDistance() {
        return this._minDistance;
    }
    set minDistance(value) {
        this._minDistance = value;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subNodes$2f$spatialAudioSubNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_SetSpatialAudioProperty"])(this._subGraph, "minDistance", value);
    }
    /** @internal */ get panningModel() {
        return this._panningModel;
    }
    set panningModel(value) {
        this._panningModel = value;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subNodes$2f$spatialAudioSubNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_SetSpatialAudioProperty"])(this._subGraph, "panningModel", value);
    }
    /** @internal */ get position() {
        return this._position;
    }
    set position(value) {
        this._position = value;
        this._updatePosition();
    }
    /** @internal */ get rolloffFactor() {
        return this._rolloffFactor;
    }
    set rolloffFactor(value) {
        this._rolloffFactor = value;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subNodes$2f$spatialAudioSubNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_SetSpatialAudioProperty"])(this._subGraph, "rolloffFactor", value);
    }
    /** @internal */ get rotation() {
        return this._rotation;
    }
    set rotation(value) {
        this._rotation = value;
        this._updateRotation();
    }
    /** @internal */ get rotationQuaternion() {
        return this._rotationQuaternion;
    }
    set rotationQuaternion(value) {
        this._rotationQuaternion = value;
        this._updateRotation();
    }
    /**
     * Attaches to a scene node.
     *
     * Detaches automatically before attaching to the given scene node.
     * If `sceneNode` is `null` it is the same as calling `detach()`.
     *
     * @param sceneNode The scene node to attach to, or `null` to detach.
     * @param useBoundingBox Whether to use the bounding box of the node for positioning. Defaults to `false`.
     * @param attachmentType Whether to attach to the node's position and/or rotation. Defaults to `PositionAndRotation`.
     */ attach(sceneNode, useBoundingBox = false, attachmentType = 3 /* SpatialAudioAttachmentType.PositionAndRotation */ ) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subNodes$2f$spatialAudioSubNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_GetSpatialAudioSubNode"])(this._subGraph)?.attach(sceneNode, useBoundingBox, attachmentType);
    }
    /**
     * Detaches from the scene node if attached.
     */ detach() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subNodes$2f$spatialAudioSubNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_GetSpatialAudioSubNode"])(this._subGraph)?.detach();
    }
    /** @internal */ update() {
        const subNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subNodes$2f$spatialAudioSubNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_GetSpatialAudioSubNode"])(this._subGraph);
        if (!subNode) {
            return;
        }
        if (subNode.isAttached) {
            subNode.update();
        } else {
            this._updatePosition(subNode);
            this._updateRotation(subNode);
        }
    }
    _updatePosition(subNode = null) {
        if (!subNode) {
            subNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subNodes$2f$spatialAudioSubNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_GetSpatialAudioSubNode"])(this._subGraph);
            if (!subNode) {
                return;
            }
        }
        const position = subNode.position;
        if (!position.equalsWithEpsilon(this._position)) {
            subNode.position.copyFrom(this._position);
            subNode._updatePosition();
        }
    }
    _updateRotation(subNode = null) {
        if (!subNode) {
            subNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subNodes$2f$spatialAudioSubNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_GetSpatialAudioSubNode"])(this._subGraph);
            if (!subNode) {
                return;
            }
        }
        if (!subNode.rotationQuaternion.equalsWithEpsilon(this._rotationQuaternion)) {
            subNode.rotationQuaternion.copyFrom(this._rotationQuaternion);
            subNode._updateRotation();
        } else if (!subNode.rotation.equalsWithEpsilon(this._rotation)) {
            subNode.rotation.copyFrom(this._rotation);
            subNode._updateRotation();
        }
    }
} //# sourceMappingURL=spatialAudio.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/webAudio/subProperties/spatialWebAudio.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_SpatialWebAudio",
    ()=>_SpatialWebAudio
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$spatialAudio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/subProperties/spatialAudio.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$components$2f$spatialWebAudioUpdaterComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/webAudio/components/spatialWebAudioUpdaterComponent.js [app-client] (ecmascript)");
;
;
class _SpatialWebAudio extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$spatialAudio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_SpatialAudio"] {
    /** @internal */ constructor(subGraph, autoUpdate, minUpdateTime){
        super(subGraph);
        this._updaterComponent = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$components$2f$spatialWebAudioUpdaterComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_SpatialWebAudioUpdaterComponent"](this, autoUpdate, minUpdateTime);
    }
    /** @internal */ get minUpdateTime() {
        return this._updaterComponent.minUpdateTime;
    }
    /** @internal */ set minUpdateTime(value) {
        this._updaterComponent.minUpdateTime = value;
    }
    /** @internal */ dispose() {
        this._updaterComponent.dispose();
        this._updaterComponent = null;
    }
} //# sourceMappingURL=spatialWebAudio.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/webAudio/webAudioBus.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_WebAudioBus",
    ()=>_WebAudioBus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$audioBus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/audioBus.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$abstractSpatialAudio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$stereoAudio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/subProperties/stereoAudio.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$subNodes$2f$webAudioBusAndSoundSubGraph$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/webAudio/subNodes/webAudioBusAndSoundSubGraph.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$subProperties$2f$spatialWebAudio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/webAudio/subProperties/spatialWebAudio.js [app-client] (ecmascript)");
;
;
;
;
;
class _WebAudioBus extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$audioBus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AudioBus"] {
    /** @internal */ constructor(name, engine, options){
        super(name, engine);
        this._spatial = null;
        this._spatialAutoUpdate = true;
        this._spatialMinUpdateTime = 0;
        this._stereo = null;
        if (typeof options.spatialAutoUpdate === "boolean") {
            this._spatialAutoUpdate = options.spatialAutoUpdate;
        }
        if (typeof options.spatialMinUpdateTime === "number") {
            this._spatialMinUpdateTime = options.spatialMinUpdateTime;
        }
        this._subGraph = new _WebAudioBus._SubGraph(this);
    }
    /** @internal */ async _initAsync(options) {
        if (options.outBus) {
            this.outBus = options.outBus;
        } else {
            await this.engine.isReadyPromise;
            this.outBus = this.engine.defaultMainBus;
        }
        await this._subGraph.initAsync(options);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$abstractSpatialAudio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_HasSpatialAudioOptions"])(options)) {
            this._initSpatialProperty();
        }
        this.engine._addNode(this);
    }
    /** @internal */ dispose() {
        super.dispose();
        this._spatial = null;
        this._stereo = null;
        this.engine._removeNode(this);
    }
    /** @internal */ get _inNode() {
        return this._subGraph._inNode;
    }
    /** @internal */ get _outNode() {
        return this._subGraph._outNode;
    }
    /** @internal */ get spatial() {
        if (this._spatial) {
            return this._spatial;
        }
        return this._initSpatialProperty();
    }
    /** @internal */ get stereo() {
        return this._stereo ?? (this._stereo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$stereoAudio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_StereoAudio"](this._subGraph));
    }
    /** @internal */ getClassName() {
        return "_WebAudioBus";
    }
    _connect(node) {
        const connected = super._connect(node);
        if (!connected) {
            return false;
        }
        if (node._inNode) {
            this._outNode?.connect(node._inNode);
        }
        return true;
    }
    _disconnect(node) {
        const disconnected = super._disconnect(node);
        if (!disconnected) {
            return false;
        }
        if (node._inNode) {
            this._outNode?.disconnect(node._inNode);
        }
        return true;
    }
    _initSpatialProperty() {
        if (!this._spatial) {
            this._spatial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$subProperties$2f$spatialWebAudio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_SpatialWebAudio"](this._subGraph, this._spatialAutoUpdate, this._spatialMinUpdateTime);
        }
        return this._spatial;
    }
}
_WebAudioBus._SubGraph = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$subNodes$2f$webAudioBusAndSoundSubGraph$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_WebAudioBusAndSoundSubGraph"] {
    get _downstreamNodes() {
        return this._owner._downstreamNodes ?? null;
    }
    get _upstreamNodes() {
        return this._owner._upstreamNodes ?? null;
    }
}; //# sourceMappingURL=webAudioBus.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/webAudio/webAudioMainBus.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_WebAudioMainBus",
    ()=>_WebAudioMainBus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$mainAudioBus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/mainAudioBus.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$subNodes$2f$webAudioBaseSubGraph$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/webAudio/subNodes/webAudioBaseSubGraph.js [app-client] (ecmascript)");
;
;
class _WebAudioMainBus extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$mainAudioBus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MainAudioBus"] {
    /** @internal */ constructor(name, engine){
        super(name, engine);
        this._subGraph = new _WebAudioMainBus._SubGraph(this);
    }
    /** @internal */ async _initAsync(options) {
        await this._subGraph.initAsync(options);
        if (this.engine.mainOut) {
            if (!this._connect(this.engine.mainOut)) {
                throw new Error("Connect failed");
            }
        }
        this.engine._addMainBus(this);
    }
    /** @internal */ dispose() {
        super.dispose();
        this.engine._removeMainBus(this);
    }
    /** @internal */ get _inNode() {
        return this._subGraph._inNode;
    }
    /** @internal */ get _outNode() {
        return this._subGraph._outNode;
    }
    _connect(node) {
        const connected = super._connect(node);
        if (!connected) {
            return false;
        }
        if (node._inNode) {
            this._outNode?.connect(node._inNode);
        }
        return true;
    }
    _disconnect(node) {
        const disconnected = super._disconnect(node);
        if (!disconnected) {
            return false;
        }
        if (node._inNode) {
            this._outNode?.disconnect(node._inNode);
        }
        return true;
    }
    /** @internal */ getClassName() {
        return "_WebAudioMainBus";
    }
}
_WebAudioMainBus._SubGraph = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$subNodes$2f$webAudioBaseSubGraph$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_WebAudioBaseSubGraph"] {
    get _downstreamNodes() {
        return this._owner._downstreamNodes ?? null;
    }
}; //# sourceMappingURL=webAudioMainBus.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/webAudio/webAudioSoundSource.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_WebAudioSoundSource",
    ()=>_WebAudioSoundSource
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$abstractSoundSource$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/abstractSoundSource.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$abstractSpatialAudio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$stereoAudio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/subProperties/stereoAudio.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$subNodes$2f$webAudioBusAndSoundSubGraph$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/webAudio/subNodes/webAudioBusAndSoundSubGraph.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$subProperties$2f$spatialWebAudio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/webAudio/subProperties/spatialWebAudio.js [app-client] (ecmascript)");
;
;
;
;
;
class _WebAudioSoundSource extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$abstractSoundSource$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AbstractSoundSource"] {
    /** @internal */ constructor(name, webAudioNode, engine, options){
        super(name, engine);
        this._spatial = null;
        this._spatialAutoUpdate = true;
        this._spatialMinUpdateTime = 0;
        this._stereo = null;
        if (typeof options.spatialAutoUpdate === "boolean") {
            this._spatialAutoUpdate = options.spatialAutoUpdate;
        }
        if (typeof options.spatialMinUpdateTime === "number") {
            this._spatialMinUpdateTime = options.spatialMinUpdateTime;
        }
        this._audioContext = this.engine._audioContext;
        this._webAudioNode = webAudioNode;
        this._subGraph = new _WebAudioSoundSource._SubGraph(this);
    }
    /** @internal */ async _initAsync(options) {
        if (options.outBus) {
            this.outBus = options.outBus;
        } else if (options.outBusAutoDefault !== false) {
            await this.engine.isReadyPromise;
            this.outBus = this.engine.defaultMainBus;
        }
        await this._subGraph.initAsync(options);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$abstractSpatialAudio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_HasSpatialAudioOptions"])(options)) {
            this._initSpatialProperty();
        }
        this.engine._addNode(this);
    }
    /** @internal */ get _inNode() {
        return this._webAudioNode;
    }
    /** @internal */ get _outNode() {
        return this._subGraph._outNode;
    }
    /** @internal */ get spatial() {
        if (this._spatial) {
            return this._spatial;
        }
        return this._initSpatialProperty();
    }
    /** @internal */ get stereo() {
        return this._stereo ?? (this._stereo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$stereoAudio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_StereoAudio"](this._subGraph));
    }
    /** @internal */ dispose() {
        super.dispose();
        this._spatial?.dispose();
        this._spatial = null;
        this._stereo = null;
        this._subGraph.dispose();
        this.engine._removeNode(this);
    }
    /** @internal */ getClassName() {
        return "_WebAudioSoundSource";
    }
    _connect(node) {
        const connected = super._connect(node);
        if (!connected) {
            return false;
        }
        // If the wrapped node is not available now, it will be connected later by the subgraph.
        if (node._inNode) {
            this._outNode?.connect(node._inNode);
        }
        return true;
    }
    _disconnect(node) {
        const disconnected = super._disconnect(node);
        if (!disconnected) {
            return false;
        }
        if (node._inNode) {
            this._outNode?.disconnect(node._inNode);
        }
        return true;
    }
    _initSpatialProperty() {
        if (!this._spatial) {
            this._spatial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$subProperties$2f$spatialWebAudio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_SpatialWebAudio"](this._subGraph, this._spatialAutoUpdate, this._spatialMinUpdateTime);
        }
        return this._spatial;
    }
}
_WebAudioSoundSource._SubGraph = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$subNodes$2f$webAudioBusAndSoundSubGraph$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_WebAudioBusAndSoundSubGraph"] {
    get _downstreamNodes() {
        return this._owner._downstreamNodes ?? null;
    }
    get _upstreamNodes() {
        return this._owner._upstreamNodes ?? null;
    }
    _onSubNodesChanged() {
        super._onSubNodesChanged();
        this._owner._inNode.disconnect();
        if (this._owner._subGraph._inNode) {
            this._owner._inNode.connect(this._owner._subGraph._inNode);
        }
    }
}; //# sourceMappingURL=webAudioSoundSource.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/abstractSoundInstance.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_AbstractSoundInstance",
    ()=>_AbstractSoundInstance
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$abstractAudioNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/abstractAudioNode.js [app-client] (ecmascript)");
;
;
class _AbstractSoundInstance extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$abstractAudioNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AbstractAudioNode"] {
    constructor(sound){
        super(sound.engine, 2 /* AudioNodeType.HAS_OUTPUTS */ );
        this._state = 1 /* SoundState.Stopped */ ;
        /** Observable triggered when the sound instance's playback ends */ this.onEndedObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        /** Observable triggered if the sound instance encounters an error and can not be played */ this.onErrorObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        /** Observable triggered when the sound instance's state changes */ this.onStateChangedObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        this._sound = sound;
    }
    /** The playback state of the sound instance */ get state() {
        return this._state;
    }
    /** @internal */ dispose() {
        super.dispose();
        this.stop();
        this.onEndedObservable.clear();
        this.onStateChangedObservable.clear();
    }
    _setState(value) {
        if (this._state === value) {
            return;
        }
        this._state = value;
        this.onStateChangedObservable.notifyObservers(this);
        if (this._state === 1 /* SoundState.Stopped */ ) {
            this.onEndedObservable.notifyObservers(this);
        }
    }
} //# sourceMappingURL=abstractSoundInstance.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/staticSoundInstance.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_StaticSoundInstance",
    ()=>_StaticSoundInstance
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$abstractSoundInstance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/abstractSoundInstance.js [app-client] (ecmascript)");
;
class _StaticSoundInstance extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$abstractSoundInstance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_AbstractSoundInstance"] {
} //# sourceMappingURL=staticSoundInstance.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/webAudio/webAudioStaticSound.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_WebAudioStaticSound",
    ()=>_WebAudioStaticSound,
    "_WebAudioStaticSoundBuffer",
    ()=>_WebAudioStaticSoundBuffer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$staticSound$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/staticSound.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$staticSoundBuffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/staticSoundBuffer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$staticSoundInstance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/staticSoundInstance.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$abstractSpatialAudio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$stereoAudio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/subProperties/stereoAudio.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$audioUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/audioUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$components$2f$webAudioParameterComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/webAudio/components/webAudioParameterComponent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$subNodes$2f$webAudioBusAndSoundSubGraph$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/webAudio/subNodes/webAudioBusAndSoundSubGraph.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$subProperties$2f$spatialWebAudio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/webAudio/subProperties/spatialWebAudio.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
class _WebAudioStaticSound extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$staticSound$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StaticSound"] {
    /** @internal */ constructor(name, engine, options){
        super(name, engine);
        this._spatial = null;
        this._spatialAutoUpdate = true;
        this._spatialMinUpdateTime = 0;
        this._stereo = null;
        if (typeof options.spatialAutoUpdate === "boolean") {
            this._spatialAutoUpdate = options.spatialAutoUpdate;
        }
        if (typeof options.spatialMinUpdateTime === "number") {
            this._spatialMinUpdateTime = options.spatialMinUpdateTime;
        }
        this._options = {
            autoplay: options.autoplay ?? false,
            duration: options.duration ?? 0,
            loop: options.loop ?? false,
            loopEnd: options.loopEnd ?? 0,
            loopStart: options.loopStart ?? 0,
            maxInstances: options.maxInstances ?? Infinity,
            pitch: options.pitch ?? 0,
            playbackRate: options.playbackRate ?? 1,
            startOffset: options.startOffset ?? 0
        };
        this._subGraph = new _WebAudioStaticSound._SubGraph(this);
    }
    /** @internal */ async _initAsync(source, options) {
        this._audioContext = this.engine._audioContext;
        if (source instanceof _WebAudioStaticSoundBuffer) {
            this._buffer = source;
        } else if (typeof source === "string" || Array.isArray(source) || source instanceof ArrayBuffer || source instanceof AudioBuffer) {
            this._buffer = await this.engine.createSoundBufferAsync(source, options);
        }
        if (options.outBus) {
            this.outBus = options.outBus;
        } else if (options.outBusAutoDefault !== false) {
            await this.engine.isReadyPromise;
            this.outBus = this.engine.defaultMainBus;
        }
        await this._subGraph.initAsync(options);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$abstractSpatialAudio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_HasSpatialAudioOptions"])(options)) {
            this._initSpatialProperty();
        }
        if (options.autoplay) {
            this.play();
        }
        this.engine._addSound(this);
    }
    /** @internal */ get buffer() {
        return this._buffer;
    }
    /** @internal */ get _inNode() {
        return this._subGraph._inNode;
    }
    /** @internal */ get _outNode() {
        return this._subGraph._outNode;
    }
    /** @internal */ get spatial() {
        if (this._spatial) {
            return this._spatial;
        }
        return this._initSpatialProperty();
    }
    /** @internal */ get stereo() {
        return this._stereo ?? (this._stereo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$stereoAudio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_StereoAudio"](this._subGraph));
    }
    /** @internal */ async cloneAsync(options = null) {
        const clone = await this.engine.createSoundAsync(this.name, options?.cloneBuffer ? this.buffer.clone() : this.buffer, this._options);
        clone.outBus = options?.outBus ? options.outBus : this.outBus;
        return clone;
    }
    /** @internal */ dispose() {
        super.dispose();
        this._spatial?.dispose();
        this._spatial = null;
        this._stereo = null;
        this._subGraph.dispose();
        this.engine._removeSound(this);
    }
    /** @internal */ getClassName() {
        return "_WebAudioStaticSound";
    }
    _createInstance() {
        return new _WebAudioStaticSoundInstance(this, this._options);
    }
    _connect(node) {
        const connected = super._connect(node);
        if (!connected) {
            return false;
        }
        // If the wrapped node is not available now, it will be connected later by the subgraph.
        if (node._inNode) {
            this._outNode?.connect(node._inNode);
        }
        return true;
    }
    _disconnect(node) {
        const disconnected = super._disconnect(node);
        if (!disconnected) {
            return false;
        }
        if (node._inNode) {
            this._outNode?.disconnect(node._inNode);
        }
        return true;
    }
    _initSpatialProperty() {
        if (!this._spatial) {
            this._spatial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$subProperties$2f$spatialWebAudio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_SpatialWebAudio"](this._subGraph, this._spatialAutoUpdate, this._spatialMinUpdateTime);
        }
        return this._spatial;
    }
}
_WebAudioStaticSound._SubGraph = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$subNodes$2f$webAudioBusAndSoundSubGraph$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_WebAudioBusAndSoundSubGraph"] {
    get _downstreamNodes() {
        return this._owner._downstreamNodes ?? null;
    }
    get _upstreamNodes() {
        return this._owner._upstreamNodes ?? null;
    }
};
class _WebAudioStaticSoundBuffer extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$staticSoundBuffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StaticSoundBuffer"] {
    /** @internal */ constructor(engine){
        super(engine);
    }
    async _initAsync(source, options) {
        if (source instanceof AudioBuffer) {
            this._audioBuffer = source;
        } else if (typeof source === "string") {
            await this._initFromUrlAsync(source);
        } else if (Array.isArray(source)) {
            await this._initFromUrlsAsync(source, options.skipCodecCheck ?? false);
        } else if (source instanceof ArrayBuffer) {
            await this._initFromArrayBufferAsync(source);
        }
    }
    /** @internal */ get channelCount() {
        return this._audioBuffer.numberOfChannels;
    }
    /** @internal */ get duration() {
        return this._audioBuffer.duration;
    }
    /** @internal */ get length() {
        return this._audioBuffer.length;
    }
    /** @internal */ get sampleRate() {
        return this._audioBuffer.sampleRate;
    }
    /** @internal */ clone(options = null) {
        const audioBuffer = new AudioBuffer({
            length: this._audioBuffer.length,
            numberOfChannels: this._audioBuffer.numberOfChannels,
            sampleRate: this._audioBuffer.sampleRate
        });
        for(let i = 0; i < this._audioBuffer.numberOfChannels; i++){
            audioBuffer.copyToChannel(this._audioBuffer.getChannelData(i), i);
        }
        const buffer = new _WebAudioStaticSoundBuffer(this.engine);
        buffer._audioBuffer = audioBuffer;
        buffer.name = options?.name ? options.name : this.name;
        return buffer;
    }
    async _initFromArrayBufferAsync(arrayBuffer) {
        this._audioBuffer = await this.engine._audioContext.decodeAudioData(arrayBuffer);
    }
    async _initFromUrlAsync(url) {
        url = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$audioUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_CleanUrl"])(url);
        await this._initFromArrayBufferAsync(await (await fetch(url)).arrayBuffer());
    }
    async _initFromUrlsAsync(urls, skipCodecCheck) {
        for (const url of urls){
            if (skipCodecCheck) {
                // eslint-disable-next-line no-await-in-loop
                await this._initFromUrlAsync(url);
            } else {
                const matches = url.match(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$audioUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_FileExtensionRegex"]);
                const format = matches?.at(1);
                if (format && this.engine.isFormatValid(format)) {
                    try {
                        // eslint-disable-next-line no-await-in-loop
                        await this._initFromUrlAsync(url);
                    } catch  {
                        if (format && 0 < format.length) {
                            this.engine.flagInvalidFormat(format);
                        }
                    }
                }
            }
            if (this._audioBuffer) {
                break;
            }
        }
    }
}
/** @internal */ class _WebAudioStaticSoundInstance extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$staticSoundInstance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_StaticSoundInstance"] {
    constructor(sound, options){
        super(sound);
        this._enginePlayTime = 0;
        this._enginePauseTime = 0;
        this._isConnected = false;
        this._pitch = null;
        this._playbackRate = null;
        this._sourceNode = null;
        this._onEnded = ()=>{
            this._enginePlayTime = 0;
            this.onEndedObservable.notifyObservers(this);
            this._deinitSourceNode();
        };
        this._onEngineStateChanged = ()=>{
            if (this.engine.state !== "running") {
                return;
            }
            if (this._options.loop && this.state === 2 /* SoundState.Starting */ ) {
                this.play();
            }
            this.engine.stateChangedObservable.removeCallback(this._onEngineStateChanged);
        };
        this._options = options;
        this._volumeNode = new GainNode(sound._audioContext);
        this._initSourceNode();
    }
    /** @internal */ dispose() {
        super.dispose();
        this._pitch?.dispose();
        this._playbackRate?.dispose();
        this._sourceNode = null;
        this.stop();
        this._deinitSourceNode();
        this.engine.stateChangedObservable.removeCallback(this._onEngineStateChanged);
    }
    /** @internal */ get currentTime() {
        if (this._state === 1 /* SoundState.Stopped */ ) {
            return 0;
        }
        const timeSinceLastStart = this._state === 5 /* SoundState.Paused */  ? 0 : this.engine.currentTime - this._enginePlayTime;
        return this._enginePauseTime + timeSinceLastStart + this._options.startOffset;
    }
    set currentTime(value) {
        const restart = this._state === 2 /* SoundState.Starting */  || this._state === 3 /* SoundState.Started */ ;
        if (restart) {
            // Stop source node without sending `onEndedObservable` so instance's `dispose` function is not called.
            const sourceNode = this._sourceNode;
            this._deinitSourceNode();
            sourceNode?.stop();
            this._state = 1 /* SoundState.Stopped */ ;
        }
        this._options.startOffset = value;
        if (restart) {
            this.play();
        }
    }
    get _outNode() {
        return this._volumeNode;
    }
    /** @internal */ set pitch(value) {
        this._pitch?.setTargetValue(value);
    }
    /** @internal */ set playbackRate(value) {
        this._playbackRate?.setTargetValue(value);
    }
    /** @internal */ get startTime() {
        if (this._state === 1 /* SoundState.Stopped */ ) {
            return 0;
        }
        return this._enginePlayTime;
    }
    /** @internal */ getClassName() {
        return "_WebAudioStaticSoundInstance";
    }
    /** @internal */ play(options = {}) {
        if (this._state === 3 /* SoundState.Started */ ) {
            return;
        }
        if (options.duration !== undefined) {
            this._options.duration = options.duration;
        }
        if (options.loop !== undefined) {
            this._options.loop = options.loop;
        }
        if (options.loopStart !== undefined) {
            this._options.loopStart = options.loopStart;
        }
        if (options.loopEnd !== undefined) {
            this._options.loopEnd = options.loopEnd;
        }
        if (options.startOffset !== undefined) {
            this._options.startOffset = options.startOffset;
        }
        let startOffset = this._options.startOffset;
        if (this._state === 5 /* SoundState.Paused */ ) {
            startOffset += this.currentTime;
            startOffset %= this._sound.buffer.duration;
        }
        this._enginePlayTime = this.engine.currentTime + (options.waitTime ?? 0);
        this._volumeNode.gain.value = options.volume ?? 1;
        this._initSourceNode();
        if (this.engine.state === "running") {
            this._setState(3 /* SoundState.Started */ );
            this._sourceNode?.start(this._enginePlayTime, startOffset, this._options.duration > 0 ? this._options.duration : undefined);
        } else if (this._options.loop) {
            this._setState(2 /* SoundState.Starting */ );
            this.engine.stateChangedObservable.add(this._onEngineStateChanged);
        }
    }
    /** @internal */ pause() {
        if (this._state === 5 /* SoundState.Paused */ ) {
            return;
        }
        this._setState(5 /* SoundState.Paused */ );
        this._enginePauseTime += this.engine.currentTime - this._enginePlayTime;
        this._sourceNode?.stop();
        this._deinitSourceNode();
    }
    /** @internal */ resume() {
        if (this._state === 5 /* SoundState.Paused */ ) {
            this.play();
        }
    }
    /** @internal */ stop(options = {}) {
        if (this._state === 1 /* SoundState.Stopped */ ) {
            return;
        }
        const engineStopTime = this.engine.currentTime + (options.waitTime ?? 0);
        this._sourceNode?.stop(engineStopTime);
        if (options.waitTime === undefined || options.waitTime <= 0) {
            this._setState(1 /* SoundState.Stopped */ );
            this.engine.stateChangedObservable.removeCallback(this._onEngineStateChanged);
        }
    }
    _connect(node) {
        const connected = super._connect(node);
        if (!connected) {
            return false;
        }
        // If the wrapped node is not available now, it will be connected later by the sound's subgraph.
        if (node instanceof _WebAudioStaticSound && node._inNode) {
            this._outNode?.connect(node._inNode);
            this._isConnected = true;
        }
        return true;
    }
    _disconnect(node) {
        const disconnected = super._disconnect(node);
        if (!disconnected) {
            return false;
        }
        if (node instanceof _WebAudioStaticSound && node._inNode) {
            this._outNode?.disconnect(node._inNode);
            this._isConnected = false;
        }
        return true;
    }
    _deinitSourceNode() {
        if (!this._sourceNode) {
            return;
        }
        if (this._isConnected && !this._disconnect(this._sound)) {
            throw new Error("Disconnect failed");
        }
        this._sourceNode.disconnect(this._volumeNode);
        this._sourceNode.removeEventListener("ended", this._onEnded);
        this._sourceNode = null;
    }
    _initSourceNode() {
        if (!this._sourceNode) {
            this._sourceNode = new AudioBufferSourceNode(this._sound._audioContext, {
                buffer: this._sound.buffer._audioBuffer
            });
            this._sourceNode.addEventListener("ended", this._onEnded, {
                once: true
            });
            this._sourceNode.connect(this._volumeNode);
            if (!this._connect(this._sound)) {
                throw new Error("Connect failed");
            }
            this._pitch = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$components$2f$webAudioParameterComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_WebAudioParameterComponent"](this.engine, this._sourceNode.detune);
            this._playbackRate = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$components$2f$webAudioParameterComponent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_WebAudioParameterComponent"](this.engine, this._sourceNode.playbackRate);
        }
        const node = this._sourceNode;
        node.detune.value = this._sound.pitch;
        node.loop = this._options.loop;
        node.loopEnd = this._options.loopEnd;
        node.loopStart = this._options.loopStart;
        node.playbackRate.value = this._sound.playbackRate;
    }
} //# sourceMappingURL=webAudioStaticSound.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/streamingSoundInstance.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_StreamingSoundInstance",
    ()=>_StreamingSoundInstance
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$abstractSoundInstance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/abstractSoundInstance.js [app-client] (ecmascript)");
;
;
class _StreamingSoundInstance extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$abstractSoundInstance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_AbstractSoundInstance"] {
    constructor(sound){
        super(sound);
        /** @internal */ this.onReadyObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Observable"]();
        /** @internal */ this.preloadedPromise = new Promise((resolve, reject)=>{
            this._rejectPreloadedProimse = reject;
            this._resolvePreloadedPromise = resolve;
        });
        this.onErrorObservable.add(this._rejectPreloadedProimse);
        this.onReadyObservable.add(this._resolvePreloadedPromise);
    }
    /** @internal */ set startOffset(value) {
        this._options.startOffset = value;
    }
    /** @internal */ dispose() {
        super.dispose();
        this.onErrorObservable.clear();
        this.onReadyObservable.clear();
        this._resolvePreloadedPromise();
    }
} //# sourceMappingURL=streamingSoundInstance.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/webAudio/webAudioStreamingSound.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_WebAudioStreamingSound",
    ()=>_WebAudioStreamingSound
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/tools.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$streamingSound$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/streamingSound.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$streamingSoundInstance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/streamingSoundInstance.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$abstractSpatialAudio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$stereoAudio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/subProperties/stereoAudio.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$audioUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/audioUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$subNodes$2f$webAudioBusAndSoundSubGraph$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/webAudio/subNodes/webAudioBusAndSoundSubGraph.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$subProperties$2f$spatialWebAudio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/webAudio/subProperties/spatialWebAudio.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
class _WebAudioStreamingSound extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$streamingSound$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StreamingSound"] {
    /** @internal */ constructor(name, engine, options){
        super(name, engine);
        this._spatial = null;
        this._spatialAutoUpdate = true;
        this._spatialMinUpdateTime = 0;
        this._stereo = null;
        if (typeof options.spatialAutoUpdate === "boolean") {
            this._spatialAutoUpdate = options.spatialAutoUpdate;
        }
        if (typeof options.spatialMinUpdateTime === "number") {
            this._spatialMinUpdateTime = options.spatialMinUpdateTime;
        }
        this._options = {
            autoplay: options.autoplay ?? false,
            loop: options.loop ?? false,
            maxInstances: options.maxInstances ?? Infinity,
            preloadCount: options.preloadCount ?? 1,
            startOffset: options.startOffset ?? 0
        };
        this._subGraph = new _WebAudioStreamingSound._SubGraph(this);
    }
    /** @internal */ async _initAsync(source, options) {
        const audioContext = this.engine._audioContext;
        if (!(audioContext instanceof AudioContext)) {
            throw new Error("Unsupported audio context type.");
        }
        this._audioContext = audioContext;
        this._source = source;
        if (options.outBus) {
            this.outBus = options.outBus;
        } else if (options.outBusAutoDefault !== false) {
            await this.engine.isReadyPromise;
            this.outBus = this.engine.defaultMainBus;
        }
        await this._subGraph.initAsync(options);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$abstractSpatialAudio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_HasSpatialAudioOptions"])(options)) {
            this._initSpatialProperty();
        }
        if (this.preloadCount) {
            await this.preloadInstancesAsync(this.preloadCount);
        }
        if (options.autoplay) {
            this.play(options);
        }
        this.engine._addSound(this);
    }
    /** @internal */ get _inNode() {
        return this._subGraph._inNode;
    }
    /** @internal */ get _outNode() {
        return this._subGraph._outNode;
    }
    /** @internal */ get spatial() {
        if (this._spatial) {
            return this._spatial;
        }
        return this._initSpatialProperty();
    }
    /** @internal */ get stereo() {
        return this._stereo ?? (this._stereo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$stereoAudio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_StereoAudio"](this._subGraph));
    }
    /** @internal */ dispose() {
        super.dispose();
        this._spatial = null;
        this._stereo = null;
        this._subGraph.dispose();
        this.engine._removeSound(this);
    }
    /** @internal */ getClassName() {
        return "_WebAudioStreamingSound";
    }
    _createInstance() {
        return new _WebAudioStreamingSoundInstance(this, this._options);
    }
    _connect(node) {
        const connected = super._connect(node);
        if (!connected) {
            return false;
        }
        // If the wrapped node is not available now, it will be connected later by the subgraph.
        if (node._inNode) {
            this._outNode?.connect(node._inNode);
        }
        return true;
    }
    _disconnect(node) {
        const disconnected = super._disconnect(node);
        if (!disconnected) {
            return false;
        }
        if (node._inNode) {
            this._outNode?.disconnect(node._inNode);
        }
        return true;
    }
    _initSpatialProperty() {
        if (!this._spatial) {
            this._spatial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$subProperties$2f$spatialWebAudio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_SpatialWebAudio"](this._subGraph, this._spatialAutoUpdate, this._spatialMinUpdateTime);
        }
        return this._spatial;
    }
}
_WebAudioStreamingSound._SubGraph = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$subNodes$2f$webAudioBusAndSoundSubGraph$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_WebAudioBusAndSoundSubGraph"] {
    get _downstreamNodes() {
        return this._owner._downstreamNodes ?? null;
    }
    get _upstreamNodes() {
        return this._owner._upstreamNodes ?? null;
    }
};
/** @internal */ class _WebAudioStreamingSoundInstance extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$streamingSoundInstance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_StreamingSoundInstance"] {
    constructor(sound, options){
        super(sound);
        this._currentTimeChangedWhilePaused = false;
        this._enginePlayTime = Infinity;
        this._enginePauseTime = 0;
        this._isReady = false;
        this._isReadyPromise = new Promise((resolve, reject)=>{
            this._resolveIsReadyPromise = resolve;
            this._rejectIsReadyPromise = reject;
        });
        this._onCanPlayThrough = ()=>{
            this._isReady = true;
            this._resolveIsReadyPromise(this._mediaElement);
            this.onReadyObservable.notifyObservers(this);
        };
        this._onEnded = ()=>{
            this.onEndedObservable.notifyObservers(this);
            this.dispose();
        };
        this._onError = (reason)=>{
            this._setState(4 /* SoundState.FailedToStart */ );
            this.onErrorObservable.notifyObservers(reason);
            this._rejectIsReadyPromise(reason);
            this.dispose();
        };
        this._onEngineStateChanged = ()=>{
            if (this.engine.state !== "running") {
                return;
            }
            if (this._options.loop && this.state === 2 /* SoundState.Starting */ ) {
                this.play();
            }
            this.engine.stateChangedObservable.removeCallback(this._onEngineStateChanged);
        };
        this._onUserGesture = ()=>{
            this.play();
        };
        this._options = options;
        this._volumeNode = new GainNode(sound._audioContext);
        if (typeof sound._source === "string") {
            this._initFromUrl(sound._source);
        } else if (Array.isArray(sound._source)) {
            this._initFromUrls(sound._source);
        } else if (sound._source instanceof HTMLMediaElement) {
            this._initFromMediaElement(sound._source);
        } else {
            throw new Error(`Invalid streaming sound source (${sound._source}).`);
        }
    }
    /** @internal */ get currentTime() {
        if (this._state === 1 /* SoundState.Stopped */ ) {
            return 0;
        }
        const timeSinceLastStart = this._state === 5 /* SoundState.Paused */  ? 0 : this.engine.currentTime - this._enginePlayTime;
        return this._enginePauseTime + timeSinceLastStart + this._options.startOffset;
    }
    set currentTime(value) {
        const restart = this._state === 2 /* SoundState.Starting */  || this._state === 3 /* SoundState.Started */ ;
        if (restart) {
            this._mediaElement.pause();
            this._state = 1 /* SoundState.Stopped */ ;
        }
        this._options.startOffset = value;
        if (restart) {
            this.play({
                startOffset: value
            });
        } else if (this._state === 5 /* SoundState.Paused */ ) {
            this._currentTimeChangedWhilePaused = true;
        }
    }
    get _outNode() {
        return this._volumeNode;
    }
    /** @internal */ get startTime() {
        if (this._state === 1 /* SoundState.Stopped */ ) {
            return 0;
        }
        return this._enginePlayTime;
    }
    /** @internal */ dispose() {
        super.dispose();
        this.stop();
        this._sourceNode?.disconnect(this._volumeNode);
        this._sourceNode = null;
        this._mediaElement.removeEventListener("error", this._onError);
        this._mediaElement.removeEventListener("ended", this._onEnded);
        this._mediaElement.removeEventListener("canplaythrough", this._onCanPlayThrough);
        for (const source of Array.from(this._mediaElement.children)){
            this._mediaElement.removeChild(source);
        }
        this.engine.stateChangedObservable.removeCallback(this._onEngineStateChanged);
        this.engine.userGestureObservable.removeCallback(this._onUserGesture);
    }
    /** @internal */ play(options = {}) {
        if (this._state === 3 /* SoundState.Started */ ) {
            return;
        }
        if (options.loop !== undefined) {
            this._options.loop = options.loop;
        }
        this._mediaElement.loop = this._options.loop;
        let startOffset = options.startOffset;
        if (this._currentTimeChangedWhilePaused) {
            startOffset = this._options.startOffset;
            this._currentTimeChangedWhilePaused = false;
        } else if (this._state === 5 /* SoundState.Paused */ ) {
            startOffset = this.currentTime + this._options.startOffset;
        }
        if (startOffset && startOffset > 0) {
            this._mediaElement.currentTime = startOffset;
        }
        this._volumeNode.gain.value = options.volume ?? 1;
        this._play();
    }
    /** @internal */ pause() {
        if (this._state !== 2 /* SoundState.Starting */  && this._state !== 3 /* SoundState.Started */ ) {
            return;
        }
        this._setState(5 /* SoundState.Paused */ );
        this._enginePauseTime += this.engine.currentTime - this._enginePlayTime;
        this._mediaElement.pause();
    }
    /** @internal */ resume() {
        if (this._state === 5 /* SoundState.Paused */ ) {
            this.play();
        } else if (this._currentTimeChangedWhilePaused) {
            this.play();
        }
    }
    /** @internal */ stop() {
        if (this._state === 1 /* SoundState.Stopped */ ) {
            return;
        }
        this._stop();
    }
    /** @internal */ getClassName() {
        return "_WebAudioStreamingSoundInstance";
    }
    _connect(node) {
        const connected = super._connect(node);
        if (!connected) {
            return false;
        }
        // If the wrapped node is not available now, it will be connected later by the sound's subgraph.
        if (node instanceof _WebAudioStreamingSound && node._inNode) {
            this._outNode?.connect(node._inNode);
        }
        return true;
    }
    _disconnect(node) {
        const disconnected = super._disconnect(node);
        if (!disconnected) {
            return false;
        }
        if (node instanceof _WebAudioStreamingSound && node._inNode) {
            this._outNode?.disconnect(node._inNode);
        }
        return true;
    }
    _initFromMediaElement(mediaElement) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tools"].SetCorsBehavior(mediaElement.currentSrc, mediaElement);
        mediaElement.controls = false;
        mediaElement.loop = this._options.loop;
        mediaElement.preload = "auto";
        mediaElement.addEventListener("canplaythrough", this._onCanPlayThrough, {
            once: true
        });
        mediaElement.addEventListener("ended", this._onEnded, {
            once: true
        });
        mediaElement.addEventListener("error", this._onError, {
            once: true
        });
        mediaElement.load();
        this._sourceNode = new MediaElementAudioSourceNode(this._sound._audioContext, {
            mediaElement: mediaElement
        });
        this._sourceNode.connect(this._volumeNode);
        if (!this._connect(this._sound)) {
            throw new Error("Connect failed");
        }
        this._mediaElement = mediaElement;
    }
    _initFromUrl(url) {
        const audio = new Audio((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$audioUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_CleanUrl"])(url));
        this._initFromMediaElement(audio);
    }
    _initFromUrls(urls) {
        const audio = new Audio();
        for (const url of urls){
            const source = document.createElement("source");
            source.src = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$audioUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_CleanUrl"])(url);
            audio.appendChild(source);
        }
        this._initFromMediaElement(audio);
    }
    _play() {
        this._setState(2 /* SoundState.Starting */ );
        if (!this._isReady) {
            this._playWhenReady();
            return;
        }
        if (this._state !== 2 /* SoundState.Starting */ ) {
            return;
        }
        if (this.engine.state === "running") {
            const result = this._mediaElement.play();
            this._enginePlayTime = this.engine.currentTime;
            this._setState(3 /* SoundState.Started */ );
            // It's possible that the play() method fails on Safari, even if the audio engine's state is "running".
            // This occurs when the audio context is paused by the system and resumed automatically by the audio engine
            // without a user interaction (e.g. when the Vision Pro exits and reenters immersive mode).
            // eslint-disable-next-line github/no-then
            result.catch(()=>{
                this._setState(4 /* SoundState.FailedToStart */ );
                if (this._options.loop) {
                    this.engine.userGestureObservable.addOnce(this._onUserGesture);
                }
            });
        } else if (this._options.loop) {
            this.engine.stateChangedObservable.add(this._onEngineStateChanged);
        } else {
            this.stop();
            this._setState(4 /* SoundState.FailedToStart */ );
        }
    }
    _playWhenReady() {
        this._isReadyPromise// eslint-disable-next-line github/no-then
        .then(()=>{
            this._play();
        })// eslint-disable-next-line github/no-then
        .catch(()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logger"].Error("Streaming sound instance failed to play");
            this._setState(4 /* SoundState.FailedToStart */ );
        });
    }
    _stop() {
        this._mediaElement.pause();
        this._setState(1 /* SoundState.Stopped */ );
        this._onEnded();
        this.engine.stateChangedObservable.removeCallback(this._onEngineStateChanged);
    }
} //# sourceMappingURL=webAudioStreamingSound.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/webAudio/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$webAudioBus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/webAudio/webAudioBus.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$webAudioEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/webAudio/webAudioEngine.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$webAudioMainBus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/webAudio/webAudioMainBus.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$webAudioSoundSource$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/webAudio/webAudioSoundSource.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$webAudioStaticSound$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/webAudio/webAudioStaticSound.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$webAudioStreamingSound$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/webAudio/webAudioStreamingSound.js [app-client] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
;
;
;
;
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/no-restricted-imports */ __turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$audioParameter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/audioParameter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$soundState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/soundState.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$spatialAudioAttachmentType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/spatialAudioAttachmentType.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/webAudio/index.js [app-client] (ecmascript) <locals>"); //# sourceMappingURL=index.js.map
;
;
;
;
;
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/subProperties/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AbstractAudioAnalyzer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$abstractAudioAnalyzer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AbstractAudioAnalyzer"],
    "AbstractSpatialAudio",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$abstractSpatialAudio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AbstractSpatialAudio"],
    "AbstractSpatialAudioListener",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$abstractSpatialAudioListener$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AbstractSpatialAudioListener"],
    "AbstractStereoAudio",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$abstractStereoAudio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AbstractStereoAudio"],
    "_AudioAnalyzerDefaults",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$abstractAudioAnalyzer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_AudioAnalyzerDefaults"],
    "_HasAudioAnalyzerOptions",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$abstractAudioAnalyzer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_HasAudioAnalyzerOptions"],
    "_HasSpatialAudioListenerOptions",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$abstractSpatialAudioListener$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_HasSpatialAudioListenerOptions"],
    "_HasSpatialAudioOptions",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$abstractSpatialAudio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_HasSpatialAudioOptions"],
    "_HasStereoAudioOptions",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$abstractStereoAudio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_HasStereoAudioOptions"],
    "_SpatialAudioDefaults",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$abstractSpatialAudio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_SpatialAudioDefaults"],
    "_SpatialAudioListenerDefaults",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$abstractSpatialAudioListener$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_SpatialAudioListenerDefaults"],
    "_StereoAudioDefaults",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$abstractStereoAudio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_StereoAudioDefaults"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/subProperties/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$abstractAudioAnalyzer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/subProperties/abstractAudioAnalyzer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$abstractSpatialAudio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/subProperties/abstractSpatialAudio.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$abstractSpatialAudioListener$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/subProperties/abstractSpatialAudioListener.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$abstractStereoAudio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/subProperties/abstractStereoAudio.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AbstractAudioAnalyzer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AbstractAudioAnalyzer"],
    "AbstractAudioBus",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$abstractAudioBus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AbstractAudioBus"],
    "AbstractAudioNode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$abstractAudioNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AbstractAudioNode"],
    "AbstractAudioOutNode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$abstractAudioOutNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AbstractAudioOutNode"],
    "AbstractNamedAudioNode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$abstractAudioNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AbstractNamedAudioNode"],
    "AbstractSound",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$abstractSound$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AbstractSound"],
    "AbstractSpatialAudio",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AbstractSpatialAudio"],
    "AbstractSpatialAudioListener",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AbstractSpatialAudioListener"],
    "AbstractStereoAudio",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AbstractStereoAudio"],
    "AudioBus",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$audioBus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AudioBus"],
    "AudioEngineV2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$audioEngineV2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AudioEngineV2"],
    "AudioNodeType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$abstractAudioNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AudioNodeType"],
    "CreateAudioBusAsync",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$audioEngineV2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateAudioBusAsync"],
    "CreateMainAudioBusAsync",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$audioEngineV2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateMainAudioBusAsync"],
    "CreateMicrophoneSoundSourceAsync",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$audioEngineV2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateMicrophoneSoundSourceAsync"],
    "CreateSoundAsync",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$audioEngineV2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateSoundAsync"],
    "CreateSoundBufferAsync",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$audioEngineV2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateSoundBufferAsync"],
    "CreateSoundSourceAsync",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$audioEngineV2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateSoundSourceAsync"],
    "CreateStreamingSoundAsync",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$audioEngineV2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateStreamingSoundAsync"],
    "LastCreatedAudioEngine",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$audioEngineV2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LastCreatedAudioEngine"],
    "MainAudioBus",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$mainAudioBus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MainAudioBus"],
    "StaticSound",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$staticSound$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StaticSound"],
    "StaticSoundBuffer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$staticSoundBuffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StaticSoundBuffer"],
    "StreamingSound",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$streamingSound$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StreamingSound"],
    "_AudioAnalyzerDefaults",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_AudioAnalyzerDefaults"],
    "_GetAudioEngine",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$audioEngineV2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_GetAudioEngine"],
    "_HasAudioAnalyzerOptions",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_HasAudioAnalyzerOptions"],
    "_HasSpatialAudioListenerOptions",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_HasSpatialAudioListenerOptions"],
    "_HasSpatialAudioOptions",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_HasSpatialAudioOptions"],
    "_HasStereoAudioOptions",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_HasStereoAudioOptions"],
    "_SpatialAudioDefaults",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_SpatialAudioDefaults"],
    "_SpatialAudioListenerDefaults",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_SpatialAudioListenerDefaults"],
    "_StereoAudioDefaults",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_StereoAudioDefaults"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$abstractAudioBus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/abstractAudioBus.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$abstractAudioNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/abstractAudioNode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$abstractAudioOutNode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/abstractAudioOutNode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$abstractSound$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/abstractSound.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$audioBus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/audioBus.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$audioEngineV2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/audioEngineV2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$mainAudioBus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/mainAudioBus.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$staticSound$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/staticSound.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$staticSoundBuffer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/staticSoundBuffer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$streamingSound$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/streamingSound.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$subProperties$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/subProperties/index.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/webAudio/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CreateAudioEngineAsync",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$webAudioEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateAudioEngineAsync"],
    "_WebAudioBus",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$webAudioBus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_WebAudioBus"],
    "_WebAudioEngine",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$webAudioEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_WebAudioEngine"],
    "_WebAudioMainBus",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$webAudioMainBus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_WebAudioMainBus"],
    "_WebAudioSoundSource",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$webAudioSoundSource$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_WebAudioSoundSource"],
    "_WebAudioStaticSound",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$webAudioStaticSound$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_WebAudioStaticSound"],
    "_WebAudioStaticSoundBuffer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$webAudioStaticSound$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_WebAudioStaticSoundBuffer"],
    "_WebAudioStreamingSound",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$webAudioStreamingSound$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_WebAudioStreamingSound"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/webAudio/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$webAudioBus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/webAudio/webAudioBus.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$webAudioEngine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/webAudio/webAudioEngine.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$webAudioMainBus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/webAudio/webAudioMainBus.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$webAudioSoundSource$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/webAudio/webAudioSoundSource.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$webAudioStaticSound$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/webAudio/webAudioStaticSound.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$webAudioStreamingSound$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/webAudio/webAudioStreamingSound.js [app-client] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AbstractAudioAnalyzer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AbstractAudioAnalyzer"],
    "AbstractAudioBus",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AbstractAudioBus"],
    "AbstractAudioNode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AbstractAudioNode"],
    "AbstractAudioOutNode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AbstractAudioOutNode"],
    "AbstractNamedAudioNode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AbstractNamedAudioNode"],
    "AbstractSound",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AbstractSound"],
    "AbstractSpatialAudio",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AbstractSpatialAudio"],
    "AbstractSpatialAudioListener",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AbstractSpatialAudioListener"],
    "AbstractStereoAudio",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AbstractStereoAudio"],
    "AudioBus",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AudioBus"],
    "AudioEngineV2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AudioEngineV2"],
    "AudioNodeType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AudioNodeType"],
    "AudioParameterRampShape",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$audioParameter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AudioParameterRampShape"],
    "CreateAudioBusAsync",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateAudioBusAsync"],
    "CreateAudioEngineAsync",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateAudioEngineAsync"],
    "CreateMainAudioBusAsync",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateMainAudioBusAsync"],
    "CreateMicrophoneSoundSourceAsync",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateMicrophoneSoundSourceAsync"],
    "CreateSoundAsync",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateSoundAsync"],
    "CreateSoundBufferAsync",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateSoundBufferAsync"],
    "CreateSoundSourceAsync",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateSoundSourceAsync"],
    "CreateStreamingSoundAsync",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateStreamingSoundAsync"],
    "LastCreatedAudioEngine",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LastCreatedAudioEngine"],
    "MainAudioBus",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MainAudioBus"],
    "SoundState",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$soundState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SoundState"],
    "SpatialAudioAttachmentType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$spatialAudioAttachmentType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpatialAudioAttachmentType"],
    "StaticSound",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StaticSound"],
    "StaticSoundBuffer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StaticSoundBuffer"],
    "StreamingSound",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StreamingSound"],
    "_AudioAnalyzerDefaults",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_AudioAnalyzerDefaults"],
    "_GetAudioEngine",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_GetAudioEngine"],
    "_HasAudioAnalyzerOptions",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_HasAudioAnalyzerOptions"],
    "_HasSpatialAudioListenerOptions",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_HasSpatialAudioListenerOptions"],
    "_HasSpatialAudioOptions",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_HasSpatialAudioOptions"],
    "_HasStereoAudioOptions",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_HasStereoAudioOptions"],
    "_SpatialAudioDefaults",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_SpatialAudioDefaults"],
    "_SpatialAudioListenerDefaults",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_SpatialAudioListenerDefaults"],
    "_StereoAudioDefaults",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_StereoAudioDefaults"],
    "_WebAudioBus",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_WebAudioBus"],
    "_WebAudioEngine",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_WebAudioEngine"],
    "_WebAudioMainBus",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_WebAudioMainBus"],
    "_WebAudioSoundSource",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_WebAudioSoundSource"],
    "_WebAudioStaticSound",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_WebAudioStaticSound"],
    "_WebAudioStaticSoundBuffer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_WebAudioStaticSoundBuffer"],
    "_WebAudioStreamingSound",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_WebAudioStreamingSound"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$abstractAudio$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/abstractAudio/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$audioParameter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/audioParameter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$soundState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/soundState.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$spatialAudioAttachmentType$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/spatialAudioAttachmentType.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/webAudio/index.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=dcdbf_%40babylonjs_core_AudioV2_41765af5._.js.map