module.exports = [
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Audio/Interfaces/IAudioEngine.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
 //# sourceMappingURL=IAudioEngine.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Audio/Interfaces/ISoundOptions.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
 //# sourceMappingURL=ISoundOptions.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Audio/analyser.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Analyser",
    ()=>Analyser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/tools.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/engineStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/abstractEngine.js [app-ssr] (ecmascript)");
;
;
;
class Analyser {
    /**
     * Creates a new analyser
     * @param scene defines hosting scene
     */ constructor(scene){
        /**
         * Gets or sets the smoothing
         */ this.SMOOTHING = 0.75;
        /**
         * Gets or sets the FFT table size
         */ this.FFT_SIZE = 512;
        /**
         * Gets or sets the bar graph amplitude
         */ this.BARGRAPHAMPLITUDE = 256;
        /**
         * Gets or sets the position of the debug canvas
         */ this.DEBUGCANVASPOS = {
            x: 20,
            y: 20
        };
        /**
         * Gets or sets the debug canvas size
         */ this.DEBUGCANVASSIZE = {
            width: 320,
            height: 200
        };
        scene = scene || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EngineStore"].LastCreatedScene;
        if (!scene) {
            return;
        }
        this._scene = scene;
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].audioEngine) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tools"].Warn("No audio engine initialized, failed to create an audio analyser");
            return;
        }
        this._audioEngine = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].audioEngine;
        if (this._audioEngine.canUseWebAudio && this._audioEngine.audioContext) {
            this._webAudioAnalyser = this._audioEngine.audioContext.createAnalyser();
            this._webAudioAnalyser.minDecibels = -140;
            this._webAudioAnalyser.maxDecibels = 0;
            this._byteFreqs = new Uint8Array(this._webAudioAnalyser.frequencyBinCount);
            this._byteTime = new Uint8Array(this._webAudioAnalyser.frequencyBinCount);
            this._floatFreqs = new Float32Array(this._webAudioAnalyser.frequencyBinCount);
        }
    }
    /**
     * Get the number of data values you will have to play with for the visualization
     * @see https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode/frequencyBinCount
     * @returns a number
     */ getFrequencyBinCount() {
        if (this._audioEngine.canUseWebAudio) {
            return this._webAudioAnalyser.frequencyBinCount;
        } else {
            return 0;
        }
    }
    /**
     * Gets the current frequency data as a byte array
     * @see https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode/getByteFrequencyData
     * @returns a Uint8Array
     */ getByteFrequencyData() {
        if (this._audioEngine.canUseWebAudio) {
            this._webAudioAnalyser.smoothingTimeConstant = this.SMOOTHING;
            this._webAudioAnalyser.fftSize = this.FFT_SIZE;
            this._webAudioAnalyser.getByteFrequencyData(this._byteFreqs);
        }
        return this._byteFreqs;
    }
    /**
     * Gets the current waveform as a byte array
     * @see https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode/getByteTimeDomainData
     * @returns a Uint8Array
     */ getByteTimeDomainData() {
        if (this._audioEngine.canUseWebAudio) {
            this._webAudioAnalyser.smoothingTimeConstant = this.SMOOTHING;
            this._webAudioAnalyser.fftSize = this.FFT_SIZE;
            this._webAudioAnalyser.getByteTimeDomainData(this._byteTime);
        }
        return this._byteTime;
    }
    /**
     * Gets the current frequency data as a float array
     * @see https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode/getByteFrequencyData
     * @returns a Float32Array
     */ getFloatFrequencyData() {
        if (this._audioEngine.canUseWebAudio) {
            this._webAudioAnalyser.smoothingTimeConstant = this.SMOOTHING;
            this._webAudioAnalyser.fftSize = this.FFT_SIZE;
            this._webAudioAnalyser.getFloatFrequencyData(this._floatFreqs);
        }
        return this._floatFreqs;
    }
    /**
     * Renders the debug canvas
     */ drawDebugCanvas() {
        if (this._audioEngine.canUseWebAudio) {
            if (!this._debugCanvas) {
                this._debugCanvas = document.createElement("canvas");
                this._debugCanvas.width = this.DEBUGCANVASSIZE.width;
                this._debugCanvas.height = this.DEBUGCANVASSIZE.height;
                this._debugCanvas.style.position = "absolute";
                this._debugCanvas.style.top = this.DEBUGCANVASPOS.y + "px";
                this._debugCanvas.style.left = this.DEBUGCANVASPOS.x + "px";
                this._debugCanvasContext = this._debugCanvas.getContext("2d");
                document.body.appendChild(this._debugCanvas);
                this._registerFunc = ()=>{
                    this.drawDebugCanvas();
                };
                this._scene.registerBeforeRender(this._registerFunc);
            }
            if (this._registerFunc && this._debugCanvasContext) {
                const workingArray = this.getByteFrequencyData();
                this._debugCanvasContext.fillStyle = "rgb(0, 0, 0)";
                this._debugCanvasContext.fillRect(0, 0, this.DEBUGCANVASSIZE.width, this.DEBUGCANVASSIZE.height);
                // Draw the frequency domain chart.
                for(let i = 0; i < this.getFrequencyBinCount(); i++){
                    const value = workingArray[i];
                    const percent = value / this.BARGRAPHAMPLITUDE;
                    const height = this.DEBUGCANVASSIZE.height * percent;
                    const offset = this.DEBUGCANVASSIZE.height - height - 1;
                    const barWidth = this.DEBUGCANVASSIZE.width / this.getFrequencyBinCount();
                    const hue = i / this.getFrequencyBinCount() * 360;
                    this._debugCanvasContext.fillStyle = "hsl(" + hue + ", 100%, 50%)";
                    this._debugCanvasContext.fillRect(i * barWidth, offset, barWidth, height);
                }
            }
        }
    }
    /**
     * Stops rendering the debug canvas and removes it
     */ stopDebugCanvas() {
        if (this._debugCanvas) {
            if (this._registerFunc) {
                this._scene.unregisterBeforeRender(this._registerFunc);
                this._registerFunc = null;
            }
            document.body.removeChild(this._debugCanvas);
            this._debugCanvas = null;
            this._debugCanvasContext = null;
        }
    }
    /**
     * Connects two audio nodes
     * @param inputAudioNode defines first node to connect
     * @param outputAudioNode defines second node to connect
     */ connectAudioNodes(inputAudioNode, outputAudioNode) {
        if (this._audioEngine.canUseWebAudio) {
            inputAudioNode.connect(this._webAudioAnalyser);
            this._webAudioAnalyser.connect(outputAudioNode);
        }
    }
    /**
     * Releases all associated resources
     */ dispose() {
        if (this._audioEngine.canUseWebAudio) {
            this._webAudioAnalyser.disconnect();
        }
    }
} //# sourceMappingURL=analyser.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Audio/audioEngine.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AudioEngine",
    ()=>AudioEngine
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/abstractEngine.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$webAudioEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/AudioV2/webAudio/webAudioEngine.js [app-ssr] (ecmascript)");
;
;
;
// Sets the default audio engine to Babylon.js
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].AudioEngineFactory = (hostElement, audioContext, audioDestination)=>{
    return new AudioEngine(hostElement, audioContext, audioDestination);
};
class AudioEngine {
    /**
     * The master gain node defines the global audio volume of your audio engine.
     */ get masterGain() {
        return this._masterGain;
    }
    set masterGain(value) {
        this._masterGain = this._v2.mainOut._inNode = value;
    }
    /**
     * Defines if the audio engine relies on a custom unlocked button.
     * In this case, the embedded button will not be displayed.
     */ get useCustomUnlockedButton() {
        return this._useCustomUnlockedButton;
    }
    set useCustomUnlockedButton(value) {
        this._useCustomUnlockedButton = value;
        this._v2._unmuteUIEnabled = !value;
    }
    /**
     * Gets the current AudioContext if available.
     */ get audioContext() {
        if (this._v2.state === "running") {
            // Do not wait for the promise to unlock.
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            this._triggerRunningStateAsync();
        }
        return this._v2._audioContext;
    }
    /**
     * Instantiates a new audio engine.
     *
     * @param hostElement defines the host element where to display the mute icon if necessary
     * @param audioContext defines the audio context to be used by the audio engine
     * @param audioDestination defines the audio destination node to be used by audio engine
     */ constructor(hostElement = null, audioContext = null, audioDestination = null){
        this._audioContext = null;
        this._tryToRun = false;
        this._useCustomUnlockedButton = false;
        /**
         * Gets whether the current host supports Web Audio and thus could create AudioContexts.
         */ this.canUseWebAudio = true;
        /**
         * Defines if Babylon should emit a warning if WebAudio is not supported.
         */ // eslint-disable-next-line @typescript-eslint/naming-convention
        this.WarnedWebAudioUnsupported = false;
        /**
         * Gets whether or not mp3 are supported by your browser.
         */ this.isMP3supported = false;
        /**
         * Gets whether or not ogg are supported by your browser.
         */ this.isOGGsupported = false;
        /**
         * Gets whether audio has been unlocked on the device.
         * Some Browsers have strong restrictions about Audio and won't autoplay unless
         * a user interaction has happened.
         */ this.unlocked = false;
        /**
         * Event raised when audio has been unlocked on the browser.
         */ this.onAudioUnlockedObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        /**
         * Event raised when audio has been locked on the browser.
         */ this.onAudioLockedObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        const v2 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$AudioV2$2f$webAudio$2f$webAudioEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_WebAudioEngine"]({
            audioContext: audioContext ? audioContext : undefined,
            defaultUIParentElement: hostElement?.parentElement ? hostElement.parentElement : undefined
        });
        // Historically the unmute button is disabled until a sound tries to play and can't, which results in a call
        // to `AudioEngine.lock()`, which is where the unmute button is enabled if no custom UI is requested.
        v2._unmuteUIEnabled = false;
        this._masterGain = new GainNode(v2._audioContext);
        v2._audioDestination = audioDestination;
        v2.stateChangedObservable.add((state)=>{
            if (state === "running") {
                this.unlocked = true;
                this.onAudioUnlockedObservable.notifyObservers(this);
            } else {
                this.unlocked = false;
                this.onAudioLockedObservable.notifyObservers(this);
            }
        });
        // eslint-disable-next-line @typescript-eslint/no-floating-promises, github/no-then
        v2._initAsync({
            resumeOnInteraction: false
        }).then(()=>{
            const mainBusOutNode = v2.defaultMainBus._outNode;
            if (mainBusOutNode) {
                mainBusOutNode.disconnect(v2.mainOut._inNode);
                mainBusOutNode.connect(this._masterGain);
            }
            v2.mainOut._inNode = this._masterGain;
            v2.stateChangedObservable.notifyObservers(v2.state);
        });
        this.isMP3supported = v2.isFormatValid("mp3");
        this.isOGGsupported = v2.isFormatValid("ogg");
        this._v2 = v2;
    }
    /**
     * Flags the audio engine in Locked state.
     * This happens due to new browser policies preventing audio to autoplay.
     */ lock() {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this._v2._audioContext.suspend();
        if (!this._useCustomUnlockedButton) {
            this._v2._unmuteUIEnabled = true;
        }
    }
    /**
     * Unlocks the audio engine once a user action has been done on the dom.
     * This is helpful to resume play once browser policies have been satisfied.
     */ unlock() {
        if (this._audioContext?.state === "running") {
            if (!this.unlocked) {
                // Notify users that the audio stack is unlocked/unmuted
                this.unlocked = true;
                this.onAudioUnlockedObservable.notifyObservers(this);
            }
            return;
        }
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this._triggerRunningStateAsync();
    }
    /** @internal */ _resumeAudioContextOnStateChange() {
        this._audioContext?.addEventListener("statechange", ()=>{
            if (this.unlocked && this._audioContext?.state !== "running") {
                // eslint-disable-next-line @typescript-eslint/no-floating-promises
                this._resumeAudioContextAsync();
            }
        }, {
            once: true,
            passive: true,
            signal: AbortSignal.timeout(3000)
        });
    }
    // eslint-disable-next-line @typescript-eslint/promise-function-async, no-restricted-syntax
    _resumeAudioContextAsync() {
        if (this._v2._isUsingOfflineAudioContext) {
            return Promise.resolve();
        }
        return this._v2._audioContext.resume();
    }
    /**
     * Destroy and release the resources associated with the audio context.
     */ dispose() {
        this._v2.dispose();
        this.onAudioUnlockedObservable.clear();
        this.onAudioLockedObservable.clear();
    }
    /**
     * Gets the global volume sets on the master gain.
     * @returns the global volume if set or -1 otherwise
     */ getGlobalVolume() {
        return this.masterGain.gain.value;
    }
    /**
     * Sets the global volume of your experience (sets on the master gain).
     * @param newVolume Defines the new global volume of the application
     */ setGlobalVolume(newVolume) {
        this.masterGain.gain.value = newVolume;
    }
    /**
     * Connect the audio engine to an audio analyser allowing some amazing
     * synchronization between the sounds/music and your visualization (VuMeter for instance).
     * @see https://doc.babylonjs.com/features/featuresDeepDive/audio/playingSoundsMusic#using-the-analyser
     * @param analyser The analyser to connect to the engine
     */ connectToAnalyser(analyser) {
        if (this._connectedAnalyser) {
            this._connectedAnalyser.stopDebugCanvas();
        }
        this._connectedAnalyser = analyser;
        this.masterGain.disconnect();
        this._connectedAnalyser.connectAudioNodes(this.masterGain, this._v2._audioContext.destination);
    }
    async _triggerRunningStateAsync() {
        if (this._tryToRun) {
            return;
        }
        this._tryToRun = true;
        await this._resumeAudioContextAsync();
        this._tryToRun = false;
        this.unlocked = true;
        this.onAudioUnlockedObservable.notifyObservers(this);
    }
} //# sourceMappingURL=audioEngine.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Audio/sound.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sound",
    ()=>Sound
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/tools.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/observable.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$devTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/devTools.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/engineStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/typeStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/abstractEngine.js [app-ssr] (ecmascript)");
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
class Sound {
    /**
     * Does the sound loop after it finishes playing once.
     */ get loop() {
        return this._loop;
    }
    set loop(value) {
        if (value === this._loop) {
            return;
        }
        this._loop = value;
        this.updateOptions({
            loop: value
        });
    }
    /**
     * Gets the current time for the sound.
     */ get currentTime() {
        if (this._htmlAudioElement) {
            return this._htmlAudioElement.currentTime;
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].audioEngine?.audioContext && (this.isPlaying || this.isPaused)) {
            // The `_currentTime` member is only updated when the sound is paused. Add the time since the last start
            // to get the actual current time.
            const timeSinceLastStart = this.isPaused ? 0 : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].audioEngine.audioContext.currentTime - this._startTime;
            return this._currentTime + timeSinceLastStart;
        }
        return 0;
    }
    /**
     * Does this sound enables spatial sound.
     * @see https://doc.babylonjs.com/features/featuresDeepDive/audio/playingSoundsMusic#creating-a-spatial-3d-sound
     */ get spatialSound() {
        return this._spatialSound;
    }
    /**
     * Does this sound enables spatial sound.
     * @see https://doc.babylonjs.com/features/featuresDeepDive/audio/playingSoundsMusic#creating-a-spatial-3d-sound
     */ set spatialSound(newValue) {
        if (newValue == this._spatialSound) {
            return;
        }
        const wasPlaying = this.isPlaying;
        this.pause();
        if (newValue) {
            this._spatialSound = newValue;
            this._updateSpatialParameters();
        } else {
            this._disableSpatialSound();
        }
        if (wasPlaying) {
            this.play();
        }
    }
    /**
     * Create a sound and attach it to a scene
     * @param name Name of your sound
     * @param urlOrArrayBuffer Url to the sound to load async or ArrayBuffer, it also works with MediaStreams and AudioBuffers
     * @param scene defines the scene the sound belongs to
     * @param readyToPlayCallback Provide a callback function if you'd like to load your code once the sound is ready to be played
     * @param options Objects to provide with the current available options: autoplay, loop, volume, spatialSound, maxDistance, rolloffFactor, refDistance, distanceModel, panningModel, streaming
     */ constructor(name, urlOrArrayBuffer, scene, readyToPlayCallback = null, options){
        /**
         * Does the sound autoplay once loaded.
         */ this.autoplay = false;
        this._loop = false;
        /**
         * Does the sound use a custom attenuation curve to simulate the falloff
         * happening when the source gets further away from the camera.
         * @see https://doc.babylonjs.com/features/featuresDeepDive/audio/playingSoundsMusic#creating-your-own-custom-attenuation-function
         */ this.useCustomAttenuation = false;
        /**
         * Is this sound currently played.
         */ this.isPlaying = false;
        /**
         * Is this sound currently paused.
         */ this.isPaused = false;
        /**
         * Define the reference distance the sound should be heard perfectly.
         * @see https://doc.babylonjs.com/features/featuresDeepDive/audio/playingSoundsMusic#creating-a-spatial-3d-sound
         */ this.refDistance = 1;
        /**
         * Define the roll off factor of spatial sounds.
         * @see https://doc.babylonjs.com/features/featuresDeepDive/audio/playingSoundsMusic#creating-a-spatial-3d-sound
         */ this.rolloffFactor = 1;
        /**
         * Define the max distance the sound should be heard (intensity just became 0 at this point).
         * @see https://doc.babylonjs.com/features/featuresDeepDive/audio/playingSoundsMusic#creating-a-spatial-3d-sound
         */ this.maxDistance = 100;
        /**
         * Define the distance attenuation model the sound will follow.
         * @see https://doc.babylonjs.com/features/featuresDeepDive/audio/playingSoundsMusic#creating-a-spatial-3d-sound
         */ this.distanceModel = "linear";
        /**
         * Gets or sets an object used to store user defined information for the sound.
         */ this.metadata = null;
        /**
         * Observable event when the current playing sound finishes.
         */ this.onEndedObservable = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$observable$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Observable"]();
        this._spatialSound = false;
        this._panningModel = "equalpower";
        this._playbackRate = 1;
        this._streaming = false;
        this._startTime = 0;
        this._currentTime = 0;
        this._position = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].Zero();
        this._localDirection = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](1, 0, 0);
        this._volume = 1;
        this._isReadyToPlay = false;
        this._isDirectional = false;
        // Used if you'd like to create a directional sound.
        // If not set, the sound will be omnidirectional
        this._coneInnerAngle = 360;
        this._coneOuterAngle = 360;
        this._coneOuterGain = 0;
        this._isOutputConnected = false;
        this._urlType = "Unknown";
        this.name = name;
        scene = scene || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EngineStore"].LastCreatedScene;
        if (!scene) {
            return;
        }
        this._scene = scene;
        Sound._SceneComponentInitialization(scene);
        this._readyToPlayCallback = readyToPlayCallback;
        // Default custom attenuation function is a linear attenuation
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        this._customAttenuationFunction = (currentVolume, currentDistance, maxDistance, refDistance, rolloffFactor)=>{
            if (currentDistance < maxDistance) {
                return currentVolume * (1 - currentDistance / maxDistance);
            } else {
                return 0;
            }
        };
        if (options) {
            this.autoplay = options.autoplay || false;
            this._loop = options.loop || false;
            // if volume === 0, we need another way to check this option
            if (options.volume !== undefined) {
                this._volume = options.volume;
            }
            this._spatialSound = options.spatialSound ?? false;
            this.maxDistance = options.maxDistance ?? 100;
            this.useCustomAttenuation = options.useCustomAttenuation ?? false;
            this.rolloffFactor = options.rolloffFactor || 1;
            this.refDistance = options.refDistance || 1;
            this.distanceModel = options.distanceModel || "linear";
            this._playbackRate = options.playbackRate || 1;
            this._streaming = options.streaming ?? false;
            this._length = options.length;
            this._offset = options.offset;
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].audioEngine?.canUseWebAudio && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].audioEngine.audioContext) {
            this._soundGain = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].audioEngine.audioContext.createGain();
            this._soundGain.gain.value = this._volume;
            this._inputAudioNode = this._soundGain;
            this._outputAudioNode = this._soundGain;
            if (this._spatialSound) {
                this._createSpatialParameters();
            }
            this._scene.mainSoundTrack.addSound(this);
            let validParameter = true;
            // if no parameter is passed, you need to call setAudioBuffer yourself to prepare the sound
            if (urlOrArrayBuffer) {
                try {
                    if (typeof urlOrArrayBuffer === "string") {
                        this._urlType = "String";
                        this._url = urlOrArrayBuffer;
                    } else if (urlOrArrayBuffer instanceof ArrayBuffer) {
                        this._urlType = "ArrayBuffer";
                    } else if (urlOrArrayBuffer instanceof HTMLMediaElement) {
                        this._urlType = "MediaElement";
                    } else if (urlOrArrayBuffer instanceof MediaStream) {
                        this._urlType = "MediaStream";
                    } else if (urlOrArrayBuffer instanceof AudioBuffer) {
                        this._urlType = "AudioBuffer";
                    } else if (Array.isArray(urlOrArrayBuffer)) {
                        this._urlType = "Array";
                    }
                    let urls = [];
                    let codecSupportedFound = false;
                    switch(this._urlType){
                        case "MediaElement":
                            this._streaming = true;
                            this._isReadyToPlay = true;
                            this._streamingSource = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].audioEngine.audioContext.createMediaElementSource(urlOrArrayBuffer);
                            if (this.autoplay) {
                                this.play(0, this._offset, this._length);
                            }
                            if (this._readyToPlayCallback) {
                                this._readyToPlayCallback();
                            }
                            break;
                        case "MediaStream":
                            this._streaming = true;
                            this._isReadyToPlay = true;
                            this._streamingSource = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].audioEngine.audioContext.createMediaStreamSource(urlOrArrayBuffer);
                            if (this.autoplay) {
                                this.play(0, this._offset, this._length);
                            }
                            if (this._readyToPlayCallback) {
                                this._readyToPlayCallback();
                            }
                            break;
                        case "ArrayBuffer":
                            if (urlOrArrayBuffer.byteLength > 0) {
                                codecSupportedFound = true;
                                this._soundLoaded(urlOrArrayBuffer);
                            }
                            break;
                        case "AudioBuffer":
                            this._audioBufferLoaded(urlOrArrayBuffer);
                            break;
                        case "String":
                            urls.push(urlOrArrayBuffer);
                        // eslint-disable-next-line no-fallthrough
                        case "Array":
                            if (urls.length === 0) {
                                urls = urlOrArrayBuffer;
                            }
                            // If we found a supported format, we load it immediately and stop the loop
                            for(let i = 0; i < urls.length; i++){
                                const url = urls[i];
                                codecSupportedFound = options && options.skipCodecCheck || url.indexOf(".mp3", url.length - 4) !== -1 && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].audioEngine.isMP3supported || url.indexOf(".ogg", url.length - 4) !== -1 && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].audioEngine.isOGGsupported || url.indexOf(".wav", url.length - 4) !== -1 || url.indexOf(".m4a", url.length - 4) !== -1 || url.indexOf(".mp4", url.length - 4) !== -1 || url.indexOf("blob:") !== -1;
                                if (codecSupportedFound) {
                                    // Loading sound
                                    if (!this._streaming) {
                                        this._scene._loadFile(url, (data)=>{
                                            this._soundLoaded(data);
                                        }, undefined, true, true, (exception)=>{
                                            if (exception) {
                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Error("XHR " + exception.status + " error on: " + url + ".");
                                            }
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Error("Sound creation aborted.");
                                            this._scene.mainSoundTrack.removeSound(this);
                                        });
                                    } else {
                                        this._htmlAudioElement = new Audio(url);
                                        this._htmlAudioElement.controls = false;
                                        this._htmlAudioElement.loop = this.loop;
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$tools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tools"].SetCorsBehavior(url, this._htmlAudioElement);
                                        this._htmlAudioElement.preload = "auto";
                                        this._htmlAudioElement.addEventListener("canplaythrough", ()=>{
                                            this._isReadyToPlay = true;
                                            if (this.autoplay) {
                                                this.play(0, this._offset, this._length);
                                            }
                                            if (this._readyToPlayCallback) {
                                                this._readyToPlayCallback();
                                            }
                                        }, {
                                            once: true
                                        });
                                        document.body.appendChild(this._htmlAudioElement);
                                        this._htmlAudioElement.load();
                                    }
                                    break;
                                }
                            }
                            break;
                        default:
                            validParameter = false;
                            break;
                    }
                    if (!validParameter) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Error("Parameter must be a URL to the sound, an Array of URLs (.mp3 & .ogg) or an ArrayBuffer of the sound.");
                    } else {
                        if (!codecSupportedFound) {
                            this._isReadyToPlay = true;
                            // Simulating a ready to play event to avoid breaking code path
                            if (this._readyToPlayCallback) {
                                setTimeout(()=>{
                                    if (this._readyToPlayCallback) {
                                        this._readyToPlayCallback();
                                    }
                                }, 1000);
                            }
                        }
                    }
                } catch (ex) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Error("Unexpected error. Sound creation aborted.");
                    this._scene.mainSoundTrack.removeSound(this);
                }
            }
        } else {
            // Adding an empty sound to avoid breaking audio calls for non Web Audio browsers
            this._scene.mainSoundTrack.addSound(this);
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].audioEngine && !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].audioEngine.WarnedWebAudioUnsupported) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Error("Web Audio is not supported by your browser.");
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].audioEngine.WarnedWebAudioUnsupported = true;
            }
            // Simulating a ready to play event to avoid breaking code for non web audio browsers
            if (this._readyToPlayCallback) {
                setTimeout(()=>{
                    if (this._readyToPlayCallback) {
                        this._readyToPlayCallback();
                    }
                }, 1000);
            }
        }
    }
    /**
     * Release the sound and its associated resources
     */ dispose() {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].audioEngine?.canUseWebAudio) {
            if (this.isPlaying) {
                this.stop();
            }
            this._isReadyToPlay = false;
            if (this.soundTrackId === -1) {
                this._scene.mainSoundTrack.removeSound(this);
            } else if (this._scene.soundTracks) {
                this._scene.soundTracks[this.soundTrackId].removeSound(this);
            }
            if (this._soundGain) {
                this._soundGain.disconnect();
                this._soundGain = null;
            }
            if (this._soundPanner) {
                this._soundPanner.disconnect();
                this._soundPanner = null;
            }
            if (this._soundSource) {
                this._soundSource.disconnect();
                this._soundSource = null;
            }
            this._audioBuffer = null;
            if (this._htmlAudioElement) {
                this._htmlAudioElement.pause();
                this._htmlAudioElement.src = "";
                document.body.removeChild(this._htmlAudioElement);
                this._htmlAudioElement = null;
            }
            if (this._streamingSource) {
                this._streamingSource.disconnect();
                this._streamingSource = null;
            }
            if (this._connectedTransformNode && this._registerFunc) {
                this._connectedTransformNode.unregisterAfterWorldMatrixUpdate(this._registerFunc);
                this._connectedTransformNode = null;
            }
            this._clearTimeoutsAndObservers();
        }
    }
    /**
     * Gets if the sounds is ready to be played or not.
     * @returns true if ready, otherwise false
     */ isReady() {
        return this._isReadyToPlay;
    }
    /**
     * Get the current class name.
     * @returns current class name
     */ getClassName() {
        return "Sound";
    }
    _audioBufferLoaded(buffer) {
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].audioEngine?.audioContext) {
            return;
        }
        this._audioBuffer = buffer;
        this._isReadyToPlay = true;
        if (this.autoplay) {
            this.play(0, this._offset, this._length);
        }
        if (this._readyToPlayCallback) {
            this._readyToPlayCallback();
        }
    }
    _soundLoaded(audioData) {
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].audioEngine?.audioContext) {
            return;
        }
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].audioEngine.audioContext.decodeAudioData(audioData, (buffer)=>{
            this._audioBufferLoaded(buffer);
        }, (err)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Error("Error while decoding audio data for: " + this.name + " / Error: " + err);
        });
    }
    /**
     * Sets the data of the sound from an audiobuffer
     * @param audioBuffer The audioBuffer containing the data
     */ setAudioBuffer(audioBuffer) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].audioEngine?.canUseWebAudio) {
            this._audioBuffer = audioBuffer;
            this._isReadyToPlay = true;
        }
    }
    /**
     * Updates the current sounds options such as maxdistance, loop...
     * @param options A JSON object containing values named as the object properties
     */ updateOptions(options) {
        if (options) {
            this.loop = options.loop ?? this.loop;
            this.maxDistance = options.maxDistance ?? this.maxDistance;
            this.useCustomAttenuation = options.useCustomAttenuation ?? this.useCustomAttenuation;
            this.rolloffFactor = options.rolloffFactor ?? this.rolloffFactor;
            this.refDistance = options.refDistance ?? this.refDistance;
            this.distanceModel = options.distanceModel ?? this.distanceModel;
            this._playbackRate = options.playbackRate ?? this._playbackRate;
            this._length = options.length ?? undefined;
            this.spatialSound = options.spatialSound ?? this._spatialSound;
            this._setOffset(options.offset ?? undefined);
            this.setVolume(options.volume ?? this._volume);
            this._updateSpatialParameters();
            if (this.isPlaying) {
                if (this._streaming && this._htmlAudioElement) {
                    this._htmlAudioElement.playbackRate = this._playbackRate;
                    if (this._htmlAudioElement.loop !== this.loop) {
                        this._htmlAudioElement.loop = this.loop;
                    }
                } else {
                    if (this._soundSource) {
                        this._soundSource.playbackRate.value = this._playbackRate;
                        if (this._soundSource.loop !== this.loop) {
                            this._soundSource.loop = this.loop;
                        }
                        if (this._offset !== undefined && this._soundSource.loopStart !== this._offset) {
                            this._soundSource.loopStart = this._offset;
                        }
                        if (this._length !== undefined && this._length !== this._soundSource.loopEnd) {
                            this._soundSource.loopEnd = (this._offset | 0) + this._length;
                        }
                    }
                }
            }
        }
    }
    _createSpatialParameters() {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].audioEngine?.canUseWebAudio && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].audioEngine.audioContext) {
            if (this._scene.headphone) {
                this._panningModel = "HRTF";
            }
            this._soundPanner = this._soundPanner ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].audioEngine.audioContext.createPanner();
            if (this._soundPanner && this._outputAudioNode) {
                this._updateSpatialParameters();
                this._soundPanner.connect(this._outputAudioNode);
                this._inputAudioNode = this._soundPanner;
            }
        }
    }
    _disableSpatialSound() {
        if (!this._spatialSound) {
            return;
        }
        this._inputAudioNode = this._soundGain;
        this._soundPanner?.disconnect();
        this._soundPanner = null;
        this._spatialSound = false;
    }
    _updateSpatialParameters() {
        if (!this._spatialSound) {
            return;
        }
        if (this._soundPanner) {
            if (this.useCustomAttenuation) {
                // Tricks to disable in a way embedded Web Audio attenuation
                this._soundPanner.distanceModel = "linear";
                this._soundPanner.maxDistance = Number.MAX_VALUE;
                this._soundPanner.refDistance = 1;
                this._soundPanner.rolloffFactor = 1;
                this._soundPanner.panningModel = this._panningModel;
            } else {
                this._soundPanner.distanceModel = this.distanceModel;
                this._soundPanner.maxDistance = this.maxDistance;
                this._soundPanner.refDistance = this.refDistance;
                this._soundPanner.rolloffFactor = this.rolloffFactor;
                this._soundPanner.panningModel = this._panningModel;
            }
        } else {
            this._createSpatialParameters();
        }
    }
    /**
     * Switch the panning model to HRTF:
     * Renders a stereo output of higher quality than equalpower — it uses a convolution with measured impulse responses from human subjects.
     * @see https://doc.babylonjs.com/features/featuresDeepDive/audio/playingSoundsMusic#creating-a-spatial-3d-sound
     */ switchPanningModelToHRTF() {
        this._panningModel = "HRTF";
        this._switchPanningModel();
    }
    /**
     * Switch the panning model to Equal Power:
     * Represents the equal-power panning algorithm, generally regarded as simple and efficient. equalpower is the default value.
     * @see https://doc.babylonjs.com/features/featuresDeepDive/audio/playingSoundsMusic#creating-a-spatial-3d-sound
     */ switchPanningModelToEqualPower() {
        this._panningModel = "equalpower";
        this._switchPanningModel();
    }
    _switchPanningModel() {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].audioEngine?.canUseWebAudio && this._spatialSound && this._soundPanner) {
            this._soundPanner.panningModel = this._panningModel;
        }
    }
    /**
     * Connect this sound to a sound track audio node like gain...
     * @param soundTrackAudioNode the sound track audio node to connect to
     */ connectToSoundTrackAudioNode(soundTrackAudioNode) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].audioEngine?.canUseWebAudio && this._outputAudioNode) {
            if (this._isOutputConnected) {
                this._outputAudioNode.disconnect();
            }
            this._outputAudioNode.connect(soundTrackAudioNode);
            this._isOutputConnected = true;
        }
    }
    /**
     * Transform this sound into a directional source
     * @param coneInnerAngle Size of the inner cone in degree
     * @param coneOuterAngle Size of the outer cone in degree
     * @param coneOuterGain Volume of the sound outside the outer cone (between 0.0 and 1.0)
     */ setDirectionalCone(coneInnerAngle, coneOuterAngle, coneOuterGain) {
        if (coneOuterAngle < coneInnerAngle) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Error("setDirectionalCone(): outer angle of the cone must be superior or equal to the inner angle.");
            return;
        }
        this._coneInnerAngle = coneInnerAngle;
        this._coneOuterAngle = coneOuterAngle;
        this._coneOuterGain = coneOuterGain;
        this._isDirectional = true;
        if (this.isPlaying && this.loop) {
            this.stop();
            this.play(0, this._offset, this._length);
        }
    }
    /**
     * Gets or sets the inner angle for the directional cone.
     */ get directionalConeInnerAngle() {
        return this._coneInnerAngle;
    }
    /**
     * Gets or sets the inner angle for the directional cone.
     */ set directionalConeInnerAngle(value) {
        if (value != this._coneInnerAngle) {
            if (this._coneOuterAngle < value) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Error("directionalConeInnerAngle: outer angle of the cone must be superior or equal to the inner angle.");
                return;
            }
            this._coneInnerAngle = value;
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].audioEngine?.canUseWebAudio && this._spatialSound && this._soundPanner) {
                this._soundPanner.coneInnerAngle = this._coneInnerAngle;
            }
        }
    }
    /**
     * Gets or sets the outer angle for the directional cone.
     */ get directionalConeOuterAngle() {
        return this._coneOuterAngle;
    }
    /**
     * Gets or sets the outer angle for the directional cone.
     */ set directionalConeOuterAngle(value) {
        if (value != this._coneOuterAngle) {
            if (value < this._coneInnerAngle) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Error("directionalConeOuterAngle: outer angle of the cone must be superior or equal to the inner angle.");
                return;
            }
            this._coneOuterAngle = value;
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].audioEngine?.canUseWebAudio && this._spatialSound && this._soundPanner) {
                this._soundPanner.coneOuterAngle = this._coneOuterAngle;
            }
        }
    }
    /**
     * Sets the position of the emitter if spatial sound is enabled
     * @param newPosition Defines the new position
     */ setPosition(newPosition) {
        if (newPosition.equals(this._position)) {
            return;
        }
        this._position.copyFrom(newPosition);
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].audioEngine?.canUseWebAudio && this._spatialSound && this._soundPanner && !isNaN(this._position.x) && !isNaN(this._position.y) && !isNaN(this._position.z)) {
            this._soundPanner.positionX.value = this._position.x;
            this._soundPanner.positionY.value = this._position.y;
            this._soundPanner.positionZ.value = this._position.z;
        }
    }
    /**
     * Sets the local direction of the emitter if spatial sound is enabled
     * @param newLocalDirection Defines the new local direction
     */ setLocalDirectionToMesh(newLocalDirection) {
        this._localDirection = newLocalDirection;
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].audioEngine?.canUseWebAudio && this._connectedTransformNode && this.isPlaying) {
            this._updateDirection();
        }
    }
    _updateDirection() {
        if (!this._connectedTransformNode || !this._soundPanner) {
            return;
        }
        const mat = this._connectedTransformNode.getWorldMatrix();
        const direction = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].TransformNormal(this._localDirection, mat);
        direction.normalize();
        this._soundPanner.orientationX.value = direction.x;
        this._soundPanner.orientationY.value = direction.y;
        this._soundPanner.orientationZ.value = direction.z;
    }
    /** @internal */ updateDistanceFromListener() {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].audioEngine?.canUseWebAudio && this._connectedTransformNode && this.useCustomAttenuation && this._soundGain && this._scene.activeCamera) {
            const distance = this._scene.audioListenerPositionProvider ? this._connectedTransformNode.position.subtract(this._scene.audioListenerPositionProvider()).length() : this._connectedTransformNode.getDistanceToCamera(this._scene.activeCamera);
            this._soundGain.gain.value = this._customAttenuationFunction(this._volume, distance, this.maxDistance, this.refDistance, this.rolloffFactor);
        }
    }
    /**
     * Sets a new custom attenuation function for the sound.
     * @param callback Defines the function used for the attenuation
     * @see https://doc.babylonjs.com/features/featuresDeepDive/audio/playingSoundsMusic#creating-your-own-custom-attenuation-function
     */ setAttenuationFunction(callback) {
        this._customAttenuationFunction = callback;
    }
    /**
     * Play the sound
     * @param time (optional) Start the sound after X seconds. Start immediately (0) by default.
     * @param offset (optional) Start the sound at a specific time in seconds
     * @param length (optional) Sound duration (in seconds)
     */ play(time, offset, length) {
        if (this._isReadyToPlay && this._scene.audioEnabled && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].audioEngine?.audioContext) {
            try {
                this._clearTimeoutsAndObservers();
                let startTime = time ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].audioEngine?.audioContext.currentTime + time : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].audioEngine?.audioContext.currentTime;
                if (!this._soundSource || !this._streamingSource) {
                    if (this._spatialSound && this._soundPanner) {
                        if (!isNaN(this._position.x) && !isNaN(this._position.y) && !isNaN(this._position.z)) {
                            this._soundPanner.positionX.value = this._position.x;
                            this._soundPanner.positionY.value = this._position.y;
                            this._soundPanner.positionZ.value = this._position.z;
                        }
                        if (this._isDirectional) {
                            this._soundPanner.coneInnerAngle = this._coneInnerAngle;
                            this._soundPanner.coneOuterAngle = this._coneOuterAngle;
                            this._soundPanner.coneOuterGain = this._coneOuterGain;
                            if (this._connectedTransformNode) {
                                this._updateDirection();
                            } else {
                                this._soundPanner.setOrientation(this._localDirection.x, this._localDirection.y, this._localDirection.z);
                            }
                        }
                    }
                }
                if (this._streaming) {
                    if (!this._streamingSource && this._htmlAudioElement) {
                        this._streamingSource = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].audioEngine.audioContext.createMediaElementSource(this._htmlAudioElement);
                        this._htmlAudioElement.onended = ()=>{
                            this._onended();
                        };
                        this._htmlAudioElement.playbackRate = this._playbackRate;
                    }
                    if (this._streamingSource) {
                        this._streamingSource.disconnect();
                        if (this._inputAudioNode) {
                            this._streamingSource.connect(this._inputAudioNode);
                        }
                    }
                    if (this._htmlAudioElement) {
                        // required to manage properly the new suspended default state of Chrome
                        // When the option 'streaming: true' is used, we need first to wait for
                        // the audio engine to be unlocked by a user gesture before trying to play
                        // an HTML Audio element
                        const tryToPlay = ()=>{
                            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].audioEngine?.unlocked) {
                                if (!this._htmlAudioElement) {
                                    return;
                                }
                                this._htmlAudioElement.currentTime = offset ?? 0;
                                const playPromise = this._htmlAudioElement.play();
                                // In browsers that don’t yet support this functionality,
                                // playPromise won’t be defined.
                                if (playPromise !== undefined) {
                                    // eslint-disable-next-line github/no-then
                                    playPromise.catch(()=>{
                                        // Automatic playback failed.
                                        // Waiting for the audio engine to be unlocked by user click on unmute
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].audioEngine?.lock();
                                        if (this.loop || this.autoplay) {
                                            this._audioUnlockedObserver = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].audioEngine?.onAudioUnlockedObservable.addOnce(()=>{
                                                tryToPlay();
                                            });
                                        }
                                    });
                                }
                            } else {
                                if (this.loop || this.autoplay) {
                                    this._audioUnlockedObserver = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].audioEngine?.onAudioUnlockedObservable.addOnce(()=>{
                                        tryToPlay();
                                    });
                                }
                            }
                        };
                        tryToPlay();
                    }
                } else {
                    const tryToPlay = ()=>{
                        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].audioEngine?.audioContext) {
                            length = length || this._length;
                            if (offset !== undefined) {
                                this._setOffset(offset);
                            }
                            if (this._soundSource) {
                                const oldSource = this._soundSource;
                                oldSource.onended = ()=>{
                                    oldSource.disconnect();
                                };
                            }
                            this._soundSource = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].audioEngine?.audioContext.createBufferSource();
                            if (this._soundSource && this._inputAudioNode) {
                                this._soundSource.buffer = this._audioBuffer;
                                this._soundSource.connect(this._inputAudioNode);
                                this._soundSource.loop = this.loop;
                                if (offset !== undefined) {
                                    this._soundSource.loopStart = offset;
                                }
                                if (length !== undefined) {
                                    this._soundSource.loopEnd = (offset | 0) + length;
                                }
                                this._soundSource.playbackRate.value = this._playbackRate;
                                this._soundSource.onended = ()=>{
                                    this._onended();
                                };
                                startTime = time ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].audioEngine?.audioContext.currentTime + time : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].audioEngine.audioContext.currentTime;
                                const actualOffset = ((this.isPaused ? this.currentTime : 0) + (this._offset ?? 0)) % this._soundSource.buffer.duration;
                                this._soundSource.start(startTime, actualOffset, this.loop ? undefined : length);
                            }
                        }
                    };
                    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].audioEngine?.audioContext.state === "suspended") {
                        // Wait a bit for FF as context seems late to be ready.
                        this._tryToPlayTimeout = setTimeout(()=>{
                            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].audioEngine?.audioContext.state === "suspended") {
                                // Automatic playback failed.
                                // Waiting for the audio engine to be unlocked by user click on unmute
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].audioEngine.lock();
                                if (this.loop || this.autoplay) {
                                    this._audioUnlockedObserver = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].audioEngine.onAudioUnlockedObservable.addOnce(()=>{
                                        tryToPlay();
                                    });
                                }
                            } else {
                                tryToPlay();
                            }
                        }, 500);
                    } else {
                        tryToPlay();
                    }
                }
                this._startTime = startTime;
                this.isPlaying = true;
                this.isPaused = false;
            } catch (ex) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Error("Error while trying to play audio: " + this.name + ", " + ex.message);
            }
        }
    }
    _onended() {
        this.isPlaying = false;
        this._startTime = 0;
        this._currentTime = 0;
        if (this.onended) {
            this.onended();
        }
        this.onEndedObservable.notifyObservers(this);
    }
    /**
     * Stop the sound
     * @param time (optional) Stop the sound after X seconds. Stop immediately (0) by default.
     */ stop(time) {
        if (this.isPlaying) {
            this._clearTimeoutsAndObservers();
            if (this._streaming) {
                if (this._htmlAudioElement) {
                    this._htmlAudioElement.pause();
                    // Test needed for Firefox or it will generate an Invalid State Error
                    if (this._htmlAudioElement.currentTime > 0) {
                        this._htmlAudioElement.currentTime = 0;
                    }
                } else {
                    this._streamingSource?.disconnect();
                }
                this.isPlaying = false;
            } else if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].audioEngine?.audioContext && this._soundSource) {
                const stopTime = time ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].audioEngine.audioContext.currentTime + time : undefined;
                this._soundSource.onended = ()=>{
                    this.isPlaying = false;
                    this.isPaused = false;
                    this._startTime = 0;
                    this._currentTime = 0;
                    if (this._soundSource) {
                        this._soundSource.onended = ()=>void 0;
                    }
                    this._onended();
                };
                this._soundSource.stop(stopTime);
            } else {
                this.isPlaying = false;
            }
        } else if (this.isPaused) {
            this.isPaused = false;
            this._startTime = 0;
            this._currentTime = 0;
        }
    }
    /**
     * Put the sound in pause
     */ pause() {
        if (this.isPlaying) {
            this._clearTimeoutsAndObservers();
            if (this._streaming) {
                if (this._htmlAudioElement) {
                    this._htmlAudioElement.pause();
                } else {
                    this._streamingSource?.disconnect();
                }
                this.isPlaying = false;
                this.isPaused = true;
            } else if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].audioEngine?.audioContext && this._soundSource) {
                this._soundSource.onended = ()=>void 0;
                this._soundSource.stop();
                this.isPlaying = false;
                this.isPaused = true;
                this._currentTime += __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].audioEngine.audioContext.currentTime - this._startTime;
            }
        }
    }
    /**
     * Sets a dedicated volume for this sounds
     * @param newVolume Define the new volume of the sound
     * @param time Define time for gradual change to new volume
     */ setVolume(newVolume, time) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].audioEngine?.canUseWebAudio && this._soundGain) {
            if (time && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].audioEngine.audioContext) {
                this._soundGain.gain.cancelScheduledValues(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].audioEngine.audioContext.currentTime);
                this._soundGain.gain.setValueAtTime(this._soundGain.gain.value, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].audioEngine.audioContext.currentTime);
                this._soundGain.gain.linearRampToValueAtTime(newVolume, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].audioEngine.audioContext.currentTime + time);
            } else {
                this._soundGain.gain.value = newVolume;
            }
        }
        this._volume = newVolume;
    }
    /**
     * Set the sound play back rate
     * @param newPlaybackRate Define the playback rate the sound should be played at
     */ setPlaybackRate(newPlaybackRate) {
        this._playbackRate = newPlaybackRate;
        if (this.isPlaying) {
            if (this._streaming && this._htmlAudioElement) {
                this._htmlAudioElement.playbackRate = this._playbackRate;
            } else if (this._soundSource) {
                this._soundSource.playbackRate.value = this._playbackRate;
            }
        }
    }
    /**
     * Gets the sound play back rate.
     * @returns the  play back rate of the sound
     */ getPlaybackRate() {
        return this._playbackRate;
    }
    /**
     * Gets the volume of the sound.
     * @returns the volume of the sound
     */ getVolume() {
        return this._volume;
    }
    /**
     * Attach the sound to a dedicated mesh
     * @param transformNode The transform node to connect the sound with
     * @see https://doc.babylonjs.com/features/featuresDeepDive/audio/playingSoundsMusic#attaching-a-sound-to-a-mesh
     */ attachToMesh(transformNode) {
        if (this._connectedTransformNode && this._registerFunc) {
            this._connectedTransformNode.unregisterAfterWorldMatrixUpdate(this._registerFunc);
            this._registerFunc = null;
        }
        this._connectedTransformNode = transformNode;
        if (!this._spatialSound) {
            this._spatialSound = true;
            this._createSpatialParameters();
            if (this.isPlaying && this.loop) {
                this.stop();
                this.play(0, this._offset, this._length);
            }
        }
        this._onRegisterAfterWorldMatrixUpdate(this._connectedTransformNode);
        this._registerFunc = (transformNode)=>this._onRegisterAfterWorldMatrixUpdate(transformNode);
        this._connectedTransformNode.registerAfterWorldMatrixUpdate(this._registerFunc);
    }
    /**
     * Detach the sound from the previously attached mesh
     * @see https://doc.babylonjs.com/features/featuresDeepDive/audio/playingSoundsMusic#attaching-a-sound-to-a-mesh
     */ detachFromMesh() {
        if (this._connectedTransformNode && this._registerFunc) {
            this._connectedTransformNode.unregisterAfterWorldMatrixUpdate(this._registerFunc);
            this._registerFunc = null;
            this._connectedTransformNode = null;
        }
    }
    _onRegisterAfterWorldMatrixUpdate(node) {
        if (!node.getBoundingInfo) {
            this.setPosition(node.absolutePosition);
        } else {
            const mesh = node;
            const boundingInfo = mesh.getBoundingInfo();
            this.setPosition(boundingInfo.boundingSphere.centerWorld);
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].audioEngine?.canUseWebAudio && this._isDirectional && this.isPlaying) {
            this._updateDirection();
        }
    }
    /**
     * Clone the current sound in the scene.
     * @returns the new sound clone
     */ clone() {
        if (!this._streaming) {
            const setBufferAndRun = ()=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$timingTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_RetryWithInterval"])(()=>this._isReadyToPlay, ()=>{
                    clonedSound._audioBuffer = this.getAudioBuffer();
                    clonedSound._isReadyToPlay = true;
                    if (clonedSound.autoplay) {
                        clonedSound.play(0, this._offset, this._length);
                    }
                }, undefined, 300);
            };
            const currentOptions = {
                autoplay: this.autoplay,
                loop: this.loop,
                volume: this._volume,
                spatialSound: this._spatialSound,
                maxDistance: this.maxDistance,
                useCustomAttenuation: this.useCustomAttenuation,
                rolloffFactor: this.rolloffFactor,
                refDistance: this.refDistance,
                distanceModel: this.distanceModel
            };
            const clonedSound = new Sound(this.name + "_cloned", new ArrayBuffer(0), this._scene, null, currentOptions);
            if (this.useCustomAttenuation) {
                clonedSound.setAttenuationFunction(this._customAttenuationFunction);
            }
            clonedSound.setPosition(this._position);
            clonedSound.setPlaybackRate(this._playbackRate);
            setBufferAndRun();
            return clonedSound;
        } else {
            return null;
        }
    }
    /**
     * Gets the current underlying audio buffer containing the data
     * @returns the audio buffer
     */ getAudioBuffer() {
        return this._audioBuffer;
    }
    /**
     * Gets the WebAudio AudioBufferSourceNode, lets you keep track of and stop instances of this Sound.
     * @returns the source node
     */ getSoundSource() {
        return this._soundSource;
    }
    /**
     * Gets the WebAudio GainNode, gives you precise control over the gain of instances of this Sound.
     * @returns the gain node
     */ getSoundGain() {
        return this._soundGain;
    }
    /**
     * Serializes the Sound in a JSON representation
     * @returns the JSON representation of the sound
     */ serialize() {
        const serializationObject = {
            name: this.name,
            url: this._url,
            autoplay: this.autoplay,
            loop: this.loop,
            volume: this._volume,
            spatialSound: this._spatialSound,
            maxDistance: this.maxDistance,
            rolloffFactor: this.rolloffFactor,
            refDistance: this.refDistance,
            distanceModel: this.distanceModel,
            playbackRate: this._playbackRate,
            panningModel: this._panningModel,
            soundTrackId: this.soundTrackId,
            metadata: this.metadata
        };
        if (this._spatialSound) {
            if (this._connectedTransformNode) {
                serializationObject.connectedMeshId = this._connectedTransformNode.id;
            }
            serializationObject.position = this._position.asArray();
            serializationObject.refDistance = this.refDistance;
            serializationObject.distanceModel = this.distanceModel;
            serializationObject.isDirectional = this._isDirectional;
            serializationObject.localDirectionToMesh = this._localDirection.asArray();
            serializationObject.coneInnerAngle = this._coneInnerAngle;
            serializationObject.coneOuterAngle = this._coneOuterAngle;
            serializationObject.coneOuterGain = this._coneOuterGain;
        }
        return serializationObject;
    }
    /**
     * Parse a JSON representation of a sound to instantiate in a given scene
     * @param parsedSound Define the JSON representation of the sound (usually coming from the serialize method)
     * @param scene Define the scene the new parsed sound should be created in
     * @param rootUrl Define the rooturl of the load in case we need to fetch relative dependencies
     * @param sourceSound Define a sound place holder if do not need to instantiate a new one
     * @returns the newly parsed sound
     */ static Parse(parsedSound, scene, rootUrl, sourceSound) {
        const soundName = parsedSound.name;
        let soundUrl;
        if (parsedSound.url) {
            soundUrl = rootUrl + parsedSound.url;
        } else {
            soundUrl = rootUrl + soundName;
        }
        const options = {
            autoplay: parsedSound.autoplay,
            loop: parsedSound.loop,
            volume: parsedSound.volume,
            spatialSound: parsedSound.spatialSound,
            maxDistance: parsedSound.maxDistance,
            rolloffFactor: parsedSound.rolloffFactor,
            refDistance: parsedSound.refDistance,
            distanceModel: parsedSound.distanceModel,
            playbackRate: parsedSound.playbackRate
        };
        let newSound;
        if (!sourceSound) {
            newSound = new Sound(soundName, soundUrl, scene, ()=>{
                scene.removePendingData(newSound);
            }, options);
            scene.addPendingData(newSound);
        } else {
            const setBufferAndRun = ()=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$timingTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_RetryWithInterval"])(()=>sourceSound._isReadyToPlay, ()=>{
                    newSound._audioBuffer = sourceSound.getAudioBuffer();
                    newSound._isReadyToPlay = true;
                    if (newSound.autoplay) {
                        newSound.play(0, newSound._offset, newSound._length);
                    }
                }, undefined, 300);
            };
            newSound = new Sound(soundName, new ArrayBuffer(0), scene, null, options);
            setBufferAndRun();
        }
        if (parsedSound.position) {
            const soundPosition = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].FromArray(parsedSound.position);
            newSound.setPosition(soundPosition);
        }
        if (parsedSound.isDirectional) {
            newSound.setDirectionalCone(parsedSound.coneInnerAngle || 360, parsedSound.coneOuterAngle || 360, parsedSound.coneOuterGain || 0);
            if (parsedSound.localDirectionToMesh) {
                const localDirectionToMesh = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].FromArray(parsedSound.localDirectionToMesh);
                newSound.setLocalDirectionToMesh(localDirectionToMesh);
            }
        }
        if (parsedSound.connectedMeshId) {
            const connectedMesh = scene.getMeshById(parsedSound.connectedMeshId);
            if (connectedMesh) {
                newSound.attachToMesh(connectedMesh);
            }
        }
        if (parsedSound.metadata) {
            newSound.metadata = parsedSound.metadata;
        }
        return newSound;
    }
    _setOffset(value) {
        if (this._offset === value) {
            return;
        }
        if (this.isPaused) {
            this.stop();
            this.isPaused = false;
        }
        this._offset = value;
    }
    _clearTimeoutsAndObservers() {
        if (this._tryToPlayTimeout) {
            clearTimeout(this._tryToPlayTimeout);
            this._tryToPlayTimeout = null;
        }
        if (this._audioUnlockedObserver) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].audioEngine?.onAudioUnlockedObservable.remove(this._audioUnlockedObserver);
            this._audioUnlockedObserver = null;
        }
    }
}
/**
 * @internal
 */ Sound._SceneComponentInitialization = (_)=>{
    throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$devTools$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_WarnImport"])("AudioSceneComponent");
};
// Register Class Name
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$typeStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterClass"])("BABYLON.Sound", Sound); //# sourceMappingURL=sound.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Audio/soundTrack.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SoundTrack",
    ()=>SoundTrack
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/engineStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/abstractEngine.js [app-ssr] (ecmascript)");
;
;
class SoundTrack {
    /**
     * Creates a new sound track.
     * @see https://doc.babylonjs.com/features/featuresDeepDive/audio/playingSoundsMusic#using-sound-tracks
     * @param scene Define the scene the sound track belongs to
     * @param options
     */ constructor(scene, options = {}){
        /**
         * The unique identifier of the sound track in the scene.
         */ this.id = -1;
        this._isInitialized = false;
        scene = scene || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EngineStore"].LastCreatedScene;
        if (!scene) {
            return;
        }
        this._scene = scene;
        this.soundCollection = [];
        this._options = options;
        if (!this._options.mainTrack && this._scene.soundTracks) {
            this._scene.soundTracks.push(this);
            this.id = this._scene.soundTracks.length - 1;
        }
    }
    _initializeSoundTrackAudioGraph() {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].audioEngine?.canUseWebAudio && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].audioEngine.audioContext) {
            this._outputAudioNode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].audioEngine.audioContext.createGain();
            this._outputAudioNode.connect(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].audioEngine.masterGain);
            if (this._options) {
                if (this._options.volume) {
                    this._outputAudioNode.gain.value = this._options.volume;
                }
            }
            this._isInitialized = true;
        }
    }
    /**
     * Release the sound track and its associated resources
     */ dispose() {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].audioEngine && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].audioEngine.canUseWebAudio) {
            if (this._connectedAnalyser) {
                this._connectedAnalyser.stopDebugCanvas();
            }
            while(this.soundCollection.length){
                this.soundCollection[0].dispose();
            }
            if (this._outputAudioNode) {
                this._outputAudioNode.disconnect();
            }
            this._outputAudioNode = null;
        }
    }
    /**
     * Adds a sound to this sound track
     * @param sound define the sound to add
     * @ignoreNaming
     */ addSound(sound) {
        if (!this._isInitialized) {
            this._initializeSoundTrackAudioGraph();
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].audioEngine?.canUseWebAudio && this._outputAudioNode) {
            sound.connectToSoundTrackAudioNode(this._outputAudioNode);
        }
        if (sound.soundTrackId !== undefined) {
            if (sound.soundTrackId === -1) {
                this._scene.mainSoundTrack.removeSound(sound);
            } else if (this._scene.soundTracks) {
                this._scene.soundTracks[sound.soundTrackId].removeSound(sound);
            }
        }
        this.soundCollection.push(sound);
        sound.soundTrackId = this.id;
    }
    /**
     * Removes a sound to this sound track
     * @param sound define the sound to remove
     * @ignoreNaming
     */ removeSound(sound) {
        const index = this.soundCollection.indexOf(sound);
        if (index !== -1) {
            this.soundCollection.splice(index, 1);
        }
    }
    /**
     * Set a global volume for the full sound track.
     * @param newVolume Define the new volume of the sound track
     */ setVolume(newVolume) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].audioEngine?.canUseWebAudio && this._outputAudioNode) {
            this._outputAudioNode.gain.value = newVolume;
        }
    }
    /**
     * Switch the panning model to HRTF:
     * Renders a stereo output of higher quality than equalpower — it uses a convolution with measured impulse responses from human subjects.
     * @see https://doc.babylonjs.com/features/featuresDeepDive/audio/playingSoundsMusic#creating-a-spatial-3d-sound
     */ switchPanningModelToHRTF() {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].audioEngine?.canUseWebAudio) {
            for(let i = 0; i < this.soundCollection.length; i++){
                this.soundCollection[i].switchPanningModelToHRTF();
            }
        }
    }
    /**
     * Switch the panning model to Equal Power:
     * Represents the equal-power panning algorithm, generally regarded as simple and efficient. equalpower is the default value.
     * @see https://doc.babylonjs.com/features/featuresDeepDive/audio/playingSoundsMusic#creating-a-spatial-3d-sound
     */ switchPanningModelToEqualPower() {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].audioEngine?.canUseWebAudio) {
            for(let i = 0; i < this.soundCollection.length; i++){
                this.soundCollection[i].switchPanningModelToEqualPower();
            }
        }
    }
    /**
     * Connect the sound track to an audio analyser allowing some amazing
     * synchronization between the sounds/music and your visualization (VuMeter for instance).
     * @see https://doc.babylonjs.com/features/featuresDeepDive/audio/playingSoundsMusic#using-the-analyser
     * @param analyser The analyser to connect to the engine
     */ connectToAnalyser(analyser) {
        if (this._connectedAnalyser) {
            this._connectedAnalyser.stopDebugCanvas();
        }
        this._connectedAnalyser = analyser;
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].audioEngine?.canUseWebAudio && this._outputAudioNode) {
            this._outputAudioNode.disconnect();
            this._connectedAnalyser.connectAudioNodes(this._outputAudioNode, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].audioEngine.masterGain);
        }
    }
} //# sourceMappingURL=soundTrack.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Audio/audioSceneComponent.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AudioSceneComponent",
    ()=>AudioSceneComponent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Audio$2f$sound$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Audio/sound.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Audio$2f$soundTrack$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Audio/soundTrack.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Maths/math.vector.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$sceneComponent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/sceneComponent.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$scene$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/scene.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Audio$2f$audioEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Audio/audioEngine.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$precisionDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/precisionDate.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/engineStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Engines/abstractEngine.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Loading$2f$Plugins$2f$babylonFileParser$2e$function$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Loading/Plugins/babylonFileParser.function.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
// Adds the parser to the scene parsers.
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Loading$2f$Plugins$2f$babylonFileParser$2e$function$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AddParser"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$sceneComponent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SceneComponentConstants"].NAME_AUDIO, (parsedData, scene, container, rootUrl)=>{
    // TODO: add sound
    let loadedSounds = [];
    let loadedSound;
    container.sounds = container.sounds || [];
    if (parsedData.sounds !== undefined && parsedData.sounds !== null) {
        for(let index = 0, cache = parsedData.sounds.length; index < cache; index++){
            const parsedSound = parsedData.sounds[index];
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].audioEngine?.canUseWebAudio) {
                if (!parsedSound.url) {
                    parsedSound.url = parsedSound.name;
                }
                if (!loadedSounds[parsedSound.url]) {
                    loadedSound = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Audio$2f$sound$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sound"].Parse(parsedSound, scene, rootUrl);
                    loadedSounds[parsedSound.url] = loadedSound;
                    container.sounds.push(loadedSound);
                } else {
                    container.sounds.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Audio$2f$sound$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sound"].Parse(parsedSound, scene, rootUrl, loadedSounds[parsedSound.url]));
                }
            } else {
                container.sounds.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Audio$2f$sound$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sound"](parsedSound.name, null, scene));
            }
        }
    }
    loadedSounds = [];
});
Object.defineProperty(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$scene$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Scene"].prototype, "mainSoundTrack", {
    get: function() {
        let compo = this._getComponent(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$sceneComponent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SceneComponentConstants"].NAME_AUDIO);
        if (!compo) {
            compo = new AudioSceneComponent(this);
            this._addComponent(compo);
        }
        if (!this._mainSoundTrack) {
            this._mainSoundTrack = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Audio$2f$soundTrack$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SoundTrack"](this, {
                mainTrack: true
            });
        }
        return this._mainSoundTrack;
    },
    enumerable: true,
    configurable: true
});
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$scene$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Scene"].prototype.getSoundByName = function(name) {
    let index;
    for(index = 0; index < this.mainSoundTrack.soundCollection.length; index++){
        if (this.mainSoundTrack.soundCollection[index].name === name) {
            return this.mainSoundTrack.soundCollection[index];
        }
    }
    if (this.soundTracks) {
        for(let sdIndex = 0; sdIndex < this.soundTracks.length; sdIndex++){
            for(index = 0; index < this.soundTracks[sdIndex].soundCollection.length; index++){
                if (this.soundTracks[sdIndex].soundCollection[index].name === name) {
                    return this.soundTracks[sdIndex].soundCollection[index];
                }
            }
        }
    }
    return null;
};
Object.defineProperty(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$scene$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Scene"].prototype, "audioEnabled", {
    get: function() {
        let compo = this._getComponent(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$sceneComponent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SceneComponentConstants"].NAME_AUDIO);
        if (!compo) {
            compo = new AudioSceneComponent(this);
            this._addComponent(compo);
        }
        return compo.audioEnabled;
    },
    set: function(value) {
        let compo = this._getComponent(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$sceneComponent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SceneComponentConstants"].NAME_AUDIO);
        if (!compo) {
            compo = new AudioSceneComponent(this);
            this._addComponent(compo);
        }
        if (value) {
            compo.enableAudio();
        } else {
            compo.disableAudio();
        }
    },
    enumerable: true,
    configurable: true
});
Object.defineProperty(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$scene$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Scene"].prototype, "headphone", {
    get: function() {
        let compo = this._getComponent(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$sceneComponent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SceneComponentConstants"].NAME_AUDIO);
        if (!compo) {
            compo = new AudioSceneComponent(this);
            this._addComponent(compo);
        }
        return compo.headphone;
    },
    set: function(value) {
        let compo = this._getComponent(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$sceneComponent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SceneComponentConstants"].NAME_AUDIO);
        if (!compo) {
            compo = new AudioSceneComponent(this);
            this._addComponent(compo);
        }
        if (value) {
            compo.switchAudioModeForHeadphones();
        } else {
            compo.switchAudioModeForNormalSpeakers();
        }
    },
    enumerable: true,
    configurable: true
});
Object.defineProperty(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$scene$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Scene"].prototype, "audioListenerPositionProvider", {
    get: function() {
        let compo = this._getComponent(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$sceneComponent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SceneComponentConstants"].NAME_AUDIO);
        if (!compo) {
            compo = new AudioSceneComponent(this);
            this._addComponent(compo);
        }
        return compo.audioListenerPositionProvider;
    },
    set: function(value) {
        let compo = this._getComponent(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$sceneComponent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SceneComponentConstants"].NAME_AUDIO);
        if (!compo) {
            compo = new AudioSceneComponent(this);
            this._addComponent(compo);
        }
        if (value && typeof value !== "function") {
            throw new Error("The value passed to [Scene.audioListenerPositionProvider] must be a function that returns a Vector3");
        } else {
            compo.audioListenerPositionProvider = value;
        }
    },
    enumerable: true,
    configurable: true
});
Object.defineProperty(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$scene$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Scene"].prototype, "audioListenerRotationProvider", {
    get: function() {
        let compo = this._getComponent(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$sceneComponent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SceneComponentConstants"].NAME_AUDIO);
        if (!compo) {
            compo = new AudioSceneComponent(this);
            this._addComponent(compo);
        }
        return compo.audioListenerRotationProvider;
    },
    set: function(value) {
        let compo = this._getComponent(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$sceneComponent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SceneComponentConstants"].NAME_AUDIO);
        if (!compo) {
            compo = new AudioSceneComponent(this);
            this._addComponent(compo);
        }
        if (value && typeof value !== "function") {
            throw new Error("The value passed to [Scene.audioListenerRotationProvider] must be a function that returns a Vector3");
        } else {
            compo.audioListenerRotationProvider = value;
        }
    },
    enumerable: true,
    configurable: true
});
Object.defineProperty(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$scene$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Scene"].prototype, "audioPositioningRefreshRate", {
    get: function() {
        let compo = this._getComponent(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$sceneComponent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SceneComponentConstants"].NAME_AUDIO);
        if (!compo) {
            compo = new AudioSceneComponent(this);
            this._addComponent(compo);
        }
        return compo.audioPositioningRefreshRate;
    },
    set: function(value) {
        let compo = this._getComponent(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$sceneComponent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SceneComponentConstants"].NAME_AUDIO);
        if (!compo) {
            compo = new AudioSceneComponent(this);
            this._addComponent(compo);
        }
        compo.audioPositioningRefreshRate = value;
    },
    enumerable: true,
    configurable: true
});
class AudioSceneComponent {
    /**
     * Gets whether audio is enabled or not.
     * Please use related enable/disable method to switch state.
     */ get audioEnabled() {
        return this._audioEnabled;
    }
    /**
     * Gets whether audio is outputting to headphone or not.
     * Please use the according Switch methods to change output.
     */ get headphone() {
        return this._headphone;
    }
    /**
     * Creates a new instance of the component for the given scene
     * @param scene Defines the scene to register the component in
     */ constructor(scene){
        /**
         * The component name helpful to identify the component in the list of scene components.
         */ this.name = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$sceneComponent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SceneComponentConstants"].NAME_AUDIO;
        this._audioEnabled = true;
        this._headphone = false;
        /**
         * Gets or sets a refresh rate when using 3D audio positioning
         */ this.audioPositioningRefreshRate = 500;
        /**
         * Gets or Sets a custom listener position for all sounds in the scene
         * By default, this is the position of the first active camera
         */ this.audioListenerPositionProvider = null;
        /**
         * Gets or Sets a custom listener rotation for all sounds in the scene
         * By default, this is the rotation of the first active camera
         */ this.audioListenerRotationProvider = null;
        this._cachedCameraDirection = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]();
        this._cachedCameraPosition = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]();
        this._lastCheck = 0;
        this._invertMatrixTemp = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix"]();
        this._cameraDirectionTemp = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]();
        scene = scene || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$engineStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EngineStore"].LastCreatedScene;
        if (!scene) {
            return;
        }
        this.scene = scene;
        scene.soundTracks = [];
        scene.sounds = [];
    }
    /**
     * Registers the component in a given scene
     */ register() {
        this.scene._afterRenderStage.registerStep(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$sceneComponent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SceneComponentConstants"].STEP_AFTERRENDER_AUDIO, this, this._afterRender);
    }
    /**
     * Rebuilds the elements related to this component in case of
     * context lost for instance.
     */ rebuild() {
    // Nothing to do here. (Not rendering related)
    }
    /**
     * Serializes the component data to the specified json object
     * @param serializationObject The object to serialize to
     */ serialize(serializationObject) {
        serializationObject.sounds = [];
        if (this.scene.soundTracks) {
            for(let index = 0; index < this.scene.soundTracks.length; index++){
                const soundtrack = this.scene.soundTracks[index];
                for(let soundId = 0; soundId < soundtrack.soundCollection.length; soundId++){
                    serializationObject.sounds.push(soundtrack.soundCollection[soundId].serialize());
                }
            }
        }
    }
    /**
     * Adds all the elements from the container to the scene
     * @param container the container holding the elements
     */ addFromContainer(container) {
        if (!container.sounds) {
            return;
        }
        for (const sound of container.sounds){
            sound.play();
            sound.autoplay = true;
            this.scene.mainSoundTrack.addSound(sound);
        }
    }
    /**
     * Removes all the elements in the container from the scene
     * @param container contains the elements to remove
     * @param dispose if the removed element should be disposed (default: false)
     */ removeFromContainer(container, dispose = false) {
        if (!container.sounds) {
            return;
        }
        for (const sound of container.sounds){
            sound.stop();
            sound.autoplay = false;
            this.scene.mainSoundTrack.removeSound(sound);
            if (dispose) {
                sound.dispose();
            }
        }
    }
    /**
     * Disposes the component and the associated resources.
     */ dispose() {
        const scene = this.scene;
        if (scene._mainSoundTrack) {
            scene.mainSoundTrack.dispose();
        }
        if (scene.soundTracks) {
            for(let scIndex = 0; scIndex < scene.soundTracks.length; scIndex++){
                scene.soundTracks[scIndex].dispose();
            }
        }
    }
    /**
     * Disables audio in the associated scene.
     */ disableAudio() {
        const scene = this.scene;
        this._audioEnabled = false;
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].audioEngine && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].audioEngine.audioContext) {
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].audioEngine.audioContext.suspend();
        }
        let i;
        for(i = 0; i < scene.mainSoundTrack.soundCollection.length; i++){
            scene.mainSoundTrack.soundCollection[i].pause();
        }
        if (scene.soundTracks) {
            for(i = 0; i < scene.soundTracks.length; i++){
                for(let j = 0; j < scene.soundTracks[i].soundCollection.length; j++){
                    scene.soundTracks[i].soundCollection[j].pause();
                }
            }
        }
    }
    /**
     * Enables audio in the associated scene.
     */ enableAudio() {
        const scene = this.scene;
        this._audioEnabled = true;
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].audioEngine && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].audioEngine.audioContext) {
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].audioEngine.audioContext.resume();
        }
        let i;
        for(i = 0; i < scene.mainSoundTrack.soundCollection.length; i++){
            if (scene.mainSoundTrack.soundCollection[i].isPaused) {
                scene.mainSoundTrack.soundCollection[i].play();
            }
        }
        if (scene.soundTracks) {
            for(i = 0; i < scene.soundTracks.length; i++){
                for(let j = 0; j < scene.soundTracks[i].soundCollection.length; j++){
                    if (scene.soundTracks[i].soundCollection[j].isPaused) {
                        scene.soundTracks[i].soundCollection[j].play();
                    }
                }
            }
        }
    }
    /**
     * Switch audio to headphone output.
     */ switchAudioModeForHeadphones() {
        const scene = this.scene;
        this._headphone = true;
        scene.mainSoundTrack.switchPanningModelToHRTF();
        if (scene.soundTracks) {
            for(let i = 0; i < scene.soundTracks.length; i++){
                scene.soundTracks[i].switchPanningModelToHRTF();
            }
        }
    }
    /**
     * Switch audio to normal speakers.
     */ switchAudioModeForNormalSpeakers() {
        const scene = this.scene;
        this._headphone = false;
        scene.mainSoundTrack.switchPanningModelToEqualPower();
        if (scene.soundTracks) {
            for(let i = 0; i < scene.soundTracks.length; i++){
                scene.soundTracks[i].switchPanningModelToEqualPower();
            }
        }
    }
    _afterRender() {
        const now = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$precisionDate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PrecisionDate"].Now;
        if (this._lastCheck && now - this._lastCheck < this.audioPositioningRefreshRate) {
            return;
        }
        this._lastCheck = now;
        const scene = this.scene;
        if (!this._audioEnabled || !scene._mainSoundTrack || !scene.soundTracks || scene._mainSoundTrack.soundCollection.length === 0 && scene.soundTracks.length === 1) {
            return;
        }
        const audioEngine = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Engines$2f$abstractEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AbstractEngine"].audioEngine;
        if (!audioEngine) {
            return;
        }
        if (audioEngine.audioContext) {
            let listeningCamera = scene.activeCamera;
            if (scene.activeCameras && scene.activeCameras.length > 0) {
                listeningCamera = scene.activeCameras[0];
            }
            // A custom listener position provider was set
            // Use the users provided position instead of camera's
            if (this.audioListenerPositionProvider) {
                const position = this.audioListenerPositionProvider();
                // Set the listener position
                audioEngine.audioContext.listener.setPosition(position.x || 0, position.y || 0, position.z || 0);
            // Check if there is a listening camera
            } else if (listeningCamera) {
                // Set the listener position to the listening camera global position
                if (!this._cachedCameraPosition.equals(listeningCamera.globalPosition)) {
                    this._cachedCameraPosition.copyFrom(listeningCamera.globalPosition);
                    audioEngine.audioContext.listener.setPosition(listeningCamera.globalPosition.x, listeningCamera.globalPosition.y, listeningCamera.globalPosition.z);
                }
            } else {
                // Set the listener position
                audioEngine.audioContext.listener.setPosition(0, 0, 0);
            }
            // A custom listener rotation provider was set
            // Use the users provided rotation instead of camera's
            if (this.audioListenerRotationProvider) {
                const rotation = this.audioListenerRotationProvider();
                audioEngine.audioContext.listener.setOrientation(rotation.x || 0, rotation.y || 0, rotation.z || 0, 0, 1, 0);
            // Check if there is a listening camera
            } else if (listeningCamera) {
                // for VR cameras
                if (listeningCamera.rigCameras && listeningCamera.rigCameras.length > 0) {
                    listeningCamera = listeningCamera.rigCameras[0];
                }
                listeningCamera.getViewMatrix().invertToRef(this._invertMatrixTemp);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"].TransformNormalToRef(AudioSceneComponent._CameraDirection, this._invertMatrixTemp, this._cameraDirectionTemp);
                this._cameraDirectionTemp.normalize();
                // To avoid some errors on GearVR
                if (!isNaN(this._cameraDirectionTemp.x) && !isNaN(this._cameraDirectionTemp.y) && !isNaN(this._cameraDirectionTemp.z)) {
                    if (!this._cachedCameraDirection.equals(this._cameraDirectionTemp)) {
                        this._cachedCameraDirection.copyFrom(this._cameraDirectionTemp);
                        audioEngine.audioContext.listener.setOrientation(this._cameraDirectionTemp.x, this._cameraDirectionTemp.y, this._cameraDirectionTemp.z, 0, 1, 0);
                    }
                }
            } else {
                // Set the listener position
                audioEngine.audioContext.listener.setOrientation(0, 0, 0, 0, 1, 0);
            }
            let i;
            for(i = 0; i < scene.mainSoundTrack.soundCollection.length; i++){
                const sound = scene.mainSoundTrack.soundCollection[i];
                if (sound.useCustomAttenuation) {
                    sound.updateDistanceFromListener();
                }
            }
            if (scene.soundTracks) {
                for(i = 0; i < scene.soundTracks.length; i++){
                    for(let j = 0; j < scene.soundTracks[i].soundCollection.length; j++){
                        const sound = scene.soundTracks[i].soundCollection[j];
                        if (sound.useCustomAttenuation) {
                            sound.updateDistanceFromListener();
                        }
                    }
                }
            }
        }
    }
}
AudioSceneComponent._CameraDirection = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Maths$2f$math$2e$vector$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0, 0, -1);
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Audio$2f$sound$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sound"]._SceneComponentInitialization = (scene)=>{
    let compo = scene._getComponent(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$sceneComponent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SceneComponentConstants"].NAME_AUDIO);
    if (!compo) {
        compo = new AudioSceneComponent(scene);
        scene._addComponent(compo);
    }
}; //# sourceMappingURL=audioSceneComponent.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Audio/weightedsound.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WeightedSound",
    ()=>WeightedSound
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Misc/logger.js [app-ssr] (ecmascript)");
;
class WeightedSound {
    /**
     * Creates a new WeightedSound from the list of sounds given.
     * @param loop When true a Sound will be selected and played when the current playing Sound completes.
     * @param sounds Array of Sounds that will be selected from.
     * @param weights Array of number values for selection weights; length must equal sounds, values will be normalized to 1
     */ constructor(loop, sounds, weights){
        /** When true a Sound will be selected and played when the current playing Sound completes. */ this.loop = false;
        this._coneInnerAngle = 360;
        this._coneOuterAngle = 360;
        this._volume = 1;
        /** A Sound is currently playing. */ this.isPlaying = false;
        /** A Sound is currently paused. */ this.isPaused = false;
        this._sounds = [];
        this._weights = [];
        if (sounds.length !== weights.length) {
            throw new Error("Sounds length does not equal weights length");
        }
        this.loop = loop;
        this._weights = weights;
        // Normalize the weights
        let weightSum = 0;
        for (const weight of weights){
            weightSum += weight;
        }
        const invWeightSum = weightSum > 0 ? 1 / weightSum : 0;
        for(let i = 0; i < this._weights.length; i++){
            this._weights[i] *= invWeightSum;
        }
        this._sounds = sounds;
        for (const sound of this._sounds){
            sound.onEndedObservable.add(()=>{
                this._onended();
            });
        }
    }
    /**
     * The size of cone in degrees for a directional sound in which there will be no attenuation.
     */ get directionalConeInnerAngle() {
        return this._coneInnerAngle;
    }
    /**
     * The size of cone in degrees for a directional sound in which there will be no attenuation.
     */ set directionalConeInnerAngle(value) {
        if (value !== this._coneInnerAngle) {
            if (this._coneOuterAngle < value) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Error("directionalConeInnerAngle: outer angle of the cone must be superior or equal to the inner angle.");
                return;
            }
            this._coneInnerAngle = value;
            for (const sound of this._sounds){
                sound.directionalConeInnerAngle = value;
            }
        }
    }
    /**
     * Size of cone in degrees for a directional sound outside of which there will be no sound.
     * Listener angles between innerAngle and outerAngle will falloff linearly.
     */ get directionalConeOuterAngle() {
        return this._coneOuterAngle;
    }
    /**
     * Size of cone in degrees for a directional sound outside of which there will be no sound.
     * Listener angles between innerAngle and outerAngle will falloff linearly.
     */ set directionalConeOuterAngle(value) {
        if (value !== this._coneOuterAngle) {
            if (value < this._coneInnerAngle) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Misc$2f$logger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logger"].Error("directionalConeOuterAngle: outer angle of the cone must be superior or equal to the inner angle.");
                return;
            }
            this._coneOuterAngle = value;
            for (const sound of this._sounds){
                sound.directionalConeOuterAngle = value;
            }
        }
    }
    /**
     * Playback volume.
     */ get volume() {
        return this._volume;
    }
    /**
     * Playback volume.
     */ set volume(value) {
        if (value !== this._volume) {
            for (const sound of this._sounds){
                sound.setVolume(value);
            }
        }
    }
    _onended() {
        if (this._currentIndex !== undefined) {
            this._sounds[this._currentIndex].autoplay = false;
        }
        if (this.loop && this.isPlaying) {
            this.play();
        } else {
            this.isPlaying = false;
        }
    }
    /**
     * Suspend playback
     */ pause() {
        if (this.isPlaying) {
            this.isPaused = true;
            if (this._currentIndex !== undefined) {
                this._sounds[this._currentIndex].pause();
            }
        }
    }
    /**
     * Stop playback
     */ stop() {
        this.isPlaying = false;
        if (this._currentIndex !== undefined) {
            this._sounds[this._currentIndex].stop();
        }
    }
    /**
     * Start playback.
     * @param startOffset Position the clip head at a specific time in seconds.
     */ play(startOffset) {
        if (!this.isPaused) {
            this.stop();
            const randomValue = Math.random();
            let total = 0;
            for(let i = 0; i < this._weights.length; i++){
                total += this._weights[i];
                if (randomValue <= total) {
                    this._currentIndex = i;
                    break;
                }
            }
        }
        const sound = this._sounds[this._currentIndex ?? 0];
        if (sound.isReady()) {
            sound.play(0, this.isPaused ? undefined : startOffset);
        } else {
            sound.autoplay = true;
        }
        this.isPlaying = true;
        this.isPaused = false;
    }
} //# sourceMappingURL=weightedsound.js.map
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Audio/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Audio$2f$Interfaces$2f$IAudioEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Audio/Interfaces/IAudioEngine.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Audio$2f$Interfaces$2f$ISoundOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Audio/Interfaces/ISoundOptions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Audio$2f$analyser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Audio/analyser.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Audio$2f$audioEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Audio/audioEngine.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Audio$2f$audioSceneComponent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Audio/audioSceneComponent.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Audio$2f$sound$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Audio/sound.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Audio$2f$soundTrack$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Audio/soundTrack.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Audio$2f$weightedsound$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Audio/weightedsound.js [app-ssr] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
;
;
;
;
;
;
}),
"[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Audio/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Analyser",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Audio$2f$analyser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Analyser"],
    "AudioEngine",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Audio$2f$audioEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AudioEngine"],
    "AudioSceneComponent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Audio$2f$audioSceneComponent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AudioSceneComponent"],
    "Sound",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Audio$2f$sound$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sound"],
    "SoundTrack",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Audio$2f$soundTrack$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SoundTrack"],
    "WeightedSound",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Audio$2f$weightedsound$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WeightedSound"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Audio$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Audio/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Audio$2f$Interfaces$2f$IAudioEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Audio/Interfaces/IAudioEngine.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Audio$2f$Interfaces$2f$ISoundOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Audio/Interfaces/ISoundOptions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Audio$2f$analyser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Audio/analyser.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Audio$2f$audioEngine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Audio/audioEngine.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Audio$2f$audioSceneComponent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Audio/audioSceneComponent.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Audio$2f$sound$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Audio/sound.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Audio$2f$soundTrack$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Audio/soundTrack.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babylonjs$2b$core$40$8$2e$39$2e$0$2f$node_modules$2f40$babylonjs$2f$core$2f$Audio$2f$weightedsound$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@babylonjs+core@8.39.0/node_modules/@babylonjs/core/Audio/weightedsound.js [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=dcdbf_%40babylonjs_core_Audio_32a54acd._.js.map